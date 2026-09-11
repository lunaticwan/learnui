"""
한국어 데이터 파이프라인 및 TypeScript 모듈 자동 생성 스크립트.

[동작 원리]
1. `data/entries.json`, `data/styles.json`, `data/translate-table.json`, `data/ui.json` 원본 JSON 데이터 로드.
2. `ENTRY_NAME_KO`, `STYLE_NAME_KO` 사전 매핑 정보를 참조하여 UI 엔트리 및 스타일의 한국어 명칭 동기화.
3. `get_localized_obj` 유틸리티를 통해 단일 문자열 또는 객체 규격을 `{ "en": "...", "ko": "..." }` 다국어 데이터로 파싱.
4. 정돈된 데이터를 `src/data/entries.ts`, `src/data/styles.ts`, `src/data/translateTable.ts`, `src/data/uiCopy.ts` 파일로 자동 변환 및 출력.
"""

import json

# UI 엔트리 표준 한국어 명칭 매핑 사전
ENTRY_NAME_KO = {
    "text-scramble": "디코드 텍스트 무작위 효과",
    "spring": "스프링 애니메이션",
    "easing": "이징 효과",
    "masonry": "메이슨리 레이아웃",
    "bento-grid": "벤토 그리드",
    "hamburger-menu": "햄버거 메뉴",
    "lightbox": "라이트박스",
    "marquee": "마키 텍스트",
    "pointer": "포인터 및 커서",
    "alert": "알림창",
    "slider": "슬라이더",
    "color-well": "색상 피커",
    "form-field": "폼 필드",
    "truncation": "텍스트 말줄임",
    "drag-and-drop": "드래그 앤 드롭",
    "divider": "구분선",
    "progress-indicators": "진행 표시기",
    "window": "Mac 윈도우",
    "split-view": "스플릿 뷰",
    "scroll-view": "스크롤 뷰",
    "search-field": "검색 필드",
    "save-panel": "저장 패널",
    "token-field": "토큰 필드",
    "combo-button": "콤보 버튼",
    "level-indicator": "레벨 인디케이터",
    "column-view": "컬럼 뷰",
    "outline-view": "아웃라인 뷰",
    "three-dots": "더보기 버튼",
    "menu-bar": "메뉴 바",
    "context-menu": "컨텍스트 메뉴",
    "disclosure-triangle": "디스클로저 트라이앵글",
    "dock-badge": "Dock 배지",
    "focus-ring": "포커스 링",
    "inspector": "인스펙터",
    "panel": "패널 및 HUD",
    "popover": "팝오버",
    "popup-pulldown-combo": "팝업 및 풀다운 버튼",
    "segmented-control": "세그먼트 컨트롤",
    "sheet": "시트 패널",
    "sidebar": "사이드바",
    "stepper": "스텝퍼",
    "toolbar": "툴바",
    "traffic-lights": "신호등 창 제어 버튼",
    "vibrancy": "비주얼 이펙트 재질",
    "toast": "토스트 알림",
    "dialog-drawer-sheet": "모달 대화상자 및 드로어",
    "popover-dropdown-tooltip": "팝오버 및 툴팁",
    "scrim": "스크림 오버레이",
    "skeleton-spinner": "스켈레톤 및 스피너",
    "combobox": "콤보박스",
    "command-palette": "커맨드 팔레트",
    "accordion": "아코디언",
    "tabs": "탭 뷰",
    "badge-chip-pill": "배지 및 칩 (Badge, Chip & Pill)",
    "breadcrumbs": "브레드크럼",
    "sticky-fixed": "스티키 및 픽스드 포지셔닝",
    "focus-ring-web": "웹 포커스 링",
    "empty-state": "빈 상태 화면",
    "hover-card": "호버 카드",
    "switch-checkbox-radio": "스위치, 체크박스 및 라디오 (Switch, Checkbox & Radio)",
    "toggle-group": "토글 그룹",
    "menu-bar-extra": "메뉴 바 익스트라"
}

