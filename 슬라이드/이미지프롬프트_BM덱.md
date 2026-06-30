# 16주차 BM 강의 덱 — 슬라이드별 이미지 프롬프트

> **무엇** — 22장 강의 덱([`슬라이드/BM_16주차_강의덱.pptx`](BM_16주차_강의덱.pptx)) 각 슬라이드에 얹을 **3D 아이소메트릭 에셋**의 생성 프롬프트입니다. design.md / image_generation_prompts.md의 톤(흰색·아이스블루·코발트 글래스, 텍스트 없음)을 따릅니다.
> **도구/형식** — GPT 이미지 생성(예: ChatGPT 이미지)에 그대로 붙여넣어 **투명 배경 PNG**로 저장하세요.

## 사용법

1. 아래 각 슬라이드의 `프롬프트` 코드블록을 **통째로 복사**해 GPT 이미지 생성에 붙여넣습니다.
2. 저장은 **PNG(투명 배경)**. 파일명은 각 항목의 `파일명`을 사용하고 `슬라이드/images/` 폴더에 모읍니다.
3. **22장을 한 세트로 통일하는 팁**
   - 첫 이미지를 만든 뒤, 다음 이미지부터는 끝에 *"keep the exact same style, isometric ~35° camera, upper-left light, and transparent PNG as the previous image"* 한 줄을 덧붙이거나, 만든 이미지를 레퍼런스로 첨부하세요.
   - GPT 이미지 API를 쓴다면 `background: "transparent"`, `size: "1024x1024"`(정사각) 옵션을 권장합니다.
4. 표가 많은 슬라이드(S7·S8·S16·S19 등)는 `motif/spot` 역할이라 **작게(코너 스팟)** 얹습니다. `hero`는 우측/우하단 큰 여백에 배치합니다.

## 공통 스타일 계약 (아래 모든 프롬프트에 이미 포함됨)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

## 품질 재검토 (image_generation_prompts.md 규칙 + 강의 설명 보조성)

22장을 모두 **적대적으로 재검토**했습니다(슬라이드별 검증관 + 규칙 정독).

- **모든 이미지는 강의 내용을 보조하는 용도**임을 기준으로, 메시지 적합성(aid)과 규칙 준수(compliance)를 함께 점검.
- 핵심 발견: **차트·코인·게이지·리포트류 요소는 '숫자/눈금/라벨 없음'을 명시하지 않으면 생성 시 숫자가 박힐 위험**. → 해당 12개 슬라이드(S01, S02, S04, S05, S06, S09, S12, S14, S17, S18, S21, S22) 프롬프트에 명시적 가드를 넣어 교체했고, 일부(S02·S14·S01)는 은유를 강의 메시지에 더 정확히 맞게 교정.
- 또한 **모든 프롬프트의 NEGATIVE에 "차트·코인·게이지류는 추상·무수치" 조항을 전역 추가**해 통과분까지 이중 보호.
- 오렌지는 규칙대로 **경고/위험 맥락(S15 가장 위험한 가정, S19 틀린 표현)에만** 사용.

---

## S01 — 표지 (Cover)

- **파일명**: `s01_bm-cover-tiles.png`  ·  **역할**: hero
- **배치**: 표지 중앙~우측에 큰 히어로로 배치(약 4.5in), 제목 텍스트 좌측 정렬 시 우측 절반의 빈 공간을 채우도록. 어두운 배경이라 투명 PNG의 코발트 글로우가 자연스럽게 떠 보임.
- **이미지가 돕는 점**: 비즈니스 모델(경로·구조)과 수익 모델(상승 그래프·코인)을 한 장면에 담아 강의 주제를 표지에서 한눈에 예고한다.
- **재검토 반영**: 체크리스트 3 위반: subject의 '위로 상승하는 추상 막대 그래프'는 차트/막대 요소인데 '추상'만 있고 '눈금 없음/수치 없음(no ticks/no numbers)'이 명시되지 않음. 규칙은 그래프/막대 요소에 반드시 '추상적·눈금 없음·수치 없음'을 명시하라고 요구 → 실제 생성 시 축 눈금/숫자가 박힐 위험. 'abstract' 단독으로는 눈금/수치 차단을 보장하지 못함. / 일관성 계약 위반 소지: image_generation_prompts.md line 181은 '코인 강조'를 중복 구도로 지목하고 '차별화 반영했다'고 명시했는데, S01은 subject의 '코발트 코인/동전 형태가 타일 사이를 떠다니며'와 comp의 '코인 2~3개'로 코인 강조를 표지 핵심에 다시 끌어옴(차별화 계약과 상충). 팔레트 자체는 위반 아님. / 보조성: 3개 글라스 타일(상승 막대=성장/수익, 분기 경로=비즈니스 구조/흐름, 코발트 버튼=제품/액션)이 '비즈니스 모델 & 수익 모델' 표지 주제를 입문자도 직관적으로 연결할 만큼 적절히 보조함.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: 세 개의 광택 있는 반투명 프로스티드 글라스 UI 타일이 공중에 살짝 어긋나게 떠 있는 클러스터: (1) 위로 상승하는 추상 막대 형태(완전 추상, 눈금 없음, 숫자 없음, 축·라벨 없음)가 솟은 타일, (2) 분기하는 경로(둥근 노드와 부드러운 곡선 연결선, 글자/숫자 없음)가 흐르는 타일, (3) 둥근 코발트 버튼 형태가 도드라진 타일. 타일들은 코발트 림광이 또렷한 가장자리를 그리며, 추가 색 없이 흰색·아이스블루·코발트블루·딥네이비만 사용한다. 읽히는 텍스트·숫자·라벨·로고·워터마크는 일절 없음.
COMPOSITION: 주오브젝트는 살짝 부채꼴로 펼쳐져 떠 있는 3개 글라스 타일 클러스터(가운데 타일이 가장 크고 앞으로 나옴). 보조 요소로 타일 사이를 잇는 은은한 코발트 글로우 라인 1~2개와 아래쪽에 부드럽게 떠 있는 둥근 베이스 글로우 디스크 1개만 두어 미니멀하게 유지(코인/동전 강조는 제외해 다른 슬라이드와 구도 차별화). 아이소메트릭 ~35도 시점, 좌상단 소프트광, 넓고 연한 소프트 그림자. 어두운 표지에서 또렷하도록 아이스블루/코발트 림광을 강조하고 좌측에 제목용 넉넉한 여백 확보, 투명 배경.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S02 — 오늘의 목표

