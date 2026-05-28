import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "OOPRE Kitchen & Bar | Dine, Wine & Shine",
    template: "%s | OOPRE Kitchen & Bar"
  },
  description: "East India’s first Greek-themed rooftop kitchen & bar in Bhubaneswar. Experience global cuisines, rooftop sunsets, and vibrant nightlife.",
  keywords: ["OOPRE", "Kitchen & Bar", "Bhubaneswar", "Rooftop Restaurant", "Greek Themed", "Mediterranean", "Dining", "Nightlife"],
  openGraph: {
    title: "OOPRE Kitchen & Bar",
    description: "East India’s first Greek-themed rooftop kitchen & bar in Bhubaneswar.",
    url: "https://oopre.in",
    siteName: "OOPRE Kitchen & Bar",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};
