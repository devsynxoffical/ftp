import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";

const BASE_URL = "https://www.funnelsthatprint.com";
const OG = `${BASE_URL}/img/og/funnels-that-print-og.jpg`;

/**
 * Last meaningful content change per static page. Update when a page's
 * content changes. Google ignores lastmod that changes on every request,
 * which the previous `new Date()` on all entries effectively was.
 */
const PAGE_LASTMOD: Record<string, string> = {
  "": "2026-10-28",
  "/case-studies": "2026-10-27",
  "/case-leadgen": "2026-10-27",
  "/case-ecom": "2026-10-27",
  "/milliondollarcasestudy": "2026-10-28",
  "/scalelowticket": "2026-10-28",
  "/blog": "2026-10-28",
  "/contact": "2026-10-28",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/milliondollarcasestudy", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/scalelowticket", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/case-leadgen", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/case-ecom", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(PAGE_LASTMOD[path]),
    changeFrequency,
    priority,
    images: [OG],
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${BASE_URL}${post.image}`],
  }));

  // /case (query-param viewer) is intentionally excluded: it is noindex.
  return [...staticEntries, ...blogEntries];
}
