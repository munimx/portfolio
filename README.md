# Munim Ahmad - Portfolio

A modern, glassmorphism-styled portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Glassmorphism design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js static export
- 🎨 Framer Motion animations
- 🔍 SEO optimized with meta tags and Open Graph
- 🌐 Deployed on GitHub Pages
- ♿ Accessible design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ui/
│   │       ├── GlassCard.tsx
│   │       ├── Button.tsx
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   └── data/
│       ├── projects.ts
│       ├── experience.ts
│       └── skills.ts
└── public/
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/munimx/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build for production:
```bash
npm run build
```

The static files will be generated in the `out` directory.

## 🚀 Deployment

The portfolio automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Ensure GitHub Pages is enabled in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch to trigger deployment

## 📝 Customization

### Update Personal Information

Edit the data files in `lib/data/`:
- `projects.ts` - Your projects
- `experience.ts` - Work experience and education
- `skills.ts` - Your skills

### Update Social Links

Edit `app/components/ui/Footer.tsx` and `app/components/Contact.tsx` to update social media links.

### Colors

Modify the color scheme in `tailwind.config.ts` and `app/globals.css`.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspired by modern glassmorphism trends
- Built with [Next.js](https://nextjs.org/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Portfolio for the LEGEND Munim Ahmad :P**
