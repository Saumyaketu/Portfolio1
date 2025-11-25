import { Github, Linkedin } from "lucide-react";
import StatCard from "./StatCard";

export default function Hero({ data }) {
  const p = data.personal;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
      <p className="text-emerald-400 text-xl font-mono mb-4">Hi, my name is</p>

      <h1 className="text-6xl font-bold text-white mb-4">{p.name}.</h1>

      <h2 className="text-4xl text-slate-400 mb-6">I build scalable web systems.</h2>

      <p className="text-lg text-slate-400 max-w-xl mb-10">
        I'm a {p.title}. I focus on web development and competitive programming at 
        <span className="text-emerald-400"> IIIT Kota</span>.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 border border-emerald-400 rounded text-emerald-400">
          Check my work
        </a>
        <a href={p.socials.github} target="_blank"><Github className="text-slate-400" /></a>
        <a href={p.socials.linkedin} target="_blank"><Linkedin className="text-slate-400" /></a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        {data.stats.map((s, i) => <StatCard key={i} stat={s} />)}
      </div>
    </section>
  );
}
