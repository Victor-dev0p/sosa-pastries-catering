"use client";
import { motion } from "framer-motion";

export default function RequestQuoteSection() {
  return (
    <section className="py-24 bg-coral text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        Request a Quote
      </motion.h2>
      <p className="max-w-xl mx-auto mb-8 text-white/90">
        Planning a wedding, birthday, or event? Let’s bring your vision to life with Sosa’s Catering.
      </p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-lg text-brown" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-lg text-brown" />
        <textarea placeholder="Tell us about your event..." rows="4" className="p-3 rounded-lg text-brown"></textarea>
        <button className="bg-brown px-6 py-3 rounded-full hover:bg-white hover:text-brown transition">
          Submit Request
        </button>
      </form>
    </section>
  );
}
