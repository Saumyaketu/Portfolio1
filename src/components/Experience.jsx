import SectionTitle from "./SectionTitle";

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24 max-w-3xl">
      <SectionTitle>Where I've Worked</SectionTitle>

      <div className="border-l-2 border-slate-800 pl-10 space-y-12">

        {data.experience.map((job) => (
          <div>

            <h3 className="text-xl text-white font-bold">
              {job.role} <span className="text-emerald-400">@{job.company}</span>
            </h3>

            <p className="text-sm text-slate-500 mb-3">{job.period}</p>

            <p className="italic text-slate-400 mb-4">{job.description}</p>

            <ul className="space-y-2">
              {job.achievements.map((point) => (
                <li className="before:content-['▹'] before:text-emerald-400 before:mr-2">
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}
