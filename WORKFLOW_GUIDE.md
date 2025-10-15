# 🚀 Complete Website Workflow Guide

## Overview
This guide will help you manage your Smith Instruments website with zero coding knowledge required for daily operations.

## 🎯 Your Daily Workflow

### Making Changes to Your Website

**Option 1: Using Bolt.new (Recommended for beginners)**
1. Go to [bolt.new](https://bolt.new)
2. Upload your project files or connect to GitHub
3. Make your changes using natural language
4. Download the updated files
5. Replace the files in your Cursor project
6. Push to GitHub (see GitHub section below)

**Option 2: Using Cursor (For direct editing)**
1. Open your project in Cursor
2. Make changes directly to files
3. Push to GitHub (see GitHub section below)

### Pushing Changes to GitHub

1. Open Cursor
2. Open the terminal (Terminal → New Terminal)
3. Run these commands:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
4. Wait 2-3 minutes for Netlify to auto-deploy

## 📧 Setting Up Contact Form (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Interested In: {{interested_in}}

Message:
{{message}}
```

4. Save and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Environment Variables
1. In Cursor, create a file called `.env` in your project root
2. Add these lines (replace with your actual values):
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Save the file
4. Push to GitHub

## 📄 Managing PDF Catalogues

### Adding New PDF Catalogues
1. Add your PDF file to the `public/catalogues/` folder
2. Open `src/pages/CataloguesPage.tsx` in Cursor
3. Find the `catalogues` array (around line 14)
4. Add a new object like this:
   ```javascript
   {
     icon: <Heart size={48} />,  // Choose an icon
     title: 'Your Catalogue Title',
     description: 'Description of your catalogue',
     pdfUrl: '/catalogues/your-file-name.pdf'
   }
   ```
5. Save and push to GitHub

### Updating Existing PDFs
1. Replace the PDF file in `public/catalogues/` folder
2. Keep the same filename
3. Push to GitHub

### Available Icons
You can use any of these icons (replace `<Heart>` with your choice):
- `<Heart>` - Heart icon
- `<Activity>` - Activity icon  
- `<Brain>` - Brain icon
- `<Bone>` - Bone icon
- `<Stethoscope>` - Stethoscope icon
- `<Eye>` - Eye icon
- `<Package>` - Package icon
- `<Shield>` - Shield icon

## 🖼️ Managing Images

### Option 1: Using Supabase Storage (Recommended)
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to "Storage" → "images" bucket
4. Upload your new image
5. Copy the public URL
6. Open `src/config/images.ts` in Cursor
7. Replace the URL for the image you want to change
8. Save and push to GitHub

### Option 2: Using Free Image Hosting
1. Upload image to [Imgur](https://imgur.com) or [ImageBB](https://imgbb.com)
2. Get the direct image link (should end in .jpg, .png, etc.)
3. Open `src/config/images.ts` in Cursor
4. Replace the URL
5. Save and push to GitHub

## 🔧 Common Tasks

### Changing Text Content
1. Open the relevant page file in Cursor:
   - Home page: `src/pages/HomePage.tsx`
   - About page: `src/pages/AboutPage.tsx`
   - Contact page: `src/pages/ContactPage.tsx`
   - Catalogues page: `src/pages/CataloguesPage.tsx`
2. Find the text you want to change
3. Edit it directly
4. Save and push to GitHub

### Changing Colors
1. Open any page file in Cursor
2. Look for color codes like `#FF6B00` (orange) or `#4A4A4A` (dark gray)
3. Replace with your desired color
4. Save and push to GitHub

### Adding New Pages
1. Create a new file in `src/pages/` (e.g., `NewPage.tsx`)
2. Copy the structure from an existing page
3. Update `src/App.tsx` to include your new page
4. Add navigation links in `src/components/Header.tsx`
5. Save and push to GitHub

## 🚨 Troubleshooting

### Contact Form Not Working
1. Check your `.env` file has the correct EmailJS credentials
2. Make sure you pushed the `.env` file to GitHub
3. Verify your EmailJS template has the correct variable names
4. Check the browser console for error messages

### Images Not Loading
1. Check the URL in `src/config/images.ts`
2. Make sure the image URL is accessible
3. Try a different image hosting service

### PDFs Not Downloading
1. Check the file exists in `public/catalogues/`
2. Verify the filename matches exactly (case-sensitive)
3. Make sure you pushed the PDF to GitHub

### Website Not Updating
1. Check if you pushed changes to GitHub
2. Wait 2-3 minutes for Netlify to deploy
3. Check Netlify dashboard for deployment status
4. Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## 📞 Getting Help

If you get stuck:
1. Check the browser console for error messages
2. Look at the Netlify deployment logs
3. Ask for help with specific error messages
4. Use Bolt.new to ask for help with natural language

## 🎉 Success Checklist

- [ ] Contact form sends emails to your inbox
- [ ] PDF catalogues download properly
- [ ] Images display correctly
- [ ] Changes deploy automatically to Netlify
- [ ] You can make updates without coding knowledge

---

**Remember:** Always test your changes locally first, then push to GitHub for deployment!
