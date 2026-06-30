# BM 수익 모델 — HTML 강의 덱 상세 제작 계획서

> **이 문서의 목적** — Claude(또는 사람)가 이 계획서 **하나만 읽고** `business_revenue_model_summary.html`의 내용을 **단일 HTML 파일 슬라이드 덱(26장, 16:9)**으로 완성하고, **PDF로 다운로드**할 수 있게 만드는 데 필요한 모든 정보를 담는다.
>
> **절대 규칙 3가지**
> 1. 슬라이드 **1·2·3페이지**는 [`img/1page.png`](../img/1page.png) · [`img/2page.png`](../img/2page.png) · [`img/3page.png`](../img/3page.png)와 **무조건 동일**하게 만든다(텍스트·배치·색 픽셀 단위 재현).
> 2. 슬라이드 본문 내용은 **오직 `business_revenue_model_summary.html`** 에서만 가져온다(외부 사실·수치 추가 금지).
> 3. 첨부 템플릿(상단 헤더 + 색상 팔레트)을 **모든 슬라이드에 일관 적용**한다.

---

## 0. 한눈에 보기

| 항목 | 값 |
|---|---|
| 산출물 | **개발본** `BM_수익모델_강의덱.html`(이미지는 `img/slides/*.png` 상대참조) + **배포본** `BM_수익모델_강의덱_배포.html`(이미지·폰트를 base64 내장한 **자체 포함 단일 파일** — 학생에게 이 파일 하나만 주면 됨, §1.6) |
| 슬라이드 수 | **26장**(고정 3장 + 본문 23장) |
| 화면 비율 | **16:9**, 슬라이드 기준 캔버스 **1280 × 720 px** |
| PDF 출력 | 화면의 **"PDF 다운로드" 버튼** → `window.print()` → 브라우저 "PDF로 저장"(여백 없음·배경 그래픽 켜기). 정확한 16:9 벡터 페이지로 떨어짐 |
| 폰트 | Pretendard(웹폰트) → 시스템 한글 폰트 폴백 |
| 이미지 | **✓ 생성 완료 — `img/slides/`에 24개 투명 PNG 존재**(§5.0 인벤토리). 빌드 시 **새로 만들지 말고 이 파일을 그대로 참조**한다(프롬프트는 재생성용 참고 §5). |
| 색상 | 첨부 팔레트 + `design.md` + 1·2·3페이지에서 추출한 정확 HEX(§3) |
| 디자인 기준 | `design.md` 디자인 시스템 + 1·2·3페이지 헤더 템플릿 |

### 슬라이드 ↔ HTML 매핑 요약

| # | 슬라이드 | 파트(아젠다) | HTML 출처 |
|---|---|---|---|
| 1 | 표지 (Cover) | — | = `img/1page.png` |
| 2 | 도입 (Intro) | — | = `img/2page.png` |
| 3 | 오늘 배우게 될 것 (Agenda) | — | = `img/3page.png` |
| 4 | "그래서 이거 어떻게 돈 벌어요?" | ① BM이 필요한 이유 | `#why` |
| 5 | 1주차 역기획, 한 발 더 | ① | `#why` |
| 6 | 좋은 기획은 화면에서 끝나지 않는다 | ① | `#why`(hero stat-cards) |
| 7 | 비즈니스 모델 ⊃ 수익 모델 | ② BM과 수익 모델 구분 | `#concept` |
| 8 | 운영 설계도 vs 계산대 | ② | `#concept` |
| 9 | 예시: AI 마케팅 서비스 | ② | `#concept` |
| 10 | 발명이 아니라 선택과 조합 | ③ 수익 모델 이해와 선택 | `#models` |
| 11 | 15개 수익 모델 메뉴판 (1/2) | ③ | `#models` |
| 12 | 15개 수익 모델 메뉴판 (2/2) | ③ | `#models` |
| 13 | 워밍업: 역기획으로 수익 포인트 읽기 | ③ | `#warmup` |
| 14 | 쓰는 사람 ≠ 내는 사람 | ③ | `#warmup` |
| 15 | 수익 모델 고르는 5가지 질문 | ③ | `#choose` |
| 16 | "돈 내는 사람 = 쓰는 사람인가?" | ③ | `#choose` |
| 17 | 린캔버스: 한 장(9칸)에 정리 | ④ Lean Canvas로 정리 | `#leancanvas` |
| 18 | 팀 프로젝트 선정 | ④ | `#leancanvas` |
| 19 | 린캔버스 9칸, 채우는 순서 | ④ | `#leancanvas` |
| 20 | 이 수익이 성립하려면? (가장 위험한 가정) | ④ | `#leancanvas` |
| 21 | 수익 모델을 검증하는 핵심 지표 | ④ ⑧칸 채우기 | `#metrics` |
| 22 | 6개 다 보지 말고, 딱 1개만 | ④ | `#metrics` |
| 23 | 가격은 감이 아니라 전략이다 | 보너스 | `#pricing` |
| 24 | 흔한 오해와 수정 문장 | 마무리 | `#mistakes` |
| 25 | 발표에서 안전한 문장 | 마무리 | `#mistakes` |
| 26 | 클로징 (오늘 기억할 한 가지) | — | `#why` 결론 + `#sources` |

> §9 강의 운영안(강사용)·§10 출처 표는 **학생용 본 덱에서 슬라이드로 만들지 않는다**(§10 검증 메시지만 클로징 S26에 한 줄 반영).

---

## 1. 기술 사양 (HOW TO BUILD)

### 1.1 파일 구조

```
BM/
├─ BM_수익모델_강의덱.html      ← 산출물(단일 HTML, 모든 슬라이드 포함)
└─ img/
   ├─ 멋사로고.png               ← 제공됨(헤더/표지 로고)
   ├─ 메인 이미지.png            ← 제공됨(표지 3D 타일)
   ├─ 1page.png 2page.png 3page.png  ← 재현 기준(레퍼런스)
   └─ slides/                    ← 새로 생성하는 슬라이드 3D 에셋(투명 PNG)
      ├─ s02_bm-puzzle.png  s04_money-question.png … s26_recap-glow.png
```

- **단일 HTML**: 마크업·CSS·JS는 모두 한 `.html` 파일에 인라인. **개발 중에는** 이미지를 `img/…` 상대경로로 참조(가볍고 수정 빠름). **학생 배포본은 §1.6의 자체 포함 빌드**(이미지·폰트를 base64로 .html 안에 내장)로 만들어, **`.html` 파일 하나만 줘도** 이미지·레이아웃이 그대로 보이게 한다.
  > ▲ 상대경로 개발본은 `.html`만 떼어 주면 **이미지가 안 뜬다**(옆 `img/` 폴더가 없으므로). 학생 배포에는 반드시 §1.6 배포본을 쓴다.
- **경로 안정성(필수)**: `메인 이미지.png`(공백+한글)·`멋사로고.png`(한글)는 일부 PDF 엔진/뷰어에서 경로가 깨진다. 원본은 그대로 보존하되 **빌드 1단계에서 ASCII 사본을 만들어 HTML/CSS는 그 사본만 참조한다**(이게 기본 방식, 추측 금지):
  ```bash
  cp "img/멋사로고.png"  img/logo.png
  cp "img/메인 이미지.png" img/main-tiles.png
  ```
  → 모든 마크업은 `img/logo.png`·`img/main-tiles.png`만 사용. (완전 인라인이 필요하면 §1.6 base64로 대체.)

### 1.2 슬라이드 캔버스 & 인쇄 규격

- 1 슬라이드 = `.slide` 요소, **고정 1280 × 720 px**(16:9). 내부 좌표는 이 캔버스 기준으로 절대/플렉스 배치.
- 화면(스크린)에서는 슬라이드를 세로로 쌓아 가운데 정렬(어두운 회색 배경 위 카드처럼) → 스크롤하며 검토.
- 인쇄(PDF)에서는 1 슬라이드 = 1 페이지, 여백 0.

```css
/* ===== 슬라이드 프레임 & 인쇄 ===== */
:root{ --sw:1280px; --sh:720px; }
*{ box-sizing:border-box; }
html,body{ margin:0; padding:0; }
body{ font-family:"Pretendard","Pretendard Variable",-apple-system,"Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",sans-serif;
  letter-spacing:-0.02em; color:var(--ink); }
.slide{ position:relative; width:var(--sw); height:var(--sh); overflow:hidden;
  background:#fff; break-after:page; }                 /* 모던 속성만(레거시 page-break-after와 충돌 방지) */
.slide:last-child{ break-after:auto; }                 /* 마지막 슬라이드 뒤 빈 페이지(27p) 방지 */

@media screen{
  body{ background:#2b2f36; padding:28px 0; }
  .deck{ display:flex; flex-direction:column; align-items:center; gap:26px; }
  .slide{ box-shadow:0 18px 50px rgba(0,0,0,.45); border-radius:6px; }
}
@media print{
  @page{ size:1280px 720px; margin:0; }
  /* ★ 필수: 어두운 표지(S01·S26 #1A1A1A)·콜아웃 배경이 PDF에서 흰색으로 날아가지 않게 */
  html,body,.slide,.slide *{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  body{ background:#fff; padding:0; }
  .deck{ display:block; gap:0; }
  .slide{ box-shadow:none; border-radius:0; margin:0; }
  .dl-btn{ display:none !important; }
}
```

> **검증된 동작**: Chrome/Edge에서 `@page{size:1280px 720px;margin:0}` + `.slide{width:1280px;height:720px}` 조합은 1슬라이드=1페이지로 정확히 인쇄된다. 인쇄 대화상자에서 **여백=없음, 배경 그래픽=켬, 배율=100%(맞춤 아님)**, 대상=PDF로 저장.
>
> **브라우저**: PDF 내보내기는 **Chrome 또는 Edge 권장**. Safari/Firefox는 `@page{size:px}`·배경 처리 동작이 달라 16:9가 어긋날 수 있으니, 산출물 검수와 발표용 PDF 생성은 Chrome/Edge에서 한다.

### 1.3 PDF 다운로드 버튼

화면 우하단 고정 버튼(인쇄 시 숨김). 클릭하면 인쇄 대화상자가 열리고 사용자가 "PDF로 저장"을 고른다.

```html
<button class="dl-btn" onclick="window.print()">↓ PDF 다운로드</button>
```
```css
.dl-btn{ position:fixed; right:22px; bottom:22px; z-index:99;
  background:var(--cobalt); color:#fff; border:0; border-radius:999px;
  padding:14px 22px; font:700 16px/1 "Pretendard",sans-serif; cursor:pointer;
  box-shadow:0 10px 26px rgba(48,96,195,.45); }
.dl-btn:hover{ filter:brightness(1.06); }
```

- **대안(원클릭 파일 다운로드)**: 인터넷 사용 가능 시 `html2pdf.js`(CDN)로 버튼이 직접 `.pdf`를 내려받게 할 수 있다. 단 래스터라이즈되어 텍스트가 비선택·약간 흐려질 수 있으므로 **기본은 `window.print()` 방식**(벡터·선명·한글 안전)을 권장. html2pdf를 추가한다면 슬라이드 폭 1280px 기준 `html2canvas:{scale:2}`, `jsPDF:{unit:'px',format:[1280,720],orientation:'landscape'}`로 슬라이드마다 `addPage`.

### 1.4 폰트

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
```
- 굵기: 제목 ExtraBold(800), 부제/강조 Bold(700), 본문 Medium/SemiBold(500~600).
- 온라인이면 위 CDN으로 충분.
- **오프라인 발표 주의**: 시스템 폴백(`Apple SD Gothic Neo`/`Noto Sans KR`/`Malgun Gothic`)은 **800(ExtraBold) 자체 굵기가 없는 경우가 많아** 제목이 얇게 보일 수 있다. → 오프라인 제출/발표가 예정이면 Pretendard `Bold`·`ExtraBold` `.woff2`를 base64로 `@font-face`에 **인라인(강력 권장)**. 제목은 폴백에서도 `font-weight:800`을 유지(브라우저 합성 볼드로라도 굵게).

### 1.5 빌드 순서(권장)

1. **이미지 에셋은 생성 완료 — `img/slides/`에 24개 PNG가 이미 있다(§5.0 인벤토리). 새로 만들지 말고 그대로 사용한다.** (재생성·교체가 필요할 때만 §5 프롬프트 사용.)
2. CSS 베이스(§1.2, §4) 작성 → 헤더/컴포넌트 컴포넌트화.
3. **S01·S02·S03을 레퍼런스와 1:1 대조**하며 먼저 완성(헤더·표지 컴포넌트가 여기서 확정됨).
4. S04~S26을 §6 슬라이드 스펙대로 작성(텍스트는 HTML 원문 그대로 복사).
5. 브라우저에서 전체 스크롤 검토 → 인쇄 미리보기로 26페이지 16:9 확인 → §7 체크리스트.
6. **배포 빌드(§1.6)**: 이미지(필요 시 폰트)를 base64로 내장한 `BM_수익모델_강의덱_배포.html` 1개 생성 → **그 `.html`만 따로 열어** 이미지가 다 뜨는지 확인 후 학생에게 배포.

### 1.6 배포 빌드 — 자체 포함 단일 파일 (학생 배포 기본값)

**왜**: 상대경로(`img/…`) 개발본은 `.html`만 떼어 주면 이미지가 안 뜬다. 학생에게 **파일 하나만** 줘도 그대로 보이게 하려면, 빌드 마지막에 **모든 이미지·(선택)폰트를 base64 data URI로 .html 안에 내장**한다.

**무엇이 바뀌나**: `<img src="img/slides/s04....png">` → `<img src="data:image/png;base64,iVBOR...">`, CSS `url("img/main-tiles.png")` → `url("data:image/png;base64,...")`. 결과물 `BM_수익모델_강의덱_배포.html` 하나면 오프라인·메일·USB 어디서나 동일하게 보인다.

**후처리 스크립트(예: Python)** — 개발본 HTML의 모든 `img/...` 참조를 data URI로 치환:
```python
import re, base64, mimetypes, pathlib
src = pathlib.Path("BM_수익모델_강의덱.html").read_text(encoding="utf-8")
def datauri(path):
    p = pathlib.Path(path)
    mime = mimetypes.guess_type(p.name)[0] or "image/png"
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()
# 1) <img src="img/...">  2) url("img/...") / url(img/...)  모두 치환
src = re.sub(r'(src=)(["\'])(img/[^"\']+)\2',
             lambda m: f'{m.group(1)}{m.group(2)}{datauri(m.group(3))}{m.group(2)}', src)
src = re.sub(r'(url\()(["\']?)(img/[^"\')]+)\2(\))',
             lambda m: f'{m.group(1)}{m.group(2)}{datauri(m.group(3))}{m.group(2)}{m.group(4)}', src)
