import React, { useState } from "react";
import {
  Workflow,
  Layers,
  Sparkles,
  Bot,
  Brain,
  Search,
  Filter,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  Database,
  ArrowRight
} from "lucide-react";
import bookArchDiagram from "../../assets/project2_architecture.svg";

export default function BookRecommenderCaseStudy({ activeTab, project }) {
  const [activeFlow, setActiveFlow] = useState("agent");
  const caseStudy = project?.caseStudy || {};

  return (
    <>
      {/* TAB 1: SYSTEM ARCHITECTURE (AGENTIC BOOK RECOMMENDER) */}
      {activeTab === "architecture" && (
        <div className="space-y-8">
          {/* Visual Architecture Diagram Container */}
          <div className="bg-slate-950 rounded-xl p-4 md:p-6 border border-slate-800 relative group overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="text-emerald-400" size={18} />
                <h4 className="text-sm font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  Agentic &amp; Retrieval Architecture Flowchart
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                LangGraph • ChromaDB • Ollama Llama 3.2
              </span>
            </div>

            {/* SVG Display */}
            <div className="w-full rounded-lg bg-slate-900/90 border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
              <img
                src={bookArchDiagram}
                alt="Agentic Book Recommender Architecture Diagram"
                className="w-full h-auto max-h-[500px] object-contain rounded"
              />
            </div>
          </div>

          {/* Interactive Path Walkthrough */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-emerald-400" />
                Pipeline Deep Dive
              </h3>
              <div className="flex flex-wrap bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveFlow("agent")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "agent"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  1. ReAct Agent State Machine
                </button>
                <button
                  onClick={() => setActiveFlow("retrieval")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "retrieval"
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  2. Two-Stage Retrieval &amp; Rerank
                </button>
                <button
                  onClick={() => setActiveFlow("pipeline")}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                    activeFlow === "pipeline"
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  3. NLP Dataset Enrichment
                </button>
              </div>
            </div>

            {activeFlow === "agent" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-emerald-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Intent Parsing &amp; Thought Formulation
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    User inputs a high-level vibe or prompt (e.g., <em>"philosophical mystery with dark psychological undertones"</em>). 
                    The <strong>LangGraph ReAct agent</strong> parses semantic intent, determines whether the request requires fresh vector similarity search or modifying past recommendations, and enters the <strong>Thought</strong> phase.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-emerald-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Autonomous Tool Selection (Action)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The agent calls custom registered Python tools: <code className="text-emerald-300 font-mono text-xs">search_chroma_db(query)</code> for semantic retrieval, or <code className="text-emerald-300 font-mono text-xs">filter_by_emotion(tone)</code> when the user specifies emotional nuances like suspense, joy, or melancholy.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-emerald-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Multi-Turn Contextual Memory
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Unlike stateless chatbots, the agent maintains global conversation state. When users issue follow-up commands like <em>"Make them more suspenseful instead"</em>, the agent retains previous retrieved book candidates and applies emotion-weight re-sorting without restarting retrieval from scratch.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-emerald-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Local Generative Reasoning
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Using local <strong>Llama 3.2 (3B) via Ollama</strong>, the agent synthesizes human-like explanations for each recommendation, explicitly articulating <em>why</em> the plot, emotional tone, and literary themes align with the reader's request.
                  </p>
                </div>
              </div>
            )}

            {activeFlow === "retrieval" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-purple-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    Stage 1: Bi-Encoder Candidate Generation (k=40)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Queries are embedded into a 384-dimensional dense vector space using <code className="text-purple-300 font-mono text-xs">all-MiniLM-L6-v2</code>. ChromaDB performs fast approximate nearest neighbor (ANN) search across 7,000+ books to retrieve the top 40 candidate pool in milliseconds.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-purple-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Stage 2: Cross-Encoder Re-Ranking
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Candidate pairs <code className="text-purple-300 font-mono text-xs">[Query, Book Description]</code> are fed simultaneously into <code className="text-purple-300 font-mono text-xs">ms-marco-MiniLM-L-6-v2</code>. Full cross-attention between every query word and description token eliminates bi-encoder representation compression losses.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-purple-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    Emotion &amp; Sentiment Re-weighting
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    If an emotional filter is applied, the final ranking blends cross-encoder semantic scores with pre-computed DistilRoBERTa emotion probabilities (Joy, Sadness, Suspense/Fear, Surprise, Anger) to prioritize matching mood vibes.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-purple-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    Dynamic Gallery Rendering
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The top results are returned to the Gradio frontend, rendering responsive book cover art, genre chips, emotion score meters, and LLM-generated rationale in real time.
                  </p>
                </div>
              </div>
            )}

            {activeFlow === "pipeline" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      1
                    </span>
                    7,000+ Raw Book Dataset Cleaning
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Ingested raw book records containing descriptions, titles, authors, and ratings. Handled missing cover art, standardized text formatting, and parsed literary blurbs for NLP processing.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      2
                    </span>
                    Zero-Shot Genre Imputation (BART NLI)
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Over 20% of the raw catalog had missing or ambiguous genre metadata. Instead of discarding records, orchestrated <code className="text-sky-300 font-mono text-xs">facebook/bart-large-mnli</code> to predict genres with zero-shot natural language inference.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      3
                    </span>
                    DistilRoBERTa Emotion Profiling
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Passed every book synopsis through <code className="text-sky-300 font-mono text-xs">j-hartmann/emotion-english-distilroberta-base</code>, generating a 5-dimensional probability vector (Joy, Sadness, Suspense/Fear, Surprise, Anger) persisted directly into dataset metadata.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/40 border border-sky-500/20 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                    <span className="w-6 h-6 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-xs">
                      4
                    </span>
                    ChromaDB Vector Store Embedding
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Embedded composite semantic text representations (Title + Blurb + Categories + Emotion Profile) into persistent ChromaDB storage, ensuring sub-second inference with zero external network dependencies.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 2-Stage Retrieval vs Naive Vector Search Banner */}
          <div className="p-5 bg-gradient-to-r from-purple-950/30 via-slate-900 to-emerald-950/30 rounded-xl border border-purple-500/30">
            <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
              <Sparkles className="text-purple-400" size={18} />
              Why Two-Stage Retrieval Beats Standard Cosine Vector Search
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Standard bi-encoders compress queries and documents into independent fixed-length vectors, losing fine-grained cross-attention between words. My architecture pairs the speed of bi-encoders with the deep contextual accuracy of cross-encoders:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-purple-500/40 text-purple-300 text-center flex-1">
                Fast Pruning: ChromaDB ANN (Top-40)
              </div>
              <ArrowRight className="hidden sm:block text-slate-600" size={16} />
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-amber-500/40 text-amber-300 text-center flex-1">
                Cross-Encoder: Joint Attention Reranking
              </div>
              <ArrowRight className="hidden sm:block text-slate-600" size={16} />
              <div className="w-full sm:w-auto p-2.5 rounded bg-slate-800/90 border border-emerald-500/40 text-emerald-300 text-center flex-1">
                Emotion Filter &amp; Llama 3.2 Reasoning
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THE ENGINEERING CHALLENGE */}
      {activeTab === "challenge" && (
        <div className="space-y-6">
          <div className="p-6 bg-slate-800/40 border border-slate-700 rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="text-amber-400" size={22} />
              The Engineering Challenge: Beyond Naive API Wrappers
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {caseStudy.engineeringChallenge ||
                "Traditional book search engines rely heavily on rigid keyword matching (titles, authors) and fail to capture abstract vibes, plot themes, or emotional tones. Furthermore, standard vector search suffers from bi-encoder cross-attention loss and metadata sparsity across book catalogs. The goal was to engineer an autonomous conversational discovery engine that retrieves, re-ranks, and filters 7,000+ books with zero external API fees or data leakage."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-red-950/20 border border-red-500/20 rounded-xl space-y-3">
              <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider font-mono">
                Traditional Search &amp; Naive LLM Wrapper Traps
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Rigid Keyword Matching:</strong> Users searching for <em>"books that feel like quiet melancholy on a rainy day"</em> get 0 matches from SQL/text search.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Bi-Encoder Compression Loss:</strong> Single-pass cosine similarity misses nuanced sentence-level relationships between user queries and book blurbs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>Metadata Sparsity:</strong> Datasets commonly lack genre tags; naive pipelines discard incomplete books, crippling catalog breadth.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>
                    <strong>API Billing &amp; Privacy Leakage:</strong> Reliance on paid OpenAI endpoints incurs high operational costs and sends user reading preferences to cloud vendors.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-3">
              <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider font-mono">
                My Autonomous AI Engineering Solution
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>Two-Stage Reranking Pipeline:</strong> Combines ChromaDB dense vector candidate retrieval (k=40) with Cross-Encoder joint attention scoring for peak precision.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>LangGraph ReAct State Machine:</strong> Dynamic tool execution with persistent conversational state memory, effortlessly handling multi-turn follow-ups.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>Zero-Shot NLI &amp; Emotion Enriched:</strong> Inferred missing genres via BART-large-mnli and scored 5 emotional tones across 7,000+ books with DistilRoBERTa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    <strong>100% Local &amp; Privacy-First:</strong> Runs locally on Ollama (Llama 3.2 3B) and Hugging Face Transformers with $0 external API fees and complete data privacy.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Engineering Highlights Solved */}
          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl space-y-3">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <Brain className="text-emerald-400" size={16} /> Key Engineering Highlights &amp; Challenges Solved
            </h4>
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <div className="p-3 bg-slate-900/80 rounded border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-mono font-semibold">1. Metadata Sparsity</div>
                <div className="text-slate-300">
                  Rescued unclassified book records by orchestrating Zero-Shot NLI (<code className="text-emerald-300 font-mono text-[10px]">facebook/bart-large-mnli</code>) to deduce precise genre tags dynamically without human labeling.
                </div>
              </div>
              <div className="p-3 bg-slate-900/80 rounded border border-slate-800 space-y-1">
                <div className="text-purple-400 font-mono font-semibold">2. Retrieval Precision</div>
                <div className="text-slate-300">
                  Overcame vector bi-encoder cross-attention loss by piping candidate subsets through <code className="text-purple-300 font-mono text-[10px]">ms-marco-MiniLM-L-6-v2</code> cross-encoder for deep query-document interaction.
                </div>
              </div>
              <div className="p-3 bg-slate-900/80 rounded border border-slate-800 space-y-1">
                <div className="text-sky-400 font-mono font-semibold">3. State Persistence</div>
                <div className="text-slate-300">
                  Maintained conversational state across turns in Gradio, letting users say <em>"Give me something more suspenseful"</em> without restating their initial preferences.
                </div>
              </div>
            </div>
          </div>

          {/* Production Tech Stack Specs Table */}
          <div className="p-5 bg-slate-800/40 border border-slate-700/60 rounded-xl">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <Cpu className="text-sky-400" size={16} /> Production Tech Stack Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Agent Orchestrator</div>
                <div className="text-white font-semibold mt-0.5">LangGraph &amp; LangChain</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Local LLM Inference</div>
                <div className="text-white font-semibold mt-0.5">Llama 3.2 (3B) via Ollama</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Dense Vector Store</div>
                <div className="text-white font-semibold mt-0.5">ChromaDB (Local ANN)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Dense Embeddings</div>
                <div className="text-white font-semibold mt-0.5">all-MiniLM-L6-v2 (384d)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Re-Ranking Model</div>
                <div className="text-white font-semibold mt-0.5">ms-marco-MiniLM-L-6-v2</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Zero-Shot Classifier</div>
                <div className="text-white font-semibold mt-0.5">BART-large-mnli</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Emotion Classifier</div>
                <div className="text-white font-semibold mt-0.5">DistilRoBERTa (5 Tones)</div>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                <div className="text-slate-400 font-mono">Conversational UI</div>
                <div className="text-white font-semibold mt-0.5">Gradio Interactive Web</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KEY TECHNICAL DECISIONS */}
      {activeTab === "decisions" && (
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Decision 1 */}
            <div className="p-5 bg-slate-800/40 border border-slate-700 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                <Bot size={16} />
                Decision 1: LangGraph ReAct State Machine vs Monolithic Prompt
              </div>
              <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Alternative Considered:</strong> Passing the user query directly into a large prompt instructing the LLM to write out book recommendations from its internal pre-trained memory.
                </p>
                <p>
                  <strong>Why LangGraph ReAct:</strong> Pre-trained LLM memory suffers from severe hallucination (inventing books or false plots) and cannot search proprietary or custom catalogs. LangGraph frames recommendation as an autonomous state machine: the agent decomposes queries into clear retrieval actions (<code className="text-emerald-300 font-mono text-xs">search_chroma_db</code>, <code className="text-emerald-300 font-mono text-xs">filter_by_emotion</code>), reads the factual ground-truth observations, and only then formulates explanations.
                </p>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="p-5 bg-slate-800/40 border border-slate-700 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                <Search size={16} />
                Decision 2: 2-Stage Retrieval vs Single-Pass Cosine Similarity
              </div>
              <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Alternative Considered:</strong> Querying ChromaDB with cosine similarity and immediately returning the top 5 nearest vector neighbors.
                </p>
                <p>
                  <strong>Why Cross-Encoder Reranking:</strong> Bi-encoders compress query and document text into independent embedding vectors. This enables rapid $O(\log N)$ ANN indexing across 7,000+ books, but sacrifices word-level cross-attention. By taking the top 40 candidate pool and passing them through a Cross-Encoder (<code className="text-purple-300 font-mono text-xs">ms-marco-MiniLM-L-6-v2</code>), I compute full bidirectional attention between every query word and description token, massively boosting recommendation relevance.
                </p>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="p-5 bg-slate-800/40 border border-slate-700 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                <Database size={16} />
                Decision 3: Offline NLP Pre-Processing vs Runtime LLM Tagging
              </div>
              <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Alternative Considered:</strong> Asking Llama 3.2 to classify emotion scores and infer genres on-the-fly during user inference.
                </p>
                <p>
                  <strong>Why Pre-computed DistilRoBERTa &amp; BART:</strong> Classifying 7,000+ books at runtime would cause intolerable multi-minute latency. Pre-processing the catalog with <code className="text-sky-300 font-mono text-xs">facebook/bart-large-mnli</code> and <code className="text-sky-300 font-mono text-xs">j-hartmann/emotion-english-distilroberta-base</code> turns emotional and genre filtering into instantaneous mathematical matrix lookups at runtime.
                </p>
              </div>
            </div>

            {/* Decision 4 */}
            <div className="p-5 bg-slate-800/40 border border-slate-700 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-semibold">
                <ShieldCheck size={16} />
                Decision 4: Local Ollama Execution vs Cloud API Dependencies
              </div>
              <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Alternative Considered:</strong> Using proprietary cloud APIs (e.g., OpenAI GPT-4o-mini).
                </p>
                <p>
                  <strong>Why Local Llama 3.2:</strong> Running locally via Ollama guarantees <strong>100% data privacy</strong> (zero user reading logs leaked to third-party providers), <strong>$0 API costs</strong>, and uninterrupted offline functionality. The compact 3B parameter model delivers high reasoning speed on consumer hardware while seamlessly supporting structured function calling in LangGraph.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
