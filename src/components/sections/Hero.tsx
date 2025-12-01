"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { BUTTON_TEXT } from "@/lib/text-config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay - Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A121E]/60 via-[#0A121E]/55 to-[#0A121E]/70" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#35C3A7]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#35C3A7]/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/80 text-[#E5F9F5] text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>AX(AI Transformation) 전문 팀</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
          <span className="text-[#35C3A7]">AI</span>는 선택이 아닌{" "}
          <span className="text-[#35C3A7]">기반</span>입니다
        </h1>

        {/* Sub Headline */}
        <p className="text-xl md:text-2xl text-[#E5E7EB] max-w-3xl mx-auto mb-4">
          모든 비즈니스에 AI가 흘러야 합니다.
        </p>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-semibold text-white mb-12">
          AI로 흐르는 비즈니스 혁신
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center mb-16">
          <Button
            size="xl"
            variant="outline"
            className="btn-outline-diagonal-dark"
          >
            문의하기
          </Button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
