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
    date: "Sat 12 Jul 2025",
    tag: "Tasting Dinner",
    title: "Wine & Seasons",
    subtitle: "A Six-Course Journey Through Summer",
    desc: "An intimate tasting dinner pairing each course with natural wines curated by head sommelier Owen Patel. The menu traces the arc of a British summer - from the first broad beans to the final blackberries.",
    price: "£120 per person",
    spots: "12 seats remaining",
  },
  {
    date: "Fri 2 Aug 2025",
    tag: "Chef's Table",
    title: "At the Pass",
    subtitle: "A Private Evening with James Croft",
    desc: "Twelve guests sit at the chef's counter for an unscripted menu. James cooks what arrives that morning from the market and tells the story of each dish as it's made. No menu cards, no surprises you don't want.",
    price: "£180 per person",
    spots: "4 seats remaining",
  },
  {
    date: "Sat 23 Aug 2025",
    tag: "Long Lunch",
    title: "Garden Party",
    subtitle: "An Afternoon on the Terrace",
    desc: "A leisurely four-hour lunch on Marlund's private terrace. Grazing plates, chilled bottles of rosé, and live acoustic music. Dress for warmth and stay for the sunset.",
    price: "£75 per person",
    spots: "20 seats remaining",
  },
  {
    date: "Sat 20 Sep 2025",
    tag: "Harvest Dinner",
    title: "Autumn Opening",
    subtitle: "Celebrating the New Season",
    desc: "Marlund closes for two weeks each September to prepare the autumn menu. This annual dinner marks its return - a celebration of everything that late harvest brings: game, roots, fungi, and the last of the stone fruit.",
    price: "£95 per person",
    spots: "Coming soon",
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
            Marlund
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
          Event Series
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
          AN EVENING WORTH MARKING
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
          Throughout the year, Marlund hosts a series of events: tasting dinners, chef&apos;s
          table evenings, long lunches, and private celebrations. Each one is designed to be
          something you talk about for a while after.
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
              The CELLO dining room is available for exclusive private hire. Whether a corporate
              dinner, a celebration, or a landmark birthday - we tailor every detail to you.
            </p>
            <p
              className="mb-10 opacity-60"
              style={{ ...serifStyle, fontSize: "16px", color: "#fbf4e9", lineHeight: 1.75 }}
            >
              Speak to our events team to discuss your requirements. Menus, floristry,
              entertainment, and overnight packages can all be arranged.
            </p>
            <a
              href="mailto:events@marlund.com"
              className="inline-block border border-[#fbf4e9] px-8 py-4 uppercase tracking-[0.2em] text-[#fbf4e9] transition-all duration-300 hover:bg-[#fbf4e9] hover:text-[#372821]"
              style={{ ...bodyStyle, fontSize: "11px" }}
            >
              Contact the Events Team
            </a>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={VENUE_IMG} alt="Private dining setup" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
