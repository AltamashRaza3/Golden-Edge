import founder from "../assets/images/founder.jpg";
import director from "../assets/images/director.jpeg";
import executive from "../assets/images/founder.jpg";

export default function LeadershipSection({ activeTab }) {
  const leaders = {
    founder: {
      name: "Mr. Nizam-Ul-Haque",
      role: "Founder, Golden Edge Engineering Pvt. Ltd.",
      image: founder,
      message: `
It is my pleasure to introduce Golden Edge Engineering Pvt. Ltd. (GEEPL) to you.

At GEEPL, we believe that client satisfaction is the cornerstone of a lasting reputation. Our commitment is to deliver projects with a professional, efficient, and friendly approach, always striving to surpass client expectations.

Being recognized as an experienced leader in the industry reflects our dedication to professional client service, technical excellence, and quality workmanship — today and in the future.

We take pride in our team of talented engineers and professionals, whose dedication has earned us repeat projects from many of our clients.

At GEEPL, your success is our success. We are committed to helping our clients achieve their goals with reliable, high-quality, and timely solutions in Thermal Power Plant construction and BTG systems.
      `,
    },

    management: {
      name: "Mr. Sk. Amaan",
      role: "Director, Golden Edge Engineering Pvt. Ltd.",
      image: director,
      message: `
GEEPL is a dynamic and forward-looking company in the field of mechanical construction, with a strong focus on client satisfaction and value creation. In today’s era of modern technology, completing projects in the shortest possible time is essential to help clients save significant investment and achieve operational efficiency.
At GEEPL, we understand that embracing innovative construction technologies is no longer optional — it is the need of the hour. We are constantly exploring and adopting advanced methods and solutions to ensure our clients benefit from faster, safer, and more reliable project execution.
We are also mindful of the current challenge in the industry: the availability of skilled manpower. By nurturing and deploying our team of experienced engineers and technicians, we ensure that every project is executed efficiently, safely, and to the highest standards.
Looking ahead, GEEPL is expanding its footprint across different geographical regions by exploring opportunities in international markets. Our goal is to bring our expertise, innovative solutions, and trusted project delivery closer to clients worldwide, helping them achieve their goals wherever they operate.
When you place your trust in GEEPL, we commit to delivering solutions that exceed expectations, combining modern technology, skilled execution, and timely completion to create lasting value for our clients.
      `,
    },

    executive: {
      name: "Md. Azizullah",
      role: "Executive Director, Golden Edge Engineering Pvt. Ltd.",
      image: executive,
      message: `
At GEEPL, my role is to turn our vision into action on the ground. Over the years, we have grown not just in size, but in capability, expertise, and reach, taking on increasingly complex Thermal Power Plant projects.

We focus on strengthening our teams — investing in training, skill development, and mentoring — because skilled and motivated people are the backbone of every successful project.

In a competitive and fast-moving industry, we balance innovation, cost efficiency, and timely delivery, ensuring our clients’ investments are protected.

Looking forward, GEEPL is exploring opportunities beyond India, applying our systems, experience, and expertise to new international markets while maintaining our reliability and technical excellence.

I am proud to be part of a company where teamwork, perseverance, and continuous learning drive every project forward. At GEEPL, we don’t just build projects — we build partnerships, capabilities, and a legacy of excellence.
      `,
    },
  };

  const leader = leaders[activeTab];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      />

      <div>
        <h2 className="text-2xl font-semibold">{leader.name}</h2>

        <p className="text-yellow-600 mb-4">{leader.role}</p>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {leader.message}
        </p>
      </div>
    </div>
  );
}
