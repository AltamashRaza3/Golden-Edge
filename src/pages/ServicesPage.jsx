import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Flame, Wind, Zap, Wrench, Factory, Settings } from "lucide-react";

import heroImage from "../assets/images/hero-power-plant.jpeg";

export default function ServicesPage() {
const services = [
{
title: "Boiler Erection",
icon: Flame,
items: [
"Boiler structure erection",
"Pressure parts installation",
"Boiler auxiliaries installation",
],
},
{
title: "Turbine Erection",
icon: Wind,
items: [
"Steam turbine installation",
"Turbine auxiliaries erection",
"Alignment and commissioning support",
],
},
{
title: "Generator Installation",
icon: Zap,
items: [
"Generator erection",
"Generator auxiliaries installation",
"Electrical synchronization support",
],
},
{
title: "Structural Fabrication",
icon: Factory,
items: [
"Heavy steel structural fabrication",
"Industrial structural erection",
"Power plant structural works",
],
},
{
title: "Mechanical Equipment",
icon: Wrench,
items: [
"Heavy mechanical equipment installation",
"Plant machinery erection",
"Industrial equipment maintenance",
],
},
{
title: "Piping Systems",
icon: Settings,
items: [
"Industrial piping installation",
"High-pressure piping systems",
"Auxiliary piping works",
],
},
];

return (
<> <Navbar />

  {/* Hero Section */}
  <section className="relative pt-24 h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
    <img
      src={heroImage}
      alt="Thermal Power Plant"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-black/65"></div>

    <div className="relative text-center px-6 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Our Services
      </h1>

      <p className="text-gray-200 text-lg">
        Golden Edge Engineering provides specialized construction and
        engineering services for thermal power plants and large-scale
        industrial infrastructure projects.
      </p>
    </div>
  </section>

  {/* Services Grid */}
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-yellow-100 text-yellow-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold">
                  {service.title}
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Accent */}
              <div className="mt-6 h-[2px] w-10 bg-yellow-400 transition-all duration-300 group-hover:w-16"></div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  <Footer />
</>


);
}
