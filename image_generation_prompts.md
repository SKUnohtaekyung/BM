# SKU LIKELION UX/UI TRACK 이미지 생성 프롬프트

이 문서는 `design.md`에서 분리한 이미지 생성용 프롬프트 라이브러리이다. PPT 디자인 시스템 본문은 색상, 타이포그래피, 레이아웃 규칙에 집중하고, 실제 3D 에셋 제작 프롬프트는 이 문서에서 관리한다.

## 기준 이미지 톤

첨부된 참고 이미지는 다음 특징을 공유한다.

- 흰색, 연회색, 아이스블루, 코발트블루 중심의 3D 에셋
- 둥근 UI 카드, 스마트폰, 체크리스트, 회의/고민 캐릭터 같은 교육용 오브젝트
- 부드러운 **클레이(clay) 질감**을 기본으로 하고, 보조 UI 카드에는 플라스틱 또는 유리 같은 재질을 섞는다
- 넓고 연한 그림자, 과하지 않은 입체감
- 배경은 흰색 또는 투명에 가깝게 단순화하되, 마무리/요약 슬라이드처럼 배경형 이미지가 필요할 때는 **화이트→아이스블루의 아주 옅은 그라데이션**을 사용할 수 있다
- 이미지 안의 텍스트는 없거나 추상 UI 블록으로 처리
- 인물은 사실적 사진이 아니라 **둥근 비율의 친근한 무표정/무이목구비 3D 클레이 캐릭터**로 만든다
- 발표 슬라이드에 넣는 이미지는 정사각 단독 오브젝트뿐 아니라, **16:9 와이드 구도**도 사용할 수 있다. 특히 사람 2명 이상, 팀 활동, 개념 흐름, 마무리 배경은 16:9가 더 적합하다.

## 공통 베이스 프롬프트

```text
Create a clean 3D isometric educational UI illustration for a Korean UX/UI lecture slide.
Use a white, light gray, and ice-blue color palette with strong cobalt blue accents.
Style: soft 3D clay, rounded shapes, glossy translucent plastic and glass UI cards, minimal tech aesthetic, gentle ambient occlusion, soft shadow, high readability, lots of empty space.
Composition: isolated object on transparent/white background or a 16:9 white-to-ice-blue gradient background when the slide needs a background visual. Keep generous negative space for slide text.
Do not include readable text, logos, brand names, watermarks, or tiny UI labels.
The image should match a modern university lecture deck, minimal, friendly, technical, and polished.
```

## 최근 BM 덱 v2 이미지 톤

이 채팅에서 실제로 사용한 신규 에셋은 아래 톤을 기준으로 한다.

- `s14_actor-split-clay-v2.png`: 두 명의 둥근 클레이 캐릭터가 서로 다른 주체를 보여주는 **Actor Split** 이미지. 사람은 얼굴 디테일 없이 단순하고, 스마트폰/동전/화살표로 관계를 설명한다.
- `s18_team-selection-clay-v2.png`: 3명의 클레이 학생 캐릭터가 보드 앞에서 선택하는 **팀 활동/실습 안내** 이미지. 하나의 선택지가 코발트블루로 강조된다.
- `s20_assumption-test-clay-v2.png`: 경고 카드 → 돋보기 → 실험 보드로 이어지는 **가정 검증 흐름** 이미지. 오렌지는 위험/경고 카드에만 사용한다.
- `s26_bm-concept-flow-bg-v2.png`: 화이트→아이스블루 그라데이션 위에 가치·수익·비용·지표를 상징하는 오브젝트가 이어지는 **16:9 배경형 개념 인포그래픽** 이미지.

이후 BM 덱 이미지를 새로 만들 때는 기존의 유리/플라스틱 느낌보다 **클레이 질감과 넓은 와이드 구도**를 우선한다.

## 표지용 3D 에셋

사용 위치: 주차별 표지 우측 하단.

```text
Create three floating 3D isometric UI tiles for a dark lecture slide cover.
Each tile is a rounded square platform made of matte white and translucent ice-blue plastic.
Add small abstract UI elements on top: rounded bars, small blocks, a simple chart icon, a path curve, and a blue button-like shape.
Use deep navy and cobalt blue accents only.
Lighting should be soft and cinematic, with gentle shadows.
Composition should flow diagonally from lower center to upper right, leaving large empty space on the left for title text.
No text, no logo, no human character, no colorful background.
```

## 주차 도입 이미지

사용 위치: 각 주차 2페이지의 우측 하단.

```text
Create a 3D isometric concept illustration representing [lecture topic].
Use a white and ice-blue base with cobalt blue accent details.
Use rounded UI cards, soft glass panels, and a simple symbolic object related to [metaphor].
The object should sit on the right side of a white slide with enough negative space on the left.
Minimal, clean, educational, friendly tech style.
No readable text, no logo, no watermark, no busy background.
```

