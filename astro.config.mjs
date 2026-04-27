// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mrtooliaa.com',
  output: 'static',
  integrations: [
    tailwind({
      configFile: './tailwind.config.js',
      applyBaseStyles: false,
    }),
  ],
  build: {
    format: 'directory',
  },
});
