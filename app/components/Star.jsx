// src/components/Star.jsx
"use client";

import { motion, useTransform } from 'framer-motion';

export default function Star({ x, y, size, opacity, springX, springY }) {
  const starX = useTransform(springX, (val) => (val - window.innerWidth / 2) * 0.05);
  const starY = useTransform(springY, (val) => (val - window.innerHeight / 2) * 0.05);

  return (
    <motion.div
      className="star"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'white',
        opacity: opacity,
        x: starX,
        y: starY,
      }}
    />
  );
}