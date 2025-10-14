'use client';

import { motion } from 'framer-motion';

export default function DiagonalRibbon({ visible, phoneNumber = '+234 XXX XXX XXXX' }) {
  return (
    <motion.div
      className="fixed top-0 right-0 z-40 pointer-events-none"
      initial={{ x: '100%', opacity: 0 }}
      animate={{
        x: visible ? '0%' : '100%',
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Simple diagonal using CSS - NO SVG! */}
      <div
        className="relative bg-gradient-to-r from-[#8b3a3a] to-[#a04545] shadow-lg"
        style={{
          width: '45vw',
          height: '90px',
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
        }}
      >
        {/* Phone Number */}
        <div className="absolute top-6 right-8 md:right-12 flex items-center gap-2 text-white pointer-events-auto">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a 
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="text-xs md:text-sm font-semibold tracking-wider hover:underline"
          >
            CALL: <span className="font-bold">{phoneNumber}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}