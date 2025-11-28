/**
 * 배포 환경별 텍스트 설정
 *
 * @description
 * 배포 환경에 따라 사용자 대면 텍스트를 분기합니다:
 * - standalone: 독립 서비스 (Vercel) - 비즈니스 용어 (간결하고 전문적)
 * - apps-in-toss: 앱인토스 플랫폼 - 해요체 (친근하고 대화형)
 *
 * @example
 * ```tsx
 * import { BUTTON_TEXT } from '@/lib/text-config';
 *
 * <Button>{BUTTON_TEXT.contactUs}</Button>
 * // standalone: "문의하기"
 * // apps-in-toss: "문의해요"
 * ```
 */

// 배포 환경 감지
const DEPLOYMENT_ENV = process.env.NEXT_PUBLIC_DEPLOYMENT_ENV || 'standalone';
const isAppsInToss = DEPLOYMENT_ENV === 'apps-in-toss';

/**
 * 버튼 텍스트 설정
 */
export const BUTTON_TEXT = {
  // ========================================
  // CTA (Call-to-Action)
  // ========================================
  contactUs: isAppsInToss ? '문의해요' : '문의하기',
  consultRequest: isAppsInToss ? '상담 신청해요' : '상담 신청',
  proposalRequest: isAppsInToss ? '제안 요청해요' : '제안 요청',
  participate: isAppsInToss ? '참여해요' : '참여하기',
  learnMore: isAppsInToss ? '자세히 보기' : '자세히 보기',
  viewMore: isAppsInToss ? '더 보기' : '더 보기',
  startFree: isAppsInToss ? '무료로 시작해요' : '무료 시작',
  tryNow: isAppsInToss ? '지금 시도해요' : '지금 시도',

  // ========================================
  // 기본 액션 (Actions)
  // ========================================
  save: isAppsInToss ? '저장해요' : '저장',
  cancel: isAppsInToss ? '취소해요' : '취소',
  confirm: isAppsInToss ? '확인해요' : '확인',
  close: isAppsInToss ? '닫기' : '닫기',
  back: isAppsInToss ? '뒤로가기' : '뒤로',
  next: isAppsInToss ? '다음' : '다음',
  submit: isAppsInToss ? '제출해요' : '제출',

  // ========================================
  // 네비게이션 (Navigation)
  // ========================================
  home: isAppsInToss ? '홈' : '홈',
  portfolio: isAppsInToss ? '포트폴리오' : '포트폴리오',
  services: isAppsInToss ? '서비스' : '서비스',
  about: isAppsInToss ? '소개' : '소개',
  contact: isAppsInToss ? '연락처' : '연락처',
} as const;

/**
 * 상태 메시지 텍스트
 */
export const STATUS_TEXT = {
  // ========================================
  // 로딩 상태 (Loading States)
  // ========================================
  loading: isAppsInToss ? '불러오고 있어요' : '로딩 중',
  sending: isAppsInToss ? '전송하고 있어요' : '전송 중',
  processing: isAppsInToss ? '처리하고 있어요' : '처리 중',

  // ========================================
  // 완료 상태 (Completion States)
  // ========================================
  completed: isAppsInToss ? '완료했어요' : '완료',
  sent: isAppsInToss ? '전송했어요' : '전송됨',
  success: isAppsInToss ? '성공했어요' : '성공',

  // ========================================
  // 에러 상태 (Error States)
  // ========================================
  failed: isAppsInToss ? '실패했어요' : '실패',
  error: isAppsInToss ? '오류가 발생했어요' : '오류 발생',
} as const;

/**
 * 플레이스홀더 텍스트
 */
export const PLACEHOLDER_TEXT = {
  emailPlaceholder: isAppsInToss ? '이메일을 입력해주세요' : '이메일 입력',
  namePlaceholder: isAppsInToss ? '이름을 입력해주세요' : '이름 입력',
  messagePlaceholder: isAppsInToss ? '메시지를 입력해주세요' : '메시지 입력',
  companyPlaceholder: isAppsInToss ? '회사명을 입력해주세요' : '회사명 입력',
} as const;

/**
 * 라벨 텍스트
 */
export const LABEL_TEXT = {
  // ========================================
  // CTA 카드 라벨
  // ========================================
  enterprise: '기업 문의',
  government: '공공기관',
  education: '바이브코딩',

  // ========================================
  // 서비스 라벨
  // ========================================
  aiSolution: 'AI 솔루션 개발',
  automation: '자동화 컨설팅',
  governmentProject: '정부/공공 사업',
  systemBuild: '시스템 구축',
  lecture: '강의 · 세미나',
  community: '커뮤니티 참여',
} as const;

/**
 * TypeScript 타입 정의
 */
export type ButtonTextKey = keyof typeof BUTTON_TEXT;
export type StatusTextKey = keyof typeof STATUS_TEXT;
export type PlaceholderTextKey = keyof typeof PLACEHOLDER_TEXT;
export type LabelTextKey = keyof typeof LABEL_TEXT;

/**
 * 현재 배포 환경 확인 유틸리티
 */
export const isStandalone = DEPLOYMENT_ENV === 'standalone';
export const isAppsInTossEnv = DEPLOYMENT_ENV === 'apps-in-toss';

/**
 * 배포 환경 이름 가져오기
 */
export function getDeploymentEnvName(): string {
  return isAppsInToss ? '앱인토스' : '독립 서비스';
}
