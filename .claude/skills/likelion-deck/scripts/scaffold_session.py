#!/usr/bin/env python3
"""Scaffold a new SKU LIKELION lecture-deck session from 덱_템플릿킷/.

새 세션 폴더를 만들고 스타터 덱을 '그대로' 복사한다. 고정 페이지 1·2·3,
하단 네비게이션 바, 첫 페이지 PDF 버튼(불변 요소)은 절대 손대지 않는다.
이미지 경로를 세션 로컬(img/)로 바꾸고, 표지/타이틀 슬롯을 주입하고,
_redirects 를 만들고, 루트 README 세션 목록에 행을 추가한다.

이미지 생성은 하지 않는다 (codex imagegen 소관).

사용:
  python .claude/skills/likelion-deck/scripts/scaffold_session.py \
    --topic 사용자리서치기초 --week 12 --title "사용자 리서치 기초" --presenter "노태경"
"""
import argparse
import re
import shutil
import sys
from pathlib import Path

# Windows 콘솔(cp949)에서도 한글/em-dash 출력이 죽지 않도록 UTF-8 강제
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KIT = "덱_템플릿킷"
STARTER = "starter/deck-template.html"
CSS = "styles/deck.css"

# 스타터가 참조하는 필수 이미지(고정 1·2·3 + 예시 본문이 렌더되도록). 나머지는 codex imagegen 으로.
ESSENTIAL_IMAGES = [
    "logo.png",
    "main-tiles.png",
    "slides/s10_revenue-menu.png",   # 스타터 예시(center-v) 데모 — 지우고 시작
]

# 킷 파일 → 세션 내 '다른 이름'으로 복사. 도입(2p) 슬롯은 BM 아트가 아니라
# 중립 플레이스홀더로 채워, 주제별로 새로 생성해야 함이 한눈에 보이게 한다.
RENAMED_IMAGES = {
    "_placeholder.png": "slides/s02_intro.png",
}


def find_root(start: Path) -> Path:
    for d in [start, *start.parents]:
        if (d / KIT).is_dir():
            return d
    sys.exit(f"[에러] '{KIT}/' 폴더를 찾을 수 없습니다. 덱 저장소 안에서 실행하세요.")


def inject_slots(html: str, week, title, presenter, topic) -> str:
    # 경로: 스타터(킷 기준 ../) → 세션 로컬
    html = html.replace('href="../styles/deck.css"', 'href="styles/deck.css"')
    html = html.replace('"../img/', '"img/')  # 속성값(src/href)만 치환 — 안내 주석은 보존
    # 슬라이드 위치 기억(localStorage) 키를 세션마다 고유하게 → 덱 간 충돌 방지
    html = html.replace("var storageKey = 'sku-deck-slide';",
                        f"var storageKey = 'sku-deck-{topic}';")
    # <title>
    if title:
        html = re.sub(r"<title>.*?</title>",
                      f"<title>{title} — SKU LIKELION</title>", html, count=1, flags=re.S)
    # 표지 슬롯 (고정 페이지 1 — 구조는 불변, 텍스트만 치환)
    if week:
        wk = str(week) if str(week).upper().startswith("WEEK") else f"WEEK {week}."
        html = html.replace('<div class="week">WEEK 00.</div>', f'<div class="week">{wk}</div>')
    # 표지 한글 제목은 '기획 & 디자인'으로 고정 — --title 은 <title>·README 라벨에만 쓴다(표지 미주입).
    if presenter:
        html = html.replace('<div class="cover-presenter">발표자 이름</div>',
                            f'<div class="cover-presenter">{presenter}</div>')
    return html


DIVIDER_HEADER = """      <header class="s-head">
        <img class="s-logo" src="img/logo.png" alt=""><span class="s-brand">SKU LIKELION</span>
        <span class="s-line"></span>
        <div class="s-team">UX/UI Team<br>Official LIKELION&nbsp;&nbsp;at&nbsp;&nbsp;SKU</div>
      </header>"""


def build_dividers(n: int) -> str:
    """번호매김이 끝난 part-divider N개 생성 (is-active·PART i / N 자동)."""
    blocks = []
    for i in range(1, n + 1):
        dots = "\n".join(
            f'          <span class="pd-dot{" is-active" if j == i else ""}">{j}</span>'
            for j in range(1, n + 1)
        )
        blocks.append(
            f"""    <!-- ============ PART {i} 전환 (part-divider) — 해당 파트 콘텐츠 앞으로 이동 ============ -->
    <section class="slide part-divider" data-slide="P{i}">
{DIVIDER_HEADER}
      <div class="pd-wrap">
        <div class="pd-dots">
{dots}
        </div>
        <p class="pd-eyebrow">PART {i} / {n}</p>
        <h2 class="pd-title">파트 {i} 제목</h2>
        <p class="pd-sub">이 파트에서 다루는 것 한 줄</p>
      </div>
    </section>"""
        )
    return "\n\n".join(blocks)


def apply_parts(html: str, n: int) -> str:
    """스타터의 단일 part-divider 를 번호매김된 N개로 치환.

    N개는 아젠다 뒤에 연달아 배치된다 — 조립 시 각 파트 콘텐츠 앞으로 옮긴다.
    """
    if n < 1:
        n = 1
    new = build_dividers(n)
    pat = re.compile(r"[ \t]*<!--[^>]*PART 1 전환.*?</section>", re.S)
    html2, cnt = pat.subn(new, html, count=1)
    if cnt == 0:
        pat2 = re.compile(r'[ \t]*<section class="slide part-divider".*?</section>', re.S)
        html2, cnt = pat2.subn(new, html, count=1)
    if cnt == 0:
        print("[경고] part-divider 블록을 못 찾음 — --parts 적용 건너뜀")
    return html2


