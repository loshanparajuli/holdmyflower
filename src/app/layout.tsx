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
    default: "Hold My Flower - Content Powerhouse",
    template: "%s | Hold My Flower"
  },
  description: "Transform your content into viral shorts for TikTok, Instagram, LinkedIn, and X. We build accountability, authority, and EXECUTION for your brand.",
  keywords: ["content creation", "video editing", "social media content", "viral shorts", "TikTok", "Instagram Reels", "content repurposing", "video production"],
  authors: [{ name: "Hold My Flower" }],
  creator: "Hold My Flower",
  publisher: "Hold My Flower",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://holdmyflower.com",
    siteName: "Hold My Flower",
    title: "Hold My Flower - Content Powerhouse",
    description: "Transform your content into viral shorts for TikTok, Instagram, LinkedIn, and X. We build accountability, authority, and EXECUTION.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hold My Flower - Content Powerhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hold My Flower - Content Powerhouse",
    description: "Transform your content into viral shorts for TikTok, Instagram, LinkedIn, and X.",
    images: ["/og-image.png"],
    creator: "@holdmyflower",
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
    google: "your-google-verification-code", // Add your actual verification code
  },
  alternates: {
    canonical: "https://holdmyflower.com",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
