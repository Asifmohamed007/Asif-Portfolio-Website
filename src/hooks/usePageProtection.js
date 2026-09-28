import { useEffect } from 'react';

/** Kept from the original site: disables the right-click menu and Ctrl+U (view source). */
export default function usePageProtection() {
  useEffect(() => {
    const onContext = (e) => e.preventDefault();
    const onKey = (e) => { if (e.ctrlKey && e.keyCode === 85) e.preventDefault(); };
    document.addEventListener('contextmenu', onContext);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('contextmenu', onContext);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
}
