import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // ➖ REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0);
    });
  };

  // ❤️ TOGGLE WISHLIST (ADD + REMOVE)
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // 🗑 REMOVE FROM WISHLIST (FOR DUSTBIN ICON)
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist, // 🔥 IMPORTANT
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;