const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const caret = document.getElementById('custom-caret');
const measureText = document.getElementById('measure-text');
const measureChar = document.getElementById('measure-char');
const ghostText = document.getElementById('ghost-text');
const ghostTyped = document.getElementById('ghost-typed');
const ghostSuffix = document.getElementById('ghost-suffix');

// Элементы кнопок и модального окна
const btnFullscreen = document.getElementById('btn-fullscreen');
const iconFsEnter = document.getElementById('icon-fs-enter');
const iconFsExit = document.getElementById('icon-fs-exit');
const btnSettings = document.getElementById('btn-settings');
const settingsModal = document.getElementById('settings-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalSettingsTitle = document.getElementById('modal-settings-title');
const modalActiveTabTitle = document.getElementById('modal-active-tab-title');

const tabHistoryBtn = document.getElementById('tab-history-btn');
const tabEngineBtn = document.getElementById('tab-engine-btn');
const tabAliasBtn = document.getElementById('tab-alias-btn');
const tabShortcutsBtn = document.getElementById('tab-shortcuts-btn');
const tabThemeBtn = document.getElementById('tab-theme-btn');
const tabLangBtn = document.getElementById('tab-lang-btn');

const tabHistoryContent = document.getElementById('tab-history-content');
const tabEngineContent = document.getElementById('tab-engine-content');
const tabAliasContent = document.getElementById('tab-alias-content');
const tabShortcutsContent = document.getElementById('tab-shortcuts-content');
const tabThemeContent = document.getElementById('tab-theme-content');
const tabLangContent = document.getElementById('tab-lang-content');

const engineTitle = document.getElementById('engine-title');
const engineOptions = document.getElementById('engine-options');
const btnResetEngine = document.getElementById('btn-reset-engine');

const chkShortcutHints = document.getElementById('chk-shortcut-hints');
const labelShortcutHints = document.getElementById('label-shortcut-hints');
const shortcutsList = document.getElementById('shortcuts-list');
const btnResetShortcuts = document.getElementById('btn-reset-shortcuts');

const historyList = document.getElementById('history-list');
const historyCount = document.getElementById('history-count');
const btnClearHistory = document.getElementById('btn-clear-history');

const aliasForm = document.getElementById('alias-form');
const aliasKeyInput = document.getElementById('alias-key-input');
const aliasUrlInput = document.getElementById('alias-url-input');
const aliasSubmitBtn = document.getElementById('alias-submit-btn');
const aliasList = document.getElementById('alias-list');

const bgPresets = document.getElementById('bg-presets');
const textPresets = document.getElementById('text-presets');
const pickerBg = document.getElementById('picker-bg');
const pickerText = document.getElementById('picker-text');
const btnResetTheme = document.getElementById('btn-reset-theme');
const themeBgLabel = document.getElementById('theme-bg-label');
const themeTextLabel = document.getElementById('theme-text-label');
const customBgText = document.getElementById('custom-bg-text');
const customTextText = document.getElementById('custom-text-text');
const langTitle = document.getElementById('lang-title');

// Элементы боковой панели закладок
const sidebarTrigger = document.getElementById('sidebar-trigger');
const ideaSidebar = document.getElementById('idea-sidebar');
const ideaBtnCollapse = document.getElementById('idea-btn-collapse');
const ideaBtnExpand = document.getElementById('idea-btn-expand');
const ideaBtnPin = document.getElementById('idea-btn-pin');
const ideaViewBookmarks = document.getElementById('idea-view-bookmarks');
const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');

// ==========================================
// 1. Интернационализация (i18n: EN, UZ, RU)
// ==========================================
const LANG_KEY = 'app_lang';

const translations = {
    en: {
        title: "New Tab",
        placeholder: "Search in Google...",
        searchIn: "Search in %s...",
        fullscreen: "Fullscreen mode",
        settings: "Settings",
        close: "Close",
        settingsTitle: "Settings",
        tabHistory: "History",
        tabEngine: "Search Engine",
        tabAlias: "Quick Search",
        tabShortcuts: "Shortcuts",
        tabTheme: "Theme & Colors",
        tabLang: "Language",
        engineTitle: "Select search engine:",
        engineReset: "Reset to Google",
        shortcutsReset: "Reset to default shortcuts",
        shortcutHintsLabel: "Show shortcut hints on buttons",
        shortcutOpenSettings: "Open / Close Settings",
        shortcutToggleSidebar: "Open / Close Bookmarks Sidebar",
        shortcutSwitchTabs: "Switch tabs in Settings",
        shortcutFullscreen: "Fullscreen mode",
        shortcutCollapseBookmarks: "Collapse all bookmarks",
        shortcutExpandBookmarks: "Expand all bookmarks",
        shortcutPinSidebar: "Pin / Unpin sidebar",
        shortcutPressKeys: "Press keys...",
        shortcutNotSet: "Not set",
        shortcutClearHint: "Click to record shortcut. Backspace to clear.",
        historyTotal: "Total records: ",
        historyClearAll: "Clear all",
        historyEmpty: "Search history is empty",
        historyUseTooltip: "Use for search",
        historyDeleteTooltip: "Delete from history",
        aliasDesc: "Create shortcuts for quick navigation. For example: <strong>l3000</strong> → <strong>localhost:3000</strong> or <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "Shortcut (e.g. l3000)",
        aliasUrlPlaceholder: "Address (e.g. localhost:3000)",
        aliasAddBtn: "Add",
        aliasEmpty: "No shortcuts created",
        aliasDeleteTooltip: "Delete shortcut",
        themeBgLabel: "Page background color:",
        themeTextLabel: "Text & cursor color:",
        themeCustom: "Custom",
        themeReset: "Reset to default colors",
        sidebarPosLabel: "Sidebar position:",
        posLeft: "Left",
        posRight: "Right",
        langTitle: "Select interface language:",
        sidebarBookmarks: "Bookmarks",
        sidebarTabs: "Open Tabs",
        sidebarSearchBookmarks: "Search bookmarks...",
        sidebarSearchTabs: "Search open tabs...",
        sidebarEmptyBookmarks: "No bookmarks found",
        sidebarEmptyTabs: "No open tabs found",
        sidebarPin: "Pin sidebar",
        sidebarUnpin: "Unpin sidebar",
        sidebarCollapseAll: "Collapse all",
        sidebarExpandAll: "Expand all",
        sidebarCloseTab: "Close tab",
        sidebarDeleteBookmark: "Delete bookmark",
        sidebarOpenNewTab: "Open in new tab",
        sidebarActiveTab: "Active",
        sidebarToggleBtn: "Bookmarks & Tabs (Alt+B)",
        sidebarConfirmDelete: "Delete bookmark \"%s\"?"
    },
    uz: {
        title: "Yangi varaq",
        placeholder: "Google'da qidirish...",
        searchIn: "%s'da qidirish...",
        fullscreen: "To'liq ekran rejimi",
        settings: "Sozlamalar",
        close: "Yopish",
        settingsTitle: "Sozlamalar",
        tabHistory: "Qidiruv tarixi",
        tabEngine: "Qidiruv tizimi",
        tabAlias: "Tezkor qidiruv",
        tabShortcuts: "Tugmalar",
        tabTheme: "Mavzu va ranglar",
        tabLang: "Til",
        engineTitle: "Qidiruv tizimini tanlang:",
        engineReset: "Google'ga qaytarish",
        shortcutsReset: "Standart tugmalarga qaytarish",
        shortcutHintsLabel: "Tugmalarda klaviatura yorliqlarini ko'rsatish",
        shortcutOpenSettings: "Sozlamalarni ochish / yopish",
        shortcutToggleSidebar: "Xatcho'plar panelini ochish / yopish",
        shortcutSwitchTabs: "Sozlamalarda varaqlarni almashtirish",
        shortcutFullscreen: "To'liq ekran rejimi",
        shortcutCollapseBookmarks: "Barcha xatcho'plarni yig'ish",
        shortcutExpandBookmarks: "Barcha xatcho'plarni yoyish",
        shortcutPinSidebar: "Yon panelni qadash / yechish",
        shortcutPressKeys: "Tugmalarni bosing...",
        shortcutNotSet: "O'rnatilmagan",
        shortcutClearHint: "Tugmani o'rnatish uchun bosing. O'chirish uchun Backspace.",
        historyTotal: "Jami yozuvlar: ",
        historyClearAll: "Barchasini tozalash",
        historyEmpty: "Qidiruv tarixi bo'sh",
        historyUseTooltip: "Qidirish uchun ishlatish",
        historyDeleteTooltip: "Tarixdan o'chirish",
        aliasDesc: "Tezkor o'tish uchun o'zgaruvchilar yarating. Masalan: <strong>l3000</strong> → <strong>localhost:3000</strong> yoki <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "Qisqartma (masalan l3000)",
        aliasUrlPlaceholder: "Manzil (masalan localhost:3000)",
        aliasAddBtn: "Qo'shish",
        aliasEmpty: "Yaratilgan o'zgaruvchilar yo'q",
        aliasDeleteTooltip: "Qisqartmani o'chirish",
        themeBgLabel: "Sahifa fon rangi:",
        themeTextLabel: "Matn va kursor rangi:",
        themeCustom: "Boshqa",
        themeReset: "Standart ranglarga qaytarish",
        sidebarPosLabel: "Yon panel joylashuvi:",
        posLeft: "Chap",
        posRight: "O'ng",
        langTitle: "Interfeys tilini tanlang:",
        sidebarBookmarks: "Xatcho'plar",
        sidebarTabs: "Ochiq varaqlar",
        sidebarSearchBookmarks: "Xatcho'plarni qidirish...",
        sidebarSearchTabs: "Ochiq varaqlarni qidirish...",
        sidebarEmptyBookmarks: "Xatcho'plar topilmadi",
        sidebarEmptyTabs: "Ochiq varaqlar topilmadi",
        sidebarPin: "Yon panelni qadash",
        sidebarUnpin: "Qadashni bekor qilish",
        sidebarCollapseAll: "Barchasini yig'ish",
        sidebarExpandAll: "Barchasini yoyish",
        sidebarCloseTab: "Varaqni yopish",
        sidebarDeleteBookmark: "Xatcho'pni o'chirish",
        sidebarOpenNewTab: "Yangi varaqda ochish",
        sidebarActiveTab: "Faol",
        sidebarToggleBtn: "Xatcho'plar va Varaqlar (Alt+B)",
        sidebarConfirmDelete: "\"%s\" xatcho'pini o'chirishni xohlaysizmi?"
    },
    ru: {
        title: "Новая вкладка",
        placeholder: "Поиск в Google...",
        searchIn: "Поиск в %s...",
        fullscreen: "Полноэкранный режим",
        settings: "Настройки",
        close: "Закрыть",
        settingsTitle: "Настройки",
        tabHistory: "История поиска",
        tabEngine: "Поисковик",
        tabAlias: "Быстрый поиск",
        tabShortcuts: "Горячие клавиши",
        tabTheme: "Цвета и тема",
        tabLang: "Язык",
        engineTitle: "Выберите поисковую систему:",
        engineReset: "Сбросить на Google",
        shortcutsReset: "Сбросить горячие клавиши",
        shortcutHintsLabel: "Показывать подсказки клавиш на кнопках",
        shortcutOpenSettings: "Открыть / закрыть настройки",
        shortcutToggleSidebar: "Открыть / закрыть панель закладок",
        shortcutSwitchTabs: "Переключение вкладок в настройках",
        shortcutFullscreen: "Полноэкранный режим",
        shortcutCollapseBookmarks: "Свернуть все закладки",
        shortcutExpandBookmarks: "Развернуть все закладки",
        shortcutPinSidebar: "Закрепить / открепить панель",
        shortcutPressKeys: "Нажмите клавиши...",
        shortcutNotSet: "Не задано",
        shortcutClearHint: "Нажмите для изменения. Нажмите Backspace для очистки.",
        historyTotal: "Всего записей: ",
        historyClearAll: "Очистить всё",
        historyEmpty: "История поиска пуста",
        historyUseTooltip: "Использовать для поиска",
        historyDeleteTooltip: "Удалить из истории",
        aliasDesc: "Создавайте переменные для быстрого перехода. Например: <strong>l3000</strong> → <strong>localhost:3000</strong> или <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "Сокращение (напр. l3000)",
        aliasUrlPlaceholder: "Адрес (напр. localhost:3000)",
        aliasAddBtn: "Добавить",
        aliasEmpty: "Нет созданных переменных",
        aliasDeleteTooltip: "Удалить переменную",
        themeBgLabel: "Цвет фона страницы:",
        themeTextLabel: "Цвет текста и курсора:",
        themeCustom: "Свой",
        themeReset: "Сбросить цвета по умолчанию",
        sidebarPosLabel: "Расположение панели:",
        posLeft: "Слева",
        posRight: "Справа",
        langTitle: "Выберите язык интерфейса:",
        sidebarBookmarks: "Закладки",
        sidebarTabs: "Вкладки",
        sidebarSearchBookmarks: "Поиск закладок...",
        sidebarSearchTabs: "Поиск открытых вкладок...",
        sidebarEmptyBookmarks: "Закладки не найдены",
        sidebarEmptyTabs: "Открытые вкладки не найдены",
        sidebarPin: "Закрепить панель",
        sidebarUnpin: "Открепить панель",
        sidebarCollapseAll: "Свернуть все",
        sidebarExpandAll: "Развернуть все",
        sidebarCloseTab: "Закрыть вкладку",
        sidebarDeleteBookmark: "Удалить закладку",
        sidebarOpenNewTab: "Открыть в новой вкладке",
        sidebarActiveTab: "Текущая",
        sidebarToggleBtn: "Закладки и Вкладки (Alt+B)",
        sidebarConfirmDelete: "Удалить закладку \"%s\"?"
    },
    es: {
        title: "Nueva pestaña",
        placeholder: "Buscar en Google...",
        searchIn: "Buscar en %s...",
        fullscreen: "Modo pantalla completa",
        settings: "Ajustes",
        close: "Cerrar",
        settingsTitle: "Ajustes",
        tabHistory: "Historial",
        tabEngine: "Motor de búsqueda",
        tabAlias: "Búsqueda rápida",
        tabShortcuts: "Atajos",
        tabTheme: "Tema y colores",
        tabLang: "Idioma",
        engineTitle: "Selecciona el motor de búsqueda:",
        engineReset: "Restablecer a Google",
        shortcutsReset: "Restablecer atajos predeterminados",
        shortcutHintsLabel: "Mostrar pistas de atajos en los botones",
        shortcutOpenSettings: "Abrir / Cerrar Ajustes",
        shortcutToggleSidebar: "Abrir / Cerrar Marcadores",
        shortcutSwitchTabs: "Cambiar pestañas en Ajustes",
        shortcutFullscreen: "Modo pantalla completa",
        shortcutCollapseBookmarks: "Contraer todos los marcadores",
        shortcutExpandBookmarks: "Expandir todos los marcadores",
        shortcutPinSidebar: "Fijar / Desfijar barra lateral",
        shortcutPressKeys: "Presiona las teclas...",
        shortcutNotSet: "No asignado",
        shortcutClearHint: "Haz clic para grabar. Retroceso para borrar.",
        historyTotal: "Total de registros: ",
        historyClearAll: "Borrar todo",
        historyEmpty: "El historial de búsqueda está vacío",
        historyUseTooltip: "Usar para buscar",
        historyDeleteTooltip: "Eliminar del historial",
        aliasDesc: "Crea atajos para una navegación rápida. Por ejemplo: <strong>l3000</strong> → <strong>localhost:3000</strong> o <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "Atajo (ej. l3000)",
        aliasUrlPlaceholder: "Dirección (ej. localhost:3000)",
        aliasAddBtn: "Añadir",
        aliasEmpty: "No hay atajos creados",
        aliasDeleteTooltip: "Eliminar atajo",
        themeBgLabel: "Color de fondo de página:",
        themeTextLabel: "Color de texto y cursor:",
        themeCustom: "Personalizado",
        themeReset: "Restablecer colores predeterminados",
        sidebarPosLabel: "Posición de la barra lateral:",
        posLeft: "Izquierda",
        posRight: "Derecha",
        langTitle: "Selecciona el idioma de la interfaz:",
        sidebarBookmarks: "Marcadores",
        sidebarTabs: "Pestañas abiertas",
        sidebarSearchBookmarks: "Buscar marcadores...",
        sidebarSearchTabs: "Buscar pestañas...",
        sidebarEmptyBookmarks: "No se encontraron marcadores",
        sidebarEmptyTabs: "No hay pestañas abiertas",
        sidebarPin: "Fijar barra lateral",
        sidebarUnpin: "Desfijar barra lateral",
        sidebarCollapseAll: "Contraer todo",
        sidebarExpandAll: "Expandir todo",
        sidebarCloseTab: "Cerrar pestaña",
        sidebarDeleteBookmark: "Eliminar marcador",
        sidebarOpenNewTab: "Abrir en nueva pestaña",
        sidebarActiveTab: "Activa",
        sidebarToggleBtn: "Marcadores y Pestañas (Alt+B)",
        sidebarConfirmDelete: "¿Eliminar el marcador \"%s\"?"
    },
    pt: {
        title: "Novo separador",
        placeholder: "Pesquisar no Google...",
        searchIn: "Pesquisar no %s...",
        fullscreen: "Modo de ecrã inteiro",
        settings: "Definições",
        close: "Fechar",
        settingsTitle: "Definições",
        tabHistory: "Histórico",
        tabEngine: "Motor de busca",
        tabAlias: "Pesquisa rápida",
        tabShortcuts: "Atalhos",
        tabTheme: "Tema e cores",
        tabLang: "Idioma",
        engineTitle: "Selecionar motor de busca:",
        engineReset: "Repor para o Google",
        shortcutsReset: "Repor atalhos predefinidos",
        shortcutHintsLabel: "Mostrar dicas de atalhos nos botões",
        shortcutOpenSettings: "Abrir / Fechar Definições",
        shortcutToggleSidebar: "Abrir / Fechar Marcadores",
        shortcutSwitchTabs: "Mudar de separador nas Definições",
        shortcutFullscreen: "Modo de ecrã inteiro",
        shortcutCollapseBookmarks: "Recolher todos os marcadores",
        shortcutExpandBookmarks: "Expandir todos os marcadores",
        shortcutPinSidebar: "Fixar / Desafixar barra lateral",
        shortcutPressKeys: "Prima as teclas...",
        shortcutNotSet: "Não definido",
        shortcutClearHint: "Clique para gravar. Backspace para limpar.",
        historyTotal: "Total de registos: ",
        historyClearAll: "Limpar tudo",
        historyEmpty: "O histórico de pesquisa está vazio",
        historyUseTooltip: "Usar para pesquisar",
        historyDeleteTooltip: "Eliminar do histórico",
        aliasDesc: "Crie atalhos para navegação rápida. Por exemplo: <strong>l3000</strong> → <strong>localhost:3000</strong> ou <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "Atalho (ex. l3000)",
        aliasUrlPlaceholder: "Endereço (ex. localhost:3000)",
        aliasAddBtn: "Adicionar",
        aliasEmpty: "Nenhum atalho criado",
        aliasDeleteTooltip: "Eliminar atalho",
        themeBgLabel: "Cor de fundo da página:",
        themeTextLabel: "Cor do texto e cursor:",
        themeCustom: "Personalizado",
        themeReset: "Repor cores predefinidas",
        sidebarPosLabel: "Posição da barra lateral:",
        posLeft: "Esquerda",
        posRight: "Direita",
        langTitle: "Selecionar idioma da interface:",
        sidebarBookmarks: "Marcadores",
        sidebarTabs: "Separadores abertos",
        sidebarSearchBookmarks: "Pesquisar marcadores...",
        sidebarSearchTabs: "Pesquisar separadores...",
        sidebarEmptyBookmarks: "Nenhum marcador encontrado",
        sidebarEmptyTabs: "Nenhum separador aberto",
        sidebarPin: "Fixar barra lateral",
        sidebarUnpin: "Desafixar barra lateral",
        sidebarCollapseAll: "Recolher tudo",
        sidebarExpandAll: "Expandir tudo",
        sidebarCloseTab: "Fechar separador",
        sidebarDeleteBookmark: "Eliminar marcador",
        sidebarOpenNewTab: "Abrir num novo separador",
        sidebarActiveTab: "Ativo",
        sidebarToggleBtn: "Marcadores e Separadores (Alt+B)",
        sidebarConfirmDelete: "Eliminar o marcador \"%s\"?"
    },
    de: {
        title: "Neuer Tab",
        placeholder: "In Google suchen...",
        searchIn: "In %s suchen...",
        fullscreen: "Vollbildmodus",
        settings: "Einstellungen",
        close: "Schließen",
        settingsTitle: "Einstellungen",
        tabHistory: "Verlauf",
        tabEngine: "Suchmaschine",
        tabAlias: "Schnellsuche",
        tabShortcuts: "Tastenkombinationen",
        tabTheme: "Design & Farben",
        tabLang: "Sprache",
        engineTitle: "Suchmaschine auswählen:",
        engineReset: "Auf Google zurücksetzen",
        shortcutsReset: "Standard-Tastenkürzel wiederherstellen",
        shortcutHintsLabel: "Tastatur-Tipps auf Schaltflächen anzeigen",
        shortcutOpenSettings: "Einstellungen öffnen / schließen",
        shortcutToggleSidebar: "Lesezeichen-Leiste öffnen / schließen",
        shortcutSwitchTabs: "Tabs in den Einstellungen wechseln",
        shortcutFullscreen: "Vollbildmodus",
        shortcutCollapseBookmarks: "Alle Lesezeichen einklappen",
        shortcutExpandBookmarks: "Alle Lesezeichen ausklappen",
        shortcutPinSidebar: "Seitenleiste anheften / lösen",
        shortcutPressKeys: "Tasten drücken...",
        shortcutNotSet: "Nicht festgelegt",
        shortcutClearHint: "Klicken zum Aufnehmen. Rücktaste zum Löschen.",
        historyTotal: "Einträge insgesamt: ",
        historyClearAll: "Alles löschen",
        historyEmpty: "Suchverlauf ist leer",
        historyUseTooltip: "Für die Suche verwenden",
        historyDeleteTooltip: "Aus dem Verlauf löschen",
        aliasDesc: "Erstellen Sie Kürzel für die schnelle Navigation. Zum Beispiel: <strong>l3000</strong> → <strong>localhost:3000</strong> oder <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "Kürzel (z. B. l3000)",
        aliasUrlPlaceholder: "Adresse (z. B. localhost:3000)",
        aliasAddBtn: "Hinzufügen",
        aliasEmpty: "Keine Kürzel erstellt",
        aliasDeleteTooltip: "Kürzel löschen",
        themeBgLabel: "Seitenhintergrundfarbe:",
        themeTextLabel: "Text- & Cursorfarbe:",
        themeCustom: "Benutzerdefiniert",
        themeReset: "Auf Standardfarben zurücksetzen",
        sidebarPosLabel: "Position der Seitenleiste:",
        posLeft: "Links",
        posRight: "Rechts",
        langTitle: "Oberflächensprache wählen:",
        sidebarBookmarks: "Lesezeichen",
        sidebarTabs: "Offene Tabs",
        sidebarSearchBookmarks: "Lesezeichen suchen...",
        sidebarSearchTabs: "Offene Tabs suchen...",
        sidebarEmptyBookmarks: "Keine Lesezeichen gefunden",
        sidebarEmptyTabs: "Keine offenen Tabs gefunden",
        sidebarPin: "Seitenleiste anheften",
        sidebarUnpin: "Seitenleiste lösen",
        sidebarCollapseAll: "Alle einklappen",
        sidebarExpandAll: "Alle ausklappen",
        sidebarCloseTab: "Tab schließen",
        sidebarDeleteBookmark: "Lesezeichen löschen",
        sidebarOpenNewTab: "In neuem Tab öffnen",
        sidebarActiveTab: "Aktiv",
        sidebarToggleBtn: "Lesezeichen & Tabs (Alt+B)",
        sidebarConfirmDelete: "Lesezeichen \"%s\" wirklich löschen?"
    },
    zh: {
        title: "新标签页",
        placeholder: "在 Google 中搜索...",
        searchIn: "在 %s 中搜索...",
        fullscreen: "全屏模式",
        settings: "设置",
        close: "关闭",
        settingsTitle: "设置",
        tabHistory: "历史记录",
        tabEngine: "搜索引擎",
        tabAlias: "快捷搜索",
        tabShortcuts: "快捷键",
        tabTheme: "主题与配色",
        tabLang: "语言",
        engineTitle: "选择搜索引擎：",
        engineReset: "重置为 Google",
        shortcutsReset: "重置为默认快捷键",
        shortcutHintsLabel: "在按钮上显示快捷键提示",
        shortcutOpenSettings: "打开 / 关闭设置",
        shortcutToggleSidebar: "打开 / 关闭书签侧边栏",
        shortcutSwitchTabs: "在设置中切换标签页",
        shortcutFullscreen: "全屏模式",
        shortcutCollapseBookmarks: "折叠所有书签",
        shortcutExpandBookmarks: "展开所有书签",
        shortcutPinSidebar: "固定 / 取消固定侧边栏",
        shortcutPressKeys: "按下按键...",
        shortcutNotSet: "未设置",
        shortcutClearHint: "点击开始录制。按退格键清除。",
        historyTotal: "记录总数：",
        historyClearAll: "清除全部",
        historyEmpty: "搜索历史为空",
        historyUseTooltip: "用于搜索",
        historyDeleteTooltip: "从历史中删除",
        aliasDesc: "创建快速导航缩写。例如：<strong>l3000</strong> → <strong>localhost:3000</strong> 或 <strong>ap.c</strong> → <strong>apple.com</strong>。",
        aliasKeyPlaceholder: "缩写（如 l3000）",
        aliasUrlPlaceholder: "网址（如 localhost:3000）",
        aliasAddBtn: "添加",
        aliasEmpty: "未创建快捷方式",
        aliasDeleteTooltip: "删除快捷方式",
        themeBgLabel: "页面背景颜色：",
        themeTextLabel: "文字与光标颜色：",
        themeCustom: "自定义",
        themeReset: "恢复默认颜色",
        sidebarPosLabel: "侧边栏位置：",
        posLeft: "靠左",
        posRight: "靠右",
        langTitle: "选择界面语言：",
        sidebarBookmarks: "书签",
        sidebarTabs: "打开的标签页",
        sidebarSearchBookmarks: "搜索书签...",
        sidebarSearchTabs: "搜索打开的标签页...",
        sidebarEmptyBookmarks: "未找到书签",
        sidebarEmptyTabs: "没有打开的标签页",
        sidebarPin: "固定侧边栏",
        sidebarUnpin: "取消固定侧边栏",
        sidebarCollapseAll: "全部折叠",
        sidebarExpandAll: "全部展开",
        sidebarCloseTab: "关闭标签页",
        sidebarDeleteBookmark: "删除书签",
        sidebarOpenNewTab: "在新标签页中打开",
        sidebarActiveTab: "当前",
        sidebarToggleBtn: "书签与标签页 (Alt+B)",
        sidebarConfirmDelete: "确定删除书签 \"%s\" 吗？"
    },
    ja: {
        title: "新しいタブ",
        placeholder: "Google で検索...",
        searchIn: "%s で検索...",
        fullscreen: "全画面モード",
        settings: "設定",
        close: "閉じる",
        settingsTitle: "設定",
        tabHistory: "検索履歴",
        tabEngine: "検索エンジン",
        tabAlias: "クイック検索",
        tabShortcuts: "ショートカット",
        tabTheme: "テーマと色",
        tabLang: "言語",
        engineTitle: "検索エンジンの選択:",
        engineReset: "Google にリセット",
        shortcutsReset: "デフォルトのショートカットに戻す",
        shortcutHintsLabel: "ボタンにショートカットのヒントを表示",
        shortcutOpenSettings: "設定を開く / 閉じる",
        shortcutToggleSidebar: "ブックマークバーを開く / 閉じる",
        shortcutSwitchTabs: "設定のタブを切り替える",
        shortcutFullscreen: "全画面モード",
        shortcutCollapseBookmarks: "すべてのブックマークを折りたたむ",
        shortcutExpandBookmarks: "すべてのブックマークを展開",
        shortcutPinSidebar: "サイドバーを固定 / 固定解除",
        shortcutPressKeys: "キーを押してください...",
        shortcutNotSet: "未設定",
        shortcutClearHint: "クリックして記録。Backspace で消去。",
        historyTotal: "総履歴件数: ",
        historyClearAll: "すべて消去",
        historyEmpty: "検索履歴はありません",
        historyUseTooltip: "検索に使用",
        historyDeleteTooltip: "履歴から削除",
        aliasDesc: "素早いアクセスのためのショートカットを作成します。例: <strong>l3000</strong> → <strong>localhost:3000</strong> または <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "ショートカット（例: l3000）",
        aliasUrlPlaceholder: "アドレス（例: localhost:3000）",
        aliasAddBtn: "追加",
        aliasEmpty: "作成されたショートカットはありません",
        aliasDeleteTooltip: "ショートカットを削除",
        themeBgLabel: "ページの背景色:",
        themeTextLabel: "テキストとカーソルの色:",
        themeCustom: "カスタム",
        themeReset: "デフォルトの色に戻す",
        sidebarPosLabel: "サイドバーの位置:",
        posLeft: "左",
        posRight: "右",
        langTitle: "インターフェース言語の選択:",
        sidebarBookmarks: "ブックマーク",
        sidebarTabs: "開いているタブ",
        sidebarSearchBookmarks: "ブックマークを検索...",
        sidebarSearchTabs: "タブを検索...",
        sidebarEmptyBookmarks: "ブックマークが見つかりません",
        sidebarEmptyTabs: "開いているタブはありません",
        sidebarPin: "サイドバーを固定",
        sidebarUnpin: "サイドバーの固定を解除",
        sidebarCollapseAll: "すべて折りたたむ",
        sidebarExpandAll: "すべて展開",
        sidebarCloseTab: "タブを閉じる",
        sidebarDeleteBookmark: "ブックマークを削除",
        sidebarOpenNewTab: "新しいタブで開く",
        sidebarActiveTab: "アクティブ",
        sidebarToggleBtn: "ブックマークとタブ (Alt+B)",
        sidebarConfirmDelete: "ブックマーク「%s」を削除しますか？"
    },
    ko: {
        title: "새 탭",
        placeholder: "Google에서 검색...",
        searchIn: "%s에서 검색...",
        fullscreen: "전체 화면 모드",
        settings: "설정",
        close: "닫기",
        settingsTitle: "설정",
        tabHistory: "검색 기록",
        tabEngine: "검색엔진",
        tabAlias: "빠른 검색",
        tabShortcuts: "단축키",
        tabTheme: "테마 및 색상",
        tabLang: "언어",
        engineTitle: "검색엔진 선택:",
        engineReset: "Google로 초기화",
        shortcutsReset: "기본 단축키로 초기화",
        shortcutHintsLabel: "버튼에 단축키 힌트 표시",
        shortcutOpenSettings: "설정 열기 / 닫기",
        shortcutToggleSidebar: "북마크 사이드바 열기 / 닫기",
        shortcutSwitchTabs: "설정에서 탭 전환",
        shortcutFullscreen: "전체 화면 모드",
        shortcutCollapseBookmarks: "모든 북마크 접기",
        shortcutExpandBookmarks: "모든 북마크 펼치기",
        shortcutPinSidebar: "사이드바 고정 / 고정 해제",
        shortcutPressKeys: "키를 누르세요...",
        shortcutNotSet: "설정 안 됨",
        shortcutClearHint: "클릭하여 녹음. 백스페이스로 삭제.",
        historyTotal: "총 기록: ",
        historyClearAll: "모두 지우기",
        historyEmpty: "검색 기록이 비어 있습니다",
        historyUseTooltip: "검색에 사용",
        historyDeleteTooltip: "기록에서 삭제",
        aliasDesc: "빠른 탐색을 위한 바로가기를 만듭니다. 예: <strong>l3000</strong> → <strong>localhost:3000</strong> 또는 <strong>ap.c</strong> → <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "단축어 (예: l3000)",
        aliasUrlPlaceholder: "주소 (예: localhost:3000)",
        aliasAddBtn: "추가",
        aliasEmpty: "생성된 바로가기가 없습니다",
        aliasDeleteTooltip: "바로가기 삭제",
        themeBgLabel: "페이지 배경 색상:",
        themeTextLabel: "텍스트 및 커서 색상:",
        themeCustom: "사용자 지정",
        themeReset: "기본 색상으로 초기화",
        sidebarPosLabel: "사이드바 위치:",
        posLeft: "왼쪽",
        posRight: "오른쪽",
        langTitle: "인터페이스 언어 선택:",
        sidebarBookmarks: "북마크",
        sidebarTabs: "열린 탭",
        sidebarSearchBookmarks: "북마크 검색...",
        sidebarSearchTabs: "열린 탭 검색...",
        sidebarEmptyBookmarks: "북마크를 찾을 수 없습니다",
        sidebarEmptyTabs: "열린 탭이 없습니다",
        sidebarPin: "사이드바 고정",
        sidebarUnpin: "사이드바 고정 해제",
        sidebarCollapseAll: "모두 접기",
        sidebarExpandAll: "모두 펼치기",
        sidebarCloseTab: "탭 닫기",
        sidebarDeleteBookmark: "북마크 삭제",
        sidebarOpenNewTab: "새 탭에서 열기",
        sidebarActiveTab: "현재",
        sidebarToggleBtn: "북마크 및 탭 (Alt+B)",
        sidebarConfirmDelete: "\"%s\" 북마크를 삭제하시겠습니까?"
    },
    ar: {
        title: "علامة تبويب جديدة",
        placeholder: "البحث في Google...",
        searchIn: "البحث في %s...",
        fullscreen: "ملء الشاشة",
        settings: "الإعدادات",
        close: "إغلاق",
        settingsTitle: "الإعدادات",
        tabHistory: "السجل",
        tabEngine: "محرك البحث",
        tabAlias: "البحث السريع",
        tabShortcuts: "الاختصارات",
        tabTheme: "المظهر والألوان",
        tabLang: "اللغة",
        engineTitle: "اختر محرك البحث:",
        engineReset: "إعادة التعيين إلى Google",
        shortcutsReset: "استعادة الاختصارات الافتراضية",
        shortcutHintsLabel: "إظهار تلميحات الاختصارات على الأزرار",
        shortcutOpenSettings: "فتح / إغلاق الإعدادات",
        shortcutToggleSidebar: "فتح / إغلاق الشريط الجانبي للإشارات",
        shortcutSwitchTabs: "تبديل علامات التبويب في الإعدادات",
        shortcutFullscreen: "ملء الشاشة",
        shortcutCollapseBookmarks: "طي جميع الإشارات المرجعية",
        shortcutExpandBookmarks: "توسيع جميع الإشارات المرجعية",
        shortcutPinSidebar: "تثبيت / إلغاء تثبيت الشريط الجانبي",
        shortcutPressKeys: "اضغط على المفاتيح...",
        shortcutNotSet: "غير محدد",
        shortcutClearHint: "انقر للتسجيل. اضغط مفتاح Backspace للمسح.",
        historyTotal: "إجمالي السجلات: ",
        historyClearAll: "مسح الكل",
        historyEmpty: "سجل البحث فارغ",
        historyUseTooltip: "استخدام للبحث",
        historyDeleteTooltip: "حذف من السجل",
        aliasDesc: "أنشئ اختصارات للتنقل السريع. على سبيل المثال: <strong>l3000</strong> ← <strong>localhost:3000</strong> أو <strong>ap.c</strong> ← <strong>apple.com</strong>.",
        aliasKeyPlaceholder: "الاختصار (مثل l3000)",
        aliasUrlPlaceholder: "العنوان (مثل localhost:3000)",
        aliasAddBtn: "إضافة",
        aliasEmpty: "لم يتم إنشاء اختصارات",
        aliasDeleteTooltip: "حذف الاختصار",
        themeBgLabel: "لون خلفية الصفحة:",
        themeTextLabel: "لون النص والمؤشر:",
        themeCustom: "مخصص",
        themeReset: "استعادة الألوان الافتراضية",
        sidebarPosLabel: "موضع الشريط الجانبي:",
        posLeft: "يسار",
        posRight: "يمين",
        langTitle: "اختر لغة الواجهة:",
        sidebarBookmarks: "الإشارات المرجعية",
        sidebarTabs: "علامات التبويب المفتوحة",
        sidebarSearchBookmarks: "البحث في الإشارات...",
        sidebarSearchTabs: "البحث في علامات التبويب...",
        sidebarEmptyBookmarks: "لم يتم العثور على إشارات مرجعية",
        sidebarEmptyTabs: "لا توجد علامات تبويب مفتوحة",
        sidebarPin: "تثبيت الشريط الجانبي",
        sidebarUnpin: "إلغاء تثبيت الشريط الجانبي",
        sidebarCollapseAll: "طي الكل",
        sidebarExpandAll: "توسيع الكل",
        sidebarCloseTab: "إغلاق علامة التبويب",
        sidebarDeleteBookmark: "حذف الإشارة المرجعية",
        sidebarOpenNewTab: "فتح في علامة تبويب جديدة",
        sidebarActiveTab: "نشط",
        sidebarToggleBtn: "الإشارات وعلامات التبويب (Alt+B)",
        sidebarConfirmDelete: "هل تريد حذف الإشارة المرجعية \"%s\"؟"
    },
    hi: {
        title: "नया टैब",
        placeholder: "Google में खोजें...",
        searchIn: "%s में खोजें...",
        fullscreen: "फुलस्क्रीन मोड",
        settings: "सेटिंग्स",
        close: "बंद करें",
        settingsTitle: "सेटिंग्स",
        tabHistory: "खोज इतिहास",
        tabEngine: "सर्च इंजन",
        tabAlias: "त्वरित खोज",
        tabShortcuts: "शॉर्टकट",
        tabTheme: "थीम और रंग",
        tabLang: "भाषा",
        engineTitle: "सर्च इंजन चुनें:",
        engineReset: "Google पर रीसेट करें",
        shortcutsReset: "डिफ़ॉल्ट शॉर्टकट पुनर्स्थापित करें",
        shortcutHintsLabel: "बटन पर शॉर्टकट संकेत दिखाएं",
        shortcutOpenSettings: "सेटिंग्स खोलें / बंद करें",
        shortcutToggleSidebar: "बुकमार्क साइडबार खोलें / बंद करें",
        shortcutSwitchTabs: "सेटिंग्स में टैब बदलें",
        shortcutFullscreen: "फुलस्क्रीन मोड",
        shortcutCollapseBookmarks: "सभी बुकमार्क समेटें",
        shortcutExpandBookmarks: "सभी बुकमार्क विस्तृत करें",
        shortcutPinSidebar: "साइडबार पिन / अनपिन करें",
        shortcutPressKeys: "कुंजियाँ दबाएँ...",
        shortcutNotSet: "सेट नहीं है",
        shortcutClearHint: "रिकॉर्ड करने के लिए क्लिक करें। हटाने के लिए बैकस्पेस दबाएँ।",
        historyTotal: "कुल प्रविष्टियाँ: ",
        historyClearAll: "सभी साफ़ करें",
        historyEmpty: "खोज इतिहास खाली है",
        historyUseTooltip: "खोज के लिए उपयोग करें",
        historyDeleteTooltip: "इतिहास से हटाएं",
        aliasDesc: "त्वरित नेविगेशन के लिए शॉर्टकट बनाएं। उदाहरण: <strong>l3000</strong> → <strong>localhost:3000</strong> या <strong>ap.c</strong> → <strong>apple.com</strong>।",
        aliasKeyPlaceholder: "शॉर्टकट (उदा. l3000)",
        aliasUrlPlaceholder: "पता (उदा. localhost:3000)",
        aliasAddBtn: "जोड़ें",
        aliasEmpty: "कोई शॉर्टकट नहीं बनाया गया",
        aliasDeleteTooltip: "शॉर्टकट हटाएं",
        themeBgLabel: "पृष्ठ पृष्ठभूमि का रंग:",
        themeTextLabel: "टेक्स्ट और कर्सर का रंग:",
        themeCustom: "कस्टम",
        themeReset: "डिफ़ॉल्ट रंग पुनर्स्थापित करें",
        sidebarPosLabel: "साइडबार स्थिति:",
        posLeft: "बायां",
        posRight: "दायां",
        langTitle: "इंटरफ़ेस भाषा चुनें:",
        sidebarBookmarks: "बुकमार्क",
        sidebarTabs: "खुले हुए टैब",
        sidebarSearchBookmarks: "बुकमार्क खोजें...",
        sidebarSearchTabs: "खुले टैब खोजें...",
        sidebarEmptyBookmarks: "कोई बुकमार्क नहीं मिला",
        sidebarEmptyTabs: "कोई खुला टैब नहीं मिला",
        sidebarPin: "साइडबार पिन करें",
        sidebarUnpin: "साइडबार अनपिन करें",
        sidebarCollapseAll: "सभी समेटें",
        sidebarExpandAll: "सभी विस्तृत करें",
        sidebarCloseTab: "टैब बंद करें",
        sidebarDeleteBookmark: "बुकमार्क हटाएं",
        sidebarOpenNewTab: "नए टैब में खोलें",
        sidebarActiveTab: "सक्रिय",
        sidebarToggleBtn: "बुकमार्क और टैब (Alt+B)",
        sidebarConfirmDelete: "क्या आप वाकई बुकमार्क \"%s\" को हटाना चाहते हैं?"
    }
};

function getLanguage() {
    return localStorage.getItem(LANG_KEY) || 'en'; // По умолчанию 'en'
}

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}

    const t = translations[lang];
    document.title = t.title;
    document.documentElement.lang = lang;

    if (btnFullscreen) btnFullscreen.title = t.fullscreen;
    if (btnSettings) btnSettings.title = t.settings;
    if (modalCloseBtn) modalCloseBtn.title = t.close;
    if (modalSettingsTitle) modalSettingsTitle.textContent = t.settingsTitle;

    function updateTabLabel(btn, text) {
        if (!btn) return;
        const label = typeof btn.querySelector === 'function' ? btn.querySelector('.tab-label') : null;
        if (label) {
            label.textContent = text;
        } else {
            btn.textContent = text;
        }
    }

    updateTabLabel(tabHistoryBtn, t.tabHistory);
    updateTabLabel(tabEngineBtn, t.tabEngine);
    updateTabLabel(tabAliasBtn, t.tabAlias);
    updateTabLabel(tabShortcutsBtn, t.tabShortcuts);
    updateTabLabel(tabThemeBtn, t.tabTheme);
    updateTabLabel(tabLangBtn, t.tabLang);

    const activeTabBtn = [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn].find(b => b && b.classList && typeof b.classList.contains === 'function' && b.classList.contains('active'));
    if (modalActiveTabTitle && activeTabBtn) {
        const lbl = activeTabBtn.querySelector('.tab-label');
        modalActiveTabTitle.textContent = lbl ? lbl.textContent : activeTabBtn.textContent;
    }

    if (labelShortcutHints) labelShortcutHints.textContent = t.shortcutHintsLabel;
    if (engineTitle) engineTitle.textContent = t.engineTitle;
    if (btnResetEngine) btnResetEngine.textContent = t.engineReset;

    if (btnClearHistory) btnClearHistory.textContent = t.historyClearAll;
    if (aliasKeyInput) aliasKeyInput.placeholder = t.aliasKeyPlaceholder;
    if (aliasUrlInput) aliasUrlInput.placeholder = t.aliasUrlPlaceholder;
    if (aliasSubmitBtn) aliasSubmitBtn.textContent = t.aliasAddBtn;

    if (themeBgLabel) themeBgLabel.textContent = t.themeBgLabel;
    if (themeTextLabel) themeTextLabel.textContent = t.themeTextLabel;
    if (customBgText) customBgText.textContent = t.themeCustom;
    if (customTextText) customTextText.textContent = t.themeCustom;
    if (btnResetTheme) btnResetTheme.textContent = t.themeReset;
    if (btnResetShortcuts) btnResetShortcuts.textContent = t.shortcutsReset;
    if (langTitle) langTitle.textContent = t.langTitle;

    const sidebarPosLabel = document.getElementById('sidebar-pos-label');
    const posLeftText = document.getElementById('pos-left-text');
    const posRightText = document.getElementById('pos-right-text');
    if (sidebarPosLabel) sidebarPosLabel.textContent = t.sidebarPosLabel;
    if (posLeftText) posLeftText.textContent = t.posLeft;
    if (posRightText) posRightText.textContent = t.posRight;

    // Перевод элементов боковой панели закладок
    if (ideaBtnCollapse) ideaBtnCollapse.title = t.sidebarCollapseAll;
    if (ideaBtnExpand) ideaBtnExpand.title = t.sidebarExpandAll;
    if (btnSidebarToggle) btnSidebarToggle.title = t.sidebarToggleBtn;
    if (sidebarTrigger) sidebarTrigger.title = t.sidebarToggleBtn;
    if (typeof updatePinVisual === 'function') updatePinVisual();

    // Подсветка активной карточки языка
    document.querySelectorAll('.lang-card').forEach(card => {
        card.classList.toggle('active', card.dataset.lang === lang);
    });

    renderHistory();
    renderAliases();
    if (typeof renderShortcuts === 'function') renderShortcuts();
    if (typeof renderSearchEngines === 'function') renderSearchEngines();
    if (typeof updateSearchPlaceholder === 'function') updateSearchPlaceholder();
}

