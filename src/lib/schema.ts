export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hold My Flower",
  "url": "https://holdmyflower.com",
  "logo": "https://holdmyflower.com/flowerboom.svg",
  "description": "Transform your content into viral shorts for TikTok, Instagram, LinkedIn, and X. We build accountability, authority, and EXECUTION.",
  "sameAs": [
    "https://twitter.com/holdmyflower",
    "https://linkedin.com/company/holdmyflower",
    "https://instagram.com/holdmyflower"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": "English"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Creation & Video Editing",
  "provider": {
    "@type": "Organization",
    "name": "Hold My Flower"
  },
  "serviceType": "Video Production and Content Repurposing",
  "description": "Professional content creation and video editing services for social media platforms including TikTok, Instagram, LinkedIn, and X.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Content Creation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Video Editing & Content Repurposing",
          "description": "Transform existing content into viral shorts optimized for multiple platforms"
        }
      }
    ]
  }
}

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hold My Flower - Content Powerhouse",
  "description": "Transform your content into viral shorts for TikTok, Instagram, LinkedIn, and X.",
  "url": "https://holdmyflower.com",
  "inLanguage": "en-US"
}