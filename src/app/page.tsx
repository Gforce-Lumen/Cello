import Image from "next/image";
import type { Metadata } from "next";

import { CtaButton } from "@/components/cta-button";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata(
  "Home",
  "A premium, image-led homepage for Cello Restaurant & Bar in Accra, centered on dining, cocktails, events, and private evenings.",
  "/",
);

const galleryImages = [
  { src: "/images/gallery-food.svg", alt: "Food gallery placeholder", file: "gallery-food.svg" },
  {
    src: "/images/gallery-cocktails.svg",
    alt: "Cocktail gallery placeholder",
    file: "gallery-cocktails.svg",
  },
  {
    src: "/images/gallery-interior.svg",
    alt: "Interior gallery placeholder",
    file: "gallery-interior.svg",
  },
  {
    src: "/images/gallery-dining.svg",
    alt: "Dining gallery placeholder",
    file: "gallery-dining.svg",
  },
  {
    src: "/images/gallery-nightlife.svg",
    alt: "Nightlife gallery placeholder",
    file: "gallery-nightlife.svg",
  },
] as const;

const kitchenHighlights = [
  {
    name: "Chicken Wings",
    price: "GHc150",
    src: "/images/kitchen-chicken-wings.svg",
    alt: "Chicken Wings placeholder",
    file: "kitchen-chicken-wings.svg",
  },
  {
    name: "Seafood Fried Rice",
    price: "GHc210",
    src: "/images/kitchen-seafood-fried-rice.svg",
    alt: "Seafood Fried Rice placeholder",
    file: "kitchen-seafood-fried-rice.svg",
  },
  {
    name: "Sirloin Sizzle",
    price: "GHc250",
    src: "/images/kitchen-sirloin-sizzle.svg",
    alt: "Sirloin Sizzle placeholder",
    file: "kitchen-sirloin-sizzle.svg",
  },
  {
    name: "Cello Maestro Platter",
    price: "GHc600",
    src: "/images/kitchen-cello-maestro-platter.svg",
    alt: "Cello Maestro Platter placeholder",
    file: "kitchen-cello-maestro-platter.svg",
  },
] as const;

const upcomingEvents = [
  {
    title: "Friday Lounge Night",
    description: "A slower dinner service that lifts into DJ-led late-evening energy.",
    cta: "See Details",
  },
  {
    title: "Live Band Evening",
    description: "Warm live sets, polished table service, and a room built for lingering.",
    cta: "Join the Night",
  },
  {
    title: "Sunday Brunch",
    description: "Late-morning plates, cocktails, and a softer social rhythm.",
    cta: "View Brunch",
  },
  {
    title: "Game Night",
    description: "Drinks, shared food, and a more playful evening crowd.",
    cta: "Plan Your Table",
  },
] as const;

const cocktails = [
  {
    name: "Ginzy",
    price: "GHc100",
    src: "/images/cocktail-ginzy.svg",
    alt: "Ginzy cocktail placeholder",
    file: "cocktail-ginzy.svg",
  },
  {
    name: "Cello Mule",
    price: "GHc150",
    src: "/images/cocktail-cello-mule.svg",
    alt: "Cello Mule cocktail placeholder",
    file: "cocktail-cello-mule.svg",
  },
  {
    name: "Purple Buzz",
    price: "GHc130",
    src: "/images/cocktail-purple-buzz.svg",
    alt: "Purple Buzz cocktail placeholder",
    file: "cocktail-purple-buzz.svg",
  },
  {
    name: "Moment of Passion",
    price: "GHc130",
    src: "/images/cocktail-moment-of-passion.svg",
    alt: "Moment of Passion cocktail placeholder",
    file: "cocktail-moment-of-passion.svg",
  },
] as const;

type EditorialImageProps = {
  src: string;
  alt: string;
  file: string;
  aspectClassName: string;
  priority?: boolean;
};

