export default function ExpertTeam() {

const team = [
{
name: "Dr. Jitendra Kumar",
role: "Former Executive Director, BHEL",
desc: "Dr. Jitendra Kumar brings over three decades of experience in thermal power projects. He has led major EPC and ETC projects and introduced innovative engineering practices across large-scale power installations.",
},
{
name: "Mr. Arbind Koul",
role: "Hydro Power Specialist",
desc: "With over 40 years of experience in hydro power projects, Mr. Koul has successfully executed multiple renovations, upratings, and new hydro plant constructions up to 310 MW capacity.",
},
{
name: "Mr. B.K. Raina",
role: "Electrical Engineering & Commercial Expert",
desc: "Mr. Raina has extensive experience in tendering, contract management, and commercial operations for power projects, coordinating with government agencies and consultants.",
},
];

return ( <section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-12">
      Our Expert Team
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {team.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
        >

          <h3 className="text-xl font-semibold mb-1">
            {member.name}
          </h3>

          <p className="text-yellow-600 text-sm mb-3">
            {member.role}
          </p>

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
