/**
 * Runs after `vite build`:
 *  1. renders the React app to HTML so the page content is in index.html
 *     (search engines, link previews and slow phones see everything immediately),
 *  2. removes CSS rules the page never uses (the template stylesheet is ~700 KB),
 *  3. renames the CSS file by its new content hash so browser caching stays safe.
 */
import { readFileSync, writeFileSync, rmSync, renameSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { PurgeCSS } from 'purgecss';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const { render } = await import(join(root, 'dist-server/entry-server.js'));

const template = readFileSync(join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('index.html is missing <!--app-html-->');
let html = template.replace('<!--app-html-->', render());

// ---- purge unused CSS --------------------------------------------------------
const assets = join(dist, 'assets');
const cssFile = readdirSync(assets).find((f) => f.endsWith('.css'));
const jsFiles = readdirSync(assets).filter((f) => f.endsWith('.js')).map((f) => join(assets, f));
const before = readFileSync(join(assets, cssFile), 'utf8');
const [purged] = await new PurgeCSS().purge({
  content: [{ raw: html, extension: 'html' }, ...jsFiles],
  css: [{ raw: before }],
  // Classes added at runtime by Bootstrap (modal/tab), AOS, the menu, the headline
  // animation and the skill-bar reveal. They are not in the static HTML.
  safelist: {
    standard: ['show', 'fade', 'active', 'current', 'menu-open', 'animated', 'fadeInLeft', 'is-visible', 'is-hidden',
      'modal-open', 'modal-backdrop', 'modal-static', 'collapsing', 'selected', 'waiting', 'particles-js-canvas-el'],
    greedy: [/^modal/, /aos/, /^fadeIn/],
  },
  keyframes: true,
  // Keep every @font-face: the template uses fonts through CSS variables, which
  // PurgeCSS can't trace. Unused faces cost nothing (browsers only fetch used fonts).
  fontFace: false,
  variables: false,
});
const cssHash = createHash('sha256').update(purged.css).digest('base64url').slice(0, 8);
const newCss = `index-${cssHash}.css`;
writeFileSync(join(assets, cssFile), purged.css);
renameSync(join(assets, cssFile), join(assets, newCss));
html = html.replaceAll(`/assets/${cssFile}`, `/assets/${newCss}`);

// ---- preload the fonts needed for the first paint (hero name + body text) so the
// hero doesn't change height when fonts arrive (keeps Cumulative Layout Shift ~0)
const PRELOAD = ['montserrat-latin-700-normal', 'poppins-latin-400-normal'];
const preloads = readdirSync(assets)
  .filter((f) => f.endsWith('.woff2') && PRELOAD.some((p) => f.startsWith(p)))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join('\n  ');
html = html.replace('<link rel="icon"', `${preloads}\n  <link rel="icon"`);

writeFileSync(join(dist, 'index.html'), html);
rmSync(join(root, 'dist-server'), { recursive: true, force: true });
console.log(`prerendered index.html (${(html.length / 1024).toFixed(0)} KB)`);
console.log(`CSS ${(before.length / 1024).toFixed(0)} KB -> ${(purged.css.length / 1024).toFixed(0)} KB (${newCss})`);
