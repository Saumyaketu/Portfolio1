import React from "react";

export default function SectionTitle({ children, badge, subtitle }) {
  return (
    <div className="mb-10">
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-4">
        <span>{children}</span>
        <span className="hidden md:block h-px bg-slate-800 flex-1 ml-4"></span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
