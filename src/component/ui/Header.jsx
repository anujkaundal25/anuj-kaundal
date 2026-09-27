"use client";
import React, { useEffect, useState } from "react";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
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
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar with Hamburger Button */}
      <div className="md:hidden flex items-center justify-between bg-[#191919] text-white p-5 fixed top-0 left-0 w-full z-50">
        <h1 className="text-3xl font-black italic">AK</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              className="w-7 h-7"
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
          ) : (
            // Hamburger Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop overlay for mobile when menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <div
        className={`bg-[#191919] text-white h-screen fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out
          w-72 md:w-[23%] p-10 pt-20 md:pt-20
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <img src="/profile.jpg" alt="" className="w-28 h-28 rounded-full object-cover"/>
        <div className="space-y-10">
          {/* Logo hidden on mobile header since it's already in the top bar */}
          <h1 className="hidden md:block text-2xl font-black italic">
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
