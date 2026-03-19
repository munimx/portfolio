# Munim Ahmad — Portfolio

A personal portfolio website showcasing my work as a Full-Stack AI Engineer. Built with vanilla HTML/CSS/JavaScript and featuring a hybrid editorial design that blends warm, artisanal aesthetics with structured research themes.

## 🎨 Design Philosophy

**Editorial Hybrid**: Combines the warmth of handcrafted design with the precision of academic research portfolios.

- **Typography**: DM Serif Display (headlines) + IBM Plex Sans (body) + JetBrains Mono (code/meta)
- **Color Palette**: Warm parchment backgrounds (#F4F1EA) with rust/editorial red accents (#C8331F)
- **Interactive**: Custom cursor with trail effect, grain texture overlay, scroll reveal animations
- **Navigation**: Dual system - top navigation bar + left sidebar (Stitch-inspired)

## 🚀 Features

- ✨ **Custom Design System** - CSS custom properties for consistent theming
- 🎯 **Dual Navigation** - Top bar for branding + left sidebar for sections
- 📱 **Fully Responsive** - Mobile-first design with breakpoints at 768px and 1024px
- ⚡ **Performance Optimized** - Vanilla JS, no frameworks, <3s load time
- 🎨 **Interactive Elements** - Custom cursor, scroll reveals, hover effects
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 📊 **Real Data** - All projects and experience verified from resume and GitHub

## 📁 Structure

```
portfolio/
├── index.html              # Main portfolio (new version)
├── portfolio.html          # Original design reference
├── public/
│   ├── assets/
│   │   ├── home/          # Hero section assets
│   │   ├── projects/      # Project screenshots
│   │   ├── about/         # About section assets
│   │   └── contact/       # Contact assets
│   ├── icons/
│   └── images/
├── Munim Ahmad Resume.pdf  # Resume download
├── README.md
└── DEPLOYMENT.md
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript** - Vanilla ES6+ (cursor, scroll reveals, navigation)
- **Design Inspiration** - Stitch AI (dual navigation, editorial layouts)
- **Fonts** - Google Fonts (DM Serif Display, IBM Plex Sans, JetBrains Mono, Newsreader)

## 🔗 Sections

1. **Abstract** - Hero section with name, tagline, rotating text, stats grid
2. **Publications** - Featured projects (Recallm, DocuChat) + supporting work
3. **Methodology** - About, bio, tech stack, approach
4. **Experience** - Timeline of work history and education
5. **Appendix** - Contact information and social links

## 🎯 Featured Projects

### Recallm
- **URL**: [recallm.dev](https://recallm.dev)
- **Description**: Semantic cache for LLMs, reduces API costs by 40-70%
- **Tech**: Python, ONNX Runtime, FastEmbed, Redis, Prometheus

### DocuChat
- **URL**: [github.com/munimx/DocuChat](https://github.com/munimx/DocuChat)
- **Description**: Cross-platform AI PDF assistant with RAG
- **Tech**: Electron, React, TypeScript, LangChain, ChromaDB

## 🚦 Local Development

1. **Clone the repository**
```bash
git clone https://github.com/munimx/portfolio.git
cd portfolio
```

2. **Start a local server**
```bash
# Python 3
python3 -m http.server 8000

# Or use any static server
npx serve
```

3. **Open in browser**
```
http://localhost:8000/index.html
```

## 🌐 Deployment

The portfolio is deployed on GitHub Pages at [munimx.github.io/portfolio](https://munimx.github.io/portfolio/)

### Deploy Updates

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages automatically serves `index.html` from the main branch.

## 📝 Customization

### Update Colors
Edit CSS custom properties in `index.html`:
```css
:root {
  --bg: #F4F1EA;
  --accent: #C8331F;
  --ink: #1A1714;
  /* ... */
}
```

### Update Content
All content is inline in `index.html`:
- Hero stats: Line ~130
- Projects: Line ~250
- About bio: Line ~450
- Experience: Line ~550
- Contact links: Line ~650

### Update Projects
Edit the project cards in the Publications section with your own:
- Title, description, tech tags
- Links (GitHub, live site)
- Code previews (optional)

## 🎨 Design Credits

- **Stitch AI** - Navigation and layout inspiration
- **Original Design** - Warm editorial aesthetic from portfolio.html
- **Fonts** - Google Fonts
- **Icons** - Unicode symbols and custom SVG

## 📊 Performance

- **Load Time**: <3 seconds
- **Bundle Size**: ~50KB HTML+CSS+JS (inline)
- **Images**: Optimized JPEGs from Stitch
- **Fonts**: Loaded from Google Fonts CDN

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on navigation
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Custom cursor disabled on touch devices

## 📄 License

Open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspired by Stitch AI's editorial research themes
- Built as a personal project to showcase AI engineering work
- All project data verified from resume and GitHub repositories

---

**Munim Ahmad** — Full-Stack AI Engineer  
📧 munimahmad2@gmail.com  
🔗 [github.com/munimx](https://github.com/munimx)  
🌐 [recallm.dev](https://recallm.dev)

