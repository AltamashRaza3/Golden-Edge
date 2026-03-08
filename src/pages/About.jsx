import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyTimeline from "../components/CompanyTimeline";
import Certifications from "../components/Certifications";
import Awards from "../components/Awards";
import journeyImage from "../assets/images/journey.jpeg";
import founder from "../assets/images/founder.jpg";
import director from "../assets/images/director.jpeg";
import ExpertTeam from "../components/ExpertTeam";
import Policies from "../components/Policies";
import MissionValues from "../components/MissionValues";
import CompanyStats from "../components/CompanyStats";

import {
Building2,
History,
Target,
User,
Users,
ShieldCheck,
} from "lucide-react";

export default function About() {
const [activeTab, setActiveTab] = useState("profile");

useEffect(() => {
  const setTabFromHash = () => {
    const fullHash = window.location.hash;
    const tab = fullHash.split("#")[2];

    const validTabs = [
      "profile",
      "history",
      "mission",
      "founder",
      "management",
      "executive",
      "quality",
    ];

    if (validTabs.includes(tab)) {
      setActiveTab(tab);
    } else {
      setActiveTab("profile");
    }
  };

  setTabFromHash();

  window.addEventListener("hashchange", setTabFromHash);

  return () => window.removeEventListener("hashchange", setTabFromHash);
}, []);

const tabs = [
{ id: "profile", label: "Company Profile", icon: <Building2 size={18} /> },
{ id: "history", label: "History", icon: <History size={18} /> },
{ id: "mission", label: "Mission & Vision", icon: <Target size={18} /> },
{ id: "founder", label: "Founder", icon: <User size={18} /> },
{ id: "management", label: "Board of Director", icon: <Users size={18} /> },
{ id: "executive", label: "Executive Director", icon: <Users size={18} /> },
{ id: "quality", label: "Quality Policy", icon: <ShieldCheck size={18} /> },
];

return (
  <>
    {" "}
    <Navbar />
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Golden Edge Engineering</h1>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed text-lg">
            Delivering engineering excellence in power, infrastructure and
            industrial construction projects across India. Golden Edge
            Engineering combines decades of industry experience with modern
            engineering practices to provide reliable, efficient and
            high-quality project execution.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.location.hash = `/about#${tab.id}`;
              }}
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

        {/* CONTENT */}
        <div className="bg-white shadow-lg p-10 rounded-lg mb-16">
          {/* COMPANY PROFILE */}
          {activeTab === "profile" && (
            <>
              <p className="text-gray-700 leading-relaxed mb-8">
                Golden Edge Engineering Pvt. Ltd. is an ISO 9001:2015 certified
                engineering company engaged in executing electro-mechanical and
                civil construction works for large industrial and thermal power
                plant projects across India. With decades of experience in the
                engineering and construction industry, the company has developed
                strong expertise in mechanical erection, infrastructure
                development, and BTG (Boiler–Turbine–Generator) systems for
                thermal power plants. Golden Edge Engineering has successfully
                delivered complex projects including boiler erection, turbine
                installation, structural fabrication, and balance of plant
                systems.
              </p>

              <CompanyStats />
            </>
          )}

          {/* HISTORY */}
          {activeTab === "history" && (
            <>
              <p className="text-gray-700 leading-relaxed mb-8">
                The company traces its roots back to Golden Construction
                established in 1970. Over the decades the organization expanded
                its capabilities in executing large-scale industrial and power
                generation projects across India. In 2004 the company evolved
                into Golden Edge Engineering Pvt. Ltd., strengthening its
                position as a reliable engineering contractor in the power
                sector.
              </p>

              <div className="mb-12">
                <img
                  src={journeyImage}
                  alt="Golden Edge Engineering Journey"
                  className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
                />
              </div>

              <CompanyTimeline />
            </>
          )}

          {/* MISSION */}
          {activeTab === "mission" && <MissionValues />}

          {/* FOUNDER */}
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
                  Nizam-Ul-Haque established the organization with the vision of
                  providing reliable engineering and construction services to
                  industrial and power sector clients.
                </p>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  At GEEPL, client satisfaction remains the foundation of the
                  company’s philosophy. The organization is committed to
                  delivering projects with professionalism, efficiency and
                  quality workmanship that consistently exceeds expectations.
                </p>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  Under his leadership the company built a strong team of
                  engineers and professionals dedicated to delivering
                  high-quality engineering solutions and maintaining long-term
                  client relationships. At GEEPL, the success of our clients
                  remains our greatest achievement.
                </p>
              </div>
            </div>
          )}

          {/* DIRECTOR */}
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
                  GEEPL continues to grow as an emerging company in the field of
                  mechanical construction with the primary objective of
                  achieving client satisfaction through reliable engineering
                  solutions.
                </p>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  By adopting modern construction technologies and building a
                  strong team of skilled engineers and technicians, the company
                  focuses on completing complex projects within the shortest
                  possible time while maintaining high standards of quality and
                  safety.
                </p>
              </div>
            </div>
          )}

          {/* EXECUTIVE DIRECTOR */}
          {activeTab === "executive" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src={founder}
                alt="Md Azizullah"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />

              <div>
                <h2 className="text-2xl font-semibold">Md. Azizullah</h2>
                <p className="text-yellow-600 mb-4">Executive Director</p>

                <p className="text-gray-700 leading-relaxed">
                  As Executive Director, Md. Azizullah plays a vital role in
                  transforming the company’s strategic vision into operational
                  success. His leadership focuses on strengthening project
                  execution, developing skilled teams and enhancing engineering
                  capabilities.
                </p>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  With a strong emphasis on innovation, efficiency and
                  continuous learning, he drives the organization toward
                  expanding its capabilities while exploring new opportunities
                  in national and international markets.
                </p>
              </div>
            </div>
          )}

          {/* QUALITY */}
          {activeTab === "quality" && (
            <>
              <p className="text-gray-700 leading-relaxed mb-8">
                Golden Edge Engineering Pvt. Ltd. is committed to maintaining
                international standards of quality through continuous
                improvement, strict safety practices and adherence to
                engineering best practices.
              </p>

              <Awards />
              <Certifications />
              <ExpertTeam />
              <Policies />
            </>
          )}
        </div>
      </div>
    </section>
    <Footer />
  </>
);
}
