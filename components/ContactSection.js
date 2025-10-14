"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 py-24 px-6 md:px-12 lg:px-24 text-white overflow-hidden" id="contact">
      
      {/* Top Diagonal Divider */}
      <div 
        className="absolute top-0 right-0 w-0 h-0 -mt-1 z-10"
        style={{
          borderStyle: 'solid',
          borderWidth: '0 0 clamp(100px, 12vw, 180px) 100vw',
          borderColor: 'transparent transparent #b45309 transparent'
        }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 leading-tight">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg md:text-xl font-light opacity-95 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your dream event to life? Reach out to Sosa today — she can't wait to make your celebration unforgettable.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="bg-white text-amber-800 hover:bg-amber-50 px-10 py-4 rounded-full font-semibold tracking-wide text-lg transition-all duration-300 hover:shadow-2xl">
            Contact Us
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-10 py-4 rounded-full font-semibold tracking-wide text-lg transition-all duration-300">
            WhatsApp Us
          </button>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-semibold text-lg mb-2 tracking-wide">Call Us</h4>
            <p className="text-white/90">+234 XXX XXX XXXX</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-3">📧</div>
            <h4 className="font-semibold text-lg mb-2 tracking-wide">Email Us</h4>
            <p className="text-white/90">hello@sosascatering.com</p>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-3">📍</div>
            <h4 className="font-semibold text-lg mb-2 tracking-wide">Visit Us</h4>
            <p className="text-white/90">Lagos, Nigeria</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Diagonal to Footer */}
      <div 
        className="absolute bottom-0 left-0 w-0 h-0 -mb-1 z-10"
        style={{
          borderStyle: 'solid',
          borderWidth: 'clamp(80px, 10vw, 150px) 100vw 0 0',
          borderColor: '#78350f transparent transparent transparent'
        }}
      />
    </section>
  );
}