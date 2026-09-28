import { useEffect } from 'react';

// Identical settings to the original particlesJS() call.
const CONFIG = {
  particles: {
    number: { value: 20, density: { enable: true, value_area: 800 } },
    color: { value: ['#ffffff'] },
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 4 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
    opacity: { value: 0.8, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 4, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', attract: { enable: false, rotateX: 600, rotateY: 1200 } },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 800, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

let loading;
function loadScript(src) {
  loading ||= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return loading;
}

/**
 * The floating dots in the hero. particles.js (24 KB) is only downloaded after the
 * page has finished loading, so it never delays the first paint.
 */
export default function Particles() {
  useEffect(() => {
    let cancelled = false;
    const start = () => {
      const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
      idle(() => {
        loadScript('/vendor/particles.min.js')
          .then(() => { if (!cancelled) window.particlesJS('particles-js', CONFIG); })
          .catch(() => {});
      });
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener('load', start);
      (window.pJSDom || []).splice(0).forEach((p) => p.pJS.fn.vendors.destroypJS());
    };
  }, []);

  return <div id="particles-js"></div>;
}
