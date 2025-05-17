"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';


export default function Contact() {
  return (
   <>
 {/* Contact Section */}
     <section id="contact" className="bg-[#2f2923] text-white py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-[#ffe074]">Get in Touch</h3>
            <p className="text-white">We'd love to hear from you! Let's build something great together.</p>
            <div className="text-[#ffe074] space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope  className="text-2xl text-white" />
                <a href="mailto:digistova@outlook.com" className="hover:underline hover:text-white  text-lg">digistova@outlook.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone  className="text-2xl text-white"  /><span><a href="tel:+254741951110" className="hover:underline hover:text-white  text-lg">+254 741 951 110</a></span>
                / <a href="tel:+254746843209" className="hover:underline hover:text-white text-lg">+254 746 843 209</a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe074] text-2xl"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe074] text-2xl"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe074] text-2xl"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe074] text-2xl"><FaInstagram /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-[#1e1b18] p-8 rounded-xl shadow-xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none "
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ffe074] hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold text-white shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
   </>
  )
}
