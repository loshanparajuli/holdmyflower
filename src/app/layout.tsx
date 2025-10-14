import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export const metadata: Metadata = {
  title: "flowerBOOM",
  description: "The best content powerengine in the world",
  icons: {
    icon: '/favicon.ico',
  },
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
