import { Github, Linkedin } from "lucide-react";
import StatCard from "./StatCard";
import { motion } from "framer-motion";

export default function Hero({ data }) {
  const p = data.personal;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-emerald-400 text-xl font-mono mb-4"
      >
        Hi, my name is
      </motion.p>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
      >
        {p.name}.
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 leading-tight"
      >
        Full-Stack Developer | Competitive Programmer | ML Enthusiast.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
      >
        I'm a Computer Science undergraduate at <span className="text-emerald-400">IIIT Kota</span>. I bridge the gap between complex algorithmic problem-solving (ranked top 3% globally on LeetCode) and production-level software engineering. From WebRTC video platforms to predictive machine learning models, I build robust and highly optimized solutions.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap items-center gap-4"
      >
        <a href="#projects" className="px-6 py-3 border border-emerald-400 rounded text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 hover:scale-105 transition-all font-mono text-sm">
          Check my work
        </a>
        <a href={p.socials.github} target="_blank" className="p-3 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"><Github /></a>
        <a href={p.socials.linkedin} target="_blank" className="p-3 text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"><Linkedin /></a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20">
        {data.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + (i * 0.1) }}
          >
            <StatCard stat={s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
