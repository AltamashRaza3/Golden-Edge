import { ShieldCheck, ClipboardCheck, BadgeCheck } from "lucide-react";

export default function Policies() {
  const policies = [
    {
      title: "Business Policy",
      icon: ClipboardCheck,
      desc: "At GEEPL, every client is considered a valuable partner. Our project management approach ensures clear communication, flexibility to changes, and proactive decision-making to deliver projects on time and often ahead of schedule.",
    },
    {
      title: "Quality Policy",
      icon: BadgeCheck,
      desc: "GEEPL is committed to maintaining the highest standards of quality and safety. We are certified under ISO 9001:2015 (Quality Management System) and ISO 45001:2018 (Occupational Health & Safety Management System).",
    },
    {
      title: "Safety Policy",
      icon: ShieldCheck,
      desc: "Safety is our highest priority. We believe accidents are preventable and take every possible measure to ensure safe working environments. Our guiding principle is: Life is a Blessing — we protect it with care and responsibility.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Our Policies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg shadow text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:border hover:border-yellow-200"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 transition duration-300 group-hover:bg-yellow-400 group-hover:text-white">
                    <Icon size={30} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 transition duration-300 group-hover:text-yellow-500">
                  {policy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {policy.desc}
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
