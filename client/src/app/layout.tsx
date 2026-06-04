import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: "Dr. (Maj) Partha Mohapatra | Dermatologist & Skin Specialist in Bhubaneswar",
  description: "Advanced Dermatology Care with Trusted Clinical Expertise. Dr.(Maj) Partha Mohapatra is a leading Dermatologist (Skin & Hair Specialist) in Bhubaneswar. Book your appointment at KAR Clinic OPD.",
  keywords: ["Dermatologist in Bhubaneswar", "Skin Specialist Bhubaneswar", "Dr. Partha Mohapatra", "Hair Specialist Bhubaneswar", "KAR Clinic Unit 4", "Skin Clinic Bhubaneswar"],
  openGraph: {
    title: "Dr. (Maj) Partha Mohapatra | Dermatologist in Bhubaneswar",
    description: "Premium Skin and Hair Care in Bhubaneswar. 4.9 Rating with 983+ Reviews.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. (Maj) Partha Mohapatra Dermatology Clinic",
    "image": "https://your-domain.com/clinic/clinic-1.jpg",
    "@id": "",
    "url": "https://your-domain.com",
    "telephone": "+91 99999 99999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No. 9, KAR Clinic OPD Building, Near MLA Colony, Near Aakash Institute, Unit 4 area",
      "addressLocality": "Bhubaneswar",
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
