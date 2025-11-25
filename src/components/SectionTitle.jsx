export default function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-bold text-slate-100 mb-10">
      {children}
      <span className="hidden md:block h-px bg-slate-700 w-full mt-3"></span>
    </h2>
  );
}
