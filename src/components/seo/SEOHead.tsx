import React, { useEffect } from 'react';
import { firmConfig } from '../../data/firmConfig';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schemaType?: 'AccountingService' | 'Article' | 'FAQPage' | 'WebPage';
  schemaData?: any;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  schemaType = 'AccountingService',
  schemaData
}) => {
  const fullTitle = title 
    ? `${title} | ${firmConfig.name} — Pune`
    : `${firmConfig.name} | ${firmConfig.subtitle} — Pune`;

  const metaDesc = description || `${firmConfig.name} is a premier Chartered Accountancy & Business Advisory practice in Pune, India. Specializing in Direct Tax, GST, Statutory Audit, Corporate Structuring & Virtual CFO.`;

  useEffect(() => {
    document.title = fullTitle;
    
    // Update Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDesc);
    }

    // Default Local Business / AccountingService Schema
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": firmConfig.name,
      "alternateName": firmConfig.legalTitle,
      "description": firmConfig.tagline,
      "url": "https://arvenco.in",
      "telephone": firmConfig.phone,
      "email": firmConfig.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": firmConfig.address.line1,
        "addressLocality": firmConfig.city,
        "addressRegion": firmConfig.state,
        "postalCode": firmConfig.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5314",
        "longitude": "73.8296"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      "areaServed": firmConfig.puneAreasCovered.map(area => ({
        "@type": "AdministrativeArea",
        "name": `${area}, Pune`
      }))
    };

    const finalSchema = schemaData || baseSchema;

    // Inject JSON-LD Script
    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(finalSchema);

    return () => {
      // Keep base schema
    };
  }, [fullTitle, metaDesc, schemaType, schemaData]);

  return null;
};
