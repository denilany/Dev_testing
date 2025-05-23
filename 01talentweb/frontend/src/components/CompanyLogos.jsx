import omegaMillion from "../assets/OmegaMillion.svg";
import harvest from "../assets/Harvest.svg";
import edgeKart from "../assets/EdgeKart.svg";
import pastelCo from "../assets/Pastel&Co..svg";
import wheelApp from "../assets/Wheelapp.png";

// File: components/CompanyLogos.jsx
// const logos = [omegaMillion, harvest, edgeKart, pastelCo, wheelApp];
const logos = [
  "/static/images/OmegaMillion.svg",
  "/static/images/Harvest.svg",
  "/static/images/EdgeKart.svg",
  "/static/images/Pastel&Co..svg",
  "/static/images/Wheelapp.png"

];

export default function CompanyLogos() {
  return (
    <section className="bg-white py-4 overflow-hidden">
        <div className="xl:mb-5 xl:p-6 ml-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-6">

          <div className="md:w-1/5 text-left md:ml-0 pt-6">
            <h2 className="text-md font-semibold text-gray-700">
              Our Talent is
              trusted by local
              and global
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
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-8 md:h-10 mx-5"
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


