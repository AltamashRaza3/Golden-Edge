import { Link } from "react-router-dom";

import plant1 from "../assets/images/thermal-power-plant.jpeg";
import plant2 from "../assets/images/industrial-power-station.jpeg";
import plant3 from "../assets/images/power-plant-night.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "Thermal Power Plant Installation",
      location: "Jharkhand, India",
      client: "NTPC",
      year: "2022",
      image: plant1,
    },
    {
      title: "Industrial Power Station",
      location: "Odisha, India",
      client: "JSW Energy",
      year: "2021",
      image: plant2,
    },
    {
      title: "Power Infrastructure Development",
      location: "Gujarat, India",
      client: "Reliance Power",
      year: "2023",
      image: plant3,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Major Projects Executed
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Golden Edge Engineering has successfully delivered multiple
          large-scale thermal power plant projects across India.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Link
                    to="/projects"
                    className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-600 text-sm mb-1">
                  <strong>Client:</strong> {project.client}
                </p>

                <p className="text-gray-600 text-sm mb-1">
                  <strong>Location:</strong> {project.location}
                </p>

                <p className="text-gray-600 text-sm">
                  <strong>Year:</strong> {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
