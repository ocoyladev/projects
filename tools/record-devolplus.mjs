// Records DEVOL+ (real frontend + mock backend) for the demo video in
// videos/devolplus/. Frames come from the CDP screencast (sharper than
// Playwright's recordVideo); each scene is muxed to a constant-30fps H.264 clip.
// Needs the mock backend and the DEVOL+ Vite dev server running — see tools/README.md.
//
//   node tools/record-devolplus.mjs [outDir=videos/devolplus/assets/footage]
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const OUT = process.argv[2] ?? 'videos/devolplus/assets/footage';
const TMP = `${OUT}/.frames`;

const W = 1600, H = 900, DSF = 1.2; // → 1920×1080 frames
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const ctx = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DSF });
await ctx.addInitScript(() => {
  addEventListener('DOMContentLoaded', () => {
    const c = document.createElement('div');
    c.id = '__cursor';
    c.style.cssText = 'position:fixed;z-index:2147483647;left:0;top:0;width:22px;height:22px;pointer-events:none;transform:translate(-3px,-2px);transition:transform .08s';
    c.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l16 9-7 2-3 7z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    document.body.appendChild(c);
    addEventListener('mousemove', (e) => { c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; }, true);
    addEventListener('mousedown', () => { c.style.transform = 'translate(-3px,-2px) scale(.8)'; }, true);
    addEventListener('mouseup', () => { c.style.transform = 'translate(-3px,-2px)'; }, true);
  });
});
const p = await ctx.newPage();
const cdp = await ctx.newCDPSession(p);

let scene = null, frames = [], sceneStart = 0;
cdp.on('Page.screencastFrame', async (f) => {
  if (scene) frames.push({ t: Date.now() / 1000, data: f.data });
  await cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
});
async function start(name) {
  scene = name; frames = []; sceneStart = Date.now() / 1000;
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: W * DSF, maxHeight: H * DSF, everyNthFrame: 1 });
}
async function stop() {
  await p.waitForTimeout(150);
  await cdp.send('Page.stopScreencast');
  const end = Date.now() / 1000;
  const dir = `${TMP}/${scene}`; mkdirSync(dir, { recursive: true });
  let list = ''; if (frames.length) frames[0].t = sceneStart;
  frames.forEach((f, i) => {
    const fn = `f${String(i).padStart(5, '0')}.jpg`;
    writeFileSync(`${dir}/${fn}`, Buffer.from(f.data, 'base64'));
    const next = i + 1 < frames.length ? frames[i + 1].t : end;
    list += `file '${fn}'\nduration ${Math.max(0.001, next - f.t).toFixed(4)}\n`;
  });
  list += `file 'f${String(frames.length - 1).padStart(5, '0')}.jpg'\n`;
  writeFileSync(`${dir}/list.txt`, list);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', `${dir}/list.txt`,
    '-vf', 'fps=30,scale=1920:1080:flags=lanczos,format=yuv420p', '-c:v', 'libx264', '-crf', '16', '-preset', 'slow', `${OUT}/${scene}.mp4`]);
  console.log(`scene ${scene}: ${frames.length} frames`);
  scene = null;
}
async function glide(x, y, steps = 30) { await p.mouse.move(x, y, { steps }); }
async function glideTo(loc, steps = 30) {
  const bb = await loc.boundingBox(); await glide(bb.x + bb.width / 2, bb.y + bb.height / 2, steps); return bb;
}
async function clickOn(loc, steps = 30) { await glideTo(loc, steps); await p.waitForTimeout(180); await p.mouse.down(); await p.mouse.up(); }

await p.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
await p.mouse.move(W * 0.55, H * 0.5);

// Scene 1 — the case table
await start('01-tabla');
await p.waitForTimeout(1200);
await glide(700, 420, 40); await p.waitForTimeout(400);
await p.mouse.wheel(0, 260); await p.waitForTimeout(900);
await p.mouse.wheel(0, -260); await p.waitForTimeout(700);
await glide(1180, 330, 35); await p.waitForTimeout(1200); // the overdue dates heat column
await stop();

// Scene 2 — select cases and open the RPA action
await start('02-seleccion');
const boxes = p.locator('input[aria-label="Press Space to toggle row selection (unchecked)"]');
for (const i of [2, 3, 5, 8, 10]) { await clickOn(boxes.nth(i), 18); await p.waitForTimeout(260); }
await p.waitForTimeout(500);
await clickOn(p.getByRole('button', { name: 'Más acciones ▾' }), 35);
await p.waitForTimeout(700);
const item = p.getByText('Descargar REF/Tiempos (RSIRAT)', { exact: true });
await glideTo(item, 25); await p.waitForTimeout(500);
await p.mouse.down(); await p.mouse.up();
await p.waitForTimeout(2600); // preflight dialog: checks already-downloaded files
await stop();

// Scene 3 — run: progress streamed over WebSocket
await start('03-ejecucion');
await clickOn(p.getByRole('button', { name: 'Iniciar', exact: true }), 25);
await glide(W - 40, H - 40, 40);
await p.waitForTimeout(12500);
await stop();

// Scene 4 — outcome: scroll the summary down to the isolated failure
await start('04-resultado');
await p.waitForTimeout(900);
const dlg = p.getByText('Proceso completado.').locator('xpath=ancestor::div[contains(@class,"shadow")][1]');
const bb = await dlg.boundingBox();
await glide(bb.x + bb.width / 2, bb.y + bb.height * 0.6, 30);
for (let i = 0; i < 6; i++) { await p.mouse.wheel(0, 70); await p.waitForTimeout(110); }
await p.waitForTimeout(2600);
await stop();

await b.close();
