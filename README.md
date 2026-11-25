
# 개발 포트폴리오

### 목차

1. [Tech Stack](#1-tech-stack)
2. [피해잇다](#2-피해잇다)
3. [동백원패스](#3-동백원패스)
4. [Java 알고리즘 학습 및 멘토링](#4-java-알고리즘-학습-및-멘토링)

---

## 1. Tech Stack

**Language**

![Java](https://img.shields.io/badge/Java-007396?style=flat-square)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

**Backend & Frontend**

![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs)

**Database**

![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

**Tools & DevOps**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack)
![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white)

---

## 2. 피해잇다

`복구몬GO` `개발 중` `AI` `공공데이터`

> 피해 현장과 행정을 잇다

농업재해 담당 공무원의 현장조사 및 행정 업무를 지원하는 AI 기반 서비스입니다.

<a href="https://youtu.be/yFLi8h0N6rc">
  <img src="https://img.youtube.com/vi/yFLi8h0N6rc/0.jpg" width="400">
</a>

[서비스 소개 영상 보기](https://youtu.be/yFLi8h0N6rc)

### 요구사항 분석 및 설계

- 전문가 피드백 및 **공무원 4명과의 인터뷰**
- 현장 업무 흐름 분석 및 사용자 요구사항 반영
- 기존 NDMS 운영 환경을 고려한 독립형 서비스 설계

### 기술 검증

| 검증 항목 | 검증 내용 및 대응 |
|---|---|
| 팜맵 API | PNU 및 GPS 기반 농경지 조회 |
| 농경지 면적 | 경계 좌표 기반 면적 계산 및 API 응답값 일치 확인 |
| GPS 오차 | 인접 농경지 오분류 가능성 확인 및 복수 후보 제시 방식 설계 |
| 외부 API | 호출량 및 데이터 보관 제약 검토 |

### 주요 개발 예정 기능

| 기능 | 설명 |
|---|---|
| RAG | 공식 피해조사 기준 및 근거 안내 |
| 체크리스트 | 규칙 기반 누락 항목 점검 |
| GPS | 현장 사진과 농경지 연결 |
| 생성형 AI | 현장조사 기록 초안 작성 |
| 조사 결과 | 검토 및 NDMS 입력 정리본 생성 |
| 경로 최적화 | TMAP API 기반 방문 경로 추천 |

**Tech Stack (설계 기준)**

Flutter · Spring Boot · FastAPI · PostgreSQL · PostGIS · pgvector · SQLite · RAG · Docker · NAVER Cloud Platform

---

## 3. 동백원패스

`FinTech` `REST API` `Backend` `Frontend`

> 카드 혜택 비교 및 모의결제 서비스

동백전과 일반 카드를 통합 관리하고 카드별 혜택을 비교하여 유리한 결제수단을 추천하는 서비스입니다.

[GitHub Repository](https://github.com/joonk2/onepass_with_dongbakcoin)

### 주요 구현 기능

`카드 관리` `카드 우선순위 설정` `혜택 비교` `모의결제` `거래이력`

### 개발 및 유지보수

| 구분 | 구현 내용 |
|---|---|
| REST API | FastAPI 기반 API 개발 |
| 계층 분리 | Router → Service → Repository → Entity |
| API 버전 관리 | `/api/v1` 적용 |
| DB 확장성 | 위치 및 브랜드 기반 기능 확장을 고려한 가맹점 테이블 개선 |
| 예외처리 | HTTP 403, 404, 409 처리 |
| 테스트 | pytest 기반 테스트 코드 작성 |
| 협업 자동화 | GitHub 및 Slack 연동을 통한 커밋 알림 자동화 |

### 주요 트러블슈팅

#### 01. 결제 후 잔액 미차감 및 캐시백 미반영

- **원인:** 잔액 차감 로직 누락, 혜택 계산 기준 불일치, 이전 커밋 배포
- **해결:** 결제 로직 수정, 혜택 계산 기준 통일 및 최신 코드 재배포

#### 02. CORS 오류로 인한 로그인 요청 차단

- **원인:** 프론트엔드 주소와 CORS 허용 출처 불일치
- **해결:** CORSMiddleware 및 Render 환경변수 수정

#### 03. 일반 카드 혜택 산정 오류

- **원인:** 카드별 전월 실적 데이터 누락
- **대응:** DB 데이터 보완 및 추가 검증 과제로 분류

#### 04. 무한 순환 카드 캐러셀 구현

**문제**

마지막 카드에서 첫 번째 카드로 이동할 때 발생하는 역방향 화면 전환

**해결**

- 양수와 음수 방향에 각각 나머지 연산 적용
- 음수 방향의 절댓값 처리 및 인덱스 보정
- 카드 배열을 3세트로 복제하여 슬라이드 위치 보정

```javascript
if (d >= 0) {
    new_idx = (cur_idx + d) % cards.length;
} else if (d <= -1) {
    temp_d = Math.abs(d);
    temp_d = temp_d % cards.length;
    new_idx = (cur_idx - temp_d + cards.length) % cards.length;
}
```

**결과**

양방향으로 끊김 없이 이동하는 무한 순환 카드 캐러셀 구현

**Tech Stack**

Python · FastAPI · SQLAlchemy · PostgreSQL · pytest · Next.js · React · TypeScript · Vercel · Render · NeonDB

---

## 4. Java 알고리즘 학습 및 멘토링

`Java` `Algorithm` `Mentoring`

- Java 기반 자료구조 및 알고리즘 학습
- 시간 복잡도 분석 및 다양한 풀이 방법 연구
- **교육생 3명을 대상으로 매주 알고리즘 멘토링**
- 알고리즘 문제 및 테스트케이스 직접 제작
- 학습 내용 및 문제 해결 과정 기록

[멘토링 문제 기록 블로그](https://joonk2.github.io/)
