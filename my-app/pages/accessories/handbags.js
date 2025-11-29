// handbags.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Handbags() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "accessories/handbag1.jpg",
      name: "Butter Cream Baguette",
      price: "599",
      description: {
        overview: "A chic, 90s-inspired staple reimagined in a soft, dreamy hue. This compact shoulder bag adds an instant touch of retro polish to any outfit.",
        stylingTip: "Pair with vintage wash denim and a white tee for the ultimate off-duty model look.",
      },
    },
    {
      image: "accessories/handbag2.jpg",
      name: "Celine Clutch On Strap Tabou",
      price: "899",
      description: {
        overview: "A minimalist and elegant clutch with a sleek strap design. Compact yet functional, it’s perfect for both daytime outings and evening events.",
        
        stylingTip: "Pair it with tailored outfits or a chic dress to enhance a sophisticated and modern look.",
      },
    },
    {
      image: "accessories/handbag3.jpg",
      name: "NIUEIMEE ZHOU shoulder bag",
      price: "999",
      description: {
        overview: "A stylish and versatile shoulder bag with a modern design. Spacious enough for daily essentials, it combines practicality with contemporary elegance.",
        stylingTip: "Pair it with casual outfits like jeans and a blouse, or with dresses to add a chic, everyday vibe.",
      },
    },
    {
      image: "accessories/handbag4.jpg",
      name: "Russell & Bromley 85Clutch clutch bag",
      price: "1999",
      description: {
        overview: "A sleek and elegant clutch bag designed for sophistication. Perfectly sized to hold essentials, it adds a polished touch to evening or formal occasions.",
        stylingTip: "Pair it with cocktail dresses or tailored outfits for a refined and chic look",
      },
    },
    {
      image: "accessories/handbag5.jpg",
      name: "White square-shaped ladies' shoulder bag",
      price: "1500",
      description: {
        overview: "A sleek and modern square-shaped shoulder bag in crisp white. Compact yet functional, it’s perfect for adding a minimalist and chic touch to any outfit.",
        stylingTip: "Pair it with neutral-toned outfits or a monochrome look to keep your style clean and sophisticated.",
      },
    },
    {
      image: "accessories/handbag6.jpg",
      name: "Barabum Retro Classic hobo clutch shoulder tote handbag",
      price: "2500",
      description: {
        overview: "A versatile retro-inspired handbag that can be worn as a hobo, clutch, or tote. Stylish and practical, it’s perfect for both casual outings and semi-formal occasions.",
        stylingTip: "Pair it with a chic blazer and jeans for a casual look, or with a midi dress to add a touch of elegance.",
      },
    },
    {
      image: "accessories/handbag7.jpg",
      name: "Barabum Retro Classic Hobo Shoulder Handbag",
      price: "1000",
      description: {
        overview: "A timeless hobo shoulder bag with a retro-inspired design. Soft yet structured, it’s perfect for daily use while adding a classic, elegant touch to any outfit.",
        stylingTip: "Pair it with tailored jackets or casual dresses to elevate your everyday look with effortless sophistication.",
      },
    },
    {
      image: "accessories/handbag8.jpg",
      name: "Covernat Woman Clover Heart Ribbon Tote Bag",
      price: "2500",
      description: {
        overview: "A chic and versatile tote bag featuring a charming clover heart ribbon detail. Spacious yet stylish, it’s perfect for carrying daily essentials with a touch of playful elegance.",
        stylingTip: "Pair it with casual outfits like jeans and a blouse, or add it to a summer dress for a cute, feminine touch.",
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
        <Breadcrumb paths={["Home", "Accessories", "Handbags"]} />
      </div>

      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
