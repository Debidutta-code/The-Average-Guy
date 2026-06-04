import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingActions from "@/components/FloatingActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drparthamohapatra.com'),
  title: {
    default: "Best Dermatologist in Bhubaneswar | Dr. Partha Mohapatra Skin Clinic",
    template: "%s | Dr. Partha Mohapatra"
  },
  description: "Dr. Partha Mohapatra is a trusted dermatologist in Bhubaneswar (Nayapalli, Unit 4) offering acne, hair loss, laser and skin treatments. Book appointment online.",
  keywords: ["dermatologist bhubaneswar", "skin clinic nayapalli", "hair doctor bhubaneswar", "skin specialist Bhubaneswar", "best dermatologist in Bhubaneswar Odisha", "hair treatment clinic Bhubaneswar", "laser skin treatment Bhubaneswar"],
  openGraph: {
    title: "Best Dermatologist in Bhubaneswar | Dr. Partha Mohapatra Skin Clinic",
    description: "Dr. Partha Mohapatra is a trusted dermatologist in Bhubaneswar (Nayapalli, Unit 4) offering acne, hair loss, laser and skin treatments.",
    url: "https://drparthamohapatra.com",
    siteName: "Dr. Partha Mohapatra Dermatology Clinic",
    images: [
      {
        url: "/clinic/clinic-1.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Partha Mohapatra Clinic Bhubaneswar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://drparthamohapatra.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Dr. (Maj) Partha Mohapatra Dermatology Clinic",
    "image": "https://drparthamohapatra.com/clinic/clinic-1.jpg",
    "description": "Premium dermatology and hair specialist in Bhubaneswar offering advanced clinical treatments.",
    "@id": "https://drparthamohapatra.com",
    "url": "https://drparthamohapatra.com",
    "telephone": "+91 99999 99999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No. 9, KAR Clinic OPD Building, Near MLA Colony, Near Aakash Institute, Unit 4 area",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2618958,
      "longitude": 85.8272551
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
      "opens": "10:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "983"
    },
    "medicalSpecialty": "Dermatology",
    "priceRange": "$$"
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <FloatingActions />
      </body>
    </html>
  );
}
