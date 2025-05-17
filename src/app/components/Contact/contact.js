"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
   <>
 {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-6">Have a project in mind? Let&apos;s collaborate!</p>
          <a href="mailto:contact@digistova.com" className="inline-block bg-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">Email Us</a>
        </motion.div>
      </section>
   </>
  )
}
