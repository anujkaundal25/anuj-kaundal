import React from "react";
import {
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#202020] px-8 py-5 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mt-2 flex items-center gap-3">
          <a
            href="#twitter"
            aria-label="Twitter"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292929] text-white/70 transition-colors hover:bg-white hover:text-[#202020]"
          >
            <FaTwitter />
          </a>
          <a
            href="#linkedin"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292929] text-white/70 transition-colors hover:bg-white hover:text-[#202020]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#instagram"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292929] text-white/70 transition-colors hover:bg-white hover:text-[#202020]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/anujkaundal25"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292929] text-white/70 transition-colors hover:bg-white hover:text-[#202020]"
          >
            <FaGithub />
          </a>
        </div>

        <p className="mt-6 text-sm text-white/65">
          &copy; {new Date().getFullYear()} Anuj Kaundal. All rights reserved.
        </p>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-[#202020] sm:right-10"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
}

export default Footer;
