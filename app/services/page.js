"use client";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#fff9f7] text-gray-800">
      {/* PAGE HEADER */}
      <section className="text-center py-20 bg-gradient-to-b from-[#f9e1db] to-[#fff9f7]">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          From elegant weddings to corporate events and intimate celebrations — we craft unforgettable experiences tailored to your style.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-16">
        {/* SERVICE ITEM */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden">
            <img
              src="/services/wedding.jpg"
              alt="Wedding Catering"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-serif font-semibold">Weddings</h2>
            <p>
              Celebrate love with a feast as memorable as your vows. From the reception to the final toast, 
              our wedding catering and planning team ensures every moment shines.
            </p>
            <a href="#" className="text-[#8b3a3a] font-semibold hover:underline">
              Learn More »
            </a>
          </div>
        </div>

        {/* SERVICE ITEM */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-serif font-semibold">Corporate Events</h2>
            <p>
              Whether it’s a board meeting, product launch, or gala dinner, we create polished and professional
              experiences that impress your guests and clients.
            </p>
            <a href="#" className="text-[#8b3a3a] font-semibold hover:underline">
              Learn More »
            </a>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden">
            <img
              src="/services/corporate.jpg"
              alt="Corporate Event"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* SERVICE ITEM */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden">
            <img
              src="/services/private.jpg"
              alt="Private Celebrations"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-serif font-semibold">Private Celebrations</h2>
            <p>
              From birthdays to anniversaries and everything in between, let us help you host a
              private event that’s effortless and elegant.
            </p>
            <a href="#" className="text-[#8b3a3a] font-semibold hover:underline">
              Learn More »
            </a>
          </div>
        </div>

        {/* SERVICE ITEM */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-serif font-semibold">Custom Requests</h2>
            <p>
              Have a vision that’s uniquely yours? We love creative challenges — 
              let’s collaborate to bring your culinary or event ideas to life.
            </p>
            <a href="#" className="text-[#8b3a3a] font-semibold hover:underline">
              Learn More »
            </a>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden">
            <img
              src="/services/custom.jpg"
              alt="Custom Service"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div>
            <Testimonials/>
        </div>
      </section>
    </main>
  );
}
