import { TranslateTableItem } from "../types/ui";

export const TRANSLATE_TABLE: TranslateTableItem[] = [
  {
    nameEn: "Alert / Dialog",
    nameKo: "알림창 / 대화상자",
    ios: "Alert (.alert / UIAlertController)",
    android: "AlertDialog (AlertDialog)",
    slug: "alert"
  },
  {
    nameEn: "Alternating Row Backgrounds",
    nameKo: "교차 행 배경색",
    ios: "List (.alternatingRowBackgrounds)",
    android: "LazyColumn (Custom modifier)",
    slug: "table"
  },
  {
    nameEn: "App Menu Bar",
    nameKo: "앱 메뉴 바",
    ios: "MenuBarExtra (.commands)",
    android: "TopAppBar / Menu",
    slug: "menu-bar"
  },
  {
    nameEn: "Button",
    nameKo: "버튼",
    ios: "Button (UIButton)",
    android: "Button (MaterialButton)",
    slug: "button"
  },
  {
    nameEn: "Checkbox",
    nameKo: "체크박스",
    ios: "Toggle (.toggleStyle(.checkbox))",
    android: "Checkbox (Checkbox)",
    slug: "switch-checkbox-radio"
  },
  {
    nameEn: "Color Picker / Color Well",
    nameKo: "색상 선택기",
    ios: "ColorPicker (NSColorWell)",
    android: "ColorPicker (Material Color Picker)",
    slug: "color-well"
  },
  {
    nameEn: "Confirmation Dialog / Action Sheet",
    nameKo: "확인 대화상자 / 액션 시트",
    ios: "ConfirmationDialog (.confirmationDialog / UIActionSheet)",
    android: "ModalBottomSheet / AlertDialog",
    slug: "dialog-drawer-sheet"
  },
  {
    nameEn: "Context Menu",
    nameKo: "컨텍스트 메뉴 (우클릭 / 롱프레스)",
    ios: "ContextMenu (.contextMenu / UIContextMenuConfiguration)",
    android: "DropdownMenu / Contextual Action Bar",
    slug: "context-menu"
  },
  {
    nameEn: "Date Picker",
    nameKo: "날짜 선택기",
    ios: "DatePicker (UIDatePicker)",
    android: "DatePicker (DatePickerDialog)",
    slug: "date-picker"
  },
  {
    nameEn: "Disclosure Group / Accordion",
    nameKo: "아코디언 / 접기-펼치기",
    ios: "DisclosureGroup (DisclosureGroup)",
    android: "ExpandableCard / ListItem",
    slug: "accordion"
  },
  {
    nameEn: "Inspector",
    nameKo: "인스펙터 (속성 창)",
    ios: "Inspector (.inspector)",
    android: "NavigationDrawer / SidePanel",
    slug: "inspector"
  },
  {
    nameEn: "Navigation Stack / Router",
    nameKo: "내비게이션 스택 (화면 전환)",
    ios: "NavigationStack (UINavigationController)",
    android: "NavHost / FragmentManager",
    slug: "navigation"
  },
  {
    nameEn: "Don't Show Again Checkbox",
    nameKo: "다시 보지 않기 체크박스",
    ios: "DialogSuppressionToggle (.dialogSuppressionToggle)",
    android: "Checkbox in AlertDialog",
    slug: "checkbox"
  },
  {
    nameEn: "Gauge / Level Indicator",
    nameKo: "게이지 / 레벨 표시기",
    ios: "Gauge (Gauge)",
    android: "LinearProgressIndicator / CircularProgressIndicator",
    slug: "level-indicator"
  },
  {
    nameEn: "Help Button / Link",
    nameKo: "도움말 버튼 / 링크",
    ios: "HelpLink (.help)",
    android: "IconButton / Tooltip",
    slug: "help"
  },
  {
    nameEn: "List",
    nameKo: "리스트 / 목록",
    ios: "List (UITableView)",
    android: "LazyColumn (RecyclerView)",
    slug: "list"
  },
  {
    nameEn: "Menu",
    nameKo: "메뉴",
    ios: "Menu (UIMenu)",
    android: "DropdownMenu (Menu)",
    slug: "menu"
  },
  {
    nameEn: "Menu Bar Extra / Status Item",
    nameKo: "메뉴 바 익스트라 (상태 아이콘)",
    ios: "MenuBarExtra (NSStatusItem)",
    android: "Foreground Service Notification",
    slug: "menu-bar-extra"
  },
  {
    nameEn: "Keyboard Shortcut",
    nameKo: "키보드 단축키",
    ios: "KeyboardShortcut (.keyboardShortcut)",
    android: "KeyInputModifier",
    slug: "shortcut"
  },
  {
    nameEn: "Menu Separator / Divider",
    nameKo: "메뉴 구분선",
    ios: "Divider (Divider)",
    android: "HorizontalDivider (Divider)",
    slug: "divider"
  },
  {
    nameEn: "Multi-window Scene",
    nameKo: "다중 윈도우 씬",
    ios: "WindowGroup (WindowGroup)",
    android: "Multi-Window Activity",
    slug: "window"
  },
  {
    nameEn: "Navigation Split View / Sidebar",
    nameKo: "내비게이션 분할 뷰 / 사이드바",
    ios: "NavigationSplitView (UISplitViewController)",
    android: "NavigationRail / ModalNavigationDrawer",
    slug: "split-view"
  },
  {
    nameEn: "File Open / Import Panel",
    nameKo: "파일 열기 / 가져오기 패널",
    ios: "FileImporter (.fileImporter / UIDocumentPickerViewController)",
    android: "ActivityResultContracts.GetContent",
    slug: "save-panel"
  },
  {
    nameEn: "Outline / Source List",
    nameKo: "아웃라인 / 소스 리스트",
    ios: "OutlineGroup / List",
    android: "LazyColumn with indentation",
    slug: "outline-view"
  },
  {
    nameEn: "Palette Picker",
    nameKo: "팔레트 선택기",
    ios: "Picker (.pickerStyle(.palette))",
    android: "SingleChoiceSegmentedButtonRow",
    slug: "segmented-control"
  },
  {
    nameEn: "Paste Button",
    nameKo: "붙여넣기 버튼",
    ios: "PasteButton (PasteButton)",
    android: "Button (ClipboardManager)",
    slug: "button"
  },
  {
    nameEn: "Pop-up Button / Dropdown",
    nameKo: "팝업 버튼 / 드롭다운 선택기",
    ios: "Picker (.pickerStyle(.menu))",
    android: "ExposedDropdownMenuBox",
    slug: "popup-pulldown-combo"
  },
  {
    nameEn: "Popover",
    nameKo: "팝오버 (말풍선 패널)",
    ios: "Popover (.popover / UIPopoverPresentationController)",
    android: "Popup / PopupWindow",
    slug: "popover"
  },
  {
    nameEn: "Progress Indicator / Spinner",
    nameKo: "진행 표시줄 / 로딩 스피너",
    ios: "ProgressView (UIActivityIndicatorView)",
    android: "CircularProgressIndicator / LinearProgressIndicator",
    slug: "progress-indicators"
  },
  {
    nameEn: "Pull-down Button",
    nameKo: "풀다운 버튼",
    ios: "Menu (.menuStyle(.button))",
    android: "DropdownMenu / OverflowMenu",
    slug: "popup-pulldown-combo"
  },
  {
    nameEn: "Radio Group",
    nameKo: "라디오 버튼 그룹",
    ios: "Picker (.pickerStyle(.radioGroup))",
    android: "RadioButton / RadioGroup",
    slug: "switch-checkbox-radio"
  },
  {
    nameEn: "Rename Action",
    nameKo: "이름 변경 버튼 / 액션",
    ios: "RenameButton (RenameButton)",
    android: "OutlinedTextField in Dialog",
    slug: "button"
  },
  {
    nameEn: "Resizable Split View",
    nameKo: "크기 조절 스플릿 뷰",
    ios: "HSplitView / VSplitView",
    android: "Custom Resizable Split Layout",
    slug: "split-view"
  },
  {
    nameEn: "File Save / Export Panel",
    nameKo: "파일 저장 / 내보내기 패널",
    ios: "FileExporter (.fileExporter / UIDocumentPickerViewController)",
    android: "ActivityResultContracts.CreateDocument",
    slug: "save-panel"
  },
  {
    nameEn: "Search Field / Search Bar",
    nameKo: "검색 필드 / 검색 바",
    ios: "Searchable (.searchable / UISearchController)",
    android: "SearchBar / DockedSearchBar",
    slug: "search-field"
  },
  {
    nameEn: "Segmented Control",
    nameKo: "세그먼트 컨트롤",
    ios: "Picker (.pickerStyle(.segmented) / UISegmentedControl)",
    android: "SegmentedButton / SingleChoiceSegmentedButtonRow",
    slug: "segmented-control"
  },
  {
    nameEn: "Settings Window",
    nameKo: "설정 창",
    ios: "Settings (Settings Scene)",
    android: "PreferenceScreen / SettingsActivity",
    slug: "window"
  },
  {
    nameEn: "Share Button / Share Link",
    nameKo: "공유 버튼 / 공유 링크",
    ios: "ShareLink (UIActivityViewController)",
    android: "Intent.ACTION_SEND (ShareSheet)",
    slug: "button"
  },
  {
    nameEn: "Sheet Modal",
    nameKo: "시트 모달 패널",
    ios: "Sheet (.sheet / UISheetPresentationController)",
    android: "ModalBottomSheet",
    slug: "sheet"
  },
  {
    nameEn: "Sidebar Toggle",
    nameKo: "사이드바 토글 버튼",
    ios: "SidebarCommands / ToolbarItem",
    android: "IconButton (DrawerState)",
    slug: "sidebar"
  },
  {
    nameEn: "Slider",
    nameKo: "슬라이더",
    ios: "Slider (UISlider)",
    android: "Slider (Slider)",
    slug: "slider"
  },
  {
    nameEn: "Stepper",
    nameKo: "스텝퍼 (증감기)",
    ios: "Stepper (UIStepper)",
    android: "NumberPicker / OutlinedIconButton Stepper",
    slug: "stepper"
  },
  {
    nameEn: "Switch / Toggle",
    nameKo: "스위치 / 토글",
    ios: "Toggle (.toggleStyle(.switch) / UISwitch)",
    android: "Switch (Switch)",
    slug: "switch-checkbox-radio"
  },
  {
    nameEn: "Tabs / Tab Bar",
    nameKo: "탭 / 탭 바",
    ios: "TabView (UITabBarController)",
    android: "TabRow / PrimaryTabRow",
    slug: "tabs"
  },
  {
    nameEn: "Table / Data Table",
    nameKo: "테이블 / 데이터 표",
    ios: "Table (UITableView)",
    android: "DataTable / LazyColumn",
    slug: "table"
  },
  {
    nameEn: "Toast / Snackbar",
    nameKo: "토스트 / 스낵바",
    ios: "Banner Overlay / Custom View",
    android: "Snackbar / Toast",
    slug: "toast"
  },
  {
    nameEn: "Toolbar",
    nameKo: "툴바 (상단 도구 모음)",
    ios: "Toolbar (.toolbar / UIToolbar)",
    android: "TopAppBar / BottomAppBar",
    slug: "toolbar"
  },
  {
    nameEn: "Tooltip",
    nameKo: "툴팁 (도움말 팝업)",
    ios: "HelpLink (.help)",
    android: "PlainTooltip / RichTooltip",
    slug: "popover-dropdown-tooltip"
  },
  {
    nameEn: "Web Link / Hyperlink",
    nameKo: "웹 링크 / 하이퍼링크",
    ios: "Link (Link)",
    android: "ClickableText / AnnotatedString Link",
    slug: "button"
  },
  {
    nameEn: "Breadcrumbs",
    nameKo: "브레드크럼 (경로 표시)",
    ios: "NavigationPath Bar",
    android: "Custom Breadcrumb Row",
    slug: "breadcrumbs"
  },
  {
    nameEn: "Badge / Chip / Pill",
    nameKo: "배지 / 칩 / 필",
    ios: "Badge (.badge)",
    android: "Badge / FilterChip / InputChip / AssistChip",
    slug: "badge-chip-pill"
  },
  {
    nameEn: "Floating Action Button (FAB)",
    nameKo: "플로팅 액션 버튼 (FAB)",
    ios: "Overlay Button / ToolbarItem",
    android: "FloatingActionButton (FAB / ExtendedFAB)",
    slug: "button"
  },
  {
    nameEn: "Combobox / Autocomplete",
    nameKo: "콤보박스 / 자동완성",
    ios: "Menu / Picker",
    android: "ExposedDropdownMenuBox",
    slug: "combobox"
  },
  {
    nameEn: "Command Palette",
    nameKo: "커맨드 팔레트",
    ios: "CommandPalette / Searchable",
    android: "SearchBar Modal",
    slug: "command-palette"
  },
  {
    nameEn: "Empty State",
    nameKo: "빈 상태 화면",
    ios: "ContentUnavailableView",
    android: "Custom Empty State View",
    slug: "empty-state"
  },
  {
    nameEn: "Hover Card",
    nameKo: "호버 카드",
    ios: "Popover (.popover)",
    android: "Popup / TooltipBox",
    slug: "hover-card"
  },
  {
    nameEn: "Skeleton Loader",
    nameKo: "스켈레톤 로더",
    ios: "Redacted (.redacted(reason: .placeholder))",
    android: "Skeleton Shimmer Effect / Placeholder",
    slug: "skeleton-spinner"
  },
  {
    nameEn: "Toggle Group",
    nameKo: "토글 버튼 그룹",
    ios: "Picker (.pickerStyle(.segmented))",
    android: "SingleChoiceSegmentedButtonRow / MultiChoiceSegmentedButtonRow",
    slug: "toggle-group"
  }
];
