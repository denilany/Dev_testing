import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or any other icon set
import Button from './Button.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const textColorClass = scrolled ? "text-black" : "text-white";
  const logoSrc = scrolled
    ? "/static/images/01talent_hero_logo_black.svg"
    : "/static/images/white-logo.png";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoSrc} alt="Logo" className="h-12 md:h-14" />
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 font-medium text-base md:text-lg lg:text-xl ${textColorClass}`}>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>Home</a></li>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>Services</a></li>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>Talents</a></li>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>About Us</a></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            textColor={scrolled ? "text-black" : "text-white"}
            bgColor="bg-blue-600"
            hoverBgColor="hover:bg-blue-700"
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
            <li><a href="#" className="hover:text-blue-700">Home</a></li>
            <li><a href="#" className="hover:text-blue-700">Services</a></li>
            <li><a href="#" className="hover:text-blue-700">Talents</a></li>
            <li><a href="#" className="hover:text-blue-700">About Us</a></li>
          </ul>
          <div className="pt-4">
            <Button
              textColor="text-white"
              bgColor="bg-blue-600"
              hoverBgColor="hover:bg-blue-700"
              fullWidth
            >
              Hire Here
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
