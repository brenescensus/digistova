
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
     
      <header className="bg-[#ffffff] text-[#2f2923] sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-400">
            <Image 
            src="/Assets/images/digilogo.png"
            alt="Digistova Logo"
            width={100}
            height={70}
            />
          </div>
          <nav className="space-x-6 font-bold text-base">
            <Link className="hover:border-b-2 border-white" href="#about">About</Link>
            <Link className="hover:border-b-2 border-white" href="#services">Services</Link>
            <Link className="hover:border-b-2 border-white" href="#projects">Projects</Link>
            <Link className="hover:border-b-2 border-white" href="#contact">Contact</Link>
          </nav>
        </div>
      </header>
    
    </>
  )
}
