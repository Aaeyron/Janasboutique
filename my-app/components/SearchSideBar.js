import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchSidebar({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsVisible(true); // fade in on mount
  }, []);

  const handleClose = () => {
    setIsVisible(false); // start fade out
    setTimeout(() => {
      onClose(); // close after animation
    }, 300); // match duration
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Search Sidebar */}
      <div
        className={`fixed top-0 left-0 w-99 h-full bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={handleClose} className="float-right text-black">
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Search</h2>

        {/* Sleek underline search input */}
        <div className="relative mb-4">
          <FaSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-8 pr-14 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-black text-black"
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-black"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </>
  );
}
