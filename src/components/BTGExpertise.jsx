import { Flame, Wind, Zap, Settings } from "lucide-react";

export default function BTGExpertise() {
  const expertise = [
    {
      title: "Boiler Systems",
      desc: "Expert erection and commissioning of industrial boilers for large-scale thermal power plants.",
      icon: Flame,
    },
    {
      title: "Turbine Installation",
      desc: "Precision turbine assembly and installation ensuring efficient energy generation.",
      icon: Wind,
    },
    {
      title: "Generator Systems",
      desc: "Installation and testing of high-capacity generators for reliable power output.",
      icon: Zap,
    },
    {
      title: "Auxiliary Systems",
      desc: "Supporting plant infrastructure including piping, pumps, and cooling systems.",
      icon: Settings,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Core Expertise in BTG Systems
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition"
            >
              <item.icon className="mx-auto text-orange-500 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
