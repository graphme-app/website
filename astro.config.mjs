import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkDirective from "remark-directive";
import remarkCalloutDirectives from "@microflash/remark-callout-directives";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://graphme.app',
  markdown: {
    remarkPlugins: [remarkDirective, remarkCalloutDirectives],
    extendDefaultPlugins: true
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), sitemap()]
});