import heroImage from "../assets/images/hero-power-plant.jpeg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Thermal Power Plant"
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          50+ Years of Excellence in
          <br />
          Thermal Power Plant Engineering
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Delivering reliable Boiler–Turbine–Generator (BTG) engineering
          solutions for power plants across India.
        </p>

        <div className="flex gap-4">
          {/* Explore Projects */}
          <Link
            to="/projects"
            className="bg-yellow-500 px-6 py-3 rounded font-semibold text-black hover:bg-yellow-400 transition"
          >
            Explore Projects
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            className="border px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
