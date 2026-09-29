"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaWordpressSimple, FaFigma } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const skills = [
  { name: "React & Next.js", value: "90%" },
  { name: "Full Front-End Responsive CSS", value: "95%" },
  { name: "Wordpress", value: "86%" },
  { name: "UI / UX Design [ Figma , Canva ]", value: "82%" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-6 bg-[#202020] px-8 py-24 text-center text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mx-auto mb-3 inline-block text-xs uppercase tracking-[0.25em] text-[#155fd0] font-semibold">
            What I Know
          </span>
          <h2 className="mt-5 text-4xl font-bold sm:text-3xl">
            My Skills
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
          {/* Left Column: Icons & Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 text-5xl text-white/70 lg:gap-12">
              <motion.div whileHover={{ scale: 1.2, color: "#155fd0" }} transition={{ duration: 0.2 }}>
                <FaReact />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#ffffff" }} transition={{ duration: 0.2 }}>
                <RiNextjsLine />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#21759b" }} transition={{ duration: 0.2 }}>
                <FaWordpressSimple />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#f24e1e" }} transition={{ duration: 0.2 }}>
                <FaFigma />
              </motion.div>
            </div>

            <h3 className="mt-6 text-3xl font-semibold">
              Building ideas into useful products.
            </h3>
            <p className="mt-5 leading-8 text-white/60">
              I combine a strong eye for detail with a developer&apos;s instinct
              for structure, performance, and accessibility.
            </p>
          </motion.div>

          {/* Right Column: Animated Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7"
          >
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-3 flex justify-center gap-4 text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-white/50">{skill.value}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                    className="h-full bg-white/70 border border-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}