import type { Metadata } from "next";

import { VenuePage } from "@/components/pages/VenuePage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "The CELLO Venue",
  "Venue hire, private dining, celebrations, and event options inside the CELLO venue.",
  "/venue",
);

export default function Page() {
  return <VenuePage />;
}
