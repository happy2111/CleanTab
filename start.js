const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const caret = document.getElementById('custom-caret');
const measureText = document.getElementById('measure-text');
const measureChar = document.getElementById('measure-char');
const ghostText = document.getElementById('ghost-text');
const ghostTyped = document.getElementById('ghost-typed');
const ghostSuffix = document.getElementById('ghost-suffix');

let isRedirecting = false;

// Определение платформы macOS / Apple
const isMac = (function() {
    try {
        if (typeof window !== 'undefined' && window.__forceMac !== undefined) return !!window.__forceMac;
        if (typeof location !== 'undefined' && location.search && location.search.includes('platform=mac')) return true;
        if (typeof navigator === 'undefined') return false;
        if (navigator.userAgentData && navigator.userAgentData.platform) {
            return /mac/i.test(navigator.userAgentData.platform);
        }
        return /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent);
    } catch (e) {
        return false;
    }
})();

function formatShortcutDisplay(str) {
    if (!str || typeof str !== 'string') return '';
    if (isMac) {
        return str
            .replace(/\bCtrl\b/g, 'Cmd')
            .replace(/\bControl\b/g, 'Cmd')
            .replace(/\bAlt\b/g, 'Opt')
            .replace(/\bOption\b/g, 'Opt');
    } else {
        return str
            .replace(/\bCmd\b/g, 'Ctrl')
            .replace(/\bCommand\b/g, 'Ctrl')
            .replace(/\bOpt\b/g, 'Alt')
            .replace(/\bOption\b/g, 'Alt');
    }
}

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
const tabAiBtn = document.getElementById('tab-ai-btn');
const tabShortcutsBtn = document.getElementById('tab-shortcuts-btn');
const tabThemeBtn = document.getElementById('tab-theme-btn');
const tabLangBtn = document.getElementById('tab-lang-btn');
const tabBackupBtn = document.getElementById('tab-backup-btn');

const tabHistoryContent = document.getElementById('tab-history-content');
const tabEngineContent = document.getElementById('tab-engine-content');
const tabAliasContent = document.getElementById('tab-alias-content');
const tabAiContent = document.getElementById('tab-ai-content');
const tabShortcutsContent = document.getElementById('tab-shortcuts-content');
const tabThemeContent = document.getElementById('tab-theme-content');
const tabLangContent = document.getElementById('tab-lang-content');
const tabBackupContent = document.getElementById('tab-backup-content');

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
const chkHistorySaving = document.getElementById('chk-history-saving');
const labelHistorySaving = document.getElementById('label-history-saving');
const historyDescText = document.getElementById('history-desc-text');

const modalInfoBadge = document.getElementById('modal-info-badge');
const modalInfoTooltip = document.getElementById('modal-info-tooltip');

const aliasViewList = document.getElementById('alias-view-list');
const aliasViewForm = document.getElementById('alias-view-form');
const btnOpenAliasForm = document.getElementById('btn-open-alias-form');
const btnAliasBack = document.getElementById('btn-alias-back');
const labelAddAliasBtn = document.getElementById('label-add-alias-btn');
const aliasFormTitle = document.getElementById('alias-form-title');
const aliasForm = document.getElementById('alias-form');
const aliasKeyInput = document.getElementById('alias-key-input');
const aliasUrlInput = document.getElementById('alias-url-input');
const aliasShortcutInput = document.getElementById('alias-shortcut-input');
const aliasSubmitBtn = document.getElementById('alias-submit-btn');
const aliasCancelBtn = document.getElementById('alias-cancel-btn');
const aliasList = document.getElementById('alias-list');

const aiViewList = document.getElementById('ai-view-list');
const aiViewForm = document.getElementById('ai-view-form');
const btnOpenAiForm = document.getElementById('btn-open-ai-form');
const btnAiBack = document.getElementById('btn-ai-back');
const labelAddAiBtn = document.getElementById('label-add-ai-btn');
const aiFormTitle = document.getElementById('ai-form-title');
const aiProviderSelect = document.getElementById('ai-provider-select');
const aiForm = document.getElementById('ai-form');
const aiPrefixInput = document.getElementById('ai-prefix-input');
const aiCustomFields = document.getElementById('ai-custom-fields');
const aiNameInput = document.getElementById('ai-name-input');
const aiUrlInput = document.getElementById('ai-url-input');
const aiSubmitBtn = document.getElementById('ai-submit-btn');
const aiCancelBtn = document.getElementById('ai-cancel-btn');
const aiList = document.getElementById('ai-list');
const btnResetAi = document.getElementById('btn-reset-ai');

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

const themeBgImageLabel = document.getElementById('theme-bg-image-label');
const bgImageInput = document.getElementById('bg-image-input');
const btnUploadBgImage = document.getElementById('btn-upload-bg-image');
const btnRemoveBgImage = document.getElementById('btn-remove-bg-image');
const wrapBgBlur = document.getElementById('wrap-bg-blur');
const chkBgBlur = document.getElementById('chk-bg-blur');
const labelBgBlur = document.getElementById('label-bg-blur');
const chkSidebarBlur = document.getElementById('chk-sidebar-blur');
const labelSidebarBlur = document.getElementById('label-sidebar-blur');
const sidebarBlurControls = document.getElementById('sidebar-blur-controls');
const rangeSidebarOpacity = document.getElementById('range-sidebar-opacity');
const valSidebarOpacity = document.getElementById('val-sidebar-opacity');
const rangeSidebarBlur = document.getElementById('range-sidebar-blur');
const valSidebarBlur = document.getElementById('val-sidebar-blur');
const labelSidebarOpacity = document.getElementById('label-sidebar-opacity');
const labelSidebarBlurAmount = document.getElementById('label-sidebar-blur-amount');
const presetPureTransparentText = document.getElementById('preset-pure-transparent-text');
const presetGlassText = document.getElementById('preset-glass-text');
const presetFrostedText = document.getElementById('preset-frosted-text');
const presetSolidText = document.getElementById('preset-solid-text');

const themeFontLabel = document.getElementById('theme-font-label');
const fontSelect = document.getElementById('font-select');

const themePlaceholderLabel = document.getElementById('theme-placeholder-label');
const customPlaceholderInput = document.getElementById('custom-placeholder-input');
const btnResetPlaceholder = document.getElementById('btn-reset-placeholder');

const themeShadowsTitle = document.getElementById('theme-shadows-title');
const chkShadowsEnabled = document.getElementById('chk-shadows-enabled');
const labelShadowsEnabled = document.getElementById('label-shadows-enabled');
const shadowColorLabel = document.getElementById('shadow-color-label');
const pickerShadowColor = document.getElementById('picker-shadow-color');
const shadowColorPreview = document.getElementById('shadow-color-preview');

const themeAliasAnimLabel = document.getElementById('theme-alias-anim-label');
const aliasAnimOptions = document.getElementById('alias-anim-options');
const btnTestAliasAnim = document.getElementById('btn-test-alias-anim');
const btnTestAliasAnimText = document.getElementById('btn-test-alias-anim-text');
const aliasAnimPreviewBar = document.getElementById('alias-anim-preview-bar');

const btnExportConfig = document.getElementById('btn-export-config');
const labelExportBtn = document.getElementById('label-export-btn');
const importConfigInput = document.getElementById('import-config-input');
const labelImportBtn = document.getElementById('label-import-btn');
const backupStatusMsg = document.getElementById('backup-status-msg');

