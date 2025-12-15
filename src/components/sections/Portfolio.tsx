"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Heart,
  ShoppingBag,
  Video,
  BarChart3,
  Landmark,
  Plane,
  Briefcase,
  Waves,
  Zap,
  Globe,
  LucideIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";

type Category = "all" | "creative" | "platform" | "automation" | "devtools";

interface Project {
  name: string;
  koreanName: string;
  description: string;
  category: Category[];
  tags: string[];
  highlight: string;
  icon: LucideIcon;
  thumbnail?: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "FlowRetouch",
    koreanName: "플로우리터치",
    description: "AI 기반 웨딩 사진 보정 서비스. Gemini 3 Pro Image로 스튜디오 품질 즉시 완성.",
    category: ["creative"],
    tags: ["Gemini", "Next.js", "Image AI"],
    highlight: "스튜디오 품질 즉시 완성",
    icon: Heart,
    thumbnail: "/Iframe/retouch.png",
    url: "https://retouch-pearl.vercel.app/",
  },
  {
    name: "FlowStudio",
    koreanName: "플로우스튜디오",
    description: "복잡한 포토샵 없이, 전문가급 제품 사진과 홍보물을 30초 완성.",
    category: ["creative"],
    tags: ["Gemini", "Supabase", "E-commerce"],
    highlight: "상세페이지 30초 완성",
    icon: ShoppingBag,
    thumbnail: "/Iframe/studio.png",
    url: "https://studio.flow-coder.com/",
  },
  {
    name: "FlowSpace",
    koreanName: "플로우스페이스",
    description: "브라우저에서 즉시 입장하는 2D 메타버스 플랫폼. Phaser 3 + LiveKit 자체 개발.",
    category: ["platform"],
    tags: ["Phaser 3", "LiveKit", "Metaverse"],
    highlight: "설치 없이 즉시 입장",
    icon: Globe,
    thumbnail: "/Iframe/space.png",
    url: "https://flowspace-gamma.vercel.app/",
  },
  {
    name: "Gini AI",
    koreanName: "지니 AI",
    description: "문서를 AI가 분석하고, 전문 아바타가 발표하는 고품질 영상을 자동으로 제작합니다. 복잡한 편집 없이 3분 완성.",
    category: ["creative"],
    tags: ["ElevenLabs", "D-ID", "Video AI"],
    highlight: "15분 내 3분 영상 제작",
    icon: Video,
    thumbnail: "/Iframe/geni.png",
    url: "https://next-gini-ai.vercel.app/",
  },
  {
    name: "PPTMaker",
    koreanName: "PPT메이커",
    description: "AI 프레젠테이션 자동 생성 SaaS. 98% 비용 절감, 무제한 편집.",
    category: ["creative"],
    tags: ["Gemini", "PptxGenJS", "SaaS"],
    highlight: "98% 비용 절감",
    icon: BarChart3,
    thumbnail: "/Iframe/pptmaker.png",
    url: "https://pptmaker.flow-coder.com/",
  },
  {
    name: "코나래",
    koreanName: "Konarae",
    description: "정부 지원사업 통합 플랫폼. AI 맞춤 추천, 10,000명 동시 접속 지원.",
    category: ["platform"],
    tags: ["Next.js", "Supabase", "Microservices"],
    highlight: "10K+ 동시 사용자",
    icon: Landmark,
    thumbnail: "/Iframe/konarae.png",
    url: "https://konarae.vercel.app/",
  },
  {
    name: "OneTrip",
    koreanName: "원트립",
    description: "AI 여행 일정 자동화 플랫폼. 문서 업로드로 완전한 여행 계획 생성.",
    category: ["platform"],
    tags: ["LangGraph", "OpenAI", "Travel"],
    highlight: "문서→여행 계획 자동화",
    icon: Plane,
  },
  {
    name: "Weave",
    koreanName: "위브",
    description: "프리랜서와 1인 기업이 클라이언트, 프로젝트 관리, 세무 업무를 한 곳에서 해결할 수 있는 통합 솔루션.",
    category: ["platform"],
    tags: ["Next.js", "Supabase", "Automation"],
    highlight: "주 10시간+ 절약",
    icon: Briefcase,
    thumbnail: "/Iframe/weave.png",
    url: "https://www.weave-flow.com/",
  },
  {
    name: "Flow_Coder",
    koreanName: "플로우코더 커뮤니티",
    description: "바이브코딩 개발자 커뮤니티 플랫폼. Zanzibar ReBAC 권한 시스템.",
    category: ["platform", "devtools"],
    tags: ["Next.js", "Prisma", "Community"],
    highlight: "바이브코딩 허브",
    icon: Waves,
    thumbnail: "/Iframe/flow_coder.png",
    url: "https://www.flow-coder.com/",
  },
  {
    name: "FlowCoder Skills",
    koreanName: "플로우코더 스킬",
    description: "Claude Code 스킬 프레임워크. 개발 시간 95% 단축.",
    category: ["devtools", "automation"],
    tags: ["Claude", "Skills", "Framework"],
    highlight: "95% 개발시간 단축",
    icon: Zap,
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "creative", label: "크리에이티브" },
  { key: "platform", label: "플랫폼" },
  { key: "automation", label: "자동화" },
  { key: "devtools", label: "개발자도구" },
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
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            프로젝트 <span className="text-gradient">쇼케이스</span>
          </h2>
        </ScrollReveal>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px", amount: 0.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? "bg-gradient-flow text-white"
                  : "hover:bg-transparent hover:text-primary hover:border-primary"
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
                key={project.name}
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
                <Card className="group relative overflow-hidden border hover:border-primary/50 transition-colors duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Gradient Top Bar */}
                  <div className="h-1 bg-gradient-flow" />

                  {/* 1. Title Section */}
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(45, 212, 191, 0.2)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <project.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{project.koreanName}</p>
                      </div>
                    </div>
                  </CardHeader>

                  {/* 2. Thumbnail - Pure Screenshot (zoomed to center content) */}
                  <div className="mx-4 mb-3 rounded-lg overflow-hidden border border-border/50 bg-muted/30">
                    {project.thumbnail ? (
                      <motion.img
                        src={project.thumbnail}
                        alt={`${project.name} preview`}
                        className="w-full h-48 object-cover object-center scale-125"
                        whileHover={{ scale: 1.35 }}
                        transition={{ duration: 0.4 }}
                      />
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center">
                        <project.icon className="w-16 h-16 text-muted-foreground/30" strokeWidth={1} />
                      </div>
                    )}
                  </div>

                  <CardContent className="flex-1 flex flex-col pt-0">
                    {/* 3. Description */}
                    <CardDescription className="text-sm line-clamp-2 min-h-10">
                      {project.description}
                    </CardDescription>

                    {/* Bottom Group */}
                    <div className="mt-auto pt-3 space-y-2">
                      {/* 4. Highlight Badge */}
                      <motion.div
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary-gradient"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.highlight}
                      </motion.div>

                      {/* 5. Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* 6. View Button */}
                      {project.url ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent border-2 border-muted-foreground/50 text-muted-foreground font-bold hover:border-[#35C3A7] hover:text-[#35C3A7] hover:bg-transparent transition-colors"
                          onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          보기
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent border-2 border-muted-foreground/20 text-muted-foreground/50 font-bold cursor-not-allowed"
                          disabled
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          준비중
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
