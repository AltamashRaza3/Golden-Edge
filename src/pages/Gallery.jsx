import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🔥 Load images
const images = import.meta.glob("/src/assets/webp-images/**/*.webp", {
  eager: true,
});

// 🔥 Group images
const groupedImages = {};
Object.keys(images).forEach((path) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];

  if (!groupedImages[folder]) {
    groupedImages[folder] = [];
  }

  groupedImages[folder].push(images[path].default);
});

const categoryNames = {
  ACC: "Air Cooled Condenser",
  Boiler: "Boiler & Auxiliaries",
  ESP: "Electrostatic Precipitator",
  STG: "Steam Turbine Generator",
};

export default function Gallery() {
  const categories = Object.keys(groupedImages).filter((cat) => cat !== "Home");

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currentImages = groupedImages[activeCategory] || [];

  // 🔥 Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === currentImages.length - 1 ? 0 : prev + 1,
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? currentImages.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, currentImages.length]);

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">
            Project Gallery
          </h1>

          {/* Categories */}
          <div className="flex gap-3 flex-wrap justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(9);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-lg transition ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {categoryNames[cat] || cat} ({groupedImages[cat]?.length || 0})
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentImages.slice(0, visibleCount).map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="project"
                loading="lazy"
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.05 }}
                className="rounded shadow w-full h-64 object-cover cursor-pointer"
              />
            ))}
          </div>

          {/* Load More */}
          {visibleCount < currentImages.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Load More
              </button>
            </div>
          )}

          {/* 🔥 Lightbox with Animation */}
          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-5 right-5 text-white text-3xl"
                >
                  ✕
                </button>

                {/* Prev */}
                <button
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === 0 ? currentImages.length - 1 : prev - 1,
                    )
                  }
                  className="absolute left-5 text-white text-3xl"
                >
                  ‹
                </button>

                {/* Image */}
                <motion.img
                  key={selectedIndex}
                  src={currentImages[selectedIndex]}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="max-h-[80vh] max-w-[90vw] rounded-lg"
                />

                {/* Next */}
                <button
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === currentImages.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="absolute right-5 text-white text-3xl"
                >
                  ›
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  );
}