const onboardingOverlay = document.getElementById('onboarding-overlay');
const onboardingSpotlight = document.getElementById('onboarding-spotlight');
const onboardingCard = document.getElementById('onboarding-card');
const onboardingStepBadge = document.getElementById('onboarding-step-badge');
const onboardingText = document.getElementById('onboarding-text');
const onboardingSkipBtn = document.getElementById('onboarding-skip-btn');
const onboardingNextBtn = document.getElementById('onboarding-next-btn');

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
        tabAi: "AI Bots",
        tabShortcuts: "Shortcuts",
        tabTheme: "Appearance",
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
        aliasUpdateBtn: "Save",
        aliasCancelBtn: "Cancel",
        aliasEmpty: "No shortcuts created",
        aliasDeleteTooltip: "Delete shortcut",
        aliasEditTooltip: "Edit shortcut",
        aliasAddTitle: "Add Shortcut",
        aliasEditTitle: "Edit Shortcut",
        aliasKeyLabel: "Shortcut",
        aliasUrlLabel: "Address (URL)",
        aliasShortcutLabel: "Hotkey (optional)",
        aiDesc: "Fast AI routing. Type prefix followed by your prompt: <strong>!ai your prompt</strong>",
        aiPrefixPlaceholder: "!ai",
        aiNamePlaceholder: "Name (e.g. Ollama)",
        aiUrlPlaceholder: "https://.../?q={q}",
        aiAddBtn: "Add",
        aiUpdateBtn: "Save",
        aiCancelBtn: "Cancel",
        aiEmpty: "No AI services configured",
        aiEditTooltip: "Edit",
        aiDeleteTooltip: "Delete",
        aiResetBtn: "Reset to default",
        aiAddTitle: "Add AI Bot",
        aiEditTitle: "Edit AI Bot",
        aiProviderLabel: "AI Service",
        aiPrefixLabel: "Prefix",
        aiNameLabel: "Name",
        aiUrlLabel: "URL with {q}",
        themeBgLabel: "Page background color:",
        themeTextLabel: "Text & cursor color:",
        themeCustom: "Custom",
        themeReset: "Reset to default colors",
        sidebarPosLabel: "Sidebar position:",
        sidebarBlurLabel: "Blur & transparent effect",
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
        sidebarConfirmDelete: "Delete bookmark \"%s\"?",
        historySavingLabel: "Save search history",
        historyDesc: "Search history provides instant autocompletion (Tab) and one-click access to recent queries. All data is stored strictly locally on your computer and never sent anywhere.",
        aliasShortcutPlaceholder: "Hotkey (optional)",
        aliasShortcutTooltip: "Klicken, um Tastenkombination aufzunehmen",
        aliasRecordTooltip: "Tastenkombination aufnehmen",
        aliasShortcutTooltip: "Click to record shortcut",
        aliasRecordTooltip: "Record shortcut",
        fontLabel: "Font:",
        bgImageLabel: "Background image:",
        bgImageUpload: "Upload image",
        bgImageRemove: "Remove image",
        bgBlurLabel: "Blur background",
        placeholderLabel: "Search placeholder text:",
        placeholderReset: "Reset",
        shadowsLabel: "Shadows",
        shadowsEnabled: "Enable shadows",
        shadowColorLabel: "Shadow color:",
        onboardingSkip: "Skip",
        onboardingNext: "Next",
        onboardingDone: "Got it!",
        onboardingStep1: "Hover the corner to reveal action buttons",
        onboardingStep2: "Open Settings to customize everything",
        onboardingStep3: "Type to search or go to any URL",
        onboardingStep4: "Hover the edge to open your bookmarks",
        tabBackup: "Backup",
        exportBtn: "Export config",
        importBtn: "Import config",
        importSuccess: "Config imported!",
        importError: "Invalid config file",
        cursorStyleLabel: "Cursor style:",
        cursorUnderline: "Underline",
        cursorBar: "Vertical",
        cursorBlock: "Block",
        cursorHighlight: "Highlight",
        aliasAnimLabel: "Alias redirect animation:",
        aliasAnimTest: "Play demo",
        animShimmer: "Shimmer",
        animSpinner: "Spinner",
        animLine: "Line",
        animPulse: "Pulse",
        animNone: "None",
        sidebarOpacityLabel: "Opacity:",
        sidebarBlurAmountLabel: "Blur intensity:",
        presetPureTransparent: "Pure Transparent",
        presetGlass: "Glass",
        presetFrosted: "Frosted",
        presetSolid: "Solid"
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
        tabAi: "AI Chat",
        tabShortcuts: "Tugmalar",
        tabTheme: "Tashqi ko'rinish",
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
        aliasUpdateBtn: "Saqlash",
        aliasCancelBtn: "Bekor qilish",
        aliasEmpty: "Yaratilgan o'zgaruvchilar yo'q",
        aliasDeleteTooltip: "Qisqartmani o'chirish",
        aliasEditTooltip: "Tahrirlash",
        aliasAddTitle: "Qisqartma qo'shish",
        aliasEditTitle: "Qisqartmani tahrirlash",
        aliasKeyLabel: "Qisqartma",
        aliasUrlLabel: "Manzil (URL)",
        aliasShortcutLabel: "Tezkor tugma (ixtiyoriy)",
        aiDesc: "AI tizimlariga tezkor o'tish: <strong>!ai savolingiz</strong>",
        aiPrefixPlaceholder: "!ai",
        aiNamePlaceholder: "Nomi (masalan Ollama)",
        aiUrlPlaceholder: "https://.../?q={q}",
        aiAddBtn: "Qo'shish",
        aiUpdateBtn: "Saqlash",
        aiCancelBtn: "Bekor qilish",
        aiEmpty: "AI xizmatlari yo'q",
        aiEditTooltip: "Tahrirlash",
        aiDeleteTooltip: "O'chirish",
        aiResetBtn: "Standart holatga qaytarish",
        aiAddTitle: "AI bot qo'shish",
        aiEditTitle: "AI botni tahrirlash",
        aiProviderLabel: "AI Xizmati",
        aiPrefixLabel: "Prefiks",
        aiNameLabel: "Nomi",
        aiUrlLabel: "{q} belgisi bor URL",
        themeBgLabel: "Sahifa fon rangi:",
        themeTextLabel: "Matn va kursor rangi:",
        themeCustom: "Boshqa",
        themeReset: "Standart ranglarga qaytarish",
        sidebarPosLabel: "Yon panel joylashuvi:",
        sidebarBlurLabel: "Xiralashtirish va shaffoflik effekti",
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
        sidebarConfirmDelete: "\"%s\" xatcho'pini o'chirishni xohlaysizmi?",
        historySavingLabel: "Qidiruv tarixini saqlash",
        historyDesc: "Qidiruv tarixi so'rovlarni tezkor avtoto'ldirish (Tab) va bir bosishda qayta qidirish uchun xizmat qiladi. Barcha ma'lumotlar faqat kompyuteringizda lokal saqlanadi va hech qayerga yuborilmaydi.",
        aliasShortcutPlaceholder: "Tugma (ixtiyoriy)",
        aliasShortcutTooltip: "Tugmani yozib olish uchun bosing",
        aliasRecordTooltip: "Tugmani yozish",
        fontLabel: "Shrift:",
        bgImageLabel: "Fon rasmi:",
        bgImageUpload: "Rasm yuklash",
        bgImageRemove: "Rasmni o'chirish",
        bgBlurLabel: "Fonni xiralashtirish",
        placeholderLabel: "Qidiruv maydoni matni:",
        placeholderReset: "Tiklash",
        shadowsLabel: "Soyalar",
        shadowsEnabled: "Soyalarni yoqish",
        shadowColorLabel: "Soya rangi:",
        onboardingSkip: "O'tkazib yuborish",
        onboardingNext: "Keyingisi",
        onboardingDone: "Tushundim!",
        onboardingStep1: "Amal tugmalarini ko'rish uchun burchakka olib boring",
        onboardingStep2: "Hamma narsani sozlash uchun Sozlamalarni oching",
        onboardingStep3: "Qidirish yoki istalgan URL'ga o'tish uchun yozing",
        onboardingStep4: "Xatcho'plarni ochish uchun chetga olib boring",
        tabBackup: "Zahira",
        exportBtn: "Konfigni eksport qilish",
        importBtn: "Konfigni import qilish",
        importSuccess: "Konfig import qilindi!",
        importError: "Noto'g'ri konfig fayl",
        cursorStyleLabel: "Kursor ko'rinishi:",
        cursorUnderline: "Ostki chiziq",
        cursorBar: "Tik chiziq",
        cursorBlock: "Blok",
        cursorHighlight: "Belgilash",
        aliasAnimLabel: "Taxallus bo'yicha o'tish animatsiyasi:",
        aliasAnimTest: "Sinab ko'rish",
        animShimmer: "Yaltirash",
        animSpinner: "Aylanuvchi",
        animLine: "Chiziq",
        animPulse: "Puls",
        animNone: "Yo'q",
        sidebarOpacityLabel: "Shaffoflik:",
        sidebarBlurAmountLabel: "Xiralashtirish kuchi:",
        presetPureTransparent: "To'liq shaffof",
        presetGlass: "Shisha",
        presetFrosted: "Muzlagan oyna",
        presetSolid: "Yaxlit"
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
        tabAi: "AI Чат",
        tabShortcuts: "Горячие клавиши",
        tabTheme: "Внешний вид",
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
        aliasUpdateBtn: "Сохранить",
        aliasCancelBtn: "Отмена",
        aliasEmpty: "Нет созданных переменных",
        aliasDeleteTooltip: "Удалить переменную",
        aliasEditTooltip: "Редактировать",
        aliasAddTitle: "Добавить переменную",
        aliasEditTitle: "Редактировать переменную",
        aliasKeyLabel: "Сокращение",
        aliasUrlLabel: "Адрес (URL)",
        aliasShortcutLabel: "Горячая клавиша (необязательно)",
        aiDesc: "Быстрый переход к AI. Введите префикс и ваш вопрос: <strong>!ai ваш запрос</strong>",
        aiPrefixPlaceholder: "!ai",
        aiNamePlaceholder: "Название (напр. Ollama)",
        aiUrlPlaceholder: "https://.../?q={q}",
        aiAddBtn: "Добавить",
        aiUpdateBtn: "Сохранить",
        aiCancelBtn: "Отмена",
        aiEmpty: "Нет добавленных AI сервисов",
        aiEditTooltip: "Редактировать",
        aiDeleteTooltip: "Удалить",
        aiResetBtn: "Сбросить по умолчанию",
        aiAddTitle: "Добавить AI бот",
        aiEditTitle: "Редактировать AI бот",
        aiProviderLabel: "AI Сервис",
        aiPrefixLabel: "Префикс",
        aiNameLabel: "Название",
        aiUrlLabel: "URL с меткой {q}",
        themeBgLabel: "Цвет фона страницы:",
        themeTextLabel: "Цвет текста и курсора:",
        themeCustom: "Свой",
        themeReset: "Сбросить цвета по умолчанию",
        sidebarPosLabel: "Расположение панели:",
        sidebarBlurLabel: "Размытие и прозрачность (Blur)",
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
        sidebarConfirmDelete: "Удалить закладку \"%s\"?",
        historySavingLabel: "Сохранять историю поиска",
        historyDesc: "История сохраняет ваши поисковые запросы для быстрого автозаполнения (Tab) и повторного поиска в один клик. Данные хранятся исключительно локально на вашем компьютере и никуда не передаются.",
        aliasShortcutPlaceholder: "Горячая клавиша (необязательно)",
        aliasShortcutTooltip: "Нажмите для записи комбинации",
        aliasRecordTooltip: "Записать горячую клавишу",
        fontLabel: "Шрифт:",
        bgImageLabel: "Фоновое изображение:",
        bgImageUpload: "Загрузить изображение",
        bgImageRemove: "Удалить изображение",
        bgBlurLabel: "Размытие фона",
        placeholderLabel: "Текст заполнителя поиска:",
        placeholderReset: "Сбросить",
        shadowsLabel: "Тени",
        shadowsEnabled: "Включить тени",
        shadowColorLabel: "Цвет тени:",
        onboardingSkip: "Пропустить",
        onboardingNext: "Далее",
        onboardingDone: "Понятно!",
        onboardingStep1: "Наведите на угол, чтобы увидеть кнопки действий",
        onboardingStep2: "Откройте Настройки, чтобы настроить всё",
        onboardingStep3: "Введите запрос для поиска или перехода по URL",
        onboardingStep4: "Наведите на край, чтобы открыть закладки",
        tabBackup: "Резервная копия",
        exportBtn: "Экспортировать конфиг",
        importBtn: "Импортировать конфиг",
        importSuccess: "Конфиг импортирован!",
        importError: "Неверный файл конфига",
        cursorStyleLabel: "Форма курсора:",
        cursorUnderline: "Подчёркивание",
        cursorBar: "Вертикальный",
        cursorBlock: "Блок",
        cursorHighlight: "Подсветка",
        aliasAnimLabel: "Анимация перехода по алиасу:",
        aliasAnimTest: "Тест анимации",
        animShimmer: "Мерцание",
        animSpinner: "Спиннер",
        animLine: "Линия",
        animPulse: "Пульс",
        animNone: "Без анимации",
        sidebarOpacityLabel: "Непрозрачность:",
        sidebarBlurAmountLabel: "Сила размытия:",
        presetPureTransparent: "Полная прозрачность",
        presetGlass: "Стекло",
        presetFrosted: "Матовое стекло",
        presetSolid: "Сплошной"
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
        tabAi: "Chat IA",
        tabShortcuts: "Atajos",
        tabTheme: "Apariencia",
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
        sidebarBlurLabel: "Efecto de desenfoque y transparencia",
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
        sidebarConfirmDelete: "¿Eliminar el marcador \"%s\"?",
        historySavingLabel: "Guardar historial de búsqueda",
        historyDesc: "El historial de búsqueda permite autocompletar rápidamente (Tab) y repetir búsquedas con un solo clic. Todos los datos se guardan estrictamente de forma local en tu ordenador y nunca se envían a ningún sitio.",
        aliasShortcutPlaceholder: "Tecla de acceso rápido (opcional)",
        aliasShortcutTooltip: "Haga clic para grabar el atajo",
        aliasRecordTooltip: "Grabar atajo",
        fontLabel: "Fuente:",
        bgImageLabel: "Imagen de fondo:",
        bgImageUpload: "Subir imagen",
        bgImageRemove: "Eliminar imagen",
        bgBlurLabel: "Desenfocar fondo",
        placeholderLabel: "Texto de marcador de posición:",
        placeholderReset: "Restablecer",
        shadowsLabel: "Sombras",
        shadowsEnabled: "Habilitar sombras",
        shadowColorLabel: "Color de sombra:",
        onboardingSkip: "Saltar",
        onboardingNext: "Siguiente",
        onboardingDone: "¡Entendido!",
        onboardingStep1: "Pase el cursor por la esquina para ver los botones de acción",
        onboardingStep2: "Abra Configuración para personalizar todo",
        onboardingStep3: "Escriba para buscar o ir a cualquier URL",
        onboardingStep4: "Pase el cursor por el borde para abrir sus marcadores",
        tabBackup: "Copia de seguridad",
        exportBtn: "Exportar configuración",
        importBtn: "Importar configuración",
        importSuccess: "¡Configuración importada!",
        importError: "Archivo de configuración no válido",
        cursorStyleLabel: "Estilo del cursor:",
        cursorUnderline: "Subrayado",
        cursorBar: "Vertical",
        cursorBlock: "Bloque",
        cursorHighlight: "Resaltado",
        aliasAnimLabel: "Animación de redirección de alias:",
        aliasAnimTest: "Probar demo",
        animShimmer: "Brillo",
        animSpinner: "Giro",
        animLine: "Línea",
        animPulse: "Pulso",
        animNone: "Ninguna",
        sidebarOpacityLabel: "Opacidad:",
        sidebarBlurAmountLabel: "Intensidad de desenfoque:",
        presetPureTransparent: "Transparente puro",
        presetGlass: "Vidrio",
        presetFrosted: "Esmerilado",
        presetSolid: "Sólido"
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
        tabAi: "Chat IA",
        tabShortcuts: "Atalhos",
        tabTheme: "Aparência",
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
        sidebarBlurLabel: "Efeito de desfoque e transparência",
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
        sidebarConfirmDelete: "Eliminar o marcador \"%s\"?",
        historySavingLabel: "Salvar histórico de pesquisa",
        historyDesc: "O histórico de pesquisa permite o preenchimento automático rápido (Tab) e a repetição de pesquisas com um clique. Todos os dados são guardados estritamente de forma local no seu computador e nunca são enviados para lado nenhum.",
        aliasShortcutPlaceholder: "Atalho de teclado (opcional)",
        aliasShortcutTooltip: "Clique para gravar o atalho",
        aliasRecordTooltip: "Gravar atalho",
        fontLabel: "Fonte:",
        bgImageLabel: "Imagem de fundo:",
        bgImageUpload: "Carregar imagem",
        bgImageRemove: "Remover imagem",
        bgBlurLabel: "Desfocar fundo",
        placeholderLabel: "Texto do espaço reservado:",
        placeholderReset: "Redefinir",
        shadowsLabel: "Sombras",
        shadowsEnabled: "Ativar sombras",
        shadowColorLabel: "Cor da sombra:",
        onboardingSkip: "Pular",
        onboardingNext: "Próximo",
        onboardingDone: "Entendido!",
        onboardingStep1: "Passe o cursor sobre o canto para ver os botões de ação",
        onboardingStep2: "Abra as Configurações para personalizar tudo",
        onboardingStep3: "Digite para pesquisar ou ir para qualquer URL",
        onboardingStep4: "Passe o cursor sobre a borda para abrir seus favoritos",
        tabBackup: "Backup",
        exportBtn: "Exportar configuração",
        importBtn: "Importar configuração",
        importSuccess: "Configuração importada!",
        importError: "Arquivo de configuração inválido",
        cursorStyleLabel: "Estilo do cursor:",
        cursorUnderline: "Sublinhado",
        cursorBar: "Vertical",
        cursorBlock: "Bloco",
        cursorHighlight: "Destaque",
        aliasAnimLabel: "Animação de redirecionamento de alias:",
        aliasAnimTest: "Testar demonstração",
        animShimmer: "Brilho",
        animSpinner: "Girador",
        animLine: "Linha",
        animPulse: "Pulsação",
        animNone: "Nenhum",
        sidebarOpacityLabel: "Opacidade:",
        sidebarBlurAmountLabel: "Intensidade do desfoque:",
        presetPureTransparent: "Transparente puro",
        presetGlass: "Vidro",
        presetFrosted: "Fosco",
        presetSolid: "Sólido"
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
        tabAi: "KI-Chat",
        tabShortcuts: "Tastenkombinationen",
        tabTheme: "Erscheinungsbild",
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
        sidebarBlurLabel: "Weichzeichner & Transparenzeffekt",
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
        sidebarConfirmDelete: "Lesezeichen \"%s\" wirklich löschen?",
        historySavingLabel: "Suchverlauf speichern",
        historyDesc: "Der Suchverlauf ermöglicht schnelle automatische Vervollständigung (Tab) und erneutes Suchen mit einem Klick. Alle Daten werden ausschließlich lokal auf Ihrem Computer gespeichert und niemals übertragen.",
        aliasShortcutPlaceholder: "Hotkey (optional)",
        aliasShortcutTooltip: "Klicken, um Tastenkombination aufzunehmen",
        aliasRecordTooltip: "Tastenkombination aufnehmen",
        fontLabel: "Schriftart:",
        bgImageLabel: "Hintergrundbild:",
        bgImageUpload: "Bild hochladen",
        bgImageRemove: "Bild entfernen",
        bgBlurLabel: "Hintergrund weichzeichnen",
        placeholderLabel: "Suchplatzhalter-Text:",
        placeholderReset: "Zurücksetzen",
        shadowsLabel: "Schatten",
        shadowsEnabled: "Schatten aktivieren",
        shadowColorLabel: "Schattenfarbe:",
        onboardingSkip: "Überspringen",
        onboardingNext: "Weiter",
        onboardingDone: "Verstanden!",
        onboardingStep1: "Fahren Sie über die Ecke, um Aktionsschaltflächen anzuzeigen",
        onboardingStep2: "Öffnen Sie die Einstellungen, um alles anzupassen",
        onboardingStep3: "Tippen Sie, um zu suchen oder zu einer URL zu navigieren",
        onboardingStep4: "Fahren Sie über den Rand, um Lesezeichen zu öffnen",
        tabBackup: "Sicherung",
        exportBtn: "Konfiguration exportieren",
        importBtn: "Konfiguration importieren",
        importSuccess: "Konfiguration importiert!",
        importError: "Ungültige Konfigurationsdatei",
        cursorStyleLabel: "Cursor-Stil:",
        cursorUnderline: "Unterstrich",
        cursorBar: "Vertikal",
        cursorBlock: "Block",
        cursorHighlight: "Hervorhebung",
        aliasAnimLabel: "Alias-Weiterleitungsanimation:",
        aliasAnimTest: "Demo abspielen",
        animShimmer: "Schimmern",
        animSpinner: "Spinner",
        animLine: "Linie",
        animPulse: "Pulsieren",
        animNone: "Keine",
        sidebarOpacityLabel: "Deckkraft:",
        sidebarBlurAmountLabel: "Unschärfe-Intensität:",
        presetPureTransparent: "Reine Transparenz",
        presetGlass: "Glas",
        presetFrosted: "Mattiert",
        presetSolid: "Vollflächig"
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
        tabAi: "AI 助手",
        tabShortcuts: "快捷键",
        tabTheme: "外观",
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
        sidebarBlurLabel: "模糊与半透明效果",
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
        sidebarConfirmDelete: "确定删除书签 \"%s\" 吗？",
        historySavingLabel: "保存搜索历史",
        historyDesc: "搜索历史用于实现快速自动补全（按 Tab 键）以及一键再次搜索。所有数据仅保存在您的本地电脑上，绝不会上传至任何地方。",
        aliasShortcutPlaceholder: "快捷键（可选）",
        aliasShortcutTooltip: "点击录制快捷键",
        aliasRecordTooltip: "录制快捷键",
        fontLabel: "字体：",
        bgImageLabel: "背景图片：",
        bgImageUpload: "上传图片",
        bgImageRemove: "删除图片",
        bgBlurLabel: "背景虚化",
        placeholderLabel: "搜索占位符文本：",
        placeholderReset: "重置",
        shadowsLabel: "阴影",
        shadowsEnabled: "启用阴影",
        shadowColorLabel: "阴影颜色：",
        onboardingSkip: "跳过",
        onboardingNext: "下一步",
        onboardingDone: "知道了！",
        onboardingStep1: "将光标悬停在角部以显示操作按钮",
        onboardingStep2: "打开设置以自定义所有内容",
        onboardingStep3: "输入以进行搜索或访问任何 URL",
        onboardingStep4: "将光标悬停在边缘以打开书签",
        tabBackup: "备份",
        exportBtn: "导出配置",
        importBtn: "导入配置",
        importSuccess: "配置已导入！",
        importError: "无效的配置文件",
        cursorStyleLabel: "光标样式：",
        cursorUnderline: "下划线",
        cursorBar: "竖线",
        cursorBlock: "方块",
        cursorHighlight: "高亮",
        aliasAnimLabel: "别名跳转动画：",
        aliasAnimTest: "播放演示",
        animShimmer: "流光",
        animSpinner: "微旋",
        animLine: "进度条",
        animPulse: "脉冲",
        animNone: "无",
        sidebarOpacityLabel: "不透明度：",
        sidebarBlurAmountLabel: "模糊强度：",
        presetPureTransparent: "完全透明",
        presetGlass: "通透玻璃",
        presetFrosted: "毛玻璃",
        presetSolid: "纯色"
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
        tabAi: "AI チャット",
        tabShortcuts: "ショートカット",
        tabTheme: "外観",
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
        sidebarBlurLabel: "ぼかしと半透明効果",
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
        sidebarConfirmDelete: "ブックマーク「%s」を削除しますか？",
        historySavingLabel: "検索履歴を保存する",
        historyDesc: "検索履歴は、入力時の素早いオートコンプリート（Tabキー）や過去の検索への素早いアクセスのために使用されます。データはお使いのパソコン内にのみローカル保存され、外部に送信されることはありません。",
        aliasShortcutPlaceholder: "ホットキー（オプション）",
        aliasShortcutTooltip: "クリックしてショートカットを記録",
        aliasRecordTooltip: "ショートカットを記録",
        fontLabel: "フォント：",
        bgImageLabel: "背景画像：",
        bgImageUpload: "画像をアップロード",
        bgImageRemove: "画像を削除",
        bgBlurLabel: "背景をぼかす",
        placeholderLabel: "検索プレースホルダーテキスト：",
        placeholderReset: "リセット",
        shadowsLabel: "影",
        shadowsEnabled: "影を有効にする",
        shadowColorLabel: "影の色：",
        onboardingSkip: "スキップ",
        onboardingNext: "次へ",
        onboardingDone: "了解！",
        onboardingStep1: "コーナーにカーソルを合わせるとアクションボタンが表示されます",
        onboardingStep2: "設定を開いてすべてをカスタマイズ",
        onboardingStep3: "入力して検索またはURLに移動します",
        onboardingStep4: "端にカーソルを合わせるとブックマークが開きます",
        tabBackup: "バックアップ",
        exportBtn: "設定をエクスポート",
        importBtn: "設定をインポート",
        importSuccess: "設定がインポートされました！",
        importError: "無効な設定ファイル",
        cursorStyleLabel: "カーソルスタイル:",
        cursorUnderline: "下線",
        cursorBar: "縦線",
        cursorBlock: "ブロック",
        cursorHighlight: "ハイライト",
        aliasAnimLabel: "エイリアス転送アニメーション：",
        aliasAnimTest: "デモを再生",
        animShimmer: "シマー",
        animSpinner: "スピナー",
        animLine: "ライン",
        animPulse: "パルス",
        animNone: "なし",
        sidebarOpacityLabel: "不透明度：",
        sidebarBlurAmountLabel: "ぼかしの強さ：",
        presetPureTransparent: "完全透明",
        presetGlass: "クリアガラス",
        presetFrosted: "すりガラス",
        presetSolid: "ソリッド"
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
        tabAi: "AI 챗",
        tabShortcuts: "단축키",
        tabTheme: "모양",
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
        sidebarBlurLabel: "블러 및 반투명 효과",
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
        sidebarConfirmDelete: "\"%s\" 북마크를 삭제하시겠습니까?",
        historySavingLabel: "검색 기록 저장",
        historyDesc: "검색 기록은 빠른 자동 완성(Tab 키) 및 한 번의 클릭으로 이전 검색을 다시 실행하는 데 사용됩니다. 모든 데이터는 컴퓨터에만 로컬로 저장되며 외부로 전송되지 않습니다.",
        aliasShortcutPlaceholder: "단축키 (선택 사항)",
        aliasShortcutTooltip: "단축키를 녹음하려면 클릭하세요",
        aliasRecordTooltip: "단축키 녹음",
        fontLabel: "글꼴:",
        bgImageLabel: "배경 이미지:",
        bgImageUpload: "이미지 업로드",
        bgImageRemove: "이미지 삭제",
        bgBlurLabel: "배경 흐리게",
        placeholderLabel: "검색 자리표시자 텍스트:",
        placeholderReset: "초기화",
        shadowsLabel: "그림자",
        shadowsEnabled: "그림자 활성화",
        shadowColorLabel: "그림자 색상:",
        onboardingSkip: "건너뛰기",
        onboardingNext: "다음",
        onboardingDone: "확인했습니다!",
        onboardingStep1: "동작 버튼을 보려면 모서리에 마우스를 올리세요",
        onboardingStep2: "모든 것을 사용자 지정하려면 설정을 엽니다",
        onboardingStep3: "검색하거나 임의의 URL로 이동하려면 입력하세요",
        onboardingStep4: "북마크를 열려면 가장자리에 마우스를 올리세요",
        tabBackup: "백업",
        exportBtn: "구성 내보내기",
        importBtn: "구성 가져오기",
        importSuccess: "구성을 가져왔습니다!",
        importError: "유효하지 않은 구성 파일",
        cursorStyleLabel: "커서 스타일:",
        cursorUnderline: "밑줄",
        cursorBar: "세로선",
        cursorBlock: "블록",
        cursorHighlight: "강조",
        aliasAnimLabel: "별칭 이동 애니메이션:",
        aliasAnimTest: "데모 재생",
        animShimmer: "반짝임",
        animSpinner: "스피너",
        animLine: "라인",
        animPulse: "펄스",
        animNone: "없음",
        sidebarOpacityLabel: "불투명도:",
        sidebarBlurAmountLabel: "블러 강도:",
        presetPureTransparent: "완전 투명",
        presetGlass: "유리",
        presetFrosted: "반투명 유리",
        presetSolid: "단색"
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
        tabAi: "الذكاء الاصطناعي",
        tabShortcuts: "الاختصارات",
        tabTheme: "المظهر",
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
        sidebarBlurLabel: "تأثير التمويه والشفافية",
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
        sidebarConfirmDelete: "هل تريد حذف الإشارة المرجعية \"%s\"؟",
        historySavingLabel: "حفظ سجل البحث",
        historyDesc: "يُستخدم سجل البحث للإكمال التلقائي السريع (مفتاح Tab) والوصول إلى عمليات البحث بنقرة واحدة. تُحفظ جميع البيانات محلياً فقط على جهاز الكمبيوتر الخاص بك ولا يتم إرسالها إلى أي مكان.",
        aliasShortcutPlaceholder: "مفتاح الاختصار (اختياري)",
        aliasShortcutTooltip: "انقر لتسجيل الاختصار",
        aliasRecordTooltip: "تسجيل اختصار",
        fontLabel: "الخط:",
        bgImageLabel: "صورة الخلفية:",
        bgImageUpload: "تحميل صورة",
        bgImageRemove: "إزالة الصورة",
        bgBlurLabel: "تمويه الخلفية",
        placeholderLabel: "نص عنصر نائب البحث:",
        placeholderReset: "إعادة ضبط",
        shadowsLabel: "الظلال",
        shadowsEnabled: "تمكين الظلال",
        shadowColorLabel: "لون الظل:",
        onboardingSkip: "تخطي",
        onboardingNext: "التالي",
        onboardingDone: "فهمت!",
        onboardingStep1: "قم بالمرور فوق الزاوية لإظهار أزرار الإجراءات",
        onboardingStep2: "افتح الإعدادات لتخصيص كل شيء",
        onboardingStep3: "اكتب للبحث أو الانتقال إلى أي رابط",
        onboardingStep4: "قم بالمرور فوق الحافة لفتح إشاراتك المرجعية",
        tabBackup: "نسخ احتياطي",
        exportBtn: "تصدير التكوين",
        importBtn: "استيراد التكوين",
        importSuccess: "تم استيراد التكوين!",
        importError: "ملف تكوين غير صالح",
        cursorStyleLabel: "نمط المؤشر:",
        cursorUnderline: "خط سفلي",
        cursorBar: "عمودي",
        cursorBlock: "كتلة",
        cursorHighlight: "تمييز",
        aliasAnimLabel: "حركة إعادة التوجيه للاختصار:",
        aliasAnimTest: "تشغيل العرض",
        animShimmer: "وميض",
        animSpinner: "مؤشر دوار",
        animLine: "خط",
        animPulse: "نبض",
        animNone: "بدون",
        sidebarOpacityLabel: "الشفافية:",
        sidebarBlurAmountLabel: "شدة التمويه:",
        presetPureTransparent: "شفاف تماماً",
        presetGlass: "زجاج",
        presetFrosted: "زجاج مصنفر",
        presetSolid: "صلب"
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
        tabAi: "AI चैट",
        tabShortcuts: "शॉर्टकट",
        tabTheme: "दिखावट",
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
        sidebarBlurLabel: "धुंधला और पारदर्शी प्रभाव",
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
        sidebarConfirmDelete: "क्या आप वाकई बुकमार्क \"%s\" को हटाना चाहते हैं?",
        historySavingLabel: "खोज इतिहास सहेजें",
        historyDesc: "खोज इतिहास का उपयोग त्वरित स्वतः-पूर्ण (Tab कुंजी) और एक क्लिक में पिछली खोजों को दोहराने के लिए किया जाता है। सारा डेटा केवल आपके कंप्यूटर पर स्थानीय रूप से सहेजा जाता है और कहीं भी नहीं भेजा जाता है।",
        aliasShortcutPlaceholder: "हॉटकी (वैकल्पिक)",
        aliasShortcutTooltip: "शॉर्टकट रिकॉर्ड करने के लिए क्लिक करें",
        aliasRecordTooltip: "शॉर्टकट रिकॉर्ड करें",
        fontLabel: "फ़ॉन्ट:",
        bgImageLabel: "पृष्ठभूमि छवि:",
        bgImageUpload: "छवि अपलोड करें",
        bgImageRemove: "छवि हटाएं",
        bgBlurLabel: "पृष्ठभूमि धुंधली करें",
        placeholderLabel: "खोज प्लेसहोल्डर पाठ:",
        placeholderReset: "रीसेट",
        shadowsLabel: "छाया",
        shadowsEnabled: "छाया सक्षम करें",
        shadowColorLabel: "छाया रंग:",
        onboardingSkip: "छोड़ें",
        onboardingNext: "अगला",
        onboardingDone: "समझ गया!",
        onboardingStep1: "क्रिया बटन देखने के लिए कोने पर होवर करें",
        onboardingStep2: "सब कुछ अनुकूलित करने के लिए सेटिंग्स खोलें",
        onboardingStep3: "खोजने या किसी भी URL पर जाने के लिए टाइप करें",
        onboardingStep4: "अपने बुकमार्क खोलने के लिए किनारे पर होवर करें",
        tabBackup: "बैकअप",
        exportBtn: "कॉन्फ़िगरेशन निर्यात करें",
        importBtn: "कॉन्फ़िगरेशन आयात करें",
        importSuccess: "कॉन्फ़िगरेशन आयात किया गया!",
        importError: "अमान्य कॉन्फ़िगरेशन फ़ाइल",
        cursorStyleLabel: "कर्सर शैली:",
        cursorUnderline: "अंडरलाइन",
        cursorBar: "ऊर्ध्वाधर",
        cursorBlock: "ब्लॉक",
        cursorHighlight: "हाइलाइट",
        aliasAnimLabel: "उपनाम पुनर्निर्देशन एनिमेशन:",
        aliasAnimTest: "डेमो चलाएं",
        animShimmer: "झिलमिलाहट",
        animSpinner: "स्पिनर",
        animLine: "लाइन",
        animPulse: "पल्स",
        animNone: "कोई नहीं",
        sidebarOpacityLabel: "अपारदर्शिता:",
        sidebarBlurAmountLabel: "धुंधलापन तीव्रता:",
        presetPureTransparent: "पूरी तरह पारदर्शी",
        presetGlass: "कांच",
        presetFrosted: "धुंधला कांच",
        presetSolid: "ठोस"
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

    const t = Object.assign({}, translations.en, translations[lang]);
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
    updateTabLabel(tabAiBtn, t.tabAi);
    updateTabLabel(tabShortcutsBtn, t.tabShortcuts);
    updateTabLabel(tabThemeBtn, t.tabTheme);
    updateTabLabel(tabLangBtn, t.tabLang);
    updateTabLabel(tabBackupBtn, t.tabBackup);

    const activeTabBtn = [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabAiBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn, tabBackupBtn].find(b => b && b.classList && typeof b.classList.contains === 'function' && b.classList.contains('active'));
    if (modalActiveTabTitle && activeTabBtn) {
        const lbl = activeTabBtn.querySelector('.tab-label');
        modalActiveTabTitle.textContent = lbl ? lbl.textContent : activeTabBtn.textContent;
    }

    if (labelShortcutHints) labelShortcutHints.textContent = t.shortcutHintsLabel;
    if (engineTitle) engineTitle.textContent = t.engineTitle;
    if (btnResetEngine) btnResetEngine.textContent = t.engineReset;

    if (btnClearHistory) btnClearHistory.textContent = t.historyClearAll;
    if (labelHistorySaving) labelHistorySaving.textContent = t.historySavingLabel;
    if (historyDescText) historyDescText.textContent = t.historyDesc;
    if (aliasKeyInput) aliasKeyInput.placeholder = t.aliasKeyPlaceholder;
    if (aliasUrlInput) aliasUrlInput.placeholder = t.aliasUrlPlaceholder;
    if (aliasShortcutInput) {
        const exampleHint = isMac ? (lang === 'ru' ? ' (напр. Cmd+G)' : ' (e.g. Cmd+G)') : (lang === 'ru' ? ' (напр. Ctrl+G)' : ' (e.g. Ctrl+G)');
        aliasShortcutInput.placeholder = (t.aliasShortcutPlaceholder || 'Hotkey (optional)') + exampleHint;
    }
    if (aliasSubmitBtn) aliasSubmitBtn.textContent = (typeof editingAliasKey !== 'undefined' && editingAliasKey) ? (t.aliasUpdateBtn || 'Save') : (t.aliasAddBtn || 'Add');
    if (aliasCancelBtn) aliasCancelBtn.textContent = t.aliasCancelBtn || 'Cancel';
    if (aliasFormTitle) aliasFormTitle.textContent = (typeof editingAliasKey !== 'undefined' && editingAliasKey) ? (t.aliasEditTitle || 'Edit Shortcut') : (t.aliasAddTitle || 'Add Shortcut');
    if (labelAddAliasBtn) labelAddAliasBtn.textContent = t.aliasAddBtn || 'Add';

    const aliasKeyLabel = document.getElementById('alias-key-label');
    const aliasUrlLabel = document.getElementById('alias-url-label');
    const aliasShortcutLabel = document.getElementById('alias-shortcut-label');
    if (aliasKeyLabel) aliasKeyLabel.textContent = t.aliasKeyLabel || 'Shortcut';
    if (aliasUrlLabel) aliasUrlLabel.textContent = t.aliasUrlLabel || 'Address (URL)';
    if (aliasShortcutLabel) aliasShortcutLabel.textContent = t.aliasShortcutLabel || 'Hotkey (optional)';

    if (aiPrefixInput) aiPrefixInput.placeholder = t.aiPrefixPlaceholder || "!ai";
    if (aiNameInput) aiNameInput.placeholder = t.aiNamePlaceholder || "Name (e.g. Ollama)";
    if (aiUrlInput) aiUrlInput.placeholder = t.aiUrlPlaceholder || "https://.../?q={q}";
    if (aiSubmitBtn) aiSubmitBtn.textContent = (typeof editingAiPrefix !== 'undefined' && editingAiPrefix) ? (t.aiUpdateBtn || 'Save') : (t.aiAddBtn || 'Add');
    if (aiCancelBtn) aiCancelBtn.textContent = t.aiCancelBtn || 'Cancel';
    if (aiFormTitle) aiFormTitle.textContent = (typeof editingAiPrefix !== 'undefined' && editingAiPrefix) ? (t.aiEditTitle || 'Edit AI Bot') : (t.aiAddTitle || 'Add AI Bot');
    if (labelAddAiBtn) labelAddAiBtn.textContent = t.aiAddBtn || 'Add';
    if (btnResetAi) btnResetAi.textContent = t.aiResetBtn || 'Reset to default';

    const aiProviderLabel = document.getElementById('ai-provider-label');
    const aiPrefixLabel = document.getElementById('ai-prefix-label');
    const aiNameLabel = document.getElementById('ai-name-label');
    const aiUrlLabel = document.getElementById('ai-url-label');
    if (aiProviderLabel) aiProviderLabel.textContent = t.aiProviderLabel || 'AI Service';
    if (aiPrefixLabel) aiPrefixLabel.textContent = t.aiPrefixLabel || 'Prefix';
    if (aiNameLabel) aiNameLabel.textContent = t.aiNameLabel || 'Name';
    if (aiUrlLabel) aiUrlLabel.textContent = t.aiUrlLabel || 'URL with {q}';

    if (themeBgLabel) themeBgLabel.textContent = t.themeBgLabel;
    if (themeBgImageLabel) themeBgImageLabel.textContent = t.bgImageLabel;
    if (btnUploadBgImage) btnUploadBgImage.textContent = t.bgImageUpload;
    if (btnRemoveBgImage) btnRemoveBgImage.textContent = t.bgImageRemove;
    if (labelBgBlur) labelBgBlur.textContent = t.bgBlurLabel;
    if (themeTextLabel) themeTextLabel.textContent = t.themeTextLabel;
    if (themeFontLabel) themeFontLabel.textContent = t.fontLabel;
    if (themePlaceholderLabel) themePlaceholderLabel.textContent = t.placeholderLabel;
    if (btnResetPlaceholder) btnResetPlaceholder.textContent = t.placeholderReset;
    if (themeShadowsTitle) themeShadowsTitle.textContent = t.shadowsLabel;
    if (labelShadowsEnabled) labelShadowsEnabled.textContent = t.shadowsEnabled;
    if (shadowColorLabel) shadowColorLabel.textContent = t.shadowColorLabel;
    if (labelExportBtn) labelExportBtn.textContent = t.exportBtn;
    if (labelImportBtn) labelImportBtn.textContent = t.importBtn;
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
    if (labelSidebarBlur) labelSidebarBlur.textContent = t.sidebarBlurLabel || "Blur & transparent effect";
    if (labelSidebarOpacity) labelSidebarOpacity.textContent = t.sidebarOpacityLabel || "Opacity:";
    if (labelSidebarBlurAmount) labelSidebarBlurAmount.textContent = t.sidebarBlurAmountLabel || "Blur intensity:";
    if (presetPureTransparentText) presetPureTransparentText.textContent = t.presetPureTransparent || "Pure Transparent";
    if (presetGlassText) presetGlassText.textContent = t.presetGlass || "Glass";
    if (presetFrostedText) presetFrostedText.textContent = t.presetFrosted || "Frosted";
    if (presetSolidText) presetSolidText.textContent = t.presetSolid || "Solid";

    const themeCursorLabel = document.getElementById('theme-cursor-label');
    const cursorUnderlineText = document.getElementById('cursor-underline-text');
    const cursorBarText = document.getElementById('cursor-bar-text');
    const cursorBlockText = document.getElementById('cursor-block-text');
    const cursorHighlightText = document.getElementById('cursor-highlight-text');
    const btnCursorUnderline = document.getElementById('btn-cursor-underline');
    const btnCursorBar = document.getElementById('btn-cursor-bar');
    const btnCursorBlock = document.getElementById('btn-cursor-block');
    const btnCursorHighlight = document.getElementById('btn-cursor-highlight');

    if (themeCursorLabel) themeCursorLabel.textContent = t.cursorStyleLabel;
    if (cursorUnderlineText) cursorUnderlineText.textContent = t.cursorUnderline;
    if (cursorBarText) cursorBarText.textContent = t.cursorBar;
    if (cursorBlockText) cursorBlockText.textContent = t.cursorBlock;
    if (cursorHighlightText) cursorHighlightText.textContent = t.cursorHighlight;
    if (btnCursorUnderline) btnCursorUnderline.title = t.cursorUnderline;
    if (btnCursorBar) btnCursorBar.title = t.cursorBar;
    if (btnCursorBlock) btnCursorBlock.title = t.cursorBlock;
    if (btnCursorHighlight) btnCursorHighlight.title = t.cursorHighlight;

    const animShimmerText = document.getElementById('anim-shimmer-text');
    const animSpinnerText = document.getElementById('anim-spinner-text');
    const animLineText = document.getElementById('anim-line-text');
    const animPulseText = document.getElementById('anim-pulse-text');
    const animNoneText = document.getElementById('anim-none-text');

    if (themeAliasAnimLabel) themeAliasAnimLabel.textContent = t.aliasAnimLabel || "Alias redirect animation:";
    if (btnTestAliasAnimText) btnTestAliasAnimText.textContent = t.aliasAnimTest || "Play demo";
    if (animShimmerText) animShimmerText.textContent = t.animShimmer || "Shimmer";
    if (animSpinnerText) animSpinnerText.textContent = t.animSpinner || "Spinner";
    if (animLineText) animLineText.textContent = t.animLine || "Line";
    if (animPulseText) animPulseText.textContent = t.animPulse || "Pulse";
    if (animNoneText) animNoneText.textContent = t.animNone || "None";

    // Перевод элементов боковой панели закладок
    if (ideaBtnCollapse) ideaBtnCollapse.title = t.sidebarCollapseAll;
    if (ideaBtnExpand) ideaBtnExpand.title = t.sidebarExpandAll;
    if (btnSidebarToggle) btnSidebarToggle.title = formatShortcutDisplay(t.sidebarToggleBtn);
    if (sidebarTrigger) sidebarTrigger.title = formatShortcutDisplay(t.sidebarToggleBtn);
    if (typeof updatePinVisual === 'function') updatePinVisual();

    // Подсветка активной карточки языка
    document.querySelectorAll('.lang-card').forEach(card => {
        card.classList.toggle('active', card.dataset.lang === lang);
    });

    renderHistory();
    renderAliases();
    if (typeof renderAiServices === 'function') renderAiServices();
    if (typeof renderShortcuts === 'function') renderShortcuts();
    if (typeof renderSearchEngines === 'function') renderSearchEngines();
    if (typeof updateSearchPlaceholder === 'function') updateSearchPlaceholder();
    if (typeof updateModalInfoBadge === 'function') updateModalInfoBadge();
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

