"use client";

import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  const contactData = [
    // {
    //   icon: <FaMapMarkerAlt className="h-6 w-6 text-[#292929]" />,
    //   title: "Address",
    //   lines: ["Work Place Dehradun", "Permanenet Himachal Pradesh"],
    // },
    {
      icon: <FaEnvelope className="h-6 w-6 text-[#292929]" />,
      title: "Email Us",
      lines: ["kaundalanuj45@gmail.com", "kaundalanuj45@gmail.com"],
    },
    {
      icon: <FaPhoneAlt className="h-6 w-6 text-[#292929]" />,
      title: "Call Now",
      lines: ["1234567890", "123456789"],
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-6 bg-[#1e1e1e] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24"
      >
        <p className="section-label mx-auto mb-12">Contact</p>

        {/* 3 Cards Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Static Address Card */}
          <div className="group flex flex-col items-center justify-between rounded-xl bg-[#242424] p-8 text-center transition-all duration-300 hover:bg-[#282828] hover:shadow-lg">
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                <FaMapMarkerAlt className="h-6 w-6 text-[#292929]" />
              </div>
              <h3 className="mb-6 text-xl font-semibold tracking-wide text-white">
                Address
              </h3>
            </div>
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/[0.04] p-4 text-center transition-colors hover:bg-white/[0.07]">
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  W / P
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-200">
                  Dehradun
                </span>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-4 text-center transition-colors hover:bg-white/[0.07]">
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  P / A
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-200">
                  Himachal
                </span>
              </div>
            </div>
          </div>

          {/* Mapped Dynamic Cards */}
          {contactData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-between rounded-xl bg-[#242424] p-8 text-center transition-all duration-300 hover:bg-[#282828] hover:shadow-lg"
            >
              <div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold tracking-wide text-white">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-1 text-sm text-gray-300 sm:text-base">
                {item.lines.map((line, lineIdx) => (
                  <p key={lineIdx} className="font-normal text-gray-300">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Have Any Question Form Section with Overlapping Map Layout */}
      </section>
      <section className="relative mt-24 min-h-[760px] bg-[#292929] px-4 pb-16 pt-2 text-white sm:px-8 md:ml-[23%]">
        <div className="relative z-10 text-center">
          <p className="section-label mx-auto">Contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Have Any Question?
          </h2>
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
