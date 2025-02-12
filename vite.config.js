import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: "/", // Ensures relative paths in the built HTML
  plugins: [
    injectHTML(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ommig: resolve(__dirname, 'om-mig.html'),
        hantverket: resolve(__dirname, 'hantverket.html'),
        galleri: resolve(__dirname, 'galleri.html'),
        bestallning: resolve(__dirname, 'bestallning.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
        andramotiv: resolve(__dirname, 'andra-motiv.html'),
        omkakor: resolve(__dirname, 'om-kakor.html'),
        head: resolve(__dirname, 'partials/head.html'),
        nav: resolve(__dirname, 'partials/nav.html'),
        footer: resolve(__dirname, 'partials/footer.html'),
        kristusikoner: resolve(__dirname, '/galleri/kristusikoner.html'),
        gudsmodern: resolve(__dirname, '/galleri/gudsmodern.html'),
        helgon: resolve(__dirname, '/galleri/helgon.html'),
      },
    },
  },
});