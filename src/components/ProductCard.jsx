import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const {
    addToCart,
    addToWishlist,
    wishlist = [],
  } = useContext(CartContext);

  if (!item) return null;

  const isInWishlist = wishlist.some((p) => p.id === item.id);

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition relative group">

      {/* ❤️ Wishlist */}
      <FaHeart
        onClick={() => addToWishlist(item)}
        className={`absolute top-4 left-4 cursor-pointer text-lg ${
          isInWishlist ? "text-red-500" : "text-gray-300 hover:text-red-500"
        }`}
      />

      {/* ➕ Add to Cart */}
      <div
        onClick={() => addToCart(item)}
        className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-lg cursor-pointer hover:scale-110 transition"
      >
        <IoAdd size={18} />
      </div>

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

      {/* BUTTON */}
      <div className="text-center">
        <button
          onClick={() => {
            addToCart(item);
            navigate("/checkout");
          }}
          className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default ProductCard;