// Навешивание слушателей на переключатель языка
document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
        setLanguage(card.dataset.lang);
    });
});

// ==========================================
// 2. Полноэкранный режим (Fullscreen)
// ==========================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
}

if (btnFullscreen) {
    btnFullscreen.addEventListener('click', toggleFullscreen);

    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            iconFsEnter.style.display = 'none';
            iconFsExit.style.display = 'block';
        } else {
            iconFsEnter.style.display = 'block';
            iconFsExit.style.display = 'none';
        }
    });
}

// Двойной клик по фону (bg) для включения/выключения полноэкранного режима
document.addEventListener('dblclick', (e) => {
    if (e.target.closest('#search-form') || e.target.closest('.top-actions') || e.target.closest('#settings-modal') || e.target.closest('#idea-sidebar') || e.target.closest('#sidebar-trigger')) {
        return;
    }
    toggleFullscreen();
});

// ==========================================
// 3. Управление темой и цветами
// ==========================================
const THEME_KEY = 'theme_settings';
const DEFAULT_THEME = {
    bg: '#000000',
    text: '#ffffff'
};

function getTheme() {
    try {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { ...DEFAULT_THEME };
}

function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, JSON.stringify(theme));
    } catch (e) {}
}

function applyTheme(theme) {
    document.documentElement.style.setProperty('--bg-color', theme.bg);
    document.documentElement.style.setProperty('--text-color', theme.text);

    if (pickerBg) pickerBg.value = theme.bg;
    if (pickerText) pickerText.value = theme.text;

    if (bgPresets) {
        bgPresets.querySelectorAll('.color-circle').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color.toLowerCase() === theme.bg.toLowerCase());
        });
    }
    if (textPresets) {
        textPresets.querySelectorAll('.color-circle').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color.toLowerCase() === theme.text.toLowerCase());
        });
    }
}

