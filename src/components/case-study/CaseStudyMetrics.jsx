import React from "react";
import {
  Play,
  Video,
  Cloud,
  CreditCard,
  Zap,
  Server,
  ShieldCheck,
  Cpu,
  Search,
  Bot,
  Database,
  Layers,
  FileCheck
} from "lucide-react";

export default function CaseStudyMetrics({ isVideoProject, isBookProject, isLmsProject }) {
  if (isLmsProject) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-4 sm:p-5 bg-slate-950/70 border-b border-slate-800">
        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-sky-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Zap size={13} className="shrink-0" />
            <span className="truncate">BRE Engine Latency</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            &lt; 15 ms
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Automated Underwriting</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <ShieldCheck size={13} className="shrink-0" />
            <span className="truncate">RBAC Enforcement</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            100% Guarded
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Dual-Tier 403 Forbidden</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Layers size={13} className="shrink-0" />
            <span className="truncate">Finite Lifecycle</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            4 Discrete States
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">APPLIED ➔ CLOSED</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-purple-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <FileCheck size={13} className="shrink-0" />
            <span className="truncate">Cloud Doc Pipeline</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            0 Disk Stash
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Multer Piped to Cloudinary</div>
        </div>
      </div>
    );
  }

  if (isVideoProject) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-4 sm:p-5 bg-slate-950/70 border-b border-slate-800">
        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-sky-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Play size={13} className="shrink-0" />
            <span className="truncate">Watch Sync Drift</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            &lt; 250 ms
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Threshold Compensator</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-purple-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Video size={13} className="shrink-0" />
            <span className="truncate">WebRTC Audio/Video</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            0 ms Relay
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Direct P2P Mesh (simple-peer)</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Cloud size={13} className="shrink-0" />
            <span className="truncate">Media Pipeline</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            0 RAM Stash
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Multer Piped to Cloudinary</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <CreditCard size={13} className="shrink-0" />
            <span className="truncate">Monetization &amp; Billing</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            100% Sync
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Razorpay Webhooks &amp; Mailer</div>
        </div>
      </div>
    );
  }

  if (isBookProject) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-4 sm:p-5 bg-slate-950/70 border-b border-slate-800">
        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-purple-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Search size={13} className="shrink-0" />
            <span className="truncate">2-Stage Retrieval</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            Chroma + Cross
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">all-MiniLM &amp; ms-marco Rerank</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Bot size={13} className="shrink-0" />
            <span className="truncate">Agent State Machine</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            Llama 3.2 (3B)
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">LangGraph ReAct via Ollama</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-sky-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <Database size={13} className="shrink-0" />
            <span className="truncate">Data Enrichment</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            7,000+ Books
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Zero-Shot NLI &amp; DistilRoBERTa</div>
        </div>

        <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
            <ShieldCheck size={13} className="shrink-0" />
            <span className="truncate">Local &amp; Private</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
            $0 / 100% Local
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs truncate">Zero API Fees &amp; Zero Leakage</div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-4 sm:p-5 bg-slate-950/70 border-b border-slate-800">
      <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
          <Zap size={13} className="shrink-0" />
          <span className="truncate">Fast Path Acquisition</span>
        </div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
          ~0 ms
        </div>
        <div className="text-slate-400 text-[11px] sm:text-xs truncate">In-Memory TokenBuffer</div>
      </div>

      <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center gap-1.5 text-sky-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
          <Server size={13} className="shrink-0" />
          <span className="truncate">Redirection Latency</span>
        </div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
          ~0.5 ms
        </div>
        <div className="text-slate-400 text-[11px] sm:text-xs truncate">Redis RAM Caching</div>
      </div>

      <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
          <ShieldCheck size={13} className="shrink-0" />
          <span className="truncate">Key Collisions</span>
        </div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
          0.0%
        </div>
        <div className="text-slate-400 text-[11px] sm:text-xs truncate">Atomic Range Leasing</div>
      </div>

      <div className="p-3 sm:p-3.5 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center gap-1.5 text-purple-400 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase mb-1">
          <Cpu size={13} className="shrink-0" />
          <span className="truncate">DDoS Defense</span>
        </div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-white font-mono tracking-tight my-0.5">
          &gt;99.9%
        </div>
        <div className="text-slate-400 text-[11px] sm:text-xs truncate">Bloom Filter (k=5) Dropped</div>
      </div>
    </div>
  );
}
