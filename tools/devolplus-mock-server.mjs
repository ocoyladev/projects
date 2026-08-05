// Mock backend for DEVOL+ screenshot capture.
// Speaks the same HTTP + WebSocket contract as the FastAPI backend so the real
// frontend (vite dev on :5173, proxying /api and /ws here) renders untouched.
// Nothing from script_sunat/ is modified.

import http from 'node:http';
import { WebSocketServer } from 'ws';

const PORT = 8000;

// ---------------------------------------------------------------- fake data

// Today is fixed by the capture run; vencimiento colours key off it:
//   past -> grey, today -> red, tomorrow -> orange, later -> no fill.
const HOY = new Date();
const dd = (d) =>
  `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
const shift = (n) => {
  const d = new Date(HOY);
  d.setDate(d.getDate() + n);
  return dd(d);
};

const COLUMNS = [
  'DESCARGAS',
  'of_devolucion',
  'num_doc',
  'num_ruc',
  'nombre',
  'per_doc',
  'cod_tip_sol',
  'cod_for',
  'ind_for_dev',
  'CalcVctoInd',
  'fec_Fallecido',
  'carta',
  'num_ri',
  'fec_ri',
  'resultado',
  'NIDI',
  'num_dev',
  'obs_devol',
  'exp_echasqui',
];

const CASOS = [
  ['0721-2026-001', '20100000001', 'COMERCIAL DEMO S.A.C.', '2025-13', 'AUTORIZADO TOTAL', shift(-6), 'Abono en cuenta', 4],
  ['0721-2026-002', '20100000002', 'INVERSIONES EJEMPLO E.I.R.L.', '2025-13', 'CARTA ENVIADA', shift(-3), 'Abono en cuenta', 3],
  ['0721-2026-003', '10450000003', 'PEREZ DEMO, JUAN CARLOS', '2025-13', '', shift(0), 'Cheque', 2],
  ['0721-2026-004', '20100000004', 'TRANSPORTES MUESTRA S.A.', '2025-13', '', shift(0), 'Abono en cuenta', 5],
  ['0721-2026-005', '20100000005', 'AGROINDUSTRIAS PRUEBA S.A.C.', '2025-13', 'ITOP', shift(1), 'OPF', 1],
  ['0721-2026-006', '10450000006', 'QUISPE DEMO, MARIA ELENA', '2025-13', '', shift(1), 'Abono en cuenta', 3],
  ['0721-2026-007', '20100000007', 'CONSTRUCTORA SANDBOX S.A.C.', '2025-13', 'AUTORIZADO PARCIAL', shift(4), 'Abono en cuenta', 6],
  ['0721-2026-008', '20100000008', 'SERVICIOS FICTICIOS S.R.L.', '2025-13', 'DENEGADO', shift(5), 'Abono en cuenta', 4],
  ['0721-2026-009', '10450000009', 'RAMIREZ DEMO, LUIS ALBERTO', '2025-13', '', shift(6), 'Cheque', 2],
  ['0721-2026-010', '20100000010', 'TEXTILES MAQUETA S.A.', '2025-13', 'MIGRACIONES', shift(7), 'Abono en cuenta', 5],
  ['0721-2026-011', '20100000011', 'MINERA PLACEHOLDER S.A.C.', '2025-13', '', shift(9), 'Abono en cuenta', 3],
  ['0721-2026-012', '10450000012', 'TORRES DEMO, ANA LUCIA', '2025-13', 'IMPROCEDENTE', shift(11), 'Abono en cuenta', 4],
  ['0721-2026-013', '20100000013', 'PESQUERA SIMULADA S.A.', '2025-13', '', shift(12), 'OPF', 2],
  ['0721-2026-014', '20100000014', 'EDITORA DE PRUEBA E.I.R.L.', '2025-13', 'AUTORIZADO TOTAL', shift(14), 'Abono en cuenta', 5],
  ['0721-2026-015', '10450000015', 'FLORES DEMO, CARLOS ENRIQUE', '2025-13', '', shift(15), 'Abono en cuenta', 3],
  ['0721-2026-016', '20100000016', 'LOGISTICA EJEMPLO S.A.C.', '2025-13', 'DESISTIDO', shift(18), 'Cheque', 1],
  ['0721-2026-017', '20100000017', 'QUIMICOS MUESTRA S.A.', '2025-13', '', shift(20), 'Abono en cuenta', 4],
  ['0721-2026-018', '20100000018', 'ALIMENTOS SANDBOX S.A.C.', '2025-13', 'AUTORIZADO TOTAL', shift(22), 'Abono en cuenta', 6],
];

const OBS = [
  'Insumo completo. Pendiente foliación.',
  'Se remitió carta de requerimiento; a la espera de respuesta.',
  'Verificar cuenta de abono con el contribuyente.',
  '',
  'Ticket abierto en la plataforma ITSM.',
  '',
  'Autorización parcial: se observa el periodo 11.',
  'Sustento insuficiente en el anexo 2.',
  '',
  'Expediente derivado por cambio de domicilio fiscal.',
  '',
  'Resolución notificada. Cierre pendiente.',
  '',
  'Insumo completo. Listo para archivar.',
  '',
  'Desistimiento presentado por el contribuyente.',
  '',
  'Insumo completo. Pendiente foliación.',
];

const rows = CASOS.map(([numDoc, ruc, nombre, per, resultado, vcto, forma, descargas], i) => ({
  DESCARGAS: `${descargas}/6`,
  of_devolucion: '0721',
  num_doc: numDoc,
  num_ruc: ruc,
  nombre,
  per_doc: per,
  cod_tip_sol: '01',
  cod_for: i % 3 === 0 ? '4949' : '1649',
  ind_for_dev: forma,
  CalcVctoInd: vcto,
  fec_Fallecido: '',
  carta: resultado === 'CARTA ENVIADA' ? `CARTA-${1200 + i}` : '',
  num_ri: resultado.startsWith('AUTORIZADO') || resultado === 'DENEGADO' ? `RI-0721-${3400 + i}` : '',
  fec_ri: resultado.startsWith('AUTORIZADO') || resultado === 'DENEGADO' ? shift(-(i % 9) - 1) : '',
  resultado,
  NIDI: i % 4 === 0 ? 'S' : '',
  num_dev: `E-${2026}${String(4100 + i)}`,
  obs_devol: OBS[i] ?? '',
  exp_echasqui: i % 3 === 0 ? `2026-${String(770 + i).padStart(6, '0')}` : '',
}));

const archivo = rows.slice(0, 6).map((r) => ({ ...r, resultado: 'AUTORIZADO TOTAL' }));

// Mutable so the capture script can flip the access gate between screenshots.
let accesoEstado = 'permitido';

const COLA_DESCARGAS = [
  { id: 1, num_doc: '0721-2026-003', ruc: '10450000003', tipo_servicio: 'Intranet', tipo_descarga: 'Exp. electrónico', parametro: 'E-20264103', estado: 'pendiente', reintentos: 1, error_log: 'Timeout al abrir el visor (reintento programado)' },
  { id: 2, num_doc: '0721-2026-006', ruc: '10450000006', tipo_servicio: 'Fiscaprocess', tipo_descarga: 'RI', parametro: 'RI-0721-3406', estado: 'pendiente', reintentos: 0, error_log: '' },
  { id: 3, num_doc: '0721-2026-011', ruc: '20100000011', tipo_servicio: 'E-Chasqui', tipo_descarga: 'Cédula', parametro: '2026-000781', estado: 'error', reintentos: 3, error_log: 'Sesión expirada: reautenticar y reintentar' },
];

// ------------------------------------------------------------------- routes

const json = (res, body, status = 200) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify(body));
};

/** Exact-path GET/POST handlers. Anything unmatched falls through to a generic OK. */
const ROUTES = {
  'GET /api/health': () => ({ status: 'ok' }),
  'GET /api/version': () => ({ version: '1.4.2' }),
  'GET /api/acceso': () => ({
    estado: accesoEstado,
    usuario_red: 'usuario.demo',
    mensaje:
      accesoEstado === 'no_registrado'
        ? 'Su usuario de red no está registrado. Complete el formulario para solicitar acceso.'
        : '',
  }),
  'GET /api/datos/tabla': () => ({ columns: COLUMNS, rows, total: rows.length }),
  'GET /api/datos/archivo': () => ({ columns: COLUMNS, rows: archivo, total: archivo.length }),
  'GET /api/datos/planeamiento-estado': () => ({ permitido: true }),
  'POST /api/servicios/verificar': () => ({ intranet: true, fisca: true }),
  'GET /api/entorno/firma-auto': () => ({
    disponible: true,
    escala: 1.25,
    ancho: 1920,
    alto: 1080,
    motivo: '',
    perfil: '1920x1080@125%',
  }),
  'GET /api/config/rutas': () => ({
    PATH_DESCARGAS: 'D:\\DEVOL\\descargas',
    PATH_RI: 'D:\\DEVOL\\resoluciones',
    PATH_AUTORIZAR: 'D:\\DEVOL\\autorizar',
    PATH_ARCHIVO: 'D:\\DEVOL\\archivo',
    PATH_SIRAT_EXE: 'C:\\Program Files\\RSIRAT\\rsirat.exe',
    UNIDAD_ORGANICA_FOLIO: '0721',
  }),
  'GET /api/config/feriados': () => ({
    feriados: ['01/01/2026', '01/05/2026', '29/06/2026', '28/07/2026', '29/07/2026', '30/08/2026'],
  }),
  'GET /api/mantenimiento/descargas': () => ({ descargas: COLA_DESCARGAS }),
  'GET /api/mantenimiento/archivar-echasqui': () => ({ pendientes: [] }),
};

const safeJson = (s) => {
  try {
    return JSON.parse(s || '{}');
  } catch {
    return {};
  }
};

const CASOS_PREFLIGHT = [
  { of: '0721', ruc: '10450000003', carpeta: '0721-2026-003', estado: 'pendiente', existentes: [], faltantes: ['REF', 'Tiempos'], detalle: '' },
  { of: '0721', ruc: '20100000004', carpeta: '0721-2026-004', estado: 'pendiente', existentes: ['antecedentes.pdf'], faltantes: ['REF', 'Tiempos'], detalle: '' },
  { of: '0721', ruc: '10450000006', carpeta: '0721-2026-006', estado: 'pendiente', existentes: [], faltantes: ['REF', 'Tiempos'], detalle: '' },
  { of: '0721', ruc: '10450000009', carpeta: '0721-2026-009', estado: 'omitido', existentes: ['ref.pdf', 'tiempos.pdf'], faltantes: [], detalle: 'Los PDFs ya están en la carpeta del caso.' },
  { of: '0721', ruc: '20100000011', carpeta: '0721-2026-011', estado: 'sin_planeamiento', existentes: [], faltantes: [], detalle: 'El caso no tiene planeamiento descargado.' },
];

/** POSTs whose response shape the UI actually reads (not job ids). */
const POST_JSON = {
  '/api/descargas/rsirat-preflight': (b) => ({
    tipo: b.tipo ?? 'ref',
    total: CASOS_PREFLIGHT.length,
    pendientes: CASOS_PREFLIGHT.filter((c) => c.estado === 'pendiente').length,
    casos: CASOS_PREFLIGHT,
  }),
  '/api/procesos/autorizar/pre-check': () => ({ conflictos: [], conflictos_c64: [] }),
  '/api/procesos/verificar-echasqui': () => ({ casos: [] }),
  '/api/procesos/validar-archivo': () => ({ casos: [] }),
  '/api/itop/empleadores-601': () => ({ empleadores: [] }),
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');
  const path = url.pathname;
  const key = `${req.method} ${path}`;

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  // Capture-script control channel (not part of the real API).
  if (path === '/mock/acceso') {
    accesoEstado = url.searchParams.get('estado') ?? 'permitido';
    return json(res, { estado: accesoEstado });
  }
  if (path === '/mock/job') {
    emitirJob(url.searchParams.get('kind') ?? 'pptt');
    return json(res, { ok: true });
  }

  if (ROUTES[key]) return json(res, ROUTES[key]());

  if (req.method === 'GET' && path.startsWith('/api/campos/')) {
    return json(res, { carta: '', ri: '', resultado: '', forma_dev: '', obs: '' });
  }
  if (req.method === 'GET' && path.startsWith('/api/config/credenciales/')) {
    const sistema = decodeURIComponent(path.split('/').pop());
    return json(res, { sistema, usuario: 'usuario.demo' });
  }

  // POSTs that return a typed payload instead of a job id.
  if (req.method === 'POST' && POST_JSON[path]) {
    let body = '';
    req.on('data', (c) => (body += c));
    return req.on('end', () => json(res, POST_JSON[path](safeJson(body))));
  }

  // Every job-starting POST: hand back an id and stream progress over the socket.
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (c) => (body += c));
    return req.on('end', () => {
      const kind = kindDeRuta(path);
      const jobId = `job-${Date.now()}`;
      json(res, { job_id: jobId, ok: true });
      if (kind) setTimeout(() => emitirJob(kind, jobId), 250);
    });
  }

  return json(res, { ok: true });
});

function kindDeRuta(path) {
  if (path.endsWith('/pptt')) return 'pptt';
  if (path.endsWith('/autorizar')) return 'autorizar';
  if (path.includes('rsirat-ref')) return 'rsirat_ref';
  if (path.includes('rsirat-antecedentes')) return 'rsirat_antec';
  if (path.includes('cartas-masivo')) return 'descarga_cartas_masivo';
  if (path.includes('/descargas/')) return 'descarga';
  return null;
}

// --------------------------------------------------------------- websocket

const wss = new WebSocketServer({ noServer: true });
const clientes = new Set();

server.on('upgrade', (req, socket, head) => {
  if (!req.url.startsWith('/ws')) return socket.destroy();
  wss.handleUpgrade(req, socket, head, (ws) => {
    clientes.add(ws);
    ws.on('close', () => clientes.delete(ws));
  });
});

const enviar = (payload) => {
  const txt = JSON.stringify(payload);
  for (const ws of clientes) if (ws.readyState === 1) ws.send(txt);
};

const PASOS = {
  pptt: [
    'Leyendo asignación de casos…',
    'Caso 0721-2026-003 — extrayendo datos de Intranet',
    'Caso 0721-2026-003 — consultando Fiscaprocess',
    'Caso 0721-2026-003 — cálculo de intereses OK',
    'Caso 0721-2026-003 — PPTT generado',
    'Caso 0721-2026-004 — extrayendo datos de Intranet',
    'Caso 0721-2026-004 — consultando Fiscaprocess',
    'Caso 0721-2026-004 — PPTT generado',
    'Caso 0721-2026-006 — extrayendo datos de Intranet',
    'Caso 0721-2026-006 — sin declaración en el periodo, se omite',
    'Caso 0721-2026-009 — PPTT generado',
    'Consolidando reportes en Excel…',
  ],
  rsirat_ref: [
    'Verificando resolución de pantalla (1920x1080 @125%)…',
    'Abriendo la aplicación de escritorio…',
    'Sesión iniciada. Tomando control de mouse/teclado.',
    'Caso 0721-2026-003 — navegando a REF/Tiempos',
    'Caso 0721-2026-003 — PDF descargado (2 de 6)',
    'Caso 0721-2026-004 — navegando a REF/Tiempos',
    'Caso 0721-2026-004 — PDF descargado (3 de 6)',
    'Caso 0721-2026-006 — navegando a REF/Tiempos',
    'Caso 0721-2026-006 — PDF descargado (4 de 6)',
    'Caso 0721-2026-009 — navegando a REF/Tiempos',
  ],
};

let timer = null;
function emitirJob(kind, jobId = `job-${Date.now()}`) {
  clearInterval(timer);
  const pasos = PASOS[kind] ?? PASOS.pptt;
  const total = pasos.length;
  let i = 0;
  timer = setInterval(() => {
    if (i >= total) {
      clearInterval(timer);
      enviar({
        type: 'job_done',
        job_id: jobId,
        kind,
        ok: true,
        mensaje: 'Proceso completado.',
        ok_count: 11,
        oks: [
          '0721-2026-003',
          '0721-2026-004',
          '0721-2026-007',
          '0721-2026-008',
          '0721-2026-009',
          '0721-2026-011',
          '0721-2026-013',
          '0721-2026-015',
          '0721-2026-017',
          '0721-2026-018',
          '0721-2026-001',
        ],
        errores: [
          { caso: '0721-2026-006', motivo: 'Sin declaración registrada en el periodo solicitado' },
        ],
      });
      return;
    }
    enviar({
      type: 'progress',
      job_id: jobId,
      kind,
      msg: pasos[i],
      done: i + 1,
      total,
      etiqueta: kind === 'pptt' ? 'Generando PPTT' : 'Descargando REF/Tiempos',
    });
    i += 1;
  }, 1500);
}

server.listen(PORT, '127.0.0.1', () => {
  console.log(`mock DEVOL+ backend on http://127.0.0.1:${PORT}`);
});
