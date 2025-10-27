'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const heroImages = [
  '/Heros/hero1.jpg',
  '/Heros/hero2.jpg',
  '/Heros/hero3.jpg',
];

export default function HeroImageSlider() {
  return (
    <div className="relative w-full h-full flex items-center">
      <Marquee
        speed={100}
        gradient={false}
        pauseOnHover={true}
        direction="left"
        className="overflow-hidden"
      >
        {heroImages.map((image, index) => (
          <div key={index} className="mx-2 md:mx-3">
            <div className="relative w-[250px] h-[400px] md:w-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={`Event decoration ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}