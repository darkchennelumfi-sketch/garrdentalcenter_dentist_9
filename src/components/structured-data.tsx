import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description: siteConfig.description,
    url: "https://www.garrdental.com",
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.438947,
      longitude: -99.117798,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: "5",
    },
    sameAs: siteConfig.socials.map((social) => social.href),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
