import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ENTRIES } from '../data/entries';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

interface SearchItem {
  id: string;
  type: 'component' | 'style' | 'page';
  title: string;
  titleKo?: string;
  subtitle: string;
  url: string;
  keywords: string[];
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

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

  const searchItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // 주요 정적 페이지 추가
    items.push({
      id: 'page-translate',
      type: 'page',
      title: 'The Translation Table / 번역표',
      titleKo: '플랫폼별 UI 명칭 대조표',
      subtitle: getLocalizedString(UI_COPY['translateLede'] as any, 'ko') || 'AppKit · SwiftUI · iOS · Android UI 용어 대조',
      url: '/translate',
      keywords: ['translate', '번역', '대조표', '용어', 'swiftui', 'appkit', 'ios', 'android'],
    });

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

      items.push({
        id: `entry-${e.slug}`,
        type: 'component',
        title: titleEn,
        titleKo,
        subtitle,
        url: `/${e.platform}/${e.slug}`,
        keywords: [
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
        ],
      });
    });

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

      items.push({
        id: `style-${s.slug}`,
        type: 'style',
        title: titleEn,
        titleKo,
        subtitle,
        url: `/styles/${s.slug}`,
        keywords: [
          titleEn,
          titleKo,
          subtitle,
          briefKo,
          scopeKo,
          a11yKo,
          ...(s.aliases?.en || []),
          ...(s.aliases?.ko || []),
          ...signalsKeywords,
        ],
      });
    });

    return items;
  }, []);

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

  const filteredItems = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return searchItems.slice(0, 20);

    const normQuery = trimmed.toLowerCase().replace(/\s+/g, '');
    const fuseResults = fuse.search(trimmed).map((res) => res.item);

    // 띄어쓰기 무시 정확도 향상을 위한 키워드 검사 결합
    const directMatches = searchItems.filter((item) => {
      const matchTarget = `${item.title} ${item.titleKo || ''} ${item.keywords.join(' ')}`.toLowerCase().replace(/\s+/g, '');
      return matchTarget.includes(normQuery);
    });

    const combinedSet = new Set<string>();
    const results: SearchItem[] = [];

    directMatches.forEach((item) => {
      if (!combinedSet.has(item.id)) {
        combinedSet.add(item.id);
        results.push(item);
      }
    });

    fuseResults.forEach((item) => {
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
