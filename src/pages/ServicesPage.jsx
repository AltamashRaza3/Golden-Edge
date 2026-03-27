import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Flame, Wind, Zap, Wrench, Factory, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 Images (Hero Carousel)
import img1 from "../assets/webp-images/Home/pic 3.webp";
import img2 from "../assets/webp-images/Boiler/pic 10.webp";
import img3 from "../assets/webp-images/ESP/pic 3.webp";
import img4 from "../assets/webp-images/STG/pic 36.webp";

const showcaseImages = [img1, img2, img3, img4];

export default function ServicesPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      {/* 🔥 SEO META */}
      <Helmet>
        <title>
          Power Plant Construction Services | Boiler, Turbine & BTG Experts
          India
        </title>

        <meta
          name="description"
          content="Golden Edge Engineering provides boiler erection, turbine installation, generator setup, piping systems, and complete BTG services for thermal power plants and industrial projects across India."
        />

        <meta
          name="keywords"
          content="boiler erection services, turbine installation India, BTG services India, power plant construction services, industrial piping systems, generator installation"
        />

        <meta name="author" content="Golden Edge Engineering Pvt Ltd" />

        <link rel="canonical" href="https://www.goldenedge.in/services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Power Plant Construction Services | Golden Edge Engineering"
        />
        <meta
          property="og:description"
          content="Explore our specialized services in boiler, turbine, generator, and BTG systems for thermal power plants across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldenedge.in/services" />
        <meta
          property="og:image"
          content="https://www.goldenedge.in/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Power Plant Construction Services"
        />
        <meta
          name="twitter:description"
          content="Boiler, turbine, generator and BTG services for power plants in India."
        />
        <meta
          name="twitter:image"
          content="https://www.goldenedge.in/preview.jpg"
        />
      </Helmet>

      <Navbar />

      {/* 🔥 HERO */}
      <section className="relative pt-24 h-[75vh] md:h-[85vh] lg:h-[90vh] flex items-center text-white overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={index}
            src={showcaseImages[index]}
            alt="Thermal power plant construction and BTG engineering services"
            loading="eager"
            fetchPriority="high"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover scale-110 lg:scale-125"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

        <div className="relative text-center px-6 max-w-3xl mx-auto backdrop-blur-[1px]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Our Services
          </h1>

          <p className="text-gray-100 text-lg md:text-xl">
            Specialized construction and engineering services for thermal power
            plants and industrial infrastructure.
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-yellow-100 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 h-[2px] w-10 bg-yellow-400 group-hover:w-16 transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Your Next Project
        </h2>

        <p className="mb-6 text-gray-300">
          Connect with our engineering team to discuss your requirements.
        </p>

        <Link
          to="/contact"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </>
  );
}
