import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://about.flow-coder.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  // 기본 메타데이터
  title: {
    default: "FlowCoder | AI로 흐르는 비즈니스 혁신",
    template: "%s | FlowCoder",
  },
  description:
    "AX(AI Transformation) 전문 팀 FlowCoder. AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육까지. 기업과 공공기관을 위한 맞춤형 AI 서비스. Build. Automate. Grow.",

  // 확장된 키워드 (한국어 + 영어)
  keywords: [
    // 한국어 키워드
    "FlowCoder",
    "플로우코더",
    "AI 솔루션",
    "AI 솔루션 개발",
    "자동화 컨설팅",
    "바이브코딩",
    "바이브코딩 교육",
    "n8n 자동화",
    "n8n 컨설팅",
    "RAG 시스템",
    "AI 개발",
    "AI 트랜스포메이션",
    "AX",
    "업무 자동화",
    "워크플로우 자동화",
    "AI 챗봇 개발",
    "맞춤형 AI",
    "기업 AI 솔루션",
    "공공기관 AI",
    "B2B AI",
    "B2G AI",
    // 영어 키워드
    "AI Solution Development",
    "Automation Consulting",
    "VibeCoding",
    "n8n Automation",
    "RAG System",
    "AI Transformation",
    "Workflow Automation",
    "Next.js",
    "React",
  ],

  authors: [{ name: "FlowCoder Team", url: baseUrl }],
  creator: "FlowCoder",
  publisher: "FlowCoder",

  // 로봇 설정
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: baseUrl,
    languages: {
      "ko-KR": baseUrl,
    },
  },

  // 아이콘 설정
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.ico", sizes: "180x180" }],
  },

  // Open Graph (Facebook, LinkedIn, 카카오톡 등)
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: baseUrl,
    siteName: "FlowCoder",
    title: "FlowCoder | AI로 흐르는 비즈니스 혁신",
    description:
      "AX(AI Transformation) 전문 팀. AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육. 기업과 공공기관을 위한 맞춤형 AI 서비스.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowCoder - AI로 흐르는 비즈니스 혁신",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "FlowCoder | AI로 흐르는 비즈니스 혁신",
    description:
      "AX(AI Transformation) 전문 팀. AI 솔루션, 자동화 컨설팅, 바이브코딩 교육. Build. Automate. Grow.",
    images: ["/og-image.png"],
    creator: "@flowcoder_io",
    site: "@flowcoder_io",
  },

  // 검색 엔진 검증 (실제 값으로 교체 필요)
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Google Search Console
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // yahoo: "YOUR_YAHOO_VERIFICATION_CODE",
    other: {
      // 네이버 서치어드바이저
      "naver-site-verification": "YOUR_NAVER_SITE_VERIFICATION_CODE",
      // 카카오 검증 (필요시)
      // "kakao-verification": "YOUR_KAKAO_VERIFICATION_CODE",
    },
  },

  // 앱 링크 (향후 앱 출시 시)
  // appLinks: {
  //   ios: {
  //     url: "flowcoder://",
  //     app_store_id: "app_store_id",
  //   },
  //   android: {
  //     package: "io.flowcoder.app",
  //     app_name: "FlowCoder",
  //   },
  // },

  // 카테고리
  category: "technology",

  // 분류
  classification: "Business, Technology, AI, Automation",

  // 기타 메타데이터
  other: {
    // 네이버 검색 최적화
    "naver-site-verification": "YOUR_NAVER_VERIFICATION_CODE",

    // 모바일 앱 배너 (향후 앱 출시 시)
    // "apple-itunes-app": "app-id=YOUR_APP_ID",
    // "google-play-app": "app-id=io.flowcoder.app",

    // 저작권
    copyright: "FlowCoder",

    // 지역 정보
    "geo.region": "KR",
    "geo.placename": "Seoul, South Korea",

    // 연락처
    "contact:email": "hello@flowcoder.io",

    // 비즈니스 유형
    "business:contact_data:street_address": "Seoul, South Korea",
    "business:contact_data:country_name": "South Korea",

    // 언어
    "content-language": "ko",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화된 데이터 */}
        <JsonLd />
        <FaqJsonLd />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect for faster font loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
