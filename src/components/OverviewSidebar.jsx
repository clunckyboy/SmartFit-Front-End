import DonutChart from "./DonutChart";

function StatCard({ label, value, unit, sub, right }) {
  return (
    <article className="bg-white hover:scale-105 hover:shadow-lg transition-all rounded-lg p-4 flex items-center justify-between shadow-sm">
      <div className="flex flex-col items-center flex-1">
        <p className="text-gray-400 text-sm font-medium">{label}</p>
        <p className="text-gray-800 text-3xl font-bold mt-1">
          {value} {unit && <span className="text-xl font-semibold text-gray-600">{unit}</span>}
        </p>
        <p className="text-green-500 text-sm font-semibold mt-0.5">{sub}</p>
      </div>
      {right && <div className="ml-2">{right}</div>}
    </article>
  );
}

export default function OverviewSidebar() {
  return (
    <aside className="w-full lg:w-72 shrink-0 overflow-hidden">
      <section aria-label="Overview" className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex flex-col gap-3 h-full overflow-y-auto scrollbar-hide">
        <h2 className="text-black text-center font-bold text-lg">Overview</h2>
        <StatCard label="Today Calories" value="1.420" unit="kcal" sub="320kcal remaining" />
        <StatCard label="BMI" value="24,1" sub="Normal" />
        <StatCard label="Today Activities" value="1 / 3" sub="Completed" right={<DonutChart completed={1} total={3} />} />
        <StatCard label="Streak" value="86" sub="Completed" right={<span className="text-5xl select-none" role="img" aria-label="fire streak">🔥</span>} />
      </section>
    </aside>
  );
}