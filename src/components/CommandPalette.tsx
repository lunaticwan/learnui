import React, { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ENTRIES } from '../data/entries';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedString } from '../types/ui';

interface SearchItem {
  id: string;
  type: 'component' | 'style';
  title: string;
  titleZh: string;
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
  const { langMode } = useLanguage();
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

    ENTRIES.forEach((e) => {
      items.push({
        id: `entry-${e.slug}`,
        type: 'component',
        title: e.name.en,
        titleZh: e.name.zh || '',
        titleKo: e.name.ko || '',
        subtitle: e.tagline.en,
        url: `/${e.platform}/${e.slug}`,
        keywords: [
          e.name.en,
          e.name.zh || '',
          e.name.ko || '',
          ...(e.aka.en || []),
          ...(e.aka.zh || []),
          ...(e.aka.ko || []),
          ...(e.fuzzy.en || []),
          ...(e.fuzzy.zh || []),
          ...(e.fuzzy.ko || []),
        ],
      });
    });

    STYLES.forEach((s) => {
      items.push({
        id: `style-${s.slug}`,
        type: 'style',
        title: s.name.en,
        titleZh: s.name.zh || '',
        titleKo: s.name.ko || '',
        subtitle: s.tagline?.en || '',
        url: `/styles/${s.slug}`,
        keywords: [
          s.name.en,
          s.name.zh || '',
          s.name.ko || '',
          ...(s.aliases?.en || []),
          ...(s.aliases?.zh || []),
          ...(s.aliases?.ko || []),
        ],
      });
    });

    return items;
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchItems, {
      keys: ['title', 'titleZh', 'titleKo', 'subtitle', 'keywords'],
      threshold: 0.35,
    });
  }, [searchItems]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchItems;
    return fuse.search(query).map((res) => res.item);
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
              placeholder={getLocalizedString(UI_COPY['searchPlaceholder'] as any, langMode === 'bilingual' ? 'en' : langMode) || 'Search... / 搜索...'}
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
              No results found.
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
                    {item.title} {item.titleZh && <span style={{ color: '#737373', fontWeight: 400, marginLeft: '6px' }}>{item.titleZh}</span>}
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
