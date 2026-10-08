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
    id: 6,
    title: 'CEJTracking',
    shortDescription: {
      en: "SaaS that watches Peru's judiciary case portal and emails law firms the moment a case file changes.",
      es: 'SaaS que vigila el portal de expedientes del Poder Judicial y avisa por correo a los estudios de abogados apenas un expediente cambia.',
    },
    metric: {
      en: 'Live SaaS · 794 automated tests',
      es: 'SaaS en producción · 794 tests automatizados',
    },
    description: {
      en: "SaaS for Peruvian law firms, built and operated as the sole developer since September 2026: users register their case files and CEJTracking checks the judiciary's public case portal (CEJ) for them on a schedule, detects new filings, rulings and notifications against a stored baseline, and emails an alert with the document attached or linked — WhatsApp alerts on paid plans. ~44,000 lines across a FastAPI + SQLAlchemy 2 + PostgreSQL service (80+ endpoints), a Next.js 16 + React 19 + Tailwind 4 panel exported as static files and served by the API on the same origin, and browser-automation workers that run on separate nodes and claim jobs from a queue. Includes plans with case limits, Google sign-in, a per-case timeline (new events, acts, documents), document retention on local disk or encrypted S3, an admin panel for users, plans, worker nodes, jobs and mail audit, and pacing and retry controls that keep the service stable when the portal slows down. Infrastructure as code with Terraform on AWS: EC2, SES with SNS/SQS bounce and complaint handling, S3 with server-side encryption and least-privilege IAM. 12 features shipped across 298 commits, backed by 794 automated tests. The panel screenshots use fabricated case data.",
      es: 'SaaS para estudios de abogados del Perú, construido y operado como único desarrollador desde septiembre de 2026: el usuario registra sus expedientes y CEJTracking consulta por él, de forma programada, el portal público de expedientes del Poder Judicial (CEJ); detecta escritos, resoluciones y notificaciones nuevas comparando contra una línea base guardada y envía una alerta por correo con el documento adjunto o enlazado, y por WhatsApp en los planes pagos. ~44.000 líneas repartidas entre un servicio FastAPI + SQLAlchemy 2 + PostgreSQL (más de 80 endpoints), un panel en Next.js 16 + React 19 + Tailwind 4 exportado como archivos estáticos y servido por la API en el mismo origen, y workers de automatización de navegador que corren en nodos separados y toman trabajos de una cola. Incluye planes con límite de expedientes, acceso con Google, una línea de tiempo por expediente (novedades, actuaciones, documentos), retención de documentos en disco local o en S3 cifrado, un panel de administración de usuarios, planes, nodos, trabajos y auditoría de correos, y controles de ritmo y reintentos que mantienen el servicio estable cuando el portal se pone lento. Infraestructura como código con Terraform en AWS: EC2, SES con manejo de rebotes y quejas vía SNS/SQS, y S3 con cifrado en servidor e IAM de mínimo privilegio. 12 funcionalidades entregadas en 298 commits, respaldadas por 794 tests automatizados. Las capturas del panel usan datos de expedientes inventados.',
    },
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Docker Compose', 'Terraform', 'AWS EC2', 'AWS SES', 'AWS S3', 'pytest'],
    images: [
      '/src/img/cejtracking/02-resumen.webp',
      '/src/img/cejtracking/03-expedientes.webp',
      '/src/img/cejtracking/04-detalle.webp',
      '/src/img/cejtracking/01-landing.webp',
      '/src/img/cejtracking/05-como-funciona.webp',
      '/src/img/cejtracking/06-planes.webp',
    ],
    demo: { kind: 'live' },
    liveUrl: 'https://cej.pinpontech.com',
  },
  {
    id: 7,
    title: 'Form Agent',
    stage: 'in-development',
    pending: {
      en: 'The full flow works end to end, but it only runs locally (Docker Compose or the Windows .exe): there is no hosted deployment yet, and the interface is a functional wizard that has not had a visual design pass.',
      es: 'El flujo completo funciona de punta a punta, pero solo corre en local (Docker Compose o el .exe de Windows): aún no hay un despliegue público, y la interfaz es un asistente funcional que todavía no tiene un trabajo de diseño visual.',
    },
    shortDescription: {
      en: 'Containerized RPA that reads any web form, maps it to a CSV, Excel or SQL source, and submits every row.',
      es: 'RPA en contenedores que lee cualquier formulario web, lo mapea contra un CSV, Excel o base SQL y envía cada fila.',
    },
    metric: {
      en: 'Analyze → map → bulk submit · 8 steps',
      es: 'Analiza → mapea → envía en lote · 8 pasos',
    },
    description: {
      en: "RPA tool that turns bulk form filling into a guided, verifiable flow. Paste a form URL and the agent drives a real browser (Playwright or Selenium) to produce a machine-readable descriptor of every field — type, selector, label, options, required flag, file inputs — with an LLM provider chain (Claude Code, Gemini, OpenAI, OpenRouter, with fallback) to resolve ambiguous fields. A second service inspects the data source — CSV, Excel (.xls/.xlsx, with cell-range mode for sheets without a clean header), SQLite, or PostgreSQL/MySQL through a connection string. An 8-step wizard walks through analyze → review → manual test → data source → field mapping (with auto-suggestions, constants and attachment bindings) → single-row test → bulk or per-row run → results, each row in its own browser session with timings and error screenshots, plus a batch_result.json log. Also records a manual session to bootstrap a descriptor, and ships as two Docker Compose services or a standalone Windows .exe. ~14,800 lines and 313 tests; in the screenshots, six rows of fabricated data go through end to end at about 0.85 s each.",
      es: 'Herramienta RPA que convierte el llenado masivo de formularios en un flujo guiado y verificable. Se pega la URL de un formulario y el agente maneja un navegador real (Playwright o Selenium) para producir un descriptor legible por máquina de cada campo —tipo, selector, etiqueta, opciones, obligatoriedad, adjuntos—, con una cadena de proveedores LLM (Claude Code, Gemini, OpenAI y OpenRouter, con respaldo entre ellos) para resolver los campos ambiguos. Un segundo servicio inspecciona la fuente de datos: CSV, Excel (.xls/.xlsx, con modo por rango de celdas para hojas sin cabecera clara), SQLite, o PostgreSQL/MySQL mediante cadena de conexión. Un asistente de 8 pasos recorre análisis → revisión → prueba manual → fuente de datos → mapeo de campos (con sugerencias automáticas, constantes y vinculación de adjuntos) → prueba de una fila → ejecución en lote o por fila → resultados; cada fila corre en su propia sesión de navegador, con tiempos y capturas de los errores, más un registro batch_result.json. Además graba una sesión manual para generar el descriptor, y se distribuye como dos servicios en Docker Compose o como un .exe autónomo de Windows. ~14.800 líneas y 313 tests; en las capturas, seis filas de datos inventados se procesan de punta a punta a unos 0,85 s cada una.',
    },
    technologies: ['Python', 'FastAPI', 'Playwright', 'Selenium', 'pandas', 'SQLAlchemy', 'LLM providers', 'Docker Compose', 'PyInstaller', 'pytest'],
    images: [
      '/src/img/formagent/01-analisis.webp',
      '/src/img/formagent/02-mapeo.webp',
      '/src/img/formagent/03-prueba-fila.webp',
      '/src/img/formagent/04-ejecucion.webp',
      '/src/img/formagent/05-resultados.webp',
    ],
    demo: { kind: 'gallery' },
  },
  {
    id: 8,
    title: 'SaaS Suite',
    stage: 'in-development',
    pending: {
      en: 'The backend, data isolation, billing and tests are done (v0.1.0), but the interface is still unstyled and none of the eleven products has a public deployment yet.',
      es: 'El backend, el aislamiento de datos, la facturación y los tests están terminados (v0.1.0), pero la interfaz todavía no tiene diseño visual y ninguno de los once productos está desplegado públicamente.',
    },
    shortDescription: {
      en: 'Eleven independent multi-tenant SaaS products on one blueprint: PostgreSQL row-level security, billing, bilingual UI.',
      es: 'Once productos SaaS multi-inquilino independientes sobre un mismo blueprint: seguridad a nivel de fila en PostgreSQL, facturación e interfaz bilingüe.',
    },
    metric: {
      en: '11 products · ~2,300 tests',
      es: '11 productos · ~2.300 tests',
    },
    description: {
      en: 'Eleven self-contained SaaS products built from a shared blueprint, each its own repository tagged v0.1.0: expense tracking, invoicing, leave management, inventory, staff attendance, memberships, appointment booking, property management, rent reminders, school management and queue management. Every product isolates tenants at the database layer with PostgreSQL FORCE ROW LEVEL SECURITY behind PgBouncer, and ships a FastAPI + SQLAlchemy + Alembic API, Celery workers and beat on Redis for background and scheduled jobs, S3-compatible object storage (MinIO), transactional email, Stripe billing with plan limits, roles (owner, admin, member, viewer) with invitations, OIDC sign-in, and a bilingual Next.js 16 frontend (ES/EN, localized routes). A single `make up` brings the whole stack up, migrated and seeded. Expense Tracker, the reference product, exposes 67 API operations and is verified against ten acceptance criteria with 348 backend tests, 26 frontend tests and 11 Playwright end-to-end tests, plus a Peruvian Yape payment flow (Mercado Pago, mock mode). Across the suite: ~275,000 lines and ~2,300 test functions. The screenshots show Expense Tracker on seed data.',
      es: 'Once productos SaaS autocontenidos construidos a partir de un blueprint común, cada uno en su propio repositorio con tag v0.1.0: control de gastos, facturación, gestión de vacaciones, inventario, asistencia de personal, membresías, reserva de citas, gestión de inmuebles, recordatorio de alquileres, gestión escolar y gestión de colas. Cada producto aísla a sus inquilinos en la propia base de datos con FORCE ROW LEVEL SECURITY de PostgreSQL detrás de PgBouncer, e incluye una API FastAPI + SQLAlchemy + Alembic, workers y beat de Celery sobre Redis para tareas en segundo plano y programadas, almacenamiento de objetos compatible con S3 (MinIO), correo transaccional, facturación con Stripe y límites por plan, roles (propietario, admin, miembro, lectura) con invitaciones, acceso OIDC y un frontend bilingüe en Next.js 16 (ES/EN, con rutas localizadas). Un solo `make up` levanta todo el stack, migrado y con datos de ejemplo. Expense Tracker, el producto de referencia, expone 67 operaciones de API y está verificado contra diez criterios de aceptación con 348 tests de backend, 26 de frontend y 11 end-to-end con Playwright, además de un flujo de pago peruano con Yape (Mercado Pago, en modo simulado). En toda la suite: ~275.000 líneas y ~2.300 funciones de test. Las capturas muestran Expense Tracker con datos de ejemplo.',
    },
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL RLS', 'PgBouncer', 'Celery', 'Redis', 'MinIO', 'Stripe', 'Next.js 16', 'next-intl', 'Playwright', 'Docker Compose'],
    images: [
      '/src/img/saas/01-gastos.webp',
      '/src/img/saas/02-informes.webp',
      '/src/img/saas/03-facturacion.webp',
      '/src/img/saas/04-equipo.webp',
      '/src/img/saas/05-api.webp',
    ],
    demo: { kind: 'gallery' },
    githubUrl: 'https://github.com/ocoyladev/saas-expense-tracker',
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
    images: [
      '/src/img/sitraus/01-home.png',
      '/src/img/sitraus/02-comunicados.png',
    ],
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
    id: 9,
    title: 'Agencia Web IA',
    stage: 'in-development',
    pending: {
      en: 'Phases 1–4 of 7 work (lead generation, CRM base, site generation, deploy). Still pending: the shared backend for forms, bookings and WhatsApp, the analytics dashboard, and automated outreach.',
      es: 'Funcionan las fases 1 a 4 de 7 (generación de leads, base CRM, generación de sitios y deploy). Faltan el backend compartido para formularios, citas y WhatsApp, el panel de analítica y el contacto automatizado.',
    },
    shortDescription: {
      en: 'Pipeline that finds local businesses, generates a website for each with AI, QA-checks it and publishes it.',
      es: 'Pipeline que encuentra negocios locales, les genera un sitio web con IA, lo valida con QA automático y lo publica.',
    },
    metric: {
      en: 'Lead → AI site → QA → deploy',
      es: 'Lead → sitio IA → QA → deploy',
    },
    description: {
      en: 'Engine for a web agency that sells by showing first: it discovers local businesses through the Google Places API, scores them as leads in PostgreSQL, generates a website for each one from a spec, and publishes it as a sales hook. Generation is spec-driven — a structured spec feeds an Astro template, copy comes from Gemini (or a local Ollama model as a fallback, or fixed template copy for dry runs), and a QA harness must approve the build before it can be deployed to Cloudflare Pages on its own subdomain. Every extraction run reports its Google API consumption per SKU, and a --dry-run mode plans the 84 discovery calls of the active niche (law firms in Arequipa: 7 queries × 12 districts) without spending anything. Phases 1–4 of 7 work end to end (lead generation, CRM base, site generation, deploy); the shared backend for forms and bookings, analytics and WhatsApp outreach are still pending. ~5,300 lines with 161 tests. The screenshots show a site generated for a fictitious demo lead.',
      es: 'Motor para una agencia web que vende mostrando primero: descubre negocios locales con la API de Google Places, los califica como leads en PostgreSQL, genera un sitio web para cada uno a partir de una especificación y lo publica como anzuelo de venta. La generación parte de una especificación estructurada que alimenta una plantilla Astro; el copy lo escribe Gemini (o un modelo local en Ollama como respaldo, o texto de plantilla para pruebas), y un harness de QA debe aprobar el build antes de desplegarlo en Cloudflare Pages con su propio subdominio. Cada corrida de extracción informa su consumo de la API de Google por SKU, y un modo --dry-run planifica las 84 llamadas de descubrimiento del nicho activo (estudios de abogados en Arequipa: 7 consultas × 12 distritos) sin gastar nada. Las fases 1 a 4 de 7 funcionan de punta a punta (generación de leads, base CRM, generación de sitios y deploy); faltan el backend compartido para formularios y citas, la analítica y el contacto por WhatsApp. ~5.300 líneas con 161 tests. Las capturas muestran un sitio generado para un lead de demostración ficticio.',
    },
    technologies: ['Python', 'uv', 'Google Places API', 'PostgreSQL', 'Astro', 'Gemini', 'Ollama', 'Cloudflare Pages', 'FastAPI', 'pytest'],
    images: [
      '/src/img/agencia/01-sitio-hero.webp',
      '/src/img/agencia/02-sitio-servicios.webp',
      '/src/img/agencia/03-sitio-movil.webp',
    ],
    demo: { kind: 'gallery' },
    githubUrl: 'https://github.com/ocoyladev/agent-sites',
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
