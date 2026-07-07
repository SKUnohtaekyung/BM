# 덱 조립 문법

## §0. 불변 요소 (반드시 그대로 — SKILL.md §0)
1. **고정 페이지 1·2·3**(`cover`/`s02-slide`/`s03-slide`) 구조·CSS 그대로, 텍스트 슬롯만 교체(표지 한글 제목은 `기획 & 디자인` 고정).
2. **하단 네비게이션 바**(`.controls > .navbar`) 그대로.
3. **첫 페이지 PDF 버튼**(`.dl-btn`, `idx===0`에서만) 그대로.
4. **이미지는 codex imagegen**으로 — 이 스킬은 프롬프트 시트까지만.
5. **모든 파트는 파트 전환(part-divider) 슬라이드로 시작 — PART 1 포함.** 각 파트 첫 슬라이드 앞에 반드시. **파트 수 = divider 수.** (아래 '파트 구조' 참고)

`scaffold_session.py`가 스타터를 손대지 않고 복사하므로 2·3·4의 엔진/CSS는 자동 보존되고, `--parts N`이 5의 divider N개를 만든다. 손 편집 시에도 이 부분은 건드리지 않는다.

## 슬라이드 골격 (모든 본문 슬라이드 공통)
```html
<section class="slide <레이아웃클래스>" data-slide="B01">
  <header class="s-head">
    <img class="s-logo" src="img/logo.png" alt=""><span class="s-brand">SKU LIKELION</span>
    <span class="s-line"></span>
    <div class="s-team">UX/UI Team<br>Official LIKELION&nbsp;&nbsp;at&nbsp;&nbsp;SKU</div>
  </header>
  <div class="s-body-wrap">   <!-- 또는 .s-full / .center-msg (레이아웃에 따라) -->
    <p class="s-eyebrow">PART n · <파트명></p>
    <h2 class="s-title">이 슬라이드의 <span class="hl">결론</span></h2>
    ...
  </div>
</section>
```
- `data-slide`는 라벨(선택)일 뿐 — 네비게이션은 DOM 순서로 동작. 중복·자유롭게 붙여도 됨.
- 카탈로그에서 복사한 `<section>`의 우하단 `.s-foot` 라벨은 **붙여넣은 뒤 삭제**.

## 클래스 택소노미 (자주 쓰는 것)
- 헤더: `.s-head` `.s-logo` `.s-brand` `.s-line` `.s-team` (다크: `.cover-head` `.on-dark`)
- 본문: `.s-body-wrap` `.s-eyebrow` `.s-title`(+`.hl`) `.accent-bar` `.s-lead` `.s-body`(strong→코발트) `.plain-lines/.plain-line`
- 컴포넌트: `.callout`(+`.blue/.green/.orange/.yellow/.red`) `.card`(+`.surface`) `.grid-2/.grid-3` `.pill` `.timing`(활동 시간) `.num-circle` `table.t`
- 에셋: `.asset.hero`(우하 대형) `.asset.spot`(코너) — 좌 ~40% 비움
- 풀폭/센터: `.s-full` `.center-msg`/`.cm-title` · 채우기 모디파이어 `.canvas-fill`(표·그리드 세로 채움) `.center-v`(본문 세로 가운데+hero 확대)
- 파트: `.part-divider .pd-wrap .pd-dots .pd-dot(.is-active) .pd-eyebrow .pd-title .pd-sub`

## 두 횡단 규칙
1. **색은 문법이다** — 코발트=강조/대상(키워드 1~2개만), 오렌지·레드=문제·오답·경고만. 한 슬라이드에 파랑+오렌지+레드 동시 강조 금지.
2. **가운데 커넥터** — 두 요소를 이을 땐 파란 화살표/라인으로 관계(→ 흐름, ⊃ 포함, ≠ 대비, ↓ 검증)를 명시.

## 파트 구조 (§0-5 · 필수)
- **각 파트는 그 파트의 첫 슬라이드 앞에 `part-divider`를 반드시 둔다 — 맨 앞 1파트도 예외 없음.** 절대 빠뜨리지 않는다. **파트 수 = part-divider 수.**
- divider 구조(고정, 텍스트만 채움): 진행 도트(`.pd-dots`, 파트 수만큼) + `PART n / N`(`.pd-eyebrow`) + 파트 제목(`.pd-title`) + 한 줄 설명(`.pd-sub`).
- `.pd-dots`의 `is-active`는 **현재 파트**에, `PART n / N`의 `N`은 **전체 파트 수**.
- `scaffold_session.py --parts N`이 N개를 번호매김해 만든다(아젠다 뒤). 조립 때 각 divider를 해당 파트 콘텐츠 **앞으로 옮긴다**.
- 본문 슬라이드의 `.s-eyebrow`는 `PART n · <파트명>`으로 위치를 상기.

## eyebrow / 제목 규칙
- eyebrow = 파트·맥락 라벨(작게, 코발트). 활동이면 `.timing`(예: `팀 실습 · 22분`) 추가.
- 제목(`.s-title`) = 슬라이드의 **결론**을 1~2줄로, 강조어만 `<span class="hl">`.

## 마무리 (클로징)
- 덱은 **`concept-recap`(밝은 배경 + 요약 인포그래픽: 리드 + 플로우 칩 + 4카드 + 파란 배너)로 끝내는 것을 기본**으로 한다. 스타터가 이미 이걸로 끝난다.
- `concept-recap`의 **배경 이미지(`concept-bg`, `*-bg.png`)는 선택(수동)** — 주제에 맞는 풀블리드 가로 이미지를 얹으면 더 좋지만, 없어도 밝은 배경(`#F8FBFF`)으로 깔끔하다. (프롬프트 시트는 `*-bg.png`를 제외 → 직접 준비)
- 다크 **`closing`(한 줄 요약)**은 선택 — 원하면 `concept-recap` **뒤에** 카탈로그에서 복사해 붙인다.

## 접근성
- 색만으로 의미 전달 금지 → 아이콘/라벨 병행. PDF에서 색 이모지가 깨지므로 모노크롬 심볼(◆ ★ ◎ ※ ▲ ▷ ↓ ✓) 권장.

## 레이아웃 내부를 바꿀 때
카탈로그 `<section>`을 그대로 쓰면 `deck.css`를 안 봐도 된다. 하지만 도형의 **구조를 수정**(카드 1개 추가, 화살표 방향, 칸 비율)하려면 그 클래스의 자식 규칙을 봐야 한다 → `덱_템플릿킷/styles/deck.css`에서 해당 모듈 주석 블록(예: `[도형] 모델→지표 매핑 (.map-slide)`)을 찾아 `.map-row/.mapc/.m-model/.m-arrow/.m-metric/.m-why` 같은 자식 클래스를 확인한다. 새 클래스를 만들면 토큰을 지킨다.

> 색·타이포·공간 값은 `덱_템플릿킷/guide/디자인시스템.md`.
