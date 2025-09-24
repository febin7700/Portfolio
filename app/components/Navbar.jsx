"use client";

import Link from "next/link";
import { motion, useTransform } from "framer-motion"; // Import useTransform

export default function Navbar({ scrollYProgress }) {
  // Use useTransform to link scroll progress to navbar position
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, -100, -100]);

  // Use a second useTransform to manage background opacity for a smooth effect
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0.1, 0.1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 z-50 transition-transform duration-300"
      style={{
        y,
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Use a fixed color
        backdropFilter: "blur(01px)", // Use a fixed blur
        WebkitBackdropFilter: "blur(0.1px)",
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          opacity: backgroundOpacity,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`
        }}
      />
      <div className="relative z-10 text-xl font-bold tracking-widest text-white">
        FABIN SHIBU
      </div>
      <div className="relative z-10 flex gap-10 text-white">
        <Link href="#about" className="hover:text-gray-400">
          ABOUT
        </Link>
        <Link href="#skills" className="hover:text-gray-400">
          SKILL
        </Link>
        <Link href="#projects" className="hover:text-gray-400">
          PROJECT
        </Link>
        <Link href="#contact" className="hover:text-gray-400">
          CONTACT
        </Link>
      </div>
    </motion.nav>
  );
}