pathlib.Path("BM_수익모델_강의덱_배포.html").write_text(src, encoding="utf-8")
print("배포본 생성 완료")
```

**파일 크기 관리(권장)**: 투명 PNG 24장을 그대로 내장하면 10~25MB가 될 수 있다. 내장 전에:
- **다운스케일** — 에셋은 실제 230~760px로 표시되므로 가로 ~900px 이하로 리샘플(`Pillow`로 일괄).
- **압축** — `pngquant`/`oxipng`로 50~70% 감량.
- → 보통 **3~8MB**로 떨어져 메일·USB 배포가 쾌적해진다.

**폰트까지 완전 오프라인**이 필요하면 Pretendard `Bold`·`ExtraBold` `.woff2`도 base64로 `@font-face`에 내장(§1.4). 그렇지 않으면 시스템 한글 폰트 폴백을 허용.

> 요약: **개발본**(상대경로·가벼움) → 검수 → **배포본**(`_배포.html`·자체 포함) 1개를 만들어 학생에게 전달. PDF가 필요하면 개발본에서 한 번 내보내면 된다.

---

## 2. 레이아웃 패턴 (design.md 기반)

각 슬라이드는 아래 패턴 중 하나를 따른다(§6에 슬라이드별로 명시).

- **Cover** — 어두운 배경 표지(S01 전용).
- **Intro** — 흰 배경 + 헤더, 좌측 큰 제목/부제/본문, 우하단 3D 에셋(S02).
- **Agenda** — 좌측 "오늘 배우게 될 것" + 우측 번호 항목(S03).
- **Center Message** — 중앙/좌측 큰 한 문장(핵심 질문·핵심 메시지). (S04, S16, S25)
- **Text + Illustration** — 좌측 제목+본문/불릿/콜아웃, 우측 3D 에셋. (대부분의 본문 슬라이드)
- **Table** — 제목 + 풀폭 표, 이미지는 코너 spot. (S8·S11·S12·S15·S19·S24 등)
- **Closing** — 어두운 배경 마무리(S26).

공통 규칙(design.md): 한 슬라이드 = 하나의 메시지 · 큰 제목 + 넓은 여백 · 핵심 단어 1~2개만 파랑 · 오렌지/빨강은 "주의/오류"에만 · 이미지는 본문을 가리지 않게 우측 빈 영역.

> **반응형/뷰포트**: 이 덱은 **발표·PDF 전용 고정 캔버스(1280×720)** 다 — 모바일 리플로우는 요구되지 않는다(요구사항도 아님). 좁은 화면에서 검토만 편하게 하려면 화면(screen)에서만 슬라이드를 축소 표시하는 옵션 규칙을 둘 수 있다(인쇄·PDF에는 영향 없음): `@media screen and (max-width:1340px){ .slide{ transform:scale(calc((100vw - 24px)/1280)); transform-origin:top center; } }`. PDF는 항상 16:9 가로(landscape) 1280×720 페이지로 떨어진다.

---

## 3. 디자인 시스템 — 색상 · 타이포

### 3.1 색상 토큰 (첨부 팔레트 + design.md + 1·2·3페이지 추출값)

> 1·2·3페이지에서 실제로 쓰인 블루는 `#3060C3` 계열이다(번호 원형·섹션 타이틀·강조 바). 표지 "UX/UI"는 더 밝은 일렉트릭 블루다. **고정 슬라이드(S01~S03)는 아래 추출값을 그대로 써서 "동일"을 보장**하고, 나머지 슬라이드도 같은 토큰으로 통일한다.

```css
:root{
  --white:#FFFFFF;
  --cover-bg:#1A1A1A;     /* 표지·클로징 배경 */
  --ink:#141821;          /* 본문 기본 잉크(거의 검정) */
  --black:#000000;        /* 큰 제목 */
  --cobalt:#3060C3;       /* ★ 주 강조: 번호원형·섹션타이틀·강조바·핵심키워드 */
  --electric:#2F6BF8;     /* 표지 'UX/UI', 강한 액센트 */
  --ice:#8EC3FF;          /* 헤더 라인·표지 한글 타이틀·소프트 강조 */
  --periwinkle:#92ADF1;   /* 3D 에셋 보조 톤(일러스트 내부) */
  --navy:#233B66;         /* 3D 에셋 깊이 */
  --gray-700:#4F4F4F;     /* 본문 보조 설명 */
  --gray-400:#9A9A9A;     /* 캡션·약한 설명 */
  --surface:#F3F5F8;      /* 카드/패널 배경 */
  --line:#E5E8F0;         /* 구분선·테두리 */
  --th:#F2F5FB;           /* 표 헤더 배경 */
  --blue-soft:#EEF2FF;    /* 파란 콜아웃 배경 */
  --green:#0F766E; --green-soft:#E8F7F5;   /* 토론/예시 콜아웃 */
  --yellow-soft:#FFF8DB; --yellow-line:#F3E5A6; /* 순서주의 콜아웃 */
  --orange:#F84818; --orange-soft:#FFF1EA;  /* 주의/경고 */
  --red:#D80000; --red-soft:#FFF1F0;        /* 오류/틀린 예시 */
}
```

색 사용 비율(흰 배경 슬라이드): 흰색 70~80% · 검정/회색 텍스트 15~20% · 파랑 강조 5~10% · 오렌지/빨강 3% 이하. 한 슬라이드에 파랑·오렌지·빨강을 동시에 강하게 쓰지 않는다.

> **두 개의 코발트(의도된 구분 — 충돌 아님)**:
> ① **슬라이드 UI 코발트 `#3060C3`** — HTML 텍스트/도형(헤더 라인·번호 원형·섹션 타이틀·강조 바·표 헤더 글자·제목 강조). 1·2·3페이지에서 추출한 값이라 **고정 슬라이드와 정확히 일치**.
> ② **3D 에셋 코발트 `#0066CC`** — `img/slides/*.png` 안의 코발트 액센트. [`이미지프롬프트_BM덱.md`](이미지프롬프트_BM덱.md) 자산 라이브러리 표준값이라 **기존 덱 에셋과 톤 일치**.
> 둘은 같은 블루 패밀리의 인접색이라 나란히 둬도 이질감이 없고, 본 덱에서는 **의도적으로 그대로 둔다**(에셋은 투명 PNG 오버레이라 별도 레이어). → **HTML에는 `#3060C3`만, 이미지 프롬프트에는 `#0066CC`만** 쓴다.

**토큰 → 사용처 매핑**

| 토큰 | 주 사용처(어디에 적용하나) |
|---|---|
| `--cobalt #3060C3` | `.s-eyebrow`, `.num-circle`, 섹션 타이틀, 제목 내 `.hl`, `.accent-bar`, `table.t th` 글자, `.s-body strong`, `.dl-btn` |
| `--electric #2F6BF8` | 표지 `UX/UI`(`.track .ux`) |
| `--ice #8EC3FF` | `.s-line`(헤더 라인), 표지 한글 타이틀(`.ko`), 소프트 강조 |
| `--black #000` / `--ink #141821` | 큰 제목 / 본문 기본 잉크·리드 |
| `--gray-700 #4F4F4F` | `.s-body`·부제·`table.t td` 본문 |
| `--gray-400 #9A9A9A` | 캡션, 발표자명 |
| `--surface #F3F5F8` / `--line #E5E8F0` / `--th #F2F5FB` | `.card.surface` 배경 / 테두리·구분선 / `table.t th` 배경 |
| `--blue-soft #EEF2FF` | `.callout.blue` 배경, `.timing` 배경 |
| `--green / --green-soft` | `.callout.green`(토론·예시) |
| `--yellow-soft / --yellow-line` | `.callout.yellow`(순서 주의) |
| `--orange #F84818 / --orange-soft` | `.callout.orange`(주의), `.hot` 태그, 틀린 표현 강조 |
| `--red #D80000 / --red-soft` | `.callout.red`, 틀린 예시 열 강조 |

### 3.2 타이포 스케일 (1280×720 캔버스 기준 px)

| 역할 | 크기/굵기 | 색 | 비고 |
|---|---|---|---|
| 표지 한글 타이틀 | 64 / 800 | `--ice` | "기획 & 디자인" |
| 표지 WEEK | 40 / 800 | white | "WEEK 11." |
| 슬라이드 제목 | 40~46 / 800 | `--black`/`--cobalt` | 1~2줄 |
| 섹션 eyebrow | 17 / 700 | `--cobalt` | "PART n · …" |
| 부제/리드 | 24~28 / 700 | `--ink`/`--gray-700` | |
| 본문 | 18~20 / 500 | `--gray-700` | 5줄 넘으면 분리 |
| 표 본문 | 15~16 / 500 | `--ink` | |
| 캡션 | 13~14 / 500 | `--gray-400` | |
| 번호 숫자 | 24~28 / 800 | white | 번호 원형 안 |

---

## 4. 공통 컴포넌트 & 헤더 템플릿 (CSS 스켈레톤)

### 4.1 상단 헤더 (S02~S26 전부 적용)

레퍼런스(2·3페이지) 그대로: **로고 + `SKU LIKELION`(검정) + 가로 아이스블루 라인 + 우상단 2줄 팀명**.

```html
<header class="s-head">
  <img class="s-logo" src="img/logo.png" alt="">
  <span class="s-brand">SKU LIKELION</span>
  <span class="s-line"></span>
  <div class="s-team">UX/UI Team<br>Official LIKELION&nbsp;&nbsp;at&nbsp;&nbsp;SKU</div>
</header>
```
```css
.s-head{ position:absolute; top:34px; left:56px; right:56px; height:40px;
  display:flex; align-items:center; gap:14px; }
.s-logo{ width:40px; height:40px; object-fit:contain; }
.s-brand{ font-weight:800; font-size:26px; color:var(--black); letter-spacing:-.01em; }
.s-line{ flex:1; height:2px; background:var(--ice); margin:0 18px; border-radius:2px; }
.s-team{ font-size:15px; line-height:1.35; color:var(--ink); text-align:right;
  white-space:nowrap; font-weight:500; }
```
- 헤더는 본문보다 약하게. 라인은 얇게(2px). 헤더 텍스트는 검정만(어두운 배경 슬라이드는 흰색).
- 표지 S01은 라인 없이 로고+`SKU LIKELION`/`UX/UI TRACK` 2줄 스택(§6 S01 참조).

**표지/클로징용 헤더 변형(어두운 배경 · 흰 텍스트)** — `.cover-head`/`.on-dark` 클래스 정의:
```css
.s-head.cover-head{ align-items:flex-start; }   /* 라인 없는 2줄 스택형 */
.cover-head .s-line{ display:none; }
.s-brand.on-dark, .s-team.on-dark{ color:#fff; }
.brand-stack{ display:flex; flex-direction:column; gap:2px; }
.track{ font:800 26px/1 "Pretendard",sans-serif; color:#fff; }
.track .ux{ color:var(--electric); }
```
- S26(클로징)도 어두운 배경이면 헤더 텍스트/로고를 흰색으로(또는 좌상단 로고만 두고 생략).

### 4.2 본문 골격 · eyebrow · 제목 · 강조 바

```css
.s-body-wrap{ position:absolute; left:64px; top:132px; width:560px; } /* 좌측 텍스트 컬럼 */
.s-eyebrow{ font-weight:700; font-size:17px; color:var(--cobalt); margin:0 0 10px; }
.s-title{ font-weight:800; font-size:44px; line-height:1.18; color:var(--black);
  letter-spacing:-.035em; margin:0 0 18px; }
.s-title .hl{ color:var(--cobalt); }          /* 제목 내 파란 강조 */
.accent-bar{ width:120px; height:14px; border-radius:8px; background:var(--cobalt);
  margin:6px 0 22px; }                          /* 제목 아래 강조 막대(Agenda 등) */
.s-lead{ font-weight:700; font-size:26px; color:var(--ink); margin:0 0 16px; }
.s-body{ font-size:19px; line-height:1.7; color:var(--gray-700); }
.s-body strong{ color:var(--cobalt); font-weight:700; }
```

### 4.3 번호 원형 · 아젠다 항목

```css
.num-circle{ width:64px; height:64px; border-radius:50%; background:var(--cobalt);
  color:#fff; font-weight:800; font-size:26px; display:grid; place-items:center; flex:0 0 auto; }
.agenda-item{ display:flex; gap:22px; align-items:flex-start; }
.agenda-item h3{ margin:0 0 4px; font-size:26px; font-weight:800; color:var(--cobalt); }
.agenda-item p{ margin:0; font-size:18px; color:var(--gray-700); }
```

### 4.4 콜아웃 · 카드 · pill · 타이밍 · 표 · 강조 태그

```css
.callout{ border-radius:16px; padding:16px 20px; margin:14px 0; border:1px solid var(--line);
  background:#fbfcff; font-size:17px; line-height:1.6; }
.callout strong{ color:var(--cobalt); }
.callout.blue{ background:var(--blue-soft); border-color:#DCE4FF; }
.callout.green{ background:var(--green-soft); border-color:#C9EBE6; }
.callout.orange{ background:var(--orange-soft); border-color:#FFD9C7; }
.callout.orange strong{ color:#B9471E; }
.callout.yellow{ background:var(--yellow-soft); border-color:var(--yellow-line); }
.callout.red{ background:var(--red-soft); border-color:#FFD0CC; }

.card{ background:#fff; border:1px solid var(--line); border-radius:18px; padding:20px; }
.card.surface{ background:var(--surface); }
.grid-2{ display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }

.pill{ display:inline-flex; align-items:center; border:1px solid var(--line); background:#fff;
  color:var(--gray-700); border-radius:999px; padding:7px 12px; font-size:13px; font-weight:700; }
.timing{ display:inline-block; font-size:14px; font-weight:800; color:var(--cobalt);
  background:var(--blue-soft); border-radius:999px; padding:5px 12px; margin:0 0 10px; }
.hot{ display:inline-block; font-size:11px; font-weight:800; padding:2px 7px; border-radius:999px;
  background:var(--orange-soft); color:#B9471E; margin-left:6px; vertical-align:middle; }

table.t{ width:100%; border-collapse:collapse; font-size:15px; border-radius:12px; overflow:hidden; }
table.t th,table.t td{ border:1px solid var(--line); padding:10px 12px; vertical-align:top; text-align:left; }
table.t th{ background:var(--th); color:var(--cobalt); font-weight:800; white-space:nowrap; }
table.t tr:nth-child(even) td{ background:#fcfdff; }
.model-table td:nth-child(1){ text-align:center; font-weight:800; color:var(--cobalt); }
.model-table td:nth-child(2){ font-weight:800; color:var(--ink); }
```

### 4.5 3D 에셋 배치 헬퍼

```css
.asset{ position:absolute; }                 /* 슬라이드별 right/top/width 지정 */
.asset.hero{ right:40px; bottom:56px; width:430px; }   /* 우하단 히어로 기본값 */
.asset.spot{ right:48px; top:120px; width:240px; }     /* 코너 스팟 기본값 */
/* 표가 풀폭이라 코너에만 얹는 슬라이드 — 슬라이드별 override */
.asset.s11{ right:40px;  top:104px;  width:230px; }    /* 15모델 표 1/2 — 우상단 코너 */
.asset.s12{ right:40px;  top:150px;  width:300px; }    /* 조합 모듈 — 우측 중앙 */
.asset.s16{ right:44px;  bottom:60px; width:300px; }   /* 돈 내는 사람=쓰는 사람 — 우하단 스팟 */
.asset.s19{ right:40px;  top:120px;  width:280px; }    /* 9칸 순서 — 우측 코너 스팟 */
.asset img{ width:100%; height:auto; display:block; }
```
- 본문 텍스트 컬럼(`.s-body-wrap` 폭 560px)과 **겹치지 않게** 우측 빈 영역에 둔다. 표가 풀폭인 슬라이드는 `spot`만 코너에.
- 어두운 배경(S01·S26)에서는 투명 PNG의 코발트 림광이 자연스럽게 떠 보인다.
- **콜아웃 색 기본값**: §6 슬라이드 스펙에 색이 명시된 곳(blue/green/orange/yellow/red)은 그 클래스를 그대로 쓰고, **명시가 없으면 기본 `.callout`(무채색)** 을 쓴다.

