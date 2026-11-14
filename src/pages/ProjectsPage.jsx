import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Layers, ShieldCheck, Sparkles } from "lucide-react";
import Projects from "../components/Projects";

export default function ProjectsPage({ data }) {
  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb & Navigation Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home Overview
        </Link>

        <div className="text-xs font-mono text-slate-500">
          Showing <span className="text-emerald-400 font-semibold">{data.projects.length}</span> Engineering Projects
        </div>
      </div>

      {/* Hero Banner for Projects */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-emerald-950/20 border border-slate-800/80 mb-10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
              <Sparkles size={13} />
              <span>Full Project Catalog</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Systems, Architectures &amp; Applications
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Below are production-ready systems spanning low-latency WebSockets &amp; WebRTC, high-throughput Base-62 distributed token generators with Redis Bloom filters, RBI-compliant FinTech loan underwriting engines, and local ReAct agent workflows.
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-2 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 shrink-0">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck size={16} /> Production Tested
            </div>
            <div>• Sub-millisecond Redis Caches</div>
            <div>• Zero-RAM Multer Streams</div>
            <div>• Distributed KGS Range Leases</div>
          </div>
        </div>
      </div>

      {/* Main Projects Section (Only Projects are shown here!) */}
      <Projects data={data} isStandalonePage={true} />
    </div>
  );
}
