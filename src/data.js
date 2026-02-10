import { Trophy, Terminal, Code, Cpu, Monitor, Server, Database, GraduationCap } from "lucide-react";

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
      grade: "CGPA: 7.99/10"
    }
  ],

  stats: [
    { label: "Leetcode", achievement: "Knight", value: "1904", sub: "Max Rating", icon: Trophy },
    { label: "Codeforces", achievement: "Specialist", value: "1483", sub: "Max Rating", icon: Terminal },
    { label: "CodeChef", achievement: "3 Star", value: "1661", sub: "Max Rating", icon: Code },
    { label: "Problems Solved", value: "500+", sub: "Across Platforms", icon: Cpu },
    { label: "CGPA", value: "7.99", sub: "B.Tech, CSE", icon: GraduationCap },
  ],

  skills: [
    { category: "Languages", items: ["C++", "Python", "JavaScript (Node.js / Next.js)"], icon: Code },
    { category: "Frontend", items: ["Node.js", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS"], icon: Monitor },
    { category: "Backend", items: ["Node.js", "Express.js", "REST API Design", "JWT Auth"], icon: Server },
    { category: "Database & Cloud", items: ["MongoDB", "Mongoose", "Cloudinary"], icon: Database },
    { category: "Tools & Concepts", items: ["Git", "GitHub", "Google Colab", "DSA", "Computer Network", "Operating Sytem"], icon: Terminal },
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
      id: 2,
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
