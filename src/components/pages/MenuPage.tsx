"use client";

import { useState } from "react";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

const HERO =
  "https://images.unsplash.com/photo-1744776411221-702f2848b0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

const MENU_DATA = {
  mains: [
    {
      name: "Dry-Aged Côte de Bœuf",
      price: "£58",
      desc: "28-day aged, béarnaise, bone marrow butter, triple-cooked chips",
      img: "https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Cornish Salmon",
      price: "£36",
      desc: "Leek velouté, capers, dill oil, crème fraîche, asparagus",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Slow-Braised Short Rib",
      price: "£44",
      desc: "Roasted root vegetables, red wine jus, gremolata, truffle mash",
      img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],
  lightBites: [
    {
      name: "Burrata & Heritage Tomatoes",
      price: "£16",
      desc: "Aged balsamic, basil oil, Maldon sea salt, sourdough crostini",
      img: "https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Hand-Dived Scallops",
      price: "£22",
      desc: "Cauliflower purée, hazelnuts, golden raisins, pancetta crisp",
      img: "https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "Smoked Duck Rillette",
      price: "£18",
      desc: "Pickled walnut, toasted sourdough, fig chutney, cornichons",
      img: "https://images.unsplash.com/photo-1600663791817-d74f5196ba29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ],
  cocktails: [
    {
      name: "The Marlund Sour",
      price: "£14",
      desc: "Rye whisky, lemon, honey syrup, egg white, Angostura bitters",
    },
    {
      name: "Garden Negroni",
      price: "£13",
      desc: "Gin, Campari, sweet vermouth, cucumber, orange twist",
    },
    {
      name: "Smoked Old Fashioned",
      price: "£15",
      desc: "Bourbon, cherry wood smoke, demerara, orange bitters",
    },
    {
      name: "Elderflower Fizz",
      price: "£12",
      desc: "Vodka, St-Germain, prosecco, fresh mint, lime",
    },
  ],
} as const;

const TABS = ["Seasonal Mains", "Light Bites", "House Cocktails"] as const;

export function MenuPage() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ backgroundColor: "#fbf4e9" }} className="min-h-screen">
      <section className="relative flex h-[55vh] min-h-[400px] items-end">
        <img src={HERO} alt="Restaurant tables" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(55,40,33,0.9) 0%, rgba(55,40,33,0.4) 60%, transparent 100%)",
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
            THE MENU
          </h1>
        </div>
      </section>

      <div style={{ backgroundColor: "#372821" }} className="sticky top-[72px] z-40">
        <div className="page-gutter horizontal-scroll-region mx-auto flex max-w-[1400px] gap-0">
          {TABS.map((item, index) => (
            <button
              key={item}
              onClick={() => setTab(index)}
              className="shrink-0 border-b-2 px-8 py-5 uppercase tracking-[0.2em] transition-all duration-200"
              style={{
                ...bodyStyle,
                fontSize: "11px",
                color: "#fbf4e9",
                borderColor: tab === index ? "#fbf4e9" : "transparent",
                opacity: tab === index ? 1 : 0.45,
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="page-gutter mx-auto max-w-[1400px] py-20">
        {tab === 0 ? (
          <div>
            <p
              className="mb-12 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Sourced daily · Prepared with care
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {MENU_DATA.mains.map((item) => (
                <div key={item.name} className="group">
                  <div className="mb-5 aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p style={{ ...headingStyle, fontSize: "21px", color: "#372821", fontWeight: 600 }}>
                        {item.name}
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          ...serifStyle,
                          fontSize: "15px",
                          color: "#372821",
                          opacity: 0.6,
                          fontStyle: "italic",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <p
                      className="shrink-0"
                      style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 500 }}
                    >
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {tab === 1 ? (
          <div>
            <p
              className="mb-12 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              To share or to start
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {MENU_DATA.lightBites.map((item) => (
                <div key={item.name} className="group">
                  <div className="mb-5 aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p style={{ ...headingStyle, fontSize: "21px", color: "#372821", fontWeight: 600 }}>
                        {item.name}
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          ...serifStyle,
                          fontSize: "15px",
                          color: "#372821",
                          opacity: 0.6,
                          fontStyle: "italic",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <p
                      className="shrink-0"
                      style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 500 }}
                    >
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {tab === 2 ? (
          <div>
            <p
              className="mb-12 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Seasonal · Considered · Made to be savoured
            </p>
            <div className="max-w-[700px]">
              {MENU_DATA.cocktails.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-8 py-7"
                  style={{
                    borderBottom:
                      index < MENU_DATA.cocktails.length - 1
                        ? "1px solid rgba(55,40,33,0.15)"
                        : "none",
                  }}
                >
                  <div>
                    <p style={{ ...headingStyle, fontSize: "22px", color: "#372821", fontWeight: 600 }}>
                      {item.name}
                    </p>
                    <p
                      className="mt-2"
                      style={{
                        ...serifStyle,
                        fontSize: "15px",
                        color: "#372821",
                        opacity: 0.6,
                        fontStyle: "italic",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <p
                    className="shrink-0"
                    style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 500 }}
                  >
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <div className="page-gutter mx-auto max-w-[1400px] pb-20">
        <p
          style={{
            ...serifStyle,
            fontSize: "14px",
            color: "#372821",
            opacity: 0.4,
            fontStyle: "italic",
          }}
        >
          Please inform your server of any dietary requirements or allergies before ordering. All
          dishes are prepared in a kitchen that handles nuts, gluten, dairy, and shellfish.
        </p>
      </div>
    </div>
  );
}
