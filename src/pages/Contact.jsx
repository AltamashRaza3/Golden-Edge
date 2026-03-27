import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      title: "Corporate Office",
      address: "B-4, Sector-6, Noida, Uttar Pradesh, India",
      map: "https://maps.google.com/?q=B-4+Sector-6+Noida+Uttar+Pradesh",
      phone: "0120-4213009-10",
      tel: "+911204213009",
      email: "info@goldenedge.in",
    },
    {
      title: "Branch Office",
      address: "Neya Quila, Nawalpur, Siwan, Bihar – 841226, India",
      map: "https://maps.google.com/?q=Neya+Quila+Nawalpur+Siwan+Bihar+841226",
      phone: "06154-223022",
      tel: "06154223022",
      email: "info@goldenedge.in",
    },
    {
      title: "Registered Office",
      address:
        "A-229/1, Street No-7, Abul Fazal Enclave-II, Jamia Nagar, Okhla, New Delhi – 110025, India",
      map: "https://maps.google.com/?q=A-229/1+Street+No+7+Abul+Fazal+Enclave+II+Jamia+Nagar+New+Delhi+110025",
      phone: "91-11-26976606",
      tel: "+911126976606",
      email: "info@goldenedge.in",
    },
  ];

  return (
    <>
      {/* 🔥 SEO META */}
      <Helmet>
        <title>
          Contact Golden Edge Engineering | Power Plant Contractors India
        </title>

        <meta
          name="description"
          content="Contact Golden Edge Engineering Pvt. Ltd. for thermal power plant construction, BTG services, and industrial engineering projects. Offices in Noida, Delhi, and Bihar."
        />

        <meta
          name="keywords"
          content="contact Golden Edge Engineering, power plant contractors India contact, BTG services contact, engineering company India contact"
        />

        <meta name="author" content="Golden Edge Engineering Pvt Ltd" />

        <link rel="canonical" href="https://www.goldenedge.in/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Golden Edge Engineering" />
        <meta
          property="og:description"
          content="Reach out to Golden Edge Engineering for power plant and industrial engineering services across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldenedge.in/contact" />
        <meta
          property="og:image"
          content="https://www.goldenedge.in/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Golden Edge Engineering" />
        <meta
          name="twitter:description"
          content="Get in touch with our engineering team for project inquiries."
        />
        <meta
          name="twitter:image"
          content="https://www.goldenedge.in/preview.jpg"
        />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center mb-12">
            Contact Golden Edge Engineering
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
              >
                <h2 className="text-xl font-semibold mb-4">{office.title}</h2>

                {/* Address */}
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-yellow-600 mt-1" size={20} />

                  <a
                    href={office.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${office.title} location on Google Maps`}
                    className="text-gray-700 hover:text-yellow-600 cursor-pointer break-words transition"
                  >
                    {office.address}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 mb-3">
                  <Phone className="text-yellow-600 mt-1" size={20} />

                  <a
                    href={`tel:${office.tel}`}
                    aria-label={`Call ${office.phone}`}
                    className="text-gray-700 hover:text-yellow-600 cursor-pointer transition"
                  >
                    {office.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="text-yellow-600 mt-1" size={20} />

                  <a
                    href={`mailto:${office.email}?subject=Inquiry from Golden Edge Website`}
                    aria-label={`Email ${office.email}`}
                    className="text-gray-700 hover:text-yellow-600 cursor-pointer transition"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
