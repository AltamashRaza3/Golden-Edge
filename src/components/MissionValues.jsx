import { Target, Award, Users, Lightbulb, ShieldCheck, BookOpen, CheckCircle } from "lucide-react";

export default function MissionValues() {

const values = [
{
title: "Excellence",
icon: Award,
desc: "We strive for excellence in planning, execution, and delivery of projects to maximize client satisfaction.",
},
{
title: "Employee Recognition",
icon: Users,
desc: "Our people are our greatest asset. We listen, train, and celebrate contributions from every member of our team.",
},
{
title: "Individual Responsibility",
icon: ShieldCheck,
desc: "Our workforce operates with autonomy and integrity while taking responsibility for delivering quality work.",
},
{
title: "Teamwork",
icon: Users,
desc: "We collaborate with trust and shared vision, combining collective skills to achieve outstanding results.",
},
{
title: "Continuous Learning",
icon: BookOpen,
desc: "We continuously improve our skills, processes, and standards to remain competitive in the industry.",
},
{
title: "Innovation",
icon: Lightbulb,
desc: "Every project is unique, and we apply creative engineering solutions to complex challenges.",
},
{
title: "Accountability",
icon: CheckCircle,
desc: "We stand by our commitments and take ownership of every project and decision we make.",
},
];

return ( <section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

      <p className="text-gray-600 max-w-3xl mx-auto">
        At Golden Edge Engineering Pvt. Ltd., our mission is to deliver
        construction and engineering services professionally while
        exceeding client expectations through quality craftsmanship,
        safe project execution, and transparent collaboration.
      </p>
    </div>

    <h3 className="text-2xl font-semibold text-center mb-10">
      Our Values
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {values.map((value, index) => {
        const Icon = value.icon;

        return (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >

            <Icon className="text-yellow-500 mb-4" size={32} />

            <h4 className="text-lg font-semibold mb-2">
              {value.title}
            </h4>

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