- **파일명**: `s02_revenue-pillar-focus.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹기 권장, 가로 약 3.3~3.8in. 제목/불릿이 좌측에 있을 때 우측 코너를 채우는 용도.
- **이미지가 돕는 점**: 가치·수익·비용 3요소 중 가운데(수익)만 코발트로 빛나 "오늘의 초점은 수익"을 한눈에 전달한다.
- **재검토 반영**: 체크리스트 3번 위반: subject가 'rising curve-ramp', 'abstract growth slope', 'step blocks' 같은 성장 그래프/차트성 요소를 묘사하는데, 코인에는 'no markings'를 명시했지만 정작 램프·곡선·step block 부분에는 'no axis, no gridlines, no ticks, no numbers, no value labels'가 명시돼 있지 않다. 성장 곡선+계단 블록은 이미지 생성 시 축 눈금/퍼센트/수치 라벨이 박힐 위험이 가장 높은 형태이므로 명시적 가드 없이는 위반으로 본다. / image_generation_prompts.md의 'no numbers' / 'no readable text, no labels' 규칙(UX 은유·플로우 다이어그램 템플릿)에 비춰, 차트성 형태를 '추상·눈금없음·수치없음'으로 못 박지 않은 것은 고정 스타일 계약 위반. / 보조성: 강의 메시지는 '가치·수익·비용 세 기둥 중 가운데(수익)가 오늘의 초점'인데, 프롬프트는 이를 좌하→우상 '오르막 끝 정상=수익'의 순차적 등반 은유로 바꿔, 가치·비용이 램프 위 낮은 단계로 흩어져 '셋 중 가운데를 강조'라는 구조가 흐려지고 '수익=최종 목표/도착점'으로 오독될 여지가 있다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: Three rounded glossy translucent pillar blocks standing side by side in a single row on a white surface: the left and right blocks are short, pale ice-blue and dim, while the center block is noticeably taller, made of glowing cobalt-blue glass and clearly the focal point. Resting on top of the elevated center block is one smooth featureless glossy coin disc with absolutely no markings, no engraving, and no numbers, catching soft upper-left light. A gentle cobalt glow halo radiates only around the center block to single it out as 'revenue', the middle of three, as today's focus, while the two flanking blocks read as plain supporting pillars for value and cost. Purely abstract iconic shapes, no chart axes, no gridlines, no tick marks, no scale, no numbers, and no text of any kind anywhere in the image.
COMPOSITION: Main object: the row of three rounded pillar blocks centered in the frame, with the tall glowing cobalt center block and its plain coin as the single brightest focal point. Supporting elements (2-4): the featureless markless coin floating just above the center block, the two short dim ice-blue side blocks (left and right), and one faint cobalt light-bloom behind the center block. Keep generous transparent margin all around; isometric ~35 degree camera and upper-left soft light shared with the set; single soft wide low shadow beneath all three blocks. No orange, no readable text, no numbers, no labels, no axis or gauge marks.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S03 — 왜 BM — 그 질문

- **파일명**: `s03_money-question-bubble.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우상단 영역에 약 3.2in 폭으로 배치. 흰 배경 슬라이드의 본문 텍스트(질문 멘트) 오른편 여백에 얹어, 질문 말풍선이 본문 쪽을 향하도록.
- **이미지가 돕는 점**: 발표 중 '이거 어떻게 돈 벌어요?'라는 핵심 질문 순간을, 앱 화면을 겨눈 물음표 말풍선과 동전 한 닢으로 한눈에 시각화한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A glossy ice-blue rounded speech bubble floating mid-air, holding a single bold cobalt-blue 3D question-mark sculpture inside it as the focal point. The speech bubble's small tail points downward toward a tiny frosted-glass smartphone showing only abstract blank UI blocks (a header bar and two card shapes, no readable content), as if the question is being aimed at a just-presented app. One small glossy cobalt coin disc (a plain smooth puck, no markings or numerals) rests near the phone's base, slightly tilted, catching the upper-left light.
COMPOSITION: Main object: the speech bubble with the question-mark sculpture, sitting upper-center and largest. Supporting objects (2-3): the small app-screen smartphone below-left of the bubble tail, the single tilted coin disc near the phone, and one faint translucent ice-blue echo-bubble (a smaller empty rounded bubble) trailing behind to suggest a spoken question. Keep the same ~35° isometric camera and upper-left soft light; generous empty space at lower-right so the asset reads cleanly as a corner overlay.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S04 — 결론 먼저 (가치·수익·비용)

