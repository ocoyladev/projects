import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'DEVOL+',
    shortDescription: 'Python desktop automation platform — 94% reduction in case processing time at SUNAT.',
    description:
      "Modular desktop platform for SUNAT's Devolutions team. Orchestrates 12 automation flows and 13 shared function libraries over a SQLite persistence layer. Authenticates against 3 SUNAT internal systems (Intranet, FiscaProcess, Echasqui) via session cookies and BeautifulSoup HTML parsing. Applies business rules to select 5-10 document downloads per case type. Exported as a Windows .exe via PyInstaller. Reduced document preparation cycle from ~3 hours to ~10 minutes — 94% time reduction.",
    technologies: ['Python', 'SQLite', 'requests', 'BeautifulSoup', 'pandas', 'openpyxl', 'win32com', 'PyInstaller', 'Tkinter'],
    images: [],
    launcher: { slug: 'devol-plus', supportsLaunch: false },
  },
  {
    id: 2,
    title: 'SITRAUS',
    shortDescription: 'Production SPA for a union portal with server-side pagination, gallery, and affiliation forms.',
    description:
      'Production-ready SPA for SITRAUS (Sindicato de Trabajadores de SUNAT). 8-route public portal featuring official union announcements with server-side pagination, photo gallery with Lightbox, union affiliation form, law project page, and member login. Implements mobile-first responsive design with an animated hamburger menu. Built with shadcn/ui, TanStack Query, and React Router.',
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn/ui', 'TanStack Query', 'React Router'],
    images: [],
    githubUrl: 'https://github.com/ocoyladev',
    launcher: { slug: 'sitraus', supportsLaunch: true },
  },
  {
    id: 3,
    title: 'NoteApp',
    shortDescription: 'Full-stack authenticated notes platform with full-text search, tags, and archive — deployed on AWS.',
    description:
      'Full-stack application with a NestJS backend organized into 4 independent modules (Auth, Users, Notes, Tags). Security: bcrypt password hashing + email/password auth. Data model: User → OneToMany → Note, Note ↔ ManyToMany ↔ Tag. Full-text, case-insensitive search via TypeORM QueryBuilder. Archive state per note. React + Vite frontend with Dashboard, NoteEditor, and NoteList. Deployed on AWS EC2 + Amazon RDS.',
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'bcrypt', 'React', 'Vite', 'TailwindCSS'],
    images: [
      '/src/img/noteapp-1.png',
      '/src/img/noteapp-2.png',
      '/src/img/noteapp-3.png',
      '/src/img/noteapp-4.png',
    ],
    liveUrl: 'https://note-app-one-gamma.vercel.app/',
    githubUrl: 'https://github.com/ocoyladev/NoteApp',
    launcher: { slug: 'noteapp', supportsLaunch: true },
  },
  {
    id: 4,
    title: 'Relatos de Papel',
    shortDescription: 'Distributed bookstore backend: 4 microservices with Netflix Eureka service discovery.',
    description:
      'Distributed bookstore backend with 4 containerized services: a Netflix Eureka service registry, a Spring Cloud API Gateway with dynamic service discovery, a book catalog microservice (ms-books-catalogue), and a payments microservice (ms-books-payments). Services register at startup with Eureka and route through the gateway without hardcoded URLs. Full environment orchestrated with Docker Compose.',
    technologies: ['Java', 'Spring Boot', 'Netflix Eureka', 'Spring Cloud Gateway', 'Docker Compose'],
    images: [],
    githubUrl: 'https://github.com/ocoyladev',
    launcher: { slug: 'relatos-de-papel', supportsLaunch: true },
  },
  {
    id: 5,
    title: 'Web Scraping Toolkit',
    shortDescription: 'Anti-detection multi-target scraper with session persistence and human-delay simulation.',
    description:
      'Multi-target scraping toolkit built through 10+ iterative refactor cycles. Facebook Group Scraper: Playwright/Chromium with --disable-blink-features=AutomationControlled, cookie-based session persistence (validates c_user, xs, datr critical tokens), human-delay simulation, and comment extraction. AA.com scraper: async Playwright with modular CookieManager (Akamai token tracking, session warm-up, age validation), random mouse movement simulation, and retry logic with progressive backoff.',
    technologies: ['Python', 'Playwright', 'Selenium', 'CookieManager', 'asyncio'],
    images: [],
    launcher: { slug: 'scraping-toolkit', supportsLaunch: false },
  },
];
