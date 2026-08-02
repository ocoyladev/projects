import { Experience } from '../types';

export const experience: Experience[] = [
  {
    role: 'Auditor / Software Developer',
    company: 'SUNAT',
    period: '2020 – Present',
    location: 'Remote',
    bullets: [
      'Led the end-to-end technological transformation of the area, owning the low-code/RPA roadmap from process discovery through solution architecture, delivery, governance, and organizational adoption.',
      'Built DEVOL+ as the sole developer and on my own initiative, sustained since March 2025: ~72,000 lines of Python across 20 automation flows, 21 shared function libraries, 64 REST endpoints, and 84 test modules.',
      'Cut the per-case work cycle from ~85 to ~7.5 minutes (~91%) across 100+ concurrent cases — information retrieval ~10 min → ~30 sec, evaluation ~45 → ~5 min, file assembly and archival ~30 → ~2 min.',
      'Scaled DEVOL+ from one team to ~100 users across 5 operational units; adoption spread by request, without internal promotion.',
      'Integrated 5 enterprise systems, none exposing a modern API: three internal institutional platforms via session-authenticated HTTP and HTML parsing, an ITSM platform through a purpose-built client, and a legacy Windows desktop application with no HTTP surface driven by UI-level RPA (pywinauto / pyautogui).',
      "Migrated the interface off Flet to a local-web architecture (FastAPI + WebSocket backend, React 18 + strict TypeScript + AG Grid frontend, shipped as a self-contained Windows .exe) — replacing only the UI layer and leaving the domain logic untouched.",
      'Designed and deployed Power Automate Cloud and Desktop Flows orchestrating the Microsoft 365 ecosystem through standard, premium, and custom connectors, reducing error rates by 70% and increasing team throughput by 40%.',
      'Automated the end-to-end correspondence lifecycle — drafting, numbering request, and formatted dispatch — nearly doubling weekly throughput from ~60–70 to up to 130 letters.',
      'Designed a standardized onboarding methodology later extended to ~60 people, cutting new-hire induction time by more than 50%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'GREENDREAMS',
    period: '2025',
    location: 'Remote',
    bullets: [
      'Architected and delivered, as the sole developer, an end-to-end e-learning platform with role-based access control (student / teacher / admin), automated certificate issuance, and AI-assisted content recommendations via Azure Cognitive Services.',
      'Designed RESTful API modules with NestJS and integrated custom Azure AI connectors, enabling AI-driven features consumed by a React + TypeScript frontend, deployed on Microsoft Azure.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Independent Digital Consultant',
    period: '2018 – 2020',
    location: 'Arequipa, Peru',
    bullets: [
      'Developed native Android applications with Java and Android Studio for local business clients.',
      'Produced SEO-oriented web content and implemented it on WordPress — keyword research, content structure design, and on-page formatting.',
    ],
  },
];
