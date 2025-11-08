"use client";
import React from 'react';

// Images array
const marqueeImages = [
  { src: "/Work/foodtray1.jpg", alt: "Event Decor 1", shape: "rounded-full" },
  { src: "/Work/regwed.jpg", alt: "Event Decor 2", shape: "rounded-l-full" },
  { src: "/Work/foodbox1.jpg", alt: "Catering Setup 1", shape: "rounded-r-full" },
  { src: "/Work/foodbank2.jpg", alt: "Event Decor 4", shape: "rounded-t-full" },
  { src: "/Work/foodtray.jpg", alt: "Food Tray", shape: "rounded-b-full" },
  { src: "/Work/smallchops.jpg", alt: "Wedding Cake", shape: "rounded-3xl" },
  { src: "/Work/bdaycheers.jpg", alt: "Birthday Cake", shape: "rounded-bl-full" },
  { src: "/Work/foodbox.jpg", alt: "Meal Package", shape: "rounded-br-full" },
  { src: "/Work/foodbank.jpg", alt: "Event Decor", shape: "rounded-full" },
  { src: "/Work/soup.jpg", alt: "Soup", shape: "rounded-l-full" },
  { src: "/Work/tradcake.jpg", alt: "Traditional Cake", shape: "rounded-r-full" },
  { src: "/Work/wafer.jpg", alt: "Wafer", shape: "rounded-t-full" },
];

const MarqueeContent = ({ images }) => (
  <div className="flex flex-shrink-0">
    {images.map((item, index) => (
      <div 
        key={index} 
        className="relative flex-shrink-0 overflow-hidden px-2 md:px-3"
        style={{
          width: 'clamp(200px, 20vw, 280px)',
          height: 'clamp(200px, 20vw, 280px)',
        }}
      >
        <img
          src={item.src}
          alt={item.alt}
          className={`h-full w-full object-cover ${item.shape}`}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

export default function VisualMarquee() {
  return (
    <div className="relative overflow-hidden py-12 md:py-20 bg-white">
      <div className="flex overflow-hidden">
        <div 
          className="flex animate-marquee"
          style={{ 
            willChange: 'transform',
          }}
        >
          {/* First set */}
          <MarqueeContent images={marqueeImages} />
          {/* Duplicate for seamless loop */}
          <MarqueeContent images={marqueeImages} />
        </div>
      </div>
    </div>
  );
}