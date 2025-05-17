"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <>
  {/* Projects Section */}
      <section id="projects" className="bg-gray-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Projects & Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {["AI Admin for Logistics Co.", "SaaS Dashboard for E-Commerce", "Cloud DevOps Pipeline for Fintech"].map((proj, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition"
              >
                <h4 className="text-xl font-semibold mb-2">{proj}</h4>
                <p className="text-gray-400">A brief overview of the solution we crafted, the challenges we overcame, and the outcomes achieved.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
   
  )
}
