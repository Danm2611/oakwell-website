import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://oakwellroofing.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/brand/'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Keep page scripts as external files so the CSP can stay strict (no 'unsafe-inline' for scripts).
    build: { assetsInlineLimit: 0 },
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
