"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";

type InquiryCategory = "automation" | "enterprise" | "government" | "other" | null;

const categoryOptions = [
  { id: "automation" as const, title: "자동화 컨설팅" },
  { id: "enterprise" as const, title: "기업 문의" },
  { id: "government" as const, title: "공공기관" },
  { id: "other" as const, title: "기타" },
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
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            이제 당신의 비즈니스에<br />
            <span className="text-gradient">AI를 흐르게</span> 할 차례입니다
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            아래 양식을 작성해 주세요. 빠른 시일 내에 연락드리겠습니다.
          </p>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal>
          <Card id="contact-form" className="max-w-2xl mx-auto border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">문의하기</CardTitle>
              <CardDescription>
                {selectedCategory
                  ? `${categoryOptions.find(c => c.id === selectedCategory)?.title} 관련 문의`
                  : "문의 유형을 선택해 주세요"
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
                      {categoryOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedCategory(option.id)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedCategory === option.id
                              ? "bg-primary text-white"
                              : "bg-muted hover:bg-muted/80 text-foreground"
                          }`}
                        >
                          #{option.title}
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
