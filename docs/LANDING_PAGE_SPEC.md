# FlowCoder Landing Page Specification

팀 FlowCoder의 랜딩페이지 구조, 콘텐츠, 브랜딩 사양서

---

## 1. Brand Identity

### 1.1 Brand Name & Tagline
```
Brand Name: FlowCoder (플로우코더)
Tagline: Build. Automate. Grow.
Slogan: AI로 흐르는 비즈니스 혁신
Position: AX(AI Transformation) 전문 팀
```

---

## 2. Page Structure

### 2.1 Storytelling Framework
```
WHY → WHAT → HOW → NOW

[1] WHY (Hero): 왜 AI가 필요한가?
[2] WHAT (Metrics + Categories + Portfolio): 무엇을 만들었나?
[3] HOW (TechStack + Services): 어떻게 만드는가?
[4] NOW (CTA): 이제 시작하세요
```

### 2.2 Section Flow
```
1. Hero        - WHY: 철학과 비전
2. Metrics     - 신뢰 지표
3. WhatWeBuild - WHAT: 3가지 카테고리
4. Portfolio   - 9개 프로젝트 쇼케이스
5. TechStack   - HOW: 기술 스택
6. Services    - 2 Column 서비스
7. CTA         - NOW: B2B/B2G 액션
8. Footer      - 링크 및 연락처
```

---

## 3. Section Content Details

### 3.1 Hero Section
```yaml
Badge: "AX(AI Transformation) 전문 팀"
Headline: "AI는 선택이 아닌 기반입니다"
Sub-headline: "모든 비즈니스에 AI가 흘러야 합니다."
Tagline: "AI로 흐르는 비즈니스 혁신"

CTA Buttons:
  - Primary: "솔루션 보기"
  - Secondary: "자동화 문의"
  - Tertiary: "강의 신청"
  - Ghost: "커뮤니티"

Brand Signature:
  - Logo Text: "FlowCoder"
  - Tagline: "Build. Automate. Grow."
```

### 3.2 Metrics Section
```yaml
Metrics:
  - value: "9+"
    label: "AI 솔루션"
    sublabel: "구축 완료"

  - value: "98%"
    label: "비용 절감"
    sublabel: "실측 달성"

  - value: "10K+"
    label: "스케일 검증"
    sublabel: "아키텍처"

  - value: "95%"
    label: "개발시간 단축"
    sublabel: "프레임워크"
```

### 3.3 WhatWeBuild Section
```yaml
Section Label: "WHAT"
Title: "우리는 9개의 AI 솔루션을 직접 구축했습니다."

Categories:
  - name: "크리에이티브"
    emoji: "🎨"
    description: "이미지, 영상, 문서 — AI가 자동으로 생성합니다."
    features:
      - 웨딩 사진 AI 보정
      - 이커머스 상품 이미지
      - AI 아바타 영상
      - PPT 자동 생성

  - name: "플랫폼"
    emoji: "🚀"
    description: "지원사업, 여행, 비즈니스 운영 — AI가 최적화합니다."
    features:
      - 정부 지원사업 추천
      - AI 여행 일정
      - 프리랜서 운영 자동화
      - 커뮤니티 플랫폼

  - name: "자동화"
    emoji: "🔧"
    description: "챗봇, RAG, 마케팅 — 반복에서 해방됩니다."
    features:
      - n8n 기반 챗봇
      - RAG 시스템 구축
      - 마케팅 자동화
      - 원소스멀티유즈
```