# UI 비주얼 스타일 표준 한국어 명칭 매핑 사전
STYLE_NAME_KO = {
    "skeuomorphism": "스큐어모피즘",
    "neumorphism": "뉴모피즘",
    "glassmorphism": "글래스모피즘",
    "liquid-glass": "리퀴드 글래스",
    "web-brutalism": "웹 브루탈리즘",
    "neobrutalism": "네오브루탈리즘",
    "y2k": "Y2K 디지털 에스테틱",
    "frutiger-aero": "프루티거 에어로",
    "flat-design": "플랫 디자인",
    "minimalism": "미니멀리즘",
    "claymorphism": "클레이모피즘",
    "vernacular-web": "버내큘러 웹",
    "aqua": "아쿠아",
    "windows-aero": "윈도우 에어로",
    "swiss-style": "스위스 스타일",
    "bauhaus": "바우하우스",
    "memphis": "멤피스",
    "vaporwave": "베이퍼웨이브",
    "art-deco": "아르데코",
    "cyberpunk": "사이버펑크",
    "pixel-art": "픽셀 아트",
    "corporate-memphis": "코퍼레이트 멤피스",
    "material-design": "머티리얼 디자인",
    "terminal-hacker": "터미널 해커",
    "frutiger-metro": "프루티거 메트로",
    "anti-design": "안티 디자인",
    "acid-graphics": "애시드 그래픽",
    "risograph": "리소그래프",
    "zine-collage": "진 콜라주",
    "steampunk": "스팀펑크",
    "dieselpunk": "디젤펑크",
    "biopunk": "바이오펑크",
    "afrofuturism": "아프로퓨처리즘",
    "de-stijl": "데 스틸",
    "constructivism": "구성주의",
    "pop-art": "팝 아트",
    "surrealism": "초현실주의",
    "art-nouveau": "아르누보",
    "holographic": "홀로그래픽",
    "isometric-3d": "아이소메트릭 3D",
    "line-art": "라인 아트",
    "hand-drawn": "핸드드로잉",
    "fantasy-rpg": "판타지 RPG UI",
    "lcars": "LCARS (스타트렉 컴퓨터 시스템)"
}

def get_str(val, lang="en"):
    """객체 또는 문자열에서 특정 언어의 텍스트를 안전하게 추출함."""
    if isinstance(val, dict):
        return val.get(lang, val.get("en", ""))
    elif isinstance(val, str):
        return val
    return ""

def get_localized_obj(obj, field):
    """필드 데이터를 LocalizedString 규격({'en': ..., 'ko': ...})으로 정규화함."""
    v = obj.get(field) if isinstance(obj, dict) else None
    if isinstance(v, dict):
        en_str = v.get("en", "")
        ko_str = v.get("ko", en_str)
        return {"en": en_str, "ko": ko_str}
    elif isinstance(v, str):
        return {"en": v, "ko": v}
    return None

def convert_entry(e):
    """단일 Entry JSON 객체를 TypeScript 호환 UIEntry 구조체로 변환함."""
    slug = e.get("slug", "")
    raw_name = get_str(e.get("name"), "en")
    name_ko = ENTRY_NAME_KO.get(slug, raw_name if raw_name else slug)

    tagline = get_localized_obj(e, "tagline")
    description = get_localized_obj(e, "description")

    aka_dict = e.get("aka", {})
    if isinstance(aka_dict, dict):
        aka_en = aka_dict.get("en", [])
        aka_ko = aka_dict.get("ko", aka_en)
    else:
        aka_en = aka_dict if isinstance(aka_dict, list) else []
        aka_ko = aka_en

    fuzzy_dict = e.get("fuzzy", {})
    if isinstance(fuzzy_dict, dict):
        fuzzy_en = fuzzy_dict.get("en", [])
        fuzzy_ko = fuzzy_dict.get("ko", fuzzy_en)
    else:
        fuzzy_en = fuzzy_dict if isinstance(fuzzy_dict, list) else []
        fuzzy_ko = fuzzy_en

    api_list = []
    for a in e.get("api", []):
        note_obj = get_localized_obj(a, "note")
        api_list.append({
            "framework": a.get("framework", ""),
            "symbol": a.get("symbol", ""),
            "note": note_obj
        })

    parts_list = []
    for p in e.get("parts", []):
        parts_list.append({
            "id": p.get("id", ""),
            "name": get_localized_obj(p, "name"),
            "api": p.get("api", ""),
            "description": get_localized_obj(p, "description"),
            "prompt": get_localized_obj(p, "prompt")
        })

    return {
        "slug": slug,
        "platform": e.get("platform", "web"),
        "name": {
            "en": raw_name,
            "ko": name_ko
        },
        "tagline": tagline,
        "description": description,
        "aka": {
            "en": aka_en,
            "ko": aka_ko
        },
        "fuzzy": {
            "en": fuzzy_en,
            "ko": fuzzy_ko
        },
        "api": api_list,
        "parts": parts_list,
        "prompt": get_localized_obj(e, "prompt"),
        "debugPrompt": get_localized_obj(e, "debugPrompt"),
        "relatedSlugs": e.get("relatedSlugs", e.get("related", []))
    }

