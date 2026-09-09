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
    return STYLES.filter((s) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchNameEn = (s.name?.en || '').toLowerCase().includes(q);
      const matchNameKo = (s.name?.ko || '').toLowerCase().includes(q);
      const matchTaglineEn = (s.tagline?.en || '').toLowerCase().includes(q);
      const matchTaglineKo = (s.tagline?.ko || '').toLowerCase().includes(q);
      const matchAliases = (s.aliases?.en || []).some((a: string) => a.toLowerCase().includes(q)) ||
                           (s.aliases?.ko || []).some((a: string) => a.toLowerCase().includes(q));

      return matchNameEn || matchNameKo || matchTaglineEn || matchTaglineKo || matchAliases;
    });
  }, [searchQuery]);

  return (
    <main className="wrap">
      <nav className="crumbs">
        <Link to="/">{getCopyKo('indexCrumb')}</Link>
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
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <Link key={s.slug} className="style-card" to={`/styles/${s.slug}`}>
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
