import { UIEntry } from "../types/ui";

export const ENTRIES: UIEntry[] = [
  {
    "slug": "text-scramble",
    "platform": "web",
    "name": {
      "en": "Text Scramble (Decode Effect)",
      "zh": "文本乱序（Decode 效果）"
    },
    "tagline": {
      "en": "Random characters churn and settle into the real text",
      "zh": "随机字符不停翻滚，最终落定成真正的文字"
    },
    "description": {
      "en": "“The letters shuffle until they spell the word” is a text scramble, also called the decode or Matrix effect — every character churns through random glyphs, then locks into place, usually left to right. The classic tool is GSAP's ScrambleTextPlugin (free since 3.13); hand-rolled versions are a requestAnimationFrame loop with a settle deadline per character.",
      "zh": "“字母一直乱换，直到拼出正确单词”就是文本乱序，也叫 decode 效果或黑客帝国（Matrix）效果 —— 每个字符先翻滚一串随机字形，再锁定到位，通常从左到右。经典工具是 GSAP 的 ScrambleTextPlugin（3.13 起免费）；手写版本就是一个 requestAnimationFrame 循环，给每个字符设一个落定死线。"
    },
    "aka": {
      "en": [
        "decode effect",
        "matrix text effect",
        "shuffle text"
      ],
      "zh": [
        "decode 效果",
        "黑客帝国文字效果",
        "乱序文字效果"
      ]
    },
    "fuzzy": {
      "en": [
        "the text that shuffles random letters until it spells the word",
        "the matrix style decoding text",
        "letters cycling before they land on the real ones",
        "the hacker text effect",
        "glitchy letters that resolve into a title"
      ],
      "zh": [
        "字母一直随机乱换，直到拼出正确单词的那个文字效果",
        "黑客帝国那种解码文字",
        "字母先轮着换一圈，最后才落到正确字母上",
        "黑客风格的文字效果",
        "乱闪的字母最后拼成一个标题"
      ]
    },
    "api": [
      {
        "framework": "GSAP",
        "symbol": "ScrambleTextPlugin",
        "note": {
          "en": "the canonical implementation — free since GSAP 3.13",
          "zh": "最经典的实现 —— 自 GSAP 3.13 起免费"
        }
      },
      {
        "framework": "JS",
        "symbol": "requestAnimationFrame + charset swap",
        "note": {
          "en": "the hand-rolled version: per-character reveal deadline, random glyphs until then",
          "zh": "手写版做法：给每个字符设一个揭晓死线，死线前一直显示随机字形"
        }
      },
      {
        "framework": "CSS",
        "symbol": "font-variant-numeric: tabular-nums",
        "note": {
          "en": "monospace/tabular glyphs stop the line jittering while it churns",
          "zh": "等宽/表格数字字形能防止翻滚时整行抖动"
        }
      },
      {
        "framework": "A11y",
        "symbol": "aria-label + aria-hidden churn",
        "note": {
          "en": "screen readers get the final text, never the noise",
          "zh": "屏幕阅读器只读到最终文本，读不到翻滚的噪声"
        }
      }
    ],
    "prompt": {
      "en": "Build a text scramble (decode) effect: each character cycles random glyphs and locks into the real one left to right (GSAP ScrambleTextPlugin, or a requestAnimationFrame loop with a per-character settle deadline). Use a monospace font or tabular glyphs so width never jitters, expose the final string via aria-label with the churning span aria-hidden, and honor prefers-reduced-motion by rendering the text instantly.",
      "zh": "构建一个文本乱序（decode）效果：每个字符先循环随机字形，再从左到右依次锁定为真实字符（用 GSAP ScrambleTextPlugin，或 requestAnimationFrame 循环加每字符的落定死线）。使用等宽字体或表格数字字形，保证宽度不抖动；通过 aria-label 暴露最终字符串，翻滚中的 span 设 aria-hidden；并遵守 prefers-reduced-motion，直接瞬间呈现文本。"
    },
    "debugPrompt": {
      "en": "Debug my text scramble effect (GSAP ScrambleTextPlugin / rAF charset loop). Rule out: layout jitter because glyph widths differ (needs monospace or tabular-nums); the animation never settling because the per-character deadline keeps resetting on re-render; screen readers announcing garbage (final text must live in aria-label, churn aria-hidden); the effect re-running on every state change instead of once per mount; reduced-motion users getting the churn instead of instant text. The symptom:",
      "zh": "调试我的文本乱序效果（GSAP ScrambleTextPlugin / rAF 字符集循环）。逐项排除：字形宽度不一导致布局抖动（需要 monospace 或 tabular-nums）；每字符死线在重新渲染时不断重置，动画永远落不定；屏幕阅读器念出乱码（最终文本必须放在 aria-label，翻滚部分 aria-hidden）；每次状态变化都重跑效果，而不是每次挂载只跑一次；开了 reduced-motion 的用户仍看到翻滚而不是瞬间出字。症状是："
    },
    "parts": [
      {
        "id": "glyph-churn",
        "name": {
          "en": "Glyph churn",
          "zh": "字符翻滚（Glyph churn）"
        },
        "api": "chars (ScrambleTextPlugin)",
        "description": {
          "en": "“The random letters still spinning at the end while the rest has settled” is the churn — the not-yet-locked characters drawn from the scramble charset.",
          "zh": "“其他字母都定住了，末尾还有几个随机字母在转”就是 churn —— 从乱序字符集里取出的、尚未锁定的字符。"
        },
        "prompt": {
          "en": "the scramble's glyph churn: the still-randomizing characters (charset like \"!<>-_\\\\/[]{}\") that haven't reached their settle deadline yet",
          "zh": "乱序效果中的字符翻滚：仍在随机变化、还没到落定死线的字符（字符集如 \"!<>-_\\\\/[]{}\")"
        }
      }
    ],
    "related": [
      "marquee",
      "skeleton-spinner"
    ],
    "demo": "web/text-scramble"
  },
  {
    "slug": "spring",
    "platform": "web",
    "name": {
      "en": "Spring Animation",
      "zh": "弹簧动画（Spring Animation）"
    },
    "tagline": {
      "en": "Physics-based motion that overshoots the target and settles",
      "zh": "基于物理的运动：冲过目标，再缓缓停稳"
    },
    "description": {
      "en": "“It bounces a little past where it lands” is a spring animation — motion driven by physics (stiffness, damping, mass) instead of a duration and curve. The signature is the overshoot: the element passes its target and settles back. Springs also retarget mid-flight gracefully, which is why gesture-driven UIs use them.",
      "zh": "“落点之前还要弹一下”就是弹簧动画 —— 由物理参数（stiffness、damping、mass）驱动的运动，而不是时长加曲线。它的标志是过冲：元素冲过目标再回稳。弹簧还能在运动中优雅地改目标，所以手势驱动的 UI 都用它。"
    },
    "aka": {
      "en": [
        "spring physics",
        "bouncy animation",
        "spring transition"
      ],
      "zh": [
        "弹簧物理",
        "Q 弹动画",
        "弹簧过渡"
      ]
    },
    "fuzzy": {
      "en": [
        "the bouncy animation that goes past and comes back",
        "it overshoots a little and settles",
        "the jelly bounce when a panel opens",
        "ios style bouncy movement",
        "animation with stiffness and damping instead of duration"
      ],
      "zh": [
        "那种冲过头又弹回来的动画",
        "稍微冲过一点，然后慢慢停住",
        "面板打开时那种果冻般的弹动",
        "iOS 那种带弹性的移动",
        "不讲时长、只讲刚度和阻尼的动画"
      ]
    },
    "api": [
      {
        "framework": "Motion",
        "symbol": "transition={{ type: \"spring\", stiffness, damping }}",
        "note": {
          "en": "no duration — the physics decide when it stops",
          "zh": "没有 duration —— 什么时候停由物理说了算"
        }
      },
      {
        "framework": "CSS",
        "symbol": "linear(…)",
        "note": {
          "en": "a spring baked into keypoints — springs as pure CSS",
          "zh": "把弹簧烘进关键点的曲线 —— 纯 CSS 实现弹簧"
        }
      },
      {
        "framework": "React",
        "symbol": "react-spring"
      },
      {
        "framework": "SwiftUI",
        "symbol": ".spring(response:dampingFraction:)",
        "note": {
          "en": "the same idea on Apple platforms",
          "zh": "Apple 平台上的同款思路"
        }
      }
    ],
    "prompt": {
      "en": "Give this animation spring physics: use Motion's transition={{ type: \"spring\", stiffness: 300, damping: 22 }} (or react-spring) instead of a duration+easing pair — the element should slightly overshoot its target and settle; raise damping to kill wobble, raise stiffness for snap. For pure CSS, bake the spring into a linear() timing function.",
      "zh": "给这个动画加上弹簧物理：用 Motion 的 transition={{ type: \"spring\", stiffness: 300, damping: 22 }}（或 react-spring）代替 duration + easing 组合 —— 元素应稍微冲过目标再停稳；增大 damping 消除晃动，增大 stiffness 更利落。纯 CSS 方案：把弹簧烘进 linear() 时间函数。"
    },
    "debugPrompt": {
      "en": "Debug my spring animation (Motion type: \"spring\", react-spring, CSS linear()). Rule out: damping too low so it wobbles like jelly; stiffness too low so it feels underwater; a duration fighting the physics (springs compute their own settle time); the overshoot clipped by an overflow-hidden parent; interruptions snapping because the spring restarts from the target instead of retargeting from current velocity. The symptom:",
      "zh": "调试我的弹簧动画（Motion type: \"spring\"、react-spring、CSS linear()）。逐项排除：damping 太小，晃得像果冻；stiffness 太小，动得像在水里；duration 和物理打架（弹簧自己算停稳时间）；过冲被 overflow-hidden 的父元素裁掉；打断时生硬跳变，因为弹簧从目标点重启，而不是带着当前速度重新定向。症状是："
    },
    "parts": [
      {
        "id": "overshoot",
        "name": {
          "en": "Overshoot",
          "zh": "过冲（Overshoot）"
        },
        "api": "damping",
        "description": {
          "en": "“Where it goes past the line and comes back” is the overshoot — damping controls how much of it survives.",
          "zh": "“冲过那条线又回来”的部分就是过冲 —— damping 决定过冲能保留多少。"
        },
        "prompt": {
          "en": "the spring's overshoot: the travel past the resting position before settling — tune with damping (higher = less overshoot)",
          "zh": "弹簧的过冲：停稳之前冲过静止位置的那段行程 —— 用 damping 调节（越大过冲越小）"
        }
      }
    ],
    "related": [
      "easing",
      "toast"
    ],
    "demo": "web/spring"
  },
  {
    "slug": "easing",
    "platform": "web",
    "name": {
      "en": "Easing (Timing Function)",
      "zh": "缓动（Timing Function）"
    },
    "tagline": {
      "en": "The speed curve of an animation — why motion feels smooth or robotic",
      "zh": "动画的速度曲线 —— 决定动起来是顺滑还是僵硬"
    },
    "description": {
      "en": "“The animation feels robotic” is almost always easing — the timing function, the curve that maps time to progress. Linear moves at constant speed; ease-out starts fast and lands softly; ease-in-out is the S-curve UI motion defaults to. The four numbers in cubic-bezier() are just the two control points of that graph.",
      "zh": "“动画感觉很机械”几乎可以肯定是缓动的问题 —— 缓动就是时间函数，把时间映射成进度的那条曲线。linear 匀速前进；ease-out 起步快、落地软；ease-in-out 是 UI 动效默认的 S 形曲线。cubic-bezier() 里的四个数字，不过是那条图上的两个控制点。"
    },
    "aka": {
      "en": [
        "timing function",
        "easing curve",
        "bezier curve"
      ],
      "zh": [
        "时间函数",
        "缓动曲线",
        "贝塞尔曲线"
      ]
    },
    "fuzzy": {
      "en": [
        "the animation feels robotic and linear",
        "how the movement speeds up and slows down",
        "the curve that controls the animation speed",
        "make it start fast and end slow",
        "the s shaped graph in the animation settings"
      ],
      "zh": [
        "动画感觉又僵又直，像机器人",
        "运动过程中哪儿快哪儿慢",
        "控制动画速度的那条曲线",
        "让它开头快、结尾慢",
        "动画设置里那条 S 形的图"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "transition-timing-function",
        "note": {
          "en": "ease, ease-in, ease-out, ease-in-out, linear",
          "zh": "ease、ease-in、ease-out、ease-in-out、linear"
        }
      },
      {
        "framework": "CSS",
        "symbol": "cubic-bezier(.4, 0, .2, 1)",
        "note": {
          "en": "a custom curve — the four numbers are the two control points",
          "zh": "自定义曲线 —— 四个数字就是两个控制点"
        }
      },
      {
        "framework": "CSS",
        "symbol": "linear(…)",
        "note": {
          "en": "piecewise curves beyond beziers (springs, bounces); baseline since 2023",
          "zh": "超越贝塞尔的分段曲线（弹簧、弹跳）；2023 年起进入基线"
        }
      },
      {
        "framework": "Motion",
        "symbol": "transition={{ ease: \"easeInOut\" }}"
      }
    ],
    "prompt": {
      "en": "Fix the easing of my animation: replace linear/default timing with an explicit curve — transition-timing-function: cubic-bezier(.4, 0, .2, 1) for UI moves (fast start, soft landing), ease-out for things entering, ease-in for things leaving; keep durations 150–300ms for interface transitions and never animate at linear speed unless it's a marquee-style continuous loop.",
      "zh": "修好我动画的缓动：把 linear/默认时间换成明确的曲线 —— UI 移动用 transition-timing-function: cubic-bezier(.4, 0, .2, 1)（起步快、落地软），进入的元素用 ease-out，离开的元素用 ease-in；界面过渡时长保持在 150–300ms，除非是 marquee 式连续滚动，否则绝不用 linear 匀速。"
    },
    "debugPrompt": {
      "en": "Debug the feel of my animation (CSS transition-timing-function / cubic-bezier). Rule out: no timing function set so it falls back to the default ease; linear timing making UI motion feel robotic; ease-in on an ENTERING element (arrivals want ease-out — decelerate into place); a cubic-bezier with y values outside 0–1 clipping instead of overshooting in transition shorthand order; duration so long the curve reads as lag. The symptom:",
      "zh": "调试我动画的手感（CSS transition-timing-function / cubic-bezier）。逐项排除：没设时间函数，回落到默认 ease；linear 匀速让 UI 动效显得机械；进入中的元素用了 ease-in（进场该用 ease-out —— 减速到位）；cubic-bezier 的 y 值超出 0–1，本该过冲却在 transition 简写里被钳掉；时长太长，曲线读起来像卡顿。症状是："
    },
    "parts": [
      {
        "id": "timing-curve",
        "name": {
          "en": "Timing curve",
          "zh": "时间曲线（Timing curve）"
        },
        "api": "cubic-bezier(x1, y1, x2, y2)",
        "description": {
          "en": "“The S-shaped graph in the animation editor” is the timing curve itself — time runs left to right, progress bottom to top.",
          "zh": "“动画编辑器里那条 S 形的图”就是时间曲线本身 —— 横轴是时间，从左到右；纵轴是进度，从下到上。"
        },
        "prompt": {
          "en": "the easing's timing curve: the cubic-bezier graph mapping time (x) to progress (y) — steep = fast, flat = slow",
          "zh": "缓动的时间曲线：把时间（x）映射到进度（y）的 cubic-bezier 图 —— 越陡越快，越平越慢"
        }
      }
    ],
    "related": [
      "spring",
      "marquee"
    ],
    "demo": "web/easing"
  },
  {
    "slug": "masonry",
    "platform": "web",
    "name": {
      "en": "Masonry Layout (Pinterest Grid)",
      "zh": "瀑布流布局（Pinterest 网格）"
    },
    "tagline": {
      "en": "Cards of different heights packed into columns with no row gaps",
      "zh": "高度各异的卡片紧塞进列中，行线完全错开"
    },
    "description": {
      "en": "“The Pinterest grid where every card keeps its own height” is a masonry layout — each new item joins the shortest column, so cards pack like bricks with no row lines and a staggered bottom edge. Chinese UIs call it 瀑布流 (waterfall flow). CSS columns approximates it everywhere today; native masonry (Grid Lanes) shipped in Safari 26.",
      "zh": "“Pinterest 那种每张卡片保持自己高度的网格”就是瀑布流布局 —— 每个新条目加入当前最短的列，于是卡片像砖块一样码紧，没有行线，底边参差错落。中文 UI 圈叫它瀑布流。今天用 CSS columns 可以在各处近似实现；原生 masonry（Grid Lanes）已在 Safari 26 落地。"
    },
    "aka": {
      "en": [
        "waterfall layout",
        "pinterest grid",
        "brick layout"
      ],
      "zh": [
        "瀑布流布局",
        "Pinterest 网格",
        "砖块布局"
      ]
    },
    "fuzzy": {
      "en": [
        "the pinterest style grid where every card is a different height",
        "photos stacked like bricks with no gaps",
        "columns where the cards don't line up in rows",
        "the photo wall where images keep their own height",
        "cards that fill in under each other instead of in rows"
      ],
      "zh": [
        "Pinterest 那种每张卡片高度都不一样的网格",
        "照片像砖头一样码起来，没有缝隙",
        "一列列的，卡片在行上根本不对齐",
        "照片墙，每张图都保持自己的高度",
        "卡片不是按行排，而是一张张补到下面去"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "columns",
        "note": {
          "en": "works everywhere today — but items flow DOWN each column, not across rows",
          "zh": "今天到处都能用 —— 但条目是沿每列向下排的，不是按行横排"
        }
      },
      {
        "framework": "CSS",
        "symbol": "grid-template-rows: masonry",
        "note": {
          "en": "native (Grid Lanes): Safari 26; behind flags elsewhere in 2026 — pair with @supports",
          "zh": "原生方案（Grid Lanes）：Safari 26 已支持；2026 年其他浏览器还在 flag 后面 —— 记得配 @supports"
        }
      },
      {
        "framework": "React",
        "symbol": "react-masonry-css",
        "note": {
          "en": "JS split into per-column stacks when row-major order matters",
          "zh": "在意按行优先顺序时，用 JS 把条目分进各列的堆栈"
        }
      },
      {
        "framework": "CSS",
        "symbol": "break-inside: avoid",
        "note": {
          "en": "stops cards splitting across columns in the fallback",
          "zh": "防止卡片在降级方案里被拆到两列"
        }
      }
    ],
    "prompt": {
      "en": "Build a masonry layout (Pinterest-style): native CSS first — @supports (grid-template-rows: masonry) { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: masonry; } — with a CSS multi-column fallback (columns: 3; every card break-inside: avoid). Note the fallback orders items down each column, not across rows; if strict left-to-right order matters, use react-masonry-css instead. Reserve image aspect ratios so cards don't jump while loading.",
      "zh": "构建一个瀑布流布局（Pinterest 风格）：优先用原生 CSS —— @supports (grid-template-rows: masonry) { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: masonry; } —— 降级用 CSS 多列（columns: 3；每张卡片 break-inside: avoid）。注意降级方案里条目沿每列向下排，不是按行；如果严格要求从左到右的顺序，改用 react-masonry-css。提前占位图片宽高比，避免加载时卡片跳动。"
    },
    "debugPrompt": {
      "en": "Debug my masonry layout (CSS columns fallback / grid-template-rows: masonry). Rule out: cards splitting across columns because break-inside: avoid is missing; item order reading down the first column when the design expects row-major; equal-height rows appearing because the browser lacks native masonry and there's no @supports fallback; the wall reshuffling as images load because width/height aren't reserved; margins on cards fighting the column-gap. The symptom:",
      "zh": "调试我的瀑布流布局（CSS columns 降级 / grid-template-rows: masonry）。逐项排除：缺了 break-inside: avoid，卡片被拆到两列；设计期望按行优先读，条目却顺着第一列往下排；浏览器不支持原生 masonry 又没写 @supports 降级，出现等高行；图片没预留 width/height，加载时整面墙重新洗牌；卡片上的 margin 和 column-gap 打架。症状是："
    },
    "parts": [
      {
        "id": "packed-column",
        "name": {
          "en": "Packed column",
          "zh": "紧凑堆叠的列（Packed column）"
        },
        "api": "columns / grid track",
        "description": {
          "en": "“The cards stack straight down with nothing lining up sideways” — each column packs independently, which is the whole trick.",
          "zh": "“卡片笔直往下叠，横向什么都不对齐” —— 每列各自独立紧凑堆叠，这正是全部诀窍。"
        },
        "prompt": {
          "en": "one packed column of the masonry wall: items stack top-to-bottom with a fixed column gap, each new item joining the currently shortest column",
          "zh": "瀑布墙上的一根紧凑列：条目从上到下堆叠，列间距固定，每个新条目加入当前最短的列"
        }
      }
    ],
    "related": [
      "bento-grid",
      "lightbox"
    ],
    "demo": "web/masonry"
  },
  {
    "slug": "bento-grid",
    "platform": "web",
    "name": {
      "en": "Bento Grid",
      "zh": "便当网格（Bento Grid）"
    },
    "tagline": {
      "en": "One grid, mixed tile sizes — a layout packed like a bento box",
      "zh": "一个网格，大小不一的格子 —— 像便当盒一样紧凑分装的布局"
    },
    "description": {
      "en": "“Several boxes in a grid — bento” is a bento grid: one CSS grid where tiles span different numbers of cells, so a hero tile sits among small ones like compartments in a Japanese lunchbox. Apple's marketing pages made the style famous. The tell versus a plain card grid is the spanning: at least one tile takes 2×2 or 2×1 cells while everything stays aligned to the same tracks and gap.",
      "zh": "“网格里好几个盒子 —— bento”就是便当网格：一个 CSS grid，卡片跨越不同数量的单元，于是一张主卡片置身小卡片之间，像日式便当盒里的隔间。Apple 的官网营销页带火了这个风格。它和普通卡片网格的区别就在跨格：至少有一张卡片占 2×2 或 2×1 个单元，而其他一切仍对齐同一套轨道和缝隙。"
    },
    "aka": {
      "en": [
        "bento box layout",
        "feature grid",
        "dashboard grid"
      ],
      "zh": [
        "便当盒布局",
        "特性网格",
        "仪表盘网格"
      ]
    },
    "fuzzy": {
      "en": [
        "several boxes in a grid bento",
        "boxes of different sizes in a grid",
        "the grid with one big box and smaller boxes around it",
        "the apple style feature grid with rounded cards",
        "dashboard made of different sized tiles"
      ],
      "zh": [
        "网格里好几个盒子，bento 那种",
        "网格里大小不同的盒子",
        "一个大盒子、周围围一圈小盒子的网格",
        "Apple 风格的圆角卡片特性网格",
        "由大小不一的方块拼成的仪表盘"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "display: grid + grid-column: span 2",
        "note": {
          "en": "spanning cells are what make a grid a bento",
          "zh": "正是跨格的单元让普通网格变成 bento"
        }
      },
      {
        "framework": "CSS",
        "symbol": "grid-template-columns: repeat(4, 1fr)",
        "note": {
          "en": "the fixed track skeleton the spans play against",
          "zh": "跨格赖以发挥的固定轨道骨架"
        }
      },
      {
        "framework": "CSS",
        "symbol": "grid-template-areas",
        "note": {
          "en": "name the tiles instead of counting spans",
          "zh": "给格子命名，省去数跨格"
        }
      },
      {
        "framework": "Tailwind",
        "symbol": "col-span-2 row-span-2"
      }
    ],
    "prompt": {
      "en": "Build a bento grid: one CSS grid (display: grid; grid-template-columns: repeat(4, 1fr); one consistent gap) where feature tiles span multiple cells via grid-column: span 2 / grid-row: span 2, every tile shares the same corner radius and an opaque background, and the whole composition reads as a single rounded box of differently sized compartments.",
      "zh": "构建一个 bento 网格：一个 CSS grid（display: grid; grid-template-columns: repeat(4, 1fr)；全网格统一 gap），特性卡片通过 grid-column: span 2 / grid-row: span 2 跨多个单元，所有卡片用同一个圆角半径和不透明背景，整体读起来像一个大圆角盒子里装着大小不一的隔间。"
    },
    "debugPrompt": {
      "en": "Debug my bento grid (CSS grid with spanning tiles). Rule out: holes in the grid because a span exceeds the remaining columns in its row (consider grid-auto-flow: dense, noting it reorders visually vs DOM); uneven gutters from per-tile margins instead of the grid's single gap; tiles with different corner radii or translucent backgrounds breaking the lunchbox look; the hero tile collapsing on small screens because the span isn't reduced under a media query. The symptom:",
      "zh": "调试我的 bento 网格（带跨格卡片的 CSS grid）。逐项排除：某行的跨格超出剩余列数，网格出现空洞（可考虑 grid-auto-flow: dense，注意它会让视觉顺序和 DOM 顺序不一致）；用了逐卡片 margin 而不是网格统一的 gap，缝隙宽窄不一；卡片圆角各异或背景半透明，破坏了便当盒的整体感；小屏幕上主卡片塌掉，因为 media query 里没把 span 减小。症状是："
    },
    "parts": [
      {
        "id": "spanning-tile",
        "name": {
          "en": "Spanning tile",
          "zh": "跨格卡片（Spanning tile）"
        },
        "api": "grid-column: span 2",
        "description": {
          "en": "“The one big box among the small ones” is a spanning tile — a normal grid item told to take two columns and/or two rows.",
          "zh": "“小盒子中间那个大盒子”就是跨格卡片 —— 一个普通的 grid item，被告知要占两列和/或两行。"
        },
        "prompt": {
          "en": "the bento grid's spanning tile: a grid item with grid-column: span 2 and grid-row: span 2 so it occupies a 2×2 block among single-cell tiles",
          "zh": "bento 网格的跨格卡片：一个带 grid-column: span 2 和 grid-row: span 2 的 grid item，在单格卡片之间占据一个 2×2 区块"
        }
      },
      {
        "id": "bento-gap",
        "name": {
          "en": "Gap (gutter)",
          "zh": "网格间距（Gap/gutter）"
        },
        "api": "gap",
        "description": {
          "en": "“The even spacing between all the boxes” is the grid's gap — one value, never per-tile margins, which is why a bento looks machine-packed.",
          "zh": "“所有盒子之间均匀的间距”就是网格的 gap —— 一个值统管，绝不用逐卡片 margin，所以 bento 才有机器打包般的整齐感。"
        },
        "prompt": {
          "en": "the bento grid's gap: a single CSS gap value on the grid container providing every gutter, with no margins on the tiles themselves",
          "zh": "bento 网格的 gap：grid 容器上的单个 CSS gap 值提供所有缝隙，卡片本身不设 margin"
        }
      }
    ],
    "related": [
      "masonry",
      "drag-and-drop"
    ],
    "demo": "web/bento-grid"
  },
  {
    "slug": "hamburger-menu",
    "platform": "web",
    "name": {
      "en": "Hamburger Menu (Nav Drawer)",
      "zh": "汉堡菜单（导航抽屉）"
    },
    "tagline": {
      "en": "The three-line button and the navigation panel it slides open",
      "zh": "三条线的按钮，以及它滑出的导航面板"
    },
    "description": {
      "en": "“The three horizontal lines used to open a menu” are a hamburger button, and the panel it slides open is a navigation drawer. The button is just the trigger — three stacked lines, usually top-left on phones; the drawer is an off-canvas <nav> that slides over the page above a scrim. The icon's siblings (dots, ellipsis) live under The Three Dots; this page is the icon-plus-drawer navigation pattern itself.",
      "zh": "“用来打开菜单的三条横线”是汉堡按钮，它滑出的面板叫导航抽屉。按钮只是触发器 —— 三条叠线，通常在手机的左上角；抽屉是屏外的 <nav>，滑进来盖在页面上，底下垫一层遮罩。这个图标的亲戚们（圆点、省略号）归在 The Three Dots 条目下；本页讲的是“图标加抽屉”的导航模式本身。"
    },
    "aka": {
      "en": [
        "navigation drawer",
        "hamburger button",
        "side menu",
        "off-canvas menu"
      ],
      "zh": [
        "导航抽屉",
        "汉堡按钮",
        "侧边菜单",
        "屏外菜单"
      ]
    },
    "fuzzy": {
      "en": [
        "the three horizontal lines used to open a menu",
        "three line side menu that expands to the full size of the screen",
        "the burger menu on mobile sites",
        "the menu that slides in from the side when you tap the lines",
        "the stacked lines button at the top corner",
        "the side panel with all the page links"
      ],
      "zh": [
        "用来打开菜单的三条横线",
        "三条线的侧边菜单，展开后占满整个屏幕",
        "手机网站上的汉堡菜单",
        "点那几根线就从旁边滑进来的菜单",
        "顶部角落里那个几条线叠起来的按钮",
        "装着所有页面链接的侧面板"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "aria-expanded + aria-controls",
        "note": {
          "en": "the toggle button's contract",
          "zh": "开关按钮的契约"
        }
      },
      {
        "framework": "HTML",
        "symbol": "<nav>",
        "note": {
          "en": "the drawer content is navigation",
          "zh": "抽屉里的内容是导航"
        }
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Sheet side=\"left\"",
        "note": {
          "en": "the usual React building block",
          "zh": "React 里常用的积木"
        }
      },
      {
        "framework": "Material",
        "symbol": "NavigationDrawer",
        "note": {
          "en": "Android/Material's name for the panel",
          "zh": "Android/Material 对这个面板的称呼"
        }
      }
    ],
    "prompt": {
      "en": "Build a hamburger menu: a <button aria-expanded aria-controls> drawing three stacked lines that toggles a navigation drawer — an off-canvas <nav> panel sliding in from the left over a scrim (shadcn Sheet side=\"left\", Material NavigationDrawer). Lock body scroll while open, close on Escape and scrim tap, keep aria-expanded in sync, and return focus to the button on close.",
      "zh": "构建一个汉堡菜单：一个 <button aria-expanded aria-controls>，画三条叠放的线，用来开合导航抽屉 —— 一个从左侧滑入、盖在遮罩（scrim）上的屏外 <nav> 面板（shadcn Sheet side=\"left\"，Material NavigationDrawer）。打开时锁定 body 滚动，Escape 和点遮罩关闭，aria-expanded 保持同步，关闭后焦点回到按钮。"
    },
    "debugPrompt": {
      "en": "Debug my hamburger menu (aria-expanded toggle + off-canvas <nav> drawer). Rule out: the drawer rendering under the scrim or page header (z-order); body still scrolling behind the open drawer; aria-expanded never flipping so screen readers see a dead button; focus staying lost in the drawer after close instead of returning to the button; the drawer animating from the wrong edge because translate-x sign flipped; the menu unreachable on desktop because the toggle is hidden above the breakpoint but the nav links never reappear. The symptom:",
      "zh": "调试我的汉堡菜单（aria-expanded 开关 + 屏外 <nav> 抽屉）。逐项排除：抽屉渲染在遮罩或页头下面（z 轴顺序）；抽屉打开时背后的 body 还在滚；aria-expanded 从不翻转，屏幕阅读器看到的是死按钮；关闭后焦点丢在抽屉里，没有回到按钮；translate-x 正负号反了，抽屉从错误的边滑出；桌面上菜单消失，因为开关在断点之上被隐藏，但导航链接没再出现。症状是："
    },
    "parts": [
      {
        "id": "hamburger-button",
        "name": {
          "en": "Hamburger button",
          "zh": "汉堡按钮（Hamburger button）"
        },
        "api": "aria-expanded",
        "description": {
          "en": "“The three stacked lines” are the hamburger button — a plain toggle whose aria-expanded tracks the drawer.",
          "zh": "“三条叠线”就是汉堡按钮 —— 一个纯粹的开关，aria-expanded 跟随抽屉状态。"
        },
        "prompt": {
          "en": "a hamburger button: three stacked 2px lines in a <button aria-expanded aria-controls> at the bar's left edge",
          "zh": "一个汉堡按钮：工具栏左边缘的 <button aria-expanded aria-controls> 里画三条 2px 叠线"
        }
      },
      {
        "id": "nav-drawer",
        "name": {
          "en": "Navigation drawer",
          "zh": "导航抽屉（Navigation drawer）"
        },
        "api": "Sheet side=\"left\"",
        "description": {
          "en": "“The side menu that slides over the page” is the navigation drawer — an off-canvas <nav> panel above a scrim.",
          "zh": "“滑过来盖住页面的侧边菜单”就是导航抽屉 —— 屏外的 <nav> 面板，浮在遮罩之上。"
        },
        "prompt": {
          "en": "a navigation drawer: an off-canvas <nav> panel sliding from the left over a scrim, body scroll locked while open",
          "zh": "一个导航抽屉：从左侧滑入、盖在遮罩上的屏外 <nav> 面板，打开期间锁定 body 滚动"
        }
      }
    ],
    "related": [
      "three-dots",
      "dialog-drawer-sheet",
      "scrim"
    ],
    "demo": "web/hamburger-menu"
  },
  {
    "slug": "lightbox",
    "platform": "web",
    "name": {
      "en": "Lightbox",
      "zh": "灯箱（Lightbox）"
    },
    "tagline": {
      "en": "The click-to-enlarge image overlay that dims the page behind it",
      "zh": "点图放大、背后页面变暗的图片浮层"
    },
    "description": {
      "en": "“Click the picture and it opens big with everything dark behind it” is a lightbox: a modal image viewer layered over the page. The dark layer behind it is the scrim, the enlarged image sits center stage, and arrows page through the gallery. Modern lightboxes are built on the native <dialog> element and its ::backdrop.",
      "zh": "“点一下图片就放大打开，背后全变暗”就是 lightbox：叠在页面上的模态图片查看器。背后的暗层叫遮罩（scrim），放大的图片居于舞台中央，箭头负责翻阅相册。现代 lightbox 建立在原生 <dialog> 元素和它的 ::backdrop 之上。"
    },
    "aka": {
      "en": [
        "image viewer overlay",
        "photo modal",
        "gallery overlay"
      ],
      "zh": [
        "图片查看浮层",
        "照片模态框",
        "相册浮层"
      ]
    },
    "fuzzy": {
      "en": [
        "when you click a photo and it opens big with a dark background",
        "the enlarged image popup in a gallery",
        "click the thumbnail and it zooms over the page",
        "the image viewer with arrows for the next photo",
        "the big photo over a black background",
        "a pattern for enlarging pictures"
      ],
      "zh": [
        "点一下照片就放大打开，背景变暗",
        "相册里那个放大图片的弹窗",
        "点缩略图，它就放大盖在页面上",
        "带箭头可以翻下一张的图片查看器",
        "黑背景上那张大照片",
        "一种放大图片的界面模式"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<dialog>",
        "note": {
          "en": "the modern base layer for a lightbox",
          "zh": "现代 lightbox 的地基"
        }
      },
      {
        "framework": "CSS",
        "symbol": "::backdrop"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"dialog\" aria-modal=\"true\""
      },
      {
        "framework": "JS libs",
        "symbol": "PhotoSwipe · GLightbox",
        "note": {
          "en": "ready-made lightbox libraries",
          "zh": "现成的 lightbox 库"
        }
      }
    ],
    "prompt": {
      "en": "Build a lightbox: clicking a gallery thumbnail opens the full image in a modal <dialog> (aria-modal) over a dark ::backdrop scrim, with prev/next arrows, a close button, Escape and backdrop-click to dismiss, and a reversible fade/scale transition.",
      "zh": "构建一个 lightbox：点击相册缩略图，在深色 ::backdrop 遮罩上以模态 <dialog>（aria-modal）打开大图，带上一张/下一张箭头、关闭按钮，Escape 和点击背景可关闭，并配可逆的淡入淡出/缩放过渡。"
    },
    "debugPrompt": {
      "en": "Debug my lightbox (<dialog>, ::backdrop, PhotoSwipe-style image overlay). Rule out: opened with show() instead of showModal() so there is no backdrop and the page scrolls behind; arrow keys paging the gallery and scrolling the page at the same time; the full-size image loading only after the transition so it pops from blurry to sharp; focus not returning to the clicked thumbnail on close. The symptom:",
      "zh": "调试我的 lightbox（<dialog>、::backdrop、PhotoSwipe 风格的图片浮层）。逐项排除：用了 show() 而不是 showModal()，结果没有遮罩、背后页面还能滚；方向键一边翻相册一边滚页面；大图在过渡结束后才加载完，从模糊突然变清晰；关闭后焦点没回到被点的缩略图。症状是："
    },
    "parts": [],
    "related": [
      "scrim",
      "dialog-drawer-sheet",
      "masonry"
    ],
    "demo": "web/lightbox"
  },
  {
    "slug": "marquee",
    "platform": "web",
    "name": {
      "en": "Marquee",
      "zh": "跑马灯（Marquee）"
    },
    "tagline": {
      "en": "Content that auto-scrolls sideways in an endless loop",
      "zh": "横向自动滚动、无限循环的内容"
    },
    "description": {
      "en": "“The logos that slide across by themselves” is a marquee — content auto-scrolling in an endless horizontal loop, named after the deprecated <marquee> tag. Today it is a CSS transform loop over duplicated content, dissolved at both ends by an edge fade. Windows separately calls the indeterminate progress bar style “marquee”, which is a different thing.",
      "zh": "“那些自己横着滚的 logo”就是跑马灯 —— 内容在水平方向上无限循环自动滚动，名字来自废弃的 <marquee> 标签。今天它用 CSS transform 在复制内容上做循环，两端用渐隐融掉。另外，Windows 把不确定进度条样式也叫 “marquee”，那是另一回事。"
    },
    "aka": {
      "en": [
        "ticker",
        "logo carousel",
        "auto-scrolling strip"
      ],
      "zh": [
        "滚动字幕条",
        "logo 轮播带",
        "自动滚动条带"
      ]
    },
    "fuzzy": {
      "en": [
        "the logos that scroll sideways by themselves",
        "the news ticker text",
        "the endless scrolling logo strip",
        "text that moves across the screen on its own",
        "the auto sliding brand logos"
      ],
      "zh": [
        "自己往一边滚的那些 logo",
        "新闻滚动字幕",
        "没完没了滚动的 logo 条",
        "自己横着走过屏幕的文字",
        "自动滑动的品牌 logo"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "animation + @keyframes translateX",
        "note": {
          "en": "the modern way: a transform loop over duplicated content",
          "zh": "现代做法：在复制一份的内容上做 transform 循环"
        }
      },
      {
        "framework": "HTML",
        "symbol": "<marquee>",
        "note": {
          "en": "long deprecated — never ship it, but it named the pattern",
          "zh": "早已废弃 —— 千万别用，但这个模式因它得名"
        }
      },
      {
        "framework": "React",
        "symbol": "react-fast-marquee"
      },
      {
        "framework": "CSS",
        "symbol": "animation-play-state: paused",
        "note": {
          "en": "hover-pause",
          "zh": "悬停暂停"
        }
      }
    ],
    "prompt": {
      "en": "Build a marquee: an auto-scrolling horizontal strip using a CSS @keyframes translateX(-50%) loop over exactly-duplicated content (never the deprecated <marquee> tag), with edge fade masks, pause on hover via animation-play-state, and a prefers-reduced-motion fallback that stops the motion.",
      "zh": "构建一个跑马灯：一条横向自动滚动的条带，用 CSS @keyframes translateX(-50%) 循环，内容恰好复制一份（绝不用废弃的 <marquee> 标签），两端加渐隐遮罩，hover 时用 animation-play-state 暂停，并提供 prefers-reduced-motion 下降级的静止版本。"
    },
    "debugPrompt": {
      "en": "Debug my marquee (CSS translateX keyframe loop, react-fast-marquee). Rule out: the loop jumping at the seam because the content is not duplicated exactly once and translated by exactly -50%; animating left/width on the main thread instead of transform; hover-pause missing (animation-play-state); motion still running under prefers-reduced-motion; the deprecated <marquee> tag pasted in from an old snippet. The symptom:",
      "zh": "调试我的跑马灯（CSS translateX keyframe 循环、react-fast-marquee）。逐项排除：接缝处跳动，因为内容没有恰好复制一份、位移也不是恰好 -50%；在主线程上动画 left/width 而不是 transform；缺了悬停暂停（animation-play-state）；prefers-reduced-motion 下动画还在跑；从老代码片段里粘来了废弃的 <marquee> 标签。症状是："
    },
    "parts": [
      {
        "id": "edge-fade",
        "name": {
          "en": "Edge fade",
          "zh": "边缘渐隐（Edge fade）"
        },
        "api": "mask-image: linear-gradient(…)",
        "description": {
          "en": "“The logos dissolving at both ends of the strip” is the edge fade — a mask, not a painted gradient.",
          "zh": "“logo 在条带两端慢慢化掉”就是边缘渐隐 —— 用的是 mask，不是画上去的渐变。"
        },
        "prompt": {
          "en": "the marquee's edge fade: a mask-image linear-gradient on the strip container so items dissolve at both ends instead of clipping hard",
          "zh": "跑马灯的边缘渐隐：在条带容器上加 mask-image linear-gradient，让内容在两端溶掉而不是生硬裁断"
        }
      }
    ],
    "related": [
      "truncation",
      "progress-indicators",
      "easing",
      "text-scramble"
    ],
    "demo": "web/marquee"
  },
  {
    "slug": "pointer",
    "platform": "macos",
    "name": {
      "en": "Pointer (Cursor)",
      "zh": "指针（光标）"
    },
    "tagline": {
      "en": "Every shape the mouse pointer takes — and the real name of each one",
      "zh": "鼠标指针的每一种形态 —— 以及它们各自的本名"
    },
    "description": {
      "en": "Every shape the Mac pointer takes has a real name. “The text cursor with little bits at the top and bottom” is the I-beam; the hand over a link is the pointing hand; the no-entry sign while dragging is operation not allowed. AppKit sets them through NSCursor, and views claim screen regions with cursor rects — when a pointer gets stuck in the wrong shape, a stale cursor rect is usually the culprit. (The rainbow “beach ball” is not an NSCursor: the system shows it when an app stops responding.)",
      "zh": "Mac 指针的每一种形态都有本名。“上下带小横杠的文本光标”是 I-beam；链接上的小手是 pointing hand；拖拽时的禁止标志是 operation not allowed。AppKit 通过 NSCursor 设置它们，视图用 cursor rect 认领屏幕区域 —— 指针卡在错误形态时，通常就是过期的 cursor rect 惹的祸。（彩虹“海滩球”不是 NSCursor：那是 App 失去响应时系统显示的。）"
    },
    "aka": {
      "en": [
        "cursor",
        "mouse pointer",
        "mouse cursor"
      ],
      "zh": [
        "光标",
        "鼠标指针",
        "鼠标光标"
      ]
    },
    "fuzzy": {
      "en": [
        "the text cursor with little bits at the top and bottom",
        "mouse stuck in text editing mode",
        "the arrow turns into a hand over links",
        "double sided arrow when resizing a window",
        "cursor with a plus badge when dragging to copy",
        "the mouse becomes a no entry sign",
        "magnifying glass cursor with a plus in it"
      ],
      "zh": [
        "上下带小横杠的那个文本光标",
        "鼠标卡在文本编辑模式出不来",
        "箭头移到链接上就变成小手",
        "调窗口大小时的双向箭头",
        "拖拽复制时光标上带个加号角标",
        "鼠标变成一个禁止驶入的标志",
        "里面带个加号的放大镜光标"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSCursor"
      },
      {
        "framework": "AppKit",
        "symbol": "NSCursor.iBeam",
        "note": {
          "en": "the text-editing pointer",
          "zh": "文本编辑用的指针"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSView.addCursorRect(_:cursor:)",
        "note": {
          "en": "claim a region; called from resetCursorRects()",
          "zh": "认领一片区域；在 resetCursorRects() 里调用"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.pointerStyle(_:)",
        "note": {
          "en": "macOS 15+",
          "zh": "macOS 15+"
        }
      },
      {
        "framework": "CSS",
        "symbol": "cursor: text",
        "note": {
          "en": "the same shapes on the web: pointer, grab, not-allowed…",
          "zh": "Web 上的同款形状：pointer、grab、not-allowed……"
        }
      }
    ],
    "prompt": {
      "en": "Set the macOS pointer with NSCursor — e.g. NSCursor.iBeam.set() — or claim a region with NSView.addCursorRect(_:cursor:) inside resetCursorRects() (SwiftUI: View.pointerStyle(_:), macOS 15+). If the pointer stays stuck as the I-beam after the mouse leaves a text view, the stale cursor rect is the bug: call window.invalidateCursorRects(for: view) so the rects rebuild.",
      "zh": "用 NSCursor 设置 macOS 指针 —— 例如 NSCursor.iBeam.set() —— 或在 resetCursorRects() 里用 NSView.addCursorRect(_:cursor:) 认领区域（SwiftUI：View.pointerStyle(_:)，macOS 15+）。如果鼠标离开文本视图后指针还卡在 I-beam，那就是过期的 cursor rect 在作怪：调用 window.invalidateCursorRects(for: view) 让 rect 重建。"
    },
    "debugPrompt": {
      "en": "Debug my macOS pointer/cursor (NSCursor, NSTrackingArea). Rule out: the cursor flickering back to arrow because cursor rects reset on every layout — drive it from cursorUpdate with a tracking area instead; push/pop or hide/unhide calls unbalanced; the spinning beach ball meaning the main thread is blocked, not a cursor bug; a hidden cursor never restored after a drag. The symptom:",
      "zh": "调试我的 macOS 指针/光标（NSCursor、NSTrackingArea）。逐项排除：cursor rect 每次布局都重置，指针闪回箭头 —— 改用 tracking area 在 cursorUpdate 里驱动；push/pop 或 hide/unhide 调用不配对；转圈的彩虹海滩球说明主线程卡死，不是指针的 bug；拖拽结束后隐藏的指针没恢复。症状是："
    },
    "parts": [],
    "related": [
      "search-field",
      "context-menu",
      "split-view",
      "focus-ring"
    ],
    "demo": "macos/pointer"
  },
  {
    "slug": "alert",
    "platform": "macos",
    "name": {
      "en": "Alert",
      "zh": "提醒（Alert）"
    },
    "tagline": {
      "en": "The small centered window with a badged icon, a bold line, and Cancel/OK buttons",
      "zh": "居中的小窗口：带角标的图标、一行粗体字，以及“取消/好”按钮"
    },
    "description": {
      "en": "“The little warning window with the app icon and two buttons” is an alert — NSAlert. It shows your app icon (badged with a yellow caution triangle for warnings), a bold message line, smaller informative text, and buttons where the first added is the blue default. Run it app-modal with runModal(), or attach it to a single window with beginSheetModal(for:) — then it slides out of that window's title bar like a sheet. The “Don't ask me again” checkbox is its built-in suppression button.",
      "zh": "“带 App 图标和两个按钮的小警告窗”就是提醒 —— NSAlert。它显示你的 App 图标（警告时角标叠一个黄色警示三角）、一行粗体消息、较小的说明文字，以及按钮 —— 第一个添加的是蓝色默认按钮。用 runModal() 让它 App 级模态运行，或用 beginSheetModal(for:) 把它附着到单个窗口 —— 那样它会像 sheet 一样从那个窗口的标题栏滑出来。“不再询问”复选框就是它内建的 suppression button。"
    },
    "aka": {
      "en": [
        "alert dialog",
        "warning dialog",
        "confirmation dialog",
        "message box",
        "system prompt"
      ],
      "zh": [
        "提醒对话框",
        "警告对话框",
        "确认对话框",
        "消息框",
        "系统提示"
      ]
    },
    "fuzzy": {
      "en": [
        "the popup with the app icon and a yellow warning triangle",
        "small window in the middle asking are you sure with two buttons",
        "the box with a don't ask me again checkbox",
        "warning message with a bold line and smaller gray text under it",
        "the blue button that presses itself when you hit enter",
        "confirmation popup before deleting something"
      ],
      "zh": [
        "带 App 图标和黄色警告三角的弹窗",
        "屏幕中间问“你确定吗”的小窗口，两个按钮",
        "带“别再问我”复选框的弹窗",
        "一行粗体大字、下面一行灰色小字的警告信息",
        "按回车就自动按下的那个蓝色按钮",
        "删东西之前弹出来的确认窗"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSAlert"
      },
      {
        "framework": "SwiftUI",
        "symbol": ".alert(_:isPresented:actions:message:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.messageText"
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.informativeText"
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.showsSuppressionButton"
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.addButton(withTitle:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.alertStyle",
        "note": {
          "en": ".warning / .informational / .critical",
          "zh": ".warning / .informational / .critical"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.beginSheetModal(for:completionHandler:)",
        "note": {
          "en": "attach to one window instead",
          "zh": "改为附着到单个窗口"
        }
      }
    ],
    "prompt": {
      "en": "Show a native macOS alert with NSAlert (SwiftUI: .alert): messageText is the bold summary line, informativeText the smaller explanation. Add buttons with addButton(withTitle:) — the first one becomes the blue default button and answers the Return key; a button titled Cancel answers Escape. Set showsSuppressionButton = true for the “Don't ask me again” checkbox and read suppressionButton.state afterwards.",
      "zh": "用 NSAlert 显示一个原生 macOS 提醒（SwiftUI：.alert）：messageText 是那行粗体摘要，informativeText 是较小的解释文字。用 addButton(withTitle:) 添加按钮 —— 第一个会成为蓝色默认按钮，响应回车键；标题为 Cancel 的按钮响应 Escape。设置 showsSuppressionButton = true 显示“不再询问”复选框，结束后读取 suppressionButton.state。"
    },
    "debugPrompt": {
      "en": "Debug my macOS alert (NSAlert, SwiftUI View.alert). Rule out: presenting off the main thread; runModal blocking the whole app when beginSheetModal(for:) attached to one window was intended; the return-key default being the FIRST button added, not the one you expect; the suppression checkbox state never persisted to defaults. The symptom:",
      "zh": "调试我的 macOS 提醒（NSAlert、SwiftUI View.alert）。逐项排除：没在主线程上弹出；本想用 beginSheetModal(for:) 附着到单个窗口，runModal 却把整个 App 卡住；回车默认按钮是添加的第一个按钮，而不是你以为的那个；抑制复选框的状态从没写入 defaults 持久化。症状是："
    },
    "parts": [
      {
        "id": "badged-app-icon",
        "name": {
          "en": "Badged app icon",
          "zh": "带角标的 App 图标（Badged app icon）"
        },
        "api": "NSAlert.icon",
        "description": {
          "en": "“The yellow triangle over the app icon” is the alert icon — your app's icon, badged with the caution symbol when alertStyle is .warning or .critical.",
          "zh": "“App 图标上的黄色三角”就是提醒图标 —— 你的 App 图标，当 alertStyle 是 .warning 或 .critical 时叠上警示角标。"
        },
        "prompt": {
          "en": "the NSAlert icon — the app icon badged with the yellow caution triangle (NSAlert.icon, alertStyle .warning)",
          "zh": "NSAlert 的图标 —— 带黄色警示三角角标的 App 图标（NSAlert.icon，alertStyle .warning）"
        }
      },
      {
        "id": "message-text",
        "name": {
          "en": "Message text",
          "zh": "消息文本（Message text）"
        },
        "api": "NSAlert.messageText",
        "description": {
          "en": "“The bold line” is messageText — the one-sentence summary, phrased as a question when the alert asks for a decision.",
          "zh": "“那行粗体字”就是 messageText —— 一句话摘要；当提醒要求做决定时，措辞写成一个问题。"
        },
        "prompt": {
          "en": "the bold headline of an NSAlert (NSAlert.messageText)",
          "zh": "NSAlert 的粗体标题行（NSAlert.messageText）"
        }
      },
      {
        "id": "informative-text",
        "name": {
          "en": "Informative text",
          "zh": "说明文本（Informative text）"
        },
        "api": "NSAlert.informativeText",
        "description": {
          "en": "“The smaller gray text under the bold line” is informativeText — the consequences, spelled out in a sentence.",
          "zh": "“粗体行下面的灰色小字”就是 informativeText —— 用一句话把后果讲清楚。"
        },
        "prompt": {
          "en": "the smaller explanation line of an NSAlert (NSAlert.informativeText)",
          "zh": "NSAlert 的较小解释文字（NSAlert.informativeText）"
        }
      },
      {
        "id": "suppression-checkbox",
        "name": {
          "en": "Suppression checkbox",
          "zh": "“不再询问”复选框（Suppression checkbox）"
        },
        "api": "NSAlert.showsSuppressionButton",
        "description": {
          "en": "“The don't ask me again checkbox” is the suppression button — enable it with showsSuppressionButton and read suppressionButton.state after the alert returns.",
          "zh": "“别再问我”那个复选框就是 suppression button —— 用 showsSuppressionButton 开启，提醒返回后读取 suppressionButton.state。"
        },
        "prompt": {
          "en": "the “Don't ask me again” checkbox of an NSAlert (showsSuppressionButton = true, read suppressionButton.state)",
          "zh": "NSAlert 的“不再询问”复选框（showsSuppressionButton = true，读取 suppressionButton.state）"
        }
      },
      {
        "id": "default-button",
        "name": {
          "en": "Default button",
          "zh": "默认按钮（Default button）"
        },
        "api": "NSAlert.addButton(withTitle:)",
        "description": {
          "en": "“The blue button” is the default button — the first button added to the alert; it gets the accent color and the Return key.",
          "zh": "“那个蓝色按钮”就是默认按钮 —— 添加到提醒上的第一个按钮；它获得强调色，也响应回车键。"
        },
        "prompt": {
          "en": "the blue default button of an NSAlert — the first addButton(withTitle:), key equivalent Return",
          "zh": "NSAlert 的蓝色默认按钮 —— 第一个 addButton(withTitle:)，键等价是回车"
        }
      }
    ],
    "related": [
      "sheet",
      "save-panel",
      "panel",
      "dialog-drawer-sheet"
    ],
    "demo": "macos/alert"
  },
  {
    "slug": "slider",
    "platform": "macos",
    "name": {
      "en": "Slider",
      "zh": "滑块（Slider）"
    },
    "tagline": {
      "en": "The round knob you drag along a track to pick a value from a range",
      "zh": "沿轨道拖动的圆钮，用来在一个范围里取值"
    },
    "description": {
      "en": "“The dot you drag along a line” is a slider — NSSlider. The circle is the knob, the groove is the track, and the leading portion up to the knob is tinted with the accent color. A continuous slider picks any value in the range; give it tick marks (the little lines below) and allowsTickMarkValuesOnly, and the knob snaps between fixed stops — the Key Repeat slider in System Settings is the classic tick-marked one.",
      "zh": "“沿着一条线拖的那个圆点”就是滑块 —— NSSlider。圆圈是滑钮（knob），凹槽是轨道（track），滑钮之前的前段染成强调色。连续滑块可以在范围内取任意值；加上刻度线（下面那些小线）和 allowsTickMarkValuesOnly，滑钮就只在固定挡位之间吸附 —— 系统设置里的“按键重复”滑块就是经典的带刻度款。"
    },
    "aka": {
      "en": [
        "slider control",
        "seek bar",
        "track bar",
        "range control"
      ],
      "zh": [
        "滑块控件",
        "进度拖条",
        "轨道条",
        "范围控件"
      ]
    },
    "fuzzy": {
      "en": [
        "the dot you drag left and right to change a value",
        "volume style control with a round knob on a line",
        "the bar with a circle you slide",
        "the little lines under the slider it snaps to",
        "the blue filled part of the slider line",
        "drag thing for picking a number between min and max"
      ],
      "zh": [
        "左右拖着改数值的那个圆点",
        "音量那种一条线上带圆钮的控件",
        "上面有个圆圈可以滑来滑去的条",
        "滑块下面那些会吸附的小刻度线",
        "滑块线上蓝色填满的那段",
        "在最小最大值之间拖来选数的那个东西"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSlider"
      },
      {
        "framework": "SwiftUI",
        "symbol": "Slider(value:in:step:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.numberOfTickMarks"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.allowsTickMarkValuesOnly",
        "note": {
          "en": "snap to ticks",
          "zh": "吸附到刻度"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.tickMarkPosition",
        "note": {
          "en": ".below / .above",
          "zh": ".below / .above"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.isContinuous",
        "note": {
          "en": "act while dragging, not just on release",
          "zh": "拖动过程中就触发，而不是松手才触发"
        }
      }
    ],
    "prompt": {
      "en": "Use a native macOS slider — NSSlider (SwiftUI: Slider(value:in:step:)): horizontal linear style, round knob, the leading side of the track tinted with the accent color. For discrete values add tick marks below with numberOfTickMarks and tickMarkPosition = .below, and snap the knob to them with allowsTickMarkValuesOnly = true. Set isContinuous = true so the value updates while dragging.",
      "zh": "使用原生 macOS 滑块 —— NSSlider（SwiftUI：Slider(value:in:step:)）：水平线性样式、圆形滑钮，轨道前段染成强调色。离散取值时，在下方加刻度线：numberOfTickMarks 配 tickMarkPosition = .below，并用 allowsTickMarkValuesOnly = true 让滑钮吸附到刻度。设 isContinuous = true，让值在拖动过程中持续更新。"
    },
    "debugPrompt": {
      "en": "Debug my macOS slider (NSSlider, SwiftUI Slider). Rule out: actions flooding on every pixel because isContinuous is on (or missing when live updates were wanted); allowsTickMarkValuesOnly snapping values you did not expect; a value binding writing back during drag and fighting the gesture; vertical orientation inferred from frame shape in AppKit, not set explicitly. The symptom:",
      "zh": "调试我的 macOS 滑块（NSSlider、SwiftUI Slider）。逐项排除：isContinuous 开着，action 每像素狂发（或想要实时更新却没开）；allowsTickMarkValuesOnly 把值吸附到意料之外的刻度；值绑定在拖拽中回写，和手势打架；AppKit 里方向是按 frame 形状推断的，没有显式设置。症状是："
    },
    "parts": [
      {
        "id": "knob",
        "name": {
          "en": "Knob (thumb)",
          "zh": "滑钮（Knob/thumb）"
        },
        "api": "NSSlider.knobThickness",
        "description": {
          "en": "“The round dot you drag” is the knob — AppKit calls it the knob; the web calls the same thing a thumb.",
          "zh": "“你拖的那个圆点”就是滑钮 —— AppKit 叫它 knob；Web 上同一个东西叫 thumb。"
        },
        "prompt": {
          "en": "the round draggable knob of an NSSlider (the web calls it the thumb)",
          "zh": "NSSlider 上可拖动的圆形滑钮（Web 称之为 thumb）"
        }
      },
      {
        "id": "filled-track",
        "name": {
          "en": "Filled track",
          "zh": "已填充轨道（Filled track）"
        },
        "api": "Slider + .tint",
        "description": {
          "en": "“The blue part of the line before the knob” is the filled side of the track — it shows how far along the range the value sits.",
          "zh": "“滑钮之前线上蓝色的那段”就是轨道的已填充侧 —— 它显示值在范围内走了多远。"
        },
        "prompt": {
          "en": "the tinted leading portion of a slider track, from the minimum up to the knob (SwiftUI: Slider with .tint)",
          "zh": "滑块轨道从最小值到滑钮的染色前段（SwiftUI：Slider 配 .tint）"
        }
      },
      {
        "id": "track",
        "name": {
          "en": "Track",
          "zh": "轨道（Track）"
        },
        "api": "NSSlider.SliderType.linear",
        "description": {
          "en": "“The groove the dot slides along” is the track — the full range, end to end.",
          "zh": "“圆点滑行的那条凹槽”就是轨道 —— 从头到尾的整个范围。"
        },
        "prompt": {
          "en": "the full-width groove of a linear NSSlider that the knob travels along",
          "zh": "线性 NSSlider 上滑钮通行的整条全宽凹槽"
        }
      },
      {
        "id": "tick-marks",
        "name": {
          "en": "Tick marks",
          "zh": "刻度线（Tick marks）"
        },
        "api": "NSSlider.numberOfTickMarks",
        "description": {
          "en": "“The little lines under the slider” are tick marks — with allowsTickMarkValuesOnly the knob only lands on them.",
          "zh": "“滑块下面的小线”就是刻度线 —— 配上 allowsTickMarkValuesOnly，滑钮只落在刻度上。"
        },
        "prompt": {
          "en": "tick marks below an NSSlider (numberOfTickMarks, tickMarkPosition = .below), snapping via allowsTickMarkValuesOnly",
          "zh": "NSSlider 下方的刻度线（numberOfTickMarks，tickMarkPosition = .below），用 allowsTickMarkValuesOnly 吸附"
        }
      }
    ],
    "related": [
      "stepper",
      "level-indicator",
      "segmented-control"
    ],
    "demo": "macos/slider"
  },
  {
    "slug": "color-well",
    "platform": "macos",
    "name": {
      "en": "Color Well",
      "zh": "颜色井（Color Well）"
    },
    "tagline": {
      "en": "The little swatch button that shows the current color and opens the picker",
      "zh": "显示当前颜色的小色块按钮，点开就是取色器"
    },
    "description": {
      "en": "“The little square showing the current color” is a color well — NSColorWell. Since macOS 13 it has three styles: minimal (just the swatch), default, and expanded — the modern one with a caret button attached. Clicking the expanded well opens a quick popover with a grid of swatches and an eyedropper; the caret opens the full color panel. The eyedropper that samples any pixel on screen is its own one-call API: NSColorSampler.",
      "zh": "“显示当前颜色的小方块”就是颜色井 —— NSColorWell。自 macOS 13 起有三种样式：minimal（只有色块）、default 和 expanded —— 现代款，旁边带一个尖角按钮。点击展开式颜色井会打开一个快速弹层，里面有一板色样和一根吸管；尖角按钮打开完整颜色面板。能吸取屏幕任意像素的吸管是独立的一次调用 API：NSColorSampler。"
    },
    "aka": {
      "en": [
        "color picker button",
        "color swatch control",
        "color chooser",
        "color selector"
      ],
      "zh": [
        "取色器按钮",
        "色块控件",
        "选色器",
        "颜色选择器"
      ]
    },
    "fuzzy": {
      "en": [
        "the small rectangle showing the current color",
        "color swatch you click to open the color picker",
        "the eyedropper for picking a color from the screen",
        "little colored square with an arrow next to it",
        "the grid of color squares that pops up",
        "control for choosing a color in settings"
      ],
      "zh": [
        "显示当前颜色的小方块",
        "点一下就打开取色器的色块",
        "从屏幕上吸取颜色的吸管",
        "旁边带个小箭头的彩色小方块",
        "弹出来的那板彩色小方格",
        "设置里选颜色用的控件"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSColorWell"
      },
      {
        "framework": "SwiftUI",
        "symbol": "ColorPicker"
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorWell.colorWellStyle",
        "note": {
          "en": ".minimal / .default / .expanded (macOS 13+)",
          "zh": ".minimal / .default / .expanded（macOS 13+）"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorWell.color"
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorSampler",
        "note": {
          "en": "the standalone eyedropper",
          "zh": "独立的吸管工具"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorWell.supportsAlpha"
      }
    ],
    "prompt": {
      "en": "Add a native macOS color well — NSColorWell (SwiftUI: ColorPicker). Use colorWellStyle = .expanded for the modern two-part control: clicking the swatch opens the quick color-grid popover with an eyedropper, and the caret button opens the full NSColorPanel. For a standalone screen-color eyedropper use NSColorSampler().show { color in … }.",
      "zh": "添加原生 macOS 颜色井 —— NSColorWell（SwiftUI：ColorPicker）。现代的两段式控件用 colorWellStyle = .expanded：点击色块打开带吸管的快速色板弹层，点击尖角按钮打开完整的 NSColorPanel。要独立的屏幕取色吸管，用 NSColorSampler().show { color in … }。"
    },
    "debugPrompt": {
      "en": "Debug my macOS color well (NSColorWell, SwiftUI ColorPicker). Rule out: the shared NSColorPanel serving every well in the app so two wells fight over it; continuous updates flooding your target action instead of committing on close; the eyedropper failing without Screen Recording permission; colors shifting because sRGB and Display P3 color spaces are being mixed. The symptom:",
      "zh": "调试我的 macOS 颜色井（NSColorWell、SwiftUI ColorPicker）。逐项排除：共享的 NSColorPanel 服务全 App 所有颜色井，两个井互相抢；连续更新狂发 target action，而不是关闭时才提交；没有“屏幕录制”权限，吸管失效；sRGB 和 Display P3 色彩空间混用导致颜色偏移。症状是："
    },
    "parts": [
      {
        "id": "swatch",
        "name": {
          "en": "Color swatch",
          "zh": "色样（Color swatch）"
        },
        "api": "NSColorWell.color",
        "description": {
          "en": "“The colored area itself” is the swatch — it always displays the well's current color and is the click target for the quick picker.",
          "zh": "“那块有颜色的区域本身”就是色样 —— 它始终显示颜色井的当前颜色，也是打开快速取色器的点击目标。"
        },
        "prompt": {
          "en": "the swatch area of an NSColorWell showing its current color (NSColorWell.color)",
          "zh": "NSColorWell 上显示当前颜色的色样区域（NSColorWell.color）"
        }
      },
      {
        "id": "panel-button",
        "name": {
          "en": "Color-panel button",
          "zh": "颜色面板按钮（Color-panel button）"
        },
        "api": "NSColorWell.Style.expanded",
        "description": {
          "en": "“The little arrow segment next to the swatch” is the dedicated button the expanded style adds — it opens the full color panel.",
          "zh": "“色样旁边的小箭头段”就是 expanded 样式加上的专用按钮 —— 它打开完整颜色面板。"
        },
        "prompt": {
          "en": "the caret button attached to an expanded-style NSColorWell (colorWellStyle = .expanded) that opens NSColorPanel",
          "zh": "附着在 expanded 样式 NSColorWell 上的尖角按钮（colorWellStyle = .expanded），用于打开 NSColorPanel"
        }
      },
      {
        "id": "quick-color-popover",
        "name": {
          "en": "Quick color popover",
          "zh": "快速取色弹层（Quick color popover）"
        },
        "api": "NSColorWell.colorWellStyle",
        "description": {
          "en": "“The grid of color squares that pops up” is the expanded style's quick picker — swatches for fast choices, without the full panel.",
          "zh": "“弹出来的那板彩色方格”就是 expanded 样式的快速取色器 —— 色样便于快速选择，不用开完整面板。"
        },
        "prompt": {
          "en": "the quick swatch-grid popover an expanded NSColorWell shows when the swatch is clicked",
          "zh": "expanded NSColorWell 在色块被点击时显示的快速色板弹层"
        }
      },
      {
        "id": "eyedropper",
        "name": {
          "en": "Eyedropper (color sampler)",
          "zh": "吸管（Eyedropper/color sampler）"
        },
        "api": "NSColorSampler",
        "description": {
          "en": "“The eyedropper that picks a color from anywhere on screen” is the system color sampler — one call: NSColorSampler().show { color in … }.",
          "zh": "“能从屏幕任何地方取色的吸管”就是系统颜色采样器 —— 一次调用：NSColorSampler().show { color in … }。"
        },
        "prompt": {
          "en": "the system eyedropper for sampling a color from the screen (NSColorSampler().show { color in … })",
          "zh": "从屏幕取色的系统吸管（NSColorSampler().show { color in … }）"
        }
      }
    ],
    "related": [
      "popover",
      "popup-pulldown-combo",
      "panel"
    ],
    "demo": "macos/color-well"
  },
  {
    "slug": "form-field",
    "platform": "web",
    "name": {
      "en": "Form Field",
      "zh": "表单字段（Form Field）"
    },
    "tagline": {
      "en": "Every part of a labeled input — label, placeholder, helper text, and the red error line",
      "zh": "带标签输入框的每个部分 —— 标签、占位文本、辅助文本和那行红色错误信息"
    },
    "description": {
      "en": "“The gray text inside the box that disappears when you type” is the placeholder — one of five parts of a form field that each have a real name. The word above the box is the label (<label for>), the little red star is the required indicator, the small gray line underneath is helper text, and the red line that replaces it is the validation message. Wiring them up (for/id, aria-describedby, aria-invalid) is what makes the field usable by screen readers, not just sighted users.",
      "zh": "“框里一打字就消失的灰字”是占位文本（placeholder）—— 表单字段的五个部分各有本名，这只是其一。框上面的词是标签（<label for>），小红星是必填标记，下面的灰色小字是辅助文本，取代它的红字是校验信息。把它们接好线（for/id、aria-describedby、aria-invalid），字段才不只服务明眼人，屏幕阅读器也能用。"
    },
    "aka": {
      "en": [
        "text field",
        "input field",
        "form input",
        "form control"
      ],
      "zh": [
        "文本框",
        "输入框",
        "表单输入项",
        "表单控件"
      ]
    },
    "fuzzy": {
      "en": [
        "the gray text inside the box that disappears when you type",
        "the little red star next to the label",
        "the small gray text under the input",
        "the red error message under the field",
        "the word above the text box",
        "hint text in the empty input"
      ],
      "zh": [
        "框里那个一打字就消失的灰字",
        "标签旁边的小红星",
        "输入框下面的灰色小字",
        "字段下面那行红色错误提示",
        "文本框上面的那个词",
        "空输入框里的提示文字"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<label for>"
      },
      {
        "framework": "CSS",
        "symbol": "::placeholder"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-describedby",
        "note": {
          "en": "links helper/error text to the input",
          "zh": "把辅助/错误文本关联到输入框"
        }
      },
      {
        "framework": "ARIA",
        "symbol": "aria-invalid"
      },
      {
        "framework": "CSS",
        "symbol": ":user-invalid",
        "note": {
          "en": "invalid only after interaction",
          "zh": "只在交互之后才判定无效"
        }
      },
      {
        "framework": "HTML",
        "symbol": "required"
      }
    ],
    "prompt": {
      "en": "Build the form field with full anatomy: a real <label for> above the input (clicking it focuses the field), placeholder text as a hint only — never as the label, helper text below linked via aria-describedby, and required marked with the required attribute plus a visual asterisk. On invalid input set aria-invalid=\"true\", style the red state with :user-invalid, and point aria-describedby at the error message.",
      "zh": "构建完整结构的表单字段：输入框上方放真正的 <label for>（点击它聚焦字段），placeholder 只作提示 —— 绝不当标签用，下方辅助文本用 aria-describedby 关联，必填用 required 属性加视觉星号标出。输入无效时设 aria-invalid=\"true\"，用 :user-invalid 画红色状态，并把 aria-describedby 指向错误信息。"
    },
    "debugPrompt": {
      "en": "Debug my form field (label for/id, aria-describedby, placeholder). Rule out: the placeholder doing the label's job and vanishing on first keystroke; the label not associated so clicking it does not focus the input; error text not linked via aria-describedby so screen readers never hear it; autofill's yellow/blue fill overriding your styles (-webkit-autofill). The symptom:",
      "zh": "调试我的表单字段（label for/id、aria-describedby、placeholder）。逐项排除：placeholder 干了标签的活，敲第一个键就消失；label 没关联，点击不能聚焦输入框；错误文本没通过 aria-describedby 关联，屏幕阅读器永远读不到；自动填充的黄/蓝底色覆盖你的样式（-webkit-autofill）。症状是："
    },
    "parts": [
      {
        "id": "field-label",
        "name": {
          "en": "Label",
          "zh": "标签（Label）"
        },
        "api": "<label for=\"…\">",
        "description": {
          "en": "“The word above the box” is the label — a real <label> tied to the input by for/id, so clicking it focuses the field.",
          "zh": "“框上面的那个词”就是标签 —— 一个真正的 <label>，通过 for/id 绑到输入框，点击它会聚焦字段。"
        },
        "prompt": {
          "en": "a real <label for> element above the input, tied to it by for/id",
          "zh": "输入框上方真正的 <label for> 元素，通过 for/id 绑定"
        }
      },
      {
        "id": "required-indicator",
        "name": {
          "en": "Required indicator",
          "zh": "必填标记（Required indicator）"
        },
        "api": "required",
        "description": {
          "en": "“The little red star” marks a required field — the asterisk is decoration; the input itself carries the required attribute.",
          "zh": "“小红星”标记必填字段 —— 星号只是装饰；真正起作用的是输入框上的 required 属性。"
        },
        "prompt": {
          "en": "the required-field asterisk beside the label, backed by the required attribute on the input",
          "zh": "标签旁的必填星号，由输入框上的 required 属性支撑"
        }
      },
      {
        "id": "placeholder",
        "name": {
          "en": "Placeholder",
          "zh": "占位文本（Placeholder）"
        },
        "api": "::placeholder",
        "description": {
          "en": "“The gray text inside the box that disappears when you type” is the placeholder — an example or hint, never a substitute for the label.",
          "zh": "“框里一打字就消失的灰字”就是占位文本 —— 一个示例或提示，永远代替不了标签。"
        },
        "prompt": {
          "en": "the placeholder hint inside the input (placeholder attribute, styled via ::placeholder), used as a hint only",
          "zh": "输入框内的占位提示（placeholder 属性，用 ::placeholder 设置样式），仅作提示"
        }
      },
      {
        "id": "helper-text",
        "name": {
          "en": "Helper text",
          "zh": "辅助文本（Helper text）"
        },
        "api": "aria-describedby",
        "description": {
          "en": "“The small gray line under the field” is helper text — link it to the input with aria-describedby so screen readers announce it.",
          "zh": "“字段下面的灰色小字”就是辅助文本 —— 用 aria-describedby 关联到输入框，屏幕阅读器才会念出来。"
        },
        "prompt": {
          "en": "the helper/hint text below the input, linked with aria-describedby",
          "zh": "输入框下方的辅助/提示文本，用 aria-describedby 关联"
        }
      },
      {
        "id": "error-message",
        "name": {
          "en": "Error message",
          "zh": "错误信息（Error message）"
        },
        "api": "aria-invalid=\"true\"",
        "description": {
          "en": "“The red text under the box” is the validation message — pair the red border (aria-invalid, :user-invalid) with a message the field references.",
          "zh": "“框下面的红字”就是校验信息 —— 红色边框（aria-invalid、:user-invalid）要配一条字段能引用的信息。"
        },
        "prompt": {
          "en": "the inline validation error below the field: aria-invalid=\"true\" on the input, red border, and an error message linked via aria-describedby",
          "zh": "字段下方的内联校验错误：输入框设 aria-invalid=\"true\"、红色边框，错误信息用 aria-describedby 关联"
        }
      }
    ],
    "related": [
      "focus-ring-web",
      "combobox",
      "switch-checkbox-radio"
    ],
    "demo": "web/form-field"
  },
  {
    "slug": "truncation",
    "platform": "web",
    "name": {
      "en": "Truncation (Ellipsis & Line Clamp)",
      "zh": "文本截断（省略号与行数截断）"
    },
    "tagline": {
      "en": "Text cut short with … — at the end of the line, after N lines, or in the middle",
      "zh": "用 … 把文本截短 —— 在行尾、在 N 行之后，或者在中间"
    },
    "description": {
      "en": "“The text that gets cut off with three dots” is truncation, and the dots are an ellipsis (…, one character — not three periods). End-of-line truncation is text-overflow: ellipsis; cutting after N lines is a line clamp; dots in the middle of a long filename are middle truncation — native on macOS, JS on the web. Don't confuse it with the ⋯ overflow menu button: same dots, completely different job.",
      "zh": "“被三个点切断的文字”就是截断，那些点叫省略号（…，一个字符 —— 不是三个句号）。行尾截断用 text-overflow: ellipsis；N 行后切断叫行数截断（line clamp）；长文件名中间的点是中间截断 —— macOS 原生支持，Web 上要用 JS。别把它和 ⋯ 溢出菜单按钮搞混：同样的点，完全不同的活。"
    },
    "aka": {
      "en": [
        "ellipsis",
        "text overflow",
        "line clamp",
        "clamped text",
        "truncated text"
      ],
      "zh": [
        "省略号",
        "文本溢出",
        "行数截断",
        "多行截断的文本",
        "截断的文本"
      ]
    },
    "fuzzy": {
      "en": [
        "the text gets cut off with three dots",
        "show only two lines then dot dot dot",
        "long file name with dots in the middle",
        "cut the title after one line instead of wrapping",
        "text fades out at the edge instead of dots",
        "title too long for the box"
      ],
      "zh": [
        "文字被切掉，后面跟三个点",
        "只显示两行，然后点点点",
        "长文件名中间几个点",
        "标题一行就切断，别换行",
        "文字在边缘淡出，不用点",
        "标题太长，框里放不下"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "text-overflow: ellipsis"
      },
      {
        "framework": "CSS",
        "symbol": "-webkit-line-clamp"
      },
      {
        "framework": "CSS",
        "symbol": "white-space: nowrap",
        "note": {
          "en": "required for single-line ellipsis",
          "zh": "单行省略号必需"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSLineBreakMode.byTruncatingMiddle",
        "note": {
          "en": "middle truncation is native on macOS",
          "zh": "中间截断在 macOS 上是原生能力"
        }
      },
      {
        "framework": "CSS",
        "symbol": "mask-image",
        "note": {
          "en": "the fade-out alternative",
          "zh": "淡出效果的替代方案"
        }
      }
    ],
    "prompt": {
      "en": "Truncate the text with CSS. Single line: overflow: hidden; white-space: nowrap; text-overflow: ellipsis. Multi-line: display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden (unprefixed line-clamp isn't safe in all browsers yet). Middle truncation that preserves the file extension needs JS on the web — on macOS it's lineBreakMode = .byTruncatingMiddle. For a soft fade-out instead of dots, use mask-image: linear-gradient(to right, black 70%, transparent).",
      "zh": "用 CSS 截断文本。单行：overflow: hidden; white-space: nowrap; text-overflow: ellipsis。多行：display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden（不带前缀的 line-clamp 在各浏览器还不稳）。保留扩展名的中间截断在 Web 上要用 JS —— macOS 上是 lineBreakMode = .byTruncatingMiddle。想要柔和淡出而不是点点点，用 mask-image: linear-gradient(to right, black 70%, transparent)。"
    },
    "debugPrompt": {
      "en": "Debug my text truncation (text-overflow ellipsis, line-clamp). Rule out: ellipsis needing all three of overflow hidden, white-space nowrap, and a real width constraint — in flex rows add min-width:0 to the shrinking child, that is the classic; multi-line needing -webkit-line-clamp with -webkit-box; middle truncation (file names) needing JS, CSS cannot do it; the full text unavailable because no title/tooltip reveals it. The symptom:",
      "zh": "调试我的文本截断（text-overflow ellipsis、line-clamp）。逐项排除：省略号需要 overflow hidden、white-space nowrap 和真实宽度约束三者齐备 —— flex 行里要给收缩子项加 min-width: 0，这是经典坑；多行截断需要 -webkit-line-clamp 配 -webkit-box；中间截断（文件名）需要 JS，CSS 做不到；全文无从查看，因为没有 title/tooltip 展示。症状是："
    },
    "parts": [
      {
        "id": "end-ellipsis",
        "name": {
          "en": "End ellipsis",
          "zh": "行尾省略号（End ellipsis）"
        },
        "api": "text-overflow: ellipsis",
        "description": {
          "en": "“Dot dot dot at the end of the line” — only kicks in alongside overflow: hidden and white-space: nowrap.",
          "zh": "“行尾的点点点” —— 只有和 overflow: hidden、white-space: nowrap 一起才生效。"
        },
        "prompt": {
          "en": "single-line truncation: overflow: hidden; white-space: nowrap; text-overflow: ellipsis",
          "zh": "单行截断：overflow: hidden; white-space: nowrap; text-overflow: ellipsis"
        }
      },
      {
        "id": "line-clamp",
        "name": {
          "en": "Line clamp",
          "zh": "行数截断（Line clamp）"
        },
        "api": "-webkit-line-clamp",
        "description": {
          "en": "“Show two lines then cut it off” is a line clamp — the ellipsis lands at the end of the last allowed line.",
          "zh": "“显示两行就切断”就是行数截断 —— 省略号落在允许的最后一行末尾。"
        },
        "prompt": {
          "en": "multi-line clamp: display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden",
          "zh": "多行截断：display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden"
        }
      },
      {
        "id": "middle-truncation",
        "name": {
          "en": "Middle truncation",
          "zh": "中间截断（Middle truncation）"
        },
        "api": "NSLineBreakMode.byTruncatingMiddle",
        "description": {
          "en": "“The dots in the middle of a long file name” keep both ends readable — native on macOS (.byTruncatingMiddle); on the web it takes JS.",
          "zh": "“长文件名中间的点”让两头都可读 —— macOS 原生支持（.byTruncatingMiddle）；Web 上要用 JS。"
        },
        "prompt": {
          "en": "middle truncation keeping the start and the file extension visible (macOS: lineBreakMode = .byTruncatingMiddle; web: JS string slicing)",
          "zh": "中间截断，保留开头和文件扩展名可见（macOS：lineBreakMode = .byTruncatingMiddle；Web：JS 字符串切片）"
        }
      },
      {
        "id": "fade-out",
        "name": {
          "en": "Fade-out (soft truncation)",
          "zh": "淡出截断（Fade-out/柔和截断）"
        },
        "api": "mask-image",
        "description": {
          "en": "“The text fades out at the edge instead of dots” — a soft truncation done with a transparency mask, common in cards and code previews.",
          "zh": "“文字在边缘淡出而不是用点” —— 用透明度遮罩做的柔和截断，常见于卡片和代码预览。"
        },
        "prompt": {
          "en": "fade-out truncation: mask-image: linear-gradient(to right, black 70%, transparent) on a nowrap, overflow-hidden line",
          "zh": "淡出截断：在不换行、overflow-hidden 的一行上加 mask-image: linear-gradient(to right, black 70%, transparent)"
        }
      }
    ],
    "related": [
      "three-dots",
      "breadcrumbs",
      "marquee"
    ],
    "demo": "web/truncation"
  },
  {
    "slug": "drag-and-drop",
    "platform": "web",
    "name": {
      "en": "Drag & Drop",
      "zh": "拖放（Drag & Drop）"
    },
    "tagline": {
      "en": "The grips, handles, previews, and landing cues around a drag interaction",
      "zh": "拖拽交互周边的抓手、手柄、预览和落点提示"
    },
    "description": {
      "en": "Drag and drop lets someone move or place an object directly. A grip says where to grab, a drag preview follows the pointer, and an insertion line or highlighted target previews the destination before release. Selection resize handles are related controls around a selected object: they resize it rather than move it.",
      "zh": "拖放让人直接移动或放置对象。抓手告诉你从哪儿拿，拖拽预览跟着指针走，插入线或高亮目标在松手前预告落点。选择框调整手柄是选中对象周边的相关控件：它们调整大小，而不是移动位置。"
    },
    "aka": {
      "en": [
        "drag and drop",
        "drag-and-drop interaction",
        "direct manipulation",
        "sortable drag"
      ],
      "zh": [
        "拖放",
        "拖放交互",
        "直接操控",
        "可排序拖拽"
      ]
    },
    "fuzzy": {
      "en": [
        "those kind of a 3x3 or 2x2",
        "those squares, you know, that are on the corners",
        "line indicators for where it will drop",
        "the neighboring terminal is highlighted as a whole",
        "half of that terminal is highlighted",
        "the ghost copy that follows the pointer"
      ],
      "zh": [
        "那种 3x3 或 2x2 的小点阵",
        "你知道的，角上那些小方块",
        "指示会落到哪里的那条线",
        "旁边那个终端整个被高亮",
        "那个终端有一半被高亮",
        "跟着指针走的那个半透明残影"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "ondrop"
      },
      {
        "framework": "HTML",
        "symbol": "ondragover"
      },
      {
        "framework": "HTML",
        "symbol": "draggable=\"true\""
      },
      {
        "framework": "ARIA",
        "symbol": "aria-grabbed",
        "note": {
          "en": "deprecated; announce drag state and drop results with live regions instead",
          "zh": "已废弃；改用 live region 播报拖拽状态和放置结果"
        }
      },
      {
        "framework": "dnd-kit",
        "symbol": "@dnd-kit/core"
      }
    ],
    "prompt": {
      "en": "Build a Drag & Drop interaction with HTML draggable, ondragover, and ondrop (or @dnd-kit/core): show a drag handle, selection resize handles where applicable, a drag preview, and an insertion line or highlighted drop target before release. Do not use the deprecated aria-grabbed state; announce the picked-up item, available destination, and drop result through an ARIA live region.",
      "zh": "用 HTML draggable、ondragover 和 ondrop（或 @dnd-kit/core）构建拖放交互：显示拖拽手柄，适用时显示选择框调整手柄，给出拖拽预览，松手前显示插入线或高亮放置目标。不要用废弃的 aria-grabbed；通过 ARIA live region 播报拿起的内容、可用目的地和放置结果。"
    },
    "debugPrompt": {
      "en": "Debug my drag and drop (HTML draggable, ondragover/ondrop, dnd-kit). Rule out: drop never firing because dragover does not call preventDefault — that is the classic; dragleave firing when entering child elements so the highlight flickers — keep an enter/leave counter; setDragImage ignored because the ghost element is not in the DOM; touch devices doing nothing because native HTML5 DnD has no touch events — use a pointer-based library. The symptom:",
      "zh": "调试我的拖放（HTML draggable、ondragover/ondrop、dnd-kit）。逐项排除：drop 从不触发，因为 dragover 没调 preventDefault —— 这是经典坑；进入子元素时 dragleave 也触发，高亮闪烁 —— 维护一个 enter/leave 计数器；setDragImage 被忽略，因为残影元素不在 DOM 里；触屏设备毫无反应，因为原生 HTML5 DnD 没有触摸事件 —— 换用 pointer 驱动的库。症状是："
    },
    "parts": [
      {
        "id": "drag-handle",
        "name": {
          "en": "Drag handle (grip)",
          "zh": "拖拽手柄（Drag handle/grip）"
        },
        "api": "draggable=\"true\"",
        "description": {
          "en": "“Those kind of a 3x3 or 2x2” dots are a drag handle, also called a grip or grabber.",
          "zh": "“那种 3x3 或 2x2 的点阵”就是拖拽手柄，也叫抓手（grip/grabber）。"
        },
        "prompt": {
          "en": "a drag handle or grip on the draggable item (HTML draggable=\"true\" or @dnd-kit/core listeners): a compact 3×3 or 2×2 dot matrix that clearly marks where to grab",
          "zh": "可拖条目上的拖拽手柄/抓手（HTML draggable=\"true\" 或 @dnd-kit/core listeners）：一个紧凑的 3×3 或 2×2 点阵，清楚标出抓握位置"
        }
      },
      {
        "id": "resize-handles",
        "name": {
          "en": "Selection resize handles",
          "zh": "选择框调整手柄（Selection resize handles）"
        },
        "api": "pointer events",
        "description": {
          "en": "“Those squares, you know, that are on the corners” are selection resize handles around the selected object.",
          "zh": "“你知道的，角上那些小方块”就是选中对象四周的调整手柄。"
        },
        "prompt": {
          "en": "selection resize handles using pointer events: small square controls on the selected object's corners and edges that resize it without acting as drag handles",
          "zh": "用 pointer events 实现的选择框调整手柄：选中对象边角上的小方块控件，只调整大小，不当拖拽手柄用"
        }
      },
      {
        "id": "drop-indicator",
        "name": {
          "en": "Drop indicator (insertion line)",
          "zh": "放置指示线（Drop indicator/insertion line）"
        },
        "api": "ondragover",
        "description": {
          "en": "“Line indicators for where it will drop” are drop indicators, often drawn as an insertion line between items.",
          "zh": "“指示落点的线”就是放置指示线，常画成条目之间的插入线。"
        },
        "prompt": {
          "en": "a drop indicator during ondragover: a clearly visible insertion line between items at the exact position where the dragged item will land",
          "zh": "ondragover 期间的放置指示线：在拖拽条目将要落下的确切位置，于条目之间画一条清晰可见的插入线"
        }
      },
      {
        "id": "drop-target-highlight",
        "name": {
          "en": "Drop-target highlight",
          "zh": "放置目标高亮（Drop-target highlight）"
        },
        "api": "ondragover",
        "description": {
          "en": "“The neighboring terminal is highlighted as a whole” describes a drop-target highlight over the destination region.",
          "zh": "“旁边那个终端整个被高亮”说的就是目标区域上的放置高亮。"
        },
        "prompt": {
          "en": "a drop-target highlight during ondragover: tint the whole valid destination or its precise split zone before the item is dropped",
          "zh": "ondragover 期间的放置目标高亮：在条目落下前，把整个有效目的地或其精确的拆分区域染色"
        }
      },
      {
        "id": "drag-preview",
        "name": {
          "en": "Drag preview (ghost)",
          "zh": "拖拽预览（Ghost 残影）"
        },
        "api": "DataTransfer.setDragImage()",
        "description": {
          "en": "The translucent copy that follows the pointer during a drag is the drag preview, often called the ghost.",
          "zh": "拖拽过程中跟着指针的半透明副本就是拖拽预览，常叫 ghost（残影）。"
        },
        "prompt": {
          "en": "a drag preview or ghost (DataTransfer.setDragImage()): a lightweight translucent image of the dragged item that follows the pointer without obscuring the drop cues",
          "zh": "拖拽预览/残影（DataTransfer.setDragImage()）：一张轻量半透明的被拖条目图像，跟着指针走，又不遮挡放置提示"
        }
      }
    ],
    "related": [
      "split-view",
      "focus-ring-web",
      "three-dots",
      "bento-grid"
    ],
    "demo": "web/drag-and-drop"
  },
  {
    "slug": "divider",
    "platform": "web",
    "name": {
      "en": "Divider vs. Separator vs. Rule",
      "zh": "分隔线：Divider、Separator 与 Rule"
    },
    "tagline": {
      "en": "The same thin line can mark a topic break, separate controls, or be decoration",
      "zh": "同一条细线，可以是话题转折、控件分隔，也可以只是装饰"
    },
    "description": {
      "en": "A horizontal rule marks a change of topic in content, so HTML gives it the semantic <hr> element. A separator divides groups of controls or regions and can use role=\"separator\" when no native semantic element fits. If the line is only visual styling, it is a CSS border and should not be announced as an element. SwiftUI Divider and AppKit separator menu items are the familiar macOS cousins.",
      "zh": "水平标线（horizontal rule）标记内容中的话题转换，所以 HTML 给了它语义化的 <hr> 元素。分隔符（separator）划分控件组或界面区域，没有原生语义元素可用时，用 role=\"separator\"。如果这条线只是视觉样式，那它就是 CSS border，不该被当成元素念出来。SwiftUI Divider 和 AppKit 的 separator 菜单项是 macOS 上眼熟的亲戚。"
    },
    "aka": {
      "en": [
        "separator",
        "rule",
        "horizontal rule",
        "visual divider"
      ],
      "zh": [
        "分隔符",
        "标线",
        "水平标线",
        "视觉分隔线"
      ]
    },
    "fuzzy": {
      "en": [
        "between those line breaks",
        "above that line break",
        "a vertical line break between those sections",
        "the line break divider between the actual kind of title and the download button",
        "maybe add a vertical line divider",
        "horizontal line thing"
      ],
      "zh": [
        "那些分隔线之间",
        "那条线上面",
        "那几个区块之间的一条竖线",
        "标题和下载按钮之间那条分隔线",
        "要不加一条竖的分隔线",
        "横线那玩意儿"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<hr>"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"separator\""
      },
      {
        "framework": "CSS",
        "symbol": "border-block-start",
        "note": {
          "en": "decorative only",
          "zh": "纯装饰"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "Divider"
      },
      {
        "framework": "AppKit",
        "symbol": "NSMenuItem.separator()"
      }
    ],
    "prompt": {
      "en": "Choose the correct Divider, Separator, or Rule: use HTML <hr> for a semantic thematic break in content, role=\"separator\" for a structural boundary between groups of controls, and a CSS border such as border-block-start for a purely decorative line. On macOS, use SwiftUI Divider for a visual division or NSMenuItem.separator() between menu-item groups.",
      "zh": "选对 Divider、Separator 或 Rule：内容中的语义性话题转折用 HTML <hr>；控件组之间的结构边界用 role=\"separator\"；纯装饰的线用 CSS border，如 border-block-start。macOS 上，视觉分隔用 SwiftUI Divider，菜单项分组之间用 NSMenuItem.separator()。"
    },
    "debugPrompt": {
      "en": "Debug my divider (hr, role=separator, border utilities). Rule out: the hairline doubling or vanishing on fractional zoom because 1px borders round differently; a decorative divider still announced by screen readers — decorative ones need aria-hidden, semantic ones role=separator; a flex parent stretching the divider when a fixed cross-size was intended; margin collapse eating the space around an hr. The symptom:",
      "zh": "调试我的分隔线（hr、role=separator、border 工具类）。逐项排除：分数缩放级别下 1px 边框取整不同，细线变两条或消失；装饰性分隔线仍被屏幕阅读器念出来 —— 装饰的要 aria-hidden，语义的要 role=separator；flex 父级把想要固定交叉轴尺寸的分隔线拉伸；margin 折叠吃掉 hr 周围的空间。症状是："
    },
    "parts": [
      {
        "id": "thematic-break",
        "name": {
          "en": "Thematic break (horizontal rule)",
          "zh": "主题性分隔（Thematic break/水平标线）"
        },
        "api": "<hr>",
        "description": {
          "en": "“Above that line break” can mean a horizontal rule: an <hr> marking a real change of topic between sections of content.",
          "zh": "“那条线上面”可能指水平标线：<hr>，标记内容区块之间真正的话题转换。"
        },
        "prompt": {
          "en": "a semantic thematic break using HTML <hr>: a horizontal rule between two content sections whose subject or scene changes",
          "zh": "用 HTML <hr> 做语义化主题分隔：两个内容区块之间的水平标线，前后主题或场景发生转换"
        }
      },
      {
        "id": "semantic-separator",
        "name": {
          "en": "Semantic separator",
          "zh": "语义分隔符（Semantic separator）"
        },
        "api": "role=\"separator\"",
        "description": {
          "en": "“A vertical line break between those sections” is a semantic separator when it divides distinct regions or groups of controls.",
          "zh": "“区块之间的竖线”在划分不同区域或控件组时，就是语义分隔符。"
        },
        "prompt": {
          "en": "a structural separator with role=\"separator\" between two groups of controls or interface regions, with aria-orientation=\"vertical\" when it is vertical",
          "zh": "两组控件或界面区域之间带 role=\"separator\" 的结构分隔符，垂直时加 aria-orientation=\"vertical\""
        }
      },
      {
        "id": "decorative-border",
        "name": {
          "en": "Decorative CSS border",
          "zh": "装饰性 CSS 边框（Decorative CSS border）"
        },
        "api": "border-block-start",
        "description": {
          "en": "“Maybe add a vertical line divider” can be only decoration; use a CSS border with no separator semantics when it conveys no structure.",
          "zh": "“要不加条竖线”可能只是装饰；不传达结构时，用不带 separator 语义的 CSS border。"
        },
        "prompt": {
          "en": "a purely decorative divider drawn with a CSS border such as border-block-start or border-inline-start, with no <hr> element or separator role",
          "zh": "纯装饰分隔线，用 CSS border 画，如 border-block-start 或 border-inline-start，不用 <hr> 元素，也不要 separator 角色"
        }
      },
      {
        "id": "macos-separators",
        "name": {
          "en": "macOS divider and separator item",
          "zh": "macOS 的 Divider 与分隔菜单项（macOS divider and separator item）"
        },
        "api": "Divider / NSMenuItem.separator()",
        "description": {
          "en": "In macOS UI, SwiftUI calls the visual line Divider, while a line between menu command groups is an NSMenuItem separator item.",
          "zh": "macOS 界面里，SwiftUI 把视觉分隔线叫 Divider，而菜单命令组之间的线是 NSMenuItem 的 separator item。"
        },
        "prompt": {
          "en": "the native macOS cousin: SwiftUI Divider between view regions, or NSMenuItem.separator() specifically between related groups of menu commands",
          "zh": "macOS 原生亲戚：视图区域之间的 SwiftUI Divider，或专用于菜单命令分组之间的 NSMenuItem.separator()"
        }
      }
    ],
    "related": [
      "menu-bar",
      "context-menu",
      "split-view",
      "three-dots"
    ],
    "demo": "web/divider"
  },
  {
    "slug": "progress-indicators",
    "platform": "web",
    "name": {
      "en": "Progress Ring vs. Spinner vs. Progress Bar",
      "zh": "进度环 vs. Spinner vs. 进度条"
    },
    "tagline": {
      "en": "A spinner means wait; a ring or bar can show how much work is complete",
      "zh": "Spinner 只表示「请等待」；进度环或进度条能显示已经完成了多少"
    },
    "description": {
      "en": "A spinner loops without showing how much work remains. A determinate progress ring fills an arc around a circle, while a linear progress bar fills across a track; both represent a known value. A percentage label can make that value exact, but it must agree with the indicator's accessible progress value.",
      "zh": "Spinner 不停转圈，不显示还剩多少工作量。确定型进度环沿圆周填充一段圆弧，线性进度条沿轨道推进填充；两者都表示一个已知数值。百分比标签可以把数值标得更精确，但它必须与指示器的无障碍进度值保持一致。"
    },
    "aka": {
      "en": [
        "circular progress indicator",
        "loading spinner",
        "determinate progress indicator",
        "linear progress indicator"
      ],
      "zh": [
        "环形进度指示器",
        "加载转圈",
        "确定型进度指示器",
        "线性进度指示器"
      ]
    },
    "fuzzy": {
      "en": [
        "that circle for the countdown, that circle that gets filled up",
        "the actual circular progress bar",
        "the menu bar like ring getting filled up",
        "the ring that fills up",
        "the spinning circle while it loads",
        "the bar that shows how far along it is"
      ],
      "zh": [
        "倒计时那个圈，就是那个会被逐渐填满的圈",
        "圆的那种进度条",
        "菜单栏上那个一点点填满的环",
        "会填满的那个环",
        "加载时一直转的那个圈",
        "显示进行到哪儿的那条杠"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<progress>"
      },
      {
        "framework": "SwiftUI",
        "symbol": "ProgressView"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"progressbar\""
      },
      {
        "framework": "ARIA",
        "symbol": "aria-valuenow"
      }
    ],
    "prompt": {
      "en": "Use the correct Progress Indicator: an indeterminate spinner when the remaining work is unknown, a determinate progress ring when a compact circular arc should fill toward completion, or an HTML <progress> linear bar when there is room for a readable track. For a custom indicator use role=\"progressbar\" with aria-valuenow, and expose any visible percentage as the same accessible value; SwiftUI's cousin is ProgressView.",
      "zh": "使用正确的进度指示器：剩余工作量未知时用 indeterminate spinner；需要用紧凑的圆弧逐渐填充至完成时用确定型进度环；空间足够放下一条可读轨道时用 HTML <progress> 线性进度条。自定义指示器要用 role=\"progressbar\" 配合 aria-valuenow，并让任何可见百分比与同一个无障碍值保持一致；SwiftUI 里对应的是 ProgressView。"
    },
    "debugPrompt": {
      "en": "Debug my progress indicator (role=progressbar, aria-valuenow, spinner). Rule out: an indeterminate spinner where a determinate bar was possible (or vice versa); the bar width not animating because the transition is on the wrong property; the loading flag stuck true so the spinner never stops; aria-valuenow never updating so assistive tech hears 0 percent forever. The symptom:",
      "zh": "调试我的进度指示器（role=progressbar、aria-valuenow、spinner）。排除以下可能：本可以用确定型进度条却用了 indeterminate spinner（或反过来）；进度条宽度不动画，因为 transition 加在了错误的属性上；loading 标志卡在 true，spinner 永远停不下来；aria-valuenow 从不更新，辅助技术永远读到 0%。症状是："
    },
    "parts": [
      {
        "id": "spinner",
        "name": {
          "en": "Indeterminate spinner",
          "zh": "不确定型 Spinner"
        },
        "api": "role=\"progressbar\"",
        "description": {
          "en": "The spinning circle that keeps looping is an indeterminate spinner: it says work is happening, not how much is left.",
          "zh": "那个一直循环转动的圈就是不确定型 Spinner：它只表示「正在工作」，不表示还剩多少。"
        },
        "prompt": {
          "en": "an indeterminate spinner with role=\"progressbar\" and no aria-valuenow: a looping circular stroke used only when the remaining duration or completion amount is unknown",
          "zh": "一个带 role=\"progressbar\"、不带 aria-valuenow 的 indeterminate spinner：循环转动的圆形描边，只在剩余时长或完成量未知时使用"
        }
      },
      {
        "id": "progress-ring",
        "name": {
          "en": "Determinate progress ring",
          "zh": "确定型进度环"
        },
        "api": "aria-valuenow",
        "description": {
          "en": "“The ring that fills up” is a determinate progress ring: its circular arc represents a known completion value.",
          "zh": "「会填满的那个环」就是确定型进度环：它的圆弧表示一个已知的完成值。"
        },
        "prompt": {
          "en": "a determinate progress ring with role=\"progressbar\" and aria-valuenow: a circular arc that visibly fills from empty to complete around a stable track",
          "zh": "一个带 role=\"progressbar\" 和 aria-valuenow 的确定型进度环：圆弧沿固定轨道从空到满逐渐填充"
        }
      },
      {
        "id": "progress-bar",
        "name": {
          "en": "Linear progress bar",
          "zh": "线性进度条"
        },
        "api": "<progress>",
        "description": {
          "en": "The bar that fills from one side to the other is a linear progress bar; use <progress> when its value is known.",
          "zh": "从一端填充到另一端的那条就是线性进度条；数值已知时用 <progress>。"
        },
        "prompt": {
          "en": "a determinate linear progress bar using HTML <progress>: the filled value advances across a fixed horizontal track from minimum to completion",
          "zh": "一个用 HTML <progress> 实现的确定型线性进度条：填充值沿固定的水平轨道从最小值推进到完成"
        }
      },
      {
        "id": "progress-track",
        "name": {
          "en": "Progress track",
          "zh": "进度轨道"
        },
        "api": "<progress>",
        "description": {
          "en": "The unfilled rail behind a progress ring or bar is the track; it shows the indicator's full range.",
          "zh": "进度环或进度条背后那条未填充的底轨就是轨道（track），它展示指示器的完整量程。"
        },
        "prompt": {
          "en": "the progress track behind the <progress> value: the full, low-contrast rail that remains visible around the unfilled portion of the indicator",
          "zh": "<progress> 填充值背后的进度轨道：一条完整、低对比度的底轨，在指示器未填充的部分保持可见"
        }
      },
      {
        "id": "percentage-label",
        "name": {
          "en": "Percentage label",
          "zh": "百分比标签"
        },
        "api": "aria-valuenow",
        "description": {
          "en": "The number beside or inside the indicator is the percentage label, a readable statement of the current progress value.",
          "zh": "指示器旁边或内部的数字就是百分比标签，用可读的方式写出当前进度值。"
        },
        "prompt": {
          "en": "a percentage label for the progress indicator, such as 72%, kept in sync with role=\"progressbar\" and its aria-valuenow value",
          "zh": "给进度指示器加一个百分比标签，如 72%，并与 role=\"progressbar\" 及其 aria-valuenow 值保持同步"
        }
      }
    ],
    "related": [
      "skeleton-spinner",
      "marquee"
    ],
    "demo": "web/progress-indicators"
  },
  {
    "slug": "window",
    "platform": "macos",
    "name": {
      "en": "Mac Window",
      "zh": "Mac 窗口"
    },
    "tagline": {
      "en": "The movable Mac app frame, from its title bar and toolbar to its resize edges",
      "zh": "可移动的 Mac 应用框架，从标题栏、工具栏一直到调整大小的边缘"
    },
    "description": {
      "en": "A Mac window is the movable, usually resizable frame that holds one app surface. Its top chrome can combine a draggable title bar, title, toolbar, accessories, and document tabs, while the red, yellow, and green traffic lights remain their own standard controls. Window tabs belong to the frame and group separate windows; an in-content tab view only switches content inside one window.",
      "zh": "Mac 窗口是可移动、通常可调整大小的框架，承载应用的一个界面。顶部外框（chrome）可以把可拖动的标题栏、标题、工具栏、附加控件和文档标签页组合在一起，红黄绿三个红绿灯按钮则始终是独立的标准控件。窗口标签页属于窗口框架，用来把多个独立窗口编组；内容区里的标签视图只在一个窗口内部切换内容。"
    },
    "aka": {
      "en": [
        "app window",
        "document window",
        "NSWindow",
        "window frame"
      ],
      "zh": [
        "应用窗口",
        "文档窗口",
        "NSWindow",
        "窗口框架"
      ]
    },
    "fuzzy": {
      "en": [
        "the whole mac app box on screen",
        "the top of the window where you can drag it",
        "the little control inside the title bar",
        "a button next to the traffic lights",
        "the tabs built into the mac window frame",
        "the tiny corner grip for resizing the window"
      ],
      "zh": [
        "屏幕上整个 Mac 应用的那个框",
        "窗口顶部可以拖着走的地方",
        "标题栏里那个小控件",
        "红绿灯按钮旁边的一个按钮",
        "嵌在 Mac 窗口框架里的标签页",
        "角落里用来调窗口大小的小抓手"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSWindow"
      },
      {
        "framework": "SwiftUI",
        "symbol": "WindowGroup"
      },
      {
        "framework": "SwiftUI",
        "symbol": "Window"
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindowController"
      }
    ],
    "prompt": {
      "en": "Build this as a native Mac Window (NSWindow; SwiftUI: Window or WindowGroup). Distinguish the draggable title-bar region from NSWindow.title, use an NSToolbar for unified chrome, attach custom title-bar controls with NSTitlebarAccessoryViewController, and preserve native window tabs and resize edges.",
      "zh": "把它构建为原生 Mac 窗口（NSWindow；SwiftUI：Window 或 WindowGroup）。区分可拖动的标题栏区域与 NSWindow.title，用 NSToolbar 做统一的窗口外框（chrome），用 NSTitlebarAccessoryViewController 挂自定义标题栏控件，并保留原生窗口标签页和调整大小边缘。"
    },
    "debugPrompt": {
      "en": "Debug my macOS window (NSWindow). Rule out: content underlapping the title bar because fullSizeContentView plus transparent title bar is set; the window not draggable where expected — isMovableByWindowBackground vs a draggable title bar area; keystrokes going nowhere because the first responder was cleared; frame autosave restoring an old position over your manual setFrame. The symptom:",
      "zh": "调试我的 macOS 窗口（NSWindow）。排除以下可能：设了 fullSizeContentView 加透明标题栏，内容钻到标题栏下面；窗口在预期位置拖不动——isMovableByWindowBackground 与可拖动标题栏区域的区别；按键石沉大海，因为 first responder 被清掉了；frame 自动保存恢复了旧位置，盖掉你手动调的 setFrame。症状是："
    },
    "parts": [
      {
        "id": "title-bar",
        "name": {
          "en": "Title bar",
          "zh": "标题栏"
        },
        "api": "NSWindow.titleVisibility",
        "description": {
          "en": "“The strip across the top of the window” is the title bar, which can remain present even when its title text is hidden.",
          "zh": "「窗口顶部那条横条」就是标题栏，即使标题文字隐藏了，它也可以保留。"
        },
        "prompt": {
          "en": "the Mac window's title bar (NSWindow.titleVisibility): the top chrome containing the title, traffic lights, and optional unified toolbar",
          "zh": "Mac 窗口的标题栏（NSWindow.titleVisibility）：顶部外框，包含标题、红绿灯按钮和可选的统一工具栏"
        }
      },
      {
        "id": "drag-region",
        "name": {
          "en": "Window drag region",
          "zh": "窗口拖动区域"
        },
        "api": "NSWindow.isMovableByWindowBackground",
        "description": {
          "en": "The blank area you grab to move the window is its drag region, not necessarily the visible title text.",
          "zh": "按住就能移动窗口的空白区域是拖动区域，不一定是看得见的标题文字。"
        },
        "prompt": {
          "en": "the window drag region (NSWindow.isMovableByWindowBackground): an unobstructed title-bar area that moves the NSWindow when dragged",
          "zh": "窗口拖动区域（NSWindow.isMovableByWindowBackground）：标题栏内无遮挡的区域，拖动它会移动整个 NSWindow"
        }
      },
      {
        "id": "window-title",
        "name": {
          "en": "Window title",
          "zh": "窗口标题"
        },
        "api": "NSWindow.title",
        "description": {
          "en": "The document or screen name printed in the title bar is the window title.",
          "zh": "显示在标题栏里的文档名或界面名就是窗口标题。"
        },
        "prompt": {
          "en": "the window title (NSWindow.title): the document or screen name positioned in the title-bar chrome",
          "zh": "窗口标题（NSWindow.title）：放在标题栏外框里的文档名或界面名"
        }
      },
      {
        "id": "unified-toolbar",
        "name": {
          "en": "Unified toolbar",
          "zh": "统一工具栏"
        },
        "api": "NSWindow.ToolbarStyle.unified",
        "description": {
          "en": "When the title and window actions share one top row, that chrome uses the unified toolbar style.",
          "zh": "当标题和窗口操作按钮共用顶部同一行时，这个外框用的就是统一工具栏样式。"
        },
        "prompt": {
          "en": "a unified Mac toolbar (NSWindow.ToolbarStyle.unified) sharing the title bar's single row instead of sitting in a separate strip",
          "zh": "一个统一的 Mac 工具栏（NSWindow.ToolbarStyle.unified）：与标题栏共用一行，而不是单独占一条"
        }
      },
      {
        "id": "toolbar-item",
        "name": {
          "en": "Toolbar item",
          "zh": "工具栏项"
        },
        "api": "NSToolbarItem",
        "description": {
          "en": "One button, field, or flexible space placed in the window toolbar is a toolbar item.",
          "zh": "放在窗口工具栏里的一个按钮、输入框或弹性空隙，就是一个工具栏项。"
        },
        "prompt": {
          "en": "a native toolbar item (NSToolbarItem) placed with macOS toolbar spacing, validation, and overflow behavior",
          "zh": "一个原生工具栏项（NSToolbarItem），遵循 macOS 工具栏的间距、校验和溢出行为"
        }
      },
      {
        "id": "title-bar-accessory",
        "name": {
          "en": "Title-bar accessory",
          "zh": "标题栏附加控件"
        },
        "api": "NSTitlebarAccessoryViewController",
        "description": {
          "en": "“The little control inside the title bar” is a title-bar accessory, separate from both the toolbar and traffic lights.",
          "zh": "「标题栏里那个小控件」就是标题栏附加控件，和工具栏、红绿灯按钮都不相干。"
        },
        "prompt": {
          "en": "a title-bar accessory (NSTitlebarAccessoryViewController): a custom control strip attached to an edge of the NSWindow title bar, separate from NSToolbar",
          "zh": "标题栏附加控件（NSTitlebarAccessoryViewController）：附着在 NSWindow 标题栏某条边上的自定义控件条，独立于 NSToolbar"
        }
      },
      {
        "id": "title-bar-separator",
        "name": {
          "en": "Title-bar separator",
          "zh": "标题栏分隔线"
        },
        "api": "NSWindow.titlebarSeparatorStyle",
        "description": {
          "en": "The hairline between the window's top chrome and its content is the title-bar separator.",
          "zh": "窗口顶部外框和内容之间那条细线就是标题栏分隔线。"
        },
        "prompt": {
          "en": "the title-bar separator (NSWindow.titlebarSeparatorStyle): the native hairline between the title-bar or toolbar chrome and window content",
          "zh": "标题栏分隔线（NSWindow.titlebarSeparatorStyle）：标题栏或工具栏外框与窗口内容之间的原生细线"
        }
      },
      {
        "id": "window-tabs",
        "name": {
          "en": "Window tabs",
          "zh": "窗口标签页"
        },
        "api": "NSWindowTabGroup",
        "description": {
          "en": "Tabs in the window frame group separate document windows; they are not an NSTabView inside the content area.",
          "zh": "窗口框架里的标签页用来把独立的文档窗口编组，不是内容区里的 NSTabView。"
        },
        "prompt": {
          "en": "native window tabs (NSWindowTabGroup): a tab strip in the window frame that groups separate NSWindow documents, not an in-content NSTabView",
          "zh": "原生窗口标签页（NSWindowTabGroup）：窗口框架里的标签条，把多个独立的 NSWindow 文档编组，而不是内容里的 NSTabView"
        }
      },
      {
        "id": "resize-edge",
        "name": {
          "en": "Resize edge / corner",
          "zh": "调整大小边缘／角落"
        },
        "api": "NSWindow.StyleMask.resizable",
        "description": {
          "en": "“The tiny corner grip” means the resize edge or corner, which may be interactive even when no grip is drawn.",
          "zh": "「角落里的小抓手」指调整大小的边缘或角落，即使没画出抓手，它也可能是可交互的。"
        },
        "prompt": {
          "en": "the native resize edge and corner (NSWindow.StyleMask.resizable): the draggable window-frame boundary, including the bottom-right size-grip area",
          "zh": "原生的调整大小边缘和角落（NSWindow.StyleMask.resizable）：可拖动的窗口框架边界，包括右下角的大小抓手区域"
        }
      }
    ],
    "related": [
      "traffic-lights",
      "toolbar",
      "split-view",
      "sidebar"
    ],
    "demo": "macos/window"
  },
  {
    "slug": "split-view",
    "platform": "macos",
    "name": {
      "en": "Split View",
      "zh": "拆分视图"
    },
    "tagline": {
      "en": "Resizable panes separated by a draggable divider inside a Mac window",
      "zh": "Mac 窗口里由可拖动分隔条隔开、可各自调整大小的窗格"
    },
    "description": {
      "en": "A split view divides one window region into two or more panes that can resize independently. The line between them is a split-view divider or splitter when it can be dragged, not merely a decorative separator. A sidebar is one specialized pane and can collapse while the remaining pane expands.",
      "zh": "拆分视图把窗口的一个区域划分成两个或多个可独立调整大小的窗格。中间那条线如果能拖动，就是拆分视图的分隔条（splitter），不只是装饰性分隔线。边栏是一种特殊的窗格，可以折叠起来，把空间让给剩下的窗格。"
    },
    "aka": {
      "en": [
        "split pane",
        "splitter view",
        "multi-pane layout",
        "navigation split view"
      ],
      "zh": [
        "拆分窗格",
        "分隔条视图",
        "多窗格布局",
        "导航拆分视图"
      ]
    },
    "fuzzy": {
      "en": [
        "the window divided into two resizable panels",
        "the line between the two panes that I drag",
        "the divider that resizes the sidebar",
        "the left panel that collapses into the edge",
        "the toolbar line that follows the sidebar divider"
      ],
      "zh": [
        "被分成两个可调大小面板的窗口",
        "两个窗格中间那条能拖的线",
        "能拖着调整边栏宽度的分隔条",
        "左边那个能收进边缘的面板",
        "工具栏上那条跟着边栏分隔条走的线"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSplitView"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewItem"
      },
      {
        "framework": "SwiftUI",
        "symbol": "NavigationSplitView"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewController"
      }
    ],
    "prompt": {
      "en": "Build a native Split View with NSSplitView and NSSplitViewItem (SwiftUI: NavigationSplitView), using a draggable divider between independently sized panes. Give a sidebar item native collapse behavior and align any toolbar boundary with NSTrackingSeparatorToolbarItem.",
      "zh": "用 NSSplitView 和 NSSplitViewItem 构建原生拆分视图（SwiftUI：NavigationSplitView），在可独立调整大小的窗格之间放可拖动的分隔条。给边栏项加上原生折叠行为，并用 NSTrackingSeparatorToolbarItem 对齐工具栏的分隔边界。"
    },
    "debugPrompt": {
      "en": "Debug my macOS split view (NSSplitView, NSSplitViewController). Rule out: divider position not persisting without autosaveName; holding priorities deciding which pane absorbs window resize — the lowest priority pane grows; delegate min/max constraints fighting Auto Layout constraints on the same panes; canCollapse snapping a pane closed on double-click unexpectedly. The symptom:",
      "zh": "调试我的 macOS 拆分视图（NSSplitView、NSSplitViewController）。排除以下可能：没设 autosaveName 导致分隔条位置不持久；holding priorities 决定哪个窗格吸收窗口的尺寸变化——优先级最低的窗格会被拉大；delegate 的最小／最大约束和同一窗格上的 Auto Layout 约束打架；canCollapse 导致双击时窗格意外合拢。症状是："
    },
    "parts": [
      {
        "id": "pane",
        "name": {
          "en": "Pane (split-view item)",
          "zh": "窗格（拆分视图项）"
        },
        "api": "NSSplitViewItem",
        "description": {
          "en": "Each independently sized region on either side of the divider is a pane, represented by an NSSplitViewItem.",
          "zh": "分隔条两侧每个可独立调整大小的区域都是一个窗格，由 NSSplitViewItem 表示。"
        },
        "prompt": {
          "en": "a split-view pane (NSSplitViewItem): one independently sized content region inside the NSSplitView",
          "zh": "一个拆分视图窗格（NSSplitViewItem）：NSSplitView 内一个可独立调整大小的内容区域"
        }
      },
      {
        "id": "divider",
        "name": {
          "en": "Split-view divider (splitter)",
          "zh": "拆分视图分隔条（splitter）"
        },
        "api": "NSSplitView.dividerThickness",
        "description": {
          "en": "“The line between the two panes that I drag” is the split-view divider, also called a splitter.",
          "zh": "「两个窗格中间那条能拖的线」就是拆分视图分隔条，也叫 splitter。"
        },
        "prompt": {
          "en": "the draggable split-view divider or splitter (NSSplitView.dividerThickness) between two panes, with the native resize cursor and hit area",
          "zh": "两个窗格之间可拖动的拆分视图分隔条（splitter，NSSplitView.dividerThickness），带原生的调整大小光标和点击热区"
        }
      },
      {
        "id": "sidebar-collapse",
        "name": {
          "en": "Sidebar collapse behavior",
          "zh": "边栏折叠行为"
        },
        "api": "NSSplitViewItem.collapseBehavior",
        "description": {
          "en": "The way a sidebar folds away and yields its width to the next pane is its collapse behavior.",
          "zh": "边栏收起、把宽度让给相邻窗格的方式就是它的折叠行为。"
        },
        "prompt": {
          "en": "native sidebar collapse behavior (NSSplitViewItem.collapseBehavior): the leading pane folds away while the adjacent pane expands into its space",
          "zh": "原生边栏折叠行为（NSSplitViewItem.collapseBehavior）：前侧窗格收起，相邻窗格扩展到它腾出的空间"
        }
      },
      {
        "id": "tracking-separator",
        "name": {
          "en": "Tracking separator toolbar item",
          "zh": "跟踪分隔条工具栏项"
        },
        "api": "NSTrackingSeparatorToolbarItem",
        "description": {
          "en": "The toolbar divider that stays exactly above a moving split-view divider is a tracking separator.",
          "zh": "工具栏上那条始终跟移动中的拆分视图分隔条上下对齐的分隔线，就是跟踪分隔条。"
        },
        "prompt": {
          "en": "a tracking separator toolbar item (NSTrackingSeparatorToolbarItem) aligned to the NSSplitView divider and moving horizontally with it",
          "zh": "一个跟踪分隔条工具栏项（NSTrackingSeparatorToolbarItem）：与 NSSplitView 分隔条对齐并随它水平移动"
        }
      }
    ],
    "related": [
      "sidebar",
      "inspector",
      "toolbar",
      "window"
    ],
    "demo": "macos/split-view"
  },
  {
    "slug": "scroll-view",
    "platform": "macos",
    "name": {
      "en": "Scroll View (Scroller)",
      "zh": "滚动视图（Scroller）"
    },
    "tagline": {
      "en": "A viewport whose AppKit scrollbar is called a scroller",
      "zh": "一个视口，它的滚动条在 AppKit 里叫 scroller"
    },
    "description": {
      "en": "A scroll view is a viewport onto content larger than the visible region. AppKit calls the bar at its edge a scroller: its draggable thumb is the knob and the track behind it is the knob slot. Modern overlay scrollers float above content and fade away, while legacy scrollers reserve permanent layout space.",
      "zh": "滚动视图是通往比可见区域更大的内容的一个视口。AppKit 把边缘那条控件叫 scroller：能拖动的滑块叫 knob，滑块后面的轨道叫 knob slot。现代的 overlay scroller 浮在内容之上、闲置时淡出；legacy scroller 则常驻并占用布局空间。"
    },
    "aka": {
      "en": [
        "scrolling view",
        "scroll container",
        "scrollbar",
        "NSScroller"
      ],
      "zh": [
        "可滚动视图",
        "滚动容器",
        "滚动条",
        "NSScroller"
      ]
    },
    "fuzzy": {
      "en": [
        "the area you can scroll inside",
        "the scrollbar on the side of a mac window",
        "the little thumb you drag to scroll",
        "the track behind the scrollbar thumb",
        "the scrollbar that fades away until you scroll",
        "the rubber band bounce at the end of a list"
      ],
      "zh": [
        "里面能滚动的那片区域",
        "Mac 窗口边上的滚动条",
        "滚动条上那个能拖的小滑块",
        "滚动条滑块后面的轨道",
        "不滚动就会淡出的滚动条",
        "列表滚到底时的橡皮筋回弹"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSScrollView"
      },
      {
        "framework": "AppKit",
        "symbol": "NSScroller"
      },
      {
        "framework": "SwiftUI",
        "symbol": "ScrollView"
      },
      {
        "framework": "AppKit",
        "symbol": "NSClipView"
      }
    ],
    "prompt": {
      "en": "Use a native Scroll View (NSScrollView; SwiftUI: ScrollView). In AppKit, call the edge control an NSScroller, with its draggable knob inside the knob slot; respect NSScroller.Style overlay versus legacy and preserve native scroll elasticity at the content boundaries.",
      "zh": "使用原生滚动视图（NSScrollView；SwiftUI：ScrollView）。在 AppKit 里，边缘那个控件叫 NSScroller：可拖动的 knob 位于 knob slot 之内；尊重 NSScroller.Style 里 overlay 与 legacy 的区别，并在内容边界保留原生的滚动弹性。"
    },
    "debugPrompt": {
      "en": "Debug my macOS scroll view (NSScrollView, NSClipView). Rule out: content origin confusion because the document view is not flipped; overlay vs legacy scroller styles changing available width between users; the rubber-band overscroll disabled or doubled by elasticity settings; wheel events swallowed by a nested scroll view; scrollToVisible fighting responsive-scrolling prefetch. The symptom:",
      "zh": "调试我的 macOS 滚动视图（NSScrollView、NSClipView）。排除以下可能：document view 没有 flipped 导致内容原点搞反；overlay 和 legacy 两种 scroller 样式让不同用户看到的可用宽度不一样；橡皮筋过冲被 elasticity 设置禁用或叠了双倍；滚轮事件被嵌套的滚动视图吞掉；scrollToVisible 和响应式滚动预取互相打架。症状是："
    },
    "parts": [
      {
        "id": "scroller",
        "name": {
          "en": "Scroller",
          "zh": "Scroller（滚动条）"
        },
        "api": "NSScroller",
        "description": {
          "en": "The control most people call a scrollbar is formally a scroller in AppKit.",
          "zh": "大多数人叫「滚动条」的那个控件，在 AppKit 里正式名称是 scroller。"
        },
        "prompt": {
          "en": "the scroll view's scroller (NSScroller): the native macOS track-and-thumb control at the content edge",
          "zh": "滚动视图的 scroller（NSScroller）：内容边缘的原生 macOS「轨道＋滑块」控件"
        }
      },
      {
        "id": "knob",
        "name": {
          "en": "Scroller knob (thumb)",
          "zh": "滚动滑块 knob（thumb）"
        },
        "api": "NSScroller.knobProportion",
        "description": {
          "en": "“The little thumb you drag” is the scroller knob; its length reflects how much content is visible.",
          "zh": "「那个能拖的小滑块」就是 scroller 的 knob，它的长度反映可见内容占多大比例。"
        },
        "prompt": {
          "en": "the scroller knob or thumb (NSScroller.knobProportion): the draggable rounded piece whose length represents the visible fraction of content",
          "zh": "滚动滑块 knob（thumb，NSScroller.knobProportion）：可拖动的圆角小块，长度代表内容的可见比例"
        }
      },
      {
        "id": "knob-slot",
        "name": {
          "en": "Knob slot (track)",
          "zh": "滑块槽 knob slot（轨道）"
        },
        "api": "NSScroller.drawKnobSlot(in:highlight:)",
        "description": {
          "en": "The channel behind the knob is the knob slot, commonly called the scrollbar track.",
          "zh": "knob 后面的滑槽就是 knob slot，通常叫滚动条轨道。"
        },
        "prompt": {
          "en": "the scroller knob slot or track (NSScroller.drawKnobSlot(in:highlight:)): the channel behind the draggable knob",
          "zh": "scroller 的滑块槽（轨道，NSScroller.drawKnobSlot(in:highlight:)）：可拖动 knob 后面的滑槽"
        }
      },
      {
        "id": "scroller-style",
        "name": {
          "en": "Overlay vs. legacy scroller",
          "zh": "Overlay 与 legacy 两种 scroller 样式"
        },
        "api": "NSScroller.Style",
        "description": {
          "en": "An overlay scroller fades over the content; a legacy scroller stays visible and takes up layout space.",
          "zh": "overlay scroller 浮在内容上、闲置淡出；legacy scroller 一直可见并占用布局空间。"
        },
        "prompt": {
          "en": "the scroller style (NSScroller.Style): overlay floats above content and fades when idle, while legacy remains visible in reserved space",
          "zh": "scroller 样式（NSScroller.Style）：overlay 浮在内容上方、闲置时淡出；legacy 在预留的空间里常驻可见"
        }
      }
    ],
    "related": [
      "sidebar",
      "outline-view",
      "column-view"
    ],
    "demo": "macos/scroll-view"
  },
  {
    "slug": "search-field",
    "platform": "macos",
    "name": {
      "en": "Search Field",
      "zh": "搜索栏"
    },
    "tagline": {
      "en": "A Mac text field with built-in search, clearing, and recent-query controls",
      "zh": "Mac 上的文本输入框，自带搜索、清除和最近查询控件"
    },
    "description": {
      "en": "A search field is a text input specialized for filtering or finding content. On macOS it normally includes a magnifying-glass search button, a cancel button that appears for a nonempty query, and optionally a menu of recent searches. SwiftUI's searchable modifier places the platform search field in an appropriate location such as the toolbar.",
      "zh": "搜索栏是专门用来筛选或查找内容的文本输入框。在 macOS 上，它通常带一个放大镜搜索按钮、一个在有关键词时出现的取消按钮，以及可选的最近搜索菜单。SwiftUI 的 searchable 修饰符会把平台搜索栏放到合适的位置，比如工具栏里。"
    },
    "aka": {
      "en": [
        "search box",
        "search bar",
        "NSSearchField",
        "searchable field"
      ],
      "zh": [
        "搜索框",
        "搜索栏",
        "NSSearchField",
        "可搜索的输入框"
      ]
    },
    "fuzzy": {
      "en": [
        "the rounded box with a magnifying glass",
        "the search input in the mac toolbar",
        "the little x that clears the search",
        "the magnifier button inside the text field",
        "the dropdown of recent searches"
      ],
      "zh": [
        "带放大镜的圆角框",
        "Mac 工具栏里的搜索输入框",
        "清空搜索内容的小 x",
        "文本框里面的放大镜按钮",
        "最近搜索的下拉列表"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSearchField"
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.searchable(text:placement:prompt:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSearchFieldCell"
      }
    ],
    "prompt": {
      "en": "Use a native Search Field with NSSearchField (SwiftUI: View.searchable), preserving its leading search button, trailing cancel button when text is present, and optional recent-search menu from NSSearchFieldCell.searchMenuTemplate.",
      "zh": "使用原生搜索栏 NSSearchField（SwiftUI：View.searchable），保留前缘的搜索按钮、有文本时出现在后缘的取消按钮，以及来自 NSSearchFieldCell.searchMenuTemplate 的可选最近搜索菜单。"
    },
    "debugPrompt": {
      "en": "Debug my macOS search field (NSSearchField). Rule out: search firing only on Return because sendsSearchStringImmediately is false; the clear button clearing text but your code never notified — watch for the empty-string action; the recents menu dead without recentsAutosaveName; the cancel button hidden at small control sizes. The symptom:",
      "zh": "调试我的 macOS 搜索栏（NSSearchField）。排除以下可能：sendsSearchStringImmediately 为 false，导致只有按 Return 才触发搜索；清除按钮清掉了文本但你的代码没收到通知——留意空字符串 action；没设 recentsAutosaveName 导致最近搜索菜单失效；控件尺寸太小时取消按钮被隐藏。症状是："
    },
    "parts": [
      {
        "id": "search-button",
        "name": {
          "en": "Search button",
          "zh": "搜索按钮"
        },
        "api": "NSSearchFieldCell.searchButtonCell",
        "description": {
          "en": "The magnifying glass inside the leading edge is the search button, not just a decorative placeholder icon.",
          "zh": "前缘内侧的放大镜是搜索按钮，不只是装饰性的占位图标。"
        },
        "prompt": {
          "en": "the search button (NSSearchFieldCell.searchButtonCell): the leading magnifying-glass control inside the NSSearchField",
          "zh": "搜索按钮（NSSearchFieldCell.searchButtonCell）：NSSearchField 内部前缘的放大镜控件"
        }
      },
      {
        "id": "cancel-button",
        "name": {
          "en": "Cancel button",
          "zh": "取消按钮"
        },
        "api": "NSSearchFieldCell.cancelButtonCell",
        "description": {
          "en": "“The little x that clears the search” is the field's cancel button.",
          "zh": "「清空搜索的小 x」就是这个输入框的取消按钮。"
        },
        "prompt": {
          "en": "the cancel button (NSSearchFieldCell.cancelButtonCell): the trailing x control that appears for a nonempty query and clears it",
          "zh": "取消按钮（NSSearchFieldCell.cancelButtonCell）：后缘的 x 控件，有关键词时出现，点击清空"
        }
      },
      {
        "id": "recents-menu",
        "name": {
          "en": "Recent-searches menu",
          "zh": "最近搜索菜单"
        },
        "api": "NSSearchFieldCell.searchMenuTemplate",
        "description": {
          "en": "The menu attached to the search icon can list recent queries and a Clear Recents command.",
          "zh": "挂在搜索图标上的菜单可以列出最近的查询和一条「清除最近搜索」命令。"
        },
        "prompt": {
          "en": "the recent-searches menu (NSSearchFieldCell.searchMenuTemplate): a menu from the search button listing saved queries and Clear Recents",
          "zh": "最近搜索菜单（NSSearchFieldCell.searchMenuTemplate）：从搜索按钮打开的菜单，列出保存过的查询和「清除最近搜索」"
        }
      }
    ],
    "related": [
      "toolbar",
      "combo-button",
      "popup-pulldown-combo"
    ],
    "demo": "macos/search-field"
  },
  {
    "slug": "save-panel",
    "platform": "macos",
    "name": {
      "en": "Save Panel",
      "zh": "存储面板"
    },
    "tagline": {
      "en": "The standard Mac dialog for naming a file and choosing where to save it",
      "zh": "Mac 上给文件起名、选择存储位置的标准对话框"
    },
    "description": {
      "en": "A save panel is the system dialog for choosing a filename, location, and sometimes file format. Its compact form can expand into a Finder-like browser with a sidebar and directory contents. NSSavePanel supplies the native behavior, validation, sandbox integration, and sheet presentation.",
      "zh": "存储面板是用来选择文件名、位置、有时还有文件格式的系统对话框。它的紧凑形态可以展开成类似 Finder 的浏览器，带边栏和目录内容。NSSavePanel 提供原生行为、校验、沙盒集成以及 sheet 形式的呈现。"
    },
    "aka": {
      "en": [
        "save dialog",
        "save-as panel",
        "file save picker",
        "NSSavePanel"
      ],
      "zh": [
        "保存对话框",
        "另存为面板",
        "文件保存选择器",
        "NSSavePanel"
      ]
    },
    "fuzzy": {
      "en": [
        "the mac save as window",
        "the dialog where you name a file before saving",
        "the little arrow that expands the save dialog",
        "the file format dropdown in save as",
        "the finder sidebar inside the save window"
      ],
      "zh": [
        "Mac 的「另存为」窗口",
        "保存前给文件起名的那个对话框",
        "把保存对话框展开的小箭头",
        "另存为里的文件格式下拉框",
        "保存窗口里那个 Finder 边栏"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSavePanel"
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSavePanel.beginSheetModal(for:completionHandler:)"
      }
    ],
    "prompt": {
      "en": "Present the standard Save Panel with NSSavePanel (SwiftUI workflow: View.fileExporter), including its editable name field, disclosure button for the expanded file browser, allowed-content-type format pop-up, and Finder-style sidebar. Do not rebuild the system save dialog from custom controls.",
      "zh": "用 NSSavePanel 弹出标准存储面板（SwiftUI 流程：View.fileExporter），包括可编辑的名称栏、展开文件浏览器的披露按钮、按允许内容类型过滤的格式弹出式按钮，以及 Finder 风格的边栏。不要用自定义控件重造系统保存对话框。"
    },
    "debugPrompt": {
      "en": "Debug my macOS save panel (NSSavePanel, NSOpenPanel). Rule out: sandboxed URLs failing later because startAccessingSecurityScopedResource was never called or a bookmark was never saved; allowedContentTypes filtering out everything so Save stays disabled; runModal blocking the app when beginSheetModal was intended; the panel opening in the wrong folder because directoryURL is set after presentation. The symptom:",
      "zh": "调试我的 macOS 存储面板（NSSavePanel、NSOpenPanel）。排除以下可能：沙盒 URL 之后失效，因为从没调用 startAccessingSecurityScopedResource，或从没保存 bookmark；allowedContentTypes 把所有类型都过滤掉了，导致「存储」按钮一直不可用；本该用 beginSheetModal 却用了 runModal 卡住整个应用；因为在展示之后才设 directoryURL，面板打开在错误的文件夹。症状是："
    },
    "parts": [
      {
        "id": "name-field",
        "name": {
          "en": "Name field",
          "zh": "名称栏"
        },
        "api": "NSSavePanel.nameFieldStringValue",
        "description": {
          "en": "The editable Save As text box is the panel's name field.",
          "zh": "「存储为」那个可编辑文本框就是面板的名称栏。"
        },
        "prompt": {
          "en": "the save panel's name field (NSSavePanel.nameFieldStringValue): the editable filename box above the browser",
          "zh": "存储面板的名称栏（NSSavePanel.nameFieldStringValue）：浏览器上方可编辑的文件名输入框"
        }
      },
      {
        "id": "disclosure-button",
        "name": {
          "en": "Disclosure expansion button",
          "zh": "披露展开按钮"
        },
        "api": "NSSavePanel.isExpanded",
        "description": {
          "en": "“The little arrow that makes the save window bigger” is the disclosure button for the panel's expanded browser.",
          "zh": "「让保存窗口变大的那个小箭头」就是展开面板浏览器的披露按钮。"
        },
        "prompt": {
          "en": "the save panel's disclosure expansion button (NSSavePanel.isExpanded): the small control that reveals or hides the full file browser",
          "zh": "存储面板的披露展开按钮（NSSavePanel.isExpanded）：显示或隐藏完整文件浏览器的小控件"
        }
      },
      {
        "id": "format-popup",
        "name": {
          "en": "Format pop-up",
          "zh": "格式弹出式按钮"
        },
        "api": "NSSavePanel.allowedContentTypes",
        "description": {
          "en": "The file-type selector beneath the name is the format pop-up, constrained by the panel's allowed content types.",
          "zh": "名称下方的文件类型选择器就是格式弹出式按钮，可选范围受面板允许的内容类型约束。"
        },
        "prompt": {
          "en": "the save panel's format pop-up (NSSavePanel.allowedContentTypes): the native file-type selector beneath the filename field",
          "zh": "存储面板的格式弹出式按钮（NSSavePanel.allowedContentTypes）：文件名输入框下方的原生文件类型选择器"
        }
      }
    ],
    "related": [
      "sheet",
      "sidebar",
      "disclosure-triangle",
      "popup-pulldown-combo"
    ],
    "demo": "macos/save-panel"
  },
  {
    "slug": "token-field",
    "platform": "macos",
    "name": {
      "en": "Token Field",
      "zh": "令牌输入框"
    },
    "tagline": {
      "en": "A text input that turns recognized values into removable rounded tokens",
      "zh": "一种文本输入框，能把识别出来的值变成可移除的圆角令牌"
    },
    "description": {
      "en": "A token field converts recognized pieces of typed text into discrete rounded tokens, like recipients in a mail compose window. Each token represents one value and can be selected, edited, or removed without treating the whole field as plain text. AppKit provides token styling, completions, represented objects, and tokenizing separators through NSTokenField.",
      "zh": "令牌输入框把输入文本里识别出的片段转换成一个个独立的圆角令牌，就像邮件撰写窗口里的收件人。每个令牌代表一个值，可以单独选中、编辑或删除，而不是把整个输入框当纯文本处理。AppKit 通过 NSTokenField 提供令牌样式、自动补全、represented object 和分词分隔符。"
    },
    "aka": {
      "en": [
        "token input",
        "recipient field",
        "tag input",
        "pill input"
      ],
      "zh": [
        "令牌输入",
        "收件人栏",
        "标签输入框",
        "胶囊输入框"
      ]
    },
    "fuzzy": {
      "en": [
        "the text field with removable pills inside it",
        "the email address bubbles in the To field",
        "input that turns words into little tags",
        "rounded chips you can delete from a field",
        "the field where each recipient becomes its own bubble"
      ],
      "zh": [
        "里面带可删小胶囊的文本框",
        "收件人栏里的邮箱气泡",
        "能把词变成小标签的输入框",
        "输入框里可以删掉的圆角小片",
        "每个收件人都变成一个气泡的那个输入框"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSTokenField"
      },
      {
        "framework": "AppKit",
        "symbol": "NSTokenField.TokenStyle"
      },
      {
        "framework": "AppKit",
        "symbol": "NSTokenFieldDelegate"
      }
    ],
    "prompt": {
      "en": "Use a native Token Field (NSTokenField) with NSTokenField.TokenStyle so each recognized recipient or tag becomes a separately selectable, removable rounded token inside the editable field. Preserve token completion and keyboard deletion behavior.",
      "zh": "使用原生令牌输入框（NSTokenField）和 NSTokenField.TokenStyle，让每个识别出的收件人或标签都变成可单独选中、可删除的圆角令牌。保留令牌自动补全和键盘删除行为。"
    },
    "debugPrompt": {
      "en": "Debug my macOS token field (NSTokenField). Rule out: text not becoming tokens until Return because the tokenizing character set lacks your separator; represented objects vs display strings confused in the delegate so tokens show raw identifiers; completions never appearing because the completion delegate method is not implemented; copy producing plain text because writing represented objects to the pasteboard is unimplemented. The symptom:",
      "zh": "调试我的 macOS 令牌输入框（NSTokenField）。排除以下可能：tokenizing character set 里缺了你的分隔符，导致按 Return 才把文本变成令牌；delegate 里把 represented object 和显示字符串搞混，令牌显示出原始标识符；没实现补全的 delegate 方法，补全列表永不出现；没实现向粘贴板写 represented object，复制出来只有纯文本。症状是："
    },
    "parts": [
      {
        "id": "token-capsule",
        "name": {
          "en": "Token capsule",
          "zh": "令牌胶囊"
        },
        "api": "NSTokenField.TokenStyle",
        "description": {
          "en": "“The little rounded bubble around each recipient” is a token capsule.",
          "zh": "「每个收件人外面那层圆角小气泡」就是令牌胶囊。"
        },
        "prompt": {
          "en": "an NSTokenField.TokenStyle token capsule wrapping one recognized value inside the field",
          "zh": "一个 NSTokenField.TokenStyle 令牌胶囊，在输入框里包裹一个识别出的值"
        }
      },
      {
        "id": "selected-token",
        "name": {
          "en": "Selected token",
          "zh": "选中的令牌"
        },
        "api": "NSTokenField",
        "description": {
          "en": "“The whole pill that highlights before I delete it” is the selected token.",
          "zh": "「删除前整个高亮的那粒胶囊」就是选中的令牌。"
        },
        "prompt": {
          "en": "the selected NSTokenField token with its native highlight, ready for keyboard deletion or editing",
          "zh": "NSTokenField 中选中的令牌，带原生高亮，等待键盘删除或编辑"
        }
      }
    ],
    "related": [
      "search-field",
      "popup-pulldown-combo",
      "badge-chip-pill"
    ],
    "demo": "macos/token-field"
  },
  {
    "slug": "combo-button",
    "platform": "macos",
    "name": {
      "en": "Combo Button",
      "zh": "组合按钮"
    },
    "tagline": {
      "en": "A primary action joined to a separate arrow that opens related actions",
      "zh": "主操作和一个独立箭头拼在一起，箭头打开相关操作"
    },
    "description": {
      "en": "A combo button combines two adjacent targets: a main button that immediately performs the default action and a small arrow button that opens related alternatives. A pop-up button instead shows the current selected value, while a pull-down button opens a menu from the whole control and has no separate primary-action region. NSComboButton is available on macOS 13 and later.",
      "zh": "组合按钮把两个相邻的点击目标拼在一起：主按钮立即执行默认操作，小箭头按钮打开相关的备选操作。弹出式按钮（pop-up button）显示的是当前选中的值；下拉式按钮（pull-down button）则整个控件都用来打开菜单，没有独立的主操作区域。NSComboButton 在 macOS 13 及更高版本可用。"
    },
    "aka": {
      "en": [
        "split button",
        "menu-arrow button",
        "action-and-menu button",
        "NSComboButton"
      ],
      "zh": [
        "拆分按钮",
        "菜单箭头按钮",
        "操作＋菜单按钮",
        "NSComboButton"
      ]
    },
    "fuzzy": {
      "en": [
        "the button with a separate little arrow attached",
        "one button that clicks and also has a dropdown",
        "the split action button with a menu on the right",
        "primary button joined to a tiny chevron button",
        "button where the label acts and the arrow opens choices"
      ],
      "zh": [
        "旁边连着一个小箭头的按钮",
        "又能点又带下拉的那个按钮",
        "右边带菜单的分体式操作按钮",
        "主按钮拼着一个小 chevron 按钮",
        "文字直接执行、箭头打开选项的那个按钮"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSComboButton",
        "note": {
          "en": "macOS 13+",
          "zh": "macOS 13+"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSComboButton.Style.split",
        "note": {
          "en": "separate action and menu regions",
          "zh": "操作区域与菜单区域分离"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "Button + Menu",
        "note": {
          "en": "no single native SwiftUI equivalent",
          "zh": "没有单一的原生 SwiftUI 等价物"
        }
      }
    ],
    "prompt": {
      "en": "Use a Combo Button with NSComboButton (macOS 13+) in split style: clicking the main region performs the primary action, while the attached arrow region opens its NSMenu. Do not use a pop-up button, which displays a current selection, or a pull-down button, whose whole button opens an action menu.",
      "zh": "使用组合按钮 NSComboButton（macOS 13+）的 split 样式：点主区域立即执行主操作，点附着的箭头区域打开它的 NSMenu。不要用弹出式按钮（pop-up button）——它显示的是当前选中项；也不要用下拉式按钮（pull-down button）——它整个按钮都用来打开操作菜单。"
    },
    "debugPrompt": {
      "en": "Debug my macOS combo button (NSComboButton, macOS 13+). Rule out: unified vs split style confusion — in unified the whole button shows the menu, in split only the arrow section does; the menu property empty so the arrow does nothing; running on macOS 12 or earlier where NSComboButton does not exist and a popup-button fallback is needed. The symptom:",
      "zh": "调试我的 macOS 组合按钮（NSComboButton，macOS 13+）。排除以下可能：unified 和 split 样式搞混——unified 下整个按钮都弹出菜单，split 下只有箭头区域弹菜单；menu 属性为空，箭头点了没反应；跑在 macOS 12 或更早版本上，NSComboButton 不存在，需要回退到弹出式按钮方案。症状是："
    },
    "parts": [
      {
        "id": "primary-action-region",
        "name": {
          "en": "Primary action region",
          "zh": "主操作区域"
        },
        "api": "NSComboButton.action",
        "description": {
          "en": "“The main half that does the thing immediately” is the primary action region.",
          "zh": "「点了立刻执行的那半边」就是主操作区域。"
        },
        "prompt": {
          "en": "the NSComboButton primary action region, with the main label performing the default action immediately",
          "zh": "NSComboButton 的主操作区域，主标签点击后立即执行默认操作"
        }
      },
      {
        "id": "menu-disclosure-region",
        "name": {
          "en": "Menu disclosure region",
          "zh": "菜单披露区域"
        },
        "api": "NSComboButton.menu",
        "description": {
          "en": "“The separate little arrow attached to the button” is the menu disclosure region.",
          "zh": "「按钮上连着的那个独立小箭头」就是菜单披露区域。"
        },
        "prompt": {
          "en": "the separate NSComboButton menu disclosure region, a narrow attached chevron target that opens the related NSMenu",
          "zh": "NSComboButton 独立的菜单披露区域：一个附着在旁边、窄窄的 chevron 点击目标，用来打开相关的 NSMenu"
        }
      },
      {
        "id": "split-divider",
        "name": {
          "en": "Split divider",
          "zh": "分体分隔线"
        },
        "api": "NSComboButton.Style.split",
        "description": {
          "en": "“The tiny line between the label and arrow” is the split divider.",
          "zh": "「标签和箭头之间那条小细线」就是分体分隔线。"
        },
        "prompt": {
          "en": "the divider in NSComboButton.Style.split that visibly separates the primary action target from the arrow target",
          "zh": "NSComboButton.Style.split 里的分隔线，在视觉上把主操作目标和箭头目标分开"
        }
      }
    ],
    "related": [
      "popup-pulldown-combo",
      "toolbar",
      "context-menu"
    ],
    "demo": "macos/combo-button"
  },
  {
    "slug": "level-indicator",
    "platform": "macos",
    "name": {
      "en": "Level Indicator",
      "zh": "级别指示器"
    },
    "tagline": {
      "en": "A Mac gauge rendered as a capacity bar, rating stars, or relevance meter",
      "zh": "Mac 上的量表：容量条、评分星星或相关度仪表"
    },
    "description": {
      "en": "A level indicator shows a value inside a known range rather than the progress of an ongoing task. Its native styles cover continuous or segmented capacity bars, symbol-based ratings such as stars, and compact relevance meters. Warning and critical thresholds can change the capacity indicator's color as the value crosses them.",
      "zh": "级别指示器显示的是已知范围内的一个数值，而不是进行中任务的进度。它的原生样式包括连续或分段的容量条、用星星等符号表示的评分，以及紧凑的相关度仪表。数值越过警告和临界阈值时，容量指示器会随之变色。"
    },
    "aka": {
      "en": [
        "level meter",
        "capacity indicator",
        "rating indicator",
        "relevancy indicator"
      ],
      "zh": [
        "级别仪表",
        "容量指示器",
        "评分指示器",
        "相关度指示器"
      ]
    },
    "fuzzy": {
      "en": [
        "the row of stars for a rating",
        "the segmented bar showing disk capacity",
        "the little meter showing how strong a match is",
        "the bar that changes color at warning and critical levels",
        "mac gauge with tick marks and colored ranges"
      ],
      "zh": [
        "评分用的那排星星",
        "显示磁盘容量的分段条",
        "显示匹配程度的小仪表",
        "到警告和临界值会变色的那条",
        "Mac 上带刻度和彩色区间的量表"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSLevelIndicator"
      },
      {
        "framework": "AppKit",
        "symbol": "NSLevelIndicator.Style"
      },
      {
        "framework": "SwiftUI",
        "symbol": "Gauge"
      }
    ],
    "prompt": {
      "en": "Use an NSLevelIndicator with the style that matches the meaning: .continuousCapacity or .discreteCapacity for a bounded level, .rating for stars, or .relevancy for match strength. Configure warningValue and criticalValue for native threshold coloring; SwiftUI's nearest general equivalent is Gauge.",
      "zh": "使用 NSLevelIndicator，样式要和含义匹配：有上限的量值用 .continuousCapacity 或 .discreteCapacity，星星评分用 .rating，匹配强度用 .relevancy。配置 warningValue 和 criticalValue 获得原生的阈值变色；SwiftUI 最接近的通用等价物是 Gauge。"
    },
    "debugPrompt": {
      "en": "Debug my macOS level indicator (NSLevelIndicator). Rule out: the wrong style — continuous capacity vs discrete ticks vs rating stars are one class with different levelIndicatorStyle values; warning and critical thresholds recoloring the fill unexpectedly; isEditable letting clicks change the value when it should be display-only; value changes not animating because the cell redraws instantly. The symptom:",
      "zh": "调试我的 macOS 级别指示器（NSLevelIndicator）。排除以下可能：样式用错——连续容量、离散刻度、评分星星是同一个类，只是 levelIndicatorStyle 值不同；警告和临界阈值意外改变了填充颜色；isEditable 让点击能改数值，而它本该只读展示；数值变化没有动画，因为 cell 瞬间重绘。症状是："
    },
    "parts": [
      {
        "id": "filled-level",
        "name": {
          "en": "Filled level",
          "zh": "已填充量"
        },
        "api": "NSLevelIndicator.doubleValue",
        "description": {
          "en": "“The colored amount inside the little meter” is the filled level.",
          "zh": "「小仪表里有颜色的那部分」就是已填充量。"
        },
        "prompt": {
          "en": "the filled level of an NSLevelIndicator, sized from its doubleValue within the configured range",
          "zh": "NSLevelIndicator 的已填充量，按其 doubleValue 在配置好的范围内确定长度"
        }
      },
      {
        "id": "warning-threshold",
        "name": {
          "en": "Warning threshold",
          "zh": "警告阈值"
        },
        "api": "NSLevelIndicator.warningValue",
        "description": {
          "en": "“The point where the meter changes to a warning color” is the warning threshold.",
          "zh": "「仪表变成警告颜色的那个点」就是警告阈值。"
        },
        "prompt": {
          "en": "the NSLevelIndicator.warningValue threshold where the capacity fill changes to its native warning color",
          "zh": "NSLevelIndicator.warningValue 阈值：容量填充在此处变为原生警告色"
        }
      },
      {
        "id": "critical-threshold",
        "name": {
          "en": "Critical threshold",
          "zh": "临界阈值"
        },
        "api": "NSLevelIndicator.criticalValue",
        "description": {
          "en": "“The point where the bar turns critical” is the critical threshold.",
          "zh": "「条变成临界状态的那个点」就是临界阈值。"
        },
        "prompt": {
          "en": "the NSLevelIndicator.criticalValue threshold where the capacity fill takes its native critical color",
          "zh": "NSLevelIndicator.criticalValue 阈值：容量填充在此处变为原生临界色"
        }
      },
      {
        "id": "rating-symbol",
        "name": {
          "en": "Rating symbol",
          "zh": "评分符号"
        },
        "api": "NSLevelIndicator.Style.rating",
        "description": {
          "en": "“Each star in the rating row” is a rating symbol in the level indicator.",
          "zh": "「评分那排里的每颗星星」都是级别指示器里的一个评分符号。"
        },
        "prompt": {
          "en": "the repeated rating symbols in NSLevelIndicator.Style.rating, filled through the current rating value",
          "zh": "NSLevelIndicator.Style.rating 中重复的评分符号，按当前评分值填充"
        }
      }
    ],
    "related": [
      "segmented-control",
      "focus-ring",
      "badge-chip-pill"
    ],
    "demo": "macos/level-indicator"
  },
  {
    "slug": "column-view",
    "platform": "macos",
    "name": {
      "en": "Column View (Browser)",
      "zh": "分栏视图（层级浏览器）"
    },
    "tagline": {
      "en": "Finder-style columns that reveal each successive level of a hierarchy",
      "zh": "Finder 风格的分栏，逐级展开层级结构"
    },
    "description": {
      "en": "A column view is a hierarchical browser where every selected branch opens its children in the next column to the right. Finder's Column view is the familiar example: several ancestry levels remain visible at once, so the path is spatial rather than only textual. AppKit's native control is NSBrowser; NavigationSplitView is only an approximate SwiftUI composition.",
      "zh": "分栏视图是一种层级浏览器：每选中一个分支，它的子项就在右边下一列打开。Finder 的分栏显示是大家熟悉的例子：多个祖先层级同时可见，路径是空间化的，而不只是文字。AppKit 的原生控件是 NSBrowser；NavigationSplitView 只是 SwiftUI 里近似的组合方案。"
    },
    "aka": {
      "en": [
        "browser view",
        "Finder column view",
        "Miller columns",
        "hierarchical browser"
      ],
      "zh": [
        "浏览器视图",
        "Finder 分栏视图",
        "Miller 分栏",
        "层级浏览器"
      ]
    },
    "fuzzy": {
      "en": [
        "the finder columns thing",
        "folders opening in columns to the right",
        "the file browser where every level gets a new column",
        "side by side columns showing a folder path",
        "the hierarchy browser with arrows at the end of rows"
      ],
      "zh": [
        "Finder 里那个分栏的东西",
        "文件夹一级级往右边开列",
        "每深入一级就新开一列的文件浏览器",
        "并排几列展示文件夹路径",
        "行尾带箭头的层级浏览器"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSBrowser"
      },
      {
        "framework": "AppKit",
        "symbol": "NSBrowserCell"
      },
      {
        "framework": "SwiftUI",
        "symbol": "NavigationSplitView",
        "note": {
          "en": "approximate; no direct equivalent",
          "zh": "近似方案；没有直接等价物"
        }
      }
    ],
    "prompt": {
      "en": "Build a Finder-style Column View with NSBrowser and NSBrowserCell: selecting a non-leaf row reveals its children in a new column immediately to the right, preserving the visible hierarchy path. Do not substitute a flat list or a single sidebar-detail split.",
      "zh": "用 NSBrowser 和 NSBrowserCell 构建 Finder 风格的分栏视图：选中非叶子行时，它的子项立即在右侧新列中出现，保持层级路径可见。不要用扁平列表或单个「边栏＋详情」拆分布局来替代。"
    },
    "debugPrompt": {
      "en": "Debug my macOS column view (NSBrowser, Miller columns). Rule out: stale columns because reloadColumn/reloadData never ran after the model changed; confusing path-based selection with item-based delegate methods; lazy child loading never triggered because isLeafItem answers wrong; the horizontal scroll position jumping when columns are added. The symptom:",
      "zh": "调试我的 macOS 分栏视图（NSBrowser、Miller columns）。排除以下可能：模型变了之后没调 reloadColumn/reloadData，列内容是旧的；把基于 path 的选中和基于 item 的 delegate 方法搞混；isLeafItem 回答错了，子项的懒加载永远不触发；新增列时水平滚动位置乱跳。症状是："
    },
    "parts": [
      {
        "id": "path-column",
        "name": {
          "en": "Path column",
          "zh": "路径列"
        },
        "api": "NSBrowser",
        "description": {
          "en": "“Each folder opening in a new column” is a path column in an NSBrowser.",
          "zh": "「每个文件夹在新列里打开」，每一列都是 NSBrowser 里的一列路径列。"
        },
        "prompt": {
          "en": "an NSBrowser path column that keeps one visible level of the selected hierarchy",
          "zh": "NSBrowser 的一列路径列，保持所选层级中的一级可见"
        }
      },
      {
        "id": "branch-indicator",
        "name": {
          "en": "Branch indicator",
          "zh": "分支指示箭头"
        },
        "api": "NSBrowserCell.isLeaf",
        "description": {
          "en": "“The little arrow at the end of a folder row” is the branch indicator for a non-leaf cell.",
          "zh": "「文件夹行尾的小箭头」就是非叶子单元格的分支指示箭头。"
        },
        "prompt": {
          "en": "the branch indicator on a non-leaf NSBrowserCell, showing that selecting the row will reveal another column",
          "zh": "非叶子 NSBrowserCell 上的分支指示箭头，表示选中该行会展开下一列"
        }
      },
      {
        "id": "selected-path",
        "name": {
          "en": "Selected path",
          "zh": "选中路径"
        },
        "api": "NSBrowser.path",
        "description": {
          "en": "“The highlighted row in every column” is the selected path through the browser.",
          "zh": "「每一列里高亮的那一行」连起来就是浏览器里的选中路径。"
        },
        "prompt": {
          "en": "the NSBrowser selected path, with one highlighted ancestor row preserved in each visible column",
          "zh": "NSBrowser 的选中路径，每个可见列里都保留一个高亮的祖先行"
        }
      }
    ],
    "related": [
      "outline-view",
      "sidebar",
      "scroll-view",
      "disclosure-triangle"
    ],
    "demo": "macos/column-view"
  },
  {
    "slug": "outline-view",
    "platform": "macos",
    "name": {
      "en": "Outline View",
      "zh": "大纲视图"
    },
    "tagline": {
      "en": "An indented tree of rows that expand to reveal nested children",
      "zh": "一棵带缩进的行树，展开后露出嵌套的子行"
    },
    "description": {
      "en": "An outline view is a tree-shaped list: rows can contain children, indentation shows depth, and disclosure triangles expand or collapse branches. A plain list has no hierarchy. A source list is a sidebar appearance and navigation convention that can be implemented with an outline view, but the terms are not interchangeable.",
      "zh": "大纲视图是树形列表：行可以带子行，缩进表示深度，披露三角负责展开或折叠分支。普通列表没有层级。源列表（source list）是一种边栏外观和导航约定，可以用大纲视图实现，但两个词不能混用。"
    },
    "aka": {
      "en": [
        "tree view",
        "hierarchical list",
        "outline list",
        "expandable table"
      ],
      "zh": [
        "树形视图",
        "层级列表",
        "大纲列表",
        "可展开表格"
      ]
    },
    "fuzzy": {
      "en": [
        "the indented list with little expand arrows",
        "tree of folders where rows have children",
        "a list with nested rows you can open and close",
        "the sidebar-looking list with hierarchy levels",
        "expandable rows indented under their parent"
      ],
      "zh": [
        "带小展开箭头的缩进列表",
        "行下面还有子行的文件夹树",
        "嵌套的行能开合的列表",
        "长得像边栏、带层级的那种列表",
        "缩在父级下面、能展开的行"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSOutlineView"
      },
      {
        "framework": "SwiftUI",
        "symbol": "OutlineGroup"
      },
      {
        "framework": "SwiftUI",
        "symbol": "List",
        "note": {
          "en": "when supplied hierarchical children",
          "zh": "在提供层级 children 数据时"
        }
      }
    ],
    "prompt": {
      "en": "Use an Outline View with NSOutlineView (SwiftUI: OutlineGroup) for the indented hierarchy: parent rows receive disclosure triangles and expanding one reveals child rows directly beneath it. Use a flat list only when rows have no children; apply source-list styling separately if the outline serves as a sidebar.",
      "zh": "用大纲视图 NSOutlineView（SwiftUI：OutlineGroup）实现缩进层级：父行带披露三角，展开后子行直接出现在它下方。只有当行没有子级时才用扁平列表；如果大纲用作边栏，再单独套源列表（source list）样式。"
    },
    "debugPrompt": {
      "en": "Debug my macOS outline view (NSOutlineView). Rule out: rows refusing to expand because isItemExpandable and the child-count delegate answers disagree; reloadItem without reloadChildren:true leaving stale children; autosaveExpandedItems silently broken because items lack stable identity for persistentObject round-trips; row animations jumping because the model mutated before the animated update ran. The symptom:",
      "zh": "调试我的 macOS 大纲视图（NSOutlineView）。排除以下可能：isItemExpandable 和子项数量的 delegate 回答不一致，行拒绝展开；reloadItem 没带 reloadChildren:true，子项还是旧的；autosaveExpandedItems 悄悄失效，因为 item 缺乏稳定标识，persistentObject 存取对不上；模型在动画更新之前就变了，行动画乱跳。症状是："
    },
    "parts": [
      {
        "id": "disclosure-triangle",
        "name": {
          "en": "Disclosure triangle",
          "zh": "披露三角"
        },
        "api": "NSOutlineView",
        "description": {
          "en": "“The little expand arrow beside a row” is its disclosure triangle.",
          "zh": "「行旁边那个展开小箭头」就是披露三角。"
        },
        "prompt": {
          "en": "the native disclosure triangle supplied by NSOutlineView for a row with children",
          "zh": "NSOutlineView 为有子级的行提供的原生披露三角"
        }
      },
      {
        "id": "indentation-level",
        "name": {
          "en": "Indentation level",
          "zh": "缩进层级"
        },
        "api": "NSOutlineView.level(forItem:)",
        "description": {
          "en": "“How far a child row steps in from its parent” is its indentation level.",
          "zh": "「子行相对父行往里缩多少」就是它的缩进层级。"
        },
        "prompt": {
          "en": "the NSOutlineView.level(forItem:) indentation that makes each child depth visible",
          "zh": "NSOutlineView.level(forItem:) 的缩进，让每一层子级深度都看得见"
        }
      },
      {
        "id": "selection-highlight",
        "name": {
          "en": "Row selection highlight",
          "zh": "行选中高亮"
        },
        "api": "NSTableRowView.isSelected",
        "description": {
          "en": "“The colored strip behind the current row” is the row selection highlight.",
          "zh": "「当前行背后的彩色条」就是行选中高亮。"
        },
        "prompt": {
          "en": "the NSTableRowView.isSelected highlight spanning the selected outline row",
          "zh": "NSTableRowView.isSelected 的高亮，铺满选中的大纲行"
        }
      }
    ],
    "related": [
      "disclosure-triangle",
      "sidebar",
      "column-view",
      "scroll-view"
    ],
    "demo": "macos/outline-view"
  },
  {
    "slug": "three-dots",
    "platform": "web",
    "name": {
      "en": "The Three Dots (Overflow Menu)",
      "zh": "三个点（溢出菜单）"
    },
    "tagline": {
      "en": "Horizontal dots, vertical dots, three lines, and an ellipsis mean different things",
      "zh": "横排三个点、竖排三个点、三条横线和省略号，含义各不相同"
    },
    "description": {
      "en": "Three horizontal dots are commonly called meatballs and three vertical dots a kebab; both usually open an overflow or More menu of secondary actions. Three horizontal lines are a hamburger button and normally open navigation, often in a drawer. An ellipsis inside a label such as “Open…” is punctuation, not an overflow icon: it signals that the command needs more input before it can finish.",
      "zh": "横排三个点俗称「肉丸」（meatballs），竖排三个点俗称「烤串」（kebab）；两者通常都打开装次要操作的溢出菜单或「更多」菜单。三条横线是汉堡按钮，通常打开导航，常以抽屉形式出现。「打开…」这类标签里的省略号是标点，不是溢出图标：它表示命令执行前还需要更多输入。"
    },
    "aka": {
      "en": [
        "kebab menu",
        "meatball menu",
        "hamburger menu",
        "overflow menu",
        "more menu",
        "ellipsis button"
      ],
      "zh": [
        "烤串菜单",
        "肉丸菜单",
        "汉堡菜单",
        "溢出菜单",
        "更多菜单",
        "省略号按钮"
      ]
    },
    "fuzzy": {
      "en": [
        "the three dots menu",
        "the horizontal meatballs button",
        "the vertical kebab dots",
        "the three lines menu icon",
        "the three dots after Open",
        "why does this button end in dots",
        "the more options icon"
      ],
      "zh": [
        "三个点的菜单",
        "横着三个点的「肉丸」按钮",
        "竖着三个点的「烤串」",
        "三条横线的菜单图标",
        "「打开」后面的三个点",
        "这个按钮为什么以点结尾",
        "更多选项的图标"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<button>"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-haspopup=\"menu\""
      },
      {
        "framework": "ARIA",
        "symbol": "aria-expanded=\"true|false\""
      },
      {
        "framework": "CSS",
        "symbol": "text-overflow: ellipsis",
        "note": {
          "en": "unrelated truncation ellipsis",
          "zh": "与此无关的截断省略号"
        }
      }
    ],
    "prompt": {
      "en": "Use the correct three-mark control: a horizontal ellipsis (meatballs) or vertical ellipsis (kebab) button with aria-haspopup=\"menu\" for a contextual Overflow/More menu; a three-line hamburger button with aria-controls for a navigation drawer; or an ellipsis inside a command label such as “Open…” only when the command asks for more input before completing.",
      "zh": "用对这三种标记：横排省略号（meatballs）或竖排省略号（kebab）按钮配 aria-haspopup=\"menu\"，用于当前项的溢出／更多菜单；三条横线的汉堡按钮配 aria-controls，用于打开导航抽屉；命令标签（如 “Open…”）里的省略号只在该命令执行前还需要更多输入时使用。"
    },
    "debugPrompt": {
      "en": "Debug my three-dots menu (kebab/meatballs, menu button). Rule out: the icon-only button missing an aria-label; the menu staying open after an item is chosen; outside-click and Escape not closing it; a hit target well under 24px so taps miss on mobile. The symptom:",
      "zh": "调试我的三点菜单（kebab/meatballs、菜单按钮）。排除以下可能：纯图标按钮缺少 aria-label；选中菜单项后菜单不关；点外部和按 Escape 都关不掉；点击热区远小于 24px，移动端总点不中。症状是："
    },
    "parts": [
      {
        "id": "meatballs",
        "name": {
          "en": "Horizontal dots (meatballs / More)",
          "zh": "横排三点（肉丸／更多）"
        },
        "api": "button[aria-haspopup=\"menu\"]",
        "description": {
          "en": "Three horizontal dots are nicknamed meatballs and usually open an overflow or More menu for the current item or area.",
          "zh": "横排三个点昵称「肉丸」，通常打开当前项目或区域的溢出／更多菜单。"
        },
        "prompt": {
          "en": "a horizontal-dots meatball button (button[aria-haspopup=\"menu\"]): three dots in one row opening the contextual Overflow or More menu",
          "zh": "横排三点的「肉丸」按钮（button[aria-haspopup=\"menu\"]）：一排三个点，打开当前上下文的溢出或更多菜单"
        }
      },
      {
        "id": "kebab",
        "name": {
          "en": "Vertical dots (kebab menu)",
          "zh": "竖排三点（烤串菜单）"
        },
        "api": "button[aria-haspopup=\"menu\"]",
        "description": {
          "en": "Three vertical dots are nicknamed a kebab and usually expose the same kind of secondary-actions menu.",
          "zh": "竖排三个点昵称「烤串」，通常打开同一类次要操作菜单。"
        },
        "prompt": {
          "en": "a vertical-dots kebab menu button (button[aria-haspopup=\"menu\"]): three stacked dots opening an overflow menu of secondary actions",
          "zh": "竖排三点的「烤串」菜单按钮（button[aria-haspopup=\"menu\"]）：叠在一起的三个点，打开次要操作的溢出菜单"
        }
      },
      {
        "id": "hamburger",
        "name": {
          "en": "Three lines (hamburger menu)",
          "zh": "三条横线（汉堡菜单）"
        },
        "api": "button[aria-controls]",
        "description": {
          "en": "Three horizontal lines are a hamburger button; unlike overflow dots, it normally opens the site's main navigation in a drawer.",
          "zh": "三条横线是汉堡按钮；和溢出圆点不同，它通常以抽屉形式打开站点主导航。"
        },
        "prompt": {
          "en": "a three-line hamburger menu button (button[aria-controls]): the navigation trigger that opens a side drawer, not an overflow actions menu",
          "zh": "三条横线的汉堡菜单按钮（button[aria-controls]）：打开侧边抽屉的导航触发器，不是溢出操作菜单"
        }
      },
      {
        "id": "command-ellipsis",
        "name": {
          "en": "Command ellipsis",
          "zh": "命令省略号"
        },
        "api": "<button>Open…</button>",
        "description": {
          "en": "The ellipsis in “Open…” means the command will ask for more input before it completes; the dots are part of the label.",
          "zh": "「打开…」里的省略号表示命令完成前还会要求更多输入；这些点是标签的一部分。"
        },
        "prompt": {
          "en": "a command ellipsis in the label (<button>Open…</button>): the single ellipsis character means more input is required before the command completes, not that the button opens an overflow menu",
          "zh": "标签里的命令省略号（<button>Open…</button>）：单个省略号字符表示命令完成前需要更多输入，而不是按钮会打开溢出菜单"
        }
      }
    ],
    "related": [
      "truncation",
      "popover-dropdown-tooltip",
      "dialog-drawer-sheet",
      "context-menu",
      "scrim",
      "hamburger-menu"
    ],
    "demo": "web/three-dots"
  },
  {
    "slug": "menu-bar",
    "platform": "macos",
    "name": {
      "en": "Menu Bar",
      "zh": "菜单栏"
    },
    "tagline": {
      "en": "The strip along the top of the Mac screen — every part, labeled",
      "zh": "Mac 屏幕顶部那条横条——每个部件都标上名字"
    },
    "description": {
      "en": "The menu bar is the translucent strip across the top of the Mac screen. On the left are the system-owned Apple menu followed by the frontmost app’s main menu; the right side holds menu bar extras, followed by system status items and the clock. Every piece below has its own real name; hover a number to see exactly which part it names.",
      "zh": "菜单栏是 Mac 屏幕顶部那条半透明的横条。左侧是系统拥有的苹果菜单，接着是最前台应用的主菜单；右侧是菜单栏附加项，然后是系统状态项和时钟。下面每一块都有自己的正式名字；把指针悬停在数字上，就能看到它指的到底是哪个部件。"
    },
    "aka": {
      "en": [
        "menubar",
        "system menu bar",
        "top bar"
      ],
      "zh": [
        "菜单栏",
        "系统菜单栏",
        "顶部横条"
      ]
    },
    "fuzzy": {
      "en": [
        "the bar at the top of the mac screen",
        "the strip with the apple logo and the clock",
        "top bar on mac with app menus",
        "where the wifi and battery icons live",
        "the thing that shows File Edit View at the top"
      ],
      "zh": [
        "Mac 屏幕顶部那条横条",
        "有苹果 logo 和时钟的那条",
        "Mac 顶部带应用菜单的那条",
        "Wi-Fi 和电池图标待的地方",
        "顶部显示「文件、编辑、显示」的那个东西"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSApp.mainMenu",
        "note": {
          "en": "the app's menus on the left",
          "zh": "左侧的应用菜单"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSStatusBar.system",
        "note": {
          "en": "the icon area on the right",
          "zh": "右侧的图标区域"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "MenuBarExtra",
        "note": {
          "en": "one right-side icon, macOS 13+",
          "zh": "右侧单个图标，macOS 13+"
        }
      }
    ],
    "prompt": {
      "en": "Work on the macOS menu bar: the app's main menu (NSApp.mainMenu) sits on the left after the Apple menu; menu bar extras (NSStatusItem in NSStatusBar.system) sit on the right before the clock. Use the exact part names: status item, its highlighted state, NSMenu, NSMenuItem, separator item.",
      "zh": "处理 macOS 菜单栏：应用主菜单（NSApp.mainMenu）在左侧，跟在苹果菜单后面；菜单栏附加项（NSStatusBar.system 里的 NSStatusItem）在右侧、时钟之前。用精确的部件名称：status item、它的 highlighted state、NSMenu、NSMenuItem、separator item。"
    },
    "debugPrompt": {
      "en": "Debug my macOS menu bar (NSMenu main menu, NSMenuItem). Rule out: items permanently greyed because their action has no target and nothing in the responder chain implements it; automatic enabling turned off (autoenablesItems) without manual validation; keyboard shortcuts defined but never firing because the item is disabled at validation time; the app menu title coming from the bundle display name, not from code. The symptom:",
      "zh": "调试我的 macOS 菜单栏（NSMenu 主菜单、NSMenuItem）。排除以下可能：菜单项永远变灰，因为 action 没有 target，响应链里也没人实现它；关掉了自动启用（autoenablesItems）却没做手动校验；快捷键定义了但从不触发，因为校验时该项是禁用状态；应用菜单的标题来自 bundle 显示名而不是代码。症状是："
    },
    "parts": [
      {
        "id": "app-menus",
        "name": {
          "en": "App menus (main menu)",
          "zh": "应用菜单（主菜单）"
        },
        "api": "NSApp.mainMenu",
        "description": {
          "en": "“The File Edit View menus at the top” have a real name: the app's main menu.",
          "zh": "「顶部那排「文件、编辑、显示」菜单」有正式名字：应用的主菜单。"
        },
        "prompt": {
          "en": "the app's main menu in the macOS menu bar (NSApp.mainMenu): the bold app-name menu followed by File, Edit, View",
          "zh": "macOS 菜单栏里的应用主菜单（NSApp.mainMenu）：粗体的应用名菜单，后面跟着 File、Edit、View"
        }
      },
      {
        "id": "menu-bar-extra",
        "name": {
          "en": "Menu bar extra (status item)",
          "zh": "菜单栏附加项（status item）"
        },
        "api": "NSStatusItem",
        "description": {
          "en": "“The little icon near the clock” is a status item in NSStatusBar.system; SwiftUI calls it MenuBarExtra.",
          "zh": "「时钟旁边的小图标」是 NSStatusBar.system 里的一个 status item；SwiftUI 叫它 MenuBarExtra。"
        },
        "prompt": {
          "en": "a menu bar extra — an NSStatusItem on the right side of the macOS menu bar (SwiftUI: MenuBarExtra)",
          "zh": "一个菜单栏附加项——macOS 菜单栏右侧的 NSStatusItem（SwiftUI：MenuBarExtra）"
        }
      },
      {
        "id": "template-icon",
        "name": {
          "en": "Template icon",
          "zh": "模板图标"
        },
        "api": "NSImage.isTemplate",
        "description": {
          "en": "The monochrome glyph that recolors itself for light/dark menu bars — a template image, usually an SF Symbol.",
          "zh": "那个会随浅色／深色菜单栏自动变色的单色图形——一张 template image，通常用 SF Symbol。"
        },
        "prompt": {
          "en": "the status item's icon must be a template image (NSImage.isTemplate = true, ideally an SF Symbol) so macOS recolors it automatically for light and dark menu bars",
          "zh": "status item 的图标必须是 template image（NSImage.isTemplate = true，最好用 SF Symbol），这样 macOS 会为浅色和深色菜单栏自动重新着色"
        }
      },
      {
        "id": "highlighted-state",
        "name": {
          "en": "Highlighted state",
          "zh": "高亮状态"
        },
        "api": "NSStatusBarButton.isHighlighted",
        "description": {
          "en": "The pale rounded pill behind the icon while its menu or popover is open — the hardest-to-describe pixel on this page.",
          "zh": "菜单或弹出框打开时，图标背后那片浅色圆角底衬——本页最难描述的像素。"
        },
        "prompt": {
          "en": "the status item's highlighted state: the pale rounded background behind the menu bar icon while its menu is open (NSStatusBarButton.isHighlighted)",
          "zh": "status item 的高亮状态：菜单打开时菜单栏图标背后的浅色圆角背景（NSStatusBarButton.isHighlighted）"
        }
      },
      {
        "id": "menu",
        "name": {
          "en": "Menu",
          "zh": "菜单"
        },
        "api": "NSMenu",
        "description": {
          "en": "“The dropdown” from a menu bar icon is an NSMenu — translucent, rounded, vibrancy-backed.",
          "zh": "从菜单栏图标拉下的「那个下拉框」是一个 NSMenu——半透明、圆角、带 vibrancy 底。"
        },
        "prompt": {
          "en": "the NSMenu dropdown attached to the status item",
          "zh": "挂在 status item 上的 NSMenu 下拉菜单"
        }
      },
      {
        "id": "menu-item",
        "name": {
          "en": "Selection highlight (menu item)",
          "zh": "选中高亮（菜单项）"
        },
        "api": "NSMenuItem",
        "description": {
          "en": "“The blue bar when you hover an option”: the menu item's selection highlight, tinted with the system accent color.",
          "zh": "「悬停选项时那条蓝色横条」：菜单项的选中高亮，用系统强调色着色。"
        },
        "prompt": {
          "en": "the menu item's selection highlight — the accent-colored rounded bar behind an NSMenuItem while it's hovered/selected",
          "zh": "菜单项的选中高亮——NSMenuItem 悬停／选中时背后那条强调色圆角条"
        }
      },
      {
        "id": "separator",
        "name": {
          "en": "Separator item",
          "zh": "分隔线项"
        },
        "api": "NSMenuItem.separator()",
        "description": {
          "en": "“The little line between options” is a separator item.",
          "zh": "「选项之间那条小细线」就是分隔线项。"
        },
        "prompt": {
          "en": "a separator item (NSMenuItem.separator()) dividing the menu into groups",
          "zh": "一个分隔线项（NSMenuItem.separator()），把菜单分成若干组"
        }
      },
      {
        "id": "key-equivalent",
        "name": {
          "en": "Key equivalent",
          "zh": "快捷键（key equivalent）"
        },
        "api": "NSMenuItem.keyEquivalent",
        "description": {
          "en": "“The ⌘Q text on the right side of a menu option” is the item's key equivalent.",
          "zh": "「菜单项右侧的 ⌘Q 字样」就是该项的 key equivalent。"
        },
        "prompt": {
          "en": "the keyboard shortcut shown at the right edge of the menu item (its key equivalent, NSMenuItem.keyEquivalent, e.g. ⌘Q)",
          "zh": "显示在菜单项右缘的键盘快捷键（即它的 key equivalent，NSMenuItem.keyEquivalent，例如 ⌘Q）"
        }
      }
    ],
    "related": [
      "menu-bar-extra",
      "context-menu",
      "vibrancy"
    ],
    "demo": "macos/menu-bar"
  },
  {
    "slug": "context-menu",
    "platform": "macos",
    "name": {
      "en": "Context Menu",
      "zh": "上下文菜单"
    },
    "tagline": {
      "en": "The menu opened at the pointer by right-clicking or Control-clicking an item",
      "zh": "在项目上右键点按或 Control-点按，在指针处打开的菜单"
    },
    "description": {
      "en": "A context menu exposes actions relevant to the object under the pointer and opens from a secondary click or Control-click. It appears near that click and is made from standard menu items, separators, keyboard equivalents, and submenus. A dropdown menu has a visible control that opens it with a primary click, while a context menu is invoked directly from the content.",
      "zh": "上下文菜单展示与指针对象相关的操作，由次要点按或 Control-点按打开。它出现在点击位置附近，由标准菜单项、分隔线、快捷键和子菜单组成。下拉菜单有一个可见控件、用主键点击打开；上下文菜单则直接从内容上触发。"
    },
    "aka": {
      "en": [
        "contextual menu",
        "right-click menu",
        "shortcut menu"
      ],
      "zh": [
        "上下文相关菜单",
        "右键菜单",
        "快捷菜单"
      ]
    },
    "fuzzy": {
      "en": [
        "the menu that appears when you right click",
        "control click options for the thing under the pointer",
        "small action menu beside the selected item",
        "copy rename delete menu under the mouse",
        "menu that opens from a secondary click"
      ],
      "zh": [
        "右键点一下冒出来的菜单",
        "Control-点按指针下那个东西出来的选项",
        "选中项旁边的小操作菜单",
        "鼠标底下的「拷贝、重命名、删除」菜单",
        "次要点按打开的菜单"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSMenu"
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.contextMenu(menuItems:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSView.menu",
        "note": {
          "en": "the contextual menu associated with a view",
          "zh": "与某个视图关联的上下文菜单"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSMenuItem"
      }
    ],
    "prompt": {
      "en": "Add a Context Menu using NSMenu on the target NSView (SwiftUI: View.contextMenu), opened by right-click or Control-click at the item under the pointer. Populate it with actions specific to that item; do not turn it into a primary-click dropdown anchored to a button.",
      "zh": "用 NSMenu 给目标 NSView 加上下文菜单（SwiftUI：View.contextMenu），通过右键点按或 Control-点按指针下的项目来打开。菜单里放针对该项目的操作；别把它做成锚定在按钮上、主键点击打开的下拉菜单。"
    },
    "debugPrompt": {
      "en": "Debug my macOS context menu (NSMenu, menu(for:), SwiftUI .contextMenu). Rule out: the menu built once and gone stale — implement menuNeedsUpdate/menuWillOpen; items greyed out because their target is nil and nothing in the responder chain implements the action; right-click, control-click and two-finger tap taking different code paths; a SwiftUI .contextMenu swallowing plain clicks on the row. The symptom:",
      "zh": "调试我的 macOS 上下文菜单（NSMenu、menu(for:)、SwiftUI .contextMenu）。排除以下可能：菜单只构建了一次、内容过期——实现 menuNeedsUpdate/menuWillOpen；菜单项变灰，因为 target 是 nil 且响应链里没人实现该 action；右键点按、Control-点按和双指轻点走了不同代码路径；SwiftUI .contextMenu 吞掉了行上的普通点击。症状是："
    },
    "parts": [
      {
        "id": "selection-highlight",
        "name": {
          "en": "Selection highlight",
          "zh": "选中高亮"
        },
        "api": "NSMenuItem",
        "description": {
          "en": "“The blue bar behind the option under the pointer” is the menu item's selection highlight.",
          "zh": "「指针下那个选项背后的蓝色条」就是菜单项的选中高亮。"
        },
        "prompt": {
          "en": "the native selection highlight behind the active NSMenuItem in a contextual NSMenu",
          "zh": "上下文 NSMenu 中当前 NSMenuItem 背后的原生选中高亮"
        }
      },
      {
        "id": "separator-item",
        "name": {
          "en": "Separator item",
          "zh": "分隔线项"
        },
        "api": "NSMenuItem.separator()",
        "description": {
          "en": "“The little line between groups of right-click options” is a separator item.",
          "zh": "「右键选项分组之间那条小细线」就是分隔线项。"
        },
        "prompt": {
          "en": "an NSMenuItem.separator() dividing related groups in the context menu",
          "zh": "一个 NSMenuItem.separator()，把上下文菜单里的相关项分组隔开"
        }
      },
      {
        "id": "key-equivalent",
        "name": {
          "en": "Key equivalent",
          "zh": "快捷键（key equivalent）"
        },
        "api": "NSMenuItem.keyEquivalent",
        "description": {
          "en": "“The keyboard shortcut text on the right” is the item's key equivalent.",
          "zh": "「右侧的快捷键文字」就是该项的 key equivalent。"
        },
        "prompt": {
          "en": "the NSMenuItem.keyEquivalent aligned at the trailing edge of a context-menu item, such as ⌘C",
          "zh": "NSMenuItem.keyEquivalent，对齐在上下文菜单项的后缘，例如 ⌘C"
        }
      },
      {
        "id": "submenu-indicator",
        "name": {
          "en": "Submenu indicator",
          "zh": "子菜单指示箭头"
        },
        "api": "NSMenuItem.submenu",
        "description": {
          "en": "“The sideways arrow that opens more options” is the submenu indicator.",
          "zh": "「那个朝旁边、能打开更多选项的箭头」就是子菜单指示箭头。"
        },
        "prompt": {
          "en": "the trailing submenu indicator on an NSMenuItem whose submenu opens beside the context menu",
          "zh": "NSMenuItem 后缘的子菜单指示箭头，其子菜单在上下文菜单旁边打开"
        }
      }
    ],
    "related": [
      "popover",
      "popup-pulldown-combo",
      "menu-bar-extra",
      "focus-ring"
    ],
    "demo": "macos/context-menu"
  },
  {
    "slug": "disclosure-triangle",
    "platform": "macos",
    "name": {
      "en": "Disclosure Triangle",
      "zh": "披露三角"
    },
    "tagline": {
      "en": "The small rotating control that reveals or hides nested content",
      "zh": "那个会旋转的小控件，用来显示或隐藏嵌套内容"
    },
    "description": {
      "en": "A disclosure triangle is the compact indicator beside an outline row or section label that reveals nested content. It points sideways while collapsed and rotates downward when expanded. NSOutlineView supplies disclosure controls for hierarchical rows, while DisclosureGroup provides the same expand-and-collapse pattern in SwiftUI.",
      "zh": "披露三角是大纲行或区块标签旁边的小巧指示器，用来显示嵌套内容。折叠时指向侧面，展开后转向下方。NSOutlineView 为层级行提供披露控件，DisclosureGroup 在 SwiftUI 里提供同样的展开／折叠模式。"
    },
    "aka": {
      "en": [
        "disclosure control",
        "outline disclosure button",
        "expand-collapse triangle"
      ],
      "zh": [
        "披露控件",
        "大纲披露按钮",
        "展开／折叠三角"
      ]
    },
    "fuzzy": {
      "en": [
        "the tiny triangle that opens a folder row",
        "little arrow that rotates when a section expands",
        "chevron beside a row with children",
        "small expand collapse arrow in an outline",
        "triangle next to a heading that shows more content"
      ],
      "zh": [
        "点开文件夹行的小三角",
        "区块展开时会转的小箭头",
        "带子级的行旁边的 chevron",
        "大纲里那个展开／收起的小箭头",
        "标题旁边那个显示更多内容的三角"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSOutlineView"
      },
      {
        "framework": "SwiftUI",
        "symbol": "DisclosureGroup"
      },
      {
        "framework": "AppKit",
        "symbol": "NSButton.BezelStyle.disclosure",
        "note": {
          "en": "a standalone disclosure button style",
          "zh": "一种独立的披露按钮样式"
        }
      }
    ],
    "prompt": {
      "en": "Use a native Disclosure Triangle for expandable rows: NSOutlineView for an outline hierarchy or SwiftUI DisclosureGroup for a standalone section. The small indicator must rotate between collapsed and expanded states while the row's children appear directly beneath it.",
      "zh": "可展开的行用原生披露三角：大纲层级用 NSOutlineView，独立区块用 SwiftUI DisclosureGroup。小指示器必须在折叠和展开状态之间旋转，同时该行的子级直接出现在它下方。"
    },
    "debugPrompt": {
      "en": "Debug my macOS disclosure triangle (NSButton .disclosure bezel, SwiftUI DisclosureGroup). Rule out: the isExpanded binding not actually driving the revealed content; several groups sharing one binding so they all toggle together; the triangle animating the wrong direction because state and rotation are set separately; baseline misalignment between the triangle and its label. The symptom:",
      "zh": "调试我的 macOS 披露三角（NSButton .disclosure bezel、SwiftUI DisclosureGroup）。排除以下可能：isExpanded 绑定没有真正驱动显示的内容；多个 DisclosureGroup 共用一个绑定，结果一起开合；状态和旋转分开设置，三角动画方向错了；三角和标签基线没对齐。症状是："
    },
    "parts": [
      {
        "id": "disclosure-indicator",
        "name": {
          "en": "Disclosure indicator",
          "zh": "披露指示器"
        },
        "api": "NSButton.BezelStyle.disclosure",
        "description": {
          "en": "“The tiny triangle beside the row” is the disclosure indicator.",
          "zh": "「行旁边那个小三角」就是披露指示器。"
        },
        "prompt": {
          "en": "a native disclosure indicator using NSButton.BezelStyle.disclosure beside the expandable label",
          "zh": "可展开标签旁边的原生披露指示器，使用 NSButton.BezelStyle.disclosure"
        }
      },
      {
        "id": "collapsed-state",
        "name": {
          "en": "Collapsed state",
          "zh": "折叠状态"
        },
        "api": "DisclosureGroup.isExpanded",
        "description": {
          "en": "“The arrow pointing sideways before it opens” is the collapsed state.",
          "zh": "「打开前朝侧面的箭头」就是折叠状态。"
        },
        "prompt": {
          "en": "the collapsed DisclosureGroup.isExpanded = false state, with the indicator pointing sideways and children hidden",
          "zh": "折叠状态（DisclosureGroup.isExpanded = false）：指示器指向侧面，子级隐藏"
        }
      },
      {
        "id": "expanded-state",
        "name": {
          "en": "Expanded state",
          "zh": "展开状态"
        },
        "api": "DisclosureGroup.isExpanded",
        "description": {
          "en": "“The arrow rotated down after it opens” is the expanded state.",
          "zh": "「打开后转向下方的箭头」就是展开状态。"
        },
        "prompt": {
          "en": "the expanded DisclosureGroup.isExpanded = true state, with the disclosure indicator pointing down above the revealed children",
          "zh": "展开状态（DisclosureGroup.isExpanded = true）：披露指示器指向下方，露出的子级在它下面"
        }
      }
    ],
    "related": [
      "sidebar",
      "accordion",
      "context-menu"
    ],
    "demo": "macos/disclosure-triangle"
  },
  {
    "slug": "dock-badge",
    "platform": "macos",
    "name": {
      "en": "Dock Badge",
      "zh": "Dock 角标"
    },
    "tagline": {
      "en": "The red count or status label overlaid on an app's Dock icon",
      "zh": "叠在应用 Dock 图标上的红色数量或状态标签"
    },
    "description": {
      "en": "A Dock badge is the small red label overlaid on an application's Dock icon, usually showing an unread or pending count. The label belongs to the app's NSDockTile and can also contain short status text. Requesting user attention makes the Dock icon bounce and is a separate, more interruptive signal that should be used sparingly.",
      "zh": "Dock 角标是叠在应用 Dock 图标上的红色小标签，通常显示未读或待处理的数量。标签属于应用的 NSDockTile，也可以放简短的状态文字。请求用户注意会让 Dock 图标弹跳，那是另一种打断性更强的信号，要省着用。"
    },
    "aka": {
      "en": [
        "Dock tile badge",
        "app icon badge",
        "notification badge"
      ],
      "zh": [
        "Dock 磁贴角标",
        "应用图标角标",
        "通知角标"
      ]
    },
    "fuzzy": {
      "en": [
        "the red number bubble on a dock icon",
        "unread count on the app icon in the dock",
        "little red label in the corner of a mac app icon",
        "number badge showing pending notifications",
        "the red dot or number on a dock icon"
      ],
      "zh": [
        "Dock 图标上的红色数字气泡",
        "Dock 里应用图标上的未读数",
        "Mac 应用图标角上的小红标",
        "显示待处理通知数的数字角标",
        "Dock 图标上的红点或数字"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSDockTile.badgeLabel"
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.dockTile"
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.requestUserAttention(_:)",
        "note": {
          "en": "bounces the Dock icon; separate from the badge",
          "zh": "让 Dock 图标弹跳；和角标是两回事"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.RequestUserAttentionType"
      }
    ],
    "prompt": {
      "en": "Show a Dock Badge by assigning the count to NSApp.dockTile.badgeLabel, clearing the label when no count remains. If stronger attention is warranted, call NSApplication.requestUserAttention(_:) separately to bounce the Dock icon; the bounce is not the badge itself.",
      "zh": "把数量赋给 NSApp.dockTile.badgeLabel 来显示 Dock 角标，数量清零时清空 label。如果需要更强的提醒，单独调用 NSApplication.requestUserAttention(_:) 让 Dock 图标弹跳；弹跳不是角标本体。"
    },
    "debugPrompt": {
      "en": "Debug my macOS Dock badge (NSDockTile.badgeLabel, NSApp.dockTile). Rule out: clearing with the string zero instead of nil or empty so a 0 stays visible; setting the badge from a background thread; expecting the badge to survive quit — it lives only while the app runs (UNUserNotificationCenter badge APIs persist); long strings truncating in the tile. The symptom:",
      "zh": "调试我的 macOS Dock 角标（NSDockTile.badgeLabel、NSApp.dockTile）。排除以下可能：用字符串「0」而不是 nil 或空串来清除，导致 0 一直显示；在后台线程设置角标；指望角标在退出后保留——它只在应用运行期间存在（UNUserNotificationCenter 的 badge API 才能持久）；长字符串在图标上被截断。症状是："
    },
    "parts": [
      {
        "id": "badge-label",
        "name": {
          "en": "Badge label",
          "zh": "角标标签"
        },
        "api": "NSDockTile.badgeLabel",
        "description": {
          "en": "“The red number bubble on the app icon” is the Dock tile's badge label.",
          "zh": "「应用图标上的红色数字气泡」就是 Dock tile 的角标标签。"
        },
        "prompt": {
          "en": "the NSDockTile.badgeLabel as a compact red count badge over the Dock icon's upper-right corner",
          "zh": "NSDockTile.badgeLabel：叠在 Dock 图标右上角的紧凑红色数字角标"
        }
      },
      {
        "id": "attention-bounce",
        "name": {
          "en": "Attention bounce",
          "zh": "提醒弹跳"
        },
        "api": "NSApplication.requestUserAttention(_:)",
        "description": {
          "en": "“The app icon jumping in the Dock” is an attention bounce, not part of the badge.",
          "zh": "「应用图标在 Dock 里跳」是提醒弹跳，不属于角标。"
        },
        "prompt": {
          "en": "an NSApplication.requestUserAttention(_:) Dock-icon bounce used separately from NSDockTile.badgeLabel",
          "zh": "用 NSApplication.requestUserAttention(_:) 触发的 Dock 图标弹跳，与 NSDockTile.badgeLabel 分开使用"
        }
      }
    ],
    "related": [
      "badge-chip-pill",
      "menu-bar-extra",
      "toast"
    ],
    "demo": "macos/dock-badge"
  },
  {
    "slug": "focus-ring",
    "platform": "macos",
    "name": {
      "en": "Focus Ring",
      "zh": "焦点环"
    },
    "tagline": {
      "en": "The accent-colored glow that identifies the control receiving keyboard input",
      "zh": "标示当前接收键盘输入的控件的强调色光晕"
    },
    "description": {
      "en": "A focus ring is the accent-colored glow, commonly blue, around the control that currently receives keyboard interaction. Text fields normally accept focus, while Full Keyboard Access allows Tab to move focus through additional controls such as buttons and pop-up buttons. AppKit draws the ring for the first responder according to its focusRingType, and custom layouts must leave enough space for that ring to remain visible.",
      "zh": "焦点环是围绕在当前接收键盘交互控件周围的强调色光晕，通常为蓝色。文本框默认接受焦点；开启全键盘控制（Full Keyboard Access）后，Tab 键还能在按钮、弹出式按钮等更多控件之间移动焦点。AppKit 会根据第一响应者的 focusRingType 为其绘制焦点环，自定义布局必须留出足够空间，保证焦点环完整可见。"
    },
    "aka": {
      "en": [
        "keyboard focus indicator",
        "focus halo",
        "first responder ring"
      ],
      "zh": [
        "键盘焦点指示器",
        "焦点光晕",
        "第一响应者光圈"
      ]
    },
    "fuzzy": {
      "en": [
        "the blue glow around the selected control",
        "outline that appears when you tab to a button",
        "blue border around the field that has keyboard focus",
        "highlight showing where keyboard input will go",
        "ring around buttons when full keyboard access is on"
      ],
      "zh": [
        "选中控件周围那圈蓝色光晕",
        "按 Tab 切到按钮时出现的描边",
        "有键盘焦点的输入框外那圈蓝边",
        "标示键盘输入会去向何处的高亮",
        "开了全键盘控制后按钮周围的圈"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSView.focusRingType"
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.makeFirstResponder(_:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSFocusRingType"
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.focusable(_:)"
      },
      {
        "framework": "SwiftUI",
        "symbol": "FocusState"
      }
    ],
    "prompt": {
      "en": "Preserve the native Focus Ring around the first responder. In AppKit, make the control eligible for first-responder status, move focus with NSWindow.makeFirstResponder(_:), and keep NSView.focusRingType at .default; in SwiftUI, use View.focusable(_:) with FocusState. Leave enough space for the standard macOS accent-colored ring and do not replace it with a custom border.",
      "zh": "保留第一响应者周围的原生焦点环。在 AppKit 中，让控件有资格成为第一响应者，用 NSWindow.makeFirstResponder(_:) 移动焦点，并保持 NSView.focusRingType 为 .default；在 SwiftUI 中，使用 View.focusable(_:) 配合 FocusState。为标准的 macOS 强调色焦点环留出足够空间，不要用自定义边框替代它。"
    },
    "debugPrompt": {
      "en": "Debug my macOS focus ring (NSView.focusRingType, SwiftUI .focusable/.focusEffectDisabled). Rule out: Full Keyboard Access (AppleKeyboardUIMode) on the user's Mac making every first control grab focus and show a ring; focusRingType = .none silenced by a custom drawFocusRingMask; the ring clipped by an ancestor that clips to bounds; SwiftUI focus state fighting an explicit makeFirstResponder call. The symptom:",
      "zh": "调试我的 macOS 焦点环（NSView.focusRingType、SwiftUI .focusable/.focusEffectDisabled）。逐一排除：用户 Mac 上的全键盘控制（AppleKeyboardUIMode）让每个首个控件都抢占焦点并显示焦点环；自定义 drawFocusRingMask 配合 focusRingType = .none 把焦点环屏蔽了；焦点环被裁切到边界的祖先视图裁掉；SwiftUI 的焦点状态与显式调用 makeFirstResponder 互相打架。症状是："
    },
    "parts": [
      {
        "id": "first-responder",
        "name": {
          "en": "First responder",
          "zh": "第一响应者"
        },
        "api": "NSWindow.firstResponder",
        "description": {
          "en": "“The control that will get my typing” is the window's first responder.",
          "zh": "“我打字会送到的那个控件”就是窗口的第一响应者。"
        },
        "prompt": {
          "en": "the NSWindow.firstResponder control that currently receives keyboard input",
          "zh": "当前接收键盘输入的 NSWindow.firstResponder 控件"
        }
      }
    ],
    "related": [
      "segmented-control",
      "stepper",
      "traffic-lights",
      "focus-ring-web"
    ],
    "demo": "macos/focus-ring"
  },
  {
    "slug": "inspector",
    "platform": "macos",
    "name": {
      "en": "Inspector",
      "zh": "检查器"
    },
    "tagline": {
      "en": "The right-hand panel for viewing and editing details of the current selection",
      "zh": "右侧用于查看和编辑当前选中项详情的面板"
    },
    "description": {
      "en": "An inspector is a trailing panel that displays properties and controls for the item currently selected in the main content. Apps such as Keynote and Xcode organize formatting, identity, and configuration controls in inspectors so the document remains visible while details change. On macOS 14 and later SwiftUI provides a dedicated inspector modifier; classic AppKit layouts commonly build one as the trailing item of a split view.",
      "zh": "检查器是位于窗口尾侧的面板，用来显示主内容中当前选中项的属性和控件。Keynote、Xcode 这类 App 把格式、标识、配置等控件组织在检查器里，让用户调整细节时文稿始终可见。在 macOS 14 及更高版本中，SwiftUI 提供了专门的 inspector 修饰器；经典 AppKit 布局则通常把它做成拆分视图的尾侧项。"
    },
    "aka": {
      "en": [
        "inspector panel",
        "details sidebar",
        "properties inspector",
        "utility area"
      ],
      "zh": [
        "检查器面板",
        "详情边栏",
        "属性检查器",
        "工具区"
      ]
    },
    "fuzzy": {
      "en": [
        "the properties panel on the right side",
        "right sidebar that changes with the selected item",
        "keynote style format panel",
        "xcode panel showing details for what is selected",
        "collapsible settings column on the right"
      ],
      "zh": [
        "右边那个属性面板",
        "右侧随选中项变化的边栏",
        "Keynote 那种格式面板",
        "Xcode 里显示选中项详情的面板",
        "右侧可折叠的设置栏"
      ]
    },
    "api": [
      {
        "framework": "SwiftUI",
        "symbol": "View.inspector(isPresented:content:)",
        "note": {
          "en": "macOS 14+",
          "zh": "macOS 14+"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.inspectorColumnWidth(min:ideal:max:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewController",
        "note": {
          "en": "common foundation for a classic trailing inspector",
          "zh": "经典尾侧检查器的常用基础"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewItem"
      }
    ],
    "prompt": {
      "en": "Put these selection-specific controls in an Inspector using SwiftUI View.inspector(isPresented:content:) (macOS 14+), as a collapsible right-hand column with a sensible inspectorColumnWidth. The inspector must update with the selected object without replacing the main content.",
      "zh": "用 SwiftUI View.inspector(isPresented:content:)（macOS 14+）把这些随选中项变化的控件放进检查器，做成右侧可折叠的栏，并设置合理的 inspectorColumnWidth。检查器必须跟随选中对象更新内容，而不是替换主内容。"
    },
    "debugPrompt": {
      "en": "Debug my macOS inspector (SwiftUI View.inspector(isPresented:), NSSplitViewItem(inspectorWithViewController:)). Rule out: the inspector auto-presenting as a sheet on narrow windows — that is the built-in adaptive behavior; the toggle binding out of sync because the user can also close it by dragging; min/ideal widths forcing a collapse on window resize; inspector content not tracking the current selection. The symptom:",
      "zh": "调试我的 macOS 检查器（SwiftUI View.inspector(isPresented:)、NSSplitViewItem(inspectorWithViewController:)）。逐一排除：窗口变窄时检查器自动以 sheet 形式弹出——这是内建的自适应行为；开关绑定不同步，因为用户也能拖拽把它关掉；min/ideal 宽度在窗口缩放时强制折叠了它；检查器内容没有跟随当前选中项。症状是："
    },
    "parts": [
      {
        "id": "inspector-column",
        "name": {
          "en": "Inspector column",
          "zh": "检查器栏"
        },
        "api": "View.inspector(isPresented:content:)",
        "description": {
          "en": "“The properties panel on the right” is the inspector column.",
          "zh": "“右边那个属性面板”就是检查器栏。"
        },
        "prompt": {
          "en": "a trailing inspector column created with View.inspector(isPresented:content:), beside rather than over the main content",
          "zh": "用 View.inspector(isPresented:content:) 创建的尾侧检查器栏，位于主内容旁边而不是覆盖其上"
        }
      },
      {
        "id": "section-disclosure",
        "name": {
          "en": "Inspector section disclosure",
          "zh": "检查器分节披露控件"
        },
        "api": "DisclosureGroup",
        "description": {
          "en": "“The little arrow that folds a group of settings” is an inspector section disclosure.",
          "zh": "“能折叠一组设置的小箭头”就是检查器的分节披露控件。"
        },
        "prompt": {
          "en": "a DisclosureGroup section disclosure inside the inspector, with its chevron aligned to the section heading",
          "zh": "检查器内部的 DisclosureGroup 分节披露控件，箭头与分节标题对齐"
        }
      },
      {
        "id": "column-divider",
        "name": {
          "en": "Inspector column divider",
          "zh": "检查器栏分隔线"
        },
        "api": "NSSplitViewItem",
        "description": {
          "en": "“The thin line you drag to resize the properties panel” is the inspector column divider.",
          "zh": "“拖动就能调整属性面板宽度的那条细线”就是检查器栏分隔线。"
        },
        "prompt": {
          "en": "the resizable divider before the trailing NSSplitViewItem inspector column",
          "zh": "尾侧 NSSplitViewItem 检查器栏前面那条可拖拽的分隔线"
        }
      }
    ],
    "related": [
      "sidebar",
      "toolbar",
      "vibrancy",
      "disclosure-triangle"
    ],
    "demo": "macos/inspector"
  },
  {
    "slug": "panel",
    "platform": "macos",
    "name": {
      "en": "Panel (Floating Window / HUD)",
      "zh": "面板（浮动窗口 / HUD）"
    },
    "tagline": {
      "en": "An auxiliary macOS window that floats above related document windows",
      "zh": "悬浮在相关文稿窗口上方的 macOS 辅助窗口"
    },
    "description": {
      "en": "A panel is an auxiliary window for tools, controls, or transient information rather than a primary document. It can float above normal windows, hide when its app becomes inactive, or use a HUD appearance. A non-activating panel can accept appropriate interaction without bringing the entire app forward, which suits command launchers and Spotlight-like surfaces.",
      "zh": "面板是一种辅助窗口，用来承载工具、控件或临时信息，而不是主要文稿。它可以悬浮在普通窗口之上、在 App 失活时自动隐藏，或采用 HUD 外观。不激活面板（non-activating panel）能在不把整个 App 带到前台的情况下接受适当的交互，很适合命令启动器和 Spotlight 风格的界面。"
    },
    "aka": {
      "en": [
        "floating panel",
        "utility panel",
        "HUD window",
        "heads-up display"
      ],
      "zh": [
        "浮动面板",
        "工具面板",
        "HUD 窗口",
        "平视显示（HUD）"
      ]
    },
    "fuzzy": {
      "en": [
        "small utility window that stays above the main window",
        "floating controls palette on mac",
        "dark translucent heads up display window",
        "spotlight style window that does not activate the app",
        "tool window that follows the active document"
      ],
      "zh": [
        "一直浮在主窗口上面的小工具窗口",
        "Mac 上悬浮的控件调板",
        "深色半透明的平视显示窗口",
        "Spotlight 那种不激活 App 的窗口",
        "跟着当前文稿走的工具窗口"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSPanel"
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.StyleMask.nonactivatingPanel",
        "note": {
          "en": "allows a panel that does not activate its app",
          "zh": "让面板显示时不激活所属 App"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.StyleMask.hudWindow",
        "note": {
          "en": "heads-up-display panel appearance",
          "zh": "HUD（平视显示）面板外观"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.Level.floating"
      },
      {
        "framework": "AppKit",
        "symbol": "NSPanel.becomesKeyOnlyIfNeeded"
      }
    ],
    "prompt": {
      "en": "Implement this auxiliary surface as a Panel (Floating Window / HUD) using NSPanel, with NSWindow.Level.floating so it stays above its related document windows. If it should behave like Spotlight, use the nonactivatingPanel style so showing it does not activate the app or steal focus unnecessarily.",
      "zh": "用 NSPanel 把这个辅助界面实现为面板（浮动窗口 / HUD），设置 NSWindow.Level.floating 让它保持在相关文稿窗口上方。如果它应该像 Spotlight 那样工作，就使用 nonactivatingPanel 样式，让显示它时不会激活 App，也不会不必要地抢走焦点。"
    },
    "debugPrompt": {
      "en": "Debug my macOS panel (NSPanel). Rule out: the panel stealing focus from the main window because the nonactivatingPanel style mask is missing; text fields inside refusing input because the panel cannot become key; the panel vanishing on app deactivate via hidesOnDeactivate; a floating window level fighting other always-on-top windows. The symptom:",
      "zh": "调试我的 macOS 面板（NSPanel）。逐一排除：缺少 nonactivatingPanel 样式导致面板从主窗口抢焦点；面板无法成为 key window，导致里面的文本框拒绝输入；hidesOnDeactivate 让面板在 App 失活时消失；浮动窗口层级与其他置顶窗口互相冲突。症状是："
    },
    "parts": [
      {
        "id": "floating-level",
        "name": {
          "en": "Floating window level",
          "zh": "浮动窗口层级"
        },
        "api": "NSWindow.Level.floating",
        "description": {
          "en": "“The utility window that stays above the document” uses a floating window level.",
          "zh": "“一直浮在文稿上面的工具窗口”用的就是浮动窗口层级。"
        },
        "prompt": {
          "en": "an NSPanel at NSWindow.Level.floating, remaining above its related document windows",
          "zh": "一个层级为 NSWindow.Level.floating 的 NSPanel，始终位于相关文稿窗口上方"
        }
      },
      {
        "id": "hud-chrome",
        "name": {
          "en": "HUD chrome",
          "zh": "HUD 窗口外框"
        },
        "api": "NSWindow.StyleMask.hudWindow",
        "description": {
          "en": "“The dark translucent heads-up-display frame” is HUD chrome.",
          "zh": "“深色半透明的 HUD 边框”就是 HUD 窗口外框。"
        },
        "prompt": {
          "en": "the dark translucent NSWindow.StyleMask.hudWindow chrome around an auxiliary NSPanel",
          "zh": "辅助 NSPanel 周围深色半透明的 NSWindow.StyleMask.hudWindow 外框"
        }
      }
    ],
    "related": [
      "sheet",
      "popover",
      "vibrancy",
      "command-palette"
    ],
    "demo": "macos/panel"
  },
  {
    "slug": "popover",
    "platform": "macos",
    "name": {
      "en": "Popover",
      "zh": "弹出框（Popover）"
    },
    "tagline": {
      "en": "A floating bubble whose arrow points back to the control that opened it",
      "zh": "带箭头的浮动气泡，箭头指回打开它的控件"
    },
    "description": {
      "en": "A popover is a lightweight floating bubble for controls or information related to one specific source view. Its arrow identifies the control that opened it, and AppKit chooses an edge that keeps the bubble onscreen. Depending on its behavior, it can close when the user interacts elsewhere or remain open until dismissed explicitly.",
      "zh": "弹出框是一种轻量的浮动气泡，用来展示与某个特定来源视图相关的控件或信息。它的箭头标明是哪个控件打开了它，AppKit 会选择一条边让气泡保持在屏幕内。根据行为设置，它可以在用户点击别处时关闭，也可以一直停留到被显式关闭。"
    },
    "aka": {
      "en": [
        "anchored popover",
        "popover bubble",
        "callout"
      ],
      "zh": [
        "锚定弹出框",
        "弹出气泡",
        "标注气泡"
      ]
    },
    "fuzzy": {
      "en": [
        "the little floating bubble with an arrow",
        "box that points back to the button that opened it",
        "small window attached to a toolbar button",
        "speech bubble panel anchored to a control",
        "floating settings bubble that closes when you click away"
      ],
      "zh": [
        "带箭头的小浮动气泡",
        "箭头指回打开它的按钮的框",
        "挂在工具栏按钮上的小窗口",
        "锚在控件上的对话气泡面板",
        "点别处就关掉的浮动设置气泡"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSPopover"
      },
      {
        "framework": "AppKit",
        "symbol": "NSPopover.show(relativeTo:of:preferredEdge:)",
        "note": {
          "en": "positions the popover and its anchor arrow",
          "zh": "定位弹出框及其锚点箭头"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.popover(isPresented:attachmentAnchor:arrowEdge:content:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSPopover.Behavior"
      }
    ],
    "prompt": {
      "en": "Present this as a Popover using NSPopover (SwiftUI: View.popover), with a visible anchor arrow aimed at the exact control that opened it. It should remain visually attached to that control and dismiss with native popover behavior.",
      "zh": "用 NSPopover（SwiftUI：View.popover）把它呈现为弹出框，显示指向打开它的那个控件的锚点箭头。它要在视觉上始终附着于该控件，并按原生弹出框的行为关闭。"
    },
    "debugPrompt": {
      "en": "Debug my macOS popover (NSPopover, SwiftUI View.popover). Rule out: transient behavior closing it on the first click inside custom content that does not accept first responder; the arrow anchored to a stale positioning rect after layout changes; the popover detaching into a floating window when dragged (detachable delegate); SwiftUI popovers presenting as sheets in compact contexts. The symptom:",
      "zh": "调试我的 macOS 弹出框（NSPopover、SwiftUI View.popover）。逐一排除：transient 行为导致在自定义内容里点第一下就关闭——因为内容不接受第一响应者；布局变化后箭头还锚在过期的定位矩形上；弹出框被拖动时分离成浮动窗口（detachable 代理）；SwiftUI 弹出框在紧凑上下文中以 sheet 形式呈现。症状是："
    },
    "parts": [
      {
        "id": "anchor-arrow",
        "name": {
          "en": "Anchor arrow",
          "zh": "锚点箭头"
        },
        "api": "NSPopover.show(relativeTo:of:preferredEdge:)",
        "description": {
          "en": "“The little point on the bubble aimed at the button” is the anchor arrow.",
          "zh": "“气泡上指着按钮的小尖角”就是锚点箭头。"
        },
        "prompt": {
          "en": "the NSPopover anchor arrow from show(relativeTo:of:preferredEdge:), pointing precisely at its source control",
          "zh": "由 show(relativeTo:of:preferredEdge:) 生成的 NSPopover 锚点箭头，精确指向来源控件"
        }
      },
      {
        "id": "positioning-rect",
        "name": {
          "en": "Positioning rect",
          "zh": "定位矩形"
        },
        "api": "NSPopover.show(relativeTo:of:preferredEdge:)",
        "description": {
          "en": "“The exact bit of the button the bubble attaches to” is the positioning rect.",
          "zh": "“气泡贴住按钮的那一小块位置”就是定位矩形。"
        },
        "prompt": {
          "en": "the positioning rect passed to NSPopover.show(relativeTo:of:preferredEdge:), anchoring the bubble to the intended part of the source view",
          "zh": "传给 NSPopover.show(relativeTo:of:preferredEdge:) 的定位矩形，把气泡锚定在来源视图的预期位置上"
        }
      }
    ],
    "related": [
      "menu-bar-extra",
      "context-menu",
      "vibrancy",
      "popover-dropdown-tooltip"
    ],
    "demo": "macos/popover"
  },
  {
    "slug": "popup-pulldown-combo",
    "platform": "macos",
    "name": {
      "en": "Pop-Up Button vs. Pull-Down Button vs. Combo Box",
      "zh": "弹出式按钮 vs. 下拉式按钮 vs. 组合框"
    },
    "tagline": {
      "en": "Three similar-looking macOS controls for choosing a value or invoking a menu action",
      "zh": "三个外观相似的 macOS 控件，分别用于选取一个值或触发菜单操作"
    },
    "description": {
      "en": "A pop-up button represents a selection: its closed label shows the current choice, and opening it presents the available values. A pull-down button uses NSPopUpButton with pullsDown set to true and presents commands from a fixed button label rather than communicating a persistent selection. A combo box is a text field plus a drop-down list, so the user can type a value instead of being limited to the listed choices.",
      "zh": "弹出式按钮表示一次选择：关闭时按钮标签显示当前选项，点开后列出所有可选值。下拉式按钮是把 pullsDown 设为 true 的 NSPopUpButton，按钮标签固定不变，弹出的是一组命令，不表示持续的选中状态。组合框则是文本框加下拉列表，用户可以直接输入值，不必局限于列表中的选项。"
    },
    "aka": {
      "en": [
        "pop-up menu button",
        "pull-down menu button",
        "combo box",
        "menu picker"
      ],
      "zh": [
        "弹出菜单按钮",
        "下拉菜单按钮",
        "组合框",
        "菜单选择器"
      ]
    },
    "fuzzy": {
      "en": [
        "the dropdown that shows the currently selected option",
        "button with a little arrow that opens a menu of actions",
        "text field with a dropdown list attached",
        "mac menu button versus an editable dropdown",
        "selector that looks like a button and opens choices",
        "field where you can type or pick an existing value"
      ],
      "zh": [
        "显示当前选中项的下拉框",
        "带小箭头、点开是操作菜单的按钮",
        "带下拉列表的文本框",
        "Mac 菜单按钮和可编辑下拉框的区别",
        "长得像按钮、点开是选项的选择器",
        "既能打字又能选已有值的输入框"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSPopUpButton",
        "note": {
          "en": "a selection control when pullsDown is false",
          "zh": "pullsDown 为 false 时是选择控件"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSComboBox",
        "note": {
          "en": "an editable text field paired with a choices list",
          "zh": "可编辑文本框搭配选项列表"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSPopUpButton.pullsDown",
        "note": {
          "en": "true makes it an action-oriented pull-down button",
          "zh": "设为 true 就变成面向操作的下拉式按钮"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "Picker"
      }
    ],
    "prompt": {
      "en": "Choose the correct control from Pop-Up Button vs. Pull-Down Button vs. Combo Box: use NSPopUpButton with pullsDown false for a persistent selection, the same control with pullsDown true for a menu of commands, or NSComboBox when the user may type a value as well as choose one. Preserve the native arrow, menu behavior, and displayed-value semantics of the chosen control.",
      "zh": "在弹出式按钮、下拉式按钮、组合框三者中选择正确的控件：表示持续选中状态用 pullsDown 为 false 的 NSPopUpButton；弹出命令菜单用 pullsDown 为 true 的同一个控件；需要用户既能输入又能选择时用 NSComboBox。保留所选控件的原生箭头、菜单行为和显示值语义。"
    },
    "debugPrompt": {
      "en": "Debug my macOS popup/pull-down/combo (NSPopUpButton, NSComboBox). Rule out: a pull-down consuming its FIRST menu item as the title — insert a dummy first item; popup selection not syncing because selectItem was never called after menu rebuild; autoenablesItems greying items whose actions lack targets; expecting a combo box to be a menu — it is an editable text field plus a list. The symptom:",
      "zh": "调试我的 macOS 弹出/下拉/组合框（NSPopUpButton、NSComboBox）。逐一排除：下拉式按钮把第一个菜单项吞掉当成了标题——插入一个占位的首项；菜单重建后没调用 selectItem 导致选中状态不同步；autoenablesItems 把没有目标的菜单项变灰；把组合框当成菜单用——它其实是可编辑文本框加列表。症状是："
    },
    "parts": [
      {
        "id": "current-value-label",
        "name": {
          "en": "Current-value label",
          "zh": "当前值标签"
        },
        "api": "NSPopUpButton.titleOfSelectedItem",
        "description": {
          "en": "“The dropdown text that shows what is selected” is the pop-up button's current-value label.",
          "zh": "“下拉框上显示当前选中内容的文字”就是弹出式按钮的当前值标签。"
        },
        "prompt": {
          "en": "the NSPopUpButton.titleOfSelectedItem current-value label visible while the selection control is closed",
          "zh": "选择控件关闭状态下显示的 NSPopUpButton.titleOfSelectedItem 当前值标签"
        }
      },
      {
        "id": "pull-down-indicator",
        "name": {
          "en": "Pull-down indicator",
          "zh": "下拉指示箭头"
        },
        "api": "NSPopUpButton.pullsDown",
        "description": {
          "en": "“The little arrow showing that this button opens actions” is the pull-down indicator.",
          "zh": "“表示这个按钮会弹出操作的小箭头”就是下拉指示箭头。"
        },
        "prompt": {
          "en": "the menu indicator on an NSPopUpButton with pullsDown = true, signaling that the fixed-label button opens commands",
          "zh": "pullsDown = true 的 NSPopUpButton 上的菜单指示箭头，表明这个标签固定的按钮弹出的是命令"
        }
      },
      {
        "id": "editable-field",
        "name": {
          "en": "Editable value field",
          "zh": "可编辑值输入框"
        },
        "api": "NSComboBox",
        "description": {
          "en": "“The dropdown field where I can type my own value” is the combo box's editable field.",
          "zh": "“下拉框里能自己输入值的框”就是组合框的可编辑输入框。"
        },
        "prompt": {
          "en": "the editable NSComboBox value field, visually joined to its suggestions-list disclosure button",
          "zh": "NSComboBox 的可编辑值输入框，视觉上与建议列表的展开按钮连为一体"
        }
      },
      {
        "id": "selected-item-checkmark",
        "name": {
          "en": "Selected-item checkmark",
          "zh": "选中项勾号"
        },
        "api": "NSMenuItem.state",
        "description": {
          "en": "“The checkmark next to the current choice” is the selected menu item's state mark.",
          "zh": "“当前选项旁边的勾号”就是选中菜单项的状态标记。"
        },
        "prompt": {
          "en": "the NSMenuItem.state checkmark beside the current value in an open NSPopUpButton menu",
          "zh": "打开的 NSPopUpButton 菜单中当前值旁边的 NSMenuItem.state 勾号"
        }
      }
    ],
    "related": [
      "context-menu",
      "combobox",
      "segmented-control",
      "popover-dropdown-tooltip"
    ],
    "demo": "macos/popup-pulldown-combo"
  },
  {
    "slug": "segmented-control",
    "platform": "macos",
    "name": {
      "en": "Segmented Control",
      "zh": "分段控件"
    },
    "tagline": {
      "en": "A row of connected choices with the current segment visibly selected",
      "zh": "一排相连的选项，当前选中的分段清晰可见"
    },
    "description": {
      "en": "A segmented control groups a small set of related choices into one horizontal row of connected buttons. The selected segment receives a pressed or filled appearance, making the current mode immediately visible. NSSegmentedControl can also be configured for multiple or momentary tracking, but a segmented Picker normally represents one persistent selection.",
      "zh": "分段控件把一小组相关选项组织成一排水平相连的按钮。选中的分段呈现按下或填充的样式，让当前模式一目了然。NSSegmentedControl 也可以配置为多选或瞬时（momentary）跟踪，但分段样式的 Picker 通常只表示一个持续的选中项。"
    },
    "aka": {
      "en": [
        "segment control",
        "segmented picker",
        "button group"
      ],
      "zh": [
        "分段控制条",
        "分段选择器",
        "按钮组"
      ]
    },
    "fuzzy": {
      "en": [
        "the connected row of buttons where one stays selected",
        "pill split into several clickable choices",
        "small tabs that switch between views",
        "group of joined icon buttons in a toolbar",
        "horizontal selector with one pressed section"
      ],
      "zh": [
        "连在一起的一排按钮，总有一个保持选中",
        "一个胶囊被切成几个能点的选项",
        "切换视图用的小标签页",
        "工具栏里连成一组的图标按钮",
        "横排选择器，有一格是按下去的"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSegmentedControl"
      },
      {
        "framework": "SwiftUI",
        "symbol": "PickerStyle.segmented"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSegmentedControl.trackingMode",
        "note": {
          "en": "single, multiple, or momentary selection behavior",
          "zh": "单选、多选或瞬时选择行为"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.pickerStyle(_:)"
      }
    ],
    "prompt": {
      "en": "Use a Segmented Control with NSSegmentedControl (SwiftUI: a Picker with PickerStyle.segmented), showing the active segment with the native selected treatment. Keep the buttons connected as one control and bind selection so exactly one segment remains selected for this view switcher.",
      "zh": "使用分段控件：NSSegmentedControl（SwiftUI：带 PickerStyle.segmented 的 Picker），用原生选中样式标示当前分段。让各按钮连成一个整体控件，并绑定选中状态，保证这个视图切换器始终恰好有一个分段被选中。"
    },
    "debugPrompt": {
      "en": "Debug my macOS segmented control (NSSegmentedControl). Rule out: trackingMode wrong — momentary segments fire and deselect, selectOne keeps a selection; selectedSegment being -1 in the action for momentary mode; segment images not template so dark mode breaks; auto segment widths jumping when labels change. The symptom:",
      "zh": "调试我的 macOS 分段控件（NSSegmentedControl）。逐一排除：trackingMode 设错——momentary 模式的分段触发后立刻取消选中，selectOne 才会保留选中；momentary 模式下 action 里 selectedSegment 为 -1；分段图片不是模板图像导致深色模式显示异常；标签变化时自动分段宽度跳动。症状是："
    },
    "parts": [
      {
        "id": "selected-segment",
        "name": {
          "en": "Selected segment",
          "zh": "选中分段"
        },
        "api": "NSSegmentedControl.selectedSegment",
        "description": {
          "en": "“The section that stays pressed” is the selected segment.",
          "zh": "“一直保持按下的那一格”就是选中分段。"
        },
        "prompt": {
          "en": "the NSSegmentedControl.selectedSegment with the native persistent selected fill",
          "zh": "带原生常驻选中填充的 NSSegmentedControl.selectedSegment"
        }
      },
      {
        "id": "segment-divider",
        "name": {
          "en": "Segment divider",
          "zh": "分段分隔线"
        },
        "api": "NSSegmentedControl",
        "description": {
          "en": "“The little line separating two choices in the pill” is a segment divider.",
          "zh": "“胶囊里隔开两个选项的细线”就是分段分隔线。"
        },
        "prompt": {
          "en": "the native divider between adjacent choices inside one NSSegmentedControl",
          "zh": "同一个 NSSegmentedControl 内部相邻选项之间的原生分隔线"
        }
      }
    ],
    "related": [
      "toolbar",
      "tabs",
      "toggle-group",
      "focus-ring"
    ],
    "demo": "macos/segmented-control"
  },
  {
    "slug": "sheet",
    "platform": "macos",
    "name": {
      "en": "Sheet",
      "zh": "窗口附着面板（Sheet）"
    },
    "tagline": {
      "en": "A modal panel attached to one macOS window rather than the whole app",
      "zh": "只附着于单个 macOS 窗口、而非整个 App 的模态面板"
    },
    "description": {
      "en": "A sheet is a modal panel attached to a particular window, traditionally descending from its title bar. It prevents interaction with that parent window while other app windows can remain usable. An app-modal dialog instead blocks the application as a whole and is not visually attached to one document window.",
      "zh": "Sheet 是附着在某个特定窗口上的模态面板，传统上从窗口标题栏下滑出。它只阻止用户与父窗口交互，App 的其他窗口仍然可用。而 App 级模态对话框会锁住整个应用，视觉上也不附着于任何文稿窗口。"
    },
    "aka": {
      "en": [
        "window-modal dialog",
        "document-modal dialog",
        "attached sheet"
      ],
      "zh": [
        "窗口级模态对话框",
        "文稿级模态对话框",
        "附着式面板"
      ]
    },
    "fuzzy": {
      "en": [
        "dialog that slides down from the window title bar",
        "modal attached to just one mac window",
        "panel hanging from the top of the document window",
        "save dialog attached to its parent window",
        "popup that blocks one window but not the whole app"
      ],
      "zh": [
        "从窗口标题栏滑下来的对话框",
        "只挂在一个 Mac 窗口上的模态框",
        "吊在文稿窗口顶部的面板",
        "挂在父窗口上的存储对话框",
        "只挡一个窗口、不挡整个 App 的弹窗"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSWindow.beginSheet(_:completionHandler:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.endSheet(_:returnCode:)"
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.sheet(isPresented:onDismiss:content:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.runModal(for:)",
        "note": {
          "en": "app-modal alternative, not a sheet",
          "zh": "App 级模态的替代方案，不是 Sheet"
        }
      }
    ],
    "prompt": {
      "en": "Present this as a window-modal Sheet with NSWindow.beginSheet(_:completionHandler:) (SwiftUI: View.sheet), visibly attached beneath the parent window's title bar. Block only that parent window, not every window in the app.",
      "zh": "用 NSWindow.beginSheet(_:completionHandler:)（SwiftUI：View.sheet）把它呈现为窗口级模态的 Sheet，视觉上附着在父窗口标题栏下方。只阻挡父窗口，不要阻挡 App 的所有窗口。"
    },
    "debugPrompt": {
      "en": "Debug my macOS sheet (NSWindow.beginSheet(_:completionHandler:), SwiftUI View.sheet). Rule out: the isPresented/item binding never reset so it will not present a second time; endSheet never called so the parent window stays blocked; presenting from a view controller detached from the window so nothing appears; two sheets queued on one window presenting back-to-back unexpectedly. The symptom:",
      "zh": "调试我的 macOS Sheet（NSWindow.beginSheet(_:completionHandler:)、SwiftUI View.sheet）。逐一排除：isPresented/item 绑定从未复位，导致无法再次弹出；从未调用 endSheet，父窗口一直被锁；从已脱离窗口的视图控制器发起呈现，结果什么都不显示；同一窗口上排队的两个 Sheet 意外接连弹出。症状是："
    },
    "parts": [
      {
        "id": "dimming-layer",
        "name": {
          "en": "Dimming layer",
          "zh": "变暗层"
        },
        "api": "View.sheet(isPresented:content:)",
        "description": {
          "en": "“The darkened area behind the sheet” is the dimming layer that marks the parent surface as temporarily unavailable.",
          "zh": "“Sheet 后面变暗的区域”就是变暗层，表示父界面暂时不可用。"
        },
        "prompt": {
          "en": "the sheet's dimming layer (View.sheet(isPresented:content:)): the translucent dark overlay over the blocked parent surface behind the presentation",
          "zh": "Sheet 的变暗层（View.sheet(isPresented:content:)）：覆盖在被阻挡父界面上的半透明暗色遮罩"
        }
      }
    ],
    "related": [
      "alert",
      "panel",
      "scrim",
      "dialog-drawer-sheet",
      "focus-ring"
    ],
    "demo": "macos/sheet"
  },
  {
    "slug": "sidebar",
    "platform": "macos",
    "name": {
      "en": "Sidebar (Source List)",
      "zh": "边栏（源列表）"
    },
    "tagline": {
      "en": "The translucent navigation column along the left edge of a macOS window",
      "zh": "位于 macOS 窗口左缘的半透明导航列"
    },
    "description": {
      "en": "A sidebar is the leftmost navigation column used by apps such as Finder and Mail to organize destinations into sections. AppKit calls its list appearance a source list, while modern SwiftUI normally builds the structure with NavigationSplitView and sidebar list style. It can collapse independently of the main content and often uses a translucent material behind its rows.",
      "zh": "边栏是窗口最左侧的导航列，访达、邮件这类 App 用它把目的地分成分区。AppKit 把这种列表外观称为源列表（source list），而现代 SwiftUI 通常用 NavigationSplitView 加 sidebar 列表样式来搭建。它可以独立于主内容折叠，行背景常使用半透明材质。"
    },
    "aka": {
      "en": [
        "source list",
        "navigation sidebar",
        "split view sidebar"
      ],
      "zh": [
        "源列表",
        "导航边栏",
        "分栏视图边栏"
      ]
    },
    "fuzzy": {
      "en": [
        "the translucent list down the left side of a mac app",
        "finder style navigation column",
        "left panel with sections and selected rows",
        "sidebar that collapses next to the main content",
        "list of folders or pages on the left",
        "mac navigation rail with a frosted background"
      ],
      "zh": [
        "Mac App 左边那条半透明的列表",
        "访达风格的导航列",
        "左边带分区和选中行的面板",
        "主内容旁边能折叠的边栏",
        "左边的文件夹或页面列表",
        "Mac 上那种磨砂背景的导航栏"
      ]
    },
    "api": [
      {
        "framework": "SwiftUI",
        "symbol": "NavigationSplitView"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewController"
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewItem(sidebarWithViewController:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSTableView.Style.sourceList",
        "note": {
          "en": "the standard AppKit list appearance",
          "zh": "AppKit 标准的列表外观"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "ListStyle.sidebar"
      }
    ],
    "prompt": {
      "en": "Build a macOS Sidebar (Source List) with NavigationSplitView (AppKit: NSSplitViewController), using the native translucent sidebar appearance and source-list row selection. It must occupy the left column, support collapsing, and keep navigation separate from the detail content.",
      "zh": "用 NavigationSplitView（AppKit：NSSplitViewController）构建 macOS 边栏（源列表），使用原生半透明边栏外观和源列表式的行选中。它必须占据左侧列、支持折叠，并让导航与详情内容分离。"
    },
    "debugPrompt": {
      "en": "Debug my macOS sidebar (NSSplitViewController sidebar item, SwiftUI NavigationSplitView). Rule out: the frosted vibrancy missing because the sidebar content is not inside the sidebar-material effect view; toggleSidebar wired to the wrong split view item; the width not persisting without an autosaveName; the selection highlight losing its rounded inset style when the list style changes. The symptom:",
      "zh": "调试我的 macOS 边栏（NSSplitViewController sidebar item、SwiftUI NavigationSplitView）。逐一排除：磨砂的 vibrancy 效果缺失，因为边栏内容没有放进 sidebar 材质的效果视图里；toggleSidebar 接错了拆分视图项；没有 autosaveName 导致宽度无法记住；列表样式变化后选中高亮失去了圆角内嵌样式。症状是："
    },
    "parts": [
      {
        "id": "source-list-style",
        "name": {
          "en": "Source-list style",
          "zh": "源列表样式"
        },
        "api": "NSTableView.Style.sourceList",
        "description": {
          "en": "The spacious, vibrancy-aware Finder-like treatment of the rows is AppKit's source-list style.",
          "zh": "行距宽松、带 vibrancy 效果的访达式行外观，就是 AppKit 的源列表样式。"
        },
        "prompt": {
          "en": "the native source-list style (NSTableView.Style.sourceList): Finder-like sidebar rows over a translucent background with system spacing",
          "zh": "原生源列表样式（NSTableView.Style.sourceList）：半透明背景上、采用系统间距的访达式边栏行"
        }
      },
      {
        "id": "section-header",
        "name": {
          "en": "Section header",
          "zh": "分区标题"
        },
        "api": "NSOutlineViewDelegate.outlineView(_:isGroupItem:)",
        "description": {
          "en": "The small emphasized label dividing destinations into groups such as Favorites or iCloud is a section header.",
          "zh": "把目的地分成“个人收藏”“iCloud”等组的小号强调标签，就是分区标题。"
        },
        "prompt": {
          "en": "a sidebar section header (NSOutlineViewDelegate.outlineView(_:isGroupItem:)): the non-destination group label above a cluster of source-list rows",
          "zh": "边栏分区标题（NSOutlineViewDelegate.outlineView(_:isGroupItem:)）：一组源列表行上方、本身不是目的地的分组标签"
        }
      },
      {
        "id": "selection-pill",
        "name": {
          "en": "Selection pill",
          "zh": "选中胶囊"
        },
        "api": "NSTableRowView.isSelected",
        "description": {
          "en": "“The rounded colored background behind the current row” is the sidebar's selection pill.",
          "zh": "“当前行后面那个圆角彩色背景”就是边栏的选中胶囊。"
        },
        "prompt": {
          "en": "the sidebar selection pill (NSTableRowView.isSelected): the accent-tinted rounded background behind the active source-list row",
          "zh": "边栏选中胶囊（NSTableRowView.isSelected）：当前源列表行后面的强调色圆角背景"
        }
      },
      {
        "id": "sidebar-toggle",
        "name": {
          "en": "Sidebar toggle toolbar button",
          "zh": "边栏开关工具栏按钮"
        },
        "api": "NSSplitViewController.toggleSidebar(_:)",
        "description": {
          "en": "The standard split-rectangle toolbar icon that reveals or hides the leading column is the sidebar toggle.",
          "zh": "工具栏上那个标准的分栏矩形图标，用来显示或隐藏前侧栏，就是边栏开关。"
        },
        "prompt": {
          "en": "the sidebar toggle toolbar button (NSSplitViewController.toggleSidebar(_:)): the standard split-rectangle icon that collapses or reveals the leading sidebar",
          "zh": "边栏开关工具栏按钮（NSSplitViewController.toggleSidebar(_:)）：标准的分栏矩形图标，用于折叠或展开前侧边栏"
        }
      }
    ],
    "related": [
      "inspector",
      "toolbar",
      "vibrancy",
      "disclosure-triangle"
    ],
    "demo": "macos/sidebar"
  },
  {
    "slug": "stepper",
    "platform": "macos",
    "name": {
      "en": "Stepper",
      "zh": "步进器"
    },
    "tagline": {
      "en": "The compact up-and-down arrow pair used to increment or decrement a value",
      "zh": "一对紧凑的上下箭头，用来递增或递减数值"
    },
    "description": {
      "en": "A stepper is a pair of small stacked arrow buttons for changing a value by a fixed increment. It commonly sits beside a numeric text field so users can either type an exact value or adjust it one step at a time. Its enabled states should reflect the configured minimum and maximum, and holding an arrow can repeat the change.",
      "zh": "步进器是一对上下堆叠的小箭头按钮，按固定步长改变数值。它通常放在数字输入框旁边，用户既可以精确输入，也可以一步一步地调整。它的可用状态应反映配置的最小值和最大值，按住箭头可以连续变化。"
    },
    "aka": {
      "en": [
        "stepper control",
        "stepper arrows",
        "numeric stepper",
        "incrementer"
      ],
      "zh": [
        "步进控件",
        "步进箭头",
        "数字步进器",
        "增减器"
      ]
    },
    "fuzzy": {
      "en": [
        "the tiny up and down arrows beside a number field",
        "little control that increases or decreases a value",
        "stacked arrow buttons next to a numeric input",
        "small plus minus style control for changing a number",
        "spinner arrows for adjusting a value one step at a time"
      ],
      "zh": [
        "数字框旁边那对小上下箭头",
        "能增减数值的小控件",
        "数字输入框旁边上下叠着的箭头按钮",
        "调数字用的那种加减小控件",
        "一步一步调数值的微调箭头"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSStepper"
      },
      {
        "framework": "SwiftUI",
        "symbol": "Stepper"
      },
      {
        "framework": "AppKit",
        "symbol": "NSStepper.increment"
      },
      {
        "framework": "AppKit",
        "symbol": "NSStepper.minValue"
      },
      {
        "framework": "AppKit",
        "symbol": "NSStepper.maxValue"
      }
    ],
    "prompt": {
      "en": "Place a native Stepper using NSStepper (SwiftUI: Stepper) beside the numeric field, with the compact up/down arrow pair vertically aligned to that field. Bind both controls to the same value and enforce the intended increment, minimum, and maximum.",
      "zh": "用 NSStepper（SwiftUI：Stepper）把原生步进器放在数字输入框旁边，紧凑的上下箭头对与输入框垂直对齐。把两个控件绑定到同一个值，并约束好预期的步长、最小值和最大值。"
    },
    "debugPrompt": {
      "en": "Debug my macOS stepper (NSStepper, SwiftUI Stepper). Rule out: the stepper and its text field not bound to the same value so they drift; valueWraps looping from max back to min; autorepeat firing continuously while held when single steps were expected; a number formatter clamping or rejecting the value the stepper just set. The symptom:",
      "zh": "调试我的 macOS 步进器（NSStepper、SwiftUI Stepper）。逐一排除：步进器和文本框没有绑定到同一个值，两边各走各的；valueWraps 让数值从最大值绕回最小值；想要单步调节，autorepeat 却在按住时连续触发；数字格式化器把步进器刚设的值截断或拒绝了。症状是："
    },
    "parts": [
      {
        "id": "increment-button",
        "name": {
          "en": "Increment button",
          "zh": "递增按钮"
        },
        "api": "NSStepper.increment",
        "description": {
          "en": "“The tiny upper arrow that raises the number” is the increment button.",
          "zh": "“上面那个把数字调大的小箭头”就是递增按钮。"
        },
        "prompt": {
          "en": "the upper increment button of an NSStepper, increasing the bound value by NSStepper.increment",
          "zh": "NSStepper 的上箭头递增按钮，按 NSStepper.increment 的步长增大绑定值"
        }
      },
      {
        "id": "decrement-button",
        "name": {
          "en": "Decrement button",
          "zh": "递减按钮"
        },
        "api": "NSStepper.increment",
        "description": {
          "en": "“The tiny lower arrow that reduces the number” is the decrement button.",
          "zh": "“下面那个把数字调小的小箭头”就是递减按钮。"
        },
        "prompt": {
          "en": "the lower decrement button of an NSStepper, reducing the bound value by NSStepper.increment",
          "zh": "NSStepper 的下箭头递减按钮，按 NSStepper.increment 的步长减小绑定值"
        }
      }
    ],
    "related": [
      "slider",
      "focus-ring",
      "segmented-control",
      "popup-pulldown-combo"
    ],
    "demo": "macos/stepper"
  },
  {
    "slug": "toolbar",
    "platform": "macos",
    "name": {
      "en": "Toolbar (Unified Title Bar)",
      "zh": "工具栏（统一标题栏）"
    },
    "tagline": {
      "en": "A row of window actions integrated with the modern macOS title bar",
      "zh": "与现代 macOS 标题栏融为一体的一排窗口操作"
    },
    "description": {
      "en": "A toolbar holds the primary actions for a window and can share a single top row with the window title in the unified style. Its native toolbar items participate in macOS spacing, validation, customization, and overflow behavior. A title bar separator can appear between this chrome and the window's content, depending on the window style and scroll position.",
      "zh": "工具栏承载窗口的主要操作，在统一样式下还能与窗口标题共用顶部同一行。原生工具栏项参与 macOS 的间距、验证、自定义和溢出行为。根据窗口样式和滚动位置，工具栏与窗口内容之间可能出现一条标题栏分隔线。"
    },
    "aka": {
      "en": [
        "window toolbar",
        "unified toolbar",
        "title bar toolbar"
      ],
      "zh": [
        "窗口工具栏",
        "统一工具栏",
        "标题栏工具栏"
      ]
    },
    "fuzzy": {
      "en": [
        "the row of buttons across the top of a mac window",
        "title bar with search and action icons in it",
        "mac window header where the toolbar and title share one row",
        "top strip with customizable window actions",
        "line separating the toolbar from the window content"
      ],
      "zh": [
        "Mac 窗口顶部那一排按钮",
        "标题栏里塞着搜索和操作图标",
        "Mac 窗口顶部工具栏和标题挤在一行的那条",
        "顶部那条能自定义窗口操作的横条",
        "工具栏和窗口内容之间的那条线"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSToolbar"
      },
      {
        "framework": "AppKit",
        "symbol": "NSToolbarItem"
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.ToolbarStyle.unified",
        "note": {
          "en": "places the window title inline with toolbar items",
          "zh": "让窗口标题与工具栏项排在同一行"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.titlebarSeparatorStyle"
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.toolbar(content:)"
      }
    ],
    "prompt": {
      "en": "Create a Toolbar (Unified Title Bar) with NSToolbar and NSWindow.ToolbarStyle.unified (SwiftUI: View.toolbar), using native NSToolbarItem placement and spacing. Keep the title inline with the actions and let NSWindow.titlebarSeparatorStyle control the divider above the content.",
      "zh": "用 NSToolbar 和 NSWindow.ToolbarStyle.unified（SwiftUI：View.toolbar）创建工具栏（统一标题栏），采用原生 NSToolbarItem 的布局与间距。让标题与操作保持在同一行，并用 NSWindow.titlebarSeparatorStyle 控制内容上方的分隔线。"
    },
    "debugPrompt": {
      "en": "Debug my macOS toolbar (NSToolbar, NSToolbarItem). Rule out: items missing because they are absent from itemIdentifiers defaults vs alloweds; items greyed by validateToolbarItem returning false (or not implemented for custom views); user customization not persisting without autosavesConfiguration; unified title bar style shifting content layout under the toolbar. The symptom:",
      "zh": "调试我的 macOS 工具栏（NSToolbar、NSToolbarItem）。逐一排除：工具栏项缺失，因为没加进 itemIdentifiers 的默认项或允许项；validateToolbarItem 返回 false（或自定义视图没实现它）导致项变灰；没有 autosavesConfiguration，用户的自定义无法保存；统一标题栏样式让内容布局缩到了工具栏下面。症状是："
    },
    "parts": [
      {
        "id": "toolbar-item",
        "name": {
          "en": "Toolbar item",
          "zh": "工具栏项"
        },
        "api": "NSToolbarItem",
        "description": {
          "en": "One button, search field, control group, or flexible space in the toolbar is a toolbar item.",
          "zh": "工具栏里的一个按钮、搜索框、控件组或弹性空白，都是一个工具栏项。"
        },
        "prompt": {
          "en": "a native toolbar item (NSToolbarItem): one action, field, group, or flexible space placed with standard macOS toolbar behavior",
          "zh": "原生工具栏项（NSToolbarItem）：按标准 macOS 工具栏行为放置的一个操作、输入框、控件组或弹性空白"
        }
      },
      {
        "id": "item-label",
        "name": {
          "en": "Toolbar item label",
          "zh": "工具栏项标签"
        },
        "api": "NSToolbarItem.label",
        "description": {
          "en": "The text shown beneath an icon in icon-and-text mode is the item label; the customization palette can use a separate palette label.",
          "zh": "图标加文字模式下显示在图标下方的文字就是项标签；自定义调板里可以用单独的调板标签。"
        },
        "prompt": {
          "en": "the toolbar item label (NSToolbarItem.label): the action name shown with the icon in icon-and-text display mode",
          "zh": "工具栏项标签（NSToolbarItem.label）：图标加文字显示模式下与图标一起显示的操作名称"
        }
      },
      {
        "id": "overflow-chevron",
        "name": {
          "en": "Overflow chevron",
          "zh": "溢出箭头"
        },
        "api": "NSToolbarItem.visibilityPriority",
        "description": {
          "en": "The trailing chevron that appears when items no longer fit opens the toolbar's overflow menu.",
          "zh": "工具栏项放不下时末尾出现的箭头，点开就是工具栏的溢出菜单。"
        },
        "prompt": {
          "en": "the toolbar overflow chevron (NSToolbarItem.visibilityPriority): the trailing » control that collects toolbar items that no longer fit",
          "zh": "工具栏溢出箭头（NSToolbarItem.visibilityPriority）：末尾的 » 控件，收纳放不下的工具栏项"
        }
      },
      {
        "id": "title-bar-separator",
        "name": {
          "en": "Title-bar separator styles",
          "zh": "标题栏分隔线样式"
        },
        "api": "NSWindow.titlebarSeparatorStyle",
        "description": {
          "en": "The boundary under the toolbar can be automatic, a visible line, a shadow, or absent through the title-bar separator style.",
          "zh": "工具栏下方的边界可以通过标题栏分隔线样式设为自动、可见线条、阴影或没有。"
        },
        "prompt": {
          "en": "the title-bar separator style (NSWindow.titlebarSeparatorStyle): the automatic, line, shadow, or none boundary between unified toolbar chrome and window content",
          "zh": "标题栏分隔线样式（NSWindow.titlebarSeparatorStyle）：统一工具栏外框与窗口内容之间的边界，可选自动、线条、阴影或无"
        }
      }
    ],
    "related": [
      "traffic-lights",
      "sidebar",
      "segmented-control",
      "inspector"
    ],
    "demo": "macos/toolbar"
  },
  {
    "slug": "traffic-lights",
    "platform": "macos",
    "name": {
      "en": "Traffic Lights (Window Controls)",
      "zh": "红绿灯按钮（窗口控制按钮）"
    },
    "tagline": {
      "en": "The red, yellow, and green controls at the top-left of a macOS window",
      "zh": "macOS 窗口左上角的红、黄、绿三个控制按钮"
    },
    "description": {
      "en": "Traffic lights are the red close, yellow minimize, and green window controls at the top-left of a macOS window. Their symbols appear when the pointer hovers over the group. The green control normally enters full screen and also exposes system window-arrangement choices; macOS still identifies it through NSWindow.ButtonType.zoomButton.",
      "zh": "红绿灯按钮是 macOS 窗口左上角的红色关闭、黄色最小化和绿色窗口按钮。指针悬停在这一组按钮上时会显示各自的符号。绿色按钮默认进入全屏，还提供系统的窗口排列选项；macOS 内部仍通过 NSWindow.ButtonType.zoomButton 标识它。"
    },
    "aka": {
      "en": [
        "window controls",
        "title bar buttons",
        "close minimize zoom buttons"
      ],
      "zh": [
        "窗口控制按钮",
        "标题栏按钮",
        "关闭/最小化/缩放按钮"
      ]
    },
    "fuzzy": {
      "en": [
        "the three colored dots in the corner of a mac window",
        "red yellow and green buttons at the top left",
        "little x minus and arrows that appear when you hover",
        "mac window close minimize and full screen buttons",
        "green window button that makes the window bigger"
      ],
      "zh": [
        "Mac 窗口角落里的三个彩色圆点",
        "左上角红黄绿三个按钮",
        "悬停时才出现的叉、减号和小箭头",
        "Mac 窗口的关闭、最小化和全屏按钮",
        "能把窗口变大的绿色按钮"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSWindow.standardWindowButton(_:)"
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.ButtonType",
        "note": {
          "en": "closeButton, miniaturizeButton, and zoomButton",
          "zh": "closeButton、miniaturizeButton 和 zoomButton"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.toggleFullScreen(_:)",
        "note": {
          "en": "enters or exits a Space-filling full-screen window",
          "zh": "进入或退出占满一个空间的全屏窗口"
        }
      }
    ],
    "prompt": {
      "en": "Use the standard Traffic Lights from NSWindow.standardWindowButton(_:), preserving their native spacing, hover symbols, and the green button’s system-provided full-screen and window-arrangement behavior. Obtain the green control as .zoomButton and use NSWindow.toggleFullScreen(_:) only when explicitly invoking full screen; do not substitute custom circles.",
      "zh": "使用 NSWindow.standardWindowButton(_:) 提供的标准红绿灯按钮，保留原生的间距、悬停符号，以及绿色按钮由系统提供的全屏和窗口排列行为。通过 .zoomButton 获取绿色按钮，只在明确要进入全屏时才调用 NSWindow.toggleFullScreen(_:)；不要用自绘的圆点替代。"
    },
    "debugPrompt": {
      "en": "Debug my macOS traffic lights (NSWindow.standardWindowButton). Rule out: buttons missing after changing styleMask or using borderless windows; hover glyphs gone because a custom titlebar accessory intercepts tracking; the green button zooming when you expected full screen (option-click zooms); repositioned buttons drifting after full-screen transitions because the themed frame re-lays them out. The symptom:",
      "zh": "调试我的 macOS 红绿灯按钮（NSWindow.standardWindowButton）。逐一排除：改了 styleMask 或用了无边框窗口导致按钮消失；自定义 titlebar accessory 拦截了跟踪，悬停符号没了；期待全屏但绿色按钮执行了缩放（Option 点击会触发缩放）；全屏切换后挪过位置的按钮被系统主题框架重新排布而漂移。症状是："
    },
    "parts": [
      {
        "id": "close-button",
        "name": {
          "en": "Close button",
          "zh": "关闭按钮"
        },
        "api": "NSWindow.ButtonType.closeButton",
        "description": {
          "en": "The red control shows an x on group hover and closes the window rather than necessarily quitting the app.",
          "zh": "红色按钮在整组悬停时显示 ×，它关闭窗口，但不一定退出 App。"
        },
        "prompt": {
          "en": "the red close button (NSWindow.ButtonType.closeButton): the left traffic light with an x hover glyph that closes the NSWindow",
          "zh": "红色关闭按钮（NSWindow.ButtonType.closeButton）：最左侧的红绿灯，悬停显示 ×，用于关闭 NSWindow"
        }
      },
      {
        "id": "minimize-button",
        "name": {
          "en": "Minimize button",
          "zh": "最小化按钮"
        },
        "api": "NSWindow.ButtonType.miniaturizeButton",
        "description": {
          "en": "The yellow control shows a minus on hover and miniaturizes the window into the Dock.",
          "zh": "黄色按钮悬停时显示减号，把窗口最小化到程序坞。"
        },
        "prompt": {
          "en": "the yellow minimize button (NSWindow.ButtonType.miniaturizeButton): the middle traffic light with a minus hover glyph that sends the window to the Dock",
          "zh": "黄色最小化按钮（NSWindow.ButtonType.miniaturizeButton）：中间的红绿灯，悬停显示减号，把窗口收进程序坞"
        }
      },
      {
        "id": "zoom-button",
        "name": {
          "en": "Zoom / full-screen button",
          "zh": "缩放 / 全屏按钮"
        },
        "api": "NSWindow.ButtonType.zoomButton",
        "description": {
          "en": "The green control normally enters full screen; Option-click invokes the traditional window Zoom behavior instead.",
          "zh": "绿色按钮默认进入全屏；按住 Option 点击则执行传统的窗口缩放（Zoom）行为。"
        },
        "prompt": {
          "en": "the green zoom button (NSWindow.ButtonType.zoomButton): show its full-screen hover glyph, enter full screen normally, and perform traditional window Zoom on Option-click",
          "zh": "绿色缩放按钮（NSWindow.ButtonType.zoomButton）：显示全屏悬停符号，默认进入全屏，Option 点击执行传统窗口缩放"
        }
      },
      {
        "id": "dirty-document",
        "name": {
          "en": "Dirty-document dot",
          "zh": "未保存更改圆点"
        },
        "api": "NSWindow.isDocumentEdited",
        "description": {
          "en": "The dark dot replacing the close button's x marks a document with unsaved changes.",
          "zh": "替代关闭按钮 × 的深色圆点，表示文稿有未保存的更改。"
        },
        "prompt": {
          "en": "the dirty-document dot (NSWindow.isDocumentEdited): the dark center mark inside the red close button indicating unsaved changes",
          "zh": "未保存更改圆点（NSWindow.isDocumentEdited）：红色关闭按钮中央的深色标记，表示有未保存的更改"
        }
      }
    ],
    "related": [
      "toolbar",
      "focus-ring",
      "panel"
    ],
    "demo": "macos/traffic-lights"
  },
  {
    "slug": "vibrancy",
    "platform": "macos",
    "name": {
      "en": "Visual Effect Material (Vibrancy)",
      "zh": "视觉效果材质（Vibrancy）"
    },
    "tagline": {
      "en": "The adaptive translucent background used behind macOS sidebars, menus, and panels",
      "zh": "macOS 边栏、菜单和面板背后那种自适应的半透明背景"
    },
    "description": {
      "en": "A visual effect material supplies the adaptive translucent background seen behind macOS sidebars, menus, and panels. NSVisualEffectView chooses the background effect through its Material and BlendingMode. Vibrancy is the related foreground treatment that increases contrast against that material; standard AppKit controls enable it where appropriate.",
      "zh": "视觉效果材质提供 macOS 边栏、菜单和面板背后那种自适应的半透明背景。NSVisualEffectView 通过 Material 和 BlendingMode 选择背景效果。Vibrancy 是与之配套的前景处理，让内容在材质背景上保持对比度；标准的 AppKit 控件会在合适的地方自动启用它。"
    },
    "aka": {
      "en": [
        "visual effect material",
        "frosted glass",
        "translucent material",
        "blur material"
      ],
      "zh": [
        "视觉效果材质",
        "毛玻璃",
        "半透明材质",
        "模糊材质"
      ]
    },
    "fuzzy": {
      "en": [
        "the frosted glass background behind a mac sidebar",
        "translucent blurred panel that shows colors through it",
        "see through material behind menus and huds",
        "mac blur effect that adapts to the wallpaper",
        "glassy background behind the window controls"
      ],
      "zh": [
        "Mac 边栏背后的毛玻璃背景",
        "半透明的模糊面板，能透出后面的颜色",
        "菜单和 HUD 后面那种透光的材质",
        "Mac 上跟着壁纸变的模糊效果",
        "窗口控件背后的玻璃感背景"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSVisualEffectView"
      },
      {
        "framework": "AppKit",
        "symbol": "NSVisualEffectView.Material"
      },
      {
        "framework": "AppKit",
        "symbol": "NSVisualEffectView.BlendingMode"
      },
      {
        "framework": "SwiftUI",
        "symbol": "Material"
      }
    ],
    "prompt": {
      "en": "Use an NSVisualEffectView for this Visual Effect Material background (SwiftUI: Material). Choose NSVisualEffectView.Material by semantic purpose and set the appropriate BlendingMode; let standard controls supply vibrancy automatically instead of recreating the effect with a fixed blur and opacity.",
      "zh": "用 NSVisualEffectView 实现这个视觉效果材质背景（SwiftUI：Material）。按语义用途选择 NSVisualEffectView.Material，并设置合适的 BlendingMode；让标准控件自动提供 vibrancy，不要用固定的模糊和不透明度去重造这个效果。"
    },
    "debugPrompt": {
      "en": "Debug my macOS vibrancy (NSVisualEffectView). Rule out: the wrong material for the surface (sidebar, menu, popover, hudWindow are distinct); blendingMode withinWindow when behindWindow was intended so nothing shows through; vibrant text/controls dead because they are not descendants of the effect view; everything going grey when the window deactivates via state followsWindowActiveState. The symptom:",
      "zh": "调试我的 macOS vibrancy（NSVisualEffectView）。逐一排除：材质选错了界面类型（sidebar、menu、popover、hudWindow 各不相同）；想要 behindWindow 却设成了 withinWindow，导致什么也透不出来；带 vibrancy 的文字和控件失效，因为它们不是效果视图的子视图；state 设为 followsWindowActiveState 导致窗口失活时一切变灰。症状是："
    },
    "parts": [
      {
        "id": "material-layer",
        "name": {
          "en": "Material layer",
          "zh": "材质层"
        },
        "api": "NSVisualEffectView.Material",
        "description": {
          "en": "“The frosted glass background behind the panel” is the material layer.",
          "zh": "“面板背后的毛玻璃背景”就是材质层。"
        },
        "prompt": {
          "en": "an NSVisualEffectView.Material layer providing the adaptive translucent background for the surface",
          "zh": "一个 NSVisualEffectView.Material 材质层，为界面提供自适应的半透明背景"
        }
      },
      {
        "id": "vibrant-foreground",
        "name": {
          "en": "Vibrant foreground",
          "zh": "Vibrancy 前景"
        },
        "api": "NSVisualEffectView.allowsVibrancy",
        "description": {
          "en": "“The text and icons that adapt against the glass” are the vibrant foreground.",
          "zh": "“在玻璃背景上自适应的文字和图标”就是 vibrancy 前景。"
        },
        "prompt": {
          "en": "the NSVisualEffectView.allowsVibrancy foreground treatment that keeps controls legible over the material",
          "zh": "NSVisualEffectView.allowsVibrancy 前景处理，让控件在材质上保持清晰可读"
        }
      }
    ],
    "related": [
      "sidebar",
      "panel",
      "popover",
      "menu-bar-extra"
    ],
    "demo": "macos/vibrancy"
  },
  {
    "slug": "toast",
    "platform": "web",
    "name": {
      "en": "Toast (Snackbar)",
      "zh": "轻提示（Snackbar）"
    },
    "tagline": {
      "en": "A brief, non-blocking message that appears after an action",
      "zh": "操作完成后短暂出现、不打断流程的消息"
    },
    "description": {
      "en": "A toast is a compact, non-modal status message that appears in a screen corner after an action and dismisses automatically. It confirms transient outcomes such as saving or copying without interrupting the workflow. Unlike a notification banner, it does not occupy a persistent place in the page layout or demand acknowledgement.",
      "zh": "Toast 是一种小巧的非模态状态消息，在操作完成后出现在屏幕角落，并自动消失。它用来确认保存、复制这类即时结果，不打断工作流程。与通知横幅不同，它不在页面布局中占据固定位置，也不要求用户确认。"
    },
    "aka": {
      "en": [
        "snackbar",
        "status toast",
        "in-app notification"
      ],
      "zh": [
        "底部提示条",
        "状态提示",
        "应用内通知"
      ]
    },
    "fuzzy": {
      "en": [
        "the little message that pops up in the corner",
        "confirmation that disappears by itself",
        "saved successfully popup",
        "temporary message after clicking a button",
        "small alert at the bottom of the screen"
      ],
      "zh": [
        "角落里弹出来的小消息",
        "自己会消失的确认提示",
        "“保存成功”那种弹窗",
        "点了按钮后出现的临时消息",
        "屏幕底部的小提示"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "role=\"status\""
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Toaster"
      },
      {
        "framework": "Sonner",
        "symbol": "toast()"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-live=\"polite\"",
        "note": {
          "en": "announces non-urgent updates",
          "zh": "播报非紧急更新"
        }
      }
    ],
    "prompt": {
      "en": "Show a Toast (Snackbar) through a role=\"status\" live region after the action succeeds. Place it in a consistent corner without blocking the page, auto-dismiss only nonessential messages after a short delay, and pause that timer while the toast is hovered or contains keyboard focus.",
      "zh": "操作成功后，通过 role=\"status\" 实时区域显示一条 Toast（Snackbar）。把它固定在同一个角落且不遮挡页面；只给非关键消息设置短暂延时后自动消失，并在指针悬停或键盘焦点落在 Toast 上时暂停计时。"
    },
    "debugPrompt": {
      "en": "Debug my toast (aria-live region, sonner). Rule out: no aria-live region so screen readers never announce it; the auto-dismiss timer not pausing on hover/focus; stacked toasts overlapping instead of shifting; the exit animation racing the removal so it snaps; toasts rendering under modals because of z-index order. The symptom:",
      "zh": "调试我的 Toast（aria-live 区域、sonner）。逐一排除：没有 aria-live 区域，屏幕阅读器永远不播报；自动消失计时器在悬停或聚焦时没有暂停；堆叠的 Toast 互相重叠而不是依次错位；退出动画和移除不同步导致闪没；z-index 顺序让 Toast 渲染到了模态框下面。症状是："
    },
    "parts": [
      {
        "id": "toast-viewport",
        "name": {
          "en": "Toast viewport",
          "zh": "Toast 视口"
        },
        "api": "Toaster",
        "description": {
          "en": "“The corner where all the little messages stack” is the toast viewport.",
          "zh": "“所有小消息堆在一起的那个角落”就是 Toast 视口。"
        },
        "prompt": {
          "en": "the shadcn/ui Toaster viewport anchored to a consistent screen corner for the toast stack",
          "zh": "shadcn/ui 的 Toaster 视口，固定在屏幕同一角落，供 Toast 堆叠"
        }
      },
      {
        "id": "status-message",
        "name": {
          "en": "Status message",
          "zh": "状态消息"
        },
        "api": "role=\"status\"",
        "description": {
          "en": "“The saved successfully text that appears by itself” is the toast's status message.",
          "zh": "“自己冒出来的‘保存成功’文字”就是 Toast 的状态消息。"
        },
        "prompt": {
          "en": "the concise role=\"status\" message inside the toast, announced politely without moving focus",
          "zh": "Toast 内部简洁的 role=\"status\" 消息，以 polite 方式播报且不移动焦点"
        }
      },
      {
        "id": "toast-action",
        "name": {
          "en": "Toast action",
          "zh": "Toast 操作按钮"
        },
        "api": "ToastAction",
        "description": {
          "en": "“The Undo button inside the temporary message” is the toast action.",
          "zh": "“临时消息里的‘撤销’按钮”就是 Toast 操作按钮。"
        },
        "prompt": {
          "en": "a shadcn/ui ToastAction inside the toast for one safe, time-sensitive follow-up such as Undo",
          "zh": "Toast 内部的 shadcn/ui ToastAction，提供一个安全且有时效的后续操作，比如撤销"
        }
      }
    ],
    "related": [
      "scrim",
      "empty-state",
      "popover-dropdown-tooltip",
      "spring"
    ],
    "demo": "web/toast"
  },
  {
    "slug": "dialog-drawer-sheet",
    "platform": "web",
    "name": {
      "en": "Modal Dialog vs. Drawer vs. Sheet",
      "zh": "模态对话框 vs. 抽屉 vs. 底部面板"
    },
    "tagline": {
      "en": "Three overlay patterns distinguished by placement, scope, and task depth",
      "zh": "三种覆盖层模式，按位置、范围和任务深度区分"
    },
    "description": {
      "en": "A modal dialog is centered, blocks the underlying interface, and suits a short decision or focused task. A drawer slides from a side edge and preserves more visual context for browsing or editing. A sheet is edge-attached too, most often rising from the bottom for compact actions or mobile layouts; all three need explicit dismissal and managed focus when modal.",
      "zh": "模态对话框居中显示，挡住底下的界面，适合简短的决策或需要专注的任务。抽屉从侧边滑入，保留更多视觉上下文，适合浏览或编辑。底部面板同样贴着屏幕边缘，多从底部升起，用于紧凑操作或移动端布局；三者处于模态时都需要明确的关闭方式和受管的焦点。"
    },
    "aka": {
      "en": [
        "modal",
        "side panel",
        "slide-over",
        "bottom sheet"
      ],
      "zh": [
        "模态框",
        "侧面板",
        "侧滑面板",
        "底部面板"
      ]
    },
    "fuzzy": {
      "en": [
        "the popup in the middle that blocks the page",
        "the panel that slides in from the side",
        "the tray that comes up from the bottom",
        "an overlay for editing without leaving the page",
        "the floating box with a dark background behind it"
      ],
      "zh": [
        "中间那个挡住页面的弹窗",
        "从侧边滑进来的面板",
        "从底部升上来的托盘",
        "不离开页面就能编辑的覆盖层",
        "背后带深色背景的浮动框"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<dialog>"
      },
      {
        "framework": "HTML",
        "symbol": "HTMLDialogElement.showModal()"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"dialog\""
      },
      {
        "framework": "Radix",
        "symbol": "Dialog"
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Sheet"
      }
    ],
    "prompt": {
      "en": "Use a Modal Dialog built with <dialog> and open it with HTMLDialogElement.showModal() so the browser places it in the top layer, makes the page behind it inert, provides ::backdrop, and supports Escape. Use a side Drawer for contextual editing or a bottom Sheet for compact/mobile actions; add a scrim and modal focus management only when those surfaces are actually modal.",
      "zh": "用 <dialog> 构建模态对话框，并用 HTMLDialogElement.showModal() 打开，这样浏览器会把它放进顶层、让背后的页面变为 inert、提供 ::backdrop 并支持 Escape 键。需要带上下文的编辑用侧边抽屉（Drawer），紧凑或移动端操作用底部面板（Sheet）；只有当这些界面确实是模态时，才添加遮罩层（scrim）和模态焦点管理。"
    },
    "debugPrompt": {
      "en": "Debug my dialog/drawer/sheet (HTMLDialogElement, Radix Dialog, vaul). Rule out: show() used where showModal() was needed so there is no backdrop and no inert background; body scroll not locked so the page scrolls behind; focus not returned to the trigger on close; Escape closing it because onCancel is unhandled when you wanted it blocked; a nested dialog closing its parent. The symptom:",
      "zh": "调试我的对话框/抽屉/底部面板（HTMLDialogElement、Radix Dialog、vaul）。逐一排除：该用 showModal() 的地方用了 show()，导致没有 ::backdrop、背景也不是 inert；body 滚动没锁住，页面在背后跟着滚；关闭后焦点没有还给触发按钮；想拦截 Escape 却没处理 onCancel，导致一按就关；嵌套对话框把父级也关掉了。症状是："
    },
    "parts": [
      {
        "id": "modal-surface",
        "name": {
          "en": "Modal surface",
          "zh": "模态界面"
        },
        "api": "<dialog>",
        "description": {
          "en": "“The actual floating box in the middle” is the modal surface.",
          "zh": "“中间那个真正的浮动框”就是模态界面。"
        },
        "prompt": {
          "en": "the <dialog> modal surface centered in the top layer above its backdrop",
          "zh": "居中于顶层、位于 ::backdrop 之上的 <dialog> 模态界面"
        }
      },
      {
        "id": "scrim",
        "name": {
          "en": "Scrim",
          "zh": "遮罩层（Scrim）"
        },
        "api": "::backdrop",
        "description": {
          "en": "“The dark see-through background behind the popup” is the scrim.",
          "zh": "“弹窗背后那层深色半透明的背景”就是遮罩层。"
        },
        "prompt": {
          "en": "the <dialog>::backdrop scrim covering and dimming the page behind the modal surface",
          "zh": "覆盖并压暗模态界面背后页面的 <dialog>::backdrop 遮罩层"
        }
      }
    ],
    "related": [
      "scrim",
      "popover-dropdown-tooltip",
      "sheet",
      "sidebar",
      "lightbox",
      "hamburger-menu"
    ],
    "demo": "web/dialog-drawer-sheet"
  },
  {
    "slug": "popover-dropdown-tooltip",
    "platform": "web",
    "name": {
      "en": "Popover vs. Dropdown Menu vs. Tooltip",
      "zh": "弹出框 vs. 下拉菜单 vs. 工具提示"
    },
    "tagline": {
      "en": "Three anchored overlays with different triggers, content, and dismissal rules",
      "zh": "三种锚定式覆盖层，触发方式、内容和关闭规则各不相同"
    },
    "description": {
      "en": "A popover opens on click and can contain rich text, controls, or forms; it stays until explicitly or externally dismissed. A dropdown menu also opens on click, but presents a keyboard-navigable list of actions and normally closes after selection. A tooltip is a brief, non-interactive label that appears on hover or keyboard focus and disappears when that trigger is left or blurred.",
      "zh": "弹出框（popover）点击触发，可以装富文本、控件或表单，一直停留到被显式关闭或点击外部关闭。下拉菜单同样点击触发，但呈现的是可键盘导航的操作列表，通常选中后即关闭。工具提示是简短、不可交互的标签，悬停或键盘聚焦时出现，指针离开或失焦时消失。"
    },
    "aka": {
      "en": [
        "popup",
        "menu",
        "hover hint",
        "toggletip"
      ],
      "zh": [
        "弹窗",
        "菜单",
        "悬停提示",
        "开关式提示"
      ]
    },
    "fuzzy": {
      "en": [
        "the little box attached to a button",
        "the list that opens under a menu button",
        "the label that appears when you hover",
        "a popup with controls inside it",
        "the tiny explanation next to an icon"
      ],
      "zh": [
        "挂在按钮上的小框",
        "菜单按钮下面展开的列表",
        "悬停时出现的小标签",
        "里面带控件的弹窗",
        "图标旁边的小说明"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "popover"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"tooltip\""
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"menu\""
      },
      {
        "framework": "Radix",
        "symbol": "Popover"
      },
      {
        "framework": "Radix",
        "symbol": "DropdownMenu"
      },
      {
        "framework": "Radix",
        "symbol": "Tooltip"
      }
    ],
    "prompt": {
      "en": "Use the HTML popover attribute for the click-triggered rich overlay, role=\"menu\" for the keyboard-navigable action list, and role=\"tooltip\" only for a brief non-interactive hover or focus hint. Link the tooltip from its trigger with aria-describedby, keep every overlay anchored to its trigger, and implement the correct Escape, outside-click, and focus-dismissal behavior for each pattern.",
      "zh": "点击触发的富内容覆盖层用 HTML popover 属性，可键盘导航的操作列表用 role=\"menu\"，简短、不可交互的悬停或聚焦提示才用 role=\"tooltip\"。用 aria-describedby 把工具提示关联到它的触发元素，让每个覆盖层都锚定在触发元素上，并为每种模式实现正确的 Escape、点击外部和焦点关闭行为。"
    },
    "debugPrompt": {
      "en": "Debug my popover/dropdown/tooltip (Popover API, Radix, floating-ui). Rule out: the wrong primitive — tooltips are hover+focus, never interactive content; the panel clipped by an overflow ancestor instead of portaled to body or using the top-layer Popover API; flip/shift middleware missing so it overflows at viewport edges; outside-click closing it before the inside click registers. The symptom:",
      "zh": "调试我的弹出框/下拉菜单/工具提示（Popover API、Radix、floating-ui）。逐一排除：用错了基础组件——工具提示只响应悬停和聚焦，绝不放可交互内容；面板被 overflow 祖先裁掉，没有 portal 到 body 或使用顶层的 Popover API；缺少 flip/shift 中间件，导致在视口边缘溢出；外部点击在内部点击生效之前就先把它关了。症状是："
    },
    "parts": [
      {
        "id": "overlay-trigger",
        "name": {
          "en": "Overlay trigger",
          "zh": "覆盖层触发器"
        },
        "api": "popovertarget",
        "description": {
          "en": "“The button the little box is attached to” is the overlay trigger.",
          "zh": "“小框挂着的那个按钮”就是覆盖层触发器。"
        },
        "prompt": {
          "en": "the popovertarget overlay trigger that owns and anchors the opened surface",
          "zh": "拥有并锚定弹出界面的 popovertarget 覆盖层触发器"
        }
      },
      {
        "id": "menu-selection-highlight",
        "name": {
          "en": "Menu selection highlight",
          "zh": "菜单选中高亮"
        },
        "api": "role=\"menuitem\"",
        "description": {
          "en": "“The bar behind the dropdown action the arrows are on” is the menu selection highlight.",
          "zh": "“方向键停在下拉操作上时背后那条高亮”就是菜单选中高亮。"
        },
        "prompt": {
          "en": "the selection highlight behind the active role=\"menuitem\" in a keyboard-navigable dropdown menu",
          "zh": "可键盘导航的下拉菜单中，当前激活 role=\"menuitem\" 背后的选中高亮"
        }
      },
      {
        "id": "tooltip-arrow",
        "name": {
          "en": "Tooltip arrow",
          "zh": "工具提示箭头"
        },
        "api": "Tooltip.Arrow",
        "description": {
          "en": "“The tiny point aiming the hover label at the icon” is the tooltip arrow.",
          "zh": "“把悬停标签指向图标的小尖角”就是工具提示箭头。"
        },
        "prompt": {
          "en": "the Radix Tooltip.Arrow pointing from the role=\"tooltip\" hint back to its trigger",
          "zh": "从 role=\"tooltip\" 提示指回触发元素的 Radix Tooltip.Arrow"
        }
      }
    ],
    "related": [
      "dialog-drawer-sheet",
      "hover-card",
      "context-menu",
      "popover"
    ],
    "demo": "web/popover-dropdown-tooltip"
  },
  {
    "slug": "scrim",
    "platform": "web",
    "name": {
      "en": "Scrim (Backdrop / Overlay)",
      "zh": "遮罩层（背景遮罩 / 覆盖层）"
    },
    "tagline": {
      "en": "The translucent layer that separates a modal surface from the page",
      "zh": "把模态界面与页面隔开的那层半透明层"
    },
    "description": {
      "en": "A scrim is the translucent full-area layer between an open modal surface and the content behind it. It lowers background contrast, prevents accidental interaction, and makes the active layer obvious. Native HTML dialogs expose this layer as the ::backdrop pseudo-element.",
      "zh": "遮罩层是位于打开的模态界面与背后内容之间的半透明全屏层。它压低背景对比度、防止误触，并让当前活跃层一目了然。原生 HTML 对话框把这层暴露为 ::backdrop 伪元素。"
    },
    "aka": {
      "en": [
        "backdrop",
        "overlay",
        "modal overlay"
      ],
      "zh": [
        "背景遮罩",
        "覆盖层",
        "模态遮罩"
      ]
    },
    "fuzzy": {
      "en": [
        "the dark see-through layer behind a popup",
        "the page dimming when a modal opens",
        "the grey overlay behind a dialog",
        "the layer that blocks clicks behind the panel",
        "the faded background under a popup",
        "the greyed out background behind a popup"
      ],
      "zh": [
        "弹窗背后那层深色半透明层",
        "模态框打开时页面变暗",
        "对话框背后的灰色蒙层",
        "挡住面板后面点击的那层",
        "弹窗底下变灰变淡的背景",
        "弹窗背后灰掉的背景"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "::backdrop"
      },
      {
        "framework": "HTML",
        "symbol": "<dialog>"
      },
      {
        "framework": "CSS",
        "symbol": "backdrop-filter"
      }
    ],
    "prompt": {
      "en": "Add a scrim behind the modal using the <dialog>::backdrop pseudo-element. It should cover the viewport, dim and optionally blur the page, intercept pointer input, and fade reversibly with the modal.",
      "zh": "用 <dialog>::backdrop 伪元素在模态框背后添加遮罩层。它应覆盖整个视口，压暗页面（可选地加模糊），拦截指针输入，并随模态框一起可逆地淡入淡出。"
    },
    "debugPrompt": {
      "en": "Debug my scrim/backdrop (::backdrop, fixed overlay). Rule out: scrolling chaining through to the page — set overscroll-behavior contain and lock body scroll; the scrim stacking under content because a transformed ancestor created its own stacking context; pointer-events still active while it fades out so it eats clicks invisibly; the dialog ::backdrop unstylable because the dialog was opened with show() not showModal(). The symptom:",
      "zh": "调试我的遮罩层（::backdrop、fixed 覆盖层）。逐一排除：滚动穿透到了页面——设置 overscroll-behavior: contain 并锁定 body 滚动；某个带 transform 的祖先建了自己的层叠上下文，把遮罩压到了内容下面；淡出期间 pointer-events 仍然生效，看不见却在吃点击；对话框是用 show() 而不是 showModal() 打开的，导致 ::backdrop 无法设置样式。症状是："
    },
    "parts": [
      {
        "id": "dim-layer",
        "name": {
          "en": "Dim layer",
          "zh": "压暗层"
        },
        "api": "::backdrop",
        "description": {
          "en": "“The dark see-through layer behind the popup” is the scrim's dim layer.",
          "zh": "“弹窗背后那层深色半透明层”就是遮罩层的压暗层。"
        },
        "prompt": {
          "en": "the <dialog>::backdrop dim layer covering the entire viewport behind the modal",
          "zh": "覆盖模态框背后整个视口的 <dialog>::backdrop 压暗层"
        }
      },
      {
        "id": "backdrop-blur",
        "name": {
          "en": "Backdrop blur",
          "zh": "背景模糊"
        },
        "api": "backdrop-filter",
        "description": {
          "en": "“The page going soft behind the dark overlay” is the backdrop blur.",
          "zh": "“页面在深色蒙层后面变柔”就是背景模糊。"
        },
        "prompt": {
          "en": "a CSS backdrop-filter blur applied to the scrim so the underlying page softens without blurring the modal",
          "zh": "加在遮罩层上的 CSS backdrop-filter 模糊，让底下的页面变柔而不模糊模态框本身"
        }
      },
      {
        "id": "light-dismiss-area",
        "name": {
          "en": "Light-dismiss area",
          "zh": "轻点关闭区域"
        },
        "api": "HTMLDialogElement.close()",
        "description": {
          "en": "“The outside area I click to close the modal” is the light-dismiss area.",
          "zh": "“点一下就能关掉模态框的外部区域”就是轻点关闭区域。"
        },
        "prompt": {
          "en": "the scrim's light-dismiss area calling HTMLDialogElement.close() only when the click lands outside the dialog surface",
          "zh": "遮罩层的轻点关闭区域：只在点击落在对话框界面之外时调用 HTMLDialogElement.close()"
        }
      }
    ],
    "related": [
      "dialog-drawer-sheet",
      "popover-dropdown-tooltip",
      "vibrancy",
      "lightbox",
      "hamburger-menu"
    ],
    "demo": "web/scrim"
  },
  {
    "slug": "skeleton-spinner",
    "platform": "web",
    "name": {
      "en": "Skeleton vs. Spinner",
      "zh": "骨架屏 Skeleton vs. 旋转指示器 Spinner"
    },
    "tagline": {
      "en": "Two loading indicators for predictable layouts and indeterminate waits",
      "zh": "两种加载指示器：一个给布局可预期的内容占位，一个应付时长未知的等待"
    },
    "description": {
      "en": "A skeleton previews the geometry of content that has not arrived, reducing layout shift and making a predictable page feel faster. A spinner communicates an indeterminate wait when the eventual shape is unknown or the operation is detached from a specific layout. Neither should remain after the result or error state is available.",
      "zh": "骨架屏（Skeleton）预览尚未到达的内容的几何结构，减少布局偏移，让可预期的页面感觉更快。旋转指示器（Spinner）用于表达时长未知的等待：最终形态未知，或操作与具体布局无关。无论哪种，结果或错误状态出来后都不该继续留着。"
    },
    "aka": {
      "en": [
        "skeleton screen",
        "placeholder loader",
        "loading spinner",
        "throbber"
      ],
      "zh": [
        "骨架屏",
        "占位加载块",
        "加载转圈",
        "转圈动画"
      ]
    },
    "fuzzy": {
      "en": [
        "the grey shapes while content loads",
        "the pulsing placeholder version of a card",
        "the spinning circle while waiting",
        "fake text lines shown before data arrives",
        "loading animation in an empty area"
      ],
      "zh": [
        "内容加载时那些灰色的块块",
        "一闪一闪的灰色假卡片占位",
        "等待时那个转圈的圆",
        "数据来之前先摆着的假文字行",
        "空白区域里的加载动画"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "aria-busy=\"true\""
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Skeleton"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"status\""
      }
    ],
    "prompt": {
      "en": "Mark the loading region aria-busy=\"true\" and use a skeleton when the final card layout is known, preserving its geometry while data arrives. Use a spinner with role=\"status\" when the wait has no meaningful content shape, and replace either indicator when loading completes.",
      "zh": "把加载区域标记为 aria-busy=\"true\"；如果最终卡片布局已知，用骨架屏（Skeleton），在等待数据期间保持原有的几何结构；如果等待过程没有明确的内容形态，用带 role=\"status\" 的旋转指示器（Spinner）；无论哪种，加载完成后都要替换掉。"
    },
    "debugPrompt": {
      "en": "Debug my skeleton/spinner (loading placeholders). Rule out: skeleton flashing for sub-200ms loads — add an appearance delay; the shimmer looping forever because the error state never replaces it; skeleton shapes not matching real content so the swap causes layout shift; dozens of simultaneously animating placeholders janking scroll. The symptom:",
      "zh": "调试我的骨架屏/旋转指示器（加载占位）。排查：加载时间不到 200ms 时骨架屏一闪而过——加出现延迟；微光扫过动画（shimmer）无限循环，因为错误状态一直没替换它；骨架形状与真实内容不符，替换时造成布局偏移（layout shift）；几十个占位同时动导致滚动卡顿。症状："
    },
    "parts": [
      {
        "id": "skeleton-block",
        "name": {
          "en": "Skeleton block",
          "zh": "骨架块"
        },
        "api": "Skeleton",
        "description": {
          "en": "“The grey shape standing in for a card or image” is a skeleton block.",
          "zh": "「代替卡片或图片的那个灰色形状」就是骨架块。"
        },
        "prompt": {
          "en": "a shadcn/ui Skeleton block matching the final content's exact geometry to prevent layout shift",
          "zh": "一个 shadcn/ui Skeleton 骨架块，与最终内容的几何结构完全一致，防止布局偏移"
        }
      },
      {
        "id": "skeleton-line",
        "name": {
          "en": "Skeleton text line",
          "zh": "骨架文本行"
        },
        "api": "Skeleton",
        "description": {
          "en": "“The fake grey line where text will appear” is a skeleton text line.",
          "zh": "「文字位置上的那条灰色假行」就是骨架文本行。"
        },
        "prompt": {
          "en": "a shadcn/ui Skeleton text line with varied natural widths matching the eventual copy layout",
          "zh": "一个 shadcn/ui Skeleton 骨架文本行，宽度错落有致，贴近最终文案的排版"
        }
      },
      {
        "id": "shimmer-sweep",
        "name": {
          "en": "Shimmer sweep",
          "zh": "微光扫过（Shimmer）"
        },
        "api": "@keyframes",
        "description": {
          "en": "“The little glow moving across the placeholder” is the shimmer sweep.",
          "zh": "「在占位块上扫过去的那道小亮光」就是微光扫过动画。"
        },
        "prompt": {
          "en": "a subtle CSS @keyframes shimmer sweep traveling across the skeleton blocks while aria-busy remains true",
          "zh": "一个用 CSS @keyframes 实现的微妙微光扫过动画，在 aria-busy 为 true 期间持续扫过骨架块"
        }
      },
      {
        "id": "spinner-track",
        "name": {
          "en": "Spinner track and arc",
          "zh": "旋转指示器的轨道与弧段"
        },
        "api": "role=\"status\"",
        "description": {
          "en": "“The faint circle and the darker bit spinning around it” are the spinner track and active arc.",
          "zh": "「那个淡淡的圆圈和绕着它转的深色小段」就是旋转指示器的轨道和活动弧段。"
        },
        "prompt": {
          "en": "a role=\"status\" indeterminate spinner with a quiet circular track and one contrasting rotating arc",
          "zh": "一个 role=\"status\" 的不确定进度旋转指示器：低调的圆形轨道，加一条对比鲜明的旋转弧段"
        }
      }
    ],
    "related": [
      "empty-state",
      "toast",
      "focus-ring-web",
      "text-scramble"
    ],
    "demo": "web/skeleton-spinner"
  },
  {
    "slug": "combobox",
    "platform": "web",
    "name": {
      "en": "Combobox (Autocomplete / Typeahead)",
      "zh": "组合框 Combobox（自动补全 / 输入联想）"
    },
    "tagline": {
      "en": "A text input paired with a filtered list of selectable suggestions",
      "zh": "一个文本输入框，配一个按输入过滤、可供选择的建议列表"
    },
    "description": {
      "en": "A combobox combines an editable text field with a popup list of matching values. Typing narrows the choices while arrow keys move the active option and Enter commits it. Unlike a plain select, it supports searching or free-form input depending on the product rules.",
      "zh": "组合框把可编辑的文本框和匹配值的弹出列表合在一起。输入会收窄选项，方向键移动活动选项，Enter 确认。与普通下拉选择不同，它可以支持搜索或自由输入，取决于产品规则。"
    },
    "aka": {
      "en": [
        "autocomplete",
        "typeahead",
        "search select",
        "editable dropdown"
      ],
      "zh": [
        "自动补全",
        "输入联想",
        "可搜索下拉",
        "可编辑下拉框"
      ]
    },
    "fuzzy": {
      "en": [
        "the input that suggests options as you type",
        "a searchable dropdown field",
        "the text box with matching results underneath",
        "a select where you can type to filter",
        "the address field that autocompletes"
      ],
      "zh": [
        "边打字边给建议的输入框",
        "能搜索的下拉框",
        "下面跟着匹配结果的文本框",
        "能打字过滤的下拉选择",
        "会自动补全的地址栏"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "role=\"combobox\""
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"listbox\""
      },
      {
        "framework": "ARIA",
        "symbol": "aria-expanded"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-controls"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-activedescendant"
      },
      {
        "framework": "HTML",
        "symbol": "<datalist>",
        "note": {
          "en": "a native limited alternative",
          "zh": "原生但功能有限的替代方案"
        }
      }
    ],
    "prompt": {
      "en": "Build a labelled Combobox with role=\"combobox\" and a controlled role=\"listbox\" popup. Keep aria-expanded and aria-controls in sync, give each result role=\"option\", retain DOM focus in the input with aria-activedescendant, and support Arrow keys, Enter, and Escape without autofocusing on mount.",
      "zh": "构建一个带标签的组合框（Combobox）：输入框用 role=\"combobox\"，受控的建议弹层用 role=\"listbox\"。保持 aria-expanded 和 aria-controls 同步，给每个结果 role=\"option\"；DOM 焦点留在输入框里，用 aria-activedescendant 指示高亮项；支持方向键、Enter、Escape，挂载时不要自动聚焦。"
    },
    "debugPrompt": {
      "en": "Debug my combobox (role=combobox, aria-activedescendant, cmdk/Radix). Rule out: the listbox closing on blur before the option click lands — handle selection on pointerdown or check relatedTarget; the highlighted index not resetting when the filter changes; aria-activedescendant pointing at a filtered-out option id; the mobile keyboard covering the list because nothing scrolls the field into view. The symptom:",
      "zh": "调试我的组合框（role=combobox、aria-activedescendant、cmdk/Radix）。排查：blur 时列表先关闭，选项的点击还没落上——在 pointerdown 里处理选中，或检查 relatedTarget；过滤条件变化后高亮索引没有重置；aria-activedescendant 指向已被过滤掉的 option id；移动端键盘盖住列表，因为没有东西把输入框滚进可视区。症状："
    },
    "parts": [
      {
        "id": "combobox-input",
        "name": {
          "en": "Combobox input",
          "zh": "组合框输入框"
        },
        "api": "role=\"combobox\"",
        "description": {
          "en": "“The searchable dropdown field I type into” is the combobox input.",
          "zh": "「我往里打字、能搜索的那个下拉框」就是组合框输入框。"
        },
        "prompt": {
          "en": "the role=\"combobox\" text input controlling the suggestions popup and retaining DOM focus",
          "zh": "role=\"combobox\" 的文本输入框，控制建议弹层并持有 DOM 焦点"
        }
      },
      {
        "id": "listbox-popup",
        "name": {
          "en": "Listbox popup",
          "zh": "列表弹层（Listbox）"
        },
        "api": "role=\"listbox\"",
        "description": {
          "en": "“The matching results underneath the field” are the listbox popup.",
          "zh": "「输入框下面那排匹配结果」就是列表弹层。"
        },
        "prompt": {
          "en": "the role=\"listbox\" suggestions popup anchored directly beneath the combobox input",
          "zh": "role=\"listbox\" 的建议弹层，锚定在组合框输入框正下方"
        }
      },
      {
        "id": "active-option",
        "name": {
          "en": "Active option",
          "zh": "活动选项"
        },
        "api": "aria-activedescendant",
        "description": {
          "en": "“The result highlighted as I press the arrow keys” is the active option.",
          "zh": "「我按方向键时高亮的那条结果」就是活动选项。"
        },
        "prompt": {
          "en": "the aria-activedescendant active option, visibly highlighted while DOM focus remains in the combobox input",
          "zh": "由 aria-activedescendant 指示的活动选项，视觉上明显高亮，DOM 焦点始终留在组合框输入框里"
        }
      },
      {
        "id": "selected-option-checkmark",
        "name": {
          "en": "Selected-option checkmark",
          "zh": "已选项对勾"
        },
        "api": "aria-selected",
        "description": {
          "en": "“The checkmark next to the choice I already picked” is the selected-option indicator.",
          "zh": "「我已经选中的那项旁边的对勾」就是已选项指示。"
        },
        "prompt": {
          "en": "the checkmark beside a role=\"option\" with aria-selected=\"true\" in the combobox listbox",
          "zh": "组合框列表中 aria-selected=\"true\" 的 role=\"option\" 旁边的对勾"
        }
      }
    ],
    "related": [
      "command-palette",
      "popup-pulldown-combo",
      "popover-dropdown-tooltip"
    ],
    "demo": "web/combobox"
  },
  {
    "slug": "command-palette",
    "platform": "web",
    "name": {
      "en": "Command Palette",
      "zh": "命令面板 Command Palette"
    },
    "tagline": {
      "en": "A keyboard-first searchable launcher for actions and navigation",
      "zh": "键盘优先的可搜索启动器，用来执行操作和跳转导航"
    },
    "description": {
      "en": "A command palette is a keyboard-first overlay that searches actions, pages, and objects from one place. It commonly opens with ⌘K or Ctrl+K, highlights one result at a time, and executes the selected command with Enter. It is broader than a combobox because it launches heterogeneous commands rather than choosing one field value.",
      "zh": "命令面板是键盘优先的浮层，在一个地方搜索操作、页面和对象。通常用 ⌘K 或 Ctrl+K 打开，一次高亮一条结果，Enter 执行选中命令。它比组合框更宽：启动的是五花八门的命令，而不是给某个字段选一个值。"
    },
    "aka": {
      "en": [
        "command menu",
        "quick actions",
        "launcher",
        "command bar"
      ],
      "zh": [
        "命令菜单",
        "快捷操作",
        "启动器",
        "命令栏"
      ]
    },
    "fuzzy": {
      "en": [
        "the command k menu",
        "the searchable list of app actions",
        "the quick launcher in the middle of the screen",
        "the keyboard popup for jumping anywhere",
        "the vscode style command search",
        "the cmd k popup"
      ],
      "zh": [
        "按 ⌘K 弹出的那个菜单",
        "能搜索应用操作的列表",
        "屏幕中间的快速启动器",
        "用键盘想去哪就去哪的弹窗",
        "VS Code 那种命令搜索",
        "⌘K 弹窗"
      ]
    },
    "api": [
      {
        "framework": "shadcn/ui",
        "symbol": "Command"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"dialog\""
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"combobox\""
      },
      {
        "framework": "Radix",
        "symbol": "Dialog"
      }
    ],
    "prompt": {
      "en": "Add a Command Palette using the shadcn/ui Command component inside a role=\"dialog\", opened by ⌘K or Ctrl+K. Filter actions as the user types, support arrow-key selection and Enter, and restore focus to the invoking control on dismissal.",
      "zh": "用 shadcn/ui 的 Command 组件加一个命令面板，放在 role=\"dialog\" 里，用 ⌘K 或 Ctrl+K 打开。随用户输入过滤操作，支持方向键选择和 Enter 执行，关闭后把焦点还给触发它的控件。"
    },
    "debugPrompt": {
      "en": "Debug my command palette (cmdk, Dialog + Command). Rule out: the cmd/ctrl-K listener attached to the wrong scope or eaten by the browser; the filter state persisting from the previous open — reset on open; focus escaping the dialog because the trap ignores portaled content; keydown firing during IME composition (check isComposing); the palette rendered under a higher stacking context. The symptom:",
      "zh": "调试我的命令面板（cmdk、Dialog + Command）。排查：⌘/Ctrl+K 监听器挂错了作用域，或被浏览器吃掉；上次打开时的过滤状态还留着——打开时要重置；焦点逃出 dialog，因为焦点陷阱忽略了 portal 渲染的内容；IME 输入法组词期间触发了 keydown（检查 isComposing）；面板被更高的层叠上下文压在下面。症状："
    },
    "parts": [
      {
        "id": "command-input",
        "name": {
          "en": "Command input",
          "zh": "命令输入框"
        },
        "api": "CommandInput",
        "description": {
          "en": "“The search field at the top of the ⌘K menu” is the command input.",
          "zh": "「⌘K 菜单顶部的搜索框」就是命令输入框。"
        },
        "prompt": {
          "en": "the shadcn/ui CommandInput at the top of the command palette, filtering commands as the user types",
          "zh": "命令面板顶部的 shadcn/ui CommandInput，随用户输入过滤命令"
        }
      },
      {
        "id": "command-group",
        "name": {
          "en": "Command group",
          "zh": "命令分组"
        },
        "api": "CommandGroup",
        "description": {
          "en": "“The labeled section grouping similar actions” is a command group.",
          "zh": "「把同类操作归在一起、带小标题的分区」就是命令分组。"
        },
        "prompt": {
          "en": "a shadcn/ui CommandGroup with a quiet heading above a related set of command items",
          "zh": "一个 shadcn/ui CommandGroup，低调的小标题下面是一组相关命令项"
        }
      },
      {
        "id": "active-command",
        "name": {
          "en": "Active command",
          "zh": "活动命令"
        },
        "api": "CommandItem",
        "description": {
          "en": "“The result with the highlight that Enter will run” is the active command.",
          "zh": "「高亮显示、按 Enter 就会执行的那条结果」就是活动命令。"
        },
        "prompt": {
          "en": "the active shadcn/ui CommandItem with a full-row selection highlight showing what Enter will execute",
          "zh": "活动的 shadcn/ui CommandItem，整行选中高亮，表明 Enter 将执行什么"
        }
      },
      {
        "id": "command-shortcut",
        "name": {
          "en": "Command shortcut",
          "zh": "命令快捷键"
        },
        "api": "CommandShortcut",
        "description": {
          "en": "“The ⌘ letters aligned on the right of an action” are the command shortcut.",
          "zh": "「操作项右边对齐的那几个 ⌘ 字母」就是命令快捷键。"
        },
        "prompt": {
          "en": "the shadcn/ui CommandShortcut aligned at the trailing edge of its command item",
          "zh": "shadcn/ui CommandShortcut，对齐在命令项的末尾边缘"
        }
      }
    ],
    "related": [
      "combobox",
      "dialog-drawer-sheet",
      "focus-ring-web",
      "toolbar"
    ],
    "demo": "web/command-palette"
  },
  {
    "slug": "accordion",
    "platform": "web",
    "name": {
      "en": "Accordion (Disclosure)",
      "zh": "手风琴 Accordion（披露式展开 Disclosure）"
    },
    "tagline": {
      "en": "Stacked sections whose headings expand and collapse their content",
      "zh": "堆叠的分区，点标题即可展开或收起对应内容"
    },
    "description": {
      "en": "An accordion is a vertical stack of headings that disclose or hide associated content. Opening a section expands it in place and moves the sections below, with either one or several panels allowed open depending on the pattern. Native details and summary elements provide the basic disclosure semantics.",
      "zh": "手风琴是一摞垂直堆叠的标题，各自披露或隐藏对应内容。打开一个分区会在原地展开，把下面的分区往下推；允许同时开一个还是多个，取决于具体模式。原生 details 和 summary 元素自带基本的披露语义。"
    },
    "aka": {
      "en": [
        "disclosure",
        "expandable sections",
        "collapse",
        "expander"
      ],
      "zh": [
        "披露展开",
        "可展开分区",
        "折叠面板",
        "展开器"
      ]
    },
    "fuzzy": {
      "en": [
        "the list where rows open to show more",
        "expand and collapse sections",
        "the faq with clickable questions",
        "stacked panels with little chevrons",
        "the section that pushes content down when opened"
      ],
      "zh": [
        "点开行能展开看更多的列表",
        "能展开收起的分区",
        "问题能点开看答案的 FAQ",
        "一排带小箭头的堆叠面板",
        "一打开就把下面内容顶下去的分区"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<details>"
      },
      {
        "framework": "HTML",
        "symbol": "<summary>"
      },
      {
        "framework": "HTML",
        "symbol": "name",
        "note": {
          "en": "groups details elements so only one is open",
          "zh": "把多个 details 元素编成一组，同时只开一个"
        }
      },
      {
        "framework": "Radix",
        "symbol": "Accordion"
      }
    ],
    "prompt": {
      "en": "Build an Accordion from <details> and <summary> elements. Give grouped <details> elements the same name when only one section may be open, preserve native keyboard behavior, and animate the revealed panel without adding redundant aria-expanded; use aria-expanded only for a fully custom disclosure primitive.",
      "zh": "用 <details> 和 <summary> 元素构建手风琴。同一时刻只允许展开一个分区时，给成组的 <details> 元素相同的 name；保留原生键盘行为；给展开的面板加动画，但不要画蛇添足地加 aria-expanded——只有完全自研的披露原语才需要 aria-expanded。"
    },
    "debugPrompt": {
      "en": "Debug my accordion (details/summary, Radix Accordion). Rule out: height auto refusing to animate — animate grid-template-rows 0fr to 1fr or use interpolate-size; single vs multiple type letting two panels open when one was intended; the default disclosure marker still rendering next to a custom icon; focus landing inside a closed panel because contents were hidden with opacity instead of display. The symptom:",
      "zh": "调试我的手风琴（details/summary、Radix Accordion）。排查：height: auto 没法做动画——改用 grid-template-rows 从 0fr 到 1fr 的动画，或用 interpolate-size；single 和 multiple 类型弄混，本只想开一个面板却开了两个；自定义图标旁边还渲染着默认的披露标记；焦点落进已关闭的面板，因为内容是用 opacity 而不是 display 隐藏的。症状："
    },
    "parts": [
      {
        "id": "disclosure-trigger",
        "name": {
          "en": "Disclosure trigger",
          "zh": "披露触发器"
        },
        "api": "<summary>",
        "description": {
          "en": "“The FAQ question you click to open the answer” is the disclosure trigger.",
          "zh": "「FAQ 里点开答案的那个问题」就是披露触发器。"
        },
        "prompt": {
          "en": "the <summary> disclosure trigger spanning the accordion heading row",
          "zh": "<summary> 披露触发器，铺满手风琴的标题行"
        }
      },
      {
        "id": "disclosure-indicator",
        "name": {
          "en": "Disclosure indicator",
          "zh": "披露指示符"
        },
        "api": "<summary>::marker",
        "description": {
          "en": "“The little chevron that turns when the row opens” is the disclosure indicator.",
          "zh": "「行展开时会转动的小箭头」就是披露指示符。"
        },
        "prompt": {
          "en": "the <summary>::marker disclosure indicator rotating between the closed and open states",
          "zh": "<summary>::marker 披露指示符，在关闭和打开状态之间旋转"
        }
      },
      {
        "id": "disclosure-panel",
        "name": {
          "en": "Disclosure panel",
          "zh": "披露面板"
        },
        "api": "<details>",
        "description": {
          "en": "“The answer area that pushes everything down” is the disclosure panel.",
          "zh": "「一展开就把下面内容全顶下去的答案区」就是披露面板。"
        },
        "prompt": {
          "en": "the <details> disclosure panel revealed directly beneath its summary heading",
          "zh": "<details> 披露面板，在它的 summary 标题正下方展开"
        }
      }
    ],
    "related": [
      "tabs",
      "disclosure-triangle",
      "sidebar"
    ],
    "demo": "web/accordion"
  },
  {
    "slug": "tabs",
    "platform": "web",
    "name": {
      "en": "Tabs",
      "zh": "标签页 Tabs"
    },
    "tagline": {
      "en": "A single row of labels that switches one shared content region",
      "zh": "一排标签，切换同一块共享内容区"
    },
    "description": {
      "en": "Tabs organize peer views into one shared region, with exactly one tab and panel active at a time. The selected label is visually persistent, often with an underline, and keyboard users move across the tab list with arrow keys. Use them for closely related views, not for a sequential workflow.",
      "zh": "标签页把平级的视图组织进同一块共享区域，任何时刻恰好一个标签、一个面板处于活动状态。选中的标签有持续的视觉标识（常见是下划线），键盘用户用方向键在标签列表间移动。标签页适合紧密相关的视图，不适合有先后顺序的流程。"
    },
    "aka": {
      "en": [
        "tabbed interface",
        "tab list",
        "tab bar"
      ],
      "zh": [
        "标签页界面",
        "标签列表",
        "标签栏"
      ]
    },
    "fuzzy": {
      "en": [
        "the row of labels that switches the panel below",
        "sections with an underline under the active one",
        "clickable headings for changing views",
        "the horizontal switcher above content",
        "browser tab style navigation inside a page"
      ],
      "zh": [
        "那排能切换下面面板的标签",
        "当前项底下有条线的切换标签",
        "点了就能换视图的标题",
        "内容上方那个横向切换器",
        "页面里长得像浏览器标签页的导航"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "role=\"tablist\""
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"tab\""
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"tabpanel\""
      },
      {
        "framework": "Radix",
        "symbol": "Tabs"
      }
    ],
    "prompt": {
      "en": "Build accessible Tabs with a role=\"tablist\", one role=\"tab\" marked aria-selected=\"true\", and a matching role=\"tabpanel\" connected with aria-controls and aria-labelledby. Keep only the active tab at tabindex=\"0\", move between tabs with Left and Right Arrow, and switch the shared panel without navigating away.",
      "zh": "构建无障碍的标签页：一个 role=\"tablist\"，其中一个 role=\"tab\" 标记 aria-selected=\"true\"，对应的 role=\"tabpanel\" 用 aria-controls 和 aria-labelledby 互相连接。只有活动标签保持 tabindex=\"0\"，用左右方向键在标签间移动，切换共享面板但不离开页面。"
    },
    "debugPrompt": {
      "en": "Debug my tabs (role=tablist/tab/tabpanel, roving tabindex). Rule out: every tab in the Tab order instead of one roving tabindex with arrow-key movement; panels missing aria-labelledby back-references; the active indicator not moving on resize because its position was measured once; panel state lost on switch because inactive panels unmount when they should hide. The symptom:",
      "zh": "调试我的标签页（role=tablist/tab/tabpanel、roving tabindex）。排查：每个标签都进了 Tab 键序，而不是用单一 roving tabindex 加方向键移动；面板缺少 aria-labelledby 反向引用；窗口缩放时活动指示器不动，因为位置只量了一次；切换后面板状态丢失，因为非活动面板被卸载了，本该只是隐藏。症状："
    },
    "parts": [
      {
        "id": "tab-list",
        "name": {
          "en": "Tab list",
          "zh": "标签列表"
        },
        "api": "role=\"tablist\"",
        "description": {
          "en": "“The whole row of view-switching labels” is the tab list.",
          "zh": "「那整排用来切换视图的标签」就是标签列表。"
        },
        "prompt": {
          "en": "the role=\"tablist\" row containing the peer tab labels as one keyboard-navigation unit",
          "zh": "role=\"tablist\" 的一行，装着平级的标签，作为一个键盘导航单元"
        }
      },
      {
        "id": "active-tab-indicator",
        "name": {
          "en": "Active-tab indicator",
          "zh": "活动标签指示器"
        },
        "api": "aria-selected=\"true\"",
        "description": {
          "en": "“The line that moves under the selected label” is the active-tab indicator.",
          "zh": "「选中标签下面那条会移动的线」就是活动标签指示器。"
        },
        "prompt": {
          "en": "the active-tab indicator under the role=\"tab\" with aria-selected=\"true\", moving smoothly between labels",
          "zh": "aria-selected=\"true\" 的 role=\"tab\" 下方的活动标签指示器，在标签间平滑移动"
        }
      },
      {
        "id": "tab-panel",
        "name": {
          "en": "Tab panel",
          "zh": "标签面板"
        },
        "api": "role=\"tabpanel\"",
        "description": {
          "en": "“The shared content area that changes below the labels” is the tab panel.",
          "zh": "「标签下面那块会跟着变的内容区」就是标签面板。"
        },
        "prompt": {
          "en": "the role=\"tabpanel\" content region linked to its selected tab by aria-labelledby",
          "zh": "role=\"tabpanel\" 内容区，通过 aria-labelledby 与选中标签相连"
        }
      }
    ],
    "related": [
      "accordion",
      "toggle-group",
      "segmented-control"
    ],
    "demo": "web/tabs"
  },
  {
    "slug": "badge-chip-pill",
    "platform": "web",
    "name": {
      "en": "Badge vs. Chip vs. Pill vs. Tag",
      "zh": "徽标 Badge vs. 碎片 Chip vs. 胶囊 Pill vs. 标签 Tag"
    },
    "tagline": {
      "en": "Compact labels distinguished by meaning, shape, and interactivity",
      "zh": "同样是小标签，靠含义、形状和可交互性来区分"
    },
    "description": {
      "en": "A badge is a tiny count or status marker attached to another object. A chip is a compact interactive token that can be selected, edited, or removed; a pill describes the capsule shape rather than a strict behavior. A tag is usually non-interactive category metadata, so choose the term from its job rather than from rounded corners alone.",
      "zh": "徽标（Badge）是挂在另一个对象上的小计数或状态记号。Chip 是紧凑的可交互标记，可以被选中、编辑或移除；胶囊（Pill）描述的是外形，不是严格的行为定义。标签（Tag）通常是不可交互的分类元数据。所以该按用途选词，而不是只看圆角。"
    },
    "aka": {
      "en": [
        "token",
        "lozenge",
        "capsule"
      ],
      "zh": [
        "标记 token",
        "菱形小标签 lozenge",
        "胶囊形标签"
      ]
    },
    "fuzzy": {
      "en": [
        "the little number bubble on an icon",
        "the rounded label with an x",
        "the capsule shaped status label",
        "the small category label on a card",
        "the removable filter bubble",
        "the little red dot on an icon"
      ],
      "zh": [
        "图标上那个带数字的小气泡",
        "带个 × 的圆角小标签",
        "胶囊形状的状态标签",
        "卡片上的分类小标签",
        "能删掉的筛选气泡",
        "图标上的小红点"
      ]
    },
    "api": [
      {
        "framework": "shadcn/ui",
        "symbol": "Badge"
      },
      {
        "framework": "HTML",
        "symbol": "<button>",
        "note": {
          "en": "for a removable or selectable chip",
          "zh": "用于可删除或可选中的 chip"
        }
      },
      {
        "framework": "ARIA",
        "symbol": "aria-label"
      }
    ],
    "prompt": {
      "en": "Use a Badge for the compact unread count, a dismissible Chip for the active filter, a fully rounded Pill for short status text, and a Tag for category metadata. Use shadcn/ui Badge for the non-interactive labels and give any icon-only remove button an aria-label.",
      "zh": "未读数用 Badge（徽标），当前生效的筛选用可关闭的 Chip，短状态文字用全圆角的 Pill（胶囊），分类元数据用 Tag（标签）。不可交互的标签用 shadcn/ui Badge；纯图标的删除按钮要给 aria-label。"
    },
    "debugPrompt": {
      "en": "Debug my badge/chip/pill. Rule out: unbounded counts blowing the layout instead of capping at 99+; the pill wrapping mid-label without white-space nowrap; a chip delete target far smaller than 24px so taps miss; low-contrast fills failing in dark mode because the colors were not themed as a pair. The symptom:",
      "zh": "调试我的 Badge/Chip/Pill。排查：计数没有封顶，撑爆布局——超过 99 显示 99+；胶囊文字从中间换行——缺 white-space: nowrap；chip 的删除点击区域远小于 24px，点不中；深色模式下低对比度填充看不清，因为配色没有成对地做主题适配。症状："
    },
    "parts": [
      {
        "id": "badge-anchor",
        "name": {
          "en": "Badge anchor",
          "zh": "徽标锚点"
        },
        "api": "Badge",
        "description": {
          "en": "“The icon the little number bubble sits on” is the badge anchor.",
          "zh": "「数字小气泡趴在上面的那个图标」就是徽标锚点。"
        },
        "prompt": {
          "en": "the shadcn/ui Badge anchor, with the compact count overlapping its parent icon's upper corner",
          "zh": "shadcn/ui Badge 的锚点：紧凑计数叠在父图标的上角"
        }
      },
      {
        "id": "badge-count",
        "name": {
          "en": "Badge count",
          "zh": "徽标计数"
        },
        "api": "Badge",
        "description": {
          "en": "“The tiny number inside the red bubble” is the badge count.",
          "zh": "「红气泡里的小数字」就是徽标计数。"
        },
        "prompt": {
          "en": "the compact count inside a shadcn/ui Badge, using a circular shape for one digit and a capsule for longer counts",
          "zh": "shadcn/ui Badge 里的紧凑计数：一位数用圆形，多位数用胶囊形"
        }
      },
      {
        "id": "chip-remove-button",
        "name": {
          "en": "Chip remove button",
          "zh": "Chip 删除按钮"
        },
        "api": "<button aria-label>",
        "description": {
          "en": "“The little x inside the filter pill” is the chip's remove button.",
          "zh": "「筛选胶囊里那个小 ×」就是 chip 的删除按钮。"
        },
        "prompt": {
          "en": "the trailing <button aria-label> remove affordance inside a dismissible chip",
          "zh": "可关闭 chip 里末尾的 <button aria-label> 删除操作"
        }
      },
      {
        "id": "selected-chip-state",
        "name": {
          "en": "Selected chip state",
          "zh": "Chip 选中态"
        },
        "api": "aria-pressed",
        "description": {
          "en": "“The filter pill that stays filled after I click it” is the selected chip state.",
          "zh": "「点过之后一直实心填充的那个筛选胶囊」就是 chip 的选中态。"
        },
        "prompt": {
          "en": "the aria-pressed selected state of an interactive chip, with a persistent filled treatment",
          "zh": "可交互 chip 的 aria-pressed 选中态，用持续的实心填充样式"
        }
      }
    ],
    "related": [
      "dock-badge",
      "toggle-group",
      "switch-checkbox-radio"
    ],
    "demo": "web/badge-chip-pill"
  },
  {
    "slug": "breadcrumbs",
    "platform": "web",
    "name": {
      "en": "Breadcrumbs",
      "zh": "面包屑导航 Breadcrumbs"
    },
    "tagline": {
      "en": "A hierarchy trail from the current page back to its ancestors",
      "zh": "一条从当前页面回溯到各级上级的层级路径"
    },
    "description": {
      "en": "Breadcrumbs show the current page's position in a hierarchy and offer direct links back to its ancestors. The final item is the current location rather than a link, and separators are decorative. Deep paths may collapse middle levels into an ellipsis without hiding the root or current page.",
      "zh": "面包屑导航显示当前页在层级中的位置，并提供直达各级上级的链接。最后一项是当前位置，不是链接；分隔符只是装饰。路径很深时可以把中间层级折进省略号，但根层级和当前页不能藏。"
    },
    "aka": {
      "en": [
        "breadcrumb trail",
        "path navigation",
        "hierarchy trail"
      ],
      "zh": [
        "面包屑路径",
        "路径导航",
        "层级路径"
      ]
    },
    "fuzzy": {
      "en": [
        "the home slash section slash current page links",
        "the trail above a page title",
        "links showing where you are in the site",
        "the folder path style navigation",
        "the row with chevrons between page names"
      ],
      "zh": [
        "「首页 / 栏目 / 当前页」那样的链接",
        "页面标题上面那条路径",
        "显示你在网站哪个位置的链接",
        "像文件夹路径那样的导航",
        "页面名之间夹着小箭头的那一行"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<nav>"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-label=\"Breadcrumb\""
      },
      {
        "framework": "ARIA",
        "symbol": "aria-current=\"page\""
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Breadcrumb"
      }
    ],
    "prompt": {
      "en": "Add breadcrumbs inside a <nav aria-label=\"Breadcrumb\">, linking each ancestor and marking the final item aria-current=\"page\". Collapse low-value middle ancestors into an ellipsis when space is tight while keeping the current page visible.",
      "zh": "在 <nav aria-label=\"Breadcrumb\"> 里加面包屑导航：每个上级都做成链接，最后一项标 aria-current=\"page\"。空间紧张时把价值低的中间层级收进省略号，但当前页要始终可见。"
    },
    "debugPrompt": {
      "en": "Debug my breadcrumbs (nav aria-label=breadcrumb, aria-current=page). Rule out: separators typed into the markup so screen readers announce every slash — draw them with CSS pseudo-elements; aria-current missing from the last crumb; long trails needing middle-crumb collapse instead of wrapping to two lines; the current page rendered as a link to itself. The symptom:",
      "zh": "调试我的面包屑导航（nav aria-label=breadcrumb、aria-current=page）。排查：分隔符直接写进了标记里，屏幕阅读器会把每个斜杠都念出来——应该用 CSS 伪元素画；最后一项漏了 aria-current；路径太长时该折叠中间层级，而不是折成两行；当前页被渲染成了指向自己的链接。症状："
    },
    "parts": [
      {
        "id": "breadcrumb-separator",
        "name": {
          "en": "Breadcrumb separator",
          "zh": "面包屑分隔符"
        },
        "api": "aria-hidden=\"true\"",
        "description": {
          "en": "“The little slash or chevron between page names” is the breadcrumb separator.",
          "zh": "「页面名之间的小斜杠或小箭头」就是面包屑分隔符。"
        },
        "prompt": {
          "en": "an aria-hidden=\"true\" decorative breadcrumb separator between hierarchy links",
          "zh": "层级链接之间的装饰性面包屑分隔符，标 aria-hidden=\"true\""
        }
      },
      {
        "id": "current-page-crumb",
        "name": {
          "en": "Current-page crumb",
          "zh": "当前页面包屑"
        },
        "api": "aria-current=\"page\"",
        "description": {
          "en": "“The last page name that is not a link” is the current-page crumb.",
          "zh": "「最后一个不是链接的页面名」就是当前页面包屑。"
        },
        "prompt": {
          "en": "the final breadcrumb marked aria-current=\"page\", styled as the current location rather than a link",
          "zh": "最后一项面包屑标 aria-current=\"page\"，样式是当前位置而非链接"
        }
      },
      {
        "id": "collapsed-ancestors",
        "name": {
          "en": "Collapsed ancestors",
          "zh": "折叠的上级"
        },
        "api": "BreadcrumbEllipsis",
        "description": {
          "en": "“The three dots hiding the middle of the path” are collapsed ancestors.",
          "zh": "「把路径中间藏起来的三个点」就是被折叠的上级。"
        },
        "prompt": {
          "en": "a BreadcrumbEllipsis standing in for low-value middle ancestors while root and current page remain visible",
          "zh": "一个 BreadcrumbEllipsis，代替价值低的中间上级，根层级和当前页保持可见"
        }
      }
    ],
    "related": [
      "sidebar",
      "tabs",
      "toolbar"
    ],
    "demo": "web/breadcrumbs"
  },
  {
    "slug": "sticky-fixed",
    "platform": "web",
    "name": {
      "en": "Sticky vs. Fixed Positioning",
      "zh": "粘性定位 Sticky vs. 固定定位 Fixed"
    },
    "tagline": {
      "en": "Two ways to keep an element visible with different containing blocks",
      "zh": "两种让元素保持可见的定位方式，包含块各不相同"
    },
    "description": {
      "en": "A sticky element participates in normal layout until scrolling reaches its inset, then stays pinned within its containing scroll area. A fixed element is removed from normal flow and anchored to the viewport or a transformed containing block from the start. Sticky is usually right for table and section headers; fixed is typical for persistent viewport controls.",
      "zh": "sticky 元素先参与正常布局，滚动到达它的偏移值后，就钉在所属滚动区域内。fixed 元素从一开始就不在正常流里，锚定在视口（或带变换的包含块）上。表格和分区头部通常该用 sticky；常驻视口的控件才用 fixed。"
    },
    "aka": {
      "en": [
        "sticky header",
        "fixed header",
        "pinned element"
      ],
      "zh": [
        "吸顶头部",
        "固定头部",
        "钉住的元素"
      ]
    },
    "fuzzy": {
      "en": [
        "the header that stays while the panel scrolls",
        "the bar pinned to the top of the screen",
        "the element that starts scrolling then gets stuck",
        "keep this visible while scrolling",
        "the floating button fixed in the corner"
      ],
      "zh": [
        "面板滚动时一直不动的头部",
        "钉在屏幕顶上的那条栏",
        "先跟着滚、滚到位就粘住的元素",
        "滚动时一直让这个可见",
        "固定在角落的悬浮按钮"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "position: sticky"
      },
      {
        "framework": "CSS",
        "symbol": "position: fixed"
      },
      {
        "framework": "CSS",
        "symbol": "top"
      }
    ],
    "prompt": {
      "en": "Use position: sticky with top: 0 for the section header so it scrolls normally until it reaches the top of its nearest scrolling container, then remains there. Reserve position: fixed for UI that must stay anchored to the viewport independently of every scroll container.",
      "zh": "分区头部用 position: sticky 加 top: 0：它先正常滚动，到达最近滚动容器的顶部后就停在那里。position: fixed 只留给必须锚定在视口、不受任何滚动容器影响的 UI。"
    },
    "debugPrompt": {
      "en": "Debug my sticky/fixed positioning. Rule out: sticky doing nothing because an ancestor has overflow hidden/auto/scroll — that is the classic; sticky missing a top/bottom offset so it never engages; fixed behaving like absolute inside a transformed/filtered ancestor; the content jumping when an element switches to fixed because no placeholder reserves its height. The symptom:",
      "zh": "调试我的 sticky/fixed 定位。排查：sticky 完全无效，因为祖先有 overflow: hidden/auto/scroll——经典坑；sticky 没设 top/bottom 偏移，永远不会触发；fixed 在带 transform/filter 的祖先里表现得像 absolute；元素切到 fixed 时内容跳动，因为没有占位保留它的高度。症状："
    },
    "parts": [
      {
        "id": "sticky-threshold",
        "name": {
          "en": "Sticky threshold",
          "zh": "吸顶阈值"
        },
        "api": "top",
        "description": {
          "en": "“The point where the header stops scrolling and sticks” is the sticky threshold.",
          "zh": "「头部停止滚动、粘住不动的那个点」就是吸顶阈值。"
        },
        "prompt": {
          "en": "the CSS top inset defining the threshold where a position: sticky element becomes pinned",
          "zh": "CSS top 偏移值，定义 position: sticky 元素开始钉住的阈值"
        }
      },
      {
        "id": "scroll-container",
        "name": {
          "en": "Sticky scroll container",
          "zh": "吸顶滚动容器"
        },
        "api": "position: sticky",
        "description": {
          "en": "“The panel the sticky header is trapped inside” is its scroll container.",
          "zh": "「把吸顶头部困在里面的那个面板」就是它的滚动容器。"
        },
        "prompt": {
          "en": "the nearest scrolling container that bounds the position: sticky element's travel",
          "zh": "最近的滚动容器，限定 position: sticky 元素的活动范围"
        }
      }
    ],
    "related": [
      "toolbar",
      "sidebar",
      "popover-dropdown-tooltip"
    ],
    "demo": "web/sticky-fixed"
  },
  {
    "slug": "focus-ring-web",
    "platform": "web",
    "name": {
      "en": "Focus Ring (:focus-visible)",
      "zh": "焦点环 Focus Ring（:focus-visible）"
    },
    "tagline": {
      "en": "The keyboard-aware outline that identifies the active control",
      "zh": "感知键盘操作的轮廓线，标识当前活动的控件"
    },
    "description": {
      "en": "A focus ring identifies the element that will receive the next keyboard action. The :focus pseudo-class matches any focused element, while :focus-visible lets the browser show the strong indicator when the input modality or control needs it, most notably during keyboard navigation. Never remove the default outline without supplying an equally visible replacement.",
      "zh": "焦点环标识出将接收下一次键盘操作的元素。:focus 伪类匹配任何获得焦点的元素；:focus-visible 则让浏览器只在输入方式或控件需要时（最典型的就是键盘导航）才显示强指示。永远不要移除默认轮廓却不提供同样醒目的替代。"
    },
    "aka": {
      "en": [
        "focus indicator",
        "keyboard focus outline",
        "focus halo"
      ],
      "zh": [
        "焦点指示器",
        "键盘焦点轮廓",
        "焦点光晕"
      ]
    },
    "fuzzy": {
      "en": [
        "the outline around a button after pressing tab",
        "the blue ring on the selected control",
        "keyboard navigation highlight",
        "the border showing which button has focus",
        "the ring that should not appear on every mouse click"
      ],
      "zh": [
        "按 Tab 后按钮外面那圈线",
        "选中控件上的蓝色圆环",
        "键盘导航时的高亮",
        "显示哪个按钮有焦点的那圈边框",
        "不该每次鼠标点击都出现的那圈环"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": ":focus-visible"
      },
      {
        "framework": "CSS",
        "symbol": ":focus"
      },
      {
        "framework": "HTML",
        "symbol": "tabindex"
      }
    ],
    "prompt": {
      "en": "Style the keyboard focus ring with :focus-visible instead of suppressing the browser outline globally. Make it high contrast and clearly offset from the control; use :focus only for state that must apply regardless of whether focus came from keyboard or pointer.",
      "zh": "用 :focus-visible 给键盘焦点环做样式，不要全局禁用浏览器默认轮廓。焦点环要高对比、与控件明显错开；:focus 只用于无论焦点来自键盘还是指针都必须生效的样式。"
    },
    "debugPrompt": {
      "en": "Debug my focus ring (outline, :focus-visible). Rule out: a global outline:none killing keyboard navigation everywhere; :focus styling mouse clicks when :focus-visible was intended; the ring clipped by an overflow-hidden ancestor — use outline-offset or box-shadow inside; a box-shadow ring invisible against a same-color background; programmatic .focus() not showing a ring without focus-visible options. The symptom:",
      "zh": "调试我的焦点环（outline、:focus-visible）。排查：全局 outline: none 把所有键盘导航焦点都干掉了；本意是 :focus-visible 却用了 :focus，鼠标点击也出现焦点环；焦点环被 overflow: hidden 的祖先裁掉——改用 outline-offset 或内侧 box-shadow；box-shadow 焦点环在同色背景上看不见；用 .focus() 编程聚焦时不显示焦点环，需要 focus-visible 相关选项。症状："
    },
    "parts": [
      {
        "id": "focus-outline",
        "name": {
          "en": "Focus outline",
          "zh": "焦点轮廓"
        },
        "api": "outline",
        "description": {
          "en": "“The blue line around the button after I press Tab” is the focus outline.",
          "zh": "「按 Tab 后按钮周围那圈蓝线」就是焦点轮廓。"
        },
        "prompt": {
          "en": "a high-contrast CSS outline around the :focus-visible control",
          "zh": ":focus-visible 控件周围一圈高对比的 CSS outline"
        }
      },
      {
        "id": "outline-offset",
        "name": {
          "en": "Outline offset",
          "zh": "轮廓偏移"
        },
        "api": "outline-offset",
        "description": {
          "en": "“The little gap between the control and its focus line” is the outline offset.",
          "zh": "「控件和焦点线之间那条小缝隙」就是轮廓偏移。"
        },
        "prompt": {
          "en": "a CSS outline-offset leaving a visible gap between the :focus-visible ring and the control edge",
          "zh": "CSS outline-offset，在 :focus-visible 焦点环和控件边缘之间留出可见缝隙"
        }
      }
    ],
    "related": [
      "form-field",
      "focus-ring",
      "command-palette",
      "switch-checkbox-radio",
      "toggle-group"
    ],
    "demo": "web/focus-ring-web"
  },
  {
    "slug": "empty-state",
    "platform": "web",
    "name": {
      "en": "Empty State",
      "zh": "空状态 Empty State"
    },
    "tagline": {
      "en": "Purposeful guidance shown when a view has no content yet",
      "zh": "视图还没有内容时，给出有目的的引导"
    },
    "description": {
      "en": "An empty state replaces a content view when there are no items to show, whether on first use, after filtering, or after everything is removed. It explains the situation without blame and offers the most useful next action. It is a designed product state, not merely whitespace or an error message.",
      "zh": "没有内容可显示时——无论首次使用、过滤之后，还是内容被删光——空状态就代替内容视图出场。它不带责备地解释现状，并给出最有用的下一步操作。空状态是被设计出来的产品状态，不只是留白，也不是错误消息。"
    },
    "aka": {
      "en": [
        "blank state",
        "zero state",
        "first-use state",
        "no-results state"
      ],
      "zh": [
        "空白状态",
        "零状态",
        "首次使用状态",
        "无结果状态"
      ]
    },
    "fuzzy": {
      "en": [
        "the screen shown when there is nothing here",
        "the panel before the user creates their first item",
        "the no results message with a button",
        "the blank list explanation",
        "what to show instead of an empty white box"
      ],
      "zh": [
        "什么都没有时显示的那个界面",
        "用户还没创建第一项内容前的面板",
        "带个按钮的「没有结果」提示",
        "空列表里的说明文字",
        "与其摆个空白框，不如显示点什么"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<section>"
      },
      {
        "framework": "ARIA",
        "symbol": "aria-labelledby"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"status\"",
        "note": {
          "en": "for a dynamically produced no-results message",
          "zh": "用于动态产生的无结果消息"
        }
      }
    ],
    "prompt": {
      "en": "Create an empty state as a labelled <section> with a simple icon, a one-line explanation of why the view is empty, and one primary action that resolves it. For a dynamically produced no-results state, announce the message with role=\"status\" without moving focus.",
      "zh": "把空状态做成一个带标签的 <section>：一个简洁图标、一句解释为什么是空的话、一个能解决问题的主动作。动态产生的无结果状态，用 role=\"status\" 播报消息，但不移动焦点。"
    },
    "debugPrompt": {
      "en": "Debug my empty state. Rule out: the empty state flashing before data arrives because loading and truly-empty are one boolean; errors rendering the empty state instead of an error state; the call-to-action unreachable by keyboard; layout jumping when real content replaces it because heights were never reserved. The symptom:",
      "zh": "调试我的空状态。排查：数据到达前空状态一闪而过——加载中和真空共用一个布尔值；出错时渲染成空状态而不是错误状态；行动号召按钮键盘到不了；真实内容替换空状态时布局跳动，因为没预留高度。症状："
    },
    "parts": [
      {
        "id": "state-illustration",
        "name": {
          "en": "State illustration",
          "zh": "状态插画"
        },
        "api": "aria-hidden=\"true\"",
        "description": {
          "en": "“The quiet picture showing what this empty area is for” is the state illustration.",
          "zh": "「那张安静的插画，告诉你这块空地是干嘛的」就是状态插画。"
        },
        "prompt": {
          "en": "an aria-hidden=\"true\" empty-state illustration that reinforces the missing-content state without becoming the label",
          "zh": "一张 aria-hidden=\"true\" 的空状态插画，烘托「没有内容」的状态，但不充当标签"
        }
      },
      {
        "id": "recovery-action",
        "name": {
          "en": "Recovery action",
          "zh": "恢复操作"
        },
        "api": "<button>",
        "description": {
          "en": "“The button that gets me out of the blank screen” is the recovery action.",
          "zh": "「带我走出空白屏的那个按钮」就是恢复操作。"
        },
        "prompt": {
          "en": "the primary <button> recovery action in the empty state, resolving why the view has no content",
          "zh": "空状态里的主要 <button> 恢复操作，解决视图为空的问题"
        }
      }
    ],
    "related": [
      "skeleton-spinner",
      "toast",
      "command-palette"
    ],
    "demo": "web/empty-state"
  },
  {
    "slug": "hover-card",
    "platform": "web",
    "name": {
      "en": "Hover Card",
      "zh": "悬停卡片 Hover Card"
    },
    "tagline": {
      "en": "A rich, non-modal preview revealed from a hovered or focused reference",
      "zh": "悬停或聚焦某个参照物时浮现的富内容、非模态预览"
    },
    "description": {
      "en": "A hover card is a rich preview associated with a person, place, or linked object. It reveals more information than a tooltip and may include passive metadata or a small number of actions, while leaving the underlying page usable. Its open and close delays must allow the pointer to move from the trigger into the card without flicker.",
      "zh": "悬停卡片是与人、地点或链接对象关联的富内容预览。它比工具提示信息量大，可以放被动展示的元数据或少量操作，同时底下的页面照常可用。开关延迟必须设计得当，让指针能从触发器移进卡片而不闪烁。"
    },
    "aka": {
      "en": [
        "hover preview",
        "profile preview",
        "preview card"
      ],
      "zh": [
        "悬停预览",
        "资料预览",
        "预览卡片"
      ]
    },
    "fuzzy": {
      "en": [
        "the profile preview when you hover a username",
        "the rich popup that appears over a link",
        "the little user card shown on hover",
        "a tooltip with an avatar and details",
        "the preview before opening a profile"
      ],
      "zh": [
        "悬停用户名时弹出的资料预览",
        "链接上浮出来的富内容弹窗",
        "悬停时出来的用户小卡片",
        "带头像和详细信息的工具提示",
        "打开主页前先看到的预览"
      ]
    },
    "api": [
      {
        "framework": "Radix",
        "symbol": "HoverCard"
      },
      {
        "framework": "CSS",
        "symbol": ":hover"
      },
      {
        "framework": "HTML",
        "symbol": "popover"
      },
      {
        "framework": "CSS",
        "symbol": ":focus-visible"
      }
    ],
    "prompt": {
      "en": "Add a hover card using Radix HoverCard to preview the linked profile with an avatar and summary. Reveal it from both hover and keyboard focus after a short delay, keep it open while the pointer crosses into the card, and reverse the opacity and transform transitions smoothly on exit.",
      "zh": "用 Radix HoverCard 加一个悬停卡片，预览链接对应的资料（头像加简介）。悬停和键盘聚焦都能触发，短暂延迟后显示；指针移进卡片时保持打开；退出时 opacity 和 transform 过渡平滑反向播放。"
    },
    "debugPrompt": {
      "en": "Debug my hover card (Radix HoverCard, mouseenter/mouseleave). Rule out: the card closing while the pointer travels from trigger to card — you need a hover-intent delay or safe-polygon; touch devices never opening it because there is no hover — provide a tap/focus path; open/close delays tuned so short it flickers on skim; the card trapped under another stacking context. The symptom:",
      "zh": "调试我的悬停卡片（Radix HoverCard、mouseenter/mouseleave）。排查：指针从触发器移向卡片的途中卡片就关了——需要悬停意图延迟或安全多边形（safe-polygon）；触屏设备上没有悬停所以永远打不开——提供点按/聚焦路径；开关延迟调得太短，指针一扫而过就闪烁；卡片被另一个层叠上下文压在下面。症状："
    },
    "parts": [
      {
        "id": "preview-trigger",
        "name": {
          "en": "Preview trigger",
          "zh": "预览触发器"
        },
        "api": "HoverCardTrigger",
        "description": {
          "en": "“The username that reveals a card when I hover it” is the preview trigger.",
          "zh": "「我一悬停就弹出卡片的那个用户名」就是预览触发器。"
        },
        "prompt": {
          "en": "the Radix HoverCardTrigger reference that reveals its preview from both hover and keyboard focus",
          "zh": "Radix HoverCardTrigger 参照物，悬停和键盘聚焦都能唤出预览"
        }
      },
      {
        "id": "preview-content",
        "name": {
          "en": "Preview content",
          "zh": "预览内容"
        },
        "api": "HoverCardContent",
        "description": {
          "en": "“The richer little profile popup” is the preview content.",
          "zh": "「那个内容更丰富的小资料弹窗」就是预览内容。"
        },
        "prompt": {
          "en": "the Radix HoverCardContent preview surface with richer passive details than a tooltip",
          "zh": "Radix HoverCardContent 预览面板，被动展示的详情比工具提示更丰富"
        }
      }
    ],
    "related": [
      "popover-dropdown-tooltip",
      "combobox",
      "focus-ring-web",
      "popover"
    ],
    "demo": "web/hover-card"
  },
  {
    "slug": "switch-checkbox-radio",
    "platform": "web",
    "name": {
      "en": "Switch vs. Checkbox vs. Radio",
      "zh": "开关 Switch vs. 复选框 Checkbox vs. 单选按钮 Radio"
    },
    "tagline": {
      "en": "Controls for an on/off setting, independent choices, or one choice from a group",
      "zh": "三种控件：管开/关的设置、各自独立的多选、组内只能选一个"
    },
    "description": {
      "en": "A switch controls a binary setting and communicates that the change takes effect immediately, like turning notifications on. A checkbox represents an independent form value and may wait for Save or Submit; several checkboxes can be selected. Radio buttons form a named group in which choosing one option clears the others.",
      "zh": "开关控制二元设置，并传达「改动立即生效」——比如打开通知。复选框代表一个独立的表单值，可以等保存或提交才生效，且能同时选中多个。单选按钮组成一个有名字的组，选中一个就清掉其他。"
    },
    "aka": {
      "en": [
        "toggle switch",
        "check box",
        "radio button",
        "option button"
      ],
      "zh": [
        "拨动开关",
        "勾选框",
        "单选钮",
        "选项按钮"
      ]
    },
    "fuzzy": {
      "en": [
        "the on off sliding control",
        "the square box with a checkmark",
        "the circles where only one can be picked",
        "a setting that changes immediately",
        "choose several versus choose exactly one"
      ],
      "zh": [
        "左右滑来开关的那个控件",
        "带对勾的方框",
        "只能选一个的圆圈",
        "一拨就立刻生效的设置",
        "能选好几个 vs. 只能选一个"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<input type=\"checkbox\" role=\"switch\">"
      },
      {
        "framework": "HTML",
        "symbol": "<input type=\"checkbox\">"
      },
      {
        "framework": "HTML",
        "symbol": "<input type=\"radio\">"
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Switch"
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Checkbox"
      }
    ],
    "prompt": {
      "en": "Use an <input type=\"checkbox\" role=\"switch\"> for the binary on/off setting, a native <input type=\"checkbox\"> for each independent checked choice, and same-name <input type=\"radio\"> controls when exactly one option is allowed. Give every control a visible clickable label and expose its checked state through the native control.",
      "zh": "开/关二元设置用 <input type=\"checkbox\" role=\"switch\">；各自独立的勾选项用原生 <input type=\"checkbox\">；只能选一个时用同名的一组 <input type=\"radio\">。每个控件都要有可见、可点的标签，选中状态通过原生控件暴露。"
    },
    "debugPrompt": {
      "en": "Debug my switch/checkbox/radio. Rule out: the control flipping visually while state stays stale — controlled input without onChange; label clicks not toggling because for/id association is missing; radios not behaving as a group because their name attributes differ; the indeterminate checkbox state gone — it is settable only from JS, not markup. The symptom:",
      "zh": "调试我的开关/复选框/单选按钮。排查：控件视觉上翻转了但状态没更新——受控 input 没写 onChange；点标签不切换，因为缺 for/id 关联；单选按钮不成组，因为 name 属性不一致；复选框的半选（indeterminate）状态丢了——它只能用 JS 设置，标记里写不了。症状："
    },
    "parts": [
      {
        "id": "switch-thumb",
        "name": {
          "en": "Switch thumb",
          "zh": "开关滑钮"
        },
        "api": "role=\"switch\"",
        "description": {
          "en": "“The little circle that slides left and right” is the switch thumb.",
          "zh": "「左右滑动的那个小圆钮」就是开关滑钮。"
        },
        "prompt": {
          "en": "the circular thumb inside a role=\"switch\" control, sliding to the checked side when on",
          "zh": "role=\"switch\" 控件里的圆形滑钮，打开时滑向选中一侧"
        }
      },
      {
        "id": "switch-track",
        "name": {
          "en": "Switch track",
          "zh": "开关轨道"
        },
        "api": "role=\"switch\"",
        "description": {
          "en": "“The rounded pill behind the moving circle” is the switch track.",
          "zh": "「滑动圆钮后面那条胶囊形的槽」就是开关轨道。"
        },
        "prompt": {
          "en": "the capsule-shaped track behind a role=\"switch\" thumb, changing fill with the checked state",
          "zh": "role=\"switch\" 滑钮后面的胶囊形轨道，随选中状态改变填充色"
        }
      },
      {
        "id": "checkbox-checkmark",
        "name": {
          "en": "Checkbox checkmark",
          "zh": "复选框对勾"
        },
        "api": "<input type=\"checkbox\">",
        "description": {
          "en": "“The tick that appears inside the square box” is the checkbox checkmark.",
          "zh": "「方框里出现的那个勾」就是复选框对勾。"
        },
        "prompt": {
          "en": "the native checkmark inside a checked <input type=\"checkbox\">",
          "zh": "选中的 <input type=\"checkbox\"> 里的原生对勾"
        }
      },
      {
        "id": "radio-selection-dot",
        "name": {
          "en": "Radio selection dot",
          "zh": "单选圆点"
        },
        "api": "<input type=\"radio\">",
        "description": {
          "en": "“The filled dot inside the chosen circle” is the radio selection dot.",
          "zh": "「选中圆圈里那个实心点」就是单选圆点。"
        },
        "prompt": {
          "en": "the centered selection dot inside the checked <input type=\"radio\"> of a same-name group",
          "zh": "同名组里选中的 <input type=\"radio\"> 中央的选中圆点"
        }
      }
    ],
    "related": [
      "toggle-group",
      "badge-chip-pill",
      "focus-ring-web",
      "segmented-control"
    ],
    "demo": "web/switch-checkbox-radio"
  },
  {
    "slug": "toggle-group",
    "platform": "web",
    "name": {
      "en": "Toggle Group (Segmented Control)",
      "zh": "切换组 Toggle Group（分段控件 Segmented Control）"
    },
    "tagline": {
      "en": "A connected row of compact options with one persistent selection",
      "zh": "连成一排的紧凑选项，其中一项保持选中"
    },
    "description": {
      "en": "A toggle group is a compact row of related buttons that behave as one selection control. In single-select form it is often called a segmented control and works well for switching a view or mode immediately. Unlike tabs, it changes a setting or presentation rather than labeling separate content panels.",
      "zh": "切换组是一排紧凑的相关按钮，整体当一个选择控件用。单选形态下常叫分段控件，适合立即切换视图或模式。和标签页不同，它改变的是设置或呈现方式，而不是给不同的内容面板贴标签。"
    },
    "aka": {
      "en": [
        "segmented control",
        "button group",
        "view switcher",
        "segmented button"
      ],
      "zh": [
        "分段控件",
        "按钮组",
        "视图切换器",
        "分段按钮"
      ]
    },
    "fuzzy": {
      "en": [
        "the connected row of buttons where one stays selected",
        "the compact view switcher with segments",
        "the group of pill buttons for list or grid",
        "three choices inside one rounded control",
        "the ios style segmented buttons on the web"
      ],
      "zh": [
        "连成一排、总有一个保持选中的按钮",
        "一小条分段的视图切换器",
        "切换列表/网格的那组胶囊按钮",
        "一个圆角控件里装着三个选项",
        "网页上 iOS 风格的分段按钮"
      ]
    },
    "api": [
      {
        "framework": "Radix",
        "symbol": "ToggleGroup"
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"radiogroup\""
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"radio\""
      },
      {
        "framework": "ARIA",
        "symbol": "aria-checked"
      },
      {
        "framework": "shadcn/ui",
        "symbol": "ToggleGroup"
      }
    ],
    "prompt": {
      "en": "Build a persistent single-select Toggle Group using Radix ToggleGroup. Present the connected buttons as one segmented control, expose the group as role=\"radiogroup\" with role=\"radio\" items and aria-checked state, and support arrow-key movement between segments.",
      "zh": "用 Radix ToggleGroup 构建一个持久单选的切换组。外观上把相连的按钮呈现为一个分段控件；语义上整组暴露为 role=\"radiogroup\"，各项为 role=\"radio\" 并带 aria-checked 状态；支持方向键在分段间移动。"
    },
    "debugPrompt": {
      "en": "Debug my toggle group (aria-pressed, Radix ToggleGroup). Rule out: single vs multiple semantics mixed up — one behaves like radios, the other like checkboxes; the pressed state invisible because only color changes and not enough of it; deselecting the last item leaving nothing active when one must always stay on; arrow keys dead because roving focus is unimplemented. The symptom:",
      "zh": "调试我的切换组（aria-pressed、Radix ToggleGroup）。排查：single 和 multiple 语义搞混——一个像单选按钮组，一个像复选框组；按下态看不出来，因为只有颜色变化、且对比不够；取消选中最后一项导致没有选中项，而设计上必须总有一项开着；方向键失灵，因为没实现 roving focus。症状："
    },
    "parts": [
      {
        "id": "selected-toggle",
        "name": {
          "en": "Selected toggle",
          "zh": "选中的切换项"
        },
        "api": "aria-checked",
        "description": {
          "en": "“The button in the group that stays filled” is the selected toggle.",
          "zh": "「组里那个一直实心填充的按钮」就是选中的切换项。"
        },
        "prompt": {
          "en": "the role=\"radio\" toggle with aria-checked=\"true\", using a persistent selected fill",
          "zh": "role=\"radio\" 且 aria-checked=\"true\" 的切换项，用持续的选中填充样式"
        }
      },
      {
        "id": "segment-divider",
        "name": {
          "en": "Segment divider",
          "zh": "分段分隔线"
        },
        "api": "ToggleGroup",
        "description": {
          "en": "“The little line between two choices in the pill” is the segment divider.",
          "zh": "「胶囊里两个选项之间的那条小竖线」就是分段分隔线。"
        },
        "prompt": {
          "en": "the divider between adjacent Radix ToggleGroup items inside one connected control",
          "zh": "连成一体的控件里，相邻 Radix ToggleGroup 项之间的分隔线"
        }
      }
    ],
    "related": [
      "tabs",
      "switch-checkbox-radio",
      "segmented-control",
      "badge-chip-pill"
    ],
    "demo": "web/toggle-group"
  },
  {
    "slug": "menu-bar-extra",
    "platform": "macos",
    "name": {
      "en": "Menu Bar Extra (Status Item)",
      "zh": "菜单栏附加项 Menu Bar Extra（状态项 Status Item）"
    },
    "tagline": {
      "en": "The icon that lives on the right side of the macOS menu bar",
      "zh": "住在 macOS 菜单栏右侧的那个图标"
    },
    "description": {
      "en": "A menu bar extra is the small icon on the right side of the macOS menu bar, next to the clock — Wi-Fi, battery, and third-party apps all live here. In AppKit it is an NSStatusItem; SwiftUI calls the whole construct a MenuBarExtra. When you click one, its button enters the highlighted state — a pale rounded background that stays visible for as long as its menu or popover is open, then fades when the menu closes.",
      "zh": "菜单栏附加项是 macOS 菜单栏右侧、时钟旁边的小图标——Wi-Fi、电池和第三方应用都住在这。AppKit 里它是 NSStatusItem，SwiftUI 把整套东西叫 MenuBarExtra。点击其中一个，它的按钮就进入高亮状态：一层浅色圆角底，在菜单或弹出窗口打开期间一直显示，菜单关闭后淡出。"
    },
    "aka": {
      "en": [
        "status item",
        "menu bar icon",
        "menu bar app",
        "status bar item",
        "tray icon (Windows term)"
      ],
      "zh": [
        "状态项",
        "菜单栏图标",
        "菜单栏应用",
        "状态栏项",
        "托盘图标（Windows 说法）"
      ]
    },
    "fuzzy": {
      "en": [
        "the icon in the top right of the mac menu bar",
        "pale background behind the menu bar icon when you click it",
        "highlighted state when the menu bar icon's menu is open",
        "little icon next to the clock on mac",
        "system tray icon on mac",
        "app icon at the top of the screen with a dropdown"
      ],
      "zh": [
        "Mac 菜单栏右上角的那个图标",
        "点菜单栏图标时它后面那层浅色底",
        "菜单栏图标的菜单打开时的高亮状态",
        "Mac 上时钟旁边的小图标",
        "Mac 上的系统托盘图标",
        "屏幕顶上带下拉菜单的应用图标"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSStatusItem"
      },
      {
        "framework": "SwiftUI",
        "symbol": "MenuBarExtra",
        "note": {
          "en": "macOS 13+",
          "zh": "macOS 13+"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSStatusBar.system.statusItem(withLength:)",
        "note": {
          "en": "how one is created",
          "zh": "创建它的方法"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSStatusBarButton.isHighlighted",
        "note": {
          "en": "the pale rounded background while its menu is open",
          "zh": "菜单打开期间图标背后的浅色圆角底"
        }
      }
    ],
    "prompt": {
      "en": "Add a menu bar extra — an NSStatusItem in the macOS menu bar (SwiftUI: MenuBarExtra). While its menu or popover is open, the status item's button must show its highlighted state: the pale rounded background (NSStatusBarButton.isHighlighted), exactly like system menu bar icons.",
      "zh": "加一个菜单栏附加项——macOS 菜单栏里的 NSStatusItem（SwiftUI 用 MenuBarExtra）。它的菜单或弹出窗口打开期间，状态项的按钮必须显示高亮状态：浅色圆角底（NSStatusBarButton.isHighlighted），和系统菜单栏图标一模一样。"
    },
    "debugPrompt": {
      "en": "Debug my macOS menu bar extra (NSStatusItem, SwiftUI MenuBarExtra). Rule out: the status item deallocating because nothing retains it; the icon ignoring dark menu bars because the image is not marked template; the item silently hidden when the menu bar runs out of room; the button highlight sticking because isHighlighted is managed manually; MenuBarExtra window style behaving differently from menu style. The symptom:",
      "zh": "调试我的 macOS 菜单栏附加项（NSStatusItem、SwiftUI MenuBarExtra）。排查：状态项被释放，因为没有对象持有它；图标在深色菜单栏下不变色，因为图像没标记为 template；菜单栏空间不够时状态项被悄悄隐藏；手动管理 isHighlighted 导致按钮高亮卡住不消失；MenuBarExtra 的 window 样式和 menu 样式行为不一致。症状："
    },
    "parts": [
      {
        "id": "template-icon",
        "name": {
          "en": "Template icon",
          "zh": "模板图标（Template Icon）"
        },
        "api": "NSImage.isTemplate",
        "description": {
          "en": "“The monochrome icon that recolors itself” is a template icon.",
          "zh": "「会自己变色的单色图标」就是模板图标。"
        },
        "prompt": {
          "en": "an NSImage.isTemplate menu bar icon that macOS recolors automatically against light and dark menu bars",
          "zh": "一个 NSImage.isTemplate 菜单栏图标，macOS 会自动适配浅色/深色菜单栏重新着色"
        }
      },
      {
        "id": "highlighted-state",
        "name": {
          "en": "Highlighted state",
          "zh": "高亮状态"
        },
        "api": "NSStatusBarButton.isHighlighted",
        "description": {
          "en": "“The thing behind the menu bar icon that gets highlighted” is the status button's highlighted state.",
          "zh": "「菜单栏图标背后那个会变亮的东西」就是状态按钮的高亮状态。"
        },
        "prompt": {
          "en": "the NSStatusBarButton.isHighlighted state: the pale rounded background behind the menu bar icon for as long as its surface is open",
          "zh": "NSStatusBarButton.isHighlighted 状态：菜单栏图标背后的浅色圆角底，在其界面打开期间一直显示"
        }
      },
      {
        "id": "attached-surface",
        "name": {
          "en": "Attached menu or popover",
          "zh": "附着的菜单或弹出窗口"
        },
        "api": "NSStatusItem.menu",
        "description": {
          "en": "“The actual menu bar window that opens” is the status item's attached menu or popover.",
          "zh": "「真正弹出来的那个菜单栏窗口」就是状态项附着的菜单或弹出窗口。"
        },
        "prompt": {
          "en": "the NSStatusItem.menu or attached NSPopover opened directly beneath the status item",
          "zh": "NSStatusItem.menu 或附着的 NSPopover，在状态项正下方打开"
        }
      }
    ],
    "related": [
      "popover",
      "context-menu",
      "vibrancy"
    ],
    "demo": "macos/menu-bar-extra"
  }
];
