"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaWordpressSimple,
  FaCloud,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    subtitle: "Crafting responsive, interactive, and accessible user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Building scalable APIs, server logic, and database architectures.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "Designing & CMS",
    subtitle: "Creating visual assets, wireframes, and managing content platforms.",
    skills: [
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Canva", icon: <FaPalette />, color: "#00C4CC" },
      { name: "WordPress CMS", icon: <FaWordpressSimple />, color: "#21759B" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    subtitle: "Version control, deployment pipelines, storage, and hosting tools.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
      { name: "Cloudinary", icon: <FaCloud />, color: "#3448C5" },
      { name: "cPanel", icon: <FaServer />, color: "#FF6C2C" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-6 bg-[#202020] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label mx-auto mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#155fd0]">
            What I Know
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technical Stack &amp; Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            I combine a strong eye for design with a developer&apos;s instinct for
            clean architecture, performance, and scalability across the full stack.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl border border-white/10 bg-[#262626]/80 p-7 text-left shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-[#2a2a2a]"
            >
              {/* Subtle top accent glow on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Header */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#4d8ef7] transition-colors">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {category.subtitle}
              </p>

              {/* Skill Badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#1c1c1c] px-3.5 py-2 text-sm font-medium text-white/85 shadow-sm transition-colors hover:border-white/25 hover:text-white"
                  >
                    <span
                      className="text-lg"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}