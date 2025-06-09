import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or any other icon set
import Button from './Button.jsx';
import { Container } from './Layout.jsx';
// import { Link } from '@inertiajs/inertia-react';



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const mainEl = document.querySelector('main');
  const handleScroll = () => {
    if (mainEl) {
      setScrolled(mainEl.scrollTop > 50);
    }
  };

  mainEl?.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => mainEl?.removeEventListener('scroll', handleScroll);
}, []);


  const toggleMenu = () => setMenuOpen(!menuOpen);

  const textColorClass = scrolled ? "text-black" : "text-white";
  const logoSrc = scrolled
    ? "/static/images/01talent_hero_logo_black.svg"
    : "/static/images/white-logo.png";

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
    <Container>

      <div className="flex justify-between items-center py-4 px-6 md:px-10 ultra-xl:max-w-screen">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoSrc} alt="Logo" className="h-8 md:h-8 xl:h-12 ultra-large:h-18" />
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 font-medium text-base md:text-base lg:text-xl  xl:text-2xl 2xl:text-3xl ultra-large:text-2xl ultra-xl:text-3xl ${textColorClass}`}>
          <li><a href="/" className={`hover:text-blue-500 ${textColorClass}`}>Home</a></li>
          <li><a href="#" className={`hover:text-blue-500 ${textColorClass}`}>Services</a></li>
          <li><a href="/talent" className={`hover:text-blue-500 ${textColorClass}`}>Talents</a></li>
          {/* <Link href="/talents" className={`hover:text-blue-500 ${textColorClass}`}>
            Talents
          </Link> */}

          <li><a href="#" className={`hover:text-blue-500 ${textColorClass}`}>About Us</a></li>
        </ul>

        {/* Desktop Button */}
        {/* <div className="hidden md:block">
          <Button
            className="md:h-[36px] lg:w-[150px] lg:h-[40px] xl:text-[16px] 2xl:w-[200px] 2xl:h-[40px] 2xl:text-sm ultra-large:text-2xl ultra-xl:text-xl flex justify-center"
            textColor={scrolled ? "text-black" : "text-white"}
            style={{
              backgroundColor: 'var(--color-primary-300)',
              color: '#FFFFFF',
              padding: '12px 40px',
              width: '100%',
              maxWidth: '200px',
              height: '49px',
            }}
            
          >
            Hire Here
          </Button>
        </div> */}
          <div className="hidden md:block">
          <Button
            // className="hover:bg-[#284B81] bg-[var(--color-primary-300)] md:h-[36px] lg:w-[150px] lg:h-[40px] 2xl:w-[200px] 2xl:h-[40px] flex justify-center"
            className="border-[1.5px] border-[var(--color-primary-300)] text-white bg-[var(--color-primary-300)] hover:bg-[#284B81] whitespace-nowrap
            px-6 py-3 h-12 rounded-lg
            sm:px-8 sm:py-3.5 sm:h-14 sm:rounded-lg
            md:px-10 md:py-4 md:h-16"
            textColor={scrolled ? "text-black" : "text-white"}
            // style={{
            //   color: '#FFFFFF',
            //   padding: '12px 40px',
            //   width: '100%',
            //   maxWidth: '200px',
            //   height: '49px',
            // }}
            style={{ minWidth: 'fit-content' }}

         
          >
            Hire Here
          </Button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? (
            <X className={`${textColorClass} h-8 w-8 cursor-pointer`} />
          ) : (
            <Menu className={`${textColorClass} h-8 w-8 cursor-pointer`} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden bg-white shadow-md px-6 py-4 space-y-4 transition-all duration-300`}>
          <ul className="flex flex-col space-y-4 font-medium text-base text-black">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Talents</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
          </ul>
          <div className="pt-4">
            <Button
              textColor="text-white"
              // bgColor="bg-blue-600"
              // hoverBgColor="hover:bg-blue-700"
              // className="2xl:w-[200px] 2xl:h-[65px] hover:bg-[#284B81] bg-[var(--color-primary-300)]"
              className="border-[1.5px] border-[var(--color-primary-300)] text-white bg-[var(--color-primary-300)] hover:bg-[#284B81] whitespace-nowrap
                       px-6 py-3 h-12 rounded-lg
                       sm:px-8 sm:py-3.5 sm:h-14 sm:rounded-lg
                       md:px-10 md:py-4 md:h-16"
              // fullWidth
            //   style={{
            //   color: '#FFFFFF',
            //   padding: '12px 40px',
            //   width: '100%',
            //   maxWidth: '200px',
            //   height: '49px',
            // }}
            style={{ minWidth: 'fit-content' }}
            >
              Hire Here
            </Button>
          </div>
        </div>
      )}
          </Container>

    </nav>

  );
}
