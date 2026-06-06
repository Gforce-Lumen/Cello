import type { Metadata } from "next";

import { EventsPage } from "@/components/pages/EventsPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Events",
  "Discover Marlund's tasting dinners, chef's table evenings, and private event offerings.",
  "/events",
);

export default function Page() {
  return <EventsPage />;
}
