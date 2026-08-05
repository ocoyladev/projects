import { Education, SpokenLanguage } from '../types';

export const education: Education[] = [
  {
    type: 'degree',
    name: {
      en: "Master's in Software Engineering & Computer Systems",
      es: 'Máster en Ingeniería de Software y Sistemas Informáticos',
    },
    institution: 'Universidad Internacional de La Rioja (UNIR)',
    year: { en: 'Mar 2025 – Jan 2026', es: 'Mar 2025 – Ene 2026' },
  },
  {
    type: 'degree',
    name: { en: 'Certified Tech Developer', es: 'Certified Tech Developer' },
    institution: 'Digital House',
    year: { en: '2023 – 2024', es: '2023 – 2024' },
  },
  {
    type: 'degree',
    name: { en: 'Bachelor of Law', es: 'Bachiller en Derecho' },
    institution: 'Universidad Nacional de San Agustín',
    year: { en: '2018', es: '2018' },
  },
  {
    type: 'certification',
    name: {
      en: 'Power Platform Fundamentals (PL-900)',
      es: 'Power Platform Fundamentals (PL-900)',
    },
    institution: 'Microsoft',
    year: { en: 'Aug 2026', es: 'Ago 2026' },
  },
  {
    type: 'certification',
    name: {
      en: 'Power Platform Developer Associate (PL-400)',
      es: 'Power Platform Developer Associate (PL-400)',
    },
    institution: 'Microsoft',
    year: { en: 'In progress', es: 'En curso' },
  },
  {
    type: 'certification',
    name: { en: 'Associate Cloud Engineer', es: 'Associate Cloud Engineer' },
    institution: 'Google Cloud',
    year: { en: 'Feb 2026', es: 'Feb 2026' },
  },
  {
    type: 'certification',
    name: { en: 'AWS Certified Cloud Practitioner', es: 'AWS Certified Cloud Practitioner' },
    institution: 'Amazon Web Services',
    year: { en: 'Nov 2025', es: 'Nov 2025' },
  },
  {
    type: 'certification',
    name: { en: 'Azure Fundamentals (AZ-900)', es: 'Azure Fundamentals (AZ-900)' },
    institution: 'Microsoft',
    year: { en: 'Apr 2025', es: 'Abr 2025' },
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: {
      en: 'Advanced (B2+) — meetings, technical documentation, international stakeholders',
      es: 'Avanzado (B2+): reuniones, documentación técnica e interlocutores internacionales',
    },
  },
];
