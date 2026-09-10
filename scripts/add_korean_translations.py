import json

ENTRY_TRANSLATIONS = {
    "text-scramble": {
        "prompt": "텍스트 디코드(무작위 글자) 효과 구현: 각 글자가 무작위 글자로 전환되다가 좌에서 우로 실제 글자로 고정됨 (GSAP ScrambleTextPlugin 또는 글자별 고정 시한을 둔 requestAnimationFrame 루프 활용). 너비 흔들림을 방지하기 위해 등폭 폰트(Monospace)나 고정 폭 숫자(tabular-nums) 사용. 최종 텍스트는 aria-label로 제공하고 애니메이션 영역은 aria-hidden 처리하며, prefers-reduced-motion 환경에서는 애니메이션 없이 즉시 텍스트 표시.",
        "debugPrompt": "텍스트 디코드 효과 디버깅 (GSAP / rAF 글자 집합 루프). 확인 사항: 글자 폭 차이로 인한 레이아웃 흔들림(등폭 폰트 또는 tabular-nums 필요), 재렌더링 시 글자별 시한 초기화로 애니메이션 미종료 문제, 스크린 리더의 무작위 텍스트 낭독 문제(최종 텍스트는 aria-label에 배치하고 애니메이션 스팬은 aria-hidden 지정), 마운트당 1회가 아닌 상태 변경마다 효과가 재실행되는 문제, 모션 줄이기 사용 시 무작위 텍스트가 표시되는 문제. 증상:"
    },
    "spring": {
        "prompt": "애니메이션에 스프링 물리학 적용: 지속시간+이징 조합 대신 Motion의 transition={{ type: 'spring', stiffness: 300, damping: 22 }} (또는 react-spring) 활용. 요소가 목표치를 살짝 초과(overshoot) 후 안착되도록 설정. 튀는 현상을 줄이려면 damping을 높이고, 빠른 반응을 위해 stiffness 조정. 순수 CSS의 경우 linear() 타이밍 함수에 스프링 곡선 반영.",
        "debugPrompt": "스프링 애니메이션 디버깅 (Motion spring / react-spring / CSS linear()). 확인 사항: damping이 너무 낮아 젤리처럼 흔들림, stiffness가 너무 낮아 물속에서 움직이는 듯함, duration 지정으로 물리 계산과 충돌, overflow: hidden 부모 요소에 의해 초과 영역 잘림, 정지/전환 시 현재 속도 기준 재설정이 아닌 목표점에서 재시작하여 뚝 끊김. 증상:"
    },
    "easing": {
        "prompt": "애니메이션 이징 수정: 기본 선형(linear) 타이밍을 명시적 곡선으로 교체. UI 이동 시 transition-timing-function: cubic-bezier(.4, 0, .2, 1) 사용 (빠른 시작, 부드러운 정지). 진입 시 ease-out, 퇴장 시 ease-in 적용. 인터페이스 전환 시 지속시간은 150~300ms 유지하며, 마키 형태의 연속 루프가 아닌 이상 선형 속도 사용 금지.",
        "debugPrompt": "애니메이션 이징/부드러움 디버깅 (CSS transition-timing-function / cubic-bezier). 확인 사항: 타이밍 함수 미지정으로 기본 ease로 되돌아감, 선형 타이밍으로 로봇 같은 어색한 움직임 발생, 진입 요소에 ease-in 적용 문제(진입 시 감속하는 ease-out 필요), cubic-bezier의 y값이 0~1 범위를 벗어나 초과 효과 대신 잘림 발생, 지속시간이 너무 길어 지연으로 느껴짐. 증상:"
    },

    "masonry": {
        "prompt": "메이슨리 레이아웃(핀터레스트 스타일) 구축: 기본 CSS 매소너리(@supports (grid-template-rows: masonry) { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: masonry; }) 우선 적용 후 CSS 다중 컬럼(columns: 3; break-inside: avoid)을 폴백으로 제공. 대체 방식은 행이 아닌 열 방향 순서임을 유의하고, 엄격한 좌우 순서가 필요한 경우 react-masonry-css 사용. 이미지 로딩 시 카드 튀김 방지를 위해 종횡비(aspect-ratio) 미리 확보.",
        "debugPrompt": "메이슨리 레이아웃 디버깅 (CSS 컬럼 폴백 / grid-template-rows: masonry). 확인 사항: break-inside: avoid 누락으로 카드가 열 사이에 split됨, 행 기준 배치를 원함에도 열 기준으로 읽히는 현상, 브라우저의 기본 매소너리 미지원 및 @supports 폴백 부재로 동일 높이 행 발생, 이미지 로딩에 따른 레이아웃 재배치, 카드 여백과 column-gap의 충돌. 증상:"
    },
    "bento-grid": {
        "prompt": "벤토 그리드 구축: 단일 CSS 그리드(display: grid; grid-template-columns: repeat(4, 1fr); 일관된 gap)를 사용하고, 강조 타일은 grid-column: span 2 / grid-row: span 2 형태 셀 확장 적용. 모든 타일에 동일한 border-radius와 불투명 배경을 적용하여 전체 조화 형성.",
        "debugPrompt": "벤토 그리드 디버깅 (셀 확장 CSS 그리드). 확인 사항: 행 잔여 열을 초과하는 span으로 인한 그리드 구멍 발생(grid-auto-flow: dense 검토), 그리드 gap 대신 개별 타일 마진 사용으로 불균일한 간격 발생, 타일별 모서리 반경/투명도 불일치, 소형 화면에서 media query 미적용으로 정렬 깨짐. 증상:"
    },
    "hamburger-menu": {
        "prompt": "햄버거 메뉴 구축: 3선 아이콘 버튼(<button aria-expanded aria-controls>) 클릭 시 스크림(scrim) 오버레이 위로 탐색 드로어(<nav>) 패널 표시 (shadcn Sheet, Material NavigationDrawer). 열림 상태 시 body 스크롤 잠금, Escape 및 스크림 터치 시 닫기, aria-expanded 동기화, 닫힘 시 포커스 복원 처리.",
        "debugPrompt": "햄버거 메뉴 디버깅 (aria-expanded 토글 + 오프캠버스 드로어). 확인 사항: 드로어가 스크림이나 헤더 하단에 렌더링됨(z-index), 드로어 열림 상태에서도 배경 스크롤 동작, aria-expanded 미갱신으로 접근성 문제 발생, 닫힌 후 포커스가 버튼으로 돌아가지 않음, 데스크톱에서 토글 숨김 시 내비게이션 링크가 안 나타남. 증상:"
    },
    "lightbox": {
        "prompt": "라이트박스 구축: 갤러리 썸네일 클릭 시 모달 <dialog>(aria-modal)에서 고해상도 이미지 열기. 어두운 ::backdrop 오버레이, 이전/다음 화살표, 닫기 버튼, Escape 및 배경 클릭 닫기, 페이드/스케일 전환 효과 적용.",
        "debugPrompt": "라이트박스 디버깅 (<dialog>, ::backdrop 오버레이). 확인 사항: showModal() 대신 show()를 호출하여 배경 스크롤 차단 실패, 화살표 키 조작 시 페이지 스크롤 동시 발생, 고해상도 이미지가 전환 후에 로드되어 팝업 튀김 발생, 닫힘 시 원본 썸네일로 포커스 미복원. 증상:"
    },
    "marquee": {
        "prompt": "마키 텍스트 구축: 중복 복사된 콘텐츠 위에 CSS @keyframes translateX(-50%) 루프를 적용하여 자동 스크롤 스트립 구성 (deprecated <marquee> 태그 사용 금지). 가장자리 페이드 마스크, 호버 시 animation-play-state: paused 적용, prefers-reduced-motion 설정 시 모션 정지 처리.",
        "debugPrompt": "마키 텍스트 디버깅 (CSS transform 루프). 확인 사항: 루프 교체 시 텍스트 튀김(콘텐츠 불일치 또는 -100% 이동 오류), hover 상태에서 멈추지 않음, 스크린 리더가 중복 텍스트를 두 번 낭독함(복제 영역 aria-hidden 필요), reduced-motion 지원 누락. 증상:"
    },
    "pointer": {
        "prompt": "커스텀 포인터/커서 구축: 기본 커서를 pointer-events: none 설정된 커스텀 가상 요소 또는 floating <div>로 교체. mousemove/pointermove 시 transform: translate3d() 기반 위치 업데이트. 터치 기기에서는 기본 커서 유지하며, hover 가상 상태를 지연 없이 처리.",
        "debugPrompt": "커스텀 포인터 디버깅. 확인 사항: pointer-events: none 누락으로 클릭 차단 발생, pointermove 미사용으로 터치 기기 오류, 모바일 단말에서 커스텀 커서 잔재 노출, hover 전환 반응 지연. 증상:"
    },
    "alert": {
        "prompt": "알림창(Alert) 구축: 중요 알림을 전달하는 모달 대화상자 (role='alertdialog' 또는 native <dialog>). 명확한 제목, 설명 메시지, 기본 작업 및 취소 버튼 제공. 열림 시 포커스를 기본 버튼으로 이동하고 배경 인터랙션 차단.",
        "debugPrompt": "알림창 디버깅. 확인 사항: role='alertdialog' 누락, 포커스 트랩(Focus trap) 실패로 배경 요소로 포커스 이탈, Escape 키 수신 거부, 스크린 리더 메시지 자동 낭독 실패. 증상:"
    },

    "slider": {
        "prompt": "슬라이더 컨트롤 구축: 범주 내 수치를 선택하는 입력 요소 (<input type='range'> 또는 role='slider'). min, max, step 속성 설정, 키보드 방향키 조작 지원, aria-valuenow / aria-valuetext 동기화.",
        "debugPrompt": "슬라이더 디버깅. 확인 사항: 터치 드래그 위치 계산 오류, 키보드 조작 시 값 미변경, aria-valuetext 미설정으로 포맷된 값 낭독 불가. 증상:"
    },
    "color-well": {
        "prompt": "색상 피커 구축: 선택된 색상을 시각적으로 보여주는 샘플(Color Well) 및 색상 선택 팔레트/팝오버 제공. HEX/RGB/HSL 값 입력 및 aria-label 동기화 지원.",
        "debugPrompt": "색상 피커 디버깅. 확인 사항: 선택한 색상 값 스크린 리더 전달 누락, 키보드로 팔레트 탐색 불가, 팝오버 열림 시 포커스 관리 실패. 증상:"
    },
    "form-field": {
        "prompt": "폼 필드 레이아웃 구축: 라벨(<label>), 입력 요소(<input>), 힌트 텍스트, 에러 메시지 간의 올바른 연결 (htmlFor, aria-describedby, aria-invalid). 에러 발생 시 시각적 표시 및 접근성 상태 동기화.",
        "debugPrompt": "폼 필드 디버깅. 확인 사항: label 요소와 input 간의 id 미연결, aria-describedby 누락으로 에러 메시지 미낭독, 에러 상태 시 aria-invalid 미반영. 증상:"
    },
    "truncation": {
        "prompt": "텍스트 말줄임 구축: 한 줄 말줄임(white-space: nowrap; overflow: hidden; text-overflow: ellipsis) 또는 여러 줄 말줄임(-webkit-line-clamp). 전체 텍스트 확인을 위한 title 속성 또는 툴팁 연동.",
        "debugPrompt": "텍스트 말줄임 디버깅. 확인 사항: flex/grid 자식 요소의 min-width: 0 누락으로 말줄임 미작동, line-clamp 적용 시 display: -webkit-box 누락, 생략된 텍스트 확인 불가. 증상:"
    },
    "drag-and-drop": {
        "prompt": "드래그 앤 드롭 구축: HTML5 Drag and Drop API 또는 Pointer Events 기반 구현. 드래그 가능 요소(draggable='true'), 드롭 존 시각적 피드백 제공, 키보드 접근성 대체 수단 제공.",
        "debugPrompt": "드래그 앤 드롭 디버깅. 확인 사항: dropEffect / effectAllowed 미설정으로 드롭 거부, 키보드 전용 사용자의 드래그/순서변경 불가, 터치 이벤트 미지원. 증상:"
    },
    "divider": {
        "prompt": "구분선 구축: 콘텐츠 영역을 분리하는 시각적/구조적 선 (<hr> 또는 role='separator'). 단순 시각 요소일 경우 aria-hidden='true' 또는 presentation 적용.",
        "debugPrompt": "구분선 디버깅. 확인 사항: 수직 구분선 시 aria-orientation='vertical' 누락, 불필요한 스크린 리더 낭독으로 소음 발생. 증상:"
    },
    "progress-indicators": {
        "prompt": "진행 표시기 구축: 진행률 표시 바 및 진행 스피너 (role='progressbar', aria-valuenow, aria-valuemin, aria-valuemax). 무한 로딩 시 aria-valuenow 생략.",
        "debugPrompt": "진행 표시기 디버깅. 확인 사항: 수치 변경 시 aria-valuenow 미동기화, 무한 로딩 상태에서 스크린 리더에 진행률 미표시 안내 부재. 증상:"
    },
    "window": {
        "prompt": "Mac 윈도우 프레임 구축: 제목 표시줄, 창 제어 신호등 버튼(Traffic lights), 그림자 효과 및 비주얼 이펙트 재질 적용. 드래그 가능한 헤더 및 최소화/최대화/닫기 동작 시뮬레이션.",
        "debugPrompt": "Mac 윈도우 디버깅. 확인 사항: 창 드래그 시 포인터 캡처 실패, 신호등 버튼의 호버 아이콘 상태 미동기화, 배경과의 z-index 레이어 충돌. 증상:"
    },
    "split-view": {
        "prompt": "스플릿 뷰 구축: 2개 이상의 패널을 리사이저(Divider)로 분할 조절하는 레이아웃. 리사이저에 role='separator', aria-valuenow 및 방향키 조작 구현.",
        "debugPrompt": "스플릿 뷰 디버깅. 확인 사항: 드래그 중 텍스트 드래그 선택 발생, 키보드로 리사이저 조작 불가, 최소/최대 너비 제한 미적용. 증상:"
    },
    "scroll-view": {
        "prompt": "스크롤 뷰 구축: 컨테이너 오버플로우 스크롤 (overflow: auto, overscroll-behavior: contain). 스크롤 섀도우 인디케이터 제공 및 키보드 스크롤 포커스(tabindex='0') 지원.",
        "debugPrompt": "스크롤 뷰 디버깅. 확인 사항: iOS 모바일 사파리에서 -webkit-overflow-scrolling 미작동, 키보드 포커스 미설정으로 스크롤 불가. 증상:"
    },

    "search-field": {
        "prompt": "검색 필드 구축: 검색어 입력 및 빠른 입력 취소(Clear) 버튼 제공 (<input type='search'>). 자동 완성/제안 연동 시 role='combobox' 및 aria-expanded 설정.",
        "debugPrompt": "검색 필드 디버깅. 확인 사항: Clear 버튼 클릭 시 포커스 이탈, 검색어 변경 시 디바운스 미적용으로 과도한 API 요청, 검색 제안 접근성 미흡. 증상:"
    },
    "save-panel": {
        "prompt": "저장 패널 모달 구축: 파일명 입력, 저장 위치 선택, 파일 형식 드롭다운을 포함하는 모달 패널. 포커스 트랩 및 기본 '저장' 버튼 포커스 지정.",
        "debugPrompt": "저장 패널 디버깅. 확인 사항: 모달 외곽 스크롤 차단 실패, 파일 확장자 변경 시 파일명 자동 미갱신. 증상:"
    },
    "token-field": {
        "prompt": "토큰 필드 (태그 입력) 구축: 입력한 키워드가 칩/토큰 형태로 변환되는 필드. Backspace 키로 이전 토큰 삭제, 토큰별 닫기 버튼 및 키보드 삭제 지원.",
        "debugPrompt": "토큰 필드 디버깅. 확인 사항: 토큰 삭제 시 포커스가 입력 필드로 유지되지 않음, 스크린 리더에서 토큰 개수 및 생성 알림 미흡. 증상:"
    },
    "combo-button": {
        "prompt": "콤보 버튼 구축: 주 작업 버튼과 드롭다운 메뉴 토글 화살표 버튼이 결합된 컨트롤. 화살표 버튼에 aria-haspopup, aria-expanded 적용 및 키보드 메뉴 탐색 연동.",
        "debugPrompt": "콤보 버튼 디버깅. 확인 사항: 주 버튼 클릭과 드롭다운 토글 클릭 이벤트 혼선, 화살표 버튼 접근성 라벨 누락. 증상:"
    },
    "level-indicator": {
        "prompt": "레벨 인디케이터 구축: 용량/신호 세기/비밀번호 강도 등을 단계별로 표시하는 디스플레이 (role='meter', aria-valuenow, aria-valuemin, aria-valuemax).",
        "debugPrompt": "레벨 인디케이터 디버깅. 확인 사항: 값 변경에 따른 시각적 바 색상 미갱신, aria-valuetext 미설정으로 상태 낭독 불분명. 증상:"
    },
    "column-view": {
        "prompt": "컬럼 뷰 (Finder 계층 뷰) 구축: 다중 열로 상위-하위 계층 구조를 탐색하는 인터페이스. 키보드 좌우 방향키 컬럼 이동, 상위/하위 선택 상태 유지.",
        "debugPrompt": "컬럼 뷰 디버깅. 확인 사항: 신규 컬럼 추가 시 자동 수평 스크롤 미동작, 키보드 포커스 탐색 시 선택 항목 이탈. 증상:"
    },
    "outline-view": {
        "prompt": "아웃라인 뷰 (트리 뷰) 구축: 트리 형태의 계층 구조 데이터 디스플레이 (role='tree', role='treeitem'). 접기/펼치기(aria-expanded) 및 키보드 방향키 트리 탐색 지원.",
        "debugPrompt": "아웃라인 뷰 디버깅. 확인 사항: aria-expanded 상태 미동기화, 방향키 탐색 시 하위 노드 건너뜀 발생. 증상:"
    },
    "three-dots": {
        "prompt": "더보기 버튼 (Ellipsis 메뉴) 구축: 추가 옵션/작업을 제공하는 3점 아이콘 버튼. aria-label='더보기 옵션', aria-haspopup='menu', aria-expanded 동기화.",
        "debugPrompt": "더보기 버튼 디버깅. 확인 사항: 버튼의 접근성 이름(aria-label) 누락으로 스크린 리더 '버튼'으로만 낭독, 메뉴 열림 포커스 미이동. 증상:"
    },
    "menu-bar": {
        "prompt": "메뉴 바 구축: 애플리케이션 상단 데스크톱 메뉴 바 (role='menubar', role='menu', role='menuitem'). 키보드 화살표 수평/수직 메뉴 탐색 지원.",
        "debugPrompt": "메뉴 바 디버깅. 확인 사항: 메뉴 간 좌우 화살표 전환 미작동, ESC 키 입력 시 최상위 메뉴 바 포커스 복원 실패. 증상:"
    },
    "context-menu": {
        "prompt": "컨텍스트 메뉴 구축: 마우스 우클릭 또는 롱프레스 시 클릭 위치에 표시되는 팝업 메뉴. 화면 가장자리 영역 감지 및 뷰포트 내 자동 재배치.",
        "debugPrompt": "컨텍스트 메뉴 디버깅. 확인 사항: 화면 하단/우측 표출 시 뷰포트 잘림 현상, 우클릭 기본 브라우저 메뉴 차단(preventDefault) 누락. 증상:"
    },

    "disclosure-triangle": {
        "prompt": "디스클로저 트라이앵글 구축: 삼각형 화살표 아이콘 클릭으로 상세 내용을 접고 펼치는 컨트롤. aria-expanded 상태에 따른 회전 애니메이션 적용.",
        "debugPrompt": "디스클로저 트라이앵글 디버깅. 확인 사항: 회전 애니메이션 중심축 오차, aria-expanded 미반영. 증상:"
    },
    "dock-badge": {
        "prompt": "Dock 배지 구축: 앱 아이콘 우측 상단 알림 숫자/점 배지. aria-label을 통한 알림 수 낭독 및 수치 변경 시 애니메이션 피드백.",
        "debugPrompt": "Dock 배지 디버깅. 확인 사항: 배지 수치 변경 시 스크린 리더 라이브 리전(aria-live) 알림 누락. 증상:"
    },
    "focus-ring": {
        "prompt": "포커스 링 구축: 키보드 포커스 시 표시되는 명확한 외곽선 (:focus-visible). 충분한 명암비(3:1 이상) 및 모서리 곡률 일치.",
        "debugPrompt": "포커스 링 디버깅. 확인 사항: outline: none 설정 후 포커스 스타일 미제공, 마우스 클릭 시에도 포커스 링 노출 오류. 증상:"
    },
    "inspector": {
        "prompt": "인스펙터 패널 구축: 우측 측면에 위치하여 현재 선택 항목의 상세 속성을 편집하는 패널. 접기/펼치기 및 섹션별 아코디언 제공.",
        "debugPrompt": "인스펙터 디버깅. 확인 사항: 선택 요소 변경 시 인스펙터 데이터 미갱신, 패널 내 포커스 순서 꼬임. 증상:"
    },
    "panel": {
        "prompt": "패널 및 HUD 구축: 보조 도구 모음 또는 플로팅 상태 창 (HUD). 반투명 글래스 재질 및 드래그 이동 기능 지원.",
        "debugPrompt": "패널/HUD 디버깅. 확인 사항: 화면 외곽으로 패널 이탈, 드래그 중 이벤트를 빼앗김. 증상:"
    },
    "popover": {
        "prompt": "팝오버 구축: 기준 요소 근처에 화살표(Tip)와 함께 나타나는 팝업 패널. 외부 클릭 및 ESC 입력 시 닫기, 위치 자동 계산.",
        "debugPrompt": "팝오버 디버깅. 확인 사항: 스크롤 시 기준 요소와 팝오버 위치 분리, 포커스 복원 실패. 증상:"
    },
    "popup-pulldown-combo": {
        "prompt": "팝업 및 풀다운 버튼 구축: 단일 항목 선택 팝업 버튼 또는 동작 목록 풀다운 버튼. 현재 선택값 표시 및 체크마크 인디케이터.",
        "debugPrompt": "팝업/풀다운 버튼 디버깅. 확인 사항: 선택 항목 미표시, 키보드 탐색 중 항목 선택 실패. 증상:"
    },
    "segmented-control": {
        "prompt": "세그먼트 컨트롤 구축: 상호 배타적인 옵션 집합 중 하나를 선택하는 분할 버튼 (role='tablist' 또는 grouped radio). 선택 세그먼트 활성 슬라이딩 배경.",
        "debugPrompt": "세그먼트 컨트롤 디버깅. 확인 사항: 키보드 방향키 선택 전환 미작동, 활성 배경 이동 위치 계산 오차. 증상:"
    },
    "sheet": {
        "prompt": "시트 모달 구축: 화면 상단 또는 하단에서 슬라이드되는 모달 패널 (Sheet). 배경 스크림, 드래그 제스처로 닫기 지원.",
        "debugPrompt": "시트 모달 디버깅. 확인 사항: 하단 드래그 닫기 제스처 동작 중 스크롤 충돌, 접근성 포커스 트랩 누락. 증상:"
    },
    "sidebar": {
        "prompt": "사이드바 구축: 앱 주요 탐색 영역을 담당하는 좌측 패널. 토글 버튼을 통한 수축/확장 및 제스처 지원.",
        "debugPrompt": "사이드바 디버깅. 확인 사항: 반응형 전환 시 사이드바 상태 오작동, 토글 버튼 aria-expanded 미동기화. 증상:"
    },

    "stepper": {
        "prompt": "스텝퍼 구축: 수치를 1단계씩 증감시키는 위/아래 버튼 컨트롤. 연속 누름 지원 및 min/max 한계 설정.",
        "debugPrompt": "스텝퍼 디버깅. 확인 사항: 한계값 도달 시 버튼 disabled 처리 누락, 키보드 조작 연동 부재. 증상:"
    },
    "toolbar": {
        "prompt": "툴바 구축: 자주 사용하는 작업 아이콘/버튼들의 모음 (role='toolbar'). 수평 키보드 탐색 및 커스텀 오버플로우 메뉴 지원.",
        "debugPrompt": "툴바 디버깅. 확인 사항: 툴바 내부 방향키 탐색 미작동, 공간 부족 시 오버플로우 처리 미흡. 증상:"
    },
    "traffic-lights": {
        "prompt": "신호등 창 제어 버튼 구축: macOS 특유의 빨강/노랑/초록 창 제어 버튼. 호버 시 닫기/최소화/확장 아이콘 표시.",
        "debugPrompt": "신호등 버튼 디버깅. 확인 사항: 호버 아이콘 미노출, 창 제어 기능 접근성 설명 부재. 증상:"
    },
    "vibrancy": {
        "prompt": "비주얼 이펙트 재질 (Vibrancy) 구축: backdrop-filter: blur() 기반 블러 및 투과 효과. 다크/라이트 모드 대응 및 성능 최적화.",
        "debugPrompt": "Vibrancy 효과 디버깅. 확인 사항: 저성능 기기에서 프레임 드롭, 배경 텍스트와의 명암비 부족. 증상:"
    },
    "toast": {
        "prompt": "토스트 알림 구축: 피드백 메시지를 전달하고 자동 소멸하는 피드백 패널 (role='status' 또는 role='alert'). 대기열(Queue) 관리 지원.",
        "debugPrompt": "토스트 알림 디버깅. 확인 사항: 스크린 리더 자동 미낭독, 화면을 덮어 인터랙션 방해, 타이머 일시정지 미지원. 증상:"
    },
    "dialog-drawer-sheet": {
        "prompt": "모달 대화상자 및 드로어 구축: 사용자 입력을 요구하는 모달 창 및 바텀 시트. 접근성 포커스 트랩, ESC 닫기, 스크림 오버레이.",
        "debugPrompt": "모달 대화상자/드로어 디버깅. 확인 사항: ESC 키 수신 불능, 배경 스크롤 허용, 포커스 이탈. 증상:"
    },
    "popover-dropdown-tooltip": {
        "prompt": "팝오버 및 툴팁 구축: 요소 호버/포커스 시 보조 설명 텍스트 또는 포커스 가능한 컨텍스트 패널 표시 (role='tooltip').",
        "debugPrompt": "팝오버/툴팁 디버깅. 확인 사항: 툴팁 내부 포커스 이동 불능, 호버 이탈 시 즉시 닫혀 마우스 이동 불가. 증상:"
    },
    "scrim": {
        "prompt": "스크림 오버레이 구축: 모달 배경을 어둡게 처리하여 레이어의 깊이감을 주는 반투명 오버레이 (backdrop). 클릭 시 모달 닫기 연동.",
        "debugPrompt": "스크림 디버깅. 확인 사항: 클릭 이벤트가 하단 요소로 투과, z-index 레이어 오차. 증상:"
    },
    "skeleton-spinner": {
        "prompt": "스켈레톤 및 스피너 구축: 콘텐츠 로딩 중 형태를 미리 보여주는 스켈레톤 인디케이터 및 스피너 (aria-busy='true').",
        "debugPrompt": "스켈레톤/스피너 디버깅. 확인 사항: 로딩 완료 후 aria-busy 미해제, 애니메이션 과도함. 증상:"
    },
    "combobox": {
        "prompt": "콤보박스 구축: 텍스트 입력 필드와 제안 드롭다운 목록이 결합된 입력 컨트롤 (role='combobox', aria-autocomplete).",
        "debugPrompt": "콤보박스 디버깅. 확인 사항: 방향키 제안 선택 시 입력 필드 값 미동기화, aria-expanded 미동기화. 증상:"
    },

    "command-palette": {
        "prompt": "커맨드 팔레트 구축: 단축키(⌘K)로 실행되는 키워드 중심 중앙 모달 검색 인터페이스 (cmdk, Fuse.js 연동).",
        "debugPrompt": "커맨드 팔레트 디버깅. 확인 사항: ⌘K 단축키 브라우저 기본 동작 미차단, 키보드 선택 항목 이탈. 증상:"
    },
    "accordion": {
        "prompt": "아코디언 구축: 접고 펼칠 수 있는 섹션 목록 패널 (role='region', aria-expanded).",
        "debugPrompt": "아코디언 디버깅. 확인 사항: 헤더-패널 간 aria-controls 미연결, 애니메이션 높이 계산 오류. 증상:"
    },
    "tabs": {
        "prompt": "탭 뷰 구축: 다중 패널 간 전환을 위한 탭 컨트롤 (role='tablist', role='tab', role='tabpanel'). 키보드 방향키 이동 지원.",
        "debugPrompt": "탭 뷰 디버깅. 확인 사항: 탭-패널 간 접근성 연결 실패, 활성 탭 인디케이터 위치 오류. 증상:"
    },
    "badge-chip-pill": {
        "prompt": "배지 및 칩 구축: 상태 표시 배지, 필터링 칩 및 삭제 가능한 캡슐 형태 태그 컴포넌트.",
        "debugPrompt": "배지/칩 디버깅. 확인 사항: 칩 삭제 버튼 접근성 이름 누락, 선택 상태 aria-pressed 미반영. 증상:"
    },
    "breadcrumbs": {
        "prompt": "브레드크럼 구축: 계층적 경로 위치를 나타내는 내비게이션 바 (<nav aria-label='Breadcrumb'>, aria-current='page').",
        "debugPrompt": "브레드크럼 디버깅. 확인 사항: 현재 페이지 aria-current 미설정, 구분선 기호 스크린 리더 낭독 소음. 증상:"
    },
    "sticky-fixed": {
        "prompt": "스티키 및 픽스드 포지셔닝 구축: 스크롤에 따라 고정되는 스티키 헤더 및 화면 고정 요소를 위한 CSS position 속성 구성.",
        "debugPrompt": "스티키/픽스드 디버깅. 확인 사항: 부모 요소 overflow: hidden으로 스티키 미작동, z-index 충돌. 증상:"
    },
    "focus-ring-web": {
        "prompt": "웹 포커스 링 구축: 키보드 포커스 시에만 노출되는 표준 웹 포커스 표시 (:focus-visible).",
        "debugPrompt": "웹 포커스 링 디버깅. 확인 사항: :focus-visible 대신 :focus 적용으로 마우스 클릭 시 포커스 ring 노출 오류. 증상:"
    },
    "empty-state": {
        "prompt": "빈 상태 화면 구축: 데이터가 없을 때 안내 일러스트, 메시지 및 행동 유도(CTA) 버튼을 보여주는 레이아웃.",
        "debugPrompt": "빈 상태 화면 디버깅. 확인 사항: CTA 버튼 포커스 미이동, 이미지 의미 설명 부재. 증상:"
    },
    "hover-card": {
        "prompt": "호버 카드 구축: 링크 호버 시 미리보기 및 프로필 카드 정보를 보여주는 지연 팝오버.",
        "debugPrompt": "호버 카드 디버깅. 확인 사항: 호버 지연 시간 부족으로 오작동, 카드 내부 포커스 이동 차단. 증상:"
    },
    "switch-checkbox-radio": {
        "prompt": "스위치, 체크박스 및 라디오 구축: 상태 선택을 위한 기본 폼 컨트롤 입력 요소 3종.",
        "debugPrompt": "선택 컨트롤 디버깅. 확인 사항: 커스텀 스타일 적용 시 native input 가려짐으로 포커스 불능. 증상:"
    },
    "toggle-group": {
        "prompt": "토글 그룹 구축: 단일 선택 또는 다중 선택이 가능한 연결된 토글 버튼 아이콘 그룹.",
        "debugPrompt": "토글 그룹 디버깅. 확인 사항: aria-pressed 상태 미동기화, 그룹 라벨 부재. 증상:"
    },
    "menu-bar-extra": {
        "prompt": "메뉴 바 익스트라 구축: macOS 상단 메뉴 바 우측 상태 영역 아이콘 및 관련 드롭다운 패널.",
        "debugPrompt": "메뉴 바 익스트라 디버깅. 확인 사항: 메뉴 바 아이콘 크기 오차, 드롭다운 클릭 바깥 닫기 안 됨. 증상:"
    }
}

