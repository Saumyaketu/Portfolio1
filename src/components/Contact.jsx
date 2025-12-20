import { motion } from "framer-motion";

export default function Contact({ personal }) {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-emerald-400 font-mono">What's Next?</p>

        <h2 className="text-4xl text-white font-bold mb-4 mt-2">Get In Touch</h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          Feel free to reach out for opportunities or questions. I respond fast!
        </p>

        <motion.a
          href={`mailto:${personal.email}`}
          className="inline-block px-8 py-3 border border-emerald-400 rounded bg-emerald-400/10 hover:bg-emerald-400/30 text-emerald-400 hover:scale-110 font-mono text-sm"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
}
