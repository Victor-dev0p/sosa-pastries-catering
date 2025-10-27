"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryCategories = [
  {
    name: "Wedding",
    mainImage: "/gallery/wedding-main.jpg",
    images: [
      "/gallery/wedding1.jpg",
      "/gallery/wedding2.jpg",
      "/gallery/wedding3.jpg",
      "/gallery/wedding4.jpg",
    ],
  },
  {
    name: "Birthday",
    mainImage: "/gallery/birthday-main.jpg",
    images: [
      "/gallery/birthday1.jpg",
      "/gallery/birthday2.jpg",
      "/gallery/birthday3.jpg",
      "/gallery/birthday4.jpg",
    ],
  },
  {
    name: "Corporate",
    mainImage: "/gallery/corporate-main.jpg",
    images: [
      "/gallery/corporate1.jpg",
      "/gallery/corporate2.jpg",
      "/gallery/corporate3.jpg",
      "/gallery/corporate4.jpg",
    ],
  },
  {
    name: "Custom",
    mainImage: "/gallery/custom-main.jpg",
    images: [
      "/gallery/custom1.jpg",
      "/gallery/custom2.jpg",
      "/gallery/custom3.jpg",
      "/gallery/custom4.jpg",
    ],
  },
  {
    name: "Meal Package",
    mainImage: "/gallery/meal-main.jpg",
    images: [
      "/gallery/meal1.jpg",
      "/gallery/meal2.jpg",
      "/gallery/meal3.jpg",
      "/gallery/meal4.jpg",
    ],
  },
  {
    name: "Event Setup",
    mainImage: "/gallery/event-main.jpg",
    images: [
      "/gallery/event1.jpg",
      "/gallery/event2.jpg",
      "/gallery/event3.jpg",
      "/gallery/event4.jpg",
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
    }, 7000); // switch every 7s
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
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentCategory.mainImage}
              src={currentCategory.mainImage}
              alt={currentCategory.name}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl shadow-lg object-cover w-full h-[450px]"
            />
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
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
              repeatDelay: 0.5,
            }}
            className="flex gap-6"
          >
            {[...currentCategory.images, ...currentCategory.images].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${currentCategory.name}-${i}`}
                  className="w-[220px] h-[280px] object-cover rounded-2xl shadow-md"
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
