import React, { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FaStar } from "react-icons/fa";

// 🔥 IMAGES
import c1 from "../assets/customer1 (1).jpg";
import c2 from "../assets/customer2 (1).jpg";
import c3 from "../assets/customer3 (1).jpg";
import c4 from "../assets/customer4 (1).jpg";

const data = [
  {
    name: "Emily Johnson",
    role: "Food Blogger",
    img: c1,
    text: "Fresh products and fast delivery!",
  },
  {
    name: "David Smith",
    role: "Chef",
    img: c2,
    text: "Top quality ingredients every time.",
  },
  {
    name: "Alya Zahra",
    role: "Model",
    img: c3,
    text: "Saves time and always fresh!",
  },
  {
    name: "John Carter",
    role: "Customer",
    img: c4,
    text: "Reliable and affordable service.",
  },
];

const Testimonials = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // 🔥 AUTO SCROLL
  useEffect(() => {
    let frame;

    const animate = () => {
      x.set(x.get() - 0.3); // speed control
      if (Math.abs(x.get()) > 1000) {
        x.set(0);
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [x]);

  return (
    <section className="bg-gradient-to-br from-[#f5f5f5] to-[#eaeaea] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-orange-500">Customers</span> Saying
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mt-2"></div>
        </div>

        {/* 🔥 SCROLL */}
        <motion.div ref={containerRef} style={{ x }} className="flex gap-6">

          {[...data, ...data].map((item, i) => (
            <Card key={i} item={item} />
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;




// 🔥 CARD COMPONENT
const Card = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="min-w-[280px] md:min-w-[320px] backdrop-blur-lg bg-white/40 border border-white/30 
      rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >

      {/* TOP */}
      <div className="flex items-center gap-4 mb-4">

        <img
          src={item.img}
          alt=""
          className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover"
        />

        <div>
          <h3 className="font-semibold text-zinc-800">{item.name}</h3>
          <p className="text-sm text-zinc-500">{item.role}</p>

          {/* STARS */}
          <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

      </div>

      {/* 🔥 REVIEW TEXT */}
      <p className="text-zinc-600 text-sm italic leading-relaxed border-l-4 border-orange-500 pl-4">
        “{item.text}”
      </p>

      {/* 🔥 LABEL */}
      {/* <p className="text-xs text-orange-500 mt-4 font-semibold uppercase tracking-wide">
        Verified Customer Review
      </p> */}

    </motion.div>
  );
};  