function setThemeBg(color) {
    const theme = getTheme();
    theme.bg = color;
    saveTheme(theme);
    applyTheme(theme);
}

function setThemeText(color) {
    const theme = getTheme();
    theme.text = color;
    saveTheme(theme);
    applyTheme(theme);
}

if (bgPresets) {
    bgPresets.querySelectorAll('.color-circle').forEach(btn => {
        btn.addEventListener('click', () => setThemeBg(btn.dataset.color));
    });
}
if (textPresets) {
    textPresets.querySelectorAll('.color-circle').forEach(btn => {
        btn.addEventListener('click', () => setThemeText(btn.dataset.color));
    });
}

if (pickerBg) {
    pickerBg.addEventListener('input', (e) => setThemeBg(e.target.value));
}
if (pickerText) {
    pickerText.addEventListener('input', (e) => setThemeText(e.target.value));
}

if (btnResetTheme) {
    btnResetTheme.addEventListener('click', () => {
        saveTheme({ ...DEFAULT_THEME });
        applyTheme({ ...DEFAULT_THEME });
    });
}

applyTheme(getTheme());

// ==========================================
// 4. Модальное окно настроек и вкладки
// ==========================================
function openModal() {
    if (input && typeof input.blur === 'function') input.blur();
    settingsModal.classList.add('active');
    renderHistory();
    renderAliases();
    if (typeof renderSearchEngines === 'function') renderSearchEngines();
    if (typeof renderShortcuts === 'function') renderShortcuts();
    applyTheme(getTheme());

    const activeTabBtn = [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn].find(b => b && b.classList && typeof b.classList.contains === 'function' && b.classList.contains('active')) || tabHistoryBtn;
    if (activeTabBtn && typeof activeTabBtn.focus === 'function') {
        activeTabBtn.focus();
    }
}

