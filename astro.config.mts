import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://ianmungovan.dev/",
  integrations: [mdx(), tailwind({
    // Custom Tailwind config
    config: {
      path: "./tailwind.config.cts"
    }
  }), sitemap()],
  output: "server",
  adapter: vercel({
    analytics: true
})
});