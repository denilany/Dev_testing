import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Container } from './Layout.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-primary-500] text-white">
      {/* Main Footer Content */}
      <Container className="py-12">
        <div className="flex flex-col md:flex-row flex-wrap gap-8">
          {/* Column 1 - Statement */}
          <div className="flex-1 min-w-[300px] pr-4 space-y-10">
            <div className="flex justify-center md:justify-start w-full sm:w-auto">
              <img src="/static/images/white-logo.png" alt="01Talent Logo" className="h-16 md:h-20" />
            </div>
            <p className="font-sans text-body-m mb-8 text-center md:text-left">
              <span className="block md:hidden text-left pl-[3rem]">Cha mkuu mwanafuu ha na akili hu, Cha mwanafuu mkuu hu na akili ha.</span>
              <span className="hidden md:block">
                Cha mkuu mwanafuu ha <br/>na akili hu, Cha mwanafuu<br/> mkuu hu na akili ha.
              </span>
            </p>
          </div>

          {/* Combined Navigation and Links Container */}
          <div className="flex flex-[2] flex-nowrap">
            <div className="flex w-full">
              {/* Column 2 - Navigation */}
            <div className="flex-1 min-w-[150px] px-4">
                <div className="text-center md:text-left">
                  <h3 className="font-sans text-h3 font-bold mb-4">Navigation</h3>
                  <ul className="space-y-2 text-body-m font-normal font-sans text-[--color-primary-0]">
                    <li><a href="/about" className="hover:underline">About Us</a></li>
                    <li><a href="/services" className="hover:underline">Services</a></li>
                    <li><a href="/talent" className="hover:underline">Talent</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
              </div>

              {/* Column 3 - Links */}
            <div className="flex-1 min-w-[150px] px-4">
                <div className="text-center md:text-left">
                  <h3 className="font-sans text-h3 font-bold mb-4">Links</h3>
                  <ul className="space-y-2 text-body-m font-normal font-sans text-[--color-primary-0]">
                    <li><a href="/faq" className="hover:underline">FAQs</a></li>
                    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="/blog" className="hover:underline">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="flex-initial w-auto md:ml-auto px-4">
            <div className="flex flex-col space-y-6 items-center md:items-start">
              <div className="flex items-start space-x-3 text-body-m font-sans text-[--color-primary-0] max-w-max">
                <FaLocationDot className="mt-1 flex-shrink-0" />
                <span>
                  <span className="block md:hidden">Lake Basin Mall - Kisumu - Vihiga Road</span>
                  <span className="hidden md:block">Lake Basin Mall -<br/> Kisumu - Vihiga Road</span>
                </span>
              </div>
              <div className="flex items-center space-x-3 text-body-m font-sans">
                <span className="text-[--color-primary-0]">✉️</span>
                <a href="mailto:info@zone01Kisumu.ke" className="text-[--color-primary-0] hover:text-white transition-colors">
                  info@zone01Kisumu.ke
                </a>
              </div>
              <div className="flex items-center space-x-3 text-body-m font-sans">
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
      </Container>

      {/* Footer Bottom */}
      
      <Container className="py-6 border-t border-white justify-center items-center">
        <div className="w-full pt-6 sm:pt-0 space-y-6 text-center">
          <p className="font-sans text-[--color-primary-0] font-bold text-body-m">
            Copyright @01Talent.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
