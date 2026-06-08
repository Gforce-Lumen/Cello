"use client";

import { useState } from "react";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

const HERO =
  "https://images.unsplash.com/photo-1744776411221-702f2848b0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

type FeaturedItem = {
  name: string;
  price: string;
  desc: string;
  img: string;
};

type MenuEntry = {
  name: string;
  price: string;
  desc?: string;
};

type FoodSection = {
  title: string;
  items: MenuEntry[];
};

type DrinkSection = {
  title: string;
  note?: string;
  items: MenuEntry[];
};

const STARTERS_FEATURED: FeaturedItem[] = [
  {
    name: "Grilled Octopus",
    price: "GH₵150",
    desc: "Charred and succulent, served with a touch of citrus for that coastal finish.",
    img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    name: "Shrimp Appetizer",
    price: "GH₵120",
    desc: "Succulent shrimp seared in garlic butter or grilled on skewers with coastal flavor.",
    img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    name: "Fried Calamari",
    price: "GH₵140",
    desc: "Lightly battered calamari, fried crisp and served hot.",
    img: "https://images.unsplash.com/photo-1625944231533-dad4f5a99692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
];

const STARTER_SECTIONS: FoodSection[] = [
  {
    title: "Savoury Starters",
    items: [
      {
        name: "Samosa and Spring Roll",
        price: "GH₵100",
        desc: "Crisp golden parcels filled with spiced goodness (beef / vegetarian).",
      },
      {
        name: "Grilled Fish Bites",
        price: "GH₵150",
        desc: "Tender, smoky chunks of seasoned fish grilled to perfection and bursting with flavor.",
      },
      {
        name: "Grilled Octopus",
        price: "GH₵150",
        desc: "Charred and succulent, served with a touch of citrus for that coastal finish.",
      },
      {
        name: "Chicken Wings (BBQ / Spicy / Regular)",
        price: "GH₵150",
        desc: "Juicy, flavor-packed wings glazed to perfection.",
      },
      {
        name: "Pork Belly Bites",
        price: "GH₵100",
        desc: "Crispy on the outside, melt-in-your-mouth tender inside.",
      },
      {
        name: "Khebab - Beef / Chicken / Sausage / Pork",
        price: "GH₵80",
        desc: "Skewered, spiced, and flame-grilled. A taste of Ghana's street-style tradition.",
      },
      {
        name: "Fish Dippers",
        price: "GH₵150",
        desc: "Tender fish bites in a crispy coating fried to golden perfection.",
      },
      {
        name: "Shrimp Appetizer",
        price: "GH₵120",
        desc: "Succulent shrimp seared in garlic butter or grilled on skewers with coastal flavor.",
      },
      {
        name: "Fried Calamari",
        price: "GH₵140",
        desc: "Lightly battered calamari, fried crisp and served hot.",
      },
    ],
  },
  {
    title: "Salads",
    items: [
      {
        name: "Greek Salad",
        price: "GH₵100",
        desc: "Crisp lettuce, juicy tomatoes, olives, and feta tossed in a bright Mediterranean dressing.",
      },
      {
        name: "Caesar Salad",
        price: "GH₵130",
        desc: "Crunchy romaine, creamy Caesar dressing, parmesan, and croutons.",
      },
      {
        name: "Tuna Salad",
        price: "GH₵150",
        desc: "Flaked tuna with crisp veggies and a tangy dressing.",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Potato Fries", price: "GH₵65" },
      { name: "Fried Yam", price: "GH₵75" },
      { name: "Jollof Rice", price: "GH₵65" },
      { name: "Egg Fried Rice", price: "GH₵65" },
      { name: "Kelewele (Spiced Fried Plantains)", price: "GH₵50" },
      { name: "Sautéed Vegetables", price: "GH₵60" },
      { name: "Mashed Potatoes", price: "GH₵50" },
      { name: "Plain Rice", price: "GH₵65" },
      { name: "Sweet Potato Fries", price: "GH₵65" },
    ],
  },
  {
    title: "Tempting Treats",
    items: [
      {
        name: "Black Forest Cake",
        price: "GH₵100",
        desc: "Decadent chocolate sponge cake served with a side of vanilla ice cream.",
      },
      {
        name: "Apple Crumble",
        price: "GH₵130",
        desc: "Warm spiced apples baked beneath a golden, buttery crumble topping.",
      },
    ],
  },
];

const MAINS_FEATURED: FeaturedItem[] = [
  {
    name: "The Butcher's Choice",
    price: "GH₵420",
    desc: "A bold steak grilled to perfection and served with your choice of side.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    name: "Assorted Jollof",
    price: "GH₵150",
    desc: "Smoky, spicy jollof loaded with mixed meats and vegetables.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
  {
    name: "Seafood Platter",
    price: "GH₵850",
    desc: "A hearty seafood spread with grilled octopus, calamari, prawns, fish dippers, and seafood fried rice.",
    img: "https://images.unsplash.com/photo-1559847844-d721426d6edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  },
];

const MAIN_SECTIONS: FoodSection[] = [
  {
    title: "Pasta Affair",
    items: [
      {
        name: "Chicken Alfredo",
        price: "GH₵170",
        desc: "Creamy Alfredo tossed with tender chicken and parmesan perfection.",
      },
      {
        name: "Assorted Spicy Pasta",
        price: "GH₵170",
        desc: "Mixed proteins, vibrant spices, and a fiery kick in every bite.",
      },
      {
        name: "Seafood Arrabiata",
        price: "GH₵180",
        desc: "Shrimp, calamari, and fish in a rich, spicy tomato sauce that packs a punch.",
      },
      {
        name: "Pesto Pasta",
        price: "GH₵150",
        desc: "Fresh basil pesto swirled through al dente pasta and mushrooms.",
      },
    ],
  },
  {
    title: "Main Course",
    items: [
      {
        name: "Grouper Fillet",
        price: "GH₵250",
        desc: "Tender grilled fillet with a buttery finish, served with sautéed veggies or potatoes.",
      },
      {
        name: "Sirloin Sizzle",
        price: "GH₵250",
        desc: "Juicy strips of beef tossed with crisp veggies in a savory sauce, served with rice.",
      },
      {
        name: "Salmon Piccata",
        price: "GH₵250",
        desc: "Pan-seared salmon glazed in lemon butter and capers, served with rice or mashed potatoes.",
      },
      {
        name: "Grilled Prawns",
        price: "GH₵300",
        desc: "Charred, juicy prawns brushed with garlic butter and served with your side of choice.",
      },
      {
        name: "Terriyaki Chicken",
        price: "GH₵200",
        desc: "Grilled chicken glazed in sweet-salty teriyaki, served with jollof and kelewele.",
      },
    ],
  },
  {
    title: "Signature Rice Meals",
    items: [
      {
        name: "Coconut Fried Rice",
        price: "GH₵80",
        desc: "Fragrant, fluffy rice infused with creamy coconut and vegetables.",
      },
      {
        name: "Assorted Jollof",
        price: "GH₵150",
        desc: "Smoky, spicy jollof loaded with mixed meats and vegetables.",
      },
      {
        name: "Assorted Fried Rice",
        price: "GH₵180",
        desc: "Golden fried rice tossed with savory spices, mixed meats, and vibrant vegetables.",
      },
      {
        name: "Seafood Fried Rice",
        price: "GH₵210",
        desc: "A coastal twist on fried rice brimming with shrimp, calamari, and fish fillet.",
      },
      {
        name: "The Butcher's Choice",
        price: "GH₵420",
        desc: "A bold steak grilled to perfection and served with your choice of side.",
      },
    ],
  },
  {
    title: "Burgers",
    items: [
      {
        name: "Beef Burger",
        price: "GH₵150",
        desc: "Juicy grilled beef patty layered with melted cheese and house sauce.",
      },
      {
        name: "Fish Burger",
        price: "GH₵150",
        desc: "Crispy fillet topped with tangy slaw and zesty aioli.",
      },
      {
        name: "Chicken Burger",
        price: "GH₵150",
        desc: "Tender chicken breast grilled or fried, stacked with fresh greens and creamy sauce.",
      },
    ],
  },
  {
    title: "Platters",
    items: [
      {
        name: "Cello Maestro Platter",
        price: "GH₵600",
        desc: "Fried yam, kelewele, wings, fish dippers, and assorted protein fried rice for three.",
      },
      {
        name: "Seafood Platter",
        price: "GH₵850",
        desc: "Fried yam, kelewele, grilled octopus, calamari, grilled prawns, fish dippers, and seafood fried rice for four.",
      },
      {
        name: "Group Feast",
        price: "GH₵1200",
        desc: "A generous shared spread of wings, octopus, prawns, calamari, fish dippers, fried yam, and kelewele for six.",
      },
    ],
  },
  {
    title: "Veggie Oasis",
    items: [
      {
        name: "Garden Medley Stir",
        price: "GH₵120",
        desc: "A colorful medley of sautéed vegetables tossed in a light, savory sauce.",
      },
    ],
  },
];

const DRINK_SECTIONS: DrinkSection[] = [
  {
    title: "Classic Cocktails",
    items: [
      { name: "Cuba Libre", price: "GH₵90", desc: "Classic rum, lime juice, and cola with a tropical kick." },
      {
        name: "Cosmopolitan",
        price: "GH₵90",
        desc: "Vodka, Cointreau, lime juice, and cranberry in a crisp, balanced pour.",
      },
      {
        name: "Martini",
        price: "GH₵100",
        desc: "A timeless mix of gin or vodka and vermouth with a bright lemon twist.",
      },
      {
        name: "Dark 'n' Stormy",
        price: "GH₵90",
        desc: "Dark rum, ginger beer, Angostura bitters, and fresh lime.",
      },
      {
        name: "French 75",
        price: "GH₵100",
        desc: "Gin, lemon juice, and simple syrup topped with bubbly prosecco.",
      },
      {
        name: "Margarita",
        price: "GH₵80",
        desc: "Tequila, triple sec, and lime juice shaken to perfection.",
      },
      {
        name: "Mojito",
        price: "GH₵90",
        desc: "White rum, lime, mint, and soda in a cool Cuban favorite.",
      },
      {
        name: "Old Fashioned",
        price: "GH₵100",
        desc: "Bourbon, bitters, and sugar stirred over ice.",
      },
      { name: "Mai Tai", price: "GH₵90", desc: "White and dark rum blended with lime, triple sec, and orgeat." },
      {
        name: "Bellini",
        price: "GH₵120",
        desc: "42 Below vodka, Fernet Branca, peach liqueur, and lemon juice.",
      },
    ],
  },
  {
    title: "House Cocktails",
    items: [
      {
        name: "Ginzy",
        price: "GH₵100",
        desc: "House signature cocktail with ginger-cinnamon infused Ghanaian distilled aromatic palm spirit. Buy 2, get 1 free.",
      },
      {
        name: "Frosé",
        price: "GH₵120",
        desc: "Frozen rosé blended with fresh fruit and a splash of sweetness.",
      },
      {
        name: "Cello Mule",
        price: "GH₵150",
        desc: "Vodka, lime juice, ginger beer, and mint for a bright, vibrant finish.",
      },
      {
        name: "Purple Buzz",
        price: "GH₵130",
        desc: "Ginger and citrus balanced by blueberry depth and a sparkling finish.",
      },
      {
        name: "Moment of Passion",
        price: "GH₵130",
        desc: "Passion fruit, pineapple, citrus, and a hint of smooth sweetness.",
      },
    ],
  },
  {
    title: "Mocktails",
    items: [
      {
        name: "Personal Experience",
        price: "GH₵100",
        desc: "Blueberry, apple, citrus, mint, and soda in a crisp, invigorating blend.",
      },
      {
        name: "Cucumber Cooler",
        price: "GH₵100",
        desc: "Cucumber and citrus balanced with a hint of sweetness and topped with soda.",
      },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Water", price: "GH₵25" },
      { name: "Still Water", price: "GH₵55" },
      { name: "Pineapple Juice", price: "GH₵35" },
      { name: "Coke", price: "GH₵30" },
      { name: "Fanta", price: "GH₵30" },
      { name: "Sprite", price: "GH₵30" },
      { name: "Red Bull", price: "GH₵55" },
      { name: "Tonic", price: "GH₵30" },
      { name: "Ginger Ale", price: "GH₵50" },
      { name: "Ginger Beer", price: "GH₵65" },
      { name: "Orange", price: "GH₵50" },
      { name: "Cranberry", price: "GH₵50" },
      { name: "Watermelon", price: "GH₵50" },
      { name: "Pine-Ginger", price: "GH₵50" },
    ],
  },
  {
    title: "Beer, Cider, and Coolers",
    items: [
      { name: "Mini Club", price: "GH₵50" },
      { name: "Club (Regular Size)", price: "GH₵55" },
      { name: "Heineken", price: "GH₵55" },
      { name: "Savanna Dry", price: "GH₵55" },
      { name: "Smirnoff Pineapple", price: "GH₵55" },
      { name: "Smirnoff Ice", price: "GH₵55" },
      { name: "Gulder", price: "GH₵50" },
      { name: "Hunter's Dry", price: "GH₵50" },
    ],
  },
  {
    title: "Selected Wines",
    note: "Available by glass or bottle from the current menu.",
    items: [
      { name: "Escudo Rojo Cabernet Sauvignon", price: "GH₵90 | GH₵580" },
      { name: "Domaine Peiriere Réserve Merlot", price: "GH₵100 | GH₵650" },
      { name: "Long Mountain Cabernet Sauvignon", price: "GH₵100 | GH₵650" },
      { name: "Long Mountain Sweet Red", price: "GH₵120 | GH₵750" },
      { name: "Mosketto Sweet Red", price: "GH₵120 | GH₵850" },
      { name: "19 Crimes", price: "Bottle Available" },
      { name: "J.P. Chenet Apple", price: "GH₵95 | GH₵650" },
      { name: "Itinera Brut", price: "GH₵95 | GH₵650" },
      { name: "Torley Brut", price: "GH₵110 | GH₵680" },
      { name: "Torley Rose", price: "GH₵95 | GH₵750" },
      { name: "Van Lovere Chardonnay", price: "GH₵95 | GH₵650" },
      { name: "Escudo Rojo Sauvignon Blanc", price: "GH₵110 | GH₵680" },
      { name: "Long Mountain Sweet White", price: "GH₵95 | GH₵750" },
      { name: "Mosketto Sweet White", price: "Bottle Available" },
      { name: "Château De Pena Côte de Roussillon", price: "GH₵110 | GH₵670" },
      { name: "Piccini Collezione Oro Toscana Rosato", price: "GH₵130 | GH₵870" },
    ],
  },
  {
    title: "Hard Stuff",
    note: "Shot or bottle pricing from the current menu.",
    items: [
      { name: "JW Double Black", price: "GH₵75 | GH₵2050" },
      { name: "JW Black Label", price: "GH₵75 | GH₵1600" },
      { name: "Jack Daniels", price: "GH₵65 | GH₵1200" },
      { name: "Monkey Shoulder", price: "GH₵65 | GH₵1450" },
      { name: "Glenfiddich 18yrs", price: "GH₵160 | GH₵3700" },
      { name: "Glenfiddich 15yrs", price: "GH₵150 | GH₵2800" },
      { name: "Macallan", price: "GH₵130 | GH₵3900" },
      { name: "Hennessy VS", price: "GH₵75 | GH₵1500" },
      { name: "Hennessy VSOP", price: "GH₵110 | GH₵2500" },
      { name: "Remy Martin", price: "GH₵85 | GH₵2100" },
      { name: "Aphro Moor", price: "GH₵50 | GH₵850" },
      { name: "Jagermister", price: "GH₵50 | GH₵850" },
      { name: "Baileys", price: "GH₵60 | GH₵1280" },
      { name: "Aphro Nubi", price: "GH₵50 | GH₵850" },
      { name: "Smirnoff", price: "GH₵30 | GH₵1500" },
      { name: "Ciroc Blue", price: "GH₵60 | GH₵2050" },
      { name: "Absolut", price: "GH₵30 | GH₵700" },
      { name: "Sky", price: "GH₵35 | GH₵550" },
      { name: "Bacardi Carta Blanca", price: "GH₵50 | GH₵860" },
      { name: "Bacardi Carta Oro", price: "GH₵55 | GH₵1120" },
      { name: "Captain Morgan Spice", price: "GH₵55 | GH₵1120" },
      { name: "Bacardi Carta Negra", price: "GH₵50 | GH₵860" },
      { name: "Monkey 47", price: "GH₵130 | GH₵2000" },
      { name: "Hendricks", price: "GH₵75 | GH₵1800" },
      { name: "Tanqueray 10", price: "GH₵60 | GH₵1120" },
      { name: "Beefeater", price: "GH₵50 | GH₵800" },
      { name: "Gordon Dry Gin", price: "GH₵50 | GH₵700" },
      { name: "Martini Blanco", price: "GH₵50" },
      { name: "Campari", price: "GH₵50 | GH₵700" },
      { name: "Martini Rosso", price: "GH₵100" },
      { name: "Martini Fiero", price: "GH₵50" },
      { name: "Casamigos Blanco", price: "GH₵120 | GH₵3600" },
      { name: "Casamigos Anejo", price: "GH₵160 | GH₵4200" },
      { name: "Patron Silver", price: "GH₵100 | GH₵2100" },
      { name: "Olmeca Blanco", price: "GH₵50 | GH₵1000" },
      { name: "Chivas 12 Yrs", price: "GH₵75 | GH₵1650" },
      { name: "House Whiskey (Rama)", price: "GH₵200" },
      { name: "Don Julio Reposado", price: "GH₵3600" },
      { name: "Martell VS", price: "GH₵2400" },
    ],
  },
];

const TABS = ["Starters", "Mains", "Drinks"] as const;

function FeaturedCards({ items }: { items: FeaturedItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map((item) => (
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
  );
}

function FoodListSection({ section }: { section: FoodSection }) {
  return (
    <div>
      <p
        className="mb-6 uppercase tracking-[0.25em] opacity-50"
        style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
      >
        {section.title}
      </p>
      <div>
        {section.items.map((item, index) => (
          <div
            key={`${section.title}-${item.name}`}
            className="flex items-start justify-between gap-8 py-5"
            style={{
              borderBottom:
                index < section.items.length - 1 ? "1px solid rgba(55,40,33,0.12)" : "none",
            }}
          >
            <div className="max-w-[540px]">
              <p style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 600 }}>
                {item.name}
              </p>
              {item.desc ? (
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
              ) : null}
            </div>
            <p
              className="shrink-0 text-right"
              style={{ ...headingStyle, fontSize: "17px", color: "#372821", fontWeight: 500 }}
            >
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DrinkListSection({ section }: { section: DrinkSection }) {
  return (
    <div>
      <p
        className="mb-3 uppercase tracking-[0.25em] opacity-50"
        style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
      >
        {section.title}
      </p>
      {section.note ? (
        <p
          className="mb-6 max-w-[520px]"
          style={{ ...serifStyle, fontSize: "15px", color: "#372821", opacity: 0.6, fontStyle: "italic" }}
        >
          {section.note}
        </p>
      ) : null}
      <div>
        {section.items.map((item, index) => (
          <div
            key={`${section.title}-${item.name}`}
            className="flex items-start justify-between gap-8 py-5"
            style={{
              borderBottom:
                index < section.items.length - 1 ? "1px solid rgba(55,40,33,0.12)" : "none",
            }}
          >
            <div className="max-w-[560px]">
              <p style={{ ...headingStyle, fontSize: "18px", color: "#372821", fontWeight: 600 }}>
                {item.name}
              </p>
              {item.desc ? (
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
              ) : null}
            </div>
            <p
              className="shrink-0 text-right"
              style={{ ...headingStyle, fontSize: "17px", color: "#372821", fontWeight: 500 }}
            >
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
            THE MENU
          </h1>
        </div>
      </section>

      <div style={{ backgroundColor: "#372821" }} className="sticky top-[72px] z-40">
        <div className="scrollbar-hidden mx-auto flex max-w-[1400px] gap-0 overflow-x-auto px-8">
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

      <section className="mx-auto max-w-[1400px] px-8 py-20">
        {tab === 0 ? (
          <div>
            <p
              className="mb-12 uppercase tracking-[0.25em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              To share, snack, or start the table
            </p>
            <FeaturedCards items={STARTERS_FEATURED} />
            <div className="mt-16 grid gap-14 xl:grid-cols-2">
              {STARTER_SECTIONS.map((section) => (
                <FoodListSection key={section.title} section={section} />
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
              From pasta and rice bowls to shared platters
            </p>
            <FeaturedCards items={MAINS_FEATURED} />
            <div className="mt-16 grid gap-14 xl:grid-cols-2">
              {MAIN_SECTIONS.map((section) => (
                <FoodListSection key={section.title} section={section} />
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
              Cocktails, wines, cold pours, and premium bottles
            </p>
            <div className="grid gap-14 xl:grid-cols-2">
              {DRINK_SECTIONS.map((section) => (
                <DrinkListSection key={section.title} section={section} />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <div className="mx-auto max-w-[1400px] px-8 pb-20">
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
