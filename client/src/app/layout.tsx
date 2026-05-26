import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { CommunityWrapper } from "@/components/community/CommunityWrapper";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
        className={`${cormorant.variable} ${plusJakarta.variable} font-sans antialiased selection:bg-brand-blue selection:text-white`}
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