STYLE_ACCESSIBILITY_TRANSLATIONS = {
    "skeuomorphism": "가죽, 리넨, 목재 등 질감 배경 위의 텍스트는 평균 색상이 아닌 가장 혼잡한 영역 기준으로 4.5:1 명암비를 측정해야 함.\n장식용 베벨과 광택을 눌림/안 눌림의 유일한 신호로 사용하지 말고 색상이나 내용 변화를 함께 제공할 것.\n무거운 질감 이미지는 용량을 증가시키므로 압축하여 제공하고, 이미지 없이도 UI 기본 구조가 유지되도록 구성함.",

    "neumorphism": "뉴모피즘의 대표적 그림자 경계는 WCAG 비텍스트 명암비 기준(3:1)을 충족하기 어려움. 명확한 포커스 링과 하나 이상의 비그림자 상태 표시(색상, 아이콘, 라벨)를 필수 추가해야 함.\n비활성, 활성, 눌림 상태가 순수 뉴모피즘에서는 비슷하게 보이며 시력이 낮은 사용자는 컨트롤을 찾지 못할 수 있음.\n기능적 UI에는 사용을 자제하고, 대형 장식용 컨테이너에 한정하여 적용할 것.",

    "glassmorphism": "유리 효과 위 텍스트 명암비는 배경 이동에 따라 변하므로 최악의 영역 기준으로 측정하거나 반투명 스크림을 추가할 것.\nprefers-reduced-transparency 설정 및 OS 투명도 줄이기 옵션에 대응하는 불투명 폴백을 제공함.\nbackdrop-filter는 저사양 기기에서 높은 비용이 발생하므로 블러가 미작동하더라도 콘텐츠가 정상 노출되어야 함.",

    "liquid-glass": "실시간 배경 변화에 대응하여 텍스트 하단 반투명 패널을 배치하고 최악의 경우에도 4.5:1 명암비를 보장함.\n투명도 줄이기(Reduce Transparency) 및 모션 줄이기(Reduce Motion) 옵션을 준수함.\n모의 글래스 재질 위에 명암비 검증 없이 중요 텍스트를 직접 배치하지 않음.",

    "web-brutalism": "시맨틱 구조와 명확한 링크를 갖춘 브루탈리즘은 접근성이 우수함. 단, 텍스트 크기가 읽기 쉬워야 하며 터치 영역이 충분해야 함.\n기본 포커스 외곽선(focus outline)을 제거하지 말고 유지할 것.\n조밀한 데이터 테이블은 스크린 리더를 위한 올바른 헤더와 scope 속성을 갖추어야 함.",

    "neobrutalism": "채도가 높은 채우기 색상은 텍스트 명암비를 필히 점검해야 함. 검은색 글자는 노랑/라임 배경에서 쉽게 통과하지만 흰색 글자는 핑크, 사이언 등에서 4.5:1에 실패할 수 있음.\n장식용 검은색 테두리가 포커스 링처럼 보일 수 있으므로 키보드 포커스에는 오프셋이 적용된 구별되는 표시기를 사용할 것.\n과도한 시각적 강도는 장시간 독서 시 피로를 유발하므로 본문은 평범하게 유지하고 구조 및 작업 버튼에 강조 적용함.",

    "y2k": "크롬 크라데이션 텍스트는 장식 요소이므로 어두운 배경 판을 받치거나 고명암비 실재 텍스트로 보완할 것.\n젤 버튼의 반사 광택이 라벨 명암비를 해치지 않도록 라벨 문자는 가장 어두운 영역을 기준으로 색상 설정함.\n렌즈 플레어와 반짝임 애니메이션은 prefers-reduced-motion 설정 시 정지 처리함.",

    "frutiger-aero": "하늘/풀밭 사진 위에 흰색 글씨를 직접 배치하면 밝은 영역에서 명암비가 깨짐. 반투명 패널 위에 텍스트를 배치하고 4.5:1을 준수할 것.\n컨트롤 상단의 광택 하이라이트가 라벨을 가리지 않도록 하단으로 이동하거나 배경을 어둡게 처리함.\n비눗방울, 광선, 광택 루프는 모션 줄이기 환경에서 정지시킴.",

    "flat-design": "기호가 약한 플랫 UI는 사용자가 클릭 가능 여부를 불확실하게 만들 수 있음. 버튼과 링크에 확실한 색상 어포던스를 제공할 것.\n그림자가 사라진 만큼 텍스트 4.5:1 및 컨트롤 경계 3:1 명암비를 반드시 검증함.\n화면을 깔끔하게 유지한다는 이유로 포커스 외곽선을 제거하지 말 것.",

    "minimalism": "흰색 배경 위의 밝은 회색 텍스트는 대표적인 미니멀리즘 명암비 실패 사례임. 텍스트 명암비 4.5:1을 엄격히 측정함.\n여백 확보를 위해 탐색 메뉴나 라벨을 가리지 말 것.\n거대한 디스플레이 타이포그래피는 반응형 클램핑(clamp)을 적용하여 모바일 화면에서 깨지지 않도록 조율함.",

    "claymorphism": "부풀어 오른 통통한 3D 양감 효과는 포커스 링을 가리거나 감쌀 수 있으므로 포커스 표시는 외곽 오프셋 패딩을 두고 명확히 노출함.\n파스텔톤 필 색상 위 흰색 글씨는 명암비 부족이 발생하기 쉬우므로 어두운 텍스트를 우선 사용함.\n눌림 애니메이션 스케일 변화는 반사 동작에 장애를 주지 않도록 정교하게 설정함.",

    "vernacular-web": "조악한 90년대 웹 스타일이라도 최소한의 독해성 및 접근성은 유지해야 함.\n깜빡이는 텍스트(<blink>)나 gif 애니메이션은 발작 위험 및 모션 피로를 유발하므로 prefers-reduced-motion을 준수함.\n원색 배경 위 텍스트 명암비 4.5:1을 준수함.",

    "aqua": "아쿠아의 입체적인 액체 버튼은 시각적 어포던스가 뛰어남. 단, 반사광 영역 텍스트 명암비를 4.5:1 이상 확보할 것.\n기본 포커스 링인 아우라 링을 명확히 제공함.\n모션 줄이기 사용 시 액체 흔들림 및 펄스 효과 정지.",

    "windows-aero": "에어로 글래스 뒤의 스크롤 콘텐츠가 텍스트 독해를 방해하지 않도록 텍스트 하단에 사막/스모크 스크림 패널을 둘 것.\n고대비 모드(High Contrast Mode) 지원 시 반투명 글래스를 불투명 배경으로 대체함.",

    "swiss-style": "격자 시스템 중심의 스위스 스타일은 시각적 질서와 접근성이 우수함. 그리드 밀도가 너무 높아 터치 타깃이 좁아지지 않도록 44px 이상 유지할 것.\n흑백 및 단색 위주의 구성에서 포커스 상태가 명확히 눈에 띄도록 오프셋 라인을 적용함.",

    "bauhaus": "기하학적 원색 블록 위 텍스트 명암비 점검 필수 (노란색 위 흰색 글자 금지).\n사선 텍스트 레이아웃 사용 시 스크린 리더 낭독 순서가 DOM 순서와 일치하도록 보장함.",

    "memphis": "화려한 패턴과 기하학 장식이 텍스트 읽기를 방해하지 않도록 텍스트 영역 하단에는 단색 배경 패널을 둘 것.\n흩뿌려진 장식 요소에 aria-hidden='true'를 적용하여 스크린 리더 소음을 방지함.",

    "vaporwave": "네온 핑크/사이언 글라데이션 및 VHS 스캔라인은 눈의 피로를 유발함. 스캔라인 효과는 pointer-events: none 및 반투명 처리함.\nprefers-reduced-motion 설정 시 지직거리는 애니메이션 및 네온 펄스 정지.",

    "art-deco": "금색 얇은 라인 아크 및 엠보싱 장식은 높은 명암비를 유지하기 어려움. 주요 인터랙티브 요소는 충분한 두께를 가질 것.\n기하학 문양이 포커스 표기를 가리지 않도록 독립된 포커스 Indicator 설정.",

    "cyberpunk": "글리치 효과 및 과도한 네온 광원은 광과민성 발작을 유발할 수 있음. 글리치 애니메이션은 토글 가능하거나 reduced-motion 시 즉시 비활성화할 것.\n검은색 배경 위 어두운 빨강/파랑 텍스트의 명암비 약화를 방지하여 4.5:1 확보.",

    "pixel-art": "픽셀 폰트(Pixel font)는 작은 크기에서 가독성이 급격히 저하됨. 최소 16px 이상 크기로 렌더링하거나 본문에는 가독성 좋은 폰트 적용.\n픽셀 아트 버튼의 터치 타깃이 픽셀 크기에 영향받지 않고 최소 44x44px 이상이 되도록 패딩 확보.",

    "corporate-memphis": "플랫 벡터 일러스트 요소들이 실제 인터랙티브 버튼으로 오인되지 않도록 시각적 구분 명확히 유지.\n배경의 대형 추상 도형들에 aria-hidden='true' 지정.",

    "material-design": "Ripples 분사 애니메이션 및 수평 카드의 수묵 효과는 모션 줄이기 시 정지 처리.\nFloating Action Button(FAB)은 화면 상의 중요 콘텐츠나 입력 필드를 가리지 않도록 위치 지정.",

    "terminal-hacker": "어두운 배경 위 녹색/주황색 CRT 텍스트는 4.5:1 명암비를 엄격히 준수해야 함 (어두운 녹색 금지).\n텍스트 커서 깜빡임 애니메이션 정지 옵션 지원.",

    "frutiger-metro": "평면 아이콘 및 플랫 색상 블록 간의 명암비 확보.\n화살표 및 기하학 스트라이프 배경 위 텍스트 독해성 보장.",

    "anti-design": "의도적인 혼돈과 깨진 레이아웃이라 하더라도 시맨틱 HTML 구조와 키보드 접근성, 4.5:1 명암비는 반드시 지켜야 함.\n포커스 링을 의도적으로 제거하여 키보드 사용을 불가능하게 만들지 말 것.",

    "acid-graphics": "과도한 크롬 연사, 3D 글자 꼬임 및 진동 효과는 시각 피로를 유발하므로 모션 줄이기 옵션을 반드시 준수함.\n화려한 자경 배경 위에 본문 텍스트를 직접 올리지 말 것.",

    "risograph": "리소그래프 특유의 오버프린트 및 질감 노이즈가 텍스트 에지를 뭉개지 않도록 가독성 유지.\n색상 편차에 따른 명암비 저하 방지.",

    "zine-collage": "손글씨 폰트 및 잘라낸 종이 질감 레이어링 시 본문 텍스트는 읽기 쉬운 정갈한 폰트로 제공함.\n찢어진 종이 조각 이미지는 장식용 요소로 aria-hidden 처리.",

    "steampunk": "황동 톱니바퀴 및 게이지 장식이 실제 작업 버튼과 혼동되지 않도록 어포던스 구분.\n복잡한 질감 배경 위 텍스트 명암비 4.5:1 확보.",

    "dieselpunk": "어두운 금속 질감과 디젤 그을음 배경 위의 글씨는 높은 명암비의 인쇄체 폰트로 강조함.\n강렬한 군사/산업 인디케이터에 키보드 포커스 명확히 적용.",

    "biopunk": "생물 발광 녹색 및 유기체 질감 패널은 검은 배경과 충분한 명암비(4.5:1)를 확보해야 함.\n점액질 및 맥동 애니메이션은 reduced-motion 환경에서 정지.",

    "afrofuturism": "기하학적 기호 및 기황색 금빛 테두리가 텍스트 명암비를 방해하지 않도록 판 패널 구성.\n화려한 문화적 문양 장식 영역 접근성 aria-hidden 처리.",

    "de-stijl": "빨강, 노랑, 파랑 신형 원색 블록 위 텍스트 명암비 점검 (노란색 위 흰색 글씨 절대 금지).\n두꺼운 검은 테두리가 포커스 링으로 오인되지 않도록 오프셋 포커스 제공.",

    "constructivism": "사선 강하게 기울어진 텍스트 및 강렬한 선동 문구 배치는 읽기 순서(DOM)와 시각 순서 일치 필수.\n붉은색 슬래시 배경 위 검은색/흰색 텍스트 명암비 확보.",

    "pop-art": "망점(Halftone dots) 패턴 위에 본문 텍스트를 직접 올리지 말고 단색 패널 위에 배치할 것.\n화려한 망점과 원색의 대비 속에서 키보드 포커스 링을 선명히 보장함.",

    "surrealism": "유형화된 녹는 형태와 녹아내리는 카드 모서리가 실제 버튼의 클릭 영역을 왜곡하지 않도록 hit area 확보.\n부유 애니메이션 및 형상 변형 루프는 prefers-reduced-motion 시 정지.",

    "art-nouveau": "유기적 덩굴 식물 곡선 라인이 포커스 표시를 가리지 않도록 방지.\n섬세한 곡선 타이포그래피는 읽기 쉬운 크기로 제공.",

    "holographic": "무지개빛 반사 및 그래디언트 변화 속에서 텍스트 명암비가 계속 바뀌므로 배경에 불투명 패널 배치.\n광택 변형 애니메이션 정지 옵션 지원.",

    "isometric-3d": "3D 입체 블록의 개별 면 색상 위 텍스트 명암비를 면마다 4.5:1 이상 검증함.\n부유/둥둥 뜸 애니메이션 reduced-motion 지원.",

    "line-art": "극도로 얇은 1px 라인은 시력이 낮은 사용자에게 시인성이 떨어지므로 최소 2px 이상 두께 유지.\n선으로만 구성된 아이콘 및 버튼에 명확한 텍스트 라벨 함께 제공.",

    "hand-drawn": "손그림 라인의 불규칙한 떨림 애니메이션은 prefers-reduced-motion 시 정지함.\n손글씨 폰트 가독성 검증.",

    "fantasy-rpg": "양양한 양장피(Parchment) 질감 위 텍스트 명암비 검증 및 고전적인 장식 폰트 가독성 확보.\n아이콘 및 룬 문자 컨트롤에 접근성 라벨(aria-label) 적용.",

    "lcars": "LCARS 특유의 면 색상 블록과 곡선 프레임 속에서 본문 텍스트 명암비 유지.\n독특한 블록 레이아웃의 키보드 탐색 순서 직관적 보장."
}

