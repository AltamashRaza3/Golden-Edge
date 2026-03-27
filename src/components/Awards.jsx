import { Trophy, Newspaper, Factory } from "lucide-react";
import awardsImage from "../assets/images/awards.jpg";

export default function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: "660 MW Boiler Project Execution",
      description:
        "First Indian subcontracting company to execute boiler work for a 660 MW thermal power plant.",
    },
    {
      icon: Newspaper,
      title: "Times of India Recognition",
      description:
        "Achievement featured in The Times of India on 7 August 2003 for engineering excellence.",
    },
    {
      icon: Factory,
      title: "Engineering Excellence",
      description:
        "Recognized for delivering complex thermal power plant construction projects.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Awards & Achievements
        </h2>

        {/* Award Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <div
                key={index}
                className="group bg-white p-7 rounded-lg shadow transition duration-300 text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:border hover:border-yellow-200"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 transition duration-300 group-hover:bg-yellow-400 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 transition duration-300 group-hover:text-yellow-500">
                  {award.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.description}
                </p>

                {/* Accent */}
                <div className="mt-5 h-[2px] w-8 bg-yellow-400 mx-auto transition duration-300 group-hover:w-14"></div>
              </div>
            );
          })}
        </div>

        {/* Newspaper Proof */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Newspaper Coverage</h3>

          <img
            src={awardsImage}
            alt="Times of India award recognition"
            className="mx-auto rounded-lg shadow-lg max-w-3xl transition duration-300 hover:scale-105 hover:shadow-xl"
          />

          <p className="text-gray-600 mt-4 text-sm">
            Featured in <strong>The Times of India</strong> – 7 August 2003
          </p>
        </div>
      </div>
    </section>
  );
}
