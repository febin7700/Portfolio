// src/components/MovingStars.jsx
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// A single star component that animates towards the center
const Star = ({ initialX, initialY, initialSize }) => {
  return (
    <motion.div
      initial={{ 
        x: initialX, 
        y: initialY, 
        scale: 0, 
        opacity: 0,
        transformOrigin: '50% 50%'
      }}
      animate={{
        x: 0,
        y: 0,
        scale: initialSize,
        opacity: [0, 1, 1, 0], // Fade in, stay, then fade out
        transition: {
          duration: 5,
          ease: 'linear',
          times: [0, 0.5, 0.9, 1]
        }
      }}
      style={{
        position: 'absolute',
        width: 2,
        height: 2,
        borderRadius: '50%',
        background: 'white',
      }}
    />
  );
};

export default function MovingStars() {
  const [stars, setStars] = useState([]);
  const starId = useRef(0);

  useEffect(() => {
    const generateStar = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const edge = Math.random() * 4;
      let initialX, initialY;

      if (edge < 1) { // Top
        initialX = Math.random() * vw;
        initialY = -50;
      } else if (edge < 2) { // Right
        initialX = vw + 50;
        initialY = Math.random() * vh;
      } else if (edge < 3) { // Bottom
        initialX = Math.random() * vw;
        initialY = vh + 50;
      } else { // Left
        initialX = -50;
        initialY = Math.random() * vh;
      }
      
      const newStar = {
        id: starId.current++,
        initialX: initialX - vw / 2,
        initialY: initialY - vh / 2,
        initialSize: Math.random() * 2 + 1
      };
      
      setStars(prevStars => [...prevStars, newStar]);

      setTimeout(() => {
        setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
      }, 5000); // Clean up after 5 seconds
    };

    const intervalId = setInterval(generateStar, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="moving-stars-container"
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -2, // Place it behind other backgrounds
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transform: 'translateZ(0)'
        }}
      >
        {stars.map((star) => (
          <Star
            key={star.id}
            initialX={star.initialX}
            initialY={star.initialY}
            initialSize={star.initialSize}
          />
        ))}
      </div>
    </div>
  );
}