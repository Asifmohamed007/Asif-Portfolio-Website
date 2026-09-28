import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/** Used at build time (scripts/prerender.mjs) to turn the React app into static HTML. */
export function render() {
  return renderToString(<App />);
}
