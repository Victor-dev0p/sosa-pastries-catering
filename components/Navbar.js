"use client";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* ✅ Clickable Logo */}
        <a
          href="/"
          className="relative flex items-center justify-center cursor-pointer"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#FA812F] flex items-center justify-center">
            <img
              src="/Heros/Logo.jpg"
              alt="Sosa's Pastries & Catering"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Circular text - hidden on mobile */}
          <div className="absolute inset-0 hidden sm:flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -z-10">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="7" fill="#FA812F" letterSpacing="1.5">
                <textPath href="#circlePath">
                  Sosa's Pastries & Catering • Sosa's Pastries & Catering •
                </textPath>
              </text>
            </svg>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 text-sm opacity-0 animate-[slideInLeft_0.6s_ease-out_0.2s_forwards] text-[#3A2E2E]">
          <li><a href="/about" className="hover:text-[#FA812F] transition-colors font-medium">About</a></li>
          <li><a href="/services" className="hover:text-[#FA812F] transition-colors font-medium">Services</a></li>
          <li><a href="/gallery" className="hover:text-[#FA812F] transition-colors font-medium">Gallery</a></li>
          <li><a href="/contact" className="hover:text-[#FA812F] transition-colors font-medium">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
        <button className="bg-[#FA812F] px-4 py-2 rounded-full hidden lg:block hover:bg-[#E01E00] transition-colors opacity-0 animate-[slideInRight_0.6s_ease-out_0.2s_forwards] text-sm sm:text-base whitespace-nowrap text-white font-medium">
          <a href="/quote">Request a Quote</a>
        </button>

        {/* ✅ Mobile CTA (ONLY new addition) */}
        <div className="lg:hidden opacity-0 animate-[slideInRight_0.6s_ease-out_0.2s_forwards]">
          <a
            href="/quote"
            className="bg-[#FA812F] px-3 py-1.5 rounded-full hover:bg-[#E01E00] transition-colors text-xs sm:text-sm text-white font-medium"
          >
            Request a Quote
          </a>
        </div>

      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </header>
  );
}
