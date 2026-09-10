# iM뱅크 Learn UI (React + TypeScript + Vite)

**iM뱅크 Learn UI**는 웹, macOS, iOS, Android 등 다양한 플랫폼의 UI 요소, 컴포넌트, 인터페이스 디자인 스타일 및 다국어 용어를 시각적으로 학습하고 검색할 수 있는 모던 UI 비주얼 사전 애플리케이션입니다.

UI 요소의 정확한 공식 명칭과 사양을 확인하고, AI 코딩 에이전트(LLM / Prompting)에 적용 가능한 프롬프트를 직관적으로 습득할 수 있도록 설계되었습니다.

---

## 🚀 주요 기능

- **UI 컴포넌트 비주얼 사전 (Specimen Viewer)**: Web, macOS 등 플랫폼별 UI 요소를 인터랙티브 라이브 렌더링으로 확인 및 테스트 (`/`, `/:platform/:slug`)
- **UI 스타일 & 디자인 아틀라스 (Styles Atlas)**: 스큐어모피즘, 뉴모피즘, 글래스모피즘 등 14개 이상의 인터페이스 디자인 스타일과 핵심 특징 비교 (`/styles`, `/styles/vs/:pair`)
- **초성/조사 지원 커맨드 팔레트 (`⌘K` / `Ctrl+K`)**: `cmdk` 및 `fuse.js` 기반의 인메모리 검색, 한글 초성 추출 및 조사 제거 필터링 지원
- **플랫폼별 용어 대조표 (Translation Table)**: 웹 표준 영문, 한국어, iOS(SwiftUI), Android(Jetpack Compose) UI 용어 대조 및 검색 (`/translate`)
- **한영 대조 및 다국어 모드**: 한국어(`ko`), 영어(`en`), 한영 대조(`bilingual`) 모드 지원 (`localStorage` 상태 유지)
- **PWA (Progressive Web App) 지원**: Service Worker (`/sw.js`) 및 Web App Manifest (`/manifest.webmanifest`) 기반 오프라인 캐싱 및 독립 실행 애플리케이션 지원

---

## 🤖 LLM & AI 에이전트 (Jules) 파이프라인 가이드

이 프로젝트는 사람뿐만 아니라 **LLM 및 AI 코딩 에이전트(Jules)**가 코드베이스 구조를 신속하게 파악하고 안전하게 확장할 수 있도록 명확한 데이터 흐름과 작성 규칙을 유지합니다.

### 1. 데이터 파이프라인 & 단일 진실 출처 (Single Source of Truth)

1. **원본 데이터**: `data/entries.json` (UI 엔트리 원본) 및 `data/styles.json` (스타일 원본)
2. **동기화 스크립트**: `scripts/build_korean_data.py`
   - 원본 JSON 데이터를 읽어 한국어 명칭 매핑(`ENTRY_NAME_KO`, `STYLE_NAME_KO`)을 동기화합니다.
   - 다국어 객체 규격 `{ "en": "...", "ko": "..." }`으로 변환 및 정돈합니다.
   - 결과물을 TypeScript 모듈인 `src/data/entries.ts` 및 `src/data/styles.ts`로 자동 생성합니다.
3. **규칙**:
   - UI 엔트리 및 스타일 데이터를 수정할 경우 `data/*.json` 또는 `scripts/build_korean_data.py`를 수정한 후 `npm run build:data`를 실행하여 TypeScript 파일에 반영해야 합니다.
   - `src/data/entries.ts` 및 `src/data/styles.ts`는 자동 생성 결과물이므로 직접 수정하지 않습니다.

### 2. 주요 경로 및 아키텍처

