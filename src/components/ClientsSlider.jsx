import bihar from "../assets/logos/bihar-electricity-board.jpg";
import dvc from "../assets/logos/damodar-valley-corporation.jpg";
import gsecl from "../assets/logos/gsecl.png.jpg";
import kpcl from "../assets/logos/kpcl.png";
import mahatransco from "../assets/logos/maha-transco.png";
import ntpc from "../assets/logos/ntpc.png";
import punjab from "../assets/logos/punjab-state-electricity.jpg";
import reliance from "../assets/logos/reliance.png";
import rvunl from "../assets/logos/rvunl.jpg";
import tata from "../assets/logos/tata-power.png";
import tneb from "../assets/logos/tneb.png";


export default function ClientsSlider() {
  const clients = [
    bihar,
    dvc,
    gsecl,
    kpcl,
    mahatransco,
    ntpc,
    punjab,
    reliance,
    rvunl,
    tata,
    tneb,
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Trusted by Leading Power Companies
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Golden Edge Engineering has successfully executed projects for major
          power utilities and infrastructure companies across India.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-scroll items-center">
            {[...clients, ...clients].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="client logo"
                loading="lazy"
                className="h-14 object-contain hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
