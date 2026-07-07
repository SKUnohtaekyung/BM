# PPT 레이아웃 레퍼런스

이 문서는 `design.md`의 디자인 시스템을 따르는 PPT를 만들 때 참고할 수 있는 범용 레이아웃 라이브러리이다.

PPT 제작 에이전트는 슬라이드를 만들기 전에 반드시 이 문서를 먼저 읽고, 각 슬라이드의 목적에 맞는 레이아웃 ID를 선택해야 한다. 이 문서는 특정 주제에 종속되지 않도록 작성되었으며, 교육 자료, 워크숍, 프로젝트 발표, 기획 발표, 회고, 보고서형 PPT에 모두 재사용할 수 있다.

---

## 1. 레이아웃 사용 원칙

- 기본 캔버스는 16:9, 1920×1080이다.
- 표지를 제외한 본문 슬라이드는 흰 배경과 고정 헤더를 기본으로 한다.
- 다크 섹션형 레이아웃은 사용하지 않는다.
- 핵심 단어 1~2개만 파란색으로 강조한다.
- 오렌지/빨강은 문제, 경고, 예외, 틀린 예시에만 사용한다.
- 슬라이드마다 레이아웃 ID를 명시해 제작한다. 예: `L06. Two Choice Compare`.
- 같은 레이아웃을 3장 이상 연속 사용하지 않는다.
- 설명형, 질문형, 비교형, 사례형, 실습형을 교차 배치해 리듬을 만든다.
- 레이아웃은 구조만 제공한다. 실제 주제, 문장, 사례는 별도 콘텐츠 문서에서 가져온다.

---

## 2. 범용 PPT 레이아웃 라이브러리

### L01. Cover With 3D Asset

**용도:** 발표 표지.

**구조**
- 좌측 상단: 로고 또는 브랜드명
- 좌측 중단: 회차, 세션명, 카테고리
- 좌측 하단: 큰 발표 제목
- 우측 상단: 팀명, 소속, 날짜
- 우측 하단: 주제와 연결되는 3D 에셋

**사용하기 좋은 경우**
- 강의 첫 장
- 프로젝트 발표 첫 장
- 워크숍 표지

**주의**
- 표지는 기존 `design.md`의 Cover 규칙을 따른다.
- 오렌지/빨강은 사용하지 않는다.

---

### L02. Big Question Opening

**용도:** 도입 질문, 문제 제기, 청중 집중.

**구조**
- 상단 헤더
- 중앙 또는 좌측에 큰 질문 1개
- 질문 속 핵심 단어만 파란색
- 우측 하단에 관련 3D 에셋 또는 캐릭터

**사용하기 좋은 경우**
- 강의 시작
- 토론 시작 전
- 기존 관점을 흔들고 싶을 때

**주의**
- 질문은 1문장으로 끝낸다.
- 답을 바로 주지 않는다.

---

### L03. Prior Knowledge Bridge

**용도:** 이전에 배운 내용과 오늘 내용을 연결.

**구조**
- 좌측: 이전 개념 또는 기존 경험 리스트
- 우측: 오늘 다룰 개념 또는 적용 방향
- 가운데: 파란 화살표 또는 연결선

**사용하기 좋은 경우**
- 연속 강의의 도입
- 이전 회차 복습
- 학습자의 경험과 새 개념을 연결할 때

**주의**
- 이전 내용을 다시 길게 설명하지 않는다.
- 연결 문장은 짧게 쓴다.

---

### L04. One Sentence Definition

**용도:** 핵심 개념을 한 문장으로 정의.

**구조**
- 큰 제목
- 중앙에 한 문장 정의
- 하단에 짧은 보조 설명 1줄
- 필요 시 작은 3D 에셋

**사용하기 좋은 경우**
- 새 개념 첫 소개
- 용어 구분
- 발표 중간의 정리 슬라이드

**주의**
- 한 장에 개념 하나만 다룬다.
- 정의 문장은 발표자가 그대로 읽어도 자연스러워야 한다.

---

### L05. Hierarchy Ladder

**용도:** 개념의 위계, 단계, 포함 관계 설명.

**구조**
- 세로 계단 또는 위계 블록 3~5개
- 상위 개념에서 하위 개념으로 내려가는 구조
- 각 블록에 짧은 질문 또는 설명 1개

**사용하기 좋은 경우**
- 전략과 실행의 관계
- 큰 개념과 세부 개념 구분
- 의사결정 단계 설명

**참고**
- Microsoft SmartArt의 계층, 관계, 피라미드형 구조를 변형해 사용한다.

