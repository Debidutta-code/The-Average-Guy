import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "D' Cafe Bhubaneswar | Cinematic Coffee Experience",
  description: "Experience the future of coffee at D' Cafe, Bhubaneswar. Ultra-modern, cinematic, and immersive cafe lounge.",
  keywords: ["D Cafe Bhubaneswar", "best cafe in Bhubaneswar", "late night cafe", "aesthetic cafe", "cyberpunk cafe"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
