export default function WhyChooseUs() {
  const features = [
    {
      title: "50+ Years of Industry Experience",
      description:
        "Over five decades of proven expertise in thermal power plant construction and BTG system execution across India.",
    },
    {
      title: "Client-Centred Delivery",
      description:
        "Strong relationships with leading public and private sector companies built on trust and consistent performance.",
    },
    {
      title: "Modern Infrastructure",
      description:
        "Advanced machinery, tools, and engineering capabilities for executing large-scale thermal power plant projects.",
    },
    {
      title: "Highly Skilled Team",
      description:
        "A workforce of 2500+ engineers, technocrats, and technical staff delivering precision and reliability.",
    },
    {
      title: "Timely & Cost-Effective Execution",
      description:
        "Projects consistently delivered on schedule while maintaining strict quality and safety standards.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose GEEPL
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Golden Edge Engineering Pvt. Ltd. has built a strong reputation in the
          thermal power sector through decades of technical expertise,
          professional project management, and commitment to delivering
          high-quality engineering solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
