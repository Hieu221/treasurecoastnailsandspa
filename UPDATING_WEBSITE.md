# 🔄 How to Update Your Website on Vercel

## ✅ Two Methods - Choose What Works for You

---

## 🎯 Method 1: Connected to GitHub (RECOMMENDED - Easiest!)

If your Vercel project is connected to a GitHub repository, updating is **automatic**!

### Steps:

1. **Make your changes locally**
   - Edit `index.html`, `styles.css`, `script.js`
   - Add/update images in the `image/` folder
   - Test locally if you want

2. **Push to GitHub**
   ```bash
   # If you use Git commands:
   git add .
   git commit -m "Update website content"
   git push
   ```
   
   OR use GitHub Desktop/GUI to commit and push

3. **That's it! ✨**
   - Vercel automatically detects the changes
   - Builds and deploys your new version
   - Your site updates in 1-2 minutes
   - No manual steps needed!

### Benefits:
- ✅ Automatic deployments
- ✅ Version history (you can see all changes)
- ✅ Can revert to old versions if needed
- ✅ Professional workflow

---

## 📤 Method 2: Direct Upload (Manual Updates)

If you uploaded directly without GitHub, here's how to update:

### Option A: Redeploy (Easier)

1. **Make your changes locally**
   - Edit your files
   - Update images

2. **In Vercel Dashboard:**
   - Go to your project
   - Click on "Deployments" tab
   - Find your latest deployment
   - Click the three dots (⋯) → "Redeploy"
   - Or click "Redeploy" button

3. **Upload new files:**
   - You'll need to upload the entire updated folder again
   - Vercel will replace the old version

### Option B: Delete and Re-upload (Fresh Start)

1. **Make your changes locally**

2. **In Vercel Dashboard:**
   - Go to Settings
   - Scroll down and delete the project
   - Create a new project
   - Upload your updated folder

---

## 🚀 Switch to GitHub Method (Recommended!)

Even if you already deployed, you can connect to GitHub for easier updates:

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Sign in (or create account - it's free)
3. Click "+" → "New repository"
4. Name it (e.g., `treasure-coast-nails-website`)
5. Click "Create repository"

### Step 2: Upload Your Files to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Install and sign in
3. File → Add Local Repository
4. Select your project folder
5. Click "Publish repository"
6. Done!

**Option B: Using Git Commands**
```bash
cd /Users/thuhieu/Desktop/TreasureCoastNailWebsite
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

**Option C: Upload via GitHub Website**
1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop all your files
4. Click "Commit changes"

### Step 3: Connect to Vercel

1. Go to Vercel dashboard
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Click "Import" and "Deploy"

**OR** if you already have a project:
1. Go to your project → Settings
2. Scroll to "Git Repository"
3. Click "Connect Git Repository"
4. Select your GitHub repo
5. Done!

### Step 4: Future Updates

Now whenever you update files:
1. Edit files locally
2. Push to GitHub
3. Vercel auto-deploys! ✨

---

## 📝 What Can You Update?

You can update **anything**:
- ✅ Text content (change About Us text, prices, etc.)
- ✅ Images (replace service icons, background, model image)
- ✅ Colors and styling (edit `styles.css`)
- ✅ Add new sections
- ✅ Change layouts
- ✅ Update menu/pricing

Just edit the files and redeploy!

---

## ⏱️ How Long Do Updates Take?

- **GitHub method:** 1-2 minutes (automatic)
- **Manual upload:** 30 seconds - 1 minute

Your site might show "Deploying..." briefly, then the new version goes live.

---

## 🔍 Viewing Your Updates

After updating:
1. Wait for deployment to finish (Vercel shows progress)
2. Visit your website URL
3. **Hard refresh** if you don't see changes:
   - Chrome/Edge: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - Safari: `Cmd + Option + R`
   - This clears browser cache

---

## 💡 Pro Tips

1. **Test locally first:** Open `index.html` in browser before deploying
2. **Use GitHub:** Makes updates so much easier
3. **Version history:** GitHub saves all your changes (can undo mistakes!)
4. **Preview deployments:** Vercel creates preview URLs for every change (if using GitHub)

---

## 🎉 Quick Summary

**Easiest workflow:**
1. Connect project to GitHub (one-time setup)
2. Make changes locally
3. Push to GitHub
4. Vercel auto-deploys ✨

**No GitHub?**
- Make changes locally
- Re-upload to Vercel (or redeploy)

That's it! Updating is easy once you're set up. 🚀

