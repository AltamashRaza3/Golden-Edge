import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ongoingProjects } from "../data/projectsdata";

export default function OngoingProjects() {
return (
<> <Navbar />

  <section className="pt-24 pb-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-8">
        Ongoing Projects
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
        Golden Edge Engineering Pvt. Ltd. is currently executing several
        major thermal power and infrastructure projects across India,
        delivering high-quality engineering solutions for leading
        organizations in the power sector.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {ongoingProjects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">

            <h3 className="text-lg font-semibold mb-2">
              {project.project}
            </h3>

            <p className="text-sm text-gray-600">
              <strong>Client:</strong> {project.client}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {project.location}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Capacity:</strong> {project.capacity}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {project.scope}
            </p>

          </div>
        ))}

      </div>

    </div>
  </section>

  <Footer />
</>


);
}
