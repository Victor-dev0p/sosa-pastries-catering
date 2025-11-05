"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTA() {
  const images = [
    "/cta/cta1.jpg",
    "/cta/cta2.jpg",
    "/cta/cta3.jpg",
    "/cta/cta4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact-cta"
      className="relative h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[index]})`,
            }}
          ></motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CTA content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-sm px-8 py-10 rounded-xl shadow-lg text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-serif font-bold text-[#3d2b1f] mb-4">
          Have A Question?
        </h2>
        <p className="text-[#3d2b1f]/80 mb-6 leading-relaxed">
          Sosa is more than just catering — we’re your full-service event partner,
          ready to help with everything from gourmet menus to rentals, décor,
          and expert planning advice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#3d2b1f] text-white px-6 py-3 rounded-md hover:bg-[#8b3a3a] transition"
          >
            Contact Us
          </a>
          <a
            href="tel:+2348000000000"
            className="bg-[#8b3a3a] text-white px-6 py-3 rounded-md hover:bg-[#3d2b1f] transition"
          >
            Give Us A Call: (+234) 800-000-0000
          </a>
        </div>
      </motion.div>
    </section>
  );
}
