import { MetadataRoute } from "next";
import { CASES } from "@/data/cases";
import { LEADS } from "@/data/leads";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.funnelsthatprint.com";
  const now = new Date();

  // Core static marketing and conversion pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/milliondollarcasestudy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/scalelowticket`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic Case Study URLs for Lead Generation
  const leadgenPages: MetadataRoute.Sitemap = LEADS.map((lead) => ({
    url: `${baseUrl}/case?set=lg&id=${encodeURIComponent(lead.id)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  // Dynamic Case Study URLs for eCommerce & DTC
  const ecomPages: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: `${baseUrl}/case?set=ec&id=${encodeURIComponent(c.id)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...leadgenPages, ...ecomPages];
}
