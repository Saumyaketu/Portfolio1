export default function Contact({ personal }) {
  return (
    <section id="contact" className="py-24 text-center">
      <p className="text-emerald-400 font-mono">What's Next?</p>

      <h2 className="text-4xl text-white font-bold mb-4">Get In Touch</h2>

      <p className="text-slate-400 max-w-xl mx-auto mb-10">
        Feel free to reach out for opportunities or questions. I respond fast!
      </p>

      <a
        href={`mailto:${personal.email}`}
        className="px-8 py-3 border border-emerald-400 rounded text-emerald-400"
      >
        Say Hello
      </a>
    </section>
  );
}
