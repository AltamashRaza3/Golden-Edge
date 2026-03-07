import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyTimeline from "../components/CompanyTimeline";
import Certifications from "../components/Certifications";
import founder from "../assets/images/founder.jpg";
import director from "../assets/images/director.jpg";
import { Building2,History,Target,User,Users,ShieldCheck,} from "lucide-react";
import Awards from "../components/Awards";

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">
            About Golden Edge Engineering
          </h1>

          {/* Tabs */}

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              {
                id: "profile",
                label: "Company Profile",
                icon: <Building2 size={18} />,
              },
              { id: "history", label: "History", icon: <History size={18} /> },
              {
                id: "mission",
                label: "Mission & Vision",
                icon: <Target size={18} />,
              },
              { id: "founder", label: "Founder", icon: <User size={18} /> },
              {
                id: "management",
                label: "Board of Directors",
                icon: <Users size={18} />,
              },
              {
                id: "quality",
                label: "Quality Policy",
                icon: <ShieldCheck size={18} />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded font-medium transition ${
                  activeTab === tab.id
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-200 hover:bg-gray-300 hover:scale-105"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Card */}

          <div className="bg-white shadow-lg p-10 rounded-lg mb-16">
            {/* Company Profile */}

            {activeTab === "profile" && (
              <p className="text-gray-700 leading-relaxed">
                Golden Edge Engineering Pvt. Ltd. is an ISO 9001:2015 certified
                engineering company engaged in executing electro-mechanical and
                civil construction works for large industrial and thermal power
                plant projects across India. With decades of experience in the
                engineering and construction industry, the company has developed
                strong expertise in mechanical erection, infrastructure
                development, and industrial project execution. Golden Edge
                Engineering has successfully delivered complex power plant
                construction works including boiler erection, turbine
                installation, structural fabrication, and balance of plant
                systems. The organization has built long-term relationships with
                major public sector utilities and private power companies by
                consistently delivering projects with high standards of quality,
                safety, and efficiency. Through a dedicated team of engineers,
                technicians, and project professionals, the company ensures
                timely execution of projects while maintaining strict compliance
                with engineering standards. Golden Edge Engineering continues to
                expand its presence across India by undertaking challenging
                infrastructure and power sector projects while maintaining its
                commitment to reliability, technical excellence, and client
                satisfaction.
              
              </p>
            )}

            {/* History */}

            {activeTab === "history" && (
              <p className="text-gray-700 leading-relaxed">
                The company traces its roots back to Golden Construction
                established in 1970. Over the years the organization has grown
                into a trusted engineering partner delivering large-scale
                infrastructure and power generation projects across India.
              </p>
            )}

            {/* Mission & Vision */}

            {activeTab === "mission" && (
              <div className="space-y-12">
                {/* Mission */}

                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                    Our Mission
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The personnel of Golden Edge Engineering Pvt. Ltd. are
                    committed to providing construction and engineering services
                    in a professional manner that exceeds the expectations of
                    our clients.
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Deliver quality projects on time and within budget.</li>
                    <li>
                      Maintain the highest standards of safety and workmanship.
                    </li>
                    <li>
                      Build long-term relationships through clear communication
                      with clients.
                    </li>
                    <li>
                      Expand engineering capabilities across different
                      geographies.
                    </li>
                  </ul>
                </div>

                {/* Vision */}

                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                    Our Vision
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    To become a leading engineering and construction company in
                    the power generation and infrastructure sector by
                    consistently delivering reliable, safe and high-quality
                    engineering solutions while maintaining long-term
                    partnerships with clients.
                  </p>
                </div>

                {/* Core Values */}

                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-6 text-yellow-600">
                    Core Values
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                      <strong>Excellence</strong>
                      <p className="text-sm mt-1">
                        Striving for excellence in planning, execution and
                        project management to maximize client satisfaction.
                      </p>
                    </div>

                    <div>
                      <strong>Teamwork</strong>
                      <p className="text-sm mt-1">
                        Working together with trust and collaboration to achieve
                        shared goals.
                      </p>
                    </div>

                    <div>
                      <strong>Innovation</strong>
                      <p className="text-sm mt-1">
                        Delivering customized engineering solutions for complex
                        industrial challenges.
                      </p>
                    </div>

                    <div>
                      <strong>Accountability</strong>
                      <p className="text-sm mt-1">
                        Taking responsibility for commitments, actions and
                        project outcomes.
                      </p>
                    </div>

                    <div>
                      <strong>Employee Recognition</strong>
                      <p className="text-sm mt-1">
                        Valuing and empowering employees who contribute to
                        company growth and success.
                      </p>
                    </div>

                    <div>
                      <strong>Continuous Learning</strong>
                      <p className="text-sm mt-1">
                        Continuously improving skills, processes and engineering
                        standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Founder */}

            {activeTab === "founder" && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  src={founder}
                  alt="Mr Nizam Ul Haque"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />

                <div>
                  <h2 className="text-2xl font-semibold">Mr. Nizam-Ul-Haque</h2>

                  <p className="text-yellow-600 mb-4">Founder</p>

                  <p className="text-gray-700 leading-relaxed">
                    As the founder of Golden Edge Engineering Pvt. Ltd., Mr.
                    Nizam-Ul-Haque established the organization with the vision
                    of providing reliable engineering and construction services
                    to industrial and power sector clients.
                  </p>

                  <p className="text-gray-700 leading-relaxed mt-4">
                    At GEEPL, client satisfaction remains the foundation of the
                    company’s philosophy. The organization is committed to
                    delivering projects with professionalism, efficiency, and
                    quality workmanship that consistently exceeds client
                    expectations.
                  </p>

                  <p className="text-gray-700 leading-relaxed mt-4">
                    Under his leadership, the company built a strong team of
                    engineers and professionals dedicated to delivering
                    high-quality engineering solutions and maintaining long-term
                    relationships with clients.
                  </p>
                </div>
              </div>
            )}

            {/* Board of Directors */}

            {activeTab === "management" && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  src={director}
                  alt="Mr Sk Amaan"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />

                <div>
                  <h2 className="text-2xl font-semibold">Mr. Sk. Amaan</h2>

                  <p className="text-yellow-600 mb-4">Director</p>

                  <p className="text-gray-700 leading-relaxed">
                    GEEPL is one of the emerging companies in the field of
                    mechanical construction where the ultimate aim is to work
                    towards client satisfaction. Facing upcoming challenges and
                    opportunities, the company is determined to expand its
                    business across different geographical regions.
                  </p>

                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Golden Edge Engineering embraces modern construction
                    technologies to help clients build and grow their businesses
                    while maintaining the highest standards of engineering and
                    project execution.
                  </p>
                </div>
              </div>
            )}

            {/* Quality Policy */}

            {activeTab === "quality" && (
              <p className="text-gray-700 leading-relaxed">
                Golden Edge Engineering is committed to maintaining
                international quality standards through continuous improvement,
                safety practices, and client satisfaction.
              </p>
            )}
          </div>

          {/* Timeline */}

          <CompanyTimeline />
          <Awards />
          <Certifications />
        </div>
      </section>

      <Footer />
    </>
  );
}
