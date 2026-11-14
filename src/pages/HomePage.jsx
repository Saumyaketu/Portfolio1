import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, Award, Terminal, Code2 } from "lucide-react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function HomePage({ data }) {
  // Take top 2 projects for the teaser showcase on the homepage
  const featuredData = {
    ...data,
    projects: data.projects.slice(0, 2)
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero data={data} />

      {/* Featured Projects Showcase Preview */}
      <section className="py-16 border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-3">
              Selected Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              A quick preview of production-grade systems. Visit the dedicated Projects page to view all 5 systems and their complete architectures.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 rounded-xl font-mono text-xs md:text-sm font-semibold transition-all hover:scale-105 shrink-0"
          >
            <span>View All {data.projects.length} Projects</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Featured Projects Cards (using the new overview card layout) */}
        <Projects data={featuredData} isStandalonePage={true} />

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
          >
            <Layers size={18} />
            <span>Open Dedicated Projects Section ({data.projects.length} Systems)</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Quick Navigation Cards to Explore Other Sections */}
      <section className="py-16 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: About */}
          <Link
            to="/about"
            className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                About &amp; Education
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                CS undergraduate at IIIT Kota with strong foundations in distributed computing and algorithms.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
              Read background <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Skills */}
          <Link
            to="/skills"
            className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Technical Skills
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Languages, frontend, backend frameworks, WebRTC, real-time protocols, and AI/NLP toolsets.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
              Explore skills <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Experience */}
          <Link
            to="/experience"
            className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Terminal size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Experience &amp; Work
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Industry data science internship, neural network mortality modeling, and benchmark achievements.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
              View experience <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
