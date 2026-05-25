import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "The Monarch Mug | Coffee • Conversations • Community",
    template: "%s | The Monarch Mug"
  },
  description: "The Monarch Mug is a modern white-themed luxury cafe in Bhubaneswar known for its elegant interiors, premium coffee culture, aesthetic ambiance, and refined social experience.",
  keywords: [
    "The Monarch Mug",
    "Cafe Bhubaneswar",
    "Luxury Cafe",
    "White Aesthetic Cafe",
    "Minimalist Cafe",
    "Coffee Culture",
    "Work Friendly Cafe",
    "Premium Coffee",
    "Bhubaneswar Lifestyle"
  ],
  openGraph: {
    title: "The Monarch Mug",
    description: "A Modern Luxury Cafe Experience in Bhubaneswar.",
    url: "https://themonarchmug.com",
    siteName: "The Monarch Mug",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};
