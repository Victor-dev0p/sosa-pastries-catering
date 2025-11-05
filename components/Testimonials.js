"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Tolu A.",
      role: "Bride",
      text: "Sosa Catering made our wedding reception unforgettable! Every meal was delicious and beautifully presented. Our guests couldn’t stop talking about it!",
      image: "/people/bride1.jpg",
    },
    {
      name: "Chidi O.",
      role: "Corporate Client",
      text: "We had a 3-day company event and Sosa handled catering perfectly. Always punctual, professional, and the food was top-tier every single day.",
      image: "/people/client1.jpg",
    },
    {
      name: "Amara K.",
      role: "Birthday Host",
      text: "My 30th birthday was magical! From the cake to the cocktails, everything screamed class. I’d recommend Sosa to anyone looking for a stress-free celebration.",
      image: "/people/birthday1.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#fff9f7] py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3d2b1f] mb-10">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-[#8b3a3a]/10"
              />
              <p className="text-[#3d2b1f]/80 mb-4 text-sm italic">“{t.text}”</p>
              <h4 className="font-semibold text-[#3d2b1f]">{t.name}</h4>
              <span className="text-[#8b3a3a] text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
