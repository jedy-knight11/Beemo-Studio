---
name: pixelrag
description: Visual web page and document inspection skill powered by PixelRAG / pixelshot. Use when you need to render and audit web pages or local development servers across desktop and mobile viewports, inspect visual layouts, detect broken components or assets, check responsiveness, and diagnose loading issues.
---

# PixelRAG Visual Inspection & Page QA Skill

Use this skill to capture visual screenshots and image tiles of websites, local web apps, PDFs, and HTML documents using PixelRAG's `pixelshot` rendering engine.

## When to Use

- Inspecting web pages across **Desktop** and **Mobile** viewports.
- Auditing visual layout, alignment, typography, and responsive design.
- Finding broken UI components, unrendered JavaScript states, missing images, or failed assets.
- Performing visual QA before and after frontend changes.

---

## Tool Command Reference

The `pixelshot` executable is installed at:
`C:\Users\JEDY\AppData\Local\Python\pythoncore-3.14-64\Scripts\pixelshot.exe` (or accessible via python scripts in path).

### 1. Capture Desktop View (e.g. 1440px viewport)
```powershell
& "C:\Users\JEDY\AppData\Local\Python\pythoncore-3.14-64\Scripts\pixelshot.exe" "<URL_OR_LOCAL_PORT>" --viewport-width 1440 --wait-network-idle --output "<OUTPUT_DIR>/desktop"
```

### 2. Capture Mobile View (e.g. 390px viewport)
```powershell
& "C:\Users\JEDY\AppData\Local\Python\pythoncore-3.14-64\Scripts\pixelshot.exe" "<URL_OR_LOCAL_PORT>" --viewport-width 390 --wait-network-idle --output "<OUTPUT_DIR>/mobile"
```

### 3. Capture Multiple Pages / Routes in Batch
```powershell
& "C:\Users\JEDY\AppData\Local\Python\pythoncore-3.14-64\Scripts\pixelshot.exe" "http://localhost:3000/" "http://localhost:3000/about" "http://localhost:3000/dashboard" --viewport-width 1440 --wait-network-idle --output "<OUTPUT_DIR>"
```

---

## Workflow for Auditing Pages

1. **Start Local Dev Server (if auditing local code)**:
   - Ensure the app is running (e.g. `npm run dev`, `vite`, `next dev`).
2. **Execute `pixelshot` for both Desktop and Mobile**:
   - Render desktop at 1440px width and mobile at 390px width with `--wait-network-idle`.
   - Save output to the agent's scratch directory: `<appDataDir>\brain\<conversation-id>\scratch\pixelrag\<page_name>`.
3. **Inspect Rendered Tiles**:
   - Use `view_file` on the resulting JPEG tiles (`tile_0000.jpg`, etc.) located in the output directory.
4. **Visual & Functional QA Checklist**:
   - **Loading & Fallbacks**: Did skeleton loaders or spinners get stuck?
   - **Responsiveness**: Are elements overflowing, clipped, or wrapping awkwardly on mobile?
   - **Navigation & Modals**: Are hamburger menus, popups, and headers positioned correctly?
   - **Broken Media / Icons**: Are images 404ing or icon fonts failing to load?
   - **Color & Contrast**: Are buttons, text, and interactive elements readable and properly contrasted?
5. **Report & Fix**:
   - Point out specific bugs, visual regressions, or loading errors with exact file and line references in code.
