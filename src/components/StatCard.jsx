export default function StatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <div className="bg-slate-800/50 p-4 rounded border border-slate-700 hover:border-emerald-500/30">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Icon className="text-emerald-400" size={20} />
        <span className="text-xl text-slate-400">{stat.label}</span>
        <span className="text-xl text-emerald-400">{stat.achievement}</span>
      </div>
      <div className="text-2xl font-bold text-white">{stat.value}</div>
      <div className="text-xs text-slate-500">{stat.sub}</div>
    </div>
  );
}
