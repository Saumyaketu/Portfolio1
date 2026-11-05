import { Trophy, Terminal, Code, Cpu, Monitor, Server, Database, GraduationCap, Bot } from "lucide-react";
const CG = import.meta.env.VITE_CG;
const CODEFORCES = import.meta.env.VITE_CODEFORCES;
const LEETCODE = import.meta.env.VITE_LEETCODE;
const CODECHEF = import.meta.env.VITE_CODECHEF;

const videoPlatGlob = import.meta.glob('./assets/project3*.{png,svg,gif}', { eager: true, import: 'default' });
// Prioritize live demo GIF first, then screenshots and architecture diagram
const preferredVideoOrder = [
  './assets/project3_architecture.svg',
  './assets/project3_demo.gif',
  './assets/project3a.png',
  './assets/project3b.png',
  './assets/project3c.png',
  './assets/project3d.png',
  './assets/project3e.png'
];
const videoPlatImages = preferredVideoOrder
  .filter(key => videoPlatGlob[key])
  .concat(Object.keys(videoPlatGlob).filter(key => !preferredVideoOrder.includes(key)))
  .map(key => videoPlatGlob[key]);

const URLShortGlob = import.meta.glob('./assets/project4*.{png,svg}', { eager: true, import: 'default' });
const URLShortImages = Object.keys(URLShortGlob).sort().map(key => URLShortGlob[key]);

const project1Glob = import.meta.glob('./assets/project1*.png', { eager: true, import: 'default' });
const project1Images = Object.keys(project1Glob).sort().map(key => project1Glob[key]);

const bookGlob = import.meta.glob('./assets/project2*.{png,svg,gif}', { eager: true, import: 'default' });
const preferredBookOrder = [
  './assets/project2_architecture.svg',
  './assets/project2_demo.gif',
  './assets/project2a.png',
  './assets/project2b.png',
  './assets/project2c.png',
  './assets/project2d.png',
  './assets/project2e.png'
];
const bookImages = preferredBookOrder
  .filter(key => bookGlob[key])
  .concat(Object.keys(bookGlob).filter(key => !preferredBookOrder.includes(key)))
  .map(key => bookGlob[key]);

