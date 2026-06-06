import type { MetadataRoute } from "next";

const baseUrl = "https://www.marlund.example";

const routes = ["/", "/menu", "/about", "/events", "/venue", "/booking"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
