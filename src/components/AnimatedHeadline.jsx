import { memo, useEffect, useRef } from 'react';

// Timings of the original "clip" headline effect (text-type.js).
const START_DELAY = 2500; // before the first word changes
const REVEAL_MS = 600;    // wrapper closes / opens
const HOLD_MS = 1500;     // a word stays fully visible

const swing = (p) => 0.5 - Math.cos(p * Math.PI) / 2; // jQuery's default easing

/** "I am a Developer. / Frontender. / ..." with the clipping reveal animation. */
function AnimatedHeadline({ words }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = [...wrapper.querySelectorAll('b')];
    let raf = 0;
    let timer = 0;

    const tween = (to, done) => {
      const from = parseFloat(getComputedStyle(wrapper).width);
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / REVEAL_MS);
        wrapper.style.width = `${from + (to - from) * swing(p)}px`;
        if (p < 1) raf = requestAnimationFrame(step);
        else done();
      };
      raf = requestAnimationFrame(step);
    };
    const width = (el) => el.getBoundingClientRect().width;

    const cycle = () => {
      const current = items.find((b) => b.classList.contains('is-visible')) || items[0];
      const next = items[(items.indexOf(current) + 1) % items.length];
      tween(2, () => {
        current.classList.replace('is-visible', 'is-hidden');
        next.classList.replace('is-hidden', 'is-visible');
        tween(width(next) + 10, () => { timer = setTimeout(cycle, HOLD_MS); });
      });
    };

    wrapper.style.width = `${width(wrapper) + 10}px`;
    timer = setTimeout(cycle, START_DELAY);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, []);

  return (
    <span className="cd-headline clip is-full-width">
      <span>I am a</span>{' '}
      <span className="cd-words-wrapper" ref={wrapperRef}>
        {words.map((w, i) => (
          <b key={w} className={i === 0 ? 'is-visible' : 'is-hidden'}>{w}</b>
        ))}
      </span>
    </span>
  );
}

export default memo(AnimatedHeadline);
