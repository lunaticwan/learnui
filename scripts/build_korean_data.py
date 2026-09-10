"""
한국어 데이터 파이프라인 및 TypeScript 모듈 자동 생성 스크립트.

[동작 원리]
1. `data/entries.json` 및 `data/styles.json` 파일의 원본 JSON 데이터 로드.
2. `ENTRY_NAME_KO`, `STYLE_NAME_KO` 사전 매핑 정보를 참조하여 UI 엔트리 및 스타일의 한국어 명칭 동기화.
3. `get_localized_obj` 유틸리티를 통해 단일 문자열 또는 객체 규격을 `{ "en": "...", "ko": "..." }` 다국어 데이터로 파싱.
4. 정돈된 데이터를 `src/data/entries.ts` 및 `src/data/styles.ts` 파일로 자동 변환 및 출력.
"""

import json

# UI 엔트리 표준 한국어 명칭 매핑 사전
ENTRY_NAME_KO = {
    "text-scramble": "디코드 텍스트 무작위 효과 (Text Scramble)",
    "spring": "스프링 애니메이션 (Spring Animation)",
    "easing": "이징 효과 (Easing / Timing Function)",
    "masonry": "메이슨리 레이아웃 (Masonry Grid)",
    "bento-grid": "벤토 그리드 (Bento Grid)",
    "hamburger-menu": "햄버거 메뉴 (Hamburger Menu)",
    "lightbox": "라이트박스 (Lightbox)",
    "marquee": "마키 텍스트 (Marquee)",
    "pointer": "포인터 및 커서 (Pointer / Cursor)",
    "alert": "알림창 (Alert)",
    "slider": "슬라이더 (Slider)",
    "color-well": "색상 피커 (Color Well)",
    "form-field": "폼 필드 (Form Field)",
    "truncation": "텍스트 말줄임 (Truncation / Line Clamp)",
    "drag-and-drop": "드래그 앤 드롭 (Drag & Drop)",
    "divider": "구분선 (Divider / Separator)",
    "progress-indicators": "진행 표시기 (Progress Ring & Bar)",
    "window": "Mac 윈도우 (Mac Window)",
    "split-view": "스플릿 뷰 (Split View)",
    "scroll-view": "스크롤 뷰 (Scroll View)",
    "search-field": "검색 필드 (Search Field)",
    "save-panel": "저장 패널 (Save Panel)",
    "token-field": "토큰 필드 (Token Field)",
    "combo-button": "콤보 버튼 (Combo Button)",
    "level-indicator": "레벨 인디케이터 (Level Indicator)",
    "column-view": "컬럼 뷰 (Column View)",
    "outline-view": "아웃라인 뷰 (Outline View)",
    "three-dots": "더보기 버튼 (Three Dots / Ellipsis)",
    "menu-bar": "메뉴 바 (Menu Bar)",
    "context-menu": "컨텍스트 메뉴 (Context Menu)",
    "disclosure-triangle": "디스클로저 트라이앵글 (Disclosure Triangle)",
    "dock-badge": "Dock 배지 (Dock Badge)",
    "focus-ring": "포커스 링 (Focus Ring)",
    "inspector": "인스펙터 (Inspector)",
    "panel": "패널 및 HUD (Panel)",
    "popover": "팝오버 (Popover)",
    "popup-pulldown-combo": "팝업 및 풀다운 버튼 (Pop-Up & Pull-Down)",
    "segmented-control": "세그먼트 컨트롤 (Segmented Control)",
    "sheet": "시트 패널 (Sheet)",
    "sidebar": "사이드바 (Sidebar)",
    "stepper": "스텝퍼 (Stepper)",
    "toolbar": "툴바 (Toolbar)",
    "traffic-lights": "신호등 창 제어 버튼 (Traffic Lights)",
    "vibrancy": "비주얼 이펙트 재질 (Vibrancy)",
    "toast": "토스트 알림 (Toast / Snackbar)",
    "dialog-drawer-sheet": "모달 대화상자 및 드로어 (Modal Dialog & Drawer)",
    "popover-dropdown-tooltip": "팝오버 및 툴팁 (Popover & Tooltip)",
    "scrim": "스크림 오버레이 (Scrim)",
    "skeleton-spinner": "스켈레톤 및 스피너 (Skeleton & Spinner)",
    "combobox": "콤보박스 (Combobox)",
    "command-palette": "커맨드 팔레트 (Command Palette)",
    "accordion": "아코디언 (Accordion)",
    "tabs": "탭 뷰 (Tabs)",
    "badge-chip-pill": "배지 및 칩 (Badge, Chip & Pill)",
    "breadcrumbs": "브레드크럼 (Breadcrumbs)",
    "sticky-fixed": "스티키 및 픽스드 포지셔닝 (Sticky & Fixed)",
    "focus-ring-web": "웹 포커스 링 (:focus-visible)",
    "empty-state": "빈 상태 화면 (Empty State)",
    "hover-card": "호버 카드 (Hover Card)",
    "switch-checkbox-radio": "스위치, 체크박스 및 라디오 (Switch, Checkbox & Radio)",
    "toggle-group": "토글 그룹 (Toggle Group)",
    "menu-bar-extra": "메뉴 바 익스트라 (Menu Bar Extra)"
}

