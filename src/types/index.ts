export type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  launcher?: LauncherConfig;
};

export type LauncherConfig = {
  slug: string;
  supportsLaunch: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export type SkillGroup = {
  category: string;
  color: 'orange' | 'blue' | 'purple' | 'green' | 'yellow' | 'red';
  skills: string[];
};

export type Education = {
  type: 'degree' | 'certification';
  name: string;
  institution: string;
  year?: string;
};

export type Language = 'en' | 'es';

export type Theme = 'light' | 'dark';
