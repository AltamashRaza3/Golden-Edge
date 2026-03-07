import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
      : "hover:text-yellow-400";

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-lg font-bold text-yellow-400"
          onClick={closeMobile}
        >
          Golden Edge
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={linkStyle}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/clients" className={linkStyle}>
              Clients
            </NavLink>
          </li>

          <li>
            <NavLink to="/infrastructure" className={linkStyle}>
              Infrastructure
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" className={linkStyle}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <NavLink to="/" onClick={closeMobile} className={linkStyle}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMobile} className={linkStyle}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={closeMobile}
                className={linkStyle}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                onClick={closeMobile}
                className={linkStyle}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/clients"
                onClick={closeMobile}
                className={linkStyle}
              >
                Clients
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/infrastructure"
                onClick={closeMobile}
                className={linkStyle}
              >
                Infrastructure
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                onClick={closeMobile}
                className={linkStyle}
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMobile}
                className={linkStyle}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