### 4.6 S02 퍼즐 일러스트 확보(2페이지 동일 재현)

2페이지 우하단의 "사람→퍼즐(선물·체크·기어·사람)→달러 코인 + 코발트 화살표 아치" 일러스트는 **2페이지와 동일**해야 한다.

**결정 규칙(이 순서대로, 분기 없이 따른다):**
1. 먼저 **크롭 + 자동 여백 트림**을 실행한다(아래 스크립트).
2. 트림 결과의 **가로폭이 700px 이상**이고 퍼즐·세 화살표가 온전히 담겼으면 → **그 크롭을 그대로 채택**(생성하지 말 것). "2페이지와 동일"이 1순위이므로 여기서 끝낸다.
3. 일부가 잘려 빠졌으면 크롭 박스를 넓혀 **1회만 재시도**.
4. 그래도 부적합할 때**만** 맨 아래 생성 프롬프트로 새 에셋을 만든다.

- **(1순위) 크롭 + 자동 트림**:
  ```python
  from PIL import Image, ImageChops
  im = Image.open("img/2page.png").convert("RGB")
  w, h = im.size                                  # 1912 x 1091
  crop = im.crop((int(w*0.50), int(h*0.50), w, h))    # 우하단 일러스트 영역
  bg = Image.new("RGB", crop.size, (255, 255, 255))   # 흰 여백 자동 트림
  bbox = ImageChops.difference(crop, bg).getbbox()
  if bbox: crop = crop.crop(bbox)
  crop.save("img/slides/s02_bm-puzzle.png")
  print("trimmed size:", crop.size)               # 가로 700px↑ → 채택
  ```
- **(4순위·대안) 생성**: 위 절차로도 부적합할 때만 아래 프롬프트로 새 에셋 생성(스타일 일관·투명 PNG).
  **이미지** · 파일명 `img/slides/s02_bm-puzzle.png` · 역할 hero(대안 생성용)