- **파일명**: `s04_value-revenue-cost-flow.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 가로로 얹기. 폭 약 4.5in의 hero 사이즈로, 본문 텍스트 블록 오른쪽 빈 영역에 흐름 방향(좌→우)이 슬라이드 읽기 방향과 맞도록 배치.
- **이미지가 돕는 점**: 가치→수익→비용 3단 흐름을 한 줄로 보여주되 가운데 수익(코인) 타일만 띄우고 강조해 '오늘은 돈' 메시지를 한눈에 전달한다.
- **재검토 반영**: 체크리스트 3 위반: subject에 'a single thick coin disc'(코인)가 핵심 초점으로 등장하지만, 이 프롬프트 전체(subject/comp)에 'no text / no numbers / no readable labels / no logos' 같은 명시적 금지 문구가 전혀 없다. 규칙 문서의 모든 템플릿(UX 개념 은유, UI 목업, 데이터 흐름 등)은 예외 없이 'No readable text, no numbers, no logos, no watermark'를 명시하는데, 이 프롬프트는 누락. 코인 디스크는 이미지 모델이 액면가 숫자/통화기호('1', '$', 각인 글자)를 박아 넣을 위험이 가장 큰 요소라 실제 생성 시 숫자가 박힐 가능성이 높음 → 명시적 가드 누락은 위반. / 체크리스트 3 보강 위반: 'value chain', 'collection bulge', 'revenue point' 등 개념 노드가 다수지만 'abstract / no ticks / no numbers' 명시가 없음. 코인 외 노드들도 추상으로 명시되지 않아 라벨/눈금이 생성될 잔여 위험 존재. / 보조성: 연속된 파이프(흐름) 위에 가치(하트/선물)→수익(중앙의 유일한 코발트 코인 불룩, 단일 초점)→비용(빠져나가는 깔때기) 3노드를 배치해 '가치→수익→비용 흐름, 오늘은 돈(수익)'을 입문자가 한눈에 연결할 수 있게 정확히 보조함.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A single horizontal value chain rendered as one continuous translucent ice-blue pipe running left to right, with three rounded frosted-glass capsule nodes threaded onto it like beads on a wire, all kept abstract and iconic with no text, no numbers, no labels and no ticks: the left node a pale ice-blue heart/gift shape standing for value created, the right node a low pale-gray drained funnel shape standing for cost, and only the middle segment of the pipe widening into a glossy cobalt collection bulge where a single plain blank coin disc sits cradled (smooth, featureless, with no engraved numerals, no currency symbols and no markings) as the one money-collecting point of the whole chain. The pipe is thin and calm at both ends and brightens only through the cobalt coin bulge, so the eye reads one continuous process with one money node rather than three competing tiles.
COMPOSITION: Main object: the long left-to-right ice-blue pipe spanning the lower-center as a clear horizontal spine, with the cobalt blank-coin bulge as the single bright focal node mid-span. Supporting elements (2-3): tiny floating ice-blue value dots drifting along the pipe and converging into the coin bulge, a small glossy directional chevron just before the bulge to show flow direction, and a faint low cobalt glow ring only beneath the coin segment. Palette strictly white, light gray, ice-blue and cobalt blue only. Same isometric ~35 degree camera and upper-left soft light as the set; one wide soft low shadow beneath the whole pipe; generous empty space above and to the right so it sits cleanly as a transparent overlay. No orange, no red, no other accent colors. No readable text, no numbers, no labels, no currency symbols, no logos, no watermark; every node abstract and markless.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S05 — BM vs 수익 모델

- **파일명**: `s05_bm-vs-revenue.png`  ·  **역할**: hero
- **배치**: 우측 여백~우하단 코너에 가로로 길게 얹기(투명 PNG). 폭 약 4.0in 권장, 콘텐츠와 겹치지 않게 슬라이드 우측 하단 1/3 영역에 배치.
- **이미지가 돕는 점**: 큰 설계도 플랫폼(BM 전체)과 떠오른 작은 결제 단말(수익모델 한 부분)의 크기 대비로 '전체 설계 vs 돈 받는 한 부분'을 한눈에 보여준다.
- **재검토 반영**: 규칙 3(텍스트/숫자 금지 + 숫자 박힐 위험 요소는 '추상·눈금없음·수치없음' 명시 필수) 위반: subject의 '글로시 코발트 POS/계산 단말 + 둥근 결제 패드 + 동전이 떨어지는 슬롯'은 가격 표시·숫자 키패드·결제 금액 등 읽히는 숫자가 생성될 위험이 매우 높은 요소다. 'POS 패드는 추상 형태'라는 약한 언급만 있을 뿐, 이 per-slide subject/comp 어디에도 'no readable text / no numbers / no price display / markless'라는 명시적 가드가 없어 실제 생성 시 숫자·통화기호가 박힐 위험이 있다. / 규칙 3 보강: '동전이 떨어지는 슬롯'의 '동전'도 숫자/통화 표식이 새겨진 코인으로 렌더링될 소지가 있어, 코인 표면도 '무지(blank)·각인 없음'으로 명시되지 않은 점이 위험하다. / 보조성: 넓은 반투명 설계도 플랫폼(전체) 위에서 단 하나의 작은 코발트 POS 모듈만 떠올라 빛나며 분리되는 구도가 'BM=전체 운영 설계도 vs 수익모델=돈 받는 한 부분'을 입문자도 한눈에 연결하게 한다. 보조성 강함.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: 한 장의 큰 반투명 운영 설계도 플랫폼: 아이스블루 프로스트 글래스 베이스 위에 여러 추상 모듈(둥근 진열대 블록, 인물 없는 빈 카운터, 톱니바퀴, 흐름을 나타내는 코발트 화살표 아치, 보관 박스 등)이 한 시스템으로 배열된 미니어처 가게/플랫폼. 그 모서리 한 칸에서 단 하나의 작은 글로시 코발트 결제 단말(완전히 추상적인 둥근 패드 + 무지 코인 형태의 떨어지는 토큰, 표면에 아무 숫자·통화기호·키패드 숫자·가격 표시 없음)이 살짝 위로 떠올라 빛나며 분리되어, 전체 중 '돈 받는 한 부분'임을 강조한다. 모든 모듈·패드·코인 토큰은 표면이 비어 있고 읽히는 텍스트·숫자·눈금·라벨이 전혀 없는 순수 추상 형태로 묘사한다.
COMPOSITION: 주오브젝트는 넓은 반투명 설계도 플랫폼(전체의 약 70%)으로 좌측에 크게 배치. 보조 오브젝트: (1) 플랫폼 위에서 살짝 떠오른 추상 코발트 결제 모듈(둥근 빈 패드 + 무지 코인 토큰, 숫자·문자·키패드 표식 없음), (2) 그 모듈과 플랫폼 칸을 잇는 가는 코발트 점선 리더/얇은 연결 핀, (3) 플랫폼 위 추상 모듈 1~2개(톱니바퀴와 흐름 화살표 아치)로 '운영 전체'를 암시. 동일 아이소메트릭 ~35° 시점, 좌상단 소프트광, 한 줄기 넓고 낮은 그림자. 결제 모듈만 미세하게 더 밝아 시선이 그 한 부분에 모이게 한다. 화면 어디에도 읽히는 글자·숫자·통화기호·게이지·차트·눈금이 없도록 하고, 모든 표면은 매끈한 무지 추상 면으로 유지한다.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S06 — AI 마케팅 예시

- **파일명**: `s06_ai-revenue-merge.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 배치 권장, 대략 폭 3.6in. 흰 배경 슬라이드이므로 본문/예시 텍스트는 좌측에 두고, 투명 PNG 히어로를 오른쪽 빈 칼럼에 얹어 3개 수익모델이 1개 서비스로 합쳐지는 흐름이 우측에서 시선을 받도록.
- **이미지가 돕는 점**: 하나의 AI 서비스가 구독·코인·리포트 등 수익모델 2~3개를 하나의 흐름으로 결합한다는 핵심 메시지를 3-to-1 합류 비주얼로 한눈에 보여준다.
- **재검토 반영**: 규칙3(텍스트/숫자 금지, 차트·리포트류는 반드시 'abstract/no ticks/no numbers' 명시) 위반: 'folded frosted-glass report panel with raised bar-like ridges' — 리포트 패널 + 막대형 능선은 명백한 차트/리포트류인데 'abstract·눈금 없음·수치 없음·라벨 없음'이 명시되지 않음. 실제 생성 시 리포트 패널 위에 숫자/축/라벨이 박힐 위험이 큼. / 규칙3 위반(숫자 위험): 'fat embossed cobalt coin disc' — 동전 디스크는 액면가 숫자/문자가 양각되어 렌더될 확률이 높은데 'no text/no numbers' 표기가 없음. 같은 subject 내 'subscription card-block'에는 '(no text)'를 달았으면서 coin/report 요소에는 누락되어 일관성도 깨짐. / 보조성: 중앙 AI 포드 1개에서 나온 수익원 3개의 도관이 하나의 채널·집수지로 합류하는 3-to-1 구도가 '한 서비스가 수익모델 2~3개를 하나로 조합'이라는 메시지를 입문자도 직관적으로 연결 가능. 보조성 자체는 우수.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A small friendly rounded AI assistant pod — a glossy ice-blue translucent dome with a single calm cobalt lens-eye and a thin floating halo ring — sits at the center as the "one service." Three distinct glossy revenue tokens orbit close around it, each a different abstract shape so they never blur together and each completely blank with no text, no numbers, no symbols, no labels: a thick rounded subscription card-block with a simple notch, a plain fat embossed cobalt disc with a smooth blank face (no coin markings, no denomination, no engraving text), and a folded frosted-glass panel with a few abstract rounded raised ridges (purely decorative, no chart axes, no ticks, no scale, no numbers, no labels). Three smooth translucent ice-blue conduits curve out from the three tokens and merge into ONE wider cobalt channel that flows down-forward into a single rounded collector basin, visually fusing three income sources into one stream.
COMPOSITION: Hero layout: AI pod as the dominant main object slightly upper-center, the three abstract revenue tokens arranged in a loose fan around its upper-left, top, and upper-right at clearly different shapes/sizes for instant distinction. The three conduits sweep downward and braid into the single merged channel + collector basin in the lower-third, giving an obvious 3-to-1 convergence read. Keep the deep-navy only inside conduit shadows and the pod's underside for depth. Generous empty space framing all sides; the merged-channel "1" endpoint left visually clear. Same isometric ~35° top-down camera and soft upper-left light as the rest of the set; one soft wide low shadow beneath the basin. Absolutely no readable text, numbers, ticks, gauge marks, or labels on any surface.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S07 — 15개 수익 모델 · 메뉴판 (1/2)

