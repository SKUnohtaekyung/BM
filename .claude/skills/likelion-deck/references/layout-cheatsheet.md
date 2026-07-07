# 레이아웃 치트시트 — 상황 → 클래스

`덱_템플릿킷/layouts/카탈로그.html`을 열면 각 레이아웃 실물을 방향키로 볼 수 있고, 우하단 `.s-foot` 라벨이 복사할 클래스명이다. 아래는 빠른 선택용 축약표(전체·상세 규칙은 `덱_템플릿킷/00_레이아웃-선택가이드.md`).

> ★ **먼저 `visual-first.md`로 "텍스트 vs 도형"을 판단**한 뒤 아래에서 고른다.

## 고정 (구조 그대로 — 텍스트만 교체)
| 상황 | 클래스 |
|---|---|
| 표지 | `slide cover` |
| 주제 소개 | `slide s02-slide` |
| 아젠다(번호 4항목) | `slide s03-slide` |
| **파트 전환(진행 도트) · 필수** | `slide part-divider` |

> **파트 전환은 협상 불가 규칙 (§0-5)**: 파트를 나눴으면 각 파트(**맨 앞 1파트 포함**) 첫 슬라이드 앞에 divider를 **반드시** 둔다. **파트 수 = divider 수**, `is-active`는 현재 파트, `PART n / N`의 `N`은 전체 파트 수.

## 텍스트형
| 상황 | 클래스 |
|---|---|
| 강한 한 문장(문제 제기) | `slide center-msg-a` |
| 꼭 기억할 질문 | `slide center-msg-b` |
| 개념 설명(글+3D, 최다) | `slide center-v` |
| 지난 시간 리마인드 | `slide remind-slide` |
| 3요소(1개 강조) | `slide three-card center-v` |
| 표(개념 2~5 비교/정리) | `slide tbl canvas-fill` (+`.note-grid`/`.tag-block`) |
| 항목 훑기(4×2 / 7개) | `slide card-grid` (+`wide-12`) |

## 도형형 (관계·구조 정보 → 시각화)
| 상황 | 클래스 |
|---|---|
| 포함/부분-전체 | `slide venn-slide` |
| 두 주체 대비 | `slide actor-slide` |
| 두 개념 비교(한쪽 추천) | `slide compare-slide` |
| 흐름/단계(2×2 또는 1열) | `slide flow-slide` |
| 활동 보드/분해 | `slide reverse-slide` |
| 캔버스 9칸 | `slide lean-slide canvas-fill` |
| 가정→위험→검증 | `slide risk-slide` |
| 지표 카드 + 공식 | `slide metric-slide canvas-fill` |
| 매핑 A→B | `slide map-slide` |
| 방법 2개 상세 비교 | `slide price-slide` |

> **`map-slide` vs `metric-slide` 헷갈릴 때**: 정보가 **"A가 B를 정한다"(모델→지표 매핑)**면 `map-slide`(위 A · ↓ · 아래 B 카드). 여러 **지표를 나열·설명**하고 필요하면 공식(LTV÷CAC)을 붙이는 거면 `metric-slide`(지표 카드 행 + 비율).

## 클로징
| 상황 | 클래스 |
|---|---|
| 배경 이미지 + 요약 카드 | `slide concept-recap` |
| 다크 한 줄 마무리 | `slide closing` |

## 리듬(덱 전체)
- 같은 레이아웃 **3연속 금지**. 설명형(center-v·tbl·card-grid) ↔ 참여형(center-msg·flow·lean) 교차.
- 파트마다 `part-divider`(진행 도트 `is-active` 이동).
- 제목은 주제명이 아니라 **결론**. 본문 5줄↑이면 분할.
