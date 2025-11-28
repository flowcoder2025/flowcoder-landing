import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowCoder | AI로 흐르는 비즈니스 혁신",
  description:
    "AX(AI Transformation) 전문 팀 FlowCoder. AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육까지. Build. Automate. Grow.",
  keywords: [
    "FlowCoder",
    "AI 솔루션",
    "자동화 컨설팅",
    "n8n",
    "RAG",
    "바이브코딩",
    "AI 개발",
    "Next.js",
    "React",
  ],
  authors: [{ name: "FlowCoder Team" }],
  openGraph: {
    title: "FlowCoder | AI로 흐르는 비즈니스 혁신",
    description:
      "AX(AI Transformation) 전문 팀. AI 솔루션, 자동화 컨설팅, 바이브코딩 교육.",
    url: "https://flowcoder.io",
    siteName: "FlowCoder",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowCoder | AI로 흐르는 비즈니스 혁신",
    description: "AX(AI Transformation) 전문 팀. Build. Automate. Grow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
