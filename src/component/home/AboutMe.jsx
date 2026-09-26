import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-6 bg-[#292929] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(260px,0.8fr)_1.2fr]">
        <div className="overflow-hidden bg-[#202020]">
          <img
            src="/about.jpg"
            alt="Anuj Kaundal"
            className="h-full min-h-[360px] w-full object-cover grayscale"
          />
        </div>

        <div>
          <span className="section-label mb-3">About Me</span>

          <h2 className="max-w-4xl text-3xl font-bold leading-tight mt-5">
            Passionate web developer building modern digital experiences.
          </h2>

          <p className="mt-7 max-w-2xl leading-8 text-white/65">
            A passionate web developer focused on building
            modern, responsive, and user-friendly websites. I enjoy turning
            ideas into clean, functional digital experiences using modern web
            technologies.
          </p>

          <p className="mt-4 max-w-2xl leading-8 text-white/65">
            I work across frontend and backend development, with a focus on
            writing clean, maintainable code and creating websites that look
            great, perform smoothly, and provide an excellent user experience.
          </p>

          <h3 className="text-xl sm:text-3xl lg:text-3xl pt-5">- 𝔸𝕟𝕦𝕛 𝕂𝕒𝕦𝕟𝕕𝕒𝕝</h3>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

