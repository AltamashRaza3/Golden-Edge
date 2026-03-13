import { Link } from "react-router-dom";

import mechanical from "../assets/images/mechanical-power.jpg";
import infrastructure from "../assets/images/infrastructure.jpg";
import rehabilitation from "../assets/images/rehabilitation.jpg";

export default function Services() {
const services = [
{
title: "Mechanical Construction – Power Plants",
description:
"Mechanical construction services including erection, testing and commissioning assistance of Boiler–Turbine–Generator (BTG) systems and auxiliaries for thermal power plants.",
image: mechanical,
},
{
title: "Infrastructure Services",
description:
"Engineering and construction of industrial infrastructure including structural fabrication, heavy engineering works and execution of large-scale industrial projects.",
image: infrastructure,
},
{
title: "Industrial Rehabilitation",
description:
"Rehabilitation and restoration of industrial plants and infrastructure including facilities affected by floods, structural damage or operational failures.",
image: rehabilitation,
},
];

return ( <section className="py-20 bg-gray-100"> <div className="max-w-7xl mx-auto px-6"> <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>

    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
      Golden Edge Engineering provides specialized engineering,
      construction and rehabilitation services for thermal power plants and
      large-scale industrial infrastructure projects across India.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <Link
          key={index}
          to="/services"
          className="group bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition">
              {service.title}
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


);
}
