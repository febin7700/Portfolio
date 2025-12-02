"use client";
import { motion } from "framer-motion";
import MagnetEffect from "./MagnetEffect";

const cardVariants = {
  hover: { scale: 1.05, y: -5 },
};

const projects = [
  {
    title: "E-commerce Website",
    description: "Pet Food Shop with login, cart, and admin panel.",
    link: "#", // Replace with deployed link
  },
  {
    title: "Portfolio Website",
    description: "This portfolio built with Next.js, Tailwind, and Framer Motion.",
    link: "#", // Replace with deployed link
  },
  {
    title: "Blog Application",
    description: "A full-stack blog with user authentication and content management.",
    link: "#", // Replace with deployed link
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 text-white px-6 md:px-12 lg:px-20 z-10 relative"
    >
      <MagnetEffect className="inline-block mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center text-white/20 uppercase tracking-widest mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
      </MagnetEffect>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <article className="bg-white/10 p-6 rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </article>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
