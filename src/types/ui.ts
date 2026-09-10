/**
 * 다국어 로케일 타입 정의.
 */
export type Locale = 'en' | 'ko';

/**
 * 언어 표시 모드 타입 정의.
 */
export type LangMode = 'ko' | 'en' | 'bilingual';

/**
 * 다국어 문자열 구조체.
 * 영문(en) 및 한국어(ko) 텍스트를 보유하며, 로케일 폴백을 지원함.
 */
export interface LocalizedString {
  /** 영문 원문 텍스트 */
  en?: string;
  /** 한국어 번역 텍스트 */
  ko?: string;
  [key: string]: any;
}

/**
 * 다국어 문자열에서 요청한 로케일에 맞는 문자열을 추출하는 유틸리티 함수.
 * 한국어('ko') 기본값 추출 시 'ko' -> 'en' 순으로 폴백 처리함.
 *
 * @param loc 다국어 문자열 객체
 * @param locale 요청할 로케일
 * @returns 추출된 텍스트 문자열
 */
export function getLocalizedString(loc: LocalizedString | undefined, locale: Locale): string {
  if (!loc) return '';
  if (locale === 'ko') return loc.ko || loc.en || '';
  if (locale === 'en') return loc.en || loc.ko || '';
  return loc.ko || loc.en || '';
}

/**
 * UI 구성요소 항목 (Entry) 데이터 모델.
 */
export interface UIEntry {
  /** 고유 슬러그 식별자 (예: 'text-scramble', 'button') */
  slug: string;
  /** 소속 플랫폼 ('web' | 'macos' 등) */
  platform: string;
  /** UI 항목명 (영문 및 한국어) */
  name: LocalizedString;
  /** 요약 한 줄 설명 */
  tagline: LocalizedString;
  /** 본문 상세 설명 */
  description: LocalizedString;
  /** 동의어 및 키워드 별칭 목록 */
  aka?: {
    en?: string[];
    ko?: string[];
    [key: string]: any;
  };
  /** 퍼지 검색용 인텐트 문장 목록 */
  fuzzy?: {
    en?: string[];
    ko?: string[];
    [key: string]: any;
  };
  /** 연관 UI 항목 슬러그 배열 */
  relatedSlugs?: string[];
  [key: string]: any;
}

/**
 * 디자인 스타일 메타데이터 구조체.
 */
export interface StyleMeta {
  order?: number;
  badge?: string;
  [key: string]: any;
}

/**
 * UI 비주얼 스타일 (Style) 데이터 모델.
 */
export interface UIStyle {
  /** 스타일 고유 슬러그 (예: 'skeuomorphism', 'glassmorphism') */
  slug: string;
  /** 스타일 명칭 */
  name: LocalizedString;
  /** 스타일 핵심 태그라인 */
  tagline?: LocalizedString;
  /** 적용 범위 및 컨텍스트 */
  scope?: LocalizedString;
  /** 검색 및 설명용 별칭 구문 목록 */
  aliases?: {
    en?: string[];
    ko?: string[];
    [key: string]: any;
  };
  /** 메타데이터 정보 */
  meta?: StyleMeta;
  [key: string]: any;
}

/**
 * 플랫폼별 UI 명칭 대조표 항목 데이터 모델.
 */
export interface TranslateTableItem {
  /** 웹 표준 영문 UI 명칭 */
  nameEn: string;
  /** 한국어 UI 명칭 */
  nameKo: string;
  /** Apple iOS / SwiftUI 명칭 및 연관 API */
  ios: string;
  /** Google Android / Jetpack Compose 명칭 및 연관 API */
  android: string;
  /** 연관 UI 상세 엔트리 슬러그 */
  slug?: string;
}

/**
 * UI 공통 카피 문자열 사전 타입.
 */
export interface UICopy {
  [key: string]: LocalizedString;
}
