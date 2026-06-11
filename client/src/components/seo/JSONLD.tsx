import { siteConfig } from "@/data/siteConfig";

export const JSONLD = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": siteConfig.name,
    "image": siteConfig.url + siteConfig.ogImage,
    "description": siteConfig.description,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SCR 12, BDA Ln, Near BDA Office, Unit-3, Kharvela Nagar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2757175,
      "longitude": 85.8354554
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/smileplanetdental",
      "https://www.instagram.com/smileplanetdental"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
