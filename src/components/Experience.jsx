import React from "react";
import SectionTitle from "./SectionTitle";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience({ data, isStandalonePage = false }) {
  return (
    <section id="experience" className={`${isStandalonePage ? "py-10 md:py-16" : "py-24"}`}>
      <SectionTitle
        badge="Career &amp; Industry"
        subtitle="Hands-on software development and data science internships solving real-world challenges."
      >
        Experience
      </SectionTitle>

      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-10 max-w-4xl">
        {data.experience.map((exp, idx) => (
          <motion.div 
            key={exp.id || idx}
            className="relative pl-7 md:pl-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Timeline Node */}
            <div className="absolute -left-[17px] top-1.5 bg-slate-950 border-2 border-emerald-400 rounded-full p-1.5 shadow-md shadow-emerald-500/20">
              <Briefcase size={14} className="text-emerald-400" />
            </div>

            <div className="bg-slate-900/60 hover:bg-slate-900/90 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}{" "}
                    <span className="text-emerald-400 font-semibold">@ {exp.company}</span>
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-slate-400 bg-slate-950/80 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-mono w-fit">
                  <Calendar size={13} className="text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="mb-4 text-slate-300 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2.5 text-slate-300 text-xs md:text-sm">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
