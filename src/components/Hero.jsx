import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import StatCard from "./StatCard";
import { motion } from "framer-motion";

export default function Hero({ data }) {
  const p = data.personal;

  return (
    <section id="hero" className="min-h-[88vh] flex flex-col justify-center pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs w-fit mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Open to Software Engineering Opportunities</span>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-emerald-400 text-lg md:text-xl font-mono mb-2"
      >
        Hi, my name is
      </motion.p>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
      >
        {p.name}.
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-300 mb-6 leading-tight max-w-4xl"
      >
        Full-Stack Systems Engineer &amp; Algorithmic Problem Solver.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-base sm:text-lg text-slate-400 max-w-3xl mb-8 leading-relaxed"
      >
        Computer Science undergraduate at <span className="text-emerald-400 font-medium">IIIT Kota</span>. I bridge theoretical depth in algorithms (<span className="text-emerald-300 font-mono">LeetCode Knight, top 3% globally</span>) with production software engineering — building real-time WebRTC collaborative platforms, high-throughput distributed engines with Redis Bloom filters, and local Agentic AI workflows.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap items-center gap-4 mb-16"
      >
        <Link 
          to="/projects" 
          className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
        >
          Explore Projects <ArrowRight size={16} />
        </Link>

        <Link
          to="/about"
          className="px-5 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-sm rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
        >
          About &amp; Background
        </Link>

        <div className="flex items-center gap-2 pl-2">
          {p.socials.github && (
            <a 
              href={p.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 text-slate-400 hover:text-emerald-400 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
          )}
          {p.socials.linkedin && (
            <a 
              href={p.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 text-slate-400 hover:text-emerald-400 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </motion.div>

      {/* Quick Platform Rating & Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {data.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + (i * 0.08) }}
          >
            <StatCard stat={s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
