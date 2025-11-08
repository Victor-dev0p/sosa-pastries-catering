'use client';

import { motion } from 'framer-motion';

export default function WavySection({
  position = 'top',
  bgColor = '#fff9f7',
  className = '',
  children
}) {
  
  // These are the desktop paths (sharper curve)
  const wavePaths = {
    top: `
      M0,80
      L500,30
      L900,90
      L1350,10
      L1500,40
      L1500,100
      L0,100
      Z
    `,
    bottom: `
      M0,0
      L1500,0
      L1500,60
      L1350,70
      L900,10
      L500,60
      L0,20
      Z
    `,
  };

  // --- FIX: Updated mobile wave to be sharper and deeper (closer to desktop/Frame 1) ---
  const mobileWavePaths = {
    // Increased the difference between peaks and troughs (e.g., from 70/40/60 to 85/35/65)
    top: `
      M0,85
      L500,35
      L900,80
      L1350,15
      L1500,65
      L1500,100
      L0,100
      Z
    `,
    bottom: `
      M0,0
      L1500,0
      L1500,65
      L1350,75
      L900,15
      L500,55
      L0,25
      Z
    `,
  };
  // -----------------------------------------------------------------------------------

  return (
    <section className={`relative ${className}`} style={{ backgroundColor: bgColor }}>
      
      {/* Top Wave */}
      {position === 'top' && (
        <>
          {/* Desktop/Tablet Wave (Hidden on Mobile) */}
          <div className="hidden sm:block absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
            <svg
              viewBox="0 0 1500 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-20 lg:h-24"
            >
              <path d={wavePaths.top} fill={bgColor} />
            </svg>
          </div>

          {/* Mobile Wave (Visible on Mobile) */}
          <div className="block sm:hidden absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
            <svg
              viewBox="0 0 1500 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              // FIX: Increased mobile height from h-12 to h-16 for a bolder, deeper cut
              className="w-full h-16" 
            >
              <path d={mobileWavePaths.top} fill={bgColor} />
            </svg>
          </div>
        </>
      )}

      {/* Content */}
      {children}

      {/* Bottom Wave */}
      {position === 'bottom' && (
        <>
          {/* Desktop/Tablet Wave (Hidden on Mobile) */}
          <div className="hidden sm:block absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-full">
            <svg
              viewBox="0 0 1500 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-20 lg:h-24"
            >
              <path d={wavePaths.bottom} fill={bgColor} />
            </svg>
          </div>

          {/* Mobile Wave (Visible on Mobile) */}
          <div className="block sm:hidden absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-full">
            <svg
              viewBox="0 0 1500 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              // FIX: Increased mobile height from h-12 to h-16 for a bolder, deeper cut
              className="w-full h-16"
            >
              <path d={mobileWavePaths.bottom} fill={bgColor} />
            </svg>
          </div>
        </>
      )}
    </section>
  );
}