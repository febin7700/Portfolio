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
    <section id="skills" className="py-20 text-white px-6 md:px-20 z-10 relative">
      <MagnetEffect className="inline-block mx-auto">
      <motion.h2
        className="text-6xl md:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        SKILLS
      </motion.h2>
</MagnetEffect>
      <Marquee gradient={false} speed={80}>
        {skills.map((skill, i) => (
          <div
            key={i}
            className="mx-10 flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <i className={`${skill.icon} text-6xl text-white`} />
            <p className="mt-2 text-white/80">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}