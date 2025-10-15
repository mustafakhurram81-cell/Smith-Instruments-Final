# 🚀 Deployment Guide

## Initial Setup (One-time only)

### 1. GitHub Setup
1. Go to [GitHub.com](https://github.com) and create an account
2. Create a new repository called "smith-instruments-website"
3. Make it public
4. Don't initialize with README (we already have files)

### 2. Connect Your Local Project to GitHub
1. Open Cursor
2. Open terminal (Terminal → New Terminal)
3. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/smith-instruments-website.git
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your actual GitHub username)

### 3. Netlify Setup
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click "New site from Git"
4. Choose "GitHub" as provider
5. Select your "smith-instruments-website" repository
6. Use these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click "Deploy site"

### 4. Environment Variables in Netlify
1. In Netlify dashboard, go to your site
2. Go to "Site settings" → "Environment variables"
3. Add these variables:
   - `VITE_EMAILJS_SERVICE_ID` = your_service_id
   - `VITE_EMAILJS_TEMPLATE_ID` = your_template_id  
   - `VITE_EMAILJS_PUBLIC_KEY` = your_public_key
4. Click "Save"

### 5. Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS setup instructions

## Daily Deployment Process

### Making Changes
1. **Edit your website** (using Bolt.new or Cursor)
2. **Test locally** (optional but recommended):
   ```bash
   npm install
   npm run dev
   ```
3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```
4. **Wait for deployment** (2-3 minutes)
5. **Check your live site**

### Quick Commands Reference
```bash
# Install dependencies (first time only)
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Git commands
git add .                    # Stage all changes
git commit -m "Message"      # Commit changes
git push origin main         # Push to GitHub
```

## Deployment Troubleshooting

### Build Failures
1. Check Netlify build logs
2. Common issues:
   - Missing dependencies (run `npm install`)
   - TypeScript errors (check console)
   - Environment variables missing

### Environment Variables Not Working
1. Check Netlify environment variables are set
2. Make sure variable names start with `VITE_`
3. Redeploy after adding variables

### Site Not Updating
1. Check if GitHub push was successful
2. Wait 2-3 minutes for Netlify to build
3. Check Netlify deployment status
4. Try manual redeploy in Netlify dashboard

### Contact Form Issues
1. Verify EmailJS credentials in Netlify environment variables
2. Check EmailJS service is active
3. Test with a simple message first

## Advanced Configuration

### Custom Build Settings
Create `netlify.toml` file in your project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Performance Optimization
1. Enable Netlify's image optimization
2. Use WebP images when possible
3. Compress PDF files before uploading
4. Enable Netlify's CDN

### Security Headers
Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

## Monitoring

### Uptime Monitoring
1. Use services like UptimeRobot (free)
2. Set up alerts for downtime
3. Monitor response times

### Analytics
1. Add Google Analytics (optional)
2. Use Netlify Analytics (paid feature)
3. Monitor contact form submissions

### Error Tracking
1. Check Netlify function logs
2. Monitor browser console errors
3. Set up error notifications

## Backup Strategy

### Code Backup
- GitHub automatically backs up your code
- Keep local copies of important files
- Document your customizations

### Content Backup
- Keep copies of all images
- Save PDF catalogues locally
- Document your EmailJS setup

### Recovery Plan
1. If GitHub is down: work locally until it's back
2. If Netlify is down: site will be unavailable temporarily
3. If EmailJS is down: contact form won't work

## Success Metrics

### Deployment Success
- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] Contact form works
- [ ] PDFs download correctly
- [ ] Images load properly
- [ ] Mobile responsive

### Performance Targets
- [ ] Site loads in under 3 seconds
- [ ] All images optimized
- [ ] PDFs are reasonable file sizes
- [ ] No console errors

---

**Pro Tip:** Always test changes locally before pushing to production!
