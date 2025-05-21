import omegaMillion from "../assets/OmegaMillion.svg";
import harvest from "../assets/Harvest.svg";
import edgeKart from "../assets/EdgeKart.svg";
import pastelCo from "../assets/Pastel&Co..svg";
import wheelApp from "../assets/Wheelapp.png";

// File: components/CompanyLogos.jsx
const logos = [omegaMillion, harvest, edgeKart, pastelCo, wheelApp];

export default function CompanyLogos() {
  return (
    <section className="bg-white py-8 overflow-hidden">
                <div className="max-w-7xl ml-10 mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

          <div className="md:w-1/5 text-left md:ml-0">
            <h2 className="text-lg font-semibold text-gray-700">
              Our Talent is<br />
              trusted by local<br />
              and global<br />
              companies
            </h2>
          </div>
        <div className="w-full overflow-hidden">
          <div
            className="flex animate-marquee"
            style={{
              width: 'max-content',
              animation: 'marquee 10s linear infinite',
            }}
          >
            {/* Repeat logos twice for seamless looping */}
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-12 md:h-14 mx-5"
              />
            ))}
          </div>

          {/* Inline keyframes */}
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
        </div>



      </div>
    </section>
  );
}


