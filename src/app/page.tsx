import {
  Header,
  Hero,
  Marquee,
  Metrics,
  WhatWeBuild,
  Portfolio,
  TechStack,
  Services,
  CTA,
  Footer,
} from "@/components/sections";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <CustomCursor />

      {/* [0] HEADER — Navigation */}
      <Header />

      {/* [1] HERO — WHY */}
      <Hero />

      {/* [1.5] MARQUEE — Brand Tagline */}
      <Marquee />

      {/* [2] METRICS — 신뢰 지표 */}
      <Metrics />

      {/* [3] WHAT — 3 카테고리 */}
      <WhatWeBuild />

      {/* [4] PORTFOLIO — 프로젝트 쇼케이스 */}
      <Portfolio />

      {/* [5] HOW — 기술 스택 */}
      <TechStack />

      {/* [6] SERVICES — 서비스 */}
      <Services />

      {/* [7] NOW — B2B/B2G CTA */}
      <CTA />

      {/* [8] FOOTER */}
      <Footer />
    </main>
  );
}
