import SectionTitle from "./SectionTitle";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24">
      <SectionTitle>Experience</SectionTitle>

      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {data.experience.map((exp, idx) => (
          <motion.div 
            key={exp.id || idx}
            className="relative pl-8 md:pl-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <motion.div 
              className="absolute -left-[5px] top-0 bg-slate-900 border-2 border-emerald-400 rounded-full p-1"
            >
              <Briefcase size={14} className="text-emerald-400" />
            </motion.div>

            <motion.div 
              className="bg-slate-800/40 p-6 rounded border border-slate-700 hover:scale-102 hover:border-emerald-400/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                <h3 className="text-2xl font-bold text-white">
                  {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                </h3>
                
                <div className="flex items-center gap-2 text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full text-sm w-fit">
                  <Calendar size={14} className="text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="mb-4 text-slate-300">{exp.description}</p>

              <ul className="list-disc pl-5 space-y-1 text-slate-400 text-sm">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
