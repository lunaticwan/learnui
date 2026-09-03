import React, { createContext, useContext, useState, useEffect } from 'react';
import { LangMode, Locale, LocalizedString, getLocalizedString } from '../types/ui';

interface LanguageContextType {
  langMode: LangMode;
  setLangMode: (mode: LangMode) => void;
  targetLang: Locale;
  locale: Locale;
  t: (loc?: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  langMode: 'bilingual',
  setLangMode: () => {},
  targetLang: 'zh',
  locale: 'en',
  t: (loc) => getLocalizedString(loc, 'en'),
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [langMode, setLangModeState] = useState<LangMode>(() => {
    try {
      const stored = localStorage.getItem('ntui-lang-mode') as LangMode;
      if (stored && ['bilingual', 'en', 'zh', 'ko'].includes(stored)) {
        return stored;
      }
      const langs = navigator.languages || [navigator.language || ''];
      for (const l of langs) {
        if (/^zh/i.test(l)) return 'zh';
        if (/^ko/i.test(l)) return 'ko';
      }
    } catch (e) {
      // ignore
    }
    return 'bilingual';
  });

  const [targetLang, setTargetLang] = useState<Locale>('zh');

  useEffect(() => {
    try {
      localStorage.setItem('ntui-lang-mode', langMode);
    } catch (e) {
      // ignore
    }
    document.documentElement.setAttribute('data-lang-mode', langMode);
    if (langMode === 'zh') setTargetLang('zh');
    if (langMode === 'ko') setTargetLang('ko');
  }, [langMode]);

  const setLangMode = (mode: LangMode) => {
    setLangModeState(mode);
  };

  const locale: Locale = langMode === 'zh' ? 'zh' : langMode === 'ko' ? 'ko' : 'en';

  const t = (loc?: LocalizedString): string => {
    if (!loc) return '';
    if (langMode === 'en') return loc.en || '';
    if (langMode === 'zh') return loc.zh || loc.en || '';
    if (langMode === 'ko') return loc.ko || loc.en || '';
    return loc.en || '';
  };

  return (
    <LanguageContext.Provider value={{ langMode, setLangMode, targetLang, locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
