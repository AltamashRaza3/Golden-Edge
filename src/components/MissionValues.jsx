import {
  Target,
  Award,
  Users,
  Lightbulb,
  ShieldCheck,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function MissionValues() {
  const values = [
    {
      title: "Excellence",
      icon: Award,
      desc: "We strive for excellence in planning, execution, control, and timely delivery of projects to ensure maximum client satisfaction.",
    },
    {
      title: "Employee Recognition",
      icon: Users,
      desc: "Our people are our greatest asset. We train, listen, and communicate with every team member while recognizing and celebrating their contributions.",
    },
    {
      title: "Individual Responsibility",
      icon: ShieldCheck,
      desc: "Our workforce operates with autonomy and access to the tools and resources required to perform effectively while maintaining integrity and transparency.",
    },
    {
      title: "Teamwork",
      icon: Users,
      desc: "We work harmoniously with a shared vision, leveraging collective talent and trusting one another to achieve outstanding results.",
    },
    {
      title: "Continuous Learning",
      icon: BookOpen,
      desc: "At GEEPL, we learn together daily, adapt to change, and continuously raise our standards to maintain a competitive edge in the industry.",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      desc: "Every project is unique. We apply creativity and technical expertise to develop customized solutions for complex client and end-user requirements.",
    },
    {
      title: "Accountability",
      icon: CheckCircle,
      desc: "We stand by our commitments, taking ownership of our words, actions, and results with responsibility and professionalism.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            At Golden Edge Engineering Pvt. Ltd. (GEEPL), our mission is to
            deliver construction services professionally while exceeding client
            expectations through quality craftsmanship, safe and timely project
            completion, competitive and transparent pricing, and open two-way
            communication with our clients.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-10">Our Values</h3>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-lg shadow transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              >
                {/* Icon */}
                <Icon
                  className="text-yellow-500 mb-4 transition duration-300 group-hover:text-yellow-400"
                  size={32}
                />

                {/* Title */}
                <h4 className="text-lg font-semibold mb-2 transition duration-300 group-hover:text-yellow-500">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
