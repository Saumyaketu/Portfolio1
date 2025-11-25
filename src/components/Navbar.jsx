import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children, mobile, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }}
    className={`font-mono text-sm ${
      mobile ? "block py-4 text-center text-lg" : "hover:text-emerald-400"
    }`}
  >
    {children}
  </a>
);

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md transition-all ${
        scrolled ? "bg-slate-900/90 shadow-lg py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-emerald-400 font-mono text-xl border border-emerald-400 rounded px-2">
          Saumyaketu
        </div>

        <div className="hidden md:flex gap-8">
          <NavLink href="#about"> About</NavLink>
          <NavLink href="#skills"> Skills</NavLink>
          <NavLink href="#education"> Education</NavLink>
          <NavLink href="#experience"> Experience</NavLink>
          <NavLink href="#projects"> Projects</NavLink>
          <NavLink href="#contact"> Contact</NavLink>
        </div>

        <button className="md:hidden text-emerald-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 shadow-xl">
          <NavLink mobile href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink mobile href="#skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink mobile href="#education" onClick={() => setIsOpen(false)}> Education</NavLink>
          <NavLink mobile href="#experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink mobile href="#projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink mobile href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
