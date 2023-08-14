import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import customTheme from "./mytheme.json";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://ianmungovan.dev/",
  integrations: [mdx(), tailwind({
    // Custom Tailwind config
    config: {
      path: "./tailwind.config.cts"
    }
  }), sitemap(), image()],
  output: "static",
  adapter: vercel({
    analytics: true
  }),
  markdown: {
    // shikiConfig: { theme: customTheme },
    shikiConfig: {
      theme: customTheme,
      langs: [],
      wrap: true
    }
  }
});