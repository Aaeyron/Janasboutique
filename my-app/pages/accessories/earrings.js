// earrings.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Earrings() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "accessories/earring1.jpg",
      name: "Nadri Venus Pearl Stud CZ Earrings",
      price: "1850",
      description: {
        overview: "Elegant pearl stud earrings accented with sparkling cubic zirconia, offering a timeless and sophisticated shine.",
        
        stylingTip: "Perfect for both everyday wear and special occasions; pair with a little black dress or a blouse for a classic look.",
      },
    },
    {
      image: "accessories/earring2.jpg",
      name: "pearl and diamond drop earrings",
      price: "2500",
      description: {
        overview: "Graceful drop earrings featuring lustrous pearls and sparkling diamonds for a refined and elegant look.",
    
        stylingTip: "Perfect for formal events or evening occasions; pair with a cocktail dress or elegant gown to complete a sophisticated ensemble.",
      },
    },
    {
      image: "accessories/earring3.jpg",
      name: "A pair of golden South Sea pearl and diamond dangle earrings in yellow gold. ",
      price: "7800",
      description: {
        overview: "Luxurious yellow gold dangle earrings featuring lustrous South Sea pearls accented with sparkling diamonds for an elegant, timeless look.",
        
        stylingTip: "Ideal for weddings, gala events, or special occasions; pair with formal gowns or sophisticated dresses to highlight their elegance.",
      },
    },
    {
      image: "accessories/earring4.jpg",
      name: "Jennifer Behr Petronella pearl flower earrings",
      price: "4000",
      description: {
        overview: "Delicate floral-inspired earrings adorned with pearls, combining elegance and playful sophistication in one statement piece.",
        
        stylingTip: "Perfect for special occasions or dressing up a casual outfit; pair with a flowy dress or chic blouse for a feminine touch.",
      },
    },
    {
      image: "accessories/earring5.jpg",
      name: "A pair of pearl hoop earrings",
      price: "1950",
      description: {
        overview: "Classic hoop earrings embellished with lustrous pearls, offering a modern twist on a timeless design.",
        
        stylingTip: "Perfect for both casual and formal outfits; pair with a simple blouse or dress to add a touch of elegance.",
      },
    },
    {
      image: "accessories/earring6.jpg",
      name: "Vera Vera Wang Thick Gold Tone Hoop Earrings. ",
      price: "2750",
      description: {
        overview: "Bold, thick hoop earrings in gold tone, combining contemporary style with timeless appeal.",
        
        stylingTip: "Perfect for making a statement with casual or evening outfits; pair with minimalist attire to let the hoops shine.",
      },
    },
    {
      image: "accessories/earring7.jpg",
      name: "Hollow 14K or 18K yellow gold tube hoop earrings",
      price: "5000",
      description: {
        overview: "Sleek and lightweight tube hoop earrings crafted in 14K or 18K yellow gold, offering a modern, elegant look.",
        
        stylingTip: "Perfect for everyday wear or layering with other earrings; pair with casual or business-casual outfits for understated sophistication.",
      },
    },
    {
      image: "accessories/earring8.jpg",
      name: "Gold hoop earrings with a hinged closure. ",
      price: "3200",
      description: {
        overview: "Classic gold hoop earrings featuring a secure hinged closure for comfort and ease, perfect for timeless everyday wear.",
        
        stylingTip: "Ideal for both casual and dressy outfits; pair with a blouse or dress to add a polished, elegant touch.",
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
        <Breadcrumb paths={["Home", "Accessories", "Earrings"]} />
      </div>

      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
