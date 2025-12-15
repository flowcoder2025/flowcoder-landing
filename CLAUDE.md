# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🇰🇷 한글 소통 규칙

**이 프로젝트에서는 한글로 소통합니다.**

- **모든 대화는 한글로 진행**합니다
- 코드 주석, 변수명, 함수명은 영어를 사용합니다
- 커밋 메시지는 한글로 작성합니다
- 문서와 설명은 모두 한글로 작성합니다
- 기술 용어는 필요시 영어 원문을 병기합니다 (예: "컴포넌트(Component)")

## 프로젝트 개요

**FlowCoder 랜딩 페이지** - React 19, TypeScript, Tailwind CSS 4를 사용한 Next.js 16 기반 AI 트랜스포메이션 서비스 마케팅 사이트입니다.

이 사이트는 스토리텔링 프레임워크를 따릅니다: WHY → WHAT → HOW → NOW. 크리에이티브, 플랫폼, 자동화 카테고리에 걸쳐 9개의 AI 솔루션을 소개합니다.

## 개발 명령어

```bash
# 개발
npm run dev          # 개발 서버 시작 (http://localhost:3000)

# 프로덕션
npm run build        # 프로덕션 빌드
npm start            # 프로덕션 서버 시작

# 코드 품질
npm run lint         # ESLint 검사 실행
```

## 아키텍처

### 페이지 구조

10개의 섹션 컴포넌트로 구성된 싱글 페이지 애플리케이션(`src/app/page.tsx`):

```
Header → Hero → Metrics → WhatWeBuild → Portfolio → TechStack → Services → CTA → Footer
```

각 섹션은 `src/components/sections/`에 독립적인 React 컴포넌트로 존재합니다.

### 컴포넌트 구조

**섹션(Sections)** (`src/components/sections/`): 페이지의 주요 섹션 (Hero, Portfolio 등)
- `index.ts` 배럴 파일을 통해 export
- 독립적이며 최소한의 상호 의존성
- 시맨틱 HTML section 엘리먼트 사용

**UI 컴포넌트** (`src/components/ui/`): shadcn/ui 기반 재사용 가능한 기본 컴포넌트
- Radix UI 프리미티브 + Tailwind 스타일링
- class-variance-authority를 사용한 일관된 API
- 임포트 경로: `@/components/ui`

**SEO 컴포넌트** (`src/components/seo/`): 구조화된 데이터 (JSON-LD, FAQ 스키마)

### 주요 패턴

**텍스트 설정(Text Configuration)**: 환경별 텍스트 변형 (`src/lib/text-config.ts`)
- `standalone`: 비즈니스 톤 (기본값)
- `apps-in-toss`: 대화형 톤
- 문자열 하드코딩 대신 `BUTTON_TEXT`, `STATUS_TEXT`, `LABEL_TEXT` 상수 사용

**경로 별칭(Path Aliases)**:
- `@/*` → `src/*`
- `@/components/ui` → UI 컴포넌트
- `@/lib` → 유틸리티 및 설정

**스타일링**: `src/app/globals.css`의 디자인 토큰을 사용한 Tailwind CSS 4
- Outfit 폰트(제목) + Geist Mono(코드) 사용
- 반응형: 모바일 우선, `sm:`, `md:`, `lg:` 브레이크포인트
- CSS 변수를 통한 다크 모드 지원

### SEO 및 메타데이터

모든 메타데이터는 `src/app/layout.tsx`에 중앙 집중화되어 있습니다:
- Open Graph (Facebook, KakaoTalk)
- Twitter Cards
- JSON-LD 구조화된 데이터
- 한국어 중심 키워드 및 로케일

기본 URL: `https://about.flow-coder.com`

`layout.tsx`에서 교체가 필요한 인증 코드:
- `YOUR_GOOGLE_SITE_VERIFICATION_CODE`
- `YOUR_NAVER_SITE_VERIFICATION_CODE`

### 콘텐츠 원본

**사양서(Specification)**: `docs/LANDING_PAGE_SPEC.md`에 모든 콘텐츠, 구조, 브랜드 아이덴티티가 정의되어 있습니다
- 콘텐츠 업데이트 시 사양서를 먼저 확인하세요
- 포트폴리오 프로젝트, 기술 스택, 서비스 설명 포함
- "Build. Automate. Grow." 브랜드 태그라인 준수

## 중요 제약사항

**React 19**: React 19.2.0 사용 - 의존성 추가 시 호환성 확인 필요

**TypeScript Strict**: 모든 코드는 엄격한 타입 검사를 통과해야 합니다

**기본적으로 Server Component**: `"use client"` 표시가 없으면 Server Component입니다

**이미지 최적화**: 모든 이미지는 Next.js `<Image>` 컴포넌트 사용 (public/ 디렉토리)

**Framer Motion**: 애니메이션 사용 시 컴포넌트에 `"use client"` 지시어 표시 필요

**환경 변수**: 클라이언트에서 접근 가능한 변수는 `NEXT_PUBLIC_` 접두사 사용

## 프로젝트별 특이사항

- **한국어**: 주요 언어는 한국어입니다 (ko-KR 로케일)
- **B2B/B2G 초점**: 타겟 고객은 기업 및 공공기관
- **포트폴리오 쇼케이스**: 크리에이티브/플랫폼/자동화 카테고리의 9개 프로젝트
- **백엔드 없음**: 정적 사이트 - 현재 API 라우트나 서버 사이드 데이터 페칭 미구현
