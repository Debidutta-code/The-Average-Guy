import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "The Average Guy | Cafe • Lounge • Community • Events",
    template: "%s | The Average Guy"
  },
  description: "A modern aesthetic cafe and community hangout space in Bhubaneswar. Experience the best coffee, live music, and networking culture.",
  keywords: ["Cafe", "Bhubaneswar", "Lounge", "Events", "Community", "Coffee Shop", "The Average Guy"],
  openGraph: {
    title: "The Average Guy",
    description: "Bhubaneswar's Premier Community Lounge & Cafe Experience.",
    url: "https://theaverageguy.in",
    siteName: "The Average Guy",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};
