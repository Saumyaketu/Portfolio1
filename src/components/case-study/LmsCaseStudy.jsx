import React, { useState } from "react";
import {
  Workflow,
  Layers,
  ShieldCheck,
  ArrowRight,
  AlertTriangle,
  Cpu,
  FileCheck,
  Users,
  CreditCard,
  Send,
  Database,
  CheckCircle2,
  Lock,
  Sparkles
} from "lucide-react";
import lmsArchDiagram from "../../assets/project5_architecture.svg";

export default function LmsCaseStudy({ activeTab, project }) {
  const [activeFlow, setActiveFlow] = useState("borrower");
  const caseStudy = project?.caseStudy || {};

  return (
    <>
      {/* TAB 1: SYSTEM ARCHITECTURE (LMS) */}
      {activeTab === "architecture" && (
        <div className="space-y-8">
          {/* Visual Architecture Diagram Container */}
          <div className="bg-slate-950 rounded-xl p-4 md:p-6 border border-slate-800 relative group overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="text-sky-400" size={18} />
                <h4 className="text-sm font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  Full-Stack Lending Architecture &amp; RBAC Operations Flow
                </h4>
              </div>
              <span className="text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2.5 py-1 rounded">
                Next.js 14 • Node.js • MongoDB Atlas • RBAC
              </span>
            </div>

            {/* SVG Display */}
            <div className="w-full rounded-lg bg-slate-900/90 border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
              <img
                src={lmsArchDiagram}
                alt="Loan Management System Architecture"
                className="w-full h-auto max-h-[550px] object-contain rounded"
              />
            </div>
          </div>

          {/* Interactive Flow Breakdown */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-sky-400" />
                Subsystem Deep-Dive
              </h3>
              <div className="flex flex-wrap bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveFlow("borrower")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "borrower"
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Borrower &amp; BRE Engine
                </button>
                <button
                  onClick={() => setActiveFlow("rbac")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "rbac"
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  4-Tier RBAC Modules
                </button>
                <button
                  onClick={() => setActiveFlow("lifecycle")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "lifecycle"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Lifecycle State Machine
                </button>
              </div>
            </div>

            {/* Subsystem 1: Borrower & BRE Engine */}
            {activeFlow === "borrower" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Server-Side BRE Rule Engine (&lt; 15ms)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Decoupled business rule engine validates borrower eligibility against RBI lending norms: Indian PAN regex (<code className="text-sky-300 font-mono text-xs">^[A-Z]{"{5}"}[0-9]{"{4}"}[A-Z]{"{1}"}$</code>), age restrictions (23 to 50 years old), minimum monthly net income (&ge; ₹25,000), and employment mode (instant rejection on Unemployed).
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Zero-RAM Cloud Document Pipeline
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Borrower salary slips (PDF, PNG, JPG up to 5MB) are streamed directly from Multer memory buffers to Cloudinary. No sensitive financial documents are persisted on server disks, eliminating local disk fill vulnerabilities and IO contention.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Real-Time Simple Interest Math Engine
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Dynamic loan configurator with dual sliders (₹50k to ₹500k, 30 to 365 days). Computes daily accrued simple interest <code className="text-amber-300 font-mono text-xs">SI = (P × 12 × T) / 36500</code> and total repayment liability synchronously with zero client lag.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Personal Borrower Dashboard Ledger
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Applicants track their loan status in real-time with an interactive ledger showcasing applied loans, sanctioned terms, disbursed capital, and automated payment receipts upon collection.
                  </p>
                </div>
              </div>
            )}

            {/* Subsystem 2: 4-Tier RBAC Modules */}
            {activeFlow === "rbac" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sky-400 font-mono text-sm font-semibold flex items-center gap-2">
                      <Users size={16} /> 1. Sales Module
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Sales &amp; Admin
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Monitors registered prospective borrowers who haven't yet submitted applications. Provides pre-application pipeline visibility, contact details, and applicant conversion tracking.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-mono text-sm font-semibold flex items-center gap-2">
                      <FileCheck size={16} /> 2. Sanction Module
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Sanction &amp; Admin
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Underwriting cockpit for inspecting borrower income documents, BRE validation scores, and applicant details. Enables 1-click Approval or Rejection with mandatory audit trail reasons (<code className="text-amber-300 font-mono text-xs">APPLIED &rarr; SANCTIONED / REJECTED</code>).
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-mono text-sm font-semibold flex items-center gap-2">
                      <Send size={16} /> 3. Disbursement Module
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Disbursement &amp; Admin
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Authorizes capital disbursement to borrower accounts. Enforces strict state validation preventing disbursement of non-sanctioned applications and initiates the repayment tenure countdown (<code className="text-emerald-300 font-mono text-xs">SANCTIONED &rarr; DISBURSED</code>).
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-mono text-sm font-semibold flex items-center gap-2">
                      <CreditCard size={16} /> 4. Collection Module
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Collection &amp; Admin
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Handles borrower repayments with duplicate UTR transaction checking to prevent fraud. Deducts collected amounts from outstanding balances and automatically closes fully settled loans (<code className="text-purple-300 font-mono text-xs">DISBURSED &rarr; CLOSED</code>).
                  </p>
                </div>
              </div>
            )}

            {/* Subsystem 3: Lifecycle State Machine */}
            {activeFlow === "lifecycle" && (
              <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                  <CheckCircle2 size={16} />
                  Deterministic Finite State Machine (FSM)
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Lending regulations require strict non-skippable workflow stages. The LMS architecture guarantees that every loan progresses through deterministic transitions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-sky-800/50">
                    <div className="text-xs font-mono text-sky-400 font-bold mb-1">STAGE 1: APPLIED</div>
                    <p className="text-xs text-slate-400">Created upon Step 4 loan configuration dispatch with BRE pass flag.</p>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-amber-800/50">
                    <div className="text-xs font-mono text-amber-400 font-bold mb-1">STAGE 2: SANCTIONED</div>
                    <p className="text-xs text-slate-400">Approved by Sanction executive after salary slip and PAN review.</p>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-emerald-800/50">
                    <div className="text-xs font-mono text-emerald-400 font-bold mb-1">STAGE 3: DISBURSED</div>
                    <p className="text-xs text-slate-400">Funds transferred by Disbursement desk; repayment timer active.</p>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-purple-800/50">
                    <div className="text-xs font-mono text-purple-400 font-bold mb-1">STAGE 4: CLOSED</div>
                    <p className="text-xs text-slate-400">Balance hits ₹0 via UTR collection reconciliation; audit finalized.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: THE ENGINEERING CHALLENGE */}
      {activeTab === "challenge" && (
        <div className="space-y-6">
          <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="text-amber-400" size={18} />
              The Core Problem
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {caseStudy.engineeringChallenge ||
                "Standard tutorial CRUD applications fail catastrophically in financial lending workflows. Naive implementations allow borrowers to bypass eligibility criteria via client-side payload tampering, permit stage-skipping (disbursing loans without underwriter sanctioning), lack transaction idempotency for repayment UTRs, and fail to isolate operational roles—allowing unauthorized staff to view confidential financial slips or trigger fund disbursements."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Tamper-Proof Business Rule Engine (BRE)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Client form checks are purely cosmetic. A malicious applicant can easily modify DOM input constraints or spoof API payloads. The challenge was building an isolated, server-side rule engine that independently calculates age from DOB, validates strict Indian PAN regex, enforces income thresholds, and halts ineligible requests before database touch.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Guarded Lifecycle State Machine &amp; Idempotency
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Financial loans must follow an irreversible state progression. Attempting to disburse an 'APPLIED' loan or approving an already 'REJECTED' loan violates regulatory compliance. The architecture enforces database-level state validation and unique UTR indexing to eliminate double-crediting or duplicate payment recording.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Strict Multi-Tier RBAC Isolation
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A single token compromise or missing permission check could grant a Sales agent the power to disburse capital or let a borrower inspect other users' credit files. The challenge required dual-layer enforcement: frontend dynamic routing plus strict server route middleware returning <code className="text-purple-300 font-mono text-xs">403 Forbidden</code> on unauthorized operations.
              </p>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Zero-Friction Evaluator Testing Matrix
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-role enterprise platforms are notoriously difficult for interviewers and evaluators to test because validating RBAC boundaries requires repeatedly logging out, clearing cookies, and logging into 6 different accounts. The platform solves this by embedding an instant 1-click Evaluator Matrix.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KEY TECHNICAL DECISIONS ("THE WHY") */}
      {activeTab === "decisions" && (
        <div className="space-y-4">
          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="text-sky-400 font-mono">01.</span> Decoupled Server-Side Business Rule Engine
              </h4>
              <span className="text-xs font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800">
                Architecture Decision
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why not embed BRE checks inside route controllers?</strong> Decoupling the rule engine into a standalone <code className="text-sky-300 font-mono text-xs">breEngine.ts</code> service enables centralized rule configuration via environment variables (<code className="text-slate-400 font-mono text-xs">BRE_MIN_AGE</code>, <code className="text-slate-400 font-mono text-xs">BRE_MIN_SALARY</code>), allows unit testing of complex credit underwriting rules without mocking HTTP requests, and permits reusing the engine for batch underwriting jobs.
            </p>
          </div>

          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="text-purple-400 font-mono">02.</span> Dual-Layer Role-Based Access Control (RBAC)
              </h4>
              <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800">
                Security Decision
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why enforce RBAC on both client and server?</strong> Client-side guards (Next.js conditional rendering) provide a clean, non-confusing user experience by hiding executive modules from borrowers. Server-side middleware (<code className="text-purple-300 font-mono text-xs">authorizeRoles(...)</code>) decodes JWT claims and acts as the true zero-trust boundary, ensuring unauthorized API calls directly return <code className="text-rose-400 font-mono text-xs">403 Forbidden</code> even if an attacker circumvents the UI.
            </p>
          </div>

          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="text-emerald-400 font-mono">03.</span> Direct Stream Upload to Cloudinary via Multer
              </h4>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                Storage Decision
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why not save uploaded salary slips to the local backend filesystem?</strong> Local file storage introduces high security risks (unrestricted file execution, sensitive PDF exposure) and causes disk fill issues when scaling horizontally across containers. By utilizing Multer memory buffers piped into Cloudinary CDN with authenticated access URLs, files are securely stored off-cluster with instant thumbnail previewing.
            </p>
          </div>

          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="text-amber-400 font-mono">04.</span> Transactional Repayment Reconciliation &amp; Unique UTR Tracking
              </h4>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                Data Integrity Decision
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why require unique UTR validation on collections?</strong> Unique Transaction Reference (UTR) numbers identify Indian banking NEFT/RTGS/UPI transfers. Storing UTRs with a unique database index guarantees idempotency—preventing accidental double-entry by collection agents and ensuring that borrower balances reflect exact ledger accounting.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
