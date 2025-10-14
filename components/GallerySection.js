"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: '/gallery1.jpg', alt: 'Wedding Cake', category: 'Weddings' },
  { src: '/gallery2.jpg', alt: 'Birthday Celebration', category: 'Birthdays' },
  { src: '/gallery3.jpg', alt: 'Corporate Event', category: 'Corporate' },
  { src: '/gallery4.jpg', alt: 'Custom Desserts', category: 'Desserts' },
  { src: '/gallery5.jpg', alt: 'Event Setup', category: 'Décor' },
  { src: '/gallery6.jpg', alt: 'Meal Package', category: 'Catering' }
];

function GalleryItem({ image, index }) {
  return (
    <motion.div
      className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-lg font-semibold mb-1">{image.alt}</p>
          <p className="text-sm opacity-90">{image.category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section className="relative bg-stone-50 py-24 px-6 md:px-12 lg:px-24" id="gallery">
      
      {/* Top Diagonal Divider */}
      <div 
        className="absolute top-0 left-0 w-0 h-0 -mt-1"
        style={{
          borderStyle: 'solid',
          borderWidth: 'clamp(100px, 12vw, 180px) 100vw 0 0',
          borderColor: '#f5f5f5 transparent transparent transparent'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of our finest creations and memorable celebrations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.src} image={image} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-10 py-4 rounded-full font-semibold tracking-wide uppercase text-sm transition-all duration-300">
            View All Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}