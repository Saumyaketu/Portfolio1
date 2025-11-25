import SectionTitle from "./SectionTitle";

export default function Skills({ data }) {
  return (
    <section id="skills" className="py-24">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skills.map((group) => (
          <div className="bg-slate-800/30 p-6 rounded border border-slate-700">
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <group.icon size={20} />
              <h3 className="text-slate-400 text-xl">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span className="px-2 py-1 text-sm bg-slate-900 rounded border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