- **파일명**: `s07_revenue-model-menu-rack.png`  ·  **역할**: spot
- **배치**: 우상단 코너, 제목/eyebrow 텍스트 오른쪽의 빈 여백에 배치(표가 시작되는 y=2.6 위쪽 영역). 약 2.2~2.6in 크기의 작은 스팟으로, 전체 폭을 채운 표와 겹치지 않게 코너 액센트로만 얹기.
- **이미지가 돕는 점**: 펼쳐진 카드 메뉴판에서 한 장을 골라 드는 형상이 '수익 모델은 외우는 게 아니라 메뉴에서 골라 조합한다'는 핵심 메시지를 한눈에 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A small standing menu-board easel made of frosted-glass and glossy white plastic, its face holding a fanned row of blank rounded cards in graded ice-blue tones, like a restaurant menu of options waiting to be picked. One single card is lifted and tilted slightly forward off the rack, glowing in cobalt-blue with a soft beveled edge, signaling "choose one." Cards carry no text or numbers — only smooth abstract panels and tiny embossed slots.
COMPOSITION: Main object: the glossy menu-board easel with the fanned ice-blue card rack, centered in the asset's own square frame. Supporting elements (2-3): the one lifted cobalt card hovering just above its slot, a thin frosted-glass tray base anchoring the easel, and two tiny floating rounded chips drifting near the lifted card to hint at "pick and combine." Keep the standard isometric ~35° camera and upper-left soft light; one wide low shadow under the easel; generous transparent margin so it can sit cleanly in a corner.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S08 — 15개 수익 모델 (2/2) · 조합

- **파일명**: `s08_combine-revenue-modules.png`  ·  **역할**: hero
- **배치**: 우측 중앙 빈 여백에 약 3.3in 폭으로 배치(콘텐츠 텍스트는 좌측 정렬 가정), 투명 PNG를 얹어 본문을 가리지 않게.
- **이미지가 돕는 점**: 서로 다른 모듈을 골라 끼워 맞추는 모습이 "발명이 아니라 2~3개 모델을 조합한다"는 핵심을 한눈에 보여준다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: Three distinct translucent geometric modules — a glossy ice-blue hexagonal prism, a frosted-glass cylindrical token, and a cobalt-blue rounded cube — each with a different protruding connector notch, snapping together along magnetic-looking seams into one unified composite block at the center; tiny soft glints mark the click-in seams where the pieces lock. The shapes are deliberately different from one another (not identical tiles) to read as "mixing unlike models," and they remain visibly separable parts within the single fused unit.
COMPOSITION: Main object: the fused composite block formed of the three different modules locked together, centered. Supporting elements (2-3): one small unattached module hovering at the upper right as if being selected to add next, plus two faint floating connector notch-shapes near the lower left suggesting interchangeable options to pick from. Generous empty space around the cluster; keep the shared isometric ~35° camera and upper-left soft light so it matches the set.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S09 — 워밍업 — 역기획

