import React from "react";

const projects = [
  { title: "Editorial Direction", category: "Brand experience", image: "/about.jpg" },
  { title: "Portrait Study", category: "Art direction", image: "/hero.jpg" },
  { title: "Digital Workspace", category: "Web development", image: "/about.jpg" },
  { title: "Editorial Direction", category: "Brand experience", image: "/about.jpg" },
  { title: "Portrait Study", category: "Art direction", image: "/hero.jpg" },
  { title: "Digital Workspace", category: "Web development", image: "/about.jpg" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-6 bg-[#202020] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#8eb9ff]">Selected Work</p>
        <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">Latest Projects</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group relative aspect-[4/3] overflow-hidden bg-[#292929]">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-16">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8eb9ff]">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}