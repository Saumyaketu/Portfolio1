import SectionTitle from "./SectionTitle";

export default function Education({ data }) {
  return (
    <section id="education" className="py-24">
      <SectionTitle>Education</SectionTitle>

      <div className="space-y-10">
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-emerald-400/20 transition-all"
          >
            <h3 className="text-xl text-white font-bold mb-2">{edu.degree}</h3>

            <p className="text-emerald-400 font-mono mb-2">
              {edu.school}
            </p>

            <p className="text-slate-400 text-sm mb-2">
              {edu.period}
            </p>

            <p className="text-slate-500 text-sm">
              {edu.grade}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
