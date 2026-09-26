import React from "react";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "React & Next.js", value: "90%" },
  { name: "JavaScript", value: "86%" },
  { name: "UI / UX Design", value: "82%" },
  { name: "Responsive CSS", value: "88%" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-6 bg-[#202020] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[10px] uppercase tracking-[0.35em] text-[#8eb9ff]">What I Know</p>
        <h2 className="mt-3 text-center text-4xl font-bold sm:text-3xl">My Skills</h2>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <FaReact className="text-5xl text-[#8eb9ff]" />
            <h3 className="mt-6 text-3xl font-semibold">Building ideas into useful products.</h3>
            <p className="mt-5 leading-8 text-white/60">I combine a strong eye for detail with a developer&apos;s instinct for structure, performance, and accessibility.</p>
          </div>
          <div className="space-y-7">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-3 flex justify-between text-sm"><span>{skill.name}</span><span className="text-white/50">{skill.value}</span></div>
                <div className="h-1.5 bg-white/10"><div className="h-full bg-[#8eb9ff]" style={{ width: skill.value }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}