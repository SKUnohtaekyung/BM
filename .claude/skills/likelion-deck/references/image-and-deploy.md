# 이미지 (codex imagegen) · 배포

## 이미지는 codex imagegen 으로 — 이 스킬은 프롬프트까지

**Claude/이 스킬은 이미지를 생성하지 않는다.** 3D 에셋(표지 포함)은 codex imagegen 이 만든다. 이 스킬의 역할:

1. 일러스트가 필요한 슬라이드에 `<img class="asset hero" src="img/slides/sNN_<concept>.png" alt="">` **슬롯만** 배치.
   - 네이밍: `s<두자리번호>_<개념-kebab>[-clay-v2][-transparent].png`. 불변부는 `s##_` + `.png`.
   - 배치 클래스: `.asset.hero`(우하 대형) · `.actor-visual`/`.flow-visual`(배경형, z-index:1 · 본문 z-index:2) · `.reverse-visual`/`.risk-visual`(칼럼 안). 좌 ~40%는 비워 본문 자리 확보.
2. `make_prompt_sheet.py <덱>` 실행 → `이미지프롬프트.md`(codex 포맷) 생성.
3. 각 항목의 **SUBJECT**(그릴 대상)만 채운다. → **사용자가 codex imagegen 실행** → `img/slides/`에 저장.
4. 프리뷰로 이미지 반영 재확인.

## 특수 슬롯 두 개 (도입 이미지 · 마무리 배경)
- **도입(2p) 이미지** `img/slides/s02_intro.png` — 스캐폴드가 넣는 중립 플레이스홀더. 표지처럼 **주제별로 새로 생성**한다(위 흐름으로 자동 프롬프트되는 떠 있는 1:1 에셋 — 아래 clay v2 계약 그대로).
- **마무리 배경** `concept-recap`의 `concept-bg`(`*-bg.png`) — **수동**. 떠 있는 1:1 에셋이 아니라 **화면을 꽉 채우는 풀블리드 가로(≈16:9)**다. RENDER 계약이 다르다: 투명·1:1 대신 **불투명·가장자리까지 꽉 참**, 피사체는 오른쪽에 몰고 **왼쪽 ~45%는 저대비/여백**(요약 패널 텍스트가 그 위에 얹힌다). `make_prompt_sheet.py`가 `*-bg.png`를 **제외**하므로 직접 만든다. 없어도 밝은 배경으로 무방.

## clay v2 4블록 계약 (SUBJECT만 가변)
블록 1·3·4는 전 슬라이드 고정, **블록 2(SUBJECT+COMPOSITION)만** 슬라이드마다 채운다. 원본 계약: `덱_템플릿킷/images/공통이미지프롬프트.md`.

- **STYLE/PALETTE(고정)**: friendly soft 3D, matte plastic + frosted-glass, 순백+ice-blue(#8EC3FF)+cobalt(#0066CC)+navy(#233B66) 깊이. upper-left 라이트, 드롭섀도 **1개**, near-eye-level 3/4 뷰.
- **SUBJECT(가변)**: 메타포 main 1 + 보조 2~4. 오른쪽 배치, 왼쪽 40% 비움, faceless 캐릭터.
- **RENDER(고정)**: 완전 투명 PNG(alpha), base/pedestal/backdrop 금지, 1:1.
- **NEGATIVE(고정)**: no text/letters/numbers/한글/logo/watermark, 특히 차트·코인·게이지에 숫자·틱·통화 금지, 실사얼굴·레인보우·네온·플랫벡터·애니 금지.

> "두 코발트" 주의: 화면 UI 코발트는 `#3060C3`, **이미지 프롬프트의** 코발트는 `#0066CC`(위 계약대로). 혼동 금지.

## 배포 — 단일 파일 (선택)
개발용은 `img/` 참조(가벼움). 학생 배포·오프라인은 이미지를 base64 인라인한 단일 HTML:

```
python .claude/skills/likelion-deck/scripts/inline_images.py 세션/<주제>/<덱>.html
# 용량 크면:
python .claude/skills/likelion-deck/scripts/inline_images.py 세션/<주제>/<덱>.html --downscale 900
```
- 원본(dev)은 불변, `<덱>_배포.html` 새로 생성.
- 목표 3~8MB(메일/USB). 8MB 초과 시 `--downscale 900`(Pillow 필요) 권장.
- Netlify: 세션 폴더의 `_redirects`(루트 → `_배포.html` 200 리라이트)로 드래그앤드랍.
