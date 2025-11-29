import "@/styles/globals.css";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();
export const AuthContext = createContext(); // AuthContext for login info

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load cart and user from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));

    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Login function
  const login = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </CartContext.Provider>
  );
}