function closeModal() {
    if (typeof stopRecording === 'function') stopRecording();
    settingsModal.classList.remove('active');
    input.focus();
    updateCaret();
}

if (btnSettings) {
    btnSettings.addEventListener('click', openModal);
}
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}

if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            closeModal();
        }
    });
}

function switchTab(activeBtn, activeContent) {
    if (typeof stopRecording === 'function') stopRecording();
    [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn].forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    [tabHistoryContent, tabEngineContent, tabAliasContent, tabShortcutsContent, tabThemeContent, tabLangContent].forEach(content => {
        if (content) content.classList.remove('active');
    });

    if (activeBtn) {
        activeBtn.classList.add('active');
        if (modalActiveTabTitle) {
            const lbl = typeof activeBtn.querySelector === 'function' ? activeBtn.querySelector('.tab-label') : null;
            modalActiveTabTitle.textContent = lbl ? lbl.textContent : activeBtn.textContent;
        }
    }
    if (activeContent) activeContent.classList.add('active');
}

function switchTabByOffset(offset) {
    const tabPairs = [
        { btn: tabHistoryBtn, content: tabHistoryContent },
        { btn: tabEngineBtn, content: tabEngineContent },
        { btn: tabAliasBtn, content: tabAliasContent },
        { btn: tabShortcutsBtn, content: tabShortcutsContent },
        { btn: tabThemeBtn, content: tabThemeContent },
        { btn: tabLangBtn, content: tabLangContent }
    ].filter(p => p.btn && p.content);

    const currentIndex = tabPairs.findIndex(p => p.btn.classList.contains('active'));
    if (currentIndex === -1) return;
    let nextIndex = (currentIndex + offset + tabPairs.length) % tabPairs.length;
    switchTab(tabPairs[nextIndex].btn, tabPairs[nextIndex].content);
    if (tabPairs[nextIndex].btn && typeof tabPairs[nextIndex].btn.focus === 'function') {
        tabPairs[nextIndex].btn.focus();
    }
}

if (tabHistoryBtn) tabHistoryBtn.addEventListener('click', () => switchTab(tabHistoryBtn, tabHistoryContent));
if (tabEngineBtn) tabEngineBtn.addEventListener('click', () => switchTab(tabEngineBtn, tabEngineContent));
if (tabAliasBtn) tabAliasBtn.addEventListener('click', () => switchTab(tabAliasBtn, tabAliasContent));
if (tabShortcutsBtn) tabShortcutsBtn.addEventListener('click', () => switchTab(tabShortcutsBtn, tabShortcutsContent));
if (tabThemeBtn) tabThemeBtn.addEventListener('click', () => switchTab(tabThemeBtn, tabThemeContent));
if (tabLangBtn) tabLangBtn.addEventListener('click', () => switchTab(tabLangBtn, tabLangContent));

// ==========================================
// 4b. Поисковые системы (Search Engines)
// ==========================================
const SEARCH_ENGINE_KEY = 'app_search_engine';
const DEFAULT_ENGINE = 'google';

