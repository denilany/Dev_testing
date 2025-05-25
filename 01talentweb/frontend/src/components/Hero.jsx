// File: components/Hero.jsx
import Button from './Button.jsx';
// import hero_team from "../assets/hero_team.JPG";

export default function Hero() {
  return (
    <section className="relative  h-[85vh] small-phones:h-[100vh] overflow-visible">
  {/* Background image for desktop */}
      <img
        src="/static/images/hero_team_desktop.JPG"
        alt="Team"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Background image for mobile */}
      <img
        src="/static/images/hero_team_mobile.JPG" 
        alt="Team Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay for desktop (semi-transparent black) */}
      <div className="hidden md:block absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />

      {/* Overlay for mobile (bottom-heavy gradient) */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />



  {/* foreground content */}
  <div className="relative z-20 flex items-center justify-start h-full text-white">
  <div className="px-6 text-left ml-10 small-phones:ml-0">
    <h1 className="text-[20px] md:text-2xl lg:text-[40px] md:font-bold  xl:text-[58px] 2xl:text-[60px] ultra-large:7xl font-bold mb-4 lg:leading-[120%] 2xl:leading-[120%] 2xl:tracking-[2%]">
      PROVIDING YOU WITH THE <span className="text-[--color-hero-text] ">BEST TECH TALENT</span> IN KENYA
    </h1>
    <p className="mb-6 text-[12px] md:text-base lg:text-[25px] xl:text-[30px] 2xl:text-[32px] lg:leading-[120%] ultra-large:3xl ultra-xl:6xl">
      We are a software talent agency that is addressing the global need for top tech talent by transforming access to high-tech jobs.
    </p>
    <Button
        className="md:w-[240px] md:h-[45px] small-phones:w-[180px] small-phones:h-[35px] lg:w-[290px] lg:h-[50px] 2xl:w-[290px] 2xl:h-[50px] flex justify-center"
    >Hire Here</Button>
  </div>
</div>

</section>

  );
}