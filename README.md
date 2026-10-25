# Maan Candles — React Catalogue Website

A responsive, static React/Vite storefront for the Maan Candles product catalogue. Includes the 22 candle products, their catalogue photos and current prices, product-name search, and WhatsApp ordering links.

## Run locally

You need Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Create a production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Host on Vercel

1. Extract this ZIP and push the folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Use these settings (Vercel detects Vite automatically):
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

## Host on Netlify

1. Push the folder to GitHub and import it into Netlify, or upload the generated `dist/` folder using Netlify's manual deploy flow.
2. For a Git-based deploy, set:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Host on GitHub Pages

For GitHub Pages, set the repository's Pages source to GitHub Actions and use the official Vite deployment workflow, or use Vercel/Netlify for the easiest setup. If deploying under a repository subpath, configure Vite's `base` option in `vite.config.js` to `/<repository-name>/` before building.

## Catalogue details

- Instagram: [@maancandles.13](https://www.instagram.com/maancandles.13/)
- WhatsApp: +91 6388184100
- Shipping message: Shipping charges apply and vary depending on the quantity of your order.

Product names, current prices, and photos live in `src/main.jsx` and `public/images/`. Edit `products` in `src/main.jsx` to update catalogue details. Each product's Order on WhatsApp link automatically includes its name and price.
