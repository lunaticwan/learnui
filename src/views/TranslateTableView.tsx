import React from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATE_TABLE } from '../data/translateTable';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

export const TranslateTableView: React.FC = () => {
  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, 'en');
  const getCopyZh = (key: string) => getLocalizedString(UI_COPY[key] as any, 'zh');
  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

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
          <span className="lang-en">{getCopy('translateTitle')}</span>
          <span className="lang-zh">{getCopyZh('translateTitle')}</span>
          <span className="lang-ko">{getCopyKo('translateTitle')}</span>
        </span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span className="lang-en">{getCopy('translateTitle')}</span>
          <span className="lang-zh entry-title-zh">{getCopyZh('translateTitle')}</span>
          <span className="lang-ko entry-title-zh">{getCopyKo('translateTitle')}</span>
        </h1>
        <p className="entry-tag">
          <span className="lang-en">{getCopy('translateLede')}</span>
          <span className="lang-zh">{getCopyZh('translateLede')}</span>
          <span className="lang-ko">{getCopyKo('translateLede')}</span>
        </p>
      </header>

      <div className="table-scroll">
        <table className="api-table translate-table">
          <thead>
            <tr>
              <th>
                <span className="lang-en">{getCopy('thingCol')} (EN)</span>
                <span className="lang-zh th-zh">{getCopyZh('thingCol')}</span>
                <span className="lang-ko th-zh">{getCopyKo('thingCol')}</span>
              </th>
              <th>
                <span className="lang-en">Chinese (ZH)</span>
                <span className="lang-zh th-zh">中文 (ZH)</span>
                <span className="lang-ko th-zh">중국어 (ZH)</span>
              </th>
              <th>
                <span className="lang-en">AppKit Symbol</span>
                <span className="lang-zh th-zh">AppKit 符号</span>
                <span className="lang-ko th-zh">AppKit Symbol</span>
              </th>
              <th>
                <span className="lang-en">SwiftUI Symbol</span>
                <span className="lang-zh th-zh">SwiftUI 符号</span>
                <span className="lang-ko th-zh">SwiftUI Symbol</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {TRANSLATE_TABLE.map((row, idx) => (
              <tr key={idx}>
                <td className="fw">
                  <span className="lang-en">{row.thing?.en || '-'}</span>
                  <span className="lang-zh">{row.thing?.zh || row.thing?.en || '-'}</span>
                  <span className="lang-ko">{row.thing?.ko || row.thing?.en || '-'}</span>
                </td>
                <td className="note">{row.thing?.zh || '-'}</td>
                <td className="mono sym">{row.appkit || '-'}</td>
                <td className="mono sym">{row.swiftui || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
