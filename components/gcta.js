"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GCTA() {
  // Use a different set of images, or a subset, for variety
  const images = [
    "/Work/foodtray.jpg",
    "/services/Dessert.jpg",
    "/Work/regwed.jpg",
    "/Work/bdaycheers.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto-cycle the background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      id="general-cta"
      className="relative h-[400px] flex items-center justify-center overflow-hidden"
    >
      
      {/* 1. Background Slideshow (Absolute Layer) */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            
            // Smoother fade-out/fade-in transition logic
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 1.5 }} 
          ></motion.div>
        </AnimatePresence>
        
        {/* Overlay for Contrast */}
        {/* Using a dark overlay ensures the light text is readable against any image */}
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      {/* 2. CTA Content (Relative Z-Layer) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white p-6"
      >
        
        {/* NOTE: Removed background gradient from content, as it's now applied to the overlay/section */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 drop-shadow-md">
          Let's Bring Your Celebration to Life
        </h2>
        <p className="max-w-2xl mx-auto mb-8 drop-shadow">
          From concept to execution, we're here to craft unforgettable moments.
        </p>
        
        {/* Button Style: Using the Primary Orange/Red text color on white background */}
        <a
          href="/services"
          className="inline-block bg-white text-[#FA812F] font-semibold px-8 py-3 rounded-lg 
                     hover:bg-[#FFF8E7] hover:text-[#E01E00] transition shadow-lg"
        >
          Explore Our Services »
        </a>
      </motion.div>
    </section>
  );
}