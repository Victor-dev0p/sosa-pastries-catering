"use client";
import { motion } from "framer-motion";
import CTA from "@/components/cta";

export default function AboutPage() {
  return (
    <main className="bg-[#fff9f7] text-[#3d2b1f]">
      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/Heros/hero2.jpg"
          alt="Sosa Catering Event"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-3"
          >
            Our Story
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Crafting unforgettable moments through food, design, and genuine hospitality.
          </p>
        </div>
      </section>

      {/* ABOUT / STORY SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">The Heart Behind Sosa</h2>
          <p className="text-[#3d2b1f]/80 leading-relaxed mb-4">
            Founded from a love for food and togetherness, <span className="font-semibold text-[#8b3a3a]">Sosa Catering</span> began as a small home-based kitchen passionate about creating
            memorable experiences. What started with intimate gatherings has now evolved into
            full-service catering and event planning for weddings, birthdays, corporate functions,
            and private celebrations.
          </p>
          <p className="text-[#3d2b1f]/80 leading-relaxed">
            Every dish we serve and every event we plan is infused with creativity, warmth,
            and a commitment to excellence. Our mission is to make your special day
            stress-free, flavorful, and unforgettable.
          </p>
        </motion.div>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Tall Main Image */}
                  <motion.img
                    src="/Work/team.webp"
                    alt="Private Event"
                    className=" shadow-lg w-full md:w-1/2 h-[420px] object-cover"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
        
                  {/* Two Stacked Images - Slightly Different Heights */}
                  <div className="flex flex-col justify-between gap-4 w-full md:w-1/2">
                    <motion.img
                      src="/Work/food.jpg"
                      alt="Private Celebration Setup"
                      className=" shadow-lg h-[210px] object-cover"
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    />
                    <motion.img
                      src="/Work/hilda.webp"
                      alt="Private Celebration Setup"
                      className=" shadow-lg h-[240px] object-cover"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  </div>
                </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#fdf4f1] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold mb-10"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Event Catering",
                desc: "From intimate dinners to large-scale events, our menus are tailored to suit every taste and occasion.",
              },
              {
                title: "Event Planning",
                desc: "Seamless coordination from start to finish — so you can focus on enjoying your day.",
              },
              {
                title: "Decor & Setup",
                desc: "Elegant, customized décor setups that bring your theme to life beautifully.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white  shadow-md p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#8b3a3a]">
                  {item.title}
                </h3>
                <p className="text-[#3d2b1f]/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif font-bold mb-8"
        >
          Our Promise
        </motion.h2>
        <p className="max-w-3xl mx-auto text-[#3d2b1f]/80 mb-10 leading-relaxed">
          At Sosa, we don’t just serve food — we create experiences. We promise personalized
          service, impeccable taste, and thoughtful presentation for every event we’re part of.
          Your celebration deserves nothing less than perfection.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-[#8b3a3a] font-medium">
          <span className="bg-[#fdf4f1] px-6 py-3 rounded-full shadow-sm">
            Fresh Ingredients
          </span>
          <span className="bg-[#fdf4f1] px-6 py-3 rounded-full shadow-sm">
            Elegant Presentation
          </span>
          <span className="bg-[#fdf4f1] px-6 py-3 rounded-full shadow-sm">
            Unforgettable Taste
          </span>
          <span className="bg-[#fdf4f1] px-6 py-3 rounded-full shadow-sm">
            Stress-Free Planning
          </span>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTA />
    </main>
  );
}
