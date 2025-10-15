# Image Setup Guide

## Recommended: Supabase Storage (FREE)

This is the best option for your workflow - completely free and no need to redeploy to Netlify every time you change an image.

### Step 1: Set Up Supabase Storage (One-time setup)

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Storage** in the left sidebar
4. Click **New bucket**
5. Name it `images`
6. **IMPORTANT**: Make it **Public** (toggle the public option ON)
7. Click **Create bucket**

### Step 2: Upload Your Images

1. Click on your `images` bucket
2. Click **Upload file**
3. Upload your image (e.g., `hero-banner.jpg`)
4. After upload, click on the image
5. Click **Copy URL** - you'll get something like:
   ```
   https://abcdefgh.supabase.co/storage/v1/object/public/images/hero-banner.jpg
   ```

### Step 3: Update the Config File

1. Open `src/config/images.ts` in your code editor (Cursor)
2. Replace the URLs with your Supabase URLs:

```typescript
export const IMAGES = {
  home: {
    heroBanner: 'https://YOUR-PROJECT.supabase.co/storage/v1/object/public/images/hero-banner.jpg',
    whyChooseUs: 'https://YOUR-PROJECT.supabase.co/storage/v1/object/public/images/why-choose-us.jpg',
  },
  // ... etc
}
```

3. Save the file
4. Push to Netlify

### To Change Images Later:

1. Upload new image to Supabase Storage
2. Copy the new image URL
3. Update `src/config/images.ts` with the new URL
4. Push to Netlify (just one tiny file change)

---

## Alternative: Local Images in Public Folder

If you really want to store images locally in your code:

### Step 1: Add Images to Public Folder

1. Create a folder: `public/images/`
2. Put your images there:
   ```
   public/
     images/
       hero-banner.jpg
       facility.jpg
       about-banner.jpg
       products.jpg
       catalogues-banner.jpg
       contact-banner.jpg
   ```

### Step 2: Update the Config File

Open `src/config/images.ts` and use relative paths:

```typescript
export const IMAGES = {
  home: {
    heroBanner: '/images/hero-banner.jpg',
    whyChooseUs: '/images/facility.jpg',
  },
  about: {
    pageBanner: '/images/about-banner.jpg',
    facility: '/images/facility.jpg',
    products: '/images/products.jpg',
  },
  catalogues: {
    pageBanner: '/images/catalogues-banner.jpg',
  },
  contact: {
    pageBanner: '/images/contact-banner.jpg',
  },
}
```

### Step 3: Deploy to Netlify

When you deploy, the images in the `public` folder will be included.

### To Change Images Later:

1. Replace the image file in `public/images/`
2. Redeploy to Netlify (full deployment required)

---

## Comparison

| Feature | Supabase Storage | Local (Public Folder) |
|---------|-----------------|----------------------|
| Cost | FREE | FREE |
| Change images | Just update URL in config | Need to redeploy entire site |
| Setup difficulty | Easy | Very Easy |
| Image hosting | Supabase CDN | Netlify CDN |
| Best for | Frequent image changes | Rarely change images |

## My Recommendation

Use **Supabase Storage** because:
- It's free
- You can change images without full redeployment
- Professional CDN delivery
- Easier to manage as your site grows
- You already have Supabase configured
