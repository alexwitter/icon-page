import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: "/icon-page/", // Ensures relative paths in the built HTML
  plugins: [
    injectHTML(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ommig: resolve(__dirname, 'om-mig.html'),
        nav: resolve(__dirname, 'partials/nav.html'),
        footer: resolve(__dirname, 'partials/footer.html'),
      },
    },
  },
});