/**
 * IMAGE CONFIGURATION FILE
 *
 * How to change images:
 * 1. Find the image section you want to change below
 * 2. Replace the URL between the quotes with your new image URL
 * 3. Save this file
 *
 * OPTION 1: Upload to Supabase Storage (Recommended)
 * - Go to your Supabase dashboard: https://supabase.com/dashboard
 * - Click on "Storage" in the left sidebar
 * - Create a bucket called "images" (if not already created)
 * - Make the bucket PUBLIC
 * - Upload your image file
 * - Click on the uploaded image and copy the public URL
 * - Paste that URL between the quotes below
 *
 * OPTION 2: Use other free image hosting services
 * - Upload your image to Imgur, Cloudinary, or ImageBB
 * - Copy the direct image link (should end in .jpg, .png, etc.)
 * - Paste it between the quotes below
 *
 * OPTION 3: Use free stock photos from Pexels
 * - Go to pexels.com and find an image
 * - Right-click the image and select "Copy image address"
 * - Paste it between the quotes below
 */

export const IMAGES = {
  // LOGO - Your logo from the public folder
  logo: '/images/smith-logo.jpeg',
  
  // HOME PAGE IMAGES
  home: {
    // Large background image on the main banner
    heroBanner: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1920',

    // Image in the "Why Choose Us" section
    whyChooseUs: 'https://images.pexels.com/photos/3825576/pexels-photo-3825576.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // ABOUT PAGE IMAGES
  about: {
    // Background image at the top of the About page
    pageBanner: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1920',

    // First image showing your facility/team
    facility: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200',

    // Second image showing your work/products
    products: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  // CATALOGUES PAGE IMAGES
  catalogues: {
    // Background image at the top of the Catalogues page
    pageBanner: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },

  // CONTACT PAGE IMAGES
  contact: {
    // Background image at the top of the Contact page
    pageBanner: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
};
