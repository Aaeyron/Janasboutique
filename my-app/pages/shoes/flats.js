// flats.js
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import { CartContext } from "../_app";

export default function Flats() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "shoes/flat1.jpg",
      name: "Vintage Spectator Bow Flats",
      price: 1950,
      folder: "shoes",
      description: {
        overview: "Channel your inner retro bombshell with these incredibly charming spectator flats. This playful design features a classic pointed toe in a delightful two-tone combination of high-shine red and cream patent leather. Complete with traditional brogue detailing and a darling lace-up bow, these flats are brimming with vintage-inspired personality. A peek inside reveals a fun polka-dot lining, adding a secret touch of whimsy to this standout pair.",
        features: [
          "Materials: The upper is crafted from a glossy, two-tone Patent Faux Leather. The interior is lined with a breathable synthetic fabric, and the outsole is a durable Thermoplastic Rubber (TPR).",
          "Fit: A comfortable slip-on ballet flat design with a chic pointed toe. Provides a polished look without sacrificing all-day comfort.",
          "Occasion: Perfect for adding a pop of personality to your everyday look. Ideal for creative workplaces, weekend brunches, casual dates, or pairing with vintage-inspired outfits for a themed event.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To maintain the brilliant shine, wipe clean with a soft, damp cloth and buff gently with a dry cloth.",
        ],
        stylingTip: "Embrace the full retro aesthetic by pairing these flats with a full A-line skirt and a simple fitted top. For a more modern, casual take, let them be the playful statement piece with cuffed dark-wash skinny jeans and a classic white t-shirt or a simple black turtleneck.",
      },
    },
    {
      image: "shoes/flat2.jpg",
      name: "Laser-Cut & Studded Bow Flats",
      price: 1990,
      folder: "shoes",
      description: {
        overview: "Striking the perfect balance between sweet and edgy, these beautiful flats are a true standout piece. The classic pointed-toe silhouette is rendered in a soft, blush pink suede and adorned with a delicate bow and intricate laser-cut detailing. An unexpected line of polished silver studs frames the shoe, adding a touch of modern, rock-chic glamour to the otherwise feminine design. These are the perfect flats for showcasing your unique, multi-faceted style.",
        features: [
          "Materials: The upper is crafted from a high-quality, soft Faux Suede. The shoe is embellished with polished Metal Studs. It features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A comfortable slip-on ballet flat design with a sharp pointed toe that gives a chic, leg-lengthening illusion.",
          "Occasion: A wonderfully versatile flat that can elevate any look. Perfect for a stylish day at the office, weekend brunches, shopping trips, or a casual date night.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any surface dirt. The metal studs can be wiped with a soft, dry cloth.",
        ],
        stylingTip: "Play with contrast by pairing these flats with light-wash distressed skinny jeans and a simple white t-shirt to let the shoe's unique details shine. For a softer, more feminine look, style them with a crisp white A-line skirt or tailored grey ankle trousers.",
      },
    },
    {
      image: "shoes/flat3.jpg",
      name: "Minimalist Square Toe Flats",
      price: 1890,
      folder: "shoes",
      description: {
        overview: "A masterclass in modern, understated elegance. These flats are defined by their clean lines, uncluttered design, and a chic, contemporary square toe. Crafted in a versatile off-white, they are the epitome of minimalist sophistication. This is the essential everyday shoe for the woman who appreciates timeless style and effortless comfort, proving that simplicity is the ultimate form of sophistication.",
        features: [
          "Materials: The upper is crafted from a smooth, high-quality Faux Leather. It features a lightly cushioned insole for all-day comfort and a durable, flexible Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on ballet flat silhouette, updated with a modern square toe that provides a comfortable and stylish fit.",
          "Occasion: The ultimate versatile flat. Perfect for chic workwear, weekend errands, traveling, or elevating your everyday casual look. They seamlessly transition from the office to a casual dinner.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth to remove any scuffs or dirt.",
        ],
        stylingTip: "Embrace a modern, minimalist aesthetic by pairing these flats with wide-leg tailored trousers or culottes and a simple knit top. For an effortlessly chic weekend look, style them with straight-leg, light-wash jeans and an oversized blazer or a classic trench coat.",
      },
    },
    {
      image: "shoes/flat4.jpg",
      name: "Dalmatian Print Ankle Strap Flats",
      price: 2050,
      folder: "shoes",
      description: {
        overview: "Unleash your playful side with these effortlessly chic Topshop-inspired flats. The elegant D'Orsay silhouette is given a bold, graphic update with a striking mix of materials. A classic black pointed toe provides a sophisticated foundation, while the heel is wrapped in an eye-catching dalmatian print for a dash of unexpected fun. Secured with a delicate ankle strap, these flats are the perfect way to add a pop of personality and modern flair to any outfit.",
        features: [
          "Materials: A chic mixed-media design. The toe cap is crafted from a soft Faux Suede, while the heel counter features a Printed Faux Pony Hair material. The insole is lightly cushioned, and the outsole is a durable Thermoplastic Rubber (TPR).",
          "Fit: An elegant pointed-toe D'Orsay silhouette that flatters the foot. The thin, adjustable ankle strap with a metal buckle ensures a secure and comfortable fit.",
          "Occasion: Perfect for making a stylish statement in your everyday wardrobe. Ideal for creative office environments, weekend brunches, shopping trips, or adding a fashionable twist to a simple evening look.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: For the faux suede portion, gently brush with a soft-bristled brush. For the printed heel, wipe clean with a soft, slightly damp cloth. Avoid excessive rubbing. ",
        ],
        stylingTip: "Let the print be the star of the show. Pair these statement flats with a simple, monochromatic outfit, such as black cropped trousers and a crisp white shirt. For a bolder look, style them with a vibrant red or cobalt blue shift dress to create a stunning, fashion-forward contrast. ",
      },
    },
    {
      image: "shoes/flat5.jpg",
      name: "Pointed Ankle Strap D'Orsay Flats",
      price: 1980,
      folder: "shoes",
      description: {
        overview: "The quintessential chic flat, this design offers the perfect blend of sophistication and comfort. The elegant D'Orsay silhouette beautifully exposes the arch of the foot, while a sharp pointed toe and a delicate ankle strap create a flattering and secure fit. Rendered in a timeless, versatile black, these are the indispensable flats that will take you from a day at the office to an evening out with polished, effortless grace.",
        features: [
          "Materials: The upper is crafted from a high-quality, soft Faux Suede. It features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A flattering D'Orsay silhouette with a sharp pointed toe. The thin, adjustable ankle strap with a slim metal buckle provides a secure and comfortable fit throughout the day.",
          "Occasion: An incredibly versatile staple. Perfect for the office, weekend brunch, date nights, or any casual to semi-formal event where you want a polished alternative to heels.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any dust or dirt.",
        ],
        stylingTip: "The ankle strap and cutaway design are details meant to be seen. Pair them with tailored cropped trousers or a chic pencil skirt for a sophisticated work-ready look. For a stylish weekend ensemble, they look perfect with cuffed skinny jeans and a classic silk blouse.",
      },
    },
    {
      image: "shoes/flat6.jpg",
      name: "Mixed Media D'Orsay Flats",
      price: 1990,
      folder: "shoes",
      description: {
        overview: "A perfect example of modern, thoughtful design, these chic flats elevate the classic D'Orsay silhouette with a sophisticated play on textures. A sharp pointed toe is defined by a soft suede cap, which provides a beautiful contrast to the smooth leather body of the shoe. Rendered in a versatile palette of warm neutrals, this is a supremely elegant and comfortable flat, designed to add a touch of understated polish to your everyday wardrobe.",
        features: [
          "Materials: A sophisticated mixed-media combination of a smooth Faux Leather body and a soft Faux Suede toe cap. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: An elegant slip-on D'Orsay silhouette with a pointed toe. The cutaway design is flattering, while the full heel provides a secure and comfortable fit.",
          "Occasion: The ultimate sophisticated work flat. Perfect for the office, business meetings, or professional events. They also transition beautifully to a smart-casual weekend look.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: For the faux leather portion, wipe clean with a soft, damp cloth. For the faux suede toe cap, use a soft-bristled brush to gently remove any dirt.",
        ],
        stylingTip: "The neutral tones and mixed textures pair beautifully with professional attire. Style them with crisp white linen trousers and a silk blouse for a chic, breezy look, or with a tailored navy blue sheath dress for a powerful and polished office ensemble.",
      },
    },
    {
      image: "shoes/flat7.jpg",
      name: "Woven Strap Ankle Flats",
      price: 2050,
      folder: "shoes",
      description: {
        overview: "A beautiful, elevated take on the classic pointed-toe flat. Inspired by iconic J.Crew designs, this shoe's charm lies in its intricate details. A series of delicate, woven straps gracefully crisscross the foot, adding a touch of texture and visual interest. Finished with a secure ankle strap, these black suede flats are the epitome of sophisticated comfort, perfect for the woman who appreciates thoughtful, timeless design.",
        features: [
          "Materials: The upper is crafted from a high-quality, soft Faux Suede. It features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A chic pointed-toe silhouette featuring an intricate woven strap design over the vamp. A delicate, adjustable ankle strap with a slim metal buckle ensures a secure fit.",
          "Occasion: An incredibly versatile flat that bridges the gap between casual and dressy. Perfect for stylish office wear, smart-casual weekend looks, and dinner dates.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any surface dirt or dust.",
        ],
        stylingTip: "The beautiful strap detail deserves to be shown off. Pair these flats with tailored, ankle-length trousers or a sharp pencil skirt for a polished and professional look. For a chic weekend outfit, style them with cuffed boyfriend jeans and a simple cashmere sweater to let the intricate design stand out.",
      },
    },
    {
      image: "shoes/flat8.jpg",
      name: "Braided Tassel Ankle-Wrap Flats",
      price: 2100,
      folder: "shoes",
      description: {
        overview: "Bohemian elegance meets sophisticated design in these stunning Le Lis Blanc-inspired flats. The classic pointed-toe silhouette is transformed by a network of intricate, beautifully braided straps that create a chic caged effect. The design culminates in long, wraparound ankle ties finished with playful tassels, adding a touch of worldly charm and movement. Rendered in a rich cognac brown, these are the perfect statement flats for the modern globetrotter.",
        features: [
          "Materials: The upper, straps, and tassels are crafted from a high-quality, smooth Faux Leather. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A pointed-toe silhouette with a secure caged design of braided straps. The long, wraparound ankle straps allow for a customizable fit and can be tied at the front or back.",
          "Occasion: The perfect shoe for elevating your warm-weather wardrobe. Ideal for stylish vacations, summer days in the city, weekend brunches, garden parties, or any event that calls for an effortlessly chic look.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth. Take care to keep the tassels from getting tangled when storing.",
        ],
        stylingTip: "Embrace a breezy, bohemian aesthetic by pairing these flats with a flowy white linen midi dress or a simple, earthy-toned tunic. For a more contemporary look, style them with cropped, raw-hem white jeans and a silk camisole, allowing the intricate ankle ties and rich cognac color to be the focal point of your outfit.",
      },
    },
    {
      image: "shoes/flat9.jpg",
      name: "Cascading Ruffle Ankle Strap Flats",
      price: 2150,
      folder: "shoes",
      description: {
        overview: "Who says flats can't be dramatic? These stunning, Aquazzura-inspired flats are the epitome of romantic glamour. A classic pointed-toe silhouette is completely transformed by a lavish, cascading ruffle that elegantly drapes down the front of the foot. Crafted from soft black suede and secured with a delicate ankle strap, this shoe is a work of art, designed for the woman who loves to make a sophisticated, fashion-forward statement without sacrificing comfort.",
        features: [
          "Materials: The upper and ruffle detail are crafted from a high-quality, soft Faux Suede. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A chic pointed-toe silhouette. The design is secured by a thin, adjustable ankle strap with a metal buckle, while the dramatic ruffle provides beautiful coverage over the vamp.",
          "Occasion: The perfect alternative to heels for a special event. Ideal for weddings, formal dinners, holiday parties, or any evening occasion where you want to be both comfortable and exceptionally stylish.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any dust or dirt, taking care around the delicate ruffle.",
        ],
        stylingTip: "This statement shoe is designed to be the focal point of your outfit. Pair them with simple, elegant silhouettes to let the ruffle detail shine. They look incredible with black tailored, cropped trousers and a silk camisole for a look of modern sophistication, or with a sleek midi dress that allows the dramatic ruffle to take center stage.",
      },
    },
    {
      image: "shoes/flat10.jpg",
      name: "Colorblock D'Orsay Flats",
      price: 1980,
      folder: "shoes",
      description: {
        overview: "A modern, graphic take on a timeless silhouette. These chic D'Orsay flats are designed for the woman who loves a playful pop of color. The classic pointed-toe design is rendered in a sophisticated neutral beige, beautifully contrasted by a vibrant, sunny yellow toe cap. The elegant cutaway sides and clean lines make this a supremely comfortable and stylish choice for adding a dash of contemporary energy to any look.",
        features: [
          "Materials: The upper is crafted from a high-quality, smooth Faux Leather. It features a lightly cushioned insole for all-day comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: An elegant slip-on D'Orsay silhouette with a sharp pointed toe. The cutaway design flatters the arch of the foot while the full heel provides a secure fit.",
          "Occasion: The perfect flat to brighten up your work or weekend wardrobe. Ideal for the office, creative meetings, weekend brunches, or simply adding a cheerful touch to your everyday outfits.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe clean with a soft, damp cloth to remove any scuffs or dirt.",
        ],
        stylingTip: "Let the bold colorblocking shine by pairing these flats with classic pieces. They look exceptionally chic with navy blue tailored, cropped trousers and a simple white blouse. For a fresh, casual weekend look, style them with a classic denim shirt dress or dark-wash skinny jeans to let the sunny yellow toe cap truly pop.",
      },
    },
    {
      image: "shoes/flat11.jpg",
      name: "Whimsical Bee Embroidered Loafers",
      price: 2250,
      folder: "shoes",
      description: {
        overview: "Inject a dose of high-fashion whimsy into your everyday wardrobe with these charming Gucci-inspired loafers. The timeless, preppy silhouette of the classic black loafer is given a delightful and unexpected twist with a large, beautifully detailed bee embroidered in vibrant threads. This playful embellishment transforms a staple shoe into a unique conversation piece, perfect for the woman who loves to express her personality through her style.",
        features: [
          "Materials: The upper is crafted from a smooth, high-quality Faux Leather. The vamp is adorned with intricate, multi-colored Thread Embroidery. Features a lightly cushioned insole and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on loafer design with a comfortable, slightly rounded almond toe. Designed for an easy, comfortable fit for all-day wear.",
          "Occasion: The perfect shoe for adding a touch of personality to your daily looks. Ideal for creative workplaces, weekend outings, brunch with friends, or any casual setting where you want to show off your unique style.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Wipe the faux leather clean with a soft, damp cloth. Be very gentle around the embroidered area to avoid snagging the threads.",
        ],
        stylingTip: "Embrace a modern, preppy aesthetic by pairing these loafers with tailored, cropped black trousers and a crisp white button-down shirt, letting the whimsical bee embroidery take center stage. For a chic weekend look, style them with light-wash, straight-leg jeans and a simple oversized knit sweater.",
      },
    },
    {
      image: "shoes/flat12.jpg",
      name: "Embroidered Bee Velvet Loafers",
      price: 2350,
      folder: "shoes",
      description: {
        overview: "Exuding an air of decadent, aristocratic charm, these stunning Gucci-inspired loafers are the epitome of everyday luxury. The classic loafer silhouette is elevated to new heights in a plush, black velvet, providing a rich canvas for the star of the show: a large, exquisitely detailed bee, embroidered in shimmering gold thread. This is a shoe that feels both timeless and wonderfully whimsical, perfect for adding an opulent and sophisticated touch to any outfit.",
        features: [
          "Materials: The upper is crafted from a high-quality, plush Faux Velvet. The vamp is adorned with a rich, metallic Gold Thread Embroidery. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on loafer design with a comfortable almond toe, offering a sophisticated and easy-to-wear fit.",
          "Occasion: Perfect for elevating your smart-casual and evening ensembles. Ideal for holiday parties, stylish dinners, art gallery openings, or adding a touch of luxe and personality to your workwear.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux velvet should be kept dry. Use a soft-bristled brush, moving in the direction of the nap, to remove any surface dust. Be very gentle around the embroidered area to avoid snagging the metallic threads.",
        ],
        stylingTip: "Embrace the luxurious feel of these loafers. For a chic, texture-rich evening look, style them with black velvet or satin ankle-length trousers and a simple silk camisole. For a sophisticated daytime outfit, pair them with tailored tweed or plaid trousers and a fine-knit cashmere sweater.",
      },
    },
    {
      image: "shoes/flat13.jpg",
      name: "Script 'Love' Embroidered Loafers",
      price: 2290,
      folder: "shoes",
      description: {
        overview: "Wear your heart on your feet with these irresistibly charming loafers. The classic, sophisticated silhouette of a black suede loafer is transformed into a declaration of love, featuring the word Love beautifully embroidered in a romantic, flowing red script across the pair. This delightful and whimsical detail makes for a chic conversation starter, adding a touch of playful Parisian elegance to your everyday look.",
        features: [
          "Materials: The upper is crafted from a high-quality, soft Faux Suede. The vamp is adorned with a vibrant Red Thread Embroidery. Features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on loafer design with a comfortable, elegant almond toe. Designed for a comfortable, true-to-size fit for all-day wear.",
          "Occasion: The perfect shoe for adding a dose of personality and romance to your daily wardrobe. Ideal for casual dates, weekend brunches, shopping trips, or bringing a playful touch to your creative work attire.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any surface dust. Be very gentle around the embroidered area to avoid snagging the delicate threads.",
        ],
        stylingTip: "Let these charming loafers be the sweet focal point of your outfit. They look exceptionally chic when paired with classic, simple pieces. Style them with black cropped trousers and a classic Breton striped shirt for an effortlessly cool, Parisian-inspired look. They also add a perfect playful touch to dark-wash skinny jeans and a simple white blouse.",
      },
    },
    {
      image: "shoes/flat14.jpg",
      name: "Classic Pointed-Toe Suede Flats",
      price: 1950,
      folder: "shoes",
      description: {
        overview: "A timeless staple reimagined in a bold, confident hue. These classic pointed-toe flats are crafted from a rich, vibrant red suede, offering the perfect way to inject a sophisticated pop of color into any wardrobe. With their clean lines and elegant silhouette, they provide the polish of a pump with the comfort of a flat. This is the ultimate power flat—a versatile and chic choice that proves you don't need a heel to make a statement.",
        features: [
          "Materials: The upper is crafted from a high-quality, soft Faux Suede. It features a lightly cushioned insole for all-day comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A classic slip-on ballet flat design with a sharp pointed toe that creates a chic, leg-lengthening illusion.",
          "Occasion: Incredibly versatile. Perfect for brightening up your office attire, adding a stylish touch to your weekend denim, or as a comfortable yet chic option for a dinner date or casual event.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To preserve the vibrant color and texture, keep the faux suede dry. Use a soft-bristled brush to gently remove any surface dust or dirt.",
        ],
        stylingTip: "Embrace a touch of effortless Parisian chic by pairing these red flats with dark-wash skinny jeans and a classic Breton striped top. They also serve as the perfect, vibrant counterpoint to an all-black or all-navy ensemble, adding a bold and sophisticated splash of color.",
      },
    },
    {
      image: "shoes/flat15.jpg",
      name: "Pleated Bow Suede Flats",
      price: 2150,
      folder: "shoes",
      description: {
        overview: "A stunning example of feminine sophistication, these beautiful flats are a true work of art. The classic pointed-toe silhouette is crafted from a rich, deep navy suede and crowned with a large, architectural bow. The intricate pleating of the bow adds a modern, sculptural element to the shoe, creating a look that is both timelessly elegant and uniquely stylish. This is the perfect flat for when you want to feel polished, put-together, and effortlessly chic.",
        features: [
          "Materials: The upper and bow detail are crafted from a high-quality, soft Faux Suede. It features a lightly cushioned insole for comfort and a durable Thermoplastic Rubber (TPR) outsole.",
          "Fit: A comfortable slip-on ballet flat design with a sharp pointed toe. The prominent, structured bow on the vamp is the key design feature.",
          "Occasion: The perfect go-to for polished comfort. Ideal for the office, important meetings, daytime events, dressy brunches, or any occasion that calls for a sophisticated alternative to heels.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: Faux suede should be kept dry. Use a soft-bristled brush to gently remove any dust or dirt, taking special care around the pleated bow detail.",
        ],
        stylingTip: "The rich navy hue and elegant design pair beautifully with crisp neutrals. For a powerful and chic professional look, style them with tailored white or cream trousers and a simple silk blouse. They also serve as the perfect finishing touch to a classic sheath dress in a complementary color like grey, beige, or even a soft pink.",
      },
    },
    {
      image: "shoes/flat16.jpg",
      name: "Floral Bloom Slide Sandals",
      price: 1850,
      folder: "shoes",
      description: {
        overview: "Step into a tropical paradise with these fun and fabulous slide sandals. The simple, comfortable silhouette is completely transformed by a large, three-dimensional floral appliqué that blooms across the strap. Rendered in a vibrant, saturated red, these slides are a pure expression of summer joy. They are the perfect statement-making sandal for adding a playful and glamorous touch to all your warm-weather adventures.",
        features: [
          "Materials: The strap and floral embellishment are crafted from a soft, petal-like Faux Suede. The footbed is lightly contoured for comfort, and the outsole is a durable Thermoplastic Rubber (TPR).",
          "Fit: An easy and comfortable slip-on slide design, featuring a single wide strap across the vamp to hold the foot securely.",
          "Occasion: The ultimate vacation and summer sandal. Perfect for poolside lounging, beach trips, casual summer parties, or adding a fun, tropical flair to your weekend errands.",
          "Sizes: Available in sizes UK 36 - 41.",
          "Care: To maintain the shape and color of the floral detail, keep these slides dry. The strap can be gently cleaned with a soft-bristled brush.",
        ],
        stylingTip: "Let these vibrant slides be the playful focal point of your summer outfits. They look incredible with a simple white linen sundress or a breezy, off-the-shoulder maxi dress. For a more casual look, pair them with cuffed denim shorts and a simple tank top to instantly elevate your style with a pop of color and personality.",
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
        <Breadcrumb paths={["Home", "Shoes", "Flats"]} />
      </div>

      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
