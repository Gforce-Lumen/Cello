import type { Metadata } from "next";

import { HomePage } from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Home",
  "A celebration of seasonal British produce, elevated through classical technique and quiet elegance.",
  "/",
);

export default function Page() {
  return <HomePage />;
}
