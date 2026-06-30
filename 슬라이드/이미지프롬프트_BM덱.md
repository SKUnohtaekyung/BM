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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

## 세트 일관성 비평 (반영 완료)

팔레트·재질·아이소메트릭 ~35°·좌상단광·투명배경은 22장 전반에서 일관되게 유지되어 '한 세트'로 잘 읽히고, 오렌지는 S15(가장 위험한 가정)·S19(틀린 표현)에만 한정되어 색 규칙도 정확하다. 다만 '세 개의 글라스 타일/기둥이 부채꼴로 떠 있고 가운데가 가장 크며 빛나는 코발트 코인을 안은' 구도가 S1·S2·S4·S22에 거의 동일하게 반복되고, 3x3 글라스 보드 구도가 S13·S14에 중복되어 구별성이 약하다. 텍스트 위반은 없으나(모두 추상 형태로 명시), 위 중복군의 형태·시점·동선을 차별화하면 세트의 정보 전달력이 크게 올라간다.

> 위 비평에 따라 중복이 지적된 슬라이드(예: S2·S4 코인 강조, S13·S14 그리드)는 형상·동선을 차별화하도록 프롬프트를 **이미 수정 반영**했습니다. 각 항목의 *비평 반영* 메모를 참고하세요.

---

## S01 — 표지 (Cover)

- **파일명**: `s01_bm-cover-tiles.png`  ·  **역할**: hero
- **배치**: 표지 중앙~우측에 큰 히어로로 배치(약 4.5in), 제목 텍스트 좌측 정렬 시 우측 절반의 빈 공간을 채우도록. 어두운 배경이라 투명 PNG의 코발트 글로우가 자연스럽게 떠 보임.
- **이미지가 돕는 점**: 비즈니스 모델(경로·구조)과 수익 모델(상승 그래프·코인)을 한 장면에 담아 강의 주제를 표지에서 한눈에 예고한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: 세 개의 광택 있는 반투명 UI 타일이 공중에 살짝 어긋나게 떠 있는 클러스터: (1) 위로 상승하는 추상 막대 그래프가 솟은 타일, (2) 분기하는 경로(노드와 곡선 연결선)가 흐르는 타일, (3) 둥근 코발트 버튼이 도드라진 타일. 타일들은 프로스티드 글라스 재질에 코발트 림광이 또렷한 가장자리를 그리고, 작은 코발트 코인/동전 형태가 타일 사이를 떠다니며 '수익'을 추상적으로 암시한다(글자/숫자 없이 형태만).
COMPOSITION: 주오브젝트는 살짝 부채꼴로 펼쳐져 떠 있는 3개 글라스 타일 클러스터(가운데 타일이 가장 크고 앞으로 나옴). 보조 요소로 타일 사이를 떠다니는 코발트 코인 2~3개와, 아래쪽에 은은하게 떠 있는 둥근 베이스 글로우 디스크 1개. 아이소메트릭 ~35도 시점, 좌상단 소프트광 유지, 어두운 표지에서 또렷하도록 아이스블루/코발트 림광을 강조하고 주변에 넉넉한 여백.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S02 — 오늘의 목표

