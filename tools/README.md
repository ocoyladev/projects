# tools/

One-off scripts for regenerating portfolio assets. They are not part of the
site build and nothing in `src/` imports them. They need `playwright` and `ws`,
which are not project dependencies — install them on demand:

```bash
npm i -D playwright ws && npx playwright install chromium
```

## `devolplus-mock-server.mjs` — DEVOL+ screenshots

DEVOL+ is a Windows desktop app that runs inside a government network against
internal systems, so it cannot be hosted. The screenshots in
`public/src/img/devolplus/` are the **real frontend** rendering **synthetic
data**: this script serves the same HTTP + WebSocket contract as the FastAPI
backend, and the DEVOL+ Vite dev server already proxies `/api` and `/ws` to
port 8000. Nothing in the DEVOL+ repo is modified.

```bash
# 1. mock backend (this repo)
node tools/devolplus-mock-server.mjs

# 2. real frontend, in the DEVOL+ repo
cd ../script_sunat/frontend && npm run dev   # http://127.0.0.1:5173

# 3. drive the UI and capture the screens you want
```

Two control endpoints exist for capture only, outside the real API:

- `GET /mock/acceso?estado=no_registrado` — flips the access gate between
  `permitido`, `no_registrado`, `pendiente`, `rechazado`, `inactivo`,
  `sin_conexion`.
- `GET /mock/job?kind=rsirat_ref` — replays a streaming job over the WebSocket.

Job progress is emitted every 1500 ms so the execution overlay can be caught
mid-run; lower it for a faster loop.

All case data is fabricated — RUCs, taxpayer names, document numbers, and
amounts are invented and match no real record.

## `optimize-screenshots.mjs` — PNG → WebP

Downscales and re-encodes captures. No imagemagick or sharp needed; it uses
Chromium's canvas through Playwright.

```bash
node tools/optimize-screenshots.mjs <src-dir> <out-dir> [maxWidth=1400] [quality=0.86]
```

## `gen-og-cover.mjs` — social preview card

Renders `public/src/img/og-cover.png` (1200×630), referenced by the `og:image`
and `twitter:image` tags in `index.html`. Re-run it whenever the headline role
or the metrics on the card change.

```bash
node tools/gen-og-cover.mjs
```
