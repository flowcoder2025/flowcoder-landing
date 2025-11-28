import {
  Hero,
  Metrics,
  WhatWeBuild,
  Portfolio,
  TechStack,
  Services,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* [1] HERO — WHY */}
      <Hero />

      {/* [2] METRICS — 신뢰 지표 */}
      <Metrics />

      {/* [3] WHAT — 3 카테고리 */}
      <WhatWeBuild />

      {/* [4] PORTFOLIO — 9개 프로젝트 쇼케이스 */}
      <Portfolio />

      {/* [5] HOW — 기술 스택 */}
      <TechStack />

      {/* [6] SERVICES — 2 Column */}
      <Services />

      {/* [7] NOW — B2B/B2G CTA */}
      <CTA />

      {/* [8] FOOTER */}
      <Footer />
    </main>
  );
}
