import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import ClientsSlider from "../components/ClientsSlider";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Golden Edge Engineering Pvt Ltd</title>

        <meta
          name="description"
          content="Golden Edge Engineering Pvt Ltd provides engineering services for thermal power plants, industrial infrastructure and power generation projects across India."
        />

        <meta
          name="keywords"
          content="Golden Edge Engineering, power plant construction, thermal power plant engineering, BTG erection services"
        />

        <meta name="author" content="Golden Edge Engineering Pvt Ltd" />
      </Helmet>

      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Projects />
      <ClientsSlider />
      <ContactCTA />
      <Footer />
    </>
  );
}
