import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ENTRIES } from '../data/entries';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';
import { getChosung, normalizeKorean, parseNaturalLanguageQuery } from '../utils/search';

/** 커맨드 팔레트 검색 인덱스 항목 인터페이스 */
interface SearchItem {
  id: string;
  type: 'component' | 'style' | 'page';
  platform?: string;
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
 * 초성 검색, 자연어 문맥/플랫폼 분리 분석 파서, N-gram 키워드 매칭, Fuse.js 퍼지 매칭 하이브리드 검색 제공.
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
        platform: e.platform,
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

  // 입력 쿼리에 따른 자연어 분석 및 검색 결과 필터링
  const filteredItems = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return searchItems.slice(0, 20);

    const parsed = parseNaturalLanguageQuery(trimmed);
    console.log('[Search] Parsed Natural Language Query:', {
      raw: query,
      parsed,
    });

    let candidateItems = searchItems;

    // 플랫폼 필터 적용
    if (parsed.platformFilter) {
      const platformFiltered = candidateItems.filter(
        (item) => item.platform === parsed.platformFilter || item.keywords.includes(parsed.platformFilter!)
      );
      if (platformFiltered.length > 0) {
        candidateItems = platformFiltered;
      }
    }

    // 의도/카테고리 필터 적용
    if (parsed.intentFilter) {
      const intentFiltered = candidateItems.filter((item) => item.type === parsed.intentFilter);
      if (intentFiltered.length > 0) {
        candidateItems = intentFiltered;
      }
    }

    const normQuery = parsed.normalizedQuery.replace(/\s+/g, '');
    const chosungQuery = parsed.chosungQuery;

    // 1단계: 전체/정규화/초성 매칭
    const directMatches = candidateItems.filter((item) => {
      const matchTarget = `${item.title} ${item.titleKo || ''} ${item.keywords.join(' ')}`.toLowerCase().replace(/\s+/g, '');
      const normTarget = normalizeKorean(matchTarget).replace(/\s+/g, '');
      return normTarget.includes(normQuery) || matchTarget.includes(trimmed.toLowerCase());
    });

    const chosungMatches = candidateItems.filter((item) => {
      const chosungTarget = item.chosungKeywords.join(' ').replace(/\s+/g, '');
      return chosungQuery.length > 0 && chosungTarget.includes(chosungQuery);
    });

    const fuseResults = fuse.search(trimmed).map((res) => res.item).filter((item) => candidateItems.some((c) => c.id === item.id));

    // 2단계: N-gram 및 토큰 매칭 가중치 스코어링
    const getItemScore = (item: SearchItem) => {
      const target = `${item.title} ${item.titleKo || ''} ${item.keywords.join(' ')} ${item.chosungKeywords.join(' ')}`.toLowerCase();
      const normTarget = normalizeKorean(target);
      let score = 0;

      // N-gram 보너스 매칭
      for (const ngram of parsed.nGrams) {
        const normNgram = normalizeKorean(ngram);
        if (normNgram && normTarget.includes(normNgram)) {
          score += 3;
        }
      }

      // 토큰 및 초성 매칭
      for (const token of parsed.cleanTokens) {
        const normToken = normalizeKorean(token);
        const chosungToken = getChosung(token);
        if (target.includes(token.toLowerCase())) score += 2;
        if (normToken && normTarget.includes(normToken)) score += 2;
        if (item.chosungKeywords.some((ck) => ck.includes(chosungToken))) score += 1;
      }

      // 플랫폼 및 의도 완벽 일치 추가 점수
      if (parsed.platformFilter && item.platform === parsed.platformFilter) score += 5;
      if (parsed.intentFilter && item.type === parsed.intentFilter) score += 3;

      return score;
    };

    const combinedSet = new Set<string>();
    const results: SearchItem[] = [];

    [...directMatches, ...chosungMatches, ...fuseResults, ...candidateItems].forEach((item) => {
      const score = getItemScore(item);
      if (score > 0 && !combinedSet.has(item.id)) {
        combinedSet.add(item.id);
        results.push(item);
      }
    });

    results.sort((a, b) => getItemScore(b) - getItemScore(a));

    return results.slice(0, 30);
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
              onValueChange={(val) => {
                setQuery(val);
                console.log('[Search] User Search Input Change:', val);
              }}
              placeholder={getLocalizedString(UI_COPY['searchPlaceholder'] as any, 'ko') || '검색... (예: iOS 버튼 컴포넌트)'}
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
                  console.log('[Search] Item Selected:', item);
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
