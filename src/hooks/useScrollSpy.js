import { useCallback, useEffect, useRef, useState } from 'react';
import { offsetTop, scrollToSection } from './scroll.js';

// Same rule as the old jquery-one-page-nav (scrollThreshold: 0.2): a section becomes
// "current" once its top passes 20% of the viewport height from the top.
const THRESHOLD = 0.2;

/**
 * Returns [currentId, goTo]. Several navs can use it; they stay in sync because they
 * all read the same scroll position.
 */
export default function useScrollSpy(ids) {
  const [current, setCurrent] = useState(ids[0]);
  const paused = useRef(false);
  const idsKey = ids.join(',');

  useEffect(() => {
    const list = idsKey.split(',');
    let tops = {};
    let docHeight = 0;
    let frame = 0;

    const measure = () => {
      docHeight = document.documentElement.scrollHeight;
      tops = {};
      for (const id of list) {
        const el = document.getElementById(id);
        if (el) tops[id] = Math.round(offsetTop(el));
      }
    };
    const update = () => {
      frame = 0;
      if (document.documentElement.scrollHeight !== docHeight) measure(); // images/fonts loaded
      if (paused.current) return;
      const limit = Math.round(window.innerHeight * THRESHOLD);
      let found = null;
      for (const id of list) if (id in tops && tops[id] - limit < window.scrollY) found = id;
      if (found) setCurrent(found);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => { measure(); onScroll(); };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    };
  }, [idsKey]);

  // Clicking a link highlights it immediately and ignores the scroll spy until the
  // smooth scroll has finished (the old plugin did the same).
  const goTo = useCallback((id) => {
    setCurrent(id);
    paused.current = true;
    scrollToSection(id);
    let fallback;
    const resume = () => { paused.current = false; clearTimeout(fallback); window.removeEventListener('scrollend', resume); };
    window.addEventListener('scrollend', resume);
    fallback = setTimeout(resume, 1200);
  }, []);

  return [current, goTo];
}
