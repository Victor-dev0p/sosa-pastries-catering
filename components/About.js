"use client";
import { motion } from "framer-motion";
import WavySection from "@/components/WavySection";

export default function About() {
  return (
    <WavySection position="top" bgColor="#FFF8E7" className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-5">
        {/* Image Collage */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Tall Image */}
          <motion.img
            src="/sosa.jpg"
            alt="Sosa Catering"
            className="rounded-2xl shadow-lg w-full md:w-1/2 h-[420px] object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          {/* Two Small Stacked Images */}
          <div className="flex flex-col justify-between gap-4 w-full md:w-1/2">
            <motion.img
              src="/sosa3.jpg"
              alt="Catering event"
              className="rounded-2xl shadow-lg h-[200px] object-cover"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.img
              src="/sosa2.jpg"
              alt="Catering event"
              className="rounded-2xl shadow-lg h-[200px] object-cover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold text-[#3A2E2E] mb-4">About Sosa</h2>
          <p className="text-[#3A2E2E] leading-relaxed mb-4">
            Hi, I'm Sosa — a passionate baker and event caterer who believes every
            celebration deserves a personal touch. From intricate cakes to surprise
            setups, I put heart into every detail — because moments like these matter.
          </p>
          <p className="text-[#3A2E2E] leading-relaxed">
            Whether it's a wedding, birthday, or intimate event, I'll help you make it
            beautifully memorable.
          </p>
          <button className="mt-4 border-b-2 border-[#FA812F] pb-1 text-[#FA812F] hover:border-[#E01E00] hover:text-[#E01E00] transition-all duration-300 font-medium">
            Learn More →
          </button>
        </motion.div>
      </div>
    </WavySection>
  );
}