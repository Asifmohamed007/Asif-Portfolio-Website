import './styles/index.css';
import { hydrateRoot, createRoot } from 'react-dom/client';
// Bootstrap's own tab + modal plugins (only these two, ~12 KB) so they behave exactly as before.
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/modal';
import AOS from 'aos';
import App from './App.jsx';

const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, <App />); // production: HTML was prerendered
else createRoot(root).render(<App />);                // `npm run dev`

AOS.init();