const SEARCH_ENGINES = {
    google: {
        id: 'google',
        name: 'Google',
        code: 'G',
        domain: 'google.com',
        searchUrl: 'https://www.google.com/search?q=',
        action: 'https://www.google.com/search',
        param: 'q'
    },
    duckduckgo: {
        id: 'duckduckgo',
        name: 'DuckDuckGo',
        code: 'DDG',
        domain: 'duckduckgo.com',
        searchUrl: 'https://duckduckgo.com/?q=',
        action: 'https://duckduckgo.com/',
        param: 'q'
    },
    yandex: {
        id: 'yandex',
        name: 'Yandex',
        code: 'Y',
        domain: 'ya.ru',
        searchUrl: 'https://ya.ru/search/?text=',
        action: 'https://ya.ru/search/',
        param: 'text'
    },
    bing: {
        id: 'bing',
        name: 'Bing',
        code: 'B',
        domain: 'bing.com',
        searchUrl: 'https://www.bing.com/search?q=',
        action: 'https://www.bing.com/search',
        param: 'q'
    },
    brave: {
        id: 'brave',
        name: 'Brave',
        code: 'BR',
        domain: 'search.brave.com',
        searchUrl: 'https://search.brave.com/search?q=',
        action: 'https://search.brave.com/search',
        param: 'q'
    },
    ecosia: {
        id: 'ecosia',
        name: 'Ecosia',
        code: 'ECO',
        domain: 'ecosia.org',
        searchUrl: 'https://www.ecosia.org/search?q=',
        action: 'https://www.ecosia.org/search',
        param: 'q'
    },
    yahoo: {
        id: 'yahoo',
        name: 'Yahoo',
        code: 'Y!',
        domain: 'search.yahoo.com',
        searchUrl: 'https://search.yahoo.com/search?p=',
        action: 'https://search.yahoo.com/search',
        param: 'p'
    },
    baidu: {
        id: 'baidu',
        name: 'Baidu',
        code: 'BD',
        domain: 'baidu.com',
        searchUrl: 'https://www.baidu.com/s?wd=',
        action: 'https://www.baidu.com/s',
        param: 'wd'
    }
};

function getSearchEngine() {
    try {
        const stored = localStorage.getItem(SEARCH_ENGINE_KEY);
        if (stored && SEARCH_ENGINES[stored]) return stored;
    } catch (e) {}
    return DEFAULT_ENGINE;
}

function setSearchEngine(engineId) {
    if (!SEARCH_ENGINES[engineId]) engineId = DEFAULT_ENGINE;
    try {
        localStorage.setItem(SEARCH_ENGINE_KEY, engineId);
    } catch (e) {}

    applySearchEngine(engineId);
    renderSearchEngines();
}

function applySearchEngine(engineId) {
    const engine = SEARCH_ENGINES[engineId] || SEARCH_ENGINES[DEFAULT_ENGINE];
    if (form) {
        form.action = engine.action;
    }
    if (input) {
        input.name = engine.param;
    }
    updateSearchPlaceholder();
}

function updateSearchPlaceholder() {
    if (!input) return;
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    const engineId = getSearchEngine();
    const engine = SEARCH_ENGINES[engineId] || SEARCH_ENGINES.google;
    const name = engine.name;

    if (t && t.searchIn) {
        input.placeholder = t.searchIn.replace('%s', name);
    } else if (lang === 'ru') {
        input.placeholder = `Поиск в ${name}...`;
    } else if (lang === 'uz') {
        input.placeholder = `${name}'da qidirish...`;
    } else {
        input.placeholder = `Search in ${name}...`;
    }
}

function renderSearchEngines() {
    if (!engineOptions) return;
    const currentEngine = getSearchEngine();

    const existingCards = engineOptions.querySelectorAll('.engine-card');
    if (existingCards && existingCards.length > 0) {
        existingCards.forEach(card => {
            const isMatch = card.dataset && card.dataset.engine === currentEngine;
            card.classList.toggle('active', !!isMatch);
        });
        return;
    }

    engineOptions.innerHTML = '';

    Object.values(SEARCH_ENGINES).forEach(engine => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'engine-card' + (engine.id === currentEngine ? ' active' : '');
        card.setAttribute('data-engine', engine.id);
        if (card.dataset) card.dataset.engine = engine.id;

        const info = document.createElement('div');
        info.className = 'engine-info';

        const name = document.createElement('span');
        name.className = 'engine-name';
        name.textContent = engine.name;

        const domain = document.createElement('span');
        domain.className = 'engine-domain';
        domain.textContent = engine.domain;

        info.appendChild(name);
        info.appendChild(domain);

        const checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkSvg.setAttribute('class', 'engine-check');
        checkSvg.setAttribute('viewBox', '0 0 24 24');
        checkSvg.setAttribute('fill', 'none');
        checkSvg.setAttribute('stroke', 'currentColor');
        checkSvg.setAttribute('stroke-width', '2.2');
        checkSvg.setAttribute('stroke-linecap', 'round');
        checkSvg.setAttribute('stroke-linejoin', 'round');

        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', '20 6 9 17 4 12');
        checkSvg.appendChild(polyline);

        card.appendChild(info);
        card.appendChild(checkSvg);

        card.addEventListener('click', () => {
            setSearchEngine(engine.id);
        });

        engineOptions.appendChild(card);
    });
}

if (btnResetEngine) {
    btnResetEngine.addEventListener('click', () => {
        setSearchEngine(DEFAULT_ENGINE);
    });
}

applySearchEngine(getSearchEngine());
renderSearchEngines();

// ==========================================
// 5. Управление историей поиска
// ==========================================
const HISTORY_KEY = 'search_history';
const MAX_HISTORY = 500;
const MAX_HISTORY_QUERY_LENGTH = 280; // Защита от переполнения localStorage длинными текстами

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveToHistory(query) {
    query = query.trim();
    if (!query) return;

    // Не сохранять запросы, превышающие лимит символов или строк
    if (query.length > MAX_HISTORY_QUERY_LENGTH) return;
    if ((query.match(/\n/g) || []).length > 3) return;

    let history = getHistory();
    history = history.filter(item => item.toLowerCase() !== query.toLowerCase());
    history.unshift(query);
    if (history.length > MAX_HISTORY) {
        history = history.slice(0, MAX_HISTORY);
    }
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {}
}

function deleteHistoryItem(index) {
    let history = getHistory();
    history.splice(index, 1);
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {}
    renderHistory();
    updateSuggestion();
}

function clearAllHistory() {
    try {
        localStorage.removeItem(HISTORY_KEY);
    } catch (e) {}
    renderHistory();
    updateSuggestion();
}

btnClearHistory.addEventListener('click', clearAllHistory);

function renderHistory() {
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    const history = getHistory();

    historyCount.textContent = `${t.historyTotal}${history.length}`;
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = `<div class="empty-state">${t.historyEmpty}</div>`;
        return;
    }

    history.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'list-item';

        const textSpan = document.createElement('span');
        textSpan.className = 'item-text';
        textSpan.textContent = item;
        textSpan.title = t.historyUseTooltip;
        textSpan.addEventListener('click', () => {
            input.value = item;
            closeModal();
            input.focus();
            autoResizeInput();
            updateCaret();
            updateSuggestion();
        });

        const delBtn = document.createElement('button');
        delBtn.className = 'item-delete-btn';
        delBtn.type = 'button';
        delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        delBtn.title = t.historyDeleteTooltip;
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteHistoryItem(index);
        });

        row.appendChild(textSpan);
        row.appendChild(delBtn);
        historyList.appendChild(row);
    });
}

// ==========================================
// 6. Переменные (алиасы) для быстрого поиска
// ==========================================
const ALIASES_KEY = 'search_aliases';

const DEFAULT_ALIASES = {
    'l3000': 'localhost:3000',
    'ap.c': 'apple.com'
};

function getAliases() {
    try {
        const stored = localStorage.getItem(ALIASES_KEY);
        if (stored) return JSON.parse(stored);
    } catch (e) {}
    saveAliases(DEFAULT_ALIASES);
    return DEFAULT_ALIASES;
}

function saveAliases(aliases) {
    try {
        localStorage.setItem(ALIASES_KEY, JSON.stringify(aliases));
    } catch (e) {}
}

function addAlias(key, url) {
    key = key.trim();
    url = url.trim();
    if (!key || !url) return;

    const aliases = getAliases();
    aliases[key] = url;
    saveAliases(aliases);
    renderAliases();
    updateSuggestion();
}

function deleteAlias(key) {
    const aliases = getAliases();
    delete aliases[key];
    saveAliases(aliases);
    renderAliases();
    updateSuggestion();
}

aliasForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = aliasKeyInput.value.trim();
    const url = aliasUrlInput.value.trim();
    if (key && url) {
        addAlias(key, url);
        aliasKeyInput.value = '';
        aliasUrlInput.value = '';
        aliasKeyInput.focus();
    }
});

function renderAliases() {
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    const aliases = getAliases();
    aliasList.innerHTML = '';
    const keys = Object.keys(aliases);

    if (keys.length === 0) {
        aliasList.innerHTML = `<div class="empty-state">${t.aliasEmpty}</div>`;
        return;
    }

    keys.forEach(key => {
        const url = aliases[key];
        const row = document.createElement('div');
        row.className = 'list-item';

        const leftDiv = document.createElement('div');
        leftDiv.style.display = 'flex';
        leftDiv.style.alignItems = 'center';
        leftDiv.style.minWidth = '0';
        leftDiv.style.overflow = 'hidden';

        const badge = document.createElement('span');
        badge.className = 'alias-badge';
        badge.textContent = key;

        const arrow = document.createElement('span');
        arrow.className = 'alias-arrow';
        arrow.textContent = '→';

        const target = document.createElement('span');
        target.className = 'alias-target';
        target.textContent = url;

        leftDiv.appendChild(badge);
        leftDiv.appendChild(arrow);
        leftDiv.appendChild(target);

        const delBtn = document.createElement('button');
        delBtn.className = 'item-delete-btn';
        delBtn.type = 'button';
        delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        delBtn.title = t.aliasDeleteTooltip;
        delBtn.addEventListener('click', () => {
            deleteAlias(key);
        });

        row.appendChild(leftDiv);
        row.appendChild(delBtn);
        aliasList.appendChild(row);
    });
}

// ==========================================
// 6b. Горячие клавиши (Shortcuts)
// ==========================================
const SHORTCUTS_KEY = 'app_shortcuts';
const DEFAULT_SHORTCUTS = {
    openSettings: 'Ctrl+I',
    toggleSidebar: 'Ctrl+B',
    toggleFullscreen: '',
    collapseBookmarks: '',
    expandBookmarks: '',
    pinSidebar: ''
};

function getShortcuts() {
    try {
        const stored = localStorage.getItem(SHORTCUTS_KEY);
        if (stored) {
            return Object.assign({}, DEFAULT_SHORTCUTS, JSON.parse(stored));
        }
    } catch (e) {}
    return Object.assign({}, DEFAULT_SHORTCUTS);
}

function saveShortcuts(shortcuts) {
    try {
        localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
    } catch (e) {}
    updateShortcutButtonHints();
}

let recordingAction = null;

function stopRecording() {
    if (recordingAction !== null) {
        recordingAction = null;
        renderShortcuts();
    }
}

