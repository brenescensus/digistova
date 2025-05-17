"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
    <section id="about" className="bg-[#2f2923] text-white py-24 px-6">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
    {/* Text Content */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="lg:w-1/2 text-center lg:text-left"
    >
      <h3 className="text-4xl font-bold mb-4 text-yellow-300">About Digistova</h3>
      <p className="text-gray-300 text-lg leading-relaxed">
       Digistova specializes in providing smart digital solutions that enable companies to prosper.  We offer cutting-edge virtual assistant services that improve customer engagement and expedite processes, as well as custom software engineering that spurs innovation via cloud computing, scalable platforms, and AI integration.  By fusing innovation with data-driven tactics, we create customized, dependable, and significant items that enhance your brand and optimize company expansion.        <br />
        <span className="text-[ #ffe074] pt-2 font-semibold">
          Our mission is to automate, optimize, and inspire.
        </span>
      </p>
    </motion.div>

    {/* Video Content */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="lg:w-1/2 w-full"
    >
      <video
        src="/Assets/Videos/va.mp4" // Replace with your actual video path
        autoPlay
        muted
        loop
        playsInline
        className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
      />
    </motion.div>

  </div>
</section>
    </>
  )
}
