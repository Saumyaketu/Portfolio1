import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function AllPage({ data }) {
  return (
    <div>
      <div className="pt-24 mb-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
          Continuous Single-Page View
        </span>
      </div>
      <Hero data={data} />
      <About />
      <Skills data={data} />
      <Education data={data} />
      <Experience data={data} />
      <Projects data={data} />
      <Contact personal={data.personal} />
    </div>
  );
}
