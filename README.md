# LEAP Business Solutions – Website

## Files Included
- `index.html` – Homepage
- `about.html` – About Us
- `services.html` – All Services (PF, ESIC, PT, LWF, Audit)
- `payroll-compliance.html` – Payroll Management page
- `faq.html` – FAQs
- `blog.html` – Resources & Blog
- `contact.html` – Contact page with inquiry form
- `css/style.css` – All styles
- `js/main.js` – Interactions (FAQ, animations, download, form)
- `js/components.js` – Navbar, footer, WhatsApp button
- `assets/favicon.svg` – Site icon
- `robots.txt` – SEO crawl instructions
- `sitemap.xml` – SEO sitemap
- `netlify.toml` – Netlify config

---

## 🚀 How to Deploy (Free Hosting)

### Option 1: Netlify (Recommended – Easiest)
1. Go to https://www.netlify.com and create a free account
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire LEAP folder into the browser
4. Your site goes live instantly at a netlify.app subdomain
5. Go to Site Settings → Domain Management → Add your custom domain `leapbusiness.in`
6. Follow Netlify's instructions to point GoDaddy DNS to Netlify's nameservers

### Option 2: GitHub Pages
1. Create a free account at https://github.com
2. Create a new repository named `leapbusiness`
3. Upload all files
4. Go to Settings → Pages → Set source to main branch
5. Site will be live at `yourusername.github.io/leapbusiness`
6. Add custom domain under Pages settings

### Option 3: Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Create account and connect GitHub repo
3. Deploy with zero config

---

## 🔗 Connecting Your GoDaddy Domain (leapbusiness.in) to Netlify

1. In Netlify → Site Settings → Domain Management → Add custom domain → type `leapbusiness.in`
2. Netlify will show you nameservers (e.g. dns1.p06.nsone.net)
3. Go to GoDaddy → My Products → DNS → Change Nameservers
4. Replace GoDaddy nameservers with Netlify's nameservers
5. Wait 24-48 hours for DNS propagation
6. SSL certificate will be auto-issued by Netlify (free HTTPS)

---

## ✏️ Customization Guide

### Update Contact Info
Edit `js/components.js` – search for the phone number and email to update.

### Update Google Maps
In `contact.html`, replace the iframe `src` with your specific office address embed URL from maps.google.com

### Add Real Blog Articles
Replace placeholder articles in `blog.html` with real content and individual article pages.

### Add Google Analytics
Paste your GA4 script tag just before `</head>` in each HTML file.

---

## 📞 WhatsApp Button
Pre-configured to open WhatsApp chat with +91 79772 13501. Message can be customized in `js/components.js`.

## 📥 Compliance Checklist Download
Generates a text file automatically — no server needed. Works on all browsers.
