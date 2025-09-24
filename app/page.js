// app/page.js
"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; // Make sure this import is correct
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SpaceBackground from "./components/SpaceBackground";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      
      {/* Pass the scrollYProgress motion value to both components */}
      <SpaceBackground scrollYProgress={scrollYProgress} />

      <div className="relative z-20">
        <Navbar scrollYProgress={scrollYProgress} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}