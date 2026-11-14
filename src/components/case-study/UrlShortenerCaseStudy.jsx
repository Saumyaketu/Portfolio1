import React, { useState } from "react";
import {
  Workflow,
  Layers,
  ShieldCheck,
  ArrowRight,
  AlertTriangle,
  Cpu
} from "lucide-react";
import urlShortArchDiagram from "../../assets/project4_architecture.svg";

export default function UrlShortenerCaseStudy({ activeTab, project }) {
  const [activeFlow, setActiveFlow] = useState("write");
  const caseStudy = project?.caseStudy || {};

  return (
    <>
      {/* TAB 1: SYSTEM ARCHITECTURE (URL SHORTENER) */}
      {activeTab === "architecture" && (
        <div className="space-y-8">
          {/* Visual Architecture Diagram Container */}
          <div className="bg-slate-950 rounded-xl p-4 md:p-6 border border-slate-800 relative group overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="text-emerald-400" size={18} />
                <h4 className="text-sm font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  Distributed Architecture Flowchart
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Docker Containerized 5-Tier
              </span>
            </div>

            {/* SVG Display */}
            <div className="w-full rounded-lg bg-slate-900/90 border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
              <img
                src={urlShortArchDiagram}
                alt="System Architecture Diagram"
                className="w-full h-auto max-h-[500px] object-contain rounded"
              />
            </div>
          </div>

          {/* Path Interactive Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-emerald-400" />
                Detailed Path Walkthrough
              </h3>
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveFlow("write")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "write"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Write Path (URL Creation)
                </button>
                <button
                  onClick={() => setActiveFlow("read")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "read"
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Read Path (Redirection)
                </button>
              </div>
            </div>

            {activeFlow === "write" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Local RAM In-Memory TokenBuffer (~0ms)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    When a client calls <code className="text-emerald-300 font-mono text-xs">POST /api/urls</code>, the Express server pops a pre-generated Base-62 short code from its local in-process ring buffer. Key acquisition completes in local RAM with <strong>0 network roundtrips</strong>.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Background KGS Daemon &amp; Redis Key Pool
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A dedicated KGS background worker monitors the central Redis key pool (<code className="text-emerald-300 font-mono text-xs">key_pool:available</code>). When inventory dips below the low-watermark threshold, it automatically pre-generates fresh Base-62 codes.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Atomic Range Leasing (5,000 IDs/Batch)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The KGS daemon leases discrete numeric blocks of 5,000 IDs from an atomic MongoDB counter (<code className="text-emerald-300 font-mono text-xs">$inc: &#123; seq: 5000 &#125;</code>). This guarantees <strong>zero key collisions</strong> and completely avoids database lock contention.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Bloom Filter Registration &amp; Persistence
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The URL document is saved to MongoDB with an indexed unique shortCode, and the key's bit pattern is instantly set into the Redis Bloom Filter (<code className="text-emerald-300 font-mono text-xs">bloom:urls</code>) to authorize future gateway lookups.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Redis Bloom Filter Gateway Check (k=5)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Client calls <code className="text-sky-300 font-mono text-xs">GET /:shortCode</code>. The gateway hashes the code using 5 independent Kirsch-Mitzenmacher hash functions. If any bit is 0, the key is <strong>100% proven non-existent</strong> and rejected with an instant 404 (0 DB reads).
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Sub-Millisecond Redis RAM Cache Hit (~0.5ms)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    For probable matches, Express queries the Redis RAM cache (<code className="text-sky-300 font-mono text-xs">url:shortCode</code>). Active links are redirected with an HTTP 302 in <strong>~0.5 ms</strong> without touching the database.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Cold Miss Database Fallback &amp; Auto Write-Back
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    If the key is not in Redis cache (cold read or cache eviction), the query falls back to indexed MongoDB <code className="text-sky-300 font-mono text-xs">Url.findOne</code> and writes the record back to Redis with a TTL for subsequent traffic.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Negative Tombstone Caching for Expired Links
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    When an expired link is accessed, Express writes a 24-hour negative tombstone (<code className="text-sky-300 font-mono text-xs">&#123; isExpired: true &#125;</code>) to Redis. Subsequent expired requests are redirected to <code className="text-sky-300 font-mono text-xs">/expired</code> with 0 DB reads.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 3-Tier Resilient Failover Chain */}
          <div className="p-5 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-sky-950/30 rounded-xl border border-emerald-500/30">
            <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
              <ShieldCheck className="text-emerald-400" size={18} />
              3-Tier Resilient Key Acquisition Failover Chain
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              In high-availability production environments, single points of failure cause cascading outages. The API implements a resilient 3-tier key acquisition fallback:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-emerald-500/40 text-emerald-300 text-center flex-1">
                Tier 1: Local RAM Buffer (~0ms)
              </div>
              <ArrowRight className="hidden sm:block text-slate-600" size={16} />
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-sky-500/40 text-sky-300 text-center flex-1">
                Tier 2: Central Redis Key Pool
              </div>
              <ArrowRight className="hidden sm:block text-slate-600" size={16} />
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-amber-500/40 text-amber-300 text-center flex-1">
                Tier 3: Emergency MongoDB Lease
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 italic">
              If Redis crashes or suffers network partitioning, Express instances bypass Redis and lease discrete blocks directly from MongoDB into local RAM, guaranteeing 100% write availability with zero downtime.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: THE ENGINEERING CHALLENGE (URL SHORTENER) */}
      {activeTab === "challenge" && (
        <div className="space-y-6">
          <div className="p-6 bg-slate-800/40 border border-slate-700 rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="text-amber-400" size={22} />
              The Engineering Challenge: Why Simple Shorteners Fail
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {caseStudy.engineeringChallenge ||
                "Standard tutorial URL shorteners suffer from database lock contention on high-volume writes, hash collisions, and cache penetration vulnerabilities when spammed with random URLs. The goal was to build a distributed architecture handling millions of reads and writes with sub-millisecond response times and zero collisions."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-red-950/20 border border-red-500/20 rounded-xl space-y-3">
              <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider font-mono">
                Tutorial / Naive Architecture Trap
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Random String Generation (<code className="text-red-300 font-mono">Math.random()</code>):</strong> High collision probability under scale, requiring repetitive DB uniqueness checks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>DB Write Bottleneck:</strong> Every URL creation creates an immediate write-lock in the database, capping throughput.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Cache Penetration Vulnerability:</strong> Attackers spamming random codes bypass standard caches completely, exhausting DB connection pools.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-3">
              <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider font-mono">
                My Distributed Systems Solution
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>Atomic Numeric Range Leasing:</strong> Discrete block leases (5,000 IDs/batch) + Sqids Base-62 guarantee 100% collision-free uniqueness.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>In-Memory TokenBuffer:</strong> Eliminates Redis and DB write latency on the critical path (~0ms local RAM key serving).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>Probabilistic Bloom Filter (k=5):</strong> Drops &gt;99.9% of non-existent query floods at the gateway with 0 DB reads.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack Specs Table */}
          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <Cpu className="text-sky-400" size={16} /> Production Tech Stack Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Backend Engine</div>
                <div className="text-white font-semibold mt-0.5">Node.js + Express 5</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">In-Memory Store</div>
                <div className="text-white font-semibold mt-0.5">Redis (Cache, Bloom, Pool)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Persistence &amp; Lease</div>
                <div className="text-white font-semibold mt-0.5">MongoDB (Counter + Urls)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Encoding Algorithm</div>
                <div className="text-white font-semibold mt-0.5">Sqids (Bijective Base-62)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Frontend Client</div>
                <div className="text-white font-semibold mt-0.5">React 19 + TypeScript</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Analytics Engine</div>
                <div className="text-white font-semibold mt-0.5">Recharts + ua-parser-js</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Containerization</div>
                <div className="text-white font-semibold mt-0.5">Docker Compose (5-Tier)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Concurrency Stress Test</div>
                <div className="text-white font-semibold mt-0.5">300+ Concurrent Requests</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KEY TECHNICAL DECISIONS (URL SHORTENER) */}
      {activeTab === "decisions" && (
        <div className="space-y-4">
          <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl mb-4">
            <p className="text-xs text-emerald-300 font-mono">
              ENGINEERING REASONING • Why specific architectural trade-offs were chosen over standard alternatives.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-emerald-400">1.</span> Why Base-62 via Sqids over MD5 / SHA-256?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Truncating cryptographic hashes (e.g. taking the first 7 characters of MD5) creates severe hash collision vulnerability due to the <em>Birthday Paradox</em> as database size grows.
              </p>
              <p className="text-xs text-emerald-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> Bijective Base-62 encoding (Sqids) transforms monotonic 64-bit leased integers into compact strings (e.g. 100,000,001 → <code className="text-white">"kX7a"</code>). Every code is mathematically guaranteed to be 100% unique.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-sky-400">2.</span> Why Bloom Filter over standard Redis cache?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Standard caches only store entries that have already been queried or generated. If an attacker floods the gateway with millions of non-existent random short codes, every single request bypasses the cache and hits MongoDB directly (Cache Penetration DDoS).
              </p>
              <p className="text-xs text-sky-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> A Redis Bloom Filter with Kirsch-Mitzenmacher multi-hashing (k=5) intercepts incoming requests at the gateway, rejecting non-existent keys with 0 DB reads and &gt;99.9% accuracy.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-amber-400">3.</span> Why Local RAM TokenBuffer?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Even with Redis response times under 1ms, roundtrip TCP network latency and Redis connection pool contention add up under high concurrent write spikes (e.g. 5,000 write ops/sec).
              </p>
              <p className="text-xs text-amber-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> API servers maintain an in-process ring buffer (<code className="text-white">TokenBuffer</code>) in local Node.js memory. URLs acquire tokens in ~0 ms without making a single network call.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-purple-400">4.</span> Why 24-Hour Negative Tombstones?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                When campaigns end or time-sensitive links expire, viral traffic still continues to pound those URLs. Without tombstones, every single click queries MongoDB to verify the <code className="text-white">expiresAt</code> timestamp.
              </p>
              <p className="text-xs text-purple-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> The first expired access writes a negative tombstone (<code className="text-white">&#123; isExpired: true &#125;</code>) to Redis with a 24-hour TTL, redirecting subsequent traffic to <code className="text-white">/expired</code> with 0 DB hits.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
