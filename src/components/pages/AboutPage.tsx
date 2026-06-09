"use client";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

const ICON_STATS = [
  {
    label: "Afro-fusion dining",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <path
          d="M20 14v18M26 14v18M32 14v18M38 14v18M44 14v18M16 40h32M22 40c0 8 4 12 10 12s10-4 10-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Crafted cocktails",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <path
          d="M16 18h32l-12 14v14l-8 4V32L16 18ZM24 12l4 4M40 10l-3 5M47 16l-5 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Lounge rhythm",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
        <path
          d="M24 46V18l22-4v24M24 30l22-4M18 50a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm22 4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1651842462716-9829733957b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  story: "https://images.unsplash.com/photo-1666032119084-82351976a922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  gallery1: "https://images.unsplash.com/photo-1502920764203-b859c2384716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  gallery2: "https://images.unsplash.com/photo-1687648431656-da99da578d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  gallery3: "https://images.unsplash.com/photo-1679312061521-d7d619a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  gallery4: "https://images.unsplash.com/photo-1744776411221-702f2848b0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
} as const;

export function AboutPage() {
  return (
    <div style={{ backgroundColor: "#fbf4e9" }} className="min-h-screen">
      <section className="relative flex h-[60vh] min-h-[420px] items-end">
        <img src={IMAGES.hero} alt="Cello dining room" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(55,40,33,0.9) 0%, rgba(55,40,33,0.35) 55%, transparent 100%)",
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
            ABOUT US
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-8 py-20 text-center">
        <p
          style={{
            ...serifStyle,
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#372821",
            fontStyle: "italic",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          &quot;We believe that exceptional dining is not about formality - it is about honesty.
          Honest ingredients, honest craft, and genuine hospitality.&quot;
        </p>
        <p
          className="mt-6 uppercase tracking-[0.25em] opacity-50"
          style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
        >
          - James Croft, Head Chef &amp; Co-Founder
        </p>
      </section>

      <section style={{ backgroundColor: "#372821" }} className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-8 md:grid-cols-2">
          <div className="aspect-[3/4] overflow-hidden">
            <img src={IMAGES.story} alt="Inside Cello" className="h-full w-full object-cover" />
          </div>
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
            >
              Our Story
            </p>
            <h2
              className="mb-8 leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(34px, 4vw, 54px)",
                color: "#fbf4e9",
                fontWeight: 600,
              }}
            >
              WHERE DINNER BECOMES THE EVENING
            </h2>
            <p
              className="mb-5 opacity-80"
              style={{ ...serifStyle, fontSize: "18px", color: "#fbf4e9", lineHeight: 1.8 }}
            >
              Cello is built for the moments that happen around a table: the first drink, the
              shared plate, the music that settles in, and the conversations that carry the night
              forward.
            </p>
            <p
              className="opacity-65"
              style={{ ...serifStyle, fontSize: "17px", color: "#fbf4e9", lineHeight: 1.8 }}
            >
              The experience is warm, social, and food-led - a restaurant and bar for dinners,
              dates, birthdays, bottles, and private gatherings.
            </p>
            <div className="mt-14 grid grid-cols-3 gap-6">
              {ICON_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-3 text-[#fbf4e9] opacity-90">{stat.icon}</div>
                  <p
                    className="mt-1 uppercase tracking-[0.15em] opacity-50"
                    style={{ ...bodyStyle, fontSize: "10px", color: "#fbf4e9" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 py-24 md:py-32">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-4 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              The Space
            </p>
            <h2
              className="leading-tight"
              style={{
                ...headingStyle,
                fontSize: "clamp(34px, 4vw, 54px)",
                color: "#372821",
                fontWeight: 600,
              }}
            >
              INSIDE CELLO
            </h2>
          </div>
          <p
            style={{
              ...serifStyle,
              fontSize: "16px",
              color: "#372821",
              opacity: 0.65,
              fontStyle: "italic",
              maxWidth: "380px",
            }}
          >
            An outdoor restaurant, lounge, and bar shaped for open-air dinners, cocktails,
            conversation, and evenings that settle naturally into the night.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="col-span-2 aspect-[16/9] overflow-hidden">
            <img
              src={IMAGES.gallery1}
              alt="Restaurant chandelier"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={IMAGES.gallery2}
              alt="Dining room"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src={IMAGES.gallery3}
              alt="Table setting"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="col-span-2 aspect-[16/9] overflow-hidden">
            <img
              src={IMAGES.gallery4}
              alt="Tables set for service"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
