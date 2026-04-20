import React from "react";
import { useNavigate } from "react-router-dom";

// 🔥 images
import fruits from "../assets/fruits-and-veggies (1).png";
import dairy from "../assets/dairy-and-eggs (1).png";
import meat from "../assets/meat-and-seafood (1).png";

const Category = () => {
  const navigate = useNavigate();

  const data = [
    { title: "Fruits", img: fruits },
    { title: "Dairy", img: dairy },
    { title: "Meat", img: meat },
  ];

  const handleClick = (category) => {
    navigate(`/products?category=${category.toLowerCase()}`);
  };

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">Shop</span> by Category
          <div className="w-[80px] h-[3px] bg-orange-400 mx-auto mt-3"></div>
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.title)}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="bg-gray-100 h-[220px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[170px] object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* TEXT */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-zinc-800 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>
              </div>

              {/* HOVER BUTTON */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-md shadow-md">
                  Explore →
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Category;