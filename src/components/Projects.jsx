import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Internal Carousel Component
function ProjectCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex, e) => {
    e.stopPropagation();
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-slate-700 rounded h-64 flex items-center justify-center text-slate-400 font-mono border border-slate-600 border-dashed">
        No Images
      </div>
    );
  }

  return (
    <div className="relative h-64 md:h-full w-full group overflow-hidden rounded bg-slate-800 border border-slate-700">
      <div 
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        className="w-full h-full bg-center bg-cover duration-500 transition-all"
        aria-label={`${title} screenshot ${currentIndex + 1}`}
      ></div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition-all z-10"
          >
            <ChevronRight size={24} />
          </button>
          <div className="flex justify-center py-2 gap-2 w-full absolute bottom-2 z-10">
            {images.map((slide, slideIndex) => (
              <div 
                key={slideIndex}
                onClick={(e) => goToSlide(slideIndex, e)}
                className={`cursor-pointer h-2 rounded-full transition-all shadow-sm ${
                  currentIndex === slideIndex ? "bg-emerald-400 w-4" : "bg-white/50 w-2 hover:bg-white/80"
                }`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-24">
      <SectionTitle>Some Things I've Built</SectionTitle>

      <div className="grid gap-20">
        
        {data.projects.map((proj, i) => (
          <motion.div 
            key={proj.id || i} 
            className={`flex flex-col md:flex-row gap-12 ${i % 2 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            
            {/* Content Side */}
            <div className="flex-1">
              <p className="text-emerald-400 font-mono text-m">{proj.topic}</p>
              <h3 className="text-2xl text-white font-bold mb-4">{proj.title}</h3>

              <div className="bg-slate-800 p-6 rounded mb-6 border border-slate-700">
                <p className="mb-4 text-slate-300">{proj.description}</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  {proj.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                </ul>
              </div>

              <ul className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-6">
                {proj.tech.map((t, idx) => <li key={idx}>{t}</li>)}
              </ul>

              <div className="flex gap-4">
                <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-emerald-400 transition-colors"><Github /></a>
                <a href={proj.links.live} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-emerald-400 transition-colors"><ExternalLink /></a>
              </div>
            </div>

            {/* Slideshow Side */}
            <div className="flex-1 min-h-[300px]">
              <ProjectCarousel images={proj.images} title={proj.title} />
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
