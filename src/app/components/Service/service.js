"use client";
import {React,useState,useEffect }from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "../data/servicedata";


// export default function Service() {
//   return (
//   <>
//    <section id="services" className="bg-[#ffe074] text-[#2f2923] py-24 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h3 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold mb-12"
//         >
//           Our Services
//         </motion.h3>

//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition"
//               >
//                 <Icon className="text-5xl text-[#ff3131] mx-auto mb-4" />
//                 <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
//                 <p className="text-gray-700">{service.description}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   </>
//   )
// }




const categories = ["All", "Software Engineering", "Virtual Assistant"];

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section id="services" className="bg-[#ffe074] text-[#2f2923] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Our Services
        </motion.h3>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#2f2923] text-[#ffe074]"
                  : "bg-white text-[#2f2923] hover:bg-[#ff3131] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <Icon className="text-5xl text-[#ff3131] mx-auto mb-4" />
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;