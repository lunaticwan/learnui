import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const StyleVsView: React.FC = () => {
  const { pair } = useParams<{ pair: string }>();

  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  if (!pair) return null;

  const [slugA, slugB] = pair.split('-vs-');
  const styleA = STYLES.find(s => s.slug === slugA);
  const styleB = STYLES.find(s => s.slug === slugB);

  if (!styleA || !styleB) {
    return (
      <main className="wrap entry">
        <h2>비교 페이지를 찾을 수 없습니다</h2>
        <Link to="/styles" className="btn btn-ghost" style={{ marginTop: '16px' }}>스타일 목록으로 돌아가기</Link>
      </main>
    );
  }

  return (
    <main className="wrap entry">
      <nav className="crumbs">
        <Link to="/">{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <Link to="/styles">{getCopyKo('stylesCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span>{getCopyKo('vsCrumb')}: {styleA.name.ko || styleA.name.en} vs {styleB.name.ko || styleB.name.en}</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span>{styleA.name.en} ({styleA.name.ko})</span> vs <span>{styleB.name.en} ({styleB.name.ko})</span>
        </h1>
        <p className="entry-tag">
          <span>{getCopyKo('vsDesc')}</span>
        </p>
      </header>

      <div className="vs-pair" style={{ marginTop: '24px' }}>
        <div className="vs-why-card">
          <h2 className="vs-why-head">{styleA.name.ko || styleA.name.en}</h2>
          {styleA.tagline && <BilingualText text={styleA.tagline} tag="p" />}
          {styleA.scope && <BilingualText text={styleA.scope} tag="p" />}
        </div>

        <div className="vs-why-card">
          <h2 className="vs-why-head">{styleB.name.ko || styleB.name.en}</h2>
          {styleB.tagline && <BilingualText text={styleB.tagline} tag="p" />}
          {styleB.scope && <BilingualText text={styleB.scope} tag="p" />}
        </div>
      </div>
    </main>
  );
};
