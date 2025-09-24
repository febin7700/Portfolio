// src/components/SpaceBackground.jsx
"use client";

import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Star from './Star';

const createStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random(),
    });
  }
  return stars;
};

// Accept scrollYProgress as a prop
export default function SpaceBackground({ scrollYProgress }) {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const [stars, setStars] = useState([]);
  useEffect(() => {
    setStars(createStars(200));
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  // Use the prop to transform the planet's position
  const earthX = useTransform(scrollYProgress, [0, 1], ['-100vw', '100vw']);
  const earthY = useTransform(scrollYProgress, [0, 1], ['50vh', '50vh']);

  return (
    <motion.div
      ref={containerRef}
      className="space-background-container"
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        cursor: 'none'
      }}
    >
      {/* Dynamic Stars (mouse-interactive) */}
      {stars.map((star, index) => (
        <Star
          key={index}
          x={star.x}
          y={star.y}
          size={star.size}
          opacity={star.opacity}
          springX={springX}
          springY={springY}
        />
      ))}

      {/* Earth Planet (scroll-interactive) */}
      <motion.div
        className="planet earth"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          position: 'absolute',
          backgroundImage: 'url(/earth.png)',
          backgroundSize: 'cover',
          x: earthX,
          y: '50vh',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}