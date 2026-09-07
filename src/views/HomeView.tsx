import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ENTRIES } from '../data/entries';
import { GUIDES } from '../data/guides';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedString } from '../types/ui';

const NEW_SLUGS = new Set([
  'text-scramble', 'spring', 'easing', 'masonry', 'bento-grid', 'hamburger-menu', 'lightbox', 'marquee'
]);

export const HomeView: React.FC = () => {
  const { langMode } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'web' | 'macos'>('all');
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
      const matchNameZh = (e.name?.zh || '').toLowerCase().includes(q);
      const matchNameKo = (e.name?.ko || '').toLowerCase().includes(q);
      const matchTaglineEn = (e.tagline?.en || '').toLowerCase().includes(q);
      const matchTaglineZh = (e.tagline?.zh || '').toLowerCase().includes(q);
      const matchTaglineKo = (e.tagline?.ko || '').toLowerCase().includes(q);
      const matchSymbol = (e.api || []).some((a: any) => (a.symbol || '').toLowerCase().includes(q));
      const matchAka = (e.aka?.en || []).some((a: string) => a.toLowerCase().includes(q)) ||
                       (e.aka?.zh || []).some((a: string) => a.toLowerCase().includes(q)) ||
                       (e.aka?.ko || []).some((a: string) => a.toLowerCase().includes(q));
      const matchFuzzy = (e.fuzzy?.en || []).some((f: string) => f.toLowerCase().includes(q)) ||
                        (e.fuzzy?.zh || []).some((f: string) => f.toLowerCase().includes(q)) ||
                        (e.fuzzy?.ko || []).some((f: string) => f.toLowerCase().includes(q));

      return matchNameEn || matchNameZh || matchNameKo || matchTaglineEn || matchTaglineZh || matchTaglineKo || matchSymbol || matchAka || matchFuzzy;
    });
  }, [filter, searchQuery]);

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * ENTRIES.length);
    const entry = ENTRIES[randomIndex];
    window.location.href = `/${entry.platform}/${entry.slug}`;
  };

  const g1 = GUIDES['appkit-vs-swiftui'];
  const g2 = GUIDES['swift-vs-electron'];

  const placeholderText = langMode === 'ko'
    ? getCopyKo('searchPlaceholder')
    : `${getCopyZh('searchPlaceholder')} / ${getCopy('searchPlaceholder')}`;

  return (
    <main className="wrap">
      <section className="hero">
        <h1 className="hero-title">
          <span className="lang-en">{getCopy('heroTitle')}</span>
          <span className="lang-zh hero-title-zh">{getCopyZh('heroTitle')}</span>
          <span className="lang-ko hero-title-zh">{getCopyKo('heroTitle')}</span>
        </h1>
        <BilingualText text={UI_COPY['heroSub'] as any} tag="p" className="hero-sub" />

        <p className="vibe-promo">
          <span className="tag tag-new">{getCopy('newBadge')}</span>
          <Link className="lang-en" to="/styles">
            {getCopy('vibePromo')} →
          </Link>
          <Link className="lang-zh" to="/styles">
            {getCopyZh('vibePromo')} →
          </Link>
          <Link className="lang-ko" to="/styles">
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
              placeholder={placeholderText}
              aria-label="Search"
            />
            <kbd className="search-kbd">/</kbd>
          </div>

          <button type="button" id="surprise" className="btn btn-ghost" onClick={handleSurprise}>
            ⚂ <span className="lang-en">{getCopy('surprise')}</span>
            <span className="lang-zh">{getCopyZh('surprise')}</span>
            <span className="lang-ko">{getCopyKo('surprise')}</span>
          </button>

          <div className="tabs" role="tablist">
            <button
              type="button"
              className={`tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span className="lang-en">{getCopy('tabAll')}</span>
              <span className="lang-zh">{getCopyZh('tabAll')}</span>
              <span className="lang-ko">{getCopyKo('tabAll')}</span>
            </button>
            <button
              type="button"
              className={`tab ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              <span className="lang-en">{getCopy('tabWeb')}</span>
              <span className="lang-zh">{getCopyZh('tabWeb')}</span>
              <span className="lang-ko">{getCopyKo('tabWeb')}</span>
            </button>
            <button
              type="button"
              className={`tab ${filter === 'macos' ? 'active' : ''}`}
              onClick={() => setFilter('macos')}
            >
              <span className="lang-en">{getCopy('tabMacos')}</span>
              <span className="lang-zh">{getCopyZh('tabMacos')}</span>
              <span className="lang-ko">{getCopyKo('tabMacos')}</span>
            </button>
          </div>

          <p className="count-note" id="count-note">
            <span className="lang-en">{getCopy('entriesCount', filteredEntries.length)}</span>
            <span className="lang-zh">{getCopyZh('entriesCount', filteredEntries.length)}</span>
            <span className="lang-ko">{getCopyKo('entriesCount', filteredEntries.length)}</span>
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
                  <span className="lang-en">
                    {e.name?.en}
                    {isNew && <span className="tag tag-new">{getCopy('newBadge')}</span>}
                  </span>
                  <span className="lang-zh card-name-zh">{e.name?.zh}</span>
                  <span className="lang-ko card-name-zh">{e.name?.ko || e.name?.en}</span>
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
            <span className="lang-en">{getCopy('searchNoResult')}</span>
            <span className="lang-zh">{getCopyZh('searchNoResult')}</span>
            <span className="lang-ko">{getCopyKo('searchNoResult')}</span>
          </p>
          <div className="no-result-examples">
            <button type="button" onClick={() => setSearchQuery('the dots menu')}>
              “the dots menu”
            </button>
            <button type="button" onClick={() => setSearchQuery('mac window buttons')}>
              “mac window buttons”
            </button>
            <button type="button" onClick={() => setSearchQuery('红绿灯')}>
              「红绿灯」
            </button>
            <button type="button" onClick={() => setSearchQuery('점 3개 메뉴')}>
              「점 3개 메뉴」
            </button>
          </div>
        </div>
      )}

      <section id="guides" className="guides">
        <h2 className="section-title">
          <span className="lang-en">{getCopy('guidesTitle')}</span>
          <span className="lang-zh">{getCopyZh('guidesTitle')}</span>
          <span className="lang-ko">{getCopyKo('guidesTitle')}</span>
        </h2>
        <div className="guide-grid">
          <Link className="guide-card" to="/guides/appkit-vs-swiftui">
            <span className="guide-kind">Guide</span>
            <span className="guide-title">{g1?.title?.en}</span>
            <BilingualText text={UI_COPY['guide1Desc'] as any} tag="span" className="guide-desc" />
          </Link>
          <Link className="guide-card" to="/guides/swift-vs-electron">
            <span className="guide-kind">Guide</span>
            <span className="guide-title">{g2?.title?.en}</span>
            <BilingualText text={UI_COPY['guide2Desc'] as any} tag="span" className="guide-desc" />
          </Link>
          <Link className="guide-card" to="/guides/translate">
            <span className="guide-kind">Guide</span>
            <span className="guide-title">{getCopy('translateTitle')}</span>
            <BilingualText text={UI_COPY['guide3Desc'] as any} tag="span" className="guide-desc" />
          </Link>
        </div>
      </section>
    </main>
  );
};
