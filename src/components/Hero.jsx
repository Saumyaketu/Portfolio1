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
        className="text-6xl font-bold text-white mb-4"
      >
        {p.name}.
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl text-slate-400 mb-6"
      >
        I build scalable web systems.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-400 max-w-xl mb-10"
      >
        I'm a {p.title}. I focus on web development and competitive programming at 
        <span className="text-emerald-400"> IIIT Kota</span>.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <a href="#projects" className="px-6 py-3 border border-emerald-400 rounded text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/30 hover:scale-110 transition-colors">
          Check my work
        </a>
        <a href={p.socials.github} target="_blank" className="p-3 hover:text-emerald-400 hover:scale-110 transition-colors"><Github /></a>
        <a href={p.socials.linkedin} target="_blank" className="p-3 hover:text-emerald-400 hover:scale-110 transition-colors"><Linkedin /></a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
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
