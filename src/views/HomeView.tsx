import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ENTRIES } from '../data/entries';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

const NEW_SLUGS = new Set([
  'text-scramble', 'spring', 'easing', 'masonry', 'bento-grid', 'hamburger-menu', 'lightbox', 'marquee'
]);

export const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'web' | 'macos'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 단축키 '/' 포커스 처리
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const searchInput = document.getElementById('search') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCopyKo = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'ko');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  const filteredEntries = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) {
      return ENTRIES.filter((e) => filter === 'all' || e.platform === filter);
    }

    const tokens = trimmed.split(/\s+/).filter(Boolean);
    const scoredEntries: { entry: typeof ENTRIES[0]; matchCount: number }[] = [];

    for (const e of ENTRIES) {
      if (filter !== 'all' && e.platform !== filter) continue;

      const nameEn = (e.name?.en || '').toLowerCase();
      const nameKo = (e.name?.ko || '').toLowerCase();
      const taglineEn = (e.tagline?.en || '').toLowerCase();
      const taglineKo = (e.tagline?.ko || '').toLowerCase();
      const symbols = (e.api || []).map((a: any) => (a.symbol || '').toLowerCase()).join(' ');
      const akaEn = (e.aka?.en || []).join(' ').toLowerCase();
      const akaKo = (e.aka?.ko || []).join(' ').toLowerCase();
      const fuzzyEn = (e.fuzzy?.en || []).join(' ').toLowerCase();
      const fuzzyKo = (e.fuzzy?.ko || []).join(' ').toLowerCase();

      const combinedText = `${nameEn} ${nameKo} ${taglineEn} ${taglineKo} ${symbols} ${akaEn} ${akaKo} ${fuzzyEn} ${fuzzyKo}`;

      let matchCount = 0;
      for (const token of tokens) {
        if (combinedText.includes(token)) {
          matchCount++;
        }
      }

      if (matchCount > 0) {
        scoredEntries.push({ entry: e, matchCount });
      }
    }

    scoredEntries.sort((a, b) => b.matchCount - a.matchCount);
    return scoredEntries.map((s) => s.entry);
  }, [filter, searchQuery]);

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * ENTRIES.length);
    const entry = ENTRIES[randomIndex];
    console.log(`[Action] Surprise random entry clicked -> /${entry.platform}/${entry.slug}`);
    navigate(`/${entry.platform}/${entry.slug}`);
  };

  return (
    <main className="wrap">
      <nav className="crumbs">
        <Link to="/" onClick={() => console.log('[HomeView] Clicked indexCrumb link -> /')}>{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">{getCopyKo('dictionaryCrumb')}</span>
      </nav>

      <section className="hero">
        <h1 className="hero-title">
          <span>{getCopyKo('heroTitle')}</span>
        </h1>
        <BilingualText text={UI_COPY['heroSub'] as any} tag="p" className="hero-sub" />

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
              onClick={() => {
                console.log('[HomeView] Tab selected: all');
                setFilter('all');
              }}
            >
              <span>{getCopyKo('tabAll')}</span>
            </button>
            <button
              type="button"
              className={`tab ${filter === 'web' ? 'active' : ''}`}
              onClick={() => {
                console.log('[HomeView] Tab selected: web');
                setFilter('web');
              }}
            >
              <span>{getCopyKo('tabWeb')}</span>
            </button>
            <button
              type="button"
              className={`tab ${filter === 'macos' ? 'active' : ''}`}
              onClick={() => {
                console.log('[HomeView] Tab selected: macos');
                setFilter('macos');
              }}
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
            <Link
              key={e.slug}
              className="card"
              data-platform={e.platform}
              data-slug={e.slug}
              to={`/${e.platform}/${e.slug}`}
              onClick={() => console.log(`[HomeView] Entry card clicked -> /${e.platform}/${e.slug}`)}
            >
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
