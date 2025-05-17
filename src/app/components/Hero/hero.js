"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// #ff3131
// #ffe074
// #2f2923

export default function Hero() {
  return (
    <>
        <section className="bg-gradient-to-br from-[#2f2923] via-[#a88f31] to-[#ffbd59] text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
Unlock Digital Opportunities           </h1>
          <p className="text-xl text-gray-300 mb-6">
           Empowering your business with AI-driven automation, expert software solutions, and innovative digital experiences designed to boost efficiency, engagement, and growth.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#2f2923] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff3131] transition"
          >
            Get in Touch
          </a>
        </motion.div>
    
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/Assets/images/va.jpg" // ✅ Replace with your actual image path
            alt="Virtual Assistant & Engineers"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
    
    
    </>
  )
}
