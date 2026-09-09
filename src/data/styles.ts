import { UIStyle } from "../types/ui";

export const STYLES: UIStyle[] = [
  {
    "slug": "skeuomorphism",
    "name": {
      "en": "Skeuomorphism",
      "ko": "스큐어모피즘 (Skeuomorphism)"
    },
    "tagline": {
      "en": "Skeuomorphism carries real-world materials and objects into digital UI: controls are rendered as if physically made of something — glossy plastic, brushed metal, leather, paper — with the lighting, texture, and affordances of the real thing. A skeuomorphic app teaches itself: a page that looks tearable invites turning, a raised glossy button invites pressing. It peaked in early iOS and Mac OS X, and was largely displaced by flat design around 2013.",
      "ko": "： —— 、、、 —— 、。 App ：，。 iOS Mac OS X ，2013 。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual style. The interaction-metaphor sense (a 'trash can' you drag files to) is the same idea one level up, and NN/g treats both together — but the atlas signals below are about pixels, not metaphors.",
      "ko": "：。「」，NN/g —— ，。"
    },
    "aliases": {
      "en": [
        "the app looks like a real leather notebook",
        "buttons that look like physical shiny buttons you could press",
        "old iphone apps with stitching and paper textures",
        "the calculator that looks like a real calculator",
        "realistic textures like wood and metal in the interface"
      ],
      "ko": [
        "the app looks like a real leather notebook",
        "buttons that look like physical shiny buttons you could press",
        "old iphone apps with stitching and paper textures",
        "the calculator that looks like a real calculator",
        "realistic textures like wood and metal in the interface"
      ]
    },
    "signals": [
      {
        "id": "real-materials",
        "role": "defining",
        "name": {
          "en": "Simulated real materials",
          "ko": "Simulated real materials"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces look made of something physical — leather, paper, linen, brushed metal, green felt — usually with visible texture or grain.",
          "ko": "—— 、、、、 —— 。"
        }
      },
      {
        "id": "dimensional-lighting",
        "role": "defining",
        "name": {
          "en": "Physical lighting model",
          "ko": "Physical lighting model"
        },
        "facet": "depth",
        "description": {
          "en": "Gloss highlights, bevels, and inner shadows imply a light source: buttons bulge outward, fields sink inward, edges catch light.",
          "ko": "Gloss highlights, bevels, and inner shadows imply a light source: buttons bulge outward, fields sink inward, edges catch light."
        }
      },
      {
        "id": "object-metaphor",
        "role": "defining",
        "name": {
          "en": "Real-object metaphors",
          "ko": "Real-object metaphors"
        },
        "facet": "imagery",
        "description": {
          "en": "The UI is drawn AS the object it replaces: a notepad with ruled paper, a bookshelf of covers, a dial you rotate.",
          "ko": "The UI is drawn AS the object it replaces: a notepad with ruled paper, a bookshelf of covers, a dial you rotate."
        }
      },
      {
        "id": "crafted-details",
        "role": "defining",
        "name": {
          "en": "Crafted physical details",
          "ko": "Crafted physical details"
        },
        "facet": "geometry",
        "description": {
          "en": "Stitching, torn-paper edges, embossed or letterpress text, rivets — ornamental traces of how the 'real' object would be manufactured.",
          "ko": "、、、 —— 「」。"
        }
      },
      {
        "id": "gradient-controls",
        "role": "supporting",
        "name": {
          "en": "Glossy gradient controls",
          "ko": "Glossy gradient controls"
        },
        "facet": "depth",
        "description": {
          "en": "Buttons and bars carry vertical gradients with a specular top highlight — the 'gel' or 'aqua' look of pressable plastic.",
          "ko": "， —— 「」 Aqua 。"
        }
      },
      {
        "id": "palette",
        "role": "variable",
        "name": {
          "en": "Palette follows the material",
          "ko": "Palette follows the material"
        },
        "facet": "color",
        "description": {
          "en": "Color comes from the simulated material (tan leather, grey linen), so almost any palette can be skeuomorphic.",
          "ko": "Color comes from the simulated material (tan leather, grey linen), so almost any palette can be skeuomorphic."
        }
      },
      {
        "id": "flat-fills",
        "role": "avoid",
        "name": {
          "en": "Flat unshaded fills",
          "ko": "Flat unshaded fills"
        },
        "facet": "surface",
        "description": {
          "en": "Large flat single-color surfaces with no lighting break the illusion — that's the doorway to Flat Design.",
          "ko": "Large flat single-color surfaces with no lighting break the illusion — that's the doorway to Flat Design."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using skeuomorphism. Defining signals: controls rendered as simulated physical materials (e.g. leather, paper, brushed metal) with visible texture; a consistent lighting model — gloss highlights on raised elements, inner shadows on recessed fields; real-object metaphors for whole surfaces (a notepad drawn as ruled paper); crafted physical details like stitching or embossed text. Keep the specific material palette and density flexible. Use layered gradients with specular highlights, inset box-shadows for recessed fields, and subtle texture images or noise. Do not drift into neumorphism: the decisive difference is that skeuomorphic surfaces imitate real nameable materials, not one uniform soft-extruded surface. Preserve readable text contrast on textured backgrounds, visible controls and focus states, and reduced-motion support.",
      "ko": "（skeuomorphism）。：（、、），； —— ，；（）；、。。、 inset box-shadow ，。：、，。、， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "As old as the GUI itself (the 1980s desktop metaphor), but the style label usually points at Apple's 2007–2012 era — iOS's leather calendars, felt Game Center, and reel-to-reel Podcasts app under Scott Forstall — ended publicly by iOS 7's flat redesign in 2013.",
      "ko": "GUI （ 80 ）， Apple 2007–2012 —— Scott Forstall iOS 、 Game Center、 App —— 2013 iOS 7 。"
    },
    "meta": {}
  },
  {
    "slug": "neumorphism",
    "name": {
      "en": "Neumorphism",
      "ko": "뉴모피즘 (Neumorphism)"
    },
    "tagline": {
      "en": "Neumorphism renders every control as if extruded from, or pressed into, the page itself: background and controls share one matte color, and shape comes entirely from a pair of soft shadows — light from the top-left, dark toward the bottom-right. Nothing has a border and nothing floats; the whole interface reads as one continuous molded surface. It photographs beautifully and tests poorly: the same softness that makes it distinctive erases the contrast real controls need.",
      "ko": "、：， —— ，。，；。，：，。"
    },
    "scope": {
      "en": "Scope: Covers the 2019–2021 'Soft UI' trend look. Its 3D-clay sibling with thicker, toy-like inflation is usually called claymorphism and is a separate (future) entry.",
      "ko": "： 2019–2021 「Soft UI」（ UI）。、 3D （claymorphism），（）。"
    },
    "aliases": {
      "en": [
        "soft buttons pushed out of the background",
        "everything looks like its molded from the same clay-ish surface",
        "the pillowy embossed buttons with two shadows",
        "controls that look stamped into the page",
        "that soft grey dashboard where buttons have no borders"
      ],
      "ko": [
        "soft buttons pushed out of the background",
        "everything looks like its molded from the same clay-ish surface",
        "the pillowy embossed buttons with two shadows",
        "controls that look stamped into the page",
        "that soft grey dashboard where buttons have no borders"
      ]
    },
    "signals": [
      {
        "id": "single-surface",
        "role": "defining",
        "name": {
          "en": "One continuous surface",
          "ko": "One continuous surface"
        },
        "facet": "surface",
        "description": {
          "en": "Controls and background share the SAME matte color — elements aren't placed on the page, they're molded from it.",
          "ko": "Controls and background share the SAME matte color — elements aren't placed on the page, they're molded from it."
        }
      },
      {
        "id": "dual-shadows",
        "role": "defining",
        "name": {
          "en": "Dual soft shadows",
          "ko": "Dual soft shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Every raised element carries two blurred shadows: a light one up-left and a dark one down-right, as if lit from one soft corner light.",
          "ko": "Every raised element carries two blurred shadows: a light one up-left and a dark one down-right, as if lit from one soft corner light."
        }
      },
      {
        "id": "pressed-inset",
        "role": "defining",
        "name": {
          "en": "Pressed (inset) states",
          "ko": "Pressed (inset) states"
        },
        "facet": "depth",
        "description": {
          "en": "Inputs and active states invert the shadow pair inward, so the element looks pressed INTO the surface rather than raised from it.",
          "ko": "Inputs and active states invert the shadow pair inward, so the element looks pressed INTO the surface rather than raised from it."
        }
      },
      {
        "id": "borderless-low-contrast",
        "role": "defining",
        "name": {
          "en": "No borders, whisper contrast",
          "ko": "No borders, whisper contrast"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges exist only where the shadows fade — no outlines, no strong fills; the whole UI sits within a narrow band of one hue.",
          "ko": "—— ，；。"
        }
      },
      {
        "id": "soft-radii",
        "role": "supporting",
        "name": {
          "en": "Generous rounded corners",
          "ko": "Generous rounded corners"
        },
        "facet": "geometry",
        "description": {
          "en": "Large, soft radii everywhere — crisp corners would break the molded illusion.",
          "ko": "Large, soft radii everywhere — crisp corners would break the molded illusion."
        }
      },
      {
        "id": "hue",
        "role": "variable",
        "name": {
          "en": "Any single base hue",
          "ko": "Any single base hue"
        },
        "facet": "color",
        "description": {
          "en": "Classically a pale grey-blue (#e0e5ec), but the effect works on any light, low-saturation base; one saturated accent may survive for the primary action.",
          "ko": "（#e0e5ec），、；。"
        }
      },
      {
        "id": "textures-images",
        "role": "avoid",
        "name": {
          "en": "Textures and materials",
          "ko": "Textures and materials"
        },
        "facet": "imagery",
        "description": {
          "en": "Leather, paper, or gloss would reintroduce skeuomorphism — neumorphic surfaces are matte, uniform, and material-less.",
          "ko": "、 —— 、、。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using neumorphism (Soft UI). Defining signals: controls share the background's exact matte color; raised elements get dual soft shadows (light top-left, dark bottom-right); pressed/input states invert the shadows inward (inset); no borders anywhere; generous rounded corners. Keep the base hue flexible (classically a pale grey-blue like #e0e5ec) and allow one saturated accent for the primary action. Use CSS box-shadow pairs, e.g. raised: box-shadow: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); pressed: the same pair with inset. Do not drift into skeuomorphism; the decisive difference is that neumorphic surfaces are one uniform material-less matte — no textures, gloss, or imitated materials. Preserve readable text contrast, a visible non-shadow cue for focus and states (WCAG non-text contrast will fail on shadows alone), and reduced-motion support.",
      "ko": "（Soft UI）。：；（、）；/（inset）；；。（ #e0e5ec ），。 CSS box-shadow，：box-shadow: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6)；： inset。；、 —— 、、。，（ WCAG ）， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "A Dribbble-era trend: Alexander Plyuto's 2019 'Skeuomorph Mobile Banking' shots went viral, Jason Kelley's comment coined the name, and Michal Malewicz's 2019–2020 articles defined and then warned about it. It stayed mostly a concept-shot style — few shipping products survived its accessibility costs.",
      "ko": "Dribbble ：Alexander Plyuto 2019 「Skeuomorph Mobile Banking」，Jason Kelley ，Michal Malewicz 2019–2020 、。 —— 접근성。"
    },
    "meta": {}
  },
  {
    "slug": "glassmorphism",
    "name": {
      "en": "Glassmorphism",
      "ko": "글래스모피즘 (Glassmorphism)"
    },
    "tagline": {
      "en": "Glassmorphism builds interfaces from translucent, frosted panels: the background — usually something vivid — blurs through each surface, a thin light border catches the 'edge' of the glass, and layers stack with soft shadows to sell the depth. The style lives or dies by its backdrop: over a plain background the glass reads as plain grey; over a colorful gradient it glows.",
      "ko": "： —— —— ，「」，。：，；，。"
    },
    "scope": {
      "en": "Scope: Covers the generic frosted-glass content style. Apple's system-wide adaptive material is Liquid Glass (its own entry), and the older macOS behind-window blur is vibrancy — a UI term, not a style.",
      "ko": "：。Apple （Liquid Glass，）， macOS vibrancy —— UI ，。"
    },
    "aliases": {
      "en": [
        "frosted cards over colorful wallpaper",
        "the see-through blurry card effect",
        "panels that blur whatever is behind them",
        "milky transparent cards with a thin light border",
        "that translucent dashboard look with a gradient background"
      ],
      "ko": [
        "frosted cards over colorful wallpaper",
        "the see-through blurry card effect",
        "panels that blur whatever is behind them",
        "milky transparent cards with a thin light border",
        "that translucent dashboard look with a gradient background"
      ]
    },
    "signals": [
      {
        "id": "frosted-panel",
        "role": "defining",
        "name": {
          "en": "Frosted translucent panels",
          "ko": "Frosted translucent panels"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces are semi-transparent with a strong background blur — content behind is visible but softened, like frosted glass.",
          "ko": "， —— ，。"
        }
      },
      {
        "id": "vivid-backdrop",
        "role": "defining",
        "name": {
          "en": "Vivid backdrop showing through",
          "ko": "Vivid backdrop showing through"
        },
        "facet": "color",
        "description": {
          "en": "A colorful gradient, photo, or aurora sits behind the glass; its color bleeds through every panel and IS most of the palette.",
          "ko": "A colorful gradient, photo, or aurora sits behind the glass; its color bleeds through every panel and IS most of the palette."
        }
      },
      {
        "id": "glass-edge",
        "role": "defining",
        "name": {
          "en": "Thin light edge",
          "ko": "Thin light edge"
        },
        "facet": "geometry",
        "description": {
          "en": "A 1px semi-transparent white border (often brighter on top) catches the rim of each panel, separating glass from glass.",
          "ko": "1px （），。"
        }
      },
      {
        "id": "layered-depth",
        "role": "defining",
        "name": {
          "en": "Layered floating depth",
          "ko": "Layered floating depth"
        },
        "facet": "depth",
        "description": {
          "en": "Panels float above the backdrop and above each other with soft, wide shadows — the stack of sheets is part of the look.",
          "ko": "、， —— 「」。"
        }
      },
      {
        "id": "white-ink",
        "role": "supporting",
        "name": {
          "en": "Light ink on glass",
          "ko": "Light ink on glass"
        },
        "facet": "typography",
        "description": {
          "en": "Text and icons are usually white or near-white with slight transparency steps for hierarchy.",
          "ko": "Text and icons are usually white or near-white with slight transparency steps for hierarchy."
        }
      },
      {
        "id": "backdrop-content",
        "role": "variable",
        "name": {
          "en": "What the backdrop is",
          "ko": "What the backdrop is"
        },
        "facet": "imagery",
        "description": {
          "en": "Gradient mesh, aurora, photography, or brand color field — any vivid, soft backdrop works; the glass recipe stays the same.",
          "ko": "、、、 —— ；。"
        }
      },
      {
        "id": "opaque-panels",
        "role": "avoid",
        "name": {
          "en": "Opaque or unblurred panels",
          "ko": "Opaque or unblurred panels"
        },
        "facet": "surface",
        "description": {
          "en": "Solid cards (or transparency without blur) lose the frosted read — transparency alone is just low opacity, not glass.",
          "ko": "（） —— ，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using glassmorphism. Defining signals: semi-transparent panels with a strong backdrop blur; a vivid gradient or photographic backdrop whose color bleeds through every panel; a thin 1px semi-transparent white border on each panel edge; layered floating depth with soft wide shadows. Keep the backdrop's specific colors and imagery flexible. Use CSS backdrop-filter: blur(16px) with background: rgba(255,255,255,0.12) (or a dark equivalent) and border: 1px solid rgba(255,255,255,0.25). Do not drift into Apple's Liquid Glass; the decisive difference is that glassmorphism is a decorative skin for any surface including content cards, while Liquid Glass reserves glass for the floating control layer above content. Preserve readable text over every region the backdrop can produce (add a contrast scrim if needed), visible controls and focus states, and reduced-motion/reduced-transparency fallbacks.",
      "ko": "（glassmorphism）。：；，； 1px ；。。 CSS backdrop-filter: blur(16px)， background: rgba(255,255,255,0.12)（） border: 1px solid rgba(255,255,255,0.25)。 Apple ；，。（ scrim），， reduced-motion / reduced-transparency 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The effect is decades old — Windows Vista's Aero glass (2006), iOS 7's blur layers (2013), macOS vibrancy — but the style label dates to Michal Malewicz's 2020 article, after the look spread through Dribbble and Big Sur-era redesigns.",
      "ko": "—— Windows Vista Aero （2006）、iOS 7 （2013）、macOS vibrancy —— Michal Malewicz 2020 ， Dribbble Big Sur 。"
    },
    "meta": {}
  },
  {
    "slug": "liquid-glass",
    "name": {
      "en": "Liquid Glass",
      "ko": "리퀴드 글래스 (Liquid Glass)"
    },
    "tagline": {
      "en": "Liquid Glass is Apple's adaptive material for controls and navigation: toolbars, tab bars, buttons, and sliders render as lens-like glass that floats in its own layer above app content, refracting what scrolls beneath and re-tinting itself for legibility in light and dark contexts. It is functional, not decorative — Apple applies it to the control layer and keeps content itself opaque. Capsule shapes and concentric corner radii are part of the geometry.",
      "ko": "Apple ：、、，，，。， —— Apple ，。。"
    },
    "scope": {
      "en": "Scope: 'SwiftUI style' is not a style — SwiftUI is Apple's UI framework. Apps built with it currently LOOK like Liquid Glass; before 2025 they had the flatter platform-native Apple look, and early Mac OS X's candy-and-pinstripes look was Aqua. If someone says 'make it look like SwiftUI', they usually mean this entry.",
      "ko": "：「SwiftUI 」 —— SwiftUI Apple UI 。 App ；2025 Apple ， Mac OS X Aqua。「 SwiftUI 」，。"
    },
    "aliases": {
      "en": [
        "the new apple design where buttons look like water drops",
        "the swiftui look",
        "ios buttons that look like real glass and bend whats behind them",
        "apple's new transparent bubbly toolbar style",
        "the glass tab bar that floats over the app content"
      ],
      "ko": [
        "the new apple design where buttons look like water drops",
        "the swiftui look",
        "ios buttons that look like real glass and bend whats behind them",
        "apple's new transparent bubbly toolbar style",
        "the glass tab bar that floats over the app content"
      ]
    },
    "signals": [
      {
        "id": "control-layer",
        "role": "defining",
        "name": {
          "en": "Glass = the control layer",
          "ko": "Glass = the control layer"
        },
        "facet": "layout",
        "description": {
          "en": "Only controls and navigation are glass — bars, buttons, sliders float above the app; the content beneath stays opaque and full-contrast.",
          "ko": "—— 、、；、。"
        }
      },
      {
        "id": "lensing",
        "role": "defining",
        "name": {
          "en": "Lensing, not just blur",
          "ko": "Lensing, not just blur"
        },
        "facet": "depth",
        "description": {
          "en": "The material behaves like a real lens: it bends and concentrates light from what's beneath, with bright edge highlights — richer than a flat frosted blur.",
          "ko": "：， —— 。"
        }
      },
      {
        "id": "adaptive-tint",
        "role": "defining",
        "name": {
          "en": "Adaptive self-tinting",
          "ko": "Adaptive self-tinting"
        },
        "facet": "color",
        "description": {
          "en": "The glass continuously re-tints from the content scrolling under it and flips between light and dark appearance on its own to stay legible.",
          "ko": "The glass continuously re-tints from the content scrolling under it and flips between light and dark appearance on its own to stay legible."
        }
      },
      {
        "id": "capsule-concentric",
        "role": "defining",
        "name": {
          "en": "Capsule and concentric geometry",
          "ko": "Capsule and concentric geometry"
        },
        "facet": "geometry",
        "description": {
          "en": "Controls tend to capsules; nested corners share a common center (concentric radii), so the glass shapes sit optically flush inside their containers.",
          "ko": "Controls tend to capsules; nested corners share a common center (concentric radii), so the glass shapes sit optically flush inside their containers."
        }
      },
      {
        "id": "morphing-controls",
        "role": "supporting",
        "name": {
          "en": "Controls morph fluidly",
          "ko": "Controls morph fluidly"
        },
        "facet": "motion",
        "description": {
          "en": "Glass elements merge, split, and reshape as context changes — a tab bar shrinking on scroll, a button expanding into a menu.",
          "ko": "、、 —— ，。"
        }
      },
      {
        "id": "platform-scope",
        "role": "variable",
        "name": {
          "en": "Underlying content",
          "ko": "Underlying content"
        },
        "facet": "imagery",
        "description": {
          "en": "Anything can sit beneath the glass — photos, maps, lists; the material adapts to it rather than requiring a curated backdrop.",
          "ko": "—— 、、；，。"
        }
      },
      {
        "id": "glass-content",
        "role": "avoid",
        "name": {
          "en": "Glass content cards",
          "ko": "Glass content cards"
        },
        "facet": "surface",
        "description": {
          "en": "Making content itself translucent — glass cards on glass backgrounds — is exactly what Apple's guidance avoids; that's generic glassmorphism, and it costs legibility.",
          "ko": "—— —— Apple ；，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in the spirit of Apple's Liquid Glass. Defining signals: glass is reserved for the floating control layer (toolbars, tab bars, buttons) above opaque content; the material lenses what's beneath it — blur plus refraction-like edge highlights, not flat frost; controls adapt their tint to stay legible over changing content; capsule shapes with concentric corner radii. Keep the underlying content unrestricted. On Apple platforms use the real APIs — SwiftUI .glassEffect(), glassEffect(.regular, in: .capsule), and standard bars get it automatically; on the web approximate with backdrop-filter: blur + saturate, layered inner highlights, and capsule radii. Do not drift into generic glassmorphism; the decisive difference is that content never becomes glass — only controls float as glass above it. Preserve legibility over every content region (the real material self-adapts — your approximation must too), visible focus states, and honor Reduce Transparency / Reduce Motion.",
      "ko": "Apple （Liquid Glass）。：（、、）； —— ，；；。。 Apple API —— SwiftUI .glassEffect()、glassEffect(.regular, in: .capsule)，； Web backdrop-filter: blur + saturate、。； —— 。（ —— ），， Reduce Transparency / Reduce Motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Introduced by Apple at WWDC 2025 as the first unified design language across iPhone, iPad, Mac, Watch, and TV — Apple credits visionOS's glass optics as the inspiration, and ships it as a system material with SwiftUI/UIKit/AppKit APIs rather than a mere visual theme.",
      "ko": "Apple WWDC 2025 ， iPhone、iPad、Mac、Watch TV —— Apple visionOS ， SwiftUI/UIKit/AppKit API ，。"
    },
    "meta": {}
  },
  {
    "slug": "web-brutalism",
    "name": {
      "en": "Web Brutalism",
      "ko": "웹 브루탈리즘 (Web Brutalism)"
    },
    "tagline": {
      "en": "Web Brutalism treats the browser's own materials as the finished surface: default or system fonts, unstyled-looking links, visible document structure, plain borders and horizontal rules, and density over polish. Nothing pretends to be anything else — no gradients imitating glass, no shadows imitating depth. At its best it's honest and fast (Craigslist, Hacker News, early-web personal sites); at its worst the label gets stretched over anything unpolished.",
      "ko": "：、、、，。——，。（Craigslist、Hacker News、）；，。"
    },
    "scope": {
      "en": "Scope: Distinct from architectural Brutalism (exposed concrete and mass — the analogy's source), and from Neobrutalism (a styled, saturated, thick-border graphic look that is anything but default). The nostalgic table-and-GIF personal-site look is Vernacular Web, a separate (future) entry.",
      "ko": "：（——），（、、，「」）。 GIF （Vernacular Web），（）。"
    },
    "aliases": {
      "en": [
        "ugly raw html website",
        "site that looks like no css was written",
        "just times new roman and blue links",
        "the bare-bones craigslist look",
        "web page that shows its structure with no decoration"
      ],
      "ko": [
        "ugly raw html website",
        "site that looks like no css was written",
        "just times new roman and blue links",
        "the bare-bones craigslist look",
        "web page that shows its structure with no decoration"
      ]
    },
    "signals": [
      {
        "id": "browser-defaults",
        "role": "defining",
        "name": {
          "en": "Browser-default materials",
          "ko": "Browser-default materials"
        },
        "facet": "typography",
        "description": {
          "en": "Times/system serif or monospace, default-blue underlined links, visited-purple — the stack looks unstyled even when it's deliberate.",
          "ko": "Times/，，——，。"
        }
      },
      {
        "id": "exposed-structure",
        "role": "defining",
        "name": {
          "en": "Exposed document structure",
          "ko": "Exposed document structure"
        },
        "facet": "layout",
        "description": {
          "en": "The page reads as a document: headings, lists, tables, and <hr> dividers in source order — structure IS the layout.",
          "ko": "：、、 <hr> ——。"
        }
      },
      {
        "id": "no-decoration",
        "role": "defining",
        "name": {
          "en": "Zero decorative rendering",
          "ko": "Zero decorative rendering"
        },
        "facet": "depth",
        "description": {
          "en": "No shadows, gradients, rounded corners, or imitation materials; at most 1px solid borders. Flat white (or single-color) ground.",
          "ko": "、、； 1px 。（）。"
        }
      },
      {
        "id": "utility-density",
        "role": "defining",
        "name": {
          "en": "Utility-first density",
          "ko": "Utility-first density"
        },
        "facet": "layout",
        "description": {
          "en": "Information is packed tight and loads instantly — the aesthetic argument is speed and honesty, not beauty.",
          "ko": "Information is packed tight and loads instantly — the aesthetic argument is speed and honesty, not beauty."
        }
      },
      {
        "id": "mono-accents",
        "role": "variable",
        "name": {
          "en": "Monospace / all-caps accents",
          "ko": "Monospace / all-caps accents"
        },
        "facet": "typography",
        "description": {
          "en": "Many brutalist sites swap to monospace or shouting caps for flavor; others stay pure serif. Both count.",
          "ko": "Many brutalist sites swap to monospace or shouting caps for flavor; others stay pure serif. Both count."
        }
      },
      {
        "id": "styled-rawness",
        "role": "avoid",
        "name": {
          "en": "Styled 'rawness'",
          "ko": "Styled 'rawness'"
        },
        "facet": "color",
        "description": {
          "en": "Saturated color blocks, thick designed borders, and hard offset shadows are a costume of rawness — that's Neobrutalism.",
          "ko": "、「」——。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the page using strict Web Brutalism. Defining signals: browser-default materials (Times/system serif or monospace, default-blue underlined links); exposed document structure — headings, lists, tables, horizontal rules in source order; zero decorative rendering (no shadows, gradients, or rounded corners; at most 1px solid borders on a plain ground); utility-first density that loads instantly. Keep monospace vs serif and all-caps accents flexible. Use semantic HTML with minimal CSS — default UA styles are the design; resist resets that soften them. Do not drift into Neobrutalism; the decisive difference is that nothing here is styled to look raw — saturated blocks, thick designed borders, and offset shadows would make it a graphic costume. Preserve readable text sizes, focus visibility, and honest link affordances (underlines stay).",
      "ko": "。：（Times/、）；——、、、；（、、； 1px ）；、。、。 HTML CSS——UA ； reset。；「」——、。、，（）。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Named by analogy to architecture's béton brut ('raw concrete'); the web usage spread in the mid-2010s through Pascal Deville's brutalistwebsites.com and essays like Smashing Magazine's 'split personality of brutalist web development', as a reaction against the sameness of polished startup sites.",
      "ko": "béton brut（「」）；2010 ， Pascal Deville brutalistwebsites.com Smashing Magazine 「split personality of brutalist web development」，。"
    },
    "meta": {}
  },
  {
    "slug": "neobrutalism",
    "name": {
      "en": "Neobrutalism",
      "ko": "네오브루탈리즘 (Neobrutalism)"
    },
    "tagline": {
      "en": "Neobrutalism is a designed graphic language: flat, saturated color blocks outlined in thick black strokes, with hard offset shadows — solid black rectangles displaced a few pixels, no blur — and chunky display type. Elements read like stickers or risograph prints; pressing a button often physically 'pushes' it into its shadow. Despite the name it is the opposite of raw: every border and shadow is a deliberate illustration choice.",
      "ko": "：，——、——。 Riso ；，「」。，「」：。"
    },
    "scope": {
      "en": "Scope: Takes brutalism's name but not its method — see Web Brutalism for the genuinely-raw sibling, and architectural Brutalism (exposed concrete) for where the word started. Memphis-style geometric confetti often decorates neobrutalist pages but is its own movement.",
      "ko": "：，——「」，（）。，。"
    },
    "aliases": {
      "en": [
        "bright blocks with black outlines and hard shadows",
        "buttons with the thick black border and the solid shadow that doesn't blur",
        "that yellow and black sticker-looking website style",
        "cartoonish chunky ui with bold borders",
        "the gumroad-looking bold flat style"
      ],
      "ko": [
        "bright blocks with black outlines and hard shadows",
        "buttons with the thick black border and the solid shadow that doesn't blur",
        "that yellow and black sticker-looking website style",
        "cartoonish chunky ui with bold borders",
        "the gumroad-looking bold flat style"
      ]
    },
    "signals": [
      {
        "id": "thick-outlines",
        "role": "defining",
        "name": {
          "en": "Thick black outlines",
          "ko": "Thick black outlines"
        },
        "facet": "geometry",
        "description": {
          "en": "Every element — cards, buttons, inputs, even images — wears a uniform 2–3px solid black border, like an inked comic panel.",
          "ko": "——、、，—— 2–3px ，。"
        }
      },
      {
        "id": "hard-shadows",
        "role": "defining",
        "name": {
          "en": "Hard offset shadows",
          "ko": "Hard offset shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Shadows are solid black shapes displaced down-right with ZERO blur — graphic depth, not simulated lighting. Pressing collapses the offset.",
          "ko": "，——，。。"
        }
      },
      {
        "id": "saturated-blocks",
        "role": "defining",
        "name": {
          "en": "Saturated flat color blocks",
          "ko": "Saturated flat color blocks"
        },
        "facet": "color",
        "description": {
          "en": "Unapologetic fills — yellow, hot pink, lime, cyan — laid flat next to each other on a cream or white ground; no gradients.",
          "ko": "——、、、——；。"
        }
      },
      {
        "id": "chunky-type",
        "role": "defining",
        "name": {
          "en": "Chunky display type",
          "ko": "Chunky display type"
        },
        "facet": "typography",
        "description": {
          "en": "Bold, blocky grotesks or display faces, often oversized; body text stays plain so the headings can shout.",
          "ko": "、 grotesk ，；，。"
        }
      },
      {
        "id": "sticker-shapes",
        "role": "supporting",
        "name": {
          "en": "Sticker shapes and doodles",
          "ko": "Sticker shapes and doodles"
        },
        "facet": "imagery",
        "description": {
          "en": "Stars, blobby badges, arrows, and squiggles with the same black outlines, scattered like stickers.",
          "ko": "Stars, blobby badges, arrows, and squiggles with the same black outlines, scattered like stickers."
        }
      },
      {
        "id": "press-interaction",
        "role": "supporting",
        "name": {
          "en": "Push-into-shadow presses",
          "ko": "Push-into-shadow presses"
        },
        "facet": "motion",
        "description": {
          "en": "Hover/active states translate the element toward its shadow, as if pressing a physical sticker flat.",
          "ko": "hover/active ，。"
        }
      },
      {
        "id": "palette-choice",
        "role": "variable",
        "name": {
          "en": "Which loud palette",
          "ko": "Which loud palette"
        },
        "facet": "color",
        "description": {
          "en": "Yellow-black is the cliché but any high-saturation set works; the borders and shadows carry the style, not one specific hue.",
          "ko": "Yellow-black is the cliché but any high-saturation set works; the borders and shadows carry the style, not one specific hue."
        }
      },
      {
        "id": "soft-rendering",
        "role": "avoid",
        "name": {
          "en": "Soft rendering",
          "ko": "Soft rendering"
        },
        "facet": "depth",
        "description": {
          "en": "Blurred shadows, gradients, or translucency dissolve the inked-print effect instantly — softness is the enemy.",
          "ko": "、——「」。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Neobrutalism. Defining signals: a uniform 2–3px solid black border on every element; hard offset shadows — solid black, displaced ~4px down-right, zero blur (box-shadow: 4px 4px 0 #000); flat saturated color blocks (e.g. yellow, hot pink, lime) on a cream or white ground with no gradients; bold chunky display type for headings. Keep the specific palette and any sticker doodads flexible. Active states translate the element into its shadow (transform: translate(4px,4px) with the shadow removed). Do not drift into Web Brutalism; the decisive difference is that this look is heavily styled — removing the borders, shadows, and color in favor of browser defaults would make it brutalist proper. Preserve 4.5:1 text contrast on every colored block (black text on saturated fills usually passes; white on yellow never does), visible focus indicators distinct from the decorative borders, and reduced-motion support for press animations.",
      "ko": "。： 2–3px ；——、 4px、（box-shadow: 4px 4px 0 #000）；（、、），；。。active （transform: translate(4px,4px) ）。；——、、，。 4.5:1（；），， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Emerged around 2020–2022 in product marketing and portfolio sites (Gumroad's 2021 redesign is the era's poster child), catalogued by NN/g in 2023 as a reaction to soft, same-looking SaaS design — flat design turned up to eleven with comic-book construction.",
      "ko": "2020–2022 （Gumroad 2021 ），2023 NN/g ——、 SaaS ：，。"
    },
    "meta": {}
  },
  {
    "slug": "y2k",
    "name": {
      "en": "Y2K Digital Aesthetic",
      "ko": "Y2K 디지털 에스테틱 (Y2K)"
    },
    "tagline": {
      "en": "The Y2K digital aesthetic is millennium-turn techno-optimism rendered literally: liquid chrome and brushed metal, glossy gel and plastic surfaces, iridescent blue-silver palettes, orbs and blobs, wide techno type, and rendered 3D everything. It's the look of a future imagined through new consumer tech — translucent iMacs, early CGI, rave flyers, and 'cyber' branding — shiny, synthetic, and unembarrassed.",
      "ko": "Y2K ：、、、、， 3D 。 —— iMac、 CGI、 “cyber” —— 、，。"
    },
    "scope": {
      "en": "Scope: Covers the digital/graphic look, not Y2K fashion. The darker neon-grid retro strain is Synthwave/Retrofuturism (future entries); the glossy NATURE-infused successor is Frutiger Aero, its own entry and this one's closest neighbor.",
      "ko": "：/， Y2K 。 Synthwave/Retrofuturism（）； Frutiger Aero，，。"
    },
    "aliases": {
      "en": [
        "chrome bubblegum millennium interface",
        "shiny metallic text with lens flares like old cd covers",
        "the silver and electric blue futuristic 2000s look",
        "glossy plastic bubble buttons like early mac",
        "that iridescent chrome sticker rave flyer style"
      ],
      "ko": [
        "chrome bubblegum millennium interface",
        "shiny metallic text with lens flares like old cd covers",
        "the silver and electric blue futuristic 2000s look",
        "glossy plastic bubble buttons like early mac",
        "that iridescent chrome sticker rave flyer style"
      ]
    },
    "signals": [
      {
        "id": "chrome-metal",
        "role": "defining",
        "name": {
          "en": "Liquid chrome and metal",
          "ko": "Liquid chrome and metal"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror-finish chrome, brushed steel, and silver gradients — type and frames rendered as if machined and polished.",
          "ko": "、 —— 。"
        }
      },
      {
        "id": "gel-gloss",
        "role": "defining",
        "name": {
          "en": "Gel and glossy plastic",
          "ko": "Gel and glossy plastic"
        },
        "facet": "depth",
        "description": {
          "en": "Translucent candy-like buttons and blobs with strong specular highlights — the Aqua-era 'you want to lick it' gloss.",
          "ko": "， —— Aqua “” 。"
        }
      },
      {
        "id": "iridescent-palette",
        "role": "defining",
        "name": {
          "en": "Iridescent blue-silver palette",
          "ko": "Iridescent blue-silver palette"
        },
        "facet": "color",
        "description": {
          "en": "Electric blue, silver, white, and holographic cyan-magenta shifts — cool synthetic color, rarely earthy.",
          "ko": "、、，- —— ，。"
        }
      },
      {
        "id": "techno-type",
        "role": "defining",
        "name": {
          "en": "Wide techno type",
          "ko": "Wide techno type"
        },
        "facet": "typography",
        "description": {
          "en": "Extended, rounded or squared techno faces (Eurostile-flavored), often italicized, outlined, or chromed.",
          "ko": "、（Eurostile ），、。"
        }
      },
      {
        "id": "orbs-blobs",
        "role": "supporting",
        "name": {
          "en": "Orbs, blobs, and wireframes",
          "ko": "Orbs, blobs, and wireframes"
        },
        "facet": "imagery",
        "description": {
          "en": "Rendered spheres, liquid blobs, globes, wireframe grids, and lens flares floating as decoration.",
          "ko": "Rendered spheres, liquid blobs, globes, wireframe grids, and lens flares floating as decoration."
        }
      },
      {
        "id": "pixel-cyber",
        "role": "variable",
        "name": {
          "en": "Pixel/cyber garnish",
          "ko": "Pixel/cyber garnish"
        },
        "facet": "imagery",
        "description": {
          "en": "Tiny pixel fonts, scanlines, and 'cyber' interface chrome appear in some strains and not others.",
          "ko": "、 “cyber” ，、。"
        }
      },
      {
        "id": "nature-imagery",
        "role": "avoid",
        "name": {
          "en": "Nature imagery",
          "ko": "Nature imagery"
        },
        "facet": "imagery",
        "description": {
          "en": "Grass, water, fish, and sky shift the mood from synthetic futurism to eco-tech — that's Frutiger Aero territory.",
          "ko": "、、 —— Frutiger Aero 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the piece using the Y2K digital aesthetic. Defining signals: liquid-chrome/metallic surfaces (silver gradient fills with mirror highlights); glossy translucent gel buttons and blobs with strong specular top highlights; an iridescent electric-blue/silver/white palette with occasional holographic cyan-magenta shifts; wide techno display type (Eurostile-flavored, often italic or chromed). Supporting garnish to use sparingly: rendered orbs, globes, wireframe grids, lens flares, tiny pixel-font labels. Keep the exact palette temperature and garnish density flexible. Use layered CSS gradients for chrome (alternating light/dark stops), radial-gradient highlights for gel, and background-clip: text for chromed type. Do not drift into Frutiger Aero; the decisive difference is that Y2K's optimism is synthetic — no grass, water, sky, or nature photography. Preserve readable text (chrome type needs a dark backing or outline to hit 4.5:1), visible focus states, and reduced-motion support for any shine sweeps.",
      "ko": "Y2K 。：/（）；，；//，-；（Eurostile ，）。：、、、、。。 CSS （）， radial-gradient， background-clip: text。 Frutiger Aero； Y2K —— 、、。（ 4.5:1）、， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Roughly 1997–2004: Apple's translucent iMac G3 and Aqua, PlayStation-era CGI, Designers Republic-style rave graphics, and dot-com 'cyber' branding. Rediscovered and named by 2010s–2020s internet archaeology (CARI et al.) and the fashion/graphics revival that followed.",
      "ko": "1997–2004 ： iMac G3 Aqua、PlayStation CGI、Designers Republic ， dot-com “cyber” 。2010 2020 （CARI ），。"
    },
    "meta": {}
  },
  {
    "slug": "frutiger-aero",
    "name": {
      "en": "Frutiger Aero",
      "ko": "프루티거 에어로 (Frutiger Aero)"
    },
    "tagline": {
      "en": "Frutiger Aero is the glossy, nature-infused optimism of roughly 2004–2013: bright blue skies and water, green grass, bubbles, fish, and light rays fused with translucent glass panels, aqua buttons, and clean humanist type. Technology presents itself as fresh, ecological, and frictionless — the future as a sunny day. It's the era of Windows Vista/7 wallpapers, glossy media players, and Web 2.0 product sites.",
      "ko": "Frutiger Aero 2004–2013 、：、、、，、aqua 、。、、 —— 。 Windows Vista/7 、 Web 2.0 。"
    },
    "scope": {
      "en": "Scope: Windows Aero is Microsoft's vendor design language of the same era — an ingredient and namesake, not an exact alias. The synthetic chrome-and-cyber look that PRECEDED it is Y2K, this entry's closest neighbor.",
      "ko": "：Windows Aero —— ，。 Y2K，。"
    },
    "aliases": {
      "en": [
        "glossy grass bubbles old windows future",
        "the blue sky and green grass wallpaper vibe with shiny buttons",
        "water droplets and fish and glassy interfaces from 2008",
        "that clean glossy nature-tech look like old windows",
        "bubbles floating over a bright blue gradient"
      ],
      "ko": [
        "glossy grass bubbles old windows future",
        "the blue sky and green grass wallpaper vibe with shiny buttons",
        "water droplets and fish and glassy interfaces from 2008",
        "that clean glossy nature-tech look like old windows",
        "bubbles floating over a bright blue gradient"
      ]
    },
    "signals": [
      {
        "id": "nature-tech",
        "role": "defining",
        "name": {
          "en": "Nature fused with tech",
          "ko": "Nature fused with tech"
        },
        "facet": "imagery",
        "description": {
          "en": "Skies, water, grass, leaves, fish, and bubbles as the ambient world the UI floats in — ecology as a tech promise.",
          "ko": "、、、、， UI —— 。"
        }
      },
      {
        "id": "aero-glass",
        "role": "defining",
        "name": {
          "en": "Glossy glass and aqua surfaces",
          "ko": "Glossy glass and aqua surfaces"
        },
        "facet": "surface",
        "description": {
          "en": "Translucent panels and buttons with strong curved specular highlights — wet, light-filled gloss rather than matte frost.",
          "ko": "， —— 、，。"
        }
      },
      {
        "id": "sky-palette",
        "role": "defining",
        "name": {
          "en": "Sky-blue / grass-green palette",
          "ko": "Sky-blue / grass-green palette"
        },
        "facet": "color",
        "description": {
          "en": "Luminous cyan-blues and fresh greens with white light — bright, clean, and warm-lit, never murky.",
          "ko": "， —— 、、，。"
        }
      },
      {
        "id": "humanist-type",
        "role": "defining",
        "name": {
          "en": "Clean humanist sans type",
          "ko": "Clean humanist sans type"
        },
        "facet": "typography",
        "description": {
          "en": "Friendly rounded-humanist sans-serifs (the Frutiger/Segoe flavor) in white or sky-dark blue — clarity, not techno styling.",
          "ko": "（Frutiger/Segoe ）， —— ，。"
        }
      },
      {
        "id": "light-effects",
        "role": "supporting",
        "name": {
          "en": "Bokeh, rays, and sheen",
          "ko": "Bokeh, rays, and sheen"
        },
        "facet": "depth",
        "description": {
          "en": "Soft light circles, sun rays through water, and diagonal sheen sweeps give everything a freshly-washed sparkle.",
          "ko": "Soft light circles, sun rays through water, and diagonal sheen sweeps give everything a freshly-washed sparkle."
        }
      },
      {
        "id": "subject-matter",
        "role": "variable",
        "name": {
          "en": "Which slice of nature",
          "ko": "Which slice of nature"
        },
        "facet": "imagery",
        "description": {
          "en": "Underwater scenes, meadows, droplets on leaves, goldfish, wind turbines — any fresh, sunlit nature reads as the style.",
          "ko": "、、、、 —— 、。"
        }
      },
      {
        "id": "chrome-cyber",
        "role": "avoid",
        "name": {
          "en": "Chrome and cyber styling",
          "ko": "Chrome and cyber styling"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror chrome, techno type, and wireframe grids pull the mood back to synthetic Y2K futurism.",
          "ko": "、 Y2K 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the piece using Frutiger Aero. Defining signals: nature imagery fused with technology (blue sky, water, grass, bubbles, light rays) as the ambient backdrop; glossy translucent 'aqua' surfaces with curved specular highlights; a luminous sky-blue and grass-green palette full of white light; clean humanist sans-serif type (Frutiger/Segoe flavor). Supporting: bokeh circles, sun rays, diagonal sheen sweeps. Keep the specific slice of nature (underwater, meadow, droplets) flexible. Use layered radial/linear gradients for the sky and gloss caps, rgba white overlays for sheen, and generous rounded panels. Do not drift into Y2K; the decisive difference is nature — if chrome, techno type, or cyber grids replace the skies and grass, you've crossed over. Preserve 4.5:1 text contrast over photographic backgrounds (back text with a panel), visible focus states, and reduced-motion support for sheen and bubble effects.",
      "ko": "Frutiger Aero 。：（、、、、）； “aqua” ，；；（Frutiger/Segoe ）。：、、。（、、）。 radial/linear ， rgba ，。 Y2K； —— 、，。 4.5:1 （）、， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Roughly 2004–2013 across consumer tech (Windows Vista/7 era, glossy device UIs, Wii-era menus, Web 2.0 branding). Named retroactively around 2017 by CARI's cataloguers, after Adrian Frutiger's humanist typefaces plus Windows Aero; the nostalgia wave made the label mainstream in the 2020s.",
      "ko": "2004–2013 （Windows Vista/7 、 UI、Wii 、Web 2.0 ）。2017 CARI ， Adrian Frutiger Windows Aero；2020 。"
    },
    "meta": {}
  },
  {
    "slug": "flat-design",
    "name": {
      "en": "Flat Design",
      "ko": "플랫 디자인 (Flat Design)"
    },
    "tagline": {
      "en": "Flat Design renders the interface as pure 2D: surfaces are solid color fills, icons are simple geometric glyphs, and nothing pretends to be lit, embossed, or made of a material. Hierarchy comes from color, size, and typography instead of shadows and bevels. It became the dominant look around 2012–2013 (Windows 8's Metro, then iOS 7) as the direct rejection of skeuomorphism's gloss and texture.",
      "ko": "2D：，，、。、，。 2012–2013 （Windows 8 Metro， iOS 7），。"
    },
    "scope": {
      "en": "Scope: This entry covers strict flat rendering. 'Flat 2.0' — flat surfaces with a few functional shadows reintroduced (Material Design's elevation is the systematic version) — is the common modern compromise, not a separate entry.",
      "ko": "：。「 2.0」——（Material Design elevation ）——，。"
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
      "ko": [
        "everything is just solid colors with no shadows",
        "buttons that are plain rectangles of color",
        "the ios 7 look when everything went flat",
        "icons that are simple white shapes on colored squares",
        "no gradients no textures just clean color blocks",
        "the design style that killed the glossy buttons"
      ]
    },
    "signals": [
      {
        "id": "solid-fills",
        "role": "defining",
        "name": {
          "en": "Solid 2D color fills",
          "ko": "Solid 2D color fills"
        },
        "facet": "surface",
        "description": {
          "en": "Every surface is one flat color — no gradients, no gloss, no texture, no material of any kind.",
          "ko": "——、、，。"
        }
      },
      {
        "id": "no-depth",
        "role": "defining",
        "name": {
          "en": "No simulated depth",
          "ko": "No simulated depth"
        },
        "facet": "depth",
        "description": {
          "en": "No drop shadows, bevels, or highlights; elements sit on one plane and edges are drawn by color change alone.",
          "ko": "No drop shadows, bevels, or highlights; elements sit on one plane and edges are drawn by color change alone."
        }
      },
      {
        "id": "glyph-icons",
        "role": "defining",
        "name": {
          "en": "Simple glyph icons",
          "ko": "Simple glyph icons"
        },
        "facet": "imagery",
        "description": {
          "en": "Icons are reduced to minimal geometric silhouettes — a single-color shape reads as the whole object.",
          "ko": "Icons are reduced to minimal geometric silhouettes — a single-color shape reads as the whole object."
        }
      },
      {
        "id": "color-hierarchy",
        "role": "defining",
        "name": {
          "en": "Color carries the hierarchy",
          "ko": "Color carries the hierarchy"
        },
        "facet": "color",
        "description": {
          "en": "Bright, often saturated block colors distinguish actions and regions — color does the job shadows used to do.",
          "ko": "Bright, often saturated block colors distinguish actions and regions — color does the job shadows used to do."
        }
      },
      {
        "id": "type-does-work",
        "role": "supporting",
        "name": {
          "en": "Typography does the structure",
          "ko": "Typography does the structure"
        },
        "facet": "typography",
        "description": {
          "en": "Clean sans-serif type in strong size steps separates levels of content where boxes and bevels used to.",
          "ko": "Clean sans-serif type in strong size steps separates levels of content where boxes and bevels used to."
        }
      },
      {
        "id": "density",
        "role": "variable",
        "name": {
          "en": "Density is free",
          "ko": "Density is free"
        },
        "facet": "layout",
        "description": {
          "en": "Flat governs RENDERING only — a flat UI can be a sparse landing page or a dense dashboard.",
          "ko": "—— UI ，。"
        }
      },
      {
        "id": "gloss-textures",
        "role": "avoid",
        "name": {
          "en": "Gloss, gradients, textures",
          "ko": "Gloss, gradients, textures"
        },
        "facet": "depth",
        "description": {
          "en": "A specular highlight or leather texture breaks the style — that's the doorway back to skeuomorphism.",
          "ko": "A specular highlight or leather texture breaks the style — that's the doorway back to skeuomorphism."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using flat design. Defining signals: every surface a solid single-color fill — zero gradients, gloss, or texture; no simulated depth — no drop shadows, bevels, or specular highlights, edges drawn by color change alone; icons as simple one-color geometric glyphs; hierarchy carried by color blocks, size, and clean sans-serif type. Keep the palette and density flexible — flat can be sparse or dense. In CSS this means background-color instead of background-image gradients, border: none or 1px solid, box-shadow: none. Do not drift into skeuomorphism: the decisive difference is that nothing imitates a lit physical material. Preserve 4.5:1 text contrast, and make interactive elements identifiable without shadows — clear color affordance, visible hover/pressed states, and visible focus rings.",
      "ko": "。：——、、；——、，；；、。——。 CSS background-color background-image ，border: none 1px solid，box-shadow: none。：。 4.5:1 ，——（affordance）、 hover/pressed 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Rose to prominence around 2012: Microsoft's Metro language (Windows Phone 7 in 2010, Windows 8 in 2012) proved it at OS scale, and Apple's iOS 7 redesign in 2013 ended the skeuomorphic era for good. NN/g traces the deeper roots to Swiss/International typographic style.",
      "ko": "2012 ： Metro （2010 Windows Phone 7，2012 Windows 8）， 2013 iOS 7 。NN/g / 。"
    },
    "meta": {}
  },
  {
    "slug": "minimalism",
    "name": {
      "en": "Minimalism",
      "ko": "미니멀리즘 (Minimalism)"
    },
    "tagline": {
      "en": "Minimalism governs what is ON the screen, not how it's drawn: strip the interface to the fewest elements that still do the job, then let generous negative space and one or two dramatic typographic moments carry the composition. NN/g's study of 112 minimalist sites found the recurring traits — flat-ish surfaces, limited or monochrome palettes, restricted element counts, negative space, and large type as the hero.",
      "ko": "「」，「」：，。NN/g 112 ，——、、、，。"
    },
    "scope": {
      "en": "Scope: Minimalism and Flat Design are different axes: flat governs rendering, minimalism governs content, features, and layout. A UI can be flat but crowded, or minimalist while still using depth and shadow.",
      "ko": "：：，、。 UI ，。"
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
      "ko": [
        "the page with almost nothing on it",
        "huge empty space and one button",
        "giant headline and tons of white space",
        "the apple style page with one product and nothing else",
        "a website that is basically just text and air",
        "everything unnecessary removed until only the message is left"
      ]
    },
    "signals": [
      {
        "id": "negative-space",
        "role": "defining",
        "name": {
          "en": "Negative space as material",
          "ko": "Negative space as material"
        },
        "facet": "layout",
        "description": {
          "en": "Emptiness is deliberate and generous — content floats in air, and the space around a thing is what makes it matter.",
          "ko": "Emptiness is deliberate and generous — content floats in air, and the space around a thing is what makes it matter."
        }
      },
      {
        "id": "restricted-elements",
        "role": "defining",
        "name": {
          "en": "Restricted element count",
          "ko": "Restricted element count"
        },
        "facet": "layout",
        "description": {
          "en": "Few things on screen, and every one earns its place: one nav, one message, one action — decoration is deleted, not restyled.",
          "ko": "，：、、——，。"
        }
      },
      {
        "id": "limited-palette",
        "role": "defining",
        "name": {
          "en": "Limited or monochrome palette",
          "ko": "Limited or monochrome palette"
        },
        "facet": "color",
        "description": {
          "en": "One or two hues at most, often just black/white/grey with a single accent — color restraint is part of the restraint.",
          "ko": "One or two hues at most, often just black/white/grey with a single accent — color restraint is part of the restraint."
        }
      },
      {
        "id": "dramatic-type",
        "role": "defining",
        "name": {
          "en": "Dramatic typography",
          "ko": "Dramatic typography"
        },
        "facet": "typography",
        "description": {
          "en": "With imagery and ornament gone, type goes big: an oversized headline is usually the loudest element on the page.",
          "ko": "With imagery and ornament gone, type goes big: an oversized headline is usually the loudest element on the page."
        }
      },
      {
        "id": "flat-tendency",
        "role": "variable",
        "name": {
          "en": "Rendering is free",
          "ko": "Rendering is free"
        },
        "facet": "depth",
        "description": {
          "en": "Most minimalist sites render flat, but shadow and depth are allowed — minimalism constrains WHAT is shown, not HOW it's lit.",
          "ko": "，——「」，「」。"
        }
      },
      {
        "id": "crowding",
        "role": "avoid",
        "name": {
          "en": "Crowding and ornament",
          "ko": "Crowding and ornament"
        },
        "facet": "layout",
        "description": {
          "en": "A second competing message, decorative flourishes, or a dense widget wall breaks the style regardless of how flat it looks.",
          "ko": "A second competing message, decorative flourishes, or a dense widget wall breaks the style regardless of how flat it looks."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using minimalism. Defining signals: the fewest elements that still do the job — one navigation, one message, one primary action, decoration deleted; generous negative space around everything (think 40 to 60 percent of the viewport empty); a limited palette — near-monochrome with at most one accent color; one dramatic typographic moment, an oversized headline that is the loudest thing on screen. Rendering is flexible — flat fills or subtle shadows both fit. Do not confuse this with flat design: minimalism constrains content and layout, not rendering — if you add content back until the page is busy, it stops being minimalist no matter how flat it is. Preserve discoverability: core actions must stay visible, never hidden behind mystery-meat icons to keep the page empty, and text keeps 4.5:1 contrast even in grey-on-white palettes.",
      "ko": "。：——、、，；（ 40% 60% ）；——，；，。——。：，——，。：，「」；， 4.5:1 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The reduction ethos of mid-century movements (Bauhaus, Swiss typography, 'less is more') applied to interfaces; on the web it became the dominant 'serious brand' register through the 2010s, with Apple's product pages as the most-copied specimen. NN/g's definitional study is from 2015.",
      "ko": "（、、「」）； Web ， 2010 「」，。NN/g 2015 。"
    },
    "meta": {}
  },
  {
    "slug": "claymorphism",
    "name": {
      "en": "Claymorphism",
      "ko": "클레이모피즘 (Claymorphism)"
    },
    "tagline": {
      "en": "Claymorphism makes UI elements look molded from soft modeling clay: fat rounded corners, a light pastel fill, and the signature construction — two inner shadows (a bright one catching the top edge, a darker one shading the bottom) plus one soft outer drop shadow that floats the object above the page. Each element is independently colored and clearly separate from the background, usually paired with chunky 3D 'clay' illustrations.",
      "ko": "UI ：、，——（，），。、， 3D「」。"
    },
    "scope": {
      "en": "Scope: This entry covers the UI treatment. The matching 3D character-illustration style (inflated Blender people with smooth plastic skin) travels with it but is an illustration fashion, not an interface style.",
      "ko": "： UI 。 3D （ Blender ），，。"
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
      "ko": [
        "puffy 3d buttons that look like play-doh",
        "the cards look inflated like balloons",
        "cute squishy looking interface",
        "rounded blobby buttons with soft insides",
        "the 3d clay illustration style dashboards",
        "everything looks like soft rubber toys"
      ]
    },
    "signals": [
      {
        "id": "inflated-volume",
        "role": "defining",
        "name": {
          "en": "Two inner shadows + one outer",
          "ko": "Two inner shadows + one outer"
        },
        "facet": "depth",
        "description": {
          "en": "The signature recipe: a light inner shadow on top, a darker inner shadow at the bottom, and a soft drop shadow below — the surface reads as inflated, not carved.",
          "ko": "：，，——，。"
        }
      },
      {
        "id": "big-radius",
        "role": "defining",
        "name": {
          "en": "Oversized corner radii",
          "ko": "Oversized corner radii"
        },
        "facet": "geometry",
        "description": {
          "en": "Corners are dramatically round — radii around a third of the element's height — so every shape reads as a soft blob, never a card with rounded corners.",
          "ko": "————，「」。"
        }
      },
      {
        "id": "floating-objects",
        "role": "defining",
        "name": {
          "en": "Independently colored, floating objects",
          "ko": "Independently colored, floating objects"
        },
        "facet": "surface",
        "description": {
          "en": "Each element has its own fill distinct from the background and visibly floats above it — nothing is extruded from the page itself.",
          "ko": "Each element has its own fill distinct from the background and visibly floats above it — nothing is extruded from the page itself."
        }
      },
      {
        "id": "pastel-palette",
        "role": "supporting",
        "name": {
          "en": "Light pastel palette",
          "ko": "Light pastel palette"
        },
        "facet": "color",
        "description": {
          "en": "Milky lavenders, mints, corals, and creams — the shadows need light fills to read as volume, and the toy-like mood needs the softness.",
          "ko": "、、——，。"
        }
      },
      {
        "id": "clay-illustration",
        "role": "supporting",
        "name": {
          "en": "3D clay illustration",
          "ko": "3D clay illustration"
        },
        "facet": "imagery",
        "description": {
          "en": "Inflated, smooth 3D characters and objects usually accompany the controls and set the overall toy-world tone.",
          "ko": "Inflated, smooth 3D characters and objects usually accompany the controls and set the overall toy-world tone."
        }
      },
      {
        "id": "same-color-surface",
        "role": "avoid",
        "name": {
          "en": "Element same color as background",
          "ko": "Element same color as background"
        },
        "facet": "surface",
        "description": {
          "en": "If the object's fill matches the page and only shadows imply its shape, you've slid into neumorphism — clay objects are their own color.",
          "ko": "If the object's fill matches the page and only shadows imply its shape, you've slid into neumorphism — clay objects are their own color."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using claymorphism. Defining signals: the clay shadow recipe on cards and buttons — two inner shadows (light at top, darker at bottom) plus one soft outer drop shadow, e.g. box-shadow: 0 24px 40px rgba(x,.18), inset 0 -8px 16px rgba(x,.15), inset 0 8px 16px rgba(255,255,255,.55); oversized corner radii (border-radius roughly 26px on a 56px control); each element independently colored in light pastels, clearly floating above a soft tinted background; chunky friendly type. Keep the exact hues and illustration flexible. Do not drift into neumorphism: the decisive difference is that clay objects have their own color and a visible drop shadow — never the background's color with shadows alone implying shape. Preserve 4.5:1 text contrast on pastel fills, pressed/hover states that deepen the inner shadows rather than removing them, and visible focus rings.",
      "ko": "。：——（）， box-shadow: 0 24px 40px rgba(x,.18), inset 0 -8px 16px rgba(x,.15), inset 0 8px 16px rgba(255,255,255,.55)；（56px 26px border-radius）；，；。。：——。 4.5:1 ，pressed/hover ，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Named in 2021 by Michal Malewicz as the friendlier successor to neumorphism, riding the wave of soft-3D illustration in fintech and edtech marketing; the recipe (two inner shadows + one outer, oversized radii) comes from his original article.",
      "ko": "2021 Michal Malewicz ，， 3D ；（、）。"
    },
    "meta": {}
  },
  {
    "slug": "vernacular-web",
    "name": {
      "en": "Vernacular Web",
      "ko": "버내큘러 웹 (Vernacular Web)"
    },
    "tagline": {
      "en": "The Vernacular Web is the folk architecture of the early web: personal homepages built by amateurs from collected materials — tiled star backgrounds, animated sparkle and flame GIFs, rainbow divider rules, 'welcome to my home page' banners, visitor counters, guestbook links, under-construction signs, and webring badges. It is decorative, personal, and sincere: every ornament was chosen because its owner loved it, not because a system prescribed it.",
      "ko": "：——、 GIF、、「」、、、（webring）。、、：，。"
    },
    "scope": {
      "en": "Scope: This entry covers the genuine 90s amateur look and its faithful revivals. Ironic, deliberately-broken 'ugly on purpose' design is a different move (Internet Ugly, in research), and raw exposed structure is Web Brutalism.",
      "ko": "： 90 。、「」（Internet Ugly，），。"
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
      "ko": [
        "the old geocities page with sparkly gifs",
        "under construction sign and a visitor counter",
        "tiled star background with rainbow divider lines",
        "blinking new sign and a guestbook link",
        "the 90s personal homepage look",
        "welcome to my home page with animated flames"
      ]
    },
    "signals": [
      {
        "id": "tiled-background",
        "role": "defining",
        "name": {
          "en": "Tiled background texture",
          "ko": "Tiled background texture"
        },
        "facet": "surface",
        "description": {
          "en": "A small image repeated edge to edge — starry night sky, clouds, marble — behind everything; the page has wallpaper, not a background color.",
          "ko": "——、、——；，。"
        }
      },
      {
        "id": "gif-ornaments",
        "role": "defining",
        "name": {
          "en": "Animated GIF ornaments",
          "ko": "Animated GIF ornaments"
        },
        "facet": "imagery",
        "description": {
          "en": "Twinkling sparkles, spinning @ signs, flaming rules, the striped UNDER CONSTRUCTION sign — small looping animations used as pure decoration.",
          "ko": "、 @ 、、「」——。"
        }
      },
      {
        "id": "collected-badges",
        "role": "defining",
        "name": {
          "en": "Collected badges and counters",
          "ko": "Collected badges and counters"
        },
        "facet": "layout",
        "description": {
          "en": "A visitor counter, 'sign my guestbook', webring prev/next buttons, 'best viewed in Netscape' badges — trophies of participation, stacked at the page's foot.",
          "ko": "、「」、/、「 Netscape 」——，。"
        }
      },
      {
        "id": "rainbow-defaults",
        "role": "defining",
        "name": {
          "en": "Default type, loud accents",
          "ko": "Default type, loud accents"
        },
        "facet": "typography",
        "description": {
          "en": "System serif or Comic Sans over the wallpaper, centered, with rainbow horizontal rules and multicolored or blinking emphasis — typography as celebration, not system.",
          "ko": "Comic Sans，——，。"
        }
      },
      {
        "id": "centered-column",
        "role": "supporting",
        "name": {
          "en": "One centered column",
          "ko": "One centered column"
        },
        "facet": "layout",
        "description": {
          "en": "Everything center-aligned down one narrow column, section by section, the way <center> made easy.",
          "ko": "，， <center> 。"
        }
      },
      {
        "id": "midi-mood",
        "role": "variable",
        "name": {
          "en": "Ambient extras",
          "ko": "Ambient extras"
        },
        "facet": "motion",
        "description": {
          "en": "Autoplaying MIDI, cursor trails, scrolling marquees — beloved extras that vary page to page.",
          "ko": "MIDI、、——，。"
        }
      },
      {
        "id": "knowing-irony",
        "role": "avoid",
        "name": {
          "en": "Knowing irony or rawness",
          "ko": "Knowing irony or rawness"
        },
        "facet": "imagery",
        "description": {
          "en": "The moment the decoration is a deliberate statement about design itself — exposed structure, ugly-on-purpose — it stops being vernacular and becomes brutalism or anti-design.",
          "ko": "——、——，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in the Vernacular Web style — a sincere 90s GeoCities-era personal homepage, not a parody. Defining signals: a tiled repeating background image (starry sky reads instantly); animated GIF-style ornaments — twinkling sparkles, a striped under-construction badge; a centered single column of system serif type with a rainbow-gradient horizontal rule between sections; the collected-participation footer — visitor counter in green LED digits on black, 'sign my guestbook' link, webring badge, 'best viewed at 800x600' line. Loud colored or blinking emphasis text is period-correct. Keep the specific ornaments flexible — the mood is a proud amateur's decorated scrapbook. Do not drift into web brutalism: this page is ornamented with love, never stripped bare as a statement. Preserve legibility (solid or high-contrast panels behind text over busy wallpaper), respect prefers-reduced-motion by pausing blinks and twinkles, and keep counters and badges decorative, not functional claims.",
      "ko": "—— 90 GeoCities ，。：（）；GIF ——、；，；—— LED 、「」、（webring）、「 800x600」。。——。：，。（）， prefers-reduced-motion ，，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The mid-1990s free-hosting web — GeoCities, Angelfire, Tripod — where millions of first-time authors decorated pages from shared GIF collections. Olia Lialina documented and named the culture in 'A Vernacular Web' (2005) and, with Dragan Espenschied, preserved a terabyte of GeoCities before its 2009 shutdown.",
      "ko": "90 ——GeoCities、Angelfire、Tripod—— GIF 。Olia Lialina 《A Vernacular Web》(2005) ， Dragan Espenschied ， GeoCities 2009 1TB 。"
    },
    "meta": {}
  },
  {
    "slug": "aqua",
    "name": {
      "en": "Aqua",
      "ko": "아쿠아 (Aqua)"
    },
    "tagline": {
      "en": "Aqua is the design language Mac OS X launched with in 2000: controls rendered as translucent candy gel — deep specular highlights over luminous water-blue — on pinstriped surfaces, with gumdrop red/yellow/green window controls, soft drop shadows layering the windows, and fluid animation everywhere (the default button literally pulsed, and windows poured into the Dock through the genie effect). Apple pitched it as an interface with the fluidity and depth of water.",
      "ko": "Aqua Mac OS X 2000 ： —— —— ，、，（， Dock）。。"
    },
    "scope": {
      "en": "Scope: This entry covers the original 2000s-era Aqua (Mac OS X 10.0 through roughly Tiger). Later macOS flattened and frosted the language step by step — don't blend brushed-metal-era, Yosemite, or today's macOS into it; Apple's current glass language is Liquid Glass.",
      "ko": "： 2000 Aqua（Mac OS X 10.0 Tiger ）。 macOS 、 —— 、Yosemite macOS ；（Liquid Glass）。"
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
      "ko": [
        "the old mac buttons that looked like blue candy",
        "gel buttons you wanted to lick",
        "pinstripe windows from early mac os x",
        "the gumdrop red yellow green window buttons",
        "glossy blue scroll bars on old macs",
        "the save button that pulsed like it was breathing"
      ]
    },
    "signals": [
      {
        "id": "candy-gel",
        "role": "defining",
        "name": {
          "en": "Candy-gel controls",
          "ko": "Candy-gel controls"
        },
        "facet": "depth",
        "description": {
          "en": "Buttons and scrollbar thumbs look like translucent gel drops: a bright specular highlight across the top, an inner glow beneath, and color that seems lit from inside.",
          "ko": "Buttons and scrollbar thumbs look like translucent gel drops: a bright specular highlight across the top, an inner glow beneath, and color that seems lit from inside."
        }
      },
      {
        "id": "pinstripe-surface",
        "role": "defining",
        "name": {
          "en": "Pinstriped surfaces",
          "ko": "Pinstriped surfaces"
        },
        "facet": "surface",
        "description": {
          "en": "Window backgrounds and title bars carry fine alternating light stripes — the signature Aqua wallpaper-of-the-chrome.",
          "ko": "—— Aqua 。"
        }
      },
      {
        "id": "gumdrop-controls",
        "role": "defining",
        "name": {
          "en": "Gumdrop window controls",
          "ko": "Gumdrop window controls"
        },
        "facet": "geometry",
        "description": {
          "en": "The close/minimize/zoom trio as glossy red, yellow, and green candy spheres in the title bar's top-left corner.",
          "ko": "//、、，。"
        }
      },
      {
        "id": "water-blue",
        "role": "defining",
        "name": {
          "en": "Luminous water blue",
          "ko": "Luminous water blue"
        },
        "facet": "color",
        "description": {
          "en": "The palette centers on Aqua's namesake: saturated, water-lit blue for default buttons, selection, scrollbars, and progress.",
          "ko": "Aqua ：、，、、。"
        }
      },
      {
        "id": "fluid-motion",
        "role": "supporting",
        "name": {
          "en": "Fluid, liquid motion",
          "ko": "Fluid, liquid motion"
        },
        "facet": "motion",
        "description": {
          "en": "The default button pulses like breathing, and windows minimize through the liquid genie effect — motion sells the water metaphor.",
          "ko": "， Dock —— 。"
        }
      },
      {
        "id": "layered-shadows",
        "role": "supporting",
        "name": {
          "en": "Soft window shadows",
          "ko": "Soft window shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Deep, soft drop shadows float windows in real layers over the desktop — depth Mac OS 9 never had.",
          "ko": "—— Mac OS 9 。"
        }
      },
      {
        "id": "flat-translucency",
        "role": "avoid",
        "name": {
          "en": "Flat frosted translucency",
          "ko": "Flat frosted translucency"
        },
        "facet": "depth",
        "description": {
          "en": "A blurred panel without the gel gloss is a different, later idea — that's glassmorphism/vibrancy territory, not Aqua.",
          "ko": "、 —— /vibrancy ， Aqua。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Apple's original Aqua (early Mac OS X) design language. Defining signals: candy-gel controls — luminous water-blue fills with a bright specular highlight across the top half and an inner glow, e.g. layered radial-gradient highlight over linear-gradient(#5f9ff5, #1862d8); fine pinstriped window surfaces (repeating-linear-gradient, ~1px stripes at low contrast); gumdrop red/yellow/green window controls as glossy spheres, top-left; the default button gently pulsing (a slow glow loop, disabled under prefers-reduced-motion); soft deep window shadows. Keep layout and density flexible — this is chrome and controls, not a layout system. Do not drift into generic glassmorphism: Aqua's material is glossy opaque gel on pinstripes, not blurred frosted panels. Preserve 4.5:1 text contrast on gel fills (white text with a subtle down-shadow is period-correct), full keyboard focus states, and reduced-motion alternatives for the pulse.",
      "ko": "Aqua（ Mac OS X）。： —— ，，， linear-gradient(#5f9ff5, #1862d8) radial-gradient ；（repeating-linear-gradient， 1px ）；，；（， prefers-reduced-motion ）；。 —— ，。：Aqua ，。 4.5:1 （）、， reduced-motion 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Introduced by Steve Jobs at Macworld San Francisco, January 2000, alongside Mac OS X's public debut; shipped in Mac OS X 10.0 (2001) and defined the Mac's look for the decade, its gel gloss echoing the era's translucent iMac hardware.",
      "ko": "2000 1 Steve Jobs Macworld Mac OS X ； Mac OS X 10.0（2001）， Mac ， iMac 。"
    },
    "meta": {}
  },
  {
    "slug": "windows-aero",
    "name": {
      "en": "Windows Aero",
      "ko": "윈도우 에어로 (Windows Aero)"
    },
    "tagline": {
      "en": "Windows Aero is Microsoft's Vista and Windows 7 desktop language: window FRAMES rendered as transparent blurred glass with specular light sweeps, so the desktop glows through every title bar; luminous color gradients; caption buttons that light up under the cursor (the red close glow); shimmering green progress bars; and smooth window motion like Flip 3D and the minimize animation. Microsoft's launch messaging named the glass, the reflections, and the animation as the product.",
      "ko": "Windows Aero Vista Windows 7 ：，，；；（）；； Flip 3D 。、。"
    },
    "scope": {
      "en": "Scope: This entry covers Microsoft's actual OS chrome (Vista 2006 to Windows 7, retired by Windows 8's flat Metro). The broader glossy eco-tech mood of the same years — sky, grass, water imagery — is Frutiger Aero, a retrospective label that borrowed Aero's name.",
      "ko": "： OS （2006 Vista Windows 7， Windows 8 Metro ）。 —— 、、 —— Frutiger Aero， Aero 。"
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
      "ko": [
        "the see-through window borders in windows 7",
        "frosted glass titlebars from vista",
        "the close button that glows red when you hover it",
        "windows with transparent blurry frames",
        "the glassy taskbar with reflections",
        "the green shimmering progress bar from windows 7"
      ]
    },
    "signals": [
      {
        "id": "glass-frame",
        "role": "defining",
        "name": {
          "en": "Transparent blurred window frame",
          "ko": "Transparent blurred window frame"
        },
        "facet": "depth",
        "description": {
          "en": "The title bar and window border are real translucent glass — the wallpaper and windows behind blur through them, while the window's content area stays opaque.",
          "ko": "The title bar and window border are real translucent glass — the wallpaper and windows behind blur through them, while the window's content area stays opaque."
        }
      },
      {
        "id": "specular-sweeps",
        "role": "defining",
        "name": {
          "en": "Specular sweeps and reflections",
          "ko": "Specular sweeps and reflections"
        },
        "facet": "surface",
        "description": {
          "en": "Diagonal light streaks cross the glass and controls, as if the chrome were polished — reflection is part of the material, not an accent.",
          "ko": "， —— ，。"
        }
      },
      {
        "id": "hover-glow",
        "role": "defining",
        "name": {
          "en": "Glowing hot controls",
          "ko": "Glowing hot controls"
        },
        "facet": "color",
        "description": {
          "en": "Controls light up under the cursor: the close button floods red, min/max glow blue, buttons gain a luminous halo — glow is the hover language.",
          "ko": "：，/， —— 。"
        }
      },
      {
        "id": "luminous-gradients",
        "role": "defining",
        "name": {
          "en": "Luminous depth gradients",
          "ko": "Luminous depth gradients"
        },
        "facet": "color",
        "description": {
          "en": "Blues and greens that glow as if backlit — the shimmering green progress bar and pearlescent button fills, never flat color.",
          "ko": "—— 、，。"
        }
      },
      {
        "id": "window-motion",
        "role": "supporting",
        "name": {
          "en": "Smooth window choreography",
          "ko": "Smooth window choreography"
        },
        "facet": "motion",
        "description": {
          "en": "Windows animate open, minimize with a swoop, and stack in Flip 3D — composited motion was the point of the new rendering engine.",
          "ko": "、、 Flip 3D —— 。"
        }
      },
      {
        "id": "rounded-chrome",
        "role": "supporting",
        "name": {
          "en": "Softly rounded chrome",
          "ko": "Softly rounded chrome"
        },
        "facet": "geometry",
        "description": {
          "en": "Window corners and buttons are gently rounded with 1px bright edge highlights lining the glass.",
          "ko": "， 1px 。"
        }
      },
      {
        "id": "nature-imagery",
        "role": "avoid",
        "name": {
          "en": "Nature imagery as requirement",
          "ko": "Nature imagery as requirement"
        },
        "facet": "imagery",
        "description": {
          "en": "Grass, sky, and fish belong to the era's mood, not the OS chrome — needing them means you're describing Frutiger Aero.",
          "ko": "、， OS —— ，설명 Frutiger Aero。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Windows Aero (Vista/7) styling. Defining signals: the window frame as transparent blurred glass — title bar and border show the scene behind them (backdrop-filter: blur(12px) saturate(1.3) on a rgba white/blue tint) while the content area stays opaque; diagonal specular light sweeps across the glass (a rotated linear-gradient white streak at low opacity); caption buttons that GLOW on hover — close floods red with a soft outer halo; luminous gradients for accents, like the shimmering green progress bar (gradient + a slow-moving highlight); 1px bright inner edge lining every glass pane; softly rounded chrome corners. Keep wallpaper and layout flexible — the glass needs something colorful behind it to read. Do not drift into Frutiger Aero: no nature imagery is required — this is the chrome language, not the era's mood board. Preserve title text legibility over unpredictable wallpapers (Aero drew a soft glow behind window titles — replicate it), 4.5:1 contrast for content text, hover glows paired with visible focus states, and reduced-motion alternatives for shimmer and window animation.",
      "ko": "Windows Aero（Vista/7）。： —— （/ rgba backdrop-filter: blur(12px) saturate(1.3)），；（ linear-gradient ，）； —— ，；，（）； 1px ；。 —— 。 Frutiger Aero： —— ，。（Aero —— ）， 4.5:1 ，， reduced-motion 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Shipped with Windows Vista in 2006 (premium editions) as the flagship of the Desktop Window Manager's new composited rendering, refined and default in Windows 7 (2009); Windows 8 (2012) removed the glass for flat Metro chrome.",
      "ko": "2006 Windows Vista（）， Desktop Window Manager ； Windows 7（2009）；Windows 8（2012）， Metro 。"
    },
    "meta": {}
  },
  {
    "slug": "swiss-style",
    "name": {
      "en": "Swiss Style (International Typographic Style)",
      "ko": "스위스 스타일 (Swiss Style)"
    },
    "tagline": {
      "en": "Swiss Style treats graphic design as engineering: content locked to a mathematical grid, set in one neutral grotesk (Helvetica, Akzidenz-Grotesk), aligned flush left, ragged right, printed black on white with a single flat accent — classically Swiss red. Photography is objective documentation, never illustration; decoration is abolished. Crystallized in 1950s Switzerland, it became the default voice of corporate identity and wayfinding, and its grid logic still underpins most 'clean' interfaces.",
      "ko": "：， grotesk （Helvetica、Akzidenz-Grotesk），、， —— 。，；。 1950 ，，「」。"
    },
    "scope": {
      "en": "Scope: Covers the typographic discipline — grid system, neutral grotesk type, flush-left setting, objective photography — wherever it surfaces, from posters to app UIs. The wider 'Swiss design' umbrella (furniture, watches, architecture) stays out; the Minimalism boundary is drawn in confusedWith.",
      "ko": "： —— 、 grotesk、、 —— 。「」（、、）； confusedWith。"
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
      "ko": [
        "posters with huge helvetica and a red square",
        "black and white design with one red accent",
        "that museum poster look where everything snaps to a grid",
        "text all left-aligned with the right edge messy",
        "the 60s corporate annual report style",
        "tons of white space but everything lined up on invisible lines"
      ]
    },
    "signals": [
      {
        "id": "grid-system",
        "role": "defining",
        "name": {
          "en": "Mathematical grid system",
          "ko": "Mathematical grid system"
        },
        "facet": "layout",
        "description": {
          "en": "Every edge and baseline locks to an underlying column grid — classically 4–12 columns with constant gutters, plus a vertical baseline rhythm (e.g. 8px steps). An element that misses its grid line is a defect, not a choice.",
          "ko": "、 —— 4–12 、，（ 8px ）。，。"
        }
      },
      {
        "id": "neutral-grotesk",
        "role": "defining",
        "name": {
          "en": "One neutral grotesk",
          "ko": "grotesk"
        },
        "facet": "typography",
        "description": {
          "en": "Helvetica, Akzidenz-Grotesk, or Univers (Inter or Arial on the web) carries everything alone; hierarchy comes from size and weight only — 700 headlines against 400 body — never from decorative faces.",
          "ko": "Helvetica、Akzidenz-Grotesk Univers（Web Inter Arial）； —— 700 400 —— 。"
        }
      },
      {
        "id": "flush-left",
        "role": "defining",
        "name": {
          "en": "Flush left, ragged right",
          "ko": "Flush left, ragged right"
        },
        "facet": "layout",
        "description": {
          "en": "All text hangs from a hard left axis and the right edge is left to rag. Justified blocks and centered headlines break the discipline instantly.",
          "ko": "All text hangs from a hard left axis and the right edge is left to rag. Justified blocks and centered headlines break the discipline instantly."
        }
      },
      {
        "id": "black-white-red",
        "role": "defining",
        "name": {
          "en": "Black, white, one accent",
          "ko": "Black, white, one accent"
        },
        "facet": "color",
        "description": {
          "en": "Paper-white ground (#fff or #f4f4f0), near-black ink (#111), and exactly one flat accent — classic Swiss red #e30613. No gradients, no second hue.",
          "ko": "（#fff #f4f4f0）、（#111）， —— #e30613。，。"
        }
      },
      {
        "id": "objective-photography",
        "role": "defining",
        "name": {
          "en": "Objective photography",
          "ko": "Objective photography"
        },
        "facet": "imagery",
        "description": {
          "en": "Documentary black-and-white photos, cropped to rectangular grid modules and treated as factual records that replace illustration. Filters, duotones, and staged whimsy are foreign.",
          "ko": "Documentary black-and-white photos, cropped to rectangular grid modules and treated as factual records that replace illustration. Filters, duotones, and staged whimsy are foreign."
        }
      },
      {
        "id": "asymmetric-balance",
        "role": "supporting",
        "name": {
          "en": "Asymmetric balance",
          "ko": "Asymmetric balance"
        },
        "facet": "layout",
        "description": {
          "en": "A heavy typographic mass in one corner counterweighed by empty space elsewhere; the composition balances through grid position, never mirror symmetry.",
          "ko": "A heavy typographic mass in one corner counterweighed by empty space elsewhere; the composition balances through grid position, never mirror symmetry."
        }
      },
      {
        "id": "accent-choice",
        "role": "variable",
        "name": {
          "en": "Which single accent",
          "ko": "Which single accent"
        },
        "facet": "color",
        "description": {
          "en": "Swiss red is the cliché; the rule is one flat accent per composition — blue or orange versions stay Swiss as long as the rest of the discipline holds.",
          "ko": "； —— ，。"
        }
      },
      {
        "id": "ornament",
        "role": "avoid",
        "name": {
          "en": "Ornament and softness",
          "ko": "Ornament and softness"
        },
        "facet": "surface",
        "description": {
          "en": "Drop shadows, gradients, rounded corners, serifs, textures — decoration of any kind marks another school. Swiss surfaces are flat paper and ink.",
          "ko": "、、、、 —— 。。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface as a Swiss Style composition. Defining signals: an explicit 12-column grid, 24px gutters, every edge and baseline snapping to it on an 8px rhythm; one neutral grotesk (Helvetica, Arial, or Inter) with hierarchy by size and weight only — 16px body, 72–96px headlines at weight 700, line-height 0.95, letter-spacing -0.02em; all text flush left, ragged right — never justified, never centered; flat paper ground #ffffff, near-black ink #111111, one flat accent — Swiss red #e30613 — spent on one element (marker, rule, or word); imagery as documentary black-and-white photography cropped to grid rectangles; box-shadow: none, border-radius: 0, no gradients, no textures. Keep accent hue and photo subject flexible. Balance asymmetrically: the big type mass sits off-center, white space counterweighs it. Do not drift into Minimalism; the decisive difference is that Swiss is a system, not an absence — center the type or pick a serif and you have left it. Keep contrast at 4.5:1 (black/white is 21:1; #e30613 on white ~4.9:1), visible keyboard focus, and reduced-motion support.",
      "ko": "（Swiss Style）。： 12 ，24px ，、， 8px ； grotesk（Helvetica、Arial Inter）， —— 16px， 72–96px、 700、line-height 0.95、letter-spacing -0.02em；、 —— ，； #ffffff， #111111， —— #e30613 —— （、）；，；box-shadow: none，border-radius: 0，，。。：，。；「」 —— ，。 4.5:1（ 21:1；#e30613 4.9:1），， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Crystallized in Switzerland in the 1950s around two poles — Ernst Keller's teaching at the Kunstgewerbeschule Zürich, and the Basel school where Armin Hofmann and Emil Ruder taught, with Max Bill carrying the Bauhaus inheritance — and codified by Josef Müller-Brockmann, whose 'Grid Systems in Graphic Design' (1981) remains the manual. Its voice, Helvetica, was drawn by Max Miedinger with Eduard Hoffmann at the Haas foundry in 1957 (renamed from Neue Haas Grotesk in 1960); its elder cousin Akzidenz-Grotesk dates to 1896. The journal Neue Grafik (1958–1965) exported the system worldwide, where it became the default language of corporate identity, posters, and wayfinding.",
      "ko": "1950 —— Ernst Keller （Kunstgewerbeschule Zürich）， Armin Hofmann Emil Ruder ，Max Bill —— Josef Müller-Brockmann ，《Grid Systems in Graphic Design》（1981）。 Helvetica Max Miedinger Eduard Hoffmann 1957 Haas （1960 Neue Haas Grotesk ）； Akzidenz-Grotesk 1896 。《Neue Grafik》（1958–1965），、。"
    },
    "meta": {}
  },
  {
    "slug": "bauhaus",
    "name": {
      "en": "Bauhaus",
      "ko": "바우하우스 (Bauhaus)"
    },
    "tagline": {
      "en": "Bauhaus is the visual language of the 1919–1933 German school that set out to unify art, craft, and industrial production: compositions are built from the primary shapes — circle, triangle, square — filled with unmixed primaries red, yellow, and blue against black and white, while headlines drop capital letters for Herbert Bayer's all-lowercase geometric alphabet. A century later it is still the default shorthand for geometric modernism in posters, logos, and landing pages.",
      "ko": "1919–1933 ，、： —— 、、 —— ，、、，；， Herbert Bayer 。，、Logo 「」。"
    },
    "scope": {
      "en": "Scope: Covers the Bauhaus look as it appears in graphic and UI design — primary-shape construction, a primaries-plus-ink palette, lowercase geometric type. It is not the whole of modernism: Swiss Style is the later grid-locked successor, and De Stijl shares the primaries but locks them into orthogonal black grids.",
      "ko": "： UI —— 、、。：；（De Stijl），。"
    },
    "aliases": {
      "en": [
        "red yellow and blue circles triangles and squares",
        "geometric posters that look like a kandinsky painting",
        "lowercase geometric fonts with no capital letters at all",
        "that primary color art school style with basic shapes",
        "modernist logos made of a circle a triangle and a square"
      ],
      "ko": [
        "red yellow and blue circles triangles and squares",
        "geometric posters that look like a kandinsky painting",
        "lowercase geometric fonts with no capital letters at all",
        "that primary color art school style with basic shapes",
        "modernist logos made of a circle a triangle and a square"
      ]
    },
    "signals": [
      {
        "id": "primary-shapes",
        "role": "defining",
        "name": {
          "en": "Circle, triangle, square only",
          "ko": "Circle, triangle, square only"
        },
        "facet": "geometry",
        "description": {
          "en": "Every decorative element is one of the three pure shapes — no blobs, stars, or freehand curves. Kandinsky's 1923 mapping still reads: yellow triangle, red square, blue circle.",
          "ko": "—— blob、。 1923 ：、、。"
        }
      },
      {
        "id": "primaries-and-ink",
        "role": "defining",
        "name": {
          "en": "Primaries plus black and white",
          "ko": "Primaries plus black and white"
        },
        "facet": "color",
        "description": {
          "en": "Unmixed red (#e3000f), yellow (#ffd300) and blue (#0057a8) on paper white with ink black — flat opaque fills, no tints, no mid-greys, no gradients.",
          "ko": "（#e3000f）、（#ffd300）、（#0057a8） —— ，、。"
        }
      },
      {
        "id": "lowercase-universal-type",
        "role": "defining",
        "name": {
          "en": "All-lowercase geometric type",
          "ko": "All-lowercase geometric type"
        },
        "facet": "typography",
        "description": {
          "en": "Headlines and labels run with text-transform: lowercase in a constructed geometric sans (Futura, Century Gothic) — Bayer's universal-alphabet gesture: capitals abolished, letters built from circles and straight strokes.",
          "ko": "text-transform: lowercase，（Futura、Century Gothic）—— universal ：，。"
        }
      },
      {
        "id": "asymmetric-tension",
        "role": "supporting",
        "name": {
          "en": "Asymmetric diagonal tension",
          "ko": "Asymmetric diagonal tension"
        },
        "facet": "layout",
        "description": {
          "en": "Shapes overlap off-center and collide at angles — diagonal rules and unbalanced placement give the page constructivist energy instead of grid-locked calm.",
          "ko": "、 —— ，。"
        }
      },
      {
        "id": "black-bars-rules",
        "role": "supporting",
        "name": {
          "en": "Ink bars and rules",
          "ko": "Ink bars and rules"
        },
        "facet": "geometry",
        "description": {
          "en": "Solid black bars 4–8px thick and thin rules cut across and around the color shapes, acting as scaffolding and punctuation.",
          "ko": "4–8px 、，，。"
        }
      },
      {
        "id": "flat-matte-planes",
        "role": "defining",
        "name": {
          "en": "Flat matte color planes",
          "ko": "Flat matte color planes"
        },
        "facet": "surface",
        "description": {
          "en": "Zero depth rendering: no shadows, glows, gradients, or textures — each shape is a single solid color with a hard edge.",
          "ko": "：、、 —— 。"
        }
      },
      {
        "id": "mechanical-motion",
        "role": "variable",
        "name": {
          "en": "Mechanical geometric motion",
          "ko": "Mechanical geometric motion"
        },
        "facet": "motion",
        "description": {
          "en": "When things move, they translate or rotate on straight paths in 150–250ms with linear or crisp easing — machine-like, never springy.",
          "ko": "，150–250ms，linear —— ，。"
        }
      },
      {
        "id": "ornament-depth",
        "role": "avoid",
        "name": {
          "en": "Ornament and soft depth",
          "ko": "Ornament and soft depth"
        },
        "facet": "depth",
        "description": {
          "en": "Drop shadows, cute rounded corners, gradients, serifs, or decorative flourishes break it instantly — in Bauhaus the construction is the only ornament.",
          "ko": "、、、 —— ，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build the surface as a Bauhaus composition. Canvas: warm paper #f2eee3, ink #141414. Closed palette: red #e3000f, yellow #ffd300, blue #0057a8 — flat opaque fills only; no tints, gradients, shadows, or textures; corner radius 0–4px. Every decorative element is a pure circle, square, or CSS border-trick triangle (yellow triangle, red square, blue circle); overlap them asymmetrically with one or two diagonal ink bars 4–8px thick — the geometry is the only ornament. Type: constructed geometric sans (Futura, Century Gothic, Avenir Next; web: Jost/Montserrat); headlines/labels use text-transform: lowercase — never a capital; body copy may keep sentence case. Buttons are solid primary blocks with hard edges; hover swaps the fill to another primary, never adds depth. Motion is mechanical: translate/rotate on straight paths, 150–250ms, linear or crisp ease, no spring. Do not drift into Swiss Style: no documentary photography, no mixed-case grotesk on a strict grid, no drained monochrome palette. Keep 4.5:1 text contrast (ink on paper/yellow, paper on red/blue) and a visible focus outline.",
      "ko": "。： #f2eee3， #141414。： #e3000f、 #ffd300、 #0057a8 —— ；、、； 0–4px。、 CSS border （、、）；， 4–8px —— 。：（Futura、Century Gothic、Avenir Next；Web Jost/Montserrat）；/ text-transform: lowercase —— ；。；hover ，。：/，150–250ms，linear ，。：， grotesk，。 4.5:1（/；/），。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The Staatliches Bauhaus was founded in Weimar in 1919 by architect Walter Gropius, merging the city's art academy and crafts school to unite art, craft, and industrial production; it moved to Dessau in 1925 and Berlin in 1932 before closing in 1933 under Nazi pressure. Wassily Kandinsky and Paul Klee taught its formal grammar — Kandinsky's 1923 questionnaire fixed the yellow triangle, red square, and blue circle — while Herbert Bayer's 1925 'universal' alphabet pushed the all-lowercase geometric lettering. After the closure its masters emigrated — Gropius to Harvard, László Moholy-Nagy to found Chicago's New Bauhaus in 1937 — turning a fourteen-year school into the world's default modernist vocabulary.",
      "ko": "（Staatliches Bauhaus）1919 Walter Gropius ，，、；1925 ，1932 ，1933 。Wassily Kandinsky Paul Klee —— 1923 、、 —— Herbert Bayer 1925 universal 。 —— ，László Moholy-Nagy 1937 —— ，。"
    },
    "meta": {}
  },
  {
    "slug": "memphis",
    "name": {
      "en": "Memphis",
      "ko": "멤피스 (Memphis)"
    },
    "tagline": {
      "en": "Memphis is the postmodern design language launched by the Memphis Group in Milan in 1981: calculated 'bad taste' — hot pink, lemon yellow, teal and purple slammed together on white grounds, black-outlined toy geometry, and an allover confetti of squiggles, zigzags, dots and triangles. Born as radical furniture in printed plastic laminate, it was mocked and worshipped alike, dissolved in 1987, and resurrected as the default visual shorthand for 'the eighties' in graphic and UI design.",
      "ko": "1981 （Memphis Group）：「」—— 、、、，，、、。，，1987 ， UI 「」。"
    },
    "scope": {
      "en": "Scope: Covers the Memphis Group's original postmodern language (1981–87) and its later revival as pattern-driven 80s styling in graphics and UI. 'Corporate Memphis' — flat, big-limbed vector illustration — is a later namesake with its own entry. Solid color blocks with hard offset shadows and zero patterning belong to Neobrutalism.",
      "ko": "：（1981–87） UI 80 。「Corporate Memphis」—— 、 —— ，；、。"
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
      "ko": [
        "80s squiggles and triangles pattern everywhere",
        "that saved by the bell intro style",
        "pink yellow teal shapes with black outlines",
        "geometric confetti background style",
        "retro 80s geometric pattern website",
        "white background with squiggly lines and dots"
      ]
    },
    "signals": [
      {
        "id": "confetti-pattern",
        "role": "defining",
        "name": {
          "en": "Allover confetti pattern",
          "ko": "Allover confetti pattern"
        },
        "facet": "imagery",
        "description": {
          "en": "Squiggles, zigzags, dots, crosses and tiny triangles scattered edge-to-edge over a white ground — the pattern IS the background, not an accent strip.",
          "ko": "、、、 —— ，。"
        }
      },
      {
        "id": "squiggle-line",
        "role": "defining",
        "name": {
          "en": "Squiggles and zigzags",
          "ko": "Squiggles and zigzags"
        },
        "facet": "geometry",
        "description": {
          "en": "Hand-feeling wavy lines and lightning zigzags, usually 2–4px black strokes — the most-quoted Memphis mark, descended from Sottsass's 1978 'Bacterio' laminate print.",
          "ko": "， 2–4px —— ， Sottsass 1978 「Bacterio」。"
        }
      },
      {
        "id": "clashing-palette",
        "role": "defining",
        "name": {
          "en": "Deliberate color clashes",
          "ko": "Deliberate color clashes"
        },
        "facet": "color",
        "description": {
          "en": "Hot pink, lemon yellow, teal and purple (e.g. #ff5fa2, #ffd500, #2ec4b6, #7b61ff) placed side by side with no harmonic bridging — the clash is the point.",
          "ko": "、、（ #ff5fa2、#ffd500、#2ec4b6、#7b61ff）， —— 。"
        }
      },
      {
        "id": "black-inked-shapes",
        "role": "defining",
        "name": {
          "en": "Black-inked toy shapes",
          "ko": "Black-inked toy shapes"
        },
        "facet": "geometry",
        "description": {
          "en": "Circles, triangles, half-donuts and blobs outlined in 2–3px solid black, like cut paper or screen-print ink — playful geometry over grids.",
          "ko": "、、 2–3px ， —— 。"
        }
      },
      {
        "id": "flat-print-depth",
        "role": "defining",
        "name": {
          "en": "Collage depth, zero cast shadows",
          "ko": "Collage depth, zero cast shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Depth comes only from overlapping flat shapes; nothing casts a shadow — it reads as screen print or laminated paper, not simulated light.",
          "ko": "； —— ，。"
        }
      },
      {
        "id": "asymmetric-collage",
        "role": "supporting",
        "name": {
          "en": "Off-grid tilted composition",
          "ko": "Off-grid tilted composition"
        },
        "facet": "layout",
        "description": {
          "en": "Elements rotated a few degrees, overlapped, breaking columns on purpose; tidy symmetry reads as a mistake here.",
          "ko": "Elements rotated a few degrees, overlapped, breaking columns on purpose; tidy symmetry reads as a mistake here."
        }
      },
      {
        "id": "laminate-plastic",
        "role": "variable",
        "name": {
          "en": "Plastic-laminate gloss",
          "ko": "Plastic-laminate gloss"
        },
        "facet": "surface",
        "description": {
          "en": "The furniture originals wore glossy printed laminate and terrazzo; UI versions sometimes echo it with speckle textures or a sticker finish — optional.",
          "ko": "；UI —— 。"
        }
      },
      {
        "id": "offset-shadows",
        "role": "avoid",
        "name": {
          "en": "Hard offset shadows",
          "ko": "Hard offset shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Solid displaced block shadows are neobrutalism's construction; on a Memphis surface they flatten the pattern party into sticker blocks.",
          "ko": "Solid displaced block shadows are neobrutalism's construction; on a Memphis surface they flatten the pattern party into sticker blocks."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in the spirit of Memphis (Memphis Group, 1981). Defining signals: allover confetti (squiggles, zigzags, dots, crosses, tiny triangles) on a white #ffffff ground; deliberate clashes of hot pink #ff5fa2, lemon yellow #ffd500, teal #2ec4b6, purple #7b61ff with no harmonic bridging; shapes inked with 2–3px solid #000000 outlines; print-flat depth — overlap alone layers shapes, NOTHING casts a shadow (no box-shadow, gradients, blur). Compose as playful collage: chips rotated ±2–4deg, broken grid, mixed geometries — a circle button beside square tags, squiggle for a divider. Headings: chunky rounded display grotesk, black, weight 700–900; body plain black 14–16px. Interactions bounce: cubic-bezier(.34,1.56,.64,1) overshoot on hover/press. Pattern stays dense in decor zones; long text sits on solid fills. Do not drift into neobrutalism: confetti removed plus uniform borders with 4px 4px 0 #000 offset shadows IS neobrutalism — Memphis is pattern-first with zero cast shadows. Text stays at 4.5:1 on solid fills (never white on yellow or pink); honor prefers-reduced-motion.",
      "ko": "（Memphis Group，1981）。： #ffffff （、、、、）； #ff5fa2、 #ffd500、 #2ec4b6、 #7b61ff ，； 2–3px #000000 ； —— ，（ box-shadow、、）。： ±2–4deg、、 —— ，。 grotesk，， 700–900； 14–16px。：hover/press cubic-bezier(.34,1.56,.64,1) 。；。： 4px 4px 0 #000 —— 、。 4.5:1（）； prefers-reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The Memphis Group was founded in Milan by designer Ettore Sottsass with a circle of young collaborators — Michele De Lucchi, Nathalie du Pasquier, George Sowden, Marco Zanini, Martine Bedin and others — at a December 1980 meeting where Bob Dylan's 'Stuck Inside of Mobile with the Memphis Blues Again' kept spinning, giving the group its name. Its first collection, shown in Milan in 1981, wrapped toy-like furniture in printed plastic laminates such as Sottsass's squiggly 1978 'Bacterio' pattern; the group disbanded in 1987, and its graphics became the era's shorthand for eighties pop design, revived wholesale by pattern and UI designers in the 2010s.",
      "ko": "Ettore Sottsass —— Michele De Lucchi、Nathalie du Pasquier、George Sowden、Marco Zanini、Martine Bedin —— ，1980 12 Bob Dylan 《Stuck Inside of Mobile with the Memphis Blues Again》，。1981 ， Sottsass 1978 「Bacterio」； 1987 ，「」， 2010 UI 。"
    },
    "meta": {}
  },
  {
    "slug": "vaporwave",
    "name": {
      "en": "Vaporwave",
      "ko": "베이퍼웨이브 (Vaporwave)"
    },
    "tagline": {
      "en": "Vaporwave is the visual dialect of the early-2010s internet music microgenre of the same name: a collage of 1980s–90s consumer debris — pastel pink-to-cyan gradient skies, Greek marble busts, Japanese katakana, Windows 95 window chrome, palm-tree sunsets over grid floors — degraded with VHS scanlines, chromatic aberration, and glitch. It treats corporate-utopian imagery as found footage: dreamy, ironic, and worn. A nostalgia remix, not a period original.",
      "ko": "2010 ： 80–90 —— 、、、Windows 95 、 —— VHS 、。：、、。 remix，。"
    },
    "scope": {
      "en": "Scope: Covers the visual remix aesthetic, not the music's chopped-and-screwed production. The neon-outrun cousin that shares the sunset grid is synthwave/retrofuturism; the genuine turn-of-millennium original it samples is Y2K Digital Aesthetic (its own entry), and GeoCities-era amateur pages belong to Vernacular Web.",
      "ko": "： remix ， chopped-and-screwed 。 synthwave/retrofuturism； Y2K （），GeoCities 。"
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
      "ko": [
        "that pink and teal aesthetic with the greek statue heads",
        "the tumblr look with marble busts and japanese text",
        "retro windows 95 popups over a pink gradient sunset",
        "vhs glitch art with palm trees and katakana",
        "that nostalgic 80s mall fever-dream collage style",
        "the pastel purple grid sunset with statues"
      ]
    },
    "signals": [
      {
        "id": "pink-cyan-gradient",
        "role": "defining",
        "name": {
          "en": "Pink-to-cyan gradient skies",
          "ko": "Pink-to-cyan gradient skies"
        },
        "facet": "color",
        "description": {
          "en": "The Floral Shoppe wash: cyan #01cdfe at the horizon bleeding through pink #ff71ce and purple #b967ff into deep indigo night. Applied to skies, washes, and type fills — never to chrome or metal.",
          "ko": "《Floral Shoppe》： #01cdfe #ff71ce、 #b967ff，。、 —— 。"
        }
      },
      {
        "id": "marble-busts",
        "role": "defining",
        "name": {
          "en": "Greek marble statuary",
          "ko": "Greek marble statuary"
        },
        "facet": "imagery",
        "description": {
          "en": "White-to-grey classical busts, heads, and torsos floating in the composition, sometimes sliced, masked, or duplicated. Antiquity is sampled like stock footage — the statue is the mascot.",
          "ko": "、，、。 —— 。"
        }
      },
      {
        "id": "win95-chrome",
        "role": "defining",
        "name": {
          "en": "Windows 95 window chrome",
          "ko": "Windows 95"
        },
        "facet": "surface",
        "description": {
          "en": "Battleship-grey #c0c0c0 panels with 1–2px hard bevels, blue-gradient title bars, pixel icons, and dialog boxes used as decoration. The dead desktop is a collage element, not a working UI.",
          "ko": "#c0c0c0 1–2px 、、，。， UI。"
        }
      },
      {
        "id": "katakana-latin",
        "role": "defining",
        "name": {
          "en": "Katakana and full-width latin",
          "ko": "Katakana and full-width latin"
        },
        "facet": "typography",
        "description": {
          "en": "Japanese katakana — occasionally Chinese signage — placed as pure decoration, beside full-width spaced latin (ＡＥＳＴＨＥＴＩＣ). Meaning is optional; the exotic-mood texture is the point.",
          "ko": "—— —— ，（ＡＥＳＴＨＥＴＩＣ）。，。"
        }
      },
      {
        "id": "vhs-decay",
        "role": "defining",
        "name": {
          "en": "VHS decay",
          "ko": "VHS decay"
        },
        "facet": "surface",
        "description": {
          "en": "1px horizontal scanlines, chromatic aberration (RGB-split edges), tracking bands, tape noise, PLAY overlays and timestamps. Everything looks copied, worn, and re-recorded rather than rendered clean.",
          "ko": "1px 、（RGB ）、、、PLAY 。、、，。"
        }
      },
      {
        "id": "sunset-grid",
        "role": "supporting",
        "name": {
          "en": "Striped sun and grid floor",
          "ko": "Striped sun and grid floor"
        },
        "facet": "imagery",
        "description": {
          "en": "A striped or pixelated sun setting over a perspective grid plane, usually with palm silhouettes — borrowed from synthwave but washed out to pastel.",
          "ko": "， —— synthwave，。"
        }
      },
      {
        "id": "glitch-motion",
        "role": "supporting",
        "name": {
          "en": "Glitch and drift",
          "ko": "Glitch and drift"
        },
        "facet": "motion",
        "description": {
          "en": "Elements slice-shift, stutter, and RGB-split in short loops; motion feels like a damaged tape, never a smooth physics animation.",
          "ko": "、、RGB ；，。"
        }
      },
      {
        "id": "chrome-futurism",
        "role": "avoid",
        "name": {
          "en": "Chrome-and-gel futurism",
          "ko": "Chrome-and-gel futurism"
        },
        "facet": "surface",
        "description": {
          "en": "Mirror chrome, gel gloss, lens flares, and iridescent blue-silver belong to Y2K's forward-looking sheen. Vaporwave surfaces stay matte, faded, and degraded — polish kills the nostalgia.",
          "ko": "、、 Y2K 。、、 —— 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Vaporwave. Defining signals: gradient sky running cyan #01cdfe at the horizon through pink #ff71ce and purple #b967ff into indigo #2d1b69; floating white Greek marble statuary; Windows 95 chrome — #c0c0c0 panels with hard 1–2px bevels (inset -1px -1px 0 #0a0a0a, inset 1px 1px 0 #fff), blue-gradient title bars, square corners, zero blur; decorative Japanese katakana plus full-width spaced latin (ＡＥＳＴＨＥＴＩＣ); VHS decay — 1px scanlines at ~20% black, chromatic aberration (text-shadow: -2px 0 #ff71ce, 2px 0 #01cdfe), glitch slice-shifts; a striped sun over a perspective grid floor with palm silhouettes. Keep the choice of consumer fragments (logos, mall imagery) flexible. Type: small plain system sans, black on the grey chrome, white with RGB split over the art. Do not drift into Y2K: the decisive difference is gaze direction — vaporwave looks BACK at the 80s/90s through worn tape, so no mirror chrome, gel gloss, or iridescent blue-silver. Hold text at 4.5:1 on solid plates (never over scanlines), glitch under 3 flashes/sec, and honor prefers-reduced-motion.",
      "ko": "（Vaporwave）。： #01cdfe #ff71ce、 #b967ff #2d1b69；；Windows 95 —— #c0c0c0 1–2px （inset -1px -1px 0 #0a0a0a、inset 1px 1px 0 #fff）、、、；（ＡＥＳＴＨＥＴＩＣ）；VHS —— 20% 1px 、（text-shadow: -2px 0 #ff71ce, 2px 0 #01cdfe）、；，。（logo、）。：，， RGB 。 Y2K： —— 80/90 ，、。 4.5:1（）， 3 ， prefers-reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Vaporwave began as a music microgenre around 2010–2011 in online communities — Bandcamp, Tumblr, and their forums — with Daniel Lopatin's Eccojams Vol. 1 (2010, released under the alias Chuck Person) and the Macintosh Plus album Floral Shoppe (2011, an alias of producer Vektroid) as founding documents; the Floral Shoppe cover — pink wash, marble bust, katakana — set the visual template. James Ferraro's Far Side Virtual (2011) supplied the corporate-utopia source material, and the name puns on 'vaporware'. The collage aesthetic peaked on Tumblr around 2012–2015.",
      "ko": "2010–2011 （Bandcamp、Tumblr ）， Daniel Lopatin Chuck Person 《Eccojams Vol. 1》（2010） Macintosh Plus（ Vektroid ）《Floral Shoppe》（2011）—— （、、）。James Ferraro 《Far Side Virtual》（2011），「vaporware」。 2012–2015 Tumblr 。"
    },
    "meta": {}
  },
  {
    "slug": "art-deco",
    "name": {
      "en": "Art Deco",
      "ko": "아르데코 (Art Deco)"
    },
    "tagline": {
      "en": "Art Deco is the geometry of luxury: mirror symmetry, sunburst and fan motifs, stepped ziggurat silhouettes, and gold linework on lacquer black with jewel accents. Named after the 1925 Paris Exposition des arts décoratifs, it gave the Chrysler Building its crown and Gatsby its glow. Where Bauhaus stripped geometry to function, Deco piled it on — gilded all-caps lettering and ornament dense enough to feel machined. It faded with wartime austerity and revives whenever design wants opulence.",
      "ko": "「」：、、（ziggurat），。 1925 ，。， —— 、。，「」。"
    },
    "scope": {
      "en": "Scope: This entry covers the ornamental 1920s–30s Deco look and its later revivals as a UI and branding style. Its chrome-and-speed-lines 1930s offshoot, Streamline Moderne, is a related but distinct flavor; the era's functional-geometry movement across the Atlantic is Bauhaus.",
      "ko": "： 1920–30 Deco ， UI 。 1930 Streamline Moderne（），；，。"
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
      "ko": [
        "great gatsby party invitation style",
        "black and gold fancy 1920s look",
        "gold lines and sun rays vintage luxury design",
        "roaring twenties geometric borders",
        "old hollywood glam wedding website style",
        "that chrysler building looking gold and black ui"
      ]
    },
    "signals": [
      {
        "id": "mirror-symmetry",
        "role": "defining",
        "name": {
          "en": "Mirror symmetry",
          "ko": "Mirror symmetry"
        },
        "facet": "layout",
        "description": {
          "en": "Everything hangs on one vertical center axis: ornaments, frames and type blocks mirror exactly left-to-right, often in nested symmetrical tiers. An off-center layout instantly stops reading as Deco.",
          "ko": "：、，。，。"
        }
      },
      {
        "id": "sunburst-fan",
        "role": "defining",
        "name": {
          "en": "Sunburst and fan motifs",
          "ko": "Sunburst and fan motifs"
        },
        "facet": "imagery",
        "description": {
          "en": "Rays radiating from a single point (sunburst), scalloped fan shells, chevrons and zigzag bands — the canonical ornament kit, drawn as thin gold strokes 1–2px wide.",
          "ko": "（）、、 —— ， 1–2px 。"
        }
      },
      {
        "id": "stepped-forms",
        "role": "defining",
        "name": {
          "en": "Stepped ziggurat forms",
          "ko": "Stepped ziggurat forms"
        },
        "facet": "geometry",
        "description": {
          "en": "Silhouettes recede in symmetric stair-steps — three to five shrinking tiers like the Chrysler Building crown — used for frame corners, badges and panel tops.",
          "ko": "—— ， —— 、。"
        }
      },
      {
        "id": "gold-black-jewel",
        "role": "defining",
        "name": {
          "en": "Gold on black, jewel accents",
          "ko": "Gold on black, jewel accents"
        },
        "facet": "color",
        "description": {
          "en": "Metallic gold linework (#c9a227, highlights #f0dc9a) on near-black lacquer (#0b0b0e), accented with deep emerald, sapphire or ruby; pastels or flat primaries break the spell.",
          "ko": "（#c9a227， #f0dc9a）（#0b0b0e），、；，。"
        }
      },
      {
        "id": "gilded-caps",
        "role": "defining",
        "name": {
          "en": "Gilded all-caps lettering",
          "ko": "Gilded all-caps lettering"
        },
        "facet": "typography",
        "description": {
          "en": "Headings set in ALL CAPS geometric or high-contrast display faces with letter-spacing 0.15–0.35em, rendered in gold — reading like inscriptions over a hotel entrance.",
          "ko": "，letter-spacing 0.15–0.35em， —— 。"
        }
      },
      {
        "id": "double-rules",
        "role": "supporting",
        "name": {
          "en": "Hairline double rules",
          "ko": "Hairline double rules"
        },
        "facet": "surface",
        "description": {
          "en": "Borders are paired strokes — a 2px gold line with a 1px inner hairline 4–6px inside it, mimicking engraved gilt frames. A single thick black border reads as neobrutalism, not Deco.",
          "ko": "—— 2px ， 4–6px 1px ，。，。"
        }
      },
      {
        "id": "metal-choice",
        "role": "variable",
        "name": {
          "en": "Gold, chrome or copper",
          "ko": "Gold, chrome or copper"
        },
        "facet": "color",
        "description": {
          "en": "Yellow gold is the default, but chrome-silver (the Streamline Moderne branch) and copper read equally Deco; what matters is metallic contrast on a dark ground, not the hue.",
          "ko": "，（Streamline Moderne ）；，。"
        }
      },
      {
        "id": "primary-blocks",
        "role": "avoid",
        "name": {
          "en": "Flat primary-color blocks",
          "ko": "Flat primary-color blocks"
        },
        "facet": "color",
        "description": {
          "en": "Flat red/yellow/blue blocks on white with asymmetric grids and bare grotesk type belong to Bauhaus and De Stijl — ornament-free primaries are a different movement that happens to share the decade.",
          "ko": "、 grotesk —— 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build the surface as 1920s–30s Art Deco. Ground: near-black lacquer #0b0b0e; optional deep emerald panel #0f3d2e. Metal: gold linework — stops #f0dc9a/#c9a227/#9c7f22 (highlight/base/shade) as vertical gradients on strokes and display text (background-clip: text). Composition: strict mirror symmetry on one vertical axis; hero centered. Typography: ALL CAPS display face (Cinzel, Poiret One or Didot; fallback Georgia), letter-spacing 0.2–0.35em, headings in gradient gold; body small, sentence case, ivory #efe9dc. Ornament kit: sunburst fan — repeating-conic-gradient, ~2deg gold rays on 11deg spacing from bottom-center; stepped ziggurat corners on frames/badges; paired border rules: 2px gold stroke plus 1px inner hairline 4–6px inside (box-shadow: inset 0 0 0 5px #0b0b0e, inset 0 0 0 6px #c9a227). Cut button corners into octagons (clip-path). Depth comes from metal and line, never blurred drop shadows. Motion: almost none — one fade, or rays turning over 40s at most. Avoid: primary-color blocks, asymmetry, bubble radii, soft shadows, caps body text — that way lies Bauhaus or kitsch.",
      "ko": "1920–30 （Art Deco）。： #0b0b0e； #0f3d2e。： —— #f0dc9a/#c9a227/#9c7f22（//），（background-clip: text）。：，。：（Cinzel、Poiret One Didot； Georgia），letter-spacing 0.2–0.35em，；、、 #efe9dc。： —— repeating-conic-gradient， 2deg 、11deg 、；；：2px ， 4–6px 1px （box-shadow: inset 0 0 0 5px #0b0b0e, inset 0 0 0 6px #c9a227）。 clip-path 。，。： —— ， 40s 。：、、、、 —— 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Named after the Exposition internationale des arts décoratifs et industriels modernes held in Paris in 1925 — though the label only stuck after Bevis Hillier's 1968 book 'Art Deco of the 20s and 30s'. The look had crystallized in 1910s–20s France around designers such as furniture maker Émile-Jacques Ruhlmann, absorbing Cubist geometry and, after Tutankhamun's tomb was opened in 1922, Egyptian sunburst and stepped forms. In America it became the architecture of ambition: William Van Alen's Chrysler Building (1930) crowned New York with a stainless-steel sunburst, followed by the Empire State Building (1931). Depression-era and wartime austerity ended the party, and Baz Luhrmann's 2013 film 'The Great Gatsby' later gave the black-and-gold revival its pop-culture template.",
      "ko": "1925 （Exposition internationale des arts décoratifs et industriels modernes）—— Bevis Hillier 1968 《Art Deco of the 20s and 30s》。 1910–20 ， Émile-Jacques Ruhlmann ，；1922 ，。，：William Van Alen （1930），（1931）。；Baz Luhrmann 2013 《》。"
    },
    "meta": {}
  },
  {
    "slug": "cyberpunk",
    "name": {
      "en": "Cyberpunk",
      "ko": "사이버펑크 (Cyberpunk)"
    },
    "tagline": {
      "en": "Cyberpunk is the visual language of 'high tech, low life': near-black interfaces lit by neon magenta, cyan, and electric yellow, like signage over a rain-soaked street. Luminous hairline borders, bloom halos, scanlines, and glitch tears turn panels into hacked terminals, while monospace type and HUD brackets supply the instrumentation. Born in 1980s science fiction and pushed into UI by films and games like Cyberpunk 2077, it treats darkness as the canvas — every accent must earn its glow.",
      "ko": "「，」（high tech, low life）：、、，。、、， HUD 。 1980 ，《》《 2077》 UI——，。"
    },
    "scope": {
      "en": "Scope: The screen-interface expression of the genre — dark HUDs, terminals, neon signage, glitch artifacts — not its literary themes, and not simply 'dark mode with purple'. Bright pastel retro-futurism (synthwave sunsets, VHS nostalgia) belongs to the vaporwave family, not to this entry.",
      "ko": "：—— HUD、、、——，「」。（、VHS ），。"
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
      "ko": [
        "black interface with glowing neon pink and blue edges",
        "blade runner style computer screens",
        "that hacker hud with scanlines and glitchy text",
        "cyberpunk 2077 menu style",
        "dark futuristic ui that looks like a rainy tokyo street at night",
        "terminal looking interface with neon glow and japanese signs"
      ]
    },
    "signals": [
      {
        "id": "neon-on-black",
        "role": "defining",
        "name": {
          "en": "Neon on a near-black canvas",
          "ko": "Neon on a near-black canvas"
        },
        "facet": "color",
        "description": {
          "en": "Backgrounds live at #05070f–#0a0e17; magenta #ff2a6d, cyan #05d9e8, and electric yellow #f9f002 sit on top at full glow. A light background disqualifies the style on sight.",
          "ko": "#05070f–#0a0e17 ； #ff2a6d、 #05d9e8、 #f9f002 。。"
        }
      },
      {
        "id": "luminous-strokes",
        "role": "defining",
        "name": {
          "en": "Glowing hairline borders",
          "ko": "Glowing hairline borders"
        },
        "facet": "surface",
        "description": {
          "en": "Panels and buttons wear 1px bright strokes with matching bloom — box-shadow: 0 0 8px plus 0 0 24px in the border color — so every edge reads as neon tubing or a hologram seam.",
          "ko": "1px ，——box-shadow: 0 0 8px 0 0 24px ——。"
        }
      },
      {
        "id": "hud-instrumentation",
        "role": "defining",
        "name": {
          "en": "HUD instrumentation",
          "ko": "HUD instrumentation"
        },
        "facet": "layout",
        "description": {
          "en": "Corner brackets, tick marks, crosshair rules, and tiny numeric readouts frame content like a cockpit overlay; corners are sharp or chamfered with clip-path cuts, never bubbly.",
          "ko": "、、 overlay； clip-path ，。"
        }
      },
      {
        "id": "terminal-type",
        "role": "defining",
        "name": {
          "en": "Monospace terminal type",
          "ko": "Monospace terminal type"
        },
        "facet": "typography",
        "description": {
          "en": "UI text is set in monospace or squared techno faces, often uppercase at 10–12px with .1–.2em letter-spacing, decorated with > _ :: // glyphs — the console is the voice of the interface.",
          "ko": "， 10–12px .1–.2em ， > _ :: // ——。"
        }
      },
      {
        "id": "glitch-scanlines",
        "role": "supporting",
        "name": {
          "en": "Glitch and scanline artifacts",
          "ko": "Glitch and scanline artifacts"
        },
        "facet": "motion",
        "description": {
          "en": "RGB-split text shadows (magenta/cyan offsets), occasional slice-and-skew jitters, and a repeating 1px scanline overlay simulate a damaged feed — short bursts of seasoning, not constant noise.",
          "ko": "RGB （/）、， 1px ，——，。"
        }
      },
      {
        "id": "cjk-neon-signage",
        "role": "supporting",
        "name": {
          "en": "CJK neon signage",
          "ko": "CJK neon signage"
        },
        "facet": "imagery",
        "description": {
          "en": "Vertical Japanese kana or Chinese characters glowing as sign tubes quote the Tokyo/Hong Kong streetscape the genre's films were built from.",
          "ko": "Vertical Japanese kana or Chinese characters glowing as sign tubes quote the Tokyo/Hong Kong streetscape the genre's films were built from."
        }
      },
      {
        "id": "hazard-corporate",
        "role": "variable",
        "name": {
          "en": "Hazard stripes and corporate chrome",
          "ko": "Hazard stripes and corporate chrome"
        },
        "facet": "imagery",
        "description": {
          "en": "Yellow-black diagonal warning bands, mega-corp logos, and barcode livery mark the world as dangerous and owned; density runs from a single striped edge to full industrial cladding.",
          "ko": "、 logo、，；。"
        }
      },
      {
        "id": "bright-pastel-nostalgia",
        "role": "avoid",
        "name": {
          "en": "Bright pastel nostalgia",
          "ko": "Bright pastel nostalgia"
        },
        "facet": "color",
        "description": {
          "en": "Light grounds, soft pink/lavender palettes, marble busts, and VHS timestamps are vaporwave's retro consumerism — warmth and daylight are the giveaway that this isn't cyberpunk.",
          "ko": "、/、 VHS ——「」。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build a cyberpunk HUD. Canvas: near-black with a blue cast — page #05070f, panels #0a0e17. Signal colors: magenta #ff2a6d and cyan #05d9e8; yellow #f9f002 for warnings/primary actions only. Text: off-white #d1f7ff, secondary #7f9bb3, monospace (ui-monospace / JetBrains Mono); micro-labels uppercase at 10–11px, letter-spacing .15em, prefixed with >_ or //. Every panel and button wears a 1px neon border with bloom — box-shadow: 0 0 8px rgba(5,217,232,.5), 0 0 24px rgba(5,217,232,.2), inset 0 0 12px rgba(5,217,232,.12) — corners sharp (2px) or 8–12px clip-path chamfers. Add HUD furniture: corner brackets, tick marks, tiny numeric readouts. Season with glitch: RGB-split headings (text-shadow: -2px 0 #ff2a6d, 2px 0 #05d9e8), rare 100–200ms skew/translate stutters, plus scanlines (1px rgba(255,255,255,.05) every 3px). Hazard stripes (45deg #f9f002/#0a0a0a, 12px steps) for danger zones only; CJK neon signage optional. Avoid light backgrounds, pastels, soft white shadows, bubbly radii, and VHS nostalgia — that's vaporwave. Keep motion intermittent: a hacked signal stutters, never floats.",
      "ko": "HUD。：—— #05070f， #0a0e17。： #ff2a6d #05d9e8； #f9f002 。： #d1f7ff， #7f9bb3，（ui-monospace / JetBrains Mono）； 10–11px 、letter-spacing .15em， >_ //。 1px ——box-shadow: 0 0 8px rgba(5,217,232,.5)、0 0 24px rgba(5,217,232,.2)、inset 0 0 12px rgba(5,217,232,.12)——（2px） clip-path 8–12px 。 HUD ：、、。： RGB （text-shadow: -2px 0 #ff2a6d, 2px 0 #05d9e8）， 100–200ms skew/translate ，（ 3px 1px rgba(255,255,255,.05)）。（45deg #f9f002/#0a0a0a，12px ）；。、、、 VHS ——。：，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The genre was named by Bruce Bethke's 1983 short story 'Cyberpunk' and defined as literature by William Gibson's 1984 novel Neuromancer, but its visual language was set by film: Ridley Scott's Blade Runner (1982) fused the neon signage of Asian megacities with rain, smog, and towering video billboards into the 'high tech, low life' metropolis, and Katsuhiro Otomo's Akira (1988) added Neo-Tokyo's holographic advertising. The look became an actual interface kit through 1990s sci-fi screen graphics and, most decisively, CD Projekt Red's Cyberpunk 2077 (2020), whose glitching yellow-and-black HUD turned cyberpunk into a literal UI style.",
      "ko": "Bruce Bethke 1983 《Cyberpunk》， William Gibson 1984 《》（Neuromancer），：Ridley Scott 《》（Blade Runner，1982）、、「，」，《》（Akira，1988）。 1990 、 CD Projekt Red《 2077》（2020）—— HUD UI 。"
    },
    "meta": {}
  },
  {
    "slug": "pixel-art",
    "name": {
      "en": "Pixel Art",
      "ko": "픽셀 아트 (Pixel Art)"
    },
    "tagline": {
      "en": "Pixel Art is a graphic language born from hardware limits: on the 8- and 16-bit consoles and arcade boards of the 1980s–90s, artists drew with visible square pixels and tiny indexed palettes, placing every sprite, glyph, and health bar pixel by pixel. What began as a constraint is now a deliberate retro aesthetic — crisp stair-stepped edges with no anti-aliasing, limited color ramps, dithered shading, chunky bitmap type, and frame-by-frame animation chosen for charm, not necessity.",
      "ko": "： 20 80–90 8/16 ，，、、。 —— 、、（dithering）、、，，。"
    },
    "scope": {
      "en": "Scope: Covers the deliberate retro game-art style applied to UI and illustration — the craft of placing individual pixels. It is not the 90s amateur-homepage look (that's Vernacular Web), and merely low-resolution or blurry images are not pixel art: without deliberate pixel-level construction and a limited palette, it's just a small picture.",
      "ko": "： UI —— 。 90 （）；：，。"
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
      "ko": [
        "the retro video game look with visible square pixels",
        "8-bit style ui like an old nintendo game",
        "websites that look like a super nintendo menu screen",
        "chunky pixelated graphics done on purpose",
        "the indie game title screen aesthetic",
        "health bars and dialog boxes like an old rpg"
      ]
    },
    "signals": [
      {
        "id": "visible-pixels",
        "role": "defining",
        "name": {
          "en": "Visible square pixels",
          "ko": "Visible square pixels"
        },
        "facet": "geometry",
        "description": {
          "en": "Artwork is built from visible, uniform square pixels — edges stair-step in fixed increments with no anti-aliasing; no amount of zoom ever reveals a smooth curve.",
          "ko": "、 —— ，；，。"
        }
      },
      {
        "id": "limited-palette",
        "role": "defining",
        "name": {
          "en": "Small fixed palette",
          "ko": "Small fixed palette"
        },
        "facet": "color",
        "description": {
          "en": "A piece commits to a handful of indexed colors — 8, 16, or 32 — with hue-shifted ramps for shading; gradients are faked with dot patterns, never blended.",
          "ko": "—— 8、16 32 —— ；，。"
        }
      },
      {
        "id": "pixelated-scaling",
        "role": "defining",
        "name": {
          "en": "Nearest-neighbor scaling",
          "ko": "Nearest-neighbor scaling"
        },
        "facet": "imagery",
        "description": {
          "en": "Sprites and bitmaps scale with hard edges — image-rendering: pixelated, canvas imageSmoothing off; a single smoothed edge breaks the illusion instantly.",
          "ko": "—— image-rendering: pixelated、canvas imageSmoothing；，。"
        }
      },
      {
        "id": "bitmap-type",
        "role": "defining",
        "name": {
          "en": "Chunky bitmap type",
          "ko": "Chunky bitmap type"
        },
        "facet": "typography",
        "description": {
          "en": "Headings and HUD text use pixel fonts or blocky uppercase with a hard 1–2px offset shadow — every glyph visibly assembled from squares, zero blur anywhere.",
          "ko": "HUD ， 1–2px —— ，。"
        }
      },
      {
        "id": "game-chrome",
        "role": "defining",
        "name": {
          "en": "Game UI chrome",
          "ko": "Game UI chrome"
        },
        "facet": "imagery",
        "description": {
          "en": "Controls are game controls: segmented HP/MP bars, RPG dialog boxes with stepped borders, blinking PRESS-START prompts, 8-bit icons like hearts, coins, and stars.",
          "ko": "： HP/MP 、 RPG 、 PRESS START 、 8-bit 。"
        }
      },
      {
        "id": "stepped-animation",
        "role": "supporting",
        "name": {
          "en": "Frame-by-frame motion",
          "ko": "Frame-by-frame motion"
        },
        "facet": "motion",
        "description": {
          "en": "Animation advances in discrete frames — steps() easing, sprites flipping between two poses, 1–2 frame blinks; nothing tweens smoothly.",
          "ko": "—— steps() 、、1–2 ；。"
        }
      },
      {
        "id": "dithered-shading",
        "role": "supporting",
        "name": {
          "en": "Dithered shading",
          "ko": "Dithered shading"
        },
        "facet": "surface",
        "description": {
          "en": "Checkerboard and ordered-noise dot patterns simulate gradients and shadow inside the fixed palette — a texture born directly of the color limit.",
          "ko": "Checkerboard and ordered-noise dot patterns simulate gradients and shadow inside the fixed palette — a texture born directly of the color limit."
        }
      },
      {
        "id": "smooth-rendering",
        "role": "avoid",
        "name": {
          "en": "Smooth rendering",
          "ko": "Smooth rendering"
        },
        "facet": "surface",
        "description": {
          "en": "Anti-aliased curves, soft shadows, true gradients, or high-color photos dissolve the style — one blurred edge and it reads as a low-res image, not pixel art.",
          "ko": "、、 —— ，，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface as Pixel Art — deliberate 8/16-bit game UI. Defining signals: graphics of visible uniform square pixels, stair-stepped edges, no anti-aliasing; a small fixed palette — night #1a1c2c, purple #5d275d, red #b13e53, orange #ef7d57, yellow #ffcd75, pale #94b0c2, green #38b764; all bitmaps scaled nearest-neighbor (image-rendering: pixelated; canvas imageSmoothingEnabled = false); headings in a bitmap font ('Press Start 2P', uppercase, letter-spacing 2px) or blocky caps with hard 2px 2px 0 shadow, zero blur; controls as game chrome — segmented HP bars (2px gaps every 12px), RPG dialog panels (#1a1c2c fill, 3px solid #f4f4f4 border, border-radius 0), prompts blinking with steps(1); shading via checkerboard dithering, never gradients. Motion: steps() easing, two-frame blinks; no tweens or soft shadows. Do not drift into Vernacular Web: no browser defaults (blue links, system serif, tiled wallpaper); every pixel deliberate. Keep 4.5:1 text contrast (#ffcd75/#f4f4f4 on #1a1c2c passes; red fails), pause blinks under prefers-reduced-motion, body copy in readable mono or sans.",
      "ko": "（Pixel Art）—— 8/16 UI。：，，； —— #1a1c2c、 #5d275d、 #b13e53、 #ef7d57、 #ffcd75、 #94b0c2、 #38b764；（image-rendering: pixelated；canvas imageSmoothingEnabled = false）；（'Press Start 2P'，，letter-spacing 2px） 2px 2px 0 ，； —— HP （ 12px 2px ）、RPG （#1a1c2c 、3px #f4f4f4 、border-radius 0）、 steps(1) ；，。：steps() 、；。：（、、）；。 4.5:1（#ffcd75/#f4f4f4 #1a1c2c ，），prefers-reduced-motion ， mono sans。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The look was born from hardware limits: arcade boards and consoles like Nintendo's Famicom/NES (1983) and Super Famicom/SNES (1990) forced artists into tiny sprites and indexed palettes of a handful of colors, and the teams behind games like Super Mario Bros. and Final Fantasy turned that constraint into craft. The term 'pixel art' itself dates to a 1982 letter by Adele Goldberg and Robert Flegal at Xerox PARC. Once 3D and high-color displays made the limits obsolete, the style returned as a deliberate choice — illustration collectives like eBoy in the late 1990s and the 2000s indie-game wave (Cave Story, 2004) recast it as a retro aesthetic that now surfaces in UI wherever a product wants game-era charm.",
      "ko": "： Famicom/NES（1983 ） Super Famicom/SNES（1990 ），，《》《》。「」 1982 Xerox PARC Adele Goldberg Robert Flegal 。3D ， —— 90 eBoy 2000 （《》，2004 ）； UI ，。"
    },
    "meta": {}
  },
  {
    "slug": "corporate-memphis",
    "name": {
      "en": "Corporate Memphis",
      "ko": "코퍼레이트 멤피스 (Corporate Memphis)"
    },
    "tagline": {
      "en": "Corporate Memphis is the flat vector illustration style of late-2010s tech marketing: faceless people with tiny heads and disproportionately long, rubbery limbs, skin in blues, purples, and greens instead of real tones, bent into over-acted poses against blobs, dots, and arcs. Named after Alegria, the illustration system Facebook introduced around 2017, it became the default look of SaaS landing pages and empty states within years — then a byword for corporate sameness ('blanding').",
      "ko": "2010 ：，，、、，、。 Facebook 2017 Alegria； SaaS —— 「」「」（blanding）。"
    },
    "scope": {
      "en": "Scope: Covers the figurative illustration language — the people, their proportions, and the palette — not the page chrome underneath, which is usually plain flat design. The 1980s Memphis Group's squiggle-and-confetti patterns get their own entry (Memphis); this style only borrows the name and some background geometry.",
      "ko": "： —— 、 —— ，。 80 Memphis Group （）；。"
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
      "ko": [
        "tech company cartoons with tiny heads and long bendy arms",
        "those flat people with blue or purple skin on startup websites",
        "the illustration style every saas landing page and empty state uses",
        "bendy noodle-arm people in pastel colors hugging giant objects",
        "big tech art style where everyone's limbs are weirdly long",
        "that alegria-looking flat people clipart"
      ]
    },
    "signals": [
      {
        "id": "noodle-people",
        "role": "defining",
        "name": {
          "en": "Tiny heads, noodle limbs",
          "ko": "Tiny heads, noodle limbs"
        },
        "facet": "imagery",
        "description": {
          "en": "Characters are drawn with heads half the natural size, arms and legs 1.5–2x too long and bending like rubber hoses, with oversized hands and feet — bodies assembled from simple capsules and blobs.",
          "ko": "， 1.5–2 、， —— 。"
        }
      },
      {
        "id": "unnatural-skin",
        "role": "defining",
        "name": {
          "en": "Non-naturalistic skin tones",
          "ko": "Non-naturalistic skin tones"
        },
        "facet": "color",
        "description": {
          "en": "Skin is filled with blue (#6C8CFF), purple (#A78BFA), green, or pink — never real skin colors; the abstraction was sold as universal and is the style's fastest tell.",
          "ko": "（#6C8CFF）、（#A78BFA）、 —— ；「」，。"
        }
      },
      {
        "id": "flat-vector-fills",
        "role": "defining",
        "name": {
          "en": "Big flat fills, zero shading",
          "ko": "Big flat fills, zero shading"
        },
        "facet": "surface",
        "description": {
          "en": "Every shape is one solid color: no gradients, no texture, no cast shadows; outlines are absent or a single thin line in a darker shade of the fill.",
          "ko": "：、、；， 2px 。"
        }
      },
      {
        "id": "pastel-tech-palette",
        "role": "supporting",
        "name": {
          "en": "Soft bright tech palette",
          "ko": "Soft bright tech palette"
        },
        "facet": "color",
        "description": {
          "en": "Lavender, periwinkle, soft pink, butter yellow, and mint laid on off-white (#FBFAFF) — friendly and low-aggression, bright without neobrutalism's harsh saturation.",
          "ko": "、、、、，（#FBFAFF） —— 、，。"
        }
      },
      {
        "id": "exaggerated-poses",
        "role": "supporting",
        "name": {
          "en": "Over-acted poses",
          "ko": "Over-acted poses"
        },
        "facet": "imagery",
        "description": {
          "en": "Figures leap, stretch, high-five, or hug oversized objects (a giant phone, a huge credit card) in impossible, cheerfully contorted stances.",
          "ko": "、、，（、），。"
        }
      },
      {
        "id": "blob-dot-backdrop",
        "role": "supporting",
        "name": {
          "en": "Blob-and-dot backdrops",
          "ko": "Blob-and-dot backdrops"
        },
        "facet": "geometry",
        "description": {
          "en": "Organic blobs, half-circles, arcs, and floating dots frame the scene — the only genuine echo of 1980s Memphis, and the reason the nickname stuck.",
          "ko": "、、 —— 80 ，。"
        }
      },
      {
        "id": "realistic-humans",
        "role": "avoid",
        "name": {
          "en": "Realistic human proportions",
          "ko": "Realistic human proportions"
        },
        "facet": "imagery",
        "description": {
          "en": "Anatomically correct figures, photos of real people, or 3D-rendered humans disqualify the look instantly — the style is defined by deliberately wrong bodies.",
          "ko": "、 3D —— 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in Corporate Memphis style. Canvas: SaaS hero or empty state on off-white #FBFAFF, generous whitespace, friendly geometric sans (Inter/Gilroy/Circular; headings 700, ink #2E2A5B). Build flat vector figures: tiny heads (~0.6x natural), rubber-hose limbs 1.5–2x natural drawn as capsules (border-radius: 999px), oversized hands and feet; skin in blue #6C8CFF, purple #A78BFA, or mint #6EE7B7 — never real tones; clothes and props flat pink #F9A8D4, butter #FDE68A. Zero gradients, texture, or drop shadows; outlines absent or one 2px line in a darker fill shade. Pose figures mid-action — leaping, stretching, hugging oversized objects. Backdrop: organic blobs (border-radius: 46% 54% 52% 48% / 58% 60% 40% 42%), half-circles, floating dots — all flat pastels. UI chrome: pill buttons (border-radius: 999px, flat fill, hover: translateY(-2px)); no shadows anywhere. Text contrast 4.5:1 — ink on pastel fills, never white on yellow. Avoid realistic proportions, real-people photography, gradients, and all-over Memphis confetti: figures are the point, geometry only the backdrop.",
      "ko": "（Corporate Memphis）。： #FBFAFF SaaS ，，（Inter/Gilroy/Circular； 700 ， #2E2A5B）。：（ 0.6 ）、 1.5–2 、（border-radius: 999px）、； #6C8CFF、 #A78BFA #6EE7B7 —— ； #F9A8D4、 #FDE68A。、、；， 2px 。 —— 、、。：（border-radius: 46% 54% 52% 48% / 58% 60% 40% 42%）、、、 —— 。UI ：（border-radius: 999px、、hover translateY(-2px)）；。 4.5:1 —— ，。、、 —— ，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Named after Alegria, the illustration system Facebook commissioned from the design studio Buck around 2017, whose flat, bendy-limbed characters became the template for big-tech marketing art. The dismissive label 'Corporate Memphis' stuck because the shapes floating behind the figures echo the 1980s Memphis Group's geometry — the two movements are otherwise unrelated. By 2019–2021 it was the default illustration style for SaaS landing pages and empty states across the industry, and the backlash to its sameness ('blanding') turned it into a cliché almost as fast.",
      "ko": "Alegria —— Facebook 2017 Buck ，、。「」， 80 Memphis Group —— 。 2019–2021 ， SaaS ，（「」 blanding）。"
    },
    "meta": {}
  },
  {
    "slug": "material-design",
    "name": {
      "en": "Material Design",
      "ko": "머티리얼 디자인 (Material Design)"
    },
    "tagline": {
      "en": "Material Design is Google's physics-based design language: UIs are digital paper layered along a z-axis, each surface resting at a measured elevation that casts a soft shadow, the main action hovering as a circular FAB, every touch answered with an ink ripple. Bold brand color, white cards, and Roboto type align to an 8dp grid, and motion expresses hierarchy. Shipped with Android 5.0 in 2014, it became Android's default look — the systematic rebuttal to flat design's shadowless austerity.",
      "ko": "Google ： z ， elevation 、， FAB，。、 Roboto 8dp ，。2014 Android 5.0 ， Android —— 「」。"
    },
    "scope": {
      "en": "Scope: Covers Google's design language across its generations — 2014's paper-and-ink system, 2018 Material Theming, and 2021's Material You. The generic 'flat with one soft shadow' SaaS look it inspired is not this entry: without the elevation scale, the FAB, and ripple physics, that is just Flat Design 2.0.",
      "ko": "： Google —— 2014 、2018 Material Theming、2021 Material You。「」 SaaS ： elevation 、FAB ， Flat Design 2.0。"
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
      "ko": [
        "google apps look with the floating round button",
        "white cards with soft shadows on a gray background",
        "the android material you style",
        "the ripple effect that spreads when you tap stuff on android",
        "paper cards stacked with drop shadows and a pink button",
        "the gmail and google docs app look"
      ]
    },
    "signals": [
      {
        "id": "elevation-shadows",
        "role": "defining",
        "name": {
          "en": "Stepped z-axis elevation",
          "ko": "z elevation"
        },
        "facet": "depth",
        "description": {
          "en": "Every surface rests at a measured height — 2dp cards, 4dp app bars, 6dp FABs, 8dp raised menus, 16dp drawers — and the soft shadow beneath it encodes exactly that height; press, and the shadow grows as the surface lifts toward you.",
          "ko": "—— 2dp 、4dp 、6dp FAB、8dp 、16dp —— ；，。"
        }
      },
      {
        "id": "paper-surfaces",
        "role": "defining",
        "name": {
          "en": "Layered digital paper",
          "ko": "Layered digital paper"
        },
        "facet": "surface",
        "description": {
          "en": "The UI is sheets of paper sliding over each other: white cards with crisp 2–4px corners floating on a light gray ground, their edges cut by shadow rather than by borders.",
          "ko": "： 2–4px ，「」，。"
        }
      },
      {
        "id": "fab",
        "role": "defining",
        "name": {
          "en": "Floating action button",
          "ko": "Floating action button"
        },
        "facet": "geometry",
        "description": {
          "en": "One circular button (56dp diameter, 6dp elevation) in the accent color hovers above the content — the screen's single promoted action, often straddling the seam between header and content.",
          "ko": "（ 56dp、6dp elevation） —— ，。"
        }
      },
      {
        "id": "ink-ripple",
        "role": "defining",
        "name": {
          "en": "Ink ripple touch feedback",
          "ko": "Ink ripple touch feedback"
        },
        "facet": "motion",
        "description": {
          "en": "Touch answers with a ripple of ink spreading from the exact contact point across the surface — feedback is rendered as a physical event, not a hover-color swap.",
          "ko": "—— ， hover 。"
        }
      },
      {
        "id": "bold-brand-color",
        "role": "defining",
        "name": {
          "en": "Bold primary, hot accent",
          "ko": "Bold primary, hot accent"
        },
        "facet": "color",
        "description": {
          "en": "A saturated primary (Indigo 500 #3F51B5 class) owns bars and large areas; a contrasting accent (Pink A200 #FF4081 class) is reserved for the FAB and key controls against white cards.",
          "ko": "（Indigo 500 #3F51B5 ）；（Pink A200 #FF4081 ） FAB ，。"
        }
      },
      {
        "id": "meaningful-motion",
        "role": "supporting",
        "name": {
          "en": "Motion explains hierarchy",
          "ko": "Motion explains hierarchy"
        },
        "facet": "motion",
        "description": {
          "en": "Transitions run 200–300ms on the standard curve cubic-bezier(0.4, 0, 0.2, 1); new surfaces grow out of the element that spawned them, so animation shows cause, not decoration.",
          "ko": "200–300ms cubic-bezier(0.4, 0, 0.2, 1)；，，。"
        }
      },
      {
        "id": "eight-dp-grid",
        "role": "supporting",
        "name": {
          "en": "8dp square grid",
          "ko": "8dp square grid"
        },
        "facet": "layout",
        "description": {
          "en": "Components align to an 8dp baseline grid — spacing in 8/16/24px multiples, 16px screen margins — so unrelated screens share the same rhythm.",
          "ko": "8dp —— 8/16/24px ， 16px —— 。"
        }
      },
      {
        "id": "flat-no-shadow",
        "role": "avoid",
        "name": {
          "en": "Shadowless color blocks",
          "ko": "Shadowless color blocks"
        },
        "facet": "depth",
        "description": {
          "en": "Pure 2D fills where hierarchy comes from color alone — zero elevation, zero ripple physics — is Flat Design; Material's entire point is the restored, measurable z-axis.",
          "ko": "2D 、 —— elevation、 —— ；、 z 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build the surface in classic Material Design (2014 paper-and-ink generation). Canvas: light gray #FAFAFA ground, white #FFFFFF cards floating on a stepped dp elevation scale — 2dp card: box-shadow 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12); 8dp raised: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2). Palette: primary Indigo 500 #3F51B5 for bars and large areas, accent Pink A200 #FF4081 for the FAB and key controls; text #212121 / #757575. Type: Roboto (fallback system sans), medium titles. Geometry: cards 2–4px radius; one circular FAB (56px, 6dp, lifts to 12dp pressed) in the accent. Interaction: ink ripples spread from the touch point; transitions 200–300ms cubic-bezier(0.4, 0, 0.2, 1), surfaces growing from their parent. Layout on an 8dp grid — 8/16/24px spacing. Do not drift into Flat Design: elevation shadows, the FAB, and ripples are mandatory — hierarchy by color alone with zero shadows is the neighbor style. Keep text on accent fills at 4.5:1 and honor prefers-reduced-motion.",
      "ko": "（2014 ）。： #FAFAFA ， #FFFFFF dp elevation —— 2dp ：box-shadow 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12)；8dp ：0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.2)。： Indigo 500 #3F51B5 ， Pink A200 #FF4081 FAB ； #212121 / #757575。：Roboto（）， medium 。： 2–4px ； FAB（56px、6dp、 12dp），。：； 200–300ms cubic-bezier(0.4, 0, 0.2, 1)，。 8dp —— 8/16/24px。：elevation 、FAB —— 、。 4.5:1 ， prefers-reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Unveiled by Google at its I/O conference in June 2014 — led by design VP Matías Duarte and developed under the internal codename Quantum Paper — and shipped that year with Android 5.0 Lollipop as the company's first unified cross-platform design language. Its paper-and-ink metaphor and the Roboto typeface (designed by Christian Robertson) became the visual identity of Android; Google extended the system with Material Theming at I/O 2018 and with the wallpaper-tinted, personalized Material You alongside Android 12 in 2021.",
      "ko": "2014 6 Google I/O —— Matías Duarte ， Quantum Paper —— Android 5.0 Lollipop ，。 Roboto （Christian Robertson ） Android ；Google I/O 2018 Material Theming，2021 Android 12 Material You。"
    },
    "meta": {}
  },
  {
    "slug": "terminal-hacker",
    "name": {
      "en": "Terminal Hacker",
      "ko": "터미널 해커 (Terminal / Hacker)"
    },
    "tagline": {
      "en": "Terminal Hacker turns the screen into a vintage character terminal: a pure black CRT glowing in a single phosphor ink — matrix green or amber — with monospace glyphs, a soft halo around every character, scanlines and flicker laid over everything, and a blinking block cursor typing content out like a machine. Born from 1970s–80s hardware limits, canonized by hacker cinema and The Matrix, it is now pure retro-futurist costume: the interface pretends to be forty-year-old equipment.",
      "ko": "： CRT —— —— 、、，。 1970–80 ，《》，：。"
    },
    "scope": {
      "en": "Scope: This entry is the retro CRT emulation — black ground, one phosphor color, glow, scanlines, block cursor. The broader neon-drenched dystopian look (magenta/cyan skylines, chrome, rain) is Cyberpunk; genuinely unstyled default HTML is Web Brutalism; blocky low-res game graphics are Pixel Art.",
      "ko": "： CRT —— 、、、、。（/、、）； HTML ；。"
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
      "ko": [
        "green text on black like the matrix",
        "movie hacker computer screen",
        "old crt monitor look with scanlines",
        "retro terminal with the blinking square cursor",
        "website that looks like an 80s command line",
        "glowing green monospace hacker aesthetic"
      ]
    },
    "signals": [
      {
        "id": "phosphor-ink",
        "role": "defining",
        "name": {
          "en": "One phosphor ink on black",
          "ko": "One phosphor ink on black"
        },
        "facet": "color",
        "description": {
          "en": "Pure black ground (#000–#050805) with a single luminous ink for text, borders, and graphics — matrix green #00ff41 or amber #ffb000. One electron gun, one hue; a second color already feels wrong.",
          "ko": "（#000–#050805），、 —— #00ff41 #ffb000。；。"
        }
      },
      {
        "id": "phosphor-glow",
        "role": "defining",
        "name": {
          "en": "Phosphor glow on every glyph",
          "ko": "Phosphor glow on every glyph"
        },
        "facet": "surface",
        "description": {
          "en": "Text and line art carry a same-hue halo — text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) — as if the phosphor is still warm. Flat, matte text breaks the spell.",
          "ko": "—— text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) —— 。。"
        }
      },
      {
        "id": "scanline-flicker",
        "role": "defining",
        "name": {
          "en": "Scanlines and flicker",
          "ko": "Scanlines and flicker"
        },
        "facet": "surface",
        "description": {
          "en": "A repeating-linear-gradient of 1px dark lines every 2–4px overlays the whole screen, plus a subtle brightness flicker in steps timing. The image should read as emitted by a tube, not printed.",
          "ko": "repeating-linear-gradient 2–4px 1px ， steps 。，。"
        }
      },
      {
        "id": "block-cursor",
        "role": "defining",
        "name": {
          "en": "Blinking block cursor",
          "ko": "Blinking block cursor"
        },
        "facet": "motion",
        "description": {
          "en": "A solid full-cell block █ at the input position, toggling on/off roughly once a second with steps(1) — a hard blink, never a fade. It marks where the machine is listening.",
          "ko": "█，， steps(1) —— ，。。"
        }
      },
      {
        "id": "boot-typewriter",
        "role": "supporting",
        "name": {
          "en": "Boot logs and typewriter reveal",
          "ko": "Boot logs and typewriter reveal"
        },
        "facet": "motion",
        "description": {
          "en": "Screens open with BIOS-style self-tests ('MEM CHECK ...... OK') in terse ALL-CAPS machine voice behind prompt symbols (>, $, #), and content appears character-by-character at ~30–60ms per glyph.",
          "ko": "BIOS （「MEM CHECK ...... OK」），（>、$、#）， 30–60ms 。"
        }
      },
      {
        "id": "ascii-art",
        "role": "supporting",
        "name": {
          "en": "ASCII boxes and character art",
          "ko": "ASCII boxes and character art"
        },
        "facet": "imagery",
        "description": {
          "en": "Frames drawn from +---+ and |, progress bars as [██████░░░░], waveforms and logos built from characters on the monospace grid — graphics rendered as text because the hardware had nothing else.",
          "ko": "+---+ | ， [██████░░░░]， —— ，。"
        }
      },
      {
        "id": "which-phosphor",
        "role": "variable",
        "name": {
          "en": "Which phosphor",
          "ko": "Which phosphor"
        },
        "facet": "color",
        "description": {
          "en": "Green #00ff41 is the Matrix cliché; amber #ffb000 reads warmer and more 'office 1983'; cool white is the sober variant. The construction carries the style, not the hue.",
          "ko": "#00ff41 ； #ffb000 、「1983 」；。，。"
        }
      },
      {
        "id": "soft-polychrome",
        "role": "avoid",
        "name": {
          "en": "Soft, polychrome UI",
          "ko": "Soft, polychrome UI"
        },
        "facet": "surface",
        "description": {
          "en": "Full-color imagery, gradients, rounded glass cards, and drop shadows dissolve the illusion instantly — if it looks like a modern app tinted green, it isn't terminal.",
          "ko": "、、 —— App，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface as a terminal-hacker CRT emulation. Canvas: pure black (#000 to #050805), border-radius 0–2px, 1px borders in dim phosphor rgba(0,255,65,.35). Ink: one phosphor hue only — matrix green #00ff41 (amber #ffb000 acceptable) — for all text, icons, and graphics; dim states are the same hue at 40–60% opacity, never gray or a second hue. Type: monospace everywhere (ui-monospace, 'IBM Plex Mono', 'JetBrains Mono'), 12–14px, ALL CAPS for status lines; every glyph glows via text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25). Overlay the panel with scanlines (repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)) plus subtle flicker (<3 flashes/sec). End input lines with a blinking block cursor █ (1.1s, steps(1), no fade). Reveal headings typewriter-style, prefix lines with > or $, draw boxes and bars as ASCII (+---+, [████░░]). Avoid color imagery, gradients, rounded capsules, drop shadows, white backgrounds — they break the tube. Honor prefers-reduced-motion: kill flicker, blink, and typewriter, showing full text instantly.",
      "ko": "CRT 。：（#000 #050805），border-radius 0–2px，1px rgba(0,255,65,.35)。： —— #00ff41（ #ffb000 ）—— 、； 40–60% ，。：（ui-monospace、'IBM Plex Mono'、'JetBrains Mono'），12–14px，； text-shadow: 0 0 6px rgba(0,255,65,.6), 0 0 20px rgba(0,255,65,.25) 。（repeating-linear-gradient(0deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)），（ 3 ）。 █（1.1s、steps(1)、）。， > $， ASCII （+---+、[████░░]）。、、、 —— 。 prefers-reduced-motion：、，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Descends from 1970s–80s character terminals, when one electron gun meant one color: green- and amber-phosphor CRTs like IBM's 3270 (1971) and DEC's VT100 (1978) produced the look out of pure hardware necessity. Hollywood turned it into 'hacker' shorthand — WarGames (1983), and above all The Matrix (1999), whose falling green 'digital rain' was created by production designer Simon Whiteley from glyphs scanned out of Japanese cookbooks. The style survives as deliberate retro-futurism: CSS scanlines, boot sequences, and block cursors running on hardware that has never seen a tube.",
      "ko": "1970–80 ，：IBM 3270（1971） DEC VT100（1978）、 CRT 。「」 —— 《》（1983），《》（1999），「」 Simon Whiteley ，。：CSS 、，。"
    },
    "meta": {}
  },
  {
    "slug": "frutiger-metro",
    "name": {
      "en": "Frutiger Metro (Vectordelia)",
      "ko": "프루티거 메트로 (Frutiger Metro)"
    },
    "tagline": {
      "en": "Frutiger Metro, also known as Vectordelia, is the late-millennium vector-maximalist graphic style that flourished roughly 2005–2013 alongside Frutiger Aero but moved in the opposite direction: instead of skies and water, it built cities out of pure vector — subway lines, bright saturated gradients, abstract floral flourishes and swirls, humanist sans type, glossy vector shapes, and multicolored silhouette figures. It is the visual language of iPod commercials, Xbox 360 dashboards, Windows 7 stock imagery, and city-themed event graphics: optimistic, urban, geometrically neat, and deliberately non-photorealistic.",
      "ko": "Frutiger Metro， Vectordelia（）， Frutiger Aero 2005–2013 ，：， —— 、、、、，。 iPod 、Xbox 360 、Windows 7 ：、、，。"
    },
    "scope": {
      "en": "Scope: This entry covers the vector-maximalist graphic style commonly called Frutiger Metro or Vectordelia, not Microsoft's Metro/Modern UI design language, which shares the name but is flat, typographic, and tile-based. It sits beside Frutiger Aero as a sibling style, not a subset.",
      "ko": "： Frutiger Metro Vectordelia ， Microsoft Metro/Modern UI —— ，、、。 Frutiger Aero ，。"
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
      "ko": [
        "city subway map graphics with bright vector shapes",
        "ipod commercial with colorful silhouette people",
        "abstract vector swirls and flowers on gradients",
        "windows 7 stock art with glossy circles",
        "late 2000s vector maximalist event posters",
        "bright flat shapes that look like a metro map"
      ]
    },
    "signals": [
      {
        "id": "subway-geometry",
        "role": "defining",
        "name": {
          "en": "Subway-map city geometry",
          "ko": "Subway-map city geometry"
        },
        "facet": "layout",
        "description": {
          "en": "Routes, intersections, and stations are drawn as clean vector lines with 90° and 45° angles, rounded caps, and circular nodes — the interface reads like a transit diagram.",
          "ko": "、， 90° 45° ，， —— 。"
        }
      },
      {
        "id": "saturated-gradients",
        "role": "defining",
        "name": {
          "en": "Bright saturated gradient blocks",
          "ko": "Bright saturated gradient blocks"
        },
        "facet": "color",
        "description": {
          "en": "Large flat panels use hard, cheerful gradients — magenta #ec008c into cyan #00b6e3 into yellow #ffd400 — at sharp diagonal angles, never soft natural tones.",
          "ko": "—— #ec008c #00b6e3 #ffd400，，。"
        }
      },
      {
        "id": "vector-flourishes",
        "role": "defining",
        "name": {
          "en": "Abstract vector flourishes",
          "ko": "Abstract vector flourishes"
        },
        "facet": "imagery",
        "description": {
          "en": "Decorative vines, swirls, starbursts, and geometric flowers are drawn as single-color vector shapes with crisp 1–2px outlines, purely illustrative and non-photorealistic.",
          "ko": "、、， 1–2px ， purely ，。"
        }
      },
      {
        "id": "humanist-sans",
        "role": "defining",
        "name": {
          "en": "Clean humanist sans",
          "ko": "Clean humanist sans"
        },
        "facet": "typography",
        "description": {
          "en": "Text is set in open, rounded-humanist sans-serifs such as Frutiger, Segoe UI, or Myriad — friendly and legible, never chrome or techno.",
          "ko": "、， Frutiger、Segoe UI Myriad —— 、，。"
        }
      },
      {
        "id": "glossy-vector",
        "role": "defining",
        "name": {
          "en": "Glossy vector shapes",
          "ko": "Glossy vector shapes"
        },
        "facet": "surface",
        "description": {
          "en": "Circles, pills, and ribbons carry a white top sheen (linear-gradient rgba(255,255,255,.75) to transparent at ~48%) and a subtle vector shadow, mimicking polished plastic without texture.",
          "ko": "、（linear-gradient rgba(255,255,255,.75) transparent， 48% ），。"
        }
      },
      {
        "id": "silhouette-figures",
        "role": "supporting",
        "name": {
          "en": "Multicolored silhouette figures",
          "ko": "Multicolored silhouette figures"
        },
        "facet": "imagery",
        "description": {
          "en": "Flat human silhouettes in saturated single colors dance, point, or hold devices — the iPod-commercial signature, used as accent rather than hero.",
          "ko": "、 —— iPod ，。"
        }
      },
      {
        "id": "color-block-collage",
        "role": "supporting",
        "name": {
          "en": "Overlapping color-block collage",
          "ko": "Overlapping color-block collage"
        },
        "facet": "layout",
        "description": {
          "en": "Panels of pure color overlap at playful angles, creating a layered but flat composition with no cast shadows or simulated depth.",
          "ko": "Panels of pure color overlap at playful angles, creating a layered but flat composition with no cast shadows or simulated depth."
        }
      },
      {
        "id": "nature-textures",
        "role": "avoid",
        "name": {
          "en": "Nature textures and photorealism",
          "ko": "Nature textures and photorealism"
        },
        "facet": "surface",
        "description": {
          "en": "Photographic skies, water, grass, glass blur, or organic light effects push the look toward Frutiger Aero — Metro stays synthetic and vector-flat.",
          "ko": "、、、 Frutiger Aero；Metro 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the piece using Frutiger Metro (Vectordelia). Defining signals: build the layout from subway-map geometry — routes at 90° and 45° with rounded caps, station nodes as 12–18px circles (#ec008c, #00b6e3, #ffd400); fill panels with bright saturated diagonal gradients (magenta #ec008c → cyan #00b6e3 → yellow #ffd400 at 135°); scatter abstract vector flourishes and swirls behind content as single-color shapes with 1–2px crisp outlines (#00a9e0 or #ec008c). Use a clean humanist sans-serif such as Frutiger, Segoe UI, or system-ui; headings at 24–36px with tight tracking, body at 14–16px, ink in white or near-black. Add glossy vector accents — circles, pills, ribbons — with a white top sheen (linear-gradient rgba(255,255,255,.75) to transparent at 48%) and subtle drop shadow (0 4px 10px rgba(0,0,0,.12)). Include multicolored silhouette figures as supporting garnish. Avoid nature photography, water droplets, grass, sky gradients, glass blur, or chrome; those belong to Frutiger Aero. Keep tile spacing at 8–12px, block border-radius at 8–16px, pills at 999px. Ensure text sits on solid or gradient regions that hit 4.5:1 contrast, reserve maximalism for decorative zones, and honor prefers-reduced-motion.",
      "ko": "Frutiger Metro（Vectordelia / ）。： —— 90° 45° 、、12–18px （#ec008c、#00b6e3、#ffd400）；（ #ec008c → #00b6e3 → #ffd400，135°）；， 1–2px （#00a9e0 #ec008c）。， Frutiger、Segoe UI system-ui； 24–36px、， 14–16px，。 —— 、、 —— （linear-gradient rgba(255,255,255,.75) transparent，48% ）（0 4px 10px rgba(0,0,0,.12)）。。、、、、； Frutiger Aero。 8–12px， 8–16px， 999px。 4.5:1 ，，， prefers-reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Roughly 2005–2013, peaking in the late 2000s: the look emerged from vector stock-art packs, iPod silhouette advertising, Xbox 360 dashboard visuals, Windows 7 stock imagery, and city-themed event graphics. The label Frutiger Metro is retroactive, coined by online aesthetics communities in the 2010s–2020s by analogy to Adrian Frutiger's humanist type and the urban/subway 'metro' mood; Vectordelia is the term used by CARI/Evan Collins and the Frutiger Aero Archive community. Microsoft's Metro design language shares the name but is a separate, later flat-typographic system.",
      "ko": "2005–2013 ， 2000 ：、iPod 、Xbox 360 、Windows 7 。Frutiger Metro ， 2010–2020 Adrian Frutiger /；Vectordelia CARI/Evan Collins Frutiger Aero Archive 。Microsoft Metro ，。"
    },
    "meta": {}
  },
  {
    "slug": "anti-design",
    "name": {
      "en": "Anti-design / Dada Web",
      "ko": "안티 디자인 (Anti-design)"
    },
    "tagline": {
      "en": "Anti-design / Dada Web treats visual conflict as the whole aesthetic: clashing typefaces, overlapping elements, broken grids, high-saturation colors that fight each other, and system defaults pushed to absurdity. It is deliberately ugly, but ugly by design — a collage-like rebellion against clean UX, grid systems, and brand-safe palettes. It flourishes in experimental portfolios, zine sites, art-school projects, and any screen that wants to look like it escaped from a Dadaist cut-up magazine rather than a design system.",
      "ko": "/ Dada Web ：、、、，。，—— UX、。、、，。"
    },
    "scope": {
      "en": "Scope: This entry covers the intentionally transgressive web/graphic look. It is distinct from Web Brutalism (honest bare-browser defaults) and Neobrutalism (a styled, thick-border graphic language). The line between anti-design and zine-collage is thin, but anti-design is more about rule-breaking and visual aggression than about editorial collage narrative.",
      "ko": "：/。（）（）。，，。"
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
      "ko": [
        "website that looks ugly on purpose",
        "overlapping boxes with clashing fonts and colors",
        "interface that breaks every design rule",
        "collage-style site with things stacked on top of each other",
        "dada web design that is anti-ux",
        "screen that looks like a zine exploded"
      ]
    },
    "signals": [
      {
        "id": "clashing-typography",
        "role": "defining",
        "name": {
          "en": "Intentionally conflicting typefaces",
          "ko": "Intentionally conflicting typefaces"
        },
        "facet": "typography",
        "description": {
          "en": "Two to four unrelated fonts collide in one view — system serif next to monospace next to a wavy display face — often at mismatched sizes (e.g. 12px body beside 64px headline) and with competing weights.",
          "ko": "——，——（ 12px 64px ），。"
        }
      },
      {
        "id": "broken-grid",
        "role": "defining",
        "name": {
          "en": "Broken, overlapping grid",
          "ko": "Broken, overlapping grid"
        },
        "facet": "layout",
        "description": {
          "en": "Elements ignore a consistent baseline: cards bleed off edges, buttons sit half on top of text, progress bars tilt or wander. Negative space is used as aggressively as positive space.",
          "ko": "Elements ignore a consistent baseline: cards bleed off edges, buttons sit half on top of text, progress bars tilt or wander. Negative space is used as aggressively as positive space."
        }
      },
      {
        "id": "clashing-colors",
        "role": "defining",
        "name": {
          "en": "High-saturation color clashes",
          "ko": "High-saturation color clashes"
        },
        "facet": "color",
        "description": {
          "en": "Neon magenta, acid green, warning orange, and electric blue appear side by side with no attempt at harmony; backgrounds may be #ff0040 behind #00ff66 text, deliberately flirting with illegibility.",
          "ko": "、、，； #ff0040， #00ff66 ，。"
        }
      },
      {
        "id": "system-defaults-pushed",
        "role": "defining",
        "name": {
          "en": "System defaults pushed to absurdity",
          "ko": "System defaults pushed to absurdity"
        },
        "facet": "surface",
        "description": {
          "en": "Default form controls, system cursors, scrollbars, and raw HTML elements are retained but exaggerated — giant default checkboxes, default-blue links at 32px, or system alerts used as ornament.",
          "ko": "、、 HTML ，——、32px ，。"
        }
      },
      {
        "id": "collage-overlap",
        "role": "defining",
        "name": {
          "en": "Collage-style overlap",
          "ko": "Collage-style overlap"
        },
        "facet": "layout",
        "description": {
          "en": "Images, text blocks, and UI chrome layer on top of one another with mixed blend modes or no blending at all, as if cut out and glued down in stages.",
          "ko": "、 chrome ，，，。"
        }
      },
      {
        "id": "anti-usability",
        "role": "defining",
        "name": {
          "en": "Anti-usability as gesture",
          "ko": "Anti-usability as gesture"
        },
        "facet": "motion",
        "description": {
          "en": "Common patterns are deliberately warped — buttons that rotate on hover, cursors replaced by giant symbols, scroll direction inverted — to make the user notice the interface instead of disappearing into it.",
          "ko": "——hover 、、——，。"
        }
      },
      {
        "id": "mixed-geometry",
        "role": "supporting",
        "name": {
          "en": "Jarring mixed geometry",
          "ko": "Jarring mixed geometry"
        },
        "facet": "geometry",
        "description": {
          "en": "Circles, jagged polygons, dashed rectangles, and hand-drawn squiggles share the same canvas with no unifying radius or proportion system.",
          "ko": "Circles, jagged polygons, dashed rectangles, and hand-drawn squiggles share the same canvas with no unifying radius or proportion system."
        }
      },
      {
        "id": "soft-rendering",
        "role": "avoid",
        "name": {
          "en": "Soft shadows and gradients",
          "ko": "Soft shadows and gradients"
        },
        "facet": "depth",
        "description": {
          "en": "Blurred drop shadows, glassmorphism, or gentle gradients signal polish and calm — the exact temperament anti-design tries to destroy.",
          "ko": "Blurred drop shadows, glassmorphism, or gentle gradients signal polish and calm — the exact temperament anti-design tries to destroy."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the interface in the Anti-design / Dada Web spirit. Defining signals: intentionally conflicting typefaces (mix Times New Roman, system-ui, and a wavy/italic display face in one view); a broken, overlapping grid where elements bleed and collide; high-saturation color clashes such as #ff0040, #00ff66, #00ccff, and #ffaa00 used side by side; system defaults pushed to absurdity (giant default-blue #0000ee links, oversized raw checkboxes, default scrollbars left visible); collage-style overlap with absolute positioning and mixed z-index; anti-usability gestures like rotating buttons on hover or inverted hover states. Use hard-edged shapes — dashed 3px #000 borders, zero blur on shadows if any, and mismatched border radii (0px, 50%, 24px). Avoid soft rendering: no backdrop-filter, no glass, no gradients, no blurred shadows. Keep the specific color set and rotation angles flexible. Preserve the core function — buttons must still be clickable, progress must still be readable — but make the visual argument loud. Ensure focus states remain visible with a thick #000 outline, and honor prefers-reduced-motion by disabling rotation/tilt animations.",
      "ko": "/ Dada Web 。：（ Times New Roman、system-ui /）；，、；， #ff0040、#00ff66、#00ccff、#ffaa00 ；（ #0000ee 、 oversized 、）；， z-index；， hover hover 。——3px #000 、、（0px、50%、24px）。： backdrop-filter、、。。——，——。， #000 outline； prefers-reduced-motion，/。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The term descends from the Italian Anti-design / Radical Design movement of the late 1960s and early 1970s — groups such as Archizoom and Superstudio in Florence, and figures including Ettore Sottsass, who rejected functionalist 'good design' in favor of provocation, kitsch, and social critique. On the web, the sensibility resurfaced in the late 2010s alongside web brutalism and was increasingly labeled anti-design or 'Dada Web' by the early 2020s as designers deliberately broke grids, clashed type, and weaponized ugliness against the sameness of polished SaaS interfaces.",
      "ko": "1960 1970 / —— Archizoom、Superstudio ， Ettore Sottsass ——「」，、。， 2010 ， 2020 ，、、 SaaS ，「Dada Web」。"
    },
    "meta": {}
  },
  {
    "slug": "acid-graphics",
    "name": {
      "en": "Acid Graphics",
      "ko": "애시드 그래픽 (Acid Graphics)"
    },
    "tagline": {
      "en": "Acid Graphics is the dark, psychedelic cousin of millennium chrome: black backgrounds set off by toxic neon gradients, metallic 3D lettering that looks extruded from liquid mercury, and wireframe grids that melt, twist, and mirror themselves into distortion. It grew out of 1990s acid-house and rave flyers, then was revived in the 2010s as a club-culture visual language for electronic music, streetwear, and underground editorial — less 'future that shipped' than a future seen through a funhouse lens.",
      "ko": "：， 3D ，、、。 1990 acid house ， 2010 ，、 —— 「」，。"
    },
    "scope": {
      "en": "Scope: This entry covers the graphic/UI look, not the broader Y2K fashion revival or the brighter 'chrome bubblegum' branch of turn-of-millennium design. The melancholic neon-grid strain is closer to synthwave/retrowave; this entry stays with the distorted, subcultural rave signal.",
      "ko": "：/UI ， Y2K ，「」。 Synthwave/Retrowave；、。"
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
      "ko": [
        "that dark chrome 3d text with melting grids",
        "black background with neon green and pink gradients",
        "rave flyer style with distorted mirrors and liquid metal",
        "psychedelic chrome typography on black",
        "club poster look with warped wireframe grids",
        "acid house graphic design with metallic letters"
      ]
    },
    "signals": [
      {
        "id": "chrome-3d-type",
        "role": "defining",
        "name": {
          "en": "Liquid chrome 3D lettering",
          "ko": "Liquid chrome 3D lettering"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms are extruded, beveled, and filled with mirror-to-dark chrome gradients so they read as freshly cast metal; stacked text-shadows give them a 3D drop.",
          "ko": "、，，； text-shadow 3D 。"
        }
      },
      {
        "id": "liquid-distortion",
        "role": "defining",
        "name": {
          "en": "Liquid distortion",
          "ko": "Liquid distortion"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms appear to melt, drip, or warp like viscous fluid — letters sag, grids liquefy, and borders bulge as if gravity is optional.",
          "ko": "、 —— 、、，。"
        }
      },
      {
        "id": "neon-acid-palette",
        "role": "defining",
        "name": {
          "en": "Toxic neon gradients on black",
          "ko": "Toxic neon gradients on black"
        },
        "facet": "color",
        "description": {
          "en": "High-saturation acid green (#39ff14), hot magenta (#ff00a0), electric cyan (#00f0ff), and toxic yellow (#ccff00) glow against a near-black ground (#050505–#0a0a0a).",
          "ko": "（#39ff14）、（#ff00a0）、（#00f0ff）（#ccff00）（#050505–#0a0a0a）。"
        }
      },
      {
        "id": "warped-grid",
        "role": "defining",
        "name": {
          "en": "Warped wireframe grids",
          "ko": "Warped wireframe grids"
        },
        "facet": "geometry",
        "description": {
          "en": "Perspective grids, wireframe globes, and mesh planes bend, twist, or dissolve — the grid is a structure being pulled apart, not a neutral scaffold.",
          "ko": "、、 —— ，。"
        }
      },
      {
        "id": "distorted-mirror",
        "role": "defining",
        "name": {
          "en": "Distorted mirror surfaces",
          "ko": "Distorted mirror surfaces"
        },
        "facet": "surface",
        "description": {
          "en": "Chrome and glass planes are twisted into funhouse reflections — rippled, stretched, or fragmented rather than flat and pristine.",
          "ko": "—— 、，。"
        }
      },
      {
        "id": "rave-subculture",
        "role": "defining",
        "name": {
          "en": "Rave and club subculture mood",
          "ko": "Rave and club subculture mood"
        },
        "facet": "imagery",
        "description": {
          "en": "The imagery belongs to warehouse parties and electronic music: dark, maximal, psychedelic, and anti-polish — not corporate or optimistic.",
          "ko": "：、、、 —— 、。"
        }
      },
      {
        "id": "maximal-layering",
        "role": "supporting",
        "name": {
          "en": "Maximal layered density",
          "ko": "Maximal layered density"
        },
        "facet": "layout",
        "description": {
          "en": "Type, grids, chrome shapes, and neon washes overlap in dense collages with little breathing room, creating a horror-vacui effect.",
          "ko": "、、， horror vacui（）。"
        }
      },
      {
        "id": "bubblegum-optimism",
        "role": "avoid",
        "name": {
          "en": "Clean silver bubblegum optimism",
          "ko": "Clean silver bubblegum optimism"
        },
        "facet": "color",
        "description": {
          "en": "Bright electric-blue/silver/white palettes, clean chrome, and bubbly gel buttons signal Y2K — this style stays darker and more twisted.",
          "ko": "//、 Y2K —— 、。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Acid Graphics. Defining signals: a near-black ground (#050505 or #0a0a0a) set against toxic neon gradients — acid green (#39ff14), hot magenta (#ff00a0), electric cyan (#00f0ff), and toxic yellow (#ccff00); metallic 3D lettering rendered with stacked text-shadows and a chrome gradient fill (`background-clip: text` with `#e0e0e0 → #8a8a8a → #ffffff → #707070 → #e0e0e0`); wireframe grids that bend, twist, or melt using CSS transforms, SVG filters, or perspective distortion; distorted mirror surfaces that warp reflections like funhouse glass; dense maximal layering where type, grids, and chrome shapes overlap. Keep the specific acid hues and grid density flexible. Use compressed grotesks such as `Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif` for display type; set chrome type with `-webkit-background-clip: text; color: transparent;` plus a dark drop-shadow for legibility. Avoid Y2K's clean silver bubblegum optimism — if the palette turns electric-blue/silver/white and the grids straighten, you've crossed into Y2K. Preserve contrast by keeping functional text off the neon gradients (place labels on solid black or dark grey #1a1a1a panels), provide visible focus states, and disable any liquid shimmer/warp animations under prefers-reduced-motion.",
      "ko": "（Acid Graphics）。：（#050505 #0a0a0a） —— （#39ff14）、（#ff00a0）、（#00f0ff）（#ccff00）； text-shadow （`background-clip: text`， `#e0e0e0 → #8a8a8a → #ffffff → #707070 → #e0e0e0`） 3D ； CSS transform、SVG filter 、；；、 dense 。。 grotesk， `Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif`； `-webkit-background-clip: text; color: transparent;` drop-shadow 。 Y2K —— //、，。 #1a1a1a ，；； prefers-reduced-motion /。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Acid Graphics grew directly from the flyer art of the 1990s acid-house and rave scenes in the UK and Europe, where black backgrounds, day-glo colors, warped type, and sci-fi textures advertised illegal warehouse parties. In a 2019 Eye on Design survey, designer and art director Hugo Hoppmann cited David Rudnick as the touchstone of the contemporary acid-mania, and the Instagram account @acidgraphix — started by designer Luigi Brusciano in 2018 — became a key showcase for the revived style. The contemporary wave also includes designers such as Anja Kaiser and Jonathan Castro, and has spread through electronic-music cover art, club posters, streetwear branding, and experimental editorial.",
      "ko": "1990 acid house ：、、。2019 Eye on Design ， Hugo Hoppmann David Rudnick ； Luigi Brusciano 2018 Instagram @acidgraphix 。 Anja Kaiser、Jonathan Castro ，、、。"
    },
    "meta": {}
  },
  {
    "slug": "risograph",
    "name": {
      "en": "Risograph",
      "ko": "리소그래프 (Risograph)"
    },
    "tagline": {
      "en": "Risograph is the look of a Japanese stencil duplicator pushed into graphic art: layered spot colors — hot pink, cyan, sunflower yellow — printed slightly out of register, leaving halos and color moiré; a visible grain from soy-based inks; and edges that look cut from a stencil rather than rendered by a laser. It migrated from churches and schools in the 1980s into zines, posters, and indie publishing, where its accidents became the signature.",
      "ko": "（Riso）：——、、——，，；；，。 1980 zine、，「」。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual style of Risograph prints as adapted to UI and graphic design. It is distinct from screen printing (which uses mesh and squeegee, not a digital stencil master) and from Memphis-style pattern collage — both are common neighbors.",
      "ko": "： Risograph UI 。（，），——。"
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
      "ko": [
        "that grainy zine print with bright pink and blue shifted layers",
        "screen-printed look with color overlap and dots",
        "indie poster style with limited neon colors",
        "rough stencil print with visible texture",
        "duotone flyer where the colors don't quite line up",
        "soy ink print with misregistered edges"
      ]
    },
    "signals": [
      {
        "id": "spot-overprint",
        "role": "defining",
        "name": {
          "en": "Limited spot-color overprint",
          "ko": "Limited spot-color overprint"
        },
        "facet": "color",
        "description": {
          "en": "Palette is built from separate opaque inks — hot pink #ff4da6, cyan #00b4d8, sunflower #ffd60a — layered so each new color physically prints on top of the last, producing new hues at overlaps.",
          "ko": "—— #ff4da6、 #00b4d8、 #ffd60a——，。"
        }
      },
      {
        "id": "misregistration",
        "role": "defining",
        "name": {
          "en": "Deliberate misregistration",
          "ko": "Deliberate misregistration"
        },
        "facet": "color",
        "description": {
          "en": "Color channels sit a few pixels off from one another (translate 1–3px), creating visible halos and moiré; perfect alignment reads as digital, not Riso.",
          "ko": "1–3px，；， Riso。"
        }
      },
      {
        "id": "grain-stipple",
        "role": "defining",
        "name": {
          "en": "Soy-ink grain and stipple",
          "ko": "Soy-ink grain and stipple"
        },
        "facet": "surface",
        "description": {
          "en": "Flat fills are broken by a fine, irregular dot grain — especially visible in darker inks — from the soy-oil based ink and stencil mesh; add it with a noise texture at ~15–25% opacity.",
          "ko": "，； 15–25% 。"
        }
      },
      {
        "id": "stencil-edges",
        "role": "defining",
        "name": {
          "en": "Rough stencil-cut edges",
          "ko": "Rough stencil-cut edges"
        },
        "facet": "geometry",
        "description": {
          "en": "Shapes have slightly jagged or feathered outlines, as if cut from a wax stencil; crisp 1px vector edges look pre-press, not printed.",
          "ko": "，；1px ，。"
        }
      },
      {
        "id": "duotone-tritone",
        "role": "defining",
        "name": {
          "en": "High-contrast duotone or tritone",
          "ko": "High-contrast duotone or tritone"
        },
        "facet": "color",
        "description": {
          "en": "Compositions rely on two or three flat inks against off-white paper; the limitation is part of the look — more than four colors stops being Riso.",
          "ko": "；， Riso 。"
        }
      },
      {
        "id": "newsprint-paper",
        "role": "supporting",
        "name": {
          "en": "Off-white porous paper",
          "ko": "Off-white porous paper"
        },
        "facet": "surface",
        "description": {
          "en": "Background reads as uncoated cream or newsprint (#f6f1e7 or #f4ecd8), soaking ink and letting grain show through.",
          "ko": "（#f6f1e7 #f4ecd8），。"
        }
      },
      {
        "id": "bold-type",
        "role": "variable",
        "name": {
          "en": "Bold hand-set type",
          "ko": "Bold hand-set type"
        },
        "facet": "typography",
        "description": {
          "en": "Headings often use chunky grotesks or hand-lettered forms; body stays plain because the texture does the talking.",
          "ko": "grotesk ；，。"
        }
      },
      {
        "id": "cmyk-gradients",
        "role": "avoid",
        "name": {
          "en": "Smooth gradients or photorealism",
          "ko": "Smooth gradients or photorealism"
        },
        "facet": "surface",
        "description": {
          "en": "Continuous blends, drop shadows, and full-color photos belong to offset/digital printing; they kill the stencil-print read.",
          "ko": "Continuous blends, drop shadows, and full-color photos belong to offset/digital printing; they kill the stencil-print read."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in the spirit of Risograph (Riso) print. Defining signals: a limited palette of opaque spot inks — hot pink #ff4da6, cyan #00b4d8, sunflower #ffd60a, and black #1a1a1a — layered as separate passes so overlaps create new hues (pink over cyan makes violet, yellow over pink makes orange); deliberate misregistration of 1–3px between color passes to produce visible halos and color moiré; a fine irregular grain/stipple texture over every flat fill, simulating soy-based ink pushed through a stencil mesh at ~15–25% opacity; rough stencil-cut edges with slight feathering rather than crisp vector outlines; high-contrast duotone or tritone layouts against an off-white porous paper ground (#f6f1e7). Use chunky grotesk or hand-lettered headings, plain body text, and no gradients, shadows, or photorealism. Buttons and cards should feel like separate ink passes — flat color fields with the grain texture, 2px solid black outlines optional. Do not drift into Memphis; the decisive difference is that Risograph is print-texture-first (grain, misregistration, spot overprint) while Memphis is pattern-first (squiggles, zigzags, geometric confetti). Preserve text contrast: black ink on the spot colors usually passes; thin type over textured fills can fail, so keep labels large and on solid panels.",
      "ko": "（Risograph / Riso）。：—— #ff4da6、 #00b4d8、 #ffd60a #1a1a1a——，（，）； 1–3px，；/，， 15–25%；，，；/，（#f6f1e7）。 grotesk ，，、。 pass——， 2px 。；「」（、、），「」（、、）。：；，、。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Riso Kagaku Corporation developed the Risograph in Japan in the early 1980s as a high-speed, low-cost stencil duplicator for schools, churches, and offices, using soy-based inks and a digital master wrapped around an ink drum. It remained an office tool through the 1990s, then was adopted by independent publishers, zine makers, and graphic artists in the 2000s–2010s who turned its registration drift, ink grain, and limited color passes into an intentional aesthetic.",
      "ko": "（Riso Kagaku Corporation） 1980 Risograph，、，。 1990 ， 2000–2010 、zine ，、。"
    },
    "meta": {}
  },
  {
    "slug": "zine-collage",
    "name": {
      "en": "Zine / Collage",
      "ko": "진 콜라주 (Zine Collage)"
    },
    "tagline": {
      "en": "Zine / Collage treats the interface as a photocopied, hand-cut magazine spread: pieces of paper are torn or trimmed, layered at odd angles, and taped into place with masking tape; text alternates between handwriting, typewriter, and clipped headlines, all sitting on a grainy, high-contrast, DIY surface. It is not polished — the scissor slip, the tape wrinkle, and the over-copied halftone are the whole point. The look migrated from punk fanzines and Riot Grrrl photocopies into web portfolios and editorial sites looking for warmth outside the SaaS grid.",
      "ko": "、：，，；、，、、DIY 。——、、。 fanzine Riot Grrrl ， SaaS 。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual language of cut-and-paste, self-published zines translated into UI. It overlaps with risograph printing and Memphis-style pattern energy, but zine collage is specifically paper-first: torn edges, tape, handwriting, and photocopier artifacts. Corporate illustration systems and clean mood boards are not zine collage.",
      "ko": "：「」 UI 。 Riso ，「」：、、、。。"
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
      "ko": [
        "a website that looks like a photocopied fanzine",
        "ui with torn paper edges and masking tape",
        "cut-out magazine letters and handwritten labels",
        "that diy scrapbook collage style",
        "interface that looks like it was glued together by hand",
        "xerox grain and high-contrast zine aesthetic"
      ]
    },
    "signals": [
      {
        "id": "torn-paper-edges",
        "role": "defining",
        "name": {
          "en": "Torn or irregular paper edges",
          "ko": "Torn or irregular paper edges"
        },
        "facet": "geometry",
        "description": {
          "en": "Surfaces are not clean vector rectangles; edges look torn, scissor-cut, deckled, or clipped from another page, often exposed as a 1–2px ragged silhouette.",
          "ko": "；、， 1–2px 。"
        }
      },
      {
        "id": "masking-tape-hinges",
        "role": "defining",
        "name": {
          "en": "Visible masking tape hinges",
          "ko": "Visible masking tape hinges"
        },
        "facet": "surface",
        "description": {
          "en": "Strips of translucent tape — usually beige or washi yellow — hold pieces down at corners or seams; they are rotated a few degrees and often overlap the layer beneath.",
          "ko": "————；，。"
        }
      },
      {
        "id": "photocopy-grain",
        "role": "defining",
        "name": {
          "en": "Photocopied halftone grain",
          "ko": "Photocopied halftone grain"
        },
        "facet": "surface",
        "description": {
          "en": "High-contrast black-only or limited-spot images show dot halftone, xerox streaks, and paper fiber texture; gradients are replaced by grainy black dots.",
          "ko": "-only 、；。"
        }
      },
      {
        "id": "hand-mixed-typography",
        "role": "defining",
        "name": {
          "en": "Handwriting meets typewriter meets clipped type",
          "ko": "Handwriting meets typewriter meets clipped type"
        },
        "facet": "typography",
        "description": {
          "en": "Labels appear in marker handwriting, monospaced typewriter, or all-caps cutout letters — never one slick font family carrying the whole page.",
          "ko": "、—— slick 。"
        }
      },
      {
        "id": "layered-cutouts",
        "role": "defining",
        "name": {
          "en": "Layered cutouts with paper shadows",
          "ko": "Layered cutouts with paper shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Pieces overlap at slight rotations (-3° to +4°), each casting a soft, low offset shadow that reads as physical paper thickness rather than elevation.",
          "ko": "（-3° +4°），，，。"
        }
      },
      {
        "id": "diy-imperfection",
        "role": "defining",
        "name": {
          "en": "DIY imperfection as ornament",
          "ko": "DIY imperfection as ornament"
        },
        "facet": "layout",
        "description": {
          "en": "Misalignment, wobbly hand-drawn rules, glue smears, and visible scissor slips are retained on purpose; symmetry and pixel precision signal something else.",
          "ko": "Misalignment, wobbly hand-drawn rules, glue smears, and visible scissor slips are retained on purpose; symmetry and pixel precision signal something else."
        }
      },
      {
        "id": "limited-spot-palette",
        "role": "supporting",
        "name": {
          "en": "Limited spot-color palette",
          "ko": "Limited spot-color palette"
        },
        "facet": "color",
        "description": {
          "en": "Black ink plus one or two flat accent colors — hot pink, mustard, cyan — on off-white newsprint; the palette mimics cheap riso or xerox duplication.",
          "ko": "——、、——； Riso 。"
        }
      },
      {
        "id": "paper-source-material",
        "role": "variable",
        "name": {
          "en": "Source material on paper",
          "ko": "Source material on paper"
        },
        "facet": "imagery",
        "description": {
          "en": "Magazine photos, ticket stubs, receipts, stamps, and doodles can decorate the surface; what matters is that each piece reads as found and pasted.",
          "ko": "、、、；「」。"
        }
      },
      {
        "id": "digital-glass",
        "role": "avoid",
        "name": {
          "en": "Digital glass or blur",
          "ko": "Digital glass or blur"
        },
        "facet": "surface",
        "description": {
          "en": "backdrop-filter blur, translucent panels, and lens-like gloss dissolve the paper-and-tape materiality — that look is glassmorphism or Liquid Glass, not zine.",
          "ko": "backdrop-filter 、——，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the interface as a Zine / Collage (zine-collage). Defining signals: every card or panel should read as torn or scissor-cut paper, not a vector rectangle — use irregular clip-path polygons or jagged border-radius and expose a 1–2px dark silhouette; attach pieces with visible masking tape hinges (#e8d78b at ~78% opacity, 40–50px wide, rotated -12° to +10°) overlapping corners; apply photocopied halftone grain to images and surfaces using a radial dot pattern (#1a1a1a dots on #f4f1ea paper), then boost contrast and grayscale; mix typography so headings use a handwritten marker family ('Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive), metadata uses a monospaced typewriter ('Courier New', 'Courier Prime', monospace), and accents look like clipped magazine all-caps. Layer pieces at slight rotations (-3° to +4°) with soft paper shadows (2px 3px 0 rgba(26,26,26,.15) or 0 2px 5px rgba(0,0,0,.18)), and keep deliberate DIY imperfection — wobbly rules, misalignment, and scissor marks. Palette: black #1a1a1a on off-white #f4f1ea newsprint, plus one or two flat spot accents such as hot pink #ff4f87 or mustard #f2c94c. Avoid digital glass, backdrop blur, gradients, and clean centered symmetry; those kill the paper materiality. Keep body text at least 14px and on solid paper fills so the rough edges do not sacrifice readability.",
      "ko": "（zine-collage）。：，—— clip-path border-radius， 1–2px ；（#e8d78b、 78% 、 40–50px、 -12° +10°），；（#1a1a1a #f4f1ea ），；：（'Bradley Hand'、'Chalkboard SE'、'Comic Sans MS'、cursive），（'Courier New'、'Courier Prime'、monospace），。（-3° +4°），（2px 3px 0 rgba(26,26,26,.15) 0 2px 5px rgba(0,0,0,.18)）， DIY ——、。：#1a1a1a #f4f1ea ，， #ff4f87 #f2c94c。、backdrop 、，。 14px，，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Modern zines descend from 1930s science-fiction fanzines; the word 'fanzine' was coined by fan Louis Russel Chauvenet around 1940. The cut-and-paste visual identity took shape in the 1970s UK punk scene with photocopied zines like Sniffin' Glue (1976), then spread through the network zine directory Factsheet Five, launched by Mike Gunderloy in 1982. The 1990s Riot Grrrl movement — including the Bikini Kill zine — pushed the DIY collage aesthetic into feminist punk publishing. As a named UI look, Zine / Collage surfaced in the 2020s as a reaction to the sameness of polished SaaS grids, with designers borrowing torn paper, tape, halftone, and handwriting to make screens feel physically assembled.",
      "ko": "zine 1930 fanzine；「fanzine」 1940 Louis Russel Chauvenet 。 1970 ， zine《Sniffin' Glue》（1976）， Mike Gunderloy 1982 zine 《Factsheet Five》。1990 Riot Grrrl —— Bikini Kill zine—— DIY 。 UI ， 2020 ， SaaS ，、、 physically 。"
    },
    "meta": {}
  },
  {
    "slug": "steampunk",
    "name": {
      "en": "Steampunk",
      "ko": "스팀펑크 (Steampunk)"
    },
    "tagline": {
      "en": "Steampunk dresses the interface in the brass, leather and rivets of a Victorian machine room that never was: warm sepia grounds, burnished copper and bronze, gear-edged frames, engraved serif lettering, pressure-gauge meters and visible mechanical fasteners. It is retro-futurism from the age of steam — the screen pretending to be a 19th-century astrolabe, pocket watch or steamship console rather than a digital surface.",
      "ko": "： sepia 、、、、，。—— 19 、，。"
    },
    "scope": {
      "en": "Scope: This entry covers the Victorian/Industrial-Revolution retro-futurist visual style as applied to UI. It does not cover the 1920s–40s streamlined machine aesthetic (Dieselpunk) or the geometric luxury of Art Deco, both of which sit in different centuries and moods.",
      "ko": "：/ UI 。 1920–40 （Dieselpunk）， Art Deco；。"
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
      "ko": [
        "websites that look like brass pocket watches and steam engines",
        "victorian sci-fi interface with gears and pressure gauges",
        "brown leather and copper pipes ui",
        "riveted metal panels with cogwheel borders",
        "the old-timey retro-futuristic machine aesthetic",
        "sepia dashboard that looks like a 19th-century invention"
      ]
    },
    "signals": [
      {
        "id": "brass-copper-palette",
        "role": "defining",
        "name": {
          "en": "Brass, copper and sepia palette",
          "ko": "、 sepia"
        },
        "facet": "color",
        "description": {
          "en": "The dominant reads are warm metal — brass #d4a35b, burnished copper #b87333, dark bronze #6e4c2e — against sepia parchment #e6dcc8 or chocolate leather #4a3425, never cool chrome or neon.",
          "ko": "： #d4a35b、 #b87333、 #6e4c2e， sepia #e6dcc8 #4a3425 ，。"
        }
      },
      {
        "id": "gear-mechanical-frames",
        "role": "defining",
        "name": {
          "en": "Gear and mechanical frames",
          "ko": "Gear and mechanical frames"
        },
        "facet": "geometry",
        "description": {
          "en": "Panels sit inside cogwheel borders, riveted straps, or stepped brass bezels; the frame itself advertises the machine rather than hiding it.",
          "ko": "Panels sit inside cogwheel borders, riveted straps, or stepped brass bezels; the frame itself advertises the machine rather than hiding it."
        }
      },
      {
        "id": "victorian-serif",
        "role": "defining",
        "name": {
          "en": "Victorian engraved serif",
          "ko": "Victorian engraved serif"
        },
        "facet": "typography",
        "description": {
          "en": "Headings and labels use high-contrast serifs (Georgia, Times New Roman, or similar), often small-caps, with letter-spacing around 0.04em and a faint highlight to suggest engraved metal or letterpress.",
          "ko": "（Georgia、Times New Roman ）， small-caps， 0.04em，，。"
        }
      },
      {
        "id": "riveted-fasteners",
        "role": "defining",
        "name": {
          "en": "Riveted fasteners",
          "ko": "Riveted fasteners"
        },
        "facet": "surface",
        "description": {
          "en": "Buttons and plates are studded with small circular rivets or screws at the corners; the fastener is treated as ornament, not a bug.",
          "ko": "Buttons and plates are studded with small circular rivets or screws at the corners; the fastener is treated as ornament, not a bug."
        }
      },
      {
        "id": "pressure-gauges",
        "role": "defining",
        "name": {
          "en": "Steam-pressure gauges",
          "ko": "Steam-pressure gauges"
        },
        "facet": "imagery",
        "description": {
          "en": "Progress bars, dials and readouts are styled as analog gauges — horizontal tubes with brass casings, tick marks and a copper needle or fill.",
          "ko": "Progress bars, dials and readouts are styled as analog gauges — horizontal tubes with brass casings, tick marks and a copper needle or fill."
        }
      },
      {
        "id": "leather-wood-panels",
        "role": "supporting",
        "name": {
          "en": "Leather and dark wood panels",
          "ko": "Leather and dark wood panels"
        },
        "facet": "surface",
        "description": {
          "en": "Large surfaces read as tooled leather, dark walnut or tarnished metal plate, usually with an inset shadow to suggest depth and wear.",
          "ko": "Large surfaces read as tooled leather, dark walnut or tarnished metal plate, usually with an inset shadow to suggest depth and wear."
        }
      },
      {
        "id": "sepia-grading",
        "role": "supporting",
        "name": {
          "en": "Sepia warmth and tarnish",
          "ko": "Sepia warmth and tarnish"
        },
        "facet": "color",
        "description": {
          "en": "Everything is warmed by a sepia overlay or vignette; bright white and pure grey look out of place unless they read as porcelain enamel.",
          "ko": "sepia ；，。"
        }
      },
      {
        "id": "geometric-luxury-symmetry",
        "role": "avoid",
        "name": {
          "en": "Geometric luxury symmetry",
          "ko": "Geometric luxury symmetry"
        },
        "facet": "geometry",
        "description": {
          "en": "Mirror symmetry, gold sunbursts and lacquer-black glamour are Art Deco; Steampunk is asymmetrical, patched-together machinery.",
          "ko": "、、 glamour Art Deco；、。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the interface as a Victorian machine-room console. Start with a warm sepia ground (#f5efe4 or #e6dcc8) and dark leather panels (#4a3425). Primary metals: brass #d4a35b, burnished copper #b87333, dark bronze #6e4c2e; add tarnish with linear-gradient(180deg, #e8c887, #b8864b 55%, #7a5428). Surfaces need inset highlights (box-shadow: inset 0 1px 0 rgba(255,255,255,.2), inset 0 -2px 0 rgba(0,0,0,.25)) and a 2px solid #5c4028 outer frame. Frames should read as brass gear borders — use an inline SVG border-image or repeating cog motif in #a67c3b. Typography: Victorian/Edwardian high-contrast serif (Georgia, 'Times New Roman', serif) for headings; letter-spacing 0.04em; small-caps labels in #3e2b1f. Buttons are riveted metal discs: 40–44px circles with radial-gradient brass, border 2px #6e4c2e, inset box-shadow 0 1px 1px rgba(255,255,255,.5), and four corner rivets. Progress bars become pressure gauges: a 10–12px channel inside a rounded brass casing (border 2px #b8864b, background #2a1d14), filled with copper gradient #d47f39 to #9e5b25 and overlaid with faint tick marks every 10%. Avoid Art Deco symmetry, chrome streamline, flat vector minimalism, neon, or screen-default sans-serif. Preserve contrast: dark #2e2119 text on sepia grounds and light labels on dark metal; keep focus rings as visible brass outlines.",
      "ko": "。 sepia （#f5efe4 #e6dcc8）（#4a3425）。： #d4a35b、 #b87333、 #6e4c2e； linear-gradient(180deg, #e8c887, #b8864b 55%, #7a5428) 。（box-shadow: inset 0 1px 0 rgba(255,255,255,.2), inset 0 -2px 0 rgba(0,0,0,.25)） 2px solid #5c4028 。—— SVG border-image #a67c3b 。：/（Georgia、'Times New Roman', serif）， 0.04em，small-caps #3e2b1f。：40–44px ，， 2px #6e4c2e， inset 0 1px 1px rgba(255,255,255,.5)，。：10–12px （border 2px #b8864b， #2a1d14）， #d47f39 #9e5b25， 10% 。 Art Deco 、、、，。：sepia #2e2119 ，；。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The term was coined by science-fiction author K. W. Jeter in a 1987 letter to Locus magazine, where he jokingly proposed 'steampunk' as a label for the Victorian-set fiction he, Tim Powers and James Blaylock were writing — work that borrowed the speculative machinery of H. G. Wells and Jules Verne. The visual vocabulary grew from 19th-century industrial hardware — riveted boilers, brass instrumentation, pocket watches and leather-strapped aviator gear — and entered Web and game UI through retro-futurist projects such as Arcanum: Of Steamworks and Magick Obscura (2001).",
      "ko": "K. W. Jeter 1987 《Locus》，“steampunk” Tim Powers、James Blaylock —— H. G. Wells Jules Verne 。 19 ：、、； Web UI，《Arcanum: Of Steamworks and Magick Obscura》（2001）。"
    },
    "meta": {}
  },
  {
    "slug": "dieselpunk",
    "name": {
      "en": "Dieselpunk",
      "ko": "디젤펑크 (Dieselpunk)"
    },
    "tagline": {
      "en": "Dieselpunk is the visual language of 1920s–1940s industrial war machines rendered as UI: riveted gunmetal panels, aviation gauges, oxidized copper and olive drab, oil stains, and stenciled lettering. Where steampunk dreams of brass gentlemen and clockwork wonder, dieselpunk wakes up in a sooty hangar full of propellers, diesel exhaust, and Art Deco machinery. It is darker, heavier, and more militaristic — the aesthetic of function pushed to the edge of romance.",
      "ko": "1920–1940 UI ：、、、，。，、 Art Deco 。、、——。"
    },
    "scope": {
      "en": "Scope: This entry covers the dieselpunk graphic/UI style. The narrative genre and cosplay scene overlap, but the signals below are about pixels: metal, rivets, gauges, and wartime palette. Decopunk and raygun-gothic share the era but lean more glamorous or atomic-fantastic; this entry stays on the grimy military-industrial side.",
      "ko": "：/UI 。，：、、。Decopunk raygun-gothic ，；。"
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
      "ko": [
        "ui that looks like the inside of a ww2 bomber cockpit",
        "dark riveted metal panels with old flight gauges",
        "olive green and copper steampunk but grittier",
        "industrial art deco machinery interface",
        "1920s military diesel engine aesthetic",
        "weathered metal with stenciled labels"
      ]
    },
    "signals": [
      {
        "id": "gunmetal-palette",
        "role": "defining",
        "name": {
          "en": "Gunmetal and olive-drab palette",
          "ko": "Gunmetal and olive-drab palette"
        },
        "facet": "color",
        "description": {
          "en": "Base surfaces sit in dark, desaturated metallics (#2a2b28, #3c3d39) and military olive (#4b5320, #575c3f), accented by oxidized copper (#8c6239), dull brass (#b87333), and soot black (#0f0f0d).",
          "ko": "（#2a2b28、#3c3d39）（#4b5320、#575c3f），（#8c6239）、（#b87333）（#0f0f0d）。"
        }
      },
      {
        "id": "riveted-panels",
        "role": "defining",
        "name": {
          "en": "Riveted sheet-metal panels",
          "ko": "Riveted sheet-metal panels"
        },
        "facet": "surface",
        "description": {
          "en": "Backgrounds and cards read as overlapping plates of steel or aluminum, joined by rows of visible rivets rendered as small circular bumps or dots along panel edges.",
          "ko": "Backgrounds and cards read as overlapping plates of steel or aluminum, joined by rows of visible rivets rendered as small circular bumps or dots along panel edges."
        }
      },
      {
        "id": "aviation-gauges",
        "role": "defining",
        "name": {
          "en": "Aviation and engine gauges",
          "ko": "Aviation and engine gauges"
        },
        "facet": "imagery",
        "description": {
          "en": "Circular dials, needles, segmented readouts, and stenciled numerals mimic interwar aircraft instruments and factory meters; progress bars often become half-moon gauges or linear manometers.",
          "ko": "Circular dials, needles, segmented readouts, and stenciled numerals mimic interwar aircraft instruments and factory meters; progress bars often become half-moon gauges or linear manometers."
        }
      },
      {
        "id": "distressed-wear",
        "role": "defining",
        "name": {
          "en": "Distressed wear and grime",
          "ko": "Distressed wear and grime"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces carry scratches, oil streaks, rust blooms, and uneven patina — never pristine. Edges are chamfered by use rather than by clean vector rounding.",
          "ko": "、、——。，。"
        }
      },
      {
        "id": "stencil-typography",
        "role": "defining",
        "name": {
          "en": "Stencil and block industrial type",
          "ko": "Stencil and block industrial type"
        },
        "facet": "typography",
        "description": {
          "en": "Labels use stencil, compressed sans-serif, or military slab faces, often set in all caps with wide tracking; body text stays small and utilitarian.",
          "ko": "stencil、 slab ，；。"
        }
      },
      {
        "id": "deco-mechanics",
        "role": "supporting",
        "name": {
          "en": "Art Deco-mechanical geometry",
          "ko": "Art Deco"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms combine stepped ziggurat profiles, radiused machine housings, and symmetrical arrays of bolts and vents — structure follows manufacturing, not whimsy.",
          "ko": "ziggurat 、，——，。"
        }
      },
      {
        "id": "wire-mesh-vents",
        "role": "supporting",
        "name": {
          "en": "Wire mesh, vents, and portholes",
          "ko": "Wire mesh, vents, and portholes"
        },
        "facet": "imagery",
        "description": {
          "en": "Details like perforated grilles, louvers, round porthole windows, and rubber gaskets reinforce the sense of sealed machinery and pressurized cabins.",
          "ko": "Details like perforated grilles, louvers, round porthole windows, and rubber gaskets reinforce the sense of sealed machinery and pressurized cabins."
        }
      },
      {
        "id": "clockwork-filigree",
        "role": "avoid",
        "name": {
          "en": "Victorian clockwork and filigree",
          "ko": "Victorian clockwork and filigree"
        },
        "facet": "surface",
        "description": {
          "en": "Exposed gears, cogs, scrollwork, velvet, and gentleman-inventor props steer the look toward Steampunk; dieselpunk hides its mechanics behind armored plate.",
          "ko": "Exposed gears, cogs, scrollwork, velvet, and gentleman-inventor props steer the look toward Steampunk; dieselpunk hides its mechanics behind armored plate."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in the spirit of Dieselpunk. Defining signals: a dark gunmetal and olive-drab base (#2a2b28, #4b5320, #575c3f) with oxidized copper (#8c6239) and dull brass (#b87333) accents; backgrounds built as overlapping riveted sheet-metal panels — use radial-gradient rivets (~3–4px dots) along panel seams; aviation and engine gauges rendered as circular dials or half-moon meters with needles and stenciled numerals; surfaces distressed with scratches, oil streaks, and rust via layered noise gradients or texture overlays; stencil, compressed sans, or military slab type in all caps with wide letter-spacing. Keep radii small (2–4px) or chamfered; avoid Victorian filigree, exposed gears, polished brass, and sepia palettes. Use directional inset highlights to read as beveled metal, and heavy shadows (0 8px 24px rgba(0,0,0,.6)) to sink panels into a dark hangar-like space. Provide visible focus outlines (#b87333 2px) and respect reduced-motion for gauge needles.",
      "ko": "（Dieselpunk）。：（#2a2b28、#4b5320、#575c3f），（#8c6239）（#b87333）；——（ 3–4px ）；；、、，； stencil、 slab，。（2–4px）；、、。，（0 8px 24px rgba(0,0,0,.6)）。（#b87333 2px）， reduced-motion 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The term 'dieselpunk' was coined in 2001 by game designer Lewis Pollak to market his tabletop RPG Children of the Sun, which he described as the darker, dirtier side of steampunk. Its visual roots are the real industrial and military design of the interwar period through World War II — riveted aircraft fuselages, tank armor, factory gauge panels, and diesel engines — filtered through Art Deco and Streamline Moderne geometry. Since the 2000s it has spread through games, film, and illustration as a distinct retro-futuristic look.",
      "ko": "「dieselpunk」 Lewis Pollak 2001 ， RPG《Children of the Sun》，설명、。——、、—— Art Deco Streamline Moderne 。2000 ，、。"
    },
    "meta": {}
  },
  {
    "slug": "biopunk",
    "name": {
      "en": "Biopunk",
      "ko": "바이오펑크 (Biopunk)"
    },
    "tagline": {
      "en": "Biopunk drags cyberpunk out of the chrome-and-neon city and into the wet lab: interfaces look grown rather than machined — viscous gels, semi-translucent membranes, throbbing vascular progress bars, and sterile medical readouts tinted in sickly greens, bruised pinks, and cold laboratory whites. It is the visual language of gene editing, biohacked implants, and cultures bubbling in petri dishes. Where cyberpunk asks 'what if the network owns you', biopunk asks 'what if your own cells do'.",
      "ko": "：「」，——、、，、。、。「」，「」。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual and interface language of biopunk — organic surfaces, lab-equipment geometry, bio-data visualization, and medical UI accents. The literary subgenre (Greg Bear, Paul Di Filippo) and the DIY biohacker movement share the name but are only background; this atlas is about pixels.",
      "ko": "：——、、 UI 。（Greg Bear、Paul Di Filippo） DIY ，；。"
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
      "ko": [
        "interface that looks like a petri dish or lab culture",
        "sickly green slime UI with medical readouts",
        "buttons that look like gel pads or organic tissue",
        "biotech dashboard with throbbing vein-like progress bars",
        "flesh and mucus sci-fi interface style",
        "genome sequencer or CRISPR app aesthetic"
      ]
    },
    "signals": [
      {
        "id": "organic-surfaces",
        "role": "defining",
        "name": {
          "en": "Grown, not machined surfaces",
          "ko": "Grown, not machined surfaces"
        },
        "facet": "surface",
        "description": {
          "en": "Buttons and cards read as gel pads, agar plates, or semi-translucent tissue — soft, yielding, often slightly irregular edges rather than crisp geometric shapes.",
          "ko": "、——、，，。"
        }
      },
      {
        "id": "sick-palette",
        "role": "defining",
        "name": {
          "en": "Sickly greens and bruised pinks",
          "ko": "Sickly greens and bruised pinks"
        },
        "facet": "color",
        "description": {
          "en": "Dominant hues are bio-luminescent greens (#39ff14, #7fff00, #4ade80), mucous yellows, cold lab whites (#e8f4f8), and infected fleshy pinks (#ff6b9d, #ff85a1) against near-black or sterile grey grounds.",
          "ko": "（#39ff14、#7fff00、#22c55e）、、（#e8f4f8），（#ff6b9d、#ff85a1），。"
        }
      },
      {
        "id": "vascular-motion",
        "role": "defining",
        "name": {
          "en": "Pulsing vascular progress",
          "ko": "Pulsing vascular progress"
        },
        "facet": "motion",
        "description": {
          "en": "Loaders and progress bars behave like flowing fluid, creeping mold, or a heartbeat — slow organic movement with irregular pulse beats, not mechanical linear scans.",
          "ko": "、——，，。"
        }
      },
      {
        "id": "lab-hardware",
        "role": "defining",
        "name": {
          "en": "Laboratory equipment metaphors",
          "ko": "Laboratory equipment metaphors"
        },
        "facet": "imagery",
        "description": {
          "en": "Petri dishes, test tubes, pipettes, centrifuge rings, cell grids, and DNA helixes appear as iconography, container shapes, or decorative motifs.",
          "ko": "、、、、 DNA 、。"
        }
      },
      {
        "id": "medical-typography",
        "role": "supporting",
        "name": {
          "en": "Medical interface type",
          "ko": "Medical interface type"
        },
        "facet": "typography",
        "description": {
          "en": "Monospaced or squared-off sans-serif labels that mimic hospital monitors, sequencer logs, and assay readouts — clinical, small, and data-dense.",
          "ko": "，、——、、。"
        }
      },
      {
        "id": "membrane-texture",
        "role": "supporting",
        "name": {
          "en": "Membrane and mucus textures",
          "ko": "Membrane and mucus textures"
        },
        "facet": "surface",
        "description": {
          "en": "Subtle gradients, noise, or layered blur suggest a wet surface — think amniotic sheen, bacterial film, or the opalescent skin of a jellyfish.",
          "ko": "、——、，。"
        }
      },
      {
        "id": "bio-data",
        "role": "supporting",
        "name": {
          "en": "Dense bio-data readouts",
          "ko": "Dense bio-data readouts"
        },
        "facet": "layout",
        "description": {
          "en": "Tiny codons, base-pair sequences, heart-rate traces, and waveform readouts fill margins and corners, as if the UI is monitoring a living sample.",
          "ko": "、、， UI 。"
        }
      },
      {
        "id": "hard-chrome",
        "role": "avoid",
        "name": {
          "en": "Hard chrome and circuitry",
          "ko": "Hard chrome and circuitry"
        },
        "facet": "surface",
        "description": {
          "en": "Sharp brushed metal, glowing neon grids, and circuit-board patterns push the look straight into cyberpunk — biopunk keeps the tech soft and biological.",
          "ko": "Sharp brushed metal, glowing neon grids, and circuit-board patterns push the look straight into cyberpunk — biopunk keeps the tech soft and biological."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build the interface as Biopunk. Canvas: near-black lab bench (#0a120f) or sterile clinical grey (#e8f4f8), depending on whether you want a dark incubation chamber or a bright clean-room readout. Defining signals: controls render as grown organic forms — gel pads, agar dishes, or semi-translucent tissue with soft irregular edges; palette anchored in sickly bio-luminescent greens (#39ff14, #7fff00, #22c55e), mucous yellows, infected fleshy pinks (#ff6b9d, #ff85a1), and cold lab whites (#e8f4f8); progress and loaders behave like pulsing fluid or creeping mold, not mechanical scans. Use layered gradients and inner shadows to create wet membrane sheen: e.g. gel button — radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), transparent 45%) over linear-gradient(180deg, #4ade80, #22c55e, #15803d), with inset 0 -6px 12px rgba(0,60,20,.35) for depth. Progress bars: #0d1f17 track, #39ff14 fill with background-size: 200% 100% and a slow translate/gradient animation to suggest slime flow, plus 0 0 14px rgba(57,255,20,.55) glow. Typography: clinical monospaced or squared sans for readouts, 11–13px data labels. Imagery: petri dishes, test tubes, centrifuge rings, DNA helixes, cell grids. Do not drift into cyberpunk; the decisive difference is wet/organic/lab versus chrome/neon/dystopia. Avoid hard metal textures, circuit patterns, and hot magenta-cyan neon. Preserve text contrast (greens on black can be too dim — push luminous greens to at least #22c55e against #0a120f), visible focus states, and honor prefers-reduced-motion by stopping the slime pulse.",
      "ko": "（Biopunk）。：（#0a120f）（#e8f4f8），。：——、，；（#39ff14、#7fff00、#22c55e）、、（#ff6b9d、#ff85a1）（#e8f4f8）；，。：—— linear-gradient(180deg, #4ade80, #22c55e, #15803d) radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), transparent 45%)， inset 0 -6px 12px rgba(0,60,20,.35) 。： #0d1f17， #39ff14，background-size: 200% 100%，/， 0 0 14px rgba(57,255,20,.55) 。：，11–13px 。：、、、DNA 、。；// versus //。、-。（—— #22c55e #0a120f），， prefers-reduced-motion 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Biopunk grew out of cyberpunk in the late 1980s as writers turned from silicon networks to biotechnology: Greg Bear's 'Blood Music' (1985 novel, based on a 1983 short story) is the most-cited early landmark, and Paul Di Filippo's 'Ribofunk' (1996) coined the playful funk-biology tone. Around the same time, the term attached to a DIY biohacker movement experimenting with garage genetic engineering. As a visual style it crystallized in games, film, and app concepts that needed 'the organic opposite of cyberpunk' — all mucus, lab glass, and twitching wetware.",
      "ko": "1980 ，：Greg Bear 《Blood Music》（1985 ， 1983 ），Paul Di Filippo 《Ribofunk》（1996） playful funk-。， DIY 。，、「」——、。"
    },
    "meta": {}
  },
  {
    "slug": "afrofuturism",
    "name": {
      "en": "Afrofuturism",
      "ko": "아프로퓨처리즘 (Afrofuturism)"
    },
    "tagline": {
      "en": "Afrofuturism projects African and diasporic culture into science fiction and the cosmos: interfaces that read like a star chart, a royal banner, and a launch console at once. Deep space black is edged with gold, burnt orange, and royal purple; African geometric patterns frame sunbursts and constellations instead of neoclassical ornament. It has traveled from Sun Ra's cosmic jazz to the Wakandan UI of Black Panther.",
      "ko": "：、。、；，。 Sun Ra ，《》 UI。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual/UI expression of Afrofuturism — cosmic, Africa-inspired, technologically optimistic surfaces — not the literary genre as a whole. It is distinct from Art Deco (1920s Parisian luxury geometry) and from generic space/sci-fi HUDs that carry no African pattern or diasporic symbolism.",
      "ko": "：/UI ——、、——。（Art Deco，1920 ）/ HUD 。"
    },
    "aliases": {
      "en": [
        "black panther hud with gold tribal borders",
        "african patterns in space with sun and stars",
        "gold purple and orange futuristic african interface",
        "afro sci fi cosmic website with geometric motifs",
        "music player that looks like a royal space amulet"
      ],
      "ko": [
        "black panther hud with gold tribal borders",
        "african patterns in space with sun and stars",
        "gold purple and orange futuristic african interface",
        "afro sci fi cosmic website with geometric motifs",
        "music player that looks like a royal space amulet"
      ]
    },
    "signals": [
      {
        "id": "tribal-patterns",
        "role": "defining",
        "name": {
          "en": "African geometric pattern language",
          "ko": "African geometric pattern language"
        },
        "facet": "imagery",
        "description": {
          "en": "Mud-cloth, kente, and adinkra-like tessellations — triangles, chevrons, diamonds, and interlocking lines — repeat as borders, panels, or masks in 2–4px metallic strokes.",
          "ko": "（mud cloth）、（kente）、（adinkra） tessellation——、、—— 2–3px 、。"
        }
      },
      {
        "id": "warm-metallics",
        "role": "defining",
        "name": {
          "en": "Warm metallic palette",
          "ko": "Warm metallic palette"
        },
        "facet": "color",
        "description": {
          "en": "Gold #d4af37, bronze, copper, burnt orange #f26522, and royal purple #6b2d5c on a dark starfield #0d0418; color reads as both regal and cosmic.",
          "ko": "#d4af37、、、 #f26522 #6b2d5c #0d0418 ；。"
        }
      },
      {
        "id": "starfield-cosmos",
        "role": "defining",
        "name": {
          "en": "Deep-space starfield backdrop",
          "ko": "Deep-space starfield backdrop"
        },
        "facet": "imagery",
        "description": {
          "en": "A near-black cosmic ground dotted with stars, nebula washes, and faint constellation traces; space is the literal and metaphorical canvas.",
          "ko": "、 faint ；。"
        }
      },
      {
        "id": "sun-stars",
        "role": "defining",
        "name": {
          "en": "Sun and star iconography",
          "ko": "Sun and star iconography"
        },
        "facet": "imagery",
        "description": {
          "en": "A central radiating sun, eight-pointed stars, or constellation motifs rendered in metallic gold line-art; warm celestial bodies are the focal emblem.",
          "ko": "A central radiating sun, eight-pointed stars, or constellation motifs rendered in metallic gold line-art; warm celestial bodies are the focal emblem."
        }
      },
      {
        "id": "tribal-geometry",
        "role": "defining",
        "name": {
          "en": "Tribal geometric framing",
          "ko": "Tribal geometric framing"
        },
        "facet": "geometry",
        "description": {
          "en": "Panels and buttons are edged with angular, stepped, or interlocking frames rather than plain rectangles; the geometry carries cultural pattern logic, not Art Deco luxury.",
          "ko": "Panels and buttons are edged with angular, stepped, or interlocking frames rather than plain rectangles; the geometry carries cultural pattern logic, not Art Deco luxury."
        }
      },
      {
        "id": "bold-display-type",
        "role": "supporting",
        "name": {
          "en": "Bold display type with wide stance",
          "ko": "Bold display type with wide stance"
        },
        "facet": "typography",
        "description": {
          "en": "Headings in a heavy geometric sans or stencil face, uppercase, letter-spacing 0.12–0.25em; text sits like a banner or emblem.",
          "ko": "stencil ，， 0.12–0.25em；。"
        }
      },
      {
        "id": "gold-foil",
        "role": "supporting",
        "name": {
          "en": "Gold-foil gradients",
          "ko": "Gold-foil gradients"
        },
        "facet": "surface",
        "description": {
          "en": "Strokes and display text use vertical gold gradients (#f9e076 → #d4af37 → #9c7f22) with a hard highlight stop so they read as metal leaf.",
          "ko": "（#f9e076 → #d4af37 → #9c7f22），，。"
        }
      },
      {
        "id": "deco-ornament",
        "role": "avoid",
        "name": {
          "en": "1920s Parisian luxury geometry",
          "ko": "1920s Parisian luxury geometry"
        },
        "facet": "geometry",
        "description": {
          "en": "Mirror symmetry, stepped ziggurats, and gilded all-caps hotel signage without tribal pattern or cosmic ground read as Art Deco, not Afrofuturism.",
          "ko": "、，，（Art Deco），。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build an Afrofuturist UI. Canvas: deep space #0d0418 with a sparse starfield — radial-gradient dots plus a faint gold nebula wash. Palette: metallic gold #d4af37 (highlights #f9e076, shade #9c7f22), burnt orange #f26522, royal purple #6b2d5c, ivory text #efe9dc. Pattern: African geometric motifs — mud-cloth, kente, adinkra-like marks — as 2–3px gold borders. Frame panels with angular, stepped, or zigzag clip-path edges, not plain rectangles. Typography: heavy geometric sans or stencil face, uppercase headings, letter-spacing 0.15–0.25em; display text in a vertical gold gradient (background-clip: text). Focal emblem: a radiating sun or eight-pointed star in gold line-art. Buttons and sliders share tribal borders and gold-foil highlights; progress fills orange-to-purple. Depth comes from metallic contrast and line, not soft shadows. Motion: slow sun rotation or star twinkle; pause under prefers-reduced-motion. Avoid Art Deco: mirror symmetry, ziggurats, lacquer black without space, gilded hotel lettering. Keep text on solid high-contrast areas; make focus rings visible.",
      "ko": "（Afrofuturism）。： #0d0418，——radial-gradient faint 。： #d4af37（ #f9e076、 #9c7f22）、 #f26522、 #6b2d5c， #efe9dc。：——、、—— 2–3px 。、 clip-path ，。： stencil ，， 0.15–0.25em；（background-clip: text）。：。；。，。：； prefers-reduced-motion 。：、、、。；。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The term was coined by cultural critic Mark Dery in his 1993 essay 'Black to the Future' — interviews with Samuel R. Delany, Greg Tate, and Tricia Rose that named a current already running through Sun Ra's cosmic jazz persona (developed from the early 1950s), George Clinton's Parliament-Funkadelic Mothership mythology (notably the 1975 Mothership Connection album and tour), and the fiction of Octavia Butler. Scholar Alondra Nelson then gave the field an institutional home by launching the AfroFuturism listserv in 1999. The look entered mainstream UI consciousness through album art, editorial design, and especially Ryan Coogler's Black Panther (2018), where production designer Hannah Beachler and costume designer Ruth E. Carter imagined Wakandan technology through African forms.",
      "ko": "Mark Dery 1993 《Black to the Future》—— Samuel R. Delany、Greg Tate Tricia Rose ， Sun Ra 1950 、George Clinton Parliament-Funkadelic Mothership （ 1975 Mothership Connection ）， Octavia Butler 。 Alondra Nelson 1999 AfroFuturism ，。 UI 、， Ryan Coogler 《》（2018）—— Hannah Beachler Ruth E. Carter 。"
    },
    "meta": {}
  },
  {
    "slug": "de-stijl",
    "name": {
      "en": "De Stijl",
      "ko": "데 스틸 (De Stijl)"
    },
    "tagline": {
      "en": "De Stijl is the Dutch abstract movement that reduced painting and design to a strict grammar of horizontal and vertical black lines enclosing rectangles of red, yellow, and blue on a white ground. Every curve, diagonal, and representational reference is rejected; balance is achieved asymmetrically by shifting the weight of color blocks across an invisible orthogonal grid. The look is inseparable from Piet Mondrian's mature Neo-Plasticist canvases and from Theo van Doesburg's magazine and architectural projects of 1917–1931.",
      "ko": "（De Stijl），：、、。、、；。 Piet Mondrian ， Theo van Doesburg 1917–1931 。"
    },
    "scope": {
      "en": "Scope: This entry covers the De Stijl look as it appears in graphic and UI design — the black-grid, primary-rectangle, no-curve vocabulary. It is not the whole of Dutch modernism; Constructivism shares the geometric spirit but adds diagonals and industrial imagery, while Bauhaus shares the primaries but freely uses circles, triangles, and all-lowercase type.",
      "ko": "： UI ——、、。；，，，、。"
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
      "ko": [
        "mondrian style with red yellow blue squares and black lines",
        "websites that look like a mondrian painting",
        "strict grid of black lines and primary color blocks",
        "rectangles only no curves no gradients ui",
        "neoplasticism style with white background and colored blocks",
        "that dutch design with only straight lines and right angles"
      ]
    },
    "signals": [
      {
        "id": "orthogonal-grid",
        "role": "defining",
        "name": {
          "en": "Horizontal and vertical black grid",
          "ko": "Horizontal and vertical black grid"
        },
        "facet": "geometry",
        "description": {
          "en": "The composition is held together by straight black lines running only at 0° and 90° — no diagonals, no curves. Lines are usually 2–4px thick and act as both structure and edge.",
          "ko": "0° 90° ，、。 2–4px，。"
        }
      },
      {
        "id": "rectangles-only",
        "role": "defining",
        "name": {
          "en": "Rectangles only",
          "ko": "Rectangles only"
        },
        "facet": "geometry",
        "description": {
          "en": "Every colored or outlined shape is a rectangle. Circles, triangles, blobs, icons, and rounded corners are excluded — right angles are the only geometry.",
          "ko": "。、、、、——。"
        }
      },
      {
        "id": "primaries-plus-ink",
        "role": "defining",
        "name": {
          "en": "Primaries plus black and white",
          "ko": "Primaries plus black and white"
        },
        "facet": "color",
        "description": {
          "en": "The palette is locked to unmixed red, yellow, and blue on a white ground, bounded by black lines. No gradients, no tints, no greys, no expanded palette.",
          "ko": "、、，、。、、、。"
        }
      },
      {
        "id": "asymmetric-balance",
        "role": "defining",
        "name": {
          "en": "Asymmetric equilibrium",
          "ko": "Asymmetric equilibrium"
        },
        "facet": "layout",
        "description": {
          "en": "Large color blocks on one side of the canvas are offset by clusters of smaller blocks or denser black lines on the other — balance without mirror symmetry.",
          "ko": "Large color blocks on one side of the canvas are offset by clusters of smaller blocks or denser black lines on the other — balance without mirror symmetry."
        }
      },
      {
        "id": "flat-matte-planes",
        "role": "defining",
        "name": {
          "en": "Flat matte planes",
          "ko": "Flat matte planes"
        },
        "facet": "surface",
        "description": {
          "en": "All fills are opaque, flat, and texture-free. Shadows, glows, gradients, glass, and depth effects would break the Neo-Plasticist discipline.",
          "ko": "、、。、、、。"
        }
      },
      {
        "id": "uniform-line-weight",
        "role": "supporting",
        "name": {
          "en": "Uniform ink line weight",
          "ko": "Uniform ink line weight"
        },
        "facet": "geometry",
        "description": {
          "en": "Grid lines keep a consistent thickness throughout the composition — typically 2–4px — so the rhythm of the rectangles reads as a single system.",
          "ko": "—— 2–4px——。"
        }
      },
      {
        "id": "right-angles",
        "role": "supporting",
        "name": {
          "en": "Every corner is 90°",
          "ko": "Every corner is 90°"
        },
        "facet": "geometry",
        "description": {
          "en": "No rounded corners, chamfers, or arcs. The strictness of the right angle is part of the style's visual signature.",
          "ko": "No rounded corners, chamfers, or arcs. The strictness of the right angle is part of the style's visual signature."
        }
      },
      {
        "id": "curves-diagonals",
        "role": "avoid",
        "name": {
          "en": "Curves and diagonals",
          "ko": "Curves and diagonals"
        },
        "facet": "geometry",
        "description": {
          "en": "Any circle, triangle, slanted line, or organic shape immediately reads as Constructivist, Bauhaus, or Memphis rather than De Stijl.",
          "ko": "Any circle, triangle, slanted line, or organic shape immediately reads as Constructivist, Bauhaus, or Memphis rather than De Stijl."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build the surface as De Stijl (Neo-Plasticism). Canvas: white #ffffff, ink lines #0a0a0a. Palette is restricted to three flat primaries — red #e3000f, yellow #f9d71c, blue #0057a8 — plus paper white; no gradients, shadows, tints, or textures. Every shape is a rectangle; every line is horizontal or vertical at 2–4px thick; border-radius must be 0px everywhere. Compose with CSS Grid or absolute positioning, using the black lines as both gap filler and bounding edges. Asymmetric balance is essential: place one large primary block off-center and counter it with a cluster of smaller blocks or denser black divisions on the opposite side. Type should be a neutral sans-serif (Helvetica Neue, Arial, or similar), sentence case, kept small and unobtrusive; avoid display fonts, all-lowercase geometric lettering, or ornament. Buttons are solid rectangles of red, yellow, or blue with 2–4px black borders; hover swaps the fill to another primary or to white, never adds depth or rounding. Motion, if any, is a hard cut or a linear translate along the horizontal/vertical axis; no easing curves, no fades, no rotation. Do not drift into Bauhaus: the moment you add circles, triangles, diagonals, or all-lowercase geometric type, you have left De Stijl. Preserve text contrast (ink on paper and yellow, paper on red/blue), visible focus outlines as black 2px offsets, and honor prefers-reduced-motion by removing any movement.",
      "ko": "（De Stijl / ）。： #ffffff， #0a0a0a。—— #e3000f、 #f9d71c、 #0057a8——；、、。；， 2–4px； border-radius 0px。 CSS Grid ，。：，。（Helvetica Neue、Arial ），，；、。//， 2–4px ；hover ，。，/；、、。：、、，。（/，/）， 2px outline， prefers-reduced-motion 。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "De Stijl was founded in Amsterdam in 1917 by the painter and critic Theo van Doesburg, who launched the magazine De Stijl as the movement's mouthpiece; the painters Piet Mondrian and Bart van der Leck, the architect J.J.P. Oud, and the designer Vilmos Huszár were among its earliest contributors. Mondrian's mature 'Neo-Plasticist' canvases — red, yellow, and blue rectangles locked into white fields by black verticals and horizontals — became the style's public face, while Van Doesburg pushed the same grammar into architecture and typography. The magazine ceased publication in 1931, and the movement dissolved as its members diverged, but its reduction to pure form and primary color became one of the lasting reference points for modern graphic design.",
      "ko": "1917 Theo van Doesburg ，《De Stijl》； Piet Mondrian、Bart van der Leck， J.J.P. Oud， Vilmos Huszár 。Mondrian 「」——、、——， Van Doesburg 。 1931 ，，。"
    },
    "meta": {}
  },
  {
    "slug": "constructivism",
    "name": {
      "en": "Constructivism",
      "ko": "구성주의 (Constructivism)"
    },
    "tagline": {
      "en": "Constructivism translates early Soviet avant-garde graphic language into UI: razor-sharp diagonals, red-and-black slabs, clipped industrial photography, and blocky sans-serif type locked into dynamic, poster-like layouts. It still reads as propaganda energy rather than decoration — every element looks arranged to shout a message across a noisy square. A modern app borrowing the look usually wants urgency, solidarity, or editorial punch.",
      "ko": "UI：、、，。， —— 。 App ，、。"
    },
    "scope": {
      "en": "Scope: This entry covers the graphic style that migrated from Soviet posters and book design into digital UI. It is not the later Constructivist architecture of poured concrete, nor the abstract sculpture of Tatlin's Monument to the Third International; those are siblings, not signals.",
      "ko": "： UI 。「」，；，。"
    },
    "aliases": {
      "en": [
        "soviet propaganda poster style in an app",
        "red and black diagonal blocks with industrial photos",
        "that bold angled typography like old revolution posters",
        "constructivist design with photo collage and geometric bars",
        "heavy sans-serif ui that looks like a political broadsheet"
      ],
      "ko": [
        "soviet propaganda poster style in an app",
        "red and black diagonal blocks with industrial photos",
        "that bold angled typography like old revolution posters",
        "constructivist design with photo collage and geometric bars",
        "heavy sans-serif ui that looks like a political broadsheet"
      ]
    },
    "signals": [
      {
        "id": "diagonal-composition",
        "role": "defining",
        "name": {
          "en": "Diagonal composition",
          "ko": "Diagonal composition"
        },
        "facet": "layout",
        "description": {
          "en": "The layout is built from slashed rectangles, chevrons, and bars that run at 30–60°; horizontals and verticals feel like exceptions, not the rule.",
          "ko": "30–60° 、；，。"
        }
      },
      {
        "id": "red-black-slabs",
        "role": "defining",
        "name": {
          "en": "Red-and-black slabs",
          "ko": "Red-and-black slabs"
        },
        "facet": "color",
        "description": {
          "en": "The palette is almost always a loud red (e.g. #D3191C), stark black (#0A0A0A), and a muted off-white or newsprint grey (#E8E4D9); color sits as flat planes, not gradients.",
          "ko": "loud red（ #D3191C）、（#0A0A0A）（#E8E4D9 / #B8B2A2）；，。"
        }
      },
      {
        "id": "photomontage",
        "role": "defining",
        "name": {
          "en": "Clipped photomontage",
          "ko": "Clipped photomontage"
        },
        "facet": "imagery",
        "description": {
          "en": "Industrial or mass-culture photos are cut into sharp geometric panels with hard edges, often overlaid by red bars or black shapes, never softly rounded.",
          "ko": "Industrial or mass-culture photos are cut into sharp geometric panels with hard edges, often overlaid by red bars or black shapes, never softly rounded."
        }
      },
      {
        "id": "industrial-imagery",
        "role": "defining",
        "name": {
          "en": "Industrial and mass icons",
          "ko": "Industrial and mass icons"
        },
        "facet": "imagery",
        "description": {
          "en": "Gears, smokestacks, loudspeakers, fists, aeroplanes, and crowds appear as silhouettes or high-contrast halftones, signaling collective production and modernity.",
          "ko": "、、、、、，。"
        }
      },
      {
        "id": "bold-sans",
        "role": "defining",
        "name": {
          "en": "Bold grotesk type",
          "ko": "grotesk"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms are heavy, condensed sans-serifs — equivalents of Helvetica/Impact/Arial Black — set in all caps with tight leading and often tilted or stacked.",
          "ko": "、 —— Helvetica / Impact / Arial Black —— 、，。"
        }
      },
      {
        "id": "dynamic-tilt",
        "role": "defining",
        "name": {
          "en": "Dynamic tilt",
          "ko": "Dynamic tilt"
        },
        "facet": "geometry",
        "description": {
          "en": "Headings, buttons, and image panels lean at the same diagonal angle (typically skewX(-8°) to skewX(-15°)), so the whole card feels like it is moving forward.",
          "ko": "、（ skewX(-8°) skewX(-15°)），。"
        }
      },
      {
        "id": "poster-density",
        "role": "supporting",
        "name": {
          "en": "Poster density",
          "ko": "Poster density"
        },
        "facet": "layout",
        "description": {
          "en": "Text and shapes butt against edges and overlap; generous padding and centered symmetry are avoided because the page is treated as a single propaganda sheet.",
          "ko": "； generous padding ，。"
        }
      },
      {
        "id": "static-grid",
        "role": "avoid",
        "name": {
          "en": "Static orthogonality",
          "ko": "Static orthogonality"
        },
        "facet": "layout",
        "description": {
          "en": "Calm, centered cards with equal white space and right-angle grids immediately kill the style — that territory belongs to De Stijl and Swiss minimalism.",
          "ko": "、 —— De Stijl 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create this surface in the spirit of Soviet Constructivism. Defining signals: a red-and-black slab palette — use #D3191C for the loud accent, #0A0A0A for black, and #E8E4D9 or #B8B2A2 for the off-white / newsprint ground. Build the layout from diagonals: slashed rectangles, chevrons, and bars at 30–60°; headings, buttons, and image panels should share a single skew angle (transform: skewX(-8deg) to skewX(-12deg)) so the whole composition leans forward. Use heavy, condensed grotesk type — 'Helvetica Neue', 'Arial Black', Impact, or system heavy sans — in all caps with tight leading and 0.03–0.06em letter-spacing. Images must be clipped into sharp geometric panels and treated as high-contrast grayscale photomontage (filter: grayscale(100%) contrast(1.2)), overlaid by red bars or black shapes; choose industrial/mass icons such as gears, smokestacks, loudspeakers, or fists. Hard black borders (2–3px solid #0A0A0A) and flat color planes are required; zero gradients, zero rounded corners, zero soft shadows. Keep the specific iconography and exact angle flexible, but keep the diagonal energy and propaganda density. Do not drift into De Stijl — the decisive difference is motion: straighten the diagonals to right angles, replace photos with flat primary color blocks, and add white space, and you have left Constructivism. Preserve text contrast: black on red/off-white usually passes; red on black needs careful sizing. Honor prefers-reduced-motion by removing skew/translate transitions and keeping static diagonal geometry.",
      "ko": "（Constructivism）。： —— #D3191C ，#0A0A0A ，#E8E4D9 #B8B2A2 / 。：、 30–60° ；、（transform: skewX(-8deg) skewX(-12deg)），。、 grotesk —— 'Helvetica Neue'、'Arial Black'、Impact —— 、，letter-spacing 0.03–0.06em。，（filter: grayscale(100%) contrast(1.2)），； / ，、、。（2–3px solid #0A0A0A）；、、。，。 De Stijl；「」：、，。： / ；。 prefers-reduced-motion： skew / translate ，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Russian Constructivism crystallised around 1915, led by Vladimir Tatlin and Alexander Rodchenko, and gained momentum after the 1917 Revolution through propaganda posters, book design, and agitprop — figures such as El Lissitzky, Lyubov Popova, and Gustav Klutsis shaped its look of photomontage, bold sans-serif type, and dynamic diagonals. The movement was effectively suppressed in the early 1930s as Socialist Realism became state doctrine, but its graphic vocabulary remained a reference for poster and editorial design ever after.",
      "ko": "1915 ， Vladimir Tatlin Alexander Rodchenko ， 1917 、 agitprop —— El Lissitzky、Lyubov Popova、Gustav Klutsis 、。1930 ，，，。"
    },
    "meta": {}
  },
  {
    "slug": "pop-art",
    "name": {
      "en": "Pop Art",
      "ko": "팝 아트 (Pop Art)"
    },
    "tagline": {
      "en": "Pop Art lifts the look of mass media into UI: comic panels, advertising halftones, and celebrity faces are redrawn as flat, saturated shapes locked inside thick black ink outlines, with Ben-Day dots standing in for shadows and gradients. It treats consumer culture as both subject and punchline — a soup can, a comic strip, a Marilyn — rendered in the primary-plus-neon palette of 1960s printing. The style is instantly readable because it borrows from the most familiar visual language on the newsstand.",
      "ko": "UI：、、，，。——、、—— 1960 。，。"
    },
    "scope": {
      "en": "Scope: Covers the Pop Art visual language as adapted to UI and graphic design — Ben-Day dots, comic-panel grids, bold outlines, and mass-media imagery. It is not the 1980s postmodern pattern language of Memphis, nor the rough photocopied collage of zine culture; those are separate entries.",
      "ko": "： UI ——、、。 80 ， zine ；。"
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
      "ko": [
        "websites that look like a comic book page",
        "halftone dots and thick black outlines like old ads",
        "that 60s screen-print style with soup cans and faces",
        "bold primary colors with speech bubbles",
        "comic panel layout with ben day dots",
        "retro advertising collage with celebrities"
      ]
    },
    "signals": [
      {
        "id": "ben-day-dots",
        "role": "defining",
        "name": {
          "en": "Ben-Day halftone dots",
          "ko": "Ben-Day halftone dots"
        },
        "facet": "surface",
        "description": {
          "en": "Shading and texture are built from evenly spaced small dots — mechanical halftone cells rather than gradients — usually #000000 or the local ink color on a #ffffff ground.",
          "ko": "——，—— #000000 #ffffff 。"
        }
      },
      {
        "id": "thick-black-outline",
        "role": "defining",
        "name": {
          "en": "Thick black ink outlines",
          "ko": "Thick black ink outlines"
        },
        "facet": "geometry",
        "description": {
          "en": "Every shape, button, panel, and letterform carries a uniform 2.5–4px solid #000000 stroke, like a comic panel inked for cheap newsprint.",
          "ko": "、、 2.5–4px #000000 ，。"
        }
      },
      {
        "id": "comic-panel-grid",
        "role": "defining",
        "name": {
          "en": "Comic-strip panel grid",
          "ko": "Comic-strip panel grid"
        },
        "facet": "layout",
        "description": {
          "en": "The page is broken into rectangular panels with heavy gutters and borders — the layout itself reads as a sequence of comic frames rather than a continuous canvas.",
          "ko": "The page is broken into rectangular panels with heavy gutters and borders — the layout itself reads as a sequence of comic frames rather than a continuous canvas."
        }
      },
      {
        "id": "saturated-primaries",
        "role": "defining",
        "name": {
          "en": "Saturated primary and neon fills",
          "ko": "Saturated primary and neon fills"
        },
        "facet": "color",
        "description": {
          "en": "Flat fills of #ff2a2a red, #ffd500 yellow, #0066ff blue, plus hot pink #ff1493 and cyan #00e5ff — opaque, unmixed, no gradients.",
          "ko": "：#ff2a2a 、#ffd500 、#0066ff ， #ff1493 #00e5ff——、、。"
        }
      },
      {
        "id": "mass-media-imagery",
        "role": "defining",
        "name": {
          "en": "Mass-media subject matter",
          "ko": "Mass-media subject matter"
        },
        "facet": "imagery",
        "description": {
          "en": "Soup cans, celebrity portraits, comic characters, product labels, and advertising slogans — the imagery is borrowed from the supermarket and the newsstand.",
          "ko": "、、、、——。"
        }
      },
      {
        "id": "speech-bubbles",
        "role": "supporting",
        "name": {
          "en": "Speech and starburst balloons",
          "ko": "Speech and starburst balloons"
        },
        "facet": "geometry",
        "description": {
          "en": "Labels, prices, and calls-to-action sit inside comic speech bubbles or jagged starbursts, complete with black outlines and halftone tails.",
          "ko": "Labels, prices, and calls-to-action sit inside comic speech bubbles or jagged starbursts, complete with black outlines and halftone tails."
        }
      },
      {
        "id": "flat-matte-fills",
        "role": "variable",
        "name": {
          "en": "Flat matte color planes",
          "ko": "Flat matte color planes"
        },
        "facet": "surface",
        "description": {
          "en": "Shadows come from halftone dots, not gradients; large areas are a single solid color with hard edges, preserving the screen-printed read.",
          "ko": "Shadows come from halftone dots, not gradients; large areas are a single solid color with hard edges, preserving the screen-printed read."
        }
      },
      {
        "id": "squiggle-geometry",
        "role": "avoid",
        "name": {
          "en": "80s squiggle geometry",
          "ko": "80 squiggle"
        },
        "facet": "geometry",
        "description": {
          "en": "All-over Memphis squiggles, triangles, and dots-for-pattern remove the narrative, newsstand-specific imagery that makes Pop Art Pop Art.",
          "ko": "squiggle、「」、。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface as Pop Art. Canvas: a white #ffffff comic-page ground covered with a Ben-Day halftone dot layer — radial-gradient(#000 18%, transparent 20%) with background-size: 6px 6px. Layout: break the page into rectangular comic panels with 3px solid #000000 gutters and borders. Color palette: flat opaque fills only — #ff2a2a red, #ffd500 yellow, #0066ff blue, #ff1493 hot pink, #00e5ff cyan; no gradients, no blur, no transparency. Every interactive element gets a 3–4px solid #000000 outline and, where appropriate, a hard offset shadow like box-shadow: 5px 5px 0 #000. Type: heavy condensed display sans for headlines (Impact, Haettenschweiler, 'Arial Narrow', sans-serif; weight 800–900), with body text in a plain sans-serif. Imagery: borrow from mass media — product labels, celebrity portraits, comic panels, speech bubbles, starburst badges — and shade large shapes with the halftone dot pattern. Interactions: buttons press flat into their offset shadow (transform: translate(5px,5px) and box-shadow: none on active), and starbursts can rotate a few degrees on hover. Keep long text on solid color blocks, never directly on the halftone ground. Do not drift into Memphis; the decisive difference is that Pop Art is newsstand-narrative (comics, ads, celebrities) while Memphis is abstract 80s pattern geometry. Preserve 4.5:1 text contrast on every solid fill (black text on yellow passes; white text on cyan needs checking) and honor prefers-reduced-motion.",
      "ko": "。： #ffffff ，——radial-gradient(#000 18%, transparent 20%)，background-size: 6px 6px。： 3px #000000 。：——#ff2a2a 、#ffd500 、#0066ff 、#ff1493 、#00e5ff ；、、。 3–4px #000000 ，， box-shadow: 5px 5px 0 #000。：（Impact、Haettenschweiler、'Arial Narrow'、sans-serif；weight 800–900），。：——、、、、——。：（active transform: translate(5px,5px) box-shadow: none）， hover 。，。；「」（、、）， 80 。 4.5:1（；）， prefers-reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The term 'Pop Art' was coined by British critic Lawrence Alloway around 1955 for the Independent Group — artists such as Richard Hamilton and Eduardo Paolozzi who were collaging American advertising and comic strips in London in the early 1950s. The movement crossed to the United States in the early 1960s, where Andy Warhol's Campbell's Soup Cans (1962) and Marilyn silkscreens, Roy Lichtenstein's enlarged comic panels with hand-painted Ben-Day dots, and Claes Oldenburg's soft consumer sculptures defined its mass-media vocabulary. It peaked as a mainstream avant-garde force through the mid-1960s and has been repeatedly revived in graphic and UI design as shorthand for playful consumer-culture commentary.",
      "ko": "「Pop Art」 Lawrence Alloway 1955 ， Independent Group Richard Hamilton、Eduardo Paolozzi —— 1950 。 1960 ，Andy Warhol 《》（1962）、Roy Lichtenstein ， Claes Oldenburg ，。 1960 ， UI ，。"
    },
    "meta": {}
  },
  {
    "slug": "surrealism",
    "name": {
      "en": "Surrealism",
      "ko": "초현실주의 (Surrealism)"
    },
    "tagline": {
      "en": "Surrealism treats the interface as a dream canvas: recognizable objects are placed in impossible relationships — clocks melt and drape over edges, eyes float in soft gradients, solids breathe with slow morphing motion. The palette is hushed and lunar rather than neon, the lighting is diffuse and uncanny, and the composition follows the logic of the subconscious rather than the grid. It borrows its name from the 1924 art movement, but as a UI style it is a contemporary mood: the screen as a lucid dream.",
      "ko": "：——，，。，；，，。 1924 ， UI ：。"
    },
    "scope": {
      "en": "Scope: This entry covers the visual language of dream logic, melting forms, floating symbolic objects, and soft uncanny gradients in interface design. It is not the same as the historical Surrealist art movement, nor is it vaporwave's 80s/90s consumer nostalgia, cyberpunk's neon dystopia, or the occult strand of maximalist digital collage.",
      "ko": "：、、。， Vaporwave 80/90 、Cyberpunk ，。"
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
      "ko": [
        "that dreamy ui with melting shapes and floating eyes",
        "soft gradient interfaces that feel like a lucid dream",
        "the art style where objects melt and gravity doesn't work",
        "mysterious surreal collage with eyes and clouds",
        "ui that looks like a dali painting crossed with a music app",
        "pastel dreamscape with impossible floating things"
      ]
    },
    "signals": [
      {
        "id": "melting-forms",
        "role": "defining",
        "name": {
          "en": "Melting and flowing forms",
          "ko": "Melting and flowing forms"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges drip, sag, and re-solidify like soft wax or Dalí's clocks; border-radius becomes an organic 40%/60%/70% blob, and rigid rectangles look out of place.",
          "ko": "、；border-radius 40%/60%/70% ，。"
        }
      },
      {
        "id": "floating-objects",
        "role": "defining",
        "name": {
          "en": "Gravity-defying floating objects",
          "ko": "Gravity-defying floating objects"
        },
        "facet": "layout",
        "description": {
          "en": "Eyes, clocks, clouds, keys, or body parts hover at different depths with no logical support, casting soft diffuse shadows rather than resting on surfaces.",
          "ko": "、、、，，，。"
        }
      },
      {
        "id": "soft-gradients",
        "role": "defining",
        "name": {
          "en": "Soft lunar gradients",
          "ko": "Soft lunar gradients"
        },
        "facet": "color",
        "description": {
          "en": "Backgrounds wash from lavender #c8b6e2 through peach #f4c7b0 to pale blue #a8d5e5, desaturated and glowing, never the loud neon of vaporwave or cyberpunk.",
          "ko": "#c8b6e2 #f4c7b0 #a8d5e5，， Vaporwave Cyberpunk loud 。"
        }
      },
      {
        "id": "dream-collage",
        "role": "defining",
        "name": {
          "en": "Dream collage and impossible combinations",
          "ko": "Dream collage and impossible combinations"
        },
        "facet": "imagery",
        "description": {
          "en": "A clock drapes over a cloud, an eye peers from inside a button, a fish swims through the sky — the imagery is symbolic and deliberately irrational.",
          "ko": "，，——、。"
        }
      },
      {
        "id": "subconscious-symbols",
        "role": "supporting",
        "name": {
          "en": "Subconscious symbols",
          "ko": "Subconscious symbols"
        },
        "facet": "imagery",
        "description": {
          "en": "Eyes, keys, doors, mirrors, moons, and disembodied hands recur as motifs; they read as dream symbols rather than functional icons.",
          "ko": "、、、、、；，。"
        }
      },
      {
        "id": "uncanny-lighting",
        "role": "supporting",
        "name": {
          "en": "Diffuse uncanny lighting",
          "ko": "Diffuse uncanny lighting"
        },
        "facet": "surface",
        "description": {
          "en": "Shadows are long, soft, and often cast in the wrong direction; specular highlights feel like moonlight or candlelight rather than a single coherent sun.",
          "ko": "Shadows are long, soft, and often cast in the wrong direction; specular highlights feel like moonlight or candlelight rather than a single coherent sun."
        }
      },
      {
        "id": "slow-morph",
        "role": "supporting",
        "name": {
          "en": "Slow liquid morphing",
          "ko": "Slow liquid morphing"
        },
        "facet": "motion",
        "description": {
          "en": "Animations breathe, drift, and melt over 6–12 seconds with easing that feels viscous; nothing snaps or clicks like a machine.",
          "ko": "6–12 、、，；。"
        }
      },
      {
        "id": "digital-decay",
        "role": "avoid",
        "name": {
          "en": "VHS glitch and 80s consumer debris",
          "ko": "VHS 80"
        },
        "facet": "surface",
        "description": {
          "en": "Scanlines, chromatic aberration, katakana, Windows chrome, and mall-palm sunsets are the vocabulary of vaporwave; they break the fine-art dream spell here.",
          "ko": "、、、Windows 、 Vaporwave ；。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the interface in the spirit of Surrealism. Canvas: a soft lunar gradient background running lavender #c8b6e2 through peach #f4c7b0 to pale blue #a8d5e5, optionally with a faint parchment texture. Defining signals: geometry melts — use organic border-radius like 40% 60% 70% 30% / 40% 50% 60% 50% for cards and buttons so edges feel like warm wax; objects float at impossible depths with soft diffuse shadows (box-shadow: 0 18px 40px rgba(45,36,56,.25)) rather than resting on shelves; imagery is dream-collage — clocks draping over edges, disembodied eyes, clouds, keys, moons — rendered as flat symbolic shapes or inline SVG. Color: keep it desaturated and glowing — add misty creams #f5f0e6, muted gold #d4af37, and deep shadow #2d2438; avoid neon pink/cyan and chrome. Typography: choose an elegant high-contrast serif (or a refined sans with generous letter-spacing) for titles; body text stays small and unobtrusive so the dream imagery dominates. Motion: slow liquid morphing and floating — 6–12s ease-in-out loops, viscous transitions, nothing mechanical; use @keyframes for gentle up/down drift and subtle scale breathing. Interactions: buttons should feel like pressing soft wax — small scale(.96) with a shadow collapse rather than a hard click. Do not drift into vaporwave: the decisive difference is the absence of 80s/90s consumer nostalgia, Greek busts, katakana, Windows chrome, VHS scanlines, and neon grids. Preserve readability by placing text on solid misty panels (#f5f0e6 at 92% opacity) over the gradient, keep text at 4.5:1 against those panels, and honor prefers-reduced-motion by disabling drift and morph loops.",
      "ko": "（Surrealism）。：， #c8b6e2 #f4c7b0 #a8d5e5， faint 。：—— border-radius， 40% 60% 70% 30% / 40% 50% 60% 50%，；，（box-shadow: 0 18px 40px rgba(45,36,56,.25)）；——、、、、—— SVG 。： Cream #f5f0e6、 #d4af37 #2d2438；。：（）；、，。：——6–12s ease-in-out ，，； @keyframes subtle 。：—— scale(.96) ，。 Vaporwave： 80/90 、、、Windows 、VHS 。： Cream （#f5f0e6 92% ）， 4.5:1， prefers-reduced-motion，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Surrealism began as an art movement in 1924 when poet André Breton published the Surrealist Manifesto in Paris, channeling Sigmund Freud's ideas about the unconscious and dreams; Salvador Dalí's 1931 painting The Persistence of Memory, with its melting clocks, and René Magritte's visual paradoxes became its most recognizable images. As a UI aesthetic it is a 21st-century digital mood rather than a formal school — contemporary portfolios and editorial sites borrow the dream-logic collage, soft gradients, and floating symbolic objects to evoke introspection and the uncanny.",
      "ko": "1924 ， André Breton 《》， Sigmund Freud ；Salvador Dalí 1931 《》（） René Magritte 。 UI ， 21 ——、。"
    },
    "meta": {}
  },
  {
    "slug": "art-nouveau",
    "name": {
      "en": "Art Nouveau",
      "ko": "아르누보 (Art Nouveau)"
    },
    "tagline": {
      "en": "Art Nouveau is the late-19th-century 'new art' that replaced historical revivalism with living, asymmetrical lines drawn from plants, flowers, and whiplash tendrils. Its interfaces and graphics favor earthy jewel tones, oxidized gold, hand-drawn vines, and ornate serif lettering that seems to grow out of the page rather than sit on it. It flourished from roughly 1890 to 1910 and was eclipsed by the machine geometry of Art Deco.",
      "ko": "19 「」，、、，。、、，。 1890 1910 ，（Art Deco）。"
    },
    "scope": {
      "en": "Scope: This entry covers the Art Nouveau visual language as it appears in UI, illustration, and typography. The overlapping Arts & Crafts movement and Japonism share some DNA but are treated separately; Art Deco is the closest neighbor and the main source of confusion.",
      "ko": "： UI、。（Arts & Crafts）（Japonism），；，。"
    },
    "aliases": {
      "en": [
        "that old poster style with long flowing hair and flowers around the border",
        "curvy plant-like borders and swirly gold lettering",
        "the style that looks like vines grew into the frame",
        "organic whiplash lines and olive green with gold accents",
        "antique ornamental typography with floral decorations"
      ],
      "ko": [
        "that old poster style with long flowing hair and flowers around the border",
        "curvy plant-like borders and swirly gold lettering",
        "the style that looks like vines grew into the frame",
        "organic whiplash lines and olive green with gold accents",
        "antique ornamental typography with floral decorations"
      ]
    },
    "signals": [
      {
        "id": "whiplash-curves",
        "role": "defining",
        "name": {
          "en": "Whiplash curves",
          "ko": "Whiplash curves"
        },
        "facet": "geometry",
        "description": {
          "en": "Long, unbroken S- and C-curves that snap back on themselves like stems in the wind; borders and rules follow a single flowing gesture rather than straight edges.",
          "ko": "S C ，；，。"
        }
      },
      {
        "id": "organic-ornament",
        "role": "defining",
        "name": {
          "en": "Organic ornament",
          "ko": "Organic ornament"
        },
        "facet": "imagery",
        "description": {
          "en": "Vines, lilies, insects, feathers, and hair rendered as flat linear decoration; the motif is a recognizable plant or creature, not an abstract geometric icon.",
          "ko": "、、、；，。"
        }
      },
      {
        "id": "earthy-jewel-palette",
        "role": "defining",
        "name": {
          "en": "Earthy jewel palette",
          "ko": "Earthy jewel palette"
        },
        "facet": "color",
        "description": {
          "en": "Muted olive, sage, terracotta, oxidized gold, wine red, and dusty teal; color feels mineral or botanical, never chrome or neon.",
          "ko": "、、、、；，。"
        }
      },
      {
        "id": "ornate-serif-typography",
        "role": "defining",
        "name": {
          "en": "Ornate serif typography",
          "ko": "Ornate serif typography"
        },
        "facet": "typography",
        "description": {
          "en": "Letterforms with curling terminals, high stroke contrast, and decorative inline strokes; headings read like hand-cut signage rather than machine type.",
          "ko": "、 inline ；，。"
        }
      },
      {
        "id": "asymmetrical-composition",
        "role": "supporting",
        "name": {
          "en": "Asymmetrical composition",
          "ko": "Asymmetrical composition"
        },
        "facet": "layout",
        "description": {
          "en": "Layouts drift around a vertical axis rather than locking into strict symmetry; even frames are thicker on one side or curl away from center.",
          "ko": "Layouts drift around a vertical axis rather than locking into strict symmetry; even frames are thicker on one side or curl away from center."
        }
      },
      {
        "id": "flat-pattern-depth",
        "role": "supporting",
        "name": {
          "en": "Flat pattern depth",
          "ko": "Flat pattern depth"
        },
        "facet": "depth",
        "description": {
          "en": "Depth comes from overlapping flat motifs and gold-line relief, not from gradients, drop shadows, or 3D modeling.",
          "ko": "，、 3D 。"
        }
      },
      {
        "id": "cast-iron-line",
        "role": "supporting",
        "name": {
          "en": "Cast-iron contours",
          "ko": "Cast-iron contours"
        },
        "facet": "surface",
        "description": {
          "en": "Heavy contours derived from cast-iron and stained-glass leading hold the flowing shapes together, giving the surface a crafted, tactile outline.",
          "ko": "Heavy contours derived from cast-iron and stained-glass leading hold the flowing shapes together, giving the surface a crafted, tactile outline."
        }
      },
      {
        "id": "hard-edged-geometry",
        "role": "avoid",
        "name": {
          "en": "Hard-edged geometry",
          "ko": "Hard-edged geometry"
        },
        "facet": "geometry",
        "description": {
          "en": "Straight lines, exact circles, and repeating chevrons belong to Art Deco and industrial modernism; they break the organic spell.",
          "ko": "Straight lines, exact circles, and repeating chevrons belong to Art Deco and industrial modernism; they break the organic spell."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Art Nouveau. Defining signals: continuous whiplash curves for every border and rule; flat organic ornament — vines, lilies, insects, feathers — as the primary decoration; an earthy jewel palette (sage #9fa86b, terracotta #c26a4d, wine red #7a2d3b, oxidized gold #bfa15f, cream ground #f7f3e8); ornate serif display type with curling terminals and inline strokes. Keep the specific plant motif and exact palette flexible. Use inline SVG paths for vine borders and corner flourishes, stroke-width 1.5–2px for hairline tendrils and 4–6px for cast-iron contours. Set type in a high-contrast serif with decorative capitals (font-family: Georgia, 'Times New Roman', serif; letter-spacing: 0.02em; text-transform: capitalize for headings). Build depth by overlapping flat shapes and gold lines, never with gradients or drop shadows. Buttons and cards should have asymmetrical frames that curl at the corners like stems. Do not drift into Art Deco; the decisive difference is that every line here is a living curve — replace curves with zigzags, sunbursts, or mirror symmetry and the style collapses. Preserve 4.5:1 text contrast on the cream ground (wine red and deep olive pass; pale gold does not), visible focus indicators outside the decorative frame, and reduced-motion support for any animated tendrils.",
      "ko": "（Art Nouveau）。：； —— 、、、 —— ；（sage #9fa86b、terracotta #c26a4d、wine red #7a2d3b、oxidized gold #bfa15f、 #f7f3e8）；， inline 。。 SVG path ， stroke-width 1.5–2px， 4–6px。（font-family: Georgia, 'Times New Roman', serif; letter-spacing: 0.02em; text-transform: capitalize）。，。，。； —— 、，。 4.5:1（；），， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Art Nouveau flourished roughly 1890–1910, taking its name from Siegfried Bing's Paris gallery Maison de l'Art Nouveau (opened 1895). Belgian architect Victor Horta's Hôtel Tassel in Brussels (1893) and French architect Hector Guimard's Paris Métro entrances (c. 1900) are canonical built works; Czech illustrator Alphonse Mucha's posters and French designer Louis Majorelle's furniture defined its graphic and decorative vocabulary. It faded as Art Deco and modernism rose in the 1910s.",
      "ko": "1890–1910 ， Siegfried Bing Maison de l'Art Nouveau（1895 ）。 Victor Horta （Hôtel Tassel，1893 ） Hector Guimard （ 1900 ）； Alphonse Mucha Louis Majorelle 。 1910 ，。"
    },
    "meta": {}
  },
  {
    "slug": "holographic",
    "name": {
      "en": "Holographic",
      "ko": "홀로그래픽 (Holographic)"
    },
    "tagline": {
      "en": "Holographic UI looks like light hitting rainbow foil: a metallic silver base explodes into shifting cyan, magenta, violet, and gold, with pastel pink and lavender shimmers sliding across the surface. It borrows from holographic foil printing and oil-slick diffraction, not glass or depth — the effect is flat, reflective, and synthetic. The style became the face of late-2010s unicorn branding, beauty-tech packaging, and year-in-review campaigns that wanted to feel futuristic and celebratory.",
      "ko": "UI ：、、、， shimmer 。，——、、。 2010 、：。"
    },
    "scope": {
      "en": "Scope: This entry covers the digital visual style inspired by holographic foil and oil-slick iridescence. It is distinct from glassmorphism (which needs transparency and blur) and from the metallic-chrome Y2K look (which favors machined gradients and gel plastic rather than rainbow diffraction).",
      "ko": "：。（） Y2K （，）。"
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
      "ko": [
        "rainbow foil texture that shifts color when you tilt it",
        "ui that looks like unicorn makeup packaging",
        "oil slick gradient with silver metallic shine",
        "holographic sticker or credit card effect",
        "pastel pink purple cyan shimmer surface",
        "futuristic tech brand with rainbow gradients"
      ]
    },
    "signals": [
      {
        "id": "oil-slick-gradients",
        "role": "defining",
        "name": {
          "en": "Oil-slick rainbow gradients",
          "ko": "Oil-slick rainbow gradients"
        },
        "facet": "color",
        "description": {
          "en": "The surface cycles through saturated spectral hues — cyan #00f2ea, magenta #ff006e, violet #b967ff, gold #ffd700 — usually via conic or multi-stop linear gradients that mimic light diffraction.",
          "ko": "—— #00f2ea、 #ff006e、 #b967ff、 #ffd700—— conic-gradient 。"
        }
      },
      {
        "id": "foil-silver-base",
        "role": "defining",
        "name": {
          "en": "Metallic silver foil base",
          "ko": "Metallic silver foil base"
        },
        "facet": "surface",
        "description": {
          "en": "A bright neutral mirror-like substrate sits beneath the rainbow, rendered with sharp white #ffffff specular highlights and cool grey #c4cfdc mid-tones.",
          "ko": "， #ffffff #c4cfdc 。"
        }
      },
      {
        "id": "pastel-shimmer",
        "role": "defining",
        "name": {
          "en": "Pastel pink-cyan shimmer",
          "ko": "shimmer"
        },
        "facet": "color",
        "description": {
          "en": "Soft pastel overlights — pink #ffb3d9, lavender #c084fc, aqua #67e8f9 — float across the foil like secondary reflections, usually at 40–70% opacity.",
          "ko": "—— #ffb3d9、 #c084fc、 #67e8f9——， 40–70%。"
        }
      },
      {
        "id": "reflective-edges",
        "role": "supporting",
        "name": {
          "en": "Hairline chrome edges",
          "ko": "Hairline chrome edges"
        },
        "facet": "geometry",
        "description": {
          "en": "Borders and dividers are 1px metallic lines with a hard highlight on one side and a darker grey #8a93a3 on the other, mimicking a pressed foil edge.",
          "ko": "1px ，， #8a93a3，。"
        }
      },
      {
        "id": "sheen-animation",
        "role": "supporting",
        "name": {
          "en": "Slow sweeping sheen",
          "ko": "Slow sweeping sheen"
        },
        "facet": "motion",
        "description": {
          "en": "A subtle animated gradient or white glare sweeps across the surface every 3–6 seconds, reinforcing the reflective foil illusion.",
          "ko": "3–6 ，。"
        }
      },
      {
        "id": "dark-field-canvas",
        "role": "variable",
        "name": {
          "en": "Dark field canvas",
          "ko": "Dark field canvas"
        },
        "facet": "layout",
        "description": {
          "en": "The style is usually staged on near-black #0a0a0f or deep charcoal so the metallic rainbow reads at full saturation; light backgrounds flatten it.",
          "ko": "#0a0a0f ，；。"
        }
      },
      {
        "id": "frosted-blur",
        "role": "avoid",
        "name": {
          "en": "Frosted blur panels",
          "ko": "Frosted blur panels"
        },
        "facet": "surface",
        "description": {
          "en": "Translucent blurred cards floating over wallpaper are the signature of glassmorphism; holographic surfaces are opaque and reflective, not see-through.",
          "ko": "Translucent blurred cards floating over wallpaper are the signature of glassmorphism; holographic surfaces are opaque and reflective, not see-through."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Build the surface as a sheet of holographic foil on a near-black canvas (#0a0a0f). Start with a metallic silver base: linear-gradient(135deg, #ffffff 0%, #c4cfdc 30%, #8a93a3 50%, #e6eaf0 70%, #ffffff 100%). Layer the oil-slick rainbow over it using conic-gradient(from 180deg, #00f2ea, #b967ff, #ff006e, #ffd700, #67e8f9, #00f2ea) or a 280px-wide multi-stop linear gradient at 115deg. Add pastel shimmer overlays: radial-gradient(120% 80% at 20% 30%, rgba(255,179,217,.55), transparent 50%) plus a cyan counterpart at 80% 70%. Use hairline chrome borders: 1px solid rgba(255,255,255,.55) with an inset 1px rgba(255,255,255,.25) highlight. Keep typography modern — SF Pro, Inter, or system sans at 500–600 weight, white (#ffffff) or near-white (#f2f4f8) text. Animate the sheen with a 4s ease-in-out infinite gradient-position shift. Buttons and cards should feel like stamped foil, not glass: zero backdrop-filter blur, no translucent panels, no soft drop shadows. The decisive guardrail: remove the rainbow iridescence and metallic base and the style collapses — it is not glassmorphism.",
      "ko": "（#0a0a0f）。：linear-gradient(135deg, #ffffff 0%, #c4cfdc 30%, #8a93a3 50%, #e6eaf0 70%, #ffffff 100%)。：conic-gradient(from 180deg, #00f2ea, #b967ff, #ff006e, #ffd700, #67e8f9, #00f2ea)， 280px 、115deg 。 shimmer ：radial-gradient(120% 80% at 20% 30%, rgba(255,179,217,.55), transparent 50%)， 80% 70%。 1px solid rgba(255,255,255,.55)， inset 1px rgba(255,255,255,.25) 。——SF Pro、Inter ， 500–600， #ffffff #f2f4f8。 4s ease-in-out infinite gradient-position 。，： backdrop-filter 、、。 guardrail：，——。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Holographic foil as a physical finishing technique dates back to the 1980s, when micro-embossed diffraction patterns on metallic film began appearing on credit cards, concert tickets, and luxury packaging. The digital UI translation surfaced in the late 2010s, popularized by unicorn/startup branding, beauty-tech packaging, and year-in-review campaigns like Spotify Wrapped, which used rainbow-foil typography and iridescent cards to signal celebration and futurism.",
      "ko": "1980 ，、。 UI 2010 ，/、 Spotify Wrapped ——。"
    },
    "meta": {}
  },
  {
    "slug": "isometric-3d",
    "name": {
      "en": "Isometric 3D",
      "ko": "아이소메트릭 3D (Isometric 3D)"
    },
    "tagline": {
      "en": "Isometric 3D renders interface scenes as axonometric block worlds: three axes spaced 120° apart on the picture plane, parallel lines that never converge, and geometric solids built from cubes and extruded planes. It gives depth without perspective distortion, so a dashboard, city, or device cluster reads like a clean architectural model. The look surged in web illustration around 2017–2019 as 'isometric flat design' and remains a go-to language for explaining complex systems at a glance.",
      "ko": "3D ： 120°，，。，、。 2017–2019 「」（isometric flat design），。"
    },
    "scope": {
      "en": "Scope: This entry covers the isometric visual treatment in UI and illustration — block scenes, axonometric angles, and clean geometric depth. It is not true perspective 3D, photorealistic rendering, or the soft rounded inflation of claymorphism.",
      "ko": "： UI ——、、。 3D、，。"
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
      "ko": [
        "ui that looks like a tiny isometric city or room",
        "blocky 3d interface with no perspective vanishing point",
        "the 30 degree angle tech illustration style",
        "dashboard made of floating cubes and platforms",
        "websites with those flat 3d isometric characters",
        "the geometric model look like simcity"
      ]
    },
    "signals": [
      {
        "id": "30-degree-axonometric",
        "role": "defining",
        "name": {
          "en": "30° axonometric axes",
          "ko": "30° axonometric axes"
        },
        "facet": "geometry",
        "description": {
          "en": "The three visible axes sit at 120° to one another on the picture plane, commonly drawn as 30° left and right from horizontal; parallel edges stay parallel forever.",
          "ko": "120°， 30°；。"
        }
      },
      {
        "id": "orthographic-depth",
        "role": "defining",
        "name": {
          "en": "Orthographic, no vanishing point",
          "ko": "Orthographic, no vanishing point"
        },
        "facet": "depth",
        "description": {
          "en": "There is no perspective convergence — objects do not shrink with distance. A cube in the back is the same size as one in the front, keeping the scene measurable and diagram-like.",
          "ko": "There is no perspective convergence — objects do not shrink with distance. A cube in the back is the same size as one in the front, keeping the scene measurable and diagram-like."
        }
      },
      {
        "id": "block-primitives",
        "role": "defining",
        "name": {
          "en": "Cube and block primitives",
          "ko": "primitives"
        },
        "facet": "geometry",
        "description": {
          "en": "Forms are built from clean extruded rectangles and cubes; surfaces are flat planes meeting at crisp edges, not organic blobs or smooth sculptural shapes.",
          "ko": "Forms are built from clean extruded rectangles and cubes; surfaces are flat planes meeting at crisp edges, not organic blobs or smooth sculptural shapes."
        }
      },
      {
        "id": "soft-cast-shadows",
        "role": "defining",
        "name": {
          "en": "Soft outer cast shadows",
          "ko": "Soft outer cast shadows"
        },
        "facet": "depth",
        "description": {
          "en": "Objects float above the ground on soft, diffuse drop shadows (e.g. box-shadow: 16px 24px 40px rgba(0,0,0,.18)) that anchor them in space without simulating a specific light source.",
          "ko": "drop shadow （ box-shadow: 16px 24px 40px rgba(0,0,0,.18)），，。"
        }
      },
      {
        "id": "flat-shaded-surfaces",
        "role": "defining",
        "name": {
          "en": "Flat-shaded surfaces",
          "ko": "Flat-shaded surfaces"
        },
        "facet": "color",
        "description": {
          "en": "Each face is a single flat color or a clean gradient along one axis; there are no noisy textures, photorealistic materials, or complex lighting models.",
          "ko": "Each face is a single flat color or a clean gradient along one axis; there are no noisy textures, photorealistic materials, or complex lighting models."
        }
      },
      {
        "id": "modular-scenes",
        "role": "supporting",
        "name": {
          "en": "Modular block scenes",
          "ko": "Modular block scenes"
        },
        "facet": "layout",
        "description": {
          "en": "Multiple block objects cluster into readable mini-worlds — a city, a workspace, a device farm — where position and stacking imply hierarchy.",
          "ko": "——、、——。"
        }
      },
      {
        "id": "illustrative-hero",
        "role": "supporting",
        "name": {
          "en": "Illustration-first usage",
          "ko": "Illustration-first usage"
        },
        "facet": "imagery",
        "description": {
          "en": "In UI the style usually appears in hero graphics, empty states, and onboarding; interactive controls themselves are rare, so the player reads as a placed model rather than a skeuomorphic device.",
          "ko": "UI 、；，，。"
        }
      },
      {
        "id": "rounded-inflation",
        "role": "avoid",
        "name": {
          "en": "Rounded inflated volume",
          "ko": "Rounded inflated volume"
        },
        "facet": "surface",
        "description": {
          "en": "Puffy rounded corners, inner shadows, and a soft modeling-clay feel push the work into claymorphism — the geometry here is sharp and extruded, not molded.",
          "ko": "Puffy rounded corners, inner shadows, and a soft modeling-clay feel push the work into claymorphism — the geometry here is sharp and extruded, not molded."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using Isometric 3D. Defining signals: axonometric projection with 30° left/right axes (rotateX(54.7356deg) rotateZ(45deg) in CSS or drawn as 120° axis spacing), zero perspective convergence; forms built from clean cubes and extruded rectangles with crisp edges. Palette: sky top faces #7dd3fc, left faces #38bdf8, right faces #0ea5e9, ground #f0f9ff, warm accents #f59e0b / #f472b6; type in a clean geometric sans (Inter, Spline Sans, or system-ui) at 12–14px with #0f172a. Depth: each block casts a soft diffuse outer shadow — box-shadow: 16px 24px 40px rgba(0,0,0,.18) — placed so objects read as floating above the ground; no inner shadows, no bevels, no perspective foreshortening. Layout: assemble a modular mini-scene (a tiny room, city block, or device cluster) where block position implies hierarchy; keep surfaces flat-shaded with one color per face or a single-axis gradient. Do not drift into claymorphism: the decisive difference is sharp geometry with outer cast shadows, not rounded inflated blobs with inner shadows. Preserve 4.5:1 text contrast on every colored face, visible focus states on any interactive block, and honor prefers-reduced-motion by disabling any isometric float/bob animation.",
      "ko": "3D（Isometric 3D）。：， 30° （CSS rotateX(54.7356deg) rotateZ(45deg)， 120° ），；，。： #7dd3fc、 #38bdf8、 #0ea5e9、 #f0f9ff、 #f59e0b / #f472b6；（Inter、Spline Sans system-ui），12–14px，#0f172a。：——box-shadow: 16px 24px 40px rgba(0,0,0,.18)——；、、。：（、），；，。： + ， + 。 4.5:1，， prefers-reduced-motion，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Isometric projection was formalized as a technical-drawing method in 1822 by the British engineer William Farish, and it became the standard for mechanical and architectural illustration because it preserves true proportions without perspective distortion. Video-game designers adopted it independently to show environment and action at once, from SimCity (1989) and Age of Empires (1997) to mobile titles like Monument Valley (2014). In UI and web design the 'isometric flat' illustration wave rose around 2017–2019 as landing pages and onboarding flows used block worlds to make complex products feel tangible.",
      "ko": "William Farish 1822 ，、。，，《》（1989）、《》（1997）《》（2014）。 UI ，「」 2017–2019 ，。"
    },
    "meta": {}
  },
  {
    "slug": "line-art",
    "name": {
      "en": "Line Art",
      "ko": "라인 아트 (Line Art)"
    },
    "tagline": {
      "en": "Line Art renders an interface as a contour drawing: every control, container, and icon is built from a single-weight outline with no solid fill, like a technical illustration or monoline icon set blown up to UI scale. The line itself is the visual subject — not a border around a colored block, not decoration on top of a flat layout. It reads as precise, light, and almost schematic, as though the product were still a clean ink drawing on tracing paper.",
      "ko": "：、，， UI 。 —— ，。、、，。"
    },
    "scope": {
      "en": "Scope: This entry covers line-art UI as a finished visual style — uniform-stroke outlines, monoline icons, and wireframe-like surfaces where the contour is the form. It does not cover low-fidelity wireframes (which are placeholders, not a final look) nor line illustrations used only as decoration; here the entire interface must read as a single contour drawing.",
      "ko": "： UI —— 、、，。（，），；，。"
    },
    "aliases": {
      "en": [
        "outline-only ui where everything is one thin stroke",
        "wireframe-looking interface with no color fills",
        "monoline icons turned into whole buttons and cards",
        "technical drawing style ui made of clean black lines",
        "that vector line-art look with no shading"
      ],
      "ko": [
        "outline-only ui where everything is one thin stroke",
        "wireframe-looking interface with no color fills",
        "monoline icons turned into whole buttons and cards",
        "technical drawing style ui made of clean black lines",
        "that vector line-art look with no shading"
      ]
    },
    "signals": [
      {
        "id": "single-weight-contour",
        "role": "defining",
        "name": {
          "en": "Single-weight contour lines",
          "ko": "Single-weight contour lines"
        },
        "facet": "geometry",
        "description": {
          "en": "All structure is drawn with one consistent stroke weight — typically 1.5–2px — whether it is a card edge, button rim, icon, or divider.",
          "ko": "—— 1.5–2px —— 、、。"
        }
      },
      {
        "id": "no-solid-fills",
        "role": "defining",
        "name": {
          "en": "No solid fills",
          "ko": "No solid fills"
        },
        "facet": "surface",
        "description": {
          "en": "Interactive surfaces are hollow; the background shows through every shape. Color appears only as line ink, never as block fill.",
          "ko": "Interactive surfaces are hollow; the background shows through every shape. Color appears only as line ink, never as block fill."
        }
      },
      {
        "id": "monochrome-ink",
        "role": "defining",
        "name": {
          "en": "Monochrome ink palette",
          "ko": "Monochrome ink palette"
        },
        "facet": "color",
        "description": {
          "en": "A near-black line color such as #1a1a1a or #222223 on an off-white ground such as #fafafa or #ffffff; optional single accent is still a line, not a fill.",
          "ko": "， #1a1a1a #222223， #fafafa #ffffff ；，，。"
        }
      },
      {
        "id": "technical-precision",
        "role": "defining",
        "name": {
          "en": "Technical-drawing precision",
          "ko": "Technical-drawing precision"
        },
        "facet": "geometry",
        "description": {
          "en": "Clean vector paths, consistent corner radii (0–4px), exact alignment, and equal gaps — the feeling of a draftsperson's ink drawing rather than a sketch.",
          "ko": "、（0–4px）、、 —— ，。"
        }
      },
      {
        "id": "negative-space-form",
        "role": "supporting",
        "name": {
          "en": "Negative space as form",
          "ko": "Negative space as form"
        },
        "facet": "layout",
        "description": {
          "en": "Composition relies on the gaps between lines; shapes are recognized by the boundary they draw, not by filled regions or heavy boxes.",
          "ko": "Composition relies on the gaps between lines; shapes are recognized by the boundary they draw, not by filled regions or heavy boxes."
        }
      },
      {
        "id": "outline-typography",
        "role": "supporting",
        "name": {
          "en": "Outline-friendly type",
          "ko": "Outline-friendly type"
        },
        "facet": "typography",
        "description": {
          "en": "A plain geometric sans in regular weight, small sizes (12–14px), with no filled badges or heavy labels competing with the contour network.",
          "ko": "，， 12–14px，。"
        }
      },
      {
        "id": "flat-filled-blocks",
        "role": "avoid",
        "name": {
          "en": "Flat filled blocks",
          "ko": "Flat filled blocks"
        },
        "facet": "surface",
        "description": {
          "en": "Solid rectangles of color or tinted cards shift the style toward Minimalism or flat design — the line is no longer doing the work.",
          "ko": "Solid rectangles of color or tinted cards shift the style toward Minimalism or flat design — the line is no longer doing the work."
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the interface as Line Art. Defining signals: every element is rendered as a single-weight contour line, typically 1.5px solid #1a1a1a on a #fafafa or #ffffff ground, with no solid fills; buttons, cards, and icons are hollow shapes whose boundaries are the form. Use a clean geometric sans such as Inter or SF Pro at 12–14px regular weight; keep labels sparse so the line network stays the visual subject. Interactive states should change the line (dashed focus outline 1.5px dashed #1a1a1a, pressed state scale 0.96 or a short dash animation) rather than adding background fills. Progress bars and sliders are simple horizontal lines with a circular thumb drawn in the same stroke; use SVG stroke-only icons (stroke-width: 1.5, fill: none, stroke-linecap round). Corner radii stay subtle at 0–4px; shadows are absent. Do not drift into Minimalism — the decisive difference is that Line Art builds the interface from drawn outlines, while Minimalism builds it from colored blocks and whitespace. Preserve a minimum 3:1 contrast for the lines themselves and 4.5:1 for any text, keep touch targets at least 44×44px even when the visible outline is smaller, and provide non-color state cues such as dashed outlines or scale changes.",
      "ko": "（Line Art / Monoline）。：， 1.5px solid #1a1a1a #fafafa #ffffff ，；、，。， Inter SF Pro，12–14px ；，。（ 1.5px dashed #1a1a1a ， scale(0.96) ），。thumb； SVG （stroke-width: 1.5, fill: none, stroke-linecap round）。 0–4px；。；，。 3:1 ， 4.5:1， 44×44px，、。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "Line art is an ancient graphic technique — technical illustration, engraving, and engineering drafting all rely on contour alone — but its modern UI form grew from two visible revivals: the Noun Project's monoline icon library, which popularized single-weight pictograms around 2010, and iOS 7's ultra-thin outline icon set in 2013, which proved an entire interface could read as a family of strokes. Since the mid-2010s the look has appeared in landing pages, dashboards, and illustration-led product identities as a deliberate antidote to heavy flat fills.",
      "ko": "—— 、、 —— UI ：Noun Project 2010 ， 2013 iOS 7 。2010 ，，、。"
    },
    "meta": {}
  },
  {
    "slug": "hand-drawn",
    "name": {
      "en": "Hand-drawn / Doodle",
      "ko": "핸드드로잉 (Hand-drawn)"
    },
    "tagline": {
      "en": "Hand-drawn UI keeps the evidence of a human hand on the screen: lines wobble a pixel or two off a perfect vector, color blocks look marker-filled with uneven edges, and typography leans toward handwriting or a sans softened by slight rotation. It signals low-fi honesty, playfulness, or a deliberate escape from polished SaaS sameness. The look lives in sketchy wireframes, indie app onboarding, and landing pages that want to feel like a notebook rather than a dashboard.",
      "ko": "UI 「」： 1–2px，，，、。、， polished SaaS 。 sketchy 、 App ，。"
    },
    "scope": {
      "en": "Scope: This entry covers the intentional hand-drawn / doodle visual treatment of finished UI surfaces. It is not about early-stage paper sketches or bad drawing; it is a rendered style that imitates markers, pencils, and rough ink. Sketchy wireframes (e.g. Balsamiq's default output) are a close sibling but are usually production artifacts for communication rather than shipped interface skin.",
      "ko": "： UI / 。，；、。Sketchy （ Balsamiq ），，。"
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
      "ko": [
        "ui that looks like it was sketched with a marker",
        "wiggly hand-drawn borders around buttons",
        "doodle-style interface with pencil textures",
        "rough marker fills and shaky outlines",
        "the balsamiq wireframe look used in a real app",
        "sketchy ui with uneven lines"
      ]
    },
    "signals": [
      {
        "id": "wobbly-strokes",
        "role": "defining",
        "name": {
          "en": "Wobbly, imperfect strokes",
          "ko": "Wobbly, imperfect strokes"
        },
        "facet": "geometry",
        "description": {
          "en": "Borders and dividers visibly waver 1–3px away from a straight vector path; corners are rounded but slightly lopsided, and line endpoints often miss by a hair.",
          "ko": "1–3px；，。"
        }
      },
      {
        "id": "marker-pencil-texture",
        "role": "defining",
        "name": {
          "en": "Marker or pencil texture",
          "ko": "Marker or pencil texture"
        },
        "facet": "surface",
        "description": {
          "en": "Surfaces carry paper grain, marker bleed, or pencil hatching; flat fills have subtle opacity variation that reads as real ink rather than a digital solid.",
          "ko": "Surfaces carry paper grain, marker bleed, or pencil hatching; flat fills have subtle opacity variation that reads as real ink rather than a digital solid."
        }
      },
      {
        "id": "organic-fill-blocks",
        "role": "defining",
        "name": {
          "en": "Organic, hand-filled color blocks",
          "ko": "Organic, hand-filled color blocks"
        },
        "facet": "color",
        "description": {
          "en": "Color areas are lumpy and slightly misaligned with their outlines, as if filled with a broad marker that overshot the line in places.",
          "ko": "Color areas are lumpy and slightly misaligned with their outlines, as if filled with a broad marker that overshot the line in places."
        }
      },
      {
        "id": "loose-typography",
        "role": "defining",
        "name": {
          "en": "Loose, handwriting-flavored type",
          "ko": "Loose, handwriting-flavored type"
        },
        "facet": "typography",
        "description": {
          "en": "Text uses a handwriting or soft marker-style typeface, or a sans manually skewed and jittered so letters sit on a near-but-not-quite straight baseline.",
          "ko": "，、，「」。"
        }
      },
      {
        "id": "imperfect-alignment",
        "role": "supporting",
        "name": {
          "en": "Imperfect, collage-like alignment",
          "ko": "Imperfect, collage-like alignment"
        },
        "facet": "layout",
        "description": {
          "en": "Elements sit a few pixels off a strict grid; small boxes tilt ±1–2deg, creating the casual feel of items taped to a sketchbook page.",
          "ko": "； ±1–2deg，。"
        }
      },
      {
        "id": "warm-marker-palette",
        "role": "variable",
        "name": {
          "en": "Warm marker palette",
          "ko": "Warm marker palette"
        },
        "facet": "color",
        "description": {
          "en": "Classically a paper-white or cream ground plus 2–4 marker colors such as #F15A4A red, #FBB03B yellow, #39B54A green, and #29ABE2 blue; black ink at #2B2B2B.",
          "ko": "2–4 ： #F15A4A、 #FBB03B、 #39B54A、 #29ABE2； #2B2B2B。"
        }
      },
      {
        "id": "decorative-doodles",
        "role": "supporting",
        "name": {
          "en": "Decorative doodles",
          "ko": "Decorative doodles"
        },
        "facet": "imagery",
        "description": {
          "en": "Stars, arrows, underlines, and scribbles embellish labels and buttons like marginalia in a notebook.",
          "ko": "Stars, arrows, underlines, and scribbles embellish labels and buttons like marginalia in a notebook."
        }
      },
      {
        "id": "vector-precision",
        "role": "avoid",
        "name": {
          "en": "Vector precision",
          "ko": "Vector precision"
        },
        "facet": "geometry",
        "description": {
          "en": "Crisp 1px anti-aliased lines, perfect Bézier curves, and exact alignment remove the human trace — that is the doorway to flat design or Line Art.",
          "ko": "1px 、 Bézier —— Line Art 。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface using a Hand-drawn / Doodle style. Defining signals: wobbly strokes that visibly waver 1–3px off a perfect path; marker or pencil texture with paper grain and subtle opacity variation; organic color blocks that overshoot their outlines like real marker fills; loose handwriting-flavored typography. Use a warm off-white paper ground such as #f7f4ed with marker accents #F15A4A, #FBB03B, #39B54A, #29ABE2, and black ink #2B2B2B. Borders should be 2–3px solid #2B2B2B with intentionally uneven radii (e.g. border-radius: 10px 12px 9px 13px). Add texture through an SVG feTurbulence displacement filter on strokes or a subtle noise overlay. Buttons and cards can tilt ±0.8–1.5deg and carry a soft offset shadow: box-shadow: 2px 3px 0 rgba(0,0,0,.08). Use a handwriting typeface such as Caveat or Patrick Hand for headings, but keep body text in a clean sans (system-ui) at 15–16px to preserve readability. Do not drift into Line Art; the decisive difference is that hand-drawn keeps fills, texture, and wobble, while Line Art is a precise contour with no fill. Preserve 4.5:1 text contrast even over textured fills, visible focus states independent of the doodle border, and reduced-motion support.",
      "ko": "（Hand-drawn / Doodle）。：、 1–3px；，；；、。 #f7f4ed， #F15A4A、#FBB03B、#39B54A、#29ABE2， #2B2B2B。 2–3px #2B2B2B，（ border-radius: 10px 12px 9px 13px）。 SVG feTurbulence 。 ±0.8–1.5deg，：box-shadow: 2px 3px 0 rgba(0,0,0,.08)。 Caveat Patrick Hand， 15–16px （system-ui）。 Line Art；、， Line Art 。 4.5:1，， reduced-motion。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The aesthetic is rooted in design-process artifacts: Balsamiq Mockups, launched by Giacomo 'Peldi' Giacobazzi in 2008, popularized the sketchy wireframe look as a deliberate low-fidelity communication tool. In the 2010s the sensibility migrated into production UI in playful indie apps and landing pages, and tools like Excalidraw (late 2010s onward) made hand-drawn diagrams a mainstream open-source convention. As a named visual style for shipped interfaces it remains more of a recurring trend than a single coined movement.",
      "ko": "：Giacomo 'Peldi' Giacobazzi 2008 Balsamiq Mockups sketchy 。2010 ， App ；Excalidraw （2010 ）。，，。"
    },
    "meta": {}
  },
  {
    "slug": "fantasy-rpg",
    "name": {
      "en": "Fantasy RPG UI",
      "ko": "판타지 RPG UI (Fantasy RPG UI)"
    },
    "tagline": {
      "en": "Fantasy RPG UI draws its look from the inventory screens, spellbooks, and status panels of tabletop-to-computer role-playing games: parchment, weathered stone, tooled leather, and dark patinated metal form the surfaces; runic or blackletter-inflected type announces headings; red health and blue mana bars wrap the action in resource drama. The style treats the screen as a physical artifact from a medieval-fantasy world, not as a flat display. It crystallized in early CRPGs and was polished into a convention by the MMO era, then surfaced again in every indie dungeon crawler and gacha RPG.",
      "ko": "RPG RPG 、：、、；；。，。 RPG ， MMO ， RPG 。"
    },
    "scope": {
      "en": "Scope: This entry covers the high-fidelity, medieval-fantasy interface skin used in role-playing games — the materials, typography, and HUD grammar — not the Pixel Art branch that builds the same motifs from visible square pixels, nor the broader fantasy illustration style outside UI.",
      "ko": "：、 —— 、 HUD —— ， UI 。"
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
      "ko": [
        "medieval game menu with parchment and leather",
        "the world of warcraft spellbook look",
        "rpg interface with red health and blue mana bars",
        "ancient rune font and metal borders",
        "inventory screen that looks like an old tome",
        "fantasy ui with ornate gold frames"
      ]
    },
    "signals": [
      {
        "id": "parchment-stone-leather",
        "role": "defining",
        "name": {
          "en": "Parchment, stone, and leather surfaces",
          "ko": "Parchment, stone, and leather surfaces"
        },
        "facet": "surface",
        "description": {
          "en": "Backgrounds and panels mimic aged parchment (#e8dcc3), rough stone (#6b655c), or dark tooled leather (#4a3b2a) with subtle grain, stains, and stitched seams — the UI is treated as a physical prop.",
          "ko": "（#e8dcc3）、（#6b655c）（#4a3b2a），、 —— UI 。"
        }
      },
      {
        "id": "metal-ornate-borders",
        "role": "defining",
        "name": {
          "en": "Ornate metal borders",
          "ko": "Ornate metal borders"
        },
        "facet": "geometry",
        "description": {
          "en": "Edges are wrapped in bevelled brass, iron, or dark bronze frames with decorative corner studs, filigree, or rivets; borders use 3–6px raised gradients to read as cast metal rather than flat lines.",
          "ko": "、，、； 3–6px ，。"
        }
      },
      {
        "id": "runic-lettering",
        "role": "defining",
        "name": {
          "en": "Runic or blackletter-inflected titles",
          "ko": "Runic or blackletter-inflected titles"
        },
        "facet": "typography",
        "description": {
          "en": "Headings use angular runic, blackletter, or Celtic knot display faces with sharp serifs and uneven stroke rhythm, while body labels stay legible in a neutral serif or condensed sans.",
          "ko": "Headings use angular runic, blackletter, or Celtic knot display faces with sharp serifs and uneven stroke rhythm, while body labels stay legible in a neutral serif or condensed sans."
        }
      },
      {
        "id": "hp-mp-resource-bars",
        "role": "defining",
        "name": {
          "en": "Health and mana resource bars",
          "ko": "Health and mana resource bars"
        },
        "facet": "imagery",
        "description": {
          "en": "Red health (#c9302c) and blue mana (#2b6ca3) bars sit inside metallic tracks, often with glossy liquid fills, segmented notches, and small icon badges — the HUD borrows the language of character sheets.",
          "ko": "（#c9302c）（#2b6ca3），、 —— HUD 。"
        }
      },
      {
        "id": "medieval-ornament",
        "role": "supporting",
        "name": {
          "en": "Medieval decorative motifs",
          "ko": "Medieval decorative motifs"
        },
        "facet": "imagery",
        "description": {
          "en": "Corner flourishes, heraldic borders, wax seals, and Celtic knot dividers reinforce the pre-modern setting without becoming the primary structure.",
          "ko": "Corner flourishes, heraldic borders, wax seals, and Celtic knot dividers reinforce the pre-modern setting without becoming the primary structure."
        }
      },
      {
        "id": "rich-texture-lighting",
        "role": "supporting",
        "name": {
          "en": "Rich texture and directional lighting",
          "ko": "Rich texture and directional lighting"
        },
        "facet": "depth",
        "description": {
          "en": "Soft drop shadows, inner bevels, and highlight gradients model the thickness of pages and plates; surfaces look illuminated from upper-left by torchlight.",
          "ko": "Soft drop shadows, inner bevels, and highlight gradients model the thickness of pages and plates; surfaces look illuminated from upper-left by torchlight."
        }
      },
      {
        "id": "flat-minimal",
        "role": "avoid",
        "name": {
          "en": "Flat minimal panels",
          "ko": "Flat minimal panels"
        },
        "facet": "surface",
        "description": {
          "en": "Clean flat fills, zero borders, and system sans-serif type strip away the prop-like materiality and read as modern app design, not fantasy.",
          "ko": "、， App ，。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the interface as a Fantasy RPG UI. Defining signals: surfaces look like physical medieval props — aged parchment #e8dcc3 with subtle grain, rough stone #6b655c, or dark tooled leather #4a3b2a; edges are wrapped in ornate metal borders using beveled brass/iron gradients (#9c8c6c to #5d4f3a) with 3–6px thickness, corner studs, and inner highlights. Headings use runic/blackletter display type (Cinzel Decorative, Ringbearer, or UnifrakturMaguntia) at 22–30px with sharp serifs; keep body labels in a readable serif or condensed sans at 13–15px. HUD resource bars are the signature: red health #c9302c and blue mana #2b6ca3 fills inside metallic tracks (#3d3328 to #7a6a56), with glossy top highlights, segmented notches every 20–30px, and small icon badges. Add medieval ornaments — corner flourishes, wax seals, Celtic knot dividers — but keep them secondary. Lighting: soft drop-shadow 0 12px 28px rgba(0,0,0,.45), inner bevel inset 0 1px 0 rgba(255,255,255,.2), directional top-left highlights. Avoid flat minimal panels, system sans-serif type, and clean flat fills; they destroy the prop-like materiality. Ensure text contrast ≥4.5:1 over parchment and leather, pause pulsing bar animations under prefers-reduced-motion, and keep interactive focus rings visible.",
      "ko": "RPG （Fantasy RPG UI）。： —— #e8dcc3 、 #6b655c， #4a3b2a；，/（#9c8c6c #5d4f3a）， 3–6px，。/（Cinzel Decorative、Ringbearer UnifrakturMaguntia），22–30px，； 13–15px 。HUD ： #c9302c #2b6ca3 （#3d3328 #7a6a56），， 20–30px ，。 —— 、、 —— 。： box-shadow: 0 12px 28px rgba(0,0,0,.45)， inset 0 1px 0 rgba(255,255,255,.2)，。、；。 ≥4.5:1，prefers-reduced-motion ，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "The visual grammar descends from tabletop role-playing games, above all Gary Gygax and Dave Arneson’s Dungeons & Dragons (1974, TSR), whose character sheets, spell cards, and DM screens established parchment, metal, and leather as the default fantasy props. Computer RPGs such as Richard Garriott’s Ultima (1981, Origin Systems) translated those props onto early screens, and Blizzard Entertainment’s Diablo (1996, developed by Blizzard North) and World of Warcraft (2004) polished the high-fidelity metal-and-parchment interface into a mass-market convention that indie dungeon crawlers and mobile gacha RPGs still imitate today.",
      "ko": "， Gary Gygax Dave Arneson 《》（Dungeons & Dragons，1974 ，TSR），、 DM 、。Richard Garriott 《》（Ultima，1981 ，Origin Systems） RPG ；Blizzard Entertainment 《》（Diablo，1996 ， Blizzard North ）《》（World of Warcraft，2004 ）， RPG 。"
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
      "ko": "LCARS 24 ：——、、、——。「」，，，。 1987 《：》，、。"
    },
    "scope": {
      "en": "Scope: This entry covers the on-screen graphic language of LCARS as a visual style, not the fictional operating system or its in-universe rules. Touch-panel hardware and voice interfaces are part of the Star Trek prop world but are not the atlas signals here.",
      "ko": "： LCARS ，。《》，。"
    },
    "aliases": {
      "en": [
        "star trek computer screens with orange and purple blocks",
        "rounded colored panels on black spaceship displays",
        "the 24th century starfleet touch screen style",
        "sci fi ui with curved elbow headers and big buttons",
        "michael okuda star trek console design"
      ],
      "ko": [
        "star trek computer screens with orange and purple blocks",
        "rounded colored panels on black spaceship displays",
        "the 24th century starfleet touch screen style",
        "sci fi ui with curved elbow headers and big buttons",
        "michael okuda star trek console design"
      ]
    },
    "signals": [
      {
        "id": "black-canvas",
        "role": "defining",
        "name": {
          "en": "Black canvas ground",
          "ko": "Black canvas ground"
        },
        "facet": "surface",
        "description": {
          "en": "The entire interface sits on a near-black ground (#0b0b0b to #000000) so the colored blocks read as illuminated touch-panel surfaces rather than cards on a page.",
          "ko": "（#0b0b0b #000000），，。"
        }
      },
      {
        "id": "rounded-lozenges",
        "role": "defining",
        "name": {
          "en": "Rounded lozenge blocks",
          "ko": "Rounded lozenge blocks"
        },
        "facet": "geometry",
        "description": {
          "en": "UI elements are pill-like or lozenge-shaped rectangles with 12–20px corner radii on the short ends; small caps act as buttons, large caps act as section headers.",
          "ko": "UI ， 12–20px；，。"
        }
      },
      {
        "id": "elbow-headers",
        "role": "defining",
        "name": {
          "en": "Curved elbow headers",
          "ko": "Curved elbow headers"
        },
        "facet": "geometry",
        "description": {
          "en": "Section dividers and titles sit inside curved, boomerang, or L-shaped caps that bend around a panel corner, often with one rounded end and one straight or clipped edge.",
          "ko": "、 L ，、，。"
        }
      },
      {
        "id": "warm-palette",
        "role": "defining",
        "name": {
          "en": "Warm orange / peach / lavender palette",
          "ko": "Warm orange / peach / lavender palette"
        },
        "facet": "color",
        "description": {
          "en": "Dominant blocks use saturated orange (#FF9900), peach (#FFCC99), amber (#FF9966), and lavender (#9999CC); red (#CC6666) and blue (#6699CC) appear as accents, all against black.",
          "ko": "（#FF9900）、（#FFCC99）、（#FF9966）（#9999CC）；（#CC6666）（#6699CC），。"
        }
      },
      {
        "id": "all-caps-sans",
        "role": "defining",
        "name": {
          "en": "All-caps compact sans labels",
          "ko": "All-caps compact sans labels"
        },
        "facet": "typography",
        "description": {
          "en": "Text is set in a tight, medium-weight sans-serif, almost always uppercase, with generous tracking (0.06–0.12em) so labels read as instrument annotations.",
          "ko": "、，， 0.06–0.12em，。"
        }
      },
      {
        "id": "flat-touch-targets",
        "role": "supporting",
        "name": {
          "en": "Flat touch targets",
          "ko": "Flat touch targets"
        },
        "facet": "layout",
        "description": {
          "en": "Controls are flat color swatches with no gradient, shadow, or bevel; the shape and color alone indicate the interactive area, as if pressing a lit touch panel.",
          "ko": "flat ，、；，。"
        }
      },
      {
        "id": "phosphor-scanlines",
        "role": "avoid",
        "name": {
          "en": "Phosphor scanline depth",
          "ko": "Phosphor scanline depth"
        },
        "facet": "depth",
        "description": {
          "en": "Monochrome green glow, CRT scanlines, terminal fixed-width typography, or faux 3D bevels belong to terminal-hacker and skeuomorphism; LCARS keeps the surface flat, warm, and blocky.",
          "ko": "、CRT 、 3D Terminal Hacker ；LCARS 、、。"
        }
      }
    ],
    "confusedWith": [],
    "brief": {
      "en": "Create the surface in the spirit of LCARS. Start with a near-black canvas (#0b0b0b) as the only background. Build every interactive element as a flat, rounded lozenge: 12–20px border-radius on the short ends, no shadows, no gradients. Use the canonical palette — #FF9900 orange for primary actions and headers, #FFCC99 peach and #FF9966 amber for secondary blocks, #9999CC lavender for tertiary regions, #CC6666 red and #6699CC blue as small accents. Add curved \"elbow\" or boomerang headers by combining straight bars with pseudo-element caps (border-radius: 999px on one side). Set all labels in uppercase sans-serif with 0.06–0.12em letter-spacing and a medium weight; body text should stay minimal. Space blocks with generous black gaps (8–16px) so the colored shapes float on the canvas. Do not add scanlines, phosphor glow, terminal cursors, 3D bevels, or glass blur — those push the design toward Terminal Hacker or Aqua. For interactivity, states can invert text/background color or add a thin inner border; do not animate width/height on the lozenges. Maintain 4.5:1 contrast between the dark canvas and text, and ensure uppercase labels do not become unreadable at small sizes.",
      "ko": "LCARS 。（#0b0b0b）。： 12–20px，。——#FF9900 ，#FFCC99 #FF9966 ，#9999CC ，#CC6666 #6699CC 。「」（ border-radius: 999px）。， 0.06–0.12em，；。 8–16px ，。、、、3D —— Terminal Hacker Aqua。，。 4.5:1 ，。"
    },
    "a11yAndMisuse": null,
    "origin": {
      "en": "LCARS — Library Computer Access/Retrieval System — was designed by graphic designer Michael Okuda for Star Trek: The Next Generation, which premiered in 1987. Roddenberry wanted the Enterprise-D bridge to look more advanced than the original series, so Okuda devised the black-screen, colored-block touch-panel language for the ship's consoles. The look carried through Deep Space Nine and Voyager and became the defining visual shorthand for 24th-century Starfleet interfaces.",
      "ko": "LCARS——/（Library Computer Access/Retrieval System）—— Michael Okuda 1987 《：》。Roddenberry -D ， Okuda ，。《》《》， 24 。"
    },
    "meta": {}
  }
];
