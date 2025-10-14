"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IntroSection() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24">
      
      {/* Top Diagonal Divider - coming from hero */}
      <div 
        className="absolute top-0 left-0 w-0 h-0 -mt-1"
        style={{
          borderStyle: 'solid',
          borderWidth: 'clamp(100px, 12vw, 180px) 100vw 0 0',
          borderColor: 'white transparent transparent transparent'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Centered Intro Text */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-6 leading-relaxed">
            Creating Distinctive Culinary Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Sosa's Catering is your only stop when planning the perfect celebration. Grand or intimate, elegant or whimsical, we create distinctive baked masterpieces, beautiful presentations, and impeccable personalized service for our brides, corporate partners, and celebration hosts.
          </p>
        </motion.div>

        {/* Two Column Layout - Image & About */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-20">
          
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sosa-about.jpg"
                alt="Meet Sosa - Passionate Baker"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-6">
              Meet Sosa
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hi, I'm Sosa — a passionate baker and event caterer who believes every celebration deserves a personal touch. From intricate cakes to surprise setups, I put heart into every detail because moments like these matter.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether it's a wedding, birthday, or intimate event, I'll help you make it beautifully memorable. Every creation tells a story, and I'm here to help you tell yours.
            </p>
            <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}