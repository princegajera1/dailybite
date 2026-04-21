import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Discount = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/products");
    }, 3000);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">

      <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden">

        <div className="grid md:grid-cols-3 items-center">

          {/* 🔥 LEFT SIDE (20%) */}
          <div className="flex justify-center items-center">

            {/* Desktop Vertical */}
            <h1 className="hidden md:block text-orange-500 text-[120px] font-bold rotate-[-90deg]">
              20%
            </h1>

            {/* Mobile Horizontal */}
            <h1 className="block md:hidden text-orange-500 text-5xl font-bold">
              20%
            </h1>

          </div>

          {/* 🔥 CENTER CONTENT */}
          <div className="px-6 py-10 text-center md:text-left">

            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
              First Order <br /> Discount!
            </h2>

            <p className="text-gray-600 mb-5 text-sm md:text-base">
              Enjoy an exclusive first order discount on our grocery website!
              Shop fresh essentials and save big on your first purchase.
            </p>

            <button
              onClick={handleClick}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
            >
              Get a Discount
            </button>

          </div>

          {/* 🔥 RIGHT IMAGE */}
          <div className="h-full">

            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
              alt="discount"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-xl p-5 w-[260px] z-50">

          <p className="text-sm font-semibold text-zinc-800 mb-3">
            🎉 20% Discount Applied!
          </p>

          <div className="flex justify-between gap-2">

            <button
              onClick={() => navigate("/products")}
              className="bg-orange-500 text-white px-3 py-2 rounded-md text-sm"
            >
              Shop Now
            </button>

            <button
              onClick={() => setShowPopup(false)}
              className="border px-3 py-2 rounded-md text-sm"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
};

export default Discount;