import { BLOG_POSTS } from "@/data/blogPosts";

const BASE_URL = "https://www.funnelsthatprint.com";

/**
 * Breadcrumb + CollectionPage markup for the journal index only. Rendered by
 * the /blog page as a server component, so neither the articles nor this
 * markup reach the article pages or the browser bundle.
 */
export default function BlogIndexSchema() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Journal", item: `${BASE_URL}/blog` },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/blog#collection`,
        name: "Funnels That Print Journal: AI Sales Funnels, Automation and Tracking",
        url: `${BASE_URL}/blog`,
        description:
          "Guides on AI sales funnels, speed-to-lead automation, GoHighLevel workflows, Meta Conversions API tracking and high-ticket funnels, backed by client data.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        inLanguage: "en-US",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${BASE_URL}/blog/${p.slug}`,
            name: p.metaTitle,
          })),
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
