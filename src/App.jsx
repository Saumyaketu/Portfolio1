import React, { useEffect, useState } from "react";
import DATA from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Navbar scrolled={scrolled} personal={DATA.personal} />

      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero data={DATA} />
        <About />
        <Skills data={DATA} />
        <Education data={DATA} />
        <Experience data={DATA} />
        <Projects data={DATA} />
        <Contact personal={DATA.personal} />
        <Footer personal={DATA.personal} />
      </main>
    </div>
  );
}
