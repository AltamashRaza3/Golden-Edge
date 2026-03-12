export default function CompanyTimeline() {

const timeline = [
  {
    year: "1970",
    title: "Foundation",
    description:
      "Golden Construction was founded by Mr. Nizam-Ul-Haque with a clear purpose — to deliver quality construction services to India’s growing industrial sector.",
  },
  {
    year: "1970 – 1990",
    title: "Foundation Years",
    description:
      "Mr. Haque, a self-made professional who began his career at the grassroots level, built the company’s reputation for reliability, discipline, and high-quality construction work while gaining deep industry expertise.",
  },
  {
    year: "1990 – 2004",
    title: "Growth & Recognition",
    description:
      "The company expanded its expertise into thermal power projects, executing important mechanical and civil works for reputed clients and building strong relationships across the power sector.",
  },
  {
    year: "2004",
    title: "Company Incorporation",
    description:
      "The organization was formally incorporated as Golden Edge Engineering Pvt. Ltd., marking a significant milestone in its professional journey.",
  },
  {
    year: "2009",
    title: "Leadership Expansion",
    description:
      "Mr. Md. Azizullah, an MBA and Mechanical Engineer, joined as Executive Director, introducing modern systems, professional project management practices, and a vision for structured growth.",
  },
  {
    year: "Present",
    title: "50+ Years Legacy",
    description:
      "With more than five decades of experience, GEEPL is now a trusted partner in the thermal power sector specializing in erection, testing, and commissioning assistance of BTG systems and auxiliaries.",
  },
];

return (
  <section className="py-20 bg-gray-50">
    {" "}
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Journey – From Modest Beginnings to Industry Leadership
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Golden Edge Engineering Pvt. Ltd. has grown from a modest construction
        company founded in 1970 into a trusted engineering partner for thermal
        power plant projects across India, delivering excellence for more than
        five decades.
      </p>

      <div className="relative border-l-4 border-yellow-500">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-2.5"></span>

            <p className="text-sm text-gray-500">{item.year}</p>

            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="text-gray-600 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
