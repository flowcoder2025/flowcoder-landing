"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, GraduationCap, MessageCircle, ArrowRight, Bot, Database, TrendingUp, Repeat, BookOpen, Users, Newspaper } from "lucide-react";
import { BUTTON_TEXT } from "@/lib/text-config";

export function Services() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            솔루션 그 이상을 <span className="text-gradient">제공합니다</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Automation Consulting */}
          <Card className="relative overflow-hidden border-2 hover:border-[#00C471]/50 card-hover group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-green" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C471] to-[#00E088] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl flex items-center gap-2">
                자동화 컨설팅
              </CardTitle>
              <CardDescription className="text-base">
                반복 업무에서 해방되세요.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-[#00C471] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">n8n 기반 AI 챗봇</p>
                    <p className="text-sm text-muted-foreground">맞춤형 대화형 AI 시스템 구축</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#00C471] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">RAG 시스템 구축</p>
                    <p className="text-sm text-muted-foreground">기업 맞춤 지식 검색 AI</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00C471] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">마케팅 자동화</p>
                    <p className="text-sm text-muted-foreground">리드 생성부터 육성까지 자동화</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Repeat className="w-5 h-5 text-[#00C471] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">원소스멀티유즈</p>
                    <p className="text-sm text-muted-foreground">콘텐츠 다채널 자동 배포</p>
                  </div>
                </li>
              </ul>

              <Button className="w-full btn-gradient-green">
                무료 상담 신청
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* VibeCoding Academy */}
          <Card className="relative overflow-hidden border-2 hover:border-[#3182F6]/50 card-hover group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3182F6] to-[#5BA0FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl flex items-center gap-2">
                바이브코딩
              </CardTitle>
              <CardDescription className="text-base">
                AI 시대의 개발자로 함께 성장하세요.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Education */}
              <div>
                <p className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  교육
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
                    유료 강의 · 세미나
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
                    워크샵 · 1:1 멘토링
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
                    기업 교육
                  </li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <p className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  커뮤니티
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <MessageCircle className="w-4 h-4" />
                    디스코드 · 웹 커뮤니티
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Newspaper className="w-4 h-4" />
                    기술 블로그 · 뉴스레터
                  </li>
                </ul>
              </div>

              <Button className="w-full btn-gradient-blue">
                {BUTTON_TEXT.participate}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
