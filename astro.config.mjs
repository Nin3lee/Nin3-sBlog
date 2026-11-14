
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 网站正式部署地址，用于生成 Sitemap 中的完整 URL
  site: 'https://nin3-lee.netlify.app',

  // 统一使用带结尾斜杠的页面 URL
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    icon(),
    astroExpressiveCode(),
    mdx(),
    sitemap()
  ],

  markdown: {
    shikiConfig: {
      wrap: true,
    }
  }
});
