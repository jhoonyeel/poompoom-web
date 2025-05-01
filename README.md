# poompoom

연인간에 주고 받은 선물을 공유하여 선물 선택의 고민을 덜고, 다양한 후기와 경험을 나눌 수 있는 `선물 공유 플랫폼`입니다.
받은 선물이나 준 선물을 플랫폼에 공유하여 실시간 후기와 평가를 확인할 수 있습니다.

### ✅ 사용 기술 및 개발 환경

| 분류 | 기술 스택 |
|:----|:----------|
| Frontend | React, TypeScript, Vite, Emotion (기존: JavaScript, styled-components) |
| Backend | Express (간단한 API 서버 구축) |
| Hosting | Vercel (Frontend), Render (Backend) |
| Tools | ESLint, Prettier (Airbnb Style), Stylelint, Github Actions |

### ✅ Application UI

- 홈화면

![image](https://github.com/user-attachments/assets/029d1bc2-ca48-4e37-9c5c-094fdec62103)
![image](https://github.com/user-attachments/assets/4b7a1e54-46bf-490d-aa71-f7464cdb7cff)
![image](https://github.com/user-attachments/assets/aa06d538-9b0b-4707-8413-601cabb85aae)

### ✅ Architecture
![image](https://github.com/user-attachments/assets/813ed4eb-4b4f-4340-9db1-91edf7e38fea)

### ✅ 주요 기능

1. 회원가입 / 로그인
2. 무한 스크롤 기반 리뷰 목록 조회
3. 좋아요 / 팔로우 Optimistic UI 적용
4. 리뷰글 작성 / 조회 / 수정 / 삭제
5. 검색 (프로필, 리뷰글)
6. 정렬 (가격대, 품목)
7. 프로필 조회 / 수정

### ✅ Technical Issue

자세한 내용은 👉 https://github.com/TwoSSome/poompoom-web/wiki
- 웹 브라우저 상에서 HTTPS/HTTP 통신 불가 (Mixed Content 차단)
- Grid로 구성된 리뷰글이 디스플레이 크기에 따라 뭉개지는 현상 발생
- 50KB 이상 이미지 번들링 속도가 느려지는 현상 발생

### 🔥 Technical Issue & Improvement (As-Is / To-Be)

| 우선순위 | 범주 | As-Is (기존 문제) | To-Be (개선 방향) |
|:---:|:---:|:---|:---|
| 1 | 구조/설계 | 폴더 구조가 기능별로 명확히 구분되지 않아 이해가 어려움 | 도메인 기준(FSD)으로 구조화하여 가독성 향상 |
| 2 | 구조/설계 | container/presenter/styles 구조 적용이 일관되지 않음 | 역할별 파일 분리 후 폴더 통일 관리 |
| 3 | 구조/설계 | 작은 컴포넌트도 억지로 3단 분리해 과도한 분리 부담 | 컴포넌트 복잡도에 따라 유연하게 분리 |
| 4 | 구조/설계 | 파일명이 반복되어 이름이 길어짐 | 폴더 구조로 관리, 파일명 간결화 |
| 5 | 구조/설계 | 상태 관리가 전역 없이 개별 컴포넌트 관리로 흩어짐 | Redux 도입하여 전역 상태 통합 |
| 6 | 구조/설계 | JavaScript + styled-components 사용, 타입 안정성 부족 | TypeScript + Emotion 마이그레이션 |
| 7 | 보안/인증 | 단순 accessToken 여부로만 로그인 상태 확인 | JWT 토큰 검증 및 payload 활용으로 중복 요청 제거 |
| 8 | 보안/인증 | 로컬 스토리지에 accessToken 저장 (보안 취약) | HttpOnly 쿠키를 통한 안전한 저장 방식으로 전환 |
| 9 | 사용자 경험 | 사용자가 읽은 리뷰 데이터를 매번 백엔드 fetch | 세션(local state/sessionStorage)으로 관리하여 통신 최소화 |
| 10 | 사용자 경험 | 팔로우, 좋아요 기능 비동기 동작 실패 (UI 즉시 반영 안 됨) | Optimistic Update 적용하여 즉각 반영 후 서버 동기화 |
| 11 | 사용자 경험 | 회원가입 시 회원 정보 초기화 문제 (입력값 유실) | 회원 정보 입력값 캐싱하여 유지 |
| 12 | 사용자 경험 | 무한스크롤 코드가 중복되고 가독성이 낮음 | 커스텀 훅으로 중복 제거 및 가독성 향상 |
| 13 | 사용자 경험 | 게시글 내 사진 크기 문제 (원본 비율에 따라 잘림) | object-fit: cover/contain 적용 및 컨테이너 조정 |
| 14 | 성능/최적화 | 50KB 초과 이미지 번들 빌드 이슈 | 이미지 압축 및 스플리팅 처리 |
| 15 | 성능/최적화 | Figma export SVG 구조 비효율 | 단일 프레임 및 단일 벡터로 정리하여 최적화 |
| 16 | 성능/최적화 | 고정된 가로폭 설정으로 반응형 미지원 | 3열 grid 기반 최소 반응형 대응 |
| 17 | 코드 스타일 | 코드 스타일 관리 및 테스트 자동화 부재 | ESLint + Prettier 적용, Github Actions 통한 자동화 |
| 18 | 코드 스타일 | CSS 속성 정렬 일관성 없음 | Stylelint + stylelint-order 적용하여 속성 순서 정렬 |


### 📌 Branch Naming Convention (Github-Flow)

브랜치 네이밍 규칙은 [Branch Naming Convention](./BRANCH_NAMING_CONVENTION.md) 문서를 참고하세요.


<br/>

### 📌 Commit Convention

이 프로젝트의 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 규칙을 따릅니다.  
전체 커밋 타입, 예시 등 자세한 내용은 👉 [`COMMIT_CONVENTION.md`](./COMMIT_CONVENTION.md)를 참고해주세요.

<br/>

### 📌 참고 사항
본 프로젝트는 팀 프로젝트를 기반으로 진행되었으며,  
이후 개인적으로 문제를 인식하고 구조 개선 및 기술 스택 업그레이드를 통해  
포트폴리오 버전으로 별도 리뉴얼 작업을 수행하였습니다.

개선 작업은 Organization 레포지토리를 fork하여 진행되었으며,  
팀 버전과 개인 개선 버전은 커밋 및 PR 기록을 통해 명확히 구분됩니다.

또한, 개인 개선 작업에서는 시간과 리소스를 고려하여,  
[주요 기능](https://github.com/jhoonyeel/poompoom-web/edit/main/README.md#-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)을 중심으로 재구성 및 개발을 진행하였습니다.

(※ 팀 프로젝트에서 맡지 않았던 부분 및 구현 우선순위가 낮은 기능은 제외되었습니다.)
