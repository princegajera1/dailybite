import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// 🔥 IMPORT ALL IMAGES (example — tu badha add kar)
import apple from "../assets/apple.png";
import banana from "../assets/banana (1).png";
import grapes from "../assets/grapes (1).png";
import kiwi from "../assets/kiwi (1).png";
import pineapple from "../assets/pineapple (1).png";
import strawberry from "../assets/strawberry (2).png";

import milk from "../assets/milk (1).png";
import cheese from "../assets/cheese (1).png";
import yogurt from "../assets/yogurt (1).png";
import butter from "../assets/butter (1).png";
import eggs from "../assets/eggs (1).png";

import beef from "../assets/beef (1).png";
import chicken from "../assets/chicken-breast (1).png";
import fish from "../assets/salmon (1).png";
import shrimp from "../assets/shrimp (1).png";
import tofu from "../assets/tofu (1).png";

const Products = () => {
  const { addToCart, addToWishlist } = useContext(CartContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category");

  // 🔥 FULL PRODUCT DATA (extend karo easily)
  const allProducts = [

    // 🍎 FRUITS
    { id: 1, name: "Apple", price: 100, img: apple, category: "fruits" },
    { id: 2, name: "Banana", price: 50, img: banana, category: "fruits" },
    { id: 3, name: "Grapes", price: 80, img: grapes, category: "fruits" },
    { id: 4, name: "Kiwi", price: 120, img: kiwi, category: "fruits" },
    { id: 5, name: "Pineapple", price: 90, img: pineapple, category: "fruits" },
    { id: 6, name: "Strawberry", price: 150, img: strawberry, category: "fruits" },

    // 🥛 DAIRY
    { id: 20, name: "Milk", price: 60, img: milk, category: "dairy" },
    { id: 21, name: "Cheese", price: 120, img: cheese, category: "dairy" },
    { id: 22, name: "Yogurt", price: 80, img: yogurt, category: "dairy" },
    { id: 23, name: "Butter", price: 110, img: butter, category: "dairy" },
    { id: 24, name: "Eggs", price: 90, img: eggs, category: "dairy" },

    // 🍗 MEAT
    { id: 40, name: "Beef", price: 300, img: beef, category: "meat" },
    { id: 41, name: "Chicken", price: 200, img: chicken, category: "meat" },
    { id: 42, name: "Fish", price: 250, img: fish, category: "meat" },
    { id: 43, name: "Shrimp", price: 280, img: shrimp, category: "meat" },
    { id: 44, name: "Tofu", price: 150, img: tofu, category: "meat" },

  ];

  // 🔥 FILTER LOGIC
  const filtered = category
    ? allProducts.filter((item) => item.category === category)
    : allProducts;

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10 capitalize">
        {category ? category : "All Products"}
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
          >

            <img
              src={item.img}
              alt={item.name}
              className="h-[150px] mx-auto mb-4 object-contain"
            />

            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-orange-500 font-semibold">₹{item.price}</p>

            <div className="flex justify-between mt-4">

              <FaHeart
                className="cursor-pointer hover:text-red-500"
                onClick={() => addToWishlist(item)}
              />

              <button
                onClick={() => addToCart(item)}
                className="bg-orange-500 text-white px-4 py-2 rounded-md"
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;