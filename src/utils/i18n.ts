import type { Lang } from '../data/content';

const STORAGE_KEY = 'nslc-lang';

export function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ms';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'ms') {
    return stored;
  }

  // Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ms') || browserLang.startsWith('id')) {
    return 'ms';
  }

  return 'ms'; // Default to Malay
}

export function setLang(lang: Lang): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, lang);
}

export function toggleLang(current: Lang): Lang {
  const newLang = current === 'ms' ? 'en' : 'ms';
  setLang(newLang);
  return newLang;
}
