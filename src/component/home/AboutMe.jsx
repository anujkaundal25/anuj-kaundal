import React from "react";

function AboutMe() {
  return (
    <section id="about" className="scroll-mt-6 bg-[#292929] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(260px,0.8fr)_1.2fr]">
        <div className="overflow-hidden bg-[#202020]">
          <img src="/about.jpg" alt="Anuj Kaundal" className="h-full min-h-[360px] w-full object-cover grayscale" />
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8eb9ff]">About Me</p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">Professional and dedicated creative developer.</h2>
          <p className="mt-7 max-w-2xl leading-8 text-white/65">I build thoughtful digital experiences where clean design, useful interaction, and dependable code work together. Every project is an opportunity to make the web clearer, faster, and more human.</p>
          <p className="mt-4 max-w-2xl leading-8 text-white/65">From the first idea to the final detail, I bring a practical and curious approach to web design and development.</p>
          <a href="#portfolio" className="mt-8 inline-block rounded-full border border-white/30 px-7 py-3 text-sm uppercase tracking-wider transition-colors hover:border-[#8eb9ff] hover:text-[#8eb9ff]">More About Me</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;