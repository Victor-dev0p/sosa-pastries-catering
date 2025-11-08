"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF8E7] via-[#F9B233] to-[#FA812F] pt-32 pb-8 px-6 md:px-12 lg:px-24">
      
      {/* Newsletter Overlay Section */}
      <div className="absolute top-0 left-0 w-full z-20 max-md:mt-10 md:mt-10" style={{ transform: 'translateY(-50%)' }}>
        <div className="w-11/12 max-w-4xl mx-auto px-0 md:px-6"> 
          <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 border-2 border-[#FA812F]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="text-center md:text-left md:flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3A2E2E] mb-2 uppercase tracking-tight">
                  GET UPDATES & STAY CONNECTED.
                </h3>
                <p className="text-base sm:text-lg text-gray-700 font-serif">
                  Subscribe To Our Newsletter
                </p>
              </div>
              
              <div className="w-full md:w-auto md:flex-shrink-0">
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border-2 border-[#FA812F] rounded-md focus:outline-none focus:border-[#E01E00] text-gray-700"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[#FA812F] hover:bg-[#E01E00] text-white font-semibold rounded-md transition-colors uppercase tracking-wide"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-20">
        
        {/* Logo - Cursive Script Style and Clickable */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <h2 className="text-6xl md:text-7xl font-cursive text-[#3A2E2E] hover:text-[#FA812F] transition-colors cursor-pointer" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Sosa's
            </h2>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 text-[#3A2E2E]">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="hover:text-[#FA812F] transition-colors font-medium flex items-center gap-1"
            >
              Catering & Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-30 border border-[#FA812F]"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link href="/services/wedding-cakes" className="block px-4 py-2 text-gray-700 hover:bg-[#FFF8E7] hover:text-[#FA812F] transition-colors text-sm">
                  Wedding Cakes
                </Link>
                <Link href="/services/corporate" className="block px-4 py-2 text-gray-700 hover:bg-[#FFF8E7] hover:text-[#FA812F] transition-colors text-sm">
                  Corporate Events
                </Link>
                <Link href="/services/decor" className="block px-4 py-2 text-gray-700 hover:bg-[#FFF8E7] hover:text-[#FA812F] transition-colors text-sm">
                  Event Décor
                </Link>
                <Link href="/services/meals" className="block px-4 py-2 text-gray-700 hover:bg-[#FFF8E7] hover:text-[#FA812F] transition-colors text-sm">
                  Meal Packages
                </Link>
              </div>
            )}
          </div>
          <Link href="/gallery" className="hover:text-[#FA812F] transition-colors font-medium">
            Gallery
          </Link>
          <Link href="/quote" className="hover:text-[#FA812F] transition-colors font-medium">
            Quote
          </Link>
          <Link href="/about" className="hover:text-[#FA812F] transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#FA812F] transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* Divider */}
        <div className="border-t-2 border-[#FA812F] my-6 max-w-4xl mx-auto"></div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 text-[#3A2E2E]">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span className="font-medium">Benin City, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="font-medium">+234 810 646 6601</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-10 text-[#3A2E2E] text-xl">
          <a href="https://www.facebook.com/share/1Zks2HQN7e/?mibextid=wwXIfr" className="hover:text-[#1877F2] transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/_xoxah/#" className="hover:text-[#E4405F] transition">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@chefxoxah3?_r=1&_t=ZS-919PI0A45Mi" className="hover:text-[#000000] transition">
            <FaTiktok />
          </a>
          <a href="https://x.com/_xoxah?s=21" className="hover:text-[#000000] transition">
            <FaXTwitter />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm text-[#3A2E2E]">
          <p className="mb-2">© {currentYear} Sosa's Catering | All Rights Reserved.</p>
          <p>
            Made with love by <span className="font-semibold">Victor</span> 💛
          </p>
        </div>
      </div>
    </footer>
  );
}