/** 한글 유니코드 초성 배열 (ㄱ~ㅎ) */
export const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

/**
 * 한글 문자열에서 자음 초성만 추출하는 유틸리티.
 *
 * @param text 입력 문자열
 * @returns 초성 변환 문자열
 */
export function getChosung(text: string): string {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 0xac00 && code <= 0xd7a3) {
      const chosungIndex = Math.floor((code - 0xac00) / 588);
      result += CHOSUNG_LIST[chosungIndex];
    } else {
      result += text[i];
    }
  }
  return result;
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

/** 자연어 쿼리 분석 결과 인터페이스 */
export interface ParsedQuery {
  rawQuery: string;
  normalizedQuery: string;
  platformFilter?: string;
  intentFilter?: string;
  cleanTokens: string[];
  nGrams: string[];
  chosungQuery: string;
}

/**
 * 자연어 검색 쿼리를 입력받아 플랫폼, 의도, 키워드 토큰, N-gram 조합 및 초성을 분석 분리하는 파서.
 *
 * @param query 사용자가 입력한 자연어 검색어 (예: "iOS용 버튼 컴포넌트 찾아줘")
 * @returns 분석된 자연어 쿼리 객체
 */
export function parseNaturalLanguageQuery(query: string): ParsedQuery {
  const rawQuery = query || '';
  const normalized = normalizeKorean(rawQuery);
  const rawTokens = rawQuery.toLowerCase().split(/\s+/).filter(Boolean);
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

  const chosungQuery = getChosung(rawQuery).replace(/\s+/g, '');

  return {
    rawQuery,
    normalizedQuery: normalized,
    platformFilter,
    intentFilter,
    cleanTokens,
    nGrams,
    chosungQuery,
  };
}
