import json
import re

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

# 한국어 구어체/자연어 묘사 매핑 강화
FUZZY_AKA_TRANSLATION_MAP = {
    "decode effect": "디코드 효과",
    "matrix text effect": "매트릭스 텍스트 효과",
    "shuffle text": "셔플 텍스트",
    "the text that shuffles random letters until it spells the word": "글자가 무작위로 교체되다가 단어로 확정되는 텍스트",
    "the matrix style decoding text": "매트릭스 스타일의 디코딩 텍스트",
    "letters cycling before they land on the real ones": "진짜 문자로 정착하기 전에 글자가 계속 회전하는 효과",
    "the hacker text effect": "해커 스타일 텍스트 효과",
    "glitchy letters that resolve into a title": "글리치 문자가 제목으로 변하는 효과",
    "physics bounce": "물리 기반 바운스",
    "spring physics": "스프링 물리학",
    "overshoot animation": "오버슈트 애니메이션",
    "the animation that overshoots and settles": "목표를 살짝 지나쳤다가 잔잔하게 정지하는 애니메이션",
    "bouncy ui motion": "탄성 있는 UI 모션",
    "smooth natural animation": "부드럽고 자연스러운 애니메이션",
    "the menu button with three lines": "줄 3개 있는 메뉴 버튼",
    "the three horizontal bars in the corner": "모서리에 있는 수평선 3개 버튼",
    "hamburger icon": "햄버거 아이콘",
    "three dots": "점 세 개",
    "more options button": "더보기 버튼",
    "meatball menu": "밋볼 메뉴 (가로 점 3개)",
    "kebab menu": "케밥 메뉴 (세로 점 3개)",
    "dots menu": "점 3개 메뉴",
    "text truncation": "텍스트 줄임표 처리",
    "ellipsis": "말줄임표",
    "cut off text with three dots": "말줄임표로 잘린 텍스트",
    "line clamp": "라인 클램프",
}

def translate_text_to_ko(text_en, text_zh=""):
    if not text_en and not text_zh:
        return ""

    base = text_en if text_en else text_zh
    t = base

    if t in FUZZY_AKA_TRANSLATION_MAP:
        return FUZZY_AKA_TRANSLATION_MAP[t]

    dict_map = {
        "Random characters churn and settle into the real text": "무작위 문자가 교체되다가 올바른 텍스트로 정착합니다.",
        "Based on physics: overshoots the target and gently settles": "물리 기반 운동: 목표 지점을 지나쳤다가 잔잔히 정지합니다.",
        "Speed curve of an animation — determines if motion feels smooth or mechanical": "애니메이션 속도 곡선 — 부드럽거나 딱딱한 움직임을 결정합니다.",
        "Multi-column masonry grid layout with variable height cards": "높이가 다른 카드가 격자 형태로 배치되는 메이슨리 레이아웃.",
        "Modular grid layout inspired by Japanese bento boxes": "일본식 도시락 용기에서 영감을 받은 모듈형 그리드 레이아웃.",
        "Three-bar toggle button for opening navigation drawer": "내비게이션 드로어를 여는 3선 토글 버튼.",
        "Overlay modal window for viewing media in full detail": "미디어를 상세히 감상할 수 있는 오버레이 모달 창.",
        "Continuously scrolling horizontal text strip": "수평으로 계속 흐르는 텍스트 스트립.",
        "The canonical implementation — free since GSAP 3.13": "GSAP 3.13부터 무료로 제공되는 표준 구현 방식.",
        "the hand-rolled version: per-character reveal deadline, random glyphs until then": "직접 구현 방식: 문자별 전환 시간과 무작위 글꼴 교체.",
        "Apple platform counterpart": "Apple 플랫폼 대응 API.",
        "CSS linear() easing curve": "CSS linear() 이징 곡선.",
        "web standard": "웹 표준",
        "macOS standard": "macOS 표준",
    }

    if t in dict_map:
        return dict_map[t]

    return t if t else text_zh

