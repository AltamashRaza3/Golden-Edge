import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ongoingProjects, completedProjects } from "../data/projectsdata";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("completed");

  const extractCompletionYear = (yearStr) => {
    if (!yearStr) return 0;
    const parts = yearStr.split(/–|-/);
    return parseInt(parts[parts.length - 1], 10) || 0;
  };

  const projects = useMemo(() => {
    const data =
      activeTab === "completed" ? completedProjects : ongoingProjects;

    if (!Array.isArray(data)) return [];

    if (activeTab === "completed") {
      return [...data].sort(
        (a, b) => extractCompletionYear(b.year) - extractCompletionYear(a.year),
      );
    }

    return data;
  }, [activeTab, completedProjects, ongoingProjects]);

  return (
    <>
      {/* 🔥 SEO META */}
      <Helmet>
        <title>
          Power Plant Projects in India | Golden Edge Engineering Portfolio
        </title>

        <meta
          name="description"
          content="Explore Golden Edge Engineering’s portfolio of completed and ongoing thermal power plant projects, including boiler, turbine, and BTG installations across India."
        />

        <meta
          name="keywords"
          content="power plant projects India, BTG projects, boiler erection projects, turbine installation projects, Golden Edge Engineering projects"
        />

        <meta name="author" content="Golden Edge Engineering Pvt Ltd" />

        <link rel="canonical" href="https://www.goldenedge.in/projects" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Power Plant Projects | Golden Edge Engineering"
        />
        <meta
          property="og:description"
          content="View our completed and ongoing power plant projects across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldenedge.in/projects" />
        <meta
          property="og:image"
          content="https://www.goldenedge.in/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Power Plant Projects India" />
        <meta
          name="twitter:description"
          content="Explore Golden Edge Engineering’s project portfolio."
        />
        <meta
          name="twitter:image"
          content="https://www.goldenedge.in/preview.jpg"
        />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* ✅ H1 (SEO important) */}
          <h1 className="text-4xl font-bold text-center mb-12">
            Power Plant Projects
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-5 py-2 rounded ${
                activeTab === "completed"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-200 hover:bg-gray-300 transition"
              }`}
            >
              Completed Projects
            </button>

            <button
              onClick={() => setActiveTab("ongoing")}
              className={`px-5 py-2 rounded ${
                activeTab === "ongoing"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-200 hover:bg-gray-300 transition"
              }`}
            >
              Ongoing Projects
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100 text-gray-800 uppercase text-sm tracking-wide">
                <tr>
                  <th className="px-6 py-4">Project</th>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Capacity</th>
                  <th className="px-6 py-4">Scope of Work</th>
                  <th className="px-6 py-5">
                    {activeTab === "completed" ? "Year" : "Status"}
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.length > 0 ? (
                  projects.map((project, index) => {
                    const key =
                      project?.id ||
                      `${project?.project}-${project?.client}-${index}`;

                    return (
                      <tr
                        key={key}
                        className="border-t even:bg-gray-50 hover:bg-yellow-50 transition"
                      >
                        <td className="px-6 py-4 font-medium">
                          {project?.project || "—"}

                          {project?.highlight && (
                            <p className="text-sm text-yellow-600">
                              {project.highlight}
                            </p>
                          )}
                        </td>

                        <td className="px-6 py-5">{project?.client || "—"}</td>

                        <td className="px-6 py-5">
                          {project?.location || "—"}
                        </td>

                        <td className="px-6 py-5">
                          {project?.capacity || "—"}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-600 max-w-sm">
                          {project?.scope || "—"}
                        </td>

                        <td className="px-6 py-4">
                          {activeTab === "completed"
                            ? project?.year || "—"
                            : project?.displayStatus || project?.status || "—"}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500">
                      No projects available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
