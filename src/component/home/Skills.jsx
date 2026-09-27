import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
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
      className="scroll-mt-6 bg-[#202020] px-8 py-24 text-center text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <span className="section-label mx-auto mb-3">
          What I Know
        </span>
        <h2 className="mt-5 text-4xl font-bold sm:text-3xl">
          My Skills
        </h2>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center justify-center gap-3 text-5xl text-white/70 lg:gap-15">
              <FaReact />
              <RiNextjsLine />
              <FaWordpressSimple />
              <FaFigma />

            </div>
            <h3 className="mt-6 text-3xl font-semibold">
              Building ideas into useful products.
            </h3>
            <p className="mt-5 leading-8 text-white/60">
              I combine a strong eye for detail with a developer&apos;s instinct
              for structure, performance, and accessibility.
            </p>
          </div>
          <div className="space-y-7">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-3 flex justify-center gap-4 text-sm">
                  <span>{skill.name}</span>
                  <span className="text-white/50">{skill.value}</span>
                </div>
                <div className="h-1.5 bg-white/10">
                  <div
                    className="h-full bg-white/50 border-2 border-white rounded-full"
                    style={{ width: skill.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
