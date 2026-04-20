import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import discountImg from "../assets/fruits-banner (1).jpg";

const Discount = () => {
  const { applyDiscount, discount } = useContext(CartContext);

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between overflow-hidden 
        transition-all duration-500 hover:shadow-2xl group">

          {/* LEFT */}
          <div className="flex items-center gap-4 md:gap-6 p-6 md:p-10 md:w-1/2">

            {/* 🔥 20% TEXT FIX */}
            <h1 className="
              text-orange-500 text-5xl md:text-7xl font-bold
              rotate-0 md:rotate-[-90deg]
              transition duration-500 group-hover:scale-110
            ">
              20%
            </h1>

            {/* TEXT */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 leading-tight group-hover:text-orange-500 transition">
                First Order <br /> Discount!
              </h2>

              <p className="text-zinc-500 leading-relaxed text-sm md:text-base max-w-[420px]">
                Enjoy an exclusive first order discount on our grocery website!
                Shop fresh essentials and save big on your first purchase.
              </p>

              {/* BUTTON */}
              <button
                onClick={applyDiscount}
                disabled={discount > 0}
                className={`px-7 py-3 rounded-lg font-semibold transition-all duration-300 transform
                ${
                  discount > 0
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 hover:shadow-lg active:scale-95"
                }`}
              >
                {discount > 0 ? "Discount Applied ✅" : "Get a Discount"}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={discountImg}
              alt="discount"
              className="w-full h-full object-cover 
              transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Discount;