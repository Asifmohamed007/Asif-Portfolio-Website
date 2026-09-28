# Asif Mohamed Mohideen – Portfolio (React)

Live: https://asifmohamed-portfolio.netlify.app/

React 19 + Vite version of the portfolio. It looks and behaves the same as the
original HTML/CSS/JS site, but it is prerendered for SEO and much lighter.

## Run it

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Deploy to Netlify

**Option A – from GitHub (recommended, auto-deploys on every push)**
1. Push this folder to a GitHub repository.
2. In Netlify: *Add new site → Import an existing project* → pick the repo.
3. Netlify reads `netlify.toml` automatically (build `npm run build`, publish `dist`). Click *Deploy*.
4. To keep the same address, do this in your existing `asifmohamed-portfolio` site
   (*Site configuration → Build & deploy → Link repository*) instead of creating a new site.

**Option B – drag and drop**
Run `npm run build` (or use the included `dist` zip) and drag the `dist` folder onto
*Netlify → Deploys*. Note: with drag and drop, `netlify.toml` (redirects, caching and
security headers) is not applied – Option A is better.

**Contact form:** after the first deploy, open *Netlify → Forms*, enable form detection
if asked, and redeploy once. Messages appear under the form named `contact`; add an
email notification under *Forms → Form notifications*.

## Where to edit things

| What | File |
|---|---|
| Name, email, phone, social links, nav, rotating words | `src/data/site.js` |
| "About Me" cards | `src/data/about.js` |
| Education, skills (bar %), certifications, interests | `src/data/resume.js` |
| Project cards and pop-up project details | `src/data/projects.js` |
| Page title, description, social preview, structured data | `index.html` |
| Custom styles | `src/styles/custom.css` |

In text fields, a line break becomes `<br>` and `**text**` becomes bold.

### Adding an image
1. Put the original file in the old site folder (or anywhere) and add a line to the
   `MAP` in `scripts/optimize-images.mjs`.
2. `npm run optimize-images -- <folder-with-originals>` → creates a right-sized `.webp`
   in `src/assets/images/` and records its size.
3. Use it in the data files: `image('projects/my-image.webp')`.

### Adding an icon
Font Awesome (`fas fa-…`) and Bootstrap Icons (`bi-…`) are cut down to only the icons
used. After using a new icon class, run `npm run icons` once.
Feather icons: copy the icon from `node_modules/feather-icons/dist/icons.json` into
`src/components/featherIcons.js`, then use `<Icon name="…" />`.

## What was improved

- **SEO:** the full page is in the HTML (it used to be hidden inside `document.write`),
  a real `<h1>`, valid Person/WebSite structured data (the old JSON had comments, so it
  was invalid), fixed social-preview image (the `Logo/` vs `logo/` path returned 404),
  1200×630 share image, canonical URL, `robots.txt`, `sitemap.xml`, proper favicons.
- **Speed:** images 22 MB → 1.5 MB (WebP, right-sized, with width/height to prevent
  layout jumps); jQuery and 9 plugins replaced by small React hooks; fonts self-hosted;
  icon fonts reduced from ~400 KB to 4 KB; unused CSS removed (599 KB → 137 KB);
  particles load after the page; year-long caching of fingerprinted files.
- **Fixes:** the contact form now really sends messages (the old script crashed and only
  showed a fake "submitted" message); no console errors or 404s.
- **Other:** security headers, accessible labels on icon links, 404 and maintenance
  pages kept (marked `noindex`), old resume link redirects to the new one.

Lighthouse (mobile): Performance 95 · Accessibility 95 · Best Practices 100 · SEO 100.
Desktop: Performance 100.

## Notes kept on purpose
- The Projects and Contact sections sit inside the Resume container in the markup
  (as in the original) – moving them changes widths and spacing.
- `src/styles/vendor/bootstrap.min.css` intentionally omits Bootstrap's `:root`
  variables block: the original file's broken comment made browsers ignore it, and the
  design depends on that.
- The back-to-top element has zero height in the original template CSS, so it is not
  visible – kept identical.
