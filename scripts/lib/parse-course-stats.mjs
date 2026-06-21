// 인프런 강의 페이지 HTML에서 수강생 수 / 평점을 추출하는 순수 파서.
// 네트워크에 의존하지 않으며, 입력(html 문자열 + slug)만으로 결정적으로 동작한다.
//
// 두 개의 독립 구조화 소스를 사용하고, 둘이 일치할 때만 채택한다(잘못된 값 조용히 배포 방지):
//   1) 슬러그로 앵커링한 "강의 상세 객체"(React Query dehydrated state 내 JSON 객체)
//      → studentCount, review.count, review.averageStar
//   2) JSON-LD <script type="application/ld+json"> 의 Course.aggregateRating
//      → ratingValue, ratingCount  (1)과 교차검증용 독립 신호
// 추출 실패·모호·두 소스 불일치 시 throw 한다.

const MAX_HTML_BYTES = 2_000_000; // 입력 크기 cap (untrusted HTML 방어)
const RATING_TOLERANCE = 0.05; // averageStar(소수 정밀) vs JSON-LD ratingValue(소수1자리) 허용 오차

/**
 * 문자열/이스케이프를 인식하며 targetIdx를 포함하는 "최소 객체"의 substring을 반환.
 * 내부 객체가 외부 객체보다 먼저 닫히므로, targetIdx를 포함한 채 가장 먼저 닫히는 객체가 최소(innermost) 객체다.
 * 문자열 내부의 중괄호/escape는 무시한다. 경계 산출 실패 시 null.
 */
function enclosingObject(html, targetIdx) {
  const stack = [];
  let inStr = false;
  let esc = false;
  for (let i = 0; i < html.length; i++) {
    const c = html[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') {
      inStr = true;
      continue;
    }
    if (c === "{") {
      stack.push(i);
    } else if (c === "}") {
      const start = stack.pop();
      if (start !== undefined && start <= targetIdx && targetIdx <= i) {
        return html.slice(start, i + 1);
      }
    }
  }
  return null;
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

/**
 * 슬러그로 앵커링한 "강의 상세 객체"를 찾아 JSON.parse 한다.
 * - 모든 `"studentCount":N` 위치의 최소 포함 객체 중, `"slug":"<slug>"`를 담은 것만 후보.
 * - 후보가 정확히 1개가 아니면 throw(추천 강의/강사 집계 노이즈와 구분).
 * - 그 객체를 JSON.parse 하여 { studentCount, review:{count, averageStar} } 형태를 검증.
 */
function extractCourseObject(html, slug) {
  const slugToken = `"slug":"${slug}"`;
  const keyRe = /"studentCount"\s*:\s*\d+/g;
  const matched = [];
  let m;
  while ((m = keyRe.exec(html)) !== null) {
    const obj = enclosingObject(html, m.index);
    if (obj === null) {
      throw new Error("studentCount: 포함 객체 경계 산출 실패");
    }
    if (obj.includes(slugToken)) {
      matched.push(obj);
    }
  }
  if (matched.length !== 1) {
    throw new Error(
      `강의 상세 객체: 슬러그 "${slug}"로 앵커된 studentCount 객체가 정확히 1개가 아님 (개수: ${matched.length})`,
    );
  }

  let parsed;
  try {
    parsed = JSON.parse(matched[0]);
  } catch (err) {
    throw new Error(`강의 상세 객체: JSON 파싱 실패 (${err.message})`);
  }

  if (parsed.slug !== slug) {
    throw new Error(`강의 상세 객체: slug 불일치 (기대 ${slug}, 실제 ${parsed.slug})`);
  }
  const studentCount = parsed.studentCount;
  const review = parsed.review;
  if (!review || typeof review !== "object") {
    throw new Error("강의 상세 객체: review 필드 없음");
  }
  return {
    studentCount,
    ratingCount: review.count,
    averageStar: review.averageStar,
  };
}

/** JSON-LD에서 @type:"Course" 객체에 귀속된 aggregateRating만 모은다. */
function collectCourseRatings(node, out) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const item of node) collectCourseRatings(item, out);
    return;
  }
  const type = node["@type"];
  const isCourse = type === "Course" || (Array.isArray(type) && type.includes("Course"));
  if (isCourse && node.aggregateRating && typeof node.aggregateRating === "object") {
    out.push(node.aggregateRating);
  }
  for (const key of Object.keys(node)) collectCourseRatings(node[key], out);
}

/**
 * JSON-LD에서 Course 귀속 AggregateRating을 추출(독립 교차검증용).
 * 정확히 1개일 때만 채택하고, ratingCount/reviewCount가 둘 다 있으면 일치해야 한다.
 */
