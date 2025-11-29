// sandals.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Sandals() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "shoes/sandal1.jpg",
      name: "Crisscross Strappy Flat Sandals",
      price: 999,
      folder: "shoes",  
      description: {
        overview: "A masterclass in minimalist design, these sandals are the epitome of an essential summer staple. The sleek silhouette features delicate, crisscrossing straps with a subtle snakeskin texture for a touch of elevated detail. With a comfortable flat sole and a secure ankle strap, these sandals are designed for all-day wear. Effortlessly chic and endlessly versatile, they are the perfect go-to pair for everything from city strolls to beachside dinners.",
        features: [
          "Material: The straps and insole are crafted from a high-quality Faux Leather with an embossed texture. The outsole is made of durable Thermoplastic Rubber (TPR).",
          "Fit: Features a standard fit with an adjustable ankle strap and a metal buckle for a secure and customized feel.",
          "Occasion: Perfect for everyday wear, casual outings, beach trips, city exploration, or any warm-weather occasion that calls for comfortable yet stylish footwear.",
          "Sizes: Available in standard women's sizing (UK 36 - 41).",
          "Care: Easy to maintain. Simply wipe clean with a soft, damp cloth.",
        ],
        stylingTip: "These are your ultimate go-with-anything sandals. Pair them with a flowy summer midi dress for an effortless daytime look, or style them with cuffed denim shorts and a simple white tee for classic, casual cool.",
      },
    },
    {
      image: "shoes/sandal2.jpg",
      name: "Metallic Knotted T-Strap Sandals",
      price: 1190,
      folder: "shoes",
      description: {
        overview: "Add a touch of Grecian-goddess glamour to your look with these stunning T-strap sandals. The radiant metallic gold finish instantly elevates any outfit, while the delicate knotted details along the straps provide an artisanal, high-fashion touch. Designed with a comfortable flat sole and an adjustable ankle strap, they offer both style and ease. These sandals are the perfect accessory to transition seamlessly from a sunny day to a sophisticated evening.",
        features: [
          "Material: Straps and insole are crafted from a high-quality metallic Faux Leather. The outsole is made of durable Thermoplastic Rubber (TPR).",
          "Fit: A classic T-strap design with an adjustable slingback strap and a metal buckle for a secure fit. The flat profile ensures all-day comfort.",
          "Occasion: Perfect for dressing up any outfit. Ideal for summer parties, date nights, resort vacations, or as an elegant choice for a daytime event or wedding guest.",
          "Sizes: vailable in standard women's sizing (UK 36 - 41).",
          "Care: To maintain the metallic finish, gently wipe clean with a soft, dry cloth. Avoid abrasive materials",
        ],
        stylingTip: "Let these sandals shine by pairing them with a simple, elegant outfit. They look stunning with a flowy white linen dress for a classic summer look, or with a vibrant maxi skirt and a simple top to add a touch of gilded glamour.",
      },
    },
    {
      image: "shoes/sandal3.jpg",
      name: "Square Toe Strappy Low Heel Sandals",
      price: 1250,
      folder: "shoes",
      description: {
        overview: "Embrace modern minimalism with these effortlessly chic strappy sandals. The design is defined by its of-the-moment sharp square toe and delicate spaghetti straps that elegantly frame the foot. Rendered in a rich red hue, these sandals feature a subtle low block heel for a touch of comfortable elevation. They are a sophisticated and versatile staple for the modern wardrobe, perfect for adding a pop of color and a dose of contemporary style to any look.",
        features: [
          "Material: A smooth, high-quality Faux Leather is used for the upper straps and the lightly padded insole. The low block heel is crafted from a durable stacked material with a Thermoplastic Rubber (TPR) outsole.",
          "Fit: Features a secure fit with a delicate toe loop, an asymmetric upper strap, and an adjustable ankle strap with a slim metal buckle. The minimal block heel offers a slight, comfortable lift.",
          "Occasion: Perfect for a wide range of settings, from a chic office look to date nights, brunches, or weekend events. An elegant choice for when you want a step up from a flat sandal.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth to remove any dirt or scuffs.",
        ],
        stylingTip: "The sharp square toe and delicate straps look stunning with cropped, wide-leg trousers or straight-leg jeans to show off the ankle detail. For a more elegant look, pair them with a silky slip dress or a minimalist midi skirt to create a sophisticated, '90s-inspired ensemble.",
      },
    },
    {
      image: "shoes/sandal4.jpg",
      name: "Zebra Print Buckle Thong Sandals",
      price: 1499,
      folder: "shoes",
      description: {
        overview: "Make a fierce style statement with these eye-catching thong sandals. The classic flat sandal is given a glamorous update with a bold zebra-print strap crafted from a tactile, fuzzy material. The true centerpiece is the oversized, sculptural gold-tone buckle that adds a touch of opulent, vintage-inspired hardware. These are not your average flip-flops; they are a chic accessory designed to elevate your entire summer wardrobe.",
        features: [
          "Material: The wide strap is made from a soft Faux Calf Hair with a zebra print. The buckle is a gold-tone metal alloy. The comfortable footbed is a smooth Faux Leather, and the outsole is durable rubber.",
          "Fit: A comfortable slip-on thong design. The wide strap is designed to sit securely across the instep for a stable fit.",
          "Occasion: Perfect for adding a pop of personality to any look. Ideal for chic daytime events, resort wear, stylish brunches, or adding a fashionable twist to a casual shopping trip.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To clean the strap, gently wipe with a soft, dry cloth. The footbed can be wiped with a damp cloth. Avoid getting the buckle excessively wet.",
        ],
        stylingTip: "Let these statement sandals be the focal point of your outfit by pairing them with a neutral, monochromatic look. They look exceptionally chic with black linen trousers and a simple tank top, or with a classic white shirt dress, allowing the zebra print and gold hardware to truly pop.",
      },
    },
    {
      image: "shoes/sandal5.jpg",
      name: "Croc-Embossed Double Strap Slides",
      price: 1290,
      folder: "shoes",
      description: {
        overview: "Meet your new elevated essential. These chic slides combine everyday comfort with a touch of sophisticated texture. Crafted in a versatile cream hue, the classic double-strap silhouette is updated with a luxe croc-embossed finish. The lightly cushioned footbed and durable sole ensure all-day comfort, making them the perfect slip-on-and-go option for a polished, minimalist look that never compromises on style.",
        features: [
          "Material: The upper straps are crafted from a high-quality, croc-embossed Faux Leather. The sandal features a cushioned insole and a durable rubber outsole.",
          "Fit: An easy and comfortable slip-on slide design. The two wide straps are designed to hold the foot securely.",
          "Occasion: The perfect choice for elevated everyday wear. Ideal for weekend brunches, casual outings, stylish errands, or as a chic and comfortable option for your next vacation.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Easy to maintain. Simply wipe clean with a soft, damp cloth to keep them looking fresh.",
        ],
        stylingTip: "Embrace a relaxed yet sophisticated aesthetic by pairing these slides with wide-leg linen trousers and a simple knit tank top. They also look effortlessly chic with high-waisted straight-leg jeans and an oversized button-down shirt for a polished, off-duty model look.",
      },
    },
    {
      image: "shoes/sandal6.jpg",
      name: "Asymmetric Strappy Toe Loop Sandals",
      price: 1150,
      folder: "shoes",
      description: {
        overview: "Artfully minimalist and effortlessly modern, these flat sandals are a study in chic simplicity. The design features a contemporary square toe and a unique, asymmetric strap configuration that includes a secure toe loop for a perfect fit. Crafted in a versatile neutral hue, these sandals are the epitome of an elevated basic. Their easy slip-on style makes them a go-to choice for adding a touch of sophisticated, understated style to any warm-weather look.",
        features: [
          "Material: The upper straps and lightly cushioned insole are crafted from a soft, high-quality Faux Leather. The outsole is made of durable Thermoplastic Rubber (TPR).",
          "Fit: An easy slip-on style. The clever asymmetric design, featuring a toe loop and crisscrossing straps, ensures a comfortable and secure fit on the foot.",
          "Occasion: Your new go-to for an effortlessly chic look. Perfect for casual weekends, city strolls, vacations, or pairing with your favorite brunch outfit.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth to keep them looking pristine.",
        ],
        stylingTip: "These sandals are perfect for pairing with modern silhouettes. Style them with tailored city shorts and a simple bodysuit, or with a flowy satin midi skirt for a look that is both comfortable and impeccably chic.",
      },
    },
    {
      image: "shoes/sandal7.jpg",
      name: "Double Strap Espadrille Platform Sandals",
      price: 1850,
      folder: "shoes",
      description: {
        overview: "A fresh take on a summer classic, these platform sandals by Steve Madden perfectly blend a sporty silhouette with bohemian espadrille charm. The design features two clean, wide straps and a comfortable elastic ankle band for a secure, easy fit. The real standout is the chunky platform sole, wrapped in traditional braided jute, which offers a significant height boost without sacrificing comfort. They are the ultimate statement sandal for sunny days and fun-filled weekends.",
        features: [
          "Material: The upper straps are crafted from a smooth Faux Leather with a comfortable elastic ankle strap. The platform is trimmed with natural Braided Jute, and the shoe is finished with a durable EVA (Ethylene Vinyl Acetate) outsole.",
          "Fit: An easy pull-on design. The stretchy elastic ankle strap and double instep straps provide a snug and secure fit, while the contoured footbed offers added comfort.",
          "Occasion: The perfect sandal for making a casual statement. Ideal for summer vacations, festivals, weekend brunches, or any daytime event where you want comfort and style.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe the white straps clean with a damp cloth. Avoid getting the jute platform wet; spot clean gently if necessary.",
        ],
        stylingTip: "Embrace a fun, summery vibe by pairing these platforms with a denim mini skirt and a cute cropped top. For a more relaxed, resort-wear look, style them with a pair of flowy, wide-leg linen pants and a simple tank.",
      },
    },
    {
      image: "shoes/sandal8.jpg",
      name: "Double Buckle Footbed Slides",
      price: 899,
      folder: "shoes",
      description: {
        overview: "Meet the ultimate go-anywhere slide. This modern take on the classic comfort sandal is crafted from a single piece of ultra-lightweight, waterproof material, making it incredibly durable and easy to clean. The minimalist design features two adjustable straps and a molded footbed that cradles your foot for all-day comfort. In a clean, crisp white, these Bamboo slides are the perfect practical and stylish choice for beach days, poolside lounging, and everyday errands.",
        features: [
          "Material: Crafted entirely from a single mold of durable, waterproof, and lightweight EVA (Ethylene Vinyl Acetate), including the adjustable buckles.",
          "Fit: A comfortable slip-on design with a supportive molded footbed. The two straps feature adjustable buckles, allowing for a perfectly customized and secure fit.",
          "Occasion: The ultimate practical sandal for casual and wet environments. Perfect for the beach, pool, gym, running errands, or as a comfortable house slipper.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Incredibly easy to clean. Simply rinse with water or wipe down with a damp cloth.",
        ],
        stylingTip: "These versatile slides are perfect for your most casual looks. Pair them with athleisure shorts and a tank top for a sporty vibe, or use them as the ideal poolside shoe with your favorite swimwear and a cover-up. They also work well with baggy jeans and a cropped tee for a relaxed, street-style look.",
      },
    },
    {
      image: "shoes/sandal9.jpg",
      name: "Minimalist Thong Sandals",
      price: 3499,
      folder: "shoes",
      description: {
        overview: "A timeless icon of understated luxury, this is the classic Tory Burch thong sandal. The beauty of this piece lies in its impeccable simplicity and high-quality craftsmanship. Crafted from supple leather, the minimalist design is perfectly punctuated by the signature gold-tone Double T medallion at the vamp. It's an elegant, versatile, and enduringly stylish staple that effortlessly elevates any warm-weather wardrobe, proving that true style is all in the details.",
        features: [
          "Material: The upper straps and cushioned footbed are crafted from premium, supple Leather. The signature medallion is a polished gold-tone Metal Hardware, and the outsole is made of durable rubber for traction.",
          "Fit: A classic and comfortable slip-on thong design. The soft leather straps and lightly cushioned footbed ensure a comfortable fit for all-day wear.",
          "Occasion: The epitome of versatile elegance. Perfect for everything from casual city errands to upscale resort vacations, chic brunches, and garden parties.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, dry cloth. To maintain the leather's suppleness, use a leather conditioner periodically.",
        ],
        stylingTip: "These sandals pair beautifully with polished, classic looks. Style them with tailored linen shorts and a crisp white button-down shirt for a sophisticated daytime look, or with a flowy floral maxi dress for an effortless vacation-ready ensemble.",
      },
    },
    {
      image: "shoes/sandal10.jpg",
      name: "Anagram Cutout Leather Slides",
      price: 38500,
      folder: "shoes",
      description: {
        overview: "A masterpiece of modern craftsmanship from the Spanish luxury house, Loewe, these slides are the epitome of understated elegance. Defined by the iconic Anagram logo intricately cut out from a single piece of supple calfskin, they represent the pinnacle of quiet luxury. The design blends artisanal heritage with a contemporary, minimalist silhouette, featuring a molded footbed for superior comfort. These are not just sandals, but a discreet and sophisticated statement of impeccable taste for the discerning fashion enthusiast.",
        features: [
          "Material: Expertly crafted from premium, buttery-soft Calfskin Leather for the upper. Features a molded leather footbed and a durable leather sole for luxurious comfort.",
          "Fit: An easy slip-on design with a supportive molded footbed that contours to the foot. The wide anagram strap ensures a secure and comfortable fit.",
          "Occasion: Perfect for elevating your everyday style. Ideal for luxury resort getaways, sophisticated city weekends, or adding a touch of understated elegance to any casual ensemble.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: As a luxury leather good, professional cleaning is recommended. Protect from excessive moisture and store in the provided dust bag. Use a soft, dry cloth for light cleaning.",
        ],
        stylingTip: "Embrace a look of effortless sophistication by pairing these slides with flowy, wide-leg linen trousers and a simple silk camisole. They also look impeccable with high-quality, straight-leg white denim and an oversized cashmere sweater for a chic, transitional look.",
      },
    },
    {
      image: "shoes/sandal11.jpg",
      name: "Patina Medallion Thong Sandals",
      price: 3599,
      folder: "shoes",
      description: {
        overview: "A beautiful interpretation of a Tory Burch classic, these thong sandals exude a sense of well-traveled, bohemian charm. The iconic Double T logo is reimagined with a unique patina finish, giving the antiqued gold-tone hardware a vintage, artisanal feel. Crafted from rich, supple leather, the timeless silhouette offers both comfort and effortless style. These sandals are a perfect choice for those who appreciate classic design with a touch of unique character.",
        features: [
          "Material: The upper straps and cushioned footbed are crafted from premium, full-grain Leather. The signature medallion features an Antiqued Gold-Tone Metal Hardware finish. The outsole is made of durable rubber.",
          "Fit: A comfortable slip-on thong design. The soft leather straps and lightly cushioned insole are designed for easy, all-day wear.",
          "Occasion: An incredibly versatile sandal for adding a touch of laid-back luxury. Perfect for weekend getaways, resort vacations, casual brunches, and elevating your everyday summer style.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, dry cloth. Use a quality leather conditioner to maintain the material's suppleness and rich color.",
        ],
        stylingTip: "Lean into the bohemian-luxe vibe by pairing these sandals with a flowy, printed maxi dress or a white broderie anglaise top and denim shorts. The antiqued hardware also looks stunning with earthy tones and natural fabrics like linen and cotton.",
      },
    },
    {
      image: "shoes/sandal12.jpg",
      name: "Mini Logo Patent Thong Sandals",
      price: 3999,
      folder: "shoes",
      description: {
        overview: "A modern and polished take on a timeless silhouette, this Tory Burch sandal is the epitome of sleek sophistication. Crafted from high-shine patent leather, the minimalist thong design is subtly accented with a diminutive version of the iconic Double T logo in polished gold. Perfect for the woman who loves understated branding and a clean aesthetic, these sandals offer a touch of refined glamour to any look, effortlessly transitioning from day to evening.",
        features: [
          "Material: The upper straps and footbed are crafted from glossy Patent Leather. The mini medallion is a polished Gold-Tone Metal Hardware. The outsole is made of durable rubber for comfort and traction.",
          "Fit: A sleek slip-on thong design with slender straps for a refined, barely-there feel. Features a lightly cushioned insole for comfort.",
          "Occasion: Incredibly versatile, these sandals are perfect for a polished city look, a sophisticated resort ensemble, or an evening out. The patent finish makes them easy to dress up.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To maintain the high-gloss finish, wipe clean with a soft, damp cloth and buff gently with a dry cloth. Store away from direct sunlight to prevent discoloration.",
        ],
        stylingTip: "The sleek patent finish pairs perfectly with more structured and polished outfits. Style them with tailored black trousers or a sharp A-line skirt for a chic, monochromatic look. For an evening out, they are the perfect companion to a silky slip dress or elegant jumpsuit.",
      },
    },
    {
      image: "shoes/sandal13.jpg",
      name: "Sculptural Hardware Thong Sandals",
      price: 4250,
      folder: "shoes",
      description: {
        overview: "A stunning example of wearable art, this Tory Burch sandal transforms the classic thong silhouette into a statement piece. Crafted from supple leather, the design is defined by its striking, sculptural hardware—an abstract, polished gold-tone piece that sits elegantly at the vamp. This is more than just a sandal; it's a conversation starter and a testament to modern, artistic design, perfect for the woman who appreciates bold yet sophisticated details.",
        features: [
          "Material: The upper straps and cushioned footbed are crafted from premium Leather. The centerpiece is a substantial, polished Gold-Tone Metal Hardware accent. The outsole is made of durable rubber.",
          "Fit: A comfortable and classic slip-on thong design. The soft leather straps and cushioned insole provide a comfortable fit for extended wear.",
          "Occasion: Perfect for making a sophisticated statement. Ideal for upscale resort wear, art gallery openings, garden parties, or any event where you want a flat sandal that feels exceptionally special and chic.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe the leather clean with a soft, dry cloth. Use a jewelry cloth to gently polish the hardware and maintain its shine. A leather conditioner can be used periodically.",
        ],
        stylingTip: "Let the sculptural hardware be the main focus by pairing these sandals with clean, minimalist silhouettes. They look incredible with a simple black or white column dress for a modern, gallery-ready look, or with flowy silk palazzo pants and a simple tank for an air of luxurious nonchalance.",
      },
    },
    {
      image: "shoes/sandal14.jpg",
      name: "Minimalist T-Strap Sandals",
      price: 1950,
      folder: "shoes",
      description: {
        overview: "The embodiment of understated elegance, these T-strap sandals are a testament to the beauty of impeccable simplicity. Crafted from smooth, high-quality leather in a timeless tan hue, the design features clean lines and a delicate, secure ankle strap. This is the quintessential go-with-everything flat sandal, a forever staple that offers endless versatility and a touch of polished, minimalist charm to any warm-weather ensemble.",
        features: [
          "Material: The straps and insole are crafted from a premium, smooth Leather. The adjustable buckle is a polished Gold-Tone Metal Hardware, and the outsole is made of durable rubber for lasting wear.",
          "Fit: A classic T-strap silhouette with an adjustable ankle strap and slim buckle, designed for a secure and comfortable fit. The flat profile is perfect for all-day walking.",
          "Occasion: The ultimate versatile sandal. Perfect for everyday chic, from running errands to weekend brunches, and an essential companion for any vacation or travel wardrobe.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, dry cloth. To preserve the quality of the leather, use a leather conditioner as needed.",
        ],
        stylingTip: "These timeless sandals pair beautifully with almost anything. For a classic, sophisticated look, style them with white linen trousers and a simple knit top. They also look effortlessly chic with a breezy floral sundress or your favorite pair of denim shorts and a crisp shirt.",
      },
    },
    {
      image: "shoes/sandal15.jpg",
      name: "Double Buckle Cork Footbed Sandals",
      price: 1650,
      folder: "shoes",
      description: {
        overview: "A timeless icon of comfort and laid-back style, these Birkenstock-inspired sandals are an indispensable part of any casual wardrobe. The design is centered around the signature contoured cork footbed, which provides exceptional ergonomic support for all-day wear. Featuring two classic straps with adjustable metal buckles, these sandals offer a perfect, customized fit. They are the ultimate fusion of function and effortless, understated cool.",
        features: [
          "Material: The upper straps are crafted from a durable, high-quality Faux Leather. The star of the shoe is the supportive Cork-Latex Footbed, lined with soft Suede. The outsole is a lightweight, shock-absorbing EVA (Ethylene Vinyl Acetate).",
          "Fit: A classic slip-on design with a deep heel cup and contoured footbed for arch support. The two straps feature adjustable metal pin buckles for a fully customizable and secure fit.",
          "Occasion: The perfect choice for everyday comfort and casual style. Ideal for running errands, weekend outings, travel, and any activity that requires a lot of walking.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe the straps clean with a damp cloth. Avoid soaking the cork footbed. The suede lining can be refreshed by gently brushing it with a suede brush.",
        ],
        stylingTip: "Embrace the effortlessly cool vibe by pairing these sandals with relaxed-fit 'mom' jeans or denim shorts and a simple graphic tee. For an easy-going summer look, style them with a casual linen sundress or a simple t-shirt dress.",
      },
    },
    {
      image: "shoes/sandal16.jpg",
      name: "H-Strap Slide Sandals",
      price: 1990,
      folder: "shoes",
      description: {
        overview: "A timeless icon of understated elegance, these slide sandals are the epitome of effortless chic. Inspired by the legendary Hermès Oran, the design is defined by its signature H cutout strap, which lends a touch of graphic sophistication to the minimalist silhouette. Crafted in a rich cognac hue, these sandals are a sophisticated staple for any modern wardrobe, promising endless versatility and a polished finish to every look, from casual to classic.",
        features: [
          "Material: The upper strap is crafted from a high-quality, smooth Faux Leather. The sandal features a lightly cushioned insole for comfort and a durable rubber outsole for lasting wear.",
          "Fit: An easy and elegant slip-on design. The iconic H-strap is precisely cut to provide a comfortable and secure hold across the instep.",
          "Occasion: The epitome of a versatile, chic sandal. Perfect for everything from resort vacations and city brunches to casual Fridays at the office and weekend shopping trips.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Easy to maintain. Simply wipe clean with a soft, damp cloth to keep them looking their best.",
        ],
        stylingTip: "These sandals are a true wardrobe chameleon. For a classic, sophisticated look, pair them with tailored white shorts and a crisp linen shirt. They also look impeccable with a simple black slip dress or your favorite pair of straight-leg jeans and a classic trench coat.",
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
        <Breadcrumb paths={["Home", "Shoes", "Sandals"]} />
      </div>
  
      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
  }
