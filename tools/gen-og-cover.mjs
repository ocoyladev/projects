// Renders the 1200x630 social-preview card for the portfolio.
import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';

const OUT = new URL('../public/src/img/og-cover.png', import.meta.url).pathname;
const photo = (
  await readFile(new URL('../public/src/img/MAIN_PHOTO.webp', import.meta.url).pathname)
).toString('base64');

const html = `
<html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#070710;color:#f8fafc;
       font-family:Inter,system-ui,sans-serif;display:flex;align-items:center;
       gap:64px;padding:0 80px;position:relative;overflow:hidden}
  .grid{position:absolute;inset:0;opacity:.5;
    background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
    background-size:48px 48px}
  .blob{position:absolute;border-radius:50%;filter:blur(120px)}
  .b1{width:520px;height:520px;background:rgba(37,99,235,.30);top:-160px;left:180px}
  .b2{width:460px;height:460px;background:rgba(124,58,237,.26);bottom:-180px;right:60px}
  .text{position:relative;flex:1}
  .tag{font-family:ui-monospace,monospace;font-size:19px;letter-spacing:.22em;
       text-transform:uppercase;color:#60a5fa;margin-bottom:20px}
  h1{font-size:74px;font-weight:800;letter-spacing:-.03em;line-height:1;margin-bottom:18px}
  .role{font-size:31px;font-weight:600;line-height:1.25;
        background:linear-gradient(100deg,#60a5fa,#a78bfa);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .sub{font-size:23px;color:#94a3b8;margin-top:10px}
  .stats{display:flex;gap:14px;margin-top:38px}
  .stat{font-family:ui-monospace,monospace;font-size:17px;padding:9px 16px;border-radius:11px;
        background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.11);color:#cbd5e1}
  .photo{position:relative;width:330px;height:330px;border-radius:50%;overflow:hidden;
         box-shadow:0 0 0 3px rgba(255,255,255,.10),0 30px 90px rgba(0,0,0,.6);flex-shrink:0}
  .photo img{width:100%;height:100%;object-fit:cover}
</style></head><body>
  <div class="grid"></div><div class="blob b1"></div><div class="blob b2"></div>
  <div class="text">
    <div class="tag">// portfolio</div>
    <h1>Oscar Coyla</h1>
    <div class="role">Power Platform Developer</div>
    <div class="sub">RPA &amp; Automation Specialist · 100% Remote · UTC-5</div>
    <div class="stats">
      <span class="stat">Per-case cycle &minus;91%</span>
      <span class="stat">~100 users</span>
      <span class="stat">5 enterprise systems</span>
    </div>
  </div>
  <div class="photo"><img src="data:image/webp;base64,${photo}"></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.screenshot({ path: OUT });
await browser.close();
console.log(`wrote ${OUT}`);
