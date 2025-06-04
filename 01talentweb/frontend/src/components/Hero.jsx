// File: components/Hero.jsx
import Button from './Button.jsx';
// import hero_team from "../assets/hero_team.JPG";

export default function Hero() {
  return (
    <section className="relative  h-[85vh]  overflow-visible">
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
  <div className="lg:max-w-2xl  xl:max-w-3xl ultra-large:max-w-5xl mx-auto px-6 text-left ml-10 small-phones:ml-0">
    <h1 className="text-[20px] sm:text-2xl md:text-2xl lg:text-[40px] md:font-bold  xl:text-3xl 2xl:text-5xl ultra-large:text-5xl ultra-xl:text-7xl font-bold mb-4 lg:leading-[120%] 2xl:leading-[120%] 2xl:tracking-[2%]">
      PROVIDING YOU WITH THE <span className="text-[--color-hero-text] ">BEST TECH TALENT</span> IN KENYA
    </h1>
    <p className="mb-6 text-[12px] sm:text-xl md:text-base lg:text-lg xl:text-1xl 2xl:text-2xl lg:leading-[120%]  ultra-large:text-xl ultra-xl:text-4xl">
      We are a software talent agency that is addressing the global need for top tech talent by transforming access to high-tech jobs.
    </p>
    {/* <Button
        className="md:w-[240px] md:h-[45px] sm:w-[250px] sm:h-[50px] large-phones:w-[190px] large-phones:h-[35px] small-phones:w-[180px] small-phones:h-[35px] lg:w-[290px] lg:h-[50px] 2xl:w-[290px] 2xl:h-[50px] ultra-large:w-[290px] ultra-large:h-[50px] ultra-xl:w-[320px] flex justify-center"
    >Hire Here
    </Button> */}
     <div className="relative mt-8">
      <Button
        onClick={() => {}}
        style={{
          // backgroundColor: 'var(--color-primary-300)',
          color: '#FFFFFF',
          padding: '22.92px 91.69px',
          width: '100%',
          maxWidth: '377.24px',
          height: '75.69px'
        }}
        className="hover:bg-[#284B81] bg-[var(--color-primary-300)] transition-colors duration-300 md:text-xl lg:text-2xl xl:text-3xl"
      >
        Hire Here
      </Button>
    </div>
  </div>
</div>

</section>

  );
}