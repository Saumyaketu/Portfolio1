import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid md:grid-cols-3 gap-12">

        {/* Text */}
        <div className="md:col-span-2 text-slate-400 text-lg">
          <p className="mb-6">
            Hello! I'm <span className="text-emerald-400">Saumyaketu</span>, a passionate developer...
          </p>

          <p className="mb-6">
            Currently working on ML projects and scalable MERN systems.
          </p>

          <p className="mb-4">Technologies I use often:</p>

          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {["React", "Node.js", "MongoDB", "Python", "C++", "Tailwind"].map((item) => (
              <li key={item} className="flex items-center before:content-['▹'] before:text-emerald-400 before:mr-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Placeholder */}
        <div className="relative group">
          <div className="w-full aspect-square bg-slate-700 rounded flex justify-center items-center">
            Add Photo Here
          </div>
        </div>

      </div>
    </section>
  );
}
