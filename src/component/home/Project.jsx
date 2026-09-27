import React from "react";

const projects = [
  { title: "Eazy minds", category: "Health Services", image: "/portfolio-img/web1.png", url: "https://eazymindsbh.com/" },
  { title: "Dadi-Industries", category: "Achaar & candy Store", image: "/portfolio-img/web5.png", url: "https://dadi-industries.com/" },
  { title: "Med Integrity Group", category: "Medical Services", image: "/portfolio-img/web2.png", url: "https://medintegrity-group.com/" },
  { title: "MCH Innovations", category: "Tech Services", image: "/portfolio-img/web3.png", url: "https://mchinnovations.com/" },
  { title: "Andre Loonstra", category: "Storage & Transport", image: "/portfolio-img/web4.png", url: "https://andreloonstrabeheer.com/" },
  { title: "Trekking Website", category: "Trekking Website", image: "/portfolio-img/web6.png", url: "https://trekking-orcin.vercel.app/" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-6 bg-[#202020] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mx-auto">Selected Work</p>
        <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">Latest Projects</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-white/20 rounded-lg block cursor-pointer overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full aspect-[1/1] object-contain p-2 transition duration-500"
              />
              {/* Text overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 pt-12 transition-all duration-300 translate-y-2 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mx-auto w-fit rounded-full bg-white px-2 py-1 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black">{project.category}</p>
                <h3 className="mt-2 text-center text-xl font-semibold">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