// --- Font Selection (Feature 3) ---
const FONT_KEY = 'app_font';
const FONT_FAMILIES = {
    'Tektur': { name: 'Tektur', css: '"Tektur", sans-serif', url: null },
    'Inter': { name: 'Inter', css: '"Inter", sans-serif', url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400..900&display=swap' },
    'Roboto': { name: 'Roboto', css: '"Roboto", sans-serif', url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' },
    'Space Grotesk': { name: 'Space Grotesk', css: '"Space Grotesk", sans-serif', url: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&display=swap' },
    'JetBrains Mono': { name: 'JetBrains Mono', css: '"JetBrains Mono", monospace', url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400..800&display=swap' },
    'Fira Code': { name: 'Fira Code', css: '"Fira Code", monospace', url: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400..700&display=swap' },
    'Outfit': { name: 'Outfit', css: '"Outfit", sans-serif', url: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400..900&display=swap' },
    'DM Sans': { name: 'DM Sans', css: '"DM Sans", sans-serif', url: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..900&display=swap' },
    'Poppins': { name: 'Poppins', css: '"Poppins", sans-serif', url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' },
    'Nunito': { name: 'Nunito', css: '"Nunito", sans-serif', url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400..900&display=swap' }
};

function loadFont(fontName) {
    if (!fontName || fontName === 'Tektur') return;
    const fontInfo = FONT_FAMILIES[fontName];
    if (!fontInfo || !fontInfo.url) return;
    const linkId = 'font-link-' + fontName.toLowerCase().replace(/\s+/g, '-');
    if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = fontInfo.url;
        document.head.appendChild(link);
    }
}

function applyFont(fontName) {
    if (!FONT_FAMILIES[fontName]) fontName = 'Tektur';
    loadFont(fontName);
    const cssFont = FONT_FAMILIES[fontName].css;
    document.documentElement.style.setProperty('--app-font', cssFont);
    document.body.style.fontFamily = cssFont;
    if (input) input.style.fontFamily = cssFont;
    const caretMirror = document.getElementById('caret-mirror');
    if (caretMirror) caretMirror.style.fontFamily = cssFont;
    if (ghostText) ghostText.style.fontFamily = cssFont;
    document.querySelectorAll('.text-measure').forEach(el => el.style.fontFamily = cssFont);
    try {
        localStorage.setItem(FONT_KEY, fontName);
    } catch (e) {}
    if (fontSelect) fontSelect.value = fontName;
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.font === fontName);
    });
    if (typeof updateCaret === 'function') setTimeout(updateCaret, 50);
}

if (fontSelect) {
    fontSelect.value = localStorage.getItem(FONT_KEY) || 'Tektur';
    fontSelect.addEventListener('change', () => {
        applyFont(fontSelect.value);
    });
}

document.querySelectorAll('.font-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset && btn.dataset.font) {
            applyFont(btn.dataset.font);
        }
    });
});

// --- Background Image Upload & Blur (Feature 4) ---
const BG_IMAGE_KEY = 'bg_image';
const BG_BLUR_KEY = 'bg_blur';

function isBgBlurEnabled() {
    try {
        return localStorage.getItem(BG_BLUR_KEY) === 'true';
    } catch (e) {
        return false;
    }
}

function setBgBlur(enabled) {
    try {
        localStorage.setItem(BG_BLUR_KEY, String(enabled));
    } catch (e) {}
    if (chkBgBlur) chkBgBlur.checked = enabled;
    const layer = document.getElementById('bg-image-layer');
    if (layer) {
        layer.classList.toggle('blurred', enabled);
    }
}

function applyBgImage(base64) {
    const layer = document.getElementById('bg-image-layer');
    const blurEnabled = isBgBlurEnabled();

    if (base64) {
        if (layer) {
            layer.style.backgroundImage = `url("${base64}")`;
            layer.classList.add('active');
            layer.classList.toggle('blurred', blurEnabled);
        }
        document.documentElement.style.backgroundImage = 'none';
        document.body.style.backgroundImage = 'none';
        if (btnRemoveBgImage) btnRemoveBgImage.style.display = 'inline-flex';
        if (wrapBgBlur) wrapBgBlur.style.display = 'inline-flex';
        if (chkBgBlur) chkBgBlur.checked = blurEnabled;
    } else {
        if (layer) {
            layer.style.backgroundImage = 'none';
            layer.classList.remove('active');
            layer.classList.remove('blurred');
        }
        document.documentElement.style.backgroundImage = 'none';
        document.body.style.backgroundImage = 'none';
        if (btnRemoveBgImage) btnRemoveBgImage.style.display = 'none';
        if (wrapBgBlur) wrapBgBlur.style.display = 'none';
    }
}

if (chkBgBlur) {
    chkBgBlur.checked = isBgBlurEnabled();
    chkBgBlur.addEventListener('change', () => {
        setBgBlur(chkBgBlur.checked);
    });
}

if (btnUploadBgImage && bgImageInput) {
    btnUploadBgImage.addEventListener('click', () => bgImageInput.click());
    bgImageInput.addEventListener('change', () => {
        const file = bgImageInput.files && bgImageInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            try {
                localStorage.setItem(BG_IMAGE_KEY, base64);
                applyBgImage(base64);
            } catch (err) {
                alert('Image is too large for storage.');
            }
        };
        reader.readAsDataURL(file);
    });
}

