// 인프런 강의 공개 페이지에서 수강생 수/평점을 가져와 src/data/course-stats.json 을 갱신한다.
// 원칙:
//  - 신뢰 호스트(www.inflearn.com)의 canonical URL만 fetch(allowlist).
//  - 파서·교차검증·sanity guard를 모두 통과해야 채택(잘못된 값 조용히 배포 방지).
//  - all-or-nothing: 한 강의라도 실패하면 파일을 쓰지 않고 프로세스를 실패(exit 1)로 종료(가시화).
//  - 값이 실제로 바뀐 경우에만 파일을 쓴다(불필요한 PR/재배포 방지).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { parseCourseStats, assertSanity } from "./lib/parse-course-stats.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../src/data/course-stats.json");

const ALLOWED_HOST = "www.inflearn.com";
const MAX_BYTES = 2_000_000;
const FETCH_TIMEOUT_MS = 15_000;
const MAX_RETRIES = 3;
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) flowcoder-landing-stats-bot";

// 갱신 대상 강의(슬러그 = course-stats.json 키).
const COURSES = [
  { key: "claude-code-developm", label: "유료" },
  { key: "giving-ai-its-first", label: "무료" },
];

function buildUrl(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`잘못된 슬러그: ${slug}`);
  }
  return `https://${ALLOWED_HOST}/course/${slug}`;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchCourseHtml(slug) {
  const url = buildUrl(slug);
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": USER_AGENT, "Accept-Language": "ko-KR,ko;q=0.9" },
        redirect: "follow",
        signal: controller.signal,
      });
      // 리다이렉트 최종 호스트가 신뢰 호스트인지 검증.
      const finalHost = new URL(res.url).host;
      if (finalHost !== ALLOWED_HOST) {
        throw new Error(`리다이렉트 최종 호스트가 허용 호스트가 아님: ${finalHost}`);
      }
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const cl = Number(res.headers.get("content-length"));
      if (Number.isFinite(cl) && cl > MAX_BYTES) {
        throw new Error(`Content-Length 초과: ${cl}`);
      }
      const buf = await res.arrayBuffer();
      if (buf.byteLength > MAX_BYTES) {
        throw new Error(`본문 크기 초과: ${buf.byteLength}`);
      }
      return new TextDecoder("utf-8").decode(buf);
    } catch (err) {
      lastErr = err;
      if (attempt < MAX_RETRIES) {
        await sleep(attempt * 1000); // 1s, 2s 백오프
      }
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error(`fetch 실패(${slug}): ${lastErr?.message ?? lastErr}`);
}

function loadExisting() {
  try {
    return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
  } catch {
    return { courses: {}, updatedAt: null };
  }
}

function statsEqual(a, b) {
  return (
    a &&
    b &&
    a.studentCount === b.studentCount &&
    a.ratingValue === b.ratingValue &&
    a.ratingCount === b.ratingCount
  );
}

async function main() {
  const existing = loadExisting();
  const nextCourses = {};

  // 1) 모든 강의를 fetch+parse+sanity. 하나라도 실패하면 즉시 중단(파일 미변경).
  for (const course of COURSES) {
    const html = await fetchCourseHtml(course.key);
    const parsed = parseCourseStats(html, course.key); // 슬러그 앵커 추출 + 교차검증 + 범위검증
    assertSanity(course.label, parsed, existing.courses?.[course.key]);
    nextCourses[course.key] = {
      studentCount: parsed.studentCount,
      ratingValue: parsed.ratingValue,
      ratingCount: parsed.ratingCount,
    };
    console.log(
      `[${course.label}] ${course.key}: 수강생 ${parsed.studentCount} · 평점 ${parsed.ratingValue} · 수강평 ${parsed.ratingCount}`,
    );
  }

  // 2) 변경 여부 판단(updatedAt 제외, 강의 통계만 비교).
  const changed = COURSES.some(
    (c) => !statsEqual(existing.courses?.[c.key], nextCourses[c.key]),
  );

  if (!changed) {
    console.log("변경 없음 — 파일 미수정.");
    return;
  }

  const out = {
    courses: nextCourses,
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(DATA_PATH, JSON.stringify(out, null, 2) + "\n", "utf-8");
  console.log(`갱신 완료 — ${DATA_PATH}`);
}

main().catch((err) => {
  console.error("update-course-stats 실패:", err?.message ?? err);
  process.exit(1);
});
