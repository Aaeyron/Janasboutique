// bracelets.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Bracelets() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "accessories/bracelet1.jpg",
      name: "Boho Gold Beaded Tassel Stack",
      price: 299,
      folder: "accessories",
      description: {
        overview: "Capture a free-spirited, bohemian vibe with this playful bracelet stack. It features multiple strands of gold-tone beads mixed with textured accents, all brought together by a charming tassel detail. The elasticated design ensures a comfortable fit for any wrist size, making it the perfect throw-on-and-go accessory for adding instant personality to your outfit.",
        
        stylingTip: "This stack screams summer festival chic. Pair it with a flowy maxi dress or a crochet top to complete the boho look. It adds a fun pop of movement and texture to any casual weekend ensemble.",
      },
    },
    {
      image: "accessories/bracelet2.jpg",
      name: " Gold Chunky Chain Link Bracelet",
      price: 349,
      folder: "accessories",
      description: {
        overview: "Make a bold statement with this industrial-chic chain bracelet. Featuring oversized, interlocking gold-tone links, this piece is all about modern power dressing. It has a substantial weight and a high-shine finish that commands attention, serving as the ultimate standalone accessory for the woman who loves a strong, confident look.",
        
        stylingTip: "Let this bracelet be the star. Wear it with a rolled-up blazer sleeve or a sleeveless turtleneck to show it off. It pairs perfectly with a chunky gold watch for a luxurious, heavy-metal aesthetic.",
      },
    },
    {
      image: "accessories/bracelet3.jpg",
      name: "Gold Greek Key Cut-Out Cuff Bracelet",
      price: 329,
      folder: "accessories",
      description: {
        overview: "Channel the timeless elegance of antiquity with this sophisticated wide cuff. The design features the classic Greek Key (meander) motif in an intricate cut-out pattern. The geometric repetition creates a look that is both historic and thoroughly modern, offering a structured, architectural feel that elevates any outfit.",
        
        stylingTip: "This cuff looks stunning when worn on the forearm or wrist with a sleeveless black dress or a white linen kaftan. Its geometric pattern adds a touch of worldly sophistication to resort wear or evening attire.",
      },
    },
    {
      image: "accessories/bracelet4.jpg",
      name: "Gold Hammered Wide Cuff Bracelet",
      price: 359,
      folder: "accessories",
      description: {
        overview: "Embrace a touch of warrior-woman strength with this striking wide cuff. The surface features a handcrafted hammered texture that catches and reflects light from every angle, creating a rich, organic shimmer. Its broad, solid silhouette makes it a true statement piece that feels bold, empowering, and incredibly chic.",
        
        stylingTip: "Balance the boldness of this cuff with soft fabrics. It looks incredible paired with a silk slip dress or a sheer blouse. Since it’s a statement piece, keep your rings minimal to avoid cluttering your look.",
      },
    },
    {
      image: "accessories/bracelet5.jpg",
      name: "Gold Textured Stackable Bangle Set",
      price: 319,
      description: {
        overview: "Versatility meets shine in this set of stackable bangles. The set includes multiple thin bands, each featuring a different finish—from smooth and polished to hammered and twisted. You can wear them all together for a satisfying jingle and maximum sparkle, or separate them for a more subtle, delicate look. It’s a timeless collection that belongs in every jewelry box.",
        
        stylingTip: "These are your everyday essentials. Stack them alongside your wristwatch to add a feminine touch to a functional accessory. They work just as well with a T-shirt and jeans as they do with a cocktail dress.",
      },
    },
    {
      image: "accessories/bracelet6.jpg",
      name: "Gold Minimalist Knot Cuff Bracelet",
      price: 289,
      description: {
        overview: "Sometimes, less is truly more. This delicate open cuff features a slender gold-tone wire that meets in the center with a simple, elegant knot. Symbolizing connection and strength, the knot adds a touch of meaning to a highly understated design. It is sleek, refined, and perfect for the minimalist who prefers whisper-quiet luxury.",
        
        stylingTip: "This piece is perfect for the office or professional settings. It slides easily under the cuff of a crisp white shirt. For a modern twist, stack two or three of them together for a slightly bolder, yet still refined, look.",
      },
    },
    {
      image: "accessories/bracelet7.jpg",
      name: "Gold Geometric Lattice Cuff Bracelet",
      price: 339,
      description: {
        overview: "Modern architecture meets fashion in this intricate lattice cuff. The wide band is crafted from an open, criss-cross wire design that creates a beautiful airy feel despite its size. It’s visually interesting and lightweight, offering the impact of a wide cuff without the heaviness of solid metal.",
        
        stylingTip: "The openwork design looks beautiful against bare skin. Wear it with a sleeveless top or a strapless dress. It adds a touch of modern, geometric glamour to any simple evening outfit.",
      },
    },
    {
      image: "accessories/bracelet8.jpg",
      name: "Gold Twisted Wire Open Cuff Bracelet",
      price: 309,
      description: {
        overview: "Classic and textural, this open cuff features a twisted cable or rope design. The texture adds depth and dimension to the gold tone, giving it a vintage, nautical, or even slightly industrial feel. The open-ended design allows for an adjustable fit, making it as comfortable as it is stylish.",
        
        stylingTip: "This texture pairs wonderfully with other classic fabrics. It looks great peeking out from a chunky knit sweater in the colder months or worn with a classic denim jacket for a casual, polished weekend vibe.",
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
        <Breadcrumb paths={["Home", "Accessories", "Bracelets"]} />
      </div>

      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
