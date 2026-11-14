import React from "react";

export default function StatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <div 
      className="bg-slate-900/70 hover:bg-slate-900 h-full p-3.5 sm:p-4 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between group overflow-hidden"                                                             
    >
      <div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 text-slate-400">
          {Icon && <Icon className="text-emerald-400 size-4 group-hover:scale-110 transition-transform shrink-0" />}
          <span className="text-xs sm:text-sm font-semibold text-slate-300 truncate">{stat.label}</span>
        </div>
        
        <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
          <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
            {stat.value}
          </span>
          {stat.achievement && (
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap">
              {stat.achievement}
            </span>
          )}
        </div>
      </div>

      <div className="text-[10px] sm:text-xs font-mono text-slate-500 mt-2 truncate">
        {stat.sub}
      </div>
    </div>
  );
}