---

### L06. Two Choice Compare

**용도:** 두 개념, 두 선택지, 두 관점 비교.

**구조**
- 좌우 2열 카드
- 각 카드: 제목, 핵심 질문, 짧은 예시
- 차이를 강조하는 파란/오렌지 포인트

**사용하기 좋은 경우**
- A/B 비교
- 좋은 접근과 아쉬운 접근 비교
- 사용자 관점과 제작자 관점 비교

**주의**
- 좌우 카드 크기와 정보량을 맞춘다.

---

### L07. Good vs Bad Expression

**용도:** 흔한 오해, 잘못된 표현, 수정 문장 제시.

**구조**
- 좌측: 잘못된 표현
- 중앙: 왜 문제인지
- 우측: 더 정확한 표현
- 오류는 빨강/오렌지, 수정은 파랑

**사용하기 좋은 경우**
- 발표 문장 코칭
- 기획서 문장 수정
- 개념 오해 교정

**주의**
- 비판보다 수정 방향이 더 잘 보이게 만든다.

---

### L08. 3-Card Model Set

**용도:** 3개의 선택지, 원칙, 유형 소개.

**구조**
- 제목
- 동일 크기 카드 3개
- 각 카드: 아이콘, 이름, 한 줄 설명, 주의점

**사용하기 좋은 경우**
- 세 가지 기준
- 세 가지 접근법
- 세 가지 역할

**참고**
- PresentationGo의 3 options 유형처럼 3개 선택지를 균등하게 보여주는 구조.

---

### L09. 4-Quadrant Decision Matrix

**용도:** 2개의 판단 축으로 선택지를 분류.

**구조**
- 2×2 매트릭스
- X축: 기준 A의 낮음/높음
- Y축: 기준 B의 낮음/높음
- 각 사분면에 선택지 또는 상황 배치

**사용하기 좋은 경우**
- 우선순위 판단
- 리스크와 임팩트 분류
- 노력 대비 효과 비교

**주의**
- 축 이름은 쉽게 쓴다.
- 각 사분면 설명은 짧게 유지한다.

---

### L10. 5-Question Checklist

**용도:** 점검 질문, 검수 기준, 실행 전 체크.

**구조**
- 좌측: 큰 제목
- 우측: 체크리스트 5개
- 각 항목 앞에 파란 체크 아이콘

**사용하기 좋은 경우**
- 실습 전 확인
- 발표 전 검수
- 의사결정 기준 제시

**주의**
- 체크 항목은 질문형으로 쓰면 참여도가 높다.

---

### L11. Horizontal Timeline

**용도:** 시간 순서, 진행 흐름, 커리큘럼, 프로젝트 일정.

**구조**
- 좌에서 우로 이어지는 4~6단계 타임라인
- 각 단계에 날짜/단계명/짧은 설명

**사용하기 좋은 경우**
- 강의 흐름 안내
- 프로젝트 일정
- 프로세스 소개

**참고**
- PresentationGo의 timeline, roadmap 유형을 참고한다.

---

### L12. Zigzag Learning Path

**용도:** 긴 흐름을 더 동적으로 보여줄 때.

**구조**
- 중앙 곡선 또는 지그재그 경로
- 경로 양옆에 단계 카드
- 마지막에 목표 지점 배치

**사용하기 좋은 경우**
- 학습 여정
- 문제 해결 과정
- 프로젝트 진행 로드맵

**주의**
- 단계는 6개 이하로 제한한다.

---

### L13. Canvas Overview

**용도:** 여러 요소를 한 장에서 구조화.

**구조**
- 3×3 또는 5×2 캔버스 그리드
- 각 칸에 질문형 제목
- 필요 시 빈칸을 남겨 실습용으로 사용

**사용하기 좋은 경우**
- 워크시트
- 전략 캔버스
- 프로젝트 기획 프레임

**주의**
- 너무 많은 텍스트를 넣지 않는다.
- 칸 제목만 보고도 무엇을 적어야 하는지 알 수 있어야 한다.

---

### L14. Canvas Focus Zoom

**용도:** 전체 구조 중 특정 영역만 확대 설명.

**구조**
- 좌측: 작은 전체 캔버스 미니맵
- 우측: 확대된 한 영역
- 강조 영역은 파란 테두리

**사용하기 좋은 경우**
- 큰 프레임워크 중 한 부분 설명
- 워크시트 작성 순서 안내
- 복잡한 표의 일부 확대

**주의**
- 전체와 부분의 관계가 보여야 한다.

---

### L15. Actor Split

