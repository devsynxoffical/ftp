const BASE_URL = "https://www.funnelsthatprint.com";

/** schema.org Service JSON-LD for hub pages (SEO plan: Service schema on the home page and case study hubs). */
export default function ServiceSchema({ path, name, serviceType, description }: { path: string; name: string; serviceType: string; description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}${path}#service`,
    name,
    serviceType,
    description,
    url: `${BASE_URL}${path}`,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    offers: { "@type": "AggregateOffer", lowPrice: "999", highPrice: "1999", priceCurrency: "USD", offerCount: 3 },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
