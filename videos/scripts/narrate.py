"""Synthesize the narration, one WAV per segment and language.

Uses the same Kokoro-82M model `hyperframes tts` downloads, but calls
kokoro-onnx directly: espeak-ng ignores ESPEAK_DATA_PATH when the path is long
(as a venv path usually is), so the data dir is reached through a short symlink
in the HyperFrames cache. Prints each clip's length so the composition timing
in index.html can be fitted to it.

Run from videos/, naming the composition folder:

    python -m venv .venv-tts && .venv-tts/bin/pip install -r scripts/requirements-tts.txt
    .venv-tts/bin/python scripts/narrate.py devolplus      # every language
    .venv-tts/bin/python scripts/narrate.py devolplus es   # one language
"""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path

VIDEOS = Path(__file__).resolve().parent.parent
CACHE = Path.home() / ".cache" / "hyperframes" / "tts"
MODEL = CACHE / "models" / "kokoro-v1.0.onnx"
VOICES = CACHE / "voices" / "voices-v1.0.bin"
ESPEAK_LINK = CACHE / "espeak-ng-data"


def _point_espeak_at_short_path() -> None:
    import espeakng_loader

    if not ESPEAK_LINK.exists():
        ESPEAK_LINK.symlink_to(espeakng_loader.get_data_path())
    os.environ["ESPEAK_DATA_PATH"] = str(ESPEAK_LINK)


def main(project: str, langs: list[str]) -> None:
    root = VIDEOS / project
    out = root / "assets" / "audio"
    _point_espeak_at_short_path()
    import soundfile as sf
    from kokoro_onnx import Kokoro

    if not MODEL.exists():
        sys.exit(
            f"Missing {MODEL}: run `npx hyperframes tts hola` once to download it."
        )

    script = json.loads(
        (root / "narration" / "narration.json").read_text(encoding="utf-8")
    )
    kokoro = Kokoro(str(MODEL), str(VOICES))
    for lang in langs or list(script["voices"]):
        cfg = script["voices"][lang]
        (out / lang).mkdir(parents=True, exist_ok=True)
        for seg in script["segments"]:
            samples, rate = kokoro.create(
                seg[lang], voice=cfg["voice"], speed=cfg["speed"], lang=cfg["lang"]
            )
            sf.write(out / lang / f"{seg['id']}.wav", samples, rate)
            print(f"{lang} {seg['id']:8} {len(samples) / rate:5.2f}s")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("usage: narrate.py <composition-dir> [lang ...]")
    main(sys.argv[1], sys.argv[2:])
