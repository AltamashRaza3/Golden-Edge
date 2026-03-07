import { useEffect, useState } from "react";

const stats = [
  { label: "Years of Experience", value: 50 },
  { label: "Engineers & Staff", value: 2500 },
  { label: "Projects Completed", value: 100 },
  { label: "Major Clients", value: 20 },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < stats[i].value
            ? count + Math.ceil(stats[i].value / 40)
            : stats[i].value,
        ),
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-yellow-400 mb-2">
              {counts[index]}+
            </h2>

            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
