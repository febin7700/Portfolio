"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import "../styles/custom.css";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [ripples, setRipples] = useState([]);

  const titles = [
    { text: "Front-end Developer", transition: { type: "spring", stiffness: 100, damping: 10 } },
    { text: "UI/UX Designer", transition: { type: "tween", duration: 1.5, ease: "anticipate" } },
    { text: "Editor", transition: { type: "inertia", velocity: 100, power: 1 } },
    { text: "Tech Enthusiast", transition: { type: "tween", duration: 1, ease: [0.68, -0.55, 0.27, 1.55] } },
    { text: "Creator", transition: { type: "spring", stiffness: 200, damping: 15, mass: 1.2 } },
    { text: "Problem Solver", transition: { type: "tween", duration: 0.8, ease: "backOut" } },
    { text: "Freelancer", transition: { type: "spring", stiffness: 50, damping: 5, restDelta: 0.001 } },
    { text: "Coder", transition: { type: "tween", duration: 1.2, ease: "circInOut" } },
    { text: "Innovator", transition: { type: "inertia", velocity: 200, bounceStiffness: 500, bounceDamping: 10 } },
    { text: "Web Designer", transition: { type: "tween", duration: 0.5, ease: "linear" } },
  ];

  const handleMouseClick = (e) => {
    setRipples((prevRipples) => [
      ...prevRipples,
      { id: Date.now(), x: e.clientX, y: e.clientY },
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (ripples.length > 0) {
      const timeout = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1));
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [ripples]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white z-10 px-6 md:px-20"
      onClick={handleMouseClick}
    >
      {/* Ripple Effect */}
      <div className="ripple-container">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="ripple"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: 1 }}
              exit={{ scale: 4, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ left: ripple.x, top: ripple.y }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image */}
        <motion.div
          className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-3xl shadow-lg shadow-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile.png"
            alt="Fabin Shibu"
            className="w-full h-full object-cover"
          />
          {/* Subtle glowing border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-pulse"></div>
        </motion.div>

        {/* Text + Socials */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FABIN SHIBU
          </motion.h1>

          {/* Rotating Titles */}
          <div className="h-10 sm:h-12 overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={titles[titleIndex].text}
                className="text-lg sm:text-xl md:text-2xl font-light tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={titles[titleIndex].transition}
              >
                {titles[titleIndex].text}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <a href="https://github.com/febin7700" target="_blank" rel="noopener noreferrer">
              <FaGithub size={26} className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/fabin-shibu/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={26} className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a href="https://x.com/FebinNocx" target="_blank" rel="noopener noreferrer">
              <SiX size={26} className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/febin.nocx/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={26} className="hover:text-gray-400 cursor-pointer" />
            </a>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            href="/Fabinshibu.pdf"
            download
            className="inline-block mt-8 px-6 sm:px-8 py-3 border border-white rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            RESUME
          </motion.a>
        </div>
      </div>
    </section>
  );
}
