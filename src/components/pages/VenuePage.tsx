"use client";

import Link from "next/link";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  hire1: "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  hire2: "https://images.unsplash.com/photo-1484156818044-c040038b0719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  hire3: "https://images.unsplash.com/photo-1744776411221-702f2848b0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  gallery1: "https://images.unsplash.com/photo-1666032119084-82351976a922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
  gallery2: "https://images.unsplash.com/photo-1502920764203-b859c2384716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
  gallery3: "https://images.unsplash.com/photo-1679312061521-d7d619a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
  gallery4: "https://images.unsplash.com/photo-1687648431656-da99da578d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
} as const;

const OPTIONS = [
  {
    title: "Private Dining",
    guests: "Up to 24 guests",
    desc: "The entire CELLO dining room, set for an intimate seated dinner. Your own sommelier, bespoke menu, and a dedicated front-of-house team.",
  },
  {
    title: "Corporate Hire",
    guests: "Up to 48 guests",
    desc: "A full venue takeover for client entertainment, product launches, or company celebrations. AV equipment available on request.",
  },
  {
    title: "Celebrations",
    guests: "Up to 36 guests",
    desc: "Birthdays, anniversaries, and landmark moments. We work with your florist, manage the timeline, and make sure the cake arrives cold.",
  },
  {
    title: "Tastings & Events",
    guests: "Up to 20 guests",
    desc: "Wine, whisky, or spirit tastings guided by our sommelier. Paired with bespoke canapés or a lighter menu.",
  },
] as const;

export function VenuePage() {
  return (
    <div style={{ backgroundColor: "#fbf4e9" }} className="min-h-screen">
      <section className="relative flex h-[65vh] min-h-[460px] items-end">
        <img src={IMAGES.hero} alt="The CELLO venue" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(55,40,33,0.9) 0%, rgba(55,40,33,0.4) 55%, transparent 100%)",
          }}
        />
        <div className="page-gutter relative z-10 mx-auto w-full max-w-[1400px] pb-16">
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
              fontSize: "clamp(46px, 7vw, 100px)",
              color: "#fbf4e9",
              fontWeight: 600,
            }}
          >
            THE CELLO
            <br />
            VENUE
          </h1>
        </div>
      </section>

      <section className="page-gutter mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Private Hire
            </p>
            <h2
              className="mb-8 leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(34px, 4vw, 54px)",
                color: "#372821",
                fontWeight: 600,
              }}
            >
              VENUE HIRE
            </h2>
            <p
              className="mb-5 opacity-80"
              style={{ ...serifStyle, fontSize: "18px", color: "#372821", lineHeight: 1.8 }}
            >
              Cello can be hired exclusively for private events. The venue accommodates up to 48
              guests across the main dining room and the Cello bar - each an elegant, considered
              space that works equally well for business and celebration.
            </p>
            <p
              className="opacity-65"
              style={{ ...serifStyle, fontSize: "17px", color: "#372821", lineHeight: 1.75 }}
            >
              All private events are planned with our events director and chef. We handle
              everything from the menu to the flowers, so you arrive and simply enjoy the evening.
            </p>
            <Link
              href="/booking"
              className="mt-10 inline-block border border-[#372821] px-8 py-4 uppercase tracking-[0.2em] text-[#372821] transition-all duration-300 hover:bg-[#372821] hover:text-[#fbf4e9]"
              style={{ ...bodyStyle, fontSize: "11px" }}
            >
              Book the Venue
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.hire1} alt="Table arrangement" className="aspect-[3/4] w-full object-cover" />
            <div className="flex flex-col gap-4 pt-10">
              <img src={IMAGES.hire2} alt="Wine glasses" className="aspect-square w-full object-cover" />
              <img src={IMAGES.hire3} alt="Dining setup" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#372821" }} className="py-24 md:py-32">
        <div className="page-gutter mx-auto max-w-[1400px]">
          <p
            className="mb-5 uppercase tracking-[0.25em] opacity-50"
            style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
          >
            What We Offer
          </p>
          <h2
            className="mb-14 leading-tight"
            style={{
              ...headingStyle,
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "#fbf4e9",
              fontWeight: 600,
            }}
          >
            VENUE OPTIONS
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {OPTIONS.map((option) => (
              <div
                key={option.title}
                className="p-8"
                style={{
                  backgroundColor: "rgba(94,82,73,0.25)",
                  border: "1px solid rgba(251,244,233,0.1)",
                }}
              >
                <p
                  className="mb-2 uppercase tracking-[0.2em] opacity-50"
                  style={{ ...bodyStyle, fontSize: "10px", color: "#fbf4e9" }}
                >
                  {option.guests}
                </p>
                <h3
                  className="mb-4"
                  style={{ ...headingStyle, fontSize: "26px", color: "#fbf4e9", fontWeight: 600 }}
                >
                  {option.title}
                </h3>
                <p
                  style={{
                    ...serifStyle,
                    fontSize: "16px",
                    color: "#fbf4e9",
                    opacity: 0.7,
                    lineHeight: 1.75,
                    fontStyle: "italic",
                  }}
                >
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-gutter mx-auto max-w-[1400px] py-24 md:py-32">
        <p
          className="mb-5 uppercase tracking-[0.25em] opacity-50"
          style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
        >
          The Space
        </p>
        <h2
          className="mb-14 leading-tight"
          style={{
            ...headingStyle,
            fontSize: "clamp(34px, 4vw, 54px)",
            color: "#372821",
            fontWeight: 600,
          }}
        >
          INSIDE CELLO
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="col-span-2 aspect-[16/9] overflow-hidden">
            <img
              src={IMAGES.gallery1}
              alt="Interior"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={IMAGES.gallery2}
              alt="Chandelier"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={IMAGES.gallery3}
              alt="Dining table"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="col-span-2 aspect-[16/9] overflow-hidden">
            <img
              src={IMAGES.gallery4}
              alt="Dimly lit dining room"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fbf4e9] py-20 text-center">
        <div className="page-gutter mx-auto max-w-[1400px]">
          <h2
            className="mb-6 leading-tight"
            style={{
              ...headingStyle,
              fontSize: "clamp(30px, 3.5vw, 48px)",
              color: "#372821",
              fontWeight: 600,
            }}
          >
            START PLANNING YOUR EVENT
          </h2>
          <p
            className="mx-auto mb-10 max-w-[500px]"
            style={{
              ...serifStyle,
              fontSize: "17px",
              color: "#372821",
              opacity: 0.65,
              fontStyle: "italic",
            }}
          >
            Our events team is available Monday to Friday to discuss your requirements and create a
            proposal.
          </p>
          <a
            href="mailto:events@marlund.com"
            className="inline-block border border-[#372821] px-10 py-4 uppercase tracking-[0.2em] text-[#372821] transition-all duration-300 hover:bg-[#372821] hover:text-[#fbf4e9]"
            style={{ ...bodyStyle, fontSize: "11px" }}
          >
            Book the Venue
          </a>
        </div>
      </section>
    </div>
  );
}
