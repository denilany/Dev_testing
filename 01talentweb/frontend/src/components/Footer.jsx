import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-primary-500] text-white ">
      {/* Main Footer Content */}
      <div className="max-w-[100rem] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0">
        {/* Left Column - Statement & Copyright */}
        <div className="md:col-span-1">
          <p className="text-body-m leading-body-m mb-8">
            Cha mkuu mwanafuu ha <br/>na akili hu, Cha mwanafuu<br/> mkuu hu na akili ha.
          </p>
        </div>

        {/* Middle Columns - Navigation */}
        <div className="md:col-span-2 grid grid-cols-2">
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-body-m text-[--color-primary-0]">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/talent" className="hover:underline">Talent</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-body-m text-[--color-primary-0]">
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column - Contact & Social */}
        <div className="mt-12 md:mt-0">
          <div className="flex flex-col space-y-6 items-center md:items-start">
            <div className="flex items-start space-x-3 text-body-m text-[--color-primary-0] max-w-max">
              <FaLocationDot className="mt-1 flex-shrink-0" />
              <span>Lake Basin Mall -<br/> Kisumu - Vihiga Road</span>
            </div>
            <div className="flex items-center space-x-3 text-body-m">
              <span className="text-[--color-primary-0]">✉️</span>
              <a href="mailto:info@zone01Kisumu.ke" className="text-[--color-primary-0] hover:text-white transition-colors">
                info@zone01Kisumu.ke
              </a>
            </div>
            <div className="flex items-center space-x-3 text-body-m">
              <FaPhone className="w-4 h-4 text-[--color-primary-0]" />
              <a href="tel:+25412345678" className="text-[--color-primary-0] hover:text-white transition-colors">
                +254 123 456 78
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3 mt-10">
            {[FaFacebook, FaLinkedin, FaTwitter].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="p-1.5 rounded-full border-2 border-white/50 text-white/80 hover:bg-white/10 transition-colors duration-200 hover:border-[--color-primary-300] hover:text-[--color-primary-300]"
                aria-label={`${Icon.displayName} link`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 px-6 mt-6 text-sm">
        <div className="max-w-[100rem] mx-auto">
          <div className="border-t border-white border-opacity-20 pt-6">
            <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
              <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                <img src="/static/images/white-logo.png" alt="01Talent Logo" className="h-9" />
              </div>
          </div>
          <div className="w-full flex flex-col items-center space-y-6">
              <p className="text-[--color-primary-0] text-center">
                Copyright @01Talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
