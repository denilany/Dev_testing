import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-primary-500] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0">
        {/* Left Column - Statement & Copyright */}
        <div className="md:col-span-1 text-sm leading-relaxed">
          <p className="mb-6">
            Cha mkuu mwanafuu ha na akili hu, Cha mwanafuu mkuu hu na akili ha.
          </p>
        </div>

        {/* Middle Columns - Navigation */}
        <div className="md:col-span-2 grid grid-cols-2">
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/talent" className="hover:underline">Talent</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column - Newsletter */}
        <div className="mt-10 md:mt-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-3">
              <FaLocationDot className="mt-1 flex-shrink-0" />
              <span>Lake Basin Mall -<br/> Kisumu - Vihiga Road</span>
            </div>
            <div className="flex items-center space-x-3">
              <span>✉️</span>
              <a href="mailto:info@zone01Kisumu.ke" className="hover:underline">
                info@zone01Kisumu.ke
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="w-4 h-4" />
              <a href="tel:+25412345678" className="hover:underline">
                +254 123 456 78
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-5">
            {[FaFacebook, FaLinkedin, FaTwitter].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="p-1.5 rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors duration-200 hover:border-[--color-primary-300] hover:text-[--color-primary-300]"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 mt-6 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-white border-opacity-20 pt-6">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex items-center gap-4">
              <img src="/static/images/white-logo.png" alt="01Talent Logo" className="h-9" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-y-6">
              <p className="text-white/70 text-center">
                © {currentYear} 01Talent. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
