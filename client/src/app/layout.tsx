import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, MobileNav } from "@/components/shared/Navigation";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Lumina Companions | Elite Companion Services",
  description: "Discover exceptional companions. Premium, discreet, and elegant companionship services for high-end clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable,
        playfair.variable,
        "min-h-screen bg-background font-sans antialiased pb-16 md:pb-0"
      )}>
        <Header />
        <main>{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}
