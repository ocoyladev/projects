import { create } from 'zustand';
import { Language, Theme } from '../types';
import { detectLanguage, isLanguage } from '../lib/language';

const LANG_KEY = 'language';
const THEME_KEY = 'color-scheme';

/** Stored choice wins; otherwise fall back to the browser's language. */
function initialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(LANG_KEY);
  return isLanguage(saved) ? saved : detectLanguage();
}

/** The inline script in index.html already applied this; mirror it here. */
function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
}

interface Store {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<Store>((set) => ({
  language: initialLanguage(),
  theme: initialTheme(),
  setLanguage: (language) => {
    window.localStorage.setItem(LANG_KEY, language);
    set({ language });
  },
  setTheme: (theme) => set({ theme }),
}));
