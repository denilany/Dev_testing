import Button from './Button.jsx';

export default function Hero() {
  return (
    <section className="relative h-auto md:h-[85vh] xl:h-[90vh] 2xl:h-screen overflow-visible">
      {/* Background image */}
      <img
        src="/static/images/hero_team.JPG"
        alt="Team"
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 flex items-center justify-center md:justify-start h-full text-white">
        <div className="max-w-6xl w-full px-6 text-center md:text-left md:ml-10 py-16 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] 2xl:text-[72px] font-bold mb-4 leading-tight">
            PROVIDING YOU WITH THE <span className="text-blue-600">BEST TECH TALENT</span> IN KENYA
          </h1>
          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[26px] 2xl:text-[30px]">
            We are a software talent agency that is addressing the global need for top tech talent by transforming access to high-tech jobs.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button>Hire Here</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
