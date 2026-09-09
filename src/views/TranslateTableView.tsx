import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATE_TABLE } from '../data/translateTable';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

export const TranslateTableView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCopyKo = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'ko');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  const filteredRows = useMemo(() => {
    if (!searchQuery.trim()) return TRANSLATE_TABLE;
    const q = searchQuery.toLowerCase();
    return TRANSLATE_TABLE.filter(
      (row) =>
        row.nameEn.toLowerCase().includes(q) ||
        row.nameKo.toLowerCase().includes(q) ||
        row.ios.toLowerCase().includes(q) ||
        row.android.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <main className="wrap entry">
      <nav className="crumbs">
        <Link to="/">{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">{getCopyKo('translateTitle')}</span>
      </nav>

      <header className="entry-head">
        <h1 className="entry-title">
          <span>{getCopyKo('translateTitle')}</span>
        </h1>
        <p className="entry-tag">
          <span>{getCopyKo('translateLede')}</span>
        </p>

        <div className="table-search" style={{ marginTop: '20px' }}>
          <div className="search-box" style={{ maxWidth: '480px' }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="table-search"
              type="search"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="UI 명칭, 한국어, iOS, 안드로이드 명칭으로 검색..."
              aria-label="Search translation table"
            />
            <kbd className="search-kbd">/</kbd>
          </div>
          <p className="count-note" style={{ marginTop: '8px', fontSize: '12.5px', color: 'var(--gray-500)' }}>
            <span>총 {TRANSLATE_TABLE.length}개 중 {filteredRows.length}개 항목 표시</span>
          </p>
        </div>
      </header>

      <div className="table-scroll">
        <table className="api-table translate-table">
          <thead>
            <tr>
              <th style={{ width: '28%' }}>정식 UI 명칭 (영문, 모던 웹 기준)</th>
              <th style={{ width: '22%' }}>한국어</th>
              <th style={{ width: '25%' }}>아이폰</th>
              <th style={{ width: '25%' }}>안드로이드</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr key={idx}>
                <td className="fw">
                  {row.slug ? (
                    <Link to={`/web/${row.slug}`} className="thing-link">
                      {row.nameEn}
                    </Link>
                  ) : (
                    <span>{row.nameEn}</span>
                  )}
                </td>
                <td className="fw-500">{row.nameKo}</td>
                <td className="mono sym">{row.ios}</td>
                <td className="mono sym">{row.android}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
