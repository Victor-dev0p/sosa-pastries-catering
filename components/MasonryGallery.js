// components/MasonryGallery.js

import React from 'react';

/**
 * Renders a 3-image masonry-style gallery using a 2x3 grid structure.
 * @param {object} props - Component props.
 * @param {string[]} props.images - Array of 3 image URLs.
 * @param {string} props.altPrefix - Alt text prefix for accessibility.
 */
const MasonryGallery = ({ images, altPrefix }) => {
  if (images.length < 3) return null;

  // The layout:
  // Image 1 (Top Left)
  // Image 2 (Full Height Right) - uses row-span-2
  // Image 3 (Bottom Left)
  
  const baseClasses = "rounded-xl overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl";
  const imgClasses = "object-cover w-full h-full";

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px]">
        
        {/* Image 1 (Top Left) */}
        <div className={`col-span-1 row-span-1 ${baseClasses}`}>
          <img
            src={images[0]}
            alt={`${altPrefix} - Image 1`}
            className={imgClasses}
          />
        </div>

        {/* Image 2 (Full Height Right) - The key to the staggered effect */}
        <div className={`col-span-1 row-span-2 ${baseClasses}`}>
          <img
            src={images[1]}
            alt={`${altPrefix} - Image 2`}
            className={imgClasses}
          />
        </div>

        {/* Image 3 (Bottom Left) */}
        <div className={`col-span-1 row-span-1 ${baseClasses}`}>
          <img
            src={images[2]}
            alt={`${altPrefix} - Image 3`}
            className={imgClasses}
          />
        </div>
        
      </div>
    </div>
  );
};

export default MasonryGallery;