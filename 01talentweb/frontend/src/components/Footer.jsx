import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-primary-500] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column - Statement & Copyright */}
        <div className="md:col-span-1 text-sm leading-relaxed">
          <p className="mb-6">
            Cha mkuu mwanafuu ha na akili hu, Cha mwanafuu mkuu hu na akili ha.
          </p>
          <p className="font-semibold">Copyright ©{currentYear} 01Talent</p>
        </div>

        {/* Middle Columns - Navigation */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
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
        <div>
          <h4 className="font-semibold mb-4">Join our Newsletter</h4>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[--color-primary-500] font-semibold rounded hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[FaFacebook, FaLinkedin, FaTwitter].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 rounded-full bg-white text-[--color-primary-500] hover:bg-gray-100">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white border-opacity-20 py-6 mt-6 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <img src="/logo-white.svg" alt="01Talent Logo" className="h-6" />
            <span>Talent Kenya</span>
          </div>
          <div className="flex items-center gap-6">
            <span>📍 Lake Basin Mall - Kisumu - Vihiga Road</span>
            <a href="mailto:info@zone01Kisumu.ke" className="hover:underline">
              ✉️ info@zone01Kisumu.ke
            </a>
            <a href="tel:+25412345678" className="hover:underline">
              📞 +25412345678
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
