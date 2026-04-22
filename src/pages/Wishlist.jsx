import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const {
    wishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
    cart,
  } = useContext(CartContext);

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (item) => {
    addToCart(item);
    setShowPopup(true);

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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {wishlist.map((item) => {
              const cartItem = cart.find((p) => p.id === item.id);
              const quantity = cartItem ? cartItem.qty : 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition group"
                >

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[160px] mx-auto object-contain mb-4 group-hover:scale-105 transition"
                  />

                  {/* NAME */}
                  <h3 className="text-lg font-semibold text-center">
                    {item.name}
                  </h3>

                  {/* PRICE */}
                  <p className="text-orange-500 font-bold text-center mt-1">
                    ₹{item.price}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex justify-between items-center mt-5">

                    {/* 🗑 REMOVE */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className=" cursor-pointer text-red-500 text-lg hover:scale-110 transition"
                    >
                      <FaTrash />
                    </button>

                    {/* 🛒 ADD / QUANTITY */}
                    {quantity === 0 ? (
                      <button
                        onClick={() => handleAdd(item)}
                        className=" cursor-pointer bg-green-200 text-green-800 px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition"
                      >
                        ADD
                      </button>
                    ) : (
                      <div className="flex items-center gap-3 bg-green-200 text-green-900 px-3 py-2 rounded-md font-semibold">

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-lg font-bold"
                        >
                          -
                        </button>

                        <span>{quantity}</span>

                        <button
                          onClick={() => addToCart(item)}
                          className="text-lg font-bold"
                        >
                          +
                        </button>

                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-xl p-5 w-[260px] z-50">

          <p className="text-sm font-semibold text-zinc-800 mb-3">
            ✅ Product added to cart
          </p>

          <div className="flex justify-between gap-2">

            <button
              onClick={() => navigate("/cart")}
              className="bg-orange-500 text-white px-3 py-2 rounded-md text-sm hover:bg-orange-600 transition"
            >
              Go to Cart
            </button>

            <button
              onClick={() => setShowPopup(false)}
              className="border px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition"
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