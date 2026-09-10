# 스타일 데모 구현 명세 (Style Demo Subagent Brief)

이 문서는 **iM뱅크 Learn UI**의 **인터페이스 디자인 스타일 표본(Style Specimen)** 구현을 담당하는 AI 서브에이전트 및 개발자를 위한 기술 명세서입니다.
14가지 디자인 스타일은 모두 공통된 **미니 음악 플레이어 UI** 구조를 공유하며, 스타일에 맞춰 외형(스킨, 질감, 그림자, 타이포그래피)이 변화합니다.

---

## 1. 입력 및 원본 정보

- **스타일 데이터**: `data/styles.json` (각 스타일의 `slug`, `signals`, `brief`, `tagline` 참조)
- **참고 구현체**: `demos/switch-checkbox-radio.html` (루트 클래스 `.demo.demo-<slug>` + 스코프 지정된 `<style>` + 선택적 IIFE `<script>`)

---

## 2. 공통 DOM 구조 규격

> **규칙**: 클래스명, 텍스트 카피(Midnight Drive / Neon Coast / 1:12 / 3:48), 기본 요소 구조는 임의로 변경할 수 없습니다. 필요 시 내부 SVG 아이콘 또는 보조 요소만 추가 가능합니다.

```html
<div class="demo demo-style-SLUG">
  <div class="player">
    <div class="art"></div>              <!-- 앨범 커버: CSS로 해당 스타일의 시각적 특징 표현 -->
    <div class="meta">
      <div class="title">Midnight Drive</div>
      <div class="artist">Neon Coast</div>
    </div>
    <div class="progress">
      <div class="track"><div class="bar"></div></div>
      <div class="times"><span>1:12</span><span>3:48</span></div>
    </div>
    <div class="controls">
      <button class="cbtn prev" type="button" aria-label="Previous">…</button>
      <button class="cbtn play" type="button" aria-label="Play">…</button>
      <button class="cbtn next" type="button" aria-label="Next">…</button>
    </div>
    <div class="volume">
      <span class="vicon"></span>
      <div class="vtrack"><div class="vfill"></div></div>
    </div>
  </div>
</div>
```

---

## 3. 인터랙션 및 동작 규칙 (JavaScript)

1. **재생 / 일시정지 (Play / Pause)**:
   - 재생 버튼 클릭 시 재생 상태 전환 (아이콘 변경 + `.bar` 진행률 애니메이션 평활 이동).
2. **이전 / 다음 (Prev / Next)**:
   - 진행률 0% 재시작.
3. **볼륨 조절 (Volume)**:
   - `.vtrack` 클릭 시 `.vfill` 너비(0–100%) 변경 (기본값: 70%).
4. **JS 바인딩 제약**:
   - `document.currentScript.parentElement.querySelector(':scope > .demo')` 또는 전역 격리된 쿼리로 노드를 참조하여 전역 오염을 방지함.
5. **모션 접근성**:
   - `@media (prefers-reduced-motion: reduce)` 환경에서는 과도한 모션 애니메이션을 즉시 정지 상태로 전환함.

---

## 4. 플레이어 크기 및 규격

- 플레이어 너비: 260px ~ 300px
- 전체 높이: ≤ 340px (카드 메인 무대 높이: 220px, 상세 무대 높이: 400px)
- 외부 오버플로우 방지 (`max-width: 100%`)

---

## 5. 14개 주요 디자인 스타일 시각적 신호 (Style Signals)

`data/styles.json`에 정의된 핵심 신호(`signals`)를 충실히 재현해야 합니다.

- **스큐어모피즘 (Skeuomorphism)**: iOS 6 감성의 헤어라인 금속 질감, 박음질 가죽, 리얼한 가공 그림자 및 노브.
- **뉴모피즘 (Neumorphism)**: 배경과 동일한 색상의 소프트 엠보싱 (`#e0e5ec` 배경 + 양방향 볼록/오목 소프트 그림자).
- **글래스모피즘 (Glassmorphism)**: 반투명 블러 유리 패널 (`backdrop-filter: blur()`, 반투명 흰색 테두리).
- **리퀴드 글래스 (Liquid Glass)**: Apple 2025 스타일의 캡슐 형태, 굴절 렌즈 고광택, 유동적 곡면 제어층.
- **웹 브루탈리즘 (Web Brutalism)**: 날것의 HTML 미학 (Times 뉴 로만 폰트, 기본 파란색 하이퍼링크, 단색 테두리, 0px 원각).
- **네오브루탈리즘 (Neobrutalism)**: 2-3px 두꺼운 검은 테두리, 드롭 섀도우 하드 오프셋, 고채도 대조 색상.
- **Y2K**: Y2K 밀레니엄 메탈 (크롬 입체 텍스트, 홀로그램, 스타버스트, 에어버블, 핑키 퍼플 글래머).
- **프루티거 에어로 (Frutiger Aero)**: 2000년대 중반 유광 가공, 보케 광선, 에어로 유리 버튼, 초원/하늘 이슬 렌더링.
- **플랫 디자인 (Flat Design)**: 메트로 UI (단색 블록, 0-그라데이션, 0-그림자, 대담한 타이포그래피).
- **미니멀리즘 (Minimalism)**: 극단적 여백, 여린 헤어라인, 모노톤 컬러, 서리 내린 여백.
- **클레이모피즘 (Claymorphism)**: 점토 질감 (파스텔 마카롱 톤, 큰 라운딩 20px+, 빵빵한 3D 내부/외부 그림자).
- **버나큘러 웹 (Vernacular Web)**: 90년대 GeoCities 타일링 배경, GIF 감성 장식, 비짓 카운터, 전광판 마키.
- **아쿠아 (Aqua)**: Mac OS X 초기 아쿠아 (젤리 스트라이프 알약 버튼, 핀스트라이프 배경, 물방울 고광택).
- **윈도우 에어로 (Windows Aero)**: Windows Vista/7 테마 (유리 제목 표시줄, 오로라 빛샘, 에어로 투명 창).

---

## 6. 자가 검증 (Self-Verification)

스크립트 또는 브라우저 렌더링을 통해 시각적 외형 및 스코프 CSS 정합성을 확인합니다.

```bash
python3 scripts/preview-demo.py style-SLUG
```
- `/tmp/preview-style-SLUG.png` 렌더링 스크린샷을 확인하여 지정된 스타일의 정체성을 한눈에 알아볼 수 있는지 검증함.
