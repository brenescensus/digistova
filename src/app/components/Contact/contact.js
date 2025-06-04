"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import  { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {

 const [isSubmitting, setIsSubmitting] = useState(false); // For handling multiple submissions

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({

        access_key: "e63ff081-bf74-47e8-a9a9-e3c47e5b46d3",
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!"); // Show success toast
      e.target.reset(); // Clear form fields
    } else {
      toast.error("Failed to send message. Please try again."); // Show error toast
    }
    setIsSubmitting(false); // Reset submission state
  }
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
            <p className="text-white">We&apos;d love to hear from you! Let&apos;s build something great together.</p>
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
          <form className="space-y-6 bg-[#1e1b18] p-8 rounded-xl shadow-xl " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
              name="name"
                type="text"
                placeholder="Your Name"
                  disabled={isSubmitting}
                className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none "
              />
              <input
              type="number"
              name="phone"
              placeholder="Phone Number"
                disabled={isSubmitting}
              className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
            />
             
            </div>
             <input
                type="email"
                name="email"
                placeholder="Your Email"
                  disabled={isSubmitting}
                className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
              />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
                disabled={isSubmitting}
              className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
                disabled={isSubmitting}
              className="w-full p-3 rounded-md bg-[#2f2923] text-white  border-b-white border-b-2 outline-none focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ffe074] hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold text-white shadow-lg"
            >
              {/* Send Message */}
               {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </motion.div>
          <ToastContainer className={"text-white border-amber-500"} />
      </section>
   </>
  )
}
