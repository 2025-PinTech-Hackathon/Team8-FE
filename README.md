# Git Commit Convention & Branch Rules

---

## 📌 커밋 컨벤션

### 1. **커밋 유형 지정**

커밋 메시지는 아래 유형 중 하나를 선택하여 **대문자로** 작성합니다.

| 커밋 유형          | 의미                                        |
| ------------------ | ------------------------------------------- |
| `Feat`             | 새로운 기능 추가                            |
| `Fix`              | 버그 수정                                   |
| `Docs`             | 문서 수정                                   |
| `Style`            | 코드 포매팅 (코드 변경 X, 세미콜론 누락 등) |
| `Refactor`         | 코드 리팩토링                               |
| `Test`             | 테스트 코드 추가 및 리팩토링                |
| `Chore`            | 기타 변경 사항 (ex: .gitignore 수정)        |
| `Design`           | CSS 등 UI 디자인 변경                       |
| `Comment`          | 주석 추가 및 변경                           |
| `Rename`           | 파일/폴더 이름 변경                         |
| `Remove`           | 파일/폴더 삭제                              |
| `!BREAKING CHANGE` | 주요 API 변경                               |
| `!HOTFIX`          | 치명적인 버그 급히 수정                     |

**예시:**
`Feat: 사용자 로그인 기능 구현 (#1)`

### 2. **제목과 본문 분리**

- 제목과 본문 사이에는 **빈 줄**을 추가합니다.
- 본문에는 변경 내용과 이유를 작성합니다.  
  (어떻게보다는 **무엇**과 **왜**를 중심으로 설명)

### 3. **제목 작성 규칙**

- 제목은 첫 글자를 대문자로 시작하며, 끝에 `.` 금지.
- 영문 기준 **50자 이내**로 작성.

### 4. **본문 가독성 높이기**

여러 변경 사항이 있을 경우 **글머리 기호**를 사용합니다.

```
    - 변경 내용 1
    - 변경 내용 2
    - 변경 내용 3
```

### 5. **명확한 설명**

자신의 코드가 직관적으로 파악되지 않을 수 있으므로 상세히 작성합니다.

---

## 🌿 브랜치 생성 규칙

### 1. 브랜치 네이밍

`feat`, `refactor`, `fix`, `chore`와 함께 **이슈 번호**를 포함해 브랜치를 생성합니다.

**예시:** `feat/#34`

### 2. 브랜치 소스 설정

브랜치를 생성할 때 **develop 브랜치를 기준**으로 만듭니다.

1. issue 제작
2. `create a branch` 클릭 후 이름 지정. (브랜치 연결 과정, PR시 용이)


------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
