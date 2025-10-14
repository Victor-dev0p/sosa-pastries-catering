"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fff9f7] to-[#fffdfc] text-[#3d2b1f] overflow-hidden">

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:px-24 overflow-hidden">
        <div className="max-w-lg z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Making Every Celebration Taste Like Joy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-6"
          >
            From dreamy wedding cakes to unforgettable event experiences — 
            Sosa’s Catering brings your special moments to life with a touch of magic.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#f7bfa0] hover:bg-[#f4a77d] text-white text-lg px-6 py-3 rounded-2xl transition-all"
          >
            Let’s Create Magic Together
          </motion.button>
        </div>

        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-[500px] opacity-80">
          <Image
            src="/sosa-hero.jpg"
            alt="Sosa Catering Hero"
            fill
            className="object-cover rounded-l-[3rem]"
          />
        </div>
      </section>

      {/* --- Wavy Divider --- */}
      <div className="relative w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31.38,743.84,14.19
               c-82.44-17.64-168.06-16.16-250.45,1.27C406.41,31.29,324.21,72,243.36,94.64
               c-83.59,23.54-168.5,29.22-243.36,18.57v7.66h1200V0
               C1048.57,22.15,1064.65,113.67,985.66,92.83Z"
            fill="#fff6f2"
          ></path>
        </svg>
      </div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-10 px-8 lg:px-24 py-20 bg-[#fff6f2]"
      >
        <div className="relative w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden">
          <Image src="/sosa-about.jpg" alt="About Sosa" fill className="object-cover" />
        </div>
        <div className="max-w-lg">
          <h2 className="text-3xl font-serif font-bold mb-4">Meet Sosa</h2>
          <p className="text-gray-700 mb-4">
            Hi, I’m Sosa — a passionate baker and event caterer who believes every celebration deserves a personal touch. 
            From intricate cakes to surprise setups, I put heart into every detail because moments like these matter.
          </p>
          <p className="text-gray-700">
            Whether it’s a wedding, birthday, or intimate event, I’ll help you make it beautifully memorable.
          </p>
        </div>
      </motion.section>

      {/* --- Wavy Divider --- */}
      <div className="relative w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31.38,743.84,14.19
               c-82.44-17.64-168.06-16.16-250.45,1.27C406.41,31.29,324.21,72,243.36,94.64
               c-83.59,23.54-168.5,29.22-243.36,18.57v7.66h1200V0
               C1048.57,22.15,1064.65,113.67,985.66,92.83Z"
            fill="#fffdfc"
          ></path>
        </svg>
      </div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-8 lg:px-24 text-center bg-[#fffdfc]"
      >
        <h2 className="text-3xl font-serif font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Custom Cakes", img: "/cakes.jpg" },
            { title: "Small Chops", img: "/chops.jpg" },
            { title: "Event Décor", img: "/decor.jpg" },
            { title: "Meal Packages", img: "/meals.jpg" },
          ].map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-52">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-4">
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-8 lg:px-24 text-center"
      >
        <h2 className="text-3xl font-serif font-bold mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/gallery1.jpg",
            "/gallery2.jpg",
            "/gallery3.jpg",
            "/gallery4.jpg",
            "/gallery5.jpg",
            "/gallery6.jpg",
          ].map((img) => (
            <motion.div
              key={img}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-64 overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt="Gallery"
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="bg-[#fff6f2] py-20 px-8 lg:px-24 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">
          Let’s Create Something Beautiful Together
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Ready to bring your dream event to life? Reach out to Sosa today — 
          she can’t wait to make your celebration unforgettable.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-[#f7bfa0] hover:bg-[#f4a77d] text-white text-lg px-6 py-3 rounded-2xl transition-all">
            Contact Us
          </button>
          <button className="border border-[#f7bfa0] text-[#f7bfa0] hover:bg-[#fff1ea] text-lg px-6 py-3 rounded-2xl transition-all">
            WhatsApp Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-[#fbe5da]">
        <p>
          © {new Date().getFullYear()} Sosa’s Catering | Made with love by Victor 💛
        </p>
      </footer>
    </div>
  );
}
