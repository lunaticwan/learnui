import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

const STYLE_NEW_SLUGS = new Set([
  'frutiger-metro', 'anti-design', 'acid-graphics', 'risograph', 'zine-collage',
  'steampunk', 'dieselpunk', 'biopunk', 'afrofuturism', 'de-stijl', 'constructivism',
  'pop-art', 'surrealism', 'art-nouveau', 'holographic', 'isometric-3d', 'line-art',
  'hand-drawn', 'fantasy-rpg', 'lcars'
]);

export const StylesHubView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCopyKo = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'ko');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  const filteredStyles = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) return STYLES;

    const tokens = trimmed.split(/\s+/).filter(Boolean);
    const scoredStyles: { style: typeof STYLES[0]; matchCount: number }[] = [];

    for (const s of STYLES) {
      const nameEn = (s.name?.en || '').toLowerCase();
      const nameKo = (s.name?.ko || '').toLowerCase();
      const taglineEn = (s.tagline?.en || '').toLowerCase();
      const taglineKo = (s.tagline?.ko || '').toLowerCase();
      const aliasesEn = (s.aliases?.en || []).join(' ').toLowerCase();
      const aliasesKo = (s.aliases?.ko || []).join(' ').toLowerCase();

      const combinedText = `${nameEn} ${nameKo} ${taglineEn} ${taglineKo} ${aliasesEn} ${aliasesKo}`;

      let matchCount = 0;
      for (const token of tokens) {
        if (combinedText.includes(token)) {
          matchCount++;
        }
      }

      if (matchCount > 0) {
        scoredStyles.push({ style: s, matchCount });
      }
    }

    scoredStyles.sort((a, b) => b.matchCount - a.matchCount);
    return scoredStyles.map((s) => s.style);
  }, [searchQuery]);

  return (
    <main className="wrap">
      <nav className="crumbs">
        <Link to="/" onClick={() => console.log('[StylesHubView] Clicked indexCrumb link -> /')}>{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">{getCopyKo('stylesCrumb')}</span>
      </nav>

      <section className="hero" style={{ paddingTop: '32px' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 4.6vw, 48px)' }}>
          <span>{getCopyKo('stylesTitle')}</span>
        </h1>

        <div className="controls">
          <div className="search-box">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="style-search"
              type="search"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => {
                console.log(`[Input] Style search query: "${e.target.value}"`);
                setSearchQuery(e.target.value);
              }}
              placeholder={getCopyKo('searchStylesPlaceholder')}
              aria-label="Search styles"
            />
            <kbd className="search-kbd">/</kbd>
          </div>

          <p className="count-note" id="style-count">
            <span>{getCopyKo('stylesCount', filteredStyles.length)}</span>
          </p>
        </div>
      </section>

      <section className="style-grid" id="styles" aria-live="polite">
        {filteredStyles.map((s) => {
          const isNew = STYLE_NEW_SLUGS.has(s.slug);
          return (
            <Link
              key={s.slug}
              className="style-card"
              to={`/styles/${s.slug}`}
              onClick={() => console.log(`[StylesHubView] Style card clicked -> /styles/${s.slug}`)}
            >
              <SpecimenViewer slug={`style-${s.slug}`} />
              <div className="card-meta">
                <h3 className="card-name">
                  <span>
                    {s.name?.en}
                    {isNew && <span className="tag tag-new">{getCopyKo('newBadge')}</span>}
                  </span>
                  <span className="card-name-sub">{s.name?.ko}</span>
                </h3>
                {s.tagline && <BilingualText text={s.tagline} tag="p" className="card-tag" />}
              </div>
            </Link>
          );
        })}
      </section>

      {filteredStyles.length === 0 && (
        <p id="style-no-result" className="no-result">
          <span>{getCopyKo('searchNoResult')}</span>
        </p>
      )}
    </main>
  );
};
