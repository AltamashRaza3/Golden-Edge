import { Users, Factory, Award, Settings } from "lucide-react";

export default function CompanyStats() {
  const stats = [
    {
      icon: Award,
      value: "50+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      value: "2500+",
      label: "Skilled Workforce",
    },
    {
      icon: Factory,
      value: "18 MW – 800 MW",
      label: "Boiler Capacity",
    },
    {
      icon: Settings,
      value: "ISO 9001 & 45001",
      label: "Certified Company",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Company Profile
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Golden Edge Engineering Pvt. Ltd. is a leading contracting company
          specializing in mechanical construction works for Thermal Power Plant
          projects across India. With more than five decades of experience, we
          deliver reliable engineering solutions across power, petrochemical,
          fertilizer, and other heavy industries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg shadow text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              >
                {/* Icon */}
                <Icon
                  className="mx-auto text-yellow-500 mb-4 transition duration-300 group-hover:text-yellow-400"
                  size={36}
                />

                {/* Value */}
                <h3 className="text-2xl font-bold transition duration-300 group-hover:text-yellow-500">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
