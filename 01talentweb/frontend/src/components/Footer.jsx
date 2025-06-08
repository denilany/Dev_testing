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
            <div className="w-4/5 flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
                <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                  <img src="/static/images/white-logo.png" alt="01Talent Logo" className="h-20" />
                </div>
            </div>
            <p className="font-roboto text-body-xs leading-body-xs mb-8 text-center md:text-left">
              Cha mkuu mwanafuu ha <br/>na akili hu, Cha mwanafuu<br/> mkuu hu na akili ha.
            </p>
          </div>

          {/* Combined Navigation and Links Container */}
          <div className="flex flex-[2] flex-nowrap">
            <div className="flex w-full">
              {/* Column 2 - Navigation */}
            <div className="flex-1 min-w-[150px] px-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-roboto text-body-m font-bold mb-4">Navigation</h4>
                  <ul className="space-y-2 text-body-xs font-normal font-roboto text-[--color-primary-0]">
                    <li><a href="/about" className="hover:underline">About Us</a></li>
                    <li><a href="/services" className="hover:underline">Services</a></li>
                    <li><a href="/talent" className="hover:underline">Talent</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
              </div>

              {/* Column 3 - Links */}
            <div className="flex-1 min-w-[150px] px-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-roboto text-body-m font-bold mb-4">Links</h4>
                  <ul className="space-y-2 text-body-xs font-normal font-roboto text-[--color-primary-0]">
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
              <div className="flex items-start space-x-3 text-body-xs font-roboto text-[--color-primary-0] max-w-max">
                <FaLocationDot className="mt-1 flex-shrink-0" />
                <span>Lake Basin Mall -<br/> Kisumu - Vihiga Road</span>
              </div>
              <div className="flex items-center space-x-3 text-body-xs font-roboto">
                <span className="text-[--color-primary-0]">✉️</span>
                <a href="mailto:info@zone01Kisumu.ke" className="text-[--color-primary-0] hover:text-white transition-colors">
                  info@zone01Kisumu.ke
                </a>
              </div>
              <div className="flex items-center space-x-3 text-body-xs font-roboto">
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
      
      <Container className="py-6 text-sm border-t border-white sm:flex-row justify-center items-center">
        <div className="w-full pt-6 sm:pt-0 space-y-6 text-center">
          <p className="font-roboto text-[--color-primary-0] font-bold text-body-xs">
            Copyright @01Talent.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
