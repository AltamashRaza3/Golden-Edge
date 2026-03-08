export default function CompanyTimeline() {

const timeline = [
{
year: "1970",
title: "Foundation",
description:
"Golden Construction was founded by Mr. Nizam-Ul-Haque with the vision of delivering quality construction services to India's growing industrial sector.",
},
{
year: "1970 – 1990",
title: "Foundation Years",
description:
"The company built a strong reputation for reliability, discipline, and quality construction work while developing deep industry expertise.",
},
{
year: "1990 – 2004",
title: "Growth & Recognition",
description:
"The organization expanded its capabilities into thermal power projects and developed strong relationships with leading power sector clients.",
},
{
year: "2004",
title: "Company Formation",
description:
"The firm was formally incorporated as Golden Edge Engineering Pvt. Ltd., marking a major milestone in its professional journey.",
},
{
year: "2009",
title: "Leadership Expansion",
description:
"Mr. Md. Azizullah joined as Executive Director, introducing modern project management systems and structured growth strategies.",
},
{
year: "Present",
title: "Industry Leader",
description:
"With more than 50 years of experience, GEEPL is now a trusted partner for BTG systems erection, testing, and commissioning in thermal power plants.",
},
];

return ( <section className="py-20 bg-gray-50"> <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-12">
      Our Journey
    </h2>

    <div className="relative border-l-4 border-yellow-500">

      {timeline.map((item, index) => (
        <div key={index} className="mb-10 ml-6">

          <span className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-2.5"></span>

          <p className="text-sm text-gray-500">
            {item.year}
          </p>

          <h3 className="text-xl font-semibold">
            {item.title}
          </h3>

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
