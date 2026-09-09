import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ENTRIES } from '../data/entries';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

const NEW_SLUGS = new Set([
  'text-scramble', 'spring', 'easing', 'masonry', 'bento-grid', 'hamburger-menu', 'lightbox', 'marquee'
]);

export const HomeView: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'macos'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCopyKo = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'ko');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  const filteredEntries = useMemo(() => {
    return ENTRIES.filter((e) => {
      if (filter !== 'all' && e.platform !== filter) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchNameEn = (e.name?.en || '').toLowerCase().includes(q);
      const matchNameKo = (e.name?.ko || '').toLowerCase().includes(q);
      const matchTaglineEn = (e.tagline?.en || '').toLowerCase().includes(q);
      const matchTaglineKo = (e.tagline?.ko || '').toLowerCase().includes(q);
      const matchSymbol = (e.api || []).some((a: any) => (a.symbol || '').toLowerCase().includes(q));
      const matchAka = (e.aka?.en || []).some((a: string) => a.toLowerCase().includes(q)) ||
                       (e.aka?.ko || []).some((a: string) => a.toLowerCase().includes(q));
      const matchFuzzy = (e.fuzzy?.en || []).some((f: string) => f.toLowerCase().includes(q)) ||
                        (e.fuzzy?.ko || []).some((f: string) => f.toLowerCase().includes(q));

      return matchNameEn || matchNameKo || matchTaglineEn || matchTaglineKo || matchSymbol || matchAka || matchFuzzy;
    });
  }, [filter, searchQuery]);

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * ENTRIES.length);
    const entry = ENTRIES[randomIndex];
    window.location.href = `/${entry.platform}/${entry.slug}`;
  };

  return (
    <main className="wrap">
      <section className="hero">
        <h1 className="hero-title">
          <span>{getCopyKo('heroTitle')}</span>
        </h1>
        <BilingualText text={UI_COPY['heroSub'] as any} tag="p" className="hero-sub" />

        <p className="vibe-promo">
          <span className="tag tag-new">{getCopyKo('newBadge')}</span>
          <Link to="/styles">
            {getCopyKo('vibePromo')} →
          </Link>
        </p>

        <div className="controls">
          <div className="search-box">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="search"
              type="search"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getCopyKo('searchPlaceholder')}
              aria-label="Search"
            />
            <kbd className="search-kbd">/</kbd>
          </div>

          <button type="button" id="surprise" className="btn btn-ghost" onClick={handleSurprise}>
            ⚂ <span>{getCopyKo('surprise')}</span>
          </button>

          <div className="tabs" role="tablist">
            <button
              type="button"
              className={`tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span>{getCopyKo('tabAll')}</span>
            </button>
            <button
              type="button"
              className={`tab ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              <span>{getCopyKo('tabWeb')}</span>
            </button>
            <button
              type="button"
              className={`tab ${filter === 'macos' ? 'active' : ''}`}
              onClick={() => setFilter('macos')}
            >
              <span>{getCopyKo('tabMacos')}</span>
            </button>
          </div>

          <p className="count-note" id="count-note">
            <span>{getCopyKo('entriesCount', filteredEntries.length)}</span>
          </p>
        </div>
      </section>

      <section id="dictionary" className="grid" aria-live="polite">
        {filteredEntries.map((e) => {
          const isNew = NEW_SLUGS.has(e.slug);
          const symbol = e.api?.[0]?.symbol || '';

          return (
            <Link key={e.slug} className="card" data-platform={e.platform} data-slug={e.slug} to={`/${e.platform}/${e.slug}`}>
              <SpecimenViewer slug={e.slug} />
              <div className="card-meta">
                <h3 className="card-name">
                  <span>
                    {e.name?.en}
                    {isNew && <span className="tag tag-new">{getCopyKo('newBadge')}</span>}
                  </span>
                  <span className="card-name-sub">{e.name?.ko}</span>
                  <span className="tag tag-platform">{e.platform}</span>
                </h3>
                <p className="card-symbol">{symbol}</p>
                <BilingualText text={e.tagline} tag="p" className="card-tag" />
              </div>
            </Link>
          );
        })}
      </section>

      {filteredEntries.length === 0 && (
        <div id="no-result" className="no-result">
          <p>
            <span>{getCopyKo('searchNoResult')}</span>
          </p>
          <div className="no-result-examples">
            <button type="button" onClick={() => setSearchQuery('the dots menu')}>
              “the dots menu”
            </button>
            <button type="button" onClick={() => setSearchQuery('mac window buttons')}>
              “mac window buttons”
            </button>
            <button type="button" onClick={() => setSearchQuery('점 3개 메뉴')}>
              “점 3개 메뉴”
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
