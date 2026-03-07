export default function CompanyTimeline() {
  const timeline = [
    {
      year: "1970",
      title: "Golden Construction Founded",
      description:
        "The foundation of the company was laid with a vision to contribute to India's infrastructure development.",
    },
    {
      year: "1990",
      title: "Expansion Into Power Projects",
      description:
        "The company expanded its engineering services into thermal power plant construction and industrial infrastructure.",
    },
    {
      year: "2005",
      title: "Major Industrial Projects",
      description:
        "Golden Edge Engineering began executing large scale projects across India in power and infrastructure sectors.",
    },
    {
      year: "2020",
      title: "Large Infrastructure Development",
      description:
        "The company continued to grow by delivering reliable engineering solutions for major power plant projects.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Company Journey
        </h2>

        <div className="relative border-l-4 border-yellow-500">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-2.5"></div>

              <p className="text-sm text-gray-500">{item.year}</p>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