- **파일명**: `s02_revenue-pillar-focus.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹기 권장, 가로 약 3.3~3.8in. 제목/불릿이 좌측에 있을 때 우측 코너를 채우는 용도.
- **이미지가 돕는 점**: 가치·수익·비용 3요소 중 가운데(수익)만 코발트로 빛나 "오늘의 초점은 수익"을 한눈에 전달한다.
- **비평 반영**: S1(표지 hero)과 '가운데가 가장 높고 코발트로 빛나며 매끈한 코인을 인 3요소' 핵심 모티프가 겹친다. 표지가 타일 클러스터이므로 S2는 같은 '코인 강조'를 유지하되 형상을 podium/pillar에서 '상승 곡선 위 정점'으로 바꿔 표지와 시각적으로 분리한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A single smooth translucent ice-blue rising curve-ramp sweeping upward from lower-left to upper-right, like an abstract growth slope, with one taller cobalt-blue glowing peak block at its summit. Resting on that highest peak is a single smooth featureless glossy coin disc (no markings) catching the upper-left light, while two lower pale ice-blue step blocks earlier along the ramp stay dim to read as value and cost preceding the revenue peak. A soft cobalt glow halo radiates only around the summit block to draw the eye to 'revenue' as the high point of the climb.
COMPOSITION: Main object: the upward ice-blue ramp running diagonally across the frame with the cobalt summit block and its coin as the brightest focal point at upper-right. Supporting elements (2-4): the plain glossy coin floating just above the summit, two small dim ice-blue step blocks lower along the ramp, and one faint cobalt light-bloom behind the summit. Keep generous transparent margin all around; isometric ~35 degree camera and upper-left soft light shared with the set; single soft wide low shadow beneath the ramp. No orange.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S04 — 결론 먼저 (가치·수익·비용)

- **파일명**: `s04_value-revenue-cost-flow.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 가로로 얹기. 폭 약 4.5in의 hero 사이즈로, 본문 텍스트 블록 오른쪽 빈 영역에 흐름 방향(좌→우)이 슬라이드 읽기 방향과 맞도록 배치.
- **이미지가 돕는 점**: 가치→수익→비용 3단 흐름을 한 줄로 보여주되 가운데 수익(코인) 타일만 띄우고 강조해 '오늘은 돈' 메시지를 한눈에 전달한다.
- **비평 반영**: S1·S2·S22와 거의 동일한 '가운데 코발트 코인 타일이 가장 높고 빛나는 3개 타일' 구도라 구별이 안 됨. '운영 전체 중 수익(매출) 구간'이라는 메시지는 정적인 트리오 진열이 아니라 '흐름 위 한 지점'으로 표현해야 차별화되고 적합성도 올라감.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A single horizontal cobalt-blue value chain rendered as a continuous translucent ice-blue pipe running left to right, with three rounded frosted-glass capsules threaded onto it at intervals like beads on a wire: the left capsule a pale ice-blue heart/gift node (value created), the right capsule a low pale-gray drained funnel node (cost), and only the middle segment of the pipe widens into a glossy cobalt collection bulge where a single thick coin disc sits cradled, marking the single 'revenue' point of the whole chain. The pipe is thin and calm at both ends and brightens only through the cobalt coin bulge, so the eye reads one continuous process with one money-collecting node rather than three competing tiles.
COMPOSITION: Main object: the long left-to-right ice-blue pipe spanning the lower-center as a clear horizontal spine, with the cobalt coin bulge as the single bright focal node mid-span. Supporting elements (2-3): tiny floating ice-blue value dots drifting along the pipe and converging into the coin bulge, a small glossy directional chevron just before the bulge to show flow direction, and a faint low cobalt glow ring only beneath the coin segment. Same isometric ~35 degree camera and upper-left soft light as the set; one wide soft low shadow beneath the whole pipe; generous empty space above and to the right so it sits cleanly as a transparent overlay. No orange.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S05 — BM vs 수익 모델

- **파일명**: `s05_bm-vs-revenue.png`  ·  **역할**: hero
- **배치**: 우측 여백~우하단 코너에 가로로 길게 얹기(투명 PNG). 폭 약 4.0in 권장, 콘텐츠와 겹치지 않게 슬라이드 우측 하단 1/3 영역에 배치.
- **이미지가 돕는 점**: 큰 설계도 플랫폼(BM 전체)과 떠오른 작은 결제 단말(수익모델 한 부분)의 크기 대비로 '전체 설계 vs 돈 받는 한 부분'을 한눈에 보여준다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: 한 장의 큰 반투명 운영 설계도 플랫폼: 아이스블루 프로스트 글래스 베이스 위에 여러 추상 모듈(둥근 진열대 블록, 작은 인물 실루엣 없는 빈 카운터, 톱니바퀴, 흐름을 나타내는 코발트 화살표 아치, 보관 박스 등)이 한 시스템으로 배열된 미니어처 가게/플랫폼. 그 모서리 한 칸에서 단 하나의 작은 글로시 코발트 POS/계산 단말(둥근 결제 패드 + 동전이 떨어지는 슬롯, 추상 형태)이 살짝 위로 떠올라 빛나며 분리되어, 전체 중 '돈 받는 한 부분'임을 강조한다.
COMPOSITION: 주오브젝트는 넓은 반투명 설계도 플랫폼(전체의 약 70%)으로 좌측에 크게 배치. 보조 오브젝트: (1) 플랫폼 위에서 살짝 떠오른 코발트 POS 모듈, (2) 그 POS와 플랫폼 칸을 잇는 가는 코발트 점선 리더/얇은 연결 핀, (3) 플랫폼 위 추상 모듈 1~2개(톱니바퀴와 흐름 화살표 아치)로 '운영 전체'를 암시. 동일 아이소메트릭 ~35° 시점, 좌상단 소프트광, 한 줄기 넓고 낮은 그림자. POS만 미세하게 더 밝아 시선이 그 한 부분에 모이게 한다.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S06 — AI 마케팅 예시

