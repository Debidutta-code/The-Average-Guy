import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { JSONLD } from "@/components/seo/JSONLD";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MO Dental Clinic | Best Dentist in Bhubaneswar | Expert Dental Care",
  description: "MO Dental Clinic offers premium dental treatments in Bhubaneswar. Specialized in Implants, Root Canal, Cosmetic Dentistry, and Braces. 5.0 Rated with 269+ Reviews.",
  keywords: "Dentist in Bhubaneswar, Dental Clinic Bhubaneswar, MO Dental Clinic, Best Dentist near me, Teeth Whitening Bhubaneswar, Dental Implants Bhubaneswar",
  openGraph: {
    title: "MO Dental Clinic | Your Smile Deserves Expert Care",
    description: "Premium dental clinic in Bhubaneswar with 5.0 Google Rating. Book your appointment today!",
    url: "https://modentalclinic.com",
    siteName: "MO Dental Clinic",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MO Dental Clinic | Expert Dental Care",
    description: "5.0 Rated Dental Clinic in Bhubaneswar. Expert Implants and Cosmetic Dentistry.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <JSONLD />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
