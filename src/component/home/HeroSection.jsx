import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

function HeroSection() {
  return (
    <main id="home" className="relative min-h-screen scroll-mt-6 overflow-hidden bg-[#171717] text-white md:ml-[23%]">
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-[70%_center] sm:bg-[65%_center] md:bg-center lg:bg-[62%_center]" />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative flex min-h-screen items-center px-7 pb-24 pt-28 sm:px-14 sm:pb-28 md:px-16 md:pb-14 lg:px-24">
        <div className="max-w-4xl">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/90 sm:mb-8 sm:gap-3 sm:text-base sm:tracking-[0.45em]">
            <span className="bg-[#155fd0] px-2 py-0.5 tracking-[0.35em]">I Am</span>
            <span>Anuj Kaundal</span>
            <span className="ml-1 h-px w-9 bg-white/70 sm:w-14" />
          </div>

          <h1 className="max-w-[12rem] text-5xl font-bold leading-[0.95] tracking-tight sm:max-w-3xl sm:text-7xl lg:text-8xl">
            Web Developer
          </h1>

          <a href="#contact" className="mt-9 inline-block rounded-full bg-white px-7 py-3 text-xs font-medium uppercase tracking-wider text-[#333] transition-colors hover:bg-[#155fd0] hover:text-white sm:mt-10 sm:px-8 sm:text-sm">
            Contact Me
          </a>
        </div>
      </div>

      <aside className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#191919]/95 px-5 py-3 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:rounded-l-2xl md:rounded-r-none md:px-4 md:py-5">
        <div className="mb-5 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-white/80 [writing-mode:vertical-rl] md:flex">
          Social
          <span className="h-10 w-px bg-white/50" />
        </div>
        <div className="flex flex-row md:flex-col justify-center items-center gap-4 text-xs sm:gap-5 sm:text-sm">
          <a href="#facebook" aria-label="Facebook" className="transition-colors hover:text-[#155fd0]"><FaFacebookF /></a>
          <a href="#twitter" aria-label="Twitter" className="transition-colors hover:text-[#155fd0]"><FaTwitter /></a>
          <a href="#linkedin" aria-label="LinkedIn" className="transition-colors hover:text-[#155fd0]"><FaLinkedinIn /></a>
          <a href="#instagram" aria-label="Instagram" className="transition-colors hover:text-[#155fd0]"><FaInstagram /></a>
          <a href="#pinterest" aria-label="Pinterest" className="transition-colors hover:text-[#155fd0]"><FaPinterestP /></a>
        </div>
      </aside>
    </main>
  );
}

export default HeroSection;