예시 변수:

| 강의 주제 | metaphor 값 |
|---|---|
| What/MVP | winding path, UI decision board, small person choosing one path |
| IA/User Flow | map pin, route line, branching path, navigation marker |
| StoryBoard | robot blueprint, screen board, numbered UI specification sheet |
| 우선순위 | checklist, sorted blocks, top three cards |
| 예외 처리 | warning triangle, broken path, error state card |

## UX 개념 은유 이미지

사용 위치: MVP, IA, User Flow, Happy Path, Unhappy Path 설명.

```text
Create a 3D isometric metaphor illustration for the UX concept: [concept].
Visual metaphor: [metaphor].
Use minimal white rounded platforms, translucent ice-blue panels, cobalt blue paths or arrows, and very subtle gray shadows.
The image should feel like a clean UI education asset, not a game scene.
Keep the object simple and iconic, with 1 main object and 2 to 4 supporting elements.
No text, no numbers unless requested, no logos, no realistic people.
```

예시:

```text
Create a 3D isometric metaphor illustration for the UX concept: user flow.
Visual metaphor: a blue route line connecting three rounded UI cards with a final check mark.
Use minimal white rounded platforms, translucent ice-blue panels, cobalt blue paths or arrows, and very subtle gray shadows.
The image should feel like a clean UI education asset, not a game scene.
Keep the object simple and iconic, with 1 main object and 2 to 4 supporting elements.
No text, no numbers, no logos, no realistic people.
```

## UI 목업 이미지

사용 위치: 예시 앱 화면, MVP 흐름, 화면설계서 설명.

```text
Create a 3D isometric mobile app UI mockup illustration.
Show two floating smartphone screens and one small rounded card.
The screens should contain abstract UI blocks only: title bars, input fields, list cards, buttons, check icons, and small status dots.
Use a white interface, light gray dividers, cobalt blue primary buttons, and tiny orange alert markers only if needed.
Use soft shadows, rounded corners, glass-like depth, and clean spacing.
No readable text, no real app logo, no brand name, no watermark.
```

## IA/User Flow 다이어그램 이미지

사용 위치: 구조, 흐름, 화면 이동 설명.

```text
Create a clean 3D isometric UX flow diagram illustration.
Show multiple white rounded rectangle nodes connected by cobalt blue arrows.
Include one decision diamond and one final check node.
Use light gray grid hints in the background, very subtle.
Keep the layout readable and spacious, like a FigJam or Figma lecture example.
Use only white, light gray, ice blue, and cobalt blue.
No readable text, no labels, no logos, no watermark.
```

## StoryBoard/화면설계서 이미지

사용 위치: StoryBoard, 화면설계서 파트.

```text
Create a 3D isometric storyboard specification illustration for a UX/UI lecture.
Show one large floating UI screen on the left and a specification table card on the right.
Add small numbered red circular markers connected by thin blue lines to UI elements.
Use white and ice-blue glass materials, cobalt blue accents, and subtle red markers.
The style should be clean, technical, and educational.
No readable text, no Korean text, no logo, no watermark.
```

## 데이터 흐름 이미지

사용 위치: 서버, DB, 사용자, 액션, 결과 설명.

```text
Create a 3D isometric data flow illustration for a UX storyboard lecture.
Show a user smartphone, a cloud server, a database cylinder, and a result card connected by smooth cobalt blue arrows.
Use white, light gray, and ice-blue materials with small cobalt blue details.
Add a few tiny abstract data dots moving along the arrows.
Keep the layout simple and spacious for a 16:9 slide.
No readable text, no logos, no watermark.
```

## 예외 처리 이미지

사용 위치: Unhappy Path, 예외 처리, 오류 상태 설명.

```text
Create a minimal 3D isometric warning and exception handling illustration.
Show a white rounded UI card with a soft orange warning triangle and a broken blue path that reconnects to a safe route.
Use mostly white, light gray, and ice-blue, with orange as the only alert color.
Soft shadow, rounded shapes, clean educational tech style.
No text, no logo, no realistic danger scene, no dark background.
```

## 실습/과제 안내 이미지

사용 위치: 실습 슬라이드, 과제 공지.

```text
Create a small playful 3D mascot-style illustration for a university UX/UI practice slide.
The mascot should be simple, rounded, friendly, and minimal, holding a checklist or pointing at a UI board.
Use white, ice-blue, cobalt blue, and a tiny orange accent.
Keep the character small and isolated with transparent background.
No readable text, no logo, no complex background, no realistic human face.
```

## Actor Split 이미지

