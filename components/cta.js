"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowRight } from "lucide-react"; 

// --- Color Definitions (using hex codes to bypass potentially missing Tailwind setup) ---
const COLOR_PRIMARY_ORANGE = '#FA812F'; // Your main accent color
const COLOR_COCOA = '#3d2b1f';         // Your dark text/secondary button color
const COLOR_SECONDARY_YELLOW = '#F9B233'; // Your hover accent color

export default function CTA() {
  const images = [
    "/services/White-22.jpg",
    "/services/Dessert.jpg",
    "/services/Naked1.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="contact-cta"
      className="relative h-[500px] flex items-center justify-center overflow-hidden mb-30"
    >
      
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 1.5 }} 
          ></motion.div>
        </AnimatePresence>
        {/* Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      {/* CTA content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/50 backdrop-blur-sm px-6 py-6 rounded-xl shadow-2xl text-center 
          max-w-[90%] md:max-w-xl lg:max-w-xl mx-auto max-md:px-4 max-md:py-2 max-md:"

      >
        <h2 className="text-3xl font-serif font-bold" style={{ color: COLOR_COCOA }}>
          Have A Question?
        </h2>
        <p className="mb-6 leading-relaxed font-sans" style={{ color: `${COLOR_COCOA}cc` }}>
          Sosa is more than just catering — we’re your full-service event partner,
          ready to help with everything from gourmet menus to rentals, décor,
          and expert planning advice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-2 lg:gap-1 justify-center">
          {/* Button 1: Contact Us - Primary Action */}
          <Link
            href="/contact"
            // FIX: Using inline style for primary background color
            style={{ backgroundColor: COLOR_PRIMARY_ORANGE }}
            className={`text-white px-6 py-3 rounded-md hover:text-cocoa transition font-semibold flex items-center justify-center gap-2
              max-md:px-2.5 max-md:py-2.5 max-w-sm mx-auto text-center`}
            // FIX: Using direct hex color for hover effect
            onMouseEnter={e => e.currentTarget.style.backgroundColor = COLOR_SECONDARY_YELLOW}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = COLOR_PRIMARY_ORANGE}
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
          
          {/* Button 2: Call - Secondary Action */}
          <a
            href="tel:+2348106466601"
            // FIX: Using inline style for secondary background color
            style={{ backgroundColor: COLOR_COCOA }}
            className="text-white px-6 py-3 rounded-sm hover:opacity-80 transition font-semibold flex items-center justify-center
             max-md:px-2.5 max-md:py-2.5 max-w-sm mx-auto text-center max-md:mb-4"
          >
            Give Us A Call: (+234) 810-646-6601
          </a>
        </div>
      </motion.div>
    </section>
  );
}