"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "FlowCoder는 어떤 서비스를 제공하나요?",
    answer:
      "FlowCoder는 AI 솔루션 개발, n8n 기반 자동화 컨설팅, 바이브코딩 교육 서비스를 제공합니다.",
  },
  {
    question: "바이브코딩이란 무엇인가요?",
    answer:
      "바이브코딩은 AI 시대의 새로운 개발 방법론으로, 비개발자도 AI와 함께 코딩할 수 있는 접근 방식입니다.",
  },
  {
    question: "기업 맞춤 솔루션도 가능한가요?",
    answer:
      "네, FlowCoder는 기업 및 공공기관을 위한 맞춤형 AI 솔루션을 개발합니다. B2B 및 B2G 프로젝트 경험이 풍부합니다.",
  },
  {
    question: "FlowCoder의 서비스 비용은 어떻게 되나요?",
    answer:
      "프로젝트 규모와 요구사항에 따라 맞춤 견적을 제공합니다. 무료 상담을 통해 정확한 비용을 안내받으실 수 있습니다.",
  },
  {
    question: "n8n 자동화 컨설팅은 무엇인가요?",
    answer:
      "n8n은 오픈소스 워크플로우 자동화 도구입니다. FlowCoder는 n8n을 활용한 업무 프로세스 자동화 설계, 구축, 운영을 지원합니다.",
  },
  {
    question: "AI 솔루션 구축 기간은 얼마나 걸리나요?",
    answer:
      "일반적으로 MVP 기준 4-8주, 풀 스케일 프로젝트 기준 8-16주가 소요됩니다. 프로젝트 복잡도에 따라 달라질 수 있습니다.",
  },
  {
    question: "공공기관도 서비스를 이용할 수 있나요?",
    answer:
      "네, FlowCoder는 B2G(정부/공공기관) 프로젝트 경험이 풍부합니다. 공공 조달 절차에 맞춘 계약 방식도 지원합니다.",
  },
  {
    question: "바이브코딩 교육은 누구를 대상으로 하나요?",
    answer:
      "비개발자 직군(기획자, 마케터, 경영진)부터 주니어 개발자까지, AI를 활용한 코딩 생산성 향상을 원하는 모든 분을 대상으로 합니다.",
  },
  {
    question: "원격 협업이 가능한가요?",
    answer:
      "네, 100% 원격 협업이 가능합니다. 화상 회의, 프로젝트 관리 도구를 통해 전국 어디서나 서비스를 받으실 수 있습니다.",
  },
  {
    question: "포트폴리오를 확인할 수 있나요?",
    answer:
      "about.flow-coder.com에서 9개 이상의 AI 솔루션 프로젝트 포트폴리오를 확인하실 수 있습니다.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs font-medium text-[var(--neon)] tracking-[0.3em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            자주 묻는 질문
          </h2>
        </ScrollReveal>

        <motion.div
          className="max-w-3xl mx-auto space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px", amount: 0.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white hover:bg-white/5 transition-colors"
              >
                <span className="text-sm md:text-base font-medium pr-4">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-white/50" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-white/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
