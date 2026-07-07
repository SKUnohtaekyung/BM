# Codex 작업 지시 — BM 강의 덱 이미지 생성 & 삽입

> **이 파일을 Codex에 그대로 주거나, "이 저장소의 `슬라이드/CODEX_작업지시.md`를 읽고 그대로 수행해"라고 지시하세요.**
> 목표: 22장 강의 덱의 각 슬라이드에 맞는 3D 에셋을 **투명 PNG**로 생성하고, 덱에 삽입해 최종 `.pptx`까지 만든다.

---

## 0. 컨텍스트 (이 저장소)

- 작업 루트: 이 저장소(멋쟁이사자처럼 UXUI 16주차 BM 강의 자료).
- **덱 생성기**: `슬라이드/build_deck.js` — `pptxgenjs`로 `LAYOUT_WIDE`(13.333in × 7.5in, 16:9) 22장을 만들어 `슬라이드/BM_16주차_강의덱.pptx`를 출력. 디자인 시스템(브랜드 블루·Pretendard·번호 원형·카드)을 따른다.
- **이미지 프롬프트**: `슬라이드/이미지프롬프트_BM덱.md` — 22개 슬라이드 각각에 `파일명`, `역할(hero/spot/motif)`, `배치`, 그리고 복사용 프롬프트 코드블록(` ```text `)이 들어 있다. 이게 입력이다.
- **디자인 규칙(준수)**: `image_generation_prompts.md`, `design.md` — 흰색·아이스블루·코발트 글래스, 텍스트/숫자 없음, 투명 배경.
- 플랫폼: Windows. Node·Python 사용 가능. PowerPoint 데스크톱 설치됨(COM으로 슬라이드→PNG 내보내기 가능). LibreOffice·poppler는 없음.

## 산출물

1. `슬라이드/images/sNN_*.png` — 22개 투명 PNG.
2. 이미지가 삽입된 `슬라이드/BM_16주차_강의덱.pptx`.
3. 업데이트된 `슬라이드/build_deck.js`(addImage 반영).
4. 무엇을 어디에 넣었는지/스킵했는지 간단 보고.

---

## 1. 준비

```bash
cd 슬라이드
npm i pptxgenjs openai
```

- 이미지 생성에는 **`OPENAI_API_KEY` 환경변수**가 필요하다. 없으면 **중단하고 사용자에게 요청**하라(키를 코드/커밋에 절대 넣지 말 것).
- 이미 `슬라이드/images/`에 PNG가 있으면(사용자가 ChatGPT로 직접 생성해 둔 경우) **2단계를 건너뛰고 3단계로** 간다.

## 2. 이미지 생성 (OpenAI Images API · gpt-image-1 · 투명 PNG)

`슬라이드/이미지프롬프트_BM덱.md`를 파싱해 각 슬라이드의 `파일명`과 프롬프트(` ```text ` 블록)를 추출하고, 슬라이드별로 이미지를 생성해 `슬라이드/images/<파일명>`에 저장한다. **이미 있는 파일은 건너뛴다(idempotent).**

시작용 스크립트(필요 시 정규식·옵션 조정):

