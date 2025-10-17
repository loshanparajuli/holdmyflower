import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://holdmyflower.com'),
  title: {
    default: "Hold My Flower - Content Powerhouse | Video Editing & Content Repurposing",
    template: "%s | Hold My Flower"
  },
  description: "Hold My Flower transforms your content into viral shorts for TikTok, Instagram, LinkedIn & X. Expert video editing with AI-powered hooks, retention optimization, and content repurposing. We sell accountability, authority, and execution.",
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
  authors: [{ name: "Hold My Flower Team" }],
  creator: "Hold My Flower",
  publisher: "Hold My Flower",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://holdmyflower.com",
    siteName: "Hold My Flower",
    title: "Hold My Flower - Content Powerhouse",
    description: "We sell accountability, authority, and execution. Professional video editing and content repurposing that delivers results.",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "Hold My Flower - Content Powerhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hold My Flower - Content Powerhouse",
    description: "We sell accountability, authority, and execution. Professional video editing and content repurposing that delivers results.",
    images: ["/og-image.png"],
    // Add your Twitter handle when ready
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
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
