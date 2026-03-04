import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { JsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

const GA_MEASUREMENT_ID = "G-RHEF45Q8QV";

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
  themeColor: "#050505",
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

  // 핵심 키워드 (SEO 최적화)
  keywords: [
    "FlowCoder",
    "플로우코더",
    "AI 솔루션",
    "AI 솔루션 개발",
    "자동화 컨설팅",
    "바이브코딩",
    "n8n 자동화",
    "RAG 시스템",
    "AI 트랜스포메이션",
    "업무 자동화",
    "기업 AI 솔루션",
    "B2B AI",
    "B2G AI",
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
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlowCoder - AI로 흐르는 비즈니스 혁신",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "FlowCoder | AI로 흐르는 비즈니스 혁신",
    description:
      "AX(AI Transformation) 전문 팀. AI 솔루션, 자동화 컨설팅, 바이브코딩 교육. Build. Automate. Grow.",
    images: ["/og-image.jpg"],
    creator: "@flowcoder_io",
    site: "@flowcoder_io",
  },

  // 검색 엔진 검증 코드
  // Google: https://search.google.com/search-console → 속성 추가 → HTML 태그 방식
  // 네이버: https://searchadvisor.naver.com → 사이트 등록 → HTML 태그 방식
  // TODO: GSC에서 실제 google verification 코드를 발급받아 아래에 추가하세요
  verification: {
    other: {
      "naver-site-verification": "5bbb907d7a834f0423f0ab38007c001f8b47fda0",
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

        {/* Pretendard Variable Font */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
