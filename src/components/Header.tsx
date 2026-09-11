import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

interface HeaderProps {
  onOpenCmdPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCmdPalette }) => {
  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Link className="wordmark" to="/" onClick={() => console.log('[Header] Clicked brand wordmark -> /')}>
          <span className="brand-highlight">iM뱅크</span> <span>Learn UI</span>
          <span className="wordmark-sub">UI 비주얼 사전</span>
        </Link>

        <nav className="site-nav">
          <NavLink to="/" end onClick={() => console.log('[Header] Clicked NavLink -> 사전 (/)')}>
            <span>사전</span>
          </NavLink>
          <NavLink to="/styles" onClick={() => console.log('[Header] Clicked NavLink -> 스타일 (/styles)')}>
            <span>{getCopyKo('stylesCrumb')}</span>
          </NavLink>
          <NavLink to="/translate" onClick={() => console.log('[Header] Clicked NavLink -> 번역표 (/translate)')}>
            <span>{getCopyKo('translateTitle')}</span>
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => {
            console.log('[Header] Clicked Command Palette button (⌘K)');
            onOpenCmdPalette();
          }}
          className="search-kbd"
          style={{ cursor: 'pointer', padding: '4px 8px', fontSize: '11px' }}
          title="커맨드 팔레트 열기 (⌘K)"
        >
          ⌘K
        </button>
      </div>
    </header>
  );
};
