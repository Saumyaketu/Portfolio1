import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Layers,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Sparkles,
  Info
} from "lucide-react";

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onOpenCaseStudy
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide when project changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  // Handle ESC key and body scroll lock
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

  const images = project.images || [];
  const hasMultipleImages = images.length > 1;

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const isCurrentSvg =
    typeof images[currentSlide] === "string" &&
    images[currentSlide].includes(".svg");
  const isCurrentGif =
    typeof images[currentSlide] === "string" &&
    images[currentSlide].includes(".gif");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
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
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-10 flex flex-col text-slate-200"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-start justify-between p-5 md:p-6 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 uppercase tracking-wider">
                  {project.topic || "Project Details"}
                </span>
                <span className="text-slate-500 text-xs font-mono">
                  • Detailed Technical View
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 md:p-8 space-y-8">
            {/* Tagline / Pitch */}
            {project.tagline && (
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 font-mono text-sm leading-relaxed">
                "{project.tagline}"
              </div>
            )}

            {/* Media Gallery / Slideshow */}
            {images.length > 0 && (
              <div className="relative h-72 sm:h-96 md:h-[420px] w-full group overflow-hidden rounded-xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center">
                <img
                  src={images[currentSlide]}
                  alt={`${project.title} screenshot ${currentSlide + 1}`}
                  className="w-full h-full object-contain p-3 select-none"
                />

                {/* Badge for slide */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-md bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <span>
                    {currentSlide + 1} / {images.length}
                  </span>
                  {isCurrentSvg && (
                    <span className="text-emerald-400 font-semibold">
                      • System Architecture
                    </span>
                  )}
                  {isCurrentGif && (
                    <span className="text-amber-400 font-semibold">
                      • Live Demo Recording
                    </span>
                  )}
                </div>

                {/* Arrows */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white transition-all z-10 border border-slate-700 shadow-md cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white transition-all z-10 border border-slate-700 shadow-md cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={22} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center items-center py-2 gap-1.5 w-full absolute bottom-3 z-10">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                            currentSlide === idx
                              ? "bg-emerald-400 w-6 shadow-sm shadow-emerald-400/50"
                              : "bg-slate-600 hover:bg-slate-400 w-2"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Quick Actions Bar */}
            <div className="flex flex-wrap items-center gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-mono font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md cursor-pointer"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-mono font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
                >
                  <Github size={16} /> View Source Code
                </a>
              )}
              {project.caseStudy && onOpenCaseStudy && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCaseStudy(project);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-mono font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-lg transition-all cursor-pointer"
                >
                  <Layers size={16} /> Open Architecture Case Study ↗
                </button>
              )}
            </div>

            {/* Highlight KPI Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-emerald-400" />
                  Engineering Benchmarks &amp; Key Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/60 border border-slate-700/80 p-3.5 rounded-xl text-center"
                    >
                      <div className="text-emerald-400 font-mono font-bold text-base md:text-lg">
                        {m.value}
                      </div>
                      <div className="text-slate-300 text-xs font-semibold mt-0.5">
                        {m.label}
                      </div>
                      {m.detail && (
                        <div className="text-slate-500 text-[10px] font-mono mt-1">
                          {m.detail}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                System Overview
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-800">
                {project.description}
              </p>
            </div>

            {/* Key Implementation Points / Bullets */}
            {project.points && project.points.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Cpu size={14} className="text-emerald-400" />
                  Key Implementation Details &amp; Architecture Points
                </h4>
                <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/80 shadow-sm">
                  <ul className="space-y-3.5 text-slate-300 text-xs md:text-sm">
                    {project.points.map((pt, idx) => {
                      const colonIdx = pt.indexOf(":");
                      if (colonIdx > 0 && colonIdx < 60) {
                        const heading = pt.slice(0, colonIdx);
                        const body = pt.slice(colonIdx + 1);
                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-emerald-400 font-bold mt-0.5 select-none">
                              ▹
                            </span>
                            <span>
                              <strong className="text-emerald-300 font-semibold">
                                {heading}:
                              </strong>
                              {body}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="text-emerald-400 font-bold mt-0.5 select-none">
                            ▹
                          </span>
                          <span>{pt}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            {/* Full Tech Stack */}
            {project.tech && project.tech.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technologies, Libraries &amp; Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300/90 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recruiter / Testing Notice */}
            {project.testModeNotice && (
              <div className="text-xs text-amber-300/90 bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 flex items-start gap-2.5 font-mono">
                <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {project.testModeNotice}
                </span>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="sticky bottom-0 z-20 flex items-center justify-between p-4 md:p-5 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <span className="text-slate-500 text-xs font-mono">
              Press ESC or click close
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-all border border-slate-700 cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
