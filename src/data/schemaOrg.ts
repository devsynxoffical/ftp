import { AUTHORS } from "./authors";

const BASE_URL = "https://www.funnelsthatprint.com";

/**
 * Full Organization node for author/publisher fields. Article rich results
 * need a resolvable name and logo; a bare {"@id"} reference to the node in
 * the root layout is not always resolved across separate JSON-LD blocks.
 */
export const ORG_PUBLISHER = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Funnels That Print",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon-512.png`,
    width: 512,
    height: 512,
  },
};

/** Full Person node for an author id from authors.ts. */
export function personSchema(id: keyof typeof AUTHORS) {
  const a = AUTHORS[id];
  return {
    "@type": "Person",
    "@id": `${BASE_URL}/#person-${a.id}`,
    name: a.name,
    jobTitle: a.role,
    image: `${BASE_URL}${a.avatar}`,
    url: `${BASE_URL}/#team`,
    worksFor: { "@id": `${BASE_URL}/#organization` },
  };
}
