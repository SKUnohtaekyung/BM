#!/usr/bin/env python3
"""Inline all img/ references as base64 data URIs → single-file 배포 HTML.

세션/BM_수익모델/슬라이드/…상세계획서.md §1.6 의 두 정규식을 재사용한다:
  1) src="img/..."   2) url("img/...") / url(img/...)
원본(dev) 파일은 건드리지 않는다. --downscale N 으로 Pillow 다운스케일(선택).

사용:
  python .claude/skills/likelion-deck/scripts/inline_images.py 세션/<주제>/<덱>.html
  python .claude/skills/likelion-deck/scripts/inline_images.py <덱>.html --downscale 900
"""
import argparse
import base64
import mimetypes
import re
import sys
from pathlib import Path

# Windows 콘솔(cp949)에서도 한글 출력이 죽지 않도록 UTF-8 강제
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass


def main():
    ap = argparse.ArgumentParser(description="이미지 base64 인라인 → 단일 파일 배포본")
    ap.add_argument("deck", help="dev 덱 HTML 경로")
    ap.add_argument("--out", default="", help="출력 (기본: <stem>_배포.html)")
    ap.add_argument("--downscale", type=int, default=0, help="최대 폭 px (Pillow 필요). 0=끔")
    args = ap.parse_args()

    deck = Path(args.deck)
    if not deck.exists():
        sys.exit(f"[에러] 덱 없음: {deck}")
    base = deck.parent
    html = deck.read_text(encoding="utf-8")

    resizer = None
    if args.downscale > 0:
        try:
            import io
            from PIL import Image

            def resizer(data, maxw):
                try:
                    im = Image.open(io.BytesIO(data))
                    if im.width <= maxw:
                        return data
                    h = round(im.height * maxw / im.width)
                    im = im.resize((maxw, h))
                    buf = io.BytesIO()
                    im.save(buf, format="PNG")
                    return buf.getvalue()
                except Exception:
                    return data
        except ImportError:
            print("[경고] Pillow 없음 → 다운스케일 건너뜀 (pip install Pillow)")

    cache = {}

    def datauri(rel):
        if rel in cache:
            return cache[rel]
        p = base / rel
        if not p.exists():
            print(f"[경고] 이미지 없음(그대로 둠): {rel}")
            cache[rel] = None
            return None
        data = p.read_bytes()
        if resizer and p.suffix.lower() == ".png":
            data = resizer(data, args.downscale)
        mime = mimetypes.guess_type(p.name)[0] or "image/png"
        uri = f"data:{mime};base64," + base64.b64encode(data).decode()
        cache[rel] = uri
        return uri

    def sub_src(m):
        uri = datauri(m.group(3))
        return m.group(0) if uri is None else f"{m.group(1)}{m.group(2)}{uri}{m.group(2)}"

    def sub_url(m):
        uri = datauri(m.group(3))
        return m.group(0) if uri is None else f"{m.group(1)}{m.group(2)}{uri}{m.group(2)}{m.group(4)}"

    html = re.sub(r'(src=)(["\'])(img/[^"\']+)\2', sub_src, html)
    html = re.sub(r'(url\()(["\']?)(img/[^"\')]+)\2(\))', sub_url, html)

    out = Path(args.out) if args.out else base / (deck.stem + "_배포.html")
    out.write_text(html, encoding="utf-8")
    mb = out.stat().st_size / (1024 * 1024)
    leftover = len(re.findall(r'src=["\']img/', html)) + len(re.findall(r'url\(["\']?img/', html))
    print(f"[완료] {out} ({mb:.1f} MB) · 남은 img/ 참조 {leftover}건")
    if mb > 8:
        print("[경고] 8MB 초과 — `--downscale 900` 권장(메일/USB 배포 목표 3~8MB)")
    if leftover:
        print("[경고] 인라인 안 된 참조가 있습니다 — 해당 이미지 파일 존재 확인")


if __name__ == "__main__":
    main()
