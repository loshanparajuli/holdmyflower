import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://flowerboom.com'), // Replace with your actual domain
  title: {
    default: "FlowerBoom - Content Powerhouse | Video Editing & Content Repurposing",
    template: "%s | FlowerBoom"
  },
  description: "FlowerBoom transforms your content into viral shorts for TikTok, Instagram, LinkedIn & X. Expert video editing with AI-powered hooks, retention optimization, and content repurposing. We sell accountability, authority, and execution.",
  keywords: [
    "video editing",
    "content repurposing",
    "TikTok content",
    "Instagram Reels",
    "LinkedIn video",
    "viral shorts",
    "content creation",
    "video production",
    "social media content",
    "YouTube editing",
    "content agency",
    "short-form video",
    "content optimization",
    "video hooks",
    "retention editing"
  ],
  authors: [{ name: "FlowerBoom Team" }],
  creator: "FlowerBoom",
  publisher: "FlowerBoom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowerboom.com",
    siteName: "FlowerBoom",
    title: "FlowerBoom - Content Powerhouse | Video Editing & Content Repurposing",
    description: "Transform your content into viral shorts for TikTok, Instagram, LinkedIn & X. Expert video editing with AI-powered optimization.",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "FlowerBoom - Content Powerhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowerBoom - Content Powerhouse",
    description: "Transform your content into viral shorts for TikTok, Instagram, LinkedIn & X.",
    images: ["/og-image.png"],
    creator: "@flowerboom", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/flowerboom.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${manrope.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
