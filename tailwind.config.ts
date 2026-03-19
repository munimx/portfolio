/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6F2EB',
        accent: {
          primary: '#C84B2F',
          secondary: '#D41111',
        },
        ink: '#1A1714',
        muted: '#8C8782',
        border: '#D2CCC0',
      },
      fontFamily: {
        heading: ['var(--font-dm-serif)', 'serif'],
        body: ['var(--font-ibm-plex)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        editorial: ['var(--font-newsreader)', 'serif'],
      },
      spacing: {
        // Stitch-accurate spacing
        'sidebar': '160px',  // NOT 240px!
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
