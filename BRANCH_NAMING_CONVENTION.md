## 🌿 Branch Naming Convention

본 프로젝트는 GitHub Flow 기반의 브랜치 전략을 따르며, 브랜치 이름은 다음과 같은 **type/kebab-case** 규칙을 따릅니다.

---

### ✅ 브랜치 전략

- `main`: 배포용 브랜치. 항상 안정적인 상태를 유지합니다.
- `type/*`: 작업 목적에 따라 분기되는 기능/수정 브랜치입니다.
  - 작업 완료 시 `main` 브랜치로 Pull Request를 생성하고 병합합니다.

---

### ✅ 브랜치 이름 형식
```
type/작업-설명
```
> 예시: `feat/login-page`, `fix/modal-close-bug`

| 타입 (type)   | 설명                                | 예시                            |
|---------------|---------------------------------------|---------------------------------|
| `feat`        | 새로운 기능 추가                      | `feat/signup-form`             |
| `fix`         | 버그 수정                            | `fix/login-error`              |
| `refactor`    | 기능 변화 없는 코드 리팩토링         | `refactor/component-structure` |
| `docs`        | 문서 작성/수정                       | `docs/update-readme`           |
| `chore`       | 설정 변경, 패키지 설치 등 기타 작업   | `chore/setup-eslint`           |
| `test`        | 테스트 코드 추가/수정                | `test/review-api`              |

---

### 📌 브랜치 관리 규칙
- 브랜치는 **가급적 짧고 명확하게 작성**합니다.
- 작업 완료 후 브랜치는 병합과 함께 삭제합니다.

---

> 본 컨벤션은 프로젝트 관리 효율과 히스토리 추적 편의성을 위해 사용됩니다.
