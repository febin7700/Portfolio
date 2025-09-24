"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiX} from "react-icons/si";
import "../styles/custom.css";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [ripples, setRipples] = useState([]);

  const titles = [
    { text: "Front-end Developer", transition: { type: "spring", stiffness: 100, damping: 10 } },
    { text: "UI/UX - Designer", transition: { type: "tween", duration: 1.5, ease: "anticipate" } },
    { text: "EDITOR", transition: { type: "inertia", velocity: 100, power: 1 } },
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
      {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      },
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
      }, 1500); // Remove ripple after 1.5 seconds

      return () => clearTimeout(timeout);
    }
  }, [ripples]);

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white z-10"
      onClick={handleMouseClick}
    >
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
              style={{
                left: ripple.x,
                top: ripple.y,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16 px-6 md:px-20">
        <motion.div
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-[40px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile.png"
            alt="Fabin Shibu"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            className="text-6xl md:text-8xl font-thin tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FABIN SHIBU
          </motion.h1>
          <div className="h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={titles[titleIndex].text}
                className="text-xl md:text-2xl font-light mt-2 tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={titles[titleIndex].transition}
              >
                {titles[titleIndex].text}
              </motion.p>
            </AnimatePresence>
          </div>
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <a href="https://github.com/febin7700" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className="hover:text-gray-400 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/fabin-shibu/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className="hover:text-gray-400 cursor-pointer" /></a>
            <a href="https://x.com/FebinNocx" target="_blank" rel="noopener noreferrer"><SiX size={24} className="hover:text-gray-400 cursor-pointer" /></a>
            <a href="https://www.instagram.com/febin.nocx/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} className="hover:text-gray-400 cursor-pointer" /></a>
          </motion.div>
          <motion.a
            href="/Fabinshibu.pdf"
            download
            className="inline-block mt-8 px-8 py-3 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
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