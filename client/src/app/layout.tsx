import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const baseUrl = "https://neurocare-clinic.com";

export const metadata: Metadata = {
  title: "Advanced Neurological Care | Dr. Arpan Deep | Premium Neurology Clinic",
  description: "Expert neurological care specializing in migraine, stroke, epilepsy, and more. Experience human-centered healthcare with modern technology at Bhubaneswar's leading neurology center.",
  keywords: ["Neurologist", "Brain Specialist", "Neurology Clinic", "Stroke Treatment", "Epilepsy Care", "Dr. Arpan Deep", "Bhubaneswar Neurology"],
  openGraph: {
    title: "Advanced Neurological Care | Dr. Arpan Deep",
    description: "Personalized diagnosis and treatment for neurological disorders using modern evidence-based medicine.",
    url: baseUrl,
    siteName: "NeuroCare Clinic",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Neurological Care | Dr. Arpan Deep",
    description: "Pioneering precision medicine in neurology with 15+ years of clinical excellence.",
    images: [`${baseUrl}/twitter-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </SmoothScroll>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Arpan Deep",
              "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
              "medicalSpecialty": "Neurology",
              "description": "Expert Neurologist with 15+ years of experience in treating complex neurological disorders.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Luxury Healthcare Hub, Block A",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751001",
                "addressCountry": "IN"
              },
              "telephone": "+91-999-999-9999",
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
