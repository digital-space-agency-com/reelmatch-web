import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ReelMatch",
    "description": "Find movies you both love, fast! Swipe trailers, like & watchlist! Connect with friends, see their lists & match on films/series you'll both love.",
    "url": "https://reelmatch.app",
    "applicationCategory": "Entertainment",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Digital Space Agency"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 