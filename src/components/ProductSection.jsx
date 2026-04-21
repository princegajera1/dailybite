import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const {
    addToCart,
    removeFromCart,
    cart = [],
    addToWishlist,
    wishlist = [],
  } = useContext(CartContext);

  if (!item) return null;

  const isInWishlist = wishlist.some((p) => p.id === item.id);

  const cartItem = cart.find((p) => p.id === item.id);
  const quantity = cartItem ? cartItem.qty : 0;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl transition duration-300 relative group hover:-translate-y-2">

      {/* ❤️ HEART */}
      <FaHeart
        onClick={() => addToWishlist(item)}
        className={`absolute top-4 left-4 text-lg cursor-pointer ${
          isInWishlist
            ? "text-red-500"
            : "text-black hover:text-red-400"
        }`}
        style={{ cursor: "pointer" }}  // 🔥 FORCE POINTER
      />

      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.name}
        className="h-[140px] mx-auto object-contain mb-4 transition group-hover:scale-105"
      />

      {/* NAME */}
      <h3 className="text-center font-semibold text-lg">
        {item.name}
      </h3>

      {/* PRICE */}
      <p className="text-center text-orange-500 font-bold mb-3">
        ₹{item.price}
      </p>

      {/* ACTION */}
      <div className="text-center mt-3">

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(item)}
            className="bg-green-200 text-green-800 px-6 py-2 rounded-md font-semibold hover:bg-green-300 transition cursor-pointer"
            style={{ cursor: "pointer" }} // 🔥 FORCE
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center justify-center gap-4 bg-green-200 text-green-900 px-4 py-2 rounded-md font-semibold">

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-lg font-bold cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => addToCart(item)}
              className="text-lg font-bold cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              +
            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default ProductCard;