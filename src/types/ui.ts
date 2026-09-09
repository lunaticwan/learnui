export type Locale = 'en' | 'ko';
export type LangMode = 'ko' | 'en' | 'bilingual';

export interface LocalizedString {
  en?: string;
  ko?: string;
  [key: string]: any;
}

export function getLocalizedString(loc: LocalizedString | undefined, locale: Locale): string {
  if (!loc) return '';
  if (locale === 'ko') return loc.ko || loc.en || '';
  if (locale === 'en') return loc.en || loc.ko || '';
  return loc.ko || loc.en || '';
}

export interface UIEntry {
  slug: string;
  platform: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  aka?: {
    en?: string[];
    ko?: string[];
    [key: string]: any;
  };
  fuzzy?: {
    en?: string[];
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
    ko?: string[];
    [key: string]: any;
  };
  meta?: StyleMeta;
  [key: string]: any;
}

export interface TranslateTableItem {
  nameEn: string;
  nameKo: string;
  ios: string;
  android: string;
  slug?: string;
}

export interface UICopy {
  [key: string]: LocalizedString;
}
