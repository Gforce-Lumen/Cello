"use client";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

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
        <img src={IMAGES.hero} alt="Marlund dining room" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(55,40,33,0.9) 0%, rgba(55,40,33,0.35) 55%, transparent 100%)",
          }}
        />
        <div className="page-gutter relative z-10 mx-auto w-full max-w-[1400px] pb-16">
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
            ABOUT US
          </h1>
        </div>
      </section>

      <section className="page-gutter mx-auto max-w-[900px] py-20 text-center">
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
        <div className="page-gutter mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
          <div className="aspect-[3/4] overflow-hidden">
            <img src={IMAGES.story} alt="Where Marlund began" className="h-full w-full object-cover" />
          </div>
          <div>
            <p
              className="mb-5 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
            >
              Our Origins
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
              WHERE MARLUND BEGAN
            </h2>
            <p
              className="mb-5 opacity-80"
              style={{ ...serifStyle, fontSize: "18px", color: "#fbf4e9", lineHeight: 1.8 }}
            >
              Marlund opened its doors in the autumn of 2018 - a partnership between a
              Michelin-trained chef and an architect with a shared belief that space and food
              should speak the same language.
            </p>
            <p
              className="opacity-65"
              style={{ ...serifStyle, fontSize: "17px", color: "#fbf4e9", lineHeight: 1.8 }}
            >
              The room was designed to feel like a private home: warm, tactile, and free of the
              cold precision that too often passes for fine dining. The menu follows the seasons
              without apology - what arrives on the plate reflects what grew, swam, or grazed best
              that week.
            </p>
            <div className="mt-14 grid grid-cols-3 gap-6">
              {[
                { number: "2018", label: "Established" },
                { number: "48", label: "Covers" },
                { number: "12", label: "Seasonal suppliers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p style={{ ...headingStyle, fontSize: "36px", color: "#fbf4e9", fontWeight: 600 }}>
                    {stat.number}
                  </p>
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

      <section className="page-gutter mx-auto max-w-[1400px] py-24 md:py-32">
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
              INSIDE MARLUND
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
            Forty-eight covers across two rooms. The main dining room, and the intimate CELLO bar,
            where cocktails are poured until midnight.
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

      <section style={{ backgroundColor: "#372821" }} className="py-24">
        <div className="page-gutter mx-auto max-w-[1400px]">
          <p
            className="mb-5 text-center uppercase tracking-[0.25em] opacity-50"
            style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
          >
            The People
          </p>
          <h2
            className="mb-16 text-center leading-tight"
            style={{
              ...headingStyle,
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "#fbf4e9",
              fontWeight: 600,
            }}
          >
            THE TEAM
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                name: "James Croft",
                role: "Head Chef & Co-Founder",
                bio: "Trained under Raymond Blanc at Le Manoir, James brings classical French technique to a deeply British table.",
              },
              {
                name: "Clara Weston",
                role: "Restaurant Director",
                bio: "With fifteen years in hospitality across London and Paris, Clara leads a team defined by warmth and precision.",
              },
              {
                name: "Owen Patel",
                role: "Head Sommelier",
                bio: "Owen curates a list of over 300 wines, with a focus on small producers and biodynamic viticulture.",
              },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div
                  className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#5e5249" }}
                >
                  <span style={{ ...headingStyle, fontSize: "28px", color: "#fbf4e9", fontWeight: 600 }}>
                    {person.name
                      .split(" ")
                      .map((namePart) => namePart[0])
                      .join("")}
                  </span>
                </div>
                <p style={{ ...headingStyle, fontSize: "22px", color: "#fbf4e9", fontWeight: 600 }}>
                  {person.name}
                </p>
                <p
                  className="mb-4 mt-1 uppercase tracking-[0.15em] opacity-55"
                  style={{ ...bodyStyle, fontSize: "10px", color: "#fbf4e9" }}
                >
                  {person.role}
                </p>
                <p
                  style={{
                    ...serifStyle,
                    fontSize: "16px",
                    color: "#fbf4e9",
                    opacity: 0.65,
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
