// perfumes.js
import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import { CartContext } from "./_app";

export default function Perfumes() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "perfume1.jpg",
      name: "Davidoff Cool Water Woman",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A fresh, aquatic floral scent that feels clean, cool, and refreshing—perfect for everyday wear.",
        features: [
          "Scent Type: Fresh Floral Aquatic",
          "Key Notes: Melon, Lotus, Water Lily, Pineapple, Lemon, Jasmine, and Musk.",
          "Longevity: Moderate (typically lasts 4 to 6 hours).",
          "Intensity: Light to Moderate (Breezy and Airy).",
        ],
        recommended: "Great for those who love light, crisp, beachy scents. Ideal for daily use and warm weather.",
      },
    },
    {
      image: "perfume2.jpg",
      name: "YSL Black Opium Eau de Parfum",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A bold, sweet, and addictive fragrance with a modern gourmand vibe.",
        features: [
          "Scent Type: Warm Gourmand / Sweet Oriental",
          "Key Notes: Coffee, Vanilla, White Flowers",
          "Longevity: Long-lasting (6–10 hours)",
          "Intensity: Strong and seductive",
        ],
        recommended: "Perfect for those who love rich, sweet, nighttime scents. Great for parties, dates, and evening wear.",
      },
    },
    {
      image: "perfume3.jpg",
      name: "Jo Malone English Pear & Freesia Cologne",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A fresh, elegant, and fruity-floral scent with a soft, airy finish.",
        features: [
          "Scent Type: Fresh Fruity Floral",
          "Key Notes: Pear, Freesia, Patchouli, Amber",
          "Longevity: Moderate (4–6 hours)",
          "Intensity: Light to Moderate",
        ],
        recommended: "Great for those who love clean, classy everyday scents. Perfect for daytime wear and warm weather.",
      },
    },
    {
      image: "perfume4.jpg",
      name: "YSL Libre Eau de Parfum",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A bold, modern floral scent with a blend of bright lavender and warm vanilla, giving a powerful yet feminine impression.",
        features: [
          "Scent Type: Oriental Floral / Fougère (A bold mix of floral and aromatic notes)",
          "Key Notes: French Lavender, Moroccan Orange Blossom, Musk, Madagascar Vanilla, and Cedar.",
          "Longevity: Long-lasting (Typically 7 to 9 hours).",
          "Intensity: Moderate to Strong (Confident, warm, and structured).",
        ],
        recommended: "Perfect for those who love bold, elegant scents with a touch of sweetness. Great for confident everyday wear, nights out, and special occasions.",
      },
    },
    {
      image: "perfume5.jpg",
      name: "Miss Dior Blooming Bouquet Eau de Toilette",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A delicate and fresh floral fragrance featuring peony and Damascus rose, creating a soft, romantic, and airy scent perfect for everyday wear.",
        features: [
          "Scent Type: Fresh Soft Floral",
          "Key Notes: Pink Peony, Damascus Rose, Calabrian Bergamot, and White Musk.",
          "Longevity: Light to Moderate (Typically 3 to 5 hours, as it is a lighter Eau de Toilette).",
          "Intensity: Soft and Intimate (Delicate, airy, and very feminine). ",
        ],
        recommended: "Perfect for those who love soft, romantic floral scents that feel fresh, elegant, and easy to wear every day. Highly recommended for gentle fragrance lovers, beginners, and anyone wanting a sweet, feminine signature scent.",
      },
    },
    {
      image: "perfume6.jpg",
      name: "Baccarat Rouge 540 Eau de Parfum",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A luxurious, radiant fragrance with a blend of amber, cedar, and jasmine, offering a warm, sensual, and unforgettable scent.",
        features: [
          "Scent Type: Amber Floral / Woody",
          "Key Notes: Saffron and Jasmine (Top); Amberwood and Ambergris (Heart); Fir Resin and Cedar (Base).",
          "Longevity: Long-lasting (Typically 8+ hours, known for lingering on clothes for days).",
          "Intensity: Moderate to Strong (It has a unique airy quality that projects well without feeling heavy).",
        ],
        recommended: "Perfect for those who love a luxurious, distinctive scent — elegant, sensual, and timeless. Highly recommended for special occasions, evening wear, or anyone who wants a signature fragrance that’s both unisex and unforgettable.",
      },
    },
    {
      image: "perfume7.jpg",
      name: "Ariana Grande Cloud Eau de Parfum",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A dreamy, sweet, and cozy fragrance with notes of whipped cream, lavender, and vanilla, perfect for a soft and playful vibe.",
        features: [
          "Scent Type: Floral Fruity Gourmand",
          "Key Notes: Lavender, Pear, and Bergamot (Top); Coconut Cream, Praline, and Vanilla Orchid (Heart); Musk and Woody Notes (Base).",
          "Longevity: Moderate to Long-lasting (Typically 6 to 8 hours).",
          "Intensity: Moderate (It is sweet and creamy, but has an airy and fluffy quality that keeps it from being too heavy). ",
        ],
        recommended: "Perfect for those who love cozy, sweet, dreamy scents — soft yet modern. Highly recommended for casual wear, everyday outings, or whenever you want to feel playful and charming.",
      },
    },
    {
      image: "perfume8.jpg",
      name: "Liberty luxury flirt perfume",
      prices: {
      "30ml": 1200,
      "50ml": 2000,
      "75ml": 3200,
      "100ml": 4500,
    },
      description: {
        overview: "A sweet, playful, and slightly sensual fragrance with warm, inviting notes that linger softly.",
        features: [
          "Scent Type: Floral Fruity / Oriental Woody",
          "Key Notes:Raspberry, Amalfi Lemon, Neroli, Gardenia, African Orange Flower, Jasmine, White Honey, and Patchouli. (It has a sweet, seductive profile similar to Paco Rabanne Lady Million).",
          "Longevity: Long-lasting (High concentration, typically lasts 6-8+ hours).",
          "Intensity: Strong (Bold, sweet, and captivating).",
        ],
        recommended: "Perfect for those who love a sweet, warm, and slightly sensual fragrance — playful yet elegant. Highly recommended for nights out, romantic dates, or anyone wanting a cozy, alluring signature scent.",
      },
    },
  ];

  const addToCart = (product) => setCartItems([...cartItems, product]);
  const removeFromCart = (product) =>
    setCartItems(cartItems.filter((item) => item !== product));

  return (
    <div>
      <Navbar cartItems={cartItems} onRemoveItem={removeFromCart} />

      {/* Breadcrumb below navbar */}
      <div className="pt-[200px] max-w-[1400px] mx-auto px-4">
        <Breadcrumb paths={["Home", "Perfumes"]} />
      </div>

      {/* Products Grid */}
      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