const DATA = {
  personal: {
    name: "Saumyaketu Chand Gupta",
    title: "Full Stack Developer & Competitive Programmer",
    email: "saumyaketu1908@gmail.com",
    phone: "",
    location: "India",
    socials: {
      github: "https://github.com/Saumyaketu",
      linkedin: "https://linkedin.com/in/Saumyaketu",
    },
  },

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Indian Institute of Information Technology, Kota",
      period: "Aug 2023 - Jun 2027",
      grade: `CGPA: ${CG}/10`
    }
  ],

  stats: [
    { label: "Leetcode", achievement: "Knight", value: `${LEETCODE}`, sub: "Max Rating", icon: Trophy },
    { label: "Codeforces", achievement: "Specialist", value: `${CODEFORCES}`, sub: "Max Rating", icon: Terminal },
    { label: "CodeChef", achievement: "3 Star", value: `${CODECHEF}`, sub: "Max Rating", icon: Code },
    { label: "Problems Solved", value: "500+", sub: "Across Platforms", icon: Cpu },
    { label: "CGPA", value: `${CG}`, sub: "B.Tech, CSE", icon: GraduationCap },
  ],

  skills: [
    { category: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript"], icon: Code },
    { category: "Frontend", items: ["React 19", "Next.js 16", "Tailwind CSS", "PWA (@serwist)", "Vite", "HTML/CSS"], icon: Monitor },
    { category: "Backend & Real-Time", items: ["Node.js / Express 5", "WebSockets (Socket.io)", "WebRTC (simple-peer)", "REST API", "JWT Auth", "Sqids"], icon: Server },
    { category: "AI & NLP Systems", items: ["LangGraph", "LangChain", "ChromaDB", "Llama 3.2 (Ollama)", "Cross-Encoders", "Hugging Face", "Sentence-Transformers"], icon: Bot },
    { category: "Database & Cloud", items: ["MongoDB", "Redis", "Cloudinary", "Firebase", "Docker Compose", "Bloom Filters"], icon: Database },
    { category: "Core CS", items: ["Distributed Systems", "Data Structures & Algorithms", "System Design", "Operating Systems", "Computer Networks", "DBMS"], icon: Terminal },
  ],

  experience: [
    {
      id: 1,
      role: "Data Science Intern",
      company: "Personifwy",
      period: "Jul 2025 - Aug 2025",
      description: "Developed ANN model for heart failure mortality prediction.",
      achievements: [
        "Achieved 85% accuracy using TensorFlow/Keras",
        "Used class weighting to solve class imbalance",
        "Used Dropout + EarlyStopping",
        "Benchmarked against SVM"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      topic: "Full Stack / Real-Time Systems",
      title: "YouTube Clone & Synchronized Watch Party Platform",
      tagline: "A full-stack video streaming and real-time collaborative platform featuring WebRTC peer-to-peer video calls, WebSocket-synchronized watch parties, and tiered Razorpay monetization.",
      tech: [
        "Next.js 16 (React 19)",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "WebRTC",
        "Cloudinary",
        "Firebase",
        "Razorpay",
        "PWA (@serwist)",
        "Tailwind CSS"
      ],
      metrics: [
        { label: "Playback Drift", value: "< 250 ms", detail: "Socket.io Drift Compensator" },
        { label: "P2P Video Calling", value: "0 ms Relay", detail: "WebRTC Direct Mesh (simple-peer)" },
        { label: "Media Pipeline", value: "0 RAM Stash", detail: "Multer Chunked Stream to Cloudinary" },
        { label: "Monetization", value: "Razorpay", detail: "Tiered Access & Nodemailer Invoices" }
      ],
      description: "A production-grade video streaming and real-time collaborative watch party platform architected with a hybrid REST, WebSocket, and WebRTC mesh topology for zero-latency communication and adaptive security.",
      points: [
        "Peer-to-Peer Video Calling: Architected a zero-latency, multi-user video calling system using WebRTC (simple-peer) with custom Socket.io signaling, featuring user pinning, video/audio toggles, and live screen sharing.",
        "Synchronized Watch Parties: Built a low-latency watch party engine using WebSockets, synchronizing play, pause, and seek states across geographically dispersed users with drift compensation.",
        "In-Browser Session Recording: Integrated native MediaRecorder API to enable client-side screen recording and local downloads without server rendering overhead.",
        "Cloud Media Pipeline: Implemented chunked media uploads via Multer and automated stream optimization using Cloudinary, preventing server memory bottlenecks when handling large video files.",
        "RESTful Architecture: Designed scalable Express.js & MongoDB (Mongoose) APIs handling user engagement (likes, views, playlists, watch history, and 'watch later' queues).",
        "Smart Community Moderation: Engineered an automated comment moderation system with multilingual translation, city-level geotagging, input sanitization, and automatic deletion triggered by dislike thresholds.",
        "Tiered Subscription System: Integrated Razorpay Payment Gateway for Bronze, Silver, and Gold tiers, enforcing tier-based watch limits, daily download quotas, and automated HTML invoice generation via Nodemailer.",
        "Context-Aware Security: Implemented adaptive authentication (Google OAuth & Phone OTP via Firebase) that dynamically shifts verification methods based on geolocation and IP metadata.",
        "Offline-First PWA: Configured offline caching and background sync with @serwist/next, allowing users to save videos locally and install the application natively across mobile and desktop.",
        "Custom Gesture Navigation: Developed a mobile-friendly gesture controller handling single-tap (play/pause), double-tap (10s seek), and triple-tap (next video / comments modal) events."
      ],
      caseStudy: {
        type: "video",
        engineeringChallenge: "Standard video streaming tutorial clones fail when scaled to real-time multi-user interaction: network latency causes out-of-sync watch parties, video relay servers incur unsustainable bandwidth costs, and server memory crashes during large video uploads. The goal was to architect a hybrid REST, WebSocket, and WebRTC mesh system delivering frame-accurate watch party sync (<250ms drift), zero-latency P2P calling, and zero-RAM media streaming."
      },
      testModeNotice: "Razorpay is configured in Test Mode so recruiters can test Bronze, Silver, and Gold subscriptions. Open two browser windows side-by-side to test real-time video synchronization and WebRTC calls.",
      images: videoPlatImages,
      links: {
        live: "https://youtube-clone-saumyaketu.vercel.app/",
        github: "https://github.com/Saumyaketu/Youtube-clone"
      }
    },
    {
      id: 2,
      topic: "Backend & Distributed Systems",
      title: "Distributed URL Shortener & High-Throughput Redirection Engine",
      tagline: "A distributed URL shortener engineered for high-concurrency environments, featuring pre-generated Base-62 token buffering, sub-millisecond Redis caching, and Bloom filter DDoS protection.",
      tech: [
        "Node.js / Express 5",
        "Redis",
        "MongoDB",
        "Docker",
        "Sqids (Base-62)",
        "React 19 / TypeScript",
        "Tailwind CSS",
        "Recharts"
      ],
      metrics: [
        { label: "Key Acquisition", value: "~0 ms", detail: "In-Memory TokenBuffer" },
        { label: "Redirection Latency", value: "~0.5 ms", detail: "Redis RAM Caching" },
        { label: "Key Collisions", value: "0%", detail: "Atomic Range Block Leasing" },
        { label: "DDoS Defense", value: ">99.9%", detail: "Redis Bloom Filter (k=5)" }
      ],
      description: "An enterprise-grade, distributed systems engineering project designed to eliminate write-lock contention and key collisions while maintaining sub-millisecond redirection at scale.",
      points: [
        "Distributed Key Generation Service (KGS): Designed an asynchronous background worker that pre-generates unique Base-62 short codes using an atomic range-leasing counter in MongoDB (5,000 IDs/batch), guaranteeing zero key collisions and eliminating database write-lock contention across distributed instances.",
        "In-Memory Token Buffering (~0ms fast path): Implemented an in-process ring buffer (TokenBuffer) within Express API instances, cutting key acquisition latency to ~0 ms by serving write requests directly from local RAM with zero network roundtrips.",
        "Sub-Millisecond Read Path (~0.5ms): Optimized redirection latency down to ~0.5 ms using Redis RAM caching, combined with an automated write-back strategy for cold database misses.",
        "Negative Tombstone Caching: Mitigated repeated database lookups for expired links by writing 24-hour negative tombstones to Redis ({\"isExpired\": true}), redirecting expired traffic with 0 database reads.",
        "Probabilistic DDoS & Cache Penetration Defense: Implemented a Redis Bloom Filter with Kirsch-Mitzenmacher multi-hashing (k=5), instantly dropping non-existent or malicious short-code requests at the gateway with 0 database hits and >99.9% rejection efficiency.",
        "3-Tier Resilient Failover Chain: Built a fault-tolerant key acquisition fallback (Local RAM Buffer → Centralized Redis Pool → Emergency MongoDB Range Lease), ensuring 100% service uptime even if Redis crashes or network partitions occur.",
        "Full-Stack Analytics & Containerization: Built an asynchronous visit tracker categorizing device types (ua-parser-js), referrers, and daily clicks with a React 19 / Recharts dashboard; containerized the entire 5-tier microservice architecture using Docker Compose."
      ],
      caseStudy: {
        engineeringChallenge: "Standard tutorial URL shorteners suffer from database lock contention on high-volume writes, hash collisions, and cache penetration vulnerabilities when spammed with random URLs. The goal was to build a distributed architecture handling millions of reads and writes with sub-millisecond response times, zero collisions, and resilient failover."
      },
      images: URLShortImages,
      links: {
        live: "https://saumyaketu-distributed-url-shortene.vercel.app/",
        github: "https://github.com/Saumyaketu/Distributed-URL-Shortener"
      }
    },
    {
      id: 3,
      topic: "Agentic AI / Semantic Retrieval",
      title: "Agentic Book Recommender & Semantic Discovery Engine",
      tagline: "Autonomous ReAct agent powered by LangGraph, ChromaDB, and local Llama 3.2 for conversational, emotion-aware book recommendations with cross-encoder re-ranking.",
      tech: [
        "Python",
        "LangGraph",
        "LangChain",
        "Llama 3.2 (3B)",
        "Ollama",
        "ChromaDB",
        "Hugging Face Transformers",
        "Sentence-Transformers",
        "Cross-Encoder",
        "Gradio",
        "Pandas"
      ],
      metrics: [
        { label: "Retrieval Architecture", value: "2-Stage Rerank", detail: "ChromaDB + Cross-Encoder" },
        { label: "Agent State Machine", value: "ReAct Graph", detail: "LangGraph + Llama 3.2" },
        { label: "Catalog Enriched", value: "7,000+ Books", detail: "Zero-Shot NLI & DistilRoBERTa" },
        { label: "Inference Cost", value: "$0 / 100% Local", detail: "Zero API Fees & Zero Leakage" }
      ],
      description: "An end-to-end AI/NLP engineering project and autonomous ReAct agent that replaces rigid keyword matching with deep semantic discovery, multi-stage retrieval, emotion analysis, and multi-turn conversational reasoning.",
      points: [
        "Autonomous Agentic Workflow (LangGraph & ReAct): Engineered a multi-turn ReAct (Reasoning + Acting) state machine using LangGraph and a local Llama 3.2 (3B) model via Ollama to autonomously parse user intent, decide tool execution, and deliver reasoned recommendations with follow-up context memory.",
        "Two-Stage Semantic Retrieval & Re-ranking: Implemented high-precision information retrieval pairing ChromaDB vector search (all-MiniLM-L6-v2 dense embeddings) with a Cross-Encoder re-ranking stage (ms-marco-MiniLM-L-6-v2) to boost semantic relevance over standard cosine distance.",
        "Automated NLP Data Pipeline: Enriched a raw 7,000+ book dataset by orchestrating Zero-Shot Classification (facebook/bart-large-mnli) to infer missing genre metadata and DistilRoBERTa Emotion Analysis (j-hartmann/emotion-english-distilroberta-base) to score 5 distinct emotional tones (Joy, Sadness, Suspense/Fear, Surprise, Anger).",
        "Multi-Turn Conversational UX: Built an interactive web dashboard in Gradio featuring dynamic image galleries, real-time agent reasoning explanations, and conversational state retention (e.g., seamlessly handling follow-ups like 'Make them more suspenseful instead').",
        "Privacy-First & Local Execution: Designed the entire inference and embedding pipeline to run locally with zero external API fees or data leakage using Ollama and Hugging Face Transformers."
      ],
      caseStudy: {
        type: "book",
        engineeringChallenge: "Traditional book search engines rely heavily on rigid keyword matching (titles, authors) and fail to capture abstract vibes, plot themes, or emotional tones. Furthermore, standard vector search suffers from bi-encoder cross-attention loss and metadata sparsity across book catalogs. The goal was to engineer an autonomous conversational discovery engine that retrieves, re-ranks, and filters 7,000+ books with zero external API fees or data leakage."
      },
      testModeNotice: "Runs 100% locally with zero external API costs. Click 'System Architecture ↗' for the complete ReAct state machine deep dive, or watch the animated demo GIF in the gallery.",
      images: bookImages,
      links: {
        live: "https://github.com/saumyaketu/book-recommender-llm",
        github: "https://github.com/saumyaketu/book-recommender-llm"
      }
    },
    {
      id: 4,
      topic: "Full Stack",
      title: "Notes App",
      tech: ["MERN", "JWT", "Cloudinary", "Vite", "Tailwind"],
      description: "A notes application with Markdown editing and drawing support.",
      points: [
        "9 REST APIs (CRUD + Auth)",
        "Cloudinary image uploads",
        "JWT-based login system",
        "Drawing editor"
      ],
      images: project1Images,
      links: {
        live: "https://saumyaketu-notes-app.onrender.com/",
        github: "https://github.com/Saumyaketu/Notes-App"
      }
    }
  ]
};

export default DATA;
