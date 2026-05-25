import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { CommunityWrapper } from "@/components/community/CommunityWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand-orange selection:text-white`}
      >
        <SmoothScrollProvider>
          <div className="noise-overlay" />
          <PageTransition>
            {children}
          </PageTransition>
          <CommunityWrapper />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
