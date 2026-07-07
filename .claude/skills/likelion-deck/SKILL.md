---
name: likelion-deck
description: >-
  SKU LIKELION 강의덱(피피티 / 세션 / HTML 웹덱)을 새로 만들거나 이어서 조립할 때 사용하는 스킬.
  "새 강의덱 만들어줘", "<주제>로 세션/덱 만들자", "다음 주차 덱", "이 덱에 비교 슬라이드 추가",
  "표지·아젠다 잡아줘", "덱 배포본(단일 파일) 만들어줘" 같은 요청에 트리거. 공유 템플릿킷
  (덱_템플릿킷/)으로 세션 폴더를 스캐폴딩하고, 정보의 성격을 판단해 관계·비교·흐름·포함 같은 것은
  텍스트가 아니라 도형 레이아웃으로 조립하며, codex imagegen용 이미지 프롬프트 시트를 산출하고,
  브라우저로 검증한 뒤 base64 단일 파일로 배포까지 담당. 사용자가 강의 주제만 설명하고 슬라이드를
  원할 때도, "템플릿"·"스킬"을 명시하지 않아도 사용할 것. 단, 이 덱 저장소(덱_템플릿킷/ 존재) 안에서만 동작.
---

# SKU LIKELION 강의덱 제작

`덱_템플릿킷/`(공유 디자인 시스템·레이아웃 카탈로그·이미지 프롬프트)을 사용해 **주제별 세션 폴더**에 단일 HTML 웹덱을 만든다. 1280×720 고정 캔버스, 방향키 발표, `F` 전체화면, 첫 페이지 PDF 버튼.

**저장소 구조 전제**
```
덱_템플릿킷/          # 공유 (모든 세션 공용) — 이 스킬이 복사/참조하는 단일 진실
  styles/deck.css · starter/deck-template.html · layouts/카탈로그.html
  00_레이아웃-선택가이드.md · images/공통이미지프롬프트.md · guide/디자인시스템.md · img/
세션/<주제>/          # 이 스킬이 만드는 곳
```

이 스킬 폴더의 `scripts/`는 저장소 루트에서 실행한다: `python .claude/skills/likelion-deck/scripts/<name>.py …`

---

## §0. 불변 요소 — 반드시 그대로 (협상 불가)

아래 **다섯**은 **모든 생성 덱에서 원본 그대로** 유지한다. 재작성하지 말고 스타터에서 **바이트 그대로** 가져간다. `scaffold_session.py`가 이를 보장하므로, 손으로 덱을 편집할 때도 이 부분은 건드리지 않는다.

1. **고정 페이지 1·2·3 (표지·도입·아젠다)** — `.cover` / `.s02-slide` / `.s03-slide` 의 구조·CSS 그대로. 바꾸는 건 지정 텍스트 슬롯(주차·한글 제목·발표자·아젠다 4항목)과 이미지 파일명뿐. **마크업/클래스/레이아웃 재구성 금지.**
2. **하단 네비게이션 바** — `.controls > .navbar`(‹ · 카운터 · › · 전체화면 ⛶). 그대로.
3. **첫 페이지 전용 PDF 버튼** — `.dl-btn`(`window.print()`), 엔진의 `dlBtn.style.display = (idx===0) ? '' : 'none'`로 **표지에서만** 표시. 그대로.
4. **이미지는 이 스킬이 생성하지 않는다** — 3D 에셋(표지 포함)은 **codex imagegen**으로 만든다. 이 스킬은 **프롬프트 시트를 산출·핸드오프**하는 데서 멈춘다. OpenAI를 직접 호출하지 않는다.
5. **모든 파트는 파트 전환(part-divider) 슬라이드로 시작한다 — PART 1 포함** — 강의를 파트로 나눴다면, **각 파트의 첫 본문 슬라이드 앞에 반드시** 전환 슬라이드를 둔다(맨 앞 1파트도 예외 없음). 구조(진행 도트 + `PART n / N` + 파트 제목 + 한 줄 설명)는 고정, 텍스트만 채운다. 진행 도트의 `is-active`는 현재 파트에, `/N`은 전체 파트 수. **한 파트라도 divider를 빠뜨리지 않는다.** → `파트 수 = part-divider 수`.

> 2·3은 `deck.css` + 스타터 엔진(IIFE)에 이미 들어 있어, 스타터를 손대지 않고 복사하면 자동 보존된다. 5는 `scaffold_session.py --parts N`이 N개를 만들어 주므로, 조립 때 각 divider를 해당 파트 앞으로 옮기고 텍스트만 채우면 된다. 검증(5단계)에서 존재·개수를 확인한다.

---

## 워크플로우 (6단계)

### 1. 덱 파악
주제·주차(WEEK)·대상·발표자·**파트 구조**·대략의 슬라이드 아웃라인을 확인한다. 브리프가 없으면 짧게 질문한다. 콘텐츠 원천(정본 md 등)이 있으면 참조하되, **콘텐츠 정본 작성은 이 스킬의 일이 아니다**(사용자가 준다).

### 2. 스캐폴딩
```
python .claude/skills/likelion-deck/scripts/scaffold_session.py \
  --topic "<폴더명>" --week <N> --title "<한글 제목>" --presenter "<이름들>" --parts <파트수>
```
`세션/<폴더명>/` 을 만들고 스타터·`deck.css`·데모 `img/`를 복사, 이미지 경로 `../img/`→`img/` 치환, 표지/도입/아젠다 슬롯과 `<title>` 주입, `--parts N`이면 **번호매김된 part-divider N개**(아젠다 뒤에 연달아)를 생성, `_redirects` 생성, 루트 `README.md` 세션표에 행을 추가한다. **네비바·PDF·고정 템플릿은 손대지 않는다.** 조립 때 각 divider를 해당 파트 콘텐츠 앞으로 옮기고 `.pd-title/.pd-sub`를 채운다. 자세한 인자는 `--help`.

