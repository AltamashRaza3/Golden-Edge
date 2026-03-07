import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Infrastructure() {
  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Infrastructure</h1>

          <p className="text-gray-700 leading-relaxed">
            Golden Edge Engineering operates with modern machinery, equipment
            and engineering resources required for executing large scale
            industrial and power plant projects.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
