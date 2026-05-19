# Project Structure & Standards

## Directory Layout

```
kapil-ceo-portfolio/
├── public/                    # Static assets (optional)
│   └── favicon.ico
├── src/
│   ├── components/            # Layout & reusable components
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Marquee.jsx        # Scrolling marquee
│   │   ├── Footer.jsx         # Footer component
│   │   ├── OptimizedImage.jsx # Lazy-load image wrapper
│   │   └── Section.jsx        # Reusable section wrapper
│   │
│   ├── sections/              # Page sections (lazy-loaded)
│   │   ├── VisionSection.jsx
│   │   ├── LeadershipSection.jsx
│   │   ├── ImpactSection.jsx
│   │   ├── InsightsSection.jsx
│   │   ├── MediaSection.jsx
│   │   ├── PhilosophySection.jsx
│   │   ├── CollaborationSection.jsx
│   │   └── LegacySection.jsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── useReveal.js       # Scroll animation hook
│   │
│   ├── constants/             # Configuration & data
│   │   ├── animations.js      # Animation variants
│   │   ├── theme.js           # Color & typography tokens
│   │   └── data.js            # Navigation & content data
│   │
│   ├── utils/                 # Utility functions
│   │   └── helpers.js         # Common utilities
│   │
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
│
├── dist/                      # Production build (generated)
├── node_modules/              # Dependencies
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── package.json               # Project metadata & scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
├── index.html                 # HTML entry point
├── README.md                  # Project documentation
├── DEPLOYMENT.md              # Deployment guide
└── STRUCTURE.md               # This file
```

## Code Standards

### Component Structure
```javascript
// 1. Imports
import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { fadeUpVariants } from "../constants/animations";

// 2. Component definition
export function ComponentName() {
  // 3. Hooks
  const { ref, isInView } = useReveal();
  const [state, setState] = React.useState(false);

  // 4. Event handlers
  const handleClick = () => {
    // Handler logic
  };

  // 5. Effects
  React.useEffect(() => {
    // Effect logic
  }, []);

  // 6. Render
  return (
    <section ref={ref} className="py-32 bg-dark-bg">
      {/* Content */}
    </section>
  );
}
```

### Naming Conventions
- **Components**: PascalCase (e.g., `VisionSection.jsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useReveal.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `NAV_LINKS`)
- **Files**: PascalCase for components, camelCase for utils
- **CSS Classes**: kebab-case (Tailwind default)

### Tailwind Classes
```javascript
// ✅ Good: Concise and readable
className="py-32 md:py-40 bg-dark-bg border border-white/10"

// ✅ Good: Organized with line breaks for complex styles
className={`
  py-32 md:py-40
  bg-dark-bg
  border border-white/10
  rounded-lg
  hover:border-accent-red
`}

// ❌ Avoid: Inline ternary with long class strings
className={condition ? "very long class string" : "another long string"}
```

### Props Pattern
```javascript
// ✅ Good: Destructured props
export function Button({ label, onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// Usage
<Button label="Click me" onClick={handleClick} />
```

### Hook Usage
```javascript
// ✅ Good: Custom hooks for logic
function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = (window.scrollY / (document.height - window.innerHeight)) * 100;
      setProgress(scroll);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return progress;
}
```

## Git Workflow

### Commit Messages
```
feat: Add scroll progress indicator
fix: Correct section navigation scrolling
docs: Update deployment guide
refactor: Simplify navbar component logic
style: Format CSS classes
perf: Optimize image loading
```

### Branches
- `main` - Production ready
- `develop` - Development branch
- `feature/*` - New features
- `fix/*` - Bug fixes

## Performance Standards

### Bundle Size Targets
- Initial bundle: < 300 kB
- Each section: < 5 kB
- CSS: < 30 kB gzipped
- Total with vendors: < 100 kB gzipped

### Performance Metrics
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3s

## Deployment Standards

### Pre-Deployment
1. Run `npm run build`
2. Verify `dist/` folder
3. Test all links and navigation
4. Check responsive design
5. Validate performance with Lighthouse

### Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 12+, Android 8+

### SEO Standards
- Meta tags in `index.html`
- Open Graph tags
- Twitter Card tags
- Structured data (optional)

## Security

- ✅ HTTPS only
- ✅ No hardcoded secrets
- ✅ Regular dependency updates
- ✅ CSP headers recommended
- ✅ No console logs in production

## Accessibility (a11y)

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast
- ✅ Mobile touch targets (48x48px minimum)

---

**Last Updated**: May 4, 2026
**Version**: 1.0.0
