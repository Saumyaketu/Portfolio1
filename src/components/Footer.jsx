import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800/80 py-10 text-slate-400 text-xs font-mono">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-slate-300 font-semibold">{personal.name}</span>
          <span className="text-slate-600">•</span>
          <span>Software Engineer</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link to="/skills" className="hover:text-emerald-400 transition-colors">Skills</Link>
          <Link to="/experience" className="hover:text-emerald-400 transition-colors">Experience</Link>
          <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          {personal.socials?.github && (
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {personal.socials?.linkedin && (
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
          <span className="text-slate-600">© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
