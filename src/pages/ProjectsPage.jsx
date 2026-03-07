import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import plant1 from "../assets/images/thermal-power-plant.jpeg";
import plant2 from "../assets/images/industrial-power-station.jpeg";
import plant3 from "../assets/images/power-plant-night.jpeg";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("completed");

  const completedProjects = [
    {
      title: "Thermal Power Plant Installation",
      client: "NTPC",
      location: "Jharkhand, India",
      image: plant1,
    },
    {
      title: "Industrial Power Station Project",
      client: "JSW Energy",
      location: "Odisha, India",
      image: plant2,
    },
  ];

  const ongoingProjects = [
    {
      title: "Power Infrastructure Development",
      client: "Reliance Power",
      location: "Gujarat, India",
      image: plant3,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>

          {/* Tabs */}

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-5 py-2 rounded ${
                activeTab === "completed"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-200"
              }`}
            >
              Completed Projects
            </button>

            <button
              onClick={() => setActiveTab("ongoing")}
              className={`px-5 py-2 rounded ${
                activeTab === "ongoing"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-200"
              }`}
            >
              Ongoing Projects
            </button>
          </div>

          {/* Projects Grid */}

          <div className="grid md:grid-cols-3 gap-8">
            {(activeTab === "completed"
              ? completedProjects
              : ongoingProjects
            ).map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    <strong>Client:</strong> {project.client}
                  </p>

                  <p className="text-gray-600 text-sm">
                    <strong>Location:</strong> {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
