import { Link } from "react-router-dom";

// 🔥 Images (pick best from folders)
import boiler from "../assets/webp-images/Boiler/pic 10.webp";
import turbine from "../assets/webp-images/STG/pic 36.webp";
import generator from "../assets/webp-images/ESP/pic 3.webp";
import civil from "../assets/webp-images/ACC/pic 1.webp";
import electrical from "../assets/webp-images/ACC/pic 2.webp";
import infra from "../assets/webp-images/Home/pic 3.webp";

export default function Services() {
  const services = [
    {
      title: "Boiler Systems",
      description:
        "Erection, Testing, and Assistance to Commissioning of Boiler systems and auxiliaries for Thermal Power Plants.",
      image: boiler,
    },
    {
      title: "Turbine Systems",
      description:
        "Installation, erection, and commissioning assistance of Steam Turbine systems and auxiliaries.",
      image: turbine,
    },
    {
      title: "Generator Systems",
      description:
        "Generator erection, auxiliaries installation, and electrical synchronization support.",
      image: generator,
    },
    {
      title: "Civil Engineering",
      description:
        "Construction of power plant structures and related infrastructure.",
      image: civil,
    },
    {
      title: "Electrical & Mechanical Systems",
      description:
        "Power distribution, auxiliary equipment installation, and other support systems.",
      image: electrical,
    },
    {
      title: "Industrial Infrastructure",
      description:
        "Services for Refineries, Steel Plants, and other industrial projects.",
      image: infra,
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
          At Golden Edge Engineering Pvt. Ltd. (GEEPL), we specialize in
          complete Erection, Testing, and Assistance to Commissioning of
          Boiler–Turbine– Generator (BTG) systems and supporting engineering
          services.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-yellow-500 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                <span className="text-yellow-500 font-medium">
                  View Details →
                </span>

                <div className="mt-2 h-[2px] w-10 bg-yellow-400 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
