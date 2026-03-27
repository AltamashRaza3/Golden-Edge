import apgenco from "../assets/webp-images/logos/apgenco.webp";
import bihar from "../assets/webp-images/logos/bihar-electricity-board.webp";
import dainik from "../assets/webp-images/logos/dainik-bhaskar-power.webp";
import dvc from "../assets/webp-images/logos/damodar-valley-corporation.webp";
import gsecl from "../assets/webp-images/logos/gsecl.webp";
import jhabua from "../assets/webp-images/logos/jhabua-power.webp";
import jsw from "../assets/webp-images/logos/jsw-energy.webp";
import kbun from "../assets/webp-images/logos/kbun.webp";
import kpcl from "../assets/webp-images/logos/kpcl.webp";
import lanco from "../assets/webp-images/logos/lanco.webp";
import mahatransco from "../assets/webp-images/logos/maha-transco.webp";
import ntpc from "../assets/webp-images/logos/ntpc.webp";
import pspcl from "../assets/webp-images/logos/pspcl.webp";
import punjab from "../assets/webp-images/logos/punjab-state-electricity.webp";
import reliance from "../assets/webp-images/logos/reliance.webp";
import rvunl from "../assets/webp-images/logos/rvunl.webp";
import tata from "../assets/webp-images/logos/tata-power.webp";
import tneb from "../assets/webp-images/logos/tneb.webp";
import uprvunl from "../assets/webp-images/logos/uprvunl.webp";

const governmentClients = [
  { name: "APGENCO", logo: apgenco },
  { name: "Bihar State Electricity Board", logo: bihar },
  { name: "Damodar Valley Corporation", logo: dvc },
  { name: "GSECL", logo: gsecl },
  { name: "Jhabua Power", logo: jhabua },
  { name: "Karnataka Power Corporation", logo: kpcl },
  { name: "KBUN", logo: kbun },
  { name: "MahaTransco", logo: mahatransco },
  { name: "NTPC", logo: ntpc },
  { name: "PSPCL", logo: pspcl },
  { name: "Punjab State Electricity Board", logo: punjab },
  { name: "RVUNL", logo: rvunl },
  { name: "TNEB", logo: tneb },
  { name: "UPRVUNL", logo: uprvunl },
  { name: "Dainik Bhaskar Power", logo: dainik },
];

const privateClients = [
  { name: "NTPC", logo: ntpc },
  { name: "Tata Power", logo: tata },
  { name: "JSW Energy", logo: jsw },
  { name: "Reliance Power", logo: reliance },
  { name: "Lanco", logo: lanco },
];

export default function Clients() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Government Clients */}

        <h2 className="text-3xl font-bold text-center mb-4">
          Government Sector Clients
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Golden Edge Engineering has successfully executed projects for major
          government power utilities and public sector organizations across
          India.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          {governmentClients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-16 object-contain md:grayscale md:opacity-70 md:hover:opacity-100 md:hover:grayscale-0 transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Private Clients */}

        <h2 className="text-3xl font-bold text-center mb-4">
          Private Sector Clients
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We have partnered with leading private sector power generation
          companies and infrastructure developers across India.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
          {privateClients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-16 object-contain md:grayscale md:opacity-70 md:hover:opacity-100 md:hover:grayscale-0 transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
