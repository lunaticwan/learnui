import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ENTRIES } from '../data/entries';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

/** 한글 유니코드 초성 배열 (ㄱ~ㅎ) */
const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

/**
 * 한글 문자열에서 자음 초성만 추출하는 유틸리티.
 * 한글 음절 유니코드 공식: (음절 코드 - 0xAC00) / 588 = 초성 인덱스
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
 * 문장부호 및 주요 한국어 조사(은/는/이/가/을/를/에서/으로 등)를 제거하여 검색 키워드 매칭 정교화.
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

/** 커맨드 팔레트 검색 인덱스 항목 인터페이스 */
interface SearchItem {
  id: string;
  type: 'component' | 'style' | 'page';
  title: string;
  titleKo?: string;
  subtitle: string;
  url: string;
  keywords: string[];
  chosungKeywords: string[];
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * 커맨드 팔레트 (⌘K / Ctrl+K) 중앙 모달 검색 컴포넌트.
 * 초성 검색, 한국어 조사 제거 정규화, Fuse.js 퍼지 매칭의 3단계 하이브리드 자연어 검색 제공.
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  // 단축키 (⌘K, Ctrl+K) 이벤트 리스너 등록
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  // 검색 대상 인덱스 데이터 구축 (모든 페이지, 엔트리, 스타일 메타데이터 통합)
  const searchItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // 1. 주요 정적 페이지 (번역표 등)
    items.push({
      id: 'page-translate',
      type: 'page',
      title: 'The Translation Table / 번역표',
      titleKo: '플랫폼별 UI 명칭 대조표',
      subtitle: getLocalizedString(UI_COPY['translateLede'] as any, 'ko') || 'AppKit · SwiftUI · iOS · Android UI 용어 대조',
      url: '/translate',
      keywords: ['translate', '번역', '대조표', '용어', 'swiftui', 'appkit', 'ios', 'android'],
      chosungKeywords: [getChosung('번역'), getChosung('대조표'), getChosung('용어')],
    });

    // 2. UI 컴포넌트 엔트리 (ENTRIES)
    ENTRIES.forEach((e) => {
      const titleEn = e.name?.en || e.slug;
      const titleKo = e.name?.ko || '';
      const subtitle = e.tagline?.ko || e.tagline?.en || '';
      const descKo = e.description?.ko || e.description?.en || '';
      const promptKo = e.prompt?.ko || e.prompt?.en || '';
      const apiSymbols = (e.api || []).map((a: any) => a.symbol || '');
      const partsKeywords = (e.parts || []).flatMap((p: any) => [
        p.name?.en, p.name?.ko, p.description?.en, p.description?.ko, p.prompt?.en, p.prompt?.ko
      ]).filter(Boolean);

      const allKw = [
        titleEn,
        titleKo,
        e.platform,
        subtitle,
        descKo,
        promptKo,
        ...apiSymbols,
        ...(e.aka?.en || []),
        ...(e.aka?.ko || []),
        ...(e.fuzzy?.en || []),
        ...(e.fuzzy?.ko || []),
        ...partsKeywords,
      ];

      items.push({
        id: `entry-${e.slug}`,
        type: 'component',
        title: titleEn,
        titleKo,
        subtitle,
        url: `/${e.platform}/${e.slug}`,
        keywords: allKw,
        chosungKeywords: allKw.map((k) => getChosung(k)),
      });
    });

    // 3. UI 디자인 스타일 (STYLES)
    STYLES.forEach((s) => {
      const titleEn = s.name?.en || s.slug;
      const titleKo = s.name?.ko || '';
      const subtitle = s.tagline?.ko || s.tagline?.en || '';
      const briefKo = s.brief?.ko || s.brief?.en || '';
      const scopeKo = s.scope?.ko || s.scope?.en || '';
      const a11yKo = s.accessibility?.ko || s.accessibility?.en || '';
      const signalsKeywords = (s.signals || []).flatMap((sig: any) => [
        sig.name?.en, sig.name?.ko, sig.description?.en, sig.description?.ko
      ]).filter(Boolean);

      const allKw = [
        titleEn,
        titleKo,
        subtitle,
        briefKo,
        scopeKo,
        a11yKo,
        ...(s.aliases?.en || []),
        ...(s.aliases?.ko || []),
        ...signalsKeywords,
      ];

      items.push({
        id: `style-${s.slug}`,
        type: 'style',
        title: titleEn,
        titleKo,
        subtitle,
        url: `/styles/${s.slug}`,
        keywords: allKw,
        chosungKeywords: allKw.map((k) => getChosung(k)),
      });
    });

