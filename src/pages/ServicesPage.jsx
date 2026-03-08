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
  <>
    {" "}
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-24 h-[360px] md:h-[420px] flex items-center justify-center text-white overflow-hidden">
      <img
        src={heroImage}
        alt="Thermal Power Plant"
        className="
      absolute inset-0 w-full h-full object-cover
      object-[center_70%]
      md:object-[center_60%]
      lg:object-[center_50%]
    "
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>

        <p className="text-gray-200 text-lg">
          Golden Edge Engineering provides specialized construction and
          engineering services for thermal power plants and large-scale
          industrial infrastructure projects.
        </p>
      </div>
    </section>
    {/* Services Grid */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-yellow-500" size={28} />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