function formatShortcutFromEvent(e) {
    if (['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) {
        return null;
    }

    const parts = [];
    if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
    if (e.altKey) parts.push('Alt');
    if (e.shiftKey) parts.push('Shift');

    let key = e.key;
    if (e.code && e.code.startsWith('Key')) {
        key = e.code.slice(3).toUpperCase();
    } else if (e.code && e.code.startsWith('Digit')) {
        key = e.code.slice(5);
    } else if (key === ' ') {
        key = 'Space';
    } else if (key && key.length === 1) {
        key = key.toUpperCase();
    }

    parts.push(key);
    return parts.join('+');
}

function eventMatchesShortcut(e, shortcutStr) {
    if (!shortcutStr || typeof shortcutStr !== 'string') return false;
    const parts = shortcutStr.split('+').map(p => p.trim());
    const needsCtrl = parts.includes('Ctrl');
    const needsAlt = parts.includes('Alt');
    const needsShift = parts.includes('Shift');
    const keyPart = parts.find(p => !['Ctrl', 'Alt', 'Shift', 'Meta'].includes(p));

    const hasCtrl = !!(e.ctrlKey || e.metaKey);
    const hasAlt = !!e.altKey;
    const hasShift = !!e.shiftKey;

    if (needsCtrl !== hasCtrl) return false;
    if (needsAlt !== hasAlt) return false;
    if (needsShift !== hasShift) return false;

    if (!keyPart) return false;

    const keyUpper = keyPart.toUpperCase();
    if (e.key && e.key.toUpperCase() === keyUpper) return true;
    if (keyUpper.length === 1 && e.code === 'Key' + keyUpper) return true;
    if (keyUpper.startsWith('DIGIT') && e.code === keyUpper) return true;
    if (e.code && e.code.toUpperCase() === keyUpper) return true;

    return false;
}

const SHORTCUT_ROWS = [
    { key: 'openSettings', labelKey: 'shortcutOpenSettings', configurable: true },
    { key: 'toggleSidebar', labelKey: 'shortcutToggleSidebar', configurable: true },
    { key: 'switchTabs', labelKey: 'shortcutSwitchTabs', configurable: false, fixedValue: 'Q / E' },
    { key: 'toggleFullscreen', labelKey: 'shortcutFullscreen', configurable: true },
    { key: 'collapseBookmarks', labelKey: 'shortcutCollapseBookmarks', configurable: true },
    { key: 'expandBookmarks', labelKey: 'shortcutExpandBookmarks', configurable: true },
    { key: 'pinSidebar', labelKey: 'shortcutPinSidebar', configurable: true }
];

function renderShortcuts() {
    if (!shortcutsList) return;
    shortcutsList.innerHTML = '';

    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    const shortcuts = getShortcuts();

    SHORTCUT_ROWS.forEach(item => {
        const row = document.createElement('div');
        row.className = 'shortcut-row';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'shortcut-name';
        nameSpan.textContent = t[item.labelKey] || item.key;

        const badge = document.createElement('button');
        badge.type = 'button';
        badge.className = 'shortcut-badge';

        if (!item.configurable) {
            badge.classList.add('fixed');
            badge.textContent = item.fixedValue;
            badge.title = t.shortcutSwitchTabs || '';
        } else {
            const val = shortcuts[item.key] || '';
            if (recordingAction === item.key) {
                badge.classList.add('recording');
                badge.textContent = t.shortcutPressKeys || 'Press keys...';
            } else if (!val) {
                badge.classList.add('empty');
                badge.textContent = t.shortcutNotSet || 'Not set';
                badge.title = t.shortcutClearHint || 'Click to bind';
            } else {
                badge.textContent = val;
                badge.title = t.shortcutClearHint || 'Click to change';
            }

            badge.addEventListener('click', (e) => {
                e.stopPropagation();
                if (recordingAction === item.key) {
                    stopRecording();
                } else {
                    recordingAction = item.key;
                    renderShortcuts();
                }
            });
        }

        row.appendChild(nameSpan);
        row.appendChild(badge);
        shortcutsList.appendChild(row);
    });
}

if (btnResetShortcuts) {
    btnResetShortcuts.addEventListener('click', () => {
        recordingAction = null;
        saveShortcuts(DEFAULT_SHORTCUTS);
        renderShortcuts();
    });
}

const SHORTCUT_HINTS_KEY = 'app_shortcut_hints';

function areShortcutHintsEnabled() {
    try {
        const stored = localStorage.getItem(SHORTCUT_HINTS_KEY);
        if (stored !== null) return stored === 'true';
    } catch (e) {}
    return true; // Включено по умолчанию
}

function setShortcutHintsEnabled(enabled) {
    try {
        localStorage.setItem(SHORTCUT_HINTS_KEY, String(enabled));
    } catch (e) {}
    updateShortcutButtonHints();
}

function setButtonHint(btn, shortcutStr, isEnabled) {
    if (!btn || typeof btn.querySelector !== 'function') return;
    let hintElem = btn.querySelector('.btn-shortcut-hint');
    if (!isEnabled || !shortcutStr) {
        if (hintElem && typeof hintElem.remove === 'function') hintElem.remove();
        return;
    }
    if (!hintElem) {
        hintElem = document.createElement('span');
        hintElem.className = 'btn-shortcut-hint';
        btn.appendChild(hintElem);
    }
    hintElem.textContent = shortcutStr;
}

function updateShortcutButtonHints() {
    const isEnabled = areShortcutHintsEnabled();
    const shortcuts = getShortcuts();

    setButtonHint(btnSidebarToggle, shortcuts.toggleSidebar, isEnabled);
    setButtonHint(btnFullscreen, shortcuts.toggleFullscreen, isEnabled);
    setButtonHint(btnSettings, shortcuts.openSettings, isEnabled);

    setButtonHint(ideaBtnCollapse, shortcuts.collapseBookmarks, isEnabled);
    setButtonHint(ideaBtnExpand, shortcuts.expandBookmarks, isEnabled);
    setButtonHint(ideaBtnPin, shortcuts.pinSidebar, isEnabled);

    if (chkShortcutHints) {
        chkShortcutHints.checked = isEnabled;
    }
}

if (chkShortcutHints) {
    chkShortcutHints.checked = areShortcutHintsEnabled();
    chkShortcutHints.addEventListener('change', () => {
        setShortcutHintsEnabled(chkShortcutHints.checked);
    });
}

updateShortcutButtonHints();

document.addEventListener('click', (e) => {
    if (recordingAction !== null && !e.target.closest('.shortcut-badge')) {
        stopRecording();
    }
});

// ==========================================
// 7. Автозаполнение (Tab) и подсказки
// ==========================================
let currentSuggestion = null;

function updateSuggestion() {
    if (!ghostTyped || !ghostSuffix) return;

    const val = input.value;
    const selStart = input.selectionStart ?? 0;
    const selEnd = input.selectionEnd ?? 0;

    if (!val || selStart !== val.length || selEnd !== val.length) {
        currentSuggestion = null;
        ghostTyped.textContent = '';
        ghostSuffix.textContent = '';
        return;
    }

    const lowerVal = val.toLowerCase();

    // 1. Поиск по переменным
    const aliases = getAliases();
    const aliasKeys = Object.keys(aliases);
    const aliasMatch = aliasKeys.find(key => key.toLowerCase().startsWith(lowerVal) && key.toLowerCase() !== lowerVal);

    if (aliasMatch) {
        currentSuggestion = val + aliasMatch.slice(val.length);
        ghostTyped.textContent = val;
        ghostSuffix.textContent = aliasMatch.slice(val.length);
    } else {
        // 2. Поиск по истории
        const history = getHistory();
        const historyMatch = history.find(item => item.toLowerCase().startsWith(lowerVal) && item.toLowerCase() !== lowerVal);

        if (historyMatch) {
            currentSuggestion = val + historyMatch.slice(val.length);
            ghostTyped.textContent = val;
            ghostSuffix.textContent = historyMatch.slice(val.length);
        } else {
            currentSuggestion = null;
            ghostTyped.textContent = '';
            ghostSuffix.textContent = '';
        }
    }

    if (ghostText) {
        ghostText.scrollLeft = input.scrollLeft || 0;
    }
}

function autoResizeInput() {
    if (!input) return;
    input.style.height = 'auto';
    const newHeight = Math.min(240, Math.max(70, input.scrollHeight));
    input.style.height = newHeight + 'px';
}

function applySuggestion() {
    if (!currentSuggestion) return false;
    input.value = currentSuggestion;
    input.selectionStart = input.selectionEnd = input.value.length;
    currentSuggestion = null;
    ghostTyped.textContent = '';
    ghostSuffix.textContent = '';
    autoResizeInput();
    updateCaret();
    resetBlink();
    return true;
}

// ==========================================
// 8. Кастомный курсор
// ==========================================
function updateCaret() {
    if (!caret || !input) return;

    if (document.activeElement !== input) {
        caret.style.display = 'none';
        return;
    }

    const selStart = input.selectionStart ?? 0;
    const val = input.value || '';
    const textBefore = val.substring(0, selStart);

    const mirror = document.getElementById('caret-mirror');
    if (mirror) {
        mirror.innerHTML = '';
        const textSpan = document.createElement('span');
        textSpan.textContent = textBefore;
        mirror.appendChild(textSpan);

        const marker = document.createElement('span');
        const nextChar = val[selStart];
        marker.textContent = nextChar ? (nextChar === ' ' ? '\u00A0' : nextChar) : '\u00A0';
        mirror.appendChild(marker);

        const left = marker.offsetLeft - (input.scrollLeft || 0);
        const top = marker.offsetTop + marker.offsetHeight - 5 - (input.scrollTop || 0);
        const width = Math.max(16, marker.offsetWidth);

        if (top < 0 || top > input.clientHeight) {
            caret.style.display = 'none';
        } else {
            caret.style.display = 'block';
            caret.style.left = left + 'px';
            caret.style.top = top + 'px';
            caret.style.bottom = 'auto';
            caret.style.width = width + 'px';
        }
    } else {
        measureText.textContent = textBefore;
        const textWidth = measureText.getBoundingClientRect().width;
        let caretWidth = 18;
        if (selStart < val.length) {
            measureChar.textContent = val[selStart];
            const charWidth = measureChar.getBoundingClientRect().width;
            if (charWidth > 0) caretWidth = charWidth;
        }
        caret.style.display = 'block';
        caret.style.left = (12 + textWidth) + 'px';
        caret.style.top = (input.offsetHeight - 19) + 'px';
        caret.style.bottom = 'auto';
        caret.style.width = caretWidth + 'px';
    }
}

function resetBlink() {
    if (!caret) return;
    caret.style.animation = 'none';
    void caret.offsetWidth;
    caret.style.animation = 'caret-blink 0.8s infinite';
}

// Обработка клавиш Enter, Tab, ArrowRight и Escape
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (form) {
            if (form.requestSubmit) {
                form.requestSubmit();
            } else {
                form.dispatchEvent(new Event('submit', { cancelable: true }));
            }
        }
        return;
    }

    if (e.key === 'Tab') {
        if (currentSuggestion) {
            e.preventDefault();
            applySuggestion();
            return;
        }
    }

    if (e.key === 'ArrowRight' && input.selectionStart === input.value.length) {
        if (currentSuggestion) {
            e.preventDefault();
            applySuggestion();
            return;
        }
    }

    if (e.key === 'Escape') {
        if (currentSuggestion) {
            currentSuggestion = null;
            ghostTyped.textContent = '';
            ghostSuffix.textContent = '';
            return;
        }
    }
});

function getTabFocusableElements(container) {
    if (!container || typeof container.querySelectorAll !== 'function') return [];
    const selector = '.engine-card, .lang-card, .color-circle, .pos-btn, .shortcut-badge, .btn-secondary, .btn-primary, .item-text, input[type="checkbox"], input[type="color"]';
    return Array.from(container.querySelectorAll(selector)).filter(el => {
        return el.offsetParent !== null && !el.disabled && !el.classList.contains('fixed');
    });
}

function triggerOptionSelection(el) {
    if (!el) return;
    if (el.classList && el.classList.contains('engine-card') && el.dataset && el.dataset.engine) {
        setSearchEngine(el.dataset.engine);
    } else if (el.classList && el.classList.contains('lang-card') && el.dataset && el.dataset.lang) {
        setLanguage(el.dataset.lang);
    } else if (el.classList && el.classList.contains('color-circle') && el.dataset && el.dataset.color) {
        if (typeof el.closest === 'function') {
            if (el.closest('#bg-presets')) {
                setThemeBg(el.dataset.color);
            } else if (el.closest('#text-presets')) {
                setThemeText(el.dataset.color);
            }
        }
    } else if (el.classList && el.classList.contains('pos-btn') && el.dataset && el.dataset.pos) {
        setSidebarPosition(el.dataset.pos);
    }
}

function isGridItem(focusable, idx) {
    if (!focusable || idx < 0 || idx >= focusable.length) return false;
    const el = focusable[idx];
    return el && el.classList && (el.classList.contains('color-circle') || el.classList.contains('pos-btn'));
}

function isLeftmostItem(focusable, idx) {
    if (!focusable || idx < 0 || idx >= focusable.length) return false;
    const el = focusable[idx];
    if (!el || !el.classList) return false;
    if (el.classList.contains('engine-card') || el.classList.contains('lang-card') || el.classList.contains('shortcut-row') || el.id === 'chk-shortcut-hints') {
        return true;
    }
    if (el.classList.contains('color-circle')) {
        const presets = el.parentElement;
        return presets && presets.firstElementChild === el;
    }
    if (el.classList.contains('pos-btn')) {
        return el.dataset && el.dataset.pos === 'left';
    }
    return false;
}

