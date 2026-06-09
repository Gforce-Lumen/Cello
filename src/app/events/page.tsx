import type { Metadata } from "next";

import { EventsPage } from "@/components/pages/EventsPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Events",
  "Explore events at Cello Restaurant & Bar, including lounge nights, live music, brunch, and private celebration tables.",
  "/events",
);

export default function Page() {
  return <EventsPage />;
}
