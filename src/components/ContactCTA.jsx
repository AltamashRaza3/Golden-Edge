import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a Project in Mind?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Golden Edge Engineering is ready to deliver reliable engineering
          solutions for your thermal power plant and industrial infrastructure
          projects.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-yellow-500 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