if (btnRemoveBgImage) {
    btnRemoveBgImage.addEventListener('click', () => {
        try {
            localStorage.removeItem(BG_IMAGE_KEY);
            localStorage.removeItem(BG_BLUR_KEY);
        } catch (e) {}
        if (bgImageInput) bgImageInput.value = '';
        if (chkBgBlur) chkBgBlur.checked = false;
        applyBgImage(null);
    });
}

// --- Custom Placeholder (Feature 5) ---
const CUSTOM_PLACEHOLDER_KEY = 'custom_placeholder';

if (customPlaceholderInput) {
    customPlaceholderInput.value = localStorage.getItem(CUSTOM_PLACEHOLDER_KEY) || '';
    customPlaceholderInput.addEventListener('input', () => {
        const val = customPlaceholderInput.value.trim();
        if (val) {
            localStorage.setItem(CUSTOM_PLACEHOLDER_KEY, val);
        } else {
            localStorage.removeItem(CUSTOM_PLACEHOLDER_KEY);
        }
        if (typeof updateSearchPlaceholder === 'function') updateSearchPlaceholder();
    });
}

if (btnResetPlaceholder) {
    btnResetPlaceholder.addEventListener('click', () => {
        localStorage.removeItem(CUSTOM_PLACEHOLDER_KEY);
        if (customPlaceholderInput) customPlaceholderInput.value = '';
        if (typeof updateSearchPlaceholder === 'function') updateSearchPlaceholder();
    });
}

// --- Shadows Settings (Feature 6) ---
const SHADOWS_ENABLED_KEY = 'shadows_enabled';
const SHADOW_COLOR_KEY = 'shadow_color';

