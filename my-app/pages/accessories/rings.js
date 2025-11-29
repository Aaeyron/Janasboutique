// rings.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Rings() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "accessories/ring1.jpg",
      name: "Gold-tone bow ring with clear cubic zirconia stones.",
      price: "1000",
      description: {
        overview: "Elegant gold-tone ring featuring a delicate bow adorned with sparkling cubic zirconia stones for a charming, feminine touch.",
        
        stylingTip: "Perfect for everyday wear or special occasions; pair with matching gold-tone jewelry to complete a cohesive look.",
      },
    },
    {
      image: "accessories/ring2.jpg",
      name: "Rose gold knot ring",
      price: "1400",
      description: {
        overview: "A stylish rose gold ring featuring an intricate knot design, symbolizing elegance and timeless connection.",
        
        stylingTip: "Perfect for casual or formal wear; pair with simple bracelets or earrings for a chic, cohesive look.",
      },
    },
    {
      image: "accessories/ring3.jpg",
      name: "Tiffany Setting engagement ring",
      price: "10000",
      description: {
        overview: "Iconic engagement ring featuring a classic solitaire diamond in the signature Tiffany setting, showcasing elegance and timeless beauty.",
        
        stylingTip: "Perfect for proposals and special occasions; pair with a simple wedding band or other fine jewelry for a sophisticated look.",
      },
    },
    {
      image: "accessories/ring4.jpg",
      name: "BAMOER 925 sterling silver vine pattern finger ring ",
      price: "2100",
      description: {
        overview: "Delicate sterling silver ring featuring an intricate vine pattern, combining nature-inspired elegance with modern design.",
        
        stylingTip: "Perfect for everyday wear or layering with other rings; pair with casual or boho-chic outfits for a stylish touch.",
      },
    },
    {
      image: "accessories/ring5.jpg",
      name: "Sterling silver or white gold twisted rope ring with pavé-set diamonds",
      price: "6000",
      description: {
        overview: "Elegant twisted rope-style ring crafted in sterling silver or white gold, accented with pavé-set diamonds for a sparkling, sophisticated look.",
        
        stylingTip: "Perfect for formal occasions or stacking with other rings; pair with minimalist jewelry to let the diamonds shine.",
      },
    },
    {
      image: "accessories/ring6.jpg",
      name: "Mikimoto ring white gold with a cultured pearl and diamond pavé",
      price: "5000",
      description: {
        overview: "Luxurious white gold ring featuring a lustrous cultured pearl surrounded by sparkling diamond pavé for an elegant and timeless design.",
        
        stylingTip: "Perfect for formal events or special occasions; pair with pearl earrings or a delicate bracelet to complete a sophisticated look.",
      },
    },
    {
      image: "accessories/ring7.jpg",
      name: "white gold or platinum diamond wedding band",
      price: "4500",
      description: {
        overview: "Classic and elegant wedding band crafted in white gold or platinum, featuring sparkling diamonds for a timeless and sophisticated design.",
        
        stylingTip: "Perfect as a wedding or anniversary ring; pair with an engagement ring or stack with other bands for a refined look.",
      },
    },
    {
      image: "accessories/ring8.jpg",
      name: "Savvy Cie Jewels 18K Yellow Gold Plated Initial Ring with the letter J",
      price: "2800",
      description: {
        overview: "Stylish 18K yellow gold plated ring featuring the initial “J,” offering a personalized and elegant touch.",
       
        stylingTip: "Perfect for everyday wear or layering with other initial rings; pair with simple gold jewelry to highlight its charm.",
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
        <Breadcrumb paths={["Home", "Accessories", "Rings"]} />
      </div>

      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
