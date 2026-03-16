import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import BTGExpertise from "../components/BTGExpertise";
import SupportingExpertise from "../components/SupportingExpertise";
import ClientRequirements from "../components/ClientRequirements";
import SafetyQuality from "../components/SafetyQuality";
import Projects from "../components/Projects";
import ClientsSlider from "../components/ClientsSlider";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Golden Edge Engineering Pvt Ltd | Thermal Power Plant Engineering
        </title>

        <meta
          name="description"
          content="Golden Edge Engineering Pvt Ltd specializes in erection, testing, and commissioning assistance of Boiler-Turbine-Generator (BTG) systems for thermal power plants across India."
        />

        <meta
          name="keywords"
          content="Golden Edge Engineering, BTG erection services, thermal power plant engineering, power plant construction India"
        />

        <meta name="author" content="Golden Edge Engineering Pvt Ltd" />
      </Helmet>

      <Navbar />

      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />

      <BTGExpertise />
      <SupportingExpertise />
      <ClientRequirements />

      <SafetyQuality />

      <Projects />
      <ClientsSlider />

      <ContactCTA />
      <Footer />
    </>
  );
}
