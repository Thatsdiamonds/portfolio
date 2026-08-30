// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },
  site: 'https://aam.pages.dev',
  output: 'static',
  integrations: [sitemap()],

  // Aggressive SPA prefetch — all links in viewport are prefetched early
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Build optimisations
  build: {
    // Inline styles smaller than 4kB to eliminate extra HTTP round-trips
    inlineStylesheets: 'auto',
    assets: '_assets',
    format: 'directory', // cleaner URLs, avoids trailing-slash redirects
  },

  // Compress HTML output
  compressHTML: true,

  // Vite-level optimisations
  vite: {
    build: {
      // Increase chunk size warn limit – portfolio bundles are intentionally small
      chunkSizeWarningLimit: 512,
      rollupOptions: {
        output: {
          // Manual chunking: split lenis into its own chunk so it can be cached
          manualChunks(id) {
            if (id.includes('node_modules/lenis') || id.includes('node_modules\\lenis')) {
              return 'lenis';
            }
          },
        },
      },
      // Enable CSS code-splitting for per-page critical CSS
      cssCodeSplit: true,
      // Minify CSS aggressively
      cssMinify: true,
    },
    // Optimise deps that are always needed
    optimizeDeps: {
      include: ['lenis'],
    },
  },
});
