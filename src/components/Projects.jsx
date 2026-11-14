import React, { useState, useMemo } from "react";
import SectionTitle from "./SectionTitle";
import {
  Github,
  ExternalLink,
  Layers,
  ArrowRight,
  Eye,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";
import ProjectDetailModal from "./ProjectDetailModal";

export default function Projects({ data, isStandalonePage = false }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [detailProject, setDetailProject] = useState(null);
  const [caseStudyProject, setCaseStudyProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "realtime", label: "Real-Time & WebRTC", match: (p) => p.topic?.toLowerCase().includes("real-time") },
    { id: "distributed", label: "Distributed Systems", match: (p) => p.topic?.toLowerCase().includes("distributed") },
    { id: "fintech", label: "FinTech & RBAC", match: (p) => p.topic?.toLowerCase().includes("fintech") },
    { id: "ai", label: "Agentic AI & NLP", match: (p) => p.topic?.toLowerCase().includes("ai") || p.topic?.toLowerCase().includes("nlp") }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return data.projects;
    const cat = categories.find((c) => c.id === activeCategory);
    if (!cat || !cat.match) return data.projects;
    return data.projects.filter(cat.match);
  }, [activeCategory, data.projects]);

  return (
    <section id="projects" className={`${isStandalonePage ? "py-10 md:py-16" : "py-24"}`}>
      <SectionTitle
        badge="Engineering Portfolio"
        subtitle="High-concurrency distributed systems, real-time WebRTC architectures, enterprise FinTech engines, and local Agentic AI workflows. Click any project to inspect full architecture details."
      >
        Featured Projects
      </SectionTitle>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1.5 hidden sm:inline-flex">
          <Filter size={13} /> Filter:
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? data.projects.length
              : data.projects.filter((p) => cat.match && cat.match(p)).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-emerald-500/30 text-emerald-200"
                    : "bg-slate-800 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid (Overview Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((proj, idx) => {
          const previewImage = proj.images?.[0];
          const hasCaseStudy = Boolean(proj.caseStudy);
          const topMetrics = proj.metrics ? proj.metrics.slice(0, 3) : [];
          const visibleTech = proj.tech ? proj.tech.slice(0, 5) : [];
          const extraTechCount = proj.tech ? proj.tech.length - visibleTech.length : 0;
          const overviewText = proj.tagline || proj.description;

          return (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-emerald-950/20"
            >
              <div>
                {/* Image Thumbnail / Preview */}
                <div
                  onClick={() => setDetailProject(proj)}
                  className="relative h-52 sm:h-60 w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-700 mb-5 flex items-center justify-center cursor-pointer transition-colors"
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt={proj.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300 select-none"
                    />
                  ) : (
                    <div className="text-slate-500 font-mono text-xs">
                      No Media Preview
                    </div>
                  )}

                  {/* Slide count / type badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-sm">
                    <span>{proj.images?.length || 0} media assets</span>
                    {proj.images?.some((img) => typeof img === "string" && img.includes(".gif")) && (
                      <span className="text-amber-400 font-semibold">• Live GIF</span>
                    )}
                    {proj.images?.some((img) => typeof img === "string" && img.includes(".svg")) && (
                      <span className="text-emerald-400 font-semibold">• Architecture</span>
                    )}
                  </div>

                  {/* Click to expand overlay hint */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-mono font-semibold text-xs flex items-center gap-2 shadow-lg">
                      <Eye size={15} /> Inspect Details &amp; Slides
                    </span>
                  </div>
                </div>

                {/* Topic & Title */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider uppercase">
                    {proj.topic}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    #{String(proj.id).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  onClick={() => setDetailProject(proj)}
                  className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {proj.title}
                </h3>

                {/* Concise Overview Summary */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {overviewText}
                </p>

                {/* Compact Highlight Metrics */}
                {topMetrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {topMetrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-slate-950/60 border border-slate-800/80 px-2.5 py-2 rounded-lg text-center"
                      >
                        <div className="text-emerald-400 font-mono font-bold text-xs sm:text-sm truncate">
                          {m.value}
                        </div>
                        <div className="text-slate-400 text-[10px] font-mono truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Preview */}
                {visibleTech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {visibleTech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {extraTechCount > 0 && (
                      <span className="px-2 py-0.5 bg-slate-800/60 border border-slate-700/60 text-[11px] font-mono text-emerald-400/80 rounded">
                        +{extraTechCount} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setDetailProject(proj)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 transition-all hover:scale-102 cursor-pointer"
                >
                  <Eye size={14} /> View Details &amp; Points <ArrowRight size={13} />
                </button>

                <div className="flex items-center gap-2">
                  {hasCaseStudy && (
                    <button
                      onClick={() => setCaseStudyProject(proj)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
                      title="System Architecture Case Study"
                    >
                      <Layers size={13} /> Architecture
                    </button>
                  )}

                  {proj.links?.github && (
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all"
                      title="Source Code"
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {proj.links?.live && (
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal (Opens when user clicks "View Details" or project card) */}
      <ProjectDetailModal
        project={detailProject}
        isOpen={Boolean(detailProject)}
        onClose={() => setDetailProject(null)}
        onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
      />

      {/* Full Screen Architecture & Case Study Modal */}
      <CaseStudyModal
        project={caseStudyProject}
        isOpen={Boolean(caseStudyProject)}
        onClose={() => setCaseStudyProject(null)}
      />
    </section>
  );
}
