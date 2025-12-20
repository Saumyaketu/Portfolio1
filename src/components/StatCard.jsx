import { motion } from "framer-motion";

export default function StatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <motion.div 
      className="bg-slate-800/30 h-full p-5 m-1 rounded border border-slate-700 hover:scale-105 hover:border-emerald-400/30 transition-colors"                                                             
    >
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Icon className="text-emerald-400 size-5"/>
          <span className="text-xl text-slate-400">{stat.label}</span>
          <span className="text-xl text-emerald-400">{stat.achievement}</span>
        </div>
        <div className="text-2xl font-bold text-white">{stat.value}</div>
      </div>

      <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
    </motion.div>
  );
}
