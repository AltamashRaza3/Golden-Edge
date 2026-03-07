import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Company Info */}

        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Golden Edge Engineering
          </h2>

          <p className="text-sm leading-relaxed mb-4">
            Golden Edge Engineering Pvt. Ltd. is an ISO 9001:2015 certified
            engineering company delivering electro-mechanical and civil
            construction solutions for large thermal power plant and
            infrastructure projects across India.
          </p>

          <p className="text-sm text-gray-400">
            ISO 9001:2015 Certified Company
          </p>

          {/* Social */}

          <div className="flex gap-4 mt-4"></div>
        </div>

        {/* Company Links */}
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Company Profile
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              History
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Mission & Vision
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Founder
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Board of Directors
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Quality Policy
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Certifications
            </Link>
          </li>

          <li>
            <Link to="/awards" className="hover:text-yellow-400">
              Awards & Achievements
            </Link>
          </li>
        </ul>

        {/* Services */}

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Mechanical Construction
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Infrastructure Services
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Industrial Rehabilitation
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-yellow-400">
                Completed Projects
              </Link>
            </li>

            <li>
              <Link to="/projects-ongoing" className="hover:text-yellow-400">
                Ongoing Projects
              </Link>
            </li>

            <li>
              <Link to="/clients" className="hover:text-yellow-400">
                Clients
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-sm">
            <a
              href="https://www.google.com/maps/search/B-4+Sector+6+Noida+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-yellow-400"
            >
              <MapPin size={18} className="mt-1" />
              B-4 Sector-6, Noida Uttar Pradesh, India
            </a>

            <p className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:info@goldenedge.in"
                className="hover:text-yellow-400"
              >
                info@goldenedge.in
              </a>
            </p>

            <a
              href="tel:+91 1204213009"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <Phone size={18} />
              0120-4213009
            </a>

            {/* Google Maps */}

            {/* <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 hover:underline"
            >
              View on Google Maps
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}

      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Golden Edge Engineering Pvt. Ltd. All
        Rights Reserved.
      </div>
    </footer>
  );
}
