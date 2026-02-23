import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
//import tailwindcss from '@tailwindcss/vite';

/*
  vite: {
    plugins: [tailwindcss()],
  },
*/

export default defineConfig({
  site: 'https://digitalnorthstar.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind()],


});