# 📸 Image Guide for Your Website

## ✅ Good News: Images Don't Make Publishing Harder!

When you publish your website, you simply upload:
- ✅ HTML file (`index.html`)
- ✅ CSS file (`styles.css`)
- ✅ JavaScript file (`script.js`)
- ✅ **Images folder** (`images/`) - Just one more folder!

**That's it!** All files go together.

---

## 📁 How to Organize Images

### Step 1: Create an Images Folder

Create a folder called `images` in your project:

```
TreasureCoastNailWebsite/
├── index.html
├── styles.css
├── script.js
├── images/              ← Create this folder
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── about-us.jpg
│   └── logo.png
└── README.md
```

### Step 2: Add Your Images

1. Take or download photos of your nail art work
2. Save them to the `images` folder
3. Use descriptive names: `gallery-1.jpg`, `french-tips.jpg`, etc.

### Step 3: Reference Images in HTML

Use the `<img>` tag with the correct path:

```html
<!-- Gallery Image -->
<img src="images/gallery-1.jpg" alt="Beautiful nail art design">

<!-- About Section Image -->
<img src="images/about-us.jpg" alt="Treasure Coast Nail & Spa interior">
```

---

## 🎯 Best Practices for Images

### 1. File Formats

- **Photos**: Use `.jpg` or `.jpeg` (smaller file size)
- **Logos/Graphics**: Use `.png` (supports transparency)
- **Modern alternative**: `.webp` (smaller, better quality)

### 2. Image Sizes (Important!)

**Before uploading, optimize your images:**

- **Gallery images**: 800-1200px wide (good balance of quality and speed)
- **About section**: 1000-1500px wide
- **Logo**: 200-400px wide

**Why?** Large images slow down your website. Use free tools like:
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Resize and compress
- Preview (Mac) or Paint (Windows) - Resize images

### 3. File Naming

✅ **Good names:**
- `gallery-french-tips.jpg`
- `nail-art-floral.jpg`
- `salon-interior.jpg`

❌ **Avoid:**
- `IMG_1234.jpg` (not descriptive)
- `image 1.jpg` (spaces cause problems)
- `photo.jpg` (too generic)

---

## 📤 Publishing with Images

### Option 1: Free Hosting (GitHub Pages, Netlify, Vercel)

1. Upload your entire project folder (including `images/`)
2. The hosting service automatically serves your images
3. **No extra steps needed!**

### Option 2: Traditional Web Hosting

1. Connect via FTP (File Transfer Protocol)
2. Upload these files/folders:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder (with all images inside)

**Important:** Keep the folder structure the same! If images are in `images/` locally, they must be in `images/` on the server.

---

## 🔍 Troubleshooting Images Not Showing

### Problem: Image doesn't appear

**Check these:**

1. **File path is correct?**
   ```html
   <!-- If image is in images/ folder -->
   <img src="images/photo.jpg">
   
   <!-- If image is in same folder as HTML -->
   <img src="photo.jpg">
   ```

2. **File name matches exactly?**
   - `Photo.jpg` ≠ `photo.jpg` (case-sensitive on some servers)
   - `image 1.jpg` ≠ `image-1.jpg` (spaces cause problems)

3. **File exists?** Double-check the file is in the right folder

4. **File extension matches?** `.jpg` vs `.jpeg` vs `.png`

---

## 💡 Quick Tips

1. **Optimize first**: Compress images before adding them (saves space and loads faster)
2. **Use alt text**: Always include `alt="description"` for accessibility
3. **Organize**: Keep all images in the `images/` folder for easy management
4. **Test locally**: Make sure images work on your computer before publishing

---

## 📝 Example: Adding a Gallery Image

**Before (placeholder):**
```html
<div class="gallery-image" style="background: linear-gradient(...);">
    <div class="gallery-overlay">Elegant French Tips</div>
</div>
```

**After (real image):**
```html
<div class="gallery-item">
    <img src="images/french-tips.jpg" alt="Elegant French tip nail design" class="gallery-image">
    <div class="gallery-overlay">Elegant French Tips</div>
</div>
```

That's it! Just replace the placeholder with an `<img>` tag.

---

## 🚀 Ready to Add Images?

1. Create `images/` folder
2. Add your photos
3. Update HTML to reference them
4. Test locally (open in browser)
5. Upload everything when publishing (including `images/` folder)

**No extra complexity - just one more folder to upload!**


