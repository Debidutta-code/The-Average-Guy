import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import CinematicLoader from "@/components/shared/CinematicLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Embassy Bhubaneswar | Elevated Dining & Lounge Experience",
  description: "Experience the pinnacle of luxury dining and nightlife at Embassy Bhubaneswar. Modern cuisine meets cinematic ambiance in the heart of Odisha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-brand-black text-white antialiased`}>
        <SmoothScroll>
          <CinematicLoader />
          <CustomCursor />
          <div className="grain-overlay" />
          <div className="cinematic-overlay" />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
