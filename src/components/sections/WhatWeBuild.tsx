"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Rocket, Cog, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "크리에이티브",
    emoji: "🎨",
    description: "이미지, 영상, 문서 — AI가 자동으로 생성합니다.",
    features: ["웨딩 사진 AI 보정", "이커머스 상품 이미지", "AI 아바타 영상", "PPT 자동 생성"],
  },
  {
    icon: Rocket,
    title: "플랫폼",
    emoji: "🚀",
    description: "지원사업, 여행, 비즈니스 운영 — AI가 최적화합니다.",
    features: ["정부 지원사업 추천", "AI 여행 일정", "프리랜서 운영 자동화", "커뮤니티 플랫폼"],
  },
  {
    icon: Cog,
    title: "자동화",
    emoji: "🔧",
    description: "챗봇, RAG, 마케팅 — 반복에서 해방됩니다.",
    features: ["n8n 기반 챗봇", "RAG 시스템 구축", "마케팅 자동화", "원소스멀티유즈"],
  },
];

export function WhatWeBuild() {
  return (
    <section id="solutions" className="py-20 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            WHAT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            우리는 <span className="text-gradient">9개의 AI 솔루션</span>을<br />
            직접 구축했습니다.
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{category.emoji}</span>
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                  자세히 보기
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
