import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

import CaseStudyMetrics from "./case-study/CaseStudyMetrics";
import VideoCaseStudy from "./case-study/VideoCaseStudy";
import UrlShortenerCaseStudy from "./case-study/UrlShortenerCaseStudy";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");

  const isVideoProject =
    project?.id === 1 ||
    project?.caseStudy?.type === "video" ||
    project?.title?.toLowerCase().includes("video") ||
    project?.title?.toLowerCase().includes("youtube");

  // Reset to architecture tab when modal opens or project changes
  useEffect(() => {
    setActiveTab("architecture");
  }, [project]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-10 flex flex-col text-slate-200"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-start justify-between p-6 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  SYSTEM ARCHITECTURE CASE STUDY
                </span>
                <span className="text-slate-500 text-xs font-mono">
                  • {isVideoProject ? "Real-Time Streaming & P2P Topology" : "Enterprise-Grade Distributed Systems"}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-3xl">
                {project.tagline || project.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <CaseStudyMetrics isVideoProject={isVideoProject} />

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 px-6 bg-slate-900/50">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`py-3 px-4 font-mono text-sm border-b-2 transition-all cursor-pointer ${
                activeTab === "architecture"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              System Architecture &amp; Flow
            </button>
            <button
              onClick={() => setActiveTab("challenge")}
              className={`py-3 px-4 font-mono text-sm border-b-2 transition-all cursor-pointer ${
                activeTab === "challenge"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              The Engineering Challenge
            </button>
            <button
              onClick={() => setActiveTab("decisions")}
              className={`py-3 px-4 font-mono text-sm border-b-2 transition-all cursor-pointer ${
                activeTab === "decisions"
                  ? "border-emerald-400 text-emerald-400 font-semibold"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Key Technical Decisions ("The Why")
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 md:p-8 space-y-8 flex-1">
            {isVideoProject ? (
              <VideoCaseStudy activeTab={activeTab} project={project} />
            ) : (
              <UrlShortenerCaseStudy activeTab={activeTab} project={project} />
            )}
          </div>

          {/* Footer Call to Action */}
          <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 p-4 md:p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="text-xs text-slate-400 font-mono">
              {isVideoProject
                ? "Next.js 16 (React 19) • WebRTC mesh • Socket.io drift sync < 250ms"
                : "Docker compose ready • Tested with 300+ concurrent requests"}
            </div>
            <div className="flex items-center gap-3">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
                >
                  <Github size={15} /> View Source Code
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-lg shadow-emerald-500/20"
                >
                  <ExternalLink size={15} /> Launch Live Application
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