function extractJsonLdRating(html) {
  const blockRe = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  const ratings = [];
  let m;
  while ((m = blockRe.exec(html)) !== null) {
    let json;
    try {
      json = JSON.parse(m[1].trim());
    } catch {
      continue; // 깨진 블록은 건너뜀
    }
    collectCourseRatings(json, ratings);
  }
  if (ratings.length !== 1) {
    throw new Error(`JSON-LD: Course 귀속 AggregateRating이 정확히 1개가 아님 (개수: ${ratings.length})`);
  }
  const agg = ratings[0];
  if (
    agg.ratingCount != null &&
    agg.reviewCount != null &&
    Number(agg.ratingCount) !== Number(agg.reviewCount)
  ) {
    throw new Error(`JSON-LD: ratingCount(${agg.ratingCount})와 reviewCount(${agg.reviewCount}) 불일치`);
  }
  return {
    ratingValue: Number(agg.ratingValue),
    ratingCount: Number(agg.ratingCount ?? agg.reviewCount),
  };
}

/**
 * 인프런 강의 HTML에서 {ratingValue, ratingCount, studentCount}를 추출한다.
 * 강의 상세 객체와 JSON-LD 두 독립 소스가 일치해야 반환하고, 아니면 throw.
 * @param {string} html
 * @param {string} slug 강의 슬러그(앵커링 키)
 * @returns {{ ratingValue: number, ratingCount: number, studentCount: number }}
 */
export function parseCourseStats(html, slug) {
  if (typeof html !== "string" || html.length === 0) {
    throw new Error("parseCourseStats: html 입력이 비어 있음");
  }
  if (html.length > MAX_HTML_BYTES) {
    throw new Error(`parseCourseStats: html 크기 초과 (${html.length} > ${MAX_HTML_BYTES})`);
  }
  if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`parseCourseStats: 잘못된 slug (${slug})`);
  }

  const course = extractCourseObject(html, slug);
  const ld = extractJsonLdRating(html);

  // 범위 검증 (강의 상세 객체 기준)
  const studentCount = course.studentCount;
  const ratingCount = course.ratingCount;
  const averageStar = course.averageStar;
  if (!Number.isInteger(studentCount) || studentCount < 1) {
    throw new Error(`범위검증: studentCount 비정상 (${studentCount})`);
  }
  if (!Number.isInteger(ratingCount) || ratingCount < 0) {
    throw new Error(`범위검증: review.count 비정상 (${ratingCount})`);
  }
  if (!Number.isFinite(averageStar) || averageStar < 0 || averageStar > 5) {
    throw new Error(`범위검증: review.averageStar 비정상 (${averageStar})`);
  }

  // 두 독립 소스 교차검증: review.count == JSON-LD ratingCount, averageStar ≈ JSON-LD ratingValue
  if (ratingCount !== ld.ratingCount) {
    throw new Error(`교차검증: 강의객체 review.count(${ratingCount}) ≠ JSON-LD ratingCount(${ld.ratingCount})`);
  }
  if (Math.abs(round1(averageStar) - ld.ratingValue) > RATING_TOLERANCE) {
    throw new Error(
      `교차검증: 강의객체 averageStar(${averageStar}) ↔ JSON-LD ratingValue(${ld.ratingValue}) 불일치`,
    );
  }

  return {
    ratingValue: round1(averageStar),
    ratingCount,
    studentCount,
  };
}

// last-good 대비 sanity guard 임계값.
// 슬러그 앵커링이 1차 방어이므로 sanity는 2차 방어다. 실측상 무료 강의 수강생은 주간 ~1% 변동이 정상이고
// 환불/탈퇴로 소폭 감소도 가능하므로, "20% 초과 급락"만 파싱 회귀 신호로 보고 거부한다(정상 churn 오거부 방지).
const STUDENT_DROP_RATIO = 0.8;
const REVIEW_DROP_RATIO = 0.8;

/**
 * 직전 값(prev) 대비 신규 값(next)의 sanity를 검사한다. 통과 못 하면 throw.
 * prev가 없으면(최초 실행/신규 강의) 통과. 증가는 허용(무료 강의 바이럴 등).
 * @param {string} label 강의 라벨(에러 메시지용)
 * @param {{studentCount:number, ratingCount:number}} next
 * @param {{studentCount:number, ratingCount:number}|undefined|null} prev
 */
export function assertSanity(label, next, prev) {
  if (!prev) return;
  const studentFloor = Math.floor(prev.studentCount * STUDENT_DROP_RATIO);
  if (next.studentCount < studentFloor) {
    throw new Error(
      `[${label}] studentCount 급락 의심: ${prev.studentCount} → ${next.studentCount} (하한 ${studentFloor})`,
    );
  }
  const reviewFloor = Math.floor(prev.ratingCount * REVIEW_DROP_RATIO);
  if (next.ratingCount < reviewFloor) {
    throw new Error(
      `[${label}] ratingCount 급락 의심: ${prev.ratingCount} → ${next.ratingCount} (하한 ${reviewFloor})`,
    );
  }
}

// 내부 함수도 테스트에서 쓸 수 있게 노출.
export const __internal = { enclosingObject, round1, STUDENT_DROP_RATIO, REVIEW_DROP_RATIO };
