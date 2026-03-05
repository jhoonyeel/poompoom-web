# poompoom - 선물 후기 공유 플랫폼

연인간에 주고 받은 선물을 공유하여 선물 선택의 고민을 덜고, 다양한 후기와 경험을 나눌 수 있는 `선물 후기 공유 플랫폼`입니다.
받은 선물이나 준 선물을 플랫폼에 공유하여 실시간 후기와 평가를 확인할 수 있습니다.

### ✅ 기술 스택

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white" />
</p>

### 👤 내가 담당한 기능

팀 프로젝트 기반 기능 중 아래 영역을 직접 구현/개선했습니다.

- **무한 스크롤 기반 리뷰 목록 조회**
- **리뷰글 CRUD (작성 / 조회 / 수정 / 삭제)**
- **검색 (프로필, 리뷰글)**
- **정렬 (가격대, 품목)**

### 🎥 Demo Video

<img src="./docs/poompoom-preview.gif" width="100%" alt="PoomPoom demo preview" />

**📺 전체 데모 영상**: [poompoom.gif](./docs/poompoom.gif)

### ✅ Architecture

![image](https://github.com/user-attachments/assets/813ed4eb-4b4f-4340-9db1-91edf7e38fea)

### ✅ Application UI

<details>
<summary>UI 화면 펼쳐보기</summary>

<p><strong>🏠 홈 화면</strong></p>

![image](https://github.com/user-attachments/assets/029d1bc2-ca48-4e37-9c5c-094fdec62103)
![image](https://github.com/user-attachments/assets/4b7a1e54-46bf-490d-aa71-f7464cdb7cff)
![image](https://github.com/user-attachments/assets/aa06d538-9b0b-4707-8413-601cabb85aae)

</details>

### ✅ 주요 기능

1. 회원가입 / 로그인
2. 무한 스크롤 기반 리뷰 목록 조회 **- (담당)**
3. 좋아요 / 팔로우 Optimistic UI 적용
4. 리뷰글 작성 / 조회 / 수정 / 삭제 **- (담당)**
5. 검색 (프로필, 리뷰글) **- (담당)**
6. 정렬 (가격대, 품목) **- (담당)**
7. 프로필 조회 / 수정

### ✅ Technical Issue

자세한 내용은 👉 https://github.com/TwoSSome/poompoom-web/wiki

- 웹 브라우저 상에서 HTTPS/HTTP 통신 불가 (Mixed Content 차단)
- Grid로 구성된 리뷰글이 디스플레이 크기에 따라 뭉개지는 현상 발생
- 50KB 이상 이미지 번들링 속도가 느려지는 현상 발생

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
