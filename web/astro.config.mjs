import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vaigotakuthescientist.github.io',
  base: '/eshkere-strategy',
  output: 'static',
  integrations: [sitemap()],
});
