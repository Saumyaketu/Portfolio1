import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl">
      <SectionTitle>About Me</SectionTitle>

      <motion.div
        className="text-slate-400 text-lg leading-relaxed space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Hello! I'm <span className="text-emerald-400">Saumyaketu</span>, an
          engineer who enjoys tackling hard problems across the entire software
          stack. My journey in computer science is driven by a dual passion: the
          theoretical depth of competitive programming and the practical
          challenges of building scalable, real-world systems.
        </p>

        <p>
          In the competitive programming arena, I thrive under pressure, having
          solved over 500 complex algorithmic challenges and securing a spot in
          the top 3% globally on LeetCode. This rigorous foundation allows me to
          write highly optimized code and design efficient data pipelines when
          building software.
        </p>

        <p>
          Professionally, my experience spans from developing hybrid real-time
          architectures using WebRTC and WebSockets to deploying distributed URL
          shorteners with Redis caching. I've also ventured into Data Science,
          engineering neural networks for healthcare predictions and
          constructing semantic recommendation engines using Large Language
          Models.
        </p>

        <p className="pt-4 font-mono text-sm text-emerald-400">
          Here are a few technologies I've been working with recently:
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-sm mt-4">
          {[
            "JavaScript (ES6+)",
            "TypeScript",
            "React & Next.js",
            "Node.js & Express",
            "C++",
            "Python",
            "MongoDB",
            "Redis",
            "Docker",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center before:content-['▹'] before:text-emerald-400 before:mr-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
