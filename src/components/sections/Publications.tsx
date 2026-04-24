"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/motion";
import { BookOpen, GraduationCap, ExternalLink, Star, Users } from "lucide-react";

interface Publication {
  type: "lecture" | "book";
  tier: string;
  title: string;
  subtitle?: string;
  meta: { label: string; value: string }[];
  tags: string[];
  stats?: { icon: "star" | "users"; value: string; label: string }[];
  cta: { label: string; url: string };
  priceLabel?: string;
}

const publications: Publication[] = [
  {
    type: "lecture",
    tier: "유료 · 중급",
    title: "Claude Code 개발 자동화 시스템",
    subtitle: "SDD 마스터클래스 — 프롬프트 지옥 탈출",
    meta: [
      { label: "플랫폼", value: "인프런 (Inflearn)" },
      { label: "강사명", value: "FlowCoder" },
      { label: "카테고리", value: "AI 에이전트 개발" },
      { label: "강의 시간", value: "2시간 19분 (11강)" },
      { label: "출간", value: "2026-03-17" },
    ],
    tags: ["Claude Code", "SDD", "AI 에이전트", "바이브코딩"],
    stats: [
      { icon: "users", value: "90+", label: "수강생" },
      { icon: "star", value: "4.7", label: "평점" },
    ],
    priceLabel: "39,600원",
    cta: { label: "강의 보기", url: "https://inf.run/pL2HN" },
  },
  {
    type: "lecture",
    tier: "무료 · 입문",
    title: "AI 처음으로 일 시키기",
    subtitle: "Claude Code 에이전틱 자동화 입문",
    meta: [
      { label: "플랫폼", value: "인프런 (Inflearn)" },
      { label: "강사명", value: "FlowCoder" },
      { label: "카테고리", value: "AI 시작하기" },
      { label: "강의 시간", value: "약 40분" },
      { label: "출간", value: "2026-04" },
    ],
    tags: ["비개발자", "업무 자동화", "AI 입문", "Claude"],
    stats: [
      { icon: "users", value: "77+", label: "수강생" },
      { icon: "star", value: "5.0", label: "평점" },
    ],
    priceLabel: "무료",
    cta: { label: "강의 보기", url: "https://inf.run/ocRsn" },
  },
  {
    type: "book",
    tier: "종이책 · 컬러",
    title: "Claude Code 개발 자동화 시스템",
    subtitle: "나만의 AI 개발 에이전트 만들기",
    meta: [
      { label: "저자", value: "박현일, 조용현" },
      { label: "출판사", value: "부크크 (BOOKK)" },
      { label: "규격", value: "B5 컬러, 196p" },
      { label: "ISBN", value: "9791112167613" },
      { label: "출간", value: "2026-03-27" },
    ],
    tags: ["인공지능", "IT 전문서", "AI 활용"],
    priceLabel: "37,000원",
    cta: {
      label: "구매하기",
      url: "https://bookk.co.kr/bookStore/69c5055fa7c4c98a477a4ab3",
    },
  },
  {
    type: "book",
    tier: "전자책 · PDF",
    title: "Claude Code 개발 자동화 시스템",
    subtitle: "나만의 AI 개발 에이전트 만들기",
    meta: [
      { label: "저자", value: "박현일, 조용현" },
      { label: "출판사", value: "부크크 (BOOKK)" },
      { label: "형태", value: "PDF 12.84MB" },
      { label: "ISBN", value: "9791112162854" },
      { label: "출간", value: "2026-03-19" },
    ],
    tags: ["인공지능", "IT 전문서", "AI 활용"],
    priceLabel: "20,000원",
    cta: {
      label: "구매하기",
      url: "https://bookk.co.kr/bookStore/69bb41aaa842e6ecd2e15c69",
    },
  },
];

function StatIcon({ type }: { type: "star" | "users" }) {
  if (type === "star") return <Star className="w-3.5 h-3.5 fill-[var(--neon)] text-[var(--neon)]" />;
  return <Users className="w-3.5 h-3.5 text-[var(--neon)]" />;
}

export function Publications() {
  return (
    <section id="publications" className="py-20 md:py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-medium text-[var(--neon)] tracking-[0.3em] uppercase mb-4">
            PUBLICATIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            강의와 저서로 검증된 전문성
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            인프런 강의 2건, 부크크 출간 도서 2종. 실무에서 검증된 방법론을 공개합니다.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={`${pub.type}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <Card className="relative h-full flex flex-col p-6 border border-white/10 hover:border-white/20 transition-colors duration-300 bg-white/[0.02]">
                {/* Type + Tier Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--neon)]/10 border border-[var(--neon)]/20 flex items-center justify-center">
                      {pub.type === "lecture" ? (
                        <GraduationCap className="w-5 h-5 text-[var(--neon)]" strokeWidth={1.5} />
                      ) : (
                        <BookOpen className="w-5 h-5 text-[var(--neon)]" strokeWidth={1.5} />
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40">
                        {pub.type === "lecture" ? "Online Course" : "Book"}
                      </p>
                      <p className="text-xs font-semibold text-[var(--neon)]">{pub.tier}</p>
                    </div>
                  </div>
                  {pub.priceLabel && (
                    <span className="text-sm font-bold text-white">{pub.priceLabel}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">
                  {pub.title}
                </h3>
                {pub.subtitle && (
                  <p className="text-sm text-white/50 mb-4">{pub.subtitle}</p>
                )}

                {/* Stats (lectures only) */}
                {pub.stats && (
                  <div className="flex gap-4 mb-4">
                    {pub.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <StatIcon type={stat.icon} />
                        <span className="text-sm font-semibold text-white">{stat.value}</span>
                        <span className="text-xs text-white/40">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Meta table */}
                <dl className="grid grid-cols-1 gap-1.5 mb-5 text-xs">
                  {pub.meta.map((row, i) => (
                    <div key={i} className="flex gap-3">
                      <dt className="w-20 shrink-0 text-white/40">{row.label}</dt>
                      <dd className="text-white/75">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pub.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      window.open(pub.cta.url, "_blank", "noopener,noreferrer")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {pub.cta.label}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
