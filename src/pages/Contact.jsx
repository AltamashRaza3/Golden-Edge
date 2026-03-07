import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate Office */}

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Corporate Office</h2>

              <div className="flex gap-3 mb-3">
                <MapPin className="text-yellow-600" size={20} />
                <a
                  href="https://maps.google.com/?q=B-4+Sector-6+Noida+Uttar+Pradesh"
                  target="_blank"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  B-4, Sector-6, Noida, U.P
                </a>
              </div>

              <div className="flex gap-3 mb-3">
                <Phone className="text-yellow-600" size={20} />
                <a
                  href="tel:01204213009"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  0120-4213009-10
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-600" size={20} />
                <a
                  href="mailto:info@goldenedge.in"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  info@goldenedge.in
                </a>
              </div>
            </div>

            {/* Branch Office */}

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Branch Office</h2>

              <div className="flex gap-3 mb-3">
                <MapPin className="text-yellow-600" size={20} />
                <p className="text-gray-700">
                  Neya Quila, Nawalpur, Siwan, Bihar – 841226
                </p>
              </div>

              <div className="flex gap-3 mb-3">
                <Phone className="text-yellow-600" size={20} />
                <a
                  href="tel:06154223022"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  06154-223022
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-600" size={20} />
                <a
                  href="mailto:info@goldenedge.in"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  info@goldenedge.in
                </a>
              </div>
            </div>

            {/* Registered Office */}

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Registered Office</h2>

              <div className="flex gap-3 mb-3">
                <MapPin className="text-yellow-600" size={20} />
                <p className="text-gray-700">
                  A-229/1, Street No-7, Abul Fazal Enclave-II, Jamia Nagar,
                  Okhla, New Delhi – 110025
                </p>
              </div>

              <div className="flex gap-3 mb-3">
                <Phone className="text-yellow-600" size={20} />
                <a
                  href="tel:+911126976606"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  91-11-26976606
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-600" size={20} />
                <a
                  href="mailto:info@goldenedge.in"
                  className="text-gray-700 hover:text-yellow-600"
                >
                  info@goldenedge.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
