import { Trophy, Terminal, Code, Cpu, Monitor, Server, Database, GraduationCap } from "lucide-react";
const CG = import.meta.env.VITE_CG;
const CODEFORCES = import.meta.env.VITE_CODEFORCES;
const LEETCODE = import.meta.env.VITE_LEETCODE;
const CODECHEF = import.meta.env.VITE_CODECHEF;

const videoPlatGlob = import.meta.glob('./assets/project3*.png', { eager: true, import: 'default' });
const videoPlatImages = Object.keys(videoPlatGlob).sort().map(key => videoPlatGlob[key]);

const URLShortGlob = import.meta.glob('./assets/project4*.{png,svg}', { eager: true, import: 'default' });
const URLShortImages = Object.keys(URLShortGlob).sort().map(key => URLShortGlob[key]);

const project1Glob = import.meta.glob('./assets/project1*.png', { eager: true, import: 'default' });
const project1Images = Object.keys(project1Glob).sort().map(key => project1Glob[key]);

const bookGlob = import.meta.glob('./assets/project2*.png', { eager: true, import: 'default' });
const bookImages = Object.keys(bookGlob).sort().map(key => bookGlob[key]);

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
    { category: "Frontend", items: ["React 19", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS"], icon: Monitor },
    { category: "Backend", items: ["Node.js / Express 5", "REST API", "JWT Auth", "WebSockets", "WebRTC", "Sqids"], icon: Server },
    { category: "Database & Cloud", items: ["MongoDB", "Redis", "Docker", "Bloom Filters", "Cloudinary"], icon: Database },
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
      title: "Full-Stack Video Platform",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io"],
      description: "Engineered a hybrid architecture (REST, WebSockets, WebRTC) for synchronized real-time video playback.",
      points: [
        "Built a context-aware UI and secure authentication using location-based logic and OTP routing.",
        "Implemented WebRTC P2P video calling with real-time screen sharing and session recording.",
        "Developed an automated moderation and real-time translation system supporting 100+ languages.",
        "Integrated Razorpay webhooks for premium access control, ensuring 100% transaction consistency."
      ],
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
    },
    {
      id: 4,
      topic: "AI & Machine Learning",
      title: "LLM Book Recommender",
      tech: ["Python", "LangChain", "ChromaDB", "Hugging-Face", "Gradio"],
      description: "A semantic book recommendation engine using Large Language Models and vector search.",
      points: [
        "Semantic search with natural language queries",
        "Emotion and category filtering",
        "Zero-shot classification for missing genres",
        "Interactive dashboard built with Gradio"
      ],
      images: bookImages,
      links: {
        live: "https://github.com/saumyaketu/book-recommender-llm",
        github: "https://github.com/saumyaketu/book-recommender-llm"
      }
    }
  ]
};

export default DATA;
