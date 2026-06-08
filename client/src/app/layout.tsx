import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SkinCare Clinic | Best Dermatologist & Skin Specialist",
    template: "%s | SkinCare Clinic"
  },
  description: "Premium dermatology and aesthetic clinic. Expert acne treatment, laser hair reduction, and anti-aging solutions. Book your consultation today.",
  keywords: ["Dermatologist", "Skin Clinic", "Acne Treatment", "Laser Hair Reduction", "Best Dermatologist", "Skin Specialist"],
  authors: [{ name: "Dr. Elena Vance" }],
  metadataBase: new URL('https://www.skincareclinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SkinCare Clinic | Best Dermatologist & Skin Specialist",
    description: "Advanced skin and hair treatments by expert dermatologists.",
    url: 'https://www.skincareclinic.com',
    siteName: 'SkinCare Clinic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SkinCare Clinic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinCare Clinic | Best Dermatologist & Skin Specialist",
    description: "Advanced skin and hair treatments by expert dermatologists.",
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased text-slate-900 min-h-screen flex flex-col`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <Navbar />
        <div className="flex flex-col min-h-screen">
          <Breadcrumbs />
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