```js
// 슬라이드/gen_images.js  →  node gen_images.js
const fs = require('fs'), path = require('path');
const OpenAI = require('openai');
const client = new OpenAI(); // reads OPENAI_API_KEY

const doc = fs.readFileSync('이미지프롬프트_BM덱.md', 'utf8');
// 각 슬라이드 블록에서 [번호, 파일명, 프롬프트] 추출
const re = /##\s*S(\d{2})[\s\S]*?파일명\*\*:\s*`([^`]+)`[\s\S]*?```text\n([\s\S]*?)\n```/g;
const jobs = [...doc.matchAll(re)].map(m => ({ no: m[1], file: m[2], prompt: m[3] }));

const outDir = 'images';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  for (const j of jobs) {
    const out = path.join(outDir, j.file);
    if (fs.existsSync(out)) { console.log('skip', j.file); continue; }
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log('gen', j.file, attempt > 1 ? `(retry ${attempt})` : '');
        const r = await client.images.generate({
          model: 'gpt-image-1',
          prompt: j.prompt,
          size: '1024x1024',
          background: 'transparent',
        });
        fs.writeFileSync(out, Buffer.from(r.data[0].b64_json, 'base64'));
        break;
      } catch (e) {
        console.error('err', j.file, e.message);
        if (attempt === 3) throw e;
        await new Promise(r => setTimeout(r, 4000 * attempt));
      }
    }
  }
  console.log('done:', jobs.length);
})();
```

**품질 가드**: 생성된 PNG에 글자/숫자가 눈에 띄게 박혔으면(모델 아티팩트) 해당 프롬프트 끝에 `Absolutely no text, letters, or numbers anywhere — purely abstract shapes only.`를 덧붙여 **최대 2회 재생성**. 그래도 남으면 그 슬라이드를 보고에 표시.

## 3. 덱에 삽입 (`build_deck.js` 수정)

각 슬라이드 IIFE(`/* === Sn — ... === */`)에서, **텍스트·카드보다 먼저** `slide.addImage({...})`를 추가해 이미지가 콘텐츠를 가리지 않게 한다(혹은 빈 여백 좌표에 배치). 파일명→슬라이드 매핑은 프롬프트 문서의 `파일명`과 `S{no}` 주석을 따른다.

**좌표 규칙 (캔버스 13.333 × 7.5 in)** — *겹침 금지가 최우선*:
- `hero`: 우측/우하단 빈 영역에 가로 3.2–4.5in. 예) 콘텐츠가 좌측에 몰린 슬라이드는 `x: 9.3–9.8, y: 4.4–4.8, w: 3.2–3.6`.
- `spot`: 가로 ~1.8–2.2in, 우하단 코너.
- `motif`: 가로 ~1.1–1.4in, 헤더 반대쪽 빈 코너.
- **표가 가득한 슬라이드(S7·S8·S16·S19)** 와 풀폭 카드 슬라이드: 큰 이미지 넣지 말고 **작은 motif만** 빈 코너에 . 자리가 없으면 **넣지 말고 보고**.
- 절대 가리지 말 것: 상단 헤더(`y < 1.0`), 우하단 페이지번호, 제목, 표, 본문 카드.
- 표지(S1)·클로징(S22)은 어두운 배경 → 투명 PNG가 자연스럽게 떠 보임. S1은 우측 큰 hero(약 4.0–4.5in)로.

가능하면 공용 헬퍼를 만들어 일관 배치:
```js
function asset(slide, file, x, y, w, h){ slide.addImage({ path: require('path').resolve(__dirname,'images',file), x, y, w, h }); }
```

## 4. 재생성 & QA

```bash
cd 슬라이드
node build_deck.js
```
- 가능하면 재압축(스킬의 `rezip.py`가 있으면 사용; 없으면 생략 가능).
- **QA(필수)**: PowerPoint COM(PowerShell)으로 각 슬라이드를 PNG로 내보내 **이미지가 텍스트/카드와 겹치지 않는지** 눈으로 확인하고 좌표를 조정한다. 예시:
```powershell
$pp = New-Object -ComObject PowerPoint.Application
$pres = $pp.Presentations.Open((Resolve-Path "BM_16주차_강의덱.pptx"), $true, $false, $false)
1..$pres.Slides.Count | % { $pres.Slides.Item($_).Export((Join-Path (Resolve-Path .) ("qa\slide-{0:D2}.png" -f $_)), "PNG", 1600, 900) }
$pres.Close(); $pp.Quit()
```
- 겹침/넘침이 있으면 좌표를 고쳐 **다시 build → export → 확인**. 깨끗해질 때까지(보통 1–2회) 반복.

## 5. 보고 & 커밋

- 보고: 생성한 이미지 수, 각 이미지가 들어간 슬라이드/위치, 작은 motif로만 넣었거나 스킵한 슬라이드, 글자 아티팩트로 재생성한 건.
- 커밋: `슬라이드/images/*.png`와 수정된 `build_deck.js`·`.pptx`를 **새 브랜치 `feature/deck-images`** 에 커밋하고 푸시(메인 직접 강제푸시 금지). PR을 열거나 브랜치명을 보고.

## 제약 (반드시 지킬 것)

- 슬라이드 **텍스트/내용·디자인 시스템을 바꾸지 말 것**(이미지 삽입만).
- **API 키·시크릿을 커밋하지 말 것**(env에서만 읽기).
- 이미지 **투명 배경 유지**(배경/박스 프레임 추가 금지).
- 이미지가 본문을 가리면 **이미지를 줄이거나 옮기거나 빼라** — 콘텐츠 가독성이 우선.
- 확실하지 않으면 진행 전에 사용자에게 물어라.
