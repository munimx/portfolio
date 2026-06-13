# Munim Ahmad — Topographic Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/737db415-7b22-4fda-9d74-60be85f21683/deploy-status)](https://app.netlify.com/projects/amazing-figolla-9ba8cc/deploys)

Interactive portfolio for **Munim Ahmad**, a Full-Stack AI Engineer building production-grade AI systems, deployment infrastructure, and open-source developer tools.

Live at **[munimahmad.me](https://munimahmad.me)**.

## Concept

The portfolio is designed as a digital topographic survey. A WebGL terrain sits behind the content, with contour lines, station-style navigation, elevation readouts, coordinate HUD details, and project schematics that feel like engineering drawings.

The result is intentionally not a template: it is a bespoke single-page experience for AI infrastructure, RAG pipelines, semantic caching, and developer tooling work.

## Highlights

- Real-time Three.js terrain with custom GLSL displacement, contour isolines, cursor influence, scanlines, fog, and scroll-driven camera motion.
- Editorial DOM rendering from a typed content source in `src/data/content.ts`.
- GSAP choreography for the loader, project reveals, schematic drawing, magnetic buttons, and section transitions.
- Lenis smooth scrolling synced with ScrollTrigger.
- Reduced-motion fallback, no-script fallback, WebGL fallback styling, and static metadata for crawlers.
- Netlify-first deployment with immutable asset caching, security headers, sitemap, robots file, and custom-domain canonical URLs.

## Stack

- Vite
- TypeScript
- Three.js
- GSAP + ScrollTrigger
- Lenis
- Netlify

## Local Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The static bundle is emitted to `dist/`.

## Deploy

This repository is configured for Netlify:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Production deploys serve the site at [munimahmad.me](https://munimahmad.me).

## Project Map

```text
index.html              App shell, metadata, loader, WebGL canvas, fallback markup
netlify.toml            Netlify build, headers, and cache policy
public/
  headshot.jpg          Portrait asset
  munim-ahmad-resume.pdf
  robots.txt
  sitemap.xml
src/
  main.ts               Runtime orchestrator
  data/content.ts       Typed portfolio content
  dom/render.ts         Section rendering
  dom/schematics.ts     Project schematic SVG generation
  styles/main.css       Visual system and responsive layout
  ui/                   Loader, scroll, HUD, cursor, clipboard, animation modules
  webgl/                Terrain scene and shaders
```

## Content Source

Most public-facing copy lives in `src/data/content.ts`, including profile details, project entries, experience, skill groups, and contact rows. Update that file first when changing portfolio content.

## Accessibility

- Honors `prefers-reduced-motion`.
- Keeps semantic fallback content available in `noscript`.
- Uses external links with safe `rel` attributes.
- Serves résumé and contact links directly from the production domain.

