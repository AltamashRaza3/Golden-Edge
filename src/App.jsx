import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import Infrastructure from "./pages/Infrastructure";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ClientsPage from "./pages/ClientsPage";
import OngoingProjects from "./pages/OngoingProjects";
import ScrollToTop from "./components/ScrollToTop";
import AwardsPage from "./pages/AwardsPage";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects-ongoing" element={<OngoingProjects />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