```
.
├── data/                       # 원본 데이터 파일 (JSON)
│   ├── entries.json            # UI 엔트리 원본
│   └── styles.json             # 스타일 원본
├── scripts/
│   └── build_korean_data.py    # JSON -> TS 변환 파이프라인 스크립트
├── public/                     # PWA 파비콘, Manifest, Service Worker 및 정적 에셋
│   ├── manifest.webmanifest
│   └── sw.js
├── src/
│   ├── assets/
│   │   └── site.css            # 전역 디자인 시스템 및 커스텀 스타일
│   ├── components/             # UI 공용 컴포넌트
│   │   ├── Header.tsx          # 헤더 네비게이션 및 검색 버튼
│   │   ├── Footer.tsx          # 하단 푸터
│   │   ├── CommandPalette.tsx  # ⌘K 커맨드 팔레트 (초성/조사 검색)
│   │   ├── SpecimenViewer.tsx  # UI 표본 라이브 시각화 렌더러
│   │   └── BilingualText.tsx   # 한영 대조 텍스트 출력 컴포넌트
│   ├── context/
│   │   └── LanguageContext.tsx # 다국어(ko/en/bilingual) 및 앱 상태
│   ├── data/                   # 자동 생성된 데이터 모듈 (entries.ts, styles.ts, uiCopy.ts)
│   ├── types/
│   │   └── ui.ts               # UIEntry, UIStyle, TranslateTableItem 등 TypeScript 타입
│   ├── views/                  # 페이지 뷰 컴포넌트
│   │   ├── HomeView.tsx        # 메인 UI 사전 뷰
│   │   ├── EntryDetailView.tsx # UI 상세 및 인터랙티브 표본 뷰
│   │   ├── StylesHubView.tsx   # 스타일 허브 뷰
│   │   ├── StyleDetailView.tsx # 스타일 상세 뷰
│   │   ├── StyleVsView.tsx     # 스타일 1:1 비교 뷰
│   │   └── TranslateTableView.tsx # 플랫폼 용어 대조표 뷰
│   ├── App.tsx                 # Client 라우팅 및 Toaster 설정
│   └── main.tsx                # React 진입점 및 PWA Service Worker 등록
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages 자동 배포 워크플로우
├── vite.config.ts              # Vite 설정 (base: './', manualChunks 최적화)
├── tsconfig.json               # TypeScript 설정
└── package.json
```

### 3. 코딩 컨벤션 & 설계 제약사항

- **타이포그래피**:
  - 일반 UI/본문: Pretendard (`var(--font-sans)`)
  - 코드 블록 및 용어/심볼: Cascadia Code (`var(--font-mono)`)
- **브랜드 컬러**:
  - iM Bank Teal (`--brand-primary`: `#00a88f`, `--brand-dark`: `#008773`, `--brand-light`: `#e6f7f4`)
- **서브픽셀 렌더링 방지**:
  - `src/assets/site.css` 내 `font-size` 및 `border` 두께는 정수 pixel 단위를 사용합니다 (예: 11.5px 금지, 11px 또는 12px 사용).
- **외부 종속성**:
  - 외부 CDN 자원 연결은 최소화하며, 폰트 자원(Pretendard CDN) 외 별도 외주 API 호출에 의존하지 않습니다.

---

## 🛠️ 기술 스택

- **Core**: React 18, TypeScript, Vite
- **Styling**: Custom CSS (CSS Custom Properties), `clsx`
- **Search & Interactive**: `cmdk`, `fuse.js`, `lucide-react`, `usehooks-ts`, `sonner`
- **Routing**: `react-router-dom` (v6)
- **Data Build Engine**: Python 3.12 (`scripts/build_korean_data.py`)
- **Deployment & CI/CD**: GitHub Actions, GitHub Pages

---

## 💻 로컬 개발 및 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 데이터 빌드 (선택 또는 데이터 수정 시)

`data/*.json` 또는 한국어 매핑 수정 후 데이터 동기화를 수행합니다.

```bash
npm run build:data
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

### 4. 타입체크 및 프로덕션 빌드

```bash
# TypeScript 타입 검사
npm run typecheck

# 데이터 동기화 + 타입 검사 + Vite 빌드 (/dist 생성)
npm run build

# 빌드 산출물 미리보기
npm run preview
```

---

## 📦 배포 안내

- **GitHub Pages**: `main` 브랜치에 코드가 푸시되면 `.github/workflows/deploy.yml`을 통해 `/dist` 정적 결과물이 GitHub Pages에 자동으로 배포됩니다.
- 자세한 서버 배포 규격 및 Nginx 설정은 `DEPLOY.md` 문서를 참고하세요.
