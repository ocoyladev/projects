import type { Language, Localized } from '../types';

const SUPPORTED: readonly Language[] = ['en', 'es'];

/** Reads the active language out of a `Localized<T>` value. */
export function pick<T>(value: Localized<T>, language: Language): T {
  return value[language];
}

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && SUPPORTED.includes(value as Language);
}

/** Language preference on first visit: browser setting, English otherwise. */
export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag?.split('-')[0]?.toLowerCase();
    if (isLanguage(base)) return base;
  }
  return 'en';
}
