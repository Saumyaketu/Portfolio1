import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Skills from "../components/Skills";
import StatCard from "../components/StatCard";

export default function SkillsPage({ data }) {
  return (
    <div className="pt-24 pb-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home Overview
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          View Projects <ArrowRight size={14} />
        </Link>
      </div>

      {/* Ratings & Platforms Row */}
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
          Algorithmic Ratings &amp; Academic Metrics
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {data.stats.map((s, i) => (
            <StatCard key={i} stat={s} />
          ))}
        </div>
      </div>

      <Skills data={data} isStandalonePage={true} />
    </div>
  );
}
