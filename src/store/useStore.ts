import { create } from 'zustand';
import { Language, Theme } from '../types';

interface Store {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<Store>((set) => ({
  language: 'en',
  theme: 'light',
  setLanguage: (language) => set({ language }),
  setTheme: (theme) => set({ theme }),
}));