import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Code, CheckCircle2 } from "lucide-react";

export default function About({ isStandalonePage = false }) {
  const recentTech = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React 19 & Next.js",
    "Node.js & Express 5",
    "C++ (Competitive Programming)",
    "Python & Machine Learning",
    "MongoDB & Redis",
    "Docker Compose",
    "WebSockets & WebRTC",
  ];

  return (
    <section id="about" className={`${isStandalonePage ? "py-10 md:py-16" : "py-24"} max-w-4xl`}>
      <SectionTitle
        badge="Biography &amp; Foundations"
        subtitle="A dual focus on competitive programming rigor and building scalable, fault-tolerant production software."
      >
        About Me
      </SectionTitle>

      <motion.div
        className="text-slate-300 text-base md:text-lg leading-relaxed space-y-6 bg-slate-900/50 border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Hello! I'm <span className="text-emerald-400 font-semibold">Saumyaketu</span>, an
          engineer who enjoys tackling hard problems across the entire software
          stack. My journey in computer science is driven by a dual passion: the
          theoretical depth of competitive programming and the practical
          challenges of building scalable, real-world systems.
        </p>

        <p>
          In the competitive programming arena, I thrive under pressure, having
          solved over <span className="text-white font-semibold">500 complex algorithmic challenges</span> and securing a spot in
          the <span className="text-emerald-300 font-semibold">top 3% globally on LeetCode (Knight)</span>. This rigorous foundation allows me to
          write highly optimized code, prevent performance bottlenecks, and design efficient data structures when building production software.
        </p>

        <p>
          Professionally, my experience spans from developing hybrid real-time
          architectures using <span className="text-white font-medium">WebRTC and WebSockets</span> to engineering high-throughput
          distributed systems like a resilient URL shortener featuring pre-buffered
          Base-62 tokens, Bloom filter DDoS protection, and sub-millisecond Redis caching.
          I've also ventured into Data Science, engineering neural networks for
          healthcare mortality predictions and constructing semantic recommendation engines
          using Large Language Models and vector embeddings.
        </p>

        <div className="pt-4 border-t border-slate-800">
          <p className="font-mono text-xs md:text-sm text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Code size={16} /> Key Technologies &amp; Daily Stack
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 font-mono text-xs md:text-sm">
            {recentTech.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-slate-300 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 font-bold">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
