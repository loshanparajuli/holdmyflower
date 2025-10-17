export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "holdmyFlower",
  "url": "https://holdmyflower.com",
  "logo": "https://holdmyflower.com/flowerboom.svg",
  "description": "We are the creative team behind the most popular internet content that gets screened and watched by millions.",
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
    "name": "holdmyFlower"
  },
  "serviceType": "Video Production and Content Repurposing",
  "description": "We are the creative team behind the most popular internet content that gets screened and watched by millions.",
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
  "name": "holdmyFlower",
  "description": "We are the creative team behind the most popular internet content that gets screened and watched by millions.",
  "url": "https://holdmyflower.com",
  "inLanguage": "en-US"
}