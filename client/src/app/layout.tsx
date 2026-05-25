import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { CommunityWrapper } from "@/components/community/CommunityWrapper";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
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
        className={`${cinzel.variable} ${inter.variable} font-sans antialiased selection:bg-brand-blue selection:text-white`}
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
