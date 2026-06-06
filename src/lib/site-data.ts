import { withBasePath } from "@/lib/deployment";

export const siteConfig = {
  name: "Cello Restaurant & Bar Ghana",
  shortName: "Cello",
  city: "Accra, Ghana",
  tagline: "Dinner, drinks, and late-night rhythm in one polished room.",
  description:
    "A premium restaurant and bar concept for Accra with a dining-first atmosphere, private celebrations, curated events, and table-side ordering powered by Odoo.",
  address: "Launch address to be confirmed, Accra, Ghana",
  phoneDisplay: "+233 20 000 0000",
  phoneHref: "tel:+233200000000",
  whatsappHref: "https://wa.me/233200000000",
  email: "hello@cello.example.com",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Cello+Restaurant+and+Bar+Accra",
  menuPdfHref: withBasePath("/cello-menu.pdf"),
  orderHref: "https://odoo.cello.example.com/table-order",
  privateBookingHref: "/venue",
  bookingHref: "/booking",
  socialLinks: [
    { label: "Instagram", href: "https://example.com/cello-instagram" },
    { label: "TikTok", href: "https://example.com/cello-tiktok" },
    { label: "X", href: "https://example.com/cello-x" },
  ],
  hours: [
    { label: "Mon - Thu", value: "12:00 PM - 11:00 PM" },
    { label: "Fri", value: "12:00 PM - 1:00 AM" },
    { label: "Sat", value: "1:00 PM - 1:00 AM" },
    { label: "Sun", value: "1:00 PM - 10:00 PM" },
  ],
} as const;

export const launchContentFields = [
  "brand name",
  "address",
  "WhatsApp / phone",
  "email",
  "opening hours",
  "social links",
  "menu source",
  "event schedule",
  "Odoo order URLs",
] as const;

export const pageDefinitions = [
  {
    href: "/",
    label: "Home",
    dominantAction: "Book a Table",
    responsibility: "Introduce the brand mood and route guests into the primary conversion paths fast.",
  },
  {
    href: "/menu",
    label: "Menu",
    dominantAction: "View Menu",
    responsibility: "Let guests browse signature categories, anchor pricing expectations, and access the PDF menu.",
  },
  {
    href: "/order-at-table",
    label: "Order at Table",
    dominantAction: "Order at Table",
    responsibility: "Explain the Odoo ordering handoff clearly and move the guest into the ordering flow.",
  },
  {
    href: "/booking",
    label: "Reservations",
    dominantAction: "Book a Table",
    responsibility: "Capture reservation intent with clear enquiry states and direct alternatives.",
  },
  {
    href: "/events",
    label: "Events",
    dominantAction: "Explore Events",
    responsibility: "Show recurring programming and drive event and group booking enquiries.",
  },
  {
    href: "/gallery",
    label: "Gallery",
    dominantAction: "Experience Cello",
    responsibility: "Sell the room, pace, and atmosphere through premium visual storytelling.",
  },
  {
    href: "/about",
    label: "About",
    dominantAction: "Understand the Brand",
    responsibility: "Frame Cello's positioning, service culture, and point of view.",
  },
  {
    href: "/venue",
    label: "Private Bookings",
    dominantAction: "Private Booking Enquiry",
    responsibility: "Convert private dining, celebrations, and buyout interest.",
  },
  {
    href: "/contact",
    label: "Contact",
    dominantAction: "Get Directions",
    responsibility: "Give guests frictionless access to directions, phone, WhatsApp, and operating hours.",
  },
] as const;

export const primaryCtas = [
  { label: "Book a Table", href: siteConfig.bookingHref, event: "booking_click" },
  { label: "View Menu", href: "/menu", event: "menu_click" },
  { label: "Order at Table", href: "/order-at-table", event: "order_click" },
  { label: "Get Directions", href: siteConfig.mapsHref, event: "directions_click" },
] as const;

export const mobileStickyCtas = [
  { label: "Book", href: siteConfig.bookingHref, event: "booking_click" },
  { label: "Menu", href: "/menu", event: "menu_click" },
  { label: "Call", href: siteConfig.phoneHref, event: "phone_click" },
  { label: "Directions", href: siteConfig.mapsHref, event: "directions_click" },
] as const;

