export type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type Language = 'en' | 'es';

export type Theme = 'light' | 'dark';