> **"한 장만" 요청** (전체 덱이 아니라 슬라이드 하나만): 스캐폴딩을 건너뛰고 3단계로 바로 간다 — 세션 헤더 골격(`.s-head`)과 `img/` 경로 관례를 유지한 채 그 `<section>`만 만든다.

### 3. 슬라이드 조립 — 시각화 우선 ★
슬라이드마다 **먼저 "이 정보, 도형이 나은가?"를 판단**한다. 이게 이 스킬의 핵심이다 — 자세한 판단 규칙과 사례는 **`references/visual-first.md`를 반드시 읽는다.**

- 정보가 **관계·포함·비교·흐름·위계·매핑(A→B)·전후·분류**면 → **텍스트로 나열하지 말고 도형 레이아웃**으로. (본보기: BM 9번째 슬라이드 = "BM ⊃ 수익모델"을 문장이 아니라 동심원 벤으로.)
- 어떤 레이아웃인지는 `references/layout-cheatsheet.md`(→ `덱_템플릿킷/00_레이아웃-선택가이드.md`)에서 상황→클래스로 고른다.
- 고른 레이아웃의 `<section>`을 **`덱_템플릿킷/layouts/카탈로그.html`에서 복사**해 붙이고 내용·이미지 파일명만 교체한다. (각 슬라이드 우하단 `.s-foot` 라벨 = 클래스명. 붙여넣은 뒤 그 라벨은 지운다.)
- 카탈로그에 딱 맞는 도형이 없으면 `deck.css` 토큰·프리미티브(원·카드·화살표·그리드)로 **새 도형을 조립**해도 된다 — 단 색·타이포 토큰을 지킨다.
- **파트 전환 필수 (§0-5)** — 각 파트의 **첫 슬라이드 앞에 그 파트의 `part-divider`를 반드시** 놓는다(맨 앞 1파트 포함). `scaffold --parts N`이 만든 N개를 각 파트 앞으로 옮기고, `.pd-dots`의 `is-active`를 현재 파트로, `PART n / N`·`.pd-title`·`.pd-sub`를 채운다. **파트 수 = divider 수.**
- 조립 문법(eyebrow 라벨·리듬 규칙·클래스 택소노미)은 `references/deck-assembly.md`.

### 4. 이미지 — codex imagegen 핸드오프
일러스트가 필요한 슬라이드엔 `<img class="asset …" src="img/slides/sNN_<concept>.png">` **슬롯만** 배치한다. 그다음:
```
python .claude/skills/likelion-deck/scripts/make_prompt_sheet.py 세션/<폴더명>/<덱>.html
```
이 명령이 덱의 이미지 슬롯을 스캔해 **Codex용 프롬프트 시트**(`세션/<폴더명>/이미지프롬프트.md`)를 만든다. 각 항목의 `SUBJECT`(그릴 대상)를 채운다 — 4블록 계약은 `references/image-and-deploy.md`(→ `덱_템플릿킷/images/공통이미지프롬프트.md`). **실제 생성은 사용자가 codex imagegen으로 실행**한다. 이 스킬은 여기서 멈춘다.

### 5. 검증
`.claude/launch.json`의 `static`(포트 8532)로 프리뷰한 뒤 preview 도구로 확인한다:
- 콘솔 에러 0 · 깨진 이미지 0(`img.naturalWidth===0` 없음) · 슬라이드 수 일치
- **`.controls .navbar` 존재** · **`.dl-btn` 존재하고 PDF 버튼이 1페이지에서만 보임**
- 고정 1·2·3이 스타터와 구조 동일(텍스트만 다름)
- **파트 전환 검증(§0-5)**: `part-divider` 개수 = 파트 수, 각 divider의 진행 도트 `is-active`가 올바른 파트 번호에 있는지 확인
- 대표 슬라이드 스크린샷으로 시각 확인

### 6. (선택) 배포 — 단일 파일
```
python .claude/skills/likelion-deck/scripts/inline_images.py 세션/<폴더명>/<덱>.html
```
이미지를 base64로 인라인해 `<덱>_배포.html`(단일 파일)을 만든다. 용량이 크면 `--downscale 900`로 다운스케일(3–8MB 목표). Netlify는 `_redirects`(루트 200 리라이트)로 드래그앤드랍 배포.

---

## 참조 파일 (필요할 때 읽기)

| 파일 | 언제 |
|---|---|
| `references/visual-first.md` ★ | **3단계 시작 전 항상** — 텍스트 vs 도형 판단 |
| `references/layout-cheatsheet.md` | 레이아웃 클래스 고를 때 |
| `references/deck-assembly.md` | 파트·eyebrow·리듬·클래스 문법, §0 불변요소 상세 |
| `references/image-and-deploy.md` | 이미지 프롬프트 계약 · 배포 상세 |

## 레이아웃 어휘 (deck.css 타입 클래스)
- **고정(그대로)**: `cover` · `s02-slide` · `s03-slide` · `part-divider`
- **텍스트형**: `center-msg-a` · `center-msg-b` · `center-v`(좌 본문+우 3D) · `remind-slide` · `three-card center-v` · `tbl canvas-fill`(+`note-grid`/`tag-block`) · `card-grid`(+`wide-12`)
- **도형형(시각화 우선)**: `venn-slide` · `actor-slide` · `compare-slide` · `flow-slide` · `reverse-slide` · `lean-slide canvas-fill` · `risk-slide` · `metric-slide canvas-fill` · `map-slide` · `price-slide`
- **클로징**: `concept-recap` · `closing`
