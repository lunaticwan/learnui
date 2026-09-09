# iM뱅크 Learn UI (React + TypeScript + Vite)

iM뱅크 Learn UI는 웹, macOS, iOS 등 다양한 플랫폼의 UI 요소, 컴포넌트, 인터페이스 디자인 스타일 및 다국어 용어를 학습하고 검색할 수 있는 모던 UI 비주얼 사전 애플리케이션입니다.

UI 요소의 정확한 공식 명칭과 사양을 확인하고, AI 코딩 에이전트(LLM / Prompting)에 적용 가능한 프롬프트를 직관적으로 습득할 수 있도록 설계되었습니다.

---

## 🚀 주요 기능

- **UI 컴포넌트 비주얼 사전 (Specimen Viewer)**: Web, macOS 등 다양한 플랫폼별 UI 요소를 인터랙티브 라이브 렌더링으로 확인 및 테스트
- **UI 스타일 & 디자인 아틀라스 (Styles Atlas)**: 40개 이상의 인터페이스 디자인 스타일과 DNA 특징, 혼동하기 쉬운 스타일 간의 차이점 비교
- **커맨드 팔레트 (`⌘K` / `Ctrl+K`)**: `cmdk` 및 `fuse.js` 기반의 빠르고 정교한 클라이언트측 인메모리 검색 지원
- **다국어(i18n) & 한영 대조 지원**: 영어(en), 한국어(ko), 중국어(zh) 다국어 모드 및 대조(Bilingual) 보기 모드 지원
- **대화형 UI 퀴즈 (Quiz Mode)**: 표본 및 컴포넌트 명칭을 복습하고 학습 상태를 관리할 수 있는 대화형 테스트
- **트랜스레이션 테이블 (Translation Table)**: Plain English, AppKit, SwiftUI 간 60개 이상의 UI 용어 매핑 및 비교
- **PWA (Progressive Web App) 지원**: Service Worker와 Manifest 기반의 오프라인 캐싱 및 독립 실행 애플리케이션 지원

---

## 🛠️ 기술 스택

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Search & UI Interactivity**: `cmdk`, `fuse.js`, `lucide-react`, `react-router-dom`
- **Deployment & CI/CD**: GitHub Actions, GitHub Pages

---

## 💻 로컬 개발 및 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

### 3. 프로덕션 빌드 및 로컬 미리보기

```bash
# TypeScript 타입 체크 및 Vite 프로덕션 빌드 (/dist 생성)
npm run build

# 빌드 산출물 로컬 미리보기
npm run preview
```

---

## 📂 프로젝트 구조

```
.
├── .github/workflows/   # GitHub Actions 자동 배포 워크플로우 (deploy.yml)
├── data/               # UI 용어, 스타일, 가이드 원본 데이터
├── public/             # PWA 매니페스트, 서비스 워커, 파비콘 및 정적 에셋
├── src/
│   ├── components/     # Header, Footer, CommandPalette, SpecimenViewer 등
│   ├── context/        # LanguageContext 등 다국어 및 애플리케이션 상태
│   ├── data/           # 컴포넌트 및 스타일 데이터 바인딩 모듈
│   ├── types/          # TypeScript 타입 정의 (ui.ts)
│   ├── views/          # 주요 페이지 뷰 (Home, Detail, Quiz, Styles 등)
│   ├── App.tsx         # 라우팅 및 루트 컴포넌트
│   └── main.tsx        # 진입점 및 PWA Service Worker 등록
├── index.html          # HTML 템플릿
├── vite.config.ts      # Vite 설정 (base: './')
└── package.json
```

---

## 📦 GitHub Pages 자동 배포

이 프로젝트는 `main` 브랜치에 코드가 푸시되면 `.github/workflows/deploy.yml` 워크플로우를 통해 GitHub Pages에 자동으로 정적 빌드가 배포됩니다.

1. GitHub 레포지토리의 **Settings** > **Pages** 메뉴로 이동합니다.
2. **Build and deployment** > **Source** 항목을 **GitHub Actions**로 설정합니다.
3. `main` 브랜치 푸시 또는 GitHub Actions 탭에서 **Run workflow**를 통해 배포를 트리거할 수 있습니다.