### 3.4 Portfolio Section
```yaml
Section Label: "PORTFOLIO"
Title: "프로젝트 쇼케이스"

Filter Categories:
  - all: "전체"
  - creative: "크리에이티브"
  - platform: "플랫폼"
  - automation: "자동화"
  - devtools: "개발자도구"

Projects:
  1. FlowRetouch (플로우리터치)
     - emoji: "💒"
     - category: creative
     - description: "AI 기반 웨딩 사진 보정 서비스"
     - highlight: "스튜디오 품질 즉시 완성"
     - tags: [Gemini, Next.js, Image AI]

  2. FlowStudio (플로우스튜디오)
     - emoji: "🛍️"
     - category: creative
     - description: "이커머스 AI 상품 이미지 생성 플랫폼"
     - highlight: "$0.04/이미지"
     - tags: [Gemini, Supabase, E-commerce]

  3. Gini AI (지니 AI)
     - emoji: "🎬"
     - category: creative
     - description: "PDF→AI 아바타 영상 자동 변환"
     - highlight: "15분 내 3분 영상 제작"
     - tags: [ElevenLabs, D-ID, Video AI]

  4. PPTMaker (PPT메이커)
     - emoji: "📊"
     - category: creative
     - description: "AI 프레젠테이션 자동 생성 SaaS"
     - highlight: "98% 비용 절감"
     - tags: [Gemini, PptxGenJS, SaaS]

  5. 코나래 (Konarae)
     - emoji: "🏛️"
     - category: platform
     - description: "정부 지원사업 통합 플랫폼"
     - highlight: "10K+ 동시 사용자"
     - tags: [Next.js, Supabase, Microservices]

  6. OneTrip (원트립)
     - emoji: "✈️"
     - category: platform
     - description: "AI 여행 일정 자동화 플랫폼"
     - highlight: "문서→여행 계획 자동화"
     - tags: [LangGraph, OpenAI, Travel]

  7. Weave (위브)
     - emoji: "💼"
     - category: platform
     - description: "프리랜서 비즈니스 운영 플랫폼"
     - highlight: "주 10시간+ 절약"
     - tags: [Next.js, Supabase, Automation]

  8. Flow_Coder (플로우코더 커뮤니티)
     - emoji: "🌊"
     - category: [platform, devtools]
     - description: "바이브코딩 개발자 커뮤니티 플랫폼"
     - highlight: "바이브코딩 허브"
     - tags: [Next.js, Prisma, Community]

  9. FlowCoder Skills (플로우코더 스킬)
     - emoji: "⚡"
     - category: [devtools, automation]
     - description: "Claude Code 스킬 프레임워크"
     - highlight: "95% 개발시간 단축"
     - tags: [Claude, Skills, Framework]
```

### 3.5 TechStack Section
```yaml
Section Label: "HOW"
Title: "최신 기술로 실제 문제를 해결합니다"

Tech Categories:
  - name: "Frontend"
    technologies: [Next.js 16, React 19, TypeScript, Tailwind CSS 4]

  - name: "Backend"
    technologies: [Supabase, Prisma, PostgreSQL, FastAPI]

  - name: "AI/ML"
    technologies: [Google Gemini, OpenAI, Claude, LangGraph]

  - name: "Multimodal"
    technologies: [ElevenLabs, D-ID, Veo, Perplexity]

  - name: "Automation"
    technologies: [n8n, RAG, Vector DB, Workflow Engine]

Footer Text: "프로덕션 레벨의 검증된 기술 스택으로 안정적인 서비스를 구축합니다."
```

### 3.6 Services Section
```yaml
Section Label: "SERVICES"
Title: "솔루션 그 이상을 제공합니다"

Two Column Layout:

Column 1 - 자동화 컨설팅:
  - icon: Cog
  - tagline: "반복 업무에서 해방되세요."
  - services:
    - n8n 기반 AI 챗봇 (맞춤형 대화형 AI 시스템 구축)
    - RAG 시스템 구축 (기업 맞춤 지식 검색 AI)
    - 마케팅 자동화 (리드 생성부터 육성까지 자동화)
    - 원소스멀티유즈 (콘텐츠 다채널 자동 배포)
  - CTA: "무료 상담 신청"

Column 2 - 바이브코딩:
  - icon: GraduationCap
  - tagline: "AI 시대의 개발자로 함께 성장하세요."
  - 교육:
    - 유료 강의 · 세미나
    - 워크샵 · 1:1 멘토링
    - 기업 교육
  - 커뮤니티:
    - 디스코드 · 웹 커뮤니티
    - 기술 블로그 · 뉴스레터
  - CTA: "참여하기"
```

