export type Locale = 'en' | 'zh' | 'ko';
export type LangMode = 'bilingual' | 'en' | 'zh' | 'ko';

export interface LocalizedString {
  en?: string;
  zh?: string;
  ko?: string;
  [key: string]: any;
}

export function getLocalizedString(loc: LocalizedString | undefined, locale: Locale): string {
  if (!loc) return '';
  if (locale === 'en') return loc.en || loc.zh || loc.ko || '';
  if (locale === 'zh') return loc.zh || loc.en || loc.ko || '';
  if (locale === 'ko') return loc.ko || loc.en || loc.zh || '';
  return loc.en || loc.zh || loc.ko || '';
}

export interface UIEntry {
  slug: string;
  platform: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  aka?: {
    en?: string[];
    zh?: string[];
    ko?: string[];
    [key: string]: any;
  };
  relatedSlugs?: string[];
  [key: string]: any;
}

export interface StyleMeta {
  order?: number;
  badge?: string;
  [key: string]: any;
}

export interface UIStyle {
  slug: string;
  name: LocalizedString;
  tagline?: LocalizedString;
  scope?: LocalizedString;
  aliases?: {
    en?: string[];
    zh?: string[];
    ko?: string[];
    [key: string]: any;
  };
  meta?: StyleMeta;
  [key: string]: any;
}

export interface UIGuide {
  slug: string;
  title: LocalizedString;
  subtitle?: string;
  lede?: LocalizedString;
  equation?: {
    left: string;
    leftTag: string;
    right: string;
    rightTag: string;
  };
  sections?: Array<{
    title: LocalizedString;
    content: LocalizedString;
    [key: string]: any;
  }>;
  [key: string]: any;
}

export interface TranslateTableItem {
  thing: LocalizedString;
  appkit?: string;
  swiftui?: string;
  [key: string]: any;
}

export interface UICopy {
  [key: string]: LocalizedString;
}
