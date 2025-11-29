// dresses.js
import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import { CartContext } from "./_app"; // import CartContext

export default function Dresses() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const products = [
    {
      image: "dress1.jpg",
      name: "Ethereal Corset Bishop Sleeve Mini Dress",
      price: 2850,
      description: {
        overview: "Live out your romantic fairytale dreams in this truly enchanting mini dress. Inspired by ethereal, angelic aesthetics, this piece is a masterclass in modern romance. It features a beautifully structured corset bodice with a soft sweetheart neckline that sculpts and defines the figure, contrasted by dreamy, voluminous bishop sleeves crafted from sheer chiffon. The flared mini skirt adds a touch of playful movement, creating a silhouette that is both captivating and utterly unforgettable.",
        features: [
          "Material: The main body is crafted from a high-quality, lightweight Crepe, fully lined for comfort and coverage. The sleeves are made from a delicate, sheer Chiffon.",
          "Fit: A stunning fit-and-flare, A-line mini silhouette. It features a structured, boned corset bodice for a cinched waist, a flattering sweetheart neckline, and dramatic, full-length bishop sleeves.",
          "Occasion: Perfect for making a statement at any special event. Ideal for birthday celebrations, romantic date nights, bridal showers, engagement parties, or as a chic second look for a modern bride.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean recommended to maintain the structure of the corset. Alternatively, hand wash cold with a mild detergent and lay flat to dry. Cool iron on reverse if needed, avoiding the sleeves.",
        ],
        stylingTip: "Embrace the dress's ethereal quality by keeping accessories delicate and refined. Pair it with strappy nude heels or metallic stilettos and minimalist jewelry, such as dainty pearl drop earrings and a simple layered necklace, to create a look of pure, angelic elegance.  ",
      },
    },
    {
      image: "dress2.jpg",
      name: "Sculptural Drape Asymmetric Gown",
      price: 4500,
      description: {
        overview: "A true masterpiece of modern design, this gown is for the woman who understands that fashion is art. Crafted in a sophisticated soft rose hue, this breathtaking piece features an exquisitely draped, sculptural bodice that cascades into an elegant, asymmetrical skirt. The fluid fabric is artfully twisted and folded to create a silhouette that is both powerful and graceful. Designed to make an unforgettable entrance, this couture-inspired gown is the epitome of contemporary elegance.",
        features: [
          "Material: Expertly crafted from a high-quality, medium-weight Bonded Crepe. The fabric has a slight stretch for a figure-flattering fit and a beautiful, fluid drape that holds its sculptural shape.",
          "Fit: A stunning floor-length column silhouette. The gown features an artfully draped, asymmetrical neckline and a fitted waist that flows into a long skirt with a dramatic, cascading side drape and a subtle train.",
          "Occasion: This is a show-stopping piece reserved for the most special of occasions. Perfect for black-tie events, formal weddings, gala dinners, award ceremonies, or any event where you want to exude high-fashion sophistication.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean only. This garment requires professional care to maintain its intricate draping and structure.",
        ],
        stylingTip: "With a dress this architectural, accessories should be sleek and minimal. Opt for polished metal drop earrings and a single, modern cuff bracelet, forgoing a necklace to let the sculptural neckline shine. Complete the look with a sharp, slicked-back bun and minimalist stiletto heels for a powerful, red-carpet-ready finish.",
      },
    },
    {
      image: "dress3.jpg",
      name: "Porcelain Print Cascading Ruffle Gown",
      price: 5200,
      description: {
        overview: "A breathtaking vision of modern romance, this gown is a wearable work of art. The dramatic, voluminous silhouette is crafted from an ethereal organza, printed with a delicate blue pattern reminiscent of fine porcelain. Grand, sculptural puff sleeves frame a fitted bodice, while a magnificent cascading ruffle tumbles down the full, floor-sweeping skirt, creating incredible movement and texture. This is a true fairytale piece, designed for making the grandest of entrances.",
        features: [
          "Material: Crafted from a crisp, lightweight Printed Organza that holds its voluminous shape beautifully. The gown is fully lined with a soft, breathable fabric for complete comfort and coverage.",
          "Fit: A dramatic A-line ball gown silhouette. It features a structured, fitted bodice with a sweetheart neckline, statement-making voluminous puff sleeves, and a full, floor-length skirt defined by a spectacular asymmetrical cascading ruffle.",
          "Occasion: Reserved for the most glamorous and formal of events. Perfect as a show-stopping gown for a black-tie wedding, a debutante ball, a milestone birthday celebration, a gala dinner, or an editorial photoshoot.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean only. This garment requires professional care to preserve the delicate fabric and the integrity of its sculptural details.",
        ],
        stylingTip: "With a gown this magnificent, styling should be elegant and understated. Opt for a sophisticated updo, such as a classic chignon, to showcase the stunning neckline and sleeves. Accessorize with delicate sapphire or diamond drop earrings and simple, strappy silver heels, allowing the dress to remain the undisputed star of the show.",
      },
    },
    {
      image: "dress4.jpg",
      name: "Architectural Organza Ruffle Gown",
      price: 4950,
      description: {
        overview: "A breathtaking vision of avant-garde elegance, this gown is designed for the woman who is not afraid to make a statement. Crafted from a crisp, white organza, this piece is a study in sculptural beauty. Dramatic puff sleeves and a clean square neckline create a modern frame, leading to a fitted bodice that explodes into a full, floor-sweeping skirt. The true showstopper is the magnificent, cascading ruffle that unfurls down the side of the gown, creating a wave of architectural texture and movement. This is couture-inspired artistry, brought to life.",
        features: [
          "Material: Crafted from a crisp, structured Organza that creates a lightweight yet voluminous silhouette. The gown is fully lined with a soft, comfortable fabric.",
          "Fit: A dramatic A-line ball gown silhouette. It features a sharp square neckline, statement puff sleeves, a fitted bodice, and a full, floor-length skirt defined by a monumental, asymmetrical cascading ruffle.",
          "Occasion: A perfect choice for a high-fashion moment. Ideal as a contemporary wedding gown, a dramatic engagement photoshoot dress, a debutante ball, or for any black-tie event where making an unforgettable entrance is paramount.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean only. This garment's architectural integrity requires professional care to maintain its shape and volume.",
        ],
        stylingTip: "This gown is a complete work of art, requiring minimal adornment. Opt for a sleek, minimalist hairstyle like a low ponytail or a sharp bun to showcase the neckline. Accessorize with simple, geometric diamond or silver stud earrings, forgoing a necklace. Complete this powerful, modern look with simple white stiletto heels.",
      },
    },
    {
      image: "dress5.jpg",
      name: "Jeweled Sweetheart Puff Sleeve Mini Dress",
      price: 3250,
      description: {
        overview: "Exude an air of modern royalty in this exquisitely chic mini dress. The clean, sophisticated A-line silhouette is crafted from a structured fabric that holds its shape beautifully. Featuring a flattering sweetheart neckline and dramatic, voluminous puff sleeves, this dress is all about regal charm. The crowning glory is the intricate, light-catching pearl and crystal brooch at the bust, adding a perfect touch of vintage-inspired glamour to this stunning, party-ready piece.",
        features: [
          "Material: Crafted from a high-quality, structured Satin-Finish Crepe. The bust is adorned with a securely attached, intricately detailed Faux Pearl and Crystal Brooch. The dress is fully lined.",
          "Fit: A chic A-line mini silhouette. It features a fitted bodice with a sweetheart neckline and dramatic, sculptural short puff sleeves, flowing into a graceful A-line skirt.",
          "Occasion: The perfect statement piece for any celebration. Ideal for cocktail parties, birthday dinners, holiday events, bachelorette parties, or as a wonderfully chic option for a civil wedding or reception dress.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean recommended to protect the integrity of the jeweled embellishment and the structure of the fabric. Alternatively, spot clean or hand wash with extreme care.",
        ],
        stylingTip: "Let the jeweled detail be the centerpiece of your look by forgoing a necklace. Instead, opt for a pair of elegant statement pearl or crystal drop earrings. Complete the sophisticated ensemble with a pair of sleek, pointed-toe pumps in a metallic or nude hue and a chic, pulled-back hairstyle.",
      },
    },
    {
      image: "dress6.jpg",
      name: "Ditsy Floral Milkmaid Midi Dress",
      price: 2450,
      description: {
        overview: "Embrace the romance of a sun-drenched afternoon in the countryside with this utterly charming milkmaid midi dress. Adorned with a delicate ditsy floral print, this dress captures the essence of the cottagecore aesthetic. It features the signature flattering ruched bust, a sweet tie-front detail, and playful puff sleeves. The flowing midi skirt, complete with a tasteful side slit, adds a touch of modern allure and beautiful movement, making this the perfect piece for any dreamy, sunlit occasion.",
        features: [
          "Material: Crafted from a soft, lightweight, and breathable Rayon Crepe. The fabric has a beautiful drape and is perfect for staying cool and comfortable on warmer days.",
          "Fit: A flattering A-line midi silhouette. It features a fitted milkmaid style bodice with a ruched sweetheart neckline, adjustable tie-front, and elasticated short puff sleeves that can be worn on or off the shoulder. The skirt flows gracefully to a midi length with a high side slit.",
          "Occasion: The quintessential dress for daytime romance. Perfect for picnics in the park, weekend brunches, farmers' market strolls, garden parties, or as your go-to dress for a summer vacation.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Hand wash cold with a mild detergent is recommended to preserve the delicate fabric. Lay flat or hang to dry. Cool iron on the reverse side if necessary.",
        ],
        stylingTip: "Lean into the romantic, pastoral charm of this dress by pairing it with espadrille wedges or simple leather slides. Accessorize with a woven straw tote bag and delicate layered gold necklaces. For a slightly more casual, modern take, style it with a pair of crisp white sneakers and a small crossbody bag.",
      },
    },
    {
      image: "dress7.jpg",
      name: "Romantic Garden Bustier Midi Dress",
      price: 2950,
      description: {
        overview: "Step into a sun-drenched Italian garden with this absolutely stunning midi dress. Channelling the romantic, high-fashion energy of Dolce & Gabbana, this piece is a celebration of vibrant femininity. The dress features a beautifully structured bustier bodice that sculpts and defines the figure, paired with delicate straps. From the cinched waist, a full, voluminous skirt blooms outwards, covered in a lush, painterly floral print that is both timeless and breathtakingly beautiful. This is the ultimate dress for celebrating life's most beautiful moments.",
        features: [
          "Material: Crafted from a high-quality Cotton Sateen that has a subtle sheen and enough structure to hold the voluminous shape of the skirt. The bodice is fully lined and structured for support.",
          "Fit: A classic and incredibly flattering fit-and-flare midi silhouette. It features a sculpted bustier bodice with defined cups, thin adjustable spaghetti straps, a cinched high waist, and a full, pleated A-line skirt that hits at a graceful mid-calf length.",
          "Occasion: The perfect choice for any elegant daytime event. Ideal for garden weddings, upscale brunches, winery tours, summer cocktail parties, or as a show-stopping vacation dress.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean recommended to maintain the structure of the bustier and the vibrancy of the print. Alternatively, hand wash cold with a mild detergent, do not wring, and lay flat to dry in the shade.",
        ],
        stylingTip: "Embrace the dress's Mediterranean glamour by pairing it with strappy white or nude heeled sandals and elegant gold jewelry, such as simple hoop earrings and a delicate bracelet. For a perfect daytime event look, complete the ensemble with a chic woven straw clutch and oversized sunglasses.",
      },
    },
    {
      image: "dress8.jpg",
      name: "Architectural Bow Peplum Wrap Dress",
      price: 3500,
      description: {
        overview: "For the woman who commands the room, this dress is a masterclass in modern power dressing. Presented in a striking cobalt blue, this piece reinvents the classic wrap dress with a bold, couture-inspired twist. The true artistry lies in the waist—an oversized, architectural bow that is beautifully structured, flowing seamlessly into a dramatic, asymmetrical peplum. With its clean lines and unforgettable silhouette, this dress is a wearable piece of art designed for making a powerful and sophisticated statement.",
        features: [
          "Material: Crafted from a high-quality, medium-weight Structured Scuba Crepe. This fabric is chosen for its ability to hold the dramatic architectural shape of the bow and peplum while offering a smooth, flattering fit with a slight stretch for comfort.",
          "Fit: A sharp, fitted wrap dress silhouette that hits at or just above the knee. It features a classic V-neckline, long, slim sleeves, and is defined by its statement, oversized sculptural bow and asymmetrical peplum detail at the waist.",
          "Occasion: An absolute showstopper for any upscale event. Perfect for cocktail parties, modern wedding guest attire, corporate galas, milestone birthday celebrations, or any occasion where you want to look fashion-forward and impeccably chic.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean recommended to preserve the integrity and structure of the architectural bow and peplum. Cool iron on reverse if necessary.",
        ],
        stylingTip: "This dress is the entire statement, so keep accessories sharp and minimal to let the architectural details shine. Opt for sleek, pointed-toe pumps in a metallic silver or crisp white. For jewelry, a pair of simple diamond stud earrings and a modern, sculptural silver cuff are all you need. A slicked-back ponytail or a sharp bob would provide the perfect, polished finishing touch.",
      },
    },
    {
      image: "dress9.jpg",
      name: "Deconstructed Striped Wrap Shirt Dress",
      price: 3100,
      description: {
        overview: "A brilliant piece of fashion-forward design, this dress is for the woman who loves to play with convention. Inspired by the deconstructed aesthetics of brands like Monse, this piece artfully reimagines the classic pinstripe men's shirt into a chic and daring wrap dress. With its asymmetrical neckline, cleverly draped layers, and a silhouette that is both sharp and fluid, this is the epitome of intellectual chic. It’s an effortlessly cool, statement-making piece that is guaranteed to turn heads.",
        features: [
          "Material: Crafted from a high-quality, crisp Cotton Poplin, offering the classic feel and structure of a traditional men's dress shirt.",
          "Fit: A unique asymmetrical wrap mini dress silhouette. It features a deconstructed one-shoulder design with a classic shirt collar and cuff on one side. The waist is cinched with a wrap closure, leading to a layered, asymmetrical skirt that gives the illusion of a shirt tied around the hips.",
          "Occasion: Perfect for making a stylish statement. Ideal for art gallery openings, fashion events, creative industry meetings, stylish city brunches, or cocktail parties where you want to showcase your unique sense of style.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Hand wash cold to preserve the garment's unique structure, or machine wash on a delicate cycle inside a garment bag. Hang to dry. Warm iron as needed.",
        ],
        stylingTip: "This dress is a strong statement on its own, so keep accessories sharp and modern. Pair it with sleek, pointed-toe pumps or strappy stiletto sandals for a polished look. For a more edgy, street-style approach, it looks incredible with chunky white sneakers. Opt for minimalist jewelry, like a pair of modern silver hoop earrings, and a structured clutch to complete the look.",
      },
    },
    {
      image: "dress10.jpg",
      name: "Striped Bardot Bishop Sleeve Midi Dress",
      price: 2890,
      description: {
        overview: "Capture the essence of effortless, seaside elegance with this stunning striped midi dress. The classic blue and white shirting stripe is given a romantic, modern update with a flattering Bardot neckline that beautifully showcases the shoulders. Voluminous bishop sleeves add a touch of drama and sophistication, while a self-tie belt cinches the waist to create a beautiful, feminine silhouette. This is the perfect dress for looking polished yet relaxed on any sun-drenched day.",
        features: [
          "Material: Crafted from a lightweight and breathable Cotton Poplin, ensuring you stay cool and comfortable while looking impeccably chic.",
          "Fit: A flattering A-line midi silhouette. It features a wide, elasticated Bardot neckline that sits comfortably off the shoulder. Dramatic, full-length bishop sleeves gather into classic buttoned cuffs. The waist is defined by a matching, removable self-tie belt, flowing into a breezy midi-length skirt.",
          "Occasion: The epitome of chic day dressing. Perfect for winery tours, upscale brunches, stylish vacations, garden parties, or any elegant daytime event where you want to look effortlessly put-together.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Machine wash cold on a gentle cycle. Hang to dry or tumble dry low. Warm iron as needed to smooth out wrinkles.",
        ],
        stylingTip: "Embrace a chic, resort-ready aesthetic by pairing this dress with woven espadrille wedges and a classic straw boater hat. A simple leather tote bag and oversized sunglasses are all you need to complete this effortlessly polished look. For a more casual feel, it also pairs beautifully with flat leather slides.",
      },
    },
    {
      image: "dress11.jpg",
      name: "Toile de Jouy Bustier Midi Dress",
      price: 2990,
      description: {
        overview: "A timeless ode to classic French elegance, this stunning midi dress is the epitome of romance. Featuring the iconic Toile de Jouy print with its delicate pastoral scenes, this piece evokes the charm of the French countryside. The beautifully structured bustier bodice sculpts the figure, flowing into a full, pleated midi skirt that creates a breathtakingly feminine, vintage-inspired silhouette. This is a truly special dress, designed for creating unforgettable memories.",
        features: [
          "Material: Crafted from a high-quality Cotton Sateen. This fabric has a slight, elegant sheen and provides the perfect amount of structure to maintain the volume of the full skirt. The bodice is fully lined and boned for excellent support.",
          "Fit: A classic and incredibly flattering fit-and-flare midi silhouette. It features a sculpted bustier bodice with defined cups, thin adjustable spaghetti straps, a cinched high waist, and a voluminous, pleated A-line skirt that falls to a graceful mid-calf length.",
          "Occasion: The perfect choice for any elegant daytime or semi-formal event. Ideal for garden weddings, Christenings, upscale luncheons, polo matches, or as a sophisticated option for a summer cocktail party. ",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean is highly recommended to preserve the structure of the bustier and the vibrancy of the print. Alternatively, hand wash cold with a mild detergent, do not wring, and lay flat to dry in the shade.",
        ],
        stylingTip: "Embrace the dress's classic elegance by pairing it with timeless accessories. Classic white or nude pointed-toe pumps and a structured top-handle bag will create a polished, ladylike look. Simple pearl stud earrings are all the jewelry you need. For a final touch of sophistication, style your hair in a soft chignon or elegant waves.",
      },
    },
    {
      image: "dress12.jpg",
      name: "Linen-Blend Belted Shirt Dress",
      price: 2650,
      description: {
        overview: "The epitome of effortless sophistication, this linen-blend shirt dress is a timeless wardrobe essential. Drawing inspiration from classic safari-chic, this piece features all the traditional details you love—a sharp collar, practical chest pockets, and cuffed sleeves. Crafted in a versatile neutral hue, its easy-wearing silhouette can be cinched at the waist with a matching self-tie belt for a more defined, feminine shape. It's the ultimate go-to dress for polished, everyday style.",
        features: [
          "Material: Crafted from a high-quality, breathable Linen-Cotton Blend, making it perfect for warm weather. It offers the classic textured look of linen with the softness and comfort of cotton.",
          "Fit: A classic straight-cut shirt dress silhouette. It features a notched collar, a full button-front placket, short sleeves with turned-up cuffs, and functional flap pockets at the chest. The matching, removable self-tie belt allows you to create a flattering A-line shape. The hem hits at or just above the knee.",
          "Occasion: An incredibly versatile piece. Perfect for a smart-casual day at the office, weekend errands, city sightseeing on vacation, or a polished yet comfortable look for a casual lunch.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Machine wash cold on a gentle cycle. Hang to dry to minimize wrinkling and preserve the fabric's integrity. Warm iron while slightly damp for a crisp, smooth finish.",
        ],
        stylingTip: "For an effortlessly chic weekend look, pair this dress with tan leather slides or classic white sneakers and a woven straw tote bag. To elevate it for a more professional setting, style it with block-heeled sandals or pointed-toe flats, a structured leather handbag, and simple gold jewelry.",
      },
    },
    {
      image: "dress13.jpg",
      name: "Buttercup Floral Pleated Mini Dress",
      price: 2550,
      description: {
        overview: "Like a bottle of pure sunshine, this dress is designed to bring joy to any occasion. The vibrant buttercup yellow hue, dotted with a delicate floral print, is instantly uplifting. This piece's playful charm is all in the details: a flattering bustier-style bodice with a sweet neckline flows into a full, flirty mini skirt made of crisp accordion pleats. It's a fun, feminine, and utterly charming dress that’s guaranteed to make you smile.",
        features: [
          "Material: Crafted from a Lightweight Pleated Polyester. The fabric is chosen for its ability to hold the sharp pleats perfectly while remaining light and airy. The dress is fully lined for comfort and coverage.",
          "Fit: A youthful fit-and-flare mini silhouette. It features a fitted bustier-style bodice with a sweetheart neckline and thin, adjustable spaghetti straps. A cinched high waist gives way to a voluminous, A-line skirt crafted entirely from beautiful accordion pleats.",
          "Occasion: The perfect dress for any happy, sun-filled day. Ideal for brunch with friends, summer garden parties, daytime celebrations, a fun date, or as a cheerful vacation essential.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Hand wash cold with a mild detergent is highly recommended to preserve the integrity of the pleats. Lay flat to dry. Do not wring. Do not iron the pleats.",
        ],
        stylingTip: "Embrace the dress's playful spirit with your styling. For a cool, casual vibe, pair it with a pair of crisp white sneakers and a small denim jacket. To dress it up for a party, opt for strappy white or nude heeled sandals and accessorize with delicate gold jewelry and a small crossbody bag.",
      },
    },
    {
      image: "dress14.jpg",
      name: "Colorblock Check Draped Shirt Dress",
      price: 3300,
      description: {
        overview: "A true masterpiece of sartorial engineering, this dress is for the woman who views fashion as a form of self-expression. This piece brilliantly deconstructs the classic shirt dress, artfully combining two distinct yet complementary check patterns. A structured collar and a traditional cuffed sleeve on one side provide a familiar anchor, while the rest of the garment unfolds into an asymmetrical marvel of draping and layering. It's an intellectual, avant-garde piece that is both a conversation starter and a testament to modern design.",
        features: [
          "Material: Crafted from two distinct, high-quality Cotton Poplin fabrics, each with its own unique check pattern. The material is crisp, breathable, and holds the structural details beautifully.",
          "Fit: An innovative, asymmetrical midi dress silhouette. It features a classic shirt collar and a partial button placket. The design is defined by its clever colorblocking and a draped panel that wraps across the body, creating a cinched waist and a dynamic, uneven hemline.",
          "Occasion: Perfect for making a sophisticated, high-fashion statement. Ideal for creative industry events, gallery openings, stylish business luncheons, or any occasion where unique, intelligent design is appreciated.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Dry clean recommended to preserve the intricate draping and structure. Alternatively, machine wash cold on a delicate cycle in a garment bag. Hang to dry immediately and warm iron as needed.",
        ],
        stylingTip: "This dress is a powerful statement piece that calls for clean, modern accessories. Pair it with sleek, architectural mule sandals or sharp pointed-toe ankle boots. Opt for minimalist jewelry, such as a pair of sculptural silver earrings, and carry a structured leather tote to complete a look that is polished, confident, and unapologetically chic.",
      },
    },
    {
      image: "dress15.jpg",
      name: "Asymmetrical Striped Twist-Front Dress",
      price: 3350,
      description: {
        overview: "A stunning example of modern, deconstructed design, this dress transforms the classic striped shirt into a work of wearable art. It features a daring one-shoulder silhouette, with a traditional collar and cuffed sleeve on one side, beautifully contrasted by an exposed shoulder. The true genius lies in the artful twist-front detail, which gathers the fabric to create a flattering drape across the body and an elegant, asymmetrical hem. This is effortless, high-fashion chic for the modern woman who isn't afraid to stand out.",
        features: [
          "Material: Crafted from a high-quality, crisp Cotton Poplin, offering the classic structure and breathability of a traditional men's dress shirt.",
          "Fit: A unique, asymmetrical midi silhouette. The design features a one-shoulder neckline with a full collar and a single long sleeve. A clever twist-front detail cinches the waist and creates a beautiful, flowing drape through the skirt, which falls to an uneven, midi-length hem.",
          "Occasion: The perfect piece for a stylish daytime event or a chic evening out. Ideal for fashion events, upscale brunches, creative meetings, cocktail parties, or a sophisticated city vacation look.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Machine wash cold on a delicate cycle, preferably inside a garment bag to protect the unique construction. Hang to dry. Warm iron as needed.",
        ],
        stylingTip: "Let the dress's architectural design take center stage by keeping accessories modern and minimal. Pair it with sleek, strappy heeled sandals or pointed-toe mules. For jewelry, opt for a pair of modern sculptural earrings and forgo a necklace to highlight the unique neckline. A structured clutch or a minimalist handbag will complete this sophisticated, effortlessly cool ensemble.",
      },
    },
    {
      image: "dress16.jpg",
      name: "Floral Tiered Ruffle Halter Mini Dress",
      price: 2400,
      description: {
        overview: "A charming and flirty piece that's perfect for any sun-drenched occasion. This delightful mini dress features a flattering halter neckline that ties elegantly at the neck, leading to a chic open back. The star of the show is the series of cascading, tiered ruffles that make up the skirt, creating beautiful volume and playful movement with every step. Adorned with a sweet floral print, this dress is the epitome of fun, feminine, summer style.",
        features: [
          "Material: Crafted from a soft and airy Lightweight Chiffon. The dress is fully lined to ensure complete coverage while remaining breezy and comfortable.",
          "Fit: A flirty fit-and-flare mini silhouette. It features a halter neckline that ties at the nape of the neck, a fitted bodice with an open back, and a cinched waist that flows into a voluminous, three-tiered ruffled A-line skirt.",
          "Occasion: The ultimate dress for summer celebrations. Perfect for vacations, beach parties, resort wear, brunch with friends, a casual date night, or as a fun and comfortable wedding guest dress for a destination wedding.",
          "Sizes: Available in sizes S, M, L, XL.",
          "Care: Hand wash cold with a mild detergent to protect the delicate fabric and ruffles. Lay flat or hang to dry. Avoid wringing. Cool iron on reverse if necessary.",
        ],
        stylingTip: "Embrace the playful, summery vibe of this dress by pairing it with strappy heeled sandals or a pair of chic espadrille wedges. Keep jewelry simple with a pair of delicate gold hoop earrings and a few stacked bracelets. Pull your hair into a high ponytail or a soft updo to beautifully showcase the halter neckline and open back detail.",
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
        <Breadcrumb paths={["Home", "Dresses"]} />
      </div>

      <main className="pt-6 max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
  );
}
