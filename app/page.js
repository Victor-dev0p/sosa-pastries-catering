"use client";

import { useEffect, useState } from "react";
import DiagonalRibbon from "@/components/DiagonalRibbon";
import HeroImageSlider from "@/components/HeroSection";
import About from "@/components/About";
import ServicesShowcase from "@/components/ServicesShowcase";
import PrivateCelebration from "@/components/PrivateCelebration";
import Gallery from "@/components/Gallery";

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
    <div className="relative min-h-screen bg-black text-[#3d2b1f] overflow-x-hidden scroll-smooth">
      {/* NAVBAR */}
      <header className="top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md fixed">
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
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="#private" className="hover:underline">
                Private Celebration
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <button className="bg-[#f7bfa0] px-4 py-2 rounded-full hidden md:block hover:bg-[#f4a77d] transition-colors">
            Request a Quote
          </button>
        </nav>
      </header>

      {/* Diagonal Ribbon with Phone */}
      <DiagonalRibbon visible={showDiagonal} phoneNumber="401-383-3631" />

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="relative px-8 py-20 lg:px-24 min-h-[90vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="z-10 order-2 lg:order-1">
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

            {/* Right side - Image Slider */}
            <div className="relative order-1 lg:order-2 min-h-[500px] lg:min-h-[600px] flex items-center justify-end">
              <HeroImageSlider />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <About />
        </section>

        {/* SERVICES SECTION */}
        <section id="services" >
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
      </main>
    </div>
  );
}
