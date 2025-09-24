"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      // Class names modified: 'bg-black' is replaced with 'bg-black/10' for 10% opacity
      className="py-10 bg-black/10 text-white text-center border-t border-gray-800 z-10 relative"
      // Framer Motion: Starts invisible
      initial={{ opacity: 0 }}
      // Framer Motion: Fades in when it scrolls into view
      whileInView={{ opacity: 1 }}
      // Framer Motion: Only animate once
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/febin7700"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/fabin-shibu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/FebinNocx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <SiX size={24} />
        </a>
        <a
          // NOTE: Remember to change 'yourusername' to the correct Instagram handle
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FABIN NOCX. All rights reserved.
      </p>
    </motion.footer>
  );
}