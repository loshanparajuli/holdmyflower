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
    default: "holdmyFlower",
    template: "%s | holdmyFlower"
  },
  description: "We are the creative team behind the most popular internet content that gets screened and watched by millions.",
  keywords: ["content creation", "video editing", "social media content", "viral shorts", "TikTok", "Instagram Reels", "content repurposing", "video production"],
  authors: [{ name: "holdmyFlower" }],
  creator: "holdmyFlower",
  publisher: "holdmyFlower",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://holdmyflower.com",
    siteName: "holdmyFlower",
    title: "holdmyFlower",
    description: "We are the creative team behind the most popular internet content that gets screened and watched by millions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "holdmyFlower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "holdmyFlower",
    description: "We are the creative team behind the most popular internet content that gets screened and watched by millions.",
    images: ["/og-image.png"],
    // creator: "@yourtwitterhandle", // Add your Twitter handle here
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
  // verification: Domain verified via DNS, no manual verification needed
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
