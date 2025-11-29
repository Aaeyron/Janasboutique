// bottoms.js
import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import { CartContext } from "./_app"; // import CartContext

export default function Bottoms() {
  const { cartItems, setCartItems } = useContext(CartContext); // use global cart

  const products = [
    {
      image: "bottom1.jpg",
      name: "Pinstripe flared trousers",
      price: 1000,
      description: {
        overview: "A stunning example of impeccable Italian tailoring, these trousers from Pt Torino bring a touch of '70s-inspired glamour to the modern wardrobe. Crafted from a luxurious wool blend, they feature a classic pinstripe pattern that vertically elongates the frame. The silhouette is designed to flatter, with a high-waisted, slim fit through the thigh that kicks out into a dramatic, floor-sweeping flare. They are a powerful and sophisticated statement piece for the discerning fashion lover.",
        features: [
          "Material: A high-quality, comfortable Virgin Wool blend with a hint of Elastane for the perfect amount of stretch and a beautiful drape.",
          "Fit: A true high-rise fit that sits at the natural waist. It's cut slim through the hip and thigh, with a dramatic flared leg from the knee down. Features a classic pressed crease for a sharp, tailored finish.",
          "Occasion: Perfect for making a statement. Ideal for a sophisticated office look, a chic evening out, or any event where you want to showcase a polished, high-fashion sensibility.",
          "Sizes: Available in standard Italian designer sizing (e.g., IT 38 - 48).",
          "Care: To maintain the integrity of the fine wool and the tailored construction, dry clean only is required.",
        ],
        stylingTip: "Embrace the retro-chic vibe by pairing these trousers with a slim-fitting, tucked-in turtleneck and platform heels or heeled boots. The heels are essential to maximize the dramatic, leg-lengthening effect of the flare and ensure the hem doesn't drag.",
      },
    },
    {
      image: "bottom2.jpg",
      name: "Star Print Baggy Cargo Pants",
      price: 999,
      description: {
        overview: "Dive headfirst into the Y2K revival with these statement-making star print cargo pants. Designed for ultimate comfort and standout style, these pants feature an ultra-baggy, relaxed fit and a playful all-over star pattern. Multiple functional cargo pockets add a touch of utilitarian cool, while the low-rise waist captures the authentic spirit of early 2000s fashion. They are the perfect bottom piece for anyone looking to add a bold, nostalgic, and edgy vibe to their streetwear collection.",
        features: [
          "Material: A durable and lightweight Polyester/Cotton blend, designed to hold its shape while being comfortable for all-day wear.",
          "Fit: A true low-rise, baggy fit that is loose and relaxed through the hip and leg. Often includes adjustable drawstrings at the waist and ankles for a customizable look.",
          "Occasion: Perfect for creating a bold, casual streetwear look. Ideal for concerts, festivals, skate parks, or just hanging out with friends.",
          "Sizes: Typically available in a wide range of standard sizes (e.g., S - XXL).",
          "Care: Easy to care for. Machine wash cold with like colors and tumble dry on low.",
        ],
        stylingTip: "Go all-in on the Y2K aesthetic by balancing the baggy silhouette with a tight-fitting cropped baby tee or a tube top. Complete the look with a pair of chunky platform sneakers, a mini shoulder bag, and a silver chain belt for the ultimate cool-girl vibe.",
      },
    },
    {
      image: "bottom3.jpg",
      name: "Leopard Patchwork Wide Leg Pants",
      price: 1700,
      description: {
        overview: "Unleash your wild side with these bold and stylish patchwork pants from ZANZEA. Designed for both comfort and maximum impact, these trousers feature a striking color-block design that combines a solid black upper with a fierce leopard print lower leg. The high-waisted, flowy wide-leg silhouette creates a dramatic, leg-lengthening effect while ensuring all-day comfort. They are the perfect statement piece for anyone looking to add a touch of effortless, on-trend drama to their casual wardrobe.",
        features: [
          "Material: A lightweight, breezy, and non-stretch fabric, typically 100% Polyester, that drapes beautifully and is perfect for warm weather.",
          "Fit: Features a flattering high-rise elastic waist for a comfortable pull-on fit. The silhouette is a relaxed, wide-leg palazzo style that is loose and flowy from the hip down.",
          "Occasion: A perfect choice for a casual, statement-making look. Ideal for vacations, weekend outings, beach trips, or a relaxed day out.",
          "Sizes: Typically available in a wide, inclusive size range (e.g., S - 5XL).",
          "Care: Easy to care for. Machine wash cold on a gentle cycle. Hang to dry is recommended.",
        ],
        stylingTip: "Let these pants be the star of the show by pairing them with a simple, fitted black or white top, such as a bodysuit or a cropped tank. Tucking in your top will accentuate the flattering high waist. Complete the look with flat sandals for a relaxed vibe, or heeled mules for a touch of added polish.",
      },
    },
    {
      image: "bottom4.jpg",
      name: "Checked Flared Trousers",
      price: 899,
      description: {
        overview: "Channel a '70s state of mind with these effortlessly cool checked trousers from Mango. Featuring a bold, retro-inspired plaid pattern in a unique brown and blue colorway, these pants are designed to make a statement. The silhouette is both flattering and comfortable, with a sleek fit through the thigh that kicks out into a perfect modern flare. A versatile and on-trend piece, these trousers can easily be dressed up for the office or down for a stylish weekend look.",
        features: [
          "Material: A comfortable and structured fabric, typically a Polyester/Viscose blend with Elastane, offering a slight stretch for a perfect fit.",
          "Fit: Features a mid-rise or high-rise waist with a slim fit through the hip and thigh, leading to a classic flared leg from the knee down. Standard tailored details include a zip fly and belt loops.",
          "Occasion: An incredibly versatile piece. Perfect for a chic and creative office look, a stylish weekend brunch, or dressed up for a night out.",
          "Sizes: Available in a wide range of standard sizes (e.g., US 2 - 14).",
          "Care: Machine wash cold on a gentle cycle. Hang to dry or tumble dry low; iron on a low setting if needed.",
        ],
        stylingTip: "Let the bold check pattern take center stage by pairing these trousers with a simple, solid-colored top. A tucked-in cream or brown fine-knit sweater creates a cohesive, polished look. Complete the '70s-inspired silhouette with a pair of heeled ankle boots or chunky platform loafers.",
      },
    },
    {
      image: "bottom5.jpg",
      name: "Cotton Linen Wide Leg Palazzo Pants",
      price: 780,
      description: {
        overview: "Discover the perfect blend of comfort and style with these essential palazzo pants. Crafted from a soft and breathable cotton-linen blend, they are designed to keep you cool and chic in warm weather. The effortless silhouette features a comfortable high-rise elastic waist and a dramatic, flowy wide leg that drapes beautifully with every step. Whether you're on a tropical vacation or enjoying a relaxed weekend at home, these pants offer a touch of laid-back, bohemian elegance to your everyday wardrobe.",
        features: [
          "Material: A lightweight, breathable, and skin-friendly Cotton and Linen blend, perfect for all-day comfort in warmer climates.",
          "Fit: Features a comfortable high-rise elastic waistband for an easy pull-on fit. The silhouette is a relaxed, loose-fitting palazzo style with a full-length wide leg.",
          "Occasion: The ultimate versatile piece for casual and relaxed settings. Perfect for vacations, as a beach cover-up, for weekend errands, or for stylish lounging at home.",
          "Sizes: Typically available in a wide range of standard sizes (e.g., S - XXL).",
          "Care: Machine wash cold on a gentle cycle. Hang to dry to minimize wrinkles and potential shrinkage. Iron on a low setting if needed.",
        ],
        stylingTip: "Keep the look relaxed and balanced by pairing these flowy pants with a simple, fitted top, such as a white tank or a basic bodysuit, tucked in to define the waist. Complete this effortlessly chic ensemble with flat leather sandals and a woven straw tote bag for the perfect vacation-ready look.",
      },
    },
    {
      image: "bottom6.jpg",
      name: "Bennet draped wide-leg pants",
      price: 1500,
      description: {
        overview: "A stunning display of architectural elegance, the Bennet pants from Jonathan Simkhai masterfully blur the line between trousers and a gown. Crafted from a fluid, luxurious crepe that drapes beautifully, this piece features a dramatic, asymmetric wrap panel that cascades down the front, creating a sculptural, skirt-like effect. The high-waisted, wide-leg silhouette is both powerful and graceful, moving with an ethereal quality. It's a true show-stopping piece for the modern woman who appreciates artful, sophisticated design.",
        features: [
          "Material: A fluid, mid-weight crepe, typically a high-quality Triacetate/Polyester blend, chosen for its luxurious feel and beautiful, wrinkle-resistant drape.",
          "Fit: Features a flattering high-rise waist that is fitted at the hip before falling into a fluid, full-length wide leg. The defining feature is the asymmetric draped overlay at the front.",
          "Occasion: An exceptional choice for formal events. Perfect for cocktail parties, weddings (as a guest or for a modern bridal look), galas, or any upscale evening affair.",
          "Sizes: Available in standard US designer sizing (e.g., US 0 - 12).",
          "Care: To preserve the integrity of the fabric and the expert tailoring, dry clean only is required.",
        ],
        stylingTip: "Let the architectural drape of these pants take center stage by pairing them with a simple, tucked-in silk camisole or a sleek bodysuit. Elongate the silhouette with a pair of high, strappy heeled sandals. Keep jewelry minimal and elegant to complete this sophisticated, high-impact look.",
      },
    },
    {
      image: "bottom7.jpg",
      name: "Striped Wide-Leg Trousers",
      price: "₱700",
      description: {
        overview: "A beautiful expression of artful elegance, these wide-leg trousers from Roksanda are a study in color and fluid movement. Crafted from lustrous, lightweight silk, they feature bold, vertical stripes in a refreshing mint green and crisp white palette. The silhouette is pure drama, with a flattering high waist that flows into a voluminous, floor-sweeping wide leg, creating an incredibly graceful and elongated look. These are not just trousers; they are a piece of wearable art for the woman who isn't afraid to make a chic, colorful statement.",
        features: [
          "Material: Luxuriously crafted from 100% Silk (often a silk crepe de chine), offering a fluid drape, a beautiful luster, and a lightweight feel.",
          "Fit:  Designed with a high-rise waist that is fitted through the hip, flowing into a dramatic, full-length palazzo-style wide leg. Features tailored details like a concealed front fastening.",
          "Occasion: A perfect statement piece for upscale events. Ideal for resort getaways, garden parties, weddings, or any chic daytime or evening affair.",
          "Sizes: Available in standard UK designer sizing (e.g., UK 6 - 16).",
          "Care:  Due to the delicate nature of the fabric, dry clean only is essential to preserve its beauty and structure.",
        ],
        stylingTip: "Let these statement trousers be the centerpiece of your look by pairing them with a simple, tucked-in white silk camisole or a fine-knit bodysuit. A pair of high heels is essential to showcase the fluid drape of the silk. Keep accessories minimal and polished to complete this look of modern, artful elegance.",
      },
    },
    {
      image: "bottom8.jpg",
      name: "Dalia laser-cut wide-leg pants",
      price: 999,
      description: {
        overview: "A breathtaking example of exquisite craftsmanship, the Dalia pants from Jonathan Simkhai are true wearable art. The classic, tailored silhouette is elevated by the stunning, intricate floral laser-cut detailing that runs down the entire length of each side seam, creating a delicate, lace-like effect. Crafted from a structured crepe, these pants feature a flattering high waist and a fluid wide leg that moves beautifully. They are a unique and unforgettable statement piece for the woman who values artistry and modern romance in her wardrobe.",
        features: [
          "Material: A high-quality, mid-weight crepe or suiting fabric (typically a Polyester or Triacetate blend) that provides structure for the tailoring and stability for the intricate laser-cut details.",
          "Fit: Features a high-rise waist that is fitted through the hip, flowing into a graceful, full-length wide leg. The standout feature is the signature floral laser-cut detailing along the side seams.",
          "Occasion: A perfect choice for special occasions and upscale events. Ideal for cocktail parties, art gallery openings, rehearsal dinners, or any event where making a sophisticated, fashion-forward statement is desired.",
          "Sizes: Available in standard US designer sizing (e.g., US 0 - 12).",
          "Care: Due to the extremely delicate nature of the laser-cut detailing, dry clean only is essential.",
        ],
        stylingTip: "Treat these pants as the masterpiece they are by styling them with an understated, tucked-in top like a cream silk camisole or a simple bodysuit. Elongate the wide-leg silhouette with a pair of barely-there heeled sandals. Keep accessories minimal to allow the exquisite laser-cut detailing to be the undeniable focus.",
      },
    },
    {
      image: "bottom9.jpg",
      name: "Tie-waist wide-leg trousers",
      price: 899,
      description: {
        overview: "A perfect fusion of playful sophistication and high-impact drama, these trousers from MSGM are a masterclass in modern evening wear. Crafted from a lustrous, fluid satin that drapes beautifully, they feature a voluminous, floor-sweeping wide leg. The true show-stopper is the integrated oversized sash at the high waist, designed to be tied into a magnificent, sculptural bow. Exuding a sense of effortless Italian glamour, these trousers are a chic and powerful alternative to a traditional gown for any special occasion.",
        features: [
          "Material: A high-quality, fluid Satin or Crepe (typically a Viscose or Polyester blend) with a beautiful sheen and an elegant drape.",
          "Fit: Features a flattering high-rise waist with a dramatic, full-length palazzo-style wide leg. The defining feature is the oversized self-tie sash at the waist.",
          "Occasion: An exceptional choice for formal and evening events. Perfect for cocktail parties, weddings, galas, or any upscale affair where making a memorable entrance is key.",
          "Sizes: Available in standard Italian designer sizing (e.g., IT 38 - 48).",
          "Care: To preserve the lustrous finish and structure of the fabric, dry clean only is required.",
        ],
        stylingTip: "Make the sculptural bow the undisputed focal point by pairing these trousers with a minimal, tucked-in top like a black silk camisole or a sleek bodysuit. Elongate the dramatic silhouette with a pair of pointed-toe heels. Keep accessories refined and simple—a classic clutch and stud earrings are all you need.",
      },
    },
    {
      image: "bottom10.jpg",
      name: "Frayed high-rise wide-leg trousers",
      price: 1100,
      description: {
        overview: "A stunning example of playful deconstruction, these trousers from Rosie Assoulin are a true collector's piece for the fashion-forward. The design centers around a dramatic, ultra-high-rise waist that is artfully finished with a raw, frayed edge, adding a touch of undone elegance. Crafted from a textured, substantial fabric, the trousers are tailored to perfection, flowing into a commanding wide-leg silhouette. They are a bold, sculptural, and whimsical statement on modern power dressing.",
        features: [
          "Material: A high-quality, structured fabric, often a Cotton Twill or Linen Blend, chosen to hold the shape of the dramatic waist and wide leg.",
          "Fit: Features a striking ultra-high-rise waist designed to sit well above the natural waistline. The fit is tailored at the hip and flows into a full-length wide leg.",
          "Occasion: A perfect choice for high-fashion events, art gallery openings, or any occasion that calls for a unique, head-turning look. Ideal for making a sophisticated and artistic statement.",
          "Sizes: Available in standard US designer sizing (e.g., US 0 - 12).",
          "Care: Due to the tailored construction and the delicate frayed detailing, dry clean only is essential.",
        ],
        stylingTip: "The architectural, frayed waistband is the star of this piece and must be showcased. Pair these trousers with a minimal, fitted crop top or a simple bandeau to leave the entire waistline exposed. Elongate the wide-leg silhouette with a pair of heeled sandals for a truly modern and high-fashion statement.",
      },
    },
    {
      image: "bottom11.jpg",
      name: "Floral-print cropped trousers",
      price: 1000,
      description: {
        overview: "A beautiful example of wearable art, these cropped trousers from Roksanda showcase the designer's masterful use of color and print. The modern, elegant silhouette features a flattering high waist and a voluminous wide leg that is cropped to a chic culotte length. The true beauty lies in the exquisite, painterly floral print that artistically cascades up from the hem, set against a serene sage green background. They are a perfect statement piece for the woman who appreciates sophisticated, art-infused design.",
        features: [
          "Material: A high-quality, structured Crepe or Silk Blend, chosen for its beautiful drape and ability to hold the crisp, wide-leg silhouette.",
          "Fit: Features a high-rise waist that is tailored and fitted, flowing into a dramatic wide leg with a modern cropped (culotte) length.",
          "Occasion: A perfect choice for elegant daytime events. Ideal for garden parties, weddings, gallery openings, or as an elevated resort wear piece.",
          "Sizes: Available in standard UK designer sizing (e.g., UK 6 - 16).",
          "Care: To preserve the vibrant print and the integrity of the fabric, dry clean only is required.",
        ],
        stylingTip: "Allow the beautiful, painterly floral print to be the main focus by pairing these trousers with a simple, tucked-in top in a crisp white or cream hue. The cropped length is perfect for showcasing a pair of elegant pointed-toe heels or strappy sandals. Keep accessories minimal to maintain a look of sophisticated, artful chic.",
      },
    },
    {
      image: "bottom12.jpg",
      name: "Paisley-print flared pants",
      price: 600,
      description: {
        overview: "A pure expression of Etro's bohemian spirit, these flared trousers are a wearable masterpiece of pattern and color. Featuring the brand's hallmark paisley print in a rich, vibrant palette, these pants are designed to captivate. The silhouette is a timeless nod to '70s jet-set glamour, with a flattering fit through the thigh that kicks out into a dramatic flare. Crafted from a luxurious, fluid fabric, they move beautifully, embodying a sense of free-spirited, decadent style.",
        features: [
          "Material: A high-quality, comfortable stretch-crepe or stretch-cotton, typically a Viscose or Cotton blend with Elastane, chosen to hold the vibrant print and allow for a perfect, flattering fit.",
          "Fit: Designed with a mid-rise or high-rise waist, cut for a slim fit through the hip and thigh, and a classic flared leg from the knee down.",
          "Occasion: A perfect statement piece for a variety of stylish settings. Ideal for upscale resort wear, chic vacations, or creating a bold, fashion-forward look for a party or daytime event.",
          "Sizes: Available in standard Italian designer sizing (e.g., IT 38 - 48).",
          "Care: To preserve the rich colors and the integrity of the fabric, dry clean only is recommended.",
        ],
        stylingTip: "Embrace the full bohemian-luxe aesthetic by pairing these statement pants with a simple, tucked-in silk blouse in a solid color drawn from the print. A pair of high platform heels or boots is essential to enhance the leg-lengthening flare. Accessorize with layered gold jewelry to complete the '70s-inspired look.",
      },
    },
    {
      image: "bottom13.jpg",
      name: "Cream Broderie Anglaise Harem Trousers",
      price: 799,
      description: {
        overview: "A bohemian dream, these harem trousers are the epitome of effortless beachside glamour. Crafted from a delicate and lightweight cotton, they feature exquisite all-over Broderie Anglaise detailing for a touch of intricate, romantic charm. The comfortable, breezy silhouette is defined by a high elasticated waist and tapered cuffs at the ankle, creating a relaxed yet chic look. Sheer in all the right places, they are the perfect, elegant cover-up for your next sun-soaked getaway. ",
        features: [
          "Material: A lightweight and breathable 100% Cotton fabric featuring intricate Broderie Anglaise embroidery. Often includes a short, built-in lining for partial coverage.",
          "Fit: A relaxed and breezy harem-style fit, featuring a comfortable high-rise elastic waistband and matching elasticated cuffs at the ankle for a billowy silhouette.",
          "Occasion: The ultimate chic beach or poolside cover-up. Perfect for vacations, resort wear, or a bohemian-inspired festival look.",
          "Sizes: Available in inclusive sizing (e.g., US 0 - 26).",
          "Care:  Due to the delicate embroidery, hand wash cold is recommended to keep them in perfect condition. Hang to dry.",
        ],
        stylingTip: "These trousers are the ultimate chic beach cover-up. Simply slip them on over your favorite neutral or matching-toned bikini or one-piece swimsuit. Complete the effortless resort look with a pair of flat leather sandals, a large straw tote bag, and your favorite sunglasses.",
      },
    },
    {
      image: "bottom14.jpg",
      name: "Floral-print wide-leg trousers",
      price: 800,
      description: {
        overview: "Quintessentially feminine and effortlessly romantic, these wide-leg trousers are a signature piece from the beloved Australian designer, Zimmermann. Crafted from a luxurious and airy linen, they serve as the perfect canvas for the brand's delicate, artful floral prints. The silhouette is one of pure, sun-drenched glamour, featuring a flattering high waist and a dramatic, floor-sweeping wide leg that moves with ethereal grace. They are the ultimate statement piece for an elegant resort-ready wardrobe.",
        features: [
          "Material: A luxurious, lightweight, and breathable 100% Linen or a Linen/Silk blend, perfect for staying cool while looking incredibly chic.",
          "Fit: Features a high-rise waist, often with a matching removable belt. The silhouette is a dramatic, full-length palazzo-style wide leg that is designed to be fluid and flowy.",
          "Occasion: The epitome of luxury resort wear. Perfect for destination weddings, upscale vacations, garden parties, or any elegant warm-weather event.",
          "Sizes: Available in Zimmermann's specific sizing (0P, 0, 1, 2, 3), which corresponds to standard international sizes.",
          "Care: Due to the delicate nature of the linen and the intricate print, dry clean only is strongly recommended.",
        ],
        stylingTip: "Create the ultimate statement by pairing these trousers with the matching Zimmermann floral-print top for a breathtaking, coordinated look. For a simpler approach, a tucked-in white silk camisole will work beautifully. Complete the glamorous ensemble with a pair of heeled espadrilles and a woven basket bag.",
      },
    },
    {
      image: "bottom15.jpg",
      name: "Belted faux leather wide-leg pants",
      price: 1700,
      description: {
        overview: "A stunning showcase of modern luxury, these wide-leg pants are crafted from Nanushka's signature buttery-soft vegan leather. The rich, burgundy hue offers a sophisticated alternative to traditional black, while the fluid, wide-leg silhouette drapes beautifully for an effortlessly elegant look. Featuring a flattering high-rise waist and a matching D-ring belt to cinch the figure, these trousers are a testament to the brand's commitment to creating timeless, responsible, and incredibly chic pieces.",
        features: [
          "Material:  Nanushka's signature butter-soft vegan leather (typically a Polyester and Polyurethane blend), celebrated for its supple feel and realistic texture.",
          "Fit: Designed with a high-rise waist and a relaxed, full-length wide leg. Comes with a matching, removable belt to create a defined silhouette.",
          "Occasion: An incredibly versatile piece that transitions seamlessly from day to night. Perfect for a chic office look, an elevated dinner outfit, or a fashion-forward weekend ensemble.",
          "Sizes: Available in standard international designer sizing (e.g., XS - L).",
          "Care: To maintain the quality of the vegan leather, hand wash cold or machine wash on a delicate cycle, inside out. Do not tumble dry; hang to dry.",
        ],
        stylingTip: "Create a look of effortless sophistication by pairing these pants with a tucked-in, fine-knit turtleneck in a neutral cream or black. A pair of pointed-toe heeled boots will seamlessly elongate the silhouette. Let the rich texture of the vegan leather be the main focus by keeping accessories simple and elegant.",
      },
    },
    {
      image: "bottom16.jpg",
      name: " Estelle pleated wide-leg pants",
      price: 1200,
      description: {
        overview: "A true masterpiece of texture and movement, the Estelle pants from Cult Gaia are the epitome of effortless glamour. Crafted from a mesmerizing, finely pleated plissé satin, the fabric catches the light with every step, creating a stunning, liquid-like shimmer. The silhouette is both comfortable and incredibly chic, featuring an easy pull-on high waist that flows into a dramatic, floor-sweeping wide leg. In a vibrant, eye-catching green, these pants are wearable art that guarantees a head-turning entrance.",
        features: [
          "Material: A lustrous, finely pleated plissé satin, typically 100% Polyester, celebrated for its beautiful shimmer, wrinkle-resistance, and fluid movement.",
          "Fit: Features a comfortable high-rise elasticated waistband for an easy fit. The silhouette is a dramatic, full-length wide leg that is designed to be flowy and relaxed.",
          "Occasion: A perfect choice for making a glamorous statement. Ideal for resort vacations, cocktail parties, weddings, or any festive evening event.",
          "Sizes: Available in standard international designer sizing (e.g., XS - L).",
          "Care: To preserve the delicate pleats, hand wash cold or dry clean is recommended. Do not iron; store gently to maintain the texture.",
        ],
        stylingTip: "Create an unforgettable, goddess-like ensemble by pairing these pants with the matching Cult Gaia pleated top for a head-to-toe statement. If styling separately, a simple, tucked-in silk camisole in black or white works beautifully. A pair of high, strappy sandals is essential to complement the floor-sweeping length.",
      },
    },
  ];

  const addToCart = (product) => setCartItems([...cartItems, product]);
const removeFromCart = (product) =>
  setCartItems(cartItems.filter((item) => item !== product));

return (
  <div>
    <Navbar cartItems={cartItems} onRemoveItem={removeFromCart} />

    {/* ✅ Breadcrumb below navbar */}
    <div className="pt-[200px] max-w-[1400px] mx-auto px-4">
          <Breadcrumb paths={["Home", "Bottoms"]} />
        </div>
    
    <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} onAddToCart={addToCart} />
      ))}
    </main>
  </div>
);
}
