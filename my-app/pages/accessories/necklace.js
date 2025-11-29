// necklace.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Necklace() {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Only define 8 necklace products (just like Perfumes.js)
  const products = [
    {
      image: "accessories/necklace1.jpg",
      name: "Silver Layered Arrowhead Pendant Necklace",
      price: 599,
      description: {
        overview: "Add a touch of modern, geometric edge to your look with this sleek layered necklace. Crafted in a cool silver tone, it features two delicate chains: a shorter choker-style layer and a longer chain anchored by a sharp, stylish arrowhead pendant. It’s the perfect accessory for achieving that effortless, pre-styled look with just one piece.",
        
        stylingTip: "This silver piece pops beautifully against dark colors. Wear it with a black V-neck tee or a slip dress to let the arrowhead pendant draw the eye and elongate your neckline.",
      },
    },
    {
      image: "accessories/necklace2.jpg",
      name: "Mixed Metal Sculptural Open Pendant Necklace",
      price: 329,
      description: {
        overview: "A captivating blend of modern art and fashion, this necklace is for the woman who appreciates jewelry that doubles as art. It features an abstract, open-circle pendant with a hammered, textural finish that creates a unique, sculptural look. The design mimics the sophisticated contrast of mixed metals, offering an artistic edge that feels both raw and refined. It is a versatile centerpiece that adds immediate visual interest to any simple neckline.",
       
        stylingTip: "Let the sculptural shape shine by keeping your outfit simple. Wear it with a deep V-neck blouse or a fitted black bodysuit to let the pendant take center stage. It also pairs exceptionally well with other mixed-metal rings or bracelets for a curated, eclectic look.",
      },
    },
    {
      image: "accessories/necklace3.jpg",
      name: "Gold Layered Coin Medallion Necklace",
      price: 349,
      description: {
        overview: "Channel a sense of timeless, old-world glamour with this stunning layered necklace. Featuring multiple strands of delicate gold-tone chains, this piece creates an instant, perfectly curated stack. The design is anchored by vintage-inspired coin medallions that cascade down the neckline, adding a touch of bohemian luxury and historical charm. It’s the effortless way to achieve the trending layered look with a single clasp.",
        
        stylingTip: "Gold coins pop beautifully against crisp neutrals. Style this piece with an unbuttoned white linen shirt or a simple white tee to let the metallic details shine. It also looks incredibly chic worn over a black turtleneck during cooler months.",
      },
    },
    {
      image: "accessories/necklace4.jpg",
      name: "Gold Layered Bar & Disc Necklace",
      price: 319,
      description: {
        overview: "This necklace masterfully balances minimalism with modern geometry. Featuring two delicate gold-tone chains, it showcases a sleek horizontal bar on the upper layer and a polished circular disc on the lower tier. The clean lines and understated elegance make it the ultimate everyday essential that adds just the right amount of shine without being overpowering. It creates a refined, polished look that works for any occasion.",
        
        stylingTip: "This is your perfect office-to-dinner accessory. It sits perfectly inside the collar of a crisp white button-down shirt for a professional look, or pairs effortlessly with a simple black camisole for a chic, minimalist evening vibe.",
      },
    },
    {
      image: "accessories/necklace5.jpg",
      name: "Gold Layered Dual Bar Necklace",
      price: 339,
      description: {
        overview: "Sleek, linear, and effortlessly cool, this necklace is a study in modern minimalism. It features a chic double-layer design where each fine gold-tone chain is punctuated by a polished metallic bar. The geometric simplicity of the bars provides a structured contrast to the delicate chains, creating a look that is sophisticated without being fussy. It is the ideal accessory for the woman who prefers her jewelry to be understated yet impactful.",
        stylingTip: "The linear design of this necklace does wonders for elongating the neckline. It looks exceptional when framed by the lapels of a sharp blazer or worn with a deep V-neck top. It’s also subtle enough to be worn daily as a signature piece.",
      },
    },
    {
      image: "accessories/necklace6.jpg",
      name: "Gold Layered Crescent Horn Necklace",
      price: 309,
      description: {
        overview: "Tap into a bohemian state of mind with this effortlessly chic layered necklace. It features a trendy double-chain design, anchored by a striking crescent horn pendant (often known as a double horn). This motif, frequently associated with strength and protection, adds a layer of meaning to your accessory game. With its celestial vibe and warm gold tone, it’s the perfect piece for adding a touch of free-spirited glamour to your everyday style.",
        
        stylingTip: "This necklace was made for the weekend. Pair it with a flowy floral maxi dress or a crochet top to fully embrace the boho-chic aesthetic. It also adds a cool, festival-ready edge to a simple white tank top and denim shorts combo.",
      },
    },
    {
      image: "accessories/necklace7.jpg",
      name: " Gold Layered Lariat Bar Necklace",
      price: 2850,
      description: {
        overview: "Redefine elegance with this sophisticated lariat-style necklace. The design features a multi-layered chain effect that culminates in a stunning vertical drop bar, creating the classic Y silhouette. This elongation is universally flattering, drawing the eye down and creating a sense of height and grace. Its a modern classic that bridges the gap between delicate minimalism and statement jewelry.",
       
        stylingTip: "The vertical drop of a lariat necklace is designed to frame a plunging neckline. Wear this with a deep V-neck silk blouse or a wrap dress to accentuate your décolletage. It’s also the perfect accessory to layer over a sleek black turtleneck for a sophisticated winter look.",
      },
    },
    {
      image: "accessories/necklace8.jpg",
      name: "Gold Layered Disc & Vertical Bar Necklace",
      price: 339,
      description: {
        overview: "This piece is a masterclass in geometric balance. It features a dual-layer design in radiant gold tones that plays with contrasting shapes. The shorter chain holds a polished circular disc, representing softness and continuity, while the longer chain drops into a sleek vertical bar, adding length and direction. The interplay between the curve of the circle and the sharp line of the bar creates a visually satisfying, modern aesthetic that is perfect for the contemporary minimalist.",
       
        stylingTip: "The vertical bar creates a subtle lengthening effect for your torso. Pair this necklace with a crew neck sweater or a high-neck top to create a focal point that breaks up the fabric. It also looks incredibly polished peeking out from under an open blazer.",
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
        <Breadcrumb paths={["Home", "Accessories", "Necklaces"]} />
      </div>

      {/* Products Grid */}
      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} index={i} />
        ))}
      </main>
    </div>
  );
}
