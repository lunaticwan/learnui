# LearnUI (React + TypeScript + Vite)

LearnUI / NameThatUI는 UI 요소, 컴포넌트, 인터페이스 디자인 스타일 및 다국어 용어를 학습하고 검색할 수 있는 모던 UI 사전 애플리케이션입니다.

기존 Python 기반 정적 사이트 생성기에서 **Vite + React + TypeScript** 기반의 SPA(Single Page Application)로 전면 개편되었습니다.

---

## 🚀 주요 기능 및 특징

- **모던 SPA 스택**: React 18, TypeScript, Vite, Tailwind CSS 사용
- **Command Palette (`⌘K` / `Ctrl+K`)**: `cmdk`와 `fuse.js` 기반의 인메모리 클라이언트 검색 지원
- **다국어(i18n) 지원**: 영어(en), 중국어(zh), 한국어(ko) 지원 및 유연한 Fallback 스키마 설계
- **대화형 컴포넌트 뷰어 (Specimen Viewer)**: live UI 에셋 및 인터랙티브 프래그먼트 렌더링
- **다양한 학습 섹션**:
  - UI Components dictionary (Web, macOS, iOS)
  - UI Styles & Comparisons Hub
  - Guides & Translation Glossaries
  - UI Component Quiz

---

## 🛠️ 개발 및 실행 방법 (Local Development)

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

### 프로덕션 빌드 및 로컬 미리보기

```bash
# TypeScript 타입 체크 및 Vite 빌드
npm run build

# 빌드 결과물 preview
npm run preview
```

---

## 📦 GitHub Pages 배포 (GitHub Actions)

이 프로젝트에는 Push 시 GitHub Pages에 자동 정적 배포를 수행하는 Workflow(`.github/workflows/deploy.yml`)가 포함되어 있습니다.

1. GitHub 레포지토리 Settings > Pages 메뉴로 이동합니다.
2. **Build and deployment > Source**를 **GitHub Actions**로 설정합니다.
3. `main` 브랜치에 코드를 푸시하면 자동으로 빌드 및 배포가 완료됩니다.
