# CleanTab

CleanTab is a lightweight, distraction-free new tab environment engineered for Chromium-based browsers. Built on Manifest V3 with zero external runtime dependencies, it prioritizes deterministic performance, privacy, and keyboard-driven ergonomics.

![CleanTab Demonstration](demo.gif)

## Abstract

Modern browser start pages are frequently encumbered by telemetry, resource-heavy widgets, and visual clutter. CleanTab addresses these inefficiencies by providing an austere, highly responsive interface centered around keyboard navigation, quick search routing, and local bookmark accessibility. All operations execute strictly within the client runtime without remote network dependencies.

## Key Features

### Input Interface and Search Resolution
CleanTab provides a unified, borderless input field supporting multi-line query composition, 2D cursor projection, and ghost-text auto-completion derived from historical inputs. The search dispatcher supports configurable search engines with customizable options and deterministic alias expansion for instantaneous local or remote URL routing.

### AI Dispatch and Assistant Routing
Direct keyboard routing to AI assistant platforms. CleanTab supports configurable AI service shortcuts, custom prompts, and single-key autocompletion (Tab). All prompts deep-link directly into the chat session without external telemetry.

### Customizable Alias Redirect Animations
Deterministic alias routing features five distinct transition styles configured under Appearance settings:
* **Shimmer** (default): A light gradient sweep across the target URL.
* **Spinner**: A discrete circular loading glyph integrated into the input bar.
* **Line**: A flat, 2px progress sweep anchored to the bottom edge.
* **Pulse**: Subtle opacity cycling on the resolved target text.
* **None**: Instantaneous client navigation with zero transition effects.

All transitions run without artificial delay (`window.location.href` executes immediately) and feature zero-shadow flat styling. An interactive live preview container in Settings allows testing animations before applying.

### Native macOS & Cross-Platform Keyboard Adaptation
Automatic platform detection seamlessly adapts keyboard shortcuts:
* **macOS**: Hotkeys and UI hints display `Cmd` (`⌘`) and `Opt` (`⌥`), listening on `metaKey`.
* **Windows / Linux**: Hotkeys display `Ctrl` and `Alt`.
Shortcuts throughout the application, button badges, onboarding guides, and modals automatically format according to the host system.

### Bookmarks Subsystem
An integrated, collapsible bookmarks drawer provides hierarchical tree traversal, real-time filtering, node persistence (pinning), and direct deletion workflows through standard browser APIs. The drawer supports configurable placement (Left or Right) and an optional translucent blur effect.

### Theming, Typography & Cursor Engine
* **Font Selection**: Choose from high-legibility typefaces including Tektur, Inter, Roboto, JetBrains Mono, Fira Code, Outfit, DM Sans, Poppins, Nunito, and Space Grotesk.
* **Cursor Styling**: 4 selectable 2D projected caret representations: `Underline`, `Vertical Bar`, `Block`, and `Highlight`.
* **Custom Wallpapers**: Local image upload with an optional toggleable Gaussian blur backdrop.
* **Palette Engine**: Dynamic palette recomputation via CSS Custom Properties with preset and custom hexadecimal color support.
* **Flat Borderless Aesthetic**: Clean, modern controls with pill-grid selections and borderless search inputs.

### Configuration Backup & Portability
A dedicated Backup module allows one-click export and import of all settings (themes, fonts, custom aliases, shortcuts, AI services, and UI preferences) via structured JSON files with schema validation.

### Internationalization
Full localization across 11 languages: English, Russian, Uzbek, Spanish, Portuguese, German, Chinese, Japanese, Korean, Arabic, and Hindi.

### Interactive Onboarding
A non-intrusive first-run walkthrough introducing key gestures, corner buttons, bookmarks drawer access, and customization options.

### Keyboard Architecture
All primary workflows can be executed without pointer devices. Key bindings are handled by a dedicated dispatcher that isolates input focus, supports custom key combinations, and facilitates tab navigation within modal interfaces.

### Privacy and Data Isolation
CleanTab adheres to strict local data isolation:
* No telemetry, analytics, or background tracking scripts.
* No outbound connections to third-party endpoints.
* Configuration, aliases, and search history reside exclusively in browser-managed local storage.

## Installation

### Manual Installation via Chromium Developer Mode

1. Clone the repository to your local workstation:
   ```bash
   git clone https://github.com/happy2111/CleanTab.git
   ```
2. Open your Chromium-based browser and navigate to the extension management interface:
   ```text
   chrome://extensions/
   ```
3. Enable Developer Mode via the toggle switch in the upper-right corner.
4. Select "Load unpacked" and choose the directory containing `manifest.json`.
5. Open a new browser tab to initialize the environment.

## Default Key Bindings

| Key (Windows / Linux) | Key (macOS) | Action |
| :--- | :--- | :--- |
| `Ctrl + B` / `Alt + B` | `Cmd + B` / `Opt + B` | Toggle Bookmarks Drawer |
| `Ctrl + ,` | `Cmd + ,` | Open Settings Dialogue |
| `F11` / Double Click | `F11` / Double Click | Toggle Fullscreen Display |
| `Tab` | `Tab` | Accept Autocomplete Suggestion |
| `Escape` | `Escape` | Dismiss Open Drawer or Modal |
| `Q` / `E` | `Q` / `E` | Navigate Tabs within Settings Dialogue |

Key bindings can be customized within the Settings panel.

## Technical Specifications

* Platform: Chromium Manifest V3
* Dependencies: Zero external runtime dependencies
* Storage Engine: HTML5 Web Storage (`localStorage`)
* Browser Permissions: `bookmarks`, `favicon`

## License

This software is released under the MIT License. See [LICENSE](LICENSE) for terms.
