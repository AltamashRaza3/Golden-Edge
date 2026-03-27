import { ShieldCheck, Award, HardHat } from "lucide-react";

export default function SafetyQuality() {
  const items = [
    {
      title: "Safety First",
      desc: "Strict adherence to international safety standards across all project sites.",
      icon: HardHat,
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous inspection and testing procedures ensuring world-class engineering execution.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Processes",
      desc: "ISO certified processes guaranteeing reliability and compliance.",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-tight">
          Commitment to Safety & Quality
        </h2>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group text-center p-7 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:border-yellow-200"
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-white">
                    <Icon size={30} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold mb-2 transition duration-300 group-hover:text-yellow-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent */}
                <div className="mt-5 h-[2px] w-8 bg-yellow-400 mx-auto transition-all duration-300 group-hover:w-14"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
