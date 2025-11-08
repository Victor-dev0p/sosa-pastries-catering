"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Star, Quote, Cake, Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// --- CUSTOM HOOK FOR TIMING ---
const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

// --- CONFIGURATION ---
const TEXT_CYCLE_INTERVAL = 7000; // Text fades every 7 seconds
const IMAGE_CYCLE_INTERVAL = 180000; // Image changes every 3 minutes (180,000 ms)

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = useMemo(() => ([
    {
      name: "Tolu A.",
      role: "Bride 👰🏽",
      text: "Sosa Catering made our wedding reception unforgettable! Every meal was delicious and beautifully presented. Our guests couldn't stop talking about it!",
      color: "from-rose-400/20 to-pink-400/20",
    },
    {
      name: "Chidi O.",
      role: "Corporate Client 💼",
      text: "We had a 3-day company event and Sosa handled catering perfectly. Always punctual, professional, and the food was top-tier every single day.",
      color: "from-amber-400/20 to-orange-400/20",
    },
    {
      name: "Amara K.",
      role: "Birthday Host 🎂",
      text: "My 30th birthday was magical! From the cake to the cocktails, everything screamed class. I'd recommend Sosa to anyone looking for a stress-free celebration.",
      color: "from-violet-400/20 to-purple-400/20",
    },
    {
      name: "Funmi & Tunde",
      role: "Anniversary Couple 💕",
      text: "Our 25th anniversary celebration was beyond our wildest dreams! Sosa captured the essence of our love story in every detail. Absolutely perfect!",
      color: "from-emerald-400/20 to-teal-400/20",
    },
    {
      name: "Ibrahim L.",
      role: "Baby Shower Host 👶",
      text: "The baby shower was everything we hoped for and more! Beautiful setup, amazing food, and stress-free planning. Thank you Sosa!",
      color: "from-sky-400/20 to-blue-400/20",
    }
  ]), []);
  
  const slideImages = useMemo(() => ([
    "monials/testi.jpg",
    "monials/testi1.jpg",
  ]), []);

  useInterval(() => {
    setActiveTextIndex((prev) => (prev + 1) % testimonials.length);
  }, TEXT_CYCLE_INTERVAL);

  useInterval(() => {
    setActiveImageIndex((prev) => (prev + 1) % slideImages.length);
  }, IMAGE_CYCLE_INTERVAL);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative bg-gradient-to-b from-white via-[#FFF8E7] to-white py-24 px-6 overflow-hidden"
    >
      {/* Playful floating elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-10 text-[#F9B233]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Cake className="w-24 h-24" />
      </motion.div>
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 text-[#FA812F]/20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-20 h-20" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 right-20 text-[#E01E00]/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-[#FFF8E7] via-[#F9B233]/30 to-[#FA812F]/20 text-[#3A2E2E] rounded-full text-xs md:text-sm font-medium tracking-wider">
              💖 LOVE FROM OUR CLIENTS
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3A2E2E] mb-4 leading-snug md:leading-tight">
            Happy Hearts,{" "}
            <span className="bg-gradient-to-r from-[#F9B233] via-[#FA812F] to-[#E01E00] bg-clip-text text-transparent">
              Happy Stories
            </span>
          </h2>

          <p className="text-[#3A2E2E] text-base md:text-lg max-w-2xl mx-auto">
            Real celebrations, real joy, real testimonials from our amazing clients! 
          </p>
        </motion.div>

        {/* Dynamic Content Block */}
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          
          {/* LEFT COLUMN: Testimonial Text */}
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[450px] flex items-center p-4 md:p-0">
            
            <Quote className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 text-[#3A2E2E]/10 transform scale-x-[-1]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTextIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="w-full relative z-10 space-y-4"
              >
                <p className="text-[#3A2E2E] text-xl md:text-2xl font-medium italic leading-relaxed pt-12 md:pt-0">
                  "{testimonials[activeTextIndex].text}"
                </p>
                
                <div className="pt-4 border-t border-[#3A2E2E]/10">
                  <p className="text-[#3A2E2E] text-lg font-bold">
                    {testimonials[activeTextIndex].name}
                  </p>
                  <p className="text-sm text-[#3A2E2E]/60">
                    {testimonials[activeTextIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
          
          {/* RIGHT COLUMN: Image Visual */}
          <motion.div 
            className="hidden md:block w-full md:w-1/2 relative overflow-hidden h-[450px] rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={slideImages[activeImageIndex]}
                alt={`Client Event Showcase ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-black/15" />
            
            <div className="absolute inset-0 z-10 pointer-events-none">
              <Sparkles className="absolute top-8 left-8 w-12 h-12 text-white/50" />
              <Heart className="absolute bottom-8 right-8 w-12 h-12 text-white/50" />
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3A2E2E] text-lg mb-6">
            Ready to create your own celebration story? ✨
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F9B233] via-[#FA812F] to-[#E01E00] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base max-md:px-4"
          >
            Let's Celebrate Together
            <Heart className="w-4 h-4 md:w-5 md:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}