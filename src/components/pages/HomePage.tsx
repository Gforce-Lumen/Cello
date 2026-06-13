"use client";

import Link from "next/link";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1687648431656-da99da578d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  about1: "https://images.unsplash.com/photo-1666032119084-82351976a922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  about2: "https://images.unsplash.com/photo-1502920764203-b859c2384716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  about3: "https://images.unsplash.com/photo-1679312061521-d7d619a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  menu1: "https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  menu2: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  menu3: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  cocktail: "https://images.unsplash.com/photo-1509710398975-6454dcdf049f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  event1: "https://images.unsplash.com/photo-1484156818044-c040038b0719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  event2: "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
} as const;

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

export function HomePage() {
  return (
    <div style={{ backgroundColor: "#fbf4e9" }} className="min-h-screen">
      <section className="relative flex min-h-[600px] h-screen items-end">
        <img
          src={IMAGES.hero}
          alt="Marlund restaurant interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(55,40,33,0.85) 0%, rgba(55,40,33,0.3) 50%, transparent 100%)",
          }}
        />
        <div className="page-gutter relative z-10 mx-auto w-full max-w-[1400px] pb-20 md:pb-28">
          <p
            className="mb-5 max-w-full text-[#fbf4e9] uppercase tracking-[0.22em] opacity-70 sm:tracking-[0.35em]"
            style={{ ...bodyStyle, fontSize: "11px" }}
          >
            Fine Dining · London
          </p>
          <h1
            className="max-w-[7ch] text-[#fbf4e9] leading-[0.88] sm:max-w-none sm:leading-none"
            style={{
              ...headingStyle,
              fontSize: "clamp(52px, 16vw, 140px)",
              fontWeight: 600,
            }}
          >
            MARLUND
          </h1>
          <p
            className="mt-5 max-w-[32rem] text-[#fbf4e9] opacity-80"
            style={{
              ...serifStyle,
              fontSize: "clamp(17px, 4.5vw, 19px)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            A celebration of seasonal British produce, elevated through classical technique and
            quiet elegance.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link
              href="/booking"
              className="inline-block max-w-full border border-[#fbf4e9] px-6 py-4 uppercase tracking-[0.18em] text-[#fbf4e9] transition-all duration-300 hover:bg-[#fbf4e9] hover:text-[#372821] sm:px-8 sm:tracking-[0.2em]"
              style={{ ...bodyStyle, fontSize: "11px" }}
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="inline-block max-w-full px-0 py-4 uppercase tracking-[0.18em] text-[#fbf4e9] opacity-70 transition-opacity hover:opacity-100 sm:px-8 sm:tracking-[0.2em]"
              style={{ ...bodyStyle, fontSize: "11px" }}
            >
              View Menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="page-gutter mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Our Story
            </p>
            <h2
              className="mb-8 leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(36px, 4vw, 56px)",
                color: "#372821",
                fontWeight: 600,
              }}
            >
              WHERE CRAFT MEETS
              <br />
              QUIET LUXURY
            </h2>
            <p
              className="mb-5 opacity-75"
              style={{ ...serifStyle, fontSize: "18px", color: "#372821", lineHeight: 1.75 }}
            >
              Marlund was born from a passion for honest cooking - ingredients sourced daily,
              prepared with patience, served without pretension.
            </p>
            <p
              className="opacity-60"
              style={{ ...serifStyle, fontSize: "17px", color: "#372821", lineHeight: 1.75 }}
            >
              Nestled in the heart of Marlborough Street, our dining room offers an intimate haven
              away from the rush of the city.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 border-b border-[#372821] pb-1 uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Our Story →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.about1} alt="Restaurant interior" className="aspect-[3/4] w-full object-cover" />
            <div className="flex flex-col gap-4 pt-8">
              <img src={IMAGES.about2} alt="Chandelier detail" className="aspect-square w-full object-cover" />
              <img src={IMAGES.about3} alt="Dining room" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#372821" }} className="py-24 md:py-32">
        <div className="page-gutter mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p
                className="mb-4 uppercase tracking-[0.25em] opacity-50"
                style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
              >
                Kitchen Highlights
              </p>
              <h2
                className="leading-tight"
                style={{
                  ...headingStyle,
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: "#fbf4e9",
                  fontWeight: 600,
                }}
              >
                SEASONAL MAINS
              </h2>
            </div>
            <Link
              href="/menu"
              className="border-b border-[#fbf4e9] pb-1 uppercase tracking-[0.2em] opacity-60 transition-opacity hover:opacity-100"
              style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
            >
              Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                img: IMAGES.menu1,
                name: "Dry-Aged Côte de Bœuf",
                price: "£58",
                desc: "28-day aged, béarnaise, bone marrow butter",
              },
              {
                img: IMAGES.menu2,
                name: "Cornish Salmon",
                price: "£36",
                desc: "Leek velouté, capers, dill oil, crème fraîche",
              },
              {
                img: IMAGES.menu3,
                name: "Slow-Braised Short Rib",
                price: "£44",
                desc: "Roasted root vegetables, red wine jus, gremolata",
              },
            ].map((item) => (
              <div key={item.name} className="group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <p style={{ ...headingStyle, fontSize: "20px", color: "#fbf4e9", fontWeight: 600 }}>
                      {item.name}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        ...serifStyle,
                        fontSize: "14px",
                        color: "#fbf4e9",
                        opacity: 0.55,
                        fontStyle: "italic",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <p
                    className="shrink-0"
                    style={{ ...headingStyle, fontSize: "18px", color: "#fbf4e9", fontWeight: 500 }}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-gutter mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.event1} alt="Wine glasses" className="aspect-[3/4] w-full object-cover" />
            <img src={IMAGES.event2} alt="Event table" className="mt-8 aspect-[3/4] w-full object-cover" />
          </div>
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Upcoming Events
            </p>
            <h2
              className="mb-8 leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(36px, 4vw, 56px)",
                color: "#372821",
                fontWeight: 600,
              }}
            >
              AN EVENING
              <br />
              WORTH MARKING
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  date: "Jul 12",
                  title: "Wine & Seasons Dinner",
                  desc: "A curated six-course tasting paired with natural wines from across Europe.",
                },
                {
                  date: "Aug 2",
                  title: "Chef&apos;s Table: Summer",
                  desc: "An intimate evening at the pass - twelve guests, one chef, pure theatre.",
                },
                {
                  date: "Aug 23",
                  title: "Garden Party Lunch",
                  desc: "Celebrate summer with a long, leisurely al fresco lunch.",
                },
              ].map((eventItem) => (
                <div
                  key={eventItem.title}
                  className="flex gap-6 border-b border-[#372821]/15 pb-6"
                >
                  <p
                    className="w-12 shrink-0 opacity-50"
                    style={{ ...bodyStyle, fontSize: "12px", color: "#372821" }}
                  >
                    {eventItem.date}
                  </p>
                  <div>
                    <p style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 600 }}>
                      {eventItem.title}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        ...serifStyle,
                        fontSize: "15px",
                        color: "#372821",
                        opacity: 0.6,
                        fontStyle: "italic",
                      }}
                    >
                      {eventItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/events"
              className="inline-block mt-8 border-b border-[#372821] pb-1 uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              All Events →
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#372821" }} className="py-24 md:py-32">
        <div className="page-gutter mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
            >
              The Bar
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(36px, 4vw, 56px)",
                color: "#fbf4e9",
                fontWeight: 600,
              }}
            >
              HOUSE
              <br />
              COCKTAILS
            </h2>
            <p
              className="mb-8 opacity-70"
              style={{
                ...serifStyle,
                fontSize: "18px",
                color: "#fbf4e9",
                lineHeight: 1.75,
                fontStyle: "italic",
              }}
            >
              Each cocktail is conceived in the spirit of our menu - seasonal, considered, and
              made to be savoured slowly.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  name: "The Marlund Sour",
                  price: "£14",
                  desc: "Rye, lemon, honey syrup, egg white",
                },
                {
                  name: "Garden Negroni",
                  price: "£13",
                  desc: "Gin, Campari, vermouth, cucumber",
                },
                {
                  name: "Smoked Old Fashioned",
                  price: "£15",
                  desc: "Bourbon, cherry wood smoke, orange bitters",
                },
                {
                  name: "Elderflower Fizz",
                  price: "£12",
                  desc: "Vodka, elderflower, prosecco, mint",
                },
              ].map((cocktail) => (
                <div
                  key={cocktail.name}
                  className="flex items-start justify-between gap-4 border-b border-[#5e5249] pb-4"
                >
                  <div>
                    <p style={{ ...headingStyle, fontSize: "18px", color: "#fbf4e9", fontWeight: 500 }}>
                      {cocktail.name}
                    </p>
                    <p
                      style={{
                        ...serifStyle,
                        fontSize: "13px",
                        color: "#fbf4e9",
                        opacity: 0.5,
                        fontStyle: "italic",
                      }}
                    >
                      {cocktail.desc}
                    </p>
                  </div>
                  <p
                    className="shrink-0"
                    style={{ ...bodyStyle, fontSize: "13px", color: "#fbf4e9", opacity: 0.7 }}
                  >
                    {cocktail.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img src={IMAGES.cocktail} alt="Marlund cocktail" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#fbf4e9] py-24 text-center md:py-32">
        <div className="page-gutter mx-auto max-w-[700px]">
          <p
            className="mb-5 uppercase tracking-[0.3em] opacity-50"
            style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
          >
            Reserve Your Evening
          </p>
          <h2
            className="mb-8 leading-tight"
            style={{
              ...headingStyle,
              fontSize: "clamp(42px, 5vw, 72px)",
              color: "#372821",
              fontWeight: 600,
            }}
          >
            JOIN US FOR
            <br />
            AN UNFORGETTABLE
            <br />
            EVENING
          </h2>
          <Link
            href="/booking"
            className="inline-block border border-[#372821] px-12 py-5 uppercase tracking-[0.25em] text-[#372821] transition-all duration-300 hover:bg-[#372821] hover:text-[#fbf4e9]"
            style={{ ...bodyStyle, fontSize: "11px" }}
          >
            Book a Table
          </Link>
        </div>
      </section>
    </div>
  );
}