- **파일명**: `s09_magnify-revenue-point.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 빈 여백에 약 3.2~3.8in 크기의 투명 PNG로 배치. 좌측 본문(역기획 안내 텍스트/스텝)은 비우고, 발견 모티프가 시선을 본문 쪽으로 끌어오도록 렌즈를 약간 좌향으로.
- **이미지가 돕는 점**: 렌즈 아래 한 블록만 빛나는 코인으로 '익숙한 앱에서 수익 포인트를 콕 집어 찾는다'는 워밍업 역기획 핵심을 한눈에 보조한다.
- **재검토 반영**: 규칙 3(텍스트/숫자 금지) 위반 위험: subject/comp 어디에도 'no readable text / no numbers / no labels' 명시가 없음. 라이브러리 베이스 프롬프트는 항상 'No readable text, no numbers...'를 포함하는데 이 프롬프트는 누락. 특히 'floating coin-disc'(동전 디스크)는 수익 상징이라 실제 생성 시 동전 면에 통화기호($, ₩)나 숫자/액면가가 박힐 위험이 매우 높음 → 명시적 차단 문구 필요. / 규칙 3 보강: 'abstract rounded UI block' / 'light-gray rounded blocks'는 추상으로 명시됐으나, 동전·핀 마커·들린 UI 블록 모두 'blank face, no text, no numbers, no symbols'로 명시되어야 안전. 현재는 추상 표시가 UI 블록에만 걸려 있고 동전/핀에는 없음. / 규칙 4(배경) 미세 미흡: 'transparent or white background' 명시가 comp에 없음. 투명 PNG 세트 계약상 'transparent background' 명시 권장(고립 표현만으로는 바닥/장면 배제는 되나 투명 배경은 단정 못 함). / 보조성: 돋보기로 익숙한 폰 앱 위 단 하나의 수익 요소(코인)가 빛나는 구도는 '익숙한 앱에서 수익 포인트 찾기' 메시지를 입문자가 한눈에 연결할 만큼 명확함.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A glossy cobalt-rimmed magnifying glass hovering at a tilt over a single small frosted-glass smartphone screen; the lens is a circle of translucent ice-blue glass, and directly beneath it one abstract rounded UI block on the screen lifts up and glows brighter cobalt, capped by a small floating blank coin-disc (smooth blank face, no engraving) and a simple rounded pin marker that pop out of the lens like a discovered revenue point. Every UI block, the coin-disc, and the pin are completely abstract and blank with no readable text, no numbers, no currency symbols and no labels of any kind. The rest of the screen stays calm light-gray rounded abstract blocks so the one glowing cobalt money element clearly stands out as the thing being found.
COMPOSITION: Main object: the magnifying glass angled from upper-left over the phone (classic isometric ~35 degree view, soft upper-left light catching the glossy lens edge). Supporting elements (2-4): the small phone screen below, the glowing abstract UI block lifted under the lens, a blank coin-disc, and a short rounded pin marker rising out of the magnified spot. Palette strictly white, light gray, ice blue and cobalt blue only. Keep one soft wide low shadow under the phone and lots of empty space around the cluster, isolated on a transparent background so it reads as a single discovery scene, not a busy collage or scene. No readable text, no numbers, no currency symbols, no labels, no logos. No orange (no warning here).

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S10 — 배민 예시 — 지불 주체

- **파일명**: `s10_payer-vs-user-coin-arc.png`  ·  **역할**: hero
- **배치**: 우측~우하단 빈 여백에 얹기. 본문(역기획 4단계 표·배민 예시 텍스트)이 왼쪽/중앙을 차지하므로, 투명 PNG를 슬라이드 우측 중앙에서 우하단에 걸쳐 약 3.8~4.2in 폭으로 배치. 코인이 위로 떠오르는 부분이 살짝 위를 향하게 두어 본문 위쪽 여백 쪽으로 시선을 끌되 텍스트와 겹치지 않게.
- **이미지가 돕는 점**: 손님 폰에서는 돈이 나가지 않고 가게에서만 코인이 흘러나오게 그려, '쓰는 사람 ≠ 내는 사람(가게가 지불 주체)'을 한눈에 보여준다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: An asymmetric two-sided exchange scene built on a single low cobalt arc that bridges two small rounded pedestals. On the LEFT pedestal: a glossy ice-blue smartphone tilted toward the viewer with abstract food-order UI blocks (a rounded card, a small list row, a plus-button shape) and a tiny floating bag/box icon — clearly the user who consumes. On the RIGHT pedestal: a small frosted-glass storefront with a rounded awning and a simple shutter, clearly the merchant. One single glossy cobalt coin disc lifts UP and OUT of the shop's rooftop and travels along the cobalt arc toward the phone side, with two or three smaller coin discs queued behind it — making the money unmistakably flow FROM the shop. The phone has NO coins leaving it, encoding "user uses, shop pays." Keep all surfaces as rounded translucent plastic and frosted glass; no readable glyphs, only abstract block/icon shapes.
COMPOSITION: Main object: the cobalt connecting arc carrying the coin, centered as the visual spine. Supporting elements (2–4): the user smartphone on its pedestal (left-lower), the small storefront on its pedestal (right-upper, slightly raised so the coin reads as flowing out and across), the queued stack of 2–3 cobalt coins behind the lead coin, and one faint ice-blue directional chevron hint along the arc (geometry only, no symbols). Keep the storefront visually heavier/grounded and the phone lighter to subtly weight the "payer" on the shop side. Same ~35° isometric camera and upper-left soft light as the set; generous empty space wrapped around the cluster, single soft wide low shadow under both pedestals.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S11 — 수익 모델 고르는 5질문

- **파일명**: `s11_revenue-filter-funnel.png`  ·  **역할**: hero
- **배치**: 우측 또는 우하단 여백에 투명 PNG로 얹기. 본문 체크리스트/질문 텍스트가 좌측을 채우므로 이미지를 슬라이드 우측 중앙~우하단에 약 3.3~3.8in 폭으로 배치.
- **이미지가 돕는 점**: 5단 필터를 통과/탈락 칩으로 시각화해 '억지 수익 모델을 거르는 5가지 질문' 체크리스트 개념을 한눈에 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A wide translucent ice-blue funnel-filter shaped like a five-tier sieve, each tier a perforated frosted-glass mesh ring. Several small glossy revenue tiles (plain rounded plastic chips, no markings) drop into the wide mouth; cobalt-blue "good fit" chips pass cleanly through and stack neatly below, while a couple of mismatched chips get caught and bounce off the rim as rejects. A small frosted-glass checklist panel floats beside the funnel, its rows shown only as five abstract embossed checkmark grooves (no text).
COMPOSITION: Hero funnel-sieve centered slightly left as the main object. Boa: (1) a tidy stack of approved cobalt chips settling at the bottom spout, (2) two rejected ice-blue chips tumbling off the funnel rim to the side, (3) the small floating checklist panel with five checkmark grooves to the right, (4) optional one chip mid-air entering the funnel mouth. Keep generous empty space around all sides; shared isometric ~35 degree camera and soft upper-left light, single low wide shadow under the funnel.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S12 — 돈 내는 사람 = 쓰는 사람?

- **파일명**: `s12_payer-vs-user.png`  ·  **역할**: spot
- **배치**: 콘텐츠가 찬 흰 배경 슬라이드의 우측 중앙~우하단 여백에 투명 PNG로 얹기. 권장 폭 약 3.0~3.4in, 본문 텍스트 열과 겹치지 않게 우측 코너에 정렬.
- **이미지가 돕는 점**: 동전 하나를 사이에 둔 두 인물로 '쓰는 사람과 내는 사람이 같은가, 다른가'라는 핵심 질문을 한눈에 떠올리게 한다.
- **재검토 반영**: 규칙3(텍스트/숫자 금지) 위반 위험 — '동전 하나'를 주오브젝트로 두면서 동전 표면에 대한 'blank/no engraving/no markings/no numbers' 명시가 전혀 없음. 실제 생성 시 동전 액면가·숫자·문자가 양각으로 박힐 위험이 크다. 차트류는 아니지만 숫자가 박히기 가장 쉬운 오브젝트가 바로 동전이므로 무지(無紋) 명시가 필수. / 규칙3(읽히는 글자/라벨 금지) 위반 — subject·comp 모두 '물음표 픽토그램/추상 물음표 곡선'을 핵심 긴장 요소로 사용. '글자가 아닌 추상 곡선'이라 단서를 달았으나 물음표(?)는 그 자체로 읽히는 타이포그래픽 글리프이며, 생성기는 실제 '?' 문자를 렌더링할 가능성이 매우 높다. 문서의 'no readable text, no labels, no tiny UI labels' 규칙과 정면 충돌. / 공통 네거티브 프롬프트(readable text, distorted letters) 관점에서도 물음표 글리프는 '왜곡된 글자'로 출력될 소지가 있어 세트 일관성을 깬다. / 보조성: 좌(쓰는 사람)·우(돈 내는 사람)를 색으로 구분한 두 흉상이 동전 하나에 동시에 손을 뻗는 구도는 '돈 내는 사람=쓰는 사람인가'라는 핵심 질문을 입문자도 한눈에 연결할 만큼 명확하다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: 두 개의 둥근 반투명 유리 인물 형태(머리+어깨만 추상화한 무표정·무이목구비 흉상)가 서로 마주 본다. 왼쪽은 아이스블루(#8EC3FF) '쓰는 사람', 오른쪽은 코발트블루(#0066CC) '돈 내는 사람'. 두 인물 정중앙에 표면이 완전히 매끈한 무지(無紋) 코발트블루 동전 하나가 살짝 떠 있다 — 동전 표면에는 어떤 글자·숫자·각인·문양도 없는 민무늬 글로시 디스크. 양쪽에서 뻗은 둥근 손/팔 형태가 그 동전 하나에 동시에 닿을 듯 말 듯 하여 '누가 실제로 이 돈을 놓는가'를 한순간 정지된 제스처로 묻는다. 긴장은 글자 없이 형태로만 표현한다: 두 흉상 사이가 미세하게 어긋난(같은 듯 다른) 비대칭으로 배치되어 '동일인가, 다른 사람인가'의 미묘한 차이를 시각적으로 드러낸다. 어떤 픽토그램·물음표·라벨·UI 카피도 포함하지 않는다.
COMPOSITION: 주오브젝트는 중앙에 떠 있는 표면 민무늬(글자·숫자·각인 없음)의 단일 코발트블루 동전 + 양옆 두 유리 흉상(좌 아이스블루·우 코발트블루). 거의 좌우 대칭이되 한쪽을 아주 살짝 비틀어 '같은가/다른가'의 긴장을 형태만으로 표현. 보조 요소(글자·숫자·픽토그램 없이): (1) 두 흉상을 잇는 아주 옅은 점선 호 형태의 연결선 1개, (2) 동전 아래 살짝 떠오른 둥근 받침 타일(흰색+프로스티드 글래스) 1개, (3) 동전을 향해 양쪽에서 부드럽게 뻗은 코발트블루 손/팔 실루엣. 팔레트는 흰색·연회색·아이스블루·코발트블루만 사용(오렌지 등 추가색 금지). 세트 공통 아이소메트릭(~35° 탑다운)·좌상단 소프트광 유지, 단일 넓고 연한 바닥 그림자, 주변 여백 충분, 투명 배경. 읽히는 텍스트·숫자·라벨·물음표·로고·워터마크 일절 없음.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S13 — 실습 안내 — 린캔버스

- **파일명**: `s13_lean-canvas-board.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹기. 본문/안내 텍스트가 왼쪽을 차지하므로 투명 PNG를 오른쪽에 배치, 폭 약 3.5in(슬라이드 우측 약 40% 영역).
- **이미지가 돕는 점**: 9칸 한 장짜리 캔버스 도구라는 핵심 메시지를 빈 칸·우선 칸·채워가는 동작으로 한눈에 보여줘 실습 안내를 직관적으로 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A single thin floating frosted-glass canvas board, gently divided into a 3x3 grid of nine shallow recessed cells like an ice-blue ice-cube tray for ideas. Each empty cell holds only a tiny abstract glossy placeholder shape — a rounded bar, a small block, a dot cluster — never any letters or numbers; two or three cobalt-blue cells sit slightly raised and lit to read as the priority cells, while one corner cell stays clear and empty, waiting to be filled.
COMPOSITION: Main object: the one 3x3 glass canvas board centered-right, tilted in the shared isometric view with the upper-left soft light catching its glossy rim. Supporting elements (2-4): a small cobalt-blue rounded pen/stylus resting along the lower edge, one tiny translucent ice-blue sticky-note tile peeling up from a cell as if just placed, and a couple of loose abstract blocks hovering nearby ready to drop into empty cells. One soft wide low shadow under the board; generous empty space on the left and around the object.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S14 — 린캔버스 9칸

