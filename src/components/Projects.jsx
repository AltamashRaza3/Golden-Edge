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

return ( <section className="py-24 bg-gray-100"> <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
      Major Projects Executed
    </h2>

    <p className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
      Golden Edge Engineering has successfully delivered multiple
      large-scale thermal power plant projects across India.
    </p>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group rounded-xl overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <Link
                to="/projects"
                className="bg-yellow-500 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-400 transition"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <div className="space-y-1 text-gray-600 text-sm md:text-base">
              <p>
                <span className="font-semibold text-gray-800">Client:</span>{" "}
                {project.client}
              </p>

              <p>
                <span className="font-semibold text-gray-800">Location:</span>{" "}
                {project.location}
              </p>

              <p>
                <span className="font-semibold text-gray-800">Year:</span>{" "}
                {project.year}
              </p>
            </div>

            {/* Accent line */}
            <div className="mt-4 h-[2px] w-10 bg-yellow-400 transition-all duration-300 group-hover:w-16"></div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


);
}
