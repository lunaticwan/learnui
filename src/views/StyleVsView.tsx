import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const StyleVsView: React.FC = () => {
  const { pair } = useParams<{ pair: string }>();
  const { langMode } = useLanguage();

  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, 'en');
  const getCopyZh = (key: string) => getLocalizedString(UI_COPY[key] as any, 'zh');
  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  if (!pair) return null;

  const [slugA, slugB] = pair.split('-vs-');
  const styleA = STYLES.find(s => s.slug === slugA);
  const styleB = STYLES.find(s => s.slug === slugB);

  if (!styleA || !styleB) {
    const notFoundText = langMode === 'ko' ? '비교 페이지를 찾을 수 없습니다' : langMode === 'zh' ? '未找到对比页面' : 'Comparison not found';
    const backText = langMode === 'ko' ? '스타일 목록으로 돌아가기' : langMode === 'zh' ? '返回风格列表' : 'Back to Styles';

    return (
      <main className="wrap entry">
        <h2>{notFoundText}</h2>
        <Link to="/styles" className="btn btn-ghost" style={{ marginTop: '16px' }}>{backText}</Link>
      </main>
    );
  }

  return (
    <main className="wrap entry">
      <nav className="crumbs">
        <Link to="/">
          <span className="lang-en">{getCopy('indexCrumb')}</span>
          <span className="lang-zh">{getCopyZh('indexCrumb')}</span>
          <span className="lang-ko">{getCopyKo('indexCrumb')}</span>
        </Link>
        <span className="crumb-sep">/</span>
        <Link to="/styles">
          <span className="lang-en">{getCopy('stylesCrumb')}</span>
          <span className="lang-zh">{getCopyZh('stylesCrumb')}</span>
          <span className="lang-ko">{getCopyKo('stylesCrumb')}</span>
        </Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span className="lang-en">{getCopy('vsCrumb')}: {styleA.name.en} vs {styleB.name.en}</span>
          <span className="lang-zh">{getCopyZh('vsCrumb')}：{styleA.name.zh || styleA.name.en} vs {styleB.name.zh || styleB.name.en}</span>
          <span className="lang-ko">{getCopyKo('vsCrumb')}: {styleA.name.ko || styleA.name.en} vs {styleB.name.ko || styleB.name.en}</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <BilingualText text={styleA.name} tag="span" /> vs <BilingualText text={styleB.name} tag="span" />
        </h1>
        <p className="entry-tag">
          <span className="lang-en">{getCopy('vsDesc')}</span>
          <span className="lang-zh">{getCopyZh('vsDesc')}</span>
          <span className="lang-ko">{getCopyKo('vsDesc')}</span>
        </p>
      </header>

      <div className="vs-pair" style={{ marginTop: '24px' }}>
        <div className="vs-why-card">
          <h2 className="vs-why-head"><BilingualText text={styleA.name} /></h2>
          {styleA.tagline && <BilingualText text={styleA.tagline} tag="p" />}
          {styleA.scope && <BilingualText text={styleA.scope} tag="p" />}
        </div>

        <div className="vs-why-card">
          <h2 className="vs-why-head"><BilingualText text={styleB.name} /></h2>
          {styleB.tagline && <BilingualText text={styleB.tagline} tag="p" />}
          {styleB.scope && <BilingualText text={styleB.scope} tag="p" />}
        </div>
      </div>
    </main>
  );
};
