'use client';

import { motion } from 'framer-motion';

/**
 * DiagonalSection - Creates sections with diagonal transitions
 * @param {string} bgColor - Background color
 * @param {string} diagonalPosition - 'top' | 'bottom' | 'both'
 * @param {string} diagonalDirection - 'left' | 'right' for angle direction
 * @param {string} bgImage - Optional background image URL
 */
export default function DiagonalSection({
  children,
  bgColor = 'white',
  diagonalPosition = 'both',
  diagonalDirection = 'left',
  bgImage,
  className = '',
}) {
  const clipPathTop =
    diagonalDirection === 'left'
      ? 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)'
      : 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)';

  const clipPathBottom =
    diagonalDirection === 'left'
      ? 'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
      : 'polygon(0 0, 100% 0, 100% 100%, 0 95%)';

  const clipPathBoth =
    diagonalDirection === 'left'
      ? 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
      : 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)';

  const getClipPath = () => {
    if (diagonalPosition === 'top') return clipPathTop;
    if (diagonalPosition === 'bottom') return clipPathBottom;
    if (diagonalPosition === 'both') return clipPathBoth;
    return 'none';
  };

  return (
    <section
      className={`relative ${className}`}
      style={{
        backgroundColor: bgImage ? 'transparent' : bgColor,
        clipPath: getClipPath(),
      }}
    >
      {/* Background Image with Parallax Effect */}
      {bgImage && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Parallax effect
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/**
 * Example usage:
 * 
 * <DiagonalSection 
 *   bgColor="#f5f5f5" 
 *   diagonalPosition="top"
 *   diagonalDirection="right"
 * >
 *   Your content here
 * </DiagonalSection>
 */