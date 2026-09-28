/** Top of an element relative to the document (what jQuery's .offset().top returned). */
export function offsetTop(el) {
  return el.getBoundingClientRect().top + window.scrollY;
}

/**
 * Smooth-scroll to a section. The site's CSS already sets `scroll-behavior: smooth`
 * on <html>, which is what gave the old jQuery animation its feel.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: offsetTop(el), behavior: 'smooth' });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
