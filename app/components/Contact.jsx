"use client";
import { motion } from "framer-motion";
import MagnetEffect from "./MagnetEffect";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white px-6 md:px-20 z-10 relative">
    <MagnetEffect className="inline-block mx-auto">
      <motion.h2
        className="text-6xl md:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        CONTACT
      </motion.h2>
</MagnetEffect>
      <div className="max-w-xl mx-auto text-center">
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          
        </motion.div>

        <motion.a
          href="mailto:youremail@example.com"
          className="inline-block mt-4 px-8 py-4 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
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