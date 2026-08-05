import { useStore } from '../store/useStore';
import { t } from '../data/translations';
import { pick } from './language';
import type { Localized } from '../types';

/**
 * One hook for everything language-related: the active code, the UI string
 * table, and a bound `pick` so components never repeat `pick(x, language)`.
 */
export function useLang() {
  const language = useStore((s) => s.language);
  return {
    language,
    tr: t[language],
    loc: <T,>(value: Localized<T>): T => pick(value, language),
  };
}
