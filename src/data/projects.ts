import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'DEVOL+',
    shortDescription: 'Automation platform for a tax-refund team — per-case work cycle cut ~91%, ~100 users across 5 operational units.',
    description:
      "Automation platform for SUNAT's Devolutions (tax refund) team, built as the sole developer and on my own initiative, sustained since March 2025. ~72,000 lines of Python: 20 automation flows over 21 shared function libraries, 64 REST endpoints across 16 routers, an async job subsystem streaming progress over WebSocket, and 84 test modules. The integration engine ran headless for nine months before it got an interface; that layer was then rewritten twice — Tkinter CLI, Flet, and finally a local-web architecture, the last migration driven by profiling that showed Flet serialized every table control over WebSocket on each refresh, making real virtualization and per-column filters unreachable. Only the UI layer was replaced; the domain logic stayed untouched. Backend is FastAPI + WebSocket, frontend React 18 + strict TypeScript + Vite + Tailwind + AG Grid, shipped as a single self-contained Windows .exe via PyInstaller inside a chromeless WebView2 window. Integrates five enterprise systems, none with a modern API: three internal institutional platforms via session-authenticated HTTP and HTML parsing, an ITSM platform through a purpose-built client, and a legacy Windows desktop application with no HTTP surface driven by UI-level RPA with an abort hotkey and pre-flight validation. Persistence in SQLite (14 tables) plus an Oracle-backed access-control layer with key-based licensing and a separate Admin application, over a rules engine derived from tax regulation. Cut the per-case lifecycle from ~85 to ~7.5 minutes (~91%) across 100+ concurrent cases; adopted by ~100 people across 5 operational units, by request.",
    technologies: ['Python', 'FastAPI', 'WebSocket', 'React 18', 'TypeScript', 'AG Grid', 'pywebview', 'SQLite', 'Oracle', 'pywinauto', 'pyautogui', 'BeautifulSoup', 'pandas', 'PyInstaller', 'pytest'],
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
