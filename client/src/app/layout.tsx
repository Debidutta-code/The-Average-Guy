import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kapoor's Dental Care Centre | Best Dental Clinic in Bhubaneswar",
  description: "Trusted dental clinic in Bapuji Nagar, Bhubaneswar offering painless RCT, whitening, braces, and modern dental treatments. 5.0 Rated.",
  keywords: ["dentist bhubaneswar", "dental clinic bapuji nagar", "rct bhubaneswar", "teeth whitening bhubaneswar", "Kapoor dental care"],
  openGraph: {
    title: "Kapoor's Dental Care Centre | Best Dental Clinic in Bhubaneswar",
    description: "Advanced & Gentle Dental Care in Bapuji Nagar. Trusted by 1000+ patients.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "Kapoor's Dental Care Centre",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070",
    "@id": "https://kapoordental.com",
    "url": "https://kapoordental.com",
    "telephone": "+91 00000 00000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "216, Bapuji Nagar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751009",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2525,
      "longitude": 85.8268
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "17:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "13"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans text-slate-900 bg-white`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
