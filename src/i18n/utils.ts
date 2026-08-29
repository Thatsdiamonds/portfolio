import en from './en.json';
import id from './id.json';

export const languages = { en, id } as const;
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return languages[lang];
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'id' : 'en';
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}
