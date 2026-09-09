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
          <ol className="parts">
            {entry.parts.map((p: any, idx: number) => (
              <li key={p.id || idx} className="part">
                <div className="part-head">
                  <span className="part-num">{idx + 1}</span>
                  <span className="part-name">
                    <span>{p.name?.en}</span>
                    <span className="card-name-sub">{p.name?.ko}</span>
                  </span>
                  <code className="part-api">{p.api}</code>
                </div>
                <BilingualText text={p.description} tag="p" className="part-desc" />
                {p.prompt && (
                  <div className="part-prompt">
                    <span className="part-prompt-label">{getCopyKo('promptFragment')}</span>
                    <p className="mono-sm">{p.prompt.ko || p.prompt.en}</p>
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
            <div className="copy-text">
              <p>{entry.prompt?.ko || entry.prompt?.en}</p>
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
            <div className="copy-text">
              <p>{entry.debugPrompt?.ko || entry.debugPrompt?.en}</p>
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
