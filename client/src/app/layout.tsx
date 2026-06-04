import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { CLINIC_DATA } from "@/data/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${CLINIC_DATA.name} | Best Dermatologist in Bhubaneswar, Nayapalli`,
  description: `Top-rated Skin & Hair Clinic in Bhubaneswar. Expert treatment for Acne, Hair Loss, Laser Hair Removal by ${CLINIC_DATA.name} at Nayapalli. Book your appointment today.`,
  keywords: ["Dermatologist Bhubaneswar", "Skin Specialist Nayapalli", "Hair Clinic Unit 4", "Dr. Partha Mohapatra", "Acne Treatment Bhubaneswar", "Laser Hair Removal Odisha"],
  openGraph: {
    title: `${CLINIC_DATA.name} | Skin & Hair Specialist`,
    description: "Premium dermatology care in the heart of Bhubaneswar.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": CLINIC_DATA.clinicName,
    "image": "https://drparthaskin.com/clinic-photo.jpg",
    "@id": "",
    "url": "https://drparthaskin.com",
    "telephone": CLINIC_DATA.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 124, Nayapalli",
      "addressLocality": "Bhubaneswar",
      "postalCode": "751012",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2961,
      "longitude": 85.8245
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
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
