import { ShieldCheck, Award, BadgeCheck, Factory } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description:
        "Golden Edge Engineering maintains international quality standards through ISO certified systems.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Compliance",
      description:
        "Strict adherence to safety standards and engineering protocols across all projects.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Assurance",
      description:
        "Commitment to delivering high-quality engineering solutions and project execution.",
    },
    {
      icon: Factory,
      title: "Industry Standards",
      description:
        "Projects executed in compliance with national and international engineering standards.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Certifications & Compliance
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {certs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50 p-7 rounded-lg shadow text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:border hover:border-yellow-200"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 transition duration-300 group-hover:bg-yellow-400 group-hover:text-white">
                    <Icon size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 transition duration-300 group-hover:text-yellow-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Accent */}
                <div className="mt-5 h-[2px] w-8 bg-yellow-400 mx-auto transition duration-300 group-hover:w-14"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
