export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hold My Flower",
  "url": "https://holdmyflower.com",
  "logo": "https://holdmyflower.com/logo.svg",
  "description": "Professional video editing and content repurposing agency specializing in short-form content for TikTok, Instagram, LinkedIn, and X.",
  "foundingDate": "2024",
  // Add social media URLs when accounts are created:
  // "sameAs": [
  //   "https://twitter.com/yourusername",
  //   "https://linkedin.com/company/yourcompany",
  //   "https://instagram.com/yourusername"
  // ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Video Editing & Content Repurposing",
  "provider": {
    "@type": "Organization",
    "name": "Hold My Flower"
  },
  "description": "Expert video editing services that transform long-form content into engaging short-form videos optimized for social media platforms.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Video Editing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Repurposing",
          "description": "Transform your existing content for TikTok, Instagram, LinkedIn, and X"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Video Editing",
          "description": "Professional video editing with optimized hooks and retention"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Thumbnail Design",
          "description": "Eye-catching thumbnail design and optimization"
        }
      }
    ]
  }
}

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hold My Flower - Content Powerhouse",
  "description": "Transform your content into viral shorts for TikTok, Instagram, LinkedIn & X.",
  "publisher": {
    "@type": "Organization",
    "name": "Hold My Flower"
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly do you do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repurpose your existing content to go parallelly on TikTok, Instagram, LinkedIn, and X. We ensure it follows the best hook, crazy retention, and enough reasons to not quit watching. We sell accountability, authority, and the EXECUTION."
      }
    },
    {
      "@type": "Question",
      "name": "Cost of service and deliverables",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deliverables will be ready in about 3–5 days depending on the scope and urgency. We're always open for forehead-async communication for time-sensitive projects."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. I'd rather enlighten instead of doomscroll. Check my calendar on weekends, 9–12 AM EST."
      }
    }
  ]
}
