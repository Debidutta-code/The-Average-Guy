interface JSONLDProps {
  data?: Record<string, unknown>;
}

export const JSONLD = ({ data }: JSONLDProps) => {
  const defaultClinicData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "MO Dental Clinic",
    "image": "https://modentalclinic.com/images/hero/clinic-interior.webp",
    "@id": "https://modentalclinic.com",
    "url": "https://modentalclinic.com",
    "telephone": "+91 70085 20133",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No-2405, Front of Apollo Pharmacy, Golakha, Mancheswar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.29,
      "longitude": 85.864
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
      "https://instagram.com/modentalclinic",
      "https://twitter.com/modentalclinic"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "269"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MO Dental Clinic",
    "url": "https://modentalclinic.com",
    "logo": "https://modentalclinic.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 70085 20133",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi", "Odia"]
    }
  };

  // If specific data is provided, only render that.
  if (data) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }

  // Otherwise render global defaults
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultClinicData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
};
