import { TranslateTableItem } from "../types/ui";

export const TRANSLATE_TABLE: TranslateTableItem[] = [
  {
    "thing": {
      "en": "Alert",
      "zh": "提醒"
    },
    "appkit": "NSAlert",
    "swiftui": ".alert(…) or AlertScene"
  },
  {
    "thing": {
      "en": "Alternating row backgrounds",
      "zh": "交替行背景色"
    },
    "appkit": "NSTableView.usesAlternatingRowBackgroundColors",
    "swiftui": ".alternatingRowBackgrounds(_:)"
  },
  {
    "thing": {
      "en": "App menu bar",
      "zh": "应用菜单栏"
    },
    "appkit": "NSApplication.mainMenu",
    "swiftui": ".commands { … }"
  },
  {
    "thing": {
      "en": "Button",
      "zh": "按钮"
    },
    "appkit": "NSButton",
    "swiftui": "Button"
  },
  {
    "thing": {
      "en": "Checkbox",
      "zh": "复选框"
    },
    "appkit": "NSButton with switch type",
    "swiftui": "Toggle + .toggleStyle(.checkbox)"
  },
  {
    "thing": {
      "en": "Color well / color picker",
      "zh": "颜色井 / 取色器"
    },
    "appkit": "NSColorWell + NSColorPanel",
    "swiftui": "ColorPicker"
  },
  {
    "thing": {
      "en": "Command group",
      "zh": "命令组"
    },
    "appkit": "inserted NSMenuItems",
    "swiftui": "CommandGroup"
  },
  {
    "thing": {
      "en": "Confirmation dialog",
      "zh": "确认对话框"
    },
    "appkit": "NSAlert",
    "swiftui": ".confirmationDialog(…)"
  },
  {
    "thing": {
      "en": "Context menu",
      "zh": "上下文菜单（右键菜单）"
    },
    "appkit": "NSView.menu / NSMenu",
    "swiftui": ".contextMenu { … }"
  },
  {
    "thing": {
      "en": "Date picker",
      "zh": "日期选择器"
    },
    "appkit": "NSDatePicker",
    "swiftui": "DatePicker"
  },
  {
    "thing": {
      "en": "Dialog icon",
      "zh": "对话框图标"
    },
    "appkit": "NSAlert.icon",
    "swiftui": ".dialogIcon(_:)"
  },
  {
    "thing": {
      "en": "Disclosure control",
      "zh": "披露控件"
    },
    "appkit": "NSButton.BezelStyle.disclosure / NSOutlineView",
    "swiftui": "DisclosureGroup"
  },
  {
    "thing": {
      "en": "Inspector",
      "zh": "检查器"
    },
    "appkit": "NSSplitViewItem.Behavior.inspector / NSInspectorBar / NSPanel",
    "swiftui": ".inspector(…)",
    "note": {
      "en": "AppKit uses several context-dependent counterparts"
    }
  },
  {
    "thing": {
      "en": "Navigation stack (approximate)",
      "zh": "导航栈（近似对应）"
    },
    "appkit": "NSPageController",
    "swiftui": "NavigationStack",
    "note": {
      "en": "No direct AppKit equivalent"
    }
  },
  {
    "thing": {
      "en": "“Don’t show again” checkbox",
      "zh": "“不再显示”复选框"
    },
    "appkit": "NSAlert.showsSuppressionButton",
    "swiftui": ".dialogSuppressionToggle(…)"
  },
  {
    "thing": {
      "en": "Gauge / level indicator",
      "zh": "仪表 / 电平指示器"
    },
    "appkit": "NSLevelIndicator",
    "swiftui": "Gauge"
  },
  {
    "thing": {
      "en": "Help button/link",
      "zh": "帮助按钮 / 帮助链接"
    },
    "appkit": "NSHelpManager + NSButton",
    "swiftui": "HelpLink"
  },
  {
    "thing": {
      "en": "Hierarchical table row",
      "zh": "层级表格行"
    },
    "appkit": "NSOutlineView row",
    "swiftui": "DisclosureTableRow"
  },
  {
    "thing": {
      "en": "List",
      "zh": "列表"
    },
    "appkit": "NSTableView",
    "swiftui": "List"
  },
  {
    "thing": {
      "en": "Menu",
      "zh": "菜单"
    },
    "appkit": "NSMenu",
    "swiftui": "Menu"
  },
  {
    "thing": {
      "en": "Menu bar extra / status item",
      "zh": "菜单栏附加项 / 状态项"
    },
    "appkit": "NSStatusItem",
    "swiftui": "MenuBarExtra"
  },
  {
    "thing": {
      "en": "Menu indicator arrow",
      "zh": "菜单指示箭头"
    },
    "appkit": "NSPopUpButtonCell.arrowPosition",
    "swiftui": ".menuIndicator(_:)"
  },
  {
    "thing": {
      "en": "Menu item keyboard equivalent",
      "zh": "菜单项快捷键"
    },
    "appkit": "NSMenuItem.keyEquivalent",
    "swiftui": ".keyboardShortcut(_:)"
  },
  {
    "thing": {
      "en": "Menu separator",
      "zh": "菜单分隔线"
    },
    "appkit": "NSMenuItem.separator()",
    "swiftui": "Divider inside a menu"
  },
  {
    "thing": {
      "en": "Menu-style status item",
      "zh": "菜单样式的状态项"
    },
    "appkit": "NSStatusItem + NSMenu",
    "swiftui": "MenuBarExtra + .menuBarExtraStyle(.menu)"
  },
  {
    "thing": {
      "en": "Multi-window scene",
      "zh": "多窗口场景"
    },
    "appkit": "NSWindowController instances",
    "swiftui": "WindowGroup"
  },
  {
    "thing": {
      "en": "Navigation split view",
      "zh": "导航分栏视图"
    },
    "appkit": "NSSplitViewController",
    "swiftui": "NavigationSplitView"
  },
  {
    "thing": {
      "en": "Open/import panel",
      "zh": "打开 / 导入面板"
    },
    "appkit": "NSOpenPanel",
    "swiftui": ".fileImporter(…)"
  },
  {
    "thing": {
      "en": "Outline / source list",
      "zh": "大纲 / 源列表"
    },
    "appkit": "NSOutlineView",
    "swiftui": "OutlineGroup or hierarchical List"
  },
  {
    "thing": {
      "en": "Palette picker",
      "zh": "调色板选择器"
    },
    "appkit": "NSMatrix or NSSegmentedControl",
    "swiftui": "Picker + .pickerStyle(.palette)"
  },
  {
    "thing": {
      "en": "Paste button",
      "zh": "粘贴按钮"
    },
    "appkit": "NSButton + NSPasteboard",
    "swiftui": "PasteButton"
  },
  {
    "thing": {
      "en": "Pop-up button",
      "zh": "弹出式按钮"
    },
    "appkit": "NSPopUpButton with pullsDown = false",
    "swiftui": "Picker + .pickerStyle(.menu)"
  },
  {
    "thing": {
      "en": "Popover",
      "zh": "气泡弹层（Popover）"
    },
    "appkit": "NSPopover",
    "swiftui": ".popover(…)"
  },
  {
    "thing": {
      "en": "Progress bar / spinner",
      "zh": "进度条 / 加载指示器（spinner）"
    },
    "appkit": "NSProgressIndicator",
    "swiftui": "ProgressView"
  },
  {
    "thing": {
      "en": "Pull-down button",
      "zh": "下拉式按钮"
    },
    "appkit": "NSPopUpButton with pullsDown = true",
    "swiftui": "Menu + .menuStyle(.button)"
  },
  {
    "thing": {
      "en": "Radio group",
      "zh": "单选按钮组"
    },
    "appkit": "grouped radio-type NSButtons",
    "swiftui": "Picker + .pickerStyle(.radioGroup)"
  },
  {
    "thing": {
      "en": "Rename button",
      "zh": "重命名按钮"
    },
    "appkit": "NSButton / responder-chain rename action",
    "swiftui": "RenameButton"
  },
  {
    "thing": {
      "en": "Resizable split view",
      "zh": "可调整大小的分栏视图"
    },
    "appkit": "NSSplitView",
    "swiftui": "HSplitView / VSplitView"
  },
  {
    "thing": {
      "en": "Save/export panel",
      "zh": "存储 / 导出面板"
    },
    "appkit": "NSSavePanel",
    "swiftui": ".fileExporter(…)"
  },
  {
    "thing": {
      "en": "Search field",
      "zh": "搜索框"
    },
    "appkit": "NSSearchField",
    "swiftui": ".searchable(…)"
  },
  {
    "thing": {
      "en": "Segmented control",
      "zh": "分段控件"
    },
    "appkit": "NSSegmentedControl",
    "swiftui": "Picker + .pickerStyle(.segmented)"
  },
  {
    "thing": {
      "en": "Settings window",
      "zh": "设置窗口"
    },
    "appkit": "preferences NSWindowController",
    "swiftui": "Settings"
  },
  {
    "thing": {
      "en": "Share button / share picker",
      "zh": "共享按钮 / 共享选择器"
    },
    "appkit": "NSSharingServicePicker",
    "swiftui": "ShareLink"
  },
  {
    "thing": {
      "en": "Sheet",
      "zh": "窗口附着面板（Sheet）"
    },
    "appkit": "NSWindow.beginSheet",
    "swiftui": ".sheet(…)"
  },
  {
    "thing": {
      "en": "Sidebar toggle",
      "zh": "边栏切换"
    },
    "appkit": "NSSplitViewController.toggleSidebar(_:)",
    "swiftui": "SidebarCommands / system toolbar item"
  },
  {
    "thing": {
      "en": "Single window",
      "zh": "单窗口"
    },
    "appkit": "NSWindow",
    "swiftui": "Window"
  },
  {
    "thing": {
      "en": "Slider",
      "zh": "滑块"
    },
    "appkit": "NSSlider",
    "swiftui": "Slider"
  },
  {
    "thing": {
      "en": "Stepper",
      "zh": "步进器"
    },
    "appkit": "NSStepper",
    "swiftui": "Stepper"
  },
  {
    "thing": {
      "en": "Switch",
      "zh": "开关"
    },
    "appkit": "NSSwitch",
    "swiftui": "Toggle + .toggleStyle(.switch)"
  },
  {
    "thing": {
      "en": "Tab view",
      "zh": "标签页视图"
    },
    "appkit": "NSTabViewController / NSTabView",
    "swiftui": "TabView + Tab"
  },
  {
    "thing": {
      "en": "Table",
      "zh": "表格"
    },
    "appkit": "NSTableView",
    "swiftui": "Table"
  },
  {
    "thing": {
      "en": "Table column",
      "zh": "表格列"
    },
    "appkit": "NSTableColumn",
    "swiftui": "TableColumn"
  },
  {
    "thing": {
      "en": "Table header strip",
      "zh": "表格表头栏"
    },
    "appkit": "NSTableHeaderView",
    "swiftui": ".tableColumnHeaders(_:)"
  },
  {
    "thing": {
      "en": "Table row",
      "zh": "表格行"
    },
    "appkit": "NSTableRowView",
    "swiftui": "TableRow"
  },
  {
    "thing": {
      "en": "Toolbar",
      "zh": "工具栏"
    },
    "appkit": "NSToolbar",
    "swiftui": ".toolbar { … }"
  },
  {
    "thing": {
      "en": "Toolbar customization palette",
      "zh": "工具栏自定义面板"
    },
    "appkit": "NSToolbar customization",
    "swiftui": ".toolbar(id:content:)"
  },
  {
    "thing": {
      "en": "Toolbar item",
      "zh": "工具栏项"
    },
    "appkit": "NSToolbarItem",
    "swiftui": "ToolbarItem"
  },
  {
    "thing": {
      "en": "Toolbar item group",
      "zh": "工具栏项组"
    },
    "appkit": "NSToolbarItemGroup",
    "swiftui": "ToolbarItemGroup"
  },
  {
    "thing": {
      "en": "Toolbar overflow menu",
      "zh": "工具栏溢出菜单"
    },
    "appkit": "NSToolbar overflow menu",
    "swiftui": ".toolbarOverflowMenu { … }"
  },
  {
    "thing": {
      "en": "Top-level command menu",
      "zh": "顶层命令菜单"
    },
    "appkit": "top-level NSMenuItem + NSMenu",
    "swiftui": "CommandMenu"
  },
  {
    "thing": {
      "en": "Utility window / tool palette",
      "zh": "工具窗口 / 工具面板"
    },
    "appkit": "NSPanel",
    "swiftui": "UtilityWindow"
  },
  {
    "thing": {
      "en": "Web link",
      "zh": "网页链接"
    },
    "appkit": "link-style NSTextField + NSWorkspace",
    "swiftui": "Link"
  },
  {
    "thing": {
      "en": "Window-style status item",
      "zh": "窗口样式的状态项"
    },
    "appkit": "NSStatusItem + NSPopover or panel",
    "swiftui": "MenuBarExtra + .menuBarExtraStyle(.window)"
  }
];
