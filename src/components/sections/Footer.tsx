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
      { name: "코나래", href: "#" },
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
  { name: "Email", href: "mailto:contact@flowcoder.io", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src="/favicon.ico"
                alt="FlowCoder Logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-gradient">FlowCoder</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              AI로 흐르는 비즈니스 혁신
            </p>
            <p className="text-xs text-muted-foreground">
              Build. Automate. Grow.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
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
        <div className="border-t mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} FlowCoder. All rights reserved.</p>
            <p className="mt-1">AX 전문 · AI 솔루션 빌더</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
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
