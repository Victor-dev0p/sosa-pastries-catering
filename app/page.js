"use client";

import { useEffect, useState } from "react";
import DiagonalRibbon from "@/components/DiagonalRibbon";
import HeroImageSlider from "@/components/HeroSection";
import DiagonalSection from "@/components/DiagonalSection";

export default function HomePage() {
  const [showDiagonal, setShowDiagonal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDiagonal(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff9f7] to-[#fffdfc] text-[#3d2b1f] overflow-x-hidden">

      {/* NAVBAR */}
      <header className="top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="relative flex items-center justify-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#f7bfa0] flex items-center justify-center">
              <img
                src="/Heros/Logo.jpg"
                alt="Sosa's Pastries & Catering"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Circular text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 absolute -z-10 text-[#f7bfa0]"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="7" fill="#f7bfa0" letterSpacing="1.5">
                  <textPath href="#circlePath" startOffset="0%">
                    Sosa's Pastries & Catering • Sosa's Pastries & Catering •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
          <button className="bg-[#f7bfa0] px-4 py-2 rounded-full hidden md:block hover:bg-[#f4a77d] transition-colors">
            Request a Quote
          </button>
        </nav>
      </header>

      {/* Diagonal Ribbon with Phone */}
      <DiagonalRibbon visible={showDiagonal} phoneNumber="401-383-3631" />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:px-24 overflow-hidden min-h-[90vh]">
          <div className="max-w-lg z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Making Every Celebration Taste Like Joy
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              From dreamy wedding cakes to unforgettable event experiences — 
              Sosa's Catering brings your special moments to life with a touch of magic.
            </p>
            <button className="bg-[#f7bfa0] hover:bg-[#f4a77d] text-white text-lg px-6 py-3 rounded-2xl transition-all">
              Let's Create Magic Together
            </button>
          </div>

          {/* Animated Hero Image Slider */}
          <HeroImageSlider />
        </section>

        {/* ABOUT SECTION with diagonal top */}
        <DiagonalSection 
          bgColor="#ffffff" 
          diagonalPosition="top"
          diagonalDirection="right"
          className="py-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 px-8 lg:px-24">
            <div className="relative w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden">
              <img 
                src="/sosa-about.jpg" 
                alt="About Sosa" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-serif font-bold mb-4">Meet Sosa</h2>
              <p className="text-gray-700 mb-4">
                Hi, I'm Sosa — a passionate baker and event caterer who believes every celebration deserves a personal touch. 
                From intricate cakes to surprise setups, I put heart into every detail because moments like these matter.
              </p>
              <p className="text-gray-700">
                Whether it's a wedding, birthday, or intimate event, I'll help you make it beautifully memorable.
              </p>
            </div>
          </div>
        </DiagonalSection>

        {/* SERVICES SECTION with background image and diagonal */}
        <DiagonalSection 
          bgImage="/service-bg.jpg"
          diagonalPosition="both"
          diagonalDirection="left"
          className="py-32"
        >
          <div className="max-w-4xl mx-auto text-center text-white px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              From custom cakes to full event catering, we bring your vision to life with creativity and care.
            </p>
            <button className="bg-white text-[#8b3a3a] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Explore Services
            </button>
          </div>
        </DiagonalSection>

        {/* GALLERY SECTION */}
        <DiagonalSection 
          bgColor="#f5f5f5" 
          diagonalPosition="top"
          diagonalDirection="right"
          className="py-20"
        >
          <div className="px-8 lg:px-24 text-center">
            <h2 className="text-3xl font-serif font-bold mb-12">Gallery</h2>
            <p className="text-gray-600 mb-8">
              A glimpse of our creations and memorable celebrations
            </p>
            {/* Add gallery grid here */}
          </div>
        </DiagonalSection>
      </main>
    </div>
  );
}