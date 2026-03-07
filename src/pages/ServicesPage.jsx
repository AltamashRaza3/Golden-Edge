import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Boiler Erection",
      items: [
        "Boiler structure erection",
        "Pressure parts installation",
        "Boiler auxiliaries installation",
      ],
    },
    {
      title: "Turbine Erection",
      items: [
        "Steam turbine installation",
        "Turbine auxiliaries erection",
        "Alignment and commissioning support",
      ],
    },
    {
      title: "Generator Installation",
      items: [
        "Generator erection",
        "Generator auxiliaries installation",
        "Electrical synchronization support",
      ],
    },
    {
      title: "Structural Fabrication",
      items: [
        "Heavy steel structural fabrication",
        "Industrial structural erection",
        "Power plant structural works",
      ],
    },
    {
      title: "Mechanical Equipment",
      items: [
        "Heavy mechanical equipment installation",
        "Plant machinery erection",
        "Industrial equipment maintenance",
      ],
    },
    {
      title: "Piping Systems",
      items: [
        "Industrial piping installation",
        "High-pressure piping systems",
        "Auxiliary piping works",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
