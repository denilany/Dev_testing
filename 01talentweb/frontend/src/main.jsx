import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import Layout from '@/components/Layout.jsx';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

  const appName = document.getElementsByTagName('title')[0]?.innerText || 'Django';

  createInertiaApp({
    title: (title) => `${title} | ${appName}`,
    progress: {
      // The delay after which the progress bar will appear, in milliseconds...
      delay: 250,
  
      // The color of the progress bar...
      color: 'green',
  
      // Whether to include the default NProgress styles...
      includeCSS: true,
  
      // Whether the NProgress spinner will be shown...
      showSpinner: true,
    },
    resolve: (name) => {
  const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });
  const key = `./pages/${name}.jsx`;
  if (!pages[key]) {
    console.error('Available pages:', Object.keys(pages));
    throw new Error(`Page not found: ${key}`);
  }
  let page = pages[key];
  page.default.layout = page.default.layout || Layout;
  return page;
},
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    }
  }).then(() => {});
});