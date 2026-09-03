import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

interface HeaderProps {
  onOpenCmdPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCmdPalette }) => {
  const { langMode, setLangMode } = useLanguage();

  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, 'en');
  const getCopyZh = (key: string) => getLocalizedString(UI_COPY[key] as any, 'zh');

  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Link className="wordmark" to="/">
          Learn UI Name
          <span className="wordmark-zh">界面叫啥</span>
        </Link>

        <nav className="site-nav">
          <NavLink to="/" end>
            <span className="lang-en">Dictionary</span>
            <span className="lang-zh nav-zh">词典</span>
          </NavLink>
          <NavLink to="/styles">
            <span className="lang-en">{getCopy('stylesCrumb')}</span>
            <span className="lang-zh nav-zh">{getCopyZh('stylesCrumb')}</span>
          </NavLink>
          <NavLink to="/quiz">
            <span className="lang-en">{getCopy('quizCrumb')}</span>
            <span className="lang-zh nav-zh">{getCopyZh('quizCrumb')}</span>
          </NavLink>
          <NavLink to="/guides/appkit-vs-swiftui">
            <span className="lang-en">{getCopy('guideCrumb')}</span>
            <span className="lang-zh nav-zh">{getCopyZh('guideCrumb')}</span>
          </NavLink>
          <NavLink to="/guides/translate">
            <span className="lang-en">Translation</span>
            <span className="lang-zh nav-zh">翻译表</span>
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={onOpenCmdPalette}
          className="search-kbd"
          style={{ cursor: 'pointer', padding: '4px 8px', fontSize: '11px' }}
          title="Open Command Palette (⌘K)"
        >
          ⌘K
        </button>

        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={`ls-btn ${langMode === 'bilingual' ? 'active' : ''}`}
            onClick={() => setLangMode('bilingual')}
          >
            对照
          </button>
          <button
            type="button"
            className={`ls-btn ${langMode === 'en' ? 'active' : ''}`}
            onClick={() => setLangMode('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`ls-btn ${langMode === 'zh' ? 'active' : ''}`}
            onClick={() => setLangMode('zh')}
          >
            中文
          </button>
          <button
            type="button"
            className={`ls-btn ${langMode === 'ko' ? 'active' : ''}`}
            onClick={() => setLangMode('ko')}
          >
            한국어
          </button>
        </div>
      </div>
    </header>
  );
};
