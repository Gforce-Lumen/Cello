import type { Metadata } from "next";

import { MenuPage } from "@/components/pages/MenuPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "The Menu",
  "Explore Marlund's seasonal mains, light bites, and house cocktails.",
  "/menu",
);

export default function Page() {
  return <MenuPage />;
}
