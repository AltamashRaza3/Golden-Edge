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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Commitment to Safety & Quality
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition duration-300"
            >
              <item.icon className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
