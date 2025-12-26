# 🌐 How to Use a Custom Domain (like treasurecoastnailsandspa.com)

## ✅ Yes, You Can Use Your Own Domain on Vercel!

Vercel supports custom domains on **all plans, including the free one!** You just need to buy a domain first.

---

## 📝 Step-by-Step Guide

### Step 1: Buy a Domain Name

You need to purchase a domain first from a domain registrar. Popular options:

- **Namecheap** (recommended - easy to use)
  - Go to [namecheap.com](https://www.namecheap.com)
  - Search for your domain: `treasurecoastnailsandspa.com`
  - Add to cart and checkout (usually $10-15/year)

- **GoDaddy** ([godaddy.com](https://www.godaddy.com))
- **Google Domains** (now Squarespace Domains)
- **Cloudflare** ([cloudflare.com](https://www.cloudflare.com/products/registrar/)) - often the cheapest

**What to look for:**
- Domain pricing (usually $10-15/year for .com)
- Easy DNS management
- Good customer support

---

### Step 2: Deploy Your Site to Vercel First

1. Deploy your website to Vercel (follow the main VERCEL_PUBLISH_GUIDE.md)
2. Get your default Vercel URL (like `your-site.vercel.app`)
3. Make sure your site is working correctly

**Why deploy first?** You need an active Vercel project to connect the domain.

---

### Step 3: Add Your Domain to Vercel

1. Go to your Vercel dashboard
2. Click on your project
3. Go to **Settings** tab
4. Click **Domains** in the left sidebar
5. Enter your domain: `treasurecoastnailsandspa.com`
6. Click **Add**

---

### Step 4: Configure DNS Records

Vercel will show you what DNS records to add. You'll need to add these records in your domain registrar's DNS settings.

**Option A: Use Vercel's Nameservers (Easiest)**

1. Vercel will show you nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

2. Go to your domain registrar's DNS settings
3. Replace the default nameservers with Vercel's nameservers
4. Save changes

**Option B: Add A/CNAME Records (Keep Your Registrar's Nameservers)**

1. In your domain registrar's DNS settings, add:

   **For apex domain (treasurecoastnailsandspa.com):**
   - Type: `A`
   - Name: `@` or leave blank
   - Value: `76.76.21.21` (Vercel's IP - they'll provide the exact one)

   **OR use CNAME (easier):**
   - Type: `CNAME`
   - Name: `@` or leave blank
   - Value: `cname.vercel-dns.com` (Vercel will provide exact value)

   **For www (www.treasurecoastnailsandspa.com):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (Vercel will provide exact value)

---

### Step 5: Wait for DNS Propagation

- DNS changes can take a few minutes to 48 hours to propagate
- Usually takes 10-30 minutes
- Vercel will show a status indicator when it's working

---

### Step 6: SSL Certificate (Automatic!)

✅ **Good news:** Vercel automatically provides a free SSL certificate (HTTPS) for your custom domain!

- No extra cost
- Automatic renewal
- Your site will be secure (🔒 in browser address bar)

---

## 🎯 Quick Summary

1. ✅ Buy domain from Namecheap/GoDaddy/etc. ($10-15/year)
2. ✅ Deploy site to Vercel first
3. ✅ Add domain in Vercel Settings → Domains
4. ✅ Update DNS records at your registrar
5. ✅ Wait 10-30 minutes for DNS to propagate
6. ✅ Done! Your site is live at `treasurecoastnailsandspa.com` with free SSL!

---

## 💰 Cost Breakdown

- **Vercel hosting:** FREE (forever)
- **Domain name:** ~$10-15/year
- **SSL certificate:** FREE (included by Vercel)
- **Total:** ~$10-15/year

---

## 📚 Helpful Links

- [Vercel's Custom Domain Documentation](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
- [Namecheap](https://www.namecheap.com) - Domain registrar
- [GoDaddy](https://www.godaddy.com) - Domain registrar

---

## 🆘 Troubleshooting

**Domain not working after 48 hours?**
- Double-check DNS records are correct
- Make sure you entered the domain exactly right in Vercel
- Check Vercel's domain status page for errors

**Can't find DNS settings?**
- Look for "DNS Management" or "DNS Settings" in your registrar's dashboard
- Contact your registrar's support if you're stuck

**Want both www and non-www?**
- Vercel can handle both automatically
- Add both `treasurecoastnailsandspa.com` and `www.treasurecoastnailsandspa.com` in Vercel
- Configure redirects in Vercel settings (optional)

---

## ✅ You're All Set!

Once DNS propagates, your site will be live at your custom domain with:
- ✅ Professional URL (`treasurecoastnailsandspa.com`)
- ✅ Free SSL certificate (secure HTTPS)
- ✅ Fast global CDN
- ✅ All the benefits of Vercel hosting