**용도:** 서로 다른 두 주체, 역할, 관점 구분.

**구조**
- 좌측: 주체 A 카드
- 우측: 주체 B 카드
- 가운데: 관계, 흐름, 충돌, 교환을 나타내는 화살표

**사용하기 좋은 경우**
- 사용자와 관리자 비교
- 학생과 운영진 비교
- 고객과 제공자 비교
- 요청자와 수행자 비교

**주의**
- 화살표 방향과 의미를 명확히 한다.

---

### L16. Value Flow Diagram

**용도:** 가치, 정보, 행동, 결과가 이어지는 흐름 설명.

**구조**
- 4~5단계 가로 플로우
- 각 단계는 짧은 명사구
- 단계 사이에 파란 화살표

**사용하기 좋은 경우**
- 서비스 사용 흐름
- 업무 처리 과정
- 문제 해결 흐름
- 입력에서 결과까지의 연결

**참고**
- SmartArt의 Process 유형을 변형해 사용한다.

---

### L17. Gallery Grid

**용도:** 여러 유형, 사례, 항목을 한 번에 보여주기.

**구조**
- 4×3 또는 5×3 미니 카드 그리드
- 각 카드: 이름 + 대표 이미지/아이콘 + 한 줄 설명
- 세부 설명은 다음 슬라이드로 분리

**사용하기 좋은 경우**
- 여러 사례 소개
- 유형 목록
- 기능 목록
- 아이디어 후보군

**주의**
- 이 슬라이드에서 모든 항목을 설명하려 하지 않는다.

---

### L18. Detail Card

**용도:** 특정 항목 하나를 깊게 설명.

**구조**
- 좌측: 항목명과 한 문장 정의
- 우측: 특징 / 적용 상황 / 주의점 3칸
- 하단: 간단 예시

**사용하기 좋은 경우**
- 갤러리에서 선택한 항목 설명
- 개념 하나 심화
- 사례 하나 분석

**주의**
- L17 이후에 붙이면 리듬이 좋다.

---

### L19. Case Study Snapshot

**용도:** 실제 사례를 짧게 분석.

**구조**
- 좌측: 사례명과 배경
- 중앙: 핵심 구조 또는 흐름
- 우측: 배운 점과 주의점

**사용하기 좋은 경우**
- 서비스 사례 분석
- 프로젝트 사례 소개
- 이전 결과물 리뷰

**참고**
- SlideModel의 case study 구조를 짧은 교육용 사례 분석으로 변형한다.

---

### L20. Reverse Engineering Board

**용도:** 기존 사례를 구조적으로 뜯어보기.

**구조**
- 상단: 분석 대상
- 하단 4칸: 대상 / 문제 / 해결 방식 / 배운 점
- 조별 토론용 빈칸 포함 가능

**사용하기 좋은 경우**
- 벤치마킹
- 역기획
- 사례 토론

**주의**
- 정답을 제시하기보다 관찰 질문을 남긴다.

---

### L21. Debate Prompt Slide

**용도:** 조별 토론 질문.

**구조**
- 중앙 큰 질문
- 하단에 선택지 2~4개
- 우측 하단에 타이머 또는 토론 아이콘

**사용하기 좋은 경우**
- 강의 중간 참여 유도
- 조별 토론
- 선택지 비교

**주의**
- 질문은 하나만 둔다.
- 답을 바로 주지 않는다.

---

### L22. Team Worksheet Slide

**용도:** 팀 실습 작성 안내.

**구조**
- 좌측: 작성 순서
- 우측: 워크시트 미리보기
- 하단: 제출물 또는 발표 기준

**사용하기 좋은 경우**
- 실습 시작 전
- 팀 활동 안내
- 제출물 기준 설명

**주의**
- 해야 할 일을 번호 순서로 보여준다.

---

### L23. One-Minute Pitch Template

**용도:** 발표 문장 템플릿 제공.

**구조**
- 문장 템플릿 3~4줄
- 빈칸은 파란색 박스로 표시
- 하단에 발표 시간과 규칙

**사용하기 좋은 경우**
- 팀 발표 전
- 짧은 공유 세션
- 결과물 발표 형식 통일

**주의**
- 발표자가 그대로 읽을 수 있게 문장을 짧게 만든다.

---

### L24. Metric Triangle

**용도:** 세 요소의 관계 설명.

**구조**
- 삼각형 또는 3카드 구조
- 세 꼭짓점에 핵심 요소
- 중앙에 세 요소가 만드는 결과 배치

