// Suppress benign media AbortError / play interruption in browser dev overlays
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && (event.reason.name === 'AbortError' || (event.reason.message && event.reason.message.includes('media resource was aborted')))) {
    event.preventDefault();
  }
});

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/open-sauce-sans';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
