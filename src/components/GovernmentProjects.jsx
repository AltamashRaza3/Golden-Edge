export default function GovernmentProjects() {
  const projects = [
    {
      title: "Thermal Power Plant Project",
      client: "NTPC",
      location: "Jharkhand",
      description:
        "Execution of mechanical erection and installation works for thermal power plant infrastructure.",
    },
    {
      title: "Boiler & Turbine Installation",
      client: "State Electricity Board",
      location: "Odisha",
      description:
        "Engineering services including installation and commissioning of boiler turbine generator units.",
    },
    {
      title: "Industrial Infrastructure Project",
      client: "Government Power Corporation",
      location: "West Bengal",
      description:
        "Construction and mechanical works for large-scale government power infrastructure.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Government Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-yellow-600 text-sm mb-2">
                Client: {project.client}
              </p>

              <p className="text-gray-600 text-sm mb-3">
                Location: {project.location}
              </p>

              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
