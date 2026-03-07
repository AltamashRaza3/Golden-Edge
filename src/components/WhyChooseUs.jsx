export default function WhyChooseUs() {
  const features = [
    {
      title: "50+ Years Experience",
      description:
        "Decades of expertise in thermal power plant engineering and infrastructure development.",
    },
    {
      title: "Expert Engineering Team",
      description:
        "Highly skilled engineers and technicians delivering reliable industrial solutions.",
    },
    {
      title: "Quality & Safety Standards",
      description:
        "Strict adherence to industry safety protocols and international quality standards.",
    },
    {
      title: "On-Time Project Delivery",
      description:
        "Proven track record of completing large-scale engineering projects within deadlines.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Choose Golden Edge Engineering
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          With decades of industry experience and a dedicated engineering team,
          Golden Edge Engineering delivers reliable, high-quality solutions for
          thermal power plants and industrial infrastructure projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
