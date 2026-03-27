import { Link } from "react-router-dom";

// 🔥 Use real images (replace with best ones)
import img1 from "../assets/webp-images/Boiler/pic 10.webp";
import img2 from "../assets/webp-images/ESP/pic 3.webp";
import img3 from "../assets/webp-images/STG/pic 36.webp";

export default function Projects() {
  const projects = [
    {
      title: "NTPC Sipat – BHEL",
      location: "Bilaspur, Chhattisgarh",
      capacity: "1x660 MW",
      year: "2005–2009",
      highlight: "India’s first super-critical Thermal Power Plant",
      image: img1,
    },
    {
      title: "Koradi TPS Unit #6 – BHEL",
      location: "Nagpur, Maharashtra",
      capacity: "1x110 MW",
      year: "2016–2019",
      highlight: "Renovation & modernization benchmark project",
      image: img2,
    },
    {
      title: "Mahan TPS Unit 1 & 2 – Essar Power",
      location: "Madhya Pradesh",
      capacity: "2x600 MW",
      year: "2010–2013",
      highlight: "Large-scale multi-unit execution",
      image: img3,
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Major Projects Executed
        </h2>

        <p className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Over five decades, GEEPL has successfully executed major thermal power
          plant projects across India, delivering reliable BTG systems and
          engineering excellence.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Link
                    to="/gallery"
                    className="bg-yellow-500 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-400 transition"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <div className="space-y-1 text-gray-600 text-sm">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Location:
                    </span>{" "}
                    {project.location}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Capacity:
                    </span>{" "}
                    {project.capacity}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">Year:</span>{" "}
                    {project.year}
                  </p>
                </div>

                {/* Highlight */}
                <p className="mt-3 text-sm text-yellow-600 font-medium">
                  {project.highlight}
                </p>

                <div className="mt-4 h-[2px] w-10 bg-yellow-400 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
