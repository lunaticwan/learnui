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
        <Link to="/" onClick={() => console.log('[Action] Clicked home link from translate table')}>{getCopyKo('indexCrumb')}</Link>
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

        <div className="table-search" style={{ marginTop: '24px' }}>
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
              onChange={(e) => {
                console.log(`[Input] Translate table search: "${e.target.value}"`);
                setSearchQuery(e.target.value);
              }}
              placeholder="UI 명칭, 한국어, iOS, 안드로이드 명칭 검색..."
              aria-label="Search translation table"
            />
            <kbd className="search-kbd">/</kbd>
          </div>
          <p className="count-note" style={{ marginTop: '10px', fontSize: '13px', color: 'var(--gray-500)' }}>
            <span>총 {TRANSLATE_TABLE.length}개 중 {filteredRows.length}개 항목 표시</span>
          </p>
        </div>
      </header>

      <div className="translate-grid-wrap">
        <div className="translate-grid-header">
          <div className="col-head col-en">
            <span className="col-badge badge-web">Web / Modern UI</span>
            <span>정식 UI 명칭 (English)</span>
          </div>
          <div className="col-head col-ko">
            <span className="col-badge badge-ko">Korean</span>
            <span>한국어 표준 명칭</span>
          </div>
          <div className="col-head col-ios">
            <span className="col-badge badge-ios">iOS / iPhone</span>
            <span>아이폰 표준</span>
          </div>
          <div className="col-head col-android">
            <span className="col-badge badge-android">Android</span>
            <span>안드로이드 표준</span>
          </div>
        </div>

        <div className="translate-grid-body">
          {filteredRows.map((row, idx) => (
            <div key={idx} className="translate-grid-row">
              <div className="col-cell col-en">
                {row.slug ? (
                  <Link
                    to={`/web/${row.slug}`}
                    className="thing-link"
                    onClick={() => console.log(`[Action] Clicked translate row link -> /web/${row.slug}`)}
                  >
                    {row.nameEn}
                    <span className="link-arrow">↗</span>
                  </Link>
                ) : (
                  <span className="name-en-text">{row.nameEn}</span>
                )}
              </div>
              <div className="col-cell col-ko">
                <span className="name-ko-text">{row.nameKo}</span>
              </div>
              <div className="col-cell col-ios">
                <span className="platform-tag ios-tag">
                  <span className="platform-label">iOS</span>
                  <code>{row.ios}</code>
                </span>
              </div>
              <div className="col-cell col-android">
                <span className="platform-tag android-tag">
                  <span className="platform-label">Android</span>
                  <code>{row.android}</code>
                </span>
              </div>
            </div>
          ))}

          {filteredRows.length === 0 && (
            <div className="translate-no-result">
              <p>검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
