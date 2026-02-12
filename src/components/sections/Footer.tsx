"use client";

import { Github, Youtube, MessageCircle, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  solutions: {
    title: "솔루션",
    links: [
      { name: "FlowRetouch", href: "#" },
      { name: "FlowStudio", href: "#" },
      { name: "Gini AI", href: "#" },
      { name: "PPTMaker", href: "#" },
      { name: "FlowMate", href: "https://www.konarae.com" },
    ],
  },
  services: {
    title: "서비스",
    links: [
      { name: "자동화 컨설팅", href: "#" },
      { name: "n8n 챗봇 구축", href: "#" },
      { name: "RAG 시스템", href: "#" },
      { name: "마케팅 자동화", href: "#" },
    ],
  },
  education: {
    title: "바이브코딩",
    links: [
      { name: "유료 강의", href: "#" },
      { name: "세미나", href: "#" },
      { name: "워크샵", href: "#" },
      { name: "1:1 멘토링", href: "#" },
    ],
  },
  community: {
    title: "커뮤니티",
    links: [
      { name: "디스코드", href: "#", icon: MessageCircle },
      { name: "웹 커뮤니티", href: "#" },
      { name: "기술 블로그", href: "#" },
      { name: "뉴스레터", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Discord", href: "#", icon: MessageCircle },
  { name: "Email", href: "mailto:admin@flow-coder.com", icon: Mail },
];

const BRAND = {
  companyName: "플로우코더(FlowCoder)",
  businessNumber: "374-16-02889",
  representatives: "조용현, 박현일",
  address: "경기도 남양주시 홍유릉로248번길 26, 지하1층(금곡동)",
  email: "admin@flow-coder.com",
};

const legalLinks = [
  { name: "개인정보처리방침", href: "/privacy" },
  { name: "이용약관", href: "/terms" },
  { name: "환불약관", href: "/refund" },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="FlowCoder Logo"
                className="w-10 h-10 rounded-lg relative z-[10000]"
              />
              <span className="text-2xl font-bold text-white">FlowCoder</span>
            </Link>
            <p className="text-sm text-white/50 mb-4">
              AI로 흐르는 비즈니스 혁신
            </p>
            <p className="text-xs text-white/30">
              Build. Automate. Grow.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Business Info */}
        <div className="mb-6 space-y-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/30">
            <span>{BRAND.companyName}</span>
            <span className="text-white/10">|</span>
            <span>사업자등록번호: {BRAND.businessNumber}</span>
            <span className="text-white/10">|</span>
            <span>대표: {BRAND.representatives}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/30">
            <span>{BRAND.address}</span>
            <span className="text-white/10">|</span>
            <Link
              href={`mailto:${BRAND.email}`}
              className="hover:text-white transition-colors"
            >
              {BRAND.email}
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright & Legal Links */}
          <div className="text-sm text-white/30 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} FlowCoder. All rights reserved.</p>
            <div className="flex items-center gap-3 mt-2">
              {legalLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-3">
                  <Link
                    href={link.href}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/10">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
