import React, { useState } from "react";
import ProductCard from "./ProductCard";

// IMAGES
import apple from "../assets/apple.png";
import banana from "../assets/banana (1).png";
import grapes from "../assets/grapes (1).png";
import milk from "../assets/milk (1).png";
import cheese from "../assets/cheese (1).png";
import eggs from "../assets/eggs (1).png";
import beef from "../assets/beef (1).png";
import chicken from "../assets/chicken-breast (1).png";
import salmon from "../assets/salmon (1).png";

const ProductSection = () => {
  const [active, setActive] = useState("all");

  const products = [
    { id: 1, name: "Apple", price: 100, img: apple, category: "fruits" },
    { id: 2, name: "Banana", price: 50, img: banana, category: "fruits" },
    { id: 3, name: "Grapes", price: 80, img: grapes, category: "fruits" },

    { id: 4, name: "Milk", price: 60, img: milk, category: "dairy" },
    { id: 5, name: "Cheese", price: 120, img: cheese, category: "dairy" },
    { id: 6, name: "Eggs", price: 90, img: eggs, category: "dairy" },

    { id: 7, name: "Beef", price: 300, img: beef, category: "meat" },
    { id: 8, name: "Chicken", price: 200, img: chicken, category: "meat" },
    { id: 9, name: "Salmon", price: 250, img: salmon, category: "meat" },
  ];

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* 🔥 HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Popular</span> Products
        </h2>

        {/* 🔥 PRO FILTER BUTTONS */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">

          {["all", "fruits", "dairy", "meat"].map((item) => {
            const isActive = active === item;

            return (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`
                  px-6 py-2 rounded-full font-medium capitalize 
                  transition-all duration-300 ease-in-out

                  ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "bg-white/80 backdrop-blur-md text-zinc-700 border border-gray-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:scale-105"
                  }
                `}
              >
                {item}
              </button>
            );
          })}

        </div>

        {/* 🔥 PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;