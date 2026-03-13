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

return ( <section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-12">
      Our Policies
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {policies.map((policy, index) => {
        const Icon = policy.icon;

        return (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center"
          >
            <Icon className="text-yellow-500 mb-4 mx-auto" size={32} />

            <h3 className="text-xl font-semibold mb-3">{policy.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {policy.desc}
            </p>
          </div>
        );
      })}

    </div>

  </div>

</section>

);
}
