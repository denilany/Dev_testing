import Button from './Button.jsx';
import { Container } from './Layout.jsx';


export default function Hero({desktopBg, mobileBg, title, description, button = null}) {
  return (

    <section className="relative  h-[85vh]  overflow-visible">
  {/* Background image for desktop */}
      <img
        // src="/static/images/hero_team_desktop.JPG"
        src={desktopBg}
        alt="Team"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-[center_10%] z-0"
      />

      {/* Background image for mobile */}
      <img
        
        src={mobileBg}
        // src="/static/images/hero_team_mobile.JPG" 
        alt="Team Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay for desktop (semi-transparent black) */}
      <div className="hidden md:block absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />

      {/* Overlay for mobile (bottom-heavy gradient) */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />



  {/* foreground content */}
  <div className="relative z-20 flex items-center justify-start h-full text-white">
  <Container>

  <div className="lg:max-w-2xl  xl:max-w-3xl ultra-large:max-w-5xl mx-auto text-left ml-10 small-phones:ml-0">
    <h1 className="text-[20px] sm:text-2xl md:text-2xl lg:text-5xl md:font-bold  xl:text-6xl 2xl:text-7xl ultra-large:text-7xl ultra-xl:text-8xl font-bold mb-4 lg:leading-[120%] 2xl:leading-[120%] 2xl:tracking-[2%]">
      {/* PROVIDING YOU WITH THE <span className="text-[--color-hero-text] ">BEST TECH TALENT</span> IN KENYA */}
      {title}
    </h1>
    <p className="mb-6 text-[12px] sm:text-xl md:text-base lg:text-lg xl:text-1xl 2xl:text-2xl lg:leading-[120%]  ultra-large:text-xl ultra-xl:text-4xl">
      {/* We are a software talent agency that is addressing the global need for top tech talent by transforming access to high-tech jobs. */}
      {description}
    </p>

    {/* Optional button prop */}
          {button && (
            <div className="relative mt-8">
              {button}
            </div>
          )}

  
  </div>
  </Container>

</div>
</section>

  );
}