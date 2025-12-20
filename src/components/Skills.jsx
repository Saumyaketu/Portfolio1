import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function Skills({ data }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24">
      <SectionTitle>Technical Skills</SectionTitle>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {data.skills.map((group, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="bg-slate-800/30 p-6 rounded border border-slate-700 hover:scale-105 hover:border-emerald-400/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <group.icon size={20} />
              <h3 className="text-slate-400 text-xl">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="px-2 py-1 text-sm bg-slate-900 rounded border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
