import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import hero_logo from "../assets/01talent_hero_logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust the scroll threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <img src={hero_logo} alt="Logo" className="h-12 md:h-14" />
        </div>
        <ul className="flex space-x-12 text-white font-medium text-base md:text-lg lg:text-xl">
          <li><a href="#" className="hover:text-blue-700">Home</a></li>
          <li><a href="#" className="hover:text-blue-700">Services</a></li>
          <li><a href="#" className="hover:text-blue-700">Talents</a></li>
          <li><a href="#" className="hover:text-blue-700">About Us</a></li>
        </ul>
        <Button>Hire Here</Button>
      </div>
    </nav>
  );
}
