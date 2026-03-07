import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OngoingProjects() {
  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Ongoing Projects</h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            Golden Edge Engineering continues to execute several large-scale
            power plant and infrastructure projects across India.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>Thermal Power Plant Expansion Project</li>
            <li>Boiler Installation Project</li>
            <li>Industrial Power Infrastructure Development</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