def update_entries():
    with open("data/entries.json", "r", encoding="utf-8") as f:
        entries = json.load(f)

    updated_count = 0
    for e in entries:
        slug = e["slug"]
        if slug in ENTRY_TRANSLATIONS:
            p_en = e.get("prompt") if isinstance(e.get("prompt"), str) else (e.get("prompt", {}).get("en", "") if isinstance(e.get("prompt"), dict) else "")
            dp_en = e.get("debugPrompt") if isinstance(e.get("debugPrompt"), str) else (e.get("debugPrompt", {}).get("en", "") if isinstance(e.get("debugPrompt"), dict) else "")

            p_ko = ENTRY_TRANSLATIONS[slug]["prompt"]
            dp_ko = ENTRY_TRANSLATIONS[slug]["debugPrompt"]

            e["prompt"] = {"en": p_en, "ko": p_ko}
            e["debugPrompt"] = {"en": dp_en, "ko": dp_ko}
            updated_count += 1

    with open("data/entries.json", "w", encoding="utf-8") as f:
        json.dump(entries, f, ensure_ascii=False, indent=2)

    print(f"Updated {updated_count} entries in data/entries.json")

def update_styles():
    with open("data/styles.json", "r", encoding="utf-8") as f:
        styles = json.load(f)

    updated_count = 0
    for s in styles:
        slug = s["slug"]
        if slug in STYLE_ACCESSIBILITY_TRANSLATIONS:
            a_en = s.get("accessibility") if isinstance(s.get("accessibility"), str) else (s.get("accessibility", {}).get("en", "") if isinstance(s.get("accessibility"), dict) else "")
            a_ko = STYLE_ACCESSIBILITY_TRANSLATIONS[slug]

            s["accessibility"] = {"en": a_en, "ko": a_ko}
            updated_count += 1

    with open("data/styles.json", "w", encoding="utf-8") as f:
        json.dump(styles, f, ensure_ascii=False, indent=2)

    print(f"Updated {updated_count} styles in data/styles.json")

if __name__ == "__main__":
    update_entries()
    update_styles()
