"use client";

import Link from "next/link";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

const HERO =
  "https://images.unsplash.com/photo-1484156818044-c040038b0719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";
const VENUE_IMG =
  "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";

const EVENTS = [
  {
    date: "Every Friday",
    tag: "Lounge Night",
    title: "Friday Lounge Night",
    subtitle: "Cocktails, music, and late-evening tables",
    desc: "Cocktails, music, and late-evening tables.",
    price: "Reservations open",
    spots: "Evening tables available",
  },
  {
    date: "Selected Dates",
    tag: "Live Music",
    title: "Live Band Evening",
    subtitle: "Dinner, drinks, and live sounds",
    desc: "Dinner, drinks, and live sounds in a warm restaurant-bar setting.",
    price: "Details coming soon",
    spots: "View schedule soon",
  },
  {
    date: "Every Sunday",
    tag: "Brunch",
    title: "Sunday Brunch",
    subtitle: "A softer afternoon for food and drinks",
    desc: "A softer afternoon for food, drinks, and easy conversation.",
    price: "Bookings available",
    spots: "Reserve brunch seating",
  },
  {
    date: "Match Days",
    tag: "Watch Party",
    title: "Game Night",
    subtitle: "Watch parties, sharing plates, and bottles",
    desc: "Watch parties, sharing plates, bottles, and group seating.",
    price: "Group tables available",
    spots: "Reserve a spot",
  },
] as const;

export function EventsPage() {
  return (
    <div style={{ backgroundColor: "#fbf4e9" }} className="min-h-screen">
      <section className="relative flex h-[55vh] min-h-[400px] items-end">
        <img src={HERO} alt="Wine glasses at an event" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(55,40,33,0.9) 0%, rgba(55,40,33,0.4) 55%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8 pb-16">
          <p
            className="mb-4 uppercase tracking-[0.3em] opacity-60"
            style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
          >
            Cello
          </p>
          <h1
            className="leading-none"
            style={{
              ...headingStyle,
              fontSize: "clamp(52px, 8vw, 110px)",
              color: "#fbf4e9",
              fontWeight: 600,
            }}
          >
            EVENTS
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-8 py-20 text-center">
        <p
          className="mb-5 uppercase tracking-[0.25em] opacity-50"
          style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
        >
          Events at Cello
        </p>
        <h2
          className="mb-6 leading-tight"
          style={{
            ...headingStyle,
            fontSize: "clamp(30px, 3.5vw, 48px)",
            color: "#372821",
            fontWeight: 600,
          }}
        >
          LIVE SOUNDS, GROUP TABLES, AND WEEKEND ENERGY
        </h2>
        <p
          style={{
            ...serifStyle,
            fontSize: "18px",
            color: "#372821",
            opacity: 0.7,
            fontStyle: "italic",
            lineHeight: 1.75,
          }}
        >
          Music, food, cocktails, brunches, watch parties, and private tables at Cello.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 pb-24">
        <div className="flex flex-col gap-0">
          {EVENTS.map((eventItem) => (
            <div
              key={eventItem.title}
              className="grid gap-8 py-12 md:grid-cols-[200px_1fr_200px]"
              style={{ borderTop: "1px solid rgba(55,40,33,0.15)" }}
            >
              <div>
                <p
                  className="mb-3 uppercase tracking-[0.15em] opacity-50"
                  style={{ ...bodyStyle, fontSize: "10px", color: "#372821" }}
                >
                  {eventItem.tag}
                </p>
                <p style={{ ...bodyStyle, fontSize: "13px", color: "#372821", opacity: 0.7 }}>
                  {eventItem.date}
                </p>
              </div>
              <div>
                <h3
                  className="mb-1 leading-tight"
                  style={{
                    ...headingStyle,
                    fontSize: "clamp(26px, 3vw, 40px)",
                    color: "#372821",
                    fontWeight: 600,
                  }}
                >
                  {eventItem.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    ...serifStyle,
                    fontSize: "17px",
                    color: "#372821",
                    opacity: 0.65,
                    fontStyle: "italic",
                  }}
                >
                  {eventItem.subtitle}
                </p>
                <p
                  style={{
                    ...serifStyle,
                    fontSize: "16px",
                    color: "#372821",
                    opacity: 0.7,
                    lineHeight: 1.75,
                  }}
                >
                  {eventItem.desc}
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end md:text-right">
                <p style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 500 }}>
                  {eventItem.price}
                </p>
                <p
                  className="uppercase tracking-[0.1em] opacity-50"
                  style={{ ...bodyStyle, fontSize: "10px", color: "#372821" }}
                >
                  {eventItem.spots}
                </p>
                <Link
                  href="/booking"
                  className="mt-2 inline-block border border-[#372821] px-6 py-3 uppercase tracking-[0.2em] text-[#372821] transition-all duration-300 hover:bg-[#372821] hover:text-[#fbf4e9]"
                  style={{ ...bodyStyle, fontSize: "10px" }}
                >
                  Reserve
                </Link>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(55,40,33,0.15)" }} />
        </div>
      </section>

      <section style={{ backgroundColor: "#372821" }} className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-8 md:grid-cols-2">
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
            >
              Private Events
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(34px, 4vw, 52px)",
                color: "#fbf4e9",
                fontWeight: 600,
              }}
            >
              HOST YOUR OWN EVENING
            </h2>
            <p
              className="mb-5 opacity-80"
              style={{ ...serifStyle, fontSize: "18px", color: "#fbf4e9", lineHeight: 1.8 }}
            >
              From birthdays and group dinners to private celebration tables, Cello offers a warm
              setting shaped around your occasion.
            </p>
            <p
              className="mb-10 opacity-60"
              style={{ ...serifStyle, fontSize: "16px", color: "#fbf4e9", lineHeight: 1.75 }}
            >
              Food, cocktails, music, and table planning come together in one restaurant-bar
              setting built for private moments.
            </p>
            <Link
              href="/venue"
              className="inline-block border border-[#fbf4e9] px-8 py-4 uppercase tracking-[0.2em] text-[#fbf4e9] transition-all duration-300 hover:bg-[#fbf4e9] hover:text-[#372821]"
              style={{ ...bodyStyle, fontSize: "11px" }}
            >
              Plan an Event
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={VENUE_IMG} alt="Private event setup" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
