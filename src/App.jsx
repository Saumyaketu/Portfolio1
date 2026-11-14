import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DATA from "./data";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import AllPage from "./pages/AllPage";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-300">
      {/* Subtle Ambient Light Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <Navbar scrolled={scrolled} personal={DATA.personal} />

      {/* Main Page Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
        <Routes>
          <Route path="/" element={<HomePage data={DATA} />} />
          <Route path="/projects" element={<ProjectsPage data={DATA} />} />
          <Route path="/about" element={<AboutPage data={DATA} />} />
          <Route path="/skills" element={<SkillsPage data={DATA} />} />
          <Route path="/experience" element={<ExperiencePage data={DATA} />} />
          <Route path="/contact" element={<ContactPage data={DATA} />} />
          <Route path="/all" element={<AllPage data={DATA} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage data={DATA} />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
        <Footer personal={DATA.personal} />
      </div>
    </div>
  );
}
