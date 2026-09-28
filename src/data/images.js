import dimensions from '../assets/images/dimensions.json';

// Vite fingerprints every image (e.g. logo-large.3f9a1c.webp) so it can be cached forever.
const urls = import.meta.glob('../assets/images/**/*.webp', { eager: true, import: 'default' });

/**
 * image('projects/shopsy-2.webp') -> { src, width, height }
 * width/height are the ORIGINAL file's pixel size: the browser uses them to reserve
 * space before the image loads (no layout jump) and the layout stays exactly as before.
 */
export function image(name) {
  const src = urls[`../assets/images/${name}`];
  if (!src) throw new Error(`Image not found: src/assets/images/${name}`);
  const dims = dimensions[name];
  if (!dims) throw new Error(`Add "${name}" to scripts/optimize-images.mjs and re-run it`);
  return { src, width: dims.width, height: dims.height };
}
