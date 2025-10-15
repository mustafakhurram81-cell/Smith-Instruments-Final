# 🏥 Smith Instruments Website

A modern, responsive website for Smith Instruments - a surgical instruments manufacturer specializing in precision tools for healthcare professionals.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Contact Form** - Integrated with EmailJS for direct email notifications
- **PDF Catalogues** - Downloadable product catalogues for different specialties
- **Modern UI** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper meta tags and structured data
- **Fast Loading** - Optimized images and efficient code

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smith-instruments-website.git
   cd smith-instruments-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your EmailJS credentials
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
smith-instruments-website/
├── public/
│   ├── catalogues/          # PDF catalogue files
│   └── images/              # Static images
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CataloguesPage.tsx
│   │   └── ContactPage.tsx
│   ├── config/
│   │   └── images.ts       # Image URLs configuration
│   ├── utils/
│   │   └── seo.tsx         # SEO utilities
│   ├── App.tsx             # Main app component
│   └── main.tsx           # App entry point
├── WORKFLOW_GUIDE.md       # Complete workflow instructions
├── DEPLOYMENT_GUIDE.md     # Deployment instructions
└── IMAGE_SETUP_GUIDE.md    # Image management guide
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **EmailJS** - Contact form email service
- **Netlify** - Hosting and deployment

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly to your inbox. Follow the [WORKFLOW_GUIDE.md](WORKFLOW_GUIDE.md) for detailed setup instructions.

### Quick Setup:
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to `.env` file
4. Deploy to Netlify with environment variables

## 📄 PDF Catalogues

PDF catalogues are stored in the `public/catalogues/` folder and can be easily managed:

### Adding New Catalogues:
1. Add PDF to `public/catalogues/`
2. Update `src/pages/CataloguesPage.tsx`
3. Push to GitHub

### Updating Existing PDFs:
1. Replace the PDF file (keep same name)
2. Push to GitHub

## 🖼️ Image Management

Images are configured in `src/config/images.ts`. You can:

### Option 1: Supabase Storage (Recommended)
- Upload to Supabase Storage
- Copy public URLs
- Update `src/config/images.ts`

### Option 2: Free Image Hosting
- Upload to Imgur, ImageBB, etc.
- Copy direct image links
- Update `src/config/images.ts`

## 🚀 Deployment

### Automatic Deployment (Recommended)
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Every push to main branch auto-deploys

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📚 Documentation

- **[WORKFLOW_GUIDE.md](WORKFLOW_GUIDE.md)** - Complete guide for managing your website
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions
- **[IMAGE_SETUP_GUIDE.md](IMAGE_SETUP_GUIDE.md)** - Image management guide

## 🎨 Customization

### Colors
Main colors used throughout the site:
- Primary Orange: `#FF6B00`
- Dark Gray: `#4A4A4A`
- Light Gray: `#F5F5F5`

### Fonts
- Headings: Montserrat
- Body text: Open Sans

### Icons
All icons are from Lucide React. Available icons include:
- Heart, Activity, Brain, Bone, Stethoscope, Eye, Package, Shield

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks
```

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

## 🐛 Troubleshooting

### Common Issues
1. **Contact form not working** - Check EmailJS credentials
2. **Images not loading** - Verify image URLs
3. **PDFs not downloading** - Check file paths
4. **Build failures** - Check for TypeScript errors

### Getting Help
1. Check browser console for errors
2. Review Netlify build logs
3. Consult the workflow guides
4. Use Bolt.new for AI assistance

## 📄 License

This project is proprietary software for Smith Instruments.

## 🤝 Support

For technical support or questions:
- Check the workflow guides first
- Use Bolt.new for AI assistance
- Contact the development team

---

**Built with ❤️ for Smith Instruments**
