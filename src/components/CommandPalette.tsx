import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ENTRIES } from '../data/entries';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';
import {
  getChosung,
  disassembleHangul,
  normalizeKorean,
  parseNaturalLanguageQuery,
} from '../utils/search';

const RECENT_SEARCHES_KEY = 'learnui_recent_searches';

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
  disassembledKeywords: string[];
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * 커맨드 팔레트 (⌘K / Ctrl+K) 모달 검색 컴포넌트.
 * 영한 오타 보정, 최근 검색어 기록, es-hangul 기반 초성/자모 분해, 자연어 문맥 파서 하이브리드 검색 제공.
 */
/**
 * 검색어와 매칭되는 텍스트 부분을 <mark> 태그 스타일로 하이라이팅하는 헬퍼 컴포넌트
 */
const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim() || !text) return <>{text}</>;

  // 특수문자 이스케이프 후 매칭
  const cleanHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${cleanHighlight})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark
            key={i}
            style={{
              backgroundColor: '#fef08a',
              color: '#854d0e',
              padding: '0 2px',
              borderRadius: '2px',
              fontWeight: 600,
            }}
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'component' | 'style' | 'page'>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // 초기 최근 검색어 불러오기
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch {
      setRecentSearches([]);
    }
  }, []);

  // 최근 검색어 저장 함수
  const addRecentSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return;
    const updated = [trimmed, ...recentSearches.filter((s) => s !== trimmed)].slice(0, 5);
    setRecentSearches(updated);
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // 로컬 스토리지 에러 무시
    }
  };

  // 최근 검색어 삭제 함수
  const removeRecentSearch = (e: React.MouseEvent, searchTerm: string) => {
    e.stopPropagation();
    const updated = recentSearches.filter((s) => s !== searchTerm);
    setRecentSearches(updated);
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // 로컬 스토리지 에러 무시
    }
  };

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
      disassembledKeywords: [disassembleHangul('번역'), disassembleHangul('대조표'), disassembleHangul('용어')],
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
        disassembledKeywords: allKw.map((k) => disassembleHangul(k)),
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
        disassembledKeywords: allKw.map((k) => disassembleHangul(k)),
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

  // 자연어 분석 파서 정보
  const parsedQueryInfo = useMemo(() => {
    return parseNaturalLanguageQuery(query);
  }, [query]);

  // 입력 쿼리에 따른 자연어 분석 및 검색 결과 필터링
  const filteredItems = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return searchItems.slice(0, 20);

    const parsed = parsedQueryInfo;
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

    // Quick Filter 탭 적용
    if (selectedCategory !== 'all') {
      const categoryFiltered = candidateItems.filter((item) => item.type === selectedCategory);
      if (categoryFiltered.length > 0) {
        candidateItems = categoryFiltered;
      }
    }

    const normQuery = parsed.normalizedQuery.replace(/\s+/g, '');
    const chosungQuery = parsed.chosungQuery;
    const disassembledQuery = parsed.disassembledQuery;

    // 1단계: 전체/정규화/초성/자모 매칭
    const directMatches = candidateItems.filter((item) => {
      const matchTarget = `${item.title} ${item.titleKo || ''} ${item.keywords.join(' ')}`.toLowerCase().replace(/\s+/g, '');
      const normTarget = normalizeKorean(matchTarget).replace(/\s+/g, '');
      return normTarget.includes(normQuery) || matchTarget.includes(trimmed.toLowerCase());
    });

    const chosungMatches = candidateItems.filter((item) => {
      const chosungTarget = item.chosungKeywords.join(' ').replace(/\s+/g, '');
      return chosungQuery.length > 0 && chosungTarget.includes(chosungQuery);
    });

    const disassembledMatches = candidateItems.filter((item) => {
      const disTarget = item.disassembledKeywords.join(' ').replace(/\s+/g, '');
      return disassembledQuery.length > 0 && disTarget.includes(disassembledQuery);
    });

    const fuseResults = fuse.search(trimmed).map((res) => res.item).filter((item) => candidateItems.some((c) => c.id === item.id));

    // 2단계: N-gram 및 토큰/자모/초성 매칭 가중치 스코어링
    const getItemScore = (item: SearchItem) => {
      const target = `${item.title} ${item.titleKo || ''} ${item.keywords.join(' ')}`.toLowerCase();
      const normTarget = normalizeKorean(target);
      const chosungTarget = item.chosungKeywords.join(' ');
      const disTarget = item.disassembledKeywords.join(' ');
      let score = 0;

      let keywordMatched = false;

      // N-gram 보너스 매칭
      for (const ngram of parsed.nGrams) {
        const normNgram = normalizeKorean(ngram);
        if (normNgram && normTarget.includes(normNgram)) {
          score += 3;
          keywordMatched = true;
        }
      }

      // 자모 완전 분해 매칭
      if (disassembledQuery.length > 0 && disTarget.includes(disassembledQuery)) {
        score += 4;
        keywordMatched = true;
      }

      // 토큰 및 초성 매칭
      for (const token of parsed.cleanTokens) {
        const normToken = normalizeKorean(token);
        const chosungToken = getChosung(token);
        const disToken = disassembleHangul(token);

        if (target.includes(token.toLowerCase())) { score += 2; keywordMatched = true; }
        if (normToken && normTarget.includes(normToken)) { score += 2; keywordMatched = true; }
        if (chosungToken && chosungTarget.includes(chosungToken)) { score += 1; keywordMatched = true; }
        if (disToken && disTarget.includes(disToken)) { score += 2; keywordMatched = true; }
      }

      // 유의어/동의어 매칭 보너스
      for (const synToken of parsed.synonymTokens) {
        const normSyn = normalizeKorean(synToken);
        if (target.includes(synToken.toLowerCase()) || (normSyn && normTarget.includes(normSyn))) {
          score += 3;
          keywordMatched = true;
        }
      }

      // 키워드 토큰이 포함되었거나 cleanTokens가 없을 때만 플랫폼 및 의도 완벽 일치 보너스 점수 부여
      if (parsed.cleanTokens.length === 0 || keywordMatched) {
        if (parsed.platformFilter && item.platform === parsed.platformFilter) score += 5;
        if (parsed.intentFilter && item.type === parsed.intentFilter) score += 3;
      }

      return score;
    };

    const combinedSet = new Set<string>();
    const results: SearchItem[] = [];

    [...directMatches, ...chosungMatches, ...disassembledMatches, ...fuseResults, ...candidateItems].forEach((item) => {
      const score = getItemScore(item);
      if (score > 0 && !combinedSet.has(item.id)) {
        combinedSet.add(item.id);
        results.push(item);
      }
    });

    results.sort((a, b) => getItemScore(b) - getItemScore(a));

    return results.slice(0, 30);
  }, [query, searchItems, fuse, parsedQueryInfo]);

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
              placeholder={getLocalizedString(UI_COPY['searchPlaceholder'] as any, 'ko') || '생각하고 있는 UI 요소를 설명해보세요 (예: iOS 버튼 컴포넌트)'}
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

          {/* 영한 자동 오타 보정 안내 바 */}
          {parsedQueryInfo.convertedHangulQuery && (
            <div
              style={{
                padding: '6px 16px',
                background: '#f0fdf4',
                borderBottom: '1px solid #dcfce7',
                fontSize: '12px',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>🔤 영문 오타 감지: </span>
              <strong>"{parsedQueryInfo.convertedHangulQuery}"</strong> (으)로 자동 전환하여 검색 중
            </div>
          )}

          {/* Quick Filter 카테고리 탭 및 분석된 필터 배지 */}
          <div
            style={{
              padding: '8px 16px',
              background: '#fafafa',
              borderBottom: '1px solid #eaeaea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {/* Quick Filter 탭 버튼 */}
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {[
                { id: 'all', label: '전체' },
                { id: 'component', label: '컴포넌트' },
                { id: 'style', label: '스타일' },
                { id: 'page', label: '페이지' },
              ].map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedCategory(tab.id as any);
                      console.log('[Search] Selected Quick Filter Tab:', tab.id);
                    }}
                    style={{
                      padding: '3px 10px',
                      borderRadius: '12px',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: isActive ? 600 : 400,
                      backgroundColor: isActive ? '#000000' : '#f0f0f0',
                      color: isActive ? '#ffffff' : '#525252',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* 자연어 파서가 추출한 플랫폼/의도 배지 */}
            {(parsedQueryInfo.platformFilter || parsedQueryInfo.intentFilter) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#737373' }}>
                {parsedQueryInfo.platformFilter && (
                  <span
                    style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 500,
                    }}
                  >
                    플랫폼: {parsedQueryInfo.platformFilter.toUpperCase()}
                  </span>
                )}
                {parsedQueryInfo.intentFilter && (
                  <span
                    style={{
                      background: '#fef3c7',
                      color: '#b45309',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 500,
                    }}
                  >
                    의도: {parsedQueryInfo.intentFilter.toUpperCase()}
                  </span>
                )}
              </div>
            )}
          </div>

          <Command.List
            style={{
              maxHeight: '360px',
              overflowY: 'auto',
              padding: '8px',
            }}
          >
            {/* 최근 검색어 바 목록 (입력창이 비어있을 경우에만 노출) */}
            {!query.trim() && recentSearches.length > 0 && (
              <div style={{ marginBottom: '12px', padding: '0 4px' }}>
                <div style={{ fontSize: '11px', color: '#a3a3a3', fontWeight: 600, padding: '4px 8px' }}>
                  최근 검색어
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '4px 8px' }}>
                  {recentSearches.map((s) => (
                    <span
                      key={s}
                      onClick={() => {
                        setQuery(s);
                        console.log('[Search] Clicked Recent Search Chip:', s);
                      }}
                      style={{
                        background: '#f5f5f5',
                        border: '1px solid #e5e5e5',
                        borderRadius: '16px',
                        padding: '4px 10px',
                        fontSize: '12px',
                        color: '#404040',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {s}
                      <span
                        onClick={(e) => removeRecentSearch(e, s)}
                        style={{ color: '#a3a3a3', fontWeight: 'bold', fontSize: '10px' }}
                      >
                        ✕
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Command.Empty
              style={{
                padding: '28px 16px',
                textAlign: 'center',
                color: '#737373',
                fontSize: '14px',
              }}
            >
              <div style={{ fontWeight: 600, color: '#404040', marginBottom: '6px' }}>
                검색 결과가 없습니다.
              </div>
              <div style={{ fontSize: '12px', color: '#a3a3a3', marginBottom: '16px' }}>
                검색어를 변경하거나 아래 인기 추천 키워드를 시도해보세요.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                {['버튼', '다이얼로그', 'Glassmorphism', 'SwiftUI', '번역표', '토글'].map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => {
                      setQuery(keyword);
                      console.log('[Search] Clicked Empty State Suggestion Keyword:', keyword);
                    }}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '16px',
                      border: '1px solid #e5e5e5',
                      backgroundColor: '#f5f5f5',
                      color: '#262626',
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s ease',
                    }}
                  >
                    #{keyword}
                  </button>
                ))}
              </div>
            </Command.Empty>

            {filteredItems.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={() => {
                  console.log('[Search] Item Selected:', item);
                  if (query.trim()) {
                    addRecentSearch(query.trim());
                  }
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
                    <HighlightedText text={item.title} highlight={query.trim()} />{' '}
                    {item.titleKo && (
                      <span style={{ color: '#737373', fontWeight: 400, marginLeft: '6px' }}>
                        <HighlightedText text={item.titleKo} highlight={query.trim()} />
                      </span>
                    )}
                  </div>
                  {item.subtitle && (
                    <div style={{ fontSize: '12px', color: '#737373', marginTop: '2px' }}>
                      <HighlightedText text={item.subtitle} highlight={query.trim()} />
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {item.platform && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        color: '#2563eb',
                        border: '1px solid #bfdbfe',
                        backgroundColor: '#eff6ff',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      {item.platform}
                    </span>
                  )}
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
                </div>
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
