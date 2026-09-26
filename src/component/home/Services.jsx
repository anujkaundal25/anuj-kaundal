import React from "react";
import { FaLaptopCode, FaPalette } from "react-icons/fa";
const services = [
  {
    icon: FaPalette,
    title: "Web Design",
    text: "Clear, expressive interfaces shaped around your audience and goals.",
  },
  {
    icon: FaLaptopCode,
    title: "Web Development",
    text: "Fast, accessible websites built with maintainable modern code.",
  },
  {
    icon: FaPalette,
    title: "Web Development",
    text: "Modern, responsive, and high-performance websites built with clean and reliable code.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-6 bg-[#292929] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-label mx-auto mb-3">
          What I Do
        </p>
        <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">
          My Services
        </h2>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="bg-[#222222] p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon className="text-4xl text-[#8eb9ff]" />
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/60">{text}</p>
              <a
                href="#contact"
                className="mt-7 inline-block text-sm uppercase tracking-wider text-white/80 hover:text-[#8eb9ff]"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
