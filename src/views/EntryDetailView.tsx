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

  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, 'en');
  const getCopyZh = (key: string) => getLocalizedString(UI_COPY[key] as any, 'zh');

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
      `# ${entry.name?.en || entry.slug} · ${entry.name?.zh || ''}`,
      '',
      `UI reference — https://learnui.qiaomu.ai/${entry.platform}/${entry.slug}/`,
      '',
      `**${entry.tagline?.en || ''}**`,
      entry.tagline?.zh || '',
      '',
      `**Also called / 也叫:** ${(entry.aka?.en || []).join(', ')} / ${(entry.aka?.zh || []).join('、')}`,
      '',
    ];

    if (entry.parts && entry.parts.length > 0) {
      lines.push('## Anatomy — every part, named / 解剖', '');
      entry.parts.forEach((p: any, idx: number) => {
        lines.push(
          `${idx + 1}. **${p.name?.en || ''} · ${p.name?.zh || ''}** (\`${p.api || ''}\`)`,
          `   ${p.description?.en || ''}`,
          `   ${p.description?.zh || ''}`,
          `   Prompt fragment: ${p.prompt?.en || ''}`,
          ''
        );
      });
    }

    lines.push(
      '## Prompt / 提示词',
      '',
      entry.prompt?.en || '',
      '',
      entry.prompt?.zh || '',
      '',
      '## Debug prompt / 调试提示词',
      '',
      entry.debugPrompt?.en || '',
      '',
      entry.debugPrompt?.zh || '',
      '',
      '## In code / 代码里叫什么',
      ''
    );

    (entry.api || []).forEach((a: any) => {
      let line = `- **${a.framework}** \`${a.symbol}\``;
      if (a.note?.en) {
        line += ` — ${a.note.en} / ${a.note.zh || ''}`;
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
        <Link to="/">
          <span className="lang-en">{getCopy('indexCrumb')}</span>
          <span className="lang-zh">{getCopyZh('indexCrumb')}</span>
        </Link>
        <span className="crumb-sep">/</span>
        <Link to={`/?platform=${entry.platform}#dictionary`}>{platLabel}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">
          <span className="lang-en">{entry.name?.en}</span>
          <span className="lang-zh">{entry.name?.zh}</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span className="lang-en">
            {entry.name?.en} {isNew && <span className="tag tag-new">{getCopy('newBadge')}</span>}
          </span>
          <span className="lang-zh entry-title-zh">{entry.name?.zh}</span>
          <span className="tag tag-platform">{entry.platform}</span>
        </h1>
        <BilingualText text={entry.tagline} tag="p" className="entry-tag" />

        <dl className="entry-meta">
          <div className="meta-row">
            <dt>
              {getCopy('alsoCalled')}
              <span className="lang-zh dt-zh">{getCopyZh('alsoCalled')}</span>
            </dt>
            <dd>
              <span className="lang-en">{(entry.aka?.en || []).join(', ')}</span>
              <span className="lang-zh zh-line">{(entry.aka?.zh || []).join('、')}</span>
            </dd>
          </div>

          <div className="meta-row">
            <dt>
              {getCopy('ifYouCalledIt')}
              <span className="lang-zh dt-zh">{getCopyZh('ifYouCalledIt')}</span>
            </dt>
            <dd>
              <ul className="fuzzy-list">
                {(entry.fuzzy?.en || []).map((fEn: string, idx: number) => (
                  <li key={idx}>
                    <span className="lang-en">“{fEn}”</span>
                    <span className="lang-zh zh-line">「{entry.fuzzy?.zh?.[idx] || ''}」</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </header>

      <SpecimenViewer slug={entry.slug} detail />
      <p className="stage-hint lang-zh">标本可交互 —— 点点看。Specimen is live — try it.</p>

      {entry.parts && entry.parts.length > 0 && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('anatomy')}</span>
            <span className="lang-zh">{getCopyZh('anatomy')}</span>
          </h2>
          <ol className="parts">
            {entry.parts.map((p: any, idx: number) => (
              <li key={p.id || idx} className="part">
                <div className="part-head">
                  <span className="part-num">{idx + 1}</span>
                  <span className="part-name">
                    <span className="lang-en">{p.name?.en}</span>
                    <span className="lang-zh part-name-zh">{p.name?.zh}</span>
                  </span>
                  <code className="part-api">{p.api}</code>
                </div>
                <BilingualText text={p.description} tag="p" className="part-desc" />
                {p.prompt && (
                  <div className="part-prompt">
                    <span className="part-prompt-label">
                      <span className="lang-en">{getCopy('promptFragment')}</span>
                      <span className="lang-zh">{getCopyZh('promptFragment')}</span>
                    </span>
                    <p className="lang-en mono-sm">{p.prompt.en}</p>
                    <p className="lang-zh mono-sm">{p.prompt.zh}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {entry.prompt && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('promptSection')}</span>
            <span className="lang-zh">{getCopyZh('promptSection')}</span>
          </h2>
          <div className="copy-block">
            <button
              type="button"
              className={`btn btn-copy ${copiedPrompt ? 'done' : ''}`}
              onClick={() => handleCopy(entry.prompt?.en || '', 'prompt')}
            >
              <span className="lang-en">{copiedPrompt ? getCopy('copied') : getCopy('copy')}</span>
              <span className="lang-zh">{copiedPrompt ? getCopyZh('copied') : getCopyZh('copy')}</span>
            </button>
            <div className="copy-text">
              <p className="lang-en">{entry.prompt?.en}</p>
              <p className="lang-zh zh-copy">{entry.prompt?.zh}</p>
            </div>
          </div>
        </section>
      )}

      {entry.debugPrompt && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('debugSection')}</span>
            <span className="lang-zh">{getCopyZh('debugSection')}</span>
          </h2>
          <div className="copy-block">
            <button
              type="button"
              className={`btn btn-copy ${copiedDebug ? 'done' : ''}`}
              onClick={() => handleCopy(entry.debugPrompt?.en || '', 'debug')}
            >
              <span className="lang-en">{copiedDebug ? getCopy('copied') : getCopy('copy')}</span>
              <span className="lang-zh">{copiedDebug ? getCopyZh('copied') : getCopyZh('copy')}</span>
            </button>
            <div className="copy-text">
              <p className="lang-en">{entry.debugPrompt?.en}</p>
              <p className="lang-zh zh-copy">{entry.debugPrompt?.zh}</p>
            </div>
          </div>
        </section>
      )}

      {entry.api && entry.api.length > 0 && (
        <section className="sect">
          <h2 className="section-title">
            <span className="lang-en">{getCopy('inCode')}</span>
            <span className="lang-zh">{getCopyZh('inCode')}</span>
          </h2>
          <div className="table-scroll">
            <table className="api-table">
              <thead>
                <tr>
                  <th>
                    {getCopy('framework')}
                    <span className="lang-zh th-zh">{getCopyZh('framework')}</span>
                  </th>
                  <th>
                    {getCopy('symbol')}
                    <span className="lang-zh th-zh">{getCopyZh('symbol')}</span>
                  </th>
                  <th>
                    {getCopy('note')}
                    <span className="lang-zh th-zh">{getCopyZh('note')}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {entry.api.map((a: any, idx: number) => (
                  <tr key={idx}>
                    <td className="mono fw">{a.framework}</td>
                    <td className="mono sym">{a.symbol}</td>
                    <td className="note">
                      {a.note && (
                        <>
                          <span className="lang-en">{a.note.en}</span>
                          <span className="lang-zh zh-line">{a.note.zh}</span>
                        </>
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
          <h2 className="section-title">
            <span className="lang-en">{getCopy('seeAlso')}</span>
            <span className="lang-zh">{getCopyZh('seeAlso')}</span>
          </h2>
          <div className="rel-grid">
            {relatedEntries.map((re: any, idx: number) => (
              <Link key={re?.slug || idx} className="rel-card" to={`/${re?.platform}/${re?.slug}`}>
                <span className="rel-name">
                  <span className="lang-en">{re?.name?.en}</span>
                  <span className="lang-zh rel-name-zh">{re?.name?.zh}</span>
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
          ⧉ <span className="lang-en">{copiedMd ? getCopy('copied') : getCopy('copyPage')}</span>
          <span className="lang-zh">{copiedMd ? getCopyZh('copied') : getCopyZh('copyPage')}</span>
        </button>
      </section>
    </main>
  );
};
