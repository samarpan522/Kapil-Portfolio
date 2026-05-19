# 🛠️ QUICK REFERENCE & TROUBLESHOOTING

## ⚡ Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code (if prettier is added)
npm run format
```

---

## 🐛 COMMON ISSUES & SOLUTIONS

### Issue: "Cannot find module 'framer-motion'"
**Solution**: Run `npm install`

### Issue: Styles not loading (Tailwind not working)
**Solution**: Ensure `src/index.css` is imported in `src/main.jsx`
```javascript
import './index.css'
```

### Issue: Images not showing
**Solution**: Check Unsplash URLs are correct and have `fit=crop` parameter

### Issue: Animations not smooth
**Solution**: Check browser hardware acceleration is enabled
- Chrome: Settings → Advanced → System → Hardware Acceleration ON
- Safari: Develop → Disable Local File Restrictions OFF

### Issue: Mobile menu doesn't close on link click
**Solution**: The menu state updates automatically, but you can force it with:
```javascript
onClick={() => setIsOpen(false)}
```

### Issue: Red color doesn't match brand
**Solution**: Update in `tailwind.config.js`:
```javascript
colors: {
  'accent-red': '#DC2626',  // Change this hex value
}
```

---

## 🎨 DESIGN TOKENS QUICK REFERENCE

### Colors
```javascript
DARK_BG = #0A0A0A          // Primary background
LIGHT_BG = #F5F4F2         // Light contrast section
TEXT_WHITE = #FFFFFF       // Headlines
TEXT_GRAY = #A3A3A3        // Body text
ACCENT_RED = #DC2626       // Accents only
```

### Typography
```javascript
Headlines        → Cormorant Garamond, 700 weight
Body Text        → Barlow, 300-400 weight
Navigation       → Barlow, 600 weight, spaced caps
Signature        → Dancing Script, 400-700 weight
```

### Spacing Scale
```
4px    → 1 unit
8px    → 2 units
12px   → 3 units
16px   → 4 units
24px   → 6 units
32px   → 8 units
```

---

## 📐 RESPONSIVE BREAKPOINTS

```javascript
Mobile:   < 640px   (phone)
Tablet:   640px - 900px (ipad)
Desktop:  > 900px   (laptop)
```

**Tailwind Prefixes:**
```
sm:  ≥ 640px
md:  ≥ 768px
lg:  ≥ 1024px
xl:  ≥ 1280px
```

---

## 🎬 FRAMER MOTION CHEAT SHEET

### Basic Stagger Animation
```jsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  }}
  custom={0}
/>
```

### Scroll Trigger
```jsx
const { ref, isInView } = useReveal()

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={fadeUpVariants}
/>
```

### Hover Animation
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Click me
</motion.button>
```

### Parallax Scroll
```jsx
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 800], [0, -80])

<motion.div style={{ y }} />
```

---

## 🗂️ FILE ORGANIZATION TIPS

### Adding a New Section
1. Create component in `src/components/MySection.jsx`
2. Export named export: `export function MySection() { ... }`
3. Import in `App.jsx`: `import { MySection } from './components/MySection'`
4. Add to JSX: `<MySection />`

### Adding a New Data File
1. Create constant in `src/constants/data.js`
2. Export: `export const MY_DATA = [ ... ]`
3. Import where needed: `import { MY_DATA } from '../constants/data'`

### Adding Utility Hooks
1. Create in `src/hooks/useMyHook.js`
2. Export: `export function useMyHook() { ... }`
3. Import: `import { useMyHook } from '../hooks/useMyHook'`

---

## 🎯 PERFORMANCE TIPS

### Optimize Images
- Use proper dimensions (don't over-size)
- Compress PNG/JPG files (~5-10KB each)
- Use WebP format if supported
- Add `loading="lazy"` to images below fold

### Code Splitting (Future)
```jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Memoization
```jsx
const MemoComponent = React.memo(({ prop }) => {
  return <div>{prop}</div>
})
```

### useCallback for Event Handlers
```jsx
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies])
```

---

## 🔒 SECURITY BEST PRACTICES

- ✅ Never commit `.env` files with secrets
- ✅ Use environment variables for API keys
- ✅ Validate all external image URLs
- ✅ Sanitize user input if adding forms
- ✅ Use Content Security Policy headers

---

## 📊 LIGHTHOUSE AUDIT TARGETS

| Metric | Target | Goal |
|--------|--------|------|
| Performance | > 90 | ✅ |
| Accessibility | > 95 | ✅ |
| Best Practices | > 95 | ✅ |
| SEO | > 95 | ✅ |

**How to test:**
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying:
- [ ] Test on mobile (DevTools)
- [ ] Run `npm run build` successfully
- [ ] Check console for errors (DevTools)
- [ ] Run Lighthouse audit
- [ ] Test all buttons and links
- [ ] Update meta descriptions
- [ ] Add GA tracking if needed
- [ ] Test form submissions (if any)
- [ ] Check email links work
- [ ] Verify images load correctly

---

## 💡 QUICK TWEAKS

### Make Animations Faster
In component variants:
```javascript
transition: { duration: 0.5 }  // Reduce from 0.75
```

### Make Animations Slower
```javascript
transition: { duration: 1.2 }  // Increase from 0.75
```

### Change Hover Scale
In components:
```javascript
whileHover={{ scale: 1.04 }}   // Subtle (default: 1.06)
```

### Adjust Scroll Trigger Distance
In `useReveal()`:
```javascript
useReveal({ amount: 0.3 })  // Trigger further down (default: 0.2)
```

### Change Button Colors
In Tailwind config or inline:
```jsx
className="hover:bg-red-900"  // Darker on hover
```

---

## 🔗 USEFUL RESOURCES

- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **Vite Guide**: https://vitejs.dev/guide/
- **Unsplash**: https://unsplash.com/ (free images)

---

## 📞 SUPPORT TIPS

**For Framer Motion issues:**
- Check official docs at framer.com/motion
- Look for examples in GitHub discussions
- Test animations in Framer interactive editor

**For Tailwind styling issues:**
- Use `@apply` directive in CSS when needed
- Check spacing/sizing scale documentation
- Use arbitrary values: `w-[123px]`

**For React questions:**
- Check React hooks documentation
- Understand closure patterns
- Use React DevTools browser extension

---

## ✨ FINAL TIPS

1. **Comment your code** - Future you will thank you
2. **Test responsive** - Always check on actual devices
3. **Optimize images** - Speed matters for user experience
4. **Use accessibility** - Add alt text, aria labels, keyboard nav
5. **Monitor bundle** - Keep production build size under 300KB
6. **Version control** - Commit frequently with clear messages
7. **Document changes** - Update README as you modify
8. **Performance first** - Users prefer speed over fancy animations

---

**Built for excellence. Ready for success. 🎯**
