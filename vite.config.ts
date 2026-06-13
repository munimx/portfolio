import { defineConfig } from "vite";

// Base path note: when deploying to GitHub Pages under /<repo>/, set
// `base: "/portfolio/"`. For root-domain / Vercel / Netlify hosting, "/" is correct.
export default defineConfig({
  base: "/",
  build: {
    target: "es2020",
    cssMinify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 750,
  },
});
