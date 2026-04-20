import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

// 🔥 Center Image (change name if needed)
import basket from "../assets/grocery (1).png";

const Values = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-orange-500">Our</span> Values
          </h2>
          <div className="w-[80px] h-[3px] bg-orange-400 mx-auto mt-4"></div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="grid md:grid-cols-3 items-center gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            {/* ITEM */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <FaHeart size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Trust</h3>
                <p className="text-gray-500 text-sm">
                  We provide reliable and high-quality fresh products daily.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <GiFruitBowl size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Always Fresh</h3>
                <p className="text-gray-500 text-sm">
                  Fresh and organic fruits delivered directly from farms.
                </p>
              </div>
            </motion.div>

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <motion.img
              src={basket}
              alt="basket"
              className="w-[300px] md:w-[400px] drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <FaShieldAlt size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Food Safety</h3>
                <p className="text-gray-500 text-sm">
                  All products follow strict safety and hygiene standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <FaLeaf size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">100% Organic</h3>
                <p className="text-gray-500 text-sm">
                  We ensure natural and chemical-free organic products.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Values;