# videos/

Demo videos for the portfolio, authored as [HyperFrames](https://github.com/heygen-com/hyperframes)
compositions (HTML + GSAP rendered frame by frame to MP4). Not part of the site
build; only the encoded web versions are copied into `public/`.

Requirements: Node 22+, `ffmpeg`, Chrome. The CLI version is pinned in each
project's `package.json` so renders stay reproducible.

## devolplus/

95 s narrated walkthrough of DEVOL+ on synthetic data: data load (system
report or database → new cases) → case table → one folder per case filled by
the downloads → payslip PDFs read (OCR) into fields → the Excel workbook
(deposits per bank account, income detail reconciled with formulas) → bulk
selection with pre-flight → RPA run streamed over WebSocket → per-case outcome
→ Word letters by mail merge and the foliated, signed PDF case file → results.
App footage comes from `tools/record-devolplus.mjs`; the load, folder and
PDF/Excel/Word scenes are HTML mock-ups with fabricated data and generic system
names, so no internal template, document or system is shown.

Copy, subtitles and narration are bilingual and picked at render time:

```bash
cd videos/devolplus
npm run check        # lint + runtime + layout + contrast
npm run render:es    # → renders/devolplus-es.mp4 (1080p master)
npm run render:en    # → renders/devolplus-en.mp4
```

### Narration

`narration/narration.json` holds the script per scene and language; the WAVs
in `assets/audio/{es,en}/` are generated from it with the local Kokoro-82M
model (`ef_dora` at 1.12× in `es-419`, `af_heart` in English):

```bash
python -m venv .venv-tts && .venv-tts/bin/pip install -r scripts/requirements-tts.txt
npx --yes hyperframes@0.8.72 tts "hola" -o /dev/null   # downloads the model (synthesis itself may then fail; ignore)
.venv-tts/bin/python scripts/narrate.py                 # prints each clip's length
```

After re-synthesizing, copy the printed lengths into `NARRATION_SECONDS` in
`index.html` (subtitle timing) and check the `<audio>` `data-start` /
`data-duration` values still fit their scenes. Subtitle text lives in `SUBS`
in the same file.

Web encode (720p) from a master:

```bash
ffmpeg -i renders/devolplus-es.mp4 -vf scale=1280:720:flags=lanczos \
  -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 96k out.mp4
```
