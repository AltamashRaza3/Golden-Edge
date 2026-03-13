import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyTimeline from "../components/CompanyTimeline";
import Certifications from "../components/Certifications";
import Awards from "../components/Awards";
import journeyImage from "../assets/images/journey.jpeg";

import ExpertTeam from "../components/ExpertTeam";
import Policies from "../components/Policies";
import MissionValues from "../components/MissionValues";
import CompanyStats from "../components/CompanyStats";
import LeadershipSection from "../components/LeadershipSection";

import {
  Building2,
  History,
  Target,
  User,
  Users,
  ShieldCheck,
} from "lucide-react";
import ClientRequirements from "../components/ClientRequirements";
import Philosophy from "../components/Philosophy";

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
      <Navbar />

      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* PAGE HEADER */}

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">
              About Golden Edge Engineering
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed text-lg">
              Delivering engineering excellence in power, infrastructure and
              industrial construction projects across India. Golden Edge
              Engineering combines decades of industry experience with modern
              engineering practices to provide reliable, efficient and
              high-quality project execution.
            </p>
          </div>

          {/* TABS */}

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

          {/* CONTENT CONTAINER */}

          <div className="bg-white shadow-lg p-6 rounded-lg mb-16">
            {/* COMPANY PROFILE */}

            {activeTab === "profile" && (
              <>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Golden Edge Engineering Pvt. Ltd. is an ISO 9001:2015
                  certified engineering company engaged in executing
                  electro-mechanical and civil construction works for large
                  industrial and thermal power plant projects across India. With
                  decades of experience in the engineering and construction
                  industry, the company has developed strong expertise in
                  mechanical erection, infrastructure development, and BTG
                  (Boiler–Turbine–Generator) systems for thermal power plants.
                </p>

                <CompanyStats />
              </>
            )}

            {/* HISTORY */}

            {activeTab === "history" && (
              <>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The company traces its roots back to Golden Construction
                  established in 1970. Over the decades the organization
                  expanded its capabilities in executing large-scale industrial
                  and power generation projects across India. In 2004 the
                  company evolved into Golden Edge Engineering Pvt. Ltd.,
                  strengthening its position as a reliable engineering
                  contractor in the power sector.
                </p>

                <div className="mb-12">
                  <img
                    src={journeyImage}
                    alt="Golden Edge Engineering Journey"
                    className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
                  />
                </div>

                <CompanyTimeline />
                <ClientRequirements />
              </>
            )}

            {/* MISSION */}

            {activeTab === "mission" && (
              <>
                <MissionValues />
                <Philosophy />
              </>
            )}

            {/* LEADERSHIP SECTION */}

            {["founder", "management", "executive"].includes(activeTab) && (
              <LeadershipSection activeTab={activeTab} />
            )}

            {/* QUALITY / CERTIFICATIONS */}

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