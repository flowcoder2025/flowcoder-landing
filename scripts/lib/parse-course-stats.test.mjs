// parse-course-stats.mjs 순수 파서 단위테스트 (node:test, 무의존성).
// 실행: node --test scripts/lib/parse-course-stats.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { parseCourseStats, assertSanity } from "./parse-course-stats.mjs";

const SLUG = "claude-code-developm";

// 강의 상세 객체(슬러그 앵커 대상). title에 중괄호/이스케이프를 일부러 포함.
function courseObject({ slug = SLUG, studentCount = 256, reviewCount = 25, averageStar = 4.6 } = {}) {
  return JSON.stringify({
    id: 341284,
    slug,
    title: 'AI "실전" {코스} — 자동화',
    studentCount,
    likeCount: 116,
    review: { isShowing: true, count: reviewCount, averageStar },
  });
}

// 추천 강의(노이즈): 자기 슬러그 + studentCount + review. 타깃과 구분되어야 함.
function recommendation({ slug = "other-course", studentCount = 4143, reviewCount = 154 } = {}) {
  return JSON.stringify({
    id: 999,
    slug,
    title: "추천 강의",
    reviewCount,
    studentCount,
    review: { count: reviewCount, averageStar: 4.8 },
  });
}

// 강사 집계(노이즈): courseCount + studentCount.
function instructorAgg({ studentCount = 1645, courseCount = 2 } = {}) {
  return JSON.stringify({ id: "uuid", courseCount, studentCount });
}

function jsonLd({ ratingValue = 4.6, ratingCount = 25, reviewCount = 25, type = "Course" } = {}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": type,
    name: "테스트 강의",
    aggregateRating: { "@type": "AggregateRating", ratingValue, reviewCount, ratingCount },
  });
}

// 전체 페이지 합성. dataBlob에 강의객체 + 노이즈들을 배열로 섞는다.
function buildHtml({ course = courseObject(), ld = jsonLd(), noise = [recommendation(), instructorAgg()] } = {}) {
  const blob = `<script id="__DATA__">self.__data={"page":{"course":${course},"recos":[${noise.join(",")}]}}</script>`;
  const ldTag = ld === null ? "" : `<script type="application/ld+json">${ld}</script>`;
  return `<html><head>${ldTag}</head><body>${blob}<div>화면 텍스트 256 명 · 수강평 25개</div></body></html>`;
}

test("정상: 슬러그 앵커로 강의 stats 추출 (노이즈 무시)", () => {
  const r = parseCourseStats(buildHtml(), SLUG);
  assert.deepEqual(r, { ratingValue: 4.6, ratingCount: 25, studentCount: 256 });
});

test("정상: 무료 강의값", () => {
  const html = buildHtml({
    course: courseObject({ slug: "giving-ai-its-first", studentCount: 1389, reviewCount: 59, averageStar: 4.9 }),
    ld: jsonLd({ ratingValue: 4.9, ratingCount: 59, reviewCount: 59 }),
  });
  const r = parseCourseStats(html, "giving-ai-its-first");
  assert.deepEqual(r, { ratingValue: 4.9, ratingCount: 59, studentCount: 1389 });
});

test("노이즈 강건성: 추천 강의 다수 + 강사 집계가 있어도 타깃만 채택", () => {
  const noise = [
    recommendation({ slug: "reco-a", studentCount: 4143, reviewCount: 154 }),
    recommendation({ slug: "reco-b", studentCount: 605, reviewCount: 71 }),
    instructorAgg({ studentCount: 1645, courseCount: 2 }),
  ];
  const r = parseCourseStats(buildHtml({ noise }), SLUG);
  assert.equal(r.studentCount, 256);
});

test("중첩/이스케이프: 강의 객체를 깊게 감싸도 경계 정확", () => {
  const wrapped = `{"a":{"b":{"c":${courseObject()}}}}`;
  const html = `<html><head><script type="application/ld+json">${jsonLd()}</script></head><body><script>self.x=${wrapped}</script><div>256 명</div></body></html>`;
  const r = parseCourseStats(html, SLUG);
  assert.equal(r.studentCount, 256);
});

test("모호성: 같은 슬러그를 가진 studentCount 객체가 2개면 throw", () => {
  const dup = [courseObject({ studentCount: 300 })]; // 같은 SLUG, 또 하나의 studentCount 객체
  assert.throws(() => parseCourseStats(buildHtml({ noise: dup }), SLUG), /정확히 1개가 아님/);
});

test("타깃 슬러그 객체 없음이면 throw", () => {
  const html = buildHtml({ course: recommendation({ slug: "not-target" }) });
  assert.throws(() => parseCourseStats(html, SLUG), /정확히 1개가 아님/);
});

test("교차검증: 강의객체 review.count ≠ JSON-LD ratingCount 면 throw", () => {
  const html = buildHtml({ ld: jsonLd({ ratingValue: 4.6, ratingCount: 30, reviewCount: 30 }) });
  assert.throws(() => parseCourseStats(html, SLUG), /review\.count.*JSON-LD ratingCount/);
});

test("교차검증: averageStar ↔ JSON-LD ratingValue 불일치면 throw", () => {
  const html = buildHtml({
    course: courseObject({ averageStar: 4.6 }),
    ld: jsonLd({ ratingValue: 4.1, ratingCount: 25, reviewCount: 25 }),
  });
  assert.throws(() => parseCourseStats(html, SLUG), /averageStar.*ratingValue.*불일치/);
});

