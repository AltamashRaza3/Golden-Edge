import { Building2, Cpu, ClipboardCheck, Factory } from "lucide-react";

export default function SupportingExpertise() {
const services = [
{
title: "Civil Engineering",
desc: "Construction of power plant structures and supporting infrastructure including foundations, industrial buildings, and heavy equipment bases.",
icon: Building2,
},
{
title: "Electrical & Mechanical Systems",
desc: "Installation of power distribution systems, mechanical equipment, piping networks, and auxiliary plant systems.",
icon: Cpu,
},
{
title: "Project Management",
desc: "Comprehensive project planning, coordination, and quality assurance to ensure efficient and timely project execution.",
icon: ClipboardCheck,
},
{
title: "Industrial Infrastructure",
desc: "Engineering and construction services for refineries, steel plants, fertilizer plants, and other heavy industries.",
icon: Factory,
},
];

return ( <section className="py-24 bg-white"> <div className="max-w-7xl mx-auto px-6">
{/* Heading */} <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
Supporting Expertise </h2>

    <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
      Alongside our core expertise in BTG systems, Golden Edge Engineering
      Pvt. Ltd. provides complementary engineering and construction services
      to ensure complete and efficient project execution across thermal
      power plants and other industrial sectors.
    </p>

    {/* Expertise Grid */}
    <div className="grid md:grid-cols-2 gap-10">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <div key={i} className="flex items-start gap-5 group">
            {/* Icon */}
            <div className="p-4 rounded-lg bg-yellow-100 text-yellow-500 transition group-hover:bg-yellow-400 group-hover:text-white">
              <Icon size={28} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>

              {/* subtle underline */}
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
