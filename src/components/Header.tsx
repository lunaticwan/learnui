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
  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  const cmdTitle = langMode === 'ko'
    ? '커맨드 팔레트 열기 (⌘K)'
    : langMode === 'zh'
    ? '打开命令面板 (⌘K)'
    : 'Open Command Palette (⌘K)';

  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Link className="wordmark" to="/">
          <span className="lang-en">Learn UI Name</span>
          <span className="lang-zh">Learn UI Name<span className="wordmark-zh">界面叫啥</span></span>
          <span className="lang-ko">Learn UI Name</span>
        </Link>

        <nav className="site-nav">
          <NavLink to="/" end>
            <span className="lang-en">Dictionary</span>
            <span className="lang-zh nav-zh">词典</span>
            <span className="lang-ko nav-zh">사전</span>
          </NavLink>
          <NavLink to="/styles">
            <span className="lang-en">{getCopy('stylesCrumb')}</span>
            <span className="lang-zh nav-zh">{getCopyZh('stylesCrumb')}</span>
            <span className="lang-ko nav-zh">{getCopyKo('stylesCrumb')}</span>
          </NavLink>
          <NavLink to="/quiz">
            <span className="lang-en">{getCopy('quizCrumb')}</span>
            <span className="lang-zh nav-zh">{getCopyZh('quizCrumb')}</span>
            <span className="lang-ko nav-zh">{getCopyKo('quizCrumb')}</span>
          </NavLink>
          <NavLink to="/guides/appkit-vs-swiftui">
            <span className="lang-en">{getCopy('guideCrumb')}</span>
            <span className="lang-zh nav-zh">{getCopyZh('guideCrumb')}</span>
            <span className="lang-ko nav-zh">{getCopyKo('guideCrumb')}</span>
          </NavLink>
          <NavLink to="/guides/translate">
            <span className="lang-en">Translation</span>
            <span className="lang-zh nav-zh">翻译表</span>
            <span className="lang-ko nav-zh">{getCopyKo('translateTitle')}</span>
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={onOpenCmdPalette}
          className="search-kbd"
          style={{ cursor: 'pointer', padding: '4px 8px', fontSize: '11px' }}
          title={cmdTitle}
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
