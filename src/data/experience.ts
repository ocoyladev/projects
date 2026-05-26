import { Experience } from '../types';

export const experience: Experience[] = [
  {
    role: 'Power Automate / RPA Specialist',
    company: 'SUNAT',
    period: '2020 – Present',
    location: 'Remote',
    bullets: [
      'Engineered DEVOL+, a Python desktop app with 12 modular automation flows integrating 3 internal SUNAT systems, reducing case preparation time from ~3 hours to ~10 minutes (94% reduction).',
      'Built a rule-based document acquisition engine (SQLite + BD fallback logic) replacing a manual error-prone workflow across 100+ concurrent tax cases.',
      'Automated an end-to-end document pipeline: Excel ingestion → multi-system extraction → report generation, cutting assembly time by 80%.',
      'Designed Power Automate Cloud & Desktop Flows integrating the full M365 ecosystem, reducing error rates by 70% and increasing throughput by 40%.',
      'Standardized technical documentation in English, reducing new-hire onboarding time by 50%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'GREENDREAMS',
    period: '2025',
    location: 'Remote',
    bullets: [
      'Architected an e-learning platform with RBAC (student / teacher / admin), automated certificate issuance, and AI-assisted content recommendations via Azure Cognitive Services.',
      'Designed RESTful API modules with NestJS and integrated custom Azure AI connectors, enabling AI-driven features consumed by a React + TypeScript frontend.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Independent Digital Consultant',
    period: '2018 – 2020',
    location: 'Arequipa, Peru',
    bullets: [
      'Developed native Android applications with Java and Android Studio for local business clients.',
      'Implemented technical SEO strategies and content audits, improving organic search visibility for multiple clients.',
    ],
  },
];
