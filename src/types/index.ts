export type Language = 'en' | 'es';

export type Theme = 'light' | 'dark';

/**
 * Every user-facing string carries both languages. Because `Record<Language, T>`
 * requires each key, TypeScript fails the build when a translation is missing
 * instead of silently falling back to English.
 */
export type Localized<T = string> = Record<Language, T>;

/**
 * How (or whether) a visitor can try a project from this page.
 * - `live`    — `liveUrl` is a running deployment; show an "open" CTA.
 * - `gallery` — no public deployment, but `images` walk through the real UI.
 * - `private` — internal or unhosted; `note` explains why, so a missing demo
 *               reads as a deliberate constraint rather than an omission.
 */
export type Demo =
  | { kind: 'live' }
  | { kind: 'gallery' }
  | { kind: 'private'; note: Localized };

export type Project = {
  id: number;
  /** Brand name — intentionally not localized. */
  title: string;
  shortDescription: Localized;
  description: Localized;
  /** Headline outcome shown on the card. */
  metric: Localized;
  /** Product and library names — intentionally not localized. */
  technologies: string[];
  images: string[];
  demo: Demo;
  liveUrl?: string;
  githubUrl?: string;
};

export type Experience = {
  role: Localized;
  company: string;
  period: Localized;
  location: Localized;
  bullets: Localized<string[]>;
};

export type SkillGroup = {
  category: Localized;
  color: 'orange' | 'blue' | 'purple' | 'green' | 'yellow' | 'red';
  skills: Localized<string[]>;
};

export type Education = {
  type: 'degree' | 'certification';
  name: Localized;
  institution: string;
  year?: Localized;
};

export type SpokenLanguage = {
  name: Localized;
  level: Localized;
};
