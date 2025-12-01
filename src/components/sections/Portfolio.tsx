"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Heart,
  ShoppingBag,
  Video,
  BarChart3,
  Landmark,
  Plane,
  Briefcase,
  Waves,
  Zap,
  LucideIcon
} from "lucide-react";

type Category = "all" | "creative" | "platform" | "automation" | "devtools";

interface Project {
  name: string;
  koreanName: string;
  description: string;
  category: Category[];
  tags: string[];
  highlight: string;
  icon: LucideIcon;
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
  },
  {
    name: "FlowStudio",
    koreanName: "플로우스튜디오",
    description: "이커머스 AI 상품 이미지 생성 플랫폼. $0.04로 무한한 상품 이미지 생성.",
    category: ["creative"],
    tags: ["Gemini", "Supabase", "E-commerce"],
    highlight: "$0.04/이미지",
    icon: ShoppingBag,
  },
  {
    name: "Gini AI",
    koreanName: "지니 AI",
    description: "PDF→AI 아바타 영상 자동 변환. ElevenLabs, D-ID, Veo 통합 파이프라인.",
    category: ["creative"],
    tags: ["ElevenLabs", "D-ID", "Video AI"],
    highlight: "15분 내 3분 영상 제작",
    icon: Video,
  },
  {
    name: "PPTMaker",
    koreanName: "PPT메이커",
    description: "AI 프레젠테이션 자동 생성 SaaS. 98% 비용 절감, 무제한 편집.",
    category: ["creative"],
    tags: ["Gemini", "PptxGenJS", "SaaS"],
    highlight: "98% 비용 절감",
    icon: BarChart3,
  },
  {
    name: "코나래",
    koreanName: "Konarae",
    description: "정부 지원사업 통합 플랫폼. AI 맞춤 추천, 10,000명 동시 접속 지원.",
    category: ["platform"],
    tags: ["Next.js", "Supabase", "Microservices"],
    highlight: "10K+ 동시 사용자",
    icon: Landmark,
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
    description: "프리랜서 비즈니스 운영 플랫폼. 주 10시간 업무 자동화.",
    category: ["platform"],
    tags: ["Next.js", "Supabase", "Automation"],
    highlight: "주 10시간+ 절약",
    icon: Briefcase,
  },
  {
    name: "Flow_Coder",
    koreanName: "플로우코더 커뮤니티",
    description: "바이브코딩 개발자 커뮤니티 플랫폼. Zanzibar ReBAC 권한 시스템.",
    category: ["platform", "devtools"],
    tags: ["Next.js", "Prisma", "Community"],
    highlight: "바이브코딩 허브",
    icon: Waves,
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
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            프로젝트 <span className="text-gradient">쇼케이스</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={activeFilter === filter.key ? "bg-gradient-flow text-white" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient Top Bar */}
              <div className="h-1 bg-gradient-flow" />

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{project.koreanName}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-sm mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>

                {/* Highlight Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary-gradient mb-4">
                  {project.highlight}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Hover Actions */}
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    보기
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