def get_str(val, lang="en"):
    if isinstance(val, dict):
        return val.get(lang, val.get("en", ""))
    elif isinstance(val, str):
        return val
    return ""

def convert_entry(e):
    slug = e.get("slug", "")
    raw_name = get_str(e.get("name"), "en")
    name_ko = ENTRY_NAME_KO.get(slug, raw_name if raw_name else slug)

    raw_aka = e.get("aka", [])
    if isinstance(raw_aka, dict):
        aka_en = raw_aka.get("en", [])
        aka_ko = raw_aka.get("ko", [translate_text_to_ko(item, item) for item in aka_en])
    else:
        aka_en = raw_aka if isinstance(raw_aka, list) else []
        aka_ko = [translate_text_to_ko(item, item) for item in aka_en]

    raw_fuzzy = e.get("fuzzy", [])
    if isinstance(raw_fuzzy, dict):
        fuzzy_en = raw_fuzzy.get("en", [])
        fuzzy_ko = raw_fuzzy.get("ko", [translate_text_to_ko(item, item) for item in fuzzy_en])
    else:
        fuzzy_en = raw_fuzzy if isinstance(raw_fuzzy, list) else []
        fuzzy_ko = [translate_text_to_ko(item, item) for item in fuzzy_en]

    api_list = []
    for a in e.get("api", []):
        note_en = get_str(a.get("note"), "en")
        note_zh = get_str(a.get("note"), "zh")
        api_list.append({
            "framework": a.get("framework", ""),
            "symbol": a.get("symbol", ""),
            "note": {
                "en": note_en,
                "ko": translate_text_to_ko(note_en, note_zh)
            } if note_en or note_zh else None
        })

    parts_list = []
    for p in e.get("parts", []):
        p_name_en = get_str(p.get("name"), "en")
        p_name_zh = get_str(p.get("name"), "zh")
        p_desc_en = get_str(p.get("description"), "en")
        p_desc_zh = get_str(p.get("description"), "zh")
        p_prompt_en = get_str(p.get("prompt"), "en")
        p_prompt_zh = get_str(p.get("prompt"), "zh")

        parts_list.append({
            "id": p.get("id", ""),
            "name": {
                "en": p_name_en,
                "ko": translate_text_to_ko(p_name_en, p_name_zh)
            },
            "api": p.get("api", ""),
            "description": {
                "en": p_desc_en,
                "ko": translate_text_to_ko(p_desc_en, p_desc_zh)
            },
            "prompt": {
                "en": p_prompt_en,
                "ko": translate_text_to_ko(p_prompt_en, p_prompt_zh)
            } if p_prompt_en or p_prompt_zh else None
        })

    pr_en = get_str(e.get("prompt"), "en")
    pr_zh = get_str(e.get("prompt"), "zh")
    db_en = get_str(e.get("debugPrompt"), "en")
    db_zh = get_str(e.get("debugPrompt"), "zh")

    tagline_en = get_str(e.get("tagline"), "en")
    tagline_zh = get_str(e.get("tagline"), "zh")
    desc_en = get_str(e.get("description"), "en")
    desc_zh = get_str(e.get("description"), "zh")

    return {
        "slug": slug,
        "platform": e.get("platform", "web"),
        "name": {
            "en": raw_name,
            "ko": name_ko
        },
        "tagline": {
            "en": tagline_en,
            "ko": translate_text_to_ko(tagline_en, tagline_zh)
        },
        "description": {
            "en": desc_en,
            "ko": translate_text_to_ko(desc_en, desc_zh)
        },
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
        "prompt": {
            "en": pr_en,
            "ko": translate_text_to_ko(pr_en, pr_zh)
        } if pr_en or pr_zh else None,
        "debugPrompt": {
            "en": db_en,
            "ko": translate_text_to_ko(db_en, db_zh)
        } if db_en or db_zh else None,
        "relatedSlugs": e.get("relatedSlugs", e.get("related", []))
    }

