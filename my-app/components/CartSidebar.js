import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Trash2 } from "lucide-react"; // trash icon

export default function CartSidebar({ cartItems, onClose, onRemoveItem }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  useEffect(() => {
    setIsVisible(true); // slide in on mount
  }, []);

  const handleClose = () => {
    setIsVisible(false); // start slide out
    setTimeout(() => {
      onClose(); // close after animation
    }, 300); // match duration
  };

  // 🧮 Calculate subtotal (price * quantity)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost = cartItems.length > 0 ? 100 : 0; // default shipping example
  const total = subtotal + shippingCost;

  return (
    <>
      {/* Overlay Shadow */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-99 h-full bg-[#fffdd0] shadow-lg p-4 z-50 transform transition-transform duration-300 overflow-y-auto ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
  onClick={handleClose}
  className="float-right text-black cursor-pointer hover:text-red-600 transition-colors">✖</button>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-black"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}>Your cart is empty</p>
            <button
              onClick={handleClose}
              className="mt-2 bg-black text-white px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4 mt-6">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between bg-white rounded-lg p-2 shadow-sm"
              >
                {/* Product Image */}
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={
                      item.image.startsWith("/images/")
                        ? item.image
                        : `/images/${item.image}`
                    }
                    alt={item.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>

                {/* Product Info */}
                <div
                  className="flex-1 ml-3"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  <span className="block text-sm font-semibold text-black">
                    {item.name}
                  </span>

                  <div className="text-xs text-gray-800 mt-1">
                    Size: <span className="font-medium">{item.size}</span>
                  </div>

                  <div className="text-sm text-black mt-2">
                    Quantity: <span className="font-medium">{item.quantity}</span>
                  </div>

                  <div className="text-sm text-black mt-1">
                    Price:{" "}
                    <span className="font-medium">
                      ₱{Number(item.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Trash Icon */}
                <button onClick={() => onRemoveItem(item)}>
                  <Trash2 size={18} className="text-red-500 cursor-pointer" />
                </button>
              </div>
            ))}

            {/* -------------------------------------------------- */}
            {/* 🟨 SHIPPING + TOTAL + CHECKOUT + CONTINUE */}
            {/* -------------------------------------------------- */}

            <div
              className="mt-6 pt-4 border-t border-gray-400 relative"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {/* SHIPPING */}
              <div className="flex justify-between text-black mb-2">
                <span>Shipping</span>
                <span>₱{shippingCost.toLocaleString()}</span>
              </div>

              {/* TOTAL */}
              <div className="flex justify-between text-black text-lg font-semibold mb-4">
                <span>Total</span>
                <span>₱{total.toLocaleString()}</span>
              </div>

              {/* CHECKOUT BUTTON */}
              <div className="relative z-50">
                <button
                  className="w-full bg-black text-white py-2 rounded mb-3 cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={() => router.push("/checkout")}
                >
                  Checkout
                </button>
              </div>

              {/* Continue Shopping */}
              <p
                onClick={handleClose}
                className="text-center text-black underline cursor-pointer"
              >
                Continue Shopping
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
