"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesPreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  const [activeImageIndex, setActiveImageIndex] = useState([0, 0, 0]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const minSwipeDistance = 50;

  const services = [
    {
      icon: <Sparkles className="w-5 h-5" strokeWidth={2} />,
      title: "Custom Cakes & Pastries",
      desc: "Every creation is a masterpiece. From towering celebration cakes to delicate petit fours, we craft edible art that tastes as divine as it looks.",
      color: "from-amber-50 to-orange-50",
      accentColor: "text-[#FA812F]",
      bgAccent: "bg-[#FFF8E7]",
      iconBg: "bg-white",
      // number: "01",
      images: [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop",
        "/services/Naked.jpg"
      ]
    },
    {
      icon: <Heart className="w-5 h-5" strokeWidth={2} />,
      title: "Full-Service Catering",
      desc: "From intimate gatherings to grand celebrations, we bring culinary excellence and impeccable presentation to every table.",
      color: "from-rose-50 to-pink-50",
      accentColor: "text-[#E01E00]",
      bgAccent: "bg-[#FFF8E7]",
      iconBg: "bg-white",
      // number: "02",
      images: [
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
        "/Work/foodbank.jpg",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
      ]
    },
    {
      icon: <Star className="w-5 h-5" strokeWidth={2} />,
      title: "Event Planning & Styling",
      desc: "Let us transform your vision into reality. We orchestrate every detail so you can be fully present in your special moments.",
      color: "from-violet-50 to-purple-50",
      accentColor: "text-[#F9B233]",
      bgAccent: "bg-[#FFF8E7]",
      iconBg: "bg-white",
      // number: "03",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop"
      ]
    },
  ];

  const handleNextImage = (serviceIndex) => {
    setActiveImageIndex(prev => {
      const newIndex = [...prev];
      newIndex[serviceIndex] = (newIndex[serviceIndex] + 1) % services[serviceIndex].images.length;
      return newIndex;
    });
  };

  const handlePrevImage = (serviceIndex) => {
    setActiveImageIndex(prev => {
      const newIndex = [...prev];
      newIndex[serviceIndex] = newIndex[serviceIndex] === 0 
        ? services[serviceIndex].images.length - 1 
        : newIndex[serviceIndex] - 1;
      return newIndex;
    });
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (serviceIndex) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextImage(serviceIndex);
    }
    if (isRightSwipe) {
      handlePrevImage(serviceIndex);
    }
  };

  return (
    <section ref={containerRef} id="services-showcase" className="relative bg-gradient-to-b from-white via-[#FFF8E7] to-white py-32 px-6 overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#F9B233]/20 to-[#FA812F]/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-br from-[#E01E00]/20 to-[#FA812F]/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
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
            <span className="px-6 py-2 bg-gradient-to-r from-[#FFF8E7] to-[#F9B233]/30 text-[#3A2E2E] rounded-full text-sm font-medium tracking-wider">
              WHAT WE OFFER
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#3A2E2E] mb-6 leading-tight">
            Crafted With{" "}
            <span className="bg-gradient-to-r from-[#F9B233] via-[#FA812F] to-[#E01E00] bg-clip-text text-transparent">
              Love & Passion
            </span>
          </h2>
          
          <p className="text-[#3A2E2E] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Where culinary artistry meets heartfelt celebration. Every detail is thoughtfully 
            designed to make your moments unforgettable.
          </p>
        </motion.div>

        {/* Services Grid - Staggered Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Image Gallery Section */}
              <div 
                className="w-full md:w-1/2 relative group"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => onTouchEnd(index)}
              >
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-visible">
                  {/* Image Stack */}
                  {service.images.map((img, imgIndex) => {
                    const isActive = activeImageIndex[index] === imgIndex;
                    const offset = (imgIndex - activeImageIndex[index] + service.images.length) % service.images.length;
                    
                    return (
                      <motion.div
                        key={imgIndex}
                        className="absolute inset-0 cursor-pointer"
                        initial={false}
                        animate={{ 
                          y: offset * 30,
                          scale: 1 - (offset * 0.05),
                          zIndex: service.images.length - offset,
                          opacity: offset > 2 ? 0 : 1
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                        onClick={() => handleNextImage(index)}
                      >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                          <img 
                            src={img}
                            alt={`${service.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage(index);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <ChevronLeft className={`w-5 h-5 ${service.accentColor}`} />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage(index);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <ChevronRight className={`w-5 h-5 ${service.accentColor}`} />
                  </button>

                  {/* Small Icon Badge */}
                  <motion.div
                    className={`absolute top-6 left-6 ${service.iconBg} ${service.accentColor} p-3 rounded-2xl shadow-xl z-50`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Number Badge */}
                  {/* <motion.div
                    className={`absolute bottom-6 right-6 ${service.iconBg} px-5 py-3 rounded-2xl shadow-xl z-50`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    <span className={`text-2xl font-bold ${service.accentColor}`}>
                      {service.number}
                    </span>
                  </motion.div> */}

                  {/* Image Counter with dots */}
                  <motion.div
                    className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-medium z-50 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <span>{activeImageIndex[index] + 1}/{service.images.length}</span>
                    <div className="flex gap-1">
                      {service.images.map((_, dotIndex) => (
                        <div 
                          key={dotIndex}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            activeImageIndex[index] === dotIndex ? 'bg-white w-3' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl max-md:text-xl max-md:mt-6 md:text-3xl font-serif font-bold text-[#3A2E2E] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#3A2E2E] text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-3">
                  {["Premium Quality", "Custom Design", "Expert Team"].map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                      className={`px-4 py-2 ${service.bgAccent} ${service.accentColor} rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.a
                  href="/services"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center gap-2 ${service.accentColor} text-sm font-semibold hover:gap-3 transition-all duration-300 group`}
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrated CTA Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-4xl max-md:text-2xl font-serif font-bold text-[#3A2E2E] mb-6">
            Ready to Create Something Beautiful?
          </h3>
          <p className="text-[#3A2E2E] text-lg md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed max-md:text-sm">
            Let's bring your vision to life with flavors and designs that tell your unique story.
          </p>
          
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FA812F] to-[#E01E00] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300
            max-md:px-3 max-md:py-4"
          >
            <span className="text-lg max-md:text-sm">Explore All Services</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}