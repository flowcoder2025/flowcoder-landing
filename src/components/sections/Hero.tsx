"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Users, GraduationCap } from "lucide-react";
import { BUTTON_TEXT } from "@/lib/text-config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3182F6]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00C471]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>AX(AI Transformation) 전문 팀</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-gradient">AI</span>는 선택이 아닌{" "}
          <span className="text-gradient">기반</span>입니다
        </h1>

        {/* Sub Headline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
          모든 비즈니스에 AI가 흘러야 합니다.
        </p>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
          AI로 흐르는 비즈니스 혁신
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button size="lg" className="btn-gradient-blue px-8 py-6 text-lg">
            <Zap className="w-5 h-5 mr-2" />
            솔루션 보기
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            자동화 문의
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            <GraduationCap className="w-5 h-5 mr-2" />
            강의 신청
          </Button>
          <Button size="lg" variant="ghost" className="px-8 py-6 text-lg">
            <Users className="w-5 h-5 mr-2" />
            커뮤니티
          </Button>
        </div>

        {/* Brand Logo Text */}
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            FlowCoder
          </p>
          <p className="text-lg text-muted-foreground tracking-widest">
            Build. Automate. Grow.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
