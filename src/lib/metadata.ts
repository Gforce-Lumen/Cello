import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/deployment";

const siteTitle = "Cello Restaurant & Bar";

export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      siteName: siteTitle,
      type: "website",
      url: absoluteUrl(path),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
