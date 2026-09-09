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
  langMode: 'ko',
  setLangMode: () => {},
  targetLang: 'ko',
  locale: 'ko',
  t: (loc) => getLocalizedString(loc, 'ko'),
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [langMode, setLangModeState] = useState<LangMode>(() => {
    try {
      const stored = localStorage.getItem('ntui-lang-mode') as LangMode;
      if (stored && ['ko', 'en', 'bilingual'].includes(stored)) {
        return stored;
      }
    } catch (e) {
      // ignore
    }
    return 'ko';
  });

  const [targetLang] = useState<Locale>('ko');

  useEffect(() => {
    try {
      localStorage.setItem('ntui-lang-mode', langMode);
    } catch (e) {
      // ignore
    }
    document.documentElement.setAttribute('data-lang-mode', langMode);
  }, [langMode]);

  const setLangMode = (mode: LangMode) => {
    setLangModeState(mode);
  };

  const locale: Locale = langMode === 'en' ? 'en' : 'ko';

  const t = (loc?: LocalizedString): string => {
    if (!loc) return '';
    if (langMode === 'en') return loc.en || loc.ko || '';
    return loc.ko || loc.en || '';
  };

  return (
    <LanguageContext.Provider value={{ langMode, setLangMode, targetLang, locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
