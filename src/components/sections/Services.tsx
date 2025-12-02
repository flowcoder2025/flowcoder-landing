"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cog, GraduationCap, ArrowRight, Bot, Database, TrendingUp, Repeat,
  Building2, Landmark, MessageSquarePlus, Sparkles, Code, Cpu, HeadphonesIcon,
  Server, FileCheck, Shield, Wrench, HelpCircle, Handshake, Newspaper, Mail,
  BookOpen, Users, MessageCircle, LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  items: ServiceItem[];
  buttonText: string;
}

const services: ServiceCard[] = [
  {
    icon: Cog,
    title: "자동화 컨설팅",
    description: "반복 업무에서 해방되세요.",
    items: [
      { icon: Bot, title: "n8n 기반 AI 챗봇", description: "맞춤형 대화형 AI 시스템" },
      { icon: Database, title: "RAG 시스템 구축", description: "기업 맞춤 지식 검색 AI" },
      { icon: TrendingUp, title: "마케팅 자동화", description: "리드 생성부터 육성까지" },
      { icon: Repeat, title: "원소스멀티유즈", description: "콘텐츠 다채널 자동 배포" },
    ],
    buttonText: "무료 상담 신청",
  },
  {
    icon: GraduationCap,
    title: "바이브코딩",
    description: "AI 시대의 개발자로 성장하세요.",
    items: [
      { icon: BookOpen, title: "유료 강의 · 세미나", description: "AI 코딩 실전 교육" },
      { icon: Users, title: "워크샵 · 멘토링", description: "1:1 맞춤 성장 지원" },
      { icon: Building2, title: "기업 교육", description: "팀 역량 강화 프로그램" },
      { icon: MessageCircle, title: "커뮤니티", description: "디스코드 · 기술 블로그" },
    ],
    buttonText: "참여하기",
  },
  {
    icon: Building2,
    title: "기업 문의",
    description: "비즈니스에 AI를 더하세요.",
    items: [
      { icon: Sparkles, title: "AI 솔루션 개발", description: "맞춤형 AI 서비스 구축" },
      { icon: Code, title: "시스템 통합", description: "기존 시스템과 AI 연동" },
      { icon: Cpu, title: "기술 컨설팅", description: "최적의 AI 전략 수립" },
      { icon: HeadphonesIcon, title: "기술 지원", description: "24/7 전문 기술 지원" },
    ],
    buttonText: "문의하기",
  },
  {
    icon: Landmark,
    title: "공공기관",
    description: "공공 서비스를 혁신하세요.",
    items: [
      { icon: Server, title: "정부/공공 사업", description: "국책 사업 수행 경험" },
      { icon: FileCheck, title: "시스템 구축", description: "안정적인 공공 시스템" },
      { icon: Shield, title: "보안 인증", description: "공공기관 보안 기준 준수" },
      { icon: Wrench, title: "유지보수", description: "체계적인 운영 지원" },
    ],
    buttonText: "문의하기",
  },
  {
    icon: MessageSquarePlus,
    title: "기타",
    description: "그 외 문의사항을 남겨주세요.",
    items: [
      { icon: HelpCircle, title: "일반 문의", description: "서비스 관련 질문" },
      { icon: Handshake, title: "제휴/파트너십", description: "비즈니스 협력 문의" },
      { icon: Newspaper, title: "언론/미디어", description: "보도자료 및 인터뷰" },
      { icon: Mail, title: "기타 요청", description: "그 외 모든 문의" },
    ],
    buttonText: "문의하기",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            솔루션 그 이상을 <span className="text-gradient">제공합니다</span>
          </h2>
        </ScrollReveal>

        {/* Five Column Layout */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors duration-300 hover:shadow-xl group flex flex-col h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

                <CardHeader>
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full btn-gradient-primary" onClick={scrollToContact}>
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
