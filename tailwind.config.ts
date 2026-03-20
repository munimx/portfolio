/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        accent: {
          primary: 'var(--accent)',
          secondary: 'var(--accent)',
        },
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        highlight: 'var(--highlight)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['var(--font-dm-serif)', 'serif'],
        body: ['var(--font-ibm-plex)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        editorial: ['var(--font-newsreader)', 'serif'],
      },
      spacing: {
        // Editorial rail spacing
        'sidebar': '192px',
        'nav': '72px',
      },
      maxWidth: {
        'content': '960px',  // NOT 1200px!
      },
      fontSize: {
        // Typography scale - Stitch accurate
        'hero': 'clamp(48px, 8vw, 72px)',
        'section': 'clamp(36px, 6vw, 56px)',
        'card': 'clamp(24px, 3.5vw, 36px)',
      },
    },
  },
  plugins: [],
};