def register_in_readme(root: Path, topic, title, deck_rel):
    readme = root / "README.md"
    if not readme.exists():
        print("[경고] 루트 README.md 없음 — 세션 목록 등록 건너뜀")
        return
    text = readme.read_text(encoding="utf-8")
    if f"세션/{topic}`]" in text:
        print("[정보] README에 이미 등록됨 — 건너뜀")
        return
    sep = "|---|---|---|"
    if sep not in text:
        print("[경고] README 세션 목록 표를 찾지 못함 — 등록 건너뜀")
        return
    row = f"| [`세션/{topic}`]({deck_rel}) | {title or topic} | HTML 웹덱 |"
    text = text.replace(sep, sep + "\n" + row, 1)
    readme.write_text(text, encoding="utf-8")
    print(f"[완료] README 세션 목록 등록: {topic}")


def main():
    ap = argparse.ArgumentParser(description="새 강의덱 세션 스캐폴딩")
    ap.add_argument("--topic", required=True, help="세션 폴더명 (예: 사용자리서치기초)")
    ap.add_argument("--week", default="", help="주차 (예: 12)")
    ap.add_argument("--title", default="", help="제목(브라우저 탭 <title>·README 라벨용; 표지엔 '기획 & 디자인' 고정)")
    ap.add_argument("--presenter", default="", help="발표자 이름들")
    ap.add_argument("--deck-name", default="", help="덱 파일명 (기본: <topic>_강의덱.html)")
    ap.add_argument("--parts", type=int, default=1,
                    help="파트 수 → 번호매김 part-divider N개 생성 (아젠다 뒤에 배치, 조립 시 이동)")
    ap.add_argument("--all-demo-images", action="store_true",
                    help="킷 img/ 전체 복사 (기본: 필수 4개만)")
    ap.add_argument("--force", action="store_true", help="세션 폴더가 있어도 덮어씀")
    ap.add_argument("--root", default=".", help="저장소 루트 (기본: 자동 탐색)")
    args = ap.parse_args()

    root = find_root(Path(args.root).resolve())
    kit = root / KIT
    starter, css = kit / STARTER, kit / CSS
    if not starter.exists() or not css.exists():
        sys.exit(f"[에러] 스타터/CSS 없음: {starter} / {css}")

    sess = root / "세션" / args.topic
    if sess.exists() and not args.force:
        sys.exit(f"[에러] 이미 존재: {sess} (덮어쓰려면 --force)")
    (sess / "styles").mkdir(parents=True, exist_ok=True)
    (sess / "img" / "slides").mkdir(parents=True, exist_ok=True)

    deck_name = args.deck_name or f"{args.topic}_강의덱.html"

    # 스타터 복사 + 슬롯 주입 (네비바·PDF버튼·고정템플릿 마크업은 불변)
    html = inject_slots(starter.read_text(encoding="utf-8"), args.week, args.title, args.presenter, args.topic)
    html = apply_parts(html, args.parts)
    (sess / deck_name).write_text(html, encoding="utf-8")

    # deck.css 복사 (세션 로컬)
    shutil.copy2(css, sess / "styles" / "deck.css")

    # 이미지 복사 (placeholder)
    imgs = ESSENTIAL_IMAGES
    if args.all_demo_images:
        imgs = [str(p.relative_to(kit / "img")) for p in (kit / "img").rglob("*") if p.is_file()]
    for rel in imgs:
        src = kit / "img" / rel
        if src.exists():
            dest = sess / "img" / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dest)

    # 이름 바꿔 복사 (도입 슬롯 → 중립 플레이스홀더). --all-demo-images 여부와 무관.
    for src_rel, dest_rel in RENAMED_IMAGES.items():
        src = kit / "img" / src_rel
        if src.exists():
            dest = sess / "img" / dest_rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dest)
        else:
            print(f"[경고] 플레이스홀더 없음: {src}")

    # _redirects (Netlify: 루트 → 배포본)
    deploy_name = (deck_name[:-5] if deck_name.endswith(".html") else deck_name) + "_배포.html"
    (sess / "_redirects").write_text(f"/  /{deploy_name}  200\n", encoding="utf-8")

    register_in_readme(root, args.topic, args.title, f"세션/{args.topic}/{deck_name}")

    print(f"\n[완료] 세션 생성: {sess}")
    print(f"  · 덱: {deck_name}  (고정 1·2·3 · 하단 네비바 · 첫 페이지 PDF버튼 그대로)")
    print(f"  · part-divider {args.parts}개 (아젠다 뒤 — 조립 시 각 파트 콘텐츠 앞으로 이동)")
    print("  · styles/deck.css · img/(placeholder) · _redirects")
    print("  · 도입(2p)=s02_intro.png 플레이스홀더 → 주제별로 새로 생성 · 마무리=concept-recap(배경 이미지는 선택·수동)")
    print("\n다음: 슬라이드 조립(시각화 우선) → make_prompt_sheet.py → 프리뷰(8532) → (선택)inline_images.py")


if __name__ == "__main__":
    main()
