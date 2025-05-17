"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub ,FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
   <>
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-[#000000] to-[#2f2923] text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Brand & Newsletter */}
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Digistova</h2>
          <p className="mb-6 text-gray-300">
Empowering your business with  expert software solutions, and innovative digital experiences designed to boost efficiency, engagement, and growth          </p>
          {/* <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-l-md border-white outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-[white] text-[#ffbd59] hover:bg-[#ffbd59] hover:text-[#2f2923] transition rounded-r-md px-5 font-semibold"
            >
              Subscribe
            </button>
          </form> */}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left outline-white">
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <a href="#services" className="hover:text-[#ffbd59] transition">Services</a>
          <a href="#projects" className="hover:text-[#ffbd59] transition">Projects</a>
          <a href="#about" className="hover:text-[#ffbd59] transition">About Us</a>
          <a href="#contact" className="hover:text-[#ffbd59] transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl text-[#ffbd59]">
          <a href="#" aria-label="Twitter" className="hover:text-[#ffbd59] transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#ffbd59] transition">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-[#ffbd59] transition">
            <FaGithub />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#ffbd59] transition">
            <FaInstagram />
            </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} . All rights reserved.Designed & Developed by Digistova
      </div>
    </motion.footer>
    </>
  )
}