- **파일명**: `s14_lean-canvas-9cells.png`  ·  **역할**: spot
- **배치**: 우측 중앙~우하단 코너에 약 3.2~3.6in 폭으로 배치. L13 Canvas Overview 레이아웃의 그리드/텍스트가 좌측을 채우므로, 투명 PNG를 본문 오른쪽 빈 여백에 얹어 핵심 강조(6·7 강조, 8 비움)를 시각적으로 반복.
- **이미지가 돕는 점**: 9칸 캔버스에서 수익·비용 두 칸을 코발트로 빛내고 한 칸을 비워 둠으로써 "6·7 강조, 8 비움" 메시지를 글자 없이 한눈에 보조한다.
- **재검토 반영**: 규칙 3(텍스트/숫자 금지) 위반: 린캔버스(9칸 보드)와 'coin disc(revenue)'는 본질적으로 라벨·숫자·통화기호가 박히기 쉬운 차트/보드/리포트 계열 요소다. 규칙은 이런 요소에 대해 '추상적·눈금 없음·수치 없음·라벨 없음'이 명시돼야 한다고 요구하는데, subject의 'no markings'는 두 sub-chip에만 한정 적용되고 부모 canvas/cell과 coin disc 전체를 덮는 'no readable text / no labels / no numbers' 문구가 subject·comp 어디에도 없다 → 실제 생성 시 셀 라벨이나 코인 표면 숫자/기호가 박힐 위험. 공통 네거티브의 readable text 금지도 프롬프트 본문에 미반영. / 규칙 3 추가 위험: 'coin disc'는 돈 은유라 통화기호($, ₩)나 숫자가 새겨질 확률이 매우 높음에도 코인 자체에 'blank / no symbol / no engraving' 가드가 없음. / 보조성: 단일 셀을 들어올린 구도라 '수익/비용 강조'는 어느 정도 보조하지만, 슬라이드 핵심인 '9칸 전체'와 '채우는 순서'가 시각적으로 드러나지 않아(의도적으로 grid를 다시 보여주지 않음) 입문자가 린캔버스 9칸·작성순서를 한눈에 연결하기 어렵다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A clean isometric Lean-Canvas board shown as a 3x3 arrangement of rounded frosted-glass tiles floating just above a white surface, all rendered as plain abstract panels with no markings, no labels, no numbers and no readable text of any kind. Two tiles are highlighted as glossy cobalt-blue hero blocks lifted slightly forward to read as the revenue and cost cells: on each lifted tile sits one small abstract symbolic shape only — a plain blank cobalt coin disc with a completely smooth unmarked surface (revenue) and a small downward-pointing pale ice-blue wedge (cost), both as pure abstract shapes with no symbols, digits or engraving. One tile is intentionally left empty as a pale light-gray recessed slot outlined by a dashed cobalt frame to show an unfilled cell, and a single thin cobalt arrow curves softly across the remaining plain tiles to suggest a fill order, without touching any text or number.
COMPOSITION: Main object: the 3x3 frosted-glass Lean-Canvas tile board, centered, with the two raised cobalt revenue/cost tiles as the focal point. Supporting elements (2-4): the blank cobalt coin disc and pale ice-blue cost wedge on the two hero tiles, one dashed-outline empty light-gray tile marking the unfilled cell, and a single thin cobalt sequence arrow curving across the plain tiles to imply the writing order. Keep the isometric ~35-degree camera and upper-left soft light shared by the set, glossy translucent plastic and glass material, one soft wide low shadow under the board, generous transparent margin all around. Strictly no readable text, no labels, no numbers, no currency symbols, no logos. No orange.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S15 — 가장 위험한 가정 (RAT)

- **파일명**: `s15_riskiest-assumption-tower.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹기. 본문(RAT 설명 텍스트)은 좌측에 두고, 투명 PNG를 슬라이드 우측에 약 3.3~3.8in 크기로 배치.
- **이미지가 돕는 점**: 하나의 취약한 블록이 전체 구조를 떠받친다는 시각으로 '성립하려면 무엇이 참이어야 하나(RAT)'라는 핵심 메시지를 한눈에 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A small stacked tower of frosted-glass and ice-blue translucent blocks forming a load-bearing structure, where one block near the lower-middle is rendered in thin, cracked, fragile glass with a single softly glowing orange warning facet — clearly the most precarious piece holding the whole stack up. A faint cobalt-blue magnifier or inspection ring hovers over that fragile block, singling it out as the assumption to test, while the upper blocks lean slightly, implying the whole structure depends on that one.
COMPOSITION: Main object: the glass block tower (4-5 stacked blocks) centered, with the highlighted fragile orange-facet block as the visual focus. Supporting elements: (1) a floating cobalt-blue magnifier/inspection ring zeroed on the fragile block, (2) one or two faint hairline crack lines radiating from that block, (3) a small ice-blue checkmark token resting beside the base, suggesting the test that would validate it. Keep the same isometric ~35° camera and upper-left soft light, with generous empty space around the tower and one soft wide low shadow beneath.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S16 — 핵심 지표

- **파일명**: `s16_metrics-dashboard-gauges.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹어 사용. 본문 지표 카드 좌측, 헤더 아래. 폭 약 3.3~3.8in, 투명 PNG로 텍스트 영역과 겹치지 않게 배치.
- **이미지가 돕는 점**: CAC·LTV·이탈률 세 지표를 한 패널의 게이지·상승 기둥·하강 막대로 시각화해 '핵심 지표 대시보드' 메시지를 한눈에 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A floating frosted-glass dashboard panel tilted in isometric view, carrying a small cluster of three distinct glossy measurement instruments side by side: a round cobalt-blue circular gauge with a needle dial (cost meter), a tall ice-blue vertical column that fills upward like a value reservoir, and a small descending stepped bar set in deep-navy (the declining metric). One slim glossy progress ring wraps the panel edge. All readouts are blank abstract shapes — pure plastic blocks, rings and needles with no digits or labels.
COMPOSITION: Main object: the single translucent dashboard panel hovering slightly above its soft wide shadow. Supporting elements (3-4): the round needle gauge, the upward-filling glass column, the stepped down-trend bar, plus one tiny detached cobalt data-dot orbiting near a corner. Instruments are clustered toward the panel center with generous empty space framing the panel; same ~35° top-down isometric camera and upper-left soft light as the rest of the set, no orange since nothing here is a warning.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S17 — 지표 1개 고르기

