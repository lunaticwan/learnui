import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { STYLES } from '../data/styles';
import { ENTRIES } from '../data/entries';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const StyleDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const style = STYLES.find((s) => s.slug === slug);

  if (!style) {
    return <Navigate to="/styles" replace />;
  }

  const getCopy = (key: string, param?: Record<string, string>) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'en');
    if (param) {
      Object.entries(param).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, v);
      });
    }
    return str;
  };

  const getCopyZh = (key: string, param?: Record<string, string>) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'zh');
    if (param) {
      Object.entries(param).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, v);
      });
    }
    return str;
  };

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeIndex(idx);
      setTimeout(() => setCopiedCodeIndex(null), 2000);
    });
  };

  const handleCopyText = (text: string, type: 'brief' | 'md') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'brief') {
        setCopiedBrief(true);
        setTimeout(() => setCopiedBrief(false), 2000);
      } else {
        setCopiedMd(true);
        setTimeout(() => setCopiedMd(false), 2000);
      }
    });
  };

  const generateMarkdown = () => {
    const lines = [
      `# ${style.name.en} · ${style.name.zh || ''}`,
      '',
      `Style reference — https://learnui.qiaomu.ai/styles/${style.slug}/`,
      '',
    ];

    if (style.tagline) {
      lines.push(style.tagline.en, style.tagline.zh || '', '');
    }

    if (style.aliases && style.aliases.en) {
      lines.push('## If you called it… / 如果你管它叫……', '');
      style.aliases.en.forEach((a, i) => {
        const zh = style.aliases?.zh?.[i] || '';
        lines.push(`- “${a}” / 「${zh}」`);
      });
      lines.push('');
    }

    if (style.signals) {
      lines.push('## Full style DNA / 完整风格 DNA', '');
      style.signals.forEach((sig) => {
        lines.push(
          `- **[${sig.role}] ${sig.name.en} · ${sig.name.zh || ''}** (${sig.facet})`,
          `  ${sig.description.en}`,
          `  ${sig.description.zh || ''}`
        );
      });
      lines.push('');
    }

    if (style.brief) {
      lines.push('## Style brief / 风格 Brief', '', style.brief.en, '', style.brief.zh || '', '');
    }

    if (style.origin) {
      lines.push('## Origin / 起源', '', style.origin.en, '', style.origin.zh || '');
    }

    return lines.join('\n');
  };

  const otherStyle = style.confusedWith
    ? STYLES.find((s) => s.slug === style.confusedWith?.slug)
    : undefined;

  return (
    <main className="wrap entry">
      <nav className="crumbs">
        <Link to="/">
          <span className="lang-en">{getCopy('indexCrumb')}</span>
          <span className="lang-zh">{getCopyZh('indexCrumb')}</span>
        </Link>
        <span className="crumb-sep">/</span>
        <Link to="/styles">
          <span className="lang-en">{getCopy('stylesCrumb')}</span>
          <span className="lang-zh">{getCopyZh('stylesCrumb')}</span>
        </Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span className="lang-en">{style.name.en}</span>
          <span className="lang-zh">{style.name.zh}</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span className="lang-en">{style.name.en}</span>
          <span className="lang-zh entry-title-zh">{style.name.zh}</span>
        </h1>
        {style.tagline && <BilingualText text={style.tagline} tag="p" className="entry-tag" />}
        {style.scope && <BilingualText text={style.scope} tag="p" className="guide-para" />}
      </header>

      <SpecimenViewer slug={`style-${style.slug}`} detail />
      <p className="stage-hint lang-zh">标本可交互 —— 点点看。Specimen is live — try it.</p>

      {style.aliases && style.aliases.en.length > 0 && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('ifYouCalledIt')}</span>
            <span className="lang-zh">{getCopyZh('ifYouCalledIt')}</span>
          </h2>
          <div className="alias-chips">
            {style.aliases.en.map((a, idx) => (
              <span key={idx} className="alias-chip">
                <span className="lang-en">“{a}”</span>
                <span className="lang-zh">「{style.aliases?.zh?.[idx] || ''}」</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {style.signals && style.signals.length > 0 && (
        <section className="sect" style={{ maxWidth: 'none' }}>
          <h2 className="section-title">
            <span className="lang-en">{getCopy('dnaTitle')}</span>
            <span className="lang-zh">{getCopyZh('dnaTitle')}</span>
          </h2>
          <ol className="dna">
            {style.signals.map((sig) => {
              const roleKeyMap: Record<string, string> = {
                defining: 'roleDefining',
                supporting: 'roleSupporting',
                variable: 'roleVariable',
                avoid: 'roleAvoid',
              };
              const roleKey = roleKeyMap[sig.role] || 'roleSupporting';

              return (
                <li key={sig.id} className="dna-item">
                  <div className="dna-head">
                    <span className="dna-name">
                      <span className="lang-en">{sig.name.en}</span>
                      <span className="lang-zh dna-name-zh">{sig.name.zh}</span>
                    </span>
                    <span className="dna-facet">{sig.facet}</span>
                    <span className={`dna-role dna-role-${sig.role}`}>
                      <span className="lang-en">{getCopy(roleKey)}</span>
                      <span className="lang-zh">{getCopyZh(roleKey)}</span>
                    </span>
                  </div>
                  <BilingualText text={sig.description} tag="p" className="dna-desc" />
                </li>
              );
            })}
          </ol>
        </section>
      )}

      {style.confusedWith && otherStyle && (
        <section className="sect" style={{ maxWidth: 'none' }}>
          <h2 className="section-title">
            <span className="lang-en">{getCopy('confusedTitle')}: {style.confusedWith.name}</span>
            <span className="lang-zh">{getCopyZh('confusedTitle')}：{otherStyle.name.zh || style.confusedWith.name}</span>
          </h2>
          <div className="vs-pair">
            <div className="vs-cell">
              <SpecimenViewer slug={`style-${style.slug}`} />
              <p className="vs-cell-label">
                <span className="lang-en">{style.name.en}</span>
                <span className="lang-zh">{style.name.zh}</span>
              </p>
            </div>
            <div className="vs-cell">
              <SpecimenViewer slug={`style-${otherStyle.slug}`} />
              <p className="vs-cell-label">
                <span className="lang-en">{otherStyle.name.en}</span>
                <span className="lang-zh">{otherStyle.name.zh}</span>
              </p>
            </div>
          </div>
          <div className="vs-why">
            <div className="vs-why-card">
              <BilingualText text={style.confusedWith.because} tag="p" />
            </div>
            <div className="vs-why-card">
              <BilingualText text={style.confusedWith.wouldBecomeIf} tag="p" />
            </div>
          </div>
          <p className="vs-more">
            <Link to={`/styles/vs/${[style.slug, otherStyle.slug].sort().join('-vs-')}`}>
              <span className="lang-en">{getCopy('vsCrumb')}: {style.name.en} vs {otherStyle.name.en} →</span>
              <span className="lang-zh">{getCopyZh('vsCrumb')}页 →</span>
            </Link>
          </p>
        </section>
      )}

      {style.code && style.code.length > 0 && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('styleCodeTitle')}</span>
            <span className="lang-zh">{getCopyZh('styleCodeTitle')}</span>
          </h2>
          {style.code.map((c, idx) => (
            <div key={idx} className="code-block">
              <button
                type="button"
                className={`btn btn-copy ${copiedCodeIndex === idx ? 'done' : ''}`}
                onClick={() => handleCopyCode(c.code, idx)}
              >
                <span className="lang-en">{copiedCodeIndex === idx ? getCopy('copied') : getCopy('copy')}</span>
                <span className="lang-zh">{copiedCodeIndex === idx ? getCopyZh('copied') : getCopyZh('copy')}</span>
              </button>
              {c.title && <p className="code-title">{c.title}</p>}
              <pre>
                <code>{c.code}</code>
              </pre>
            </div>
          ))}
        </section>
      )}

      {style.brief && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('briefTitle')}</span>
            <span className="lang-zh">{getCopyZh('briefTitle')}</span>
          </h2>
          <div className="copy-block">
            <button
              type="button"
              className={`btn btn-copy ${copiedBrief ? 'done' : ''}`}
              onClick={() => handleCopyText(style.brief?.en || '', 'brief')}
            >
              <span className="lang-en">{copiedBrief ? getCopy('copied') : getCopy('copy')}</span>
              <span className="lang-zh">{copiedBrief ? getCopyZh('copied') : getCopyZh('copy')}</span>
            </button>
            <div className="copy-text">
              <p className="lang-en">{style.brief.en}</p>
              <p className="lang-zh zh-copy">{style.brief.zh}</p>
            </div>
          </div>
        </section>
      )}

      {style.accessibility && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('a11yTitle')}</span>
            <span className="lang-zh">{getCopyZh('a11yTitle')}</span>
          </h2>
          <BilingualText text={style.accessibility} tag="p" className="guide-para" />
        </section>
      )}

      {style.origin && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('originTitle')}</span>
            <span className="lang-zh">{getCopyZh('originTitle')}</span>
          </h2>
          <BilingualText text={style.origin} tag="p" className="guide-para" />
        </section>
      )}

      {style.seeAlso && style.seeAlso.length > 0 && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('seeAlso')}</span>
            <span className="lang-zh">{getCopyZh('seeAlso')}</span>
          </h2>
          <div className="rel-grid">
            {style.seeAlso.map((sa, idx) => {
              let ref = sa.slug || '';
              if (ref.startsWith('styles/')) ref = ref.replace('styles/', '');

              const targetStyle = STYLES.find((s) => s.slug === ref);
              if (targetStyle) {
                return (
                  <Link key={idx} className="rel-card" to={`/styles/${targetStyle.slug}`}>
                    <span className="rel-name">
                      <span className="lang-en">{targetStyle.name.en}</span>
                      <span className="lang-zh rel-name-zh">{targetStyle.name.zh}</span>
                    </span>
                  </Link>
                );
              }

              const targetEntry = ENTRIES.find((e) => e.slug === ref);
              if (targetEntry) {
                return (
                  <Link key={idx} className="rel-card" to={`/${targetEntry.platform}/${targetEntry.slug}`}>
                    <span className="rel-name">
                      <span className="lang-en">{targetEntry.name.en}</span>
                      <span className="lang-zh rel-name-zh">{targetEntry.name.zh}</span>
                    </span>
                    <span className="rel-sym">{targetEntry.api[0]?.symbol}</span>
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </section>
      )}

      <section className="sect">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => handleCopyText(generateMarkdown(), 'md')}
        >
          ⧉ <span className="lang-en">{copiedMd ? getCopy('copied') : getCopy('copyPage')}</span>
          <span className="lang-zh">{copiedMd ? getCopyZh('copied') : getCopyZh('copyPage')}</span>
        </button>
      </section>
    </main>
  );
};