test("rating 허용오차: averageStar 4.63 ↔ JSON-LD 4.6 은 통과", () => {
  const html = buildHtml({ course: courseObject({ averageStar: 4.63 }), ld: jsonLd({ ratingValue: 4.6 }) });
  const r = parseCourseStats(html, SLUG);
  assert.equal(r.ratingValue, 4.6);
});

test("JSON-LD 누락이면 throw(독립 교차검증 불가)", () => {
  assert.throws(() => parseCourseStats(buildHtml({ ld: null }), SLUG), /AggregateRating이 정확히 1개가 아님/);
});

test("JSON-LD가 Course 밖(리뷰/상품)에만 있으면 채택 안 함 → throw", () => {
  const ld = JSON.stringify([
    { "@type": "Review", reviewRating: { "@type": "AggregateRating", ratingValue: 5, ratingCount: 1 } },
    { "@type": "Product", aggregateRating: { "@type": "AggregateRating", ratingValue: 3.1, ratingCount: 9 } },
  ]);
  assert.throws(() => parseCourseStats(buildHtml({ ld }), SLUG), /AggregateRating이 정확히 1개가 아님/);
});

test("JSON-LD ratingCount != reviewCount 면 throw", () => {
  const ld = jsonLd({ ratingValue: 4.6, ratingCount: 25, reviewCount: 30 });
  assert.throws(() => parseCourseStats(buildHtml({ ld }), SLUG), /ratingCount.*reviewCount.*불일치/);
});

test("범위검증: averageStar > 5 면 throw", () => {
  const html = buildHtml({ course: courseObject({ averageStar: 6.1 }), ld: jsonLd({ ratingValue: 5.0 }) });
  assert.throws(() => parseCourseStats(html, SLUG), /averageStar 비정상/);
});

test("강의 객체 JSON이 깨졌으면 채택 안 함 → throw", () => {
  // studentCount는 있지만 객체가 깨진 JSON → 파싱 스킵 → 후보 0개
  const broken = `{"slug":"${SLUG}","studentCount":256,"review":{bad}}`;
  const html = `<html><head><script type="application/ld+json">${jsonLd()}</script></head><body><script>x=${broken}</script></body></html>`;
  assert.throws(() => parseCourseStats(html, SLUG), /정확히 1개가 아님/);
});

test("slug 주변 공백(pretty-print)이어도 파싱 기반 매칭으로 통과", () => {
  const pretty = JSON.stringify(JSON.parse(courseObject()), null, 2);
  const html = `<html><head><script type="application/ld+json">${jsonLd()}</script></head><body><script>x=${pretty}</script></body></html>`;
  const r = parseCourseStats(html, SLUG);
  assert.equal(r.studentCount, 256);
});

test("JSON-LD ratingValue 누락이면 throw(NaN 교차검증 우회 차단)", () => {
  const ld = JSON.stringify({
    "@type": "Course",
    aggregateRating: { "@type": "AggregateRating", ratingCount: 25, reviewCount: 25 },
  });
  assert.throws(() => parseCourseStats(buildHtml({ ld }), SLUG), /ratingValue 비정상/);
});

test("JSON-LD ratingValue 비숫자면 throw", () => {
  const ld = JSON.stringify({
    "@type": "Course",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "-", ratingCount: 25, reviewCount: 25 },
  });
  assert.throws(() => parseCourseStats(buildHtml({ ld }), SLUG), /ratingValue 비정상/);
});

test("Course JSON-LD가 2개면 throw(모호)", () => {
  const ld = JSON.stringify([
    { "@type": "Course", aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, ratingCount: 25, reviewCount: 25 } },
    { "@type": "Course", aggregateRating: { "@type": "AggregateRating", ratingValue: 4.2, ratingCount: 10, reviewCount: 10 } },
  ]);
  assert.throws(() => parseCourseStats(buildHtml({ ld }), SLUG), /AggregateRating이 정확히 1개가 아님/);
});

test("잘못된 slug 인자면 throw", () => {
  assert.throws(() => parseCourseStats(buildHtml(), "Bad Slug!"), /잘못된 slug/);
});

test("빈 html이면 throw", () => {
  assert.throws(() => parseCourseStats("", SLUG), /입력이 비어 있음/);
});

// ── assertSanity ──────────────────────────────────────────────
test("sanity: prev 없으면(최초 실행) 통과", () => {
  assert.doesNotThrow(() => assertSanity("x", { studentCount: 1, ratingCount: 0 }, null));
});

test("sanity: 증가는 허용(바이럴)", () => {
  assert.doesNotThrow(() =>
    assertSanity("x", { studentCount: 5000, ratingCount: 200 }, { studentCount: 1389, ratingCount: 59 }),
  );
});

test("sanity: 실측 수준 소폭 감소(1389→1372)는 통과", () => {
  assert.doesNotThrow(() =>
    assertSanity("무료", { studentCount: 1372, ratingCount: 59 }, { studentCount: 1389, ratingCount: 59 }),
  );
});

test("sanity: 20% 초과 급락은 throw(파싱 회귀 의심)", () => {
  assert.throws(
    () => assertSanity("무료", { studentCount: 605, ratingCount: 59 }, { studentCount: 1389, ratingCount: 59 }),
    /studentCount 급락 의심/,
  );
});

test("sanity: ratingCount 급락도 throw", () => {
  assert.throws(
    () => assertSanity("x", { studentCount: 1389, ratingCount: 10 }, { studentCount: 1389, ratingCount: 59 }),
    /ratingCount 급락 의심/,
  );
});
