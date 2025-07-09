import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://diannamartin.uk',
  base: '/',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
