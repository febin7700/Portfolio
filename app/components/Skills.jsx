"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import MagnetEffect from "./MagnetEffect";

const skills = [
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React.js", icon: "devicon-react-original" },
  { name: "Redux", icon: "devicon-redux-original" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original-wordmark" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 text-white px-6 md:px-12 lg:px-20 z-10 relative"
    >
      {/* Heading */}
      <MagnetEffect className="inline-block mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
      </MagnetEffect>

      {/* Marquee */}
      <Marquee
        gradient={false}
        speed={60} // default speed
        pauseOnHover
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="mx-8 flex flex-col items-center hover:scale-110 hover:text-cyan-400 transition-transform duration-300 cursor-pointer"
            aria-label={skill.name}
          >
            <i
              className={`${skill.icon} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white`}
            />
            <p className="mt-2 text-sm sm:text-base text-white/80">
              {skill.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
