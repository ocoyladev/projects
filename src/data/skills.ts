import { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: { en: 'Power Platform', es: 'Power Platform' },
    color: 'orange',
    skills: {
      en: [
        'Power Automate Cloud Flows',
        'Power Automate Desktop (RPA)',
        'Power Apps (Canvas & Model-Driven)',
        'Dataverse',
        'PCF Custom Components',
        'Custom Connectors',
        'Center of Excellence (CoE)',
        'ALM & Solutions',
        'SharePoint',
        'Outlook',
        'Teams',
      ],
      es: [
        'Power Automate Cloud Flows',
        'Power Automate Desktop (RPA)',
        'Power Apps (Canvas y Model-Driven)',
        'Dataverse',
        'Componentes personalizados PCF',
        'Conectores personalizados',
        'Centro de Excelencia (CoE)',
        'ALM y soluciones',
        'SharePoint',
        'Outlook',
        'Teams',
      ],
    },
  },
  {
    category: { en: 'Automation & RPA', es: 'Automatización y RPA' },
    color: 'red',
    skills: {
      en: [
        'Desktop UI automation (pywinauto / pyautogui)',
        'Session-based HTTP automation',
        'HTML parsing (BeautifulSoup)',
        'Playwright / Selenium',
        'REST & SOAP APIs',
        'Document pipelines (pandas, openpyxl, win32com)',
        'PyInstaller packaging',
      ],
      es: [
        'Automatización de interfaz de escritorio (pywinauto / pyautogui)',
        'Automatización HTTP con sesión',
        'Parsing de HTML (BeautifulSoup)',
        'Playwright / Selenium',
        'APIs REST y SOAP',
        'Pipelines documentales (pandas, openpyxl, win32com)',
        'Empaquetado con PyInstaller',
      ],
    },
  },
  {
    category: { en: 'Languages', es: 'Lenguajes' },
    color: 'blue',
    skills: {
      en: ['Python', 'TypeScript', 'JavaScript', 'Java'],
      es: ['Python', 'TypeScript', 'JavaScript', 'Java'],
    },
  },
  {
    category: { en: 'Frontend', es: 'Frontend' },
    color: 'purple',
    skills: {
      en: ['React', 'Vite', 'TailwindCSS', 'AG Grid', 'shadcn/ui', 'TanStack Query', 'React Router', 'Framer Motion'],
      es: ['React', 'Vite', 'TailwindCSS', 'AG Grid', 'shadcn/ui', 'TanStack Query', 'React Router', 'Framer Motion'],
    },
  },
  {
    category: { en: 'Backend', es: 'Backend' },
    color: 'green',
    skills: {
      en: ['FastAPI', 'WebSocket', 'Async job orchestration', 'NestJS', 'Node.js', 'Spring Boot', 'TypeORM', 'Spring Cloud', 'API Gateway'],
      es: ['FastAPI', 'WebSocket', 'Orquestación de trabajos asíncronos', 'NestJS', 'Node.js', 'Spring Boot', 'TypeORM', 'Spring Cloud', 'API Gateway'],
    },
  },
  {
    category: { en: 'Databases & Testing', es: 'Bases de datos y testing' },
    color: 'yellow',
    skills: {
      en: ['PostgreSQL', 'MySQL', 'SQLite', 'Oracle', 'Firebase', 'pytest', 'Vitest'],
      es: ['PostgreSQL', 'MySQL', 'SQLite', 'Oracle', 'Firebase', 'pytest', 'Vitest'],
    },
  },
  {
    category: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    color: 'red',
    skills: {
      en: ['Microsoft Azure', 'AWS (EC2, RDS)', 'Google Cloud', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'CI/CD'],
      es: ['Microsoft Azure', 'AWS (EC2, RDS)', 'Google Cloud', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'CI/CD'],
    },
  },
];
