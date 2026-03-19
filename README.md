# Munim Ahmad — Portfolio

Next.js editorial portfolio rebuilt with Stitch-inspired layout proportions and verified project/experience data.

## Highlights

- Next.js 14 + React + TypeScript + Tailwind
- Dual navigation (top bar + **160px** left sidebar)
- Stitch-accurate spacing and sizing:
  - Sidebar: `160px`
  - Content rail: `960px`
  - Section spacing: `80px`
  - Card padding: `32px`
- Restored legacy skills matrix (AI/ML, Backend, Frontend, Cloud/DevOps)
- Custom cursor + grain texture + smooth section navigation

## Stack

- `next@14`
- `react@18`
- `typescript`
- `tailwindcss`
- `framer-motion`

## Project Structure

```text
app/
  components/
    Hero.tsx
    Projects.tsx
    About.tsx
    Experience.tsx
    Contact.tsx
    Navbar.tsx
    Sidebar.tsx
    Footer.tsx
    Cursor.tsx
  globals.css
  layout.tsx
  page.tsx
lib/
  data/
    skills.ts
public/
  assets/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
```

Static export is enabled for GitHub Pages via `next.config.js` (`output: 'export'`, `basePath: '/portfolio'` in production).

## Featured Work

- Recallm — semantic cache for LLMs (`recallm.dev`)
- DocuChat — cross-platform AI PDF assistant
- Endshift production RAG pipeline (500+ queries/day, 65% latency reduction)
- LLM fine-tuning pipeline (Llama 2 7B with LoRA/QLoRA)

## Contact

- Email: `munimahmad2@gmail.com`
- GitHub: `https://github.com/munimx`
- LinkedIn: `https://linkedin.com/in/munimahmad`
- Website: `https://recallm.dev`