- **파일명**: `s17_pick-one-metric-gauge.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 투명 PNG로 얹기, 약 3.2~3.6in 폭. 좌측 텍스트(5개 지표 설명·매칭표)와 겹치지 않게 우측에 배치.
- **이미지가 돕는 점**: 여러 지표 중 수익원에 맞는 '딱 1개'만 골라 ⑧칸에 적는다는 핵심 메시지를, 스포트라이트로 들어올린 게이지 하나로 한눈에 보여준다.
- **재검토 반영**: 규칙 3(텍스트/숫자 금지, 차트·게이지·다이얼류는 반드시 '추상적·눈금 없음·수치 없음' 명시): subject가 'circular gauge dials'(게이지/다이얼)을 5개 그리는데, 게이지는 본질적으로 숫자 눈금이 박히기 가장 쉬운 요소다. 금지 문구가 'no numbers or ticks-as-text'로만 돼 있어 모호하다 — 'ticks-as-text'는 '글자형 눈금'만 금지하는 것으로 읽혀, 숫자 없는 tick 눈금이나 게이지 호의 수치 스케일이 실제 생성 시 박힐 위험이 남는다. 'abstract / markless / no ticks / no numbers / no labels'처럼 모든 눈금·스케일·라벨을 명시적으로 차단해야 하는데 그 수준이 아니다 → 위반으로 보고 수정. / 보조성: 5개 동일 게이지 중 단 1개만 코발트 받침 위로 올리고 스포트라이트로 강조, 나머지 4개는 흐리게 처리 → '지표 딱 1개만 선택' 메시지를 입문자가 한눈에 직관적으로 연결할 수 있어 보조성은 강하다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A short row of five small identical abstract circular dial shapes (frosted-glass faces with one smooth glossy ice-blue arc and one simple cobalt pointer each, completely blank faces — no scale, no tick marks, no gradations, no numbers, no labels, no readable text of any kind) resting low on a pale base. Exactly ONE dial is lifted up onto a slightly raised cobalt pedestal and haloed by a soft translucent cobalt-blue spotlight beam from above, its cobalt pointer glowing brightest — the single chosen metric. The other four stay flat, dimmed and slightly desaturated to read as "not picked," while keeping the same blank, markless faces.
COMPOSITION: Main object: the spotlit lifted blank dial on its cobalt pedestal, positioned upper-center of the asset, faces kept fully abstract and free of any markings, numbers, or text. Supporting (2-4): the four low, dimmed markless dials lined up below it; the soft conical cobalt light beam descending from upper-left; one tiny floating ice-blue selection ring hovering around the chosen dial. Same ~35° isometric camera and upper-left soft light as the set; one wide low soft shadow under the row; generous empty space around all sides; transparent background.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S18 — 가격 전략

- **파일명**: `s18_value-scale.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹기. 약 3.3in 폭 권장, 본문 텍스트 블록 오른쪽의 빈 컬럼에 배치.
- **이미지가 돕는 점**: 감(코인 더미)보다 가치(빛나는 보석)가 가격을 좌우한다는 가치 기반 가격 전략 메시지를 저울 비유로 한눈에 전달한다.
- **재검토 반영**: 규칙 3(텍스트/숫자 금지) 위반 위험: subject가 'a stack of plain frosted-glass coins'를 묘사하는데, 동전은 표면에 액면가 숫자/통화기호/문자가 박히기 쉬운 대표적 요소다. 'plain'이라고만 했을 뿐 'blank/unmarked/no numbers/no symbols'가 명시되지 않아 실제 생성 시 동전 표면에 숫자가 박힐 위험이 높다. 문서 규칙은 숫자가 박힐 수 있는 요소에 '눈금 없음·수치 없음' 류 명시를 요구한다. / 규칙 3 보강 필요: subject가 'instead of a flat tag'로 가격표(tag)를 언급한다. 가격표는 숫자가 박히는 전형 요소라 부정형으로 배제했더라도, 안전하게 '가격표/라벨 없음, 모든 표면 무문자'를 comp 부정구에 명시하는 편이 안전하다(현재 부정 명시 부재). / 보조성: 빛나는 cobalt 가치 보석이 흐릿한 cost/instinct 동전 더미보다 저울에서 더 높이 올라가고 deep-navy '전략 받침대'에 고정되는 구도는 '가치 기반 가격 = 감이 아니라 전략'을 입문자가 한눈에 연결할 만큼 명확하다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A glossy translucent ice-blue balance scale used as a pure metaphor (not a chart or gauge): one pan holds a short stack of plain frosted-glass discs representing the cost/instinct side, the other pan is lifted clearly higher by a single brightly glowing cobalt-blue faceted value gem that visibly outweighs the discs — the gem radiates a soft cobalt inner light to signal that perceived value, not gut feeling, sets the price. All disc surfaces and the gem are completely blank with no engraved numbers, no currency symbols, no letters, no price tag, and no labels of any kind. The scale's center column is anchored on a small deep-navy strategy pedestal shaped like a smooth stepped plinth to imply a deliberate framework rather than guesswork. Palette limited to white, light gray, ice-blue, cobalt-blue, and deep-navy only; glossy translucent plastic and glass material, soft rounded shapes.
COMPOSITION: Main object: the ice-blue balance scale centered, slightly rotated so both pans read clearly in isometric view. Supporting elements (3): the dim, blank frosted-glass disc stack on the lower-left pan, the glowing cobalt value gem rising on the right pan, and the navy stepped pedestal base. A fourth tiny motif: one small cobalt arrow-like wedge tucked under the gem pan pushing it upward, hinting at value-driven lift. Generous empty space around the subject on a transparent background; no readable text, no numbers, no currency symbols, no price tags, no labels, no logos, no watermark, no orange or other extra colors. Shared isometric ~35 degrees camera and soft upper-left light; one wide, soft, low shadow under the pedestal only.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S19 — 흔한 오해 → 수정

