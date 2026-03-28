"use client";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 w-full z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center bg-white/10 dark:bg-[#112240]/70 backdrop-blur-md rounded-b-2xl shadow-lg border-b border-[#233554]/40">
        <a href="#intro" className="text-2xl font-extrabold text-[#64ffda] tracking-tight px-2 py-1 rounded-lg bg-gradient-to-r from-[#64ffda]/20 to-[#5ee7df]/10 hover:from-[#64ffda]/40 transition-all duration-300">Anusha Mahajan</a>
        <div className="flex gap-2 md:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-1 font-medium text-[#a8b2d1] hover:text-[#64ffda] transition-colors duration-200 ${active === link.href ? "text-[#64ffda]" : ""}`}
              onMouseEnter={() => setActive(link.href)}
              onMouseLeave={() => setActive("")}
            >
              {link.label}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2.5px] w-6 rounded-full bg-gradient-to-r from-[#64ffda] to-[#5ee7df] transition-all duration-300 ${active === link.href ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}