export const homeHighlights = [
  {
    title: "Dining-first energy",
    description:
      "A calm, candlelit first impression that graduates into a warmer late-night tempo without losing polish.",
  },
  {
    title: "Table-side ordering",
    description:
      "Menus, top-ups, and reorder paths are designed around Odoo so the website stays focused on discovery and conversion.",
  },
  {
    title: "Private occasions",
    description:
      "Birthday dinners, small corporate gatherings, and full-room celebrations move through one clear enquiry path.",
  },
] as const;

export const menuCategories = [
  {
    name: "Small Plates",
    description: "Early-evening bites built for sharing over cocktails.",
    items: [
      { name: "Peppered Calamari", price: "GHS 95", detail: "Citrus aioli, charred lime" },
      { name: "Plantain Croquettes", price: "GHS 72", detail: "Smoked pepper relish" },
      { name: "Suya Beef Skewers", price: "GHS 110", detail: "Roasted onion, peanut dust" },
    ],
  },
  {
    name: "Mains",
    description: "Comfort-forward signatures with a refined finish.",
    items: [
      { name: "Cello Jollof & Lamb Cutlets", price: "GHS 185", detail: "Herb jus, pickled shallots" },
      { name: "Coconut Sea Bass", price: "GHS 205", detail: "Braised greens, lime rice" },
      { name: "Truffle Chicken Supreme", price: "GHS 168", detail: "Sweet corn puree, jus gras" },
    ],
  },
  {
    name: "Cocktails",
    description: "Bright signatures and darker after-hours pours.",
    items: [
      { name: "Midnight Kelewele", price: "GHS 68", detail: "Spiced rum, tamarind, citrus" },
      { name: "Accra Sunset", price: "GHS 64", detail: "Gin, hibiscus, grapefruit" },
      { name: "Cello Martini", price: "GHS 74", detail: "Vodka, cocoa nib, espresso" },
    ],
  },
] as const;

export const events = [
  {
    name: "Sunset Sessions",
    date: "Every Friday",
    time: "6:00 PM - Late",
    description:
      "A polished transition from dinner into a DJ-led lounge set with cocktail features and shared tables.",
  },
  {
    name: "Chef's Table Sundays",
    date: "First Sunday Monthly",
    time: "7:00 PM",
    description:
      "A limited-seat tasting evening built for slower pacing, chef interaction, and premium pairings.",
  },
  {
    name: "Private Celebration Nights",
    date: "By Enquiry",
    time: "Flexible",
    description:
      "Tailored setups for birthdays, proposal dinners, launch moments, and intimate corporate hosting.",
  },
] as const;

export const galleryMoments = [
  {
    title: "Arrival",
    subtitle: "Soft amber lighting, brushed metal, and a deliberate first impression.",
    tone: "from-[#c98454] via-[#5b2d24] to-[#151314]",
  },
  {
    title: "Bar Ritual",
    subtitle: "Backlit bottles, cold glassware, and a tighter late-night pace.",
    tone: "from-[#6c4630] via-[#221b1d] to-[#101010]",
  },
  {
    title: "Tablescape",
    subtitle: "Stone, linen, candlelight, and room for conversation.",
    tone: "from-[#e1d2bf] via-[#6e5847] to-[#231d1b]",
  },
  {
    title: "Private Room",
    subtitle: "A quieter setting for birthdays, business dinners, and hosted events.",
    tone: "from-[#86684b] via-[#31261f] to-[#0f0f10]",
  },
] as const;

export const venuePackages = [
  {
    title: "Private Dining",
    description: "For intimate occasions that need a dedicated table plan, menu guidance, and calm service pacing.",
  },
  {
    title: "Celebration Nights",
    description: "For birthdays and social gatherings that want food, drinks, and a stronger after-dinner atmosphere.",
  },
  {
    title: "Corporate Hosting",
    description: "For client dinners, product moments, and team gatherings that need polish without stiffness.",
  },
] as const;
