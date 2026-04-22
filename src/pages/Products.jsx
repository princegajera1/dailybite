import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// 🔥 IMPORT IMAGES
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
  const { addToCart, removeFromCart, addToWishlist, cart, wishlist } =
    useContext(CartContext);

  const location = useLocation();

  // 🔍 URL PARAMS
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const search = queryParams.get("search")?.toLowerCase() || "";

  // 🔥 PRODUCT DATA
  const allProducts = [
    { id: 1, name: "Apple", price: 100, img: apple, category: "fruits" },
    { id: 2, name: "Banana", price: 50, img: banana, category: "fruits" },
    { id: 3, name: "Grapes", price: 80, img: grapes, category: "fruits" },
    { id: 4, name: "Kiwi", price: 120, img: kiwi, category: "fruits" },
    { id: 5, name: "Pineapple", price: 90, img: pineapple, category: "fruits" },
    {
      id: 6,
      name: "Strawberry",
      price: 150,
      img: strawberry,
      category: "fruits",
    },

    { id: 20, name: "Milk", price: 60, img: milk, category: "dairy" },
    { id: 21, name: "Cheese", price: 120, img: cheese, category: "dairy" },
    { id: 22, name: "Yogurt", price: 80, img: yogurt, category: "dairy" },
    { id: 23, name: "Butter", price: 110, img: butter, category: "dairy" },
    { id: 24, name: "Eggs", price: 90, img: eggs, category: "dairy" },

    { id: 40, name: "Beef", price: 300, img: beef, category: "meat" },
    { id: 41, name: "Chicken", price: 200, img: chicken, category: "meat" },
    { id: 42, name: "Fish", price: 250, img: fish, category: "meat" },
    { id: 43, name: "Shrimp", price: 280, img: shrimp, category: "meat" },
    { id: 44, name: "Tofu", price: 150, img: tofu, category: "meat" },
  ];

  // 🔥 FILTER
  let filtered = allProducts;

  if (category) {
    filtered = filtered.filter((item) => item.category === category);
  }

  if (search) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search),
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 capitalize">
        {search
          ? `Search Results for "${search}"`
          : category
            ? category
            : "All Products"}
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((item) => {
            const cartItem = cart.find((p) => p.id === item.id);
            const quantity = cartItem ? cartItem.qty : 0;

            // ❤️ FIX HERE
            const isInWishlist = wishlist.some((p) => p.id === item.id);

            return (
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
                  {/* ❤️ FIXED HEART */}
                  <FaHeart
                    className={`cursor-pointer text-lg ${
                      isInWishlist
                        ? "text-red-500"
                        : "text-black hover:text-red-400"
                    }`}
                    onClick={() => addToWishlist(item)}
                  />

                  {quantity === 0 ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="cursor-pointer bg-green-200 text-green-800 px-4 py-2 rounded-md font-semibold 
               hover:bg-green-300 hover:scale-105 active:scale-95 
               transition-all duration-200"
                    >
                      ADD
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 bg-green-200 text-green-900 px-3 py-2 rounded-md font-semibold">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer px-2 py-1 rounded-md hover:bg-green-300 active:scale-90 transition"
                      >
                        -
                      </button>

                      <span className="min-w-[20px] text-center">
                        {quantity}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        className="cursor-pointer px-2 py-1 rounded-md hover:bg-green-300 active:scale-90 transition"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-4 text-center text-lg">No products found 😢</p>
        )}
      </div>
    </div>
  );
};

export default Products;