    return items;
  }, []);

  // Fuse.js 퍼지 검색 인스턴스
  const fuse = useMemo(() => {
    return new Fuse(searchItems, {
      keys: [
        { name: 'titleKo', weight: 0.4 },
        { name: 'keywords', weight: 0.35 },
        { name: 'title', weight: 0.15 },
        { name: 'subtitle', weight: 0.1 }
      ],
      threshold: 0.4,
      distance: 100,
      ignoreLocation: true,
      minMatchCharLength: 1,
    });
  }, [searchItems]);

  // 입력 쿼리에 따른 결과 필터링 (3단계 하이브리드 검색)
  const filteredItems = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return searchItems.slice(0, 20);

    const normQuery = normalizeKorean(trimmed).replace(/\s+/g, '');
    const chosungQuery = getChosung(trimmed).replace(/\s+/g, '');

    // 1단계: 정규화 매칭 (조사/특수문자 제거)
    const directMatches = searchItems.filter((item) => {
      const matchTarget = `${item.title} ${item.titleKo || ''} ${item.keywords.join(' ')}`.toLowerCase().replace(/\s+/g, '');
      const normTarget = normalizeKorean(matchTarget).replace(/\s+/g, '');
      return normTarget.includes(normQuery) || matchTarget.includes(trimmed.toLowerCase());
    });

    // 2단계: 한글 초성 매칭
    const chosungMatches = searchItems.filter((item) => {
      const chosungTarget = item.chosungKeywords.join(' ').replace(/\s+/g, '');
      return chosungTarget.includes(chosungQuery);
    });

    // 3단계: Fuse.js 퍼지 매칭
    const fuseResults = fuse.search(trimmed).map((res) => res.item);

    // 결과 합체 및 중복 제거
    const combinedSet = new Set<string>();
    const results: SearchItem[] = [];

    [...directMatches, ...chosungMatches, ...fuseResults].forEach((item) => {
      if (!combinedSet.has(item.id)) {
        combinedSet.add(item.id);
        results.push(item);
      }
    });

    return results;
  }, [query, searchItems, fuse]);

  if (!open) return null;

  return (
    <div
      className="cmd-overlay"
      onClick={() => onOpenChange(false)}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '15vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '600px',
          background: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2)',
          border: '1px solid #eaeaea',
          overflow: 'hidden',
        }}
      >
        <Command label="Command Palette" shouldFilter={false}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #eaeaea',
              padding: '0 16px',
            }}
          >
            <Command.Input
              value={query}
              onValueChange={setQuery}
              placeholder={getLocalizedString(UI_COPY['searchPlaceholder'] as any, 'ko') || '검색...'}
              autoFocus
              style={{
                width: '100%',
                height: '48px',
                border: 0,
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '15px',
                background: 'transparent',
              }}
            />
            <kbd className="search-kbd">ESC</kbd>
          </div>

          <Command.List
            style={{
              maxHeight: '360px',
              overflowY: 'auto',
              padding: '8px',
            }}
          >
            <Command.Empty
              style={{
                padding: '24px',
                textAlign: 'center',
                color: '#737373',
                fontSize: '14px',
              }}
            >
              검색 결과가 없습니다.
            </Command.Empty>

            {filteredItems.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={() => {
                  onOpenChange(false);
                  navigate(item.url);
                }}
                style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
                className="cmd-item"
              >
                <div>
                  <div style={{ fontWeight: 500, fontSize: '14px', color: '#0a0a0a' }}>
                    {item.title}{' '}
                    {item.titleKo && (
                      <span style={{ color: '#737373', fontWeight: 400, marginLeft: '6px' }}>{item.titleKo}</span>
                    )}
                  </div>
                  {item.subtitle && (
                    <div style={{ fontSize: '12px', color: '#737373', marginTop: '2px' }}>
                      {item.subtitle}
                    </div>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    color: '#a3a3a3',
                    border: '1px solid #eaeaea',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  {item.type}
                </span>
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </div>
      <style>{`
        .cmd-item[data-selected="true"] {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};
