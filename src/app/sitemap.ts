import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.funnelsthatprint.com";
  const now = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/img/x/office.webp`],
    },
    {
      url: `${baseUrl}/milliondollarcasestudy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/img/x/office.webp`],
    },
    {
      url: `${baseUrl}/scalelowticket`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/img/x/office.webp`],
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/img/x/office.webp`],
    },
    {
      url: `${baseUrl}/case-leadgen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-ecom`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [`${baseUrl}/img/blog/ai-sales-funnels-2026.jpg`],
    },
    {
      url: `${baseUrl}/blog/ai-sales-funnels-voice-lead-qualification-2026`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/img/blog/ai-sales-funnels-2026.jpg`],
    },
    {
      url: `${baseUrl}/blog/server-side-tracking-meta-capi-guide-2026`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${baseUrl}/img/blog/server-side-capi-tracking.jpg`],
    },
    {
      url: `${baseUrl}/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${baseUrl}/img/blog/high-ticket-vsl-architecture.jpg`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
