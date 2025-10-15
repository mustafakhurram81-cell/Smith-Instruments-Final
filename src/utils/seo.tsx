import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Smith Instruments`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonical);
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, canonical, ogImage]);
}

export const seoConfig = {
  home: {
    title: 'Premium Surgical Instruments Manufacturer',
    description: 'Smith Instruments - USA-based manufacturer of precision surgical instruments for plastic surgery, cardiovascular, neurology, orthopedics. 20+ years serving healthcare professionals globally.',
    canonical: 'https://smithinstruments.com/'
  },
  catalogues: {
    title: 'Surgical Instruments Catalogues',
    description: 'Browse our comprehensive catalogues of surgical instruments including plastic surgery, cardiovascular, neurology, orthopedic tools, diagnostics, and laryngoscopes. Download PDF catalogues.',
    canonical: 'https://smithinstruments.com/catalogues'
  },
  about: {
    title: 'About Us - 20+ Years of Excellence',
    description: 'Since 2002, Smith Instruments has been crafting precision surgical tools in the USA. Learn about our commitment to quality, custom OEM services, and customer-first approach.',
    canonical: 'https://smithinstruments.com/about'
  },
  contact: {
    title: 'Contact Us - Get Custom Solutions',
    description: 'Contact Smith Instruments for surgical instrument inquiries, custom OEM solutions, and quotes. Easy ordering via WhatsApp or email. We serve 20+ countries worldwide.',
    canonical: 'https://smithinstruments.com/contact'
  }
};
