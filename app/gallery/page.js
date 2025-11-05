"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Sample images (unchanged)
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=600", title: "Nautical Wedding Cake", height: 300 },
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300", title: "Classic White Tiered", height: 200 },
    { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=400", title: "Rustic Naked Cake", height: 250 },
    { src: "https://images.unsplash.com/photo-1562440499-64c9a4712c99?w=400&h=500", title: "Garden Wedding Cake", height: 320 },
    { src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=350", title: "Anchor Theme Design", height: 220 },
    { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300", title: "Outdoor Naked Cake", height: 200 },
    { src: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&h=600", title: "Rustic Display Setup", height: 350 },
    { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400", title: "Simple White Elegance", height: 240 },
    { src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300", title: "Minimalist Wedding", height: 190 },
    { src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=550", title: "Floral Buttercream", height: 310 },
    { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=350", title: "Berry Topped Cake", height: 230 },
    { src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=400", title: "White Rose Cake", height: 260 },
  ];

  useEffect(() => {
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  const handleSelect = (item, index) => {
    setSelected(item);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelected(null);
    setCurrentIndex(null);
    document.body.style.overflow = "";
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!shuffledImages.length) return;
    const nextIndex = (currentIndex + 1) % shuffledImages.length;
    setCurrentIndex(nextIndex);
    setSelected(shuffledImages[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!shuffledImages.length) return;
    const prevIndex = (currentIndex - 1 + shuffledImages.length) % shuffledImages.length;
    setCurrentIndex(prevIndex);
    setSelected(shuffledImages[prevIndex]);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!selected) return;
      if (e.key === "Escape") closeModal();
      // Added checks to prevent propagation so modal doesn't close
      if (e.key === "ArrowRight") handleNext({ stopPropagation: () => {} });
      if (e.key === "ArrowLeft") handlePrev({ stopPropagation: () => {} });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, currentIndex, shuffledImages]);

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-3">
          Our Gallery
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Explore our collection of custom cakes and sweet creations for weddings,
          events, and special celebrations.
        </p>
      </motion.div>

      {/* Masonry Grid Container */}
      <div className="max-w-4xl mx-auto">
        <div className="
          columns-2 md:columns-3 lg:columns-4 
          gap-3 md:gap-4
        ">
          {shuffledImages.map((item, index) => (
            <motion.div
              key={index}
              className="
                break-inside-avoid-column mb-2
                relative cursor-pointer group overflow-hidden rounded-lg 
                **shadow-xl hover:shadow-2xl** transition-all duration-300 ease-out
              "
              style={{ height: `${item.height}px` }}
              onClick={() => handleSelect(item, index)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* 💥 Hover Title Container 💥 */}
              <div className="absolute inset-0 flex items-center justify-center 
                  bg-gradient-to-t from-black/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeModal} // 💥 Closes on outside click 💥
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button (X) */}
            <button
              aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 text-3xl md:text-4xl font-light z-[60] flex items-center justify-center"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Prev Button (←) */}
            <button
              aria-label="Previous image"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-2xl md:text-3xl p-2 rounded-full z-[60] flex items-center justify-center transition-all"
              onClick={handlePrev}
            >
              &larr;
            </button>

            {/* Next Button (→) */}
            <button
              aria-label="Next image"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-2xl md:text-3xl p-2 rounded-full z-[60] flex items-center justify-center transition-all"
              onClick={handleNext}
            >
              &rarr;
            </button>

            {/* Image Container */}
            <motion.div
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] mx-auto px-4 md:px-20"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={currentIndex}
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* 💥 Title at Bottom (Remains at bottom when clicked) 💥 */}
            <motion.div
              className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center z-[60] px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white text-base md:text-xl font-medium bg-black bg-opacity-60 inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg">
                {selected.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}