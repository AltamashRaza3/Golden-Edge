import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Images
import img1 from "../assets/webp-images/Home/boiler.webp";
import img2 from "../assets/webp-images/Home/Gadarwara.webp";
import img3 from "../assets/webp-images/Home/ntpc_North_Karanpura_Thermal_Power_Station.webp";

const heroImages = [img1, img2, img3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden"
    >
      {/* Background Carousel */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={heroImages[index]}
          alt="Power Plant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-10 lg:px-20 text-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.15] max-w-5xl"
        >
          <span className="text-yellow-400">
            <CountUp end={50} duration={2.5} />+ Years
          </span>{" "}
          of Excellence in Thermal Power Plant Engineering
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed"
        >
          Golden Edge Engineering Pvt. Ltd. (GEEPL) specializes in complete
          erection, testing, and commissioning of Boiler–Turbine–Generator (BTG)
          systems for thermal power plants.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 mb-10 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Delivering reliable engineering solutions across India with precision,
          safety, and quality.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-8 md:gap-12 mb-10"
        >
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
              <CountUp end={50} duration={2.5} />+
            </p>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
              <CountUp end={2500} duration={2.5} separator="," />+
            </p>
            <p className="text-sm text-gray-300">Skilled Workforce</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
              <CountUp end={18} duration={2} /> MW –{" "}
              <CountUp end={800} duration={2.5} /> MW
            </p>
            <p className="text-sm text-gray-300">BTG Capacity Range</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/gallery"
            className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-black hover:bg-yellow-400 transition"
          >
            Explore Projects
          </Link>

          <Link
            to="/contact"
            className="border border-white/40 px-6 py-3 rounded-lg font-medium backdrop-blur-sm hover:bg-white hover:text-black transition"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
