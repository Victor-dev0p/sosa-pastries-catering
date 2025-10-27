'use client';

import { motion } from 'framer-motion';

/**
 * WavySection Component
 * Creates a 3-point diagonal/wave-like shape at top or bottom of a section
 *
 * @param {string} position - 'top' or 'bottom'
 * @param {string} bgColor - Background color of the wave (should match section bg)
 * @param {string} className - Additional classes for the section
 * @param {ReactNode} children - Section content
 */
export default function WavySection({
  position = 'top',
  bgColor = '#fff9f7',
  className = '',
  children
}) {
  // Custom 3-point path: rise (1), dip (2), peak (3)
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
    `
  };

  return (
    <section
      className={`relative ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Wave */}
      {position === 'top' && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
          <svg
            viewBox="0 0 1500 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20 lg:h-24"
          >
            <path d={wavePaths.top} fill={bgColor} />
          </svg>
        </div>
      )}

      {/* Content */}
      {children}

      {/* Bottom Wave */}
      {position === 'bottom' && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-full">
          <svg
            viewBox="0 0 1500 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20 lg:h-24"
          >
            <path d={wavePaths.bottom} fill={bgColor} />
          </svg>
        </div>
      )}
    </section>
  );
}