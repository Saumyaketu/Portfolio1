import React from "react";
import SectionTitle from "./SectionTitle";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education({ data, isStandalonePage = false }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className={`${isStandalonePage ? "py-10 md:py-16" : "py-24"}`}>
      <SectionTitle
        badge="Academic Background"
        subtitle="Formal Computer Science and Engineering education and academic credentials."
      >
        Education
      </SectionTitle>

      <motion.div 
        className="space-y-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="bg-slate-900/60 hover:bg-slate-900/90 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={120} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl text-white font-bold tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-emerald-400 font-mono text-sm md:text-base mt-1">
                  {edu.school}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400 bg-slate-950/80 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-mono w-fit">
                <Calendar size={13} className="text-emerald-400"/>
                <span>{edu.period}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs md:text-sm">
              <Award size={15} />
              <span>{edu.grade}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
