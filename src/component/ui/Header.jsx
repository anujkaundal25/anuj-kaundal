"use client";
import React, { useEffect, useState } from "react";

function Header({ isOpen, onOpenChange }) {
  const [activeTab, setActiveTab] = useState("Home");

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Skills", id: "skills" },
    // { label: "Services", id: "services" },
    { label: "Projects", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = menuItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const item = menuItems.find(
            ({ id }) => id === visibleSection.target.id,
          );
          if (item) setActiveTab(item.label);
        }
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id, label) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(label);
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          className="fixed left-0 top-[32%] z-50 flex h-40 w-14 items-center justify-center rounded-r-2xl border border-white/50 bg-[#111] text-white transition-colors transition-all duration-600 hover:bg-white hover:text-black"
          aria-label="Open navigation menu"
          aria-expanded={false}
          aria-controls="site-navigation"
        >
          <span className="rotate-180 text-xs font-bold tracking-[0.3em] [writing-mode:vertical-rl]">
            MENU
          </span>
        </button>
      )}

      {/* Sidebar Navigation */}
      <div
        id="site-navigation"
        className={`fixed left-0 top-0 z-40 h-screen w-72 bg-[#191919] p-10 pt-20 text-white transition-transform duration-300 ease-in-out md:w-[23%]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-5 top-5 p-2 text-white/70 transition-colors hover:text-white"
          aria-label="Close navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <img src="/profile.jpg" alt="" className="h-28 w-28 rounded-full object-cover"/>
        <div className="space-y-10">
          <h1 className="text-2xl font-black italic">
            𝔸𝕟𝕦𝕛 𝕂𝕒𝕦𝕟𝕕𝕒𝕝
          </h1>

          <ul className="space-y-5 text-xl cursor-pointer">
            {menuItems.map(({ label, id }) => {
              const isActive = activeTab === label;
              return (
                <li
                  key={id}
                  onClick={() => scrollToSection(id, label)}
                  className={`flex items-center transition-colors duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="ml-3 inline-block w-6 h-[2px] bg-white"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export { Header };
