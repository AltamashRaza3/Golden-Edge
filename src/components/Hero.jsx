import heroImage from "../assets/images/hero-power-plant.jpeg";
import CountUp from "react-countup";
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
      <div className="relative w-full px-10 lg:px-20 text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          50+ Years of Excellence in Thermal Power Plant Engineering
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg max-w-3xl">
          At Golden Edge Engineering Pvt. Ltd. (GEEPL), we specialize in
          complete Erection, Testing, and Assistance to Commissioning of
          Boiler–Turbine–Generator (BTG) systems and all their auxiliaries for
          Thermal Power Plants.
        </p>

        <p className="text-lg md:text-xl mt-4 mb-8 max-w-xl">
          Delivering reliable Boiler–Turbine–Generator (BTG) engineering
          solutions for power plants across India.
        </p>

        {/* Company Highlights */}
        <div className="flex flex-wrap gap-10 mb-10">
          <div>
            <p className="text-3xl font-bold text-yellow-400">
              <CountUp end={50} duration={2.5} />+
            </p>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-400">
              <CountUp end={2500} duration={2.5} separator="," />+
            </p>
            <p className="text-sm text-gray-300">Skilled Workforce</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-400">
              <CountUp start={0} end={18} duration={2} />–
              <CountUp start={0} end={800} duration={2.5} delay={0.3} />
            </p>
            <p className="text-sm text-gray-300">BTG Capacity Range</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="bg-yellow-500 px-6 py-3 rounded font-semibold text-black hover:bg-yellow-400 transition"
          >
            Explore Projects
          </Link>

          <Link
            to="/contact"
            className="border bg-white/10 px-6 py-3 rounded font-medium backdrop-blur-sm hover:bg-white hover:text-black hover:-translate-y-0.5 transition duration-300"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
