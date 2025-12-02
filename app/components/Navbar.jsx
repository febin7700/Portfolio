"use client";

import Link from "next/link";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ scrollYProgress }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Link scroll progress to navbar position
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, -100, -100]);

  // Background opacity & blur
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0.1, 0.1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-300"
      style={{
        y,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(0.1px)",
        WebkitBackdropFilter: "blur(0.1px)",
      }}
    >
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          opacity: backgroundOpacity,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`
        }}
      />

      <div className="relative z-10 flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="text-xl font-bold tracking-widest text-white">
          FABIN SHIBU
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white">
          <Link href="#about" className="hover:text-gray-400">ABOUT</Link>
          <Link href="#skills" className="hover:text-gray-400">SKILL</Link>
          <Link href="#projects" className="hover:text-gray-400">PROJECT</Link>
          <Link href="#contact" className="hover:text-gray-400">CONTACT</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/80 backdrop-blur-sm absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 text-white text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Link href="#about" onClick={toggleMenu} className="hover:text-gray-400">ABOUT</Link>
          <Link href="#skills" onClick={toggleMenu} className="hover:text-gray-400">SKILL</Link>
          <Link href="#projects" onClick={toggleMenu} className="hover:text-gray-400">PROJECT</Link>
          <Link href="#contact" onClick={toggleMenu} className="hover:text-gray-400">CONTACT</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
