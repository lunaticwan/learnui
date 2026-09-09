import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ENTRIES } from '../data/entries';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

const NEW_SLUGS = new Set([
  'text-scramble', 'spring', 'easing', 'masonry', 'bento-grid', 'hamburger-menu', 'lightbox', 'marquee'
]);

export const EntryDetailView: React.FC = () => {
  const { platform, slug } = useParams<{ platform: string; slug: string }>();
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedDebug, setCopiedDebug] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);

  const entry = ENTRIES.find((e) => e.slug === slug && e.platform === platform);

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  const platLabel = entry.platform === 'web' ? 'Web' : 'macOS';
  const isNew = NEW_SLUGS.has(entry.slug);

  const handleCopy = (text: string, type: 'prompt' | 'debug' | 'md') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'prompt') {
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 2000);
      } else if (type === 'debug') {
        setCopiedDebug(true);
        setTimeout(() => setCopiedDebug(false), 2000);
      } else if (type === 'md') {
        setCopiedMd(true);
        setTimeout(() => setCopiedMd(false), 2000);
      }
    });
  };

  const generateMarkdown = () => {
    const lines = [
      `# ${entry.name?.en || entry.slug} · ${entry.name?.ko || ''}`,
      '',
      `UI reference — https://learnui.qiaomu.ai/${entry.platform}/${entry.slug}/`,
      '',
      `**${entry.tagline?.en || ''}**`,
      entry.tagline?.ko || '',
      '',
      `**Also called:** ${(entry.aka?.en || []).join(', ')} / ${(entry.aka?.ko || []).join(', ')}`,
      '',
    ];

    if (entry.parts && entry.parts.length > 0) {
      lines.push('## Anatomy', '');
      entry.parts.forEach((p: any, idx: number) => {
        lines.push(
          `${idx + 1}. **${p.name?.en || ''} · ${p.name?.ko || ''}** (\`${p.api || ''}\`)`,
          `   ${p.description?.en || ''}`,
          `   ${p.description?.ko || ''}`,
          `   Prompt fragment: ${p.prompt?.en || ''}`,
          ''
        );
      });
    }

    lines.push(
      '## Prompt',
      '',
      entry.prompt?.en || '',
      '',
      entry.prompt?.ko || '',
      '',
      '## Debug prompt',
      '',
      entry.debugPrompt?.en || '',
      '',
      entry.debugPrompt?.ko || '',
      '',
      '## In code',
      ''
    );

    (entry.api || []).forEach((a: any) => {
      let line = `- **${a.framework}** \`${a.symbol}\``;
      if (a.note?.en) {
        line += ` — ${a.note.en} / ${a.note.ko || ''}`;
      }
      lines.push(line);
    });

    return lines.join('\n');
  };

  const relatedEntries = (entry.related || entry.relatedSlugs || [])
    .map((rSlug: string) => ENTRIES.find((e) => e.slug === rSlug))
    .filter(Boolean);

  return (
    <main className="wrap entry">
      <nav className="crumbs">
        <Link to="/">{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <Link to={`/?platform=${entry.platform}#dictionary`}>{platLabel}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span>{entry.name?.en} ({entry.name?.ko})</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span>
            {entry.name?.en} {isNew && <span className="tag tag-new">{getCopyKo('newBadge')}</span>}
          </span>
          <span className="card-name-sub">{entry.name?.ko}</span>
          <span className="tag tag-platform">{entry.platform}</span>
        </h1>
        <BilingualText text={entry.tagline} tag="p" className="entry-tag" />

        <dl className="entry-meta">
          <div className="meta-row">
            <dt>{getCopyKo('alsoCalled')}</dt>
            <dd>
              <span>{(entry.aka?.ko || entry.aka?.en || []).join(', ')}</span>
            </dd>
          </div>

          <div className="meta-row">
            <dt>{getCopyKo('ifYouCalledIt')}</dt>
            <dd>
              <ul className="fuzzy-list">
                {(entry.fuzzy?.ko || entry.fuzzy?.en || []).map((fKo: string, idx: number) => (
                  <li key={idx}>
                    <span>“{fKo}”</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </header>

      <SpecimenViewer slug={entry.slug} detail />
      <p className="stage-hint">
        <span>인터랙티브 예시 — 직접 조작해보세요.</span>
      </p>

      {entry.parts && entry.parts.length > 0 && (
        <section className="sect">
          <h2 className="section-title">
            <span>{getCopyKo('anatomy')}</span>
          </h2>
          <ol className="parts" style={{ display: 'grid', gap: '16px' }}>
            {entry.parts.map((p: any, idx: number) => (
              <li key={p.id || idx} className="part" style={{ padding: '20px', borderRadius: '12px', border: '1px solid #eaeaea', background: '#ffffff', listStyle: 'none' }}>
                <div className="part-head" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span className="part-num" style={{ background: '#f5f5f5', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{idx + 1}</span>
                  <span className="part-name" style={{ fontSize: '16px', fontWeight: 600 }}>
                    <span>{p.name?.en}</span>
                    {p.name?.ko && <span className="card-name-sub" style={{ marginLeft: '8px', color: '#737373', fontWeight: 400 }}>{p.name?.ko}</span>}
                  </span>
                  {p.api && <code className="part-api" style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '12px', background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>{p.api}</code>}
                </div>
                <BilingualText text={p.description} tag="p" className="part-desc" style={{ fontSize: '14px', color: '#525252', lineHeight: '1.6' }} />
                {p.prompt && (
                  <div className="part-prompt" style={{ marginTop: '12px', padding: '12px', background: '#fafafa', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                    <span className="part-prompt-label" style={{ fontSize: '11px', textTransform: 'uppercase', color: '#a3a3a3', fontWeight: 600, display: 'block', marginBottom: '4px' }}>{getCopyKo('promptFragment')}</span>
                    <p className="mono-sm" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#171717', margin: 0 }}>{p.prompt.ko || p.prompt.en}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {entry.prompt && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('promptSection')}</h2>
          <div className="copy-block">
            <button
              type="button"
              className={`btn btn-copy ${copiedPrompt ? 'done' : ''}`}
              onClick={() => handleCopy(entry.prompt?.ko || entry.prompt?.en || '', 'prompt')}
            >
              <span>{copiedPrompt ? getCopyKo('copied') : getCopyKo('copy')}</span>
            </button>
            <div className="copy-text" style={{ padding: '16px', background: '#fafafa', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: '#171717' }}>{entry.prompt?.ko || entry.prompt?.en}</p>
              {entry.prompt?.ko && entry.prompt?.en && (
                <p style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #e5e5e5', fontSize: '13px', lineHeight: '1.6', color: '#737373' }}>
                  {entry.prompt.en}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {entry.debugPrompt && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('debugSection')}</h2>
          <div className="copy-block">
            <button
              type="button"
              className={`btn btn-copy ${copiedDebug ? 'done' : ''}`}
              onClick={() => handleCopy(entry.debugPrompt?.ko || entry.debugPrompt?.en || '', 'debug')}
            >
              <span>{copiedDebug ? getCopyKo('copied') : getCopyKo('copy')}</span>
            </button>
            <div className="copy-text" style={{ padding: '16px', background: '#fafafa', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: '#171717' }}>{entry.debugPrompt?.ko || entry.debugPrompt?.en}</p>
              {entry.debugPrompt?.ko && entry.debugPrompt?.en && (
                <p style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #e5e5e5', fontSize: '13px', lineHeight: '1.6', color: '#737373' }}>
                  {entry.debugPrompt.en}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {entry.api && entry.api.length > 0 && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('inCode')}</h2>
          <div className="table-scroll">
            <table className="api-table">
              <thead>
                <tr>
                  <th>{getCopyKo('framework')}</th>
                  <th>{getCopyKo('symbol')}</th>
                  <th>{getCopyKo('note')}</th>
                </tr>
              </thead>
              <tbody>
                {entry.api.map((a: any, idx: number) => (
                  <tr key={idx}>
                    <td className="mono fw">{a.framework}</td>
                    <td className="mono sym">{a.symbol}</td>
                    <td className="note">
                      {a.note && (
                        <span>{a.note.ko || a.note.en}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {relatedEntries.length > 0 && (
        <section className="sect">
          <h2 className="section-title">{getCopyKo('seeAlso')}</h2>
          <div className="rel-grid">
            {relatedEntries.map((re: any, idx: number) => (
              <Link key={re?.slug || idx} className="rel-card" to={`/${re?.platform}/${re?.slug}`}>
                <span className="rel-name">
                  <span>{re?.name?.en}</span>
                  <span className="card-name-sub">{re?.name?.ko}</span>
                </span>
                <span className="rel-sym">{re?.api?.[0]?.symbol}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="sect">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => handleCopy(generateMarkdown(), 'md')}
        >
          ⧉ <span>{copiedMd ? getCopyKo('copied') : getCopyKo('copyPage')}</span>
        </button>
      </section>
    </main>
  );
};
