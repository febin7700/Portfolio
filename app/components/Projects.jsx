"use client";
import { motion } from "framer-motion";
import MagnetEffect from "./MagnetEffect";

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white px-6 md:px-20 z-10 relative">
      <MagnetEffect className="inline-block mx-auto">
      <motion.h2
        className="text-6xl md:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        PROJECTS
      </motion.h2>
</MagnetEffect>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        <motion.div
          className="bg-white/10 p-6 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold">E-commerce Website</h3>
          <p className="mt-2 text-gray-300">
            Pet Food Shop with login, cart, and admin panel.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/10 p-6 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p className="mt-2 text-gray-300">
            This portfolio with Next.js, Tailwind, Framer Motion.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/10 p-6 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold">Blog Application</h3>
          <p className="mt-2 text-gray-300">
            A full-stack blog with user authentication and content management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}