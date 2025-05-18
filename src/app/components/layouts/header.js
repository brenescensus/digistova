"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors  duration-300 ${
        scrolled ? "bg-[#2f2923] text-[white] shadow-md" : "bg-[transparent] text-[#ffbd59] shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2  flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image
            src="/Assets/Images/logoo.png"
            alt="Digistova Logo"
            width={100}
            height={70}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-bold text-base">
           <Link className="hover:border-b-2 border-white" href="#home">
            Home
          </Link>
          <Link className="hover:border-b-2 border-white" href="#about">
            About
          </Link>
          <Link className="hover:border-b-2 border-white" href="#services">
            Services
          </Link>
          <Link className="hover:border-b-2 border-white" href="#">
            Projects
          </Link>
          <Link className="hover:border-b-2 border-white" href="#contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#ffbd59] text-white px-6 py-4 space-y-4"
        >
          <Link onClick={() => setMenuOpen(false)} href="#home" className="block">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="#about" className="block">
            About
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="#services" className="block">
            Services
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="#" className="block">
            Projects
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="#contact" className="block">
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
}

