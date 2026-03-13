import { Award, Handshake, Factory, Users, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "50+ Years of Industry Experience",
      icon: Award,
      description:
        "More than five decades of experience in thermal power plant engineering and execution of Boiler–Turbine–Generator (BTG) systems across India.",
    },
    {
      title: "Client-Centred Delivery",
      icon: Handshake,
      description:
        "Our approach focuses on strong client relationships, transparent communication and consistent project performance.",
    },
    {
      title: "Modern Infrastructure",
      icon: Factory,
      description:
        "We utilize modern construction equipment, tools and engineering systems capable of executing large-scale power plant projects efficiently.",
    },
    {
      title: "Highly Skilled Team",
      icon: Users,
      description:
        "Our team of more than 2500 engineers, technocrats and skilled professionals ensures reliable project execution and technical excellence.",
    },
    {
      title: "Timely & Cost-Effective Execution",
      icon: Clock,
      description:
        "Projects are delivered on schedule while maintaining strict standards of quality, safety and operational efficiency.",
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
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 p-6 text-center rounded-lg shadow hover:shadow-lg transition"
              >
                <Icon className="text-orange-500 mb-4 mx-auto" size={32} />

                <h3 className="text-xl font-semibold mb-3 ">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
