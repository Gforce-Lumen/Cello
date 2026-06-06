import type { Metadata } from "next";

import { BookingPage } from "@/components/pages/BookingPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Book a Table",
  "Reserve a table at Marlund and submit your preferred date, time, and party details.",
  "/booking",
);

export default function Page() {
  return <BookingPage />;
}
