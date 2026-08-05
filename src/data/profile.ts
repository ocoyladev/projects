import type { Localized } from '../types';

export const profile: {
  name: string;
  title: Localized;
  subtitle: Localized;
  summary: Localized;
  /** Condensed version rendered on small screens, where the full summary is too long. */
  shortSummary: Localized;
  location: Localized;
  timezone: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  credly: string;
} = {
  name: 'Oscar Coyla',
  title: {
    en: 'Power Platform Developer',
    es: 'Power Platform Developer',
  },
  subtitle: {
    en: 'RPA & Automation Specialist',
    es: 'Especialista en RPA y Automatización',
  },
  summary: {
    en: "Power Platform Developer with 6+ years designing, building, and deploying enterprise low-code solutions, RPA bots, and business process automations for the public sector. Expert across the full Microsoft Power Platform stack — Power Apps (Canvas + Model-Driven), Power Automate (Cloud + Desktop Flows / RPA), Dataverse, and PCF custom components — applying Center of Excellence governance and ALM practices. Led the end-to-end technological transformation of an administrative area, and independently built DEVOL+, a production automation platform now used by ~100 people across 5 operational units that cut the per-case work cycle from ~85 to ~7.5 minutes. When a target system exposes no modern API, I drop down to Python: session-based HTTP, HTML parsing, or UI-level RPA over legacy desktop applications. Hybrid profile — Bachelor of Law plus a Master's in Software Engineering — applied directly to automating regulated processes. Full-stack background with FastAPI, React, TypeScript, and NestJS, and cloud deployments on Azure, AWS, and Google Cloud.",
    es: 'Power Platform Developer con más de 6 años diseñando, construyendo y desplegando soluciones low-code empresariales, bots RPA y automatizaciones de procesos de negocio para el sector público. Experto en todo el stack de Microsoft Power Platform — Power Apps (Canvas y Model-Driven), Power Automate (Cloud y Desktop Flows / RPA), Dataverse y componentes PCF — con prácticas de Centro de Excelencia y ALM. Lideré la transformación tecnológica integral de un área administrativa y construí por iniciativa propia DEVOL+, una plataforma de automatización en producción que hoy usan ~100 personas en 5 unidades operativas y que redujo el ciclo de trabajo por caso de ~85 a ~7,5 minutos. Cuando el sistema de destino no expone una API moderna, bajo a Python: peticiones con sesión, parsing de HTML o RPA a nivel de interfaz sobre aplicaciones de escritorio heredadas. Perfil híbrido — Bachiller en Derecho y Máster en Ingeniería de Software — aplicado directamente a la automatización de procesos regulados. Base full-stack con FastAPI, React, TypeScript y NestJS, y despliegues en Azure, AWS y Google Cloud.',
  },
  shortSummary: {
    en: '6+ years automating business processes end to end for the public sector. Power Platform, RPA, and Python where no API exists.',
    es: 'Más de 6 años automatizando procesos de negocio de extremo a extremo para el sector público. Power Platform, RPA y Python donde no hay API.',
  },
  location: { en: 'Peru', es: 'Perú' },
  timezone: 'UTC-5',
  email: 'oscarcoyladev@gmail.com',
  phone: '+51 906 589 869',
  github: 'https://github.com/ocoyladev',
  linkedin: 'http://www.linkedin.com/in/ocoyladev',
  credly: 'https://www.credly.com/users/oscar-arnold-coyla-urquizo/badges',
};
