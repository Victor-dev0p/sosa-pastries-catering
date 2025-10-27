"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Wedding Cakes",
    description: "This is your day. We know you've had a vision of how this celebration would unfold. We're going to make sure it exceeds your dreams with custom wedding cakes that become the centerpiece of your special day.",
    image: "/cakes.jpg",
    link: "/services/wedding-cakes"
  },
  {
    title: "Corporate Events",
    description: "We believe good desserts and good business go hand in hand. Our corporate catering will leave your guests with a memorable impression of your brand, perfect for meetings, launches, or employee celebrations.",
    image: "/chops.jpg",
    link: "/services/corporate"
  },
  {
    title: "Event Décor & Setup",
    description: "Transform any space into a stunning celebration venue. From elegant table settings to complete event styling, we handle every aesthetic detail to bring your vision to life beautifully.",
    image: "/decor.jpg",
    link: "/services/decor"
  },
  {
    title: "Custom Meal Packages",
    description: "Delight your guests with our carefully curated meal packages. From small chops to full-course dining, every dish is crafted with premium ingredients and attention to detail.",
    image: "/meals.jpg",
    link: "/services/meals"
  }
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="relative h-[70vh] min-h-[500px] overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
        <h3 className="text-3xl md:text-4xl font-serif font-light mb-4 tracking-wide">
          {service.title}
        </h3>
        <p className="text-base md:text-lg leading-relaxed mb-6 font-light opacity-95 max-w-xl">
          {service.description}
        </p>
        <a 
          href={service.link}
          className="inline-block border-b-2 border-white pb-1 text-sm md:text-base tracking-widest uppercase font-semibold hover:opacity-70 transition-opacity"
        >
          Learn More »
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesShowcase() {
  return (
    <section className="relative">

      {/* 2x2 Grid of Large Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Full Width Feature Section */}
      <motion.div
        className="relative h-[80vh] min-h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/gallery1.jpg"
            alt="Event Gallery Preview"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/60 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white z-10 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide">
            Event Gallery
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-light opacity-95 max-w-3xl">
            Our image gallery provides a glimpse into our creations for weddings, corporate events, and celebration hosts. We are pleased to share these images from past occasions and invite you to explore the variety and expanse of Sosa's Catering capabilities.
          </p>
          <a 
            href="/gallery"
            className="inline-block border-b-2 border-white pb-1 text-base md:text-lg tracking-widest uppercase font-semibold hover:opacity-70 transition-opacity"
          >
            View Full Gallery »
          </a>
        </div>
      </motion.div>
    </section>
  );
}