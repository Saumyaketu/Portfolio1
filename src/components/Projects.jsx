import SectionTitle from "./SectionTitle";
import { Github, ExternalLink } from "lucide-react";

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-24">
      <SectionTitle>Some Things I've Built</SectionTitle>

      <div className="grid gap-20">

        {data.projects.map((proj, i) => (
          <div className={`flex flex-col md:flex-row gap-12 ${i % 2 ? "md:flex-row-reverse" : ""}`}>

            <div className="flex-1">
              <p className="text-emerald-400 font-mono text-sm">{proj.topic}</p>

              <h3 className="text-2xl text-white font-bold mb-4">
                {proj.title}
              </h3>

              <div className="bg-slate-800 p-6 rounded mb-6">
                <p className="mb-4">{proj.description}</p>

                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  {proj.points.map((pt) => <li>{pt}</li>)}
                </ul>
              </div>

              <ul className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-6">
                {proj.tech.map((t) => <li>{t}</li>)}
              </ul>

              <div className="flex gap-4">
                <a href={proj.links.github}><Github /></a>
                <a href={proj.links.live}><ExternalLink /></a>
              </div>
            </div>

            <div className="flex-1 bg-slate-700 rounded h-64 flex items-center justify-center">
              Project Screenshot
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
