import type { Metadata } from "next";

import { MenuPage } from "@/components/pages/MenuPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "The Menu",
  "Explore Cello's starters, mains, cocktails, wines, and bar menu.",
  "/menu",
);

export default function Page() {
  return <MenuPage />;
}
