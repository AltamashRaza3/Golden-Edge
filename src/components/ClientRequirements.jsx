export default function ClientRequirements() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Meeting Client Requirements
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              At Golden Edge Engineering Pvt. Ltd. (GEEPL), we work in close
              coordination with clients and architects to provide innovative,
              practical solutions from planning to execution. Our approach
              ensures that projects are completed on time, and often ahead of
              schedule, without compromising on quality, functionality, or
              safety.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We maintain a dedicated project management team from project
              initiation to completion, enabling seamless communication,
              collaboration, and leadership throughout the entire project
              lifecycle. Our employees are trained to listen and respond to
              client needs, delivering solutions rather than problems.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              By leveraging advanced client-provided technologies and the
              expertise of our experienced workforce, we successfully execute
              complex engineering assignments across thermal power plants and
              other heavy industrial sectors.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At GEEPL, our focus on innovation, quality, and reliability allows
              us to deliver mission-critical projects while meeting strict
              schedule, safety, and performance standards.
            </p>
          </div>

          {/* Highlight Card */}

          <div className="group bg-gray-50 shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:shadow-xl active:-translate-y-1 border border-transparent">
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">
              Key Milestone
            </h3>

            <p className="text-gray-700 mb-3">
              Erection, Testing & Commissioning of India's first super-critical
              Thermal Power Plant
            </p>

            <p className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-yellow-600">
              NTPC Sipat – Bilaspur, Chhattisgarh
            </p>

            <p className="text-gray-600 mt-2">Capacity: 660 MW</p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              This landmark project represents a privileged milestone in India's
              thermal power history and demonstrates GEEPL’s capability in
              executing large-scale Boiler-Turbine-Generator (BTG) systems and
              auxiliaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
