import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";
import { AUTHORS } from "@/data/authors";
import { CASE_INDUSTRIES } from "@/data/caseIndustries";
import { getAllCaseSlugs, getCasePage } from "@/data/casePages";
import { SEO_PAGES } from "@/data/seo";
import VIDEO_DURATIONS from "@/data/videoDurations.json";

const DURATIONS = VIDEO_DURATIONS as Record<string, number>;

/**
 * Next.js writes video sitemap fields verbatim, without XML escaping. A bare
 * "&" in one description made the whole sitemap invalid XML (Search Console
 * reported 1 error on 2026-11-03), so every text field is escaped here.
 */
const xml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const BASE_URL = "https://www.funnelsthatprint.com";
const OG = `${BASE_URL}/img/og/funnels-that-print-og.jpg`;

/**
 * Last meaningful content change per static page. Update when a page's
 * content changes. Google ignores lastmod that changes on every request,
 * which the previous `new Date()` on all entries effectively was.
 */
const PAGE_LASTMOD: Record<string, string> = {
  "": "2026-11-05",
  "/case-studies": "2026-11-05",
  "/case-leadgen": "2026-11-05",
  "/case-ecom": "2026-11-05",
  "/milliondollarcasestudy": "2026-11-05",
  "/scalelowticket": "2026-11-05",
  "/blog": "2026-11-05",
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

  const allCasesEntry: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/case-studies/all`, lastModified: new Date("2026-11-05"), changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const industryEntries: MetadataRoute.Sitemap = CASE_INDUSTRIES.map((i) => ({
    url: `${BASE_URL}/case-studies/${i.slug}`,
    lastModified: new Date("2026-11-05"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [OG],
  }));

  // One page per case study. Promotional posts without a result are noindex
  // and stay out of the sitemap.
  const caseEntries: MetadataRoute.Sitemap = getAllCaseSlugs()
    .map((slug) => getCasePage(slug)!)
    .filter((p) => !p.noindex)
    .map((p) => ({
      url: `${BASE_URL}/case-studies/${p.slug}`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [`${BASE_URL}${p.image}`],
      // Video sitemap entry: only for cases whose video file exists (it has a measured duration).
      ...(p.video && DURATIONS[p.id]
        ? {
            videos: [
              {
                title: xml(p.title),
                thumbnail_loc: `${BASE_URL}${p.image}`,
                description: xml(p.description),
                content_loc: `${BASE_URL}${p.video}`,
                duration: DURATIONS[p.id],
                publication_date: `${p.published}T09:00:00+00:00`,
                family_friendly: "yes" as const,
              },
            ],
          }
        : {}),
    }));

  const authorEntries: MetadataRoute.Sitemap = Object.values(AUTHORS).map((a) => ({
    url: `${BASE_URL}/team/${a.slug}`,
    lastModified: new Date("2026-11-03"),
    changeFrequency: "monthly" as const,
    priority: 0.5,
    images: [`${BASE_URL}${a.avatar}`],
  }));

  // SEO page plan: services, industry funnels, comparisons, tools, templates, glossary.
  const seoEntries: MetadataRoute.Sitemap = SEO_PAGES.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: new Date(p.updated),
    changeFrequency: p.kind === "hub" ? ("weekly" as const) : ("monthly" as const),
    priority: p.kind === "hub" || p.kind === "service" ? 0.9 : p.kind === "industry" ? 0.8 : 0.7,
    images: [OG],
  }));

  // /case (old query-param viewer) now 308-redirects to these pages.
  return [...staticEntries, ...seoEntries, ...blogEntries, ...authorEntries, ...allCasesEntry, ...industryEntries, ...caseEntries];
}
