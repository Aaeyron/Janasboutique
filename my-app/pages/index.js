// pages/index.js
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home({ cartItems, setCartItems }) {
  const router = useRouter();

  const handleShopNow = () => {
    // Navigate to homepage (refresh) but keep current user and cart
    router.push("/");
  };

  return (
    <div className="bg-[#faf7f5] text-gray-900">
      {/* Navbar */}
      <Navbar cartItems={cartItems} onRemoveItem={(itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
      }} />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <Image
          src="/images/home1.jpg"
          alt="Boutique Background"
          fill
          className="object-cover object-center -z-10 brightness-[0.7]"
          priority
        />

        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif text-white drop-shadow-lg"
          >
            Timeless Elegance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-lg md:text-xl text-gray-200"
          >
            Discover pieces that define your unique style.
          </motion.p>

          <motion.button
            onClick={handleShopNow}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-8 px-8 py-3 bg-white text-gray-900 font-medium rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* About / Collection Section */}
      <section className="py-24 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold font-serif mb-6">Our Story</h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Born from a passion for elegance and authenticity, our boutique brings you curated fashion pieces that
          embody grace, quality, and timeless charm. Every collection tells a story — yours.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6 md:px-12 bg-[#faf7f5]">
        <h2 className="text-3xl font-serif text-center mb-10">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["item1.jpg", "item2.jpg", "item3.jpg"].map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/images/${img}`}
                alt={`Product ${i + 1}`}
                width={500}
                height={600}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-5 py-2 rounded-full font-medium">
                  View Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Boutique Name — All rights reserved.
      </footer>
    </div>
  );
}
