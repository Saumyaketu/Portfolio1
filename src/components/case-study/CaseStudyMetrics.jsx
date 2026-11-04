import React from "react";
import { Play, Video, Cloud, CreditCard, Zap, Server, ShieldCheck, Cpu } from "lucide-react";

export default function CaseStudyMetrics({ isVideoProject }) {
  if (isVideoProject) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6 bg-slate-950/60 border-b border-slate-800">
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5 text-sky-400 text-xs font-mono mb-1">
            <Play size={14} /> WATCH SYNC DRIFT
          </div>
          <div className="text-2xl font-bold text-white font-mono">&lt; 250 ms</div>
          <div className="text-slate-400 text-xs mt-0.5">Threshold Compensator</div>
        </div>

        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono mb-1">
            <Video size={14} /> WEBRTC AUDIO/VIDEO
          </div>
          <div className="text-2xl font-bold text-white font-mono">0 ms Relay</div>
          <div className="text-slate-400 text-xs mt-0.5">Direct P2P Mesh (simple-peer)</div>
        </div>

        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
            <Cloud size={14} /> MEDIA STREAMING PIPELINE
          </div>
          <div className="text-2xl font-bold text-white font-mono">0 RAM Stash</div>
          <div className="text-slate-400 text-xs mt-0.5">Multer Piped to Cloudinary</div>
        </div>

        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono mb-1">
            <CreditCard size={14} /> MONETIZATION &amp; BILLING
          </div>
          <div className="text-2xl font-bold text-white font-mono">100% Sync</div>
          <div className="text-slate-400 text-xs mt-0.5">Razorpay Webhooks &amp; Mailer</div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6 bg-slate-950/60 border-b border-slate-800">
      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
          <Zap size={14} /> FAST PATH ACQUISITION
        </div>
        <div className="text-2xl font-bold text-white font-mono">~0 ms</div>
        <div className="text-slate-400 text-xs mt-0.5">In-Memory TokenBuffer</div>
      </div>

      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 text-sky-400 text-xs font-mono mb-1">
          <Server size={14} /> REDIRECTION LATENCY
        </div>
        <div className="text-2xl font-bold text-white font-mono">~0.5 ms</div>
        <div className="text-slate-400 text-xs mt-0.5">Redis RAM Caching</div>
      </div>

      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono mb-1">
          <ShieldCheck size={14} /> KEY COLLISIONS
        </div>
        <div className="text-2xl font-bold text-white font-mono">0.0%</div>
        <div className="text-slate-400 text-xs mt-0.5">Atomic Range Leasing</div>
      </div>

      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono mb-1">
          <Cpu size={14} /> DDOS DEFENSE
        </div>
        <div className="text-2xl font-bold text-white font-mono">&gt;99.9%</div>
        <div className="text-slate-400 text-xs mt-0.5">Bloom Filter (k=5) Dropped</div>
      </div>
    </div>
  );
}
