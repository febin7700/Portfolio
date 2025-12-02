"use client";
import { motion } from "framer-motion";


import MagnetEffect from "./MagnetEffect";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-white px-6 md:px-12 lg:px-20 z-10 relative"
    >
      {/* Heading */}
      <MagnetEffect className="inline-block mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
      </MagnetEffect>

      {/* Content */}
      <div className="max-w-xl mx-auto text-center">
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Have a question or want to work together?  
          Let’s connect 👇
        </motion.p>

        {/* Email Button */}
        <motion.a
          href="mailto:febinshibu7@gmail.com"
          className="inline-block mt-4 px-8 py-4 border border-white rounded-full text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          SEND ME AN EMAIL
        </motion.a>
      </div>
    </section>
  );
}