- 배치: 우하단, 폭 약 720px. 본문(좌측) 가리지 않게. ※ 2page와 동일성 위해 크롭이 1순위, 본 프롬프트는 대안.
- 돕는 점: 사람→가치 퍼즐(선물·체크·기어·사람)→돈으로 이어지는 흐름으로, 서비스가 가치를 만들어 수익으로 잇고 순환한다는 도입 메시지를 한눈에 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A friendly left-to-right business-model scene matching a value-creation flow. On the left, a small cluster of simple rounded stylized people (soft minimal features, NO realistic faces) made of glossy ice-blue (#8EC3FF) plastic. A cobalt-blue (#0066CC) arrow points right into a central four-piece jigsaw cube assembled from frosted-glass and matte-plastic pieces; each of the four pieces carries one simple abstract emblem in soft relief — a rounded gift shape, a check mark, a gear, and a tiny group-of-people shape — all smooth and markless. Another cobalt arrow points right into a small frosted-glass card/box holding a single smooth BLANK cobalt coin and a low stack of plain blank disc tokens standing for money, with no engraving, no numerals, no currency symbols, no markings of any kind. One large soft cobalt arrow arcs over the top from the money back toward the people, implying value circulating. White, light-gray, ice-blue and cobalt only; deep-navy (#233B66) used solely for depth.
COMPOSITION: A horizontal flow people -> four-piece puzzle -> money reading clearly left to right across the right and lower-right of the frame, with the four-piece jigsaw cube as the central hero and the looping cobalt arc sweeping above it. The cluster floats freely on a transparent background with one soft drop-shadow beneath it and no base disk, pedestal, or tile. Upper-left soft light gives gentle highlights on the puzzle and coins. Keep the upper-left and left area generously empty for the slide title and body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

### 4.7 문서 셸 & 슬라이드 조립 템플릿 (그대로 복제해 쓰는 골격)

#### (1) 문서 셸 — 전체 골격
```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=1280">
  <title>BM: 비즈니스 모델과 수익 모델 — SKU LIKELION</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
  <style>/* ★ §1.2(프레임·인쇄) + §3(토큰·타이포) + §4(컴포넌트) CSS를 전부 여기에 인라인 */</style>
</head>
<body>
  <div class="deck">
    <section class="slide cover"> … S01 … </section>
    <section class="slide">      … S02 … </section>
    <!-- S03 … S26 까지 같은 방식으로 26개 -->
  </div>
  <button class="dl-btn" onclick="window.print()">↓ PDF 다운로드</button>
</body>
</html>
```
- 26개 슬라이드를 모두 `.deck` 안에 `<section class="slide …">`로 순서대로 넣는다.
- 모든 CSS는 `<head>`의 단일 `<style>`에 인라인(외부 .css 파일 만들지 않음).

#### (2) 본문 슬라이드 템플릿 — Text + Illustration (S05~S26 대부분 복제용)
```html
<section class="slide">
  <header class="s-head"> …§4.1 표준 헤더 그대로… </header>
  <div class="s-body-wrap">
    <p class="s-eyebrow">PART 1 · BM이 필요한 이유</p>
    <h2 class="s-title">좋은 기획은 <span class="hl">화면</span>에서 끝나지 않습니다</h2>
    <div class="s-body">
      <p>본문 한두 줄…</p>
      <div class="callout blue"><strong>오늘은</strong> 그중 ‘돈’ 부분을 책임집니다.</div>
    </div>
  </div>
  <img class="asset hero" src="img/slides/s06_value-revenue-cost.png" alt="">
</section>
```
> 헤더 → 좌측 텍스트 컬럼(`.s-body-wrap`: eyebrow→제목→본문/콜아웃) → 우측 `.asset`. 이 골격을 복제하고 §6의 텍스트·이미지 파일명만 갈아끼운다.

#### (3) 표 슬라이드 템플릿 (S08·S11·S12·S15·S19·S24)
```html
<section class="slide">
  <header class="s-head"> … </header>
  <div class="s-full">
    <p class="s-eyebrow">PART 3 · 수익 모델 이해와 선택</p>
    <h2 class="s-title">15개 수익 모델 메뉴판 (1/2)</h2>
    <table class="t model-table"> …§6의 표… </table>
  </div>
  <img class="asset s11" src="img/slides/s11_menu-cards-spot.png" alt="">  <!-- 코너 스팟만 -->
</section>
```
```css
.s-full{ position:absolute; left:64px; right:64px; top:118px; }   /* 풀폭 본문 컬럼 */
```

#### (4) Center Message 템플릿 (S04·S16·S25)
```html
<section class="slide">
  <header class="s-head"> … </header>
  <div class="center-msg">
    <p class="s-eyebrow">PART 3 · 수익 모델 이해와 선택</p>
    <h2 class="cm-title">“돈 내는 사람 = <span class="hl">쓰는 사람</span>인가?”</h2>
    <div class="callout blue"> …§6의 콜아웃… </div>
  </div>
  <img class="asset spot" src="img/slides/s16_payer-vs-user.png" alt="">
</section>
```
```css
.center-msg{ position:absolute; left:64px; right:64px; top:196px; max-width:900px; }
.cm-title{ font-weight:800; font-size:52px; line-height:1.22; letter-spacing:-.04em;
  color:var(--black); margin:0 0 22px; }
.cm-title .hl{ color:var(--cobalt); }
```

#### (5) ▲ 콘텐츠 높이(720px) — 필수 점검
- `.slide`는 **고정 720px + `overflow:hidden`** 이라, 넘치는 내용은 **잘려 보인다(다음 페이지로 안 넘어감)**. 특히 **행 많은 표(S11 8행·S12 7행·S19 9행) + 콜아웃** 조합.
- 빌드 시 각 슬라이드가 720px 안에 들어가는지 확인하고, 넘치면 **표 `font-size`(15→14)·`padding`(10→8)·줄간격 축소**로 맞춘다. 그래도 빠듯하면 슬라이드를 분리한다.

#### (6) 자잘한 결정(권장값)
- **페이지 번호(선택)**: 필요하면 우하단에 `<div class="s-foot">07 / 26</div>` + `.s-foot{ position:absolute; right:56px; bottom:24px; color:var(--gray-400); font:600 13px/1 "Pretendard",sans-serif; }`. 표지·클로징은 생략.
- **발표자 노트**: 슬라이드에 렌더하지 않는다. 필요하면 `<!-- 노트: … -->` 주석이나 `display:none` 레이어로만 둔다(§6에 적힌 "발표자 노트"는 강사 참고 메모이지 출력물이 아님).
- **기호는 전부 단색(monochrome)으로 통일**: 색 이모지는 PDF에서 두부(tofu)로 깨질 수 있어, 이 덱은 이미지/표/콜아웃 어디서나 **아래 단색 기호 범례만** 쓴다.

**단색 기호 범례**

| 의미 | 기호 | 쓰는 곳(기존 이모지) |
|---|---|---|
| 핵심 / 팁 | ◆ | 콜아웃 리드(기존 ◆·◆) |
| 오늘의 핵심 | ★ | 9칸 ⑥⑦ 상태·강조(기존 ★) |
| 실습 연결 | ◎ | 실습 연결 콜아웃(기존 ◎) |
| 주의 / 순서 주의 | ※ | 순서 주의 콜아웃(기존 ※) |
| 경고 | ▲ | 경고 콜아웃·문구(기존 ▲) |
| 조별 토론 / 예시 | ▷ | 토론·예시 리드(기존 ▷) |
| 옮겨 적기(반복) | ↻ | 9칸 상태(기존 ↻) |
| 짧게 | ▹ | 9칸 상태(기존 ▹) |
| 나중에 채움(보류) | ◇ | 9칸 ⑧ 상태(기존 ◇) |
| 체크 / 완료 | ✓ | 체크리스트·확인 |
| 다운로드 버튼 | ↓ | PDF 다운로드 버튼(기존 ↓) |
| 타이밍 pill | (아이콘 없이 텍스트) | 파란 pill로 구분(기존 제거) |

> 위 기호(◆ ★ ◎ ※ ▲ ▷ ↻ ▹ ◇ ✓ ↓)는 Pretendard·Noto·Malgun 등에서 모두 단색 글리프로 안정 렌더된다. §6 본문의 기존 이모지는 이 표대로 치환되어 있다.

---

## 5. 이미지 제작 가이드 (GPT 이미지 생성)

### 5.0 이미지 에셋 현황 — ✓ 생성 완료 (빌드 시 그대로 사용)

**24개 슬라이드 3D 에셋이 이미 생성되어 [`img/slides/`](../img/slides/)에 저장돼 있다.** 빌드할 때는 **새로 생성하지 말고 이 파일들을 `<img>`로 그대로 참조**한다. (§5.1~§5.3과 §6의 ```text``` 프롬프트는 **재생성·교체가 필요할 때만** 보는 참고자료다.)

- **참조 방법**: 각 슬라이드에 `<img class="asset …" src="img/slides/<파일명>" alt="">` — 파일명은 §6 각 슬라이드의 "**이미지**" 블록에 적힌 것과 **정확히 일치**한다. 배치 클래스(`hero`/`spot`/`s11`/`s12`/`s16`/`s19`)는 §4.5 참조.
- **검증 상태**: 전부 투명 PNG(RGBA), 1024~1536px, 글자·숫자 없음(코인·게이지·표 민무늬) 확인됨.
- **예외 — `s02_bm-puzzle.png`**: 2페이지 크롭이라 **흰 배경(불투명)**. 흰 배경인 S02 도입 슬라이드 전용이므로 투명이 아니어도 정상(그대로 사용).
- **배포 빌드 주의(§1.6)**: 이 에셋들은 1024~1536px 원본이다. base64 자체 포함 빌드 전에는 실제 표시 크기(가로 230~760px)에 맞춰 **가로 ~900px 이하로 다운스케일 + 압축**해 파일 크기를 줄인다.

**인벤토리(24개)** — 모두 존재 확인:

| 슬라이드 | 파일 | 슬라이드 | 파일 |
|---|---|---|---|
| S02 | `s02_bm-puzzle.png` (흰배경) | S15 | `s15_revenue-filter-funnel.png` |
| S04 | `s04_money-question.png` | S16 | `s16_payer-vs-user.png` |
| S05 | `s05_one-step-further.png` | S17 | `s17_lean-canvas-board.png` |
| S06 | `s06_value-revenue-cost.png` | S18 | `s18_pick-project.png` |
| S07 | `s07_revenue-is-one-slice.png` | S19 | `s19_canvas-9cells-order.png` |
| S08 | `s08_store-vs-register.png` | S20 | `s20_riskiest-assumption.png` |
| S09 | `s09_ai-revenue-merge.png` | S21 | `s21_metrics-dashboard.png` |
| S10 | `s10_revenue-menu.png` | S22 | `s22_pick-one-metric.png` |
| S11 | `s11_menu-cards-spot.png` | S23 | `s23_value-scale.png` |
| S12 | `s12_combine-modules.png` | S24 | `s24_misconception-fix.png` |
| S13 | `s13_magnify-revenue-point.png` | S25 | `s25_podium-script.png` |
| S14 | `s14_payer-coin-arc.png` | S26 | `s26_recap-glow.png` |

> S01(표지)·S03(아젠다)은 3D 에셋이 없다: S01은 제공된 `img/메인 이미지.png`(→`img/main-tiles.png`), S03은 번호 항목이 비주얼.

### 5.1 도구·형식·폴더

- 도구: **GPT 이미지 생성**(`gpt-image-1`). 옵션 `size:"1024x1024"`, `background:"transparent"`.
- 저장: **투명 배경 PNG**, 파일명은 각 슬라이드의 `파일명` 그대로 → `img/slides/`.
- 자동화(선택): [`슬라이드/CODEX_작업지시.md`](CODEX_작업지시.md) **안에 들어 있는** OpenAI Images 생성 스크립트 예시(별도 `gen_images.js` 파일은 없음 — 그 문서의 코드블록)를 그대로 쓰되, 정규식만 본 계획서 형식(슬라이드 헤더 `### S?\d\d` + 파일명 `img/slides/...` + ```text``` 블록)에 맞춰 조정한다. **수동이면** 각 ```text``` 블록을 복사해 GPT 이미지 생성에 붙여넣고 `img/slides/<파일명>`으로 저장하면 끝.

### 5.2 공통 스타일 계약 (모든 프롬프트가 공유)

[`슬라이드/이미지프롬프트_BM덱.md`](이미지프롬프트_BM덱.md)의 고정 스타일 계약을 그대로 따른다. 핵심:

- **룩**: 친근한 소프트 3D · 매끈한 무광 플라스틱 + 프로스티드 글래스 · 둥글둥글 · 좌상단 소프트광 · **받침 없이 공중에 뜬 투명 PNG**(베이스 디스크/받침대/타일 금지).
- **팔레트**: 흰색·연회색 + 아이스블루 `#8EC3FF` + 코발트 `#0066CC` + 깊이용 딥네이비 `#233B66`. **오렌지 `#F2541B`는 경고/오류 맥락에만**(S20 가장 위험한 가정, S24 틀린 표현).
- **텍스트·숫자 절대 금지**: 글자·숫자·한글·라벨·로고·워터마크 없음. **코인·차트·게이지·보드·리포트류는 반드시 "민무늬·눈금 없음·수치 없음·통화기호 없음"** 으로 묘사(이 가드는 각 프롬프트에 이미 포함됨).
- **다양성 허용**: 슬라이드마다 형태/구도는 자유(서로 달라도 됨). 공통 룩·팔레트·조명만 유지.
- 각 프롬프트는 `공통 도입 + MATERIAL&PALETTE + SUBJECT + COMPOSITION + RENDER + NEGATIVE`로 **자기완결**되어 있어 그대로 복사·붙여넣기 하면 된다.

> **오렌지 조항 해설**: 모든 프롬프트의 MATERIAL&PALETTE에 들어 있는 `Use orange (#F2541B) ONLY when a warning/alert ...` 문장은 자산 라이브러리의 **고정 계약**이자 *조건부 금지문*이다(경고가 아니면 오렌지 금지). 따라서 S04~S26의 비경고 슬라이드는 이 문장을 그대로 둬도 **오렌지가 들어가지 않는다** — 실제 오렌지는 **S20·S24의 SUBJECT에만** 등장한다. 일관성을 위해 이 공통 문장은 손대지 않는다.
> **권위(authoritative)**: 본 계획서의 ```text``` 프롬프트가 **이 HTML 26장 덱의 기준**이다. `이미지프롬프트_BM덱.md`는 *스타일 근거(룩·팔레트·무텍스트 가드)* 로만 참조하고, 슬라이드 매핑·파일명·배치는 본 계획서를 따른다.

### 5.3 생성 후 QA

- 글자/숫자가 박히면 프롬프트 끝에 `Absolutely no text, letters, or numbers anywhere — purely abstract shapes only.`를 덧붙여 최대 2회 재생성.
- **2회 재생성 후에도 글자가 남으면(루프 금지)**: (a) 이미지 편집기로 해당 영역을 지우거나 크롭, 또는 (b) 글자가 작아 발표 화면(1280px 폭)에서 식별 안 되면 그대로 쓰되 빌드 보고에 '알려진 한계'로 기록. 무한 재생성에 갇히지 말 것.
- 배경이 불투명하면 `background:"transparent"` 확인. 받침대/바닥 타일이 생기면 RENDER 문구를 강조해 재생성.
- 슬라이드에 얹은 뒤 **본문/표를 가리면 줄이거나 옮긴다**(가독성 우선).

---

## 6. 슬라이드별 상세 스펙

> 표기: **[패턴]** = §2 레이아웃 패턴, **[출처]** = HTML 섹션. 텍스트의 따옴표 안 문구는 **HTML 원문 그대로** 사용한다.

---

### S01 · 표지 (Cover) — `img/1page.png`와 동일

**[패턴] Cover · [출처] 템플릿(1page)**

- 배경: `--cover-bg` `#1A1A1A` 풀블리드.
- **좌상단 헤더(라인 없음)**: 로고(`멋사로고.png`) + `SKU LIKELION`(흰색, 800) — 1줄. 그 아래 2줄째 `UX/UI`(일렉트릭블루 `#2F6BF8`, 800) + ` TRACK`(흰색, 800).
- **우상단**: `UX/UI Team` / `Official LIKELION  at  SKU`(흰색, 2줄, 우측 정렬).
- **좌측 중앙**: `WEEK 11.`(흰색, 800, 40px) → 그 아래 `기획 & 디자인`(아이스블루 `#8EC3FF`, 800, 64px).
- **우측**: `메인 이미지.png`(반투명 3D 글래스 타일 3개)를 중앙하단→우상단 대각선으로 배치, 화면의 약 45% 차지, 우측 가장자리로 살짝 잘려도 됨.
- **우하단**: `노태경 김지유`(연회색 `#C9CDD3`, 20px).
- 표지에는 오렌지/빨강 금지. 흰색·블루만.

```html
<section class="slide cover">
  <header class="s-head cover-head">
    <img class="s-logo" src="img/logo.png" alt="">
    <div class="brand-stack">
      <span class="s-brand on-dark">SKU LIKELION</span>
      <span class="track"><b class="ux">UX/UI</b> TRACK</span>
    </div>
    <div class="s-team on-dark">UX/UI Team<br>Official LIKELION&nbsp;&nbsp;at&nbsp;&nbsp;SKU</div>
  </header>
  <div class="cover-title">
    <div class="week">WEEK 11.</div>
    <h1 class="ko">기획 &amp; 디자인</h1>
  </div>
  <img class="cover-asset" src="img/main-tiles.png" alt="">
  <div class="cover-presenter">노태경 김지유</div>
</section>
```
**표지 CSS(전체)** — `.cover-head`/`.on-dark`/`.track`은 §4.1 변형 블록과 함께 사용:
```css
.cover{ background:var(--cover-bg); }
.cover .s-head{ top:40px; }
.cover-title{ position:absolute; left:64px; top:300px; }
.cover-title .week{ color:#fff; font:800 40px/1 "Pretendard",sans-serif; }
.cover-title .ko{ color:var(--ice); font:800 64px/1.1 "Pretendard",sans-serif; margin:14px 0 0; }
.cover-asset{ position:absolute; right:0; bottom:30px; width:760px; }      /* = 메인 이미지.png(타일) */
.cover-presenter{ position:absolute; right:56px; bottom:40px; color:#C9CDD3;
  font:500 20px/1 "Pretendard",sans-serif; }
```
> 최종은 `img/1page.png`와 **나란히 놓고 위치·크기·색을 1:1로 맞춘다.**

- **이미지**: 표지 에셋 = 제공된 `img/메인 이미지.png`(→`img/main-tiles.png`). 별도 생성 불필요.

---

### S02 · 도입 (Intro) — `img/2page.png`와 동일

**[패턴] Intro · [출처] 템플릿(2page) = HTML hero**

- 흰 배경 + **표준 헤더**(§4.1).
- **eyebrow**: `11주차 기획시간!`(코발트 `#3060C3`, 700, 24px).
- **제목**: `BM: 비즈니스 모델과 수익 모델`(검정, 800, 48px).
- **리드**: `우리가 만든 서비스, 이거 어떻게 돈 벌어요?`(진한 잉크, 700, 26px).
- **본문 3줄**(회색 `#4F4F4F`, 500, 20px, 줄바꿈 그대로):
  ```
  서비스가 누구에게 어떤 가치를 주고
  어떤 방식으로 수익을 만들며
  어떻게 지속될 수 있는지 정리합니다.
  ```
- **우하단 일러스트**: §4.6의 `img/slides/s02_bm-puzzle.png`(2page 크롭 권장). 폭 약 720px, 본문(좌측) 안 가리게.
- 텍스트 좌측 컬럼은 `left:64px; top:150px` 근처에서 시작.

- **이미지**: `img/slides/s02_bm-puzzle.png` — §4.6 참조(크롭 우선, 생성은 대안).

---

### S03 · 오늘 배우게 될 것 (Agenda) — `img/3page.png`와 동일

**[패턴] Agenda · [출처] 템플릿(3page)**

- 흰 배경 + **표준 헤더**.
- **좌측**: 제목 `오늘 배우게 될 것`(검정, 800, 46px) → 그 아래 **강조 바**(코발트, 120×14, `.accent-bar`) → 본문 4줄(회색, 19px, 줄바꿈 그대로):
  ```
  서비스가 오래 지속되려면
  사용자에게 주는 가치뿐 아니라
  돈이 들어오고 나가는 구조까지
  설명할 수 있어야 합니다
  ```
- **우측**: 번호 항목 4개(번호 원형 `#3060C3`+흰 숫자 / 제목 코발트 800 / 설명 회색). 간격 동일.
  1. **BM이 필요한 이유** — 서비스가 왜 쓰이고 어떻게 지속되는지 이해하기
  2. **BM과 수익 모델 구분** — 사업 전체 구조와 돈이 들어오는 방식을 구분하기
  3. **수익 모델 이해와 선택** — 수익 모델을 살펴보고 서비스에 맞는 방식 고르기
  4. **Lean Canvas로 정리** — 고객, 가치, 수익원, 비용 구조를 한 장으로 정리하기
- 우측 항목 컬럼은 `left:660px`, 항목 4개를 세로 균등 배치. **최종은 `img/3page.png`와 1:1 대조.**
- **이미지**: 없음(번호 항목이 비주얼). 별도 생성 불필요.

---

### S04 · "그래서 이거… 어떻게 돈 벌어요?"

**[패턴] Center Message · [출처] `#why`**

- eyebrow: `PART 1 · BM이 필요한 이유`
- 제목(큰 인용, 좌측): **"그래서 이거… <span class=hl>어떻게 돈 벌어요?</span>"** (40~46px)
- 본문(작게): `발표 때 누군가 이렇게 묻습니다.` / 캡션: `"음… 광고 붙이면 되지 않을까요?"라고 답하는 순간, 기획이 절반만 끝난 게 들통납니다.`
- 발표자 노트: 아이디어톤·해커톤 발표에서 실제로 나오는 질문임을 환기.
**이미지** · 파일명 `img/slides/s04_money-question.png` · 역할 hero

- 배치: 우측 중앙~우상단, 본문(질문 멘트)은 좌측. 말풍선 꼬리가 본문 쪽을 향하게. 폭 약 38%.
- 돕는 점: 물음표 말풍선이 빈 앱 화면과 동전을 겨누어, "이걸로 어떻게 돈을 버느냐"는 핵심 질문의 순간을 한눈에 직관적으로 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A single glossy ice-blue (#8EC3FF) rounded speech bubble floats mid-air, its frosted-glass shell catching a soft highlight; inside it sits one bold cobalt-blue (#0066CC) 3D question-mark sculpture, smooth and markless. The bubble's small tail points downward and toward the body-text side, aiming at a tiny frosted-glass smartphone below that shows only abstract blank UI blocks — a plain header bar plus two simple card shapes, completely featureless with no readable content, no numbers, no letters, no icons. Resting near the phone's base is one small glossy cobalt coin disc: a smooth, featureless, blank-faced puck with no engraving, no numerals, no currency symbol, no rim text, no markings of any kind. A faint translucent ice-blue echo-bubble trails behind the main bubble to suggest a spoken question. Deep-navy (#233B66) is used only for subtle interior shading and depth.
COMPOSITION: Position the whole cluster in the right-center to upper-right zone of the frame at roughly 38% width, leaving the entire left side as generous empty transparent space for the slide title and the question line. The hero speech bubble with its question-mark sits highest, its tail angled down-left toward the body text; the blank smartphone hovers just beneath and slightly left of the bubble, with the smooth blank coin tucked near the phone's lower edge, and the translucent echo-bubble offset up-right behind the main bubble. Floating freely on a transparent background with one soft drop-shadow beneath the group, no base disk, no pedestal, no tile. Upper-left soft light, gentle three-quarter view, clean negative space framing the asset.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S05 · 1주차 역기획, 한 발 더

**[패턴] Text + Illustration · [출처] `#why`**

- eyebrow: `PART 1 · BM이 필요한 이유`
- 제목: `1주차 역기획, <span class=hl>한 발 더</span> 들어갑니다`
- 본문 불릿(HTML 원문 요지):
  - **1주차 역기획 마지막 단계** — "기획자가 **수익을 발생시키려 설계한 장치는 어디 있나?**"를 찾아봤죠.
  - 그땐 "장치가 어디 있나"까지만. 오늘은 그 장치가 **무슨 종류이고, 왜 그걸 골랐고, 우리 서비스엔 뭐가 맞는지**까지 갑니다.
**이미지** · 파일명 `img/slides/s05_one-step-further.png` · 역할 hero

- 배치: 우측 중앙~우하단, 좌측 본문 비움. 흐름이 좌→우로 읽히게. 폭 약 40%.
- 돕는 점: 다섯 번째 징검다리에서 새 다리가 더 깊은 노드로 뻗는 모습이 "수익 포인트를 찾은 데서 멈추지 않고 종류·이유·선택까지 한 발 더 나아간다"는 오늘의 메시지를 시각적으로 직관화한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A row of five rounded frosted-glass stepping-stone nodes arranged left-to-right, bridged by a thin ice-blue (#8EC3FF) translucent path that hops between them; the first four nodes glow a soft pale ice-blue, while the fifth and final node glows brightest in deep cobalt (#0066CC) as the discovered revenue point. From this glowing fifth node a brand-new translucent ice-blue bridge extends forward and slightly upward into two or three deeper, smaller cobalt nodes that recede toward a deep-navy (#233B66) background depth, signaling "one step further" into richer territory. All nodes are smooth, blank, abstract rounded shapes — completely markless, with no numbers, labels, letters, or engraving of any kind; the connecting bridges are clean frosted glass with soft inner glow, no tick marks or readable values.
COMPOSITION: Place the entire five-node chain in the right-center to lower-right region, occupying roughly 40% of the frame width, with the left-to-right flow reading clearly so the eye travels from the dim first node toward the bright cobalt fifth node and onward along the new forward bridge into the deeper cobalt nodes at upper-right. Keep the whole left half and upper-left generously empty for slide title and body text. The asset floats freely on a transparent background with a single soft drop-shadow beneath it — no base disk, pedestal, or tile. Soft light from the upper-left catches the frosted glass tops; the deeper forward nodes sit slightly higher and smaller to imply depth and progression.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S06 · 좋은 기획은 화면에서 끝나지 않는다

**[패턴] Text + Illustration · [출처] `#why` 결론 콜아웃 + hero stat-cards**

- eyebrow: `PART 1 · BM이 필요한 이유`
- 제목: `좋은 기획은 <span class=hl>화면</span>에서 끝나지 않습니다`
- 3요소 카드(`.grid-3`): **가치**(왜 쓰이는가) · **수익**(왜 돈을 낼 만한가) `오늘의 초점` · **비용**(어떻게 유지되는가). 가운데 '수익' 카드만 강조(코발트 테두리/`.hot` 태그).
- 콜아웃(blue): `오늘은 그중 **돈** 부분을 책임집니다.`
**이미지** · 파일명 `img/slides/s06_value-revenue-cost.png` · 역할 hero

- 배치: 우측 중앙~우하단 여백, 폭 약 36%. 본문/3요소 텍스트는 좌측.
- 돕는 점: 가운데 기둥만 크고 코발트로 빛나게 해 가치·수익·비용 세 요소 중 오늘의 초점이 수익임을 한눈에 직관적으로 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: Three rounded glossy frosted-glass pillar blocks stand side by side in a single neat row. The left and right pillars are short, pale ice-blue (#8EC3FF) and visually dim, quietly receding. The center pillar is noticeably taller and clearly the hero: it is luminous cobalt-blue glass (#0066CC), radiant and saturated, unmistakably the focal point of the trio. Resting flat on top of the tall center pillar is one smooth, featureless, blank-faced coin disc — completely markless, no engraving, no numbers, no currency symbol, no letters, no tick marks, just a clean glossy blank surface. A gentle cobalt glow halo radiates softly only around the center pillar to single it out as the middle of three — "revenue" — as today's focus, while the two flanking pillars carry no glow.
COMPOSITION: The whole pillar trio floats freely against a transparent background, positioned in the right-center to lower-right of the frame at roughly 36% width, leaving the entire left side as generous empty space for slide title and body text. Soft key light from the upper-left rakes across the rounded tops and front faces, giving the cobalt center pillar a bright frosted highlight and deeper deep-navy (#233B66) shading on its shadow side for depth. The taller center pillar anchors the eye while the dim ice-blue side pillars frame it symmetrically. The blank coin sits centered and slightly tilted on the cobalt pillar's crown, catching one crisp specular highlight. A single soft drop-shadow falls beneath the group; no base disk, pedestal, or tile.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S07 · 비즈니스 모델 ⊃ 수익 모델

**[패턴] Text + Illustration · [출처] `#concept` 기억 공식**

- eyebrow: `PART 2 · BM과 수익 모델 구분`
- 제목: `비즈니스 모델 <span class=hl>⊃</span> 수익 모델 (포함 관계)`
- 콜아웃(green, 기억 공식, HTML 원문):
  - **비즈니스 모델** = 고객 + 문제 + 가치 + 전달 방식 + 비용 구조 + 수익 구조 (사업 전체의 작동 방식)
  - **수익 모델** = 그중 "돈이 들어오는 방식" 한 조각 (구독·광고·수수료…)
- 본문 한 줄: 2주차의 **Why–Who–What–How**가 비즈니스 모델의 뼈대.
**이미지** · 파일명 `img/slides/s07_revenue-is-one-slice.png` · 역할 hero

- 배치: 우측 여백~우하단, 폭 약 38%.
- 돕는 점: 전체 구조 안에서 빛나는 한 조각만 강조해, 수익 모델이 비즈니스 모델의 한 부분(포함 관계)임을 한눈에 보여줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: One large rounded frosted-glass whole — a soft translucent ice-blue segmented donut/ring form divided into five or six smooth, completely blank abstract wedges, each surface clean and markless with no numbers, ticks, labels, or engraving — representing the entire business model. Exactly ONE wedge is a bright glossy cobalt-blue slice that lifts slightly outward and upward from the ring and emits a gentle inner glow, clearly nested as just one part of the larger whole — "revenue is one slice of the whole." Supporting elements: two or three tiny featureless ice-blue floating spheres drifting near the lifted cobalt wedge, and a faint deep-navy soft halo behind the ring giving quiet depth. All forms smooth, blank-faced, and unlabeled.
COMPOSITION: Place the entire assembly in the right margin toward the lower-right, occupying roughly 38% of the frame width, floating freely on a transparent background with one soft drop-shadow and no base disk, pedestal, or tile. The large frosted ring sits angled in gentle three-quarter view so the single cobalt wedge faces upper-left into the soft light source, catching the brightest highlight and glow; the small ice-blue spheres trail loosely around the lifted slice to draw the eye to the one glowing part. Keep the entire left and upper-left area generously empty for the slide title and body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S08 · 운영 설계도 vs 계산대

**[패턴] Table · [출처] `#concept` 개념 표**

- eyebrow: `PART 2 · BM과 수익 모델 구분`
- 제목: `한쪽은 운영 설계도, 한쪽은 계산대`
- 표(`.t`):

  | 개념 | 핵심 질문 | 쉬운 비유 |
  |---|---|---|
  | **비즈니스 모델** | 이 사업은 어떻게 작동하고 지속되는가? | 가게 전체 운영 설계도 |
  | **수익 모델** | 돈은 누구에게서 어떤 방식으로 들어오는가? | 계산대에서 돈 받는 방식 |
- 표가 2행이라 우측에 에셋 공간 충분.
**이미지** · 파일명 `img/slides/s08_store-vs-register.png` · 역할 hero

- 배치: 우측 여백~우하단 코너, 폭 약 36%. 좌측은 개념 비교 표.
- 돕는 점: 아담한 가게 전체(BM=운영 설계도)와 그 한쪽에서 홀로 빛나는 계산대(수익 모델=돈 받는 한 부분)를 한눈에 대비시켜, 둘의 관계와 차이를 직관적으로 이해시켜 줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A small cozy storefront rendered in frosted-glass and matte-plastic, with a gently rounded awning, two slim interior shelves and a smooth empty counter — the whole calm little shop standing for the entire store operation. From the right side of the shop, a single glossy cobalt-blue cash-register / checkout module lifts slightly forward and floats just clear of the building, softly glowing as the one money-taking part. The register face is completely blank — no keypad, no digits, no price display, no numbers, no currency symbols, no letters or labels of any kind, just a clean unmarked cobalt surface. Two or three supporting elements: a small ice-blue rounded shelf accent on the shop, and one smooth featureless blank-faced cobalt coin token hovering near the register, with no engraving, no ridges, no markings whatsoever. White, light-gray, ice-blue (#8EC3FF) and cobalt (#0066CC) only, deep-navy (#233B66) reserved for soft depth shading; absolutely no orange anywhere.
COMPOSITION: A single hero cluster floating freely on a transparent background with one soft drop-shadow and no base disk, pedestal or tile. The whole asset sits in the right margin toward the lower-right corner, occupying roughly 36% of the frame width, with the dimmer matte storefront anchoring the group and the glowing cobalt register popping forward and slightly up at the right edge as the clear focal point. The blank coin token rests in the small gap beside the register to balance the cluster. The entire left and upper area is left deliberately empty and clean so the slide title, the concept-comparison table and body text have generous room. Upper-left soft light grazes the awning and register, warm matte highlights up top fading to deep-navy depth underneath, keeping the friendly soft-3D, gentle-volume look.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S09 · 예시: AI 마케팅 서비스

**[패턴] Text + Illustration · [출처] `#concept` 예시 + 조별토론**

- eyebrow: `PART 2 · BM과 수익 모델 구분`
- 제목: `예시: <span class=hl>AI 마케팅</span> 서비스`
- 표(`.t`, 2행):

  | 비즈니스 모델 | 외식업 사장님의 리뷰·고객 데이터를 분석해 홍보 콘텐츠 생성을 돕는 AI 마케팅 비서 |
  |---|---|
  | 수익 모델 | 월 구독료 + 영상 생성 건당 과금 + 프리미엄 리포트 판매 |
- 콜아웃(green, ▷ 조별 토론 2분): `"우리 비즈니스 모델은 **구독**입니다." — 이 문장, 어디가 어색할까요?` (힌트: 구독은 '돈 받는 방식'일 뿐, 누구의 무슨 문제를 푸는지가 빠졌죠.)
**이미지** · 파일명 `img/slides/s09_ai-revenue-merge.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 38%. 예시 텍스트는 좌측.
- 돕는 점: 하나의 AI 포드에서 세 개의 수익원 도관이 하나의 채널로 합류하는 모습을 통해, 구독·건당·리포트 세 수익모델이 하나의 흐름으로 결합된다는 메시지를 직관적으로 보여준다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A single friendly rounded AI assistant pod sits at the heart of the scene as the one unified service: a glossy ice-blue (#8EC3FF) translucent dome with a soft frosted-glass sheen, one calm cobalt (#0066CC) lens-eye, and a thin floating halo ring hovering just above it. Three DISTINCT blank revenue tokens orbit the pod, each completely markless with no text, numbers, symbols, currency marks, or engraving: a thick rounded subscription card-block (smooth blank face, soft matte-plastic edges), a plain fat embossed cobalt disc that is smooth, featureless and blank-faced with no engraving, and a folded frosted panel showing only a few abstract rounded ridges and no readable surface. From these three tokens, three smooth ice-blue conduits curve outward and downward and clearly MERGE into ONE wider cobalt channel that flows into a single rounded collector basin, making the 3-to-1 convergence unmistakable. Deep-navy (#233B66) appears only as subtle depth inside the channel and basin shadows.
COMPOSITION: Position the whole cluster in the right-center to lower-right of the frame, occupying about 38% width, with the central AI pod as the clear hero and the three orbiting tokens arranged loosely around its upper arc. The three conduits sweep down and inward, funneling together into the single wider cobalt channel and rounded basin at the lower-right, so the eye reads three streams becoming one. The asset floats freely with a transparent background and one soft drop-shadow beneath the basin — no base disk, pedestal, or tile. Soft light falls from the upper-left, giving gentle highlights on the dome, tokens, and channel. Leave the entire left side as generous empty space for the Korean slide title and example text, keeping the composition balanced and uncluttered.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S10 · 발명이 아니라 선택과 조합

**[패턴] Text + Illustration · [출처] `#models` 도입**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 제목: `수익 모델은 <span class=hl>발명이 아니라 선택과 조합</span>`
- 본문: 돈 버는 방식은 거의 정해져 있다 / 이미 있는 구조 중 우리 서비스에 맞는 걸 **고르고 섞는** 일 / 대부분 **2~3개를 조합**한다.
- 콜아웃: `다음 표는 외워야 할 목록이 아니라 '고를 때 펼쳐 보는 **메뉴판**'입니다.`
**이미지** · 파일명 `img/slides/s10_revenue-menu.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 36%.
- 돕는 점: 메뉴판에서 한 장을 골라 드는 형상으로, 수익 모델은 암기가 아니라 여러 선택지 중에서 골라 조합하는 것임을 직관적으로 보여줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A small standing menu-board easel made of frosted-glass and glossy white plastic, its upright face holding a fanned row of completely blank rounded cards in graded ice-blue tones (#8EC3FF) arranged like a menu of choices; every card is smooth and markless with no text, no numbers, no icons, no labels, only soft abstract panels. One single card is lifted and tilted forward off the rack, glowing cobalt-blue (#0066CC) with a gently beveled edge to read as the "chosen" option, while the remaining cards stay flat in the fan. A thin frosted-glass tray forms the slim base of the easel, light-gray and translucent, carrying no engraving or markings. Two tiny floating rounded chips, smooth and featureless in cobalt-blue and ice-blue, drift near the lifted card to suggest "pick and combine," each one blank-faced with no symbols or values. Deep-navy (#233B66) appears only in shadowed recesses for depth.
COMPOSITION: Place the whole asset in the right-center to lower-right region of the frame at roughly 36% width, floating freely on a fully transparent background with a single soft drop-shadow beneath it and no base disk, pedestal, or tile. The easel stands at a slight three-quarter angle so the fanned cards face up and toward the left, the lifted cobalt card tilting forward off the top of the fan as the clear focal point; the two small chips hover just to its upper-left and right, loosely framing the chosen card. Upper-left soft light grazes the frosted faces and bevels, leaving gentle ice-blue tints on the lower edges. Keep the entire left and upper-left area generously empty so slide title and body text fit, with the composition weighted to the right.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S11 · 15개 수익 모델 메뉴판 (1/2)

**[패턴] Table · [출처] `#models` 표 No.1~8**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 제목: `15개 수익 모델 메뉴판 (1/2)`
- 표(`.t .model-table`, 풀폭): 열 = `No. · 수익 모델 · 한 줄 뜻 · 잘 맞는 서비스 · 봐야 할 숫자`

  | No. | 수익 모델 | 한 줄 뜻 | 잘 맞는 서비스 | 봐야 할 숫자 |
  |---|---|---|---|---|
  | 1 | 구독형 | 월·연 단위 반복 결제 | SaaS, OTT, 뉴스레터 | 반복 매출, 이탈률 |
  | 2 | 프리미엄(Freemium) | 기본 무료, 고급 유료 | 생산성·협업·디자인 툴 | 무료→유료 전환율 |
  | 3 | 기부·후원형 | 팬·사용자의 자발적 후원 | 창작자, 커뮤니티, 오픈소스 | 후원액, 후원 지속률 |
  | 4 | 광고형 | 사용자는 무료, 광고주가 지불 | 미디어, 검색, SNS | 트래픽(DAU/MAU), CTR |
  | 5 | 거래 수수료형 | 거래 성사 시 일정 비율 수취 | 마켓플레이스, 배달앱 | 거래액(GMV), 수수료율 |
  | 6 | 제휴(어필리에이트)형 | 고객을 보내주고 소개료 | 리뷰·추천 콘텐츠, 블로그 | 전환율, 전환당 수익 |
  | 7 | 직접판매형 | 제품·콘텐츠를 직접 판매 | 전자책, 강의, 굿즈 | 객단가, 재구매율 |
  | 8 | 인앱 구매형 | 앱 안에서 아이템·기능 개별 구매 | 게임, AI 앱, 콘텐츠 앱 | 결제자 비율, 결제자당 매출 |
- 이미지는 **코너 spot**만(표가 풀폭).
**이미지** · 파일명 `img/slides/s11_menu-cards-spot.png` · 역할 spot

- 배치: 우상단 코너 작은 스팟(표와 겹치지 않게), 폭 약 18~22%.
- 돕는 점: 여러 선택지(수익 모델) 중 하나를 골라 드는 모습을 작은 코너 액센트로 표현해, 표가 '펼쳐진 선택지'임을 직관적으로 암시합니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A compact, tiny cluster of a few blank rounded ice-blue (#8EC3FF) cards fanned out in a gentle arc like a small hand of cards, with exactly one card lifted slightly forward and upward, glowing a clean cobalt-blue (#0066CC). Every card is completely blank and markless — smooth frosted-glass/matte-plastic faces with no text, no numbers, no icons, no symbols, no edge lines, no labels of any kind. The fan holds only three or four cards total, kept deliberately small and minimal, with deep-navy (#233B66) used only as subtle depth in the recessed gaps between the stacked cards. The single raised cobalt card reads as "the chosen option" among soft, light-gray-and-ice-blue alternatives, all featureless and clean.
COMPOSITION: The entire fanned card cluster sits tightly in the upper-right corner as a small floating spot occupying roughly 18 to 22 percent of the frame width, leaving the whole left and lower area as generous empty transparent space for the slide title and table. The asset floats freely with a single soft drop-shadow beneath it — no base disk, no pedestal, no tile. Upper-left soft light catches the top edges of the cards and rims the lifted cobalt card, while the fan tilts at a slight three-quarter angle so the lifted card clearly separates from the others. Keep the silhouette compact and airy, with the cards small in scale and plenty of negative space around them so nothing crowds the corner.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S12 · 15개 수익 모델 메뉴판 (2/2)

**[패턴] Table · [출처] `#models` 표 No.9~15 + 핵심 한 문장**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 제목: `15개 수익 모델 메뉴판 (2/2)`
- 표(`.t .model-table`):

  | No. | 수익 모델 | 한 줄 뜻 | 잘 맞는 서비스 | 봐야 할 숫자 |
  |---|---|---|---|---|
  | 9 | 라이선스형 | 기술·콘텐츠·IP 사용권 판매 | 폰트, 캐릭터, 엔진, 특허 | 계약 수, 갱신률 |
  | 10 | 화이트라벨·OEM | 내 제품을 남의 브랜드로 공급 | B2B 솔루션, API 제품 | 파트너 수, 유지율 |
  | 11 | 종량제 | 쓴 만큼 지불 | 클라우드, API, AI 토큰 | 사용량, 단위 원가 |
  | 12 | 면도기-면도날형 | 본체는 싸게, 소모품에서 수익 | 프린터·잉크, 캡슐커피 | 소모품 재구매율 |
  | 13 | 성과보수형 | 결과가 나왔을 때만 청구 | 채용, 광고 대행, 리드 생성 | 성과 발생률, 건당 수익 |
  | 14 | 데이터 판매형 | 쌓인 데이터를 리포트·API로 | 상권 분석, 시장 리포트 | 데이터 품질, 구매 반복률 |
  | 15 | 렌탈·대여형 | 소유가 아니라 기간 사용권 | 차량, 장비, 공간, 의류 | 가동률, 회수 기간 |
- 콜아웃(orange, ◆ 핵심 한 문장): `수익 모델은 **발명이 아니라 선택과 조합**입니다. "우리 고객이 어떻게 행동하고, 얼마나 자주 쓰고, 우리 원가가 어떤가"에 맞는 걸 고르는 거예요.`
**이미지** · 파일명 `img/slides/s12_combine-modules.png` · 역할 spot

- 배치: 우측 중앙 여백 작은 스팟/소형 히어로, 폭 약 24%.
- 돕는 점: 서로 다른 세 모듈이 끼워 맞춰져 하나로 합쳐지고 새 모듈이 추가되는 모습으로, 새로 발명하지 말고 기존 모델 2~3개를 골라 조합하라는 메시지를 직관적으로 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: Three DISTINCT translucent geometric modules snapping together into one unified composite block — a glossy ice-blue (#8EC3FF) hexagonal prism, a frosted white-to-light-gray cylindrical token, and a cobalt-blue (#0066CC) rounded cube — each with a different shaped connector notch so the deliberately unlike forms still interlock along clean seams. One small unattached cobalt module hovers at the upper right, tilted as if being picked to add next. All surfaces are completely smooth, blank, and markless: no engraving, no numbers, no tick marks, no letters, no labels, no logos, no readable values anywhere. Deep-navy (#233B66) is used only as subtle shading inside the notches for depth.
COMPOSITION: Small spot asset occupying roughly 24% width, anchored toward the right-center of the frame with generous empty transparent space on the left for slide title and body text. The fused composite block sits at lower-center of the asset cluster, the single hovering module floating up and to its right, creating a clear diagonal "select-and-add" motion. Floating freely on a transparent background with one soft drop-shadow beneath the joined block; no base disk, pedestal, or tile. Upper-left soft light gives gentle highlights on the prism edges and frosted cylinder, with cool matte-plastic and frosted-glass finishes throughout.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S13 · 워밍업: 역기획으로 수익 포인트 읽기

**[패턴] Table + Illustration · [출처] `#warmup`**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 타이밍 pill: `전체 함께 · 약 5분`
- 제목: `워밍업: <span class=hl>역기획</span>으로 수익 포인트 읽기`
- 안내: 모두가 아는 앱 1개(배달의민족, 토스, 유튜브, 당근)를 떠올리고 답해보기.
- 표(`.t`, 4행):

  | 단계 | 질문 |
  |---|---|
  | ① 수익 포인트 | 이 앱에서 **돈이 발생하는 지점**은 어디인가? |
  | ② 모델 분류 | 그건 위 **15개 중 무엇**인가? (하나가 아닐 수 있음) |
  | ③ 근거 | 이 서비스엔 **왜 그 모델이 맞을까?** |
  | ④ 지불 주체 | 돈 내는 사람이 **앱 쓰는 사람과 같은가, 다른가?** |
**이미지** · 파일명 `img/slides/s13_magnify-revenue-point.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 38%. 렌즈를 살짝 좌향으로.
- 돕는 점: 익숙한 앱 화면 속에서 돋보기로 단 하나의 수익 블록만 콕 집어 빛나게 함으로써, 전체 중 수익 포인트를 찾아내는 워밍업 역기획의 핵심 행동을 직관적으로 보여 줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A glossy cobalt-rimmed magnifying glass floating at a gentle tilt, leaning slightly leftward, hovering over a single small frosted-glass smartphone screen rendered as a soft rounded matte-plastic slab. Directly beneath the lens, one abstract rounded UI block lifts upward off the screen and glows a brighter cobalt-blue, as if singled out and discovered. Capping that lifted block, a small floating coin-disc and a simple rounded ice-blue pin marker pop out like a found revenue point. The coin is smooth, featureless, blank-faced with no engraving, no numbers, no currency symbols, and no markings of any kind. The remaining UI blocks across the screen stay calm, evenly spaced light-gray rounded abstract shapes. Every UI block, the coin, the pin, and the screen surface is completely blank and markless — no text, numbers, tick marks, axes, labels, or readable values anywhere.
COMPOSITION: Place the whole cluster in the right-center to lower-right of the frame at roughly 38% width, with the magnifying glass tilted slightly toward the left so its lens centers over the glowing lifted block. The lifted cobalt block, blank coin, and pin marker rise toward the upper portion of the asset, drawing the eye, while the calm light-gray blocks recede below. Soft upper-left light gives the lens rim, coin, and frosted screen gentle highlights with deep-navy used only for subtle depth in shadowed edges. A single soft drop-shadow grounds the floating cluster against the transparent background, with no base disk, pedestal, or tile. Keep the entire left half of the frame generously empty for slide title and body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S14 · 쓰는 사람 ≠ 내는 사람

**[패턴] Text + Illustration · [출처] `#warmup` 예시**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 제목: `쓰는 사람 <span class=hl>≠</span> 내는 사람`
- 콜아웃(green, 예시): `배달의민족 → 수익 포인트 = 주문/광고 → 거래 수수료형 + 광고형 → 돈 내는 사람은 *가게 사장님*(쓰는 사람은 손님!)`
- 강조 문장: 이 **'지불 주체가 다르다'는 감각**이 오늘의 핵심 중 하나.
**이미지** · 파일명 `img/slides/s14_payer-coin-arc.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 40%. 코인 흐름이 살짝 위를 향하게.
- 돕는 점: 손님 폰에서는 돈이 빠져나가지 않고 가게에서만 코인이 흘러나오는 비대칭 흐름을 보여줘, 쓰는 사람과 비용을 내는 사람이 다르다는 메시지를 한눈에 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: One asymmetric two-sided money exchange. On the LEFT, a glossy ice-blue (#8EC3FF) smartphone tilted toward the viewer, its screen showing abstract food-order UI blocks that are completely BLANK and markless — no numbers, no letters, no icons, no readable values — with a tiny floating frosted-glass takeout bag/box beside it to signal the user who consumes. On the RIGHT, a small frosted-glass storefront in cobalt (#0066CC) and white with a softly rounded matte awning, the merchant. One smooth, featureless, blank-faced cobalt coin disc — no engraving, no numbers, no currency symbol, no tick marks — lifts UP and OUT through the shop's rooftop and travels along a single low gentle cobalt arc toward the phone side, with two or three smaller equally blank, markless coins queued behind it. Money flows only FROM the shop; the phone has NO coins leaving it. Deep-navy (#233B66) used only for depth in shadows and undersides.
COMPOSITION: The whole asset sits in the right-center to lower-right region, occupying roughly 40% of the width, with the entire left side left as generous empty transparent space for the slide title and body text. The phone anchors the inner-left of the asset and the storefront the outer-right, joined by one low cobalt arc whose coin stream rises slightly upward as it crosses from shop toward phone, giving an upward-tilting flow. Soft light comes from the upper-left, glossing the phone face and the lead coin; a single soft drop-shadow grounds the group. Floating freely on a transparent background — no base disk, no pedestal, no tile, no ground plane. Balanced friendly spacing, the lead coin clearly largest and the queued coins tapering smaller behind it.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S15 · 수익 모델 고르는 5가지 질문

**[패턴] Table + Illustration · [출처] `#choose`**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 제목: `수익 모델 고르는 <span class=hl>5가지 질문</span>`
- 본문 한 줄: "돈 될 것 같은 방식"이 아니라 **"고객 행동과 비용 구조에 맞는 방식"**.
- 표(`.t`):

  | 판단 기준 | 확인 질문 | 잘 맞는 수익 모델 |
  |---|---|---|
  | 사용 빈도 | 매일·매주 반복해서 쓰나? | 구독형, 프리미엄, 인앱 구매형 |
  | **지불 주체** | **사용자가 내나, 제3자가 내나?** | 직접판매형 / 광고형·제휴형 |
  | 가치 발생 시점 | 쓰는 순간 가치? 결과가 나와야 가치? | 종량제 / 성과보수형 |
  | 원가 구조 | 사용량 늘수록 서버·AI 비용도 느나? | 종량제, 하이브리드 구독 |
  | 반복성 | 한 번 팔고 끝? 계속 받을 수 있나? | 구독형, 렌탈형, 면도기-면도날형 |
**이미지** · 파일명 `img/slides/s15_revenue-filter-funnel.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 36%. 체크리스트 본문은 좌측.
- 돕는 점: 반투명 5단 필터가 빈 칩을 걸러내는 모습으로, 다섯 가지 질문을 통과해야 진짜 수익 모델만 남는다는 체크리스트의 핵심 메시지를 직관적으로 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: One wide translucent ice-blue (#8EC3FF) funnel-filter shaped like a five-tier sieve, each tier a perforated frosted-glass mesh ring stacked from a broad mouth down to a narrow base; small smooth, featureless, blank-faced glossy revenue chips (no engraving, no numbers, no symbols) drop into the mouth, while clean cobalt-blue (#0066CC) "good fit" chips pass through the mesh and stack neatly below; two mismatched chips are caught and bounce off a tier rim as rejects, tumbling outward at an angle. A small frosted-glass checklist panel floats beside the filter showing exactly five abstract embossed checkmark grooves only — completely blank and markless, no text, no numbers, no tick marks, no labels. Deep-navy (#233B66) is used sparingly inside the mesh shadows for depth.
COMPOSITION: The funnel-filter sits as the hero in the right-center to lower-right, occupying roughly 36% of the frame width, floating freely on a transparent background with a single soft drop-shadow and no base disk, pedestal, or tile. The five-tier sieve angles slightly toward the viewer so all tiers and the falling chips read clearly; the neat cobalt chip stack collects just below the narrow base, and the two rejected chips spin off to the right edge. The blank checklist panel floats upper-right beside the funnel mouth as a supporting element. Soft light falls from the upper-left, glinting on the frosted rims and glossy chips. The entire left half is left intentionally empty and clean for the slide title and checklist body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S16 · "돈 내는 사람 = 쓰는 사람인가?"

**[패턴] Center Message · [출처] `#choose` 콜아웃**

- eyebrow: `PART 3 · 수익 모델 이해와 선택`
- 제목: `꼭 기억할 질문 하나`
- 큰 메시지(중앙/좌측): **"돈 내는 사람 = 쓰는 사람인가?"**
- 콜아웃(blue): 2주차에 만든 **페르소나**가 정말 *돈을 내는 사람*인지 확인. 광고형·B2B는 "쓰는 사람"과 "내는 사람"이 다름. 놓치면 수익 모델이 통째로 어긋남.
**이미지** · 파일명 `img/slides/s16_payer-vs-user.png` · 역할 spot

- 배치: 우측 중앙~우하단 코너, 폭 약 28%. 본문 열과 겹치지 않게.
- 돕는 점: 두 흉상이 동전 하나를 사이에 두고 마주 보게 함으로써, 글자 없이도 "돈 내는 사람과 쓰는 사람이 같은 사람인가?"라는 핵심 질문을 형태만으로 직관적으로 던져 줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: Two rounded translucent glass busts (head and shoulders only, completely featureless — no eyes, nose, mouth, or any facial detail) facing each other across a small gap. The LEFT bust is ice-blue (#8EC3FF) representing the "user/spender"; the RIGHT bust is cobalt-blue (#0066CC) representing the "payer". Centered in the gap between them, one perfectly smooth, blank-faced cobalt coin floats edge-on-ish in three-quarter view — totally markless: no engraving, no numbers, no currency symbol, no letters, no rim ticks, no relief at all, just a clean glossy disc. From each side, soft rounded translucent hands/arms reach inward toward that single shared coin, neither fully grasping it. A very slight left-right asymmetry (the two busts differ subtly in tilt and shoulder width) quietly poses "same person, or two different people?" without any glyph. No question-mark shape, no pictogram, no labels, no UI, no orange — only white, light-gray, ice-blue, cobalt-blue, and deep-navy (#233B66) for depth.
COMPOSITION: The whole bust-coin-bust group sits as a compact spot in the RIGHT-CENTER to lower-right corner of the frame, occupying roughly 28% of the width, with the busts angled inward so their gaze-lines and reaching arms converge on the central floating coin as the clear focal point. The entire left and upper portion of the canvas is left as generous empty transparent space so the slide title and body column never overlap the asset. The group floats freely on a transparent background with a single soft drop-shadow pooled gently beneath — no base disk, no pedestal, no tile, no ground plane. Soft directional light from the upper-left grazes the frosted-glass surfaces, brightening the near edges of both busts and putting a clean specular highlight on the smooth blank coin, while deep-navy reads only in the recessed far sides for volume. Balanced, calm, eye-level three-quarter view; tight, centered, breathable.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S17 · 린캔버스: 한 장(9칸)에 정리

**[패턴] Text + Illustration · [출처] `#leancanvas` 5-1**

- eyebrow: `PART 4 · Lean Canvas로 정리`
- 제목: `린캔버스: 비즈니스 모델을 <span class=hl>한 장(9칸)</span>에`
- 본문: 9칸으로 정리하는 도구(BMC를 초기 검증용으로 줄인 것). **왼쪽은 옮겨 적고, 오른쪽(돈)에 시간을 쓰면 됩니다.** 아이디어톤에서 이미 절반을 만들었다.
**이미지** · 파일명 `img/slides/s17_lean-canvas-board.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 36%. 안내 텍스트는 좌측.
- 돕는 점: 9칸 빈 캔버스 보드와 채워지길 기다리는 빈 칸이, 비즈니스 모델 전체를 한 장에 정리하며 칸을 하나씩 채워간다는 슬라이드 메시지를 직관적으로 전달합니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A single thin floating frosted-glass canvas board divided into a clean 3x3 grid of nine shallow recessed cells, like an ice-blue tray waiting for ideas. Each cell holds only a tiny abstract glossy placeholder — a small rounded bar, a little block, or a dot cluster — completely blank and markless, with no letters, numbers, tick marks, labels, or readable values anywhere. Two or three cobalt-blue cells sit slightly raised and softly lit as priority cells, while one corner cell stays clear and empty, visibly waiting to be filled. Supporting elements: a small cobalt rounded pen resting along the lower edge, one tiny ice-blue sticky-note tile peeling up at a corner, and a couple of loose smooth blocks hovering nearby. The board itself carries no engraving, no text, no UI labels — purely a blank framework of soft cells.
COMPOSITION: The frosted-glass board is positioned in the right-center to lower-right of the frame, occupying roughly 36% of the width, tilted gently in a soft three-quarter view so the recessed cells read clearly and the empty corner cell catches the eye. Upper-left soft light grazes the raised cobalt priority cells, giving them a subtle glow against the matte ice-blue surface, with one clean soft drop-shadow beneath the floating asset. The pen, peeling sticky tile, and loose blocks cluster close to the board's lower-right edge so they don't crowd the open area. The entire left side of the frame is left generous and empty against the transparent background for slide title and body text. No base disk, pedestal, or tile; the board floats freely.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S18 · 팀 프로젝트 선정

**[패턴] Text + Illustration · [출처] `#leancanvas` 5-2**

- eyebrow: `PART 4 · Lean Canvas로 정리`
- 타이밍 pill: `선정 3분`
- 제목: `팀 프로젝트 선정`
- 본문: 각 팀은 팀원 3명의 **아이디어톤 프로젝트 중 1개**를 골라 진행.
- 콜아웃(orange, ▲ 선정 기준): `"제일 잘 만든 프로젝트"가 아니라 "수익 얘기할 거리가 가장 많은 프로젝트"를 고르세요. 안 뽑힌 2명도 "내 프로젝트라면 어땠을까?"로 계속 참여.`
**이미지** · 파일명 `img/slides/s18_pick-project.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 36%.
- 돕는 점: 세 프로젝트 중 하나만 빛나게 들어올리고 나머지 둘은 흐릿하게 곁에 남겨, 한 개를 골라 진행하되 안 뽑힌 것도 함께한다는 메시지를 한눈에 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: Three small frosted-glass project tokens float in a loose row, each a different blank abstract rounded app-idea shape (a smooth pebble-like card, a soft rounded cube, a gently faceted teardrop), all completely featureless with no text, numbers, icons, or markings. A friendly cobalt-blue selection ring gently lifts exactly ONE token forward; that chosen token glows warm cobalt and reads as the picked project, while a soft matte-plastic halo wraps it. The other two tokens stay present but dimmer in ice-blue and light-gray, leaning slightly toward the chosen one to show they remain part of the team. Every shape is smooth and blank-faced, no engraving, no labels, no readable detail anywhere.
COMPOSITION: Place the whole cluster in the right-center to lower-right area, occupying about 36% of the width, with the chosen glowing token nearest the viewer and the two dimmer tokens tucked just behind and beside it at a slight tilt. The cobalt selection ring arcs up from below the chosen token, guiding the eye upward. Keep the left and upper-left portion of the frame entirely empty for slide title and body text. Upper-left soft light, one gentle drop-shadow beneath the floating group, transparent background, no base disk or pedestal, generous negative space on the opposite side.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S19 · 린캔버스 9칸, 채우는 순서

**[패턴] Table · [출처] `#leancanvas` 5-3**

- eyebrow: `PART 4 · Lean Canvas로 정리`
- 제목: `린캔버스 9칸, <span class=hl>채우는 순서</span>`
- 표(`.t`, 9행). ⑥·⑦에 `.hot` 태그(오늘의 핵심), ⑧은 "지금은 비움" 강조:

  | 칸 | 무엇을 적나 | 상태 |
  |---|---|---|
  | ① 문제 | 우리가 푸는 핵심 Pain Point | ↻ 아이디어톤·2주차에서 옮겨 적기 |
  | ② 고객군 | 그 문제로 가장 아픈 사람 (페르소나) | ↻ 옮겨 적기 |
  | ③ 고유 가치 제안 | "왜 굳이 우리 서비스?" 한 문장 | ↻ 다듬기 |
  | ④ 솔루션 | 핵심 기능 (MVP) | ↻ 옮겨 적기 |
  | ⑤ 채널 | 고객에게 어떻게 닿나 | ▹ 짧게 |
  | ⑥ 수익원 `오늘의 핵심` | 어떤 수익 모델로 돈이 들어오나 (15개 중 1~2개 + 근거) | ★ |
  | ⑦ 비용 구조 `오늘의 핵심` | 무엇에 돈이 드나 (사용량 늘면 같이 느는 비용) | ★ |
  | ⑧ 핵심 지표 | 성공을 판단할 숫자 | ◇ §지표 강의 후에 채움(지금은 비움) |
  | ⑨ 경쟁 우위 | 남이 쉽게 못 따라하는 것 | ▹ 짧게 |
**이미지** · 파일명 `img/slides/s19_canvas-9cells-order.png` · 역할 spot

- 배치: 우측 중앙~우하단 코너 스팟, 폭 약 28%. 좌측은 9칸 표.
- 돕는 점: 이미지가 9칸 보드에서 수익·비용 두 칸을 코발트로 강조하고 핵심지표 칸을 점선으로 비워, 채우는 순서와 강조·공백 의도를 한눈에 보여줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A 3x3 frosted-glass Lean-Canvas tile board floating freely, all nine panels smooth and completely BLANK with no markings, lines, numbers, or labels. Two tiles are highlighted as glossy cobalt-blue hero blocks lifted slightly forward: the first holds a smooth, featureless, blank-faced cobalt coin disc with no engraving, no currency symbol, no text (revenue); the second holds a small pale ice-blue downward wedge, markless and clean (cost). One tile is intentionally left empty as a pale light-gray recessed slot outlined by a soft dashed cobalt frame (the unfilled metrics cell), containing nothing readable. A single thin cobalt-blue arrow curves softly across the plain tiles to imply a fill order. No text, no labels, no numbers, no tick marks, no axis, no currency symbols, no Korean characters, no logos.
COMPOSITION: The blank tile board sits as a spot asset in the right-center to lower-right corner of the frame, occupying roughly 28% width, floating with a single soft drop-shadow, no base disk or pedestal. The two cobalt hero tiles (blank coin and ice-blue wedge) sit raised and forward to draw the eye, the dashed empty slot reads as a clear gap, and the thin cobalt arrow threads gently between them suggesting sequence. Upper-left soft light gives gentle frosted highlights and deep-navy depth in the recesses. The entire left and upper area is left generously empty and transparent for slide title and body text, keeping the composition weighted to the right.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S20 · 이 수익이 성립하려면? (가장 위험한 가정)

**[패턴] Text + Illustration · [출처] `#leancanvas` 5-3 ⑥수익원 토론**

- eyebrow: `PART 4 · Lean Canvas로 정리`
- 제목: `이 수익이 성립하려면 <span class=hl>무엇이 참이어야 하나?</span>`
- ⑥수익원 칸 토론 질문(불릿):
  - 우리 수익 모델은 15개 중 무엇인가? (5질문으로 근거 대기)
  - 돈 내는 사람 = 쓰는 사람인가?
  - **이 수익이 성립하려면 무엇이 참이어야 하나?** — 예: "사장님이 월 3만원을 낼 만큼 효과를 느낀다" — 이게 틀리면 모델이 무너지는 **'가장 위험한 가정'**. 해커톤에서 이걸 검증.
- ▲ 경고 맥락 → 이미지에 오렌지 액센트 1개 허용.
**이미지** · 파일명 `img/slides/s20_riskiest-assumption.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 34%. RAT 설명은 좌측.
- 돕는 점: 금 간 한 블록이 탑 전체를 떠받치는 모습으로, 수익 모델이 성립하려면 반드시 참이어야 할 가장 위험한 가정(RAT)과 그것을 검증해야 한다는 메시지를 직관적으로 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A small stacked tower of frosted-glass and ice-blue translucent blocks forming a load-bearing structure, floating freely with one soft drop-shadow and no base disk or pedestal. Near the lower-middle of the stack sits one thin, cracked, fragile glass block bearing the entire weight above it — its surface fractured by a single fine crack and carrying ONE softly glowing ORANGE (#F2541B) warning facet, clearly the most precarious piece holding everything up. A faint cobalt inspection ring hovers over that fragile block as supporting elements: a small, smooth, markless ice-blue checkmark token rests beside the base (the validating test) and a thin cobalt highlight traces the load path down into the crack. The orange accent appears ONLY on the fragile warning block; every other block stays white, ice-blue, cobalt and deep-navy. All surfaces are completely blank and markless — no numbers, no tick marks, no scale, no symbols, no letters, no labels, no readable values anywhere.
COMPOSITION: Position the whole asset in the right-center to lower-right region of the frame at roughly 34% width, leaving the entire left side as generous empty transparent space for slide title and body text. Frame the tower at a gentle three-quarter angle so the upper blocks lean slightly to imply the full structure depends on the cracked block below; place the glowing orange warning facet and the hovering cobalt inspection ring at the clear optical center of the asset to draw the eye to the fragile load-bearing piece. Tuck the small blank checkmark token near the lower base so it reads as a secondary, quieter element. Soft light falls from the upper-left, casting a single gentle drop-shadow beneath the floating stack on a fully transparent background.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S21 · 수익 모델을 검증하는 핵심 지표

**[패턴] Table + Illustration · [출처] `#metrics`**

- eyebrow: `PART 4 · 핵심 지표로 ⑧칸 채우기`
- 콜아웃(yellow, ※ 순서 주의): 지표는 **실습 다음**에 배운다 — 직접 골라본 뒤라야 와닿는다. 지금부터 ⑧핵심 지표 칸을 채운다.
- 제목: `수익 모델을 검증하는 <span class=hl>핵심 지표</span>`
- 본문 한 줄: 최소한 **데려오는 비용 < 남기는 가치**. 입문 단계엔 **"무슨 숫자를 봐야 하는지"**만 알면 충분.
- 표(`.t`):

  | 지표 | 쉬운 뜻 | 한 줄 질문 |
  |---|---|---|
  | **CAC** (고객 획득 비용) | 고객 1명 데려오는 데 든 돈 | 한 명 모으는 데 얼마? |
  | **LTV** (고객 생애 가치) | 고객 1명이 떠날 때까지 남기는 가치 | 한 명이 평생 얼마 남겨? |
  | **LTV / CAC** | 둘의 비율 | 데려올 만한 장사인가? |
  | **이탈률(Churn)** | 고객·매출이 빠져나가는 비율 | 얼마나 빨리 떠나? |
  | **GMV** | 플랫폼에서 일어난 총 거래액 | 거래 규모가 커지나? |
**이미지** · 파일명 `img/slides/s21_metrics-dashboard.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 36%. 지표 카드 본문은 좌측.
- 돕는 점: 추상적 게이지·상승 기둥·하강 막대를 한 패널에 모아, 수익 모델을 검증할 때 어떤 핵심 지표(CAC·LTV·이탈률·GMV)를 함께 봐야 하는지를 한눈에 직관적으로 떠올리게 돕습니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A single floating frosted-glass dashboard panel tilted in a gentle three-quarter view, carrying three DISTINCT blank instruments arranged side by side: a round cobalt-blue circular gauge with a smooth glossy needle but a completely blank face — no scale, no ticks, no numbers, no labels; a tall ice-blue vertical column of matte plastic filling upward like a featureless value reservoir with no markings; and a small descending stepped bar in deep-navy, pure markless plastic blocks with no digits or axis. One slim glossy progress ring wraps the panel's outer edge as a plain unbroken band with no scale. Two supporting accents float nearby: one tiny detached cobalt data-dot orbiting a corner, and one faint ice-blue glassy half-arc echoing the gauge. Every readout is a pure abstract shape — blank dials, smooth needles, featureless columns and bars — with no numbers, ticks, axes, currency symbols, letters, or readable values anywhere.
COMPOSITION: Place the panel as the hero asset in the right-center to lower-right region, occupying roughly 36% of the frame width, floating freely on a transparent background with one soft drop-shadow and no base disk, pedestal, or tile. Light falls from the upper left, giving frosted-glass translucency and gentle matte-plastic highlights, with deep-navy reserved only for shadow depth. The cobalt gauge sits forward-left on the panel, the ice-blue column rises center, and the navy stepped bar descends at the right edge, so the three instruments read as distinct silhouettes. The orbiting data-dot and faint half-arc hover in the upper-right negative space without crowding. The entire left half of the frame is left generous and empty so the slide title and metric-card body text fit cleanly.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S22 · 6개 다 보지 말고, 딱 1개만

**[패턴] Text + Illustration · [출처] `#metrics` 실습 연결**

- eyebrow: `PART 4 · 핵심 지표로 ⑧칸 채우기`
- 제목: `6개 다 보지 말고, <span class=hl>딱 1개만</span>`
- 콜아웃(green, ◎ 실습 연결): 너희 ⑥수익원에 맞는 **가장 중요한 지표 1개**를 ⑧칸에 적기.
  - 구독형 → **이탈률** · 광고형 → **트래픽(DAU)** · 수수료형 → **GMV** · 프리미엄 → **유료 전환율**
- 작은 노트(yellow): LTV는 매출이 아니라 **마진(이익) 기준**. "LTV/CAC 3:1"은 절대 법칙이 아니라 경험칙.
**이미지** · 파일명 `img/slides/s22_pick-one-metric.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 34%. 매칭표는 좌측.
- 돕는 점: 동일한 게이지 다섯 개 중 하나만 스포트라이트로 들어올려 강조함으로써, 여러 지표 가운데 수익원에 맞는 딱 한 개만 골라 적는다는 메시지를 직관적으로 전달합니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A short low row of five small identical abstract circular dials, each with a frosted matte face that is completely blank and markless — no scale, no tick marks, no gradations, no numbers, no currency symbols, no letters, no labels — every face carrying only one smooth ice-blue (#8EC3FF) arc and one simple cobalt-blue (#0066CC) pointer. Exactly ONE dial is lifted noticeably higher than the rest and haloed by a soft translucent cobalt spotlight beam descending from the upper-left, its single pointer glowing the brightest as the one chosen metric; the other four stay low in their row, gently dimmed and slightly desaturated toward light-gray while keeping the same smooth, featureless, blank-faced look. Two or three faint ice-blue light motes drift around the lifted dial as quiet supporting accents, with deep-navy (#233B66) used only for subtle inner depth.
COMPOSITION: Place the whole cluster in the right-center to lower-right region of the frame at roughly 34% width, with the four low dials arranged in a gentle shallow arc and the single highlighted dial raised above them slightly right of the group's center so the spotlight beam reads clearly. The entire asset floats freely on a fully transparent background with one soft drop-shadow beneath the row, no base disk, pedestal, or tile. Keep the upper-left soft light source consistent so the beam, the glossy frosted highlights, and the shadow all agree. Leave the left side and upper-left generously empty as clean negative space for the slide title and body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S23 · 가격은 감이 아니라 전략이다

**[패턴] Text + Illustration · [출처] `#pricing`**

- eyebrow: `보너스 · 가격 전략 (맛보기)`
- 제목: `가격은 <span class=hl>감이 아니라 전략</span>이다`
- 본문: 수익 모델을 정해도 가격을 잘못 매기면 사업성이 무너진다. 가격엔 **정하는 방법(전략)**이 있다.
  - **가치 기반 가격** — 원가가 아니라 **고객이 느끼는 가치** 기준(③고유 가치 제안과 직결).
  - 참고 설문 기법: **Van Westendorp**, **Gabor-Granger**(이름만 기억).
- 콜아웃(blue, 핵심): `"가격은 감이 아니라 전략이다." 오늘은 이 한 문장만 가져가세요.`
**이미지** · 파일명 `img/slides/s23_value-scale.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 34%.
- 돕는 점: 빛나는 가치 보석이 흐릿한 코인 더미보다 저울을 더 높이 들어올리는 모습으로, 가격은 감이 아니라 고객이 느끼는 가치가 좌우한다는 메시지를 한눈에 전달합니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A glossy translucent ice-blue balance scale, used purely as a metaphor for value-based pricing. One pan holds a short stack of smooth, featureless, blank-faced frosted-glass discs (the cost/instinct side) — no engraving, no numbers, no tick marks, no currency symbols, no price tags, completely markless. The opposite pan is lifted clearly higher because a single brightly glowing cobalt-blue (#0066CC) faceted value gem rests in it and visibly outweighs the dull disc stack, showing that perceived value, not gut feeling, sets the price. The scale's slender central column is anchored on a small deep-navy (#233B66) stepped strategy plinth that implies a deliberate framework rather than guesswork. All surfaces stay blank: white, light-gray, and ice-blue (#8EC3FF) bodies with cobalt and deep-navy accents for depth only, no orange anywhere.
COMPOSITION: A single floating hero asset on a fully transparent background with one soft drop-shadow, no base disk, pedestal, or tile. The scale sits in the right-center to lower-right zone occupying roughly 34% of the width, tilted so the glowing gem pan rises high on the right and the blank disc pan dips lower, the small stepped navy plinth grounding the beam pivot. Supporting elements stay minimal: the gem's soft cobalt glow, two or three tiny ice-blue sparkle dots near the rising pan, and the muted disc stack as the low counterweight. The upper-left soft light catches the frosted edges and the gem's facets. The entire left and upper-left area is left generously empty for slide title and body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S24 · 흔한 오해와 수정 문장

**[패턴] Table · [출처] `#mistakes`**

- eyebrow: `마무리 · 발표 전 점검`
- 제목: `흔한 오해와 <span class=hl>수정 문장</span>`
- 표(`.t`, 4행). '잘못된 표현' 열은 빨강 톤, '더 정확한 표현' 열은 파랑 톤:

  | 잘못된 표현 | 왜 문제인가 | 더 정확한 표현 |
  |---|---|---|
  | "우리 비즈니스 모델은 구독입니다." | 구독은 수익 모델 한 조각일 뿐 | "우리는 B2B SaaS이고, 수익 모델은 월 구독형입니다." |
  | "광고 붙이면 수익화됩니다." | 트래픽·광고주 없으면 광고 수익은 작음 | "반복 트래픽이 일정 규모 이상이면 광고형을 검토할 수 있습니다." |
  | "AI니까 무조건 종량제죠." | 고객 예측 가능성과 마진 사이 균형 필요 | "AI 사용량에 따라 원가가 변하니, 구독+종량제 결합을 검토합니다." |
  | "MVP는 기능 최소한으로 개발하는 거죠." | 랜딩페이지·수기 운영도 MVP가 될 수 있음 | "MVP는 핵심 가치를 최소한의 방식으로 검증하는 실험입니다." |
- 이미지는 코너 spot(오렌지 액센트 1개 허용 — '틀린 표현' 맥락).
**이미지** · 파일명 `img/slides/s24_misconception-fix.png` · 역할 hero

- 배치: 우측 중앙 여백, 폭 약 34%. "틀린 표현 → 정확한 표현" 표는 좌측.
- 돕는 점: 취소선 그어진 주황 말풍선이 깔끔한 코발트 체크 말풍선으로 바뀌는 모습을 통해, 틀린 표현을 더 정확한 표현으로 고친다는 슬라이드의 핵심 메시지를 한눈에 직관적으로 전달한다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A single floating frosted-glass speech bubble transforming left-to-right from a wrong wording into a corrected one. On the LEFT sits a faintly orange-tinted (#F2541B) speech bubble that looks slightly slumped and deflated, struck through by one bold diagonal orange bar marking it as crossed-out; inside it hold only two short, blank abstract pill-shaped blocks (completely smooth, markless, no text, no letters, no numbers) standing in for failed words. Three small glassy morph particles arc across the middle gap, suggesting the change in progress. On the RIGHT rises an upright, taller, cleaner cobalt-blue (#0066CC) speech bubble, crisp and confident, holding one single thick rounded ice-blue (#8EC3FF) checkmark as the corrected version. Orange appears ONLY on the left wrong bubble and its strike bar; everything else stays white, ice-blue, cobalt and deep-navy.
COMPOSITION: The whole bubble-to-bubble transformation cluster is grouped toward the right-center of the frame, occupying roughly 34% width, leaving the entire left side as generous empty transparent space for the slide's table and title. The slumped orange struck-through bubble sits lower-left within the cluster, the three glassy morph particles sweep diagonally upward toward the right, and the taller cobalt checkmark bubble anchors the upper-right of the cluster so the eye reads a clear left-to-right, low-to-high correction motion. Soft light falls from the upper-left, giving each bubble a gentle frosted highlight and one soft drop-shadow beneath the group; all elements float freely with no base disk, pedestal, or tile, on a fully transparent background.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S25 · 발표에서 안전한 문장

**[패턴] Center Message · [출처] `#mistakes` 안전한 문장**

- eyebrow: `마무리 · 발표 전 점검`
- 제목: `발표에서 <span class=hl>안전한 문장</span>`
- 큰 콜아웃(blue): `"현재 단계에서는 정교한 매출 추정보다 **핵심 고객의 지불 의사와 반복 사용 가능성**을 검증하는 것이 우선입니다. 이후 데이터가 쌓이면 가격과 지표를 조정하겠습니다."`
**이미지** · 파일명 `img/slides/s25_podium-script.png` · 역할 hero

- 배치: 우측 하단 코너, 폭 약 32%. 발표 템플릿 빈칸 문구는 좌측·중앙.
- 돕는 점: 연단·마이크 위에 떠 있는 빈칸 카드가 채워야 할 두 칸만 강조해, 빈칸만 채우면 끝나는 안전한 1분 발표 템플릿이라는 메시지를 직관적으로 전달합니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: A friendly rounded speaker's podium in glossy white and ice-blue matte plastic, its front face smooth and completely blank, with a slim cobalt-blue gooseneck microphone curving gently up from the top and a single soft sound-ring glowing faintly around the mic head. Floating just above the lectern is a frosted-glass script card carrying a few horizontal recessed empty slots — soft rounded grooves like blank fill-in tokens, deliberately label-free abstract empty notches with no text, no numbers, no marks; two of these slots are highlighted with a cobalt-blue inlay as the spots to fill. One small detached cobalt token drifts toward an open slot, and a tiny smooth ice-blue check chip rests near the base — all surfaces markless and featureless.
COMPOSITION: Single hero cluster anchored in the lower-right corner at about 32% slide width, the whole assembly floating freely on a transparent background with one soft drop-shadow and no base disk, pedestal, or tile. The podium sits as the visual base with the microphone rising up-and-left and the frosted script card hovering above it slightly tilted toward the viewer, the two cobalt-highlighted empty slots reading as the clear focal point. The detached cobalt token and the small ice-blue check chip form a gentle diagonal of supporting accents toward the lectern. Soft light falls from the upper-left, lit edges and a cool ice-blue rim catch the card and mic. The entire left and center of the frame is left generously empty for the slide's title and template-blank body text.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

### S26 · 클로징 — 오늘 기억할 한 가지

**[패턴] Closing · [출처] `#why` 결론 + `#sources`**

- 배경: `--cover-bg` `#1A1A1A`. 헤더 텍스트/요소는 흰색(또는 생략, 좌상단 로고만).
- 제목(흰색): `오늘 기억할 한 가지`
- recap 3요소(흰/아이스블루): **가치**(왜 쓰이나) · **수익**(왜 돈을 낼 만한가) · **비용**(어떻게 유지되나) — `오늘은 '돈'(수익)`.
- 작은 출처 노트(연회색, §10 반영): 개념은 딥리서치로 교차검증(23개 출처). **기업 사례 수치는 시간이 지나면 바뀌므로, 슬라이드에 넣을 땐 공식 출처·날짜를 함께 표기.**
- 우하단: `노태경 김지유`(선택).
**이미지** · 파일명 `img/slides/s26_recap-glow.png` · 역할 hero

- 배치: 우측 중앙~우하단, 폭 약 40%. 어두운 클로징 배경 — 코발트 림광이 떠 보이게.
- 돕는 점: 빛나는 중앙 코발트 코인 하나로 시선을 모아, 가치와 비용을 정리하되 오늘은 "돈"(수익)만 각인시키려는 슬라이드 메시지를 시각적으로 강조해 줍니다.

```text
Create a clean, friendly 3D educational illustration for a modern Korean university UX/UI lecture slide — minimal, polished, soft and approachable. Render it in a gentle three-quarter view at near eye-level (only a slight downward tilt) with natural soft perspective and rounded depth — NOT a flat top-down isometric tile, NOT a miniature diorama.
MATERIAL & PALETTE: smooth matte plastic with a soft glossy finish and gentle frosted-glass accents, plump rounded friendly shapes; lots of pure white and light-gray, soft periwinkle / ICE-BLUE (#8EC3FF) surfaces, clear COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) only for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Soft even studio lighting from the upper-left, gentle ambient occlusion, one soft blurred drop shadow — a warm, friendly, approachable educational illustration, NOT a glassy game asset.

SUBJECT: One central glossy cobalt-blue disc token as the hero — perfectly smooth, featureless and blank-faced, with no engraving, no embossed symbol, no numeral, no currency mark and no letters, lit from within with a clean cobalt rim-glow and a bright upper-left highlight so it reads as the single unified takeaway (revenue). Two supporting recap forms slide inward and tuck behind it: a soft ice-blue rounded heart-shard (value) from the left, and a short stack of two or three smooth cobalt rounded disc tokens (cost) from the right — every disc equally smooth, markless and blank, no tick marks, no labels, no readable values. The two side forms stay dim, recessive and deep-navy-shadowed so the front disc clearly pops.
COMPOSITION: The whole cluster floats freely with a transparent background and a single soft drop-shadow — no base disk, pedestal or tile. Position the hero disc and its converging supporting forms in the right-center to lower-right zone, occupying roughly 40% of the width, with the heart-shard and cost stack angling inward from left and right to visually converge on the glowing central disc. Keep the entire left side and upper area generously empty for slide title and body text. Soft frosted-glass and matte-plastic surfaces, upper-left key light, deep-navy used only for recessive depth; strictly white, light-gray, ice-blue and cobalt — no orange anywhere, no text, no logos, no watermark.

RENDER: one subject FLOATING FREELY on a FULLY TRANSPARENT background, exported as PNG with alpha, with ONLY one soft blurred drop-shadow directly beneath it — absolutely NO cloud platform, NO rounded base disk, NO pedestal, NO tile or ground slab under the object, no backdrop, no framing card. Square 1:1 unless noted. Keep generous empty space around the subject. This slide may take its OWN distinct form and composition best suited to its message — images do NOT need to look like one uniform set; only keep the shared friendly soft-3D look, palette, and upper-left soft lighting.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealistic or realistic human faces (a friendly, simple, stylized 3D cartoon character with soft minimal features is OK when the subject calls for a person); a rounded base disk / cloud platform / pedestal / ground tile under the object; flat top-down isometric tile look or miniature-diorama look; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## 7. 빌드 & 검수 체크리스트

### 7.1 고정 슬라이드 동일성(최우선)
- [ ] S01이 `img/1page.png`와 텍스트·위치·색(특히 `#1A1A1A` 배경, `#8EC3FF` 한글 타이틀, `#2F6BF8` UX/UI)까지 일치.
- [ ] S02가 `img/2page.png`와 일치(eyebrow `11주차 기획시간!`, 제목 `BM: 비즈니스 모델과 수익 모델`, 본문 3줄, 우하단 퍼즐 일러스트).
- [ ] S03이 `img/3page.png`와 일치(좌측 제목+강조바+4줄, 우측 번호 4항목 문구 정확).

### 7.2 템플릿/디자인 일관성
- [ ] S02~S26 모든 슬라이드에 표준 헤더(로고+SKU LIKELION+아이스블루 라인+우상단 팀명) 적용.
- [ ] 색은 §3 토큰만 사용. 파랑 강조는 핵심 1~2개, 오렌지/빨강은 주의·오류에만.
- [ ] 제목 1~2줄, 본문 5줄 이하, 한 슬라이드 한 메시지.

### 7.3 내용 충실도
- [ ] 모든 본문 텍스트가 `business_revenue_model_summary.html`에서 온 것(외부 수치·사실 추가 없음).
- [ ] 15개 모델 표(S11+S12)가 1~15 누락 없이 원문과 일치.
- [ ] §9 운영안·§10 표는 슬라이드화하지 않음(§10 검증 메시지만 S26에 반영).

### 7.4 이미지
- [x] 24개 에셋이 `img/slides/`에 존재(투명 PNG, S02만 흰배경 크롭) — **확인 완료**. 빌드 시 그대로 참조.
- [ ] 이미지에 글자·숫자 없음(특히 코인·게이지·표류 민무늬). 받침대/바닥 타일 없음.
- [ ] 이미지가 본문/표를 가리지 않음(우측 빈 영역, 표 슬라이드는 코너 spot).
- [ ] 오렌지는 S20·S24에만.

### 7.5 PDF/기술
- [ ] "PDF 다운로드" 버튼 동작, 인쇄 시 버튼 숨김.
- [ ] 인쇄 미리보기가 정확히 **26페이지**, 각 페이지 16:9 꽉 참(여백 0, 배경 그래픽 켬).
- [ ] 각 슬라이드 내용이 **720px 안에 들어감**(특히 표 많은 S11·S12·S19 — `overflow:hidden`으로 잘리지 않는지 확인, §4.7-(5)).
- [ ] 폰트 로드 실패 시에도 한글이 깨지지 않음(폴백).
- [ ] 경로(`메인 이미지.png`/한글·공백)가 PDF에서 깨지지 않음(ASCII 복사본 권장).
- [ ] **배포본(`_배포.html`)을 `img/` 폴더 없이 단독으로 열었을 때** 모든 이미지가 표시됨(base64 내장 확인). 파일 크기 적정(다운스케일·압축 반영, 권장 3~8MB).

### 7.6 수용 기준(AC)
1. 단일 `.html` 1개로 26장이 모두 렌더되고, **배포본은 그 파일만으로(`img/` 폴더 없이) 이미지가 모두 보인다**(base64 내장).
2. S01·S02·S03이 레퍼런스와 육안상 동일하다.
3. "PDF 다운로드"로 16:9 26페이지 PDF가 저장된다.
4. 본문이 HTML 정리본 범위를 벗어나지 않는다.
5. 모든 슬라이드 헤더·색·이미지 톤이 일관된다.

---

## 8. 부록 — 색상 추출 근거

`img/1page.png`·`2page.png`·`3page.png`를 PIL로 양자화·픽셀 샘플한 결과(주요 잉크색):

- **3page**: 번호 원형·섹션 타이틀·강조 바 = `#3060C3`(코발트), 본문 회색 `#565656`, 제목 검정 `#040404`, 헤더 라인 `#89AFEF~#A7C4F1`(아이스블루), 표면 회색 `#DCE0E6`.
- **2page**: 타이틀/eyebrow 블루 `#5476D9~#6789E7`(코발트 계열), 제목 검정 `#030303`, 본문 회색 `#585858`, 일러스트 페리윙클 `#92ADF1~#AEC4F3`.
- **1page**(어두운 표지): 일렉트릭 블루 `#266AF2~#3A72F8`(UX/UI), 아이스블루 `#85AFFB`(한글 타이틀), 흰색 `#FAFAFB`, 글래스 타일 `#93979C`, 딥네이비 `#313956`, 배경 `#1A1A1A`.

→ 본 계획서는 이를 토대로 **코발트 `#3060C3` / 일렉트릭 `#2F6BF8` / 아이스블루 `#8EC3FF`** 를 핵심 토큰으로 고정했다.

---

> **끝.** 이 계획서대로 빌드하면 (1) 정리본 내용만으로 (2) 1·2·3페이지가 동일하고 (3) 템플릿·색·3D 에셋 톤이 일관된 (4) PDF로 내려받을 수 있는 단일 HTML 26장 덱이 완성된다.
