import { ShieldCheck, Award, BadgeCheck, Factory } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      icon: <Award size={40} className="text-yellow-500" />,
      title: "ISO 9001:2015 Certified",
      description:
        "Golden Edge Engineering maintains international quality standards through ISO certified systems.",
    },
    {
      icon: <ShieldCheck size={40} className="text-yellow-500" />,
      title: "Safety Compliance",
      description:
        "Strict adherence to safety standards and engineering protocols across all projects.",
    },
    {
      icon: <BadgeCheck size={40} className="text-yellow-500" />,
      title: "Quality Assurance",
      description:
        "Commitment to delivering high-quality engineering solutions and project execution.",
    },
    {
      icon: <Factory size={40} className="text-yellow-500" />,
      title: "Industry Standards",
      description:
        "Projects executed in compliance with national and international engineering standards.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certifications & Compliance
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {certs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
