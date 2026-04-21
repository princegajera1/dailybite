import React from "react";
import ProductCard from "./ProductCard";

// 🍎 FRUITS IMAGES
import apple from "../assets/apple.png";
import banana from "../assets/banana (1).png";
import grapes from "../assets/grapes (1).png";
import kiwi from "../assets/kiwi (1).png";
import pineapple from "../assets/pineapple (1).png";
import strawberry from "../assets/strawberry (2).png";

// 🥛 DAIRY IMAGES
import milk from "../assets/milk (1).png";
import cheese from "../assets/cheese (1).png";
import yogurt from "../assets/yogurt (1).png";
import butter from "../assets/butter (1).png";
import eggs from "../assets/eggs (1).png";

// 🍗 MEAT IMAGES
import beef from "../assets/beef (1).png";
import chicken from "../assets/chicken-breast (1).png";
import fish from "../assets/salmon (1).png";
import shrimp from "../assets/shrimp (1).png";
import tofu from "../assets/tofu (1).png";

const ProductSection = () => {
  const products = [
    // 🍎 FRUITS
    { id: 1, name: "Apple", price: 100, img: apple },
    { id: 2, name: "Banana", price: 50, img: banana },
    { id: 3, name: "Grapes", price: 80, img: grapes },
    { id: 4, name: "Kiwi", price: 120, img: kiwi },
    { id: 5, name: "Pineapple", price: 90, img: pineapple },
    { id: 6, name: "Strawberry", price: 150, img: strawberry },

    // 🥛 DAIRY
    { id: 20, name: "Milk", price: 60, img: milk },
    { id: 21, name: "Cheese", price: 120, img: cheese },
    { id: 22, name: "Yogurt", price: 80, img: yogurt },
    { id: 23, name: "Butter", price: 110, img: butter },
    { id: 24, name: "Eggs", price: 90, img: eggs },

    // 🍗 MEAT
    { id: 40, name: "Beef", price: 300, img: beef },
    { id: 41, name: "Chicken", price: 200, img: chicken },
    { id: 42, name: "Fish", price: 250, img: fish },
    { id: 43, name: "Shrimp", price: 280, img: shrimp },
    { id: 44, name: "Tofu", price: 150, img: tofu },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-zinc-800">Our Products</h2>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
