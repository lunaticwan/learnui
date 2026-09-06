import { UIGuide } from "../types/ui";

export const GUIDES: Record<string, UIGuide> = {
  "appkit-vs-swiftui": {
    "slug": "appkit-vs-swiftui",
    "title": {
      "en": "AppKit vs SwiftUI",
      "zh": "AppKit vs SwiftUI"
    },
    "subtitle": "NSButton · Button",
    "lede": {
      "en": "Same pixel on screen, two real names — which one you say depends on the project",
      "zh": "屏幕上是同一个像素，却有两个正式名字——该说哪一个，取决于你的项目"
    },
    "equation": {
      "left": "MenuBarExtra",
      "leftTag": "SwiftUI",
      "right": "NSStatusItem",
      "rightTag": "AppKit"
    },
    "intro": [
      {
        "en": "AppKit is the Mac’s original toolbox — a workshop where you pick up each part (a window, a button, a menu) and tell it exactly what to do. Its names start with NS: NSWindow, NSMenu, NSStatusItem.",
        "zh": "AppKit 是 Mac 最早的一套工具箱——像一间工坊：你拿起每个零件（一个窗口、一个按钮、一个菜单），一件件告诉它该做什么。它的名字都以 NS 开头：NSWindow、NSMenu、NSStatusItem。"
      },
      {
        "en": "SwiftUI is Apple’s newer way: instead of assembling parts, you describe the finished room — “a sidebar, then a list, then this button” — and the system builds and updates it. Same elements on screen, plainer names: Button, Menu, MenuBarExtra.",
        "zh": "SwiftUI 是 Apple 的新方式：你不再拼装零件，而是描述造好的房间——“一个边栏，接着一个列表，再放上这个按钮”——由系统负责构建和更新。屏幕上的元素相同，名字却更朴素：Button、Menu、MenuBarExtra。"
      },
      {
        "en": "They’re not two kinds of app — one Mac app can (and usually does) mix both. Which means the thing you’re pointing at almost always has two valid names, and using the right one makes your agent dramatically more precise.",
        "zh": "它们不是两类 App——一个 Mac App 可以（而且通常确实）两者混用。这意味着你指着的那个东西几乎总有两个都成立的名字；用对名字，能让你的 AI 代理精确得多。"
      }
    ],
    "rulesTitle": {
      "en": "Which name do I say? — three rules",
      "zh": "该说哪个名字？三条规则"
    },
    "rules": [
      {
        "title": {
          "en": "Match the project.",
          "zh": "跟着项目走。"
        },
        "body": {
          "en": "Files say import SwiftUI and views are structs? Use SwiftUI names. NS-classes and import AppKit? Use AppKit names.",
          "zh": "文件里是 import SwiftUI、视图是 struct？就用 SwiftUI 的名字。是 NS 开头的类和 import AppKit？就用 AppKit 的名字。"
        }
      },
      {
        "title": {
          "en": "In a mixed app, name the layer.",
          "zh": "混用的 App，指明要哪一层。"
        },
        "body": {
          "en": "“The SwiftUI view inside the AppKit window”, “the NSPanel presented from my SwiftUI app.” The boundary is where agents get lost.",
          "zh": "比如说“AppKit 窗口里的那个 SwiftUI 视图”“从我的 SwiftUI App 里弹出的那个 NSPanel”。AI 代理最容易在两层交界处迷路。"
        }
      },
      {
        "title": {
          "en": "When unsure, give both.",
          "zh": "拿不准，就两个都给。"
        },
        "body": {
          "en": "“The menu bar extra (SwiftUI: MenuBarExtra / AppKit: NSStatusItem)” — the agent inspects the project and picks the right one.",
          "zh": "比如说“菜单栏附加项（SwiftUI: MenuBarExtra / AppKit: NSStatusItem）”——代理会检查项目，自己挑出对的那个。"
        }
      }
    ],
    "promptsTitle": {
      "en": "Worked prompts — paste into your agent",
      "zh": "写好的 prompt——直接粘给你的代理"
    },
    "prompts": [
      {
        "label": {
          "en": "SwiftUI project",
          "zh": "SwiftUI 项目"
        },
        "text": {
          "en": "In this macOS SwiftUI app, make the MenuBarExtra open a popover-style window, and keep the menu bar extra visible when the main window closes.",
          "zh": "在这个 macOS SwiftUI App 里，让 MenuBarExtra 打开一个 popover 风格的窗口，并在主窗口关闭后仍然保留菜单栏附加项。"
        }
      },
      {
        "label": {
          "en": "AppKit project",
          "zh": "AppKit 项目"
        },
        "text": {
          "en": "In this AppKit macOS app, update the NSStatusItem in NSStatusBar.system: its button should use a template image and show an NSMenu when clicked.",
          "zh": "在这个 AppKit macOS App 里，更新 NSStatusBar.system 中的 NSStatusItem：它的按钮使用模板图像（template image），点击时显示一个 NSMenu。"
        }
      },
      {
        "label": {
          "en": "Not sure which",
          "zh": "不确定是哪个"
        },
        "text": {
          "en": "Fix the little app icon beside the Mac clock — the menu bar extra (SwiftUI: MenuBarExtra, AppKit: NSStatusItem). Inspect the project and change the existing implementation, don't add a second one.",
          "zh": "修好 Mac 时钟旁边那个小小的 App 图标——也就是菜单栏附加项（SwiftUI: MenuBarExtra / AppKit: NSStatusItem）。检查项目，在现有实现上改，不要再加第二个。"
        }
      }
    ],
    "confuseTitle": {
      "en": "Don’t confuse them with",
      "zh": "别和它们搞混"
    },
    "confuse": [
      {
        "term": {
          "en": "UIKit",
          "zh": "UIKit"
        },
        "body": {
          "en": "Apple's framework for iPhone and iPad — UIButton, not NSButton. Not for Mac-only apps.",
          "zh": "Apple 为 iPhone 和 iPad 准备的框架——是 UIButton，不是 NSButton。只做 Mac 的 App 用不上它。"
        }
      },
      {
        "term": {
          "en": "Mac Catalyst",
          "zh": "Mac Catalyst"
        },
        "body": {
          "en": "An iPad app wearing a Mac coat. It runs UIKit on the Mac; it isn't AppKit or SwiftUI.",
          "zh": "披着 Mac 外衣的 iPad App。它在 Mac 上跑的是 UIKit，既不是 AppKit，也不是 SwiftUI。"
        }
      },
      {
        "term": {
          "en": "Electron",
          "zh": "Electron"
        },
        "body": {
          "en": "A web page in a desktop wrapper (Chromium + Node). Its UI vocabulary is the Web tab of this site.",
          "zh": "套着桌面外壳的网页（Chromium + Node）。它的 UI 词汇对应本站的 Web 标签页。"
        }
      }
    ],
    "faqTitle": {
      "en": "The questions everyone asks",
      "zh": "人人都会问的问题"
    },
    "faq": [
      {
        "q": {
          "en": "Is SwiftUI replacing AppKit?",
          "zh": "SwiftUI 正在取代 AppKit 吗？"
        },
        "a": {
          "en": "Slowly, and not yet. Apple recommends SwiftUI for new apps but still ships and documents new AppKit APIs. Practical rule: new screens in SwiftUI; reach for AppKit when the Mac-specific behavior you need isn't exposed in SwiftUI.",
          "zh": "在取代，但很慢，而且还没完成。Apple 建议新 App 用 SwiftUI，但仍在推出并为新的 AppKit API 写文档。实用原则：新界面用 SwiftUI；需要的 Mac 特有行为在 SwiftUI 里没暴露出来时，就去找 AppKit。"
        }
      },
      {
        "q": {
          "en": "Can one app use both?",
          "zh": "一个 App 能两个都用吗？"
        },
        "a": {
          "en": "Yes, and most serious Mac apps do. NSViewRepresentable puts an AppKit view inside SwiftUI; NSHostingView does the reverse. That's why naming the layer you want changed matters.",
          "zh": "能，而且大多数认真的 Mac App 都这么做。NSViewRepresentable 把 AppKit 视图放进 SwiftUI，NSHostingView 则反过来。所以说清要改的是哪一层，才显得重要。"
        }
      },
      {
        "q": {
          "en": "Is every SwiftUI control secretly an AppKit control?",
          "zh": "每个 SwiftUI 控件背地里都是 AppKit 控件吗？"
        },
        "a": {
          "en": "Don't assume so. Some are bridged, many aren't, and Apple treats it as an implementation detail. Treat Button and NSButton as different APIs that happen to look alike.",
          "zh": "别这么假设。有些做了桥接，很多没有，Apple 把这当作实现细节。把 Button 和 NSButton 当成两个碰巧长得像的 API 就好。"
        }
      },
      {
        "q": {
          "en": "Are AppKit and UIKit the same thing?",
          "zh": "AppKit 和 UIKit 是一回事吗？"
        },
        "a": {
          "en": "No — AppKit is Mac, UIKit is iPhone/iPad. The prefix gives it away: NSButton is Mac, UIButton is iOS. Mac Catalyst is a third thing: an iPad app wearing a Mac coat.",
          "zh": "不是——AppKit 属于 Mac，UIKit 属于 iPhone/iPad。看前缀就露馅：NSButton 是 Mac，UIButton 是 iOS。Mac Catalyst 是第三种东西：披着 Mac 外衣的 iPad App。"
        }
      }
    ],
    "outro": {
      "en": "Every macOS entry on NameThatUI lists both names in its IN CODE table, and the Translation Table holds all 60+ mappings in one place — start from the thing you can see, take whichever name your project needs.",
      "zh": "NameThatUI 上每个 macOS 词条的 IN CODE 表格都列出两个名字；翻译对照表（Translation Table）把 60 多组映射收在一处——从你看得见的东西出发，拿走你项目需要的那个名字。"
    }
  },
  "swift-vs-electron": {
    "slug": "swift-vs-electron",
    "title": {
      "en": "Swift vs Electron",
      "zh": "Swift vs Electron"
    },
    "subtitle": "native · web-in-a-shell",
    "lede": {
      "en": "The first fork in the road when you build a desktop app — and the vocabulary it decides.",
      "zh": "开发桌面 App 时遇到的第一个岔路口——它同时也决定了你之后用的词汇。"
    },
    "intro": [
      {
        "en": "This is the first fork in the road when you build a desktop app. Swift means building with Apple’s own materials — the app is a Mac app, and every element on this site’s macOS tab comes free and native. Electron means building a web page and shipping it inside its own private browser window — the app is really a website wearing a desktop coat, and its vocabulary is this site’s Web tab.",
        "zh": "这是你开发桌面 App 时遇到的第一个岔路口。选 Swift，就是用 Apple 自家的材料来造——App 是地地道道的 Mac App，本站 macOS 标签页里的每个元素都免费且原生。选 Electron，就是写一个网页，再把它装进一个专属浏览器窗口里发布——这个 App 其实是披着桌面外衣的网站，它的词汇对应本站的 Web 标签页。"
      },
      {
        "en": "Neither is wrong. It decides which names your project speaks: an Electron app has no NSStatusItem inside it (Electron calls the menu bar icon a Tray), and a Swift app has no CSS.",
        "zh": "两条路没有对错。它决定的是你的项目说哪套名字：Electron App 里没有 NSStatusItem（Electron 把菜单栏图标叫 Tray），Swift App 里也没有 CSS。"
      }
    ],
    "tableTitle": {
      "en": "The trade, honestly",
      "zh": "这笔取舍，实话实说"
    },
    "table": [
      {
        "aspect": {
          "en": "What it is",
          "zh": "它是什么"
        },
        "swift": {
          "en": "Apple's language + native frameworks (SwiftUI/AppKit)",
          "zh": "Apple 的语言 + 原生框架（SwiftUI/AppKit）"
        },
        "electron": {
          "en": "A Chromium browser + Node.js bundled around your web app",
          "zh": "一个 Chromium 浏览器 + Node.js，裹着你的 Web App"
        }
      },
      {
        "aspect": {
          "en": "Looks like a Mac app",
          "zh": "看起来像 Mac App"
        },
        "swift": {
          "en": "Yes, automatically — real menus, sheets, vibrancy",
          "zh": "是，天生如此——真正的菜单、Sheet 面板、毛玻璃质感"
        },
        "electron": {
          "en": "Only if you rebuild the Mac look yourself in CSS",
          "zh": "除非你自己用 CSS 重造一套 Mac 的样子"
        }
      },
      {
        "aspect": {
          "en": "Uses",
          "zh": "适合做什么"
        },
        "swift": {
          "en": "Mac-only apps that should feel native",
          "zh": "只跑在 Mac 上、要有原生质感的 App"
        },
        "electron": {
          "en": "Cross-platform apps sharing one web codebase",
          "zh": "跨平台、共用一套 Web 代码的 App"
        }
      },
      {
        "aspect": {
          "en": "App size",
          "zh": "App 体积"
        },
        "swift": {
          "en": "Small (uses the system's own frameworks)",
          "zh": "小（直接用系统自带的框架）"
        },
        "electron": {
          "en": "Large (ships its own browser, ~100MB+)",
          "zh": "大（自带一个浏览器，约 100MB+）"
        }
      },
      {
        "aspect": {
          "en": "Your skills",
          "zh": "你的技能"
        },
        "swift": {
          "en": "Swift — new language for most web devs",
          "zh": "Swift——对多数 Web 开发者来说是一门新语言"
        },
        "electron": {
          "en": "HTML/CSS/JS/React — what web devs already know",
          "zh": "HTML/CSS/JS/React——Web 开发者本来就会的东西"
        }
      },
      {
        "aspect": {
          "en": "Famous examples",
          "zh": "知名案例"
        },
        "swift": {
          "en": "Things, Fantastical, Craft",
          "zh": "Things、Fantastical、Craft"
        },
        "electron": {
          "en": "VS Code, Slack, Discord, Figma",
          "zh": "VS Code、Slack、Discord、Figma"
        }
      }
    ],
    "ruleTitle": {
      "en": "Rule of thumb",
      "zh": "经验法则"
    },
    "rule": {
      "en": "Mac-only and you want it to feel like it belongs? Swift. Cross-platform, or your team lives in web tech? Electron (or its lighter cousin Tauri, which swaps the bundled browser for the system’s).",
      "zh": "只上 Mac，还想让它看起来土生土长？选 Swift。要跨平台，或者团队靠 Web 技术吃饭？选 Electron（或者它更轻量的表亲 Tauri——把捆绑的浏览器换成系统自带的）。"
    },
    "promptsTitle": {
      "en": "Your first prompt — pick your world",
      "zh": "你的第一条 prompt——选好你的世界"
    },
    "promptsIntro": {
      "en": "The very first message you send decides which world your agent builds in. Paste the one for your side — it sets the stack, the native details agents forget, the vocabulary, and a first milestone you can actually see:",
      "zh": "你发出的第一条消息，决定了代理在哪个世界里动工。把你这一边的粘过去——它会定下技术栈、代理容易忘掉的原生细节、词汇，以及一个你能真正看到的第一个里程碑："
    },
    "prompts": [
      {
        "label": {
          "en": "Starting a Swift app",
          "zh": "从零开始一个 Swift App"
        },
        "note": {
          "en": "Mac-only, feels native from day one",
          "zh": "只上 Mac，第一天就有原生质感"
        },
        "text": {
          "en": "I'm starting a brand-new native macOS app. Set it up as a SwiftUI Mac app (Xcode project, macOS 14+): one main window with a NavigationSplitView sidebar, a unified toolbar, and light + dark mode from the start. Keep everything native — system fonts, system accent color, standard controls, no custom-drawn chrome. Talk to me in SwiftUI/AppKit names (window, sidebar, toolbar, sheet), never in web terms. First milestone: the empty app builds and runs with the sidebar and toolbar showing.",
          "zh": "我要从零开始一个全新的原生 macOS App。把它搭建成一个 SwiftUI Mac App（Xcode 项目，macOS 14+）：一个主窗口，带 NavigationSplitView 边栏和统一的工具栏（unified toolbar），从一开始就支持浅色 + 深色模式。一切保持原生——系统字体、系统强调色、标准控件，不要自绘的窗口装饰。跟我说话时用 SwiftUI/AppKit 的名字（window、sidebar、toolbar、sheet），绝不用 Web 术语。第一个里程碑：空 App 能编译运行，边栏和工具栏都显示出来。"
        }
      },
      {
        "label": {
          "en": "Starting an Electron app",
          "zh": "从零开始一个 Electron App"
        },
        "note": {
          "en": "Web tech, runs everywhere",
          "zh": "Web 技术，到处都能跑"
        },
        "text": {
          "en": "I'm starting a brand-new desktop app built with web tech. Set it up as an Electron app with Vite + React + TypeScript: one BrowserWindow with titleBarStyle 'hiddenInset' on macOS so it looks clean, secure defaults (contextIsolation on, nodeIntegration off), and hot reload in dev. Talk to me in web names (components, CSS, div — and Electron's Tray for a menu bar icon), never in Swift/AppKit terms. First milestone: the window opens, shows my React page, and hot reload works.",
          "zh": "我要从零开始一个用 Web 技术构建的全新桌面 App。把它搭建成一个 Electron App，用 Vite + React + TypeScript：一个 BrowserWindow，在 macOS 上把 titleBarStyle 设为 'hiddenInset' 让外观干净，采用安全的默认配置（打开 contextIsolation，关闭 nodeIntegration），开发时支持热重载。跟我说话时用 Web 的名字（components、CSS、div——菜单栏图标用 Electron 的 Tray），绝不用 Swift/AppKit 术语。第一个里程碑：窗口能打开，显示我的 React 页面，热重载正常工作。"
        }
      }
    ],
    "confuseTitle": {
      "en": "Don’t confuse them with",
      "zh": "别和它们搞混"
    },
    "confuse": [
      {
        "term": {
          "en": "Tauri",
          "zh": "Tauri"
        },
        "body": {
          "en": "Electron's lightweight cousin — same web UI, much smaller app, Rust underneath.",
          "zh": "Electron 的轻量表亲——同样是 Web UI，App 小得多，底层是 Rust。"
        }
      },
      {
        "term": {
          "en": "Catalyst",
          "zh": "Catalyst"
        },
        "body": {
          "en": "An iPad app running on the Mac. Neither native-Mac nor web.",
          "zh": "跑在 Mac 上的 iPad App。既不是原生 Mac，也不是 Web。"
        }
      },
      {
        "term": {
          "en": "React Native",
          "zh": "React Native"
        },
        "body": {
          "en": "JavaScript driving native controls — mostly a mobile story, rare on desktop.",
          "zh": "用 JavaScript 驱动原生控件——主要是移动端的故事，桌面上很少见。"
        }
      }
    ],
    "outro": {
      "en": "Chose Swift? Read AppKit vs SwiftUI next. Chose Electron? Everything you build lives in the Web tab.",
      "zh": "选了 Swift？接着读《AppKit vs SwiftUI》。选了 Electron？你造的所有东西都在 Web 标签页里。"
    }
  }
};