- **파일명**: `s06_ai-revenue-merge.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 배치 권장, 대략 폭 3.6in. 흰 배경 슬라이드이므로 본문/예시 텍스트는 좌측에 두고, 투명 PNG 히어로를 오른쪽 빈 칼럼에 얹어 3개 수익모델이 1개 서비스로 합쳐지는 흐름이 우측에서 시선을 받도록.
- **이미지가 돕는 점**: 하나의 AI 서비스가 구독·코인·리포트 등 수익모델 2~3개를 하나의 흐름으로 결합한다는 핵심 메시지를 3-to-1 합류 비주얼로 한눈에 보여준다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A small friendly rounded AI assistant pod — a glossy ice-blue translucent dome with a single calm cobalt lens-eye and a thin floating halo ring — sits at the center as the "one service." Three distinct glossy revenue chips orbit close around it, each a different abstract shape so they never blur together: a thick subscription card-block with a rounded notch (no text), a fat embossed cobalt coin disc, and a folded frosted-glass report panel with raised bar-like ridges. Three smooth translucent ice-blue conduits curve out from the three chips and merge into ONE wider cobalt channel that flows down-forward into a single rounded collector basin, visually fusing three income sources into one stream.
COMPOSITION: Hero layout: AI pod as the dominant main object slightly upper-center, the three revenue chips arranged in a loose fan around its upper-left, top, and upper-right at clearly different shapes/sizes for instant distinction. The three conduits sweep downward and braid into the single merged channel + collector basin in the lower-third, giving an obvious 3-to-1 convergence read. Keep the deep-navy only inside conduit shadows and the pod's underside for depth. Generous empty space framing all sides; the merged-channel "1" endpoint left visually clear. Same isometric ~35° top-down camera and soft upper-left light as the rest of the set; one soft wide low shadow beneath the basin.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S09 — 워밍업 — 역기획

- **파일명**: `s09_magnify-revenue-point.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 빈 여백에 약 3.2~3.8in 크기의 투명 PNG로 배치. 좌측 본문(역기획 안내 텍스트/스텝)은 비우고, 발견 모티프가 시선을 본문 쪽으로 끌어오도록 렌즈를 약간 좌향으로.
- **이미지가 돕는 점**: 렌즈 아래 한 블록만 빛나는 코인으로 '익숙한 앱에서 수익 포인트를 콕 집어 찾는다'는 워밍업 역기획 핵심을 한눈에 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A glossy cobalt-rimmed magnifying glass hovering at a tilt over a single small frosted-glass smartphone screen; the lens is a circle of translucent ice-blue glass, and directly beneath it one abstract rounded UI block on the screen lifts up and glows brighter cobalt, capped by a small floating coin-disc and a pin marker that pop out of the lens like a discovered revenue point. The rest of the screen stays calm light-gray rounded blocks so the one glowing money element clearly stands out as the thing being found.
COMPOSITION: Main object: the magnifying glass angled from upper-left over the phone (classic isometric ~35 degree view, soft upper-left light catching the lens edge). Supporting elements (2-4): the small phone screen below, the glowing UI block lifted under the lens, a floating coin-disc, and a short pin/marker rising out of the magnified spot. Keep one soft wide low shadow under the phone and lots of empty space around the cluster so it reads as a single isolated discovery scene, not a busy collage. No orange (no warning here).

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S12 — 돈 내는 사람 = 쓰는 사람?

