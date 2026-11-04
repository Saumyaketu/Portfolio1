import React, { useState } from "react";
import {
  Workflow,
  Layers,
  Lock,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Info
} from "lucide-react";
import videoPlatArchDiagram from "../../assets/project3_architecture.svg";

export default function VideoCaseStudy({ activeTab, project }) {
  const [activeFlow, setActiveFlow] = useState("watch");
  const caseStudy = project?.caseStudy || {};

  return (
    <>
      {/* TAB 1: SYSTEM ARCHITECTURE (VIDEO PLATFORM) */}
      {activeTab === "architecture" && (
        <div className="space-y-8">
          {/* Visual Architecture Diagram Container */}
          <div className="bg-slate-950 rounded-xl p-4 md:p-6 border border-slate-800 relative group overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="text-emerald-400" size={18} />
                <h4 className="text-sm font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  Real-Time Multi-Tier Topology Flowchart
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Hybrid: REST + WebSockets + WebRTC P2P
              </span>
            </div>

            {/* SVG Display */}
            <div className="w-full rounded-lg bg-slate-900/90 border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
              <img
                src={videoPlatArchDiagram}
                alt="Real-Time Video Platform System Architecture"
                className="w-full h-auto max-h-[500px] object-contain rounded"
              />
            </div>
          </div>

          {/* Path Interactive Breakdown */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-emerald-400" />
                Sub-System Architectural Walkthrough
              </h3>
              <div className="flex flex-wrap bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveFlow("watch")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "watch"
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Watch Party Sync (WebSocket)
                </button>
                <button
                  onClick={() => setActiveFlow("webrtc")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "webrtc"
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  WebRTC Video Calling (P2P Mesh)
                </button>
                <button
                  onClick={() => setActiveFlow("media")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "media"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Zero-RAM Pipeline &amp; Billing
                </button>
              </div>
            </div>

            {activeFlow === "watch" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-sky-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Client Event Trigger &amp; High-Res Timestamps
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    When a participant triggers <code className="text-sky-300 font-mono text-xs">play</code>, <code className="text-sky-300 font-mono text-xs">pause</code>, or scrubs the custom gesture timeline, the player captures the floating-point playback timestamp and emits a room-scoped Socket.io event.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Signaling Server Fanout &amp; Room Validation
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The Node.js Socket.io server authenticates room membership and broadcasts the state update to all connected peers in that specific room channel with minimal propagation latency.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Drift Calculation Engine (&lt;250ms Tolerance)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Receiving peers calculate the time delta: <code className="text-emerald-300 font-mono text-xs">|Δt| = |t_local - t_remote|</code>. If drift is within 250ms, the micro-discrepancy is ignored, preventing jarring audio pops or frame freezing.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Synchronous Snapback &amp; State Recovery
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    If <code className="text-amber-300 font-mono text-xs">|Δt| &gt; 250ms</code> (due to packet loss or scrubbing), the client player executes a smooth seek to snap the video element directly to the master timecode, guaranteeing synchronization across diverse network speeds.
                  </p>
                </div>
              </div>
            )}

            {activeFlow === "webrtc" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-purple-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Socket.io Signaling Handshake (SDP &amp; ICE)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    When a user joins a watch party call, Socket.io acts as a lightweight signaling relay, facilitating the exchange of Session Description Protocol (SDP offers/answers) and interactive ICE candidates between peers.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-purple-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Direct Peer-to-Peer Media Channels (simple-peer)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Once ICE negotiation completes, encrypted audio and video tracks flow directly between clients over UDP. Server media relay is completely bypassed, eliminating cloud bandwidth egress costs.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-purple-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Live Screen Sharing &amp; User Pinning
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Participants can dynamically replace or augment their video track with screen captures via <code className="text-purple-300 font-mono text-xs">navigator.mediaDevices.getDisplayMedia</code>. The UI supports pinning speakers and auto-resizing video streams.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-purple-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    In-Browser Session Recording (MediaRecorder API)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Integrated the browser's native <code className="text-emerald-300 font-mono text-xs">MediaRecorder API</code> to bundle active audio and video tracks into WebM blobs directly on the client, enabling instant local downloads without heavy server rendering.
                  </p>
                </div>
              </div>
            )}

            {activeFlow === "media" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Zero-RAM Chunked Video Streaming Pipeline
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Bypassed Node.js heap memory limits by piping multipart video uploads from Multer directly into Cloudinary's storage engine. Video transcoding and adaptive delivery are handled without RAM bottlenecks.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Smart Community Moderation &amp; Geotagging
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Engineered an automated comment moderation engine with on-the-fly translation for 100+ languages, city-level IP geolocation tagging, input sanitization, and automatic comment purging when community dislike thresholds are reached.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Tiered Razorpay Monetization &amp; Nodemailer
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Enforced Bronze, Silver, and Gold subscription tiers with strict daily watch limits and download quotas. Webhook verification guarantees payment consistency, followed by automated HTML invoice generation via Nodemailer.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Offline-First PWA Architecture (@serwist/next)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Configured modern service workers with <code className="text-emerald-300 font-mono text-xs">@serwist/next</code> for caching video segments in client IndexedDB, making the web application fully installable and usable offline across mobile and desktop.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Context & Offline Callout */}
          <div className="p-5 bg-gradient-to-r from-sky-950/30 via-slate-900 to-purple-950/30 rounded-xl border border-sky-500/30">
            <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
              <Lock className="text-sky-400" size={18} />
              Context-Aware Adaptive Security &amp; Dynamic Theming
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              The platform actively inspects client IP, geolocation metadata, and connection security to dynamically adjust authentication workflows (shifting between seamless Google OAuth and mandatory Firebase Phone OTP) while adjusting player gestures and offline caching quotas based on network conditions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-sky-500/40 text-sky-300 text-center flex-1">
                1. Geo/IP Context Detection
              </div>
              <ArrowRight className="hidden sm:block text-slate-600" size={16} />
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-purple-500/40 text-purple-300 text-center flex-1">
                2. Adaptive Auth Routing (OAuth / OTP)
              </div>
              <ArrowRight className="hidden sm:block text-slate-600" size={16} />
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-emerald-500/40 text-emerald-300 text-center flex-1">
                3. Tier-Enforced Offline Caching
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THE ENGINEERING CHALLENGE (VIDEO PLATFORM) */}
      {activeTab === "challenge" && (
        <div className="space-y-6">
          <div className="p-6 bg-slate-800/40 border border-slate-700 rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="text-amber-400" size={22} />
              The Engineering Challenge: Why Simple Video Clones Fail
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {caseStudy.engineeringChallenge ||
                "Standard video streaming tutorial clones fail when scaled to real-time multi-user interaction: network latency causes out-of-sync watch parties, video relay servers incur unsustainable bandwidth costs, and server memory crashes during large video uploads. The goal was to architect a hybrid REST, WebSocket, and WebRTC mesh system delivering frame-accurate watch party sync, zero-latency P2P calling, and zero-RAM media streaming."}
            </p>
          </div>

          {/* Side-by-side Challenges and Solutions */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-red-950/20 border border-red-500/20 rounded-xl space-y-3">
              <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider font-mono">
                Tutorial / Naive Clone Bottlenecks
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Severe Playback Drift:</strong> Continuous seek events flood the player on every socket message, creating jarring audio clicks and visual freezing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Relayed Video Bandwidth Costs:</strong> Streaming multi-user video through Node.js backends exhausts server CPU and bandwidth.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Node.js RAM Crashes on Uploads:</strong> Buffering 200MB+ video files in memory causes sudden out-of-memory container crashes under concurrency.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-3">
              <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider font-mono">
                Our Production Engineering Solutions
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>&lt;250ms Drift Compensation:</strong> Tolerates micro-jitter (&lt;250ms) to ensure smooth playback, only snapping back when true divergence happens.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>Direct WebRTC Mesh (simple-peer):</strong> Media flows directly peer-to-peer over UDP with 0 server relay and zero latency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>Zero-RAM Multer Stream Piping:</strong> Pipes multipart video streams directly to Cloudinary storage, keeping Node.js memory footprint O(1).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Challenge Comparison Table from Prompt */}
          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-3">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <CheckCircle2 className="text-emerald-400" size={16} /> Engineering Challenges &amp; Solutions
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-700/80 rounded-lg overflow-hidden">
                <thead className="bg-slate-900/90 text-slate-300 font-mono uppercase text-[11px]">
                  <tr>
                    <th className="p-3 border-b border-slate-700">Challenge</th>
                    <th className="p-3 border-b border-slate-700">How You Solved It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/50">
                    <td className="p-3 font-semibold text-sky-400 font-mono">
                      Playback Drift in Watch Parties
                    </td>
                    <td className="p-3 leading-relaxed">
                      Network latency caused users to desync by 1–2 seconds. Handled by broadcasting timestamp payloads over Socket.io and forcing client player resync only when drift exceeded a 250ms threshold.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50">
                    <td className="p-3 font-semibold text-purple-400 font-mono">
                      WebRTC Signaling &amp; Disconnects
                    </td>
                    <td className="p-3 leading-relaxed">
                      Handled socket disconnects and ICE connection dropouts cleanly by maintaining peer state on the signaling server and updating the mesh topology dynamically.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50">
                    <td className="p-3 font-semibold text-emerald-400 font-mono">
                      Server Memory Bottlenecks on Large Uploads
                    </td>
                    <td className="p-3 leading-relaxed">
                      Bypassed server RAM caching by piping multipart streams directly from Multer to Cloudinary's storage engine.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tech Stack Specs Table */}
          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <Cpu className="text-sky-400" size={16} /> Production Tech Stack Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Frontend Client</div>
                <div className="text-white font-semibold mt-0.5">Next.js 16 (React 19)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Real-Time Sync</div>
                <div className="text-white font-semibold mt-0.5">Socket.io WebSockets</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Video Calling Mesh</div>
                <div className="text-white font-semibold mt-0.5">WebRTC (simple-peer)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Media Cloud Pipeline</div>
                <div className="text-white font-semibold mt-0.5">Multer + Cloudinary CDN</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Monetization</div>
                <div className="text-white font-semibold mt-0.5">Razorpay Gateway</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Adaptive Security</div>
                <div className="text-white font-semibold mt-0.5">Firebase OAuth &amp; Phone OTP</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Offline Architecture</div>
                <div className="text-white font-semibold mt-0.5">PWA (@serwist/next)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Database &amp; Storage</div>
                <div className="text-white font-semibold mt-0.5">MongoDB + Mongoose</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KEY TECHNICAL DECISIONS (VIDEO PLATFORM) */}
      {activeTab === "decisions" && (
        <div className="space-y-4">
          <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl mb-4">
            <p className="text-xs text-emerald-300 font-mono">
              ENGINEERING REASONING • Architectural trade-offs chosen over standard tutorial patterns.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-emerald-400">1.</span> Why Simple-Peer WebRTC Mesh over an SFU/MCU?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Selective Forwarding Units (SFUs like mediasoup or Janus) require complex media server orchestration, high server maintenance, and expensive egress bandwidth.
              </p>
              <p className="text-xs text-emerald-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> For casual watch parties (2-6 people), a decentralized WebRTC P2P mesh via simple-peer achieves true 0 ms server relay latency, complete end-to-end privacy, and zero server bandwidth billing.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-sky-400">2.</span> Why a 250ms Drift Threshold for Watch Parties?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Imperfections in client clocks and internet latency cause slight timing variations. If a client forced a video seek on every socket message, the user would experience continuous stuttering and audio distortion.
              </p>
              <p className="text-xs text-sky-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> Calculated drift tolerance: the player ignores differences &lt; 250ms for seamless playback, snapping back with a hard seek only when a legitimate desync threshold is breached.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-amber-400">3.</span> Why Direct Multer Stream Piping to Cloudinary?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Writing multi-hundred-megabyte video uploads into local Node.js memory buffers (<code className="text-white">multer.memoryStorage()</code>) easily crashes server containers during simultaneous user uploads.
              </p>
              <p className="text-xs text-amber-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> Multipart streams are piped directly from Multer into Cloudinary's upload stream, bypassing server RAM and disk write-locks with constant O(1) memory consumption.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/80 rounded-xl space-y-2">
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-purple-400">4.</span> Why Context-Aware Location &amp; IP Security?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rigid authentication causes high friction for regular users while still leaving systems vulnerable to foreign brute-force attacks.
              </p>
              <p className="text-xs text-purple-300/90 leading-relaxed font-mono">
                <strong>Decision:</strong> Adaptive security dynamically selects the verification method based on IP and geolocation metadata, using frictionless Google OAuth for verified regions and enforcing Firebase Phone OTP for foreign or untrusted sessions.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Recruiter / Testing Notice Box */}
      <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
          <Info size={15} /> TESTING &amp; EVALUATION GUIDE FOR RECRUITERS
        </div>
        <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-300">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="font-semibold text-amber-300 block mb-1">💳 Razorpay Test Mode:</span>
            Payments run in Razorpay Test Mode. You can test upgrading to Bronze, Silver, or Gold subscription tiers without real charges using test card details.
          </div>
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="font-semibold text-sky-300 block mb-1">👥 Real-Time Watch Party &amp; Video Call:</span>
            Open two browser windows side-by-side (or share a room link with a colleague) to observe synchronized video playback and the WebRTC P2P audio/video connection in real-time.
          </div>
        </div>
      </div>
    </>
  );
}
