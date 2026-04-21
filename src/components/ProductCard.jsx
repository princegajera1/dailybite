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
    <div
      className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl transition duration-300 relative group hover:-translate-y-2"
      style={{ zIndex: 10 }}
    >
      {/* ❤️ HEART */}
      <FaHeart
        onClick={() => addToWishlist(item)}
        className={`absolute top-4 left-4 text-lg cursor-pointer ${
          isInWishlist ? "text-red-500" : "text-black hover:text-red-400"
        }`}
        style={{ cursor: "pointer", pointerEvents: "auto", zIndex: 30 }}
      />

      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.name}
        className="h-[140px] mx-auto object-contain mb-4 transition duration-500 group-hover:scale-110 pointer-events-none"
      />

      {/* NAME */}
      <h3 className="text-center font-semibold text-lg">{item.name}</h3>

      {/* PRICE */}
      <p className="text-center text-orange-500 font-bold mb-3">
        ₹{item.price}
      </p>

      {/* ACTION */}
      <div
        className="flex justify-center mt-3"
        style={{ position: "relative", zIndex: 30, pointerEvents: "auto" }}
      >
        {quantity === 0 ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="bg-green-200 text-green-800 px-6 py-2 rounded-md font-semibold hover:bg-green-300 transition"
            style={{ cursor: "pointer", pointerEvents: "auto", zIndex: 30 }}
          >
            ADD
          </button>
        ) : (
          <div
            className="flex items-center gap-4 bg-green-200 text-green-900 px-5 py-2 rounded-md font-semibold"
            style={{ position: "relative", zIndex: 30, pointerEvents: "auto" }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(item.id);
              }}
              className="text-lg font-bold w-8 h-8 flex items-center justify-center hover:bg-green-300 rounded transition"
              style={{ cursor: "pointer", pointerEvents: "auto", zIndex: 30 }}
            >
              −
            </button>

            <span className="text-lg min-w-[20px] text-center">{quantity}</span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
              className="text-lg font-bold w-8 h-8 flex items-center justify-center hover:bg-green-300 rounded transition"
              style={{ cursor: "pointer", pointerEvents: "auto", zIndex: 30 }}
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
