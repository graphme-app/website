import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkDirective from "remark-directive"
import remarkCalloutDirectives from "@microflash/remark-callout-directives"

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDirective, remarkCalloutDirectives],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    react()
  ],
});