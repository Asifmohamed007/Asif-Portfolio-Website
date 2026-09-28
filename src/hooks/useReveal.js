import { useEffect } from 'react';

/**
 * Replacement for WOW.js (used by the skill bars): elements with class "wow" stay
 * hidden until they scroll into view, then play their animate.css animation with the
 * element's data-wow-duration / data-wow-delay. Uses IntersectionObserver, so bars in
 * a tab also animate the moment that tab is opened.
 */
export default function useReveal(selector = '.wow') {
  useEffect(() => {
    const boxes = [...document.querySelectorAll(selector)];
    if (!boxes.length) return;
    const names = new Map();
    for (const box of boxes) {
      names.set(box, getComputedStyle(box).animationName);
      box.style.visibility = 'hidden';
      box.style.animationName = 'none';
    }
    if (!('IntersectionObserver' in window)) {
      boxes.forEach(show);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        show(e.target);
        io.unobserve(e.target);
      }
    });
    boxes.forEach((b) => io.observe(b));
    return () => io.disconnect();

    function show(box) {
      const { wowDuration, wowDelay, wowIteration } = box.dataset;
      if (wowDuration) box.style.animationDuration = wowDuration;
      if (wowDelay) box.style.animationDelay = wowDelay;
      if (wowIteration) box.style.animationIterationCount = wowIteration;
      box.style.animationName = names.get(box) || '';
      box.style.visibility = 'visible';
      box.classList.add('animated');
    }
  }, [selector]);
}
