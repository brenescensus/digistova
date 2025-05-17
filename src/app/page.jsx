"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./components/layouts/header";
import About from "./components/About/about";
import Hero from "./components/Hero/hero";
import Service from "./components/Service/service";
import Project from "./components/Project/project";
import Footer from "./components/layouts/footer";






export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <About />
    <Service />
    {/* <Project/> */}
    <Footer/>
    

     

      {/* Footer
      <footer className="bg-black text-center text-gray-500 text-sm py-6 border-t border-gray-700">
        © 2025 Digistova. All rights reserved.
      </footer> */}
    </>
    
  )
}
