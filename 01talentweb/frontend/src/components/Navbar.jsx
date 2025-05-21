import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import logoWhite from "/static/images/01talent_hero_logo_white.svg"; // Path to your white logo
import logoBlack from "/static/images/01talent_hero_logo_black.svg"; // Path to your black logo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust the scroll threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorClass = scrolled ? "text-black" : "text-white";
  const logoSrc = scrolled ? logoBlack : logoWhite;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <img src={logoSrc} alt="Logo" className="h-12 md:h-14" />
        </div>
        <ul className={`flex space-x-12 font-medium text-base md:text-lg lg:text-xl ${textColorClass}`}>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>Home</a></li>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>Services</a></li>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>Talents</a></li>
          <li><a href="#" className={`hover:text-blue-700 ${textColorClass}`}>About Us</a></li>
        </ul>
        <Button textColor={scrolled ? "text-black" : "text-white"} bgColor="bg-blue-600" hoverBgColor="hover:bg-blue-700">Hire Here</Button>
      </div>
    </nav>
  );
}