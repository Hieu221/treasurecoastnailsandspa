# Troubleshooting Guide

## Website Not Updating After Making Changes?

### Solution 1: Hard Refresh (Most Common Fix)

Browsers cache files to load pages faster. When you edit HTML/CSS/JS files, you need to force the browser to reload them.

**How to Hard Refresh:**

- **Mac**: Press `Cmd + Shift + R` (or `Cmd + Option + R`)
- **Windows/Linux**: Press `Ctrl + Shift + R` (or `Ctrl + F5`)

**Alternative Method:**
1. Open Developer Tools (F12 or Right-click → Inspect)
2. Right-click on the refresh button
3. Select "Empty Cache and Hard Reload"

### Solution 2: Make Sure File is Saved

1. Check if there's an unsaved changes indicator (usually a dot) in your editor
2. Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) to save
3. Make sure you saved `index.html` (not just looked at it)

### Solution 3: Clear Browser Cache

If hard refresh doesn't work:

**Chrome/Edge:**
1. Press `Cmd + Shift + Delete` (Mac) or `Ctrl + Shift + Delete` (Windows)
2. Select "Cached images and files"
3. Click "Clear data"

**Safari:**
1. Safari menu → Preferences → Advanced
2. Check "Show Develop menu"
3. Develop menu → Empty Caches

### Solution 4: Use a Local Server

If you're opening the file directly (`file://`), try using a local server instead:

```bash
# In the project folder, run:
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Solution 5: Close and Reopen Browser

Sometimes closing all browser tabs/windows and reopening helps clear the cache.

---

## Quick Checklist

- [ ] Did you save the file? (`Cmd + S` or `Ctrl + S`)
- [ ] Did you try a hard refresh? (`Cmd + Shift + R`)
- [ ] Are you viewing the correct file?
- [ ] Try closing and reopening the browser
- [ ] Check browser console for errors (F12)

---

## Why This Happens

Browsers cache files to improve performance. When you make changes, the browser might still show the old cached version. A hard refresh forces the browser to download fresh files from your computer.


