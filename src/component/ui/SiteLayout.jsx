"use client";

import { useState } from "react";
import { Header } from "@/component/ui/Header";

export default function SiteLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#292929]">
      <Header isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <main
        className={`transition-[margin] duration-300 ease-in-out ${
          isSidebarOpen ? "md:ml-[23%]" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