- **파일명**: `s19_misconception-to-fix.png`  ·  **역할**: hero
- **배치**: 우측 중앙 여백에 얹기, 약 3.5in 폭. 좌측의 "틀린 표현 → 더 정확한 표현" 텍스트 열과 나란히 놓되 본문을 가리지 않게 우측 빈 공간에 배치.
- **이미지가 돕는 점**: 취소된 주황 말풍선이 깔끔한 코발트 체크 말풍선으로 변하는 모습으로 "틀린 표현 → 정확한 표현"의 수정 흐름을 한눈에 보여준다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A left-to-right transformation of a single speech bubble. On the left, a frosted-glass speech bubble tinted faint orange (#F2541B) sits slightly slumped and is struck through by one diagonal orange bar (a crossed-out "wrong wording" marker), its surface holding only a couple of blank abstract pill-shaped blocks instead of any text. A short row of three small glassy plus-shaped morph particles arcs across the middle, dissolving the orange form into the new one. On the right, an upright, cleaner cobalt-blue (#0066CC) glossy speech bubble rises taller and crisper, holding a single thick rounded checkmark made of ice-blue (#8EC3FF) translucent plastic — the corrected, more precise version. Absolutely no letters, numbers, or labels; only abstract blocks, the strike-bar, and the checkmark icon.
COMPOSITION: Hero object is the two-stage speech-bubble pair reading left (wrong) to right (corrected), occupying the center on the shared ~35° isometric camera with upper-left soft light. Supporting elements: the three small floating morph particles bridging the gap, a thin curved cobalt directional arc beneath them suggesting the "before to after" motion, and one soft wide low shadow grounding the pair. Generous empty space around all sides; the right cobalt bubble sits a touch higher than the left to imply upgrade/improvement.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S20 — 안전한 발표 · 1분 템플릿

- **파일명**: `s20_podium-fill-in-script.png`  ·  **역할**: hero
- **배치**: 우측 하단 코너에 투명 PNG로 얹기. 본문(발표 템플릿 빈칸 문구)이 좌측·중앙을 차지하므로 우하단에 약 3.2in 폭으로 배치, 주변 여백 유지.
- **이미지가 돕는 점**: 연단·마이크·빈칸 카드로 '빈칸만 채우면 되는 안전한 1분 발표'를 한눈에 전달해 발표 부담을 낮춘다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A friendly rounded speaker's podium in glossy white and ice-blue plastic with a slim cobalt-blue gooseneck microphone curving up from it, and a frosted-glass script card floating just above the lectern surface. The card carries a few horizontal recessed empty slots — soft rounded grooves like blank fill-in tokens, deliberately label-free (no text, only abstract empty notches), two of them highlighted with cobalt-blue inlay to read as the spots to be filled in.
COMPOSITION: Main object: the podium with its gooseneck mic, slightly right of center. Supporting elements (2-4): the floating frosted-glass script card with abstract empty slots hovering above the lectern; one small detached cobalt-blue rounded token drifting toward an empty slot to suggest fill-in; a tiny ice-blue check chip resting on the lectern base; one soft circular sound-ring glowing faintly at the mic head. Keep generous empty space, shared isometric ~35° camera and upper-left soft light, one wide low shadow under the podium.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S21 — 마무리 — 해커톤 연결

- **파일명**: `s21_canvas-handoff-to-launch.png`  ·  **역할**: spot
- **배치**: 우상단 코너 — 제목 오른쪽, 두 카드(y≈2.95) 위쪽 빈 여백. 폭 약 2.6in의 작은 스팟으로 얹어 카드 텍스트와 겹치지 않게 배치.
- **이미지가 돕는 점**: 두 팀이 캔버스를 맞바꿔 피드백하고 그 산출물이 해커톤(로켓 발사)으로 검증되러 간다는 '오늘→해커톤' 흐름을 한눈에 보조한다.
- **재검토 반영**: 규칙 3 위반 소지: 캔버스 위 'blank grid of empty rounded slots' + 'today\'s filled-in columns'는 워크시트/표(격자·컬럼) 요소인데, 마감 문구 'never letters or labels'는 글자·라벨만 막고 '숫자·눈금·수치 없음(no numbers/no ticks/no data values)'을 명시하지 않음 → 셀에 숫자 렌더링 위험. 차트·보드류는 추상·눈금 없음·수치 없음을 반드시 명시해야 한다는 규칙 미충족. / 보조성: 워크시트 캔버스(오늘 채운 산출물) → 화살표 → 로켓 발사(해커톤 검증)로 '오늘 산출물을 해커톤에서 검증'이라는 마무리 메시지를 입문자도 한눈에 연결할 수 있어 보조성은 양호.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A small frosted-glass artist's easel holding a square ice-blue canvas board; on the board sit three simple glossy cobalt rounded blocks of slightly different heights resting on plain frosted slots (purely abstract shapes standing in for "today's three worksheet outputs" — strictly markless, no grid lines, no ticks, no numbers, no data values, no spreadsheet cells). A strong cobalt arrow sweeps off the right edge of the canvas and curves up into a tiny glossy cobalt rocket lifting off a small frosted launch-pad ring — the handoff from today's worksheet to hackathon validation, captured as objects only, never letters, labels, numbers, or readable marks of any kind.
COMPOSITION: Main object: the easel-mounted canvas (lower-left of the asset), tilted on the shared ~35° isometric axis, holding the three abstract cobalt blocks with no grid, no ticks, and no numbers. Supporting elements (2-4): a second, smaller ghosted ice-blue blank canvas board half-overlapping behind it to imply two teams swapping boards; the cobalt connector arrow rising diagonally; the small launching rocket with one soft frosted exhaust puff at upper-right. Keep the diagonal flow lower-left to upper-right, generous transparent margin around all sides, single soft wide low shadow, upper-left key light consistent with the set. Palette strictly white, light gray, ice blue, and cobalt only — no orange or any other accent color.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

## S22 — 클로징 (Closing)

- **파일명**: `s22_recap-revenue-glow.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단에 약 4.0in 폭으로 배치. 어두운 클로징 슬라이드의 우측 빈 공간에 얹어 좌측 recap 텍스트와 균형을 맞춘다.
- **이미지가 돕는 점**: 가치·비용은 차분히, 수익(빛나는 코인 타일)만 강조해 '오늘은 돈'이라는 클로징 메시지를 한눈에 각인시킨다.
- **재검토 반영**: 규칙3(텍스트/숫자 금지, 차트·게이지류는 '추상·눈금 없음·수치 없음' 명시 필수): subject가 'cobalt stacked-coins silhouette'와 'single central glossy cobalt coin disc'(동전)를 hero 초점으로 묘사하는데, 동전은 GPT 이미지 생성에서 액면가 숫자·문자·각인이 거의 항상 새겨지는 고위험 요소다. 그런데 'blank face / no engraving / no numbers / no denomination / smooth featureless coin'류의 명시가 subject/comp 어디에도 없다. 규칙상 수치가 박힐 위험이 있는 요소는 반드시 '수치 없음'을 명시해야 하므로 위반. / 규칙3 보강: 동전 디스크가 '가장 지배적인 초점(dominant focal point)'으로 지정돼 있어, 만약 숫자/통화기호가 각인되면 hero 에셋 전체가 망가진다. 위험이 가장 큰 자리에 방어 문구가 빠진 점이 특히 문제. / 보조성: value=하트조각, cost=코인스택, revenue/money=중앙 코인이 하나로 수렴하는 구도라 '가치·수익·비용 recap, 오늘은 돈'이라는 클로징 메시지를 입문자도 직관적으로 연결 가능 — 보조성 자체는 양호.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: Three frosted-glass recap elements drawing together into a single closing stack rather than fanned apart: a soft ice-blue rounded heart-shard (value) and a cobalt stack of smooth blank rounded disc tokens (cost) slide inward from the left and right and tuck behind one central glossy cobalt disc that settles on top as the unified takeaway. Every disc is a completely smooth, featureless, blank-faced abstract token with no engraving, no embossed symbols, no numerals, no currency marks, no denomination, and no text of any kind. The central front disc is lit from within with a clean cobalt rim-glow and a bright upper-left highlight. The two side forms are partly overlapped and recessive behind the front disc, reading as 'everything we covered folds into one revenue idea,' giving a sense of convergence and closure rather than a display row.
COMPOSITION: Hero: the single front cobalt disc as the dominant focal point, its face kept perfectly smooth and blank with no numbers, no text, and no engraving, with the value-shard and the blank coin-stack forms half-tucked behind it and angled inward to imply they are merging together. One soft wide low shadow grounds the cluster as a compact closing group. Bright cobalt rim-light and crisp upper-left highlights trace the front disc so it pops on a dark background while the rear forms stay dim; generous transparent margin all around. Same ~35-degree isometric camera and upper-left soft light as the rest of the set. No orange, no readable text, no numerals, no logos, no watermark.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood. IMPORTANT: any chart, graph, gauge, dial, bar, coin, report, panel, or grid element must be PURELY ABSTRACT — render it with no numbers, no tick marks, no axis or scale, no currency symbols, and no readable values or labels of any kind.
```

---

