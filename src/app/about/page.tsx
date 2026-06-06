import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/AboutPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "About Us",
  "Learn the story behind Marlund, its origins, its team, and the spaces inside the restaurant.",
  "/about",
);

export default function Page() {
  return <AboutPage />;
}
