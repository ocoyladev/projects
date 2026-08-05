// Downscale + re-encode the captured PNGs to WebP using Chromium's canvas.
// No imagemagick/sharp on this machine; Playwright is already installed.

import { chromium } from 'playwright';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = process.argv[2];
const OUT = process.argv[3];
const MAX_WIDTH = Number(process.argv[4] ?? 1400);
const QUALITY = Number(process.argv[5] ?? 0.86);

const browser = await chromium.launch();
const page = await browser.newPage();

for (const file of (await readdir(SRC)).filter((f) => f.endsWith('.png')).sort()) {
  const b64 = (await readFile(path.join(SRC, file))).toString('base64');
  const out = await page.evaluate(
    async ({ b64, maxWidth, quality }) => {
      const img = new Image();
      img.src = `data:image/png;base64,${b64}`;
      await img.decode();
      const scale = Math.min(1, maxWidth / img.width);
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * scale);
      c.height = Math.round(img.height * scale);
      const ctx = c.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, c.width, c.height);
      return {
        data: c.toDataURL('image/webp', quality).split(',')[1],
        w: c.width,
        h: c.height,
      };
    },
    { b64, maxWidth: MAX_WIDTH, quality: QUALITY },
  );
  const dest = path.join(OUT, file.replace(/\.png$/, '.webp'));
  await writeFile(dest, Buffer.from(out.data, 'base64'));
  console.log(`${file} -> ${path.basename(dest)}  ${out.w}x${out.h}`);
}

await browser.close();
