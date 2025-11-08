"use client";
import Testimonials from "@/components/Testimonials";
import MasonryGallery from "@/components/MasonryGallery"; 
import React, { useEffect, useRef, useState } from "react";
import PageWrapper from "@/components/PageWrapper";

const serviceData = [
  {
    title: "Weddings",
    description: "Celebrate love with a feast as memorable as your vows. From the reception to the final toast, our wedding catering and planning team ensures every moment shines.",
    images: [
      "/services/White1.jpg",
      "/services/White-22.jpg",
      "/services/Naked1.jpg",
    ],
    altPrefix: "Wedding Catering",
    href: "#"
  },
  {
    title: "Corporate Events",
    description: "Whether it's a board meeting, product launch, or gala dinner, we create polished and professional experiences that impress your guests and clients.",
    images: [
      "/services/Dessert1.png",
      "/services/Cake-Pops.jpg",
      "/services/Dessert.jpg",
    ],
    altPrefix: "Corporate Event",
    href: "#"
  },
  {
    title: "Private Celebrations",
    description: "From birthdays to anniversaries and everything in between, let us help you host a private event that's effortless and elegant.",
    images: [
      "/services/Pasta.jpg",
      "/services/Naked2.jpg",
      "/services/Cake-Pops.jpg",
    ],
    altPrefix: "Private Celebrations",
    href: "#"
  },
  {
    title: "Custom Requests",
    description: "Have a vision that's uniquely yours? We love creative challenges — let's collaborate to bring your culinary or event ideas to life.",
    images: [
      "/services/Naked.jpg",
      "/services/Dessert.jpg",
      "/services/White-22.jpg",
    ],
    altPrefix: "Custom Service",
    href: "#"
  },
];

function AnimatedServiceCard({ service, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const isImageLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 md:gap-16`}
    >
      {/* Image Column with slide animation */}
      <div 
        className={`w-full lg:w-1/2 h-[400px] transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0 translate-y-0' 
            : `opacity-0 ${isImageLeft ? '-translate-x-20' : 'translate-x-20'} translate-y-10`
        }`}
      >
        <MasonryGallery 
          images={service.images} 
          altPrefix={service.altPrefix} 
        />
      </div>
      
      {/* Content Column with slide animation from opposite side */}
      <div 
        className={`lg:w-1/2 space-y-5 transition-all duration-1000 ease-out delay-200 ${
          isVisible 
            ? 'opacity-100 translate-x-0 translate-y-0' 
            : `opacity-0 ${isImageLeft ? 'translate-x-20' : '-translate-x-20'} translate-y-10`
        }`}
      >
        <h2 className="text-3xl font-serif font-semibold text-[#3A2E2E]">{service.title}</h2>
        <p className="text-[#3A2E2E]">
          {service.description}
        </p>
        <a 
          href={service.href} 
          className="text-[#FA812F] font-semibold hover:text-[#E01E00] transition-colors hover:underline inline-block pt-2"
        >
          Learn More »
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-white text-[#3A2E2E] mb-30">
        
        {/* PAGE HEADER */}
        <section className="text-center py-20 bg-gradient-to-b from-[#FFF8E7] via-[#F9B233]/30 to-white">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[#3A2E2E]">Our Services</h1>
          <p className="max-w-2xl mx-auto text-[#3A2E2E]">
            From elegant weddings to corporate events and intimate celebrations — we craft unforgettable experiences tailored to your style.
          </p>
        </section>

        {/* SERVICES LIST */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid gap-24 bg-white">
          {serviceData.map((service, index) => (
            <AnimatedServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
            />
          ))}
          
          {/* Testimonials */}
          <div>
            <Testimonials/>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}