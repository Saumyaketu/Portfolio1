export default function Footer({ personal }) {
  return (
    <footer className="py-6 text-center text-xs text-slate-500">
      Built by {personal.name} — {new Date().getFullYear()}
    </footer>
  );
}
