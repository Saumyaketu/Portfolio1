import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Layers, Zap, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";

// Internal Carousel Component
function ProjectCarousel({ images, title, onOpenCaseStudy, hasCaseStudy }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex, e) => {
    e.stopPropagation();
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl h-64 md:h-full flex items-center justify-center text-slate-400 font-mono border border-slate-700 border-dashed">
        No Images
      </div>
    );
  }

  const isCurrentSvg = typeof images[currentIndex] === "string" && images[currentIndex].includes(".svg");
  const isCurrentGif = typeof images[currentIndex] === "string" && images[currentIndex].includes(".gif");

  return (
    <div className="relative h-72 md:h-full min-h-[320px] w-full group overflow-hidden rounded-xl bg-slate-900 border border-slate-700/80 shadow-lg flex items-center justify-center">
      {/* Image Renderer */}
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="w-full h-full object-contain p-2 duration-300 transition-all select-none"
      />

      {/* Slide Index Badge */}
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-sm">
        <span>{currentIndex + 1} / {images.length}</span>
        {isCurrentSvg && (
          <span className="text-emerald-400 font-semibold">• Architecture Flow</span>
        )}
        {isCurrentGif && (
          <span className="text-amber-400 font-semibold">• Live Demo GIF</span>
        )}
      </div>

      {/* Quick Deep-Dive Button on Image if Case Study exists */}
      {hasCaseStudy && (
        <button
          onClick={onOpenCaseStudy}
          className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-sm border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-1 cursor-pointer"
          title="Open System Architecture Case Study"
        >
          <Maximize2 size={13} /> Deep Dive
        </button>
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden group-hover:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 rounded-full bg-slate-950/80 text-white cursor-pointer hover:bg-emerald-500 hover:text-slate-950 transition-all z-10 border border-slate-700"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden group-hover:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 rounded-full bg-slate-950/80 text-white cursor-pointer hover:bg-emerald-500 hover:text-slate-950 transition-all z-10 border border-slate-700"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center items-center py-2 gap-1.5 w-full absolute bottom-2 z-10">
            {images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={(e) => goToSlide(slideIndex, e)}
                className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                  currentIndex === slideIndex
                    ? "bg-emerald-400 w-5 shadow-sm shadow-emerald-400/50"
                    : "bg-slate-600 hover:bg-slate-400 w-2"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects({ data }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24">
      <SectionTitle>Some Things I've Built</SectionTitle>

      <div className="grid gap-24">
        {data.projects.map((proj, i) => (
          <motion.div
            key={proj.id || i}
            className={`flex flex-col md:flex-row gap-10 items-stretch ${
              i % 2 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content Side */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-emerald-400 font-mono text-sm tracking-wide uppercase font-semibold mb-1">
                  {proj.topic}
                </p>
                <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 tracking-tight">
                  {proj.title}
                </h3>

                {/* Hero / Card Tagline */}
                {proj.tagline && (
                  <p className="text-emerald-300/90 text-sm font-mono mb-4 bg-emerald-950/30 border-l-2 border-emerald-400 pl-3 pr-2 py-1.5 rounded-r">
                    "{proj.tagline}"
                  </p>
                )}

                {/* Highlight KPI Metrics Bar */}
                {proj.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {proj.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/90 border border-slate-800 p-2 rounded-lg text-center"
                      >
                        <div className="text-emerald-400 font-mono font-bold text-sm sm:text-base">
                          {m.value}
                        </div>
                        <div className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content Box */}
                <div className="bg-slate-800/80 p-5 md:p-6 rounded-xl mb-5 border border-slate-700/80 shadow-md">
                  <p className="mb-4 text-slate-300 text-sm md:text-base leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="space-y-2 text-slate-400 text-xs md:text-sm">
                    {proj.points.map((pt, idx) => {
                      const colonIdx = pt.indexOf(":");
                      if (colonIdx > 0 && colonIdx < 60) {
                        const heading = pt.slice(0, colonIdx);
                        const body = pt.slice(colonIdx + 1);
                        return (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                            <span>
                              <strong className="text-slate-200 font-semibold">
                                {heading}:
                              </strong>
                              {body}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                          <span>{pt}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 mb-6">
                  {proj.tech.map((t, idx) => (
                    <li
                      key={idx}
                      className="px-2.5 py-1 bg-slate-900/80 border border-slate-700/70 rounded-md hover:border-emerald-400/40 transition-colors"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {proj.caseStudy && (
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-lg transition-all shadow-sm hover:scale-105 cursor-pointer"
                  >
                    <Layers size={15} /> System Architecture ↗
                  </button>
                )}

                {proj.links?.github && (
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-all"
                  >
                    <Github size={15} /> Source
                  </a>
                )}

                {proj.links?.live && (
                  <a
                    href={proj.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-emerald-400 border border-slate-700 rounded-lg transition-all"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>

              {/* Optional Recruiter / Demo Notice */}
              {proj.testModeNotice && (
                <div className="mt-4 text-xs text-amber-300/90 bg-amber-950/25 border border-amber-500/25 rounded-lg px-3.5 py-2 flex items-start gap-2 font-mono">
                  <span className="text-amber-400 font-bold mt-0.5">💡</span>
                  <span className="leading-relaxed">{proj.testModeNotice}</span>
                </div>
              )}
            </div>

            {/* Slideshow Side */}
            <div className="flex-1 min-h-[320px] flex">
              <ProjectCarousel
                images={proj.images}
                title={proj.title}
                onOpenCaseStudy={() => setActiveModalProject(proj)}
                hasCaseStudy={Boolean(proj.caseStudy)}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Architecture & Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
