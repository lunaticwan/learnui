# DESIGN.md — Learn UI Name (UI 비주얼 사전) 디자인 시스템

> 단일 진실 출처 (Single Source of Truth). 모든 페이지, 모든 demo, 모든 라운드의 수정은 본 문서를 기준으로 진행합니다.

## 1. 비주얼 테마 및 무드

"Vercel 스타일의 흑백 엔지니어링 미학". 기본 순백색 바탕에 블랙 / 그레이스케일 / 화이트 3색으로 전체 인터페이스를 구성하며, 링크 블루 `#0070f3`는 유일한 기능 색상으로 절제되어 사용됩니다. UI 표본(demo)이 절대적인 주연이며, 사이트 chrome은 절제되고 정교하며 눈에 띄지 않아야 합니다.

- 대치: AI 코딩 에이전트를 사용하는 디자이너 및 개발자를 위한 개발자 친화적 비주얼 사전 참고 사이트
- 수치: 비주얼 모험도 3 / 애니메이션 강도 4 / 정보 밀도 7
- 테마: Light-only (기본 화이트). Dark Mode 제공 안 함

## 2. 컬러 팔레트 및 역할

| 역할 | 값 | 용도 |
|---|---|---|
| `--bg` | `#FFFFFF` | 페이지 배경 (순백색) |
| `--bg-2` | `#FAFAFA` | demo 무대, 복사 블록 배경 |
| `--fill` | `#F5F5F5` | hover 필, 번호 블록 배경 |
| `--line` | `#EAEAEA` | 헤어라인 테두리 |
| `--line-strong` | `#D4D4D4` | hover / 강조 테두리 |
| `--gray-400` | `#A3A3A3` | 표본 태그, 설명 텍스트, 플레이스홀더 |
| `--gray-500` | `#737373` | 대조 텍스트 행, 3단계 텍스트 |
| `--gray-600` | `#525252` | 보조 텍스트, 본문 단락 |
| `--gray-700` | `#404040` | 강조 단락 |
| `--fg` | `#0A0A0A` | 메인 텍스트, 제목, 활성 상태 |
| `--blue` | `#0070F3` | 유일한 기능색: 콘텐츠 링크, new 태그, focus 링 |
| `--blue-soft` | `rgba(0,112,243,.14)` | 검색 하이라이트 `<mark>` 배경 |

기능 색상은 demo 표본 내부에서 재현하는 시스템(macOS 그레이, iOS 블루 등)에서만 사용되며, 사이트 자체 테마에는 관여하지 않습니다.
그림자: 오직 팝오버 레이어에만 `0 8px 30px rgba(0,0,0,.12)` 적용. 카드에는 그림자 대신 헤어라인 테두리 사용.

## 3. 타이포그래피 규칙

- 라틴/숫자 디스플레이: **Geist** (셀프 호스팅 variable font, `assets/fonts/geist-vf.woff2`)
- 코드/용어/표본 태그: **Geist Mono** (셀프 호스팅, `assets/fonts/geist-mono-vf.woff2`)
- 한국어/한자: 시스템 폰트 스택 `-apple-system, BlinkMacSystemFont, "Pretendard", "Apple SD Gothic Neo", sans-serif`
- 폰트 굵기(font-weight)는 400 / 500 / 600만 사용. 이탤릭체 금지.
- H1 `letter-spacing: -0.045em` (clamp 40–64px); 상세 페이지 H1 `-0.03em` (clamp 28–40px)
- 본문 15px/1.7; 보조 대조 행은 -1단계 글자 크기 + `--gray-500`
- 숫자 및 API 기호는 항상 Geist Mono 사용

## 4. 다국어 및 한영 대조 규칙

- 4가지 열람 모드: `对照` (기본 대조) / `EN` / `中文` / `한국어`, `<html data-lang-mode="...">` 제어, localStorage 저장
- 대조 모드: 영문 표기 우선, 대조 언어가 뒤이어 표시됨
- 용어 명칭(entry/style name)은 항상 원문 영문명을 유지하며, 번역명은 대조 행으로 표시
- API 기호, prompt, brief 원문은 원어 그대로 보존

## 5. 컴포넌트 스타일

- **표본 카드 (홈/스타일 그리드)**: 상단 demo 무대 (`--bg-2` 배경 + `--line` 테두리 + radius 8px), 하단 용어명 + Geist Mono 11px 기호 행 + tagline.
- **태그 (new / platform)**: Geist Mono 9–10px 대문자 tracking 0.1em; new = `--blue`, platform = `--gray-400`
- **버튼**: radius 6px, 화이트 배경 + `--line` 테두리, hover 시 테두리 `--gray-400`; `:active scale(0.97)`
- **세그먼트 컨트롤 (tabs / 언어 스위처)**: radius 6px + `--line` 테두리, 활성 세그먼트 = 블랙 배경 + 화이트 텍스트
- **입력 폼**: 화이트 배경 + `--line` 테두리, focus 시 테두리 `--fg` + 3px `rgba(0,0,0,.06)` 링

## 6. 레이아웃 및 뷰포트

- 컨테이너 `max-width: 1080px` 중앙 정렬, 여백 24px (모바일 16px)
- 홈 표본 그리드: `repeat(auto-fill, minmax(300px, 1fr))`, gap 28px 24px
- 반응형 뷰포트: ≥1024px 3열, ≥760px 2열, <760px 1열

## 7. Motion & PWA

- 사이트 chrome: hover 120–160ms, `:active scale(0.97)`; transform/opacity/border-color만 변경
- PWA: `manifest.webmanifest` 및 `sw.js` 오프라인 캐싱 지원
