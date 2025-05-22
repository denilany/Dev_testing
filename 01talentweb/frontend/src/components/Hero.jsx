// File: components/Hero.jsx
import Button from './Button.jsx';
// import hero_team from "../assets/hero_team.JPG";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-visible">
  {/* Background image for desktop */}
      <img
        src="/static/images/hero_team_desktop.JPG"
        alt="Team"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Background image for mobile */}
      <img
        src="/static/images/hero_team_desktop.JPG" 
        alt="Team Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay for desktop (semi-transparent black) */}
      <div className="hidden md:block absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />

      {/* Overlay for mobile (bottom-heavy gradient) */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />



  {/* foreground content */}
  <div className="relative z-20 flex items-center justify-start h-full text-white">
  <div className="max-w-4xl px-6 text-left ml-10">
    <h1 className="text-[20px] md:text-3xl font-bold mb-4 leading-tight">
      PROVIDING YOU WITH THE <span className="text-blue-600">BEST TECH TALENT</span> IN KENYA
    </h1>
    <p className="mb-6 text-[12px] md:text-[20px]">
      We are a software talent agency that is addressing the global need for top tech talent by transforming access to high-tech jobs.
    </p>
    <Button>Hire Here</Button>
  </div>
</div>

</section>

  );
}