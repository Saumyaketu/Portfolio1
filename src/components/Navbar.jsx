import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Code, Layers, User, Award, Briefcase, Mail, ScrollText, Github, Linkedin } from "lucide-react";

export default function Navbar({ scrolled, personal }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Code },
    { name: "Projects", path: "/projects", icon: Layers, badge: "5" },
    { name: "About", path: "/about", icon: User },
    { name: "Skills", path: "/skills", icon: Award },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isAllView = location.pathname === "/all";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3.5"
          : "bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40 py-4.5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
            SK
          </div>
          <span className="font-mono text-base md:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight flex items-center gap-1.5">
            Saumyaketu
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-xl backdrop-blur-md shadow-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent"
                }`}
              >
                <Icon size={14} className={isActive ? "text-emerald-400" : "text-slate-500"} />
                <span>{item.name}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-emerald-400 text-slate-950 font-bold"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Right Action: All-in-One Switcher & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to={isAllView ? "/" : "/all"}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all flex items-center gap-1.5 ${
              isAllView
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
            }`}
            title="Toggle between focused pages and continuous single-page resume"
          >
            <ScrollText size={13} />
            <span>{isAllView ? "Single-Page Active" : "Full Page View"}</span>
          </Link>

          {personal?.socials?.github && (
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {personal?.socials?.linkedin && (
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to={isAllView ? "/" : "/all"}
            className="p-2 text-xs font-mono text-emerald-400 bg-slate-900 rounded-lg border border-slate-800"
          >
            {isAllView ? "Tabs" : "All"}
          </Link>
          <button
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} className="text-emerald-400" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 shadow-2xl backdrop-blur-xl px-6 py-6 space-y-2 mt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl font-mono text-sm transition-all ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold"
                    : "text-slate-300 hover:bg-slate-900 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className={isActive ? "text-emerald-400" : "text-slate-400"} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    {item.badge} projects
                  </span>
                )}
              </NavLink>
            );
          })}

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <Link
              to={isAllView ? "/" : "/all"}
              onClick={() => setIsOpen(false)}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              <ScrollText size={14} className="text-emerald-400" />
              <span>{isAllView ? "Switch to Tabbed Pages" : "Switch to Single-Page Scroll"}</span>
            </Link>

            <div className="flex gap-3">
              {personal?.socials?.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <Github size={18} />
                </a>
              )}
              {personal?.socials?.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
