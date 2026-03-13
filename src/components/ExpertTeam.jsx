export default function ExpertTeam() {
  const team = [
    {
      name: "Dr. Jitendra Kumar",
      role: "Former Executive Director, BHEL",
      image: null,
      desc: "Dr. Jitendra Kumar brings more than three decades of experience in the power sector. During his tenure at BHEL he led several major thermal power projects and EPC assignments, contributing significantly to the development and execution of large-scale power plant installations across India.",
    },
    {
      name: "Mr. Arbind Koul",
      role: "Hydro Power Specialist",
      image: null,
      desc: "Mr. Arbind Koul has over 40 years of experience in hydro power projects including renovation, modernization and uprating of hydro power stations as well as execution of new hydro power plants with capacities up to 310 MW.",
    },
    {
      name: "Mr. B.K. Raina",
      role: "Electrical Engineering & Commercial Expert",
      image: null,
      desc: "Mr. B.K. Raina has extensive experience in electrical engineering and commercial management of power projects including tendering, contract administration and coordination with government agencies, consultants and project stakeholders.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Expert Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition text-center"
            >
              {/* Photo placeholder / future image */}

              <div className="flex justify-center mb-4">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    Photo
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>

              <p className="text-yellow-600 text-sm mb-3">{member.role}</p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
