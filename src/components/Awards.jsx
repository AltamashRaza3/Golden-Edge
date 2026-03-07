import { Trophy, Newspaper, Factory } from "lucide-react";
import awardsImage from "../assets/images/awards.jpg";

export default function Awards() {
  const awards = [
    {
      icon: <Trophy size={32} className="text-yellow-500" />,
      title: "660 MW Boiler Project Execution",
      description:
        "First Indian subcontracting company to execute boiler work for a 660 MW thermal power plant.",
    },
    {
      icon: <Newspaper size={32} className="text-yellow-500" />,
      title: "Times of India Recognition",
      description:
        "Achievement featured in The Times of India on 7 August 2003 for engineering excellence.",
    },
    {
      icon: <Factory size={32} className="text-yellow-500" />,
      title: "Engineering Excellence",
      description:
        "Recognized for delivering complex thermal power plant construction projects.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Awards & Achievements
        </h2>

        {/* Award Cards */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{award.icon}</div>

              <h3 className="text-lg font-semibold mb-2">{award.title}</h3>

              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          ))}
        </div>

        {/* Newspaper Proof */}

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Newspaper Coverage</h3>

          <img
            src={awardsImage}
            alt="Times of India award recognition"
            className="mx-auto rounded-lg shadow-lg max-w-3xl hover:scale-105 transition"
          />

          <p className="text-gray-600 mt-4 text-sm">
            Featured in <strong>The Times of India</strong> – 7 August 2003
          </p>
        </div>
      </div>
    </section>
  );
}
