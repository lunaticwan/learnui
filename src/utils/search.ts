import { getChoseong, disassemble, convertQwertyToHangul } from 'es-hangul';

/**
 * 한글 문자열에서 자음 초성만 추출하는 유틸리티 (es-hangul 활용).
 *
 * @param text 입력 문자열
 * @returns 초성 변환 문자열
 */
export function getChosung(text: string): string {
  if (!text) return '';
  try {
    return getChoseong(text);
  } catch {
    return text;
  }
}

/**
 * 한글 문자열의 자모를 완전히 분해하는 유틸리티 (es-hangul 활용).
 *
 * @param text 입력 문자열
 * @returns 분해된 자모 문자열
 */
export function disassembleHangul(text: string): string {
  if (!text) return '';
  try {
    return disassemble(text);
  } catch {
    return text;
  }
}

/**
 * 영문 QWERTY 입력 문자열을 한글로 자동 변환하는 유틸리티. (예: "qjtm" -> "버튼")
 *
 * @param text 영문 입력 문자열
 * @returns 한글 변환 문자열
 */
export function convertEnglishToHangul(text: string): string {
  if (!text) return '';
  try {
    return convertQwertyToHangul(text);
  } catch {
    return text;
  }
}

/**
 * 한국어 검색을 위한 문장부호 및 조사 정규화 유틸리티.
 *
 * @param text 원본 검색어 또는 대상 키워드
 * @returns 정규화된 키워드 문자열
 */
