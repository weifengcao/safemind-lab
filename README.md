# SafeMind Lab

Pre-execution governance for agentic and autonomous workflows.

🌐 **Live Site:** [https://www.safemindlab.com](https://www.safemindlab.com)

## Project Structure

```
safemind-lab/
├── index.html          # Main landing page
├── assets/             # Static assets (images, etc.)
│   └── safemind_assets.png
├── _headers            # Cloudflare Pages headers configuration
└── README.md
```

## Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare Pages deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Select **Connect to Git**
   - Choose your `safemind-lab` repository
   - Configure build settings:
     - **Build command:** (leave empty - static site)
     - **Build output directory:** `/` (root)
   - Click **Save and Deploy**

3. **Set Custom Domain:**
   - In your Pages project, go to **Custom domains**
   - Add `www.safemindlab.com` and `safemindlab.com`
   - Follow the DNS verification steps

### Option 2: Direct Upload

1. **Via Cloudflare Dashboard:**
   - Go to **Workers & Pages** → **Create application** → **Pages**
   - Select **Upload assets**
   - Drag and drop the entire project folder
   - Deploy

2. **Via Wrangler CLI:**
   ```bash
   # Install Wrangler
   npm install -g wrangler

   # Login to Cloudflare
   wrangler login

   # Deploy
   npx wrangler pages deploy . --project-name=safemind-lab
   ```

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000`

## Contact

- Email: info@safemindlab.com
- Website: https://www.safemindlab.com

---

© 2026 Safe Physical Intelligence, Inc. All rights reserved.