def convert_style(s):
    """단일 Style JSON 객체를 TypeScript 호환 UIStyle 구조체로 변환함."""
    slug = s.get("slug", "")
    raw_name = get_str(s.get("name"), "en")
    name_ko = STYLE_NAME_KO.get(slug, raw_name if raw_name else slug)

    aliases_dict = s.get("aliases", {})
    if isinstance(aliases_dict, dict):
        aliases_en = aliases_dict.get("en", [])
        aliases_ko = aliases_dict.get("ko", aliases_en)
    else:
        aliases_en = aliases_dict if isinstance(aliases_dict, list) else []
        aliases_ko = aliases_en

    signals_list = []
    for sig in s.get("signals", []):
        signals_list.append({
            "id": sig.get("id", ""),
            "role": sig.get("role", "defining"),
            "name": get_localized_obj(sig, "name"),
            "facet": sig.get("facet", "surface"),
            "description": get_localized_obj(sig, "description")
        })

    raw_confused = s.get("confusedWith")
    confused_obj = None
    if isinstance(raw_confused, dict):
        confused_obj = {
            "slug": raw_confused.get("slug", ""),
            "name": raw_confused.get("name", ""),
            "because": get_localized_obj(raw_confused, "because"),
            "wouldBecomeIf": get_localized_obj(raw_confused, "wouldBecomeIf")
        }
    elif isinstance(raw_confused, list):
        confused_obj = []
        for c in raw_confused:
            if isinstance(c, dict):
                confused_obj.append({
                    "slug": c.get("slug", ""),
                    "name": c.get("name", ""),
                    "because": get_localized_obj(c, "because"),
                    "wouldBecomeIf": get_localized_obj(c, "wouldBecomeIf")
                })

    return {
        "slug": slug,
        "name": {
            "en": raw_name,
            "ko": name_ko
        },
        "tagline": get_localized_obj(s, "tagline"),
        "scope": get_localized_obj(s, "scope"),
        "aliases": {
            "en": aliases_en,
            "ko": aliases_ko
        },
        "signals": signals_list,
        "confusedWith": confused_obj,
        "brief": get_localized_obj(s, "brief"),
        "accessibility": get_localized_obj(s, "accessibility"),
        "a11yAndMisuse": get_localized_obj(s, "accessibility"),
        "origin": get_localized_obj(s, "origin"),
        "meta": s.get("meta", {})
    }

def main():
    """데이터 빌드 메인 엔트리포인트."""
    with open("data/entries.json", "r", encoding="utf-8") as f:
        raw_entries = json.load(f)

    with open("data/styles.json", "r", encoding="utf-8") as f:
        raw_styles = json.load(f)

    with open("data/translate-table.json", "r", encoding="utf-8") as f:
        raw_translate = json.load(f)

    with open("data/ui.json", "r", encoding="utf-8") as f:
        raw_ui = json.load(f)

    clean_entries = [convert_entry(e) for e in raw_entries]
    clean_styles = [convert_style(s) for s in raw_styles]

    entries_ts = f'import {{ UIEntry }} from "../types/ui";\n\nexport const ENTRIES: UIEntry[] = {json.dumps(clean_entries, ensure_ascii=False, indent=2)};\n'
    styles_ts = f'import {{ UIStyle }} from "../types/ui";\n\nexport const STYLES: UIStyle[] = {json.dumps(clean_styles, ensure_ascii=False, indent=2)};\n'
    translate_ts = f'import {{ TranslateTableItem }} from "../types/ui";\n\nexport const TRANSLATE_TABLE: TranslateTableItem[] = {json.dumps(raw_translate, ensure_ascii=False, indent=2)};\n'
    ui_copy_ts = f'import {{ UICopy }} from "../types/ui";\n\nexport const UI_COPY: UICopy = {json.dumps(raw_ui, ensure_ascii=False, indent=2)};\n'

    with open("src/data/entries.ts", "w", encoding="utf-8") as f:
        f.write(entries_ts)

    with open("src/data/styles.ts", "w", encoding="utf-8") as f:
        f.write(styles_ts)

    with open("src/data/translateTable.ts", "w", encoding="utf-8") as f:
        f.write(translate_ts)

    with open("src/data/uiCopy.ts", "w", encoding="utf-8") as f:
        f.write(ui_copy_ts)

    print("src/data/ 데이터 모듈 (entries.ts, styles.ts, translateTable.ts, uiCopy.ts) 업데이트 성공!")

if __name__ == "__main__":
    main()
