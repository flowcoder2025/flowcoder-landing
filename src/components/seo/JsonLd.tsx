"use client";

/**
 * JSON-LD 구조화된 데이터 컴포넌트
 * Google Rich Snippets과 한국 검색 엔진(네이버, 카카오) SEO 최적화
 */

// Organization 스키마 - 회사 정보
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://about.flow-coder.com/#organization",
  name: "FlowCoder",
  alternateName: "플로우코더",
  url: "https://about.flow-coder.com",
  logo: {
    "@type": "ImageObject",
    url: "https://about.flow-coder.com/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "AX(AI Transformation) 전문 팀. AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육까지.",
  slogan: "Build. Automate. Grow.",
  foundingDate: "2024",
  areaServed: {
    "@type": "Country",
    name: "South Korea",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 37.5665,
      longitude: 126.978,
    },
    geoRadius: "50000",
  },
  knowsAbout: [
    "AI 솔루션 개발",
    "자동화 컨설팅",
    "바이브코딩",
    "n8n 자동화",
    "RAG 시스템",
    "Next.js 개발",
    "React 개발",
  ],
  sameAs: [
    // 소셜 미디어 링크 추가 시 활성화
    // "https://www.linkedin.com/company/flowcoder",
    // "https://github.com/flowcoder-io",
  ],
};

// WebSite 스키마 - 사이트 정보
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://about.flow-coder.com/#website",
  url: "https://about.flow-coder.com",
  name: "FlowCoder",
  alternateName: "플로우코더",
  description: "AI로 흐르는 비즈니스 혁신",
  publisher: {
    "@id": "https://about.flow-coder.com/#organization",
  },
  inLanguage: "ko-KR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://about.flow-coder.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Service 스키마 - 서비스 목록
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://about.flow-coder.com/#services",
  name: "FlowCoder 서비스",
  description: "FlowCoder가 제공하는 AI 솔루션 및 컨설팅 서비스",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": "https://about.flow-coder.com/#ai-solution",
        name: "AI 솔루션 개발",
        alternateName: "AI Solution Development",
        description:
          "맞춤형 AI 솔루션 개발. RAG 시스템, 챗봇, 데이터 분석 자동화 등",
        provider: {
          "@id": "https://about.flow-coder.com/#organization",
        },
        serviceType: "AI Development",
        areaServed: {
          "@type": "Country",
          name: "South Korea",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": "https://about.flow-coder.com/#automation",
        name: "자동화 컨설팅",
        alternateName: "Automation Consulting",
        description:
          "n8n 기반 업무 자동화 컨설팅. 워크플로우 설계부터 구축까지",
        provider: {
          "@id": "https://about.flow-coder.com/#organization",
        },
        serviceType: "Automation Consulting",
        areaServed: {
          "@type": "Country",
          name: "South Korea",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": "https://about.flow-coder.com/#vibecode",
        name: "바이브코딩 교육",
        alternateName: "VibeCoding Education",
        description:
          "AI 시대의 새로운 개발 방법론. 비개발자도 AI와 함께 코딩하는 법",
        provider: {
          "@id": "https://about.flow-coder.com/#organization",
        },
        serviceType: "Education",
        areaServed: {
          "@type": "Country",
          name: "South Korea",
        },
      },
    },
  ],
};

// ProfessionalService 스키마 - B2B/B2G 전문 서비스
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://about.flow-coder.com/#professional-service",
  name: "FlowCoder",
  alternateName: "플로우코더",
  url: "https://about.flow-coder.com",
  description:
    "AX(AI Transformation) 전문 팀. 기업 및 공공기관을 위한 AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육 서비스",
  priceRange: "₩₩₩",
  areaServed: {
    "@type": "Country",
    name: "South Korea",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "FlowCoder 서비스 카탈로그",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI 솔루션 개발",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "자동화 컨설팅",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "바이브코딩 교육",
        },
      },
    ],
  },
};

// WebPage 스키마 - 메인 페이지
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://about.flow-coder.com/#webpage",
  url: "https://about.flow-coder.com",
  name: "FlowCoder | AI로 흐르는 비즈니스 혁신",
  description:
    "AX(AI Transformation) 전문 팀 FlowCoder. AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육까지.",
  isPartOf: {
    "@id": "https://about.flow-coder.com/#website",
  },
  about: {
    "@id": "https://about.flow-coder.com/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://about.flow-coder.com/og-image.jpg",
  },
  inLanguage: "ko-KR",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

// BreadcrumbList 스키마 - 내비게이션 경로
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: "https://about.flow-coder.com",
    },
  ],
};

// FAQ 스키마 - 자주 묻는 질문 (필요시 활성화)
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "FlowCoder는 어떤 서비스를 제공하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FlowCoder는 AI 솔루션 개발, n8n 기반 자동화 컨설팅, 바이브코딩 교육 서비스를 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "바이브코딩이란 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "바이브코딩은 AI 시대의 새로운 개발 방법론으로, 비개발자도 AI와 함께 코딩할 수 있는 접근 방식입니다.",
      },
    },
    {
      "@type": "Question",
      name: "기업 맞춤 솔루션도 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, FlowCoder는 기업 및 공공기관을 위한 맞춤형 AI 솔루션을 개발합니다. B2B 및 B2G 프로젝트 경험이 풍부합니다.",
      },
    },
  ],
};

// 모든 스키마를 하나의 그래프로 결합
export const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    professionalServiceSchema,
    webPageSchema,
    breadcrumbSchema,
    servicesSchema,
  ],
};

interface JsonLdProps {
  schema?: object;
}

export function JsonLd({ schema = combinedSchema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}

// FAQ 스키마용 별도 컴포넌트
export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema, null, 0),
      }}
    />
  );
}

export default JsonLd;