function EditorialImage({
  src,
  alt,
  file,
  aspectClassName,
  priority = false,
}: EditorialImageProps) {
  return (
    <figure className={`group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#141216] ${aspectClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-[var(--color-sand)] backdrop-blur">
        Replace with {file}
      </figcaption>
    </figure>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[var(--color-accent)]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-[92rem] px-5 pt-12 sm:px-6 sm:pt-16 lg:px-10 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_17rem] lg:items-end">
          <div className="max-w-5xl">
            <SectionLabel>Restaurant & Bar</SectionLabel>
            <h1 className="mt-5 font-display text-[3.6rem] leading-[0.88] tracking-[0.02em] text-white sm:text-[5rem] lg:text-[7.6rem]">
              CELLO
              <br />
              RESTAURANT
              <br />
              &amp; BAR
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-ink-muted)] sm:text-lg">
              Modern dining, crafted cocktails, premium bottles, and evenings well spent in
              Accra.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/menu" analyticsEvent="menu_click">
                View Menu
              </CtaButton>
              <CtaButton href="/booking" variant="secondary" analyticsEvent="booking_click">
                Book a Table
              </CtaButton>
            </div>
          </div>

          <div className="space-y-6 border-t border-white/8 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--color-sand)]">
                Location
              </p>
              <p className="mt-2 text-sm leading-7 text-white">Accra, Ghana</p>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--color-sand)]">
                Contact
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-sm leading-7 text-[var(--color-ink-muted)] transition hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm leading-7 text-[var(--color-ink-muted)] transition hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <EditorialImage
            src="/images/hero-ambience.svg"
            alt="Hero ambience placeholder"
            file="hero-ambience.svg"
            aspectClassName="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[18/8]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] gap-10 px-5 py-18 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-10 lg:py-24">
        <div className="max-w-xl space-y-5">
          <SectionLabel>About Cello</SectionLabel>
          <h2 className="font-display text-[2.6rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.4rem]">
            A calm space for food, drinks, and late evenings.
          </h2>
          <p className="max-w-lg text-sm leading-8 text-[var(--color-ink-muted)] sm:text-base">
            Cello Restaurant &amp; Bar brings together thoughtful dining, crafted drinks, music,
            and a relaxed evening atmosphere. Designed for quiet dinners, group moments,
            bottle-service nights, and evenings that move at your pace.
          </p>
          <CtaButton href="/about" variant="ghost">
            Discover More
          </CtaButton>
        </div>

        <EditorialImage
          src="/images/about-interior.svg"
          alt="About interior placeholder"
          file="about-interior.svg"
          aspectClassName="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[5/4]"
        />
      </section>

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="mt-3 font-display text-[2.4rem] leading-none text-white sm:text-[3.4rem]">
                The room, the table, the bar.
              </h2>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="mx-auto flex w-max gap-4 px-5 sm:px-6 lg:px-10">
            {galleryImages.map((image) => (
              <div key={image.file} className="w-[15rem] sm:w-[20rem] lg:w-[24rem]">
                <EditorialImage
                  src={image.src}
                  alt={image.alt}
                  file={image.file}
                  aspectClassName="aspect-[4/5]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Kitchen Highlights</SectionLabel>
            <h2 className="mt-3 font-display text-[2.6rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
              Four dishes that carry the table.
            </h2>
          </div>
          <CtaButton href="/menu" variant="ghost" analyticsEvent="menu_click">
            View Menu
          </CtaButton>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {kitchenHighlights.map((item) => (
            <article key={item.name} className="space-y-4">
              <EditorialImage
                src={item.src}
                alt={item.alt}
                file={item.file}
                aspectClassName="aspect-[5/4]"
              />
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-[2rem] leading-none text-white sm:text-[2.35rem]">
                    {item.name}
                  </h3>
                </div>
                <p className="pb-1 text-[0.82rem] uppercase tracking-[0.24em] text-[var(--color-sand)]">
                  {item.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <SectionLabel>Upcoming Events</SectionLabel>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
            Evenings with a little more movement.
          </h2>
        </div>

        <div className="mt-10 border-t border-white/8">
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="grid gap-4 border-b border-white/8 py-6 sm:py-7 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:gap-8"
            >
              <h3 className="font-display text-[2rem] leading-none text-white sm:text-[2.5rem]">
                {event.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
                {event.description}
              </p>
              <a
                href="/events"
                className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-sand)] transition hover:text-white"
              >
                {event.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <SectionLabel>House Cocktails</SectionLabel>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
            House pours for slower nights and louder tables.
          </h2>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
          {cocktails.map((drink) => (
            <article key={drink.name} className="space-y-4">
              <EditorialImage
                src={drink.src}
                alt={drink.alt}
                file={drink.file}
                aspectClassName="aspect-[4/5]"
              />
              <div className="space-y-2">
                <h3 className="font-display text-[1.8rem] leading-none text-white">
                  {drink.name}
                </h3>
                <p className="text-[0.82rem] uppercase tracking-[0.24em] text-[var(--color-sand)]">
                  {drink.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] gap-10 px-5 py-18 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-24">
        <EditorialImage
          src="/images/private-venue.svg"
          alt="Private venue placeholder"
          file="private-venue.svg"
          aspectClassName="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[5/4]"
        />

        <div className="max-w-xl space-y-5">
          <SectionLabel>Private Venue</SectionLabel>
          <h2 className="font-display text-[2.6rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
            Designed for celebrations, group dinners, and private moments.
          </h2>
          <p className="text-sm leading-8 text-[var(--color-ink-muted)] sm:text-base">
            From birthdays and intimate dinners to corporate evenings and small private gatherings,
            Cello offers a warm setting with food, drinks, music, bottle service, and dedicated
            planning.
          </p>
          <CtaButton href="/venue" analyticsEvent="booking_click">
            Plan an Event
          </CtaButton>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-18 sm:px-6 lg:px-10 lg:py-28">
        <div className="border-t border-white/8 pt-10">
          <SectionLabel>Reserve</SectionLabel>
          <h2 className="mt-4 max-w-4xl font-display text-[2.8rem] leading-[0.92] text-white sm:text-[4.2rem] lg:text-[5.6rem]">
            Book your evening at Cello.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--color-ink-muted)] sm:text-base">
            Dinner, drinks, music, cocktails, bottles, and private moments in one refined
            restaurant and bar setting.
          </p>
          <div className="mt-8">
            <CtaButton href="/booking" analyticsEvent="booking_click">
              Reserve Now
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
