# DESIGN.md — iM뱅크 Learn UI 디자인 시스템

> 단일 진실 출처 (Single Source of Truth). 프로젝트의 모든 인터페이스, 표본(demo), 컴포넌트는 본 디자인 명세를 준수합니다.

---

## 1. 비주얼 테마 및 브랜드 미학

iM뱅크 Learn UI는 깨끗하고 정교한 기술 문서 및 디자인 시스템 감성을 지향하는 **모던 틸(Teal) & 슬레이트(Slate) 미학**을 채택합니다.
순백색 배경에 절제된 그레이스케일 레이아웃과 iM 시그니처 틸 메인 컬러인 `#00A88F`를 조합하여, UI 표본(Specimen)이 직관적으로 부각되도록 구성합니다.

- **목적**: 디자이너, 개발자 및 AI 코딩 에이전트(LLM)를 위한 직관적인 UI 비주얼 사전 및 인터페이스 아틀라스
- **테마**: Light-only (기본 화이트). 다크 모드는 지원하지 않음.

---

## 2. 컬러 팔레트 및 역할

| 역할 | 변수명 | HEX / RGBA 값 | 용도 |
|---|---|---|---|
| 페이지 배경 | `--bg` | `#FFFFFF` | 메인 배경 (순백색) |
| 무대/셀 배경 | `--bg-2` | `#F8FAFC` | 표본 무대, 헤더 스티키 렌더링, 푸터 배경 |
| 카드 배경 | `--bg-card` | `#FFFFFF` | 컴포넌트 및 스타일 카드 배경 |
| 영역 채우기 | `--fill` | `#F1F5F9` | 버튼, 태그, 선택 영역 기본 배경 |
| 호버 채우기 | `--fill-hover` | `#E2E8F0` | 요소 호버 시 배경 |
| 기본 구분선 | `--line` | `#E2E8F0` | 일반 헤어라인 테두리 및 구분선 |
| 강조 구분선 | `--line-strong` | `#CBD5E1` | 입력 폼, 호버 카드, 파티션 테두리 |
| 보조 텍스트 1 | `--gray-400` | `#94A3B8` | 플레이스홀더, 비활성 텍스트 |
| 보조 텍스트 2 | `--gray-500` | `#475569` | 서브 캡션, 메타 정보 |
| 본문 텍스트 | `--gray-600` | `#334155` | 설명 단락, 카피 본문 |
| 강조 본문 | `--gray-700` | `#1E293B` | 메타 라벨, 카피 강조 |
| 메인 타이틀 | `--fg` | `#0F172A` | 제목, 주요 텍스트, 활성 탭 |
| 브랜드 메인 | `--brand-primary` | `#00A88F` | iM Bank 시그니처 틸, 강조 링크, 활성 상태 |
| 브랜드 다크 | `--brand-dark` | `#008773` | 브랜드 호버 상태, 주요 심볼 텍스트 |
| 브랜드 라이트 | `--brand-light` | `#E6F7F4` | 하이라이트 배경, 선택된 태그 배경 |
| 서브 포인트 | `--blue` | `#0284C7` | 스카이 블루 포인트 컬러 |

---

## 3. 타이포그래피 규칙

- **UI & 본문 스택**: **Pretendard** (`var(--font-sans)`)
  - `-apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- **코드/용어/표본 태그**: **Cascadia Code** (`var(--font-mono)`)
  - `ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace`
- **서브픽셀 렌더링 방지**:
  - `src/assets/site.css` 내 `font-size` 및 `border` 두께는 서브픽셀 번짐 방지를 위해 **정수 pixel 단위**만 사용 (예: 11px, 12px, 14px, 16px 사용, 소수점 px 금지).
- **글자 굵기**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold) 사용. 이탤릭체 사용 안 함.

---

## 4. 다국어 및 한영 대조 모드

- **언어 표시 모드**: `ko` (한국어 기본), `en` (영어 모드), `bilingual` (한영 대조 모드)
- **상태 제어**: `<html data-lang-mode="...">` 속성 및 `localStorage['ntui-lang-mode']` 연동
- **표기 원칙**:
  - UI 엔트리 및 스타일의 영문 공식 명칭(`nameEn`, `slug`)은 변형 없이 보존하며, 한국어 명칭 및 설명과 함께 제공
  - API 기호, 코드, 프롬프트 문구는 원어 및 기술 고유명사를 유지

---

## 5. 컴포넌트 디자인 규칙

- **상단 헤더 (`.site-header`)**:
  - `position: sticky`, `height: 60px`
  - `background: rgba(255, 255, 255, 0.88)`, `backdrop-filter: blur(16px)`
- **표본 카드 (`.card`, `.style-card`)**:
  - `border-radius: 16px` (`var(--radius-lg)`), `border: 1px solid var(--line)`
  - 상단 무대 (`.stage-card`, 높이 210px~220px, `--bg-2` 배경) + 하단 메타 정보
  - 호버 시 `transform: translateY(-4px)`, `box-shadow: var(--shadow-lg)`
- **커맨드 팔레트 (`⌘K`)**:
  - `cmdk` 및 `fuse.js` 기반 인메모리 검색 레이어
  - 한국어 자음/모음 초성 추출 및 조사('은/는/이/가/을/를' 등) 제거 알고리즘 적용
- **버튼 & 입력 폼**:
  - 입력창 포커스 시 `--brand-primary` 테두리 및 `var(--ring)` 포커스 링 적용
  - 버튼 클릭 시 `:active transform: translateY(0)` 또는 `scale(0.97)` 피드백

---

## 6. 반응형 브레이크포인트

- **컨테이너**: `max-width: 1140px`, 중앙 정렬, 좌우 여백 24px (모바일 16px)
- **그리드 레이아웃**:
  - 데스크톱 (≥1024px): 3열 (`repeat(auto-fill, minmax(320px, 1fr))`)
  - 태블릿 (≥760px): 2열
  - 모바일 (<760px): 1열
