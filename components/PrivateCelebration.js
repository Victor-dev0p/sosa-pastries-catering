"use client";
import { motion } from "framer-motion";

export default function PrivateCelebration() {
  return (
    <section id="private" className="bg-[#fff9f7] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#3d2b1f] mb-4">
            PRIVATE CELEBRATION
          </h2>
          <p className="text-[#3d2b1f]/80 leading-relaxed mb-4">
            Inviting friends, family, and other guests to a private celebration can be
            one of the most challenging, exhilarating, fun-filled, and stressful
            experiences. Let{" "}
            <span className="font-semibold text-[#8b3a3a]">Sosa</span> take away the
            stress with beginning-to-end event planning and catering services tailored
            to your taste.
          </p>
          <a
            href="/services"
            className="text-[#8b3a3a] font-semibold hover:underline"
          >
            LEARN MORE »
          </a>
        </motion.div>

        {/* Image Collage (Right Side) */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Tall Main Image */}
          <motion.img
            src="/sosa.jpg"
            alt="Private Event"
            className=" shadow-lg w-full md:w-1/2 h-[420px] object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Two Stacked Images - Slightly Different Heights */}
          <div className="flex flex-col justify-between gap-4 w-full md:w-1/2">
            <motion.img
              src="/services/pot1.jpg"
              alt="Private Celebration Setup"
              className=" shadow-lg h-[210px] object-cover"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.img
              src="/services/bdae.jpg"
              alt="Private Celebration Setup"
              className=" shadow-lg h-[240px] object-cover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
