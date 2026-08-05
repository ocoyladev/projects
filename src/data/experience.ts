import { Experience } from '../types';

export const experience: Experience[] = [
  {
    role: { en: 'Auditor / Software Developer', es: 'Auditor / Desarrollador de Software' },
    company: 'SUNAT',
    period: { en: '2020 – Present', es: '2020 – Actualidad' },
    location: { en: 'Remote', es: 'Remoto' },
    bullets: {
      en: [
        'Led the end-to-end technological transformation of the area, owning the low-code/RPA roadmap from process discovery through solution architecture, delivery, governance, and organizational adoption.',
        'Built DEVOL+ as the sole developer and on my own initiative, sustained since March 2025: ~72,000 lines of Python across 20 automation flows, 21 shared function libraries, 64 REST endpoints, and 84 test modules.',
        'Cut the per-case work cycle from ~85 to ~7.5 minutes (~91%) across 100+ concurrent cases — information retrieval ~10 min → ~30 sec, evaluation ~45 → ~5 min, file assembly and archival ~30 → ~2 min.',
        'Scaled DEVOL+ from one team to ~100 users across 5 operational units; adoption spread by request, without internal promotion.',
        'Integrated 5 enterprise systems, none exposing a modern API: three internal institutional platforms via session-authenticated HTTP and HTML parsing, an ITSM platform through a purpose-built client, and a legacy Windows desktop application with no HTTP surface driven by UI-level RPA (pywinauto / pyautogui).',
        'Migrated the interface off Flet to a local-web architecture (FastAPI + WebSocket backend, React 18 + strict TypeScript + AG Grid frontend, shipped as a self-contained Windows .exe) — replacing only the UI layer and leaving the domain logic untouched.',
        'Designed and shipped production business applications with Power Apps (Canvas and Model-Driven), modeled Microsoft Dataverse as the primary data platform, and built PCF custom components where standard controls fell short.',
        'Designed and deployed Power Automate Cloud and Desktop Flows orchestrating the Microsoft 365 ecosystem through standard, premium, and custom connectors, reducing error rates by 70% and increasing team throughput by 40%.',
        'Automated the end-to-end correspondence lifecycle — drafting, numbering request, and formatted dispatch — nearly doubling weekly throughput from ~60–70 to up to 130 letters.',
        'Applied Power Platform Center of Excellence (CoE) practices and ALM (solutions, environment strategy, managed deployments) for governed, sustainable low-code delivery.',
        'Designed a standardized onboarding methodology later extended to ~60 people, cutting new-hire induction time by more than 50%.',
      ],
      es: [
        'Lideré la transformación tecnológica integral del área, asumiendo la hoja de ruta de low-code/RPA desde el descubrimiento de procesos hasta la arquitectura de solución, la entrega, la gobernanza y la adopción organizacional.',
        'Construí DEVOL+ como único desarrollador y por iniciativa propia, sostenido desde marzo de 2025: ~72.000 líneas de Python entre 20 flujos de automatización, 21 librerías de funciones compartidas, 64 endpoints REST y 84 módulos de test.',
        'Reduje el ciclo de trabajo por caso de ~85 a ~7,5 minutos (~91%) sobre más de 100 casos concurrentes: obtención de información de ~10 min a ~30 s, evaluación de ~45 a ~5 min, y armado y archivo del expediente de ~30 a ~2 min.',
        'Escalé DEVOL+ de un solo equipo a ~100 usuarios en 5 unidades operativas; la adopción se extendió a pedido de ellas, sin promoción interna.',
        'Integré 5 sistemas empresariales, ninguno con API moderna: tres plataformas institucionales internas mediante HTTP con sesión autenticada y parsing de HTML, una plataforma ITSM a través de un cliente hecho a medida, y una aplicación de escritorio Windows heredada sin superficie HTTP, controlada por RPA a nivel de interfaz (pywinauto / pyautogui).',
        'Migré la interfaz desde Flet a una arquitectura web local (backend FastAPI + WebSocket, frontend React 18 + TypeScript estricto + AG Grid, distribuido como un .exe autocontenido de Windows), reemplazando solo la capa de interfaz y dejando intacta la lógica de dominio.',
        'Diseñé y publiqué aplicaciones de negocio en producción con Power Apps (Canvas y Model-Driven), modelé Microsoft Dataverse como plataforma de datos principal y construí componentes personalizados PCF donde los controles estándar no alcanzaban.',
        'Diseñé y desplegué flujos de Power Automate Cloud y Desktop que orquestan el ecosistema Microsoft 365 mediante conectores estándar, premium y personalizados, reduciendo la tasa de errores un 70% y aumentando la productividad del equipo un 40%.',
        'Automaticé el ciclo completo de la correspondencia —redacción, solicitud de numeración y despacho con formato—, casi duplicando la producción semanal de ~60–70 a hasta 130 cartas.',
        'Apliqué prácticas de Centro de Excelencia (CoE) de Power Platform y ALM (soluciones, estrategia de entornos, despliegues gestionados) para una entrega low-code gobernada y sostenible.',
        'Diseñé una metodología estandarizada de incorporación que luego se extendió a ~60 personas, reduciendo el tiempo de inducción de nuevos ingresos en más de un 50%.',
      ],
    },
  },
  {
    role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    company: 'GREENDREAMS',
    period: { en: '2025 · 3-month engagement', es: '2025 · proyecto de 3 meses' },
    location: { en: 'Remote', es: 'Remoto' },
    bullets: {
      en: [
        'Architected and delivered, as the sole developer, an end-to-end e-learning platform with role-based access control (student / teacher / admin), automated certificate issuance, and AI-assisted content recommendations via Azure Cognitive Services.',
        'Took ownership of both backend and frontend beyond the original role scope, covering solution design, coordination with the UX/UI and AI teams, implementation, and pre-launch testing.',
        'Designed RESTful API modules with NestJS and integrated custom Azure AI connectors, enabling AI-driven features consumed by a React + TypeScript frontend, deployed on Microsoft Azure.',
      ],
      es: [
        'Diseñé y entregué, como único desarrollador, una plataforma de e-learning de extremo a extremo con control de acceso por roles (estudiante / docente / administrador), emisión automática de certificados y recomendaciones de contenido asistidas por IA mediante Azure Cognitive Services.',
        'Asumí el desarrollo de backend y frontend más allá del alcance original del rol, cubriendo el diseño de la solución, la coordinación con los equipos de UX/UI e IA, la implementación y las pruebas previas al lanzamiento.',
        'Diseñé los módulos de la API REST con NestJS e integré conectores personalizados de Azure AI, habilitando funcionalidades basadas en IA consumidas por un frontend React + TypeScript, desplegado en Microsoft Azure.',
      ],
    },
  },
  {
    role: { en: 'Freelance Developer', es: 'Desarrollador Freelance' },
    company: 'Independent Digital Consultant',
    period: { en: '2018 – 2020', es: '2018 – 2020' },
    location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
    bullets: {
      en: [
        'Developed native Android applications with Java and Android Studio for local business clients.',
        'Produced SEO-oriented web content and implemented it on WordPress — keyword research, content structure design, and on-page formatting.',
      ],
      es: [
        'Desarrollé aplicaciones Android nativas con Java y Android Studio para clientes de negocios locales.',
        'Produje contenido web orientado a SEO y lo implementé en WordPress: investigación de palabras clave, diseño de la estructura de contenidos y maquetación on-page.',
      ],
    },
  },
];
