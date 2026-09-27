import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function HeroSection() {
  return (
    <main
      id="home"
      className="relative min-h-screen scroll-mt-6 overflow-hidden bg-[#111] text-white md:ml-[23%]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/new.jpeg')] bg-cover bg-[70%_center] sm:bg-[65%_center] md:bg-center lg:bg-[62%_center]" />

      {/* Dark Overlay - Adjusted gradient to keep left side clearly dark and readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#155fd0]/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative flex min-h-screen items-center px-7 pb-24 pt-28 sm:px-14 sm:pb-28 md:px-16 md:pb-14 lg:px-24">
        <div className="max-w-4xl">
          {/* Small Intro - Stacked on mobile/default, or adjust as needed */}
          <div className="mb-7 flex flex-col items-start gap-3 sm:mb-8 sm:gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 sm:text-xs">
                Available for work
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden h-px w-10 bg-white/50 sm:block" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
                I Am Anuj Kaundal
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-[12rem] text-lg font-bold leading-[0.9] tracking-[-0.04em] sm:max-w-3xl md:text-xl lg:text-5xl">
            MERN
            <span className="text-white/40"> Web</span>
            <span className="text-white"> Developer</span>
          </h1>

          {/* Description */}
          <div className="mt-7 flex max-w-2xl gap-4">
            <div className="mt-1 h-auto w-[2px] shrink-0 bg-gradient-to-b from-[#155fd0] to-transparent" />

            <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              I build fast, modern and scalable websites & web applications
              using <span className="font-medium text-white">React</span>,{" "}
              <span className="font-medium text-white">Next.js</span> and{" "}
              <span className="font-medium text-white">Node.js</span>.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#222] transition-all duration-300 hover:bg-gray-600 hover:text-white hover:shadow-[0_10px_40px_rgba(21,95,208,0.35)] sm:px-8 sm:text-sm"
            >
              Contact Me
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black backdrop-blur-md transition-all duration-300 hover:border-white/40 sm:px-8 sm:text-sm"
            >
              View Projects
            </a>
          </div>

          {/* Mini Stats */}
          <div className="mt-10 flex flex-wrap gap-7 border-t border-white/10 pt-6 sm:mt-12 sm:gap-10">
            <div>
              <p className="text-xl font-semibold sm:text-2xl">MERN</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
                Stack
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold sm:text-2xl">React</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
                Frontend
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold sm:text-2xl">Node</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
                Backend
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Bar */}
      <aside className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#191919]/80 px-5 py-3 shadow-2xl backdrop-blur-xl md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:rounded-l-2xl md:rounded-r-none md:px-4 md:py-5">
        <div className="mb-5 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-white/60 [writing-mode:vertical-rl] md:flex">
          Social
          <span className="h-10 w-px bg-white/30" />
        </div>

        <div className="flex flex-row items-center justify-center gap-4 text-xs sm:gap-5 sm:text-sm md:flex-col">
          <a
            href="https://www.linkedin.com/in/anuj-kaundal/"
            aria-label="LinkedIn"
            className="group transition-all duration-300 hover:text-[#155fd0]"
          >
            <FaLinkedinIn className="transition-transform duration-300 group-hover:scale-125" />
          </a>

          <a
            href="https://www.instagram.com/kaundal135_?stkn=cW4wOXpzYzZtNWk1"
            aria-label="Instagram"
            className="group transition-all duration-300 hover:text-[#155fd0]"
          >
            <FaInstagram className="transition-transform duration-300 group-hover:scale-125" />
          </a>

          <a
            href="https://github.com/anujkaundal25"
            aria-label="github"
            className="group transition-all duration-300 hover:text-[#155fd0]"
          >
            <FaGithub className="transition-transform duration-300 group-hover:scale-125" />
          </a>
        </div>
      </aside>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-7 hidden items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/40 sm:flex lg:left-24">
        <span className="h-8 w-px bg-white/30" />
        Scroll to explore
      </div>
    </main>
  );
}

export default HeroSection;