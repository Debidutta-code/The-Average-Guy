export const JSONLD = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://modentalclinic.com/#dentist",
        "name": "MO Dental Clinic",
        "alternateName": "MO Dental",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
        "logo": "https://modentalclinic.com/logo.png",
        "url": "https://modentalclinic.com",
        "telephone": "7008520133",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 2405, Infront of Apollo Pharmacy, Mancheswar",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "postalCode": "751010",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 20.317692,
          "longitude": 85.861255
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        },
        "sameAs": [
          "https://facebook.com/modentalclinic",
          "https://instagram.com/modentalclinic"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "269"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://modentalclinic.com/#localbusiness",
        "name": "MO Dental Clinic",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 2405, Mancheswar",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "postalCode": "751010",
          "addressCountry": "IN"
        },
        "telephone": "7008520133",
        "url": "https://modentalclinic.com",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
