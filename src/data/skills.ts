import { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Power Platform',
    color: 'orange',
    skills: [
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
  },
  {
    category: 'Automation & RPA',
    color: 'red',
    skills: [
      'Desktop UI automation (pywinauto / pyautogui)',
      'Session-based HTTP automation',
      'HTML parsing (BeautifulSoup)',
      'Playwright / Selenium',
      'REST & SOAP APIs',
      'Document pipelines (pandas, openpyxl, win32com)',
      'PyInstaller packaging',
    ],
  },
  {
    category: 'Languages',
    color: 'blue',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    category: 'Frontend',
    color: 'purple',
    skills: ['React', 'Vite', 'TailwindCSS', 'AG Grid', 'shadcn/ui', 'TanStack Query', 'React Router', 'Framer Motion'],
  },
  {
    category: 'Backend',
    color: 'green',
    skills: ['FastAPI', 'WebSocket', 'Async job orchestration', 'NestJS', 'Node.js', 'Spring Boot', 'TypeORM', 'Spring Cloud', 'API Gateway'],
  },
  {
    category: 'Databases & Testing',
    color: 'yellow',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Oracle', 'Firebase', 'pytest', 'Vitest'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'red',
    skills: ['Microsoft Azure', 'AWS (EC2, RDS)', 'Google Cloud', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
];
