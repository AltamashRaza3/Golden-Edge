import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Years of Experience", value: 50 },
  { label: "Engineers & Staff", value: 2500 },
  { label: "Projects Completed", value: 100 },
  { label: "Major Clients", value: 20 },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    setTimeout(() => setStart(true), 1500);

    return () => observer.disconnect();
  }, []);

  // Smooth animation
  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = duration / frameRate;

    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      setCounts(
        stats.map((stat) =>
          Math.min(stat.value, Math.floor((stat.value * frame) / totalFrames)),
        ),
      );

      if (frame >= totalFrames) clearInterval(interval);
    }, frameRate);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="bg-slate-900 text-white py-24 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_gold,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 backdrop-blur-sm"
          >
            {/* Divider line (desktop only) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-white/10"></div>
            )}

            {/* Number */}
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-3 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_gold]">
              {counts[index]}+
            </h2>

            {/* Label */}
            <p className="text-base md:text-lg text-gray-300 tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
