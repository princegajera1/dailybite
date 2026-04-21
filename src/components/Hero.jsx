import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Grocery from "../assets/grocery (1).png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-white via-orange-50 to-white min-h-[90vh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <span className="inline-block rounded-full bg-orange-100 text-orange-500 text-sm px-5 py-2 shadow-sm">
              Export Best Quality...
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-800">
              Tasty Organic <br />
              <span className="text-orange-500">Fruits</span> &{" "}
              <span className="text-orange-500">Veggies</span> <br />
              In Your City
            </h1>

            <p className="text-zinc-500 text-base md:text-lg max-w-[500px] mx-auto md:mx-0">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105 cursor-pointer "
            >
              Shop Now
            </button>
          </motion.div>

          {/* RIGHT IMAGE (NO FLOAT ANIMATION) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={Grocery}
              alt="Grocery"
              className="w-[320px] md:w-[550px] object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;