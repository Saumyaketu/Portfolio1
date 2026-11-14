import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

export default function ContactPage({ data }) {
  return (
    <div className="pt-24 pb-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home Overview
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          View Projects <ArrowRight size={14} />
        </Link>
      </div>

      <Contact personal={data.personal} isStandalonePage={true} />
    </div>
  );
}
