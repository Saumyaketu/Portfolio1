import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function Skills({ data, isStandalonePage = false }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className={`${isStandalonePage ? "py-10 md:py-16" : "py-24"}`}>
      <SectionTitle
        badge="Competencies"
        subtitle="Languages, frameworks, real-time protocols, database architectures, and algorithmic problem-solving toolsets."
      >
        Technical Skills
      </SectionTitle>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data.skills.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-slate-900/60 hover:bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-emerald-950/20 group"
            >
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="text-white font-bold text-lg">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-950/80 text-slate-300 rounded-md border border-slate-800 group-hover:border-slate-700 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
