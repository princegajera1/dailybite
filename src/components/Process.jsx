import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Sourcing",
    desc: "It is a long established fact that a reader",
    icon: "📍",
  },
  {
    id: 2,
    title: "Manufacturing",
    desc: "It is a long established fact that a reader",
    icon: "🏭",
  },
  {
    id: 3,
    title: "Quality Control",
    desc: "It is a long established fact that a reader",
    icon: "⚪",
  },
  {
    id: 4,
    title: "Logistics",
    desc: "It is a long established fact that a reader",
    icon: "🚚",
  },
];

const Process = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold mb-20">
          <span className="text-orange-500">Our</span> Process
        </h2>

        <div className="relative">

          {/* LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-orange-400"></div>

          <div className="flex flex-col gap-20 ">

            {steps.map((step, index) => {
              const isActive = active === step.id;

              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setActive(step.id)}
                  onMouseLeave={() => setActive(null)}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6
                  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >

                  {/* CONTENT */}
                  <div
                    className={`w-full md:w-[40%] p-6 rounded-xl transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-orange-50 shadow-xl scale-105"
                        : "bg-white shadow-md"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-2 transition
                      ${isActive ? "text-orange-500" : "text-zinc-800"}`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      {step.desc}
                    </p>
                  </div>

                  {/* CENTER */}
                  <div className="flex flex-col items-center relative z-10">

                    {/* NUMBER */}
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-full border-2 border-dashed font-bold mb-3 transition-all duration-300
                      ${
                        isActive
                          ? "border-orange-500 scale-110 bg-orange-50"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {step.id}
                    </div>

                    {/* ICON */}
                    <div
                      className={`p-3 rounded-full text-white shadow-md transition-all duration-300
                      ${
                        isActive
                          ? "bg-orange-500 scale-110 rotate-6"
                          : "bg-orange-400"
                      }`}
                    >
                      {step.icon}
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;