# UI 비주얼 스타일 표준 한국어 명칭 매핑 사전
STYLE_NAME_KO = {
    "skeuomorphism": "스큐어모피즘 (Skeuomorphism)",
    "neumorphism": "뉴모피즘 (Neumorphism)",
    "glassmorphism": "글래스모피즘 (Glassmorphism)",
    "liquid-glass": "리퀴드 글래스 (Liquid Glass)",
    "web-brutalism": "웹 브루탈리즘 (Web Brutalism)",
    "neobrutalism": "네오브루탈리즘 (Neobrutalism)",
    "y2k": "Y2K 디지털 에스테틱 (Y2K)",
    "frutiger-aero": "프루티거 에어로 (Frutiger Aero)",
    "flat-design": "플랫 디자인 (Flat Design)",
    "minimalism": "미니멀리즘 (Minimalism)",
    "claymorphism": "클레이모피즘 (Claymorphism)",
    "vernacular-web": "버내큘러 웹 (Vernacular Web)",
    "aqua": "아쿠아 (Aqua)",
    "windows-aero": "윈도우 에어로 (Windows Aero)",
    "swiss-style": "스위스 스타일 (Swiss Style)",
    "bauhaus": "바우하우스 (Bauhaus)",
    "memphis": "멤피스 (Memphis)",
    "vaporwave": "베이퍼웨이브 (Vaporwave)",
    "art-deco": "아르데코 (Art Deco)",
    "cyberpunk": "사이버펑크 (Cyberpunk)",
    "pixel-art": "픽셀 아트 (Pixel Art)",
    "corporate-memphis": "코퍼레이트 멤피스 (Corporate Memphis)",
    "material-design": "머티리얼 디자인 (Material Design)",
    "terminal-hacker": "터미널 해커 (Terminal / Hacker)",
    "frutiger-metro": "프루티거 메트로 (Frutiger Metro)",
    "anti-design": "안티 디자인 (Anti-design)",
    "acid-graphics": "애시드 그래픽 (Acid Graphics)",
    "risograph": "리소그래프 (Risograph)",
    "zine-collage": "진 콜라주 (Zine Collage)",
    "steampunk": "스팀펑크 (Steampunk)",
    "dieselpunk": "디젤펑크 (Dieselpunk)",
    "biopunk": "바이오펑크 (Biopunk)",
    "afrofuturism": "아프로퓨처리즘 (Afrofuturism)",
    "de-stijl": "데 스틸 (De Stijl)",
    "constructivism": "구성주의 (Constructivism)",
    "pop-art": "팝 아트 (Pop Art)",
    "surrealism": "초현실주의 (Surrealism)",
    "art-nouveau": "아르누보 (Art Nouveau)",
    "holographic": "홀로그래픽 (Holographic)",
    "isometric-3d": "아이소메트릭 3D (Isometric 3D)",
    "line-art": "라인 아트 (Line Art)",
    "hand-drawn": "핸드드로잉 (Hand-drawn)",
    "fantasy-rpg": "판타지 RPG UI (Fantasy RPG UI)",
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

    clean_entries = [convert_entry(e) for e in raw_entries]
    clean_styles = [convert_style(s) for s in raw_styles]

    entries_ts = f'import {{ UIEntry }} from "../types/ui";\n\nexport const ENTRIES: UIEntry[] = {json.dumps(clean_entries, ensure_ascii=False, indent=2)};\n'
    styles_ts = f'import {{ UIStyle }} from "../types/ui";\n\nexport const STYLES: UIStyle[] = {json.dumps(clean_styles, ensure_ascii=False, indent=2)};\n'

    with open("src/data/entries.ts", "w", encoding="utf-8") as f:
        f.write(entries_ts)

    with open("src/data/styles.ts", "w", encoding="utf-8") as f:
        f.write(styles_ts)

    print("src/data/entries.ts 및 src/data/styles.ts 업데이트 성공!")

if __name__ == "__main__":
    main()
