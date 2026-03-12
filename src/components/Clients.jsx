import apgenco from "../assets/logos/apgenco.jpg";
import bihar from "../assets/logos/bihar-electricity-board.jpg";
import dainik from "../assets/logos/dainik-bhaskar-power.jpg";
import dvc from "../assets/logos/damodar-valley-corporation.jpg";
import gsecl from "../assets/logos/gsecl.png.jpg";
import ipgcl from "../assets/logos/ipgcl.png.jpg";
import jhabua from "../assets/logos/jhabua-power.jpg";
import jsw from "../assets/logos/jsw-energy.png";
import kbun from "../assets/logos/kbun.jpg";
import kpcl from "../assets/logos/kpcl.png";
import lanco from "../assets/logos/lanco.png";
import mahatransco from "../assets/logos/maha-transco.png";
import ntpc from "../assets/logos/ntpc.png";
import pspcl from "../assets/logos/pspcl.jpg";
import punjab from "../assets/logos/punjab-state-electricity.jpg";
import reliance from "../assets/logos/reliance.png";
import rvunl from "../assets/logos/rvunl.jpg";
import tata from "../assets/logos/tata-power.png";
import tneb from "../assets/logos/tneb.png";
import uprvunl from "../assets/logos/uprvunl.jpg";

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
