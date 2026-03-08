import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ongoingProjects, completedProjects } from "../data/projectsdata";

export default function ProjectsPage() {

const [activeTab, setActiveTab] = useState("completed");

const projects =
activeTab === "completed" ? completedProjects : ongoingProjects;

return (
<> <Navbar />

  <section className="pt-24 pb-20 bg-gray-50">

    <div className="max-w-7xl mx-auto px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Projects
      </h1>

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

      {/* Projects Table */}

      <div className="overflow-x-auto bg-white shadow rounded-lg">

        <table className="min-w-full text-left">

          <thead className="bg-gray-100 text-gray-700">

            <tr>
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Capacity</th>
              <th className="px-6 py-4">
                {activeTab === "completed" ? "Year" : "Status"}
              </th>
            </tr>

          </thead>

          <tbody>

            {projects.map((project, index) => (

              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-4 font-medium">
                  {project.project}
                  {project.highlight && (
                    <p className="text-sm text-yellow-600">
                      {project.highlight}
                    </p>
                  )}
                </td>

                <td className="px-6 py-4">
                  {project.client}
                </td>

                <td className="px-6 py-4">
                  {project.location}
                </td>

                <td className="px-6 py-4">
                  {project.capacity}
                </td>

                <td className="px-6 py-4">
                  {activeTab === "completed"
                    ? project.year
                    : project.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  </section>

  <Footer />
</>


);
}
