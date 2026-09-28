import { useEffect, useState } from 'react';

// Same "code typing" intro as before: stays for 6 s after the page has fully loaded.
const PRELOADER_DELAY_MS = 6000;

const LINES = [
  ['system', '"Initializing system..."'],
  ['portfolio', '"Loading professional portfolio..."'],
  ['skills', '"Fetching frontend skills..."'],
  ['experience', '"Compiling experience..."'],
  ['uiux', '"Optimizing UI/UX..."'],
  ['deploy', '"Deploying interactive elements..."'],
  ['status', '"Portfolio Ready! \u{1F680}"'],
];

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timer;
    const start = () => { timer = setTimeout(() => setHidden(true), PRELOADER_DELAY_MS); };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => { clearTimeout(timer); window.removeEventListener('load', start); };
  }, []);

  return (
    <div id="preloader" style={hidden ? { display: 'none' } : undefined} aria-hidden="true">
      <div className="code-box">
        {LINES.map(([name, value]) => (
          <span className="code-line" key={name}>
            <span className="keyword">const</span> <span className="var">{name}</span> = {value};
          </span>
        ))}
      </div>
      <div className="grid-overlay"></div>
    </div>
  );
}