export function normalizeKorean(text: string): string {
  if (!text) return '';
  const particleRegex = /(에서|으로|까지|부터|은|는|이|가|을|를|로|의|와|과|도|에|들|만)(?=\s|$)/g;
  return text
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
    .replace(particleRegex, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 플랫폼 식별 키워드 매핑 테이블 */
const PLATFORM_MAP: Record<string, string> = {
  ios: 'ios',
  swiftui: 'ios',
  appkit: 'macos',
  iphone: 'ios',
  아이폰: 'ios',
  스위프트유아이: 'ios',
  android: 'android',
  안드로이드: 'android',
  kotlin: 'android',
  web: 'web',
  웹: 'web',
  html: 'web',
  react: 'web',
  macos: 'macos',
  맥: 'macos',
  mac: 'macos',
};

/** 의도/카테고리 키워드 매핑 테이블 */
const INTENT_MAP: Record<string, string> = {
  스타일: 'style',
  디자인: 'style',
  style: 'style',
  컴포넌트: 'component',
  ui: 'component',
  모듈: 'component',
  component: 'component',
  번역: 'page',
  대조표: 'page',
  용어: 'page',
};

/** UI 주요 개념 유의어/동의어 매핑 사전 */
export const SYNONYM_MAP: Record<string, string[]> = {
  알림: ['토스트', '스낵바', '노티', 'notification', 'toast', 'snackbar', 'alert'],
  토스트: ['알림', '스낵바', 'notification', 'toast', 'snackbar'],
  스낵바: ['토스트', '알림', 'snackbar', 'toast'],
  toast: ['토스트', '알림', '스낵바', 'notification'],
  모달: ['다이얼로그', '팝업', '대화상자', 'modal', 'dialog', 'popup'],
  다이얼로그: ['모달', '팝업', '대화상자', 'dialog', 'modal'],
  팝업: ['모달', '다이얼로그', '대화상자', 'popup', 'modal'],
  modal: ['모달', '다이얼로그', '팝업'],
  dialog: ['다이얼로그', '모달', '팝업'],
  스위치: ['토글', '온오프', 'switch', 'toggle'],
  토글: ['스위치', '온오프', 'toggle', 'switch'],
  드롭다운: ['셀렉트', '콤보박스', '피커', 'dropdown', 'select', 'picker'],
  피커: ['셀렉트', '드롭다운', 'picker', 'select'],
  네비게이션: ['상단바', '헤더', '메뉴', 'navigation', 'header', 'navbar'],
  탭: ['네비게이션', '카테고리', 'tab'],
  로딩: ['인디케이터', '스피너', '프로그레스', 'progress', 'spinner', 'loader'],
  스피너: ['로딩', '인디케이터', 'spinner', 'loading'],
  글래스모피즘: ['투명', '유리', '아크릴', 'glassmorphic', 'glassmorphism'],
  뉴모피즘: ['입체', 'neumorphic', 'neumorphism'],
};

/** 자연어 쿼리 분석 결과 인터페이스 */
export interface ParsedQuery {
  rawQuery: string;
  normalizedQuery: string;
  convertedHangulQuery?: string;
  platformFilter?: string;
  intentFilter?: string;
  cleanTokens: string[];
  synonymTokens: string[];
  nGrams: string[];
  chosungQuery: string;
  disassembledQuery: string;
}

/**
 * 영문 오타(QWERTY 입력) 및 자연어 검색 쿼리를 분석하여 플랫폼, 의도, 키워드 토큰, N-gram, 초성, 자모 분해 결과를 리턴하는 파서.
 *
 * @param query 사용자가 입력한 자연어 검색어 (예: "dlhdth qjtm" -> "이요소 버튼")
 * @returns 분석된 자연어 쿼리 객체
 */
export function parseNaturalLanguageQuery(query: string): ParsedQuery {
  const rawQuery = query || '';

  // 영문 자판 입력 여부 확인 및 한글 오타 자동 변환
  let convertedHangulQuery: string | undefined = undefined;
  if (/^[a-zA-Z0-9\s.,/#!$%^&*;:{}=\-_`~()]+$/.test(rawQuery) && /[a-zA-Z]/.test(rawQuery)) {
    const converted = convertEnglishToHangul(rawQuery);
    if (converted !== rawQuery) {
      convertedHangulQuery = converted;
    }
  }

  const queryToParse = convertedHangulQuery ? `${rawQuery} ${convertedHangulQuery}` : rawQuery;
  const normalized = normalizeKorean(queryToParse);
  const rawTokens = queryToParse.toLowerCase().split(/\s+/).filter(Boolean);
  const normTokens = normalized.split(/\s+/).filter(Boolean);

  let platformFilter: string | undefined = undefined;
  let intentFilter: string | undefined = undefined;

  // 1. 플랫폼 및 의도 문맥 분석/분리
  const remainingTokens: string[] = [];

  for (const token of rawTokens) {
    const normToken = normalizeKorean(token);

    if (!platformFilter && PLATFORM_MAP[normToken]) {
      platformFilter = PLATFORM_MAP[normToken];
      continue;
    }
    if (!intentFilter && INTENT_MAP[normToken]) {
      intentFilter = INTENT_MAP[normToken];
      continue;
    }

    // 서술어 및 일반 불용어 필터링 (예: 찾아줘, 알려줘, 보여줘 등)
    if (/(찾아줘|알려줘|보여줘|검색|추천|어디|서치)/.test(normToken)) {
      continue;
    }

    if (token.trim()) {
      remainingTokens.push(token);
    }
  }

  // 2. 토큰 및 연속 N-gram 키워드 조합 생성 (2-gram, 3-gram)
  const cleanTokens = normTokens.filter((t) => !PLATFORM_MAP[t] && !INTENT_MAP[t]);
  const nGrams: string[] = [...cleanTokens];

  for (let i = 0; i < cleanTokens.length - 1; i++) {
    nGrams.push(`${cleanTokens[i]}${cleanTokens[i + 1]}`);
    nGrams.push(`${cleanTokens[i]} ${cleanTokens[i + 1]}`);
  }

  // 3. 유의어/동의어 확장 토큰 추출
  const synonymSet = new Set<string>();
  for (const token of cleanTokens) {
    const synonyms = SYNONYM_MAP[token] || [];
    synonyms.forEach((s) => synonymSet.add(s));
  }
  const synonymTokens = Array.from(synonymSet);

  const chosungQuery = getChosung(queryToParse).replace(/\s+/g, '');
  const disassembledQuery = disassembleHangul(queryToParse).replace(/\s+/g, '');

  return {
    rawQuery,
    normalizedQuery: normalized,
    convertedHangulQuery,
    platformFilter,
    intentFilter,
    cleanTokens,
    synonymTokens,
    nGrams,
    chosungQuery,
    disassembledQuery,
  };
}
