"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryCategories = [
  {
    name: "Wedding",
    mainImage: "/Heros/hero2.jpg",
    images: [
      "/Work/tradcake.jpg",
      "/Work/bridal.jpg",
      "/Work/regwed.jpg",
      "/Work/cutewedcake.webp",
    ],
  },
  {
    name: "Birthday",
    mainImage: "/Work/60cap.jpg",
    images: [
      "/Work/60th.jpg",
      "/Work/wafer.jpg",
      "/Work/feather.jpg",
      "/Work/bdaycheers.jpg",
    ],
  },
  {
    name: "Catering",
    mainImage: "/Heros/hero3.jpg",
    images: [
      "/Work/sosapack.jpg",
      "/Work/foodtray.jpg",
      "/Work/foodtray1.jpg",
      "/Work/foodbank.jpg",
    ],
  },
  {
    name: "Custom",
    mainImage: "/Work/custom1.jpg",
    images: [
      "/Work/parfait.jpg",
      "/Work/custom.jpg",
      "/Work/Tezza-C.webp",
      "/Work/wafer1.jpg",
    ],
  },
  {
    name: "Meal Package",
    mainImage: "/Work/foodbox.jpg",
    images: [
      "/Work/foodbox1.jpg",
      "/Work/blacksoupbox.jpg",
      "/Work/soup.jpg",
      "/Work/smallchops.jpg",
    ],
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryCategories.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [paused]);

  const currentCategory = galleryCategories[currentIndex];

  return (
    <section
      id="gallery"
      className="bg-[#fff9f7] py-20 px-6 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT: Main Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.mainImage}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl shadow-lg overflow-hidden w-full max-h-[500px] flex justify-center items-center bg-[#f5f2f0]"
            >
              <img
                src={currentCategory.mainImage}
                alt={currentCategory.name}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 text-[#3d2b1f] text-sm px-4 py-2 rounded-full font-medium backdrop-blur">
            {currentCategory.name}
          </div>
        </div>

        {/* RIGHT: Marquee Gallery */}
        <div
          className="relative w-full lg:w-1/2 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            key={currentCategory.name}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
              repeatDelay: 0.5,
            }}
            className="flex gap-6"
          >
            {currentCategory.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${currentCategory.name}-${i}`}
                className="w-[220px] h-[280px] object-cover rounded-2xl shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
