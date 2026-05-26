import { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Automation & RPA',
    color: 'orange',
    skills: [
      'Power Automate Cloud Flows',
      'Power Automate Desktop',
      'Custom Connectors',
      'SharePoint',
      'Outlook',
      'Teams',
      'Power Apps',
      'Dataverse',
      'REST & SOAP APIs',
      'Session-based HTTP Auth',
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
    skills: ['React', 'Vite', 'TailwindCSS', 'shadcn/ui', 'TanStack Query', 'React Router', 'Framer Motion'],
  },
  {
    category: 'Backend',
    color: 'green',
    skills: ['NestJS', 'Node.js', 'Spring Boot', 'TypeORM', 'Spring Cloud', 'FastAPI', 'Eureka', 'API Gateway'],
  },
  {
    category: 'Databases',
    color: 'yellow',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'red',
    skills: ['Microsoft Azure', 'AWS (EC2, RDS)', 'Google Cloud', 'Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
];