function handleModalArrowNavigation(e) {
    const sidebarTabs = [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn].filter(Boolean);
    const isFocusInSidebar = sidebarTabs.includes(document.activeElement);
    const activeTabContent = settingsModal && typeof settingsModal.querySelector === 'function' ? settingsModal.querySelector('.tab-content.active') : null;

    // 1. Фокус в боковом меню настроек (sidebar)
    if (isFocusInSidebar) {
        const currentIdx = sidebarTabs.indexOf(document.activeElement);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIdx = (currentIdx + 1) % sidebarTabs.length;
            switchTabByOffset(1);
            if (sidebarTabs[nextIdx] && typeof sidebarTabs[nextIdx].focus === 'function') {
                sidebarTabs[nextIdx].focus();
            }
            return;
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIdx = (currentIdx - 1 + sidebarTabs.length) % sidebarTabs.length;
            switchTabByOffset(-1);
            if (sidebarTabs[prevIdx] && typeof sidebarTabs[prevIdx].focus === 'function') {
                sidebarTabs[prevIdx].focus();
            }
            return;
        }
        if (e.key === 'ArrowRight') {
            if (activeTabContent) {
                const focusable = getTabFocusableElements(activeTabContent);
                if (focusable.length > 0) {
                    e.preventDefault();
                    if (typeof focusable[0].focus === 'function') {
                        focusable[0].focus();
                    }
                    triggerOptionSelection(focusable[0]);
                    return;
                }
            }
        }
        return;
    }

    // 2. Фокус внутри содержимого активной вкладки
    if (activeTabContent && typeof activeTabContent.contains === 'function' && activeTabContent.contains(document.activeElement)) {
        const focusable = getTabFocusableElements(activeTabContent);
        if (focusable.length === 0) return;
        const currentIdx = focusable.indexOf(document.activeElement);

        if (e.key === 'ArrowLeft') {
            if (currentIdx <= 0 || isLeftmostItem(focusable, currentIdx)) {
                e.preventDefault();
                const activeSidebarBtn = sidebarTabs.find(b => b.classList && b.classList.contains('active')) || sidebarTabs[0];
                if (activeSidebarBtn && typeof activeSidebarBtn.focus === 'function') {
                    activeSidebarBtn.focus();
                }
                return;
            }
        }

        if (e.key === 'ArrowDown' || (e.key === 'ArrowRight' && !isGridItem(focusable, currentIdx))) {
            e.preventDefault();
            const nextIdx = currentIdx === -1 ? 0 : (currentIdx + 1) % focusable.length;
            if (focusable[nextIdx] && typeof focusable[nextIdx].focus === 'function') {
                focusable[nextIdx].focus();
            }
            triggerOptionSelection(focusable[nextIdx]);
            return;
        }

        if (e.key === 'ArrowUp' || (e.key === 'ArrowLeft' && !isGridItem(focusable, currentIdx))) {
            e.preventDefault();
            if (currentIdx === 0) {
                const activeSidebarBtn = sidebarTabs.find(b => b.classList && b.classList.contains('active')) || sidebarTabs[0];
                if (activeSidebarBtn && typeof activeSidebarBtn.focus === 'function') {
                    activeSidebarBtn.focus();
                }
                return;
            }
            const prevIdx = currentIdx === -1 ? 0 : (currentIdx - 1 + focusable.length) % focusable.length;
            if (focusable[prevIdx] && typeof focusable[prevIdx].focus === 'function') {
                focusable[prevIdx].focus();
            }
            triggerOptionSelection(focusable[prevIdx]);
            return;
        }

        if (isGridItem(focusable, currentIdx)) {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIdx = (currentIdx + 1) % focusable.length;
                if (focusable[nextIdx] && typeof focusable[nextIdx].focus === 'function') {
                    focusable[nextIdx].focus();
                }
                triggerOptionSelection(focusable[nextIdx]);
                return;
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                if (currentIdx === 0) {
                    const activeSidebarBtn = sidebarTabs.find(b => b.classList && b.classList.contains('active')) || sidebarTabs[0];
                    if (activeSidebarBtn && typeof activeSidebarBtn.focus === 'function') {
                        activeSidebarBtn.focus();
                    }
                    return;
                }
                const prevIdx = (currentIdx - 1 + focusable.length) % focusable.length;
                if (focusable[prevIdx] && typeof focusable[prevIdx].focus === 'function') {
                    focusable[prevIdx].focus();
                }
                triggerOptionSelection(focusable[prevIdx]);
                return;
            }
        }
    } else {
        // Фокус был не на элементе, переводим на активный таб сайдбара
        e.preventDefault();
        const activeSidebarBtn = sidebarTabs.find(b => b.classList && b.classList.contains('active')) || sidebarTabs[0];
        if (activeSidebarBtn && typeof activeSidebarBtn.focus === 'function') {
            activeSidebarBtn.focus();
        }
    }
}

// Глобальные горячие клавиши
document.addEventListener('keydown', (e) => {
    // 1. Если активна запись комбинации клавиш в настройках
    if (recordingAction !== null) {
        e.preventDefault();
        e.stopPropagation();

        if (e.key === 'Escape') {
            stopRecording();
            return;
        }

        if (e.key === 'Backspace' || e.key === 'Delete') {
            const shortcuts = getShortcuts();
            shortcuts[recordingAction] = '';
            saveShortcuts(shortcuts);
            stopRecording();
            return;
        }

        const combo = formatShortcutFromEvent(e);
        if (combo) {
            const shortcuts = getShortcuts();
            shortcuts[recordingAction] = combo;
            saveShortcuts(shortcuts);
            stopRecording();
        }
        return;
    }

    // 2. Закрытие окон по Escape
    if (e.key === 'Escape') {
        if (settingsModal && settingsModal.classList.contains('active')) {
            closeModal();
            return;
        }
        if (typeof isSidebarOpen !== 'undefined' && isSidebarOpen) {
            closeSidebar();
            return;
        }
    }

    // 3. Переключение вкладок в модальном окне настроек с помощью Q / E и навигация стрелками
    if (settingsModal && settingsModal.classList.contains('active')) {
        const isTypingInModal = document.activeElement && 
            settingsModal.contains(document.activeElement) &&
            (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA');

        if (!isTypingInModal && !e.ctrlKey && !e.altKey && !e.metaKey) {
            if (e.key === 'q' || e.key === 'Q' || e.code === 'KeyQ') {
                e.preventDefault();
                switchTabByOffset(-1);
                return;
            }
            if (e.key === 'e' || e.key === 'E' || e.code === 'KeyE') {
                e.preventDefault();
                switchTabByOffset(1);
                return;
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                handleModalArrowNavigation(e);
                return;
            }
        }
    }

    // 4. Проверка глобальных горячих клавиш
    const shortcuts = getShortcuts();

    // Открытие / закрытие настроек (по умолчанию Ctrl+I)
    if (eventMatchesShortcut(e, shortcuts.openSettings)) {
        e.preventDefault();
        if (settingsModal && settingsModal.classList.contains('active')) {
            closeModal();
        } else {
            openModal();
        }
        return;
    }

    // Открытие / закрытие боковой панели (по умолчанию Ctrl+B, с поддержкой Alt+B)
    if (eventMatchesShortcut(e, shortcuts.toggleSidebar) ||
        (e.altKey && (e.key === 'b' || e.key === 'B' || e.code === 'KeyB')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'b' || e.key === 'B' || e.code === 'KeyB'))) {
        e.preventDefault();
        if (typeof toggleSidebar === 'function') toggleSidebar();
        return;
    }

    // Если фокус в поле ввода (например, поиск), простые клавиши без модификаторов не должны срабатывать
    const isTyping = document.activeElement && 
        (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA');
    const hasModifierOrFKey = e.ctrlKey || e.metaKey || e.altKey || (e.key && e.key.startsWith('F'));
    if (isTyping && !hasModifierOrFKey) {
        return;
    }

    // Полноэкранный режим
    if (shortcuts.toggleFullscreen && eventMatchesShortcut(e, shortcuts.toggleFullscreen)) {
        e.preventDefault();
        toggleFullscreen();
        return;
    }

    // Свернуть все закладки
    if (shortcuts.collapseBookmarks && eventMatchesShortcut(e, shortcuts.collapseBookmarks)) {
        e.preventDefault();
        if (typeof collapseAllFolders === 'function') collapseAllFolders();
        return;
    }

    // Развернуть все закладки
    if (shortcuts.expandBookmarks && eventMatchesShortcut(e, shortcuts.expandBookmarks)) {
        e.preventDefault();
        if (typeof expandAllFolders === 'function') expandAllFolders();
        return;
    }

    // Закрепить / открепить боковую панель
    if (shortcuts.pinSidebar && eventMatchesShortcut(e, shortcuts.pinSidebar)) {
        e.preventDefault();
        if (typeof toggleSidebarPin === 'function') toggleSidebarPin();
        return;
    }
});

// Слушатели событий ввода
['input', 'keyup', 'click', 'mouseup', 'select', 'focus'].forEach(event => {
    input.addEventListener(event, () => {
        autoResizeInput();
        updateSuggestion();
        updateCaret();
        resetBlink();
    });
});

input.addEventListener('blur', () => {
    if (caret) caret.style.display = 'none';
    if (ghostTyped && ghostSuffix) {
        ghostTyped.textContent = '';
        ghostSuffix.textContent = '';
    }
});

input.addEventListener('scroll', () => {
    updateCaret();
    if (ghostText) {
        ghostText.scrollLeft = input.scrollLeft || 0;
        ghostText.scrollTop = input.scrollTop || 0;
    }
});

document.addEventListener('selectionchange', () => {
    if (document.activeElement === input) {
        updateSuggestion();
        updateCaret();
    }
});

if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('resize', () => {
        autoResizeInput();
        updateCaret();
    });
}

// Синхронизация после загрузки шрифта
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
        autoResizeInput();
        updateCaret();
        updateSuggestion();
    });
}

// Фокус при запуске
if (input) {
    autoResizeInput();
    input.focus();
    updateCaret();
    updateSuggestion();
    setTimeout(() => {
        autoResizeInput();
        input.focus();
        updateCaret();
        updateSuggestion();
    }, 50);
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.top-actions') || e.target.closest('#settings-modal') || e.target.closest('#idea-sidebar') || e.target.closest('#sidebar-trigger')) {
        return;
    }
    if (typeof isSidebarOpen !== 'undefined' && isSidebarOpen && !isSidebarPinned) {
        closeSidebar();
    }
    input.focus();
    updateCaret();
});

