import { UIStyle } from "../types/ui";

export const STYLES: UIStyle[] = [
  {
    "slug": "skeuomorphism",
    "name": {
      "en": "Skeuomorphism",
      "ko": "스큐어모피즘"
    },
    "tagline": {
      "en": "Skeuomorphism carries real-world materials and objects into digital UI: controls are rendered as if physically made of something — glossy plastic, brushed metal, leather, paper — with the lighting, texture, and affordances of the real thing. A skeuomorphic app teaches itself: a page that looks tearable invites turning, a raised glossy button invites pressing. It peaked in early iOS and Mac OS X, and was largely displaced by flat design around 2013.",
      "ko": "실제 물리적 재질(가죽, 금속, 종이)과 조명, 질감을 사실적으로 묘사하여 직관적 은유를 전달하는 디자인 스타일"
    },
    "scope": {
      "en": "Scope: This entry covers the visual style. The interaction-metaphor sense (a 'trash can' you drag files to) is the same idea one level up, and NN/g treats both together — but the atlas signals below are about pixels, not metaphors.",
      "ko": "범위: 이 항목은 비주얼 그래픽 스타일을 다룹니다. 파일을 휴지통으로 드래그하는 상호작용 은유와 뿌리가 같습니다."
    },
    "aliases": {
      "en": [
        "the app looks like a real leather notebook",
        "buttons that look like physical shiny buttons you could press",
        "old iphone apps with stitching and paper textures",
        "the calculator that looks like a real calculator",
        "realistic textures like wood and metal in the interface",
        "leather paper gold metallic realistic texture UI",
        "skeuomorphic realism",
        "tactile interface design"
      ],
      "ko": [
        "진짜 가죽 수첩처럼 보이는 앱 UI",
        "실제 누를 수 있는 입체 광택 버튼",
        "스티칭 바느질선과 종이 질감이 있는 클래식 iPhone 앱",
        "실제 계산기 모양을 본뜬 계산기 화면",
        "인터페이스 내 나무 및 금속의 사실적 질감",
        "실물 재질 묘사 디자인",
        "아날로그 촉감 비주얼",
        "현실 오브제 모사 UI"
      ]
    },
    "signals": [
      {
        "id": "real-materials",
        "role": "defining",
        "name": {
          "en": "Simulated real materials",
          "ko": "실물 재질 모사"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces look made of something physical — leather, paper, linen, brushed metal, green felt — usually with visible texture or grain.",
          "ko": "가죽, 종이, 리넨, 헤어라인 금속, 부직포 등 물리적 재질의 질감이나 패턴이 선명하게 노출됨."
        }
      },
      {
        "id": "dimensional-lighting",
        "role": "defining",
        "name": {
          "en": "Physical lighting model",
          "ko": "입체 조명 모델"
        },
        "facet": "depth",
        "description": {
          "en": "Gloss highlights, bevels, and inner shadows imply a light source: buttons bulge outward, fields sink inward, edges catch light.",
          "ko": "광택 하이라이트, 경사(Bevel), 내측 그림자로 광원을 표현하며 버튼은 돌출되고 필드는 오목하게 들어감."
        }
      },
      {
        "id": "object-metaphor",
        "role": "defining",
        "name": {
          "en": "Real-object metaphors",
          "ko": "실물 오브제 은유"
        },
        "facet": "imagery",
        "description": {
          "en": "The UI is drawn AS the object it replaces: a notepad with ruled paper, a bookshelf of covers, a dial you rotate.",
          "ko": "UI가 대체 대상 오브제 그 자체로 렌더링됨 (줄노트 메모장, 서가 형태의 책장, 회전 다이얼 등)."
        }
      },
      {
        "id": "crafted-details",
        "role": "defining",
        "name": {
          "en": "Crafted physical details",
          "ko": "정교한 물리적 디테일"
        },
        "facet": "geometry",
        "description": {
          "en": "Stitching, torn-paper edges, embossed or letterpress text, rivets — ornamental traces of how the 'real' object would be manufactured.",
          "ko": "바느질선, 찢어진 종이 가장자리, 음각/양각 텍스트, 리벳 등 실제 제품 공정의 디테일을 장식으로 재현함."
        }
      },
      {
        "id": "gradient-controls",
        "role": "supporting",
        "name": {
          "en": "Glossy gradient controls",
          "ko": "광택 그래디언트 컨트롤"
        },
        "facet": "depth",
        "description": {
          "en": "Buttons and bars carry vertical gradients with a specular top highlight — the 'gel' or 'aqua' look of pressable plastic.",
          "ko": "버튼과 바 요소 상단에 하이라이트 그래디언트를 적용하여 누르고 싶은 플라스틱/젤 질감을 연출함."
        }
      },
      {
        "id": "palette",
        "role": "variable",
        "name": {
          "en": "Palette follows the material",
          "ko": "재질 기반 컬러 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Color comes from the simulated material (tan leather, grey linen), so almost any palette can be skeuomorphic.",
          "ko": "모사하려는 재질(갈색 가죽, 회색 리넨 등) 본연의 색상에서 컬러 팔레트가 결정됨."
        }
      },
      {
        "id": "flat-fills",
        "role": "avoid",
        "name": {
          "en": "Flat unshaded fills",
          "ko": "음영 없는 단색 채우기"
        },
        "facet": "surface",
        "description": {
          "en": "Large flat single-color surfaces with no lighting break the illusion — that's the doorway to Flat Design.",
          "ko": "조명 효과가 없는 대형 단색 플랫 면은 실물 착시를 깨뜨리며 플랫 디자인으로 이탈하는 원인이 됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "neumorphism",
      "name": "Neumorphism",
      "because": {
        "en": "This is skeuomorphism because surfaces imitate REAL, nameable materials — leather, paper, metal — with rich lighting, texture, and object metaphors.",
        "ko": "구별 이유: 가죽, 종이, 금속 등 명확히 식별 가능한 실제 재질을 풍부한 조명, 질감, 오브제 은유로 모사하므로 스큐어모피즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become neumorphism if every material and texture vanished and all controls were instead extruded from one continuous matte surface with soft dual shadows.",
        "ko": "변경 조건: 모든 재질과 질감이 사라지고 컨트롤들이 단일 무광 표면에서 부드러운 이중 그림자로 양각/음각 성형된 느낌으로 바뀌면 뉴모피즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using skeuomorphism. Defining signals: controls rendered as simulated physical materials (e.g. leather, paper, brushed metal) with visible texture; a consistent lighting model — gloss highlights on raised elements, inner shadows on recessed fields; real-object metaphors for whole surfaces (a notepad drawn as ruled paper); crafted physical details like stitching or embossed text. Keep the specific material palette and density flexible. Use layered gradients with specular highlights, inset box-shadows for recessed fields, and subtle texture images or noise. Do not drift into neumorphism: the decisive difference is that skeuomorphic surfaces imitate real nameable materials, not one uniform soft-extruded surface. Preserve readable text contrast on textured backgrounds, visible controls and focus states, and reduced-motion support.",
      "ko": "스큐어모피즘 스타일을 적용합니다. 정의 신호: 가공된 질감(가죽, 종이, 헤어라인 금속 등)이 모사된 물리 재질 컨트롤, 돌출 요소의 광택 하이라이트와 오목한 필드의 내측 그림자가 어우러진 조명 모델, 줄노트나 서가 같은 실물 오브제 은유, 바느질선이나 양각 텍스트 같은 세공 디테일입니다. 수직 하이라이트 그래디언트, 오목 필드용 inset box-shadow, 미세 질감 노이즈를 활용합니다. 뉴모피즘으로 변형되지 않도록 주의하며, 질감 배경 위 텍스트 명암비 및 접근성 포커스 상태를 보장합니다."
    },
    "accessibility": {
      "en": "Text over textures (leather, linen, wood) needs a measured 4.5:1 contrast against the BUSIEST region of the texture, not its average color.\n\nDecorative bevels and gloss must not be the only pressed/unpressed signal — pair states with a color or content change.\n\nHeavy texture images add page weight; ship them compressed and let the UI stand without them.",
      "ko": "가죽, 리넨, 목재 등 질감 배경 위의 텍스트는 평균 색상이 아닌 가장 혼잡한 영역 기준으로 4.5:1 명암비를 측정해야 함.\n장식용 베벨과 광택을 눌림/안 눌림의 유일한 신호로 사용하지 말고 색상이나 내용 변화를 함께 제공할 것.\n무거운 질감 이미지는 용량을 증가시키므로 압축하여 제공하고, 이미지 없이도 UI 기본 구조가 유지되도록 구성함."
    },
    "a11yAndMisuse": {
      "en": "Text over textures (leather, linen, wood) needs a measured 4.5:1 contrast against the BUSIEST region of the texture, not its average color.\n\nDecorative bevels and gloss must not be the only pressed/unpressed signal — pair states with a color or content change.\n\nHeavy texture images add page weight; ship them compressed and let the UI stand without them.",
      "ko": "가죽, 리넨, 목재 등 질감 배경 위의 텍스트는 평균 색상이 아닌 가장 혼잡한 영역 기준으로 4.5:1 명암비를 측정해야 함.\n장식용 베벨과 광택을 눌림/안 눌림의 유일한 신호로 사용하지 말고 색상이나 내용 변화를 함께 제공할 것.\n무거운 질감 이미지는 용량을 증가시키므로 압축하여 제공하고, 이미지 없이도 UI 기본 구조가 유지되도록 구성함."
    },
    "origin": {
      "en": "As old as the GUI itself (the 1980s desktop metaphor), but the style label usually points at Apple's 2007–2012 era — iOS's leather calendars, felt Game Center, and reel-to-reel Podcasts app under Scott Forstall — ended publicly by iOS 7's flat redesign in 2013.",
      "ko": "GUI 역사의 시작(1980년대 데스크톱 은유)만큼 오래되었으나, 일반적으로 2007~2012년 스콧 포스톨 주도의 초기 iOS 및 Mac OS X 가죽/부직포 재질 디자인 트렌드를 의미합니다."
    },
    "meta": {}
  },
  {
    "slug": "neumorphism",
    "name": {
      "en": "Neumorphism",
      "ko": "뉴모피즘"
    },
    "tagline": {
      "en": "Neumorphism renders every control as if extruded from, or pressed into, the page itself: background and controls share one matte color, and shape comes entirely from a pair of soft shadows — light from the top-left, dark toward the bottom-right. Nothing has a border and nothing floats; the whole interface reads as one continuous molded surface. It photographs beautifully and tests poorly: the same softness that makes it distinctive erases the contrast real controls need.",
      "ko": "배경과 컨트롤이 단일 질감으로 연결되며 부드러운 양각 및 음각 그림자만으로 입체감을 연출하는 Soft UI 스타일"
    },
    "scope": {
      "en": "Scope: Covers the 2019–2021 'Soft UI' trend look. Its 3D-clay sibling with thicker, toy-like inflation is usually called claymorphism and is a separate (future) entry.",
      "ko": "범위: 2019~2021년 Soft UI 트렌드를 다룹니다. 장난감처럼 두껍게 부풀어 오르는 3D 클레이 스타일은 클레이모피즘 항목에서 다룹니다."
    },
    "aliases": {
      "en": [
        "soft buttons pushed out of the background",
        "everything looks like its molded from the same clay-ish surface",
        "the pillowy embossed buttons with two shadows",
        "controls that look stamped into the page",
        "that soft grey dashboard where buttons have no borders",
        "soft shadow UI",
        "extruded soft plastic interface",
        "soft embossing design"
      ],
      "ko": [
        "배경에서 들어올려진 부드러운 버튼",
        "동일한 점토 질감으로 함께 성형된 듯한 UI",
        "이중 그림자가 적용된 푹신한 양각 버튼",
        "화면에 도장처럼 찍혀 들어간 오목 컨트롤",
        "테두리 없이 그림자로만 구분되는 회색 다스보드",
        "소프트 UI",
        "부드러운 이중 그림자 버튼",
        "단일 무광 성형 디자인"
      ]
    },
    "signals": [
      {
        "id": "single-surface",
        "role": "defining",
        "name": {
          "en": "One continuous surface",
          "ko": "단일 연속 표면"
        },
        "facet": "surface",
        "description": {
          "en": "Controls and background share the SAME matte color — elements aren't placed on the page, they're molded from it.",
          "ko": "컨트롤과 배경이 동일한 무광 컬러를 공유함. 요소가 배치된 것이 아니라 표면 자체에서 성형되어 나온 형태임."
        }
      },
      {
        "id": "dual-shadows",
        "role": "defining",
        "name": {
          "en": "Dual soft shadows",
          "ko": "부드러운 이중 그림자"
        },
        "facet": "depth",
        "description": {
          "en": "Every raised element carries two blurred shadows: a light one up-left and a dark one down-right, as if lit from one soft corner light.",
          "ko": "모든 돌출 요소는 좌측 상단의 밝은 하이라이트 그림자와 우측 하단의 어두운 음영 그림자 한 쌍으로 입체감을 형성함."
        }
      },
      {
        "id": "pressed-inset",
        "role": "defining",
        "name": {
          "en": "Pressed (inset) states",
          "ko": "눌림(내측) 음각 상태"
        },
        "facet": "depth",
        "description": {
          "en": "Inputs and active states invert the shadow pair inward, so the element looks pressed INTO the surface rather than raised from it.",
          "ko": "입력 필드나 활성 상태에서는 이중 그림자를 내측(inset)으로 반전시켜 표면 아래로 눌려 들어간 형태를 표현함."
        }
      },
      {
        "id": "borderless-low-contrast",
        "role": "defining",
        "name": {
          "en": "No borders, whisper contrast",
          "ko": "테두리 없는 은은한 명암비"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges exist only where the shadows fade — no outlines, no strong fills; the whole UI sits within a narrow band of one hue.",
          "ko": "외곽선이나 강한 채우기 없이 그림자가 경계 역할을 하며, 전체 UI가 단일 색조의 좁은 명암 범위 내에 위치함."
        }
      },
      {
        "id": "soft-radii",
        "role": "supporting",
        "name": {
          "en": "Generous rounded corners",
          "ko": "풍부한 둥근 모서리"
        },
        "facet": "geometry",
        "description": {
          "en": "Large, soft radii everywhere — crisp corners would break the molded illusion.",
          "ko": "모든 모서리에 넉넉한 곡률(border-radius)을 적용함. 날카로운 모서리는 성형된 입체 착시를 방해함."
        }
      },
      {
        "id": "hue",
        "role": "variable",
        "name": {
          "en": "Any single base hue",
          "ko": "단일 베이스 색조"
        },
        "facet": "color",
        "description": {
          "en": "Classically a pale grey-blue (#e0e5ec), but the effect works on any light, low-saturation base; one saturated accent may survive for the primary action.",
          "ko": "전통적으로 연한 회푸른색(#e0e5ec)이 쓰이나 저채도 베이스라면 가능함. 주요 작업용으로 하나의 포인트를 둘 수 있음."
        }
      },
      {
        "id": "textures-images",
        "role": "avoid",
        "name": {
          "en": "Textures and materials",
          "ko": "질감 및 실물 재질 배제"
        },
        "facet": "imagery",
        "description": {
          "en": "Leather, paper, or gloss would reintroduce skeuomorphism — neumorphic surfaces are matte, uniform, and material-less.",
          "ko": "가죽, 종이, 광택 등의 표현은 스큐어모피즘으로 변질시키므로, 뉴모피즘 표면은 균일하고 무광이어야 함."
        }
      }
    ],
    "confusedWith": {
      "slug": "skeuomorphism",
      "name": "Skeuomorphism",
      "because": {
        "en": "This is neumorphism because the controls and the background are one material-less matte surface, shaped only by soft dual shadows.",
        "ko": "구별 이유: 컨트롤과 배경이 재질 구분 없는 단일 무광 표면이며 부드러운 이중 그림자로만 형태가 형성되므로 뉴모피즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become skeuomorphism if surfaces started imitating real nameable materials — leather grain, glossy plastic, brushed metal — with textures and object metaphors.",
        "ko": "변경 조건: 가죽 질감, 유광 플라스틱, 헤어라인 금속 등 명확한 실물 재질과 오브제 은유가 도입되면 스큐어모피즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using neumorphism (Soft UI). Defining signals: controls share the background's exact matte color; raised elements get dual soft shadows (light top-left, dark bottom-right); pressed/input states invert the shadows inward (inset); no borders anywhere; generous rounded corners. Keep the base hue flexible (classically a pale grey-blue like #e0e5ec) and allow one saturated accent for the primary action. Use CSS box-shadow pairs, e.g. raised: box-shadow: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); pressed: the same pair with inset. Do not drift into skeuomorphism; the decisive difference is that neumorphic surfaces are one uniform material-less matte — no textures, gloss, or imitated materials. Preserve readable text contrast, a visible non-shadow cue for focus and states (WCAG non-text contrast will fail on shadows alone), and reduced-motion support.",
      "ko": "뉴모피즘(Soft UI) 스타일을 적용합니다. 정의 신호: 컨트롤과 배경의 단일 무광 컬러 공유, 좌상단 밝은 그림자와 우하단 어두운 그림자의 이중 소프트 그림자, 눌림/입력 필드의 내측(inset) 그림자 반전, 외곽선 배제 및 풍부한 모서리 곡률입니다. CSS box-shadow 이중 조합을 활용하며, 단순 그림자에만 의존하지 않고 명확한 포커스 링과 상태 구분 요소를 제공하여 WCAG 접근성 기준을 충족합니다."
    },
    "accessibility": {
      "en": "The style's signature IS a WCAG problem: shadow-only boundaries rarely reach the 3:1 non-text contrast minimum — add a real focus ring and at least one non-shadow state cue (color, icon, label).\n\nDisabled vs enabled vs pressed all look similar in pure neumorphism; users with low vision may not find the controls at all. NN/g and the coining authors themselves warn against shipping it for functional UI.\n\nIf you keep it, reserve it for large decorative containers and give interactive elements stronger contrast than the style would like.",
      "ko": "뉴모피즘의 대표적 그림자 경계는 WCAG 비텍스트 명암비 기준(3:1)을 충족하기 어려움. 명확한 포커스 링과 하나 이상의 비그림자 상태 표시(색상, 아이콘, 라벨)를 필수 추가해야 함.\n비활성, 활성, 눌림 상태가 순수 뉴모피즘에서는 비슷하게 보이며 시력이 낮은 사용자는 컨트롤을 찾지 못할 수 있음.\n기능적 UI에는 사용을 자제하고, 대형 장식용 컨테이너에 한정하여 적용할 것."
    },
    "a11yAndMisuse": {
      "en": "The style's signature IS a WCAG problem: shadow-only boundaries rarely reach the 3:1 non-text contrast minimum — add a real focus ring and at least one non-shadow state cue (color, icon, label).\n\nDisabled vs enabled vs pressed all look similar in pure neumorphism; users with low vision may not find the controls at all. NN/g and the coining authors themselves warn against shipping it for functional UI.\n\nIf you keep it, reserve it for large decorative containers and give interactive elements stronger contrast than the style would like.",
      "ko": "뉴모피즘의 대표적 그림자 경계는 WCAG 비텍스트 명암비 기준(3:1)을 충족하기 어려움. 명확한 포커스 링과 하나 이상의 비그림자 상태 표시(색상, 아이콘, 라벨)를 필수 추가해야 함.\n비활성, 활성, 눌림 상태가 순수 뉴모피즘에서는 비슷하게 보이며 시력이 낮은 사용자는 컨트롤을 찾지 못할 수 있음.\n기능적 UI에는 사용을 자제하고, 대형 장식용 컨테이너에 한정하여 적용할 것."
    },
    "origin": {
      "en": "A Dribbble-era trend: Alexander Plyuto's 2019 'Skeuomorph Mobile Banking' shots went viral, Jason Kelley's comment coined the name, and Michal Malewicz's 2019–2020 articles defined and then warned about it. It stayed mostly a concept-shot style — few shipping products survived its accessibility costs.",
      "ko": "2019년 알렉산더 플류토(Alexander Plyuto)의 Dribbble 스큐어모프 모바일 뱅킹 컨셉 작품에서 시작되어 디자인 커뮤니티로 확산된 스타일입니다."
    },
    "meta": {}
  },
  {
    "slug": "glassmorphism",
    "name": {
      "en": "Glassmorphism",
      "ko": "글래스모피즘"
    },
    "tagline": {
      "en": "Glassmorphism builds interfaces from translucent, frosted panels: the background — usually something vivid — blurs through each surface, a thin light border catches the 'edge' of the glass, and layers stack with soft shadows to sell the depth. The style lives or dies by its backdrop: over a plain background the glass reads as plain grey; over a colorful gradient it glows.",
      "ko": "반투명한 프로스티드 글래스 패널 뒤로 배경 요소가 부드럽게 흐려져 투과되는 미학적 스타일"
    },
    "scope": {
      "en": "Scope: Covers the generic frosted-glass content style. Apple's system-wide adaptive material is Liquid Glass (its own entry), and the older macOS behind-window blur is vibrancy — a UI term, not a style.",
      "ko": "범위: 범용적인 프로스티드 글래스 패널 스타일을 다룹니다. 애플 시스템 차원의 적응형 재질인 리퀴드 글래스는 별도 항목입니다."
    },
    "aliases": {
      "en": [
        "frosted cards over colorful wallpaper",
        "the see-through blurry card effect",
        "panels that blur whatever is behind them",
        "milky transparent cards with a thin light border",
        "that translucent dashboard look with a gradient background",
        "frosted glass panel",
        "translucent blurry cards",
        "aurora glass design"
      ],
      "ko": [
        "화려한 배경 위의 프로스티드 글래스 카드",
        "투과되어 부드럽게 흐려지는 블러 카드 효과",
        "뒤쪽 요소가 반투명하게 투과되는 패널",
        "얇고 밝은 테두리를 가진 우유빛 반투명 카드",
        "그래디언트 배경 위 반투명 대시보드 뷰",
        "프로스티드 글래스",
        "반투명 유리 패널",
        "배경 투과 블러 카드"
      ]
    },
    "signals": [
      {
        "id": "frosted-panel",
        "role": "defining",
        "name": {
          "en": "Frosted translucent panels",
          "ko": "반투명 프로스티드 패널"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces are semi-transparent with a strong background blur — content behind is visible but softened, like frosted glass.",
          "ko": "강한 배경 블러가 적용된 반투명 표면으로, 뒤쪽 콘텐츠가 서리 낀 유리처럼 부드럽게 투과됨."
        }
      },
      {
        "id": "vivid-backdrop",
        "role": "defining",
        "name": {
          "en": "Vivid backdrop showing through",
          "ko": "투과되는 선명한 배경"
        },
        "facet": "color",
        "description": {
          "en": "A colorful gradient, photo, or aurora sits behind the glass; its color bleeds through every panel and IS most of the palette.",
          "ko": "화려한 그래디언트, 사진, 오로라 배경이 유리 뒤에 위치하며, 패널을 통해 색상이 배어 나와 전체 팔레트를 형성함."
        }
      },
      {
        "id": "glass-edge",
        "role": "defining",
        "name": {
          "en": "Thin light edge",
          "ko": "미세한 밝은 가장자리 테두리"
        },
        "facet": "geometry",
        "description": {
          "en": "A 1px semi-transparent white border (often brighter on top) catches the rim of each panel, separating glass from glass.",
          "ko": "1px의 반투명 흰색 테두리(상단이 더 밝음)가 유리의 단면 가장자리를 잡아주어 패널 간 경계를 구분함."
        }
      },
      {
        "id": "layered-depth",
        "role": "defining",
        "name": {
          "en": "Layered floating depth",
          "ko": "레이어드 부유 입체감"
        },
        "facet": "depth",
        "description": {
          "en": "Panels float above the backdrop and above each other with soft, wide shadows — the stack of sheets is part of the look.",
          "ko": "패널들이 부드럽고 넓은 그림자와 함께 배경 및 다른 패널 위에 떠 있어, 중첩된 레이어 구조가 입체감을 형성함."
        }
      },
      {
        "id": "white-ink",
        "role": "supporting",
        "name": {
          "en": "Light ink on glass",
          "ko": "글래스 위 밝은 텍스트"
        },
        "facet": "typography",
        "description": {
          "en": "Text and icons are usually white or near-white with slight transparency steps for hierarchy.",
          "ko": "텍스트와 아이콘은 주로 흰색 또는 완만한 투명도 단계를 가진 밝은색으로 위계 구조를 나타냄."
        }
      },
      {
        "id": "backdrop-content",
        "role": "variable",
        "name": {
          "en": "What the backdrop is",
          "ko": "가변적 배경 콘텐츠"
        },
        "facet": "imagery",
        "description": {
          "en": "Gradient mesh, aurora, photography, or brand color field — any vivid, soft backdrop works; the glass recipe stays the same.",
          "ko": "그래디언트 메시, 오로라, 사진, 브랜드 컬러 등 부드럽고 화려한 배경이라면 무엇이든 유리에 투과될 수 있음."
        }
      },
      {
        "id": "opaque-panels",
        "role": "avoid",
        "name": {
          "en": "Opaque or unblurred panels",
          "ko": "불투명 또는 블러 없는 패널 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Solid cards (or transparency without blur) lose the frosted read — transparency alone is just low opacity, not glass.",
          "ko": "블러 없는 단순 투명 패널이나 불투명 카드는 프로스티드 글래스의 질감을 상실하게 만듦."
        }
      }
    ],
    "confusedWith": {
      "slug": "liquid-glass",
      "name": "Liquid Glass",
      "because": {
        "en": "This is glassmorphism because the frosted treatment is a generic decorative skin — content cards, dashboards, whole panels can all be glass over a wallpaper you chose.",
        "ko": "구별 이유: 프로스티드 글래스 효과가 콘텐츠 카드, 대시보드, 전면 패널 등 배경 위에 배치되는 범용 장식 레이어로 사용되므로 글래스모피즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Liquid Glass if the glass were reserved for the CONTROL layer — bars, buttons, navigation floating above app content — using Apple's adaptive material that lenses and re-tints from whatever scrolls beneath it.",
        "ko": "변경 조건: 글래스 재질이 콘텐츠 레이어가 아닌 앱 상단에 부유하는 제어층(툴바, 버튼, 내비게이션)에만 한정되고 하단 스크롤 콘텐츠에 따라 굴절/색상이 적응형으로 변화하면 리퀴드 글래스가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using glassmorphism. Defining signals: semi-transparent panels with a strong backdrop blur; a vivid gradient or photographic backdrop whose color bleeds through every panel; a thin 1px semi-transparent white border on each panel edge; layered floating depth with soft wide shadows. Keep the backdrop's specific colors and imagery flexible. Use CSS backdrop-filter: blur(16px) with background: rgba(255,255,255,0.12) (or a dark equivalent) and border: 1px solid rgba(255,255,255,0.25). Do not drift into Apple's Liquid Glass; the decisive difference is that glassmorphism is a decorative skin for any surface including content cards, while Liquid Glass reserves glass for the floating control layer above content. Preserve readable text over every region the backdrop can produce (add a contrast scrim if needed), visible controls and focus states, and reduced-motion/reduced-transparency fallbacks.",
      "ko": "글래스모피즘 스타일을 적용합니다. 정의 신호: 강한 배경 블러(backdrop-filter: blur)가 적용된 반투명 패널, 투과되는 화려한 배경, 유리 단면을 잡는 1px 반투명 흰색 테두리, 부드러운 넓은 그림자의 레이어드 입체감입니다. CSS backdrop-filter: blur(16px), background: rgba(255,255,255,0.12), border: 1px solid rgba(255,255,255,0.25)를 사용합니다. 애플 리퀴드 글래스와 달리 콘텐츠 카드를 포함한 범용 표면에 적용 가능합니다. 배경 변화에 따른 텍스트 명암비를 스크림으로 확보하고 투명도 줄이기 폴백을 제공합니다."
    },
    "accessibility": {
      "en": "Text contrast over glass is unstable: the backdrop moves and varies, so measure against the worst region or add a translucent contrast scrim behind text.\n\nHonor prefers-reduced-transparency (and OS 'Reduce transparency') with near-opaque fallbacks.\n\nbackdrop-filter is expensive on low-end devices; the layout must survive its absence — never hide content behind a failed blur.",
      "ko": "유리 효과 위 텍스트 명암비는 배경 이동에 따라 변하므로 최악의 영역 기준으로 측정하거나 반투명 스크림을 추가할 것.\nprefers-reduced-transparency 설정 및 OS 투명도 줄이기 옵션에 대응하는 불투명 폴백을 제공함.\nbackdrop-filter는 저사양 기기에서 높은 비용이 발생하므로 블러가 미작동하더라도 콘텐츠가 정상 노출되어야 함."
    },
    "a11yAndMisuse": {
      "en": "Text contrast over glass is unstable: the backdrop moves and varies, so measure against the worst region or add a translucent contrast scrim behind text.\n\nHonor prefers-reduced-transparency (and OS 'Reduce transparency') with near-opaque fallbacks.\n\nbackdrop-filter is expensive on low-end devices; the layout must survive its absence — never hide content behind a failed blur.",
      "ko": "유리 효과 위 텍스트 명암비는 배경 이동에 따라 변하므로 최악의 영역 기준으로 측정하거나 반투명 스크림을 추가할 것.\nprefers-reduced-transparency 설정 및 OS 투명도 줄이기 옵션에 대응하는 불투명 폴백을 제공함.\nbackdrop-filter는 저사양 기기에서 높은 비용이 발생하므로 블러가 미작동하더라도 콘텐츠가 정상 노출되어야 함."
    },
    "origin": {
      "en": "The effect is decades old — Windows Vista's Aero glass (2006), iOS 7's blur layers (2013), macOS vibrancy — but the style label dates to Michal Malewicz's 2020 article, after the look spread through Dribbble and Big Sur-era redesigns.",
      "ko": "2006년 윈도우 비스타의 에어로 글래스 및 iOS 7의 블러 레이어에서 출발하여 2020년 맥OS 빅서(Big Sur) 출시와 함께 현대적 글래스모피즘 트렌드로 재정립되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "liquid-glass",
    "name": {
      "en": "Liquid Glass",
      "ko": "리퀴드 글래스"
    },
    "tagline": {
      "en": "Liquid Glass is Apple's adaptive material for controls and navigation: toolbars, tab bars, buttons, and sliders render as lens-like glass that floats in its own layer above app content, refracting what scrolls beneath and re-tinting itself for legibility in light and dark contexts. It is functional, not decorative — Apple applies it to the control layer and keeps content itself opaque. Capsule shapes and concentric corner radii are part of the geometry.",
      "ko": "앱 콘텐츠 위에 유기적 입체층으로 부유하며 실시간 반사와 굴절을 연출하는 애플 표준 적응형 재질"
    },
    "scope": {
      "en": "Scope: 'SwiftUI style' is not a style — SwiftUI is Apple's UI framework. Apps built with it currently LOOK like Liquid Glass; before 2025 they had the flatter platform-native Apple look, and early Mac OS X's candy-and-pinstripes look was Aqua. If someone says 'make it look like SwiftUI', they usually mean this entry.",
      "ko": "범위: SwiftUI 프레임워크 자체가 아니라, 애플이 발표한 액체 유 유리 제어층 디자인 언어를 다룹니다."
    },
    "aliases": {
      "en": [
        "the new apple design where buttons look like water drops",
        "the swiftui look",
        "ios buttons that look like real glass and bend whats behind them",
        "apple's new transparent bubbly toolbar style",
        "the glass tab bar that floats over the app content",
        "apple fluid glass controls",
        "visionOS glass material",
        "refractive lens UI"
      ],
      "ko": [
        "물방울처럼 반사되는 차세대 애플 버튼 디자인",
        "SwiftUI 최신 디자인 가이드 스타일",
        "배경 요소를 유기적으로 굴절시키는 iOS 유리 버튼",
        "애플의 입체 투명 툴바 및 캡슐 내비게이션",
        "콘텐츠 위에 부유하는 글래스 탭 바",
        "애플 리퀴드 글래스",
        "WWDC25 유기적 유리 재질",
        "적응형 렌즈 툴바"
      ]
    },
    "signals": [
      {
        "id": "control-layer",
        "role": "defining",
        "name": {
          "en": "Glass = the control layer",
          "ko": "제어 레이어에 한정된 유리 재질"
        },
        "facet": "layout",
        "description": {
          "en": "Only controls and navigation are glass — bars, buttons, sliders float above the app; the content beneath stays opaque and full-contrast.",
          "ko": "내비게이션 바, 버튼, 슬라이더 등 제어 요소만 유리 재질이며, 하단 콘텐츠는 불투명하고 가독성을 유지함."
        }
      },
      {
        "id": "lensing",
        "role": "defining",
        "name": {
          "en": "Lensing, not just blur",
          "ko": "단순 블러를 넘어선 렌즈 굴절 효과"
        },
        "facet": "depth",
        "description": {
          "en": "The material behaves like a real lens: it bends and concentrates light from what's beneath, with bright edge highlights — richer than a flat frosted blur.",
          "ko": "실제 광학 렌즈처럼 하단 빛을 굴절시키고 가장자리 반사광 하이라이트를 형성하여 단순 평면 블러보다 풍부한 입체감을 연출함."
        }
      },
      {
        "id": "adaptive-tint",
        "role": "defining",
        "name": {
          "en": "Adaptive self-tinting",
          "ko": "적응형 자체 색조 조절"
        },
        "facet": "color",
        "description": {
          "en": "The glass continuously re-tints from the content scrolling under it and flips between light and dark appearance on its own to stay legible.",
          "ko": "하단으로 스크롤되는 콘텐츠의 색상에 반응하여 유리의 틴트와 라이트/다크 모드가 가독성을 위해 실시간 자동 전환됨."
        }
      },
      {
        "id": "capsule-concentric",
        "role": "defining",
        "name": {
          "en": "Capsule and concentric geometry",
          "ko": "캡슐 및 동심원 기하학 구조"
        },
        "facet": "geometry",
        "description": {
          "en": "Controls tend to capsules; nested corners share a common center (concentric radii), so the glass shapes sit optically flush inside their containers.",
          "ko": "컨트롤은 캡슐 형태를 띠며, 중첩된 모서리가 동일한 중심(동심원 곡률)을 공유하여 광학적으로 완벽한 일치감을 줌."
        }
      },
      {
        "id": "morphing-controls",
        "role": "supporting",
        "name": {
          "en": "Controls morph fluidly",
          "ko": "유기적 변형 및 병합 모션"
        },
        "facet": "motion",
        "description": {
          "en": "Glass elements merge, split, and reshape as context changes — a tab bar shrinking on scroll, a button expanding into a menu.",
          "ko": "맥락 변화에 따라 탭 바가 축소되거나 버튼이 메뉴로 확장되는 등 유체처럼 결합되고 분리되는 유기적 변화를 보여줌."
        }
      },
      {
        "id": "platform-scope",
        "role": "variable",
        "name": {
          "en": "Underlying content",
          "ko": "자유로운 하단 콘텐츠"
        },
        "facet": "imagery",
        "description": {
          "en": "Anything can sit beneath the glass — photos, maps, lists; the material adapts to it rather than requiring a curated backdrop.",
          "ko": "사진, 지도, 리스트 등 어떠한 콘텐츠 위에서도 제어층 유리가 가독성을 유지하며 적응함."
        }
      },
      {
        "id": "glass-content",
        "role": "avoid",
        "name": {
          "en": "Glass content cards",
          "ko": "콘텐츠 카드의 유리화 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Making content itself translucent — glass cards on glass backgrounds — is exactly what Apple's guidance avoids; that's generic glassmorphism, and it costs legibility.",
          "ko": "콘텐츠 본문 자체를 반투명 유리가 되게 만드는 것은 애플 가이드라인에서 경계하는 지점이며, 가독성을 저해하는 원인이 됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "glassmorphism",
      "name": "Glassmorphism",
      "because": {
        "en": "This is Liquid Glass because the glass is a functional system material reserved for controls and navigation floating above opaque content, adapting its own tint for legibility.",
        "ko": "구별 이유: 유리가 불투명한 콘텐츠 위에 부유하는 제어 및 내비게이션 레이어에 한정된 시스템 적응형 재질이므로 리퀴드 글래스에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become glassmorphism if the frosted treatment spread to the content itself — translucent cards over a decorative wallpaper, blur as a skin rather than a control layer.",
        "ko": "변경 조건: 유리 질감이 제어층을 넘어 콘텐츠 카드나 전체 배경으로 확장되는 범용 장식 스킨으로 사용되면 글래스모피즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface in the spirit of Apple's Liquid Glass. Defining signals: glass is reserved for the floating control layer (toolbars, tab bars, buttons) above opaque content; the material lenses what's beneath it — blur plus refraction-like edge highlights, not flat frost; controls adapt their tint to stay legible over changing content; capsule shapes with concentric corner radii. Keep the underlying content unrestricted. On Apple platforms use the real APIs — SwiftUI .glassEffect(), glassEffect(.regular, in: .capsule), and standard bars get it automatically; on the web approximate with backdrop-filter: blur + saturate, layered inner highlights, and capsule radii. Do not drift into generic glassmorphism; the decisive difference is that content never becomes glass — only controls float as glass above it. Preserve legibility over every content region (the real material self-adapts — your approximation must too), visible focus states, and honor Reduce Transparency / Reduce Motion.",
      "ko": "애플 리퀴드 글래스 스타일을 적용합니다. 정의 신호: 불투명 콘텐츠 위에 부유하는 제어 레이어(툴바, 탭 바, 버튼)의 유리 적용, 단순 블러를 넘어선 광학 렌즈 굴절 및 가장자리 하이라이트, 하단 스크롤 요소에 맞춘 적응형 틴트 조절, 캡슐 및 동심원 모서리 기하학 구조입니다. SwiftUI의 .glassEffect()를 활용하거나 웹에서는 backdrop-filter: blur + saturate, 내측 이중 하이라이트로 모사합니다. 중요 텍스트 명암비(4.5:1) 및 투명도/모션 줄이기 옵션을 준수합니다."
    },
    "accessibility": {
      "en": "Apple's material self-adjusts for legibility — a hand-rolled web imitation does not; test text over the worst content that can scroll beneath and add contrast treatment.\n\nHonor Reduce Transparency (near-opaque fallback) and Reduce Motion (disable morphing).\n\nNever place critical text directly on imitation glass without a measured 4.5:1 against live worst-case backgrounds.",
      "ko": "실시간 배경 변화에 대응하여 텍스트 하단 반투명 패널을 배치하고 최악의 경우에도 4.5:1 명암비를 보장함.\n투명도 줄이기(Reduce Transparency) 및 모션 줄이기(Reduce Motion) 옵션을 준수함.\n모의 글래스 재질 위에 명암비 검증 없이 중요 텍스트를 직접 배치하지 않음."
    },
    "a11yAndMisuse": {
      "en": "Apple's material self-adjusts for legibility — a hand-rolled web imitation does not; test text over the worst content that can scroll beneath and add contrast treatment.\n\nHonor Reduce Transparency (near-opaque fallback) and Reduce Motion (disable morphing).\n\nNever place critical text directly on imitation glass without a measured 4.5:1 against live worst-case backgrounds.",
      "ko": "실시간 배경 변화에 대응하여 텍스트 하단 반투명 패널을 배치하고 최악의 경우에도 4.5:1 명암비를 보장함.\n투명도 줄이기(Reduce Transparency) 및 모션 줄이기(Reduce Motion) 옵션을 준수함.\n모의 글래스 재질 위에 명암비 검증 없이 중요 텍스트를 직접 배치하지 않음."
    },
    "origin": {
      "en": "Introduced by Apple at WWDC 2025 as the first unified design language across iPhone, iPad, Mac, Watch, and TV — Apple credits visionOS's glass optics as the inspiration, and ships it as a system material with SwiftUI/UIKit/AppKit APIs rather than a mere visual theme.",
      "ko": "애플이 WWDC 2025에서 iOS, iPadOS, macOS 전반을 아우르는 차세대 통합 디자인 언어로 발표했습니다."
    },
    "meta": {}
  },
  {
    "slug": "web-brutalism",
    "name": {
      "en": "Web Brutalism",
      "ko": "웹 브루탈리즘"
    },
    "tagline": {
      "en": "Web Brutalism treats the browser's own materials as the finished surface: default or system fonts, unstyled-looking links, visible document structure, plain borders and horizontal rules, and density over polish. Nothing pretends to be anything else — no gradients imitating glass, no shadows imitating depth. At its best it's honest and fast (Craigslist, Hacker News, early-web personal sites); at its worst the label gets stretched over anything unpolished.",
      "ko": "장식적 그래픽이나 날조된 그림자를 배제하고 브라우저 기본 요소와 시스템 폰트를 있는 그대로 드러내는 원시적 스타일"
    },
    "scope": {
      "en": "Scope: Distinct from architectural Brutalism (exposed concrete and mass — the analogy's source), and from Neobrutalism (a styled, saturated, thick-border graphic look that is anything but default). The nostalgic table-and-GIF personal-site look is Vernacular Web, a separate (future) entry.",
      "ko": "범위: 건축 브루탈리즘 및 볼드한 원색 테두리의 네오브루탈리즘과 구분되는, 웹 원형의 순수한 날것 구성을 의미합니다."
    },
    "aliases": {
      "en": [
        "ugly raw html website",
        "site that looks like no css was written",
        "just times new roman and blue links",
        "the bare-bones craigslist look",
        "web page that shows its structure with no decoration",
        "pure unstyled html",
        "raw default browser aesthetics",
        "craigslist style"
      ],
      "ko": [
        "날것 그대로의 순수 HTML 웹사이트",
        "CSS 스타일이 전혀 안 적용된 듯한 사이트",
        "Times New Roman 폰트와 파란색 밑줄 링크",
        "크레이그리스트(Craigslist) 느낌의 원형 인터페이스",
        "장식 없이 문서 구조만 노출하는 웹페이지",
        "순수 HTML 날것 웹",
        "브라우저 기본 서체 스타일",
        "장식 없는 원형 UI"
      ]
    },
    "signals": [
      {
        "id": "browser-defaults",
        "role": "defining",
        "name": {
          "en": "Browser-default materials",
          "ko": "브라우저 기본 재질"
        },
        "facet": "typography",
        "description": {
          "en": "Times/system serif or monospace, default-blue underlined links, visited-purple — the stack looks unstyled even when it's deliberate.",
          "ko": "Times/시스템 바탕체 또는 고정폭 폰트, 파란색 밑줄 링크, 방문한 보라색 링크 등 기본 스타일을 있는 그대로 노출함."
        }
      },
      {
        "id": "exposed-structure",
        "role": "defining",
        "name": {
          "en": "Exposed document structure",
          "ko": "드러난 문서 구조선"
        },
        "facet": "layout",
        "description": {
          "en": "The page reads as a document: headings, lists, tables, and <hr> dividers in source order — structure IS the layout.",
          "ko": "제목, 리스트, 테이블, <hr> 구분선이 소스 순서대로 노출되는 문서 중심 구조 자체가 레이아웃이 됨."
        }
      },
      {
        "id": "no-decoration",
        "role": "defining",
        "name": {
          "en": "Zero decorative rendering",
          "ko": "장식적 렌더링 전무"
        },
        "facet": "depth",
        "description": {
          "en": "No shadows, gradients, rounded corners, or imitation materials; at most 1px solid borders. Flat white (or single-color) ground.",
          "ko": "그림자, 그래디언트, 둥근 모서리, 모사 재질을 전면 배제하며 최대로 허용되는 장식은 1px 실선 테두리와 단색 바탕임."
        }
      },
      {
        "id": "utility-density",
        "role": "defining",
        "name": {
          "en": "Utility-first density",
          "ko": "실용성 중심의 고밀도"
        },
        "facet": "layout",
        "description": {
          "en": "Information is packed tight and loads instantly — the aesthetic argument is speed and honesty, not beauty.",
          "ko": "정보가 조밀하게 배치되어 즉시 로드되며, 장식적 미학보다는 빠른 속도와 솔직함에 미학적 가치를 둠."
        }
      },
      {
        "id": "mono-accents",
        "role": "variable",
        "name": {
          "en": "Monospace / all-caps accents",
          "ko": "등폭 폰트 및 대문자 강조"
        },
        "facet": "typography",
        "description": {
          "en": "Many brutalist sites swap to monospace or shouting caps for flavor; others stay pure serif. Both count.",
          "ko": "등폭 폰트(Monospace)나 모두 대문자로 작성된 서체를 포인트 요소로 활용함."
        }
      },
      {
        "id": "styled-rawness",
        "role": "avoid",
        "name": {
          "en": "Styled 'rawness'",
          "ko": "꾸며진 날것의 느낌 지양"
        },
        "facet": "color",
        "description": {
          "en": "Saturated color blocks, thick designed borders, and hard offset shadows are a costume of rawness — that's Neobrutalism.",
          "ko": "강렬한 원색 블록이나 두꺼운 테두리, 오프셋 그림자는 브루탈리즘의 탈을 쓴 네오브루탈리즘 영역임."
        }
      }
    ],
    "confusedWith": {
      "slug": "neobrutalism",
      "name": "Neobrutalism",
      "because": {
        "en": "This is Web Brutalism because the page is genuinely built from browser defaults — system type, blue links, bare structure, no decorative rendering at all.",
        "ko": "구별 이유: 시스템 서체, 파란색 기본 링크, 순수 문서 구조 등 브라우저의 기본 요소(Defaults)만으로 솔직하게 구성되어 있으므로 웹 브루탈리즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Neobrutalism if the rawness were styled: saturated color blocks, thick uniform black borders, hard offset shadows, and chunky display type — a designed graphic language, not defaults.",
        "ko": "변경 조건: 날것의 느낌이 원색 컬러 블록, 두꺼운 검은 테두리, 날카로운 오프셋 그림자, 볼드한 그래픽 타이포그래피 등으로 의도적으로 디자인되면 네오브루탈리즘이 됨."
      }
    },
    "brief": {
      "en": "Create the page using strict Web Brutalism. Defining signals: browser-default materials (Times/system serif or monospace, default-blue underlined links); exposed document structure — headings, lists, tables, horizontal rules in source order; zero decorative rendering (no shadows, gradients, or rounded corners; at most 1px solid borders on a plain ground); utility-first density that loads instantly. Keep monospace vs serif and all-caps accents flexible. Use semantic HTML with minimal CSS — default UA styles are the design; resist resets that soften them. Do not drift into Neobrutalism; the decisive difference is that nothing here is styled to look raw — saturated blocks, thick designed borders, and offset shadows would make it a graphic costume. Preserve readable text sizes, focus visibility, and honest link affordances (underlines stay).",
      "ko": "엄격한 웹 브루탈리즘 스타일을 적용합니다. 정의 신호: 브라우저 기본 서체(Times/시스템 바탕체/등폭 폰트)와 기본 파란색 밑줄 링크, 제목/테이블/<hr> 구분선 중심의 명확한 문서 구조, 그림자나 그래디언트 없는 0% 장식적 렌더링, 빠른 로딩과 데이터 밀도입니다. 꾸며진 날것의 느낌(네오브루탈리즘)으로 변질되지 않도록 의도적인 스타일링을 배제하며, 키보드 포커스링과 밑줄 어포던스를 철저히 유지합니다."
    },
    "accessibility": {
      "en": "Brutalism is accidentally accessible — semantic structure, honest links, no contrast-eating decoration — as long as text sizes stay readable and density leaves tap targets big enough.\n\nDefault-blue on white passes contrast; keep the default focus outline (removing it would be the one truly anti-brutalist move).\n\nDense tables need proper headers/scope for screen readers — visual rawness doesn't excuse structural rawness.",
      "ko": "시맨틱 구조와 명확한 링크를 갖춘 브루탈리즘은 접근성이 우수함. 단, 텍스트 크기가 읽기 쉬워야 하며 터치 영역이 충분해야 함.\n기본 포커스 외곽선(focus outline)을 제거하지 말고 유지할 것.\n조밀한 데이터 테이블은 스크린 리더를 위한 올바른 헤더와 scope 속성을 갖추어야 함."
    },
    "a11yAndMisuse": {
      "en": "Brutalism is accidentally accessible — semantic structure, honest links, no contrast-eating decoration — as long as text sizes stay readable and density leaves tap targets big enough.\n\nDefault-blue on white passes contrast; keep the default focus outline (removing it would be the one truly anti-brutalist move).\n\nDense tables need proper headers/scope for screen readers — visual rawness doesn't excuse structural rawness.",
      "ko": "시맨틱 구조와 명확한 링크를 갖춘 브루탈리즘은 접근성이 우수함. 단, 텍스트 크기가 읽기 쉬워야 하며 터치 영역이 충분해야 함.\n기본 포커스 외곽선(focus outline)을 제거하지 말고 유지할 것.\n조밀한 데이터 테이블은 스크린 리더를 위한 올바른 헤더와 scope 속성을 갖추어야 함."
    },
    "origin": {
      "en": "Named by analogy to architecture's béton brut ('raw concrete'); the web usage spread in the mid-2010s through Pascal Deville's brutalistwebsites.com and essays like Smashing Magazine's 'split personality of brutalist web development', as a reaction against the sameness of polished startup sites.",
      "ko": "건축의 베통 브뤼(béton brut, 날것의 콘크리트)에서 유래되었으며, 크레이그리스트, 해커뉴스 등의 기능주의 웹 사이트 스타일을 일컫습니다."
    },
    "meta": {}
  },
  {
    "slug": "neobrutalism",
    "name": {
      "en": "Neobrutalism",
      "ko": "네오브루탈리즘"
    },
    "tagline": {
      "en": "Neobrutalism is a designed graphic language: flat, saturated color blocks outlined in thick black strokes, with hard offset shadows — solid black rectangles displaced a few pixels, no blur — and chunky display type. Elements read like stickers or risograph prints; pressing a button often physically 'pushes' it into its shadow. Despite the name it is the opposite of raw: every border and shadow is a deliberate illustration choice.",
      "ko": "두꺼운 검은색 윤곽선, 선명한 고대비 원색, 오프셋 그림자로 유쾌하고 강렬한 인상을 주는 현대적 브루탈리즘"
    },
    "scope": {
      "en": "Scope: Takes brutalism's name but not its method — see Web Brutalism for the genuinely-raw sibling, and architectural Brutalism (exposed concrete) for where the word started. Memphis-style geometric confetti often decorates neobrutalist pages but is its own movement.",
      "ko": "범위: 2020년대 Figma 및 SaaS 서비스에서 큰 인기를 얻은 고대비 그래픽 스타일입니다."
    },
    "aliases": {
      "en": [
        "bright blocks with black outlines and hard shadows",
        "buttons with the thick black border and the solid shadow that doesn't blur",
        "that yellow and black sticker-looking website style",
        "cartoonish chunky ui with bold borders",
        "the gumroad-looking bold flat style",
        "thick black border saturated blocks",
        "hard offset shadow UI",
        "gumroad style"
      ],
      "ko": [
        "두꺼운 검은 테두리와 강렬한 선명 컬러 블록",
        "블러 없는 단색 그림자와 두꺼운 버튼 테두리",
        "노란색과 검은색 스티커 감성의 웹 디자인",
        "만화 같은 굵은 윤곽선의 입체 UI",
        "Gumroad 스타일의 볼드한 플랫 그래픽",
        "두꺼운 윤곽선과 오프셋 그림자",
        "원색 컬러 블록 디자인",
        "검은 테두리 강렬한 UI"
      ]
    },
    "signals": [
      {
        "id": "thick-outlines",
        "role": "defining",
        "name": {
          "en": "Thick black outlines",
          "ko": "두꺼운 검은색 윤곽선"
        },
        "facet": "geometry",
        "description": {
          "en": "Every element — cards, buttons, inputs, even images — wears a uniform 2–3px solid black border, like an inked comic panel.",
          "ko": "모든 카드, 버튼, 입력 필드, 이미지에 만화 컷처럼 일정한 2~3px 두께의 단색 검은 테두리를 적용함."
        }
      },
      {
        "id": "hard-shadows",
        "role": "defining",
        "name": {
          "en": "Hard offset shadows",
          "ko": "선명한 오프셋 단색 그림자"
        },
        "facet": "depth",
        "description": {
          "en": "Shadows are solid black shapes displaced down-right with ZERO blur — graphic depth, not simulated lighting. Pressing collapses the offset.",
          "ko": "블러가 전혀 없는 100% 단색 검은 그림자가 우하단으로 비껴 배치됨. 클릭 시 오프셋이 눌리며 수축함."
        }
      },
      {
        "id": "saturated-blocks",
        "role": "defining",
        "name": {
          "en": "Saturated flat color blocks",
          "ko": "고채도 플랫 컬러 블록"
        },
        "facet": "color",
        "description": {
          "en": "Unapologetic fills — yellow, hot pink, lime, cyan — laid flat next to each other on a cream or white ground; no gradients.",
          "ko": "노랑, 핫핑크, 라임, 사이언 등 채도가 높은 플랫 컬러 면을 그래디언트 없이 선명하게 배치함."
        }
      },
      {
        "id": "chunky-type",
        "role": "defining",
        "name": {
          "en": "Chunky display type",
          "ko": "묵직한 굵은 디스플레이 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Bold, blocky grotesks or display faces, often oversized; body text stays plain so the headings can shout.",
          "ko": "굵고 힘있는 고딕/디스플레이 서체를 큼직하게 배치하여 제목의 전달력을 극대화함."
        }
      },
      {
        "id": "sticker-shapes",
        "role": "supporting",
        "name": {
          "en": "Sticker shapes and doodles",
          "ko": "스티커 형태 및 낙서 요소"
        },
        "facet": "imagery",
        "description": {
          "en": "Stars, blobby badges, arrows, and squiggles with the same black outlines, scattered like stickers.",
          "ko": "별 모양, 아메바 배지, 화살표, 물결선 등의 요소를 검은 테두리와 함께 스티커처럼 무작위 배치함."
        }
      },
      {
        "id": "press-interaction",
        "role": "supporting",
        "name": {
          "en": "Push-into-shadow presses",
          "ko": "그림자로 눌려 들어가는 인터랙션"
        },
        "facet": "motion",
        "description": {
          "en": "Hover/active states translate the element toward its shadow, as if pressing a physical sticker flat.",
          "ko": "클릭/활성 상태 시 요소가 그림자 위치로 수직 이동(transform: translate)하여 스티커가 눌리는 느낌을 연출함."
        }
      },
      {
        "id": "palette-choice",
        "role": "variable",
        "name": {
          "en": "Which loud palette",
          "ko": "다채로운 강렬한 컬러 조합"
        },
        "facet": "color",
        "description": {
          "en": "Yellow-black is the cliché but any high-saturation set works; the borders and shadows carry the style, not one specific hue.",
          "ko": "노랑-검정이 대표적이나 고채도 컬러 세트라면 무엇이든 성립하며 스타일을 결정짓는 핵심은 테두리와 그림자임."
        }
      },
      {
        "id": "soft-rendering",
        "role": "avoid",
        "name": {
          "en": "Soft rendering",
          "ko": "부드러운 렌더링 지양"
        },
        "facet": "depth",
        "description": {
          "en": "Blurred shadows, gradients, or translucency dissolve the inked-print effect instantly — softness is the enemy.",
          "ko": "블러 그림자, 그래디언트, 반투명 효과는 잉크 컷 느낌을 해치므로 네오브루탈리즘에서 배제됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is Neobrutalism because the rawness is a designed costume: uniform thick borders, hard offset shadows, and saturated blocks are deliberate graphic choices.",
        "ko": "구별 이유: 날것의 느낌이 유니폼 두께의 두꺼운 검은 테두리, 단색 오프셋 그림자, 고채도 컬러 블록이라는 철저히 의도된 그래픽 연출로 구현되었으므로 네오브루탈리즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Web Brutalism if the styling were removed rather than exaggerated — browser-default type, plain blue links, bare structure, and no decorative rendering at all.",
        "ko": "변경 조건: 의도적 스타일상의 두꺼운 테두리와 오프셋 그림자가 사라지고 브라우저 기본 서체와 링크, 순수 문서 구조만 남게 되면 웹 브루탈리즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Neobrutalism. Defining signals: a uniform 2–3px solid black border on every element; hard offset shadows — solid black, displaced ~4px down-right, zero blur (box-shadow: 4px 4px 0 #000); flat saturated color blocks (e.g. yellow, hot pink, lime) on a cream or white ground with no gradients; bold chunky display type for headings. Keep the specific palette and any sticker doodads flexible. Active states translate the element into its shadow (transform: translate(4px,4px) with the shadow removed). Do not drift into Web Brutalism; the decisive difference is that this look is heavily styled — removing the borders, shadows, and color in favor of browser defaults would make it brutalist proper. Preserve 4.5:1 text contrast on every colored block (black text on saturated fills usually passes; white on yellow never does), visible focus indicators distinct from the decorative borders, and reduced-motion support for press animations.",
      "ko": "네오브루탈리즘 스타일을 적용합니다. 정의 신호: 2~3px 균일한 단색 검은 테두리(stroke), 블러가 없는 빗겨난 형태의 100% 오프셋 단색 그림자(box-shadow: 4px 4px 0 #000), 크림/흰색 바탕 위의 고채도 플랫 컬러 블록, 굵고 강렬한 디스플레이 서체입니다. 클릭 시 오프셋 위치로 수축하는 transform: translate(4px, 4px) 모션을 활용합니다. 고채도 배경 위 검은색 텍스트 명암비를 필히 검증하고, 장식용 검은 테두리와 구별되는 포커스 표시기를 선명하게 제공합니다."
    },
    "accessibility": {
      "en": "Saturated fills need checked text contrast: black ink on yellow/lime passes easily; white ink on yellow, pink, or cyan usually fails 4.5:1.\n\nThe decorative black borders look like focus rings — give keyboard focus a distinct, higher-visibility indicator (e.g. an offset outline in a reserved color).\n\nNN/g's caution: the loudness taxes readability at length — keep body text plain and reserve the shout for structure and actions.",
      "ko": "채도가 높은 채우기 색상은 텍스트 명암비를 필히 점검해야 함. 검은색 글자는 노랑/라임 배경에서 쉽게 통과하지만 흰색 글자는 핑크, 사이언 등에서 4.5:1에 실패할 수 있음.\n장식용 검은색 테두리가 포커스 링처럼 보일 수 있으므로 키보드 포커스에는 오프셋이 적용된 구별되는 표시기를 사용할 것.\n과도한 시각적 강도는 장시간 독서 시 피로를 유발하므로 본문은 평범하게 유지하고 구조 및 작업 버튼에 강조 적용함."
    },
    "a11yAndMisuse": {
      "en": "Saturated fills need checked text contrast: black ink on yellow/lime passes easily; white ink on yellow, pink, or cyan usually fails 4.5:1.\n\nThe decorative black borders look like focus rings — give keyboard focus a distinct, higher-visibility indicator (e.g. an offset outline in a reserved color).\n\nNN/g's caution: the loudness taxes readability at length — keep body text plain and reserve the shout for structure and actions.",
      "ko": "채도가 높은 채우기 색상은 텍스트 명암비를 필히 점검해야 함. 검은색 글자는 노랑/라임 배경에서 쉽게 통과하지만 흰색 글자는 핑크, 사이언 등에서 4.5:1에 실패할 수 있음.\n장식용 검은색 테두리가 포커스 링처럼 보일 수 있으므로 키보드 포커스에는 오프셋이 적용된 구별되는 표시기를 사용할 것.\n과도한 시각적 강도는 장시간 독서 시 피로를 유발하므로 본문은 평범하게 유지하고 구조 및 작업 버튼에 강조 적용함."
    },
    "origin": {
      "en": "Emerged around 2020–2022 in product marketing and portfolio sites (Gumroad's 2021 redesign is the era's poster child), catalogued by NN/g in 2023 as a reaction to soft, same-looking SaaS design — flat design turned up to eleven with comic-book construction.",
      "ko": "Gumroad의 2021년 리브랜딩을 기점으로 디자이너들 사이에서 확산된 비주얼 트렌드입니다."
    },
    "meta": {}
  },
  {
    "slug": "y2k",
    "name": {
      "en": "Y2K Digital Aesthetic",
      "ko": "Y2K 디지털 에스테틱"
    },
    "tagline": {
      "en": "The Y2K digital aesthetic is millennium-turn techno-optimism rendered literally: liquid chrome and brushed metal, glossy gel and plastic surfaces, iridescent blue-silver palettes, orbs and blobs, wide techno type, and rendered 3D everything. It's the look of a future imagined through new consumer tech — translucent iMacs, early CGI, rave flyers, and 'cyber' branding — shiny, synthetic, and unembarrassed.",
      "ko": "2000년대 초반 사이버 미래주의, 반짝이는 3D 글롭, 테크노 매트릭스 감성을 담은 디스플레이 스타일"
    },
    "scope": {
      "en": "Scope: Covers the digital/graphic look, not Y2K fashion. The darker neon-grid retro strain is Synthwave/Retrofuturism (future entries); the glossy NATURE-infused successor is Frutiger Aero, its own entry and this one's closest neighbor.",
      "ko": "범위: Y2K 패션이 아닌 디지털 그래픽 및 UI 그래픽 미학을 다룹니다."
    },
    "aliases": {
      "en": [
        "chrome bubblegum millennium interface",
        "shiny metallic text with lens flares like old cd covers",
        "the silver and electric blue futuristic 2000s look",
        "glossy plastic bubble buttons like early mac",
        "that iridescent chrome sticker rave flyer style",
        "2000s cyber aesthetics",
        "chrome gel plastic futuristic",
        "millennium tech look"
      ],
      "ko": [
        "크롬과 버블껌 감성의 2000년대 미학 UI",
        "렌즈 플레어와 은빛 광택 레트로 CD 커버 스타일",
        "실버와 일렉트릭 블루의 미래지향적 밀레니엄 룩",
        "초기 Mac 스타일의 광택 젤 플라스틱 버블 버튼",
        "홀로그래픽 크롬 스티커 및 레이브 플라이어 스타일",
        "2000년대 밀레니엄 테크",
        "크롬 메탈 젤리 버튼",
        "사이버 미래주의 미학"
      ]
    },
    "signals": [
      {
        "id": "chrome-metal",
        "role": "defining",
        "name": {
          "en": "Liquid chrome and metal",
          "ko": "액상 크롬 및 메탈 질감"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror-finish chrome, brushed steel, and silver gradients — type and frames rendered as if machined and polished.",
          "ko": "거울처럼 반사되는 크롬, 헤어라인 스틸, 실버 그래디언트로 정교하게 다듬어진 기계적 질감을 연출함."
        }
      },
      {
        "id": "gel-gloss",
        "role": "defining",
        "name": {
          "en": "Gel and glossy plastic",
          "ko": "젤과 유광 플라스틱"
        },
        "facet": "depth",
        "description": {
          "en": "Translucent candy-like buttons and blobs with strong specular highlights — the Aqua-era 'you want to lick it' gloss.",
          "ko": "상단에 강한 광택 반사점을 가진 반투명 캔디 모양 버튼과 구체 요소로 '핥고 싶을 만큼' 매끄러운 질감을 형성함."
        }
      },
      {
        "id": "iridescent-palette",
        "role": "defining",
        "name": {
          "en": "Iridescent blue-silver palette",
          "ko": "영롱한 블루-실버 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Electric blue, silver, white, and holographic cyan-magenta shifts — cool synthetic color, rarely earthy.",
          "ko": "일렉트릭 블루, 실버, 화이트, 홀로그래픽 시안-마젠타 변색 등 차갑고 합성적인 수공예적 컬러를 주로 사용함."
        }
      },
      {
        "id": "techno-type",
        "role": "defining",
        "name": {
          "en": "Wide techno type",
          "ko": "와이드 테크노 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Extended, rounded or squared techno faces (Eurostile-flavored), often italicized, outlined, or chromed.",
          "ko": "자간이 넓고 각지거나 둥근 테크노 서체(Eurostile 계열)에 이탤릭, 윤곽선, 크롬 효과를 적용함."
        }
      },
      {
        "id": "orbs-blobs",
        "role": "supporting",
        "name": {
          "en": "Orbs, blobs, and wireframes",
          "ko": "3D 구체, 아메바 및 와이어프레임"
        },
        "facet": "imagery",
        "description": {
          "en": "Rendered spheres, liquid blobs, globes, wireframe grids, and lens flares floating as decoration.",
          "ko": "3D 구체, 액체 방울, 지구본, 와이어프레임 그리드, 렌즈 플레어 요소를 장식으로 공중에 부유시킴."
        }
      },
      {
        "id": "pixel-cyber",
        "role": "variable",
        "name": {
          "en": "Pixel/cyber garnish",
          "ko": "픽셀 및 사이버 장식"
        },
        "facet": "imagery",
        "description": {
          "en": "Tiny pixel fonts, scanlines, and 'cyber' interface chrome appear in some strains and not others.",
          "ko": "초소형 픽셀 폰트, 스캔라인, 사이버네틱 디스플레이 프레임을 부가 요소로 활용함."
        }
      },
      {
        "id": "nature-imagery",
        "role": "avoid",
        "name": {
          "en": "Nature imagery",
          "ko": "자연 요소 배제"
        },
        "facet": "imagery",
        "description": {
          "en": "Grass, water, fish, and sky shift the mood from synthetic futurism to eco-tech — that's Frutiger Aero territory.",
          "ko": "초원, 물, 물고기, 하늘 등의 자연물은 미래주의 감성을 생태 테크놀로지(프루티거 에어로)로 바꾸므로 배제함."
        }
      }
    ],
    "confusedWith": {
      "slug": "frutiger-aero",
      "name": "Frutiger Aero",
      "because": {
        "en": "This is Y2K because the optimism is synthetic — chrome, gel plastic, iridescent blue-silver, techno type; the future is machines and cyberspace.",
        "ko": "구별 이유: 미래지향적 낙관론이 메탈릭 크롬, 젤 플라스틱, 일렉트릭 블루-실버, 테크노 서체 등 합성 인공물 중심으로 표현되므로 Y2K 디지털 에스테틱에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Frutiger Aero if the gloss stayed but nature flooded in — blue skies, water, grass, and bubbles fused with clean humanist type into eco-tech Web 2.0 optimism.",
        "ko": "변경 조건: 광택 질감은 유지되되 파란 하늘, 푸른 초원, 물방울, 물고기 등 자연 요소가 대거 유입되고 인문주의 서체와 결합되면 프루티거 에어로가 됨."
      }
    },
    "brief": {
      "en": "Create the piece using the Y2K digital aesthetic. Defining signals: liquid-chrome/metallic surfaces (silver gradient fills with mirror highlights); glossy translucent gel buttons and blobs with strong specular top highlights; an iridescent electric-blue/silver/white palette with occasional holographic cyan-magenta shifts; wide techno display type (Eurostile-flavored, often italic or chromed). Supporting garnish to use sparingly: rendered orbs, globes, wireframe grids, lens flares, tiny pixel-font labels. Keep the exact palette temperature and garnish density flexible. Use layered CSS gradients for chrome (alternating light/dark stops), radial-gradient highlights for gel, and background-clip: text for chromed type. Do not drift into Frutiger Aero; the decisive difference is that Y2K's optimism is synthetic — no grass, water, sky, or nature photography. Preserve readable text (chrome type needs a dark backing or outline to hit 4.5:1), visible focus states, and reduced-motion support for any shine sweeps.",
      "ko": "Y2K 디지털 에스테틱 스타일을 적용합니다. 정의 신호: 거울 반사 하이라이트가 있는 크롬 및 메탈릭 실버 표면, 강한 하이라이트를 가진 젤/유광 플라스틱 버튼, 일렉트릭 블루와 실버 중심의 합성 컬러 팔레트, 자간이 넓은 와이드 테크노 서체입니다. 크롬 그래디언트와 젤 하이라이트 CSS를 활용하며, 자연물이 섞여 프루티거 에어로로 변하지 않도록 주의합니다. 크롬 텍스트의 가독성 명암비를 확보하고 모션 줄이기 환경에서 빛 반사 애니메이션을 정지합니다."
    },
    "accessibility": {
      "en": "Chrome-gradient text is decorative at heart: back it with a solid dark plate or duplicate it as real high-contrast text — the gradient's mid-greys fail 4.5:1 on their own.\n\nSpecular gloss steals contrast from labels on gel buttons; keep label ink dark/white against the button's DARKEST region.\n\nLens flares and shine sweeps are motion garnish — disable under prefers-reduced-motion.",
      "ko": "크롬 크라데이션 텍스트는 장식 요소이므로 어두운 배경 판을 받치거나 고명암비 실재 텍스트로 보완할 것.\n젤 버튼의 반사 광택이 라벨 명암비를 해치지 않도록 라벨 문자는 가장 어두운 영역을 기준으로 색상 설정함.\n렌즈 플레어와 반짝임 애니메이션은 prefers-reduced-motion 설정 시 정지 처리함."
    },
    "a11yAndMisuse": {
      "en": "Chrome-gradient text is decorative at heart: back it with a solid dark plate or duplicate it as real high-contrast text — the gradient's mid-greys fail 4.5:1 on their own.\n\nSpecular gloss steals contrast from labels on gel buttons; keep label ink dark/white against the button's DARKEST region.\n\nLens flares and shine sweeps are motion garnish — disable under prefers-reduced-motion.",
      "ko": "크롬 크라데이션 텍스트는 장식 요소이므로 어두운 배경 판을 받치거나 고명암비 실재 텍스트로 보완할 것.\n젤 버튼의 반사 광택이 라벨 명암비를 해치지 않도록 라벨 문자는 가장 어두운 영역을 기준으로 색상 설정함.\n렌즈 플레어와 반짝임 애니메이션은 prefers-reduced-motion 설정 시 정지 처리함."
    },
    "origin": {
      "en": "Roughly 1997–2004: Apple's translucent iMac G3 and Aqua, PlayStation-era CGI, Designers Republic-style rave graphics, and dot-com 'cyber' branding. Rediscovered and named by 2010s–2020s internet archaeology (CARI et al.) and the fashion/graphics revival that followed.",
      "ko": "1990년대 후반 밀레니엄 버그(Y2K) 불안과 초기 인터넷 낙관론이 교차하던 시기의 사이버 테크노 감성에서 비롯되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "frutiger-aero",
    "name": {
      "en": "Frutiger Aero",
      "ko": "프루티거 에어로"
    },
    "tagline": {
      "en": "Frutiger Aero is the glossy, nature-infused optimism of roughly 2004–2013: bright blue skies and water, green grass, bubbles, fish, and light rays fused with translucent glass panels, aqua buttons, and clean humanist type. Technology presents itself as fresh, ecological, and frictionless — the future as a sunny day. It's the era of Windows Vista/7 wallpapers, glossy media players, and Web 2.0 product sites.",
      "ko": "투명한 이슬방울, 청량한 오로라, 오가닉 입체 버튼과 푸른 인프라가 어우러진 2000년대 중반 유기적 미학"
    },
    "scope": {
      "en": "Scope: Windows Aero is Microsoft's vendor design language of the same era — an ingredient and namesake, not an exact alias. The synthetic chrome-and-cyber look that PRECEDED it is Y2K, this entry's closest neighbor.",
      "ko": "범위: 윈도우 비스타 및 초기 스마트폰 시대의 청량하고 미래지향적인 생태-테크 그래픽 트렌드입니다."
    },
    "aliases": {
      "en": [
        "glossy grass bubbles old windows future",
        "the blue sky and green grass wallpaper vibe with shiny buttons",
        "water droplets and fish and glassy interfaces from 2008",
        "that clean glossy nature-tech look like old windows",
        "bubbles floating over a bright blue gradient",
        "windows 7 vista sky grass",
        "nature tech glossy optimism",
        "blue sky water drops"
      ],
      "ko": [
        "투명 이슬방울과 초원 배경의 윈도우 에어로 감성",
        "파란 하늘과 녹색 초원 배경 위 유광 버튼",
        "2000년대 후반 스타일의 물방울, 물고기, 유리 UI",
        "깨끗하고 유광 느낌의 자연-테크 융합 스타일",
        "청량한 파란 그래디언트 위 부유하는 비눗방울",
        "윈도우 에어로 초원과 물방울",
        "청량한 파란 하늘과 아쿠아 글래스",
        "2000년대 후반 유기적 테크"
      ]
    },
    "signals": [
      {
        "id": "nature-tech",
        "role": "defining",
        "name": {
          "en": "Nature fused with tech",
          "ko": "기술과 자연의 유기적 융합"
        },
        "facet": "imagery",
        "description": {
          "en": "Skies, water, grass, leaves, fish, and bubbles as the ambient world the UI floats in — ecology as a tech promise.",
          "ko": "파란 하늘, 깨끗한 물, 녹색 초원, 이슬방울, 비눗방울, 물고기 등 환경 친화적 자연물과 기술 UI가 결합함."
        }
      },
      {
        "id": "aero-glass",
        "role": "defining",
        "name": {
          "en": "Glossy glass and aqua surfaces",
          "ko": "유광 글래스 및 아쿠아 표면"
        },
        "facet": "surface",
        "description": {
          "en": "Translucent panels and buttons with strong curved specular highlights — wet, light-filled gloss rather than matte frost.",
          "ko": "곡선 형태의 강한 반사광을 가진 반투명 패널과 아쿠아 버튼으로, 매트한 서리 느낌보다 젖은 듯 수분감 넘치는 광택을 연출함."
        }
      },
      {
        "id": "sky-palette",
        "role": "defining",
        "name": {
          "en": "Sky-blue / grass-green palette",
          "ko": "하늘색과 초록색의 청량한 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Luminous cyan-blues and fresh greens with white light — bright, clean, and warm-lit, never murky.",
          "ko": "화사한 시안 블루와 파릇파릇한 초록색, 맑은 햇살 라이팅이 어우러져 투명하고 청량한 분위기를 만듦."
        }
      },
      {
        "id": "humanist-type",
        "role": "defining",
        "name": {
          "en": "Clean humanist sans type",
          "ko": "깔끔한 인문주의 산세리프 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Friendly rounded-humanist sans-serifs (the Frutiger/Segoe flavor) in white or sky-dark blue — clarity, not techno styling.",
          "ko": "Frutiger 및 Segoe 계열의 가독성 높고 친근한 산세리프 서체를 사용하여 명확성과 가독성을 제공함."
        }
      },
      {
        "id": "light-effects",
        "role": "supporting",
        "name": {
          "en": "Bokeh, rays, and sheen",
          "ko": "보케, 빛내림 및 광택 광선"
        },
        "facet": "depth",
        "description": {
          "en": "Soft light circles, sun rays through water, and diagonal sheen sweeps give everything a freshly-washed sparkle.",
          "ko": "부드러운 빛의 방울(보케), 물속을 투과하는 햇살, 대각선으로 지나가는 반짝임 효과가 깨끗함을 더함."
        }
      },
      {
        "id": "subject-matter",
        "role": "variable",
        "name": {
          "en": "Which slice of nature",
          "ko": "다채로운 자연 소재"
        },
        "facet": "imagery",
        "description": {
          "en": "Underwater scenes, meadows, droplets on leaves, goldfish, wind turbines — any fresh, sunlit nature reads as the style.",
          "ko": "수중 풍경, 넓은 초원, 나뭇잎 위 이슬, 금붕어, 풍력 발전기 등 햇살 아래의 신선한 자연물들이 다양하게 활용됨."
        }
      },
      {
        "id": "chrome-cyber",
        "role": "avoid",
        "name": {
          "en": "Chrome and cyber styling",
          "ko": "차가운 크롬 및 사이버 스타일 배제"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror chrome, techno type, and wireframe grids pull the mood back to synthetic Y2K futurism.",
          "ko": "거울 크롬 메탈이나 테크노 서체, 와이어프레임은 Y2K의 차가운 인공 분위기로 되돌아가므로 배제함."
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Frutiger Aero because the gloss is in service of nature-tech optimism — skies, water, grass, and bubbles behind clean humanist type.",
        "ko": "구별 이유: 광택 질감이 청량한 파란 하늘, 초원, 물방울, 푸른 인프라 및 인문주의 서체와 결합하여 자연-기술 융합 낙관론을 전달하므로 프루티거 에어로에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Y2K if the nature drained out and the surfaces turned synthetic — chrome, gel plastic, iridescent blue-silver, and wide techno type.",
        "ko": "변경 조건: 자연 이미지가 사라지고 크롬 메탈, 인공 젤 플라스틱, 와이드 테크노 서체 위주의 차가운 미래주의로 바뀌면 Y2K가 됨."
      }
    },
    "brief": {
      "en": "Create the piece using Frutiger Aero. Defining signals: nature imagery fused with technology (blue sky, water, grass, bubbles, light rays) as the ambient backdrop; glossy translucent 'aqua' surfaces with curved specular highlights; a luminous sky-blue and grass-green palette full of white light; clean humanist sans-serif type (Frutiger/Segoe flavor). Supporting: bokeh circles, sun rays, diagonal sheen sweeps. Keep the specific slice of nature (underwater, meadow, droplets) flexible. Use layered radial/linear gradients for the sky and gloss caps, rgba white overlays for sheen, and generous rounded panels. Do not drift into Y2K; the decisive difference is nature — if chrome, techno type, or cyber grids replace the skies and grass, you've crossed over. Preserve 4.5:1 text contrast over photographic backgrounds (back text with a panel), visible focus states, and reduced-motion support for sheen and bubble effects.",
      "ko": "프루티거 에어로 스타일을 적용합니다. 정의 신호: 파란 하늘과 초원, 물방울 등의 자연 요소와 기술의 결합, 젖은 느낌의 곡선 하이라이트를 가진 유광 아쿠아 글래스 표면, 하늘색과 초록색 중심의 청량한 팔레트, Frutiger/Segoe 계열의 깔끔한 산세리프 서체입니다. 보케 효과와 햇살 라이팅을 활용하며, 사진 배경 위 텍스트 가독성을 위해 반투명 패널을 깔고 모션 줄이기 환경에서 비눗방울/빛 루프를 정지시킵니다."
    },
    "accessibility": {
      "en": "White type straight on sky/grass photography fails contrast in bright regions — put text on a translucent panel with a measured 4.5:1.\n\nGloss highlights across a control's top half can wash out its label; keep the label's zone below the sheen or darken the plate behind it.\n\nBubbles, rays, and sheen sweeps are ambience — never meaning — and stop under prefers-reduced-motion.",
      "ko": "하늘/풀밭 사진 위에 흰색 글씨를 직접 배치하면 밝은 영역에서 명암비가 깨짐. 반투명 패널 위에 텍스트를 배치하고 4.5:1을 준수할 것.\n컨트롤 상단의 광택 하이라이트가 라벨을 가리지 않도록 하단으로 이동하거나 배경을 어둡게 처리함.\n비눗방울, 광선, 광택 루프는 모션 줄이기 환경에서 정지시킴."
    },
    "a11yAndMisuse": {
      "en": "White type straight on sky/grass photography fails contrast in bright regions — put text on a translucent panel with a measured 4.5:1.\n\nGloss highlights across a control's top half can wash out its label; keep the label's zone below the sheen or darken the plate behind it.\n\nBubbles, rays, and sheen sweeps are ambience — never meaning — and stop under prefers-reduced-motion.",
      "ko": "하늘/풀밭 사진 위에 흰색 글씨를 직접 배치하면 밝은 영역에서 명암비가 깨짐. 반투명 패널 위에 텍스트를 배치하고 4.5:1을 준수할 것.\n컨트롤 상단의 광택 하이라이트가 라벨을 가리지 않도록 하단으로 이동하거나 배경을 어둡게 처리함.\n비눗방울, 광선, 광택 루프는 모션 줄이기 환경에서 정지시킴."
    },
    "origin": {
      "en": "Roughly 2004–2013 across consumer tech (Windows Vista/7 era, glossy device UIs, Wii-era menus, Web 2.0 branding). Named retroactively around 2017 by CARI's cataloguers, after Adrian Frutiger's humanist typefaces plus Windows Aero; the nostalgia wave made the label mainstream in the 2020s.",
      "ko": "서체 디자이너 아드리안 프루티거의 서체 이름과 윈도우 에어로의 합성어로 CARI에서 명명했습니다."
    },
    "meta": {}
  },
  {
    "slug": "flat-design",
    "name": {
      "en": "Flat Design",
      "ko": "플랫 디자인"
    },
    "tagline": {
      "en": "Flat Design renders the interface as pure 2D: surfaces are solid color fills, icons are simple geometric glyphs, and nothing pretends to be lit, embossed, or made of a material. Hierarchy comes from color, size, and typography instead of shadows and bevels. It became the dominant look around 2012–2013 (Windows 8's Metro, then iOS 7) as the direct rejection of skeuomorphism's gloss and texture.",
      "ko": "입체 효과, 질감, 그림자를 제거하고 2차원 평면의 간결한 컬러 패널과 타이포그래피에 집중한 스타일"
    },
    "scope": {
      "en": "Scope: This entry covers strict flat rendering. 'Flat 2.0' — flat surfaces with a few functional shadows reintroduced (Material Design's elevation is the systematic version) — is the common modern compromise, not a separate entry.",
      "ko": "범위: 스큐어모피즘에 대한 반발로 등장하여 모던 UI의 기틀이 된 평면적 디자인 트렌드 전체를 포함합니다."
    },
    "aliases": {
      "en": [
        "everything is just solid colors with no shadows",
        "buttons that are plain rectangles of color",
        "the ios 7 look when everything went flat",
        "icons that are simple white shapes on colored squares",
        "no gradients no textures just clean color blocks",
        "the design style that killed the glossy buttons",
        "ios 7 2d flat style",
        "solid color blocks no shadows",
        "minimalist flat UI"
      ],
      "ko": [
        "그림자 없이 단색으로만 이루어진 깔끔한 UI",
        "단순한 색상 직사각형 모양의 버튼",
        "모든 입체 효과가 제거된 iOS 7 스타일 플랫 룩",
        "컬러 사각형 위 단순한 흰색 아이콘",
        "그래디언트와 질감 없이 깔끔한 컬러 블록만 있는 디자인",
        "광택 버튼 시대를 끝낸 플랫 디자인",
        "2D 평면 플랫 디자인",
        "그림자 없는 단색 면",
        "iOS 7 간결한 컬러 패널"
      ]
    },
    "signals": [
      {
        "id": "solid-fills",
        "role": "defining",
        "name": {
          "en": "Solid 2D color fills",
          "ko": "순수 2D 단색 채우기"
        },
        "facet": "surface",
        "description": {
          "en": "Every surface is one flat color — no gradients, no gloss, no texture, no material of any kind.",
          "ko": "모든 표면이 단일 평면 컬러로 채워지며 그래디언트, 광택, 질감, 모사 재질을 일체 사용하지 않음."
        }
      },
      {
        "id": "no-depth",
        "role": "defining",
        "name": {
          "en": "No simulated depth",
          "ko": "입체감 및 조명 효과 배제"
        },
        "facet": "depth",
        "description": {
          "en": "No drop shadows, bevels, or highlights; elements sit on one plane and edges are drawn by color change alone.",
          "ko": "드롭 섀도우, 경사(Bevel), 하이라이트가 없으며 요소들이 단일 평면에 위치하여 오직 색상 변화로 경계를 형성함."
        }
      },
      {
        "id": "glyph-icons",
        "role": "defining",
        "name": {
          "en": "Simple glyph icons",
          "ko": "단순한 글리프 아이콘"
        },
        "facet": "imagery",
        "description": {
          "en": "Icons are reduced to minimal geometric silhouettes — a single-color shape reads as the whole object.",
          "ko": "아이콘이 최소한의 기하학적 실루엣으로 단순화되어 단색 형태만으로 대상을 명확히 전달함."
        }
      },
      {
        "id": "color-hierarchy",
        "role": "defining",
        "name": {
          "en": "Color carries the hierarchy",
          "ko": "색상 중심의 시각적 위계"
        },
        "facet": "color",
        "description": {
          "en": "Bright, often saturated block colors distinguish actions and regions — color does the job shadows used to do.",
          "ko": "밝고 명확한 블록 컬러가 기존에 그림자가 하던 영역 구분과 우선순위 전달 역할을 대신함."
        }
      },
      {
        "id": "type-does-work",
        "role": "supporting",
        "name": {
          "en": "Typography does the structure",
          "ko": "타이포그래피 기반 구조화"
        },
        "facet": "typography",
        "description": {
          "en": "Clean sans-serif type in strong size steps separates levels of content where boxes and bevels used to.",
          "ko": "크기 단계가 명확한 깔끔한 산세리프 서체가 기존의 테두리나 베벨이 하던 콘텐츠 계층 구분을 담당함."
        }
      },
      {
        "id": "density",
        "role": "variable",
        "name": {
          "en": "Density is free",
          "ko": "자유로운 레이아웃 밀도"
        },
        "facet": "layout",
        "description": {
          "en": "Flat governs RENDERING only — a flat UI can be a sparse landing page or a dense dashboard.",
          "ko": "플랫 스타일은 렌더링 방식을 규정할 뿐이므로, 간결한 랜딩 페이지부터 고밀도 대시보드까지 자유롭게 적용됨."
        }
      },
      {
        "id": "gloss-textures",
        "role": "avoid",
        "name": {
          "en": "Gloss, gradients, textures",
          "ko": "광택, 그래디언트, 질감 배제"
        },
        "facet": "depth",
        "description": {
          "en": "A specular highlight or leather texture breaks the style — that's the doorway back to skeuomorphism.",
          "ko": "광택 반사점이나 가죽 질감이 추가되면 플랫의 정체성을 깨뜨리고 스큐어모피즘으로 변질됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "skeuomorphism",
      "name": "Skeuomorphism",
      "because": {
        "en": "This is Flat Design because surfaces are unshaded solid fills and icons are abstract glyphs — nothing imitates a physical object or material.",
        "ko": "구별 이유: 표면이 음영 없는 단색 채우기로 구성되고 아이콘이 추상적 기호로 단순화되어 실제 물리 재질이나 입체감을 모사하지 않으므로 플랫 디자인에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become skeuomorphism if the fills grew gloss, texture, and lighting until controls read as physical things you could touch.",
        "ko": "변경 조건: 단색 면에 광택, 질감, 조명 효과가 가미되어 컨트롤들이 만질 수 있는 실제 입체물처럼 보이게 되면 스큐어모피즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using flat design. Defining signals: every surface a solid single-color fill — zero gradients, gloss, or texture; no simulated depth — no drop shadows, bevels, or specular highlights, edges drawn by color change alone; icons as simple one-color geometric glyphs; hierarchy carried by color blocks, size, and clean sans-serif type. Keep the palette and density flexible — flat can be sparse or dense. In CSS this means background-color instead of background-image gradients, border: none or 1px solid, box-shadow: none. Do not drift into skeuomorphism: the decisive difference is that nothing imitates a lit physical material. Preserve 4.5:1 text contrast, and make interactive elements identifiable without shadows — clear color affordance, visible hover/pressed states, and visible focus rings.",
      "ko": "플랫 디자인 스타일을 적용합니다. 정의 신호: 그래디언트나 광택이 없는 단색 채우기 표면, 드롭 섀도우나 경사 없는 입체감 제거, 단순화된 2D 글리프 아이콘, 색상 블록과 산세리프 타이포그래피 기반의 구조화입니다. background-color, border: none 또는 1px 실선, box-shadow: none을 사용합니다. 그림자가 사라진 만큼 텍스트 명암비(4.5:1)와 컨트롤 경계 명암비(3:1)를 철저히 검증하고 명확한 포커스 링을 유지합니다."
    },
    "accessibility": {
      "en": "NN/g measured the cost: flat UIs with weak signifiers make users uncertain what is clickable — give buttons and links unmistakable color affordance, not just proximity.\n\nWith shadows gone, color is doing double duty — check 4.5:1 contrast for text AND 3:1 for the boundaries of controls against their background.\n\nNever remove focus outlines to keep things 'clean'; a flat UI without focus rings is unusable by keyboard.",
      "ko": "기호가 약한 플랫 UI는 사용자가 클릭 가능 여부를 불확실하게 만들 수 있음. 버튼과 링크에 확실한 색상 어포던스를 제공할 것.\n그림자가 사라진 만큼 텍스트 4.5:1 및 컨트롤 경계 3:1 명암비를 반드시 검증함.\n화면을 깔끔하게 유지한다는 이유로 포커스 외곽선을 제거하지 말 것."
    },
    "a11yAndMisuse": {
      "en": "NN/g measured the cost: flat UIs with weak signifiers make users uncertain what is clickable — give buttons and links unmistakable color affordance, not just proximity.\n\nWith shadows gone, color is doing double duty — check 4.5:1 contrast for text AND 3:1 for the boundaries of controls against their background.\n\nNever remove focus outlines to keep things 'clean'; a flat UI without focus rings is unusable by keyboard.",
      "ko": "기호가 약한 플랫 UI는 사용자가 클릭 가능 여부를 불확실하게 만들 수 있음. 버튼과 링크에 확실한 색상 어포던스를 제공할 것.\n그림자가 사라진 만큼 텍스트 4.5:1 및 컨트롤 경계 3:1 명암비를 반드시 검증함.\n화면을 깔끔하게 유지한다는 이유로 포커스 외곽선을 제거하지 말 것."
    },
    "origin": {
      "en": "Rose to prominence around 2012: Microsoft's Metro language (Windows Phone 7 in 2010, Windows 8 in 2012) proved it at OS scale, and Apple's iOS 7 redesign in 2013 ended the skeuomorphic era for good. NN/g traces the deeper roots to Swiss/International typographic style.",
      "ko": "스위스 스위스 스타일 타이포그래피에 뿌리를 두며, 2012년 윈도우 8 메트로 UI 및 2013년 iOS 7 발표로 모던 UI의 대세가 되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "minimalism",
    "name": {
      "en": "Minimalism",
      "ko": "미니멀리즘"
    },
    "tagline": {
      "en": "Minimalism governs what is ON the screen, not how it's drawn: strip the interface to the fewest elements that still do the job, then let generous negative space and one or two dramatic typographic moments carry the composition. NN/g's study of 112 minimalist sites found the recurring traits — flat-ish surfaces, limited or monochrome palettes, restricted element counts, negative space, and large type as the hero.",
      "ko": "장식 요소를 극단적으로 배제하고 여백, 타이포그래피, 본질적인 기능에만 집중하는 미학"
    },
    "scope": {
      "en": "Scope: Minimalism and Flat Design are different axes: flat governs rendering, minimalism governs content, features, and layout. A UI can be flat but crowded, or minimalist while still using depth and shadow.",
      "ko": "범위: 단순히 요소를 줄이는 것이 아니라 여백의 미와 엄격한 그리드 질서를 극대화하는 디자인 철학입니다."
    },
    "aliases": {
      "en": [
        "the page with almost nothing on it",
        "huge empty space and one button",
        "giant headline and tons of white space",
        "the apple style page with one product and nothing else",
        "a website that is basically just text and air",
        "everything unnecessary removed until only the message is left",
        "huge white space dramatic type",
        "less is more clean design",
        "minimal content UI"
      ],
      "ko": [
        "화면에 요소가 거의 없는 극단적 간결 사이트",
        "광활한 여백과 단 하나의 버튼이 있는 화면",
        "거대한 헤드라인과 풍부한 화이트 스페이스",
        "단 하나의 제품만 강조하는 애플 스타일 페이지",
        "텍스트와 여백으로만 구성된 깔끔한 웹사이트",
        "메시지만 남고 불필요한 모든 것이 제거된 UI",
        "여백의 미 극대화",
        "거대한 타이포그래피와 최소 요소",
        "단순함의 미학"
      ]
    },
    "signals": [
      {
        "id": "negative-space",
        "role": "defining",
        "name": {
          "en": "Negative space as material",
          "ko": "핵심 재질로서의 여백"
        },
        "facet": "layout",
        "description": {
          "en": "Emptiness is deliberate and generous — content floats in air, and the space around a thing is what makes it matter.",
          "ko": "여백이 의도적이고 넉넉하게 사용되어 콘텐츠가 여백 속에 떠 있는 듯한 느낌을 주며, 주위의 빈 공간이 대상의 존재감을 높임."
        }
      },
      {
        "id": "restricted-elements",
        "role": "defining",
        "name": {
          "en": "Restricted element count",
          "ko": "극단적으로 절제된 요소 개수"
        },
        "facet": "layout",
        "description": {
          "en": "Few things on screen, and every one earns its place: one nav, one message, one action — decoration is deleted, not restyled.",
          "ko": "화면 내 요소의 수를 최소화함. 단 하나의 내비게이션, 핵심 메시지, 하나의 동작 버튼 등 불필요한 장식은 삭제됨."
        }
      },
      {
        "id": "limited-palette",
        "role": "defining",
        "name": {
          "en": "Limited or monochrome palette",
          "ko": "제한된 흑백/단색 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "One or two hues at most, often just black/white/grey with a single accent — color restraint is part of the restraint.",
          "ko": "최대 1~2개 색상, 주로 흑백 및 무채색에 하나의 포인트 컬러만 사용하여 색상 사용을 극도로 절제함."
        }
      },
      {
        "id": "dramatic-type",
        "role": "defining",
        "name": {
          "en": "Dramatic typography",
          "ko": "압도적인 타이포그래피"
        },
        "facet": "typography",
        "description": {
          "en": "With imagery and ornament gone, type goes big: an oversized headline is usually the loudest element on the page.",
          "ko": "이미지와 장식이 제거된 자리를 큼직한 디스플레이 타이포그래피가 채우며, 대형 헤드라인이 화면의 중심 역할을 수행함."
        }
      },
      {
        "id": "flat-tendency",
        "role": "variable",
        "name": {
          "en": "Rendering is free",
          "ko": "자유로운 렌더링 스타일"
        },
        "facet": "depth",
        "description": {
          "en": "Most minimalist sites render flat, but shadow and depth are allowed — minimalism constrains WHAT is shown, not HOW it's lit.",
          "ko": "대부분 플랫하게 렌더링되나 그림자나 깊이감도 허용됨. 미니멀리즘은 '무엇을 보여주는가'를 제한할 뿐 '어떻게 칠하는가'의 문제가 아님."
        }
      },
      {
        "id": "crowding",
        "role": "avoid",
        "name": {
          "en": "Crowding and ornament",
          "ko": "요소 밀집 및 장식 배제"
        },
        "facet": "layout",
        "description": {
          "en": "A second competing message, decorative flourishes, or a dense widget wall breaks the style regardless of how flat it looks.",
          "ko": "경쟁하는 복수의 메시지나 복잡한 위젯 벽은 플랫 렌더링 여부와 상관없이 미니멀리즘의 정체성을 깨뜨림."
        }
      }
    ],
    "confusedWith": {
      "slug": "flat-design",
      "name": "Flat Design",
      "because": {
        "en": "This is minimalism because the content itself is reduced — few elements, vast negative space, one dramatic headline — whatever the rendering.",
        "ko": "구별 이유: 렌더링 방식과 상관없이 화면에 노출되는 콘텐츠 및 요소 자체를 극단적으로 줄이고 여백과 타이포그래피에 집중하므로 미니멀리즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would be merely Flat Design if the screen filled up with content again and only the unshaded 2D rendering remained.",
        "ko": "변경 조건: 화면에 다시 수많은 요소와 복잡한 콘텐츠가 채워지고 단색 2D 렌더링 방식만 남게 되면 단순한 플랫 디자인이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using minimalism. Defining signals: the fewest elements that still do the job — one navigation, one message, one primary action, decoration deleted; generous negative space around everything (think 40 to 60 percent of the viewport empty); a limited palette — near-monochrome with at most one accent color; one dramatic typographic moment, an oversized headline that is the loudest thing on screen. Rendering is flexible — flat fills or subtle shadows both fit. Do not confuse this with flat design: minimalism constrains content and layout, not rendering — if you add content back until the page is busy, it stops being minimalist no matter how flat it is. Preserve discoverability: core actions must stay visible, never hidden behind mystery-meat icons to keep the page empty, and text keeps 4.5:1 contrast even in grey-on-white palettes.",
      "ko": "미니멀리즘 스타일을 적용합니다. 정의 신호: 기능을 수행하는 최소한의 요소 배치(하나의 메시지, 하나의 행동), 전체 화면의 40~60%에 달하는 넉넉한 여백(Negative Space), 흑백 중심의 제한된 팔레트, 화면을 압도하는 거대한 디스플레이 타이포그래피입니다. 플랫 디자인이 렌더링을 제한하는 반면 미니멀리즘은 레이아웃과 콘텐츠 개수를 제어합니다. 여백을 위해 메뉴나 라벨을 가려 탐색성을 해치지 않도록 주의하며 텍스트 명암비를 엄격히 준수합니다."
    },
    "accessibility": {
      "en": "Light-grey-on-white is the classic minimalist contrast failure — measure text at 4.5:1, muted palettes included.\n\nDon't purge affordances along with the decoration: hiding navigation or labels to preserve emptiness trades clutter for mystery.\n\nHuge display type needs responsive clamping — a 96px headline that fits a desktop can wrap into an unreadable wall on a phone.",
      "ko": "흰색 배경 위의 밝은 회색 텍스트는 대표적인 미니멀리즘 명암비 실패 사례임. 텍스트 명암비 4.5:1을 엄격히 측정함.\n여백 확보를 위해 탐색 메뉴나 라벨을 가리지 말 것.\n거대한 디스플레이 타이포그래피는 반응형 클램핑(clamp)을 적용하여 모바일 화면에서 깨지지 않도록 조율함."
    },
    "a11yAndMisuse": {
      "en": "Light-grey-on-white is the classic minimalist contrast failure — measure text at 4.5:1, muted palettes included.\n\nDon't purge affordances along with the decoration: hiding navigation or labels to preserve emptiness trades clutter for mystery.\n\nHuge display type needs responsive clamping — a 96px headline that fits a desktop can wrap into an unreadable wall on a phone.",
      "ko": "흰색 배경 위의 밝은 회색 텍스트는 대표적인 미니멀리즘 명암비 실패 사례임. 텍스트 명암비 4.5:1을 엄격히 측정함.\n여백 확보를 위해 탐색 메뉴나 라벨을 가리지 말 것.\n거대한 디스플레이 타이포그래피는 반응형 클램핑(clamp)을 적용하여 모바일 화면에서 깨지지 않도록 조율함."
    },
    "origin": {
      "en": "The reduction ethos of mid-century movements (Bauhaus, Swiss typography, 'less is more') applied to interfaces; on the web it became the dominant 'serious brand' register through the 2010s, with Apple's product pages as the most-copied specimen. NN/g's definitional study is from 2015.",
      "ko": "20세기 미술 및 건축의 바우하우스와 미스 반 데어 로에의 \"Less is More\" 철학에서 출발하여 현대 디지털 UI의 핵심 가치로 자리잡았습니다."
    },
    "meta": {}
  },
  {
    "slug": "claymorphism",
    "name": {
      "en": "Claymorphism",
      "ko": "클레이모피즘"
    },
    "tagline": {
      "en": "Claymorphism makes UI elements look molded from soft modeling clay: fat rounded corners, a light pastel fill, and the signature construction — two inner shadows (a bright one catching the top edge, a darker one shading the bottom) plus one soft outer drop shadow that floats the object above the page. Each element is independently colored and clearly separate from the background, usually paired with chunky 3D 'clay' illustrations.",
      "ko": "점토공예(Clay)처럼 두툼하고 부풀어 오른 3D 장난감 느낌의 푹신한 아기자기한 스타일"
    },
    "scope": {
      "en": "Scope: This entry covers the UI treatment. The matching 3D character-illustration style (inflated Blender people with smooth plastic skin) travels with it but is an illustration fashion, not an interface style.",
      "ko": "범위: 뉴모피즘보다 두껍고 입체감이 크며 3D 찰흙 모형과 같은 둥글둥글한 비주얼을 다룹니다."
    },
    "aliases": {
      "en": [
        "puffy 3d buttons that look like play-doh",
        "the cards look inflated like balloons",
        "cute squishy looking interface",
        "rounded blobby buttons with soft insides",
        "the 3d clay illustration style dashboards",
        "everything looks like soft rubber toys",
        "puffy 3d clay toys",
        "soft inflated play doh cards",
        "cute squishy 3d UI"
      ],
      "ko": [
        "점토 반죽처럼 푹신하고 통통한 3D 버튼",
        "풍선처럼 부풀어 오른 입체 카드",
        "아기자기하고 말랑말랑해 보이는 인터페이스",
        "부드러운 내부 음영을 가진 둥근 아메바 버튼",
        "3D 점토 캐릭터 일러스트 스타일의 대시보드",
        "말랑한 고무 장난감 같은 UI 요소들",
        "말랑말랑한 3D 점토 버튼",
        "통통하게 부푼 파스텔 카드",
        "3D 클레이 장난감 디자인"
      ]
    },
    "signals": [
      {
        "id": "inflated-volume",
        "role": "defining",
        "name": {
          "en": "Two inner shadows + one outer",
          "ko": "이중 내측 그림자 + 단일 외측 그림자"
        },
        "facet": "depth",
        "description": {
          "en": "The signature recipe: a light inner shadow on top, a darker inner shadow at the bottom, and a soft drop shadow below — the surface reads as inflated, not carved.",
          "ko": "상단 밝은 내측 그림자, 하단 어두운 내측 그림자, 그리고 하단 부드러운 드롭 섀도우 조합으로 조각된 것이 아니라 푹신하게 부풀어 오른 볼륨감을 연출함."
        }
      },
      {
        "id": "big-radius",
        "role": "defining",
        "name": {
          "en": "Oversized corner radii",
          "ko": "극단적으로 둥근 모서리 곡률"
        },
        "facet": "geometry",
        "description": {
          "en": "Corners are dramatically round — radii around a third of the element's height — so every shape reads as a soft blob, never a card with rounded corners.",
          "ko": "요소 높이의 1/3에 달하는 극적인 둥근 모서리(border-radius)를 사용하여 단순 둥근 카드가 아닌 말랑한 점토 덩어리처럼 보이게 함."
        }
      },
      {
        "id": "floating-objects",
        "role": "defining",
        "name": {
          "en": "Independently colored, floating objects",
          "ko": "독립적 컬러의 부유하는 오브젝트"
        },
        "facet": "surface",
        "description": {
          "en": "Each element has its own fill distinct from the background and visibly floats above it — nothing is extruded from the page itself.",
          "ko": "각 요소가 배경과 구분되는 자신만의 필 컬러를 가지며, 배경 위에 명확히 떠 있어 표면에서 밀려 나온 뉴모피즘과 구별됨."
        }
      },
      {
        "id": "pastel-palette",
        "role": "supporting",
        "name": {
          "en": "Light pastel palette",
          "ko": "부드러운 파스텔 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Milky lavenders, mints, corals, and creams — the shadows need light fills to read as volume, and the toy-like mood needs the softness.",
          "ko": "우유빛 라벤더, 민트, 코랄, 크림색 등 연한 파스텔 톤을 사용하여 장난감 같은 아기자기한 볼륨감을 살림."
        }
      },
      {
        "id": "clay-illustration",
        "role": "supporting",
        "name": {
          "en": "3D clay illustration",
          "ko": "3D 찰흙 일러스트 결합"
        },
        "facet": "imagery",
        "description": {
          "en": "Inflated, smooth 3D characters and objects usually accompany the controls and set the overall toy-world tone.",
          "ko": "매끄럽고 부푼 3D 점토 캐릭터 및 오브젝트 일러스트가 함께 어우러져 아기자기한 장난감 세계관을 형성함."
        }
      },
      {
        "id": "same-color-surface",
        "role": "avoid",
        "name": {
          "en": "Element same color as background",
          "ko": "배경과 동일한 요소 색상 지양"
        },
        "facet": "surface",
        "description": {
          "en": "If the object's fill matches the page and only shadows imply its shape, you've slid into neumorphism — clay objects are their own color.",
          "ko": "요소의 색상이 배경과 동일하고 그림자로만 형태가 나타나면 뉴모피즘으로 변질되므로, 클레이 오브젝트는 독자적인 컬러를 가져야 함."
        }
      }
    ],
    "confusedWith": {
      "slug": "neumorphism",
      "name": "Neumorphism",
      "because": {
        "en": "This is claymorphism because each puffy element is independently colored and FLOATS above the background on a real drop shadow.",
        "ko": "구별 이유: 푹신하게 부풀어 오른 개별 요소들이 독립적인 파스텔 컬러를 가지며 실제 드롭 섀도우를 통해 배경 위에 공중 부유하므로 클레이모피즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become neumorphism if every element took the background's exact color and sat flush in the surface, with only dual light/dark shadows implying shape — molded from one continuous material instead of placed on it.",
        "ko": "변경 조건: 모든 요소가 배경과 완전히 동일한 색상을 취하고 표면과 일치된 채 이중 그림자로만 형태가 암시되는 단일 성형 표면이 되면 뉴모피즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using claymorphism. Defining signals: the clay shadow recipe on cards and buttons — two inner shadows (light at top, darker at bottom) plus one soft outer drop shadow, e.g. box-shadow: 0 24px 40px rgba(x,.18), inset 0 -8px 16px rgba(x,.15), inset 0 8px 16px rgba(255,255,255,.55); oversized corner radii (border-radius roughly 26px on a 56px control); each element independently colored in light pastels, clearly floating above a soft tinted background; chunky friendly type. Keep the exact hues and illustration flexible. Do not drift into neumorphism: the decisive difference is that clay objects have their own color and a visible drop shadow — never the background's color with shadows alone implying shape. Preserve 4.5:1 text contrast on pastel fills, pressed/hover states that deepen the inner shadows rather than removing them, and visible focus rings.",
      "ko": "클레이모피즘 스타일을 적용합니다. 정의 신호: 2개의 내측 그림자(상단 밝음, 하단 어두움)와 1개의 부드러운 외측 드롭 섀도우 조합, 높이의 1/3에 달하는 극적인 모서리 곡률(border-radius: 26px 이상), 배경 위에 떠 있는 독립적인 파스텔 톤의 푹신한 3D 면입니다. box-shadow: 0 20px 36px rgba(...), inset 0 -8px 14px rgba(...), inset 0 6px 12px rgba(...) 공식을 활용합니다. 파스텔 톤 위의 텍스트 명암비를 어두운 서체로 확보하고 포커스 링이 입체 양감에 가려지지 않도록 오프셋을 적용합니다."
    },
    "accessibility": {
      "en": "Pastel-on-pastel is the trap: white or cream text on mint/lavender fills usually fails 4.5:1 — darken the text, not the toy palette.\n\nThe soft shadows are decorative, not state — pair pressed/selected with a color or content change, not shadow depth alone.\n\nTriple-layer shadows on many elements can shimmer on scroll in low-power mode; keep the recipe to key surfaces.",
      "ko": "부풀어 오른 통통한 3D 양감 효과는 포커스 링을 가리거나 감쌀 수 있으므로 포커스 표시는 외곽 오프셋 패딩을 두고 명확히 노출함.\n파스텔톤 필 색상 위 흰색 글씨는 명암비 부족이 발생하기 쉬우므로 어두운 텍스트를 우선 사용함.\n눌림 애니메이션 스케일 변화는 반사 동작에 장애를 주지 않도록 정교하게 설정함."
    },
    "a11yAndMisuse": {
      "en": "Pastel-on-pastel is the trap: white or cream text on mint/lavender fills usually fails 4.5:1 — darken the text, not the toy palette.\n\nThe soft shadows are decorative, not state — pair pressed/selected with a color or content change, not shadow depth alone.\n\nTriple-layer shadows on many elements can shimmer on scroll in low-power mode; keep the recipe to key surfaces.",
      "ko": "부풀어 오른 통통한 3D 양감 효과는 포커스 링을 가리거나 감쌀 수 있으므로 포커스 표시는 외곽 오프셋 패딩을 두고 명확히 노출함.\n파스텔톤 필 색상 위 흰색 글씨는 명암비 부족이 발생하기 쉬우므로 어두운 텍스트를 우선 사용함.\n눌림 애니메이션 스케일 변화는 반사 동작에 장애를 주지 않도록 정교하게 설정함."
    },
    "origin": {
      "en": "Named in 2021 by Michal Malewicz as the friendlier successor to neumorphism, riding the wave of soft-3D illustration in fintech and edtech marketing; the recipe (two inner shadows + one outer, oversized radii) comes from his original article.",
      "ko": "2021년 3D 찰흙 스타일의 메타버스 및 웹3 그래픽 아트 트렌드와 함께 부상했습니다."
    },
    "meta": {}
  },
  {
    "slug": "vernacular-web",
    "name": {
      "en": "Vernacular Web",
      "ko": "버내큘러 웹"
    },
    "tagline": {
      "en": "The Vernacular Web is the folk architecture of the early web: personal homepages built by amateurs from collected materials — tiled star backgrounds, animated sparkle and flame GIFs, rainbow divider rules, 'welcome to my home page' banners, visitor counters, guestbook links, under-construction signs, and webring badges. It is decorative, personal, and sincere: every ornament was chosen because its owner loved it, not because a system prescribed it.",
      "ko": "1990년대 개인 홈페이지 스타일의 테이블 레이아웃, 반짝이는 GIF, 방명록 감성의 자발적 웹 디자인"
    },
    "scope": {
      "en": "Scope: This entry covers the genuine 90s amateur look and its faithful revivals. Ironic, deliberately-broken 'ugly on purpose' design is a different move (Internet Ugly, in research), and raw exposed structure is Web Brutalism.",
      "ko": "범위: 초기 개인 웹페이지(Geocities, 드림위즈 등)의 손수 만든 유기적이고 자유분방한 디지털 그래픽 스타일입니다."
    },
    "aliases": {
      "en": [
        "the old geocities page with sparkly gifs",
        "under construction sign and a visitor counter",
        "tiled star background with rainbow divider lines",
        "blinking new sign and a guestbook link",
        "the 90s personal homepage look",
        "welcome to my home page with animated flames",
        "90s geocities home page",
        "animated gifs visitor counter",
        "retro nostalgic web"
      ],
      "ko": [
        "반짝이는 GIF가 있는 추억의 지오시티(GeoCities) 페이지",
        "공사중(Under Construction) 아이콘과 방문자 카운터",
        "바둑판배열 별 배경과 무지개 구분선",
        "깜빡이는 NEW 아이콘과 방명록 링크",
        "90년대 아날로그 개인 홈페이지 감성",
        "불꽃 애니메이션과 함께하는 환영 메시지",
        "90년대 개인 홈페이지 감성",
        "지오시티 반짝이 GIF와 방명록",
        "아날로그 레트로 웹"
      ]
    },
    "signals": [
      {
        "id": "tiled-background",
        "role": "defining",
        "name": {
          "en": "Tiled background texture",
          "ko": "바둑판식 배열 배경 이미지"
        },
        "facet": "surface",
        "description": {
          "en": "A small image repeated edge to edge — starry night sky, clouds, marble — behind everything; the page has wallpaper, not a background color.",
          "ko": "별밤 하늘, 구름, 대리석 등 작은 이미지가 반복 타일링되어 배경색이 아닌 벽지 같은 분위기를 조성함."
        }
      },
      {
        "id": "gif-ornaments",
        "role": "defining",
        "name": {
          "en": "Animated GIF ornaments",
          "ko": "GIF 애니메이션 장식"
        },
        "facet": "imagery",
        "description": {
          "en": "Twinkling sparkles, spinning @ signs, flaming rules, the striped UNDER CONSTRUCTION sign — small looping animations used as pure decoration.",
          "ko": "반짝이는 별, 회전하는 @ 아이콘, 타오르는 불꽃 구분선, 사선 패턴의 공사중 표지판 등 순수 장식용 루프 GIF."
        }
      },
      {
        "id": "collected-badges",
        "role": "defining",
        "name": {
          "en": "Collected badges and counters",
          "ko": "수집된 배지 및 방문자 카운터"
        },
        "facet": "layout",
        "description": {
          "en": "A visitor counter, 'sign my guestbook', webring prev/next buttons, 'best viewed in Netscape' badges — trophies of participation, stacked at the page's foot.",
          "ko": "방문자 수 카운터, 방명록 작성 링크, 웹링 이원 버튼, 넷스케이프 권장 배지 등이 하단에 훈장처럼 나열됨."
        }
      },
      {
        "id": "rainbow-defaults",
        "role": "defining",
        "name": {
          "en": "Default type, loud accents",
          "ko": "기본 서체와 화려한 무지개 강조"
        },
        "facet": "typography",
        "description": {
          "en": "System serif or Comic Sans over the wallpaper, centered, with rainbow horizontal rules and multicolored or blinking emphasis — typography as celebration, not system.",
          "ko": "배경 위 중앙 정렬된 바탕체/Comic Sans 서체, 무지개 빛깔의 구분선, 깜빡이는 강조 텍스트 사용."
        }
      },
      {
        "id": "centered-column",
        "role": "supporting",
        "name": {
          "en": "One centered column",
          "ko": "단일 중앙 정렬 컬럼"
        },
        "facet": "layout",
        "description": {
          "en": "Everything center-aligned down one narrow column, section by section, the way <center> made easy.",
          "ko": "고전 <center> 태그 방식처럼 모든 요소가 하나의 좁은 중앙 레이아웃을 따라 일렬로 정렬됨."
        }
      },
      {
        "id": "midi-mood",
        "role": "variable",
        "name": {
          "en": "Ambient extras",
          "ko": "아날로그 배경음악 및 마우스 효과"
        },
        "facet": "motion",
        "description": {
          "en": "Autoplaying MIDI, cursor trails, scrolling marquees — beloved extras that vary page to page.",
          "ko": "자동 재생 MIDI 음악, 마우스 커서를 따라다니는 잔상 효과, 흐르는 자막(marquee) 등의 다채로운 보조 기능."
        }
      },
      {
        "id": "knowing-irony",
        "role": "avoid",
        "name": {
          "en": "Knowing irony or rawness",
          "ko": "의도적인 아이러니 및 날것 표방 지양"
        },
        "facet": "imagery",
        "description": {
          "en": "The moment the decoration is a deliberate statement about design itself — exposed structure, ugly-on-purpose — it stops being vernacular and becomes brutalism or anti-design.",
          "ko": "장식이 디자인 자체에 대한 의도적 비판이나 못생김을 표방하는 순간 버내큘러 웹이 아닌 안티디자인이나 브루탈리즘이 됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is the Vernacular Web because the page is DECORATED with love — wallpaper, sparkles, badges, a counter — by an amateur showing off their collection.",
        "ko": "구별 이유: 아마추어가 수집한 배경 패턴, 반짝이는 GIF, 방명록, 카운터 등 애정을 담아 과시적으로 꾸민 아날로그 웹이므로 버내큘러 웹에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become web brutalism if all decoration were stripped and the bare HTML skeleton — default type, blue links, no ornament — were exposed as a deliberate designer statement.",
        "ko": "변경 조건: 모든 장식이 제거되고 기본 서체, 파란색 링크, 장식 없는 생 HTML 뼈대만 의도적으로 노출되면 웹 브루탈리즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface in the Vernacular Web style — a sincere 90s GeoCities-era personal homepage, not a parody. Defining signals: a tiled repeating background image (starry sky reads instantly); animated GIF-style ornaments — twinkling sparkles, a striped under-construction badge; a centered single column of system serif type with a rainbow-gradient horizontal rule between sections; the collected-participation footer — visitor counter in green LED digits on black, 'sign my guestbook' link, webring badge, 'best viewed at 800x600' line. Loud colored or blinking emphasis text is period-correct. Keep the specific ornaments flexible — the mood is a proud amateur's decorated scrapbook. Do not drift into web brutalism: this page is ornamented with love, never stripped bare as a statement. Preserve legibility (solid or high-contrast panels behind text over busy wallpaper), respect prefers-reduced-motion by pausing blinks and twinkles, and keep counters and badges decorative, not functional claims.",
      "ko": "버내큘러 웹 스타일을 적용합니다. 정의 신호: 90년대 지오시티 감성의 바둑판배열 반복 배경 이미지, 반짝이는 별과 공사중 배지 등 GIF 장식, 무지개 그래디언트 구분선과 중앙 정렬 구조, 방문자 카운터 및 방명록 하단 배지입니다. 순수한 아마추어의 애정 어린 꾸미기 느낌을 살리되, 복잡한 배경 위 텍스트 단색 패널 배치, blink 애니메이션의 prefers-reduced-motion 대응 및 접근성 명암비를 보장합니다."
    },
    "accessibility": {
      "en": "Text directly over a busy tiled background is unreadable — put body copy on a solid panel, and save the wallpaper for the margins.\n\nBlinking and twinkling must pause under prefers-reduced-motion, and nothing should blink faster than 3 times per second (WCAG seizure threshold).\n\nRainbow and neon text colors rarely hit 4.5:1 on dark wallpaper — reserve them for decoration, keep content text plain and high-contrast.",
      "ko": "조악한 90년대 웹 스타일이라도 최소한의 독해성 및 접근성은 유지해야 함.\n깜빡이는 텍스트(<blink>)나 gif 애니메이션은 발작 위험 및 모션 피로를 유발하므로 prefers-reduced-motion을 준수함.\n원색 배경 위 텍스트 명암비 4.5:1을 준수함."
    },
    "a11yAndMisuse": {
      "en": "Text directly over a busy tiled background is unreadable — put body copy on a solid panel, and save the wallpaper for the margins.\n\nBlinking and twinkling must pause under prefers-reduced-motion, and nothing should blink faster than 3 times per second (WCAG seizure threshold).\n\nRainbow and neon text colors rarely hit 4.5:1 on dark wallpaper — reserve them for decoration, keep content text plain and high-contrast.",
      "ko": "조악한 90년대 웹 스타일이라도 최소한의 독해성 및 접근성은 유지해야 함.\n깜빡이는 텍스트(<blink>)나 gif 애니메이션은 발작 위험 및 모션 피로를 유발하므로 prefers-reduced-motion을 준수함.\n원색 배경 위 텍스트 명암비 4.5:1을 준수함."
    },
    "origin": {
      "en": "The mid-1990s free-hosting web — GeoCities, Angelfire, Tripod — where millions of first-time authors decorated pages from shared GIF collections. Olia Lialina documented and named the culture in 'A Vernacular Web' (2005) and, with Dragan Espenschied, preserved a terabyte of GeoCities before its 2009 shutdown.",
      "ko": "1990년대 중후반 월드 와이드 웹 초창기 일반 대중이 직접 HTML을 작성하며 형성된 독자적 웹 문화입니다."
    },
    "meta": {}
  },
  {
    "slug": "aqua",
    "name": {
      "en": "Aqua",
      "ko": "아쿠아"
    },
    "tagline": {
      "en": "Aqua is the design language Mac OS X launched with in 2000: controls rendered as translucent candy gel — deep specular highlights over luminous water-blue — on pinstriped surfaces, with gumdrop red/yellow/green window controls, soft drop shadows layering the windows, and fluid animation everywhere (the default button literally pulsed, and windows poured into the Dock through the genie effect). Apple pitched it as an interface with the fluidity and depth of water.",
      "ko": "반짝이는 사탕 모양의 신호등 버튼, 투명한 줄무늬 질감, 액체 같은 유광 재질의 초기 Mac OS X GUI"
    },
    "scope": {
      "en": "Scope: This entry covers the original 2000s-era Aqua (Mac OS X 10.0 through roughly Tiger). Later macOS flattened and frosted the language step by step — don't blend brushed-metal-era, Yosemite, or today's macOS into it; Apple's current glass language is Liquid Glass.",
      "ko": "범위: 2000년 스티브 잡스가 선보인 맥 OS X의 사탕 같은 젤리 비주얼 스타일입니다."
    },
    "aliases": {
      "en": [
        "the old mac buttons that looked like blue candy",
        "gel buttons you wanted to lick",
        "pinstripe windows from early mac os x",
        "the gumdrop red yellow green window buttons",
        "glossy blue scroll bars on old macs",
        "the save button that pulsed like it was breathing",
        "classic mac os x candy buttons",
        "pinstripe window aqua gel",
        "apple gumdrop controls"
      ],
      "ko": [
        "파란 사탕 모양의 클래식 Mac OS X 버튼",
        "핥고 싶어지는 사탕 질감의 젤 버튼",
        "초기 Mac OS X 윈도우의 핀스트라이프 줄무늬",
        "빨강, 노랑, 초록 신호등 창 제어 버튼",
        "구형 Mac의 광택 블루 스크롤 바",
        "숨쉬듯 맥동하는 저장 버튼",
        "초기 Mac OS X 사탕 버튼",
        "아쿠아 젤리 신호등 창",
        "핀스트라이프 줄무늬 UI"
      ]
    },
    "signals": [
      {
        "id": "candy-gel",
        "role": "defining",
        "name": {
          "en": "Candy-gel controls",
          "ko": "캔디 젤 느낌의 컨트롤"
        },
        "facet": "depth",
        "description": {
          "en": "Buttons and scrollbar thumbs look like translucent gel drops: a bright specular highlight across the top, an inner glow beneath, and color that seems lit from inside.",
          "ko": "버튼과 스크롤바가 반투명 젤리처럼 투명하고 영롱하며, 상단에 강한 광택 반사점과 내부에서 빛나는 느낌을 가짐."
        }
      },
      {
        "id": "pinstripe-surface",
        "role": "defining",
        "name": {
          "en": "Pinstriped surfaces",
          "ko": "핀스트라이프(미세 줄무늬) 표면"
        },
        "facet": "surface",
        "description": {
          "en": "Window backgrounds and title bars carry fine alternating light stripes — the signature Aqua wallpaper-of-the-chrome.",
          "ko": "윈도우 배경과 타이틀 바에 은은하게 교차하는 수평 미세 줄무늬 패턴이 적용되어 아쿠아의 시그니처 표면을 형성함."
        }
      },
      {
        "id": "gumdrop-controls",
        "role": "defining",
        "name": {
          "en": "Gumdrop window controls",
          "ko": "구체형 신호등 창 제어 버튼"
        },
        "facet": "geometry",
        "description": {
          "en": "The close/minimize/zoom trio as glossy red, yellow, and green candy spheres in the title bar's top-left corner.",
          "ko": "타이틀 바 좌측 상단에 광택 나는 빨강, 노랑, 초록 알사탕 형태의 닫기/최소화/확대 버튼이 위치함."
        }
      },
      {
        "id": "water-blue",
        "role": "defining",
        "name": {
          "en": "Luminous water blue",
          "ko": "투명한 영롱한 물빛 블루"
        },
        "facet": "color",
        "description": {
          "en": "The palette centers on Aqua's namesake: saturated, water-lit blue for default buttons, selection, scrollbars, and progress.",
          "ko": "기본 버튼, 선택 항목, 스크롤바, 진행 상태 표시에 물빛이 감도는 고채도 블루 컬러를 핵심 팔레트로 사용함."
        }
      },
      {
        "id": "fluid-motion",
        "role": "supporting",
        "name": {
          "en": "Fluid, liquid motion",
          "ko": "유체같이 부드러운 모션"
        },
        "facet": "motion",
        "description": {
          "en": "The default button pulses like breathing, and windows minimize through the liquid genie effect — motion sells the water metaphor.",
          "ko": "기본 버튼이 호흡하듯 천천히 맥동(Pulse)하고, 윈도우가 지니 효과로 빨려 들어가듯 은유적 액체 애니메이션을 보여줌."
        }
      },
      {
        "id": "layered-shadows",
        "role": "supporting",
        "name": {
          "en": "Soft window shadows",
          "ko": "부드러운 깊은 윈도우 그림자"
        },
        "facet": "depth",
        "description": {
          "en": "Deep, soft drop shadows float windows in real layers over the desktop — depth Mac OS 9 never had.",
          "ko": "깊고 부드러운 드롭 섀도우가 바탕화면 위로 윈도우를 실질적인 레이어로 띄워 입체감을 부여함."
        }
      },
      {
        "id": "flat-translucency",
        "role": "avoid",
        "name": {
          "en": "Flat frosted translucency",
          "ko": "젤 광택 없는 매트한 반투명 지양"
        },
        "facet": "depth",
        "description": {
          "en": "A blurred panel without the gel gloss is a different, later idea — that's glassmorphism/vibrancy territory, not Aqua.",
          "ko": "젤 광택이 없는 단순 매트 블러 패널은 아쿠아가 아닌 후대의 글래스모피즘이나 바이브런시(Vibrancy) 영역임."
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Aqua because it's one vendor's complete, systematic OS language — the same gel buttons, pinstripes, and gumdrops on every Mac.",
        "ko": "구별 이유: 동일한 젤 버튼, 핀스트라이프 배경, 신호등 버튼이 전체 Mac OS X 시스템에 체계적으로 적용된 단일 운영체제 디자인 언어이므로 아쿠아에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would be just Y2K if it were the era's freelance futurism — liquid chrome, lens flares, techno type — without Apple's specific system behind it. (Aqua is the OS-shaped island inside the Y2K sea.)",
        "ko": "변경 조건: 애플 특유의 OS 체계 없이 당대 프리랜서 사이버 미래주의(액상 크롬, 렌즈 플레어, 테크노 서체) 요소로만 채워지면 Y2K가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Apple's original Aqua (early Mac OS X) design language. Defining signals: candy-gel controls — luminous water-blue fills with a bright specular highlight across the top half and an inner glow, e.g. layered radial-gradient highlight over linear-gradient(#5f9ff5, #1862d8); fine pinstriped window surfaces (repeating-linear-gradient, ~1px stripes at low contrast); gumdrop red/yellow/green window controls as glossy spheres, top-left; the default button gently pulsing (a slow glow loop, disabled under prefers-reduced-motion); soft deep window shadows. Keep layout and density flexible — this is chrome and controls, not a layout system. Do not drift into generic glassmorphism: Aqua's material is glossy opaque gel on pinstripes, not blurred frosted panels. Preserve 4.5:1 text contrast on gel fills (white text with a subtle down-shadow is period-correct), full keyboard focus states, and reduced-motion alternatives for the pulse.",
      "ko": "아쿠아(Aqua) 스타일을 적용합니다. 정의 신호: 상단 반사광과 내부 발광이 어우러진 물빛 캔디 젤 컨트롤, 은은한 수평 핀스트라이프 표면 패턴, 광택 구체 형태의 빨강/노랑/초록 신호등 버튼, 은은하게 맥동하는 기본 버튼 및 깊은 드롭 섀도우입니다. 젤 하이라이트 CSS 레이어와 핀스트라이프 패턴을 활용하며, 맥동 모션에 prefers-reduced-motion 대응을 적용하고 젤 필 위 텍스트 명암비를 보장합니다."
    },
    "accessibility": {
      "en": "White label text on mid-blue gel hovers near the contrast line — keep the gel's center dark enough for 4.5:1, as Apple's own dark-bottom gradient did.\n\nThe pulsing default button is motion with no information — pause it under prefers-reduced-motion and never make the pulse the only 'default action' cue.\n\nPinstripes behind small text add visual noise; drop the stripe contrast (2 to 3 percent) or mask them behind content panels.",
      "ko": "아쿠아의 입체적인 액체 버튼은 시각적 어포던스가 뛰어남. 단, 반사광 영역 텍스트 명암비를 4.5:1 이상 확보할 것.\n기본 포커스 링인 아우라 링을 명확히 제공함.\n모션 줄이기 사용 시 액체 흔들림 및 펄스 효과 정지."
    },
    "a11yAndMisuse": {
      "en": "White label text on mid-blue gel hovers near the contrast line — keep the gel's center dark enough for 4.5:1, as Apple's own dark-bottom gradient did.\n\nThe pulsing default button is motion with no information — pause it under prefers-reduced-motion and never make the pulse the only 'default action' cue.\n\nPinstripes behind small text add visual noise; drop the stripe contrast (2 to 3 percent) or mask them behind content panels.",
      "ko": "아쿠아의 입체적인 액체 버튼은 시각적 어포던스가 뛰어남. 단, 반사광 영역 텍스트 명암비를 4.5:1 이상 확보할 것.\n기본 포커스 링인 아우라 링을 명확히 제공함.\n모션 줄이기 사용 시 액체 흔들림 및 펄스 효과 정지."
    },
    "origin": {
      "en": "Introduced by Steve Jobs at Macworld San Francisco, January 2000, alongside Mac OS X's public debut; shipped in Mac OS X 10.0 (2001) and defined the Mac's look for the decade, its gel gloss echoing the era's translucent iMac hardware.",
      "ko": "2000년 Macworld에서 Mac OS X의 시그니처 GUI로 스티브 잡스에 의해 최초 공개되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "windows-aero",
    "name": {
      "en": "Windows Aero",
      "ko": "윈도우 에어로"
    },
    "tagline": {
      "en": "Windows Aero is Microsoft's Vista and Windows 7 desktop language: window FRAMES rendered as transparent blurred glass with specular light sweeps, so the desktop glows through every title bar; luminous color gradients; caption buttons that light up under the cursor (the red close glow); shimmering green progress bars; and smooth window motion like Flip 3D and the minimize animation. Microsoft's launch messaging named the glass, the reflections, and the animation as the product.",
      "ko": "유리 같은 유선형 타이틀바, 실시간 반사 효과, 은은한 라이팅이 특징인 윈도우 비스타 및 7의 유광 스타일"
    },
    "scope": {
      "en": "Scope: This entry covers Microsoft's actual OS chrome (Vista 2006 to Windows 7, retired by Windows 8's flat Metro). The broader glossy eco-tech mood of the same years — sky, grass, water imagery — is Frutiger Aero, a retrospective label that borrowed Aero's name.",
      "ko": "범위: 마이크로소프트의 2006~2011년 디자인 언어인 에어로 글래스 비주얼을 다룹니다."
    },
    "aliases": {
      "en": [
        "the see-through window borders in windows 7",
        "frosted glass titlebars from vista",
        "the close button that glows red when you hover it",
        "windows with transparent blurry frames",
        "the glassy taskbar with reflections",
        "the green shimmering progress bar from windows 7",
        "windows vista translucent glass",
        "aero glass window borders",
        "frutiger vista style"
      ],
      "ko": [
        "윈도우 비스타 및 7 특유의 유광 유리 창 프레임",
        "반투명 캡션 바와 3D 에어로 플립 창 전환",
        "물방울과 오로라 배경의 에어로 글래스 인터페이스",
        "대각선 광택 하이라이트가 있는 비스타 버튼",
        "초기 2000년대 윈도우 유광 디자인",
        "윈도우 비스타 에어로 글래스",
        "투명한 유리 창 테두리",
        "윈도우 7 에어로 미학"
      ]
    },
    "signals": [
      {
        "id": "glass-frame",
        "role": "defining",
        "name": {
          "en": "Transparent blurred window frame",
          "ko": "에어로 글래스 창 프레임"
        },
        "facet": "depth",
        "description": {
          "en": "The title bar and window border are real translucent glass — the wallpaper and windows behind blur through them, while the window's content area stays opaque.",
          "ko": "반투명 윈도우 테두리와 타이틀 바가 바탕화면을 블러 처리하며 상단 1px 가장자리에서 빛을 반사함."
        }
      },
      {
        "id": "specular-sweeps",
        "role": "defining",
        "name": {
          "en": "Specular sweeps and reflections",
          "ko": "대각선 광택 하이라이트"
        },
        "facet": "surface",
        "description": {
          "en": "Diagonal light streaks cross the glass and controls, as if the chrome were polished — reflection is part of the material, not an accent.",
          "ko": "버튼과 헤더 바 상단에 명확한 대각선 또는 50% 경계의 반사광 오버레이가 적용되어 수분감 있는 유광을 띰."
        }
      },
      {
        "id": "hover-glow",
        "role": "defining",
        "name": {
          "en": "Glowing hot controls",
          "ko": "오로라 및 자연풍경 배경"
        },
        "facet": "color",
        "description": {
          "en": "Controls light up under the cursor: the close button floods red, min/max glow blue, buttons gain a luminous halo — glow is the hover language.",
          "ko": "빛나는 시안/호박색 오로라, 푸른 초원 등 마이크로소프트 시그니처 배경이 글래스 프레임을 통해 투과됨."
        }
      },
      {
        "id": "luminous-gradients",
        "role": "defining",
        "name": {
          "en": "Luminous depth gradients",
          "ko": "빛나는 시안 및 청록 강조색"
        },
        "facet": "color",
        "description": {
          "en": "Blues and greens that glow as if backlit — the shimmering green progress bar and pearlescent button fills, never flat color.",
          "ko": "진행률 바, 활성 태스크바 탭, 기본 버튼에 고채도 시안 청록색과 밝은 블루 발광 효과를 적용함."
        }
      },
      {
        "id": "window-motion",
        "role": "supporting",
        "name": {
          "en": "Smooth window choreography",
          "ko": "Segoe UI 가독성 서체"
        },
        "facet": "motion",
        "description": {
          "en": "Windows animate open, minimize with a swoop, and stack in Flip 3D — composited motion was the point of the new rendering engine.",
          "ko": "글래스 위 가독성을 위해 미세한 글자 그림자가 적용된 깔끔한 Segoe UI 서체를 사용함."
        }
      },
      {
        "id": "rounded-chrome",
        "role": "supporting",
        "name": {
          "en": "Softly rounded chrome",
          "ko": "입체적 창 중첩 및 에어로 플립"
        },
        "facet": "geometry",
        "description": {
          "en": "Window corners and buttons are gently rounded with 1px bright edge highlights lining the glass.",
          "ko": "윈도우들이 입체 그림자와 함께 중첩되며 3D 사선 원근감 패널로 전환되는 입체 효과를 선사함."
        }
      },
      {
        "id": "nature-imagery",
        "role": "avoid",
        "name": {
          "en": "Nature imagery as requirement",
          "ko": "플랫 메트로 타일 지양"
        },
        "facet": "imagery",
        "description": {
          "en": "Grass, sky, and fish belong to the era's mood, not the OS chrome — needing them means you're describing Frutiger Aero.",
          "ko": "글래스와 광택이 없는 단색 평면 타일은 에어로를 대체한 윈도우 8 메트로 디자인 영역임."
        }
      }
    ],
    "confusedWith": {
      "slug": "frutiger-aero",
      "name": "Frutiger Aero",
      "because": {
        "en": "This is Windows Aero because it's the OS chrome itself — glass window frames, glowing caption buttons, luminous progress bars, shipped by Microsoft.",
        "ko": "구별 이유: 마이크로소프트가 비스타/윈도우 7 시대에 도입한 특유의 에어로 글래스 캡션 바, 수평 유광 하이라이트, 사막/오로라 벽지 시스템이므로 윈도우 에어로에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Frutiger Aero if you meant the whole era's optimistic eco-tech MOOD — glossy nature wallpapers, water droplets, skies — which surrounded the chrome but isn't the chrome.",
        "ko": "변경 조건: 윈도우 시스템 창 프레임이 사라지고 파란 하늘, 초원, 부유하는 비눗방울 중심의 웹/마케팅 그래픽으로 확산되면 프루티거 에어로가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Windows Aero (Vista/7) styling. Defining signals: the window frame as transparent blurred glass — title bar and border show the scene behind them (backdrop-filter: blur(12px) saturate(1.3) on a rgba white/blue tint) while the content area stays opaque; diagonal specular light sweeps across the glass (a rotated linear-gradient white streak at low opacity); caption buttons that GLOW on hover — close floods red with a soft outer halo; luminous gradients for accents, like the shimmering green progress bar (gradient + a slow-moving highlight); 1px bright inner edge lining every glass pane; softly rounded chrome corners. Keep wallpaper and layout flexible — the glass needs something colorful behind it to read. Do not drift into Frutiger Aero: no nature imagery is required — this is the chrome language, not the era's mood board. Preserve title text legibility over unpredictable wallpapers (Aero drew a soft glow behind window titles — replicate it), 4.5:1 contrast for content text, hover glows paired with visible focus states, and reduced-motion alternatives for shimmer and window animation.",
      "ko": "윈도우 에어로(Windows Aero) 스타일을 적용합니다. 정의 신호: 윈도우 캡션 바의 반투명 에어로 글래스 프레임, 대각선 유광 하이라이트 캡, 오로라 및 초원 배경 투과, 발광하는 시안/청록 강조색, Segoe UI 서체입니다. backdrop-filter 블러와 50% 분할 광택 그래디언트를 활용하며, 글래스 하단 텍스트 가독성을 위해 불투명 폴백 및 스크림 레이어를 제공합니다."
    },
    "accessibility": {
      "en": "Glass over an unknown wallpaper makes title text unpredictable — Aero itself painted a soft white glow behind captions; do the same or guarantee a dark tint.\n\nHover glow is invisible to keyboard users — every glowing control needs an equally visible :focus-visible treatment.\n\nbackdrop-filter over animated content is expensive; on low-power devices provide a solid fallback (Vista itself shipped 'Aero Basic' for exactly this).",
      "ko": "에어로 글래스 뒤의 스크롤 콘텐츠가 텍스트 독해를 방해하지 않도록 텍스트 하단에 사막/스모크 스크림 패널을 둘 것.\n고대비 모드(High Contrast Mode) 지원 시 반투명 글래스를 불투명 배경으로 대체함."
    },
    "a11yAndMisuse": {
      "en": "Glass over an unknown wallpaper makes title text unpredictable — Aero itself painted a soft white glow behind captions; do the same or guarantee a dark tint.\n\nHover glow is invisible to keyboard users — every glowing control needs an equally visible :focus-visible treatment.\n\nbackdrop-filter over animated content is expensive; on low-power devices provide a solid fallback (Vista itself shipped 'Aero Basic' for exactly this).",
      "ko": "에어로 글래스 뒤의 스크롤 콘텐츠가 텍스트 독해를 방해하지 않도록 텍스트 하단에 사막/스모크 스크림 패널을 둘 것.\n고대비 모드(High Contrast Mode) 지원 시 반투명 글래스를 불투명 배경으로 대체함."
    },
    "origin": {
      "en": "Shipped with Windows Vista in 2006 (premium editions) as the flagship of the Desktop Window Manager's new composited rendering, refined and default in Windows 7 (2009); Windows 8 (2012) removed the glass for flat Metro chrome.",
      "ko": "2006년 Windows Vista와 함께 도입되어 Windows 7까지 마이크로소프트의 플래그십 UI로 사용되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "swiss-style",
    "name": {
      "en": "Swiss Style (International Typographic Style)",
      "ko": "스위스 스타일"
    },
    "tagline": {
      "en": "Swiss Style treats graphic design as engineering: content locked to a mathematical grid, set in one neutral grotesk (Helvetica, Akzidenz-Grotesk), aligned flush left, ragged right, printed black on white with a single flat accent — classically Swiss red. Photography is objective documentation, never illustration; decoration is abolished. Crystallized in 1950s Switzerland, it became the default voice of corporate identity and wayfinding, and its grid logic still underpins most 'clean' interfaces.",
      "ko": "엄격한 그리드 시스템, 산세리프 타이포그래피, 비대칭 레이아웃으로 전달하는 국제 타이포그래피 양식"
    },
    "scope": {
      "en": "Scope: Covers the typographic discipline — grid system, neutral grotesk type, flush-left setting, objective photography — wherever it surfaces, from posters to app UIs. The wider 'Swiss design' umbrella (furniture, watches, architecture) stays out; the Minimalism boundary is drawn in confusedWith.",
      "ko": "범위: 1950년대 스위스 디자인 및 모던 그래픽 디자인의 정통 가이드를 다룹니다."
    },
    "aliases": {
      "en": [
        "posters with huge helvetica and a red square",
        "black and white design with one red accent",
        "that museum poster look where everything snaps to a grid",
        "text all left-aligned with the right edge messy",
        "the 60s corporate annual report style",
        "tons of white space but everything lined up on invisible lines",
        "international typographic style",
        "grid based typography design",
        "helvetica swiss poster"
      ],
      "ko": [
        "그리드 시스템 기반의 스위스 국제 타이포그래피 양식",
        "헬베티카(Helvetica) 서체 중심의 가독성 UI",
        "비대칭 그리드 구조와 우측 여백 레이아웃",
        "여백의 미와 타이포그래피 정렬 중심의 디자인",
        "객관적 정보 전달을 위한 미니멀 그리드",
        "스위스 타이포그래피 스타일",
        "엄격한 그리드와 헬베티카",
        "국제 타이포그래픽 양식"
      ]
    },
    "signals": [
      {
        "id": "grid-system",
        "role": "defining",
        "name": {
          "en": "Mathematical grid system",
          "ko": "수학적 모듈러 그리드"
        },
        "facet": "layout",
        "description": {
          "en": "Every edge and baseline locks to an underlying column grid — classically 4–12 columns with constant gutters, plus a vertical baseline rhythm (e.g. 8px steps). An element that misses its grid line is a defect, not a choice.",
          "ko": "모든 콘텐츠가 다중 컬럼 모듈러 그리드에 엄격히 맞물려 시각적 질서와 체계성을 유지함."
        }
      },
      {
        "id": "neutral-grotesk",
        "role": "defining",
        "name": {
          "en": "One neutral grotesk",
          "ko": "좌측 정렬 산세리프 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Helvetica, Akzidenz-Grotesk, or Univers (Inter or Arial on the web) carries everything alone; hierarchy comes from size and weight only — 700 headlines against 400 body — never from decorative faces.",
          "ko": "Helvetica, Univers 등 중립적인 산세리프 서체를 좌측 정렬 및 우측 자유 정렬(Flush-left, ragged-right)로 배치함."
        }
      },
      {
        "id": "flush-left",
        "role": "defining",
        "name": {
          "en": "Flush left, ragged right",
          "ko": "비대칭 균형감"
        },
        "facet": "layout",
        "description": {
          "en": "All text hangs from a hard left axis and the right edge is left to rag. Justified blocks and centered headlines break the discipline instantly.",
          "ko": "중앙 정렬 대칭을 배제하고 비대칭 레이아웃과 여백을 활성 구조 요소로 활용함."
        }
      },
      {
        "id": "black-white-red",
        "role": "defining",
        "name": {
          "en": "Black, white, one accent",
          "ko": "객관적 보도 사진 활용"
        },
        "facet": "color",
        "description": {
          "en": "Paper-white ground (#fff or #f4f4f0), near-black ink (#111), and exactly one flat accent — classic Swiss red #e30613. No gradients, no second hue.",
          "ko": "장식적 일러스트를 배제하고 명확하고 객관적인 흑백 또는 고대비 보도 사진을 활용함."
        }
      },
      {
        "id": "objective-photography",
        "role": "defining",
        "name": {
          "en": "Objective photography",
          "ko": "단색 바탕과 단일 원색 포인트"
        },
        "facet": "imagery",
        "description": {
          "en": "Documentary black-and-white photos, cropped to rectangular grid modules and treated as factual records that replace illustration. Filters, duotones, and staged whimsy are foreign.",
          "ko": "흑백 및 회색 바탕에 스위스 레드(#e3000f) 같은 단 하나의 명확한 포인트를 적용함."
        }
      },
      {
        "id": "asymmetric-balance",
        "role": "supporting",
        "name": {
          "en": "Asymmetric balance",
          "ko": "대담한 타이포그래피 크기 대비"
        },
        "facet": "layout",
        "description": {
          "en": "A heavy typographic mass in one corner counterweighed by empty space elsewhere; the composition balances through grid position, never mirror symmetry.",
          "ko": "헤드라인과 본문 간의 극단적인 크기 차이를 통해 명확한 시각적 위계를 수립함."
        }
      },
      {
        "id": "accent-choice",
        "role": "variable",
        "name": {
          "en": "Which single accent",
          "ko": "장식적 문양 지양"
        },
        "facet": "color",
        "description": {
          "en": "Swiss red is the cliché; the rule is one flat accent per composition — blue or orange versions stay Swiss as long as the rest of the discipline holds.",
          "ko": "장식 목적의 아이콘, 테두리, 그래디언트, 그림자는 스위스 스타일의 객관적 명확성을 해치므로 지양함."
        }
      },
      {
        "id": "ornament",
        "role": "avoid",
        "name": {
          "en": "Ornament and softness",
          "ko": "중앙 정렬 대칭 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Drop shadows, gradients, rounded corners, serifs, textures — decoration of any kind marks another school. Swiss surfaces are flat paper and ink.",
          "ko": "중앙 정렬이나 대칭 컬럼은 스위스 스타일 고유의 비대칭 서체 리듬을 파괴함."
        }
      }
    ],
    "confusedWith": {
      "slug": "minimalism",
      "name": "Minimalism",
      "because": {
        "en": "This is Swiss Style because it is a complete discipline, not an absence: an explicit mathematical grid, one neutral grotesk set flush left, and objective photography — the page is organized by rules, not merely emptied.",
        "ko": "구별 이유: 수학적 그리드, 산세리프 서체(Helvetica/Univers), 비대칭 정렬, 객관적 정보 전달을 위한 정갈한 시각 구조에 엄격히 기반하므로 스위스 스타일(국제 타이포그래피 양식)에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Minimalism if you kept the white space but dropped the system — center the type, switch to a serif or a rounded face, or place elements by feel instead of snapping them to grid lines — because then only the emptiness remains.",
        "ko": "변경 조건: 엄격한 타이포그래피 그리드가 삼원색 기하학 도형(빨간 원, 노란 삼각형) 및 사선 구성으로 바뀌면 바우하우스가 됨."
      }
    },
    "brief": {
      "en": "Create the surface as a Swiss Style composition. Defining signals: an explicit 12-column grid, 24px gutters, every edge and baseline snapping to it on an 8px rhythm; one neutral grotesk (Helvetica, Arial, or Inter) with hierarchy by size and weight only — 16px body, 72–96px headlines at weight 700, line-height 0.95, letter-spacing -0.02em; all text flush left, ragged right — never justified, never centered; flat paper ground #ffffff, near-black ink #111111, one flat accent — Swiss red #e30613 — spent on one element (marker, rule, or word); imagery as documentary black-and-white photography cropped to grid rectangles; box-shadow: none, border-radius: 0, no gradients, no textures. Keep accent hue and photo subject flexible. Balance asymmetrically: the big type mass sits off-center, white space counterweighs it. Do not drift into Minimalism; the decisive difference is that Swiss is a system, not an absence — center the type or pick a serif and you have left it. Keep contrast at 4.5:1 (black/white is 21:1; #e30613 on white ~4.9:1), visible keyboard focus, and reduced-motion support.",
      "ko": "스위스 스타일(국제 타이포그래피 양식)을 적용합니다. 정의 신호: 엄격한 모듈러 그리드 시스템, 좌측 정렬(Flush-left) 산세리프 서체(Helvetica/Univers), 비대칭 균형, 흑백 바탕에 스위스 레드(#e3000f) 단일 포인트 컬러, 객관적 사진 활용입니다. 장식용 그래디언트와 그림자를 배제하고 그리드 기반 정렬을 유지하며, 명확한 키보드 포커스링과 가독성을 보장합니다."
    },
    "accessibility": {
      "en": "The black-on-white core is a strength — #111 on #fff measures 21:1 — but Swiss red #e30613 on white is only ~4.9:1: fine for text, yet pairings like red on black fail, so measure every accent combination before shipping.\n\nPoster habits do not all transfer: 9–10px captions under 96px headlines are illegible on screen, so keep body text at 16px or above and captions at 12px or above. The ragged-right setting genuinely helps here — it reads easier than justified text for many readers, including people with dyslexia, so discipline and accessibility agree for once.\n\nA rigid 12-column grid can shatter under 200% text zoom; build it with relative units and minmax() so columns reflow instead of clipping. Motion is minimal by nature in this style, but any scroll-triggered grid reveals still need a prefers-reduced-motion fallback.",
      "ko": "격자 시스템 중심의 스위스 스타일은 시각적 질서와 접근성이 우수함. 그리드 밀도가 너무 높아 터치 타깃이 좁아지지 않도록 44px 이상 유지할 것.\n흑백 및 단색 위주의 구성에서 포커스 상태가 명확히 눈에 띄도록 오프셋 라인을 적용함."
    },
    "a11yAndMisuse": {
      "en": "The black-on-white core is a strength — #111 on #fff measures 21:1 — but Swiss red #e30613 on white is only ~4.9:1: fine for text, yet pairings like red on black fail, so measure every accent combination before shipping.\n\nPoster habits do not all transfer: 9–10px captions under 96px headlines are illegible on screen, so keep body text at 16px or above and captions at 12px or above. The ragged-right setting genuinely helps here — it reads easier than justified text for many readers, including people with dyslexia, so discipline and accessibility agree for once.\n\nA rigid 12-column grid can shatter under 200% text zoom; build it with relative units and minmax() so columns reflow instead of clipping. Motion is minimal by nature in this style, but any scroll-triggered grid reveals still need a prefers-reduced-motion fallback.",
      "ko": "격자 시스템 중심의 스위스 스타일은 시각적 질서와 접근성이 우수함. 그리드 밀도가 너무 높아 터치 타깃이 좁아지지 않도록 44px 이상 유지할 것.\n흑백 및 단색 위주의 구성에서 포커스 상태가 명확히 눈에 띄도록 오프셋 라인을 적용함."
    },
    "origin": {
      "en": "Crystallized in Switzerland in the 1950s around two poles — Ernst Keller's teaching at the Kunstgewerbeschule Zürich, and the Basel school where Armin Hofmann and Emil Ruder taught, with Max Bill carrying the Bauhaus inheritance — and codified by Josef Müller-Brockmann, whose 'Grid Systems in Graphic Design' (1981) remains the manual. Its voice, Helvetica, was drawn by Max Miedinger with Eduard Hoffmann at the Haas foundry in 1957 (renamed from Neue Haas Grotesk in 1960); its elder cousin Akzidenz-Grotesk dates to 1896. The journal Neue Grafik (1958–1965) exported the system worldwide, where it became the default language of corporate identity, posters, and wayfinding.",
      "ko": "1950년대 스위스의 쥐르허, 바젤 디자인 학교에서 완성되어 전 세계 그래픽 디자인의 표준이 되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "bauhaus",
    "name": {
      "en": "Bauhaus",
      "ko": "바우하우스"
    },
    "tagline": {
      "en": "Bauhaus is the visual language of the 1919–1933 German school that set out to unify art, craft, and industrial production: compositions are built from the primary shapes — circle, triangle, square — filled with unmixed primaries red, yellow, and blue against black and white, while headlines drop capital letters for Herbert Bayer's all-lowercase geometric alphabet. A century later it is still the default shorthand for geometric modernism in posters, logos, and landing pages.",
      "ko": "기본 도형(원, 삼각, 사각)과 primary 컬러, 형태는 기능을 따른다는 철학의 종합 예술 양식"
    },
    "scope": {
      "en": "Scope: Covers the Bauhaus look as it appears in graphic and UI design — primary-shape construction, a primaries-plus-ink palette, lowercase geometric type. It is not the whole of modernism: Swiss Style is the later grid-locked successor, and De Stijl shares the primaries but locks them into orthogonal black grids.",
      "ko": "범위: 독일 바우하우스 학교의 조형 원리를 현대 UI 디자인에 이식한 기하학적 스타일입니다."
    },
    "aliases": {
      "en": [
        "red yellow and blue circles triangles and squares",
        "geometric posters that look like a kandinsky painting",
        "lowercase geometric fonts with no capital letters at all",
        "that primary color art school style with basic shapes",
        "modernist logos made of a circle a triangle and a square",
        "form follows function geometry",
        "primary colors red yellow blue",
        "bauhaus design school"
      ],
      "ko": [
        "기본 기하학 도형과 삼원색 중심의 바우하우스 양식",
        "빨강, 노랑, 파랑 컬러 블록과 대각선 그리드",
        "형태는 기능을 따른다(Form follows function) 콘셉트",
        "기하학 원, 삼각형, 사각형 구성의 UI",
        "독일 모더니즘 예술 학교 스타일",
        "바우하우스 기하학 미학",
        "기능이 형식을 결정한다",
        "원색 삼원색과 대각선 구도"
      ]
    },
    "signals": [
      {
        "id": "primary-shapes",
        "role": "defining",
        "name": {
          "en": "Circle, triangle, square only",
          "ko": "원형 기하학 도형 (원, 삼각형, 사각형)"
        },
        "facet": "geometry",
        "description": {
          "en": "Every decorative element is one of the three pure shapes — no blobs, stars, or freehand curves. Kandinsky's 1923 mapping still reads: yellow triangle, red square, blue circle.",
          "ko": "빨간 원, 노란 삼각형, 파란 사각형 등 기본 기하학 도형이 디자인 구조 및 포인트 요소로 활용됨."
        }
      },
      {
        "id": "primaries-and-ink",
        "role": "defining",
        "name": {
          "en": "Primaries plus black and white",
          "ko": "삼원색(Red, Yellow, Blue) 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Unmixed red (#e3000f), yellow (#ffd300) and blue (#0057a8) on paper white with ink black — flat opaque fills, no tints, no mid-greys, no gradients.",
          "ko": "혼합되지 않은 원색 빨강, 노랑, 파랑과 검은색, 크림/흰색 바탕의 강렬한 대비."
        }
      },
      {
        "id": "lowercase-universal-type",
        "role": "defining",
        "name": {
          "en": "All-lowercase geometric type",
          "ko": "대각선 동적 레이아웃"
        },
        "facet": "typography",
        "description": {
          "en": "Headlines and labels run with text-transform: lowercase in a constructed geometric sans (Futura, Century Gothic) — Bayer's universal-alphabet gesture: capitals abolished, letters built from circles and straight strokes.",
          "ko": "텍스트와 기하학 바를 45도 또는 60도 사선으로 배치하여 비대칭적 동적 에너지를 부여함."
        }
      },
      {
        "id": "asymmetric-tension",
        "role": "supporting",
        "name": {
          "en": "Asymmetric diagonal tension",
          "ko": "기능을 따르는 형태"
        },
        "facet": "layout",
        "description": {
          "en": "Shapes overlap off-center and collide at angles — diagonal rules and unbalanced placement give the page constructivist energy instead of grid-locked calm.",
          "ko": "구조적/안내적 역할을 하지 않는 불필요한 장식을 제거하고 실용성 자체를 미학으로 삼음."
        }
      },
      {
        "id": "black-bars-rules",
        "role": "supporting",
        "name": {
          "en": "Ink bars and rules",
          "ko": "기하학 산세리프 서체"
        },
        "facet": "geometry",
        "description": {
          "en": "Solid black bars 4–8px thick and thin rules cut across and around the color shapes, acting as scaffolding and punctuation.",
          "ko": "Futura 및 Universal 계열의 기하학적 산세리프 서체를 소문자 중심 또는 강렬한 대문자로 배치함."
        }
      },
      {
        "id": "flat-matte-planes",
        "role": "defining",
        "name": {
          "en": "Flat matte color planes",
          "ko": "비대칭 동적 균형"
        },
        "facet": "surface",
        "description": {
          "en": "Zero depth rendering: no shadows, glows, gradients, or textures — each shape is a single solid color with a hard edge.",
          "ko": "대칭을 피하고 묵직한 기하학적 무게감과 여백, 텍스트 블록 간의 비대칭 균형을 형성함."
        }
      },
      {
        "id": "mechanical-motion",
        "role": "variable",
        "name": {
          "en": "Mechanical geometric motion",
          "ko": "사실적 질감 지양"
        },
        "facet": "motion",
        "description": {
          "en": "When things move, they translate or rotate on straight paths in 150–250ms with linear or crisp easing — machine-like, never springy.",
          "ko": "가죽, 나무, 유광 글래스 등 사실적 모사 질감은 바우하우스의 산업 생산 철학과 상충됨."
        }
      },
      {
        "id": "ornament-depth",
        "role": "avoid",
        "name": {
          "en": "Ornament and soft depth",
          "ko": "파스텔 및 연한 색조 지양"
        },
        "facet": "depth",
        "description": {
          "en": "Drop shadows, cute rounded corners, gradients, serifs, or decorative flourishes break it instantly — in Bauhaus the construction is the only ornament.",
          "ko": "연한 파스텔 색조는 순수 삼원색이 주는 명확성을 약화시키므로 배제함."
        }
      }
    ],
    "confusedWith": {
      "slug": "swiss-style",
      "name": "Swiss Style",
      "because": {
        "en": "This is Bauhaus because the layout is an expressive construction of pure circle, triangle and square in red, yellow and blue with all-lowercase geometric lettering — the composition itself performs, instead of an invisible grid organizing neutral content.",
        "ko": "구별 이유: 기능주의 철학 바탕 위에 원, 삼각형, 사각형 등의 원형 기하학과 삼원색(Red, Yellow, Blue), 대각선 구성을 결합하였으므로 바우하우스에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Swiss Style if the shape play were replaced by documentary photography, the lettering went back to mixed-case neutral grotesk locked to a strict mathematical grid, and the palette drained to black, white and grey plus a single accent — objectivity replacing expression.",
        "ko": "변경 조건: 원, 삼각형, 사선 구성이 사라지고 오직 수평/수직 검은 그리드선과 원색 직사각형만 남게 되면 데 스틸(De Stijl)이 됨."
      }
    },
    "brief": {
      "en": "Build the surface as a Bauhaus composition. Canvas: warm paper #f2eee3, ink #141414. Closed palette: red #e3000f, yellow #ffd300, blue #0057a8 — flat opaque fills only; no tints, gradients, shadows, or textures; corner radius 0–4px. Every decorative element is a pure circle, square, or CSS border-trick triangle (yellow triangle, red square, blue circle); overlap them asymmetrically with one or two diagonal ink bars 4–8px thick — the geometry is the only ornament. Type: constructed geometric sans (Futura, Century Gothic, Avenir Next; web: Jost/Montserrat); headlines/labels use text-transform: lowercase — never a capital; body copy may keep sentence case. Buttons are solid primary blocks with hard edges; hover swaps the fill to another primary, never adds depth. Motion is mechanical: translate/rotate on straight paths, 150–250ms, linear or crisp ease, no spring. Do not drift into Swiss Style: no documentary photography, no mixed-case grotesk on a strict grid, no drained monochrome palette. Keep 4.5:1 text contrast (ink on paper/yellow, paper on red/blue) and a visible focus outline.",
      "ko": "바우하우스(Bauhaus) 스타일을 적용합니다. 정의 신호: 원, 삼각형, 사각형의 기본 기하학 도형 구조, 삼원색(Red #e3000f, Yellow #f9d71c, Blue #0057a8)과 흑백 팔레트, 45도 대각선 서체 및 기하학 바 배치, Futura 계열 기하학 산세리프, '형태는 기능을 따른다'는 기능주의입니다. 노란색 배경 위 흰색 텍스트 등 명암비 파괴를 방지하고 시맨틱 구조를 유지합니다."
    },
    "accessibility": {
      "en": "Red-on-blue and blue-on-red pairings vibrate and fall well below 4.5:1 — never set text or small functional shapes in one primary on another. Ink on paper and on yellow passes easily; paper-white on red (#e3000f) or blue (#0057a8) must be measured per combination. Yellow on white fails badly: reserve yellow for shapes, never for text or thin icons.\n\nAll-lowercase headlines remove the word-shape cues that mixed case provides — acceptable for short display lines, but keep body copy, form labels, and anything longer than a phrase in sentence case, and build hierarchy with size and weight rather than relying on capitals.\n\nOverlapping saturated shapes and diagonal layouts raise cognitive load and can mask interaction order: give every interactive element a visible focus outline (2–3px ink with offset), never communicate state by primary color alone — pair it with a shape or icon change — and honor prefers-reduced-motion for any rotating or sliding geometry.",
      "ko": "기하학적 원색 블록 위 텍스트 명암비 점검 필수 (노란색 위 흰색 글자 금지).\n사선 텍스트 레이아웃 사용 시 스크린 리더 낭독 순서가 DOM 순서와 일치하도록 보장함."
    },
    "a11yAndMisuse": {
      "en": "Red-on-blue and blue-on-red pairings vibrate and fall well below 4.5:1 — never set text or small functional shapes in one primary on another. Ink on paper and on yellow passes easily; paper-white on red (#e3000f) or blue (#0057a8) must be measured per combination. Yellow on white fails badly: reserve yellow for shapes, never for text or thin icons.\n\nAll-lowercase headlines remove the word-shape cues that mixed case provides — acceptable for short display lines, but keep body copy, form labels, and anything longer than a phrase in sentence case, and build hierarchy with size and weight rather than relying on capitals.\n\nOverlapping saturated shapes and diagonal layouts raise cognitive load and can mask interaction order: give every interactive element a visible focus outline (2–3px ink with offset), never communicate state by primary color alone — pair it with a shape or icon change — and honor prefers-reduced-motion for any rotating or sliding geometry.",
      "ko": "기하학적 원색 블록 위 텍스트 명암비 점검 필수 (노란색 위 흰색 글자 금지).\n사선 텍스트 레이아웃 사용 시 스크린 리더 낭독 순서가 DOM 순서와 일치하도록 보장함."
    },
    "origin": {
      "en": "The Staatliches Bauhaus was founded in Weimar in 1919 by architect Walter Gropius, merging the city's art academy and crafts school to unite art, craft, and industrial production; it moved to Dessau in 1925 and Berlin in 1932 before closing in 1933 under Nazi pressure. Wassily Kandinsky and Paul Klee taught its formal grammar — Kandinsky's 1923 questionnaire fixed the yellow triangle, red square, and blue circle — while Herbert Bayer's 1925 'universal' alphabet pushed the all-lowercase geometric lettering. After the closure its masters emigrated — Gropius to Harvard, László Moholy-Nagy to found Chicago's New Bauhaus in 1937 — turning a fourteen-year school into the world's default modernist vocabulary.",
      "ko": "1919년 독일 발터 그로피우스가 설립한 디자인 학교 바우하우스에서 창시되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "memphis",
    "name": {
      "en": "Memphis",
      "ko": "멤피스"
    },
    "tagline": {
      "en": "Memphis is the postmodern design language launched by the Memphis Group in Milan in 1981: calculated 'bad taste' — hot pink, lemon yellow, teal and purple slammed together on white grounds, black-outlined toy geometry, and an allover confetti of squiggles, zigzags, dots and triangles. Born as radical furniture in printed plastic laminate, it was mocked and worshipped alike, dissolved in 1987, and resurrected as the default visual shorthand for 'the eighties' in graphic and UI design.",
      "ko": "파스텔/원색의 유쾌한 혼합, 지그재그 패턴, 기하학적 파편들로 구성된 1980년대 포스트모던 스타일"
    },
    "scope": {
      "en": "Scope: Covers the Memphis Group's original postmodern language (1981–87) and its later revival as pattern-driven 80s styling in graphics and UI. 'Corporate Memphis' — flat, big-limbed vector illustration — is a later namesake with its own entry. Solid color blocks with hard offset shadows and zero patterning belong to Neobrutalism.",
      "ko": "범위: 멤피스 그룹의 자유롭고 규칙을 깨는 개성 넘치는 패턴 디자인 언어입니다."
    },
    "aliases": {
      "en": [
        "80s squiggles and triangles pattern everywhere",
        "that saved by the bell intro style",
        "pink yellow teal shapes with black outlines",
        "geometric confetti background style",
        "retro 80s geometric pattern website",
        "white background with squiggly lines and dots",
        "80s memphis group squiggles",
        "pastel terrazzo pattern design",
        "confetti geometry"
      ],
      "ko": [
        "80년대 멤피스 그룹 스타일의 포스트모던 디자인",
        "지그재그 물결선, 바테리 패턴, 파스텔 컬러",
        "레트로 팝 튜브, 기하학 Confetti, 흩뿌려진 도형",
        "테라조(Terrazzo) 질감과 기발한 포스트모던 UI",
        "규칙을 깨는 유쾌한 80s 팝 에스테틱",
        "80년대 멤피스 그룹 패턴",
        "지그재그 물결선과 테라조 컨페티",
        "팝 기하학 레트로"
      ]
    },
    "signals": [
      {
        "id": "confetti-pattern",
        "role": "defining",
        "name": {
          "en": "Allover confetti pattern",
          "ko": "지그재그 및 물결선"
        },
        "facet": "imagery",
        "description": {
          "en": "Squiggles, zigzags, dots, crosses and tiny triangles scattered edge-to-edge over a white ground — the pattern IS the background, not an accent strip.",
          "ko": "유쾌한 물결선, 바테리 패턴, 톱날 지지선 등이 장식용 구분선과 포인트로 떠다님."
        }
      },
      {
        "id": "squiggle-line",
        "role": "defining",
        "name": {
          "en": "Squiggles and zigzags",
          "ko": "흩뿌려진 기하학 도형 (Confetti)"
        },
        "facet": "geometry",
        "description": {
          "en": "Hand-feeling wavy lines and lightning zigzags, usually 2–4px black strokes — the most-quoted Memphis mark, descended from Sottsass's 1978 'Bacterio' laminate print.",
          "ko": "삼각형, 캡슐, 입체 파이프, 작은 점들이 무작위 파티 컨페티처럼 배경 전체에 흩뿌려짐."
        }
      },
      {
        "id": "clashing-palette",
        "role": "defining",
        "name": {
          "en": "Deliberate color clashes",
          "ko": "바테리 및 테라조 패턴"
        },
        "facet": "color",
        "description": {
          "en": "Hot pink, lemon yellow, teal and purple (e.g. #ff5fa2, #ffd500, #2ec4b6, #7b61ff) placed side by side with no harmonic bridging — the clash is the point.",
          "ko": "에토레 소트사스의 시그니처 바테리(지렁이) 패턴과 알록달록한 테라조 인조석 질감."
        }
      },
      {
        "id": "black-inked-shapes",
        "role": "defining",
        "name": {
          "en": "Black-inked toy shapes",
          "ko": "대비되는 파스텔과 네온 팔레트"
        },
        "facet": "geometry",
        "description": {
          "en": "Circles, triangles, half-donuts and blobs outlined in 2–3px solid black, like cut paper or screen-print ink — playful geometry over grids.",
          "ko": "민트, 플라밍고 핑크, 시안, 카나리아 노랑, 라벤더색이 선명한 검은 윤곽선과 대담하게 대비됨."
        }
      },
      {
        "id": "flat-print-depth",
        "role": "defining",
        "name": {
          "en": "Collage depth, zero cast shadows",
          "ko": "플랫과 3D 기하학의 혼합"
        },
        "facet": "depth",
        "description": {
          "en": "Depth comes only from overlapping flat shapes; nothing casts a shadow — it reads as screen print or laminated paper, not simulated light.",
          "ko": "2D 평면 도형과 아이소메트릭 원기둥, 입체 블록이 한 공간에서 포스트모던하게 조화됨."
        }
      },
      {
        "id": "asymmetric-collage",
        "role": "supporting",
        "name": {
          "en": "Off-grid tilted composition",
          "ko": "규칙을 깨는 유쾌한 비대칭"
        },
        "facet": "layout",
        "description": {
          "en": "Elements rotated a few degrees, overlapped, breaking columns on purpose; tidy symmetry reads as a mistake here.",
          "ko": "모더니즘의 엄격한 그리드를 거부하고 자유롭고 재치 있는 위치 선정을 지향함."
        }
      },
      {
        "id": "laminate-plastic",
        "role": "variable",
        "name": {
          "en": "Plastic-laminate gloss",
          "ko": "차분한 기업 미니멀리즘 지양"
        },
        "facet": "surface",
        "description": {
          "en": "The furniture originals wore glossy printed laminate and terrazzo; UI versions sometimes echo it with speckle textures or a sticker finish — optional.",
          "ko": "차분한 기업형 회색/파랑 미니멀리즘은 멤피스 특유의 위트와 유쾌함을 살리지 못함."
        }
      },
      {
        "id": "offset-shadows",
        "role": "avoid",
        "name": {
          "en": "Hard offset shadows",
          "ko": "만화 및 미디어 서사 요소 배제"
        },
        "facet": "depth",
        "description": {
          "en": "Solid displaced block shadows are neobrutalism's construction; on a Memphis surface they flatten the pattern party into sticker blocks.",
          "ko": "말풍선이나 통조림, 만화 컷은 팝아트 영역이므로 멤피스의 추상 패턴과 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "neobrutalism",
      "name": "Neobrutalism",
      "because": {
        "en": "This is Memphis because the look is pattern-first: squiggles, zigzags, dots and triangles scattered edge-to-edge across the ground, pink/yellow/teal/purple fills clashing underneath, and print-flat depth with no cast shadows.",
        "ko": "구별 이유: 80년대 포스트모더니즘 특유의 지그재그 물결선, 흩뿌려진 기하학 Confetti, 바테리(Bacterio) 패턴, 테라조 질감과 파스텔-네온 컬러 조합으로 자유분방하게 구성되었으므로 멤피스에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become neobrutalism if you swept the confetti off the ground, locked every element into a uniform 2–3px black border, and gave each one a hard black offset shadow — playful pattern collage traded for clean sticker-block construction.",
        "ko": "변경 조건: 추상 기하학 패턴이 사라지고 만화 컷, 대중 상표, 벤데이 망점, 연예인 초상 등 60년대 미디어 서사 요소로 채워지면 팝 아트(Pop Art)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface in the spirit of Memphis (Memphis Group, 1981). Defining signals: allover confetti (squiggles, zigzags, dots, crosses, tiny triangles) on a white #ffffff ground; deliberate clashes of hot pink #ff5fa2, lemon yellow #ffd500, teal #2ec4b6, purple #7b61ff with no harmonic bridging; shapes inked with 2–3px solid #000000 outlines; print-flat depth — overlap alone layers shapes, NOTHING casts a shadow (no box-shadow, gradients, blur). Compose as playful collage: chips rotated ±2–4deg, broken grid, mixed geometries — a circle button beside square tags, squiggle for a divider. Headings: chunky rounded display grotesk, black, weight 700–900; body plain black 14–16px. Interactions bounce: cubic-bezier(.34,1.56,.64,1) overshoot on hover/press. Pattern stays dense in decor zones; long text sits on solid fills. Do not drift into neobrutalism: confetti removed plus uniform borders with 4px 4px 0 #000 offset shadows IS neobrutalism — Memphis is pattern-first with zero cast shadows. Text stays at 4.5:1 on solid fills (never white on yellow or pink); honor prefers-reduced-motion.",
      "ko": "멤피스(Memphis) 포스트모던 스타일을 적용합니다. 정의 신호: 지그재그 물결선, 흩뿌려진 기하학 컨페티 도형(삼각형, 캡슐, 점), 에토레 소트사스 시그니처 바테리/테라조 패턴, 파스텔과 네온 컬러의 대담한 대비, 검은 윤곽선입니다. 흩뿌려진 배경 장식에 aria-hidden='true'를 적용하여 스크린 리더 소음을 방지하고 단색 패널로 텍스트 가독성을 보장합니다."
    },
    "accessibility": {
      "en": "A busy patterned ground destroys text legibility fast: never set body copy directly on the confetti — give text a solid fill (white or one of the palette colors) and measure 4.5:1. White text on #ffd500 or #ff5fa2 fails; black text on those same fills passes.\n\nHigh-saturation clashes plus allover pattern are real cognitive load — the eye gets no resting place. Reserve dense confetti for hero and decoration zones, drop the density behind content, and avoid tiny high-frequency marks (1px dots moiré on screens and vibrate for sensitive readers).\n\nTilted elements and bouncy easing need limits: keep rotations small (±4deg) so text stays readable, and under prefers-reduced-motion replace the overshoot easing with instant state changes — the style survives the swap intact.",
      "ko": "화려한 패턴과 기하학 장식이 텍스트 읽기를 방해하지 않도록 텍스트 영역 하단에는 단색 배경 패널을 둘 것.\n흩뿌려진 장식 요소에 aria-hidden='true'를 적용하여 스크린 리더 소음을 방지함."
    },
    "a11yAndMisuse": {
      "en": "A busy patterned ground destroys text legibility fast: never set body copy directly on the confetti — give text a solid fill (white or one of the palette colors) and measure 4.5:1. White text on #ffd500 or #ff5fa2 fails; black text on those same fills passes.\n\nHigh-saturation clashes plus allover pattern are real cognitive load — the eye gets no resting place. Reserve dense confetti for hero and decoration zones, drop the density behind content, and avoid tiny high-frequency marks (1px dots moiré on screens and vibrate for sensitive readers).\n\nTilted elements and bouncy easing need limits: keep rotations small (±4deg) so text stays readable, and under prefers-reduced-motion replace the overshoot easing with instant state changes — the style survives the swap intact.",
      "ko": "화려한 패턴과 기하학 장식이 텍스트 읽기를 방해하지 않도록 텍스트 영역 하단에는 단색 배경 패널을 둘 것.\n흩뿌려진 장식 요소에 aria-hidden='true'를 적용하여 스크린 리더 소음을 방지함."
    },
    "origin": {
      "en": "The Memphis Group was founded in Milan by designer Ettore Sottsass with a circle of young collaborators — Michele De Lucchi, Nathalie du Pasquier, George Sowden, Marco Zanini, Martine Bedin and others — at a December 1980 meeting where Bob Dylan's 'Stuck Inside of Mobile with the Memphis Blues Again' kept spinning, giving the group its name. Its first collection, shown in Milan in 1981, wrapped toy-like furniture in printed plastic laminates such as Sottsass's squiggly 1978 'Bacterio' pattern; the group disbanded in 1987, and its graphics became the era's shorthand for eighties pop design, revived wholesale by pattern and UI designers in the 2010s.",
      "ko": "1981년 이탈리아 밀라노에서 에토레 소트사스가 이끄는 멤피스 그룹에 의해 시작되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "vaporwave",
    "name": {
      "en": "Vaporwave",
      "ko": "베이퍼웨이브"
    },
    "tagline": {
      "en": "Vaporwave is the visual dialect of the early-2010s internet music microgenre of the same name: a collage of 1980s–90s consumer debris — pastel pink-to-cyan gradient skies, Greek marble busts, Japanese katakana, Windows 95 window chrome, palm-tree sunsets over grid floors — degraded with VHS scanlines, chromatic aberration, and glitch. It treats corporate-utopian imagery as found footage: dreamy, ironic, and worn. A nostalgia remix, not a period original.",
      "ko": "분홍과 보라 네온 그래디언트, 로마 조각상, 90년대 컴퓨터 그래픽과 레트로 서핑 감성의 노스탤지어"
    },
    "scope": {
      "en": "Scope: Covers the visual remix aesthetic, not the music's chopped-and-screwed production. The neon-outrun cousin that shares the sunset grid is synthwave/retrofuturism; the genuine turn-of-millennium original it samples is Y2K Digital Aesthetic (its own entry), and GeoCities-era amateur pages belong to Vernacular Web.",
      "ko": "범위: 2010년대 초반 인터넷 음악 장르에서 파생된 레트로-퓨처리즘 시각 예술 트렌드입니다."
    },
    "aliases": {
      "en": [
        "that pink and teal aesthetic with the greek statue heads",
        "the tumblr look with marble busts and japanese text",
        "retro windows 95 popups over a pink gradient sunset",
        "vhs glitch art with palm trees and katakana",
        "that nostalgic 80s mall fever-dream collage style",
        "the pastel purple grid sunset with statues",
        "80s synthwave neon sunset",
        "greek bust vhs glitch",
        "cyberpunk pink cyan aesthetic"
      ],
      "ko": [
        "80-90년대 레트로 시티팝과 네온 핑크 베이퍼웨이브",
        "가타카나 텍스트, 석양 야자수, 로마 조각상",
        "Windows 95 창과 VHS 스캔라인 감성",
        "퍼플-시안 그래디언트와 레트로 신스웨이브",
        "인터넷 노스탤지어와 가상 공간 미학",
        "베이퍼웨이브 네온 석양",
        "그리스 조각상과 VHS 글리치",
        "80년대 레트로 사이버 감성"
      ]
    },
    "signals": [
      {
        "id": "pink-cyan-gradient",
        "role": "defining",
        "name": {
          "en": "Pink-to-cyan gradient skies",
          "ko": "네온 핑크-시안 석양 그래디언트"
        },
        "facet": "color",
        "description": {
          "en": "The Floral Shoppe wash: cyan #01cdfe at the horizon bleeding through pink #ff71ce and purple #b967ff into deep indigo night. Applied to skies, washes, and type fills — never to chrome or metal.",
          "ko": "핫핑크(#ff71ce)에서 시안(#01cdfe), 퍼플로 이어지는 화려한 네온 그래디언트 노을."
        }
      },
      {
        "id": "marble-busts",
        "role": "defining",
        "name": {
          "en": "Greek marble statuary",
          "ko": "그리스/로마 조각상과 야자수"
        },
        "facet": "imagery",
        "description": {
          "en": "White-to-grey classical busts, heads, and torsos floating in the composition, sometimes sliced, masked, or duplicated. Antiquity is sampled like stock footage — the statue is the mascot.",
          "ko": "마블 헬리오스 조각상, 야자수 실루엣, 80년대 크롬 입체 텍스트가 시그니처로 등장함."
        }
      },
      {
        "id": "win95-chrome",
        "role": "defining",
        "name": {
          "en": "Windows 95 window chrome",
          "ko": "Windows 95 레트로 UI 프레임"
        },
        "facet": "surface",
        "description": {
          "en": "Battleship-grey #c0c0c0 panels with 1–2px hard bevels, blue-gradient title bars, pixel icons, and dialog boxes used as decoration. The dead desktop is a collage element, not a working UI.",
          "ko": "회색 입체 베벨 윈도우 프레임, 회색 입체 버튼, 픽셀 아이콘 등 초기 PC OS 요소를 결합함."
        }
      },
      {
        "id": "katakana-latin",
        "role": "defining",
        "name": {
          "en": "Katakana and full-width latin",
          "ko": "전영역 가타카나 및 전폭 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Japanese katakana — occasionally Chinese signage — placed as pure decoration, beside full-width spaced latin (ＡＥＳＴＨＥＴＩＣ). Meaning is optional; the exotic-mood texture is the point.",
          "ko": "일본어 가타카나 문자 및 글자 간격이 넓은 전폭 서체(Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ) 배치."
        }
      },
      {
        "id": "vhs-decay",
        "role": "defining",
        "name": {
          "en": "VHS decay",
          "ko": "VHS 스캔라인 및 CRT 글리치"
        },
        "facet": "surface",
        "description": {
          "en": "1px horizontal scanlines, chromatic aberration (RGB-split edges), tracking bands, tape noise, PLAY overlays and timestamps. Everything looks copied, worn, and re-recorded rather than rendered clean.",
          "ko": "수평 스캔라인 오버레이, 색수차(Chromatic Aberration), CRT 브라운관 잔상 효과."
        }
      },
      {
        "id": "sunset-grid",
        "role": "supporting",
        "name": {
          "en": "Striped sun and grid floor",
          "ko": "80년대 원근감 와이어프레임 그리드"
        },
        "facet": "imagery",
        "description": {
          "en": "A striped or pixelated sun setting over a perspective grid plane, usually with palm silhouettes — borrowed from synthwave but washed out to pastel.",
          "ko": "디지털 지평선 너머로 아득히 소실되는 네온 보라색 원근 와이어프레임 그리드."
        }
      },
      {
        "id": "glitch-motion",
        "role": "supporting",
        "name": {
          "en": "Glitch and drift",
          "ko": "모던 기업 미니멀리즘 지양"
        },
        "facet": "motion",
        "description": {
          "en": "Elements slice-shift, stutter, and RGB-split in short loops; motion feels like a damaged tape, never a smooth physics animation.",
          "ko": "차분한 흰색 공간과 건조한 모던 레이아웃은 베이퍼웨이브 특유의 레트로 노스탤지어를 파괴함."
        }
      },
      {
        "id": "chrome-futurism",
        "role": "avoid",
        "name": {
          "en": "Chrome-and-gel futurism",
          "ko": "차분한 순수미술 초현실주의 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror chrome, gel gloss, lens flares, and iridescent blue-silver belong to Y2K's forward-looking sheen. Vaporwave surfaces stay matte, faded, and degraded — polish kills the nostalgia.",
          "ko": "차분한 파스텔 톤과 자연스러운 녹는 형태는 80년대 신스팝 감성과 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Vaporwave because it looks BACK: a 2010s remix of 80s/90s debris — pink-to-cyan gradient skies, marble busts, katakana, Windows 95 chrome, and VHS wear — nostalgia as collage, not millennium optimism.",
        "ko": "구별 이유: 80~90년대 소비문화 노스탤지어, 핑크-시안 그래디언트 석양, 그리스/로마 조각상, 가타카나 텍스트, Windows 95 창, VHS 스캔라인 효과로 연출되었으므로 베이퍼웨이브에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Y2K if the gaze flipped forward: drop the busts, katakana, and tape decay, and re-render everything in mirror chrome, gel plastic, and iridescent blue-silver as if the future had just shipped.",
        "ko": "변경 조건: 80/90년대 소비재 요소와 윈도우 창, VHS 글리치, 네온 석양이 사라지고 순수 미술적 꿈의 논리, 녹는 시계, 차분한 달빛 그래디언트로 바뀌면 초현실주의(Surrealism)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Vaporwave. Defining signals: gradient sky running cyan #01cdfe at the horizon through pink #ff71ce and purple #b967ff into indigo #2d1b69; floating white Greek marble statuary; Windows 95 chrome — #c0c0c0 panels with hard 1–2px bevels (inset -1px -1px 0 #0a0a0a, inset 1px 1px 0 #fff), blue-gradient title bars, square corners, zero blur; decorative Japanese katakana plus full-width spaced latin (ＡＥＳＴＨＥＴＩＣ); VHS decay — 1px scanlines at ~20% black, chromatic aberration (text-shadow: -2px 0 #ff71ce, 2px 0 #01cdfe), glitch slice-shifts; a striped sun over a perspective grid floor with palm silhouettes. Keep the choice of consumer fragments (logos, mall imagery) flexible. Type: small plain system sans, black on the grey chrome, white with RGB split over the art. Do not drift into Y2K: the decisive difference is gaze direction — vaporwave looks BACK at the 80s/90s through worn tape, so no mirror chrome, gel gloss, or iridescent blue-silver. Hold text at 4.5:1 on solid plates (never over scanlines), glitch under 3 flashes/sec, and honor prefers-reduced-motion.",
      "ko": "베이퍼웨이브(Vaporwave) 스타일을 적용합니다. 정의 신호: 핫핑크(#ff71ce)와 시안(#01cdfe) 네온 석양 그래디언트, 그리스 조각상과 야자수 오버레이, Windows 95 베벨 창 프레임, 가타카나 및 전폭 텍스트(ＡＥＳＴＨＥＴＩＣ), VHS 스캔라인과 원근 와이어프레임 그리드입니다. 스캔라인 오버레이에 pointer-events: none을 적용하여 인터랙션을 방해하지 않게 하며, prefers-reduced-motion 설정 시 지직거리는 글리치 및 펄스 모션을 정지시킵니다."
    },
    "accessibility": {
      "en": "Pastel-on-pastel is the core failure: pink text over the cyan or purple gradient reads around 1.5–2:1. Put body text on the solid #c0c0c0 chrome (black ink, 15:1+) or on solid dark plates over the art, and treat gradient or chromatic type as decoration with a readable duplicate.\n\nGlitch strobes, slice-shifts, and RGB-split flicker can trigger photosensitive reactions — keep any flashing under 3 per second, disable slice-shifts and flicker under prefers-reduced-motion, and never gate content behind the effect.\n\nDecorative katakana and full-width latin are meaningless to many users and get spelled out character-by-character by screen readers — mark them aria-hidden. Scanline and noise overlays cut effective contrast for low-vision users, so keep those layers out of text.",
      "ko": "네온 핑크/사이언 글라데이션 및 VHS 스캔라인은 눈의 피로를 유발함. 스캔라인 효과는 pointer-events: none 및 반투명 처리함.\nprefers-reduced-motion 설정 시 지직거리는 애니메이션 및 네온 펄스 정지."
    },
    "a11yAndMisuse": {
      "en": "Pastel-on-pastel is the core failure: pink text over the cyan or purple gradient reads around 1.5–2:1. Put body text on the solid #c0c0c0 chrome (black ink, 15:1+) or on solid dark plates over the art, and treat gradient or chromatic type as decoration with a readable duplicate.\n\nGlitch strobes, slice-shifts, and RGB-split flicker can trigger photosensitive reactions — keep any flashing under 3 per second, disable slice-shifts and flicker under prefers-reduced-motion, and never gate content behind the effect.\n\nDecorative katakana and full-width latin are meaningless to many users and get spelled out character-by-character by screen readers — mark them aria-hidden. Scanline and noise overlays cut effective contrast for low-vision users, so keep those layers out of text.",
      "ko": "네온 핑크/사이언 글라데이션 및 VHS 스캔라인은 눈의 피로를 유발함. 스캔라인 효과는 pointer-events: none 및 반투명 처리함.\nprefers-reduced-motion 설정 시 지직거리는 애니메이션 및 네온 펄스 정지."
    },
    "origin": {
      "en": "Vaporwave began as a music microgenre around 2010–2011 in online communities — Bandcamp, Tumblr, and their forums — with Daniel Lopatin's Eccojams Vol. 1 (2010, released under the alias Chuck Person) and the Macintosh Plus album Floral Shoppe (2011, an alias of producer Vektroid) as founding documents; the Floral Shoppe cover — pink wash, marble bust, katakana — set the visual template. James Ferraro's Far Side Virtual (2011) supplied the corporate-utopia source material, and the name puns on 'vaporware'. The collage aesthetic peaked on Tumblr around 2012–2015.",
      "ko": "2010년대 인터넷 커뮤니티(Tumblr, Reddit)에서 레트로 음악 장르와 함께 발전한 유기적 문화입니다."
    },
    "meta": {}
  },
  {
    "slug": "art-deco",
    "name": {
      "en": "Art Deco",
      "ko": "아르데코"
    },
    "tagline": {
      "en": "Art Deco is the geometry of luxury: mirror symmetry, sunburst and fan motifs, stepped ziggurat silhouettes, and gold linework on lacquer black with jewel accents. Named after the 1925 Paris Exposition des arts décoratifs, it gave the Chrysler Building its crown and Gatsby its glow. Where Bauhaus stripped geometry to function, Deco piled it on — gilded all-caps lettering and ornament dense enough to feel machined. It faded with wartime austerity and revives whenever design wants opulence.",
      "ko": "화려한 금빛 기하학 패턴, 대칭 구조, 1920년대 위대한 개츠비 시대의 기품 있는 기하학 양식"
    },
    "scope": {
      "en": "Scope: This entry covers the ornamental 1920s–30s Deco look and its later revivals as a UI and branding style. Its chrome-and-speed-lines 1930s offshoot, Streamline Moderne, is a related but distinct flavor; the era's functional-geometry movement across the Atlantic is Bauhaus.",
      "ko": "범위: 1920~30년대 아르데코 장식 예술을 현대적 럭셔리 UI 화면에 적용한 스타일입니다."
    },
    "aliases": {
      "en": [
        "great gatsby party invitation style",
        "black and gold fancy 1920s look",
        "gold lines and sun rays vintage luxury design",
        "roaring twenties geometric borders",
        "old hollywood glam wedding website style",
        "that chrysler building looking gold and black ui",
        "1920s gatsby luxury gold",
        "stepped chevron geometric gold",
        "luxurious metal symmetry"
      ],
      "ko": [
        "1920년대 위대한 개츠비 감성의 아르데코",
        "황금빛 부채꼴 선버스트와 대칭적 기하학 패턴",
        "블랙과 럭셔리 골드 라인 프레임",
        "제즈 시대 직지 수직 스트라이프 UI",
        "클래식 럭셔리 셰브론 기하학 패턴",
        "1920년대 아르데코 기하학",
        "위대한 개츠비 황금빛 화려함",
        "계단식 셰브론 금빛 프레임"
      ]
    },
    "signals": [
      {
        "id": "mirror-symmetry",
        "role": "defining",
        "name": {
          "en": "Mirror symmetry",
          "ko": "칠흑색과 황금빛 럭셔리 대비"
        },
        "facet": "layout",
        "description": {
          "en": "Everything hangs on one vertical center axis: ornaments, frames and type blocks mirror exactly left-to-right, often in nested symmetrical tiers. An off-center layout instantly stops reading as Deco.",
          "ko": "칠흑 같은 검은 바탕(#0a0a0c)에 금속성 황금빛(#d4af37) 테두리와 서체를 선명하게 대치함."
        }
      },
      {
        "id": "sunburst-fan",
        "role": "defining",
        "name": {
          "en": "Sunburst and fan motifs",
          "ko": "대칭적 부채꼴 및 선버스트 문양"
        },
        "facet": "imagery",
        "description": {
          "en": "Rays radiating from a single point (sunburst), scalloped fan shells, chevrons and zigzag bands — the canonical ornament kit, drawn as thin gold strokes 1–2px wide.",
          "ko": "방사형 태양광선(Sunburst), 부채꼴 아치, 계단식 기하학 문양이 헤더와 모서리를 장식함."
        }
      },
      {
        "id": "stepped-forms",
        "role": "defining",
        "name": {
          "en": "Stepped ziggurat forms",
          "ko": "계단식 셰브론 및 빌딩 모티프"
        },
        "facet": "geometry",
        "description": {
          "en": "Silhouettes recede in symmetric stair-steps — three to five shrinking tiers like the Chrysler Building crown — used for frame corners, badges and panel tops.",
          "ko": "마천루 건축에서 영감을 받은 지구라트 계단식 테두리, 셰브론, 수직 평행선 패턴."
        }
      },
      {
        "id": "gold-black-jewel",
        "role": "defining",
        "name": {
          "en": "Gold on black, jewel accents",
          "ko": "엄격한 수직 양방향 대칭"
        },
        "facet": "color",
        "description": {
          "en": "Metallic gold linework (#c9a227, highlights #f0dc9a) on near-black lacquer (#0b0b0e), accented with deep emerald, sapphire or ruby; pastels or flat primaries break the spell.",
          "ko": "중앙 축을 기준으로 엄격한 좌우 대칭을 이루어 기계 시대의 단정함과 우아함을 드러냄."
        }
      },
      {
        "id": "gilded-caps",
        "role": "defining",
        "name": {
          "en": "Gilded all-caps lettering",
          "ko": "하이웨이스트 기하학 아르데코 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Headings set in ALL CAPS geometric or high-contrast display faces with letter-spacing 0.15–0.35em, rendered in gold — reading like inscriptions over a hotel entrance.",
          "ko": "가로줄 위치가 높고 곧게 뻗은 대문자 기하학 디스플레이 서체(Bifur, Broadway 스타일)."
        }
      },
      {
        "id": "double-rules",
        "role": "supporting",
        "name": {
          "en": "Hairline double rules",
          "ko": "병렬 메탈릭 라인 아트"
        },
        "facet": "surface",
        "description": {
          "en": "Borders are paired strokes — a 2px gold line with a 1px inner hairline 4–6px inside it, mimicking engraved gilt frames. A single thick black border reads as neobrutalism, not Deco.",
          "ko": "여러 겹의 1px 정교한 금빛 평행선들이 정교한 기하학 프레임과 카드 테두리를 형성함."
        }
      },
      {
        "id": "metal-choice",
        "role": "variable",
        "name": {
          "en": "Gold, chrome or copper",
          "ko": "식물 덩굴 유기적 곡선 지양"
        },
        "facet": "color",
        "description": {
          "en": "Yellow gold is the default, but chrome-silver (the Streamline Moderne branch) and copper read equally Deco; what matters is metallic contrast on a dark ground, not the hue.",
          "ko": "비대칭 식물 덩굴과 자유 곡선은 아르누보 영역이므로 아르데코의 기계적 대칭과 구별됨."
        }
      },
      {
        "id": "primary-blocks",
        "role": "avoid",
        "name": {
          "en": "Flat primary-color blocks",
          "ko": "손그림의 불완전성 지양"
        },
        "facet": "color",
        "description": {
          "en": "Flat red/yellow/blue blocks on white with asymmetric grids and bare grotesk type belong to Bauhaus and De Stijl — ornament-free primaries are a different movement that happens to share the decade.",
          "ko": "삐뚤빼뚤한 손그림 선은 아르데코 정교한 기계적 품격을 해치므로 지양함."
        }
      }
    ],
    "confusedWith": {
      "slug": "bauhaus",
      "name": "Bauhaus",
      "because": {
        "en": "This is Art Deco because the geometry is ornamental luxury: mirror symmetry, gilded linework, sunburst and fan motifs, jewel tones on black — the decoration itself is the point, not a byproduct.",
        "ko": "구별 이유: 1920년대 기계 시대의 직선적 대칭, 황금빛 부채꼴 선버스트(Sunburst), 셰브론(Chevron) 패널, 세련된 검은색과 골드 라인 프레임으로 구성되었으므로 아르데코에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Bauhaus if the ornament were stripped away and the symmetry broken — asymmetric grid, flat primary-color blocks, unadorned grotesk type, and not a gram of gold left.",
        "ko": "변경 조건: 기계적 대칭 기하학이 사라지고 식물 덩굴선, 비대칭 유기적 곡선, 파스텔 자연물로 바뀌면 아르누보(Art Nouveau)가 됨."
      }
    },
    "brief": {
      "en": "Build the surface as 1920s–30s Art Deco. Ground: near-black lacquer #0b0b0e; optional deep emerald panel #0f3d2e. Metal: gold linework — stops #f0dc9a/#c9a227/#9c7f22 (highlight/base/shade) as vertical gradients on strokes and display text (background-clip: text). Composition: strict mirror symmetry on one vertical axis; hero centered. Typography: ALL CAPS display face (Cinzel, Poiret One or Didot; fallback Georgia), letter-spacing 0.2–0.35em, headings in gradient gold; body small, sentence case, ivory #efe9dc. Ornament kit: sunburst fan — repeating-conic-gradient, ~2deg gold rays on 11deg spacing from bottom-center; stepped ziggurat corners on frames/badges; paired border rules: 2px gold stroke plus 1px inner hairline 4–6px inside (box-shadow: inset 0 0 0 5px #0b0b0e, inset 0 0 0 6px #c9a227). Cut button corners into octagons (clip-path). Depth comes from metal and line, never blurred drop shadows. Motion: almost none — one fade, or rays turning over 40s at most. Avoid: primary-color blocks, asymmetry, bubble radii, soft shadows, caps body text — that way lies Bauhaus or kitsch.",
      "ko": "아르데코(Art Deco) 스타일을 적용합니다. 정의 신호: 칠흑색(#0a0a0c)과 금빛(#d4af37)의 대담한 대비, 방사형 선버스트(Sunburst) 및 부채꼴 문양, 계단식 지구라트 테두리와 셰브론, 엄격한 중앙 축 좌우 대칭, 하이웨이스트 아르데코 디스플레이 서체입니다. 1px 금빛 평행선 프레임을 활용하되, 미세한 금색 라인 위의 텍스트 가독성을 위해 명암비(4.5:1)를 확보하고 독립적인 포커스 링을 선명히 제공합니다."
    },
    "accessibility": {
      "en": "Gradient gold text fails silently: on #0b0b0e the base gold #c9a227 measures about 8.1:1, but a dark stop like #8a6d1d drops to 4.0:1 — keep every gradient stop at #9c7f22 (5.1:1) or lighter, or set the text in solid #c9a227.\n\nALL CAPS with 0.2em+ tracking is measurably slower to read and harder for dyslexic and low-vision users — reserve it for headings and short labels, and set body copy in sentence case with normal spacing. Dense ray and zigzag patterns cause visual vibration; keep ornament out of text zones and mark decorative layers aria-hidden.\n\nRotating sunbursts and shimmer must stop under prefers-reduced-motion. Gradient text made with background-clip disappears entirely in Windows forced-colors mode — add a @media (forced-colors: active) fallback that resets it to solid CanvasText with background: none.",
      "ko": "금색 얇은 라인 아크 및 엠보싱 장식은 높은 명암비를 유지하기 어려움. 주요 인터랙티브 요소는 충분한 두께를 가질 것.\n기하학 문양이 포커스 표기를 가리지 않도록 독립된 포커스 Indicator 설정."
    },
    "a11yAndMisuse": {
      "en": "Gradient gold text fails silently: on #0b0b0e the base gold #c9a227 measures about 8.1:1, but a dark stop like #8a6d1d drops to 4.0:1 — keep every gradient stop at #9c7f22 (5.1:1) or lighter, or set the text in solid #c9a227.\n\nALL CAPS with 0.2em+ tracking is measurably slower to read and harder for dyslexic and low-vision users — reserve it for headings and short labels, and set body copy in sentence case with normal spacing. Dense ray and zigzag patterns cause visual vibration; keep ornament out of text zones and mark decorative layers aria-hidden.\n\nRotating sunbursts and shimmer must stop under prefers-reduced-motion. Gradient text made with background-clip disappears entirely in Windows forced-colors mode — add a @media (forced-colors: active) fallback that resets it to solid CanvasText with background: none.",
      "ko": "금색 얇은 라인 아크 및 엠보싱 장식은 높은 명암비를 유지하기 어려움. 주요 인터랙티브 요소는 충분한 두께를 가질 것.\n기하학 문양이 포커스 표기를 가리지 않도록 독립된 포커스 Indicator 설정."
    },
    "origin": {
      "en": "Named after the Exposition internationale des arts décoratifs et industriels modernes held in Paris in 1925 — though the label only stuck after Bevis Hillier's 1968 book 'Art Deco of the 20s and 30s'. The look had crystallized in 1910s–20s France around designers such as furniture maker Émile-Jacques Ruhlmann, absorbing Cubist geometry and, after Tutankhamun's tomb was opened in 1922, Egyptian sunburst and stepped forms. In America it became the architecture of ambition: William Van Alen's Chrysler Building (1930) crowned New York with a stainless-steel sunburst, followed by the Empire State Building (1931). Depression-era and wartime austerity ended the party, and Baz Luhrmann's 2013 film 'The Great Gatsby' later gave the black-and-gold revival its pop-culture template.",
      "ko": "1925년 파리 현대 장식 미술·산업 미술 국제 박람회에서 시작되어 1920년대 광란의 해를 수놓은 디자인 양식입니다."
    },
    "meta": {}
  },
  {
    "slug": "cyberpunk",
    "name": {
      "en": "Cyberpunk",
      "ko": "사이버펑크"
    },
    "tagline": {
      "en": "Cyberpunk is the visual language of 'high tech, low life': near-black interfaces lit by neon magenta, cyan, and electric yellow, like signage over a rain-soaked street. Luminous hairline borders, bloom halos, scanlines, and glitch tears turn panels into hacked terminals, while monospace type and HUD brackets supply the instrumentation. Born in 1980s science fiction and pushed into UI by films and games like Cyberpunk 2077, it treats darkness as the canvas — every accent must earn its glow.",
      "ko": "어두운 디스토피아 도시, 화려한 네온사인, 글리치 노이즈와 데이터 HUD가 결합된 네온 하이테크 미학"
    },
    "scope": {
      "en": "Scope: The screen-interface expression of the genre — dark HUDs, terminals, neon signage, glitch artifacts — not its literary themes, and not simply 'dark mode with purple'. Bright pastel retro-futurism (synthwave sunsets, VHS nostalgia) belongs to the vaporwave family, not to this entry.",
      "ko": "범위: SF 사조인 사이버펑크의 고대비 네온 UI 및 단말기 인터페이스를 다룹니다."
    },
    "aliases": {
      "en": [
        "black interface with glowing neon pink and blue edges",
        "blade runner style computer screens",
        "that hacker hud with scanlines and glitchy text",
        "cyberpunk 2077 menu style",
        "dark futuristic ui that looks like a rainy tokyo street at night",
        "terminal looking interface with neon glow and japanese signs",
        "high tech low life neon",
        "dystopian cyber UI HUD",
        "futuristic hacker terminal"
      ],
      "ko": [
        "네온 옐로우와 시안 고대비 사이버펑크 UI",
        "HUD 타겟팅 기호, 바코드, 사선 챔퍼 모서리",
        "글리치 디스플레이와 네온 발광 테두리",
        "어두운 하이테크 미래주의 콘솔 화면",
        "2077 스킬 트리와 사이버네틱 HUD",
        "사이버펑크 네온 디스토피아",
        "하이테크 로우라이프 HUD",
        "미래지향적 해커 인터페이스"
      ]
    },
    "signals": [
      {
        "id": "neon-on-black",
        "role": "defining",
        "name": {
          "en": "Neon on a near-black canvas",
          "ko": "네온 옐로우 및 시안 하이라이트"
        },
        "facet": "color",
        "description": {
          "en": "Backgrounds live at #05070f–#0a0e17; magenta #ff2a6d, cyan #05d9e8, and electric yellow #f9f002 sit on top at full glow. A light background disqualifies the style on sight.",
          "ko": "어두운 숯색 바탕 위에 일렉트릭 옐로우(#fcee0a), 네온 시안(#00f0ff), 핫마젠타가 강렬하게 대치함."
        }
      },
      {
        "id": "luminous-strokes",
        "role": "defining",
        "name": {
          "en": "Glowing hairline borders",
          "ko": "사선 절삭(Chamfered) 기하학 모서리"
        },
        "facet": "surface",
        "description": {
          "en": "Panels and buttons wear 1px bright strokes with matching bloom — box-shadow: 0 0 8px plus 0 0 24px in the border color — so every edge reads as neon tubing or a hologram seam.",
          "ko": "카드와 버튼 모서리를 둥글게 처리하지 않고 45도 사선으로 날카롭게 깎아낸(clip-path) 하이테크 형태."
        }
      },
      {
        "id": "hud-instrumentation",
        "role": "defining",
        "name": {
          "en": "HUD instrumentation",
          "ko": "HUD 십자선, 바코드 및 텔레메트리"
        },
        "facet": "layout",
        "description": {
          "en": "Corner brackets, tick marks, crosshair rules, and tiny numeric readouts frame content like a cockpit overlay; corners are sharp or chamfered with clip-path cuts, never bubbly.",
          "ko": "십자 타깃 기호, 코너 브래킷, 바코드, 일련번호, 모듈 상태 수치가 화면 구성을 감쌈."
        }
      },
      {
        "id": "terminal-type",
        "role": "defining",
        "name": {
          "en": "Monospace terminal type",
          "ko": "테크 스텐실 및 등폭 서체"
        },
        "facet": "typography",
        "description": {
          "en": "UI text is set in monospace or squared techno faces, often uppercase at 10–12px with .1–.2em letter-spacing, decorated with > _ :: // glyphs — the console is the voice of the interface.",
          "ko": "각진 테크 디스플레이 서체, 스텐실 구멍, 등폭(Monospace) 데이터 라벨을 모두 대문자로 노출함."
        }
      },
      {
        "id": "glitch-scanlines",
        "role": "supporting",
        "name": {
          "en": "Glitch and scanline artifacts",
          "ko": "디지털 글리치 및 RGB 분리"
        },
        "facet": "motion",
        "description": {
          "en": "RGB-split text shadows (magenta/cyan offsets), occasional slice-and-skew jitters, and a repeating 1px scanline overlay simulate a damaged feed — short bursts of seasoning, not constant noise.",
          "ko": "호버 및 클릭 시 순간적인 RGB 색수차 분리, 스캔라인 깜빡임, 신호 노이즈 글리치 연출."
        }
      },
      {
        "id": "cjk-neon-signage",
        "role": "supporting",
        "name": {
          "en": "CJK neon signage",
          "ko": "네온 발광 테두리 및 그림자"
        },
        "facet": "imagery",
        "description": {
          "en": "Vertical Japanese kana or Chinese characters glowing as sign tubes quote the Tokyo/Hong Kong streetscape the genre's films were built from.",
          "ko": "선명한 1~2px 네온 테두리가 어두운 주변부로 강렬한 인공 빛(box-shadow glow)을 발산함."
        }
      },
      {
        "id": "hazard-corporate",
        "role": "variable",
        "name": {
          "en": "Hazard stripes and corporate chrome",
          "ko": "부드러운 파스텔 낙관론 지양"
        },
        "facet": "imagery",
        "description": {
          "en": "Yellow-black diagonal warning bands, mega-corp logos, and barcode livery mark the world as dangerous and owned; density runs from a single striped edge to full industrial cladding.",
          "ko": "부드러운 파스텔 톤이나 둥근 형태는 사이버펑크 특유의 디스토피아적 하이테크 긴장감을 저해함."
        }
      },
      {
        "id": "bright-pastel-nostalgia",
        "role": "avoid",
        "name": {
          "en": "Bright pastel nostalgia",
          "ko": "단순 모노크롬 녹색 텍스트 지양"
        },
        "facet": "color",
        "description": {
          "en": "Light grounds, soft pink/lavender palettes, marble busts, and VHS timestamps are vaporwave's retro consumerism — warmth and daylight are the giveaway that this isn't cyberpunk.",
          "ko": "단순한 녹색 모노크롬 텍스트만 나열되는 콘솔은 터미널 해커 영역으로 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "vaporwave",
      "name": "Vaporwave",
      "because": {
        "en": "This is Cyberpunk because the canvas is near-black and the light comes from neon — saturated magenta/cyan glow on a dark, high-contrast future city, framed by HUD furniture and monospace data. The mood is dystopian and forward-looking; the glitch reads as a hacked signal, not a worn tape.",
        "ko": "구별 이유: 어두운 바탕 위에 네온 옐로우(#fcee0a), 시안, 마젠타의 강렬한 발광, 사선 절삭 모서리(Chamfered corners), 바코드 및 스텐실 라벨, 디스플레이 글리치 효과로 구성되었으므로 사이버펑크에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become vaporwave if someone turned the lights on and the calendar back — bright pastel pink and teal on light grounds, 80s–90s consumer nostalgia (Greek busts, VHS date stamps, early-Windows chrome), dreamy irony instead of dystopia. Both share glitch effects, but vaporwave's is VHS decay in daylight while cyberpunk's is signal interference in the dark.",
        "ko": "변경 조건: 네온 컬러와 사선 절삭, HUD 그래픽이 사라지고 단순 무채색 모노크롬 녹색 CRT 프롬프트 글자 스트림으로 환원되면 터미널 해커가 됨."
      }
    },
    "brief": {
      "en": "Build a cyberpunk HUD. Canvas: near-black with a blue cast — page #05070f, panels #0a0e17. Signal colors: magenta #ff2a6d and cyan #05d9e8; yellow #f9f002 for warnings/primary actions only. Text: off-white #d1f7ff, secondary #7f9bb3, monospace (ui-monospace / JetBrains Mono); micro-labels uppercase at 10–11px, letter-spacing .15em, prefixed with >_ or //. Every panel and button wears a 1px neon border with bloom — box-shadow: 0 0 8px rgba(5,217,232,.5), 0 0 24px rgba(5,217,232,.2), inset 0 0 12px rgba(5,217,232,.12) — corners sharp (2px) or 8–12px clip-path chamfers. Add HUD furniture: corner brackets, tick marks, tiny numeric readouts. Season with glitch: RGB-split headings (text-shadow: -2px 0 #ff2a6d, 2px 0 #05d9e8), rare 100–200ms skew/translate stutters, plus scanlines (1px rgba(255,255,255,.05) every 3px). Hazard stripes (45deg #f9f002/#0a0a0a, 12px steps) for danger zones only; CJK neon signage optional. Avoid light backgrounds, pastels, soft white shadows, bubbly radii, and VHS nostalgia — that's vaporwave. Keep motion intermittent: a hacked signal stutters, never floats.",
      "ko": "사이버펑크(Cyberpunk) 스타일을 적용합니다. 정의 신호: 어두운 바탕 위 네온 옐로우(#fcee0a)와 시안(#00f0ff)의 강렬한 고대비, 45도 사선 절삭 모서리(clip-path: polygon), HUD 십자선과 바코드, 테크 스텐실 및 등폭 서체, 호버 시 RGB 분리 글리치 애니메이션입니다. 글리치 및 발광 모션에 prefers-reduced-motion 대응을 적용하며 어두운 배경 위 텍스트 명암비를 4.5:1 이상 엄격히 검증합니다."
    },
    "accessibility": {
      "en": "Neon on dark is not automatically high-contrast: cyan #05d9e8 on #0a0e17 clears 4.5:1 comfortably, but magenta #ff2a6d at small sizes and yellow #f9f002 against glow halos can fall short — measure body text against the real background, keep glow out of the contrast equation, and never set long copy in the dimmest accent.\n\nGlitch flicker, RGB-split flashes, and sweeping scanlines are exactly the motion that bothers vestibular and photosensitive users: keep flashes under 3 per second, make glitches rare and short, and honor prefers-reduced-motion by freezing jitter, blink, and rain effects entirely.\n\nHUD decoration is cognitive noise: brackets, tickers, and blinking readouts compete with content, and uppercase wide-tracked monospace reads slowly at length. Mark decorative readouts aria-hidden, keep body copy in a comfortable size and face, and give focus a visible state that is more than a glow-color change (an offset outline in a reserved color works).",
      "ko": "글리치 효과 및 과도한 네온 광원은 광과민성 발작을 유발할 수 있음. 글리치 애니메이션은 토글 가능하거나 reduced-motion 시 즉시 비활성화할 것.\n검은색 배경 위 어두운 빨강/파랑 텍스트의 명암비 약화를 방지하여 4.5:1 확보."
    },
    "a11yAndMisuse": {
      "en": "Neon on dark is not automatically high-contrast: cyan #05d9e8 on #0a0e17 clears 4.5:1 comfortably, but magenta #ff2a6d at small sizes and yellow #f9f002 against glow halos can fall short — measure body text against the real background, keep glow out of the contrast equation, and never set long copy in the dimmest accent.\n\nGlitch flicker, RGB-split flashes, and sweeping scanlines are exactly the motion that bothers vestibular and photosensitive users: keep flashes under 3 per second, make glitches rare and short, and honor prefers-reduced-motion by freezing jitter, blink, and rain effects entirely.\n\nHUD decoration is cognitive noise: brackets, tickers, and blinking readouts compete with content, and uppercase wide-tracked monospace reads slowly at length. Mark decorative readouts aria-hidden, keep body copy in a comfortable size and face, and give focus a visible state that is more than a glow-color change (an offset outline in a reserved color works).",
      "ko": "글리치 효과 및 과도한 네온 광원은 광과민성 발작을 유발할 수 있음. 글리치 애니메이션은 토글 가능하거나 reduced-motion 시 즉시 비활성화할 것.\n검은색 배경 위 어두운 빨강/파랑 텍스트의 명암비 약화를 방지하여 4.5:1 확보."
    },
    "origin": {
      "en": "The genre was named by Bruce Bethke's 1983 short story 'Cyberpunk' and defined as literature by William Gibson's 1984 novel Neuromancer, but its visual language was set by film: Ridley Scott's Blade Runner (1982) fused the neon signage of Asian megacities with rain, smog, and towering video billboards into the 'high tech, low life' metropolis, and Katsuhiro Otomo's Akira (1988) added Neo-Tokyo's holographic advertising. The look became an actual interface kit through 1990s sci-fi screen graphics and, most decisively, CD Projekt Red's Cyberpunk 2077 (2020), whose glitching yellow-and-black HUD turned cyberpunk into a literal UI style.",
      "ko": "윌리엄 깁슨의 소설 뉴로맨서 및 블레이드 러너 영화에서 비주얼 틀이 구축되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "pixel-art",
    "name": {
      "en": "Pixel Art",
      "ko": "픽셀 아트"
    },
    "tagline": {
      "en": "Pixel Art is a graphic language born from hardware limits: on the 8- and 16-bit consoles and arcade boards of the 1980s–90s, artists drew with visible square pixels and tiny indexed palettes, placing every sprite, glyph, and health bar pixel by pixel. What began as a constraint is now a deliberate retro aesthetic — crisp stair-stepped edges with no anti-aliasing, limited color ramps, dithered shading, chunky bitmap type, and frame-by-frame animation chosen for charm, not necessity.",
      "ko": "레트로 8비트/16비트 고전 게임 감성을 자극하는 정교한 그리드 그리딩 피셀 그래픽"
    },
    "scope": {
      "en": "Scope: Covers the deliberate retro game-art style applied to UI and illustration — the craft of placing individual pixels. It is not the 90s amateur-homepage look (that's Vernacular Web), and merely low-resolution or blurry images are not pixel art: without deliberate pixel-level construction and a limited palette, it's just a small picture.",
      "ko": "범위: 아케이드 고전 게임 및 인디 게임 UI에서 사랑받는 픽셀 단위 도트 그래픽 스타일입니다."
    },
    "aliases": {
      "en": [
        "the retro video game look with visible square pixels",
        "8-bit style ui like an old nintendo game",
        "websites that look like a super nintendo menu screen",
        "chunky pixelated graphics done on purpose",
        "the indie game title screen aesthetic",
        "health bars and dialog boxes like an old rpg",
        "8bit 16bit retro game graphics",
        "pixelated arcade UI",
        "pixel grid design"
      ],
      "ko": [
        "고전 8비트 및 16비트 레트로 게임 픽셀 아트",
        "계단 현상이 또렷한 레트로 스파라이트 UI",
        "도트 그래픽과 픽셀 폰트 대화창",
        "그림자 없이 깔끔한 픽셀 그리드 버튼",
        "고전 아케이드 및 가멜라 감성의 UI",
        "8비트 16비트 도트 그래픽",
        "픽셀 아트 아케이드 UI",
        "고전 게임 도트 인터페이스"
      ]
    },
    "signals": [
      {
        "id": "visible-pixels",
        "role": "defining",
        "name": {
          "en": "Visible square pixels",
          "ko": "안티앨리어싱 없는 선명한 픽셀 에지"
        },
        "facet": "geometry",
        "description": {
          "en": "Artwork is built from visible, uniform square pixels — edges stair-step in fixed increments with no anti-aliasing; no amount of zoom ever reveals a smooth curve.",
          "ko": "image-rendering: pixelated 속성을 적용하여 벡터의 부드러운 스무딩 없이 사각형 픽셀 계단 현상을 선명히 노출함."
        }
      },
      {
        "id": "limited-palette",
        "role": "defining",
        "name": {
          "en": "Small fixed palette",
          "ko": "제한된 인덱스 컬러 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "A piece commits to a handful of indexed colors — 8, 16, or 32 — with hue-shifted ramps for shading; gradients are faked with dot patterns, never blended.",
          "ko": "고전 게임기 하드웨어 제약(PICO-8, 게임보이 등)을 상징하는 16~32색 제한된 팔레트 사용."
        }
      },
      {
        "id": "pixelated-scaling",
        "role": "defining",
        "name": {
          "en": "Nearest-neighbor scaling",
          "ko": "정교한 픽셀 서체"
        },
        "facet": "imagery",
        "description": {
          "en": "Sprites and bitmaps scale with hard edges — image-rendering: pixelated, canvas imageSmoothing off; a single smoothed edge breaks the illusion instantly.",
          "ko": "Press Start 2P, Silkscreen 등 비트맵 픽셀 서체를 정수 배율 크기로 렌더링하여 또렷하게 가독."
        }
      },
      {
        "id": "bitmap-type",
        "role": "defining",
        "name": {
          "en": "Chunky bitmap type",
          "ko": "계단식 픽셀 테두리 및 패널"
        },
        "facet": "typography",
        "description": {
          "en": "Headings and HUD text use pixel fonts or blocky uppercase with a hard 1–2px offset shadow — every glyph visibly assembled from squares, zero blur anywhere.",
          "ko": "테두리가 픽셀 단위 도트로 하나씩 그어져 계단식 모서리와 사선을 형성함."
        }
      },
      {
        "id": "game-chrome",
        "role": "defining",
        "name": {
          "en": "Game UI chrome",
          "ko": "격자 정렬 픽셀 스프라이트 아이콘"
        },
        "facet": "imagery",
        "description": {
          "en": "Controls are game controls: segmented HP/MP bars, RPG dialog boxes with stepped borders, blinking PRESS-START prompts, 8-bit icons like hearts, coins, and stars.",
          "ko": "16x16 또는 32x32 픽셀 격자 규격의 레트로 게임 스프라이트 아이콘 사용."
        }
      },
      {
        "id": "stepped-animation",
        "role": "supporting",
        "name": {
          "en": "Frame-by-frame motion",
          "ko": "픽셀 디더링(Dithering) 음영"
        },
        "facet": "motion",
        "description": {
          "en": "Animation advances in discrete frames — steps() easing, sprites flipping between two poses, 1–2 frame blinks; nothing tweens smoothly.",
          "ko": "부드러운 그래디언트 대신 체스판 모양 픽셀 교차(디더링) 패턴으로 음영과 깊이감을 표현함."
        }
      },
      {
        "id": "dithered-shading",
        "role": "supporting",
        "name": {
          "en": "Dithered shading",
          "ko": "매끈한 벡터 곡선 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Checkerboard and ordered-noise dot patterns simulate gradients and shadow inside the fixed palette — a texture born directly of the color limit.",
          "ko": "매끈하게 안티앨리어싱된 벡터 곡선은 픽셀 아트 고유의 격자 정체성을 파괴함."
        }
      },
      {
        "id": "smooth-rendering",
        "role": "avoid",
        "name": {
          "en": "Smooth rendering",
          "ko": "고해상도 실사 질감 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Anti-aliased curves, soft shadows, true gradients, or high-color photos dissolve the style — one blurred edge and it reads as a low-res image, not pixel art.",
          "ko": "실사 사진 배경이나 고해상도 질감은 도트 아트의 도트 세계관을 무너뜨림."
        }
      }
    ],
    "confusedWith": {
      "slug": "vernacular-web",
      "name": "Vernacular Web",
      "because": {
        "en": "This is Pixel Art because the retro look is constructed with pixel precision — a limited fixed palette, stair-stepped un-antialiased edges, bitmap type, and game controls like HP bars and dialog boxes; it is deliberate game art, not default browser output.",
        "ko": "구별 이유: 모든 아이콘, 테두리, 서체, 패널이 의도적으로 격자 형태의 사각형 픽셀 단위로 렌더링되고 안티앨리어싱(Anti-aliasing) 없이 뚜렷한 계단 현상을 보이므로 픽셀 아트에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become the Vernacular Web if the pixel craft were dropped in favor of whatever the browser and a GIF collection gave you — default blue links, Times text, tiled wallpaper, a visitor counter — a page decorated by an amateur rather than drawn by an artist.",
        "ko": "변경 조건: 픽셀 격자가 사라지고 매끈한 고해상도 질감(양피지, 헤어라인 금속)과 부드러운 안티앨리어싱 룬 서체로 바꿔 렌더링되면 판타지 RPG UI가 됨."
      }
    },
    "brief": {
      "en": "Create the surface as Pixel Art — deliberate 8/16-bit game UI. Defining signals: graphics of visible uniform square pixels, stair-stepped edges, no anti-aliasing; a small fixed palette — night #1a1c2c, purple #5d275d, red #b13e53, orange #ef7d57, yellow #ffcd75, pale #94b0c2, green #38b764; all bitmaps scaled nearest-neighbor (image-rendering: pixelated; canvas imageSmoothingEnabled = false); headings in a bitmap font ('Press Start 2P', uppercase, letter-spacing 2px) or blocky caps with hard 2px 2px 0 shadow, zero blur; controls as game chrome — segmented HP bars (2px gaps every 12px), RPG dialog panels (#1a1c2c fill, 3px solid #f4f4f4 border, border-radius 0), prompts blinking with steps(1); shading via checkerboard dithering, never gradients. Motion: steps() easing, two-frame blinks; no tweens or soft shadows. Do not drift into Vernacular Web: no browser defaults (blue links, system serif, tiled wallpaper); every pixel deliberate. Keep 4.5:1 text contrast (#ffcd75/#f4f4f4 on #1a1c2c passes; red fails), pause blinks under prefers-reduced-motion, body copy in readable mono or sans.",
      "ko": "픽셀 아트(Pixel Art) 스타일을 적용합니다. 정의 신호: image-rendering: pixelated를 활용한 안티앨리어싱 없는 선명한 픽셀 에지, 16~32색 제한된 인덱스 컬러 팔레트, 정수 배율 비트맵 픽셀 서체, 계단식 도트 테두리, 체스판 패턴 디더링 음영입니다. 픽셀 서체의 가독성을 위해 최소 16px 이상 크기로 렌더링하고, 버튼 및 클릭 영역이 도트 크기에 영향받지 않고 최소 44x44px 터치 영역을 갖도록 패딩을 보장합니다."
    },
    "accessibility": {
      "en": "Pixel and bitmap fonts are decorative: they degrade fast at small sizes and in long reading — reserve them for headings and HUD labels, set body text in a readable sans or mono, and respect each font's minimum size (most pixel fonts need 8px+ and generous line-height).\n\nBlinking, flashing, and CRT-style flicker must stay under the 3-flashes-per-second seizure threshold and pause entirely under prefers-reduced-motion; scanline or screen-flicker overlays should be off by default.\n\nRetro palettes skew low-contrast (red on navy, green on black are classic failures): verify 4.5:1 for real text, and never encode state by hue alone — an HP bar's red versus green needs an icon or label too, or color-blind players can't read it.",
      "ko": "픽셀 폰트(Pixel font)는 작은 크기에서 가독성이 급격히 저하됨. 최소 16px 이상 크기로 렌더링하거나 본문에는 가독성 좋은 폰트 적용.\n픽셀 아트 버튼의 터치 타깃이 픽셀 크기에 영향받지 않고 최소 44x44px 이상이 되도록 패딩 확보."
    },
    "a11yAndMisuse": {
      "en": "Pixel and bitmap fonts are decorative: they degrade fast at small sizes and in long reading — reserve them for headings and HUD labels, set body text in a readable sans or mono, and respect each font's minimum size (most pixel fonts need 8px+ and generous line-height).\n\nBlinking, flashing, and CRT-style flicker must stay under the 3-flashes-per-second seizure threshold and pause entirely under prefers-reduced-motion; scanline or screen-flicker overlays should be off by default.\n\nRetro palettes skew low-contrast (red on navy, green on black are classic failures): verify 4.5:1 for real text, and never encode state by hue alone — an HP bar's red versus green needs an icon or label too, or color-blind players can't read it.",
      "ko": "픽셀 폰트(Pixel font)는 작은 크기에서 가독성이 급격히 저하됨. 최소 16px 이상 크기로 렌더링하거나 본문에는 가독성 좋은 폰트 적용.\n픽셀 아트 버튼의 터치 타깃이 픽셀 크기에 영향받지 않고 최소 44x44px 이상이 되도록 패딩 확보."
    },
    "origin": {
      "en": "The look was born from hardware limits: arcade boards and consoles like Nintendo's Famicom/NES (1983) and Super Famicom/SNES (1990) forced artists into tiny sprites and indexed palettes of a handful of colors, and the teams behind games like Super Mario Bros. and Final Fantasy turned that constraint into craft. The term 'pixel art' itself dates to a 1982 letter by Adele Goldberg and Robert Flegal at Xerox PARC. Once 3D and high-color displays made the limits obsolete, the style returned as a deliberate choice — illustration collectives like eBoy in the late 1990s and the 2000s indie-game wave (Cave Story, 2004) recast it as a retro aesthetic that now surfaces in UI wherever a product wants game-era charm.",
      "ko": "1970~80년대 고전 아케이드 및 비디오 게임 콘솔의 그래픽 메모리 제약에서 탄생했습니다."
    },
    "meta": {}
  },
  {
    "slug": "corporate-memphis",
    "name": {
      "en": "Corporate Memphis",
      "ko": "코퍼레이트 멤피스"
    },
    "tagline": {
      "en": "Corporate Memphis is the flat vector illustration style of late-2010s tech marketing: faceless people with tiny heads and disproportionately long, rubbery limbs, skin in blues, purples, and greens instead of real tones, bent into over-acted poses against blobs, dots, and arcs. Named after Alegria, the illustration system Facebook introduced around 2017, it became the default look of SaaS landing pages and empty states within years — then a byword for corporate sameness ('blanding').",
      "ko": "비정상적으로 길고 유연한 팔다리, 부드러운 파스텔톤, 친근하고 평화로운 빅테크 대표 일러스트 스타일"
    },
    "scope": {
      "en": "Scope: Covers the figurative illustration language — the people, their proportions, and the palette — not the page chrome underneath, which is usually plain flat design. The 1980s Memphis Group's squiggle-and-confetti patterns get their own entry (Memphis); this style only borrows the name and some background geometry.",
      "ko": "범위: Big Tech 기업들의 랜딩페이지 및 앱 안내 화면에 널리 퍼진 일러스트 비주얼 언어입니다."
    },
    "aliases": {
      "en": [
        "tech company cartoons with tiny heads and long bendy arms",
        "those flat people with blue or purple skin on startup websites",
        "the illustration style every saas landing page and empty state uses",
        "bendy noodle-arm people in pastel colors hugging giant objects",
        "big tech art style where everyone's limbs are weirdly long",
        "that alegria-looking flat people clipart",
        "alegria tech illustration",
        "big limbs flat corporate art",
        "startup flat people"
      ],
      "ko": [
        "빅테크 및 스타트업 일러스트 감성의 플랫 UI",
        "비정상적으로 긴 팔다리의 자유로운 캐릭터",
        "Alegria 스타일의 모던 빅테크 벡터 그래픽",
        "깔끔한 기하학 둥근 형태와 플랫 파스텔",
        "글로벌 SaaS 서비스의 친근한 일러스트",
        "빅테크 알레그리아 일러스트",
        "팔다리가 긴 플랫 캐릭터",
        "스타트업 그래픽 스타일"
      ]
    },
    "signals": [
      {
        "id": "noodle-people",
        "role": "defining",
        "name": {
          "en": "Tiny heads, noodle limbs",
          "ko": "비현실적 비율의 평면 캐릭터 일러스트"
        },
        "facet": "imagery",
        "description": {
          "en": "Characters are drawn with heads half the natural size, arms and legs 1.5–2x too long and bending like rubber hoses, with oversized hands and feet — bodies assembled from simple capsules and blobs.",
          "ko": "작은 머리, 긴 유선형 팔다리, 보라/파랑/노랑 등 비현실적 피부색을 가진 평면 벡터 캐릭터."
        }
      },
      {
        "id": "unnatural-skin",
        "role": "defining",
        "name": {
          "en": "Non-naturalistic skin tones",
          "ko": "부드럽고 친근한 둥근 모서리 패널"
        },
        "facet": "color",
        "description": {
          "en": "Skin is filled with blue (#6C8CFF), purple (#A78BFA), green, or pink — never real skin colors; the abstraction was sold as universal and is the style's fastest tell.",
          "ko": "날카로운 모서리 없이 넉넉한 곡률(12~20px)을 적용한 부드러운 플랫 카드 구조."
        }
      },
      {
        "id": "flat-vector-fills",
        "role": "defining",
        "name": {
          "en": "Big flat fills, zero shading",
          "ko": "화사하고 친근한 플랫 컬러 팔레트"
        },
        "facet": "surface",
        "description": {
          "en": "Every shape is one solid color: no gradients, no texture, no cast shadows; outlines are absent or a single thin line in a darker shade of the fill.",
          "ko": "코랄, 민트, 코발트, 페리윈클, 샌드색 등 화사하고 유해함 없는 플랫 채우기 컬러."
        }
      },
      {
        "id": "pastel-tech-palette",
        "role": "supporting",
        "name": {
          "en": "Soft bright tech palette",
          "ko": "가독성 높은 모던 산세리프 서체"
        },
        "facet": "color",
        "description": {
          "en": "Lavender, periwinkle, soft pink, butter yellow, and mint laid on off-white (#FBFAFF) — friendly and low-aggression, bright without neobrutalism's harsh saturation.",
          "ko": "Circular, Inter, Plus Jakarta Sans 등 둥글고 가독성 높은 모던 기하학 산세리프 서체."
        }
      },
      {
        "id": "exaggerated-poses",
        "role": "supporting",
        "name": {
          "en": "Over-acted poses",
          "ko": "절제된 그림자와 평면적 구성"
        },
        "facet": "imagery",
        "description": {
          "en": "Figures leap, stretch, high-five, or hug oversized objects (a giant phone, a huge credit card) in impossible, cheerfully contorted stances.",
          "ko": "매우 은은한 연한 그림자 또는 완전히 평면적인 레이아웃으로 부담 없고 가벼운 분위기 조성."
        }
      },
      {
        "id": "blob-dot-backdrop",
        "role": "supporting",
        "name": {
          "en": "Blob-and-dot backdrops",
          "ko": "배경의 유기적 벡터 아메바 도형"
        },
        "facet": "geometry",
        "description": {
          "en": "Organic blobs, half-circles, arcs, and floating dots frame the scene — the only genuine echo of 1980s Memphis, and the reason the nickname stuck.",
          "ko": "히어로 영역 및 카드 뒤에 부드러운 아메바 모양의 벡터 도형을 은은하게 배치함."
        }
      },
      {
        "id": "realistic-humans",
        "role": "avoid",
        "name": {
          "en": "Realistic human proportions",
          "ko": "두꺼운 검은 윤곽선 및 강한 그림자 지양"
        },
        "facet": "imagery",
        "description": {
          "en": "Anatomically correct figures, photos of real people, or 3D-rendered humans disqualify the look instantly — the style is defined by deliberately wrong bodies.",
          "ko": "두꺼운 검은 테두리와 오프셋 그림자는 친근한 느낌을 없애고 네오브루탈리즘으로 바꿈."
        }
      }
    ],
    "confusedWith": {
      "slug": "memphis",
      "name": "Memphis",
      "because": {
        "en": "This is Corporate Memphis because the image is built around flat vector people — tiny heads, noodle limbs, non-naturalistic skin — acting out a scene; the squiggles and dots behind them are just set dressing.",
        "ko": "구별 이유: 빅테크 및 SaaS 서비스에서 애용하는 인체 비율이 길고 머리가 작은 평면 캐릭터 일러스트(Alegria 스타일), 부드러운 곡선과 밝은 단색 유기적 형태, 친근한 무해함으로 연출되었으므로 코퍼레이트 멤피스에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Memphis if the people walked off the page and only the geometric confetti remained — squiggles, triangles, and clashing patterns as pure surface decoration, with no characters at all.",
        "ko": "변경 조건: 부드러운 캐릭터 일러스트가 두꺼운 3px 검은 테두리, 블러 없는 단색 오프셋 그림자, 강렬한 노랑/핑크 컬러 블록으로 교체되면 네오브루탈리즘이 됨."
      }
    },
    "brief": {
      "en": "Create the surface in Corporate Memphis style. Canvas: SaaS hero or empty state on off-white #FBFAFF, generous whitespace, friendly geometric sans (Inter/Gilroy/Circular; headings 700, ink #2E2A5B). Build flat vector figures: tiny heads (~0.6x natural), rubber-hose limbs 1.5–2x natural drawn as capsules (border-radius: 999px), oversized hands and feet; skin in blue #6C8CFF, purple #A78BFA, or mint #6EE7B7 — never real tones; clothes and props flat pink #F9A8D4, butter #FDE68A. Zero gradients, texture, or drop shadows; outlines absent or one 2px line in a darker fill shade. Pose figures mid-action — leaping, stretching, hugging oversized objects. Backdrop: organic blobs (border-radius: 46% 54% 52% 48% / 58% 60% 40% 42%), half-circles, floating dots — all flat pastels. UI chrome: pill buttons (border-radius: 999px, flat fill, hover: translateY(-2px)); no shadows anywhere. Text contrast 4.5:1 — ink on pastel fills, never white on yellow. Avoid realistic proportions, real-people photography, gradients, and all-over Memphis confetti: figures are the point, geometry only the backdrop.",
      "ko": "코퍼레이트 멤피스(Corporate Memphis / Alegria) 스타일을 적용합니다. 정의 신호: 긴 팔다리와 작은 머리의 비현실적 평면 벡터 캐릭터 일러스트, 부드럽고 친근한 둥근 카드 패널(12~20px), 화사한 코랄/민트/코발트 플랫 컬러 팔레트, 가독성 높은 기하학 산세리프 서체(Inter, Circular), 절제된 은은한 그림자입니다. 캐릭터 일러스트 요소가 실제 인터랙티브 버튼으로 오인되지 않도록 시각적 구분을 명확히 하고 배경 추상 도형에 aria-hidden='true'를 지정합니다."
    },
    "accessibility": {
      "en": "The pastel palette invites pastel-on-pastel text: white on butter yellow #FDE68A or lavender on off-white fails badly. Put ink #2E2A5B text on the light fills and measure every combination at 4.5:1 — soft does not have to mean low-contrast.\n\nBobbing, bouncing figures and parallax blobs are common on this style's landing pages; gate all of it behind prefers-reduced-motion, and keep the figures decorative — marked aria-hidden so screen readers skip the meaningless SVG.\n\nThe blue-skinned abstraction was meant to sidestep representation, but in practice it can read as erasing real diversity while infantilizing users with clownish bodies — pair the illustration with genuine representation elsewhere (photography, avatars, copy) rather than letting noodle people carry the whole brand.",
      "ko": "플랫 벡터 일러스트 요소들이 실제 인터랙티브 버튼으로 오인되지 않도록 시각적 구분 명확히 유지.\n배경의 대형 추상 도형들에 aria-hidden='true' 지정."
    },
    "a11yAndMisuse": {
      "en": "The pastel palette invites pastel-on-pastel text: white on butter yellow #FDE68A or lavender on off-white fails badly. Put ink #2E2A5B text on the light fills and measure every combination at 4.5:1 — soft does not have to mean low-contrast.\n\nBobbing, bouncing figures and parallax blobs are common on this style's landing pages; gate all of it behind prefers-reduced-motion, and keep the figures decorative — marked aria-hidden so screen readers skip the meaningless SVG.\n\nThe blue-skinned abstraction was meant to sidestep representation, but in practice it can read as erasing real diversity while infantilizing users with clownish bodies — pair the illustration with genuine representation elsewhere (photography, avatars, copy) rather than letting noodle people carry the whole brand.",
      "ko": "플랫 벡터 일러스트 요소들이 실제 인터랙티브 버튼으로 오인되지 않도록 시각적 구분 명확히 유지.\n배경의 대형 추상 도형들에 aria-hidden='true' 지정."
    },
    "origin": {
      "en": "Named after Alegria, the illustration system Facebook commissioned from the design studio Buck around 2017, whose flat, bendy-limbed characters became the template for big-tech marketing art. The dismissive label 'Corporate Memphis' stuck because the shapes floating behind the figures echo the 1980s Memphis Group's geometry — the two movements are otherwise unrelated. By 2019–2021 it was the default illustration style for SaaS landing pages and empty states across the industry, and the backlash to its sameness ('blanding') turned it into a cliché almost as fast.",
      "ko": "2017년 페이스북의 리브랜딩 일러스트(Alegria)를 시작으로 글로벌 테크 기업 전체로 확산되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "material-design",
    "name": {
      "en": "Material Design",
      "ko": "머티리얼 디자인"
    },
    "tagline": {
      "en": "Material Design is Google's physics-based design language: UIs are digital paper layered along a z-axis, each surface resting at a measured elevation that casts a soft shadow, the main action hovering as a circular FAB, every touch answered with an ink ripple. Bold brand color, white cards, and Roboto type align to an 8dp grid, and motion expresses hierarchy. Shipped with Android 5.0 in 2014, it became Android's default look — the systematic rebuttal to flat design's shadowless austerity.",
      "ko": "종이와 잉크의 물리적 속성에서 영감을 받아 표면 그림자, 그리드, 유기적 리플 애니메이션을 체계화한 구글의 디자인 시스템"
    },
    "scope": {
      "en": "Scope: Covers Google's design language across its generations — 2014's paper-and-ink system, 2018 Material Theming, and 2021's Material You. The generic 'flat with one soft shadow' SaaS look it inspired is not this entry: without the elevation scale, the FAB, and ripple physics, that is just Flat Design 2.0.",
      "ko": "범위: 구글의 머티리얼 디자인 1, 2 및 머티리얼 유(Material You, M3)를 포함한 통합 비주얼 가이드입니다."
    },
    "aliases": {
      "en": [
        "google apps look with the floating round button",
        "white cards with soft shadows on a gray background",
        "the android material you style",
        "the ripple effect that spreads when you tap stuff on android",
        "paper cards stacked with drop shadows and a pink button",
        "the gmail and google docs app look",
        "google material design 3",
        "paper elevation shadows",
        "material youtube UI"
      ],
      "ko": [
        "구글 머티리얼 디자인 3(M3) 시스템 UI",
        "표면 고도(Elevation) 그림자와 리플(Ripple) 반응",
        "동적 컬러 스키마와 둥근 표면 카드",
        "Floating Action Button(FAB)과 바텀 시트",
        "안드로이드 표준 시스템 인터페이스",
        "구글 머티리얼 디자인",
        "종이 입체 엘레베이션 그림자",
        "구글 가이드라인 UI"
      ]
    },
    "signals": [
      {
        "id": "elevation-shadows",
        "role": "defining",
        "name": {
          "en": "Stepped z-axis elevation",
          "ko": "체계적인 고도(Elevation) 그림자"
        },
        "facet": "depth",
        "description": {
          "en": "Every surface rests at a measured height — 2dp cards, 4dp app bars, 6dp FABs, 8dp raised menus, 16dp drawers — and the soft shadow beneath it encodes exactly that height; press, and the shadow grows as the surface lifts toward you.",
          "ko": "표면이 규정된 고도 단계(dp0~dp24)에 위치하며, 고도에 따라 깊이감 있는 드롭 섀도우가 차등 적용됨."
        }
      },
      {
        "id": "paper-surfaces",
        "role": "defining",
        "name": {
          "en": "Layered digital paper",
          "ko": "잉크 리플(Ripple) 터치 피드백"
        },
        "facet": "surface",
        "description": {
          "en": "The UI is sheets of paper sliding over each other: white cards with crisp 2–4px corners floating on a light gray ground, their edges cut by shadow rather than by borders.",
          "ko": "터치 및 클릭 지점에서 반투명 원형 잉크 파동이 표면 전체로 부드럽게 퍼져나감."
        }
      },
      {
        "id": "fab",
        "role": "defining",
        "name": {
          "en": "Floating action button",
          "ko": "동적 컬러 추출 시스템 (Material You)"
        },
        "facet": "geometry",
        "description": {
          "en": "One circular button (56dp diameter, 6dp elevation) in the accent color hovers above the content — the screen's single promoted action, often straddling the seam between header and content.",
          "ko": "시드 컬러에서 추출된 동적 톤 팔레트가 컨테이너, 상태, 텍스트 색상을 체계적으로 자동 생성함."
        }
      },
      {
        "id": "ink-ripple",
        "role": "defining",
        "name": {
          "en": "Ink ripple touch feedback",
          "ko": "플로팅 작업 버튼 (FAB)"
        },
        "facet": "motion",
        "description": {
          "en": "Touch answers with a ripple of ink spreading from the exact contact point across the surface — feedback is rendered as a physical event, not a hover-color swap.",
          "ko": "주요 핵심 작업을 위해 화면 우측 하단 고도 위에 공중 부유하는 원형/둥근 사각형 FAB 버튼."
        }
      },
      {
        "id": "bold-brand-color",
        "role": "defining",
        "name": {
          "en": "Bold primary, hot accent",
          "ko": "완전한 캡슐 및 둥근 컨테이너"
        },
        "facet": "color",
        "description": {
          "en": "A saturated primary (Indigo 500 #3F51B5 class) owns bars and large areas; a contrasting accent (Pink A200 #FF4081 class) is reserved for the FAB and key controls against white cards.",
          "ko": "머티리얼 3 가이드라인에 따른 캡슐 버튼 및 둥근 모서리 토큰(12~28px) 형태."
        }
      },
      {
        "id": "meaningful-motion",
        "role": "supporting",
        "name": {
          "en": "Motion explains hierarchy",
          "ko": "Roboto 및 가독성 서체"
        },
        "facet": "motion",
        "description": {
          "en": "Transitions run 200–300ms on the standard curve cubic-bezier(0.4, 0, 0.2, 1); new surfaces grow out of the element that spawned them, so animation shows cause, not decoration.",
          "ko": "Roboto 및 Google Sans 서체를 사용하여 표준화된 본문/헤드라인 체계 및 베이스라인 정렬 제공."
        }
      },
      {
        "id": "eight-dp-grid",
        "role": "supporting",
        "name": {
          "en": "8dp square grid",
          "ko": "실물 질감 모사 지양"
        },
        "facet": "layout",
        "description": {
          "en": "Components align to an 8dp baseline grid — spacing in 8/16/24px multiples, 16px screen margins — so unrelated screens share the same rhythm.",
          "ko": "가죽, 나무, 유광 글래스 등 실물 질감 모사는 머티리얼의 디지털 종이/인공 메타포와 충돌함."
        }
      },
      {
        "id": "flat-no-shadow",
        "role": "avoid",
        "name": {
          "en": "Shadowless color blocks",
          "ko": "고도 없는 완전 플랫 지양"
        },
        "facet": "depth",
        "description": {
          "en": "Pure 2D fills where hierarchy comes from color alone — zero elevation, zero ripple physics — is Flat Design; Material's entire point is the restored, measurable z-axis.",
          "ko": "모든 고도 단계와 터치 리플을 제거하면 머티리얼 고유의 체계적 깊이감이 없어짐."
        }
      }
    ],
    "confusedWith": {
      "slug": "flat-design",
      "name": "Flat Design",
      "because": {
        "en": "This is Material Design because depth is restored as a physics system — every surface sits at a measured z-axis elevation casting a shadow that encodes its height, and motion expresses where elements come from.",
        "ko": "구별 이유: 구글의 매개변수화된 종이/메타포 시스템에 기반하여 체계적인 고도(Elevation) 그림자, 클릭 시 퍼지는 리플(Ripple) 애니메이션, 동적 컬러 틴팅, Floating Action Button(FAB)으로 구성되었으므로 머티리얼 디자인에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Flat Design if the z-axis were collapsed back to zero — shadows deleted, the FAB flattened into a solid color block, hierarchy left to color and type alone.",
        "ko": "변경 조건: 모든 고도 그림자와 리플 터치 피드백, 머티리얼 레이어 물리 효과가 전면 제거되면 평면적인 플랫 디자인이 됨."
      }
    },
    "brief": {
      "en": "Build the surface in classic Material Design (2014 paper-and-ink generation). Canvas: light gray #FAFAFA ground, white #FFFFFF cards floating on a stepped dp elevation scale — 2dp card: box-shadow 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12); 8dp raised: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2). Palette: primary Indigo 500 #3F51B5 for bars and large areas, accent Pink A200 #FF4081 for the FAB and key controls; text #212121 / #757575. Type: Roboto (fallback system sans), medium titles. Geometry: cards 2–4px radius; one circular FAB (56px, 6dp, lifts to 12dp pressed) in the accent. Interaction: ink ripples spread from the touch point; transitions 200–300ms cubic-bezier(0.4, 0, 0.2, 1), surfaces growing from their parent. Layout on an 8dp grid — 8/16/24px spacing. Do not drift into Flat Design: elevation shadows, the FAB, and ripples are mandatory — hierarchy by color alone with zero shadows is the neighbor style. Keep text on accent fills at 4.5:1 and honor prefers-reduced-motion.",
      "ko": "머티리얼 디자인(Material Design 3) 스타일을 적용합니다. 정의 신호: 체계적인 고도 단계(Elevation dp) 드롭 섀도우, 클릭 시 퍼지는 잉크 리플(Ripple) 터치 피드백, 동적 톤 컬러 팔레트, 플로팅 작업 버튼(FAB), 캡슐 및 둥근 모서리 컨테이너 토큰, Roboto/Google Sans 서체입니다. 모션 줄이기 환경에서 리플 애니메이션 및 시트 슬라이드 모션을 정지하고 FAB가 중요 콘텐츠를 가리지 않도록 고도 패딩을 보장합니다."
    },
    "accessibility": {
      "en": "Elevation alone is a weak affordance: a white card on a #FAFAFA ground can fail the 3:1 boundary ratio for controls, and shadows vanish entirely in forced-colors mode — interactive elements must read as interactive by color, label, and shape, not by lift alone.\n\nWhite ink on hot accent colors is the classic trap: white on Pink A200 #FF4081 measures roughly 3.3:1 — acceptable for the FAB's icon, too weak for text; white on Indigo 500 #3F51B5 passes at about 6.9:1. Check every pair against 4.5:1, or step down to a 700 shade.\n\nMotion is load-bearing here — surfaces grow and travel to explain where things came from — so prefers-reduced-motion needs a real fallback: replace growing and traveling transitions with instant cuts or simple crossfades, and drop the ripple animation.",
      "ko": "Ripples 분사 애니메이션 및 수평 카드의 수묵 효과는 모션 줄이기 시 정지 처리.\nFloating Action Button(FAB)은 화면 상의 중요 콘텐츠나 입력 필드를 가리지 않도록 위치 지정."
    },
    "a11yAndMisuse": {
      "en": "Elevation alone is a weak affordance: a white card on a #FAFAFA ground can fail the 3:1 boundary ratio for controls, and shadows vanish entirely in forced-colors mode — interactive elements must read as interactive by color, label, and shape, not by lift alone.\n\nWhite ink on hot accent colors is the classic trap: white on Pink A200 #FF4081 measures roughly 3.3:1 — acceptable for the FAB's icon, too weak for text; white on Indigo 500 #3F51B5 passes at about 6.9:1. Check every pair against 4.5:1, or step down to a 700 shade.\n\nMotion is load-bearing here — surfaces grow and travel to explain where things came from — so prefers-reduced-motion needs a real fallback: replace growing and traveling transitions with instant cuts or simple crossfades, and drop the ripple animation.",
      "ko": "Ripples 분사 애니메이션 및 수평 카드의 수묵 효과는 모션 줄이기 시 정지 처리.\nFloating Action Button(FAB)은 화면 상의 중요 콘텐츠나 입력 필드를 가리지 않도록 위치 지정."
    },
    "origin": {
      "en": "Unveiled by Google at its I/O conference in June 2014 — led by design VP Matías Duarte and developed under the internal codename Quantum Paper — and shipped that year with Android 5.0 Lollipop as the company's first unified cross-platform design language. Its paper-and-ink metaphor and the Roboto typeface (designed by Christian Robertson) became the visual identity of Android; Google extended the system with Material Theming at I/O 2018 and with the wallpaper-tinted, personalized Material You alongside Android 12 in 2021.",
      "ko": "2014년 구글 I/O에서 양방향 디지털 종이라는 개념으로 공식 발표되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "terminal-hacker",
    "name": {
      "en": "Terminal Hacker",
      "ko": "터미널 해커"
    },
    "tagline": {
      "en": "Terminal Hacker turns the screen into a vintage character terminal: a pure black CRT glowing in a single phosphor ink — matrix green or amber — with monospace glyphs, a soft halo around every character, scanlines and flicker laid over everything, and a blinking block cursor typing content out like a machine. Born from 1970s–80s hardware limits, canonized by hacker cinema and The Matrix, it is now pure retro-futurist costume: the interface pretends to be forty-year-old equipment.",
      "ko": "검은 화면 위의 핫그린/앰버 모노스페이스 폰트, 커서 빰빡임과 스캔라인 노이즈가 주는 레트로 단말기 감성"
    },
    "scope": {
      "en": "Scope: This entry is the retro CRT emulation — black ground, one phosphor color, glow, scanlines, block cursor. The broader neon-drenched dystopian look (magenta/cyan skylines, chrome, rain) is Cyberpunk; genuinely unstyled default HTML is Web Brutalism; blocky low-res game graphics are Pixel Art.",
      "ko": "범위: 고전 CRT 모니터 및 쉘 터미널 인터페이스 비주얼 스타일입니다."
    },
    "aliases": {
      "en": [
        "green text on black like the matrix",
        "movie hacker computer screen",
        "old crt monitor look with scanlines",
        "retro terminal with the blinking square cursor",
        "website that looks like an 80s command line",
        "glowing green monospace hacker aesthetic",
        "green phosphor crt terminal",
        "matrix command line interface",
        "cli hacker prompt"
      ],
      "ko": [
        "어두운 CRT 화면 위 녹색/주황색 프롬프트 터미널",
        "깜빡이는 블록 커서와 명령줄 인터페이스(CLI)",
        "해커 스크립트와 등폭 폰트(Monospace) 텍스트 스트림",
        "CRT 매트릭스 스캔라인 오버레이 화면",
        "매트릭스 코드 및 개발자 콘솔 감성",
        "터미널 인광 녹색 CLI",
        "매트릭스 해커 커맨드라인",
        "흑백 CRT 모니터 감성"
      ]
    },
    "signals": [
      {
        "id": "phosphor-ink",
        "role": "defining",
        "name": {
          "en": "One phosphor ink on black",
          "ko": "칠흑 바탕 위 인광 녹색 또는 호박색"
        },
        "facet": "color",
        "description": {
          "en": "Pure black ground (#000–#050805) with a single luminous ink for text, borders, and graphics — matrix green #00ff41 or amber #ffb000. One electron gun, one hue; a second color already feels wrong.",
          "ko": "칠흑 같은 검은 바탕(#050505) 위에 선명한 인광 녹색(#00ff66) 또는 호박색 모노크롬 텍스트."
        }
      },
      {
        "id": "phosphor-glow",
        "role": "defining",
        "name": {
          "en": "Phosphor glow on every glyph",
          "ko": "깜빡이는 블록 프롬프트 커서"
        },
        "facet": "surface",
        "description": {
          "en": "Text and line art carry a same-hue halo — text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) — as if the phosphor is still warm. Flat, matte text breaks the spell.",
          "ko": "명령줄 끝에서 1Hz 주기로 깜빡이는 사각형 또는 파이프 블록 프롬프트 커서."
        }
      },
      {
        "id": "scanline-flicker",
        "role": "defining",
        "name": {
          "en": "Scanlines and flicker",
          "ko": "엄격한 등폭(Monospace) 서체 격자"
        },
        "facet": "surface",
        "description": {
          "en": "A repeating-linear-gradient of 1px dark lines every 2–4px overlays the whole screen, plus a subtle brightness flicker in steps timing. The image should read as emitted by a tube, not printed.",
          "ko": "Cascadia Code, Fira Code, VT323 등 등폭 서체를 문자 열/행 격자에 정확히 정렬함."
        }
      },
      {
        "id": "block-cursor",
        "role": "defining",
        "name": {
          "en": "Blinking block cursor",
          "ko": "CRT 브라운관 스캔라인 및 번짐 효과"
        },
        "facet": "motion",
        "description": {
          "en": "A solid full-cell block █ at the input position, toggling on/off roughly once a second with steps(1) — a hard blink, never a fade. It marks where the machine is listening.",
          "ko": "수평 미세 스캔라인 오버레이, 볼록한 브라운관 곡면, text-shadow 글자 빛 번짐(Glow) 효과."
        }
      },
      {
        "id": "boot-typewriter",
        "role": "supporting",
        "name": {
          "en": "Boot logs and typewriter reveal",
          "ko": "CLI 프롬프트 명령어 프레임"
        },
        "facet": "motion",
        "description": {
          "en": "Screens open with BIOS-style self-tests ('MEM CHECK ...... OK') in terse ALL-CAPS machine voice behind prompt symbols (>, $, #), and content appears character-by-character at ~30–60ms per glyph.",
          "ko": "root@system:~# 프롬프트, ASCII 아트 헤더, 코맨드 라인 출력 스트림이 전체 UI 구성을 형성함."
        }
      },
      {
        "id": "ascii-art",
        "role": "supporting",
        "name": {
          "en": "ASCII boxes and character art",
          "ko": "ASCII 및 유니코드 상자 기호 테두리"
        },
        "facet": "imagery",
        "description": {
          "en": "Frames drawn from +---+ and |, progress bars as [██████░░░░], waveforms and logos built from characters on the monospace grid — graphics rendered as text because the hardware had nothing else.",
          "ko": "CSS 테두리 대신 유니코드 박스 기호(┌─┐│└─┘)를 조합하여 패널과 테이블을 형성함."
        }
      },
      {
        "id": "which-phosphor",
        "role": "variable",
        "name": {
          "en": "Which phosphor",
          "ko": "모던 GUI 둥근 버튼 지양"
        },
        "facet": "color",
        "description": {
          "en": "Green #00ff41 is the Matrix cliché; amber #ffb000 reads warmer and more 'office 1983'; cool white is the sober variant. The construction carries the style, not the hue.",
          "ko": "둥근 모서리, 그래디언트, 마우스 전용 윈도우 버튼은 순수 CLI 단말기 느낌을 해침."
        }
      },
      {
        "id": "soft-polychrome",
        "role": "avoid",
        "name": {
          "en": "Soft, polychrome UI",
          "ko": "따뜻한 색상의 터치 블록 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Full-color imagery, gradients, rounded glass cards, and drop shadows dissolve the illusion instantly — if it looks like a modern app tinted green, it isn't terminal.",
          "ko": "오렌지, 보라색의 둥근 터치 캡슐 블록은 스타트렉 LCARS 영역이므로 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is terminal-hacker because the page is a styled simulation of vintage CRT hardware: black ground, one glowing phosphor color, monospace glyphs, scanlines, and a blinking block cursor.",
        "ko": "구별 이유: 검은 바탕 위 모노크롬 인광 녹색(#00ff66) 또는 주황색 텍스트, 깜빡이는 블록 커서, 등폭 폰트(Monospace) 단말기 스트림, CRT 브라운관 스캔라인 효과로 구성되었으므로 터미널 해커에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Web Brutalism if the CRT costume were removed — white ground, default serif type, plain blue links, bare HTML structure. One emulates a 1982 monitor; the other is no CSS at all.",
        "ko": "변경 조건: 녹색 CLI 프롬프트 텍스트가 오렌지, 보라, 노랑의 둥근 캡슐 블록과 L자형 커브 헤더, 터치 패널 컨트롤로 바뀌면 LCARS(스타트렉 시스템)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface as a terminal-hacker CRT emulation. Canvas: pure black (#000 to #050805), border-radius 0–2px, 1px borders in dim phosphor rgba(0,255,65,.35). Ink: one phosphor hue only — matrix green #00ff41 (amber #ffb000 acceptable) — for all text, icons, and graphics; dim states are the same hue at 40–60% opacity, never gray or a second hue. Type: monospace everywhere (ui-monospace, 'IBM Plex Mono', 'JetBrains Mono'), 12–14px, ALL CAPS for status lines; every glyph glows via text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25). Overlay the panel with scanlines (repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)) plus subtle flicker (<3 flashes/sec). End input lines with a blinking block cursor █ (1.1s, steps(1), no fade). Reveal headings typewriter-style, prefix lines with > or $, draw boxes and bars as ASCII (+---+, [████░░]). Avoid color imagery, gradients, rounded capsules, drop shadows, white backgrounds — they break the tube. Honor prefers-reduced-motion: kill flicker, blink, and typewriter, showing full text instantly.",
      "ko": "터미널 해커(Terminal Hacker / CLI) 스타일을 적용합니다. 정의 신호: 검은 바탕 위 인광 녹색(#00ff66) 모노크롬 텍스트, 1Hz 깜빡이는 블록 커서, 등폭 서체(Cascadia Code) 격자, CRT 브라운관 수평 스캔라인 및 글자 빛 번짐(text-shadow glow), root@system:~# CLI 프롬프트 구문, 유니코드 상자 기호 테두리입니다. 스캔라인 오버레이에 pointer-events: none을 적용하고, prefers-reduced-motion 환경에서 커서 깜빡임과 진동을 정지시키며, 녹색-검은색 간 4.5:1 이상 명암비를 준수합니다."
    },
    "accessibility": {
      "en": "Full-brightness phosphor on black passes contrast easily (#00ff41 on #000 is roughly 13:1), but the glow and the dim 'muted' states eat it — keep body text at full brightness, test any dimmed line against 4.5:1, and remember bright-vs-dim is the only emphasis axis in a one-hue palette, so don't let dimmed text carry essential information.\n\nFlicker and jitter are the real hazard: keep any flashing below three per second and low in amplitude, and under prefers-reduced-motion disable flicker, cursor blink, and typewriter entirely — content must already be present in the DOM and fully readable without the animation.\n\nALL-CAPS log lines and dense monospace slow long-form reading, and some screen readers announce all-caps strings letter by letter — keep caps to short status strings, write body copy in normal case, and never let a long boot sequence gate access to the actual content.",
      "ko": "어두운 배경 위 녹색/주황색 CRT 텍스트는 4.5:1 명암비를 엄격히 준수해야 함 (어두운 녹색 금지).\n텍스트 커서 깜빡임 애니메이션 정지 옵션 지원."
    },
    "a11yAndMisuse": {
      "en": "Full-brightness phosphor on black passes contrast easily (#00ff41 on #000 is roughly 13:1), but the glow and the dim 'muted' states eat it — keep body text at full brightness, test any dimmed line against 4.5:1, and remember bright-vs-dim is the only emphasis axis in a one-hue palette, so don't let dimmed text carry essential information.\n\nFlicker and jitter are the real hazard: keep any flashing below three per second and low in amplitude, and under prefers-reduced-motion disable flicker, cursor blink, and typewriter entirely — content must already be present in the DOM and fully readable without the animation.\n\nALL-CAPS log lines and dense monospace slow long-form reading, and some screen readers announce all-caps strings letter by letter — keep caps to short status strings, write body copy in normal case, and never let a long boot sequence gate access to the actual content.",
      "ko": "어두운 배경 위 녹색/주황색 CRT 텍스트는 4.5:1 명암비를 엄격히 준수해야 함 (어두운 녹색 금지).\n텍스트 커서 깜빡임 애니메이션 정지 옵션 지원."
    },
    "origin": {
      "en": "Descends from 1970s–80s character terminals, when one electron gun meant one color: green- and amber-phosphor CRTs like IBM's 3270 (1971) and DEC's VT100 (1978) produced the look out of pure hardware necessity. Hollywood turned it into 'hacker' shorthand — WarGames (1983), and above all The Matrix (1999), whose falling green 'digital rain' was created by production designer Simon Whiteley from glyphs scanned out of Japanese cookbooks. The style survives as deliberate retro-futurism: CSS scanlines, boot sequences, and block cursors running on hardware that has never seen a tube.",
      "ko": "1970~80년대 VT100 등 초기 컴퓨터 CRT 모니터 단말기에서 유래되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "frutiger-metro",
    "name": {
      "en": "Frutiger Metro (Vectordelia)",
      "ko": "프루티거 메트로"
    },
    "tagline": {
      "en": "Frutiger Metro, also known as Vectordelia, is the late-millennium vector-maximalist graphic style that flourished roughly 2005–2013 alongside Frutiger Aero but moved in the opposite direction: instead of skies and water, it built cities out of pure vector — subway lines, bright saturated gradients, abstract floral flourishes and swirls, humanist sans type, glossy vector shapes, and multicolored silhouette figures. It is the visual language of iPod commercials, Xbox 360 dashboards, Windows 7 stock imagery, and city-themed event graphics: optimistic, urban, geometrically neat, and deliberately non-photorealistic.",
      "ko": "선명한 평면 단색 타일과 대담한 아이콘 그래픽이 돋보이는 2010년대 타이포그래피 중심 모던 인터페이스"
    },
    "scope": {
      "en": "Scope: This entry covers the vector-maximalist graphic style commonly called Frutiger Metro or Vectordelia, not Microsoft's Metro/Modern UI design language, which shares the name but is flat, typographic, and tile-based. It sits beside Frutiger Aero as a sibling style, not a subset.",
      "ko": "범위: 윈도우폰 및 윈도우 8의 메트로(Metro) UI 비주얼 언어를 의미합니다."
    },
    "aliases": {
      "en": [
        "city subway map graphics with bright vector shapes",
        "ipod commercial with colorful silhouette people",
        "abstract vector swirls and flowers on gradients",
        "windows 7 stock art with glossy circles",
        "late 2000s vector maximalist event posters",
        "bright flat shapes that look like a metro map",
        "windows phone metro tiles",
        "flat colorful vector strips",
        "vector ribbon design"
      ],
      "ko": [
        "윈도우 폰 7 및 윈도우 8 메트로(Metro) UI",
        "플랫 라이브 타일(Live Tiles)과 타이포그래피 중심 레이아웃",
        "화사한 원색 블록과 대담한 대문자 서체",
        "크롭된 대형 글자와 플랫 파노라마 스크롤",
        "2010년대 초반 모바일 메트로 디자인",
        "프루티거 메트로 타일",
        "윈도우폰 메트로 UI",
        "비구조적 벡터 시티 감성"
      ]
    },
    "signals": [
      {
        "id": "subway-geometry",
        "role": "defining",
        "name": {
          "en": "Subway-map city geometry",
          "ko": "플랫 라이브 타일 블록"
        },
        "facet": "layout",
        "description": {
          "en": "Routes, intersections, and stations are drawn as clean vector lines with 90° and 45° angles, rounded caps, and circular nodes — the interface reads like a transit diagram.",
          "ko": "입체 그림자나 그래디언트가 전혀 없는 플랫 단색 타일들이 정교하게 정렬됨."
        }
      },
      {
        "id": "saturated-gradients",
        "role": "defining",
        "name": {
          "en": "Bright saturated gradient blocks",
          "ko": "대담한 메트로 산세리프 서체 (Segoe WP)"
        },
        "facet": "color",
        "description": {
          "en": "Large flat panels use hard, cheerful gradients — magenta #ec008c into cyan #00b6e3 into yellow #ffd400 — at sharp diagonal angles, never soft natural tones.",
          "ko": "Segoe WP 계열의 큼직하고 명확한 산세리프 서체를 화면 중심 타이틀로 배치함."
        }
      },
      {
        "id": "vector-flourishes",
        "role": "defining",
        "name": {
          "en": "Abstract vector flourishes",
          "ko": "화사한 고채도 컬러 그리드"
        },
        "facet": "imagery",
        "description": {
          "en": "Decorative vines, swirls, starbursts, and geometric flowers are drawn as single-color vector shapes with crisp 1–2px outlines, purely illustrative and non-photorealistic.",
          "ko": "마젠타, 코발트 블루, 라임, 오렌지 등 밝고 선명한 고채도 타이틀 컬러 사용."
        }
      },
      {
        "id": "humanist-sans",
        "role": "defining",
        "name": {
          "en": "Clean humanist sans",
          "ko": "화면을 넘어서는 크롭 타이틀"
        },
        "facet": "typography",
        "description": {
          "en": "Text is set in open, rounded-humanist sans-serifs such as Frutiger, Segoe UI, or Myriad — friendly and legible, never chrome or techno.",
          "ko": "화면 가장자리로 글자가 자연스럽게 잘려 수평 파노라마 스크롤이 존재함을 직관적으로 암시함."
        }
      },
      {
        "id": "glossy-vector",
        "role": "defining",
        "name": {
          "en": "Glossy vector shapes",
          "ko": "원형 테두리 내 미니멀 글리프 아이콘"
        },
        "facet": "surface",
        "description": {
          "en": "Circles, pills, and ribbons carry a white top sheen (linear-gradient rgba(255,255,255,.75) to transparent at ~48%) and a subtle vector shadow, mimicking polished plastic without texture.",
          "ko": "플랫 단색 원형 버튼 안에 배치된 간결한 흰색 선형 벡터 글리프 아이콘."
        }
      },
      {
        "id": "silhouette-figures",
        "role": "supporting",
        "name": {
          "en": "Multicolored silhouette figures",
          "ko": "입체 베벨 및 광택 배제"
        },
        "facet": "imagery",
        "description": {
          "en": "Flat human silhouettes in saturated single colors dance, point, or hold devices — the iPod-commercial signature, used as accent rather than hero.",
          "ko": "스큐어모피즘의 유광, 글래스 블러, 입체 그림자를 철저히 배제하고 순수 평면을 유지함."
        }
      },
      {
        "id": "color-block-collage",
        "role": "supporting",
        "name": {
          "en": "Overlapping color-block collage",
          "ko": "반투명 글래스 에어로 프레임 지양"
        },
        "facet": "layout",
        "description": {
          "en": "Panels of pure color overlap at playful angles, creating a layered but flat composition with no cast shadows or simulated depth.",
          "ko": "반투명 글래스와 반사 광택은 프루티거 메트로를 윈도우 에어로로 되돌리므로 배제함."
        }
      },
      {
        "id": "nature-textures",
        "role": "avoid",
        "name": {
          "en": "Nature textures and photorealism",
          "ko": "두꺼운 검은 만화 윤곽선 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Photographic skies, water, grass, glass blur, or organic light effects push the look toward Frutiger Aero — Metro stays synthetic and vector-flat.",
          "ko": "두꺼운 검은 테두리와 오프셋 그림자는 네오브루탈리즘 영역이므로 메트로의 순수 타일과 구분됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "frutiger-aero",
      "name": "Frutiger Aero",
      "because": {
        "en": "This is Frutiger Metro because the world is built from flat, hard-edged vector graphics — subway maps, gradient blocks, and stylized silhouettes — not from photorealistic skies, water droplets, grass, or glassy nature scenes.",
        "ko": "구별 이유: 윈도우 폰 7 및 윈도우 8의 메트로(Metro/Modern) 디자인 언어에 기반하여 입체 효과 없는 순수 플랫 라이브 타일, 세리프 없는 대담한 디스플레이 서체, 화사한 대각선/원색 블록, 화면을 넘어가는 파노라마 구조로 구성되었으므로 프루티거 메트로에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Frutiger Aero if the vector city dissolved into glossy nature photography — blue skies, green grass, water droplets, bubbles, and soft organic light behind translucent glass panels.",
        "ko": "변경 조건: 플랫 타일에 반투명 글래스 프레임, 광택 하이라이트, 오로라 블러 배경이 결합되어 입체화되면 윈도우 에어로가 됨."
      }
    },
    "brief": {
      "en": "Create the piece using Frutiger Metro (Vectordelia). Defining signals: build the layout from subway-map geometry — routes at 90° and 45° with rounded caps, station nodes as 12–18px circles (#ec008c, #00b6e3, #ffd400); fill panels with bright saturated diagonal gradients (magenta #ec008c → cyan #00b6e3 → yellow #ffd400 at 135°); scatter abstract vector flourishes and swirls behind content as single-color shapes with 1–2px crisp outlines (#00a9e0 or #ec008c). Use a clean humanist sans-serif such as Frutiger, Segoe UI, or system-ui; headings at 24–36px with tight tracking, body at 14–16px, ink in white or near-black. Add glossy vector accents — circles, pills, ribbons — with a white top sheen (linear-gradient rgba(255,255,255,.75) to transparent at 48%) and subtle drop shadow (0 4px 10px rgba(0,0,0,.12)). Include multicolored silhouette figures as supporting garnish. Avoid nature photography, water droplets, grass, sky gradients, glass blur, or chrome; those belong to Frutiger Aero. Keep tile spacing at 8–12px, block border-radius at 8–16px, pills at 999px. Ensure text sits on solid or gradient regions that hit 4.5:1 contrast, reserve maximalism for decorative zones, and honor prefers-reduced-motion.",
      "ko": "프루티거 메트로(Frutiger Metro / Windows Phone Metro) 스타일을 적용합니다. 정의 신호: 입체감 없는 단색 플랫 라이브 타일 그리드, 큼직하고 명확한 Segoe WP 산세리프 서체, 고채도 마젠타/코발트/라임 컬러, 뷰포트 가장자리로 잘려 수평 스크롤을 암시하는 대형 크롭 타이틀, 원형 안의 미니멀 선형 아이콘입니다. 타일 선택 시 스케일 축소 모션을 적용하되, 모션 줄이기 환경에 대응하며 고채도 타일 위 텍스트 명암비를 4.5:1 이상 보장합니다."
    },
    "accessibility": {
      "en": "Small white labels on bright magenta or yellow gradient blocks often fail 4.5:1 contrast; place text on the darkest part of a gradient or add a dark translucent scrim behind it.\n\nFast, outward-flowing vector animations can trigger vestibular issues; under prefers-reduced-motion, freeze flourishes and switch any expanding radial burst to an instant fade.\n\nThe dense overlap of swirls, silhouettes, and color blocks raises cognitive load for low-vision and neurodivergent users; reserve the maximalism for decorative regions and keep interactive controls on clean, high-contrast plates.",
      "ko": "평면 아이콘 및 플랫 색상 블록 간의 명암비 확보.\n화살표 및 기하학 스트라이프 배경 위 텍스트 독해성 보장."
    },
    "a11yAndMisuse": {
      "en": "Small white labels on bright magenta or yellow gradient blocks often fail 4.5:1 contrast; place text on the darkest part of a gradient or add a dark translucent scrim behind it.\n\nFast, outward-flowing vector animations can trigger vestibular issues; under prefers-reduced-motion, freeze flourishes and switch any expanding radial burst to an instant fade.\n\nThe dense overlap of swirls, silhouettes, and color blocks raises cognitive load for low-vision and neurodivergent users; reserve the maximalism for decorative regions and keep interactive controls on clean, high-contrast plates.",
      "ko": "평면 아이콘 및 플랫 색상 블록 간의 명암비 확보.\n화살표 및 기하학 스트라이프 배경 위 텍스트 독해성 보장."
    },
    "origin": {
      "en": "Roughly 2005–2013, peaking in the late 2000s: the look emerged from vector stock-art packs, iPod silhouette advertising, Xbox 360 dashboard visuals, Windows 7 stock imagery, and city-themed event graphics. The label Frutiger Metro is retroactive, coined by online aesthetics communities in the 2010s–2020s by analogy to Adrian Frutiger's humanist type and the urban/subway 'metro' mood; Vectordelia is the term used by CARI/Evan Collins and the Frutiger Aero Archive community. Microsoft's Metro design language shares the name but is a separate, later flat-typographic system.",
      "ko": "공항 및 지하철 표지판의 교통 안내 시스템 타이포그래피에서 영감을 받아 마이크로소프트가 개발했습니다."
    },
    "meta": {}
  },
  {
    "slug": "anti-design",
    "name": {
      "en": "Anti-design / Dada Web",
      "ko": "안티 디자인"
    },
    "tagline": {
      "en": "Anti-design / Dada Web treats visual conflict as the whole aesthetic: clashing typefaces, overlapping elements, broken grids, high-saturation colors that fight each other, and system defaults pushed to absurdity. It is deliberately ugly, but ugly by design — a collage-like rebellion against clean UX, grid systems, and brand-safe palettes. It flourishes in experimental portfolios, zine sites, art-school projects, and any screen that wants to look like it escaped from a Dadaist cut-up magazine rather than a design system.",
      "ko": "전통적인 UX 레이아웃 규칙을 고의로 파괴하여 의외성과 충격을 주는 실험적 아트 가이던스"
    },
    "scope": {
      "en": "Scope: This entry covers the intentionally transgressive web/graphic look. It is distinct from Web Brutalism (honest bare-browser defaults) and Neobrutalism (a styled, thick-border graphic language). The line between anti-design and zine-collage is thin, but anti-design is more about rule-breaking and visual aggression than about editorial collage narrative.",
      "ko": "범위: 사용성을 전면 거부하는 사이트가 아닌, 정형화된 그리드에서 벗어나 시각적 파격을 시도하는 아트 디자인 사조입니다."
    },
    "aliases": {
      "en": [
        "website that looks ugly on purpose",
        "overlapping boxes with clashing fonts and colors",
        "interface that breaks every design rule",
        "collage-style site with things stacked on top of each other",
        "dada web design that is anti-ux",
        "screen that looks like a zine exploded",
        "deliberately ugly rebellious UI",
        "chaos experimental design",
        "anti aesthetic web"
      ],
      "ko": [
        "전통적 UI 규칙을 깨뜨리는 안티디자인(Anti-Design)",
        "의도적인 레이아웃 불협화음과 충돌하는 서체",
        "가독성을 파괴하는 과감한 실험적 웹 디자인",
        "규칙 없는 무작위 요소 배치와 픽셀 노이즈",
        "아방가르드 포스트모던 인터페이스",
        "안티 디자인 반항적 실험 UI",
        "의도된 혼돈과 파격적 레이아웃",
        "규칙 파괴 웹"
      ]
    },
    "signals": [
      {
        "id": "clashing-typography",
        "role": "defining",
        "name": {
          "en": "Intentionally conflicting typefaces",
          "ko": "충돌하는 서체와 극단적 글자 크기"
        },
        "facet": "typography",
        "description": {
          "en": "Two to four unrelated fonts collide in one view — system serif next to monospace next to a wavy display face — often at mismatched sizes (e.g. 12px body beside 64px headline) and with competing weights.",
          "ko": "한 문장 내에서 세리프, 산세리프, 손글씨, 등폭 폰트를 크기와 자간을 무작위로 섞어 배치함."
        }
      },
      {
        "id": "broken-grid",
        "role": "defining",
        "name": {
          "en": "Broken, overlapping grid",
          "ko": "의도적으로 겹쳐진 레이어와 잘림"
        },
        "facet": "layout",
        "description": {
          "en": "Elements ignore a consistent baseline: cards bleed off edges, buttons sit half on top of text, progress bars tilt or wander. Negative space is used as aggressively as positive space.",
          "ko": "텍스트, 버튼, 이미지가 불규칙하게 겹쳐지고 잘려 정돈된 읽기 순서를 고의로 방해함."
        }
      },
      {
        "id": "clashing-colors",
        "role": "defining",
        "name": {
          "en": "High-saturation color clashes",
          "ko": "눈이 피로한 자극적 고채도 색상 대치"
        },
        "facet": "color",
        "description": {
          "en": "Neon magenta, acid green, warning orange, and electric blue appear side by side with no attempt at harmony; backgrounds may be #ff0040 behind #00ff66 text, deliberately flirting with illegibility.",
          "ko": "핫마젠타와 라임 그린 등 눈에 피로를 주는 자극적인 고채도 대립 색상을 무작위 배치함."
        }
      },
      {
        "id": "system-defaults-pushed",
        "role": "defining",
        "name": {
          "en": "System defaults pushed to absurdity",
          "ko": "규칙이 파괴된 무작위 그리드"
        },
        "facet": "surface",
        "description": {
          "en": "Default form controls, system cursors, scrollbars, and raw HTML elements are retained but exaggerated — giant default checkboxes, default-blue links at 32px, or system alerts used as ornament.",
          "ko": "전통적인 정렬 그리드를 완전히 포기하고 무작위의 기울어진 위치 선정을 단행함."
        }
      },
      {
        "id": "collage-overlap",
        "role": "defining",
        "name": {
          "en": "Collage-style overlap",
          "ko": "뒤바뀐 UI 어포던스"
        },
        "facet": "layout",
        "description": {
          "en": "Images, text blocks, and UI chrome layer on top of one another with mixed blend modes or no blending at all, as if cut out and glued down in stages.",
          "ko": "버튼처럼 보이는 일반 텍스트, 일반 텍스트처럼 보이는 버튼 등 관습적인 어포던스를 뒤엎음."
        }
      },
      {
        "id": "anti-usability",
        "role": "defining",
        "name": {
          "en": "Anti-usability as gesture",
          "ko": "가공되지 않은 미디어 조각들의 날것 혼합"
        },
        "facet": "motion",
        "description": {
          "en": "Common patterns are deliberately warped — buttons that rotate on hover, cursors replaced by giant symbols, scroll direction inverted — to make the user notice the interface instead of disappearing into it.",
          "ko": "보정되지 않은 사진, 저해상도 비트맵, 디지털 노이즈 조각들을 무작위로 혼합함."
        }
      },
      {
        "id": "mixed-geometry",
        "role": "supporting",
        "name": {
          "en": "Jarring mixed geometry",
          "ko": "정돈된 기업형 그리드 지양"
        },
        "facet": "geometry",
        "description": {
          "en": "Circles, jagged polygons, dashed rectangles, and hand-drawn squiggles share the same canvas with no unifying radius or proportion system.",
          "ko": "정돈된 대칭 정렬과 조화로운 색상은 안티디자인의 도발적 정체성을 무너뜨림."
        }
      },
      {
        "id": "soft-rendering",
        "role": "avoid",
        "name": {
          "en": "Soft shadows and gradients",
          "ko": "순수 브라우저 기본 HTML 구조 지양"
        },
        "facet": "depth",
        "description": {
          "en": "Blurred drop shadows, glassmorphism, or gentle gradients signal polish and calm — the exact temperament anti-design tries to destroy.",
          "ko": "혼돈 연출 없이 브라우저 기본 스타일만 있는 순수 문서는 웹 브루탈리즘 영역임."
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is Anti-design because the chaos is actively manufactured: overlapping shapes, clashing type, and aggressive color are deliberate aesthetic choices, not the browser's default bare materials.",
        "ko": "구별 이유: 기존 UX의 가독성, 정렬, 색상 조화 규칙을 의도적으로 방해하고 충돌하는 서체, 겹쳐진 패널, 자극적인 원색, 불협화음 레이아웃으로 도발적인 시각 경험을 전달하므로 안티디자인에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Web Brutalism if the manufactured conflict were stripped away and the page were rebuilt from browser defaults — Times, blue links, white ground, visible document structure, and no decorative rendering at all.",
        "ko": "변경 조건: 의도적인 혼돈 연출이 사라지고 오직 브라우저 기본 바탕체 서체, 파란색 밑줄 링크, 순수 HTML 구조만 남게 되면 웹 브루탈리즘이 됨."
      }
    },
    "brief": {
      "en": "Create the interface in the Anti-design / Dada Web spirit. Defining signals: intentionally conflicting typefaces (mix Times New Roman, system-ui, and a wavy/italic display face in one view); a broken, overlapping grid where elements bleed and collide; high-saturation color clashes such as #ff0040, #00ff66, #00ccff, and #ffaa00 used side by side; system defaults pushed to absurdity (giant default-blue #0000ee links, oversized raw checkboxes, default scrollbars left visible); collage-style overlap with absolute positioning and mixed z-index; anti-usability gestures like rotating buttons on hover or inverted hover states. Use hard-edged shapes — dashed 3px #000 borders, zero blur on shadows if any, and mismatched border radii (0px, 50%, 24px). Avoid soft rendering: no backdrop-filter, no glass, no gradients, no blurred shadows. Keep the specific color set and rotation angles flexible. Preserve the core function — buttons must still be clickable, progress must still be readable — but make the visual argument loud. Ensure focus states remain visible with a thick #000 outline, and honor prefers-reduced-motion by disabling rotation/tilt animations.",
      "ko": "안티디자인(Anti-Design) 스타일을 적용합니다. 정의 신호: 의도적으로 관습을 파괴하는 서체 충돌, 불규칙하게 겹쳐진 레이어와 잘림, 자극적인 대립 색상, 규칙 없는 무작위 그리드, 뒤바뀐 UI 어포던스입니다. 아무리 도발적이고 파격적인 연출이라도 스크린 리더용 시맨틱 HTML DOM 순서, 키보드 포커스 가능성, 4.5:1 최소 가독성 명암비는 반드시 보장하도록 구축합니다."
    },
    "accessibility": {
      "en": "Anti-design deliberately courts low contrast and cognitive overload, so the real risk is excluding users with low vision, photosensitivity, or cognitive disabilities. Never let decoration block function: keep text on a solid high-contrast backing wherever the user must read or act.\n\nDisable all rotation, shake, cursor replacement, and rapid motion under prefers-reduced-motion, and keep any flashing color transitions below the WCAG 2.5.3 / three-flashes-per-second threshold.\n\nProvide a visible, unambiguous focus indicator (e.g. a 3px solid #000 outline with 2px offset) that survives clashing backgrounds; keyboard users must never have to hunt for the active element.",
      "ko": "의도적인 혼돈과 깨진 레이아웃이라 하더라도 시맨틱 HTML 구조와 키보드 접근성, 4.5:1 명암비는 반드시 지켜야 함.\n포커스 링을 의도적으로 제거하여 키보드 사용을 불가능하게 만들지 말 것."
    },
    "a11yAndMisuse": {
      "en": "Anti-design deliberately courts low contrast and cognitive overload, so the real risk is excluding users with low vision, photosensitivity, or cognitive disabilities. Never let decoration block function: keep text on a solid high-contrast backing wherever the user must read or act.\n\nDisable all rotation, shake, cursor replacement, and rapid motion under prefers-reduced-motion, and keep any flashing color transitions below the WCAG 2.5.3 / three-flashes-per-second threshold.\n\nProvide a visible, unambiguous focus indicator (e.g. a 3px solid #000 outline with 2px offset) that survives clashing backgrounds; keyboard users must never have to hunt for the active element.",
      "ko": "의도적인 혼돈과 깨진 레이아웃이라 하더라도 시맨틱 HTML 구조와 키보드 접근성, 4.5:1 명암비는 반드시 지켜야 함.\n포커스 링을 의도적으로 제거하여 키보드 사용을 불가능하게 만들지 말 것."
    },
    "origin": {
      "en": "The term descends from the Italian Anti-design / Radical Design movement of the late 1960s and early 1970s — groups such as Archizoom and Superstudio in Florence, and figures including Ettore Sottsass, who rejected functionalist 'good design' in favor of provocation, kitsch, and social critique. On the web, the sensibility resurfaced in the late 2010s alongside web brutalism and was increasingly labeled anti-design or 'Dada Web' by the early 2020s as designers deliberately broke grids, clashed type, and weaponized ugliness against the sameness of polished SaaS interfaces.",
      "ko": "2010년대 중반 웹 디자인의 일률화에 반발하여 아트 디자이너 및 브랜드 캠페인에서 시작되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "acid-graphics",
    "name": {
      "en": "Acid Graphics",
      "ko": "애시드 그래픽"
    },
    "tagline": {
      "en": "Acid Graphics is the dark, psychedelic cousin of millennium chrome: black backgrounds set off by toxic neon gradients, metallic 3D lettering that looks extruded from liquid mercury, and wireframe grids that melt, twist, and mirror themselves into distortion. It grew out of 1990s acid-house and rave flyers, then was revived in the 2010s as a club-culture visual language for electronic music, streetwear, and underground editorial — less 'future that shipped' than a future seen through a funhouse lens.",
      "ko": "90년대 레이브 문화, 크롬 광택 3D 폰트, 네온 유기체 패턴이 결합된 사이케델릭 그래픽"
    },
    "scope": {
      "en": "Scope: This entry covers the graphic/UI look, not the broader Y2K fashion revival or the brighter 'chrome bubblegum' branch of turn-of-millennium design. The melancholic neon-grid strain is closer to synthwave/retrowave; this entry stays with the distorted, subcultural rave signal.",
      "ko": "범위: 레이브 포스터, 음반 커버 및 영에너지 스트릿 브랜드 웹에 쓰이는 사이케델릭 비주얼입니다."
    },
    "aliases": {
      "en": [
        "that dark chrome 3d text with melting grids",
        "black background with neon green and pink gradients",
        "rave flyer style with distorted mirrors and liquid metal",
        "psychedelic chrome typography on black",
        "club poster look with warped wireframe grids",
        "acid house graphic design with metallic letters",
        "90s rave techno chrome text",
        "psychedelic liquid metal font",
        "acid rave flyer art"
      ],
      "ko": [
        "90년대 레이브 파티 플라이어 감성의 애시드 그래픽",
        "액상 크롬 3D 서체와 왜곡된 시안-마젠타 비주얼",
        "유기적 왜곡 레이아웃과 미래지향적 사이버 테크",
        "복잡한 크롬 3D 텍스트와 네온 바이올렛 패널",
        "실험적 클럽 문화 및 레이브 그래픽",
        "애시드 그래픽 사이케델릭",
        "90년대 레이브 파티 크롬 서체",
        "액상 메탈 흘러내림"
      ]
    },
    "signals": [
      {
        "id": "chrome-3d-type",
        "role": "defining",
        "name": {
          "en": "Liquid chrome 3D lettering",
          "ko": "액상으로 녹아내리는 3D 크롬 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms are extruded, beveled, and filled with mirror-to-dark chrome gradients so they read as freshly cast metal; stacked text-shadows give them a 3D drop.",
          "ko": "수은이나 액상 크롬처럼 구부러지고 녹아내리며 빛을 반사하는 3D 입체 디스플레이 서체."
        }
      },
      {
        "id": "liquid-distortion",
        "role": "defining",
        "name": {
          "en": "Liquid distortion",
          "ko": "몽환적인 애시드 네온 팔레트"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms appear to melt, drip, or warp like viscous fluid — letters sag, grids liquefy, and borders bulge as if gravity is optional.",
          "ko": "일렉트릭 라임, 네온 마젠타, 바이올렛, 애시드 옐로우 등 환각적이고 대담한 네온 색상 조합."
        }
      },
      {
        "id": "neon-acid-palette",
        "role": "defining",
        "name": {
          "en": "Toxic neon gradients on black",
          "ko": "왜곡되고 우그러진 벡터 형태"
        },
        "facet": "color",
        "description": {
          "en": "High-saturation acid green (#39ff14), hot magenta (#ff00a0), electric cyan (#00f0ff), and toxic yellow (#ccff00) glow against a near-black ground (#050505–#0a0a0a).",
          "ko": "프레임, 아이콘, 그래픽이 물결(Wave) 및 리퀴파이(Liquify) 효과로 우그러진 형태."
        }
      },
      {
        "id": "warped-grid",
        "role": "defining",
        "name": {
          "en": "Warped wireframe grids",
          "ko": "90년대 레이브 포스터 스타일 고밀도"
        },
        "facet": "geometry",
        "description": {
          "en": "Perspective grids, wireframe globes, and mesh planes bend, twist, or dissolve — the grid is a structure being pulled apart, not a neutral scaffold.",
          "ko": "텍스트 스트림, 테크니컬 기호, 클럽 플라이어 문구가 화면 전체에 밀도 높게 레이어링됨."
        }
      },
      {
        "id": "distorted-mirror",
        "role": "defining",
        "name": {
          "en": "Distorted mirror surfaces",
          "ko": "사이버 트라이벌 및 와이어프레임 문양"
        },
        "facet": "surface",
        "description": {
          "en": "Chrome and glass planes are twisted into funhouse reflections — rippled, stretched, or fragmented rather than flat and pristine.",
          "ko": "뾰족한 트라이벌 타투 패턴과 하이테크 3D 와이어프레임 메시 오브젝트의 결합."
        }
      },
      {
        "id": "rave-subculture",
        "role": "defining",
        "name": {
          "en": "Rave and club subculture mood",
          "ko": "고대비 극적 변형 사진"
        },
        "facet": "imagery",
        "description": {
          "en": "The imagery belongs to warehouse parties and electronic music: dark, maximal, psychedelic, and anti-polish — not corporate or optimistic.",
          "ko": "솔라리제이션, 두오톤, 반전 효과가 적용된 초현실적 고대비 사진 요소."
        }
      },
      {
        "id": "maximal-layering",
        "role": "supporting",
        "name": {
          "en": "Maximal layered density",
          "ko": "차분한 정돈된 미니멀리즘 지양"
        },
        "facet": "layout",
        "description": {
          "en": "Type, grids, chrome shapes, and neon washes overlap in dense collages with little breathing room, creating a horror-vacui effect.",
          "ko": "정돈된 기업형 그리드와 여백은 애시드 그래픽 고유의 광란적 에너지를 파괴함."
        }
      },
      {
        "id": "bubblegum-optimism",
        "role": "avoid",
        "name": {
          "en": "Clean silver bubblegum optimism",
          "ko": "정돈된 Y2K 소비자 IT UI 지양"
        },
        "facet": "color",
        "description": {
          "en": "Bright electric-blue/silver/white palettes, clean chrome, and bubbly gel buttons signal Y2K — this style stays darker and more twisted.",
          "ko": "정돈된 젤 버튼과 깨끗한 서체는 애시드 그래픽의 왜곡된 레이브 감성과 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Acid Graphics because the chrome is twisted, the ground is black, and the mood is underground rave — toxic neon gradients, melting grids, and funhouse mirrors replace Y2K's silver bubblegum optimism.",
        "ko": "구별 이유: 90년대 레이브(Rave) 클럽 문화에 뿌리를 두고 액상으로 흘러내리는 3D 크롬 텍스트, 찌그러진 오가닉 왜곡 형태, 고채도 네온 마젠타-시안 팔레트, 복잡하고 광란적인 패널 구성으로 이루어졌으므로 애시드 그래픽에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Y2K Digital Aesthetic if the background lightened, the chrome straightened into clean mirror-metal, the palette shifted to electric blue/silver/white, and the tone turned optimistic and bubbly.",
        "ko": "변경 조건: 액상 크롬 왜곡과 레이브 파티 에너지가 정돈되어 깔끔한 2000년대 소비자 IT 기기 UI(젤 플라스틱 버튼, Eurostile 서체)로 정리되면 Y2K가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Acid Graphics. Defining signals: a near-black ground (#050505 or #0a0a0a) set against toxic neon gradients — acid green (#39ff14), hot magenta (#ff00a0), electric cyan (#00f0ff), and toxic yellow (#ccff00); metallic 3D lettering rendered with stacked text-shadows and a chrome gradient fill (`background-clip: text` with `#e0e0e0 → #8a8a8a → #ffffff → #707070 → #e0e0e0`); wireframe grids that bend, twist, or melt using CSS transforms, SVG filters, or perspective distortion; distorted mirror surfaces that warp reflections like funhouse glass; dense maximal layering where type, grids, and chrome shapes overlap. Keep the specific acid hues and grid density flexible. Use compressed grotesks such as `Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif` for display type; set chrome type with `-webkit-background-clip: text; color: transparent;` plus a dark drop-shadow for legibility. Avoid Y2K's clean silver bubblegum optimism — if the palette turns electric-blue/silver/white and the grids straighten, you've crossed into Y2K. Preserve contrast by keeping functional text off the neon gradients (place labels on solid black or dark grey #1a1a1a panels), provide visible focus states, and disable any liquid shimmer/warp animations under prefers-reduced-motion.",
      "ko": "애시드 그래픽(Acid Graphics / Rave) 스타일을 적용합니다. 정의 신호: 녹아내리는 액상 3D 크롬 서체, 일렉트릭 라임과 네온 마젠타의 환각적 팔레트, 리퀴파이 우그러진 벡터 형태, 90년대 레이브 포스터의 고밀도 레이어링, 사이버 트라이벌 문양입니다. 3D 크롬 그래픽에 대체 텍스트를 제공하고, 자극적인 펄스 및 회전 모션에 prefers-reduced-motion 대응을 적용하며 본문 가독성을 보장합니다."
    },
    "accessibility": {
      "en": "Acid Graphics loves maximum contrast in hue but minimum contrast in value: neon gradients on black can be dazzling yet the mid-tones within them often fail 4.5:1 for text. Keep readable labels on solid dark panels (#1a1a1a or #0f0f0f) rather than directly over neon gradients.\n\nLiquid distortion, warping grids, and shimmering chrome can trigger vestibular or photosensitive responses; respect prefers-reduced-motion by freezing or simplifying these animations, and keep any flashing or rapid cycling below the WCAG three-flashes-per-second threshold.\n\nMaximal layering and distorted letterforms hurt readability and cognitive parsing; reserve acid effects for headings, hero art, and decorative chrome, and keep body text in a plain sans-serif at a comfortable size with clear hierarchy.",
      "ko": "과도한 크롬 연사, 3D 글자 꼬임 및 진동 효과는 시각 피로를 유발하므로 모션 줄이기 옵션을 반드시 준수함.\n화려한 자경 배경 위에 본문 텍스트를 직접 올리지 말 것."
    },
    "a11yAndMisuse": {
      "en": "Acid Graphics loves maximum contrast in hue but minimum contrast in value: neon gradients on black can be dazzling yet the mid-tones within them often fail 4.5:1 for text. Keep readable labels on solid dark panels (#1a1a1a or #0f0f0f) rather than directly over neon gradients.\n\nLiquid distortion, warping grids, and shimmering chrome can trigger vestibular or photosensitive responses; respect prefers-reduced-motion by freezing or simplifying these animations, and keep any flashing or rapid cycling below the WCAG three-flashes-per-second threshold.\n\nMaximal layering and distorted letterforms hurt readability and cognitive parsing; reserve acid effects for headings, hero art, and decorative chrome, and keep body text in a plain sans-serif at a comfortable size with clear hierarchy.",
      "ko": "과도한 크롬 연사, 3D 글자 꼬임 및 진동 효과는 시각 피로를 유발하므로 모션 줄이기 옵션을 반드시 준수함.\n화려한 자경 배경 위에 본문 텍스트를 직접 올리지 말 것."
    },
    "origin": {
      "en": "Acid Graphics grew directly from the flyer art of the 1990s acid-house and rave scenes in the UK and Europe, where black backgrounds, day-glo colors, warped type, and sci-fi textures advertised illegal warehouse parties. In a 2019 Eye on Design survey, designer and art director Hugo Hoppmann cited David Rudnick as the touchstone of the contemporary acid-mania, and the Instagram account @acidgraphix — started by designer Luigi Brusciano in 2018 — became a key showcase for the revived style. The contemporary wave also includes designers such as Anja Kaiser and Jonathan Castro, and has spread through electronic-music cover art, club posters, streetwear branding, and experimental editorial.",
      "ko": "1990년대 영국 및 유럽의 언더그라운드 레이브 파티 클럽 문화 포스터에서 발전했습니다."
    },
    "meta": {}
  },
  {
    "slug": "risograph",
    "name": {
      "en": "Risograph",
      "ko": "리소그래프"
    },
    "tagline": {
      "en": "Risograph is the look of a Japanese stencil duplicator pushed into graphic art: layered spot colors — hot pink, cyan, sunflower yellow — printed slightly out of register, leaving halos and color moiré; a visible grain from soy-based inks; and edges that look cut from a stencil rather than rendered by a laser. It migrated from churches and schools in the 1980s into zines, posters, and indie publishing, where its accidents became the signature.",
      "ko": "리소그래프 인쇄 특유의 콩기름 잉크 텍스처, 미세한 입자 노이즈, 겹쳐진 인쇄 핀 어긋남이 만드는 레트로 아날로그 질감"
    },
    "scope": {
      "en": "Scope: This entry covers the visual style of Risograph prints as adapted to UI and graphic design. It is distinct from screen printing (which uses mesh and squeegee, not a digital stencil master) and from Memphis-style pattern collage — both are common neighbors.",
      "ko": "범위: 일본 리소(RISO) 인쇄기의 아날로그 오버프린트 미학을 디지털 UI에 재현한 스타일입니다."
    },
    "aliases": {
      "en": [
        "that grainy zine print with bright pink and blue shifted layers",
        "screen-printed look with color overlap and dots",
        "indie poster style with limited neon colors",
        "rough stencil print with visible texture",
        "duotone flyer where the colors don't quite line up",
        "soy ink print with misregistered edges",
        "risograph print grain misregistration",
        "duotone soy ink texture",
        "indie print design"
      ],
      "ko": [
        "리소그래프 인쇄 특유의 멀티 컬러 오버프린트",
        "콩기름 인쇄 질감과 미세한 정렬 오차(Misregistration)",
        "하프트랙망점 스펙트럼과 따뜻한 종이 노이즈",
        "독립 출판물 감성의 빈티지 리소 인쇄 UI",
        "형광 형광 핑크와 아쿠아 인크의 인쇄 스탬프",
        "리소그래프 인쇄 질감",
        "듀오톤 콩기름 잉크 번짐",
        "아날로그 스탬프 모아레"
      ]
    },
    "signals": [
      {
        "id": "spot-overprint",
        "role": "defining",
        "name": {
          "en": "Limited spot-color overprint",
          "ko": "인크 오버프린트(Overprint) 색상 중첩"
        },
        "facet": "color",
        "description": {
          "en": "Palette is built from separate opaque inks — hot pink #ff4da6, cyan #00b4d8, sunflower #ffd60a — layered so each new color physically prints on top of the last, producing new hues at overlaps.",
          "ko": "반투명 콩기름 인크가 중첩되어 교차 지점에서 제3의 색상이 자연스럽게 형성됨 (mix-blend-mode: multiply)."
        }
      },
      {
        "id": "misregistration",
        "role": "defining",
        "name": {
          "en": "Deliberate misregistration",
          "ko": "미세한 핀 어긋남 (Misregistration)"
        },
        "facet": "color",
        "description": {
          "en": "Color channels sit a few pixels off from one another (translate 1–3px), creating visible halos and moiré; perfect alignment reads as digital, not Riso.",
          "ko": "각 인크 레이어가 1~2px 미세하게 어긋나 기계 인쇄 특유의 수공예적 여백이 드러남."
        }
      },
      {
        "id": "grain-stipple",
        "role": "defining",
        "name": {
          "en": "Soy-ink grain and stipple",
          "ko": "형광 스팟 컬러(Fluorescent Ink) 팔레트"
        },
        "facet": "surface",
        "description": {
          "en": "Flat fills are broken by a fine, irregular dot grain — especially visible in darker inks — from the soy-oil based ink and stencil mesh; add it with a noise texture at ~15–25% opacity.",
          "ko": "리소 고유의 형광 핑크(#ff48b0), 아쿠아(#00a3e0), 해바라기 노랑(#ffb81c) 등 선명한 전용 인크 색상."
        }
      },
      {
        "id": "stencil-edges",
        "role": "defining",
        "name": {
          "en": "Rough stencil-cut edges",
          "ko": "비코팅지의 거친 종이 노이즈 질감"
        },
        "facet": "geometry",
        "description": {
          "en": "Shapes have slightly jagged or feathered outlines, as if cut from a wax stencil; crisp 1px vector edges look pre-press, not printed.",
          "ko": "비코팅 종이 본연의 입자 노이즈가 인크 레이어와 결합하여 따뜻한 아날로그 질감을 만듦."
        }
      },
      {
        "id": "duotone-tritone",
        "role": "defining",
        "name": {
          "en": "High-contrast duotone or tritone",
          "ko": "아날로그 하프트랙(Halftone) 망점"
        },
        "facet": "color",
        "description": {
          "en": "Compositions rely on two or three flat inks against off-white paper; the limitation is part of the look — more than four colors stops being Riso.",
          "ko": "명암 그래디언트가 부드러운 스무딩 대신 뚜렷한 도트 망점 스크린으로 표현됨."
        }
      },
      {
        "id": "newsprint-paper",
        "role": "supporting",
        "name": {
          "en": "Off-white porous paper",
          "ko": "스탬프 번짐 형태의 불완전한 가장자리"
        },
        "facet": "surface",
        "description": {
          "en": "Background reads as uncoated cream or newsprint (#f6f1e7 or #f4ecd8), soaking ink and letting grain show through.",
          "ko": "글자와 도형 가장자리에 인크가 가볍게 번지거나 뭉친 인쇄의 흔적이 남음."
        }
      },
      {
        "id": "bold-type",
        "role": "variable",
        "name": {
          "en": "Bold hand-set type",
          "ko": "매끈한 디지털 벡터 채우기 지양"
        },
        "facet": "typography",
        "description": {
          "en": "Headings often use chunky grotesks or hand-lettered forms; body stays plain because the texture does the talking.",
          "ko": "노이즈 없는 완벽한 디지털 벡터 채우기는 리소 인쇄 특유의 손맛을 파괴함."
        }
      },
      {
        "id": "cmyk-gradients",
        "role": "avoid",
        "name": {
          "en": "Smooth gradients or photorealism",
          "ko": "오려낸 종이 및 테이프 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Continuous blends, drop shadows, and full-color photos belong to offset/digital printing; they kill the stencil-print read.",
          "ko": "종이 조각과 마스킹 테이프 요소는 진 콜라주 영역이므로 리소 인쇄와 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "memphis",
      "name": "Memphis",
      "because": {
        "en": "This is Risograph because the style comes from printing artifacts: grainy ink texture, spot-color overprints shifted slightly out of register, and stencil-cut edges — not from toy geometry, squiggles, or allover pattern.",
        "ko": "구별 이유: 리소그래프 콩기름 인쇄 특유의 오버프린트(Overprint) 색상 혼합, 미세한 핀 어긋남(Misregistration), 질감 노이즈, 형광 특수 인크(Fluorescent Pink, Aqua)로 연출되었으므로 리소그래프에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Memphis if you replaced the ink grain and misregistration with flat squiggles, zigzags, dots, and triangles on a white ground, making pattern the subject instead of print texture.",
        "ko": "변경 조건: 인쇄 인크 질감이 사라지고 실제 오려낸 종이 조각, 마스킹 테이프, 찢어진 가장자리, 복사기 노이즈의 콜라주 형태로 바뀌면 진 콜라주(Zine Collage)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface in the spirit of Risograph (Riso) print. Defining signals: a limited palette of opaque spot inks — hot pink #ff4da6, cyan #00b4d8, sunflower #ffd60a, and black #1a1a1a — layered as separate passes so overlaps create new hues (pink over cyan makes violet, yellow over pink makes orange); deliberate misregistration of 1–3px between color passes to produce visible halos and color moiré; a fine irregular grain/stipple texture over every flat fill, simulating soy-based ink pushed through a stencil mesh at ~15–25% opacity; rough stencil-cut edges with slight feathering rather than crisp vector outlines; high-contrast duotone or tritone layouts against an off-white porous paper ground (#f6f1e7). Use chunky grotesk or hand-lettered headings, plain body text, and no gradients, shadows, or photorealism. Buttons and cards should feel like separate ink passes — flat color fields with the grain texture, 2px solid black outlines optional. Do not drift into Memphis; the decisive difference is that Risograph is print-texture-first (grain, misregistration, spot overprint) while Memphis is pattern-first (squiggles, zigzags, geometric confetti). Preserve text contrast: black ink on the spot colors usually passes; thin type over textured fills can fail, so keep labels large and on solid panels.",
      "ko": "리소그래프(Risograph) 인쇄 스타일을 적용합니다. 정의 신호: mix-blend-mode: multiply 기반 인크 오버프린트, 1~2px 미세한 핀 어긋남(Misregistration), 형광 핑크(#ff48b0)와 아쿠아(#00a3e0) 스팟 컬러, 비코팅 종이 입자 노이즈, 하프트랙 망점 스크린입니다. 인크 오버프린트 시 텍스트 명암비가 훼손되지 않도록 주의하고, 스크린 리더용 레이아웃 접근성을 준수합니다."
    },
    "accessibility": {
      "en": "Misregistration and grain are decorative, but they must not hide information: never set small body text directly over a grain texture without a solid backing panel; measure 4.5:1 for any text ink against its paper ground.\n\nThe limited spot palette can produce unpredictable combinations where two inks overlap; check the resulting mixed colors for contrast, especially yellow (#ffd60a) overlaid with black text.\n\nHeavy texture and high chroma increase visual fatigue; reserve dense grain for decorative zones, offer a reduced-texture mode under prefers-reduced-motion or a user toggle, and avoid rapid flashing or high-frequency dot patterns.",
      "ko": "리소그래프 특유의 오버프린트 및 질감 노이즈가 텍스트 에지를 뭉개지 않도록 가독성 유지.\n색상 편차에 따른 명암비 저하 방지."
    },
    "a11yAndMisuse": {
      "en": "Misregistration and grain are decorative, but they must not hide information: never set small body text directly over a grain texture without a solid backing panel; measure 4.5:1 for any text ink against its paper ground.\n\nThe limited spot palette can produce unpredictable combinations where two inks overlap; check the resulting mixed colors for contrast, especially yellow (#ffd60a) overlaid with black text.\n\nHeavy texture and high chroma increase visual fatigue; reserve dense grain for decorative zones, offer a reduced-texture mode under prefers-reduced-motion or a user toggle, and avoid rapid flashing or high-frequency dot patterns.",
      "ko": "리소그래프 특유의 오버프린트 및 질감 노이즈가 텍스트 에지를 뭉개지 않도록 가독성 유지.\n색상 편차에 따른 명암비 저하 방지."
    },
    "origin": {
      "en": "Riso Kagaku Corporation developed the Risograph in Japan in the early 1980s as a high-speed, low-cost stencil duplicator for schools, churches, and offices, using soy-based inks and a digital master wrapped around an ink drum. It remained an office tool through the 1990s, then was adopted by independent publishers, zine makers, and graphic artists in the 2000s–2010s who turned its registration drift, ink grain, and limited color passes into an intentional aesthetic.",
      "ko": "1980년대 일본 리소 가구라(RISO)의 공작용 디지털 스텐실 인쇄기 특유의 인쇄 결과물에서 비롯되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "zine-collage",
    "name": {
      "en": "Zine / Collage",
      "ko": "진 콜라주"
    },
    "tagline": {
      "en": "Zine / Collage treats the interface as a photocopied, hand-cut magazine spread: pieces of paper are torn or trimmed, layered at odd angles, and taped into place with masking tape; text alternates between handwriting, typewriter, and clipped headlines, all sitting on a grainy, high-contrast, DIY surface. It is not polished — the scissor slip, the tape wrinkle, and the over-copied halftone are the whole point. The look migrated from punk fanzines and Riot Grrrl photocopies into web portfolios and editorial sites looking for warmth outside the SaaS grid.",
      "ko": "잡지를 오려 붙인 듯한 오프라인 콜라주, 찢어진 종이 질감, 테이프 자국이 있는 수제 DIY 펑크 미학"
    },
    "scope": {
      "en": "Scope: This entry covers the visual language of cut-and-paste, self-published zines translated into UI. It overlaps with risograph printing and Memphis-style pattern energy, but zine collage is specifically paper-first: torn edges, tape, handwriting, and photocopier artifacts. Corporate illustration systems and clean mood boards are not zine collage.",
      "ko": "범위: 소규모 서브컬처 인디 잡지(Zine)의 손수 잘라 만든 오프라인 감성의 그래픽입니다."
    },
    "aliases": {
      "en": [
        "a website that looks like a photocopied fanzine",
        "ui with torn paper edges and masking tape",
        "cut-out magazine letters and handwritten labels",
        "that diy scrapbook collage style",
        "interface that looks like it was glued together by hand",
        "xerox grain and high-contrast zine aesthetic",
        "diy punk zine cutout collage",
        "photocopy texture torn paper",
        "underground magazine"
      ],
      "ko": [
        "독립 진(Zine) 및 오려붙인 서브컬처 콜라주",
        "찢어진 종이 질감과 마스킹 테이프 레이어",
        "복사기 하이콘트라스트 흑백 노이즈",
        "잡지 스크랩 텍스트와 스탬프 폰트",
        "DIY 아날로그 펑크 문화 잡지 감성",
        "진 콜라주 펑크 잡지",
        "복사기 흑백 질감과 찢어진 종이",
        "서브컬처 자작 잡지"
      ]
    },
    "signals": [
      {
        "id": "torn-paper-edges",
        "role": "defining",
        "name": {
          "en": "Torn or irregular paper edges",
          "ko": "찢어지고 오려낸 종이 테두리"
        },
        "facet": "geometry",
        "description": {
          "en": "Surfaces are not clean vector rectangles; edges look torn, scissor-cut, deckled, or clipped from another page, often exposed as a 1–2px ragged silhouette.",
          "ko": "손으로 찢어낸 듯한 불규칙한 종이 단면 테두리(clip-path / 마스크 질감)."
        }
      },
      {
        "id": "masking-tape-hinges",
        "role": "defining",
        "name": {
          "en": "Visible masking tape hinges",
          "ko": "마스킹 테이프와 스테이플러 심 장식"
        },
        "facet": "surface",
        "description": {
          "en": "Strips of translucent tape — usually beige or washi yellow — hold pieces down at corners or seams; they are rotated a few degrees and often overlap the layer beneath.",
          "ko": "반투명 마스킹 테이프, 클립, 스테이플러 심 등 종이를 고정하는 아날로그 오브제."
        }
      },
      {
        "id": "photocopy-grain",
        "role": "defining",
        "name": {
          "en": "Photocopied halftone grain",
          "ko": "복사기(Xerox) 노이즈 및 고대비 흑백"
        },
        "facet": "surface",
        "description": {
          "en": "High-contrast black-only or limited-spot images show dot halftone, xerox streaks, and paper fiber texture; gradients are replaced by grainy black dots.",
          "ko": "복사기로 여러 번 복사한 듯한 거친 흑백 고대비 질감과 먼지 노이즈."
        }
      },
      {
        "id": "hand-mixed-typography",
        "role": "defining",
        "name": {
          "en": "Handwriting meets typewriter meets clipped type",
          "ko": "잡지 스크랩(Ransom-note) 타이포그래피"
        },
        "facet": "typography",
        "description": {
          "en": "Labels appear in marker handwriting, monospaced typewriter, or all-caps cutout letters — never one slick font family carrying the whole page.",
          "ko": "각기 다른 잡지와 신문에서 잘라낸 글자 조각들을 조합한 레터링."
        }
      },
      {
        "id": "layered-cutouts",
        "role": "defining",
        "name": {
          "en": "Layered cutouts with paper shadows",
          "ko": "수공예적 종이 중첩 입체감"
        },
        "facet": "depth",
        "description": {
          "en": "Pieces overlap at slight rotations (-3° to +4°), each casting a soft, low offset shadow that reads as physical paper thickness rather than elevation.",
          "ko": "종이 조각들이 겹쳐지며 만드는 짧고 또렷한 수공예 드롭 섀도우."
        }
      },
      {
        "id": "diy-imperfection",
        "role": "defining",
        "name": {
          "en": "DIY imperfection as ornament",
          "ko": "두오톤 및 DIY 단색 인크 채우기"
        },
        "facet": "layout",
        "description": {
          "en": "Misalignment, wobbly hand-drawn rules, glue smears, and visible scissor slips are retained on purpose; symmetry and pixel precision signal something else.",
          "ko": "신문지 바탕 위 단순한 흑백, 시안, 마젠타 두오톤(Duotone) 사진 스크랩."
        }
      },
      {
        "id": "limited-spot-palette",
        "role": "supporting",
        "name": {
          "en": "Limited spot-color palette",
          "ko": "매끈한 정돈된 벡터 지양"
        },
        "facet": "color",
        "description": {
          "en": "Black ink plus one or two flat accent colors — hot pink, mustard, cyan — on off-white newsprint; the palette mimics cheap riso or xerox duplication.",
          "ko": "매끈한 그래디언트와 정돈된 카드 레이아웃은 DIY 펑크 진 감성을 무너뜨림."
        }
      },
      {
        "id": "paper-source-material",
        "role": "variable",
        "name": {
          "en": "Source material on paper",
          "ko": "리소그래프 인크 오버프린트 지양"
        },
        "facet": "imagery",
        "description": {
          "en": "Magazine photos, ticket stubs, receipts, stamps, and doodles can decorate the surface; what matters is that each piece reads as found and pasted.",
          "ko": "종이 스크랩이나 테이프 없이 형광 인크 중첩만 있는 경우 리소그래프 영역임."
        }
      },
      {
        "id": "digital-glass",
        "role": "avoid",
        "name": {
          "en": "Digital glass or blur",
          "ko": "반투명 글래스 및 유광 하이라이트 지양"
        },
        "facet": "surface",
        "description": {
          "en": "backdrop-filter blur, translucent panels, and lens-like gloss dissolve the paper-and-tape materiality — that look is glassmorphism or Liquid Glass, not zine.",
          "ko": "backdrop-filter 블러, 반투명 패널, 유광 하이라이트는 진 콜라주 특유의 아날로그 종이 및 테이프 감성을 해치므로 지양함."
        }
      }
    ],
    "confusedWith": {
      "slug": "anti-design",
      "name": "Anti-design",
      "because": {
        "en": "This is Zine / Collage because the artifacts are physical paper things — torn edges, masking tape, photocopier grain, handwriting, and layered cutouts. The imperfection comes from scissors and glue, not from digital conflict.",
        "ko": "구별 이유: 손으로 오려낸 종이 조각, 마스킹 테이프, 찢어진 가장자리, 잡지 텍스트 스크랩, 저해상도 복사기 거친 노이즈의 DIY 진(Zine) 콜라주 형태로 구성되었으므로 진 콜라주에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Anti-design if the paper, tape, and grain vanished and were replaced by digital chaos — clashing neon gradients, broken grids, overlapping glitchy type, and deliberate usability hostility with no DIY materiality left.",
        "ko": "변경 조건: 아날로그 종이 조각과 테이프 질감이 사라지고 오직 디지털 벡터 충돌, 레이아웃 파괴, 뒤바뀐 UI 컨트롤만 남게 되면 안티디자인(Anti-Design)이 됨."
      }
    },
    "brief": {
      "en": "Create the interface as a Zine / Collage (zine-collage). Defining signals: every card or panel should read as torn or scissor-cut paper, not a vector rectangle — use irregular clip-path polygons or jagged border-radius and expose a 1–2px dark silhouette; attach pieces with visible masking tape hinges (#e8d78b at ~78% opacity, 40–50px wide, rotated -12° to +10°) overlapping corners; apply photocopied halftone grain to images and surfaces using a radial dot pattern (#1a1a1a dots on #f4f1ea paper), then boost contrast and grayscale; mix typography so headings use a handwritten marker family ('Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive), metadata uses a monospaced typewriter ('Courier New', 'Courier Prime', monospace), and accents look like clipped magazine all-caps. Layer pieces at slight rotations (-3° to +4°) with soft paper shadows (2px 3px 0 rgba(26,26,26,.15) or 0 2px 5px rgba(0,0,0,.18)), and keep deliberate DIY imperfection — wobbly rules, misalignment, and scissor marks. Palette: black #1a1a1a on off-white #f4f1ea newsprint, plus one or two flat spot accents such as hot pink #ff4f87 or mustard #f2c94c. Avoid digital glass, backdrop blur, gradients, and clean centered symmetry; those kill the paper materiality. Keep body text at least 14px and on solid paper fills so the rough edges do not sacrifice readability.",
      "ko": "진 콜라주(Zine Collage / DIY Punk) 스타일을 적용합니다. 정의 신호: 손으로 찢어낸 불규칙한 종이 테두리, 마스킹 테이프 및 스테이플러 아날로그 오브제, 복사기(Xerox) 고대비 흑백 노이즈, 잡지 스크랩 글자 조합(Ransom-note), 수공예 종이 중첩 드롭 섀도우입니다. 종이 스크랩 및 테이프 이미지에 aria-hidden='true'를 지정하여 스크린 리더 소음을 방지하고, 본문 텍스트는 정갈하고 읽기 쉬운 서체로 가독성(4.5:1)을 확보합니다."
    },
    "accessibility": {
      "en": "Handwriting and torn edges are decorative, but they become risky when used for body text or labels. Keep paragraph text in a clean typewriter or sans-serif at 14px or larger, and reserve marker handwriting for short headings or tags that do not need to be read at speed.\n\nHigh-contrast photocopy and busy collage backgrounds can wreck text contrast. Place readable text on solid paper fills (#f4f1ea or a flat accent block) and check that black ink on those fills passes 4.5:1; never float small text directly over halftone imagery.\n\nOverlapping cutouts and decorative tape must not hide interactive elements or trap focus. Make controls reachable by keyboard, show a clear focus indicator (a thick dashed marker outline works well), and honor prefers-reduced-motion by turning off rotation/shake transitions.",
      "ko": "손글씨 폰트 및 잘라낸 종이 질감 레이어링 시 본문 텍스트는 읽기 쉬운 정갈한 폰트로 제공함.\n찢어진 종이 조각 이미지는 장식용 요소로 aria-hidden 처리."
    },
    "a11yAndMisuse": {
      "en": "Handwriting and torn edges are decorative, but they become risky when used for body text or labels. Keep paragraph text in a clean typewriter or sans-serif at 14px or larger, and reserve marker handwriting for short headings or tags that do not need to be read at speed.\n\nHigh-contrast photocopy and busy collage backgrounds can wreck text contrast. Place readable text on solid paper fills (#f4f1ea or a flat accent block) and check that black ink on those fills passes 4.5:1; never float small text directly over halftone imagery.\n\nOverlapping cutouts and decorative tape must not hide interactive elements or trap focus. Make controls reachable by keyboard, show a clear focus indicator (a thick dashed marker outline works well), and honor prefers-reduced-motion by turning off rotation/shake transitions.",
      "ko": "손글씨 폰트 및 잘라낸 종이 질감 레이어링 시 본문 텍스트는 읽기 쉬운 정갈한 폰트로 제공함.\n찢어진 종이 조각 이미지는 장식용 요소로 aria-hidden 처리."
    },
    "origin": {
      "en": "Modern zines descend from 1930s science-fiction fanzines; the word 'fanzine' was coined by fan Louis Russel Chauvenet around 1940. The cut-and-paste visual identity took shape in the 1970s UK punk scene with photocopied zines like Sniffin' Glue (1976), then spread through the network zine directory Factsheet Five, launched by Mike Gunderloy in 1982. The 1990s Riot Grrrl movement — including the Bikini Kill zine — pushed the DIY collage aesthetic into feminist punk publishing. As a named UI look, Zine / Collage surfaced in the 2020s as a reaction to the sameness of polished SaaS grids, with designers borrowing torn paper, tape, halftone, and handwriting to make screens feel physically assembled.",
      "ko": "1970년대 펑크 서브컬처의 자작 소책자(Fanzine) 제작 방식에서 유래되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "steampunk",
    "name": {
      "en": "Steampunk",
      "ko": "스팀펑크"
    },
    "tagline": {
      "en": "Steampunk dresses the interface in the brass, leather and rivets of a Victorian machine room that never was: warm sepia grounds, burnished copper and bronze, gear-edged frames, engraved serif lettering, pressure-gauge meters and visible mechanical fasteners. It is retro-futurism from the age of steam — the screen pretending to be a 19th-century astrolabe, pocket watch or steamship console rather than a digital surface.",
      "ko": "19세기 증기기관 시대의 톱니바퀴, 황동(Brass) 파이프, 게이지 판넬이 어우러진 빅토리아 시대 레트로 SF"
    },
    "scope": {
      "en": "Scope: This entry covers the Victorian/Industrial-Revolution retro-futurist visual style as applied to UI. It does not cover the 1920s–40s streamlined machine aesthetic (Dieselpunk) or the geometric luxury of Art Deco, both of which sit in different centuries and moods.",
      "ko": "범위: 19세기 산업혁명기 기술력을 바탕으로 한 아날로그 기계식 레트로 퓨처리즘을 다룹니다."
    },
    "aliases": {
      "en": [
        "websites that look like brass pocket watches and steam engines",
        "victorian sci-fi interface with gears and pressure gauges",
        "brown leather and copper pipes ui",
        "riveted metal panels with cogwheel borders",
        "the old-timey retro-futuristic machine aesthetic",
        "sepia dashboard that looks like a 19th-century invention",
        "19th century steam engine brass gears",
        "victorian industrial bronze clockwork",
        "retro futuristic steam"
      ],
      "ko": [
        "19세기 산업혁명 황동 톱니바퀴 스팀펑크",
        "증기기관 게이지, 가죽 패널, 구리 파이프 UI",
        "빅토리아 시대 기계식 아날로그 나침반",
        "리벳과 황동 프레임의 레트로 메카닉",
        "증기 압력계와 타자기 키보드 감성",
        "스팀펑크 증기기관 황동 톱니바퀴",
        "빅토리아 시대 태엽 시계 장치",
        "19세기 기술 미래주의"
      ]
    },
    "signals": [
      {
        "id": "brass-copper-palette",
        "role": "defining",
        "name": {
          "en": "Brass, copper and sepia palette",
          "ko": "황동(Brass) 및 산화 구리 금속 재질"
        },
        "facet": "color",
        "description": {
          "en": "The dominant reads are warm metal — brass #d4a35b, burnished copper #b87333, dark bronze #6e4c2e — against sepia parchment #e6dcc8 or chocolate leather #4a3425, never cool chrome or neon.",
          "ko": "반짝이는 황동(#d4af37), 고풍스러운 청동, 산화된 구리 프레임과 기계 관 구조."
        }
      },
      {
        "id": "gear-mechanical-frames",
        "role": "defining",
        "name": {
          "en": "Gear and mechanical frames",
          "ko": "물려 돌아가는 톱니바퀴와 태엽 기믹"
        },
        "facet": "geometry",
        "description": {
          "en": "Panels sit inside cogwheel borders, riveted straps, or stepped brass bezels; the frame itself advertises the machine rather than hiding it.",
          "ko": "정교한 황동 톱니바퀴, 태엽, 스프링 기믹이 테두리와 버튼 주위에 배치됨."
        }
      },
      {
        "id": "victorian-serif",
        "role": "defining",
        "name": {
          "en": "Victorian engraved serif",
          "ko": "증기 압력계 및 아날로그 다이얼"
        },
        "facet": "typography",
        "description": {
          "en": "Headings and labels use high-contrast serifs (Georgia, Times New Roman, or similar), often small-caps, with letter-spacing around 0.04em and a faint highlight to suggest engraved metal or letterpress.",
          "ko": "유리 덮개와 황동 바늘, 양피지 눈금판이 있는 아날로그 증기 압력계 인디케이터."
        }
      },
      {
        "id": "riveted-fasteners",
        "role": "defining",
        "name": {
          "en": "Riveted fasteners",
          "ko": "음각 가죽 패널과 무쇠 리벳"
        },
        "facet": "surface",
        "description": {
          "en": "Buttons and plates are studded with small circular rivets or screws at the corners; the fastener is treated as ornament, not a bug.",
          "ko": "짙은 갈색 가죽 질감 패널과 모서리를 고정하는 금속 리벳 브래킷."
        }
      },
      {
        "id": "pressure-gauges",
        "role": "defining",
        "name": {
          "en": "Steam-pressure gauges",
          "ko": "빅토리아 장식 서체 및 타자기 폰트"
        },
        "facet": "imagery",
        "description": {
          "en": "Progress bars, dials and readouts are styled as analog gauges — horizontal tubes with brass casings, tick marks and a copper needle or fill.",
          "ko": "화려한 19세기 빅토리아 장식 세리프 서체와 아날로그 타자기(Typewriter) 폰트."
        }
      },
      {
        "id": "leather-wood-panels",
        "role": "supporting",
        "name": {
          "en": "Leather and dark wood panels",
          "ko": "노출된 증기 파이프 및 밸브"
        },
        "facet": "surface",
        "description": {
          "en": "Large surfaces read as tooled leather, dark walnut or tarnished metal plate, usually with an inset shadow to suggest depth and wear.",
          "ko": "구리 파이프와 증기 배출 밸브가 레이아웃 섹션 및 카드 외곽을 감쌈."
        }
      },
      {
        "id": "sepia-grading",
        "role": "supporting",
        "name": {
          "en": "Sepia warmth and tarnish",
          "ko": "매끈한 모던 크롬 및 미니멀 글래스 지양"
        },
        "facet": "color",
        "description": {
          "en": "Everything is warmed by a sepia overlay or vignette; bright white and pure grey look out of place unless they read as porcelain enamel.",
          "ko": "차가운 모던 크롬이나 미니멀 글래스모피즘은 스팀펑크의 아날로그 증기기관 영혼을 무너뜨림."
        }
      },
      {
        "id": "geometric-luxury-symmetry",
        "role": "avoid",
        "name": {
          "en": "Geometric luxury symmetry",
          "ko": "1940년대 묵직한 강철 장갑 지양"
        },
        "facet": "geometry",
        "description": {
          "en": "Mirror symmetry, gold sunbursts and lacquer-black glamour are Art Deco; Steampunk is asymmetrical, patched-together machinery.",
          "ko": "투박한 무쇠 강철판과 디젤 엔진 미학은 디젤펑크 영역이므로 황동 스팀펑크와 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "art-deco",
      "name": "Art Deco",
      "because": {
        "en": "This is Steampunk because the materials are industrial-Victorian: burnished brass, copper, riveted leather and visible gears — asymmetrical, mechanical, and sepia-warm rather than gilded-luxury.",
        "ko": "구별 이유: 19세기 빅토리아 시대 증기기관 메카닉 — 황동(Brass), 구리 파이프, 복잡한 톱니바퀴, 압력 게이지, 가죽 재질, 리벳 프레임으로 구성되었으므로 스팀펑크에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Art Deco if the brass machinery were replaced by mirror symmetry, gold sunburst linework, black lacquer, and jewel-tone luxury ornament — geometry for glamour, not for engineering.",
        "ko": "변경 조건: 황동 톱니바퀴와 빅토리아 장식이 1940년대 디젤 엔진, 강철 장갑판, 군용 국방색 군사 기계 미학으로 바뀌면 디젤펑크(Dieselpunk)가 됨."
      }
    },
    "brief": {
      "en": "Create the interface as a Victorian machine-room console. Start with a warm sepia ground (#f5efe4 or #e6dcc8) and dark leather panels (#4a3425). Primary metals: brass #d4a35b, burnished copper #b87333, dark bronze #6e4c2e; add tarnish with linear-gradient(180deg, #e8c887, #b8864b 55%, #7a5428). Surfaces need inset highlights (box-shadow: inset 0 1px 0 rgba(255,255,255,.2), inset 0 -2px 0 rgba(0,0,0,.25)) and a 2px solid #5c4028 outer frame. Frames should read as brass gear borders — use an inline SVG border-image or repeating cog motif in #a67c3b. Typography: Victorian/Edwardian high-contrast serif (Georgia, 'Times New Roman', serif) for headings; letter-spacing 0.04em; small-caps labels in #3e2b1f. Buttons are riveted metal discs: 40–44px circles with radial-gradient brass, border 2px #6e4c2e, inset box-shadow 0 1px 1px rgba(255,255,255,.5), and four corner rivets. Progress bars become pressure gauges: a 10–12px channel inside a rounded brass casing (border 2px #b8864b, background #2a1d14), filled with copper gradient #d47f39 to #9e5b25 and overlaid with faint tick marks every 10%. Avoid Art Deco symmetry, chrome streamline, flat vector minimalism, neon, or screen-default sans-serif. Preserve contrast: dark #2e2119 text on sepia grounds and light labels on dark metal; keep focus rings as visible brass outlines.",
      "ko": "스팀펑크(Steampunk) 스타일을 적용합니다. 정의 신호: 황동(#d4af37) 및 구리 금속 재질, 물려 돌아가는 톱니바퀴와 태엽, 증기 압력계 다이얼, 음각 가죽 패널과 무쇠 리벳, 빅토리아 장식 서체 및 타자기 폰트입니다. 압력계 및 톱니바퀴 장식에 aria-hidden='true'를 지정하고 가죽/양피지 질감 배경 위 텍스트 명암비(4.5:1)를 철저히 검증합니다."
    },
    "accessibility": {
      "en": "Sepia and brass palettes can hide contrast problems: dark #2e2119 text on #f5efe4 passes WCAG AAA, but light labels on copper or brass often fail — either darken the label or add a solid backing strip behind small text.\n\nVictorian serifs and small-caps ornament look period-correct but hurt readability at small sizes; keep body text at 16px minimum, avoid blackletter or ultra-condensed display faces, and use the decorative serif for headings only.\n\nAny rotating gears, hissing steam, or ticking animations can trigger vestibular issues; honor prefers-reduced-motion by pausing rotation and removing parallax, and make sure all rivet buttons still have a visible focus state and a 44×44 CSS hit area.",
      "ko": "황동 톱니바퀴 및 게이지 장식이 실제 작업 버튼과 혼동되지 않도록 어포던스 구분.\n복잡한 질감 배경 위 텍스트 명암비 4.5:1 확보."
    },
    "a11yAndMisuse": {
      "en": "Sepia and brass palettes can hide contrast problems: dark #2e2119 text on #f5efe4 passes WCAG AAA, but light labels on copper or brass often fail — either darken the label or add a solid backing strip behind small text.\n\nVictorian serifs and small-caps ornament look period-correct but hurt readability at small sizes; keep body text at 16px minimum, avoid blackletter or ultra-condensed display faces, and use the decorative serif for headings only.\n\nAny rotating gears, hissing steam, or ticking animations can trigger vestibular issues; honor prefers-reduced-motion by pausing rotation and removing parallax, and make sure all rivet buttons still have a visible focus state and a 44×44 CSS hit area.",
      "ko": "황동 톱니바퀴 및 게이지 장식이 실제 작업 버튼과 혼동되지 않도록 어포던스 구분.\n복잡한 질감 배경 위 텍스트 명암비 4.5:1 확보."
    },
    "origin": {
      "en": "The term was coined by science-fiction author K. W. Jeter in a 1987 letter to Locus magazine, where he jokingly proposed 'steampunk' as a label for the Victorian-set fiction he, Tim Powers and James Blaylock were writing — work that borrowed the speculative machinery of H. G. Wells and Jules Verne. The visual vocabulary grew from 19th-century industrial hardware — riveted boilers, brass instrumentation, pocket watches and leather-strapped aviator gear — and entered Web and game UI through retro-futurist projects such as Arcanum: Of Steamworks and Magick Obscura (2001).",
      "ko": "1980년대 쥘 베른과 H.G. 웰스의 소설 기풍을 계승한 SF 문학 및 아트 사조입니다."
    },
    "meta": {}
  },
  {
    "slug": "dieselpunk",
    "name": {
      "en": "Dieselpunk",
      "ko": "디젤펑크"
    },
    "tagline": {
      "en": "Dieselpunk is the visual language of 1920s–1940s industrial war machines rendered as UI: riveted gunmetal panels, aviation gauges, oxidized copper and olive drab, oil stains, and stenciled lettering. Where steampunk dreams of brass gentlemen and clockwork wonder, dieselpunk wakes up in a sooty hangar full of propellers, diesel exhaust, and Art Deco machinery. It is darker, heavier, and more militaristic — the aesthetic of function pushed to the edge of romance.",
      "ko": "1920~50년대 디젤 엔진, 아르데코 기계미, 강철 장갑과 미드센추리 레트로 기술 감성"
    },
    "scope": {
      "en": "Scope: This entry covers the dieselpunk graphic/UI style. The narrative genre and cosplay scene overlap, but the signals below are about pixels: metal, rivets, gauges, and wartime palette. Decopunk and raygun-gothic share the era but lean more glamorous or atomic-fantastic; this entry stays on the grimy military-industrial side.",
      "ko": "범위: 양차 세계대전 및 디젤 기관차, 아르데코 미학이 결합된 차가운 중공업 인더스트리얼 스타일입니다."
    },
    "aliases": {
      "en": [
        "ui that looks like the inside of a ww2 bomber cockpit",
        "dark riveted metal panels with old flight gauges",
        "olive green and copper steampunk but grittier",
        "industrial art deco machinery interface",
        "1920s military diesel engine aesthetic",
        "weathered metal with stenciled labels",
        "1940s ww2 heavy diesel machinery",
        "art deco industrial steel chrome",
        "mid century diesel power"
      ],
      "ko": [
        "1920-1940년대 디젤 엔진 산업 디젤펑크",
        "묵직한 강철 장갑판, 리벳 메탈, 아르데코 기계",
        "군용 국방색과 디젤 그을음 공장 UI",
        "아날로그 라디오 무전기 콘솔 화면",
        "2차 세계대전 산업 군사 미학",
        "디젤펑크 1940년대 중공업 강철",
        "2차 세계대전 디젤 엔진 디오라마",
        "묵직한 아르데코 기계"
      ]
    },
    "signals": [
      {
        "id": "gunmetal-palette",
        "role": "defining",
        "name": {
          "en": "Gunmetal and olive-drab palette",
          "ko": "리벳 강철 장갑판 패널"
        },
        "facet": "color",
        "description": {
          "en": "Base surfaces sit in dark, desaturated metallics (#2a2b28, #3c3d39) and military olive (#4b5320, #575c3f), accented by oxidized copper (#8c6239), dull brass (#b87333), and soot black (#0f0f0d).",
          "ko": "투박한 대형 산업용 리벳으로 고정된 묵직한 냉간 압연 강철판(#4a525d) 패널."
        }
      },
      {
        "id": "riveted-panels",
        "role": "defining",
        "name": {
          "en": "Riveted sheet-metal panels",
          "ko": "군용 올리브 국방색 및 디젤 그을음 팔레트"
        },
        "facet": "surface",
        "description": {
          "en": "Backgrounds and cards read as overlapping plates of steel or aluminum, joined by rows of visible rivets rendered as small circular bumps or dots along panel edges.",
          "ko": "군용 올리브 국방색(#4b5320), 건메탈 회색, 녹슨 오렌지, 기름 그을음 팔레트."
        }
      },
      {
        "id": "aviation-gauges",
        "role": "defining",
        "name": {
          "en": "Aviation and engine gauges",
          "ko": "아날로그 무전기 및 레이더 스코프 인디케이터"
        },
        "facet": "imagery",
        "description": {
          "en": "Circular dials, needles, segmented readouts, and stenciled numerals mimic interwar aircraft instruments and factory meters; progress bars often become half-moon gauges or linear manometers.",
          "ko": "은은한 백라이트 무전기 주파수 다이얼, 녹색 레이더 스코프, 무직한 토글 스위치."
        }
      },
      {
        "id": "distressed-wear",
        "role": "defining",
        "name": {
          "en": "Distressed wear and grime",
          "ko": "아르데코풍 강인한 기계 기하학"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces carry scratches, oil streaks, rust blooms, and uneven patina — never pristine. Edges are chamfered by use rather than by clean vector rounding.",
          "ko": "1930년대 유선형 기관차 및 포복격기에서 영감을 받은 아르데코 기계 선형 구조."
        }
      },
      {
        "id": "stencil-typography",
        "role": "defining",
        "name": {
          "en": "Stencil and block industrial type",
          "ko": "묵직한 군용 스텐실 및 고딕 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Labels use stencil, compressed sans-serif, or military slab faces, often set in all caps with wide tracking; body text stays small and utilitarian.",
          "ko": "묵직하고 응축된 군용 스텐실 번호, 각진 고딕 서체, 단조 금속 스탬프 라벨."
        }
      },
      {
        "id": "deco-mechanics",
        "role": "supporting",
        "name": {
          "en": "Art Deco-mechanical geometry",
          "ko": "디젤 그을음 및 기계 기름 질감"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms combine stepped ziggurat profiles, radiused machine housings, and symmetrical arrays of bolts and vents — structure follows manufacturing, not whimsy.",
          "ko": "패널 가장자리와 버튼 주변에 묻은 디젤 그을음, 기름때, 녹슨 풍화 질감."
        }
      },
      {
        "id": "wire-mesh-vents",
        "role": "supporting",
        "name": {
          "en": "Wire mesh, vents, and portholes",
          "ko": "빅토리아 황동 레이스 장식 지양"
        },
        "facet": "imagery",
        "description": {
          "en": "Details like perforated grilles, louvers, round porthole windows, and rubber gaskets reinforce the sense of sealed machinery and pressurized cabins.",
          "ko": "섬세한 빅토리아 황동 장식과 태엽은 스팀펑크 영역이므로 디젤의 묵직한 강철과 구별됨."
        }
      },
      {
        "id": "clockwork-filigree",
        "role": "avoid",
        "name": {
          "en": "Victorian clockwork and filigree",
          "ko": "하이테크 사이버 네온 발광 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Exposed gears, cogs, scrollwork, velvet, and gentleman-inventor props steer the look toward Steampunk; dieselpunk hides its mechanics behind armored plate.",
          "ko": "디지털 네온 발광은 1940년대 아날로그 디젤 시대관을 무너뜨리므로 배제함."
        }
      }
    ],
    "confusedWith": {
      "slug": "steampunk",
      "name": "Steampunk",
      "because": {
        "en": "This is Dieselpunk because the palette is dark, oil-stained, and military — gunmetal, olive drab, oxidized copper — and the surfaces are riveted steel or aluminum rather than polished brass, Victorian wood, and leather filigree.",
        "ko": "구별 이유: 1920~1940년대 디젤 엔진 기계 시대 — 묵직한 강철 장갑판, 투박한 리벳 메탈, 군용 국방색(#4b5320), 디젤 그을음, 아날로그 무전기 게이지로 연출되었으므로 디젤펑크에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Steampunk if the metal turned to gleaming brass and copper, visible clockwork and pipes replaced riveted sheet metal, top hats and leather straps appeared, and the palette lifted toward sepia, cream, and burgundy.",
        "ko": "변경 조건: 묵직한 강철 장갑과 디젤 엔진이 19세기 빅토리아 황동 장식, 증기 압력계, 톱니바퀴 태엽으로 바뀌면 스팀펑크(Steampunk)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface in the spirit of Dieselpunk. Defining signals: a dark gunmetal and olive-drab base (#2a2b28, #4b5320, #575c3f) with oxidized copper (#8c6239) and dull brass (#b87333) accents; backgrounds built as overlapping riveted sheet-metal panels — use radial-gradient rivets (~3–4px dots) along panel seams; aviation and engine gauges rendered as circular dials or half-moon meters with needles and stenciled numerals; surfaces distressed with scratches, oil streaks, and rust via layered noise gradients or texture overlays; stencil, compressed sans, or military slab type in all caps with wide letter-spacing. Keep radii small (2–4px) or chamfered; avoid Victorian filigree, exposed gears, polished brass, and sepia palettes. Use directional inset highlights to read as beveled metal, and heavy shadows (0 8px 24px rgba(0,0,0,.6)) to sink panels into a dark hangar-like space. Provide visible focus outlines (#b87333 2px) and respect reduced-motion for gauge needles.",
      "ko": "디젤펑크(Dieselpunk) 스타일을 적용합니다. 정의 신호: 투박한 대형 리벳 강철 장갑판 패널, 군용 올리브 국방색(#4b5320)과 건메탈 그을음 팔레트, 백라이트 무전기 다이얼과 레이더 스코프, 1930년대 아르데코 유선형 기계 선형, 묵직한 군용 스텐실 서체입니다. 레이더 및 스코프 모션에 prefers-reduced-motion 대응을 적용하고 어두운 강철 바탕 위 텍스트 명암비를 4.5:1 이상 준수합니다."
    },
    "accessibility": {
      "en": "The default palette is intentionally low-contrast: gunmetal text on darker metal or olive panels can fall below 4.5:1. Reserve high-contrast copper/brass (#b87333, #f4c97f) for functional text and keep decorative grime away from readable labels.\n\nGauge needles, sweeping dials, and flickering readouts are decorative motion that can trigger vestibular issues. Honor prefers-reduced-motion by freezing needle animations and removing any flicker faster than 3 Hz.\n\nStencil and ultra-compressed type can hurt legibility at small sizes; use stencil faces only for labels ≥ 12px and keep body text in a plain sans-serif with normal tracking.",
      "ko": "어두운 금속 질감과 디젤 그을음 배경 위의 글씨는 높은 명암비의 인쇄체 폰트로 강조함.\n강렬한 군사/산업 인디케이터에 키보드 포커스 명확히 적용."
    },
    "a11yAndMisuse": {
      "en": "The default palette is intentionally low-contrast: gunmetal text on darker metal or olive panels can fall below 4.5:1. Reserve high-contrast copper/brass (#b87333, #f4c97f) for functional text and keep decorative grime away from readable labels.\n\nGauge needles, sweeping dials, and flickering readouts are decorative motion that can trigger vestibular issues. Honor prefers-reduced-motion by freezing needle animations and removing any flicker faster than 3 Hz.\n\nStencil and ultra-compressed type can hurt legibility at small sizes; use stencil faces only for labels ≥ 12px and keep body text in a plain sans-serif with normal tracking.",
      "ko": "어두운 금속 질감과 디젤 그을음 배경 위의 글씨는 높은 명암비의 인쇄체 폰트로 강조함.\n강렬한 군사/산업 인디케이터에 키보드 포커스 명확히 적용."
    },
    "origin": {
      "en": "The term 'dieselpunk' was coined in 2001 by game designer Lewis Pollak to market his tabletop RPG Children of the Sun, which he described as the darker, dirtier side of steampunk. Its visual roots are the real industrial and military design of the interwar period through World War II — riveted aircraft fuselages, tank armor, factory gauge panels, and diesel engines — filtered through Art Deco and Streamline Moderne geometry. Since the 2000s it has spread through games, film, and illustration as a distinct retro-futuristic look.",
      "ko": "2000년대 초반 1920~1950년대 기술과 문화를 기반으로 정의된 레트로 퓨처리즘 사조입니다."
    },
    "meta": {}
  },
  {
    "slug": "biopunk",
    "name": {
      "en": "Biopunk",
      "ko": "바이오펑크"
    },
    "tagline": {
      "en": "Biopunk drags cyberpunk out of the chrome-and-neon city and into the wet lab: interfaces look grown rather than machined — viscous gels, semi-translucent membranes, throbbing vascular progress bars, and sterile medical readouts tinted in sickly greens, bruised pinks, and cold laboratory whites. It is the visual language of gene editing, biohacked implants, and cultures bubbling in petri dishes. Where cyberpunk asks 'what if the network owns you', biopunk asks 'what if your own cells do'.",
      "ko": "생물학적 현미경 조직, 유기체 세포 맥락, 생체 발광과 DNA 구성을 모티프로 한 바이오 SF 미학"
    },
    "scope": {
      "en": "Scope: This entry covers the visual and interface language of biopunk — organic surfaces, lab-equipment geometry, bio-data visualization, and medical UI accents. The literary subgenre (Greg Bear, Paul Di Filippo) and the DIY biohacker movement share the name but are only background; this atlas is about pixels.",
      "ko": "범위: 유전공학 및 생체 기술을 모티프한 유기체 인터페이스 스타일입니다."
    },
    "aliases": {
      "en": [
        "interface that looks like a petri dish or lab culture",
        "sickly green slime UI with medical readouts",
        "buttons that look like gel pads or organic tissue",
        "biotech dashboard with throbbing vein-like progress bars",
        "flesh and mucus sci-fi interface style",
        "genome sequencer or CRISPR app aesthetic",
        "organic biological genetic UI",
        "bioluminescence alien HUD",
        "dna biotechnology interface"
      ],
      "ko": [
        "유기체 및 바이오 테크놀로지 바이오펑크",
        "세포 맥동, 유기적 질감, 발광 진광 액체 UI",
        "유전자 서열 DNA 및 생물학 디스플레이",
        "점액질 반응과 살아 숨 쉬는 유기체 표면",
        "유전공학 및 연구소 바이오 HUD",
        "바이오펑크 유기체 생체 UI",
        "유전자 공학 에일리언 HUD",
        "자연 발광 생물학 인터페이스"
      ]
    },
    "signals": [
      {
        "id": "organic-surfaces",
        "role": "defining",
        "name": {
          "en": "Grown, not machined surfaces",
          "ko": "자발광 바이오 형광 (Bioluminescence)"
        },
        "facet": "surface",
        "description": {
          "en": "Buttons and cards read as gel pads, agar plates, or semi-translucent tissue — soft, yielding, often slightly irregular edges rather than crisp geometric shapes.",
          "ko": "어두운 유기체 배경 속에서 빛나는 생물 발광 형광 녹색(#00ff88)과 보라색 발광."
        }
      },
      {
        "id": "sick-palette",
        "role": "defining",
        "name": {
          "en": "Sickly greens and bruised pinks",
          "ko": "세포막 및 유기체 표면 질감"
        },
        "facet": "color",
        "description": {
          "en": "Dominant hues are bio-luminescent greens (#39ff14, #7fff00, #4ade80), mucous yellows, cold lab whites (#e8f4f8), and infected fleshy pinks (#ff6b9d, #ff85a1) against near-black or sterile grey grounds.",
          "ko": "반투명 세포 구조, 혈관 네트워크, 수분감 있는 유기체 막 질감 배경."
        }
      },
      {
        "id": "vascular-motion",
        "role": "defining",
        "name": {
          "en": "Pulsing vascular progress",
          "ko": "DNA 헬릭스 및 유전자 데이터 스캐너"
        },
        "facet": "motion",
        "description": {
          "en": "Loaders and progress bars behave like flowing fluid, creeping mold, or a heartbeat — slow organic movement with irregular pulse beats, not mechanical linear scans.",
          "ko": "염기 서열 문자열(A-T-C-G), 심장박동 그래프, 유전자 스캐너 데이터가 UI를 구성함."
        }
      },
      {
        "id": "lab-hardware",
        "role": "defining",
        "name": {
          "en": "Laboratory equipment metaphors",
          "ko": "살아 숨 쉬는 유기체 맥동 모션"
        },
        "facet": "imagery",
        "description": {
          "en": "Petri dishes, test tubes, pipettes, centrifuge rings, cell grids, and DNA helixes appear as iconography, container shapes, or decorative motifs.",
          "ko": "버튼과 컨테이너가 살아있는 생체 조직처럼 부드럽게 수축하고 부풀어 오르는 호흡 모션."
        }
      },
      {
        "id": "medical-typography",
        "role": "supporting",
        "name": {
          "en": "Medical interface type",
          "ko": "연구소 바이오하자드 및 등폭 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Monospaced or squared-off sans-serif labels that mimic hospital monitors, sequencer logs, and assay readouts — clinical, small, and data-dense.",
          "ko": "정갈한 연구소 등폭 산세리프 서체와 의학 분류 코드 라벨."
        }
      },
      {
        "id": "membrane-texture",
        "role": "supporting",
        "name": {
          "en": "Membrane and mucus textures",
          "ko": "유체 아메바 및 캡슐 컨테이너"
        },
        "facet": "surface",
        "description": {
          "en": "Subtle gradients, noise, or layered blur suggest a wet surface — think amniotic sheen, bacterial film, or the opalescent skin of a jellyfish.",
          "ko": "비대칭의 부드러운 아메바 및 캡슐 형태 유기체 패널 컨테이너."
        }
      },
      {
        "id": "bio-data",
        "role": "supporting",
        "name": {
          "en": "Dense bio-data readouts",
          "ko": "각진 기계적 강철판 지양"
        },
        "facet": "layout",
        "description": {
          "en": "Tiny codons, base-pair sequences, heart-rate traces, and waveform readouts fill margins and corners, as if the UI is monitoring a living sample.",
          "ko": "각진 기계적 강철판과 리벳은 살아있는 생체 조직 분위기를 깨뜨리므로 배제함."
        }
      },
      {
        "id": "hard-chrome",
        "role": "avoid",
        "name": {
          "en": "Hard chrome and circuitry",
          "ko": "플랫 8비트 레트로 도트 격자 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Sharp brushed metal, glowing neon grids, and circuit-board patterns push the look straight into cyberpunk — biopunk keeps the tech soft and biological.",
          "ko": "도트 아트 격자는 생물학적 유체 막 유기체 감성과 상충됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "cyberpunk",
      "name": "Cyberpunk",
      "because": {
        "en": "This is biopunk because the material world is organic, wet, and bodily — gels, membranes, flesh textures, and lab hardware — rather than chrome, neon, rain-slicked streets, and circuitry.",
        "ko": "구별 이유: 유전공학 및 유기체 바이오테크놀로지 — 세포 막 질감, 자발광 바이오 형광(Bioluminescence) 녹색/보라, 유전자 서열 DNA 데이터, 맥동하는 유기체 표면으로 연출되었으므로 바이오펑크에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become cyberpunk if the slime hardened into brushed metal, the petri dishes turned into holographic billboards, the palette flipped to hot magenta and electric cyan, and the backdrop became a rain-soaked dystopian cityscape.",
        "ko": "변경 조건: 유기체 세포막과 맥동이 날카로운 금속판, 네온 옐로우 사선 절삭, 디지털 회로 글리치로 교체되면 사이버펑크(Cyberpunk)가 됨."
      }
    },
    "brief": {
      "en": "Build the interface as Biopunk. Canvas: near-black lab bench (#0a120f) or sterile clinical grey (#e8f4f8), depending on whether you want a dark incubation chamber or a bright clean-room readout. Defining signals: controls render as grown organic forms — gel pads, agar dishes, or semi-translucent tissue with soft irregular edges; palette anchored in sickly bio-luminescent greens (#39ff14, #7fff00, #22c55e), mucous yellows, infected fleshy pinks (#ff6b9d, #ff85a1), and cold lab whites (#e8f4f8); progress and loaders behave like pulsing fluid or creeping mold, not mechanical scans. Use layered gradients and inner shadows to create wet membrane sheen: e.g. gel button — radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), transparent 45%) over linear-gradient(180deg, #4ade80, #22c55e, #15803d), with inset 0 -6px 12px rgba(0,60,20,.35) for depth. Progress bars: #0d1f17 track, #39ff14 fill with background-size: 200% 100% and a slow translate/gradient animation to suggest slime flow, plus 0 0 14px rgba(57,255,20,.55) glow. Typography: clinical monospaced or squared sans for readouts, 11–13px data labels. Imagery: petri dishes, test tubes, centrifuge rings, DNA helixes, cell grids. Do not drift into cyberpunk; the decisive difference is wet/organic/lab versus chrome/neon/dystopia. Avoid hard metal textures, circuit patterns, and hot magenta-cyan neon. Preserve text contrast (greens on black can be too dim — push luminous greens to at least #22c55e against #0a120f), visible focus states, and honor prefers-reduced-motion by stopping the slime pulse.",
      "ko": "바이오펑크(Biopunk) 스타일을 적용합니다. 정의 신호: 어두운 배경 속 자발광 형광 녹색(#00ff88)과 보라색 발광, 세포막 및 혈관 유기체 질감, DNA 염기 서열(A-T-C-G) 스캐너 데이터, 살아 숨 쉬듯 부풀어 오르는 생체 맥동 모션, 연구소 등폭 서체입니다. 생체 맥동 및 수축 애니메이션에 prefers-reduced-motion 대응을 적용하고 어두운 유기체 표면 위 텍스트 명암비를 4.5:1 이상 보장합니다."
    },
    "accessibility": {
      "en": "Glowing greens and low-luminance pinks on near-black are atmospheric but often fail 4.5:1 text contrast — push functional text to at least #22c55e on #0a120f and avoid setting small labels directly on dark translucent gels without a backing layer.\n\nPulsing, creeping, and heartbeat animations can trigger vestibular symptoms or anxiety; keep them slow and non-essential, and pause them under prefers-reduced-motion and prefers-reduced-transparency.\n\nDense medical readouts and tiny monospaced data labels raise cognitive load: reserve them for decorative corners, keep primary actions in a larger clean sans, and never rely on color alone to communicate health/critical state.",
      "ko": "생물 발광 녹색 및 유기체 질감 패널은 검은 배경과 충분한 명암비(4.5:1)를 확보해야 함.\n점액질 및 맥동 애니메이션은 reduced-motion 환경에서 정지."
    },
    "a11yAndMisuse": {
      "en": "Glowing greens and low-luminance pinks on near-black are atmospheric but often fail 4.5:1 text contrast — push functional text to at least #22c55e on #0a120f and avoid setting small labels directly on dark translucent gels without a backing layer.\n\nPulsing, creeping, and heartbeat animations can trigger vestibular symptoms or anxiety; keep them slow and non-essential, and pause them under prefers-reduced-motion and prefers-reduced-transparency.\n\nDense medical readouts and tiny monospaced data labels raise cognitive load: reserve them for decorative corners, keep primary actions in a larger clean sans, and never rely on color alone to communicate health/critical state.",
      "ko": "생물 발광 녹색 및 유기체 질감 패널은 검은 배경과 충분한 명암비(4.5:1)를 확보해야 함.\n점액질 및 맥동 애니메이션은 reduced-motion 환경에서 정지."
    },
    "origin": {
      "en": "Biopunk grew out of cyberpunk in the late 1980s as writers turned from silicon networks to biotechnology: Greg Bear's 'Blood Music' (1985 novel, based on a 1983 short story) is the most-cited early landmark, and Paul Di Filippo's 'Ribofunk' (1996) coined the playful funk-biology tone. Around the same time, the term attached to a DIY biohacker movement experimenting with garage genetic engineering. As a visual style it crystallized in games, film, and app concepts that needed 'the organic opposite of cyberpunk' — all mucus, lab glass, and twitching wetware.",
      "ko": "1990년대 유전공학의 발전과 함께 분출된 생명공학 중심 SF 문화에서 유래했습니다."
    },
    "meta": {}
  },
  {
    "slug": "afrofuturism",
    "name": {
      "en": "Afrofuturism",
      "ko": "아프로퓨처리즘"
    },
    "tagline": {
      "en": "Afrofuturism projects African and diasporic culture into science fiction and the cosmos: interfaces that read like a star chart, a royal banner, and a launch console at once. Deep space black is edged with gold, burnt orange, and royal purple; African geometric patterns frame sunbursts and constellations instead of neoclassical ornament. It has traveled from Sun Ra's cosmic jazz to the Wakandan UI of Black Panther.",
      "ko": "아프리카 전통 문양과 기하학, 찬란한 블랙 문화, 사이버 우주 기술이 융합된 미래지향적 비주얼"
    },
    "scope": {
      "en": "Scope: This entry covers the visual/UI expression of Afrofuturism — cosmic, Africa-inspired, technologically optimistic surfaces — not the literary genre as a whole. It is distinct from Art Deco (1920s Parisian luxury geometry) and from generic space/sci-fi HUDs that carry no African pattern or diasporic symbolism.",
      "ko": "범위: 아프리카 전통 미학에 우주 테크놀로지 요소가 결합된 아프로퓨처리즘 스타일입니다."
    },
    "aliases": {
      "en": [
        "black panther hud with gold tribal borders",
        "african patterns in space with sun and stars",
        "gold purple and orange futuristic african interface",
        "afro sci fi cosmic website with geometric motifs",
        "music player that looks like a royal space amulet",
        "african diaspora cosmic tech",
        "wakanda gold geometric patterns",
        "black panther sci fi"
      ],
      "ko": [
        "아프리카 전통 문양과 하이테크 미래주의 아프로퓨처리즘",
        "와칸다 감성의 블랙과 럭셔리 골드 패턴",
        "기하학 부족 문양과 네온 바이올렛 라인",
        "우주적 유기체 아프리칸 에스테틱",
        "블랙 팬서 콘솔 및 아프리카 퓨처리즘",
        "아프로퓨처리즘 아프리카 우주 테크",
        "와칸다 기하학 금빛 패턴",
        "블랙 팬서 미래 미학"
      ]
    },
    "signals": [
      {
        "id": "tribal-patterns",
        "role": "defining",
        "name": {
          "en": "African geometric pattern language",
          "ko": "흑요석 딥 블랙, 럭셔리 골드, 비비드 바이올렛"
        },
        "facet": "imagery",
        "description": {
          "en": "Mud-cloth, kente, and adinkra-like tessellations — triangles, chevrons, diamonds, and interlocking lines — repeat as borders, panels, or masks in 2–4px metallic strokes.",
          "ko": "깊은 흑요석 검은색(#08060c) 바탕에 우아한 금빛(#e5c158)과 신비로운 바이올렛(#8b3dff) 발광."
        }
      },
      {
        "id": "warm-metallics",
        "role": "defining",
        "name": {
          "en": "Warm metallic palette",
          "ko": "아프리카 기하학 전통 문양 및 자수 패널"
        },
        "facet": "color",
        "description": {
          "en": "Gold #d4af37, bronze, copper, burnt orange #f26522, and royal purple #6b2d5c on a dark starfield #0d0418; color reads as both regal and cosmic.",
          "ko": "켄테(Kente) 직물에서 영감을 받은 기하학 패턴과 다이아몬드 직조 문양이 테두리를 감쌈."
        }
      },
      {
        "id": "starfield-cosmos",
        "role": "defining",
        "name": {
          "en": "Deep-space starfield backdrop",
          "ko": "우주적 초첨단 고대 기술 HUD"
        },
        "facet": "imagery",
        "description": {
          "en": "A near-black cosmic ground dotted with stars, nebula washes, and faint constellation traces; space is the literal and metaphorical canvas.",
          "ko": "홀로그램 기호, 성도 우주 지도, 신비로운 에너지 라인이 결합된 초첨단 HUD."
        }
      },
      {
        "id": "sun-stars",
        "role": "defining",
        "name": {
          "en": "Sun and star iconography",
          "ko": "조형적인 유기적 곡선 프레임"
        },
        "facet": "imagery",
        "description": {
          "en": "A central radiating sun, eight-pointed stars, or constellation motifs rendered in metallic gold line-art; warm celestial bodies are the focal emblem.",
          "ko": "아프리카 목조각과 모던 건축에서 영감을 받은 조형적인 유선형 프레임."
        }
      },
      {
        "id": "tribal-geometry",
        "role": "defining",
        "name": {
          "en": "Tribal geometric framing",
          "ko": "우아하고 당당한 기하학 디스플레이 서체"
        },
        "facet": "geometry",
        "description": {
          "en": "Panels and buttons are edged with angular, stepped, or interlocking frames rather than plain rectangles; the geometry carries cultural pattern logic, not Art Deco luxury.",
          "ko": "키가 크고 당당한 기하학 디스플레이 서체에 문화적 기호 터미널이 적용됨."
        }
      },
      {
        "id": "bold-display-type",
        "role": "supporting",
        "name": {
          "en": "Bold display type with wide stance",
          "ko": "비브라늄 스타일 자발광 에너지 노드"
        },
        "facet": "typography",
        "description": {
          "en": "Headings in a heavy geometric sans or stencil face, uppercase, letter-spacing 0.12–0.25em; text sits like a banner or emblem.",
          "ko": "검은 금속 패널을 따라 흐르는 바이올렛/시안 빛의 자발광 회로 노드."
        }
      },
      {
        "id": "gold-foil",
        "role": "supporting",
        "name": {
          "en": "Gold-foil gradients",
          "ko": "일반 디스토피아 산업 그을음 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Strokes and display text use vertical gold gradients (#f9e076 → #d4af37 → #9c7f22) with a hard highlight stop so they read as metal leaf.",
          "ko": "어둡고 거친 디스토피아 그을음은 아프로퓨처리즘의 긍지 높고 찬란한 미래관을 훼손함."
        }
      },
      {
        "id": "deco-ornament",
        "role": "avoid",
        "name": {
          "en": "1920s Parisian luxury geometry",
          "ko": "서구식 레트로 50년대 감성 지양"
        },
        "facet": "geometry",
        "description": {
          "en": "Mirror symmetry, stepped ziggurats, and gilded all-caps hotel signage without tribal pattern or cosmic ground read as Art Deco, not Afrofuturism.",
          "ko": "서구식 레트로 감성은 아프리카 문화 유산의 깊은 유대감과 상충됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "art-deco",
      "name": "Art Deco",
      "because": {
        "en": "This is Afrofuturism because the geometry is drawn from African pattern languages — mud-cloth grids, kente chevrons, adinkra-like symbols — and the palette is warm cosmic metal (gold, burnt orange, royal purple) on a starfield. The ornament is telling a diasporic science-fiction story, not a 1920s luxury story.",
        "ko": "구별 이유: 아프리카 문화 유산의 기하학 문양, 유기적 조형, 와칸다 스타일의 딥 블랙 바탕에 신비로운 바이올렛/골드 네온 발광, 미래지향적 우주 기술 데이터로 구성되었으므로 아프로퓨처리즘에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Art Deco if the tribal patterns were replaced by mirror-symmetric sunbursts, stepped ziggurats, and gilded all-caps hotel lettering on a lacquer-black ground with no African motifs or space canvas.",
        "ko": "변경 조건: 아프리카 기하학 문양과 문화적 상징이 사라지고 일반적인 디스토피아 네온 옐로우와 사선 절삭 금속만 남게 되면 사이버펑크(Cyberpunk)가 됨."
      }
    },
    "brief": {
      "en": "Build an Afrofuturist UI. Canvas: deep space #0d0418 with a sparse starfield — radial-gradient dots plus a faint gold nebula wash. Palette: metallic gold #d4af37 (highlights #f9e076, shade #9c7f22), burnt orange #f26522, royal purple #6b2d5c, ivory text #efe9dc. Pattern: African geometric motifs — mud-cloth, kente, adinkra-like marks — as 2–3px gold borders. Frame panels with angular, stepped, or zigzag clip-path edges, not plain rectangles. Typography: heavy geometric sans or stencil face, uppercase headings, letter-spacing 0.15–0.25em; display text in a vertical gold gradient (background-clip: text). Focal emblem: a radiating sun or eight-pointed star in gold line-art. Buttons and sliders share tribal borders and gold-foil highlights; progress fills orange-to-purple. Depth comes from metallic contrast and line, not soft shadows. Motion: slow sun rotation or star twinkle; pause under prefers-reduced-motion. Avoid Art Deco: mirror symmetry, ziggurats, lacquer black without space, gilded hotel lettering. Keep text on solid high-contrast areas; make focus rings visible.",
      "ko": "아프로퓨처리즘(Afrofuturism) 스타일을 적용합니다. 정의 신호: 흑요석 블랙(#08060c) 바탕, 럭셔리 골드(#e5c158)와 비비드 바이올렛(#8b3dff) 발광, 아프리카 켄테 기하학 전통 문양, 우주적 초첨단 홀로그램 HUD, 조형적 유기선 프레임, 당당한 기하학 서체입니다. 문화적 문양 장식에 aria-hidden='true'를 지정하고 딥 블랙 바탕 위 텍스트 명암비를 4.5:1 이상 확보합니다."
    },
    "accessibility": {
      "en": "Warm metallic colors on a dark starfield are not automatically readable: small purple #6b2d5c text and mid-gold gradient stops can fall below 4.5:1, so test every text size against #0d0418 and place labels on solid dark plates when they cross busy patterns or nebula regions.\n\nCosmic twinkling, rotating sun rays, and gold shimmer are decorative motion that can bother vestibular and photosensitive users; keep any flashing or pulsing below three flashes per second and honor prefers-reduced-motion by freezing rotation and shimmer entirely.\n\nAfrican patterns and symbols are cultural material, not neutral clipart; use them with respect, avoid mixing unrelated traditions or sacred marks as mere decoration, and mark purely ornamental iconography aria-hidden so screen readers do not treat it as meaningful content.",
      "ko": "기하학적 기호 및 기황색 금빛 테두리가 텍스트 명암비를 방해하지 않도록 판 패널 구성.\n화려한 문화적 문양 장식 영역 접근성 aria-hidden 처리."
    },
    "a11yAndMisuse": {
      "en": "Warm metallic colors on a dark starfield are not automatically readable: small purple #6b2d5c text and mid-gold gradient stops can fall below 4.5:1, so test every text size against #0d0418 and place labels on solid dark plates when they cross busy patterns or nebula regions.\n\nCosmic twinkling, rotating sun rays, and gold shimmer are decorative motion that can bother vestibular and photosensitive users; keep any flashing or pulsing below three flashes per second and honor prefers-reduced-motion by freezing rotation and shimmer entirely.\n\nAfrican patterns and symbols are cultural material, not neutral clipart; use them with respect, avoid mixing unrelated traditions or sacred marks as mere decoration, and mark purely ornamental iconography aria-hidden so screen readers do not treat it as meaningful content.",
      "ko": "기하학적 기호 및 기황색 금빛 테두리가 텍스트 명암비를 방해하지 않도록 판 패널 구성.\n화려한 문화적 문양 장식 영역 접근성 aria-hidden 처리."
    },
    "origin": {
      "en": "The term was coined by cultural critic Mark Dery in his 1993 essay 'Black to the Future' — interviews with Samuel R. Delany, Greg Tate, and Tricia Rose that named a current already running through Sun Ra's cosmic jazz persona (developed from the early 1950s), George Clinton's Parliament-Funkadelic Mothership mythology (notably the 1975 Mothership Connection album and tour), and the fiction of Octavia Butler. Scholar Alondra Nelson then gave the field an institutional home by launching the AfroFuturism listserv in 1999. The look entered mainstream UI consciousness through album art, editorial design, and especially Ryan Coogler's Black Panther (2018), where production designer Hannah Beachler and costume designer Ruth E. Carter imagined Wakandan technology through African forms.",
      "ko": "1990년대 문화 비평가 마크 데리에 의해 명명되었으며 영화 블랙 팬서 등을 통해 대중화되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "de-stijl",
    "name": {
      "en": "De Stijl",
      "ko": "데 스틸"
    },
    "tagline": {
      "en": "De Stijl is the Dutch abstract movement that reduced painting and design to a strict grammar of horizontal and vertical black lines enclosing rectangles of red, yellow, and blue on a white ground. Every curve, diagonal, and representational reference is rejected; balance is achieved asymmetrically by shifting the weight of color blocks across an invisible orthogonal grid. The look is inseparable from Piet Mondrian's mature Neo-Plasticist canvases and from Theo van Doesburg's magazine and architectural projects of 1917–1931.",
      "ko": "수직/수평의 직선, 삼원색(빨강, 노랑, 파랑)과 무채색(흰, 검) 격자로 이루어진 몬드리안 양식"
    },
    "scope": {
      "en": "Scope: This entry covers the De Stijl look as it appears in graphic and UI design — the black-grid, primary-rectangle, no-curve vocabulary. It is not the whole of Dutch modernism; Constructivism shares the geometric spirit but adds diagonals and industrial imagery, while Bauhaus shares the primaries but freely uses circles, triangles, and all-lowercase type.",
      "ko": "범위: 네덜란드 데 스틸 운동의 순수 추상 기하학 미학을 다룹니다."
    },
    "aliases": {
      "en": [
        "mondrian style with red yellow blue squares and black lines",
        "websites that look like a mondrian painting",
        "strict grid of black lines and primary color blocks",
        "rectangles only no curves no gradients ui",
        "neoplasticism style with white background and colored blocks",
        "that dutch design with only straight lines and right angles",
        "mondrian primary color grid",
        "neo plasticism red yellow blue",
        "strict straight lines"
      ],
      "ko": [
        "피에트 몬드리안 스타일의 데 스틸(De Stijl) 양식",
        "두꺼운 검은 수평 수직 그리드선과 삼원색",
        "빨강, 노랑, 파랑 직사각형 컬러 블록",
        "극단적 비대칭 직교 그리드 UI",
        "신조형주의(Neo-Plasticism) 기하학 레이아웃",
        "데 스틸 몬드리안 삼원색",
        "신조형주의 직교 검은 선",
        "빨강 노랑 파랑 정직각"
      ]
    },
    "signals": [
      {
        "id": "orthogonal-grid",
        "role": "defining",
        "name": {
          "en": "Horizontal and vertical black grid",
          "ko": "수직 및 수평 검은색 직교 그리드선"
        },
        "facet": "geometry",
        "description": {
          "en": "The composition is held together by straight black lines running only at 0° and 90° — no diagonals, no curves. Lines are usually 2–4px thick and act as both structure and edge.",
          "ko": "사선이나 곡선 없이 오직 0도와 90도의 두꺼운 검은 선(2~4px)이 외곽선이자 경계 구조 역할을 수행함."
        }
      },
      {
        "id": "rectangles-only",
        "role": "defining",
        "name": {
          "en": "Rectangles only",
          "ko": "오직 직사각형 기하학 형태만 허용"
        },
        "facet": "geometry",
        "description": {
          "en": "Every colored or outlined shape is a rectangle. Circles, triangles, blobs, icons, and rounded corners are excluded — right angles are the only geometry.",
          "ko": "모든 면과 버튼이 직선 직사각형임. 원, 삼각형, 둥근 모서리가 철저히 배제되고 직각만 허용됨."
        }
      },
      {
        "id": "primaries-plus-ink",
        "role": "defining",
        "name": {
          "en": "Primaries plus black and white",
          "ko": "순수 삼원색(Red, Yellow, Blue)과 흑백"
        },
        "facet": "color",
        "description": {
          "en": "The palette is locked to unmixed red, yellow, and blue on a white ground, bounded by black lines. No gradients, no tints, no greys, no expanded palette.",
          "ko": "혼합되지 않은 순수 빨강(#e3000f), 노랑(#f9d71c), 파랑(#0057a8)과 흰색 바탕, 검은선만 사용함."
        }
      },
      {
        "id": "asymmetric-balance",
        "role": "defining",
        "name": {
          "en": "Asymmetric equilibrium",
          "ko": "극단적 비대칭 동적 균형"
        },
        "facet": "layout",
        "description": {
          "en": "Large color blocks on one side of the canvas are offset by clusters of smaller blocks or denser black lines on the other — balance without mirror symmetry.",
          "ko": "대형 원색 블록과 자잘한 그리드 칸들이 대칭 없이 완벽한 비대칭 균형을 형성함."
        }
      },
      {
        "id": "flat-matte-planes",
        "role": "defining",
        "name": {
          "en": "Flat matte planes",
          "ko": "음영 없는 완벽한 평면 컬러"
        },
        "facet": "surface",
        "description": {
          "en": "All fills are opaque, flat, and texture-free. Shadows, glows, gradients, glass, and depth effects would break the Neo-Plasticist discipline.",
          "ko": "그림자, 그래디언트, 질감이 일체 없는 불투명 플랫 단색 면."
        }
      },
      {
        "id": "uniform-line-weight",
        "role": "supporting",
        "name": {
          "en": "Uniform ink line weight",
          "ko": "일정한 두께의 검은 테두리 선"
        },
        "facet": "geometry",
        "description": {
          "en": "Grid lines keep a consistent thickness throughout the composition — typically 2–4px — so the rhythm of the rectangles reads as a single system.",
          "ko": "화면 전체에서 일정한 두께(2~4px)의 검은 테두리 선이 그리드 리듬을 유지함."
        }
      },
      {
        "id": "right-angles",
        "role": "supporting",
        "name": {
          "en": "Every corner is 90°",
          "ko": "모든 모서리가 정확히 90도 직각"
        },
        "facet": "geometry",
        "description": {
          "en": "No rounded corners, chamfers, or arcs. The strictness of the right angle is part of the style's visual signature.",
          "ko": "모서리 둥글리기(border-radius: 0)나 챔퍼가 전혀 없는 정교한 90도 직각."
        }
      },
      {
        "id": "curves-diagonals",
        "role": "avoid",
        "name": {
          "en": "Curves and diagonals",
          "ko": "곡선 및 사선 배제"
        },
        "facet": "geometry",
        "description": {
          "en": "Any circle, triangle, slanted line, or organic shape immediately reads as Constructivist, Bauhaus, or Memphis rather than De Stijl.",
          "ko": "원, 삼각형, 사선이 들어가는 순간 데 스틸의 신조형주의 정체성이 파괴됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "bauhaus",
      "name": "Bauhaus",
      "because": {
        "en": "This is De Stijl because the vocabulary is strictly orthogonal: only horizontal and vertical black lines, only rectangles, no curves — Bauhaus would have introduced circles, triangles, and diagonals.",
        "ko": "구별 이유: 피에트 몬드리안의 신조형주의 — 오직 0도와 90도의 두꺼운 검은 직교 그리드선, 곡선 없는 순수 직사각형, 무혼합 삼원색(Red #e3000f, Yellow #f9d71c, Blue #0057a8)과 흑백 바탕으로 구성되었으므로 데 스틸에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Bauhaus if the black grid opened up to circles, triangles, and diagonal bars, and the type switched to all-lowercase geometric lettering.",
        "ko": "변경 조건: 검은 직교 그리드가 풀어지고 원, 삼각형, 대각선 기하학 바와 소문자 서체가 도입되면 바우하우스(Bauhaus)가 됨."
      }
    },
    "brief": {
      "en": "Build the surface as De Stijl (Neo-Plasticism). Canvas: white #ffffff, ink lines #0a0a0a. Palette is restricted to three flat primaries — red #e3000f, yellow #f9d71c, blue #0057a8 — plus paper white; no gradients, shadows, tints, or textures. Every shape is a rectangle; every line is horizontal or vertical at 2–4px thick; border-radius must be 0px everywhere. Compose with CSS Grid or absolute positioning, using the black lines as both gap filler and bounding edges. Asymmetric balance is essential: place one large primary block off-center and counter it with a cluster of smaller blocks or denser black divisions on the opposite side. Type should be a neutral sans-serif (Helvetica Neue, Arial, or similar), sentence case, kept small and unobtrusive; avoid display fonts, all-lowercase geometric lettering, or ornament. Buttons are solid rectangles of red, yellow, or blue with 2–4px black borders; hover swaps the fill to another primary or to white, never adds depth or rounding. Motion, if any, is a hard cut or a linear translate along the horizontal/vertical axis; no easing curves, no fades, no rotation. Do not drift into Bauhaus: the moment you add circles, triangles, diagonals, or all-lowercase geometric type, you have left De Stijl. Preserve text contrast (ink on paper and yellow, paper on red/blue), visible focus outlines as black 2px offsets, and honor prefers-reduced-motion by removing any movement.",
      "ko": "데 스틸(De Stijl / 신조형주의) 스타일을 적용합니다. 정의 신호: 오직 0도와 90도의 수직/수평 두꺼운 검은 그리드선(2~4px), 곡선 없는 순수 직사각형(border-radius: 0), 무혼합 삼원색(Red #e3000f, Yellow #f9d71c, Blue #0057a8)과 흑백 바탕, 극단적 비대칭 균형입니다. 노란색 블록 위 흰색 글씨 등 명암비 부적격을 방지하고 오프셋 포커스 링을 선명히 제공합니다."
    },
    "accessibility": {
      "en": "The strict black/white ground gives strong contrast, but primary-on-primary adjacencies — especially red next to blue — can vibrate and fail for users with color-vision differences. Never use color alone to indicate state; pair active elements with a shape change, a black border shift, or an extra grid line.\n\nUniform thin grid lines can be hard to perceive or to target as interactive boundaries. Keep interactive elements (buttons, progress tracks, volume bars) large enough for touch — at least 44×44px — and give them a visible focus indicator that does not rely on the black grid alone.\n\nAsymmetric layouts raise cognitive load because the visual weight is deliberately off-balance. Keep labels and controls predictable in source order, avoid decorative rectangles that look actionable, and provide clear aria-labels on icon-only buttons.",
      "ko": "빨강, 노랑, 파랑 신형 원색 블록 위 텍스트 명암비 점검 (노란색 위 흰색 글씨 절대 금지).\n두꺼운 검은 테두리가 포커스 링으로 오인되지 않도록 오프셋 포커스 제공."
    },
    "a11yAndMisuse": {
      "en": "The strict black/white ground gives strong contrast, but primary-on-primary adjacencies — especially red next to blue — can vibrate and fail for users with color-vision differences. Never use color alone to indicate state; pair active elements with a shape change, a black border shift, or an extra grid line.\n\nUniform thin grid lines can be hard to perceive or to target as interactive boundaries. Keep interactive elements (buttons, progress tracks, volume bars) large enough for touch — at least 44×44px — and give them a visible focus indicator that does not rely on the black grid alone.\n\nAsymmetric layouts raise cognitive load because the visual weight is deliberately off-balance. Keep labels and controls predictable in source order, avoid decorative rectangles that look actionable, and provide clear aria-labels on icon-only buttons.",
      "ko": "빨강, 노랑, 파랑 신형 원색 블록 위 텍스트 명암비 점검 (노란색 위 흰색 글씨 절대 금지).\n두꺼운 검은 테두리가 포커스 링으로 오인되지 않도록 오프셋 포커스 제공."
    },
    "origin": {
      "en": "De Stijl was founded in Amsterdam in 1917 by the painter and critic Theo van Doesburg, who launched the magazine De Stijl as the movement's mouthpiece; the painters Piet Mondrian and Bart van der Leck, the architect J.J.P. Oud, and the designer Vilmos Huszár were among its earliest contributors. Mondrian's mature 'Neo-Plasticist' canvases — red, yellow, and blue rectangles locked into white fields by black verticals and horizontals — became the style's public face, while Van Doesburg pushed the same grammar into architecture and typography. The magazine ceased publication in 1931, and the movement dissolved as its members diverged, but its reduction to pure form and primary color became one of the lasting reference points for modern graphic design.",
      "ko": "1917년 네덜란드에서 피에트 몬드리안과 테오 판 두스뷔르흐에 의해 창시되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "constructivism",
    "name": {
      "en": "Constructivism",
      "ko": "구성주의"
    },
    "tagline": {
      "en": "Constructivism translates early Soviet avant-garde graphic language into UI: razor-sharp diagonals, red-and-black slabs, clipped industrial photography, and blocky sans-serif type locked into dynamic, poster-like layouts. It still reads as propaganda energy rather than decoration — every element looks arranged to shout a message across a noisy square. A modern app borrowing the look usually wants urgency, solidarity, or editorial punch.",
      "ko": "대각선 구조, 강렬한 붉은색과 검은색의 대비, 역동적인 선전 포스터 스타일의 소련 구성주의"
    },
    "scope": {
      "en": "Scope: This entry covers the graphic style that migrated from Soviet posters and book design into digital UI. It is not the later Constructivist architecture of poured concrete, nor the abstract sculpture of Tatlin's Monument to the Third International; those are siblings, not signals.",
      "ko": "범위: 1920년대 러시아 구성주의 그래픽 및 조형 스타일을 다룹니다."
    },
    "aliases": {
      "en": [
        "soviet propaganda poster style in an app",
        "red and black diagonal blocks with industrial photos",
        "that bold angled typography like old revolution posters",
        "constructivist design with photo collage and geometric bars",
        "heavy sans-serif ui that looks like a political broadsheet",
        "soviet avant garde poster diagonals",
        "red black dynamic propaganda",
        "constructivist photomontage"
      ],
      "ko": [
        "소련 선전 포스터 감성의 구성주의(Constructivism)",
        "대각선 레드-블랙 슬래시 패널과 포토몽타주",
        "강렬한 볼드 산세리프 대문자 타이포그래피",
        "산업 기계, 톱니, 스피커 그래픽 포스터",
        "역동적 사선 레이아웃과 붉은색 고대비 UI",
        "러시아 구성주의 선전 포스터",
        "역동적 사선 구도와 레드 블랙",
        "소련 아방가르드 포토몽타주"
      ]
    },
    "signals": [
      {
        "id": "diagonal-composition",
        "role": "defining",
        "name": {
          "en": "Diagonal composition",
          "ko": "역동적인 대각선(Diagonal) 구도"
        },
        "facet": "layout",
        "description": {
          "en": "The layout is built from slashed rectangles, chevrons, and bars that run at 30–60°; horizontals and verticals feel like exceptions, not the rule.",
          "ko": "30~60도 사선으로 잘려 나간 패널과 셰브론 바들이 화면에 강렬한 역동성을 부여함."
        }
      },
      {
        "id": "red-black-slabs",
        "role": "defining",
        "name": {
          "en": "Red-and-black slabs",
          "ko": "강렬한 레드-블랙 슬래시 블록"
        },
        "facet": "color",
        "description": {
          "en": "The palette is almost always a loud red (e.g. #D3191C), stark black (#0A0A0A), and a muted off-white or newsprint grey (#E8E4D9); color sits as flat planes, not gradients.",
          "ko": "선명한 선전 레드(#D3191C), 칠흑색(#0A0A0A), 신문지 크림색(#E8E4D9)의 강렬한 대치."
        }
      },
      {
        "id": "photomontage",
        "role": "defining",
        "name": {
          "en": "Clipped photomontage",
          "ko": "기하학 패널로 잘라낸 포토몽타주"
        },
        "facet": "imagery",
        "description": {
          "en": "Industrial or mass-culture photos are cut into sharp geometric panels with hard edges, often overlaid by red bars or black shapes, never softly rounded.",
          "ko": "산업/대중 사진이 날카로운 기하학 패널로 잘려 흑백 고대비 포토몽타주로 배치됨."
        }
      },
      {
        "id": "industrial-imagery",
        "role": "defining",
        "name": {
          "en": "Industrial and mass icons",
          "ko": "산업 기계 및 군중 아이콘"
        },
        "facet": "imagery",
        "description": {
          "en": "Gears, smokestacks, loudspeakers, fists, aeroplanes, and crowds appear as silhouettes or high-contrast halftones, signaling collective production and modernity.",
          "ko": "톱니바퀴, 굴뚝, 확성기, 주먹, 비행기 등 집단 생산과 현대성을 상징하는 그래픽."
        }
      },
      {
        "id": "bold-sans",
        "role": "defining",
        "name": {
          "en": "Bold grotesk type",
          "ko": "묵직한 볼드 산세리프 대문자 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms are heavy, condensed sans-serifs — equivalents of Helvetica/Impact/Arial Black — set in all caps with tight leading and often tilted or stacked.",
          "ko": "Impact 및 Arial Black 계열의 묵직한 대문자 산세리프 서체를 좁은 행간으로 기울여 배치함."
        }
      },
      {
        "id": "dynamic-tilt",
        "role": "defining",
        "name": {
          "en": "Dynamic tilt",
          "ko": "전진하는 듯한 각도 기울임 (Dynamic Tilt)"
        },
        "facet": "geometry",
        "description": {
          "en": "Headings, buttons, and image panels lean at the same diagonal angle (typically skewX(-8°) to skewX(-15°)), so the whole card feels like it is moving forward.",
          "ko": "제목과 버튼, 카드들이 동일한 사선 각도(skewX -8~-15도)로 기울어져 앞으로 전진하는 듯한 느낌을 줌."
        }
      },
      {
        "id": "poster-density",
        "role": "supporting",
        "name": {
          "en": "Poster density",
          "ko": "선전 포스터 스타일의 고밀도 레이아웃"
        },
        "facet": "layout",
        "description": {
          "en": "Text and shapes butt against edges and overlap; generous padding and centered symmetry are avoided because the page is treated as a single propaganda sheet.",
          "ko": "여백을 넉넉히 두지 않고 요소를 외곽까지 빽빽하게 배치하여 단일 선전 포스터 같은 밀도를 형성함."
        }
      },
      {
        "id": "static-grid",
        "role": "avoid",
        "name": {
          "en": "Static orthogonality",
          "ko": "정적인 정직각 그리드 지양"
        },
        "facet": "layout",
        "description": {
          "en": "Calm, centered cards with equal white space and right-angle grids immediately kill the style — that territory belongs to De Stijl and Swiss minimalism.",
          "ko": "차분한 대칭 직각 그리드는 구성주의 특유의 사선 에너지를 무너뜨림."
        }
      }
    ],
    "confusedWith": {
      "slug": "de-stijl",
      "name": "De Stijl",
      "because": {
        "en": "This is Constructivism because the layout is kinetic — diagonals, skewed typography, photomontage, and a red-black-industrial palette drive the composition.",
        "ko": "구별 이유: 초기 소련 아방가르드 포스터 그래픽 — 날카로운 대각선 구도, 강렬한 레드(#D3191C)-블랙 슬래시 패널, 고대비 흑백 포토몽타주, 묵직한 볼드 산세리프 대문자 서체로 연출되었으므로 구성주의에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become De Stijl if every diagonal were straightened into a right angle, the photographs were removed, and the palette swapped to red-yellow-blue on white static grids.",
        "ko": "변경 조건: 모든 사선이 수직/수직 직각으로 바르게 정렬되고 사진이 제거되며 삼원색(Red-Yellow-Blue) 그리드로 환원되면 데 스틸(De Stijl)이 됨."
      }
    },
    "brief": {
      "en": "Create this surface in the spirit of Soviet Constructivism. Defining signals: a red-and-black slab palette — use #D3191C for the loud accent, #0A0A0A for black, and #E8E4D9 or #B8B2A2 for the off-white / newsprint ground. Build the layout from diagonals: slashed rectangles, chevrons, and bars at 30–60°; headings, buttons, and image panels should share a single skew angle (transform: skewX(-8deg) to skewX(-12deg)) so the whole composition leans forward. Use heavy, condensed grotesk type — 'Helvetica Neue', 'Arial Black', Impact, or system heavy sans — in all caps with tight leading and 0.03–0.06em letter-spacing. Images must be clipped into sharp geometric panels and treated as high-contrast grayscale photomontage (filter: grayscale(100%) contrast(1.2)), overlaid by red bars or black shapes; choose industrial/mass icons such as gears, smokestacks, loudspeakers, or fists. Hard black borders (2–3px solid #0A0A0A) and flat color planes are required; zero gradients, zero rounded corners, zero soft shadows. Keep the specific iconography and exact angle flexible, but keep the diagonal energy and propaganda density. Do not drift into De Stijl — the decisive difference is motion: straighten the diagonals to right angles, replace photos with flat primary color blocks, and add white space, and you have left Constructivism. Preserve text contrast: black on red/off-white usually passes; red on black needs careful sizing. Honor prefers-reduced-motion by removing skew/translate transitions and keeping static diagonal geometry.",
      "ko": "구성주의(Constructivism) 스타일을 적용합니다. 정의 신호: 강렬한 선전 레드(#D3191C)와 블랙(#0A0A0A)의 슬래시 패널, 30~60도 대각선 구도 및 사선 기울임(skewX -8~-12도), 흑백 기하학 포토몽타주, 톱니/확성기 산업 그래픽, 묵직한 대문자 산세리프 서체입니다. 본문 텍스트는 기울이지 않고 바르게 정렬하여 가독성을 보장하며, 기울임 모션에 prefers-reduced-motion 대응을 적용합니다."
    },
    "accessibility": {
      "en": "The tilted type and dense overlapping panels raise real readability risks: skewed letterforms are harder to parse for dyslexic readers and screen-magnification users, so keep body text untilted and reserve skew for short headings and labels.\n\nRed-black graphics often fail non-text contrast for meaningful UI boundaries; add a secondary indicator — a thick black outline or a clear focus ring — and test icons/buttons against the off-white ground.\n\nHonor prefers-reduced-motion by disabling diagonal transitions and translate effects; the static layout should still communicate the style without animation.",
      "ko": "사선 강하게 기울어진 텍스트 및 강렬한 선동 문구 배치는 읽기 순서(DOM)와 시각 순서 일치 필수.\n붉은색 슬래시 배경 위 검은색/흰색 텍스트 명암비 확보."
    },
    "a11yAndMisuse": {
      "en": "The tilted type and dense overlapping panels raise real readability risks: skewed letterforms are harder to parse for dyslexic readers and screen-magnification users, so keep body text untilted and reserve skew for short headings and labels.\n\nRed-black graphics often fail non-text contrast for meaningful UI boundaries; add a secondary indicator — a thick black outline or a clear focus ring — and test icons/buttons against the off-white ground.\n\nHonor prefers-reduced-motion by disabling diagonal transitions and translate effects; the static layout should still communicate the style without animation.",
      "ko": "사선 강하게 기울어진 텍스트 및 강렬한 선동 문구 배치는 읽기 순서(DOM)와 시각 순서 일치 필수.\n붉은색 슬래시 배경 위 검은색/흰색 텍스트 명암비 확보."
    },
    "origin": {
      "en": "Russian Constructivism crystallised around 1915, led by Vladimir Tatlin and Alexander Rodchenko, and gained momentum after the 1917 Revolution through propaganda posters, book design, and agitprop — figures such as El Lissitzky, Lyubov Popova, and Gustav Klutsis shaped its look of photomontage, bold sans-serif type, and dynamic diagonals. The movement was effectively suppressed in the early 1930s as Socialist Realism became state doctrine, but its graphic vocabulary remained a reference for poster and editorial design ever after.",
      "ko": "1915년 러시아 예술가들에 의해 시작되어 인더스트리얼 디자인과 건축에 깊은 영향을 미쳤습니다."
    },
    "meta": {}
  },
  {
    "slug": "pop-art",
    "name": {
      "en": "Pop Art",
      "ko": "팝 아트"
    },
    "tagline": {
      "en": "Pop Art lifts the look of mass media into UI: comic panels, advertising halftones, and celebrity faces are redrawn as flat, saturated shapes locked inside thick black ink outlines, with Ben-Day dots standing in for shadows and gradients. It treats consumer culture as both subject and punchline — a soup can, a comic strip, a Marilyn — rendered in the primary-plus-neon palette of 1960s printing. The style is instantly readable because it borrows from the most familiar visual language on the newsstand.",
      "ko": "벤데이 닷(Ben-Day dots), 만화 컷 구성, 대중문화 아이콘과 강렬한 팝 컬러의 재치 있는 결합"
    },
    "scope": {
      "en": "Scope: Covers the Pop Art visual language as adapted to UI and graphic design — Ben-Day dots, comic-panel grids, bold outlines, and mass-media imagery. It is not the 1980s postmodern pattern language of Memphis, nor the rough photocopied collage of zine culture; those are separate entries.",
      "ko": "범위: 앤디 워홀과 로이 리히텐슈타인의 팝아트 그래픽 언어를 UI에 이식한 스타일입니다."
    },
    "aliases": {
      "en": [
        "websites that look like a comic book page",
        "halftone dots and thick black outlines like old ads",
        "that 60s screen-print style with soup cans and faces",
        "bold primary colors with speech bubbles",
        "comic panel layout with ben day dots",
        "retro advertising collage with celebrities",
        "ben day dots roy lichtenstein",
        "warhol soup cans comic panel",
        "60s pop culture art"
      ],
      "ko": [
        "60년대 로이 리히텐슈타인 감성의 팝 아트 UI",
        "벤데이 망점(Ben-Day dots)과 두꺼운 검은 윤곽선",
        "만화책 컷 프레임과 말풍선, 스타버스트 배지",
        "앤디 워홀 스타일의 앤디 워홀 팝 컬러",
        "대중매체 광고 스크랩 및 신문 만화 감성",
        "팝아트 벤데이 망점 도트",
        "로이 리히텐슈타인 만화 컷",
        "앤디 워홀 팝 컬러 스타일"
      ]
    },
    "signals": [
      {
        "id": "ben-day-dots",
        "role": "defining",
        "name": {
          "en": "Ben-Day halftone dots",
          "ko": "벤데이 망점 (Ben-Day halftone dots)"
        },
        "facet": "surface",
        "description": {
          "en": "Shading and texture are built from evenly spaced small dots — mechanical halftone cells rather than gradients — usually #000000 or the local ink color on a #ffffff ground.",
          "ko": "음영과 질감이 그래디언트 대신 규칙적인 기계식 벤데이 망점 도트 패턴으로 표현됨."
        }
      },
      {
        "id": "thick-black-outline",
        "role": "defining",
        "name": {
          "en": "Thick black ink outlines",
          "ko": "두꺼운 검은 잉크 윤곽선"
        },
        "facet": "geometry",
        "description": {
          "en": "Every shape, button, panel, and letterform carries a uniform 2.5–4px solid #000000 stroke, like a comic panel inked for cheap newsprint.",
          "ko": "모든 만화 컷과 버튼, 서체에 만화책 인쇄처럼 두꺼운 2.5~4px 단색 검은 윤곽선이 적용됨."
        }
      },
      {
        "id": "comic-panel-grid",
        "role": "defining",
        "name": {
          "en": "Comic-strip panel grid",
          "ko": "만화책 컷 레이아웃 그리드"
        },
        "facet": "layout",
        "description": {
          "en": "The page is broken into rectangular panels with heavy gutters and borders — the layout itself reads as a sequence of comic frames rather than a continuous canvas.",
          "ko": "화면이 만화책 프레임처럼 두꺼운 여백과 테두리를 가진 직사각형 컷들로 분할됨."
        }
      },
      {
        "id": "saturated-primaries",
        "role": "defining",
        "name": {
          "en": "Saturated primary and neon fills",
          "ko": "원색 및 핫핑크/시안 단색 채우기"
        },
        "facet": "color",
        "description": {
          "en": "Flat fills of #ff2a2a red, #ffd500 yellow, #0066ff blue, plus hot pink #ff1493 and cyan #00e5ff — opaque, unmixed, no gradients.",
          "ko": "선명한 빨강(#ff2a2a), 노랑(#ffd500), 파랑(#0066ff)과 핫핑크(#ff1493), 시안(#00e5ff) 플랫 단색 채우기."
        }
      },
      {
        "id": "mass-media-imagery",
        "role": "defining",
        "name": {
          "en": "Mass-media subject matter",
          "ko": "대중매체 상표 및 연예인 초상"
        },
        "facet": "imagery",
        "description": {
          "en": "Soup cans, celebrity portraits, comic characters, product labels, and advertising slogans — the imagery is borrowed from the supermarket and the newsstand.",
          "ko": "통조림 상표, 연예인 초상, 신문 만화 캐릭터, 광고 문구 등 신문 가판대와 슈퍼마켓에서 빌려온 상징."
        }
      },
      {
        "id": "speech-bubbles",
        "role": "supporting",
        "name": {
          "en": "Speech and starburst balloons",
          "ko": "만화 말풍선 및 스타버스트 배지"
        },
        "facet": "geometry",
        "description": {
          "en": "Labels, prices, and calls-to-action sit inside comic speech bubbles or jagged starbursts, complete with black outlines and halftone tails.",
          "ko": "라벨과 가격, 행동 유도 문구가 검은 윤곽선의 만화 말풍선이나 뾰족한 스타버스트 배지 안에 배치됨."
        }
      },
      {
        "id": "flat-matte-fills",
        "role": "variable",
        "name": {
          "en": "Flat matte color planes",
          "ko": "그래디언트 없는 단색 평면"
        },
        "facet": "surface",
        "description": {
          "en": "Shadows come from halftone dots, not gradients; large areas are a single solid color with hard edges, preserving the screen-printed read.",
          "ko": "음영은 그래디언트 대신 망점으로만 표현하며 넓은 면은 선명한 단색 평면을 유지함."
        }
      },
      {
        "id": "squiggle-geometry",
        "role": "avoid",
        "name": {
          "en": "80s squiggle geometry",
          "ko": "80년대 물결선 추상 패턴 지양"
        },
        "facet": "geometry",
        "description": {
          "en": "All-over Memphis squiggles, triangles, and dots-for-pattern remove the narrative, newsstand-specific imagery that makes Pop Art Pop Art.",
          "ko": "80년대 물결선이나 흩뿌려진 추상 패턴은 60년대 팝아트 서사성을 흐리므로 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "memphis",
      "name": "Memphis",
      "because": {
        "en": "This is Pop Art because the imagery is narrative and mass-media — comic panels, product labels, celebrity faces — shaded with Ben-Day dots and ringed by thick black outlines.",
        "ko": "구별 이유: 60년대 대중매체 광고와 신문 만화책 시각 언어 — 벤데이 망점(Ben-Day dots), 만화 컷 프레임, 두꺼운 검은 윤곽선, 원색 및 핫핑크 채우기, 말풍선(Speech balloon)으로 구성되었으므로 팝 아트에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Memphis if the comic panels and product faces were replaced by 1980s toy geometry — squiggles, triangles, dots-as-allover-pattern on a white ground — with no newsstand subject matter at all.",
        "ko": "변경 조건: 만화 컷과 대중 상표가 사라지고 80년대 지그재그 물결선, 흩뿌려진 컨페티 삼각형, 바테리 패턴으로 바뀌면 멤피스(Memphis)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface as Pop Art. Canvas: a white #ffffff comic-page ground covered with a Ben-Day halftone dot layer — radial-gradient(#000 18%, transparent 20%) with background-size: 6px 6px. Layout: break the page into rectangular comic panels with 3px solid #000000 gutters and borders. Color palette: flat opaque fills only — #ff2a2a red, #ffd500 yellow, #0066ff blue, #ff1493 hot pink, #00e5ff cyan; no gradients, no blur, no transparency. Every interactive element gets a 3–4px solid #000000 outline and, where appropriate, a hard offset shadow like box-shadow: 5px 5px 0 #000. Type: heavy condensed display sans for headlines (Impact, Haettenschweiler, 'Arial Narrow', sans-serif; weight 800–900), with body text in a plain sans-serif. Imagery: borrow from mass media — product labels, celebrity portraits, comic panels, speech bubbles, starburst badges — and shade large shapes with the halftone dot pattern. Interactions: buttons press flat into their offset shadow (transform: translate(5px,5px) and box-shadow: none on active), and starbursts can rotate a few degrees on hover. Keep long text on solid color blocks, never directly on the halftone ground. Do not drift into Memphis; the decisive difference is that Pop Art is newsstand-narrative (comics, ads, celebrities) while Memphis is abstract 80s pattern geometry. Preserve 4.5:1 text contrast on every solid fill (black text on yellow passes; white text on cyan needs checking) and honor prefers-reduced-motion.",
      "ko": "팝 아트(Pop Art) 스타일을 적용합니다. 정의 신호: 벤데이 망점(Ben-Day halftone dots) 도트 배경, 만화책 인쇄 스타일의 두꺼운 검은 윤곽선(2.5~4px), 만화 컷 레이아웃 그리드, 원색 및 핫핑크/시안 단색 채우기, 만화 말풍선 및 뾰족한 스타버스트 배지입니다. 벤데이 망점 배경 위에 본문 텍스트를 직접 배치하지 않고 단색 패널을 깔아 가독성(4.5:1)을 보장합니다."
    },
    "accessibility": {
      "en": "The Ben-Day dot ground is decorative: never place body text directly on it — set text on solid color blocks with measured 4.5:1 contrast. Small halftone dots can shimmer or moiré for sensitive viewers, so keep dot scale at or above 6px and reduce their density behind content.\n\nHeavy black outlines and saturated primaries can vibrate when paired edge-to-edge; avoid red-on-blue or cyan-on-pink text blocks, and never use color alone to signal an interactive state — pair it with an outline offset or icon change.\n\nComic display type removes word-shape cues and should stay short; keep body copy, labels, and any functional text in a plain sans-serif, with a visible focus indicator that is thicker than the decorative 3px border.",
      "ko": "망점(Halftone dots) 패턴 위에 본문 텍스트를 직접 올리지 말고 단색 패널 위에 배치할 것.\n화려한 망점과 원색의 대비 속에서 키보드 포커스 링을 선명히 보장함."
    },
    "a11yAndMisuse": {
      "en": "The Ben-Day dot ground is decorative: never place body text directly on it — set text on solid color blocks with measured 4.5:1 contrast. Small halftone dots can shimmer or moiré for sensitive viewers, so keep dot scale at or above 6px and reduce their density behind content.\n\nHeavy black outlines and saturated primaries can vibrate when paired edge-to-edge; avoid red-on-blue or cyan-on-pink text blocks, and never use color alone to signal an interactive state — pair it with an outline offset or icon change.\n\nComic display type removes word-shape cues and should stay short; keep body copy, labels, and any functional text in a plain sans-serif, with a visible focus indicator that is thicker than the decorative 3px border.",
      "ko": "망점(Halftone dots) 패턴 위에 본문 텍스트를 직접 올리지 말고 단색 패널 위에 배치할 것.\n화려한 망점과 원색의 대비 속에서 키보드 포커스 링을 선명히 보장함."
    },
    "origin": {
      "en": "The term 'Pop Art' was coined by British critic Lawrence Alloway around 1955 for the Independent Group — artists such as Richard Hamilton and Eduardo Paolozzi who were collaging American advertising and comic strips in London in the early 1950s. The movement crossed to the United States in the early 1960s, where Andy Warhol's Campbell's Soup Cans (1962) and Marilyn silkscreens, Roy Lichtenstein's enlarged comic panels with hand-painted Ben-Day dots, and Claes Oldenburg's soft consumer sculptures defined its mass-media vocabulary. It peaked as a mainstream avant-garde force through the mid-1960s and has been repeatedly revived in graphic and UI design as shorthand for playful consumer-culture commentary.",
      "ko": "1950년대 영국 및 미국에서 대중 소비문화의 창궐과 함께 시작된 현대 미술 사조입니다."
    },
    "meta": {}
  },
  {
    "slug": "surrealism",
    "name": {
      "en": "Surrealism",
      "ko": "초현실주의"
    },
    "tagline": {
      "en": "Surrealism treats the interface as a dream canvas: recognizable objects are placed in impossible relationships — clocks melt and drape over edges, eyes float in soft gradients, solids breathe with slow morphing motion. The palette is hushed and lunar rather than neon, the lighting is diffuse and uncanny, and the composition follows the logic of the subconscious rather than the grid. It borrows its name from the 1924 art movement, but as a UI style it is a contemporary mood: the screen as a lucid dream.",
      "ko": "꿈속의 환상, 왜곡된 중력과 물체, 살바도르 달리 스타일의 비현실적 몽환적 공간 연출"
    },
    "scope": {
      "en": "Scope: This entry covers the visual language of dream logic, melting forms, floating symbolic objects, and soft uncanny gradients in interface design. It is not the same as the historical Surrealist art movement, nor is it vaporwave's 80s/90s consumer nostalgia, cyberpunk's neon dystopia, or the occult strand of maximalist digital collage.",
      "ko": "범위: 무의식과 꿈의 세계를 탐구하는 초현실주의 미술을 반영한 디지털 아트 스타일입니다."
    },
    "aliases": {
      "en": [
        "that dreamy ui with melting shapes and floating eyes",
        "soft gradient interfaces that feel like a lucid dream",
        "the art style where objects melt and gravity doesn't work",
        "mysterious surreal collage with eyes and clouds",
        "ui that looks like a dali painting crossed with a music app",
        "pastel dreamscape with impossible floating things",
        "salvador dali melting clocks",
        "floating eyes surreal dreamscape",
        "lucid dream aesthetic"
      ],
      "ko": [
        "살바도르 달리 스타일의 몽환적 초현실주의 UI",
        "녹아내리는 시계와 부유하는 눈동자 오브제",
        "은은한 달빛 은은한 파스텔 그래디언트",
        "중력을 거스르는 꿈속 몽환적 가상 공간",
        "루시드 드림 감성의 초현실적 콜라주",
        "살바도르 달리 초현실주의",
        "녹아내리는 시계와 부유하는 눈동자",
        "몽환적 꿈속 루시드 드림"
      ]
    },
    "signals": [
      {
        "id": "melting-forms",
        "role": "defining",
        "name": {
          "en": "Melting and flowing forms",
          "ko": "녹아내리고 흘러내리는 오가닉 형태"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges drip, sag, and re-solidify like soft wax or Dalí's clocks; border-radius becomes an organic 40%/60%/70% blob, and rigid rectangles look out of place.",
          "ko": "달리의 시계처럼 모서리가 양촛물처럼 흘러내리고 녹아내린 오가닉 곡률(border-radius: 40% 60% 70% 30%) 형태."
        }
      },
      {
        "id": "floating-objects",
        "role": "defining",
        "name": {
          "en": "Gravity-defying floating objects",
          "ko": "중력을 거스르는 공중 부유 오브젝트"
        },
        "facet": "layout",
        "description": {
          "en": "Eyes, clocks, clouds, keys, or body parts hover at different depths with no logical support, casting soft diffuse shadows rather than resting on surfaces.",
          "ko": "눈동자, 시계, 구름, 열쇠 등이 공중에 떠 있어 부드러운 은은한 그림자를 드리움."
        }
      },
      {
        "id": "soft-gradients",
        "role": "defining",
        "name": {
          "en": "Soft lunar gradients",
          "ko": "은은한 달빛 파스텔 그래디언트"
        },
        "facet": "color",
        "description": {
          "en": "Backgrounds wash from lavender #c8b6e2 through peach #f4c7b0 to pale blue #a8d5e5, desaturated and glowing, never the loud neon of vaporwave or cyberpunk.",
          "ko": "라벤더(#c8b6e2), 피치(#f4c7b0), 연한 푸른색으로 이어지는 은은하게 빛나는 차분한 파스텔 배경."
        }
      },
      {
        "id": "dream-collage",
        "role": "defining",
        "name": {
          "en": "Dream collage and impossible combinations",
          "ko": "비현실적 상징의 꿈속 콜라주"
        },
        "facet": "imagery",
        "description": {
          "en": "A clock drapes over a cloud, an eye peers from inside a button, a fish swims through the sky — the imagery is symbolic and deliberately irrational.",
          "ko": "구름에 걸쳐진 시계, 버튼 안에서 바라보는 눈동자 등 비이성적이고 상징적인 이미지 결합."
        }
      },
      {
        "id": "subconscious-symbols",
        "role": "supporting",
        "name": {
          "en": "Subconscious symbols",
          "ko": "무의식의 무의식적 상징 모티프"
        },
        "facet": "imagery",
        "description": {
          "en": "Eyes, keys, doors, mirrors, moons, and disembodied hands recur as motifs; they read as dream symbols rather than functional icons.",
          "ko": "눈동자, 열쇠, 문, 거울, 달, 허공의 손 등 무의식을 상징하는 반복적인 모티프."
        }
      },
      {
        "id": "uncanny-lighting",
        "role": "supporting",
        "name": {
          "en": "Diffuse uncanny lighting",
          "ko": "묘한 분위기의 몽환적 조명"
        },
        "facet": "surface",
        "description": {
          "en": "Shadows are long, soft, and often cast in the wrong direction; specular highlights feel like moonlight or candlelight rather than a single coherent sun.",
          "ko": "그림자가 부드럽고 길게 드리워지며 달빛이나 촛불처럼 은은하고 기묘한 조명 효과를 띰."
        }
      },
      {
        "id": "slow-morph",
        "role": "supporting",
        "name": {
          "en": "Slow liquid morphing",
          "ko": "천천히 호흡하는 유체 모핑 애니메이션"
        },
        "facet": "motion",
        "description": {
          "en": "Animations breathe, drift, and melt over 6–12 seconds with easing that feels viscous; nothing snaps or clicks like a machine.",
          "ko": "요소들이 6~12초 주기로 천천히 공중에 떠다니며 흐르는 유체 호흡 모션을 보여줌."
        }
      },
      {
        "id": "digital-decay",
        "role": "avoid",
        "name": {
          "en": "VHS glitch and 80s consumer debris",
          "ko": "VHS 글리치 및 80년대 레트로 소비재 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Scanlines, chromatic aberration, katakana, Windows chrome, and mall-palm sunsets are the vocabulary of vaporwave; they break the fine-art dream spell here.",
          "ko": "스캔라인, 글리치, 가타카나, Windows 창은 베이퍼웨이브 영역이므로 순수 미술적 초현실주의와 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "vaporwave",
      "name": "Vaporwave",
      "because": {
        "en": "This is Surrealism because the space follows fine-art dream logic: melting clocks, floating eyes, soft diffused gradients, and impossible object combinations on a muted lunar palette. There is no Greek bust, no Windows 95 chrome, no VHS scanline, no katakana, and no 80s mall nostalgia.",
        "ko": "구별 이유: 꿈의 논리 — 녹아내리는 오가닉 형태, 공중에 부유하는 눈동자/시계 오브제, 은은한 달빛 파스텔 그래디언트, 비현실적인 초현실적 배치로 연출되었으므로 초현실주의에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become vaporwave if the palette shifted to pink-to-cyan #ff71ce/#01cdfe sunsets, the objects were replaced by marble busts and palm trees, and VHS scanlines and chromatic aberration were layered over the whole scene.",
        "ko": "변경 조건: 색상이 네온 핑크-시안 석양으로 바뀌고 오브제가 그리스 조각상과 야자수로 교체되며 VHS 스캔라인과 글리치가 얹어지면 베이퍼웨이브(Vaporwave)가 됨."
      }
    },
    "brief": {
      "en": "Create the interface in the spirit of Surrealism. Canvas: a soft lunar gradient background running lavender #c8b6e2 through peach #f4c7b0 to pale blue #a8d5e5, optionally with a faint parchment texture. Defining signals: geometry melts — use organic border-radius like 40% 60% 70% 30% / 40% 50% 60% 50% for cards and buttons so edges feel like warm wax; objects float at impossible depths with soft diffuse shadows (box-shadow: 0 18px 40px rgba(45,36,56,.25)) rather than resting on shelves; imagery is dream-collage — clocks draping over edges, disembodied eyes, clouds, keys, moons — rendered as flat symbolic shapes or inline SVG. Color: keep it desaturated and glowing — add misty creams #f5f0e6, muted gold #d4af37, and deep shadow #2d2438; avoid neon pink/cyan and chrome. Typography: choose an elegant high-contrast serif (or a refined sans with generous letter-spacing) for titles; body text stays small and unobtrusive so the dream imagery dominates. Motion: slow liquid morphing and floating — 6–12s ease-in-out loops, viscous transitions, nothing mechanical; use @keyframes for gentle up/down drift and subtle scale breathing. Interactions: buttons should feel like pressing soft wax — small scale(.96) with a shadow collapse rather than a hard click. Do not drift into vaporwave: the decisive difference is the absence of 80s/90s consumer nostalgia, Greek busts, katakana, Windows chrome, VHS scanlines, and neon grids. Preserve readability by placing text on solid misty panels (#f5f0e6 at 92% opacity) over the gradient, keep text at 4.5:1 against those panels, and honor prefers-reduced-motion by disabling drift and morph loops.",
      "ko": "초현실주의(Surrealism) 스타일을 적용합니다. 정의 신호: 녹아내리는 양초 같은 오가닉 곡률 형태(border-radius: 40% 60% 70% 30%), 중력을 거스르고 부유하는 눈동자/시계 오브제, 은은한 라벤더-피치 달빛 그래디언트 배경, 무의식적 비현실 상징 콜라주, 천천히 호흡하는 유체 모핑 애니메이션입니다. 파스텔 그래디언트 위 텍스트 가독성을 위해 단색 미스티 패널(#f5f0e6)을 받치고, 부유 애니메이션에 prefers-reduced-motion 대응을 제공합니다."
    },
    "accessibility": {
      "en": "The soft gradient background and symbolic imagery are central to the mood but hostile to text legibility: place all body text and controls on solid or near-solid misty panels (#f5f0e6 at 92% opacity or higher) and verify 4.5:1 against them, not against the gradient.\n\nSlow drift and morph animations are load-bearing for the dreamlike atmosphere, but they can trigger vestibular issues; respect prefers-reduced-motion by removing continuous floating, scaling, and morphing, and keep any remaining motion subtle and non-repeating.\n\nSymbolic eyes, keys, and floating objects are decorative in this UI vocabulary; ensure functional controls have clear labels, focus indicators distinct from the dream imagery, and never rely on surreal juxtapositions alone to convey state or action.",
      "ko": "유형화된 녹는 형태와 녹아내리는 카드 모서리가 실제 버튼의 클릭 영역을 왜곡하지 않도록 hit area 확보.\n부유 애니메이션 및 형상 변형 루프는 prefers-reduced-motion 시 정지."
    },
    "a11yAndMisuse": {
      "en": "The soft gradient background and symbolic imagery are central to the mood but hostile to text legibility: place all body text and controls on solid or near-solid misty panels (#f5f0e6 at 92% opacity or higher) and verify 4.5:1 against them, not against the gradient.\n\nSlow drift and morph animations are load-bearing for the dreamlike atmosphere, but they can trigger vestibular issues; respect prefers-reduced-motion by removing continuous floating, scaling, and morphing, and keep any remaining motion subtle and non-repeating.\n\nSymbolic eyes, keys, and floating objects are decorative in this UI vocabulary; ensure functional controls have clear labels, focus indicators distinct from the dream imagery, and never rely on surreal juxtapositions alone to convey state or action.",
      "ko": "유형화된 녹는 형태와 녹아내리는 카드 모서리가 실제 버튼의 클릭 영역을 왜곡하지 않도록 hit area 확보.\n부유 애니메이션 및 형상 변형 루프는 prefers-reduced-motion 시 정지."
    },
    "origin": {
      "en": "Surrealism began as an art movement in 1924 when poet André Breton published the Surrealist Manifesto in Paris, channeling Sigmund Freud's ideas about the unconscious and dreams; Salvador Dalí's 1931 painting The Persistence of Memory, with its melting clocks, and René Magritte's visual paradoxes became its most recognizable images. As a UI aesthetic it is a 21st-century digital mood rather than a formal school — contemporary portfolios and editorial sites borrow the dream-logic collage, soft gradients, and floating symbolic objects to evoke introspection and the uncanny.",
      "ko": "1920년대 파리에서 앙드레 브르통의 초현실주의 선언과 함께 시작되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "art-nouveau",
    "name": {
      "en": "Art Nouveau",
      "ko": "아르누보"
    },
    "tagline": {
      "en": "Art Nouveau is the late-19th-century 'new art' that replaced historical revivalism with living, asymmetrical lines drawn from plants, flowers, and whiplash tendrils. Its interfaces and graphics favor earthy jewel tones, oxidized gold, hand-drawn vines, and ornate serif lettering that seems to grow out of the page rather than sit on it. It flourished from roughly 1890 to 1910 and was eclipsed by the machine geometry of Art Deco.",
      "ko": "식물의 유기적 덩굴선, 우아한 곡선 라인, 자연 모티프의 화려하고 센슈얼한 1900년대 양식"
    },
    "scope": {
      "en": "Scope: This entry covers the Art Nouveau visual language as it appears in UI, illustration, and typography. The overlapping Arts & Crafts movement and Japonism share some DNA but are treated separately; Art Deco is the closest neighbor and the main source of confusion.",
      "ko": "범위: 아르누보(신예술) 특유의 유기적 식물 곡선 프레임 스타일을 다룹니다."
    },
    "aliases": {
      "en": [
        "that old poster style with long flowing hair and flowers around the border",
        "curvy plant-like borders and swirly gold lettering",
        "the style that looks like vines grew into the frame",
        "organic whiplash lines and olive green with gold accents",
        "antique ornamental typography with floral decorations",
        "alphonse mucha whiplash vines",
        "organic plant curved gold frames",
        "turn of century flora art"
      ],
      "ko": [
        "1900년대 알폰스 무샤 감성의 아르누보",
        "식물 덩굴선, 꽃 모티프, 유기적 곡선 테두리",
        "올리브 그린, 딥 와인, 앤티크 골드 팔레트",
        "우아한 당초문 곡선 프레임과 세리프 서체",
        "자연 유기체 선율의 오가닉 디자인",
        "알폰스 무샤 아르누보 덩굴선",
        "식물 모티프 우기적 곡선 프레임",
        "1900년대 신예술 아름다움"
      ]
    },
    "signals": [
      {
        "id": "whiplash-curves",
        "role": "defining",
        "name": {
          "en": "Whiplash curves",
          "ko": "식물 줄기 형태의 유기적 당초문 곡선"
        },
        "facet": "geometry",
        "description": {
          "en": "Long, unbroken S- and C-curves that snap back on themselves like stems in the wind; borders and rules follow a single flowing gesture rather than straight edges.",
          "ko": "바람에 흔들리는 식물 줄기처럼 길고 연속적인 S자/C자 유기적 곡선 테두리."
        }
      },
      {
        "id": "organic-ornament",
        "role": "defining",
        "name": {
          "en": "Organic ornament",
          "ko": "식물, 꽃, 깃털 등 자연물 모티프 장식"
        },
        "facet": "imagery",
        "description": {
          "en": "Vines, lilies, insects, feathers, and hair rendered as flat linear decoration; the motif is a recognizable plant or creature, not an abstract geometric icon.",
          "ko": "덩굴, 백합, 곤충, 깃털, 여인의 휘날리는 머리칼 등이 평면 라인 장식으로 표현됨."
        }
      },
      {
        "id": "earthy-jewel-palette",
        "role": "defining",
        "name": {
          "en": "Earthy jewel palette",
          "ko": "자연의 보석 및 앤티크 골드 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Muted olive, sage, terracotta, oxidized gold, wine red, and dusty teal; color feels mineral or botanical, never chrome or neon.",
          "ko": "차분한 올리브, 세이지, 테라코타, 앤티크 골드(#bfa15f), 딥 와인 레드(#7a2d3b) 식물성 색채."
        }
      },
      {
        "id": "ornate-serif-typography",
        "role": "defining",
        "name": {
          "en": "Ornate serif typography",
          "ko": "우아하게 휘어지는 장식 세리프 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms with curling terminals, high stroke contrast, and decorative inline strokes; headings read like hand-cut signage rather than machine type.",
          "ko": "글자 끝이 부드럽게 휘어지는 수공예 느낌의 우아한 세리프 디스플레이 서체."
        }
      },
      {
        "id": "asymmetrical-composition",
        "role": "supporting",
        "name": {
          "en": "Asymmetrical composition",
          "ko": "자연스러운 비대칭 프레임 구도"
        },
        "facet": "layout",
        "description": {
          "en": "Layouts drift around a vertical axis rather than locking into strict symmetry; even frames are thicker on one side or curl away from center.",
          "ko": "엄격한 대칭을 피하고 한쪽으로 유연하게 휘어지는 비대칭 식물 프레임 구도."
        }
      },
      {
        "id": "flat-pattern-depth",
        "role": "supporting",
        "name": {
          "en": "Flat pattern depth",
          "ko": "평면적 라인 중첩 및 골드 입체감"
        },
        "facet": "depth",
        "description": {
          "en": "Depth comes from overlapping flat motifs and gold-line relief, not from gradients, drop shadows, or 3D modeling.",
          "ko": "그림자나 그래디언트 대신 평면 라인의 중첩과 금빛 양각 라인으로 깊이감을 연출함."
        }
      },
      {
        "id": "cast-iron-line",
        "role": "supporting",
        "name": {
          "en": "Cast-iron contours",
          "ko": "주철 및 스테인드글라스 윤곽선"
        },
        "facet": "surface",
        "description": {
          "en": "Heavy contours derived from cast-iron and stained-glass leading hold the flowing shapes together, giving the surface a crafted, tactile outline.",
          "ko": "주철 공예 및 스테인드글라스 테두리에서 영감을 받은 검붉은 윤곽선."
        }
      },
      {
        "id": "hard-edged-geometry",
        "role": "avoid",
        "name": {
          "en": "Hard-edged geometry",
          "ko": "각진 기계적 기하학 지양"
        },
        "facet": "geometry",
        "description": {
          "en": "Straight lines, exact circles, and repeating chevrons belong to Art Deco and industrial modernism; they break the organic spell.",
          "ko": "직선, 완벽한 원, 계단식 셰브론은 아르데코 영역이므로 아르누보의 유기적 선율과 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "art-deco",
      "name": "Art Deco",
      "because": {
        "en": "This is Art Nouveau because the rhythm is organic and asymmetrical — vines, stems, and hairlines curve continuously, and the decoration is derived from living forms rather than engineered geometry.",
        "ko": "구별 이유: 19세기 말 신예술 — 식물 덩굴선(Whiplash curves), 우아한 유기적 당초문 곡선 프레임, 올리브/와인/앤티크 골드 파스텔 팔레트, 장식적인 세리프 서체로 연출되었으므로 아르누보에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Art Deco if the curves were replaced by stepped zigzags, sunbursts, and mirror symmetry, the palette switched to lacquered black and chrome, and the lettering squared into block geometry.",
        "ko": "변경 조건: 유기적 곡선이 사라지고 직각 계단식 셰브론, 방사형 선버스트, 엄격한 대칭, 칠흑색-금빛 대비로 바뀌면 아르데코(Art Deco)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Art Nouveau. Defining signals: continuous whiplash curves for every border and rule; flat organic ornament — vines, lilies, insects, feathers — as the primary decoration; an earthy jewel palette (sage #9fa86b, terracotta #c26a4d, wine red #7a2d3b, oxidized gold #bfa15f, cream ground #f7f3e8); ornate serif display type with curling terminals and inline strokes. Keep the specific plant motif and exact palette flexible. Use inline SVG paths for vine borders and corner flourishes, stroke-width 1.5–2px for hairline tendrils and 4–6px for cast-iron contours. Set type in a high-contrast serif with decorative capitals (font-family: Georgia, 'Times New Roman', serif; letter-spacing: 0.02em; text-transform: capitalize for headings). Build depth by overlapping flat shapes and gold lines, never with gradients or drop shadows. Buttons and cards should have asymmetrical frames that curl at the corners like stems. Do not drift into Art Deco; the decisive difference is that every line here is a living curve — replace curves with zigzags, sunbursts, or mirror symmetry and the style collapses. Preserve 4.5:1 text contrast on the cream ground (wine red and deep olive pass; pale gold does not), visible focus indicators outside the decorative frame, and reduced-motion support for any animated tendrils.",
      "ko": "아르누보(Art Nouveau) 스타일을 적용합니다. 정의 신호: 연속적인 식물 당초문 유기적 곡선 테두리, 백합/덩굴/깃털 모티프 장식, 올리브/세이지/테라코타/앤티크 골드(#bfa15f)/딥 와인(#7a2d3b) 팔레트, 글자 끝이 휘어지는 우아한 세리프 서체입니다. 덩굴 프레임 장식에 aria-hidden='true'를 지정하고, 크림색 바탕 위 와인/올리브 텍스트 명암비(4.5:1) 및 포커스 링을 선명히 보장합니다."
    },
    "accessibility": {
      "en": "Ornate serif lettering and dense vine borders can mangle readability: keep body text in a clean high-contrast serif at 16px minimum, and reserve the most decorative letterforms for large headings only.\n\nDecorative borders often attract the eye away from interactive controls; place focus indicators as a clear, high-contrast outline offset outside the ornate frame rather than competing with the gold linework.\n\nAvoid rapid animated whiplash curves and flashing metallic highlights under prefers-reduced-motion; static vines are already unmistakably Art Nouveau.",
      "ko": "유기적 덩굴 식물 곡선 라인이 포커스 표시를 가리지 않도록 방지.\n섬세한 곡선 타이포그래피는 읽기 쉬운 크기로 제공."
    },
    "a11yAndMisuse": {
      "en": "Ornate serif lettering and dense vine borders can mangle readability: keep body text in a clean high-contrast serif at 16px minimum, and reserve the most decorative letterforms for large headings only.\n\nDecorative borders often attract the eye away from interactive controls; place focus indicators as a clear, high-contrast outline offset outside the ornate frame rather than competing with the gold linework.\n\nAvoid rapid animated whiplash curves and flashing metallic highlights under prefers-reduced-motion; static vines are already unmistakably Art Nouveau.",
      "ko": "유기적 덩굴 식물 곡선 라인이 포커스 표시를 가리지 않도록 방지.\n섬세한 곡선 타이포그래피는 읽기 쉬운 크기로 제공."
    },
    "origin": {
      "en": "Art Nouveau flourished roughly 1890–1910, taking its name from Siegfried Bing's Paris gallery Maison de l'Art Nouveau (opened 1895). Belgian architect Victor Horta's Hôtel Tassel in Brussels (1893) and French architect Hector Guimard's Paris Métro entrances (c. 1900) are canonical built works; Czech illustrator Alphonse Mucha's posters and French designer Louis Majorelle's furniture defined its graphic and decorative vocabulary. It faded as Art Deco and modernism rose in the 1910s.",
      "ko": "1890~1910년 유럽 전역에서 자연 형태를 모티프로 번성했던 유기적 장식 양식입니다."
    },
    "meta": {}
  },
  {
    "slug": "holographic",
    "name": {
      "en": "Holographic",
      "ko": "홀로그래픽"
    },
    "tagline": {
      "en": "Holographic UI looks like light hitting rainbow foil: a metallic silver base explodes into shifting cyan, magenta, violet, and gold, with pastel pink and lavender shimmers sliding across the surface. It borrows from holographic foil printing and oil-slick diffraction, not glass or depth — the effect is flat, reflective, and synthetic. The style became the face of late-2010s unicorn branding, beauty-tech packaging, and year-in-review campaigns that wanted to feel futuristic and celebratory.",
      "ko": "보는 각도에 따라 변하는 무지개빛 홀로그램, 은은한 메탈릭 광택과 신비로운 빛 반사 레트로 테크"
    },
    "scope": {
      "en": "Scope: This entry covers the digital visual style inspired by holographic foil and oil-slick iridescence. It is distinct from glassmorphism (which needs transparency and blur) and from the metallic-chrome Y2K look (which favors machined gradients and gel plastic rather than rainbow diffraction).",
      "ko": "범위: 반사광과 프리즘 무지개 효과를 중심으로 한 미학적 스타일입니다."
    },
    "aliases": {
      "en": [
        "rainbow foil texture that shifts color when you tilt it",
        "ui that looks like unicorn makeup packaging",
        "oil slick gradient with silver metallic shine",
        "holographic sticker or credit card effect",
        "pastel pink purple cyan shimmer surface",
        "futuristic tech brand with rainbow gradients",
        "rainbow diffraction foil sheen",
        "unicorn holographic shimmer",
        "oil slick metallic shift"
      ],
      "ko": [
        "빛에 따라 무지개빛으로 변하는 홀로그래픽 포일",
        "은빛 메탈릭 바탕과 시안-마젠타 오일 슬릭",
        "유니콘 메이크업 및 영롱한 무지개 광택 패널",
        "프리즘 스티커 및 레트로 메탈릭 홀로그램",
        "미래지향적 라인과 영롱한 은빛 패널",
        "홀로그래픽 프리즘 무지개 포일",
        "시안 마젠타 오일 슬릭 반사광",
        "영롱한 실버 메탈릭"
      ]
    },
    "signals": [
      {
        "id": "oil-slick-gradients",
        "role": "defining",
        "name": {
          "en": "Oil-slick rainbow gradients",
          "ko": "오일 슬릭(Oil-slick) 프리즘 무지개 그래디언트"
        },
        "facet": "color",
        "description": {
          "en": "The surface cycles through saturated spectral hues — cyan #00f2ea, magenta #ff006e, violet #b967ff, gold #ffd700 — usually via conic or multi-stop linear gradients that mimic light diffraction.",
          "ko": "시안(#00f2ea), 마젠타(#ff006e), 바이올렛(#b967ff), 골드(#ffd700)로 이어지는 빛 회절 프리즘 그래디언트."
        }
      },
      {
        "id": "foil-silver-base",
        "role": "defining",
        "name": {
          "en": "Metallic silver foil base",
          "ko": "실버 메탈릭 포일 기판 표면"
        },
        "facet": "surface",
        "description": {
          "en": "A bright neutral mirror-like substrate sits beneath the rainbow, rendered with sharp white #ffffff specular highlights and cool grey #c4cfdc mid-tones.",
          "ko": "무지개빛 하단에 위치한 거울 같은 실버 포일 기판(#c4cfdc)과 선명한 흰색 하이라이트."
        }
      },
      {
        "id": "pastel-shimmer",
        "role": "defining",
        "name": {
          "en": "Pastel pink-cyan shimmer",
          "ko": "파스텔 핑크-시안 영롱한 광택 오버레이"
        },
        "facet": "color",
        "description": {
          "en": "Soft pastel overlights — pink #ffb3d9, lavender #c084fc, aqua #67e8f9 — float across the foil like secondary reflections, usually at 40–70% opacity.",
          "ko": "핑크(#ffb3d9), 라벤더(#c084fc), 아쿠아(#67e8f9)의 파스텔 은은한 빛이 표면 위를 지나감."
        }
      },
      {
        "id": "reflective-edges",
        "role": "supporting",
        "name": {
          "en": "Hairline chrome edges",
          "ko": "미세한 메탈릭 크롬 테두리 가장자리"
        },
        "facet": "geometry",
        "description": {
          "en": "Borders and dividers are 1px metallic lines with a hard highlight on one side and a darker grey #8a93a3 on the other, mimicking a pressed foil edge.",
          "ko": "1px의 금속성 정교한 테두리가 빛을 받아 정교한 포일 스탬프 단면을 나타냄."
        }
      },
      {
        "id": "sheen-animation",
        "role": "supporting",
        "name": {
          "en": "Slow sweeping sheen",
          "ko": "천천히 지나가는 광택 스윕 모션"
        },
        "facet": "motion",
        "description": {
          "en": "A subtle animated gradient or white glare sweeps across the surface every 3–6 seconds, reinforcing the reflective foil illusion.",
          "ko": "3~6초 주기로 반사광 하이라이트가 표면을 부드럽게 지나가 홀로그램 착시를 강화함."
        }
      },
      {
        "id": "dark-field-canvas",
        "role": "variable",
        "name": {
          "en": "Dark field canvas",
          "ko": "어두운 딥 블랙 바탕 캔버스"
        },
        "facet": "layout",
        "description": {
          "en": "The style is usually staged on near-black #0a0a0f or deep charcoal so the metallic rainbow reads at full saturation; light backgrounds flatten it.",
          "ko": "무지개 빛 회절이 선명히 드러나도록 딥 블랙(#0a0a0f) 바탕 위에 주로 연출됨."
        }
      },
      {
        "id": "frosted-blur",
        "role": "avoid",
        "name": {
          "en": "Frosted blur panels",
          "ko": "반투명 블러 패널 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Translucent blurred cards floating over wallpaper are the signature of glassmorphism; holographic surfaces are opaque and reflective, not see-through.",
          "ko": "반투명 블러 패널은 글래스모피즘 영역이므로 홀로그래픽의 불투명 반사 포일과 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "glassmorphism",
      "name": "Glassmorphism",
      "because": {
        "en": "This is Holographic because the surface behaves like reflective foil — rainbow iridescence, metallic sheen, and color-shifting highlights — rather than relying on transparency and blur for depth.",
        "ko": "구별 이유: 빛의 회절 현상을 모사한 실버 메탈릭 기판, 시안-마젠타-퍼플 오일 슬릭(Oil-slick) 무지개 conic 그래디언트, 파스텔 반사 광택으로 연출되었으므로 홀로그래픽에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become glassmorphism if the rainbow foil were replaced by translucent white panels floating over a decorative wallpaper with backdrop-filter blur as the main material.",
        "ko": "변경 조건: 무지개빛 반사 포일이 사라지고 배경 위로 반투명 흰색 패널이 부유하며 backdrop-filter 블러가 주재질이 되면 글래스모피즘(Glassmorphism)이 됨."
      }
    },
    "brief": {
      "en": "Build the surface as a sheet of holographic foil on a near-black canvas (#0a0a0f). Start with a metallic silver base: linear-gradient(135deg, #ffffff 0%, #c4cfdc 30%, #8a93a3 50%, #e6eaf0 70%, #ffffff 100%). Layer the oil-slick rainbow over it using conic-gradient(from 180deg, #00f2ea, #b967ff, #ff006e, #ffd700, #67e8f9, #00f2ea) or a 280px-wide multi-stop linear gradient at 115deg. Add pastel shimmer overlays: radial-gradient(120% 80% at 20% 30%, rgba(255,179,217,.55), transparent 50%) plus a cyan counterpart at 80% 70%. Use hairline chrome borders: 1px solid rgba(255,255,255,.55) with an inset 1px rgba(255,255,255,.25) highlight. Keep typography modern — SF Pro, Inter, or system sans at 500–600 weight, white (#ffffff) or near-white (#f2f4f8) text. Animate the sheen with a 4s ease-in-out infinite gradient-position shift. Buttons and cards should feel like stamped foil, not glass: zero backdrop-filter blur, no translucent panels, no soft drop shadows. The decisive guardrail: remove the rainbow iridescence and metallic base and the style collapses — it is not glassmorphism.",
      "ko": "홀로그래픽(Holographic / Rainbow Foil) 스타일을 적용합니다. 정의 신호: 시안(#00f2ea), 마젠타(#ff006e), 바이올렛(#b967ff)으로 이어지는 프리즘 오일 슬릭 그래디언트, 실버 메탈릭 기판 표면, 파스텔 핑크/아쿠아 영롱한 광택 오버레이, 1px 정교한 크롬 테두리, 딥 블랙(#0a0a0f) 바탕입니다. 광택 스윕 모션에 prefers-reduced-motion 대응을 제공하고 무지개빛 포일 위 텍스트 가독성을 위해 불투명 패널 및 4.5:1 명암비를 보장합니다."
    },
    "accessibility": {
      "en": "Rainbow-on-silver text often fails contrast: the lightest foil regions can wash white text to below 4.5:1, so either keep text over the dark canvas or place it on a solid scrim behind the foil.\n\nThe slow shimmer animation is decorative but can trigger vestibular issues or distract attention; honor prefers-reduced-motion by freezing the gradient sweep.\n\nHolographic surfaces are inherently chromatic and busy; do not rely on color alone to convey state — pair hue changes with icons, labels, or outline changes so the UI remains usable for color-vision-deficient users.",
      "ko": "무지개빛 반사 및 그래디언트 변화 속에서 텍스트 명암비가 계속 바뀌므로 배경에 불투명 패널 배치.\n광택 변형 애니메이션 정지 옵션 지원."
    },
    "a11yAndMisuse": {
      "en": "Rainbow-on-silver text often fails contrast: the lightest foil regions can wash white text to below 4.5:1, so either keep text over the dark canvas or place it on a solid scrim behind the foil.\n\nThe slow shimmer animation is decorative but can trigger vestibular issues or distract attention; honor prefers-reduced-motion by freezing the gradient sweep.\n\nHolographic surfaces are inherently chromatic and busy; do not rely on color alone to convey state — pair hue changes with icons, labels, or outline changes so the UI remains usable for color-vision-deficient users.",
      "ko": "무지개빛 반사 및 그래디언트 변화 속에서 텍스트 명암비가 계속 바뀌므로 배경에 불투명 패널 배치.\n광택 변형 애니메이션 정지 옵션 지원."
    },
    "origin": {
      "en": "Holographic foil as a physical finishing technique dates back to the 1980s, when micro-embossed diffraction patterns on metallic film began appearing on credit cards, concert tickets, and luxury packaging. The digital UI translation surfaced in the late 2010s, popularized by unicorn/startup branding, beauty-tech packaging, and year-in-review campaigns like Spotify Wrapped, which used rainbow-foil typography and iridescent cards to signal celebration and futurism.",
      "ko": "1980년대 홀로그램 스티커 및 보안 카드 표면 질감에서 유래되어 Y2K 및 모던 럭셔리 그래픽으로 정립되었습니다."
    },
    "meta": {}
  },
  {
    "slug": "isometric-3d",
    "name": {
      "en": "Isometric 3D",
      "ko": "아이소메트릭 3D"
    },
    "tagline": {
      "en": "Isometric 3D renders interface scenes as axonometric block worlds: three axes spaced 120° apart on the picture plane, parallel lines that never converge, and geometric solids built from cubes and extruded planes. It gives depth without perspective distortion, so a dashboard, city, or device cluster reads like a clean architectural model. The look surged in web illustration around 2017–2019 as 'isometric flat design' and remains a go-to language for explaining complex systems at a glance.",
      "ko": "30도 각도의 투시 없는 직교 투영으로 입체적인 건물, 디오라마, 공간 구성을 보여주는 3D 스타일"
    },
    "scope": {
      "en": "Scope: This entry covers the isometric visual treatment in UI and illustration — block scenes, axonometric angles, and clean geometric depth. It is not true perspective 3D, photorealistic rendering, or the soft rounded inflation of claymorphism.",
      "ko": "범위: 소조점 없는 등메트릭 3D 그래픽 및 가상 공간 UI 스타일입니다."
    },
    "aliases": {
      "en": [
        "ui that looks like a tiny isometric city or room",
        "blocky 3d interface with no perspective vanishing point",
        "the 30 degree angle tech illustration style",
        "dashboard made of floating cubes and platforms",
        "websites with those flat 3d isometric characters",
        "the geometric model look like simcity",
        "30 degree axonometric 3d model",
        "orthographic block city diorama",
        "simcity 3d layout"
      ],
      "ko": [
        "30도 등메트릭 직교 투영의 아이소메트릭 3D",
        "소조점 없이 펼쳐지는 3D 디오라마 공간",
        "아기자기한 3D 입체 블록과 부드러운 그림자",
        "심시티 느낌의 입체 건물 및 대시보드",
        "모듈형 입체 블록과 3D 일러스트 UI",
        "30도 등메트릭 직교 3D 블록",
        "소실점 없는 3D 디오라마 공간",
        "심시티 입체 건물 레이아웃"
      ]
    },
    "signals": [
      {
        "id": "30-degree-axonometric",
        "role": "defining",
        "name": {
          "en": "30° axonometric axes",
          "ko": "30도 각도의 등메트릭(Axonometric) 축"
        },
        "facet": "geometry",
        "description": {
          "en": "The three visible axes sit at 120° to one another on the picture plane, commonly drawn as 30° left and right from horizontal; parallel edges stay parallel forever.",
          "ko": "수평 기준 좌우 30도(120도 간격) 축을 형성하여 평행선이 소실점 없이 영원히 평행을 유지함."
        }
      },
      {
        "id": "orthographic-depth",
        "role": "defining",
        "name": {
          "en": "Orthographic, no vanishing point",
          "ko": "소실점 없는 직교 투영 (Orthographic)"
        },
        "facet": "depth",
        "description": {
          "en": "There is no perspective convergence — objects do not shrink with distance. A cube in the back is the same size as one in the front, keeping the scene measurable and diagram-like.",
          "ko": "원근감에 따른 원근 수축이 없어 앞쪽 블록과 뒤쪽 블록의 크기가 동일하게 정교한 청사진처럼 유지됨."
        }
      },
      {
        "id": "block-primitives",
        "role": "defining",
        "name": {
          "en": "Cube and block primitives",
          "ko": "정육면체 및 돌출 블록 구조"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms are built from clean extruded rectangles and cubes; surfaces are flat planes meeting at crisp edges, not organic blobs or smooth sculptural shapes.",
          "ko": "형태가 날카로운 각을 가진 돌출 사각형과 정육면체 블록들로 조립됨."
        }
      },
      {
        "id": "soft-cast-shadows",
        "role": "defining",
        "name": {
          "en": "Soft outer cast shadows",
          "ko": "공중 부유용 부드러운 외측 그림자"
        },
        "facet": "depth",
        "description": {
          "en": "Objects float above the ground on soft, diffuse drop shadows (e.g. box-shadow: 16px 24px 40px rgba(0,0,0,.18)) that anchor them in space without simulating a specific light source.",
          "ko": "블록들이 부드러운 아우터 드롭 섀도우(box-shadow: 16px 24px 40px rgba(0,0,0,.18))를 받으며 공중에 떠 있는 듯 연출됨."
        }
      },
      {
        "id": "flat-shaded-surfaces",
        "role": "defining",
        "name": {
          "en": "Flat-shaded surfaces",
          "ko": "각 면별 단색 섀딩 (Flat-shaded)"
        },
        "facet": "color",
        "description": {
          "en": "Each face is a single flat color or a clean gradient along one axis; there are no noisy textures, photorealistic materials, or complex lighting models.",
          "ko": "상단면, 좌측면, 우측면이 각각 각기 다른 명도의 단색(Sky top #7dd3fc, Left #38bdf8, Right #0ea5e9)으로 채워짐."
        }
      },
      {
        "id": "modular-scenes",
        "role": "supporting",
        "name": {
          "en": "Modular block scenes",
          "ko": "모듈형 입체 디오라마 공간"
        },
        "facet": "layout",
        "description": {
          "en": "Multiple block objects cluster into readable mini-worlds — a city, a workspace, a device farm — where position and stacking imply hierarchy.",
          "ko": "여러 블록들이 아기자기한 미니 도시, 건물, 디오라마 공간을 형성함."
        }
      },
      {
        "id": "illustrative-hero",
        "role": "supporting",
        "name": {
          "en": "Illustration-first usage",
          "ko": "일러스트 및 히어로 그래픽 중심"
        },
        "facet": "imagery",
        "description": {
          "en": "In UI the style usually appears in hero graphics, empty states, and onboarding; interactive controls themselves are rare, so the player reads as a placed model rather than a skeuomorphic device.",
          "ko": "주로 히어로 영역, 온보딩, 빈 상태 화면의 3D 일러스트로 활용되어 공간감을 선사함."
        }
      },
      {
        "id": "rounded-inflation",
        "role": "avoid",
        "name": {
          "en": "Rounded inflated volume",
          "ko": "둥근 점토 볼륨감 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Puffy rounded corners, inner shadows, and a soft modeling-clay feel push the work into claymorphism — the geometry here is sharp and extruded, not molded.",
          "ko": "통통하고 둥근 찰흙 형태와 내측 그림자는 클레이모피즘 영역이므로 날카로운 3D 직교 블록과 구분됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "claymorphism",
      "name": "Claymorphism",
      "because": {
        "en": "This is Isometric 3D because the depth comes from angular axonometric geometry — clean cubes, 30° axes, and outer cast shadows — rather than from rounded, inflated, clay-like volume.",
        "ko": "구별 이유: 30도 축의 등메트릭(Axonometric) 직교 투영 — 소조점 없이 평행선이 유지되는 깔끔한 3D 블록 건물, 디오라마, 외측 드롭 섀도우로 구성되었으므로 아이소메트릭 3D에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become claymorphism if the sharp geometric blocks were replaced with soft, rounded, independently colored blobs built from two inner shadows plus one soft outer shadow.",
        "ko": "변경 조건: 날카로운 기하학 블록이 푹신하고 둥근 찰흙 덩어리와 이중 내측 그림자의 점토 형태로 바뀌면 클레이모피즘(Claymorphism)이 됨."
      }
    },
    "brief": {
      "en": "Create the surface using Isometric 3D. Defining signals: axonometric projection with 30° left/right axes (rotateX(54.7356deg) rotateZ(45deg) in CSS or drawn as 120° axis spacing), zero perspective convergence; forms built from clean cubes and extruded rectangles with crisp edges. Palette: sky top faces #7dd3fc, left faces #38bdf8, right faces #0ea5e9, ground #f0f9ff, warm accents #f59e0b / #f472b6; type in a clean geometric sans (Inter, Spline Sans, or system-ui) at 12–14px with #0f172a. Depth: each block casts a soft diffuse outer shadow — box-shadow: 16px 24px 40px rgba(0,0,0,.18) — placed so objects read as floating above the ground; no inner shadows, no bevels, no perspective foreshortening. Layout: assemble a modular mini-scene (a tiny room, city block, or device cluster) where block position implies hierarchy; keep surfaces flat-shaded with one color per face or a single-axis gradient. Do not drift into claymorphism: the decisive difference is sharp geometry with outer cast shadows, not rounded inflated blobs with inner shadows. Preserve 4.5:1 text contrast on every colored face, visible focus states on any interactive block, and honor prefers-reduced-motion by disabling any isometric float/bob animation.",
      "ko": "아이소메트릭 3D(Isometric 3D) 스타일을 적용합니다. 정의 신호: 소실점 없는 30도 직교 투영(Axonometric projection), 정육면체 및 돌출 기하학 블록, 각 면별 단색 섀딩(Top #7dd3fc, Left #38bdf8, Right #0ea5e9), 공중 부유용 부드러운 아우터 드롭 섀도우(box-shadow: 16px 24px 40px rgba(0,0,0,.18)), 모듈형 디오라마 공간입니다. 둥근 찰흙 양감(클레이모피즘)으로 변하지 않도록 각진 기하학을 유지하며, 3D 면 위 텍스트 명암비(4.5:1) 및 부유 모션의 prefers-reduced-motion 대응을 준수합니다."
    },
    "accessibility": {
      "en": "Isometric scenes are read as diagrams, but text placed on angled faces can fail contrast and orientation tests. Keep functional text on the top (horizontal) face or on a flat overlay, and verify 4.5:1 against each face color.\n\nThe style relies on depth cues from shadow and position; in forced-colors mode or high-contrast themes those cues vanish — add borders or labels so the hierarchy does not collapse.\n\nMotion should be decorative only: any bobbing, parallax, or camera drift must respect prefers-reduced-motion and never be required to understand the interface state.",
      "ko": "3D 입체 블록의 개별 면 색상 위 텍스트 명암비를 면마다 4.5:1 이상 검증함.\n부유/둥둥 뜸 애니메이션 reduced-motion 지원."
    },
    "a11yAndMisuse": {
      "en": "Isometric scenes are read as diagrams, but text placed on angled faces can fail contrast and orientation tests. Keep functional text on the top (horizontal) face or on a flat overlay, and verify 4.5:1 against each face color.\n\nThe style relies on depth cues from shadow and position; in forced-colors mode or high-contrast themes those cues vanish — add borders or labels so the hierarchy does not collapse.\n\nMotion should be decorative only: any bobbing, parallax, or camera drift must respect prefers-reduced-motion and never be required to understand the interface state.",
      "ko": "3D 입체 블록의 개별 면 색상 위 텍스트 명암비를 면마다 4.5:1 이상 검증함.\n부유/둥둥 뜸 애니메이션 reduced-motion 지원."
    },
    "origin": {
      "en": "Isometric projection was formalized as a technical-drawing method in 1822 by the British engineer William Farish, and it became the standard for mechanical and architectural illustration because it preserves true proportions without perspective distortion. Video-game designers adopted it independently to show environment and action at once, from SimCity (1989) and Age of Empires (1997) to mobile titles like Monument Valley (2014). In UI and web design the 'isometric flat' illustration wave rose around 2017–2019 as landing pages and onboarding flows used block worlds to make complex products feel tangible.",
      "ko": "테크니컬 드로잉 및 고전 시뮬레이션 게임(심시티 등)에서 시작되어 모던 SaaS 일러스트 표준으로 안착했습니다."
    },
    "meta": {}
  },
  {
    "slug": "line-art",
    "name": {
      "en": "Line Art",
      "ko": "라인 아트"
    },
    "tagline": {
      "en": "Line Art renders an interface as a contour drawing: every control, container, and icon is built from a single-weight outline with no solid fill, like a technical illustration or monoline icon set blown up to UI scale. The line itself is the visual subject — not a border around a colored block, not decoration on top of a flat layout. It reads as precise, light, and almost schematic, as though the product were still a clean ink drawing on tracing paper.",
      "ko": "채색을 절제하고 섬세한 선(Line)의 굵기 차이와 면 구성만으로 미니멀하게 표현하는 시각 예술"
    },
    "scope": {
      "en": "Scope: This entry covers line-art UI as a finished visual style — uniform-stroke outlines, monoline icons, and wireframe-like surfaces where the contour is the form. It does not cover low-fidelity wireframes (which are placeholders, not a final look) nor line illustrations used only as decoration; here the entire interface must read as a single contour drawing.",
      "ko": "범위: 얇은 비주얼 스케치 라인과 굵은 펜 선을 활용한 가벼운 미니멀 라인아트입니다."
    },
    "aliases": {
      "en": [
        "outline-only ui where everything is one thin stroke",
        "wireframe-looking interface with no color fills",
        "monoline icons turned into whole buttons and cards",
        "technical drawing style ui made of clean black lines",
        "that vector line-art look with no shading",
        "single weight monoline outline",
        "hollow vector contour drawing",
        "clean line art UI"
      ],
      "ko": [
        "일정한 굵기의 단색 윤곽선 라인 아트 UI",
        "채색 채우기 없는 정갈한 와이어프레임 룩",
        "모노라인(Monoline) 아이콘 중심의 정교한 카트",
        "기술 도면 감성의 정교한 블랙 라인",
        "여백과 섬세한 윤곽선 중심의 라인 디자인",
        "단일 굵기 모노라인 윤곽선",
        "면 채우기 없는 와이어프레임 룩",
        "정갈한 라인 아트 디자인"
      ]
    },
    "signals": [
      {
        "id": "single-weight-contour",
        "role": "defining",
        "name": {
          "en": "Single-weight contour lines",
          "ko": "일정한 굵기의 윤곽선 (Single-weight)"
        },
        "facet": "geometry",
        "description": {
          "en": "All structure is drawn with one consistent stroke weight — typically 1.5–2px — whether it is a card edge, button rim, icon, or divider.",
          "ko": "카드 테두리, 버튼, 아이콘, 구분선이 모두 동일한 1.5~2px 단일 스트로크 두께로 그려짐."
        }
      },
      {
        "id": "no-solid-fills",
        "role": "defining",
        "name": {
          "en": "No solid fills",
          "ko": "면 채우기 배제 (Hollow shapes)"
        },
        "facet": "surface",
        "description": {
          "en": "Interactive surfaces are hollow; the background shows through every shape. Color appears only as line ink, never as block fill.",
          "ko": "버튼과 카드의 내부가 비어 있어 배경이 투과됨. 색상은 오직 선 잉크로만 존재함."
        }
      },
      {
        "id": "monochrome-ink",
        "role": "defining",
        "name": {
          "en": "Monochrome ink palette",
          "ko": "단색 잉크 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "A near-black line color such as #1a1a1a or #222223 on an off-white ground such as #fafafa or #ffffff; optional single accent is still a line, not a fill.",
          "ko": "흰색/크림 바탕(#fafafa) 위에 짙은 잉크색(#1a1a1a) 단색 선으로 정갈하게 구성됨."
        }
      },
      {
        "id": "technical-precision",
        "role": "defining",
        "name": {
          "en": "Technical-drawing precision",
          "ko": "기술 도면의 정교한 매끈함"
        },
        "facet": "geometry",
        "description": {
          "en": "Clean vector paths, consistent corner radii (0–4px), exact alignment, and equal gaps — the feeling of a draftsperson's ink drawing rather than a sketch.",
          "ko": "흔들림 없는 정교한 벡터 경로, 0~4px의 미세한 모서리 곡률, 정밀한 기술 정도."
        }
      },
      {
        "id": "negative-space-form",
        "role": "supporting",
        "name": {
          "en": "Negative space as form",
          "ko": "선과 여백이 만드는 형태"
        },
        "facet": "layout",
        "description": {
          "en": "Composition relies on the gaps between lines; shapes are recognized by the boundary they draw, not by filled regions or heavy boxes.",
          "ko": "채워진 박스가 아닌 선이 이루는 경계선과 여백의 간격으로 형태와 유닛을 인식함."
        }
      },
      {
        "id": "outline-typography",
        "role": "supporting",
        "name": {
          "en": "Outline-friendly type",
          "ko": "정갈한 산세리프 서체"
        },
        "facet": "typography",
        "description": {
          "en": "A plain geometric sans in regular weight, small sizes (12–14px), with no filled badges or heavy labels competing with the contour network.",
          "ko": "Inter, SF Pro 등 12~14px 정갈한 산세리프 서체를 선 네트워크와 조화롭게 배치함."
        }
      },
      {
        "id": "flat-filled-blocks",
        "role": "avoid",
        "name": {
          "en": "Flat filled blocks",
          "ko": "단색 채우기 블록 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Solid rectangles of color or tinted cards shift the style toward Minimalism or flat design — the line is no longer doing the work.",
          "ko": "단색으로 채워진 면이 들어서는 순간 라인 아트 고유의 윤곽선 정체성이 무너짐."
        }
      }
    ],
    "confusedWith": {
      "slug": "minimalism",
      "name": "Minimalism",
      "because": {
        "en": "This is Line Art because the visual subject is the drawn contour itself — every element is a single-weight outline with empty interior, like a technical illustration.",
        "ko": "구별 이유: 모든 카드, 버튼, 아이콘이 단색 면 채우기 없이 일정한 굵기(1.5px)의 윤곽선(Contour line)으로만 형성된 기술 도면 스타일이므로 라인 아트에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Minimalism if the outlines were replaced by solid color blocks, generous whitespace, and flat fills — the form would come from absence and color, not from drawn lines.",
        "ko": "변경 조건: 윤곽선이 사라지고 단색 채우기 면과 넓은 여백으로 형태가 표현되면 미니멀리즘(Minimalism)이 됨."
      }
    },
    "brief": {
      "en": "Create the interface as Line Art. Defining signals: every element is rendered as a single-weight contour line, typically 1.5px solid #1a1a1a on a #fafafa or #ffffff ground, with no solid fills; buttons, cards, and icons are hollow shapes whose boundaries are the form. Use a clean geometric sans such as Inter or SF Pro at 12–14px regular weight; keep labels sparse so the line network stays the visual subject. Interactive states should change the line (dashed focus outline 1.5px dashed #1a1a1a, pressed state scale 0.96 or a short dash animation) rather than adding background fills. Progress bars and sliders are simple horizontal lines with a circular thumb drawn in the same stroke; use SVG stroke-only icons (stroke-width: 1.5, fill: none, stroke-linecap round). Corner radii stay subtle at 0–4px; shadows are absent. Do not drift into Minimalism — the decisive difference is that Line Art builds the interface from drawn outlines, while Minimalism builds it from colored blocks and whitespace. Preserve a minimum 3:1 contrast for the lines themselves and 4.5:1 for any text, keep touch targets at least 44×44px even when the visible outline is smaller, and provide non-color state cues such as dashed outlines or scale changes.",
      "ko": "라인 아트(Line Art) 스타일을 적용합니다. 정의 신호: 일정한 1.5px 단일 두께의 윤곽선(border: 1.5px solid #1a1a1a), 면 채우기가 없는 비어있는 형태(Hollow shapes), 흰색/크림 바탕 위 단색 잉크 팔레트, 도면의 정교한 벡터 정렬, 모노라인 SVG 아이콘입니다. 선 명암비(3:1)와 텍스트 명암비(4.5:1)를 준수하며, 버튼 클릭 영역이 선 두께에 가려지지 않도록 최소 44x44px 터치 영역을 보장합니다."
    },
    "accessibility": {
      "en": "Thin contour lines can disappear for users with low vision or on low-contrast screens; keep the stroke at least 1.5px and measure it against the ground at the smallest supported viewport.\n\nLine-only controls can look inert because there is no filled button shape to suggest clickability; reinforce affordance with hover/focus state changes (dashed outline, scale, or arrow cursor) and ensure keyboard focus is highly visible.\n\nSmall outlined icons and tiny labels are hard to parse at a glance; pair the line network with adequate spacing and avoid relying on line color alone to communicate state — use dashed, dotted, or thickened strokes instead.",
      "ko": "극도로 얇은 1px 라인은 시력이 낮은 사용자에게 시인성이 떨어지므로 최소 2px 이상 두께 유지.\n선으로만 구성된 아이콘 및 버튼에 명확한 텍스트 라벨 함께 제공."
    },
    "a11yAndMisuse": {
      "en": "Thin contour lines can disappear for users with low vision or on low-contrast screens; keep the stroke at least 1.5px and measure it against the ground at the smallest supported viewport.\n\nLine-only controls can look inert because there is no filled button shape to suggest clickability; reinforce affordance with hover/focus state changes (dashed outline, scale, or arrow cursor) and ensure keyboard focus is highly visible.\n\nSmall outlined icons and tiny labels are hard to parse at a glance; pair the line network with adequate spacing and avoid relying on line color alone to communicate state — use dashed, dotted, or thickened strokes instead.",
      "ko": "극도로 얇은 1px 라인은 시력이 낮은 사용자에게 시인성이 떨어지므로 최소 2px 이상 두께 유지.\n선으로만 구성된 아이콘 및 버튼에 명확한 텍스트 라벨 함께 제공."
    },
    "origin": {
      "en": "Line art is an ancient graphic technique — technical illustration, engraving, and engineering drafting all rely on contour alone — but its modern UI form grew from two visible revivals: the Noun Project's monoline icon library, which popularized single-weight pictograms around 2010, and iOS 7's ultra-thin outline icon set in 2013, which proved an entire interface could read as a family of strokes. Since the mid-2010s the look has appeared in landing pages, dashboards, and illustration-led product identities as a deliberate antidote to heavy flat fills.",
      "ko": "고전 판화 및 모던 미니멀 스케치 기법에서 파생되어 현대 웹의 경량 일러스트로 환영받고 있습니다."
    },
    "meta": {}
  },
  {
    "slug": "hand-drawn",
    "name": {
      "en": "Hand-drawn / Doodle",
      "ko": "핸드드로잉"
    },
    "tagline": {
      "en": "Hand-drawn UI keeps the evidence of a human hand on the screen: lines wobble a pixel or two off a perfect vector, color blocks look marker-filled with uneven edges, and typography leans toward handwriting or a sans softened by slight rotation. It signals low-fi honesty, playfulness, or a deliberate escape from polished SaaS sameness. The look lives in sketchy wireframes, indie app onboarding, and landing pages that want to feel like a notebook rather than a dashboard.",
      "ko": "손으로 직접 그린 듯한 자연스러운 스케치, 낙서 느낌의 스크리블, 인간적 온기가 느껴지는 따뜻함"
    },
    "scope": {
      "en": "Scope: This entry covers the intentional hand-drawn / doodle visual treatment of finished UI surfaces. It is not about early-stage paper sketches or bad drawing; it is a rendered style that imitates markers, pencils, and rough ink. Sketchy wireframes (e.g. Balsamiq's default output) are a close sibling but are usually production artifacts for communication rather than shipped interface skin.",
      "ko": "범위: 아날로그 펜 스케치, 크레용, 낙서 질감의 아기자기한 디자인 스타일입니다."
    },
    "aliases": {
      "en": [
        "ui that looks like it was sketched with a marker",
        "wiggly hand-drawn borders around buttons",
        "doodle-style interface with pencil textures",
        "rough marker fills and shaky outlines",
        "the balsamiq wireframe look used in a real app",
        "sketchy ui with uneven lines",
        "wobbly sketchy marker doodles",
        "balsamiq paper notebook drawing",
        "handwritten cute UI"
      ],
      "ko": [
        "손으로 직접 그린 듯한 자연스러운 핸드드로잉",
        "삐뚤빼뚤 불규칙한 스케치 라인과 손글씨 폰트",
        "마커 질감 채우기와 아날로그 종이 느낌",
        "발사믹(Balsamiq) 와이어프레임 감성의 UI",
        "낙서(Doodle) 모티프와 친근한 노트 인터페이스",
        "삐뚤빼뚤 손으로 그린 스케치",
        "아날로그 종이 노트 낙서 감성",
        "친근한 손글씨 핸드드로잉"
      ]
    },
    "signals": [
      {
        "id": "wobbly-strokes",
        "role": "defining",
        "name": {
          "en": "Wobbly, imperfect strokes",
          "ko": "삐뚤빼뚤 불규칙한 떨림 선 (Wobbly stroke)"
        },
        "facet": "geometry",
        "description": {
          "en": "Borders and dividers visibly waver 1–3px away from a straight vector path; corners are rounded but slightly lopsided, and line endpoints often miss by a hair.",
          "ko": "테두리와 구분선이 1~3px 불규칙하게 흔들리며, 모서리 곡률이 일정하지 않고 아날로그 손맛을 냄."
        }
      },
      {
        "id": "marker-pencil-texture",
        "role": "defining",
        "name": {
          "en": "Marker or pencil texture",
          "ko": "마커 및 색연필 질감 오버레이"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces carry paper grain, marker bleed, or pencil hatching; flat fills have subtle opacity variation that reads as real ink rather than a digital solid.",
          "ko": "종이 입자 노이즈와 마커 잉크 번짐, 색연필 빗금 질감이 오버레이되어 아날로그감을 형성함."
        }
      },
      {
        "id": "organic-fill-blocks",
        "role": "defining",
        "name": {
          "en": "Organic, hand-filled color blocks",
          "ko": "테두리를 살짝 벗어나는 마커 채우기"
        },
        "facet": "color",
        "description": {
          "en": "Color areas are lumpy and slightly misaligned with their outlines, as if filled with a broad marker that overshot the line in places.",
          "ko": "채우기 색상이 윤곽선 밖으로 살짝 튀어나오거나 불균일하게 칠해진 수공예 느낌."
        }
      },
      {
        "id": "loose-typography",
        "role": "defining",
        "name": {
          "en": "Loose, handwriting-flavored type",
          "ko": "친근한 손글씨 디스플레이 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Text uses a handwriting or soft marker-style typeface, or a sans manually skewed and jittered so letters sit on a near-but-not-quite straight baseline.",
          "ko": "Caveat, Patrick Hand 등 친근한 손글씨 서체를 헤드라인에 적용함."
        }
      },
      {
        "id": "imperfect-alignment",
        "role": "supporting",
        "name": {
          "en": "Imperfect, collage-like alignment",
          "ko": "살짝 기울어진 아날로그 배치"
        },
        "facet": "layout",
        "description": {
          "en": "Elements sit a few pixels off a strict grid; small boxes tilt ±1–2deg, creating the casual feel of items taped to a sketchbook page.",
          "ko": "카드가 약 -1~1.5도 살짝 기울어져 스케치북에 스티커를 붙인 듯한 편안한 분위기를 만듦."
        }
      },
      {
        "id": "warm-marker-palette",
        "role": "variable",
        "name": {
          "en": "Warm marker palette",
          "ko": "따뜻한 마커 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Classically a paper-white or cream ground plus 2–4 marker colors such as #F15A4A red, #FBB03B yellow, #39B54A green, and #29ABE2 blue; black ink at #2B2B2B.",
          "ko": "따뜻한 종이 바탕(#f7f4ed) 위 마커 레드(#F15A4A), 노랑(#FBB03B), 초록(#39B54A)과 잉크 검은색(#2B2B2B)."
        }
      },
      {
        "id": "decorative-doodles",
        "role": "supporting",
        "name": {
          "en": "Decorative doodles",
          "ko": "낙서(Doodle) 모티프 장식"
        },
        "facet": "imagery",
        "description": {
          "en": "Stars, arrows, underlines, and scribbles embellish labels and buttons like marginalia in a notebook.",
          "ko": "손으로 그린 별, 화살표, 밑줄, 돼지꼬리 기호 등이 라벨 주위에 낙서처럼 배치됨."
        }
      },
      {
        "id": "vector-precision",
        "role": "avoid",
        "name": {
          "en": "Vector precision",
          "ko": "매끈한 디지털 벡터 정교함 지양"
        },
        "facet": "geometry",
        "description": {
          "en": "Crisp 1px anti-aliased lines, perfect Bézier curves, and exact alignment remove the human trace — that is the doorway to flat design or Line Art.",
          "ko": "매끈한 1px 자대고 그린 선은 핸드드로잉 특유의 친근한 손맛을 없애므로 배제함."
        }
      }
    ],
    "confusedWith": {
      "slug": "line-art",
      "name": "Line Art",
      "because": {
        "en": "This is hand-drawn because the strokes visibly wobble, fills are organic and uneven, and the whole surface carries human imperfection — any line-like elements are rough, weighted, and often broken.",
        "ko": "구별 이유: 손으로 직접 그린 듯한 삐뚤빼뚤한 스케치 선(Wobbly stroke), 불규칙한 오가닉 마커 채우기, 손글씨 서체(Caveat, Patrick Hand), 아날로그 종이 질감으로 연출되었으므로 핸드드로잉 / 낙서(Doodle)에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Line Art if every stroke were cleaned into a precise single-weight contour with no fill, no texture, and no wobble.",
        "ko": "변경 조건: 삐뚤빼뚤한 떨림과 마커 질감이 제거되고 매끈하고 정교한 단일 두께 윤곽선으로 정리되면 라인 아트(Line Art)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface using a Hand-drawn / Doodle style. Defining signals: wobbly strokes that visibly waver 1–3px off a perfect path; marker or pencil texture with paper grain and subtle opacity variation; organic color blocks that overshoot their outlines like real marker fills; loose handwriting-flavored typography. Use a warm off-white paper ground such as #f7f4ed with marker accents #F15A4A, #FBB03B, #39B54A, #29ABE2, and black ink #2B2B2B. Borders should be 2–3px solid #2B2B2B with intentionally uneven radii (e.g. border-radius: 10px 12px 9px 13px). Add texture through an SVG feTurbulence displacement filter on strokes or a subtle noise overlay. Buttons and cards can tilt ±0.8–1.5deg and carry a soft offset shadow: box-shadow: 2px 3px 0 rgba(0,0,0,.08). Use a handwriting typeface such as Caveat or Patrick Hand for headings, but keep body text in a clean sans (system-ui) at 15–16px to preserve readability. Do not drift into Line Art; the decisive difference is that hand-drawn keeps fills, texture, and wobble, while Line Art is a precise contour with no fill. Preserve 4.5:1 text contrast even over textured fills, visible focus states independent of the doodle border, and reduced-motion support.",
      "ko": "핸드드로잉 / 낙서(Hand-drawn / Doodle) 스타일을 적용합니다. 정의 신호: 1~3px 삐뚤빼뚤 불규칙하게 흔들리는 스케치 테두리(SVG feTurbulence 필터), 아날로그 마커 및 종이 입자 질감, 테두리를 살짝 벗어나는 마커 채우기, 손글씨 서체(Caveat), 살짝 기울어진 카드 패널(transform: rotate(-0.8deg)), 낙서 장식 요소입니다. 본문 텍스트는 가독성을 위해 정갈한 산세리프(15~16px)로 제공하며, 손그림 라인의 떨림 애니메이션에 prefers-reduced-motion 대응을 적용합니다."
    },
    "accessibility": {
      "en": "Handwriting fonts and wobbly strokes reduce legibility for some readers; reserve the loose type for headings and short labels, and keep body copy in a clean sans at 15–16px.\n\nTextured fills and marker colors can drop contrast unexpectedly; verify 4.5:1 against the lightest and darkest regions of each textured block, and never rely on roughness alone to indicate state — pair it with color, icon, or label changes.\n\nImperfect alignment must not break logical reading order or touch targets; keep buttons large enough (at least 44×44px) and maintain a visible, non-decorative focus indicator.",
      "ko": "손그림 라인의 불규칙한 떨림 애니메이션은 prefers-reduced-motion 시 정지함.\n손글씨 폰트 가독성 검증."
    },
    "a11yAndMisuse": {
      "en": "Handwriting fonts and wobbly strokes reduce legibility for some readers; reserve the loose type for headings and short labels, and keep body copy in a clean sans at 15–16px.\n\nTextured fills and marker colors can drop contrast unexpectedly; verify 4.5:1 against the lightest and darkest regions of each textured block, and never rely on roughness alone to indicate state — pair it with color, icon, or label changes.\n\nImperfect alignment must not break logical reading order or touch targets; keep buttons large enough (at least 44×44px) and maintain a visible, non-decorative focus indicator.",
      "ko": "손그림 라인의 불규칙한 떨림 애니메이션은 prefers-reduced-motion 시 정지함.\n손글씨 폰트 가독성 검증."
    },
    "origin": {
      "en": "The aesthetic is rooted in design-process artifacts: Balsamiq Mockups, launched by Giacomo 'Peldi' Giacobazzi in 2008, popularized the sketchy wireframe look as a deliberate low-fidelity communication tool. In the 2010s the sensibility migrated into production UI in playful indie apps and landing pages, and tools like Excalidraw (late 2010s onward) made hand-drawn diagrams a mainstream open-source convention. As a named visual style for shipped interfaces it remains more of a recurring trend than a single coined movement.",
      "ko": "디지털의 정형화된 차가움에 대비되는 따뜻한 인간적 감성을 전달하기 위해 부상했습니다."
    },
    "meta": {}
  },
  {
    "slug": "fantasy-rpg",
    "name": {
      "en": "Fantasy RPG UI",
      "ko": "판타지 RPG UI"
    },
    "tagline": {
      "en": "Fantasy RPG UI draws its look from the inventory screens, spellbooks, and status panels of tabletop-to-computer role-playing games: parchment, weathered stone, tooled leather, and dark patinated metal form the surfaces; runic or blackletter-inflected type announces headings; red health and blue mana bars wrap the action in resource drama. The style treats the screen as a physical artifact from a medieval-fantasy world, not as a flat display. It crystallized in early CRPGs and was polished into a convention by the MMO era, then surfaced again in every indie dungeon crawler and gacha RPG.",
      "ko": "양양한 양각 양피지, 중세 체인 메일 테두리, 보석 박힌 HP/MP 스탯 바 등 판타지 게임 고유 UI"
    },
    "scope": {
      "en": "Scope: This entry covers the high-fidelity, medieval-fantasy interface skin used in role-playing games — the materials, typography, and HUD grammar — not the Pixel Art branch that builds the same motifs from visible square pixels, nor the broader fantasy illustration style outside UI.",
      "ko": "범위: 고전 및 모던 판타지 RPG 게임의 게임HUD 및 대화창 스타일입니다."
    },
    "aliases": {
      "en": [
        "medieval game menu with parchment and leather",
        "the world of warcraft spellbook look",
        "rpg interface with red health and blue mana bars",
        "ancient rune font and metal borders",
        "inventory screen that looks like an old tome",
        "fantasy ui with ornate gold frames",
        "medieval game inventory parchment",
        "red health blue mana status bar",
        "world of warcraft book UI"
      ],
      "ko": [
        "고전 및 모던 판타지 RPG 게임 인벤토리 UI",
        "양피지(Parchment) 질감과 황동 테두리 프레임",
        "붉은 HP 생명력 바와 푸른 MP 마나 바",
        "중세 룬 문자 서체와 석조 게이지 HUD",
        "월드 오브 워크래프트 마법서 감성의 UI",
        "판타지 RPG 게임 인벤토리",
        "양피지 질감과 HP MP 스탯 바",
        "중세 룬 문자 마법서 패널"
      ]
    },
    "signals": [
      {
        "id": "parchment-stone-leather",
        "role": "defining",
        "name": {
          "en": "Parchment, stone, and leather surfaces",
          "ko": "양피지, 석조, 가죽 재질 표면"
        },
        "facet": "surface",
        "description": {
          "en": "Backgrounds and panels mimic aged parchment (#e8dcc3), rough stone (#6b655c), or dark tooled leather (#4a3b2a) with subtle grain, stains, and stitched seams — the UI is treated as a physical prop.",
          "ko": "오래된 양피지(#e8dcc3), 거친 석조(#6b655c), 음각 가죽(#4a3b2a) 질감 패널."
        }
      },
      {
        "id": "metal-ornate-borders",
        "role": "defining",
        "name": {
          "en": "Ornate metal borders",
          "ko": "황동 및 무쇠 장식 금속 테두리"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges are wrapped in bevelled brass, iron, or dark bronze frames with decorative corner studs, filigree, or rivets; borders use 3–6px raised gradients to read as cast metal rather than flat lines.",
          "ko": "3~6px 두께의 베벨 입체 황동/청동 금속 프레임과 모서리 리벳 장식."
        }
      },
      {
        "id": "runic-lettering",
        "role": "defining",
        "name": {
          "en": "Runic or blackletter-inflected titles",
          "ko": "중세 룬 문자 및 블랙레터 디스플레이 서체"
        },
        "facet": "typography",
        "description": {
          "en": "Headings use angular runic, blackletter, or Celtic knot display faces with sharp serifs and uneven stroke rhythm, while body labels stay legible in a neutral serif or condensed sans.",
          "ko": "Cinzel, Ringbearer 등 각진 중세 룬 문자 및 블랙레터 서체를 헤드라인에 적용함."
        }
      },
      {
        "id": "hp-mp-resource-bars",
        "role": "defining",
        "name": {
          "en": "Health and mana resource bars",
          "ko": "붉은 HP 생명력 및 푸른 MP 마나 바"
        },
        "facet": "imagery",
        "description": {
          "en": "Red health (#c9302c) and blue mana (#2b6ca3) bars sit inside metallic tracks, often with glossy liquid fills, segmented notches, and small icon badges — the HUD borrows the language of character sheets.",
          "ko": "금속 트랙 안에서 유광 액체 형태로 차오르는 붉은 HP(#c9302c)와 푸른 MP(#2b6ca3) 스탯 바."
        }
      },
      {
        "id": "medieval-ornament",
        "role": "supporting",
        "name": {
          "en": "Medieval decorative motifs",
          "ko": "중세 장식 모티프 및 켈트 문양"
        },
        "facet": "imagery",
        "description": {
          "en": "Corner flourishes, heraldic borders, wax seals, and Celtic knot dividers reinforce the pre-modern setting without becoming the primary structure.",
          "ko": "모서리 아칸서스 문양, 왁스 인장 배지, 켈트 노드 구분선 등 중세 판타지 모티프."
        }
      },
      {
        "id": "rich-texture-lighting",
        "role": "supporting",
        "name": {
          "en": "Rich texture and directional lighting",
          "ko": "풍부한 입체 질감과 상단 조명"
        },
        "facet": "depth",
        "description": {
          "en": "Soft drop shadows, inner bevels, and highlight gradients model the thickness of pages and plates; surfaces look illuminated from upper-left by torchlight.",
          "ko": "좌측 상단 횃불 조명에서 오는 풍부한 베벨 입체감과 깊은 드롭 섀도우(box-shadow: 0 12px 28px rgba(0,0,0,.45))."
        }
      },
      {
        "id": "flat-minimal",
        "role": "avoid",
        "name": {
          "en": "Flat minimal panels",
          "ko": "플랫 미니멀 패널 지양"
        },
        "facet": "surface",
        "description": {
          "en": "Clean flat fills, zero borders, and system sans-serif type strip away the prop-like materiality and read as modern app design, not fantasy.",
          "ko": "플랫 단색 채우기와 모던 서체는 판타지 게임 고유의 소품 느낌을 무너뜨리므로 배제함."
        }
      }
    ],
    "confusedWith": {
      "slug": "pixel-art",
      "name": "Pixel Art",
      "because": {
        "en": "This is Fantasy RPG UI because the interface is rendered as high-fidelity illustration — textured parchment, brushed metal, leather grain, and smooth rendered type — rather than as a deliberately limited set of square pixels.",
        "ko": "구별 이유: 고전 및 모던 판타지 RPG 게임 스탯창 — 양피지(#e8dcc3), 석조, 가죽 바탕 질감, 황동/청동 테두리 프레임, 붉은 HP 및 푸른 MP 마나 바 인디케이터, 중세 룬 서체로 연출되었으므로 판타지 RPG UI에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Pixel Art if every texture were reduced to visible 8×8 or 16×16 square cells, the palette shrank to a few indexed colors, and edges became stair-stepped without anti-aliasing.",
        "ko": "변경 조건: 모든 질감이 사각형 8x8/16x16 도트 격자로 축소되고 인덱스 컬러와 안티앨리어싱 없는 계단 현상으로 바뀌면 픽셀 아트(Pixel Art)가 됨."
      }
    },
    "brief": {
      "en": "Create the interface as a Fantasy RPG UI. Defining signals: surfaces look like physical medieval props — aged parchment #e8dcc3 with subtle grain, rough stone #6b655c, or dark tooled leather #4a3b2a; edges are wrapped in ornate metal borders using beveled brass/iron gradients (#9c8c6c to #5d4f3a) with 3–6px thickness, corner studs, and inner highlights. Headings use runic/blackletter display type (Cinzel Decorative, Ringbearer, or UnifrakturMaguntia) at 22–30px with sharp serifs; keep body labels in a readable serif or condensed sans at 13–15px. HUD resource bars are the signature: red health #c9302c and blue mana #2b6ca3 fills inside metallic tracks (#3d3328 to #7a6a56), with glossy top highlights, segmented notches every 20–30px, and small icon badges. Add medieval ornaments — corner flourishes, wax seals, Celtic knot dividers — but keep them secondary. Lighting: soft drop-shadow 0 12px 28px rgba(0,0,0,.45), inner bevel inset 0 1px 0 rgba(255,255,255,.2), directional top-left highlights. Avoid flat minimal panels, system sans-serif type, and clean flat fills; they destroy the prop-like materiality. Ensure text contrast ≥4.5:1 over parchment and leather, pause pulsing bar animations under prefers-reduced-motion, and keep interactive focus rings visible.",
      "ko": "판타지 RPG UI 스타일을 적용합니다. 정의 신호: 오래된 양피지(#e8dcc3), 석조, 가죽 재질 표면, 베벨 입체 황동/청동 테두리 프레임, 각진 중세 룬/블랙레터 디스플레이 서체, 금속 트랙 속 붉은 HP(#c9302c) 및 푸른 MP(#2b6ca3) 마나 바 인디케이터, 왁스 인장 모티프입니다. 양피지 바탕 위 텍스트 명암비(4.5:1)를 준수하고, 룬 서체는 헤드라인에만 적용하며 본문은 가독성 높은 서체로 보장합니다."
    },
    "accessibility": {
      "en": "Ornate runic and blackletter typefaces are decorative: use them only for headings at 18px or larger, and set body labels, stats, and timers in a highly readable serif or sans so the interface remains scannable.\n\nParchment and leather textures can reduce contrast and make thin type hard to read; keep text over solid parchment #e8dcc3 at least #3a2e22, or place text on a semi-opaque dark scrim behind runic headers.\n\nGlowing HP/MP bars, pulsing highlights, and page-turn animations should pause under prefers-reduced-motion, and color alone must never encode status — add icons or labels to red/blue bars.",
      "ko": "양양한 양장피(Parchment) 질감 위 텍스트 명암비 검증 및 고전적인 장식 폰트 가독성 확보.\n아이콘 및 룬 문자 컨트롤에 접근성 라벨(aria-label) 적용."
    },
    "a11yAndMisuse": {
      "en": "Ornate runic and blackletter typefaces are decorative: use them only for headings at 18px or larger, and set body labels, stats, and timers in a highly readable serif or sans so the interface remains scannable.\n\nParchment and leather textures can reduce contrast and make thin type hard to read; keep text over solid parchment #e8dcc3 at least #3a2e22, or place text on a semi-opaque dark scrim behind runic headers.\n\nGlowing HP/MP bars, pulsing highlights, and page-turn animations should pause under prefers-reduced-motion, and color alone must never encode status — add icons or labels to red/blue bars.",
      "ko": "양양한 양장피(Parchment) 질감 위 텍스트 명암비 검증 및 고전적인 장식 폰트 가독성 확보.\n아이콘 및 룬 문자 컨트롤에 접근성 라벨(aria-label) 적용."
    },
    "origin": {
      "en": "The visual grammar descends from tabletop role-playing games, above all Gary Gygax and Dave Arneson’s Dungeons & Dragons (1974, TSR), whose character sheets, spell cards, and DM screens established parchment, metal, and leather as the default fantasy props. Computer RPGs such as Richard Garriott’s Ultima (1981, Origin Systems) translated those props onto early screens, and Blizzard Entertainment’s Diablo (1996, developed by Blizzard North) and World of Warcraft (2004) polished the high-fidelity metal-and-parchment interface into a mass-market convention that indie dungeon crawlers and mobile gacha RPGs still imitate today.",
      "ko": "D&D 등 고전 탁상 RPG 및 고전 PC 판타지 게임의 인벤토리 및 스탯창에서 발달했습니다."
    },
    "meta": {}
  },
  {
    "slug": "lcars",
    "name": {
      "en": "LCARS",
      "ko": "LCARS (스타트렉 컴퓨터 시스템)"
    },
    "tagline": {
      "en": "LCARS is the 24th-century Starfleet computer interface: a black canvas covered in large, flat, rounded color blocks — orange, peach, amber, lavender, and red — that act as both labels and touch targets. Section headers bend in curved \"elbow\" or boomerang shapes, text is almost always uppercase sans-serif, and the whole thing reads as an illuminated console rather than a windowed desktop. It was created for Star Trek: The Next Generation in 1987 and remains the visual shorthand for friendly, accessible sci-fi ship controls.",
      "ko": "스타트렉 컴퓨터 시스템의 스위핑 스윕 블록, 평면 원색 캡슐, 디스플레이 통제 패널 비주얼"
    },
    "scope": {
      "en": "Scope: This entry covers the on-screen graphic language of LCARS as a visual style, not the fictional operating system or its in-universe rules. Touch-panel hardware and voice interfaces are part of the Star Trek prop world but are not the atlas signals here.",
      "ko": "범위: 스타트렉(Star Trek) 세계관의 고유 컴퓨터 인터페이스 비주얼 스타일입니다."
    },
    "aliases": {
      "en": [
        "star trek computer screens with orange and purple blocks",
        "rounded colored panels on black spaceship displays",
        "the 24th century starfleet touch screen style",
        "sci fi ui with curved elbow headers and big buttons",
        "michael okuda star trek console design",
        "star trek 24th century okuda console",
        "orange purple rounded elbow blocks",
        "starfleet touch panel"
      ],
      "ko": [
        "스타트렉 24세기 커맨드 콘솔 LCARS UI",
        "오렌지, 보라, 노랑의 둥근 L자 커브 블록",
        "블랙 바탕 위 터치 패널 인스트루먼트",
        "마이클 오쿠다 스타일의 스타트렉 컴퓨터 화면",
        "스타플릿 대문자 산세리프 컨트롤",
        "스타트렉 커맨드 콘솔 LCARS",
        "오렌지 보라 L자 커브 캡슐 블록",
        "스타플릿 터치 화면"
      ]
    },
    "signals": [
      {
        "id": "black-canvas",
        "role": "defining",
        "name": {
          "en": "Black canvas ground",
          "ko": "딥 블랙 캔버스 바탕"
        },
        "facet": "surface",
        "description": {
          "en": "The entire interface sits on a near-black ground (#0b0b0b to #000000) so the colored blocks read as illuminated touch-panel surfaces rather than cards on a page.",
          "ko": "전체 UI가 딥 블랙 바탕(#0b0b0b) 위에 위치하여 색상 블록들이 스스로 빛나는 터치 패널처럼 보이게 함."
        }
      },
      {
        "id": "rounded-lozenges",
        "role": "defining",
        "name": {
          "en": "Rounded lozenge blocks",
          "ko": "둥근 캡슐(Lozenge) 모양 블록"
        },
        "facet": "geometry",
        "description": {
          "en": "UI elements are pill-like or lozenge-shaped rectangles with 12–20px corner radii on the short ends; small caps act as buttons, large caps act as section headers.",
          "ko": "컨트롤과 섹션 헤더가 양끝이 둥근 캡슐(border-radius: 999px) 모서리 블록 형태로 형성됨."
        }
      },
      {
        "id": "elbow-headers",
        "role": "defining",
        "name": {
          "en": "Curved elbow headers",
          "ko": "둥근 L자형 스윕 커브 (Elbow) 헤더"
        },
        "facet": "geometry",
        "description": {
          "en": "Section dividers and titles sit inside curved, boomerang, or L-shaped caps that bend around a panel corner, often with one rounded end and one straight or clipped edge.",
          "ko": "섹션 타이틀과 가이드 바가 모서리를 감싸며 곡선으로 꺾이는 L자형 커브 패널 구조."
        }
      },
      {
        "id": "warm-palette",
        "role": "defining",
        "name": {
          "en": "Warm orange / peach / lavender palette",
          "ko": "따뜻한 오렌지, 피치, 보라 LCARS 시그니처 팔레트"
        },
        "facet": "color",
        "description": {
          "en": "Dominant blocks use saturated orange (#FF9900), peach (#FFCC99), amber (#FF9966), and lavender (#9999CC); red (#CC6666) and blue (#6699CC) appear as accents, all against black.",
          "ko": "오렌지(#FF9900), 피치(#FFCC99), 엠버(#FF9966), 라벤더(#9999CC) 중심의 따뜻한 시그니처 컬러 대치."
        }
      },
      {
        "id": "all-caps-sans",
        "role": "defining",
        "name": {
          "en": "All-caps compact sans labels",
          "ko": "자간이 넓은 대문자 산세리프 라벨"
        },
        "facet": "typography",
        "description": {
          "en": "Text is set in a tight, medium-weight sans-serif, almost always uppercase, with generous tracking (0.06–0.12em) so labels read as instrument annotations.",
          "ko": "모든 라벨과 수치가 자간이 넓은(letter-spacing: 0.08em) 대문자 산세리프 서체로 표기됨."
        }
      },
      {
        "id": "flat-touch-targets",
        "role": "supporting",
        "name": {
          "en": "Flat touch targets",
          "ko": "그림자 없는 플랫 터치 타깃"
        },
        "facet": "layout",
        "description": {
          "en": "Controls are flat color swatches with no gradient, shadow, or bevel; the shape and color alone indicate the interactive area, as if pressing a lit touch panel.",
          "ko": "입체 그림자나 그래디언트 없이 오직 플랫한 컬러 면으로 작동 영역을 나타냄."
        }
      },
      {
        "id": "phosphor-scanlines",
        "role": "avoid",
        "name": {
          "en": "Phosphor scanline depth",
          "ko": "녹색 CRT 스캔라인 지양"
        },
        "facet": "depth",
        "description": {
          "en": "Monochrome green glow, CRT scanlines, terminal fixed-width typography, or faux 3D bevels belong to terminal-hacker and skeuomorphism; LCARS keeps the surface flat, warm, and blocky.",
          "ko": "녹색 CRT 스캔라인이나 등폭 폰트는 터미널 해커 영역이므로 LCARS의 플랫 캡슐 블록과 구별됨."
        }
      }
    ],
    "confusedWith": {
      "slug": "terminal-hacker",
      "name": "Terminal Hacker",
      "because": {
        "en": "This is LCARS because the black ground serves a warm, blocky, touch-panel language — colored rounded lozenges, curved elbow headers, and uppercase labels that invite tapping rather than typing.",
        "ko": "구별 이유: 스타트렉(Star Trek) 24세기 컴퓨터 시스템 — 딥 블랙 바탕, 오렌지(#FF9900)/피치/라벤더/보라색의 플랫 둥근 캡슐 블록, L자형 스윕 커브(Elbow) 헤더, 대문자 산세리프 라벨로 구성되었으므로 LCARS에 해당함."
      },
      "wouldBecomeIf": {
        "en": "It would become Terminal Hacker if the color blocks were replaced by a monochrome phosphor-green command-line grid, a blinking cursor, scanlines, and fixed-width glyphs.",
        "ko": "변경 조건: 화려한 캡슐 블록과 L자 커브가 사라지고 단색 인광 녹색 CLI 프롬프트 텍스트, 깜빡이는 커서, 스캔라인으로 환원되면 터미널 해커(Terminal Hacker)가 됨."
      }
    },
    "brief": {
      "en": "Create the surface in the spirit of LCARS. Start with a near-black canvas (#0b0b0b) as the only background. Build every interactive element as a flat, rounded lozenge: 12–20px border-radius on the short ends, no shadows, no gradients. Use the canonical palette — #FF9900 orange for primary actions and headers, #FFCC99 peach and #FF9966 amber for secondary blocks, #9999CC lavender for tertiary regions, #CC6666 red and #6699CC blue as small accents. Add curved \"elbow\" or boomerang headers by combining straight bars with pseudo-element caps (border-radius: 999px on one side). Set all labels in uppercase sans-serif with 0.06–0.12em letter-spacing and a medium weight; body text should stay minimal. Space blocks with generous black gaps (8–16px) so the colored shapes float on the canvas. Do not add scanlines, phosphor glow, terminal cursors, 3D bevels, or glass blur — those push the design toward Terminal Hacker or Aqua. For interactivity, states can invert text/background color or add a thin inner border; do not animate width/height on the lozenges. Maintain 4.5:1 contrast between the dark canvas and text, and ensure uppercase labels do not become unreadable at small sizes.",
      "ko": "LCARS(스타트렉 커맨드 콘솔) 스타일을 적용합니다. 정의 신호: 딥 블랙(#0b0b0b) 바탕, 양끝이 둥근 플랫 캡슐(Lozenge) 블록, 모서리를 감싸며 꺾이는 L자형 커브(Elbow) 헤더, 오렌지(#FF9900)/피치/라벤더 시그니처 컬러, 자간이 넓은 대문자 산세리프 라벨입니다. 오렌지/피치 블록 위 텍스트에 검은색 잉크(#0b0b0b)를 사용하여 명암비(4.5:1)를 확보하고, 선명한 외곽 포커스 링을 제공합니다."
    },
    "accessibility": {
      "en": "The black ground plus warm colored blocks can fail contrast if text sits directly on the lighter peach (#FFCC99) or lavender (#9999CC) fills; use near-black ink (#0b0b0b) on those blocks and keep white text off the yellow-orange swatches.\n\nAll-caps, tightly tracked labels reduce legibility for readers with dyslexia or low vision; reserve uppercase for short labels, keep sentence case for body copy, and use generous line-height.\n\nThe style's flatness means there are no default focus shadows — add a visible focus ring (e.g. a 2px #CC6666 outline with 2px offset) so keyboard users can see which lozenge is active.",
      "ko": "LCARS 특유의 면 색상 블록과 곡선 프레임 속에서 본문 텍스트 명암비 유지.\n독특한 블록 레이아웃의 키보드 탐색 순서 직관적 보장."
    },
    "a11yAndMisuse": {
      "en": "The black ground plus warm colored blocks can fail contrast if text sits directly on the lighter peach (#FFCC99) or lavender (#9999CC) fills; use near-black ink (#0b0b0b) on those blocks and keep white text off the yellow-orange swatches.\n\nAll-caps, tightly tracked labels reduce legibility for readers with dyslexia or low vision; reserve uppercase for short labels, keep sentence case for body copy, and use generous line-height.\n\nThe style's flatness means there are no default focus shadows — add a visible focus ring (e.g. a 2px #CC6666 outline with 2px offset) so keyboard users can see which lozenge is active.",
      "ko": "LCARS 특유의 면 색상 블록과 곡선 프레임 속에서 본문 텍스트 명암비 유지.\n독특한 블록 레이아웃의 키보드 탐색 순서 직관적 보장."
    },
    "origin": {
      "en": "LCARS — Library Computer Access/Retrieval System — was designed by graphic designer Michael Okuda for Star Trek: The Next Generation, which premiered in 1987. Roddenberry wanted the Enterprise-D bridge to look more advanced than the original series, so Okuda devised the black-screen, colored-block touch-panel language for the ship's consoles. The look carried through Deep Space Nine and Voyager and became the defining visual shorthand for 24th-century Starfleet interfaces.",
      "ko": "1987년 스타트렉: 더 넥스트 제너레이션을 위해 마이클 오쿠다가 디자인했습니다."
    },
    "meta": {}
  }
];
