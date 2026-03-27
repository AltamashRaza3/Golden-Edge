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
      title: "Client-Centered Delivery",
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.08),_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why Choose GEEPL
        </h2>

        <p className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Golden Edge Engineering Pvt. Ltd. has built a strong reputation in the
          thermal power sector through decades of technical expertise,
          professional project management, and commitment to delivering
          high-quality engineering solutions.
        </p>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative w-full md:w-[45%] lg:w-[28%] p-8 rounded-xl bg-white/70 backdrop-blur-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-white">
                    <Icon size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
                  {feature.description}
                </p>

                {/* subtle hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
