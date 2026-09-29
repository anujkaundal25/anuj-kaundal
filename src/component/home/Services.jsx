"use client";

import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaPalette, FaPenNib } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: FaLaptopCode,
    price: "$100",
    title: "Web Development",
    text: "Responsive, fast, and maintainable websites built with modern technologies and clean code.",
    points: [
      "“An advance payment of $50 is required and is non-refundable if the client cancels the project.”",
      "Project delivery within 3 months.",
      "1 months free support after delivery.",
      "Up to 3 minor revision rounds included.",
      "Up to 2 functional changes included.",
      "Major changes will be charged separately.",
      "Extra features are not included in the agreed price.",
      "Client delays may extend the delivery date.",
      "Domain, Hosting are not included in the agreed price.",
      "Cancellation after work starts = no refund.",
    ],
  },
  {
    icon: FaPalette,
    price: "$60",
    title: "Web Design",
    text: "Modern and visually engaging website designs focused on usability, consistency, and your brand.",
    points: [
      "“An advance payment of $20 is required and is non-refundable if the client cancels the project.”",
      "Project delivery within 1 week.",
      "2 months free support after delivery.",
      "Minor UI changes are included.",
      "Major redesigns are charged separately.",
      "Extra pages are charged separately.",
      "Final content must be provided by the client.",
      "Client delays may extend delivery time.",
      "Design is based on the approved requirements.",
      "Domain, Hosting are not included in the agreed price.",
      "Cancellation after work starts = no refund.",
    ],
  },
  {
    icon: FaPenNib,
    price: "$20",
    title: "UI/UX Design",
    text: "User-friendly interfaces and thoughtful experiences designed to make websites simple and enjoyable to use.",
    points: [
      "“An advance payment of $5 is required and is non-refundable if the client cancels the project.”",
      "Project delivery within 1-2 weeks.",
      "Up to 3 revision rounds included.",
      "Minor UI changes are included.",
      "Major layout changes are charged separately.",
      "Extra screens are charged separately.",
      "User flow changes may cost extra.",
      "Prototype included if mentioned in the scope.",
      "Client must provide timely feedback.",
      "Approved designs are considered final.",
      "Cancellation after work starts = no refund.",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (!selectedService) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedService(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <>
      <section
        id="services"
        className="scroll-mt-6 bg-[#292929] px-8 py-24 text-white sm:px-14 md:ml-[23%] md:px-16 lg:px-24 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mx-auto mb-3 text-center">What I Do</p>
            <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">
              My Services
            </h2>
          </motion.div>

          {/* Cards Grid with Stagger Animation */}
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.map(({ icon: Icon, price, title, text, points }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-[#222222] p-8 flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <Icon className="text-6xl text-[#8eb9ff]" />

                <p className="mt-6 text-2xl font-bold text-[#8eb9ff]">
                  {price}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-white/60 text-center">
                  {text}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedService({ title, points })}
                  className="mt-7 inline-block text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-[#8eb9ff]"
                >
                  Read More
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8"
            role="presentation"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-lg bg-[#222222] p-7 text-white shadow-2xl sm:p-9"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close service details"
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-3 text-2xl leading-none text-white/60 transition-colors hover:text-white"
              >
                &times;
              </button>

              <h2
                id="service-modal-title"
                className="pr-8 text-2xl font-bold text-[#8eb9ff]"
              >
                {selectedService.title}
              </h2>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-left leading-6 text-white/75">
                {selectedService.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}