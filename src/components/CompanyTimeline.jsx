export default function CompanyTimeline() {
  const timeline = [
    {
      year: "1970",
      title: "Foundation",
      description:
        "Golden Edge Engineering Pvt. Ltd. traces its roots back to 1970 when Mr. Nizam-Ul-Haque established M/s Golden Construction with the vision of delivering reliable construction services to India’s growing industrial sector.",
    },
    {
      year: "1970 – 1990",
      title: "Foundation Years",
      description:
        "Starting from the grassroots level, Mr. Haque built the organization through hard work, discipline, and commitment to quality, establishing a strong reputation for reliability in industrial construction projects.",
    },
    {
      year: "1990 – 2004",
      title: "Growth & Recognition",
      description:
        "During this period the company expanded its capabilities and entered the thermal power sector, executing important mechanical and civil works and building long-term relationships with major power sector clients.",
    },
    {
      year: "2004",
      title: "Company Formation",
      description:
        "The organization was formally incorporated as Golden Edge Engineering Pvt. Ltd., marking an important milestone and strengthening its professional identity in the engineering and construction industry.",
    },
    {
      year: "2009",
      title: "Leadership Expansion",
      description:
        "Mr. Md. Azizullah, an MBA and Mechanical Engineer, joined the company as Executive Director and introduced modern project management practices, strengthening the company’s engineering and operational capabilities.",
    },
    {
      year: "Present",
      title: "Industry Leadership",
      description:
        "With more than five decades of experience, Golden Edge Engineering Pvt. Ltd. is today recognized as a trusted engineering partner specializing in erection, testing, and commissioning assistance of Boiler–Turbine–Generator (BTG) systems and auxiliaries for thermal power plants across India.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
