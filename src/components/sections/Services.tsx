"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cog, GraduationCap, MessageCircle, ArrowRight, Bot, Database, TrendingUp, Repeat, BookOpen, Users, Newspaper,
  Building2, Landmark, MessageSquarePlus, Sparkles, Code, Cpu, HeadphonesIcon, Server, FileCheck, Shield, Wrench, HelpCircle, Handshake, Mail
} from "lucide-react";
import { BUTTON_TEXT } from "@/lib/text-config";

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted/30 scroll-mt-20">
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

        {/* Four Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Automation Consulting */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  <Bot className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">n8n 기반 AI 챗봇</p>
                    <p className="text-sm text-muted-foreground">맞춤형 대화형 AI 시스템 구축</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">RAG 시스템 구축</p>
                    <p className="text-sm text-muted-foreground">기업 맞춤 지식 검색 AI</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">마케팅 자동화</p>
                    <p className="text-sm text-muted-foreground">리드 생성부터 육성까지 자동화</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Repeat className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">원소스멀티유즈</p>
                    <p className="text-sm text-muted-foreground">콘텐츠 다채널 자동 배포</p>
                  </div>
                </li>
              </ul>

              <Button className="w-full btn-gradient-primary">
                무료 상담 신청
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* VibeCoding Academy */}
          <Card id="education" className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group scroll-mt-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    유료 강의 · 세미나
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    워크샵 · 1:1 멘토링
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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

              <Button className="w-full btn-gradient-primary">
                {BUTTON_TEXT.participate}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Inquiry */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">기업 문의</CardTitle>
              <CardDescription className="text-base">
                비즈니스에 AI를 더하세요.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">AI 솔루션 개발</p>
                    <p className="text-sm text-muted-foreground">맞춤형 AI 서비스 구축</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">시스템 통합</p>
                    <p className="text-sm text-muted-foreground">기존 시스템과 AI 연동</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">기술 컨설팅</p>
                    <p className="text-sm text-muted-foreground">최적의 AI 전략 수립</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HeadphonesIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">기술 지원</p>
                    <p className="text-sm text-muted-foreground">24/7 전문 기술 지원</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Government */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">공공기관</CardTitle>
              <CardDescription className="text-base">
                공공 서비스를 혁신하세요.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">정부/공공 사업</p>
                    <p className="text-sm text-muted-foreground">국책 사업 수행 경험</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">시스템 구축</p>
                    <p className="text-sm text-muted-foreground">안정적인 공공 시스템</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">보안 인증</p>
                    <p className="text-sm text-muted-foreground">공공기관 보안 기준 준수</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">유지보수</p>
                    <p className="text-sm text-muted-foreground">체계적인 운영 지원</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Other */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 card-hover group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquarePlus className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">기타</CardTitle>
              <CardDescription className="text-base">
                그 외 문의사항을 남겨주세요.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">일반 문의</p>
                    <p className="text-sm text-muted-foreground">서비스 관련 질문</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">제휴/파트너십</p>
                    <p className="text-sm text-muted-foreground">비즈니스 협력 문의</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Newspaper className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">언론/미디어</p>
                    <p className="text-sm text-muted-foreground">보도자료 및 인터뷰</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">기타 요청</p>
                    <p className="text-sm text-muted-foreground">그 외 모든 문의</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
