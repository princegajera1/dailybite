import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } =
    useContext(CartContext);

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (item) => {
    addToCart(item);
    setShowPopup(true);

    // auto hide after 3 sec
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-16 relative">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          ❤️ Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <div className="text-center text-zinc-500 mt-20">
            <h3 className="text-xl font-semibold">
              Your wishlist is empty 😢
            </h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition group"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[160px] mx-auto object-contain mb-4 group-hover:scale-105 transition"
                />

                <h3 className="text-lg font-semibold text-center">
                  {item.name}
                </h3>

                <p className="text-orange-500 font-bold text-center mt-1">
                  ₹{item.price}
                </p>

                <div className="flex justify-between mt-5">

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>

                  {/* ADD */}
                  <button
                    onClick={() => handleAdd(item)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600"
                  >
                    <FaShoppingCart />
                    Add
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-xl p-5 w-[260px] animate-slideIn">

          <p className="text-sm font-semibold text-zinc-800 mb-3">
            ✅ Product added to cart
          </p>

          <div className="flex justify-between gap-2">

            <button
              onClick={() => navigate("/cart")}
              className="bg-orange-500 text-white px-3 py-2 rounded-md text-sm"
            >
              Go to Cart
            </button>

            <button
              onClick={() => setShowPopup(false)}
              className="border px-3 py-2 rounded-md text-sm"
            >
              Continue
            </button>

          </div>

        </div>
      )}

    </section>
  );
};

export default Wishlist;