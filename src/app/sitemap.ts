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
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
