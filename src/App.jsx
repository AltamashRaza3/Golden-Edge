import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
