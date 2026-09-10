import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useCopyToClipboard } from 'usehooks-ts';
import { toast } from 'sonner';
import clsx from 'clsx';
import { STYLES } from '../data/styles';
import { ENTRIES } from '../data/entries';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const StyleDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [, copy] = useCopyToClipboard();
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const style = STYLES.find((s) => s.slug === slug);

  if (!style) {
    return <Navigate to="/styles" replace />;
  }

  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  const handleCopyCode = (code: string, idx: number) => {
    copy(code)
      .then(() => {
        toast.success('스타일 스니펫 코드가 복사되었습니다.');
        setCopiedCodeIndex(idx);
        setTimeout(() => setCopiedCodeIndex(null), 2000);
      })
      .catch(() => {
        toast.error('코드 복사에 실패했습니다.');
      });
  };

  const handleCopyText = (text: string, type: 'brief' | 'md', label: string) => {
    copy(text)
      .then(() => {
        toast.success(`${label} 항목이 클립보드에 복사되었습니다.`);
        if (type === 'brief') {
          setCopiedBrief(true);
          setTimeout(() => setCopiedBrief(false), 2000);
        } else {
          setCopiedMd(true);
          setTimeout(() => setCopiedMd(false), 2000);
        }
      })
      .catch(() => {
        toast.error('복사에 실패했습니다.');
      });
  };

  const generateMarkdown = () => {
    const lines = [
      `# ${style.name?.en || style.slug} · ${style.name?.ko || ''}`,
      '',
      `Style reference — https://learnui.qiaomu.ai/styles/${style.slug}/`,
      '',
    ];

    if (style.tagline) {
      lines.push(style.tagline.ko || style.tagline.en || '', '');
    }

    if (style.aliases && style.aliases.ko) {
      lines.push('## If you called it…', '');
      style.aliases.ko.forEach((a: string) => {
        lines.push(`- “${a}”`);
      });
      lines.push('');
    }

    if (style.signals) {
      lines.push('## Full style DNA', '');
      style.signals.forEach((sig: any) => {
        lines.push(
          `- **[${sig.role}] ${sig.name?.en || ''} · ${sig.name?.ko || ''}** (${sig.facet})`,
          `  ${sig.description?.ko || sig.description?.en || ''}`
        );
      });
      lines.push('');
    }

    if (style.brief) {
      lines.push('## Style brief', '', style.brief.ko || style.brief.en || '', '');
    }

    if (style.origin) {
      lines.push('## Origin', '', style.origin.ko || style.origin.en || '');
    }

    return lines.join('\n');
  };

  const otherStyle = style.confusedWith
    ? STYLES.find((s) => s.slug === style.confusedWith?.slug)
    : undefined;

  return (
    <main className="wrap entry">
      <nav className="crumbs">
        <Link to="/">{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <Link to="/styles">{getCopyKo('stylesCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span>{style.name?.en} ({style.name?.ko})</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span>{style.name?.en}</span>
          <span className="card-name-sub">{style.name?.ko}</span>
        </h1>
        {style.tagline && <BilingualText text={style.tagline} tag="p" className="entry-tag" />}
        {style.scope && <BilingualText text={style.scope} tag="p" className="guide-para" />}
      </header>

      <SpecimenViewer slug={`style-${style.slug}`} detail />
      <p className="stage-hint">
        <span>인터랙티브 예시 — 직접 조작해보세요.</span>
      </p>

      {style.aliases?.ko && style.aliases.ko.length > 0 && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('ifYouCalledIt')}</h2>
          <div className="alias-chips">
            {style.aliases.ko.map((a: string, idx: number) => (
              <span key={idx} className="alias-chip">
                <span>“{a}”</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {style.signals && style.signals.length > 0 && (
        <section className="sect" style={{ maxWidth: 'none' }}>
          <h2 className="section-title">{getCopyKo('dnaTitle')}</h2>
          <ol className="dna">
            {style.signals.map((sig: any) => {
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
                      <span>{sig.name?.en}</span>
                      <span className="card-name-sub">{sig.name?.ko}</span>
                    </span>
                    <span className="dna-facet">{sig.facet}</span>
                    <span className={clsx('dna-role', `dna-role-${sig.role}`)}>
                      <span>{getCopyKo(roleKey)}</span>
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
            {getCopyKo('confusedTitle')}: {otherStyle.name?.ko || style.confusedWith.name}
          </h2>
          <div className="vs-pair">
            <div className="vs-cell">
              <SpecimenViewer slug={`style-${style.slug}`} />
              <p className="vs-cell-label">
                <span>{style.name?.en} ({style.name?.ko})</span>
              </p>
            </div>
            <div className="vs-cell">
              <SpecimenViewer slug={`style-${otherStyle.slug}`} />
              <p className="vs-cell-label">
                <span>{otherStyle.name?.en} ({otherStyle.name?.ko})</span>
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
              <span>{getCopyKo('vsCrumb')}: {style.name?.ko || style.name?.en} vs {otherStyle.name?.ko || otherStyle.name?.en} →</span>
            </Link>
          </p>
        </section>
      )}

      {style.code && style.code.length > 0 && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('styleCodeTitle')}</h2>
          {style.code.map((c: any, idx: number) => (
            <div key={idx} className="code-block">
              <button
                type="button"
                className={clsx('btn', 'btn-copy', { done: copiedCodeIndex === idx })}
                onClick={() => handleCopyCode(c.code, idx)}
              >
                <span>{copiedCodeIndex === idx ? getCopyKo('copied') : getCopyKo('copy')}</span>
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
          <h2 className="section-title">{getCopyKo('briefTitle')}</h2>
          <div className="copy-block">
            <button
              type="button"
              className={clsx('btn', 'btn-copy', { done: copiedBrief })}
              onClick={() => handleCopyText(style.brief?.ko || style.brief?.en || '', 'brief', getCopyKo('briefTitle'))}
            >
              <span>{copiedBrief ? getCopyKo('copied') : getCopyKo('copy')}</span>
            </button>
            <div className="copy-text">
              <p>{style.brief.ko || style.brief.en}</p>
            </div>
          </div>
        </section>
      )}

      {style.accessibility && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('a11yTitle')}</h2>
          <BilingualText text={style.accessibility} tag="p" className="guide-para" />
        </section>
      )}

      {style.origin && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('originTitle')}</h2>
          <BilingualText text={style.origin} tag="p" className="guide-para" />
        </section>
      )}

      {style.seeAlso && style.seeAlso.length > 0 && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('seeAlso')}</h2>
          <div className="rel-grid">
            {style.seeAlso.map((sa: any, idx: number) => {
              let ref = sa.slug || '';
              if (ref.startsWith('styles/')) ref = ref.replace('styles/', '');

              const targetStyle = STYLES.find((s) => s.slug === ref);
              if (targetStyle) {
                return (
                  <Link key={idx} className="rel-card" to={`/styles/${targetStyle.slug}`}>
                    <span className="rel-name">
                      <span>{targetStyle.name?.en}</span>
                      <span className="card-name-sub">{targetStyle.name?.ko}</span>
                    </span>
                  </Link>
                );
              }

              const targetEntry = ENTRIES.find((e) => e.slug === ref);
              if (targetEntry) {
                return (
                  <Link key={idx} className="rel-card" to={`/${targetEntry.platform}/${targetEntry.slug}`}>
                    <span className="rel-name">
                      <span>{targetEntry.name?.en}</span>
                      <span className="card-name-sub">{targetEntry.name?.ko}</span>
                    </span>
                    <span className="rel-sym">{targetEntry.api?.[0]?.symbol}</span>
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
          className={clsx('btn', 'btn-ghost', { done: copiedMd })}
          onClick={() => handleCopyText(generateMarkdown(), 'md', getCopyKo('copyPage'))}
        >
          ⧉ <span>{copiedMd ? getCopyKo('copied') : getCopyKo('copyPage')}</span>
        </button>
      </section>
    </main>
  );
};
