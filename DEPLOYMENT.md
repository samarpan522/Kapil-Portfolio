# Deployment Guide for Kapil CEO Portfolio

## Production Build

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Build Optimizations Applied
- ✅ Console & debugger removal in production
- ✅ Automatic code splitting (vendor chunks)
- ✅ Terser minification
- ✅ CSS purging & minification
- ✅ Image lazy loading
- ✅ React.lazy() code splitting

## Deployment Options

### 1. Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel
```
- Zero-config deployment
- Automatic HTTPS
- Edge caching included
- CDN globally distributed

### 2. Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```
- Easy Git integration
- Auto-deploy on push
- Built-in analytics

### 3. GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

### 4. AWS S3 + CloudFront
```bash
npm run build
# Upload dist/ to S3
# Configure CloudFront as CDN
```

### 5. Traditional Server
```bash
npm run build
# Copy dist/ contents to server's public directory
```

## Environment Setup

### Node Version
- Minimum: 16.0.0
- Recommended: 18.0.0 or higher

### Environment Variables
Create `.env` file:
```
VITE_APP_NAME=kapil-ceo-portfolio
VITE_APP_VERSION=1.0.0
```

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Check `dist/` folder is created
- [ ] Verify all sections are accessible
- [ ] Test navigation on deployed URL
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test on different browsers
- [ ] Check SEO meta tags in index.html
- [ ] Verify Google Fonts load correctly
- [ ] Monitor performance metrics

## Performance Benchmarks

| Metric | Value |
|--------|-------|
| Initial Bundle | 280.71 kB |
| Gzipped Size | ~91 kB |
| First Contentful Paint | <1s |
| Largest Contentful Paint | <2s |
| Cumulative Layout Shift | <0.1 |

## Monitoring After Deployment

1. **Web Vitals**: Monitor Core Web Vitals
2. **Analytics**: Track user engagement
3. **Errors**: Set up error tracking (Sentry)
4. **Performance**: Use Lighthouse CI
5. **Uptime**: Configure uptime monitoring

## Security Considerations

- [ ] Enable HTTPS (automatic with Vercel/Netlify)
- [ ] Add security headers
- [ ] Implement CSP headers
- [ ] Regular dependency updates
- [ ] Security scanning with npm audit

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Routes Not Working
- Ensure single-page app routing is configured
- Set up proper index.html fallback
- Check build output has all files

### Images Not Loading
- Verify image URLs in constants/data.js
- Check image CDN accessibility
- Ensure lazy loading is working

## Continuous Integration

### GitHub Actions Example
```yaml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

## Post-Deployment

1. Update `homepage` field in package.json if needed
2. Set up domain/subdomain
3. Configure analytics (Google Analytics, etc.)
4. Set up email notifications for errors
5. Create deployment runbook for team

---

**Need help?** Check deployment platform documentation or contact team.
