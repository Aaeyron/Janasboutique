import { useState, useEffect } from "react";

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  // ✅ Detect if product is footwear (sandals, heels, flats)
  const isFootwear =
    product?.category?.toLowerCase().includes("sandal") ||
    product?.category?.toLowerCase().includes("heel") ||
    product?.category?.toLowerCase().includes("flat") ||
    product?.image?.toLowerCase().includes("sandal") ||
    product?.image?.toLowerCase().includes("heel") ||
    product?.image?.toLowerCase().includes("flat");

  // ✅ Detect if product is a perfume
  const isPerfume =
    product?.category?.toLowerCase().includes("perfume") ||
    product?.image?.toLowerCase().includes("perfume") ||
    product?.name?.toLowerCase().includes("perfume");

  // ✅ Detect if product is a earring
  const isEarring =
    product?.category?.toLowerCase().includes("earring") ||
    product?.image?.toLowerCase().includes("earring");

  // ✅ Detect if product is a necklace
  const isNecklace =
    product?.category?.toLowerCase().includes("necklace") ||
    product?.image?.toLowerCase().includes("necklace");

  // ✅ Detect if product is a bracelet
  const isBracelet =
    product?.category?.toLowerCase().includes("bracelet") ||
    product?.image?.toLowerCase().includes("bracelet");

  // ✅ Detect if product is a handbag
  const isHandbag =
    product?.category?.toLowerCase().includes("handbag") ||
    product?.category?.toLowerCase().includes("bag") ||
    product?.image?.toLowerCase().includes("bag");

  // ✅ Detect if product is a ring
  const isRing =
    product?.category?.toLowerCase().includes("ring") ||
    product?.image?.toLowerCase().includes("ring");

  // ✅ Default size per category
  const defaultSize = isFootwear
    ? "39"
    : isPerfume
    ? "50ml"
    : isNecklace
    ? "16 inches"
    : isBracelet
    ? "Medium (6.5–7 inches)"
    : isRing
    ? "6" // default ring US size
    : isHandbag
    ? null
    : "M";

  const [size, setSize] = useState(defaultSize);
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!product) return null;

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
      document.body.style.overflow = "";
    }, 300);
  };

  // ✅ Size labels for clothes only (not perfume, footwear, necklace, bracelet, ring)
  const sizeLabels = { S: "Small", M: "Medium", L: "Large" };

  // ✅ Determine the displayed price for perfumes
  const displayedPrice = isPerfume && product.prices ? product.prices[size] : product.price;

  // ✅ Dynamic size options
  const sizeOptions = isFootwear
    ? ["36", "37", "38", "39", "40", "41"]
    : isPerfume
    ? ["30ml", "50ml", "75ml", "100ml"]
    : isNecklace
    ? ["14 inches", "16 inches", "18 inches", "20 inches", "24 inches"]
    : isBracelet
    ? ["Small (6-6.5 inches)", "Medium (6.5-7 inches)", "Large (7-7.5 inches)"]
    : isRing
    ? ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5"] // ✅ updated ring sizes
    : ["S", "M", "L"];

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Modal */}
      <div
        className={`relative bg-white rounded-none p-6 w-[95%] max-w-4xl h-[600px] shadow-lg flex gap-8 transition-all duration-300 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 font-bold text-2xl cursor-pointer hover:text-red-600 transition-colors"
          onClick={handleClose}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          ×
        </button>

        {/* Left side - Image */}
        <div className="w-1/2 flex items-center justify-center bg-white relative">
          <img
            src={
              product.image.startsWith("/images/")
                ? product.image
                : `/images/${product.image}`
            }
            alt={product.name || "Product"}
            className="object-contain max-h-[500px] w-full"
          />
        </div>

        {/* Right side - Info */}
        <div
          className="w-1/2 flex flex-col overflow-hidden"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          <h2 className="text-2xl mb-3 text-black">{product.name}</h2>
          <p className="text-gray-600 mb-4">₱{Number(displayedPrice).toLocaleString()}</p>

          {/* Sizes (hidden for handbags & earrings) */}
          {!isHandbag && !isEarring && (
            <div className="mb-4">
              <p className="mb-2 text-black">
                {isPerfume
                  ? `Size: ${size}`
                  : isFootwear
                  ? `Size: ${size}`
                  : isNecklace
                  ? `Length: ${size}`
                  : isBracelet
                  ? `Wrist Size: ${size}`
                  : isRing
                  ? `Ring Size: ${size}` // ✅ ring label
                  : `Size: ${sizeLabels[size] || size}`}
              </p>

              <div>
                {sizeOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-1 mr-2 rounded border transition ${
                      size === s ? "bg-black text-white" : "bg-gray-200 text-black"
                    }`}
                    style={{ fontWeight: "normal" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-black">Quantity:</span>
            <div className="flex items-center border border-black rounded">
              <button
                className="px-3 py-1 border-r border-black text-black bg-white hover:bg-[#f5f5dc] transition cursor-pointer"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 text-black">{quantity}</span>
              <button
                className="px-3 py-1 border-l border-black text-black bg-white hover:bg-[#f5f5dc] transition cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 flex-1 min-h-0">
            <h3 className="mb-3 text-lg font-semibold text-black">Description</h3>

            <div className="h-full max-h-40 overflow-y-auto pr-3 custom-scrollbar space-y-4">
              {product.description?.overview && (
                <p className="text-base text-gray-900 leading-relaxed tracking-wide">
                  <strong>Overview:</strong> {product.description.overview}
                </p>
              )}

              {isPerfume && product.description?.features && (
                <ul className="list-disc pl-5 text-base text-gray-900 space-y-2">
                  {product.description.features.map((feature, idx) => {
                    const [label, ...rest] = feature.split(":");
                    return (
                      <li key={idx}>
                        <strong>{label}:</strong> {rest.join(":").trim()}
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* ✅ For perfumes, show Recommended instead of Styling Tip */}
              {isPerfume && product.description?.recommended && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base text-gray-900 leading-relaxed">
                    <strong>Recommended:</strong> {product.description.recommended}
                  </p>
                </div>
              )}

              {/* Keep Styling Tip for non-perfume products */}
              {!isPerfume && product.description?.stylingTip && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base text-gray-900 leading-relaxed">
                    <strong>Styling Tip:</strong> {product.description.stylingTip}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              className="bg-black text-white px-5 py-2 rounded cursor-pointer"
              onClick={() => onAddToCart({ ...product, size, quantity, price: displayedPrice })}
            >
              Add to Cart
            </button>

            <button className="bg-green-600 text-white px-5 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
