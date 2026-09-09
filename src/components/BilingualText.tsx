import React from 'react';
import { LocalizedString } from '../types/ui';
import { useLanguage } from '../context/LanguageContext';

interface BilingualTextProps {
  text?: LocalizedString;
  tag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3';
  className?: string;
  enClassName?: string;
  koClassName?: string;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  text,
  tag: Tag = 'p',
  className = '',
  enClassName = '',
  koClassName = '',
}) => {
  const { langMode } = useLanguage();

  if (!text) return null;

  const enText = text.en || '';
  const koText = text.ko || '';

  if (langMode === 'en') {
    return <Tag className={`lang-en ${className} ${enClassName}`}>{enText}</Tag>;
  }

  if (langMode === 'ko') {
    return <Tag className={`lang-ko ${className} ${koClassName}`}>{koText || enText}</Tag>;
  }

  return (
    <>
      {enText && <Tag className={`lang-en ${className} ${enClassName}`}>{enText}</Tag>}
      {koText && <Tag className={`lang-ko ${className} ${koClassName}`}>{koText}</Tag>}
    </>
  );
};
