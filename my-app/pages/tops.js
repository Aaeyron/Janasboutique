// tops.js
import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import { CartContext } from "./_app"; // import CartContext

export default function Tops() {
  const { cartItems, setCartItems } = useContext(CartContext); // use global cart

  const products = [
    {
      image: "top1.jpg",
      name: "SORELLA VITA TOP",
      price: 1299,
      folder: null,
      description: {
        overview:
          "A sophisticated top that blends modern elegance with timeless appeal. Designed to complement both formal and casual wardrobes, this piece brings versatility and style.",
        features: [
          "Material: Crafted from a super soft, stretchy blend of 95% Polyester and 5% Spandex for a smooth and comfortable feel.",
          "Fit: Features a chic, bodycon fit with a cropped length that sits perfectly at the natural waist. The off-the-shoulder neckline is designed to stay in place.",
          "Occasion: The perfect statement piece for date nights, cocktail parties, birthdays, or a stylish girls' night out.",
          "Sizes: Available in standard sizes (e.g., XS, S, M, L). Please refer to the size chart for exact measurements.",
          "Care: To keep this top looking its best, we recommend a cold hand wash only. Lay flat to dry and use a cool iron if needed. Do not tumble dry.",
        ],
        stylingTip: "Showcase the romantic draped neckline by styling this top with your favorite high-waisted bottoms. Pair it with a flowing satin midi skirt for an elegant event, or with sleek, dark-wash denim for a chic and polished date-night look.",
      },
    },
    {
      image: "top2.jpg",
      name: "Cropped ribbed-knit top",
      price: 899,
      folder: null,
      description: {
        overview:
          "A masterclass in modern knitwear, this Alaïa top is a testament to the house's legacy of celebrating the female form. Crafted from a substantial, chunky ribbed-knit, it offers a sculptural silhouette that hugs your curves for a flattering, second-skin fit. The vibrant hue and modern cropped length make it a versatile statement piece, effortlessly pairing with high-waisted skirts or tailored trousers for a look that is both powerful and undeniably chic.",
        features: [
          "Material: Expertly crafted from a luxurious and structured stretch-knit blend (typically Viscose/Polyester) that holds its shape while offering a comfortable, second-skin feel.",
          "Fit: Designed for a close, body-hugging fit with a modern cropped hemline that accentuates the waist. The chunky ribbing provides a flattering, textured look.",
          "Occasion: A versatile statement piece perfect for creating a fashion-forward look. Ideal for stylish brunches, gallery openings, or elevating your everyday denim.",
          "Sizes: Available in standard sizes (e.g., XS, S, M, L). Please refer to the size chart for exact measurements.",
          "Care: To maintain the integrity and vibrant color of this garment, dry clean only is strongly recommended.",
        ],
        stylingTip: "Create a striking silhouette by pairing this top with high-waisted bottoms. We love it with tailored wide-leg trousers for a sophisticated look, or with classic straight-leg denim for an elevated-casual feel.",
      },
    },
    {
      image: "top3.jpg",
      name: "Cropped cable-knit turtleneck",
      price: 1099,
      folder: null,
      description: {
        overview:
          "A cozy cable-knit turtleneck with a modern cropped cut. Perfect for keeping warm while staying fashion-forward during chilly days.",
        features: [
          "Material: Crafted from 100% extra-fine Merino Wool, offering exceptional softness, warmth, and breathability.",
          "Fit: Designed with a slim fit through the body and a fitted, cropped waistband. Features voluminous long sleeves with signature puffed shoulders.",
          "Occasion: A versatile staple for any autumn/winter wardrobe. Perfect for stylish weekend outings, casual office days, or creating an elevated everyday look.",
          "Sizes: Available in standard French designer sizing (e.g., FR 34 - 44). Please consult the size chart for your perfect fit.",
          "Care: To preserve the quality of the wool, hand wash cold or dry clean is recommended. Lay flat to dry.",
        ],
        stylingTip: "For that signature Parisian cool, style this sweater with high-waisted, straight-leg jeans in an ecru or light wash. A pair of heeled Western-style ankle boots and a leather crossbody bag are all you need to finish this effortlessly chic look.",
      },
    },
    {
      image: "top4.jpg",
      name: "Cropped turtleneck jumper",
      price: 1199,
      folder: null,
      description: {
        overview:
          "A masterclass in deconstructed luxury, this Unravel Project jumper redefines a classic silhouette with a bold, modern edge. Spun from an incredibly soft and luxurious wool-cashmere blend, this piece features a dramatically cropped body and extra-long sleeves for a play on proportions. The cozy, form-fitting turtleneck provides a striking contrast to the relaxed fit of the body, creating a look that is both comfortable and undeniably high-fashion. It's the perfect statement knit for an effortlessly cool, streetwear-inspired wardrobe.",
        features: [
          "Material: A supremely soft and luxurious blend of Wool and Cashmere, designed for a lightweight feel with exceptional warmth.",
          "Fit: Features a relaxed, dramatically cropped fit through the body, contrasted with a snug turtleneck and signature extra-long sleeves.",
          "Occasion: The perfect statement piece for creating an edgy, fashion-forward look. Ideal for stylish city outings, weekend wear, or any time you want to showcase your personal style.",
          "Sizes: Available in standard international designer sizing (e.g., S, M, L).",
          "Care: Dry clean only",
        ],
        stylingTip: "Embrace the jumper's unique proportions by pairing it with high-waisted bottoms. We love it with baggy cargo pants or distressed straight-leg jeans for a signature streetwear look, finished with a pair of chunky combat boots.",
      },
    },
    {
      image: "top5.jpg",
      name: "Zip-up ribbed-knit sweater",
      price: 1499,
      folder: null,
      description: {
        overview:
          "An elevated essential that embodies modern femininity, this Khaite sweater is a masterclass in luxurious knitwear. Crafted from a dense, stretch-ribbed knit, it’s designed to sculpt and flatter your silhouette. The standout feature is the exaggerated collar, which can be worn zipped high like a turtleneck or folded down for a more relaxed feel. A versatile two-way zipper adds a touch of custom styling, making this piece a timeless and sophisticated staple you’ll reach for season after season.",
        features: [
          "Material: A signature mid-weight, stretch-ribbed knit (typically a Viscose blend) designed to hold its shape and provide a comfortable, body-hugging feel.",
          "Fit: Cut for a slim, second-skin fit that moves with you. The silhouette is perfect for tucking into high-waisted bottoms or wearing as a sleek standalone piece.",
          "Occasion: Incredibly versatile. Style it for a sophisticated office look, a chic weekend brunch, or an elegant evening out. It’s a perfect modern alternative to a classic blouse or turtleneck.",
          "Sizes: Available in standard international designer sizing (e.g., XS, S, M, L).",
          "Care: To maintain the structure and luxurious feel of the knit, dry clean only is recommended.",
        ],
        stylingTip: "Make use of the versatile two-way zipper for multiple looks. Unzip it from the bottom to create a stylish split hem over high-waisted wide-leg trousers. For a more casual approach, unzip it from the top, fan out the collar, and pair with your favorite straight-leg denim.",
      },
    },
    {
      image: "top6.jpg",
      name: "Striped sleeveless turtleneck",
      price: 799,
      folder: null,
      description: {
        overview:
          "A nod to the iconic Space Age aesthetic of the '60s, this Courrèges turtleneck is a masterclass in minimalist design with a retro twist. Crafted from a finely ribbed stretch-knit, this piece is designed to hug your silhouette for a sleek, second-skin fit. The playful pink and white stripes offer a fresh, graphic appeal, while the signature vinyl logo patch at the chest adds an authentic touch of heritage. Both a perfect layering piece and a striking standalone top, it’s a timeless staple for any modern wardrobe.",
        features: [
          "Material: A comfortable and breathable fine-gauge ribbed knit, typically a Cotton/Elastane blend, offering plenty of stretch for a perfect fit.",
          "Fit: Cut for a slim, body-hugging fit that’s perfect for tucking in or layering. The sleeveless design and high turtleneck create a clean, elongated silhouette.",
          "Occasion: An incredibly versatile piece. Wear it on its own for a chic daytime look, or use it as a base layer under blazers and jackets for a more polished, year-round ensemble.",
          "Sizes: Available in standard international designer sizing (e.g., XS, S, M, L).",
          "Care: To preserve the color and fit, we recommend a gentle machine wash cold or hand wash. Lay flat to dry.",
        ],
        stylingTip: "Embrace the brand's retro-heritage by pairing this top with a high-waisted A-line miniskirt and white ankle boots. For a more contemporary, sophisticated look, tuck it into a pair of high-waisted wide-leg trousers and layer a sharp blazer on top.",
      },
    },
    {
      image: "top7.jpg",
      name: "V-neck Rib-knit Sweater",
      price: 1299,
      folder: null,
      description: {
        overview:
          "A stylish update on a timeless classic, this H&M sweater is the perfect blend of cozy and chic. Crafted from a soft, fine-ribbed knit, it features a flattering deep V-neckline that’s perfect for layering or wearing on its own. The standout detail is the dramatic, voluminous balloon sleeves that taper at the cuffs, adding a touch of romance and a modern, fashion-forward silhouette. Comfortable enough for everyday wear but stylish enough to make a statement, this sweater is a versatile must-have for any wardrobe.",
        features: [
          "Material: A soft, comfortable knit blend (typically Polyester, Acrylic, and Spandex) with a fine-ribbed texture for a flattering drape and stretch.",
          "Fit: Designed for a regular, relaxed fit through the body. The main feature is the oversized balloon sleeves, which are balanced by a standard-length hem.",
          "Occasion: An ideal choice for a variety of casual settings. Perfect for weekend outings, a cozy-chic office look, or a stylish everyday ensemble.",
          "Sizes: Available in standard inclusive sizing (e.g., XS - XXL).",
          "Care: Easy to care for. Machine wash cold on a gentle cycle. Lay flat to dry to maintain its shape.",
        ],
        stylingTip: "Balance the volume of the statement balloon sleeves by doing a French tuck into high-waisted straight-leg jeans or slim-fit trousers. For a softer look, layer a delicate lace camisole underneath to peek through the deep V-neckline.",
      },
    },
    {
      image: "top8.jpg",
      name: "Striped high neck short-sleeve top",
      price: 899,
      folder: null,
      description: {
        overview:
          "Infused with a playful, retro charm, this Miu Miu top is a perfect embodiment of the brand's rebellious yet feminine spirit. Crafted from a luxurious, fine-gauge knit, it features classic Breton stripes in a fresh blue and white palette. The sleek, body-hugging silhouette is defined by a sophisticated high neck and chic short sleeves, creating a look that is both preppy and polished. It's a versatile, high-fashion staple that brings a touch of eclectic elegance to any outfit.",
        features: [
          "Material: A soft and stretchy fine-gauge knit, typically a high-quality Viscose blend, designed for a smooth feel and a flattering, figure-hugging drape.",
          "Fit: Cut for a slim, second-skin fit with a slightly cropped hem that is perfect for tucking into high-waisted bottoms.",
          "Occasion: A perfect piece for creating a chic, polished daytime look. Its versatile design works for stylish brunches, creative work environments, or as an elevated casual staple.",
          "Sizes: Available in standard international designer sizing (e.g., XS, S, M, L).",
          "Care: To protect the delicate knit and vibrant color, dry clean is highly recommended.",
        ],
        stylingTip: "Embrace the brand's signature preppy-chic aesthetic by tucking this top into a high-waisted, pleated miniskirt and pairing it with loafers and crew socks. For a more sophisticated, '70s-inspired look, style it with high-waisted wide-leg trousers and platform sandals.",
      },
    },
    {
      image: "top9.jpg",
      name: "Cropped cardigan",
      price: 1099,
      folder: null,
      description: {
        overview:
          "The epitome of a timeless wardrobe staple, this Farrow cardigan combines classic comfort with a modern silhouette. Crafted from an exceptionally soft, lightweight knit, it features a flattering V-neckline and a traditional button-front closure. The contemporary cropped length makes it incredibly versatile, perfect for layering or wearing on its own. Whether you're dressing it up for the office or down for the weekend, this is the effortlessly chic piece you'll find yourself reaching for again and again.",
        features: [
          "Material: A soft and comfortable lightweight knit blend (typically Viscose/Nylon/Polyester) that offers a smooth feel with a hint of stretch.",
          "Fit: Designed for a classic, regular fit that's not too tight and not too loose. The hem is cropped to sit perfectly at the natural waist.",
          "Occasion: An essential for any occasion. Perfect as a layering piece for the office, a simple top for casual weekends, or a light cover-up for an evening out.",
          "Sizes: Available in standard sizing (e.g., XS - XL).",
          "Care: To keep it looking its best, hand wash cold or use a gentle machine wash cycle. Lay flat to dry.",
        ],
        stylingTip: "Embrace its versatility. For a modern, chic look, wear it buttoned-up on its own as a top, paired with high-waisted jeans and loafers. For a more classic feel, wear it open and layered over a satin camisole or a simple slip dress.",
      },
    },
    {
      image: "top10.jpg",
      name: "Pipo cropped cardigan",
      price: 1199,
      folder: null,
      description: {
        overview:
          "Epitomizing the effortless elegance of Brazilian resort wear, the Pipo set by Martha Medeiros is a testament to artisanal craftsmanship. This stunning two-piece ensemble includes a cropped bandeau top and a matching open-front cardigan, both rendered in an intricate, textured knit. The vibrant yellow hue exudes sunshine and joy, while the cardigan’s romantic short puff sleeves add a touch of feminine charm. It's a luxurious and versatile set designed for sun-drenched days and balmy evenings.",
        features: [
          "Material: An intricate, textured knit with a crochet-like appearance, typically crafted from a high-quality, breathable Cotton blend.",
          "Fit: The set includes a fitted, cropped bandeau and a matching cardigan with a relaxed, slightly boxy fit and a cropped hem.",
          "Occasion: The perfect choice for a luxury vacation, a summer garden party, a stylish brunch, or any upscale warm-weather event.",
          "Sizes: Available in standard designer sizing (e.g., S, M, L).",
          "Care: Due to the delicate and intricate nature of the knit, dry clean only is strongly recommended to preserve its texture and shape.",
        ],
        stylingTip: "Wear the two pieces together for a stunning, coordinated look, paired with high-waisted white linen trousers and espadrilles for the ultimate resort-chic ensemble. For more versatility, style the cardigan open over a simple slip dress, or wear the bandeau on its own with a high-waisted skirt and an open linen shirt.",
      },
    },
    {
      image: "top11.jpg",
      name: "Asymmetric ribbed polo shirt",
      price: 999,
      folder: null,
      description: {
        overview:
          "A classic polo shirt reimagined with an architectural twist, this top from Stella McCartney showcases the brand's commitment to sustainable luxury and modern design. Crafted from a soft, forest-friendly ribbed knit, it’s designed to hug your curves for a flattering, streamlined silhouette. The traditional polo collar is updated with a signature off-center, asymmetric button placket, transforming a timeless staple into a subtle statement piece. It’s an elevated basic that exudes effortless sophistication.",
        features: [
          "Material: A fine-gauge, stretchy ribbed knit made from sustainably sourced, forest-friendly viscose, reflecting the brand's eco-conscious ethos.",
          "Fit: Cut for a slim, second-skin fit that is perfect for layering or wearing on its own. The sleeves are long and fitted.",
          "Occasion: A perfect choice for a sophisticated daytime look, a creative office environment, or an elevated casual ensemble.",
          "Sizes:  Available in standard sizing (S, M, L).",
          "Care: To protect the sustainable materials and maintain the garment's shape, dry clean or a very gentle hand wash cold is recommended.",
        ],
        stylingTip: "Let the unique asymmetric placket be the focal point of your outfit. Tuck this top into a pair of high-waisted, wide-leg trousers in a neutral cream or black for a polished, modern look. For a chic weekend alternative, pair it with high-waisted tailored shorts and minimalist loafers.",
      },
    },
    {
      image: "top12.jpg",
      name: "Solid Tie Front Crop Top",
      price: 899,
      folder: null,
      description: {
        overview:
          "Flirty, feminine, and effortlessly chic, this tie-front top from Cider is a warm-weather dream. Crafted from a lightweight and breezy fabric, it features a playful tie-front detail that creates a flattering keyhole cutout. The romantic, billowy long sleeves gather at the cuff, adding a touch of bohemian-inspired volume. With its versatile cropped silhouette, this top is a go-to piece for creating cute, stylish, and on-trend looks for any sunny day or casual night out.",
        features: [
          "Material: A lightweight and breathable fabric, typically 100% Polyester with a crepe-like texture, perfect for staying cool and comfortable.",
          "Fit: Features a regular fit with a cropped hemline. The adjustable tie-front allows for a customizable fit at the bust.",
          "Occasion: A perfect top for casual, sunny days. Ideal for weekend brunches, festivals, date nights, or as a stylish vacation piece.",
          "Sizes: Available in inclusive sizing (e.g., XXS - 4XL)",
          "Care: Easy to care for. Machine wash cold on a gentle cycle and hang to dry.",
        ],
        stylingTip: "Pair this top with your favorite high-waisted, light-wash denim (shorts, a skirt, or jeans) for a classic and cool casual look. To lean into a more bohemian vibe, style it with a high-waisted, flowy floral maxi skirt and layered gold necklaces.",
      },
    },
    {
      image: "top13.jpg",
      name: "Striped Trim Knitted Vest",
      price: 799,
      folder: null,
      description: {
        overview:
          "Full of nostalgic charm and playful character, this knitted vest from Bobo Choses is a perfect example of the brand's whimsical and sustainable ethos. Crafted from a soft, cozy knit, it features a classic V-neck silhouette in a vibrant green hue. The retro-inspired striped trim along the neckline, armholes, and hem adds a touch of academic cool. It's a fun, versatile layering piece that brings personality and a pop of color to any outfit.",
        features: [
          "Material: A soft and comfortable knit, often made with sustainable materials like a blend of Organic Cotton and Wool, in line with the brand's eco-conscious values.",
          "Fit: Designed for a relaxed, slightly boxy fit that is perfect for comfortable, easy layering over shirts and tees.",
          "Occasion: A perfect piece for creating a trendy, preppy, or grandpa-chic look. Ideal for casual weekends, creative settings, and transitional weather.",
          "Sizes: S, M, L",
          "Care: To best care for the sustainable knit, a gentle machine wash cold or hand wash is recommended. Lay flat to dry.",
        ],
        stylingTip: "Embrace a playful, academic-inspired look by layering this vest over a classic white button-down shirt, allowing the collar and cuffs to peek out. Pair it with high-waisted, pleated trousers and chunky loafers for a complete, stylish ensemble.",
      },
    },
    {
      image: "top14.jpg",
      name: "Collar-ful Crop Top",
      price: 899,
      folder: null,
      description: {
        overview:
          "Channel your inner goth-next-door with the Collar-ful crop top from Killstar. This darkly adorable piece combines a classic polo silhouette with a signature alternative edge. Crafted from a soft, stretch jersey for a flattering, body-hugging fit, its main feature is the dramatic, oversized white collar that provides a striking contrast against the deep black fabric. Finished with a subtle, mystical crescent moon embroidery, this top is a versatile staple for any modern dark wardrobe.",
        features: [
          "Material: A soft, comfortable, and stretchy jersey, typically a Viscose/Elastane blend, designed to move with you.",
          "Fit: Features a slim, bodycon fit with a cropped hemline that pairs perfectly with high-waisted bottoms.",
          "Occasion: The perfect top for any alternative style enthusiast. Ideal for casual day-to-day wear, concerts, spooky season, or a night out with your coven.",
          "Sizes: Available in inclusive sizing (e.g., XS - 4XL)",
          "Care: To keep it looking sharp, machine wash cold on a gentle cycle and hang to dry.",
        ],
        stylingTip: "Embrace a classic goth-punk aesthetic by pairing this top with a high-waisted, pleated plaid miniskirt and fishnet tights. Complete the look with your favorite pair of chunky platform combat boots and a spiked choker for a powerful, head-turning style.",
      },
    },
    {
      image: "top15.jpg",
      name: "Ribbed Short Sleeve Collar Detail Bodycon Dress",
      price: 1399,
      folder: null,
      description: {
        overview:
          "Effortlessly chic and endlessly versatile, this bodycon dress is a must-have for any modern wardrobe. Crafted from a soft, stretchy ribbed material, it's designed to hug your curves in all the right places for a stunning, figure-flattering silhouette. The classic collared neckline and button-front detail add a touch of preppy polish, while the short sleeves and playful mini length keep it fresh and contemporary. It's the perfect one-and-done outfit that can be easily dressed up or down for any occasion.",
        features: [
          "Material: A soft and stretchy ribbed jersey, typically a Polyester/Elastane blend, designed for a comfortable, figure-hugging fit.",
          "Fit: A true bodycon fit from top to bottom, with a mini dress length. The stretchy fabric allows for ease of movement.",
          "Occasion: Perfect for a variety of events. Dress it down for a casual brunch or a day of shopping, or dress it up for a date night or evening out with friends.",
          "Sizes: S, M, L",
          "Care: Easy to care for. Machine wash cold with similar colors and lay flat to dry to maintain its shape and color.",
        ],
        stylingTip: "For a cool and casual daytime look, pair this dress with your favorite chunky white sneakers and a mini shoulder bag. To take it from day to night, simply swap the sneakers for a pair of heeled mules or strappy sandals and add some delicate layered gold jewelry.",
      },
    },
    {
      image: "top16.jpg",
      name: "Rose Button Up Cropped Cardigan",
      price: 1099,
      folder: null,
      description: {
        overview:
          "Incredibly soft and utterly charming, this cropped cardigan from Cider adds a touch of whimsical romance to any look. Crafted from an ultra-plush, fuzzy eyelash knit, it’s a delight to both see and touch. The standout feature is the row of sweet, rose-shaped buttons that provide a unique and feminine detail. With its modern cropped fit and classic V-neckline, this cardigan is a playful, on-trend piece that's perfect for layering or wearing on its own as a statement top.",
        features: [
          "Material: A soft and fuzzy eyelash knit, typically a Nylon/Acrylic blend, designed for a plush feel and cozy warmth.",
          "Fit: Features a regular fit with a cropped hem that is designed to sit at the natural waist.",
          "Occasion: A perfect piece for adding a cute, feminine touch to your outfit. Ideal for casual dates, weekend outings with friends, or a cozy yet stylish day in.",
          "Sizes: S, M, L",
          "Care: Due to the delicate eyelash knit, hand wash cold is recommended to maintain its softness and prevent shedding. Lay flat to dry.",
        ],
        stylingTip: "Embrace a soft, romantic look by wearing this cardigan buttoned up as a top, paired with high-waisted, light-wash straight-leg jeans. For a more coquette-inspired style, wear it with a white pleated miniskirt to let the charming rose buttons be the star of the show.",
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
      <Breadcrumb paths={["Home", "Tops"]} />
    </div>

    <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} onAddToCart={addToCart} />
      ))}
    </main>
  </div>
);
}
