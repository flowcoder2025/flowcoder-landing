"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Cog, Building2, Landmark, ArrowRight,
  Bot, Database, TrendingUp, Repeat,
  Sparkles, Server, Shield, Wrench,
  Code, Cpu, FileCheck, HeadphonesIcon,
  Send, CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

type InquiryCategory = "automation" | "enterprise" | "government" | null;

const inquiryCards = [
  {
    id: "automation" as const,
    icon: Cog,
    title: "자동화 컨설팅",
    description: "반복 업무에서 해방되세요.",
    features: [
      { icon: Bot, title: "n8n 기반 AI 챗봇", desc: "맞춤형 대화형 AI 시스템" },
      { icon: Database, title: "RAG 시스템 구축", desc: "기업 맞춤 지식 검색 AI" },
      { icon: TrendingUp, title: "마케팅 자동화", desc: "리드 생성부터 육성까지" },
      { icon: Repeat, title: "원소스멀티유즈", desc: "콘텐츠 다채널 자동 배포" },
    ],
  },
  {
    id: "enterprise" as const,
    icon: Building2,
    title: "기업 문의",
    description: "비즈니스에 AI를 더하세요.",
    features: [
      { icon: Sparkles, title: "AI 솔루션 개발", desc: "맞춤형 AI 서비스 구축" },
      { icon: Code, title: "시스템 통합", desc: "기존 시스템과 AI 연동" },
      { icon: Cpu, title: "기술 컨설팅", desc: "최적의 AI 전략 수립" },
      { icon: HeadphonesIcon, title: "기술 지원", desc: "24/7 전문 기술 지원" },
    ],
  },
  {
    id: "government" as const,
    icon: Landmark,
    title: "공공기관",
    description: "공공 서비스를 혁신하세요.",
    features: [
      { icon: Server, title: "정부/공공 사업", desc: "국책 사업 수행 경험" },
      { icon: FileCheck, title: "시스템 구축", desc: "안정적인 공공 시스템" },
      { icon: Shield, title: "보안 인증", desc: "공공기관 보안 기준 준수" },
      { icon: Wrench, title: "유지보수", desc: "체계적인 운영 지원" },
    ],
  },
];

export function CTA() {
  const [selectedCategory, setSelectedCategory] = useState<InquiryCategory>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCategoryClick = (category: InquiryCategory) => {
    setSelectedCategory(category);
    // Scroll to form
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !agreed) return;

    // Here you would typically send the form data to your backend
    console.log({ category: selectedCategory, ...formData });
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedCategory(null);
      setFormData({ name: "", company: "", phone: "", email: "", message: "" });
      setAgreed(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-cta" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            이제 당신의 비즈니스에<br />
            <span className="text-gradient">AI를 흐르게</span> 할 차례입니다
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            문의 유형을 선택하고 아래 양식을 작성해 주세요. 빠른 시일 내에 연락드리겠습니다.
          </p>
        </ScrollReveal>

        {/* Inquiry Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {inquiryCards.map((card) => (
            <StaggerItem key={card.id}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                onClick={() => handleCategoryClick(card.id)}
              >
                <Card
                  className={`relative overflow-hidden border-2 transition-all duration-300 cursor-pointer h-full ${
                    selectedCategory === card.id
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  {/* Selection indicator */}
                  {selectedCategory === card.id && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-flow" />

                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      <card.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                    <CardDescription className="text-base min-h-6">
                      {card.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <feature.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium text-sm">{feature.title}</p>
                            <p className="text-xs text-muted-foreground">{feature.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contact Form */}
        <ScrollReveal>
          <Card id="contact-form" className="max-w-2xl mx-auto border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">문의하기</CardTitle>
              <CardDescription>
                {selectedCategory
                  ? `${inquiryCards.find(c => c.id === selectedCategory)?.title} 관련 문의`
                  : "위에서 문의 유형을 선택해 주세요"
                }
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">문의가 접수되었습니다</h3>
                  <p className="text-muted-foreground">빠른 시일 내에 연락드리겠습니다.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Chips */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">문의 유형</Label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryCards.map((card) => (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => setSelectedCategory(card.id)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedCategory === card.id
                              ? "bg-primary text-white"
                              : "bg-muted hover:bg-muted/80 text-foreground"
                          }`}
                        >
                          #{card.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">담당자명 *</Label>
                      <Input
                        id="name"
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">회사명</Label>
                      <Input
                        id="company"
                        placeholder="(주)플로우코더"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="010-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="contact@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">문의내용</Label>
                    <Textarea
                      id="message"
                      placeholder="문의하실 내용을 자세히 적어주세요."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Privacy Agreement */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용됩니다.
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full btn-gradient-primary"
                    disabled={!selectedCategory || !agreed || !formData.name || !formData.phone}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    FlowCoder에 문의하기
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
