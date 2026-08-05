import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'DEVOL+',
    shortDescription: {
      en: 'Automation platform for a tax-refund team — per-case work cycle cut ~91%, ~100 users across 5 operational units.',
      es: 'Plataforma de automatización para un equipo de devoluciones: el ciclo de trabajo por caso bajó ~91%, con ~100 usuarios en 5 unidades operativas.',
    },
    metric: {
      en: 'Per-case cycle −91% · ~100 users',
      es: 'Ciclo por caso −91% · ~100 usuarios',
    },
    description: {
      en: "Automation platform for SUNAT's Devolutions (tax refund) team, built as the sole developer and on my own initiative, sustained since March 2025. ~72,000 lines of Python: 20 automation flows over 21 shared function libraries, 64 REST endpoints across 16 routers, an async job subsystem streaming progress over WebSocket, and 84 test modules. The integration engine ran headless for nine months before it got an interface; that layer was then rewritten twice — Tkinter CLI, Flet, and finally a local-web architecture, the last migration driven by profiling that showed Flet serialized every table control over WebSocket on each refresh, making real virtualization and per-column filters unreachable. Only the UI layer was replaced; the domain logic stayed untouched. Backend is FastAPI + WebSocket, frontend React 18 + strict TypeScript + Vite + Tailwind + AG Grid, shipped as a single self-contained Windows .exe via PyInstaller inside a chromeless WebView2 window. Integrates five enterprise systems, none with a modern API: three internal institutional platforms via session-authenticated HTTP and HTML parsing, an ITSM platform through a purpose-built client, and a legacy Windows desktop application with no HTTP surface driven by UI-level RPA with an abort hotkey and pre-flight validation. Persistence in SQLite (14 tables) plus an Oracle-backed access-control layer with key-based licensing and a separate Admin application, over a rules engine derived from tax regulation. Cut the per-case lifecycle from ~85 to ~7.5 minutes (~91%) across 100+ concurrent cases; adopted by ~100 people across 5 operational units, by request.",
      es: 'Plataforma de automatización para el equipo de Devoluciones de SUNAT, construida como único desarrollador y por iniciativa propia, sostenida desde marzo de 2025. ~72.000 líneas de Python: 20 flujos de automatización sobre 21 librerías de funciones compartidas, 64 endpoints REST repartidos en 16 routers, un subsistema de trabajos asíncronos que transmite el progreso por WebSocket y 84 módulos de test. El motor de integración funcionó sin interfaz durante nueve meses; esa capa se reescribió después dos veces —CLI en Tkinter, Flet y finalmente una arquitectura web local—, y la última migración la motivó un perfilado que mostró que Flet serializaba cada control de la tabla por WebSocket en cada refresco, lo que hacía inalcanzables la virtualización real y los filtros por columna. Solo se reemplazó la capa de interfaz: la lógica de dominio quedó intacta. El backend es FastAPI + WebSocket y el frontend React 18 + TypeScript estricto + Vite + Tailwind + AG Grid, distribuido como un único .exe autocontenido de Windows mediante PyInstaller dentro de una ventana WebView2 sin cromo. Integra cinco sistemas empresariales, ninguno con API moderna: tres plataformas institucionales internas mediante HTTP con sesión autenticada y parsing de HTML, una plataforma ITSM a través de un cliente hecho a medida, y una aplicación de escritorio Windows heredada sin superficie HTTP, controlada por RPA a nivel de interfaz con tecla de aborto y validación previa. La persistencia usa SQLite (14 tablas) más una capa de control de acceso sobre Oracle con licenciamiento por clave y una aplicación de administración independiente, todo sobre un motor de reglas derivado de la normativa tributaria. Redujo el ciclo de vida por caso de ~85 a ~7,5 minutos (~91%) sobre más de 100 casos concurrentes; lo adoptaron ~100 personas en 5 unidades operativas, a pedido de ellas.',
    },
    technologies: ['Python', 'FastAPI', 'WebSocket', 'React 18', 'TypeScript', 'AG Grid', 'pywebview', 'SQLite', 'Oracle', 'pywinauto', 'pyautogui', 'BeautifulSoup', 'pandas', 'PyInstaller', 'pytest'],
    images: [
      '/src/img/devolplus/01-tabla-casos.webp',
      '/src/img/devolplus/04-rpa-ejecucion.webp',
      '/src/img/devolplus/03-rpa-preflight.webp',
      '/src/img/devolplus/02-acciones-masivas.webp',
      '/src/img/devolplus/05-resultado.webp',
      '/src/img/devolplus/06-cola-descargas.webp',
      '/src/img/devolplus/07-configuracion.webp',
      '/src/img/devolplus/08-acceso.webp',
    ],
    demo: {
      kind: 'private',
      note: {
        en: 'Runs inside a government network against internal systems, so it cannot be hosted publicly. The screenshots are the real interface running on synthetic data.',
        es: 'Se ejecuta dentro de una red institucional contra sistemas internos, así que no puede publicarse. Las capturas son la interfaz real corriendo sobre datos de prueba.',
      },
    },
  },
  {
    id: 2,
    title: 'SITRAUS',
    shortDescription: {
      en: 'Production SPA for a union portal with server-side pagination, gallery, and affiliation forms.',
      es: 'SPA en producción para el portal de un sindicato, con paginación en servidor, galería y formularios de afiliación.',
    },
    metric: {
      en: 'Live · 8-route public portal',
      es: 'En producción · portal público de 8 rutas',
    },
    description: {
      en: 'Production-ready SPA for SITRAUS (Sindicato de Trabajadores de SUNAT). 8-route public portal featuring official union announcements with server-side pagination, photo gallery with Lightbox, union affiliation form, law project page, and member login. Implements mobile-first responsive design with an animated hamburger menu. Built with shadcn/ui, TanStack Query, and React Router.',
      es: 'SPA lista para producción para SITRAUS (Sindicato de Trabajadores de SUNAT). Portal público de 8 rutas con comunicados oficiales del sindicato paginados en servidor, galería de fotos con Lightbox, formulario de afiliación, página del proyecto de ley e inicio de sesión para afiliados. Diseño responsive mobile-first con menú hamburguesa animado. Construido con shadcn/ui, TanStack Query y React Router.',
    },
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn/ui', 'TanStack Query', 'React Router'],
    images: [],
    demo: { kind: 'live' },
    liveUrl: 'https://www.sitraus.org.pe',
  },
  {
    id: 3,
    title: 'NoteApp',
    shortDescription: {
      en: 'Full-stack authenticated notes platform with full-text search, tags, and archive — deployed on AWS.',
      es: 'Plataforma full-stack de notas con autenticación, búsqueda de texto completo, etiquetas y archivado, desplegada en AWS.',
    },
    metric: {
      en: 'Live · AWS EC2 + RDS',
      es: 'En producción · AWS EC2 + RDS',
    },
    description: {
      en: 'Full-stack application with a NestJS backend organized into 4 independent modules (Auth, Users, Notes, Tags). Security: bcrypt password hashing + email/password auth. Data model: User → OneToMany → Note, Note ↔ ManyToMany ↔ Tag. Full-text, case-insensitive search via TypeORM QueryBuilder. Archive state per note. React + Vite frontend with Dashboard, NoteEditor, and NoteList. Deployed on AWS EC2 + Amazon RDS.',
      es: 'Aplicación full-stack con un backend NestJS organizado en 4 módulos independientes (Auth, Users, Notes, Tags). Seguridad: hash de contraseñas con bcrypt y autenticación por email y contraseña. Modelo de datos: User → OneToMany → Note, Note ↔ ManyToMany ↔ Tag. Búsqueda de texto completo sin distinción de mayúsculas mediante QueryBuilder de TypeORM. Estado de archivado por nota. Frontend React + Vite con Dashboard, NoteEditor y NoteList. Desplegado en AWS EC2 + Amazon RDS.',
    },
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'bcrypt', 'React', 'Vite', 'TailwindCSS'],
    images: [
      '/src/img/noteapp-1.png',
      '/src/img/noteapp-2.png',
      '/src/img/noteapp-3.png',
      '/src/img/noteapp-4.png',
    ],
    demo: { kind: 'live' },
    liveUrl: 'https://note-app-one-gamma.vercel.app/',
    githubUrl: 'https://github.com/ocoyladev/NoteApp',
  },
  {
    id: 4,
    title: 'Relatos de Papel',
    shortDescription: {
      en: 'Online bookstore: a React storefront over 4 microservices with Netflix Eureka service discovery.',
      es: 'Librería online: un storefront en React sobre 4 microservicios con descubrimiento de servicios vía Netflix Eureka.',
    },
    metric: {
      en: 'Live · 4 services + storefront',
      es: 'En producción · 4 servicios + storefront',
    },
    description: {
      en: 'Online bookstore built end to end. Backend: 4 containerized services — a Netflix Eureka service registry, a Spring Cloud API Gateway with dynamic service discovery, a book catalog microservice (ms-books-catalogue), and a payments microservice (ms-books-payments). Services register at startup with Eureka and route through the gateway without hardcoded URLs, orchestrated with Docker Compose. Frontend: a React + Vite single-page storefront with a searchable 12-title catalogue, featured selections, per-book detail pages with ratings and physical/digital format choice, a persistent cart drawer with quantity controls, and a 3-step checkout wizard (review → shipping → payment) that computes shipping and 21% VAT against the order total.',
      es: 'Librería online construida de extremo a extremo. Backend: 4 servicios contenedorizados — un registro de servicios Netflix Eureka, un API Gateway de Spring Cloud con descubrimiento dinámico, un microservicio de catálogo de libros (ms-books-catalogue) y un microservicio de pagos (ms-books-payments). Los servicios se registran en Eureka al arrancar y se enrutan a través del gateway sin URLs fijas en el código, todo orquestado con Docker Compose. Frontend: un storefront de página única en React + Vite con catálogo buscable de 12 títulos, selección de destacados, fichas de libro con valoraciones y elección de formato físico o digital, un carrito lateral persistente con control de cantidades, y un checkout en 3 pasos (revisión → envío → pago) que calcula gastos de envío e IVA del 21% sobre el total del pedido.',
    },
    technologies: ['Java', 'Spring Boot', 'Netflix Eureka', 'Spring Cloud Gateway', 'Docker Compose', 'React', 'Vite', 'React Router'],
    images: [
      '/src/img/relatos/01-landing.webp',
      '/src/img/relatos/02-catalogo.webp',
      '/src/img/relatos/03-detalle-libro.webp',
      '/src/img/relatos/04-carrito.webp',
      '/src/img/relatos/05-checkout-revision.webp',
      '/src/img/relatos/06-checkout-envio.webp',
      '/src/img/relatos/07-checkout-pago.webp',
    ],
    demo: { kind: 'live' },
    liveUrl: 'https://relatos-de-papel-self.vercel.app/',
  },
  {
    id: 5,
    title: 'Web Scraping Toolkit',
    shortDescription: {
      en: 'Anti-detection multi-target scraper with session persistence and human-delay simulation.',
      es: 'Scraper multi-objetivo con evasión de detección, sesión persistente y simulación de retardos humanos.',
    },
    metric: {
      en: 'Multi-target · persistent sessions',
      es: 'Multi-objetivo · sesiones persistentes',
    },
    description: {
      en: 'Multi-target scraping toolkit built through 10+ iterative refactor cycles. Facebook Group Scraper: Playwright/Chromium with --disable-blink-features=AutomationControlled, cookie-based session persistence (validates c_user, xs, datr critical tokens), human-delay simulation, and comment extraction. AA.com scraper: async Playwright with modular CookieManager (Akamai token tracking, session warm-up, age validation), random mouse movement simulation, and retry logic with progressive backoff.',
      es: 'Conjunto de herramientas de scraping multi-objetivo construido a lo largo de más de 10 ciclos iterativos de refactorización. Scraper de grupos de Facebook: Playwright/Chromium con --disable-blink-features=AutomationControlled, sesión persistente basada en cookies (valida los tokens críticos c_user, xs y datr), simulación de retardos humanos y extracción de comentarios. Scraper de AA.com: Playwright asíncrono con un CookieManager modular (seguimiento de tokens de Akamai, calentamiento de sesión y validación de antigüedad), simulación de movimientos aleatorios del mouse y reintentos con backoff progresivo.',
    },
    technologies: ['Python', 'Playwright', 'Selenium', 'CookieManager', 'asyncio'],
    images: [],
    demo: {
      kind: 'private',
      note: {
        en: 'Command-line tooling that operates against third-party sites — there is nothing to host, and running it publicly would not be appropriate.',
        es: 'Herramientas de línea de comandos que operan contra sitios de terceros: no hay nada que alojar, y ejecutarlas públicamente no sería apropiado.',
      },
    },
  },
];
