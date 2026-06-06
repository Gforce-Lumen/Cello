import type { Metadata } from "next";

const siteTitle = "Marlund";

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
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      siteName: siteTitle,
      type: "website",
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
