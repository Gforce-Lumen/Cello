import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/deployment";

export const dynamic = "force-static";

const routes = ["/", "/menu", "/about", "/events", "/venue", "/booking"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
