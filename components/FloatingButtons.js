"use client";

import { useState, useEffect } from "react";
import { Menu, ChevronUp, X } from "lucide-react";

// Smooth scroll utility function
export const smoothScrollTo = (targetPosition, duration = 500) => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export default function FloatingButtons({ 
  showScrollTop = false
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    smoothScrollTo(0, 500);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div
        className={`fixed right-4 sm:right-6 md:right-8 bottom-6 sm:bottom-8 z-50 flex flex-col gap-3 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-[#3d2b1f] group-hover:text-[#f7bfa0] transition-colors" />
          </button>
        )}

        {/* Hamburger Menu Button - Shows on mobile/tablet only */}
        <button
          onClick={toggleSidebar}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-[#3d2b1f] group-hover:text-[#f7bfa0] transition-colors" />
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 h-full w-[150px] md:w-[220px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f7bfa0]">
              <img
                src="/Heros/Logo.jpg"
                alt="Sosa's Pastries & Catering"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-6">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/about"
                className="block py-3 px-4 rounded-lg hover:bg-[#f7bfa0]/10 hover:text-[#f7bfa0] transition-colors text-[#3d2b1f] font-medium"
                onClick={closeSidebar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-3 px-4 rounded-lg hover:bg-[#f7bfa0]/10 hover:text-[#f7bfa0] transition-colors text-[#3d2b1f] font-medium"
                onClick={closeSidebar}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="block py-3 px-4 rounded-lg hover:bg-[#f7bfa0]/10 hover:text-[#f7bfa0] transition-colors text-[#3d2b1f] font-medium"
                onClick={closeSidebar}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-3 px-4 rounded-lg hover:bg-[#f7bfa0]/10 hover:text-[#f7bfa0] transition-colors text-[#3d2b1f] font-medium"
                onClick={closeSidebar}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button in Sidebar */}
          <div className="mt-8">
            <a href="/quote">
              <button className="w-full bg-[#f7bfa0] px-2 py-1 md:px-4 md:py-4 rounded-full hover:bg-[#f4a77d] transition-colors text-white font-medium text-xs
              md:text-sm">
                Request a Quote
              </button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}