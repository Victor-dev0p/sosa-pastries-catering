'use client';

import { motion } from 'framer-motion';

export default function WavySection({
  position = 'top',
  bgColor = '#fff9f7',
  className = '',
  children
}) {
  // Default wave paths
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

  // Softer mobile wave (shallower curve)
  const mobileWavePaths = {
    top: `
      M0,70
      L500,50
      L900,75
      L1350,40
      L1500,60
      L1500,100
      L0,100
      Z
    `,
    bottom: `
      M0,0
      L1500,0
      L1500,40
      L1350,50
      L900,20
      L500,45
      L0,25
      Z
    `,
  };

  return (
    <section className={`relative ${className}`} style={{ backgroundColor: bgColor }}>
      {/* Top Wave */}
      {position === 'top' && (
        <>
          {/* Desktop/Tablet Wave */}
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

          {/* Mobile Wave */}
          <div className="block sm:hidden absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
            <svg
              viewBox="0 0 1500 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-12"
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
          {/* Desktop/Tablet Wave */}
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

          {/* Mobile Wave */}
          <div className="block sm:hidden absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-full">
            <svg
              viewBox="0 0 1500 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-12"
            >
              <path d={mobileWavePaths.bottom} fill={bgColor} />
            </svg>
          </div>
        </>
      )}
    </section>
  );
}