사용 위치: 서로 다른 주체, 역할, 지불자/사용자 구분.

```text
Create a clean 3D clay-style educational illustration for a Korean UX/UI lecture slide.
Show two simple rounded human characters as separate actors.
Use faceless or nearly faceless friendly clay characters, not realistic people.
One character should represent the user, holding a smartphone or interacting with a UI card.
The other character should represent the payer or decision maker, holding a smooth blank coin or payment token.
Connect them with a simple cobalt blue exchange arc or arrow.
Use white, light gray, ice blue, and cobalt blue accents.
Composition should be wide 16:9-friendly, with the two characters separated left and right and enough empty space for slide text.
No readable text, no Korean text, no numbers, no labels, no logos, no watermark. Any coin must be completely blank with no currency symbol.
```

## 팀 활동/선택 이미지

사용 위치: 프로젝트 선정, 팀 실습, 후보 비교.

```text
Create a playful 3D clay-style illustration for a university UX/UI workshop slide.
Show three simple rounded student characters gathered around a floating project board.
The board has three abstract rounded project cards, with one selected card subtly highlighted using a cobalt blue outline or check shape.
Characters should be friendly, clay-like, and simple, with no detailed facial features.
Use a white and ice-blue base with cobalt blue accents, and tiny orange only for a small emphasis mark if needed.
Composition should be wide and spacious, suitable for placing on the right side of a slide.
No readable text, no Korean text, no numbers, no labels, no logos, no watermark, no busy background.
```

## 가정 검증 이미지

사용 위치: 위험한 가정, 검증, 실험 설계.

```text
Create a simple 3D clay-style educational illustration showing an assumption test flow.
Show three clear zones from left to right: a rounded warning card, a magnifying glass inspection moment, and a small abstract prototype/evidence board.
Use one small friendly clay character with no facial detail, inspecting the assumption with a magnifying glass.
Connect the zones with cobalt blue arrows.
Use mostly white, light gray, ice blue, and cobalt blue; use orange only for the warning/risk card.
Keep the image minimal, readable, and spacious for a lecture slide.
No readable text, no Korean text, no numbers, no labels, no logos, no watermark, no clutter.
```

## 개념 정리 배경 이미지

사용 위치: 마무리, 요약, 개념 인포그래픽.

```text
Create a clean 16:9 background visual for a Korean UX/UI lecture recap slide.
Use a white-to-ice-blue soft gradient background with large negative space on the left for HTML slide text.
On the right half and lower-right area, create an abstract 3D clay conceptual flow with four connected objects: a heart/value token, a blank coin/revenue token, a cost stack/platform token, and a metric gauge/check token.
Connect the objects with one smooth cobalt blue ribbon path.
Add a few translucent rounded UI cards as subtle background shapes.
The visual should support overlaid text; it must not be busy or poster-like.
No readable text, no letters, no numbers, no Korean text, no labels, no logos, no watermark. Coins and tokens must be blank with no currency marks.
```

## 공통 네거티브 프롬프트

```text
Avoid photorealistic style, realistic human faces, detailed facial features, complex background, colorful rainbow palette, neon cyberpunk, anime style, flat vector illustration, hand-drawn sketch, 8-bit pixel art, cluttered interface, readable text, Korean text, distorted letters, logos, watermarks, realistic brand UI, excessive shadows, harsh gradients, dark heavy mood, currency symbols, numbers on coins, labels on UI cards.
```

---

## 16주차 BM 강의 덱 — 슬라이드별 프롬프트

위 라이브러리(공통 베이스·네거티브·톤)를 기준으로, 16주차 BM 강의 PPT **22장 각각에 맞춘 슬라이드별 이미지 프롬프트**는 별도 파일에서 관리한다 → [`슬라이드/이미지프롬프트_BM덱.md`](슬라이드/이미지프롬프트_BM덱.md)

- 도구: **GPT 이미지 생성**.
- 형식: 단독 오브젝트는 정사각 1:1 또는 투명/흰 배경 PNG를 권장한다. 사람 캐릭터 2명 이상, 팀 활동, 흐름도, 마무리 개념 정리는 **16:9 와이드 이미지**를 권장한다.
- 22장이 한 세트로 보이도록 **고정 스타일 계약**(화이트/아이스블루/코발트 팔레트, 클레이 질감, 둥근 UI 카드, 부드러운 조명, 텍스트 없음)을 모든 프롬프트가 공유한다.
- 오렌지는 경고/위험 맥락(S15 가장 위험한 가정, S19 틀린 표현)에만 사용한다.
- 각 프롬프트는 그 슬라이드의 핵심 메시지를 보조하도록 설계됐고, 일관성 비평을 거쳐 중복 구도(코인 강조·3×3 보드 등)는 차별화 반영했다.
