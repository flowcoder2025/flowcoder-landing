"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Rocket, Settings, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const categories: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    icon: Palette,
    title: "크리에이티브",
    description: "이미지, 영상, 문서 — AI가 자동으로 생성합니다.",
    features: ["웨딩 사진 AI 보정", "이커머스 상품 이미지", "AI 아바타 영상", "PPT 자동 생성"],
  },
  {
    icon: Rocket,
    title: "플랫폼",
    description: "지원사업, 여행, 비즈니스 운영 — AI가 최적화합니다.",
    features: ["정부 지원사업 추천", "AI 여행 일정", "프리랜서 운영 자동화", "커뮤니티 플랫폼"],
  },
  {
    icon: Settings,
    title: "자동화",
    description: "챗봇, RAG, 마케팅 — 반복에서 해방됩니다.",
    features: ["n8n 기반 챗봇", "RAG 시스템 구축", "마케팅 자동화", "원소스멀티유즈"],
  },
];

export function WhatWeBuild() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-medium text-[var(--neon)] tracking-[0.3em] uppercase mb-4">
            WHAT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            크리에이티브부터 자동화까지,<br />
            필요한 AI를 찾아보세요
          </h2>
        </ScrollReveal>

        {/* Category Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="group/card relative overflow-hidden border border-white/10 hover:bg-[var(--neon-alt)] hover:text-white transition-colors duration-300 h-full">
                  <CardHeader className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-white/10 group-hover/card:bg-white/10 flex items-center justify-center mb-4 transition-colors"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <category.icon className="w-8 h-8 text-white group-hover/card:text-[var(--neon)] transition-colors" strokeWidth={1.5} />
                    </motion.div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base min-h-12">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-2 text-white/60 group-hover/card:text-white/80 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: false, margin: "0px", amount: 0.02 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon)] group-hover/card:bg-[var(--neon)] transition-colors" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