def convert_style(s):
    slug = s.get("slug", "")
    raw_name = get_str(s.get("name"), "en")
    name_ko = STYLE_NAME_KO.get(slug, raw_name if raw_name else slug)

    tagline_en = get_str(s.get("tagline"), "en")
    tagline_zh = get_str(s.get("tagline"), "zh")
    scope_en = get_str(s.get("scope"), "en")
    scope_zh = get_str(s.get("scope"), "zh")

    raw_aliases = s.get("aliases", [])
    if isinstance(raw_aliases, dict):
        aliases_en = raw_aliases.get("en", [])
        aliases_ko = raw_aliases.get("ko", [translate_text_to_ko(a, a) for a in aliases_en])
    else:
        aliases_en = raw_aliases if isinstance(raw_aliases, list) else []
        aliases_ko = [translate_text_to_ko(a, a) for a in aliases_en]

    signals_list = []
    for sig in s.get("signals", []):
        s_name_en = get_str(sig.get("name"), "en")
        s_name_zh = get_str(sig.get("name"), "zh")
        s_desc_en = get_str(sig.get("description"), "en")
        s_desc_zh = get_str(sig.get("description"), "zh")
        signals_list.append({
            "id": sig.get("id", ""),
            "role": sig.get("role", "defining"),
            "name": {
                "en": s_name_en,
                "ko": translate_text_to_ko(s_name_en, s_name_zh)
            },
            "facet": sig.get("facet", "surface"),
            "description": {
                "en": s_desc_en,
                "ko": translate_text_to_ko(s_desc_en, s_desc_zh)
            }
        })

    confused_raw = s.get("confusedWith", [])
    if isinstance(confused_raw, dict):
        confused_raw = [confused_raw]

    confused_list = []
    for c in confused_raw:
        if isinstance(c, dict):
            because_en = get_str(c.get("because"), "en")
            because_zh = get_str(c.get("because"), "zh")
            how_en = get_str(c.get("wouldBecomeIf"), "en")
            how_zh = get_str(c.get("wouldBecomeIf"), "zh")
            confused_list.append({
                "slug": c.get("slug", ""),
                "name": c.get("name", ""),
                "because": {
                    "en": because_en,
                    "ko": translate_text_to_ko(because_en, because_zh)
                },
                "wouldBecomeIf": {
                    "en": how_en,
                    "ko": translate_text_to_ko(how_en, how_zh)
                }
            })

    brief_en = get_str(s.get("brief"), "en")
    brief_zh = get_str(s.get("brief"), "zh")
    a11y_en = get_str(s.get("a11yAndMisuse"), "en") if s.get("a11yAndMisuse") else get_str(s.get("accessibility"), "en")
    a11y_zh = get_str(s.get("a11yAndMisuse"), "zh") if s.get("a11yAndMisuse") else get_str(s.get("accessibility"), "zh")
    origin_en = get_str(s.get("origin"), "en")
    origin_zh = get_str(s.get("origin"), "zh")

    return {
        "slug": slug,
        "name": {
            "en": raw_name,
            "ko": name_ko
        },
        "tagline": {
            "en": tagline_en,
            "ko": translate_text_to_ko(tagline_en, tagline_zh)
        },
        "scope": {
            "en": scope_en,
            "ko": translate_text_to_ko(scope_en, scope_zh)
        } if scope_en or scope_zh else None,
        "aliases": {
            "en": aliases_en,
            "ko": aliases_ko
        },
        "signals": signals_list,
        "confusedWith": confused_list,
        "brief": {
            "en": brief_en,
            "ko": translate_text_to_ko(brief_en, brief_zh)
        } if brief_en or brief_zh else None,
        "a11yAndMisuse": {
            "en": a11y_en,
            "ko": translate_text_to_ko(a11y_en, a11y_zh)
        } if a11y_en or a11y_zh else None,
        "origin": {
            "en": origin_en,
            "ko": translate_text_to_ko(origin_en, origin_zh)
        } if origin_en or origin_zh else None,
        "meta": s.get("meta", {})
    }

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

print("src/data/entries.ts and src/data/styles.ts updated successfully!")
