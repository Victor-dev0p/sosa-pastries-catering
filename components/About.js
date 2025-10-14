"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-5">
        <motion.img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Sosa Catering"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brown mb-4">About Sosa</h2>
          <p className="text-brown/80 leading-relaxed">
            Hi, I’m Sosa — a passionate baker and event caterer who believes
            every celebration deserves a personal touch. From intricate cakes
            to surprise setups, I put heart into every detail — because moments
            like these matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
