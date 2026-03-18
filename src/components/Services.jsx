import { Link } from "react-router-dom";

import mechanical from "../assets/images/mechanical-power.jpg";
import infrastructure from "../assets/images/infrastructure.jpg";
import rehabilitation from "../assets/images/rehabilitation.jpg";

export default function Services() {
  const services = [
    {
      title: "Mechanical Construction – Power Plants",
      description:
        "Mechanical construction services including erection, testing and commissioning assistance of Boiler–Turbine–Generator (BTG) systems and auxiliaries for thermal power plants.",
      image: mechanical,
    },
    {
      title: "Infrastructure Services",
      description:
        "Engineering and construction of industrial infrastructure including structural fabrication, heavy engineering works and execution of large-scale industrial projects.",
      image: infrastructure,
    },
    {
      title: "Industrial Rehabilitation",
      description:
        "Rehabilitation and restoration of industrial plants and infrastructure including facilities affected by floods, structural damage or operational failures.",
      image: rehabilitation,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 text-center text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Golden Edge Engineering provides specialized engineering, construction
          and rehabilitation services for thermal power plants and large-scale
          industrial infrastructure projects across India.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-yellow-500 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* subtle divider */}
                <div className="mt-4 h-[2px] w-10 bg-yellow-400 transition-all duration-300 group-hover:w-16"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