### 3.7 CTA Section
```yaml
Section Label: "NOW"
Title: "이제 당신의 비즈니스에 AI를 흐르게 할 차례입니다"

Three CTA Cards:

Card 1 - 기업 문의:
  - icon: Building2
  - items: [AI 솔루션 개발, 자동화 컨설팅]
  - CTA: "상담 신청"

Card 2 - 공공기관:
  - icon: Landmark
  - items: [정부/공공 사업, 시스템 구축]
  - CTA: "제안 요청"

Card 3 - 바이브코딩:
  - icon: GraduationCap
  - items: [강의 · 세미나, 커뮤니티 참여]
  - CTA: "참여하기"

Brand Signature:
  - Logo: "FlowCoder"
  - Tagline: "Build. Automate. Grow."
```

### 3.8 Footer Section
```yaml
Brand Column:
  - Logo: "FlowCoder"
  - Description: "AI로 흐르는 비즈니스 혁신"
  - Tagline: "Build. Automate. Grow."

Link Groups:
  솔루션:
    - FlowRetouch
    - FlowStudio
    - Gini AI
    - PPTMaker
    - 코나래

  서비스:
    - 자동화 컨설팅
    - n8n 챗봇 구축
    - RAG 시스템
    - 마케팅 자동화

  바이브코딩:
    - 유료 강의
    - 세미나
    - 워크샵
    - 1:1 멘토링

  커뮤니티:
    - 디스코드
    - 웹 커뮤니티
    - 기술 블로그
    - 뉴스레터

Social Links:
  - GitHub
  - YouTube
  - Discord
  - Email (contact@flowcoder.io)

Copyright: "© 2025 FlowCoder. All rights reserved."
```

---

## 4. Component File Structure

```
src/
├── app/
│   ├── layout.tsx          # 폰트, SEO 메타데이터
│   ├── page.tsx            # 메인 페이지 (8개 섹션 조합)
│   └── globals.css         # 디자인 토큰, 유틸리티 클래스
├── components/
│   ├── sections/
│   │   ├── index.ts        # 섹션 컴포넌트 export
│   │   ├── Hero.tsx        # [1] WHY
│   │   ├── Metrics.tsx     # [2] 신뢰 지표
│   │   ├── WhatWeBuild.tsx # [3] WHAT 카테고리
│   │   ├── Portfolio.tsx   # [4] 9개 프로젝트
│   │   ├── TechStack.tsx   # [5] HOW 기술 스택
│   │   ├── Services.tsx    # [6] 2 Column 서비스
│   │   ├── CTA.tsx         # [7] NOW B2B/B2G
│   │   └── Footer.tsx      # [8] 푸터
│   └── ui/                 # shadcn/ui 컴포넌트
├── lib/
│   └── text-config.ts      # 환경별 텍스트 설정
└── docs/
    └── LANDING_PAGE_SPEC.md # 이 문서
```

---

## 5. SEO & Metadata

```yaml
title: "FlowCoder | AI로 흐르는 비즈니스 혁신"
description: "AX(AI Transformation) 전문 팀 FlowCoder. AI 솔루션 개발, 자동화 컨설팅, 바이브코딩 교육까지. Build. Automate. Grow."
keywords:
  - FlowCoder
  - AI 솔루션
  - 자동화 컨설팅
  - n8n
  - RAG
  - 바이브코딩
  - AI 개발
  - Next.js
  - React

openGraph:
  title: "FlowCoder | AI로 흐르는 비즈니스 혁신"
  description: "AX(AI Transformation) 전문 팀. AI 솔루션, 자동화 컨설팅, 바이브코딩 교육."
  url: "https://flowcoder.io"
  siteName: "FlowCoder"
  locale: "ko_KR"
  type: "website"
```

---

## 6. Environment Configuration

### Text Config (lib/text-config.ts)
```yaml
# 배포 환경별 텍스트 전환
# standalone: 비즈니스 용어 (간결하고 전문적)

NEXT_PUBLIC_DEPLOYMENT_ENV: standalone  
```

