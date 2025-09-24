// components/ClientSpaceBackground.js
"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import SpaceBackground from "./SpaceBackground"; // Adjust the path as needed

export default function ClientSpaceBackground() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ container });

  return (
    <>
      <div
        ref={container}
        className="fixed inset-0 w-full h-full overflow-y-scroll"
        style={{ zIndex: -1, pointerEvents: 'none' }} // Ensure it's in the background
      >
        <SpaceBackground scrollYProgress={scrollYProgress} />
        {/*
          This div below is a scrollable container for the background's
          useScroll hook to work correctly. It should be given a
          sufficient height to enable scrolling.
        */}
        <div style={{ height: '300vh' }} />
      </div>
    </>
  );
}