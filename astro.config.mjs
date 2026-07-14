import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
      optimizeDeps: {
          exclude: ['turnstile-svelte']
      },
      resolve: {
          dedupe: ['svelte', 'svelte/transition', 'svelte/internal']
      }
  },

  integrations: [svelte()],
  output: 'static',

  i18n: {
      defaultLocale: "en",
      locales: ["en", "es"],
      routing: {
          prefixDefaultLocale: false
      }
  },

  adapter: vercel()
});