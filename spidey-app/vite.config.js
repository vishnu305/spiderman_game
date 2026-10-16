import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// "/gnews/*" is forwarded to news.google.com so the browser can read Google News RSS (no CORS error).
// The same path is proxied on Netlify by public/_redirects, so the app works identically when hosted.
const proxy = {
  '/gnews': {
    target: 'https://news.google.com',
    changeOrigin: true,
    secure: false, // corporate networks re-sign HTTPS (TLS inspection); this read-only news proxy must still work there
    rewrite: (p) => p.replace(/^\/gnews/, ''),
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36' },
  },
};

export default defineConfig({
  plugins: [react()],
  base: './',
  server: { proxy, port: 5173 },
  preview: { proxy, port: 4173 },
  build: { chunkSizeWarningLimit: 1500 },
});
