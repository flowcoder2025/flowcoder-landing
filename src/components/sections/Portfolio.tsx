"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";

type Category = "all" | "creative" | "platform" | "automation" | "devtools";

interface Project {
  id: string;
  category: Category[];
  categoryLabel: string;
  tags: string[];
  highlight: string;
  summary: string;
  thumbnail: string;
}

// CTA 최적화 배치 순서
// ─ HOOK (1-3): 시각 임팩트로 관심 포착 — 가장 보편적 비즈니스 니즈부터
// ─ INTEREST (4-6): SaaS 모델로 비즈니스 가치 증명
// ─ DESIRE (7-10): B2B 엔터프라이즈 실적으로 신뢰 확보
// ─ ACTION (11-12): 컨설팅·자동화 진단으로 문의 직결
// ─ SUPPORT (13-14): 포트폴리오 다양성으로 마무리
const projects: Project[] = [
  // ── HOOK ──────────────────────────
  {
    id: "product-studio",
    category: ["creative"],
    categoryLabel: "크리에이티브",
    tags: ["Gemini", "Supabase", "E-commerce"],
    highlight: "이커머스 자동화 솔루션",
    summary: "제품 이미지·홍보물·상세페이지를 AI로 자동 생성하는 셀러용 웹 앱.",
    thumbnail: "/Iframe/studio.png",
  },
  {
    id: "ai-webdrama",
    category: ["creative"],
    categoryLabel: "크리에이티브",
    tags: ["Kling", "Veo", "Remotion"],
    highlight: "AI 이미지·영상 제너레이터",
    summary: "장면별 스토리보드 → AI 이미지/영상 자동 생성. 웹드라마 프로덕션 파이프라인.",
    thumbnail: "/Iframe/webdrama.png",
  },
  // ── INTEREST ──────────────────────
  {
    id: "presentation-saas",
    category: ["creative"],
    categoryLabel: "크리에이티브",
    tags: ["Gemini", "PptxGenJS", "SaaS"],
    highlight: "AI 프레젠테이션 생성 SaaS",
    summary: "한 줄 입력으로 편집 가능한 PPTX를 자동 생성. PptxGenJS 기반 무제한 편집.",
    thumbnail: "/Iframe/pptmaker.png",
  },
  {
    id: "video-avatar",
    category: ["creative"],
    categoryLabel: "크리에이티브",
    tags: ["ElevenLabs", "D-ID", "Video AI"],
    highlight: "문서→아바타 영상 생성 시스템",
    summary: "문서를 AI가 분석하고 전문 아바타가 발표하는 영상 자동 제작 파이프라인.",
    thumbnail: "/Iframe/geni.png",
  },
  {
    id: "ax-diagnosis",
    category: ["automation"],
    categoryLabel: "자동화",
    tags: ["Claude AI", "Automation", "ROI"],
    highlight: "AI 업무 자동화 진단 리포트 시스템",
    summary: "Claude 기반 업무 자동화 준비도 분석 + ROI 산출 전략 리포트 자동 생성.",
    thumbnail: "/Iframe/canvas.png",
  },

  // ── DESIRE ────────────────────────
  {
    id: "gov-match",
    category: ["platform"],
    categoryLabel: "플랫폼",
    tags: ["Next.js", "Supabase", "pgvector"],
    highlight: "정부사업 매칭 통합 플랫폼",
    summary: "pgvector 기반 맞춤 추천 + 사업계획서 자동화. 마이크로서비스 아키텍처.",
    thumbnail: "/Iframe/konarae.png",
  },
  {
    id: "franchise-erp",
    category: ["platform", "automation"],
    categoryLabel: "플랫폼 · B2B",
    tags: ["Next.js", "Prisma", "ERP"],
    highlight: "프랜차이즈 ERP 시스템",
    summary: "다매장 통합 관리 — 매출·재고·발주·인사를 한 화면에서 운영하는 프랜차이즈 전용 ERP.",
    thumbnail: "/Iframe/flowvue.png",
  },
  {
    id: "hr-system",
    category: ["platform"],
    categoryLabel: "플랫폼 · B2B",
    tags: ["Next.js", "Prisma", "HR"],
    highlight: "인사관리(HR) 시스템",
    summary: "직원·출근부·급여·평가·채용을 통합 관리하는 중소기업 전용 인사관리 플랫폼.",
    thumbnail: "/Iframe/flowhr.png",
  },
  {
    id: "qr-vehicle",
    category: ["platform", "automation"],
    categoryLabel: "플랫폼 · B2B",
    tags: ["Next.js", "Solapi", "HMAC"],
    highlight: "QR 기반 차량 관리 시스템",
    summary: "QR 태그 스캔 기반 차량 운행·정비 이력 추적. Solapi 알림톡과 HMAC 서명 연동.",
    thumbnail: "/Iframe/qrcar.png",
  },

  // ── ACTION (문의 유도) ────────────
  {
    id: "b2b-consulting",
    category: ["platform"],
    categoryLabel: "플랫폼",
    tags: ["Next.js", "Consulting", "B2B"],
    highlight: "벤처인증·사업계획서 컨설팅 플랫폼",
    summary: "벤처인증·사업계획서·특허 출원을 단계별로 지원하는 B2B 컨설팅 시스템.",
    thumbnail: "/Iframe/consult.png",
  },
  {
    id: "freelancer-suite",
    category: ["platform"],
    categoryLabel: "플랫폼",
    tags: ["Next.js", "Supabase", "Automation"],
    highlight: "1인 기업 통합 워크스페이스",
    summary: "클라이언트·프로젝트·세무를 한 곳에서 관리. 프리랜서 전용 운영 시스템.",
    thumbnail: "/Iframe/weave.png",
  },

  // ── SUPPORT (포트폴리오 깊이) ────
  {
    id: "metaverse-2d",
    category: ["platform"],
    categoryLabel: "플랫폼",
    tags: ["Phaser 3", "LiveKit", "WebRTC"],
    highlight: "브라우저 기반 2D 메타버스",
    summary: "Phaser 3 + LiveKit 자체 엔진. 설치 없이 URL만으로 접속하는 멀티유저 공간.",
    thumbnail: "/Iframe/space.png",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "creative", label: "크리에이티브" },
  { key: "platform", label: "플랫폼" },
  { key: "automation", label: "자동화" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-6">
          <p className="text-xs font-medium text-[var(--neon)] tracking-[0.3em] uppercase mb-4">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            실제로 검증된 프로젝트
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            고객사 비밀유지 계약으로 서비스명은 공개하지 않습니다. 분류와 스크린샷으로 결과물을 확인하세요.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px", amount: 0.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant="ghost"
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? "bg-[var(--neon)] text-black hover:bg-[var(--neon)]/90 hover:text-black"
                  : "border border-white/20 text-white/60 hover:text-white"
              }
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px", amount: 0.02 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, margin: "0px", amount: 0.02 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="group relative overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300 h-full flex flex-col p-0">
                  {/* Screenshot — Primary visual */}
                  <div className="relative overflow-hidden bg-white/5 aspect-[16/10]">
                    <motion.img
                      src={project.thumbnail}
                      alt={`${project.categoryLabel} 프로젝트 화면`}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Category overlay on image */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur text-[var(--neon)] border border-[var(--neon)]/30 uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col gap-3">
                    {/* Highlight */}
                    <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--neon)] text-black">
                      {project.highlight}
                    </span>

                    {/* Summary */}
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-3 flex-1">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
