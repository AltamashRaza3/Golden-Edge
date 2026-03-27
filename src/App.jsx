import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home"; // ✅ FIXED

const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const OngoingProjects = lazy(() => import("./pages/OngoingProjects"));
const AwardsPage = lazy(() => import("./pages/AwardsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
