import type { Metadata } from "next";

import { HomePage } from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Home",
  "Food, cocktails, music, and evening rhythm in one warm Accra setting.",
  "/",
);

export default function Page() {
  return <HomePage />;
}
