"use client";

import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  const contactData = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-[#292929]" />,
      title: "Address",
      lines: ["7 Green Lake Street", "Crawfordsville, IN 47933"],
    },
    {
      icon: <FaEnvelope className="h-6 w-6 text-[#292929]" />,
      title: "Email Us",
      lines: ["portfar@gmail.com", "helloyou@gmail.com"],
    },
    {
      icon: <FaPhoneAlt className="h-6 w-6 text-[#292929]" />,
      title: "Call Now",
      lines: ["+1 800 123 456 789", "+1 800 123 654 987"],
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-6 bg-[#1e1e1e] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24"
      >
        {/* 3 Cards Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#242424] p-10 text-center transition-all duration-300 hover:bg-[#282828] rounded-lg"
            >
              {/* Circular White Icon Container */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-semibold tracking-wide text-white">
                {item.title}
              </h3>

              {/* Content Lines */}
              <div className="space-y-1 text-sm text-gray-300 sm:text-base">
                {item.lines.map((line, lineIdx) => (
                  <p key={lineIdx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Have Any Question Form Section with Overlapping Map Layout */}
      </section>
      <section className="relative mt-24 min-h-[760px] bg-[#292929] px-4 pb-16 pt-2 text-white sm:px-8 md:ml-[23%]">
        <div className="relative z-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/65">Contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Have Any Question?</h2>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-[430px] z-0 overflow-hidden sm:top-[390px]">
          <iframe
            width="100%"
            height="100%"
            className="h-full w-full border-0 filter grayscale invert contrast-125"
            loading="lazy"
            src="https://maps.google.com/maps?q=7+Green+Lake+Street,+Crawfordsville,+IN+47933&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>

        <div className="relative z-10 mx-auto mt-14 flex max-w-3xl items-center justify-center px-0 sm:mt-16">
          <div className="w-full bg-[#212121] p-8 shadow-2xl sm:p-14">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Row 1: Name & Lastname */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full bg-[#1b1b1b] px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  className="w-full rounded-full bg-[#1b1b1b] px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              {/* Row 2: Email & Subject */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full bg-[#1b1b1b] px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-full bg-[#1b1b1b] px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-3xl bg-[#1b1b1b] px-6 py-5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="rounded-full border border-gray-600 px-12 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

      </section>
    </>
  );
}