**사용하기 좋은 경우**
- 균형 관계 설명
- 기준 3개 연결
- 목표 달성 조건 설명

**주의**
- 공식보다 의미를 먼저 보여준다.

---

### L25. Simple Formula Slide

**용도:** 공식, 계산식, 판단식을 꼭 보여줘야 할 때.

**구조**
- 중앙에 공식 1개
- 아래에 쉬운 말 풀이
- 우측에 작은 예시 카드

**사용하기 좋은 경우**
- 지표 설명
- 계산 기준 안내
- 간단한 판단식 소개

**주의**
- 한 슬라이드에 공식 2개 이상 넣지 않는다.

---

### L26. Risky Assumption Test

**용도:** 중요한 가정과 검증 방법 연결.

**구조**
- 좌측: 위험한 가정
- 중앙: 왜 위험한가
- 우측: 검증 방법

**사용하기 좋은 경우**
- 실험 설계
- MVP 계획
- 리스크 점검
- 프로젝트 전 검증 계획

**주의**
- “가정”은 실제로 틀릴 수 있는 문장으로 쓴다.

---

### L27. Before After Thinking

**용도:** 학습 전후, 개선 전후, 관점 변화 표현.

**구조**
- 좌측: 이전 생각 또는 이전 상태
- 우측: 바뀐 생각 또는 개선 상태
- 중앙: 파란 화살표

**사용하기 좋은 경우**
- 개념 학습 효과 정리
- 잘못된 접근 수정
- 리디자인 전후 비교

**주의**
- Before를 과하게 비하하지 않는다.

---

### L28. Wrap-Up 5 Takeaways

**용도:** 마무리 핵심 요약.

**구조**
- 제목: `오늘 가져갈 5가지`
- 5개 핵심 문장 카드
- 마지막 카드에 다음 행동 또는 다음 세션 연결

**사용하기 좋은 경우**
- 강의 마무리
- 회고 정리
- 발표 결론

**참고**
- PresentationGo의 5 options 레이아웃을 마무리 요약형으로 변형한다.

---

### L29. Action Assignment

**용도:** 과제, 다음 행동, 실행 계획 안내.

**구조**
- 좌측: 과제 제목
- 중앙: 해야 할 일 3개
- 우측: 제출물 또는 완료 기준 체크리스트

**사용하기 좋은 경우**
- 강의 과제 안내
- 프로젝트 다음 단계
- 팀별 액션 아이템

**주의**
- 기준은 산출물 형태로 쓴다.

---

### L30. Feedback Board

**용도:** 발표 후 피드백, 회고, 개선점 정리.

**구조**
- 3열 보드
- `좋았던 점`, `불명확한 점`, `다음에 할 것`
- 포스트잇형 카드

**사용하기 좋은 경우**
- 팀 발표 피드백
- 회고
- 사용자 테스트 결과 정리

**참고**
- 워크숍 템플릿에서 자주 쓰이는 활동 보드 구조를 변형한다.

---

## 3. 발표 목적별 추천 레이아웃 조합

### 3.1 강의형 PPT

| 흐름 | 추천 레이아웃 |
|---|---|
| 표지 | L01 |
| 도입 질문 | L02 |
| 이전 지식 연결 | L03, L11 |
| 개념 정의 | L04, L05, L06 |
| 사례 소개 | L17, L18, L19 |
| 토론/실습 | L21, L22, L23 |
| 마무리 | L28, L29 |

### 3.2 워크숍형 PPT

| 흐름 | 추천 레이아웃 |
|---|---|
| 표지 | L01 |
| 문제 제기 | L02 |
| 활동 흐름 | L11, L12 |
| 작성 프레임 | L13, L14, L22 |
| 조별 토론 | L20, L21 |
| 발표 | L23 |
| 피드백 | L30 |
| 다음 행동 | L29 |

### 3.3 프로젝트 발표형 PPT

| 흐름 | 추천 레이아웃 |
|---|---|
| 표지 | L01 |
| 배경과 문제 | L02, L04 |
| 대상과 구조 | L15, L16 |
| 핵심 비교 | L06, L09 |
| 사례 또는 결과 | L18, L19, L24, L25 |
| 리스크와 검증 | L26 |
| 결론 | L28, L29 |

### 3.4 회고/리뷰형 PPT

| 흐름 | 추천 레이아웃 |
|---|---|
| 표지 | L01 |
| 진행 흐름 | L11 |
| 전후 변화 | L27 |
| 결과 갤러리 | L17 |
| 잘된 점/아쉬운 점 | L30 |
| 다음 액션 | L29 |

---

