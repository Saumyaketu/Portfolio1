import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact({ personal, isStandalonePage = false }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (!personal?.email) return;
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={`${isStandalonePage ? "py-12 md:py-16" : "py-24"} max-w-4xl mx-auto text-center`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-3">
          Get in Touch
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let's Build Something Together
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
          I'm currently looking for software engineering roles, distributed systems projects, and high-impact teams. Feel free to reach out anytime!
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto text-left">
          {/* Email card */}
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
              <div className="text-xs font-mono text-slate-200 truncate">{personal.email}</div>
            </div>
          </div>

          {/* Location card */}
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
              <div className="text-xs font-mono text-slate-200">{personal.location || "India"}</div>
            </div>
          </div>

          {/* Socials card */}
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Profiles</div>
              <div className="text-xs font-mono text-emerald-400">GitHub &amp; LinkedIn</div>
            </div>
            <div className="flex gap-2">
              {personal.socials?.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
                >
                  <Github size={16} />
                </a>
              )}
              {personal.socials?.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
                >
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <Send size={16} /> Send Email
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-sm rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
