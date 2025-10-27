"use client";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaConciergeBell, FaGlassCheers } from "react-icons/fa";

export default function ServicesPreview() {
  const services = [
    {
      icon: <FaBirthdayCake className="text-5xl text-[#f7bfa0]" />,
      title: "Custom Cakes",
      desc: "Delicious, handcrafted cakes made to match your event’s theme and flavor desires.",
    },
    {
      icon: <FaConciergeBell className="text-5xl text-[#f7bfa0]" />,
      title: "Event Catering",
      desc: "From intimate dinners to grand celebrations — we cater with excellence and heart.",
    },
    {
      icon: <FaGlassCheers className="text-5xl text-[#f7bfa0]" />,
      title: "Private Celebrations",
      desc: "We plan and execute stunning private events so you can relax and enjoy the moment.",
    },
  ];

  return (
    <section className="bg-[#fff9f7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#3d2b1f] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-[#3d2b1f]/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether you’re celebrating love, life, or milestones — our tailored
          catering and baking services make your moments unforgettable.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#3d2b1f] mb-3">
                {service.title}
              </h3>
              <p className="text-[#3d2b1f]/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="/services"
            className="inline-block bg-[#f7bfa0] text-white font-medium px-8 py-3 rounded-full hover:bg-[#f4a77d] transition-all"
          >
            See All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
