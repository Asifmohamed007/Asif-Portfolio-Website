/**
 * Converts the original (very large) PNG/JPG files into right-sized WebP.
 *   node scripts/optimize-images.mjs <folder-with-original-site>
 * Each image is resized to ~2x the largest size it is ever displayed at
 * (sharp on retina screens, nothing wasted) and written to src/assets/images.
 * Add a line to MAP when you add a new image.
 */
import sharp from 'sharp';
import { mkdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node scripts/optimize-images.mjs <original-site-folder>'); process.exit(1); }
const OUT = new URL('../src/assets/images/', import.meta.url).pathname;

// [source path, output name, max output width]
const MAP = [
  ['assets/images/logo/big asif pc.png', 'logo/logo-large.webp', 480],
  ['assets/images/logo/smallasif.png', 'logo/logo-small.webp', 560],
  ['assets/images/blog/project-1.jpg', 'projects/card-own-projects.webp', 1110],
  ['assets/images/blog/project-2.jpg', 'projects/card-college-projects.webp', 1110],
  ['assets/images/contact/Contact.jpg', 'contact/contact.webp', 1000],
  ['assets/images/blog/spotstar login.png', 'projects/spotstar-login.webp', 1780],
  ['assets/images/blog/spotstar3.png', 'projects/spotstar-3.webp', 1230],
  ['assets/images/blog/spotstar5.png', 'projects/spotstar-5.webp', 1230],
  ['assets/images/blog/reactmain.png', 'projects/shopsy-main.webp', 1780],
  ['assets/images/blog/react2.png', 'projects/shopsy-2.webp', 1230],
  ['assets/images/blog/react3.png', 'projects/shopsy-3.webp', 1230],
  ['assets/images/blog/Gocar hire 1.png', 'projects/gocar-hire-1.webp', 1780],
  ['assets/images/blog/gocar2.png', 'projects/gocar-hire-2.webp', 1230],
  ['assets/images/blog/gocar3.png', 'projects/gocar-hire-3.webp', 1230],
  ['assets/images/blog/Anuj 1.JPG', 'projects/anuj-tiles-1.webp', 1780],
  ['assets/images/blog/anuj2.PNG', 'projects/anuj-tiles-2.webp', 1230],
  ['assets/images/blog/anuj3.PNG', 'projects/anuj-tiles-3.webp', 1230],
  ['assets/images/blog/Gaming port1.PNG', 'projects/gaming-portfolio-1.webp', 1780],
  ['assets/images/blog/Gaming port3.PNG', 'projects/gaming-portfolio-3.webp', 1230],
  ['assets/images/blog/Gaming port4.PNG', 'projects/gaming-portfolio-4.webp', 1230],
  ['assets/images/blog/bikebazaar 1.PNG', 'projects/bike-bazaar-1.webp', 1780],
  ['assets/images/blog/bikebazaar 2.PNG', 'projects/bike-bazaar-2.webp', 1230],
  ['assets/images/blog/bikebazaar 3.PNG', 'projects/bike-bazaar-3.webp', 1230],
  ['assets/images/blog/Ambulance.png', 'projects/ems-siren-visionary-1.webp', 1780],
  ['assets/images/blog/Whole Amb.png', 'projects/ems-siren-visionary-2.webp', 1230],
  ['assets/images/blog/School.png', 'projects/school-registration-1.webp', 1780],
  ['assets/images/blog/registration.png', 'projects/school-registration-2.webp', 1230],
  ['assets/images/blog/reactJS.jpg', 'projects/school-registration-3.webp', 1230],
];

const manifest = {};
let before = 0, after = 0;
for (const [src, out, maxW] of MAP) {
  const input = join(SRC, src);
  const dest = join(OUT, out);
  mkdirSync(dirname(dest), { recursive: true });
  const meta = await sharp(input).metadata();
  const width = Math.min(meta.width, maxW);
  await sharp(input).rotate().resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6, smartSubsample: true }).toFile(dest);
  const a = statSync(input).size, b = statSync(dest).size;
  before += a; after += b;
  // Intrinsic size of the ORIGINAL file: used for width/height attributes so the
  // layout is byte-for-byte what it was, and the browser can reserve space (no CLS).
  manifest[out] = { width: meta.width, height: meta.height };
  console.log(`${(a / 1024).toFixed(0).padStart(6)} KB -> ${(b / 1024).toFixed(0).padStart(4)} KB  ${out}`);
}
writeFileSync(join(OUT, 'dimensions.json'), JSON.stringify(manifest, null, 1));
console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(2)} MB`);
