"use client";

import { motion } from "framer-motion";
import MagnetEffect from "./MagnetEffect";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 text-white px-6 md:px-12 lg:px-20 z-10 relative"
    >
      {/* Heading */}
      <MagnetEffect className="inline-block mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-12 font-akzidenz leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
      </MagnetEffect>

      {/* Content */}
      <motion.div
        className="max-w-3xl mx-auto px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-center font-light leading-relaxed text-base sm:text-lg md:text-xl italic text-white/90">
          &ldquo;As a front-end developer, I focus on creating smooth, user-friendly,
          and visually appealing web applications. My work life is a mix of
          solving real-time challenges, collaborating with designers and backend
          teams, and bringing ideas to life on screen. Over time, I&apos;ve
          learned how important it is to balance creativity with performance,
          making sure every interface is not just attractive but also efficient
          and responsive. For me, front-end development is not just coding
          &mdash; it&apos;s crafting experiences that connect users with
          technology seamlessly.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
