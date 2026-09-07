import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { STYLES, STYLES_META } from '../data/styles';
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

  const getCopy = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'en');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  const getCopyZh = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'zh');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  const filteredStyles = useMemo(() => {
    return STYLES.filter((s) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchNameEn = (s.name?.en || '').toLowerCase().includes(q);
      const matchNameZh = (s.name?.zh || '').toLowerCase().includes(q);
      const matchTaglineEn = (s.tagline?.en || '').toLowerCase().includes(q);
      const matchTaglineZh = (s.tagline?.zh || '').toLowerCase().includes(q);
      const matchAliases = (s.aliases?.en || []).some((a: string) => a.toLowerCase().includes(q)) ||
                           (s.aliases?.zh || []).some((a: string) => a.toLowerCase().includes(q));

      return matchNameEn || matchNameZh || matchTaglineEn || matchTaglineZh || matchAliases;
    });
  }, [searchQuery]);

  return (
    <main className="wrap">
      <nav className="crumbs">
        <Link to="/">
          <span className="lang-en">{getCopy('indexCrumb')}</span>
          <span className="lang-zh">{getCopyZh('indexCrumb')}</span>
        </Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span className="lang-en">{getCopy('stylesCrumb')}</span>
          <span className="lang-zh">{getCopyZh('stylesCrumb')}</span>
        </span>
      </nav>

      <section className="hero" style={{ paddingTop: '32px' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 4.6vw, 48px)' }}>
          <span className="lang-en">{getCopy('stylesTitle')}</span>
          <span className="lang-zh hero-title-zh">{getCopyZh('stylesTitle')}</span>
        </h1>

        <BilingualText text={STYLES_META.hubTagline} tag="p" className="hero-sub" />

        <div className="atlas-note">
          <h2>
            <span className="lang-en">{getCopy('governedTitle')}</span>{' '}
            <span className="lang-zh" style={{ fontWeight: 400, fontSize: '12.5px' }}>
              {getCopyZh('governedTitle')}
            </span>
          </h2>
          <BilingualText text={STYLES_META.governedNote} tag="p" />
          <div className="research-chips">
            {(STYLES_META.researching || []).map((item: string, idx: number) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        </div>

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
              placeholder={`${getCopyZh('searchStylesPlaceholder')} / ${getCopy('searchStylesPlaceholder')}`}
              aria-label="Search styles"
            />
            <kbd className="search-kbd">/</kbd>
          </div>

          <p className="count-note" id="style-count">
            <span className="lang-en">{getCopy('stylesCount', filteredStyles.length)}</span>
            <span className="lang-zh">{getCopyZh('stylesCount', filteredStyles.length)}</span>
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
                  <span className="lang-en">
                    {s.name?.en}
                    {isNew && <span className="tag tag-new">{getCopy('newBadge')}</span>}
                  </span>
                  <span className="lang-zh card-name-zh">{s.name?.zh}</span>
                </h3>
                {s.tagline && <BilingualText text={s.tagline} tag="p" className="card-tag" />}
              </div>
            </Link>
          );
        })}
      </section>

      {filteredStyles.length === 0 && (
        <p id="style-no-result" className="no-result">
          <span className="lang-en">{getCopy('searchNoResult')}</span>
          <span className="lang-zh">{getCopyZh('searchNoResult')}</span>
        </p>
      )}
    </main>
  );
};
