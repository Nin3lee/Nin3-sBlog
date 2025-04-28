import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    icon(),
    astroExpressiveCode(),
    mdx()
  ],

  markdown: {
    shikiConfig: {
      wrap: true,
    }
  }
});