import { UIStyle, StyleMeta } from "../types/ui";

export const STYLES: UIStyle[] = [
  {
    "slug": "skeuomorphism",
    "name": {
      "en": "Skeuomorphism",
      "zh": "拟物设计"
    },
    "tagline": {
      "en": "Skeuomorphism carries real-world materials and objects into digital UI: controls are rendered as if physically made of something — glossy plastic, brushed metal, leather, paper — with the lighting, texture, and affordances of the real thing. A skeuomorphic app teaches itself: a page that looks tearable invites turning, a raised glossy button invites pressing. It peaked in early iOS and Mac OS X, and was largely displaced by flat design around 2013.",
      "zh": "拟物设计把真实世界的材质和物件搬进数字界面：控件被渲染得像真的由某种材料做成 —— 亮面塑料、拉丝金属、皮革、纸张 —— 带着实物的光照、质感和可操作性暗示。拟物的 App 自带说明：看起来像能撕的页面会邀请你翻页，一颗凸起的光面按钮会邀请你按下去。它在早期 iOS 和 Mac OS X 达到巅峰，2013 年前后基本被扁平设计取代。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual style. The interaction-metaphor sense (a 'trash can' you drag files to) is the same idea one level up, and NN/g treats both together — but the atlas signals below are about pixels, not metaphors.",
      "zh": "范围：本条只覆盖视觉风格。「把文件拖进废纸篓」这类交互隐喻是同一个想法往上一层，NN/g 把两者放在一起讨论 —— 但下面图鉴里的信号讲的是像素，不是隐喻。"
    },
    "aliases": {
      "en": [
        "the app looks like a real leather notebook",
        "buttons that look like physical shiny buttons you could press",
        "old iphone apps with stitching and paper textures",
        "the calculator that looks like a real calculator",
        "realistic textures like wood and metal in the interface"
      ],
      "zh": [
        "这个 App 看起来像一本真皮笔记本",
        "按钮做得像真能按下去的实体亮面按钮",
        "老 iPhone 应用里那种缝线和纸质纹理",
        "那个做得像真计算器的计算器",
        "界面里有木纹、金属那种逼真质感"
      ]
    },
    "signals": [
      {
        "id": "real-materials",
        "role": "defining",
        "name": {
          "en": "Simulated real materials",
          "zh": "仿真真实材质"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces look made of something physical — leather, paper, linen, brushed metal, green felt — usually with visible texture or grain.",
          "zh": "表面看起来像由实体材料做成 —— 皮革、纸张、亚麻、拉丝金属、绿呢绒 —— 通常带有可见的纹理或颗粒。"
        }
      },
      {
        "id": "dimensional-lighting",
        "role": "defining",
        "name": {
          "en": "Physical lighting model",
          "zh": "物理光照模型"
        },
        "facet": "depth",
        "description": {
          "en": "Gloss highlights, bevels, and inner shadows imply a light source: buttons bulge outward, fields sink inward, edges catch light.",
          "zh": "高光、斜面和内阴影暗示着光源的存在：按钮向外鼓起，输入框向内凹陷，边缘会接住光。"
        }
      },
      {
        "id": "object-metaphor",
        "role": "defining",
        "name": {
          "en": "Real-object metaphors",
          "zh": "实物隐喻"
        },
        "facet": "imagery",
        "description": {
          "en": "The UI is drawn AS the object it replaces: a notepad with ruled paper, a bookshelf of covers, a dial you rotate.",
          "zh": "界面直接画成它所替代的那个实物：带横线纸张的记事本、摆满封面的书架、可以拧的旋钮。"
        }
      },
      {
        "id": "crafted-details",
        "role": "defining",
        "name": {
          "en": "Crafted physical details",
          "zh": "手工感的实体细节"
        },
        "facet": "geometry",
        "description": {
          "en": "Stitching, torn-paper edges, embossed or letterpress text, rivets — ornamental traces of how the 'real' object would be manufactured.",
          "zh": "缝线、撕纸边缘、压印或凸版文字、铆钉 —— 这些装饰性痕迹模拟「实物」被制造出来的工艺。"
        }
      },
      {
        "id": "gradient-controls",
        "role": "supporting",
        "name": {
          "en": "Glossy gradient controls",
          "zh": "光面渐变控件"
        },
        "facet": "depth",
        "description": {
          "en": "Buttons and bars carry vertical gradients with a specular top highlight — the 'gel' or 'aqua' look of pressable plastic.",
          "zh": "按钮和栏使用纵向渐变，顶部带一道镜面高光 —— 也就是可按压塑料的「凝胶」或 Aqua 质感。"
        }
      },
      {
        "id": "palette",
        "role": "variable",
        "name": {
          "en": "Palette follows the material",
          "zh": "配色跟随材质"
        },
        "facet": "color",
        "description": {
          "en": "Color comes from the simulated material (tan leather, grey linen), so almost any palette can be skeuomorphic.",
          "zh": "颜色取自模拟的材质（棕黄皮革、灰亚麻），所以几乎任何配色都可以是拟物的。"
        }
      },
      {
        "id": "flat-fills",
        "role": "avoid",
        "name": {
          "en": "Flat unshaded fills",
          "zh": "无光影的平涂色块"
        },
        "facet": "surface",
        "description": {
          "en": "Large flat single-color surfaces with no lighting break the illusion — that's the doorway to Flat Design.",
          "zh": "大面积没有光影的单色表面会打破真实幻觉 —— 那就是通往扁平设计的门。"
        }
      }
    ],
    "confusedWith": {
      "slug": "neumorphism",
      "name": "Neumorphism",
      "because": {
        "en": "This is skeuomorphism because surfaces imitate REAL, nameable materials — leather, paper, metal — with rich lighting, texture, and object metaphors.",
        "zh": "这是拟物设计，因为它的表面模仿的是真实的、叫得出名字的材质 —— 皮革、纸张、金属 —— 带有丰富的光照、质感和实物隐喻。"
      },
      "wouldBecomeIf": {
        "en": "It would become neumorphism if every material and texture vanished and all controls were instead extruded from one continuous matte surface with soft dual shadows.",
        "zh": "如果所有材质和纹理都消失，控件全部改由一块连续的哑光表面挤出、只靠柔和的双阴影塑形，就变成新拟态了。"
      }
    },
    "code": [
      {
        "title": "Raised glossy control: top highlight + drop shadow",
        "language": "css",
        "code": "background: linear-gradient(#fdfdfd, #d8d8d8); box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 1px 2px rgba(0,0,0,.35);"
      },
      {
        "title": "Recessed field: inner shadow sinks it into the surface",
        "language": "css",
        "code": "box-shadow: inset 0 2px 4px rgba(0,0,0,.35); background: #f3efe6;"
      },
      {
        "title": "Letterpress/embossed text on light materials",
        "language": "css",
        "code": "text-shadow: 0 1px 0 rgba(255,255,255,.6);"
      }
    ],
    "brief": {
      "en": "Create the surface using skeuomorphism. Defining signals: controls rendered as simulated physical materials (e.g. leather, paper, brushed metal) with visible texture; a consistent lighting model — gloss highlights on raised elements, inner shadows on recessed fields; real-object metaphors for whole surfaces (a notepad drawn as ruled paper); crafted physical details like stitching or embossed text. Keep the specific material palette and density flexible. Use layered gradients with specular highlights, inset box-shadows for recessed fields, and subtle texture images or noise. Do not drift into neumorphism: the decisive difference is that skeuomorphic surfaces imitate real nameable materials, not one uniform soft-extruded surface. Preserve readable text contrast on textured backgrounds, visible controls and focus states, and reduced-motion support.",
      "zh": "用拟物设计（skeuomorphism）创建这个界面。决定性信号：控件渲染成仿真的实体材质（如皮革、纸张、拉丝金属），带可见纹理；一致的光照模型 —— 凸起元素上有高光，凹陷输入框有内阴影；整个表面使用实物隐喻（记事本画成横线纸）；缝线、压印文字这类手工感实体细节。具体的材质配色和密度保持灵活。使用带镜面高光的多层渐变、用 inset box-shadow 做凹陷区域，以及细腻的纹理图片或噪点。不要滑向新拟态：决定性区别在于拟物表面模仿的是真实的、叫得出名字的材质，而不是一块统一的柔和挤出表面。保证纹理背景上的文字对比度可读、控件和焦点状态可见，并支持 reduced-motion。"
    },
    "accessibility": {
      "en": "Text over textures (leather, linen, wood) needs a measured 4.5:1 contrast against the BUSIEST region of the texture, not its average color.\n\nDecorative bevels and gloss must not be the only pressed/unpressed signal — pair states with a color or content change.\n\nHeavy texture images add page weight; ship them compressed and let the UI stand without them.",
      "zh": "纹理（皮革、亚麻、木纹）上的文字需要对着纹理最杂乱的区域实测 4.5:1 对比度，而不是对着它的平均色。\n\n装饰性的斜面和高光不能是按下/未按下的唯一信号 —— 状态变化要同时配上颜色或内容变化。\n\n大尺寸纹理图片会增加页面体积；压缩后再发布，并且界面在没有它们时也要立得住。"
    },
    "origin": {
      "en": "As old as the GUI itself (the 1980s desktop metaphor), but the style label usually points at Apple's 2007–2012 era — iOS's leather calendars, felt Game Center, and reel-to-reel Podcasts app under Scott Forstall — ended publicly by iOS 7's flat redesign in 2013.",
      "zh": "它和 GUI 本身一样老（上世纪 80 年代的桌面隐喻），但这个风格标签通常指 Apple 2007–2012 年那段时期 —— Scott Forstall 主导下 iOS 的皮革日历、绿呢 Game Center、开盘磁带式的播客 App —— 2013 年 iOS 7 的扁平化重设计公开终结了它。"
    },
    "seeAlso": [
      {
        "slug": "styles/neumorphism",
        "name": "Neumorphism"
      },
      {
        "slug": "styles/flat-design",
        "name": "Flat Design"
      },
      {
        "slug": "styles/frutiger-aero",
        "name": "Frutiger Aero"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/aqua",
        "name": "Aqua"
      }
    ]
  },
  {
    "slug": "neumorphism",
    "name": {
      "en": "Neumorphism",
      "zh": "新拟态"
    },
    "tagline": {
      "en": "Neumorphism renders every control as if extruded from, or pressed into, the page itself: background and controls share one matte color, and shape comes entirely from a pair of soft shadows — light from the top-left, dark toward the bottom-right. Nothing has a border and nothing floats; the whole interface reads as one continuous molded surface. It photographs beautifully and tests poorly: the same softness that makes it distinctive erases the contrast real controls need.",
      "zh": "新拟态把每个控件都渲染得像从页面本身挤出来、或压进去的一样：背景和控件共享同一种哑光色，形状完全来自一对柔和阴影 —— 亮部朝左上，暗部朝右下。没有描边，也没有悬浮；整个界面读起来就是一块连续的模压表面。它截图好看，实测糟糕：正是那份让它出挑的柔和，抹掉了真实控件所需的对比度。"
    },
    "scope": {
      "en": "Scope: Covers the 2019–2021 'Soft UI' trend look. Its 3D-clay sibling with thicker, toy-like inflation is usually called claymorphism and is a separate (future) entry.",
      "zh": "范围：覆盖 2019–2021 年「Soft UI」（软 UI）风潮的样子。它那位膨胀得更厚、像玩具的 3D 黏土亲戚通常叫黏土拟态（claymorphism），是另一个（待写的）条目。"
    },
    "aliases": {
      "en": [
        "soft buttons pushed out of the background",
        "everything looks like its molded from the same clay-ish surface",
        "the pillowy embossed buttons with two shadows",
        "controls that look stamped into the page",
        "that soft grey dashboard where buttons have no borders"
      ],
      "zh": [
        "从背景里顶出来的软软按钮",
        "所有东西都像从同一块黏土似的表面里压出来的",
        "那种带两道阴影、枕头一样鼓鼓的浮雕按钮",
        "看起来像摁进页面里的控件",
        "那个灰扑扑、按钮没边框的柔和仪表盘"
      ]
    },
    "signals": [
      {
        "id": "single-surface",
        "role": "defining",
        "name": {
          "en": "One continuous surface",
          "zh": "一块连续的表面"
        },
        "facet": "surface",
        "description": {
          "en": "Controls and background share the SAME matte color — elements aren't placed on the page, they're molded from it.",
          "zh": "控件和背景共享同一种哑光色 —— 元素不是摆在页面上，而是从页面里模压出来的。"
        }
      },
      {
        "id": "dual-shadows",
        "role": "defining",
        "name": {
          "en": "Dual soft shadows",
          "zh": "双重柔和阴影"
        },
        "facet": "depth",
        "description": {
          "en": "Every raised element carries two blurred shadows: a light one up-left and a dark one down-right, as if lit from one soft corner light.",
          "zh": "每个凸起元素都带两道模糊阴影：左上一道亮的，右下一道暗的，仿佛被角落里一盏柔和的灯照亮。"
        }
      },
      {
        "id": "pressed-inset",
        "role": "defining",
        "name": {
          "en": "Pressed (inset) states",
          "zh": "按压（内凹）状态"
        },
        "facet": "depth",
        "description": {
          "en": "Inputs and active states invert the shadow pair inward, so the element looks pressed INTO the surface rather than raised from it.",
          "zh": "输入框和激活状态把这对阴影反转朝内，元素看起来就像被压进表面，而不是浮在上面。"
        }
      },
      {
        "id": "borderless-low-contrast",
        "role": "defining",
        "name": {
          "en": "No borders, whisper contrast",
          "zh": "无描边，耳语级对比"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges exist only where the shadows fade — no outlines, no strong fills; the whole UI sits within a narrow band of one hue.",
          "zh": "边缘只存在于阴影渐隐的地方 —— 没有轮廓线，没有强烈的填充色；整个界面待在一个色相的窄窄区间里。"
        }
      },
      {
        "id": "soft-radii",
        "role": "supporting",
        "name": {
          "en": "Generous rounded corners",
          "zh": "大方的圆角"
        },
        "facet": "geometry",
        "description": {
          "en": "Large, soft radii everywhere — crisp corners would break the molded illusion.",
          "zh": "到处都是大而软的圆角 —— 尖锐的直角会打破模压的幻觉。"
        }
      },
      {
        "id": "hue",
        "role": "variable",
        "name": {
          "en": "Any single base hue",
          "zh": "任意单一基色"
        },
        "facet": "color",
        "description": {
          "en": "Classically a pale grey-blue (#e0e5ec), but the effect works on any light, low-saturation base; one saturated accent may survive for the primary action.",
          "zh": "经典款是浅灰蓝（#e0e5ec），但任何浅色、低饱和的基色都成立；可以为主操作留一个高饱和的强调色。"
        }
      },
      {
        "id": "textures-images",
        "role": "avoid",
        "name": {
          "en": "Textures and materials",
          "zh": "纹理与材质"
        },
        "facet": "imagery",
        "description": {
          "en": "Leather, paper, or gloss would reintroduce skeuomorphism — neumorphic surfaces are matte, uniform, and material-less.",
          "zh": "皮革、纸张或高光会把拟物请回来 —— 新拟态的表面是哑光的、均匀的、没有材质感的。"
        }
      }
    ],
    "confusedWith": {
      "slug": "skeuomorphism",
      "name": "Skeuomorphism",
      "because": {
        "en": "This is neumorphism because the controls and the background are one material-less matte surface, shaped only by soft dual shadows.",
        "zh": "这是新拟态，因为控件和背景是一块没有材质感的哑光表面，只靠柔和的双阴影塑形。"
      },
      "wouldBecomeIf": {
        "en": "It would become skeuomorphism if surfaces started imitating real nameable materials — leather grain, glossy plastic, brushed metal — with textures and object metaphors.",
        "zh": "如果表面开始模仿真实的、叫得出名字的材质 —— 皮革纹理、亮面塑料、拉丝金属 —— 带上纹理和实物隐喻，就变成拟物设计了。"
      }
    },
    "code": [
      {
        "title": "Raised element on the classic base hue",
        "language": "css",
        "code": "background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;"
      },
      {
        "title": "Pressed / input inset state",
        "language": "css",
        "code": "box-shadow: inset -4px -4px 8px rgba(255,255,255,.75), inset 4px 4px 8px rgba(163,177,198,.55);"
      }
    ],
    "brief": {
      "en": "Create the surface using neumorphism (Soft UI). Defining signals: controls share the background's exact matte color; raised elements get dual soft shadows (light top-left, dark bottom-right); pressed/input states invert the shadows inward (inset); no borders anywhere; generous rounded corners. Keep the base hue flexible (classically a pale grey-blue like #e0e5ec) and allow one saturated accent for the primary action. Use CSS box-shadow pairs, e.g. raised: box-shadow: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); pressed: the same pair with inset. Do not drift into skeuomorphism; the decisive difference is that neumorphic surfaces are one uniform material-less matte — no textures, gloss, or imitated materials. Preserve readable text contrast, a visible non-shadow cue for focus and states (WCAG non-text contrast will fail on shadows alone), and reduced-motion support.",
      "zh": "用新拟态（Soft UI）创建这个界面。决定性信号：控件与背景共享完全相同的哑光色；凸起元素带双重柔和阴影（左上亮、右下暗）；按压/输入状态把阴影反转朝内（inset）；任何地方都没有描边；圆角大而柔和。基色保持灵活（经典是 #e0e5ec 这类浅灰蓝），允许为主操作保留一个高饱和强调色。使用成对的 CSS box-shadow，例如凸起：box-shadow: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6)；按压：同一对阴影加 inset。不要滑向拟物设计；决定性区别在于新拟态的表面是一块统一的、没有材质感的哑光面 —— 没有纹理、没有高光、没有模仿材质。保证文字对比度可读，为焦点和状态提供阴影以外的可见提示（只靠阴影过不了 WCAG 非文本对比度），并支持 reduced-motion。"
    },
    "accessibility": {
      "en": "The style's signature IS a WCAG problem: shadow-only boundaries rarely reach the 3:1 non-text contrast minimum — add a real focus ring and at least one non-shadow state cue (color, icon, label).\n\nDisabled vs enabled vs pressed all look similar in pure neumorphism; users with low vision may not find the controls at all. NN/g and the coining authors themselves warn against shipping it for functional UI.\n\nIf you keep it, reserve it for large decorative containers and give interactive elements stronger contrast than the style would like.",
      "zh": "这个风格的招牌特征本身就是 WCAG 问题：只有阴影的边界很少能达到 3:1 的非文本对比度下限 —— 要加真正的焦点环，并至少配一个非阴影的状态提示（颜色、图标、文字标签）。\n\n在纯新拟态里，禁用、可用、按下的样子都差不多；低视力用户可能根本找不到控件。NN/g 和提出这个词的作者本人都警告过：别把它用在功能性界面上。\n\n如果一定要用，把它留给大型装饰性容器，并让可交互元素的对比度强过这个风格的本意。"
    },
    "origin": {
      "en": "A Dribbble-era trend: Alexander Plyuto's 2019 'Skeuomorph Mobile Banking' shots went viral, Jason Kelley's comment coined the name, and Michal Malewicz's 2019–2020 articles defined and then warned about it. It stayed mostly a concept-shot style — few shipping products survived its accessibility costs.",
      "zh": "一场 Dribbble 时代的风潮：Alexander Plyuto 2019 年的「Skeuomorph Mobile Banking」概念图疯传，Jason Kelley 的一条评论造出了这个名字，Michal Malewicz 2019–2020 年的文章先是定义了它、随后又发出警告。它基本停留在概念稿阶段 —— 没什么上线产品扛得住它的无障碍代价。"
    },
    "seeAlso": [
      {
        "slug": "styles/skeuomorphism",
        "name": "Skeuomorphism"
      },
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      },
      {
        "slug": "styles/neobrutalism",
        "name": "Neobrutalism"
      }
    ]
  },
  {
    "slug": "glassmorphism",
    "name": {
      "en": "Glassmorphism",
      "zh": "玻璃拟态"
    },
    "tagline": {
      "en": "Glassmorphism builds interfaces from translucent, frosted panels: the background — usually something vivid — blurs through each surface, a thin light border catches the 'edge' of the glass, and layers stack with soft shadows to sell the depth. The style lives or dies by its backdrop: over a plain background the glass reads as plain grey; over a colorful gradient it glows.",
      "zh": "玻璃拟态用半透明的磨砂玻璃面板搭建界面：背景 —— 通常是鲜艳的东西 —— 透过每一层表面模糊地显出来，一条细细的浅色描边勾住玻璃的「边缘」，层与层之间用柔和的投影堆出纵深。这个风格的生死全看背景：背景平淡，玻璃就只是一片灰；背景是彩色渐变，它就发光。"
    },
    "scope": {
      "en": "Scope: Covers the generic frosted-glass content style. Apple's system-wide adaptive material is Liquid Glass (its own entry), and the older macOS behind-window blur is vibrancy — a UI term, not a style.",
      "zh": "范围：覆盖通用的磨砂玻璃内容风格。Apple 的全系统自适应材质是液态玻璃（Liquid Glass，另有条目），更早的 macOS 窗口后模糊叫 vibrancy —— 那是一个 UI 术语，不是一种风格。"
    },
    "aliases": {
      "en": [
        "frosted cards over colorful wallpaper",
        "the see-through blurry card effect",
        "panels that blur whatever is behind them",
        "milky transparent cards with a thin light border",
        "that translucent dashboard look with a gradient background"
      ],
      "zh": [
        "彩色壁纸上叠着磨砂卡片",
        "那种半透明、后面模糊的卡片效果",
        "把背后东西都模糊掉的面板",
        "乳白色半透明、带一条细细亮边的卡片",
        "渐变背景上那种半透明仪表盘的感觉"
      ]
    },
    "signals": [
      {
        "id": "frosted-panel",
        "role": "defining",
        "name": {
          "en": "Frosted translucent panels",
          "zh": "磨砂半透明面板"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces are semi-transparent with a strong background blur — content behind is visible but softened, like frosted glass.",
          "zh": "表面半透明，带强烈的背景模糊 —— 背后的内容看得见但被柔化，像磨砂玻璃。"
        }
      },
      {
        "id": "vivid-backdrop",
        "role": "defining",
        "name": {
          "en": "Vivid backdrop showing through",
          "zh": "鲜艳背景透出来"
        },
        "facet": "color",
        "description": {
          "en": "A colorful gradient, photo, or aurora sits behind the glass; its color bleeds through every panel and IS most of the palette.",
          "zh": "玻璃后面垫着彩色渐变、照片或极光；它的颜色渗进每一块面板，几乎就是全部配色。"
        }
      },
      {
        "id": "glass-edge",
        "role": "defining",
        "name": {
          "en": "Thin light edge",
          "zh": "细细的亮边"
        },
        "facet": "geometry",
        "description": {
          "en": "A 1px semi-transparent white border (often brighter on top) catches the rim of each panel, separating glass from glass.",
          "zh": "一条 1px 的半透明白边（通常顶部更亮）勾出每块面板的边缘，把玻璃和玻璃分开。"
        }
      },
      {
        "id": "layered-depth",
        "role": "defining",
        "name": {
          "en": "Layered floating depth",
          "zh": "层叠的悬浮纵深"
        },
        "facet": "depth",
        "description": {
          "en": "Panels float above the backdrop and above each other with soft, wide shadows — the stack of sheets is part of the look.",
          "zh": "面板悬浮在背景之上、也彼此悬浮，配柔和的大范围投影 —— 这一叠「薄片」本身就是观感的一部分。"
        }
      },
      {
        "id": "white-ink",
        "role": "supporting",
        "name": {
          "en": "Light ink on glass",
          "zh": "玻璃上的浅色文字"
        },
        "facet": "typography",
        "description": {
          "en": "Text and icons are usually white or near-white with slight transparency steps for hierarchy.",
          "zh": "文字和图标通常是白色或近白色，用轻微的透明度阶梯区分层级。"
        }
      },
      {
        "id": "backdrop-content",
        "role": "variable",
        "name": {
          "en": "What the backdrop is",
          "zh": "背景是什么"
        },
        "facet": "imagery",
        "description": {
          "en": "Gradient mesh, aurora, photography, or brand color field — any vivid, soft backdrop works; the glass recipe stays the same.",
          "zh": "渐变网格、极光、摄影、品牌色域 —— 任何鲜艳柔和的背景都行；玻璃的配方不变。"
        }
      },
      {
        "id": "opaque-panels",
        "role": "avoid",
        "name": {
          "en": "Opaque or unblurred panels",
          "zh": "不透明或不模糊的面板"
        },
        "facet": "surface",
        "description": {
          "en": "Solid cards (or transparency without blur) lose the frosted read — transparency alone is just low opacity, not glass.",
          "zh": "实色卡片（或者只透明不模糊）会失去磨砂的感觉 —— 只有透明只是低不透明度，不是玻璃。"
        }
      }
    ],
    "confusedWith": {
      "slug": "liquid-glass",
      "name": "Liquid Glass",
      "because": {
        "en": "This is glassmorphism because the frosted treatment is a generic decorative skin — content cards, dashboards, whole panels can all be glass over a wallpaper you chose.",
        "zh": "这是玻璃拟态，因为磨砂处理是一种通用的装饰皮肤 —— 内容卡片、仪表盘、整块面板，全都可以是你自选壁纸上的玻璃。"
      },
      "wouldBecomeIf": {
        "en": "It would become Liquid Glass if the glass were reserved for the CONTROL layer — bars, buttons, navigation floating above app content — using Apple's adaptive material that lenses and re-tints from whatever scrolls beneath it.",
        "zh": "如果玻璃只留给控制层 —— 悬浮在应用内容之上的栏、按钮、导航 —— 用的是 Apple 那种会对下方滚动内容做透镜折光并重新染色的自适应材质，就变成液态玻璃了。"
      }
    },
    "code": [
      {
        "title": "The core glass panel recipe",
        "language": "css",
        "code": "background: rgba(255,255,255,.12); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,.25); border-radius: 16px;"
      },
      {
        "title": "Fallback: without blur support, go near-opaque",
        "language": "css",
        "code": "@supports not (backdrop-filter: blur(1px)) { background: rgba(30,30,40,.85); }"
      },
      {
        "title": "System material ≈ frosted panel (see also Liquid Glass)",
        "language": "swiftui",
        "code": ".background(.ultraThinMaterial)"
      }
    ],
    "brief": {
      "en": "Create the surface using glassmorphism. Defining signals: semi-transparent panels with a strong backdrop blur; a vivid gradient or photographic backdrop whose color bleeds through every panel; a thin 1px semi-transparent white border on each panel edge; layered floating depth with soft wide shadows. Keep the backdrop's specific colors and imagery flexible. Use CSS backdrop-filter: blur(16px) with background: rgba(255,255,255,0.12) (or a dark equivalent) and border: 1px solid rgba(255,255,255,0.25). Do not drift into Apple's Liquid Glass; the decisive difference is that glassmorphism is a decorative skin for any surface including content cards, while Liquid Glass reserves glass for the floating control layer above content. Preserve readable text over every region the backdrop can produce (add a contrast scrim if needed), visible controls and focus states, and reduced-motion/reduced-transparency fallbacks.",
      "zh": "用玻璃拟态（glassmorphism）创建这个界面。决定性信号：半透明面板带强烈的背景模糊；鲜艳的渐变或摄影背景，颜色渗进每一块面板；每块面板边缘有一条 1px 的半透明白边；用柔和大投影做出层叠悬浮的纵深。背景的具体配色和图像保持灵活。使用 CSS backdrop-filter: blur(16px)，配 background: rgba(255,255,255,0.12)（或等价的深色）和 border: 1px solid rgba(255,255,255,0.25)。不要滑向 Apple 的液态玻璃；决定性区别在于玻璃拟态是给包括内容卡片在内的任何表面用的装饰皮肤，而液态玻璃把玻璃留给悬浮在内容之上的控制层。保证文字在背景可能出现的任何区域上都可读（必要时加一层对比度 scrim），控件和焦点状态可见，并提供 reduced-motion / reduced-transparency 的降级方案。"
    },
    "accessibility": {
      "en": "Text contrast over glass is unstable: the backdrop moves and varies, so measure against the worst region or add a translucent contrast scrim behind text.\n\nHonor prefers-reduced-transparency (and OS 'Reduce transparency') with near-opaque fallbacks.\n\nbackdrop-filter is expensive on low-end devices; the layout must survive its absence — never hide content behind a failed blur.",
      "zh": "玻璃上的文字对比度不稳定：背景会动、会变，所以要对着最差的区域实测，或者在文字背后加一层半透明的对比度 scrim（衬底层）。\n\n用接近不透明的降级方案响应 prefers-reduced-transparency（以及系统的「降低透明度」设置）。\n\nbackdrop-filter 在低端设备上开销很大；布局必须在它失效时依然成立 —— 永远别让内容被一块失败了的模糊遮住。"
    },
    "origin": {
      "en": "The effect is decades old — Windows Vista's Aero glass (2006), iOS 7's blur layers (2013), macOS vibrancy — but the style label dates to Michal Malewicz's 2020 article, after the look spread through Dribbble and Big Sur-era redesigns.",
      "zh": "这种效果有几十年历史了 —— Windows Vista 的 Aero 玻璃（2006）、iOS 7 的模糊图层（2013）、macOS 的 vibrancy —— 但这个风格标签出自 Michal Malewicz 2020 年的文章，在此之前它已在 Dribbble 和 Big Sur 时代的重设计里传开。"
    },
    "seeAlso": [
      {
        "slug": "styles/liquid-glass",
        "name": "Liquid Glass"
      },
      {
        "slug": "styles/windows-aero",
        "name": "Windows Aero"
      },
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "styles/neumorphism",
        "name": "Neumorphism"
      },
      {
        "slug": "styles/frutiger-aero",
        "name": "Frutiger Aero"
      },
      {
        "slug": "macos/vibrancy",
        "name": "Visual Effect Material (Vibrancy)"
      },
      {
        "slug": "web/scrim",
        "name": "Scrim (Backdrop / Overlay)"
      }
    ]
  },
  {
    "slug": "liquid-glass",
    "name": {
      "en": "Liquid Glass",
      "zh": "液态玻璃"
    },
    "tagline": {
      "en": "Liquid Glass is Apple's adaptive material for controls and navigation: toolbars, tab bars, buttons, and sliders render as lens-like glass that floats in its own layer above app content, refracting what scrolls beneath and re-tinting itself for legibility in light and dark contexts. It is functional, not decorative — Apple applies it to the control layer and keeps content itself opaque. Capsule shapes and concentric corner radii are part of the geometry.",
      "zh": "液态玻璃是 Apple 为控件和导航准备的自适应材质：工具栏、标签栏、按钮和滑块渲染成透镜般的玻璃，悬浮在应用内容上方自己那一层里，对下方滚过的内容做透镜折光，并随明暗环境重新给自己染色以保持可读。它是功能性的，不是装饰性的 —— Apple 只把它用在控制层，内容本身保持不透明。胶囊造型和同心圆角半径也是这套几何语言的一部分。"
    },
    "scope": {
      "en": "Scope: 'SwiftUI style' is not a style — SwiftUI is Apple's UI framework. Apps built with it currently LOOK like Liquid Glass; before 2025 they had the flatter platform-native Apple look, and early Mac OS X's candy-and-pinstripes look was Aqua. If someone says 'make it look like SwiftUI', they usually mean this entry.",
      "zh": "范围：「SwiftUI 风格」不是一种风格 —— SwiftUI 是 Apple 的 UI 框架。用它做的 App 现在看起来是液态玻璃的样子；2025 年之前是更扁平的 Apple 平台原生观感，而早期 Mac OS X 那种糖果加细条纹的样子叫 Aqua。如果有人说「做成 SwiftUI 那样」，他们通常指的就是本条。"
    },
    "aliases": {
      "en": [
        "the new apple design where buttons look like water drops",
        "the swiftui look",
        "ios buttons that look like real glass and bend whats behind them",
        "apple's new transparent bubbly toolbar style",
        "the glass tab bar that floats over the app content"
      ],
      "zh": [
        "苹果新设计里按钮像水滴的那个",
        "SwiftUI 那种样子",
        "iOS 上那种像真玻璃、会把背后东西掰弯的按钮",
        "苹果新的那种透明泡泡工具栏风格",
        "悬浮在应用内容上的玻璃标签栏"
      ]
    },
    "signals": [
      {
        "id": "control-layer",
        "role": "defining",
        "name": {
          "en": "Glass = the control layer",
          "zh": "玻璃 = 控制层"
        },
        "facet": "layout",
        "description": {
          "en": "Only controls and navigation are glass — bars, buttons, sliders float above the app; the content beneath stays opaque and full-contrast.",
          "zh": "只有控件和导航是玻璃 —— 栏、按钮、滑块悬浮在应用之上；下面的内容保持不透明、全对比度。"
        }
      },
      {
        "id": "lensing",
        "role": "defining",
        "name": {
          "en": "Lensing, not just blur",
          "zh": "透镜折光，不只是模糊"
        },
        "facet": "depth",
        "description": {
          "en": "The material behaves like a real lens: it bends and concentrates light from what's beneath, with bright edge highlights — richer than a flat frosted blur.",
          "zh": "这种材质像真正的透镜一样工作：它弯折并汇聚来自下方的光，边缘有明亮的高光 —— 比平平的磨砂模糊丰富得多。"
        }
      },
      {
        "id": "adaptive-tint",
        "role": "defining",
        "name": {
          "en": "Adaptive self-tinting",
          "zh": "自适应自我染色"
        },
        "facet": "color",
        "description": {
          "en": "The glass continuously re-tints from the content scrolling under it and flips between light and dark appearance on its own to stay legible.",
          "zh": "玻璃会根据下方滚过的内容持续重新染色，并自行在明暗两种外观间切换，始终保持可读。"
        }
      },
      {
        "id": "capsule-concentric",
        "role": "defining",
        "name": {
          "en": "Capsule and concentric geometry",
          "zh": "胶囊与同心几何"
        },
        "facet": "geometry",
        "description": {
          "en": "Controls tend to capsules; nested corners share a common center (concentric radii), so the glass shapes sit optically flush inside their containers.",
          "zh": "控件趋向胶囊形；嵌套圆角共享同一个圆心（同心半径），玻璃形状在视觉上与容器内壁齐平贴合。"
        }
      },
      {
        "id": "morphing-controls",
        "role": "supporting",
        "name": {
          "en": "Controls morph fluidly",
          "zh": "控件流畅变形"
        },
        "facet": "motion",
        "description": {
          "en": "Glass elements merge, split, and reshape as context changes — a tab bar shrinking on scroll, a button expanding into a menu.",
          "zh": "玻璃元素随情境变化合并、分裂、重塑 —— 滚动时收缩的标签栏，展开成菜单的按钮。"
        }
      },
      {
        "id": "platform-scope",
        "role": "variable",
        "name": {
          "en": "Underlying content",
          "zh": "底层内容"
        },
        "facet": "imagery",
        "description": {
          "en": "Anything can sit beneath the glass — photos, maps, lists; the material adapts to it rather than requiring a curated backdrop.",
          "zh": "玻璃下面可以是任何东西 —— 照片、地图、列表；材质会去适应内容，而不是要求一块精心准备的背景。"
        }
      },
      {
        "id": "glass-content",
        "role": "avoid",
        "name": {
          "en": "Glass content cards",
          "zh": "玻璃内容卡片"
        },
        "facet": "surface",
        "description": {
          "en": "Making content itself translucent — glass cards on glass backgrounds — is exactly what Apple's guidance avoids; that's generic glassmorphism, and it costs legibility.",
          "zh": "把内容本身做成半透明 —— 玻璃背景上叠玻璃卡片 —— 正是 Apple 指南要避免的；那是通用的玻璃拟态，代价是可读性。"
        }
      }
    ],
    "confusedWith": {
      "slug": "glassmorphism",
      "name": "Glassmorphism",
      "because": {
        "en": "This is Liquid Glass because the glass is a functional system material reserved for controls and navigation floating above opaque content, adapting its own tint for legibility.",
        "zh": "这是液态玻璃，因为这里的玻璃是一种功能性系统材质，只留给悬浮在不透明内容之上的控件和导航，并会为了可读性自动调整自己的染色。"
      },
      "wouldBecomeIf": {
        "en": "It would become glassmorphism if the frosted treatment spread to the content itself — translucent cards over a decorative wallpaper, blur as a skin rather than a control layer.",
        "zh": "如果磨砂处理蔓延到内容本身 —— 装饰壁纸上半透明的卡片，模糊成了皮肤而不是控制层 —— 就变成玻璃拟态了。"
      }
    },
    "code": [
      {
        "title": "The real material — standard toolbars/tab bars adopt it automatically",
        "language": "swiftui",
        "code": ".glassEffect(.regular, in: .capsule)"
      },
      {
        "title": "Lets neighboring glass controls merge and morph together",
        "language": "swiftui",
        "code": "GlassEffectContainer { … }"
      },
      {
        "title": "Web approximation: lens-ish capsule (no true refraction)",
        "language": "css",
        "code": "backdrop-filter: blur(14px) saturate(1.6); background: rgba(255,255,255,.08); box-shadow: inset 0 1px 1px rgba(255,255,255,.35), inset 0 -1px 1px rgba(255,255,255,.12); border-radius: 999px;"
      }
    ],
    "brief": {
      "en": "Create the surface in the spirit of Apple's Liquid Glass. Defining signals: glass is reserved for the floating control layer (toolbars, tab bars, buttons) above opaque content; the material lenses what's beneath it — blur plus refraction-like edge highlights, not flat frost; controls adapt their tint to stay legible over changing content; capsule shapes with concentric corner radii. Keep the underlying content unrestricted. On Apple platforms use the real APIs — SwiftUI .glassEffect(), glassEffect(.regular, in: .capsule), and standard bars get it automatically; on the web approximate with backdrop-filter: blur + saturate, layered inner highlights, and capsule radii. Do not drift into generic glassmorphism; the decisive difference is that content never becomes glass — only controls float as glass above it. Preserve legibility over every content region (the real material self-adapts — your approximation must too), visible focus states, and honor Reduce Transparency / Reduce Motion.",
      "zh": "按 Apple 液态玻璃（Liquid Glass）的精神创建这个界面。决定性信号：玻璃只留给悬浮在不透明内容之上的控制层（工具栏、标签栏、按钮）；材质对下方内容做透镜折光 —— 模糊加折射感的边缘高光，而不是平平的磨砂；控件随内容变化调整自己的染色以保持可读；胶囊造型配同心圆角半径。底层内容不加限制。在 Apple 平台上用真正的 API —— SwiftUI 的 .glassEffect()、glassEffect(.regular, in: .capsule)，标准栏会自动获得效果；在 Web 上用 backdrop-filter: blur + saturate、分层内高光和胶囊圆角来近似。不要滑向通用的玻璃拟态；决定性区别在于内容永远不会变成玻璃 —— 只有控件作为玻璃悬浮在它之上。保证在任何内容区域上都可读（真材质会自适应 —— 你的近似实现也必须做到），焦点状态可见，并响应 Reduce Transparency / Reduce Motion。"
    },
    "accessibility": {
      "en": "Apple's material self-adjusts for legibility — a hand-rolled web imitation does not; test text over the worst content that can scroll beneath and add contrast treatment.\n\nHonor Reduce Transparency (near-opaque fallback) and Reduce Motion (disable morphing).\n\nNever place critical text directly on imitation glass without a measured 4.5:1 against live worst-case backgrounds.",
      "zh": "Apple 的材质会为可读性自我调整 —— 手搓的 Web 模仿不会；要对着可能滚到下方的最差内容测试文字，并加对比度处理。\n\n响应 Reduce Transparency（降级为接近不透明）和 Reduce Motion（关闭变形动画）。\n\n永远别把关键文字直接放在模仿玻璃上，除非对着实时最坏背景实测达到 4.5:1。"
    },
    "origin": {
      "en": "Introduced by Apple at WWDC 2025 as the first unified design language across iPhone, iPad, Mac, Watch, and TV — Apple credits visionOS's glass optics as the inspiration, and ships it as a system material with SwiftUI/UIKit/AppKit APIs rather than a mere visual theme.",
      "zh": "Apple 在 WWDC 2025 上发布，是首个横跨 iPhone、iPad、Mac、Watch 和 TV 的统一设计语言 —— Apple 称灵感来自 visionOS 的玻璃光学，并把它作为系统材质随 SwiftUI/UIKit/AppKit API 一起发布，而不只是一个视觉主题。"
    },
    "seeAlso": [
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      },
      {
        "slug": "styles/aqua",
        "name": "Aqua"
      },
      {
        "slug": "macos/vibrancy",
        "name": "Visual Effect Material (Vibrancy)"
      },
      {
        "slug": "macos/toolbar",
        "name": "Toolbar (Unified Title Bar)"
      },
      {
        "slug": "macos/sheet",
        "name": "Sheet"
      }
    ]
  },
  {
    "slug": "web-brutalism",
    "name": {
      "en": "Web Brutalism",
      "zh": "网页粗野主义"
    },
    "tagline": {
      "en": "Web Brutalism treats the browser's own materials as the finished surface: default or system fonts, unstyled-looking links, visible document structure, plain borders and horizontal rules, and density over polish. Nothing pretends to be anything else — no gradients imitating glass, no shadows imitating depth. At its best it's honest and fast (Craigslist, Hacker News, early-web personal sites); at its worst the label gets stretched over anything unpolished.",
      "zh": "网页粗野主义把浏览器自带的材料当作最终成品表面：默认或系统字体、看上去没加样式的链接、清晰可见的文档结构、朴素的边框和水平分隔线，以及重密度轻修饰。没有任何东西假装成别的东西——没有模仿玻璃的渐变，也没有假装深度的阴影。做得好时它诚实而飞快（Craigslist、Hacker News、早期网络的个人网站）；做得差时，这个标签会被随便贴在任何不精致的东西上。"
    },
    "scope": {
      "en": "Scope: Distinct from architectural Brutalism (exposed concrete and mass — the analogy's source), and from Neobrutalism (a styled, saturated, thick-border graphic look that is anything but default). The nostalgic table-and-GIF personal-site look is Vernacular Web, a separate (future) entry.",
      "zh": "范围：不同于建筑上的粗野主义（裸露的混凝土与体量——正是这个类比的来源），也不同于新粗野主义（一种经过设计、色彩饱和、粗边框的图形化外观，跟「默认」毫不沾边）。那种怀旧的表格加 GIF 个人网站风是民间网页（Vernacular Web），另立条目（待出）。"
    },
    "aliases": {
      "en": [
        "ugly raw html website",
        "site that looks like no css was written",
        "just times new roman and blue links",
        "the bare-bones craigslist look",
        "web page that shows its structure with no decoration"
      ],
      "zh": [
        "丑丑的裸 HTML 网站",
        "看着像一行 CSS 都没写的网站",
        "就 Times New Roman 加蓝链接",
        "Craigslist 那种极简裸奔风",
        "结构全露在外面、毫无装饰的网页"
      ]
    },
    "signals": [
      {
        "id": "browser-defaults",
        "role": "defining",
        "name": {
          "en": "Browser-default materials",
          "zh": "浏览器默认材料"
        },
        "facet": "typography",
        "description": {
          "en": "Times/system serif or monospace, default-blue underlined links, visited-purple — the stack looks unstyled even when it's deliberate.",
          "zh": "Times/系统衬线体或等宽字体，默认蓝色带下划线的链接，访问后变紫——哪怕是刻意为之，整套东西看上去也像没加样式。"
        }
      },
      {
        "id": "exposed-structure",
        "role": "defining",
        "name": {
          "en": "Exposed document structure",
          "zh": "裸露的文档结构"
        },
        "facet": "layout",
        "description": {
          "en": "The page reads as a document: headings, lists, tables, and <hr> dividers in source order — structure IS the layout.",
          "zh": "页面读起来就是一份文档：标题、列表、表格和 <hr> 分隔线按源码顺序排开——结构本身就是布局。"
        }
      },
      {
        "id": "no-decoration",
        "role": "defining",
        "name": {
          "en": "Zero decorative rendering",
          "zh": "零装饰性渲染"
        },
        "facet": "depth",
        "description": {
          "en": "No shadows, gradients, rounded corners, or imitation materials; at most 1px solid borders. Flat white (or single-color) ground.",
          "zh": "没有阴影、渐变、圆角或仿材质；最多 1px 实线边框。底色就是纯白（或单一颜色）。"
        }
      },
      {
        "id": "utility-density",
        "role": "defining",
        "name": {
          "en": "Utility-first density",
          "zh": "实用优先的高密度"
        },
        "facet": "layout",
        "description": {
          "en": "Information is packed tight and loads instantly — the aesthetic argument is speed and honesty, not beauty.",
          "zh": "信息塞得紧、加载快——它的美学主张是速度和诚实，不是漂亮。"
        }
      },
      {
        "id": "mono-accents",
        "role": "variable",
        "name": {
          "en": "Monospace / all-caps accents",
          "zh": "等宽 / 全大写点缀"
        },
        "facet": "typography",
        "description": {
          "en": "Many brutalist sites swap to monospace or shouting caps for flavor; others stay pure serif. Both count.",
          "zh": "很多粗野主义网站换成等宽字体或用「喊叫式」全大写来调味；也有坚持纯衬线的。两种都算数。"
        }
      },
      {
        "id": "styled-rawness",
        "role": "avoid",
        "name": {
          "en": "Styled 'rawness'",
          "zh": "被设计出来的「生」"
        },
        "facet": "color",
        "description": {
          "en": "Saturated color blocks, thick designed borders, and hard offset shadows are a costume of rawness — that's Neobrutalism.",
          "zh": "饱和色块、粗重的设计感边框和生硬偏移阴影是「生」的戏服——那是新粗野主义。"
        }
      }
    ],
    "confusedWith": {
      "slug": "neobrutalism",
      "name": "Neobrutalism",
      "because": {
        "en": "This is Web Brutalism because the page is genuinely built from browser defaults — system type, blue links, bare structure, no decorative rendering at all.",
        "zh": "这是网页粗野主义，因为页面确实是用浏览器默认值搭出来的——系统字体、蓝色链接、裸露的结构，完全没有装饰性渲染。"
      },
      "wouldBecomeIf": {
        "en": "It would become Neobrutalism if the rawness were styled: saturated color blocks, thick uniform black borders, hard offset shadows, and chunky display type — a designed graphic language, not defaults.",
        "zh": "如果这份「生」是被设计出来的——饱和色块、统一的粗黑边框、生硬偏移阴影、粗壮展示字体，一套设计出来的图形语言而不是默认值——它就变成新粗野主义了。"
      }
    },
    "code": [
      {
        "title": "The materials ARE the elements",
        "language": "html",
        "code": "<h1>, <hr>, <table>, <ul> with UA default styles"
      },
      {
        "title": "If you must write CSS, restate the defaults",
        "language": "css",
        "code": "font-family: 'Times New Roman', serif; a { color: #0000ee; } a:visited { color: #551a8b; }"
      }
    ],
    "brief": {
      "en": "Create the page using strict Web Brutalism. Defining signals: browser-default materials (Times/system serif or monospace, default-blue underlined links); exposed document structure — headings, lists, tables, horizontal rules in source order; zero decorative rendering (no shadows, gradients, or rounded corners; at most 1px solid borders on a plain ground); utility-first density that loads instantly. Keep monospace vs serif and all-caps accents flexible. Use semantic HTML with minimal CSS — default UA styles are the design; resist resets that soften them. Do not drift into Neobrutalism; the decisive difference is that nothing here is styled to look raw — saturated blocks, thick designed borders, and offset shadows would make it a graphic costume. Preserve readable text sizes, focus visibility, and honest link affordances (underlines stay).",
      "zh": "用严格的网页粗野主义创建页面。定义性信号：浏览器默认材料（Times/系统衬线体或等宽字体、默认蓝色带下划线链接）；裸露的文档结构——标题、列表、表格、水平分隔线按源码顺序排开；零装饰性渲染（不要阴影、渐变、圆角；纯色底上最多 1px 实线边框）；实用优先、瞬间加载的高密度。等宽还是衬线、全大写点缀都保持灵活。用语义化 HTML 加极少量 CSS——UA 默认样式就是设计本身；不要引入会软化它们的 reset。不要滑向新粗野主义；决定性区别在于这里没有任何东西被设计成「看起来生」——饱和色块、粗重的设计感边框和偏移阴影会让它变成图形戏服。保持文字大小可读、焦点可见，以及诚实的链接可供性（下划线保留）。"
    },
    "accessibility": {
      "en": "Brutalism is accidentally accessible — semantic structure, honest links, no contrast-eating decoration — as long as text sizes stay readable and density leaves tap targets big enough.\n\nDefault-blue on white passes contrast; keep the default focus outline (removing it would be the one truly anti-brutalist move).\n\nDense tables need proper headers/scope for screen readers — visual rawness doesn't excuse structural rawness.",
      "zh": "粗野主义是无心插柳的无障碍——语义化结构、诚实的链接、没有吃掉对比度的装饰——只要文字大小保持可读、密度别把点按目标挤得太小。\n\n默认蓝配白底对比度达标；保留默认的焦点轮廓（把它删掉才是真正反粗野主义的操作）。\n\n密集的表格需要为屏幕阅读器配好 header/scope——视觉上的「生」不能成为结构偷懒的借口。"
    },
    "origin": {
      "en": "Named by analogy to architecture's béton brut ('raw concrete'); the web usage spread in the mid-2010s through Pascal Deville's brutalistwebsites.com and essays like Smashing Magazine's 'split personality of brutalist web development', as a reaction against the sameness of polished startup sites.",
      "zh": "名字类比自建筑界的 béton brut（法语「裸混凝土」）；2010 年代中期，这个用法通过 Pascal Deville 的 brutalistwebsites.com 和 Smashing Magazine 的「split personality of brutalist web development」等文章在网页圈传开，是对千篇一律的精致创业公司网站的反击。"
    },
    "seeAlso": [
      {
        "slug": "styles/neobrutalism",
        "name": "Neobrutalism"
      },
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      },
      {
        "slug": "styles/vernacular-web",
        "name": "Vernacular Web"
      },
      {
        "slug": "web/form-field",
        "name": "Form Field"
      },
      {
        "slug": "web/focus-ring-web",
        "name": "Focus Ring (:focus-visible)"
      }
    ]
  },
  {
    "slug": "neobrutalism",
    "name": {
      "en": "Neobrutalism",
      "zh": "新粗野主义"
    },
    "tagline": {
      "en": "Neobrutalism is a designed graphic language: flat, saturated color blocks outlined in thick black strokes, with hard offset shadows — solid black rectangles displaced a few pixels, no blur — and chunky display type. Elements read like stickers or risograph prints; pressing a button often physically 'pushes' it into its shadow. Despite the name it is the opposite of raw: every border and shadow is a deliberate illustration choice.",
      "zh": "新粗野主义是一套设计出来的图形语言：扁平的饱和色块勾着粗黑描边，配上生硬偏移阴影——纯黑矩形偏移几个像素、零模糊——再加上粗壮展示字体。元素读起来像贴纸或 Riso 孔版印刷品；按下按钮时，它常常真的被物理地「按进」自己的阴影里。名字里虽有粗野，它却是「生」的反面：每一道边框和阴影都是刻意的插画选择。"
    },
    "scope": {
      "en": "Scope: Takes brutalism's name but not its method — see Web Brutalism for the genuinely-raw sibling, and architectural Brutalism (exposed concrete) for where the word started. Memphis-style geometric confetti often decorates neobrutalist pages but is its own movement.",
      "zh": "范围：借了粗野主义的名字，却没借它的方法——真正「生」的兄弟见网页粗野主义，这个词的源头见建筑粗野主义（裸露的混凝土）。孟菲斯风格的几何彩纸屑常常装点新粗野主义页面，但那是另一场运动。"
    },
    "aliases": {
      "en": [
        "bright blocks with black outlines and hard shadows",
        "buttons with the thick black border and the solid shadow that doesn't blur",
        "that yellow and black sticker-looking website style",
        "cartoonish chunky ui with bold borders",
        "the gumroad-looking bold flat style"
      ],
      "zh": [
        "亮色块加黑描边和硬阴影",
        "粗黑边、阴影不模糊的那种按钮",
        "黄黑配色、像贴纸的网站风",
        "卡通感、粗边框的厚重 UI",
        "Gumroad 那种大胆的扁平风"
      ]
    },
    "signals": [
      {
        "id": "thick-outlines",
        "role": "defining",
        "name": {
          "en": "Thick black outlines",
          "zh": "粗黑描边"
        },
        "facet": "geometry",
        "description": {
          "en": "Every element — cards, buttons, inputs, even images — wears a uniform 2–3px solid black border, like an inked comic panel.",
          "zh": "每个元素——卡片、按钮、输入框，甚至图片——都套着统一的 2–3px 纯黑实线边框，像勾了墨线的漫画格子。"
        }
      },
      {
        "id": "hard-shadows",
        "role": "defining",
        "name": {
          "en": "Hard offset shadows",
          "zh": "生硬偏移阴影"
        },
        "facet": "depth",
        "description": {
          "en": "Shadows are solid black shapes displaced down-right with ZERO blur — graphic depth, not simulated lighting. Pressing collapses the offset.",
          "zh": "阴影是向右下偏移的纯黑色块，零模糊——图形化的纵深，不是模拟光照。按下时偏移归零。"
        }
      },
      {
        "id": "saturated-blocks",
        "role": "defining",
        "name": {
          "en": "Saturated flat color blocks",
          "zh": "饱和的扁平色块"
        },
        "facet": "color",
        "description": {
          "en": "Unapologetic fills — yellow, hot pink, lime, cyan — laid flat next to each other on a cream or white ground; no gradients.",
          "zh": "毫不歉意的填充色——黄、艳粉、青柠、青——平铺在米白或白色底上；不要渐变。"
        }
      },
      {
        "id": "chunky-type",
        "role": "defining",
        "name": {
          "en": "Chunky display type",
          "zh": "粗壮展示字体"
        },
        "facet": "typography",
        "description": {
          "en": "Bold, blocky grotesks or display faces, often oversized; body text stays plain so the headings can shout.",
          "zh": "粗黑、块状的 grotesk 或展示字体，常常放得超大；正文保持朴素，好让标题放开嗓子喊。"
        }
      },
      {
        "id": "sticker-shapes",
        "role": "supporting",
        "name": {
          "en": "Sticker shapes and doodles",
          "zh": "贴纸形状与涂鸦"
        },
        "facet": "imagery",
        "description": {
          "en": "Stars, blobby badges, arrows, and squiggles with the same black outlines, scattered like stickers.",
          "zh": "星星、不规则徽章、箭头和曲线，描着同款黑边，像贴纸一样散落各处。"
        }
      },
      {
        "id": "press-interaction",
        "role": "supporting",
        "name": {
          "en": "Push-into-shadow presses",
          "zh": "按进阴影的按压"
        },
        "facet": "motion",
        "description": {
          "en": "Hover/active states translate the element toward its shadow, as if pressing a physical sticker flat.",
          "zh": "hover/active 状态把元素朝自己的阴影平移，像把一张实体贴纸按平。"
        }
      },
      {
        "id": "palette-choice",
        "role": "variable",
        "name": {
          "en": "Which loud palette",
          "zh": "用哪套炸眼配色"
        },
        "facet": "color",
        "description": {
          "en": "Yellow-black is the cliché but any high-saturation set works; the borders and shadows carry the style, not one specific hue.",
          "zh": "黄黑配是老套路，但任何高饱和组合都行；撑起这个风格的是边框和阴影，不是某个特定色相。"
        }
      },
      {
        "id": "soft-rendering",
        "role": "avoid",
        "name": {
          "en": "Soft rendering",
          "zh": "软渲染"
        },
        "facet": "depth",
        "description": {
          "en": "Blurred shadows, gradients, or translucency dissolve the inked-print effect instantly — softness is the enemy.",
          "zh": "模糊阴影、渐变或半透明会立刻瓦解勾线印刷的效果——「软」是天敌。"
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is Neobrutalism because the rawness is a designed costume: uniform thick borders, hard offset shadows, and saturated blocks are deliberate graphic choices.",
        "zh": "这是新粗野主义，因为这份「生」是设计出来的戏服：统一的粗边框、生硬偏移阴影和饱和色块都是刻意的图形选择。"
      },
      "wouldBecomeIf": {
        "en": "It would become Web Brutalism if the styling were removed rather than exaggerated — browser-default type, plain blue links, bare structure, and no decorative rendering at all.",
        "zh": "如果把样式拿掉而不是加码——浏览器默认字体、朴素的蓝链接、裸露的结构、毫无装饰性渲染——它就变成网页粗野主义了。"
      }
    },
    "code": [
      {
        "title": "The signature card/button construction",
        "language": "css",
        "code": "border: 2px solid #000; box-shadow: 4px 4px 0 #000; border-radius: 8px;"
      },
      {
        "title": "Press-into-shadow interaction",
        "language": "css",
        "code": ":active { transform: translate(4px,4px); box-shadow: none; }"
      },
      {
        "title": "Same construction as utilities",
        "language": "tailwind",
        "code": "border-2 border-black shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
      }
    ],
    "brief": {
      "en": "Create the surface using Neobrutalism. Defining signals: a uniform 2–3px solid black border on every element; hard offset shadows — solid black, displaced ~4px down-right, zero blur (box-shadow: 4px 4px 0 #000); flat saturated color blocks (e.g. yellow, hot pink, lime) on a cream or white ground with no gradients; bold chunky display type for headings. Keep the specific palette and any sticker doodads flexible. Active states translate the element into its shadow (transform: translate(4px,4px) with the shadow removed). Do not drift into Web Brutalism; the decisive difference is that this look is heavily styled — removing the borders, shadows, and color in favor of browser defaults would make it brutalist proper. Preserve 4.5:1 text contrast on every colored block (black text on saturated fills usually passes; white on yellow never does), visible focus indicators distinct from the decorative borders, and reduced-motion support for press animations.",
      "zh": "用新粗野主义创建界面。定义性信号：每个元素都有统一的 2–3px 纯黑实线边框；生硬偏移阴影——纯黑、向右下偏移约 4px、零模糊（box-shadow: 4px 4px 0 #000）；扁平的饱和色块（如黄、艳粉、青柠）平铺在米白或白色底上，不要渐变；标题用粗壮展示字体。具体配色和贴纸小装饰保持灵活。active 状态把元素平移进自己的阴影（transform: translate(4px,4px) 并移除阴影）。不要滑向网页粗野主义；决定性区别在于这个外观是重度设计出来的——去掉边框、阴影和颜色、改用浏览器默认值，才会变成真正的粗野主义。每个色块上的文字对比度保持 4.5:1（黑字配饱和填充通常能过；白字配黄永远过不了），焦点指示器要可见且与装饰性边框区分开，按压动画要支持 reduced-motion。"
    },
    "accessibility": {
      "en": "Saturated fills need checked text contrast: black ink on yellow/lime passes easily; white ink on yellow, pink, or cyan usually fails 4.5:1.\n\nThe decorative black borders look like focus rings — give keyboard focus a distinct, higher-visibility indicator (e.g. an offset outline in a reserved color).\n\nNN/g's caution: the loudness taxes readability at length — keep body text plain and reserve the shout for structure and actions.",
      "zh": "饱和填充色必须检查文字对比度：黑字配黄/青柠轻松达标；白字配黄、粉或青通常过不了 4.5:1。\n\n装饰性的黑边框看起来很像焦点框——给键盘焦点一个明显不同、更显眼的指示器（比如用专属颜色的偏移 outline）。\n\nNN/g 的提醒：这种吵嚷长读会拖累可读性——正文保持朴素，把「喊」留给结构和操作。"
    },
    "origin": {
      "en": "Emerged around 2020–2022 in product marketing and portfolio sites (Gumroad's 2021 redesign is the era's poster child), catalogued by NN/g in 2023 as a reaction to soft, same-looking SaaS design — flat design turned up to eleven with comic-book construction.",
      "zh": "大约 2020–2022 年间出现在产品营销和作品集网站上（Gumroad 2021 年的改版是那个时代的代表案例），2023 年被 NN/g 收录命名——它是对软绵绵、千站一面的 SaaS 设计的反击：把扁平设计拧到十一档，再套上漫画式的构造。"
    },
    "seeAlso": [
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      },
      {
        "slug": "styles/neumorphism",
        "name": "Neumorphism"
      },
      {
        "slug": "styles/flat-design",
        "name": "Flat Design"
      },
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "web/badge-chip-pill",
        "name": "Badge vs. Chip vs. Pill vs. Tag"
      }
    ]
  },
  {
    "slug": "y2k",
    "name": {
      "en": "Y2K Digital Aesthetic",
      "zh": "Y2K 数字美学"
    },
    "tagline": {
      "en": "The Y2K digital aesthetic is millennium-turn techno-optimism rendered literally: liquid chrome and brushed metal, glossy gel and plastic surfaces, iridescent blue-silver palettes, orbs and blobs, wide techno type, and rendered 3D everything. It's the look of a future imagined through new consumer tech — translucent iMacs, early CGI, rave flyers, and 'cyber' branding — shiny, synthetic, and unembarrassed.",
      "zh": "Y2K 数字美学是把千禧之交的技术乐观主义照字面渲染出来：液态铬和拉丝金属、亮泽的凝胶与塑料表面、幻彩的蓝银配色、球体与液滴形、宽体科技字体，以及万物皆可 3D 渲染。那是透过新消费科技想象出来的未来模样 —— 半透明 iMac、早期 CGI、锐舞传单和打着 “cyber” 旗号的品牌设计 —— 闪亮、合成，而且理直气壮。"
    },
    "scope": {
      "en": "Scope: Covers the digital/graphic look, not Y2K fashion. The darker neon-grid retro strain is Synthwave/Retrofuturism (future entries); the glossy NATURE-infused successor is Frutiger Aero, its own entry and this one's closest neighbor.",
      "zh": "范围：只涵盖数字/平面视觉，不包括 Y2K 时尚穿搭。更暗的霓虹网格复古分支是 Synthwave/Retrofuturism（后续条目）；融入自然元素的亮泽继任者是 Frutiger Aero，它自成一个条目，也是本条最近的邻居。"
    },
    "aliases": {
      "en": [
        "chrome bubblegum millennium interface",
        "shiny metallic text with lens flares like old cd covers",
        "the silver and electric blue futuristic 2000s look",
        "glossy plastic bubble buttons like early mac",
        "that iridescent chrome sticker rave flyer style"
      ],
      "zh": [
        "铬加泡泡糖那种千禧年界面",
        "像老 CD 封面那种闪亮金属字加镜头光晕",
        "2000 年代那种银色加电光蓝的未来感",
        "像早期 Mac 那种亮面塑料泡泡按钮",
        "那种幻彩铬贴纸、锐舞传单的风格"
      ]
    },
    "signals": [
      {
        "id": "chrome-metal",
        "role": "defining",
        "name": {
          "en": "Liquid chrome and metal",
          "zh": "液态铬与金属"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror-finish chrome, brushed steel, and silver gradients — type and frames rendered as if machined and polished.",
          "zh": "镜面铬、拉丝钢和银色渐变 —— 文字和边框都渲染得像经过切削抛光。"
        }
      },
      {
        "id": "gel-gloss",
        "role": "defining",
        "name": {
          "en": "Gel and glossy plastic",
          "zh": "凝胶与亮面塑料"
        },
        "facet": "depth",
        "description": {
          "en": "Translucent candy-like buttons and blobs with strong specular highlights — the Aqua-era 'you want to lick it' gloss.",
          "zh": "半透明的糖果质感按钮和液滴形，带强烈的镜面高光 —— 就是 Aqua 时代那种 “让人想舔一口” 的光泽。"
        }
      },
      {
        "id": "iridescent-palette",
        "role": "defining",
        "name": {
          "en": "Iridescent blue-silver palette",
          "zh": "幻彩蓝银配色"
        },
        "facet": "color",
        "description": {
          "en": "Electric blue, silver, white, and holographic cyan-magenta shifts — cool synthetic color, rarely earthy.",
          "zh": "电光蓝、银、白，再加全息感的青-品红偏移 —— 冷调的合成色，几乎不沾泥土色系。"
        }
      },
      {
        "id": "techno-type",
        "role": "defining",
        "name": {
          "en": "Wide techno type",
          "zh": "宽体科技字体"
        },
        "facet": "typography",
        "description": {
          "en": "Extended, rounded or squared techno faces (Eurostile-flavored), often italicized, outlined, or chromed.",
          "zh": "加宽的、或圆或方的科技字体（Eurostile 那一挂），常用斜体、描边或镀铬效果。"
        }
      },
      {
        "id": "orbs-blobs",
        "role": "supporting",
        "name": {
          "en": "Orbs, blobs, and wireframes",
          "zh": "球体、液滴形与线框"
        },
        "facet": "imagery",
        "description": {
          "en": "Rendered spheres, liquid blobs, globes, wireframe grids, and lens flares floating as decoration.",
          "zh": "渲染出来的球体、液态滴形、地球仪、线框网格和镜头光晕，漂浮着当装饰。"
        }
      },
      {
        "id": "pixel-cyber",
        "role": "variable",
        "name": {
          "en": "Pixel/cyber garnish",
          "zh": "像素/赛博点缀"
        },
        "facet": "imagery",
        "description": {
          "en": "Tiny pixel fonts, scanlines, and 'cyber' interface chrome appear in some strains and not others.",
          "zh": "迷你像素字体、扫描线和 “cyber” 味的界面装饰元素，有的分支有、有的没有。"
        }
      },
      {
        "id": "nature-imagery",
        "role": "avoid",
        "name": {
          "en": "Nature imagery",
          "zh": "自然意象"
        },
        "facet": "imagery",
        "description": {
          "en": "Grass, water, fish, and sky shift the mood from synthetic futurism to eco-tech — that's Frutiger Aero territory.",
          "zh": "草、水、鱼和天空会把气质从合成未来主义拉向生态科技 —— 那是 Frutiger Aero 的地盘。"
        }
      }
    ],
    "confusedWith": {
      "slug": "frutiger-aero",
      "name": "Frutiger Aero",
      "because": {
        "en": "This is Y2K because the optimism is synthetic — chrome, gel plastic, iridescent blue-silver, techno type; the future is machines and cyberspace.",
        "zh": "这是 Y2K，因为它的乐观是合成的 —— 铬、凝胶塑料、幻彩蓝银、科技字体；它想象的未来是机器和赛博空间。"
      },
      "wouldBecomeIf": {
        "en": "It would become Frutiger Aero if the gloss stayed but nature flooded in — blue skies, water, grass, and bubbles fused with clean humanist type into eco-tech Web 2.0 optimism.",
        "zh": "如果光泽还在、但自然涌了进来 —— 蓝天、水、草地和泡泡，配上干净的人文主义字体，融成生态科技的 Web 2.0 乐观 —— 就变成 Frutiger Aero 了。"
      }
    },
    "code": [
      {
        "title": "Chrome bar: hard mid-stop fakes the mirror horizon",
        "language": "css",
        "code": "background: linear-gradient(180deg,#fdfdfd 0%,#c9cdd4 45%,#8f96a3 50%,#e8ebf0 100%);"
      },
      {
        "title": "Gel button: candy gloss cap on a saturated pill",
        "language": "css",
        "code": "background: radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 45%), #2f7df6; border-radius:999px;"
      },
      {
        "title": "Chromed display type from the chrome gradient",
        "language": "css",
        "code": "background-clip: text; color: transparent;"
      }
    ],
    "brief": {
      "en": "Create the piece using the Y2K digital aesthetic. Defining signals: liquid-chrome/metallic surfaces (silver gradient fills with mirror highlights); glossy translucent gel buttons and blobs with strong specular top highlights; an iridescent electric-blue/silver/white palette with occasional holographic cyan-magenta shifts; wide techno display type (Eurostile-flavored, often italic or chromed). Supporting garnish to use sparingly: rendered orbs, globes, wireframe grids, lens flares, tiny pixel-font labels. Keep the exact palette temperature and garnish density flexible. Use layered CSS gradients for chrome (alternating light/dark stops), radial-gradient highlights for gel, and background-clip: text for chromed type. Do not drift into Frutiger Aero; the decisive difference is that Y2K's optimism is synthetic — no grass, water, sky, or nature photography. Preserve readable text (chrome type needs a dark backing or outline to hit 4.5:1), visible focus states, and reduced-motion support for any shine sweeps.",
      "zh": "用 Y2K 数字美学来创作这件作品。决定性信号：液态铬/金属表面（银色渐变填充加镜面高光）；亮泽半透明的凝胶按钮和液滴形，顶部有强烈的镜面高光；幻彩的电光蓝/银/白配色，偶尔带全息感的青-品红偏移；宽体科技展示字体（Eurostile 风味，常用斜体或镀铬效果）。少量使用的辅助点缀：渲染的球体、地球仪、线框网格、镜头光晕、迷你像素字体标签。配色温度和点缀密度保持灵活。铬效果用多层 CSS 渐变（明暗色标交替），凝胶高光用 radial-gradient，镀铬文字用 background-clip: text。不要滑向 Frutiger Aero；决定性区别在于 Y2K 的乐观是合成的 —— 不要草地、水、天空或自然摄影。保证文字可读（镀铬文字需要深色底衬或描边才能达到 4.5:1）、焦点状态清晰可见，任何光泽扫动都要支持 reduced-motion。"
    },
    "accessibility": {
      "en": "Chrome-gradient text is decorative at heart: back it with a solid dark plate or duplicate it as real high-contrast text — the gradient's mid-greys fail 4.5:1 on their own.\n\nSpecular gloss steals contrast from labels on gel buttons; keep label ink dark/white against the button's DARKEST region.\n\nLens flares and shine sweeps are motion garnish — disable under prefers-reduced-motion.",
      "zh": "铬渐变文字本质是装饰：给它垫一块纯色深底，或者另放一份真正高对比度的文字 —— 渐变里的中灰色单靠自己是过不了 4.5:1 的。\n\n凝胶按钮上的镜面高光会偷走标签的对比度；标签文字要对照按钮上最深的区域来选深色或白色，保证对比度。\n\n镜头光晕和光泽扫动都是动态点缀 —— 在 prefers-reduced-motion 下要关掉。"
    },
    "origin": {
      "en": "Roughly 1997–2004: Apple's translucent iMac G3 and Aqua, PlayStation-era CGI, Designers Republic-style rave graphics, and dot-com 'cyber' branding. Rediscovered and named by 2010s–2020s internet archaeology (CARI et al.) and the fashion/graphics revival that followed.",
      "zh": "大约在 1997–2004 年：苹果的半透明 iMac G3 和 Aqua、PlayStation 时代的 CGI、Designers Republic 风格的锐舞平面，以及 dot-com 泡沫期的 “cyber” 品牌包装。2010 到 2020 年代的互联网考古（CARI 等）重新发现并为它命名，随后的时尚与平面复兴让它流行开来。"
    },
    "seeAlso": [
      {
        "slug": "styles/frutiger-aero",
        "name": "Frutiger Aero"
      },
      {
        "slug": "styles/aqua",
        "name": "Aqua"
      },
      {
        "slug": "styles/vernacular-web",
        "name": "Vernacular Web"
      },
      {
        "slug": "styles/skeuomorphism",
        "name": "Skeuomorphism"
      },
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      }
    ]
  },
  {
    "slug": "frutiger-aero",
    "name": {
      "en": "Frutiger Aero",
      "zh": "Frutiger Aero"
    },
    "tagline": {
      "en": "Frutiger Aero is the glossy, nature-infused optimism of roughly 2004–2013: bright blue skies and water, green grass, bubbles, fish, and light rays fused with translucent glass panels, aqua buttons, and clean humanist type. Technology presents itself as fresh, ecological, and frictionless — the future as a sunny day. It's the era of Windows Vista/7 wallpapers, glossy media players, and Web 2.0 product sites.",
      "zh": "Frutiger Aero 是大约 2004–2013 年间那种亮泽的、浸透自然元素的乐观主义：明亮的蓝天碧水、绿草、泡泡、游鱼和光线，与半透明玻璃面板、aqua 质感按钮、干净的人文主义字体融为一体。科技把自己呈现得清新、生态、无摩擦 —— 未来就是一个晴天。那是 Windows Vista/7 壁纸、亮面媒体播放器和 Web 2.0 产品网站的时代。"
    },
    "scope": {
      "en": "Scope: Windows Aero is Microsoft's vendor design language of the same era — an ingredient and namesake, not an exact alias. The synthetic chrome-and-cyber look that PRECEDED it is Y2K, this entry's closest neighbor.",
      "zh": "范围：Windows Aero 是微软同期的厂商设计语言 —— 是成分和名字来源，不是完全等同的别名。在它之前出现的合成铬加赛博风是 Y2K，也就是本条最近的邻居。"
    },
    "aliases": {
      "en": [
        "glossy grass bubbles old windows future",
        "the blue sky and green grass wallpaper vibe with shiny buttons",
        "water droplets and fish and glassy interfaces from 2008",
        "that clean glossy nature-tech look like old windows",
        "bubbles floating over a bright blue gradient"
      ],
      "zh": [
        "亮亮的草地泡泡、老 Windows 那种未来感",
        "蓝天绿草壁纸配亮闪闪按钮的那个味儿",
        "2008 年那种水珠、鱼加玻璃质感界面",
        "像老 Windows 那种干净亮泽的自然科技风",
        "明亮蓝色渐变上飘着泡泡"
      ]
    },
    "signals": [
      {
        "id": "nature-tech",
        "role": "defining",
        "name": {
          "en": "Nature fused with tech",
          "zh": "自然与科技融合"
        },
        "facet": "imagery",
        "description": {
          "en": "Skies, water, grass, leaves, fish, and bubbles as the ambient world the UI floats in — ecology as a tech promise.",
          "zh": "天空、水、草地、树叶、鱼和泡泡，组成 UI 漂浮其中的环境世界 —— 生态就是科技的承诺。"
        }
      },
      {
        "id": "aero-glass",
        "role": "defining",
        "name": {
          "en": "Glossy glass and aqua surfaces",
          "zh": "亮泽玻璃与 aqua 表面"
        },
        "facet": "surface",
        "description": {
          "en": "Translucent panels and buttons with strong curved specular highlights — wet, light-filled gloss rather than matte frost.",
          "zh": "半透明的面板和按钮，带强烈的弧形镜面高光 —— 是湿润、充满光的光泽，而不是哑光的磨砂。"
        }
      },
      {
        "id": "sky-palette",
        "role": "defining",
        "name": {
          "en": "Sky-blue / grass-green palette",
          "zh": "天蓝/草绿配色"
        },
        "facet": "color",
        "description": {
          "en": "Luminous cyan-blues and fresh greens with white light — bright, clean, and warm-lit, never murky.",
          "zh": "莹亮的青蓝和鲜绿，加上白光 —— 亮、干净、像被暖阳照着，绝不浑浊。"
        }
      },
      {
        "id": "humanist-type",
        "role": "defining",
        "name": {
          "en": "Clean humanist sans type",
          "zh": "干净的人文主义无衬线字体"
        },
        "facet": "typography",
        "description": {
          "en": "Friendly rounded-humanist sans-serifs (the Frutiger/Segoe flavor) in white or sky-dark blue — clarity, not techno styling.",
          "zh": "友好的圆角人文主义无衬线（Frutiger/Segoe 那一味），用白色或深天蓝色 —— 要的是清晰，不是科技感造型。"
        }
      },
      {
        "id": "light-effects",
        "role": "supporting",
        "name": {
          "en": "Bokeh, rays, and sheen",
          "zh": "散景、光束与流光"
        },
        "facet": "depth",
        "description": {
          "en": "Soft light circles, sun rays through water, and diagonal sheen sweeps give everything a freshly-washed sparkle.",
          "zh": "柔和的光斑圆、穿过水面的阳光、斜向扫过的流光，让一切都带着刚洗过的闪亮。"
        }
      },
      {
        "id": "subject-matter",
        "role": "variable",
        "name": {
          "en": "Which slice of nature",
          "zh": "取哪一片自然"
        },
        "facet": "imagery",
        "description": {
          "en": "Underwater scenes, meadows, droplets on leaves, goldfish, wind turbines — any fresh, sunlit nature reads as the style.",
          "zh": "水下场景、草甸、叶上的水珠、金鱼、风力发电机 —— 任何清新、阳光下的自然都读作这个风格。"
        }
      },
      {
        "id": "chrome-cyber",
        "role": "avoid",
        "name": {
          "en": "Chrome and cyber styling",
          "zh": "铬与赛博造型"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror chrome, techno type, and wireframe grids pull the mood back to synthetic Y2K futurism.",
          "zh": "镜面铬、科技字体和线框网格会把气质拉回合成的 Y2K 未来主义。"
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Frutiger Aero because the gloss is in service of nature-tech optimism — skies, water, grass, and bubbles behind clean humanist type.",
        "zh": "这是 Frutiger Aero，因为它的光泽是为自然科技乐观主义服务的 —— 干净的人文主义字体背后，是天空、水、草地和泡泡。"
      },
      "wouldBecomeIf": {
        "en": "It would become Y2K if the nature drained out and the surfaces turned synthetic — chrome, gel plastic, iridescent blue-silver, and wide techno type.",
        "zh": "如果自然元素被抽干、表面全变成合成材质 —— 铬、凝胶塑料、幻彩蓝银和宽体科技字体 —— 就变成 Y2K 了。"
      }
    },
    "code": [
      {
        "title": "The sky-over-grass world gradient",
        "language": "css",
        "code": "background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);"
      },
      {
        "title": "Aqua gloss cap: a hard 50% stop splits shine from body",
        "language": "css",
        "code": "background: linear-gradient(rgba(255,255,255,.55), rgba(255,255,255,.06) 48%, rgba(255,255,255,0) 52%, rgba(255,255,255,.25)); border-radius: 999px;"
      },
      {
        "title": "A soap-bubble / droplet highlight",
        "language": "css",
        "code": "background: radial-gradient(circle at 35% 30%, rgba(255,255,255,.9), rgba(255,255,255,.08) 55%, rgba(255,255,255,.35));"
      }
    ],
    "brief": {
      "en": "Create the piece using Frutiger Aero. Defining signals: nature imagery fused with technology (blue sky, water, grass, bubbles, light rays) as the ambient backdrop; glossy translucent 'aqua' surfaces with curved specular highlights; a luminous sky-blue and grass-green palette full of white light; clean humanist sans-serif type (Frutiger/Segoe flavor). Supporting: bokeh circles, sun rays, diagonal sheen sweeps. Keep the specific slice of nature (underwater, meadow, droplets) flexible. Use layered radial/linear gradients for the sky and gloss caps, rgba white overlays for sheen, and generous rounded panels. Do not drift into Y2K; the decisive difference is nature — if chrome, techno type, or cyber grids replace the skies and grass, you've crossed over. Preserve 4.5:1 text contrast over photographic backgrounds (back text with a panel), visible focus states, and reduced-motion support for sheen and bubble effects.",
      "zh": "用 Frutiger Aero 来创作这件作品。决定性信号：自然意象与科技融合（蓝天、水、草地、泡泡、光线）作为环境背景；亮泽半透明的 “aqua” 表面，带弧形镜面高光；充满白光的莹亮天蓝与草绿配色；干净的人文主义无衬线字体（Frutiger/Segoe 风味）。辅助元素：散景光斑、阳光光束、斜向流光扫动。具体取哪一片自然（水下、草甸、水珠）保持灵活。天空和光泽盖层用多层 radial/linear 渐变，流光用 rgba 白色叠加，面板用饱满的大圆角。不要滑向 Y2K；决定性区别在于自然 —— 如果铬、科技字体或赛博网格取代了天空和草地，你就越界了。在摄影背景之上保持 4.5:1 的文字对比度（文字背后垫一块面板）、焦点状态清晰可见，流光和泡泡效果要支持 reduced-motion。"
    },
    "accessibility": {
      "en": "White type straight on sky/grass photography fails contrast in bright regions — put text on a translucent panel with a measured 4.5:1.\n\nGloss highlights across a control's top half can wash out its label; keep the label's zone below the sheen or darken the plate behind it.\n\nBubbles, rays, and sheen sweeps are ambience — never meaning — and stop under prefers-reduced-motion.",
      "zh": "白色文字直接压在天空/草地照片上，遇到亮部对比度就不达标 —— 把文字放在半透明面板上，实测达到 4.5:1。\n\n扫过控件上半部分的高光会把标签洗白；让标签区域避开流光，或者加深它背后的底板。\n\n泡泡、光束和流光扫动只是氛围 —— 永远不承载含义 —— 在 prefers-reduced-motion 下要停止。"
    },
    "origin": {
      "en": "Roughly 2004–2013 across consumer tech (Windows Vista/7 era, glossy device UIs, Wii-era menus, Web 2.0 branding). Named retroactively around 2017 by CARI's cataloguers, after Adrian Frutiger's humanist typefaces plus Windows Aero; the nostalgia wave made the label mainstream in the 2020s.",
      "zh": "大约 2004–2013 年间遍布消费科技（Windows Vista/7 时代、亮面设备 UI、Wii 时代的菜单、Web 2.0 品牌设计）。2017 年前后由 CARI 的编目者回溯命名，名字取自 Adrian Frutiger 的人文主义字体加 Windows Aero；2020 年代的怀旧浪潮让这个叫法成了主流。"
    },
    "seeAlso": [
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/windows-aero",
        "name": "Windows Aero"
      },
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      },
      {
        "slug": "styles/skeuomorphism",
        "name": "Skeuomorphism"
      },
      {
        "slug": "macos/vibrancy",
        "name": "Visual Effect Material (Vibrancy)"
      }
    ]
  },
  {
    "slug": "flat-design",
    "name": {
      "en": "Flat Design",
      "zh": "扁平设计"
    },
    "tagline": {
      "en": "Flat Design renders the interface as pure 2D: surfaces are solid color fills, icons are simple geometric glyphs, and nothing pretends to be lit, embossed, or made of a material. Hierarchy comes from color, size, and typography instead of shadows and bevels. It became the dominant look around 2012–2013 (Windows 8's Metro, then iOS 7) as the direct rejection of skeuomorphism's gloss and texture.",
      "zh": "扁平设计把界面渲染成纯粹的 2D：表面是纯色填充，图标是简单的几何字形，没有任何东西假装被打光、压凸或由某种材质制成。层级来自颜色、尺寸和排版，而不是阴影和斜面。它在 2012–2013 年前后（Windows 8 的 Metro，然后是 iOS 7）成为主流外观，是对拟物设计的光泽与质感的直接反叛。"
    },
    "scope": {
      "en": "Scope: This entry covers strict flat rendering. 'Flat 2.0' — flat surfaces with a few functional shadows reintroduced (Material Design's elevation is the systematic version) — is the common modern compromise, not a separate entry.",
      "zh": "范围：本条目只涵盖严格的扁平渲染。「扁平 2.0」——在扁平表面上重新引入少量功能性阴影（Material Design 的 elevation 是其系统化版本）——是如今常见的折中做法，不是独立条目。"
    },
    "aliases": {
      "en": [
        "everything is just solid colors with no shadows",
        "buttons that are plain rectangles of color",
        "the ios 7 look when everything went flat",
        "icons that are simple white shapes on colored squares",
        "no gradients no textures just clean color blocks",
        "the design style that killed the glossy buttons"
      ],
      "zh": [
        "所有东西都是纯色，一点阴影都没有",
        "按钮就是一块纯色的矩形",
        "iOS 7 之后全变平了的那个样子",
        "彩色方块上放个简单白色图形的图标",
        "没有渐变没有纹理，就是干干净净的色块",
        "把亮闪闪的按钮干掉的那个设计风格"
      ]
    },
    "signals": [
      {
        "id": "solid-fills",
        "role": "defining",
        "name": {
          "en": "Solid 2D color fills",
          "zh": "纯色 2D 填充"
        },
        "facet": "surface",
        "description": {
          "en": "Every surface is one flat color — no gradients, no gloss, no texture, no material of any kind.",
          "zh": "每个表面都只有一个平坦的颜色——没有渐变、没有光泽、没有纹理，也没有任何材质。"
        }
      },
      {
        "id": "no-depth",
        "role": "defining",
        "name": {
          "en": "No simulated depth",
          "zh": "没有模拟的深度"
        },
        "facet": "depth",
        "description": {
          "en": "No drop shadows, bevels, or highlights; elements sit on one plane and edges are drawn by color change alone.",
          "zh": "没有投影、斜面或高光；元素都待在同一个平面上，边缘只靠颜色变化来区分。"
        }
      },
      {
        "id": "glyph-icons",
        "role": "defining",
        "name": {
          "en": "Simple glyph icons",
          "zh": "简单的字形图标"
        },
        "facet": "imagery",
        "description": {
          "en": "Icons are reduced to minimal geometric silhouettes — a single-color shape reads as the whole object.",
          "zh": "图标被简化成最精简的几何剪影——一个单色图形就代表整个物体。"
        }
      },
      {
        "id": "color-hierarchy",
        "role": "defining",
        "name": {
          "en": "Color carries the hierarchy",
          "zh": "颜色承担层级"
        },
        "facet": "color",
        "description": {
          "en": "Bright, often saturated block colors distinguish actions and regions — color does the job shadows used to do.",
          "zh": "明亮、常常高饱和的色块区分操作和区域——阴影以前干的活，现在由颜色来做。"
        }
      },
      {
        "id": "type-does-work",
        "role": "supporting",
        "name": {
          "en": "Typography does the structure",
          "zh": "排版撑起结构"
        },
        "facet": "typography",
        "description": {
          "en": "Clean sans-serif type in strong size steps separates levels of content where boxes and bevels used to.",
          "zh": "干净的无衬线字体以强烈的字号阶梯区分内容层级，替代了过去的框线和斜面。"
        }
      },
      {
        "id": "density",
        "role": "variable",
        "name": {
          "en": "Density is free",
          "zh": "密度随意"
        },
        "facet": "layout",
        "description": {
          "en": "Flat governs RENDERING only — a flat UI can be a sparse landing page or a dense dashboard.",
          "zh": "扁平只管渲染方式——扁平 UI 可以是稀疏的落地页，也可以是密集的仪表盘。"
        }
      },
      {
        "id": "gloss-textures",
        "role": "avoid",
        "name": {
          "en": "Gloss, gradients, textures",
          "zh": "光泽、渐变、纹理"
        },
        "facet": "depth",
        "description": {
          "en": "A specular highlight or leather texture breaks the style — that's the doorway back to skeuomorphism.",
          "zh": "一点镜面高光或皮革纹理就会破坏这种风格——那是回到拟物设计的大门。"
        }
      }
    ],
    "confusedWith": {
      "slug": "skeuomorphism",
      "name": "Skeuomorphism",
      "because": {
        "en": "This is Flat Design because surfaces are unshaded solid fills and icons are abstract glyphs — nothing imitates a physical object or material.",
        "zh": "这是扁平设计，因为表面是没有明暗变化的纯色填充，图标是抽象字形——没有任何东西模仿真实物体或材质。"
      },
      "wouldBecomeIf": {
        "en": "It would become skeuomorphism if the fills grew gloss, texture, and lighting until controls read as physical things you could touch.",
        "zh": "如果填充长出光泽、纹理和打光，直到控件看起来像摸得着的实物，就变成拟物设计了。"
      }
    },
    "code": [
      {
        "title": "A flat button: one fill, no lighting anywhere",
        "language": "css",
        "code": "background: #2f80ed; border: none; border-radius: 4px; box-shadow: none;"
      },
      {
        "title": "The un-skeuomorphing checklist — nothing simulates light",
        "language": "css",
        "code": "filter: none; background-image: none; text-shadow: none;"
      },
      {
        "title": "State changes by color swap, not elevation",
        "language": "tailwind",
        "code": "bg-sky-600 text-white rounded shadow-none hover:bg-sky-700"
      }
    ],
    "brief": {
      "en": "Create the surface using flat design. Defining signals: every surface a solid single-color fill — zero gradients, gloss, or texture; no simulated depth — no drop shadows, bevels, or specular highlights, edges drawn by color change alone; icons as simple one-color geometric glyphs; hierarchy carried by color blocks, size, and clean sans-serif type. Keep the palette and density flexible — flat can be sparse or dense. In CSS this means background-color instead of background-image gradients, border: none or 1px solid, box-shadow: none. Do not drift into skeuomorphism: the decisive difference is that nothing imitates a lit physical material. Preserve 4.5:1 text contrast, and make interactive elements identifiable without shadows — clear color affordance, visible hover/pressed states, and visible focus rings.",
      "zh": "用扁平设计创建这个界面。决定性特征：每个表面都是纯色单色填充——零渐变、零光泽、零纹理；没有模拟的深度——没有投影、斜面或镜面高光，边缘只靠颜色变化区分；图标是简单的单色几何字形；层级由色块、尺寸和干净的无衬线字体承担。配色和密度保持灵活——扁平可以稀疏也可以密集。在 CSS 里这意味着用 background-color 而不是 background-image 渐变，border: none 或 1px solid，box-shadow: none。不要滑向拟物设计：决定性区别在于没有任何东西模仿被打光的物理材质。保持 4.5:1 的文本对比度，并让可交互元素在没有阴影的情况下也能被认出——清晰的颜色可供性（affordance）、可见的 hover/pressed 状态和可见的焦点环。"
    },
    "accessibility": {
      "en": "NN/g measured the cost: flat UIs with weak signifiers make users uncertain what is clickable — give buttons and links unmistakable color affordance, not just proximity.\n\nWith shadows gone, color is doing double duty — check 4.5:1 contrast for text AND 3:1 for the boundaries of controls against their background.\n\nNever remove focus outlines to keep things 'clean'; a flat UI without focus rings is unusable by keyboard.",
      "zh": "NN/g 实测过代价：指示性弱的扁平 UI 会让用户拿不准什么能点——按钮和链接要有不会认错的颜色可供性，不能只靠位置邻近。\n\n阴影没了，颜色要一肩挑两担——文本对比度要查 4.5:1，控件边界与背景的对比度也要查 3:1。\n\n永远不要为了「干净」删掉焦点轮廓；没有焦点环的扁平 UI 用键盘根本没法操作。"
    },
    "origin": {
      "en": "Rose to prominence around 2012: Microsoft's Metro language (Windows Phone 7 in 2010, Windows 8 in 2012) proved it at OS scale, and Apple's iOS 7 redesign in 2013 ended the skeuomorphic era for good. NN/g traces the deeper roots to Swiss/International typographic style.",
      "zh": "2012 年前后崛起：微软的 Metro 语言（2010 年的 Windows Phone 7，2012 年的 Windows 8）在操作系统层面验证了它，苹果 2013 年的 iOS 7 改版则彻底终结了拟物时代。NN/g 把它更深的根源追溯到瑞士 / 国际主义排版风格。"
    },
    "seeAlso": [
      {
        "slug": "styles/skeuomorphism",
        "name": "Skeuomorphism"
      },
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      },
      {
        "slug": "styles/neobrutalism",
        "name": "Neobrutalism"
      }
    ]
  },
  {
    "slug": "minimalism",
    "name": {
      "en": "Minimalism",
      "zh": "极简主义"
    },
    "tagline": {
      "en": "Minimalism governs what is ON the screen, not how it's drawn: strip the interface to the fewest elements that still do the job, then let generous negative space and one or two dramatic typographic moments carry the composition. NN/g's study of 112 minimalist sites found the recurring traits — flat-ish surfaces, limited or monochrome palettes, restricted element counts, negative space, and large type as the hero.",
      "zh": "极简主义管的是屏幕上「有什么」，而不是「怎么画」：把界面削到仍能完成任务的最少元素，然后让慷慨的留白和一两处戏剧性的排版时刻撑起整个构图。NN/g 研究了 112 个极简网站，归纳出反复出现的特征——偏扁平的表面、有限或单色的配色、受控的元素数量、留白，以及作为主角的大字号。"
    },
    "scope": {
      "en": "Scope: Minimalism and Flat Design are different axes: flat governs rendering, minimalism governs content, features, and layout. A UI can be flat but crowded, or minimalist while still using depth and shadow.",
      "zh": "范围：极简主义和扁平设计是两个不同的轴：扁平管渲染，极简管内容、功能和布局。一个 UI 可以扁平但拥挤，也可以在保留深度和阴影的同时是极简的。"
    },
    "aliases": {
      "en": [
        "the page with almost nothing on it",
        "huge empty space and one button",
        "giant headline and tons of white space",
        "the apple style page with one product and nothing else",
        "a website that is basically just text and air",
        "everything unnecessary removed until only the message is left"
      ],
      "zh": [
        "页面上几乎啥都没有",
        "一大片空白，就放一个按钮",
        "超大标题配一大堆留白",
        "苹果那种页面，一个产品之外什么都没有",
        "一个基本上只有文字和空气的网站",
        "没用的全删掉，删到只剩想传达的那句话"
      ]
    },
    "signals": [
      {
        "id": "negative-space",
        "role": "defining",
        "name": {
          "en": "Negative space as material",
          "zh": "留白即材料"
        },
        "facet": "layout",
        "description": {
          "en": "Emptiness is deliberate and generous — content floats in air, and the space around a thing is what makes it matter.",
          "zh": "空旷是刻意且慷慨的——内容浮在空气里，正是一个东西周围的空间让它显得重要。"
        }
      },
      {
        "id": "restricted-elements",
        "role": "defining",
        "name": {
          "en": "Restricted element count",
          "zh": "受控的元素数量"
        },
        "facet": "layout",
        "description": {
          "en": "Few things on screen, and every one earns its place: one nav, one message, one action — decoration is deleted, not restyled.",
          "zh": "屏幕上的东西很少，而且每个都凭本事留下：一个导航、一条信息、一个操作——装饰是被删掉的，不是被重新设计的。"
        }
      },
      {
        "id": "limited-palette",
        "role": "defining",
        "name": {
          "en": "Limited or monochrome palette",
          "zh": "有限或单色的配色"
        },
        "facet": "color",
        "description": {
          "en": "One or two hues at most, often just black/white/grey with a single accent — color restraint is part of the restraint.",
          "zh": "最多一两个色相，常常只有黑白灰加一个强调色——颜色上的克制本身就是克制的一部分。"
        }
      },
      {
        "id": "dramatic-type",
        "role": "defining",
        "name": {
          "en": "Dramatic typography",
          "zh": "戏剧性的排版"
        },
        "facet": "typography",
        "description": {
          "en": "With imagery and ornament gone, type goes big: an oversized headline is usually the loudest element on the page.",
          "zh": "图像和装饰都没了，字体就往大了做：一个超大的标题通常是页面上最响的元素。"
        }
      },
      {
        "id": "flat-tendency",
        "role": "variable",
        "name": {
          "en": "Rendering is free",
          "zh": "渲染方式随意"
        },
        "facet": "depth",
        "description": {
          "en": "Most minimalist sites render flat, but shadow and depth are allowed — minimalism constrains WHAT is shown, not HOW it's lit.",
          "zh": "大多数极简网站渲染得扁平，但阴影和深度是允许的——极简约束的是「展示什么」，不是「怎么打光」。"
        }
      },
      {
        "id": "crowding",
        "role": "avoid",
        "name": {
          "en": "Crowding and ornament",
          "zh": "拥挤与装饰"
        },
        "facet": "layout",
        "description": {
          "en": "A second competing message, decorative flourishes, or a dense widget wall breaks the style regardless of how flat it looks.",
          "zh": "再塞一条抢戏的信息、加装饰性的花哨元素或砌一堵密集的组件墙，无论看起来多扁平都会破坏这种风格。"
        }
      }
    ],
    "confusedWith": {
      "slug": "flat-design",
      "name": "Flat Design",
      "because": {
        "en": "This is minimalism because the content itself is reduced — few elements, vast negative space, one dramatic headline — whatever the rendering.",
        "zh": "这是极简主义，因为内容本身被削减了——元素很少、留白巨大、一个戏剧性的标题——无论渲染方式如何。"
      },
      "wouldBecomeIf": {
        "en": "It would be merely Flat Design if the screen filled up with content again and only the unshaded 2D rendering remained.",
        "zh": "如果屏幕又被内容填满，只剩下没有明暗的 2D 渲染，那就只是扁平设计了。"
      }
    },
    "code": [
      {
        "title": "A narrow measure floating in deliberate emptiness",
        "language": "css",
        "code": "max-width: 34rem; margin-inline: auto; padding-block: clamp(4rem, 18vh, 10rem);"
      },
      {
        "title": "The dramatic headline as the composition's hero",
        "language": "css",
        "code": "font-size: clamp(2.5rem, 8vw, 6rem); letter-spacing: -0.03em; line-height: 1.05;"
      }
    ],
    "brief": {
      "en": "Create the surface using minimalism. Defining signals: the fewest elements that still do the job — one navigation, one message, one primary action, decoration deleted; generous negative space around everything (think 40 to 60 percent of the viewport empty); a limited palette — near-monochrome with at most one accent color; one dramatic typographic moment, an oversized headline that is the loudest thing on screen. Rendering is flexible — flat fills or subtle shadows both fit. Do not confuse this with flat design: minimalism constrains content and layout, not rendering — if you add content back until the page is busy, it stops being minimalist no matter how flat it is. Preserve discoverability: core actions must stay visible, never hidden behind mystery-meat icons to keep the page empty, and text keeps 4.5:1 contrast even in grey-on-white palettes.",
      "zh": "用极简主义创建这个界面。决定性特征：仍能完成任务的最少元素——一个导航、一条信息、一个主操作，装饰全部删掉；万物周围都有慷慨的留白（视口要有 40% 到 60% 是空的）；配色有限——接近单色，最多一个强调色；一处戏剧性的排版时刻，一个超大标题是屏幕上最响的东西。渲染方式灵活——扁平填充或微妙的阴影都可以。不要和扁平设计搞混：极简约束的是内容和布局，不是渲染——如果你把内容加回去加到页面变忙，那不管多扁平都不是极简了。保住可发现性：核心操作必须保持可见，绝不能为了让页面空而把它们藏在看不懂的「神秘肉」图标后面；即使是灰配白的配色，文本也要保持 4.5:1 对比度。"
    },
    "accessibility": {
      "en": "Light-grey-on-white is the classic minimalist contrast failure — measure text at 4.5:1, muted palettes included.\n\nDon't purge affordances along with the decoration: hiding navigation or labels to preserve emptiness trades clutter for mystery.\n\nHuge display type needs responsive clamping — a 96px headline that fits a desktop can wrap into an unreadable wall on a phone.",
      "zh": "浅灰配白是极简主义最经典的对比度翻车——文本一律按 4.5:1 量，低饱和配色也不例外。\n\n删装饰时别把可供性也一起删了：为了保住空旷而藏起导航或标签，是用「看不懂」换「不杂乱」。\n\n巨大的展示字号需要响应式钳制——在桌面端正好的 96px 标题，到手机上可能折行成一堵没法读的墙。"
    },
    "origin": {
      "en": "The reduction ethos of mid-century movements (Bauhaus, Swiss typography, 'less is more') applied to interfaces; on the web it became the dominant 'serious brand' register through the 2010s, with Apple's product pages as the most-copied specimen. NN/g's definitional study is from 2015.",
      "zh": "把世纪中叶各流派的削减精神（包豪斯、瑞士排版、「少即是多」）应用到界面上；在 Web 上，它在整个 2010 年代成为「正经品牌」的主流腔调，苹果的产品页是被抄得最多的样本。NN/g 的定义性研究出自 2015 年。"
    },
    "seeAlso": [
      {
        "slug": "styles/flat-design",
        "name": "Flat Design"
      },
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      }
    ]
  },
  {
    "slug": "claymorphism",
    "name": {
      "en": "Claymorphism",
      "zh": "黏土拟态"
    },
    "tagline": {
      "en": "Claymorphism makes UI elements look molded from soft modeling clay: fat rounded corners, a light pastel fill, and the signature construction — two inner shadows (a bright one catching the top edge, a darker one shading the bottom) plus one soft outer drop shadow that floats the object above the page. Each element is independently colored and clearly separate from the background, usually paired with chunky 3D 'clay' illustrations.",
      "zh": "黏土拟态让 UI 元素看起来像用软陶土捏出来的：肥肥的圆角、淡淡的粉彩填充，还有标志性的结构——两层内阴影（亮的一层落在顶边，暗的一层垫在底部）加一层柔和的外投影，把物体托浮在页面上方。每个元素独立上色、与背景明显分离，通常再配上一组胖乎乎的 3D「黏土」插画。"
    },
    "scope": {
      "en": "Scope: This entry covers the UI treatment. The matching 3D character-illustration style (inflated Blender people with smooth plastic skin) travels with it but is an illustration fashion, not an interface style.",
      "zh": "范围：本条目涵盖 UI 处理方式。与之配套的 3D 人物插画风格（皮肤光滑如塑料的充气 Blender 小人）常和它一起出现，但那是插画潮流，不是界面风格。"
    },
    "aliases": {
      "en": [
        "puffy 3d buttons that look like play-doh",
        "the cards look inflated like balloons",
        "cute squishy looking interface",
        "rounded blobby buttons with soft insides",
        "the 3d clay illustration style dashboards",
        "everything looks like soft rubber toys"
      ],
      "zh": [
        "鼓鼓的 3D 按钮，像培乐多彩泥捏的",
        "卡片像气球一样充了气",
        "看起来软乎乎很好捏的可爱界面",
        "圆滚滚一坨、里面软软的按钮",
        "那种 3D 黏土插画风的仪表盘",
        "所有东西都像软胶玩具"
      ]
    },
    "signals": [
      {
        "id": "inflated-volume",
        "role": "defining",
        "name": {
          "en": "Two inner shadows + one outer",
          "zh": "两层内阴影 + 一层外阴影"
        },
        "facet": "depth",
        "description": {
          "en": "The signature recipe: a light inner shadow on top, a darker inner shadow at the bottom, and a soft drop shadow below — the surface reads as inflated, not carved.",
          "zh": "标志性配方：顶部一层亮内阴影，底部一层暗内阴影，下面再加一层柔和的投影——表面看起来是充气鼓起来的，不是被雕刻进去的。"
        }
      },
      {
        "id": "big-radius",
        "role": "defining",
        "name": {
          "en": "Oversized corner radii",
          "zh": "超大的圆角半径"
        },
        "facet": "geometry",
        "description": {
          "en": "Corners are dramatically round — radii around a third of the element's height — so every shape reads as a soft blob, never a card with rounded corners.",
          "zh": "角圆得很夸张——半径约为元素高度的三分之一——所以每个形状都是一坨软块，绝不是「加了圆角的卡片」。"
        }
      },
      {
        "id": "floating-objects",
        "role": "defining",
        "name": {
          "en": "Independently colored, floating objects",
          "zh": "独立上色、悬浮的物体"
        },
        "facet": "surface",
        "description": {
          "en": "Each element has its own fill distinct from the background and visibly floats above it — nothing is extruded from the page itself.",
          "zh": "每个元素都有区别于背景的填充色，并且明显浮在背景上方——没有东西是从页面本身挤出来的。"
        }
      },
      {
        "id": "pastel-palette",
        "role": "supporting",
        "name": {
          "en": "Light pastel palette",
          "zh": "浅色粉彩配色"
        },
        "facet": "color",
        "description": {
          "en": "Milky lavenders, mints, corals, and creams — the shadows need light fills to read as volume, and the toy-like mood needs the softness.",
          "zh": "奶感的薰衣草紫、薄荷绿、珊瑚粉和奶油色——阴影需要浅填充才能读出体积感，玩具般的气质也需要这份柔软。"
        }
      },
      {
        "id": "clay-illustration",
        "role": "supporting",
        "name": {
          "en": "3D clay illustration",
          "zh": "3D 黏土插画"
        },
        "facet": "imagery",
        "description": {
          "en": "Inflated, smooth 3D characters and objects usually accompany the controls and set the overall toy-world tone.",
          "zh": "充气般光滑的 3D 角色和物体通常与控件结伴出现，奠定整体的玩具世界基调。"
        }
      },
      {
        "id": "same-color-surface",
        "role": "avoid",
        "name": {
          "en": "Element same color as background",
          "zh": "元素与背景同色"
        },
        "facet": "surface",
        "description": {
          "en": "If the object's fill matches the page and only shadows imply its shape, you've slid into neumorphism — clay objects are their own color.",
          "zh": "如果物体的填充和页面一样、只靠阴影暗示形状，你就滑进新拟态了——黏土物体有自己的颜色。"
        }
      }
    ],
    "confusedWith": {
      "slug": "neumorphism",
      "name": "Neumorphism",
      "because": {
        "en": "This is claymorphism because each puffy element is independently colored and FLOATS above the background on a real drop shadow.",
        "zh": "这是黏土拟态，因为每个鼓鼓的元素都独立上色，并且靠一道真实的投影浮在背景之上。"
      },
      "wouldBecomeIf": {
        "en": "It would become neumorphism if every element took the background's exact color and sat flush in the surface, with only dual light/dark shadows implying shape — molded from one continuous material instead of placed on it.",
        "zh": "如果每个元素都完全用背景的颜色、与表面齐平嵌进去，只靠一明一暗两层阴影暗示形状——像是从一整块连续材料里长出来的，而不是放在上面——就变成新拟态了。"
      }
    },
    "code": [
      {
        "title": "The full clay recipe: one outer + two inner shadows",
        "language": "css",
        "code": "border-radius: 26px; background: #f4e7fd; box-shadow: 0 20px 36px rgba(120,90,180,.22), inset 0 -8px 14px rgba(120,90,180,.18), inset 0 6px 12px rgba(255,255,255,.65);"
      },
      {
        "title": "Pressing squashes the clay: outer shadow shrinks, top light inverts",
        "language": "css",
        "code": "active: box-shadow: 0 8px 16px rgba(120,90,180,.2), inset 0 -4px 8px rgba(120,90,180,.22), inset 0 10px 14px rgba(120,90,180,.12);"
      },
      {
        "title": "Arbitrary shadow value carries all three layers",
        "language": "tailwind",
        "code": "rounded-[26px] bg-violet-100 shadow-[0_20px_36px_rgba(120,90,180,.22),inset_0_-8px_14px_rgba(120,90,180,.18),inset_0_6px_12px_rgba(255,255,255,.65)]"
      }
    ],
    "brief": {
      "en": "Create the surface using claymorphism. Defining signals: the clay shadow recipe on cards and buttons — two inner shadows (light at top, darker at bottom) plus one soft outer drop shadow, e.g. box-shadow: 0 24px 40px rgba(x,.18), inset 0 -8px 16px rgba(x,.15), inset 0 8px 16px rgba(255,255,255,.55); oversized corner radii (border-radius roughly 26px on a 56px control); each element independently colored in light pastels, clearly floating above a soft tinted background; chunky friendly type. Keep the exact hues and illustration flexible. Do not drift into neumorphism: the decisive difference is that clay objects have their own color and a visible drop shadow — never the background's color with shadows alone implying shape. Preserve 4.5:1 text contrast on pastel fills, pressed/hover states that deepen the inner shadows rather than removing them, and visible focus rings.",
      "zh": "用黏土拟态创建这个界面。决定性特征：卡片和按钮上用黏土阴影配方——两层内阴影（顶亮底暗）加一层柔和的外投影，例如 box-shadow: 0 24px 40px rgba(x,.18), inset 0 -8px 16px rgba(x,.15), inset 0 8px 16px rgba(255,255,255,.55)；超大的圆角半径（56px 高的控件配约 26px 的 border-radius）；每个元素用浅色粉彩独立上色，明显浮在柔和着色的背景之上；字体粗壮友好。具体色相和插画保持灵活。不要滑向新拟态：决定性区别在于黏土物体有自己的颜色和一道可见的投影——绝不能用背景色加纯阴影来暗示形状。在粉彩填充上保持 4.5:1 的文本对比度，pressed/hover 状态要加深内阴影而不是删掉它们，焦点环要可见。"
    },
    "accessibility": {
      "en": "Pastel-on-pastel is the trap: white or cream text on mint/lavender fills usually fails 4.5:1 — darken the text, not the toy palette.\n\nThe soft shadows are decorative, not state — pair pressed/selected with a color or content change, not shadow depth alone.\n\nTriple-layer shadows on many elements can shimmer on scroll in low-power mode; keep the recipe to key surfaces.",
      "zh": "粉彩配粉彩是陷阱：薄荷绿、薰衣草紫填充上放白色或奶油色文字，通常过不了 4.5:1——要加深的是文字，不是玩具感的配色。\n\n柔和的阴影是装饰，不是状态——pressed/selected 要配颜色或内容变化，不能只靠阴影深浅。\n\n大量元素叠三层阴影，在低功耗模式下滑动时可能会闪；这个配方只留给关键表面。"
    },
    "origin": {
      "en": "Named in 2021 by Michal Malewicz as the friendlier successor to neumorphism, riding the wave of soft-3D illustration in fintech and edtech marketing; the recipe (two inner shadows + one outer, oversized radii) comes from his original article.",
      "zh": "2021 年由 Michal Malewicz 命名，定位是新拟态更友好的继任者，乘着金融科技和教育科技营销里软 3D 插画的浪潮走红；配方（两层内阴影加一层外阴影、超大圆角）来自他的原始文章。"
    },
    "seeAlso": [
      {
        "slug": "styles/neumorphism",
        "name": "Neumorphism"
      },
      {
        "slug": "styles/neobrutalism",
        "name": "Neobrutalism"
      },
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      }
    ]
  },
  {
    "slug": "vernacular-web",
    "name": {
      "en": "Vernacular Web",
      "zh": "民间网页（Vernacular Web）"
    },
    "tagline": {
      "en": "The Vernacular Web is the folk architecture of the early web: personal homepages built by amateurs from collected materials — tiled star backgrounds, animated sparkle and flame GIFs, rainbow divider rules, 'welcome to my home page' banners, visitor counters, guestbook links, under-construction signs, and webring badges. It is decorative, personal, and sincere: every ornament was chosen because its owner loved it, not because a system prescribed it.",
      "zh": "民间网页是早期网络的民间建筑：业余爱好者用收集来的素材搭起的个人主页——平铺的星空背景、闪动的亮片和火焰 GIF、彩虹分隔线、「欢迎来到我的主页」横幅、访客计数器、留言簿链接、施工中标志和网页环（webring）徽章。它装饰性强、私人、真诚：每一件饰品被选中都是因为主人喜欢，而不是某套体系的规定。"
    },
    "scope": {
      "en": "Scope: This entry covers the genuine 90s amateur look and its faithful revivals. Ironic, deliberately-broken 'ugly on purpose' design is a different move (Internet Ugly, in research), and raw exposed structure is Web Brutalism.",
      "zh": "范围：本条目涵盖正宗的 90 年代业余外观及其忠实复刻。反讽式、故意做坏的「丑得理直气壮」设计是另一路（Internet Ugly，研究中），裸露的原始结构则是网页粗野主义。"
    },
    "aliases": {
      "en": [
        "the old geocities page with sparkly gifs",
        "under construction sign and a visitor counter",
        "tiled star background with rainbow divider lines",
        "blinking new sign and a guestbook link",
        "the 90s personal homepage look",
        "welcome to my home page with animated flames"
      ],
      "zh": [
        "GeoCities 那种闪着亮片 GIF 的老页面",
        "施工中标志加访客计数器",
        "平铺星星背景配彩虹分隔线",
        "闪烁的 NEW 标志和留言簿链接",
        "90 年代个人主页那股味儿",
        "「欢迎来到我的主页」加跳动的火焰动画"
      ]
    },
    "signals": [
      {
        "id": "tiled-background",
        "role": "defining",
        "name": {
          "en": "Tiled background texture",
          "zh": "平铺背景纹理"
        },
        "facet": "surface",
        "description": {
          "en": "A small image repeated edge to edge — starry night sky, clouds, marble — behind everything; the page has wallpaper, not a background color.",
          "zh": "一张小图从边缘到边缘重复铺开——繁星夜空、云朵、大理石——垫在所有东西底下；页面有的是壁纸，不是背景色。"
        }
      },
      {
        "id": "gif-ornaments",
        "role": "defining",
        "name": {
          "en": "Animated GIF ornaments",
          "zh": "GIF 动画饰品"
        },
        "facet": "imagery",
        "description": {
          "en": "Twinkling sparkles, spinning @ signs, flaming rules, the striped UNDER CONSTRUCTION sign — small looping animations used as pure decoration.",
          "zh": "闪烁的亮片、旋转的 @ 符号、火焰分隔线、条纹的「施工中」标志——纯粹当装饰用的小型循环动画。"
        }
      },
      {
        "id": "collected-badges",
        "role": "defining",
        "name": {
          "en": "Collected badges and counters",
          "zh": "收集来的徽章与计数器"
        },
        "facet": "layout",
        "description": {
          "en": "A visitor counter, 'sign my guestbook', webring prev/next buttons, 'best viewed in Netscape' badges — trophies of participation, stacked at the page's foot.",
          "zh": "访客计数器、「给我留言」、网页环的上一个/下一个按钮、「请用 Netscape 浏览」徽章——参与感的战利品，堆在页面底部。"
        }
      },
      {
        "id": "rainbow-defaults",
        "role": "defining",
        "name": {
          "en": "Default type, loud accents",
          "zh": "默认字体，炸眼点缀"
        },
        "facet": "typography",
        "description": {
          "en": "System serif or Comic Sans over the wallpaper, centered, with rainbow horizontal rules and multicolored or blinking emphasis — typography as celebration, not system.",
          "zh": "壁纸上居中排系统衬线体或 Comic Sans，配彩虹水平分隔线和五颜六色或闪烁的强调文字——字体排印是庆祝，不是体系。"
        }
      },
      {
        "id": "centered-column",
        "role": "supporting",
        "name": {
          "en": "One centered column",
          "zh": "一条居中栏"
        },
        "facet": "layout",
        "description": {
          "en": "Everything center-aligned down one narrow column, section by section, the way <center> made easy.",
          "zh": "所有东西沿一条窄栏居中，一节一节往下排，正是 <center> 让人轻松做到的样子。"
        }
      },
      {
        "id": "midi-mood",
        "role": "variable",
        "name": {
          "en": "Ambient extras",
          "zh": "氛围附加物"
        },
        "facet": "motion",
        "description": {
          "en": "Autoplaying MIDI, cursor trails, scrolling marquees — beloved extras that vary page to page.",
          "zh": "自动播放的 MIDI、鼠标拖尾、滚动字幕——人见人爱的附加物，每个页面各不相同。"
        }
      },
      {
        "id": "knowing-irony",
        "role": "avoid",
        "name": {
          "en": "Knowing irony or rawness",
          "zh": "心照不宣的反讽或裸露"
        },
        "facet": "imagery",
        "description": {
          "en": "The moment the decoration is a deliberate statement about design itself — exposed structure, ugly-on-purpose — it stops being vernacular and becomes brutalism or anti-design.",
          "zh": "一旦装饰变成关于设计本身的刻意宣言——裸露结构、故意做丑——它就不再是民间网页，而成了粗野主义或反设计。"
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is the Vernacular Web because the page is DECORATED with love — wallpaper, sparkles, badges, a counter — by an amateur showing off their collection.",
        "zh": "这是民间网页，因为页面是被爱装饰起来的——壁纸、亮片、徽章、计数器——一个业余爱好者在炫耀自己的收藏。"
      },
      "wouldBecomeIf": {
        "en": "It would become web brutalism if all decoration were stripped and the bare HTML skeleton — default type, blue links, no ornament — were exposed as a deliberate designer statement.",
        "zh": "如果把装饰全部剥掉，让赤裸的 HTML 骨架——默认字体、蓝色链接、毫无饰品——作为一种刻意的设计师宣言暴露出来，它就变成网页粗野主义了。"
      }
    },
    "code": [
      {
        "title": "Wallpaper + the centered column — half the look in one rule",
        "language": "css",
        "code": "background: #000 url('stars.gif') repeat; text-align: center; font-family: 'Times New Roman', serif;"
      },
      {
        "title": "The rainbow divider rule between sections",
        "language": "css",
        "code": "background: linear-gradient(90deg, red, orange, yellow, lime, cyan, blue, magenta); height: 4px;"
      },
      {
        "title": "The blinking NEW! — gate it behind prefers-reduced-motion",
        "language": "css",
        "code": "@keyframes blink { 50% { visibility: hidden; } } .new { animation: blink 1s steps(1) infinite; }"
      }
    ],
    "brief": {
      "en": "Create the surface in the Vernacular Web style — a sincere 90s GeoCities-era personal homepage, not a parody. Defining signals: a tiled repeating background image (starry sky reads instantly); animated GIF-style ornaments — twinkling sparkles, a striped under-construction badge; a centered single column of system serif type with a rainbow-gradient horizontal rule between sections; the collected-participation footer — visitor counter in green LED digits on black, 'sign my guestbook' link, webring badge, 'best viewed at 800x600' line. Loud colored or blinking emphasis text is period-correct. Keep the specific ornaments flexible — the mood is a proud amateur's decorated scrapbook. Do not drift into web brutalism: this page is ornamented with love, never stripped bare as a statement. Preserve legibility (solid or high-contrast panels behind text over busy wallpaper), respect prefers-reduced-motion by pausing blinks and twinkles, and keep counters and badges decorative, not functional claims.",
      "zh": "用民间网页风格创建界面——一个真诚的 90 年代 GeoCities 时代个人主页，不是恶搞。定义性信号：一张平铺重复的背景图（星空一眼可辨）；GIF 风格的动画饰品——闪烁的亮片、条纹施工中徽章；系统衬线体排成居中单栏，小节之间用彩虹渐变水平分隔线；收集来的参与感页脚——黑底绿色 LED 数码管的访客计数器、「给我留言」链接、网页环（webring）徽章、「最佳浏览分辨率 800x600」一行。颜色炸眼或闪烁的强调文字符合时代特征。具体饰品保持灵活——气质是一个自豪的业余爱好者装饰出来的剪贴簿。不要滑向网页粗野主义：这个页面是被爱装饰的，绝不是为了宣言而剥光。保持可读性（花哨壁纸上的文字底下垫纯色或高对比度面板），遵循 prefers-reduced-motion 暂停闪烁和亮片，计数器和徽章只做装饰，不要伪装成真实功能。"
    },
    "accessibility": {
      "en": "Text directly over a busy tiled background is unreadable — put body copy on a solid panel, and save the wallpaper for the margins.\n\nBlinking and twinkling must pause under prefers-reduced-motion, and nothing should blink faster than 3 times per second (WCAG seizure threshold).\n\nRainbow and neon text colors rarely hit 4.5:1 on dark wallpaper — reserve them for decoration, keep content text plain and high-contrast.",
      "zh": "文字直接压在花哨的平铺背景上是没法读的——正文放在纯色面板上，壁纸留给页边。\n\n闪烁和亮片必须在 prefers-reduced-motion 下暂停，而且任何东西的闪烁都不能快于每秒 3 次（WCAG 癫痫诱发阈值）。\n\n彩虹色和霓虹色文字在深色壁纸上很少能达到 4.5:1——把它们留给装饰，正文文字保持朴素、高对比。"
    },
    "origin": {
      "en": "The mid-1990s free-hosting web — GeoCities, Angelfire, Tripod — where millions of first-time authors decorated pages from shared GIF collections. Olia Lialina documented and named the culture in 'A Vernacular Web' (2005) and, with Dragan Espenschied, preserved a terabyte of GeoCities before its 2009 shutdown.",
      "zh": "上世纪 90 年代中期的免费托管网络——GeoCities、Angelfire、Tripod——数百万第一次写网页的作者从共享 GIF 图库里挑素材装饰自己的页面。Olia Lialina 在《A Vernacular Web》(2005) 中记录并命名了这种文化，并与 Dragan Espenschied 一起，在 GeoCities 2009 年关站前抢救了整整 1TB 的存档。"
    },
    "seeAlso": [
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      }
    ]
  },
  {
    "slug": "aqua",
    "name": {
      "en": "Aqua",
      "zh": "Aqua"
    },
    "tagline": {
      "en": "Aqua is the design language Mac OS X launched with in 2000: controls rendered as translucent candy gel — deep specular highlights over luminous water-blue — on pinstriped surfaces, with gumdrop red/yellow/green window controls, soft drop shadows layering the windows, and fluid animation everywhere (the default button literally pulsed, and windows poured into the Dock through the genie effect). Apple pitched it as an interface with the fluidity and depth of water.",
      "zh": "Aqua 是 Mac OS X 在 2000 年问世时搭载的设计语言：控件被渲染成半透明的糖果凝胶 —— 莹亮的水蓝色上压着深深的高光 —— 铺在细条纹表面上，配上软糖般的红黄绿窗口按钮、把窗口分出层次的柔和投影，以及无处不在的流畅动画（默认按钮真的会一下一下地脉动，窗口通过精灵效果像水一样流进 Dock）。苹果把它宣传成一个有着水的流动感与深度的界面。"
    },
    "scope": {
      "en": "Scope: This entry covers the original 2000s-era Aqua (Mac OS X 10.0 through roughly Tiger). Later macOS flattened and frosted the language step by step — don't blend brushed-metal-era, Yosemite, or today's macOS into it; Apple's current glass language is Liquid Glass.",
      "zh": "范围：本条只涵盖 2000 年代的原版 Aqua（Mac OS X 10.0 到大约 Tiger 为止）。之后的 macOS 一步步把这门语言拍平、磨砂 —— 不要把拉丝金属时代、Yosemite 或今天的 macOS 混进来；苹果现在的玻璃语言是液态玻璃（Liquid Glass）。"
    },
    "aliases": {
      "en": [
        "the old mac buttons that looked like blue candy",
        "gel buttons you wanted to lick",
        "pinstripe windows from early mac os x",
        "the gumdrop red yellow green window buttons",
        "glossy blue scroll bars on old macs",
        "the save button that pulsed like it was breathing"
      ],
      "zh": [
        "老 Mac 上那种像蓝色糖果的按钮",
        "让人想舔一口的凝胶按钮",
        "早期 Mac OS X 的细条纹窗口",
        "软糖一样的红黄绿窗口按钮",
        "老 Mac 上亮闪闪的蓝色滚动条",
        "那个像呼吸一样一鼓一鼓的保存按钮"
      ]
    },
    "signals": [
      {
        "id": "candy-gel",
        "role": "defining",
        "name": {
          "en": "Candy-gel controls",
          "zh": "糖果凝胶控件"
        },
        "facet": "depth",
        "description": {
          "en": "Buttons and scrollbar thumbs look like translucent gel drops: a bright specular highlight across the top, an inner glow beneath, and color that seems lit from inside.",
          "zh": "按钮和滚动条滑块看起来像半透明的凝胶滴：顶部一道亮高光，下面透着内发光，颜色像从里面点亮。"
        }
      },
      {
        "id": "pinstripe-surface",
        "role": "defining",
        "name": {
          "en": "Pinstriped surfaces",
          "zh": "细条纹表面"
        },
        "facet": "surface",
        "description": {
          "en": "Window backgrounds and title bars carry fine alternating light stripes — the signature Aqua wallpaper-of-the-chrome.",
          "zh": "窗口背景和标题栏上有细细的明暗交替条纹 —— 堪称 Aqua 窗口装饰层的招牌壁纸。"
        }
      },
      {
        "id": "gumdrop-controls",
        "role": "defining",
        "name": {
          "en": "Gumdrop window controls",
          "zh": "软糖窗口按钮"
        },
        "facet": "geometry",
        "description": {
          "en": "The close/minimize/zoom trio as glossy red, yellow, and green candy spheres in the title bar's top-left corner.",
          "zh": "关闭/最小化/缩放三键做成亮面的红、黄、绿糖果圆球，排在标题栏左上角。"
        }
      },
      {
        "id": "water-blue",
        "role": "defining",
        "name": {
          "en": "Luminous water blue",
          "zh": "莹亮的水蓝"
        },
        "facet": "color",
        "description": {
          "en": "The palette centers on Aqua's namesake: saturated, water-lit blue for default buttons, selection, scrollbars, and progress.",
          "zh": "配色的中心就是 Aqua 名字的由来：饱满的、像被水照亮的蓝，用在默认按钮、选中态、滚动条和进度条上。"
        }
      },
      {
        "id": "fluid-motion",
        "role": "supporting",
        "name": {
          "en": "Fluid, liquid motion",
          "zh": "流畅的液态动效"
        },
        "facet": "motion",
        "description": {
          "en": "The default button pulses like breathing, and windows minimize through the liquid genie effect — motion sells the water metaphor.",
          "zh": "默认按钮像呼吸一样脉动，窗口最小化时以液态的精灵效果收进 Dock —— 动效把水的比喻坐实了。"
        }
      },
      {
        "id": "layered-shadows",
        "role": "supporting",
        "name": {
          "en": "Soft window shadows",
          "zh": "柔和的窗口投影"
        },
        "facet": "depth",
        "description": {
          "en": "Deep, soft drop shadows float windows in real layers over the desktop — depth Mac OS 9 never had.",
          "zh": "又深又柔的投影让窗口真正分层浮在桌面上 —— 这是 Mac OS 9 从未有过的纵深。"
        }
      },
      {
        "id": "flat-translucency",
        "role": "avoid",
        "name": {
          "en": "Flat frosted translucency",
          "zh": "扁平磨砂半透明"
        },
        "facet": "depth",
        "description": {
          "en": "A blurred panel without the gel gloss is a different, later idea — that's glassmorphism/vibrancy territory, not Aqua.",
          "zh": "一块只有模糊、没有凝胶光泽的面板是另一个更晚的概念 —— 那是玻璃拟态/vibrancy 的地盘，不是 Aqua。"
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Aqua because it's one vendor's complete, systematic OS language — the same gel buttons, pinstripes, and gumdrops on every Mac.",
        "zh": "这是 Aqua，因为它是一家厂商完整、系统的 OS 设计语言 —— 每台 Mac 上都是同样的凝胶按钮、细条纹和软糖按钮。"
      },
      "wouldBecomeIf": {
        "en": "It would be just Y2K if it were the era's freelance futurism — liquid chrome, lens flares, techno type — without Apple's specific system behind it. (Aqua is the OS-shaped island inside the Y2K sea.)",
        "zh": "如果它只是那个时代自由发挥的未来主义 —— 液态铬、镜头光晕、科技字体 —— 背后没有苹果那套具体系统，那就只是 Y2K 了。（Aqua 是 Y2K 大海里一座 OS 形状的岛。）"
      }
    },
    "code": [
      {
        "title": "The gel button: specular top, inner glow, pill geometry",
        "language": "css",
        "code": "background: radial-gradient(120% 90% at 50% -10%, rgba(255,255,255,.9) 0%, rgba(255,255,255,0) 50%), linear-gradient(180deg, #6aa6f8 0%, #1862d8 55%, #0c4cc0 100%); box-shadow: inset 0 1px 1px rgba(255,255,255,.6), inset 0 -3px 6px rgba(255,255,255,.35), 0 1px 3px rgba(0,30,90,.4); border-radius: 999px;"
      },
      {
        "title": "Pinstripes for window chrome and backgrounds",
        "language": "css",
        "code": "background: repeating-linear-gradient(180deg, #f2f4f7 0 2px, #e7eaef 2px 4px);"
      },
      {
        "title": "The breathing default button — gate behind prefers-reduced-motion",
        "language": "css",
        "code": "@keyframes aqua-pulse { 50% { filter: brightness(1.18) saturate(1.15); } } animation: aqua-pulse 1.8s ease-in-out infinite;"
      }
    ],
    "brief": {
      "en": "Create the surface using Apple's original Aqua (early Mac OS X) design language. Defining signals: candy-gel controls — luminous water-blue fills with a bright specular highlight across the top half and an inner glow, e.g. layered radial-gradient highlight over linear-gradient(#5f9ff5, #1862d8); fine pinstriped window surfaces (repeating-linear-gradient, ~1px stripes at low contrast); gumdrop red/yellow/green window controls as glossy spheres, top-left; the default button gently pulsing (a slow glow loop, disabled under prefers-reduced-motion); soft deep window shadows. Keep layout and density flexible — this is chrome and controls, not a layout system. Do not drift into generic glassmorphism: Aqua's material is glossy opaque gel on pinstripes, not blurred frosted panels. Preserve 4.5:1 text contrast on gel fills (white text with a subtle down-shadow is period-correct), full keyboard focus states, and reduced-motion alternatives for the pulse.",
      "zh": "用苹果原版的 Aqua（早期 Mac OS X）设计语言来创作这个界面。决定性信号：糖果凝胶控件 —— 莹亮的水蓝色填充，上半部分一道亮高光，下面带内发光，例如在 linear-gradient(#5f9ff5, #1862d8) 上叠一层 radial-gradient 高光；细密的细条纹窗口表面（repeating-linear-gradient，约 1px 的低对比度条纹）；软糖质感的红黄绿窗口按钮做成亮面圆球，放在左上角；默认按钮轻轻脉动（缓慢的辉光循环，在 prefers-reduced-motion 下禁用）；又柔又深的窗口投影。布局和密度保持灵活 —— 这套语言管的是窗口装饰层和控件，不是布局系统。不要滑向泛泛的玻璃拟态：Aqua 的材质是细条纹上亮泽不透明的凝胶，不是模糊的磨砂面板。在凝胶填充上保持 4.5:1 的文字对比度（白字加一层轻微向下的投影是符合年代的写法）、完整的键盘焦点状态，以及脉动效果的 reduced-motion 替代方案。"
    },
    "accessibility": {
      "en": "White label text on mid-blue gel hovers near the contrast line — keep the gel's center dark enough for 4.5:1, as Apple's own dark-bottom gradient did.\n\nThe pulsing default button is motion with no information — pause it under prefers-reduced-motion and never make the pulse the only 'default action' cue.\n\nPinstripes behind small text add visual noise; drop the stripe contrast (2 to 3 percent) or mask them behind content panels.",
      "zh": "中蓝色凝胶上的白色标签文字正好压在对比度及格线附近 —— 让凝胶中心足够深、达到 4.5:1，就像苹果自己那条底部压深的渐变做的那样。\n\n脉动的默认按钮是不带信息的动效 —— 在 prefers-reduced-motion 下要暂停，而且永远不能让脉动成为 “默认操作” 的唯一提示。\n\n小号文字背后的细条纹会增加视觉噪声；把条纹对比度压低（2% 到 3%），或者在内容面板后面把它们遮掉。"
    },
    "origin": {
      "en": "Introduced by Steve Jobs at Macworld San Francisco, January 2000, alongside Mac OS X's public debut; shipped in Mac OS X 10.0 (2001) and defined the Mac's look for the decade, its gel gloss echoing the era's translucent iMac hardware.",
      "zh": "2000 年 1 月由 Steve Jobs 在旧金山 Macworld 上与 Mac OS X 的公开亮相一同发布；随 Mac OS X 10.0（2001）正式搭载，定义了此后十年 Mac 的样子，它的凝胶光泽与当时半透明的 iMac 硬件互为呼应。"
    },
    "seeAlso": [
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/windows-aero",
        "name": "Windows Aero"
      },
      {
        "slug": "styles/skeuomorphism",
        "name": "Skeuomorphism"
      },
      {
        "slug": "styles/liquid-glass",
        "name": "Liquid Glass"
      },
      {
        "slug": "macos/traffic-lights",
        "name": "Traffic Lights (Window Controls)"
      }
    ]
  },
  {
    "slug": "windows-aero",
    "name": {
      "en": "Windows Aero",
      "zh": "Windows Aero"
    },
    "tagline": {
      "en": "Windows Aero is Microsoft's Vista and Windows 7 desktop language: window FRAMES rendered as transparent blurred glass with specular light sweeps, so the desktop glows through every title bar; luminous color gradients; caption buttons that light up under the cursor (the red close glow); shimmering green progress bars; and smooth window motion like Flip 3D and the minimize animation. Microsoft's launch messaging named the glass, the reflections, and the animation as the product.",
      "zh": "Windows Aero 是微软 Vista 和 Windows 7 的桌面语言：窗口边框被渲染成透明的毛玻璃，上面有镜面光扫过，桌面得以透过每一条标题栏发光；莹亮的色彩渐变；光标移上去就会点亮的标题栏按钮（红色的关闭键辉光）；泛着波光的绿色进度条；以及 Flip 3D 和最小化动画这样流畅的窗口动效。微软当年的发布宣传直接把玻璃、反射和动画点名成了产品本身。"
    },
    "scope": {
      "en": "Scope: This entry covers Microsoft's actual OS chrome (Vista 2006 to Windows 7, retired by Windows 8's flat Metro). The broader glossy eco-tech mood of the same years — sky, grass, water imagery — is Frutiger Aero, a retrospective label that borrowed Aero's name.",
      "zh": "范围：本条涵盖微软真正的 OS 窗口装饰层（2006 年的 Vista 到 Windows 7，被 Windows 8 扁平的 Metro 取代）。同些年更广的那股亮泽生态科技气质 —— 天空、草地、水的意象 —— 是 Frutiger Aero，一个借用了 Aero 名字的回溯性标签。"
    },
    "aliases": {
      "en": [
        "the see-through window borders in windows 7",
        "frosted glass titlebars from vista",
        "the close button that glows red when you hover it",
        "windows with transparent blurry frames",
        "the glassy taskbar with reflections",
        "the green shimmering progress bar from windows 7"
      ],
      "zh": [
        "Windows 7 那种透明的窗口边框",
        "Vista 那种毛玻璃标题栏",
        "鼠标一悬停就发红的关闭按钮",
        "边框透明又模糊的窗口",
        "带反射的玻璃质感任务栏",
        "Windows 7 那条泛着波光的绿色进度条"
      ]
    },
    "signals": [
      {
        "id": "glass-frame",
        "role": "defining",
        "name": {
          "en": "Transparent blurred window frame",
          "zh": "透明模糊的窗口边框"
        },
        "facet": "depth",
        "description": {
          "en": "The title bar and window border are real translucent glass — the wallpaper and windows behind blur through them, while the window's content area stays opaque.",
          "zh": "标题栏和窗口边框是真正的半透明玻璃 —— 后面的壁纸和窗口会模糊地透过来，而窗口内容区保持不透明。"
        }
      },
      {
        "id": "specular-sweeps",
        "role": "defining",
        "name": {
          "en": "Specular sweeps and reflections",
          "zh": "镜面光扫与反射"
        },
        "facet": "surface",
        "description": {
          "en": "Diagonal light streaks cross the glass and controls, as if the chrome were polished — reflection is part of the material, not an accent.",
          "zh": "斜向的光条扫过玻璃和控件，好像装饰层被抛光过 —— 反射是材质本身的一部分，不是点缀。"
        }
      },
      {
        "id": "hover-glow",
        "role": "defining",
        "name": {
          "en": "Glowing hot controls",
          "zh": "悬停发光的控件"
        },
        "facet": "color",
        "description": {
          "en": "Controls light up under the cursor: the close button floods red, min/max glow blue, buttons gain a luminous halo — glow is the hover language.",
          "zh": "控件在光标下被点亮：关闭按钮泛起红光，最小化/最大化发蓝光，按钮罩上一圈莹亮的光晕 —— 发光就是悬停的语言。"
        }
      },
      {
        "id": "luminous-gradients",
        "role": "defining",
        "name": {
          "en": "Luminous depth gradients",
          "zh": "莹亮的纵深渐变"
        },
        "facet": "color",
        "description": {
          "en": "Blues and greens that glow as if backlit — the shimmering green progress bar and pearlescent button fills, never flat color.",
          "zh": "像背光一样发亮的蓝和绿 —— 泛波光的绿色进度条、珠光的按钮填充，绝不用纯色平涂。"
        }
      },
      {
        "id": "window-motion",
        "role": "supporting",
        "name": {
          "en": "Smooth window choreography",
          "zh": "流畅的窗口编排"
        },
        "facet": "motion",
        "description": {
          "en": "Windows animate open, minimize with a swoop, and stack in Flip 3D — composited motion was the point of the new rendering engine.",
          "zh": "窗口带动画打开、呼啸着最小化、在 Flip 3D 里层叠 —— 合成动效正是新渲染引擎的意义所在。"
        }
      },
      {
        "id": "rounded-chrome",
        "role": "supporting",
        "name": {
          "en": "Softly rounded chrome",
          "zh": "柔圆的界面装饰"
        },
        "facet": "geometry",
        "description": {
          "en": "Window corners and buttons are gently rounded with 1px bright edge highlights lining the glass.",
          "zh": "窗口四角和按钮都轻轻倒圆，玻璃边缘勾着 1px 的亮边高光。"
        }
      },
      {
        "id": "nature-imagery",
        "role": "avoid",
        "name": {
          "en": "Nature imagery as requirement",
          "zh": "把自然意象当必需品"
        },
        "facet": "imagery",
        "description": {
          "en": "Grass, sky, and fish belong to the era's mood, not the OS chrome — needing them means you're describing Frutiger Aero.",
          "zh": "草地、天空和鱼属于那个年代的气质，不属于 OS 装饰层 —— 如果非它们不可，说明你描述的是 Frutiger Aero。"
        }
      }
    ],
    "confusedWith": {
      "slug": "frutiger-aero",
      "name": "Frutiger Aero",
      "because": {
        "en": "This is Windows Aero because it's the OS chrome itself — glass window frames, glowing caption buttons, luminous progress bars, shipped by Microsoft.",
        "zh": "这是 Windows Aero，因为它就是 OS 的窗口装饰层本身 —— 玻璃窗框、会发光的标题栏按钮、莹亮的进度条，由微软正式出货。"
      },
      "wouldBecomeIf": {
        "en": "It would become Frutiger Aero if you meant the whole era's optimistic eco-tech MOOD — glossy nature wallpapers, water droplets, skies — which surrounded the chrome but isn't the chrome.",
        "zh": "如果你说的是那个年代整体的乐观生态科技气质 —— 亮泽的自然壁纸、水珠、天空 —— 那些东西围绕着装饰层却不是装饰层本身，那就变成 Frutiger Aero 了。"
      }
    },
    "code": [
      {
        "title": "The glass frame: tinted blur + double bright edge",
        "language": "css",
        "code": "background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);"
      },
      {
        "title": "The signature red close-button glow",
        "language": "css",
        "code": ".close:hover { background: radial-gradient(circle at 50% 40%, #ff9d8a, #e81123 70%); box-shadow: 0 0 10px rgba(232,17,35,.7); }"
      },
      {
        "title": "The Windows 7 progress shimmer — pause under prefers-reduced-motion",
        "language": "css",
        "code": "background: linear-gradient(180deg,#8ef08e,#1fbf3a 45%,#0f9e2c); overlay: a 30%-wide white gradient strip animated left→right every 2s;"
      }
    ],
    "brief": {
      "en": "Create the surface using Windows Aero (Vista/7) styling. Defining signals: the window frame as transparent blurred glass — title bar and border show the scene behind them (backdrop-filter: blur(12px) saturate(1.3) on a rgba white/blue tint) while the content area stays opaque; diagonal specular light sweeps across the glass (a rotated linear-gradient white streak at low opacity); caption buttons that GLOW on hover — close floods red with a soft outer halo; luminous gradients for accents, like the shimmering green progress bar (gradient + a slow-moving highlight); 1px bright inner edge lining every glass pane; softly rounded chrome corners. Keep wallpaper and layout flexible — the glass needs something colorful behind it to read. Do not drift into Frutiger Aero: no nature imagery is required — this is the chrome language, not the era's mood board. Preserve title text legibility over unpredictable wallpapers (Aero drew a soft glow behind window titles — replicate it), 4.5:1 contrast for content text, hover glows paired with visible focus states, and reduced-motion alternatives for shimmer and window animation.",
      "zh": "用 Windows Aero（Vista/7）的风格来创作这个界面。决定性信号：窗口边框是透明毛玻璃 —— 标题栏和边框透出背后的场景（在白/蓝色调的 rgba 底色上加 backdrop-filter: blur(12px) saturate(1.3)），而内容区保持不透明；斜向镜面光扫过玻璃（一条旋转的 linear-gradient 白色光带，低不透明度）；标题栏按钮在悬停时发光 —— 关闭键泛起红光，带柔和的外圈光晕；强调色用莹亮渐变，比如泛波光的绿色进度条（渐变加一道缓慢移动的高光）；每块玻璃都勾着 1px 的亮内边；窗口角柔和倒圆。壁纸和布局保持灵活 —— 玻璃背后需要有色彩丰富的东西才读得出来。不要滑向 Frutiger Aero：不需要任何自然意象 —— 这是窗口装饰层语言，不是那个年代的情绪板。保证标题文字在不可预测的壁纸上清晰可读（Aero 当年在窗口标题后面画了一圈柔和辉光 —— 照做），内容文字保持 4.5:1 对比度，悬停辉光要与可见的焦点状态配对，波光扫动和窗口动画要有 reduced-motion 替代方案。"
    },
    "accessibility": {
      "en": "Glass over an unknown wallpaper makes title text unpredictable — Aero itself painted a soft white glow behind captions; do the same or guarantee a dark tint.\n\nHover glow is invisible to keyboard users — every glowing control needs an equally visible :focus-visible treatment.\n\nbackdrop-filter over animated content is expensive; on low-power devices provide a solid fallback (Vista itself shipped 'Aero Basic' for exactly this).",
      "zh": "玻璃底下是不可预知的壁纸，标题文字就没法预料 —— Aero 自己就在标题文字后面画了一圈柔和的白色辉光；照做，或者保证一层深色 tint。\n\n悬停辉光对键盘用户是不可见的 —— 每个会发光的控件都需要同样醒目的 :focus-visible 处理。\n\n在动态内容上跑 backdrop-filter 很费性能；在低功耗设备上提供不透明的降级方案（Vista 自己就为此出过 “Aero Basic”）。"
    },
    "origin": {
      "en": "Shipped with Windows Vista in 2006 (premium editions) as the flagship of the Desktop Window Manager's new composited rendering, refined and default in Windows 7 (2009); Windows 8 (2012) removed the glass for flat Metro chrome.",
      "zh": "2006 年随 Windows Vista（高级版本）出货，作为 Desktop Window Manager 全新合成渲染的旗舰卖点；在 Windows 7（2009）里被打磨成熟并成为默认；Windows 8（2012）拿掉了玻璃，换成扁平的 Metro 界面。"
    },
    "seeAlso": [
      {
        "slug": "styles/frutiger-aero",
        "name": "Frutiger Aero"
      },
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      },
      {
        "slug": "styles/aqua",
        "name": "Aqua"
      }
    ]
  },
  {
    "slug": "swiss-style",
    "name": {
      "en": "Swiss Style (International Typographic Style)",
      "zh": "瑞士国际主义风格（Swiss / International Typographic Style）"
    },
    "tagline": {
      "en": "Swiss Style treats graphic design as engineering: content locked to a mathematical grid, set in one neutral grotesk (Helvetica, Akzidenz-Grotesk), aligned flush left, ragged right, printed black on white with a single flat accent — classically Swiss red. Photography is objective documentation, never illustration; decoration is abolished. Crystallized in 1950s Switzerland, it became the default voice of corporate identity and wayfinding, and its grid logic still underpins most 'clean' interfaces.",
      "zh": "瑞士国际主义风格把平面设计当作工程：内容锁定在数学网格上，用一种中性 grotesk 字体排印（Helvetica、Akzidenz-Grotesk），左对齐、右侧自然参差，白纸黑字只配一个扁平强调色 —— 经典是瑞士红。摄影是客观记录，绝不是插画；装饰被彻底废除。它于 1950 年代在瑞士成形，随后成为企业识别与导视系统的默认语言，其网格逻辑至今仍支撑着大多数「干净」的界面。"
    },
    "scope": {
      "en": "Scope: Covers the typographic discipline — grid system, neutral grotesk type, flush-left setting, objective photography — wherever it surfaces, from posters to app UIs. The wider 'Swiss design' umbrella (furniture, watches, architecture) stays out; the Minimalism boundary is drawn in confusedWith.",
      "zh": "范围：涵盖这套字体排印纪律 —— 网格系统、中性 grotesk、左对齐排印、客观摄影 —— 无论它出现在海报还是应用界面里。更广义的「瑞士设计」（家具、手表、建筑）不在范围内；与极简主义的分界见 confusedWith。"
    },
    "aliases": {
      "en": [
        "posters with huge helvetica and a red square",
        "black and white design with one red accent",
        "that museum poster look where everything snaps to a grid",
        "text all left-aligned with the right edge messy",
        "the 60s corporate annual report style",
        "tons of white space but everything lined up on invisible lines"
      ],
      "zh": [
        "巨大 Helvetica 加红方块的海报",
        "黑白设计只点一个红色强调色",
        "那种所有元素都吸附到网格上的博物馆海报感",
        "文字全部左对齐、右边参差不齐",
        "60 年代企业年报的那种风格",
        "大片留白但一切都对齐在看不见的线上"
      ]
    },
    "signals": [
      {
        "id": "grid-system",
        "role": "defining",
        "name": {
          "en": "Mathematical grid system",
          "zh": "数学网格系统"
        },
        "facet": "layout",
        "description": {
          "en": "Every edge and baseline locks to an underlying column grid — classically 4–12 columns with constant gutters, plus a vertical baseline rhythm (e.g. 8px steps). An element that misses its grid line is a defect, not a choice.",
          "zh": "每条边、每条基线都锁定在底层分栏网格上 —— 经典为 4–12 栏、栏距恒定，外加纵向基线节奏（如 8px 步进）。没落在网格线上的元素被视为缺陷，而不是选择。"
        }
      },
      {
        "id": "neutral-grotesk",
        "role": "defining",
        "name": {
          "en": "One neutral grotesk",
          "zh": "单一中性 grotesk"
        },
        "facet": "typography",
        "description": {
          "en": "Helvetica, Akzidenz-Grotesk, or Univers (Inter or Arial on the web) carries everything alone; hierarchy comes from size and weight only — 700 headlines against 400 body — never from decorative faces.",
          "zh": "Helvetica、Akzidenz-Grotesk 或 Univers（Web 上用 Inter 或 Arial）独自包打一切；层级只来自字号和字重 —— 700 的标题对 400 的正文 —— 绝不靠装饰性字体。"
        }
      },
      {
        "id": "flush-left",
        "role": "defining",
        "name": {
          "en": "Flush left, ragged right",
          "zh": "左对齐，右侧参差"
        },
        "facet": "layout",
        "description": {
          "en": "All text hangs from a hard left axis and the right edge is left to rag. Justified blocks and centered headlines break the discipline instantly.",
          "zh": "所有文字挂在一条强左轴上，右缘放任参差。两端对齐的文本块和居中标题会立刻破坏这套纪律。"
        }
      },
      {
        "id": "black-white-red",
        "role": "defining",
        "name": {
          "en": "Black, white, one accent",
          "zh": "黑、白、一个强调色"
        },
        "facet": "color",
        "description": {
          "en": "Paper-white ground (#fff or #f4f4f0), near-black ink (#111), and exactly one flat accent — classic Swiss red #e30613. No gradients, no second hue.",
          "zh": "纸白地（#fff 或 #f4f4f0）、近黑墨色（#111），外加恰好一个扁平强调色 —— 经典是瑞士红 #e30613。不要渐变，不要第二个色相。"
        }
      },
      {
        "id": "objective-photography",
        "role": "defining",
        "name": {
          "en": "Objective photography",
          "zh": "客观摄影"
        },
        "facet": "imagery",
        "description": {
          "en": "Documentary black-and-white photos, cropped to rectangular grid modules and treated as factual records that replace illustration. Filters, duotones, and staged whimsy are foreign.",
          "zh": "纪实的黑白照片裁进网格的矩形模块，作为取代插画的事实记录。滤镜、双色调和摆拍的趣味都是外来物。"
        }
      },
      {
        "id": "asymmetric-balance",
        "role": "supporting",
        "name": {
          "en": "Asymmetric balance",
          "zh": "不对称的平衡"
        },
        "facet": "layout",
        "description": {
          "en": "A heavy typographic mass in one corner counterweighed by empty space elsewhere; the composition balances through grid position, never mirror symmetry.",
          "zh": "一角的厚重字体块由他处的留白来配平；构图靠网格位置取得平衡，绝不靠镜像对称。"
        }
      },
      {
        "id": "accent-choice",
        "role": "variable",
        "name": {
          "en": "Which single accent",
          "zh": "选哪个强调色"
        },
        "facet": "color",
        "description": {
          "en": "Swiss red is the cliché; the rule is one flat accent per composition — blue or orange versions stay Swiss as long as the rest of the discipline holds.",
          "zh": "瑞士红是老套路；规则是每个构图只用一个扁平强调色 —— 蓝色或橙色版本只要其余纪律还在，依然是瑞士风格。"
        }
      },
      {
        "id": "ornament",
        "role": "avoid",
        "name": {
          "en": "Ornament and softness",
          "zh": "装饰与软处理"
        },
        "facet": "surface",
        "description": {
          "en": "Drop shadows, gradients, rounded corners, serifs, textures — decoration of any kind marks another school. Swiss surfaces are flat paper and ink.",
          "zh": "投影、渐变、圆角、衬线、肌理 —— 任何装饰都标志着另一个流派。瑞士风格的表面就是平纸和油墨。"
        }
      }
    ],
    "confusedWith": {
      "slug": "minimalism",
      "name": "Minimalism",
      "because": {
        "en": "This is Swiss Style because it is a complete discipline, not an absence: an explicit mathematical grid, one neutral grotesk set flush left, and objective photography — the page is organized by rules, not merely emptied.",
        "zh": "这是瑞士国际主义风格，因为它是一套完整纪律而不是「少」：明确的数学网格、单一中性 grotesk 左对齐排印、客观摄影 —— 页面是被规则组织起来的，不只是被清空。"
      },
      "wouldBecomeIf": {
        "en": "It would become Minimalism if you kept the white space but dropped the system — center the type, switch to a serif or a rounded face, or place elements by feel instead of snapping them to grid lines — because then only the emptiness remains.",
        "zh": "如果留着留白但丢掉体系 —— 把文字居中、换用衬线或圆体、凭手感摆放元素而不是吸附到网格线上 —— 就变成极简主义了，因为那时剩下的只有空。"
      }
    },
    "code": [
      {
        "title": "The skeleton: 12-column grid, one grotesk, text hangs left",
        "language": "css",
        "code": ".poster { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 24px; font-family: Helvetica, \"Helvetica Neue\", Arial, sans-serif; color: #111; background: #fff; text-align: left; }"
      },
      {
        "title": "Flush-left headline, tight tracking, one Swiss-red accent",
        "language": "css",
        "code": ".poster h1 { grid-column: 1 / 9; margin: 0; font-size: 96px; font-weight: 700; line-height: 0.95; letter-spacing: -0.02em; }\n.poster .accent { color: #e30613; }"
      },
      {
        "title": "Same skeleton as utilities",
        "language": "tailwind",
        "code": "<section class=\"grid grid-cols-12 gap-6 bg-white font-sans text-left text-neutral-900\">\n  <h1 class=\"col-span-8 text-8xl font-bold leading-none tracking-tight\">Grid <span class=\"text-[#e30613]\">Systems</span></h1>\n</section>"
      }
    ],
    "brief": {
      "en": "Create the surface as a Swiss Style composition. Defining signals: an explicit 12-column grid, 24px gutters, every edge and baseline snapping to it on an 8px rhythm; one neutral grotesk (Helvetica, Arial, or Inter) with hierarchy by size and weight only — 16px body, 72–96px headlines at weight 700, line-height 0.95, letter-spacing -0.02em; all text flush left, ragged right — never justified, never centered; flat paper ground #ffffff, near-black ink #111111, one flat accent — Swiss red #e30613 — spent on one element (marker, rule, or word); imagery as documentary black-and-white photography cropped to grid rectangles; box-shadow: none, border-radius: 0, no gradients, no textures. Keep accent hue and photo subject flexible. Balance asymmetrically: the big type mass sits off-center, white space counterweighs it. Do not drift into Minimalism; the decisive difference is that Swiss is a system, not an absence — center the type or pick a serif and you have left it. Keep contrast at 4.5:1 (black/white is 21:1; #e30613 on white ~4.9:1), visible keyboard focus, and reduced-motion support.",
      "zh": "按瑞士国际主义风格（Swiss Style）创建这个界面。定义性信号：明确的 12 栏网格，24px 栏距，每条边、每条基线都吸附到网格上，纵向按 8px 节奏；单一中性 grotesk（Helvetica、Arial 或 Inter），层级只来自字号和字重 —— 正文 16px，标题 72–96px、字重 700、line-height 0.95、letter-spacing -0.02em；所有文字左对齐、右侧参差 —— 绝不两端对齐，绝不居中；扁平纸白地 #ffffff，近黑墨色 #111111，只用一个扁平强调色 —— 瑞士红 #e30613 —— 花在一个元素上（记号方块、分隔线或一个词）；图像用纪实黑白摄影，裁进网格矩形；box-shadow: none，border-radius: 0，不要渐变，不要肌理。强调色的色相和摄影主题保持灵活。构图要不对称地平衡：大字块偏离中心，让留白来配重。不要滑向极简主义；决定性区别在于瑞士风格是一套体系而不是「少」 —— 把文字居中或换上衬线，你就已经离开了它。对比度保持 4.5:1（黑白配是 21:1；#e30613 配白约 4.9:1），键盘焦点可见，支持 reduced-motion。"
    },
    "accessibility": {
      "en": "The black-on-white core is a strength — #111 on #fff measures 21:1 — but Swiss red #e30613 on white is only ~4.9:1: fine for text, yet pairings like red on black fail, so measure every accent combination before shipping.\n\nPoster habits do not all transfer: 9–10px captions under 96px headlines are illegible on screen, so keep body text at 16px or above and captions at 12px or above. The ragged-right setting genuinely helps here — it reads easier than justified text for many readers, including people with dyslexia, so discipline and accessibility agree for once.\n\nA rigid 12-column grid can shatter under 200% text zoom; build it with relative units and minmax() so columns reflow instead of clipping. Motion is minimal by nature in this style, but any scroll-triggered grid reveals still need a prefers-reduced-motion fallback.",
      "zh": "黑白主干是优势 —— #111 配 #fff 实测 21:1 —— 但瑞士红 #e30613 配白只有约 4.9:1：用于文字没问题，但红配黑之类的组合会翻车，每个强调色组合在交付前都要实测。\n\n海报习惯不能照搬到屏幕：96px 标题下配 9–10px 的图注在屏幕上没法读，正文保持 16px 以上、图注 12px 以上。右侧参差的排法在这里反而是真帮忙 —— 对包括失读症读者在内的许多人来说，它比两端对齐更好读，纪律和可访问性难得地达成一致。\n\n死板的 12 栏网格在 200% 文字缩放下可能崩坏；用相对单位和 minmax() 搭建，让栏能重排而不是裁切。这个风格天然动效很少，但任何滚动触发的网格显现动画仍然需要 prefers-reduced-motion 兜底。"
    },
    "origin": {
      "en": "Crystallized in Switzerland in the 1950s around two poles — Ernst Keller's teaching at the Kunstgewerbeschule Zürich, and the Basel school where Armin Hofmann and Emil Ruder taught, with Max Bill carrying the Bauhaus inheritance — and codified by Josef Müller-Brockmann, whose 'Grid Systems in Graphic Design' (1981) remains the manual. Its voice, Helvetica, was drawn by Max Miedinger with Eduard Hoffmann at the Haas foundry in 1957 (renamed from Neue Haas Grotesk in 1960); its elder cousin Akzidenz-Grotesk dates to 1896. The journal Neue Grafik (1958–1965) exported the system worldwide, where it became the default language of corporate identity, posters, and wayfinding.",
      "zh": "1950 年代在瑞士围绕两极成形 —— 一极是 Ernst Keller 在苏黎世工艺美术学校（Kunstgewerbeschule Zürich）的教学，另一极是 Armin Hofmann 与 Emil Ruder 任教的巴塞尔学校，Max Bill 则承接了包豪斯的衣钵 —— 由 Josef Müller-Brockmann 集大成，他的《Grid Systems in Graphic Design》（1981）至今仍是案头手册。它的声音 Helvetica 由 Max Miedinger 与 Eduard Hoffmann 于 1957 年在 Haas 铸字厂绘制（1960 年由 Neue Haas Grotesk 更名）；它的前辈 Akzidenz-Grotesk 可追溯至 1896 年。杂志《Neue Grafik》（1958–1965）把这套体系输出到全世界，使其成为企业识别、海报与导视的默认语言。"
    },
    "seeAlso": [
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      },
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      },
      {
        "slug": "styles/flat-design",
        "name": "Flat Design"
      },
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      }
    ]
  },
  {
    "slug": "bauhaus",
    "name": {
      "en": "Bauhaus",
      "zh": "包豪斯（Bauhaus）"
    },
    "tagline": {
      "en": "Bauhaus is the visual language of the 1919–1933 German school that set out to unify art, craft, and industrial production: compositions are built from the primary shapes — circle, triangle, square — filled with unmixed primaries red, yellow, and blue against black and white, while headlines drop capital letters for Herbert Bayer's all-lowercase geometric alphabet. A century later it is still the default shorthand for geometric modernism in posters, logos, and landing pages.",
      "zh": "包豪斯是 1919–1933 年德国那所设计学校的视觉语言，目标是统一艺术、工艺与工业生产：构图全部由基本几何形 —— 圆、三角、方 —— 搭建，填充不掺调的三原色红、黄、蓝，衬以黑白；标题则丢掉大写字母，改用 Herbert Bayer 式的全小写几何字母。一个世纪后，它仍是海报、Logo 和落地页里「几何现代主义」的默认代称。"
    },
    "scope": {
      "en": "Scope: Covers the Bauhaus look as it appears in graphic and UI design — primary-shape construction, a primaries-plus-ink palette, lowercase geometric type. It is not the whole of modernism: Swiss Style is the later grid-locked successor, and De Stijl shares the primaries but locks them into orthogonal black grids.",
      "zh": "范围：本条覆盖平面与 UI 设计里的包豪斯面貌 —— 基本几何形构成、三原色加墨黑的配色、全小写几何字体。它不等于整个现代主义：瑞士国际主义风格是后来网格化的继任者；风格派（De Stijl）同样用三原色，但把它们锁进正交的黑色网格里。"
    },
    "aliases": {
      "en": [
        "red yellow and blue circles triangles and squares",
        "geometric posters that look like a kandinsky painting",
        "lowercase geometric fonts with no capital letters at all",
        "that primary color art school style with basic shapes",
        "modernist logos made of a circle a triangle and a square"
      ],
      "zh": [
        "红黄蓝的圆形三角和方块",
        "看起来像康定斯基画的几何海报",
        "一个大写字母都没有的全小写几何字体",
        "基本形状加三原色的那种艺术学校风",
        "用一个圆一个三角一个方块拼的现代主义 Logo"
      ]
    },
    "signals": [
      {
        "id": "primary-shapes",
        "role": "defining",
        "name": {
          "en": "Circle, triangle, square only",
          "zh": "只用圆、三角、方"
        },
        "facet": "geometry",
        "description": {
          "en": "Every decorative element is one of the three pure shapes — no blobs, stars, or freehand curves. Kandinsky's 1923 mapping still reads: yellow triangle, red square, blue circle.",
          "zh": "每个装饰元素都是三种纯几何形之一 —— 没有 blob、星星或手绘曲线。康定斯基 1923 年的对应关系至今有效：黄三角、红方块、蓝圆形。"
        }
      },
      {
        "id": "primaries-and-ink",
        "role": "defining",
        "name": {
          "en": "Primaries plus black and white",
          "zh": "三原色加黑白"
        },
        "facet": "color",
        "description": {
          "en": "Unmixed red (#e3000f), yellow (#ffd300) and blue (#0057a8) on paper white with ink black — flat opaque fills, no tints, no mid-greys, no gradients.",
          "zh": "不掺调的红（#e3000f）、黄（#ffd300）、蓝（#0057a8）铺在纸白底上配墨黑 —— 扁平不透明填充，没有中间色、灰色或渐变。"
        }
      },
      {
        "id": "lowercase-universal-type",
        "role": "defining",
        "name": {
          "en": "All-lowercase geometric type",
          "zh": "全小写几何字体"
        },
        "facet": "typography",
        "description": {
          "en": "Headlines and labels run with text-transform: lowercase in a constructed geometric sans (Futura, Century Gothic) — Bayer's universal-alphabet gesture: capitals abolished, letters built from circles and straight strokes.",
          "zh": "标题和标签用 text-transform: lowercase，配构造感几何无衬线（Futura、Century Gothic）—— 拜尔 universal 字体的姿态：废除大写，字母由圆和直线搭成。"
        }
      },
      {
        "id": "asymmetric-tension",
        "role": "supporting",
        "name": {
          "en": "Asymmetric diagonal tension",
          "zh": "不对称的对角张力"
        },
        "facet": "layout",
        "description": {
          "en": "Shapes overlap off-center and collide at angles — diagonal rules and unbalanced placement give the page constructivist energy instead of grid-locked calm.",
          "zh": "几何形偏离中心地重叠、带着角度碰撞 —— 对角线和失衡的构图给页面构成主义的能量，而不是网格锁死的平静。"
        }
      },
      {
        "id": "black-bars-rules",
        "role": "supporting",
        "name": {
          "en": "Ink bars and rules",
          "zh": "墨黑色条与细线"
        },
        "facet": "geometry",
        "description": {
          "en": "Solid black bars 4–8px thick and thin rules cut across and around the color shapes, acting as scaffolding and punctuation.",
          "zh": "4–8px 粗的实心黑条和细线切割、穿插在彩色几何形之间，像脚手架，也像标点。"
        }
      },
      {
        "id": "flat-matte-planes",
        "role": "defining",
        "name": {
          "en": "Flat matte color planes",
          "zh": "扁平哑光的色面"
        },
        "facet": "surface",
        "description": {
          "en": "Zero depth rendering: no shadows, glows, gradients, or textures — each shape is a single solid color with a hard edge.",
          "zh": "零深度渲染：没有阴影、辉光、渐变或纹理 —— 每个形状都是一块边缘锐利的纯色。"
        }
      },
      {
        "id": "mechanical-motion",
        "role": "variable",
        "name": {
          "en": "Mechanical geometric motion",
          "zh": "机械式几何运动"
        },
        "facet": "motion",
        "description": {
          "en": "When things move, they translate or rotate on straight paths in 150–250ms with linear or crisp easing — machine-like, never springy.",
          "zh": "要动就沿直线路径平移或旋转，150–250ms，linear 或干脆的缓动 —— 像机器零件，绝不回弹。"
        }
      },
      {
        "id": "ornament-depth",
        "role": "avoid",
        "name": {
          "en": "Ornament and soft depth",
          "zh": "装饰与软纵深"
        },
        "facet": "depth",
        "description": {
          "en": "Drop shadows, cute rounded corners, gradients, serifs, or decorative flourishes break it instantly — in Bauhaus the construction is the only ornament.",
          "zh": "投影、圆滚滚的可爱圆角、渐变、衬线或装饰性点缀会立刻破功 —— 包豪斯里，构成本身就是唯一的装饰。"
        }
      }
    ],
    "confusedWith": {
      "slug": "swiss-style",
      "name": "Swiss Style",
      "because": {
        "en": "This is Bauhaus because the layout is an expressive construction of pure circle, triangle and square in red, yellow and blue with all-lowercase geometric lettering — the composition itself performs, instead of an invisible grid organizing neutral content.",
        "zh": "这是包豪斯，因为版面是一场由纯圆、纯三角、纯方块搭成的表现性构成，配红黄蓝和全小写几何字体 —— 是构图本身在表演，而不是一张隐形网格在组织中性的内容。"
      },
      "wouldBecomeIf": {
        "en": "It would become Swiss Style if the shape play were replaced by documentary photography, the lettering went back to mixed-case neutral grotesk locked to a strict mathematical grid, and the palette drained to black, white and grey plus a single accent — objectivity replacing expression.",
        "zh": "如果把几何构成换成纪实摄影，字体改回大小写混合的中性 grotesk 并锁进严格的数学网格，配色抽干到黑白灰加一处点缀色 —— 用客观取代表现 —— 就变成瑞士国际主义风格了。"
      }
    },
    "code": [
      {
        "title": "Palette + lowercase geometric type",
        "language": "css",
        "code": ":root{\n  --bauhaus-red:#e3000f; --bauhaus-yellow:#ffd300; --bauhaus-blue:#0057a8;\n  --bauhaus-ink:#141414; --bauhaus-paper:#f2eee3;\n}\n.bauhaus{\n  background:var(--bauhaus-paper); color:var(--bauhaus-ink);\n  font-family:\"Futura\",\"Century Gothic\",\"Avenir Next\",sans-serif;\n  text-transform:lowercase; /* bayer's universal alphabet: no capitals */\n}"
      },
      {
        "title": "The three shapes in pure CSS",
        "language": "css",
        "code": ".circle{ width:64px; height:64px; border-radius:50%; background:var(--bauhaus-blue); }\n.square{ width:56px; height:56px; background:var(--bauhaus-red); }\n.triangle{ width:0; height:0; border-left:32px solid transparent;\n  border-right:32px solid transparent; border-bottom:55px solid var(--bauhaus-yellow); }"
      },
      {
        "title": "Same construction as utilities",
        "language": "tailwind",
        "code": "lowercase font-sans bg-[#f2eee3] text-[#141414] — circle: rounded-full bg-[#0057a8]; triangle: w-0 h-0 border-x-[32px] border-x-transparent border-b-[55px] border-b-[#ffd300]"
      }
    ],
    "brief": {
      "en": "Build the surface as a Bauhaus composition. Canvas: warm paper #f2eee3, ink #141414. Closed palette: red #e3000f, yellow #ffd300, blue #0057a8 — flat opaque fills only; no tints, gradients, shadows, or textures; corner radius 0–4px. Every decorative element is a pure circle, square, or CSS border-trick triangle (yellow triangle, red square, blue circle); overlap them asymmetrically with one or two diagonal ink bars 4–8px thick — the geometry is the only ornament. Type: constructed geometric sans (Futura, Century Gothic, Avenir Next; web: Jost/Montserrat); headlines/labels use text-transform: lowercase — never a capital; body copy may keep sentence case. Buttons are solid primary blocks with hard edges; hover swaps the fill to another primary, never adds depth. Motion is mechanical: translate/rotate on straight paths, 150–250ms, linear or crisp ease, no spring. Do not drift into Swiss Style: no documentary photography, no mixed-case grotesk on a strict grid, no drained monochrome palette. Keep 4.5:1 text contrast (ink on paper/yellow, paper on red/blue) and a visible focus outline.",
      "zh": "按包豪斯构成来搭建这个界面。画布：暖纸白 #f2eee3，墨黑 #141414。封闭配色：红 #e3000f、黄 #ffd300、蓝 #0057a8 —— 只用扁平不透明填充；不要中间色、渐变、阴影或纹理；圆角保持 0–4px。每个装饰元素都是纯粹的圆、方块或 CSS border 技巧三角（黄三角、红方块、蓝圆形）；让它们不对称地重叠，再加一两条 4–8px 粗的对角墨黑色条 —— 几何本身就是唯一的装饰。字体：构造感几何无衬线（Futura、Century Gothic、Avenir Next；Web 上用 Jost/Montserrat）；标题/标签用 text-transform: lowercase —— 绝不出现大写字母；正文可以保留正常大小写。按钮是硬边的实心原色块；hover 把填充换成另一个原色，绝不加纵深。动效是机械式的：沿直线路径平移/旋转，150–250ms，linear 或干脆的缓动，不要弹簧。不要滑向瑞士国际主义风格：不要纪实摄影，不要严格网格上大小写混合的中性 grotesk，不要抽干的黑白灰配色。文字对比度保持 4.5:1（纸白/黄底上用墨黑；红/蓝底上用纸白），焦点框要可见。"
    },
    "accessibility": {
      "en": "Red-on-blue and blue-on-red pairings vibrate and fall well below 4.5:1 — never set text or small functional shapes in one primary on another. Ink on paper and on yellow passes easily; paper-white on red (#e3000f) or blue (#0057a8) must be measured per combination. Yellow on white fails badly: reserve yellow for shapes, never for text or thin icons.\n\nAll-lowercase headlines remove the word-shape cues that mixed case provides — acceptable for short display lines, but keep body copy, form labels, and anything longer than a phrase in sentence case, and build hierarchy with size and weight rather than relying on capitals.\n\nOverlapping saturated shapes and diagonal layouts raise cognitive load and can mask interaction order: give every interactive element a visible focus outline (2–3px ink with offset), never communicate state by primary color alone — pair it with a shape or icon change — and honor prefers-reduced-motion for any rotating or sliding geometry.",
      "zh": "红配蓝、蓝配红会视觉震颤，对比度也远低于 4.5:1 —— 永远别把文字或小的功能性形状用一种原色压在另一种原色上。墨黑配纸白、墨黑配黄轻松达标；纸白配红（#e3000f）或蓝（#0057a8）必须逐组实测。黄配白惨不忍睹：黄色只留给形状，别用它写字或画细图标。\n\n全小写标题抹掉了大小写混合所提供的词形线索 —— 短展示行可以接受，但正文、表单标签和任何超过一个短语的文字都要用正常大小写，并用字号和字重来拉开层级，而不是依赖大写。\n\n重叠的饱和色形和对角构图会抬高认知负荷、掩盖交互顺序：给每个可交互元素一个可见的焦点框（2–3px 墨黑 outline 加 offset），别只靠原色变化传达状态 —— 要同时改变形状或图标 —— 任何旋转或滑动的几何动效都要响应 prefers-reduced-motion。"
    },
    "origin": {
      "en": "The Staatliches Bauhaus was founded in Weimar in 1919 by architect Walter Gropius, merging the city's art academy and crafts school to unite art, craft, and industrial production; it moved to Dessau in 1925 and Berlin in 1932 before closing in 1933 under Nazi pressure. Wassily Kandinsky and Paul Klee taught its formal grammar — Kandinsky's 1923 questionnaire fixed the yellow triangle, red square, and blue circle — while Herbert Bayer's 1925 'universal' alphabet pushed the all-lowercase geometric lettering. After the closure its masters emigrated — Gropius to Harvard, László Moholy-Nagy to found Chicago's New Bauhaus in 1937 — turning a fourteen-year school into the world's default modernist vocabulary.",
      "zh": "国立包豪斯学校（Staatliches Bauhaus）1919 年由建筑师 Walter Gropius 在魏玛创立，合并了当地的美术学院与工艺学校，目标是统一艺术、工艺与工业生产；1925 年迁往德绍，1932 年迁往柏林，1933 年在纳粹压力下关闭。Wassily Kandinsky 与 Paul Klee 在那里教授形式语法 —— 康定斯基 1923 年的问卷确定了黄三角、红方块、蓝圆形的对应关系 —— Herbert Bayer 1925 年的 universal 字体则把全小写几何字母推成了标志。学校关闭后大师们流亡 —— 格罗皮乌斯去了哈佛，László Moholy-Nagy 1937 年在芝加哥创办新包豪斯 —— 把这所只存在了十四年的学校，变成了全世界默认的现代主义词汇表。"
    },
    "seeAlso": [
      {
        "slug": "styles/swiss-style",
        "name": "Swiss Style"
      },
      {
        "slug": "styles/art-deco",
        "name": "Art Deco"
      },
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      },
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      }
    ]
  },
  {
    "slug": "memphis",
    "name": {
      "en": "Memphis",
      "zh": "孟菲斯风格（Memphis）"
    },
    "tagline": {
      "en": "Memphis is the postmodern design language launched by the Memphis Group in Milan in 1981: calculated 'bad taste' — hot pink, lemon yellow, teal and purple slammed together on white grounds, black-outlined toy geometry, and an allover confetti of squiggles, zigzags, dots and triangles. Born as radical furniture in printed plastic laminate, it was mocked and worshipped alike, dissolved in 1987, and resurrected as the default visual shorthand for 'the eighties' in graphic and UI design.",
      "zh": "孟菲斯风格是 1981 年由孟菲斯集团（Memphis Group）在米兰发起的后现代设计语言：精心算计的「坏品味」—— 艳粉、柠檬黄、青绿、紫在白色底上硬碰硬，描黑边的玩具感几何形，加上满版的波浪线、锯齿、圆点和三角纸屑。它出身是裹着印刷塑料层压板的激进家具，被同等程度地嘲笑和膜拜，1987 年解散，随后复活为平面与 UI 设计里「八十年代」的默认视觉代名词。"
    },
    "scope": {
      "en": "Scope: Covers the Memphis Group's original postmodern language (1981–87) and its later revival as pattern-driven 80s styling in graphics and UI. 'Corporate Memphis' — flat, big-limbed vector illustration — is a later namesake with its own entry. Solid color blocks with hard offset shadows and zero patterning belong to Neobrutalism.",
      "zh": "范围：涵盖孟菲斯集团的原版后现代语言（1981–87）及其后来在平面与 UI 中作为图案化 80 年代风格的复兴。「Corporate Memphis」—— 扁平、四肢粗大的矢量插画 —— 是后来的同名异义，另有它自己的条目；纯色块加硬偏移阴影、零纹样的做法属于新粗野主义。"
    },
    "aliases": {
      "en": [
        "80s squiggles and triangles pattern everywhere",
        "that saved by the bell intro style",
        "pink yellow teal shapes with black outlines",
        "geometric confetti background style",
        "retro 80s geometric pattern website",
        "white background with squiggly lines and dots"
      ],
      "zh": [
        "满屏 80 年代波浪线和三角图案",
        "美剧《Saved by the Bell》片头那种花俏风格",
        "粉黄青撞色图形描黑边",
        "几何纸屑背景的那种风格",
        "复古 80 年代几何图案网站",
        "白底上弯弯曲曲的线和圆点"
      ]
    },
    "signals": [
      {
        "id": "confetti-pattern",
        "role": "defining",
        "name": {
          "en": "Allover confetti pattern",
          "zh": "满版纸屑图案"
        },
        "facet": "imagery",
        "description": {
          "en": "Squiggles, zigzags, dots, crosses and tiny triangles scattered edge-to-edge over a white ground — the pattern IS the background, not an accent strip.",
          "zh": "波浪线、锯齿、圆点、叉叉和小三角铺满白色底的每一个角落 —— 图案本身就是背景，不是一条装饰边。"
        }
      },
      {
        "id": "squiggle-line",
        "role": "defining",
        "name": {
          "en": "Squiggles and zigzags",
          "zh": "波浪线与锯齿"
        },
        "facet": "geometry",
        "description": {
          "en": "Hand-feeling wavy lines and lightning zigzags, usually 2–4px black strokes — the most-quoted Memphis mark, descended from Sottsass's 1978 'Bacterio' laminate print.",
          "zh": "手绘感的波浪线和闪电锯齿，通常是 2–4px 的黑色描线 —— 被引用最多的孟菲斯记号，源自 Sottsass 1978 年的「Bacterio」层压板纹样。"
        }
      },
      {
        "id": "clashing-palette",
        "role": "defining",
        "name": {
          "en": "Deliberate color clashes",
          "zh": "刻意的撞色"
        },
        "facet": "color",
        "description": {
          "en": "Hot pink, lemon yellow, teal and purple (e.g. #ff5fa2, #ffd500, #2ec4b6, #7b61ff) placed side by side with no harmonic bridging — the clash is the point.",
          "zh": "艳粉、柠檬黄、青绿和紫（如 #ff5fa2、#ffd500、#2ec4b6、#7b61ff）直接并排，不做任何和谐过渡 —— 撞色本身就是目的。"
        }
      },
      {
        "id": "black-inked-shapes",
        "role": "defining",
        "name": {
          "en": "Black-inked toy shapes",
          "zh": "描黑边的玩具形状"
        },
        "facet": "geometry",
        "description": {
          "en": "Circles, triangles, half-donuts and blobs outlined in 2–3px solid black, like cut paper or screen-print ink — playful geometry over grids.",
          "zh": "圆形、三角、半圆环和不规则块面勾着 2–3px 纯黑实线边，像剪纸或丝网印刷的墨稿 —— 俏皮的几何压倒网格。"
        }
      },
      {
        "id": "flat-print-depth",
        "role": "defining",
        "name": {
          "en": "Collage depth, zero cast shadows",
          "zh": "拼贴纵深，零投影"
        },
        "facet": "depth",
        "description": {
          "en": "Depth comes only from overlapping flat shapes; nothing casts a shadow — it reads as screen print or laminated paper, not simulated light.",
          "zh": "纵深只来自扁平形状的相互叠压；没有任何东西投下阴影 —— 读起来是丝网印刷或层压纸，不是模拟光照。"
        }
      },
      {
        "id": "asymmetric-collage",
        "role": "supporting",
        "name": {
          "en": "Off-grid tilted composition",
          "zh": "破网格的倾斜构图"
        },
        "facet": "layout",
        "description": {
          "en": "Elements rotated a few degrees, overlapped, breaking columns on purpose; tidy symmetry reads as a mistake here.",
          "zh": "元素故意旋转几度、互相叠压、打破栏格；整齐对称在这里反而像失误。"
        }
      },
      {
        "id": "laminate-plastic",
        "role": "variable",
        "name": {
          "en": "Plastic-laminate gloss",
          "zh": "塑料层压板光泽"
        },
        "facet": "surface",
        "description": {
          "en": "The furniture originals wore glossy printed laminate and terrazzo; UI versions sometimes echo it with speckle textures or a sticker finish — optional.",
          "zh": "原版家具裹着光面印刷层压板和水磨石；UI 版本有时用噪点纹理或贴纸质感致敬 —— 可选。"
        }
      },
      {
        "id": "offset-shadows",
        "role": "avoid",
        "name": {
          "en": "Hard offset shadows",
          "zh": "生硬偏移阴影"
        },
        "facet": "depth",
        "description": {
          "en": "Solid displaced block shadows are neobrutalism's construction; on a Memphis surface they flatten the pattern party into sticker blocks.",
          "zh": "实心偏移色块阴影是新粗野主义的构造；出现在孟菲斯的画面上，会把图案派对压扁成贴纸块。"
        }
      }
    ],
    "confusedWith": {
      "slug": "neobrutalism",
      "name": "Neobrutalism",
      "because": {
        "en": "This is Memphis because the look is pattern-first: squiggles, zigzags, dots and triangles scattered edge-to-edge across the ground, pink/yellow/teal/purple fills clashing underneath, and print-flat depth with no cast shadows.",
        "zh": "这是孟菲斯风格，因为图案是第一位的：波浪线、锯齿、圆点和三角从一边铺到另一边，粉/黄/青/紫的填充在底下互相冲撞，纵深是印刷式的扁平，没有任何投影。"
      },
      "wouldBecomeIf": {
        "en": "It would become neobrutalism if you swept the confetti off the ground, locked every element into a uniform 2–3px black border, and gave each one a hard black offset shadow — playful pattern collage traded for clean sticker-block construction.",
        "zh": "如果把纸屑从底上扫干净，给每个元素套上统一的 2–3px 黑边框，再各加一道生硬的黑色偏移阴影 —— 拿俏皮的图案拼贴换干净的贴纸块构造 —— 就变成新粗野主义了。"
      }
    },
    "code": [
      {
        "title": "Confetti ground — self-contained SVG tile, no image assets",
        "language": "css",
        "code": "background-color:#ffffff;\nbackground-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cpath d='M12 26q10-16 20 0t20 0' fill='none' stroke='%23000000' stroke-width='3'/%3E%3Ccircle cx='104' cy='32' r='7' fill='%23ff5fa2'/%3E%3Cpath d='M26 116l13-22 13 22z' fill='%23ffd500' stroke='%23000000' stroke-width='2'/%3E%3Crect x='96' y='98' width='15' height='15' fill='%232ec4b6' stroke='%23000000' stroke-width='2' transform='rotate(18 103 105)'/%3E%3C/svg%3E\");\nbackground-size:140px 140px;"
      },
      {
        "title": "Inked toy shape — flat print, no shadow",
        "language": "css",
        "code": "border:3px solid #000; background:#ffd500; border-radius:12px; transform:rotate(-2deg); box-shadow:none;"
      },
      {
        "title": "Squiggle divider — repeat-x wavy line",
        "language": "css",
        "code": "height:8px; background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='8'%3E%3Cpath d='M0 4q3-6 6 0t6 0t6 0t6 0' fill='none' stroke='%23000000' stroke-width='2.5'/%3E%3C/svg%3E\") repeat-x;"
      }
    ],
    "brief": {
      "en": "Create the surface in the spirit of Memphis (Memphis Group, 1981). Defining signals: allover confetti (squiggles, zigzags, dots, crosses, tiny triangles) on a white #ffffff ground; deliberate clashes of hot pink #ff5fa2, lemon yellow #ffd500, teal #2ec4b6, purple #7b61ff with no harmonic bridging; shapes inked with 2–3px solid #000000 outlines; print-flat depth — overlap alone layers shapes, NOTHING casts a shadow (no box-shadow, gradients, blur). Compose as playful collage: chips rotated ±2–4deg, broken grid, mixed geometries — a circle button beside square tags, squiggle for a divider. Headings: chunky rounded display grotesk, black, weight 700–900; body plain black 14–16px. Interactions bounce: cubic-bezier(.34,1.56,.64,1) overshoot on hover/press. Pattern stays dense in decor zones; long text sits on solid fills. Do not drift into neobrutalism: confetti removed plus uniform borders with 4px 4px 0 #000 offset shadows IS neobrutalism — Memphis is pattern-first with zero cast shadows. Text stays at 4.5:1 on solid fills (never white on yellow or pink); honor prefers-reduced-motion.",
      "zh": "按孟菲斯（Memphis Group，1981）的精神创建界面。定义性信号：白色 #ffffff 底上满版撒开纸屑（波浪线、锯齿、圆点、叉叉、小三角）；艳粉 #ff5fa2、柠檬黄 #ffd500、青绿 #2ec4b6、紫 #7b61ff 刻意撞色，不做和谐过渡；形状都勾 2–3px 纯 #000000 实线边；印刷式扁平纵深 —— 只靠叠压分层，任何东西都不投影（不用 box-shadow、渐变、模糊）。按俏皮拼贴构图：标签旋转 ±2–4deg、打破网格、几何形混排 —— 圆形按钮挨着方形标签，分隔线用波浪线。标题用粗壮的圆角展示型 grotesk，黑色，字重 700–900；正文朴素黑字 14–16px。交互要弹：hover/press 用 cubic-bezier(.34,1.56,.64,1) 过冲。装饰区图案保持高密度；长文放在纯色填充上。不要滑向新粗野主义：拿掉纸屑加上统一边框和 4px 4px 0 #000 偏移阴影就是新粗野主义 —— 孟菲斯是图案优先、零投影。文字在纯色填充上保持 4.5:1（永远不要在黄或粉上用白字）；响应 prefers-reduced-motion。"
    },
    "accessibility": {
      "en": "A busy patterned ground destroys text legibility fast: never set body copy directly on the confetti — give text a solid fill (white or one of the palette colors) and measure 4.5:1. White text on #ffd500 or #ff5fa2 fails; black text on those same fills passes.\n\nHigh-saturation clashes plus allover pattern are real cognitive load — the eye gets no resting place. Reserve dense confetti for hero and decoration zones, drop the density behind content, and avoid tiny high-frequency marks (1px dots moiré on screens and vibrate for sensitive readers).\n\nTilted elements and bouncy easing need limits: keep rotations small (±4deg) so text stays readable, and under prefers-reduced-motion replace the overshoot easing with instant state changes — the style survives the swap intact.",
      "zh": "繁忙的图案底很快就会毁掉文字可读性：永远别把正文直接压在纸屑上 —— 给文字一块纯色填充（白色或调色板里的颜色）并实测 4.5:1。白字配 #ffd500 或 #ff5fa2 过不了；黑字配这些填充能过。\n\n高饱和撞色加满版图案是实打实的认知负荷 —— 眼睛没有歇脚的地方。把密集纸屑留给 hero 和装饰区，内容区背后降低密度，也别用高频小纹样（屏幕上的 1px 圆点会产生摩尔纹，对敏感读者来说一直在抖）。\n\n倾斜元素和弹跳缓动要有边界：旋转保持在小角度（±4deg）以内，文字才读得下去；在 prefers-reduced-motion 下把过冲缓动换成瞬时状态切换 —— 这个风格照样成立。"
    },
    "origin": {
      "en": "The Memphis Group was founded in Milan by designer Ettore Sottsass with a circle of young collaborators — Michele De Lucchi, Nathalie du Pasquier, George Sowden, Marco Zanini, Martine Bedin and others — at a December 1980 meeting where Bob Dylan's 'Stuck Inside of Mobile with the Memphis Blues Again' kept spinning, giving the group its name. Its first collection, shown in Milan in 1981, wrapped toy-like furniture in printed plastic laminates such as Sottsass's squiggly 1978 'Bacterio' pattern; the group disbanded in 1987, and its graphics became the era's shorthand for eighties pop design, revived wholesale by pattern and UI designers in the 2010s.",
      "zh": "孟菲斯集团由设计师 Ettore Sottsass 与一圈年轻合作者 —— Michele De Lucchi、Nathalie du Pasquier、George Sowden、Marco Zanini、Martine Bedin 等人 —— 在米兰创立，1980 年 12 月的那次聚会上 Bob Dylan 的《Stuck Inside of Mobile with the Memphis Blues Again》反复播放，组名由此而来。1981 年在米兰展出的首个系列把玩具般的家具裹上印刷塑料层压板，比如 Sottsass 1978 年设计的波浪纹「Bacterio」；集团于 1987 年解散，其图形语言成为那个时代「八十年代流行设计」的代名词，并在 2010 年代被图案与 UI 设计师整体复兴。"
    },
    "seeAlso": [
      {
        "slug": "styles/corporate-memphis",
        "name": "Corporate Memphis"
      },
      {
        "slug": "styles/neobrutalism",
        "name": "Neobrutalism"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K"
      },
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      }
    ]
  },
  {
    "slug": "vaporwave",
    "name": {
      "en": "Vaporwave",
      "zh": "蒸汽波（Vaporwave）"
    },
    "tagline": {
      "en": "Vaporwave is the visual dialect of the early-2010s internet music microgenre of the same name: a collage of 1980s–90s consumer debris — pastel pink-to-cyan gradient skies, Greek marble busts, Japanese katakana, Windows 95 window chrome, palm-tree sunsets over grid floors — degraded with VHS scanlines, chromatic aberration, and glitch. It treats corporate-utopian imagery as found footage: dreamy, ironic, and worn. A nostalgia remix, not a period original.",
      "zh": "蒸汽波是 2010 年代初网络同名音乐微流派的视觉方言：一幅 80–90 年代消费文化碎片的拼贴 —— 粉到青的粉彩渐变天空、希腊大理石雕像、日文片假名、Windows 95 窗口边框、网格地面上的棕榈树夕阳 —— 再叠上 VHS 扫描线、色差和故障效果做旧。它把企业乌托邦式的图像当现成素材带用：梦幻、讽刺、带着磨损感。是怀旧 remix，不是年代原作。"
    },
    "scope": {
      "en": "Scope: Covers the visual remix aesthetic, not the music's chopped-and-screwed production. The neon-outrun cousin that shares the sunset grid is synthwave/retrofuturism; the genuine turn-of-millennium original it samples is Y2K Digital Aesthetic (its own entry), and GeoCities-era amateur pages belong to Vernacular Web.",
      "zh": "范围：只讲这套视觉 remix 美学，不讲音乐上的 chopped-and-screwed 制作手法。共享夕阳网格的霓虹表亲是 synthwave/retrofuturism；它采样的千禧年原作是 Y2K 数字美学（另见该条），GeoCities 时代的业余主页则归民间网页。"
    },
    "aliases": {
      "en": [
        "that pink and teal aesthetic with the greek statue heads",
        "the tumblr look with marble busts and japanese text",
        "retro windows 95 popups over a pink gradient sunset",
        "vhs glitch art with palm trees and katakana",
        "that nostalgic 80s mall fever-dream collage style",
        "the pastel purple grid sunset with statues"
      ],
      "zh": [
        "粉青配色、带希腊雕像头的那种风格",
        "Tumblr 上大理石半身像加日文的那种 aesthetic 风",
        "粉色渐变夕阳上叠着复古 Windows 95 弹窗",
        "VHS 故障画面加棕榈树和片假名",
        "怀旧 80 年代商场、像发烧梦一样的拼贴风",
        "粉紫网格夕阳配雕像的那种"
      ]
    },
    "signals": [
      {
        "id": "pink-cyan-gradient",
        "role": "defining",
        "name": {
          "en": "Pink-to-cyan gradient skies",
          "zh": "粉到青的渐变天空"
        },
        "facet": "color",
        "description": {
          "en": "The Floral Shoppe wash: cyan #01cdfe at the horizon bleeding through pink #ff71ce and purple #b967ff into deep indigo night. Applied to skies, washes, and type fills — never to chrome or metal.",
          "zh": "《Floral Shoppe》式的晕染：地平线处的青 #01cdfe 穿过粉 #ff71ce、紫 #b967ff，融进深靛蓝的夜空。用在天空、罩染和字体填充上 —— 绝不用于铬或金属。"
        }
      },
      {
        "id": "marble-busts",
        "role": "defining",
        "name": {
          "en": "Greek marble statuary",
          "zh": "希腊大理石雕像"
        },
        "facet": "imagery",
        "description": {
          "en": "White-to-grey classical busts, heads, and torsos floating in the composition, sometimes sliced, masked, or duplicated. Antiquity is sampled like stock footage — the statue is the mascot.",
          "zh": "白到灰的古典半身像、头像和躯干漂浮在构图里，有时被切开、蒙版或复制。古典被当成素材带采样 —— 雕像就是吉祥物。"
        }
      },
      {
        "id": "win95-chrome",
        "role": "defining",
        "name": {
          "en": "Windows 95 window chrome",
          "zh": "Windows 95 窗口边框"
        },
        "facet": "surface",
        "description": {
          "en": "Battleship-grey #c0c0c0 panels with 1–2px hard bevels, blue-gradient title bars, pixel icons, and dialog boxes used as decoration. The dead desktop is a collage element, not a working UI.",
          "zh": "战舰灰 #c0c0c0 面板配 1–2px 硬斜角、蓝色渐变标题栏、像素图标，对话框被当作装饰。死去的桌面是拼贴素材，不是拿来用的 UI。"
        }
      },
      {
        "id": "katakana-latin",
        "role": "defining",
        "name": {
          "en": "Katakana and full-width latin",
          "zh": "片假名与全角拉丁"
        },
        "facet": "typography",
        "description": {
          "en": "Japanese katakana — occasionally Chinese signage — placed as pure decoration, beside full-width spaced latin (ＡＥＳＴＨＥＴＩＣ). Meaning is optional; the exotic-mood texture is the point.",
          "zh": "日文片假名 —— 偶尔是中文招牌字 —— 纯当装饰摆放，旁边配全角空格拉丁（ＡＥＳＴＨＥＴＩＣ）。意思可有可无，异域氛围的质感才是重点。"
        }
      },
      {
        "id": "vhs-decay",
        "role": "defining",
        "name": {
          "en": "VHS decay",
          "zh": "VHS 磨损"
        },
        "facet": "surface",
        "description": {
          "en": "1px horizontal scanlines, chromatic aberration (RGB-split edges), tracking bands, tape noise, PLAY overlays and timestamps. Everything looks copied, worn, and re-recorded rather than rendered clean.",
          "zh": "1px 水平扫描线、色差（RGB 分色边缘）、磁迹跟踪纹、磁带噪点、PLAY 叠印和时间码。一切看起来都像被翻录、磨损、再录过，而不是干净渲染出来的。"
        }
      },
      {
        "id": "sunset-grid",
        "role": "supporting",
        "name": {
          "en": "Striped sun and grid floor",
          "zh": "条纹夕阳与网格地面"
        },
        "facet": "imagery",
        "description": {
          "en": "A striped or pixelated sun setting over a perspective grid plane, usually with palm silhouettes — borrowed from synthwave but washed out to pastel.",
          "zh": "条纹或像素化的太阳落在透视网格平面上，通常配棕榈树剪影 —— 借自 synthwave，但洗成了粉彩。"
        }
      },
      {
        "id": "glitch-motion",
        "role": "supporting",
        "name": {
          "en": "Glitch and drift",
          "zh": "故障与漂移"
        },
        "facet": "motion",
        "description": {
          "en": "Elements slice-shift, stutter, and RGB-split in short loops; motion feels like a damaged tape, never a smooth physics animation.",
          "zh": "元素短循环地切片错位、卡顿、RGB 分色；动效像一盘受损的磁带，绝不是顺滑的物理动画。"
        }
      },
      {
        "id": "chrome-futurism",
        "role": "avoid",
        "name": {
          "en": "Chrome-and-gel futurism",
          "zh": "铬与凝胶未来主义"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror chrome, gel gloss, lens flares, and iridescent blue-silver belong to Y2K's forward-looking sheen. Vaporwave surfaces stay matte, faded, and degraded — polish kills the nostalgia.",
          "zh": "镜面铬、凝胶高光、镜头光晕和幻彩蓝银属于 Y2K 向前看的光泽。蒸汽波的表面保持哑光、褪色、磨损 —— 抛光会杀死怀旧。"
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Vaporwave because it looks BACK: a 2010s remix of 80s/90s debris — pink-to-cyan gradient skies, marble busts, katakana, Windows 95 chrome, and VHS wear — nostalgia as collage, not millennium optimism.",
        "zh": "这是蒸汽波，因为它在回望：一套 2010 年代对 80/90 年代碎片的 remix —— 粉到青的渐变天空、大理石雕像、片假名、Windows 95 边框和 VHS 磨损 —— 是怀旧拼贴，不是千禧年的乐观。"
      },
      "wouldBecomeIf": {
        "en": "It would become Y2K if the gaze flipped forward: drop the busts, katakana, and tape decay, and re-render everything in mirror chrome, gel plastic, and iridescent blue-silver as if the future had just shipped.",
        "zh": "如果把视线调转向未来：拿掉雕像、片假名和磁带磨损，把一切都重新渲染成镜面铬、凝胶塑料和幻彩蓝银，仿佛未来刚刚到货 —— 就变成 Y2K 数字美学了。"
      }
    },
    "code": [
      {
        "title": "Sunset gradient under a scanline overlay",
        "language": "css",
        "code": "background: repeating-linear-gradient(0deg, rgba(0,0,0,.22) 0 1px, transparent 1px 3px), linear-gradient(180deg, #2d1b69 0%, #b967ff 40%, #ff71ce 68%, #01cdfe 100%);"
      },
      {
        "title": "Windows 95 raised bevel (buttons, panels, windows)",
        "language": "css",
        "code": "background: #c0c0c0; box-shadow: inset -1px -1px 0 #0a0a0a, inset 1px 1px 0 #fff, inset -2px -2px 0 #808080, inset 2px 2px 0 #dfdfdf;"
      },
      {
        "title": "Chromatic-aberration type",
        "language": "css",
        "code": "color: #fff; text-shadow: -2px 0 #ff71ce, 2px 0 #01cdfe;"
      }
    ],
    "brief": {
      "en": "Create the surface using Vaporwave. Defining signals: gradient sky running cyan #01cdfe at the horizon through pink #ff71ce and purple #b967ff into indigo #2d1b69; floating white Greek marble statuary; Windows 95 chrome — #c0c0c0 panels with hard 1–2px bevels (inset -1px -1px 0 #0a0a0a, inset 1px 1px 0 #fff), blue-gradient title bars, square corners, zero blur; decorative Japanese katakana plus full-width spaced latin (ＡＥＳＴＨＥＴＩＣ); VHS decay — 1px scanlines at ~20% black, chromatic aberration (text-shadow: -2px 0 #ff71ce, 2px 0 #01cdfe), glitch slice-shifts; a striped sun over a perspective grid floor with palm silhouettes. Keep the choice of consumer fragments (logos, mall imagery) flexible. Type: small plain system sans, black on the grey chrome, white with RGB split over the art. Do not drift into Y2K: the decisive difference is gaze direction — vaporwave looks BACK at the 80s/90s through worn tape, so no mirror chrome, gel gloss, or iridescent blue-silver. Hold text at 4.5:1 on solid plates (never over scanlines), glitch under 3 flashes/sec, and honor prefers-reduced-motion.",
      "zh": "用蒸汽波（Vaporwave）创建界面。定义性信号：渐变天空从地平线的青 #01cdfe 穿过粉 #ff71ce、紫 #b967ff 进入靛蓝 #2d1b69；漂浮的白色希腊大理石雕像；Windows 95 边框 —— #c0c0c0 面板配 1–2px 硬斜角（inset -1px -1px 0 #0a0a0a、inset 1px 1px 0 #fff）、蓝色渐变标题栏、直角、零模糊；装饰性日文片假名加全角空格拉丁（ＡＥＳＴＨＥＴＩＣ）；VHS 磨损 —— 约 20% 黑的 1px 扫描线、色差（text-shadow: -2px 0 #ff71ce, 2px 0 #01cdfe）、故障切片错位；条纹太阳落在透视网格地面上，配棕榈剪影。具体用哪些消费碎片（logo、商场意象）保持灵活。字体：小号朴素系统无衬线，灰色边框面上黑字，画面上白字带 RGB 分色。不要滑向 Y2K：决定性区别是视线的方向 —— 蒸汽波隔着磨损的磁带回望 80/90 年代，所以不要镜面铬、凝胶高光或幻彩蓝银。文字在实色底板上保持 4.5:1（绝不压在扫描线上），故障闪烁低于每秒 3 次，并响应 prefers-reduced-motion。"
    },
    "accessibility": {
      "en": "Pastel-on-pastel is the core failure: pink text over the cyan or purple gradient reads around 1.5–2:1. Put body text on the solid #c0c0c0 chrome (black ink, 15:1+) or on solid dark plates over the art, and treat gradient or chromatic type as decoration with a readable duplicate.\n\nGlitch strobes, slice-shifts, and RGB-split flicker can trigger photosensitive reactions — keep any flashing under 3 per second, disable slice-shifts and flicker under prefers-reduced-motion, and never gate content behind the effect.\n\nDecorative katakana and full-width latin are meaningless to many users and get spelled out character-by-character by screen readers — mark them aria-hidden. Scanline and noise overlays cut effective contrast for low-vision users, so keep those layers out of text.",
      "zh": "粉彩撞粉彩是核心翻车点：粉字压在青或紫渐变上，对比度大约只有 1.5–2:1。正文要放在实色 #c0c0c0 边框面上（黑字，15:1 以上）或画面上方的实色深底板；渐变字、色差字只当装饰，配一份可读的副本。\n\n故障频闪、切片错位和 RGB 分色抖动可能诱发光敏反应 —— 任何闪烁控制在每秒 3 次以内，prefers-reduced-motion 下关闭错位和闪烁，永远别把内容藏在这些效果后面。\n\n装饰性片假名和全角拉丁对很多用户没有意义，还会被读屏器逐字拼读 —— 给它们标 aria-hidden。扫描线和噪点叠加会拉低低视力用户的有效对比度；让这些图层避开文字。"
    },
    "origin": {
      "en": "Vaporwave began as a music microgenre around 2010–2011 in online communities — Bandcamp, Tumblr, and their forums — with Daniel Lopatin's Eccojams Vol. 1 (2010, released under the alias Chuck Person) and the Macintosh Plus album Floral Shoppe (2011, an alias of producer Vektroid) as founding documents; the Floral Shoppe cover — pink wash, marble bust, katakana — set the visual template. James Ferraro's Far Side Virtual (2011) supplied the corporate-utopia source material, and the name puns on 'vaporware'. The collage aesthetic peaked on Tumblr around 2012–2015.",
      "zh": "蒸汽波约 2010–2011 年起源于线上社区（Bandcamp、Tumblr 及其论坛）的音乐微流派，奠基作包括 Daniel Lopatin 以 Chuck Person 化名发行的《Eccojams Vol. 1》（2010）和 Macintosh Plus（制作人 Vektroid 的化名）的《Floral Shoppe》（2011）—— 后者的封面（粉色罩染、大理石雕像、片假名）定下了视觉模板。James Ferraro 的《Far Side Virtual》（2011）提供了企业乌托邦素材，名字本身是对「vaporware」的双关。这套拼贴美学 2012–2015 年前后在 Tumblr 上达到顶峰。"
    },
    "seeAlso": [
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/frutiger-aero",
        "name": "Frutiger Aero"
      },
      {
        "slug": "styles/pixel-art",
        "name": "Pixel Art"
      }
    ]
  },
  {
    "slug": "art-deco",
    "name": {
      "en": "Art Deco",
      "zh": "装饰艺术（Art Deco）"
    },
    "tagline": {
      "en": "Art Deco is the geometry of luxury: mirror symmetry, sunburst and fan motifs, stepped ziggurat silhouettes, and gold linework on lacquer black with jewel accents. Named after the 1925 Paris Exposition des arts décoratifs, it gave the Chrysler Building its crown and Gatsby its glow. Where Bauhaus stripped geometry to function, Deco piled it on — gilded all-caps lettering and ornament dense enough to feel machined. It faded with wartime austerity and revives whenever design wants opulence.",
      "zh": "装饰艺术是「奢华的几何」：镜像对称、太阳放射纹与扇形纹样、阶梯收分（ziggurat）轮廓，以及黑漆底色上的描金线条与宝石色点缀。风格因 1925 年巴黎装饰艺术博览会得名，克莱斯勒大厦的塔冠和盖茨比的流光都出自它。包豪斯把几何削到只剩功能，装饰艺术偏要往上堆 —— 描金的全大写题字、密到像机器刻出来的纹样。它随战时紧缩褪去，每当设计想要「奢」就会复兴。"
    },
    "scope": {
      "en": "Scope: This entry covers the ornamental 1920s–30s Deco look and its later revivals as a UI and branding style. Its chrome-and-speed-lines 1930s offshoot, Streamline Moderne, is a related but distinct flavor; the era's functional-geometry movement across the Atlantic is Bauhaus.",
      "zh": "范围：本条涵盖 1920–30 年代装饰性的 Deco 面貌及其后来的复兴，作为一种 UI 与品牌风格。它 1930 年代那个镀铬加速度线的分支叫 Streamline Moderne（流线型现代），相关但不同；同时代大西洋对岸的功能几何运动，见包豪斯。"
    },
    "aliases": {
      "en": [
        "great gatsby party invitation style",
        "black and gold fancy 1920s look",
        "gold lines and sun rays vintage luxury design",
        "roaring twenties geometric borders",
        "old hollywood glam wedding website style",
        "that chrysler building looking gold and black ui"
      ],
      "zh": [
        "了不起的盖茨比派对请柬风",
        "黑金配色的华丽 1920 年代感",
        "金线加太阳放射纹的复古奢华设计",
        "咆哮二十年代的几何边框",
        "老好莱坞华丽婚礼网站风",
        "长得像克莱斯勒大厦的那种黑金 UI"
      ]
    },
    "signals": [
      {
        "id": "mirror-symmetry",
        "role": "defining",
        "name": {
          "en": "Mirror symmetry",
          "zh": "镜像对称"
        },
        "facet": "layout",
        "description": {
          "en": "Everything hangs on one vertical center axis: ornaments, frames and type blocks mirror exactly left-to-right, often in nested symmetrical tiers. An off-center layout instantly stops reading as Deco.",
          "zh": "所有元素都挂在一根垂直中轴线上：纹样、边框和文字块左右精确镜像，常套着层层对称的嵌套结构。构图一旦偏心，立刻就不像装饰艺术了。"
        }
      },
      {
        "id": "sunburst-fan",
        "role": "defining",
        "name": {
          "en": "Sunburst and fan motifs",
          "zh": "太阳放射纹与扇形纹样"
        },
        "facet": "imagery",
        "description": {
          "en": "Rays radiating from a single point (sunburst), scalloped fan shells, chevrons and zigzag bands — the canonical ornament kit, drawn as thin gold strokes 1–2px wide.",
          "zh": "从同一个点向外辐射的光芒线（太阳纹）、贝壳扇面、人字折线与锯齿带 —— 装饰艺术的标准纹样库，一律用 1–2px 的细金线绘制。"
        }
      },
      {
        "id": "stepped-forms",
        "role": "defining",
        "name": {
          "en": "Stepped ziggurat forms",
          "zh": "阶梯收分轮廓"
        },
        "facet": "geometry",
        "description": {
          "en": "Silhouettes recede in symmetric stair-steps — three to five shrinking tiers like the Chrysler Building crown — used for frame corners, badges and panel tops.",
          "zh": "轮廓以对称的台阶逐级收分 —— 三到五层递减，像克莱斯勒大厦的塔冠 —— 用在边框转角、徽章和面板顶部。"
        }
      },
      {
        "id": "gold-black-jewel",
        "role": "defining",
        "name": {
          "en": "Gold on black, jewel accents",
          "zh": "黑底描金配宝石色"
        },
        "facet": "color",
        "description": {
          "en": "Metallic gold linework (#c9a227, highlights #f0dc9a) on near-black lacquer (#0b0b0e), accented with deep emerald, sapphire or ruby; pastels or flat primaries break the spell.",
          "zh": "金属金线条（#c9a227，高光 #f0dc9a）压在近黑漆色（#0b0b0e）上，点缀深翡翠绿、宝蓝或酒红；马卡龙色或扁平原色一出现，味道就破了。"
        }
      },
      {
        "id": "gilded-caps",
        "role": "defining",
        "name": {
          "en": "Gilded all-caps lettering",
          "zh": "描金全大写题字"
        },
        "facet": "typography",
        "description": {
          "en": "Headings set in ALL CAPS geometric or high-contrast display faces with letter-spacing 0.15–0.35em, rendered in gold — reading like inscriptions over a hotel entrance.",
          "zh": "标题用几何体或高对比展示字体的全大写，letter-spacing 0.15–0.35em，渲染成金色 —— 读起来像酒店大门上方的铭文。"
        }
      },
      {
        "id": "double-rules",
        "role": "supporting",
        "name": {
          "en": "Hairline double rules",
          "zh": "细密双线框"
        },
        "facet": "surface",
        "description": {
          "en": "Borders are paired strokes — a 2px gold line with a 1px inner hairline 4–6px inside it, mimicking engraved gilt frames. A single thick black border reads as neobrutalism, not Deco.",
          "zh": "边框是成对的线条 —— 2px 金线，向内 4–6px 再压一道 1px 细线，模仿刻金画框。单条粗黑边读起来是新粗野主义，不是装饰艺术。"
        }
      },
      {
        "id": "metal-choice",
        "role": "variable",
        "name": {
          "en": "Gold, chrome or copper",
          "zh": "金色、铬色还是铜色"
        },
        "facet": "color",
        "description": {
          "en": "Yellow gold is the default, but chrome-silver (the Streamline Moderne branch) and copper read equally Deco; what matters is metallic contrast on a dark ground, not the hue.",
          "zh": "黄金色是默认，但铬银（Streamline Moderne 一支）和红铜同样成立；关键是金属压深底的对比，不是具体色相。"
        }
      },
      {
        "id": "primary-blocks",
        "role": "avoid",
        "name": {
          "en": "Flat primary-color blocks",
          "zh": "扁平原色块"
        },
        "facet": "color",
        "description": {
          "en": "Flat red/yellow/blue blocks on white with asymmetric grids and bare grotesk type belong to Bauhaus and De Stijl — ornament-free primaries are a different movement that happens to share the decade.",
          "zh": "白底上扁平的红黄蓝色块、不对称网格和素面 grotesk 字体属于包豪斯与风格派 —— 零装饰的原色是恰好同年代的另一场运动。"
        }
      }
    ],
    "confusedWith": {
      "slug": "bauhaus",
      "name": "Bauhaus",
      "because": {
        "en": "This is Art Deco because the geometry is ornamental luxury: mirror symmetry, gilded linework, sunburst and fan motifs, jewel tones on black — the decoration itself is the point, not a byproduct.",
        "zh": "这是装饰艺术，因为这里的几何是装饰性的奢华：镜像对称、描金线条、太阳纹与扇形纹样、黑底宝石色 —— 装饰本身就是目的，不是副产品。"
      },
      "wouldBecomeIf": {
        "en": "It would become Bauhaus if the ornament were stripped away and the symmetry broken — asymmetric grid, flat primary-color blocks, unadorned grotesk type, and not a gram of gold left.",
        "zh": "如果把装饰剥光、打破对称 —— 不对称网格、扁平原色块、无饰 grotesk 字体，一克金都不剩 —— 就变成包豪斯了。"
      }
    },
    "code": [
      {
        "title": "Double-rule gilded frame (2px line + inner hairline)",
        "language": "css",
        "code": "border: 2px solid #c9a227;\nbox-shadow: inset 0 0 0 5px #0b0b0e, inset 0 0 0 6px #c9a227; /* black gap, then the hairline */"
      },
      {
        "title": "Sunburst fan — rays radiating from bottom-center",
        "language": "css",
        "code": "background: repeating-conic-gradient(from -90deg at 50% 100%, rgba(201,162,39,.9) 0deg 2deg, transparent 2deg 11deg);"
      },
      {
        "title": "Gilded all-caps display type as utilities",
        "language": "tailwind",
        "code": "uppercase tracking-[0.28em] font-bold bg-gradient-to-b from-[#f0dc9a] via-[#c9a227] to-[#9c7f22] bg-clip-text text-transparent"
      }
    ],
    "brief": {
      "en": "Build the surface as 1920s–30s Art Deco. Ground: near-black lacquer #0b0b0e; optional deep emerald panel #0f3d2e. Metal: gold linework — stops #f0dc9a/#c9a227/#9c7f22 (highlight/base/shade) as vertical gradients on strokes and display text (background-clip: text). Composition: strict mirror symmetry on one vertical axis; hero centered. Typography: ALL CAPS display face (Cinzel, Poiret One or Didot; fallback Georgia), letter-spacing 0.2–0.35em, headings in gradient gold; body small, sentence case, ivory #efe9dc. Ornament kit: sunburst fan — repeating-conic-gradient, ~2deg gold rays on 11deg spacing from bottom-center; stepped ziggurat corners on frames/badges; paired border rules: 2px gold stroke plus 1px inner hairline 4–6px inside (box-shadow: inset 0 0 0 5px #0b0b0e, inset 0 0 0 6px #c9a227). Cut button corners into octagons (clip-path). Depth comes from metal and line, never blurred drop shadows. Motion: almost none — one fade, or rays turning over 40s at most. Avoid: primary-color blocks, asymmetry, bubble radii, soft shadows, caps body text — that way lies Bauhaus or kitsch.",
      "zh": "把界面搭成 1920–30 年代的装饰艺术（Art Deco）。底色：近黑漆色 #0b0b0e；可选深翡翠绿面板 #0f3d2e。金属：描金线条 —— 色端 #f0dc9a/#c9a227/#9c7f22（高光/基色/暗部），以垂直渐变用在描边和展示文字上（background-clip: text）。构图：围绕一根垂直中轴线严格镜像对称，主视觉居中。字体：全大写展示字体（Cinzel、Poiret One 或 Didot；兜底 Georgia），letter-spacing 0.2–0.35em，标题用渐变金；正文小字号、句子式大小写、象牙白 #efe9dc。纹样库：太阳放射扇面 —— repeating-conic-gradient，约 2deg 金光芒、11deg 间隔、从底部中点辐射；边框和徽章转角用阶梯收分；成对边框线：2px 金描边，向内 4–6px 再压 1px 细线（box-shadow: inset 0 0 0 5px #0b0b0e, inset 0 0 0 6px #c9a227）。按钮用 clip-path 切成八边形。纵深感来自金属和线条，绝不用模糊投影。动效：能省则省 —— 一次淡入，或光芒 40s 转一圈封顶。避免：原色块、不对称、泡泡圆角、柔和阴影、小号全大写正文 —— 那样只会滑向包豪斯或廉价俗套。"
    },
    "accessibility": {
      "en": "Gradient gold text fails silently: on #0b0b0e the base gold #c9a227 measures about 8.1:1, but a dark stop like #8a6d1d drops to 4.0:1 — keep every gradient stop at #9c7f22 (5.1:1) or lighter, or set the text in solid #c9a227.\n\nALL CAPS with 0.2em+ tracking is measurably slower to read and harder for dyslexic and low-vision users — reserve it for headings and short labels, and set body copy in sentence case with normal spacing. Dense ray and zigzag patterns cause visual vibration; keep ornament out of text zones and mark decorative layers aria-hidden.\n\nRotating sunbursts and shimmer must stop under prefers-reduced-motion. Gradient text made with background-clip disappears entirely in Windows forced-colors mode — add a @media (forced-colors: active) fallback that resets it to solid CanvasText with background: none.",
      "zh": "渐变金字会悄悄失守：在 #0b0b0e 上，基色金 #c9a227 实测约 8.1:1，但 #8a6d1d 这样的暗色端会掉到 4.0:1 —— 渐变每个色端都保持 #9c7f22（5.1:1）或更亮，或者文字直接用纯色 #c9a227。\n\n全大写加 0.2em 以上的字距会实测拖慢阅读，对阅读障碍和低视力用户更不友好 —— 只留给标题和短标签，正文用句子式大小写和正常字距。密集的光芒和锯齿纹样会造成视觉颤动；把装饰挡在文字区之外，装饰层标 aria-hidden。\n\n旋转的太阳纹和流光必须在 prefers-reduced-motion 下停止。用 background-clip 做的渐变文字在 Windows forced-colors 模式下会整个消失 —— 加一条 @media (forced-colors: active) 兜底，重置为纯色 CanvasText 并 background: none。"
    },
    "origin": {
      "en": "Named after the Exposition internationale des arts décoratifs et industriels modernes held in Paris in 1925 — though the label only stuck after Bevis Hillier's 1968 book 'Art Deco of the 20s and 30s'. The look had crystallized in 1910s–20s France around designers such as furniture maker Émile-Jacques Ruhlmann, absorbing Cubist geometry and, after Tutankhamun's tomb was opened in 1922, Egyptian sunburst and stepped forms. In America it became the architecture of ambition: William Van Alen's Chrysler Building (1930) crowned New York with a stainless-steel sunburst, followed by the Empire State Building (1931). Depression-era and wartime austerity ended the party, and Baz Luhrmann's 2013 film 'The Great Gatsby' later gave the black-and-gold revival its pop-culture template.",
      "zh": "名字来自 1925 年在巴黎举办的国际装饰艺术与现代工业博览会（Exposition internationale des arts décoratifs et industriels modernes）—— 但这个称呼要到 Bevis Hillier 1968 年的著作《Art Deco of the 20s and 30s》才真正流行开来。这种面貌在 1910–20 年代的法国已经成形，以家具设计师 Émile-Jacques Ruhlmann 等人为代表，吸收了立体派几何；1922 年图坦卡蒙墓开启后，又融入埃及风格的太阳纹与阶梯造型。到了美国，它成了野心勃勃的建筑语言：William Van Alen 设计的克莱斯勒大厦（1930）用不锈钢太阳纹塔冠加冕纽约，帝国大厦（1931）紧随其后。大萧条与战时紧缩终结了这场盛宴；Baz Luhrmann 2013 年的电影《了不起的盖茨比》则为后来的黑金复兴提供了流行文化模板。"
    },
    "seeAlso": [
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      },
      {
        "slug": "styles/swiss-style",
        "name": "Swiss Style"
      },
      {
        "slug": "styles/skeuomorphism",
        "name": "Skeuomorphism"
      },
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      }
    ]
  },
  {
    "slug": "cyberpunk",
    "name": {
      "en": "Cyberpunk",
      "zh": "赛博朋克（Cyberpunk）"
    },
    "tagline": {
      "en": "Cyberpunk is the visual language of 'high tech, low life': near-black interfaces lit by neon magenta, cyan, and electric yellow, like signage over a rain-soaked street. Luminous hairline borders, bloom halos, scanlines, and glitch tears turn panels into hacked terminals, while monospace type and HUD brackets supply the instrumentation. Born in 1980s science fiction and pushed into UI by films and games like Cyberpunk 2077, it treats darkness as the canvas — every accent must earn its glow.",
      "zh": "赛博朋克是「高科技，低生活」（high tech, low life）的视觉语言：近黑的界面被霓虹品红、青、电黄点亮，像雨夜街道上方层层叠叠的招牌。发光的细描边、辉光、扫描线和故障撕裂把面板变成被黑的终端，等宽字体和 HUD 括线则提供仪器感。它诞生于 1980 年代科幻文学，经由《银翼杀手》式的电影和《赛博朋克 2077》这类游戏进入 UI——它把黑暗当作画布，每一笔亮色都得挣得自己的光。"
    },
    "scope": {
      "en": "Scope: The screen-interface expression of the genre — dark HUDs, terminals, neon signage, glitch artifacts — not its literary themes, and not simply 'dark mode with purple'. Bright pastel retro-futurism (synthwave sunsets, VHS nostalgia) belongs to the vaporwave family, not to this entry.",
      "zh": "范围：这个类型在屏幕界面上的表达——深色 HUD、终端、霓虹招牌、故障伪影——不包括它的文学主题，也不是「深色模式加点紫」那么简单。明亮粉彩的复古未来主义（合成波落日、VHS 怀旧）属于蒸汽波家族，不在本条。"
    },
    "aliases": {
      "en": [
        "black interface with glowing neon pink and blue edges",
        "blade runner style computer screens",
        "that hacker hud with scanlines and glitchy text",
        "cyberpunk 2077 menu style",
        "dark futuristic ui that looks like a rainy tokyo street at night",
        "terminal looking interface with neon glow and japanese signs"
      ],
      "zh": [
        "黑底界面，边缘是发光的霓虹粉和蓝",
        "《银翼杀手》里那种电脑屏幕",
        "带扫描线和故障文字的黑客 HUD",
        "《赛博朋克 2077》菜单那种风格",
        "像雨夜东京街道一样的深色未来感 UI",
        "终端样子的界面，带霓虹辉光和日文招牌"
      ]
    },
    "signals": [
      {
        "id": "neon-on-black",
        "role": "defining",
        "name": {
          "en": "Neon on a near-black canvas",
          "zh": "近黑画布上的霓虹"
        },
        "facet": "color",
        "description": {
          "en": "Backgrounds live at #05070f–#0a0e17; magenta #ff2a6d, cyan #05d9e8, and electric yellow #f9f002 sit on top at full glow. A light background disqualifies the style on sight.",
          "zh": "背景活在 #05070f–#0a0e17 区间；品红 #ff2a6d、青 #05d9e8、电黄 #f9f002 以全发光强度压在上面。浅色背景一眼就能判它出局。"
        }
      },
      {
        "id": "luminous-strokes",
        "role": "defining",
        "name": {
          "en": "Glowing hairline borders",
          "zh": "发光的细描边"
        },
        "facet": "surface",
        "description": {
          "en": "Panels and buttons wear 1px bright strokes with matching bloom — box-shadow: 0 0 8px plus 0 0 24px in the border color — so every edge reads as neon tubing or a hologram seam.",
          "zh": "面板和按钮套着 1px 亮色描边，配同色的辉光——box-shadow: 0 0 8px 加 0 0 24px 的描边色——每条边都像霓虹灯管或全息投影的接缝。"
        }
      },
      {
        "id": "hud-instrumentation",
        "role": "defining",
        "name": {
          "en": "HUD instrumentation",
          "zh": "HUD 仪表装饰"
        },
        "facet": "layout",
        "description": {
          "en": "Corner brackets, tick marks, crosshair rules, and tiny numeric readouts frame content like a cockpit overlay; corners are sharp or chamfered with clip-path cuts, never bubbly.",
          "zh": "边角括线、刻度、十字准线和小号数字读数把内容框成驾驶舱 overlay；直角或用 clip-path 切出的斜角，绝不圆润。"
        }
      },
      {
        "id": "terminal-type",
        "role": "defining",
        "name": {
          "en": "Monospace terminal type",
          "zh": "等宽终端字体"
        },
        "facet": "typography",
        "description": {
          "en": "UI text is set in monospace or squared techno faces, often uppercase at 10–12px with .1–.2em letter-spacing, decorated with > _ :: // glyphs — the console is the voice of the interface.",
          "zh": "界面文字用等宽或方正的科技字体，常常是 10–12px 的大写字母加 .1–.2em 字距，再点缀 > _ :: // 这类符号——控制台就是这个界面的嗓音。"
        }
      },
      {
        "id": "glitch-scanlines",
        "role": "supporting",
        "name": {
          "en": "Glitch and scanline artifacts",
          "zh": "故障与扫描线伪影"
        },
        "facet": "motion",
        "description": {
          "en": "RGB-split text shadows (magenta/cyan offsets), occasional slice-and-skew jitters, and a repeating 1px scanline overlay simulate a damaged feed — short bursts of seasoning, not constant noise.",
          "zh": "RGB 分离的文字阴影（品红/青错位）、偶尔切条加倾斜的抖动，以及 1px 重复扫描线覆盖层，模拟一路受损的信号——短促的调味，不是持续的噪音。"
        }
      },
      {
        "id": "cjk-neon-signage",
        "role": "supporting",
        "name": {
          "en": "CJK neon signage",
          "zh": "中日文霓虹招牌"
        },
        "facet": "imagery",
        "description": {
          "en": "Vertical Japanese kana or Chinese characters glowing as sign tubes quote the Tokyo/Hong Kong streetscape the genre's films were built from.",
          "zh": "竖排的日文假名或汉字做成发光的灯管招牌，致敬这个类型的电影赖以成型的东京/香港街景。"
        }
      },
      {
        "id": "hazard-corporate",
        "role": "variable",
        "name": {
          "en": "Hazard stripes and corporate chrome",
          "zh": "警示条纹与企业涂装"
        },
        "facet": "imagery",
        "description": {
          "en": "Yellow-black diagonal warning bands, mega-corp logos, and barcode livery mark the world as dangerous and owned; density runs from a single striped edge to full industrial cladding.",
          "zh": "黄黑斜纹警示带、巨型企业 logo、条码涂装，宣告这个世界既危险又已被瓜分；用量从一条镶边到全副工业装甲不等。"
        }
      },
      {
        "id": "bright-pastel-nostalgia",
        "role": "avoid",
        "name": {
          "en": "Bright pastel nostalgia",
          "zh": "明亮粉彩的怀旧"
        },
        "facet": "color",
        "description": {
          "en": "Light grounds, soft pink/lavender palettes, marble busts, and VHS timestamps are vaporwave's retro consumerism — warmth and daylight are the giveaway that this isn't cyberpunk.",
          "zh": "浅色底、柔粉/淡紫配色、大理石雕像和 VHS 时间戳是蒸汽波的复古消费主义——温暖和日光就是「这不是赛博朋克」的破绽。"
        }
      }
    ],
    "confusedWith": {
      "slug": "vaporwave",
      "name": "Vaporwave",
      "because": {
        "en": "This is Cyberpunk because the canvas is near-black and the light comes from neon — saturated magenta/cyan glow on a dark, high-contrast future city, framed by HUD furniture and monospace data. The mood is dystopian and forward-looking; the glitch reads as a hacked signal, not a worn tape.",
        "zh": "这是赛博朋克，因为画布是近黑的，光全部来自霓虹——饱和的品红/青辉光打在黑暗、高对比的未来都市上，四周是 HUD 装饰件和等宽数据。气质是反乌托邦、朝未来看的；这里的故障读作被黑的信号，不是磨损的磁带。"
      },
      "wouldBecomeIf": {
        "en": "It would become vaporwave if someone turned the lights on and the calendar back — bright pastel pink and teal on light grounds, 80s–90s consumer nostalgia (Greek busts, VHS date stamps, early-Windows chrome), dreamy irony instead of dystopia. Both share glitch effects, but vaporwave's is VHS decay in daylight while cyberpunk's is signal interference in the dark.",
        "zh": "如果有人把灯打开、把日历拨回去——明亮粉彩的粉和青铺在浅色底上，80–90 年代的消费怀旧（希腊石膏像、VHS 日期戳、早期 Windows 视窗件），梦幻的反讽取代反乌托邦——它就变成蒸汽波了。两者都用故障效果，但蒸汽波的是日光下的 VHS 老化，赛博朋克的是黑夜里的信号干扰。"
      }
    },
    "code": [
      {
        "title": "Neon HUD panel",
        "language": "css",
        "code": "background: #0a0e17; border: 1px solid #05d9e8; border-radius: 2px; box-shadow: 0 0 8px rgba(5,217,232,.55), 0 0 24px rgba(5,217,232,.22), inset 0 0 12px rgba(5,217,232,.12); color: #d1f7ff; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;"
      },
      {
        "title": "Glitch headline — RGB split with intermittent jitter",
        "language": "css",
        "code": ".glitch { color: #f9f002; text-shadow: -2px 0 #ff2a6d, 2px 0 #05d9e8; animation: glitch 3s infinite steps(1); } @keyframes glitch { 0%, 90%, 100% { transform: none; } 92% { transform: translateX(-2px) skewX(-8deg); } 94% { transform: translateX(2px); } 96% { transform: translateX(-1px); } }"
      },
      {
        "title": "Scanline overlay + hazard stripes",
        "language": "css",
        "code": ".scanlines { background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px); } .hazard { background: repeating-linear-gradient(45deg, #f9f002 0 12px, #0a0a0a 12px 24px); }"
      }
    ],
    "brief": {
      "en": "Build a cyberpunk HUD. Canvas: near-black with a blue cast — page #05070f, panels #0a0e17. Signal colors: magenta #ff2a6d and cyan #05d9e8; yellow #f9f002 for warnings/primary actions only. Text: off-white #d1f7ff, secondary #7f9bb3, monospace (ui-monospace / JetBrains Mono); micro-labels uppercase at 10–11px, letter-spacing .15em, prefixed with >_ or //. Every panel and button wears a 1px neon border with bloom — box-shadow: 0 0 8px rgba(5,217,232,.5), 0 0 24px rgba(5,217,232,.2), inset 0 0 12px rgba(5,217,232,.12) — corners sharp (2px) or 8–12px clip-path chamfers. Add HUD furniture: corner brackets, tick marks, tiny numeric readouts. Season with glitch: RGB-split headings (text-shadow: -2px 0 #ff2a6d, 2px 0 #05d9e8), rare 100–200ms skew/translate stutters, plus scanlines (1px rgba(255,255,255,.05) every 3px). Hazard stripes (45deg #f9f002/#0a0a0a, 12px steps) for danger zones only; CJK neon signage optional. Avoid light backgrounds, pastels, soft white shadows, bubbly radii, and VHS nostalgia — that's vaporwave. Keep motion intermittent: a hacked signal stutters, never floats.",
      "zh": "搭一个赛博朋克 HUD。画布：带蓝调的近黑——页面 #05070f，面板 #0a0e17。信号色：品红 #ff2a6d 和青 #05d9e8；黄 #f9f002 只给警告和主操作。文字：米白 #d1f7ff，次要 #7f9bb3，全部等宽（ui-monospace / JetBrains Mono）；小标签 10–11px 大写、letter-spacing .15em，前面加 >_ 或 //。每个面板和按钮套 1px 霓虹描边带辉光——box-shadow: 0 0 8px rgba(5,217,232,.5)、0 0 24px rgba(5,217,232,.2)、inset 0 0 12px rgba(5,217,232,.12)——圆角要锐利（2px）或用 clip-path 切 8–12px 斜角。加 HUD 装饰件：边角括线、刻度、小号数字读数。用故障做调味：标题 RGB 分离（text-shadow: -2px 0 #ff2a6d, 2px 0 #05d9e8），偶发 100–200ms 的 skew/translate 顿挫，再加扫描线（每 3px 一条 1px rgba(255,255,255,.05)）。警示条纹（45deg #f9f002/#0a0a0a，12px 步进）只给危险区；中日文霓虹招牌可选。避免浅色背景、粉彩、柔和白阴影、圆润大圆角和 VHS 怀旧——那是蒸汽波。动效保持间歇：被黑的信号是顿挫，绝不漂浮。"
    },
    "accessibility": {
      "en": "Neon on dark is not automatically high-contrast: cyan #05d9e8 on #0a0e17 clears 4.5:1 comfortably, but magenta #ff2a6d at small sizes and yellow #f9f002 against glow halos can fall short — measure body text against the real background, keep glow out of the contrast equation, and never set long copy in the dimmest accent.\n\nGlitch flicker, RGB-split flashes, and sweeping scanlines are exactly the motion that bothers vestibular and photosensitive users: keep flashes under 3 per second, make glitches rare and short, and honor prefers-reduced-motion by freezing jitter, blink, and rain effects entirely.\n\nHUD decoration is cognitive noise: brackets, tickers, and blinking readouts compete with content, and uppercase wide-tracked monospace reads slowly at length. Mark decorative readouts aria-hidden, keep body copy in a comfortable size and face, and give focus a visible state that is more than a glow-color change (an offset outline in a reserved color works).",
      "zh": "深色底上的霓虹不天然等于高对比：青 #05d9e8 配 #0a0e17 轻松过 4.5:1，但小字号的品红 #ff2a6d、以及被辉光光晕包围的电黄 #f9f002 可能不达标——对着真实背景实测正文，别把辉光算进对比度，长文更别用最暗的那种强调色。\n\n故障闪烁、RGB 分离的闪动和扫过的扫描线，正是会让前庭敏感和光敏用户不适的动效：闪烁压在每秒 3 次以下，故障要稀有且短促，并响应 prefers-reduced-motion，把抖动、眨眼、雨效全部冻结。\n\nHUD 装饰是认知噪音：括线、滚动条、闪烁读数都在和内容抢注意力，大写宽字距的等宽字体长读也慢。装饰性读数标 aria-hidden，正文保持舒适的字号和字体，焦点状态要可见且不只是换个辉光颜色（用专属颜色的偏移 outline 就不错）。"
    },
    "origin": {
      "en": "The genre was named by Bruce Bethke's 1983 short story 'Cyberpunk' and defined as literature by William Gibson's 1984 novel Neuromancer, but its visual language was set by film: Ridley Scott's Blade Runner (1982) fused the neon signage of Asian megacities with rain, smog, and towering video billboards into the 'high tech, low life' metropolis, and Katsuhiro Otomo's Akira (1988) added Neo-Tokyo's holographic advertising. The look became an actual interface kit through 1990s sci-fi screen graphics and, most decisively, CD Projekt Red's Cyberpunk 2077 (2020), whose glitching yellow-and-black HUD turned cyberpunk into a literal UI style.",
      "zh": "这个类型的名字来自 Bruce Bethke 1983 年的短篇小说《Cyberpunk》，文学上由 William Gibson 1984 年的小说《神经漫游者》（Neuromancer）定型，但它的视觉语言是电影定下的：Ridley Scott 的《银翼杀手》（Blade Runner，1982）把亚洲大都市的霓虹招牌与雨、烟雾、高耸的视频广告熔成「高科技，低生活」的都会，大友克洋的《阿基拉》（Akira，1988）又添上新东京的全息广告。这套语言经由 1990 年代科幻片屏幕图形、以及最关键的 CD Projekt Red《赛博朋克 2077》（2020）变成了真正的界面工具包——那套故障抖动的黄黑 HUD 让赛博朋克成了一种字面意义上的 UI 风格。"
    },
    "seeAlso": [
      {
        "slug": "styles/vaporwave",
        "name": "Vaporwave"
      },
      {
        "slug": "styles/terminal-hacker",
        "name": "Terminal Hacker"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K"
      },
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      }
    ]
  },
  {
    "slug": "pixel-art",
    "name": {
      "en": "Pixel Art",
      "zh": "像素艺术（Pixel Art）"
    },
    "tagline": {
      "en": "Pixel Art is a graphic language born from hardware limits: on the 8- and 16-bit consoles and arcade boards of the 1980s–90s, artists drew with visible square pixels and tiny indexed palettes, placing every sprite, glyph, and health bar pixel by pixel. What began as a constraint is now a deliberate retro aesthetic — crisp stair-stepped edges with no anti-aliasing, limited color ramps, dithered shading, chunky bitmap type, and frame-by-frame animation chosen for charm, not necessity.",
      "zh": "像素艺术是一套诞生于硬件限制的图形语言：在 20 世纪 80–90 年代的 8/16 位游戏机和街机基板上，美术师用可见的方形像素和极小的索引色板作画，每一个精灵、每一个字形、每一根血条都逐像素摆放。曾经的限制如今成了刻意的复古美学 —— 无抗锯齿的阶梯状边缘、有限的渐变色阶、抖动（dithering）着色、粗粝的位图字体、逐帧小动画，为的是游戏时代的魅力，而不是迫不得已。"
    },
    "scope": {
      "en": "Scope: Covers the deliberate retro game-art style applied to UI and illustration — the craft of placing individual pixels. It is not the 90s amateur-homepage look (that's Vernacular Web), and merely low-resolution or blurry images are not pixel art: without deliberate pixel-level construction and a limited palette, it's just a small picture.",
      "zh": "范围：本条涵盖应用在 UI 和插画上的刻意复古游戏美术 —— 逐像素摆放这门手艺。它不是 90 年代业余主页的样子（那是民间网页）；单纯的低分辨率或模糊图片也不算像素艺术：没有刻意的像素级构造和有限色板，那只是一张小图。"
    },
    "aliases": {
      "en": [
        "the retro video game look with visible square pixels",
        "8-bit style ui like an old nintendo game",
        "websites that look like a super nintendo menu screen",
        "chunky pixelated graphics done on purpose",
        "the indie game title screen aesthetic",
        "health bars and dialog boxes like an old rpg"
      ],
      "zh": [
        "看得见方形像素的复古游戏风",
        "像老任天堂游戏那种 8-bit 界面",
        "看起来像超任菜单画面的网站",
        "故意做成大块像素感的图形",
        "独立游戏标题画面那种美学",
        "像老式 RPG 的血条和对话框"
      ]
    },
    "signals": [
      {
        "id": "visible-pixels",
        "role": "defining",
        "name": {
          "en": "Visible square pixels",
          "zh": "可见的方形像素"
        },
        "facet": "geometry",
        "description": {
          "en": "Artwork is built from visible, uniform square pixels — edges stair-step in fixed increments with no anti-aliasing; no amount of zoom ever reveals a smooth curve.",
          "zh": "画面由可见的、大小一致的方形像素搭成 —— 边缘按固定步进呈阶梯状，无抗锯齿；无论放大多少倍，都找不到一条平滑曲线。"
        }
      },
      {
        "id": "limited-palette",
        "role": "defining",
        "name": {
          "en": "Small fixed palette",
          "zh": "小小的固定色板"
        },
        "facet": "color",
        "description": {
          "en": "A piece commits to a handful of indexed colors — 8, 16, or 32 — with hue-shifted ramps for shading; gradients are faked with dot patterns, never blended.",
          "zh": "一件作品只承诺用一撮索引色 —— 8、16 或 32 色 —— 靠色相偏移的色阶做明暗；渐变用点阵图案假装，绝不混色。"
        }
      },
      {
        "id": "pixelated-scaling",
        "role": "defining",
        "name": {
          "en": "Nearest-neighbor scaling",
          "zh": "最近邻缩放"
        },
        "facet": "imagery",
        "description": {
          "en": "Sprites and bitmaps scale with hard edges — image-rendering: pixelated, canvas imageSmoothing off; a single smoothed edge breaks the illusion instantly.",
          "zh": "精灵和位图缩放时保持硬边 —— image-rendering: pixelated、canvas 关掉 imageSmoothing；只要一条边缘被平滑，幻术立刻戳破。"
        }
      },
      {
        "id": "bitmap-type",
        "role": "defining",
        "name": {
          "en": "Chunky bitmap type",
          "zh": "粗粝位图字体"
        },
        "facet": "typography",
        "description": {
          "en": "Headings and HUD text use pixel fonts or blocky uppercase with a hard 1–2px offset shadow — every glyph visibly assembled from squares, zero blur anywhere.",
          "zh": "标题和 HUD 文字用像素字体，或带 1–2px 硬偏移阴影的块状大写字母 —— 每个字形都看得出是方块拼的，全程零模糊。"
        }
      },
      {
        "id": "game-chrome",
        "role": "defining",
        "name": {
          "en": "Game UI chrome",
          "zh": "游戏 UI 铬件"
        },
        "facet": "imagery",
        "description": {
          "en": "Controls are game controls: segmented HP/MP bars, RPG dialog boxes with stepped borders, blinking PRESS-START prompts, 8-bit icons like hearts, coins, and stars.",
          "zh": "控件就是游戏控件：分段的 HP/MP 血条、带阶梯边框的 RPG 对话框、闪烁的 PRESS START 提示、爱心金币星星这类 8-bit 图标。"
        }
      },
      {
        "id": "stepped-animation",
        "role": "supporting",
        "name": {
          "en": "Frame-by-frame motion",
          "zh": "逐帧运动"
        },
        "facet": "motion",
        "description": {
          "en": "Animation advances in discrete frames — steps() easing, sprites flipping between two poses, 1–2 frame blinks; nothing tweens smoothly.",
          "zh": "动画按离散的帧推进 —— steps() 缓动、精灵在两个姿态间切换、1–2 帧的闪烁；没有任何平滑补间。"
        }
      },
      {
        "id": "dithered-shading",
        "role": "supporting",
        "name": {
          "en": "Dithered shading",
          "zh": "抖动着色"
        },
        "facet": "surface",
        "description": {
          "en": "Checkerboard and ordered-noise dot patterns simulate gradients and shadow inside the fixed palette — a texture born directly of the color limit.",
          "zh": "棋盘格和有序噪点图案在固定色板内模拟渐变与阴影 —— 一种被颜色数量直接逼出来的纹理。"
        }
      },
      {
        "id": "smooth-rendering",
        "role": "avoid",
        "name": {
          "en": "Smooth rendering",
          "zh": "平滑渲染"
        },
        "facet": "surface",
        "description": {
          "en": "Anti-aliased curves, soft shadows, true gradients, or high-color photos dissolve the style — one blurred edge and it reads as a low-res image, not pixel art.",
          "zh": "抗锯齿曲线、柔和阴影、真渐变或高彩色照片会立刻瓦解这个风格 —— 一条边缘糊掉，它就读作低分辨率图片，而不是像素艺术。"
        }
      }
    ],
    "confusedWith": {
      "slug": "vernacular-web",
      "name": "Vernacular Web",
      "because": {
        "en": "This is Pixel Art because the retro look is constructed with pixel precision — a limited fixed palette, stair-stepped un-antialiased edges, bitmap type, and game controls like HP bars and dialog boxes; it is deliberate game art, not default browser output.",
        "zh": "这是像素艺术，因为它的复古外观是以像素级精度构造出来的 —— 有限的固定色板、无抗锯齿的阶梯边缘、位图字体、血条和对话框这类游戏控件；它是刻意的游戏美术，不是浏览器的默认输出。"
      },
      "wouldBecomeIf": {
        "en": "It would become the Vernacular Web if the pixel craft were dropped in favor of whatever the browser and a GIF collection gave you — default blue links, Times text, tiled wallpaper, a visitor counter — a page decorated by an amateur rather than drawn by an artist.",
        "zh": "如果丢掉像素手艺，浏览器和 GIF 素材库给什么就用什么 —— 默认蓝链接、Times 字体、平铺壁纸、访客计数器 —— 变成业余爱好者装饰出来的页面，而不是美术师画出来的页面，就变成民间网页了。"
      }
    },
    "code": [
      {
        "title": "Nearest-neighbor scaling — the one-line make-or-break",
        "language": "css",
        "code": "image-rendering: crisp-edges; image-rendering: pixelated; /* scaled sprites keep hard stair-stepped edges */"
      },
      {
        "title": "One-div pixel sprite via stacked box-shadows (4px cells)",
        "language": "css",
        "code": ".px-heart { width: 4px; height: 4px; background: transparent; box-shadow: 4px 0 #e43b44, 8px 0 #e43b44, 0 4px #e43b44, 4px 4px #e43b44, 8px 4px #e43b44, 12px 4px #e43b44, 16px 4px #e43b44, 20px 4px #e43b44, 24px 4px #e43b44, 0 8px #e43b44, 4px 8px #e43b44, 8px 8px #e43b44, 12px 8px #e43b44, 16px 8px #e43b44, 20px 8px #e43b44, 24px 8px #e43b44, 4px 12px #e43b44, 8px 12px #e43b44, 12px 12px #e43b44, 16px 12px #e43b44, 20px 12px #e43b44, 8px 16px #e43b44, 12px 16px #e43b44, 16px 16px #e43b44, 12px 20px #e43b44; }"
      },
      {
        "title": "Segmented HP-style bar — 2px dark gaps every 12px",
        "language": "css",
        "code": ".hp { height: 14px; border: 2px solid #f4f4f4; background: #1a1c2c; } .hp > i { display: block; height: 100%; background: #38b764; background-image: repeating-linear-gradient(90deg, transparent 0 10px, #1a1c2c 10px 12px); box-shadow: inset 0 3px 0 #a7f070; }"
      }
    ],
    "brief": {
      "en": "Create the surface as Pixel Art — deliberate 8/16-bit game UI. Defining signals: graphics of visible uniform square pixels, stair-stepped edges, no anti-aliasing; a small fixed palette — night #1a1c2c, purple #5d275d, red #b13e53, orange #ef7d57, yellow #ffcd75, pale #94b0c2, green #38b764; all bitmaps scaled nearest-neighbor (image-rendering: pixelated; canvas imageSmoothingEnabled = false); headings in a bitmap font ('Press Start 2P', uppercase, letter-spacing 2px) or blocky caps with hard 2px 2px 0 shadow, zero blur; controls as game chrome — segmented HP bars (2px gaps every 12px), RPG dialog panels (#1a1c2c fill, 3px solid #f4f4f4 border, border-radius 0), prompts blinking with steps(1); shading via checkerboard dithering, never gradients. Motion: steps() easing, two-frame blinks; no tweens or soft shadows. Do not drift into Vernacular Web: no browser defaults (blue links, system serif, tiled wallpaper); every pixel deliberate. Keep 4.5:1 text contrast (#ffcd75/#f4f4f4 on #1a1c2c passes; red fails), pause blinks under prefers-reduced-motion, body copy in readable mono or sans.",
      "zh": "把这个界面做成像素艺术（Pixel Art）—— 刻意的 8/16 位游戏 UI。定义性信号：图形由可见的一致方形像素搭成，阶梯状边缘，无抗锯齿；一块小小的固定色板 —— 夜色 #1a1c2c、紫 #5d275d、红 #b13e53、橙 #ef7d57、黄 #ffcd75、灰蓝 #94b0c2、绿 #38b764；所有位图用最近邻缩放（image-rendering: pixelated；canvas 设 imageSmoothingEnabled = false）；标题用位图字体（'Press Start 2P'，全大写，letter-spacing 2px）或带 2px 2px 0 硬阴影的块状大写字母，零模糊；控件做成游戏铬件 —— 分段 HP 血条（每 12px 留 2px 缝）、RPG 对话框面板（#1a1c2c 底、3px 实线 #f4f4f4 边框、border-radius 0）、用 steps(1) 闪烁的提示；明暗用棋盘抖动，绝不用渐变。动效：steps() 缓动、两帧闪烁；不要补间和柔和投影。不要滑向民间网页：不要任何浏览器默认值（蓝链接、系统衬线、平铺壁纸）；每个像素都是刻意的。文字对比度保持 4.5:1（#ffcd75/#f4f4f4 配 #1a1c2c 能过，红配夜色过不了），prefers-reduced-motion 下暂停闪烁，正文用可读的 mono 或 sans。"
    },
    "accessibility": {
      "en": "Pixel and bitmap fonts are decorative: they degrade fast at small sizes and in long reading — reserve them for headings and HUD labels, set body text in a readable sans or mono, and respect each font's minimum size (most pixel fonts need 8px+ and generous line-height).\n\nBlinking, flashing, and CRT-style flicker must stay under the 3-flashes-per-second seizure threshold and pause entirely under prefers-reduced-motion; scanline or screen-flicker overlays should be off by default.\n\nRetro palettes skew low-contrast (red on navy, green on black are classic failures): verify 4.5:1 for real text, and never encode state by hue alone — an HP bar's red versus green needs an icon or label too, or color-blind players can't read it.",
      "zh": "像素字体是装饰性的：字号一小、篇幅一长就垮 —— 只留给标题和 HUD 标签，正文用可读的 sans 或 mono，并守住每款字体的最小字号（多数像素字体需要 8px 以上和更大的行高）。\n\n闪烁、频闪和 CRT 式闪屏必须低于每秒 3 次的癫痫风险阈值，并在 prefers-reduced-motion 下完全暂停；扫描线或闪屏类叠加层默认应该关闭。\n\n复古色板普遍对比度偏低（红配藏青、绿配黑都是经典翻车组合）：正文实测 4.5:1；状态不要只用色相编码 —— 血条的红与绿要同时配图标或文字标签，否则色盲用户读不出来。"
    },
    "origin": {
      "en": "The look was born from hardware limits: arcade boards and consoles like Nintendo's Famicom/NES (1983) and Super Famicom/SNES (1990) forced artists into tiny sprites and indexed palettes of a handful of colors, and the teams behind games like Super Mario Bros. and Final Fantasy turned that constraint into craft. The term 'pixel art' itself dates to a 1982 letter by Adele Goldberg and Robert Flegal at Xerox PARC. Once 3D and high-color displays made the limits obsolete, the style returned as a deliberate choice — illustration collectives like eBoy in the late 1990s and the 2000s indie-game wave (Cave Story, 2004) recast it as a retro aesthetic that now surfaces in UI wherever a product wants game-era charm.",
      "zh": "这个外观诞生于硬件限制：任天堂 Famicom/NES（1983 年）和 Super Famicom/SNES（1990 年）这类主机与街机基板，把美术师逼进微小的精灵图和只有几种颜色的索引色板里，《超级马力欧兄弟》《最终幻想》背后的团队把限制磨成了手艺。「像素艺术」这个词本身可追溯到 1982 年 Xerox PARC 的 Adele Goldberg 与 Robert Flegal 写的一封信。3D 与高彩色显示让这些限制作古之后，它作为主动选择回归 —— 90 年代末 eBoy 这样的插画团体和 2000 年代的独立游戏浪潮（《洞窟物语》，2004 年）把它重塑成一种复古美学；如今凡是我们想要游戏时代魅力的 UI 里，它都会冒出来。"
    },
    "seeAlso": [
      {
        "slug": "styles/vernacular-web",
        "name": "Vernacular Web"
      },
      {
        "slug": "styles/vaporwave",
        "name": "Vaporwave"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      }
    ]
  },
  {
    "slug": "corporate-memphis",
    "name": {
      "en": "Corporate Memphis",
      "zh": "企业孟菲斯（Corporate Memphis）"
    },
    "tagline": {
      "en": "Corporate Memphis is the flat vector illustration style of late-2010s tech marketing: faceless people with tiny heads and disproportionately long, rubbery limbs, skin in blues, purples, and greens instead of real tones, bent into over-acted poses against blobs, dots, and arcs. Named after Alegria, the illustration system Facebook introduced around 2017, it became the default look of SaaS landing pages and empty states within years — then a byword for corporate sameness ('blanding').",
      "zh": "企业孟菲斯是 2010 年代末科技营销的扁平矢量插画风格：没有五官的人物顶着小脑袋，四肢不成比例地又长又软，皮肤画成蓝、紫、绿而不是真实肤色，在色团、圆点和弧线之间摆出夸张的姿势。名字来自 Facebook 约 2017 年推出的插画系统 Alegria；几年内它就成了 SaaS 落地页和空状态的默认外观 —— 随后又成了「千站一面」的企业「平庸化」（blanding）代名词。"
    },
    "scope": {
      "en": "Scope: Covers the figurative illustration language — the people, their proportions, and the palette — not the page chrome underneath, which is usually plain flat design. The 1980s Memphis Group's squiggle-and-confetti patterns get their own entry (Memphis); this style only borrows the name and some background geometry.",
      "zh": "范围：本条涵盖这套人物插画语言 —— 人物、比例和配色 —— 而不是底下的页面骨架，那通常是普通的扁平设计。上世纪 80 年代 Memphis Group 的曲线加彩纸屑纹样另有一条目（孟菲斯）；本风格只借了它的名字和一点背景几何。"
    },
    "aliases": {
      "en": [
        "tech company cartoons with tiny heads and long bendy arms",
        "those flat people with blue or purple skin on startup websites",
        "the illustration style every saas landing page and empty state uses",
        "bendy noodle-arm people in pastel colors hugging giant objects",
        "big tech art style where everyone's limbs are weirdly long",
        "that alegria-looking flat people clipart"
      ],
      "zh": [
        "科技公司那种小脑袋长软胳膊的卡通人",
        "创业网站上那些蓝皮肤紫皮肤的扁平小人",
        "每个 SaaS 落地页和空状态都在用的插画风",
        "蜡笔色系、抱着巨大物件的长手长脚小人",
        "四肢都长得离谱的大科技公司美术风",
        "那种 Alegria 味的扁平人物贴画"
      ]
    },
    "signals": [
      {
        "id": "noodle-people",
        "role": "defining",
        "name": {
          "en": "Tiny heads, noodle limbs",
          "zh": "小脑袋，面条四肢"
        },
        "facet": "imagery",
        "description": {
          "en": "Characters are drawn with heads half the natural size, arms and legs 1.5–2x too long and bending like rubber hoses, with oversized hands and feet — bodies assembled from simple capsules and blobs.",
          "zh": "人物的脑袋只有正常一半大，胳膊和腿长是自然的 1.5–2 倍、像橡胶软管一样弯折，手掌和脚掌超大 —— 身体全由胶囊和色团拼成。"
        }
      },
      {
        "id": "unnatural-skin",
        "role": "defining",
        "name": {
          "en": "Non-naturalistic skin tones",
          "zh": "非真实肤色"
        },
        "facet": "color",
        "description": {
          "en": "Skin is filled with blue (#6C8CFF), purple (#A78BFA), green, or pink — never real skin colors; the abstraction was sold as universal and is the style's fastest tell.",
          "zh": "皮肤填充蓝色（#6C8CFF）、紫色（#A78BFA）、绿色或粉色 —— 绝不是真实肤色；这种抽象当初被包装成「人人适用」，也是这个风格最快的识别点。"
        }
      },
      {
        "id": "flat-vector-fills",
        "role": "defining",
        "name": {
          "en": "Big flat fills, zero shading",
          "zh": "大平涂，零阴影"
        },
        "facet": "surface",
        "description": {
          "en": "Every shape is one solid color: no gradients, no texture, no cast shadows; outlines are absent or a single thin line in a darker shade of the fill.",
          "zh": "每个形状只有一种纯色：不要渐变、不要纹理、不要投影；描边要么没有，要么只用比填充深一号的 2px 细线。"
        }
      },
      {
        "id": "pastel-tech-palette",
        "role": "supporting",
        "name": {
          "en": "Soft bright tech palette",
          "zh": "柔和明亮的科技配色"
        },
        "facet": "color",
        "description": {
          "en": "Lavender, periwinkle, soft pink, butter yellow, and mint laid on off-white (#FBFAFF) — friendly and low-aggression, bright without neobrutalism's harsh saturation.",
          "zh": "薰衣草紫、长春花蓝、柔粉、奶油黄、薄荷绿，铺在米白（#FBFAFF）上 —— 友好、低攻击性，亮但没有新粗野主义那种刺眼的饱和。"
        }
      },
      {
        "id": "exaggerated-poses",
        "role": "supporting",
        "name": {
          "en": "Over-acted poses",
          "zh": "用力过猛的姿势"
        },
        "facet": "imagery",
        "description": {
          "en": "Figures leap, stretch, high-five, or hug oversized objects (a giant phone, a huge credit card) in impossible, cheerfully contorted stances.",
          "zh": "人物跳跃、伸展、击掌，或抱着超大号的物件（巨型手机、大信用卡），摆出不可能的欢快扭曲姿态。"
        }
      },
      {
        "id": "blob-dot-backdrop",
        "role": "supporting",
        "name": {
          "en": "Blob-and-dot backdrops",
          "zh": "色团圆点背景"
        },
        "facet": "geometry",
        "description": {
          "en": "Organic blobs, half-circles, arcs, and floating dots frame the scene — the only genuine echo of 1980s Memphis, and the reason the nickname stuck.",
          "zh": "有机色团、半圆、弧线和漂浮的圆点框住画面 —— 这是和 80 年代孟菲斯唯一真正的血缘，也是这个绰号能叫响的原因。"
        }
      },
      {
        "id": "realistic-humans",
        "role": "avoid",
        "name": {
          "en": "Realistic human proportions",
          "zh": "真实人体比例"
        },
        "facet": "imagery",
        "description": {
          "en": "Anatomically correct figures, photos of real people, or 3D-rendered humans disqualify the look instantly — the style is defined by deliberately wrong bodies.",
          "zh": "解剖正确的人物、真人照片或 3D 渲染人像会立刻让画风不成立 —— 这个风格的定义就是故意画错的身体。"
        }
      }
    ],
    "confusedWith": {
      "slug": "memphis",
      "name": "Memphis",
      "because": {
        "en": "This is Corporate Memphis because the image is built around flat vector people — tiny heads, noodle limbs, non-naturalistic skin — acting out a scene; the squiggles and dots behind them are just set dressing.",
        "zh": "这是企业孟菲斯，因为画面的主体是扁平矢量人物 —— 小脑袋、面条四肢、非真实肤色 —— 在演一出戏；身后的曲线和圆点只是舞台布景。"
      },
      "wouldBecomeIf": {
        "en": "It would become Memphis if the people walked off the page and only the geometric confetti remained — squiggles, triangles, and clashing patterns as pure surface decoration, with no characters at all.",
        "zh": "如果人物全部走下画面，只留下几何彩纸屑 —— 曲线、三角和撞色纹样纯粹作为表面装饰、一个角色都不剩 —— 就变成孟菲斯了。"
      }
    },
    "code": [
      {
        "title": "The palette, as custom properties",
        "language": "css",
        "code": ":root {\n  --cm-ink: #2E2A5B;    /* text, hair, pants */\n  --cm-blue: #6C8CFF;   /* skin */\n  --cm-purple: #A78BFA;\n  --cm-pink: #F9A8D4;\n  --cm-yellow: #FDE68A;\n  --cm-mint: #6EE7B7;\n  --cm-bg: #FBFAFF;     /* page ground */\n}"
      },
      {
        "title": "A noodle limb in pure CSS — long capsule, flat fill, no outline or shadow",
        "language": "css",
        "code": ".arm {\n  width: 14px; height: 96px;            /* ~2x natural length */\n  background: var(--cm-blue);           /* flat non-natural skin */\n  border-radius: 999px;                 /* the capsule IS the limb */\n  transform: rotate(38deg);\n  transform-origin: top center;\n  box-shadow: none; border: none;       /* no shading, no outline */\n}"
      },
      {
        "title": "Same construction as utilities (pill button + blob)",
        "language": "tailwind",
        "code": "rounded-full bg-[#6C63FF] px-6 py-3 font-bold text-white shadow-none transition hover:-translate-y-0.5\nrounded-[46%_54%_52%_48%/58%_60%_40%_42%] bg-[#FDE68A] shadow-none"
      }
    ],
    "brief": {
      "en": "Create the surface in Corporate Memphis style. Canvas: SaaS hero or empty state on off-white #FBFAFF, generous whitespace, friendly geometric sans (Inter/Gilroy/Circular; headings 700, ink #2E2A5B). Build flat vector figures: tiny heads (~0.6x natural), rubber-hose limbs 1.5–2x natural drawn as capsules (border-radius: 999px), oversized hands and feet; skin in blue #6C8CFF, purple #A78BFA, or mint #6EE7B7 — never real tones; clothes and props flat pink #F9A8D4, butter #FDE68A. Zero gradients, texture, or drop shadows; outlines absent or one 2px line in a darker fill shade. Pose figures mid-action — leaping, stretching, hugging oversized objects. Backdrop: organic blobs (border-radius: 46% 54% 52% 48% / 58% 60% 40% 42%), half-circles, floating dots — all flat pastels. UI chrome: pill buttons (border-radius: 999px, flat fill, hover: translateY(-2px)); no shadows anywhere. Text contrast 4.5:1 — ink on pastel fills, never white on yellow. Avoid realistic proportions, real-people photography, gradients, and all-over Memphis confetti: figures are the point, geometry only the backdrop.",
      "zh": "按企业孟菲斯（Corporate Memphis）风格创建界面。画布：米白 #FBFAFF 上的 SaaS 首屏或空状态，大量留白，友好的几何无衬线字体（Inter/Gilroy/Circular；标题 700 字重，墨色 #2E2A5B）。用简单部件拼扁平矢量人物：小脑袋（约为正常的 0.6 倍）、橡胶软管式四肢长到自然的 1.5–2 倍、画成胶囊形（border-radius: 999px）、手掌脚掌超大；皮肤填蓝色 #6C8CFF、紫色 #A78BFA 或薄荷绿 #6EE7B7 —— 绝不用真实肤色；衣服和道具用平涂的粉色 #F9A8D4、奶油黄 #FDE68A。零渐变、零纹理、零投影；描边要么没有，要么只用比填充深一号的 2px 细线。让人物处在动作中 —— 跳跃、伸展、抱着超大号物件。背景：有机色团（border-radius: 46% 54% 52% 48% / 58% 60% 40% 42%）、半圆、漂浮圆点、一条波浪弧 —— 全部平涂蜡笔色。UI 骨架：胶囊按钮（border-radius: 999px、纯色填充、hover 时 translateY(-2px)）；任何地方都不要阴影。文字对比度 4.5:1 —— 蜡笔色上用墨色字，黄底绝不用白字。避免真实人体比例、真人照片、渐变和满屏的孟菲斯彩纸屑 —— 人物才是主角，几何只是背景。"
    },
    "accessibility": {
      "en": "The pastel palette invites pastel-on-pastel text: white on butter yellow #FDE68A or lavender on off-white fails badly. Put ink #2E2A5B text on the light fills and measure every combination at 4.5:1 — soft does not have to mean low-contrast.\n\nBobbing, bouncing figures and parallax blobs are common on this style's landing pages; gate all of it behind prefers-reduced-motion, and keep the figures decorative — marked aria-hidden so screen readers skip the meaningless SVG.\n\nThe blue-skinned abstraction was meant to sidestep representation, but in practice it can read as erasing real diversity while infantilizing users with clownish bodies — pair the illustration with genuine representation elsewhere (photography, avatars, copy) rather than letting noodle people carry the whole brand.",
      "zh": "蜡笔调色板很容易诱发出蜡笔叠蜡笔的文字：奶油黄 #FDE68A 上的白字、米白上的淡紫字都惨不及格。浅色块上统一用墨色 #2E2A5B 的字，每组组合都实测 4.5:1 —— 「柔和」不必等于「低对比」。\n\n上下蹦跳的人物和视差色团在这类落地页上很常见；全部用 prefers-reduced-motion 兜底。人物本身当作纯装饰，标上 aria-hidden，让屏幕阅读器跳过这些没有语义的 SVG。\n\n蓝皮肤的抽象本意是绕开「画什么人」的问题，但实践中既可能读作抹掉了真实的多元，又像在用小丑般的身体把用户当小孩 —— 要在别处（摄影、头像、文案）补上真实的代表性，而不是让面条小人独自扛起整个品牌。"
    },
    "origin": {
      "en": "Named after Alegria, the illustration system Facebook commissioned from the design studio Buck around 2017, whose flat, bendy-limbed characters became the template for big-tech marketing art. The dismissive label 'Corporate Memphis' stuck because the shapes floating behind the figures echo the 1980s Memphis Group's geometry — the two movements are otherwise unrelated. By 2019–2021 it was the default illustration style for SaaS landing pages and empty states across the industry, and the backlash to its sameness ('blanding') turned it into a cliché almost as fast.",
      "zh": "名字来自 Alegria —— Facebook 约 2017 年委托设计工作室 Buck 打造的插画系统，其扁平、四肢软弯的人物成了大科技公司营销美术的模板。「企业孟菲斯」这个带贬义的标签之所以叫得响，是因为人物身后漂浮的形状让人想起 80 年代 Memphis Group 的几何 —— 两场运动除此之外毫无关系。到 2019–2021 年，它已是全行业 SaaS 落地页和空状态的默认插画风，而对这种千篇一律的反弹（「平庸化」 blanding）几乎同样迅速地把它变成了陈词滥调。"
    },
    "seeAlso": [
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      },
      {
        "slug": "styles/flat-design",
        "name": "Flat Design"
      },
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      }
    ]
  },
  {
    "slug": "material-design",
    "name": {
      "en": "Material Design",
      "zh": "质感设计（Material Design）"
    },
    "tagline": {
      "en": "Material Design is Google's physics-based design language: UIs are digital paper layered along a z-axis, each surface resting at a measured elevation that casts a soft shadow, the main action hovering as a circular FAB, every touch answered with an ink ripple. Bold brand color, white cards, and Roboto type align to an 8dp grid, and motion expresses hierarchy. Shipped with Android 5.0 in 2014, it became Android's default look — the systematic rebuttal to flat design's shadowless austerity.",
      "zh": "质感设计是 Google 基于物理隐喻的设计语言：界面是沿 z 轴叠放的数字纸张，每个表面停在一个可测量的 elevation 上、投下与高度对应的柔和阴影，主操作悬浮成一枚圆形 FAB，每次点按都用墨涟漪回应。大胆的品牌色、白色卡片和 Roboto 字体对齐在 8dp 网格上，动效负责表达层级。2014 年随 Android 5.0 发布，从此成为 Android 的默认观感 —— 对扁平设计「零阴影」美学的一次系统化回应。"
    },
    "scope": {
      "en": "Scope: Covers Google's design language across its generations — 2014's paper-and-ink system, 2018 Material Theming, and 2021's Material You. The generic 'flat with one soft shadow' SaaS look it inspired is not this entry: without the elevation scale, the FAB, and ripple physics, that is just Flat Design 2.0.",
      "zh": "范围：涵盖 Google 这套设计语言的各代 —— 2014 年的纸墨体系、2018 年的 Material Theming、2021 年的 Material You。被它带火的那种「扁平加一层柔影」通用 SaaS 观感不在本条：没有 elevation 标尺、FAB 和涟漪物理，那只是 Flat Design 2.0。"
    },
    "aliases": {
      "en": [
        "google apps look with the floating round button",
        "white cards with soft shadows on a gray background",
        "the android material you style",
        "the ripple effect that spreads when you tap stuff on android",
        "paper cards stacked with drop shadows and a pink button",
        "the gmail and google docs app look"
      ],
      "zh": [
        "谷歌应用那种悬浮圆按钮的样子",
        "灰底上带柔和阴影的白色卡片",
        "安卓 Material You 那种风格",
        "安卓上点一下就荡开的涟漪效果",
        "纸卡片叠在一起配个粉色按钮",
        "Gmail 和 Google 文档应用的那种观感"
      ]
    },
    "signals": [
      {
        "id": "elevation-shadows",
        "role": "defining",
        "name": {
          "en": "Stepped z-axis elevation",
          "zh": "分级的 z 轴 elevation"
        },
        "facet": "depth",
        "description": {
          "en": "Every surface rests at a measured height — 2dp cards, 4dp app bars, 6dp FABs, 8dp raised menus, 16dp drawers — and the soft shadow beneath it encodes exactly that height; press, and the shadow grows as the surface lifts toward you.",
          "zh": "每个表面停在一个可测量的高度上 —— 2dp 卡片、4dp 应用栏、6dp FAB、8dp 弹出菜单、16dp 抽屉 —— 底下的柔和阴影精确编码了这个高度；按下时表面抬起，阴影随之变大。"
        }
      },
      {
        "id": "paper-surfaces",
        "role": "defining",
        "name": {
          "en": "Layered digital paper",
          "zh": "叠放的数字纸张"
        },
        "facet": "surface",
        "description": {
          "en": "The UI is sheets of paper sliding over each other: white cards with crisp 2–4px corners floating on a light gray ground, their edges cut by shadow rather than by borders.",
          "zh": "界面就是互相滑过的纸张：白色卡片带着利落的 2–4px 圆角浮在浅灰底上，边缘靠阴影「裁」出来，而不是靠描边。"
        }
      },
      {
        "id": "fab",
        "role": "defining",
        "name": {
          "en": "Floating action button",
          "zh": "悬浮操作按钮（FAB）"
        },
        "facet": "geometry",
        "description": {
          "en": "One circular button (56dp diameter, 6dp elevation) in the accent color hovers above the content — the screen's single promoted action, often straddling the seam between header and content.",
          "zh": "一枚圆形按钮（直径 56dp、6dp elevation）用强调色悬浮在内容之上 —— 它是全屏唯一被主推的操作，常常骑在头部与内容的接缝上。"
        }
      },
      {
        "id": "ink-ripple",
        "role": "defining",
        "name": {
          "en": "Ink ripple touch feedback",
          "zh": "墨涟漪触控反馈"
        },
        "facet": "motion",
        "description": {
          "en": "Touch answers with a ripple of ink spreading from the exact contact point across the surface — feedback is rendered as a physical event, not a hover-color swap.",
          "zh": "点按的回应是一滴墨从接触点向整个表面荡开的涟漪 —— 反馈被渲染成一次物理事件，而不是换个 hover 颜色。"
        }
      },
      {
        "id": "bold-brand-color",
        "role": "defining",
        "name": {
          "en": "Bold primary, hot accent",
          "zh": "大胆主色 + 高亮强调色"
        },
        "facet": "color",
        "description": {
          "en": "A saturated primary (Indigo 500 #3F51B5 class) owns bars and large areas; a contrasting accent (Pink A200 #FF4081 class) is reserved for the FAB and key controls against white cards.",
          "zh": "饱和主色（Indigo 500 #3F51B5 这一档）占据应用栏和大面积区域；对比强烈的强调色（Pink A200 #FF4081 这一档）只留给 FAB 和关键控件，衬在白色卡片上。"
        }
      },
      {
        "id": "meaningful-motion",
        "role": "supporting",
        "name": {
          "en": "Motion explains hierarchy",
          "zh": "表达层级的动效"
        },
        "facet": "motion",
        "description": {
          "en": "Transitions run 200–300ms on the standard curve cubic-bezier(0.4, 0, 0.2, 1); new surfaces grow out of the element that spawned them, so animation shows cause, not decoration.",
          "zh": "过渡跑 200–300ms 的标准曲线 cubic-bezier(0.4, 0, 0.2, 1)；新表面从催生它的那个元素里长出来，动效表达的是因果，不是装饰。"
        }
      },
      {
        "id": "eight-dp-grid",
        "role": "supporting",
        "name": {
          "en": "8dp square grid",
          "zh": "8dp 方形网格"
        },
        "facet": "layout",
        "description": {
          "en": "Components align to an 8dp baseline grid — spacing in 8/16/24px multiples, 16px screen margins — so unrelated screens share the same rhythm.",
          "zh": "组件对齐到 8dp 基线网格 —— 间距取 8/16/24px 的倍数，屏幕边距 16px —— 互不相干的页面也共享同一套节奏。"
        }
      },
      {
        "id": "flat-no-shadow",
        "role": "avoid",
        "name": {
          "en": "Shadowless color blocks",
          "zh": "无阴影色块"
        },
        "facet": "depth",
        "description": {
          "en": "Pure 2D fills where hierarchy comes from color alone — zero elevation, zero ripple physics — is Flat Design; Material's entire point is the restored, measurable z-axis.",
          "zh": "纯 2D 填充、层级只靠颜色 —— 零 elevation、零涟漪物理 —— 那是扁平设计；质感设计的全部意义就在于那条被恢复、可测量的 z 轴。"
        }
      }
    ],
    "confusedWith": {
      "slug": "flat-design",
      "name": "Flat Design",
      "because": {
        "en": "This is Material Design because depth is restored as a physics system — every surface sits at a measured z-axis elevation casting a shadow that encodes its height, and motion expresses where elements come from.",
        "zh": "这是质感设计，因为纵深被恢复成了一套物理系统 —— 每个表面在 z 轴上都有一个可测量的 elevation，投下编码其高度的阴影，动效则表达元素从哪里来。"
      },
      "wouldBecomeIf": {
        "en": "It would become Flat Design if the z-axis were collapsed back to zero — shadows deleted, the FAB flattened into a solid color block, hierarchy left to color and type alone.",
        "zh": "如果把 z 轴重新压回零 —— 删掉阴影、FAB 拍扁成色块、层级全交给颜色和字体 —— 就变成扁平设计了。"
      }
    },
    "code": [
      {
        "title": "The workhorse: 2dp resting card",
        "language": "css",
        "code": "border-radius: 2px; background: #fff; box-shadow: 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12);"
      },
      {
        "title": "FAB: 6dp resting, standard motion curve",
        "language": "css",
        "code": "border-radius: 50%; background: #FF4081; box-shadow: 0 6px 10px rgba(0,0,0,.14), 0 1px 18px rgba(0,0,0,.12), 0 3px 5px -1px rgba(0,0,0,.2); transition: box-shadow .28s cubic-bezier(.4, 0, .2, 1);"
      },
      {
        "title": "Same construction as utilities",
        "language": "tailwind",
        "code": "bg-white rounded-sm shadow-[0_2px_2px_rgba(0,0,0,.14),0_3px_1px_-2px_rgba(0,0,0,.2),0_1px_5px_rgba(0,0,0,.12)] /* card */ + rounded-full bg-[#FF4081] w-14 h-14 shadow-[0_6px_10px_rgba(0,0,0,.14),0_1px_18px_rgba(0,0,0,.12),0_3px_5px_-1px_rgba(0,0,0,.2)] /* fab */"
      }
    ],
    "brief": {
      "en": "Build the surface in classic Material Design (2014 paper-and-ink generation). Canvas: light gray #FAFAFA ground, white #FFFFFF cards floating on a stepped dp elevation scale — 2dp card: box-shadow 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12); 8dp raised: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2). Palette: primary Indigo 500 #3F51B5 for bars and large areas, accent Pink A200 #FF4081 for the FAB and key controls; text #212121 / #757575. Type: Roboto (fallback system sans), medium titles. Geometry: cards 2–4px radius; one circular FAB (56px, 6dp, lifts to 12dp pressed) in the accent. Interaction: ink ripples spread from the touch point; transitions 200–300ms cubic-bezier(0.4, 0, 0.2, 1), surfaces growing from their parent. Layout on an 8dp grid — 8/16/24px spacing. Do not drift into Flat Design: elevation shadows, the FAB, and ripples are mandatory — hierarchy by color alone with zero shadows is the neighbor style. Keep text on accent fills at 4.5:1 and honor prefers-reduced-motion.",
      "zh": "用经典质感设计（2014 年纸墨一代）创建这个界面。画布：浅灰 #FAFAFA 底，白色 #FFFFFF 卡片按分级 dp elevation 标尺浮起 —— 2dp 卡片：box-shadow 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12)；8dp 抬起：0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2)。配色：主色 Indigo 500 #3F51B5 给应用栏和大面积区域，强调色 Pink A200 #FF4081 给 FAB 和关键控件；文字 #212121 / #757575。字体：Roboto（回退系统无衬线），标题用 medium 字重。几何：卡片 2–4px 圆角；一枚圆形 FAB（56px、6dp、按下抬到 12dp），用强调色。交互：每个控件上的墨涟漪从触点荡开；过渡 200–300ms cubic-bezier(0.4, 0, 0.2, 1)，表面从父元素里长出来。布局对齐 8dp 网格 —— 间距取 8/16/24px。不要滑向扁平设计：elevation 阴影、FAB 和涟漪都是必需品 —— 零阴影、只靠颜色分层级的是隔壁风格。强调色填充上的文字保持 4.5:1 对比度，并响应 prefers-reduced-motion。"
    },
    "accessibility": {
      "en": "Elevation alone is a weak affordance: a white card on a #FAFAFA ground can fail the 3:1 boundary ratio for controls, and shadows vanish entirely in forced-colors mode — interactive elements must read as interactive by color, label, and shape, not by lift alone.\n\nWhite ink on hot accent colors is the classic trap: white on Pink A200 #FF4081 measures roughly 3.3:1 — acceptable for the FAB's icon, too weak for text; white on Indigo 500 #3F51B5 passes at about 6.9:1. Check every pair against 4.5:1, or step down to a 700 shade.\n\nMotion is load-bearing here — surfaces grow and travel to explain where things came from — so prefers-reduced-motion needs a real fallback: replace growing and traveling transitions with instant cuts or simple crossfades, and drop the ripple animation.",
      "zh": "只靠 elevation 是微弱的可供性：#FAFAFA 底上的白色卡片可能过不了控件边界的 3:1 对比，而且在 forced-colors 模式下阴影会整个消失 —— 可交互元素必须靠颜色、文字和形状认出「能点」，不能只靠浮起。\n\n强调色上压白字是经典翻车点：白字配 Pink A200 #FF4081 实测约 3.3:1 —— 给 FAB 图标可以，给正文太弱；白字配 Indigo 500 #3F51B5 约 6.9:1 能过。每一对颜色都按 4.5:1 检查，不行就降一档用 700 色号。\n\n动效在这个风格里是承重墙 —— 表面靠生长和移动解释自己从哪来 —— 所以 prefers-reduced-motion 需要真正的降级方案：把生长、位移的过渡换成瞬切或简单淡入淡出，并关掉涟漪动画。"
    },
    "origin": {
      "en": "Unveiled by Google at its I/O conference in June 2014 — led by design VP Matías Duarte and developed under the internal codename Quantum Paper — and shipped that year with Android 5.0 Lollipop as the company's first unified cross-platform design language. Its paper-and-ink metaphor and the Roboto typeface (designed by Christian Robertson) became the visual identity of Android; Google extended the system with Material Theming at I/O 2018 and with the wallpaper-tinted, personalized Material You alongside Android 12 in 2021.",
      "zh": "2014 年 6 月由 Google 在 I/O 大会上发布 —— 由设计副总裁 Matías Duarte 主导，内部代号 Quantum Paper —— 同年随 Android 5.0 Lollipop 出厂，成为该公司首个跨平台统一设计语言。纸墨隐喻和 Roboto 字体（Christian Robertson 设计）从此成为 Android 的视觉身份；Google 在 I/O 2018 扩展出 Material Theming，2021 年又随 Android 12 带来能从壁纸取色的个性化 Material You。"
    },
    "seeAlso": [
      {
        "slug": "styles/flat-design",
        "name": "Flat Design"
      },
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      },
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "styles/corporate-memphis",
        "name": "Corporate Memphis"
      }
    ]
  },
  {
    "slug": "terminal-hacker",
    "name": {
      "en": "Terminal Hacker",
      "zh": "终端黑客风（Terminal / Hacker / CRT）"
    },
    "tagline": {
      "en": "Terminal Hacker turns the screen into a vintage character terminal: a pure black CRT glowing in a single phosphor ink — matrix green or amber — with monospace glyphs, a soft halo around every character, scanlines and flicker laid over everything, and a blinking block cursor typing content out like a machine. Born from 1970s–80s hardware limits, canonized by hacker cinema and The Matrix, it is now pure retro-futurist costume: the interface pretends to be forty-year-old equipment.",
      "zh": "终端黑客风把屏幕变成一台复古字符终端：纯黑的 CRT 上只亮着一种磷光墨色 —— 黑客帝国绿或琥珀色 —— 等宽字形、每个字符带一圈柔光晕、一切之上覆着扫描线和闪烁，还有一个闪烁的方块光标像机器一样把内容逐字打出来。它生于 1970–80 年代的硬件限制，被黑客电影和《黑客帝国》封圣，如今是纯粹的复古未来主义戏服：界面假装自己是一台四十岁的老设备。"
    },
    "scope": {
      "en": "Scope: This entry is the retro CRT emulation — black ground, one phosphor color, glow, scanlines, block cursor. The broader neon-drenched dystopian look (magenta/cyan skylines, chrome, rain) is Cyberpunk; genuinely unstyled default HTML is Web Brutalism; blocky low-res game graphics are Pixel Art.",
      "zh": "范围：本条是复古 CRT 仿真 —— 黑底、单一磷光色、辉光、扫描线、方块光标。更大的霓虹反乌托邦外观（品红/青色天际线、镀铬、雨夜）是赛博朋克；真正不加样式的默认 HTML 是网页粗野主义；块状低分辨率游戏画面是像素艺术。"
    },
    "aliases": {
      "en": [
        "green text on black like the matrix",
        "movie hacker computer screen",
        "old crt monitor look with scanlines",
        "retro terminal with the blinking square cursor",
        "website that looks like an 80s command line",
        "glowing green monospace hacker aesthetic"
      ],
      "zh": [
        "黑底绿字、像黑客帝国那种",
        "电影里黑客用的电脑屏幕",
        "带扫描线的老 CRT 显示器效果",
        "带闪烁方块光标的复古终端",
        "像 80 年代命令行的网站",
        "发绿光的等宽字体黑客风"
      ]
    },
    "signals": [
      {
        "id": "phosphor-ink",
        "role": "defining",
        "name": {
          "en": "One phosphor ink on black",
          "zh": "黑底单一磷光墨色"
        },
        "facet": "color",
        "description": {
          "en": "Pure black ground (#000–#050805) with a single luminous ink for text, borders, and graphics — matrix green #00ff41 or amber #ffb000. One electron gun, one hue; a second color already feels wrong.",
          "zh": "纯黑底（#000–#050805）配一种发光墨色，通吃文字、边框和图形 —— 黑客帝国绿 #00ff41 或琥珀色 #ffb000。一支电子枪一种色相；出现第二种颜色就已经不对味了。"
        }
      },
      {
        "id": "phosphor-glow",
        "role": "defining",
        "name": {
          "en": "Phosphor glow on every glyph",
          "zh": "每个字形都带磷光辉光"
        },
        "facet": "surface",
        "description": {
          "en": "Text and line art carry a same-hue halo — text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) — as if the phosphor is still warm. Flat, matte text breaks the spell.",
          "zh": "文字和线条画都带同色光晕 —— text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) —— 像磷光还没冷却。平实的哑光文字会立刻破功。"
        }
      },
      {
        "id": "scanline-flicker",
        "role": "defining",
        "name": {
          "en": "Scanlines and flicker",
          "zh": "扫描线与闪烁"
        },
        "facet": "surface",
        "description": {
          "en": "A repeating-linear-gradient of 1px dark lines every 2–4px overlays the whole screen, plus a subtle brightness flicker in steps timing. The image should read as emitted by a tube, not printed.",
          "zh": "用 repeating-linear-gradient 在整个屏幕上覆一层每 2–4px 一条的 1px 暗线，再加 steps 时序的轻微亮度闪烁。画面要读起来像显像管发出来的，不是印上去的。"
        }
      },
      {
        "id": "block-cursor",
        "role": "defining",
        "name": {
          "en": "Blinking block cursor",
          "zh": "闪烁方块光标"
        },
        "facet": "motion",
        "description": {
          "en": "A solid full-cell block █ at the input position, toggling on/off roughly once a second with steps(1) — a hard blink, never a fade. It marks where the machine is listening.",
          "zh": "输入位置是一个实心整格方块 █，大约每秒开关一次，用 steps(1) —— 硬闪，绝不淡入淡出。它标出机器正在听的位置。"
        }
      },
      {
        "id": "boot-typewriter",
        "role": "supporting",
        "name": {
          "en": "Boot logs and typewriter reveal",
          "zh": "开机日志与打字机式揭示"
        },
        "facet": "motion",
        "description": {
          "en": "Screens open with BIOS-style self-tests ('MEM CHECK ...... OK') in terse ALL-CAPS machine voice behind prompt symbols (>, $, #), and content appears character-by-character at ~30–60ms per glyph.",
          "zh": "打开画面先跑 BIOS 式自检（「MEM CHECK ...... OK」），提示符（>、$、#）后面跟着简短的全大写机器口吻，内容再以每字约 30–60ms 的速度逐字出现。"
        }
      },
      {
        "id": "ascii-art",
        "role": "supporting",
        "name": {
          "en": "ASCII boxes and character art",
          "zh": "ASCII 框线与字符画"
        },
        "facet": "imagery",
        "description": {
          "en": "Frames drawn from +---+ and |, progress bars as [██████░░░░], waveforms and logos built from characters on the monospace grid — graphics rendered as text because the hardware had nothing else.",
          "zh": "边框用 +---+ 和 | 画，进度条是 [██████░░░░]，波形和标志都搭在等宽网格的字符上 —— 把图形渲染成文字，因为当年的硬件别无选择。"
        }
      },
      {
        "id": "which-phosphor",
        "role": "variable",
        "name": {
          "en": "Which phosphor",
          "zh": "用哪种磷光"
        },
        "facet": "color",
        "description": {
          "en": "Green #00ff41 is the Matrix cliché; amber #ffb000 reads warmer and more 'office 1983'; cool white is the sober variant. The construction carries the style, not the hue.",
          "zh": "绿色 #00ff41 是黑客帝国式套路；琥珀色 #ffb000 更暖、更像「1983 年的办公室」；冷白是素净变体。撑起风格的是构造，不是色相。"
        }
      },
      {
        "id": "soft-polychrome",
        "role": "avoid",
        "name": {
          "en": "Soft, polychrome UI",
          "zh": "柔软多彩的现代 UI"
        },
        "facet": "surface",
        "description": {
          "en": "Full-color imagery, gradients, rounded glass cards, and drop shadows dissolve the illusion instantly — if it looks like a modern app tinted green, it isn't terminal.",
          "zh": "全彩图像、渐变、圆角玻璃卡片和投影会立刻瓦解幻境 —— 如果它看起来像刷成绿色的现代 App，那就不是终端。"
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is terminal-hacker because the page is a styled simulation of vintage CRT hardware: black ground, one glowing phosphor color, monospace glyphs, scanlines, and a blinking block cursor.",
        "zh": "这是终端黑客风，因为页面是对复古 CRT 硬件的风格化仿真：黑底、一种发磷光的颜色、等宽字形、扫描线和闪烁的方块光标。"
      },
      "wouldBecomeIf": {
        "en": "It would become Web Brutalism if the CRT costume were removed — white ground, default serif type, plain blue links, bare HTML structure. One emulates a 1982 monitor; the other is no CSS at all.",
        "zh": "如果把 CRT 戏服摘掉 —— 白底、默认衬线字体、朴素的蓝链接、裸露的 HTML 结构 —— 就变成网页粗野主义了。一个在仿真 1982 年的显示器，一个根本没写 CSS。"
      }
    },
    "code": [
      {
        "title": "Phosphor ink + glow",
        "language": "css",
        "code": "color: #00ff41; background: #050805; font-family: ui-monospace, \"Cascadia Mono\", Menlo, monospace; text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25);"
      },
      {
        "title": "CRT scanline + flicker overlay",
        "language": "css",
        "code": ".crt::after { content: \"\"; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px); animation: crt-flicker 3s steps(60) infinite; }"
      },
      {
        "title": "Hard-blinking block cursor",
        "language": "css",
        "code": ".prompt::after { content: \"\\2588\"; animation: blink 1.1s steps(1) infinite; } @keyframes blink { 50% { opacity: 0; } }"
      }
    ],
    "brief": {
      "en": "Create the surface as a terminal-hacker CRT emulation. Canvas: pure black (#000 to #050805), border-radius 0–2px, 1px borders in dim phosphor rgba(0,255,65,.35). Ink: one phosphor hue only — matrix green #00ff41 (amber #ffb000 acceptable) — for all text, icons, and graphics; dim states are the same hue at 40–60% opacity, never gray or a second hue. Type: monospace everywhere (ui-monospace, 'IBM Plex Mono', 'JetBrains Mono'), 12–14px, ALL CAPS for status lines; every glyph glows via text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25). Overlay the panel with scanlines (repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)) plus subtle flicker (<3 flashes/sec). End input lines with a blinking block cursor █ (1.1s, steps(1), no fade). Reveal headings typewriter-style, prefix lines with > or $, draw boxes and bars as ASCII (+---+, [████░░]). Avoid color imagery, gradients, rounded capsules, drop shadows, white backgrounds — they break the tube. Honor prefers-reduced-motion: kill flicker, blink, and typewriter, showing full text instantly.",
      "zh": "按终端黑客风的 CRT 仿真来创建界面。画布：纯黑（#000 到 #050805），border-radius 0–2px，1px 边框用暗磷光 rgba(0,255,65,.35)。墨色：只用一种磷光色相 —— 黑客帝国绿 #00ff41（琥珀色 #ffb000 也可）—— 通吃所有文字、图标和图形；弱化状态用同色相 40–60% 不透明度，绝不用灰色或第二种色相。字体：全部等宽（ui-monospace、'IBM Plex Mono'、'JetBrains Mono'），12–14px，状态行全大写；每个字形用 text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) 打出辉光。整个面板覆扫描线（repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)），加轻微闪烁（每秒少于 3 次）。输入行末尾放闪烁方块光标 █（1.1s、steps(1)、不淡变）。标题用打字机方式揭示，行首加 > 或 $，框线和条形用 ASCII 画（+---+、[████░░]）。避免彩色图像、渐变、圆角胶囊、投影和白底 —— 它们会让显像管破功。响应 prefers-reduced-motion：关掉闪烁、光标闪和打字机，直接显示完整文字。"
    },
    "accessibility": {
      "en": "Full-brightness phosphor on black passes contrast easily (#00ff41 on #000 is roughly 13:1), but the glow and the dim 'muted' states eat it — keep body text at full brightness, test any dimmed line against 4.5:1, and remember bright-vs-dim is the only emphasis axis in a one-hue palette, so don't let dimmed text carry essential information.\n\nFlicker and jitter are the real hazard: keep any flashing below three per second and low in amplitude, and under prefers-reduced-motion disable flicker, cursor blink, and typewriter entirely — content must already be present in the DOM and fully readable without the animation.\n\nALL-CAPS log lines and dense monospace slow long-form reading, and some screen readers announce all-caps strings letter by letter — keep caps to short status strings, write body copy in normal case, and never let a long boot sequence gate access to the actual content.",
      "zh": "全亮磷光配黑底轻松过对比度（#00ff41 配 #000 约 13:1），但辉光和暗色「弱化」状态会吃掉它 —— 正文保持全亮，所有压暗的文字实测过 4.5:1；记住单色相 palette 里亮/暗是唯一的强调轴，别让压暗的文字承载关键信息。\n\n闪烁和抖动才是真正的风险：任何闪光控制在每秒 3 次以内、低幅度，并在 prefers-reduced-motion 下彻底关掉闪烁、光标闪和打字机 —— 内容必须已经在 DOM 里，不靠动画也能完整阅读。\n\n全大写日志行和密集等宽字会拖慢长文阅读，有些屏幕阅读器还会把全大写字符串逐字母念出来 —— 大写只留给短状态串，正文用正常大小写，永远别让冗长的开机序列挡住真正的内容。"
    },
    "origin": {
      "en": "Descends from 1970s–80s character terminals, when one electron gun meant one color: green- and amber-phosphor CRTs like IBM's 3270 (1971) and DEC's VT100 (1978) produced the look out of pure hardware necessity. Hollywood turned it into 'hacker' shorthand — WarGames (1983), and above all The Matrix (1999), whose falling green 'digital rain' was created by production designer Simon Whiteley from glyphs scanned out of Japanese cookbooks. The style survives as deliberate retro-futurism: CSS scanlines, boot sequences, and block cursors running on hardware that has never seen a tube.",
      "zh": "源自 1970–80 年代的字符终端，那时一支电子枪就意味着一种颜色：IBM 3270（1971）和 DEC VT100（1978）这类绿磷光、琥珀磷光 CRT 纯粹出于硬件必然造就了这副模样。好莱坞把它变成了「黑客」的速记符号 —— 《战争游戏》（1983），尤其是《黑客帝国》（1999），那场下落的绿色「数字雨」由艺术指导 Simon Whiteley 创作，字形扫描自日文菜谱。这个风格如今作为刻意的复古未来主义存活着：CSS 扫描线、开机序列和方块光标，跑在从没见过显像管的硬件上。"
    },
    "seeAlso": [
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      },
      {
        "slug": "styles/pixel-art",
        "name": "Pixel Art"
      },
      {
        "slug": "styles/vaporwave",
        "name": "Vaporwave"
      }
    ]
  },
  {
    "slug": "frutiger-metro",
    "name": {
      "en": "Frutiger Metro (Vectordelia)",
      "zh": "Frutiger Metro（Vectordelia / 矢量地铁风）"
    },
    "tagline": {
      "en": "Frutiger Metro, also known as Vectordelia, is the late-millennium vector-maximalist graphic style that flourished roughly 2005–2013 alongside Frutiger Aero but moved in the opposite direction: instead of skies and water, it built cities out of pure vector — subway lines, bright saturated gradients, abstract floral flourishes and swirls, humanist sans type, glossy vector shapes, and multicolored silhouette figures. It is the visual language of iPod commercials, Xbox 360 dashboards, Windows 7 stock imagery, and city-themed event graphics: optimistic, urban, geometrically neat, and deliberately non-photorealistic.",
      "zh": "Frutiger Metro，又称 Vectordelia（矢量地铁风），是与 Frutiger Aero 同时流行于大约 2005–2013 年的晚期千禧矢量极大主义风格，但走向完全相反的方向：它不用天空和水，而是用纯矢量建造城市 —— 地铁线路、明亮饱和的渐变块、抽象的花饰与漩涡、人主义无衬线字体、光泽矢量形状，以及多彩的人形剪影。它是 iPod 剪影广告、Xbox 360 仪表板、Windows 7 自带图库和城市主题活动画面的视觉语言：乐观、都市、几何整齐，并刻意不写实。"
    },
    "scope": {
      "en": "Scope: This entry covers the vector-maximalist graphic style commonly called Frutiger Metro or Vectordelia, not Microsoft's Metro/Modern UI design language, which shares the name but is flat, typographic, and tile-based. It sits beside Frutiger Aero as a sibling style, not a subset.",
      "zh": "范围：本条覆盖通常被称为 Frutiger Metro 或 Vectordelia 的矢量极大主义平面风格，不是 Microsoft 的 Metro/Modern UI 设计语言 —— 后者虽然同名，却是扁平、排版驱动、磁贴式的系统。它与 Frutiger Aero 是并列的兄弟风格，而不是子集。"
    },
    "aliases": {
      "en": [
        "city subway map graphics with bright vector shapes",
        "ipod commercial with colorful silhouette people",
        "abstract vector swirls and flowers on gradients",
        "windows 7 stock art with glossy circles",
        "late 2000s vector maximalist event posters",
        "bright flat shapes that look like a metro map"
      ],
      "zh": [
        "亮色矢量形状拼成的城市地铁图",
        "iPod 广告里那种彩色剪影小人",
        "渐变背景上的抽象矢量花纹和漩涡",
        "Windows 7 自带图库那种光泽圆圈",
        "2000 年代末的矢量极大主义活动海报",
        "像地铁线路图一样的鲜亮扁平图形"
      ]
    },
    "signals": [
      {
        "id": "subway-geometry",
        "role": "defining",
        "name": {
          "en": "Subway-map city geometry",
          "zh": "地铁图式城市几何"
        },
        "facet": "layout",
        "description": {
          "en": "Routes, intersections, and stations are drawn as clean vector lines with 90° and 45° angles, rounded caps, and circular nodes — the interface reads like a transit diagram.",
          "zh": "线路、交叉点和站点用干净矢量线绘制，呈 90° 与 45° 转角，端头圆角，节点为圆形 —— 界面读起来像一张交通图。"
        }
      },
      {
        "id": "saturated-gradients",
        "role": "defining",
        "name": {
          "en": "Bright saturated gradient blocks",
          "zh": "明亮饱和的渐变块"
        },
        "facet": "color",
        "description": {
          "en": "Large flat panels use hard, cheerful gradients — magenta #ec008c into cyan #00b6e3 into yellow #ffd400 — at sharp diagonal angles, never soft natural tones.",
          "zh": "大面积扁平面板使用鲜明的硬渐变 —— 品红 #ec008c 过渡到青 #00b6e3 再到黄 #ffd400，呈锐利对角，不用柔和自然色调。"
        }
      },
      {
        "id": "vector-flourishes",
        "role": "defining",
        "name": {
          "en": "Abstract vector flourishes",
          "zh": "抽象矢量花饰"
        },
        "facet": "imagery",
        "description": {
          "en": "Decorative vines, swirls, starbursts, and geometric flowers are drawn as single-color vector shapes with crisp 1–2px outlines, purely illustrative and non-photorealistic.",
          "zh": "装饰性藤蔓、漩涡、星芒和几何花朵以单色矢量形状出现，带 1–2px 清晰轮廓， purely 插画感，不写实物。"
        }
      },
      {
        "id": "humanist-sans",
        "role": "defining",
        "name": {
          "en": "Clean humanist sans",
          "zh": "干净的人主义无衬线"
        },
        "facet": "typography",
        "description": {
          "en": "Text is set in open, rounded-humanist sans-serifs such as Frutiger, Segoe UI, or Myriad — friendly and legible, never chrome or techno.",
          "zh": "文字使用开阔、圆润的人主义无衬线，如 Frutiger、Segoe UI 或 Myriad —— 友好、易读，绝不铬色或科技感。"
        }
      },
      {
        "id": "glossy-vector",
        "role": "defining",
        "name": {
          "en": "Glossy vector shapes",
          "zh": "光泽矢量形状"
        },
        "facet": "surface",
        "description": {
          "en": "Circles, pills, and ribbons carry a white top sheen (linear-gradient rgba(255,255,255,.75) to transparent at ~48%) and a subtle vector shadow, mimicking polished plastic without texture.",
          "zh": "圆形、胶囊和丝带带有白色顶部高光（linear-gradient rgba(255,255,255,.75) 到 transparent，约 48% 处）和淡淡矢量阴影，模拟抛光塑料但无纹理。"
        }
      },
      {
        "id": "silhouette-figures",
        "role": "supporting",
        "name": {
          "en": "Multicolored silhouette figures",
          "zh": "多彩人形剪影"
        },
        "facet": "imagery",
        "description": {
          "en": "Flat human silhouettes in saturated single colors dance, point, or hold devices — the iPod-commercial signature, used as accent rather than hero.",
          "zh": "扁平单色的人形剪影做出跳舞、指向或握持设备的姿态 —— iPod 广告的标志性元素，用作点缀而非主角。"
        }
      },
      {
        "id": "color-block-collage",
        "role": "supporting",
        "name": {
          "en": "Overlapping color-block collage",
          "zh": "重叠色块拼贴"
        },
        "facet": "layout",
        "description": {
          "en": "Panels of pure color overlap at playful angles, creating a layered but flat composition with no cast shadows or simulated depth.",
          "zh": "纯色面板以俏皮角度相互重叠，形成有层次但扁平的构图，没有投影或模拟纵深。"
        }
      },
      {
        "id": "nature-textures",
        "role": "avoid",
        "name": {
          "en": "Nature textures and photorealism",
          "zh": "自然纹理与写实"
        },
        "facet": "surface",
        "description": {
          "en": "Photographic skies, water, grass, glass blur, or organic light effects push the look toward Frutiger Aero — Metro stays synthetic and vector-flat.",
          "zh": "摄影天空、水、草、玻璃模糊或有机光效会把风格推向 Frutiger Aero；Metro 保持合成与矢量扁平。"
        }
      }
    ],
    "confusedWith": {
      "slug": "frutiger-aero",
      "name": "Frutiger Aero",
      "because": {
        "en": "This is Frutiger Metro because the world is built from flat, hard-edged vector graphics — subway maps, gradient blocks, and stylized silhouettes — not from photorealistic skies, water droplets, grass, or glassy nature scenes.",
        "zh": "这是 Frutiger Metro，因为画面由扁平、硬边的矢量图形构成 —— 地铁图、渐变块和风格化剪影 —— 而不是写实的天空、水珠、草地或玻璃自然场景。"
      },
      "wouldBecomeIf": {
        "en": "It would become Frutiger Aero if the vector city dissolved into glossy nature photography — blue skies, green grass, water droplets, bubbles, and soft organic light behind translucent glass panels.",
        "zh": "如果这座矢量城市溶解成光泽的自然摄影 —— 蓝天、绿草、水珠、气泡和半透明玻璃后的柔和有机光 —— 就变成 Frutiger Aero 了。"
      }
    },
    "code": [
      {
        "title": "Subway line route with station nodes",
        "language": "css",
        "code": "background: linear-gradient(90deg, #ec008c 0%, #00b6e3 50%, #ffd400 100%); height: 6px; border-radius: 999px;"
      },
      {
        "title": "Glossy vector circle cap",
        "language": "css",
        "code": "background: radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,.8) 0%, rgba(255,255,255,0) 45%), #ec008c; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,.12);"
      },
      {
        "title": "Abstract flourish as inline SVG tile",
        "language": "html",
        "code": "<svg viewBox='0 0 100 100'><path d='M20,50 Q35,20 50,50 T80,50' fill='none' stroke='%2300b6e3' stroke-width='2'/></svg>"
      }
    ],
    "brief": {
      "en": "Create the piece using Frutiger Metro (Vectordelia). Defining signals: build the layout from subway-map geometry — routes at 90° and 45° with rounded caps, station nodes as 12–18px circles (#ec008c, #00b6e3, #ffd400); fill panels with bright saturated diagonal gradients (magenta #ec008c → cyan #00b6e3 → yellow #ffd400 at 135°); scatter abstract vector flourishes and swirls behind content as single-color shapes with 1–2px crisp outlines (#00a9e0 or #ec008c). Use a clean humanist sans-serif such as Frutiger, Segoe UI, or system-ui; headings at 24–36px with tight tracking, body at 14–16px, ink in white or near-black. Add glossy vector accents — circles, pills, ribbons — with a white top sheen (linear-gradient rgba(255,255,255,.75) to transparent at 48%) and subtle drop shadow (0 4px 10px rgba(0,0,0,.12)). Include multicolored silhouette figures as supporting garnish. Avoid nature photography, water droplets, grass, sky gradients, glass blur, or chrome; those belong to Frutiger Aero. Keep tile spacing at 8–12px, block border-radius at 8–16px, pills at 999px. Ensure text sits on solid or gradient regions that hit 4.5:1 contrast, reserve maximalism for decorative zones, and honor prefers-reduced-motion.",
      "zh": "按 Frutiger Metro（Vectordelia / 矢量地铁风）创建这个界面。决定性信号：用地铁图几何搭建布局 —— 90° 与 45° 线路、圆角端头、12–18px 圆形站点节点（#ec008c、#00b6e3、#ffd400）；面板填充明亮饱和的对角渐变（品红 #ec008c → 青 #00b6e3 → 黄 #ffd400，135°）；在内容背后散布抽象矢量花饰和漩涡，以单色形状加 1–2px 清晰轮廓（#00a9e0 或 #ec008c）。字体使用干净的人主义无衬线，如 Frutiger、Segoe UI 或 system-ui；标题 24–36px、字距收紧，正文 14–16px，文字用白色或近黑色。添加光泽矢量点缀 —— 圆形、胶囊、丝带 —— 带白色顶部高光（linear-gradient rgba(255,255,255,.75) 到 transparent，48% 处）和淡淡投影（0 4px 10px rgba(0,0,0,.12)）。辅以多彩人形剪影作为装饰。避免自然摄影、水珠、草地、天空渐变、玻璃模糊或铬色；那些属于 Frutiger Aero。图块间距保持 8–12px，方块圆角 8–16px，胶囊用 999px。确保文字所在区域达到 4.5:1 对比度，把极大主义留给装饰区，交互控件放在干净高对比度的底板上，并响应 prefers-reduced-motion。"
    },
    "accessibility": {
      "en": "Small white labels on bright magenta or yellow gradient blocks often fail 4.5:1 contrast; place text on the darkest part of a gradient or add a dark translucent scrim behind it.\n\nFast, outward-flowing vector animations can trigger vestibular issues; under prefers-reduced-motion, freeze flourishes and switch any expanding radial burst to an instant fade.\n\nThe dense overlap of swirls, silhouettes, and color blocks raises cognitive load for low-vision and neurodivergent users; reserve the maximalism for decorative regions and keep interactive controls on clean, high-contrast plates.",
      "zh": "亮品红或黄色渐变块上的小字标签常常过不了 4.5:1 对比度；把文字放在渐变最深的区域，或加一层深色半透明遮罩垫底。\n\n快速向外扩散的矢量动画可能诱发前庭不适；在 prefers-reduced-motion 下冻结花饰，并把任何放射状展开动画改为瞬时淡入。\n\n漩涡、剪影和色块密集重叠会加重视障与神经多样性用户的认知负荷；把极大主义留给装饰区，让交互控件保持在高对比度的干净底板上。"
    },
    "origin": {
      "en": "Roughly 2005–2013, peaking in the late 2000s: the look emerged from vector stock-art packs, iPod silhouette advertising, Xbox 360 dashboard visuals, Windows 7 stock imagery, and city-themed event graphics. The label Frutiger Metro is retroactive, coined by online aesthetics communities in the 2010s–2020s by analogy to Adrian Frutiger's humanist type and the urban/subway 'metro' mood; Vectordelia is the term used by CARI/Evan Collins and the Frutiger Aero Archive community. Microsoft's Metro design language shares the name but is a separate, later flat-typographic system.",
      "zh": "大约 2005–2013 年，在 2000 年代末达到高峰：这种外观源于矢量素材包、iPod 剪影广告、Xbox 360 仪表板画面、Windows 7 自带图库和城市主题活动物料。Frutiger Metro 这个标签是追溯性的，由 2010–2020 年代的线上美学社群借 Adrian Frutiger 的人主义字体与都市/地铁氛围创造；Vectordelia 则是 CARI/Evan Collins 与 Frutiger Aero Archive 社群使用的术语。Microsoft 的 Metro 设计语言虽同名，却是另一个更晚的扁平排版系统。"
    },
    "seeAlso": [
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/corporate-memphis",
        "name": "Corporate Memphis"
      },
      {
        "slug": "styles/frutiger-aero",
        "name": "Frutiger Aero"
      }
    ]
  },
  {
    "slug": "anti-design",
    "name": {
      "en": "Anti-design / Dada Web",
      "zh": "反设计 / Dada Web"
    },
    "tagline": {
      "en": "Anti-design / Dada Web treats visual conflict as the whole aesthetic: clashing typefaces, overlapping elements, broken grids, high-saturation colors that fight each other, and system defaults pushed to absurdity. It is deliberately ugly, but ugly by design — a collage-like rebellion against clean UX, grid systems, and brand-safe palettes. It flourishes in experimental portfolios, zine sites, art-school projects, and any screen that wants to look like it escaped from a Dadaist cut-up magazine rather than a design system.",
      "zh": "反设计 / Dada Web 把视觉冲突当作整套审美：冲突的字体、互相重叠的元素、破碎的网格、高饱和度且彼此打架的颜色，以及被推向荒诞的系统默认样式。它是故意做丑，但丑是设计出来的——像拼贴画一样反叛干净 UX、网格系统和品牌安全配色。它在实验性作品集、独立杂志风网站、艺术院校项目，以及任何想让自己看起来像从达达主义剪贴杂志里逃出来的屏幕上繁荣生长。"
    },
    "scope": {
      "en": "Scope: This entry covers the intentionally transgressive web/graphic look. It is distinct from Web Brutalism (honest bare-browser defaults) and Neobrutalism (a styled, thick-border graphic language). The line between anti-design and zine-collage is thin, but anti-design is more about rule-breaking and visual aggression than about editorial collage narrative.",
      "zh": "范围：本条只覆盖故意越界的网页/平面外观。它不同于网页粗野主义（诚实的裸露浏览器默认）和新粗野主义（一套设计好的粗黑边框图形语言）。反设计与杂志拼贴之间的界线很细，但反设计更侧重破坏规则和视觉侵略性，而不是编辑拼贴叙事。"
    },
    "aliases": {
      "en": [
        "website that looks ugly on purpose",
        "overlapping boxes with clashing fonts and colors",
        "interface that breaks every design rule",
        "collage-style site with things stacked on top of each other",
        "dada web design that is anti-ux",
        "screen that looks like a zine exploded"
      ],
      "zh": [
        "故意做得很丑的网站",
        "字体和颜色互相冲突、盒子叠在一起的页面",
        "把每条设计规则都打破的界面",
        "东西层层堆叠的拼贴风网站",
        "反 UX 的达达主义网页设计",
        "像杂志炸开在屏幕上的页面"
      ]
    },
    "signals": [
      {
        "id": "clashing-typography",
        "role": "defining",
        "name": {
          "en": "Intentionally conflicting typefaces",
          "zh": "故意冲突的字体"
        },
        "facet": "typography",
        "description": {
          "en": "Two to four unrelated fonts collide in one view — system serif next to monospace next to a wavy display face — often at mismatched sizes (e.g. 12px body beside 64px headline) and with competing weights.",
          "zh": "一个视图里挤进两到四种互不相关的字体——系统衬线体挨着等宽体，再挨着波浪形展示字体——字号也常常不匹配（例如 12px 正文旁边是 64px 标题），字重互相较劲。"
        }
      },
      {
        "id": "broken-grid",
        "role": "defining",
        "name": {
          "en": "Broken, overlapping grid",
          "zh": "破碎的叠合网格"
        },
        "facet": "layout",
        "description": {
          "en": "Elements ignore a consistent baseline: cards bleed off edges, buttons sit half on top of text, progress bars tilt or wander. Negative space is used as aggressively as positive space.",
          "zh": "元素无视一致的基线：卡片出血到边缘之外，按钮半压在文字上，进度条倾斜或游走。负空间和正空间一样被激进地使用。"
        }
      },
      {
        "id": "clashing-colors",
        "role": "defining",
        "name": {
          "en": "High-saturation color clashes",
          "zh": "高饱和撞色"
        },
        "facet": "color",
        "description": {
          "en": "Neon magenta, acid green, warning orange, and electric blue appear side by side with no attempt at harmony; backgrounds may be #ff0040 behind #00ff66 text, deliberately flirting with illegibility.",
          "zh": "洋红、荧光绿、警示橙和电光蓝并排出现，毫无调和意图；背景可能是 #ff0040，上面放 #00ff66 的文字，故意游走于难读边缘。"
        }
      },
      {
        "id": "system-defaults-pushed",
        "role": "defining",
        "name": {
          "en": "System defaults pushed to absurdity",
          "zh": "系统默认被推至荒诞"
        },
        "facet": "surface",
        "description": {
          "en": "Default form controls, system cursors, scrollbars, and raw HTML elements are retained but exaggerated — giant default checkboxes, default-blue links at 32px, or system alerts used as ornament.",
          "zh": "保留默认表单控件、系统光标、滚动条和原始 HTML 元素，但把它们夸张化——巨大的默认复选框、32px 的默认蓝色链接，或把系统警告框当装饰用。"
        }
      },
      {
        "id": "collage-overlap",
        "role": "defining",
        "name": {
          "en": "Collage-style overlap",
          "zh": "拼贴式重叠"
        },
        "facet": "layout",
        "description": {
          "en": "Images, text blocks, and UI chrome layer on top of one another with mixed blend modes or no blending at all, as if cut out and glued down in stages.",
          "zh": "图片、文字块和界面 chrome 互相层叠，可能使用混合模式，也可能完全不混合，就像被剪下来再分阶段粘上去。"
        }
      },
      {
        "id": "anti-usability",
        "role": "defining",
        "name": {
          "en": "Anti-usability as gesture",
          "zh": "反可用性作为姿态"
        },
        "facet": "motion",
        "description": {
          "en": "Common patterns are deliberately warped — buttons that rotate on hover, cursors replaced by giant symbols, scroll direction inverted — to make the user notice the interface instead of disappearing into it.",
          "zh": "常见模式被故意扭曲——hover 时旋转的按钮、被巨型符号取代的光标、反向滚动——让用户注意到界面本身，而不是消失在其中。"
        }
      },
      {
        "id": "mixed-geometry",
        "role": "supporting",
        "name": {
          "en": "Jarring mixed geometry",
          "zh": "刺眼的混合几何"
        },
        "facet": "geometry",
        "description": {
          "en": "Circles, jagged polygons, dashed rectangles, and hand-drawn squiggles share the same canvas with no unifying radius or proportion system.",
          "zh": "圆形、锯齿多边形、虚线矩形和手绘曲线共享同一块画布，没有统一的圆角或比例系统。"
        }
      },
      {
        "id": "soft-rendering",
        "role": "avoid",
        "name": {
          "en": "Soft shadows and gradients",
          "zh": "柔和阴影与渐变"
        },
        "facet": "depth",
        "description": {
          "en": "Blurred drop shadows, glassmorphism, or gentle gradients signal polish and calm — the exact temperament anti-design tries to destroy.",
          "zh": "模糊的投影、玻璃拟态或温和的渐变意味着精致与平静——这正是反设计要摧毁的气质。"
        }
      }
    ],
    "confusedWith": {
      "slug": "web-brutalism",
      "name": "Web Brutalism",
      "because": {
        "en": "This is Anti-design because the chaos is actively manufactured: overlapping shapes, clashing type, and aggressive color are deliberate aesthetic choices, not the browser's default bare materials.",
        "zh": "这是反设计，因为混乱是被主动制造出来的：重叠的形状、冲突的字体和侵略性的颜色都是刻意的美学选择，而不是浏览器默认的裸露材料。"
      },
      "wouldBecomeIf": {
        "en": "It would become Web Brutalism if the manufactured conflict were stripped away and the page were rebuilt from browser defaults — Times, blue links, white ground, visible document structure, and no decorative rendering at all.",
        "zh": "如果把制造出来的冲突全部剥掉，页面改用浏览器默认值重建——Times 字体、蓝色链接、白底、可见的文档结构、没有任何装饰性渲染——它就变成网页粗野主义了。"
      }
    },
    "code": [
      {
        "title": "Overlapping collage layers with clashing fills",
        "language": "css",
        "code": ".layer { position: absolute; border: 3px dashed #000; background: #ff0040; color: #00ff66; font: 700 28px 'Times New Roman', serif; transform: rotate(-8deg); z-index: 2; }"
      },
      {
        "title": "System default link pushed to absurd scale",
        "language": "css",
        "code": "a { color: #0000ee; text-decoration: underline; font: 32px system-ui; text-transform: uppercase; letter-spacing: -0.04em; }"
      },
      {
        "title": "Anti-grid container: no alignment, just collision",
        "language": "css",
        "code": ".wrapper { display: block; position: relative; background: #f0f; padding: 0; } .wrapper > * { position: absolute; margin: 0; }"
      }
    ],
    "brief": {
      "en": "Create the interface in the Anti-design / Dada Web spirit. Defining signals: intentionally conflicting typefaces (mix Times New Roman, system-ui, and a wavy/italic display face in one view); a broken, overlapping grid where elements bleed and collide; high-saturation color clashes such as #ff0040, #00ff66, #00ccff, and #ffaa00 used side by side; system defaults pushed to absurdity (giant default-blue #0000ee links, oversized raw checkboxes, default scrollbars left visible); collage-style overlap with absolute positioning and mixed z-index; anti-usability gestures like rotating buttons on hover or inverted hover states. Use hard-edged shapes — dashed 3px #000 borders, zero blur on shadows if any, and mismatched border radii (0px, 50%, 24px). Avoid soft rendering: no backdrop-filter, no glass, no gradients, no blurred shadows. Keep the specific color set and rotation angles flexible. Preserve the core function — buttons must still be clickable, progress must still be readable — but make the visual argument loud. Ensure focus states remain visible with a thick #000 outline, and honor prefers-reduced-motion by disabling rotation/tilt animations.",
      "zh": "按反设计 / Dada Web 的精神创建这个界面。定义性信号：故意冲突的字体（一个视图里混用 Times New Roman、system-ui 和波浪/斜体展示字体）；破碎且互相重叠的网格，元素出血、碰撞；高饱和撞色，如 #ff0040、#00ff66、#00ccff、#ffaa00 并排使用；系统默认被推至荒诞（巨大的默认蓝 #0000ee 链接、 oversized 原始复选框、保留默认滚动条）；拼贴式重叠，使用绝对定位和混合的 z-index；反可用性姿态，如 hover 旋转按钮或反向 hover 状态。使用硬边形状——3px 虚线 #000 边框、阴影如有则零模糊、不匹配的圆角（0px、50%、24px）。避免软渲染：不要有 backdrop-filter、玻璃、渐变或模糊阴影。具体配色和旋转角度保持灵活。保留核心功能——按钮仍然可点，进度仍然可读——但让视觉主张很吵。焦点状态必须可见，用粗 #000 outline；响应 prefers-reduced-motion，关闭旋转/倾斜动画。"
    },
    "accessibility": {
      "en": "Anti-design deliberately courts low contrast and cognitive overload, so the real risk is excluding users with low vision, photosensitivity, or cognitive disabilities. Never let decoration block function: keep text on a solid high-contrast backing wherever the user must read or act.\n\nDisable all rotation, shake, cursor replacement, and rapid motion under prefers-reduced-motion, and keep any flashing color transitions below the WCAG 2.5.3 / three-flashes-per-second threshold.\n\nProvide a visible, unambiguous focus indicator (e.g. a 3px solid #000 outline with 2px offset) that survives clashing backgrounds; keyboard users must never have to hunt for the active element.",
      "zh": "反设计故意追求低对比度和高认知负荷，因此真正的风险是把低视力、光敏性或认知障碍用户排除在外。绝不能让装饰阻碍功能：用户必须阅读或操作的地方，文字要放在纯色高对比背板上。\n\n在 prefers-reduced-motion 下关闭所有旋转、晃动、光标替换和快速运动；任何闪烁的颜色过渡都要低于 WCAG 2.5.3 / 每秒三次闪烁的阈值。\n\n提供可见且明确的焦点指示器（例如 3px 实线 #000 outline、2px 偏移），确保它在撞色背景上依然可辨；键盘用户绝不该去找当前焦点在哪。"
    },
    "origin": {
      "en": "The term descends from the Italian Anti-design / Radical Design movement of the late 1960s and early 1970s — groups such as Archizoom and Superstudio in Florence, and figures including Ettore Sottsass, who rejected functionalist 'good design' in favor of provocation, kitsch, and social critique. On the web, the sensibility resurfaced in the late 2010s alongside web brutalism and was increasingly labeled anti-design or 'Dada Web' by the early 2020s as designers deliberately broke grids, clashed type, and weaponized ugliness against the sameness of polished SaaS interfaces.",
      "zh": "这个词源自 1960 年代末到 1970 年代初的意大利反设计 / 激进设计运动——佛罗伦萨的 Archizoom、Superstudio 等团体，以及 Ettore Sottsass 等人——他们拒绝功能主义的「好设计」，转而拥抱挑衅、媚俗和社会批判。在网页领域，这种气质在 2010 年代末随着网页粗野主义重新浮现，到 2020 年代初，越来越多的设计师故意打破网格、冲突字体、把丑陋当作武器来对抗千篇一律的精致 SaaS 界面，这种风格也逐渐被贴上反设计或「Dada Web」的标签。"
    },
    "seeAlso": [
      {
        "slug": "styles/zine-collage",
        "name": "Zine Collage"
      },
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      },
      {
        "slug": "styles/web-brutalism",
        "name": "Web Brutalism"
      }
    ]
  },
  {
    "slug": "acid-graphics",
    "name": {
      "en": "Acid Graphics",
      "zh": "酸性图形（Acid Graphics）"
    },
    "tagline": {
      "en": "Acid Graphics is the dark, psychedelic cousin of millennium chrome: black backgrounds set off by toxic neon gradients, metallic 3D lettering that looks extruded from liquid mercury, and wireframe grids that melt, twist, and mirror themselves into distortion. It grew out of 1990s acid-house and rave flyers, then was revived in the 2010s as a club-culture visual language for electronic music, streetwear, and underground editorial — less 'future that shipped' than a future seen through a funhouse lens.",
      "zh": "酸性图形是千禧铬色风格的暗黑迷幻表亲：黑色底上炸开高饱和的霓虹渐变，像从液态汞里刚挤出来的金属 3D 字，以及融化、扭曲、镜像变形的线框网格。它从 1990 年代 acid house 与锐舞传单中生长出来，又在 2010 年代复苏，成为电子音乐、街头服饰和地下编辑设计的俱乐部视觉语言 —— 与其说是「已经发货的未来」，不如说是透过哈哈镜看到的未来。"
    },
    "scope": {
      "en": "Scope: This entry covers the graphic/UI look, not the broader Y2K fashion revival or the brighter 'chrome bubblegum' branch of turn-of-millennium design. The melancholic neon-grid strain is closer to synthwave/retrowave; this entry stays with the distorted, subcultural rave signal.",
      "zh": "范围：本条只覆盖平面/UI 视觉，不包含更广泛的 Y2K 时尚复兴，也不包含千禧之交更明亮的「铬加泡泡糖」分支。偏忧郁的霓虹网格复古支脉更接近 Synthwave/Retrowave；本条锁定的是扭曲的、亚文化的锐舞信号。"
    },
    "aliases": {
      "en": [
        "that dark chrome 3d text with melting grids",
        "black background with neon green and pink gradients",
        "rave flyer style with distorted mirrors and liquid metal",
        "psychedelic chrome typography on black",
        "club poster look with warped wireframe grids",
        "acid house graphic design with metallic letters"
      ],
      "zh": [
        "暗黑背景上融化网格的铬金属 3D 字",
        "黑色底配荧光绿和粉色渐变",
        "带扭曲镜面和液态金属的锐舞传单风",
        "黑色底上的迷幻铬金属字体",
        "扭曲线框网格的俱乐部海报风",
        "金属字母的 acid house 平面设计"
      ]
    },
    "signals": [
      {
        "id": "chrome-3d-type",
        "role": "defining",
        "name": {
          "en": "Liquid chrome 3D lettering",
          "zh": "液态铬 3D 字体"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms are extruded, beveled, and filled with mirror-to-dark chrome gradients so they read as freshly cast metal; stacked text-shadows give them a 3D drop.",
          "zh": "字母被挤出、倒角，并填充镜面到暗铬的渐变，读起来像刚铸出来的金属；堆叠的 text-shadow 给它 3D 厚度。"
        }
      },
      {
        "id": "liquid-distortion",
        "role": "defining",
        "name": {
          "en": "Liquid distortion",
          "zh": "液态扭曲"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms appear to melt, drip, or warp like viscous fluid — letters sag, grids liquefy, and borders bulge as if gravity is optional.",
          "zh": "形态像黏稠液体一样融化、滴落或弯折 —— 字母下垂、网格液化、边框鼓胀，仿佛重力不存在。"
        }
      },
      {
        "id": "neon-acid-palette",
        "role": "defining",
        "name": {
          "en": "Toxic neon gradients on black",
          "zh": "黑色底上的毒性霓虹渐变"
        },
        "facet": "color",
        "description": {
          "en": "High-saturation acid green (#39ff14), hot magenta (#ff00a0), electric cyan (#00f0ff), and toxic yellow (#ccff00) glow against a near-black ground (#050505–#0a0a0a).",
          "zh": "高饱和的酸性绿（#39ff14）、热粉（#ff00a0）、电光青（#00f0ff）和毒性黄（#ccff00）在近黑底（#050505–#0a0a0a）上发光。"
        }
      },
      {
        "id": "warped-grid",
        "role": "defining",
        "name": {
          "en": "Warped wireframe grids",
          "zh": "扭曲的线框网格"
        },
        "facet": "geometry",
        "description": {
          "en": "Perspective grids, wireframe globes, and mesh planes bend, twist, or dissolve — the grid is a structure being pulled apart, not a neutral scaffold.",
          "zh": "透视网格、线框球体和网格平面被弯折、扭转或溶解 —— 网格是被拉扯的结构，而不是中性的脚手架。"
        }
      },
      {
        "id": "distorted-mirror",
        "role": "defining",
        "name": {
          "en": "Distorted mirror surfaces",
          "zh": "扭曲的镜面表面"
        },
        "facet": "surface",
        "description": {
          "en": "Chrome and glass planes are twisted into funhouse reflections — rippled, stretched, or fragmented rather than flat and pristine.",
          "zh": "铬和玻璃平面被扭成哈哈镜式的反射 —— 起皱、拉伸或碎裂，而不是平整光洁。"
        }
      },
      {
        "id": "rave-subculture",
        "role": "defining",
        "name": {
          "en": "Rave and club subculture mood",
          "zh": "锐舞与俱乐部亚文化气质"
        },
        "facet": "imagery",
        "description": {
          "en": "The imagery belongs to warehouse parties and electronic music: dark, maximal, psychedelic, and anti-polish — not corporate or optimistic.",
          "zh": "图像属于仓库派对和电子音乐：暗黑、极繁、迷幻、反精致 —— 不企业、不乐观。"
        }
      },
      {
        "id": "maximal-layering",
        "role": "supporting",
        "name": {
          "en": "Maximal layered density",
          "zh": "极繁层叠密度"
        },
        "facet": "layout",
        "description": {
          "en": "Type, grids, chrome shapes, and neon washes overlap in dense collages with little breathing room, creating a horror-vacui effect.",
          "zh": "字体、网格、铬色形状和霓虹洗色互相重叠，形成 horror vacui（恐惧留白）般的密集拼贴。"
        }
      },
      {
        "id": "bubblegum-optimism",
        "role": "avoid",
        "name": {
          "en": "Clean silver bubblegum optimism",
          "zh": "干净的银色泡泡糖乐观主义"
        },
        "facet": "color",
        "description": {
          "en": "Bright electric-blue/silver/white palettes, clean chrome, and bubbly gel buttons signal Y2K — this style stays darker and more twisted.",
          "zh": "明亮的电光蓝/银/白配色、干净的铬和泡泡糖凝胶按钮指向 Y2K —— 本条更暗、更扭曲。"
        }
      }
    ],
    "confusedWith": {
      "slug": "y2k",
      "name": "Y2K Digital Aesthetic",
      "because": {
        "en": "This is Acid Graphics because the chrome is twisted, the ground is black, and the mood is underground rave — toxic neon gradients, melting grids, and funhouse mirrors replace Y2K's silver bubblegum optimism.",
        "zh": "这是酸性图形，因为这里的铬是扭曲的，底色是黑的，气质是地下锐舞 —— 毒性霓虹渐变、融化网格和哈哈镜取代了 Y2K 的银色泡泡糖乐观主义。"
      },
      "wouldBecomeIf": {
        "en": "It would become Y2K Digital Aesthetic if the background lightened, the chrome straightened into clean mirror-metal, the palette shifted to electric blue/silver/white, and the tone turned optimistic and bubbly.",
        "zh": "如果底色变亮、铬拉直成干净的镜面金属、配色转向电光蓝/银/白，气质变得乐观又泡泡糖，就变成 Y2K 数字美学了。"
      }
    },
    "code": [
      {
        "title": "Liquid chrome 3D text with stacked shadows",
        "language": "css",
        "code": "color: #e0e0e0; text-shadow: 0 1px 0 #999, 0 2px 0 #888, 0 3px 0 #777, 0 4px 0 #666, 0 5px 0 #555, 0 6px 12px rgba(0,0,0,.8); background: linear-gradient(180deg, #fff 0%, #aaa 45%, #555 55%, #ddd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      },
      {
        "title": "Toxic neon gradient fill",
        "language": "css",
        "code": "background: linear-gradient(135deg, #39ff14 0%, #00f0ff 50%, #ff00a0 100%); box-shadow: 0 0 18px rgba(57,255,20,.45), 0 0 36px rgba(255,0,160,.25);"
      },
      {
        "title": "Warped wireframe grid with perspective",
        "language": "css",
        "code": "background: linear-gradient(90deg, rgba(57,255,20,.35) 1px, transparent 1px) 0 0 / 24px 24px, linear-gradient(rgba(57,255,20,.35) 1px, transparent 1px) 0 0 / 24px 24px; transform: perspective(260px) rotateX(55deg) skewX(-8deg);"
      }
    ],
    "brief": {
      "en": "Create the surface using Acid Graphics. Defining signals: a near-black ground (#050505 or #0a0a0a) set against toxic neon gradients — acid green (#39ff14), hot magenta (#ff00a0), electric cyan (#00f0ff), and toxic yellow (#ccff00); metallic 3D lettering rendered with stacked text-shadows and a chrome gradient fill (`background-clip: text` with `#e0e0e0 → #8a8a8a → #ffffff → #707070 → #e0e0e0`); wireframe grids that bend, twist, or melt using CSS transforms, SVG filters, or perspective distortion; distorted mirror surfaces that warp reflections like funhouse glass; dense maximal layering where type, grids, and chrome shapes overlap. Keep the specific acid hues and grid density flexible. Use compressed grotesks such as `Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif` for display type; set chrome type with `-webkit-background-clip: text; color: transparent;` plus a dark drop-shadow for legibility. Avoid Y2K's clean silver bubblegum optimism — if the palette turns electric-blue/silver/white and the grids straighten, you've crossed into Y2K. Preserve contrast by keeping functional text off the neon gradients (place labels on solid black or dark grey #1a1a1a panels), provide visible focus states, and disable any liquid shimmer/warp animations under prefers-reduced-motion.",
      "zh": "用酸性图形（Acid Graphics）创建这个界面。决定性信号：近黑底（#050505 或 #0a0a0a）上铺高饱和毒性霓虹渐变 —— 酸性绿（#39ff14）、热粉（#ff00a0）、电光青（#00f0ff）和毒性黄（#ccff00）；用堆叠 text-shadow 加铬渐变填充（`background-clip: text`，色标 `#e0e0e0 → #8a8a8a → #ffffff → #707070 → #e0e0e0`）做出金属 3D 字；用 CSS transform、SVG filter 或透视变形让线框网格弯折、扭转或融化；让镜面表面像哈哈镜一样扭曲反射；把字体、网格和铬色形状 dense 地重叠。具体酸色和网格密度保持灵活。展示字体用压缩 grotesk，例如 `Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif`；铬字用 `-webkit-background-clip: text; color: transparent;` 并加深色 drop-shadow 保证可读。不要滑向 Y2K 的干净银色泡泡糖乐观主义 —— 如果配色变成电光蓝/银/白、网格拉直，就越界了。把可读标签放在纯黑或深灰 #1a1a1a 面板上，不要直接压在霓虹渐变上；焦点状态可见；在 prefers-reduced-motion 下关闭液体闪光/扭曲动画。"
    },
    "accessibility": {
      "en": "Acid Graphics loves maximum contrast in hue but minimum contrast in value: neon gradients on black can be dazzling yet the mid-tones within them often fail 4.5:1 for text. Keep readable labels on solid dark panels (#1a1a1a or #0f0f0f) rather than directly over neon gradients.\n\nLiquid distortion, warping grids, and shimmering chrome can trigger vestibular or photosensitive responses; respect prefers-reduced-motion by freezing or simplifying these animations, and keep any flashing or rapid cycling below the WCAG three-flashes-per-second threshold.\n\nMaximal layering and distorted letterforms hurt readability and cognitive parsing; reserve acid effects for headings, hero art, and decorative chrome, and keep body text in a plain sans-serif at a comfortable size with clear hierarchy.",
      "zh": "酸性图形在色相上追求极高对比，但在明度上却往往很低：霓虹渐变压在黑底上虽然耀眼，但其中间调常过不了 4.5:1。把可读标签放在纯色暗面板（#1a1a1a 或 #0f0f0f）上，不要直接压在霓虹渐变上。\n\n液态扭曲、弯折网格和闪烁铬光可能诱发前庭不适或光敏反应；在 prefers-reduced-motion 下冻结或简化这些动画，任何闪烁或快速循环都要低于 WCAG 每秒三次闪烁的阈值。\n\n极繁层叠和扭曲字体会损害可读性与认知解析；把酸性效果留给标题、主视觉和装饰铬字，正文保持普通无衬线、字号舒适、层级清晰。"
    },
    "origin": {
      "en": "Acid Graphics grew directly from the flyer art of the 1990s acid-house and rave scenes in the UK and Europe, where black backgrounds, day-glo colors, warped type, and sci-fi textures advertised illegal warehouse parties. In a 2019 Eye on Design survey, designer and art director Hugo Hoppmann cited David Rudnick as the touchstone of the contemporary acid-mania, and the Instagram account @acidgraphix — started by designer Luigi Brusciano in 2018 — became a key showcase for the revived style. The contemporary wave also includes designers such as Anja Kaiser and Jonathan Castro, and has spread through electronic-music cover art, club posters, streetwear branding, and experimental editorial.",
      "zh": "酸性图形直接源自 1990 年代英国和欧洲的 acid house 与锐舞传单视觉：黑底、荧光色、扭曲字体和科幻纹理曾为非法仓库派对做广告。2019 年 Eye on Design 的一篇调查中，设计师兼艺术总监 Hugo Hoppmann 把 David Rudnick 列为当代酸性风潮的范本；设计师 Luigi Brusciano 于 2018 年创办的 Instagram 账号 @acidgraphix 则成为该风格复苏的重要展示窗口。当代浪潮还包括 Anja Kaiser、Jonathan Castro 等设计师，并已扩散到电子音乐封面、俱乐部海报、街头服饰品牌和实验性编辑设计。"
    },
    "seeAlso": [
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/vaporwave",
        "name": "Vaporwave"
      }
    ]
  },
  {
    "slug": "risograph",
    "name": {
      "en": "Risograph",
      "zh": "孔版印刷风（Risograph / Riso）"
    },
    "tagline": {
      "en": "Risograph is the look of a Japanese stencil duplicator pushed into graphic art: layered spot colors — hot pink, cyan, sunflower yellow — printed slightly out of register, leaving halos and color moiré; a visible grain from soy-based inks; and edges that look cut from a stencil rather than rendered by a laser. It migrated from churches and schools in the 1980s into zines, posters, and indie publishing, where its accidents became the signature.",
      "zh": "孔版印刷风是把日本理想（Riso）公司的数字模版复印机推进平面艺术后形成的观感：用限定专色——荧光粉、青蓝、向日葵黄——一层层叠印，每层都轻微错位，留下光晕和叠色摩尔纹；大豆油墨带来可见颗粒；边缘像从蜡纸上裁下来，而不是激光切割般锐利。它在 1980 年代从教堂和学校走进 zine、海报和独立出版，原本的「失误」反倒成了签名。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual style of Risograph prints as adapted to UI and graphic design. It is distinct from screen printing (which uses mesh and squeegee, not a digital stencil master) and from Memphis-style pattern collage — both are common neighbors.",
      "zh": "范围：本条覆盖 Risograph 印刷作为 UI 与平面设计视觉风格的转译。它不同于丝网印刷（用网版和刮板，不是数字模版滚筒），也不同于孟菲斯式的图案拼贴——两者都是常见邻居。"
    },
    "aliases": {
      "en": [
        "that grainy zine print with bright pink and blue shifted layers",
        "screen-printed look with color overlap and dots",
        "indie poster style with limited neon colors",
        "rough stencil print with visible texture",
        "duotone flyer where the colors don't quite line up",
        "soy ink print with misregistered edges"
      ],
      "zh": [
        "那种亮粉蓝两层错位的颗粒感 zine 印刷",
        "颜色叠在一起、带网点的丝网印观感",
        "限量霓虹色的小众海报风",
        "边缘粗糙、能看见纹理的模版印刷",
        "双色/三色对不准颜色的传单",
        "大豆油墨印出来、边缘错位的印刷品"
      ]
    },
    "signals": [
      {
        "id": "spot-overprint",
        "role": "defining",
        "name": {
          "en": "Limited spot-color overprint",
          "zh": "限定专色叠印"
        },
        "facet": "color",
        "description": {
          "en": "Palette is built from separate opaque inks — hot pink #ff4da6, cyan #00b4d8, sunflower #ffd60a — layered so each new color physically prints on top of the last, producing new hues at overlaps.",
          "zh": "色板由不透明的专色油墨构成——荧光粉 #ff4da6、青蓝 #00b4d8、向日葵黄 #ffd60a——每一层都实实在在地叠在上一层上，重叠处会生成新的色相。"
        }
      },
      {
        "id": "misregistration",
        "role": "defining",
        "name": {
          "en": "Deliberate misregistration",
          "zh": "刻意错位"
        },
        "facet": "color",
        "description": {
          "en": "Color channels sit a few pixels off from one another (translate 1–3px), creating visible halos and moiré; perfect alignment reads as digital, not Riso.",
          "zh": "各色版彼此偏移 1–3px，形成明显光晕和叠色摩尔纹；完全对齐看起来是数字稿，不是 Riso。"
        }
      },
      {
        "id": "grain-stipple",
        "role": "defining",
        "name": {
          "en": "Soy-ink grain and stipple",
          "zh": "大豆油墨颗粒"
        },
        "facet": "surface",
        "description": {
          "en": "Flat fills are broken by a fine, irregular dot grain — especially visible in darker inks — from the soy-oil based ink and stencil mesh; add it with a noise texture at ~15–25% opacity.",
          "zh": "平涂色块被细密不规则的网点颗粒打破，在深色油墨上尤其明显；用 15–25% 不透明度的噪点纹理来模拟大豆油墨透过模版网孔的效果。"
        }
      },
      {
        "id": "stencil-edges",
        "role": "defining",
        "name": {
          "en": "Rough stencil-cut edges",
          "zh": "粗糙模版边缘"
        },
        "facet": "geometry",
        "description": {
          "en": "Shapes have slightly jagged or feathered outlines, as if cut from a wax stencil; crisp 1px vector edges look pre-press, not printed.",
          "zh": "形状带有轻微锯齿或羽化轮廓，像从蜡纸上裁下来；1px 的锐利矢量边缘是印前稿，不是印刷品。"
        }
      },
      {
        "id": "duotone-tritone",
        "role": "defining",
        "name": {
          "en": "High-contrast duotone or tritone",
          "zh": "高对比双色/三色"
        },
        "facet": "color",
        "description": {
          "en": "Compositions rely on two or three flat inks against off-white paper; the limitation is part of the look — more than four colors stops being Riso.",
          "zh": "画面只靠两到三种平涂油墨衬在米白纸张上；这种限制本身就是风格的一部分，超过四色就不是 Riso 了。"
        }
      },
      {
        "id": "newsprint-paper",
        "role": "supporting",
        "name": {
          "en": "Off-white porous paper",
          "zh": "米白纸/新闻纸"
        },
        "facet": "surface",
        "description": {
          "en": "Background reads as uncoated cream or newsprint (#f6f1e7 or #f4ecd8), soaking ink and letting grain show through.",
          "zh": "背景要读出无涂布米纸或新闻纸的质感（#f6f1e7 或 #f4ecd8），吸墨并让颗粒透出来。"
        }
      },
      {
        "id": "bold-type",
        "role": "variable",
        "name": {
          "en": "Bold hand-set type",
          "zh": "粗重手排字体"
        },
        "facet": "typography",
        "description": {
          "en": "Headings often use chunky grotesks or hand-lettered forms; body stays plain because the texture does the talking.",
          "zh": "标题常用粗壮 grotesk 或手写感字体；正文保持朴素，因为纹理已经是主角。"
        }
      },
      {
        "id": "cmyk-gradients",
        "role": "avoid",
        "name": {
          "en": "Smooth gradients or photorealism",
          "zh": "平滑渐变或写实照片"
        },
        "facet": "surface",
        "description": {
          "en": "Continuous blends, drop shadows, and full-color photos belong to offset/digital printing; they kill the stencil-print read.",
          "zh": "连续渐变、投影、全彩照片属于胶印/数字印刷；它们会立刻破坏模版印刷的观感。"
        }
      }
    ],
    "confusedWith": {
      "slug": "memphis",
      "name": "Memphis",
      "because": {
        "en": "This is Risograph because the style comes from printing artifacts: grainy ink texture, spot-color overprints shifted slightly out of register, and stencil-cut edges — not from toy geometry, squiggles, or allover pattern.",
        "zh": "这是孔版印刷风，因为它的气质来自印刷痕迹：颗粒感油墨纹理、轻微错位的专色叠印，以及模版裁切的边缘——而不是几何图案、波浪线或满版拼贴。"
      },
      "wouldBecomeIf": {
        "en": "It would become Memphis if you replaced the ink grain and misregistration with flat squiggles, zigzags, dots, and triangles on a white ground, making pattern the subject instead of print texture.",
        "zh": "如果把油墨颗粒和错位替换成白底上的波浪线、锯齿、圆点和三角，让图案本身成为主角，就变成孟菲斯了。"
      }
    },
    "code": [
      {
        "title": "Spot-color misregistration stack",
        "language": "css",
        "code": ".riso-pink { color: #ff4da6; transform: translate(-1.5px, -1px); }\n.riso-cyan { color: #00b4d8; transform: translate(1.5px, 1px); }\n.riso-yellow { color: #ffd60a; transform: translate(0, -1.5px); }"
      },
      {
        "title": "Soy-ink grain texture over a flat fill",
        "language": "css",
        "code": "background-color: #ff4da6;\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.22'/%3E%3C/svg%3E\");\nmix-blend-mode: multiply;"
      },
      {
        "title": "Duotone card construction",
        "language": "css",
        "code": "background: #f6f1e7;\nborder: 2px solid #1a1a1a;\nbox-shadow: none;\nfilter: contrast(1.05);"
      }
    ],
    "brief": {
      "en": "Create the surface in the spirit of Risograph (Riso) print. Defining signals: a limited palette of opaque spot inks — hot pink #ff4da6, cyan #00b4d8, sunflower #ffd60a, and black #1a1a1a — layered as separate passes so overlaps create new hues (pink over cyan makes violet, yellow over pink makes orange); deliberate misregistration of 1–3px between color passes to produce visible halos and color moiré; a fine irregular grain/stipple texture over every flat fill, simulating soy-based ink pushed through a stencil mesh at ~15–25% opacity; rough stencil-cut edges with slight feathering rather than crisp vector outlines; high-contrast duotone or tritone layouts against an off-white porous paper ground (#f6f1e7). Use chunky grotesk or hand-lettered headings, plain body text, and no gradients, shadows, or photorealism. Buttons and cards should feel like separate ink passes — flat color fields with the grain texture, 2px solid black outlines optional. Do not drift into Memphis; the decisive difference is that Risograph is print-texture-first (grain, misregistration, spot overprint) while Memphis is pattern-first (squiggles, zigzags, geometric confetti). Preserve text contrast: black ink on the spot colors usually passes; thin type over textured fills can fail, so keep labels large and on solid panels.",
      "zh": "按孔版印刷风（Risograph / Riso）创建这个界面。决定性信号：限定的不透明专色油墨——荧光粉 #ff4da6、青蓝 #00b4d8、向日葵黄 #ffd60a 和黑色 #1a1a1a——作为独立色版层层叠印，让重叠处产生新色相（粉叠青成紫，黄叠粉成橙）；各色版之间刻意错位 1–3px，形成可见光晕和叠色摩尔纹；每一块平涂色块上都覆盖细密不规则的颗粒/网点纹理，模拟大豆油墨透过模版网孔的效果，透明度约 15–25%；边缘要有轻微锯齿或羽化，像蜡纸裁切，而不是锐利矢量线；整体是高对比双色/三色布局，衬在米白多孔纸底（#f6f1e7）上。标题用粗壮 grotesk 或手写感字体，正文保持朴素，禁止渐变、投影和写实照片。按钮和卡片应像独立油墨 pass——平涂色块带颗粒纹理，可加 2px 黑色实线描边。不要滑向孟菲斯；决定性区别在于孔版印刷风是「印刷纹理优先」（颗粒、错位、专色叠印），而孟菲斯是「图案优先」（波浪线、锯齿、几何纸屑）。保证文字对比度：黑色油墨压在专色上通常能过；细字压在纹理填充上容易失败，所以标签要够大、放在实色面板上。"
    },
    "accessibility": {
      "en": "Misregistration and grain are decorative, but they must not hide information: never set small body text directly over a grain texture without a solid backing panel; measure 4.5:1 for any text ink against its paper ground.\n\nThe limited spot palette can produce unpredictable combinations where two inks overlap; check the resulting mixed colors for contrast, especially yellow (#ffd60a) overlaid with black text.\n\nHeavy texture and high chroma increase visual fatigue; reserve dense grain for decorative zones, offer a reduced-texture mode under prefers-reduced-motion or a user toggle, and avoid rapid flashing or high-frequency dot patterns.",
      "zh": "错位和颗粒都是装饰，但不能因此隐藏信息：绝不要把小号正文直接压在颗粒纹理上而不垫实色背板；任何文字油墨与其纸底都要实测 4.5:1。\n\n限定的专色盘在叠印后会产生不可预测的混合色；要检查叠出的混合色对比度，尤其注意黄色（#ffd60a）上压黑字的情况。\n\n重纹理和高饱和度会增加视觉疲劳；把密集颗粒留给装饰区，在 prefers-reduced-motion 或用户开关下提供低纹理模式，并避免快速闪烁或高频点阵。"
    },
    "origin": {
      "en": "Riso Kagaku Corporation developed the Risograph in Japan in the early 1980s as a high-speed, low-cost stencil duplicator for schools, churches, and offices, using soy-based inks and a digital master wrapped around an ink drum. It remained an office tool through the 1990s, then was adopted by independent publishers, zine makers, and graphic artists in the 2000s–2010s who turned its registration drift, ink grain, and limited color passes into an intentional aesthetic.",
      "zh": "理想科学工业（Riso Kagaku Corporation）在 1980 年代初期的日本开发出 Risograph，作为面向学校、教堂和办公室的高速低成本数字模版复印机，使用大豆油墨和以数字母版包裹的油墨滚筒。它在整个 1990 年代仍是办公设备，随后在 2000–2010 年代被独立出版人、zine 制作者和平面艺术家采纳，把套印漂移、油墨颗粒和有限色版变成了有意为之的美学。"
    },
    "seeAlso": [
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      },
      {
        "slug": "styles/zine-collage",
        "name": "Zine Collage"
      },
      {
        "slug": "styles/pop-art",
        "name": "Pop Art"
      }
    ]
  },
  {
    "slug": "zine-collage",
    "name": {
      "en": "Zine / Collage",
      "zh": "独立杂志拼贴（Zine / Collage）"
    },
    "tagline": {
      "en": "Zine / Collage treats the interface as a photocopied, hand-cut magazine spread: pieces of paper are torn or trimmed, layered at odd angles, and taped into place with masking tape; text alternates between handwriting, typewriter, and clipped headlines, all sitting on a grainy, high-contrast, DIY surface. It is not polished — the scissor slip, the tape wrinkle, and the over-copied halftone are the whole point. The look migrated from punk fanzines and Riot Grrrl photocopies into web portfolios and editorial sites looking for warmth outside the SaaS grid.",
      "zh": "独立杂志拼贴把界面当成一份复印过、手工剪贴的杂志内页：纸张被撕下或裁开，以奇怪角度层层叠放，再用胶带固定；文字在手写、打字机和剪报标题之间切换，全部落在粗糙、高对比、DIY 质感的表面上。它不精致——剪歪的边、皱起的胶带、复印过头的网点就是全部看点。这种风格从朋克 fanzine 和 Riot Grrrl 的复印件一路走进网页作品集和编辑型站点，寻找 SaaS 网格之外的手作温度。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual language of cut-and-paste, self-published zines translated into UI. It overlaps with risograph printing and Memphis-style pattern energy, but zine collage is specifically paper-first: torn edges, tape, handwriting, and photocopier artifacts. Corporate illustration systems and clean mood boards are not zine collage.",
      "zh": "范围：本条覆盖「剪贴独立杂志」视觉语言被转译成 UI 的部分。它与 Riso 印刷和孟菲斯风格的图案能量有交集，但独立杂志拼贴必须是「纸张优先」：撕边、胶带、手写、复印机痕迹。企业插画系统或干净的情绪板不属于这个风格。"
    },
    "aliases": {
      "en": [
        "a website that looks like a photocopied fanzine",
        "ui with torn paper edges and masking tape",
        "cut-out magazine letters and handwritten labels",
        "that diy scrapbook collage style",
        "interface that looks like it was glued together by hand",
        "xerox grain and high-contrast zine aesthetic"
      ],
      "zh": [
        "看起来像复印 fanzine 的网站",
        "带撕纸边缘和胶带贴的 UI",
        "剪报字母加手写标签",
        "那种 DIY 剪贴簿拼贴风",
        "界面像被人手工粘起来一样",
        "Xerox 颗粒加高对比 zine 美学"
      ]
    },
    "signals": [
      {
        "id": "torn-paper-edges",
        "role": "defining",
        "name": {
          "en": "Torn or irregular paper edges",
          "zh": "撕裂或不规则的纸边"
        },
        "facet": "geometry",
        "description": {
          "en": "Surfaces are not clean vector rectangles; edges look torn, scissor-cut, deckled, or clipped from another page, often exposed as a 1–2px ragged silhouette.",
          "zh": "表面不是干净的矢量矩形；边缘看起来是撕破、剪刀裁切或从另一页剪下来的，常常露出 1–2px 的锯齿状深色轮廓。"
        }
      },
      {
        "id": "masking-tape-hinges",
        "role": "defining",
        "name": {
          "en": "Visible masking tape hinges",
          "zh": "可见的胶带固定点"
        },
        "facet": "surface",
        "description": {
          "en": "Strips of translucent tape — usually beige or washi yellow — hold pieces down at corners or seams; they are rotated a few degrees and often overlap the layer beneath.",
          "zh": "半透明胶带——通常是米色或和纸黄色——贴在角落或接缝处把纸片压住；它们会旋转几度，而且常常压在下层纸张之上。"
        }
      },
      {
        "id": "photocopy-grain",
        "role": "defining",
        "name": {
          "en": "Photocopied halftone grain",
          "zh": "复印网点颗粒"
        },
        "facet": "surface",
        "description": {
          "en": "High-contrast black-only or limited-spot images show dot halftone, xerox streaks, and paper fiber texture; gradients are replaced by grainy black dots.",
          "zh": "高对比的黑色-only 或有限专色图像呈现网点、施乐复印条纹和纸张纤维纹理；渐变被颗粒感的黑点取代。"
        }
      },
      {
        "id": "hand-mixed-typography",
        "role": "defining",
        "name": {
          "en": "Handwriting meets typewriter meets clipped type",
          "zh": "手写、打字机与剪报字体混排"
        },
        "facet": "typography",
        "description": {
          "en": "Labels appear in marker handwriting, monospaced typewriter, or all-caps cutout letters — never one slick font family carrying the whole page.",
          "zh": "标签用马克笔手写、等宽打字机或全大写剪报字母——绝不让一套 slick 的字体家族贯穿整页。"
        }
      },
      {
        "id": "layered-cutouts",
        "role": "defining",
        "name": {
          "en": "Layered cutouts with paper shadows",
          "zh": "带纸张阴影的层叠剪贴"
        },
        "facet": "depth",
        "description": {
          "en": "Pieces overlap at slight rotations (-3° to +4°), each casting a soft, low offset shadow that reads as physical paper thickness rather than elevation.",
          "zh": "纸片以轻微角度（-3° 到 +4°）互相重叠，各自投下柔和的低偏移阴影，读出的是纸张厚度，而不是数字高程。"
        }
      },
      {
        "id": "diy-imperfection",
        "role": "defining",
        "name": {
          "en": "DIY imperfection as ornament",
          "zh": "把 DIY 不完美当装饰"
        },
        "facet": "layout",
        "description": {
          "en": "Misalignment, wobbly hand-drawn rules, glue smears, and visible scissor slips are retained on purpose; symmetry and pixel precision signal something else.",
          "zh": "错位、歪歪扭扭的手绘分隔线、胶水痕迹、明显的剪刀滑口被故意保留；对称和像素级精确意味着别的风格。"
        }
      },
      {
        "id": "limited-spot-palette",
        "role": "supporting",
        "name": {
          "en": "Limited spot-color palette",
          "zh": "有限专色板"
        },
        "facet": "color",
        "description": {
          "en": "Black ink plus one or two flat accent colors — hot pink, mustard, cyan — on off-white newsprint; the palette mimics cheap riso or xerox duplication.",
          "zh": "黑色油墨加一到两种平涂强调色——艳粉、芥末黄、青色——印在米白色新闻纸上；调色板模仿廉价 Riso 或复印效果。"
        }
      },
      {
        "id": "paper-source-material",
        "role": "variable",
        "name": {
          "en": "Source material on paper",
          "zh": "纸上的素材来源"
        },
        "facet": "imagery",
        "description": {
          "en": "Magazine photos, ticket stubs, receipts, stamps, and doodles can decorate the surface; what matters is that each piece reads as found and pasted.",
          "zh": "杂志照片、车票、收据、邮票和涂鸦可以装饰表面；关键是每一件都要读出「被发现并贴上去」的感觉。"
        }
      },
      {
        "id": "digital-glass",
        "role": "avoid",
        "name": {
          "en": "Digital glass or blur",
          "zh": "数字玻璃或模糊"
        },
        "facet": "surface",
        "description": {
          "en": "backdrop-filter blur, translucent panels, and lens-like gloss dissolve the paper-and-tape materiality — that look is glassmorphism or Liquid Glass, not zine.",
          "zh": "backdrop-filter 模糊、半透明面板和透镜式光泽会瓦解纸张加胶带的材质感——那是玻璃拟态或液态玻璃，不是独立杂志。"
        }
      }
    ],
    "confusedWith": {
      "slug": "anti-design",
      "name": "Anti-design",
      "because": {
        "en": "This is Zine / Collage because the artifacts are physical paper things — torn edges, masking tape, photocopier grain, handwriting, and layered cutouts. The imperfection comes from scissors and glue, not from digital conflict.",
        "zh": "这是独立杂志拼贴，因为它的痕迹是实体纸张——撕边、胶带、复印颗粒、手写和层叠剪贴。这种不完美来自剪刀和胶水，而不是数字冲突。"
      },
      "wouldBecomeIf": {
        "en": "It would become Anti-design if the paper, tape, and grain vanished and were replaced by digital chaos — clashing neon gradients, broken grids, overlapping glitchy type, and deliberate usability hostility with no DIY materiality left.",
        "zh": "如果纸张、胶带和颗粒都消失，换成数字混乱——冲突的霓虹渐变、破碎网格、重叠的故障字体、故意制造可用性敌意——并且不再有任何 DIY 材质感，那就变成反设计了。"
      }
    },
    "code": [
      {
        "title": "Torn paper card with tape hinge",
        "language": "css",
        "code": "background: #f4f1ea;\nborder: 1.5px solid #1a1a1a;\nclip-path: polygon(0 2%, 98% 0, 100% 97%, 2% 100%);\nbox-shadow: 2px 3px 0 rgba(26,26,26,.15);\n\n&::before { /* tape */\n  content: '';\n  position: absolute;\n  top: -10px; left: 18px;\n  width: 44px; height: 16px;\n  background: rgba(232,215,139,.78);\n  transform: rotate(-12deg);\n  border: 1px solid rgba(26,26,26,.18);\n}"
      },
      {
        "title": "Photocopy halftone texture overlay",
        "language": "css",
        "code": "background:\n  radial-gradient(circle, rgba(26,26,26,.55) 1.2px, transparent 1.4px) 0 0 / 4px 4px,\n  linear-gradient(#fff 0%, #e8e4da 100%);\nfilter: contrast(1.25) grayscale(1);"
      },
      {
        "title": "Hand-lettered heading stack",
        "language": "css",
        "code": "font-family: 'Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive;\nletter-spacing: .02em;\ntext-transform: uppercase;\ncolor: #1a1a1a;"
      }
    ],
    "brief": {
      "en": "Create the interface as a Zine / Collage (zine-collage). Defining signals: every card or panel should read as torn or scissor-cut paper, not a vector rectangle — use irregular clip-path polygons or jagged border-radius and expose a 1–2px dark silhouette; attach pieces with visible masking tape hinges (#e8d78b at ~78% opacity, 40–50px wide, rotated -12° to +10°) overlapping corners; apply photocopied halftone grain to images and surfaces using a radial dot pattern (#1a1a1a dots on #f4f1ea paper), then boost contrast and grayscale; mix typography so headings use a handwritten marker family ('Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive), metadata uses a monospaced typewriter ('Courier New', 'Courier Prime', monospace), and accents look like clipped magazine all-caps. Layer pieces at slight rotations (-3° to +4°) with soft paper shadows (2px 3px 0 rgba(26,26,26,.15) or 0 2px 5px rgba(0,0,0,.18)), and keep deliberate DIY imperfection — wobbly rules, misalignment, and scissor marks. Palette: black #1a1a1a on off-white #f4f1ea newsprint, plus one or two flat spot accents such as hot pink #ff4f87 or mustard #f2c94c. Avoid digital glass, backdrop blur, gradients, and clean centered symmetry; those kill the paper materiality. Keep body text at least 14px and on solid paper fills so the rough edges do not sacrifice readability.",
      "zh": "按独立杂志拼贴（zine-collage）创建这个界面。决定性信号：每张卡片或面板都应读出被撕破或剪下的纸张，而不是矢量矩形——用不规则的 clip-path 多边形或锯齿状 border-radius，并露出 1–2px 的深色轮廓；用可见的胶带固定点把纸片贴住（#e8d78b、约 78% 不透明度、宽 40–50px、旋转 -12° 到 +10°），让胶带压过角落；给图像和表面加上复印网点纹理（#1a1a1a 网点落在 #f4f1ea 纸张上），再提升对比并去色；混排字体：标题用手写马克笔字体族（'Bradley Hand'、'Chalkboard SE'、'Comic Sans MS'、cursive），元数据用等宽打字机（'Courier New'、'Courier Prime'、monospace），点缀用剪报式全大写。以轻微角度（-3° 到 +4°）层叠纸片，并加上柔和的纸张阴影（2px 3px 0 rgba(26,26,26,.15) 或 0 2px 5px rgba(0,0,0,.18)），同时保留刻意的 DIY 不完美——歪歪扭扭的分隔线、错位和剪刀痕迹。配色：#1a1a1a 黑色印在 #f4f1ea 米白新闻纸上，再加一到两种平涂专色，如艳粉 #ff4f87 或芥末 #f2c94c。避免数字玻璃、backdrop 模糊、渐变和干净居中对称，这些都会毁掉纸张材质感。正文至少 14px，并放在实心纸色填充上，别让粗糙边缘牺牲可读性。"
    },
    "accessibility": {
      "en": "Handwriting and torn edges are decorative, but they become risky when used for body text or labels. Keep paragraph text in a clean typewriter or sans-serif at 14px or larger, and reserve marker handwriting for short headings or tags that do not need to be read at speed.\n\nHigh-contrast photocopy and busy collage backgrounds can wreck text contrast. Place readable text on solid paper fills (#f4f1ea or a flat accent block) and check that black ink on those fills passes 4.5:1; never float small text directly over halftone imagery.\n\nOverlapping cutouts and decorative tape must not hide interactive elements or trap focus. Make controls reachable by keyboard, show a clear focus indicator (a thick dashed marker outline works well), and honor prefers-reduced-motion by turning off rotation/shake transitions.",
      "zh": "手写体和撕边是装饰，但用于正文或标签时就有风险。正文段落请用干净的打字机或无衬线字体，大小至少 14px；把马克笔手写留给短标题或标签，不需要快速阅读。\n\n高对比复印和繁杂的拼贴背景会严重破坏文字对比度。可读文字请放在实心纸色填充（#f4f1ea 或平涂强调色块）上，并确认黑色油墨与这些填充达到 4.5:1；绝不要把小字直接浮在网点图像上。\n\n层叠剪贴和装饰胶带不能遮挡交互元素或困住焦点。控件必须能用键盘到达，显示清晰的焦点指示器（粗虚线马克笔轮廓很合适），并在 prefers-reduced-motion 下关闭旋转/抖动过渡。"
    },
    "origin": {
      "en": "Modern zines descend from 1930s science-fiction fanzines; the word 'fanzine' was coined by fan Louis Russel Chauvenet around 1940. The cut-and-paste visual identity took shape in the 1970s UK punk scene with photocopied zines like Sniffin' Glue (1976), then spread through the network zine directory Factsheet Five, launched by Mike Gunderloy in 1982. The 1990s Riot Grrrl movement — including the Bikini Kill zine — pushed the DIY collage aesthetic into feminist punk publishing. As a named UI look, Zine / Collage surfaced in the 2020s as a reaction to the sameness of polished SaaS grids, with designers borrowing torn paper, tape, halftone, and handwriting to make screens feel physically assembled.",
      "zh": "现代 zine 脱胎于 1930 年代的科幻 fanzine；「fanzine」一词约 1940 年由粉丝 Louis Russel Chauvenet 创造。剪贴视觉身份在 1970 年代英国朋克场景中成形，代表作是复印 zine《Sniffin' Glue》（1976），随后通过 Mike Gunderloy 于 1982 年创办的 zine 目录《Factsheet Five》扩散网络。1990 年代的 Riot Grrrl 运动——包括 Bikini Kill zine——把 DIY 拼贴美学推进女性主义朋克出版。作为具名的 UI 风格，独立杂志拼贴在 2020 年代出现，作为对千篇一律的 SaaS 网格的反击，设计师借用撕纸、胶带、网点和手写让屏幕看起来是 physically 组装出来的。"
    },
    "seeAlso": [
      {
        "slug": "styles/risograph",
        "name": "Risograph"
      },
      {
        "slug": "styles/anti-design",
        "name": "Anti-design"
      },
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      }
    ]
  },
  {
    "slug": "steampunk",
    "name": {
      "en": "Steampunk",
      "zh": "蒸汽朋克（Steampunk）"
    },
    "tagline": {
      "en": "Steampunk dresses the interface in the brass, leather and rivets of a Victorian machine room that never was: warm sepia grounds, burnished copper and bronze, gear-edged frames, engraved serif lettering, pressure-gauge meters and visible mechanical fasteners. It is retro-futurism from the age of steam — the screen pretending to be a 19th-century astrolabe, pocket watch or steamship console rather than a digital surface.",
      "zh": "蒸汽朋克把界面装扮成一座从未存在的维多利亚机械车间：温暖的 sepia 底色、抛光铜与黄铜、齿轮边框、镌刻衬线字体、压力表刻度，以及外露的铆钉与螺丝。它是来自蒸汽时代的复古未来主义——屏幕假装自己是 19 世纪的星盘、怀表或蒸汽船仪表板，而不是一块数字平面。"
    },
    "scope": {
      "en": "Scope: This entry covers the Victorian/Industrial-Revolution retro-futurist visual style as applied to UI. It does not cover the 1920s–40s streamlined machine aesthetic (Dieselpunk) or the geometric luxury of Art Deco, both of which sit in different centuries and moods.",
      "zh": "范围：本条覆盖维多利亚/工业革命复古未来主义在 UI 中的视觉风格。它不包含 1920–40 年代的流线型机械美学（Dieselpunk），也不包含几何奢华的 Art Deco；它们属于不同的世纪与情绪。"
    },
    "aliases": {
      "en": [
        "websites that look like brass pocket watches and steam engines",
        "victorian sci-fi interface with gears and pressure gauges",
        "brown leather and copper pipes ui",
        "riveted metal panels with cogwheel borders",
        "the old-timey retro-futuristic machine aesthetic",
        "sepia dashboard that looks like a 19th-century invention"
      ],
      "zh": [
        "看起来像黄铜怀表和蒸汽机的网站",
        "带齿轮和压力表的维多利亚科幻界面",
        "棕色皮革加铜管的 UI",
        "有铆钉金属板和齿轮边框的界面",
        "那种复古未来主义的老派机械风",
        "像 19 世纪发明的 sepia 仪表盘"
      ]
    },
    "signals": [
      {
        "id": "brass-copper-palette",
        "role": "defining",
        "name": {
          "en": "Brass, copper and sepia palette",
          "zh": "黄铜、铜与 sepia 配色"
        },
        "facet": "color",
        "description": {
          "en": "The dominant reads are warm metal — brass #d4a35b, burnished copper #b87333, dark bronze #6e4c2e — against sepia parchment #e6dcc8 or chocolate leather #4a3425, never cool chrome or neon.",
          "zh": "主导是暖金属：黄铜 #d4a35b、抛光铜 #b87333、深青铜 #6e4c2e，衬在 sepia 羊皮纸 #e6dcc8 或巧克力皮革 #4a3425 上，绝不能是冷铬或霓虹。"
        }
      },
      {
        "id": "gear-mechanical-frames",
        "role": "defining",
        "name": {
          "en": "Gear and mechanical frames",
          "zh": "齿轮与机械边框"
        },
        "facet": "geometry",
        "description": {
          "en": "Panels sit inside cogwheel borders, riveted straps, or stepped brass bezels; the frame itself advertises the machine rather than hiding it.",
          "zh": "面板嵌在齿轮边框、铆接带或阶梯式黄铜表圈里；边框本身在炫耀机械，而不是隐藏它。"
        }
      },
      {
        "id": "victorian-serif",
        "role": "defining",
        "name": {
          "en": "Victorian engraved serif",
          "zh": "维多利亚镌刻衬线"
        },
        "facet": "typography",
        "description": {
          "en": "Headings and labels use high-contrast serifs (Georgia, Times New Roman, or similar), often small-caps, with letter-spacing around 0.04em and a faint highlight to suggest engraved metal or letterpress.",
          "zh": "标题与标签使用高对比衬线（Georgia、Times New Roman 或类似字体），常配合 small-caps，字间距约 0.04em，并带一道微高光，像镌刻金属或活字印刷。"
        }
      },
      {
        "id": "riveted-fasteners",
        "role": "defining",
        "name": {
          "en": "Riveted fasteners",
          "zh": "铆钉紧固件"
        },
        "facet": "surface",
        "description": {
          "en": "Buttons and plates are studded with small circular rivets or screws at the corners; the fastener is treated as ornament, not a bug.",
          "zh": "按钮与金属板四角点缀着小圆铆钉或螺丝；紧固件被当作装饰，而非瑕疵。"
        }
      },
      {
        "id": "pressure-gauges",
        "role": "defining",
        "name": {
          "en": "Steam-pressure gauges",
          "zh": "蒸汽压力表"
        },
        "facet": "imagery",
        "description": {
          "en": "Progress bars, dials and readouts are styled as analog gauges — horizontal tubes with brass casings, tick marks and a copper needle or fill.",
          "zh": "进度条、刻度盘和读数都设计成模拟仪表——带黄铜外壳、刻度线与铜指针或填充的水平管。"
        }
      },
      {
        "id": "leather-wood-panels",
        "role": "supporting",
        "name": {
          "en": "Leather and dark wood panels",
          "zh": "皮革与深色木板"
        },
        "facet": "surface",
        "description": {
          "en": "Large surfaces read as tooled leather, dark walnut or tarnished metal plate, usually with an inset shadow to suggest depth and wear.",
          "zh": "大面积表面像压花皮革、深色胡桃木或氧化金属板，通常带内阴影以表现深度与磨损。"
        }
      },
      {
        "id": "sepia-grading",
        "role": "supporting",
        "name": {
          "en": "Sepia warmth and tarnish",
          "zh": "sepia 暖调与氧化"
        },
        "facet": "color",
        "description": {
          "en": "Everything is warmed by a sepia overlay or vignette; bright white and pure grey look out of place unless they read as porcelain enamel.",
          "zh": "所有东西都被 sepia 叠加或暗角加温；纯白色与纯灰色会显得格格不入，除非它们读起来像搪瓷。"
        }
      },
      {
        "id": "geometric-luxury-symmetry",
        "role": "avoid",
        "name": {
          "en": "Geometric luxury symmetry",
          "zh": "几何奢华对称"
        },
        "facet": "geometry",
        "description": {
          "en": "Mirror symmetry, gold sunbursts and lacquer-black glamour are Art Deco; Steampunk is asymmetrical, patched-together machinery.",
          "zh": "镜像对称、金色旭日、黑漆 glamour 是 Art Deco；蒸汽朋克是不对称、拼凑而成的机械。"
        }
      }
    ],
    "confusedWith": {
      "slug": "art-deco",
      "name": "Art Deco",
      "because": {
        "en": "This is Steampunk because the materials are industrial-Victorian: burnished brass, copper, riveted leather and visible gears — asymmetrical, mechanical, and sepia-warm rather than gilded-luxury.",
        "zh": "这是蒸汽朋克，因为材料是维多利亚工业的：抛光黄铜、铜、铆钉皮革和可见齿轮——不对称、机械感、sepia 暖调，而不是镀金奢华。"
      },
      "wouldBecomeIf": {
        "en": "It would become Art Deco if the brass machinery were replaced by mirror symmetry, gold sunburst linework, black lacquer, and jewel-tone luxury ornament — geometry for glamour, not for engineering.",
        "zh": "如果黄铜机械被替换成镜像对称、金色放射状线条、黑漆底和宝石色调的奢华装饰——为 glamour 服务而非工程——就变成 Art Deco 了。"
      }
    },
    "code": [
      {
        "title": "Riveted brass button",
        "language": "css",
        "code": "width: 42px; height: 42px; border-radius: 50%; border: 2px solid #6e4c2e; background: radial-gradient(circle at 30% 30%, #f0d6a6, #d4a35b 40%, #8c5e3c 90%); box-shadow: inset 0 1px 2px rgba(255,255,255,.55), inset 0 -2px 3px rgba(0,0,0,.35), 0 3px 5px rgba(0,0,0,.35), -13px -13px 0 -18px #5c4028, 13px -13px 0 -18px #5c4028, -13px 13px 0 -18px #5c4028, 13px 13px 0 -18px #5c4028;"
      },
      {
        "title": "Victorian engraved heading",
        "language": "css",
        "code": "font-family: Georgia, 'Times New Roman', serif; font-variant: small-caps; letter-spacing: 0.04em; color: #3e2b1f; text-shadow: 0 1px 0 rgba(255,255,255,.25);"
      },
      {
        "title": "Pressure-gauge progress track",
        "language": "css",
        "code": "height: 12px; border: 2px solid #b8864b; border-radius: 999px; background: linear-gradient(180deg, #4a3425, #2a1d14 45%, #1a120d); box-shadow: inset 0 2px 4px rgba(0,0,0,.7), 0 1px 0 rgba(255,255,255,.15);"
      }
    ],
    "brief": {
      "en": "Create the interface as a Victorian machine-room console. Start with a warm sepia ground (#f5efe4 or #e6dcc8) and dark leather panels (#4a3425). Primary metals: brass #d4a35b, burnished copper #b87333, dark bronze #6e4c2e; add tarnish with linear-gradient(180deg, #e8c887, #b8864b 55%, #7a5428). Surfaces need inset highlights (box-shadow: inset 0 1px 0 rgba(255,255,255,.2), inset 0 -2px 0 rgba(0,0,0,.25)) and a 2px solid #5c4028 outer frame. Frames should read as brass gear borders — use an inline SVG border-image or repeating cog motif in #a67c3b. Typography: Victorian/Edwardian high-contrast serif (Georgia, 'Times New Roman', serif) for headings; letter-spacing 0.04em; small-caps labels in #3e2b1f. Buttons are riveted metal discs: 40–44px circles with radial-gradient brass, border 2px #6e4c2e, inset box-shadow 0 1px 1px rgba(255,255,255,.5), and four corner rivets. Progress bars become pressure gauges: a 10–12px channel inside a rounded brass casing (border 2px #b8864b, background #2a1d14), filled with copper gradient #d47f39 to #9e5b25 and overlaid with faint tick marks every 10%. Avoid Art Deco symmetry, chrome streamline, flat vector minimalism, neon, or screen-default sans-serif. Preserve contrast: dark #2e2119 text on sepia grounds and light labels on dark metal; keep focus rings as visible brass outlines.",
      "zh": "把界面建成维多利亚机械车间控制台。先用温暖 sepia 底色（#f5efe4 或 #e6dcc8）和深色皮革面板（#4a3425）。主金属：黄铜 #d4a35b、抛光铜 #b87333、深青铜 #6e4c2e；用 linear-gradient(180deg, #e8c887, #b8864b 55%, #7a5428) 做出氧化渐变。表面需要内高光（box-shadow: inset 0 1px 0 rgba(255,255,255,.2), inset 0 -2px 0 rgba(0,0,0,.25)）和 2px solid #5c4028 外框。边框要读出黄铜齿轮感——用内联 SVG border-image 或重复的 #a67c3b 齿纹图案。字体：标题用维多利亚/爱德华时代高对比衬线（Georgia、'Times New Roman', serif），字间距 0.04em，small-caps 标签用 #3e2b1f。按钮是带铆钉的金属圆盘：40–44px 圆形，径向渐变黄铜，边框 2px #6e4c2e，内阴影 inset 0 1px 1px rgba(255,255,255,.5)，四角加铆钉。进度条做成压力表：10–12px 管道装在圆角黄铜壳里（border 2px #b8864b，背景 #2a1d14），填充铜色渐变 #d47f39 到 #9e5b25，并叠上每 10% 一格的淡刻度。避开 Art Deco 对称、镀铬流线、扁平矢量极简、霓虹，以及屏幕默认无衬线。保证对比度：sepia 底上用深色 #2e2119 文字，深色金属上用浅色标签；焦点环做成可见的黄铜外框。"
    },
    "accessibility": {
      "en": "Sepia and brass palettes can hide contrast problems: dark #2e2119 text on #f5efe4 passes WCAG AAA, but light labels on copper or brass often fail — either darken the label or add a solid backing strip behind small text.\n\nVictorian serifs and small-caps ornament look period-correct but hurt readability at small sizes; keep body text at 16px minimum, avoid blackletter or ultra-condensed display faces, and use the decorative serif for headings only.\n\nAny rotating gears, hissing steam, or ticking animations can trigger vestibular issues; honor prefers-reduced-motion by pausing rotation and removing parallax, and make sure all rivet buttons still have a visible focus state and a 44×44 CSS hit area.",
      "zh": "sepia 与黄铜配色容易掩盖对比度问题：#2e2119 文字在 #f5efe4 上满足 WCAG AAA，但浅色标签在铜或黄铜上通常不达标——要么加深标签，要么给小文字加实色衬底。\n\n维多利亚衬线与 small-caps 装饰虽符合时代感，却会损害小尺寸可读性；正文至少 16px，避免哥特体或超窄展示字体，只把装饰性衬线留给标题。\n\n任何旋转齿轮、喷蒸汽或滴答动画都可能诱发前庭问题；在 prefers-reduced-motion 下暂停旋转并移除视差，并确保所有铆钉按钮都有可见焦点状态与 44×44 CSS 点击区域。"
    },
    "origin": {
      "en": "The term was coined by science-fiction author K. W. Jeter in a 1987 letter to Locus magazine, where he jokingly proposed 'steampunk' as a label for the Victorian-set fiction he, Tim Powers and James Blaylock were writing — work that borrowed the speculative machinery of H. G. Wells and Jules Verne. The visual vocabulary grew from 19th-century industrial hardware — riveted boilers, brass instrumentation, pocket watches and leather-strapped aviator gear — and entered Web and game UI through retro-futurist projects such as Arcanum: Of Steamworks and Magick Obscura (2001).",
      "zh": "这个词由科幻作家 K. W. Jeter 在 1987 年写给《Locus》杂志的一封信中创造，他半开玩笑地提议用“steampunk”来统称他与 Tim Powers、James Blaylock 正在创作的维多利亚背景小说——这些作品借用了 H. G. Wells 与 Jules Verne 的假想机械。视觉语汇来自 19 世纪工业硬件：铆接锅炉、黄铜仪表、怀表与皮革绑带的飞行员装备；随后通过复古未来主义项目进入 Web 与游戏 UI，例如《Arcanum: Of Steamworks and Magick Obscura》（2001）。"
    },
    "seeAlso": [
      {
        "slug": "styles/art-deco",
        "name": "Art Deco"
      },
      {
        "slug": "styles/dieselpunk",
        "name": "Dieselpunk"
      },
      {
        "slug": "styles/terminal-hacker",
        "name": "Terminal Hacker"
      }
    ]
  },
  {
    "slug": "dieselpunk",
    "name": {
      "en": "Dieselpunk",
      "zh": "柴油朋克（Dieselpunk）"
    },
    "tagline": {
      "en": "Dieselpunk is the visual language of 1920s–1940s industrial war machines rendered as UI: riveted gunmetal panels, aviation gauges, oxidized copper and olive drab, oil stains, and stenciled lettering. Where steampunk dreams of brass gentlemen and clockwork wonder, dieselpunk wakes up in a sooty hangar full of propellers, diesel exhaust, and Art Deco machinery. It is darker, heavier, and more militaristic — the aesthetic of function pushed to the edge of romance.",
      "zh": "柴油朋克是把 1920–1940 年代的工业战争机器翻译成 UI 的视觉语言：铆接的暗金属面板、航空仪表、氧化铜与橄榄绿、油渍，以及喷印字体。如果说蒸汽朋克梦见黄铜绅士与发条奇迹，柴油朋克则醒来时身处满是螺旋桨、柴油废气与 Art Deco 机械的煤灰机库。它更暗、更重、更军事化——是把功能推到浪漫主义边缘的美学。"
    },
    "scope": {
      "en": "Scope: This entry covers the dieselpunk graphic/UI style. The narrative genre and cosplay scene overlap, but the signals below are about pixels: metal, rivets, gauges, and wartime palette. Decopunk and raygun-gothic share the era but lean more glamorous or atomic-fantastic; this entry stays on the grimy military-industrial side.",
      "zh": "范围：本条只覆盖柴油朋克的图形/UI 风格。叙事体裁与角色扮演文化会与之重叠，但下面的信号讲的是像素：金属、铆钉、仪表和战时配色。Decopunk 与 raygun-gothic 共享年代，但更偏向华丽或原子幻想；本条停留在脏兮兮的军事工业一侧。"
    },
    "aliases": {
      "en": [
        "ui that looks like the inside of a ww2 bomber cockpit",
        "dark riveted metal panels with old flight gauges",
        "olive green and copper steampunk but grittier",
        "industrial art deco machinery interface",
        "1920s military diesel engine aesthetic",
        "weathered metal with stenciled labels"
      ],
      "zh": [
        "看起来像是二战轰炸机座舱内部的 UI",
        "带老式飞行仪表的暗色铆接金属面板",
        "橄榄绿加铜色、但更脏更硬核的蒸汽朋克",
        "工业风 Art Deco 机械界面",
        "1920 年代军用柴油引擎美学",
        "做旧金属配喷印标签"
      ]
    },
    "signals": [
      {
        "id": "gunmetal-palette",
        "role": "defining",
        "name": {
          "en": "Gunmetal and olive-drab palette",
          "zh": "炮铜与橄榄绿配色"
        },
        "facet": "color",
        "description": {
          "en": "Base surfaces sit in dark, desaturated metallics (#2a2b28, #3c3d39) and military olive (#4b5320, #575c3f), accented by oxidized copper (#8c6239), dull brass (#b87333), and soot black (#0f0f0d).",
          "zh": "基底落在暗而低饱和的金属色（#2a2b28、#3c3d39）与军橄榄（#4b5320、#575c3f）之间，点缀氧化铜（#8c6239）、暗黄铜（#b87333）与煤烟黑（#0f0f0d）。"
        }
      },
      {
        "id": "riveted-panels",
        "role": "defining",
        "name": {
          "en": "Riveted sheet-metal panels",
          "zh": "铆接金属板"
        },
        "facet": "surface",
        "description": {
          "en": "Backgrounds and cards read as overlapping plates of steel or aluminum, joined by rows of visible rivets rendered as small circular bumps or dots along panel edges.",
          "zh": "背景和卡片读起来像是重叠的钢板或铝板，边缘用一排可见铆钉连接，表现为沿面板接缝排列的小圆凸点。"
        }
      },
      {
        "id": "aviation-gauges",
        "role": "defining",
        "name": {
          "en": "Aviation and engine gauges",
          "zh": "航空与引擎仪表"
        },
        "facet": "imagery",
        "description": {
          "en": "Circular dials, needles, segmented readouts, and stenciled numerals mimic interwar aircraft instruments and factory meters; progress bars often become half-moon gauges or linear manometers.",
          "zh": "圆形表盘、指针、分段读数和喷印数字模仿两次大战之间的飞机仪表和工厂计量器；进度条常被画成半月形仪表或线性压力计。"
        }
      },
      {
        "id": "distressed-wear",
        "role": "defining",
        "name": {
          "en": "Distressed wear and grime",
          "zh": "做旧磨损与油垢"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces carry scratches, oil streaks, rust blooms, and uneven patina — never pristine. Edges are chamfered by use rather than by clean vector rounding.",
          "zh": "表面带着划痕、油痕、锈斑与不均匀的铜绿——绝不崭新。边缘是因使用而倒角，而非干净矢量圆角。"
        }
      },
      {
        "id": "stencil-typography",
        "role": "defining",
        "name": {
          "en": "Stencil and block industrial type",
          "zh": "喷印与块状工业字体"
        },
        "facet": "typography",
        "description": {
          "en": "Labels use stencil, compressed sans-serif, or military slab faces, often set in all caps with wide tracking; body text stays small and utilitarian.",
          "zh": "标签使用 stencil、压缩无衬线或军事 slab 字体，常设成全大写并加宽字距；正文保持小而功利。"
        }
      },
      {
        "id": "deco-mechanics",
        "role": "supporting",
        "name": {
          "en": "Art Deco-mechanical geometry",
          "zh": "Art Deco 机械几何"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms combine stepped ziggurat profiles, radiused machine housings, and symmetrical arrays of bolts and vents — structure follows manufacturing, not whimsy.",
          "zh": "造型结合阶梯式 ziggurat 轮廓、圆弧机器外壳，以及对称排列的螺栓与通风口——结构遵循制造工艺，而非奇想。"
        }
      },
      {
        "id": "wire-mesh-vents",
        "role": "supporting",
        "name": {
          "en": "Wire mesh, vents, and portholes",
          "zh": "金属网、通风口舷窗"
        },
        "facet": "imagery",
        "description": {
          "en": "Details like perforated grilles, louvers, round porthole windows, and rubber gaskets reinforce the sense of sealed machinery and pressurized cabins.",
          "zh": "穿孔格栅、百叶窗、圆形舷窗和橡胶垫圈等细节强化了密封机械与加压舱的感觉。"
        }
      },
      {
        "id": "clockwork-filigree",
        "role": "avoid",
        "name": {
          "en": "Victorian clockwork and filigree",
          "zh": "维多利亚齿轮与卷草纹"
        },
        "facet": "surface",
        "description": {
          "en": "Exposed gears, cogs, scrollwork, velvet, and gentleman-inventor props steer the look toward Steampunk; dieselpunk hides its mechanics behind armored plate.",
          "zh": "裸露齿轮、发条、卷草装饰、天鹅绒和绅士发明家道具会把方向扭向蒸汽朋克；柴油朋克把机械藏在装甲板后面。"
        }
      }
    ],
    "confusedWith": {
      "slug": "steampunk",
      "name": "Steampunk",
      "because": {
        "en": "This is Dieselpunk because the palette is dark, oil-stained, and military — gunmetal, olive drab, oxidized copper — and the surfaces are riveted steel or aluminum rather than polished brass, Victorian wood, and leather filigree.",
        "zh": "这是柴油朋克，因为配色暗、油渍斑斑且军事化——炮铜、橄榄绿、氧化铜——材质是铆接钢材或铝板，而不是抛光黄铜、维多利亚木材与皮革卷草纹。"
      },
      "wouldBecomeIf": {
        "en": "It would become Steampunk if the metal turned to gleaming brass and copper, visible clockwork and pipes replaced riveted sheet metal, top hats and leather straps appeared, and the palette lifted toward sepia, cream, and burgundy.",
        "zh": "如果金属变成闪亮的黄铜与铜，铆接板材被可见的发条和管道取代，出现高顶礼帽与皮革绑带，配色也抬升到棕褐、米白与酒红，就变成蒸汽朋克了。"
      }
    },
    "code": [
      {
        "title": "Riveted gunmetal panel plate",
        "language": "css",
        "code": "background: linear-gradient(180deg, #2a2b28 0%, #1e1f1c 100%); border: 1px solid #4a4b46; box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 6px 18px rgba(0,0,0,.55), inset 0 0 24px rgba(0,0,0,.45);"
      },
      {
        "title": "Rivet row along a panel edge",
        "language": "css",
        "code": "background-image: radial-gradient(circle at 8px 8px, #6b6c66 2px, #2a2b28 3px); background-size: 18px 16px;"
      },
      {
        "title": "Aviation-style circular gauge",
        "language": "css",
        "code": "width: 72px; height: 72px; border-radius: 50%; background: conic-gradient(from 225deg, #4b5320 0deg 90deg, #8c6239 90deg 180deg, #2a2b28 180deg 270deg, transparent 270deg); border: 3px solid #575c3f; box-shadow: inset 0 0 10px rgba(0,0,0,.7);"
      }
    ],
    "brief": {
      "en": "Create the surface in the spirit of Dieselpunk. Defining signals: a dark gunmetal and olive-drab base (#2a2b28, #4b5320, #575c3f) with oxidized copper (#8c6239) and dull brass (#b87333) accents; backgrounds built as overlapping riveted sheet-metal panels — use radial-gradient rivets (~3–4px dots) along panel seams; aviation and engine gauges rendered as circular dials or half-moon meters with needles and stenciled numerals; surfaces distressed with scratches, oil streaks, and rust via layered noise gradients or texture overlays; stencil, compressed sans, or military slab type in all caps with wide letter-spacing. Keep radii small (2–4px) or chamfered; avoid Victorian filigree, exposed gears, polished brass, and sepia palettes. Use directional inset highlights to read as beveled metal, and heavy shadows (0 8px 24px rgba(0,0,0,.6)) to sink panels into a dark hangar-like space. Provide visible focus outlines (#b87333 2px) and respect reduced-motion for gauge needles.",
      "zh": "按柴油朋克（Dieselpunk）的精神创建这个界面。决定性信号：以暗炮铜和橄榄绿为底（#2a2b28、#4b5320、#575c3f），点缀氧化铜（#8c6239）与暗黄铜（#b87333）；背景要做成重叠的铆接金属板——用径向渐变铆钉（约 3–4px 圆点）沿接缝排列；航空与引擎仪表画成带指针和喷印数字的圆形表盘或半月形计量器；表面用划痕、油痕、锈迹做旧，可通过分层噪点渐变或纹理叠加实现；字体用 stencil、压缩无衬线或军事 slab，全大写并加宽字距。圆角保持很小（2–4px）或做倒角；避免维多利亚卷草、裸露齿轮、抛光黄铜和棕褐配色。用方向性内高光读出金属倒角，用厚重阴影（0 8px 24px rgba(0,0,0,.6)）让面板沉入暗机库般的空间。提供可见的焦点轮廓（#b87333 2px），并响应 reduced-motion 冻结仪表指针动画。"
    },
    "accessibility": {
      "en": "The default palette is intentionally low-contrast: gunmetal text on darker metal or olive panels can fall below 4.5:1. Reserve high-contrast copper/brass (#b87333, #f4c97f) for functional text and keep decorative grime away from readable labels.\n\nGauge needles, sweeping dials, and flickering readouts are decorative motion that can trigger vestibular issues. Honor prefers-reduced-motion by freezing needle animations and removing any flicker faster than 3 Hz.\n\nStencil and ultra-compressed type can hurt legibility at small sizes; use stencil faces only for labels ≥ 12px and keep body text in a plain sans-serif with normal tracking.",
      "zh": "默认配色故意低对比：炮铜文字压在更深金属或橄榄绿面板上可能低于 4.5:1。把高对比的铜/黄铜（#b87333、#f4c97f）留给功能性文字，并让装饰性 grime 远离可读标签。\n\n仪表指针扫过、表盘闪烁和读数频闪属于装饰性动效，可能诱发前庭不适。响应 prefers-reduced-motion：冻结指针动画，并移除任何快于每秒 3 次的闪烁。\n\nstencil 和极压缩字体在小字号下会损害可读性；stencil 只用于 ≥12px 的标签，正文保持普通无衬线、正常字距。"
    },
    "origin": {
      "en": "The term 'dieselpunk' was coined in 2001 by game designer Lewis Pollak to market his tabletop RPG Children of the Sun, which he described as the darker, dirtier side of steampunk. Its visual roots are the real industrial and military design of the interwar period through World War II — riveted aircraft fuselages, tank armor, factory gauge panels, and diesel engines — filtered through Art Deco and Streamline Moderne geometry. Since the 2000s it has spread through games, film, and illustration as a distinct retro-futuristic look.",
      "zh": "「dieselpunk」一词由游戏设计师 Lewis Pollak 于 2001 年提出，用来宣传他的桌面 RPG《Children of the Sun》，他把它描述为蒸汽朋克更黑暗、更肮脏的一面。它的视觉根须扎进两次世界大战之间到二战的真实工业与军事设计——铆接飞机机身、坦克装甲、工厂仪表板和柴油引擎——再经由 Art Deco 与 Streamline Moderne 几何过滤。2000 年代以后，它通过游戏、电影和插画发展成一种独特的复古未来视觉。"
    },
    "seeAlso": [
      {
        "slug": "styles/steampunk",
        "name": "Steampunk"
      },
      {
        "slug": "styles/art-deco",
        "name": "Art Deco"
      },
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      }
    ]
  },
  {
    "slug": "biopunk",
    "name": {
      "en": "Biopunk",
      "zh": "生物朋克（Biopunk）"
    },
    "tagline": {
      "en": "Biopunk drags cyberpunk out of the chrome-and-neon city and into the wet lab: interfaces look grown rather than machined — viscous gels, semi-translucent membranes, throbbing vascular progress bars, and sterile medical readouts tinted in sickly greens, bruised pinks, and cold laboratory whites. It is the visual language of gene editing, biohacked implants, and cultures bubbling in petri dishes. Where cyberpunk asks 'what if the network owns you', biopunk asks 'what if your own cells do'.",
      "zh": "生物朋克把赛博朋克从铬合金与霓虹灯的城市拖进湿件实验室：界面看起来是「长」出来的，而不是加工出来的——黏稠的凝胶、半透明的薄膜、像血管一样搏动的进度条，以及带着病态绿、瘀青粉和冰冷实验室白的无菌医疗读数。它是基因编辑、生物改造植入物和培养皿里冒泡菌落的视觉语言。赛博朋克问的是「如果网络拥有了你」，生物朋克问的是「如果你的细胞拥有你」。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual and interface language of biopunk — organic surfaces, lab-equipment geometry, bio-data visualization, and medical UI accents. The literary subgenre (Greg Bear, Paul Di Filippo) and the DIY biohacker movement share the name but are only background; this atlas is about pixels.",
      "zh": "范围：本条覆盖生物朋克的视觉与界面语言——有机表面、实验室设备几何、生物数据可视化以及医疗 UI 点缀。文学子类型（Greg Bear、Paul Di Filippo）和 DIY 生物黑客运动与它共享名字，但只作为背景；本图鉴讲的是像素。"
    },
    "aliases": {
      "en": [
        "interface that looks like a petri dish or lab culture",
        "sickly green slime UI with medical readouts",
        "buttons that look like gel pads or organic tissue",
        "biotech dashboard with throbbing vein-like progress bars",
        "flesh and mucus sci-fi interface style",
        "genome sequencer or CRISPR app aesthetic"
      ],
      "zh": [
        "看起来像培养皿或菌落培养的界面",
        "病态绿的黏液 UI 配医疗读数",
        "像凝胶垫或有机组织的按钮",
        "带搏动血管进度条的生物技术仪表盘",
        "血肉和黏液的科幻界面风格",
        "基因测序仪或 CRISPR 应用 aesthetics 风格"
      ]
    },
    "signals": [
      {
        "id": "organic-surfaces",
        "role": "defining",
        "name": {
          "en": "Grown, not machined surfaces",
          "zh": "长出来的，而不是加工出来的表面"
        },
        "facet": "surface",
        "description": {
          "en": "Buttons and cards read as gel pads, agar plates, or semi-translucent tissue — soft, yielding, often slightly irregular edges rather than crisp geometric shapes.",
          "zh": "按钮和卡片读起来像凝胶垫、琼脂皿或半透明的组织——柔软、可形变，边缘常常略有不规则，而不是利落的规则几何。"
        }
      },
      {
        "id": "sick-palette",
        "role": "defining",
        "name": {
          "en": "Sickly greens and bruised pinks",
          "zh": "病态绿与瘀青粉"
        },
        "facet": "color",
        "description": {
          "en": "Dominant hues are bio-luminescent greens (#39ff14, #7fff00, #4ade80), mucous yellows, cold lab whites (#e8f4f8), and infected fleshy pinks (#ff6b9d, #ff85a1) against near-black or sterile grey grounds.",
          "zh": "主色调是生物发光绿（#39ff14、#7fff00、#22c55e）、黏液黄、冰冷实验室白（#e8f4f8），以及感染感的肉粉色（#ff6b9d、#ff85a1），衬在近黑或无菌灰底上。"
        }
      },
      {
        "id": "vascular-motion",
        "role": "defining",
        "name": {
          "en": "Pulsing vascular progress",
          "zh": "搏动的血管式进度"
        },
        "facet": "motion",
        "description": {
          "en": "Loaders and progress bars behave like flowing fluid, creeping mold, or a heartbeat — slow organic movement with irregular pulse beats, not mechanical linear scans.",
          "zh": "加载条和进度条像流动的液体、蔓延的菌丝或心跳——缓慢的有机运动，带不规则脉冲，而不是机械线性扫描。"
        }
      },
      {
        "id": "lab-hardware",
        "role": "defining",
        "name": {
          "en": "Laboratory equipment metaphors",
          "zh": "实验室设备隐喻"
        },
        "facet": "imagery",
        "description": {
          "en": "Petri dishes, test tubes, pipettes, centrifuge rings, cell grids, and DNA helixes appear as iconography, container shapes, or decorative motifs.",
          "zh": "培养皿、试管、移液器、离心环、细胞网格和 DNA 双螺旋作为图标、容器形状或装饰母题反复出现。"
        }
      },
      {
        "id": "medical-typography",
        "role": "supporting",
        "name": {
          "en": "Medical interface type",
          "zh": "医疗界面字体"
        },
        "facet": "typography",
        "description": {
          "en": "Monospaced or squared-off sans-serif labels that mimic hospital monitors, sequencer logs, and assay readouts — clinical, small, and data-dense.",
          "zh": "等宽或方正无衬线标签，模仿医院监护仪、测序日志和检测读数——临床感、字号小、数据密集。"
        }
      },
      {
        "id": "membrane-texture",
        "role": "supporting",
        "name": {
          "en": "Membrane and mucus textures",
          "zh": "薄膜与黏液质感"
        },
        "facet": "surface",
        "description": {
          "en": "Subtle gradients, noise, or layered blur suggest a wet surface — think amniotic sheen, bacterial film, or the opalescent skin of a jellyfish.",
          "zh": "微妙的渐变、噪点或层叠模糊暗示湿润表面——像羊膜光泽、细菌膜，或水母的乳白色皮肤。"
        }
      },
      {
        "id": "bio-data",
        "role": "supporting",
        "name": {
          "en": "Dense bio-data readouts",
          "zh": "密集生物数据读数"
        },
        "facet": "layout",
        "description": {
          "en": "Tiny codons, base-pair sequences, heart-rate traces, and waveform readouts fill margins and corners, as if the UI is monitoring a living sample.",
          "zh": "角落里塞满微小密码子、碱基对序列、心电波形和示波器曲线，仿佛 UI 正在监控一个活体样本。"
        }
      },
      {
        "id": "hard-chrome",
        "role": "avoid",
        "name": {
          "en": "Hard chrome and circuitry",
          "zh": "硬铬与电路"
        },
        "facet": "surface",
        "description": {
          "en": "Sharp brushed metal, glowing neon grids, and circuit-board patterns push the look straight into cyberpunk — biopunk keeps the tech soft and biological.",
          "zh": "锋利的拉丝金属、发光的霓虹网格和电路板纹样会直接把外观推向赛博朋克——生物朋克会让技术保持柔软和生物感。"
        }
      }
    ],
    "confusedWith": {
      "slug": "cyberpunk",
      "name": "Cyberpunk",
      "because": {
        "en": "This is biopunk because the material world is organic, wet, and bodily — gels, membranes, flesh textures, and lab hardware — rather than chrome, neon, rain-slicked streets, and circuitry.",
        "zh": "这是生物朋克，因为它的物质世界是有机的、潮湿的、身体的——凝胶、薄膜、血肉纹理和实验室硬件——而不是铬合金、霓虹灯、雨湿的街道和电路。"
      },
      "wouldBecomeIf": {
        "en": "It would become cyberpunk if the slime hardened into brushed metal, the petri dishes turned into holographic billboards, the palette flipped to hot magenta and electric cyan, and the backdrop became a rain-soaked dystopian cityscape.",
        "zh": "如果黏液硬化成拉丝金属，培养皿变成全息广告牌，配色翻成热品红和电光青，背景变成雨水浸泡的反乌托邦城市景观，它就变成赛博朋克了。"
      }
    },
    "code": [
      {
        "title": "Petri-dish gel button",
        "language": "css",
        "code": "background: radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), transparent 45%), linear-gradient(180deg, #4ade80 0%, #22c55e 45%, #15803d 100%); border: 1px solid rgba(57,255,20,.55); border-radius: 50%; box-shadow: inset 0 -6px 12px rgba(0,60,20,.35), 0 8px 20px rgba(34,197,94,.25);"
      },
      {
        "title": "Organic tissue card with membrane sheen",
        "language": "css",
        "code": "background: linear-gradient(160deg, #ff85a1 0%, #ff6b9d 50%, #db2777 100%); border-radius: 24px; box-shadow: inset 0 2px 6px rgba(255,255,255,.35), inset 0 -4px 10px rgba(120,20,60,.25), 0 10px 24px rgba(219,39,119,.2);"
      },
      {
        "title": "Slime progress bar",
        "language": "css",
        "code": "background: #0d1f17; border-radius: 999px; overflow: hidden;\n.bar { background: linear-gradient(90deg, #39ff14, #7fff00, #39ff14); background-size: 200% 100%; animation: slime-flow 2s ease-in-out infinite; box-shadow: 0 0 14px rgba(57,255,20,.55); }"
      }
    ],
    "brief": {
      "en": "Build the interface as Biopunk. Canvas: near-black lab bench (#0a120f) or sterile clinical grey (#e8f4f8), depending on whether you want a dark incubation chamber or a bright clean-room readout. Defining signals: controls render as grown organic forms — gel pads, agar dishes, or semi-translucent tissue with soft irregular edges; palette anchored in sickly bio-luminescent greens (#39ff14, #7fff00, #22c55e), mucous yellows, infected fleshy pinks (#ff6b9d, #ff85a1), and cold lab whites (#e8f4f8); progress and loaders behave like pulsing fluid or creeping mold, not mechanical scans. Use layered gradients and inner shadows to create wet membrane sheen: e.g. gel button — radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), transparent 45%) over linear-gradient(180deg, #4ade80, #22c55e, #15803d), with inset 0 -6px 12px rgba(0,60,20,.35) for depth. Progress bars: #0d1f17 track, #39ff14 fill with background-size: 200% 100% and a slow translate/gradient animation to suggest slime flow, plus 0 0 14px rgba(57,255,20,.55) glow. Typography: clinical monospaced or squared sans for readouts, 11–13px data labels. Imagery: petri dishes, test tubes, centrifuge rings, DNA helixes, cell grids. Do not drift into cyberpunk; the decisive difference is wet/organic/lab versus chrome/neon/dystopia. Avoid hard metal textures, circuit patterns, and hot magenta-cyan neon. Preserve text contrast (greens on black can be too dim — push luminous greens to at least #22c55e against #0a120f), visible focus states, and honor prefers-reduced-motion by stopping the slime pulse.",
      "zh": "按生物朋克（Biopunk）构建这个界面。画布：近黑的实验台（#0a120f）或无菌临床灰（#e8f4f8），取决于你想要暗色孵化舱还是明亮洁净室读数。决定性信号：控件渲染为生长出来的有机形态——凝胶垫、琼脂皿或半透明组织，边缘柔软不规则；配色锚定在病态生物发光绿（#39ff14、#7fff00、#22c55e）、黏液黄、感染感的肉粉色（#ff6b9d、#ff85a1）和冰冷实验室白（#e8f4f8）；进度和加载要像搏动液体或蔓延菌丝，而不是机械扫描。用层叠渐变和内阴影制造湿润薄膜光泽：例如凝胶按钮——在 linear-gradient(180deg, #4ade80, #22c55e, #15803d) 之上叠加 radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), transparent 45%)，并用 inset 0 -6px 12px rgba(0,60,20,.35) 做纵深。进度条：轨道 #0d1f17，填充 #39ff14，background-size: 200% 100%，用缓慢的平移/渐变动画表现黏液流动，再加 0 0 14px rgba(57,255,20,.55) 光晕。字体：临床等宽或方正无衬线，11–13px 数据标签。图像：培养皿、试管、离心环、DNA 双螺旋、细胞网格。不要滑向赛博朋克；决定性区别在于湿件/有机/实验室 versus 铬合金/霓虹/反乌托邦。避免硬金属纹理、电路纹样和热品红-电光青霓虹。保证文字对比度（绿色在黑底上容易偏暗——功能文字至少用 #22c55e 配 #0a120f），焦点状态可见，并在 prefers-reduced-motion 下停止黏液脉冲。"
    },
    "accessibility": {
      "en": "Glowing greens and low-luminance pinks on near-black are atmospheric but often fail 4.5:1 text contrast — push functional text to at least #22c55e on #0a120f and avoid setting small labels directly on dark translucent gels without a backing layer.\n\nPulsing, creeping, and heartbeat animations can trigger vestibular symptoms or anxiety; keep them slow and non-essential, and pause them under prefers-reduced-motion and prefers-reduced-transparency.\n\nDense medical readouts and tiny monospaced data labels raise cognitive load: reserve them for decorative corners, keep primary actions in a larger clean sans, and never rely on color alone to communicate health/critical state.",
      "zh": "发光的绿色和低亮度粉色在近黑背景上有氛围感，但常常过不了 4.5:1 的文字对比度——功能文字至少做到 #22c55e 在 #0a120f 上，不要把小标签直接放在深色半透明凝胶上而不加背层。\n\n脉冲、蔓延和心跳动画可能诱发前庭症状或焦虑；保持它们缓慢且非必要，并在 prefers-reduced-motion 和 prefers-reduced-transparency 下暂停。\n\n密集的医疗读数和极小的等宽数据标签会加重认知负荷：把它们留给装饰角，主操作使用更大的清爽无衬线，且不要只靠颜色传达健康/危急状态。"
    },
    "origin": {
      "en": "Biopunk grew out of cyberpunk in the late 1980s as writers turned from silicon networks to biotechnology: Greg Bear's 'Blood Music' (1985 novel, based on a 1983 short story) is the most-cited early landmark, and Paul Di Filippo's 'Ribofunk' (1996) coined the playful funk-biology tone. Around the same time, the term attached to a DIY biohacker movement experimenting with garage genetic engineering. As a visual style it crystallized in games, film, and app concepts that needed 'the organic opposite of cyberpunk' — all mucus, lab glass, and twitching wetware.",
      "zh": "生物朋克在 1980 年代末从赛博朋克中生长出来，作家们把关注点从硅基网络转向生物技术：Greg Bear 的《Blood Music》（1985 年小说，源自 1983 年短篇）是最常被引用的早期里程碑，Paul Di Filippo 的《Ribofunk》（1996）则奠定了 playful 的 funk-生物学基调。同一时期，这个词也附着到在车库进行基因工程实验的 DIY 生物黑客运动上。作为视觉风格，它在游戏、电影和应用概念中结晶为「赛博朋克的有机对立面」——全是黏液、实验室玻璃和颤动的湿件。"
    },
    "seeAlso": [
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/liquid-glass",
        "name": "Liquid Glass"
      },
      {
        "slug": "styles/pixel-art",
        "name": "Pixel Art"
      }
    ]
  },
  {
    "slug": "afrofuturism",
    "name": {
      "en": "Afrofuturism",
      "zh": "非洲未来主义（Afrofuturism）"
    },
    "tagline": {
      "en": "Afrofuturism projects African and diasporic culture into science fiction and the cosmos: interfaces that read like a star chart, a royal banner, and a launch console at once. Deep space black is edged with gold, burnt orange, and royal purple; African geometric patterns frame sunbursts and constellations instead of neoclassical ornament. It has traveled from Sun Ra's cosmic jazz to the Wakandan UI of Black Panther.",
      "zh": "非洲未来主义把非洲与非裔离散文化投射进科幻与宇宙：界面同时读起来像星图、皇室旗帜与发射控制台。深空黑镶着金、焦橙与皇室紫；非洲几何纹样框住日轮与星座，取代新古典装饰。它从 Sun Ra 的宇宙爵士一路走来，直到《黑豹》的瓦坎达 UI。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual/UI expression of Afrofuturism — cosmic, Africa-inspired, technologically optimistic surfaces — not the literary genre as a whole. It is distinct from Art Deco (1920s Parisian luxury geometry) and from generic space/sci-fi HUDs that carry no African pattern or diasporic symbolism.",
      "zh": "范围：本条覆盖非洲未来主义的视觉/UI 表达——宇宙感、非洲灵感、科技乐观的表面——而非整个文学类型。它与装饰艺术（Art Deco，1920 年代巴黎奢华几何）以及没有非洲纹样或离散文化符号的通用太空/科幻 HUD 都不同。"
    },
    "aliases": {
      "en": [
        "black panther hud with gold tribal borders",
        "african patterns in space with sun and stars",
        "gold purple and orange futuristic african interface",
        "afro sci fi cosmic website with geometric motifs",
        "music player that looks like a royal space amulet"
      ],
      "zh": [
        "黑豹那种带金色部落边框的 HUD",
        "非洲纹样在太空里配太阳和星星",
        "金紫橙配色的未来感非洲风界面",
        "带几何图案的 Afro Sci-Fi 太空网站",
        "像皇室太空护符一样的音乐播放器"
      ]
    },
    "signals": [
      {
        "id": "tribal-patterns",
        "role": "defining",
        "name": {
          "en": "African geometric pattern language",
          "zh": "非洲几何纹样语言"
        },
        "facet": "imagery",
        "description": {
          "en": "Mud-cloth, kente, and adinkra-like tessellations — triangles, chevrons, diamonds, and interlocking lines — repeat as borders, panels, or masks in 2–4px metallic strokes.",
          "zh": "泥布（mud cloth）、肯特（kente）、阿丁克拉（adinkra）风格的 tessellation——三角形、人字形、菱形与互锁线条——以 2–3px 金属描边重复出现在边框、面板或遮罩上。"
        }
      },
      {
        "id": "warm-metallics",
        "role": "defining",
        "name": {
          "en": "Warm metallic palette",
          "zh": "暖色金属配色"
        },
        "facet": "color",
        "description": {
          "en": "Gold #d4af37, bronze, copper, burnt orange #f26522, and royal purple #6b2d5c on a dark starfield #0d0418; color reads as both regal and cosmic.",
          "zh": "金色 #d4af37、青铜、铜、焦橙 #f26522 与皇室紫 #6b2d5c 铺在深空 #0d0418 上；色彩同时显得尊贵而宇宙。"
        }
      },
      {
        "id": "starfield-cosmos",
        "role": "defining",
        "name": {
          "en": "Deep-space starfield backdrop",
          "zh": "深空星空背景"
        },
        "facet": "imagery",
        "description": {
          "en": "A near-black cosmic ground dotted with stars, nebula washes, and faint constellation traces; space is the literal and metaphorical canvas.",
          "zh": "接近黑色的宇宙底上点缀星星、星云晕染与 faint 星座连线；太空是字面与隐喻双重画布。"
        }
      },
      {
        "id": "sun-stars",
        "role": "defining",
        "name": {
          "en": "Sun and star iconography",
          "zh": "太阳与星辰图腾"
        },
        "facet": "imagery",
        "description": {
          "en": "A central radiating sun, eight-pointed stars, or constellation motifs rendered in metallic gold line-art; warm celestial bodies are the focal emblem.",
          "zh": "中心放射状太阳、八角星或星座图腾，以金色线描呈现；温暖的天体是视觉焦点徽章。"
        }
      },
      {
        "id": "tribal-geometry",
        "role": "defining",
        "name": {
          "en": "Tribal geometric framing",
          "zh": "部落几何边框"
        },
        "facet": "geometry",
        "description": {
          "en": "Panels and buttons are edged with angular, stepped, or interlocking frames rather than plain rectangles; the geometry carries cultural pattern logic, not Art Deco luxury.",
          "zh": "面板与按钮使用有角度、阶梯状或互锁的边框，而非普通矩形；几何承载的是文化纹样逻辑，不是装饰艺术的奢华。"
        }
      },
      {
        "id": "bold-display-type",
        "role": "supporting",
        "name": {
          "en": "Bold display type with wide stance",
          "zh": "粗壮展示字体"
        },
        "facet": "typography",
        "description": {
          "en": "Headings in a heavy geometric sans or stencil face, uppercase, letter-spacing 0.12–0.25em; text sits like a banner or emblem.",
          "zh": "标题使用重型几何无衬线或 stencil 字体，全大写，字间距 0.12–0.25em；文字像横幅或徽章一样存在。"
        }
      },
      {
        "id": "gold-foil",
        "role": "supporting",
        "name": {
          "en": "Gold-foil gradients",
          "zh": "金箔渐变"
        },
        "facet": "surface",
        "description": {
          "en": "Strokes and display text use vertical gold gradients (#f9e076 → #d4af37 → #9c7f22) with a hard highlight stop so they read as metal leaf.",
          "zh": "描边与展示文字使用垂直金色渐变（#f9e076 → #d4af37 → #9c7f22），带硬高光节点，使其读起来像金属箔。"
        }
      },
      {
        "id": "deco-ornament",
        "role": "avoid",
        "name": {
          "en": "1920s Parisian luxury geometry",
          "zh": "1920 年代巴黎奢华几何"
        },
        "facet": "geometry",
        "description": {
          "en": "Mirror symmetry, stepped ziggurats, and gilded all-caps hotel signage without tribal pattern or cosmic ground read as Art Deco, not Afrofuturism.",
          "zh": "镜面严格对称、阶梯金字塔和镀金全大写酒店字体，若没有部落纹样或星空底色，就会读成装饰艺术（Art Deco），而不是非洲未来主义。"
        }
      }
    ],
    "confusedWith": {
      "slug": "art-deco",
      "name": "Art Deco",
      "because": {
        "en": "This is Afrofuturism because the geometry is drawn from African pattern languages — mud-cloth grids, kente chevrons, adinkra-like symbols — and the palette is warm cosmic metal (gold, burnt orange, royal purple) on a starfield. The ornament is telling a diasporic science-fiction story, not a 1920s luxury story.",
        "zh": "这是非洲未来主义，因为其几何来自非洲纹样语言——泥布网格、肯特人字、阿丁克拉式符号——配色则是星空底上的暖色金属（金、焦橙、皇室紫）。装饰在讲述离散文化的科幻故事，而不是 1920 年代的奢华故事。"
      },
      "wouldBecomeIf": {
        "en": "It would become Art Deco if the tribal patterns were replaced by mirror-symmetric sunbursts, stepped ziggurats, and gilded all-caps hotel lettering on a lacquer-black ground with no African motifs or space canvas.",
        "zh": "如果把部落纹样换成镜面严格对称的日轮、阶梯金字塔与镀金全大写酒店字体，并把非洲图腾与星空画布全部去掉，只留漆黑底色，那就变成装饰艺术（Art Deco）了。"
      }
    },
    "code": [
      {
        "title": "Tribal geometric border (repeating chevrons)",
        "language": "css",
        "code": "border: 2px solid #d4af37;\nbackground: repeating-linear-gradient(45deg, transparent 0 8px, rgba(212,175,55,.35) 8px 10px), #1a0b2e;"
      },
      {
        "title": "Gold-foil display type",
        "language": "css",
        "code": "background: linear-gradient(180deg, #f9e076 0%, #d4af37 50%, #9c7f22 100%);\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;"
      },
      {
        "title": "Deep-space starfield ground",
        "language": "css",
        "code": "background:\n  radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,.9), transparent 70%),\n  radial-gradient(1.2px 1.2px at 70% 20%, rgba(255,255,255,.7), transparent 70%),\n  radial-gradient(2px 2px at 50% 50%, rgba(249,224,118,.15), transparent 60%),\n  #0d0418;"
      }
    ],
    "brief": {
      "en": "Build an Afrofuturist UI. Canvas: deep space #0d0418 with a sparse starfield — radial-gradient dots plus a faint gold nebula wash. Palette: metallic gold #d4af37 (highlights #f9e076, shade #9c7f22), burnt orange #f26522, royal purple #6b2d5c, ivory text #efe9dc. Pattern: African geometric motifs — mud-cloth, kente, adinkra-like marks — as 2–3px gold borders. Frame panels with angular, stepped, or zigzag clip-path edges, not plain rectangles. Typography: heavy geometric sans or stencil face, uppercase headings, letter-spacing 0.15–0.25em; display text in a vertical gold gradient (background-clip: text). Focal emblem: a radiating sun or eight-pointed star in gold line-art. Buttons and sliders share tribal borders and gold-foil highlights; progress fills orange-to-purple. Depth comes from metallic contrast and line, not soft shadows. Motion: slow sun rotation or star twinkle; pause under prefers-reduced-motion. Avoid Art Deco: mirror symmetry, ziggurats, lacquer black without space, gilded hotel lettering. Keep text on solid high-contrast areas; make focus rings visible.",
      "zh": "以非洲未来主义（Afrofuturism）精神创建这个界面。画布：深空 #0d0418，配上稀疏星空——radial-gradient 星点再加一层 faint 金色星云晕染。配色：金属金 #d4af37（高光 #f9e076、暗部 #9c7f22）、焦橙 #f26522、皇室紫 #6b2d5c，以及象牙色文字 #efe9dc。纹样：非洲几何图腾——泥布、肯特、阿丁克拉式符号——以 2–3px 金色描边呈现。边框用有角度、阶梯状或锯齿形 clip-path 多边形，不要普通矩形。字体：标题用重型几何无衬线或 stencil 字体，全大写，字间距 0.15–0.25em；展示文字用垂直金色渐变（background-clip: text）。视觉焦点：一个放射状日轮或八角星的金色线描徽章。按钮与滑块共享部落边框与金箔高光；进度条填充橙到紫。纵深靠金属对比与线条，而非柔和投影。动效：日轮慢速旋转或星星闪烁；在 prefers-reduced-motion 下暂停。避免装饰艺术：镜面严格对称、阶梯金字塔、没有星空的漆黑底、镀金酒店字体。文字放在高对比实色区域；焦点环可见。"
    },
    "accessibility": {
      "en": "Warm metallic colors on a dark starfield are not automatically readable: small purple #6b2d5c text and mid-gold gradient stops can fall below 4.5:1, so test every text size against #0d0418 and place labels on solid dark plates when they cross busy patterns or nebula regions.\n\nCosmic twinkling, rotating sun rays, and gold shimmer are decorative motion that can bother vestibular and photosensitive users; keep any flashing or pulsing below three flashes per second and honor prefers-reduced-motion by freezing rotation and shimmer entirely.\n\nAfrican patterns and symbols are cultural material, not neutral clipart; use them with respect, avoid mixing unrelated traditions or sacred marks as mere decoration, and mark purely ornamental iconography aria-hidden so screen readers do not treat it as meaningful content.",
      "zh": "暖色金属在深色星空上并非自动可读：小号紫色 #6b2d5c 文字与中金色渐变节点可能低于 4.5:1，因此要针对 #0d0418 实测每种字号，并在文字跨越 busy 纹样或星云区域时垫一块深色实色板。\n\n星空闪烁、日轮旋转与金箔 shimmer 属于装饰性动效，可能诱发前庭与光敏用户不适；任何闪烁或脉冲保持每秒低于 3 次，并在 prefers-reduced-motion 下完全冻结旋转与闪烁。\n\n非洲纹样与符号是文化素材，不是中性剪贴画；使用时应尊重原意，避免把不同传统或神圣符号当作纯粹装饰混用，并把纯装饰性图标 aria-hidden，让屏幕阅读器不会把它们当作有意义内容。"
    },
    "origin": {
      "en": "The term was coined by cultural critic Mark Dery in his 1993 essay 'Black to the Future' — interviews with Samuel R. Delany, Greg Tate, and Tricia Rose that named a current already running through Sun Ra's cosmic jazz persona (developed from the early 1950s), George Clinton's Parliament-Funkadelic Mothership mythology (notably the 1975 Mothership Connection album and tour), and the fiction of Octavia Butler. Scholar Alondra Nelson then gave the field an institutional home by launching the AfroFuturism listserv in 1999. The look entered mainstream UI consciousness through album art, editorial design, and especially Ryan Coogler's Black Panther (2018), where production designer Hannah Beachler and costume designer Ruth E. Carter imagined Wakandan technology through African forms.",
      "zh": "这个词由文化评论家 Mark Dery 在 1993 年的文章《Black to the Future》中创造——他对 Samuel R. Delany、Greg Tate 与 Tricia Rose 的访谈为一股已经存在的潮流命了名，这股潮流贯穿 Sun Ra 自 1950 年代初发展起来的宇宙爵士人格、George Clinton 的 Parliament-Funkadelic Mothership 神话（尤其是 1975 年的 Mothership Connection 专辑与巡演），以及 Octavia Butler 的小说。学者 Alondra Nelson 于 1999 年创办 AfroFuturism 邮件列表，为这一领域提供了学术据点。该视觉进入主流 UI 意识的渠道包括唱片封面、编辑设计，尤其是 Ryan Coogler 的《黑豹》（2018）——美术指导 Hannah Beachler 与服装设计师 Ruth E. Carter 以非洲形式重新想象了瓦坎达科技。"
    },
    "seeAlso": [
      {
        "slug": "styles/art-deco",
        "name": "Art Deco"
      },
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      }
    ]
  },
  {
    "slug": "de-stijl",
    "name": {
      "en": "De Stijl",
      "zh": "风格派（De Stijl / 新造型主义 / 蒙德里安风格）"
    },
    "tagline": {
      "en": "De Stijl is the Dutch abstract movement that reduced painting and design to a strict grammar of horizontal and vertical black lines enclosing rectangles of red, yellow, and blue on a white ground. Every curve, diagonal, and representational reference is rejected; balance is achieved asymmetrically by shifting the weight of color blocks across an invisible orthogonal grid. The look is inseparable from Piet Mondrian's mature Neo-Plasticist canvases and from Theo van Doesburg's magazine and architectural projects of 1917–1931.",
      "zh": "风格派（De Stijl）是一场荷兰抽象运动，把绘画与设计压缩成一套严格语法：水平与垂直的黑线框住白色底上的红、黄、蓝矩形。一切曲线、对角线、再现性参照都被排除；平衡靠色块在隐形正交网格上的非对称位移来实现。这种外观与 Piet Mondrian 成熟的新造型主义画布，以及 Theo van Doesburg 在 1917–1931 年间的杂志与建筑项目密不可分。"
    },
    "scope": {
      "en": "Scope: This entry covers the De Stijl look as it appears in graphic and UI design — the black-grid, primary-rectangle, no-curve vocabulary. It is not the whole of Dutch modernism; Constructivism shares the geometric spirit but adds diagonals and industrial imagery, while Bauhaus shares the primaries but freely uses circles, triangles, and all-lowercase type.",
      "zh": "范围：本条覆盖风格派在平面与 UI 设计中的样貌——黑网格、原色矩形、零曲线语汇。它不是荷兰现代主义的全部；构成主义共享几何精神，但加入对角线与工业意象，而包豪斯共享三原色，却自由使用圆、三角与全小写几何字体。"
    },
    "aliases": {
      "en": [
        "mondrian style with red yellow blue squares and black lines",
        "websites that look like a mondrian painting",
        "strict grid of black lines and primary color blocks",
        "rectangles only no curves no gradients ui",
        "neoplasticism style with white background and colored blocks",
        "that dutch design with only straight lines and right angles"
      ],
      "zh": [
        "蒙德里安风格，红黄蓝方块加黑线",
        "看起来像蒙德里安画作的网站",
        "黑线网格套原色块的严格网格",
        "只有矩形、零曲线、零渐变的 UI",
        "白底彩色块的新造型主义风",
        "只有直线和直角的荷兰设计"
      ]
    },
    "signals": [
      {
        "id": "orthogonal-grid",
        "role": "defining",
        "name": {
          "en": "Horizontal and vertical black grid",
          "zh": "水平与垂直的黑网格"
        },
        "facet": "geometry",
        "description": {
          "en": "The composition is held together by straight black lines running only at 0° and 90° — no diagonals, no curves. Lines are usually 2–4px thick and act as both structure and edge.",
          "zh": "构图只由 0° 和 90° 的黑色直线维系，没有对角线、没有曲线。线通常粗 2–4px，同时充当结构与边界。"
        }
      },
      {
        "id": "rectangles-only",
        "role": "defining",
        "name": {
          "en": "Rectangles only",
          "zh": "只使用矩形"
        },
        "facet": "geometry",
        "description": {
          "en": "Every colored or outlined shape is a rectangle. Circles, triangles, blobs, icons, and rounded corners are excluded — right angles are the only geometry.",
          "zh": "所有有色或描边的形状都是矩形。圆、三角、流体形、图标、圆角都被排除——直角是唯一的几何语言。"
        }
      },
      {
        "id": "primaries-plus-ink",
        "role": "defining",
        "name": {
          "en": "Primaries plus black and white",
          "zh": "三原色加黑与白"
        },
        "facet": "color",
        "description": {
          "en": "The palette is locked to unmixed red, yellow, and blue on a white ground, bounded by black lines. No gradients, no tints, no greys, no expanded palette.",
          "zh": "调色板严格锁定为未调和的红、黄、蓝，衬以白色底、黑色线。没有渐变、没有色调、没有灰色、没有扩展色。"
        }
      },
      {
        "id": "asymmetric-balance",
        "role": "defining",
        "name": {
          "en": "Asymmetric equilibrium",
          "zh": "非对称平衡"
        },
        "facet": "layout",
        "description": {
          "en": "Large color blocks on one side of the canvas are offset by clusters of smaller blocks or denser black lines on the other — balance without mirror symmetry.",
          "zh": "画面一侧的大色块由另一侧的小色块簇或更密的黑线来抵消——平衡不靠镜像对称，而靠视觉重量的非对称分布。"
        }
      },
      {
        "id": "flat-matte-planes",
        "role": "defining",
        "name": {
          "en": "Flat matte planes",
          "zh": "扁平哑光色块"
        },
        "facet": "surface",
        "description": {
          "en": "All fills are opaque, flat, and texture-free. Shadows, glows, gradients, glass, and depth effects would break the Neo-Plasticist discipline.",
          "zh": "所有填充都不透明、平涂、无纹理。阴影、辉光、渐变、玻璃或纵深效果都会打破新造型主义纪律。"
        }
      },
      {
        "id": "uniform-line-weight",
        "role": "supporting",
        "name": {
          "en": "Uniform ink line weight",
          "zh": "统一的墨线粗细"
        },
        "facet": "geometry",
        "description": {
          "en": "Grid lines keep a consistent thickness throughout the composition — typically 2–4px — so the rhythm of the rectangles reads as a single system.",
          "zh": "网格线在整个构图中保持一致的粗细——通常 2–4px——让矩形的节奏读起来像同一个系统。"
        }
      },
      {
        "id": "right-angles",
        "role": "supporting",
        "name": {
          "en": "Every corner is 90°",
          "zh": "所有角都是 90°"
        },
        "facet": "geometry",
        "description": {
          "en": "No rounded corners, chamfers, or arcs. The strictness of the right angle is part of the style's visual signature.",
          "zh": "没有圆角、倒角或弧线。直角的严苛是这个风格的视觉签名之一。"
        }
      },
      {
        "id": "curves-diagonals",
        "role": "avoid",
        "name": {
          "en": "Curves and diagonals",
          "zh": "曲线与对角线"
        },
        "facet": "geometry",
        "description": {
          "en": "Any circle, triangle, slanted line, or organic shape immediately reads as Constructivist, Bauhaus, or Memphis rather than De Stijl.",
          "zh": "任何圆、三角、斜线或有机形状都会立刻被读成构成主义、包豪斯或孟菲斯，而不是风格派。"
        }
      }
    ],
    "confusedWith": {
      "slug": "bauhaus",
      "name": "Bauhaus",
      "because": {
        "en": "This is De Stijl because the vocabulary is strictly orthogonal: only horizontal and vertical black lines, only rectangles, no curves — Bauhaus would have introduced circles, triangles, and diagonals.",
        "zh": "这是风格派，因为它的语汇严格正交：只有水平与垂直的黑线、只有矩形、零曲线——包豪斯则会引入圆、三角和对角线。"
      },
      "wouldBecomeIf": {
        "en": "It would become Bauhaus if the black grid opened up to circles, triangles, and diagonal bars, and the type switched to all-lowercase geometric lettering.",
        "zh": "如果黑网格开始容纳圆、三角和对角线，并且字体切换成全小写几何字体，它就变成包豪斯了。"
      }
    },
    "code": [
      {
        "title": "Palette and strict orthogonal grid variables",
        "language": "css",
        "code": ":root {\n  --stijl-red: #e3000f;\n  --stijl-yellow: #f9d71c;\n  --stijl-blue: #0057a8;\n  --stijl-ink: #0a0a0a;\n  --stijl-paper: #ffffff;\n  --stijl-line: 3px;\n}\n.stijl { background: var(--stijl-paper); font-family: 'Helvetica Neue', Arial, sans-serif; }"
      },
      {
        "title": "Mondrian-style cell: a rectangle bounded by black borders",
        "language": "css",
        "code": ".stijl-cell {\n  border: var(--stijl-line) solid var(--stijl-ink);\n  border-radius: 0;\n  background: var(--stijl-paper);\n}\n.stijl-cell.red { background: var(--stijl-red); }\n.stijl-cell.yellow { background: var(--stijl-yellow); }\n.stijl-cell.blue { background: var(--stijl-blue); }"
      },
      {
        "title": "Asymmetric composition with CSS Grid",
        "language": "css",
        "code": ".stijl-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.5fr;\n  grid-template-rows: 1fr 1.2fr 0.8fr;\n  gap: var(--stijl-line);\n  background: var(--stijl-ink);\n}\n.stijl-grid > * { border: none; }"
      }
    ],
    "brief": {
      "en": "Build the surface as De Stijl (Neo-Plasticism). Canvas: white #ffffff, ink lines #0a0a0a. Palette is restricted to three flat primaries — red #e3000f, yellow #f9d71c, blue #0057a8 — plus paper white; no gradients, shadows, tints, or textures. Every shape is a rectangle; every line is horizontal or vertical at 2–4px thick; border-radius must be 0px everywhere. Compose with CSS Grid or absolute positioning, using the black lines as both gap filler and bounding edges. Asymmetric balance is essential: place one large primary block off-center and counter it with a cluster of smaller blocks or denser black divisions on the opposite side. Type should be a neutral sans-serif (Helvetica Neue, Arial, or similar), sentence case, kept small and unobtrusive; avoid display fonts, all-lowercase geometric lettering, or ornament. Buttons are solid rectangles of red, yellow, or blue with 2–4px black borders; hover swaps the fill to another primary or to white, never adds depth or rounding. Motion, if any, is a hard cut or a linear translate along the horizontal/vertical axis; no easing curves, no fades, no rotation. Do not drift into Bauhaus: the moment you add circles, triangles, diagonals, or all-lowercase geometric type, you have left De Stijl. Preserve text contrast (ink on paper and yellow, paper on red/blue), visible focus outlines as black 2px offsets, and honor prefers-reduced-motion by removing any movement.",
      "zh": "按风格派（De Stijl / 新造型主义）创建界面。画布：白色 #ffffff，墨线 #0a0a0a。调色板严格限制为三种平涂原色——红 #e3000f、黄 #f9d71c、蓝 #0057a8——外加纸白；禁止渐变、阴影、色调或纹理。每个形状都是矩形；每条线都是水平或垂直，粗细 2–4px；所有 border-radius 必须为 0px。用 CSS Grid 或绝对定位来构图，把黑线同时当作间隙填充和矩形边界。非对称平衡是关键：把一块大原色块放在偏离中心的位置，另一侧用小色块簇或更密的黑分割线来平衡。字体用中性无衬线（Helvetica Neue、Arial 或类似），句首大写，保持小而低调；避免展示字体、全小写几何字体或装饰。按钮是红/黄/蓝的实心矩形，带 2–4px 黑边框；hover 时把填充换成另一种原色或白色，绝不增加纵深或圆角。如需动效，只能用硬切或沿水平/垂直轴的线性平移；不要缓动曲线、不要淡入淡出、不要旋转。不要滑向包豪斯：一旦加入圆、三角、对角线或全小写几何字体，就不再是风格派。保持文字对比度（墨线在纸/黄上，纸白在红/蓝上），焦点框用 2px 黑色偏移 outline，并响应 prefers-reduced-motion 关闭所有移动。"
    },
    "accessibility": {
      "en": "The strict black/white ground gives strong contrast, but primary-on-primary adjacencies — especially red next to blue — can vibrate and fail for users with color-vision differences. Never use color alone to indicate state; pair active elements with a shape change, a black border shift, or an extra grid line.\n\nUniform thin grid lines can be hard to perceive or to target as interactive boundaries. Keep interactive elements (buttons, progress tracks, volume bars) large enough for touch — at least 44×44px — and give them a visible focus indicator that does not rely on the black grid alone.\n\nAsymmetric layouts raise cognitive load because the visual weight is deliberately off-balance. Keep labels and controls predictable in source order, avoid decorative rectangles that look actionable, and provide clear aria-labels on icon-only buttons.",
      "zh": "严格黑白底提供强对比，但原色相邻——尤其是红蓝并置——会产生振动，对色觉差异用户不友好。绝不要单独用颜色表示状态；需把激活态与形状变化、黑线位移或额外网格线配对。\n\n统一的细网格线可能难以辨识，也难以作为可交互边界命中。保持交互元素（按钮、进度轨道、音量条）足够大——至少 44×44px——并给它们可见的焦点指示器，不要只依赖黑网格。\n\n非对称布局会提升认知负荷，因为视觉重量被刻意放偏。保持标签和控件在源码顺序中可预测，避免让装饰性矩形看起来像可操作项，并为纯图标按钮提供清晰的 aria-label。"
    },
    "origin": {
      "en": "De Stijl was founded in Amsterdam in 1917 by the painter and critic Theo van Doesburg, who launched the magazine De Stijl as the movement's mouthpiece; the painters Piet Mondrian and Bart van der Leck, the architect J.J.P. Oud, and the designer Vilmos Huszár were among its earliest contributors. Mondrian's mature 'Neo-Plasticist' canvases — red, yellow, and blue rectangles locked into white fields by black verticals and horizontals — became the style's public face, while Van Doesburg pushed the same grammar into architecture and typography. The magazine ceased publication in 1931, and the movement dissolved as its members diverged, but its reduction to pure form and primary color became one of the lasting reference points for modern graphic design.",
      "zh": "风格派于 1917 年在阿姆斯特丹由画家兼批评家 Theo van Doesburg 创立，他创办了《De Stijl》杂志作为该运动的阵地；画家 Piet Mondrian、Bart van der Leck，建筑师 J.J.P. Oud，设计师 Vilmos Huszár 等人是最初的贡献者。Mondrian 成熟的「新造型主义」画布——红、黄、蓝矩形被黑色纵横线锁进白色场域——成为该风格最公众化的面孔，而 Van Doesburg 则将同一语法推进到建筑与字体设计。杂志于 1931 年停刊，运动也随着成员分歧而解散，但其对纯粹形式与原色的简化成为现代平面设计最持久的参照点之一。"
    },
    "seeAlso": [
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      },
      {
        "slug": "styles/constructivism",
        "name": "Constructivism"
      },
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      }
    ]
  },
  {
    "slug": "constructivism",
    "name": {
      "en": "Constructivism",
      "zh": "构成主义（Constructivism）"
    },
    "tagline": {
      "en": "Constructivism translates early Soviet avant-garde graphic language into UI: razor-sharp diagonals, red-and-black slabs, clipped industrial photography, and blocky sans-serif type locked into dynamic, poster-like layouts. It still reads as propaganda energy rather than decoration — every element looks arranged to shout a message across a noisy square. A modern app borrowing the look usually wants urgency, solidarity, or editorial punch.",
      "zh": "构成主义把早期苏联先锋派的图形语言转译成 UI：锐利的对角线、红黑块面、裁剪过的工业照片，以及被锁定在动态海报式排版中的粗黑无衬线字体。它读起来仍然是一种宣传能量，而不是装饰 —— 每个元素都像是在嘈杂广场上高声喊话。现代 App 借用这种外观，通常是为了传递紧迫感、集体感或编辑式冲击力。"
    },
    "scope": {
      "en": "Scope: This entry covers the graphic style that migrated from Soviet posters and book design into digital UI. It is not the later Constructivist architecture of poured concrete, nor the abstract sculpture of Tatlin's Monument to the Third International; those are siblings, not signals.",
      "zh": "范围：本条覆盖从苏联海报和书籍设计迁移到数字 UI 的图形风格。它不包括后来塔特林「第三国际纪念塔」那种构成主义雕塑，也不包括浇筑混凝土的构成主义建筑；那些是近亲，不是本条的识别信号。"
    },
    "aliases": {
      "en": [
        "soviet propaganda poster style in an app",
        "red and black diagonal blocks with industrial photos",
        "that bold angled typography like old revolution posters",
        "constructivist design with photo collage and geometric bars",
        "heavy sans-serif ui that looks like a political broadsheet"
      ],
      "zh": [
        "应用里那种苏联宣传海报风",
        "红黑对角块配工业照片",
        "像革命海报那样粗黑倾斜的字体",
        "照片拼贴加几何条的构成主义设计",
        "厚重无衬线、像政治传单的 UI"
      ]
    },
    "signals": [
      {
        "id": "diagonal-composition",
        "role": "defining",
        "name": {
          "en": "Diagonal composition",
          "zh": "对角线构图"
        },
        "facet": "layout",
        "description": {
          "en": "The layout is built from slashed rectangles, chevrons, and bars that run at 30–60°; horizontals and verticals feel like exceptions, not the rule.",
          "zh": "版面由 30–60° 的斜切矩形、人字条和斜杠构成；水平和垂直反而像例外，而不是规则。"
        }
      },
      {
        "id": "red-black-slabs",
        "role": "defining",
        "name": {
          "en": "Red-and-black slabs",
          "zh": "红黑块面"
        },
        "facet": "color",
        "description": {
          "en": "The palette is almost always a loud red (e.g. #D3191C), stark black (#0A0A0A), and a muted off-white or newsprint grey (#E8E4D9); color sits as flat planes, not gradients.",
          "zh": "配色几乎总是 loud red（例如 #D3191C）、纯黑（#0A0A0A）和褪色的米白或新闻纸灰（#E8E4D9 / #B8B2A2）；颜色以平涂面出现，不用渐变。"
        }
      },
      {
        "id": "photomontage",
        "role": "defining",
        "name": {
          "en": "Clipped photomontage",
          "zh": "裁剪的照片拼贴"
        },
        "facet": "imagery",
        "description": {
          "en": "Industrial or mass-culture photos are cut into sharp geometric panels with hard edges, often overlaid by red bars or black shapes, never softly rounded.",
          "zh": "工业或大众文化照片被裁成边缘锋利的几何画板，常常被红条或黑色形状压住，绝不带柔和的圆角。"
        }
      },
      {
        "id": "industrial-imagery",
        "role": "defining",
        "name": {
          "en": "Industrial and mass icons",
          "zh": "工业与大众符号"
        },
        "facet": "imagery",
        "description": {
          "en": "Gears, smokestacks, loudspeakers, fists, aeroplanes, and crowds appear as silhouettes or high-contrast halftones, signaling collective production and modernity.",
          "zh": "齿轮、烟囱、喇叭、拳头、飞机、人群以剪影或高对比半调出现，暗示集体生产与现代性。"
        }
      },
      {
        "id": "bold-sans",
        "role": "defining",
        "name": {
          "en": "Bold grotesk type",
          "zh": "粗黑 grotesk 字体"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms are heavy, condensed sans-serifs — equivalents of Helvetica/Impact/Arial Black — set in all caps with tight leading and often tilted or stacked.",
          "zh": "字重很大、偏窄的无衬线体 —— 接近 Helvetica / Impact / Arial Black —— 全大写、行距紧，常被倾斜或堆叠。"
        }
      },
      {
        "id": "dynamic-tilt",
        "role": "defining",
        "name": {
          "en": "Dynamic tilt",
          "zh": "动态倾斜"
        },
        "facet": "geometry",
        "description": {
          "en": "Headings, buttons, and image panels lean at the same diagonal angle (typically skewX(-8°) to skewX(-15°)), so the whole card feels like it is moving forward.",
          "zh": "标题、按钮和图像画板以相同对角角度倾斜（通常是 skewX(-8°) 到 skewX(-15°)），让整张卡片感觉在向前冲。"
        }
      },
      {
        "id": "poster-density",
        "role": "supporting",
        "name": {
          "en": "Poster density",
          "zh": "海报密度"
        },
        "facet": "layout",
        "description": {
          "en": "Text and shapes butt against edges and overlap; generous padding and centered symmetry are avoided because the page is treated as a single propaganda sheet.",
          "zh": "文字和图形紧贴边缘并互相交叠； generous padding 和居中对称被回避，因为页面被当作一整张宣传海报处理。"
        }
      },
      {
        "id": "static-grid",
        "role": "avoid",
        "name": {
          "en": "Static orthogonality",
          "zh": "静态正交网格"
        },
        "facet": "layout",
        "description": {
          "en": "Calm, centered cards with equal white space and right-angle grids immediately kill the style — that territory belongs to De Stijl and Swiss minimalism.",
          "zh": "平静的居中卡片、均等的留白和直角网格会立刻扼杀这个风格 —— 那是 De Stijl 和瑞士极简主义的领地。"
        }
      }
    ],
    "confusedWith": {
      "slug": "de-stijl",
      "name": "De Stijl",
      "because": {
        "en": "This is Constructivism because the layout is kinetic — diagonals, skewed typography, photomontage, and a red-black-industrial palette drive the composition.",
        "zh": "这是构成主义，因为版面是动势的 —— 对角线、倾斜字体、照片拼贴，以及红-黑-工业的配色在推动构图。"
      },
      "wouldBecomeIf": {
        "en": "It would become De Stijl if every diagonal were straightened into a right angle, the photographs were removed, and the palette swapped to red-yellow-blue on white static grids.",
        "zh": "如果把每条对角线都拉直成直角、去掉照片、再把配色换成白底上的红-黄-蓝静态网格，就变成 De Stijl 了。"
      }
    },
    "code": [
      {
        "title": "Diagonal red-black slab construction",
        "language": "css",
        "code": "background: #E8E4D9; border: 3px solid #0A0A0A; transform: skewX(-10deg); box-shadow: 6px 6px 0 #D3191C;"
      },
      {
        "title": "Tilted bold grotesk heading",
        "language": "css",
        "code": "font-family: var(--font-sans), 'Helvetica Neue', 'Arial Black', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.04em; transform: skewX(-8deg); color: #0A0A0A;"
      },
      {
        "title": "Clipped photomontage panel",
        "language": "css",
        "code": "clip-path: polygon(0 0, 100% 12%, 92% 100%, 8% 88%); filter: grayscale(100%) contrast(1.25); background: linear-gradient(135deg, #999 0%, #222 100%);"
      }
    ],
    "brief": {
      "en": "Create this surface in the spirit of Soviet Constructivism. Defining signals: a red-and-black slab palette — use #D3191C for the loud accent, #0A0A0A for black, and #E8E4D9 or #B8B2A2 for the off-white / newsprint ground. Build the layout from diagonals: slashed rectangles, chevrons, and bars at 30–60°; headings, buttons, and image panels should share a single skew angle (transform: skewX(-8deg) to skewX(-12deg)) so the whole composition leans forward. Use heavy, condensed grotesk type — 'Helvetica Neue', 'Arial Black', Impact, or system heavy sans — in all caps with tight leading and 0.03–0.06em letter-spacing. Images must be clipped into sharp geometric panels and treated as high-contrast grayscale photomontage (filter: grayscale(100%) contrast(1.2)), overlaid by red bars or black shapes; choose industrial/mass icons such as gears, smokestacks, loudspeakers, or fists. Hard black borders (2–3px solid #0A0A0A) and flat color planes are required; zero gradients, zero rounded corners, zero soft shadows. Keep the specific iconography and exact angle flexible, but keep the diagonal energy and propaganda density. Do not drift into De Stijl — the decisive difference is motion: straighten the diagonals to right angles, replace photos with flat primary color blocks, and add white space, and you have left Constructivism. Preserve text contrast: black on red/off-white usually passes; red on black needs careful sizing. Honor prefers-reduced-motion by removing skew/translate transitions and keeping static diagonal geometry.",
      "zh": "按苏联构成主义（Constructivism）的精神创建这个界面。决定性信号：红黑块面配色 —— 用 #D3191C 作高声部，#0A0A0A 作黑色，#E8E4D9 或 #B8B2A2 作米白 / 新闻纸灰底色。从对角线开始构建版面：斜切矩形、人字条和 30–60° 的斜杠；标题、按钮和图像画板应共享一个统一的倾斜角度（transform: skewX(-8deg) 到 skewX(-12deg)），让整个构图向前倾斜。使用厚重、偏窄的 grotesk 字体 —— 'Helvetica Neue'、'Arial Black'、Impact 或系统粗黑无衬线 —— 全大写、行距紧，letter-spacing 0.03–0.06em。图片必须裁成锋利的几何画板，并以高对比度黑白照片拼贴处理（filter: grayscale(100%) contrast(1.2)），再用红条或黑色形状压住；选择工业 / 大众符号，如齿轮、烟囱、喇叭或拳头。硬黑边框（2–3px solid #0A0A0A）和平涂色面是必需的；不要渐变、不要圆角、不要柔和阴影。具体符号和精确角度可灵活调整，但对角线动势和宣传海报密度必须保留。不要滑向 De Stijl；决定性区别在于「动」：把对角线拉成直角、用平涂三原色块替换照片并加入留白，你就已经离开构成主义了。保证文字对比度：黑字在红底 / 米白底上通常能过；红字在黑底上要谨慎控制字号。响应 prefers-reduced-motion：移除 skew / translate 过渡，保留静态对角几何。"
    },
    "accessibility": {
      "en": "The tilted type and dense overlapping panels raise real readability risks: skewed letterforms are harder to parse for dyslexic readers and screen-magnification users, so keep body text untilted and reserve skew for short headings and labels.\n\nRed-black graphics often fail non-text contrast for meaningful UI boundaries; add a secondary indicator — a thick black outline or a clear focus ring — and test icons/buttons against the off-white ground.\n\nHonor prefers-reduced-motion by disabling diagonal transitions and translate effects; the static layout should still communicate the style without animation.",
      "zh": "倾斜字体和密集交叠的画板会带来真实的可读性风险：倾斜字形对阅读障碍和屏幕放大用户更难辨认，因此正文保持不倾斜，只把 skew 留给短标题和标签。\n\n红黑图形往往满足不了有意义 UI 边界的非文字对比度；要加辅助指示器 —— 粗黑轮廓或清晰的焦点环 —— 并在米白底色上测试图标 / 按钮。\n\n响应 prefers-reduced-motion：禁用对角线过渡和位移动画；静态排版本身就应能表达风格，无需动态。"
    },
    "origin": {
      "en": "Russian Constructivism crystallised around 1915, led by Vladimir Tatlin and Alexander Rodchenko, and gained momentum after the 1917 Revolution through propaganda posters, book design, and agitprop — figures such as El Lissitzky, Lyubov Popova, and Gustav Klutsis shaped its look of photomontage, bold sans-serif type, and dynamic diagonals. The movement was effectively suppressed in the early 1930s as Socialist Realism became state doctrine, but its graphic vocabulary remained a reference for poster and editorial design ever after.",
      "zh": "俄国构成主义约于 1915 年成形，由 Vladimir Tatlin 和 Alexander Rodchenko 引领，并在 1917 年革命后通过宣传海报、书籍设计和 agitprop 迅速发展 —— El Lissitzky、Lyubov Popova、Gustav Klutsis 等人塑造了照片拼贴、粗黑无衬线和动态对角线的视觉面貌。1930 年代初，随着社会主义现实主义成为国家正统，这一运动被基本压制，但它的图形语汇从此成为海报和编辑设计的重要参照。"
    },
    "seeAlso": [
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      },
      {
        "slug": "styles/de-stijl",
        "name": "De Stijl"
      },
      {
        "slug": "styles/pop-art",
        "name": "Pop Art"
      }
    ]
  },
  {
    "slug": "pop-art",
    "name": {
      "en": "Pop Art",
      "zh": "波普艺术（Pop Art）"
    },
    "tagline": {
      "en": "Pop Art lifts the look of mass media into UI: comic panels, advertising halftones, and celebrity faces are redrawn as flat, saturated shapes locked inside thick black ink outlines, with Ben-Day dots standing in for shadows and gradients. It treats consumer culture as both subject and punchline — a soup can, a comic strip, a Marilyn — rendered in the primary-plus-neon palette of 1960s printing. The style is instantly readable because it borrows from the most familiar visual language on the newsstand.",
      "zh": "波普艺术把大众媒体的视觉语言搬进 UI：漫画分格、广告网点、名人面孔被重绘成饱和的扁平色块，圈在粗黑墨线轮廓里，本戴网点替代阴影和渐变。它把消费文化同时当作主题和笑点——一罐汤、一格漫画、一张玛丽莲——用 1960 年代印刷品那种原色加霓虹的配色来呈现。这种风格一眼就能读懂，因为它借用了报刊亭上最熟悉的视觉语言。"
    },
    "scope": {
      "en": "Scope: Covers the Pop Art visual language as adapted to UI and graphic design — Ben-Day dots, comic-panel grids, bold outlines, and mass-media imagery. It is not the 1980s postmodern pattern language of Memphis, nor the rough photocopied collage of zine culture; those are separate entries.",
      "zh": "范围：覆盖波普艺术在 UI 与平面设计中的视觉语言——本戴网点、漫画分格、粗重描边和大众媒体图像。它不是孟菲斯那种 80 年代后现代图案语言，也不是 zine 那种粗糙复印拼贴；后两者各有条目。"
    },
    "aliases": {
      "en": [
        "websites that look like a comic book page",
        "halftone dots and thick black outlines like old ads",
        "that 60s screen-print style with soup cans and faces",
        "bold primary colors with speech bubbles",
        "comic panel layout with ben day dots",
        "retro advertising collage with celebrities"
      ],
      "zh": [
        "看起来像漫画书页面的网站",
        "老广告那种半色调网点加粗黑边",
        "60 年代丝网印刷风，汤罐头和人脸",
        "大胆原色配对话气泡",
        "漫画分格加本戴网点",
        "名人广告拼贴风"
      ]
    },
    "signals": [
      {
        "id": "ben-day-dots",
        "role": "defining",
        "name": {
          "en": "Ben-Day halftone dots",
          "zh": "本戴半色调网点"
        },
        "facet": "surface",
        "description": {
          "en": "Shading and texture are built from evenly spaced small dots — mechanical halftone cells rather than gradients — usually #000000 or the local ink color on a #ffffff ground.",
          "zh": "阴影和质感由均匀排列的小圆点构成——机械半色调细胞，而不是渐变——通常是 #000000 或本地墨色印在 #ffffff 底上。"
        }
      },
      {
        "id": "thick-black-outline",
        "role": "defining",
        "name": {
          "en": "Thick black ink outlines",
          "zh": "粗黑墨线轮廓"
        },
        "facet": "geometry",
        "description": {
          "en": "Every shape, button, panel, and letterform carries a uniform 2.5–4px solid #000000 stroke, like a comic panel inked for cheap newsprint.",
          "zh": "每个形状、按钮、面板和字体都带着统一的 2.5–4px 纯黑 #000000 描边，像廉价新闻纸上的漫画格墨线。"
        }
      },
      {
        "id": "comic-panel-grid",
        "role": "defining",
        "name": {
          "en": "Comic-strip panel grid",
          "zh": "连环漫画分格格子"
        },
        "facet": "layout",
        "description": {
          "en": "The page is broken into rectangular panels with heavy gutters and borders — the layout itself reads as a sequence of comic frames rather than a continuous canvas.",
          "zh": "页面被切成带粗重沟槽和边框的矩形画格——布局本身读起来就像一串漫画帧，而不是连续画布。"
        }
      },
      {
        "id": "saturated-primaries",
        "role": "defining",
        "name": {
          "en": "Saturated primary and neon fills",
          "zh": "饱和原色与霓虹填充"
        },
        "facet": "color",
        "description": {
          "en": "Flat fills of #ff2a2a red, #ffd500 yellow, #0066ff blue, plus hot pink #ff1493 and cyan #00e5ff — opaque, unmixed, no gradients.",
          "zh": "纯平填充：#ff2a2a 红、#ffd500 黄、#0066ff 蓝，再加艳粉 #ff1493 和青 #00e5ff——不透明、未调和、无渐变。"
        }
      },
      {
        "id": "mass-media-imagery",
        "role": "defining",
        "name": {
          "en": "Mass-media subject matter",
          "zh": "大众媒体题材"
        },
        "facet": "imagery",
        "description": {
          "en": "Soup cans, celebrity portraits, comic characters, product labels, and advertising slogans — the imagery is borrowed from the supermarket and the newsstand.",
          "zh": "汤罐头、名人肖像、漫画角色、商品标签、广告标语——图像是从超市和报刊亭借来的。"
        }
      },
      {
        "id": "speech-bubbles",
        "role": "supporting",
        "name": {
          "en": "Speech and starburst balloons",
          "zh": "对话气泡与星形爆炸框"
        },
        "facet": "geometry",
        "description": {
          "en": "Labels, prices, and calls-to-action sit inside comic speech bubbles or jagged starbursts, complete with black outlines and halftone tails.",
          "zh": "标签、价格和行动召唤坐在漫画对话气泡或锯齿星形爆炸框里，带黑边和半色调尾巴。"
        }
      },
      {
        "id": "flat-matte-fills",
        "role": "variable",
        "name": {
          "en": "Flat matte color planes",
          "zh": "纯平哑光色块"
        },
        "facet": "surface",
        "description": {
          "en": "Shadows come from halftone dots, not gradients; large areas are a single solid color with hard edges, preserving the screen-printed read.",
          "zh": "阴影来自网点而非渐变；大面积区域是单色硬边，保持丝网印刷的观感。"
        }
      },
      {
        "id": "squiggle-geometry",
        "role": "avoid",
        "name": {
          "en": "80s squiggle geometry",
          "zh": "80 年代 squiggle 几何"
        },
        "facet": "geometry",
        "description": {
          "en": "All-over Memphis squiggles, triangles, and dots-for-pattern remove the narrative, newsstand-specific imagery that makes Pop Art Pop Art.",
          "zh": "铺满画面的孟菲斯 squiggle、三角和「作为图案的圆点」会去掉让波普艺术成为波普艺术的叙事性、报刊亭专属图像。"
        }
      }
    ],
    "confusedWith": {
      "slug": "memphis",
      "name": "Memphis",
      "because": {
        "en": "This is Pop Art because the imagery is narrative and mass-media — comic panels, product labels, celebrity faces — shaded with Ben-Day dots and ringed by thick black outlines.",
        "zh": "这是波普艺术，因为图像是叙事性的、来自大众媒体——漫画分格、商品标签、名人面孔——用本戴网点做阴影，并用粗黑墨线勾边。"
      },
      "wouldBecomeIf": {
        "en": "It would become Memphis if the comic panels and product faces were replaced by 1980s toy geometry — squiggles, triangles, dots-as-allover-pattern on a white ground — with no newsstand subject matter at all.",
        "zh": "如果把这些漫画分格和商品面孔换成 80 年代的玩具几何——squiggle、三角、圆点作为铺满图案的白色底——且完全没有报刊亭题材，就变成孟菲斯了。"
      }
    },
    "code": [
      {
        "title": "Ben-Day halftone ground with radial gradients",
        "language": "css",
        "code": "background-color: #fff;\nbackground-image: radial-gradient(#000 18%, transparent 20%);\nbackground-size: 6px 6px;"
      },
      {
        "title": "Comic panel with thick ink border",
        "language": "css",
        "code": "border: 3px solid #000;\nbackground: #ffd500;\nbox-shadow: 5px 5px 0 #000;"
      },
      {
        "title": "Starburst speech bubble (inline SVG)",
        "language": "html",
        "code": "<svg viewBox='0 0 100 60' width='100' height='60'><path d='M50 0L58 20L80 8L68 28L96 30L70 38L88 56L58 44L52 60L46 44L18 56L34 38L6 30L34 28L20 8L44 20Z' fill='#ff2a2a' stroke='#000' stroke-width='3'/></svg>"
      }
    ],
    "brief": {
      "en": "Create the surface as Pop Art. Canvas: a white #ffffff comic-page ground covered with a Ben-Day halftone dot layer — radial-gradient(#000 18%, transparent 20%) with background-size: 6px 6px. Layout: break the page into rectangular comic panels with 3px solid #000000 gutters and borders. Color palette: flat opaque fills only — #ff2a2a red, #ffd500 yellow, #0066ff blue, #ff1493 hot pink, #00e5ff cyan; no gradients, no blur, no transparency. Every interactive element gets a 3–4px solid #000000 outline and, where appropriate, a hard offset shadow like box-shadow: 5px 5px 0 #000. Type: heavy condensed display sans for headlines (Impact, Haettenschweiler, 'Arial Narrow', sans-serif; weight 800–900), with body text in a plain sans-serif. Imagery: borrow from mass media — product labels, celebrity portraits, comic panels, speech bubbles, starburst badges — and shade large shapes with the halftone dot pattern. Interactions: buttons press flat into their offset shadow (transform: translate(5px,5px) and box-shadow: none on active), and starbursts can rotate a few degrees on hover. Keep long text on solid color blocks, never directly on the halftone ground. Do not drift into Memphis; the decisive difference is that Pop Art is newsstand-narrative (comics, ads, celebrities) while Memphis is abstract 80s pattern geometry. Preserve 4.5:1 text contrast on every solid fill (black text on yellow passes; white text on cyan needs checking) and honor prefers-reduced-motion.",
      "zh": "用波普艺术风格创建这个界面。画布：白色 #ffffff 的漫画页底，铺一层本戴半色调网点——radial-gradient(#000 18%, transparent 20%)，background-size: 6px 6px。布局：把页面切分成带 3px 实线 #000000 沟槽与边框的矩形漫画格。配色：只用平涂不透明的色块——#ff2a2a 红、#ffd500 黄、#0066ff 蓝、#ff1493 艳粉、#00e5ff 青；不要渐变、不要模糊、不要透明。每个可交互元素都带 3–4px 实线 #000000 描边，并在合适的地方使用生硬的偏移阴影，例如 box-shadow: 5px 5px 0 #000。字体：标题用厚重压缩展示无衬线（Impact、Haettenschweiler、'Arial Narrow'、sans-serif；weight 800–900），正文用朴素无衬线。图像：从大众媒体借用——商品标签、名人肖像、漫画分格、对话气泡、星形徽章——并用半色调网点为大面积形状做阴影。交互：按钮按压时平移进自己的偏移阴影（active 状态用 transform: translate(5px,5px) 并 box-shadow: none），星形爆炸框可在 hover 时轻微旋转几度。长文本始终放在纯色块上，绝不要直接压在半色调网点背景上。不要滑向孟菲斯；决定性区别在于波普艺术是「报刊亭叙事」（漫画、广告、名人），而孟菲斯是抽象的 80 年代图案几何。保证每个纯色填充上的文字对比度达到 4.5:1（黑字配黄能过；白字配青需要实测），并支持 prefers-reduced-motion。"
    },
    "accessibility": {
      "en": "The Ben-Day dot ground is decorative: never place body text directly on it — set text on solid color blocks with measured 4.5:1 contrast. Small halftone dots can shimmer or moiré for sensitive viewers, so keep dot scale at or above 6px and reduce their density behind content.\n\nHeavy black outlines and saturated primaries can vibrate when paired edge-to-edge; avoid red-on-blue or cyan-on-pink text blocks, and never use color alone to signal an interactive state — pair it with an outline offset or icon change.\n\nComic display type removes word-shape cues and should stay short; keep body copy, labels, and any functional text in a plain sans-serif, with a visible focus indicator that is thicker than the decorative 3px border.",
      "zh": "本戴网点背景只是装饰：绝不要把正文直接压在上面——把文字放在纯色块上，并实测 4.5:1 对比度。小网点对某些读者会闪烁或产生摩尔纹，所以网点尺寸保持不小于 6px，并降低内容背后区域的网点密度。\n\n粗黑描边和饱和原色并置时可能产生视觉振动；避免红底蓝字或青底粉字的文本块，也不要只用颜色表示交互状态——要配合 outline 偏移或图标变化一起用。\n\n漫画展示字体会破坏词形提示，应只用于短标题；正文、标签和所有功能性文字都用朴素无衬线，并给一个比装饰性 3px 边框更粗的焦点指示器。"
    },
    "origin": {
      "en": "The term 'Pop Art' was coined by British critic Lawrence Alloway around 1955 for the Independent Group — artists such as Richard Hamilton and Eduardo Paolozzi who were collaging American advertising and comic strips in London in the early 1950s. The movement crossed to the United States in the early 1960s, where Andy Warhol's Campbell's Soup Cans (1962) and Marilyn silkscreens, Roy Lichtenstein's enlarged comic panels with hand-painted Ben-Day dots, and Claes Oldenburg's soft consumer sculptures defined its mass-media vocabulary. It peaked as a mainstream avant-garde force through the mid-1960s and has been repeatedly revived in graphic and UI design as shorthand for playful consumer-culture commentary.",
      "zh": "「Pop Art」一词由英国评论家 Lawrence Alloway 大约在 1955 年提出，指 Independent Group 里 Richard Hamilton、Eduardo Paolozzi 等艺术家——他们在 1950 年代初的伦敦拼贴美国广告和漫画。这场运动在 1960 年代初传到美国，Andy Warhol 的《金宝汤罐头》（1962）和玛丽莲丝网、Roy Lichtenstein 带手绘本戴网点的放大漫画格，以及 Claes Oldenburg 的软雕塑消费品，定义了它的大众媒体词汇。它在 1960 年代中期作为主流前卫力量达到高峰，并在此后的平面和 UI 设计中被反复复兴，成为戏谑消费文化的视觉简写。"
    },
    "seeAlso": [
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      },
      {
        "slug": "styles/zine-collage",
        "name": "Zine Collage"
      },
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      }
    ]
  },
  {
    "slug": "surrealism",
    "name": {
      "en": "Surrealism",
      "zh": "超现实主义（Surrealism）"
    },
    "tagline": {
      "en": "Surrealism treats the interface as a dream canvas: recognizable objects are placed in impossible relationships — clocks melt and drape over edges, eyes float in soft gradients, solids breathe with slow morphing motion. The palette is hushed and lunar rather than neon, the lighting is diffuse and uncanny, and the composition follows the logic of the subconscious rather than the grid. It borrows its name from the 1924 art movement, but as a UI style it is a contemporary mood: the screen as a lucid dream.",
      "zh": "超现实主义把界面当作梦境画布：可辨识的物件被放进不可能的关系里——时钟融化并垂挂在边缘，眼睛漂浮在柔渐变中，实体随着缓慢的形变动画呼吸。配色是低沉而月光的，而非霓虹；光线弥漫而诡异，构图遵循潜意识逻辑，而不是网格。名字借自 1924 年的艺术运动，但作为 UI 风格它是一种当代情绪：屏幕即清醒梦。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual language of dream logic, melting forms, floating symbolic objects, and soft uncanny gradients in interface design. It is not the same as the historical Surrealist art movement, nor is it vaporwave's 80s/90s consumer nostalgia, cyberpunk's neon dystopia, or the occult strand of maximalist digital collage.",
      "zh": "范围：本条覆盖界面设计中的梦境逻辑、融化形态、漂浮象征物与柔和诡异渐变这一视觉语言。它不是历史上的超现实主义艺术运动，也不是 Vaporwave 的 80/90 年代消费怀旧、Cyberpunk 的霓虹反乌托邦，或神秘主义取向的极繁数字拼贴。"
    },
    "aliases": {
      "en": [
        "that dreamy ui with melting shapes and floating eyes",
        "soft gradient interfaces that feel like a lucid dream",
        "the art style where objects melt and gravity doesn't work",
        "mysterious surreal collage with eyes and clouds",
        "ui that looks like a dali painting crossed with a music app",
        "pastel dreamscape with impossible floating things"
      ],
      "zh": [
        "那种有融化形状和漂浮眼睛的梦幻 UI",
        "像清醒梦一样的柔渐变界面",
        "物体会融化、重力不起作用的艺术风格",
        "带眼睛和云朵的神秘超现实拼贴",
        "看起来像达利画作和音乐 App 杂交的 UI",
        "粉彩梦境配不可能漂浮物"
      ]
    },
    "signals": [
      {
        "id": "melting-forms",
        "role": "defining",
        "name": {
          "en": "Melting and flowing forms",
          "zh": "融化与流动的形态"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges drip, sag, and re-solidify like soft wax or Dalí's clocks; border-radius becomes an organic 40%/60%/70% blob, and rigid rectangles look out of place.",
          "zh": "边缘像软蜡一样滴落、下垂并重新凝固；border-radius 变成有机的 40%/60%/70% 液滴，生硬的矩形会显得格格不入。"
        }
      },
      {
        "id": "floating-objects",
        "role": "defining",
        "name": {
          "en": "Gravity-defying floating objects",
          "zh": "反重力的漂浮物件"
        },
        "facet": "layout",
        "description": {
          "en": "Eyes, clocks, clouds, keys, or body parts hover at different depths with no logical support, casting soft diffuse shadows rather than resting on surfaces.",
          "zh": "眼睛、时钟、云朵、钥匙或肢体在不同深度悬空，没有逻辑支撑，投下柔和的漫射阴影，而不是落在平面上。"
        }
      },
      {
        "id": "soft-gradients",
        "role": "defining",
        "name": {
          "en": "Soft lunar gradients",
          "zh": "柔和的月光渐变"
        },
        "facet": "color",
        "description": {
          "en": "Backgrounds wash from lavender #c8b6e2 through peach #f4c7b0 to pale blue #a8d5e5, desaturated and glowing, never the loud neon of vaporwave or cyberpunk.",
          "zh": "背景从薰衣草紫 #c8b6e2 流过蜜桃 #f4c7b0 到淡蓝 #a8d5e5，低饱和并带光晕，绝不是 Vaporwave 或 Cyberpunk 那种 loud 霓虹。"
        }
      },
      {
        "id": "dream-collage",
        "role": "defining",
        "name": {
          "en": "Dream collage and impossible combinations",
          "zh": "梦境拼贴与不可能组合"
        },
        "facet": "imagery",
        "description": {
          "en": "A clock drapes over a cloud, an eye peers from inside a button, a fish swims through the sky — the imagery is symbolic and deliberately irrational.",
          "zh": "时钟垂挂在云朵上，眼睛从按钮里窥视，鱼在天空中游泳——意象是象征性的、刻意非理性的。"
        }
      },
      {
        "id": "subconscious-symbols",
        "role": "supporting",
        "name": {
          "en": "Subconscious symbols",
          "zh": "潜意识符号"
        },
        "facet": "imagery",
        "description": {
          "en": "Eyes, keys, doors, mirrors, moons, and disembodied hands recur as motifs; they read as dream symbols rather than functional icons.",
          "zh": "眼睛、钥匙、门、镜子、月亮、断手反复出现作为母题；它们读起来像梦境符号，而不是功能图标。"
        }
      },
      {
        "id": "uncanny-lighting",
        "role": "supporting",
        "name": {
          "en": "Diffuse uncanny lighting",
          "zh": "弥漫的诡异光照"
        },
        "facet": "surface",
        "description": {
          "en": "Shadows are long, soft, and often cast in the wrong direction; specular highlights feel like moonlight or candlelight rather than a single coherent sun.",
          "zh": "阴影长而柔和，方向往往不一致；镜面高光像月光或烛光，而不是单一、连贯的太阳。"
        }
      },
      {
        "id": "slow-morph",
        "role": "supporting",
        "name": {
          "en": "Slow liquid morphing",
          "zh": "缓慢的液态形变"
        },
        "facet": "motion",
        "description": {
          "en": "Animations breathe, drift, and melt over 6–12 seconds with easing that feels viscous; nothing snaps or clicks like a machine.",
          "zh": "动画在 6–12 秒内呼吸、漂浮、融化，缓动带有黏稠感；没有任何东西像机器一样咔哒作响。"
        }
      },
      {
        "id": "digital-decay",
        "role": "avoid",
        "name": {
          "en": "VHS glitch and 80s consumer debris",
          "zh": "VHS 故障与 80 年代消费碎片"
        },
        "facet": "surface",
        "description": {
          "en": "Scanlines, chromatic aberration, katakana, Windows chrome, and mall-palm sunsets are the vocabulary of vaporwave; they break the fine-art dream spell here.",
          "zh": "扫描线、色差、日文片假名、Windows 窗口边框、商场棕榈日落都是 Vaporwave 的词汇；出现在这里会破坏美术梦境的氛围。"
        }
      }
    ],
    "confusedWith": {
      "slug": "vaporwave",
      "name": "Vaporwave",
      "because": {
        "en": "This is Surrealism because the space follows fine-art dream logic: melting clocks, floating eyes, soft diffused gradients, and impossible object combinations on a muted lunar palette. There is no Greek bust, no Windows 95 chrome, no VHS scanline, no katakana, and no 80s mall nostalgia.",
        "zh": "这是超现实主义，因为空间遵循美术梦境逻辑：融化的时钟、漂浮的眼睛、柔和的漫射渐变，以及低饱和月光调色板上的不可能物件组合。这里没有希腊雕像、没有 Windows 95 窗口边框、没有 VHS 扫描线、没有片假名，也没有 80 年代商场怀旧。"
      },
      "wouldBecomeIf": {
        "en": "It would become vaporwave if the palette shifted to pink-to-cyan #ff71ce/#01cdfe sunsets, the objects were replaced by marble busts and palm trees, and VHS scanlines and chromatic aberration were layered over the whole scene.",
        "zh": "如果调色板变成粉到青 #ff71ce/#01cdfe 的日落，物件被替换成大理石雕像和棕榈树，并且整片画面叠上 VHS 扫描线和色差，就变成 Vaporwave 了。"
      }
    },
    "code": [
      {
        "title": "Soft lunar gradient background",
        "language": "css",
        "code": "background: linear-gradient(160deg, #c8b6e2 0%, #f4c7b0 45%, #a8d5e5 100%);"
      },
      {
        "title": "Melting organic blob shape",
        "language": "css",
        "code": "border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; box-shadow: 0 18px 40px rgba(45, 36, 56, .25);"
      },
      {
        "title": "Floating slow-breathe animation",
        "language": "css",
        "code": "@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } } animation: float 7s ease-in-out infinite;"
      }
    ],
    "brief": {
      "en": "Create the interface in the spirit of Surrealism. Canvas: a soft lunar gradient background running lavender #c8b6e2 through peach #f4c7b0 to pale blue #a8d5e5, optionally with a faint parchment texture. Defining signals: geometry melts — use organic border-radius like 40% 60% 70% 30% / 40% 50% 60% 50% for cards and buttons so edges feel like warm wax; objects float at impossible depths with soft diffuse shadows (box-shadow: 0 18px 40px rgba(45,36,56,.25)) rather than resting on shelves; imagery is dream-collage — clocks draping over edges, disembodied eyes, clouds, keys, moons — rendered as flat symbolic shapes or inline SVG. Color: keep it desaturated and glowing — add misty creams #f5f0e6, muted gold #d4af37, and deep shadow #2d2438; avoid neon pink/cyan and chrome. Typography: choose an elegant high-contrast serif (or a refined sans with generous letter-spacing) for titles; body text stays small and unobtrusive so the dream imagery dominates. Motion: slow liquid morphing and floating — 6–12s ease-in-out loops, viscous transitions, nothing mechanical; use @keyframes for gentle up/down drift and subtle scale breathing. Interactions: buttons should feel like pressing soft wax — small scale(.96) with a shadow collapse rather than a hard click. Do not drift into vaporwave: the decisive difference is the absence of 80s/90s consumer nostalgia, Greek busts, katakana, Windows chrome, VHS scanlines, and neon grids. Preserve readability by placing text on solid misty panels (#f5f0e6 at 92% opacity) over the gradient, keep text at 4.5:1 against those panels, and honor prefers-reduced-motion by disabling drift and morph loops.",
      "zh": "用超现实主义（Surrealism）精神创建这个界面。画布：柔和的月光渐变背景，从薰衣草紫 #c8b6e2 流过蜜桃 #f4c7b0 到淡蓝 #a8d5e5，可选叠加 faint 的羊皮纸纹理。决定性信号：几何形态要融化——卡片和按钮使用有机 border-radius，如 40% 60% 70% 30% / 40% 50% 60% 50%，让边缘像温热的蜡；物件在不可能的深度漂浮，用柔和的漫射阴影（box-shadow: 0 18px 40px rgba(45,36,56,.25)）而不是落在架子上；意象是梦境拼贴——垂挂在边缘的时钟、脱离躯干的眼睛、云朵、钥匙、月亮——用扁平象征图形或内联 SVG 呈现。配色保持低饱和并带光晕：加入雾 Cream #f5f0e6、哑光金 #d4af37 和深影 #2d2438；避开霓虹粉青和镀铬。字体：标题用优雅的高对比衬线（或字母间距宽松的精致无衬线）；正文保持小巧、不抢眼，让梦境意象主导。动效：缓慢的液态形变与漂浮——6–12s ease-in-out 循环，黏稠过渡，不带机械感；用 @keyframes 做轻柔上下漂移和 subtle 缩放呼吸。交互：按钮要像按压软蜡——小幅度 scale(.96) 配阴影塌陷，而不是硬邦邦的点击。不要滑向 Vaporwave：决定性区别在于没有 80/90 年代消费怀旧、希腊雕像、片假名、Windows 窗口边框、VHS 扫描线和霓虹网格。可读性：把文字放在不透明的雾 Cream 面板（#f5f0e6 92% 不透明度以上）上，确保面板上的文字对比度 4.5:1，并响应 prefers-reduced-motion，禁用漂移与形变循环。"
    },
    "accessibility": {
      "en": "The soft gradient background and symbolic imagery are central to the mood but hostile to text legibility: place all body text and controls on solid or near-solid misty panels (#f5f0e6 at 92% opacity or higher) and verify 4.5:1 against them, not against the gradient.\n\nSlow drift and morph animations are load-bearing for the dreamlike atmosphere, but they can trigger vestibular issues; respect prefers-reduced-motion by removing continuous floating, scaling, and morphing, and keep any remaining motion subtle and non-repeating.\n\nSymbolic eyes, keys, and floating objects are decorative in this UI vocabulary; ensure functional controls have clear labels, focus indicators distinct from the dream imagery, and never rely on surreal juxtapositions alone to convey state or action.",
      "zh": "柔和的渐变背景与象征性意象是氛围核心，但对文字可读性很不友好：所有正文和控件都要放在纯色或近不透明的雾 Cream 面板（#f5f0e6 不透明度 92% 以上）上，并在面板而非渐变上验证 4.5:1 对比度。\n\n缓慢的漂移与形变动画是营造梦境感的关键，但可能诱发前庭不适；响应 prefers-reduced-motion，移除持续的漂浮、缩放与形变，并把剩余动画降到 subtle 且非循环。\n\n象征性的眼睛、钥匙和漂浮物件在本 UI 词汇里是装饰性的；务必保证功能性控件有清晰标签、与梦境意象区分开的焦点指示器，永远不要只靠超现实拼贴来传达状态或操作。"
    },
    "origin": {
      "en": "Surrealism began as an art movement in 1924 when poet André Breton published the Surrealist Manifesto in Paris, channeling Sigmund Freud's ideas about the unconscious and dreams; Salvador Dalí's 1931 painting The Persistence of Memory, with its melting clocks, and René Magritte's visual paradoxes became its most recognizable images. As a UI aesthetic it is a 21st-century digital mood rather than a formal school — contemporary portfolios and editorial sites borrow the dream-logic collage, soft gradients, and floating symbolic objects to evoke introspection and the uncanny.",
      "zh": "超现实主义作为艺术运动始于 1924 年，诗人 André Breton 在巴黎发表《超现实主义宣言》，借用了 Sigmund Freud 关于潜意识与梦境的思想；Salvador Dalí 1931 年的画作《记忆的永恒》（融化的时钟）和 René Magritte 的视觉悖论成为它最知名的图像。作为 UI 美学，它是 21 世纪的数字情绪而非正式流派——当代作品集与编辑网站借用梦境逻辑拼贴、柔渐变和漂浮象征物来唤起内省与诡异感。"
    },
    "seeAlso": [
      {
        "slug": "styles/vaporwave",
        "name": "Vaporwave"
      },
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/art-deco",
        "name": "Art Deco"
      }
    ]
  },
  {
    "slug": "art-nouveau",
    "name": {
      "en": "Art Nouveau",
      "zh": "新艺术运动（Art Nouveau）"
    },
    "tagline": {
      "en": "Art Nouveau is the late-19th-century 'new art' that replaced historical revivalism with living, asymmetrical lines drawn from plants, flowers, and whiplash tendrils. Its interfaces and graphics favor earthy jewel tones, oxidized gold, hand-drawn vines, and ornate serif lettering that seems to grow out of the page rather than sit on it. It flourished from roughly 1890 to 1910 and was eclipsed by the machine geometry of Art Deco.",
      "zh": "新艺术运动是 19 世纪末的「新艺术」，它用从植物、花朵和鞭状卷须中抽出的、有生命力的不对称线条，取代了历史复兴主义。它的界面与图形偏爱土色宝石调、氧化金、手绘藤蔓，以及像从页面里长出来而非贴在上面的华丽衬线字体。它大约兴盛于 1890 至 1910 年间，随后被装饰艺术（Art Deco）的机器几何所取代。"
    },
    "scope": {
      "en": "Scope: This entry covers the Art Nouveau visual language as it appears in UI, illustration, and typography. The overlapping Arts & Crafts movement and Japonism share some DNA but are treated separately; Art Deco is the closest neighbor and the main source of confusion.",
      "zh": "范围：本条覆盖新艺术运动在 UI、插画和字体排印中的视觉语言。与其交叠的工艺美术运动（Arts & Crafts）和日本主义（Japonism）有共同血脉，但另立条目；装饰艺术是最近的邻居，也是主要混淆源。"
    },
    "aliases": {
      "en": [
        "that old poster style with long flowing hair and flowers around the border",
        "curvy plant-like borders and swirly gold lettering",
        "the style that looks like vines grew into the frame",
        "organic whiplash lines and olive green with gold accents",
        "antique ornamental typography with floral decorations"
      ],
      "zh": [
        "那种老式海报风，边框里绕着长发和花朵",
        "弯弯曲曲像植物的边框和涡卷金箔字",
        "看起来像是藤蔓长进了画框里的风格",
        "有机的鞭状曲线，橄榄绿配金色点缀",
        "带花草装饰的古典华丽字体那种风格"
      ]
    },
    "signals": [
      {
        "id": "whiplash-curves",
        "role": "defining",
        "name": {
          "en": "Whiplash curves",
          "zh": "鞭状曲线"
        },
        "facet": "geometry",
        "description": {
          "en": "Long, unbroken S- and C-curves that snap back on themselves like stems in the wind; borders and rules follow a single flowing gesture rather than straight edges.",
          "zh": "绵长不断的 S 形与 C 形曲线，像风中的茎秆一样回弹；边框和分隔线跟着同一股流动走势走，而不是直边。"
        }
      },
      {
        "id": "organic-ornament",
        "role": "defining",
        "name": {
          "en": "Organic ornament",
          "zh": "有机装饰"
        },
        "facet": "imagery",
        "description": {
          "en": "Vines, lilies, insects, feathers, and hair rendered as flat linear decoration; the motif is a recognizable plant or creature, not an abstract geometric icon.",
          "zh": "藤蔓、百合、昆虫、羽毛和发丝被处理成平面线描装饰；图案是能认出的植物或生物，不是抽象几何图标。"
        }
      },
      {
        "id": "earthy-jewel-palette",
        "role": "defining",
        "name": {
          "en": "Earthy jewel palette",
          "zh": "土色宝石调"
        },
        "facet": "color",
        "description": {
          "en": "Muted olive, sage, terracotta, oxidized gold, wine red, and dusty teal; color feels mineral or botanical, never chrome or neon.",
          "zh": "低饱和橄榄、鼠尾草绿、赤陶、氧化金、酒红和灰青；色调让人联想到矿物或植物，绝不是铬或霓虹。"
        }
      },
      {
        "id": "ornate-serif-typography",
        "role": "defining",
        "name": {
          "en": "Ornate serif typography",
          "zh": "华丽衬线字体"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms with curling terminals, high stroke contrast, and decorative inline strokes; headings read like hand-cut signage rather than machine type.",
          "zh": "带卷曲收笔、强烈粗细对比和装饰性 inline 线的字体；标题读起来像手工凿出的招牌，而不是机器排的字。"
        }
      },
      {
        "id": "asymmetrical-composition",
        "role": "supporting",
        "name": {
          "en": "Asymmetrical composition",
          "zh": "不对称构图"
        },
        "facet": "layout",
        "description": {
          "en": "Layouts drift around a vertical axis rather than locking into strict symmetry; even frames are thicker on one side or curl away from center.",
          "zh": "版面围绕一条纵轴漂移，而不是锁死在严格对称里；就连边框也是一侧更厚，或在角落像枝蔓一样卷曲离开中心。"
        }
      },
      {
        "id": "flat-pattern-depth",
        "role": "supporting",
        "name": {
          "en": "Flat pattern depth",
          "zh": "平面图案纵深"
        },
        "facet": "depth",
        "description": {
          "en": "Depth comes from overlapping flat motifs and gold-line relief, not from gradients, drop shadows, or 3D modeling.",
          "zh": "纵深来自相互交叠的平面图案和金线浮雕，而不是渐变、投影或 3D 建模。"
        }
      },
      {
        "id": "cast-iron-line",
        "role": "supporting",
        "name": {
          "en": "Cast-iron contours",
          "zh": "铸铁轮廓"
        },
        "facet": "surface",
        "description": {
          "en": "Heavy contours derived from cast-iron and stained-glass leading hold the flowing shapes together, giving the surface a crafted, tactile outline.",
          "zh": "从铸铁和彩色玻璃铅条中演化来的粗重轮廓把流动形状兜住，让表面有一种手工打造的可触轮廓。"
        }
      },
      {
        "id": "hard-edged-geometry",
        "role": "avoid",
        "name": {
          "en": "Hard-edged geometry",
          "zh": "硬边几何"
        },
        "facet": "geometry",
        "description": {
          "en": "Straight lines, exact circles, and repeating chevrons belong to Art Deco and industrial modernism; they break the organic spell.",
          "zh": "直线、正圆和重复的人字纹属于装饰艺术和工业现代主义；它们会破坏有机魔咒。"
        }
      }
    ],
    "confusedWith": {
      "slug": "art-deco",
      "name": "Art Deco",
      "because": {
        "en": "This is Art Nouveau because the rhythm is organic and asymmetrical — vines, stems, and hairlines curve continuously, and the decoration is derived from living forms rather than engineered geometry.",
        "zh": "这是新艺术运动，因为它的节奏是有机且不对称的 —— 藤蔓、茎秆和发丝不断弯曲，装饰来自生命体而不是工程几何。"
      },
      "wouldBecomeIf": {
        "en": "It would become Art Deco if the curves were replaced by stepped zigzags, sunbursts, and mirror symmetry, the palette switched to lacquered black and chrome, and the lettering squared into block geometry.",
        "zh": "如果曲线被替换成阶梯状锯齿、放射光芒和镜像对称，配色变成漆器黑加铬，字体也方块化，就变成装饰艺术了。"
      }
    },
    "code": [
      {
        "title": "Decorative vine border frame",
        "language": "css",
        "code": "background: #f7f3e8; border: 3px solid #7a2d3b; border-radius: 32px 8px 40px 12px; box-shadow: inset 0 0 0 2px #bfa15f;"
      },
      {
        "title": "Ornate heading with gold inline stroke",
        "language": "css",
        "code": "font-family: Georgia, 'Times New Roman', serif; color: #3a2a1e; text-shadow: 1px 0 0 #bfa15f, -1px 0 0 #bfa15f; letter-spacing: 0.04em;"
      },
      {
        "title": "Asymmetrical organic card as utilities",
        "language": "tailwind",
        "code": "bg-[#f7f3e8] border-[3px] border-[#7a2d3b] rounded-tl-[32px] rounded-tr-[8px] rounded-br-[40px] rounded-bl-[12px] shadow-[inset_0_0_0_2px_#bfa15f]"
      }
    ],
    "brief": {
      "en": "Create the surface using Art Nouveau. Defining signals: continuous whiplash curves for every border and rule; flat organic ornament — vines, lilies, insects, feathers — as the primary decoration; an earthy jewel palette (sage #9fa86b, terracotta #c26a4d, wine red #7a2d3b, oxidized gold #bfa15f, cream ground #f7f3e8); ornate serif display type with curling terminals and inline strokes. Keep the specific plant motif and exact palette flexible. Use inline SVG paths for vine borders and corner flourishes, stroke-width 1.5–2px for hairline tendrils and 4–6px for cast-iron contours. Set type in a high-contrast serif with decorative capitals (font-family: Georgia, 'Times New Roman', serif; letter-spacing: 0.02em; text-transform: capitalize for headings). Build depth by overlapping flat shapes and gold lines, never with gradients or drop shadows. Buttons and cards should have asymmetrical frames that curl at the corners like stems. Do not drift into Art Deco; the decisive difference is that every line here is a living curve — replace curves with zigzags, sunbursts, or mirror symmetry and the style collapses. Preserve 4.5:1 text contrast on the cream ground (wine red and deep olive pass; pale gold does not), visible focus indicators outside the decorative frame, and reduced-motion support for any animated tendrils.",
      "zh": "用新艺术运动（Art Nouveau）创建这个界面。决定性信号：每条边框和分隔线都使用连绵的鞭状曲线；以平面有机装饰 —— 藤蔓、百合、昆虫、羽毛 —— 为主要装饰；土色宝石调（sage #9fa86b、terracotta #c26a4d、wine red #7a2d3b、oxidized gold #bfa15f、奶油底 #f7f3e8）；华丽衬线展示字体，带卷曲收笔和 inline 线。具体植物图案和精确配色保持灵活。用内联 SVG path 画藤蔓边框和角落花纹，发丝卷须 stroke-width 1.5–2px，铸铁轮廓 4–6px。字体使用高对比衬线并加装饰大写（font-family: Georgia, 'Times New Roman', serif; letter-spacing: 0.02em; 标题 text-transform: capitalize）。通过交叠平面形状和金线来构建纵深，绝不用渐变或投影。按钮和卡片应带不对称边框，角落像茎秆一样卷曲。不要滑向装饰艺术；决定性区别在于这里的每条线都是活的曲线 —— 换成锯齿、放射纹或镜像对称，风格立刻崩塌。保证奶油底上的文字对比度达到 4.5:1（酒红和深橄榄能过；淡金不能），焦点指示器要在装饰边框外侧清晰可见，任何卷须动画都要支持 reduced-motion。"
    },
    "accessibility": {
      "en": "Ornate serif lettering and dense vine borders can mangle readability: keep body text in a clean high-contrast serif at 16px minimum, and reserve the most decorative letterforms for large headings only.\n\nDecorative borders often attract the eye away from interactive controls; place focus indicators as a clear, high-contrast outline offset outside the ornate frame rather than competing with the gold linework.\n\nAvoid rapid animated whiplash curves and flashing metallic highlights under prefers-reduced-motion; static vines are already unmistakably Art Nouveau.",
      "zh": "华丽的衬线字和密集的藤蔓边框会损害可读性：正文使用干净的高对比衬线，最小 16px，并把最装饰性的字体留给大标题。\n\n装饰性边框常会抢走交互控件的注意力；把焦点指示器做成清晰、高对比的 outline，并偏移到华丽边框外侧，别跟金线抢戏。\n\n在 prefers-reduced-motion 下避免快速的鞭状曲线动画和闪烁的金属高光；静态藤蔓本身就已经无可错认地是新艺术运动。"
    },
    "origin": {
      "en": "Art Nouveau flourished roughly 1890–1910, taking its name from Siegfried Bing's Paris gallery Maison de l'Art Nouveau (opened 1895). Belgian architect Victor Horta's Hôtel Tassel in Brussels (1893) and French architect Hector Guimard's Paris Métro entrances (c. 1900) are canonical built works; Czech illustrator Alphonse Mucha's posters and French designer Louis Majorelle's furniture defined its graphic and decorative vocabulary. It faded as Art Deco and modernism rose in the 1910s.",
      "zh": "新艺术运动大约兴盛于 1890–1910 年，名字来自 Siegfried Bing 在巴黎的画廊 Maison de l'Art Nouveau（1895 年开业）。比利时建筑师 Victor Horta 的布鲁塞尔塔塞尔公馆（Hôtel Tassel，1893 年）和法国建筑师 Hector Guimard 的巴黎地铁入口（约 1900 年）是标志性建筑作品；捷克插画师 Alphonse Mucha 的海报和法国设计师 Louis Majorelle 的家具奠定了其平面与装饰词汇。随着 1910 年代装饰艺术和现代主义兴起，它逐渐退场。"
    },
    "seeAlso": [
      {
        "slug": "styles/art-deco",
        "name": "Art Deco"
      },
      {
        "slug": "styles/bauhaus",
        "name": "Bauhaus"
      },
      {
        "slug": "styles/memphis",
        "name": "Memphis"
      }
    ]
  },
  {
    "slug": "holographic",
    "name": {
      "en": "Holographic",
      "zh": "全息彩虹箔（Holographic）"
    },
    "tagline": {
      "en": "Holographic UI looks like light hitting rainbow foil: a metallic silver base explodes into shifting cyan, magenta, violet, and gold, with pastel pink and lavender shimmers sliding across the surface. It borrows from holographic foil printing and oil-slick diffraction, not glass or depth — the effect is flat, reflective, and synthetic. The style became the face of late-2010s unicorn branding, beauty-tech packaging, and year-in-review campaigns that wanted to feel futuristic and celebratory.",
      "zh": "全息 UI 看起来像光打在彩虹箔上：金属银底会迸发出青、品红、紫、金等光谱色，粉彩的粉与薰衣草紫 shimmer 在表面滑动。它借自全息烫印和油渍衍射，而不是玻璃或纵深——效果是平面的、反射性的、合成的。这种外观成了 2010 年代末独角兽品牌、美妆科技和年度回顾视觉的招牌：既未来又喜庆。"
    },
    "scope": {
      "en": "Scope: This entry covers the digital visual style inspired by holographic foil and oil-slick iridescence. It is distinct from glassmorphism (which needs transparency and blur) and from the metallic-chrome Y2K look (which favors machined gradients and gel plastic rather than rainbow diffraction).",
      "zh": "范围：本条覆盖受全息箔与油渍虹彩启发的数字视觉风格。它与玻璃拟态（依赖透明与模糊）和 Y2K 的金属铬感（偏好机械渐变与凝胶塑料，而非彩虹衍射）都不同。"
    },
    "aliases": {
      "en": [
        "rainbow foil texture that shifts color when you tilt it",
        "ui that looks like unicorn makeup packaging",
        "oil slick gradient with silver metallic shine",
        "holographic sticker or credit card effect",
        "pastel pink purple cyan shimmer surface",
        "futuristic tech brand with rainbow gradients"
      ],
      "zh": [
        "像倾斜时会变色的彩虹箔纹理",
        "看起来像独角兽美妆包装那种界面",
        "带银色金属光泽的油渍渐变",
        "全息贴纸或信用卡上的那种效果",
        "粉彩粉紫青色的 shimmer 表面",
        "用彩虹渐变的未来科技品牌风"
      ]
    },
    "signals": [
      {
        "id": "oil-slick-gradients",
        "role": "defining",
        "name": {
          "en": "Oil-slick rainbow gradients",
          "zh": "油渍彩虹渐变"
        },
        "facet": "color",
        "description": {
          "en": "The surface cycles through saturated spectral hues — cyan #00f2ea, magenta #ff006e, violet #b967ff, gold #ffd700 — usually via conic or multi-stop linear gradients that mimic light diffraction.",
          "zh": "表面循环饱和光谱色——青 #00f2ea、品红 #ff006e、紫 #b967ff、金 #ffd700——通常用 conic-gradient 或多段线性渐变模拟光衍射。"
        }
      },
      {
        "id": "foil-silver-base",
        "role": "defining",
        "name": {
          "en": "Metallic silver foil base",
          "zh": "金属银箔底"
        },
        "facet": "surface",
        "description": {
          "en": "A bright neutral mirror-like substrate sits beneath the rainbow, rendered with sharp white #ffffff specular highlights and cool grey #c4cfdc mid-tones.",
          "zh": "明亮的镜面中性底衬托在彩虹之下，用锐利的白 #ffffff 高光和冷灰 #c4cfdc 中间调表现。"
        }
      },
      {
        "id": "pastel-shimmer",
        "role": "defining",
        "name": {
          "en": "Pastel pink-cyan shimmer",
          "zh": "粉彩粉青 shimmer"
        },
        "facet": "color",
        "description": {
          "en": "Soft pastel overlights — pink #ffb3d9, lavender #c084fc, aqua #67e8f9 — float across the foil like secondary reflections, usually at 40–70% opacity.",
          "zh": "柔和的粉彩叠光——粉 #ffb3d9、薰衣草紫 #c084fc、水蓝 #67e8f9——像二次反射浮在箔面上，通常不透明度 40–70%。"
        }
      },
      {
        "id": "reflective-edges",
        "role": "supporting",
        "name": {
          "en": "Hairline chrome edges",
          "zh": "发丝铬边"
        },
        "facet": "geometry",
        "description": {
          "en": "Borders and dividers are 1px metallic lines with a hard highlight on one side and a darker grey #8a93a3 on the other, mimicking a pressed foil edge.",
          "zh": "边框和分隔线是 1px 金属线，一侧有硬高光，另一侧是深灰 #8a93a3，模仿压印箔边。"
        }
      },
      {
        "id": "sheen-animation",
        "role": "supporting",
        "name": {
          "en": "Slow sweeping sheen",
          "zh": "缓慢扫过的光泽"
        },
        "facet": "motion",
        "description": {
          "en": "A subtle animated gradient or white glare sweeps across the surface every 3–6 seconds, reinforcing the reflective foil illusion.",
          "zh": "每 3–6 秒有一道微妙的渐变或白色眩光扫过表面，强化反射箔的错觉。"
        }
      },
      {
        "id": "dark-field-canvas",
        "role": "variable",
        "name": {
          "en": "Dark field canvas",
          "zh": "暗场画布"
        },
        "facet": "layout",
        "description": {
          "en": "The style is usually staged on near-black #0a0a0f or deep charcoal so the metallic rainbow reads at full saturation; light backgrounds flatten it.",
          "zh": "这种风格通常铺在接近纯黑 #0a0a0f 或深炭灰底上，让金属彩虹保持全饱和；浅底会把它压平。"
        }
      },
      {
        "id": "frosted-blur",
        "role": "avoid",
        "name": {
          "en": "Frosted blur panels",
          "zh": "磨砂模糊面板"
        },
        "facet": "surface",
        "description": {
          "en": "Translucent blurred cards floating over wallpaper are the signature of glassmorphism; holographic surfaces are opaque and reflective, not see-through.",
          "zh": "半透明模糊卡片悬浮在壁纸上是玻璃拟态的标志；全息表面不透明且反射，不是透视的。"
        }
      }
    ],
    "confusedWith": {
      "slug": "glassmorphism",
      "name": "Glassmorphism",
      "because": {
        "en": "This is Holographic because the surface behaves like reflective foil — rainbow iridescence, metallic sheen, and color-shifting highlights — rather than relying on transparency and blur for depth.",
        "zh": "这是全息风格，因为表面表现得像反射箔——彩虹虹彩、金属光泽和随角度色移的高光——而不是靠透明和模糊来制造纵深。"
      },
      "wouldBecomeIf": {
        "en": "It would become glassmorphism if the rainbow foil were replaced by translucent white panels floating over a decorative wallpaper with backdrop-filter blur as the main material.",
        "zh": "如果彩虹箔被换成半透明白面板、靠 backdrop-filter 模糊作为主要材质浮在装饰壁纸上，就变成玻璃拟态了。"
      }
    },
    "code": [
      {
        "title": "Oil-slick conic gradient",
        "language": "css",
        "code": "background: conic-gradient(from 180deg, #00f2ea, #b967ff, #ff006e, #ffd700, #67e8f9, #00f2ea);"
      },
      {
        "title": "Silver foil base with specular highlight",
        "language": "css",
        "code": "background: linear-gradient(135deg, #ffffff 0%, #c4cfdc 30%, #8a93a3 50%, #e6eaf0 70%, #ffffff 100%);"
      },
      {
        "title": "Pastel shimmer overlay",
        "language": "css",
        "code": "background: radial-gradient(120% 80% at 20% 30%, rgba(255,179,217,.55), transparent 50%), radial-gradient(100% 70% at 80% 70%, rgba(103,232,249,.45), transparent 50%);"
      }
    ],
    "brief": {
      "en": "Build the surface as a sheet of holographic foil on a near-black canvas (#0a0a0f). Start with a metallic silver base: linear-gradient(135deg, #ffffff 0%, #c4cfdc 30%, #8a93a3 50%, #e6eaf0 70%, #ffffff 100%). Layer the oil-slick rainbow over it using conic-gradient(from 180deg, #00f2ea, #b967ff, #ff006e, #ffd700, #67e8f9, #00f2ea) or a 280px-wide multi-stop linear gradient at 115deg. Add pastel shimmer overlays: radial-gradient(120% 80% at 20% 30%, rgba(255,179,217,.55), transparent 50%) plus a cyan counterpart at 80% 70%. Use hairline chrome borders: 1px solid rgba(255,255,255,.55) with an inset 1px rgba(255,255,255,.25) highlight. Keep typography modern — SF Pro, Inter, or system sans at 500–600 weight, white (#ffffff) or near-white (#f2f4f8) text. Animate the sheen with a 4s ease-in-out infinite gradient-position shift. Buttons and cards should feel like stamped foil, not glass: zero backdrop-filter blur, no translucent panels, no soft drop shadows. The decisive guardrail: remove the rainbow iridescence and metallic base and the style collapses — it is not glassmorphism.",
      "zh": "把表面做成铺在近黑画布（#0a0a0f）上的一张全息箔。先铺金属银底：linear-gradient(135deg, #ffffff 0%, #c4cfdc 30%, #8a93a3 50%, #e6eaf0 70%, #ffffff 100%)。再在上面叠加油渍彩虹：conic-gradient(from 180deg, #00f2ea, #b967ff, #ff006e, #ffd700, #67e8f9, #00f2ea)，或一条 280px 宽、115deg 的多段线性渐变。加上粉彩 shimmer 叠层：radial-gradient(120% 80% at 20% 30%, rgba(255,179,217,.55), transparent 50%)，以及另一道青色叠层在 80% 70%。发丝铬边用 1px solid rgba(255,255,255,.55)，并加 inset 1px rgba(255,255,255,.25) 高光。字体保持现代——SF Pro、Inter 或系统无衬线，字重 500–600，文字用白 #ffffff 或近白 #f2f4f8。用 4s ease-in-out infinite 的 gradient-position 偏移来制作光泽扫动。按钮和卡片要像压印箔，而不是玻璃：零 backdrop-filter 模糊、无半透明面板、无柔和投影。关键 guardrail：去掉彩虹虹彩和金属底，风格就垮了——它不是玻璃拟态。"
    },
    "accessibility": {
      "en": "Rainbow-on-silver text often fails contrast: the lightest foil regions can wash white text to below 4.5:1, so either keep text over the dark canvas or place it on a solid scrim behind the foil.\n\nThe slow shimmer animation is decorative but can trigger vestibular issues or distract attention; honor prefers-reduced-motion by freezing the gradient sweep.\n\nHolographic surfaces are inherently chromatic and busy; do not rely on color alone to convey state — pair hue changes with icons, labels, or outline changes so the UI remains usable for color-vision-deficient users.",
      "zh": "银底彩虹上的文字常常对比度不足：最亮的箔面区域会把白字压到 4.5:1 以下，因此要么把文字放在暗色画布上，要么在箔后垫一块实色 scrim。\n\n缓慢的光泽动画属于装饰性动效，但可能诱发前庭不适或分散注意力；响应 prefers-reduced-motion，冻结渐变扫动。\n\n全息表面本身色彩丰富且忙碌；不要只靠颜色传达状态——把色移与图标、标签或轮廓变化配对，确保色觉障碍用户也能使用。"
    },
    "origin": {
      "en": "Holographic foil as a physical finishing technique dates back to the 1980s, when micro-embossed diffraction patterns on metallic film began appearing on credit cards, concert tickets, and luxury packaging. The digital UI translation surfaced in the late 2010s, popularized by unicorn/startup branding, beauty-tech packaging, and year-in-review campaigns like Spotify Wrapped, which used rainbow-foil typography and iridescent cards to signal celebration and futurism.",
      "zh": "全息箔作为实体后道工艺可追溯到 1980 年代，当时微压衍射图案的金属膜开始出现在信用卡、演唱会门票和奢侈品包装上。数字 UI 的转译在 2010 年代末浮现，被独角兽/创业公司品牌、美妆科技包装以及 Spotify Wrapped 这类年度回顾活动推红——它们用彩虹箔文字和虹彩卡片传递庆祝感和未来感。"
    },
    "seeAlso": [
      {
        "slug": "styles/glassmorphism",
        "name": "Glassmorphism"
      },
      {
        "slug": "styles/y2k",
        "name": "Y2K Digital Aesthetic"
      },
      {
        "slug": "styles/liquid-glass",
        "name": "Liquid Glass"
      }
    ]
  },
  {
    "slug": "isometric-3d",
    "name": {
      "en": "Isometric 3D",
      "zh": "等距 3D（Isometric 3D）"
    },
    "tagline": {
      "en": "Isometric 3D renders interface scenes as axonometric block worlds: three axes spaced 120° apart on the picture plane, parallel lines that never converge, and geometric solids built from cubes and extruded planes. It gives depth without perspective distortion, so a dashboard, city, or device cluster reads like a clean architectural model. The look surged in web illustration around 2017–2019 as 'isometric flat design' and remains a go-to language for explaining complex systems at a glance.",
      "zh": "等距 3D 把界面场景渲染成轴测方块世界：三条轴线在平面上相隔 120°，平行线永不相交，形体由立方体和拉伸平面构成的干净几何体组成。它在没有透视变形的前提下制造纵深感，让仪表盘、城市或设备集群读起来像一幅整洁的建筑模型。这种观感在 2017–2019 年以「等距扁平风」（isometric flat design）的名义在网页插画里爆发，至今仍是把复杂系统一眼讲清楚的首选视觉语言。"
    },
    "scope": {
      "en": "Scope: This entry covers the isometric visual treatment in UI and illustration — block scenes, axonometric angles, and clean geometric depth. It is not true perspective 3D, photorealistic rendering, or the soft rounded inflation of claymorphism.",
      "zh": "范围：本条覆盖 UI 与插画里的等距视觉处理——方块场景、轴测角度、干净的几何纵深感。它不包含真正的透视 3D、照片级写实渲染，也不包含黏土拟态那种圆润膨胀的体积感。"
    },
    "aliases": {
      "en": [
        "ui that looks like a tiny isometric city or room",
        "blocky 3d interface with no perspective vanishing point",
        "the 30 degree angle tech illustration style",
        "dashboard made of floating cubes and platforms",
        "websites with those flat 3d isometric characters",
        "the geometric model look like simcity"
      ],
      "zh": [
        "界面看起来像一座迷你的等距城市或房间",
        "没有透视消失点的块状 3D 界面",
        "那种 30 度角的技术插画风格",
        "由漂浮立方体和平台拼成的仪表盘",
        "网页上那些扁平 3D 等距小人",
        "像《模拟城市》那种几何模型观感"
      ]
    },
    "signals": [
      {
        "id": "30-degree-axonometric",
        "role": "defining",
        "name": {
          "en": "30° axonometric axes",
          "zh": "30° 轴测轴线"
        },
        "facet": "geometry",
        "description": {
          "en": "The three visible axes sit at 120° to one another on the picture plane, commonly drawn as 30° left and right from horizontal; parallel edges stay parallel forever.",
          "zh": "三条可见轴线在平面上互成 120°，通常画成左右各偏离水平线 30°；平行边永远保持平行。"
        }
      },
      {
        "id": "orthographic-depth",
        "role": "defining",
        "name": {
          "en": "Orthographic, no vanishing point",
          "zh": "正交投影，无消失点"
        },
        "facet": "depth",
        "description": {
          "en": "There is no perspective convergence — objects do not shrink with distance. A cube in the back is the same size as one in the front, keeping the scene measurable and diagram-like.",
          "zh": "没有透视汇聚——远处的物体不会变小。后排的立方体和前排的一样大，场景因此可读且像工程图。"
        }
      },
      {
        "id": "block-primitives",
        "role": "defining",
        "name": {
          "en": "Cube and block primitives",
          "zh": "立方体与方块 primitives"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms are built from clean extruded rectangles and cubes; surfaces are flat planes meeting at crisp edges, not organic blobs or smooth sculptural shapes.",
          "zh": "形体由干净的拉伸矩形和立方体构成；表面是平直面在锐利边缘相交，不是有机团块或光滑雕塑形态。"
        }
      },
      {
        "id": "soft-cast-shadows",
        "role": "defining",
        "name": {
          "en": "Soft outer cast shadows",
          "zh": "柔和外投影"
        },
        "facet": "depth",
        "description": {
          "en": "Objects float above the ground on soft, diffuse drop shadows (e.g. box-shadow: 16px 24px 40px rgba(0,0,0,.18)) that anchor them in space without simulating a specific light source.",
          "zh": "物体靠柔和的漫射 drop shadow 悬浮在地面上方（例如 box-shadow: 16px 24px 40px rgba(0,0,0,.18)），借此锚定在空间里，而非模拟某个特定光源。"
        }
      },
      {
        "id": "flat-shaded-surfaces",
        "role": "defining",
        "name": {
          "en": "Flat-shaded surfaces",
          "zh": "平涂表面"
        },
        "facet": "color",
        "description": {
          "en": "Each face is a single flat color or a clean gradient along one axis; there are no noisy textures, photorealistic materials, or complex lighting models.",
          "zh": "每个面是单一纯色或沿一个轴向的干净渐变；没有噪点纹理、照片级材质，也没有复杂光照模型。"
        }
      },
      {
        "id": "modular-scenes",
        "role": "supporting",
        "name": {
          "en": "Modular block scenes",
          "zh": "模块化方块场景"
        },
        "facet": "layout",
        "description": {
          "en": "Multiple block objects cluster into readable mini-worlds — a city, a workspace, a device farm — where position and stacking imply hierarchy.",
          "zh": "多个方块物件聚合成可读的微型世界——城市、工作台、设备群——用位置和堆叠表达层级。"
        }
      },
      {
        "id": "illustrative-hero",
        "role": "supporting",
        "name": {
          "en": "Illustration-first usage",
          "zh": "插画优先的使用场景"
        },
        "facet": "imagery",
        "description": {
          "en": "In UI the style usually appears in hero graphics, empty states, and onboarding; interactive controls themselves are rare, so the player reads as a placed model rather than a skeuomorphic device.",
          "zh": "在 UI 里它通常出现在首图、空状态和引导页；交互控件本身很少见，所以播放器应被读作一个摆置的模型，而非拟物设备。"
        }
      },
      {
        "id": "rounded-inflation",
        "role": "avoid",
        "name": {
          "en": "Rounded inflated volume",
          "zh": "圆润膨胀的体积"
        },
        "facet": "surface",
        "description": {
          "en": "Puffy rounded corners, inner shadows, and a soft modeling-clay feel push the work into claymorphism — the geometry here is sharp and extruded, not molded.",
          "zh": "肥厚的圆角、内阴影和软陶土质感会把作品推向黏土拟态——这里的几何是锐利拉伸的，不是捏塑出来的。"
        }
      }
    ],
    "confusedWith": {
      "slug": "claymorphism",
      "name": "Claymorphism",
      "because": {
        "en": "This is Isometric 3D because the depth comes from angular axonometric geometry — clean cubes, 30° axes, and outer cast shadows — rather than from rounded, inflated, clay-like volume.",
        "zh": "这是等距 3D，因为它的纵深感来自角度分明的轴测几何——干净的立方体、30° 轴线和外投影——而不是圆润膨胀的黏土式体积。"
      },
      "wouldBecomeIf": {
        "en": "It would become claymorphism if the sharp geometric blocks were replaced with soft, rounded, independently colored blobs built from two inner shadows plus one soft outer shadow.",
        "zh": "如果把锋利的几何方块换成柔软、圆润、独立上色的团块，并用两层内阴影加一层柔和外投影来构建，就变成黏土拟态了。"
      }
    },
    "code": [
      {
        "title": "Isometric projection for a block container",
        "language": "css",
        "code": "transform: rotateX(54.7356deg) rotateZ(45deg); transform-style: preserve-3d;"
      },
      {
        "title": "Soft cast shadow under a floating block",
        "language": "css",
        "code": "box-shadow: 16px 24px 40px rgba(0,0,0,.18);"
      },
      {
        "title": "Three visible faces of a cube: top, left, right",
        "language": "css",
        "code": ".face-top { background: #7dd3fc; } .face-left { background: #38bdf8; } .face-right { background: #0ea5e9; }"
      }
    ],
    "brief": {
      "en": "Create the surface using Isometric 3D. Defining signals: axonometric projection with 30° left/right axes (rotateX(54.7356deg) rotateZ(45deg) in CSS or drawn as 120° axis spacing), zero perspective convergence; forms built from clean cubes and extruded rectangles with crisp edges. Palette: sky top faces #7dd3fc, left faces #38bdf8, right faces #0ea5e9, ground #f0f9ff, warm accents #f59e0b / #f472b6; type in a clean geometric sans (Inter, Spline Sans, or system-ui) at 12–14px with #0f172a. Depth: each block casts a soft diffuse outer shadow — box-shadow: 16px 24px 40px rgba(0,0,0,.18) — placed so objects read as floating above the ground; no inner shadows, no bevels, no perspective foreshortening. Layout: assemble a modular mini-scene (a tiny room, city block, or device cluster) where block position implies hierarchy; keep surfaces flat-shaded with one color per face or a single-axis gradient. Do not drift into claymorphism: the decisive difference is sharp geometry with outer cast shadows, not rounded inflated blobs with inner shadows. Preserve 4.5:1 text contrast on every colored face, visible focus states on any interactive block, and honor prefers-reduced-motion by disabling any isometric float/bob animation.",
      "zh": "用等距 3D（Isometric 3D）创建这个界面。决定性信号：轴测投影，左右 30° 轴线（CSS 里用 rotateX(54.7356deg) rotateZ(45deg)，或按 120° 轴线间距绘制），零透视汇聚；形体由干净的立方体和拉伸矩形构成，边缘锐利。配色：顶面 #7dd3fc、左侧面 #38bdf8、右侧面 #0ea5e9、地面 #f0f9ff、暖色点缀 #f59e0b / #f472b6；字体用干净的几何无衬线（Inter、Spline Sans 或 system-ui），12–14px，#0f172a。纵深：每个方块投下柔和的漫射外阴影——box-shadow: 16px 24px 40px rgba(0,0,0,.18)——让物体看起来悬浮在地面上方；不要内阴影、不要斜角、不要透视缩短。布局：拼出一个模块化微场景（小房间、城市街区或设备集群），用方块位置表达层级；表面平涂，每个面一色或单轴渐变。不要滑向黏土拟态：关键区别是锐利几何 + 外投影，而不是圆润膨胀团块 + 内阴影。保证每个彩色面上的文字对比度达到 4.5:1，交互方块有可见焦点状态，并尊重 prefers-reduced-motion，关闭任何等距浮动或摇摆动画。"
    },
    "accessibility": {
      "en": "Isometric scenes are read as diagrams, but text placed on angled faces can fail contrast and orientation tests. Keep functional text on the top (horizontal) face or on a flat overlay, and verify 4.5:1 against each face color.\n\nThe style relies on depth cues from shadow and position; in forced-colors mode or high-contrast themes those cues vanish — add borders or labels so the hierarchy does not collapse.\n\nMotion should be decorative only: any bobbing, parallax, or camera drift must respect prefers-reduced-motion and never be required to understand the interface state.",
      "zh": "等距场景以图解方式被阅读，但放在倾斜面上的文字可能对比度和方向都不达标。把功能性文字放在顶部（水平）面上，或放到扁平覆盖层里，并逐面检查 4.5:1 对比度。\n\n这种风格依赖阴影和位置传递纵深感；在强制颜色模式或高对比度主题下这些线索会消失——要补充边框或标签，确保层级不会崩塌。\n\n动效应仅作装饰：任何上下浮动、视差或镜头漂移都必须尊重 prefers-reduced-motion，且不应成为理解界面状态的必要条件。"
    },
    "origin": {
      "en": "Isometric projection was formalized as a technical-drawing method in 1822 by the British engineer William Farish, and it became the standard for mechanical and architectural illustration because it preserves true proportions without perspective distortion. Video-game designers adopted it independently to show environment and action at once, from SimCity (1989) and Age of Empires (1997) to mobile titles like Monument Valley (2014). In UI and web design the 'isometric flat' illustration wave rose around 2017–2019 as landing pages and onboarding flows used block worlds to make complex products feel tangible.",
      "zh": "等距投影作为工程制图方法由英国工程师 William Farish 在 1822 年正式提出，并因能保留真实比例、不产生透视变形而成为机械与建筑插图的标准。电子游戏设计师独立地采用它，以便同时展现场景与动作，从《模拟城市》（1989）、《帝国时代》（1997）到移动端代表作《纪念碑谷》（2014）皆是如此。在 UI 与网页设计领域，「等距扁平」插画风潮在 2017–2019 年左右兴起，落地页和引导流程用方块世界把复杂产品变得可触可感。"
    },
    "seeAlso": [
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "styles/pixel-art",
        "name": "Pixel Art"
      },
      {
        "slug": "styles/material-design",
        "name": "Material Design"
      }
    ]
  },
  {
    "slug": "line-art",
    "name": {
      "en": "Line Art",
      "zh": "线稿 / 单线风格（Line Art / Monoline）"
    },
    "tagline": {
      "en": "Line Art renders an interface as a contour drawing: every control, container, and icon is built from a single-weight outline with no solid fill, like a technical illustration or monoline icon set blown up to UI scale. The line itself is the visual subject — not a border around a colored block, not decoration on top of a flat layout. It reads as precise, light, and almost schematic, as though the product were still a clean ink drawing on tracing paper.",
      "zh": "线稿风格把界面画成一幅轮廓图：每一个控件、容器和图标都由单一粗细的轮廓线构成，没有实心填充，就像被放大到 UI 尺寸的单线图标集或技术插图。线本身就是视觉主体 —— 它不是色块周围的边框，也不是扁平布局上的装饰。整体观感精确、轻盈、近乎示意图，仿佛产品还是描图纸上一张干净的墨线图。"
    },
    "scope": {
      "en": "Scope: This entry covers line-art UI as a finished visual style — uniform-stroke outlines, monoline icons, and wireframe-like surfaces where the contour is the form. It does not cover low-fidelity wireframes (which are placeholders, not a final look) nor line illustrations used only as decoration; here the entire interface must read as a single contour drawing.",
      "zh": "范围：本条覆盖作为成品视觉风格的线稿 UI —— 统一粗细的描边、单线图标、线框感表面，其中轮廓就是形体。它不包括低保真线框图（线框只是占位，不是最终外观），也不包括仅作为装饰出现的线性插画；在这里，整个界面必须被读作一幅轮廓画。"
    },
    "aliases": {
      "en": [
        "outline-only ui where everything is one thin stroke",
        "wireframe-looking interface with no color fills",
        "monoline icons turned into whole buttons and cards",
        "technical drawing style ui made of clean black lines",
        "that vector line-art look with no shading"
      ],
      "zh": [
        "所有东西都用一根细线勾出来的 UI",
        "看起来像没有填色的线框图界面",
        "单线图标放大成了整个按钮和卡片",
        "用干净黑线搭起来的技术绘图风 UI",
        "没有渐变阴影的矢量线稿风"
      ]
    },
    "signals": [
      {
        "id": "single-weight-contour",
        "role": "defining",
        "name": {
          "en": "Single-weight contour lines",
          "zh": "统一粗细的轮廓线"
        },
        "facet": "geometry",
        "description": {
          "en": "All structure is drawn with one consistent stroke weight — typically 1.5–2px — whether it is a card edge, button rim, icon, or divider.",
          "zh": "所有结构都用同一粗细的线条绘制 —— 通常是 1.5–2px —— 不管是卡片边缘、按钮边框、图标还是分隔线。"
        }
      },
      {
        "id": "no-solid-fills",
        "role": "defining",
        "name": {
          "en": "No solid fills",
          "zh": "无实心填充"
        },
        "facet": "surface",
        "description": {
          "en": "Interactive surfaces are hollow; the background shows through every shape. Color appears only as line ink, never as block fill.",
          "zh": "交互表面是中空的，背景会透过每个形状显现出来。颜色只作为线条的墨迹出现，绝不会以块状填充出现。"
        }
      },
      {
        "id": "monochrome-ink",
        "role": "defining",
        "name": {
          "en": "Monochrome ink palette",
          "zh": "单色墨迹配色"
        },
        "facet": "color",
        "description": {
          "en": "A near-black line color such as #1a1a1a or #222223 on an off-white ground such as #fafafa or #ffffff; optional single accent is still a line, not a fill.",
          "zh": "线条用接近纯黑的颜色，如 #1a1a1a 或 #222223，铺在米白底色 #fafafa 或 #ffffff 上；即便有单一强调色，它也只能是一条线，而不是填充。"
        }
      },
      {
        "id": "technical-precision",
        "role": "defining",
        "name": {
          "en": "Technical-drawing precision",
          "zh": "技术制图般的精确"
        },
        "facet": "geometry",
        "description": {
          "en": "Clean vector paths, consistent corner radii (0–4px), exact alignment, and equal gaps — the feeling of a draftsperson's ink drawing rather than a sketch.",
          "zh": "干净的矢量路径、统一的圆角（0–4px）、精确对齐、等距间隙 —— 给人的感觉是制图员的墨线图，而不是随手草图。"
        }
      },
      {
        "id": "negative-space-form",
        "role": "supporting",
        "name": {
          "en": "Negative space as form",
          "zh": "负空间即形体"
        },
        "facet": "layout",
        "description": {
          "en": "Composition relies on the gaps between lines; shapes are recognized by the boundary they draw, not by filled regions or heavy boxes.",
          "zh": "构图依赖线条之间的空隙；形状靠它画出的边界被识别，而不是靠填充区域或沉重的盒子。"
        }
      },
      {
        "id": "outline-typography",
        "role": "supporting",
        "name": {
          "en": "Outline-friendly type",
          "zh": "适配轮廓的字体"
        },
        "facet": "typography",
        "description": {
          "en": "A plain geometric sans in regular weight, small sizes (12–14px), with no filled badges or heavy labels competing with the contour network.",
          "zh": "使用朴素的几何无衬线体，常规字重，字号 12–14px，没有填充徽章或厚重标签去和轮廓网络抢戏。"
        }
      },
      {
        "id": "flat-filled-blocks",
        "role": "avoid",
        "name": {
          "en": "Flat filled blocks",
          "zh": "扁平填充块"
        },
        "facet": "surface",
        "description": {
          "en": "Solid rectangles of color or tinted cards shift the style toward Minimalism or flat design — the line is no longer doing the work.",
          "zh": "实心色块或着色卡片会把风格推向极简主义或扁平设计 —— 线就不再是主角了。"
        }
      }
    ],
    "confusedWith": {
      "slug": "minimalism",
      "name": "Minimalism",
      "because": {
        "en": "This is Line Art because the visual subject is the drawn contour itself — every element is a single-weight outline with empty interior, like a technical illustration.",
        "zh": "这是线稿风格，因为视觉主体是画出来的轮廓线本身 —— 每个元素都是统一粗细的描边，内部留白，像技术插图一样。"
      },
      "wouldBecomeIf": {
        "en": "It would become Minimalism if the outlines were replaced by solid color blocks, generous whitespace, and flat fills — the form would come from absence and color, not from drawn lines.",
        "zh": "如果把这些轮廓线换成纯色块、大量留白和扁平填充 —— 形体来自缺失和颜色，而不是画出来的线 —— 就变成极简主义了。"
      }
    },
    "code": [
      {
        "title": "The defining container: a hollow card drawn in one stroke",
        "language": "css",
        "code": "background: transparent; border: 1.5px solid #1a1a1a; border-radius: 4px; color: #1a1a1a;"
      },
      {
        "title": "A line-art button: circular outline, no fill, icon as stroke",
        "language": "css",
        "code": "width: 40px; height: 40px; border: 1.5px solid #1a1a1a; border-radius: 50%; background: transparent; color: #1a1a1a; transition: transform .15s ease;"
      },
      {
        "title": "SVG icon drawn with the same stroke weight",
        "language": "css",
        "code": "svg { fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }"
      }
    ],
    "brief": {
      "en": "Create the interface as Line Art. Defining signals: every element is rendered as a single-weight contour line, typically 1.5px solid #1a1a1a on a #fafafa or #ffffff ground, with no solid fills; buttons, cards, and icons are hollow shapes whose boundaries are the form. Use a clean geometric sans such as Inter or SF Pro at 12–14px regular weight; keep labels sparse so the line network stays the visual subject. Interactive states should change the line (dashed focus outline 1.5px dashed #1a1a1a, pressed state scale 0.96 or a short dash animation) rather than adding background fills. Progress bars and sliders are simple horizontal lines with a circular thumb drawn in the same stroke; use SVG stroke-only icons (stroke-width: 1.5, fill: none, stroke-linecap round). Corner radii stay subtle at 0–4px; shadows are absent. Do not drift into Minimalism — the decisive difference is that Line Art builds the interface from drawn outlines, while Minimalism builds it from colored blocks and whitespace. Preserve a minimum 3:1 contrast for the lines themselves and 4.5:1 for any text, keep touch targets at least 44×44px even when the visible outline is smaller, and provide non-color state cues such as dashed outlines or scale changes.",
      "zh": "用线稿风格（Line Art / Monoline）创建这个界面。决定性信号：每个元素都渲染成统一粗细的轮廓线，通常用 1.5px solid #1a1a1a 铺在 #fafafa 或 #ffffff 底色上，没有任何实心填充；按钮、卡片和图标都是中空形状，边界本身就是形体。字体用干净的几何无衬线体，如 Inter 或 SF Pro，12–14px 常规字重；标签保持稀疏，让线条网络始终是视觉主体。交互状态应改变线条本身（焦点用 1.5px dashed #1a1a1a 的虚线框，按下态用 scale(0.96) 或短线动画），而不是添加背景填充。进度条和滑块就是一根水平线加同粗细的圆形滑块thumb；图标用纯 SVG 描边（stroke-width: 1.5, fill: none, stroke-linecap round）。圆角控制在 0–4px；不使用阴影。不要滑向极简主义；决定性区别在于线稿风是用画出来的轮廓线搭建界面，而极简主义是用色块和留白搭建。保证线条本身至少有 3:1 对比度，文字达到 4.5:1，触控目标即便可见轮廓较小也要保持至少 44×44px，并通过虚线框、缩放变化等非颜色线索表达状态。"
    },
    "accessibility": {
      "en": "Thin contour lines can disappear for users with low vision or on low-contrast screens; keep the stroke at least 1.5px and measure it against the ground at the smallest supported viewport.\n\nLine-only controls can look inert because there is no filled button shape to suggest clickability; reinforce affordance with hover/focus state changes (dashed outline, scale, or arrow cursor) and ensure keyboard focus is highly visible.\n\nSmall outlined icons and tiny labels are hard to parse at a glance; pair the line network with adequate spacing and avoid relying on line color alone to communicate state — use dashed, dotted, or thickened strokes instead.",
      "zh": "细轮廓线对低视力用户或低对比度屏幕可能不可见；线条至少保持 1.5px，并在最小支持视口下实测与背景的对比度。\n\n纯线条控件看起来可能不像可点击物，因为缺少实心按钮形状暗示可操作性；通过 hover / focus 状态变化（虚线框、缩放或指针光标）强化 affordance，并确保键盘焦点高度可见。\n\n细小的描边图标和微型标签一眼难辨；让线条网络配合足够的间距，并避免单独依赖线条颜色传达状态 —— 改用虚线、点线或加粗描边。"
    },
    "origin": {
      "en": "Line art is an ancient graphic technique — technical illustration, engraving, and engineering drafting all rely on contour alone — but its modern UI form grew from two visible revivals: the Noun Project's monoline icon library, which popularized single-weight pictograms around 2010, and iOS 7's ultra-thin outline icon set in 2013, which proved an entire interface could read as a family of strokes. Since the mid-2010s the look has appeared in landing pages, dashboards, and illustration-led product identities as a deliberate antidote to heavy flat fills.",
      "zh": "线稿是一种古老的图形技法 —— 技术插图、版画、工程制图都只靠轮廓 —— 但它现代的 UI 形态来自两次可见的复兴：Noun Project 的单线图标库在 2010 年前后把统一粗细的象形图推广开来，而 2013 年 iOS 7 的超细描边图标则证明整套界面都可以被读作一个笔画家族。2010 年代中期以来，这种风格作为对厚重扁平填充的反拨，出现在落地页、仪表盘和以插画为主导的产品形象中。"
    },
    "seeAlso": [
      {
        "slug": "styles/minimalism",
        "name": "Minimalism"
      },
      {
        "slug": "styles/hand-drawn",
        "name": "Hand-Drawn"
      },
      {
        "slug": "styles/swiss-style",
        "name": "Swiss Style"
      }
    ]
  },
  {
    "slug": "hand-drawn",
    "name": {
      "en": "Hand-drawn / Doodle",
      "zh": "手绘涂鸦（Hand-drawn / Doodle）"
    },
    "tagline": {
      "en": "Hand-drawn UI keeps the evidence of a human hand on the screen: lines wobble a pixel or two off a perfect vector, color blocks look marker-filled with uneven edges, and typography leans toward handwriting or a sans softened by slight rotation. It signals low-fi honesty, playfulness, or a deliberate escape from polished SaaS sameness. The look lives in sketchy wireframes, indie app onboarding, and landing pages that want to feel like a notebook rather than a dashboard.",
      "zh": "手绘涂鸦 UI 把「人手的痕迹」留在屏幕上：线条会比完美矢量偏出去 1–2px，色块像马克笔涂过一样边缘不均，字体则偏向手写体，或者把无衬线体微微旋转、软化。它传递低保真、真诚或玩心的信号，是有意逃离 polished SaaS 千篇一律感的选择。这种外观常见于 sketchy 线框图、独立 App 的引导页，以及希望像笔记本而非仪表盘的落地页。"
    },
    "scope": {
      "en": "Scope: This entry covers the intentional hand-drawn / doodle visual treatment of finished UI surfaces. It is not about early-stage paper sketches or bad drawing; it is a rendered style that imitates markers, pencils, and rough ink. Sketchy wireframes (e.g. Balsamiq's default output) are a close sibling but are usually production artifacts for communication rather than shipped interface skin.",
      "zh": "范围：本条覆盖成品 UI 界面上有意为之的手绘 / 涂鸦视觉处理。它不是早期纸面草图，也不是画得不好；而是一种模仿马克笔、铅笔和粗墨线的渲染风格。Sketchy 线框图（如 Balsamiq 的默认输出）是近亲，但通常只是沟通用的产物，而非正式上线的界面皮肤。"
    },
    "aliases": {
      "en": [
        "ui that looks like it was sketched with a marker",
        "wiggly hand-drawn borders around buttons",
        "doodle-style interface with pencil textures",
        "rough marker fills and shaky outlines",
        "the balsamiq wireframe look used in a real app",
        "sketchy ui with uneven lines"
      ],
      "zh": [
        "看着像用马克笔随手画出来的 UI",
        "按钮周围一圈歪歪扭扭的手绘边",
        "带铅笔纹理的涂鸦风格界面",
        "粗糙的马克笔填充和抖动的轮廓",
        "把 Balsamiq 线框图风用到真 App 里",
        "线条不均的 sketchy UI"
      ]
    },
    "signals": [
      {
        "id": "wobbly-strokes",
        "role": "defining",
        "name": {
          "en": "Wobbly, imperfect strokes",
          "zh": "歪歪扭扭的不完美线条"
        },
        "facet": "geometry",
        "description": {
          "en": "Borders and dividers visibly waver 1–3px away from a straight vector path; corners are rounded but slightly lopsided, and line endpoints often miss by a hair.",
          "zh": "边框和分隔线明显偏离直线路径 1–3px；圆角虽然存在但微微歪斜，线段端点常常差一点没接上。"
        }
      },
      {
        "id": "marker-pencil-texture",
        "role": "defining",
        "name": {
          "en": "Marker or pencil texture",
          "zh": "马克笔或铅笔纹理"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces carry paper grain, marker bleed, or pencil hatching; flat fills have subtle opacity variation that reads as real ink rather than a digital solid.",
          "zh": "表面带有纸张纤维、马克笔晕染或铅笔排线感；平涂色块有细微不透明度变化，读起来像真实墨水，而非数字纯色。"
        }
      },
      {
        "id": "organic-fill-blocks",
        "role": "defining",
        "name": {
          "en": "Organic, hand-filled color blocks",
          "zh": "有机的手涂色块"
        },
        "facet": "color",
        "description": {
          "en": "Color areas are lumpy and slightly misaligned with their outlines, as if filled with a broad marker that overshot the line in places.",
          "zh": "色块凹凸不平，轮廓线略微错位，像用粗马克笔涂出去时超出了线。"
        }
      },
      {
        "id": "loose-typography",
        "role": "defining",
        "name": {
          "en": "Loose, handwriting-flavored type",
          "zh": "松散、带手写味的字体"
        },
        "facet": "typography",
        "description": {
          "en": "Text uses a handwriting or soft marker-style typeface, or a sans manually skewed and jittered so letters sit on a near-but-not-quite straight baseline.",
          "zh": "文字使用手写体或软马克笔风格字体，也可以把无衬线体手动倾斜、抖动，让字母落在「差不多齐」的基线上。"
        }
      },
      {
        "id": "imperfect-alignment",
        "role": "supporting",
        "name": {
          "en": "Imperfect, collage-like alignment",
          "zh": "不完美、拼贴式对齐"
        },
        "facet": "layout",
        "description": {
          "en": "Elements sit a few pixels off a strict grid; small boxes tilt ±1–2deg, creating the casual feel of items taped to a sketchbook page.",
          "zh": "元素偏离严格网格几个像素；小方块倾斜 ±1–2deg，像随手贴在速写本页面上的物件。"
        }
      },
      {
        "id": "warm-marker-palette",
        "role": "variable",
        "name": {
          "en": "Warm marker palette",
          "zh": "暖调马克笔配色"
        },
        "facet": "color",
        "description": {
          "en": "Classically a paper-white or cream ground plus 2–4 marker colors such as #F15A4A red, #FBB03B yellow, #39B54A green, and #29ABE2 blue; black ink at #2B2B2B.",
          "zh": "经典组合是纸白或米色底加 2–4 支马克笔颜色：红 #F15A4A、黄 #FBB03B、绿 #39B54A、蓝 #29ABE2；墨线用 #2B2B2B。"
        }
      },
      {
        "id": "decorative-doodles",
        "role": "supporting",
        "name": {
          "en": "Decorative doodles",
          "zh": "装饰性涂鸦"
        },
        "facet": "imagery",
        "description": {
          "en": "Stars, arrows, underlines, and scribbles embellish labels and buttons like marginalia in a notebook.",
          "zh": "星星、箭头、下划线、乱线等点缀像笔记本页边的批注一样装饰标签和按钮。"
        }
      },
      {
        "id": "vector-precision",
        "role": "avoid",
        "name": {
          "en": "Vector precision",
          "zh": "矢量精确"
        },
        "facet": "geometry",
        "description": {
          "en": "Crisp 1px anti-aliased lines, perfect Bézier curves, and exact alignment remove the human trace — that is the doorway to flat design or Line Art.",
          "zh": "锐利的 1px 抗锯齿线、完美 Bézier 曲线和精确对齐会抹掉人的痕迹——那是通向扁平设计或 Line Art 的入口。"
        }
      }
    ],
    "confusedWith": {
      "slug": "line-art",
      "name": "Line Art",
      "because": {
        "en": "This is hand-drawn because the strokes visibly wobble, fills are organic and uneven, and the whole surface carries human imperfection — any line-like elements are rough, weighted, and often broken.",
        "zh": "这是手绘涂鸦，因为笔触明显抖动，填充有机而不均，整个表面都带着人的不完美——任何类似线稿的元素都是粗糙、有粗细、常常断开的。"
      },
      "wouldBecomeIf": {
        "en": "It would become Line Art if every stroke were cleaned into a precise single-weight contour with no fill, no texture, and no wobble.",
        "zh": "如果每一根线条都被清理成精确的单粗细轮廓，没有填充、没有纹理、没有抖动，就变成 Line Art 了。"
      }
    },
    "code": [
      {
        "title": "Wobbly border using an SVG roughness filter",
        "language": "css",
        "code": "filter: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"rough\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.05\" numOctaves=\"2\" result=\"noise\"/><feDisplacementMap in=\"SourceGraphic\" in2=\"noise\" scale=\"2.5\" /></filter></svg>#rough'); stroke:#2B2B2B; stroke-width:2.5px; fill:none;"
      },
      {
        "title": "Marker-filled button: uneven fill + soft offset",
        "language": "css",
        "code": "background:#FBB03B; color:#2B2B2B; border:2.5px solid #2B2B2B; border-radius:10px 12px 9px 13px; box-shadow:2px 3px 0 rgba(0,0,0,.08); transform:rotate(-0.8deg);"
      },
      {
        "title": "Handwriting type pairing",
        "language": "css",
        "code": "font-family: 'Caveat', 'Patrick Hand', cursive; letter-spacing:.02em; line-height:1.45;"
      }
    ],
    "brief": {
      "en": "Create the surface using a Hand-drawn / Doodle style. Defining signals: wobbly strokes that visibly waver 1–3px off a perfect path; marker or pencil texture with paper grain and subtle opacity variation; organic color blocks that overshoot their outlines like real marker fills; loose handwriting-flavored typography. Use a warm off-white paper ground such as #f7f4ed with marker accents #F15A4A, #FBB03B, #39B54A, #29ABE2, and black ink #2B2B2B. Borders should be 2–3px solid #2B2B2B with intentionally uneven radii (e.g. border-radius: 10px 12px 9px 13px). Add texture through an SVG feTurbulence displacement filter on strokes or a subtle noise overlay. Buttons and cards can tilt ±0.8–1.5deg and carry a soft offset shadow: box-shadow: 2px 3px 0 rgba(0,0,0,.08). Use a handwriting typeface such as Caveat or Patrick Hand for headings, but keep body text in a clean sans (system-ui) at 15–16px to preserve readability. Do not drift into Line Art; the decisive difference is that hand-drawn keeps fills, texture, and wobble, while Line Art is a precise contour with no fill. Preserve 4.5:1 text contrast even over textured fills, visible focus states independent of the doodle border, and reduced-motion support.",
      "zh": "用手绘涂鸦（Hand-drawn / Doodle）风格创建界面。决定性信号：线条明显抖动、偏离完美路径 1–3px；马克笔或铅笔纹理，带纸张纤维和细微不透明度变化；有机色块像真实马克笔一样超出轮廓线；松散、带手写味的字体。底色用暖调纸白如 #f7f4ed，点缀色用 #F15A4A、#FBB03B、#39B54A、#29ABE2，墨线 #2B2B2B。边框用 2–3px 实线 #2B2B2B，圆角故意不均匀（如 border-radius: 10px 12px 9px 13px）。通过 SVG feTurbulence 位移滤镜或轻微噪点叠加给线条加纹理。按钮和卡片可倾斜 ±0.8–1.5deg，并带柔和偏移阴影：box-shadow: 2px 3px 0 rgba(0,0,0,.08)。标题用手写体如 Caveat 或 Patrick Hand，正文保持 15–16px 的干净无衬线（system-ui）以保证可读性。不要滑向 Line Art；决定性区别在于手绘涂鸦保留填充、纹理和抖动，而 Line Art 是精确无填充的轮廓。确保纹理色块上的文字对比度仍达 4.5:1，焦点指示器可见且与装饰性涂鸦边框区分开，并支持 reduced-motion。"
    },
    "accessibility": {
      "en": "Handwriting fonts and wobbly strokes reduce legibility for some readers; reserve the loose type for headings and short labels, and keep body copy in a clean sans at 15–16px.\n\nTextured fills and marker colors can drop contrast unexpectedly; verify 4.5:1 against the lightest and darkest regions of each textured block, and never rely on roughness alone to indicate state — pair it with color, icon, or label changes.\n\nImperfect alignment must not break logical reading order or touch targets; keep buttons large enough (at least 44×44px) and maintain a visible, non-decorative focus indicator.",
      "zh": "手写体和抖动线条对部分读者可读性更低；把松散字体留给标题和短标签，正文用 15–16px 的干净无衬线体。\n\n纹理填充和马克笔颜色可能意外降低对比度；要在每块纹理的最浅区和最深区都验证 4.5:1，且永远不要把粗糙感当作唯一的状态指示器——要配合颜色、图标或标签变化。\n\n不完美对齐不能破坏阅读顺序或触控目标；按钮至少 44×44px，并保留一个可见的、非装饰性的焦点指示器。"
    },
    "origin": {
      "en": "The aesthetic is rooted in design-process artifacts: Balsamiq Mockups, launched by Giacomo 'Peldi' Giacobazzi in 2008, popularized the sketchy wireframe look as a deliberate low-fidelity communication tool. In the 2010s the sensibility migrated into production UI in playful indie apps and landing pages, and tools like Excalidraw (late 2010s onward) made hand-drawn diagrams a mainstream open-source convention. As a named visual style for shipped interfaces it remains more of a recurring trend than a single coined movement.",
      "zh": "这种审美根植于设计过程的产物：Giacomo 'Peldi' Giacobazzi 2008 年推出的 Balsamiq Mockups 把 sketchy 线框图外观普及成一种刻意的低保真沟通工具。2010 年代，这种气质进入独立 App 和活泼落地页的正式界面；Excalidraw 等工具（2010 年代末起）则让手绘风图表成为主流开源约定。作为已上线界面的命名视觉风格，它更像周期性回潮，而非单一被命名的运动。"
    },
    "seeAlso": [
      {
        "slug": "styles/line-art",
        "name": "Line Art"
      },
      {
        "slug": "styles/zine-collage",
        "name": "Zine Collage"
      },
      {
        "slug": "styles/claymorphism",
        "name": "Claymorphism"
      },
      {
        "slug": "styles/neobrutalism",
        "name": "Neobrutalism"
      },
      {
        "slug": "styles/corporate-memphis",
        "name": "Corporate Memphis"
      }
    ]
  },
  {
    "slug": "fantasy-rpg",
    "name": {
      "en": "Fantasy RPG UI",
      "zh": "奇幻 RPG 界面（Fantasy RPG UI）"
    },
    "tagline": {
      "en": "Fantasy RPG UI draws its look from the inventory screens, spellbooks, and status panels of tabletop-to-computer role-playing games: parchment, weathered stone, tooled leather, and dark patinated metal form the surfaces; runic or blackletter-inflected type announces headings; red health and blue mana bars wrap the action in resource drama. The style treats the screen as a physical artifact from a medieval-fantasy world, not as a flat display. It crystallized in early CRPGs and was polished into a convention by the MMO era, then surfaced again in every indie dungeon crawler and gacha RPG.",
      "zh": "奇幻 RPG 界面的观感取自桌上角色扮演游戏转化而来的电脑 RPG 的背包、法术书和状态面板：羊皮纸、风化石材、压花皮革和深色氧化金属构成表面；符文或哥特黑体字标题宣告身份；红色生命条与蓝色法力条把资源张力包进画面。这个风格把屏幕当作中世纪奇幻世界的实体遗物，而非一块扁平显示屏。它在早期电脑 RPG 中成型，经 MMO 时代打磨成惯例，又在每一款独立地牢探险和抽卡 RPG 中回潮。"
    },
    "scope": {
      "en": "Scope: This entry covers the high-fidelity, medieval-fantasy interface skin used in role-playing games — the materials, typography, and HUD grammar — not the Pixel Art branch that builds the same motifs from visible square pixels, nor the broader fantasy illustration style outside UI.",
      "zh": "范围：本条覆盖角色扮演游戏中高保真、中世纪奇幻风格的界面皮肤 —— 材质、字体排印和 HUD 语法 —— 不包括用可见方形像素构建同一母题的像素艺术分支，也不包括 UI 之外的广义奇幻插画风格。"
    },
    "aliases": {
      "en": [
        "medieval game menu with parchment and leather",
        "the world of warcraft spellbook look",
        "rpg interface with red health and blue mana bars",
        "ancient rune font and metal borders",
        "inventory screen that looks like an old tome",
        "fantasy ui with ornate gold frames"
      ],
      "zh": [
        "中世纪羊皮纸加皮革的游戏菜单",
        "魔兽世界法术书那种样子",
        "红血条蓝法力条的 RPG 界面",
        "古符文字体加金属边框",
        "像旧书一样的装备栏界面",
        "带华丽金框的奇幻 UI"
      ]
    },
    "signals": [
      {
        "id": "parchment-stone-leather",
        "role": "defining",
        "name": {
          "en": "Parchment, stone, and leather surfaces",
          "zh": "羊皮纸、石材与皮革表面"
        },
        "facet": "surface",
        "description": {
          "en": "Backgrounds and panels mimic aged parchment (#e8dcc3), rough stone (#6b655c), or dark tooled leather (#4a3b2a) with subtle grain, stains, and stitched seams — the UI is treated as a physical prop.",
          "zh": "背景和面板模仿做旧的羊皮纸（#e8dcc3）、粗糙石材（#6b655c）或深色压花皮革（#4a3b2a），带有细微颗粒、污渍和缝线 —— UI 被当作实体道具处理。"
        }
      },
      {
        "id": "metal-ornate-borders",
        "role": "defining",
        "name": {
          "en": "Ornate metal borders",
          "zh": "雕花金属边框"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges are wrapped in bevelled brass, iron, or dark bronze frames with decorative corner studs, filigree, or rivets; borders use 3–6px raised gradients to read as cast metal rather than flat lines.",
          "zh": "边缘包着黄铜、铁或深色青铜的斜角边框，带装饰角钉、卷草或铆钉；边框用 3–6px 的凸起渐变来呈现铸造金属感，而不是扁平线条。"
        }
      },
      {
        "id": "runic-lettering",
        "role": "defining",
        "name": {
          "en": "Runic or blackletter-inflected titles",
          "zh": "符文或黑体字标题"
        },
        "facet": "typography",
        "description": {
          "en": "Headings use angular runic, blackletter, or Celtic knot display faces with sharp serifs and uneven stroke rhythm, while body labels stay legible in a neutral serif or condensed sans.",
          "zh": "标题使用棱角分明的符文、哥特黑体或凯尔特结展示字体，尖衬线和不均匀笔画节奏；正文标签则保持在中性衬线体或压缩无衬线体中以保证可读。"
        }
      },
      {
        "id": "hp-mp-resource-bars",
        "role": "defining",
        "name": {
          "en": "Health and mana resource bars",
          "zh": "生命与法力资源条"
        },
        "facet": "imagery",
        "description": {
          "en": "Red health (#c9302c) and blue mana (#2b6ca3) bars sit inside metallic tracks, often with glossy liquid fills, segmented notches, and small icon badges — the HUD borrows the language of character sheets.",
          "zh": "红色生命条（#c9302c）和蓝色法力条（#2b6ca3）嵌在金属轨道内，常配光泽液体填充、分段刻度和微型图标徽记 —— HUD 直接借用角色卡的语言。"
        }
      },
      {
        "id": "medieval-ornament",
        "role": "supporting",
        "name": {
          "en": "Medieval decorative motifs",
          "zh": "中世纪装饰母题"
        },
        "facet": "imagery",
        "description": {
          "en": "Corner flourishes, heraldic borders, wax seals, and Celtic knot dividers reinforce the pre-modern setting without becoming the primary structure.",
          "zh": "角花、纹章边框、火漆印和凯尔特结分隔线强化前现代设定，但不成为主要结构。"
        }
      },
      {
        "id": "rich-texture-lighting",
        "role": "supporting",
        "name": {
          "en": "Rich texture and directional lighting",
          "zh": "丰富纹理与方向光"
        },
        "facet": "depth",
        "description": {
          "en": "Soft drop shadows, inner bevels, and highlight gradients model the thickness of pages and plates; surfaces look illuminated from upper-left by torchlight.",
          "zh": "柔和投影、内斜角和高光渐变塑造书页与金属板的厚度；表面看起来像被左上方的火把照亮。"
        }
      },
      {
        "id": "flat-minimal",
        "role": "avoid",
        "name": {
          "en": "Flat minimal panels",
          "zh": "扁平极简面板"
        },
        "facet": "surface",
        "description": {
          "en": "Clean flat fills, zero borders, and system sans-serif type strip away the prop-like materiality and read as modern app design, not fantasy.",
          "zh": "干净的平涂、零边框和系统无衬线字体会剥掉道具般的材质感，读起来是现代 App 设计，而不是奇幻风格。"
        }
      }
    ],
    "confusedWith": {
      "slug": "pixel-art",
      "name": "Pixel Art",
      "because": {
        "en": "This is Fantasy RPG UI because the interface is rendered as high-fidelity illustration — textured parchment, brushed metal, leather grain, and smooth rendered type — rather than as a deliberately limited set of square pixels.",
        "zh": "这是奇幻 RPG 界面，因为界面呈现的是高保真插画 —— 带纹理的羊皮纸、拉丝金属、皮革颗粒和平滑渲染的字体 —— 而不是刻意受限的方形像素集合。"
      },
      "wouldBecomeIf": {
        "en": "It would become Pixel Art if every texture were reduced to visible 8×8 or 16×16 square cells, the palette shrank to a few indexed colors, and edges became stair-stepped without anti-aliasing.",
        "zh": "如果所有纹理都被缩成可见的 8×8 或 16×16 方形单元、色板缩减到几种索引色、边缘变成无抗锯齿的阶梯状，就变成像素艺术了。"
      }
    },
    "code": [
      {
        "title": "Parchment panel with cast-metal border",
        "language": "css",
        "code": ".panel { background: #eaddcf; border: 6px solid transparent; border-image: linear-gradient(135deg, #a89978, #6d5d43, #8a7b68) 1; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255,255,255,.25), 0 12px 28px rgba(0,0,0,.45); }"
      },
      {
        "title": "HP bar inside a metallic track",
        "language": "css",
        "code": ".hp-track { background: linear-gradient(180deg, #2a2320, #4a3d36); border: 2px solid #8a7b68; border-radius: 4px; padding: 2px; } .hp-fill { height: 14px; background: linear-gradient(180deg, #e74c3c, #8e1b17); box-shadow: inset 0 1px 0 rgba(255,255,255,.35); }"
      },
      {
        "title": "MP bar inside a metallic track",
        "language": "css",
        "code": ".mp-track { background: linear-gradient(180deg, #2a2320, #4a3d36); border: 2px solid #8a7b68; border-radius: 4px; padding: 2px; } .mp-fill { height: 14px; background: linear-gradient(180deg, #4a9bd1, #1e4a73); box-shadow: inset 0 1px 0 rgba(255,255,255,.35); }"
      }
    ],
    "brief": {
      "en": "Create the interface as a Fantasy RPG UI. Defining signals: surfaces look like physical medieval props — aged parchment #e8dcc3 with subtle grain, rough stone #6b655c, or dark tooled leather #4a3b2a; edges are wrapped in ornate metal borders using beveled brass/iron gradients (#9c8c6c to #5d4f3a) with 3–6px thickness, corner studs, and inner highlights. Headings use runic/blackletter display type (Cinzel Decorative, Ringbearer, or UnifrakturMaguntia) at 22–30px with sharp serifs; keep body labels in a readable serif or condensed sans at 13–15px. HUD resource bars are the signature: red health #c9302c and blue mana #2b6ca3 fills inside metallic tracks (#3d3328 to #7a6a56), with glossy top highlights, segmented notches every 20–30px, and small icon badges. Add medieval ornaments — corner flourishes, wax seals, Celtic knot dividers — but keep them secondary. Lighting: soft drop-shadow 0 12px 28px rgba(0,0,0,.45), inner bevel inset 0 1px 0 rgba(255,255,255,.2), directional top-left highlights. Avoid flat minimal panels, system sans-serif type, and clean flat fills; they destroy the prop-like materiality. Ensure text contrast ≥4.5:1 over parchment and leather, pause pulsing bar animations under prefers-reduced-motion, and keep interactive focus rings visible.",
      "zh": "按奇幻 RPG 界面（Fantasy RPG UI）创建这个界面。决定性信号：表面要像中世纪实体道具 —— 做旧羊皮纸 #e8dcc3 带细微颗粒、粗糙石材 #6b655c，或深色压花皮革 #4a3b2a；边缘包着雕花金属边框，使用黄铜/铁的斜角渐变（#9c8c6c 到 #5d4f3a），厚度 3–6px，带角钉和内高光。标题用符文/黑体展示字体（Cinzel Decorative、Ringbearer 或 UnifrakturMaguntia），22–30px，尖衬线；正文标签保持 13–15px 的可读衬线体或压缩无衬线体。HUD 资源条是招牌：红色生命 #c9302c 和蓝色法力 #2b6ca3 的填充条嵌在金属轨道（#3d3328 到 #7a6a56）内，顶部有镜面高光，每 20–30px 分段刻度，配微型图标徽记。再加中世纪装饰 —— 角花、火漆印、凯尔特结分隔线 —— 但保持为点缀。光照：柔和投影 box-shadow: 0 12px 28px rgba(0,0,0,.45)，内斜角 inset 0 1px 0 rgba(255,255,255,.2)，左上方向高光。避免扁平极简面板、系统无衬线字体和干净平涂；它们会破坏道具般的材质感。确保羊皮纸和皮革上的文字对比度 ≥4.5:1，prefers-reduced-motion 下暂停资源条脉动动画，并保持交互焦点环可见。"
    },
    "accessibility": {
      "en": "Ornate runic and blackletter typefaces are decorative: use them only for headings at 18px or larger, and set body labels, stats, and timers in a highly readable serif or sans so the interface remains scannable.\n\nParchment and leather textures can reduce contrast and make thin type hard to read; keep text over solid parchment #e8dcc3 at least #3a2e22, or place text on a semi-opaque dark scrim behind runic headers.\n\nGlowing HP/MP bars, pulsing highlights, and page-turn animations should pause under prefers-reduced-motion, and color alone must never encode status — add icons or labels to red/blue bars.",
      "zh": "华丽的符文和黑体字是装饰性的：只用于 18px 以上的标题，正文标签、数值和计时器则使用高可读性的衬线体或无衬线体，保证界面仍可扫读。\n\n羊皮纸和皮革纹理会降低对比度，让细字难以阅读；放在纯色羊皮纸 #e8dcc3 上的文字至少用 #3a2e22，或在符文标题后垫一块半透明深色 scrim。\n\n发光 HP/MP 条、脉动高光和翻页动画应在 prefers-reduced-motion 下暂停，且状态不能只用色相编码 —— 红/蓝条要同时配图标或文字标签。"
    },
    "origin": {
      "en": "The visual grammar descends from tabletop role-playing games, above all Gary Gygax and Dave Arneson’s Dungeons & Dragons (1974, TSR), whose character sheets, spell cards, and DM screens established parchment, metal, and leather as the default fantasy props. Computer RPGs such as Richard Garriott’s Ultima (1981, Origin Systems) translated those props onto early screens, and Blizzard Entertainment’s Diablo (1996, developed by Blizzard North) and World of Warcraft (2004) polished the high-fidelity metal-and-parchment interface into a mass-market convention that indie dungeon crawlers and mobile gacha RPGs still imitate today.",
      "zh": "这套视觉语法源自桌上角色扮演游戏，首推 Gary Gygax 与 Dave Arneson 的《龙与地下城》（Dungeons & Dragons，1974 年，TSR），其角色卡、法术卡和 DM 屏风确立了羊皮纸、金属和皮革作为默认奇幻道具。Richard Garriott 的《创世纪》（Ultima，1981 年，Origin Systems）等电脑 RPG 把这些道具搬上早期屏幕；Blizzard Entertainment 的《暗黑破坏神》（Diablo，1996 年，由 Blizzard North 开发）和《魔兽世界》（World of Warcraft，2004 年）则将高保真金属加羊皮纸界面打磨成大众市场惯例，至今仍被独立地牢探险和移动抽卡 RPG 效仿。"
    },
    "seeAlso": [
      {
        "slug": "styles/pixel-art",
        "name": "Pixel Art"
      },
      {
        "slug": "styles/art-nouveau",
        "name": "Art Nouveau"
      },
      {
        "slug": "styles/steampunk",
        "name": "Steampunk"
      }
    ]
  },
  {
    "slug": "lcars",
    "name": {
      "en": "LCARS",
      "zh": "LCARS（图书馆计算机访问/检索系统）"
    },
    "tagline": {
      "en": "LCARS is the 24th-century Starfleet computer interface: a black canvas covered in large, flat, rounded color blocks — orange, peach, amber, lavender, and red — that act as both labels and touch targets. Section headers bend in curved \"elbow\" or boomerang shapes, text is almost always uppercase sans-serif, and the whole thing reads as an illuminated console rather than a windowed desktop. It was created for Star Trek: The Next Generation in 1987 and remains the visual shorthand for friendly, accessible sci-fi ship controls.",
      "zh": "LCARS 是 24 世纪星际舰队计算机界面的视觉语言：一块黑色画布上铺着大片扁平的圆角色块——橙、桃、琥珀、薰衣草紫和红色——这些色块同时充当标签和触控目标。区块标题会弯成「弯头」或回旋镖形状，文字几乎全是带衬线体以外的无衬线大写，整体读起来像一块发光的控制台，而不是窗口化桌面。它诞生于 1987 年的《星际迷航：下一代》，至今仍是友好、易用型科幻飞船控制界面的视觉代名词。"
    },
    "scope": {
      "en": "Scope: This entry covers the on-screen graphic language of LCARS as a visual style, not the fictional operating system or its in-universe rules. Touch-panel hardware and voice interfaces are part of the Star Trek prop world but are not the atlas signals here.",
      "zh": "范围：本条覆盖 LCARS 作为视觉风格的屏幕图形语言，不覆盖虚构操作系统或其设定内规则。触控面板硬件和语音交互属于《星际迷航》道具世界，不是本图鉴的信号。"
    },
    "aliases": {
      "en": [
        "star trek computer screens with orange and purple blocks",
        "rounded colored panels on black spaceship displays",
        "the 24th century starfleet touch screen style",
        "sci fi ui with curved elbow headers and big buttons",
        "michael okuda star trek console design"
      ],
      "zh": [
        "《星际迷航》里那种橙紫方块的黑底电脑界面",
        "黑色飞船显示屏上圆角彩色面板",
        "24 世纪星际舰队触控屏风格",
        "带弯头标题和大按钮的科幻 UI",
        "Michael Okuda 做的《星际迷航》控制台设计"
      ]
    },
    "signals": [
      {
        "id": "black-canvas",
        "role": "defining",
        "name": {
          "en": "Black canvas ground",
          "zh": "黑色画布底"
        },
        "facet": "surface",
        "description": {
          "en": "The entire interface sits on a near-black ground (#0b0b0b to #000000) so the colored blocks read as illuminated touch-panel surfaces rather than cards on a page.",
          "zh": "整个界面坐落在接近纯黑的底色上（#0b0b0b 到 #000000），让彩色块读起来像是发光的触控面板表面，而不是页面上的卡片。"
        }
      },
      {
        "id": "rounded-lozenges",
        "role": "defining",
        "name": {
          "en": "Rounded lozenge blocks",
          "zh": "圆角菱形块"
        },
        "facet": "geometry",
        "description": {
          "en": "UI elements are pill-like or lozenge-shaped rectangles with 12–20px corner radii on the short ends; small caps act as buttons, large caps act as section headers.",
          "zh": "UI 元素是药丸形或菱形圆角矩形，短边圆角半径 12–20px；小色块充当按钮，大色块充当区块标题。"
        }
      },
      {
        "id": "elbow-headers",
        "role": "defining",
        "name": {
          "en": "Curved elbow headers",
          "zh": "弯头标题"
        },
        "facet": "geometry",
        "description": {
          "en": "Section dividers and titles sit inside curved, boomerang, or L-shaped caps that bend around a panel corner, often with one rounded end and one straight or clipped edge.",
          "zh": "区块分隔和标题位于弯曲、回旋镖形或 L 形的弯头盖内，常常一端圆角、另一端直边或切角，绕过面板角落。"
        }
      },
      {
        "id": "warm-palette",
        "role": "defining",
        "name": {
          "en": "Warm orange / peach / lavender palette",
          "zh": "暖橙 / 桃 / 薰衣草配色"
        },
        "facet": "color",
        "description": {
          "en": "Dominant blocks use saturated orange (#FF9900), peach (#FFCC99), amber (#FF9966), and lavender (#9999CC); red (#CC6666) and blue (#6699CC) appear as accents, all against black.",
          "zh": "主色块使用饱和橙（#FF9900）、桃色（#FFCC99）、琥珀（#FF9966）和薰衣草紫（#9999CC）；红色（#CC6666）和蓝色（#6699CC）作为小面积点缀，全部压在黑色上。"
        }
      },
      {
        "id": "all-caps-sans",
        "role": "defining",
        "name": {
          "en": "All-caps compact sans labels",
          "zh": "大写紧凑无衬线标签"
        },
        "facet": "typography",
        "description": {
          "en": "Text is set in a tight, medium-weight sans-serif, almost always uppercase, with generous tracking (0.06–0.12em) so labels read as instrument annotations.",
          "zh": "文字使用紧排、中等字重的无衬线体，几乎全为大写，字间距 0.06–0.12em，让标签读起来像仪器注释。"
        }
      },
      {
        "id": "flat-touch-targets",
        "role": "supporting",
        "name": {
          "en": "Flat touch targets",
          "zh": "扁平触控目标"
        },
        "facet": "layout",
        "description": {
          "en": "Controls are flat color swatches with no gradient, shadow, or bevel; the shape and color alone indicate the interactive area, as if pressing a lit touch panel.",
          "zh": "控件是 flat 的纯色块，没有渐变、阴影或倒角；仅靠形状和颜色暗示可交互区域，像按一块发光触控面板。"
        }
      },
      {
        "id": "phosphor-scanlines",
        "role": "avoid",
        "name": {
          "en": "Phosphor scanline depth",
          "zh": "磷光扫描线纵深"
        },
        "facet": "depth",
        "description": {
          "en": "Monochrome green glow, CRT scanlines, terminal fixed-width typography, or faux 3D bevels belong to terminal-hacker and skeuomorphism; LCARS keeps the surface flat, warm, and blocky.",
          "zh": "单色绿光、CRT 扫描线、终端等宽字体或拟真 3D 倒角属于 Terminal Hacker 和拟物设计；LCARS 保持表面扁平、温暖、块状。"
        }
      }
    ],
    "confusedWith": {
      "slug": "terminal-hacker",
      "name": "Terminal Hacker",
      "because": {
        "en": "This is LCARS because the black ground serves a warm, blocky, touch-panel language — colored rounded lozenges, curved elbow headers, and uppercase labels that invite tapping rather than typing.",
        "zh": "这是 LCARS，因为黑色底色承载的是温暖、块状、触控面板的语言——彩色圆角菱形、弯头标题、大写标签，呼唤的是点击而不是输入命令。"
      },
      "wouldBecomeIf": {
        "en": "It would become Terminal Hacker if the color blocks were replaced by a monochrome phosphor-green command-line grid, a blinking cursor, scanlines, and fixed-width glyphs.",
        "zh": "如果把这些彩色块换成单色磷光绿的命令行网格、加上闪烁光标、扫描线和等宽字体，就变成 Terminal Hacker 了。"
      }
    },
    "code": [
      {
        "title": "The signature lozenge button / header block",
        "language": "css",
        "code": "background: #FF9900; color: #0b0b0b; border-radius: 999px; padding: 10px 18px; text-transform: uppercase; letter-spacing: .08em; font-family: var(--font-sans);"
      },
      {
        "title": "Curved elbow header using a pseudo-element cap",
        "language": "css",
        "code": ".elbow { position: relative; background: #9999CC; border-radius: 999px 0 0 999px; padding: 8px 14px; }\n.elbow::after { content: ''; position: absolute; right: -28px; top: 0; width: 48px; height: 100%; border-radius: 0 999px 999px 0; background: #9999CC; }"
      },
      {
        "title": "Layout utilities in Tailwind syntax",
        "language": "tailwind",
        "code": "bg-[#0b0b0b] text-[#FF9900] rounded-full uppercase tracking-widest font-sans px-4 py-2"
      }
    ],
    "brief": {
      "en": "Create the surface in the spirit of LCARS. Start with a near-black canvas (#0b0b0b) as the only background. Build every interactive element as a flat, rounded lozenge: 12–20px border-radius on the short ends, no shadows, no gradients. Use the canonical palette — #FF9900 orange for primary actions and headers, #FFCC99 peach and #FF9966 amber for secondary blocks, #9999CC lavender for tertiary regions, #CC6666 red and #6699CC blue as small accents. Add curved \"elbow\" or boomerang headers by combining straight bars with pseudo-element caps (border-radius: 999px on one side). Set all labels in uppercase sans-serif with 0.06–0.12em letter-spacing and a medium weight; body text should stay minimal. Space blocks with generous black gaps (8–16px) so the colored shapes float on the canvas. Do not add scanlines, phosphor glow, terminal cursors, 3D bevels, or glass blur — those push the design toward Terminal Hacker or Aqua. For interactivity, states can invert text/background color or add a thin inner border; do not animate width/height on the lozenges. Maintain 4.5:1 contrast between the dark canvas and text, and ensure uppercase labels do not become unreadable at small sizes.",
      "zh": "按 LCARS 的精神创建这个界面。先用接近纯黑的画布（#0b0b0b）作为唯一背景。把所有交互元素都做成长短边带圆角的扁平菱形：短边圆角 12–20px，不要阴影和渐变。使用经典色板——#FF9900 橙色用于主操作和标题，#FFCC99 桃色和 #FF9966 琥珀色用于次要色块，#9999CC 薰衣草紫用于第三级区域，#CC6666 红色和 #6699CC 蓝色作为小面积点缀。通过直条加伪元素端盖做出弯曲的「弯头」或回旋镖标题（单侧 border-radius: 999px）。所有标签使用大写无衬线体，字间距 0.06–0.12em，中等字重；正文尽量保持克制。色块之间留出 8–16px 的黑色间隙，让彩色形状浮在画布上。不要加扫描线、磷光辉光、终端光标、3D 倒角或玻璃模糊——那些会把设计推向 Terminal Hacker 或 Aqua。交互状态可用反色或细内边框表示，但不要对菱形本身做宽高动画。保持深色画布与文字的 4.5:1 对比度，并确保小尺寸大写标签仍可读。"
    },
    "accessibility": {
      "en": "The black ground plus warm colored blocks can fail contrast if text sits directly on the lighter peach (#FFCC99) or lavender (#9999CC) fills; use near-black ink (#0b0b0b) on those blocks and keep white text off the yellow-orange swatches.\n\nAll-caps, tightly tracked labels reduce legibility for readers with dyslexia or low vision; reserve uppercase for short labels, keep sentence case for body copy, and use generous line-height.\n\nThe style's flatness means there are no default focus shadows — add a visible focus ring (e.g. a 2px #CC6666 outline with 2px offset) so keyboard users can see which lozenge is active.",
      "zh": "黑色底色加温配色块容易在文字直接压在浅色桃色（#FFCC99）或薰衣草紫（#9999CC）上时对比度不足；在这些色块上用近黑字（#0b0b0b），并避免在白底色上放白色文字。\n\n全大写且字间距紧的标签会降低阅读障碍或低视力用户的可读性；大写只留给短标签，正文用句首大写，并加大行高。\n\n这种风格的扁平化意味着默认没有焦点阴影——给键盘用户加一个可见焦点环（例如 2px #CC6666 outline，偏移 2px），让其清楚知道哪个菱形块处于激活状态。"
    },
    "origin": {
      "en": "LCARS — Library Computer Access/Retrieval System — was designed by graphic designer Michael Okuda for Star Trek: The Next Generation, which premiered in 1987. Roddenberry wanted the Enterprise-D bridge to look more advanced than the original series, so Okuda devised the black-screen, colored-block touch-panel language for the ship's consoles. The look carried through Deep Space Nine and Voyager and became the defining visual shorthand for 24th-century Starfleet interfaces.",
      "zh": "LCARS——图书馆计算机访问/检索系统（Library Computer Access/Retrieval System）——由平面设计师 Michael Okuda 为 1987 年首播的《星际迷航：下一代》设计。Roddenberry 希望企业号-D 的舰桥看起来比原初系列更先进，于是 Okuda 创造了这种黑屏彩色块触控面板语言，用于飞船控制台。这一外观延续到了《深空九号》和《航海家号》，并成为 24 世纪星际舰队界面的标志性视觉符号。"
    },
    "seeAlso": [
      {
        "slug": "styles/terminal-hacker",
        "name": "Terminal Hacker"
      },
      {
        "slug": "styles/cyberpunk",
        "name": "Cyberpunk"
      },
      {
        "slug": "styles/material-design",
        "name": "Material Design"
      }
    ]
  }
];

export const STYLES_META: StyleMeta = {
  "hubTagline": {
    "en": "What style is this? The visual styles atlas. Recognize the look, learn its real name and the 3–5 signals that make it, and tell it from its closest look‑alike. Then copy a brief your coding agent can build from.",
    "zh": "这是什么风格？视觉风格图鉴。认出这种观感，学会它的真名和构成它的 3–5 个信号，并把它和最容易「撞脸」的相似风格区分开。然后复制一份 brief，你的 AI 编程代理可以直接照着构建。"
  },
  "governedNote": {
    "en": "There is no honest list of “all design styles.” A style ships here only with a credible source, a terminology-status label, defensible defining signals, and a specimen you can actually recognize. In research now:",
    "zh": "世上不存在一份诚实的「所有设计风格」清单。一个风格只有具备可信的来源、术语状态标签、经得起推敲的定义信号，以及你真正能认出来的实例，才会收录于此。正在研究："
  },
  "researching": [
    "Internet Ugly",
    "Synthwave / Retrofuturism",
    "Solarpunk",
    "Maximalism"
  ]
};
