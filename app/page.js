"use client";

import { useEffect, useState, useRef } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import DiagonalRibbon from "@/components/DiagonalRibbon";
import HeroImageSlider from "@/components/HeroSection";
import About from "@/components/About";
import ServicesShowcase from "@/components/ServicesShowcase";
import PrivateCelebration from "@/components/PrivateCelebration";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/cta";

export default function HomePage() {
  const [showDiagonal, setShowDiagonal] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarBottom = navbarRef.current.offsetHeight;
        setShowDiagonal(window.scrollY > navbarBottom);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-[#3d2b1f] overflow-x-hidden scroll-smooth">

      {/* Diagonal Ribbon with Phone */}
      <DiagonalRibbon visible={showDiagonal} phoneNumber="401-383-3631" />

      {/* Floating Action Buttons - includes scroll to top */}
      <FloatingButtons showScrollTop={true} />

      <main className="pt-4 sm:pt-8">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:px-24 min-h-[85vh] sm:min-h-[90vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="z-10 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 sm:mb-4 leading-tight">
                Making Every Celebration Taste Like Joy
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                From dreamy wedding cakes to unforgettable event experiences — 
                Sosa's Catering brings your special moments to life with a touch of magic.
              </p>
              <button className="bg-[#f7bfa0] hover:bg-[#f4a77d] text-white text-base sm:text-lg px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all w-full sm:w-auto">
                Let's Create Magic Together
              </button>
            </div>

            {/* Right side - Image Slider */}
            <div className="relative order-1 lg:order-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center lg:justify-end">
              <HeroImageSlider />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <About />
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <ServicesShowcase/>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery">
          <Gallery/>
        </section>

        {/* PRIVATE CELEBRATION SECTION */}
        <section id="private">
          <PrivateCelebration/>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <Testimonials/>
        </section>

        {/* CTA */}
        <section>
          <CTA/>
        </section>
        
      </main>
    </div>
  );
}