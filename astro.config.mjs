// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portfolio-website-one-beige-27.vercel.app",
  trailingSlash: "never",
  build: { format: "file" },
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  vite: {
    // Both CSS minifiers fold animation-timeline into the animation shorthand,
    // which current browsers reject, silently disabling every scroll-driven
    // animation. The stylesheets are small, so ship them unminified (still gzipped).
    build: { cssMinify: false },
  },
});
