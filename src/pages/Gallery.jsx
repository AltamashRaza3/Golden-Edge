import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import plant1 from "../assets/images/thermal-power-plant.jpeg";
import plant2 from "../assets/images/industrial-power-station.jpeg";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">
            Project Gallery
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <img src={plant1} className="rounded shadow" />
            <img src={plant2} className="rounded shadow" />
            <img src={plant1} className="rounded shadow" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
