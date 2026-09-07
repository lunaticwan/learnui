import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GUIDES } from '../data/guides';
import { UI_COPY } from '../data/uiCopy';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const GuideDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { langMode } = useLanguage();

  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, 'en');
  const getCopyZh = (key: string) => getLocalizedString(UI_COPY[key] as any, 'zh');
  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  const guide = slug ? GUIDES[slug] : undefined;

  if (!guide) {
    const notFoundTitle = langMode === 'ko' ? '가이드를 찾을 수 없습니다' : langMode === 'zh' ? '未找到指南' : 'Guide not found';
    const backText = langMode === 'ko' ? '홈으로 돌아가기' : langMode === 'zh' ? '返回首页' : 'Back to Home';

    return (
      <main className="wrap entry">
        <h2>{notFoundTitle}</h2>
        <Link to="/" className="btn btn-ghost" style={{ marginTop: '16px' }}>{backText}</Link>
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
        <span className="crumb-cur">
          <span className="lang-en">{getCopy('guideCrumb')}</span>
          <span className="lang-zh">{getCopyZh('guideCrumb')}</span>
          <span className="lang-ko">{getCopyKo('guideCrumb')}</span>
        </span>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <BilingualText text={guide.title} tag="span" />
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <BilingualText text={guide.title} tag="span" />
        </h1>
        {guide.lede && <BilingualText text={guide.lede} tag="p" className="entry-tag" />}
      </header>

      {guide.sections && guide.sections.map((sec, idx) => (
        <section key={idx} className="sect">
          <h2 className="section-title">
            <BilingualText text={sec.title} tag="span" />
          </h2>
          <BilingualText text={sec.content} tag="p" className="guide-para" />
        </section>
      ))}
    </main>
  );
};