## 4. 에이전트 제작 규칙

PPT 제작 에이전트는 다음 규칙을 따른다.

1. 슬라이드를 만들기 전에 이 문서에서 레이아웃 ID를 먼저 고른다.
2. 선택한 레이아웃 ID를 작업 메모나 슬라이드 기획표에 기록한다.
3. `design.md`의 색상, 폰트, 헤더, 여백 규칙을 우선 적용한다.
4. 다크 섹션형 레이아웃은 만들지 않는다.
5. 한 슬라이드에 설명, 비교, 실습, 토론을 동시에 넣지 않는다.
6. 레이아웃 문서의 예시는 구조 이해용이다. 실제 콘텐츠는 현재 주제 문서에서 가져온다.
7. 레이아웃이 단조로워지면 L04/L06/L17 같은 설명형 사이에 L02/L21/L22/L30 같은 참여형 레이아웃을 끼운다.

---

## 5. 참고한 외부 레이아웃 레퍼런스

아래 자료를 브라우저 검색으로 확인하고, 특정 주제에 종속되지 않는 범용 레이아웃 패턴으로 재구성했다.

- Microsoft Support, Apply a slide layout: Title slide, Title and Content, Comparison, Picture-with-Caption 등 기본 레이아웃 참고  
  https://support.microsoft.com/en-us/powerpoint/training/apply-a-slide-layout
- Microsoft Support, PowerPoint Designer: 목록, 과정, 타임라인을 시각적 레이아웃으로 바꾸는 원칙 참고  
  https://support.microsoft.com/en-us/powerpoint/create-professional-slide-layouts-with-designer
- Microsoft Support, SmartArt graphics: List, Process, Cycle, Hierarchy, Relationship, Matrix, Pyramid, Picture 유형 참고  
  https://support.microsoft.com/en-us/office/graphics-visuals/choose-a-smartart-graphic
- Microsoft Support, SmartArt graphics described: 피라미드/관계/계층형 시각 구조 참고  
  https://support.microsoft.com/en-us/office/graphics-visuals/all-smartart-graphics-described
- PresentationGo, Timelines: roadmap, zigzag, milestone, swim-lane timeline 유형 참고  
  https://www.presentationgo.com/presentation/category/timelines-planning/timelines/
- PresentationGo, 3 options: 3개 선택지/과정 카드 구조 참고  
  https://www.presentationgo.com/presentation/tag/3-options/
- PresentationGo, 4 options: 4단계/4항목 카드 구조 참고  
  https://www.presentationgo.com/presentation/tag/4-options/
- PresentationGo, 5 options: 5단계 체크리스트/요약 구조 참고  
  https://www.presentationgo.com/presentation/tag/5-options/
- PresentationGo, 6 options: 6단계 흐름 구조 참고  
  https://www.presentationgo.com/presentation/tag/6-options/
- Slidesgo, Workshop templates: 활동형 워크숍, 실습, 토론형 슬라이드 구성 참고  
  https://slidesgo.com/workshop
- Slidesgo, Agenda infographics: 목차와 세션 안내 인포그래픽 참고  
  https://slidesgo.com/theme/agenda-infographics
- Slidesgo, Education templates: 교육용 강의/활동 슬라이드 톤 참고  
  https://slidesgo.com/education
- Canva, Education presentation templates: 학생 대상 수업 자료 레이아웃 참고  
  https://www.canva.com/presentations/templates/education/
- Canva, Business presentation templates: 비즈니스 주제 발표 구조 참고  
  https://www.canva.com/presentations/templates/business/
- SlideModel, Case Study guide: 사례 분석 슬라이드 구조 참고  
  https://slidemodel.com/case-study-how-to-write-and-present-it/
- SlideModel, Double Diamond model: 발산/수렴 과정 구조 참고  
  https://slidemodel.com/double-diamond-model/
- SlideModel, Coaching presentation tools: 코칭/워크숍형 발표 구조 참고  
  https://slidemodel.com/coaching-presentation/
- SlideModel, Go-to-Market strategy template: 고객, 시장, 가치 제안, 실행 전략 구조 참고  
  https://slidemodel.com/templates/go-to-market-strategy-presentation-template/
- SlideModel, Types of slides: 발표 목적별 슬라이드 유형 참고  
  https://slidemodel.com/types-of-slides/
- OpenStax, PowerPoint layout and design principles: Comparison, Section Header 등 기본 레이아웃 설명 참고  
  https://openstax.org/books/workplace-software-skills/pages/6-3-formatting-microsoft-powerpoint-slides-layout-and-design-principles

