import type { MetadataRoute } from "next";

import { pageDefinitions } from "@/lib/site-data";

const baseUrl = "https://www.cello-restaurant.example";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageDefinitions.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === "/" ? "weekly" : "monthly",
    priority: page.href === "/" ? 1 : 0.8,
  }));
}
