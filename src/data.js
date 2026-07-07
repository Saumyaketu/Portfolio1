import { Trophy, Terminal, Code, Cpu, Monitor, Server, Database, GraduationCap } from "lucide-react";
const CG = import.meta.env.VITE_CG;
const CODEFORCES = import.meta.env.VITE_CODEFORCES;
const LEETCODE = import.meta.env.VITE_LEETCODE;
const CODECHEF = import.meta.env.VITE_CODECHEF;

const videoPlatGlob = import.meta.glob('./assets/project3*.png', { eager: true, import: 'default' });
const videoPlatImages = Object.keys(videoPlatGlob).sort().map(key => videoPlatGlob[key]);

const URLShortGlob = import.meta.glob('./assets/project4*.png', { eager: true, import: 'default' });
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
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS"], icon: Monitor },
    { category: "Backend", items: ["Node.js", "Express.js", "REST API", "JWT Auth", "WebSockets", "WebRTC"], icon: Server },
    { category: "Database & Cloud", items: ["MongoDB", "Redis", "Cloudinary", "Docker"], icon: Database },
    { category: "Core CS", items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"], icon: Terminal },
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
      title: "Distributed URL Shortener",
      tech: ["Node.js", "MongoDB", "Redis", "Docker", "JWT"],
      description: "A distributed URL shortening service with Redis caching to minimize database lookups and improve redirect latency.",
      points: [
        "Implemented click analytics tracking total visits, unique visitors, referrers, and geographic insights.",
        "Secured APIs using JWT authentication and rate limiting to prevent abuse and unauthorized access.",
        "Containerized the application using Docker for consistent deployment and environment isolation."
      ],
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