function hexToRgba(hex, alpha) {
    if (!hex || typeof hex !== 'string') return `rgba(0, 0, 0, ${alpha})`;
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    if (isNaN(num)) return `rgba(0, 0, 0, ${alpha})`;
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function updateShadows(enabled, color) {
    const root = document.documentElement;
    root.style.setProperty('--shadow-color', color);
    root.style.setProperty('--shadow-enabled', enabled ? '1' : '0');
    if (enabled) {
        root.style.setProperty('--shadow-modal', `0 32px 80px ${hexToRgba(color, 0.85)}, 0 0 0 1px rgba(255, 255, 255, 0.08)`);
        root.style.setProperty('--shadow-sidebar', `-10px 0 30px ${hexToRgba(color, 0.5)}`);
        root.style.setProperty('--shadow-sidebar-left', `10px 0 30px ${hexToRgba(color, 0.5)}`);
        root.style.setProperty('--shadow-hint', `0 2px 6px ${hexToRgba(color, 0.7)}`);
    } else {
        root.style.setProperty('--shadow-modal', 'none');
        root.style.setProperty('--shadow-sidebar', 'none');
        root.style.setProperty('--shadow-sidebar-left', 'none');
        root.style.setProperty('--shadow-hint', 'none');
    }
}

const SHADOWS_DEFAULT_V2_KEY = 'shadows_default_off_v2';

function getShadowSettings() {
    try {
        if (!localStorage.getItem(SHADOWS_DEFAULT_V2_KEY)) {
            localStorage.setItem(SHADOWS_DEFAULT_V2_KEY, '1');
            localStorage.setItem(SHADOWS_ENABLED_KEY, 'false');
            return { enabled: false, color: localStorage.getItem(SHADOW_COLOR_KEY) || '#000000' };
        }
    } catch (e) {}

    const val = localStorage.getItem(SHADOWS_ENABLED_KEY);
    const enabled = val === 'true';
    const color = localStorage.getItem(SHADOW_COLOR_KEY) || '#000000';
    return { enabled, color };
}

function applyShadowSettings(settings) {
    if (!settings) settings = getShadowSettings();
    try {
        localStorage.setItem(SHADOWS_ENABLED_KEY, settings.enabled ? 'true' : 'false');
        localStorage.setItem(SHADOW_COLOR_KEY, settings.color || '#000000');
    } catch (e) {}
    updateShadows(settings.enabled, settings.color || '#000000');
    if (chkShadowsEnabled) chkShadowsEnabled.checked = settings.enabled;
    if (pickerShadowColor) pickerShadowColor.value = settings.color || '#000000';
    if (shadowColorPreview) shadowColorPreview.textContent = (settings.color || '#000000').toUpperCase();
}

if (chkShadowsEnabled) {
    chkShadowsEnabled.addEventListener('change', () => {
        const s = getShadowSettings();
        s.enabled = chkShadowsEnabled.checked;
        applyShadowSettings(s);
    });
}

if (pickerShadowColor) {
    pickerShadowColor.addEventListener('input', () => {
        const s = getShadowSettings();
        s.color = pickerShadowColor.value;
        applyShadowSettings(s);
    });
}

// --- Cursor Shape Settings ---
const CARET_STYLE_KEY = 'caret_style';
const DEFAULT_CARET_STYLE = 'underline';

function getCaretStyle() {
    try {
        const stored = localStorage.getItem(CARET_STYLE_KEY);
        if (stored && ['underline', 'bar', 'block', 'highlight'].includes(stored)) {
            return stored;
        }
    } catch (e) {}
    return DEFAULT_CARET_STYLE;
}

function setCaretStyle(style) {
    if (!['underline', 'bar', 'block', 'highlight'].includes(style)) {
        style = DEFAULT_CARET_STYLE;
    }
    try {
        localStorage.setItem(CARET_STYLE_KEY, style);
    } catch (e) {}

    document.querySelectorAll('.cursor-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.style === style);
    });

    if (caret) {
        caret.className = 'custom-caret-' + style;
    }

    if (typeof updateCaret === 'function') {
        updateCaret();
    }
    if (typeof resetBlink === 'function') {
        resetBlink();
    }
}

document.querySelectorAll('.cursor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset && btn.dataset.style) {
            setCaretStyle(btn.dataset.style);
        }
    });
});

// --- Alias Redirect Animation ---
const ALIAS_ANIM_KEY = 'alias_redirect_animation';
const DEFAULT_ALIAS_ANIM = 'shimmer';
const VALID_ALIAS_ANIMS = ['shimmer', 'spinner', 'line', 'pulse', 'none'];

function getAliasRedirectAnimation() {
    try {
        const val = localStorage.getItem(ALIAS_ANIM_KEY);
        if (VALID_ALIAS_ANIMS.includes(val)) return val;
    } catch (e) {}
    return DEFAULT_ALIAS_ANIM;
}

let aliasDemoTimer = null;
function playAliasAnimDemo(style) {
    if (!style) style = getAliasRedirectAnimation();
    if (aliasDemoTimer) {
        clearTimeout(aliasDemoTimer);
        aliasDemoTimer = null;
    }

    if (aliasAnimPreviewBar) {
        aliasAnimPreviewBar.classList.remove('alias-loading', 'alias-anim-shimmer', 'alias-anim-spinner', 'alias-anim-line', 'alias-anim-pulse', 'alias-anim-none');
    }

    if (style === 'none') {
        return;
    }

    if (aliasAnimPreviewBar) {
        void aliasAnimPreviewBar.offsetWidth;
        aliasAnimPreviewBar.classList.add('alias-loading', `alias-anim-${style}`);
    }

    aliasDemoTimer = setTimeout(() => {
        if (aliasAnimPreviewBar) {
            aliasAnimPreviewBar.classList.remove('alias-loading', 'alias-anim-shimmer', 'alias-anim-spinner', 'alias-anim-line', 'alias-anim-pulse', 'alias-anim-none');
        }
        aliasDemoTimer = null;
    }, 1600);
}

function setAliasRedirectAnimation(style, playDemo = true) {
    if (!VALID_ALIAS_ANIMS.includes(style)) style = DEFAULT_ALIAS_ANIM;
    try {
        localStorage.setItem(ALIAS_ANIM_KEY, style);
    } catch (e) {}

    document.querySelectorAll('.alias-anim-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.anim === style);
    });

    if (playDemo) {
        playAliasAnimDemo(style);
    }
}

document.querySelectorAll('.alias-anim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset && btn.dataset.anim) {
            setAliasRedirectAnimation(btn.dataset.anim, true);
        }
    });
});

if (btnTestAliasAnim) {
    btnTestAliasAnim.addEventListener('click', () => {
        playAliasAnimDemo(getAliasRedirectAnimation());
    });
}

if (btnResetTheme) {
    btnResetTheme.addEventListener('click', () => {
        saveTheme({ ...DEFAULT_THEME });
        applyTheme({ ...DEFAULT_THEME });
        applyFont('Tektur');
        applyBgImage(null);
        setCaretStyle(DEFAULT_CARET_STYLE);
        setAliasRedirectAnimation(DEFAULT_ALIAS_ANIM, false);
        try {
            localStorage.removeItem(BG_IMAGE_KEY);
            localStorage.removeItem(BG_BLUR_KEY);
            localStorage.removeItem(SIDEBAR_BLUR_KEY);
            localStorage.removeItem(SIDEBAR_OPACITY_KEY);
            localStorage.removeItem(SIDEBAR_BLUR_AMOUNT_KEY);
            localStorage.removeItem(CUSTOM_PLACEHOLDER_KEY);
            localStorage.removeItem(ALIAS_ANIM_KEY);
        } catch (e) {}
        if (bgImageInput) bgImageInput.value = '';
        if (chkBgBlur) chkBgBlur.checked = false;
        setSidebarBlur(false);
        if (customPlaceholderInput) customPlaceholderInput.value = '';
        applyShadowSettings({ enabled: false, color: '#000000' });
        if (typeof updateSearchPlaceholder === 'function') updateSearchPlaceholder();
    });
}

applyTheme(getTheme());
applyFont(localStorage.getItem(FONT_KEY) || 'Tektur');
applyBgImage(localStorage.getItem(BG_IMAGE_KEY));
applyShadowSettings(getShadowSettings());
setCaretStyle(getCaretStyle());
setAliasRedirectAnimation(getAliasRedirectAnimation(), false);

// ==========================================
// 4. Модальное окно настроек и вкладки
// ==========================================
function updateModalInfoBadge() {
    if (!modalInfoBadge || !modalInfoTooltip) return;
    const lang = getLanguage();
    const t = Object.assign({}, translations.en, translations[lang]);

    const activeContent = [tabHistoryContent, tabEngineContent, tabAliasContent, tabAiContent, tabShortcutsContent, tabThemeContent, tabLangContent, tabBackupContent].find(c => c && c.classList.contains('active'));

    if (activeContent === tabAliasContent) {
        modalInfoBadge.style.display = 'inline-flex';
        modalInfoTooltip.innerHTML = t.aliasDesc;
    } else if (activeContent === tabAiContent) {
        modalInfoBadge.style.display = 'inline-flex';
        modalInfoTooltip.innerHTML = t.aiDesc;
    } else {
        modalInfoBadge.style.display = 'none';
    }
}

function openModal() {
    if (input && typeof input.blur === 'function') input.blur();
    settingsModal.classList.add('active');
    renderHistory();
    renderAliases();
    if (typeof renderAiServices === 'function') renderAiServices();
    if (typeof renderSearchEngines === 'function') renderSearchEngines();
    if (typeof renderShortcuts === 'function') renderShortcuts();
    applyTheme(getTheme());

    const activeTabBtn = [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabAiBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn, tabBackupBtn].find(b => b && b.classList && typeof b.classList.contains === 'function' && b.classList.contains('active')) || tabHistoryBtn;
    if (activeTabBtn && typeof activeTabBtn.focus === 'function') {
        activeTabBtn.focus();
    }
    updateModalInfoBadge();
}

