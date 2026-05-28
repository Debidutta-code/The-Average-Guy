import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

import { metadata as siteMetadata } from "./metadata";
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${playfair.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary selection:text-foreground`}
      >
        <SmoothScrollProvider>
          <div className="noise-overlay" />
          <PageTransition>
            {children}
          </PageTransition>
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