- **파일명**: `s12_payer-vs-user.png`  ·  **역할**: spot
- **배치**: 콘텐츠가 찬 흰 배경 슬라이드의 우측 중앙~우하단 여백에 투명 PNG로 얹기. 권장 폭 약 3.0~3.4in, 본문 텍스트 열과 겹치지 않게 우측 코너에 정렬.
- **이미지가 돕는 점**: 동전 하나를 사이에 둔 두 인물로 '쓰는 사람과 내는 사람이 같은가, 다른가'라는 핵심 질문을 한눈에 떠올리게 한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: 두 개의 둥근 반투명 유리 인물 형태(머리+어깨만 추상화한 흉상)가 서로 마주 본다. 왼쪽은 아이스블루(#8EC3FF) '쓰는 사람', 오른쪽은 코발트블루(#0066CC) '돈 내는 사람'. 두 인물 정중앙에 코발트블루 동전 하나가 살짝 떠 있고, 양쪽에서 뻗은 둥근 손/팔 형태가 그 동전 하나에 동시에 닿을 듯 말 듯 한다 — 누가 실제로 동전을 놓는지 묻는 한순간의 정지된 제스처. 동전 위에는 작은 코발트블루 물음표 픽토그램(글자가 아닌 추상 곡선 형태)이 떠 있어 '같은가, 다른가'의 긴장을 만든다.
COMPOSITION: 주오브젝트는 중앙의 떠 있는 단일 동전 + 양옆 두 유리 흉상(좌 아이스블루·우 코발트블루)으로 좌우 대칭에 가깝게 배치. 보조 요소: (1) 동전 위 작은 추상 물음표 곡선, (2) 두 인물을 잇는 아주 옅은 점선 호 형태의 연결선 1개, (3) 동전 아래 살짝 떠오른 둥근 받침 타일(흰색+프로스티드 글래스) 1개. 세트 공통 아이소메트릭(~35° 탑다운)·좌상단 소프트광 유지, 단일 넓은 바닥 그림자, 주변 여백 충분.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S14 — 린캔버스 9칸

- **파일명**: `s14_lean-canvas-9cells.png`  ·  **역할**: spot
- **배치**: 우측 중앙~우하단 코너에 약 3.2~3.6in 폭으로 배치. L13 Canvas Overview 레이아웃의 그리드/텍스트가 좌측을 채우므로, 투명 PNG를 본문 오른쪽 빈 여백에 얹어 핵심 강조(6·7 강조, 8 비움)를 시각적으로 반복.
- **이미지가 돕는 점**: 9칸 캔버스에서 수익·비용 두 칸을 코발트로 빛내고 한 칸을 비워 둠으로써 "6·7 강조, 8 비움" 메시지를 글자 없이 한눈에 보조한다.
- **비평 반영**: S13과 둘 다 '떠 있는 3x3 글라스 그리드 보드'라 구도가 거의 중복됨. S13은 9칸 아이디어 트레이, S14는 린캔버스 강조이므로 S14는 그리드 형상을 버리고 '캔버스의 한 블록(매출/비용)을 끄집어내 확대'하는 디테일 컷으로 바꿔 두 장이 명확히 구별되게 한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A single frosted-glass canvas panel seen edge-on and partly out of frame, from which ONE rounded cell is pulled forward and enlarged as the hero — a glossy cobalt-blue block lifted off the panel surface and tilted toward the viewer, splitting open to reveal two small paired sub-chips inside it: a plain glossy cobalt coin disc (revenue) and a small downward-pointing pale ice-blue chip (cost), shown only as abstract shapes with no markings. The parent canvas behind stays calm light-gray with a couple of faint empty recessed slots and one dashed cobalt outline frame indicating an unfilled cell, so the scene reads as zooming into a single Lean-Canvas block rather than displaying the whole grid again.
COMPOSITION: Main object: the one enlarged cobalt cell with its revenue/cost sub-chips, centered and raised in front of the receding frosted canvas panel. Supporting elements (2-4): a thin cobalt connector pin linking the lifted cell back to its empty socket on the panel, the dashed cobalt outline frame marking a still-empty cell, and a soft cobalt glow only under the lifted cell. Keep the isometric ~35-degree camera and upper-left soft light shared by the set, one soft wide low shadow under the canvas, generous transparent margin all around. No orange.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S17 — 지표 1개 고르기

- **파일명**: `s17_pick-one-metric-gauge.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 투명 PNG로 얹기, 약 3.2~3.6in 폭. 좌측 텍스트(5개 지표 설명·매칭표)와 겹치지 않게 우측에 배치.
- **이미지가 돕는 점**: 여러 지표 중 수익원에 맞는 '딱 1개'만 골라 ⑧칸에 적는다는 핵심 메시지를, 스포트라이트로 들어올린 게이지 하나로 한눈에 보여준다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A short row of five small identical circular gauge dials (frosted-glass faces with a glossy ice-blue arc and a simple cobalt needle, no numbers or ticks-as-text) resting low on a pale base. Exactly ONE dial is lifted up onto a slightly raised cobalt pedestal and haloed by a soft translucent cobalt-blue spotlight beam from above, its needle glowing brightest — the single chosen metric. The other four stay flat, dimmed and slightly desaturated to read as "not picked."
COMPOSITION: Main object: the spotlit lifted gauge on its cobalt pedestal, positioned upper-center of the asset. Supporting (2-4): the four low, dimmed gauge dials lined up below it; the soft conical cobalt light beam descending from upper-left; one tiny floating ice-blue selection ring hovering around the chosen dial. Same ~35° isometric camera and upper-left soft light as the set; one wide low shadow under the row; generous empty space around all sides.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S18 — 가격 전략

- **파일명**: `s18_value-scale.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단 여백에 얹기. 약 3.3in 폭 권장, 본문 텍스트 블록 오른쪽의 빈 컬럼에 배치.
- **이미지가 돕는 점**: 감(코인 더미)보다 가치(빛나는 보석)가 가격을 좌우한다는 가치 기반 가격 전략 메시지를 저울 비유로 한눈에 전달한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A glossy translucent ice-blue balance scale, but instead of a flat tag versus a gem, one pan holds a stack of plain frosted-glass coins (cost/instinct side) while the other pan is lifted higher by a single brightly glowing cobalt-blue faceted value gem that visibly outweighs the coins — the gem radiates a soft inner light to signal that perceived value, not gut feeling, sets the price. The scale's center column is anchored on a small deep-navy strategy pedestal shaped like a stepped plinth to imply a deliberate framework rather than guesswork.
COMPOSITION: Main object: the ice-blue balance scale centered, slightly rotated so both pans read clearly in isometric view. Supporting elements (3): the dim frosted coin stack on the lower-left pan, the glowing cobalt value gem rising on the right pan, and the navy stepped pedestal base. A fourth tiny motif: one small cobalt arrow-like wedge tucked under the gem pan pushing it upward, hinting at value-driven lift. Generous empty space around the subject; shared isometric ~35 degrees camera and soft upper-left light; one wide soft low shadow under the pedestal.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
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

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S21 — 마무리 — 해커톤 연결

- **파일명**: `s21_canvas-handoff-to-launch.png`  ·  **역할**: spot
- **배치**: 우상단 코너 — 제목 오른쪽, 두 카드(y≈2.95) 위쪽 빈 여백. 폭 약 2.6in의 작은 스팟으로 얹어 카드 텍스트와 겹치지 않게 배치.
- **이미지가 돕는 점**: 두 팀이 캔버스를 맞바꿔 피드백하고 그 산출물이 해커톤(로켓 발사)으로 검증되러 간다는 '오늘→해커톤' 흐름을 한눈에 보조한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: A small frosted-glass artist's easel holding a square ice-blue canvas board with a blank grid of empty rounded slots (two of the slots filled with glossy cobalt blocks, suggesting "today's filled-in columns"); a strong cobalt arrow sweeps off the right edge of the canvas and curves up into a tiny glossy cobalt rocket lifting off a small frosted launch pad ring — the handoff from today's worksheet to hackathon validation, captured as objects only, never letters or labels.
COMPOSITION: Main object: the easel-mounted canvas (lower-left of the asset), tilted on the shared ~35° isometric axis. Supporting elements (2-4): a second, smaller ghosted ice-blue canvas board half-overlapping behind it to imply two teams swapping boards; the cobalt connector arrow rising diagonally; the small launching rocket with one soft frosted exhaust puff at upper-right. Keep the diagonal flow lower-left to upper-right, generous transparent margin around all sides, single soft wide low shadow, upper-left key light consistent with the set.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

## S22 — 클로징 (Closing)

- **파일명**: `s22_recap-revenue-glow.png`  ·  **역할**: hero
- **배치**: 우측 중앙~우하단에 약 4.0in 폭으로 배치. 어두운 클로징 슬라이드의 우측 빈 공간에 얹어 좌측 recap 텍스트와 균형을 맞춘다.
- **이미지가 돕는 점**: 가치·비용은 차분히, 수익(빛나는 코인 타일)만 강조해 '오늘은 돈'이라는 클로징 메시지를 한눈에 각인시킨다.
- **비평 반영**: S1(표지)·S2와 '가운데가 더 높고 빛나는 코발트 코인 타일, 양옆 가치/비용 타일' 구도가 사실상 동일해 마무리 슬라이드로서의 변별력이 약함. 회상/마무리라는 역할에 맞게 '세 요소가 하나로 닫히며 모이는' 동작감을 주어 표지·중간 슬라이드와 차별화한다.

**프롬프트** (복사해서 GPT 이미지 생성에 붙여넣기 → PNG 저장)

```text
Create a clean 3D isometric educational illustration for a modern Korean university UX/UI lecture slide — minimal, friendly, technical, polished.
MATERIAL & PALETTE: glossy translucent plastic and frosted glass with soft rounded shapes; pure white and light-gray base, ICE-BLUE (#8EC3FF) surfaces, strong COBALT-BLUE (#0066CC) accents, deep-navy (#233B66) for depth. Use orange (#F2541B) ONLY when a warning/alert is an explicit part of the subject. Gentle ambient occlusion, one soft wide low shadow, subtle glassy depth — an educational UI asset, NOT a game scene.

SUBJECT: Three frosted-glass recap elements drawing together into a single closing stack rather than fanned apart: a soft ice-blue rounded heart-shard (value) and a cobalt stacked-coins silhouette (cost) slide inward from the left and right and tuck behind a single central glossy cobalt coin disc that settles on top as the unified takeaway, lit from within with a clean cobalt rim-glow and bright upper-left highlight. The two side forms are partly overlapped and recessive behind the front coin, reading as 'everything we covered folds into one revenue idea,' giving a sense of convergence and closure rather than a display row.
COMPOSITION: Hero: the single front coin disc as the dominant focal point, with the value-shard and coin-stack forms half-tucked behind it and angled inward to imply they are merging together. One soft wide low shadow grounds the cluster as a compact closing group. Bright cobalt rim-light and crisp upper-left highlights trace the front coin so it pops on a dark background while the rear forms stay dim; generous transparent margin all around. Same ~35-degree isometric camera and upper-left soft light as the rest of the set. No orange.

RENDER: one isolated subject centered on a FULLY TRANSPARENT background, exported as PNG with alpha — no backdrop, no floor plane, no framing card around the whole image. Square 1:1 unless noted. Keep generous empty space around the subject. Keep the SAME isometric camera (~35° top-down) and the SAME upper-left soft light across every image so the full set looks like one family.

NEGATIVE (must avoid): any text, letters, numbers, Korean characters, labels, logos, brand names, watermarks, UI copy or tiny captions; photorealism; real human faces; rainbow/neon colors; cluttered or busy backgrounds; flat vector or sticker look; anime; hand-drawn sketch; pixel art; harsh gradients; heavy dark mood.
```

---

