import { UIEntry } from "../types/ui";

export const ENTRIES: UIEntry[] = [
  {
    "slug": "text-scramble",
    "platform": "web",
    "name": {
      "en": "Text Scramble (Decode Effect)",
      "ko": "디코드 텍스트 무작위 효과 (Text Scramble)"
    },
    "tagline": {
      "en": "Random characters churn and settle into the real text",
      "ko": "무작위 문자가 교체되다가 올바른 텍스트로 정착합니다."
    },
    "description": {
      "en": "“The letters shuffle until they spell the word” is a text scramble, also called the decode or Matrix effect — every character churns through random glyphs, then locks into place, usually left to right. The classic tool is GSAP's ScrambleTextPlugin (free since 3.13); hand-rolled versions are a requestAnimationFrame loop with a settle deadline per character.",
      "ko": "“，”， decode （Matrix） —— ，，。 GSAP ScrambleTextPlugin（3.13 ）； requestAnimationFrame ，。"
    },
    "aka": {
      "en": [
        "decode effect",
        "matrix text effect",
        "shuffle text"
      ],
      "ko": [
        "decode effect",
        "matrix text effect",
        "shuffle text"
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
      "ko": [
        "the text that shuffles random letters until it spells the word",
        "the matrix style decoding text",
        "letters cycling before they land on the real ones",
        "the hacker text effect",
        "glitchy letters that resolve into a title"
      ]
    },
    "api": [
      {
        "framework": "GSAP",
        "symbol": "ScrambleTextPlugin",
        "note": {
          "en": "the canonical implementation — free since GSAP 3.13",
          "ko": "—— GSAP 3.13"
        }
      },
      {
        "framework": "JS",
        "symbol": "requestAnimationFrame + charset swap",
        "note": {
          "en": "the hand-rolled version: per-character reveal deadline, random glyphs until then",
          "ko": "직접 구현 방식: 문자별 전환 시간과 무작위 글꼴 교체."
        }
      },
      {
        "framework": "CSS",
        "symbol": "font-variant-numeric: tabular-nums",
        "note": {
          "en": "monospace/tabular glyphs stop the line jittering while it churns",
          "ko": "monospace/tabular glyphs stop the line jittering while it churns"
        }
      },
      {
        "framework": "A11y",
        "symbol": "aria-label + aria-hidden churn",
        "note": {
          "en": "screen readers get the final text, never the noise",
          "ko": "screen readers get the final text, never the noise"
        }
      }
    ],
    "parts": [
      {
        "id": "glyph-churn",
        "name": {
          "en": "Glyph churn",
          "ko": "（Glyph churn）"
        },
        "api": "chars (ScrambleTextPlugin)",
        "description": {
          "en": "“The random letters still spinning at the end while the rest has settled” is the churn — the not-yet-locked characters drawn from the scramble charset.",
          "ko": "“，” churn —— 、。"
        },
        "prompt": {
          "en": "the scramble's glyph churn: the still-randomizing characters (charset like \"!<>-_\\\\/[]{}\") that haven't reached their settle deadline yet",
          "ko": "：、（ \"!<>-_\\\\/[]{}\")"
        }
      }
    ],
    "prompt": {
      "en": "Build a text scramble (decode) effect: each character cycles random glyphs and locks into the real one left to right (GSAP ScrambleTextPlugin, or a requestAnimationFrame loop with a per-character settle deadline). Use a monospace font or tabular glyphs so width never jitters, expose the final string via aria-label with the churning span aria-hidden, and honor prefers-reduced-motion by rendering the text instantly.",
      "ko": "（decode）：，（ GSAP ScrambleTextPlugin， requestAnimationFrame ）。，； aria-label ， span aria-hidden； prefers-reduced-motion，。"
    },
    "debugPrompt": {
      "en": "Debug my text scramble effect (GSAP ScrambleTextPlugin / rAF charset loop). Rule out: layout jitter because glyph widths differ (needs monospace or tabular-nums); the animation never settling because the per-character deadline keeps resetting on re-render; screen readers announcing garbage (final text must live in aria-label, churn aria-hidden); the effect re-running on every state change instead of once per mount; reduced-motion users getting the churn instead of instant text. The symptom:",
      "ko": "（GSAP ScrambleTextPlugin / rAF ）。：（ monospace tabular-nums）；，；（ aria-label， aria-hidden）；，； reduced-motion 。："
    },
    "relatedSlugs": [
      "marquee",
      "skeleton-spinner"
    ]
  },
  {
    "slug": "spring",
    "platform": "web",
    "name": {
      "en": "Spring Animation",
      "ko": "스프링 애니메이션 (Spring Animation)"
    },
    "tagline": {
      "en": "Physics-based motion that overshoots the target and settles",
      "ko": "Physics-based motion that overshoots the target and settles"
    },
    "description": {
      "en": "“It bounces a little past where it lands” is a spring animation — motion driven by physics (stiffness, damping, mass) instead of a duration and curve. The signature is the overshoot: the element passes its target and settles back. Springs also retarget mid-flight gracefully, which is why gesture-driven UIs use them.",
      "ko": "“” —— （stiffness、damping、mass），。：。， UI 。"
    },
    "aka": {
      "en": [
        "spring physics",
        "bouncy animation",
        "spring transition"
      ],
      "ko": [
        "spring physics",
        "bouncy animation",
        "spring transition"
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
      "ko": [
        "the bouncy animation that goes past and comes back",
        "it overshoots a little and settles",
        "the jelly bounce when a panel opens",
        "ios style bouncy movement",
        "animation with stiffness and damping instead of duration"
      ]
    },
    "api": [
      {
        "framework": "Motion",
        "symbol": "transition={{ type: \"spring\", stiffness, damping }}",
        "note": {
          "en": "no duration — the physics decide when it stops",
          "ko": "duration ——"
        }
      },
      {
        "framework": "CSS",
        "symbol": "linear(…)",
        "note": {
          "en": "a spring baked into keypoints — springs as pure CSS",
          "ko": "—— CSS"
        }
      },
      {
        "framework": "React",
        "symbol": "react-spring",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": ".spring(response:dampingFraction:)",
        "note": {
          "en": "the same idea on Apple platforms",
          "ko": "the same idea on Apple platforms"
        }
      }
    ],
    "parts": [
      {
        "id": "overshoot",
        "name": {
          "en": "Overshoot",
          "ko": "（Overshoot）"
        },
        "api": "damping",
        "description": {
          "en": "“Where it goes past the line and comes back” is the overshoot — damping controls how much of it survives.",
          "ko": "“” —— damping 。"
        },
        "prompt": {
          "en": "the spring's overshoot: the travel past the resting position before settling — tune with damping (higher = less overshoot)",
          "ko": "： —— damping （）"
        }
      }
    ],
    "prompt": {
      "en": "Give this animation spring physics: use Motion's transition={{ type: \"spring\", stiffness: 300, damping: 22 }} (or react-spring) instead of a duration+easing pair — the element should slightly overshoot its target and settle; raise damping to kill wobble, raise stiffness for snap. For pure CSS, bake the spring into a linear() timing function.",
      "ko": "： Motion transition={{ type: \"spring\", stiffness: 300, damping: 22 }}（ react-spring） duration + easing —— ； damping ， stiffness 。 CSS ： linear() 。"
    },
    "debugPrompt": {
      "en": "Debug my spring animation (Motion type: \"spring\", react-spring, CSS linear()). Rule out: damping too low so it wobbles like jelly; stiffness too low so it feels underwater; a duration fighting the physics (springs compute their own settle time); the overshoot clipped by an overflow-hidden parent; interruptions snapping because the spring restarts from the target instead of retargeting from current velocity. The symptom:",
      "ko": "（Motion type: \"spring\"、react-spring、CSS linear()）。：damping ，；stiffness ，；duration （）； overflow-hidden ；，，。："
    },
    "relatedSlugs": [
      "easing",
      "toast"
    ]
  },
  {
    "slug": "easing",
    "platform": "web",
    "name": {
      "en": "Easing (Timing Function)",
      "ko": "이징 효과 (Easing / Timing Function)"
    },
    "tagline": {
      "en": "The speed curve of an animation — why motion feels smooth or robotic",
      "ko": "The speed curve of an animation — why motion feels smooth or robotic"
    },
    "description": {
      "en": "“The animation feels robotic” is almost always easing — the timing function, the curve that maps time to progress. Linear moves at constant speed; ease-out starts fast and lands softly; ease-in-out is the S-curve UI motion defaults to. The four numbers in cubic-bezier() are just the two control points of that graph.",
      "ko": "“” —— ，。linear ；ease-out 、；ease-in-out UI S 。cubic-bezier() ，。"
    },
    "aka": {
      "en": [
        "timing function",
        "easing curve",
        "bezier curve"
      ],
      "ko": [
        "timing function",
        "easing curve",
        "bezier curve"
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
      "ko": [
        "the animation feels robotic and linear",
        "how the movement speeds up and slows down",
        "the curve that controls the animation speed",
        "make it start fast and end slow",
        "the s shaped graph in the animation settings"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "transition-timing-function",
        "note": {
          "en": "ease, ease-in, ease-out, ease-in-out, linear",
          "ko": "ease, ease-in, ease-out, ease-in-out, linear"
        }
      },
      {
        "framework": "CSS",
        "symbol": "cubic-bezier(.4, 0, .2, 1)",
        "note": {
          "en": "a custom curve — the four numbers are the two control points",
          "ko": "a custom curve — the four numbers are the two control points"
        }
      },
      {
        "framework": "CSS",
        "symbol": "linear(…)",
        "note": {
          "en": "piecewise curves beyond beziers (springs, bounces); baseline since 2023",
          "ko": "（、）；2023"
        }
      },
      {
        "framework": "Motion",
        "symbol": "transition={{ ease: \"easeInOut\" }}",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "timing-curve",
        "name": {
          "en": "Timing curve",
          "ko": "（Timing curve）"
        },
        "api": "cubic-bezier(x1, y1, x2, y2)",
        "description": {
          "en": "“The S-shaped graph in the animation editor” is the timing curve itself — time runs left to right, progress bottom to top.",
          "ko": "“ S ” —— ，；，。"
        },
        "prompt": {
          "en": "the easing's timing curve: the cubic-bezier graph mapping time (x) to progress (y) — steep = fast, flat = slow",
          "ko": "：（x）（y） cubic-bezier —— ，"
        }
      }
    ],
    "prompt": {
      "en": "Fix the easing of my animation: replace linear/default timing with an explicit curve — transition-timing-function: cubic-bezier(.4, 0, .2, 1) for UI moves (fast start, soft landing), ease-out for things entering, ease-in for things leaving; keep durations 150–300ms for interface transitions and never animate at linear speed unless it's a marquee-style continuous loop.",
      "ko": "： linear/ —— UI transition-timing-function: cubic-bezier(.4, 0, .2, 1)（、）， ease-out， ease-in； 150–300ms， marquee ， linear 。"
    },
    "debugPrompt": {
      "en": "Debug the feel of my animation (CSS transition-timing-function / cubic-bezier). Rule out: no timing function set so it falls back to the default ease; linear timing making UI motion feel robotic; ease-in on an ENTERING element (arrivals want ease-out — decelerate into place); a cubic-bezier with y values outside 0–1 clipping instead of overshooting in transition shorthand order; duration so long the curve reads as lag. The symptom:",
      "ko": "（CSS transition-timing-function / cubic-bezier）。：， ease；linear UI ； ease-in（ ease-out —— ）；cubic-bezier y 0–1， transition ；，。："
    },
    "relatedSlugs": [
      "spring",
      "marquee"
    ]
  },
  {
    "slug": "masonry",
    "platform": "web",
    "name": {
      "en": "Masonry Layout (Pinterest Grid)",
      "ko": "메이슨리 레이아웃 (Masonry Grid)"
    },
    "tagline": {
      "en": "Cards of different heights packed into columns with no row gaps",
      "ko": "Cards of different heights packed into columns with no row gaps"
    },
    "description": {
      "en": "“The Pinterest grid where every card keeps its own height” is a masonry layout — each new item joins the shortest column, so cards pack like bricks with no row lines and a staggered bottom edge. Also known as waterfall flow. CSS columns approximates it everywhere today; native masonry (Grid Lanes) shipped in Safari 26.",
      "ko": "“Pinterest ” —— ，，，。 UI 。 CSS columns ； masonry（Grid Lanes） Safari 26 。"
    },
    "aka": {
      "en": [
        "waterfall layout",
        "pinterest grid",
        "brick layout"
      ],
      "ko": [
        "waterfall layout",
        "pinterest grid",
        "brick layout"
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
      "ko": [
        "the pinterest style grid where every card is a different height",
        "photos stacked like bricks with no gaps",
        "columns where the cards don't line up in rows",
        "the photo wall where images keep their own height",
        "cards that fill in under each other instead of in rows"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "columns",
        "note": {
          "en": "works everywhere today — but items flow DOWN each column, not across rows",
          "ko": "works everywhere today — but items flow DOWN each column, not across rows"
        }
      },
      {
        "framework": "CSS",
        "symbol": "grid-template-rows: masonry",
        "note": {
          "en": "native (Grid Lanes): Safari 26; behind flags elsewhere in 2026 — pair with @supports",
          "ko": "（Grid Lanes）：Safari 26 ；2026 flag —— @supports"
        }
      },
      {
        "framework": "React",
        "symbol": "react-masonry-css",
        "note": {
          "en": "JS split into per-column stacks when row-major order matters",
          "ko": "JS split into per-column stacks when row-major order matters"
        }
      },
      {
        "framework": "CSS",
        "symbol": "break-inside: avoid",
        "note": {
          "en": "stops cards splitting across columns in the fallback",
          "ko": "stops cards splitting across columns in the fallback"
        }
      }
    ],
    "parts": [
      {
        "id": "packed-column",
        "name": {
          "en": "Packed column",
          "ko": "（Packed column）"
        },
        "api": "columns / grid track",
        "description": {
          "en": "“The cards stack straight down with nothing lining up sideways” — each column packs independently, which is the whole trick.",
          "ko": "“，” —— ，。"
        },
        "prompt": {
          "en": "one packed column of the masonry wall: items stack top-to-bottom with a fixed column gap, each new item joining the currently shortest column",
          "ko": "one packed column of the masonry wall: items stack top-to-bottom with a fixed column gap, each new item joining the currently shortest column"
        }
      }
    ],
    "prompt": {
      "en": "Build a masonry layout (Pinterest-style): native CSS first — @supports (grid-template-rows: masonry) { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: masonry; } — with a CSS multi-column fallback (columns: 3; every card break-inside: avoid). Note the fallback orders items down each column, not across rows; if strict left-to-right order matters, use react-masonry-css instead. Reserve image aspect ratios so cards don't jump while loading.",
      "ko": "（Pinterest ）： CSS —— @supports (grid-template-rows: masonry) { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: masonry; } —— CSS （columns: 3； break-inside: avoid）。，；， react-masonry-css。，。"
    },
    "debugPrompt": {
      "en": "Debug my masonry layout (CSS columns fallback / grid-template-rows: masonry). Rule out: cards splitting across columns because break-inside: avoid is missing; item order reading down the first column when the design expects row-major; equal-height rows appearing because the browser lacks native masonry and there's no @supports fallback; the wall reshuffling as images load because width/height aren't reserved; margins on cards fighting the column-gap. The symptom:",
      "ko": "（CSS columns / grid-template-rows: masonry）。： break-inside: avoid，；，； masonry @supports ，； width/height，； margin column-gap 。："
    },
    "relatedSlugs": [
      "bento-grid",
      "lightbox"
    ]
  },
  {
    "slug": "bento-grid",
    "platform": "web",
    "name": {
      "en": "Bento Grid",
      "ko": "벤토 그리드 (Bento Grid)"
    },
    "tagline": {
      "en": "One grid, mixed tile sizes — a layout packed like a bento box",
      "ko": "One grid, mixed tile sizes — a layout packed like a bento box"
    },
    "description": {
      "en": "“Several boxes in a grid — bento” is a bento grid: one CSS grid where tiles span different numbers of cells, so a hero tile sits among small ones like compartments in a Japanese lunchbox. Apple's marketing pages made the style famous. The tell versus a plain card grid is the spanning: at least one tile takes 2×2 or 2×1 cells while everything stays aligned to the same tracks and gap.",
      "ko": "“ —— bento”： CSS grid，，，。Apple 。： 2×2 2×1 ，。"
    },
    "aka": {
      "en": [
        "bento box layout",
        "feature grid",
        "dashboard grid"
      ],
      "ko": [
        "bento box layout",
        "feature grid",
        "dashboard grid"
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
      "ko": [
        "several boxes in a grid bento",
        "boxes of different sizes in a grid",
        "the grid with one big box and smaller boxes around it",
        "the apple style feature grid with rounded cards",
        "dashboard made of different sized tiles"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "display: grid + grid-column: span 2",
        "note": {
          "en": "spanning cells are what make a grid a bento",
          "ko": "spanning cells are what make a grid a bento"
        }
      },
      {
        "framework": "CSS",
        "symbol": "grid-template-columns: repeat(4, 1fr)",
        "note": {
          "en": "the fixed track skeleton the spans play against",
          "ko": "the fixed track skeleton the spans play against"
        }
      },
      {
        "framework": "CSS",
        "symbol": "grid-template-areas",
        "note": {
          "en": "name the tiles instead of counting spans",
          "ko": "name the tiles instead of counting spans"
        }
      },
      {
        "framework": "Tailwind",
        "symbol": "col-span-2 row-span-2",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "spanning-tile",
        "name": {
          "en": "Spanning tile",
          "ko": "（Spanning tile）"
        },
        "api": "grid-column: span 2",
        "description": {
          "en": "“The one big box among the small ones” is a spanning tile — a normal grid item told to take two columns and/or two rows.",
          "ko": "“” —— grid item，/。"
        },
        "prompt": {
          "en": "the bento grid's spanning tile: a grid item with grid-column: span 2 and grid-row: span 2 so it occupies a 2×2 block among single-cell tiles",
          "ko": "bento ： grid-column: span 2 grid-row: span 2 grid item， 2×2"
        }
      },
      {
        "id": "bento-gap",
        "name": {
          "en": "Gap (gutter)",
          "ko": "（Gap/gutter）"
        },
        "api": "gap",
        "description": {
          "en": "“The even spacing between all the boxes” is the grid's gap — one value, never per-tile margins, which is why a bento looks machine-packed.",
          "ko": "“” gap —— ， margin， bento 。"
        },
        "prompt": {
          "en": "the bento grid's gap: a single CSS gap value on the grid container providing every gutter, with no margins on the tiles themselves",
          "ko": "bento gap：grid CSS gap ， margin"
        }
      }
    ],
    "prompt": {
      "en": "Build a bento grid: one CSS grid (display: grid; grid-template-columns: repeat(4, 1fr); one consistent gap) where feature tiles span multiple cells via grid-column: span 2 / grid-row: span 2, every tile shares the same corner radius and an opaque background, and the whole composition reads as a single rounded box of differently sized compartments.",
      "ko": "bento ： CSS grid（display: grid; grid-template-columns: repeat(4, 1fr)； gap）， grid-column: span 2 / grid-row: span 2 ，，。"
    },
    "debugPrompt": {
      "en": "Debug my bento grid (CSS grid with spanning tiles). Rule out: holes in the grid because a span exceeds the remaining columns in its row (consider grid-auto-flow: dense, noting it reorders visually vs DOM); uneven gutters from per-tile margins instead of the grid's single gap; tiles with different corner radii or translucent backgrounds breaking the lunchbox look; the hero tile collapsing on small screens because the span isn't reduced under a media query. The symptom:",
      "ko": "bento （ CSS grid）。：，（ grid-auto-flow: dense， DOM ）； margin gap，；，；， media query span 。："
    },
    "relatedSlugs": [
      "masonry",
      "drag-and-drop"
    ]
  },
  {
    "slug": "hamburger-menu",
    "platform": "web",
    "name": {
      "en": "Hamburger Menu (Nav Drawer)",
      "ko": "햄버거 메뉴 (Hamburger Menu)"
    },
    "tagline": {
      "en": "The three-line button and the navigation panel it slides open",
      "ko": "The three-line button and the navigation panel it slides open"
    },
    "description": {
      "en": "“The three horizontal lines used to open a menu” are a hamburger button, and the panel it slides open is a navigation drawer. The button is just the trigger — three stacked lines, usually top-left on phones; the drawer is an off-canvas <nav> that slides over the page above a scrim. The icon's siblings (dots, ellipsis) live under The Three Dots; this page is the icon-plus-drawer navigation pattern itself.",
      "ko": "“”，。 —— ，； <nav>，，。（、） The Three Dots ；“”。"
    },
    "aka": {
      "en": [
        "navigation drawer",
        "hamburger button",
        "side menu",
        "off-canvas menu"
      ],
      "ko": [
        "navigation drawer",
        "hamburger button",
        "side menu",
        "off-canvas menu"
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
      "ko": [
        "the three horizontal lines used to open a menu",
        "three line side menu that expands to the full size of the screen",
        "the burger menu on mobile sites",
        "the menu that slides in from the side when you tap the lines",
        "the stacked lines button at the top corner",
        "the side panel with all the page links"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "aria-expanded + aria-controls",
        "note": {
          "en": "the toggle button's contract",
          "ko": "the toggle button's contract"
        }
      },
      {
        "framework": "HTML",
        "symbol": "<nav>",
        "note": {
          "en": "the drawer content is navigation",
          "ko": "the drawer content is navigation"
        }
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Sheet side=\"left\"",
        "note": {
          "en": "the usual React building block",
          "ko": "the usual React building block"
        }
      },
      {
        "framework": "Material",
        "symbol": "NavigationDrawer",
        "note": {
          "en": "Android/Material's name for the panel",
          "ko": "Android/Material"
        }
      }
    ],
    "parts": [
      {
        "id": "hamburger-button",
        "name": {
          "en": "Hamburger button",
          "ko": "（Hamburger button）"
        },
        "api": "aria-expanded",
        "description": {
          "en": "“The three stacked lines” are the hamburger button — a plain toggle whose aria-expanded tracks the drawer.",
          "ko": "“” —— ，aria-expanded 。"
        },
        "prompt": {
          "en": "a hamburger button: three stacked 2px lines in a <button aria-expanded aria-controls> at the bar's left edge",
          "ko": "： <button aria-expanded aria-controls> 2px"
        }
      },
      {
        "id": "nav-drawer",
        "name": {
          "en": "Navigation drawer",
          "ko": "（Navigation drawer）"
        },
        "api": "Sheet side=\"left\"",
        "description": {
          "en": "“The side menu that slides over the page” is the navigation drawer — an off-canvas <nav> panel above a scrim.",
          "ko": "“” —— <nav> ，。"
        },
        "prompt": {
          "en": "a navigation drawer: an off-canvas <nav> panel sliding from the left over a scrim, body scroll locked while open",
          "ko": "：、 <nav> ， body"
        }
      }
    ],
    "prompt": {
      "en": "Build a hamburger menu: a <button aria-expanded aria-controls> drawing three stacked lines that toggles a navigation drawer — an off-canvas <nav> panel sliding in from the left over a scrim (shadcn Sheet side=\"left\", Material NavigationDrawer). Lock body scroll while open, close on Escape and scrim tap, keep aria-expanded in sync, and return focus to the button on close.",
      "ko": "： <button aria-expanded aria-controls>，， —— 、（scrim） <nav> （shadcn Sheet side=\"left\"，Material NavigationDrawer）。 body ，Escape ，aria-expanded ，。"
    },
    "debugPrompt": {
      "en": "Debug my hamburger menu (aria-expanded toggle + off-canvas <nav> drawer). Rule out: the drawer rendering under the scrim or page header (z-order); body still scrolling behind the open drawer; aria-expanded never flipping so screen readers see a dead button; focus staying lost in the drawer after close instead of returning to the button; the drawer animating from the wrong edge because translate-x sign flipped; the menu unreachable on desktop because the toggle is hidden above the breakpoint but the nav links never reappear. The symptom:",
      "ko": "（aria-expanded + <nav> ）。：（z ）； body ；aria-expanded ，；，；translate-x ，；，，。："
    },
    "relatedSlugs": [
      "three-dots",
      "dialog-drawer-sheet",
      "scrim"
    ]
  },
  {
    "slug": "lightbox",
    "platform": "web",
    "name": {
      "en": "Lightbox",
      "ko": "라이트박스 (Lightbox)"
    },
    "tagline": {
      "en": "The click-to-enlarge image overlay that dims the page behind it",
      "ko": "The click-to-enlarge image overlay that dims the page behind it"
    },
    "description": {
      "en": "“Click the picture and it opens big with everything dark behind it” is a lightbox: a modal image viewer layered over the page. The dark layer behind it is the scrim, the enlarged image sits center stage, and arrows page through the gallery. Modern lightboxes are built on the native <dialog> element and its ::backdrop.",
      "ko": "“，” lightbox：。（scrim），，。 lightbox <dialog> ::backdrop 。"
    },
    "aka": {
      "en": [
        "image viewer overlay",
        "photo modal",
        "gallery overlay"
      ],
      "ko": [
        "image viewer overlay",
        "photo modal",
        "gallery overlay"
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
      "ko": [
        "when you click a photo and it opens big with a dark background",
        "the enlarged image popup in a gallery",
        "click the thumbnail and it zooms over the page",
        "the image viewer with arrows for the next photo",
        "the big photo over a black background",
        "a pattern for enlarging pictures"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<dialog>",
        "note": {
          "en": "the modern base layer for a lightbox",
          "ko": "lightbox"
        }
      },
      {
        "framework": "CSS",
        "symbol": "::backdrop",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"dialog\" aria-modal=\"true\"",
        "note": null
      },
      {
        "framework": "JS libs",
        "symbol": "PhotoSwipe · GLightbox",
        "note": {
          "en": "ready-made lightbox libraries",
          "ko": "lightbox"
        }
      }
    ],
    "parts": [],
    "prompt": {
      "en": "Build a lightbox: clicking a gallery thumbnail opens the full image in a modal <dialog> (aria-modal) over a dark ::backdrop scrim, with prev/next arrows, a close button, Escape and backdrop-click to dismiss, and a reversible fade/scale transition.",
      "ko": "lightbox：， ::backdrop <dialog>（aria-modal），/、，Escape ，/。"
    },
    "debugPrompt": {
      "en": "Debug my lightbox (<dialog>, ::backdrop, PhotoSwipe-style image overlay). Rule out: opened with show() instead of showModal() so there is no backdrop and the page scrolls behind; arrow keys paging the gallery and scrolling the page at the same time; the full-size image loading only after the transition so it pops from blurry to sharp; focus not returning to the clicked thumbnail on close. The symptom:",
      "ko": "lightbox（<dialog>、::backdrop、PhotoSwipe ）。： show() showModal()，、；；，；。："
    },
    "relatedSlugs": [
      "scrim",
      "dialog-drawer-sheet",
      "masonry"
    ]
  },
  {
    "slug": "marquee",
    "platform": "web",
    "name": {
      "en": "Marquee",
      "ko": "마키 텍스트 (Marquee)"
    },
    "tagline": {
      "en": "Content that auto-scrolls sideways in an endless loop",
      "ko": "Content that auto-scrolls sideways in an endless loop"
    },
    "description": {
      "en": "“The logos that slide across by themselves” is a marquee — content auto-scrolling in an endless horizontal loop, named after the deprecated <marquee> tag. Today it is a CSS transform loop over duplicated content, dissolved at both ends by an edge fade. Windows separately calls the indeterminate progress bar style “marquee”, which is a different thing.",
      "ko": "“ logo” —— ， <marquee> 。 CSS transform ，。，Windows “marquee”，。"
    },
    "aka": {
      "en": [
        "ticker",
        "logo carousel",
        "auto-scrolling strip"
      ],
      "ko": [
        "ticker",
        "logo carousel",
        "auto-scrolling strip"
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
      "ko": [
        "the logos that scroll sideways by themselves",
        "the news ticker text",
        "the endless scrolling logo strip",
        "text that moves across the screen on its own",
        "the auto sliding brand logos"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "animation + @keyframes translateX",
        "note": {
          "en": "the modern way: a transform loop over duplicated content",
          "ko": "： transform"
        }
      },
      {
        "framework": "HTML",
        "symbol": "<marquee>",
        "note": {
          "en": "long deprecated — never ship it, but it named the pattern",
          "ko": "long deprecated — never ship it, but it named the pattern"
        }
      },
      {
        "framework": "React",
        "symbol": "react-fast-marquee",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "animation-play-state: paused",
        "note": {
          "en": "hover-pause",
          "ko": "hover-pause"
        }
      }
    ],
    "parts": [
      {
        "id": "edge-fade",
        "name": {
          "en": "Edge fade",
          "ko": "（Edge fade）"
        },
        "api": "mask-image: linear-gradient(…)",
        "description": {
          "en": "“The logos dissolving at both ends of the strip” is the edge fade — a mask, not a painted gradient.",
          "ko": "“logo ” —— mask，。"
        },
        "prompt": {
          "en": "the marquee's edge fade: a mask-image linear-gradient on the strip container so items dissolve at both ends instead of clipping hard",
          "ko": "： mask-image linear-gradient，"
        }
      }
    ],
    "prompt": {
      "en": "Build a marquee: an auto-scrolling horizontal strip using a CSS @keyframes translateX(-50%) loop over exactly-duplicated content (never the deprecated <marquee> tag), with edge fade masks, pause on hover via animation-play-state, and a prefers-reduced-motion fallback that stops the motion.",
      "ko": "：， CSS @keyframes translateX(-50%) ，（ <marquee> ），，hover animation-play-state ， prefers-reduced-motion 。"
    },
    "debugPrompt": {
      "en": "Debug my marquee (CSS translateX keyframe loop, react-fast-marquee). Rule out: the loop jumping at the seam because the content is not duplicated exactly once and translated by exactly -50%; animating left/width on the main thread instead of transform; hover-pause missing (animation-play-state); motion still running under prefers-reduced-motion; the deprecated <marquee> tag pasted in from an old snippet. The symptom:",
      "ko": "（CSS translateX keyframe 、react-fast-marquee）。：，、 -50%； left/width transform；（animation-play-state）；prefers-reduced-motion ； <marquee> 。："
    },
    "relatedSlugs": [
      "truncation",
      "progress-indicators",
      "easing",
      "text-scramble"
    ]
  },
  {
    "slug": "pointer",
    "platform": "macos",
    "name": {
      "en": "Pointer (Cursor)",
      "ko": "포인터 및 커서 (Pointer / Cursor)"
    },
    "tagline": {
      "en": "Every shape the mouse pointer takes — and the real name of each one",
      "ko": "Every shape the mouse pointer takes — and the real name of each one"
    },
    "description": {
      "en": "Every shape the Mac pointer takes has a real name. “The text cursor with little bits at the top and bottom” is the I-beam; the hand over a link is the pointing hand; the no-entry sign while dragging is operation not allowed. AppKit sets them through NSCursor, and views claim screen regions with cursor rects — when a pointer gets stuck in the wrong shape, a stale cursor rect is usually the culprit. (The rainbow “beach ball” is not an NSCursor: the system shows it when an app stops responding.)",
      "ko": "Mac 。“” I-beam； pointing hand； operation not allowed。AppKit NSCursor ， cursor rect —— ， cursor rect 。（“” NSCursor： App 。）"
    },
    "aka": {
      "en": [
        "cursor",
        "mouse pointer",
        "mouse cursor"
      ],
      "ko": [
        "cursor",
        "mouse pointer",
        "mouse cursor"
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
      "ko": [
        "the text cursor with little bits at the top and bottom",
        "mouse stuck in text editing mode",
        "the arrow turns into a hand over links",
        "double sided arrow when resizing a window",
        "cursor with a plus badge when dragging to copy",
        "the mouse becomes a no entry sign",
        "magnifying glass cursor with a plus in it"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSCursor",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSCursor.iBeam",
        "note": {
          "en": "the text-editing pointer",
          "ko": "the text-editing pointer"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSView.addCursorRect(_:cursor:)",
        "note": {
          "en": "claim a region; called from resetCursorRects()",
          "ko": "； resetCursorRects()"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.pointerStyle(_:)",
        "note": {
          "en": "macOS 15+",
          "ko": "macOS 15+"
        }
      },
      {
        "framework": "CSS",
        "symbol": "cursor: text",
        "note": {
          "en": "the same shapes on the web: pointer, grab, not-allowed…",
          "ko": "Web ：pointer、grab、not-allowed……"
        }
      }
    ],
    "parts": [],
    "prompt": {
      "en": "Set the macOS pointer with NSCursor — e.g. NSCursor.iBeam.set() — or claim a region with NSView.addCursorRect(_:cursor:) inside resetCursorRects() (SwiftUI: View.pointerStyle(_:), macOS 15+). If the pointer stays stuck as the I-beam after the mouse leaves a text view, the stale cursor rect is the bug: call window.invalidateCursorRects(for: view) so the rects rebuild.",
      "ko": "NSCursor macOS —— NSCursor.iBeam.set() —— resetCursorRects() NSView.addCursorRect(_:cursor:) （SwiftUI：View.pointerStyle(_:)，macOS 15+）。 I-beam， cursor rect ： window.invalidateCursorRects(for: view) rect 。"
    },
    "debugPrompt": {
      "en": "Debug my macOS pointer/cursor (NSCursor, NSTrackingArea). Rule out: the cursor flickering back to arrow because cursor rects reset on every layout — drive it from cursorUpdate with a tracking area instead; push/pop or hide/unhide calls unbalanced; the spinning beach ball meaning the main thread is blocked, not a cursor bug; a hidden cursor never restored after a drag. The symptom:",
      "ko": "macOS /（NSCursor、NSTrackingArea）。：cursor rect ， —— tracking area cursorUpdate ；push/pop hide/unhide ；， bug；。："
    },
    "relatedSlugs": [
      "search-field",
      "context-menu",
      "split-view",
      "focus-ring"
    ]
  },
  {
    "slug": "alert",
    "platform": "macos",
    "name": {
      "en": "Alert",
      "ko": "알림창 (Alert)"
    },
    "tagline": {
      "en": "The small centered window with a badged icon, a bold line, and Cancel/OK buttons",
      "ko": "：、，“/”"
    },
    "description": {
      "en": "“The little warning window with the app icon and two buttons” is an alert — NSAlert. It shows your app icon (badged with a yellow caution triangle for warnings), a bold message line, smaller informative text, and buttons where the first added is the blue default. Run it app-modal with runModal(), or attach it to a single window with beginSheetModal(for:) — then it slides out of that window's title bar like a sheet. The “Don't ask me again” checkbox is its built-in suppression button.",
      "ko": "“ App ” —— NSAlert。 App （）、、， —— 。 runModal() App ， beginSheetModal(for:) —— sheet 。“” suppression button。"
    },
    "aka": {
      "en": [
        "alert dialog",
        "warning dialog",
        "confirmation dialog",
        "message box",
        "system prompt"
      ],
      "ko": [
        "alert dialog",
        "warning dialog",
        "confirmation dialog",
        "message box",
        "system prompt"
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
      "ko": [
        "the popup with the app icon and a yellow warning triangle",
        "small window in the middle asking are you sure with two buttons",
        "the box with a don't ask me again checkbox",
        "warning message with a bold line and smaller gray text under it",
        "the blue button that presses itself when you hit enter",
        "confirmation popup before deleting something"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSAlert",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": ".alert(_:isPresented:actions:message:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.messageText",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.informativeText",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.showsSuppressionButton",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.addButton(withTitle:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.alertStyle",
        "note": {
          "en": ".warning / .informational / .critical",
          "ko": ".warning / .informational / .critical"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSAlert.beginSheetModal(for:completionHandler:)",
        "note": {
          "en": "attach to one window instead",
          "ko": "attach to one window instead"
        }
      }
    ],
    "parts": [
      {
        "id": "badged-app-icon",
        "name": {
          "en": "Badged app icon",
          "ko": "App （Badged app icon）"
        },
        "api": "NSAlert.icon",
        "description": {
          "en": "“The yellow triangle over the app icon” is the alert icon — your app's icon, badged with the caution symbol when alertStyle is .warning or .critical.",
          "ko": "“App ” —— App ， alertStyle .warning .critical 。"
        },
        "prompt": {
          "en": "the NSAlert icon — the app icon badged with the yellow caution triangle (NSAlert.icon, alertStyle .warning)",
          "ko": "NSAlert —— App （NSAlert.icon，alertStyle .warning）"
        }
      },
      {
        "id": "message-text",
        "name": {
          "en": "Message text",
          "ko": "（Message text）"
        },
        "api": "NSAlert.messageText",
        "description": {
          "en": "“The bold line” is messageText — the one-sentence summary, phrased as a question when the alert asks for a decision.",
          "ko": "“” messageText —— ；，。"
        },
        "prompt": {
          "en": "the bold headline of an NSAlert (NSAlert.messageText)",
          "ko": "NSAlert （NSAlert.messageText）"
        }
      },
      {
        "id": "informative-text",
        "name": {
          "en": "Informative text",
          "ko": "（Informative text）"
        },
        "api": "NSAlert.informativeText",
        "description": {
          "en": "“The smaller gray text under the bold line” is informativeText — the consequences, spelled out in a sentence.",
          "ko": "“” informativeText —— 。"
        },
        "prompt": {
          "en": "the smaller explanation line of an NSAlert (NSAlert.informativeText)",
          "ko": "NSAlert （NSAlert.informativeText）"
        }
      },
      {
        "id": "suppression-checkbox",
        "name": {
          "en": "Suppression checkbox",
          "ko": "“”（Suppression checkbox）"
        },
        "api": "NSAlert.showsSuppressionButton",
        "description": {
          "en": "“The don't ask me again checkbox” is the suppression button — enable it with showsSuppressionButton and read suppressionButton.state after the alert returns.",
          "ko": "“” suppression button —— showsSuppressionButton ， suppressionButton.state。"
        },
        "prompt": {
          "en": "the “Don't ask me again” checkbox of an NSAlert (showsSuppressionButton = true, read suppressionButton.state)",
          "ko": "NSAlert “”（showsSuppressionButton = true， suppressionButton.state）"
        }
      },
      {
        "id": "default-button",
        "name": {
          "en": "Default button",
          "ko": "（Default button）"
        },
        "api": "NSAlert.addButton(withTitle:)",
        "description": {
          "en": "“The blue button” is the default button — the first button added to the alert; it gets the accent color and the Return key.",
          "ko": "“” —— ；，。"
        },
        "prompt": {
          "en": "the blue default button of an NSAlert — the first addButton(withTitle:), key equivalent Return",
          "ko": "NSAlert —— addButton(withTitle:)，"
        }
      }
    ],
    "prompt": {
      "en": "Show a native macOS alert with NSAlert (SwiftUI: .alert): messageText is the bold summary line, informativeText the smaller explanation. Add buttons with addButton(withTitle:) — the first one becomes the blue default button and answers the Return key; a button titled Cancel answers Escape. Set showsSuppressionButton = true for the “Don't ask me again” checkbox and read suppressionButton.state afterwards.",
      "ko": "NSAlert macOS （SwiftUI：.alert）：messageText ，informativeText 。 addButton(withTitle:) —— ，； Cancel Escape。 showsSuppressionButton = true “”， suppressionButton.state。"
    },
    "debugPrompt": {
      "en": "Debug my macOS alert (NSAlert, SwiftUI View.alert). Rule out: presenting off the main thread; runModal blocking the whole app when beginSheetModal(for:) attached to one window was intended; the return-key default being the FIRST button added, not the one you expect; the suppression checkbox state never persisted to defaults. The symptom:",
      "ko": "macOS （NSAlert、SwiftUI View.alert）。：； beginSheetModal(for:) ，runModal App ；，； defaults 。："
    },
    "relatedSlugs": [
      "sheet",
      "save-panel",
      "panel",
      "dialog-drawer-sheet"
    ]
  },
  {
    "slug": "slider",
    "platform": "macos",
    "name": {
      "en": "Slider",
      "ko": "슬라이더 (Slider)"
    },
    "tagline": {
      "en": "The round knob you drag along a track to pick a value from a range",
      "ko": "The round knob you drag along a track to pick a value from a range"
    },
    "description": {
      "en": "“The dot you drag along a line” is a slider — NSSlider. The circle is the knob, the groove is the track, and the leading portion up to the knob is tinted with the accent color. A continuous slider picks any value in the range; give it tick marks (the little lines below) and allowsTickMarkValuesOnly, and the knob snaps between fixed stops — the Key Repeat slider in System Settings is the classic tick-marked one.",
      "ko": "“” —— NSSlider。（knob），（track），。；（） allowsTickMarkValuesOnly， —— “”。"
    },
    "aka": {
      "en": [
        "slider control",
        "seek bar",
        "track bar",
        "range control"
      ],
      "ko": [
        "slider control",
        "seek bar",
        "track bar",
        "range control"
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
      "ko": [
        "the dot you drag left and right to change a value",
        "volume style control with a round knob on a line",
        "the bar with a circle you slide",
        "the little lines under the slider it snaps to",
        "the blue filled part of the slider line",
        "drag thing for picking a number between min and max"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSlider",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "Slider(value:in:step:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.numberOfTickMarks",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.allowsTickMarkValuesOnly",
        "note": {
          "en": "snap to ticks",
          "ko": "snap to ticks"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.tickMarkPosition",
        "note": {
          "en": ".below / .above",
          "ko": ".below / .above"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSSlider.isContinuous",
        "note": {
          "en": "act while dragging, not just on release",
          "ko": "act while dragging, not just on release"
        }
      }
    ],
    "parts": [
      {
        "id": "knob",
        "name": {
          "en": "Knob (thumb)",
          "ko": "（Knob/thumb）"
        },
        "api": "NSSlider.knobThickness",
        "description": {
          "en": "“The round dot you drag” is the knob — AppKit calls it the knob; the web calls the same thing a thumb.",
          "ko": "“” —— AppKit knob；Web thumb。"
        },
        "prompt": {
          "en": "the round draggable knob of an NSSlider (the web calls it the thumb)",
          "ko": "NSSlider （Web thumb）"
        }
      },
      {
        "id": "filled-track",
        "name": {
          "en": "Filled track",
          "ko": "（Filled track）"
        },
        "api": "Slider + .tint",
        "description": {
          "en": "“The blue part of the line before the knob” is the filled side of the track — it shows how far along the range the value sits.",
          "ko": "“” —— 。"
        },
        "prompt": {
          "en": "the tinted leading portion of a slider track, from the minimum up to the knob (SwiftUI: Slider with .tint)",
          "ko": "（SwiftUI：Slider .tint）"
        }
      },
      {
        "id": "track",
        "name": {
          "en": "Track",
          "ko": "（Track）"
        },
        "api": "NSSlider.SliderType.linear",
        "description": {
          "en": "“The groove the dot slides along” is the track — the full range, end to end.",
          "ko": "“” —— 。"
        },
        "prompt": {
          "en": "the full-width groove of a linear NSSlider that the knob travels along",
          "ko": "NSSlider"
        }
      },
      {
        "id": "tick-marks",
        "name": {
          "en": "Tick marks",
          "ko": "（Tick marks）"
        },
        "api": "NSSlider.numberOfTickMarks",
        "description": {
          "en": "“The little lines under the slider” are tick marks — with allowsTickMarkValuesOnly the knob only lands on them.",
          "ko": "“” —— allowsTickMarkValuesOnly，。"
        },
        "prompt": {
          "en": "tick marks below an NSSlider (numberOfTickMarks, tickMarkPosition = .below), snapping via allowsTickMarkValuesOnly",
          "ko": "NSSlider （numberOfTickMarks，tickMarkPosition = .below）， allowsTickMarkValuesOnly"
        }
      }
    ],
    "prompt": {
      "en": "Use a native macOS slider — NSSlider (SwiftUI: Slider(value:in:step:)): horizontal linear style, round knob, the leading side of the track tinted with the accent color. For discrete values add tick marks below with numberOfTickMarks and tickMarkPosition = .below, and snap the knob to them with allowsTickMarkValuesOnly = true. Set isContinuous = true so the value updates while dragging.",
      "ko": "macOS —— NSSlider（SwiftUI：Slider(value:in:step:)）：、，。，：numberOfTickMarks tickMarkPosition = .below， allowsTickMarkValuesOnly = true 。 isContinuous = true，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS slider (NSSlider, SwiftUI Slider). Rule out: actions flooding on every pixel because isContinuous is on (or missing when live updates were wanted); allowsTickMarkValuesOnly snapping values you did not expect; a value binding writing back during drag and fighting the gesture; vertical orientation inferred from frame shape in AppKit, not set explicitly. The symptom:",
      "ko": "macOS （NSSlider、SwiftUI Slider）。：isContinuous ，action （）；allowsTickMarkValuesOnly ；，；AppKit frame ，。："
    },
    "relatedSlugs": [
      "stepper",
      "level-indicator",
      "segmented-control"
    ]
  },
  {
    "slug": "color-well",
    "platform": "macos",
    "name": {
      "en": "Color Well",
      "ko": "색상 피커 (Color Well)"
    },
    "tagline": {
      "en": "The little swatch button that shows the current color and opens the picker",
      "ko": "The little swatch button that shows the current color and opens the picker"
    },
    "description": {
      "en": "“The little square showing the current color” is a color well — NSColorWell. Since macOS 13 it has three styles: minimal (just the swatch), default, and expanded — the modern one with a caret button attached. Clicking the expanded well opens a quick popover with a grid of swatches and an eyedropper; the caret opens the full color panel. The eyedropper that samples any pixel on screen is its own one-call API: NSColorSampler.",
      "ko": "“” —— NSColorWell。 macOS 13 ：minimal（）、default expanded —— ，。，；。 API：NSColorSampler。"
    },
    "aka": {
      "en": [
        "color picker button",
        "color swatch control",
        "color chooser",
        "color selector"
      ],
      "ko": [
        "color picker button",
        "color swatch control",
        "color chooser",
        "color selector"
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
      "ko": [
        "the small rectangle showing the current color",
        "color swatch you click to open the color picker",
        "the eyedropper for picking a color from the screen",
        "little colored square with an arrow next to it",
        "the grid of color squares that pops up",
        "control for choosing a color in settings"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSColorWell",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "ColorPicker",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorWell.colorWellStyle",
        "note": {
          "en": ".minimal / .default / .expanded (macOS 13+)",
          "ko": ".minimal / .default / .expanded (macOS 13+)"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorWell.color",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorSampler",
        "note": {
          "en": "the standalone eyedropper",
          "ko": "the standalone eyedropper"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSColorWell.supportsAlpha",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "swatch",
        "name": {
          "en": "Color swatch",
          "ko": "（Color swatch）"
        },
        "api": "NSColorWell.color",
        "description": {
          "en": "“The colored area itself” is the swatch — it always displays the well's current color and is the click target for the quick picker.",
          "ko": "“” —— ，。"
        },
        "prompt": {
          "en": "the swatch area of an NSColorWell showing its current color (NSColorWell.color)",
          "ko": "NSColorWell （NSColorWell.color）"
        }
      },
      {
        "id": "panel-button",
        "name": {
          "en": "Color-panel button",
          "ko": "（Color-panel button）"
        },
        "api": "NSColorWell.Style.expanded",
        "description": {
          "en": "“The little arrow segment next to the swatch” is the dedicated button the expanded style adds — it opens the full color panel.",
          "ko": "“” expanded —— 。"
        },
        "prompt": {
          "en": "the caret button attached to an expanded-style NSColorWell (colorWellStyle = .expanded) that opens NSColorPanel",
          "ko": "expanded NSColorWell （colorWellStyle = .expanded）， NSColorPanel"
        }
      },
      {
        "id": "quick-color-popover",
        "name": {
          "en": "Quick color popover",
          "ko": "（Quick color popover）"
        },
        "api": "NSColorWell.colorWellStyle",
        "description": {
          "en": "“The grid of color squares that pops up” is the expanded style's quick picker — swatches for fast choices, without the full panel.",
          "ko": "“” expanded —— ，。"
        },
        "prompt": {
          "en": "the quick swatch-grid popover an expanded NSColorWell shows when the swatch is clicked",
          "ko": "expanded NSColorWell"
        }
      },
      {
        "id": "eyedropper",
        "name": {
          "en": "Eyedropper (color sampler)",
          "ko": "（Eyedropper/color sampler）"
        },
        "api": "NSColorSampler",
        "description": {
          "en": "“The eyedropper that picks a color from anywhere on screen” is the system color sampler — one call: NSColorSampler().show { color in … }.",
          "ko": "“” —— ：NSColorSampler().show { color in … }。"
        },
        "prompt": {
          "en": "the system eyedropper for sampling a color from the screen (NSColorSampler().show { color in … })",
          "ko": "（NSColorSampler().show { color in … }）"
        }
      }
    ],
    "prompt": {
      "en": "Add a native macOS color well — NSColorWell (SwiftUI: ColorPicker). Use colorWellStyle = .expanded for the modern two-part control: clicking the swatch opens the quick color-grid popover with an eyedropper, and the caret button opens the full NSColorPanel. For a standalone screen-color eyedropper use NSColorSampler().show { color in … }.",
      "ko": "macOS —— NSColorWell（SwiftUI：ColorPicker）。 colorWellStyle = .expanded：， NSColorPanel。， NSColorSampler().show { color in … }。"
    },
    "debugPrompt": {
      "en": "Debug my macOS color well (NSColorWell, SwiftUI ColorPicker). Rule out: the shared NSColorPanel serving every well in the app so two wells fight over it; continuous updates flooding your target action instead of committing on close; the eyedropper failing without Screen Recording permission; colors shifting because sRGB and Display P3 color spaces are being mixed. The symptom:",
      "ko": "macOS （NSColorWell、SwiftUI ColorPicker）。： NSColorPanel App ，； target action，；“”，；sRGB Display P3 。："
    },
    "relatedSlugs": [
      "popover",
      "popup-pulldown-combo",
      "panel"
    ]
  },
  {
    "slug": "form-field",
    "platform": "web",
    "name": {
      "en": "Form Field",
      "ko": "폼 필드 (Form Field)"
    },
    "tagline": {
      "en": "Every part of a labeled input — label, placeholder, helper text, and the red error line",
      "ko": "Every part of a labeled input — label, placeholder, helper text, and the red error line"
    },
    "description": {
      "en": "“The gray text inside the box that disappears when you type” is the placeholder — one of five parts of a form field that each have a real name. The word above the box is the label (<label for>), the little red star is the required indicator, the small gray line underneath is helper text, and the red line that replaces it is the validation message. Wiring them up (for/id, aria-describedby, aria-invalid) is what makes the field usable by screen readers, not just sighted users.",
      "ko": "“”（placeholder）—— ，。（<label for>），，，。（for/id、aria-describedby、aria-invalid），，。"
    },
    "aka": {
      "en": [
        "text field",
        "input field",
        "form input",
        "form control"
      ],
      "ko": [
        "text field",
        "input field",
        "form input",
        "form control"
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
      "ko": [
        "the gray text inside the box that disappears when you type",
        "the little red star next to the label",
        "the small gray text under the input",
        "the red error message under the field",
        "the word above the text box",
        "hint text in the empty input"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<label for>",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "::placeholder",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-describedby",
        "note": {
          "en": "links helper/error text to the input",
          "ko": "links helper/error text to the input"
        }
      },
      {
        "framework": "ARIA",
        "symbol": "aria-invalid",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": ":user-invalid",
        "note": {
          "en": "invalid only after interaction",
          "ko": "invalid only after interaction"
        }
      },
      {
        "framework": "HTML",
        "symbol": "required",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "field-label",
        "name": {
          "en": "Label",
          "ko": "（Label）"
        },
        "api": "<label for=\"…\">",
        "description": {
          "en": "“The word above the box” is the label — a real <label> tied to the input by for/id, so clicking it focuses the field.",
          "ko": "“” —— <label>， for/id ，。"
        },
        "prompt": {
          "en": "a real <label for> element above the input, tied to it by for/id",
          "ko": "<label for> ， for/id"
        }
      },
      {
        "id": "required-indicator",
        "name": {
          "en": "Required indicator",
          "ko": "（Required indicator）"
        },
        "api": "required",
        "description": {
          "en": "“The little red star” marks a required field — the asterisk is decoration; the input itself carries the required attribute.",
          "ko": "“” —— ； required 。"
        },
        "prompt": {
          "en": "the required-field asterisk beside the label, backed by the required attribute on the input",
          "ko": "， required"
        }
      },
      {
        "id": "placeholder",
        "name": {
          "en": "Placeholder",
          "ko": "（Placeholder）"
        },
        "api": "::placeholder",
        "description": {
          "en": "“The gray text inside the box that disappears when you type” is the placeholder — an example or hint, never a substitute for the label.",
          "ko": "“” —— ，。"
        },
        "prompt": {
          "en": "the placeholder hint inside the input (placeholder attribute, styled via ::placeholder), used as a hint only",
          "ko": "（placeholder ， ::placeholder ），"
        }
      },
      {
        "id": "helper-text",
        "name": {
          "en": "Helper text",
          "ko": "（Helper text）"
        },
        "api": "aria-describedby",
        "description": {
          "en": "“The small gray line under the field” is helper text — link it to the input with aria-describedby so screen readers announce it.",
          "ko": "“” —— aria-describedby ，。"
        },
        "prompt": {
          "en": "the helper/hint text below the input, linked with aria-describedby",
          "ko": "/， aria-describedby"
        }
      },
      {
        "id": "error-message",
        "name": {
          "en": "Error message",
          "ko": "（Error message）"
        },
        "api": "aria-invalid=\"true\"",
        "description": {
          "en": "“The red text under the box” is the validation message — pair the red border (aria-invalid, :user-invalid) with a message the field references.",
          "ko": "“” —— （aria-invalid、:user-invalid）。"
        },
        "prompt": {
          "en": "the inline validation error below the field: aria-invalid=\"true\" on the input, red border, and an error message linked via aria-describedby",
          "ko": "： aria-invalid=\"true\"、， aria-describedby"
        }
      }
    ],
    "prompt": {
      "en": "Build the form field with full anatomy: a real <label for> above the input (clicking it focuses the field), placeholder text as a hint only — never as the label, helper text below linked via aria-describedby, and required marked with the required attribute plus a visual asterisk. On invalid input set aria-invalid=\"true\", style the red state with :user-invalid, and point aria-describedby at the error message.",
      "ko": "： <label for>（），placeholder —— ， aria-describedby ， required 。 aria-invalid=\"true\"， :user-invalid ， aria-describedby 。"
    },
    "debugPrompt": {
      "en": "Debug my form field (label for/id, aria-describedby, placeholder). Rule out: the placeholder doing the label's job and vanishing on first keystroke; the label not associated so clicking it does not focus the input; error text not linked via aria-describedby so screen readers never hear it; autofill's yellow/blue fill overriding your styles (-webkit-autofill). The symptom:",
      "ko": "（label for/id、aria-describedby、placeholder）。：placeholder ，；label ，； aria-describedby ，；/（-webkit-autofill）。："
    },
    "relatedSlugs": [
      "focus-ring-web",
      "combobox",
      "switch-checkbox-radio"
    ]
  },
  {
    "slug": "truncation",
    "platform": "web",
    "name": {
      "en": "Truncation (Ellipsis & Line Clamp)",
      "ko": "텍스트 말줄임 (Truncation / Line Clamp)"
    },
    "tagline": {
      "en": "Text cut short with … — at the end of the line, after N lines, or in the middle",
      "ko": "… —— 、 N ，"
    },
    "description": {
      "en": "“The text that gets cut off with three dots” is truncation, and the dots are an ellipsis (…, one character — not three periods). End-of-line truncation is text-overflow: ellipsis; cutting after N lines is a line clamp; dots in the middle of a long filename are middle truncation — native on macOS, JS on the web. Don't confuse it with the ⋯ overflow menu button: same dots, completely different job.",
      "ko": "“”，（…， —— ）。 text-overflow: ellipsis；N （line clamp）； —— macOS ，Web JS。 ⋯ ：，。"
    },
    "aka": {
      "en": [
        "ellipsis",
        "text overflow",
        "line clamp",
        "clamped text",
        "truncated text"
      ],
      "ko": [
        "ellipsis",
        "text overflow",
        "line clamp",
        "clamped text",
        "truncated text"
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
      "ko": [
        "the text gets cut off with three dots",
        "show only two lines then dot dot dot",
        "long file name with dots in the middle",
        "cut the title after one line instead of wrapping",
        "text fades out at the edge instead of dots",
        "title too long for the box"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "text-overflow: ellipsis",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "-webkit-line-clamp",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "white-space: nowrap",
        "note": {
          "en": "required for single-line ellipsis",
          "ko": "required for single-line ellipsis"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSLineBreakMode.byTruncatingMiddle",
        "note": {
          "en": "middle truncation is native on macOS",
          "ko": "middle truncation is native on macOS"
        }
      },
      {
        "framework": "CSS",
        "symbol": "mask-image",
        "note": {
          "en": "the fade-out alternative",
          "ko": "the fade-out alternative"
        }
      }
    ],
    "parts": [
      {
        "id": "end-ellipsis",
        "name": {
          "en": "End ellipsis",
          "ko": "（End ellipsis）"
        },
        "api": "text-overflow: ellipsis",
        "description": {
          "en": "“Dot dot dot at the end of the line” — only kicks in alongside overflow: hidden and white-space: nowrap.",
          "ko": "“” —— overflow: hidden、white-space: nowrap 。"
        },
        "prompt": {
          "en": "single-line truncation: overflow: hidden; white-space: nowrap; text-overflow: ellipsis",
          "ko": "：overflow: hidden; white-space: nowrap; text-overflow: ellipsis"
        }
      },
      {
        "id": "line-clamp",
        "name": {
          "en": "Line clamp",
          "ko": "（Line clamp）"
        },
        "api": "-webkit-line-clamp",
        "description": {
          "en": "“Show two lines then cut it off” is a line clamp — the ellipsis lands at the end of the last allowed line.",
          "ko": "“” —— 。"
        },
        "prompt": {
          "en": "multi-line clamp: display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden",
          "ko": "：display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden"
        }
      },
      {
        "id": "middle-truncation",
        "name": {
          "en": "Middle truncation",
          "ko": "（Middle truncation）"
        },
        "api": "NSLineBreakMode.byTruncatingMiddle",
        "description": {
          "en": "“The dots in the middle of a long file name” keep both ends readable — native on macOS (.byTruncatingMiddle); on the web it takes JS.",
          "ko": "“” —— macOS （.byTruncatingMiddle）；Web JS。"
        },
        "prompt": {
          "en": "middle truncation keeping the start and the file extension visible (macOS: lineBreakMode = .byTruncatingMiddle; web: JS string slicing)",
          "ko": "，（macOS：lineBreakMode = .byTruncatingMiddle；Web：JS ）"
        }
      },
      {
        "id": "fade-out",
        "name": {
          "en": "Fade-out (soft truncation)",
          "ko": "（Fade-out/）"
        },
        "api": "mask-image",
        "description": {
          "en": "“The text fades out at the edge instead of dots” — a soft truncation done with a transparency mask, common in cards and code previews.",
          "ko": "“” —— ，。"
        },
        "prompt": {
          "en": "fade-out truncation: mask-image: linear-gradient(to right, black 70%, transparent) on a nowrap, overflow-hidden line",
          "ko": "：、overflow-hidden mask-image: linear-gradient(to right, black 70%, transparent)"
        }
      }
    ],
    "prompt": {
      "en": "Truncate the text with CSS. Single line: overflow: hidden; white-space: nowrap; text-overflow: ellipsis. Multi-line: display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden (unprefixed line-clamp isn't safe in all browsers yet). Middle truncation that preserves the file extension needs JS on the web — on macOS it's lineBreakMode = .byTruncatingMiddle. For a soft fade-out instead of dots, use mask-image: linear-gradient(to right, black 70%, transparent).",
      "ko": "CSS 。：overflow: hidden; white-space: nowrap; text-overflow: ellipsis。：display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden（ line-clamp ）。 Web JS —— macOS lineBreakMode = .byTruncatingMiddle。， mask-image: linear-gradient(to right, black 70%, transparent)。"
    },
    "debugPrompt": {
      "en": "Debug my text truncation (text-overflow ellipsis, line-clamp). Rule out: ellipsis needing all three of overflow hidden, white-space nowrap, and a real width constraint — in flex rows add min-width:0 to the shrinking child, that is the classic; multi-line needing -webkit-line-clamp with -webkit-box; middle truncation (file names) needing JS, CSS cannot do it; the full text unavailable because no title/tooltip reveals it. The symptom:",
      "ko": "（text-overflow ellipsis、line-clamp）。： overflow hidden、white-space nowrap —— flex min-width: 0，； -webkit-line-clamp -webkit-box；（） JS，CSS ；， title/tooltip 。："
    },
    "relatedSlugs": [
      "three-dots",
      "breadcrumbs",
      "marquee"
    ]
  },
  {
    "slug": "drag-and-drop",
    "platform": "web",
    "name": {
      "en": "Drag & Drop",
      "ko": "드래그 앤 드롭 (Drag & Drop)"
    },
    "tagline": {
      "en": "The grips, handles, previews, and landing cues around a drag interaction",
      "ko": "The grips, handles, previews, and landing cues around a drag interaction"
    },
    "description": {
      "en": "Drag and drop lets someone move or place an object directly. A grip says where to grab, a drag preview follows the pointer, and an insertion line or highlighted target previews the destination before release. Selection resize handles are related controls around a selected object: they resize it rather than move it.",
      "ko": "。，，。：，。"
    },
    "aka": {
      "en": [
        "drag and drop",
        "drag-and-drop interaction",
        "direct manipulation",
        "sortable drag"
      ],
      "ko": [
        "drag and drop",
        "drag-and-drop interaction",
        "direct manipulation",
        "sortable drag"
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
      "ko": [
        "those kind of a 3x3 or 2x2",
        "those squares, you know, that are on the corners",
        "line indicators for where it will drop",
        "the neighboring terminal is highlighted as a whole",
        "half of that terminal is highlighted",
        "the ghost copy that follows the pointer"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "ondrop",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "ondragover",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "draggable=\"true\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-grabbed",
        "note": {
          "en": "deprecated; announce drag state and drop results with live regions instead",
          "ko": "； live region"
        }
      },
      {
        "framework": "dnd-kit",
        "symbol": "@dnd-kit/core",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "drag-handle",
        "name": {
          "en": "Drag handle (grip)",
          "ko": "（Drag handle/grip）"
        },
        "api": "draggable=\"true\"",
        "description": {
          "en": "“Those kind of a 3x3 or 2x2” dots are a drag handle, also called a grip or grabber.",
          "ko": "“ 3x3 2x2 ”，（grip/grabber）。"
        },
        "prompt": {
          "en": "a drag handle or grip on the draggable item (HTML draggable=\"true\" or @dnd-kit/core listeners): a compact 3×3 or 2×2 dot matrix that clearly marks where to grab",
          "ko": "/（HTML draggable=\"true\" @dnd-kit/core listeners）： 3×3 2×2 ，"
        }
      },
      {
        "id": "resize-handles",
        "name": {
          "en": "Selection resize handles",
          "ko": "（Selection resize handles）"
        },
        "api": "pointer events",
        "description": {
          "en": "“Those squares, you know, that are on the corners” are selection resize handles around the selected object.",
          "ko": "“Those squares, you know, that are on the corners” are selection resize handles around the selected object."
        },
        "prompt": {
          "en": "selection resize handles using pointer events: small square controls on the selected object's corners and edges that resize it without acting as drag handles",
          "ko": "pointer events ：，，"
        }
      },
      {
        "id": "drop-indicator",
        "name": {
          "en": "Drop indicator (insertion line)",
          "ko": "（Drop indicator/insertion line）"
        },
        "api": "ondragover",
        "description": {
          "en": "“Line indicators for where it will drop” are drop indicators, often drawn as an insertion line between items.",
          "ko": "“Line indicators for where it will drop” are drop indicators, often drawn as an insertion line between items."
        },
        "prompt": {
          "en": "a drop indicator during ondragover: a clearly visible insertion line between items at the exact position where the dragged item will land",
          "ko": "ondragover ：，"
        }
      },
      {
        "id": "drop-target-highlight",
        "name": {
          "en": "Drop-target highlight",
          "ko": "（Drop-target highlight）"
        },
        "api": "ondragover",
        "description": {
          "en": "“The neighboring terminal is highlighted as a whole” describes a drop-target highlight over the destination region.",
          "ko": "“The neighboring terminal is highlighted as a whole” describes a drop-target highlight over the destination region."
        },
        "prompt": {
          "en": "a drop-target highlight during ondragover: tint the whole valid destination or its precise split zone before the item is dropped",
          "ko": "ondragover ：，"
        }
      },
      {
        "id": "drag-preview",
        "name": {
          "en": "Drag preview (ghost)",
          "ko": "（Ghost ）"
        },
        "api": "DataTransfer.setDragImage()",
        "description": {
          "en": "The translucent copy that follows the pointer during a drag is the drag preview, often called the ghost.",
          "ko": "， ghost（）。"
        },
        "prompt": {
          "en": "a drag preview or ghost (DataTransfer.setDragImage()): a lightweight translucent image of the dragged item that follows the pointer without obscuring the drop cues",
          "ko": "/（DataTransfer.setDragImage()）：，，"
        }
      }
    ],
    "prompt": {
      "en": "Build a Drag & Drop interaction with HTML draggable, ondragover, and ondrop (or @dnd-kit/core): show a drag handle, selection resize handles where applicable, a drag preview, and an insertion line or highlighted drop target before release. Do not use the deprecated aria-grabbed state; announce the picked-up item, available destination, and drop result through an ARIA live region.",
      "ko": "HTML draggable、ondragover ondrop（ @dnd-kit/core）：，，，。 aria-grabbed； ARIA live region 、。"
    },
    "debugPrompt": {
      "en": "Debug my drag and drop (HTML draggable, ondragover/ondrop, dnd-kit). Rule out: drop never firing because dragover does not call preventDefault — that is the classic; dragleave firing when entering child elements so the highlight flickers — keep an enter/leave counter; setDragImage ignored because the ghost element is not in the DOM; touch devices doing nothing because native HTML5 DnD has no touch events — use a pointer-based library. The symptom:",
      "ko": "（HTML draggable、ondragover/ondrop、dnd-kit）。：drop ， dragover preventDefault —— ； dragleave ， —— enter/leave ；setDragImage ， DOM ；， HTML5 DnD —— pointer 。："
    },
    "relatedSlugs": [
      "split-view",
      "focus-ring-web",
      "three-dots",
      "bento-grid"
    ]
  },
  {
    "slug": "divider",
    "platform": "web",
    "name": {
      "en": "Divider vs. Separator vs. Rule",
      "ko": "구분선 (Divider / Separator)"
    },
    "tagline": {
      "en": "The same thin line can mark a topic break, separate controls, or be decoration",
      "ko": "The same thin line can mark a topic break, separate controls, or be decoration"
    },
    "description": {
      "en": "A horizontal rule marks a change of topic in content, so HTML gives it the semantic <hr> element. A separator divides groups of controls or regions and can use role=\"separator\" when no native semantic element fits. If the line is only visual styling, it is a CSS border and should not be announced as an element. SwiftUI Divider and AppKit separator menu items are the familiar macOS cousins.",
      "ko": "（horizontal rule）， HTML <hr> 。（separator），， role=\"separator\"。， CSS border，。SwiftUI Divider AppKit separator macOS 。"
    },
    "aka": {
      "en": [
        "separator",
        "rule",
        "horizontal rule",
        "visual divider"
      ],
      "ko": [
        "separator",
        "rule",
        "horizontal rule",
        "visual divider"
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
      "ko": [
        "between those line breaks",
        "above that line break",
        "a vertical line break between those sections",
        "the line break divider between the actual kind of title and the download button",
        "maybe add a vertical line divider",
        "horizontal line thing"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<hr>",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"separator\"",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "border-block-start",
        "note": {
          "en": "decorative only",
          "ko": "decorative only"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "Divider",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSMenuItem.separator()",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "thematic-break",
        "name": {
          "en": "Thematic break (horizontal rule)",
          "ko": "（Thematic break/）"
        },
        "api": "<hr>",
        "description": {
          "en": "“Above that line break” can mean a horizontal rule: an <hr> marking a real change of topic between sections of content.",
          "ko": "“”：<hr>，。"
        },
        "prompt": {
          "en": "a semantic thematic break using HTML <hr>: a horizontal rule between two content sections whose subject or scene changes",
          "ko": "HTML <hr> ：，"
        }
      },
      {
        "id": "semantic-separator",
        "name": {
          "en": "Semantic separator",
          "ko": "（Semantic separator）"
        },
        "api": "role=\"separator\"",
        "description": {
          "en": "“A vertical line break between those sections” is a semantic separator when it divides distinct regions or groups of controls.",
          "ko": "“A vertical line break between those sections” is a semantic separator when it divides distinct regions or groups of controls."
        },
        "prompt": {
          "en": "a structural separator with role=\"separator\" between two groups of controls or interface regions, with aria-orientation=\"vertical\" when it is vertical",
          "ko": "role=\"separator\" ， aria-orientation=\"vertical\""
        }
      },
      {
        "id": "decorative-border",
        "name": {
          "en": "Decorative CSS border",
          "ko": "CSS （Decorative CSS border）"
        },
        "api": "border-block-start",
        "description": {
          "en": "“Maybe add a vertical line divider” can be only decoration; use a CSS border with no separator semantics when it conveys no structure.",
          "ko": "“”；， separator CSS border。"
        },
        "prompt": {
          "en": "a purely decorative divider drawn with a CSS border such as border-block-start or border-inline-start, with no <hr> element or separator role",
          "ko": "， CSS border ， border-block-start border-inline-start， <hr> ， separator"
        }
      },
      {
        "id": "macos-separators",
        "name": {
          "en": "macOS divider and separator item",
          "ko": "macOS Divider （macOS divider and separator item）"
        },
        "api": "Divider / NSMenuItem.separator()",
        "description": {
          "en": "In macOS UI, SwiftUI calls the visual line Divider, while a line between menu command groups is an NSMenuItem separator item.",
          "ko": "macOS ，SwiftUI Divider， NSMenuItem separator item。"
        },
        "prompt": {
          "en": "the native macOS cousin: SwiftUI Divider between view regions, or NSMenuItem.separator() specifically between related groups of menu commands",
          "ko": "macOS ： SwiftUI Divider， NSMenuItem.separator()"
        }
      }
    ],
    "prompt": {
      "en": "Choose the correct Divider, Separator, or Rule: use HTML <hr> for a semantic thematic break in content, role=\"separator\" for a structural boundary between groups of controls, and a CSS border such as border-block-start for a purely decorative line. On macOS, use SwiftUI Divider for a visual division or NSMenuItem.separator() between menu-item groups.",
      "ko": "Divider、Separator Rule： HTML <hr>； role=\"separator\"； CSS border， border-block-start。macOS ， SwiftUI Divider， NSMenuItem.separator()。"
    },
    "debugPrompt": {
      "en": "Debug my divider (hr, role=separator, border utilities). Rule out: the hairline doubling or vanishing on fractional zoom because 1px borders round differently; a decorative divider still announced by screen readers — decorative ones need aria-hidden, semantic ones role=separator; a flex parent stretching the divider when a fixed cross-size was intended; margin collapse eating the space around an hr. The symptom:",
      "ko": "（hr、role=separator、border ）。： 1px ，； —— aria-hidden， role=separator；flex ；margin hr 。："
    },
    "relatedSlugs": [
      "menu-bar",
      "context-menu",
      "split-view",
      "three-dots"
    ]
  },
  {
    "slug": "progress-indicators",
    "platform": "web",
    "name": {
      "en": "Progress Ring vs. Spinner vs. Progress Bar",
      "ko": "진행 표시기 (Progress Ring & Bar)"
    },
    "tagline": {
      "en": "A spinner means wait; a ring or bar can show how much work is complete",
      "ko": "Spinner 「」；"
    },
    "description": {
      "en": "A spinner loops without showing how much work remains. A determinate progress ring fills an arc around a circle, while a linear progress bar fills across a track; both represent a known value. A percentage label can make that value exact, but it must agree with the indicator's accessible progress value.",
      "ko": "Spinner ，。，；。，접근성。"
    },
    "aka": {
      "en": [
        "circular progress indicator",
        "loading spinner",
        "determinate progress indicator",
        "linear progress indicator"
      ],
      "ko": [
        "circular progress indicator",
        "loading spinner",
        "determinate progress indicator",
        "linear progress indicator"
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
      "ko": [
        "that circle for the countdown, that circle that gets filled up",
        "the actual circular progress bar",
        "the menu bar like ring getting filled up",
        "the ring that fills up",
        "the spinning circle while it loads",
        "the bar that shows how far along it is"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<progress>",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "ProgressView",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"progressbar\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-valuenow",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "spinner",
        "name": {
          "en": "Indeterminate spinner",
          "ko": "Spinner"
        },
        "api": "role=\"progressbar\"",
        "description": {
          "en": "The spinning circle that keeps looping is an indeterminate spinner: it says work is happening, not how much is left.",
          "ko": "Spinner：「」，。"
        },
        "prompt": {
          "en": "an indeterminate spinner with role=\"progressbar\" and no aria-valuenow: a looping circular stroke used only when the remaining duration or completion amount is unknown",
          "ko": "role=\"progressbar\"、 aria-valuenow indeterminate spinner：，"
        }
      },
      {
        "id": "progress-ring",
        "name": {
          "en": "Determinate progress ring",
          "ko": "Determinate progress ring"
        },
        "api": "aria-valuenow",
        "description": {
          "en": "“The ring that fills up” is a determinate progress ring: its circular arc represents a known completion value.",
          "ko": "“The ring that fills up” is a determinate progress ring: its circular arc represents a known completion value."
        },
        "prompt": {
          "en": "a determinate progress ring with role=\"progressbar\" and aria-valuenow: a circular arc that visibly fills from empty to complete around a stable track",
          "ko": "role=\"progressbar\" aria-valuenow ："
        }
      },
      {
        "id": "progress-bar",
        "name": {
          "en": "Linear progress bar",
          "ko": "Linear progress bar"
        },
        "api": "<progress>",
        "description": {
          "en": "The bar that fills from one side to the other is a linear progress bar; use <progress> when its value is known.",
          "ko": "； <progress>。"
        },
        "prompt": {
          "en": "a determinate linear progress bar using HTML <progress>: the filled value advances across a fixed horizontal track from minimum to completion",
          "ko": "HTML <progress> ："
        }
      },
      {
        "id": "progress-track",
        "name": {
          "en": "Progress track",
          "ko": "Progress track"
        },
        "api": "<progress>",
        "description": {
          "en": "The unfilled rail behind a progress ring or bar is the track; it shows the indicator's full range.",
          "ko": "（track），。"
        },
        "prompt": {
          "en": "the progress track behind the <progress> value: the full, low-contrast rail that remains visible around the unfilled portion of the indicator",
          "ko": "<progress> ：、，"
        }
      },
      {
        "id": "percentage-label",
        "name": {
          "en": "Percentage label",
          "ko": "Percentage label"
        },
        "api": "aria-valuenow",
        "description": {
          "en": "The number beside or inside the indicator is the percentage label, a readable statement of the current progress value.",
          "ko": "The number beside or inside the indicator is the percentage label, a readable statement of the current progress value."
        },
        "prompt": {
          "en": "a percentage label for the progress indicator, such as 72%, kept in sync with role=\"progressbar\" and its aria-valuenow value",
          "ko": "， 72%， role=\"progressbar\" aria-valuenow"
        }
      }
    ],
    "prompt": {
      "en": "Use the correct Progress Indicator: an indeterminate spinner when the remaining work is unknown, a determinate progress ring when a compact circular arc should fill toward completion, or an HTML <progress> linear bar when there is room for a readable track. For a custom indicator use role=\"progressbar\" with aria-valuenow, and expose any visible percentage as the same accessible value; SwiftUI's cousin is ProgressView.",
      "ko": "： indeterminate spinner；； HTML <progress> 。 role=\"progressbar\" aria-valuenow，접근성；SwiftUI ProgressView。"
    },
    "debugPrompt": {
      "en": "Debug my progress indicator (role=progressbar, aria-valuenow, spinner). Rule out: an indeterminate spinner where a determinate bar was possible (or vice versa); the bar width not animating because the transition is on the wrong property; the loading flag stuck true so the spinner never stops; aria-valuenow never updating so assistive tech hears 0 percent forever. The symptom:",
      "ko": "（role=progressbar、aria-valuenow、spinner）。： indeterminate spinner（）；， transition ；loading true，spinner ；aria-valuenow ， 0%。："
    },
    "relatedSlugs": [
      "skeleton-spinner",
      "marquee"
    ]
  },
  {
    "slug": "window",
    "platform": "macos",
    "name": {
      "en": "Mac Window",
      "ko": "Mac 윈도우 (Mac Window)"
    },
    "tagline": {
      "en": "The movable Mac app frame, from its title bar and toolbar to its resize edges",
      "ko": "Mac ，、"
    },
    "description": {
      "en": "A Mac window is the movable, usually resizable frame that holds one app surface. Its top chrome can combine a draggable title bar, title, toolbar, accessories, and document tabs, while the red, yellow, and green traffic lights remain their own standard controls. Window tabs belong to the frame and group separate windows; an in-content tab view only switches content inside one window.",
      "ko": "Mac 、，。（chrome）、、、，。，；。"
    },
    "aka": {
      "en": [
        "app window",
        "document window",
        "NSWindow",
        "window frame"
      ],
      "ko": [
        "app window",
        "document window",
        "NSWindow",
        "window frame"
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
      "ko": [
        "the whole mac app box on screen",
        "the top of the window where you can drag it",
        "the little control inside the title bar",
        "a button next to the traffic lights",
        "the tabs built into the mac window frame",
        "the tiny corner grip for resizing the window"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSWindow",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "WindowGroup",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "Window",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindowController",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "title-bar",
        "name": {
          "en": "Title bar",
          "ko": "Title bar"
        },
        "api": "NSWindow.titleVisibility",
        "description": {
          "en": "“The strip across the top of the window” is the title bar, which can remain present even when its title text is hidden.",
          "ko": "“The strip across the top of the window” is the title bar, which can remain present even when its title text is hidden."
        },
        "prompt": {
          "en": "the Mac window's title bar (NSWindow.titleVisibility): the top chrome containing the title, traffic lights, and optional unified toolbar",
          "ko": "Mac （NSWindow.titleVisibility）：，、"
        }
      },
      {
        "id": "drag-region",
        "name": {
          "en": "Window drag region",
          "ko": "Window drag region"
        },
        "api": "NSWindow.isMovableByWindowBackground",
        "description": {
          "en": "The blank area you grab to move the window is its drag region, not necessarily the visible title text.",
          "ko": "The blank area you grab to move the window is its drag region, not necessarily the visible title text."
        },
        "prompt": {
          "en": "the window drag region (NSWindow.isMovableByWindowBackground): an unobstructed title-bar area that moves the NSWindow when dragged",
          "ko": "（NSWindow.isMovableByWindowBackground）：， NSWindow"
        }
      },
      {
        "id": "window-title",
        "name": {
          "en": "Window title",
          "ko": "Window title"
        },
        "api": "NSWindow.title",
        "description": {
          "en": "The document or screen name printed in the title bar is the window title.",
          "ko": "The document or screen name printed in the title bar is the window title."
        },
        "prompt": {
          "en": "the window title (NSWindow.title): the document or screen name positioned in the title-bar chrome",
          "ko": "（NSWindow.title）："
        }
      },
      {
        "id": "unified-toolbar",
        "name": {
          "en": "Unified toolbar",
          "ko": "Unified toolbar"
        },
        "api": "NSWindow.ToolbarStyle.unified",
        "description": {
          "en": "When the title and window actions share one top row, that chrome uses the unified toolbar style.",
          "ko": "When the title and window actions share one top row, that chrome uses the unified toolbar style."
        },
        "prompt": {
          "en": "a unified Mac toolbar (NSWindow.ToolbarStyle.unified) sharing the title bar's single row instead of sitting in a separate strip",
          "ko": "Mac （NSWindow.ToolbarStyle.unified）：，"
        }
      },
      {
        "id": "toolbar-item",
        "name": {
          "en": "Toolbar item",
          "ko": "Toolbar item"
        },
        "api": "NSToolbarItem",
        "description": {
          "en": "One button, field, or flexible space placed in the window toolbar is a toolbar item.",
          "ko": "One button, field, or flexible space placed in the window toolbar is a toolbar item."
        },
        "prompt": {
          "en": "a native toolbar item (NSToolbarItem) placed with macOS toolbar spacing, validation, and overflow behavior",
          "ko": "（NSToolbarItem）， macOS 、"
        }
      },
      {
        "id": "title-bar-accessory",
        "name": {
          "en": "Title-bar accessory",
          "ko": "Title-bar accessory"
        },
        "api": "NSTitlebarAccessoryViewController",
        "description": {
          "en": "“The little control inside the title bar” is a title-bar accessory, separate from both the toolbar and traffic lights.",
          "ko": "“The little control inside the title bar” is a title-bar accessory, separate from both the toolbar and traffic lights."
        },
        "prompt": {
          "en": "a title-bar accessory (NSTitlebarAccessoryViewController): a custom control strip attached to an edge of the NSWindow title bar, separate from NSToolbar",
          "ko": "（NSTitlebarAccessoryViewController）： NSWindow ， NSToolbar"
        }
      },
      {
        "id": "title-bar-separator",
        "name": {
          "en": "Title-bar separator",
          "ko": "Title-bar separator"
        },
        "api": "NSWindow.titlebarSeparatorStyle",
        "description": {
          "en": "The hairline between the window's top chrome and its content is the title-bar separator.",
          "ko": "The hairline between the window's top chrome and its content is the title-bar separator."
        },
        "prompt": {
          "en": "the title-bar separator (NSWindow.titlebarSeparatorStyle): the native hairline between the title-bar or toolbar chrome and window content",
          "ko": "（NSWindow.titlebarSeparatorStyle）："
        }
      },
      {
        "id": "window-tabs",
        "name": {
          "en": "Window tabs",
          "ko": "Window tabs"
        },
        "api": "NSWindowTabGroup",
        "description": {
          "en": "Tabs in the window frame group separate document windows; they are not an NSTabView inside the content area.",
          "ko": "， NSTabView。"
        },
        "prompt": {
          "en": "native window tabs (NSWindowTabGroup): a tab strip in the window frame that groups separate NSWindow documents, not an in-content NSTabView",
          "ko": "（NSWindowTabGroup）：， NSWindow ， NSTabView"
        }
      },
      {
        "id": "resize-edge",
        "name": {
          "en": "Resize edge / corner",
          "ko": "Resize edge / corner"
        },
        "api": "NSWindow.StyleMask.resizable",
        "description": {
          "en": "“The tiny corner grip” means the resize edge or corner, which may be interactive even when no grip is drawn.",
          "ko": "“The tiny corner grip” means the resize edge or corner, which may be interactive even when no grip is drawn."
        },
        "prompt": {
          "en": "the native resize edge and corner (NSWindow.StyleMask.resizable): the draggable window-frame boundary, including the bottom-right size-grip area",
          "ko": "（NSWindow.StyleMask.resizable）：，"
        }
      }
    ],
    "prompt": {
      "en": "Build this as a native Mac Window (NSWindow; SwiftUI: Window or WindowGroup). Distinguish the draggable title-bar region from NSWindow.title, use an NSToolbar for unified chrome, attach custom title-bar controls with NSTitlebarAccessoryViewController, and preserve native window tabs and resize edges.",
      "ko": "Mac （NSWindow；SwiftUI：Window WindowGroup）。 NSWindow.title， NSToolbar （chrome）， NSTitlebarAccessoryViewController ，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS window (NSWindow). Rule out: content underlapping the title bar because fullSizeContentView plus transparent title bar is set; the window not draggable where expected — isMovableByWindowBackground vs a draggable title bar area; keystrokes going nowhere because the first responder was cleared; frame autosave restoring an old position over your manual setFrame. The symptom:",
      "ko": "macOS （NSWindow）。： fullSizeContentView ，；——isMovableByWindowBackground ；， first responder ；frame ， setFrame。："
    },
    "relatedSlugs": [
      "traffic-lights",
      "toolbar",
      "split-view",
      "sidebar"
    ]
  },
  {
    "slug": "split-view",
    "platform": "macos",
    "name": {
      "en": "Split View",
      "ko": "스플릿 뷰 (Split View)"
    },
    "tagline": {
      "en": "Resizable panes separated by a draggable divider inside a Mac window",
      "ko": "Resizable panes separated by a draggable divider inside a Mac window"
    },
    "description": {
      "en": "A split view divides one window region into two or more panes that can resize independently. The line between them is a split-view divider or splitter when it can be dragged, not merely a decorative separator. A sidebar is one specialized pane and can collapse while the remaining pane expands.",
      "ko": "。，（splitter），。，，。"
    },
    "aka": {
      "en": [
        "split pane",
        "splitter view",
        "multi-pane layout",
        "navigation split view"
      ],
      "ko": [
        "split pane",
        "splitter view",
        "multi-pane layout",
        "navigation split view"
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
      "ko": [
        "the window divided into two resizable panels",
        "the line between the two panes that I drag",
        "the divider that resizes the sidebar",
        "the left panel that collapses into the edge",
        "the toolbar line that follows the sidebar divider"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSplitView",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewItem",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "NavigationSplitView",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewController",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "pane",
        "name": {
          "en": "Pane (split-view item)",
          "ko": "Pane (split-view item)"
        },
        "api": "NSSplitViewItem",
        "description": {
          "en": "Each independently sized region on either side of the divider is a pane, represented by an NSSplitViewItem.",
          "ko": "， NSSplitViewItem 。"
        },
        "prompt": {
          "en": "a split-view pane (NSSplitViewItem): one independently sized content region inside the NSSplitView",
          "ko": "（NSSplitViewItem）：NSSplitView"
        }
      },
      {
        "id": "divider",
        "name": {
          "en": "Split-view divider (splitter)",
          "ko": "（splitter）"
        },
        "api": "NSSplitView.dividerThickness",
        "description": {
          "en": "“The line between the two panes that I drag” is the split-view divider, also called a splitter.",
          "ko": "「」， splitter。"
        },
        "prompt": {
          "en": "the draggable split-view divider or splitter (NSSplitView.dividerThickness) between two panes, with the native resize cursor and hit area",
          "ko": "（splitter，NSSplitView.dividerThickness），"
        }
      },
      {
        "id": "sidebar-collapse",
        "name": {
          "en": "Sidebar collapse behavior",
          "ko": "Sidebar collapse behavior"
        },
        "api": "NSSplitViewItem.collapseBehavior",
        "description": {
          "en": "The way a sidebar folds away and yields its width to the next pane is its collapse behavior.",
          "ko": "The way a sidebar folds away and yields its width to the next pane is its collapse behavior."
        },
        "prompt": {
          "en": "native sidebar collapse behavior (NSSplitViewItem.collapseBehavior): the leading pane folds away while the adjacent pane expands into its space",
          "ko": "（NSSplitViewItem.collapseBehavior）：，"
        }
      },
      {
        "id": "tracking-separator",
        "name": {
          "en": "Tracking separator toolbar item",
          "ko": "Tracking separator toolbar item"
        },
        "api": "NSTrackingSeparatorToolbarItem",
        "description": {
          "en": "The toolbar divider that stays exactly above a moving split-view divider is a tracking separator.",
          "ko": "The toolbar divider that stays exactly above a moving split-view divider is a tracking separator."
        },
        "prompt": {
          "en": "a tracking separator toolbar item (NSTrackingSeparatorToolbarItem) aligned to the NSSplitView divider and moving horizontally with it",
          "ko": "（NSTrackingSeparatorToolbarItem）： NSSplitView"
        }
      }
    ],
    "prompt": {
      "en": "Build a native Split View with NSSplitView and NSSplitViewItem (SwiftUI: NavigationSplitView), using a draggable divider between independently sized panes. Give a sidebar item native collapse behavior and align any toolbar boundary with NSTrackingSeparatorToolbarItem.",
      "ko": "NSSplitView NSSplitViewItem （SwiftUI：NavigationSplitView），。， NSTrackingSeparatorToolbarItem 。"
    },
    "debugPrompt": {
      "en": "Debug my macOS split view (NSSplitView, NSSplitViewController). Rule out: divider position not persisting without autosaveName; holding priorities deciding which pane absorbs window resize — the lowest priority pane grows; delegate min/max constraints fighting Auto Layout constraints on the same panes; canCollapse snapping a pane closed on double-click unexpectedly. The symptom:",
      "ko": "macOS （NSSplitView、NSSplitViewController）。： autosaveName ；holding priorities ——；delegate ／ Auto Layout ；canCollapse 。："
    },
    "relatedSlugs": [
      "sidebar",
      "inspector",
      "toolbar",
      "window"
    ]
  },
  {
    "slug": "scroll-view",
    "platform": "macos",
    "name": {
      "en": "Scroll View (Scroller)",
      "ko": "스크롤 뷰 (Scroll View)"
    },
    "tagline": {
      "en": "A viewport whose AppKit scrollbar is called a scroller",
      "ko": "， AppKit scroller"
    },
    "description": {
      "en": "A scroll view is a viewport onto content larger than the visible region. AppKit calls the bar at its edge a scroller: its draggable thumb is the knob and the track behind it is the knob slot. Modern overlay scrollers float above content and fade away, while legacy scrollers reserve permanent layout space.",
      "ko": "。AppKit scroller： knob， knob slot。 overlay scroller 、；legacy scroller 。"
    },
    "aka": {
      "en": [
        "scrolling view",
        "scroll container",
        "scrollbar",
        "NSScroller"
      ],
      "ko": [
        "scrolling view",
        "scroll container",
        "scrollbar",
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
      "ko": [
        "the area you can scroll inside",
        "the scrollbar on the side of a mac window",
        "the little thumb you drag to scroll",
        "the track behind the scrollbar thumb",
        "the scrollbar that fades away until you scroll",
        "the rubber band bounce at the end of a list"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSScrollView",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSScroller",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "ScrollView",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSClipView",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "scroller",
        "name": {
          "en": "Scroller",
          "ko": "Scroller（）"
        },
        "api": "NSScroller",
        "description": {
          "en": "The control most people call a scrollbar is formally a scroller in AppKit.",
          "ko": "「」， AppKit scroller。"
        },
        "prompt": {
          "en": "the scroll view's scroller (NSScroller): the native macOS track-and-thumb control at the content edge",
          "ko": "scroller（NSScroller）： macOS「＋」"
        }
      },
      {
        "id": "knob",
        "name": {
          "en": "Scroller knob (thumb)",
          "ko": "knob（thumb）"
        },
        "api": "NSScroller.knobProportion",
        "description": {
          "en": "“The little thumb you drag” is the scroller knob; its length reflects how much content is visible.",
          "ko": "「」 scroller knob，。"
        },
        "prompt": {
          "en": "the scroller knob or thumb (NSScroller.knobProportion): the draggable rounded piece whose length represents the visible fraction of content",
          "ko": "knob（thumb，NSScroller.knobProportion）：，"
        }
      },
      {
        "id": "knob-slot",
        "name": {
          "en": "Knob slot (track)",
          "ko": "knob slot（）"
        },
        "api": "NSScroller.drawKnobSlot(in:highlight:)",
        "description": {
          "en": "The channel behind the knob is the knob slot, commonly called the scrollbar track.",
          "ko": "knob knob slot，。"
        },
        "prompt": {
          "en": "the scroller knob slot or track (NSScroller.drawKnobSlot(in:highlight:)): the channel behind the draggable knob",
          "ko": "scroller （，NSScroller.drawKnobSlot(in:highlight:)）： knob"
        }
      },
      {
        "id": "scroller-style",
        "name": {
          "en": "Overlay vs. legacy scroller",
          "ko": "Overlay legacy scroller"
        },
        "api": "NSScroller.Style",
        "description": {
          "en": "An overlay scroller fades over the content; a legacy scroller stays visible and takes up layout space.",
          "ko": "overlay scroller 、；legacy scroller 。"
        },
        "prompt": {
          "en": "the scroller style (NSScroller.Style): overlay floats above content and fades when idle, while legacy remains visible in reserved space",
          "ko": "scroller （NSScroller.Style）：overlay 、；legacy"
        }
      }
    ],
    "prompt": {
      "en": "Use a native Scroll View (NSScrollView; SwiftUI: ScrollView). In AppKit, call the edge control an NSScroller, with its draggable knob inside the knob slot; respect NSScroller.Style overlay versus legacy and preserve native scroll elasticity at the content boundaries.",
      "ko": "（NSScrollView；SwiftUI：ScrollView）。 AppKit ， NSScroller： knob knob slot ； NSScroller.Style overlay legacy ，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS scroll view (NSScrollView, NSClipView). Rule out: content origin confusion because the document view is not flipped; overlay vs legacy scroller styles changing available width between users; the rubber-band overscroll disabled or doubled by elasticity settings; wheel events swallowed by a nested scroll view; scrollToVisible fighting responsive-scrolling prefetch. The symptom:",
      "ko": "macOS （NSScrollView、NSClipView）。：document view flipped ；overlay legacy scroller ； elasticity ；；scrollToVisible 。："
    },
    "relatedSlugs": [
      "sidebar",
      "outline-view",
      "column-view"
    ]
  },
  {
    "slug": "search-field",
    "platform": "macos",
    "name": {
      "en": "Search Field",
      "ko": "검색 필드 (Search Field)"
    },
    "tagline": {
      "en": "A Mac text field with built-in search, clearing, and recent-query controls",
      "ko": "Mac ，、"
    },
    "description": {
      "en": "A search field is a text input specialized for filtering or finding content. On macOS it normally includes a magnifying-glass search button, a cancel button that appears for a nonempty query, and optionally a menu of recent searches. SwiftUI's searchable modifier places the platform search field in an appropriate location such as the toolbar.",
      "ko": "。 macOS ，、，。SwiftUI searchable ，。"
    },
    "aka": {
      "en": [
        "search box",
        "search bar",
        "NSSearchField",
        "searchable field"
      ],
      "ko": [
        "search box",
        "search bar",
        "NSSearchField",
        "searchable field"
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
      "ko": [
        "the rounded box with a magnifying glass",
        "the search input in the mac toolbar",
        "the little x that clears the search",
        "the magnifier button inside the text field",
        "the dropdown of recent searches"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSearchField",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.searchable(text:placement:prompt:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSearchFieldCell",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "search-button",
        "name": {
          "en": "Search button",
          "ko": "Search button"
        },
        "api": "NSSearchFieldCell.searchButtonCell",
        "description": {
          "en": "The magnifying glass inside the leading edge is the search button, not just a decorative placeholder icon.",
          "ko": "The magnifying glass inside the leading edge is the search button, not just a decorative placeholder icon."
        },
        "prompt": {
          "en": "the search button (NSSearchFieldCell.searchButtonCell): the leading magnifying-glass control inside the NSSearchField",
          "ko": "（NSSearchFieldCell.searchButtonCell）：NSSearchField"
        }
      },
      {
        "id": "cancel-button",
        "name": {
          "en": "Cancel button",
          "ko": "Cancel button"
        },
        "api": "NSSearchFieldCell.cancelButtonCell",
        "description": {
          "en": "“The little x that clears the search” is the field's cancel button.",
          "ko": "“The little x that clears the search” is the field's cancel button."
        },
        "prompt": {
          "en": "the cancel button (NSSearchFieldCell.cancelButtonCell): the trailing x control that appears for a nonempty query and clears it",
          "ko": "（NSSearchFieldCell.cancelButtonCell）： x ，，"
        }
      },
      {
        "id": "recents-menu",
        "name": {
          "en": "Recent-searches menu",
          "ko": "Recent-searches menu"
        },
        "api": "NSSearchFieldCell.searchMenuTemplate",
        "description": {
          "en": "The menu attached to the search icon can list recent queries and a Clear Recents command.",
          "ko": "The menu attached to the search icon can list recent queries and a Clear Recents command."
        },
        "prompt": {
          "en": "the recent-searches menu (NSSearchFieldCell.searchMenuTemplate): a menu from the search button listing saved queries and Clear Recents",
          "ko": "（NSSearchFieldCell.searchMenuTemplate）：，「」"
        }
      }
    ],
    "prompt": {
      "en": "Use a native Search Field with NSSearchField (SwiftUI: View.searchable), preserving its leading search button, trailing cancel button when text is present, and optional recent-search menu from NSSearchFieldCell.searchMenuTemplate.",
      "ko": "NSSearchField（SwiftUI：View.searchable），、， NSSearchFieldCell.searchMenuTemplate 。"
    },
    "debugPrompt": {
      "en": "Debug my macOS search field (NSSearchField). Rule out: search firing only on Return because sendsSearchStringImmediately is false; the clear button clearing text but your code never notified — watch for the empty-string action; the recents menu dead without recentsAutosaveName; the cancel button hidden at small control sizes. The symptom:",
      "ko": "macOS （NSSearchField）。：sendsSearchStringImmediately false， Return ；—— action； recentsAutosaveName ；。："
    },
    "relatedSlugs": [
      "toolbar",
      "combo-button",
      "popup-pulldown-combo"
    ]
  },
  {
    "slug": "save-panel",
    "platform": "macos",
    "name": {
      "en": "Save Panel",
      "ko": "저장 패널 (Save Panel)"
    },
    "tagline": {
      "en": "The standard Mac dialog for naming a file and choosing where to save it",
      "ko": "The standard Mac dialog for naming a file and choosing where to save it"
    },
    "description": {
      "en": "A save panel is the system dialog for choosing a filename, location, and sometimes file format. Its compact form can expand into a Finder-like browser with a sidebar and directory contents. NSSavePanel supplies the native behavior, validation, sandbox integration, and sheet presentation.",
      "ko": "、、。 Finder ，。NSSavePanel 、、 sheet 。"
    },
    "aka": {
      "en": [
        "save dialog",
        "save-as panel",
        "file save picker",
        "NSSavePanel"
      ],
      "ko": [
        "save dialog",
        "save-as panel",
        "file save picker",
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
      "ko": [
        "the mac save as window",
        "the dialog where you name a file before saving",
        "the little arrow that expands the save dialog",
        "the file format dropdown in save as",
        "the finder sidebar inside the save window"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSavePanel",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSavePanel.beginSheetModal(for:completionHandler:)",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "name-field",
        "name": {
          "en": "Name field",
          "ko": "Name field"
        },
        "api": "NSSavePanel.nameFieldStringValue",
        "description": {
          "en": "The editable Save As text box is the panel's name field.",
          "ko": "The editable Save As text box is the panel's name field."
        },
        "prompt": {
          "en": "the save panel's name field (NSSavePanel.nameFieldStringValue): the editable filename box above the browser",
          "ko": "（NSSavePanel.nameFieldStringValue）："
        }
      },
      {
        "id": "disclosure-button",
        "name": {
          "en": "Disclosure expansion button",
          "ko": "Disclosure expansion button"
        },
        "api": "NSSavePanel.isExpanded",
        "description": {
          "en": "“The little arrow that makes the save window bigger” is the disclosure button for the panel's expanded browser.",
          "ko": "“The little arrow that makes the save window bigger” is the disclosure button for the panel's expanded browser."
        },
        "prompt": {
          "en": "the save panel's disclosure expansion button (NSSavePanel.isExpanded): the small control that reveals or hides the full file browser",
          "ko": "（NSSavePanel.isExpanded）："
        }
      },
      {
        "id": "format-popup",
        "name": {
          "en": "Format pop-up",
          "ko": "Format pop-up"
        },
        "api": "NSSavePanel.allowedContentTypes",
        "description": {
          "en": "The file-type selector beneath the name is the format pop-up, constrained by the panel's allowed content types.",
          "ko": "The file-type selector beneath the name is the format pop-up, constrained by the panel's allowed content types."
        },
        "prompt": {
          "en": "the save panel's format pop-up (NSSavePanel.allowedContentTypes): the native file-type selector beneath the filename field",
          "ko": "（NSSavePanel.allowedContentTypes）："
        }
      }
    ],
    "prompt": {
      "en": "Present the standard Save Panel with NSSavePanel (SwiftUI workflow: View.fileExporter), including its editable name field, disclosure button for the expanded file browser, allowed-content-type format pop-up, and Finder-style sidebar. Do not rebuild the system save dialog from custom controls.",
      "ko": "NSSavePanel （SwiftUI ：View.fileExporter），、、， Finder 。。"
    },
    "debugPrompt": {
      "en": "Debug my macOS save panel (NSSavePanel, NSOpenPanel). Rule out: sandboxed URLs failing later because startAccessingSecurityScopedResource was never called or a bookmark was never saved; allowedContentTypes filtering out everything so Save stays disabled; runModal blocking the app when beginSheetModal was intended; the panel opening in the wrong folder because directoryURL is set after presentation. The symptom:",
      "ko": "macOS （NSSavePanel、NSOpenPanel）。： URL ， startAccessingSecurityScopedResource， bookmark；allowedContentTypes ，「」； beginSheetModal runModal ； directoryURL，。："
    },
    "relatedSlugs": [
      "sheet",
      "sidebar",
      "disclosure-triangle",
      "popup-pulldown-combo"
    ]
  },
  {
    "slug": "token-field",
    "platform": "macos",
    "name": {
      "en": "Token Field",
      "ko": "토큰 필드 (Token Field)"
    },
    "tagline": {
      "en": "A text input that turns recognized values into removable rounded tokens",
      "ko": "A text input that turns recognized values into removable rounded tokens"
    },
    "description": {
      "en": "A token field converts recognized pieces of typed text into discrete rounded tokens, like recipients in a mail compose window. Each token represents one value and can be selected, edited, or removed without treating the whole field as plain text. AppKit provides token styling, completions, represented objects, and tokenizing separators through NSTokenField.",
      "ko": "，。，、，。AppKit NSTokenField 、、represented object 。"
    },
    "aka": {
      "en": [
        "token input",
        "recipient field",
        "tag input",
        "pill input"
      ],
      "ko": [
        "token input",
        "recipient field",
        "tag input",
        "pill input"
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
      "ko": [
        "the text field with removable pills inside it",
        "the email address bubbles in the To field",
        "input that turns words into little tags",
        "rounded chips you can delete from a field",
        "the field where each recipient becomes its own bubble"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSTokenField",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSTokenField.TokenStyle",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSTokenFieldDelegate",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "token-capsule",
        "name": {
          "en": "Token capsule",
          "ko": "Token capsule"
        },
        "api": "NSTokenField.TokenStyle",
        "description": {
          "en": "“The little rounded bubble around each recipient” is a token capsule.",
          "ko": "“The little rounded bubble around each recipient” is a token capsule."
        },
        "prompt": {
          "en": "an NSTokenField.TokenStyle token capsule wrapping one recognized value inside the field",
          "ko": "NSTokenField.TokenStyle ，"
        }
      },
      {
        "id": "selected-token",
        "name": {
          "en": "Selected token",
          "ko": "Selected token"
        },
        "api": "NSTokenField",
        "description": {
          "en": "“The whole pill that highlights before I delete it” is the selected token.",
          "ko": "“The whole pill that highlights before I delete it” is the selected token."
        },
        "prompt": {
          "en": "the selected NSTokenField token with its native highlight, ready for keyboard deletion or editing",
          "ko": "NSTokenField ，，"
        }
      }
    ],
    "prompt": {
      "en": "Use a native Token Field (NSTokenField) with NSTokenField.TokenStyle so each recognized recipient or tag becomes a separately selectable, removable rounded token inside the editable field. Preserve token completion and keyboard deletion behavior.",
      "ko": "（NSTokenField） NSTokenField.TokenStyle，、。。"
    },
    "debugPrompt": {
      "en": "Debug my macOS token field (NSTokenField). Rule out: text not becoming tokens until Return because the tokenizing character set lacks your separator; represented objects vs display strings confused in the delegate so tokens show raw identifiers; completions never appearing because the completion delegate method is not implemented; copy producing plain text because writing represented objects to the pasteboard is unimplemented. The symptom:",
      "ko": "macOS （NSTokenField）。：tokenizing character set ， Return ；delegate represented object ，； delegate ，； represented object，。："
    },
    "relatedSlugs": [
      "search-field",
      "popup-pulldown-combo",
      "badge-chip-pill"
    ]
  },
  {
    "slug": "combo-button",
    "platform": "macos",
    "name": {
      "en": "Combo Button",
      "ko": "콤보 버튼 (Combo Button)"
    },
    "tagline": {
      "en": "A primary action joined to a separate arrow that opens related actions",
      "ko": "A primary action joined to a separate arrow that opens related actions"
    },
    "description": {
      "en": "A combo button combines two adjacent targets: a main button that immediately performs the default action and a small arrow button that opens related alternatives. A pop-up button instead shows the current selected value, while a pull-down button opens a menu from the whole control and has no separate primary-action region. NSComboButton is available on macOS 13 and later.",
      "ko": "：，。（pop-up button）；（pull-down button），。NSComboButton macOS 13 。"
    },
    "aka": {
      "en": [
        "split button",
        "menu-arrow button",
        "action-and-menu button",
        "NSComboButton"
      ],
      "ko": [
        "split button",
        "menu-arrow button",
        "action-and-menu button",
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
      "ko": [
        "the button with a separate little arrow attached",
        "one button that clicks and also has a dropdown",
        "the split action button with a menu on the right",
        "primary button joined to a tiny chevron button",
        "button where the label acts and the arrow opens choices"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSComboButton",
        "note": {
          "en": "macOS 13+",
          "ko": "macOS 13+"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSComboButton.Style.split",
        "note": {
          "en": "separate action and menu regions",
          "ko": "separate action and menu regions"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "Button + Menu",
        "note": {
          "en": "no single native SwiftUI equivalent",
          "ko": "SwiftUI"
        }
      }
    ],
    "parts": [
      {
        "id": "primary-action-region",
        "name": {
          "en": "Primary action region",
          "ko": "Primary action region"
        },
        "api": "NSComboButton.action",
        "description": {
          "en": "“The main half that does the thing immediately” is the primary action region.",
          "ko": "“The main half that does the thing immediately” is the primary action region."
        },
        "prompt": {
          "en": "the NSComboButton primary action region, with the main label performing the default action immediately",
          "ko": "NSComboButton ，"
        }
      },
      {
        "id": "menu-disclosure-region",
        "name": {
          "en": "Menu disclosure region",
          "ko": "Menu disclosure region"
        },
        "api": "NSComboButton.menu",
        "description": {
          "en": "“The separate little arrow attached to the button” is the menu disclosure region.",
          "ko": "“The separate little arrow attached to the button” is the menu disclosure region."
        },
        "prompt": {
          "en": "the separate NSComboButton menu disclosure region, a narrow attached chevron target that opens the related NSMenu",
          "ko": "NSComboButton ：、 chevron ， NSMenu"
        }
      },
      {
        "id": "split-divider",
        "name": {
          "en": "Split divider",
          "ko": "Split divider"
        },
        "api": "NSComboButton.Style.split",
        "description": {
          "en": "“The tiny line between the label and arrow” is the split divider.",
          "ko": "“The tiny line between the label and arrow” is the split divider."
        },
        "prompt": {
          "en": "the divider in NSComboButton.Style.split that visibly separates the primary action target from the arrow target",
          "ko": "NSComboButton.Style.split ，"
        }
      }
    ],
    "prompt": {
      "en": "Use a Combo Button with NSComboButton (macOS 13+) in split style: clicking the main region performs the primary action, while the attached arrow region opens its NSMenu. Do not use a pop-up button, which displays a current selection, or a pull-down button, whose whole button opens an action menu.",
      "ko": "NSComboButton（macOS 13+） split ：， NSMenu。（pop-up button）——；（pull-down button）——。"
    },
    "debugPrompt": {
      "en": "Debug my macOS combo button (NSComboButton, macOS 13+). Rule out: unified vs split style confusion — in unified the whole button shows the menu, in split only the arrow section does; the menu property empty so the arrow does nothing; running on macOS 12 or earlier where NSComboButton does not exist and a popup-button fallback is needed. The symptom:",
      "ko": "macOS （NSComboButton，macOS 13+）。：unified split ——unified ，split ；menu ，； macOS 12 ，NSComboButton ，。："
    },
    "relatedSlugs": [
      "popup-pulldown-combo",
      "toolbar",
      "context-menu"
    ]
  },
  {
    "slug": "level-indicator",
    "platform": "macos",
    "name": {
      "en": "Level Indicator",
      "ko": "레벨 인디케이터 (Level Indicator)"
    },
    "tagline": {
      "en": "A Mac gauge rendered as a capacity bar, rating stars, or relevance meter",
      "ko": "Mac ：、"
    },
    "description": {
      "en": "A level indicator shows a value inside a known range rather than the progress of an ongoing task. Its native styles cover continuous or segmented capacity bars, symbol-based ratings such as stars, and compact relevance meters. Warning and critical thresholds can change the capacity indicator's color as the value crosses them.",
      "ko": "，。、，。，。"
    },
    "aka": {
      "en": [
        "level meter",
        "capacity indicator",
        "rating indicator",
        "relevancy indicator"
      ],
      "ko": [
        "level meter",
        "capacity indicator",
        "rating indicator",
        "relevancy indicator"
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
      "ko": [
        "the row of stars for a rating",
        "the segmented bar showing disk capacity",
        "the little meter showing how strong a match is",
        "the bar that changes color at warning and critical levels",
        "mac gauge with tick marks and colored ranges"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSLevelIndicator",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSLevelIndicator.Style",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "Gauge",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "filled-level",
        "name": {
          "en": "Filled level",
          "ko": "Filled level"
        },
        "api": "NSLevelIndicator.doubleValue",
        "description": {
          "en": "“The colored amount inside the little meter” is the filled level.",
          "ko": "“The colored amount inside the little meter” is the filled level."
        },
        "prompt": {
          "en": "the filled level of an NSLevelIndicator, sized from its doubleValue within the configured range",
          "ko": "NSLevelIndicator ， doubleValue"
        }
      },
      {
        "id": "warning-threshold",
        "name": {
          "en": "Warning threshold",
          "ko": "Warning threshold"
        },
        "api": "NSLevelIndicator.warningValue",
        "description": {
          "en": "“The point where the meter changes to a warning color” is the warning threshold.",
          "ko": "“The point where the meter changes to a warning color” is the warning threshold."
        },
        "prompt": {
          "en": "the NSLevelIndicator.warningValue threshold where the capacity fill changes to its native warning color",
          "ko": "NSLevelIndicator.warningValue ："
        }
      },
      {
        "id": "critical-threshold",
        "name": {
          "en": "Critical threshold",
          "ko": "Critical threshold"
        },
        "api": "NSLevelIndicator.criticalValue",
        "description": {
          "en": "“The point where the bar turns critical” is the critical threshold.",
          "ko": "“The point where the bar turns critical” is the critical threshold."
        },
        "prompt": {
          "en": "the NSLevelIndicator.criticalValue threshold where the capacity fill takes its native critical color",
          "ko": "NSLevelIndicator.criticalValue ："
        }
      },
      {
        "id": "rating-symbol",
        "name": {
          "en": "Rating symbol",
          "ko": "Rating symbol"
        },
        "api": "NSLevelIndicator.Style.rating",
        "description": {
          "en": "“Each star in the rating row” is a rating symbol in the level indicator.",
          "ko": "“Each star in the rating row” is a rating symbol in the level indicator."
        },
        "prompt": {
          "en": "the repeated rating symbols in NSLevelIndicator.Style.rating, filled through the current rating value",
          "ko": "NSLevelIndicator.Style.rating ，"
        }
      }
    ],
    "prompt": {
      "en": "Use an NSLevelIndicator with the style that matches the meaning: .continuousCapacity or .discreteCapacity for a bounded level, .rating for stars, or .relevancy for match strength. Configure warningValue and criticalValue for native threshold coloring; SwiftUI's nearest general equivalent is Gauge.",
      "ko": "NSLevelIndicator，： .continuousCapacity .discreteCapacity， .rating， .relevancy。 warningValue criticalValue ；SwiftUI Gauge。"
    },
    "debugPrompt": {
      "en": "Debug my macOS level indicator (NSLevelIndicator). Rule out: the wrong style — continuous capacity vs discrete ticks vs rating stars are one class with different levelIndicatorStyle values; warning and critical thresholds recoloring the fill unexpectedly; isEditable letting clicks change the value when it should be display-only; value changes not animating because the cell redraws instantly. The symptom:",
      "ko": "macOS （NSLevelIndicator）。：——、、， levelIndicatorStyle ；；isEditable ，；， cell 。："
    },
    "relatedSlugs": [
      "segmented-control",
      "focus-ring",
      "badge-chip-pill"
    ]
  },
  {
    "slug": "column-view",
    "platform": "macos",
    "name": {
      "en": "Column View (Browser)",
      "ko": "컬럼 뷰 (Column View)"
    },
    "tagline": {
      "en": "Finder-style columns that reveal each successive level of a hierarchy",
      "ko": "Finder ，"
    },
    "description": {
      "en": "A column view is a hierarchical browser where every selected branch opens its children in the next column to the right. Finder's Column view is the familiar example: several ancestry levels remain visible at once, so the path is spatial rather than only textual. AppKit's native control is NSBrowser; NavigationSplitView is only an approximate SwiftUI composition.",
      "ko": "：，。Finder ：，，。AppKit NSBrowser；NavigationSplitView SwiftUI 。"
    },
    "aka": {
      "en": [
        "browser view",
        "Finder column view",
        "Miller columns",
        "hierarchical browser"
      ],
      "ko": [
        "browser view",
        "Finder column view",
        "Miller columns",
        "hierarchical browser"
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
      "ko": [
        "the finder columns thing",
        "folders opening in columns to the right",
        "the file browser where every level gets a new column",
        "side by side columns showing a folder path",
        "the hierarchy browser with arrows at the end of rows"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSBrowser",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSBrowserCell",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "NavigationSplitView",
        "note": {
          "en": "approximate; no direct equivalent",
          "ko": "approximate; no direct equivalent"
        }
      }
    ],
    "parts": [
      {
        "id": "path-column",
        "name": {
          "en": "Path column",
          "ko": "Path column"
        },
        "api": "NSBrowser",
        "description": {
          "en": "“Each folder opening in a new column” is a path column in an NSBrowser.",
          "ko": "「」， NSBrowser 。"
        },
        "prompt": {
          "en": "an NSBrowser path column that keeps one visible level of the selected hierarchy",
          "ko": "NSBrowser ，"
        }
      },
      {
        "id": "branch-indicator",
        "name": {
          "en": "Branch indicator",
          "ko": "Branch indicator"
        },
        "api": "NSBrowserCell.isLeaf",
        "description": {
          "en": "“The little arrow at the end of a folder row” is the branch indicator for a non-leaf cell.",
          "ko": "“The little arrow at the end of a folder row” is the branch indicator for a non-leaf cell."
        },
        "prompt": {
          "en": "the branch indicator on a non-leaf NSBrowserCell, showing that selecting the row will reveal another column",
          "ko": "NSBrowserCell ，"
        }
      },
      {
        "id": "selected-path",
        "name": {
          "en": "Selected path",
          "ko": "Selected path"
        },
        "api": "NSBrowser.path",
        "description": {
          "en": "“The highlighted row in every column” is the selected path through the browser.",
          "ko": "“The highlighted row in every column” is the selected path through the browser."
        },
        "prompt": {
          "en": "the NSBrowser selected path, with one highlighted ancestor row preserved in each visible column",
          "ko": "NSBrowser ，"
        }
      }
    ],
    "prompt": {
      "en": "Build a Finder-style Column View with NSBrowser and NSBrowserCell: selecting a non-leaf row reveals its children in a new column immediately to the right, preserving the visible hierarchy path. Do not substitute a flat list or a single sidebar-detail split.",
      "ko": "NSBrowser NSBrowserCell Finder ：，，。「＋」。"
    },
    "debugPrompt": {
      "en": "Debug my macOS column view (NSBrowser, Miller columns). Rule out: stale columns because reloadColumn/reloadData never ran after the model changed; confusing path-based selection with item-based delegate methods; lazy child loading never triggered because isLeafItem answers wrong; the horizontal scroll position jumping when columns are added. The symptom:",
      "ko": "macOS （NSBrowser、Miller columns）。： reloadColumn/reloadData，； path item delegate ；isLeafItem ，；。："
    },
    "relatedSlugs": [
      "outline-view",
      "sidebar",
      "scroll-view",
      "disclosure-triangle"
    ]
  },
  {
    "slug": "outline-view",
    "platform": "macos",
    "name": {
      "en": "Outline View",
      "ko": "아웃라인 뷰 (Outline View)"
    },
    "tagline": {
      "en": "An indented tree of rows that expand to reveal nested children",
      "ko": "An indented tree of rows that expand to reveal nested children"
    },
    "description": {
      "en": "An outline view is a tree-shaped list: rows can contain children, indentation shows depth, and disclosure triangles expand or collapse branches. A plain list has no hierarchy. A source list is a sidebar appearance and navigation convention that can be implemented with an outline view, but the terms are not interchangeable.",
      "ko": "：，，。。（source list），，。"
    },
    "aka": {
      "en": [
        "tree view",
        "hierarchical list",
        "outline list",
        "expandable table"
      ],
      "ko": [
        "tree view",
        "hierarchical list",
        "outline list",
        "expandable table"
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
      "ko": [
        "the indented list with little expand arrows",
        "tree of folders where rows have children",
        "a list with nested rows you can open and close",
        "the sidebar-looking list with hierarchy levels",
        "expandable rows indented under their parent"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSOutlineView",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "OutlineGroup",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "List",
        "note": {
          "en": "when supplied hierarchical children",
          "ko": "children"
        }
      }
    ],
    "parts": [
      {
        "id": "disclosure-triangle",
        "name": {
          "en": "Disclosure triangle",
          "ko": "Disclosure triangle"
        },
        "api": "NSOutlineView",
        "description": {
          "en": "“The little expand arrow beside a row” is its disclosure triangle.",
          "ko": "“The little expand arrow beside a row” is its disclosure triangle."
        },
        "prompt": {
          "en": "the native disclosure triangle supplied by NSOutlineView for a row with children",
          "ko": "NSOutlineView"
        }
      },
      {
        "id": "indentation-level",
        "name": {
          "en": "Indentation level",
          "ko": "Indentation level"
        },
        "api": "NSOutlineView.level(forItem:)",
        "description": {
          "en": "“How far a child row steps in from its parent” is its indentation level.",
          "ko": "“How far a child row steps in from its parent” is its indentation level."
        },
        "prompt": {
          "en": "the NSOutlineView.level(forItem:) indentation that makes each child depth visible",
          "ko": "NSOutlineView.level(forItem:) ，"
        }
      },
      {
        "id": "selection-highlight",
        "name": {
          "en": "Row selection highlight",
          "ko": "Row selection highlight"
        },
        "api": "NSTableRowView.isSelected",
        "description": {
          "en": "“The colored strip behind the current row” is the row selection highlight.",
          "ko": "“The colored strip behind the current row” is the row selection highlight."
        },
        "prompt": {
          "en": "the NSTableRowView.isSelected highlight spanning the selected outline row",
          "ko": "NSTableRowView.isSelected ，"
        }
      }
    ],
    "prompt": {
      "en": "Use an Outline View with NSOutlineView (SwiftUI: OutlineGroup) for the indented hierarchy: parent rows receive disclosure triangles and expanding one reveals child rows directly beneath it. Use a flat list only when rows have no children; apply source-list styling separately if the outline serves as a sidebar.",
      "ko": "NSOutlineView（SwiftUI：OutlineGroup）：，。；，（source list）。"
    },
    "debugPrompt": {
      "en": "Debug my macOS outline view (NSOutlineView). Rule out: rows refusing to expand because isItemExpandable and the child-count delegate answers disagree; reloadItem without reloadChildren:true leaving stale children; autosaveExpandedItems silently broken because items lack stable identity for persistentObject round-trips; row animations jumping because the model mutated before the animated update ran. The symptom:",
      "ko": "macOS （NSOutlineView）。：isItemExpandable delegate ，；reloadItem reloadChildren:true，；autosaveExpandedItems ， item ，persistentObject ；，。："
    },
    "relatedSlugs": [
      "disclosure-triangle",
      "sidebar",
      "column-view",
      "scroll-view"
    ]
  },
  {
    "slug": "three-dots",
    "platform": "web",
    "name": {
      "en": "The Three Dots (Overflow Menu)",
      "ko": "더보기 버튼 (Three Dots)"
    },
    "tagline": {
      "en": "Horizontal dots, vertical dots, three lines, and an ellipsis mean different things",
      "ko": "Horizontal dots, vertical dots, three lines, and an ellipsis mean different things"
    },
    "description": {
      "en": "Three horizontal dots are commonly called meatballs and three vertical dots a kebab; both usually open an overflow or More menu of secondary actions. Three horizontal lines are a hamburger button and normally open navigation, often in a drawer. An ellipsis inside a label such as “Open…” is punctuation, not an overflow icon: it signals that the command needs more input before it can finish.",
      "ko": "「」（meatballs），「」（kebab）；「」。，，。「…」，：。"
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
      "ko": [
        "kebab menu",
        "meatball menu",
        "hamburger menu",
        "overflow menu",
        "more menu",
        "ellipsis button"
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
      "ko": [
        "the three dots menu",
        "the horizontal meatballs button",
        "the vertical kebab dots",
        "the three lines menu icon",
        "the three dots after Open",
        "why does this button end in dots",
        "the more options icon"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<button>",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-haspopup=\"menu\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-expanded=\"true|false\"",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "text-overflow: ellipsis",
        "note": {
          "en": "unrelated truncation ellipsis",
          "ko": "unrelated truncation ellipsis"
        }
      }
    ],
    "parts": [
      {
        "id": "meatballs",
        "name": {
          "en": "Horizontal dots (meatballs / More)",
          "ko": "Horizontal dots (meatballs / More)"
        },
        "api": "button[aria-haspopup=\"menu\"]",
        "description": {
          "en": "Three horizontal dots are nicknamed meatballs and usually open an overflow or More menu for the current item or area.",
          "ko": "Three horizontal dots are nicknamed meatballs and usually open an overflow or More menu for the current item or area."
        },
        "prompt": {
          "en": "a horizontal-dots meatball button (button[aria-haspopup=\"menu\"]): three dots in one row opening the contextual Overflow or More menu",
          "ko": "「」（button[aria-haspopup=\"menu\"]）：，"
        }
      },
      {
        "id": "kebab",
        "name": {
          "en": "Vertical dots (kebab menu)",
          "ko": "Vertical dots (kebab menu)"
        },
        "api": "button[aria-haspopup=\"menu\"]",
        "description": {
          "en": "Three vertical dots are nicknamed a kebab and usually expose the same kind of secondary-actions menu.",
          "ko": "Three vertical dots are nicknamed a kebab and usually expose the same kind of secondary-actions menu."
        },
        "prompt": {
          "en": "a vertical-dots kebab menu button (button[aria-haspopup=\"menu\"]): three stacked dots opening an overflow menu of secondary actions",
          "ko": "「」（button[aria-haspopup=\"menu\"]）：，"
        }
      },
      {
        "id": "hamburger",
        "name": {
          "en": "Three lines (hamburger menu)",
          "ko": "Three lines (hamburger menu)"
        },
        "api": "button[aria-controls]",
        "description": {
          "en": "Three horizontal lines are a hamburger button; unlike overflow dots, it normally opens the site's main navigation in a drawer.",
          "ko": "Three horizontal lines are a hamburger button; unlike overflow dots, it normally opens the site's main navigation in a drawer."
        },
        "prompt": {
          "en": "a three-line hamburger menu button (button[aria-controls]): the navigation trigger that opens a side drawer, not an overflow actions menu",
          "ko": "（button[aria-controls]）：，"
        }
      },
      {
        "id": "command-ellipsis",
        "name": {
          "en": "Command ellipsis",
          "ko": "Command ellipsis"
        },
        "api": "<button>Open…</button>",
        "description": {
          "en": "The ellipsis in “Open…” means the command will ask for more input before it completes; the dots are part of the label.",
          "ko": "The ellipsis in “Open…” means the command will ask for more input before it completes; the dots are part of the label."
        },
        "prompt": {
          "en": "a command ellipsis in the label (<button>Open…</button>): the single ellipsis character means more input is required before the command completes, not that the button opens an overflow menu",
          "ko": "（<button>Open…</button>）：，"
        }
      }
    ],
    "prompt": {
      "en": "Use the correct three-mark control: a horizontal ellipsis (meatballs) or vertical ellipsis (kebab) button with aria-haspopup=\"menu\" for a contextual Overflow/More menu; a three-line hamburger button with aria-controls for a navigation drawer; or an ellipsis inside a command label such as “Open…” only when the command asks for more input before completing.",
      "ko": "：（meatballs）（kebab） aria-haspopup=\"menu\"，／； aria-controls，；（ “Open…”）。"
    },
    "debugPrompt": {
      "en": "Debug my three-dots menu (kebab/meatballs, menu button). Rule out: the icon-only button missing an aria-label; the menu staying open after an item is chosen; outside-click and Escape not closing it; a hit target well under 24px so taps miss on mobile. The symptom:",
      "ko": "（kebab/meatballs、）。： aria-label；； Escape ； 24px，。："
    },
    "relatedSlugs": [
      "truncation",
      "popover-dropdown-tooltip",
      "dialog-drawer-sheet",
      "context-menu",
      "scrim",
      "hamburger-menu"
    ]
  },
  {
    "slug": "menu-bar",
    "platform": "macos",
    "name": {
      "en": "Menu Bar",
      "ko": "메뉴 바 (Menu Bar)"
    },
    "tagline": {
      "en": "The strip along the top of the Mac screen — every part, labeled",
      "ko": "Mac ——"
    },
    "description": {
      "en": "The menu bar is the translucent strip across the top of the Mac screen. On the left are the system-owned Apple menu followed by the frontmost app’s main menu; the right side holds menu bar extras, followed by system status items and the clock. Every piece below has its own real name; hover a number to see exactly which part it names.",
      "ko": "Mac 。，；，。；，。"
    },
    "aka": {
      "en": [
        "menubar",
        "system menu bar",
        "top bar"
      ],
      "ko": [
        "menubar",
        "system menu bar",
        "top bar"
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
      "ko": [
        "the bar at the top of the mac screen",
        "the strip with the apple logo and the clock",
        "top bar on mac with app menus",
        "where the wifi and battery icons live",
        "the thing that shows File Edit View at the top"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSApp.mainMenu",
        "note": {
          "en": "the app's menus on the left",
          "ko": "the app's menus on the left"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSStatusBar.system",
        "note": {
          "en": "the icon area on the right",
          "ko": "the icon area on the right"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "MenuBarExtra",
        "note": {
          "en": "one right-side icon, macOS 13+",
          "ko": "，macOS 13+"
        }
      }
    ],
    "parts": [
      {
        "id": "app-menus",
        "name": {
          "en": "App menus (main menu)",
          "ko": "App menus (main menu)"
        },
        "api": "NSApp.mainMenu",
        "description": {
          "en": "“The File Edit View menus at the top” have a real name: the app's main menu.",
          "ko": "「「、、」」：。"
        },
        "prompt": {
          "en": "the app's main menu in the macOS menu bar (NSApp.mainMenu): the bold app-name menu followed by File, Edit, View",
          "ko": "macOS （NSApp.mainMenu）：， File、Edit、View"
        }
      },
      {
        "id": "menu-bar-extra",
        "name": {
          "en": "Menu bar extra (status item)",
          "ko": "（status item）"
        },
        "api": "NSStatusItem",
        "description": {
          "en": "“The little icon near the clock” is a status item in NSStatusBar.system; SwiftUI calls it MenuBarExtra.",
          "ko": "「」 NSStatusBar.system status item；SwiftUI MenuBarExtra。"
        },
        "prompt": {
          "en": "a menu bar extra — an NSStatusItem on the right side of the macOS menu bar (SwiftUI: MenuBarExtra)",
          "ko": "——macOS NSStatusItem（SwiftUI：MenuBarExtra）"
        }
      },
      {
        "id": "template-icon",
        "name": {
          "en": "Template icon",
          "ko": "Template icon"
        },
        "api": "NSImage.isTemplate",
        "description": {
          "en": "The monochrome glyph that recolors itself for light/dark menu bars — a template image, usually an SF Symbol.",
          "ko": "／—— template image， SF Symbol。"
        },
        "prompt": {
          "en": "the status item's icon must be a template image (NSImage.isTemplate = true, ideally an SF Symbol) so macOS recolors it automatically for light and dark menu bars",
          "ko": "status item template image（NSImage.isTemplate = true， SF Symbol）， macOS"
        }
      },
      {
        "id": "highlighted-state",
        "name": {
          "en": "Highlighted state",
          "ko": "Highlighted state"
        },
        "api": "NSStatusBarButton.isHighlighted",
        "description": {
          "en": "The pale rounded pill behind the icon while its menu or popover is open — the hardest-to-describe pixel on this page.",
          "ko": "，——설명。"
        },
        "prompt": {
          "en": "the status item's highlighted state: the pale rounded background behind the menu bar icon while its menu is open (NSStatusBarButton.isHighlighted)",
          "ko": "status item ：（NSStatusBarButton.isHighlighted）"
        }
      },
      {
        "id": "menu",
        "name": {
          "en": "Menu",
          "ko": "Menu"
        },
        "api": "NSMenu",
        "description": {
          "en": "“The dropdown” from a menu bar icon is an NSMenu — translucent, rounded, vibrancy-backed.",
          "ko": "「」 NSMenu——、、 vibrancy 。"
        },
        "prompt": {
          "en": "the NSMenu dropdown attached to the status item",
          "ko": "status item NSMenu"
        }
      },
      {
        "id": "menu-item",
        "name": {
          "en": "Selection highlight (menu item)",
          "ko": "Selection highlight (menu item)"
        },
        "api": "NSMenuItem",
        "description": {
          "en": "“The blue bar when you hover an option”: the menu item's selection highlight, tinted with the system accent color.",
          "ko": "“The blue bar when you hover an option”: the menu item's selection highlight, tinted with the system accent color."
        },
        "prompt": {
          "en": "the menu item's selection highlight — the accent-colored rounded bar behind an NSMenuItem while it's hovered/selected",
          "ko": "——NSMenuItem ／"
        }
      },
      {
        "id": "separator",
        "name": {
          "en": "Separator item",
          "ko": "Separator item"
        },
        "api": "NSMenuItem.separator()",
        "description": {
          "en": "“The little line between options” is a separator item.",
          "ko": "“The little line between options” is a separator item."
        },
        "prompt": {
          "en": "a separator item (NSMenuItem.separator()) dividing the menu into groups",
          "ko": "（NSMenuItem.separator()），"
        }
      },
      {
        "id": "key-equivalent",
        "name": {
          "en": "Key equivalent",
          "ko": "（key equivalent）"
        },
        "api": "NSMenuItem.keyEquivalent",
        "description": {
          "en": "“The ⌘Q text on the right side of a menu option” is the item's key equivalent.",
          "ko": "「 ⌘Q 」 key equivalent。"
        },
        "prompt": {
          "en": "the keyboard shortcut shown at the right edge of the menu item (its key equivalent, NSMenuItem.keyEquivalent, e.g. ⌘Q)",
          "ko": "（ key equivalent，NSMenuItem.keyEquivalent， ⌘Q）"
        }
      }
    ],
    "prompt": {
      "en": "Work on the macOS menu bar: the app's main menu (NSApp.mainMenu) sits on the left after the Apple menu; menu bar extras (NSStatusItem in NSStatusBar.system) sit on the right before the clock. Use the exact part names: status item, its highlighted state, NSMenu, NSMenuItem, separator item.",
      "ko": "macOS ：（NSApp.mainMenu），；（NSStatusBar.system NSStatusItem）、。：status item、 highlighted state、NSMenu、NSMenuItem、separator item。"
    },
    "debugPrompt": {
      "en": "Debug my macOS menu bar (NSMenu main menu, NSMenuItem). Rule out: items permanently greyed because their action has no target and nothing in the responder chain implements it; automatic enabling turned off (autoenablesItems) without manual validation; keyboard shortcuts defined but never firing because the item is disabled at validation time; the app menu title coming from the bundle display name, not from code. The symptom:",
      "ko": "macOS （NSMenu 、NSMenuItem）。：， action target，；（autoenablesItems）；，； bundle 。："
    },
    "relatedSlugs": [
      "menu-bar-extra",
      "context-menu",
      "vibrancy"
    ]
  },
  {
    "slug": "context-menu",
    "platform": "macos",
    "name": {
      "en": "Context Menu",
      "ko": "컨텍스트 메뉴 (Context Menu)"
    },
    "tagline": {
      "en": "The menu opened at the pointer by right-clicking or Control-clicking an item",
      "ko": "Control-，"
    },
    "description": {
      "en": "A context menu exposes actions relevant to the object under the pointer and opens from a secondary click or Control-click. It appears near that click and is made from standard menu items, separators, keyboard equivalents, and submenus. A dropdown menu has a visible control that opens it with a primary click, while a context menu is invoked directly from the content.",
      "ko": "， Control-。，、、。、；。"
    },
    "aka": {
      "en": [
        "contextual menu",
        "right-click menu",
        "shortcut menu"
      ],
      "ko": [
        "contextual menu",
        "right-click menu",
        "shortcut menu"
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
      "ko": [
        "the menu that appears when you right click",
        "control click options for the thing under the pointer",
        "small action menu beside the selected item",
        "copy rename delete menu under the mouse",
        "menu that opens from a secondary click"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSMenu",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.contextMenu(menuItems:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSView.menu",
        "note": {
          "en": "the contextual menu associated with a view",
          "ko": "the contextual menu associated with a view"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSMenuItem",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "selection-highlight",
        "name": {
          "en": "Selection highlight",
          "ko": "Selection highlight"
        },
        "api": "NSMenuItem",
        "description": {
          "en": "“The blue bar behind the option under the pointer” is the menu item's selection highlight.",
          "ko": "“The blue bar behind the option under the pointer” is the menu item's selection highlight."
        },
        "prompt": {
          "en": "the native selection highlight behind the active NSMenuItem in a contextual NSMenu",
          "ko": "NSMenu NSMenuItem"
        }
      },
      {
        "id": "separator-item",
        "name": {
          "en": "Separator item",
          "ko": "Separator item"
        },
        "api": "NSMenuItem.separator()",
        "description": {
          "en": "“The little line between groups of right-click options” is a separator item.",
          "ko": "“The little line between groups of right-click options” is a separator item."
        },
        "prompt": {
          "en": "an NSMenuItem.separator() dividing related groups in the context menu",
          "ko": "NSMenuItem.separator()，"
        }
      },
      {
        "id": "key-equivalent",
        "name": {
          "en": "Key equivalent",
          "ko": "（key equivalent）"
        },
        "api": "NSMenuItem.keyEquivalent",
        "description": {
          "en": "“The keyboard shortcut text on the right” is the item's key equivalent.",
          "ko": "「」 key equivalent。"
        },
        "prompt": {
          "en": "the NSMenuItem.keyEquivalent aligned at the trailing edge of a context-menu item, such as ⌘C",
          "ko": "NSMenuItem.keyEquivalent，， ⌘C"
        }
      },
      {
        "id": "submenu-indicator",
        "name": {
          "en": "Submenu indicator",
          "ko": "Submenu indicator"
        },
        "api": "NSMenuItem.submenu",
        "description": {
          "en": "“The sideways arrow that opens more options” is the submenu indicator.",
          "ko": "“The sideways arrow that opens more options” is the submenu indicator."
        },
        "prompt": {
          "en": "the trailing submenu indicator on an NSMenuItem whose submenu opens beside the context menu",
          "ko": "NSMenuItem ，"
        }
      }
    ],
    "prompt": {
      "en": "Add a Context Menu using NSMenu on the target NSView (SwiftUI: View.contextMenu), opened by right-click or Control-click at the item under the pointer. Populate it with actions specific to that item; do not turn it into a primary-click dropdown anchored to a button.",
      "ko": "NSMenu NSView （SwiftUI：View.contextMenu）， Control-。；、。"
    },
    "debugPrompt": {
      "en": "Debug my macOS context menu (NSMenu, menu(for:), SwiftUI .contextMenu). Rule out: the menu built once and gone stale — implement menuNeedsUpdate/menuWillOpen; items greyed out because their target is nil and nothing in the responder chain implements the action; right-click, control-click and two-finger tap taking different code paths; a SwiftUI .contextMenu swallowing plain clicks on the row. The symptom:",
      "ko": "macOS （NSMenu、menu(for:)、SwiftUI .contextMenu）。：、—— menuNeedsUpdate/menuWillOpen；， target nil action；、Control-；SwiftUI .contextMenu 。："
    },
    "relatedSlugs": [
      "popover",
      "popup-pulldown-combo",
      "menu-bar-extra",
      "focus-ring"
    ]
  },
  {
    "slug": "disclosure-triangle",
    "platform": "macos",
    "name": {
      "en": "Disclosure Triangle",
      "ko": "디스클로저 트라이앵글 (Disclosure Triangle)"
    },
    "tagline": {
      "en": "The small rotating control that reveals or hides nested content",
      "ko": "The small rotating control that reveals or hides nested content"
    },
    "description": {
      "en": "A disclosure triangle is the compact indicator beside an outline row or section label that reveals nested content. It points sideways while collapsed and rotates downward when expanded. NSOutlineView supplies disclosure controls for hierarchical rows, while DisclosureGroup provides the same expand-and-collapse pattern in SwiftUI.",
      "ko": "，。，。NSOutlineView ，DisclosureGroup SwiftUI ／。"
    },
    "aka": {
      "en": [
        "disclosure control",
        "outline disclosure button",
        "expand-collapse triangle"
      ],
      "ko": [
        "disclosure control",
        "outline disclosure button",
        "expand-collapse triangle"
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
      "ko": [
        "the tiny triangle that opens a folder row",
        "little arrow that rotates when a section expands",
        "chevron beside a row with children",
        "small expand collapse arrow in an outline",
        "triangle next to a heading that shows more content"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSOutlineView",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "DisclosureGroup",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSButton.BezelStyle.disclosure",
        "note": {
          "en": "a standalone disclosure button style",
          "ko": "a standalone disclosure button style"
        }
      }
    ],
    "parts": [
      {
        "id": "disclosure-indicator",
        "name": {
          "en": "Disclosure indicator",
          "ko": "Disclosure indicator"
        },
        "api": "NSButton.BezelStyle.disclosure",
        "description": {
          "en": "“The tiny triangle beside the row” is the disclosure indicator.",
          "ko": "“The tiny triangle beside the row” is the disclosure indicator."
        },
        "prompt": {
          "en": "a native disclosure indicator using NSButton.BezelStyle.disclosure beside the expandable label",
          "ko": "， NSButton.BezelStyle.disclosure"
        }
      },
      {
        "id": "collapsed-state",
        "name": {
          "en": "Collapsed state",
          "ko": "Collapsed state"
        },
        "api": "DisclosureGroup.isExpanded",
        "description": {
          "en": "“The arrow pointing sideways before it opens” is the collapsed state.",
          "ko": "“The arrow pointing sideways before it opens” is the collapsed state."
        },
        "prompt": {
          "en": "the collapsed DisclosureGroup.isExpanded = false state, with the indicator pointing sideways and children hidden",
          "ko": "（DisclosureGroup.isExpanded = false）：，"
        }
      },
      {
        "id": "expanded-state",
        "name": {
          "en": "Expanded state",
          "ko": "Expanded state"
        },
        "api": "DisclosureGroup.isExpanded",
        "description": {
          "en": "“The arrow rotated down after it opens” is the expanded state.",
          "ko": "“The arrow rotated down after it opens” is the expanded state."
        },
        "prompt": {
          "en": "the expanded DisclosureGroup.isExpanded = true state, with the disclosure indicator pointing down above the revealed children",
          "ko": "（DisclosureGroup.isExpanded = true）：，"
        }
      }
    ],
    "prompt": {
      "en": "Use a native Disclosure Triangle for expandable rows: NSOutlineView for an outline hierarchy or SwiftUI DisclosureGroup for a standalone section. The small indicator must rotate between collapsed and expanded states while the row's children appear directly beneath it.",
      "ko": "： NSOutlineView， SwiftUI DisclosureGroup。，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS disclosure triangle (NSButton .disclosure bezel, SwiftUI DisclosureGroup). Rule out: the isExpanded binding not actually driving the revealed content; several groups sharing one binding so they all toggle together; the triangle animating the wrong direction because state and rotation are set separately; baseline misalignment between the triangle and its label. The symptom:",
      "ko": "macOS （NSButton .disclosure bezel、SwiftUI DisclosureGroup）。：isExpanded ； DisclosureGroup ，；，；。："
    },
    "relatedSlugs": [
      "sidebar",
      "accordion",
      "context-menu"
    ]
  },
  {
    "slug": "dock-badge",
    "platform": "macos",
    "name": {
      "en": "Dock Badge",
      "ko": "Dock 배지 (Dock Badge)"
    },
    "tagline": {
      "en": "The red count or status label overlaid on an app's Dock icon",
      "ko": "The red count or status label overlaid on an app's Dock icon"
    },
    "description": {
      "en": "A Dock badge is the small red label overlaid on an application's Dock icon, usually showing an unread or pending count. The label belongs to the app's NSDockTile and can also contain short status text. Requesting user attention makes the Dock icon bounce and is a separate, more interruptive signal that should be used sparingly.",
      "ko": "Dock Dock ，。 NSDockTile，。 Dock ，，。"
    },
    "aka": {
      "en": [
        "Dock tile badge",
        "app icon badge",
        "notification badge"
      ],
      "ko": [
        "Dock tile badge",
        "app icon badge",
        "notification badge"
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
      "ko": [
        "the red number bubble on a dock icon",
        "unread count on the app icon in the dock",
        "little red label in the corner of a mac app icon",
        "number badge showing pending notifications",
        "the red dot or number on a dock icon"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSDockTile.badgeLabel",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.dockTile",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.requestUserAttention(_:)",
        "note": {
          "en": "bounces the Dock icon; separate from the badge",
          "ko": "Dock ；"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.RequestUserAttentionType",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "badge-label",
        "name": {
          "en": "Badge label",
          "ko": "Badge label"
        },
        "api": "NSDockTile.badgeLabel",
        "description": {
          "en": "“The red number bubble on the app icon” is the Dock tile's badge label.",
          "ko": "「」 Dock tile 。"
        },
        "prompt": {
          "en": "the NSDockTile.badgeLabel as a compact red count badge over the Dock icon's upper-right corner",
          "ko": "NSDockTile.badgeLabel： Dock"
        }
      },
      {
        "id": "attention-bounce",
        "name": {
          "en": "Attention bounce",
          "ko": "Attention bounce"
        },
        "api": "NSApplication.requestUserAttention(_:)",
        "description": {
          "en": "“The app icon jumping in the Dock” is an attention bounce, not part of the badge.",
          "ko": "「 Dock 」，。"
        },
        "prompt": {
          "en": "an NSApplication.requestUserAttention(_:) Dock-icon bounce used separately from NSDockTile.badgeLabel",
          "ko": "NSApplication.requestUserAttention(_:) Dock ， NSDockTile.badgeLabel"
        }
      }
    ],
    "prompt": {
      "en": "Show a Dock Badge by assigning the count to NSApp.dockTile.badgeLabel, clearing the label when no count remains. If stronger attention is warranted, call NSApplication.requestUserAttention(_:) separately to bounce the Dock icon; the bounce is not the badge itself.",
      "ko": "NSApp.dockTile.badgeLabel Dock ， label。， NSApplication.requestUserAttention(_:) Dock ；。"
    },
    "debugPrompt": {
      "en": "Debug my macOS Dock badge (NSDockTile.badgeLabel, NSApp.dockTile). Rule out: clearing with the string zero instead of nil or empty so a 0 stays visible; setting the badge from a background thread; expecting the badge to survive quit — it lives only while the app runs (UNUserNotificationCenter badge APIs persist); long strings truncating in the tile. The symptom:",
      "ko": "macOS Dock （NSDockTile.badgeLabel、NSApp.dockTile）。：「0」 nil ， 0 ；；——（UNUserNotificationCenter badge API ）；。："
    },
    "relatedSlugs": [
      "badge-chip-pill",
      "menu-bar-extra",
      "toast"
    ]
  },
  {
    "slug": "focus-ring",
    "platform": "macos",
    "name": {
      "en": "Focus Ring",
      "ko": "포커스 링 (Focus Ring)"
    },
    "tagline": {
      "en": "The accent-colored glow that identifies the control receiving keyboard input",
      "ko": "The accent-colored glow that identifies the control receiving keyboard input"
    },
    "description": {
      "en": "A focus ring is the accent-colored glow, commonly blue, around the control that currently receives keyboard interaction. Text fields normally accept focus, while Full Keyboard Access allows Tab to move focus through additional controls such as buttons and pop-up buttons. AppKit draws the ring for the first responder according to its focusRingType, and custom layouts must leave enough space for that ring to remain visible.",
      "ko": "，。；（Full Keyboard Access），Tab 、。AppKit focusRingType ，，。"
    },
    "aka": {
      "en": [
        "keyboard focus indicator",
        "focus halo",
        "first responder ring"
      ],
      "ko": [
        "keyboard focus indicator",
        "focus halo",
        "first responder ring"
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
      "ko": [
        "the blue glow around the selected control",
        "outline that appears when you tab to a button",
        "blue border around the field that has keyboard focus",
        "highlight showing where keyboard input will go",
        "ring around buttons when full keyboard access is on"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSView.focusRingType",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.makeFirstResponder(_:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSFocusRingType",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.focusable(_:)",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "FocusState",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "first-responder",
        "name": {
          "en": "First responder",
          "ko": "First responder"
        },
        "api": "NSWindow.firstResponder",
        "description": {
          "en": "“The control that will get my typing” is the window's first responder.",
          "ko": "“The control that will get my typing” is the window's first responder."
        },
        "prompt": {
          "en": "the NSWindow.firstResponder control that currently receives keyboard input",
          "ko": "NSWindow.firstResponder"
        }
      }
    ],
    "prompt": {
      "en": "Preserve the native Focus Ring around the first responder. In AppKit, make the control eligible for first-responder status, move focus with NSWindow.makeFirstResponder(_:), and keep NSView.focusRingType at .default; in SwiftUI, use View.focusable(_:) with FocusState. Leave enough space for the standard macOS accent-colored ring and do not replace it with a custom border.",
      "ko": "。 AppKit ，， NSWindow.makeFirstResponder(_:) ， NSView.focusRingType .default； SwiftUI ， View.focusable(_:) FocusState。 macOS ，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS focus ring (NSView.focusRingType, SwiftUI .focusable/.focusEffectDisabled). Rule out: Full Keyboard Access (AppleKeyboardUIMode) on the user's Mac making every first control grab focus and show a ring; focusRingType = .none silenced by a custom drawFocusRingMask; the ring clipped by an ancestor that clips to bounds; SwiftUI focus state fighting an explicit makeFirstResponder call. The symptom:",
      "ko": "macOS （NSView.focusRingType、SwiftUI .focusable/.focusEffectDisabled）。： Mac （AppleKeyboardUIMode）； drawFocusRingMask focusRingType = .none ；；SwiftUI makeFirstResponder 。："
    },
    "relatedSlugs": [
      "segmented-control",
      "stepper",
      "traffic-lights",
      "focus-ring-web"
    ]
  },
  {
    "slug": "inspector",
    "platform": "macos",
    "name": {
      "en": "Inspector",
      "ko": "인스펙터 (Inspector)"
    },
    "tagline": {
      "en": "The right-hand panel for viewing and editing details of the current selection",
      "ko": "The right-hand panel for viewing and editing details of the current selection"
    },
    "description": {
      "en": "An inspector is a trailing panel that displays properties and controls for the item currently selected in the main content. Apps such as Keynote and Xcode organize formatting, identity, and configuration controls in inspectors so the document remains visible while details change. On macOS 14 and later SwiftUI provides a dedicated inspector modifier; classic AppKit layouts commonly build one as the trailing item of a split view.",
      "ko": "，。Keynote、Xcode App 、、，。 macOS 14 ，SwiftUI inspector ； AppKit 。"
    },
    "aka": {
      "en": [
        "inspector panel",
        "details sidebar",
        "properties inspector",
        "utility area"
      ],
      "ko": [
        "inspector panel",
        "details sidebar",
        "properties inspector",
        "utility area"
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
      "ko": [
        "the properties panel on the right side",
        "right sidebar that changes with the selected item",
        "keynote style format panel",
        "xcode panel showing details for what is selected",
        "collapsible settings column on the right"
      ]
    },
    "api": [
      {
        "framework": "SwiftUI",
        "symbol": "View.inspector(isPresented:content:)",
        "note": {
          "en": "macOS 14+",
          "ko": "macOS 14+"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.inspectorColumnWidth(min:ideal:max:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewController",
        "note": {
          "en": "common foundation for a classic trailing inspector",
          "ko": "common foundation for a classic trailing inspector"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewItem",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "inspector-column",
        "name": {
          "en": "Inspector column",
          "ko": "Inspector column"
        },
        "api": "View.inspector(isPresented:content:)",
        "description": {
          "en": "“The properties panel on the right” is the inspector column.",
          "ko": "“The properties panel on the right” is the inspector column."
        },
        "prompt": {
          "en": "a trailing inspector column created with View.inspector(isPresented:content:), beside rather than over the main content",
          "ko": "View.inspector(isPresented:content:) ，"
        }
      },
      {
        "id": "section-disclosure",
        "name": {
          "en": "Inspector section disclosure",
          "ko": "Inspector section disclosure"
        },
        "api": "DisclosureGroup",
        "description": {
          "en": "“The little arrow that folds a group of settings” is an inspector section disclosure.",
          "ko": "“The little arrow that folds a group of settings” is an inspector section disclosure."
        },
        "prompt": {
          "en": "a DisclosureGroup section disclosure inside the inspector, with its chevron aligned to the section heading",
          "ko": "DisclosureGroup ，"
        }
      },
      {
        "id": "column-divider",
        "name": {
          "en": "Inspector column divider",
          "ko": "Inspector column divider"
        },
        "api": "NSSplitViewItem",
        "description": {
          "en": "“The thin line you drag to resize the properties panel” is the inspector column divider.",
          "ko": "“The thin line you drag to resize the properties panel” is the inspector column divider."
        },
        "prompt": {
          "en": "the resizable divider before the trailing NSSplitViewItem inspector column",
          "ko": "NSSplitViewItem"
        }
      }
    ],
    "prompt": {
      "en": "Put these selection-specific controls in an Inspector using SwiftUI View.inspector(isPresented:content:) (macOS 14+), as a collapsible right-hand column with a sensible inspectorColumnWidth. The inspector must update with the selected object without replacing the main content.",
      "ko": "SwiftUI View.inspector(isPresented:content:)（macOS 14+），， inspectorColumnWidth。，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS inspector (SwiftUI View.inspector(isPresented:), NSSplitViewItem(inspectorWithViewController:)). Rule out: the inspector auto-presenting as a sheet on narrow windows — that is the built-in adaptive behavior; the toggle binding out of sync because the user can also close it by dragging; min/ideal widths forcing a collapse on window resize; inspector content not tracking the current selection. The symptom:",
      "ko": "macOS （SwiftUI View.inspector(isPresented:)、NSSplitViewItem(inspectorWithViewController:)）。： sheet ——；，；min/ideal ；。："
    },
    "relatedSlugs": [
      "sidebar",
      "toolbar",
      "vibrancy",
      "disclosure-triangle"
    ]
  },
  {
    "slug": "panel",
    "platform": "macos",
    "name": {
      "en": "Panel (Floating Window / HUD)",
      "ko": "패널 및 HUD (Panel)"
    },
    "tagline": {
      "en": "An auxiliary macOS window that floats above related document windows",
      "ko": "An auxiliary macOS window that floats above related document windows"
    },
    "description": {
      "en": "A panel is an auxiliary window for tools, controls, or transient information rather than a primary document. It can float above normal windows, hide when its app becomes inactive, or use a HUD appearance. A non-activating panel can accept appropriate interaction without bringing the entire app forward, which suits command launchers and Spotlight-like surfaces.",
      "ko": "，、，。、 App ， HUD 。（non-activating panel） App ， Spotlight 。"
    },
    "aka": {
      "en": [
        "floating panel",
        "utility panel",
        "HUD window",
        "heads-up display"
      ],
      "ko": [
        "floating panel",
        "utility panel",
        "HUD window",
        "heads-up display"
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
      "ko": [
        "small utility window that stays above the main window",
        "floating controls palette on mac",
        "dark translucent heads up display window",
        "spotlight style window that does not activate the app",
        "tool window that follows the active document"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSPanel",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.StyleMask.nonactivatingPanel",
        "note": {
          "en": "allows a panel that does not activate its app",
          "ko": "allows a panel that does not activate its app"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.StyleMask.hudWindow",
        "note": {
          "en": "heads-up-display panel appearance",
          "ko": "heads-up-display panel appearance"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.Level.floating",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSPanel.becomesKeyOnlyIfNeeded",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "floating-level",
        "name": {
          "en": "Floating window level",
          "ko": "Floating window level"
        },
        "api": "NSWindow.Level.floating",
        "description": {
          "en": "“The utility window that stays above the document” uses a floating window level.",
          "ko": "“The utility window that stays above the document” uses a floating window level."
        },
        "prompt": {
          "en": "an NSPanel at NSWindow.Level.floating, remaining above its related document windows",
          "ko": "NSWindow.Level.floating NSPanel，"
        }
      },
      {
        "id": "hud-chrome",
        "name": {
          "en": "HUD chrome",
          "ko": "HUD chrome"
        },
        "api": "NSWindow.StyleMask.hudWindow",
        "description": {
          "en": "“The dark translucent heads-up-display frame” is HUD chrome.",
          "ko": "“ HUD ” HUD 。"
        },
        "prompt": {
          "en": "the dark translucent NSWindow.StyleMask.hudWindow chrome around an auxiliary NSPanel",
          "ko": "NSPanel NSWindow.StyleMask.hudWindow"
        }
      }
    ],
    "prompt": {
      "en": "Implement this auxiliary surface as a Panel (Floating Window / HUD) using NSPanel, with NSWindow.Level.floating so it stays above its related document windows. If it should behave like Spotlight, use the nonactivatingPanel style so showing it does not activate the app or steal focus unnecessarily.",
      "ko": "NSPanel （ / HUD）， NSWindow.Level.floating 。 Spotlight ， nonactivatingPanel ， App，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS panel (NSPanel). Rule out: the panel stealing focus from the main window because the nonactivatingPanel style mask is missing; text fields inside refusing input because the panel cannot become key; the panel vanishing on app deactivate via hidesOnDeactivate; a floating window level fighting other always-on-top windows. The symptom:",
      "ko": "macOS （NSPanel）。： nonactivatingPanel ； key window，；hidesOnDeactivate App ；。："
    },
    "relatedSlugs": [
      "sheet",
      "popover",
      "vibrancy",
      "command-palette"
    ]
  },
  {
    "slug": "popover",
    "platform": "macos",
    "name": {
      "en": "Popover",
      "ko": "팝오버 (Popover)"
    },
    "tagline": {
      "en": "A floating bubble whose arrow points back to the control that opened it",
      "ko": "A floating bubble whose arrow points back to the control that opened it"
    },
    "description": {
      "en": "A popover is a lightweight floating bubble for controls or information related to one specific source view. Its arrow identifies the control that opened it, and AppKit chooses an edge that keeps the bubble onscreen. Depending on its behavior, it can close when the user interacts elsewhere or remain open until dismissed explicitly.",
      "ko": "，。，AppKit 。，，。"
    },
    "aka": {
      "en": [
        "anchored popover",
        "popover bubble",
        "callout"
      ],
      "ko": [
        "anchored popover",
        "popover bubble",
        "callout"
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
      "ko": [
        "the little floating bubble with an arrow",
        "box that points back to the button that opened it",
        "small window attached to a toolbar button",
        "speech bubble panel anchored to a control",
        "floating settings bubble that closes when you click away"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSPopover",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSPopover.show(relativeTo:of:preferredEdge:)",
        "note": {
          "en": "positions the popover and its anchor arrow",
          "ko": "positions the popover and its anchor arrow"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.popover(isPresented:attachmentAnchor:arrowEdge:content:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSPopover.Behavior",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "anchor-arrow",
        "name": {
          "en": "Anchor arrow",
          "ko": "Anchor arrow"
        },
        "api": "NSPopover.show(relativeTo:of:preferredEdge:)",
        "description": {
          "en": "“The little point on the bubble aimed at the button” is the anchor arrow.",
          "ko": "“The little point on the bubble aimed at the button” is the anchor arrow."
        },
        "prompt": {
          "en": "the NSPopover anchor arrow from show(relativeTo:of:preferredEdge:), pointing precisely at its source control",
          "ko": "show(relativeTo:of:preferredEdge:) NSPopover ，"
        }
      },
      {
        "id": "positioning-rect",
        "name": {
          "en": "Positioning rect",
          "ko": "Positioning rect"
        },
        "api": "NSPopover.show(relativeTo:of:preferredEdge:)",
        "description": {
          "en": "“The exact bit of the button the bubble attaches to” is the positioning rect.",
          "ko": "“The exact bit of the button the bubble attaches to” is the positioning rect."
        },
        "prompt": {
          "en": "the positioning rect passed to NSPopover.show(relativeTo:of:preferredEdge:), anchoring the bubble to the intended part of the source view",
          "ko": "NSPopover.show(relativeTo:of:preferredEdge:) ，"
        }
      }
    ],
    "prompt": {
      "en": "Present this as a Popover using NSPopover (SwiftUI: View.popover), with a visible anchor arrow aimed at the exact control that opened it. It should remain visually attached to that control and dismiss with native popover behavior.",
      "ko": "NSPopover（SwiftUI：View.popover），。，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS popover (NSPopover, SwiftUI View.popover). Rule out: transient behavior closing it on the first click inside custom content that does not accept first responder; the arrow anchored to a stale positioning rect after layout changes; the popover detaching into a floating window when dragged (detachable delegate); SwiftUI popovers presenting as sheets in compact contexts. The symptom:",
      "ko": "macOS （NSPopover、SwiftUI View.popover）。：transient ——；；（detachable ）；SwiftUI sheet 。："
    },
    "relatedSlugs": [
      "menu-bar-extra",
      "context-menu",
      "vibrancy",
      "popover-dropdown-tooltip"
    ]
  },
  {
    "slug": "popup-pulldown-combo",
    "platform": "macos",
    "name": {
      "en": "Pop-Up Button vs. Pull-Down Button vs. Combo Box",
      "ko": "팝업 및 풀다운 버튼 (Pop-Up & Pull-Down)"
    },
    "tagline": {
      "en": "Three similar-looking macOS controls for choosing a value or invoking a menu action",
      "ko": "macOS ，"
    },
    "description": {
      "en": "A pop-up button represents a selection: its closed label shows the current choice, and opening it presents the available values. A pull-down button uses NSPopUpButton with pullsDown set to true and presents commands from a fixed button label rather than communicating a persistent selection. A combo box is a text field plus a drop-down list, so the user can type a value instead of being limited to the listed choices.",
      "ko": "：，。 pullsDown true NSPopUpButton，，，。，，。"
    },
    "aka": {
      "en": [
        "pop-up menu button",
        "pull-down menu button",
        "combo box",
        "menu picker"
      ],
      "ko": [
        "pop-up menu button",
        "pull-down menu button",
        "combo box",
        "menu picker"
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
      "ko": [
        "the dropdown that shows the currently selected option",
        "button with a little arrow that opens a menu of actions",
        "text field with a dropdown list attached",
        "mac menu button versus an editable dropdown",
        "selector that looks like a button and opens choices",
        "field where you can type or pick an existing value"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSPopUpButton",
        "note": {
          "en": "a selection control when pullsDown is false",
          "ko": "pullsDown false"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSComboBox",
        "note": {
          "en": "an editable text field paired with a choices list",
          "ko": "an editable text field paired with a choices list"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSPopUpButton.pullsDown",
        "note": {
          "en": "true makes it an action-oriented pull-down button",
          "ko": "true makes it an action-oriented pull-down button"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "Picker",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "current-value-label",
        "name": {
          "en": "Current-value label",
          "ko": "Current-value label"
        },
        "api": "NSPopUpButton.titleOfSelectedItem",
        "description": {
          "en": "“The dropdown text that shows what is selected” is the pop-up button's current-value label.",
          "ko": "“The dropdown text that shows what is selected” is the pop-up button's current-value label."
        },
        "prompt": {
          "en": "the NSPopUpButton.titleOfSelectedItem current-value label visible while the selection control is closed",
          "ko": "NSPopUpButton.titleOfSelectedItem"
        }
      },
      {
        "id": "pull-down-indicator",
        "name": {
          "en": "Pull-down indicator",
          "ko": "Pull-down indicator"
        },
        "api": "NSPopUpButton.pullsDown",
        "description": {
          "en": "“The little arrow showing that this button opens actions” is the pull-down indicator.",
          "ko": "“The little arrow showing that this button opens actions” is the pull-down indicator."
        },
        "prompt": {
          "en": "the menu indicator on an NSPopUpButton with pullsDown = true, signaling that the fixed-label button opens commands",
          "ko": "pullsDown = true NSPopUpButton ，"
        }
      },
      {
        "id": "editable-field",
        "name": {
          "en": "Editable value field",
          "ko": "Editable value field"
        },
        "api": "NSComboBox",
        "description": {
          "en": "“The dropdown field where I can type my own value” is the combo box's editable field.",
          "ko": "“The dropdown field where I can type my own value” is the combo box's editable field."
        },
        "prompt": {
          "en": "the editable NSComboBox value field, visually joined to its suggestions-list disclosure button",
          "ko": "NSComboBox ，"
        }
      },
      {
        "id": "selected-item-checkmark",
        "name": {
          "en": "Selected-item checkmark",
          "ko": "Selected-item checkmark"
        },
        "api": "NSMenuItem.state",
        "description": {
          "en": "“The checkmark next to the current choice” is the selected menu item's state mark.",
          "ko": "“The checkmark next to the current choice” is the selected menu item's state mark."
        },
        "prompt": {
          "en": "the NSMenuItem.state checkmark beside the current value in an open NSPopUpButton menu",
          "ko": "NSPopUpButton NSMenuItem.state"
        }
      }
    ],
    "prompt": {
      "en": "Choose the correct control from Pop-Up Button vs. Pull-Down Button vs. Combo Box: use NSPopUpButton with pullsDown false for a persistent selection, the same control with pullsDown true for a menu of commands, or NSComboBox when the user may type a value as well as choose one. Preserve the native arrow, menu behavior, and displayed-value semantics of the chosen control.",
      "ko": "、、： pullsDown false NSPopUpButton； pullsDown true ； NSComboBox。、。"
    },
    "debugPrompt": {
      "en": "Debug my macOS popup/pull-down/combo (NSPopUpButton, NSComboBox). Rule out: a pull-down consuming its FIRST menu item as the title — insert a dummy first item; popup selection not syncing because selectItem was never called after menu rebuild; autoenablesItems greying items whose actions lack targets; expecting a combo box to be a menu — it is an editable text field plus a list. The symptom:",
      "ko": "macOS //（NSPopUpButton、NSComboBox）。：——； selectItem ；autoenablesItems ；——。："
    },
    "relatedSlugs": [
      "context-menu",
      "combobox",
      "segmented-control",
      "popover-dropdown-tooltip"
    ]
  },
  {
    "slug": "segmented-control",
    "platform": "macos",
    "name": {
      "en": "Segmented Control",
      "ko": "세그먼트 컨트롤 (Segmented Control)"
    },
    "tagline": {
      "en": "A row of connected choices with the current segment visibly selected",
      "ko": "A row of connected choices with the current segment visibly selected"
    },
    "description": {
      "en": "A segmented control groups a small set of related choices into one horizontal row of connected buttons. The selected segment receives a pressed or filled appearance, making the current mode immediately visible. NSSegmentedControl can also be configured for multiple or momentary tracking, but a segmented Picker normally represents one persistent selection.",
      "ko": "。，。NSSegmentedControl （momentary）， Picker 。"
    },
    "aka": {
      "en": [
        "segment control",
        "segmented picker",
        "button group"
      ],
      "ko": [
        "segment control",
        "segmented picker",
        "button group"
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
      "ko": [
        "the connected row of buttons where one stays selected",
        "pill split into several clickable choices",
        "small tabs that switch between views",
        "group of joined icon buttons in a toolbar",
        "horizontal selector with one pressed section"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSSegmentedControl",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "PickerStyle.segmented",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSegmentedControl.trackingMode",
        "note": {
          "en": "single, multiple, or momentary selection behavior",
          "ko": "single, multiple, or momentary selection behavior"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.pickerStyle(_:)",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "selected-segment",
        "name": {
          "en": "Selected segment",
          "ko": "Selected segment"
        },
        "api": "NSSegmentedControl.selectedSegment",
        "description": {
          "en": "“The section that stays pressed” is the selected segment.",
          "ko": "“The section that stays pressed” is the selected segment."
        },
        "prompt": {
          "en": "the NSSegmentedControl.selectedSegment with the native persistent selected fill",
          "ko": "NSSegmentedControl.selectedSegment"
        }
      },
      {
        "id": "segment-divider",
        "name": {
          "en": "Segment divider",
          "ko": "Segment divider"
        },
        "api": "NSSegmentedControl",
        "description": {
          "en": "“The little line separating two choices in the pill” is a segment divider.",
          "ko": "“The little line separating two choices in the pill” is a segment divider."
        },
        "prompt": {
          "en": "the native divider between adjacent choices inside one NSSegmentedControl",
          "ko": "NSSegmentedControl"
        }
      }
    ],
    "prompt": {
      "en": "Use a Segmented Control with NSSegmentedControl (SwiftUI: a Picker with PickerStyle.segmented), showing the active segment with the native selected treatment. Keep the buttons connected as one control and bind selection so exactly one segment remains selected for this view switcher.",
      "ko": "：NSSegmentedControl（SwiftUI： PickerStyle.segmented Picker），。，，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS segmented control (NSSegmentedControl). Rule out: trackingMode wrong — momentary segments fire and deselect, selectOne keeps a selection; selectedSegment being -1 in the action for momentary mode; segment images not template so dark mode breaks; auto segment widths jumping when labels change. The symptom:",
      "ko": "macOS （NSSegmentedControl）。：trackingMode ——momentary ，selectOne ；momentary action selectedSegment -1；；。："
    },
    "relatedSlugs": [
      "toolbar",
      "tabs",
      "toggle-group",
      "focus-ring"
    ]
  },
  {
    "slug": "sheet",
    "platform": "macos",
    "name": {
      "en": "Sheet",
      "ko": "시트 패널 (Sheet)"
    },
    "tagline": {
      "en": "A modal panel attached to one macOS window rather than the whole app",
      "ko": "macOS 、 App"
    },
    "description": {
      "en": "A sheet is a modal panel attached to a particular window, traditionally descending from its title bar. It prevents interaction with that parent window while other app windows can remain usable. An app-modal dialog instead blocks the application as a whole and is not visually attached to one document window.",
      "ko": "Sheet ，。，App 。 App ，。"
    },
    "aka": {
      "en": [
        "window-modal dialog",
        "document-modal dialog",
        "attached sheet"
      ],
      "ko": [
        "window-modal dialog",
        "document-modal dialog",
        "attached sheet"
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
      "ko": [
        "dialog that slides down from the window title bar",
        "modal attached to just one mac window",
        "panel hanging from the top of the document window",
        "save dialog attached to its parent window",
        "popup that blocks one window but not the whole app"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSWindow.beginSheet(_:completionHandler:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.endSheet(_:returnCode:)",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.sheet(isPresented:onDismiss:content:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSApplication.runModal(for:)",
        "note": {
          "en": "app-modal alternative, not a sheet",
          "ko": "App ， Sheet"
        }
      }
    ],
    "parts": [
      {
        "id": "dimming-layer",
        "name": {
          "en": "Dimming layer",
          "ko": "Dimming layer"
        },
        "api": "View.sheet(isPresented:content:)",
        "description": {
          "en": "“The darkened area behind the sheet” is the dimming layer that marks the parent surface as temporarily unavailable.",
          "ko": "“Sheet ”，。"
        },
        "prompt": {
          "en": "the sheet's dimming layer (View.sheet(isPresented:content:)): the translucent dark overlay over the blocked parent surface behind the presentation",
          "ko": "Sheet （View.sheet(isPresented:content:)）："
        }
      }
    ],
    "prompt": {
      "en": "Present this as a window-modal Sheet with NSWindow.beginSheet(_:completionHandler:) (SwiftUI: View.sheet), visibly attached beneath the parent window's title bar. Block only that parent window, not every window in the app.",
      "ko": "NSWindow.beginSheet(_:completionHandler:)（SwiftUI：View.sheet） Sheet，。， App 。"
    },
    "debugPrompt": {
      "en": "Debug my macOS sheet (NSWindow.beginSheet(_:completionHandler:), SwiftUI View.sheet). Rule out: the isPresented/item binding never reset so it will not present a second time; endSheet never called so the parent window stays blocked; presenting from a view controller detached from the window so nothing appears; two sheets queued on one window presenting back-to-back unexpectedly. The symptom:",
      "ko": "macOS Sheet（NSWindow.beginSheet(_:completionHandler:)、SwiftUI View.sheet）。：isPresented/item ，； endSheet，；，； Sheet 。："
    },
    "relatedSlugs": [
      "alert",
      "panel",
      "scrim",
      "dialog-drawer-sheet",
      "focus-ring"
    ]
  },
  {
    "slug": "sidebar",
    "platform": "macos",
    "name": {
      "en": "Sidebar (Source List)",
      "ko": "사이드바 (Sidebar)"
    },
    "tagline": {
      "en": "The translucent navigation column along the left edge of a macOS window",
      "ko": "The translucent navigation column along the left edge of a macOS window"
    },
    "description": {
      "en": "A sidebar is the leftmost navigation column used by apps such as Finder and Mail to organize destinations into sections. AppKit calls its list appearance a source list, while modern SwiftUI normally builds the structure with NavigationSplitView and sidebar list style. It can collapse independently of the main content and often uses a translucent material behind its rows.",
      "ko": "，、 App 。AppKit （source list）， SwiftUI NavigationSplitView sidebar 。，。"
    },
    "aka": {
      "en": [
        "source list",
        "navigation sidebar",
        "split view sidebar"
      ],
      "ko": [
        "source list",
        "navigation sidebar",
        "split view sidebar"
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
      "ko": [
        "the translucent list down the left side of a mac app",
        "finder style navigation column",
        "left panel with sections and selected rows",
        "sidebar that collapses next to the main content",
        "list of folders or pages on the left",
        "mac navigation rail with a frosted background"
      ]
    },
    "api": [
      {
        "framework": "SwiftUI",
        "symbol": "NavigationSplitView",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewController",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSSplitViewItem(sidebarWithViewController:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSTableView.Style.sourceList",
        "note": {
          "en": "the standard AppKit list appearance",
          "ko": "AppKit"
        }
      },
      {
        "framework": "SwiftUI",
        "symbol": "ListStyle.sidebar",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "source-list-style",
        "name": {
          "en": "Source-list style",
          "ko": "Source-list style"
        },
        "api": "NSTableView.Style.sourceList",
        "description": {
          "en": "The spacious, vibrancy-aware Finder-like treatment of the rows is AppKit's source-list style.",
          "ko": "、 vibrancy ， AppKit 。"
        },
        "prompt": {
          "en": "the native source-list style (NSTableView.Style.sourceList): Finder-like sidebar rows over a translucent background with system spacing",
          "ko": "（NSTableView.Style.sourceList）：、"
        }
      },
      {
        "id": "section-header",
        "name": {
          "en": "Section header",
          "ko": "Section header"
        },
        "api": "NSOutlineViewDelegate.outlineView(_:isGroupItem:)",
        "description": {
          "en": "The small emphasized label dividing destinations into groups such as Favorites or iCloud is a section header.",
          "ko": "“”“iCloud”，。"
        },
        "prompt": {
          "en": "a sidebar section header (NSOutlineViewDelegate.outlineView(_:isGroupItem:)): the non-destination group label above a cluster of source-list rows",
          "ko": "（NSOutlineViewDelegate.outlineView(_:isGroupItem:)）：、"
        }
      },
      {
        "id": "selection-pill",
        "name": {
          "en": "Selection pill",
          "ko": "Selection pill"
        },
        "api": "NSTableRowView.isSelected",
        "description": {
          "en": "“The rounded colored background behind the current row” is the sidebar's selection pill.",
          "ko": "“The rounded colored background behind the current row” is the sidebar's selection pill."
        },
        "prompt": {
          "en": "the sidebar selection pill (NSTableRowView.isSelected): the accent-tinted rounded background behind the active source-list row",
          "ko": "（NSTableRowView.isSelected）："
        }
      },
      {
        "id": "sidebar-toggle",
        "name": {
          "en": "Sidebar toggle toolbar button",
          "ko": "Sidebar toggle toolbar button"
        },
        "api": "NSSplitViewController.toggleSidebar(_:)",
        "description": {
          "en": "The standard split-rectangle toolbar icon that reveals or hides the leading column is the sidebar toggle.",
          "ko": "The standard split-rectangle toolbar icon that reveals or hides the leading column is the sidebar toggle."
        },
        "prompt": {
          "en": "the sidebar toggle toolbar button (NSSplitViewController.toggleSidebar(_:)): the standard split-rectangle icon that collapses or reveals the leading sidebar",
          "ko": "（NSSplitViewController.toggleSidebar(_:)）：，"
        }
      }
    ],
    "prompt": {
      "en": "Build a macOS Sidebar (Source List) with NavigationSplitView (AppKit: NSSplitViewController), using the native translucent sidebar appearance and source-list row selection. It must occupy the left column, support collapsing, and keep navigation separate from the detail content.",
      "ko": "NavigationSplitView（AppKit：NSSplitViewController） macOS （），。、，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS sidebar (NSSplitViewController sidebar item, SwiftUI NavigationSplitView). Rule out: the frosted vibrancy missing because the sidebar content is not inside the sidebar-material effect view; toggleSidebar wired to the wrong split view item; the width not persisting without an autosaveName; the selection highlight losing its rounded inset style when the list style changes. The symptom:",
      "ko": "macOS （NSSplitViewController sidebar item、SwiftUI NavigationSplitView）。： vibrancy ， sidebar ；toggleSidebar ； autosaveName ；。："
    },
    "relatedSlugs": [
      "inspector",
      "toolbar",
      "vibrancy",
      "disclosure-triangle"
    ]
  },
  {
    "slug": "stepper",
    "platform": "macos",
    "name": {
      "en": "Stepper",
      "ko": "스텝퍼 (Stepper)"
    },
    "tagline": {
      "en": "The compact up-and-down arrow pair used to increment or decrement a value",
      "ko": "The compact up-and-down arrow pair used to increment or decrement a value"
    },
    "description": {
      "en": "A stepper is a pair of small stacked arrow buttons for changing a value by a fixed increment. It commonly sits beside a numeric text field so users can either type an exact value or adjust it one step at a time. Its enabled states should reflect the configured minimum and maximum, and holding an arrow can repeat the change.",
      "ko": "，。，，。，。"
    },
    "aka": {
      "en": [
        "stepper control",
        "stepper arrows",
        "numeric stepper",
        "incrementer"
      ],
      "ko": [
        "stepper control",
        "stepper arrows",
        "numeric stepper",
        "incrementer"
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
      "ko": [
        "the tiny up and down arrows beside a number field",
        "little control that increases or decreases a value",
        "stacked arrow buttons next to a numeric input",
        "small plus minus style control for changing a number",
        "spinner arrows for adjusting a value one step at a time"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSStepper",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "Stepper",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSStepper.increment",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSStepper.minValue",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSStepper.maxValue",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "increment-button",
        "name": {
          "en": "Increment button",
          "ko": "Increment button"
        },
        "api": "NSStepper.increment",
        "description": {
          "en": "“The tiny upper arrow that raises the number” is the increment button.",
          "ko": "“The tiny upper arrow that raises the number” is the increment button."
        },
        "prompt": {
          "en": "the upper increment button of an NSStepper, increasing the bound value by NSStepper.increment",
          "ko": "NSStepper ， NSStepper.increment"
        }
      },
      {
        "id": "decrement-button",
        "name": {
          "en": "Decrement button",
          "ko": "Decrement button"
        },
        "api": "NSStepper.increment",
        "description": {
          "en": "“The tiny lower arrow that reduces the number” is the decrement button.",
          "ko": "“The tiny lower arrow that reduces the number” is the decrement button."
        },
        "prompt": {
          "en": "the lower decrement button of an NSStepper, reducing the bound value by NSStepper.increment",
          "ko": "NSStepper ， NSStepper.increment"
        }
      }
    ],
    "prompt": {
      "en": "Place a native Stepper using NSStepper (SwiftUI: Stepper) beside the numeric field, with the compact up/down arrow pair vertically aligned to that field. Bind both controls to the same value and enforce the intended increment, minimum, and maximum.",
      "ko": "NSStepper（SwiftUI：Stepper），。，、。"
    },
    "debugPrompt": {
      "en": "Debug my macOS stepper (NSStepper, SwiftUI Stepper). Rule out: the stepper and its text field not bound to the same value so they drift; valueWraps looping from max back to min; autorepeat firing continuously while held when single steps were expected; a number formatter clamping or rejecting the value the stepper just set. The symptom:",
      "ko": "macOS （NSStepper、SwiftUI Stepper）。：，；valueWraps ；，autorepeat ；。："
    },
    "relatedSlugs": [
      "slider",
      "focus-ring",
      "segmented-control",
      "popup-pulldown-combo"
    ]
  },
  {
    "slug": "toolbar",
    "platform": "macos",
    "name": {
      "en": "Toolbar (Unified Title Bar)",
      "ko": "툴바 (Toolbar)"
    },
    "tagline": {
      "en": "A row of window actions integrated with the modern macOS title bar",
      "ko": "A row of window actions integrated with the modern macOS title bar"
    },
    "description": {
      "en": "A toolbar holds the primary actions for a window and can share a single top row with the window title in the unified style. Its native toolbar items participate in macOS spacing, validation, customization, and overflow behavior. A title bar separator can appear between this chrome and the window's content, depending on the window style and scroll position.",
      "ko": "，。 macOS 、、。，。"
    },
    "aka": {
      "en": [
        "window toolbar",
        "unified toolbar",
        "title bar toolbar"
      ],
      "ko": [
        "window toolbar",
        "unified toolbar",
        "title bar toolbar"
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
      "ko": [
        "the row of buttons across the top of a mac window",
        "title bar with search and action icons in it",
        "mac window header where the toolbar and title share one row",
        "top strip with customizable window actions",
        "line separating the toolbar from the window content"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSToolbar",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSToolbarItem",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.ToolbarStyle.unified",
        "note": {
          "en": "places the window title inline with toolbar items",
          "ko": "places the window title inline with toolbar items"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.titlebarSeparatorStyle",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "View.toolbar(content:)",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "toolbar-item",
        "name": {
          "en": "Toolbar item",
          "ko": "Toolbar item"
        },
        "api": "NSToolbarItem",
        "description": {
          "en": "One button, search field, control group, or flexible space in the toolbar is a toolbar item.",
          "ko": "One button, search field, control group, or flexible space in the toolbar is a toolbar item."
        },
        "prompt": {
          "en": "a native toolbar item (NSToolbarItem): one action, field, group, or flexible space placed with standard macOS toolbar behavior",
          "ko": "（NSToolbarItem）： macOS 、、"
        }
      },
      {
        "id": "item-label",
        "name": {
          "en": "Toolbar item label",
          "ko": "Toolbar item label"
        },
        "api": "NSToolbarItem.label",
        "description": {
          "en": "The text shown beneath an icon in icon-and-text mode is the item label; the customization palette can use a separate palette label.",
          "ko": "The text shown beneath an icon in icon-and-text mode is the item label; the customization palette can use a separate palette label."
        },
        "prompt": {
          "en": "the toolbar item label (NSToolbarItem.label): the action name shown with the icon in icon-and-text display mode",
          "ko": "（NSToolbarItem.label）："
        }
      },
      {
        "id": "overflow-chevron",
        "name": {
          "en": "Overflow chevron",
          "ko": "Overflow chevron"
        },
        "api": "NSToolbarItem.visibilityPriority",
        "description": {
          "en": "The trailing chevron that appears when items no longer fit opens the toolbar's overflow menu.",
          "ko": "The trailing chevron that appears when items no longer fit opens the toolbar's overflow menu."
        },
        "prompt": {
          "en": "the toolbar overflow chevron (NSToolbarItem.visibilityPriority): the trailing » control that collects toolbar items that no longer fit",
          "ko": "（NSToolbarItem.visibilityPriority）： » ，"
        }
      },
      {
        "id": "title-bar-separator",
        "name": {
          "en": "Title-bar separator styles",
          "ko": "Title-bar separator styles"
        },
        "api": "NSWindow.titlebarSeparatorStyle",
        "description": {
          "en": "The boundary under the toolbar can be automatic, a visible line, a shadow, or absent through the title-bar separator style.",
          "ko": "The boundary under the toolbar can be automatic, a visible line, a shadow, or absent through the title-bar separator style."
        },
        "prompt": {
          "en": "the title-bar separator style (NSWindow.titlebarSeparatorStyle): the automatic, line, shadow, or none boundary between unified toolbar chrome and window content",
          "ko": "（NSWindow.titlebarSeparatorStyle）：，、、"
        }
      }
    ],
    "prompt": {
      "en": "Create a Toolbar (Unified Title Bar) with NSToolbar and NSWindow.ToolbarStyle.unified (SwiftUI: View.toolbar), using native NSToolbarItem placement and spacing. Keep the title inline with the actions and let NSWindow.titlebarSeparatorStyle control the divider above the content.",
      "ko": "NSToolbar NSWindow.ToolbarStyle.unified（SwiftUI：View.toolbar）（）， NSToolbarItem 。， NSWindow.titlebarSeparatorStyle 。"
    },
    "debugPrompt": {
      "en": "Debug my macOS toolbar (NSToolbar, NSToolbarItem). Rule out: items missing because they are absent from itemIdentifiers defaults vs alloweds; items greyed by validateToolbarItem returning false (or not implemented for custom views); user customization not persisting without autosavesConfiguration; unified title bar style shifting content layout under the toolbar. The symptom:",
      "ko": "macOS （NSToolbar、NSToolbarItem）。：， itemIdentifiers ；validateToolbarItem false（）； autosavesConfiguration，；。："
    },
    "relatedSlugs": [
      "traffic-lights",
      "sidebar",
      "segmented-control",
      "inspector"
    ]
  },
  {
    "slug": "traffic-lights",
    "platform": "macos",
    "name": {
      "en": "Traffic Lights (Window Controls)",
      "ko": "신호등 창 제어 버튼 (Traffic Lights)"
    },
    "tagline": {
      "en": "The red, yellow, and green controls at the top-left of a macOS window",
      "ko": "macOS 、、"
    },
    "description": {
      "en": "Traffic lights are the red close, yellow minimize, and green window controls at the top-left of a macOS window. Their symbols appear when the pointer hovers over the group. The green control normally enters full screen and also exposes system window-arrangement choices; macOS still identifies it through NSWindow.ButtonType.zoomButton.",
      "ko": "macOS 、。。，；macOS NSWindow.ButtonType.zoomButton 。"
    },
    "aka": {
      "en": [
        "window controls",
        "title bar buttons",
        "close minimize zoom buttons"
      ],
      "ko": [
        "window controls",
        "title bar buttons",
        "close minimize zoom buttons"
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
      "ko": [
        "the three colored dots in the corner of a mac window",
        "red yellow and green buttons at the top left",
        "little x minus and arrows that appear when you hover",
        "mac window close minimize and full screen buttons",
        "green window button that makes the window bigger"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSWindow.standardWindowButton(_:)",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.ButtonType",
        "note": {
          "en": "closeButton, miniaturizeButton, and zoomButton",
          "ko": "closeButton、miniaturizeButton zoomButton"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSWindow.toggleFullScreen(_:)",
        "note": {
          "en": "enters or exits a Space-filling full-screen window",
          "ko": "enters or exits a Space-filling full-screen window"
        }
      }
    ],
    "parts": [
      {
        "id": "close-button",
        "name": {
          "en": "Close button",
          "ko": "Close button"
        },
        "api": "NSWindow.ButtonType.closeButton",
        "description": {
          "en": "The red control shows an x on group hover and closes the window rather than necessarily quitting the app.",
          "ko": "×，， App。"
        },
        "prompt": {
          "en": "the red close button (NSWindow.ButtonType.closeButton): the left traffic light with an x hover glyph that closes the NSWindow",
          "ko": "（NSWindow.ButtonType.closeButton）：， ×， NSWindow"
        }
      },
      {
        "id": "minimize-button",
        "name": {
          "en": "Minimize button",
          "ko": "Minimize button"
        },
        "api": "NSWindow.ButtonType.miniaturizeButton",
        "description": {
          "en": "The yellow control shows a minus on hover and miniaturizes the window into the Dock.",
          "ko": "The yellow control shows a minus on hover and miniaturizes the window into the Dock."
        },
        "prompt": {
          "en": "the yellow minimize button (NSWindow.ButtonType.miniaturizeButton): the middle traffic light with a minus hover glyph that sends the window to the Dock",
          "ko": "（NSWindow.ButtonType.miniaturizeButton）：，，"
        }
      },
      {
        "id": "zoom-button",
        "name": {
          "en": "Zoom / full-screen button",
          "ko": "Zoom / full-screen button"
        },
        "api": "NSWindow.ButtonType.zoomButton",
        "description": {
          "en": "The green control normally enters full screen; Option-click invokes the traditional window Zoom behavior instead.",
          "ko": "； Option （Zoom）。"
        },
        "prompt": {
          "en": "the green zoom button (NSWindow.ButtonType.zoomButton): show its full-screen hover glyph, enter full screen normally, and perform traditional window Zoom on Option-click",
          "ko": "（NSWindow.ButtonType.zoomButton）：，，Option"
        }
      },
      {
        "id": "dirty-document",
        "name": {
          "en": "Dirty-document dot",
          "ko": "Dirty-document dot"
        },
        "api": "NSWindow.isDocumentEdited",
        "description": {
          "en": "The dark dot replacing the close button's x marks a document with unsaved changes.",
          "ko": "The dark dot replacing the close button's x marks a document with unsaved changes."
        },
        "prompt": {
          "en": "the dirty-document dot (NSWindow.isDocumentEdited): the dark center mark inside the red close button indicating unsaved changes",
          "ko": "（NSWindow.isDocumentEdited）：，"
        }
      }
    ],
    "prompt": {
      "en": "Use the standard Traffic Lights from NSWindow.standardWindowButton(_:), preserving their native spacing, hover symbols, and the green button’s system-provided full-screen and window-arrangement behavior. Obtain the green control as .zoomButton and use NSWindow.toggleFullScreen(_:) only when explicitly invoking full screen; do not substitute custom circles.",
      "ko": "NSWindow.standardWindowButton(_:) ，、，。 .zoomButton ， NSWindow.toggleFullScreen(_:)；。"
    },
    "debugPrompt": {
      "en": "Debug my macOS traffic lights (NSWindow.standardWindowButton). Rule out: buttons missing after changing styleMask or using borderless windows; hover glyphs gone because a custom titlebar accessory intercepts tracking; the green button zooming when you expected full screen (option-click zooms); repositioned buttons drifting after full-screen transitions because the themed frame re-lays them out. The symptom:",
      "ko": "macOS （NSWindow.standardWindowButton）。： styleMask ； titlebar accessory ，；（Option ）；。："
    },
    "relatedSlugs": [
      "toolbar",
      "focus-ring",
      "panel"
    ]
  },
  {
    "slug": "vibrancy",
    "platform": "macos",
    "name": {
      "en": "Visual Effect Material (Vibrancy)",
      "ko": "비주얼 이펙트 재질 (Vibrancy)"
    },
    "tagline": {
      "en": "The adaptive translucent background used behind macOS sidebars, menus, and panels",
      "ko": "macOS 、"
    },
    "description": {
      "en": "A visual effect material supplies the adaptive translucent background seen behind macOS sidebars, menus, and panels. NSVisualEffectView chooses the background effect through its Material and BlendingMode. Vibrancy is the related foreground treatment that increases contrast against that material; standard AppKit controls enable it where appropriate.",
      "ko": "macOS 、。NSVisualEffectView Material BlendingMode 。Vibrancy ，； AppKit 。"
    },
    "aka": {
      "en": [
        "visual effect material",
        "frosted glass",
        "translucent material",
        "blur material"
      ],
      "ko": [
        "visual effect material",
        "frosted glass",
        "translucent material",
        "blur material"
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
      "ko": [
        "the frosted glass background behind a mac sidebar",
        "translucent blurred panel that shows colors through it",
        "see through material behind menus and huds",
        "mac blur effect that adapts to the wallpaper",
        "glassy background behind the window controls"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSVisualEffectView",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSVisualEffectView.Material",
        "note": null
      },
      {
        "framework": "AppKit",
        "symbol": "NSVisualEffectView.BlendingMode",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "Material",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "material-layer",
        "name": {
          "en": "Material layer",
          "ko": "Material layer"
        },
        "api": "NSVisualEffectView.Material",
        "description": {
          "en": "“The frosted glass background behind the panel” is the material layer.",
          "ko": "“The frosted glass background behind the panel” is the material layer."
        },
        "prompt": {
          "en": "an NSVisualEffectView.Material layer providing the adaptive translucent background for the surface",
          "ko": "NSVisualEffectView.Material ，"
        }
      },
      {
        "id": "vibrant-foreground",
        "name": {
          "en": "Vibrant foreground",
          "ko": "Vibrancy"
        },
        "api": "NSVisualEffectView.allowsVibrancy",
        "description": {
          "en": "“The text and icons that adapt against the glass” are the vibrant foreground.",
          "ko": "“” vibrancy 。"
        },
        "prompt": {
          "en": "the NSVisualEffectView.allowsVibrancy foreground treatment that keeps controls legible over the material",
          "ko": "NSVisualEffectView.allowsVibrancy ，"
        }
      }
    ],
    "prompt": {
      "en": "Use an NSVisualEffectView for this Visual Effect Material background (SwiftUI: Material). Choose NSVisualEffectView.Material by semantic purpose and set the appropriate BlendingMode; let standard controls supply vibrancy automatically instead of recreating the effect with a fixed blur and opacity.",
      "ko": "NSVisualEffectView （SwiftUI：Material）。 NSVisualEffectView.Material， BlendingMode； vibrancy，。"
    },
    "debugPrompt": {
      "en": "Debug my macOS vibrancy (NSVisualEffectView). Rule out: the wrong material for the surface (sidebar, menu, popover, hudWindow are distinct); blendingMode withinWindow when behindWindow was intended so nothing shows through; vibrant text/controls dead because they are not descendants of the effect view; everything going grey when the window deactivates via state followsWindowActiveState. The symptom:",
      "ko": "macOS vibrancy（NSVisualEffectView）。：（sidebar、menu、popover、hudWindow ）； behindWindow withinWindow，； vibrancy ，；state followsWindowActiveState 。："
    },
    "relatedSlugs": [
      "sidebar",
      "panel",
      "popover",
      "menu-bar-extra"
    ]
  },
  {
    "slug": "toast",
    "platform": "web",
    "name": {
      "en": "Toast (Snackbar)",
      "ko": "토스트 알림 (Toast / Snackbar)"
    },
    "tagline": {
      "en": "A brief, non-blocking message that appears after an action",
      "ko": "A brief, non-blocking message that appears after an action"
    },
    "description": {
      "en": "A toast is a compact, non-modal status message that appears in a screen corner after an action and dismisses automatically. It confirms transient outcomes such as saving or copying without interrupting the workflow. Unlike a notification banner, it does not occupy a persistent place in the page layout or demand acknowledgement.",
      "ko": "Toast ，，。、，。，，。"
    },
    "aka": {
      "en": [
        "snackbar",
        "status toast",
        "in-app notification"
      ],
      "ko": [
        "snackbar",
        "status toast",
        "in-app notification"
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
      "ko": [
        "the little message that pops up in the corner",
        "confirmation that disappears by itself",
        "saved successfully popup",
        "temporary message after clicking a button",
        "small alert at the bottom of the screen"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "role=\"status\"",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Toaster",
        "note": null
      },
      {
        "framework": "Sonner",
        "symbol": "toast()",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-live=\"polite\"",
        "note": {
          "en": "announces non-urgent updates",
          "ko": "announces non-urgent updates"
        }
      }
    ],
    "parts": [
      {
        "id": "toast-viewport",
        "name": {
          "en": "Toast viewport",
          "ko": "Toast viewport"
        },
        "api": "Toaster",
        "description": {
          "en": "“The corner where all the little messages stack” is the toast viewport.",
          "ko": "“” Toast 。"
        },
        "prompt": {
          "en": "the shadcn/ui Toaster viewport anchored to a consistent screen corner for the toast stack",
          "ko": "shadcn/ui Toaster ，， Toast"
        }
      },
      {
        "id": "status-message",
        "name": {
          "en": "Status message",
          "ko": "Status message"
        },
        "api": "role=\"status\"",
        "description": {
          "en": "“The saved successfully text that appears by itself” is the toast's status message.",
          "ko": "“‘’” Toast 。"
        },
        "prompt": {
          "en": "the concise role=\"status\" message inside the toast, announced politely without moving focus",
          "ko": "Toast role=\"status\" ， polite"
        }
      },
      {
        "id": "toast-action",
        "name": {
          "en": "Toast action",
          "ko": "Toast action"
        },
        "api": "ToastAction",
        "description": {
          "en": "“The Undo button inside the temporary message” is the toast action.",
          "ko": "“‘’” Toast 。"
        },
        "prompt": {
          "en": "a shadcn/ui ToastAction inside the toast for one safe, time-sensitive follow-up such as Undo",
          "ko": "Toast shadcn/ui ToastAction，，"
        }
      }
    ],
    "prompt": {
      "en": "Show a Toast (Snackbar) through a role=\"status\" live region after the action succeeds. Place it in a consistent corner without blocking the page, auto-dismiss only nonessential messages after a short delay, and pause that timer while the toast is hovered or contains keyboard focus.",
      "ko": "， role=\"status\" Toast（Snackbar）。；， Toast 。"
    },
    "debugPrompt": {
      "en": "Debug my toast (aria-live region, sonner). Rule out: no aria-live region so screen readers never announce it; the auto-dismiss timer not pausing on hover/focus; stacked toasts overlapping instead of shifting; the exit animation racing the removal so it snaps; toasts rendering under modals because of z-index order. The symptom:",
      "ko": "Toast（aria-live 、sonner）。： aria-live ，；； Toast ；；z-index Toast 。："
    },
    "relatedSlugs": [
      "scrim",
      "empty-state",
      "popover-dropdown-tooltip",
      "spring"
    ]
  },
  {
    "slug": "dialog-drawer-sheet",
    "platform": "web",
    "name": {
      "en": "Modal Dialog vs. Drawer vs. Sheet",
      "ko": "모달 대화상자 및 드로어 (Modal Dialog & Drawer)"
    },
    "tagline": {
      "en": "Three overlay patterns distinguished by placement, scope, and task depth",
      "ko": "Three overlay patterns distinguished by placement, scope, and task depth"
    },
    "description": {
      "en": "A modal dialog is centered, blocks the underlying interface, and suits a short decision or focused task. A drawer slides from a side edge and preserves more visual context for browsing or editing. A sheet is edge-attached too, most often rising from the bottom for compact actions or mobile layouts; all three need explicit dismissal and managed focus when modal.",
      "ko": "，，。，，。，，；。"
    },
    "aka": {
      "en": [
        "modal",
        "side panel",
        "slide-over",
        "bottom sheet"
      ],
      "ko": [
        "modal",
        "side panel",
        "slide-over",
        "bottom sheet"
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
      "ko": [
        "the popup in the middle that blocks the page",
        "the panel that slides in from the side",
        "the tray that comes up from the bottom",
        "an overlay for editing without leaving the page",
        "the floating box with a dark background behind it"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<dialog>",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "HTMLDialogElement.showModal()",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"dialog\"",
        "note": null
      },
      {
        "framework": "Radix",
        "symbol": "Dialog",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Sheet",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "modal-surface",
        "name": {
          "en": "Modal surface",
          "ko": "Modal surface"
        },
        "api": "<dialog>",
        "description": {
          "en": "“The actual floating box in the middle” is the modal surface.",
          "ko": "“The actual floating box in the middle” is the modal surface."
        },
        "prompt": {
          "en": "the <dialog> modal surface centered in the top layer above its backdrop",
          "ko": "、 ::backdrop <dialog>"
        }
      },
      {
        "id": "scrim",
        "name": {
          "en": "Scrim",
          "ko": "（Scrim）"
        },
        "api": "::backdrop",
        "description": {
          "en": "“The dark see-through background behind the popup” is the scrim.",
          "ko": "“The dark see-through background behind the popup” is the scrim."
        },
        "prompt": {
          "en": "the <dialog>::backdrop scrim covering and dimming the page behind the modal surface",
          "ko": "<dialog>::backdrop"
        }
      }
    ],
    "prompt": {
      "en": "Use a Modal Dialog built with <dialog> and open it with HTMLDialogElement.showModal() so the browser places it in the top layer, makes the page behind it inert, provides ::backdrop, and supports Escape. Use a side Drawer for contextual editing or a bottom Sheet for compact/mobile actions; add a scrim and modal focus management only when those surfaces are actually modal.",
      "ko": "<dialog> ， HTMLDialogElement.showModal() ，、 inert、 ::backdrop Escape 。（Drawer），（Sheet）；，（scrim）。"
    },
    "debugPrompt": {
      "en": "Debug my dialog/drawer/sheet (HTMLDialogElement, Radix Dialog, vaul). Rule out: show() used where showModal() was needed so there is no backdrop and no inert background; body scroll not locked so the page scrolls behind; focus not returned to the trigger on close; Escape closing it because onCancel is unhandled when you wanted it blocked; a nested dialog closing its parent. The symptom:",
      "ko": "//（HTMLDialogElement、Radix Dialog、vaul）。： showModal() show()， ::backdrop、 inert；body ，；； Escape onCancel，；。："
    },
    "relatedSlugs": [
      "scrim",
      "popover-dropdown-tooltip",
      "sheet",
      "sidebar",
      "lightbox",
      "hamburger-menu"
    ]
  },
  {
    "slug": "popover-dropdown-tooltip",
    "platform": "web",
    "name": {
      "en": "Popover vs. Dropdown Menu vs. Tooltip",
      "ko": "팝오버 및 툴팁 (Popover & Tooltip)"
    },
    "tagline": {
      "en": "Three anchored overlays with different triggers, content, and dismissal rules",
      "ko": "Three anchored overlays with different triggers, content, and dismissal rules"
    },
    "description": {
      "en": "A popover opens on click and can contain rich text, controls, or forms; it stays until explicitly or externally dismissed. A dropdown menu also opens on click, but presents a keyboard-navigable list of actions and normally closes after selection. A tooltip is a brief, non-interactive label that appears on hover or keyboard focus and disappears when that trigger is left or blurred.",
      "ko": "（popover），、，。，，。、，，。"
    },
    "aka": {
      "en": [
        "popup",
        "menu",
        "hover hint",
        "toggletip"
      ],
      "ko": [
        "popup",
        "menu",
        "hover hint",
        "toggletip"
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
      "ko": [
        "the little box attached to a button",
        "the list that opens under a menu button",
        "the label that appears when you hover",
        "a popup with controls inside it",
        "the tiny explanation next to an icon"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "popover",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"tooltip\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"menu\"",
        "note": null
      },
      {
        "framework": "Radix",
        "symbol": "Popover",
        "note": null
      },
      {
        "framework": "Radix",
        "symbol": "DropdownMenu",
        "note": null
      },
      {
        "framework": "Radix",
        "symbol": "Tooltip",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "overlay-trigger",
        "name": {
          "en": "Overlay trigger",
          "ko": "Overlay trigger"
        },
        "api": "popovertarget",
        "description": {
          "en": "“The button the little box is attached to” is the overlay trigger.",
          "ko": "“The button the little box is attached to” is the overlay trigger."
        },
        "prompt": {
          "en": "the popovertarget overlay trigger that owns and anchors the opened surface",
          "ko": "popovertarget"
        }
      },
      {
        "id": "menu-selection-highlight",
        "name": {
          "en": "Menu selection highlight",
          "ko": "Menu selection highlight"
        },
        "api": "role=\"menuitem\"",
        "description": {
          "en": "“The bar behind the dropdown action the arrows are on” is the menu selection highlight.",
          "ko": "“The bar behind the dropdown action the arrows are on” is the menu selection highlight."
        },
        "prompt": {
          "en": "the selection highlight behind the active role=\"menuitem\" in a keyboard-navigable dropdown menu",
          "ko": "， role=\"menuitem\""
        }
      },
      {
        "id": "tooltip-arrow",
        "name": {
          "en": "Tooltip arrow",
          "ko": "Tooltip arrow"
        },
        "api": "Tooltip.Arrow",
        "description": {
          "en": "“The tiny point aiming the hover label at the icon” is the tooltip arrow.",
          "ko": "“The tiny point aiming the hover label at the icon” is the tooltip arrow."
        },
        "prompt": {
          "en": "the Radix Tooltip.Arrow pointing from the role=\"tooltip\" hint back to its trigger",
          "ko": "role=\"tooltip\" Radix Tooltip.Arrow"
        }
      }
    ],
    "prompt": {
      "en": "Use the HTML popover attribute for the click-triggered rich overlay, role=\"menu\" for the keyboard-navigable action list, and role=\"tooltip\" only for a brief non-interactive hover or focus hint. Link the tooltip from its trigger with aria-describedby, keep every overlay anchored to its trigger, and implement the correct Escape, outside-click, and focus-dismissal behavior for each pattern.",
      "ko": "HTML popover ， role=\"menu\"，、 role=\"tooltip\"。 aria-describedby ，， Escape、。"
    },
    "debugPrompt": {
      "en": "Debug my popover/dropdown/tooltip (Popover API, Radix, floating-ui). Rule out: the wrong primitive — tooltips are hover+focus, never interactive content; the panel clipped by an overflow ancestor instead of portaled to body or using the top-layer Popover API; flip/shift middleware missing so it overflows at viewport edges; outside-click closing it before the inside click registers. The symptom:",
      "ko": "//（Popover API、Radix、floating-ui）。：——，； overflow ， portal body Popover API； flip/shift ，；。："
    },
    "relatedSlugs": [
      "dialog-drawer-sheet",
      "hover-card",
      "context-menu",
      "popover"
    ]
  },
  {
    "slug": "scrim",
    "platform": "web",
    "name": {
      "en": "Scrim (Backdrop / Overlay)",
      "ko": "스크림 오버레이 (Scrim)"
    },
    "tagline": {
      "en": "The translucent layer that separates a modal surface from the page",
      "ko": "The translucent layer that separates a modal surface from the page"
    },
    "description": {
      "en": "A scrim is the translucent full-area layer between an open modal surface and the content behind it. It lowers background contrast, prevents accidental interaction, and makes the active layer obvious. Native HTML dialogs expose this layer as the ::backdrop pseudo-element.",
      "ko": "。、，。 HTML ::backdrop 。"
    },
    "aka": {
      "en": [
        "backdrop",
        "overlay",
        "modal overlay"
      ],
      "ko": [
        "backdrop",
        "overlay",
        "modal overlay"
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
      "ko": [
        "the dark see-through layer behind a popup",
        "the page dimming when a modal opens",
        "the grey overlay behind a dialog",
        "the layer that blocks clicks behind the panel",
        "the faded background under a popup",
        "the greyed out background behind a popup"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "::backdrop",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "<dialog>",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "backdrop-filter",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "dim-layer",
        "name": {
          "en": "Dim layer",
          "ko": "Dim layer"
        },
        "api": "::backdrop",
        "description": {
          "en": "“The dark see-through layer behind the popup” is the scrim's dim layer.",
          "ko": "“The dark see-through layer behind the popup” is the scrim's dim layer."
        },
        "prompt": {
          "en": "the <dialog>::backdrop dim layer covering the entire viewport behind the modal",
          "ko": "<dialog>::backdrop"
        }
      },
      {
        "id": "backdrop-blur",
        "name": {
          "en": "Backdrop blur",
          "ko": "Backdrop blur"
        },
        "api": "backdrop-filter",
        "description": {
          "en": "“The page going soft behind the dark overlay” is the backdrop blur.",
          "ko": "“The page going soft behind the dark overlay” is the backdrop blur."
        },
        "prompt": {
          "en": "a CSS backdrop-filter blur applied to the scrim so the underlying page softens without blurring the modal",
          "ko": "CSS backdrop-filter ，"
        }
      },
      {
        "id": "light-dismiss-area",
        "name": {
          "en": "Light-dismiss area",
          "ko": "Light-dismiss area"
        },
        "api": "HTMLDialogElement.close()",
        "description": {
          "en": "“The outside area I click to close the modal” is the light-dismiss area.",
          "ko": "“The outside area I click to close the modal” is the light-dismiss area."
        },
        "prompt": {
          "en": "the scrim's light-dismiss area calling HTMLDialogElement.close() only when the click lands outside the dialog surface",
          "ko": "： HTMLDialogElement.close()"
        }
      }
    ],
    "prompt": {
      "en": "Add a scrim behind the modal using the <dialog>::backdrop pseudo-element. It should cover the viewport, dim and optionally blur the page, intercept pointer input, and fade reversibly with the modal.",
      "ko": "<dialog>::backdrop 。，（），，。"
    },
    "debugPrompt": {
      "en": "Debug my scrim/backdrop (::backdrop, fixed overlay). Rule out: scrolling chaining through to the page — set overscroll-behavior contain and lock body scroll; the scrim stacking under content because a transformed ancestor created its own stacking context; pointer-events still active while it fades out so it eats clicks invisibly; the dialog ::backdrop unstylable because the dialog was opened with show() not showModal(). The symptom:",
      "ko": "（::backdrop、fixed ）。：—— overscroll-behavior: contain body ； transform ，； pointer-events ，； show() showModal() ， ::backdrop 。："
    },
    "relatedSlugs": [
      "dialog-drawer-sheet",
      "popover-dropdown-tooltip",
      "vibrancy",
      "lightbox",
      "hamburger-menu"
    ]
  },
  {
    "slug": "skeleton-spinner",
    "platform": "web",
    "name": {
      "en": "Skeleton vs. Spinner",
      "ko": "스켈레톤 및 스피너 (Skeleton & Spinner)"
    },
    "tagline": {
      "en": "Two loading indicators for predictable layouts and indeterminate waits",
      "ko": "Two loading indicators for predictable layouts and indeterminate waits"
    },
    "description": {
      "en": "A skeleton previews the geometry of content that has not arrived, reducing layout shift and making a predictable page feel faster. A spinner communicates an indeterminate wait when the eventual shape is unknown or the operation is detached from a specific layout. Neither should remain after the result or error state is available.",
      "ko": "（Skeleton），，。（Spinner）：，。，。"
    },
    "aka": {
      "en": [
        "skeleton screen",
        "placeholder loader",
        "loading spinner",
        "throbber"
      ],
      "ko": [
        "skeleton screen",
        "placeholder loader",
        "loading spinner",
        "throbber"
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
      "ko": [
        "the grey shapes while content loads",
        "the pulsing placeholder version of a card",
        "the spinning circle while waiting",
        "fake text lines shown before data arrives",
        "loading animation in an empty area"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "aria-busy=\"true\"",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Skeleton",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"status\"",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "skeleton-block",
        "name": {
          "en": "Skeleton block",
          "ko": "Skeleton block"
        },
        "api": "Skeleton",
        "description": {
          "en": "“The grey shape standing in for a card or image” is a skeleton block.",
          "ko": "“The grey shape standing in for a card or image” is a skeleton block."
        },
        "prompt": {
          "en": "a shadcn/ui Skeleton block matching the final content's exact geometry to prevent layout shift",
          "ko": "shadcn/ui Skeleton ，，"
        }
      },
      {
        "id": "skeleton-line",
        "name": {
          "en": "Skeleton text line",
          "ko": "Skeleton text line"
        },
        "api": "Skeleton",
        "description": {
          "en": "“The fake grey line where text will appear” is a skeleton text line.",
          "ko": "“The fake grey line where text will appear” is a skeleton text line."
        },
        "prompt": {
          "en": "a shadcn/ui Skeleton text line with varied natural widths matching the eventual copy layout",
          "ko": "shadcn/ui Skeleton ，，"
        }
      },
      {
        "id": "shimmer-sweep",
        "name": {
          "en": "Shimmer sweep",
          "ko": "（Shimmer）"
        },
        "api": "@keyframes",
        "description": {
          "en": "“The little glow moving across the placeholder” is the shimmer sweep.",
          "ko": "“The little glow moving across the placeholder” is the shimmer sweep."
        },
        "prompt": {
          "en": "a subtle CSS @keyframes shimmer sweep traveling across the skeleton blocks while aria-busy remains true",
          "ko": "CSS @keyframes ， aria-busy true"
        }
      },
      {
        "id": "spinner-track",
        "name": {
          "en": "Spinner track and arc",
          "ko": "Spinner track and arc"
        },
        "api": "role=\"status\"",
        "description": {
          "en": "“The faint circle and the darker bit spinning around it” are the spinner track and active arc.",
          "ko": "“The faint circle and the darker bit spinning around it” are the spinner track and active arc."
        },
        "prompt": {
          "en": "a role=\"status\" indeterminate spinner with a quiet circular track and one contrasting rotating arc",
          "ko": "role=\"status\" ：，"
        }
      }
    ],
    "prompt": {
      "en": "Mark the loading region aria-busy=\"true\" and use a skeleton when the final card layout is known, preserving its geometry while data arrives. Use a spinner with role=\"status\" when the wait has no meaningful content shape, and replace either indicator when loading completes.",
      "ko": "aria-busy=\"true\"；，（Skeleton），；， role=\"status\" （Spinner）；，。"
    },
    "debugPrompt": {
      "en": "Debug my skeleton/spinner (loading placeholders). Rule out: skeleton flashing for sub-200ms loads — add an appearance delay; the shimmer looping forever because the error state never replaces it; skeleton shapes not matching real content so the swap causes layout shift; dozens of simultaneously animating placeholders janking scroll. The symptom:",
      "ko": "/（）。： 200ms ——；（shimmer），；，（layout shift）；。："
    },
    "relatedSlugs": [
      "empty-state",
      "toast",
      "focus-ring-web",
      "text-scramble"
    ]
  },
  {
    "slug": "combobox",
    "platform": "web",
    "name": {
      "en": "Combobox (Autocomplete / Typeahead)",
      "ko": "콤보박스 (Combobox)"
    },
    "tagline": {
      "en": "A text input paired with a filtered list of selectable suggestions",
      "ko": "A text input paired with a filtered list of selectable suggestions"
    },
    "description": {
      "en": "A combobox combines an editable text field with a popup list of matching values. Typing narrows the choices while arrow keys move the active option and Enter commits it. Unlike a plain select, it supports searching or free-form input depending on the product rules.",
      "ko": "。，，Enter 。，，。"
    },
    "aka": {
      "en": [
        "autocomplete",
        "typeahead",
        "search select",
        "editable dropdown"
      ],
      "ko": [
        "autocomplete",
        "typeahead",
        "search select",
        "editable dropdown"
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
      "ko": [
        "the input that suggests options as you type",
        "a searchable dropdown field",
        "the text box with matching results underneath",
        "a select where you can type to filter",
        "the address field that autocompletes"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "role=\"combobox\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"listbox\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-expanded",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-controls",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-activedescendant",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "<datalist>",
        "note": {
          "en": "a native limited alternative",
          "ko": "a native limited alternative"
        }
      }
    ],
    "parts": [
      {
        "id": "combobox-input",
        "name": {
          "en": "Combobox input",
          "ko": "Combobox input"
        },
        "api": "role=\"combobox\"",
        "description": {
          "en": "“The searchable dropdown field I type into” is the combobox input.",
          "ko": "“The searchable dropdown field I type into” is the combobox input."
        },
        "prompt": {
          "en": "the role=\"combobox\" text input controlling the suggestions popup and retaining DOM focus",
          "ko": "role=\"combobox\" ， DOM"
        }
      },
      {
        "id": "listbox-popup",
        "name": {
          "en": "Listbox popup",
          "ko": "（Listbox）"
        },
        "api": "role=\"listbox\"",
        "description": {
          "en": "“The matching results underneath the field” are the listbox popup.",
          "ko": "“The matching results underneath the field” are the listbox popup."
        },
        "prompt": {
          "en": "the role=\"listbox\" suggestions popup anchored directly beneath the combobox input",
          "ko": "role=\"listbox\" ，"
        }
      },
      {
        "id": "active-option",
        "name": {
          "en": "Active option",
          "ko": "Active option"
        },
        "api": "aria-activedescendant",
        "description": {
          "en": "“The result highlighted as I press the arrow keys” is the active option.",
          "ko": "“The result highlighted as I press the arrow keys” is the active option."
        },
        "prompt": {
          "en": "the aria-activedescendant active option, visibly highlighted while DOM focus remains in the combobox input",
          "ko": "aria-activedescendant ，，DOM"
        }
      },
      {
        "id": "selected-option-checkmark",
        "name": {
          "en": "Selected-option checkmark",
          "ko": "Selected-option checkmark"
        },
        "api": "aria-selected",
        "description": {
          "en": "“The checkmark next to the choice I already picked” is the selected-option indicator.",
          "ko": "“The checkmark next to the choice I already picked” is the selected-option indicator."
        },
        "prompt": {
          "en": "the checkmark beside a role=\"option\" with aria-selected=\"true\" in the combobox listbox",
          "ko": "aria-selected=\"true\" role=\"option\""
        }
      }
    ],
    "prompt": {
      "en": "Build a labelled Combobox with role=\"combobox\" and a controlled role=\"listbox\" popup. Keep aria-expanded and aria-controls in sync, give each result role=\"option\", retain DOM focus in the input with aria-activedescendant, and support Arrow keys, Enter, and Escape without autofocusing on mount.",
      "ko": "（Combobox）： role=\"combobox\"， role=\"listbox\"。 aria-expanded aria-controls ， role=\"option\"；DOM ， aria-activedescendant ；、Enter、Escape，。"
    },
    "debugPrompt": {
      "en": "Debug my combobox (role=combobox, aria-activedescendant, cmdk/Radix). Rule out: the listbox closing on blur before the option click lands — handle selection on pointerdown or check relatedTarget; the highlighted index not resetting when the filter changes; aria-activedescendant pointing at a filtered-out option id; the mobile keyboard covering the list because nothing scrolls the field into view. The symptom:",
      "ko": "（role=combobox、aria-activedescendant、cmdk/Radix）。：blur ，—— pointerdown ， relatedTarget；；aria-activedescendant option id；，。："
    },
    "relatedSlugs": [
      "command-palette",
      "popup-pulldown-combo",
      "popover-dropdown-tooltip"
    ]
  },
  {
    "slug": "command-palette",
    "platform": "web",
    "name": {
      "en": "Command Palette",
      "ko": "커맨드 팔레트 (Command Palette)"
    },
    "tagline": {
      "en": "A keyboard-first searchable launcher for actions and navigation",
      "ko": "A keyboard-first searchable launcher for actions and navigation"
    },
    "description": {
      "en": "A command palette is a keyboard-first overlay that searches actions, pages, and objects from one place. It commonly opens with ⌘K or Ctrl+K, highlights one result at a time, and executes the selected command with Enter. It is broader than a combobox because it launches heterogeneous commands rather than choosing one field value.",
      "ko": "，、。 ⌘K Ctrl+K ，，Enter 。：，。"
    },
    "aka": {
      "en": [
        "command menu",
        "quick actions",
        "launcher",
        "command bar"
      ],
      "ko": [
        "command menu",
        "quick actions",
        "launcher",
        "command bar"
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
      "ko": [
        "the command k menu",
        "the searchable list of app actions",
        "the quick launcher in the middle of the screen",
        "the keyboard popup for jumping anywhere",
        "the vscode style command search",
        "the cmd k popup"
      ]
    },
    "api": [
      {
        "framework": "shadcn/ui",
        "symbol": "Command",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"dialog\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"combobox\"",
        "note": null
      },
      {
        "framework": "Radix",
        "symbol": "Dialog",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "command-input",
        "name": {
          "en": "Command input",
          "ko": "Command input"
        },
        "api": "CommandInput",
        "description": {
          "en": "“The search field at the top of the ⌘K menu” is the command input.",
          "ko": "「⌘K 」。"
        },
        "prompt": {
          "en": "the shadcn/ui CommandInput at the top of the command palette, filtering commands as the user types",
          "ko": "shadcn/ui CommandInput，"
        }
      },
      {
        "id": "command-group",
        "name": {
          "en": "Command group",
          "ko": "Command group"
        },
        "api": "CommandGroup",
        "description": {
          "en": "“The labeled section grouping similar actions” is a command group.",
          "ko": "“The labeled section grouping similar actions” is a command group."
        },
        "prompt": {
          "en": "a shadcn/ui CommandGroup with a quiet heading above a related set of command items",
          "ko": "shadcn/ui CommandGroup，"
        }
      },
      {
        "id": "active-command",
        "name": {
          "en": "Active command",
          "ko": "Active command"
        },
        "api": "CommandItem",
        "description": {
          "en": "“The result with the highlight that Enter will run” is the active command.",
          "ko": "「、 Enter 」。"
        },
        "prompt": {
          "en": "the active shadcn/ui CommandItem with a full-row selection highlight showing what Enter will execute",
          "ko": "shadcn/ui CommandItem，， Enter"
        }
      },
      {
        "id": "command-shortcut",
        "name": {
          "en": "Command shortcut",
          "ko": "Command shortcut"
        },
        "api": "CommandShortcut",
        "description": {
          "en": "“The ⌘ letters aligned on the right of an action” are the command shortcut.",
          "ko": "「 ⌘ 」。"
        },
        "prompt": {
          "en": "the shadcn/ui CommandShortcut aligned at the trailing edge of its command item",
          "ko": "shadcn/ui CommandShortcut，"
        }
      }
    ],
    "prompt": {
      "en": "Add a Command Palette using the shadcn/ui Command component inside a role=\"dialog\", opened by ⌘K or Ctrl+K. Filter actions as the user types, support arrow-key selection and Enter, and restore focus to the invoking control on dismissal.",
      "ko": "shadcn/ui Command ， role=\"dialog\" ， ⌘K Ctrl+K 。， Enter ，。"
    },
    "debugPrompt": {
      "en": "Debug my command palette (cmdk, Dialog + Command). Rule out: the cmd/ctrl-K listener attached to the wrong scope or eaten by the browser; the filter state persisting from the previous open — reset on open; focus escaping the dialog because the trap ignores portaled content; keydown firing during IME composition (check isComposing); the palette rendered under a higher stacking context. The symptom:",
      "ko": "（cmdk、Dialog + Command）。：⌘/Ctrl+K ，；——； dialog， portal ；IME keydown（ isComposing）；。："
    },
    "relatedSlugs": [
      "combobox",
      "dialog-drawer-sheet",
      "focus-ring-web",
      "toolbar"
    ]
  },
  {
    "slug": "accordion",
    "platform": "web",
    "name": {
      "en": "Accordion (Disclosure)",
      "ko": "아코디언 (Accordion)"
    },
    "tagline": {
      "en": "Stacked sections whose headings expand and collapse their content",
      "ko": "Stacked sections whose headings expand and collapse their content"
    },
    "description": {
      "en": "An accordion is a vertical stack of headings that disclose or hide associated content. Opening a section expands it in place and moves the sections below, with either one or several panels allowed open depending on the pattern. Native details and summary elements provide the basic disclosure semantics.",
      "ko": "，。，；，。 details summary 。"
    },
    "aka": {
      "en": [
        "disclosure",
        "expandable sections",
        "collapse",
        "expander"
      ],
      "ko": [
        "disclosure",
        "expandable sections",
        "collapse",
        "expander"
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
      "ko": [
        "the list where rows open to show more",
        "expand and collapse sections",
        "the faq with clickable questions",
        "stacked panels with little chevrons",
        "the section that pushes content down when opened"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<details>",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "<summary>",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "name",
        "note": {
          "en": "groups details elements so only one is open",
          "ko": "details ，"
        }
      },
      {
        "framework": "Radix",
        "symbol": "Accordion",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "disclosure-trigger",
        "name": {
          "en": "Disclosure trigger",
          "ko": "Disclosure trigger"
        },
        "api": "<summary>",
        "description": {
          "en": "“The FAQ question you click to open the answer” is the disclosure trigger.",
          "ko": "「FAQ 」。"
        },
        "prompt": {
          "en": "the <summary> disclosure trigger spanning the accordion heading row",
          "ko": "<summary> ，"
        }
      },
      {
        "id": "disclosure-indicator",
        "name": {
          "en": "Disclosure indicator",
          "ko": "Disclosure indicator"
        },
        "api": "<summary>::marker",
        "description": {
          "en": "“The little chevron that turns when the row opens” is the disclosure indicator.",
          "ko": "“The little chevron that turns when the row opens” is the disclosure indicator."
        },
        "prompt": {
          "en": "the <summary>::marker disclosure indicator rotating between the closed and open states",
          "ko": "<summary>::marker ，"
        }
      },
      {
        "id": "disclosure-panel",
        "name": {
          "en": "Disclosure panel",
          "ko": "Disclosure panel"
        },
        "api": "<details>",
        "description": {
          "en": "“The answer area that pushes everything down” is the disclosure panel.",
          "ko": "“The answer area that pushes everything down” is the disclosure panel."
        },
        "prompt": {
          "en": "the <details> disclosure panel revealed directly beneath its summary heading",
          "ko": "<details> ， summary"
        }
      }
    ],
    "prompt": {
      "en": "Build an Accordion from <details> and <summary> elements. Give grouped <details> elements the same name when only one section may be open, preserve native keyboard behavior, and animate the revealed panel without adding redundant aria-expanded; use aria-expanded only for a fully custom disclosure primitive.",
      "ko": "<details> <summary> 。， <details> name；；， aria-expanded—— aria-expanded。"
    },
    "debugPrompt": {
      "en": "Debug my accordion (details/summary, Radix Accordion). Rule out: height auto refusing to animate — animate grid-template-rows 0fr to 1fr or use interpolate-size; single vs multiple type letting two panels open when one was intended; the default disclosure marker still rendering next to a custom icon; focus landing inside a closed panel because contents were hidden with opacity instead of display. The symptom:",
      "ko": "（details/summary、Radix Accordion）。：height: auto —— grid-template-rows 0fr 1fr ， interpolate-size；single multiple ，；；， opacity display 。："
    },
    "relatedSlugs": [
      "tabs",
      "disclosure-triangle",
      "sidebar"
    ]
  },
  {
    "slug": "tabs",
    "platform": "web",
    "name": {
      "en": "Tabs",
      "ko": "탭 뷰 (Tabs)"
    },
    "tagline": {
      "en": "A single row of labels that switches one shared content region",
      "ko": "A single row of labels that switches one shared content region"
    },
    "description": {
      "en": "Tabs organize peer views into one shared region, with exactly one tab and panel active at a time. The selected label is visually persistent, often with an underline, and keyboard users move across the tab list with arrow keys. Use them for closely related views, not for a sequential workflow.",
      "ko": "，、。（），。，。"
    },
    "aka": {
      "en": [
        "tabbed interface",
        "tab list",
        "tab bar"
      ],
      "ko": [
        "tabbed interface",
        "tab list",
        "tab bar"
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
      "ko": [
        "the row of labels that switches the panel below",
        "sections with an underline under the active one",
        "clickable headings for changing views",
        "the horizontal switcher above content",
        "browser tab style navigation inside a page"
      ]
    },
    "api": [
      {
        "framework": "ARIA",
        "symbol": "role=\"tablist\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"tab\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"tabpanel\"",
        "note": null
      },
      {
        "framework": "Radix",
        "symbol": "Tabs",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "tab-list",
        "name": {
          "en": "Tab list",
          "ko": "Tab list"
        },
        "api": "role=\"tablist\"",
        "description": {
          "en": "“The whole row of view-switching labels” is the tab list.",
          "ko": "“The whole row of view-switching labels” is the tab list."
        },
        "prompt": {
          "en": "the role=\"tablist\" row containing the peer tab labels as one keyboard-navigation unit",
          "ko": "role=\"tablist\" ，，"
        }
      },
      {
        "id": "active-tab-indicator",
        "name": {
          "en": "Active-tab indicator",
          "ko": "Active-tab indicator"
        },
        "api": "aria-selected=\"true\"",
        "description": {
          "en": "“The line that moves under the selected label” is the active-tab indicator.",
          "ko": "“The line that moves under the selected label” is the active-tab indicator."
        },
        "prompt": {
          "en": "the active-tab indicator under the role=\"tab\" with aria-selected=\"true\", moving smoothly between labels",
          "ko": "aria-selected=\"true\" role=\"tab\" ，"
        }
      },
      {
        "id": "tab-panel",
        "name": {
          "en": "Tab panel",
          "ko": "Tab panel"
        },
        "api": "role=\"tabpanel\"",
        "description": {
          "en": "“The shared content area that changes below the labels” is the tab panel.",
          "ko": "“The shared content area that changes below the labels” is the tab panel."
        },
        "prompt": {
          "en": "the role=\"tabpanel\" content region linked to its selected tab by aria-labelledby",
          "ko": "role=\"tabpanel\" ， aria-labelledby"
        }
      }
    ],
    "prompt": {
      "en": "Build accessible Tabs with a role=\"tablist\", one role=\"tab\" marked aria-selected=\"true\", and a matching role=\"tabpanel\" connected with aria-controls and aria-labelledby. Keep only the active tab at tabindex=\"0\", move between tabs with Left and Right Arrow, and switch the shared panel without navigating away.",
      "ko": "접근성： role=\"tablist\"， role=\"tab\" aria-selected=\"true\"， role=\"tabpanel\" aria-controls aria-labelledby 。 tabindex=\"0\"，，。"
    },
    "debugPrompt": {
      "en": "Debug my tabs (role=tablist/tab/tabpanel, roving tabindex). Rule out: every tab in the Tab order instead of one roving tabindex with arrow-key movement; panels missing aria-labelledby back-references; the active indicator not moving on resize because its position was measured once; panel state lost on switch because inactive panels unmount when they should hide. The symptom:",
      "ko": "（role=tablist/tab/tabpanel、roving tabindex）。： Tab ， roving tabindex ； aria-labelledby ；，；，，。："
    },
    "relatedSlugs": [
      "accordion",
      "toggle-group",
      "segmented-control"
    ]
  },
  {
    "slug": "badge-chip-pill",
    "platform": "web",
    "name": {
      "en": "Badge vs. Chip vs. Pill vs. Tag",
      "ko": "배지 및 칩 (Badge, Chip & Pill)"
    },
    "tagline": {
      "en": "Compact labels distinguished by meaning, shape, and interactivity",
      "ko": "Compact labels distinguished by meaning, shape, and interactivity"
    },
    "description": {
      "en": "A badge is a tiny count or status marker attached to another object. A chip is a compact interactive token that can be selected, edited, or removed; a pill describes the capsule shape rather than a strict behavior. A tag is usually non-interactive category metadata, so choose the term from its job rather than from rounded corners alone.",
      "ko": "（Badge）。Chip ，、；（Pill）설명，。（Tag）。，。"
    },
    "aka": {
      "en": [
        "token",
        "lozenge",
        "capsule"
      ],
      "ko": [
        "token",
        "lozenge",
        "capsule"
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
      "ko": [
        "the little number bubble on an icon",
        "the rounded label with an x",
        "the capsule shaped status label",
        "the small category label on a card",
        "the removable filter bubble",
        "the little red dot on an icon"
      ]
    },
    "api": [
      {
        "framework": "shadcn/ui",
        "symbol": "Badge",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "<button>",
        "note": {
          "en": "for a removable or selectable chip",
          "ko": "for a removable or selectable chip"
        }
      },
      {
        "framework": "ARIA",
        "symbol": "aria-label",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "badge-anchor",
        "name": {
          "en": "Badge anchor",
          "ko": "Badge anchor"
        },
        "api": "Badge",
        "description": {
          "en": "“The icon the little number bubble sits on” is the badge anchor.",
          "ko": "“The icon the little number bubble sits on” is the badge anchor."
        },
        "prompt": {
          "en": "the shadcn/ui Badge anchor, with the compact count overlapping its parent icon's upper corner",
          "ko": "shadcn/ui Badge ："
        }
      },
      {
        "id": "badge-count",
        "name": {
          "en": "Badge count",
          "ko": "Badge count"
        },
        "api": "Badge",
        "description": {
          "en": "“The tiny number inside the red bubble” is the badge count.",
          "ko": "“The tiny number inside the red bubble” is the badge count."
        },
        "prompt": {
          "en": "the compact count inside a shadcn/ui Badge, using a circular shape for one digit and a capsule for longer counts",
          "ko": "shadcn/ui Badge ：，"
        }
      },
      {
        "id": "chip-remove-button",
        "name": {
          "en": "Chip remove button",
          "ko": "Chip remove button"
        },
        "api": "<button aria-label>",
        "description": {
          "en": "“The little x inside the filter pill” is the chip's remove button.",
          "ko": "「 ×」 chip 。"
        },
        "prompt": {
          "en": "the trailing <button aria-label> remove affordance inside a dismissible chip",
          "ko": "chip <button aria-label>"
        }
      },
      {
        "id": "selected-chip-state",
        "name": {
          "en": "Selected chip state",
          "ko": "Selected chip state"
        },
        "api": "aria-pressed",
        "description": {
          "en": "“The filter pill that stays filled after I click it” is the selected chip state.",
          "ko": "「」 chip 。"
        },
        "prompt": {
          "en": "the aria-pressed selected state of an interactive chip, with a persistent filled treatment",
          "ko": "chip aria-pressed ，"
        }
      }
    ],
    "prompt": {
      "en": "Use a Badge for the compact unread count, a dismissible Chip for the active filter, a fully rounded Pill for short status text, and a Tag for category metadata. Use shadcn/ui Badge for the non-interactive labels and give any icon-only remove button an aria-label.",
      "ko": "Badge（）， Chip， Pill（）， Tag（）。 shadcn/ui Badge； aria-label。"
    },
    "debugPrompt": {
      "en": "Debug my badge/chip/pill. Rule out: unbounded counts blowing the layout instead of capping at 99+; the pill wrapping mid-label without white-space nowrap; a chip delete target far smaller than 24px so taps miss; low-contrast fills failing in dark mode because the colors were not themed as a pair. The symptom:",
      "ko": "Badge/Chip/Pill。：，—— 99 99+；—— white-space: nowrap；chip 24px，；，。："
    },
    "relatedSlugs": [
      "dock-badge",
      "toggle-group",
      "switch-checkbox-radio"
    ]
  },
  {
    "slug": "breadcrumbs",
    "platform": "web",
    "name": {
      "en": "Breadcrumbs",
      "ko": "브레드크럼 (Breadcrumbs)"
    },
    "tagline": {
      "en": "A hierarchy trail from the current page back to its ancestors",
      "ko": "A hierarchy trail from the current page back to its ancestors"
    },
    "description": {
      "en": "Breadcrumbs show the current page's position in a hierarchy and offer direct links back to its ancestors. The final item is the current location rather than a link, and separators are decorative. Deep paths may collapse middle levels into an ellipsis without hiding the root or current page.",
      "ko": "，。，；。，。"
    },
    "aka": {
      "en": [
        "breadcrumb trail",
        "path navigation",
        "hierarchy trail"
      ],
      "ko": [
        "breadcrumb trail",
        "path navigation",
        "hierarchy trail"
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
      "ko": [
        "the home slash section slash current page links",
        "the trail above a page title",
        "links showing where you are in the site",
        "the folder path style navigation",
        "the row with chevrons between page names"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<nav>",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-label=\"Breadcrumb\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-current=\"page\"",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Breadcrumb",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "breadcrumb-separator",
        "name": {
          "en": "Breadcrumb separator",
          "ko": "Breadcrumb separator"
        },
        "api": "aria-hidden=\"true\"",
        "description": {
          "en": "“The little slash or chevron between page names” is the breadcrumb separator.",
          "ko": "“The little slash or chevron between page names” is the breadcrumb separator."
        },
        "prompt": {
          "en": "an aria-hidden=\"true\" decorative breadcrumb separator between hierarchy links",
          "ko": "， aria-hidden=\"true\""
        }
      },
      {
        "id": "current-page-crumb",
        "name": {
          "en": "Current-page crumb",
          "ko": "Current-page crumb"
        },
        "api": "aria-current=\"page\"",
        "description": {
          "en": "“The last page name that is not a link” is the current-page crumb.",
          "ko": "“The last page name that is not a link” is the current-page crumb."
        },
        "prompt": {
          "en": "the final breadcrumb marked aria-current=\"page\", styled as the current location rather than a link",
          "ko": "aria-current=\"page\"，"
        }
      },
      {
        "id": "collapsed-ancestors",
        "name": {
          "en": "Collapsed ancestors",
          "ko": "Collapsed ancestors"
        },
        "api": "BreadcrumbEllipsis",
        "description": {
          "en": "“The three dots hiding the middle of the path” are collapsed ancestors.",
          "ko": "“The three dots hiding the middle of the path” are collapsed ancestors."
        },
        "prompt": {
          "en": "a BreadcrumbEllipsis standing in for low-value middle ancestors while root and current page remain visible",
          "ko": "BreadcrumbEllipsis，，"
        }
      }
    ],
    "prompt": {
      "en": "Add breadcrumbs inside a <nav aria-label=\"Breadcrumb\">, linking each ancestor and marking the final item aria-current=\"page\". Collapse low-value middle ancestors into an ellipsis when space is tight while keeping the current page visible.",
      "ko": "<nav aria-label=\"Breadcrumb\"> ：， aria-current=\"page\"。，。"
    },
    "debugPrompt": {
      "en": "Debug my breadcrumbs (nav aria-label=breadcrumb, aria-current=page). Rule out: separators typed into the markup so screen readers announce every slash — draw them with CSS pseudo-elements; aria-current missing from the last crumb; long trails needing middle-crumb collapse instead of wrapping to two lines; the current page rendered as a link to itself. The symptom:",
      "ko": "（nav aria-label=breadcrumb、aria-current=page）。：，—— CSS ； aria-current；，；。："
    },
    "relatedSlugs": [
      "sidebar",
      "tabs",
      "toolbar"
    ]
  },
  {
    "slug": "sticky-fixed",
    "platform": "web",
    "name": {
      "en": "Sticky vs. Fixed Positioning",
      "ko": "스티키 및 픽스드 포지셔닝 (Sticky & Fixed)"
    },
    "tagline": {
      "en": "Two ways to keep an element visible with different containing blocks",
      "ko": "Two ways to keep an element visible with different containing blocks"
    },
    "description": {
      "en": "A sticky element participates in normal layout until scrolling reaches its inset, then stays pinned within its containing scroll area. A fixed element is removed from normal flow and anchored to the viewport or a transformed containing block from the start. Sticky is usually right for table and section headers; fixed is typical for persistent viewport controls.",
      "ko": "sticky ，，。fixed ，（）。 sticky； fixed。"
    },
    "aka": {
      "en": [
        "sticky header",
        "fixed header",
        "pinned element"
      ],
      "ko": [
        "sticky header",
        "fixed header",
        "pinned element"
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
      "ko": [
        "the header that stays while the panel scrolls",
        "the bar pinned to the top of the screen",
        "the element that starts scrolling then gets stuck",
        "keep this visible while scrolling",
        "the floating button fixed in the corner"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": "position: sticky",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "position: fixed",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": "top",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "sticky-threshold",
        "name": {
          "en": "Sticky threshold",
          "ko": "Sticky threshold"
        },
        "api": "top",
        "description": {
          "en": "“The point where the header stops scrolling and sticks” is the sticky threshold.",
          "ko": "“The point where the header stops scrolling and sticks” is the sticky threshold."
        },
        "prompt": {
          "en": "the CSS top inset defining the threshold where a position: sticky element becomes pinned",
          "ko": "CSS top ， position: sticky"
        }
      },
      {
        "id": "scroll-container",
        "name": {
          "en": "Sticky scroll container",
          "ko": "Sticky scroll container"
        },
        "api": "position: sticky",
        "description": {
          "en": "“The panel the sticky header is trapped inside” is its scroll container.",
          "ko": "“The panel the sticky header is trapped inside” is its scroll container."
        },
        "prompt": {
          "en": "the nearest scrolling container that bounds the position: sticky element's travel",
          "ko": "， position: sticky"
        }
      }
    ],
    "prompt": {
      "en": "Use position: sticky with top: 0 for the section header so it scrolls normally until it reaches the top of its nearest scrolling container, then remains there. Reserve position: fixed for UI that must stay anchored to the viewport independently of every scroll container.",
      "ko": "position: sticky top: 0：，。position: fixed 、 UI。"
    },
    "debugPrompt": {
      "en": "Debug my sticky/fixed positioning. Rule out: sticky doing nothing because an ancestor has overflow hidden/auto/scroll — that is the classic; sticky missing a top/bottom offset so it never engages; fixed behaving like absolute inside a transformed/filtered ancestor; the content jumping when an element switches to fixed because no placeholder reserves its height. The symptom:",
      "ko": "sticky/fixed 。：sticky ， overflow: hidden/auto/scroll——；sticky top/bottom ，；fixed transform/filter absolute； fixed ，。："
    },
    "relatedSlugs": [
      "toolbar",
      "sidebar",
      "popover-dropdown-tooltip"
    ]
  },
  {
    "slug": "focus-ring-web",
    "platform": "web",
    "name": {
      "en": "Focus Ring (:focus-visible)",
      "ko": "웹 포커스 링 (:focus-visible)"
    },
    "tagline": {
      "en": "The keyboard-aware outline that identifies the active control",
      "ko": "The keyboard-aware outline that identifies the active control"
    },
    "description": {
      "en": "A focus ring identifies the element that will receive the next keyboard action. The :focus pseudo-class matches any focused element, while :focus-visible lets the browser show the strong indicator when the input modality or control needs it, most notably during keyboard navigation. Never remove the default outline without supplying an equally visible replacement.",
      "ko": "。:focus ；:focus-visible （）。。"
    },
    "aka": {
      "en": [
        "focus indicator",
        "keyboard focus outline",
        "focus halo"
      ],
      "ko": [
        "focus indicator",
        "keyboard focus outline",
        "focus halo"
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
      "ko": [
        "the outline around a button after pressing tab",
        "the blue ring on the selected control",
        "keyboard navigation highlight",
        "the border showing which button has focus",
        "the ring that should not appear on every mouse click"
      ]
    },
    "api": [
      {
        "framework": "CSS",
        "symbol": ":focus-visible",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": ":focus",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "tabindex",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "focus-outline",
        "name": {
          "en": "Focus outline",
          "ko": "Focus outline"
        },
        "api": "outline",
        "description": {
          "en": "“The blue line around the button after I press Tab” is the focus outline.",
          "ko": "「 Tab 」。"
        },
        "prompt": {
          "en": "a high-contrast CSS outline around the :focus-visible control",
          "ko": ":focus-visible CSS outline"
        }
      },
      {
        "id": "outline-offset",
        "name": {
          "en": "Outline offset",
          "ko": "Outline offset"
        },
        "api": "outline-offset",
        "description": {
          "en": "“The little gap between the control and its focus line” is the outline offset.",
          "ko": "“The little gap between the control and its focus line” is the outline offset."
        },
        "prompt": {
          "en": "a CSS outline-offset leaving a visible gap between the :focus-visible ring and the control edge",
          "ko": "CSS outline-offset， :focus-visible"
        }
      }
    ],
    "prompt": {
      "en": "Style the keyboard focus ring with :focus-visible instead of suppressing the browser outline globally. Make it high contrast and clearly offset from the control; use :focus only for state that must apply regardless of whether focus came from keyboard or pointer.",
      "ko": ":focus-visible ，。、；:focus 。"
    },
    "debugPrompt": {
      "en": "Debug my focus ring (outline, :focus-visible). Rule out: a global outline:none killing keyboard navigation everywhere; :focus styling mouse clicks when :focus-visible was intended; the ring clipped by an overflow-hidden ancestor — use outline-offset or box-shadow inside; a box-shadow ring invisible against a same-color background; programmatic .focus() not showing a ring without focus-visible options. The symptom:",
      "ko": "（outline、:focus-visible）。： outline: none ； :focus-visible :focus，； overflow: hidden —— outline-offset box-shadow；box-shadow ； .focus() ， focus-visible 。："
    },
    "relatedSlugs": [
      "form-field",
      "focus-ring",
      "command-palette",
      "switch-checkbox-radio",
      "toggle-group"
    ]
  },
  {
    "slug": "empty-state",
    "platform": "web",
    "name": {
      "en": "Empty State",
      "ko": "빈 상태 화면 (Empty State)"
    },
    "tagline": {
      "en": "Purposeful guidance shown when a view has no content yet",
      "ko": "Purposeful guidance shown when a view has no content yet"
    },
    "description": {
      "en": "An empty state replaces a content view when there are no items to show, whether on first use, after filtering, or after everything is removed. It explains the situation without blame and offers the most useful next action. It is a designed product state, not merely whitespace or an error message.",
      "ko": "——、，——。，。，，。"
    },
    "aka": {
      "en": [
        "blank state",
        "zero state",
        "first-use state",
        "no-results state"
      ],
      "ko": [
        "blank state",
        "zero state",
        "first-use state",
        "no-results state"
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
      "ko": [
        "the screen shown when there is nothing here",
        "the panel before the user creates their first item",
        "the no results message with a button",
        "the blank list explanation",
        "what to show instead of an empty white box"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<section>",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-labelledby",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"status\"",
        "note": {
          "en": "for a dynamically produced no-results message",
          "ko": "for a dynamically produced no-results message"
        }
      }
    ],
    "parts": [
      {
        "id": "state-illustration",
        "name": {
          "en": "State illustration",
          "ko": "State illustration"
        },
        "api": "aria-hidden=\"true\"",
        "description": {
          "en": "“The quiet picture showing what this empty area is for” is the state illustration.",
          "ko": "“The quiet picture showing what this empty area is for” is the state illustration."
        },
        "prompt": {
          "en": "an aria-hidden=\"true\" empty-state illustration that reinforces the missing-content state without becoming the label",
          "ko": "aria-hidden=\"true\" ，「」，"
        }
      },
      {
        "id": "recovery-action",
        "name": {
          "en": "Recovery action",
          "ko": "Recovery action"
        },
        "api": "<button>",
        "description": {
          "en": "“The button that gets me out of the blank screen” is the recovery action.",
          "ko": "“The button that gets me out of the blank screen” is the recovery action."
        },
        "prompt": {
          "en": "the primary <button> recovery action in the empty state, resolving why the view has no content",
          "ko": "<button> ，"
        }
      }
    ],
    "prompt": {
      "en": "Create an empty state as a labelled <section> with a simple icon, a one-line explanation of why the view is empty, and one primary action that resolves it. For a dynamically produced no-results state, announce the message with role=\"status\" without moving focus.",
      "ko": "<section>：、、。， role=\"status\" ，。"
    },
    "debugPrompt": {
      "en": "Debug my empty state. Rule out: the empty state flashing before data arrives because loading and truly-empty are one boolean; errors rendering the empty state instead of an error state; the call-to-action unreachable by keyboard; layout jumping when real content replaces it because heights were never reserved. The symptom:",
      "ko": "。：——；；；，。："
    },
    "relatedSlugs": [
      "skeleton-spinner",
      "toast",
      "command-palette"
    ]
  },
  {
    "slug": "hover-card",
    "platform": "web",
    "name": {
      "en": "Hover Card",
      "ko": "호버 카드 (Hover Card)"
    },
    "tagline": {
      "en": "A rich, non-modal preview revealed from a hovered or focused reference",
      "ko": "A rich, non-modal preview revealed from a hovered or focused reference"
    },
    "description": {
      "en": "A hover card is a rich preview associated with a person, place, or linked object. It reveals more information than a tooltip and may include passive metadata or a small number of actions, while leaving the underlying page usable. Its open and close delays must allow the pointer to move from the trigger into the card without flicker.",
      "ko": "、。，，。，。"
    },
    "aka": {
      "en": [
        "hover preview",
        "profile preview",
        "preview card"
      ],
      "ko": [
        "hover preview",
        "profile preview",
        "preview card"
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
      "ko": [
        "the profile preview when you hover a username",
        "the rich popup that appears over a link",
        "the little user card shown on hover",
        "a tooltip with an avatar and details",
        "the preview before opening a profile"
      ]
    },
    "api": [
      {
        "framework": "Radix",
        "symbol": "HoverCard",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": ":hover",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "popover",
        "note": null
      },
      {
        "framework": "CSS",
        "symbol": ":focus-visible",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "preview-trigger",
        "name": {
          "en": "Preview trigger",
          "ko": "Preview trigger"
        },
        "api": "HoverCardTrigger",
        "description": {
          "en": "“The username that reveals a card when I hover it” is the preview trigger.",
          "ko": "“The username that reveals a card when I hover it” is the preview trigger."
        },
        "prompt": {
          "en": "the Radix HoverCardTrigger reference that reveals its preview from both hover and keyboard focus",
          "ko": "Radix HoverCardTrigger ，"
        }
      },
      {
        "id": "preview-content",
        "name": {
          "en": "Preview content",
          "ko": "Preview content"
        },
        "api": "HoverCardContent",
        "description": {
          "en": "“The richer little profile popup” is the preview content.",
          "ko": "“The richer little profile popup” is the preview content."
        },
        "prompt": {
          "en": "the Radix HoverCardContent preview surface with richer passive details than a tooltip",
          "ko": "Radix HoverCardContent ，"
        }
      }
    ],
    "prompt": {
      "en": "Add a hover card using Radix HoverCard to preview the linked profile with an avatar and summary. Reveal it from both hover and keyboard focus after a short delay, keep it open while the pointer crosses into the card, and reverse the opacity and transform transitions smoothly on exit.",
      "ko": "Radix HoverCard ，（）。，；； opacity transform 。"
    },
    "debugPrompt": {
      "en": "Debug my hover card (Radix HoverCard, mouseenter/mouseleave). Rule out: the card closing while the pointer travels from trigger to card — you need a hover-intent delay or safe-polygon; touch devices never opening it because there is no hover — provide a tap/focus path; open/close delays tuned so short it flickers on skim; the card trapped under another stacking context. The symptom:",
      "ko": "（Radix HoverCard、mouseenter/mouseleave）。：——（safe-polygon）；——/；，；。："
    },
    "relatedSlugs": [
      "popover-dropdown-tooltip",
      "combobox",
      "focus-ring-web",
      "popover"
    ]
  },
  {
    "slug": "switch-checkbox-radio",
    "platform": "web",
    "name": {
      "en": "Switch vs. Checkbox vs. Radio",
      "ko": "스위치, 체크박스 및 라디오 (Switch, Checkbox & Radio)"
    },
    "tagline": {
      "en": "Controls for an on/off setting, independent choices, or one choice from a group",
      "ko": "Controls for an on/off setting, independent choices, or one choice from a group"
    },
    "description": {
      "en": "A switch controls a binary setting and communicates that the change takes effect immediately, like turning notifications on. A checkbox represents an independent form value and may wait for Save or Submit; several checkboxes can be selected. Radio buttons form a named group in which choosing one option clears the others.",
      "ko": "，「」——。，，。，。"
    },
    "aka": {
      "en": [
        "toggle switch",
        "check box",
        "radio button",
        "option button"
      ],
      "ko": [
        "toggle switch",
        "check box",
        "radio button",
        "option button"
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
      "ko": [
        "the on off sliding control",
        "the square box with a checkmark",
        "the circles where only one can be picked",
        "a setting that changes immediately",
        "choose several versus choose exactly one"
      ]
    },
    "api": [
      {
        "framework": "HTML",
        "symbol": "<input type=\"checkbox\" role=\"switch\">",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "<input type=\"checkbox\">",
        "note": null
      },
      {
        "framework": "HTML",
        "symbol": "<input type=\"radio\">",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Switch",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "Checkbox",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "switch-thumb",
        "name": {
          "en": "Switch thumb",
          "ko": "Switch thumb"
        },
        "api": "role=\"switch\"",
        "description": {
          "en": "“The little circle that slides left and right” is the switch thumb.",
          "ko": "“The little circle that slides left and right” is the switch thumb."
        },
        "prompt": {
          "en": "the circular thumb inside a role=\"switch\" control, sliding to the checked side when on",
          "ko": "role=\"switch\" ，"
        }
      },
      {
        "id": "switch-track",
        "name": {
          "en": "Switch track",
          "ko": "Switch track"
        },
        "api": "role=\"switch\"",
        "description": {
          "en": "“The rounded pill behind the moving circle” is the switch track.",
          "ko": "“The rounded pill behind the moving circle” is the switch track."
        },
        "prompt": {
          "en": "the capsule-shaped track behind a role=\"switch\" thumb, changing fill with the checked state",
          "ko": "role=\"switch\" ，"
        }
      },
      {
        "id": "checkbox-checkmark",
        "name": {
          "en": "Checkbox checkmark",
          "ko": "Checkbox checkmark"
        },
        "api": "<input type=\"checkbox\">",
        "description": {
          "en": "“The tick that appears inside the square box” is the checkbox checkmark.",
          "ko": "“The tick that appears inside the square box” is the checkbox checkmark."
        },
        "prompt": {
          "en": "the native checkmark inside a checked <input type=\"checkbox\">",
          "ko": "<input type=\"checkbox\">"
        }
      },
      {
        "id": "radio-selection-dot",
        "name": {
          "en": "Radio selection dot",
          "ko": "Radio selection dot"
        },
        "api": "<input type=\"radio\">",
        "description": {
          "en": "“The filled dot inside the chosen circle” is the radio selection dot.",
          "ko": "“The filled dot inside the chosen circle” is the radio selection dot."
        },
        "prompt": {
          "en": "the centered selection dot inside the checked <input type=\"radio\"> of a same-name group",
          "ko": "<input type=\"radio\">"
        }
      }
    ],
    "prompt": {
      "en": "Use an <input type=\"checkbox\" role=\"switch\"> for the binary on/off setting, a native <input type=\"checkbox\"> for each independent checked choice, and same-name <input type=\"radio\"> controls when exactly one option is allowed. Give every control a visible clickable label and expose its checked state through the native control.",
      "ko": "/ <input type=\"checkbox\" role=\"switch\">； <input type=\"checkbox\">； <input type=\"radio\">。、，。"
    },
    "debugPrompt": {
      "en": "Debug my switch/checkbox/radio. Rule out: the control flipping visually while state stays stale — controlled input without onChange; label clicks not toggling because for/id association is missing; radios not behaving as a group because their name attributes differ; the indeterminate checkbox state gone — it is settable only from JS, not markup. The symptom:",
      "ko": "//。：—— input onChange；， for/id ；， name ；（indeterminate）—— JS ，。："
    },
    "relatedSlugs": [
      "toggle-group",
      "badge-chip-pill",
      "focus-ring-web",
      "segmented-control"
    ]
  },
  {
    "slug": "toggle-group",
    "platform": "web",
    "name": {
      "en": "Toggle Group (Segmented Control)",
      "ko": "토글 그룹 (Toggle Group)"
    },
    "tagline": {
      "en": "A connected row of compact options with one persistent selection",
      "ko": "A connected row of compact options with one persistent selection"
    },
    "description": {
      "en": "A toggle group is a compact row of related buttons that behave as one selection control. In single-select form it is often called a segmented control and works well for switching a view or mode immediately. Unlike tabs, it changes a setting or presentation rather than labeling separate content panels.",
      "ko": "，。，。，，。"
    },
    "aka": {
      "en": [
        "segmented control",
        "button group",
        "view switcher",
        "segmented button"
      ],
      "ko": [
        "segmented control",
        "button group",
        "view switcher",
        "segmented button"
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
      "ko": [
        "the connected row of buttons where one stays selected",
        "the compact view switcher with segments",
        "the group of pill buttons for list or grid",
        "three choices inside one rounded control",
        "the ios style segmented buttons on the web"
      ]
    },
    "api": [
      {
        "framework": "Radix",
        "symbol": "ToggleGroup",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"radiogroup\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "role=\"radio\"",
        "note": null
      },
      {
        "framework": "ARIA",
        "symbol": "aria-checked",
        "note": null
      },
      {
        "framework": "shadcn/ui",
        "symbol": "ToggleGroup",
        "note": null
      }
    ],
    "parts": [
      {
        "id": "selected-toggle",
        "name": {
          "en": "Selected toggle",
          "ko": "Selected toggle"
        },
        "api": "aria-checked",
        "description": {
          "en": "“The button in the group that stays filled” is the selected toggle.",
          "ko": "“The button in the group that stays filled” is the selected toggle."
        },
        "prompt": {
          "en": "the role=\"radio\" toggle with aria-checked=\"true\", using a persistent selected fill",
          "ko": "role=\"radio\" aria-checked=\"true\" ，"
        }
      },
      {
        "id": "segment-divider",
        "name": {
          "en": "Segment divider",
          "ko": "Segment divider"
        },
        "api": "ToggleGroup",
        "description": {
          "en": "“The little line between two choices in the pill” is the segment divider.",
          "ko": "“The little line between two choices in the pill” is the segment divider."
        },
        "prompt": {
          "en": "the divider between adjacent Radix ToggleGroup items inside one connected control",
          "ko": "， Radix ToggleGroup"
        }
      }
    ],
    "prompt": {
      "en": "Build a persistent single-select Toggle Group using Radix ToggleGroup. Present the connected buttons as one segmented control, expose the group as role=\"radiogroup\" with role=\"radio\" items and aria-checked state, and support arrow-key movement between segments.",
      "ko": "Radix ToggleGroup 。； role=\"radiogroup\"， role=\"radio\" aria-checked ；。"
    },
    "debugPrompt": {
      "en": "Debug my toggle group (aria-pressed, Radix ToggleGroup). Rule out: single vs multiple semantics mixed up — one behaves like radios, the other like checkboxes; the pressed state invisible because only color changes and not enough of it; deselecting the last item leaving nothing active when one must always stay on; arrow keys dead because roving focus is unimplemented. The symptom:",
      "ko": "（aria-pressed、Radix ToggleGroup）。：single multiple ——，；，、；，；， roving focus。："
    },
    "relatedSlugs": [
      "tabs",
      "switch-checkbox-radio",
      "segmented-control",
      "badge-chip-pill"
    ]
  },
  {
    "slug": "menu-bar-extra",
    "platform": "macos",
    "name": {
      "en": "Menu Bar Extra (Status Item)",
      "ko": "메뉴 바 익스트라 (Menu Bar Extra)"
    },
    "tagline": {
      "en": "The icon that lives on the right side of the macOS menu bar",
      "ko": "The icon that lives on the right side of the macOS menu bar"
    },
    "description": {
      "en": "A menu bar extra is the small icon on the right side of the macOS menu bar, next to the clock — Wi-Fi, battery, and third-party apps all live here. In AppKit it is an NSStatusItem; SwiftUI calls the whole construct a MenuBarExtra. When you click one, its button enters the highlighted state — a pale rounded background that stays visible for as long as its menu or popover is open, then fades when the menu closes.",
      "ko": "macOS 、——Wi-Fi、。AppKit NSStatusItem，SwiftUI MenuBarExtra。，：，，。"
    },
    "aka": {
      "en": [
        "status item",
        "menu bar icon",
        "menu bar app",
        "status bar item",
        "tray icon (Windows term)"
      ],
      "ko": [
        "status item",
        "menu bar icon",
        "menu bar app",
        "status bar item",
        "tray icon (Windows term)"
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
      "ko": [
        "the icon in the top right of the mac menu bar",
        "pale background behind the menu bar icon when you click it",
        "highlighted state when the menu bar icon's menu is open",
        "little icon next to the clock on mac",
        "system tray icon on mac",
        "app icon at the top of the screen with a dropdown"
      ]
    },
    "api": [
      {
        "framework": "AppKit",
        "symbol": "NSStatusItem",
        "note": null
      },
      {
        "framework": "SwiftUI",
        "symbol": "MenuBarExtra",
        "note": {
          "en": "macOS 13+",
          "ko": "macOS 13+"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSStatusBar.system.statusItem(withLength:)",
        "note": {
          "en": "how one is created",
          "ko": "how one is created"
        }
      },
      {
        "framework": "AppKit",
        "symbol": "NSStatusBarButton.isHighlighted",
        "note": {
          "en": "the pale rounded background while its menu is open",
          "ko": "the pale rounded background while its menu is open"
        }
      }
    ],
    "parts": [
      {
        "id": "template-icon",
        "name": {
          "en": "Template icon",
          "ko": "（Template Icon）"
        },
        "api": "NSImage.isTemplate",
        "description": {
          "en": "“The monochrome icon that recolors itself” is a template icon.",
          "ko": "“The monochrome icon that recolors itself” is a template icon."
        },
        "prompt": {
          "en": "an NSImage.isTemplate menu bar icon that macOS recolors automatically against light and dark menu bars",
          "ko": "NSImage.isTemplate ，macOS /"
        }
      },
      {
        "id": "highlighted-state",
        "name": {
          "en": "Highlighted state",
          "ko": "Highlighted state"
        },
        "api": "NSStatusBarButton.isHighlighted",
        "description": {
          "en": "“The thing behind the menu bar icon that gets highlighted” is the status button's highlighted state.",
          "ko": "“The thing behind the menu bar icon that gets highlighted” is the status button's highlighted state."
        },
        "prompt": {
          "en": "the NSStatusBarButton.isHighlighted state: the pale rounded background behind the menu bar icon for as long as its surface is open",
          "ko": "NSStatusBarButton.isHighlighted ：，"
        }
      },
      {
        "id": "attached-surface",
        "name": {
          "en": "Attached menu or popover",
          "ko": "Attached menu or popover"
        },
        "api": "NSStatusItem.menu",
        "description": {
          "en": "“The actual menu bar window that opens” is the status item's attached menu or popover.",
          "ko": "“The actual menu bar window that opens” is the status item's attached menu or popover."
        },
        "prompt": {
          "en": "the NSStatusItem.menu or attached NSPopover opened directly beneath the status item",
          "ko": "NSStatusItem.menu NSPopover，"
        }
      }
    ],
    "prompt": {
      "en": "Add a menu bar extra — an NSStatusItem in the macOS menu bar (SwiftUI: MenuBarExtra). While its menu or popover is open, the status item's button must show its highlighted state: the pale rounded background (NSStatusBarButton.isHighlighted), exactly like system menu bar icons.",
      "ko": "——macOS NSStatusItem（SwiftUI MenuBarExtra）。，：（NSStatusBarButton.isHighlighted），。"
    },
    "debugPrompt": {
      "en": "Debug my macOS menu bar extra (NSStatusItem, SwiftUI MenuBarExtra). Rule out: the status item deallocating because nothing retains it; the icon ignoring dark menu bars because the image is not marked template; the item silently hidden when the menu bar runs out of room; the button highlight sticking because isHighlighted is managed manually; MenuBarExtra window style behaving differently from menu style. The symptom:",
      "ko": "macOS （NSStatusItem、SwiftUI MenuBarExtra）。：，；， template；； isHighlighted ；MenuBarExtra window menu 。："
    },
    "relatedSlugs": [
      "popover",
      "context-menu",
      "vibrancy"
    ]
  }
];
