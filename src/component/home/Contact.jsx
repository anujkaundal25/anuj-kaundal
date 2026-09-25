import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-6 bg-[#292929] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#8eb9ff]">Let&apos;s Talk</p>
        <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">Have Any Question?</h2>
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-7 text-white/70">
            <div className="flex items-start gap-4"><FaMapMarkerAlt className="mt-1 text-[#8eb9ff]" /><span>Available for remote projects worldwide.</span></div>
            <div className="flex items-start gap-4"><FaEnvelope className="mt-1 text-[#8eb9ff]" /><span>hello@anujkaundal.com</span></div>
            <div className="flex items-start gap-4"><FaPhoneAlt className="mt-1 text-[#8eb9ff]" /><span>+91 00000 00000</span></div>
          </div>
          <form className="grid gap-4 bg-[#222222] p-6 sm:grid-cols-2 sm:p-8">
            <input aria-label="Name" placeholder="Name" className="bg-[#2d2d2d] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[#8eb9ff]" />
            <input aria-label="Email" type="email" placeholder="Email" className="bg-[#2d2d2d] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[#8eb9ff]" />
            <input aria-label="Subject" placeholder="Subject" className="bg-[#2d2d2d] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[#8eb9ff] sm:col-span-2" />
            <textarea aria-label="Message" placeholder="Message" rows="5" className="resize-none bg-[#2d2d2d] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[#8eb9ff] sm:col-span-2" />
            <button type="submit" className="rounded-full border border-white/30 px-7 py-3 text-sm uppercase tracking-wider transition-colors hover:border-[#8eb9ff] hover:text-[#8eb9ff] sm:col-span-2 sm:justify-self-start">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}