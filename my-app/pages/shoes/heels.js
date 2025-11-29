// heels.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Heels() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "shoes/heel1.jpg",
      name: "Blade Heel Pointed-Toe Pumps",
      price: 2499,
      folder: "shoes",
      description: {
        overview: "A true icon of modern footwear design, these Casadei pumps are the epitome of sharp, confident elegance. The timeless pointed-toe silhouette is dramatically updated with the signature Blade heel—a razor-thin, lacquered stiletto that creates a powerful and instantly recognizable profile. Crafted in a pristine white, these heels are a masterclass in sculptural simplicity, designed for the woman who commands attention with every step.",
        features: [
          "Materials: The upper is crafted from a premium, smooth Faux Leather. The signature heel has a durable steel core with a high-gloss lacquered finish. The sole is made from Thermoplastic Rubber (TPR).",
          "Fit: A classic slip-on pump design with a sharp pointed toe and a dramatic high stiletto heel (approx. 4 inches / 10cm) for maximum leg-lengthening effect.",
          "Occasion: The ultimate power pump. Perfect for formal events, chic corporate settings, cocktail parties, modern bridal looks, or any occasion that calls for a sophisticated, high-fashion statement.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth. Be mindful of the delicate blade heel; avoid walking on uneven or grated surfaces.",
        ],
        stylingTip: "Let these architectural heels be the star of the show. Pair them with a tailored pantsuit in a bold color for a striking, high-impact look, or with a minimalist satin slip dress for an evening of sophisticated elegance. They also look incredible with sharp, ankle-baring cropped trousers.",
      },
    },
    {
      image: "shoes/heel2.jpg",
      name: "Minimalist Metallic Stiletto Sandals",
      price: 2190,
      folder: "shoes",
      description: {
        overview: "The epitome of barely-there elegance, these stunning Aquazzura-inspired sandals are a timeless addition to any evening wardrobe. Crafted with gossamer-thin straps in a radiant gold metallic finish, they are designed to gracefully encase the foot and elongate the leg. The classic stiletto heel and minimalist design create a look of pure sophistication, making them the perfect, versatile choice for any and every special occasion.",
        features: [
          "Materials: The upper straps are crafted from a high-quality Metallic Faux Leather. The insole is lightly cushioned for comfort, and the outsole is made from durable Thermoplastic Rubber (TPR).",
          "Fit: Features delicate crisscross toe straps and a fine, adjustable ankle strap with a metal buckle for a secure fit. The classic stiletto heel (approx. 4 inches / 10cm) offers significant height and an elegant posture.",
          "Occasion: The quintessential special occasion heel. Perfect for weddings (as a guest or bridesmaid), cocktail parties, formal events, black-tie galas, and romantic date nights.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To preserve the metallic finish, gently wipe clean with a soft, dry cloth. Avoid abrasive cleaners or rough surfaces.",
        ],
        stylingTip: "These versatile sandals complement almost any evening attire. Pair them with a sleek, solid-colored cocktail dress to let the gold accents shine, or with a floor-length evening gown with a high slit to beautifully showcase the delicate straps and your leg line.",
      },
    },
    {
      image: "shoes/heel3.jpg",
      name: "Classic Patent Leather Stiletto Pumps",
      price: 2250,
      folder: "shoes",
      description: {
        overview: "A true wardrobe workhorse, these quintessential pumps are the definition of timeless elegance. Rendered in a versatile nude patent leather, this pair features a classic pointed toe and a sleek stiletto heel that creates a universally flattering, leg-lengthening effect. With their polished high-shine finish, these heels are the perfect go-to for any occasion, seamlessly transitioning from the boardroom to an evening out with sophisticated ease. Every woman needs a pair of these in her closet.",
        features: [
          "Materials: The upper is crafted from a high-quality, high-shine Patent Faux Leather. Features a lightly cushioned insole for added comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on pump silhouette with a sharp pointed toe and a graceful stiletto heel (approx. 4 inches / 10cm) designed for a powerful and elegant posture.",
          "Occasion: The ultimate versatile heel. Perfect for professional office settings, cocktail parties, weddings, formal events, or simply elevating your favorite pair of jeans for a chic, smart-casual look.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To maintain the brilliant shine, wipe clean with a soft, damp cloth and buff gently with a dry cloth. Store in a dust bag to prevent scuffs.",
        ],
        stylingTip: "The beauty of a nude patent pump lies in its versatility. For a powerful office look, pair them with a sharp pencil skirt or tailored trousers. For an evening out, they are the perfect companion to a classic little black dress. They can also instantly dress up dark-wash skinny jeans and a silk blouse.",
      },
    },
    {
      image: "shoes/heel4.jpg",
      name: "Classic Satin Pointed-Toe Pumps",
      price: 2350,
      folder: "shoes",
      description: {
        overview: "The epitome of grace and bridal elegance, these stunning Gianvito Rossi-inspired pumps are a masterclass in classic design. Crafted from lustrous white satin, the shoe's beauty lies in its flawless, clean lines, a perfectly sharp pointed toe, and a slender stiletto heel. This is a shoe designed for life's most special moments, offering a look of pure, unadulterated sophistication and timeless romance.",
        features: [
          "Materials: The upper is crafted from a luxurious, high-quality Satin fabric. It features a lightly cushioned Faux Leather insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A timeless slip-on pump silhouette. The elegant pointed toe and classic stiletto heel (approx. 4 inches / 10cm) work together to create a beautiful, leg-lengthening line.",
          "Occasion: The ultimate special occasion shoe. Exquisitely suited for brides, bridesmaids, black-tie events, formal galas, or any event that calls for a touch of pristine, classic elegance.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Satin is a delicate fabric. Protect from moisture and rough surfaces. For any stains, professional cleaning is highly recommended to preserve the material's integrity and sheen.",
        ],
        stylingTip: "These are the perfect complement to a wedding gown of any style, from classic ballgowns to modern, minimalist designs. Beyond bridal, they look breathtaking with a floor-length evening gown in a jewel tone or a sophisticated satin cocktail dress for a seamless, elegant look.",
      },
    },
    {
      image: "shoes/heel5.jpg",
      name: "Square Toe Strappy Metallic Sandals",
      price: 2290,
      folder: "shoes",
      description: {
        overview: "A contemporary showstopper designed for the modern fashionista. These glamorous sandals perfectly capture the moment with a sharp, squared-off toe and a constellation of delicate, crisscrossing straps. Rendered in a brilliant metallic gold, they offer a fresh, architectural take on the classic stiletto sandal. They are the ultimate statement piece for a night out, designed to catch the light—and every eye in the room.",
        features: [
          "Materials: The upper straps are crafted from a high-shine Metallic Faux Leather. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: This design features multiple delicate straps that crisscross over the foot, culminating in a secure and adjustable ankle strap with a slim metal buckle. The modern square toe and elegant stiletto heel (approx. 4 inches / 10cm) create a striking silhouette.",
          "Occasion: The perfect heel for making a glamorous entrance. Ideal for cocktail parties, celebratory dinners, nights out on the town, bachelorette parties, or as a fashion-forward choice for a formal event.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To maintain the metallic finish, gently wipe with a soft, dry cloth. Avoid contact with abrasive surfaces to prevent scratching.",
        ],
        stylingTip: "These statement heels demand to be seen. Pair them with a chic little black dress (LBD) to let the gold details pop, or go for a bold, modern look with a vibrant-colored mini dress. They also look exceptionally stunning with a sleek, wide-leg jumpsuit for a sophisticated and powerful evening ensemble.",
      },
    },
    {
      image: "shoes/heel6.jpg",
      name: "Pointed-Toe Suede Pumps",
      price: 2390,
      folder: "shoes",
      description: {
        overview: "A stunning and sophisticated alternative to basic black, these Schutz-inspired pumps are a masterclass in classic design. The timeless pointed-toe silhouette is rendered in a rich, deep navy blue suede, lending it a touch of luxurious texture and depth. Set on a slender stiletto heel, these pumps are the epitome of elegance, offering endless versatility and a powerful, polished finish to any outfit, day or night.",
        features: [
          "Materials: The upper is crafted from a high-quality, plush Faux Suede. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on pump silhouette with a sharp pointed toe and an elegant stiletto heel (approx. 4 inches / 10cm) that provides a graceful, leg-lengthening lift.",
          "Occasion: An incredibly versatile staple. Perfect for elevating your workwear, adding a sophisticated touch to cocktail dresses, or pairing with denim for a chic smart-casual ensemble.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. To clean, use a soft-bristled brush to gently lift away any dirt. For tougher spots, a damp cloth can be used sparingly.",
        ],
        stylingTip: "The rich navy hue pairs beautifully with a range of colors. For a crisp, classic look, style them with white tailored trousers or a cream-colored dress. They also create a chic, monochromatic look when paired with different shades of blue, or can add a sophisticated pop of color to an all-black outfit.",
      },
    },
    {
      image: "shoes/heel7.jpg",
      name: "Classic Suede Pointed-Toe Pumps",
      price: 2290,
      folder: "shoes",
      description: {
        overview: "The absolute epitome of feminine elegance, these Gianvito Rossi-inspired pumps are a soft and sophisticated wardrobe essential. The timeless pointed-toe silhouette is rendered in a delicate, dusty pink suede that feels both romantic and incredibly chic. Set on a graceful stiletto heel, this shoe is a masterclass in understated beauty, perfect for adding a touch of gentle color and luxurious texture to any look.",
        features: [
          "Materials: The upper is crafted from a high-quality, soft-to-the-touch Faux Suede. It features a lightly cushioned Faux Leather insole and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on pump silhouette with an elegant pointed toe and a slender stiletto heel (approx. 3.5 inches / 9cm) for a comfortable yet flattering lift.",
          "Occasion: Exquisitely versatile. Perfect for daytime events like weddings, garden parties, and brunches. They also provide a soft, feminine touch to workwear or an elegant option for a dinner date.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Protect the delicate faux suede from moisture. Use a soft-bristled brush to gently remove any surface dirt.",
        ],
        stylingTip: "Embrace a soft, romantic aesthetic by pairing these pumps with a white lace or floral midi dress. For a more contemporary and chic look, contrast their softness by styling them with light-wash, straight-leg jeans and a crisp white blouse or a simple grey cashmere sweater.",
      },
    },
    {
      image: "shoes/heel8.jpg",
      name: "Classic Suede Pointed-Toe Pumps",
      price: 2290,
      folder: "shoes",
      description: {
        overview: "A perfect example of understated luxury, these Gianvito Rossi-inspired pumps are a foundational piece for any sophisticated wardrobe. The flawless pointed-toe silhouette is crafted from a rich, taupe-brown suede, offering a warm and versatile alternative to traditional neutrals. Set atop a slender stiletto heel, these pumps exude an effortless and impeccable elegance, making them a go-to choice for countless occasions.",
        features: [
          "Materials: The upper is crafted from a high-quality, velvety Faux Suede. It includes a lightly cushioned Faux Leather insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A timeless slip-on pump design with a sharp pointed toe and an elegant stiletto heel (approx. 4 inches / 10cm), creating a classic, leg-lengthening silhouette.",
          "Occasion: The epitome of a day-to-night shoe. Incredibly chic for the office, yet sophisticated enough for evening cocktails, dinner dates, and formal events. A true wardrobe workhorse.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To maintain the texture, keep the faux suede dry. Use a soft-bristled brush to gently remove any dust or dirt.",
        ],
        stylingTip: "This sophisticated neutral tone pairs beautifully with an array of palettes. Create a chic, tonal look by styling them with cream or beige tailored trousers and a silk blouse. They also serve as a perfect grounding element for autumnal colors, looking stunning with an olive green or burgundy midi dress.",
      },
    },
    {
      image: "shoes/heel9.jpg",
      name: "Strappy Toe Loop Flared Heels",
      price: 2150,
      folder: "shoes",
      description: {
        overview: "Embrace cutting-edge, architectural style with these stunning Meshki-inspired heels. The design is a masterclass in modern details, from the sharp square toe to the artful arrangement of delicate straps, including a secure toe loop. The true statement-maker is the sculptural flared heel, which provides both a confident, fashion-forward look and surprising stability. Rendered in a rich chocolate brown, these sandals are the perfect accessory for the woman who loves a bold, contemporary edge.",
        features: [
          "Materials: The upper straps and insole are crafted from a smooth, high-quality Faux Leather. The flared heel is made from a durable, covered material, and the outsole is Thermoplastic Rubber (TPR).",
          "Fit: Features a secure fit with an intricate strappy design, a toe loop, and an adjustable wrap-around ankle strap with a slim metal buckle. The mid-to-high flared heel (approx. 3.75 inches / 9.5cm) offers a unique silhouette and a more stable base than a traditional stiletto.",
          "Occasion: The ultimate statement heel for a night out. Perfect for cocktail parties, stylish dinners, date nights, or any event where you want your footwear to be the center of attention.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth. Be mindful of the unique heel shape when storing to prevent scuffs.",
        ],
        stylingTip: "These architectural heels are designed to be shown off. Pair them with a slinky satin slip dress with a high slit to showcase the intricate strap details. For a chic, edgy look, style them with cropped leather trousers or dark-wash, straight-leg jeans to highlight the dramatic flared heel.",
      },
    },
    {
      image: "shoes/heel10.jpg",
      name: "Minimalist Satin Slingback Heels",
      price: 2350,
      folder: "shoes",
      description: {
        overview: "The epitome of modern, understated elegance, these slingback heels are a masterclass in '90s-inspired minimalism. Crafted from lustrous cream satin, the design is defined by its clean lines, a sharp pointed toe, and a delicate, comfortable kitten heel. These shoes are the perfect embodiment of quiet luxury, offering a chic and sophisticated option for the woman who appreciates timeless design and effortless style.",
        features: [
          "Materials: The upper is crafted from a luxurious, high-quality Satin fabric. The shoe features a lightly cushioned Faux Leather insole and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: An elegant slingback design with a secure, elasticated strap for an easy slip-on fit. The sharp pointed toe and graceful kitten heel (approx. 2 inches / 5cm) provide a comfortable and chic elevation.",
          "Occasion: Incredibly versatile. Perfect for a modern bridal look, a sophisticated wedding guest outfit, chic office wear, or any daytime or evening event that calls for refined elegance.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Satin is a delicate material. Protect from moisture and rough surfaces. Professional spot cleaning is recommended to maintain the pristine finish.",
        ],
        stylingTip: "Embrace a minimalist aesthetic by pairing these heels with tailored, wide-leg trousers and a simple silk camisole. For an event, they are the perfect companion to a sleek satin slip dress or a structured midi dress, creating a look that is both modern and timelessly elegant.",
      },
    },
    {
      image: "shoes/heel11.jpg",
      name: "Blade Heel Suede Pumps",
      price: 2599,
      folder: "shoes",
      description: {
        overview: "A truly electrifying statement piece, these pumps fuse the architectural power of the iconic Casadei Blade heel with the luxurious texture of vibrant blue suede. This is a shoe that exudes confidence and high-fashion sensibility. The razor-thin, metallic stiletto and the intense, saturated color create an unforgettable silhouette, designed for the woman who isn't afraid to stand out and showcase her bold personal style.",
        features: [
          "Materials: The upper is crafted from a high-quality, plush Faux Suede. The signature Blade heel has a durable steel core with a polished chrome finish. The sole is made from Thermoplastic Rubber (TPR).",
          "Fit: A classic slip-on pump silhouette with a sharp pointed toe. The dramatic Blade stiletto heel (approx. 4 inches / 10cm) creates a powerful and leg-lengthening effect.",
          "Occasion: The ultimate fashion statement heel. Perfect for cocktail parties, nights out on the town, creative events, or any occasion where you want your footwear to be the main event.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any dust or dirt. Be mindful of the delicate blade heel on uneven surfaces.",
        ],
        stylingTip: "Let the vibrant blue hue take center stage by pairing these pumps with a neutral-toned outfit. They look exceptionally striking against a sleek little black dress or a modern white tuxedo dress. For a bold, fashion-forward approach, style them with color-blocked pieces or let them be the single pop of color with sharp, dark-wash denim and a simple silk camisole.",
      },
    },
    {
      image: "shoes/heel12.jpg",
      name: "Pointed-Toe Suede Pumps",
      price: 2450,
      folder: "shoes",
      description: {
        overview: "An iconic and unforgettable statement piece for any wardrobe, these classic pumps are rendered in a fiery, saturated red suede. The timeless pointed-toe and slender stiletto silhouette provide the perfect canvas for the electrifying color, creating a shoe that is both classically elegant and unapologetically bold. Designed to empower and turn heads, these heels are the ultimate confidence boost in footwear form.",
        features: [
          "Materials: The upper is crafted from a rich, high-quality Faux Suede. It features a lightly cushioned Faux Leather insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on pump silhouette with a sharp pointed toe and a graceful stiletto heel (approx. 4 inches / 10cm) designed to elongate the leg and create a powerful stance.",
          "Occasion: The perfect shoe for making a statement. Ideal for date nights, cocktail parties, holiday events, or anytime you want to add a dramatic pop of color to a chic and sophisticated look.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To preserve the vibrant color and texture, keep the faux suede dry. Use a soft-bristled brush to gently remove any surface dust or dirt.",
        ],
        stylingTip: "Let these red pumps be the star of your outfit by pairing them with classic neutrals. They are the perfect, powerful accessory for a little black dress (LBD) or a sleek, all-white ensemble. For a chic, off-duty look, style them with dark-wash skinny jeans and a simple black blazer to instantly elevate your entire look.",
      },
    },
    {
      image: "shoes/heel13.jpg",
      name: "Iconic Red Sole Pointed-Toe Pumps",
      price: 45000,
      folder: "shoes",
      description: {
        overview: "More than just a shoe, this is the pinnacle of luxury footwear. Instantly recognizable by its flash of a red lacquered sole, this Christian Louboutin pump is a global symbol of glamour, power, and unapologetic femininity. Crafted in Italy from the finest leather, the flawless silhouette features a dramatic low-cut vamp, a sharp pointed toe, and a soaring stiletto heel. To own a pair is to own a piece of fashion history—an investment in timeless style and ultimate confidence.",
        features: [
          "Materials: The upper is expertly crafted from supple, premium Calfskin Leather. The insole is lined with soft leather for comfort, and the shoe is finished with the legendary, glossy Red Lacquered Leather Sole.",
          "Fit: A classic slip-on pump design renowned for its dramatic arch and low-cut vamp. The soaring stiletto heel (approx. 4.7 inches / 120mm) creates a powerful, leg-lengthening silhouette. Fit Tip: This style is celebrated for its dramatic pitch and may run small. We recommend considering a half size up.",
          "Occasion: Reserved for the most special of occasions. Perfect for black-tie events, red carpet moments, exclusive galas, weddings, and milestone celebrations where making an unforgettable entrance is key.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: As a luxury item, professional shoe care is highly recommended. Protect the iconic red lacquered sole from excessive abrasion and moisture. Store in the provided dust bag away from direct sunlight.",
        ],
        stylingTip: "These iconic pumps require an equally elegant canvas. They are the ultimate accessory for a timeless little black dress (LBD), creating a look of unparalleled sophistication. For a powerful, high-fashion statement, pair them with a sharply tailored women's tuxedo suit. A floor-length gown with a thigh-high slit is also a perfect choice to offer a tantalizing flash of the signature red sole.",
      },
    },
    {
      image: "shoes/heel14.jpg",
      name: "Brushed Leather Slingback Pumps",
      price: 68000,
      folder: "shoes",
      description: {
        overview: "An undisputed icon of modern luxury and intellectual chic, this slingback pump is a signature design from Prada. The shoe masterfully blends '90s minimalism with a futuristic edge, featuring a sharply pointed toe and a unique, sculpted kitten heel. Crafted from the house's signature brushed leather and crowned with the iconic enameled metal triangle logo, this pump is more than just footwear—it's a cult-favorite statement piece for the discerning, fashion-forward individual.",
        features: [
          "Materials: The upper is expertly crafted from Prada's signature Brushed Leather. The shoe is adorned with the iconic Enameled Metal Triangle Logo. The sole is leather with a rubber half-sole for durability and grip.",
          "Fit: An elegant slingback design featuring a comfortable, elasticated strap for a secure fit. The sharp pointed toe is complemented by a uniquely sculpted, lacquered kitten heel (approx. 2.2 inches / 55mm) that provides a chic, comfortable lift.",
          "Occasion: The epitome of versatile luxury. Perfect for a fashion-forward office setting, chic daytime events, art gallery openings, or sophisticated dinners. An ideal choice when you want to look polished and directional.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: As a luxury leather good, professional care is recommended. Protect from moisture and store in the provided dust bag. For light cleaning, wipe gently with a soft, dry cloth.",
        ],
        stylingTip: "Embrace the shoe's modern, minimalist aesthetic. Pair them with tailored, straight-leg trousers and an oversized blazer for a powerful, contemporary work look. For a chic, '90s-inspired ensemble, style them with a sharp A-line mini skirt and a fine-knit sweater. These pumps are designed to be the sophisticated focal point of a clean, well-curated outfit.",
      },
    },
    {
      image: "shoes/heel15.jpg",
      name: "Pointed-Toe Ankle Strap D'Orsay Pumps",
      price: 2490,
      folder: "shoes",
      description: {
        overview: "A sultry and sophisticated take on the classic pump, this design is the epitome of timeless allure. The shoe's beauty lies in its elegant D'Orsay silhouette, which gracefully cuts away at the sides to reveal the arch of the foot. A sharp pointed toe and a delicate ankle strap work in harmony to create a look that is both secure and incredibly chic. Rendered in classic black, these Manolo Blahnik-inspired heels are a forever staple for any evening wardrobe.",
        features: [
          "Materials: The upper is crafted from a high-quality, plush Faux Suede. It features a lightly cushioned Faux Leather insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: Features a classic D'Orsay silhouette with a pointed toe and a delicate, adjustable ankle strap with a slim metal buckle for a secure fit. The classic stiletto heel (approx. 4 inches / 10cm) provides an elegant, leg-lengthening lift.",
          "Occasion: The perfect go-to for any dressy event. Ideal for formal occasions, weddings, cocktail parties, black-tie galas, and romantic dinners.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. To clean, use a soft-bristled brush to gently lift away any dirt or dust.",
        ],
        stylingTip: "The elegant cut-out and ankle strap are details worth showcasing. Pair them with a midi dress that features a high slit to beautifully highlight the shoe's silhouette. For a more classic look, they are the perfect companion to a timeless cocktail dress or a sleek, tailored jumpsuit.",
      },
    },
    {
      image: "shoes/heel16.jpg",
      name: "Minimalist Ankle Strap Heels",
      price: 2190,
      folder: "shoes",
      description: {
        overview: "Arguably the most essential silhouette in any modern wardrobe, this is the iconic naked sandal. Inspired by the legendary Stuart Weitzman Nudist, its power lies in its radical simplicity: a single, delicate strap across the toes and another fine strap at the ankle. This barely-there design does one thing perfectly—it elongates the leg and disappears, allowing your outfit to take center stage. Crafted in timeless black, this is the ultimate go-to heel, a red-carpet staple that guarantees a chic, polished, and effortlessly sexy finish to any look.",
        features: [
          "Materials: The straps are crafted from a smooth, high-quality Faux Leather. The insole is lightly cushioned for comfort, and the outsole is made from durable Thermoplastic Rubber (TPR).",
          "Fit: A true minimalist design featuring a single, slender toe strap and a delicate, adjustable ankle strap with a slim metal buckle. The classic stiletto heel (approx. 4 inches / 10cm) provides a stunning, leg-lengthening lift.",
          "Occasion: The ultimate wardrobe chameleon. This is the perfect shoe for literally any dressy occasion: weddings, cocktail parties, black-tie events, date nights, proms, and formal dinners.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth to keep them looking pristine.",
        ],
        stylingTip: "This is the heel you wear when you want your dress to do all the talking. It is the perfect companion to a bold, statement-making evening gown or a vibrant cocktail dress. For a look of timeless sophistication, pair them with a classic little black dress or a sleek, tailored jumpsuit. There is truly no evening outfit this shoe won't complement perfectly.",
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
        <Breadcrumb paths={["Home", "Shoes", "Heels"]} />
      </div>
  
      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
  }
