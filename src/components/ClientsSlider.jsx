import bihar from "../assets/webp-images/logos/bihar-electricity-board.webp";
import dvc from "../assets/webp-images/logos/damodar-valley-corporation.webp";
import gsecl from "../assets/webp-images/logos/gsecl.webp";
import kpcl from "../assets/webp-images/logos/kpcl.webp";
import mahatransco from "../assets/webp-images/logos/maha-transco.webp";
import ntpc from "../assets/webp-images/logos/ntpc.webp";
import punjab from "../assets/webp-images/logos/punjab-state-electricity.webp";
import reliance from "../assets/webp-images/logos/reliance.webp";
import rvunl from "../assets/webp-images/logos/rvunl.webp";
import tata from "../assets/webp-images/logos/tata-power.webp";
import tneb from "../assets/webp-images/logos/tneb.webp";

export default function ClientsSlider() {
  const clients = [
    { name: "Bihar Electricity Board", logo: bihar },
    { name: "Damodar Valley Corporation", logo: dvc },
    { name: "GSECL", logo: gsecl },
    { name: "KPCL", logo: kpcl },
    { name: "MahaTransco", logo: mahatransco },
    { name: "NTPC", logo: ntpc },
    { name: "Punjab Electricity Board", logo: punjab },
    { name: "Reliance Power", logo: reliance },
    { name: "RVUNL", logo: rvunl },
    { name: "Tata Power", logo: tata },
    { name: "TNEB", logo: tneb },
  ];

  return (
    <section className="py-24 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by Leading Power Companies
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Golden Edge Engineering has successfully executed projects for major
          power utilities and infrastructure companies across India.
        </p>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 md:gap-14 animate-scroll items-center will-change-transform">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-12 md:h-14 w-auto object-contain transition duration-300 md:grayscale md:opacity-70 md:hover:opacity-100 md:hover:grayscale-0 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
