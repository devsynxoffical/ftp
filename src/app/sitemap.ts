import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.funnelsthatprint.com";
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
    images: [`${baseUrl}${post.image}`],
  }));

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
    ...blogEntries,
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
