"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";

type InquiryCategory = "automation" | "enterprise" | "government" | "other" | null;

const categoryOptions = [
  { id: "automation" as const, title: "자동화 컨설팅" },
  { id: "enterprise" as const, title: "기업 문의" },
  { id: "government" as const, title: "공공기관" },
  { id: "other" as const, title: "기타" },
];

const budgetOptions = [
  { value: "under-500", label: "500만원 미만" },
  { value: "500-1000", label: "500만원 ~ 1,000만원" },
  { value: "1000-3000", label: "1,000만원 ~ 3,000만원" },
  { value: "3000-5000", label: "3,000만원 ~ 5,000만원" },
  { value: "over-5000", label: "5,000만원 이상" },
  { value: "negotiable", label: "협의 필요" },
];

interface FormErrors {
  category?: string;
  name?: string;
  phone?: string;
  agreed?: string;
}

export function CTA() {
  const [selectedCategory, setSelectedCategory] = useState<InquiryCategory>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    budget: "",
    referenceUrl: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showErrors, setShowErrors] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const privacyRef = useRef<HTMLButtonElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!selectedCategory) {
      newErrors.category = "문의 유형을 선택해 주세요";
    }
    if (!formData.name.trim()) {
      newErrors.name = "담당자명을 입력해 주세요";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해 주세요";
    }
    if (!agreed) {
      newErrors.agreed = "개인정보 수집에 동의해 주세요";
    }

    setErrors(newErrors);
    setShowErrors(true);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.category && categoryRef.current) {
        categoryRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newErrors.name && nameRef.current) {
        nameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        nameRef.current.focus();
      } else if (newErrors.phone && phoneRef.current) {
        phoneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        phoneRef.current.focus();
      } else if (newErrors.agreed && privacyRef.current) {
        privacyRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        privacyRef.current.focus();
      }
      return false;
    }

    return true;
  };

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookData = {
        category: selectedCategory,
        categoryTitle: categoryOptions.find(c => c.id === selectedCategory)?.title,
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch("https://jerome87.com/webhook/176a6de9-064d-4015-9ea7-b674919b6e1a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      setIsSubmitted(true);
      setShowErrors(false);
      setErrors({});

      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedCategory(null);
        setFormData({ name: "", company: "", phone: "", email: "", budget: "", referenceUrl: "", message: "" });
        setAgreed(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to submit form:", error);
      setIsSubmitted(true);
      setShowErrors(false);
      setErrors({});

      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedCategory(null);
        setFormData({ name: "", company: "", phone: "", email: "", budget: "", referenceUrl: "", message: "" });
        setAgreed(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs font-medium text-[var(--neon)] tracking-[0.3em] uppercase mb-4">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            이제 당신의 비즈니스에<br />
            AI를 흐르게 할 차례입니다
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            아래 양식을 작성해 주세요. 빠른 시일 내에 연락드리겠습니다.
          </p>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal>
          <Card id="contact-form" className="max-w-2xl mx-auto border border-white/10 hover:bg-[#0f0f0f] hover:text-card-foreground">
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
                  <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">문의가 접수되었습니다</h3>
                  <p className="text-white/40">빠른 시일 내에 연락드리겠습니다.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Chips */}
                  <div ref={categoryRef}>
                    <Label className="text-sm font-medium mb-3 block">
                      문의 유형 <span className="text-destructive">*</span>
                    </Label>
                    <div className={`flex flex-wrap gap-2 p-2 -m-2 rounded-lg transition-colors ${
                      showErrors && errors.category ? "bg-destructive/5" : ""
                    }`}>
                      {categoryOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(option.id);
                            clearError("category");
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedCategory === option.id
                              ? "bg-white text-black"
                              : "bg-white/5 hover:bg-white/10 text-white/70"
                          }`}
                        >
                          #{option.title}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence>
                      {showErrors && errors.category && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-destructive mt-2 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.category}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        담당자명 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        ref={nameRef}
                        id="name"
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          clearError("name");
                        }}
                        className={showErrors && errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      <AnimatePresence>
                        {showErrors && errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
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
                      <Label htmlFor="phone">
                        연락처 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        ref={phoneRef}
                        id="phone"
                        type="tel"
                        placeholder="010-1234-5678"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          clearError("phone");
                        }}
                        className={showErrors && errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      <AnimatePresence>
                        {showErrors && errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
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

                  {/* Budget & Reference URL */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">구축예산</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="예산을 선택해 주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="referenceUrl">참고사이트</Label>
                      <Input
                        id="referenceUrl"
                        type="url"
                        placeholder="https://example.com"
                        value={formData.referenceUrl}
                        onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
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
                  <div className="space-y-2">
                    <div className={`flex items-start gap-3 p-3 -m-3 rounded-lg transition-colors ${
                      showErrors && errors.agreed ? "bg-destructive/5" : ""
                    }`}>
                      <Checkbox
                        ref={privacyRef}
                        id="privacy"
                        checked={agreed}
                        onCheckedChange={(checked) => {
                          setAgreed(checked as boolean);
                          if (checked) clearError("agreed");
                        }}
                        className={showErrors && errors.agreed ? "border-destructive" : ""}
                      />
                      <Label htmlFor="privacy" className="text-sm text-white/40 leading-relaxed cursor-pointer">
                        개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용됩니다.
                        <span className="text-destructive"> *</span>
                      </Label>
                    </div>
                    <AnimatePresence>
                      {showErrors && errors.agreed && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.agreed}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Error Summary */}
                  <AnimatePresence>
                    {showErrors && Object.keys(errors).length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                      >
                        <p className="text-sm text-destructive font-medium flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          필수 항목을 모두 입력해 주세요
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[var(--neon)] text-black hover:bg-[var(--neon)]/90 font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        FlowCoder에 문의하기
                      </>
                    )}
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
