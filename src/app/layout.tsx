import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Aura Skin Clinic | Science-Backed Dermatology",
  description: "Advanced clinical dermatology and aesthetic cosmetology tailored to your skin's unique anatomy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-clinical-charcoal selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