function closeModal() {
    if (typeof stopRecording === 'function') stopRecording();
    if (typeof stopRecordingAlias === 'function') stopRecordingAlias();
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
    if (typeof stopRecordingAlias === 'function') stopRecordingAlias();
    [tabHistoryBtn, tabEngineBtn, tabAliasBtn, tabAiBtn, tabShortcutsBtn, tabThemeBtn, tabLangBtn, tabBackupBtn].forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    [tabHistoryContent, tabEngineContent, tabAliasContent, tabAiContent, tabShortcutsContent, tabThemeContent, tabLangContent, tabBackupContent].forEach(content => {
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

    updateModalInfoBadge();

    if (activeContent === tabAliasContent && typeof showAliasListView === 'function') {
        showAliasListView();
    }
    if (activeContent === tabAiContent && typeof showAiListView === 'function') {
        showAiListView();
    }
}

function switchTabByOffset(offset) {
    const tabPairs = [
        { btn: tabHistoryBtn, content: tabHistoryContent },
        { btn: tabEngineBtn, content: tabEngineContent },
        { btn: tabAliasBtn, content: tabAliasContent },
        { btn: tabAiBtn, content: tabAiContent },
        { btn: tabShortcutsBtn, content: tabShortcutsContent },
        { btn: tabThemeBtn, content: tabThemeContent },
        { btn: tabLangBtn, content: tabLangContent },
        { btn: tabBackupBtn, content: tabBackupContent }
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
if (tabAiBtn) tabAiBtn.addEventListener('click', () => switchTab(tabAiBtn, tabAiContent));
if (tabShortcutsBtn) tabShortcutsBtn.addEventListener('click', () => switchTab(tabShortcutsBtn, tabShortcutsContent));
if (tabThemeBtn) tabThemeBtn.addEventListener('click', () => switchTab(tabThemeBtn, tabThemeContent));
if (tabLangBtn) tabLangBtn.addEventListener('click', () => switchTab(tabLangBtn, tabLangContent));
if (tabBackupBtn) tabBackupBtn.addEventListener('click', () => switchTab(tabBackupBtn, tabBackupContent));

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
    const custom = (localStorage.getItem(CUSTOM_PLACEHOLDER_KEY) || '').trim();
    if (custom) {
        input.placeholder = custom;
        return;
    }
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
const HISTORY_SAVING_KEY = 'history_saving_enabled';
const MAX_HISTORY = 500;
const MAX_HISTORY_QUERY_LENGTH = 280; // Защита от переполнения localStorage длинными текстами

function isHistorySavingEnabled() {
    const val = localStorage.getItem(HISTORY_SAVING_KEY);
    return val === null ? true : val === 'true';
}

function setHistorySavingEnabled(enabled) {
    try {
        localStorage.setItem(HISTORY_SAVING_KEY, enabled ? 'true' : 'false');
    } catch (e) {}
    if (chkHistorySaving) chkHistorySaving.checked = enabled;
}

if (chkHistorySaving) {
    chkHistorySaving.checked = isHistorySavingEnabled();
    chkHistorySaving.addEventListener('change', () => {
        setHistorySavingEnabled(chkHistorySaving.checked);
    });
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveToHistory(query) {
    if (!isHistorySavingEnabled()) return;
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

const ALIAS_SHORTCUTS_KEY = 'alias_shortcuts';

function getAliasShortcuts() {
    try {
        const stored = localStorage.getItem(ALIAS_SHORTCUTS_KEY);
        if (stored) return JSON.parse(stored);
    } catch (e) {}
    return {};
}

function saveAliasShortcuts(shortcuts) {
    try {
        localStorage.setItem(ALIAS_SHORTCUTS_KEY, JSON.stringify(shortcuts));
    } catch (e) {}
}

let recordingAliasKey = null;

function startRecordingAlias(key) {
    recordingAliasKey = key;
    renderAliases();
}

function stopRecordingAlias() {
    if (recordingAliasKey !== null) {
        recordingAliasKey = null;
        renderAliases();
    }
}

function showAliasRedirectLoading(target, finalUrl) {
    if (isRedirecting) return;
    isRedirecting = true;

    if (typeof closeSidebar === 'function' && typeof isSidebarOpen !== 'undefined' && isSidebarOpen) {
        closeSidebar();
    }

    const animStyle = getAliasRedirectAnimation();

    if (input) {
        // Очищаем автозаполнение
        if (ghostTyped) ghostTyped.textContent = '';
        if (ghostSuffix) ghostSuffix.textContent = '';
        currentSuggestion = null;

        // Форматируем красивый адрес для отображения
        const displayTarget = String(target).trim().replace(/^https?:\/\//i, '');
        input.value = displayTarget;
        input.readOnly = true;
        autoResizeInput();
        input.focus();

        if (animStyle !== 'none') {
            const wrapper = input.closest('.input-wrapper');
            if (wrapper) {
                wrapper.classList.remove('alias-anim-shimmer', 'alias-anim-spinner', 'alias-anim-line', 'alias-anim-pulse', 'alias-anim-none');
                wrapper.classList.add('alias-loading', `alias-anim-${animStyle}`);
            }
        }
    }

    window.location.href = finalUrl;
}

function navigateToTarget(target) {
    if (!target) return;
    target = target.trim();
    const aiTarget = typeof resolveAiQuery === 'function' ? resolveAiQuery(target) : null;
    if (aiTarget) {
        showAliasRedirectLoading(target, aiTarget);
        return;
    }
    const url = typeof getUrl === 'function' ? getUrl(target) : null;
    let finalUrl = '';
    if (url) {
        finalUrl = url;
    } else if (target.includes('://')) {
        finalUrl = target;
    } else {
        const engineId = typeof getSearchEngine === 'function' ? getSearchEngine() : DEFAULT_ENGINE;
        const engine = (typeof SEARCH_ENGINES !== 'undefined' && SEARCH_ENGINES[engineId]) || { searchUrl: 'https://www.google.com/search?q=' };
        finalUrl = engine.searchUrl + encodeURIComponent(target);
    }

    showAliasRedirectLoading(target, finalUrl);
}

let editingAliasKey = null;

function showAliasListView() {
    if (aliasViewList) aliasViewList.style.display = 'flex';
    if (aliasViewForm) aliasViewForm.style.display = 'none';
    editingAliasKey = null;
    if (aliasKeyInput) aliasKeyInput.value = '';
    if (aliasUrlInput) aliasUrlInput.value = '';
    if (aliasShortcutInput) aliasShortcutInput.value = '';
}

function showAliasFormView(isEditing = false) {
    if (aliasViewList) aliasViewList.style.display = 'none';
    if (aliasViewForm) aliasViewForm.style.display = 'flex';
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    if (aliasFormTitle) aliasFormTitle.textContent = isEditing ? (t.aliasEditTitle || 'Edit Shortcut') : (t.aliasAddTitle || 'Add Shortcut');
    if (aliasSubmitBtn) aliasSubmitBtn.textContent = isEditing ? (t.aliasUpdateBtn || 'Save') : (t.aliasAddBtn || 'Add');
    if (aliasCancelBtn) aliasCancelBtn.textContent = t.aliasCancelBtn || 'Cancel';
    if (isEditing && aliasUrlInput) {
        aliasUrlInput.focus();
    } else if (aliasKeyInput) {
        aliasKeyInput.focus();
    }
}

function startEditingAlias(key) {
    editingAliasKey = key;
    if (key) {
        const aliases = getAliases();
        const shortcuts = getAliasShortcuts();
        if (aliasKeyInput) aliasKeyInput.value = key;
        if (aliasUrlInput) aliasUrlInput.value = aliases[key] || '';
        if (aliasShortcutInput) aliasShortcutInput.value = formatShortcutDisplay(shortcuts[key] || '');
        showAliasFormView(true);
    } else {
        if (aliasKeyInput) aliasKeyInput.value = '';
        if (aliasUrlInput) aliasUrlInput.value = '';
        if (aliasShortcutInput) aliasShortcutInput.value = '';
        showAliasFormView(false);
    }
}

if (btnOpenAliasForm) {
    btnOpenAliasForm.addEventListener('click', () => {
        startEditingAlias(null);
    });
}

if (btnAliasBack) {
    btnAliasBack.addEventListener('click', () => {
        showAliasListView();
    });
}

if (aliasCancelBtn) {
    aliasCancelBtn.addEventListener('click', () => {
        showAliasListView();
    });
}

function deleteAlias(key) {
    const aliases = getAliases();
    delete aliases[key];
    saveAliases(aliases);
    const shortcuts = getAliasShortcuts();
    if (shortcuts[key]) {
        delete shortcuts[key];
        saveAliasShortcuts(shortcuts);
    }
    renderAliases();
    updateSuggestion();
}

if (aliasShortcutInput) {
    aliasShortcutInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') return;
        e.preventDefault();
        if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'Delete') {
            aliasShortcutInput.value = '';
            return;
        }
        const combo = formatShortcutFromEvent(e);
        if (combo) {
            aliasShortcutInput.value = combo;
        }
    });
}

aliasForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = aliasKeyInput.value.trim();
    const url = aliasUrlInput.value.trim();
    const shortcut = aliasShortcutInput ? aliasShortcutInput.value.trim() : '';
    if (key && url) {
        const aliases = getAliases();
        const sc = getAliasShortcuts();

        if (editingAliasKey && editingAliasKey !== key) {
            delete aliases[editingAliasKey];
            if (sc[editingAliasKey]) delete sc[editingAliasKey];
        }

        aliases[key] = url;
        saveAliases(aliases);

        if (shortcut) {
            sc[key] = shortcut;
        } else if (sc[key]) {
            delete sc[key];
        }
        saveAliasShortcuts(sc);

        showAliasListView();
        renderAliases();
        updateSuggestion();
    }
});

function renderAliases() {
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    const aliases = getAliases();
    const aliasShortcuts = getAliasShortcuts();
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
        leftDiv.style.flex = '1';
        leftDiv.style.marginRight = '12px';

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

        const rightDiv = document.createElement('div');
        rightDiv.style.display = 'flex';
        rightDiv.style.alignItems = 'center';
        rightDiv.style.gap = '8px';
        rightDiv.style.flexShrink = '0';

        const shortcutBadge = document.createElement('span');
        shortcutBadge.className = 'shortcut-badge alias-shortcut-badge';
        const shortcutStr = aliasShortcuts[key];
        if (recordingAliasKey === key) {
            shortcutBadge.classList.add('recording');
            shortcutBadge.textContent = t.shortcutRecording || 'Press keys...';
        } else if (shortcutStr) {
            shortcutBadge.textContent = formatShortcutDisplay(shortcutStr);
        } else {
            shortcutBadge.classList.add('empty');
            shortcutBadge.textContent = t.shortcutNotSet || 'Click to set';
        }
        shortcutBadge.title = t.aliasShortcutTooltip || 'Click to record hotkey';
        shortcutBadge.addEventListener('click', (e) => {
            e.stopPropagation();
            if (recordingAliasKey === key) {
                stopRecordingAlias();
            } else {
                startRecordingAlias(key);
            }
        });
        rightDiv.appendChild(shortcutBadge);

        const recordBtn = document.createElement('button');
        recordBtn.className = 'item-record-btn';
        recordBtn.type = 'button';
        recordBtn.title = t.aliasRecordTooltip || 'Record shortcut';
        recordBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>`;
        if (recordingAliasKey === key) {
            recordBtn.style.color = '#ff4757';
        }
        recordBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (recordingAliasKey === key) {
                stopRecordingAlias();
            } else {
                startRecordingAlias(key);
            }
        });
        rightDiv.appendChild(recordBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'item-action-btn';
        editBtn.type = 'button';
        editBtn.title = t.aliasEditTooltip || 'Edit';
        editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startEditingAlias(key);
        });
        rightDiv.appendChild(editBtn);

        const delBtn = document.createElement('button');
        delBtn.className = 'item-action-btn item-delete-btn';
        delBtn.type = 'button';
        delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        delBtn.title = t.aliasDeleteTooltip;
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteAlias(key);
        });
        rightDiv.appendChild(delBtn);

        row.appendChild(leftDiv);
        row.appendChild(rightDiv);
        aliasList.appendChild(row);
    });
}

document.addEventListener('click', (e) => {
    if (recordingAliasKey !== null) {
        if (!e.target.closest('.alias-shortcut-badge') && !e.target.closest('.item-record-btn')) {
            stopRecordingAlias();
        }
    }
});

// ==========================================
// 6c. AI чат-боты (AI Chat Routing)
// ==========================================
const AI_PROVIDERS = {
    chatgpt: {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/?q={q}',
        homeUrl: 'https://chatgpt.com/'
    },
    claude: {
        name: 'Claude',
        url: 'https://claude.ai/new?q={q}',
        homeUrl: 'https://claude.ai/'
    },
    deepseek: {
        name: 'DeepSeek',
        url: 'https://chat.deepseek.com/?q={q}',
        homeUrl: 'https://chat.deepseek.com/'
    },
    perplexity: {
        name: 'Perplexity',
        url: 'https://www.perplexity.ai/search?q={q}',
        homeUrl: 'https://www.perplexity.ai/'
    }
};

const AI_SERVICES_KEY = 'ai_services';
const DEFAULT_AI_SERVICES = [
    {
        prefix: '!ai',
        provider: 'chatgpt',
        name: 'ChatGPT',
        url: 'https://chatgpt.com/?q={q}'
    }
];

function getAiServices() {
    try {
        const stored = localStorage.getItem(AI_SERVICES_KEY);
        if (stored) {
            let list = JSON.parse(stored);
            if (Array.isArray(list) && list.length > 0) {
                // Ensure no Gemini remains from earlier tests
                list = list.filter(item => item && item.provider !== 'gemini' && (!item.url || !item.url.includes('gemini.google.com')));
                if (list.length > 0) return list;
            }
        }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_AI_SERVICES));
}

function saveAiServices(services) {
    try {
        localStorage.setItem(AI_SERVICES_KEY, JSON.stringify(services));
    } catch (e) {}
}

let editingAiPrefix = null;

function showAiListView() {
    if (aiViewList) aiViewList.style.display = 'flex';
    if (aiViewForm) aiViewForm.style.display = 'none';
    editingAiPrefix = null;
    if (aiPrefixInput) aiPrefixInput.value = '';
    if (aiNameInput) aiNameInput.value = '';
    if (aiUrlInput) aiUrlInput.value = '';
    if (aiProviderSelect) aiProviderSelect.value = 'chatgpt';
    if (aiCustomFields) aiCustomFields.style.display = 'none';
}

function showAiFormView(isEditing = false) {
    if (aiViewList) aiViewList.style.display = 'none';
    if (aiViewForm) aiViewForm.style.display = 'flex';
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    if (aiFormTitle) aiFormTitle.textContent = isEditing ? (t.aiEditTitle || 'Edit AI Bot') : (t.aiAddTitle || 'Add AI Bot');
    if (aiSubmitBtn) aiSubmitBtn.textContent = isEditing ? (t.aiUpdateBtn || 'Save') : (t.aiAddBtn || 'Add');
    if (aiCancelBtn) aiCancelBtn.textContent = t.aiCancelBtn || 'Cancel';
    if (aiPrefixInput) {
        aiPrefixInput.focus();
    }
}

function startEditingAiService(prefix) {
    editingAiPrefix = prefix;
    if (prefix) {
        const services = getAiServices();
        const item = services.find(s => s.prefix.toLowerCase() === prefix.toLowerCase());
        if (item) {
            if (aiPrefixInput) aiPrefixInput.value = item.prefix;
            if (item.provider && AI_PROVIDERS[item.provider]) {
                if (aiProviderSelect) aiProviderSelect.value = item.provider;
                if (aiCustomFields) aiCustomFields.style.display = 'none';
                if (aiNameInput) { aiNameInput.value = ''; aiNameInput.required = false; }
                if (aiUrlInput) { aiUrlInput.value = ''; aiUrlInput.required = false; }
            } else {
                if (aiProviderSelect) aiProviderSelect.value = 'custom';
                if (aiCustomFields) aiCustomFields.style.display = 'flex';
                if (aiNameInput) { aiNameInput.value = item.name || ''; aiNameInput.required = true; }
                if (aiUrlInput) { aiUrlInput.value = item.url || ''; aiUrlInput.required = true; }
            }
            showAiFormView(true);
            return;
        }
    }

    // Adding new
    if (aiPrefixInput) aiPrefixInput.value = '!ai';
    if (aiProviderSelect) aiProviderSelect.value = 'chatgpt';
    if (aiCustomFields) aiCustomFields.style.display = 'none';
    if (aiNameInput) { aiNameInput.value = ''; aiNameInput.required = false; }
    if (aiUrlInput) { aiUrlInput.value = ''; aiUrlInput.required = false; }
    showAiFormView(false);
}

if (btnOpenAiForm) {
    btnOpenAiForm.addEventListener('click', () => {
        startEditingAiService(null);
    });
}

if (btnAiBack) {
    btnAiBack.addEventListener('click', () => {
        showAiListView();
    });
}

if (aiCancelBtn) {
    aiCancelBtn.addEventListener('click', () => {
        showAiListView();
    });
}

if (btnResetAi) {
    btnResetAi.addEventListener('click', () => {
        saveAiServices(DEFAULT_AI_SERVICES);
        renderAiServices();
        updateSuggestion();
    });
}

if (aiProviderSelect) {
    aiProviderSelect.addEventListener('change', () => {
        const isCustom = aiProviderSelect.value === 'custom';
        if (aiCustomFields) {
            aiCustomFields.style.display = isCustom ? 'flex' : 'none';
        }
        if (aiNameInput) aiNameInput.required = isCustom;
        if (aiUrlInput) aiUrlInput.required = isCustom;
        if (isCustom && aiNameInput) aiNameInput.focus();
    });
}

if (aiForm) {
    aiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let prefix = aiPrefixInput.value.trim();
        if (!prefix) return;
        if (!prefix.startsWith('!')) prefix = '!' + prefix;

        const provider = aiProviderSelect.value;
        let name = '';
        let url = '';

        if (provider && AI_PROVIDERS[provider]) {
            name = AI_PROVIDERS[provider].name;
            url = AI_PROVIDERS[provider].url;
        } else {
            name = (aiNameInput.value || '').trim() || 'AI';
            url = (aiUrlInput.value || '').trim();
            if (!url) return;
            if (!url.includes('{q}')) {
                url += (url.includes('?') ? '&' : '?') + 'q={q}';
            }
        }

        const services = getAiServices();

        if (editingAiPrefix) {
            const idx = services.findIndex(s => s.prefix.toLowerCase() === editingAiPrefix.toLowerCase());
            if (idx !== -1) {
                services[idx] = { prefix, provider, name, url };
            } else {
                services.push({ prefix, provider, name, url });
            }
        } else {
            const existingIdx = services.findIndex(s => s.prefix.toLowerCase() === prefix.toLowerCase());
            if (existingIdx !== -1) {
                services[existingIdx] = { prefix, provider, name, url };
            } else {
                services.push({ prefix, provider, name, url });
            }
        }

        saveAiServices(services);
        showAiListView();
        renderAiServices();
        updateSuggestion();
    });
}

function deleteAiService(prefix) {
    let services = getAiServices();
    services = services.filter(s => s.prefix.toLowerCase() !== prefix.toLowerCase());
    saveAiServices(services);
    renderAiServices();
    updateSuggestion();
}

function renderAiServices() {
    if (!aiList) return;
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    const services = getAiServices();
    aiList.innerHTML = '';

    if (services.length === 0) {
        aiList.innerHTML = `<div class="empty-state">${t.aiEmpty || 'No AI services configured'}</div>`;
        return;
    }

    services.forEach(item => {
        const row = document.createElement('div');
        row.className = 'list-item';

        const leftDiv = document.createElement('div');
        leftDiv.style.display = 'flex';
        leftDiv.style.alignItems = 'center';
        leftDiv.style.minWidth = '0';
        leftDiv.style.overflow = 'hidden';
        leftDiv.style.flex = '1';
        leftDiv.style.marginRight = '12px';

        const badge = document.createElement('span');
        badge.className = 'alias-badge';
        badge.style.color = 'var(--text-color, #ffffff)';
        badge.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        badge.textContent = item.prefix;

        const arrow = document.createElement('span');
        arrow.className = 'alias-arrow';
        arrow.textContent = '→';

        const nameSpan = document.createElement('span');
        nameSpan.style.fontWeight = '600';
        nameSpan.style.marginRight = '6px';
        nameSpan.textContent = item.name;

        const target = document.createElement('span');
        target.className = 'alias-target';
        let displayUrl = item.url || '';
        try {
            const parsed = new URL(displayUrl.replace('{q}', ''));
            displayUrl = parsed.hostname;
        } catch (e) {}
        target.textContent = displayUrl ? `(${displayUrl})` : '';

        leftDiv.appendChild(badge);
        leftDiv.appendChild(arrow);
        leftDiv.appendChild(nameSpan);
        leftDiv.appendChild(target);

        const rightDiv = document.createElement('div');
        rightDiv.className = 'item-actions-wrap';

        const editBtn = document.createElement('button');
        editBtn.className = 'item-action-btn';
        editBtn.type = 'button';
        editBtn.title = t.aiEditTooltip || 'Edit';
        editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startEditingAiService(item.prefix);
        });

        const delBtn = document.createElement('button');
        delBtn.className = 'item-action-btn item-delete-btn';
        delBtn.type = 'button';
        delBtn.title = t.aiDeleteTooltip || 'Delete';
        delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteAiService(item.prefix);
        });

        rightDiv.appendChild(editBtn);
        rightDiv.appendChild(delBtn);

        row.appendChild(leftDiv);
        row.appendChild(rightDiv);
        aiList.appendChild(row);
    });
}

function resolveAiQuery(query) {
    if (!query) return null;
    const trimmed = query.trim();
    const services = getAiServices();

    services.sort((a, b) => (b.prefix || '').length - (a.prefix || '').length);

    for (const service of services) {
        if (!service || !service.prefix) continue;
        const prefix = service.prefix.trim();
        const prefixLower = prefix.toLowerCase();
        const queryLower = trimmed.toLowerCase();

        let prompt = null;
        if (queryLower === prefixLower) {
            prompt = '';
        } else if (queryLower.startsWith(prefixLower + ' ')) {
            prompt = trimmed.slice(prefix.length).trim();
        }

        if (prompt !== null) {
            if (!prompt) {
                if (service.provider && AI_PROVIDERS[service.provider] && AI_PROVIDERS[service.provider].homeUrl) {
                    return AI_PROVIDERS[service.provider].homeUrl;
                }
                let cleanUrl = (service.url || '').replace(/[?&]q=\{q\}/i, '').replace(/[?&]q=/i, '').replace('{q}', '');
                return cleanUrl || service.url;
            }
            if (service.url && service.url.includes('{q}')) {
                return service.url.replace('{q}', encodeURIComponent(prompt));
            }
            return service.url ? `${service.url}${encodeURIComponent(prompt)}` : null;
        }
    }

    return null;
}

// ==========================================
// 6b. Горячие клавиши (Shortcuts)
// ==========================================
const SHORTCUTS_KEY = 'app_shortcuts';
const DEFAULT_SHORTCUTS = {
    openSettings: isMac ? 'Cmd+I' : 'Ctrl+I',
    toggleSidebar: isMac ? 'Cmd+B' : 'Ctrl+B',
    toggleFullscreen: '',
    collapseBookmarks: '',
    expandBookmarks: '',
    pinSidebar: ''
};

function getShortcuts() {
    try {
        const stored = localStorage.getItem(SHORTCUTS_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            const res = Object.assign({}, DEFAULT_SHORTCUTS, parsed);
            if (isMac) {
                if (res.openSettings === 'Ctrl+I') res.openSettings = 'Cmd+I';
                if (res.toggleSidebar === 'Ctrl+B') res.toggleSidebar = 'Cmd+B';
            } else {
                if (res.openSettings === 'Cmd+I') res.openSettings = 'Ctrl+I';
                if (res.toggleSidebar === 'Cmd+B') res.toggleSidebar = 'Ctrl+B';
            }
            return res;
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
    if (isMac) {
        if (e.metaKey) parts.push('Cmd');
        if (e.ctrlKey) parts.push('Ctrl');
        if (e.altKey) parts.push('Opt');
        if (e.shiftKey) parts.push('Shift');
    } else {
        if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
        if (e.altKey) parts.push('Alt');
        if (e.shiftKey) parts.push('Shift');
    }

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
    const wantsCmd = parts.includes('Cmd') || parts.includes('Command');
    const wantsCtrl = parts.includes('Ctrl') || parts.includes('Control');
    const wantsAlt = parts.includes('Alt') || parts.includes('Opt') || parts.includes('Option');
    const wantsShift = parts.includes('Shift');

    let ctrlMatch = false;
    if (isMac) {
        if (wantsCmd && wantsCtrl) {
            ctrlMatch = !!(e.metaKey && e.ctrlKey);
        } else if (wantsCmd) {
            ctrlMatch = !!e.metaKey && !e.ctrlKey;
        } else if (wantsCtrl) {
            ctrlMatch = !!(e.metaKey || e.ctrlKey);
        } else {
            ctrlMatch = !e.metaKey && !e.ctrlKey;
        }
    } else {
        if (wantsCtrl || wantsCmd) {
            ctrlMatch = !!(e.ctrlKey || e.metaKey);
        } else {
            ctrlMatch = !e.ctrlKey && !e.metaKey;
        }
    }
    if (!ctrlMatch) return false;

    const hasAlt = !!e.altKey;
    if (wantsAlt !== hasAlt) return false;

    const hasShift = !!e.shiftKey;
    if (wantsShift !== hasShift) return false;

    const keyPart = parts.find(p => !['Ctrl', 'Control', 'Cmd', 'Command', 'Alt', 'Opt', 'Option', 'Shift', 'Meta'].includes(p));
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
                badge.textContent = formatShortcutDisplay(val);
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
    hintElem.textContent = formatShortcutDisplay(shortcutStr);
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

    // 0. Поиск по AI сервисам
    let aiMatch = null;
    if (typeof getAiServices === 'function') {
        const aiServices = getAiServices();
        const found = aiServices.find(s => s && s.prefix && s.prefix.toLowerCase().startsWith(lowerVal) && s.prefix.toLowerCase() !== lowerVal);
        if (found) aiMatch = found.prefix;
    }

    if (aiMatch) {
        currentSuggestion = val + aiMatch.slice(val.length);
        ghostTyped.textContent = val;
        ghostSuffix.textContent = aiMatch.slice(val.length);
    } else {
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
    if (isRedirecting) return;

    if (document.activeElement !== input) {
        caret.style.display = 'none';
        return;
    }

    if (input.selectionStart !== input.selectionEnd) {
        caret.style.display = 'none';
        return;
    }

    const selStart = input.selectionStart ?? 0;
    const val = input.value || '';
    const textBefore = val.substring(0, selStart);
    const style = typeof getCaretStyle === 'function' ? getCaretStyle() : 'underline';

    caret.className = 'custom-caret-' + style;

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
        const charWidth = marker.offsetWidth;
        const charHeight = marker.offsetHeight;
        const charTop = marker.offsetTop - (input.scrollTop || 0);

        if (charTop < -20 || charTop > input.clientHeight + 10) {
            caret.style.display = 'none';
            return;
        }

        caret.style.display = 'block';

        if (style === 'bar') {
            const barHeight = Math.max(24, Math.round(charHeight * 0.85));
            const topOffset = charTop + Math.round((charHeight - barHeight) / 2);
            caret.style.left = left + 'px';
            caret.style.top = topOffset + 'px';
            caret.style.width = '2.5px';
            caret.style.height = barHeight + 'px';
            caret.style.bottom = 'auto';
        } else if (style === 'block') {
            const blockWidth = Math.max(16, charWidth);
            const blockHeight = Math.max(26, charHeight - 2);
            caret.style.left = left + 'px';
            caret.style.top = (charTop + 1) + 'px';
            caret.style.width = blockWidth + 'px';
            caret.style.height = blockHeight + 'px';
            caret.style.bottom = 'auto';
        } else if (style === 'highlight') {
            const hlWidth = Math.max(16, charWidth);
            const hlHeight = Math.max(26, charHeight - 2);
            caret.style.left = left + 'px';
            caret.style.top = (charTop + 1) + 'px';
            caret.style.width = hlWidth + 'px';
            caret.style.height = hlHeight + 'px';
            caret.style.bottom = 'auto';
        } else {
            // underline (по умолчанию)
            const width = Math.max(16, charWidth);
            const top = marker.offsetTop + charHeight - 5 - (input.scrollTop || 0);
            caret.style.left = left + 'px';
            caret.style.top = top + 'px';
            caret.style.width = width + 'px';
            caret.style.height = '5px';
            caret.style.bottom = 'auto';
        }
    } else {
        measureText.textContent = textBefore;
        const textWidth = measureText.getBoundingClientRect().width;
        let charWidth = 18;
        if (selStart < val.length) {
            measureChar.textContent = val[selStart];
            const w = measureChar.getBoundingClientRect().width;
            if (w > 0) charWidth = w;
        }
        caret.style.display = 'block';
        const left = 12 + textWidth;
        const inputH = input.offsetHeight || 70;

        if (style === 'bar') {
            const barH = 30;
            caret.style.left = left + 'px';
            caret.style.top = (inputH - barH - 18) + 'px';
            caret.style.width = '2.5px';
            caret.style.height = barH + 'px';
            caret.style.bottom = 'auto';
        } else if (style === 'block' || style === 'highlight') {
            caret.style.left = left + 'px';
            caret.style.top = (inputH - 36 - 15) + 'px';
            caret.style.width = charWidth + 'px';
            caret.style.height = '34px';
            caret.style.bottom = 'auto';
        } else {
            caret.style.left = left + 'px';
            caret.style.top = (inputH - 19) + 'px';
            caret.style.width = charWidth + 'px';
            caret.style.height = '5px';
            caret.style.bottom = 'auto';
        }
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
    const selector = '.engine-card, .lang-card, .color-circle, .pos-btn, .cursor-btn, .font-btn, .pill-btn, .shortcut-badge, .btn-secondary, .btn-primary, .item-text, input[type="checkbox"], input[type="color"]';
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
    } else if (el.classList && el.classList.contains('cursor-btn') && el.dataset && el.dataset.style) {
        setCaretStyle(el.dataset.style);
    } else if (el.classList && el.classList.contains('font-btn') && el.dataset && el.dataset.font) {
        applyFont(el.dataset.font);
    }
}

function isGridItem(focusable, idx) {
    if (!focusable || idx < 0 || idx >= focusable.length) return false;
    const el = focusable[idx];
    return el && el.classList && (el.classList.contains('color-circle') || el.classList.contains('pos-btn') || el.classList.contains('cursor-btn') || el.classList.contains('font-btn') || el.classList.contains('pill-btn'));
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
    if (el.classList.contains('cursor-btn') || el.classList.contains('font-btn') || el.classList.contains('pill-btn')) {
        const presets = el.parentElement;
        return presets && presets.firstElementChild === el;
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
    // 0. Если активна запись комбинации клавиш для алиаса
    if (recordingAliasKey !== null) {
        e.preventDefault();
        e.stopPropagation();

        if (e.key === 'Escape') {
            stopRecordingAlias();
            return;
        }

        if (e.key === 'Backspace' || e.key === 'Delete') {
            const shortcuts = getAliasShortcuts();
            delete shortcuts[recordingAliasKey];
            saveAliasShortcuts(shortcuts);
            stopRecordingAlias();
            return;
        }

        const combo = formatShortcutFromEvent(e);
        if (combo) {
            const shortcuts = getAliasShortcuts();
            shortcuts[recordingAliasKey] = combo;
            saveAliasShortcuts(shortcuts);
            stopRecordingAlias();
        }
        return;
    }

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
        if (isRedirecting) {
            isRedirecting = false;
            if (input) {
                input.readOnly = false;
                input.value = '';
                autoResizeInput();
                const wrapper = input.closest('.input-wrapper');
                if (wrapper) wrapper.classList.remove('alias-loading');
                updateCaret();
            }
            return;
        }
        if (onboardingOverlay && onboardingOverlay.style.display !== 'none') {
            finishOnboarding();
            return;
        }
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

    // Открытие / закрытие боковой панели (по умолчанию Ctrl+B / Cmd+B, с поддержкой Alt+B / Opt+B)
    if (eventMatchesShortcut(e, shortcuts.toggleSidebar) ||
        (e.altKey && (e.key === 'b' || e.key === 'B' || e.code === 'KeyB')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'b' || e.key === 'B' || e.code === 'KeyB')) ||
        (isMac && e.metaKey && (e.key === 'b' || e.key === 'B' || e.code === 'KeyB'))) {
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

    // Быстрый переход по горячим клавишам алиасов вне модального окна
    if (!settingsModal || !settingsModal.classList.contains('active')) {
        const aliasShortcuts = getAliasShortcuts();
        const aliases = getAliases();
        for (const [aliasKey, scStr] of Object.entries(aliasShortcuts)) {
            if (scStr && eventMatchesShortcut(e, scStr)) {
                e.preventDefault();
                const target = aliases[aliasKey];
                if (target) {
                    navigateToTarget(target);
                    return;
                }
            }
        }
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

    const aiTarget = typeof resolveAiQuery === 'function' ? resolveAiQuery(query) : null;
    if (aiTarget) {
        e.preventDefault();
        showAliasRedirectLoading(query, aiTarget);
        return;
    }

    const aliases = getAliases();
    const lower = query.toLowerCase();
    let isAlias = false;
    let aliasTarget = null;
    for (const [key, target] of Object.entries(aliases)) {
        if (key.toLowerCase() === lower) {
            isAlias = true;
            aliasTarget = target.trim();
            break;
        }
    }

    if (isAlias && aliasTarget) {
        e.preventDefault();
        navigateToTarget(aliasTarget);
        return;
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

const SIDEBAR_BLUR_KEY = 'sidebar_blur';
const SIDEBAR_OPACITY_KEY = 'sidebar_opacity';
const SIDEBAR_BLUR_AMOUNT_KEY = 'sidebar_blur_amount';
const DEFAULT_SIDEBAR_OPACITY = 40;
const DEFAULT_SIDEBAR_BLUR_AMOUNT = 20;

function isSidebarBlurEnabled() {
    try {
        return localStorage.getItem(SIDEBAR_BLUR_KEY) === 'true';
    } catch (e) {
        return false;
    }
}

function getSidebarOpacity() {
    try {
        const val = parseInt(localStorage.getItem(SIDEBAR_OPACITY_KEY), 10);
        if (!isNaN(val) && val >= 0 && val <= 100) return val;
    } catch (e) {}
    return DEFAULT_SIDEBAR_OPACITY;
}

function getSidebarBlurAmount() {
    try {
        const val = parseInt(localStorage.getItem(SIDEBAR_BLUR_AMOUNT_KEY), 10);
        if (!isNaN(val) && val >= 0 && val <= 45) return val;
    } catch (e) {}
    return DEFAULT_SIDEBAR_BLUR_AMOUNT;
}

function applySidebarBlurSettings() {
    const enabled = isSidebarBlurEnabled();
    const opacity = getSidebarOpacity();
    const blur = getSidebarBlurAmount();

    if (chkSidebarBlur) chkSidebarBlur.checked = enabled;
    if (sidebarBlurControls) sidebarBlurControls.style.display = enabled ? 'flex' : 'none';

    if (rangeSidebarOpacity) rangeSidebarOpacity.value = opacity;
    if (valSidebarOpacity) {
        valSidebarOpacity.textContent = opacity === 0 ? '0% (Transparent)' : (opacity + '%');
    }

    if (rangeSidebarBlur) rangeSidebarBlur.value = blur;
    if (valSidebarBlur) {
        valSidebarBlur.textContent = blur === 0 ? '0px (None)' : (blur + 'px');
    }

    document.querySelectorAll('.sidebar-preset-btn').forEach(btn => {
        const pOp = parseInt(btn.dataset.opacity, 10);
        const pBl = parseInt(btn.dataset.blur, 10);
        btn.classList.toggle('active', enabled && pOp === opacity && pBl === blur);
    });

    const root = document.documentElement;
    if (enabled) {
        const alpha = opacity / 100;
        const currentTheme = (typeof getTheme === 'function') ? getTheme() : { bg: '#000000' };
        const themeBg = currentTheme.bg || '#000000';
        const sidebarBg = hexToRgba(themeBg, alpha);
        root.style.setProperty('--sidebar-bg', sidebarBg);
        root.style.setProperty('--sidebar-blur', blur + 'px');
    } else {
        root.style.setProperty('--sidebar-bg', 'var(--bg-color)');
        root.style.setProperty('--sidebar-blur', '0px');
    }
}

function setSidebarBlur(enabled) {
    try {
        localStorage.setItem(SIDEBAR_BLUR_KEY, String(enabled));
    } catch (e) {}
    applySidebarBlurSettings();
}

function setSidebarOpacity(opacity) {
    opacity = Math.max(0, Math.min(100, parseInt(opacity, 10) || 0));
    try {
        localStorage.setItem(SIDEBAR_OPACITY_KEY, String(opacity));
    } catch (e) {}
    applySidebarBlurSettings();
}

function setSidebarBlurAmount(blur) {
    blur = Math.max(0, Math.min(45, parseInt(blur, 10) || 0));
    try {
        localStorage.setItem(SIDEBAR_BLUR_AMOUNT_KEY, String(blur));
    } catch (e) {}
    applySidebarBlurSettings();
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

let sidebarHoverSuppressed = false;
let sidebarHoverSuppressedTimer = null;

function suppressSidebarHover(duration = 450) {
    sidebarHoverSuppressed = true;
    if (sidebarHoverSuppressedTimer) clearTimeout(sidebarHoverSuppressedTimer);
    sidebarHoverSuppressedTimer = setTimeout(() => {
        sidebarHoverSuppressed = false;
        sidebarHoverSuppressedTimer = null;
    }, duration);
}

// Открытие и закрытие боковой панели
function openSidebar(instant = false) {
    if (sidebarLeaveTimer) {
        clearTimeout(sidebarLeaveTimer);
        sidebarLeaveTimer = null;
    }
    if (isSidebarOpen) return;
    if (settingsModal && settingsModal.classList.contains('active')) return;
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
    suppressSidebarHover();
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
                icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;color:var(--text-color, #ffffff);opacity:0.6;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
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

    const SIDEBAR_TRIGGER_WIDTH = 364;

    // Наведение на полосу активации
    if (sidebarTrigger) {
        sidebarTrigger.addEventListener('mouseenter', () => {
            if (sidebarHoverSuppressed) return;
            if (settingsModal && settingsModal.classList.contains('active')) return;
            openSidebar();
        });
    }

    // Наведение курсора к активной зоне боковой панели (слева или справа)
    document.addEventListener('mousemove', (e) => {
        const pos = getSidebarPosition();
        const isInsideZone = (pos === 'left')
            ? (e.clientX <= SIDEBAR_TRIGGER_WIDTH)
            : (e.clientX >= window.innerWidth - SIDEBAR_TRIGGER_WIDTH);

        if (!isInsideZone) {
            sidebarHoverSuppressed = false;
            if (sidebarHoverSuppressedTimer) {
                clearTimeout(sidebarHoverSuppressedTimer);
                sidebarHoverSuppressedTimer = null;
            }
        } else if (!isSidebarOpen && !sidebarHoverSuppressed) {
            if (settingsModal && settingsModal.classList.contains('active')) return;
            openSidebar();
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

    if (chkSidebarBlur) {
        chkSidebarBlur.addEventListener('change', (e) => {
            setSidebarBlur(e.target.checked);
        });
    }

    if (rangeSidebarOpacity) {
        rangeSidebarOpacity.addEventListener('input', (e) => {
            setSidebarOpacity(e.target.value);
        });
    }

    if (rangeSidebarBlur) {
        rangeSidebarBlur.addEventListener('input', (e) => {
            setSidebarBlurAmount(e.target.value);
        });
    }

    document.querySelectorAll('.sidebar-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const op = btn.dataset.opacity;
            const bl = btn.dataset.blur;
            if (op !== undefined) setSidebarOpacity(op);
            if (bl !== undefined) setSidebarBlurAmount(bl);
        });
    });

    applySidebarBlurSettings();

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

// ==========================================
// 12. Интерактивный гид первого визита (Onboarding Guide)
// ==========================================
const ONBOARDING_KEY = 'onboarding_done';
let currentOnboardingStep = 1;

function updateOnboardingStep(step) {
    if (!onboardingOverlay || !onboardingSpotlight || !onboardingCard) return;
    currentOnboardingStep = step;

    const lang = getLanguage();
    const t = translations[lang] || translations.en;

    if (onboardingStepBadge) {
        onboardingStepBadge.textContent = `${step} / 4`;
    }
    if (onboardingSkipBtn) {
        onboardingSkipBtn.textContent = t.onboardingSkip || 'Skip';
    }
    if (onboardingNextBtn) {
        onboardingNextBtn.textContent = step === 4 ? (t.onboardingDone || 'Got it!') : (t.onboardingNext || 'Next');
    }

    const topActions = document.querySelector('.top-actions');
    if (topActions) {
        if (step === 1 || step === 2) {
            topActions.classList.add('onboarding-highlight');
        } else {
            topActions.classList.remove('onboarding-highlight');
        }
    }

    let targetEl = null;
    let cardPos = { top: 100, left: 100 };
    let text = '';

    if (step === 1) {
        text = t.onboardingStep1 || 'Hover the corner to reveal action buttons';
        targetEl = topActions;
    } else if (step === 2) {
        text = t.onboardingStep2 || 'Open Settings to customize everything';
        targetEl = btnSettings;
    } else if (step === 3) {
        text = t.onboardingStep3 || 'Type to search or go to any URL';
        targetEl = input;
    } else if (step === 4) {
        text = t.onboardingStep4 || 'Hover the edge to open your bookmarks';
        targetEl = sidebarTrigger;
    }

    if (onboardingText) {
        onboardingText.textContent = text;
    }

    const padding = 8;
    const cardWidth = 320;
    const cardHeight = onboardingCard.offsetHeight || 140;

    if (step === 4) {
        const pos = getSidebarPosition();
        const edgeWidth = 24;
        const spotlightTop = 0;
        const spotlightLeft = pos === 'left' ? 0 : (window.innerWidth - edgeWidth);
        const spotlightWidth = edgeWidth;
        const spotlightHeight = window.innerHeight;

        onboardingSpotlight.style.top = `${spotlightTop}px`;
        onboardingSpotlight.style.left = `${spotlightLeft}px`;
        onboardingSpotlight.style.width = `${spotlightWidth}px`;
        onboardingSpotlight.style.height = `${spotlightHeight}px`;

        cardPos.top = Math.max(20, Math.floor(window.innerHeight / 2 - cardHeight / 2));
        cardPos.left = pos === 'left' ? (edgeWidth + 24) : (window.innerWidth - cardWidth - edgeWidth - 24);
    } else if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const spotlightTop = Math.max(0, rect.top - padding);
        const spotlightLeft = Math.max(0, rect.left - padding);
        const spotlightWidth = rect.width + padding * 2;
        const spotlightHeight = rect.height + padding * 2;

        onboardingSpotlight.style.top = `${spotlightTop}px`;
        onboardingSpotlight.style.left = `${spotlightLeft}px`;
        onboardingSpotlight.style.width = `${spotlightWidth}px`;
        onboardingSpotlight.style.height = `${spotlightHeight}px`;

        if (step === 1 || step === 2) {
            cardPos.top = spotlightTop + spotlightHeight + 14;
            cardPos.left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, spotlightLeft));
        } else if (step === 3) {
            cardPos.top = spotlightTop + spotlightHeight + 20;
            cardPos.left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, rect.left + (rect.width - cardWidth) / 2));
        }
    } else {
        onboardingSpotlight.style.top = '20px';
        onboardingSpotlight.style.left = '20px';
        onboardingSpotlight.style.width = '100px';
        onboardingSpotlight.style.height = '40px';
        cardPos.top = 80;
        cardPos.left = 20;
    }

    cardPos.top = Math.max(16, Math.min(window.innerHeight - cardHeight - 16, cardPos.top));
    cardPos.left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, cardPos.left));

    onboardingCard.style.top = `${cardPos.top}px`;
    onboardingCard.style.left = `${cardPos.left}px`;
}

function startOnboarding() {
    if (!onboardingOverlay) return;
    onboardingOverlay.style.display = 'block';
    updateOnboardingStep(1);
}

function finishOnboarding() {
    if (!onboardingOverlay) return;
    onboardingOverlay.style.display = 'none';
    try {
        localStorage.setItem(ONBOARDING_KEY, 'true');
    } catch (e) {}
    const topActions = document.querySelector('.top-actions');
    if (topActions) topActions.classList.remove('onboarding-highlight');
    currentOnboardingStep = 1;
}

if (onboardingNextBtn) {
    onboardingNextBtn.addEventListener('click', () => {
        if (currentOnboardingStep < 4) {
            updateOnboardingStep(currentOnboardingStep + 1);
        } else {
            finishOnboarding();
        }
    });
}

if (onboardingSkipBtn) {
    onboardingSkipBtn.addEventListener('click', finishOnboarding);
}

window.addEventListener('resize', () => {
    if (onboardingOverlay && onboardingOverlay.style.display !== 'none') {
        updateOnboardingStep(currentOnboardingStep);
    }
});

// ==========================================
// 13. Резервное копирование и восстановление (Backup & Restore)
// ==========================================
function exportConfig() {
    try {
        const config = {
            version: 1,
            appName: 'New Tab Extension',
            exportedAt: new Date().toISOString(),
            settings: {
                theme_bg: localStorage.getItem('theme_bg'),
                theme_text: localStorage.getItem('theme_text'),
                app_font: localStorage.getItem('app_font'),
                bg_image: localStorage.getItem('bg_image'),
                bg_blur: localStorage.getItem('bg_blur'),
                custom_placeholder: localStorage.getItem('custom_placeholder'),
                caret_style: localStorage.getItem('caret_style'),
                shadows_enabled: localStorage.getItem('shadows_enabled'),
                shadow_color: localStorage.getItem('shadow_color'),
                app_lang: localStorage.getItem('app_lang'),
                search_engine: localStorage.getItem('search_engine'),
                search_aliases: localStorage.getItem('search_aliases'),
                alias_shortcuts: localStorage.getItem('alias_shortcuts'),
                ai_services: localStorage.getItem('ai_services'),
                app_shortcuts: localStorage.getItem('app_shortcuts'),
                shortcut_hints_enabled: localStorage.getItem('shortcut_hints_enabled'),
                history_saving_enabled: localStorage.getItem('history_saving_enabled'),
                idea_sidebar_position: localStorage.getItem('idea_sidebar_position'),
                idea_sidebar_pinned: localStorage.getItem('idea_sidebar_pinned'),
                sidebar_blur: localStorage.getItem('sidebar_blur'),
                sidebar_opacity: localStorage.getItem('sidebar_opacity'),
                sidebar_blur_amount: localStorage.getItem('sidebar_blur_amount'),
                alias_redirect_animation: localStorage.getItem('alias_redirect_animation'),
                onboarding_done: localStorage.getItem('onboarding_done')
            }
        };
        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const dateStr = new Date().toISOString().slice(0, 10);
        a.download = `newtab-config-${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        console.error('Export failed:', e);
    }
}

function showBackupStatus(success) {
    if (!backupStatusMsg) return;
    const lang = getLanguage();
    const t = translations[lang] || translations.en;
    backupStatusMsg.textContent = success ? (t.importSuccess || 'Config imported!') : (t.importError || 'Invalid config file');
    backupStatusMsg.style.color = success ? '#00ff66' : '#ff4757';
    backupStatusMsg.style.display = 'block';
    setTimeout(() => {
        if (backupStatusMsg) backupStatusMsg.style.display = 'none';
    }, 4000);
}

function importConfig(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid JSON structure');
            }
            const settings = (data.settings && typeof data.settings === 'object') ? data.settings : data;
            const validKeys = [
                'theme_bg', 'theme_text', 'app_font', 'bg_image', 'bg_blur', 'custom_placeholder',
                'caret_style', 'shadows_enabled', 'shadow_color', 'app_lang', 'search_engine',
                'search_aliases', 'app_aliases', 'alias_shortcuts', 'ai_services', 'app_shortcuts',
                'shortcut_hints_enabled', 'history_saving_enabled',
                'idea_sidebar_position', 'idea_sidebar_pinned', 'sidebar_blur', 'sidebar_opacity', 'sidebar_blur_amount', 'alias_redirect_animation', 'onboarding_done'
            ];

            let applied = 0;
            for (const key of validKeys) {
                if (settings[key] !== undefined && settings[key] !== null) {
                    let val = settings[key];
                    if (typeof val === 'object') val = JSON.stringify(val);
                    const targetKey = key === 'app_aliases' ? 'search_aliases' : key;
                    localStorage.setItem(targetKey, String(val));
                    applied++;
                }
            }

            if (applied === 0) {
                throw new Error('No compatible settings found');
            }

            // Переприменение всех настроек
            applyTheme(getTheme());
            applyFont(localStorage.getItem(FONT_KEY) || 'Tektur');
            applyBgImage(localStorage.getItem(BG_IMAGE_KEY));
            setBgBlur(localStorage.getItem(BG_BLUR_KEY) === 'true');
            applyShadowSettings();
            setCaretStyle(getCaretStyle());
            if (customPlaceholderInput) {
                customPlaceholderInput.value = localStorage.getItem(CUSTOM_PLACEHOLDER_KEY) || '';
            }
            updateSearchPlaceholder();
            if (chkHistorySaving) {
                chkHistorySaving.checked = isHistorySavingEnabled();
            }
            setLanguage(getLanguage());
            renderAliases();
            if (typeof renderAiServices === 'function') renderAiServices();
            if (typeof renderShortcuts === 'function') renderShortcuts();
            if (typeof renderSearchEngines === 'function') renderSearchEngines();
            if (typeof applySearchEngine === 'function') applySearchEngine(getSearchEngine());
            if (typeof updateShortcutButtonHints === 'function') updateShortcutButtonHints();
            if (typeof setSidebarPosition === 'function') setSidebarPosition(getSidebarPosition());
            setSidebarBlur(localStorage.getItem(SIDEBAR_BLUR_KEY) === 'true');
            setAliasRedirectAnimation(getAliasRedirectAnimation(), false);

            showBackupStatus(true);
        } catch (err) {
            console.error('Import failed:', err);
            showBackupStatus(false);
        } finally {
            if (importConfigInput) importConfigInput.value = '';
        }
    };
    reader.onerror = () => {
        showBackupStatus(false);
        if (importConfigInput) importConfigInput.value = '';
    };
    reader.readAsText(file);
}

if (btnExportConfig) {
    btnExportConfig.addEventListener('click', exportConfig);
}

if (importConfigInput) {
    importConfigInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            importConfig(file);
        }
    });
}

// ==========================================
// 14. Восстановление состояния при загрузке страницы
// ==========================================
if (chkHistorySaving) {
    chkHistorySaving.checked = isHistorySavingEnabled();
}

if (!localStorage.getItem(ONBOARDING_KEY)) {
    setTimeout(() => {
        startOnboarding();
    }, 450);
}
