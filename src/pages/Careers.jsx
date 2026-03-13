import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Careers() {
  const jobs = [
    {
      title: "Manager – Projects",
      department: "Mechanical",
      experience: "10+ Years",
      qualification: "BE Mechanical / Equivalent",
      location: "Anywhere in India",
    },
    {
      title: "Coordinator – Projects",
      department: "Mechanical",
      experience: "5+ Years",
      qualification: "BE Mechanical / Equivalent",
      location: "Anywhere in India",
    },
    {
      title: "Graduate Engineer Trainee (GET)",
      department: "Mechanical",
      experience: "Freshers",
      qualification: "B.Tech Mechanical",
      location: "Anywhere in India",
    },
    {
      title: "Accountant",
      department: "Accounts",
      experience: "1+ Year",
      qualification: "B.Com",
      location: "Noida / Project Sites",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-24 pb-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career With Us
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Golden Edge Engineering Pvt. Ltd. is continuously seeking talented
            engineers, technicians and professionals who are passionate about
            contributing to large-scale thermal power and infrastructure
            projects across India.
          </p>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Opportunities
          </h2>

          {jobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <h3 className="text-xl font-semibold text-yellow-600 mb-6">
                    {job.title}
                  </h3>

                  {/* JOB DETAILS GRID */}
                  <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-6">
                    <span className="font-medium">Department</span>
                    <span>{job.department}</span>

                    <span className="font-medium">Qualification</span>
                    <span>{job.qualification}</span>

                    <span className="font-medium">Experience</span>
                    <span>{job.experience}</span>

                    <span className="font-medium">Location</span>
                    <span>{job.location}</span>
                  </div>

                  {/* APPLY BUTTON */}
                  <a
                    href={`mailto:careers@goldenedge.com?subject=Application for ${job.title}`}
                    className="inline-block bg-yellow-500 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-400 transition"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Currently there are no open positions. Please check again later.
            </p>
          )}
        </div>
      </section>

      {/* HR CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-50 shadow-lg rounded-lg p-10">
            <h2 className="text-2xl font-semibold mb-4">Send Your Resume</h2>

            <p className="text-gray-600 mb-6">
              If you are interested in joining Golden Edge Engineering Pvt.
              Ltd., you may send your updated resume to our HR department.
            </p>

            <a
              href="mailto:info@goldenedge.in"
              className="text-lg font-semibold text-yellow-600 hover:underline"
            >
              info@goldenedge.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