// ==========================================
// 9. Определение доменов, переменных и отправка
// ==========================================
function getUrl(val) {
    val = val.trim();
    if (!val || /\s/.test(val)) return null;

    if (/^https?:\/\//i.test(val)) {
        return val;
    }

    if (/^localhost(:\d+)?([\/?#].*)?$/i.test(val)) {
        return 'http://' + val;
    }

    if (/^(\d{1,3}\.){3}\d{1,3}(:\d+)?([\/?#].*)?$/.test(val)) {
        return 'http://' + val;
    }

    const domainRegex = /^([a-zA-Z0-9\u0400-\u04FF]([a-zA-Z0-9\u0400-\u04FF-]*[a-zA-Z0-9\u0400-\u04FF])?\.)+[a-zA-Z\u0400-\u04FF]{2,}(:\d+)?([\/?#].*)?$/i;
    if (domainRegex.test(val)) {
        return 'https://' + val;
    }

    return null;
}

form.addEventListener('submit', (e) => {
    let query = input.value.trim();
    if (!query) {
        e.preventDefault();
        return;
    }

    saveToHistory(query);

    const aliases = getAliases();
    const lower = query.toLowerCase();
    for (const [key, target] of Object.entries(aliases)) {
        if (key.toLowerCase() === lower) {
            query = target.trim();
            break;
        }
    }

    const url = getUrl(query);
    if (url) {
        e.preventDefault();
        window.location.href = url;
    } else {
        e.preventDefault();
        const engineId = getSearchEngine();
        const engine = SEARCH_ENGINES[engineId] || SEARCH_ENGINES[DEFAULT_ENGINE];
        window.location.href = engine.searchUrl + encodeURIComponent(query);
    }
});

// ==========================================
// 10. Боковая панель закладок (Bookmarks)
// ==========================================
const SIDEBAR_POS_KEY = 'idea_sidebar_position';
function getSidebarPosition() {
    try {
        return localStorage.getItem(SIDEBAR_POS_KEY) || 'right';
    } catch (e) {
        return 'right';
    }
}

function setSidebarPosition(pos) {
    pos = pos === 'left' ? 'left' : 'right';
    try {
        localStorage.setItem(SIDEBAR_POS_KEY, pos);
    } catch (e) {}

    if (document.body) {
        if (pos === 'left') {
            document.body.classList.add('sidebar-pos-left');
            document.body.classList.remove('sidebar-pos-right');
        } else {
            document.body.classList.remove('sidebar-pos-left');
            document.body.classList.add('sidebar-pos-right');
        }
    }

    const btnLeft = document.getElementById('btn-pos-left');
    const btnRight = document.getElementById('btn-pos-right');
    if (btnLeft && btnRight) {
        btnLeft.classList.toggle('active', pos === 'left');
        btnRight.classList.toggle('active', pos === 'right');
    }
}

let isSidebarOpen = false;
let isSidebarPinned = false;
try {
    isSidebarPinned = localStorage.getItem('idea_sidebar_pinned') === 'true';
} catch (e) {}

let expandedFolders = new Set(['1']);
try {
    const savedFolders = localStorage.getItem('idea_expanded_folders');
    if (savedFolders) {
        expandedFolders = new Set(JSON.parse(savedFolders));
    }
} catch (e) {}

let sidebarLeaveTimer = null;
let currentBookmarksTree = null;

// Вспомогательные функции
function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[m]));
}

function getHostname(url) {
    try {
        const u = new URL(url);
        return u.hostname.replace(/^www\./, '');
    } catch (e) {
        return '';
    }
}

function getFaviconUrl(url) {
    if (!url) return '';
    try {
        if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
            return `chrome-extension://${chrome.runtime.id}/_favicon/?pageUrl=${encodeURIComponent(url)}&size=32`;
        }
        const parsed = new URL(url);
        return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(parsed.origin)}&sz=32`;
    } catch (e) {
        return '';
    }
}

// Демо-данные для закладок при запуске без расширения (preview / file://)
function getMockBookmarks() {
    return [
        {
            id: "0",
            title: "",
            children: [
                {
                    id: "1",
                    title: "Bookmarks bar",
                    children: [
                        { id: "101", title: "GitHub", url: "https://github.com" },
                        { id: "102", title: "Google", url: "https://google.com" },
                        { id: "103", title: "YouTube", url: "https://youtube.com" },
                        {
                            id: "104",
                            title: "Development",
                            children: [
                                { id: "105", title: "Stack Overflow", url: "https://stackoverflow.com" },
                                { id: "106", title: "MDN Web Docs", url: "https://developer.mozilla.org" },
                                { id: "107", title: "Chrome Extensions Docs", url: "https://developer.chrome.com/docs/extensions" }
                            ]
                        },
                        { id: "108", title: "Reddit", url: "https://reddit.com" }
                    ]
                },
                {
                    id: "2",
                    title: "Other bookmarks",
                    children: [
                        { id: "201", title: "Chrome Web Store", url: "https://chromewebstore.google.com" }
                    ]
                }
            ]
        }
    ];
}

// Открытие и закрытие боковой панели
function openSidebar(instant = false) {
    if (sidebarLeaveTimer) {
        clearTimeout(sidebarLeaveTimer);
        sidebarLeaveTimer = null;
    }
    if (isSidebarOpen) return;
    isSidebarOpen = true;

    if (!ideaSidebar) return;

    if (instant) {
        document.body.classList.add('no-sidebar-transition');
        ideaSidebar.classList.add('no-transition');
    }
    document.body.classList.add('sidebar-open');
    ideaSidebar.classList.add('open');
    if (btnSidebarToggle) btnSidebarToggle.classList.add('active');
    if (instant) {
        setTimeout(() => {
            document.body.classList.remove('no-sidebar-transition');
            ideaSidebar.classList.remove('no-transition');
        }, 50);
    }

    loadBookmarks();
}

function closeSidebar() {
    if (sidebarLeaveTimer) {
        clearTimeout(sidebarLeaveTimer);
        sidebarLeaveTimer = null;
    }
    if (!isSidebarOpen) return;
    isSidebarOpen = false;

    document.body.classList.remove('sidebar-open');
    if (ideaSidebar) {
        ideaSidebar.classList.remove('open');
    }
    if (btnSidebarToggle) {
        btnSidebarToggle.classList.remove('active');
    }
}

function toggleSidebar() {
    if (isSidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function toggleSidebarPin() {
    isSidebarPinned = !isSidebarPinned;
    try {
        localStorage.setItem('idea_sidebar_pinned', String(isSidebarPinned));
    } catch (e) {}
    updatePinVisual();
}

function updatePinVisual() {
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    if (!ideaSidebar || !ideaBtnPin) return;

    if (isSidebarPinned) {
        ideaSidebar.classList.add('pinned');
        ideaBtnPin.classList.add('active');
        ideaBtnPin.title = t.sidebarUnpin || "Unpin sidebar";
    } else {
        ideaSidebar.classList.remove('pinned');
        ideaBtnPin.classList.remove('active');
        ideaBtnPin.title = t.sidebarPin || "Pin sidebar";
    }
}

// Отрисовка дерева закладок
function renderBookmarksTree(tree) {
    if (!ideaViewBookmarks) return;
    ideaViewBookmarks.innerHTML = '';

    let rootNodes = [];
    if (Array.isArray(tree) && tree.length > 0) {
        if (tree[0].id === '0' && Array.isArray(tree[0].children)) {
            rootNodes = tree[0].children;
        } else {
            rootNodes = tree;
        }
    }

    if (rootNodes.length === 0) {
        const lang = getLanguage();
        const t = translations[lang] || translations.en;
        ideaViewBookmarks.innerHTML = `
            <div class="idea-empty-state">
                <svg class="idea-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <div class="idea-empty-text">${t.sidebarEmptyBookmarks || "No bookmarks found"}</div>
            </div>
        `;
        return;
    }

    function createTreeNode(node, depth = 0) {
        const isFolder = !node.url && Array.isArray(node.children);
        const container = document.createElement('div');
        container.className = 'idea-tree-node';

        const row = document.createElement('div');
        row.className = 'idea-tree-row';
        row.style.paddingLeft = (depth * 16 + 8) + 'px';

        const lang = getLanguage();
        const t = translations[lang] || translations.en;

        if (isFolder) {
            const isExpanded = expandedFolders.has(node.id);

            function getFolderIconHtml(expanded) {
                const isBookmarksBar = node.id === '1' || (node.title && /bookmarks bar|панель закладок|xatcho'plar paneli/i.test(node.title));
                if (isBookmarksBar) {
                    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
                }
                if (expanded) {
                    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="2" y1="10" x2="22" y2="10"></line></svg>`;
                }
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;
            }

            const arrow = document.createElement('span');
            arrow.className = `idea-tree-arrow ${isExpanded ? 'expanded' : ''}`;
            arrow.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

            const icon = document.createElement('span');
            icon.className = 'idea-tree-icon idea-folder-icon';
            icon.innerHTML = getFolderIconHtml(isExpanded);

            const title = document.createElement('span');
            title.className = 'idea-tree-title';
            title.textContent = node.title || 'Folder';

            const count = document.createElement('span');
            count.className = 'idea-tree-count';
            count.textContent = node.children.length;

            row.appendChild(arrow);
            row.appendChild(icon);
            row.appendChild(title);
            row.appendChild(count);
            container.appendChild(row);

            const childrenContainer = document.createElement('div');
            childrenContainer.className = `idea-tree-children ${isExpanded ? '' : 'collapsed'}`;

            node.children.forEach(child => {
                childrenContainer.appendChild(createTreeNode(child, depth + 1));
            });
            container.appendChild(childrenContainer);

            // Клик по папке для сворачивания / разворачивания
            row.addEventListener('click', (e) => {
                e.stopPropagation();
                if (expandedFolders.has(node.id)) {
                    expandedFolders.delete(node.id);
                    arrow.classList.remove('expanded');
                    childrenContainer.classList.add('collapsed');
                    icon.innerHTML = getFolderIconHtml(false);
                } else {
                    expandedFolders.add(node.id);
                    arrow.classList.add('expanded');
                    childrenContainer.classList.remove('collapsed');
                    icon.innerHTML = getFolderIconHtml(true);
                }
                try {
                    localStorage.setItem('idea_expanded_folders', JSON.stringify([...expandedFolders]));
                } catch (err) {}
            });
        } else {
            // Лист (закладка)
            const arrow = document.createElement('span');
            arrow.className = 'idea-tree-arrow hidden';

            const icon = document.createElement('span');
            icon.className = 'idea-tree-icon';
            const faviconImg = document.createElement('img');
            faviconImg.className = 'idea-favicon';
            faviconImg.src = getFaviconUrl(node.url);
            faviconImg.alt = '';
            faviconImg.onerror = () => {
                faviconImg.style.display = 'none';
                icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;color:rgba(255,255,255,0.6);"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
            };
            icon.appendChild(faviconImg);

            const title = document.createElement('span');
            title.className = 'idea-tree-title';
            title.title = `${node.title || ''}\n${node.url || ''}`;
            title.textContent = node.title || node.url || 'Bookmark';

            const domain = document.createElement('span');
            domain.className = 'idea-tree-domain';
            domain.textContent = getHostname(node.url);

            const actions = document.createElement('div');
            actions.className = 'idea-tree-actions';

            const openBtn = document.createElement('button');
            openBtn.className = 'idea-tree-btn';
            openBtn.type = 'button';
            openBtn.title = t.sidebarOpenNewTab || "Open in new tab";
            openBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
            openBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open(node.url, '_blank');
            });

            const delBtn = document.createElement('button');
            delBtn.className = 'idea-tree-btn btn-delete';
            delBtn.type = 'button';
            delBtn.title = t.sidebarDeleteBookmark || "Delete bookmark";
            delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const confirmMsg = (t.sidebarConfirmDelete || 'Delete bookmark "%s"?').replace('%s', node.title || node.url);
                if (window.confirm(confirmMsg)) {
                    if (typeof chrome !== 'undefined' && chrome.bookmarks && chrome.bookmarks.remove) {
                        chrome.bookmarks.remove(node.id, () => {
                            loadBookmarks();
                        });
                    }
                }
            });

            actions.appendChild(openBtn);
            actions.appendChild(delBtn);

            row.appendChild(arrow);
            row.appendChild(icon);
            row.appendChild(title);
            if (domain.textContent) row.appendChild(domain);
            row.appendChild(actions);
            container.appendChild(row);

            // Клик для перехода
            row.addEventListener('click', (e) => {
                if (e.ctrlKey || e.metaKey || e.button === 1) {
                    window.open(node.url, '_blank');
                } else {
                    window.location.href = node.url;
                }
            });
            row.addEventListener('auxclick', (e) => {
                if (e.button === 1) {
                    e.preventDefault();
                    window.open(node.url, '_blank');
                }
            });
        }

        return container;
    }

    rootNodes.forEach(node => {
        ideaViewBookmarks.appendChild(createTreeNode(node, 0));
    });
}

// Загрузка закладок
function loadBookmarks() {
    if (typeof chrome !== 'undefined' && chrome.bookmarks && chrome.bookmarks.getTree) {
        chrome.bookmarks.getTree((tree) => {
            currentBookmarksTree = tree;
            renderBookmarksTree(tree);
        });
    } else {
        currentBookmarksTree = getMockBookmarks();
        renderBookmarksTree(currentBookmarksTree);
    }
}

// Развернуть все папки
function expandAllFolders() {
    function collectFolderIds(node) {
        if (!node) return;
        if (!node.url && Array.isArray(node.children)) {
            expandedFolders.add(node.id);
            node.children.forEach(collectFolderIds);
        }
    }
    if (currentBookmarksTree) {
        currentBookmarksTree.forEach(collectFolderIds);
        try {
            localStorage.setItem('idea_expanded_folders', JSON.stringify([...expandedFolders]));
        } catch (e) {}
        renderBookmarksTree(currentBookmarksTree);
    }
}

// Свернуть все папки
function collapseAllFolders() {
    expandedFolders.clear();
    try {
        localStorage.setItem('idea_expanded_folders', '[]');
    } catch (e) {}
    if (currentBookmarksTree) {
        renderBookmarksTree(currentBookmarksTree);
    }
}

// Инициализация боковой панели и слушателей
function initSidebar() {
    if (btnSidebarToggle) {
        btnSidebarToggle.addEventListener('click', toggleSidebar);
    }

    if (ideaBtnPin) {
        ideaBtnPin.addEventListener('click', toggleSidebarPin);
    }

    if (ideaBtnCollapse) {
        ideaBtnCollapse.addEventListener('click', collapseAllFolders);
    }

    if (ideaBtnExpand) {
        ideaBtnExpand.addEventListener('click', expandAllFolders);
    }

    // Наведение на правую полосу активации
    if (sidebarTrigger) {
        sidebarTrigger.addEventListener('mouseenter', () => {
            openSidebar();
        });
    }

    // Наведение курсора к активному краю экрана (слева или справа)
    document.addEventListener('mousemove', (e) => {
        const pos = getSidebarPosition();
        if (pos === 'left') {
            if (e.clientX <= 14 && !isSidebarOpen) {
                openSidebar();
            }
        } else {
            if (e.clientX >= window.innerWidth - 14 && !isSidebarOpen) {
                openSidebar();
            }
        }
    });

    // Переключение стороны расположения боковой панели
    const btnPosLeft = document.getElementById('btn-pos-left');
    const btnPosRight = document.getElementById('btn-pos-right');
    if (btnPosLeft) {
        btnPosLeft.addEventListener('click', () => setSidebarPosition('left'));
    }
    if (btnPosRight) {
        btnPosRight.addEventListener('click', () => setSidebarPosition('right'));
    }
    setSidebarPosition(getSidebarPosition());

    // Обработка ухода мыши с боковой панели (с задержкой 320ms, если панель не закреплена)
    if (ideaSidebar) {
        ideaSidebar.addEventListener('mouseenter', () => {
            if (sidebarLeaveTimer) {
                clearTimeout(sidebarLeaveTimer);
                sidebarLeaveTimer = null;
            }
        });

        ideaSidebar.addEventListener('mouseleave', () => {
            if (isSidebarPinned) return;
            if (sidebarLeaveTimer) clearTimeout(sidebarLeaveTimer);
            sidebarLeaveTimer = setTimeout(() => {
                closeSidebar();
            }, 320);
        });
    }

    // Реактивные слушатели изменений закладок Chrome
    if (typeof chrome !== 'undefined' && chrome.bookmarks) {
        const refreshBm = () => {
            if (isSidebarOpen) {
                loadBookmarks();
            }
        };
        try {
            if (chrome.bookmarks.onCreated) chrome.bookmarks.onCreated.addListener(refreshBm);
            if (chrome.bookmarks.onRemoved) chrome.bookmarks.onRemoved.addListener(refreshBm);
            if (chrome.bookmarks.onChanged) chrome.bookmarks.onChanged.addListener(refreshBm);
            if (chrome.bookmarks.onMoved) chrome.bookmarks.onMoved.addListener(refreshBm);
        } catch (e) {}
    }

    // Восстановление состояния закрепления
    updatePinVisual();
    if (isSidebarPinned) {
        openSidebar(true);
    }
}

// ==========================================
// 11. Инициализация языка и боковой панели при загрузке
// ==========================================
setLanguage(getLanguage());
initSidebar();
