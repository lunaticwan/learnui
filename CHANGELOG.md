# 변경 이력 (CHANGELOG)

**iM뱅크 Learn UI** 프로젝트의 모든 주요 변경 사항과 버전 이력이 기록됩니다.

이 프로젝트는 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/) 형식을 따르며, [Semantic Versioning](https://semver.org/spec/v2.0.0.html)을 준수합니다.

---

## [1.0.0] - 2026-09-11

### 🚀 신규 기능 (Added)
- **iM뱅크 Learn UI 브랜드 및 디자인 시스템 수립**:
  - iM Bank Teal 시그니처 컬러 (`#00A88F`) 및 Slate 계열의 모던 테마 구축
  - UI 타이포그래피 Pretendard 및 코드/심볼용 Cascadia Code 폰트 스택 적용
- **UI 컴포넌트 비주얼 사전 (Specimen Viewer)**:
  - Web, macOS 등 플랫폼별 UI 요소를 라이브 인터랙티브 무대로 렌더링 및 확인 (`/`, `/:platform/:slug`)
- **UI 스타일 & 디자인 아틀라스 (Styles Hub)**:
  - 스큐어모피즘, 뉴모피즘, 글래스모피즘, 리퀴드 글래스, 네오브루탈리즘 등 14개 이상의 디자인 스타일 표본 제공 (`/styles`, `/styles/:slug`)
  - 1:1 스타일 비교 기능 구현 (`/styles/vs/:pair`)
- **초성/조사 검색 지원 커맨드 팔레트 (`⌘K`)**:
  - `cmdk` 및 `fuse.js` 기반 인메모리 검색 지원
  - 한글 초성(자음) 추출 및 조사('은/는/이/가/을/를' 등) 제거 필터링 알고리즘 적용
- **플랫폼별 용어 대조표 (Translation Table)**:
  - 웹 표준 영문 UI 명칭, 한국어, iOS(SwiftUI), Android(Jetpack Compose) 대응 용어 및 연관 엔트리 연결 대조표 제공 (`/translate`)
- **다국어 및 한영 대조 모드**:
  - 한국어(`ko`), 영어(`en`), 한영 대조(`bilingual`) 표시 모드 지원 및 `localStorage` 상태 보존
- **PWA (Progressive Web App) 오프라인 모드**:
  - Service Worker (`/sw.js`) 및 Web App Manifest (`/manifest.webmanifest`) 등록으로 오프라인 정적 파일 캐싱 지원
- **데이터 자동 파이프라인 엔진**:
  - Python 기반 데이터 변환 스크립트 (`scripts/build_korean_data.py`)로 `data/*.json`을 `src/data/*.ts` TypeScript 모듈로 자동 동기화

### 📝 문서화 (Documentation)
- **프로젝트 및 AI 가이드 문서 전면 작성 및 현행화**:
  - `README.md`: 프로젝트 개요, 기능, 실행 방법 및 **LLM/AI 에이전트(Jules) 파이프라인 가이드** 명시
  - `DESIGN.md`: Pretendard/Cascadia Code, iM Teal 컬러 토큰 및 서브픽셀 방지 정수 px 규격 정의
  - `DEPLOY.md`: GitHub Actions (`.github/workflows/deploy.yml`) 및 Nginx 정적 배포 규격 정비
  - `demos/STYLE_DEMO_BRIEF.md`: 미니 플레이어 DOM 및 14개 스타일 신호 기반 AI 서브에이전트 구현 계약서 한국어 정비
  - `CHANGELOG.md`: 버전 관리 문서 신규 작성
