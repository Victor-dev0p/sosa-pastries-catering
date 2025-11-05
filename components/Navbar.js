"use client";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#f7bfa0] flex items-center justify-center">
            <img
              src="/Heros/Logo.jpg"
              alt="Sosa's Pastries & Catering"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Circular text - hidden on mobile */}
          <div className="absolute inset-0 hidden sm:flex items-center justify-center">
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

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-6 text-sm opacity-0 animate-[slideInLeft_0.6s_ease-out_0.2s_forwards]">
          <li>
            <a href="#about" className="hover:underline hover:text-[#f7bfa0] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline hover:text-[#f7bfa0] transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:underline hover:text-[#f7bfa0] transition-colors">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline hover:text-[#f7bfa0] transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <button className="bg-[#f7bfa0] px-4 py-2 rounded-full hidden lg:block hover:bg-[#f4a77d] transition-colors opacity-0 animate-[slideInRight_0.6s_ease-out_0.2s_forwards] text-sm sm:text-base whitespace-nowrap">
          Request a Quote
        </button>
      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}