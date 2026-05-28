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
import Script from "next/script";

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
        <Script id="schema-local-business" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Old Town Cafe Bhubaneswar",
            "image": "https://oldtowncafe.in/og-image.jpg",
            "@id": "https://oldtowncafe.in",
            "url": "https://oldtowncafe.in",
            "telephone": "+919706613566",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. 125, 200ft Road, near Sidheswar Temple, Patharagadia",
              "addressLocality": "Bhubaneswar",
              "postalCode": "751024",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 20.2954,
              "longitude": 85.8369
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "11:00",
              "closes": "22:00"
            },
            "servesCuisine": "Specialty Coffee, Continental, Indian",
            "priceRange": "$$"
          })}
        </Script>
      </body>
    </html>
  );
}
