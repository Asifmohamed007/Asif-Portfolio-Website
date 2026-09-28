import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { scrollToTop } from '../hooks/scroll.js';

/** Round button that fades in after scrolling 100px (same threshold as before). */
export default function BackToTop() {
  const [visible, setVisible] = useState(null); // null = not scrolled yet (CSS default)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="backto-top"
      style={visible === null ? undefined : { opacity: visible ? '1' : '0' }}
      role="button"
      tabIndex={visible ? 0 : -1}
      aria-label="Back to top"
      onClick={scrollToTop}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToTop(); } }}
    >
      <div>
        <Icon name="arrow-up" />
      </div>
    </div>
  );
}
