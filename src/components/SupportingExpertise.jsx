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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Supporting Expertise
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Alongside our core expertise in BTG systems, Golden Edge Engineering
          Pvt. Ltd. provides complementary engineering and construction services
          to ensure complete and efficient project execution across thermal
          power plants and other industrial sectors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <service.icon
                className="mx-auto text-orange-500 mb-4"
                size={40}
              />

              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
