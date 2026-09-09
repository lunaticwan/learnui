import React from 'react';
import { LocalizedString } from '../types/ui';
import { useLanguage } from '../context/LanguageContext';

interface BilingualTextProps {
  text?: LocalizedString;
  tag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3';
  className?: string;
  enClassName?: string;
  koClassName?: string;
  style?: React.CSSProperties;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  text,
  tag: Tag = 'p',
  className = '',
  enClassName = '',
  koClassName = '',
  style,
}) => {
  const { langMode } = useLanguage();

  if (!text) return null;

  const enText = text.en || '';
  const koText = text.ko || '';

  if (langMode === 'en') {
    return <Tag className={`lang-en ${className} ${enClassName}`} style={style}>{enText}</Tag>;
  }

  if (langMode === 'ko') {
    return <Tag className={`lang-ko ${className} ${koClassName}`} style={style}>{koText || enText}</Tag>;
  }

  return (
    <>
      {enText && <Tag className={`lang-en ${className} ${enClassName}`} style={style}>{enText}</Tag>}
      {koText && <Tag className={`lang-ko ${className} ${koClassName}`} style={style}>{koText}</Tag>}
    </>
  );
};
