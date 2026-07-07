#!/usr/bin/env python3
"""Scan a deck HTML for image slots → emit a codex-imagegen prompt sheet.

이미지 생성은 하지 않는다. 덱이 참조하는 img/slides/sNN_*.png 슬롯을 찾아
codex imagegen 이 소비할 수 있는 프롬프트 시트(마크다운)를 만든다.
공통 4블록(STYLE/RENDER/NEGATIVE)은 고정으로 박고, SUBJECT(그릴 대상)만
TODO 로 비워 둔다 → 사람이 채운 뒤 codex 로 생성한다.

CODEX 파서 호환 포맷: '## S<no>' 헤더 + '**파일명**: name' + 텍스트(```text) 블록.

사용:
  python .claude/skills/likelion-deck/scripts/make_prompt_sheet.py 세션/<주제>/<덱>.html
"""
import argparse
import re
import sys
from pathlib import Path

# Windows 콘솔(cp949)에서도 한글 출력이 죽지 않도록 UTF-8 강제
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

BLOCK1 = """A clean, friendly 3D educational illustration. Plump, rounded, minimal and polished.
NOT flat top-down isometric, NOT a miniature diorama, NOT a glossy game asset.
MATERIAL: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents.
PALETTE: pure white and light-grey base; ice-blue (#8EC3FF) surfaces; cobalt-blue (#0066CC) accents;
deep-navy (#233B66) used only for depth/shadow. No other colors. No rainbow, no neon.
LIGHTING: soft studio light from the upper-left, gentle ambient occlusion,
exactly ONE soft blurred drop shadow directly beneath the subject.
CAMERA: near eye-level three-quarter view with a slight downward tilt."""

BLOCK3 = """Rendered FLOATING FREELY on a FULLY TRANSPARENT background (PNG with alpha).
NO base disk, NO pedestal, NO tile, NO backdrop, NO framing card. Only the single soft drop shadow.
Generous empty margins. 1:1 square."""

BLOCK4 = """Absolutely NO text, NO letters, NO numbers, NO Korean characters, NO logos, NO watermark.
Especially NO numbers/ticks/currency symbols on any chart, coin, gauge, or graph.
NO photorealistic faces, NO rainbow, NO neon, NO flat vector, NO anime style."""


def entry(slide_no, filename, concept):
    return f"""## S{slide_no} · {concept}
**파일명**: `{filename}`
```text
{BLOCK1}

SUBJECT: [TODO — 이 슬라이드가 그림으로 전달할 것(은유). main 오브젝트 1개 + 보조 2~4개. 참고 컨셉: "{concept}"]
COMPOSITION: subject on the RIGHT of a 1:1 frame, floating; leave the LEFT ~40% empty for text.
Characters faceless / near-faceless and stylized.

{BLOCK3}

{BLOCK4}
```
"""


def main():
    ap = argparse.ArgumentParser(description="덱 이미지 슬롯 → codex imagegen 프롬프트 시트")
    ap.add_argument("deck", help="덱 HTML 경로")
    ap.add_argument("--out", default="", help="출력 md (기본: 덱 폴더/이미지프롬프트.md)")
    args = ap.parse_args()

    deck = Path(args.deck)
    if not deck.exists():
        sys.exit(f"[에러] 덱 없음: {deck}")
    html = deck.read_text(encoding="utf-8")

    # img/slides/sNN_<concept>.png 참조 수집 (순서 유지 · 중복 제거)
    seen = {}
    for m in re.finditer(r"img/slides/(s(\d+)_([^\"'./]+)\.png)", html):
        fn, no, concept = m.group(1), m.group(2), m.group(3).replace("-", " ")
        if fn.endswith("-bg.png"):
            continue  # 배경 이미지(풀블리드)는 수동 — 이 시트는 떠 있는 1:1 에셋만 다룬다
        seen.setdefault(fn, (no, concept))

    if not seen:
        print("[정보] img/slides/sNN_*.png 슬롯이 없습니다. 슬라이드에 <img> 슬롯을 먼저 배치하세요.")

    tm = re.search(r"<title>(.*?)</title>", html, re.S)
    topic = tm.group(1).split("—")[0].strip() if tm else ""

    out = Path(args.out) if args.out else deck.parent / "이미지프롬프트.md"
    parts = [
        f"# 이미지 프롬프트 시트 — {deck.name}",
        "",
    ]
    if topic:
        parts += [f"**강의 주제**: {topic} — 각 SUBJECT를 이 주제 맥락에 맞게 채우세요.", ""]
    parts += [
        "**codex imagegen** 용. 각 항목의 `SUBJECT`(TODO)를 채운 뒤 codex 로 생성하세요.",
        "생성물은 `img/slides/`에 파일명 그대로 저장합니다.",
        "(이 스킬/Claude 는 이미지를 직접 생성하지 않습니다 — 프롬프트만 준비합니다.)",
        "배경 이미지(`*-bg.png`, 풀블리드 가로)는 이 시트에서 제외됩니다 — 수동으로 준비하세요.",
        "",
    ]
    for fn, (no, concept) in seen.items():
        parts.append(entry(no, fn, concept))
    out.write_text("\n".join(parts), encoding="utf-8")
    print(f"[완료] {len(seen)}개 프롬프트 → {out}")
    if seen:
        print("다음: 각 SUBJECT 채우기 → codex imagegen 실행 → img/slides/ 저장 → 프리뷰 재확인")


if __name__ == "__main__":
    main()
