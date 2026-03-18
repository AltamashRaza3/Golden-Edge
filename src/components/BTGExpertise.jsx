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

return ( <section className="py-24 bg-gray-50"> <div className="max-w-7xl mx-auto px-6">
{/* Heading */} <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
Our Core Expertise: BTG Systems </h2>

    <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
      With over 50 years of experience, Golden Edge Engineering Pvt. Ltd.
      (GEEPL) specializes in the Erection, Testing, and Assistance to
      Commissioning of Boiler–Turbine–Generator (BTG) systems and all their
      auxiliaries for Thermal Power Plants. Our expertise covers
      sub-critical to super-critical boiler systems with plant capacities
      ranging from 18 MW to 800 MW, ensuring reliable, efficient, and fully
      integrated power generation solutions for our clients.
    </p>

    {/* Expertise List */}
    <div className="grid md:grid-cols-2 gap-10">
      {expertise.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="flex items-start gap-5 group"
          >
            {/* Icon */}
            <div className="p-4 rounded-lg bg-yellow-100 text-yellow-500 transition group-hover:bg-yellow-400 group-hover:text-white">
              <Icon size={28} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              {/* underline */}
              <div className="mt-3 h-[2px] w-10 bg-yellow-400 transition-all duration-300 group-hover:w-16"></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


);
}
