import SectionTitle from "./SectionTitle";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Education({ data }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="education" className="py-24">
      <SectionTitle>Education</SectionTitle>

      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {data.education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:scale-102 hover:border-emerald-400/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={100} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl text-white font-bold">{edu.degree}</h3>
                <p className="text-emerald-400 font-mono mt-1">{edu.school}</p>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full text-sm w-fit">
                <Calendar size={14} className="text-emerald-400"/>
                <span>{edu.period}</span>
              </div>
            </div>

            <p className="text-slate-400">{edu.grade}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
