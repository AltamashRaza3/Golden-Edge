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
        {/* Primary SEO */}
        <title>
          Golden Edge Engineering Pvt Ltd | Thermal Power Plant & BTG Experts in
          India
        </title>

        <meta
          name="description"
          content="Golden Edge Engineering Pvt. Ltd. is a leading contractor specializing in thermal power plant construction, Boiler-Turbine-Generator (BTG) erection, and industrial infrastructure projects across India with over 50 years of experience."
        />

        <meta
          name="keywords"
          content="thermal power plant construction, BTG erection services, boiler turbine generator India, power plant contractors India, Golden Edge Engineering"
        />

        <meta name="author" content="Golden Edge Engineering Pvt Ltd" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.goldenedge.in/" />

        {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
        <meta property="og:title" content="Golden Edge Engineering Pvt Ltd" />
        <meta
          property="og:description"
          content="Experts in thermal power plant construction and BTG systems with 50+ years of experience across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldenedge.in/" />
        <meta
          property="og:image"
          content="https://www.goldenedge.in/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Golden Edge Engineering Pvt Ltd" />
        <meta
          name="twitter:description"
          content="Thermal power plant engineering and BTG experts in India."
        />
        <meta
          name="twitter:image"
          content="https://www.goldenedge.in/preview.jpg"
        />
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
