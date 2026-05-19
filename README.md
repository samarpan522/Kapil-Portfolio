# Kapil CEO Portfolio

Premium personal brand portfolio website for Kapil Gautam - CEO and Technical Lead at Archphaze.

## 📋 Features

- **Premium Design**: Dark theme with red accents and elegant typography
- **Smooth Navigation**: Real-time scroll tracking with active section highlighting
- **Scroll Progress Bar**: Visual indicator of page scroll position
- **Lazy Loading**: Sections load on-demand for faster initial page load
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations on scroll
- **Performance Optimized**: Code splitting, minification, and image lazy loading

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **Vite 5.0** - Build tool for fast development
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 11.0** - Animation library
- **PostCSS** - CSS preprocessing

## 📂 Project Structure

```
src/
├── components/          # Layout components (Navbar, Hero, Footer, etc.)
├── sections/           # Page section components (Vision, Leadership, etc.)
├── hooks/              # Custom React hooks (useReveal for animations)
├── constants/          # Data and configuration (theme, animations, etc.)
├── utils/              # Utility functions (optional)
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📊 Performance

- **Initial Bundle**: 280.71 kB optimized
- **Lazy-Loaded Sections**: 1.8-3.2 kB each
- **Code Splitting**: Automatic vendor separation
- **Image Optimization**: Lazy loading implemented

## 🔧 Configuration

### Build Features
- Automatic code splitting and minification
- Console/debugger removal in production
- Source map optimization
- Vendor bundle separation

### Development
- Fast refresh with Vite
- Path aliases for clean imports
- Terser minification
- Auto-prefixing with PostCSS

## 📝 Deployment

Ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Traditional web servers

Build command: `npm run build`
Output directory: `dist/`

## 📄 License

MIT License

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the portfolio live.

### Build for Production

```bash
npm run build
npm run preview
```

## ✨ Key Features

### Navbar
- **Two-row premium structure** with top bar (social links) and main navigation
- **Blur effect on scroll** with smooth transitions
- **Mobile-responsive** full-screen menu overlay
- **Animated nav links** with red underline hover effect

### Hero Section
- **Full-screen hero** with parallax scroll effects
- **Staggered entrance animations** for text elements
- **Professional CEO photo** with red accent line
- **Floating badge** with subtle oscillation
- **Scroll indicator** with pulsing animation

### Legacy Initiatives
- **4-column card grid** (responsive to 2-col on tablet, 1-col on mobile)
- **Hover effects**: Image scale, red top bar, shadow
- **Entrance animations** triggered by scroll
- **Overlay gradients** with dark fade

### Philosophy Section
- **Dark background contrast** with light section before
- **Pull quotes** with red opening quotation mark
- **Vertical dividers** between quotes
- **Responsive two-column layout**

### Collaboration CTA
- **White section** with bordered container
- **Decorative emblem** with low opacity
- **Signature in Dancing Script** font
- **Strategic alliance messaging**

### Footer
- **Navigation links** matching navbar structure
- **Copyright information**
- **Clean, minimal design**

## 🎬 Animation Features

All animations use Framer Motion with:
- **Fade Up**: `{ opacity: 0, y: 48 } → { opacity: 1, y: 0 }`
- **Scroll Reveals**: `useInView` with `once: true` and `amount: 0.2`
- **Parallax Effects**: `useScroll` + `useTransform` on hero
- **Smooth Transitions**: `duration: 0.75s` with `ease: [0.22, 1, 0.36, 1]`

## 🎯 Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| Dark Background | `#0A0A0A` | Primary background |
| Light Background | `#F5F4F2` | Contrast section |
| Text White | `#FFFFFF` | Headlines, primary text |
| Text Gray | `#A3A3A3` | Body text, descriptions |
| Accent Red | `#DC2626` | Borders, buttons, accents |

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 900px
- **Desktop**: > 900px

All sections adapt gracefully with:
- Single-column layouts on mobile
- Optimized spacing and typography
- Hamburger menu navigation
- Touch-friendly buttons

## 🔧 Customization

### Update Brand Information
Edit `/src/constants/data.js`:
- Navigation links
- Initiative cards
- Philosophy quotes
- Hero statistics

### Modify Colors
Edit `/src/constants/theme.js` or `tailwind.config.js`:
- Update color tokens
- Adjust font families
- Modify breakpoints

### Change Images
Update image URLs in components (currently using Unsplash):
```jsx
img src="https://images.unsplash.com/..."
```

## 📊 Performance

- **Optimized images** with Unsplash URLs (CDN-delivered)
- **Lazy loading** via Framer Motion triggers
- **Minimal CSS** with Tailwind utilities
- **Code-split components** ready for React.lazy()

## 📄 License

© 2026 Kapil Gautam. All rights reserved.

---

**Built with ❤️ for visionary leaders.**
